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
        "word": "hoodle-core"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Accessor",
          "name": "Accessor",
          "package": "hoodle-core",
          "source": "src/Hoodle-Accessor.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Accessor",
          "module": "Hoodle.Accessor",
          "name": "Accessor",
          "package": "hoodle-core",
          "partial": "Accessor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Accessor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eapply an action to all canvases \n\u003c/p\u003e",
          "module": "Hoodle.Accessor",
          "name": "applyActionToAllCVS",
          "package": "hoodle-core",
          "signature": "(CanvasId -\u003e MainCoroutine ()) -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Accessor.html#applyActionToAllCVS",
          "type": "function"
        },
        "index": {
          "description": "apply an action to all canvases",
          "hierarchy": "Hoodle Accessor",
          "module": "Hoodle.Accessor",
          "name": "applyActionToAllCVS",
          "normalized": "(CanvasId-\u003eMainCoroutine())-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Action To All CVS",
          "signature": "(CanvasId-\u003eMainCoroutine())-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Accessor.html#v:applyActionToAllCVS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Accessor",
          "name": "changeCurrentCanvasId",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e MainCoroutine HoodleState",
          "source": "src/Hoodle-Accessor.html#changeCurrentCanvasId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Accessor",
          "module": "Hoodle.Accessor",
          "name": "changeCurrentCanvasId",
          "normalized": "CanvasId-\u003eMainCoroutine HoodleState",
          "package": "hoodle-core",
          "partial": "Current Canvas Id",
          "signature": "CanvasId-\u003eMainCoroutine HoodleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Accessor.html#v:changeCurrentCanvasId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Accessor",
          "name": "getCanvasGeometryCvsId",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e HoodleState -\u003e IO CanvasGeometry",
          "source": "src/Hoodle-Accessor.html#getCanvasGeometryCvsId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Accessor",
          "module": "Hoodle.Accessor",
          "name": "getCanvasGeometryCvsId",
          "normalized": "CanvasId-\u003eHoodleState-\u003eIO CanvasGeometry",
          "package": "hoodle-core",
          "partial": "Canvas Geometry Cvs Id",
          "signature": "CanvasId-\u003eHoodleState-\u003eIO CanvasGeometry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Accessor.html#v:getCanvasGeometryCvsId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Accessor",
          "name": "getCurrentPageCurr",
          "package": "hoodle-core",
          "signature": "MainCoroutine (Page EditMode)",
          "source": "src/Hoodle-Accessor.html#getCurrentPageCurr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Accessor",
          "module": "Hoodle.Accessor",
          "name": "getCurrentPageCurr",
          "package": "hoodle-core",
          "partial": "Current Page Curr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Accessor.html#v:getCurrentPageCurr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Accessor",
          "name": "getCurrentPageCvsId",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e MainCoroutine (Page EditMode)",
          "source": "src/Hoodle-Accessor.html#getCurrentPageCvsId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Accessor",
          "module": "Hoodle.Accessor",
          "name": "getCurrentPageCvsId",
          "normalized": "CanvasId-\u003eMainCoroutine(Page EditMode)",
          "package": "hoodle-core",
          "partial": "Current Page Cvs Id",
          "signature": "CanvasId-\u003eMainCoroutine(Page EditMode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Accessor.html#v:getCurrentPageCvsId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Accessor",
          "name": "getCurrentPageEitherFromHoodleModeState",
          "package": "hoodle-core",
          "signature": "CanvasInfo a -\u003e HoodleModeState -\u003e Either (Page EditMode) (Page SelectMode)",
          "source": "src/Hoodle-Accessor.html#getCurrentPageEitherFromHoodleModeState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Accessor",
          "module": "Hoodle.Accessor",
          "name": "getCurrentPageEitherFromHoodleModeState",
          "normalized": "CanvasInfo a-\u003eHoodleModeState-\u003eEither(Page EditMode)(Page SelectMode)",
          "package": "hoodle-core",
          "partial": "Current Page Either From Hoodle Mode State",
          "signature": "CanvasInfo a-\u003eHoodleModeState-\u003eEither(Page EditMode)(Page SelectMode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Accessor.html#v:getCurrentPageEitherFromHoodleModeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Accessor",
          "name": "getGeometry4CurrCvs",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e IO CanvasGeometry",
          "source": "src/Hoodle-Accessor.html#getGeometry4CurrCvs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Accessor",
          "module": "Hoodle.Accessor",
          "name": "getGeometry4CurrCvs",
          "normalized": "HoodleState-\u003eIO CanvasGeometry",
          "package": "hoodle-core",
          "partial": "Geometry Curr Cvs",
          "signature": "HoodleState-\u003eIO CanvasGeometry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Accessor.html#v:getGeometry4CurrCvs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Accessor",
          "name": "getPenType",
          "package": "hoodle-core",
          "signature": "MainCoroutine PenType",
          "source": "src/Hoodle-Accessor.html#getPenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Accessor",
          "module": "Hoodle.Accessor",
          "name": "getPenType",
          "package": "hoodle-core",
          "partial": "Pen Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Accessor.html#v:getPenType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Accessor",
          "name": "otherCanvas",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e [Int]",
          "source": "src/Hoodle-Accessor.html#otherCanvas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Accessor",
          "module": "Hoodle.Accessor",
          "name": "otherCanvas",
          "normalized": "HoodleState-\u003e[Int]",
          "package": "hoodle-core",
          "partial": "Canvas",
          "signature": "HoodleState-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Accessor.html#v:otherCanvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Accessor",
          "name": "rItmsInCurrLyr",
          "package": "hoodle-core",
          "signature": "MainCoroutine [RItem]",
          "source": "src/Hoodle-Accessor.html#rItmsInCurrLyr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Accessor",
          "module": "Hoodle.Accessor",
          "name": "rItmsInCurrLyr",
          "normalized": "MainCoroutine[RItem]",
          "package": "hoodle-core",
          "partial": "Itms In Curr Lyr",
          "signature": "MainCoroutine[RItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Accessor.html#v:rItmsInCurrLyr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset toggle UI button to the corresponding HoodleState \n\u003c/p\u003e",
          "module": "Hoodle.Accessor",
          "name": "setToggleUIForFlag",
          "package": "hoodle-core",
          "signature": "String-\u003e Simple Lens HoodleState Bool-\u003e HoodleState-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "set toggle UI button to the corresponding HoodleState",
          "hierarchy": "Hoodle Accessor",
          "module": "Hoodle.Accessor",
          "name": "setToggleUIForFlag",
          "normalized": "String-\u003eSimple Lens HoodleState Bool-\u003eHoodleState-\u003eIO Bool",
          "package": "hoodle-core",
          "partial": "Toggle UIFor Flag",
          "signature": "String-\u003eSimple Lens HoodleState Bool-\u003eHoodleState-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Accessor.html#v:setToggleUIForFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate flag in HoodleState when corresponding toggle UI changed \n\u003c/p\u003e",
          "module": "Hoodle.Accessor",
          "name": "updateFlagFromToggleUI",
          "package": "hoodle-core",
          "signature": "String-\u003e Simple Lens HoodleState Bool-\u003e MainCoroutine Bool",
          "type": "function"
        },
        "index": {
          "description": "update flag in HoodleState when corresponding toggle UI changed",
          "hierarchy": "Hoodle Accessor",
          "module": "Hoodle.Accessor",
          "name": "updateFlagFromToggleUI",
          "normalized": "String-\u003eSimple Lens HoodleState Bool-\u003eMainCoroutine Bool",
          "package": "hoodle-core",
          "partial": "Flag From Toggle UI",
          "signature": "String-\u003eSimple Lens HoodleState Bool-\u003eMainCoroutine Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Accessor.html#v:updateFlagFromToggleUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate state\n\u003c/p\u003e",
          "module": "Hoodle.Accessor",
          "name": "updateXState",
          "package": "hoodle-core",
          "signature": "(HoodleState -\u003e MainCoroutine HoodleState) -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Accessor.html#updateXState",
          "type": "function"
        },
        "index": {
          "description": "update state",
          "hierarchy": "Hoodle Accessor",
          "module": "Hoodle.Accessor",
          "name": "updateXState",
          "normalized": "(HoodleState-\u003eMainCoroutine HoodleState)-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "XState",
          "signature": "(HoodleState-\u003eMainCoroutine HoodleState)-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Accessor.html#v:updateXState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Config",
          "name": "Config",
          "package": "hoodle-core",
          "source": "src/Hoodle-Config.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Config",
          "module": "Hoodle.Config",
          "name": "Config",
          "package": "hoodle-core",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Config",
          "name": "emptyConfigString",
          "package": "hoodle-core",
          "signature": "String",
          "source": "src/Hoodle-Config.html#emptyConfigString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Config",
          "module": "Hoodle.Config",
          "name": "emptyConfigString",
          "package": "hoodle-core",
          "partial": "Config String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Config.html#v:emptyConfigString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Config",
          "name": "getMaxUndo",
          "package": "hoodle-core",
          "signature": "Config -\u003e IO (Maybe Int)",
          "source": "src/Hoodle-Config.html#getMaxUndo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Config",
          "module": "Hoodle.Config",
          "name": "getMaxUndo",
          "normalized": "Config-\u003eIO(Maybe Int)",
          "package": "hoodle-core",
          "partial": "Max Undo",
          "signature": "Config-\u003eIO(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Config.html#v:getMaxUndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Config",
          "name": "getPenDevConfig",
          "package": "hoodle-core",
          "signature": "Config -\u003e IO (Maybe String, Maybe String, Maybe String, Maybe String)",
          "source": "src/Hoodle-Config.html#getPenDevConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Config",
          "module": "Hoodle.Config",
          "name": "getPenDevConfig",
          "normalized": "Config-\u003eIO(Maybe String,Maybe String,Maybe String,Maybe String)",
          "package": "hoodle-core",
          "partial": "Pen Dev Config",
          "signature": "Config-\u003eIO(Maybe String,Maybe String,Maybe String,Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Config.html#v:getPenDevConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Config",
          "name": "getWidgetConfig",
          "package": "hoodle-core",
          "signature": "Config -\u003e IO (Bool, Bool)",
          "source": "src/Hoodle-Config.html#getWidgetConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Config",
          "module": "Hoodle.Config",
          "name": "getWidgetConfig",
          "normalized": "Config-\u003eIO(Bool,Bool)",
          "package": "hoodle-core",
          "partial": "Widget Config",
          "signature": "Config-\u003eIO(Bool,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Config.html#v:getWidgetConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Config",
          "name": "getXInputConfig",
          "package": "hoodle-core",
          "signature": "Config -\u003e IO Bool",
          "source": "src/Hoodle-Config.html#getXInputConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Config",
          "module": "Hoodle.Config",
          "name": "getXInputConfig",
          "normalized": "Config-\u003eIO Bool",
          "package": "hoodle-core",
          "partial": "XInput Config",
          "signature": "Config-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Config.html#v:getXInputConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Config",
          "name": "loadConfigFile",
          "package": "hoodle-core",
          "signature": "IO Config",
          "source": "src/Hoodle-Config.html#loadConfigFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Config",
          "module": "Hoodle.Config",
          "name": "loadConfigFile",
          "package": "hoodle-core",
          "partial": "Config File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Config.html#v:loadConfigFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Callback",
          "name": "Callback",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Callback.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Callback",
          "module": "Hoodle.Coroutine.Callback",
          "name": "Callback",
          "package": "hoodle-core",
          "partial": "Callback",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Callback.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Callback",
          "name": "allexceptionproc",
          "package": "hoodle-core",
          "signature": "SomeException -\u003e IO ()",
          "source": "src/Hoodle-Coroutine-Callback.html#allexceptionproc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Callback",
          "module": "Hoodle.Coroutine.Callback",
          "name": "allexceptionproc",
          "normalized": "SomeException-\u003eIO()",
          "package": "hoodle-core",
          "signature": "SomeException-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Callback.html#v:allexceptionproc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Callback",
          "name": "errorcall",
          "package": "hoodle-core",
          "signature": "ErrorCall -\u003e IO ()",
          "source": "src/Hoodle-Coroutine-Callback.html#errorcall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Callback",
          "module": "Hoodle.Coroutine.Callback",
          "name": "errorcall",
          "normalized": "ErrorCall-\u003eIO()",
          "package": "hoodle-core",
          "signature": "ErrorCall-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Callback.html#v:errorcall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Callback",
          "name": "eventHandler",
          "package": "hoodle-core",
          "signature": "MVar (Maybe (Driver e IO ())) -\u003e e -\u003e IO ()",
          "source": "src/Hoodle-Coroutine-Callback.html#eventHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Callback",
          "module": "Hoodle.Coroutine.Callback",
          "name": "eventHandler",
          "normalized": "MVar(Maybe(Driver a IO()))-\u003ea-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Handler",
          "signature": "MVar(Maybe(Driver e IO()))-\u003ee-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Callback.html#v:eventHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Callback",
          "name": "patternerr",
          "package": "hoodle-core",
          "signature": "PatternMatchFail -\u003e IO ()",
          "source": "src/Hoodle-Coroutine-Callback.html#patternerr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Callback",
          "module": "Hoodle.Coroutine.Callback",
          "name": "patternerr",
          "normalized": "PatternMatchFail-\u003eIO()",
          "package": "hoodle-core",
          "signature": "PatternMatchFail-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Callback.html#v:patternerr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Commit",
          "name": "Commit",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Commit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Commit",
          "module": "Hoodle.Coroutine.Commit",
          "name": "Commit",
          "package": "hoodle-core",
          "partial": "Commit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Commit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Commit",
          "name": "clearUndoHistory",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Commit.html#clearUndoHistory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Commit",
          "module": "Hoodle.Coroutine.Commit",
          "name": "clearUndoHistory",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Undo History",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Commit.html#v:clearUndoHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esave state and add the current status in undo history \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Commit",
          "name": "commit",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Commit.html#commit",
          "type": "function"
        },
        "index": {
          "description": "save state and add the current status in undo history",
          "hierarchy": "Hoodle Coroutine Commit",
          "module": "Hoodle.Coroutine.Commit",
          "name": "commit",
          "normalized": "HoodleState-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "signature": "HoodleState-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Commit.html#v:commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Commit",
          "name": "commit_",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Commit.html#commit_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Commit",
          "module": "Hoodle.Coroutine.Commit",
          "name": "commit_",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Commit.html#v:commit_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Commit",
          "name": "redo",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Commit.html#redo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Commit",
          "module": "Hoodle.Coroutine.Commit",
          "name": "redo",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Commit.html#v:redo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Commit",
          "name": "undo",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Commit.html#undo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Commit",
          "module": "Hoodle.Coroutine.Commit",
          "name": "undo",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Commit.html#v:undo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.ContextMenu",
          "name": "ContextMenu",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-ContextMenu.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine ContextMenu",
          "module": "Hoodle.Coroutine.ContextMenu",
          "name": "ContextMenu",
          "package": "hoodle-core",
          "partial": "Context Menu",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-ContextMenu.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.ContextMenu",
          "name": "exportCurrentSelectionAsPDF",
          "package": "hoodle-core",
          "signature": "[RItem] -\u003e BBox -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-ContextMenu.html#exportCurrentSelectionAsPDF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine ContextMenu",
          "module": "Hoodle.Coroutine.ContextMenu",
          "name": "exportCurrentSelectionAsPDF",
          "normalized": "[RItem]-\u003eBBox-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Current Selection As PDF",
          "signature": "[RItem]-\u003eBBox-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-ContextMenu.html#v:exportCurrentSelectionAsPDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.ContextMenu",
          "name": "exportCurrentSelectionAsSVG",
          "package": "hoodle-core",
          "signature": "[RItem] -\u003e BBox -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-ContextMenu.html#exportCurrentSelectionAsSVG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine ContextMenu",
          "module": "Hoodle.Coroutine.ContextMenu",
          "name": "exportCurrentSelectionAsSVG",
          "normalized": "[RItem]-\u003eBBox-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Current Selection As SVG",
          "signature": "[RItem]-\u003eBBox-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-ContextMenu.html#v:exportCurrentSelectionAsSVG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.ContextMenu",
          "name": "linkSelectionWithFile",
          "package": "hoodle-core",
          "signature": "FilePath -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-ContextMenu.html#linkSelectionWithFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine ContextMenu",
          "module": "Hoodle.Coroutine.ContextMenu",
          "name": "linkSelectionWithFile",
          "normalized": "FilePath-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Selection With File",
          "signature": "FilePath-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-ContextMenu.html#v:linkSelectionWithFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.ContextMenu",
          "name": "processContextMenu",
          "package": "hoodle-core",
          "signature": "ContextMenuEvent -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-ContextMenu.html#processContextMenu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine ContextMenu",
          "module": "Hoodle.Coroutine.ContextMenu",
          "name": "processContextMenu",
          "normalized": "ContextMenuEvent-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Context Menu",
          "signature": "ContextMenuEvent-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-ContextMenu.html#v:processContextMenu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.ContextMenu",
          "name": "showContextMenu",
          "package": "hoodle-core",
          "signature": "(PageNum, (Double, Double)) -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-ContextMenu.html#showContextMenu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine ContextMenu",
          "module": "Hoodle.Coroutine.ContextMenu",
          "name": "showContextMenu",
          "normalized": "(PageNum,(Double,Double))-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Context Menu",
          "signature": "(PageNum,(Double,Double))-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-ContextMenu.html#v:showContextMenu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Default",
          "name": "Default",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Default.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Default",
          "module": "Hoodle.Coroutine.Default",
          "name": "Default",
          "package": "hoodle-core",
          "partial": "Default",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Default.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Default",
          "name": "colorConvert",
          "package": "hoodle-core",
          "signature": "Color -\u003e PenColor",
          "source": "src/Hoodle-Coroutine-Default.html#colorConvert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Default",
          "module": "Hoodle.Coroutine.Default",
          "name": "colorConvert",
          "normalized": "Color-\u003ePenColor",
          "package": "hoodle-core",
          "partial": "Convert",
          "signature": "Color-\u003ePenColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Default.html#v:colorConvert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Default",
          "name": "colorPick",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Default.html#colorPick",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Default",
          "module": "Hoodle.Coroutine.Default",
          "name": "colorPick",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Pick",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Default.html#v:colorPick"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Default",
          "name": "colorPickerBox",
          "package": "hoodle-core",
          "signature": "String -\u003e MainCoroutine (Maybe PenColor)",
          "source": "src/Hoodle-Coroutine-Default.html#colorPickerBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Default",
          "module": "Hoodle.Coroutine.Default",
          "name": "colorPickerBox",
          "normalized": "String-\u003eMainCoroutine(Maybe PenColor)",
          "package": "hoodle-core",
          "partial": "Picker Box",
          "signature": "String-\u003eMainCoroutine(Maybe PenColor)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Default.html#v:colorPickerBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Default",
          "name": "defaultEventProcess",
          "package": "hoodle-core",
          "signature": "UserEvent -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Default.html#defaultEventProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Default",
          "module": "Hoodle.Coroutine.Default",
          "name": "defaultEventProcess",
          "normalized": "UserEvent-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Event Process",
          "signature": "UserEvent-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Default.html#v:defaultEventProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Default",
          "name": "disableTouch",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Default.html#disableTouch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Default",
          "module": "Hoodle.Coroutine.Default",
          "name": "disableTouch",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Touch",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Default.html#v:disableTouch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Default",
          "name": "dispatchMode",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Default.html#dispatchMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Default",
          "module": "Hoodle.Coroutine.Default",
          "name": "dispatchMode",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Mode",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Default.html#v:dispatchMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Default",
          "name": "guiProcess",
          "package": "hoodle-core",
          "signature": "AllEvent -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Default.html#guiProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Default",
          "module": "Hoodle.Coroutine.Default",
          "name": "guiProcess",
          "normalized": "AllEvent-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Process",
          "signature": "AllEvent-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Default.html#v:guiProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Default",
          "name": "initCoroutine",
          "package": "hoodle-core",
          "signature": "DeviceList-\u003e Window-\u003e Maybe FilePath-\u003e Maybe Hook-\u003e Int-\u003e (Bool, Bool, Bool)-\u003e Statusbar-\u003e IO (EventVar, HoodleState, UIManager, VBox)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Default",
          "module": "Hoodle.Coroutine.Default",
          "name": "initCoroutine",
          "normalized": "DeviceList-\u003eWindow-\u003eMaybe FilePath-\u003eMaybe Hook-\u003eInt-\u003e(Bool,Bool,Bool)-\u003eStatusbar-\u003eIO(EventVar,HoodleState,UIManager,VBox)",
          "package": "hoodle-core",
          "partial": "Coroutine",
          "signature": "DeviceList-\u003eWindow-\u003eMaybe FilePath-\u003eMaybe Hook-\u003eInt-\u003e(Bool,Bool,Bool)-\u003eStatusbar-\u003eIO(EventVar,HoodleState,UIManager,VBox)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Default.html#v:initCoroutine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einitialization according to the setting \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Default",
          "name": "initialize",
          "package": "hoodle-core",
          "signature": "AllEvent -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Default.html#initialize",
          "type": "function"
        },
        "index": {
          "description": "initialization according to the setting",
          "hierarchy": "Hoodle Coroutine Default",
          "module": "Hoodle.Coroutine.Default",
          "name": "initialize",
          "normalized": "AllEvent-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "signature": "AllEvent-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Default.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Default",
          "name": "menuEventProcess",
          "package": "hoodle-core",
          "signature": "MenuEvent -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Default.html#menuEventProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Default",
          "module": "Hoodle.Coroutine.Default",
          "name": "menuEventProcess",
          "normalized": "MenuEvent-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Event Process",
          "signature": "MenuEvent-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Default.html#v:menuEventProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Default",
          "name": "selectMode",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Default.html#selectMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Default",
          "module": "Hoodle.Coroutine.Default",
          "name": "selectMode",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Mode",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Default.html#v:selectMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Default",
          "name": "viewAppendMode",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Default.html#viewAppendMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Default",
          "module": "Hoodle.Coroutine.Default",
          "name": "viewAppendMode",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Append Mode",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Default.html#v:viewAppendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Dialog",
          "name": "Dialog",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Dialog.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Dialog",
          "module": "Hoodle.Coroutine.Dialog",
          "name": "Dialog",
          "package": "hoodle-core",
          "partial": "Dialog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Dialog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Dialog",
          "name": "fileChooser",
          "package": "hoodle-core",
          "signature": "FileChooserAction -\u003e Maybe String -\u003e MainCoroutine (Maybe FilePath)",
          "source": "src/Hoodle-Coroutine-Dialog.html#fileChooser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Dialog",
          "module": "Hoodle.Coroutine.Dialog",
          "name": "fileChooser",
          "normalized": "FileChooserAction-\u003eMaybe String-\u003eMainCoroutine(Maybe FilePath)",
          "package": "hoodle-core",
          "partial": "Chooser",
          "signature": "FileChooserAction-\u003eMaybe String-\u003eMainCoroutine(Maybe FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Dialog.html#v:fileChooser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Dialog",
          "name": "okCancelMessageBox",
          "package": "hoodle-core",
          "signature": "String -\u003e MainCoroutine Bool",
          "source": "src/Hoodle-Coroutine-Dialog.html#okCancelMessageBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Dialog",
          "module": "Hoodle.Coroutine.Dialog",
          "name": "okCancelMessageBox",
          "normalized": "String-\u003eMainCoroutine Bool",
          "package": "hoodle-core",
          "partial": "Cancel Message Box",
          "signature": "String-\u003eMainCoroutine Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Dialog.html#v:okCancelMessageBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Dialog",
          "name": "okMessageBox",
          "package": "hoodle-core",
          "signature": "String -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Dialog.html#okMessageBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Dialog",
          "module": "Hoodle.Coroutine.Dialog",
          "name": "okMessageBox",
          "normalized": "String-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Message Box",
          "signature": "String-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Dialog.html#v:okMessageBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Draw",
          "name": "Draw",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Draw.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "Draw",
          "package": "hoodle-core",
          "partial": "Draw",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Draw",
          "name": "DrawingFunctionSet",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Draw.html#DrawingFunctionSet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "DrawingFunctionSet",
          "package": "hoodle-core",
          "partial": "Drawing Function Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#t:DrawingFunctionSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Draw",
          "name": "DrawingFunctionSet",
          "package": "hoodle-core",
          "signature": "DrawingFunctionSet",
          "source": "src/Hoodle-Coroutine-Draw.html#DrawingFunctionSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "DrawingFunctionSet",
          "package": "hoodle-core",
          "partial": "Drawing Function Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#v:DrawingFunctionSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echeck current canvas id and new active canvas id and invalidate if it's changed. \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Draw",
          "name": "chkCvsIdNInvalidate",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Draw.html#chkCvsIdNInvalidate",
          "type": "function"
        },
        "index": {
          "description": "check current canvas id and new active canvas id and invalidate if it changed",
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "chkCvsIdNInvalidate",
          "normalized": "CanvasId-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Cvs Id NInvalidate",
          "signature": "CanvasId-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#v:chkCvsIdNInvalidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Draw",
          "name": "contEditDraw",
          "package": "hoodle-core",
          "signature": "DrawingFunction ContinuousPage EditMode",
          "source": "src/Hoodle-Coroutine-Draw.html#DrawingFunctionSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "contEditDraw",
          "package": "hoodle-core",
          "partial": "Edit Draw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#v:contEditDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Draw",
          "name": "contSelectDraw",
          "package": "hoodle-core",
          "signature": "DrawingFunction ContinuousPage SelectMode",
          "source": "src/Hoodle-Coroutine-Draw.html#DrawingFunctionSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "contSelectDraw",
          "package": "hoodle-core",
          "partial": "Select Draw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#v:contSelectDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einvalidate clear \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidate",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Draw.html#invalidate",
          "type": "function"
        },
        "index": {
          "description": "invalidate clear",
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidate",
          "normalized": "CanvasId-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "signature": "CanvasId-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#v:invalidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidateAll",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Draw.html#invalidateAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidateAll",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "All",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#v:invalidateAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidateAllInBBox",
          "package": "hoodle-core",
          "signature": "Maybe BBox-\u003e DrawFlag-\u003e MainCoroutine ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidateAllInBBox",
          "normalized": "Maybe BBox-\u003eDrawFlag-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "All In BBox",
          "signature": "Maybe BBox-\u003eDrawFlag-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#v:invalidateAllInBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvalidate Current canvas\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidateCurrent",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Draw.html#invalidateCurrent",
          "type": "function"
        },
        "index": {
          "description": "Invalidate Current canvas",
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidateCurrent",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Current",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#v:invalidateCurrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidateGeneral",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e Maybe BBox -\u003e DrawFlag -\u003e DrawingFunction SinglePage EditMode -\u003e DrawingFunction SinglePage SelectMode -\u003e DrawingFunction ContinuousPage EditMode -\u003e DrawingFunction ContinuousPage SelectMode -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Draw.html#invalidateGeneral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidateGeneral",
          "normalized": "CanvasId-\u003eMaybe BBox-\u003eDrawFlag-\u003eDrawingFunction SinglePage EditMode-\u003eDrawingFunction SinglePage SelectMode-\u003eDrawingFunction ContinuousPage EditMode-\u003eDrawingFunction ContinuousPage SelectMode-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "General",
          "signature": "CanvasId-\u003eMaybe BBox-\u003eDrawFlag-\u003eDrawingFunction SinglePage EditMode-\u003eDrawingFunction SinglePage SelectMode-\u003eDrawingFunction ContinuousPage EditMode-\u003eDrawingFunction ContinuousPage SelectMode-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#v:invalidateGeneral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidateInBBox",
          "package": "hoodle-core",
          "signature": "Maybe BBox-\u003e DrawFlag-\u003e CanvasId-\u003e MainCoroutine ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidateInBBox",
          "normalized": "Maybe BBox-\u003eDrawFlag-\u003eCanvasId-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "In BBox",
          "signature": "Maybe BBox-\u003eDrawFlag-\u003eCanvasId-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#v:invalidateInBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidateOther",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Draw.html#invalidateOther",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidateOther",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Other",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#v:invalidateOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrawing temporary gadgets\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidateTemp",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e Surface -\u003e Render () -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Draw.html#invalidateTemp",
          "type": "function"
        },
        "index": {
          "description": "Drawing temporary gadgets",
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidateTemp",
          "normalized": "CanvasId-\u003eSurface-\u003eRender()-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Temp",
          "signature": "CanvasId-\u003eSurface-\u003eRender()-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#v:invalidateTemp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrawing temporary gadgets with coordinate based on base page\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidateTempBasePage",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e Surface -\u003e PageNum -\u003e Render () -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Draw.html#invalidateTempBasePage",
          "type": "function"
        },
        "index": {
          "description": "Drawing temporary gadgets with coordinate based on base page",
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "invalidateTempBasePage",
          "normalized": "CanvasId-\u003eSurface-\u003ePageNum-\u003eRender()-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Temp Base Page",
          "signature": "CanvasId-\u003eSurface-\u003ePageNum-\u003eRender()-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#v:invalidateTempBasePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Draw",
          "name": "singleEditDraw",
          "package": "hoodle-core",
          "signature": "DrawingFunction SinglePage EditMode",
          "source": "src/Hoodle-Coroutine-Draw.html#DrawingFunctionSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "singleEditDraw",
          "package": "hoodle-core",
          "partial": "Edit Draw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#v:singleEditDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Draw",
          "name": "singleSelectDraw",
          "package": "hoodle-core",
          "signature": "DrawingFunction SinglePage SelectMode",
          "source": "src/Hoodle-Coroutine-Draw.html#DrawingFunctionSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "singleSelectDraw",
          "package": "hoodle-core",
          "partial": "Select Draw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#v:singleSelectDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Draw",
          "name": "waitSomeEvent",
          "package": "hoodle-core",
          "signature": "(UserEvent -\u003e Bool) -\u003e MainCoroutine UserEvent",
          "source": "src/Hoodle-Coroutine-Draw.html#waitSomeEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Draw",
          "module": "Hoodle.Coroutine.Draw",
          "name": "waitSomeEvent",
          "normalized": "(UserEvent-\u003eBool)-\u003eMainCoroutine UserEvent",
          "package": "hoodle-core",
          "partial": "Some Event",
          "signature": "(UserEvent-\u003eBool)-\u003eMainCoroutine UserEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Draw.html#v:waitSomeEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Eraser",
          "name": "Eraser",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Eraser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Eraser",
          "module": "Hoodle.Coroutine.Eraser",
          "name": "Eraser",
          "package": "hoodle-core",
          "partial": "Eraser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Eraser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Eraser",
          "name": "eraserProcess",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e PageNum -\u003e CanvasGeometry -\u003e [RItem] -\u003e (Double, Double) -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Eraser.html#eraserProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Eraser",
          "module": "Hoodle.Coroutine.Eraser",
          "name": "eraserProcess",
          "normalized": "CanvasId-\u003ePageNum-\u003eCanvasGeometry-\u003e[RItem]-\u003e(Double,Double)-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Process",
          "signature": "CanvasId-\u003ePageNum-\u003eCanvasGeometry-\u003e[RItem]-\u003e(Double,Double)-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Eraser.html#v:eraserProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Eraser",
          "name": "eraserStart",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e PointerCoord -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Eraser.html#eraserStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Eraser",
          "module": "Hoodle.Coroutine.Eraser",
          "name": "eraserStart",
          "normalized": "CanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Start",
          "signature": "CanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Eraser.html#v:eraserStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "File",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-File.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "File",
          "package": "hoodle-core",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "addOneRevisionBox",
          "package": "hoodle-core",
          "signature": "VBox -\u003e Hoodle -\u003e Revision -\u003e IO ()",
          "source": "src/Hoodle-Coroutine-File.html#addOneRevisionBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "addOneRevisionBox",
          "normalized": "VBox-\u003eHoodle-\u003eRevision-\u003eIO()",
          "package": "hoodle-core",
          "partial": "One Revision Box",
          "signature": "VBox-\u003eHoodle-\u003eRevision-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:addOneRevisionBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "askIfOverwrite",
          "package": "hoodle-core",
          "signature": "FilePath -\u003e MainCoroutine () -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#askIfOverwrite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "askIfOverwrite",
          "normalized": "FilePath-\u003eMainCoroutine()-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "If Overwrite",
          "signature": "FilePath-\u003eMainCoroutine()-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:askIfOverwrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "askIfSave",
          "package": "hoodle-core",
          "signature": "MainCoroutine () -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#askIfSave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "askIfSave",
          "normalized": "MainCoroutine()-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "If Save",
          "signature": "MainCoroutine()-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:askIfSave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "askQuitProgram",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#askQuitProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "askQuitProgram",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Quit Program",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:askQuitProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "checkEmbedImageSize",
          "package": "hoodle-core",
          "signature": "FilePath -\u003e MainCoroutine (Maybe FilePath)",
          "source": "src/Hoodle-Coroutine-File.html#checkEmbedImageSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "checkEmbedImageSize",
          "normalized": "FilePath-\u003eMainCoroutine(Maybe FilePath)",
          "package": "hoodle-core",
          "partial": "Embed Image Size",
          "signature": "FilePath-\u003eMainCoroutine(Maybe FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:checkEmbedImageSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "embedAllPDFBackground",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#embedAllPDFBackground",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "embedAllPDFBackground",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "All PDFBackground",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:embedAllPDFBackground"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "embedImage",
          "package": "hoodle-core",
          "signature": "FilePath -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#embedImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "embedImage",
          "normalized": "FilePath-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Image",
          "signature": "FilePath-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:embedImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "embedPredefinedImage",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#embedPredefinedImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "embedPredefinedImage",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Predefined Image",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:embedPredefinedImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis is temporary. I will remove it\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.File",
          "name": "embedPredefinedImage2",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#embedPredefinedImage2",
          "type": "function"
        },
        "index": {
          "description": "this is temporary will remove it",
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "embedPredefinedImage2",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Predefined Image",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:embedPredefinedImage2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis is temporary. I will remove it\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.File",
          "name": "embedPredefinedImage3",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#embedPredefinedImage3",
          "type": "function"
        },
        "index": {
          "description": "this is temporary will remove it",
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "embedPredefinedImage3",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Predefined Image",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:embedPredefinedImage3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eneed to be merged with ContextMenuEventSVG\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.File",
          "name": "exportCurrentPageAsSVG",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#exportCurrentPageAsSVG",
          "type": "function"
        },
        "index": {
          "description": "need to be merged with ContextMenuEventSVG",
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "exportCurrentPageAsSVG",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Current Page As SVG",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:exportCurrentPageAsSVG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "fileAnnotatePDF",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#fileAnnotatePDF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "fileAnnotatePDF",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Annotate PDF",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:fileAnnotatePDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "fileExport",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#fileExport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "fileExport",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Export",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:fileExport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "fileExtensionInvalid",
          "package": "hoodle-core",
          "signature": "(String, String) -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#fileExtensionInvalid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "fileExtensionInvalid",
          "normalized": "(String,String)-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Extension Invalid",
          "signature": "(String,String)-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:fileExtensionInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "fileLoad",
          "package": "hoodle-core",
          "signature": "FilePath -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#fileLoad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "fileLoad",
          "normalized": "FilePath-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Load",
          "signature": "FilePath-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:fileLoad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "fileLoadPNGorJPG",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#fileLoadPNGorJPG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "fileLoadPNGorJPG",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Load PNGor JPG",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:fileLoadPNGorJPG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "fileLoadSVG",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#fileLoadSVG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "fileLoadSVG",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Load SVG",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:fileLoadSVG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "fileNew",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#fileNew",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "fileNew",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "New",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:fileNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emain coroutine for open a file \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.File",
          "name": "fileOpen",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#fileOpen",
          "type": "function"
        },
        "index": {
          "description": "main coroutine for open file",
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "fileOpen",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Open",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:fileOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emain coroutine for open a file \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.File",
          "name": "fileReload",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#fileReload",
          "type": "function"
        },
        "index": {
          "description": "main coroutine for open file",
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "fileReload",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Reload",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:fileReload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "fileSave",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#fileSave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "fileSave",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Save",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:fileSave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emain coroutine for save as \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.File",
          "name": "fileSaveAs",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#fileSaveAs",
          "type": "function"
        },
        "index": {
          "description": "main coroutine for save as",
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "fileSaveAs",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Save As",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:fileSaveAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "fileShowRevisions",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#fileShowRevisions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "fileShowRevisions",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Show Revisions",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:fileShowRevisions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "fileShowUUID",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#fileShowUUID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "fileShowUUID",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Show UUID",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:fileShowUUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "fileStartSync",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#fileStartSync",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "fileStartSync",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Start Sync",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:fileStartSync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "fileVersionSave",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#fileVersionSave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "fileVersionSave",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Version Save",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:fileVersionSave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "insertItemAt",
          "package": "hoodle-core",
          "signature": "Maybe (PageNum, PageCoordinate) -\u003e RItem -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#insertItemAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "insertItemAt",
          "normalized": "Maybe(PageNum,PageCoordinate)-\u003eRItem-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Item At",
          "signature": "Maybe(PageNum,PageCoordinate)-\u003eRItem-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:insertItemAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "mkPangoText",
          "package": "hoodle-core",
          "signature": "String -\u003e Render ()",
          "source": "src/Hoodle-Coroutine-File.html#mkPangoText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "mkPangoText",
          "normalized": "String-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Pango Text",
          "signature": "String-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:mkPangoText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "mkRevisionHdlFile",
          "package": "hoodle-core",
          "signature": "Hoodle -\u003e IO (String, String)",
          "source": "src/Hoodle-Coroutine-File.html#mkRevisionHdlFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "mkRevisionHdlFile",
          "normalized": "Hoodle-\u003eIO(String,String)",
          "package": "hoodle-core",
          "partial": "Revision Hdl File",
          "signature": "Hoodle-\u003eIO(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:mkRevisionHdlFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "mkRevisionPdfFile",
          "package": "hoodle-core",
          "signature": "RHoodle -\u003e String -\u003e IO ()",
          "source": "src/Hoodle-Coroutine-File.html#mkRevisionPdfFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "mkRevisionPdfFile",
          "normalized": "RHoodle-\u003eString-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Revision Pdf File",
          "signature": "RHoodle-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:mkRevisionPdfFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "renderjob",
          "package": "hoodle-core",
          "signature": "RHoodle -\u003e FilePath -\u003e IO ()",
          "source": "src/Hoodle-Coroutine-File.html#renderjob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "renderjob",
          "normalized": "RHoodle-\u003eFilePath-\u003eIO()",
          "package": "hoodle-core",
          "signature": "RHoodle-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:renderjob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "resetHoodleBuffers",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#resetHoodleBuffers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "resetHoodleBuffers",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Hoodle Buffers",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:resetHoodleBuffers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einterleaving a monadic action between each pair of subsequent actions\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.File",
          "name": "sequence1_",
          "package": "hoodle-core",
          "signature": "m () -\u003e [m ()] -\u003e m ()",
          "source": "src/Hoodle-Coroutine-File.html#sequence1_",
          "type": "function"
        },
        "index": {
          "description": "interleaving monadic action between each pair of subsequent actions",
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "sequence1_",
          "normalized": "a()-\u003e[a()]-\u003ea()",
          "package": "hoodle-core",
          "signature": "m()-\u003e[m()]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:sequence1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.File",
          "name": "showRevisionDialog",
          "package": "hoodle-core",
          "signature": "Hoodle -\u003e [Revision] -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-File.html#showRevisionDialog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine File",
          "module": "Hoodle.Coroutine.File",
          "name": "showRevisionDialog",
          "normalized": "Hoodle-\u003e[Revision]-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Revision Dialog",
          "signature": "Hoodle-\u003e[Revision]-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-File.html#v:showRevisionDialog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Highlighter",
          "name": "Highlighter",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Highlighter.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Highlighter",
          "module": "Hoodle.Coroutine.Highlighter",
          "name": "Highlighter",
          "package": "hoodle-core",
          "partial": "Highlighter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Highlighter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Highlighter",
          "name": "highlighterStart",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e PointerCoord -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Highlighter.html#highlighterStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Highlighter",
          "module": "Hoodle.Coroutine.Highlighter",
          "name": "highlighterStart",
          "normalized": "CanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Start",
          "signature": "CanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Highlighter.html#v:highlighterStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Layer",
          "name": "Layer",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Layer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Layer",
          "module": "Hoodle.Coroutine.Layer",
          "name": "Layer",
          "package": "hoodle-core",
          "partial": "Layer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Layer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Layer",
          "name": "deleteCurrentLayer",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Layer.html#deleteCurrentLayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Layer",
          "module": "Hoodle.Coroutine.Layer",
          "name": "deleteCurrentLayer",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Current Layer",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Layer.html#v:deleteCurrentLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Layer",
          "name": "gotoLayerAt",
          "package": "hoodle-core",
          "signature": "Int -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Layer.html#gotoLayerAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Layer",
          "module": "Hoodle.Coroutine.Layer",
          "name": "gotoLayerAt",
          "normalized": "Int-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Layer At",
          "signature": "Int-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Layer.html#v:gotoLayerAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Layer",
          "name": "gotoNextLayer",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Layer.html#gotoNextLayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Layer",
          "module": "Hoodle.Coroutine.Layer",
          "name": "gotoNextLayer",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Next Layer",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Layer.html#v:gotoNextLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Layer",
          "name": "gotoPrevLayer",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Layer.html#gotoPrevLayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Layer",
          "module": "Hoodle.Coroutine.Layer",
          "name": "gotoPrevLayer",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Prev Layer",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Layer.html#v:gotoPrevLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Layer",
          "name": "layerAction",
          "package": "hoodle-core",
          "signature": "(HoodleModeState -\u003e Int -\u003e Page EditMode -\u003e MainCoroutine HoodleModeState) -\u003e MainCoroutine HoodleState",
          "source": "src/Hoodle-Coroutine-Layer.html#layerAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Layer",
          "module": "Hoodle.Coroutine.Layer",
          "name": "layerAction",
          "normalized": "(HoodleModeState-\u003eInt-\u003ePage EditMode-\u003eMainCoroutine HoodleModeState)-\u003eMainCoroutine HoodleState",
          "package": "hoodle-core",
          "partial": "Action",
          "signature": "(HoodleModeState-\u003eInt-\u003ePage EditMode-\u003eMainCoroutine HoodleModeState)-\u003eMainCoroutine HoodleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Layer.html#v:layerAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Layer",
          "name": "makeNewLayer",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Layer.html#makeNewLayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Layer",
          "module": "Hoodle.Coroutine.Layer",
          "name": "makeNewLayer",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "New Layer",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Layer.html#v:makeNewLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Layer",
          "name": "startGotoLayerAt",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Layer.html#startGotoLayerAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Layer",
          "module": "Hoodle.Coroutine.Layer",
          "name": "startGotoLayerAt",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Goto Layer At",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Layer.html#v:startGotoLayerAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Link",
          "name": "Link",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Link.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Link",
          "module": "Hoodle.Coroutine.Link",
          "name": "Link",
          "package": "hoodle-core",
          "partial": "Link",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Link.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Link",
          "name": "addLink",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Link.html#addLink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Link",
          "module": "Hoodle.Coroutine.Link",
          "name": "addLink",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Link",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Link.html#v:addLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egot a link address (or embedded image) from drag and drop             \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Link",
          "name": "gotLink",
          "package": "hoodle-core",
          "signature": "Maybe String -\u003e (Int, Int) -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Link.html#gotLink",
          "type": "function"
        },
        "index": {
          "description": "got link address or embedded image from drag and drop",
          "hierarchy": "Hoodle Coroutine Link",
          "module": "Hoodle.Coroutine.Link",
          "name": "gotLink",
          "normalized": "Maybe String-\u003e(Int,Int)-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Link",
          "signature": "Maybe String-\u003e(Int,Int)-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Link.html#v:gotLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Link",
          "name": "makeTextSVGFromStringAt",
          "package": "hoodle-core",
          "signature": "String -\u003e CanvasId -\u003e HoodleState -\u003e CanvasCoordinate -\u003e IO (ByteString, BBox)",
          "source": "src/Hoodle-Coroutine-Link.html#makeTextSVGFromStringAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Link",
          "module": "Hoodle.Coroutine.Link",
          "name": "makeTextSVGFromStringAt",
          "normalized": "String-\u003eCanvasId-\u003eHoodleState-\u003eCanvasCoordinate-\u003eIO(ByteString,BBox)",
          "package": "hoodle-core",
          "partial": "Text SVGFrom String At",
          "signature": "String-\u003eCanvasId-\u003eHoodleState-\u003eCanvasCoordinate-\u003eIO(ByteString,BBox)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Link.html#v:makeTextSVGFromStringAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Link",
          "name": "notifyLink",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e PointerCoord -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Link.html#notifyLink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Link",
          "module": "Hoodle.Coroutine.Link",
          "name": "notifyLink",
          "normalized": "CanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Link",
          "signature": "CanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Link.html#v:notifyLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "Minibuffer",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Minibuffer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Minibuffer",
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "Minibuffer",
          "package": "hoodle-core",
          "partial": "Minibuffer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Minibuffer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "drawMiniBuf",
          "package": "hoodle-core",
          "signature": "t Stroke -\u003e Render ()",
          "source": "src/Hoodle-Coroutine-Minibuffer.html#drawMiniBuf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Minibuffer",
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "drawMiniBuf",
          "normalized": "a Stroke-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Mini Buf",
          "signature": "t Stroke-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Minibuffer.html#v:drawMiniBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "drawMiniBufBkg",
          "package": "hoodle-core",
          "signature": "Render ()",
          "source": "src/Hoodle-Coroutine-Minibuffer.html#drawMiniBufBkg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Minibuffer",
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "drawMiniBufBkg",
          "normalized": "Render()",
          "package": "hoodle-core",
          "partial": "Mini Buf Bkg",
          "signature": "Render()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Minibuffer.html#v:drawMiniBufBkg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "drawstrokebit",
          "package": "hoodle-core",
          "signature": "(Surface, Surface) -\u003e Seq PointerCoord -\u003e IO ()",
          "source": "src/Hoodle-Coroutine-Minibuffer.html#drawstrokebit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Minibuffer",
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "drawstrokebit",
          "normalized": "(Surface,Surface)-\u003eSeq PointerCoord-\u003eIO()",
          "package": "hoodle-core",
          "signature": "(Surface,Surface)-\u003eSeq PointerCoord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Minibuffer.html#v:drawstrokebit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "invalidateMinibuf",
          "package": "hoodle-core",
          "signature": "DrawWindow -\u003e Surface -\u003e IO ()",
          "source": "src/Hoodle-Coroutine-Minibuffer.html#invalidateMinibuf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Minibuffer",
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "invalidateMinibuf",
          "normalized": "DrawWindow-\u003eSurface-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Minibuf",
          "signature": "DrawWindow-\u003eSurface-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Minibuffer.html#v:invalidateMinibuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "minibufDialog",
          "package": "hoodle-core",
          "signature": "String -\u003e MainCoroutine (Either () [Stroke])",
          "source": "src/Hoodle-Coroutine-Minibuffer.html#minibufDialog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Minibuffer",
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "minibufDialog",
          "normalized": "String-\u003eMainCoroutine(Either()[Stroke])",
          "package": "hoodle-core",
          "partial": "Dialog",
          "signature": "String-\u003eMainCoroutine(Either()[Stroke])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Minibuffer.html#v:minibufDialog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "minibufInit",
          "package": "hoodle-core",
          "signature": "MainCoroutine (Either () [Stroke])",
          "source": "src/Hoodle-Coroutine-Minibuffer.html#minibufInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Minibuffer",
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "minibufInit",
          "normalized": "MainCoroutine(Either()[Stroke])",
          "package": "hoodle-core",
          "partial": "Init",
          "signature": "MainCoroutine(Either()[Stroke])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Minibuffer.html#v:minibufInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "minibufStart",
          "package": "hoodle-core",
          "signature": "DrawWindow-\u003e (Surface, Surface)-\u003e Seq Stroke-\u003e MainCoroutine (Either () [Stroke])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Minibuffer",
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "minibufStart",
          "normalized": "DrawWindow-\u003e(Surface,Surface)-\u003eSeq Stroke-\u003eMainCoroutine(Either()[Stroke])",
          "package": "hoodle-core",
          "partial": "Start",
          "signature": "DrawWindow-\u003e(Surface,Surface)-\u003eSeq Stroke-\u003eMainCoroutine(Either()[Stroke])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Minibuffer.html#v:minibufStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "mkstroke",
          "package": "hoodle-core",
          "signature": "Seq PointerCoord -\u003e Stroke",
          "source": "src/Hoodle-Coroutine-Minibuffer.html#mkstroke",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Minibuffer",
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "mkstroke",
          "normalized": "Seq PointerCoord-\u003eStroke",
          "package": "hoodle-core",
          "signature": "Seq PointerCoord-\u003eStroke",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Minibuffer.html#v:mkstroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "onestroke",
          "package": "hoodle-core",
          "signature": "DrawWindow -\u003e (Surface, Surface) -\u003e Seq PointerCoord -\u003e MainCoroutine (Seq PointerCoord)",
          "source": "src/Hoodle-Coroutine-Minibuffer.html#onestroke",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Minibuffer",
          "module": "Hoodle.Coroutine.Minibuffer",
          "name": "onestroke",
          "normalized": "DrawWindow-\u003e(Surface,Surface)-\u003eSeq PointerCoord-\u003eMainCoroutine(Seq PointerCoord)",
          "package": "hoodle-core",
          "signature": "DrawWindow-\u003e(Surface,Surface)-\u003eSeq PointerCoord-\u003eMainCoroutine(Seq PointerCoord)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Minibuffer.html#v:onestroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Mode",
          "name": "Mode",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Mode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Mode",
          "module": "Hoodle.Coroutine.Mode",
          "name": "Mode",
          "package": "hoodle-core",
          "partial": "Mode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Mode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Mode",
          "name": "modeChange",
          "package": "hoodle-core",
          "signature": "UserEvent -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Mode.html#modeChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Mode",
          "module": "Hoodle.Coroutine.Mode",
          "name": "modeChange",
          "normalized": "UserEvent-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Change",
          "signature": "UserEvent-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Mode.html#v:modeChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Mode",
          "name": "viewModeChange",
          "package": "hoodle-core",
          "signature": "UserEvent -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Mode.html#viewModeChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Mode",
          "module": "Hoodle.Coroutine.Mode",
          "name": "viewModeChange",
          "normalized": "UserEvent-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Mode Change",
          "signature": "UserEvent-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Mode.html#v:viewModeChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Network",
          "name": "Network",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Network.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Network",
          "module": "Hoodle.Coroutine.Network",
          "name": "Network",
          "package": "hoodle-core",
          "partial": "Network",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Network.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Network",
          "name": "networkTextInput",
          "package": "hoodle-core",
          "signature": "Text -\u003e MainCoroutine (Maybe Text)",
          "source": "src/Hoodle-Coroutine-Network.html#networkTextInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Network",
          "module": "Hoodle.Coroutine.Network",
          "name": "networkTextInput",
          "normalized": "Text-\u003eMainCoroutine(Maybe Text)",
          "package": "hoodle-core",
          "partial": "Text Input",
          "signature": "Text-\u003eMainCoroutine(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Network.html#v:networkTextInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Network",
          "name": "server",
          "package": "hoodle-core",
          "signature": "(AllEvent -\u003e IO ()) -\u003e HostPreference -\u003e Text -\u003e IO ()",
          "source": "src/Hoodle-Coroutine-Network.html#server",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Network",
          "module": "Hoodle.Coroutine.Network",
          "name": "server",
          "normalized": "(AllEvent-\u003eIO())-\u003eHostPreference-\u003eText-\u003eIO()",
          "package": "hoodle-core",
          "signature": "(AllEvent-\u003eIO())-\u003eHostPreference-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Network.html#v:server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Page",
          "name": "Page",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Page.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Page",
          "module": "Hoodle.Coroutine.Page",
          "name": "Page",
          "package": "hoodle-core",
          "partial": "Page",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Page.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Page",
          "name": "canvasZoomUpdate",
          "package": "hoodle-core",
          "signature": "Maybe ZoomMode -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Page.html#canvasZoomUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Page",
          "module": "Hoodle.Coroutine.Page",
          "name": "canvasZoomUpdate",
          "normalized": "Maybe ZoomMode-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Zoom Update",
          "signature": "Maybe ZoomMode-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Page.html#v:canvasZoomUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Page",
          "name": "canvasZoomUpdateAll",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Page.html#canvasZoomUpdateAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Page",
          "module": "Hoodle.Coroutine.Page",
          "name": "canvasZoomUpdateAll",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Zoom Update All",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Page.html#v:canvasZoomUpdateAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Page",
          "name": "canvasZoomUpdateBufAll",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Page.html#canvasZoomUpdateBufAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Page",
          "module": "Hoodle.Coroutine.Page",
          "name": "canvasZoomUpdateBufAll",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Zoom Update Buf All",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Page.html#v:canvasZoomUpdateBufAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Page",
          "name": "canvasZoomUpdateCvsId",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e Maybe ZoomMode -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Page.html#canvasZoomUpdateCvsId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Page",
          "module": "Hoodle.Coroutine.Page",
          "name": "canvasZoomUpdateCvsId",
          "normalized": "CanvasId-\u003eMaybe ZoomMode-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Zoom Update Cvs Id",
          "signature": "CanvasId-\u003eMaybe ZoomMode-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Page.html#v:canvasZoomUpdateCvsId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Page",
          "name": "canvasZoomUpdateGenRenderCvsId",
          "package": "hoodle-core",
          "signature": "MainCoroutine () -\u003e CanvasId -\u003e Maybe ZoomMode -\u003e Maybe (PageNum, PageCoordinate) -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Page.html#canvasZoomUpdateGenRenderCvsId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Page",
          "module": "Hoodle.Coroutine.Page",
          "name": "canvasZoomUpdateGenRenderCvsId",
          "normalized": "MainCoroutine()-\u003eCanvasId-\u003eMaybe ZoomMode-\u003eMaybe(PageNum,PageCoordinate)-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Zoom Update Gen Render Cvs Id",
          "signature": "MainCoroutine()-\u003eCanvasId-\u003eMaybe ZoomMode-\u003eMaybe(PageNum,PageCoordinate)-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Page.html#v:canvasZoomUpdateGenRenderCvsId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange page of current canvas using a modify function\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Page",
          "name": "changePage",
          "package": "hoodle-core",
          "signature": "(Int -\u003e Int) -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Page.html#changePage",
          "type": "function"
        },
        "index": {
          "description": "change page of current canvas using modify function",
          "hierarchy": "Hoodle Coroutine Page",
          "module": "Hoodle.Coroutine.Page",
          "name": "changePage",
          "normalized": "(Int-\u003eInt)-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Page",
          "signature": "(Int-\u003eInt)-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Page.html#v:changePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Page",
          "name": "changePageInHoodleModeState",
          "package": "hoodle-core",
          "signature": "BackgroundStyle-\u003e Int-\u003e HoodleModeState-\u003e (Bool, Int, Page EditMode, HoodleModeState)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Page",
          "module": "Hoodle.Coroutine.Page",
          "name": "changePageInHoodleModeState",
          "normalized": "BackgroundStyle-\u003eInt-\u003eHoodleModeState-\u003e(Bool,Int,Page EditMode,HoodleModeState)",
          "package": "hoodle-core",
          "partial": "Page In Hoodle Mode State",
          "signature": "BackgroundStyle-\u003eInt-\u003eHoodleModeState-\u003e(Bool,Int,Page EditMode,HoodleModeState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Page.html#v:changePageInHoodleModeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelete current page of current canvas\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Page",
          "name": "deleteCurrentPage",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Page.html#deleteCurrentPage",
          "type": "function"
        },
        "index": {
          "description": "delete current page of current canvas",
          "hierarchy": "Hoodle Coroutine Page",
          "module": "Hoodle.Coroutine.Page",
          "name": "deleteCurrentPage",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Current Page",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Page.html#v:deleteCurrentPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelete designated page\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Page",
          "name": "deletePageInHoodle",
          "package": "hoodle-core",
          "signature": "Hoodle EditMode -\u003e PageNum -\u003e IO (Hoodle EditMode)",
          "source": "src/Hoodle-Coroutine-Page.html#deletePageInHoodle",
          "type": "function"
        },
        "index": {
          "description": "delete designated page",
          "hierarchy": "Hoodle Coroutine Page",
          "module": "Hoodle.Coroutine.Page",
          "name": "deletePageInHoodle",
          "normalized": "Hoodle EditMode-\u003ePageNum-\u003eIO(Hoodle EditMode)",
          "package": "hoodle-core",
          "partial": "Page In Hoodle",
          "signature": "Hoodle EditMode-\u003ePageNum-\u003eIO(Hoodle EditMode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Page.html#v:deletePageInHoodle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Page",
          "name": "newPage",
          "package": "hoodle-core",
          "signature": "AddDirection -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Page.html#newPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Page",
          "module": "Hoodle.Coroutine.Page",
          "name": "newPage",
          "normalized": "AddDirection-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Page",
          "signature": "AddDirection-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Page.html#v:newPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Page",
          "name": "pageZoomChange",
          "package": "hoodle-core",
          "signature": "ZoomMode -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Page.html#pageZoomChange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Page",
          "module": "Hoodle.Coroutine.Page",
          "name": "pageZoomChange",
          "normalized": "ZoomMode-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Zoom Change",
          "signature": "ZoomMode-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Page.html#v:pageZoomChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Page",
          "name": "pageZoomChangeRel",
          "package": "hoodle-core",
          "signature": "ZoomModeRel -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Page.html#pageZoomChangeRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Page",
          "module": "Hoodle.Coroutine.Page",
          "name": "pageZoomChangeRel",
          "normalized": "ZoomModeRel-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Zoom Change Rel",
          "signature": "ZoomModeRel-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Page.html#v:pageZoomChangeRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Pen",
          "name": "Pen",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Pen.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Pen",
          "module": "Hoodle.Coroutine.Pen",
          "name": "Pen",
          "package": "hoodle-core",
          "partial": "Pen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Pen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon Pen Work starting point \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Pen",
          "name": "commonPenStart",
          "package": "hoodle-core",
          "signature": "(forall a.  CanvasInfo a -\u003e PageNum -\u003e CanvasGeometry -\u003e (Double, Double) -\u003e MainCoroutine ()) -\u003e CanvasId -\u003e PointerCoord -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Pen.html#commonPenStart",
          "type": "function"
        },
        "index": {
          "description": "Common Pen Work starting point",
          "hierarchy": "Hoodle Coroutine Pen",
          "module": "Hoodle.Coroutine.Pen",
          "name": "commonPenStart",
          "normalized": "(a b CanvasInfo c-\u003ePageNum-\u003eCanvasGeometry-\u003e(Double,Double)-\u003eMainCoroutine())-\u003eCanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Pen Start",
          "signature": "(forall a. CanvasInfo a-\u003ePageNum-\u003eCanvasGeometry-\u003e(Double,Double)-\u003eMainCoroutine())-\u003eCanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Pen.html#v:commonPenStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Pen",
          "name": "createTempRender",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e a -\u003e MainCoroutine (TempRender a)",
          "source": "src/Hoodle-Coroutine-Pen.html#createTempRender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Pen",
          "module": "Hoodle.Coroutine.Pen",
          "name": "createTempRender",
          "normalized": "CanvasGeometry-\u003ea-\u003eMainCoroutine(TempRender a)",
          "package": "hoodle-core",
          "partial": "Temp Render",
          "signature": "CanvasGeometry-\u003ea-\u003eMainCoroutine(TempRender a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Pen.html#v:createTempRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Pen",
          "name": "penMoveAndUpInterPage",
          "package": "hoodle-core",
          "signature": "UserEvent -\u003e PageNum -\u003e CanvasGeometry -\u003e m a -\u003e (PageNum -\u003e (PageNum, PageCoordinate) -\u003e m a) -\u003e (PointerCoord -\u003e m a) -\u003e m a",
          "source": "src/Hoodle-Coroutine-Pen.html#penMoveAndUpInterPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Pen",
          "module": "Hoodle.Coroutine.Pen",
          "name": "penMoveAndUpInterPage",
          "normalized": "UserEvent-\u003ePageNum-\u003eCanvasGeometry-\u003ea b-\u003e(PageNum-\u003e(PageNum,PageCoordinate)-\u003ea b)-\u003e(PointerCoord-\u003ea b)-\u003ea b",
          "package": "hoodle-core",
          "partial": "Move And Up Inter Page",
          "signature": "UserEvent-\u003ePageNum-\u003eCanvasGeometry-\u003em a-\u003e(PageNum-\u003e(PageNum,PageCoordinate)-\u003em a)-\u003e(PointerCoord-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Pen.html#v:penMoveAndUpInterPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ein page action  \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Pen",
          "name": "penMoveAndUpOnly",
          "package": "hoodle-core",
          "signature": "UserEvent -\u003e PageNum -\u003e CanvasGeometry -\u003e m a -\u003e ((PointerCoord, (Double, Double)) -\u003e m a) -\u003e (PointerCoord -\u003e m a) -\u003e m a",
          "source": "src/Hoodle-Coroutine-Pen.html#penMoveAndUpOnly",
          "type": "function"
        },
        "index": {
          "description": "in page action",
          "hierarchy": "Hoodle Coroutine Pen",
          "module": "Hoodle.Coroutine.Pen",
          "name": "penMoveAndUpOnly",
          "normalized": "UserEvent-\u003ePageNum-\u003eCanvasGeometry-\u003ea b-\u003e((PointerCoord,(Double,Double))-\u003ea b)-\u003e(PointerCoord-\u003ea b)-\u003ea b",
          "package": "hoodle-core",
          "partial": "Move And Up Only",
          "signature": "UserEvent-\u003ePageNum-\u003eCanvasGeometry-\u003em a-\u003e((PointerCoord,(Double,Double))-\u003em a)-\u003e(PointerCoord-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Pen.html#v:penMoveAndUpOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epage switch if pen click a page different than the current page\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Pen",
          "name": "penPageSwitch",
          "package": "hoodle-core",
          "signature": "PageNum -\u003e MainCoroutine CanvasInfoBox",
          "source": "src/Hoodle-Coroutine-Pen.html#penPageSwitch",
          "type": "function"
        },
        "index": {
          "description": "page switch if pen click page different than the current page",
          "hierarchy": "Hoodle Coroutine Pen",
          "module": "Hoodle.Coroutine.Pen",
          "name": "penPageSwitch",
          "normalized": "PageNum-\u003eMainCoroutine CanvasInfoBox",
          "package": "hoodle-core",
          "partial": "Page Switch",
          "signature": "PageNum-\u003eMainCoroutine CanvasInfoBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Pen.html#v:penPageSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emain pen coordinate adding process\n | now being changed\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Pen",
          "name": "penProcess",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e PageNum -\u003e CanvasGeometry -\u003e TempRender (Seq (Double, Double, Double)) -\u003e ((Double, Double), Double) -\u003e MainCoroutine (Seq (Double, Double, Double))",
          "source": "src/Hoodle-Coroutine-Pen.html#penProcess",
          "type": "function"
        },
        "index": {
          "description": "main pen coordinate adding process now being changed",
          "hierarchy": "Hoodle Coroutine Pen",
          "module": "Hoodle.Coroutine.Pen",
          "name": "penProcess",
          "normalized": "CanvasId-\u003ePageNum-\u003eCanvasGeometry-\u003eTempRender(Seq(Double,Double,Double))-\u003e((Double,Double),Double)-\u003eMainCoroutine(Seq(Double,Double,Double))",
          "package": "hoodle-core",
          "partial": "Process",
          "signature": "CanvasId-\u003ePageNum-\u003eCanvasGeometry-\u003eTempRender(Seq(Double,Double,Double))-\u003e((Double,Double),Double)-\u003eMainCoroutine(Seq(Double,Double,Double))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Pen.html#v:penProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eenter pen drawing mode\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Pen",
          "name": "penStart",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e PointerCoord -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Pen.html#penStart",
          "type": "function"
        },
        "index": {
          "description": "enter pen drawing mode",
          "hierarchy": "Hoodle Coroutine Pen",
          "module": "Hoodle.Coroutine.Pen",
          "name": "penStart",
          "normalized": "CanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Start",
          "signature": "CanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Pen.html#v:penStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Pen",
          "name": "processWithDefTimeInterval",
          "package": "hoodle-core",
          "signature": "(UTCTime -\u003e m a)-\u003e (UTCTime -\u003e m a)-\u003e UTCTime-\u003e m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Pen",
          "module": "Hoodle.Coroutine.Pen",
          "name": "processWithDefTimeInterval",
          "normalized": "(UTCTime-\u003ea b)-\u003e(UTCTime-\u003ea b)-\u003eUTCTime-\u003ea b",
          "package": "hoodle-core",
          "partial": "With Def Time Interval",
          "signature": "(UTCTime-\u003em a)-\u003e(UTCTime-\u003em a)-\u003eUTCTime-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Pen.html#v:processWithDefTimeInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprocess action when last time was before time diff limit, otherwise\n   just do default action.\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Pen",
          "name": "processWithTimeInterval",
          "package": "hoodle-core",
          "signature": "NominalDiffTime-\u003e (UTCTime -\u003e m a)-\u003e (UTCTime -\u003e m a)-\u003e UTCTime-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "process action when last time was before time diff limit otherwise just do default action",
          "hierarchy": "Hoodle Coroutine Pen",
          "module": "Hoodle.Coroutine.Pen",
          "name": "processWithTimeInterval",
          "normalized": "NominalDiffTime-\u003e(UTCTime-\u003ea b)-\u003e(UTCTime-\u003ea b)-\u003eUTCTime-\u003ea b",
          "package": "hoodle-core",
          "partial": "With Time Interval",
          "signature": "NominalDiffTime-\u003e(UTCTime-\u003em a)-\u003e(UTCTime-\u003em a)-\u003eUTCTime-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Pen.html#v:processWithTimeInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Pen",
          "name": "skipIfNotInSamePage",
          "package": "hoodle-core",
          "signature": "PageNum -\u003e CanvasGeometry -\u003e PointerCoord -\u003e m a -\u003e ((PointerCoord, (Double, Double)) -\u003e m a) -\u003e m a",
          "source": "src/Hoodle-Coroutine-Pen.html#skipIfNotInSamePage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Pen",
          "module": "Hoodle.Coroutine.Pen",
          "name": "skipIfNotInSamePage",
          "normalized": "PageNum-\u003eCanvasGeometry-\u003ePointerCoord-\u003ea b-\u003e((PointerCoord,(Double,Double))-\u003ea b)-\u003ea b",
          "package": "hoodle-core",
          "partial": "If Not In Same Page",
          "signature": "PageNum-\u003eCanvasGeometry-\u003ePointerCoord-\u003em a-\u003e((PointerCoord,(Double,Double))-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Pen.html#v:skipIfNotInSamePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Pen",
          "name": "switchActionEnteringDiffPage",
          "package": "hoodle-core",
          "signature": "PageNum -\u003e CanvasGeometry -\u003e PointerCoord -\u003e m a -\u003e (PageNum -\u003e (PageNum, PageCoordinate) -\u003e m a) -\u003e (PageNum -\u003e (PageNum, PageCoordinate) -\u003e m a) -\u003e m a",
          "source": "src/Hoodle-Coroutine-Pen.html#switchActionEnteringDiffPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Pen",
          "module": "Hoodle.Coroutine.Pen",
          "name": "switchActionEnteringDiffPage",
          "normalized": "PageNum-\u003eCanvasGeometry-\u003ePointerCoord-\u003ea b-\u003e(PageNum-\u003e(PageNum,PageCoordinate)-\u003ea b)-\u003e(PageNum-\u003e(PageNum,PageCoordinate)-\u003ea b)-\u003ea b",
          "package": "hoodle-core",
          "partial": "Action Entering Diff Page",
          "signature": "PageNum-\u003eCanvasGeometry-\u003ePointerCoord-\u003em a-\u003e(PageNum-\u003e(PageNum,PageCoordinate)-\u003em a)-\u003e(PageNum-\u003e(PageNum,PageCoordinate)-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Pen.html#v:switchActionEnteringDiffPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Scroll",
          "name": "Scroll",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Scroll.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Scroll",
          "module": "Hoodle.Coroutine.Scroll",
          "name": "Scroll",
          "package": "hoodle-core",
          "partial": "Scroll",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Scroll.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Scroll",
          "name": "adjustScrollbarWithGeometryCurrent",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Scroll.html#adjustScrollbarWithGeometryCurrent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Scroll",
          "module": "Hoodle.Coroutine.Scroll",
          "name": "adjustScrollbarWithGeometryCurrent",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Scrollbar With Geometry Current",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Scroll.html#v:adjustScrollbarWithGeometryCurrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Scroll",
          "name": "adjustScrollbarWithGeometryCvsId",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Scroll.html#adjustScrollbarWithGeometryCvsId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Scroll",
          "module": "Hoodle.Coroutine.Scroll",
          "name": "adjustScrollbarWithGeometryCvsId",
          "normalized": "CanvasId-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Scrollbar With Geometry Cvs Id",
          "signature": "CanvasId-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Scroll.html#v:adjustScrollbarWithGeometryCvsId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Scroll",
          "name": "hscrollBarMoved",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e Double -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Scroll.html#hscrollBarMoved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Scroll",
          "module": "Hoodle.Coroutine.Scroll",
          "name": "hscrollBarMoved",
          "normalized": "CanvasId-\u003eDouble-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Bar Moved",
          "signature": "CanvasId-\u003eDouble-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Scroll.html#v:hscrollBarMoved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Scroll",
          "name": "moveViewPortBy",
          "package": "hoodle-core",
          "signature": "MainCoroutine () -\u003e CanvasId -\u003e ((Double, Double) -\u003e (Double, Double)) -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Scroll.html#moveViewPortBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Scroll",
          "module": "Hoodle.Coroutine.Scroll",
          "name": "moveViewPortBy",
          "normalized": "MainCoroutine()-\u003eCanvasId-\u003e((Double,Double)-\u003e(Double,Double))-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "View Port By",
          "signature": "MainCoroutine()-\u003eCanvasId-\u003e((Double,Double)-\u003e(Double,Double))-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Scroll.html#v:moveViewPortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Scroll",
          "name": "smoothScroll",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e CanvasGeometry -\u003e Double -\u003e Double -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Scroll.html#smoothScroll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Scroll",
          "module": "Hoodle.Coroutine.Scroll",
          "name": "smoothScroll",
          "normalized": "CanvasId-\u003eCanvasGeometry-\u003eDouble-\u003eDouble-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Scroll",
          "signature": "CanvasId-\u003eCanvasGeometry-\u003eDouble-\u003eDouble-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Scroll.html#v:smoothScroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Scroll",
          "name": "vscrollBarMoved",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e Double -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Scroll.html#vscrollBarMoved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Scroll",
          "module": "Hoodle.Coroutine.Scroll",
          "name": "vscrollBarMoved",
          "normalized": "CanvasId-\u003eDouble-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Bar Moved",
          "signature": "CanvasId-\u003eDouble-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Scroll.html#v:vscrollBarMoved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Scroll",
          "name": "vscrollMove",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e Double -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Scroll.html#vscrollMove",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Scroll",
          "module": "Hoodle.Coroutine.Scroll",
          "name": "vscrollMove",
          "normalized": "CanvasId-\u003eDouble-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Move",
          "signature": "CanvasId-\u003eDouble-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Scroll.html#v:vscrollMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Scroll",
          "name": "vscrollStart",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e Double -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Scroll.html#vscrollStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Scroll",
          "module": "Hoodle.Coroutine.Scroll",
          "name": "vscrollStart",
          "normalized": "CanvasId-\u003eDouble-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Start",
          "signature": "CanvasId-\u003eDouble-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Scroll.html#v:vscrollStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClipboard action while dealing with selection\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hoodle.Coroutine.Select.Clipboard",
          "name": "Clipboard",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Select-Clipboard.html",
          "type": "module"
        },
        "index": {
          "description": "Clipboard action while dealing with selection",
          "hierarchy": "Hoodle Coroutine Select Clipboard",
          "module": "Hoodle.Coroutine.Select.Clipboard",
          "name": "Clipboard",
          "package": "hoodle-core",
          "partial": "Clipboard",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select-Clipboard.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Select.Clipboard",
          "name": "copySelection",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Select-Clipboard.html#copySelection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Select Clipboard",
          "module": "Hoodle.Coroutine.Select.Clipboard",
          "name": "copySelection",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Selection",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select-Clipboard.html#v:copySelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Select.Clipboard",
          "name": "cutSelection",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Select-Clipboard.html#cutSelection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Select Clipboard",
          "module": "Hoodle.Coroutine.Select.Clipboard",
          "name": "cutSelection",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Selection",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select-Clipboard.html#v:cutSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Select.Clipboard",
          "name": "deleteSelection",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Select-Clipboard.html#deleteSelection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Select Clipboard",
          "module": "Hoodle.Coroutine.Select.Clipboard",
          "name": "deleteSelection",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Selection",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select-Clipboard.html#v:deleteSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Select.Clipboard",
          "name": "getClipFromGtk",
          "package": "hoodle-core",
          "signature": "MainCoroutine (Maybe [Item])",
          "source": "src/Hoodle-Coroutine-Select-Clipboard.html#getClipFromGtk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Select Clipboard",
          "module": "Hoodle.Coroutine.Select.Clipboard",
          "name": "getClipFromGtk",
          "normalized": "MainCoroutine(Maybe[Item])",
          "package": "hoodle-core",
          "partial": "Clip From Gtk",
          "signature": "MainCoroutine(Maybe[Item])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select-Clipboard.html#v:getClipFromGtk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Select.Clipboard",
          "name": "pasteToSelection",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Select-Clipboard.html#pasteToSelection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Select Clipboard",
          "module": "Hoodle.Coroutine.Select.Clipboard",
          "name": "pasteToSelection",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "To Selection",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select-Clipboard.html#v:pasteToSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eManipulate Image in selection\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hoodle.Coroutine.Select.ManipulateImage",
          "name": "ManipulateImage",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Select-ManipulateImage.html",
          "type": "module"
        },
        "index": {
          "description": "Manipulate Image in selection",
          "hierarchy": "Hoodle Coroutine Select ManipulateImage",
          "module": "Hoodle.Coroutine.Select.ManipulateImage",
          "name": "ManipulateImage",
          "package": "hoodle-core",
          "partial": "Manipulate Image",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select-ManipulateImage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Select.ManipulateImage",
          "name": "createCroppedImage",
          "package": "hoodle-core",
          "signature": "Image -\u003e BBox -\u003e BBox -\u003e IO (Maybe Image)",
          "source": "src/Hoodle-Coroutine-Select-ManipulateImage.html#createCroppedImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Select ManipulateImage",
          "module": "Hoodle.Coroutine.Select.ManipulateImage",
          "name": "createCroppedImage",
          "normalized": "Image-\u003eBBox-\u003eBBox-\u003eIO(Maybe Image)",
          "package": "hoodle-core",
          "partial": "Cropped Image",
          "signature": "Image-\u003eBBox-\u003eBBox-\u003eIO(Maybe Image)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select-ManipulateImage.html#v:createCroppedImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Select.ManipulateImage",
          "name": "createRotatedImage",
          "package": "hoodle-core",
          "signature": "RotateDir -\u003e Image -\u003e BBox -\u003e IO (Maybe Image)",
          "source": "src/Hoodle-Coroutine-Select-ManipulateImage.html#createRotatedImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Select ManipulateImage",
          "module": "Hoodle.Coroutine.Select.ManipulateImage",
          "name": "createRotatedImage",
          "normalized": "RotateDir-\u003eImage-\u003eBBox-\u003eIO(Maybe Image)",
          "package": "hoodle-core",
          "partial": "Rotated Image",
          "signature": "RotateDir-\u003eImage-\u003eBBox-\u003eIO(Maybe Image)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select-ManipulateImage.html#v:createRotatedImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Select.ManipulateImage",
          "name": "cropImage",
          "package": "hoodle-core",
          "signature": "BBoxed Image -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Select-ManipulateImage.html#cropImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Select ManipulateImage",
          "module": "Hoodle.Coroutine.Select.ManipulateImage",
          "name": "cropImage",
          "normalized": "BBoxed Image-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Image",
          "signature": "BBoxed Image-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select-ManipulateImage.html#v:cropImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart making a new crop rectangle\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Select.ManipulateImage",
          "name": "newCropRect",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e CanvasGeometry -\u003e TempRender (PageNum, BBox) -\u003e (Double, Double) -\u003e ((Double, Double), UTCTime) -\u003e MainCoroutine BBox",
          "source": "src/Hoodle-Coroutine-Select-ManipulateImage.html#newCropRect",
          "type": "function"
        },
        "index": {
          "description": "start making new crop rectangle",
          "hierarchy": "Hoodle Coroutine Select ManipulateImage",
          "module": "Hoodle.Coroutine.Select.ManipulateImage",
          "name": "newCropRect",
          "normalized": "CanvasId-\u003eCanvasGeometry-\u003eTempRender(PageNum,BBox)-\u003e(Double,Double)-\u003e((Double,Double),UTCTime)-\u003eMainCoroutine BBox",
          "package": "hoodle-core",
          "partial": "Crop Rect",
          "signature": "CanvasId-\u003eCanvasGeometry-\u003eTempRender(PageNum,BBox)-\u003e(Double,Double)-\u003e((Double,Double),UTCTime)-\u003eMainCoroutine BBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select-ManipulateImage.html#v:newCropRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Select.ManipulateImage",
          "name": "rotateImage",
          "package": "hoodle-core",
          "signature": "RotateDir -\u003e BBoxed Image -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Select-ManipulateImage.html#rotateImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Select ManipulateImage",
          "module": "Hoodle.Coroutine.Select.ManipulateImage",
          "name": "rotateImage",
          "normalized": "RotateDir-\u003eBBoxed Image-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Image",
          "signature": "RotateDir-\u003eBBoxed Image-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select-ManipulateImage.html#v:rotateImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Select.ManipulateImage",
          "name": "startCropRect",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e BBoxed Image -\u003e (Hoodle SelectMode, Page SelectMode) -\u003e PointerCoord -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Select-ManipulateImage.html#startCropRect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Select ManipulateImage",
          "module": "Hoodle.Coroutine.Select.ManipulateImage",
          "name": "startCropRect",
          "normalized": "CanvasId-\u003eBBoxed Image-\u003e(Hoodle SelectMode,Page SelectMode)-\u003ePointerCoord-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Crop Rect",
          "signature": "CanvasId-\u003eBBoxed Image-\u003e(Hoodle SelectMode,Page SelectMode)-\u003ePointerCoord-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select-ManipulateImage.html#v:startCropRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eselection-related coroutines  \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hoodle.Coroutine.Select",
          "name": "Select",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Select.html",
          "type": "module"
        },
        "index": {
          "description": "selection-related coroutines",
          "hierarchy": "Hoodle Coroutine Select",
          "module": "Hoodle.Coroutine.Select",
          "name": "Select",
          "package": "hoodle-core",
          "partial": "Select",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecommon main mouse pointer click entrance in selection mode. \n   choose either starting new selection or move previously \n   selected selection. \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Select",
          "name": "commonSelectStart",
          "package": "hoodle-core",
          "signature": "SelectType -\u003e PenButton -\u003e CanvasId -\u003e PointerCoord -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Select.html#commonSelectStart",
          "type": "function"
        },
        "index": {
          "description": "common main mouse pointer click entrance in selection mode choose either starting new selection or move previously selected selection",
          "hierarchy": "Hoodle Coroutine Select",
          "module": "Hoodle.Coroutine.Select",
          "name": "commonSelectStart",
          "normalized": "SelectType-\u003ePenButton-\u003eCanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Select Start",
          "signature": "SelectType-\u003ePenButton-\u003eCanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select.html#v:commonSelectStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor Selection mode from pen mode with 2nd pen button\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Select",
          "name": "dealWithOneTimeSelectMode",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()-\u003e MainCoroutine ()-\u003e MainCoroutine ()",
          "type": "function"
        },
        "index": {
          "description": "For Selection mode from pen mode with nd pen button",
          "hierarchy": "Hoodle Coroutine Select",
          "module": "Hoodle.Coroutine.Select",
          "name": "dealWithOneTimeSelectMode",
          "normalized": "MainCoroutine()-\u003eMainCoroutine()-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "With One Time Select Mode",
          "signature": "MainCoroutine()-\u003eMainCoroutine()-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select.html#v:dealWithOneTimeSelectMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Select",
          "name": "moveSelect",
          "package": "hoodle-core",
          "signature": "CanvasId-\u003e PageNum-\u003e CanvasGeometry-\u003e (Double, Double)-\u003e ((Double, Double), UTCTime)-\u003e TempRender ItmsNImg-\u003e MainCoroutine ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Select",
          "module": "Hoodle.Coroutine.Select",
          "name": "moveSelect",
          "normalized": "CanvasId-\u003ePageNum-\u003eCanvasGeometry-\u003e(Double,Double)-\u003e((Double,Double),UTCTime)-\u003eTempRender ItmsNImg-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Select",
          "signature": "CanvasId-\u003ePageNum-\u003eCanvasGeometry-\u003e(Double,Double)-\u003e((Double,Double),UTCTime)-\u003eTempRender ItmsNImg-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select.html#v:moveSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Select",
          "name": "newSelectLasso",
          "package": "hoodle-core",
          "signature": "CanvasInfo a -\u003e PageNum -\u003e CanvasGeometry -\u003e [RItem] -\u003e (Double, Double) -\u003e ((Double, Double), UTCTime) -\u003e Seq (Double, Double) -\u003e TempSelection -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Select.html#newSelectLasso",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Select",
          "module": "Hoodle.Coroutine.Select",
          "name": "newSelectLasso",
          "normalized": "CanvasInfo a-\u003ePageNum-\u003eCanvasGeometry-\u003e[RItem]-\u003e(Double,Double)-\u003e((Double,Double),UTCTime)-\u003eSeq(Double,Double)-\u003eTempSelection-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Select Lasso",
          "signature": "CanvasInfo a-\u003ePageNum-\u003eCanvasGeometry-\u003e[RItem]-\u003e(Double,Double)-\u003e((Double,Double),UTCTime)-\u003eSeq(Double,Double)-\u003eTempSelection-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select.html#v:newSelectLasso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Select",
          "name": "newSelectRectangle",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e PageNum -\u003e CanvasGeometry -\u003e [RItem] -\u003e (Double, Double) -\u003e ((Double, Double), UTCTime) -\u003e TempSelection -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Select.html#newSelectRectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Select",
          "module": "Hoodle.Coroutine.Select",
          "name": "newSelectRectangle",
          "normalized": "CanvasId-\u003ePageNum-\u003eCanvasGeometry-\u003e[RItem]-\u003e(Double,Double)-\u003e((Double,Double),UTCTime)-\u003eTempSelection-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Select Rectangle",
          "signature": "CanvasId-\u003ePageNum-\u003eCanvasGeometry-\u003e[RItem]-\u003e(Double,Double)-\u003e((Double,Double),UTCTime)-\u003eTempSelection-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select.html#v:newSelectRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Select",
          "name": "resizeSelect",
          "package": "hoodle-core",
          "signature": "Bool-\u003e Handle-\u003e CanvasId-\u003e PageNum-\u003e CanvasGeometry-\u003e BBox-\u003e ((Double, Double), UTCTime)-\u003e TempRender ItmsNImg-\u003e MainCoroutine ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Select",
          "module": "Hoodle.Coroutine.Select",
          "name": "resizeSelect",
          "normalized": "Bool-\u003eHandle-\u003eCanvasId-\u003ePageNum-\u003eCanvasGeometry-\u003eBBox-\u003e((Double,Double),UTCTime)-\u003eTempRender ItmsNImg-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Select",
          "signature": "Bool-\u003eHandle-\u003eCanvasId-\u003ePageNum-\u003eCanvasGeometry-\u003eBBox-\u003e((Double,Double),UTCTime)-\u003eTempRender ItmsNImg-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select.html#v:resizeSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emain mouse pointer click entrance in lasso selection mode. \n   choose either starting new rectangular selection or move previously \n   selected selection. \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Select",
          "name": "selectLassoStart",
          "package": "hoodle-core",
          "signature": "PenButton -\u003e CanvasId -\u003e PointerCoord -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Select.html#selectLassoStart",
          "type": "function"
        },
        "index": {
          "description": "main mouse pointer click entrance in lasso selection mode choose either starting new rectangular selection or move previously selected selection",
          "hierarchy": "Hoodle Coroutine Select",
          "module": "Hoodle.Coroutine.Select",
          "name": "selectLassoStart",
          "normalized": "PenButton-\u003eCanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Lasso Start",
          "signature": "PenButton-\u003eCanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select.html#v:selectLassoStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Select",
          "name": "selectPenColorChanged",
          "package": "hoodle-core",
          "signature": "PenColor -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Select.html#selectPenColorChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Select",
          "module": "Hoodle.Coroutine.Select",
          "name": "selectPenColorChanged",
          "normalized": "PenColor-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Pen Color Changed",
          "signature": "PenColor-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select.html#v:selectPenColorChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Select",
          "name": "selectPenWidthChanged",
          "package": "hoodle-core",
          "signature": "Double -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Select.html#selectPenWidthChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Select",
          "module": "Hoodle.Coroutine.Select",
          "name": "selectPenWidthChanged",
          "normalized": "Double-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Pen Width Changed",
          "signature": "Double-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select.html#v:selectPenWidthChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emain mouse pointer click entrance in rectangular selection mode. \n   choose either starting new rectangular selection or move previously \n   selected selection. \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Select",
          "name": "selectRectStart",
          "package": "hoodle-core",
          "signature": "PenButton -\u003e CanvasId -\u003e PointerCoord -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Select.html#selectRectStart",
          "type": "function"
        },
        "index": {
          "description": "main mouse pointer click entrance in rectangular selection mode choose either starting new rectangular selection or move previously selected selection",
          "hierarchy": "Hoodle Coroutine Select",
          "module": "Hoodle.Coroutine.Select",
          "name": "selectRectStart",
          "normalized": "PenButton-\u003eCanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Rect Start",
          "signature": "PenButton-\u003eCanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select.html#v:selectRectStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprepare for moving selection \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Select",
          "name": "startMoveSelect",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e PageNum -\u003e CanvasGeometry -\u003e ((Double, Double), UTCTime) -\u003e Page SelectMode -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Select.html#startMoveSelect",
          "type": "function"
        },
        "index": {
          "description": "prepare for moving selection",
          "hierarchy": "Hoodle Coroutine Select",
          "module": "Hoodle.Coroutine.Select",
          "name": "startMoveSelect",
          "normalized": "CanvasId-\u003ePageNum-\u003eCanvasGeometry-\u003e((Double,Double),UTCTime)-\u003ePage SelectMode-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Move Select",
          "signature": "CanvasId-\u003ePageNum-\u003eCanvasGeometry-\u003e((Double,Double),UTCTime)-\u003ePage SelectMode-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select.html#v:startMoveSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprepare for resizing selection \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Select",
          "name": "startResizeSelect",
          "package": "hoodle-core",
          "signature": "Bool-\u003e Handle-\u003e CanvasId-\u003e PageNum-\u003e CanvasGeometry-\u003e BBox-\u003e ((Double, Double), UTCTime)-\u003e Page SelectMode-\u003e MainCoroutine ()",
          "type": "function"
        },
        "index": {
          "description": "prepare for resizing selection",
          "hierarchy": "Hoodle Coroutine Select",
          "module": "Hoodle.Coroutine.Select",
          "name": "startResizeSelect",
          "normalized": "Bool-\u003eHandle-\u003eCanvasId-\u003ePageNum-\u003eCanvasGeometry-\u003eBBox-\u003e((Double,Double),UTCTime)-\u003ePage SelectMode-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Resize Select",
          "signature": "Bool-\u003eHandle-\u003eCanvasId-\u003ePageNum-\u003eCanvasGeometry-\u003eBBox-\u003e((Double,Double),UTCTime)-\u003ePage SelectMode-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Select.html#v:startResizeSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.TextInput",
          "name": "TextInput",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-TextInput.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine TextInput",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "TextInput",
          "package": "hoodle-core",
          "partial": "Text Input",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-TextInput.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecombine all LaTeX texts into a text file \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "combineLaTeXText",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-TextInput.html#combineLaTeXText",
          "type": "function"
        },
        "index": {
          "description": "combine all LaTeX texts into text file",
          "hierarchy": "Hoodle Coroutine TextInput",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "combineLaTeXText",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "La Te XText",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-TextInput.html#v:combineLaTeXText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.TextInput",
          "name": "convertLinkFromSimpleToDocID",
          "package": "hoodle-core",
          "signature": "Link -\u003e IO (Maybe Link)",
          "source": "src/Hoodle-Coroutine-TextInput.html#convertLinkFromSimpleToDocID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine TextInput",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "convertLinkFromSimpleToDocID",
          "normalized": "Link-\u003eIO(Maybe Link)",
          "package": "hoodle-core",
          "partial": "Link From Simple To Doc ID",
          "signature": "Link-\u003eIO(Maybe Link)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-TextInput.html#v:convertLinkFromSimpleToDocID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.TextInput",
          "name": "laTeXFooter",
          "package": "hoodle-core",
          "signature": "Text",
          "source": "src/Hoodle-Coroutine-TextInput.html#laTeXFooter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine TextInput",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "laTeXFooter",
          "package": "hoodle-core",
          "partial": "Te XFooter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-TextInput.html#v:laTeXFooter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.TextInput",
          "name": "laTeXHeader",
          "package": "hoodle-core",
          "signature": "Text",
          "source": "src/Hoodle-Coroutine-TextInput.html#laTeXHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine TextInput",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "laTeXHeader",
          "package": "hoodle-core",
          "partial": "Te XHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-TextInput.html#v:laTeXHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einsert latex\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "laTeXInput",
          "package": "hoodle-core",
          "signature": "(Double, Double) -\u003e Text -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-TextInput.html#laTeXInput",
          "type": "function"
        },
        "index": {
          "description": "insert latex",
          "hierarchy": "Hoodle Coroutine TextInput",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "laTeXInput",
          "normalized": "(Double,Double)-\u003eText-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Te XInput",
          "signature": "(Double,Double)-\u003eText-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-TextInput.html#v:laTeXInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.TextInput",
          "name": "laTeXInputNetwork",
          "package": "hoodle-core",
          "signature": "(Double, Double) -\u003e Text -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-TextInput.html#laTeXInputNetwork",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine TextInput",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "laTeXInputNetwork",
          "normalized": "(Double,Double)-\u003eText-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Te XInput Network",
          "signature": "(Double,Double)-\u003eText-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-TextInput.html#v:laTeXInputNetwork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.TextInput",
          "name": "linkInsert",
          "package": "hoodle-core",
          "signature": "ByteString -\u003e (ByteString, FilePath) -\u003e String -\u003e (ByteString, BBox) -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-TextInput.html#linkInsert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine TextInput",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "linkInsert",
          "normalized": "ByteString-\u003e(ByteString,FilePath)-\u003eString-\u003e(ByteString,BBox)-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Insert",
          "signature": "ByteString-\u003e(ByteString,FilePath)-\u003eString-\u003e(ByteString,BBox)-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-TextInput.html#v:linkInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.TextInput",
          "name": "makeLaTeXSVG",
          "package": "hoodle-core",
          "signature": "(Double, Double) -\u003e Text -\u003e IO (Either String (ByteString, BBox))",
          "source": "src/Hoodle-Coroutine-TextInput.html#makeLaTeXSVG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine TextInput",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "makeLaTeXSVG",
          "normalized": "(Double,Double)-\u003eText-\u003eIO(Either String(ByteString,BBox))",
          "package": "hoodle-core",
          "partial": "La Te XSVG",
          "signature": "(Double,Double)-\u003eText-\u003eIO(Either String(ByteString,BBox))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-TextInput.html#v:makeLaTeXSVG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.TextInput",
          "name": "makePangoTextSVG",
          "package": "hoodle-core",
          "signature": "(Double, Double) -\u003e Text -\u003e IO (ByteString, BBox)",
          "source": "src/Hoodle-Coroutine-TextInput.html#makePangoTextSVG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine TextInput",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "makePangoTextSVG",
          "normalized": "(Double,Double)-\u003eText-\u003eIO(ByteString,BBox)",
          "package": "hoodle-core",
          "partial": "Pango Text SVG",
          "signature": "(Double,Double)-\u003eText-\u003eIO(ByteString,BBox)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-TextInput.html#v:makePangoTextSVG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.TextInput",
          "name": "multiLineDialog",
          "package": "hoodle-core",
          "signature": "Text -\u003e Either (ActionOrder AllEvent) AllEvent",
          "source": "src/Hoodle-Coroutine-TextInput.html#multiLineDialog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine TextInput",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "multiLineDialog",
          "normalized": "Text-\u003eEither(ActionOrder AllEvent)AllEvent",
          "package": "hoodle-core",
          "partial": "Line Dialog",
          "signature": "Text-\u003eEither(ActionOrder AllEvent)AllEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-TextInput.html#v:multiLineDialog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.TextInput",
          "name": "multiLineLoop",
          "package": "hoodle-core",
          "signature": "Text -\u003e MainCoroutine (Maybe Text)",
          "source": "src/Hoodle-Coroutine-TextInput.html#multiLineLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine TextInput",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "multiLineLoop",
          "normalized": "Text-\u003eMainCoroutine(Maybe Text)",
          "package": "hoodle-core",
          "partial": "Line Loop",
          "signature": "Text-\u003eMainCoroutine(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-TextInput.html#v:multiLineLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.TextInput",
          "name": "svgInsert",
          "package": "hoodle-core",
          "signature": "(Text, String) -\u003e (ByteString, BBox) -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-TextInput.html#svgInsert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine TextInput",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "svgInsert",
          "normalized": "(Text,String)-\u003e(ByteString,BBox)-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Insert",
          "signature": "(Text,String)-\u003e(ByteString,BBox)-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-TextInput.html#v:svgInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einsert text \n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "textInput",
          "package": "hoodle-core",
          "signature": "(Double, Double) -\u003e Text -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-TextInput.html#textInput",
          "type": "function"
        },
        "index": {
          "description": "insert text",
          "hierarchy": "Hoodle Coroutine TextInput",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "textInput",
          "normalized": "(Double,Double)-\u003eText-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Input",
          "signature": "(Double,Double)-\u003eText-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-TextInput.html#v:textInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esingle line text input : almost abandoned now\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "textInputDialog",
          "package": "hoodle-core",
          "signature": "MainCoroutine (Maybe String)",
          "source": "src/Hoodle-Coroutine-TextInput.html#textInputDialog",
          "type": "function"
        },
        "index": {
          "description": "single line text input almost abandoned now",
          "hierarchy": "Hoodle Coroutine TextInput",
          "module": "Hoodle.Coroutine.TextInput",
          "name": "textInputDialog",
          "package": "hoodle-core",
          "partial": "Input Dialog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-TextInput.html#v:textInputDialog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.VerticalSpace",
          "name": "VerticalSpace",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-VerticalSpace.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine VerticalSpace",
          "module": "Hoodle.Coroutine.VerticalSpace",
          "name": "VerticalSpace",
          "package": "hoodle-core",
          "partial": "Vertical Space",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-VerticalSpace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.VerticalSpace",
          "name": "addNewPageAndMoveBelow",
          "package": "hoodle-core",
          "signature": "(PageNum, SeqZipper RItemHitted, BBox) -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-VerticalSpace.html#addNewPageAndMoveBelow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine VerticalSpace",
          "module": "Hoodle.Coroutine.VerticalSpace",
          "name": "addNewPageAndMoveBelow",
          "normalized": "(PageNum,SeqZipper RItemHitted,BBox)-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "New Page And Move Below",
          "signature": "(PageNum,SeqZipper RItemHitted,BBox)-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-VerticalSpace.html#v:addNewPageAndMoveBelow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.VerticalSpace",
          "name": "moveBelowToNewPage",
          "package": "hoodle-core",
          "signature": "(PageNum, SeqZipper RItemHitted, BBox) -\u003e Hoodle EditMode -\u003e Hoodle EditMode",
          "source": "src/Hoodle-Coroutine-VerticalSpace.html#moveBelowToNewPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine VerticalSpace",
          "module": "Hoodle.Coroutine.VerticalSpace",
          "name": "moveBelowToNewPage",
          "normalized": "(PageNum,SeqZipper RItemHitted,BBox)-\u003eHoodle EditMode-\u003eHoodle EditMode",
          "package": "hoodle-core",
          "partial": "Below To New Page",
          "signature": "(PageNum,SeqZipper RItemHitted,BBox)-\u003eHoodle EditMode-\u003eHoodle EditMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-VerticalSpace.html#v:moveBelowToNewPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.VerticalSpace",
          "name": "splitPageByHLine",
          "package": "hoodle-core",
          "signature": "Double -\u003e Page EditMode -\u003e ([RItem], Page EditMode, SeqZipper RItemHitted)",
          "source": "src/Hoodle-Coroutine-VerticalSpace.html#splitPageByHLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine VerticalSpace",
          "module": "Hoodle.Coroutine.VerticalSpace",
          "name": "splitPageByHLine",
          "normalized": "Double-\u003ePage EditMode-\u003e([RItem],Page EditMode,SeqZipper RItemHitted)",
          "package": "hoodle-core",
          "partial": "Page By HLine",
          "signature": "Double-\u003ePage EditMode-\u003e([RItem],Page EditMode,SeqZipper RItemHitted)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-VerticalSpace.html#v:splitPageByHLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.VerticalSpace",
          "name": "verticalSpaceProcess",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e CanvasGeometry -\u003e (BBox, SeqZipper RItemHitted, PageNum, Page EditMode) -\u003e (Double, Double) -\u003e (Surface, Surface, Surface) -\u003e UTCTime -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-VerticalSpace.html#verticalSpaceProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine VerticalSpace",
          "module": "Hoodle.Coroutine.VerticalSpace",
          "name": "verticalSpaceProcess",
          "normalized": "CanvasId-\u003eCanvasGeometry-\u003e(BBox,SeqZipper RItemHitted,PageNum,Page EditMode)-\u003e(Double,Double)-\u003e(Surface,Surface,Surface)-\u003eUTCTime-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Space Process",
          "signature": "CanvasId-\u003eCanvasGeometry-\u003e(BBox,SeqZipper RItemHitted,PageNum,Page EditMode)-\u003e(Double,Double)-\u003e(Surface,Surface,Surface)-\u003eUTCTime-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-VerticalSpace.html#v:verticalSpaceProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.VerticalSpace",
          "name": "verticalSpaceStart",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e PointerCoord -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-VerticalSpace.html#verticalSpaceStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine VerticalSpace",
          "module": "Hoodle.Coroutine.VerticalSpace",
          "name": "verticalSpaceStart",
          "normalized": "CanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Space Start",
          "signature": "CanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-VerticalSpace.html#v:verticalSpaceStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Window",
          "name": "Window",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine-Window.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Window",
          "module": "Hoodle.Coroutine.Window",
          "name": "Window",
          "package": "hoodle-core",
          "partial": "Window",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Window.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecanvas configure with general zoom update func\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Window",
          "name": "canvasConfigureGenUpdate",
          "package": "hoodle-core",
          "signature": "MainCoroutine () -\u003e CanvasId -\u003e CanvasDimension -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Window.html#canvasConfigureGenUpdate",
          "type": "function"
        },
        "index": {
          "description": "canvas configure with general zoom update func",
          "hierarchy": "Hoodle Coroutine Window",
          "module": "Hoodle.Coroutine.Window",
          "name": "canvasConfigureGenUpdate",
          "normalized": "MainCoroutine()-\u003eCanvasId-\u003eCanvasDimension-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Configure Gen Update",
          "signature": "MainCoroutine()-\u003eCanvasId-\u003eCanvasDimension-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Window.html#v:canvasConfigureGenUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Window",
          "name": "deleteCanvas",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Window.html#deleteCanvas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Window",
          "module": "Hoodle.Coroutine.Window",
          "name": "deleteCanvas",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Canvas",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Window.html#v:deleteCanvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Window",
          "name": "doCanvasConfigure",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e CanvasDimension -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Window.html#doCanvasConfigure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Window",
          "module": "Hoodle.Coroutine.Window",
          "name": "doCanvasConfigure",
          "normalized": "CanvasId-\u003eCanvasDimension-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Canvas Configure",
          "signature": "CanvasId-\u003eCanvasDimension-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Window.html#v:doCanvasConfigure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Window",
          "name": "eitherSplit",
          "package": "hoodle-core",
          "signature": "SplitType -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Window.html#eitherSplit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Window",
          "module": "Hoodle.Coroutine.Window",
          "name": "eitherSplit",
          "normalized": "SplitType-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Split",
          "signature": "SplitType-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Window.html#v:eitherSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Window",
          "name": "fullScreen",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Window.html#fullScreen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Window",
          "module": "Hoodle.Coroutine.Window",
          "name": "fullScreen",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Screen",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Window.html#v:fullScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine.Window",
          "name": "paneMoveStart",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Window.html#paneMoveStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine Window",
          "module": "Hoodle.Coroutine.Window",
          "name": "paneMoveStart",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Move Start",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Window.html#v:paneMoveStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enot yet implemented?\n\u003c/p\u003e",
          "module": "Hoodle.Coroutine.Window",
          "name": "paneMoved",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Coroutine-Window.html#paneMoved",
          "type": "function"
        },
        "index": {
          "description": "not yet implemented",
          "hierarchy": "Hoodle Coroutine Window",
          "module": "Hoodle.Coroutine.Window",
          "name": "paneMoved",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Moved",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine-Window.html#v:paneMoved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Coroutine",
          "name": "Coroutine",
          "package": "hoodle-core",
          "source": "src/Hoodle-Coroutine.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Coroutine",
          "module": "Hoodle.Coroutine",
          "name": "Coroutine",
          "package": "hoodle-core",
          "partial": "Coroutine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Coroutine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "Device",
          "package": "hoodle-core",
          "source": "src/Hoodle-Device.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "Device",
          "package": "hoodle-core",
          "partial": "Device",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "DeviceList",
          "package": "hoodle-core",
          "source": "src/Hoodle-Device.html#DeviceList",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "DeviceList",
          "package": "hoodle-core",
          "partial": "Device List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#t:DeviceList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "PenButton",
          "package": "hoodle-core",
          "source": "src/Hoodle-Device.html#PenButton",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "PenButton",
          "package": "hoodle-core",
          "partial": "Pen Button",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#t:PenButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "PointerCoord",
          "package": "hoodle-core",
          "source": "src/Hoodle-Device.html#PointerCoord",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "PointerCoord",
          "package": "hoodle-core",
          "partial": "Pointer Coord",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#t:PointerCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "PointerType",
          "package": "hoodle-core",
          "source": "src/Hoodle-Device.html#PointerType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "PointerType",
          "package": "hoodle-core",
          "partial": "Pointer Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#t:PointerType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "Core",
          "package": "hoodle-core",
          "signature": "Core",
          "source": "src/Hoodle-Device.html#PointerType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "Core",
          "package": "hoodle-core",
          "partial": "Core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:Core"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "DeviceList",
          "package": "hoodle-core",
          "signature": "DeviceList",
          "source": "src/Hoodle-Device.html#DeviceList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "DeviceList",
          "package": "hoodle-core",
          "partial": "Device List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:DeviceList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "Eraser",
          "package": "hoodle-core",
          "signature": "Eraser",
          "source": "src/Hoodle-Device.html#PointerType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "Eraser",
          "package": "hoodle-core",
          "partial": "Eraser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:Eraser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "EraserButton",
          "package": "hoodle-core",
          "signature": "EraserButton",
          "source": "src/Hoodle-Device.html#PenButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "EraserButton",
          "package": "hoodle-core",
          "partial": "Eraser Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:EraserButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "NoPointerCoord",
          "package": "hoodle-core",
          "signature": "NoPointerCoord",
          "source": "src/Hoodle-Device.html#PointerCoord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "NoPointerCoord",
          "package": "hoodle-core",
          "partial": "No Pointer Coord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:NoPointerCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "PenButton1",
          "package": "hoodle-core",
          "signature": "PenButton1",
          "source": "src/Hoodle-Device.html#PenButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "PenButton1",
          "package": "hoodle-core",
          "partial": "Pen Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:PenButton1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "PenButton2",
          "package": "hoodle-core",
          "signature": "PenButton2",
          "source": "src/Hoodle-Device.html#PenButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "PenButton2",
          "package": "hoodle-core",
          "partial": "Pen Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:PenButton2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "PenButton3",
          "package": "hoodle-core",
          "signature": "PenButton3",
          "source": "src/Hoodle-Device.html#PenButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "PenButton3",
          "package": "hoodle-core",
          "partial": "Pen Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:PenButton3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "PointerCoord",
          "package": "hoodle-core",
          "signature": "PointerCoord",
          "source": "src/Hoodle-Device.html#PointerCoord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "PointerCoord",
          "package": "hoodle-core",
          "partial": "Pointer Coord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:PointerCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "Stylus",
          "package": "hoodle-core",
          "signature": "Stylus",
          "source": "src/Hoodle-Device.html#PointerType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "Stylus",
          "package": "hoodle-core",
          "partial": "Stylus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:Stylus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "Touch",
          "package": "hoodle-core",
          "signature": "Touch",
          "source": "src/Hoodle-Device.html#PointerType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "Touch",
          "package": "hoodle-core",
          "partial": "Touch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:Touch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "TouchButton",
          "package": "hoodle-core",
          "signature": "TouchButton",
          "source": "src/Hoodle-Device.html#PenButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "TouchButton",
          "package": "hoodle-core",
          "partial": "Touch Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:TouchButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "c_find_wacom",
          "package": "hoodle-core",
          "signature": "CString -\u003e CString -\u003e IO ()",
          "source": "src/Hoodle-Device.html#c_find_wacom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "c_find_wacom",
          "normalized": "CString-\u003eCString-\u003eIO()",
          "package": "hoodle-core",
          "signature": "CString-\u003eCString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:c_find_wacom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "c_initdevice",
          "package": "hoodle-core",
          "signature": "Ptr CInt-\u003e Ptr CInt-\u003e Ptr CInt-\u003e Ptr CInt-\u003e CString-\u003e CString-\u003e CString-\u003e CString-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "c_initdevice",
          "normalized": "Ptr CInt-\u003ePtr CInt-\u003ePtr CInt-\u003ePtr CInt-\u003eCString-\u003eCString-\u003eCString-\u003eCString-\u003eIO()",
          "package": "hoodle-core",
          "signature": "Ptr CInt-\u003ePtr CInt-\u003ePtr CInt-\u003ePtr CInt-\u003eCString-\u003eCString-\u003eCString-\u003eCString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:c_initdevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "dev_core",
          "package": "hoodle-core",
          "signature": "CInt",
          "source": "src/Hoodle-Device.html#DeviceList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "dev_core",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:dev_core"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "dev_core_str",
          "package": "hoodle-core",
          "signature": "String",
          "source": "src/Hoodle-Device.html#DeviceList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "dev_core_str",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:dev_core_str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "dev_eraser",
          "package": "hoodle-core",
          "signature": "CInt",
          "source": "src/Hoodle-Device.html#DeviceList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "dev_eraser",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:dev_eraser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "dev_eraser_str",
          "package": "hoodle-core",
          "signature": "String",
          "source": "src/Hoodle-Device.html#DeviceList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "dev_eraser_str",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:dev_eraser_str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "dev_stylus",
          "package": "hoodle-core",
          "signature": "CInt",
          "source": "src/Hoodle-Device.html#DeviceList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "dev_stylus",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:dev_stylus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "dev_stylus_str",
          "package": "hoodle-core",
          "signature": "String",
          "source": "src/Hoodle-Device.html#DeviceList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "dev_stylus_str",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:dev_stylus_str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "dev_touch",
          "package": "hoodle-core",
          "signature": "CInt",
          "source": "src/Hoodle-Device.html#DeviceList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "dev_touch",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:dev_touch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "dev_touch_str",
          "package": "hoodle-core",
          "signature": "String",
          "source": "src/Hoodle-Device.html#DeviceList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "dev_touch_str",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:dev_touch_str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "getPointer",
          "package": "hoodle-core",
          "signature": "DeviceList -\u003e EventM t (Maybe PenButton, Maybe PointerCoord)",
          "source": "src/Hoodle-Device.html#getPointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "getPointer",
          "normalized": "DeviceList-\u003eEventM a(Maybe PenButton,Maybe PointerCoord)",
          "package": "hoodle-core",
          "partial": "Pointer",
          "signature": "DeviceList-\u003eEventM t(Maybe PenButton,Maybe PointerCoord)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:getPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "initDevice",
          "package": "hoodle-core",
          "signature": "Config -\u003e IO DeviceList",
          "source": "src/Hoodle-Device.html#initDevice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "initDevice",
          "normalized": "Config-\u003eIO DeviceList",
          "package": "hoodle-core",
          "partial": "Device",
          "signature": "Config-\u003eIO DeviceList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:initDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "pointerType",
          "package": "hoodle-core",
          "signature": "PointerType",
          "source": "src/Hoodle-Device.html#PointerCoord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "pointerType",
          "package": "hoodle-core",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:pointerType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "pointerX",
          "package": "hoodle-core",
          "signature": "Double",
          "source": "src/Hoodle-Device.html#PointerCoord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "pointerX",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:pointerX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "pointerY",
          "package": "hoodle-core",
          "signature": "Double",
          "source": "src/Hoodle-Device.html#PointerCoord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "pointerY",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:pointerY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "pointerZ",
          "package": "hoodle-core",
          "signature": "Double",
          "source": "src/Hoodle-Device.html#PointerCoord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "pointerZ",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:pointerZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "wacomCoordConvert",
          "package": "hoodle-core",
          "signature": "self -\u003e (Double, Double) -\u003e IO (Double, Double)",
          "source": "src/Hoodle-Device.html#wacomCoordConvert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "wacomCoordConvert",
          "normalized": "a-\u003e(Double,Double)-\u003eIO(Double,Double)",
          "package": "hoodle-core",
          "partial": "Coord Convert",
          "signature": "self-\u003e(Double,Double)-\u003eIO(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:wacomCoordConvert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Device",
          "name": "wacomPConvert",
          "package": "hoodle-core",
          "signature": "self -\u003e PointerCoord -\u003e IO (Double, Double)",
          "source": "src/Hoodle-Device.html#wacomPConvert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Device",
          "module": "Hoodle.Device",
          "name": "wacomPConvert",
          "normalized": "a-\u003ePointerCoord-\u003eIO(Double,Double)",
          "package": "hoodle-core",
          "partial": "PConvert",
          "signature": "self-\u003ePointerCoord-\u003eIO(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Device.html#v:wacomPConvert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConstruct hoodle menus \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hoodle.GUI.Menu",
          "name": "Menu",
          "package": "hoodle-core",
          "source": "src/Hoodle-GUI-Menu.html",
          "type": "module"
        },
        "index": {
          "description": "Construct hoodle menus",
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "Menu",
          "package": "hoodle-core",
          "partial": "Menu",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "actionGroupAddRadioActionsAndGetConnID",
          "package": "hoodle-core",
          "signature": "ActionGroup -\u003e [RadioActionEntry] -\u003e Int -\u003e (RadioAction -\u003e IO ()) -\u003e IO (Maybe (ConnectId RadioAction))",
          "source": "src/Hoodle-GUI-Menu.html#actionGroupAddRadioActionsAndGetConnID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "actionGroupAddRadioActionsAndGetConnID",
          "normalized": "ActionGroup-\u003e[RadioActionEntry]-\u003eInt-\u003e(RadioAction-\u003eIO())-\u003eIO(Maybe(ConnectId RadioAction))",
          "package": "hoodle-core",
          "partial": "Group Add Radio Actions And Get Conn ID",
          "signature": "ActionGroup-\u003e[RadioActionEntry]-\u003eInt-\u003e(RadioAction-\u003eIO())-\u003eIO(Maybe(ConnectId RadioAction))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:actionGroupAddRadioActionsAndGetConnID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "actionNewAndRegisterRef",
          "package": "hoodle-core",
          "signature": "EventVar -\u003e String -\u003e String -\u003e Maybe String -\u003e Maybe StockId -\u003e Maybe UserEvent -\u003e IO Action",
          "source": "src/Hoodle-GUI-Menu.html#actionNewAndRegisterRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "actionNewAndRegisterRef",
          "normalized": "EventVar-\u003eString-\u003eString-\u003eMaybe String-\u003eMaybe StockId-\u003eMaybe UserEvent-\u003eIO Action",
          "package": "hoodle-core",
          "partial": "New And Register Ref",
          "signature": "EventVar-\u003eString-\u003eString-\u003eMaybe String-\u003eMaybe StockId-\u003eMaybe UserEvent-\u003eIO Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:actionNewAndRegisterRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "assignBkgStyle",
          "package": "hoodle-core",
          "signature": "EventVar -\u003e RadioAction -\u003e IO ()",
          "source": "src/Hoodle-GUI-Menu.html#assignBkgStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "assignBkgStyle",
          "normalized": "EventVar-\u003eRadioAction-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Bkg Style",
          "signature": "EventVar-\u003eRadioAction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:assignBkgStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "assignColor",
          "package": "hoodle-core",
          "signature": "EventVar -\u003e RadioAction -\u003e IO ()",
          "source": "src/Hoodle-GUI-Menu.html#assignColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "assignColor",
          "normalized": "EventVar-\u003eRadioAction-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Color",
          "signature": "EventVar-\u003eRadioAction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:assignColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "assignPenMode",
          "package": "hoodle-core",
          "signature": "EventVar -\u003e RadioAction -\u003e IO ()",
          "source": "src/Hoodle-GUI-Menu.html#assignPenMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "assignPenMode",
          "normalized": "EventVar-\u003eRadioAction-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Pen Mode",
          "signature": "EventVar-\u003eRadioAction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:assignPenMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "assignPoint",
          "package": "hoodle-core",
          "signature": "EventVar -\u003e RadioAction -\u003e IO ()",
          "source": "src/Hoodle-GUI-Menu.html#assignPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "assignPoint",
          "normalized": "EventVar-\u003eRadioAction-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Point",
          "signature": "EventVar-\u003eRadioAction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:assignPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "assignViewMode",
          "package": "hoodle-core",
          "signature": "EventVar -\u003e RadioAction -\u003e IO ()",
          "source": "src/Hoodle-GUI-Menu.html#assignViewMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "assignViewMode",
          "normalized": "EventVar-\u003eRadioAction-\u003eIO()",
          "package": "hoodle-core",
          "partial": "View Mode",
          "signature": "EventVar-\u003eRadioAction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:assignViewMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "bkgstyles",
          "package": "hoodle-core",
          "signature": "[RadioActionEntry]",
          "source": "src/Hoodle-GUI-Menu.html#bkgstyles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "bkgstyles",
          "normalized": "[RadioActionEntry]",
          "package": "hoodle-core",
          "signature": "[RadioActionEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:bkgstyles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "color2Int",
          "package": "hoodle-core",
          "signature": "PenColor -\u003e Int",
          "source": "src/Hoodle-GUI-Menu.html#color2Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "color2Int",
          "normalized": "PenColor-\u003eInt",
          "package": "hoodle-core",
          "partial": "Int",
          "signature": "PenColor-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:color2Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "colormods",
          "package": "hoodle-core",
          "signature": "[RadioActionEntry]",
          "source": "src/Hoodle-GUI-Menu.html#colormods",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "colormods",
          "normalized": "[RadioActionEntry]",
          "package": "hoodle-core",
          "signature": "[RadioActionEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:colormods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "getMenuUI",
          "package": "hoodle-core",
          "signature": "EventVar -\u003e IO (UIManager, UIComponentSignalHandler)",
          "source": "src/Hoodle-GUI-Menu.html#getMenuUI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "getMenuUI",
          "normalized": "EventVar-\u003eIO(UIManager,UIComponentSignalHandler)",
          "package": "hoodle-core",
          "partial": "Menu UI",
          "signature": "EventVar-\u003eIO(UIManager,UIComponentSignalHandler)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:getMenuUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euiDecl :: String \n uiDecl = [verbatim|\n |]\n\u003c/p\u003e",
          "module": "Hoodle.GUI.Menu",
          "name": "iconList",
          "package": "hoodle-core",
          "signature": "[(String, String)]",
          "source": "src/Hoodle-GUI-Menu.html#iconList",
          "type": "function"
        },
        "index": {
          "description": "uiDecl String uiDecl verbatim",
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "iconList",
          "normalized": "[(String,String)]",
          "package": "hoodle-core",
          "partial": "List",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:iconList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "iconResourceAdd",
          "package": "hoodle-core",
          "signature": "IconFactory -\u003e FilePath -\u003e (FilePath, StockId) -\u003e IO ()",
          "source": "src/Hoodle-GUI-Menu.html#iconResourceAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "iconResourceAdd",
          "normalized": "IconFactory-\u003eFilePath-\u003e(FilePath,StockId)-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Resource Add",
          "signature": "IconFactory-\u003eFilePath-\u003e(FilePath,StockId)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:iconResourceAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "int2BkgStyle",
          "package": "hoodle-core",
          "signature": "Int -\u003e BackgroundStyle",
          "source": "src/Hoodle-GUI-Menu.html#int2BkgStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "int2BkgStyle",
          "normalized": "Int-\u003eBackgroundStyle",
          "package": "hoodle-core",
          "partial": "Bkg Style",
          "signature": "Int-\u003eBackgroundStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:int2BkgStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "int2Color",
          "package": "hoodle-core",
          "signature": "Int -\u003e PenColor",
          "source": "src/Hoodle-GUI-Menu.html#int2Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "int2Color",
          "normalized": "Int-\u003ePenColor",
          "package": "hoodle-core",
          "partial": "Color",
          "signature": "Int-\u003ePenColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:int2Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "int2PenType",
          "package": "hoodle-core",
          "signature": "Int -\u003e Either PenType SelectType",
          "source": "src/Hoodle-GUI-Menu.html#int2PenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "int2PenType",
          "normalized": "Int-\u003eEither PenType SelectType",
          "package": "hoodle-core",
          "partial": "Pen Type",
          "signature": "Int-\u003eEither PenType SelectType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:int2PenType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "int2Point",
          "package": "hoodle-core",
          "signature": "PenType -\u003e Int -\u003e Double",
          "source": "src/Hoodle-GUI-Menu.html#int2Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "int2Point",
          "normalized": "PenType-\u003eInt-\u003eDouble",
          "package": "hoodle-core",
          "partial": "Point",
          "signature": "PenType-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:int2Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "justMenu",
          "package": "hoodle-core",
          "signature": "MenuEvent -\u003e Maybe UserEvent",
          "source": "src/Hoodle-GUI-Menu.html#justMenu",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "justMenu",
          "normalized": "MenuEvent-\u003eMaybe UserEvent",
          "package": "hoodle-core",
          "partial": "Menu",
          "signature": "MenuEvent-\u003eMaybe UserEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:justMenu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "penType2Int",
          "package": "hoodle-core",
          "signature": "Either PenType SelectType -\u003e Int",
          "source": "src/Hoodle-GUI-Menu.html#penType2Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "penType2Int",
          "normalized": "Either PenType SelectType-\u003eInt",
          "package": "hoodle-core",
          "partial": "Type Int",
          "signature": "Either PenType SelectType-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:penType2Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "penmods",
          "package": "hoodle-core",
          "signature": "[RadioActionEntry]",
          "source": "src/Hoodle-GUI-Menu.html#penmods",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "penmods",
          "normalized": "[RadioActionEntry]",
          "package": "hoodle-core",
          "signature": "[RadioActionEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:penmods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "point2Int",
          "package": "hoodle-core",
          "signature": "PenType -\u003e Double -\u003e Int",
          "source": "src/Hoodle-GUI-Menu.html#point2Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "point2Int",
          "normalized": "PenType-\u003eDouble-\u003eInt",
          "package": "hoodle-core",
          "partial": "Int",
          "signature": "PenType-\u003eDouble-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:point2Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "pointmods",
          "package": "hoodle-core",
          "signature": "[RadioActionEntry]",
          "source": "src/Hoodle-GUI-Menu.html#pointmods",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "pointmods",
          "normalized": "[RadioActionEntry]",
          "package": "hoodle-core",
          "signature": "[RadioActionEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:pointmods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "similarTo",
          "package": "hoodle-core",
          "signature": "Double -\u003e Double -\u003e Bool",
          "source": "src/Hoodle-GUI-Menu.html#similarTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "similarTo",
          "normalized": "Double-\u003eDouble-\u003eBool",
          "package": "hoodle-core",
          "partial": "To",
          "signature": "Double-\u003eDouble-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:similarTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Menu",
          "name": "viewmods",
          "package": "hoodle-core",
          "signature": "[RadioActionEntry]",
          "source": "src/Hoodle-GUI-Menu.html#viewmods",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Menu",
          "module": "Hoodle.GUI.Menu",
          "name": "viewmods",
          "normalized": "[RadioActionEntry]",
          "package": "hoodle-core",
          "signature": "[RadioActionEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Menu.html#v:viewmods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Reflect",
          "name": "Reflect",
          "package": "hoodle-core",
          "source": "src/Hoodle-GUI-Reflect.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle GUI Reflect",
          "module": "Hoodle.GUI.Reflect",
          "name": "Reflect",
          "package": "hoodle-core",
          "partial": "Reflect",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Reflect.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Reflect",
          "name": "blockWhile",
          "package": "hoodle-core",
          "signature": "Maybe (ConnectId w) -\u003e IO () -\u003e IO ()",
          "source": "src/Hoodle-GUI-Reflect.html#blockWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Reflect",
          "module": "Hoodle.GUI.Reflect",
          "name": "blockWhile",
          "normalized": "Maybe(ConnectId a)-\u003eIO()-\u003eIO()",
          "package": "hoodle-core",
          "partial": "While",
          "signature": "Maybe(ConnectId w)-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Reflect.html#v:blockWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Reflect",
          "name": "reflectPenColorUI",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-GUI-Reflect.html#reflectPenColorUI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Reflect",
          "module": "Hoodle.GUI.Reflect",
          "name": "reflectPenColorUI",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Pen Color UI",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Reflect.html#v:reflectPenColorUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Reflect",
          "name": "reflectPenModeUI",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-GUI-Reflect.html#reflectPenModeUI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Reflect",
          "module": "Hoodle.GUI.Reflect",
          "name": "reflectPenModeUI",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Pen Mode UI",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Reflect.html#v:reflectPenModeUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Reflect",
          "name": "reflectPenWidthUI",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-GUI-Reflect.html#reflectPenWidthUI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Reflect",
          "module": "Hoodle.GUI.Reflect",
          "name": "reflectPenWidthUI",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Pen Width UI",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Reflect.html#v:reflectPenWidthUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI.Reflect",
          "name": "reflectUIComponent",
          "package": "hoodle-core",
          "signature": "Simple Lens UIComponentSignalHandler (Maybe (ConnectId RadioAction)) -\u003e String -\u003e (HoodleState -\u003e Maybe Int) -\u003e MainCoroutine ()",
          "source": "src/Hoodle-GUI-Reflect.html#reflectUIComponent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI Reflect",
          "module": "Hoodle.GUI.Reflect",
          "name": "reflectUIComponent",
          "normalized": "Simple Lens UIComponentSignalHandler(Maybe(ConnectId RadioAction))-\u003eString-\u003e(HoodleState-\u003eMaybe Int)-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "UIComponent",
          "signature": "Simple Lens UIComponentSignalHandler(Maybe(ConnectId RadioAction))-\u003eString-\u003e(HoodleState-\u003eMaybe Int)-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Reflect.html#v:reflectUIComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereflect view mode UI for current canvas info \n\u003c/p\u003e",
          "module": "Hoodle.GUI.Reflect",
          "name": "reflectViewModeUI",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-GUI-Reflect.html#reflectViewModeUI",
          "type": "function"
        },
        "index": {
          "description": "reflect view mode UI for current canvas info",
          "hierarchy": "Hoodle GUI Reflect",
          "module": "Hoodle.GUI.Reflect",
          "name": "reflectViewModeUI",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "View Mode UI",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI-Reflect.html#v:reflectViewModeUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI",
          "name": "GUI",
          "package": "hoodle-core",
          "source": "src/Hoodle-GUI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle GUI",
          "module": "Hoodle.GUI",
          "name": "GUI",
          "package": "hoodle-core",
          "partial": "GUI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.GUI",
          "name": "startGUI",
          "package": "hoodle-core",
          "signature": "Maybe FilePath -\u003e Maybe Hook -\u003e IO ()",
          "source": "src/Hoodle-GUI.html#startGUI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle GUI",
          "module": "Hoodle.GUI",
          "name": "startGUI",
          "normalized": "Maybe FilePath-\u003eMaybe Hook-\u003eIO()",
          "package": "hoodle-core",
          "partial": "GUI",
          "signature": "Maybe FilePath-\u003eMaybe Hook-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-GUI.html#v:startGUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Adjustment",
          "name": "Adjustment",
          "package": "hoodle-core",
          "source": "src/Hoodle-ModelAction-Adjustment.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Adjustment",
          "module": "Hoodle.ModelAction.Adjustment",
          "name": "Adjustment",
          "package": "hoodle-core",
          "partial": "Adjustment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Adjustment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadjust values, upper limit and page size according to canvas geometry \n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Adjustment",
          "name": "adjustScrollbarWithGeometry",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e ((Adjustment, Maybe (ConnectId Adjustment)), (Adjustment, Maybe (ConnectId Adjustment))) -\u003e IO ()",
          "source": "src/Hoodle-ModelAction-Adjustment.html#adjustScrollbarWithGeometry",
          "type": "function"
        },
        "index": {
          "description": "adjust values upper limit and page size according to canvas geometry",
          "hierarchy": "Hoodle ModelAction Adjustment",
          "module": "Hoodle.ModelAction.Adjustment",
          "name": "adjustScrollbarWithGeometry",
          "normalized": "CanvasGeometry-\u003e((Adjustment,Maybe(ConnectId Adjustment)),(Adjustment,Maybe(ConnectId Adjustment)))-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Scrollbar With Geometry",
          "signature": "CanvasGeometry-\u003e((Adjustment,Maybe(ConnectId Adjustment)),(Adjustment,Maybe(ConnectId Adjustment)))-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Adjustment.html#v:adjustScrollbarWithGeometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Adjustment",
          "name": "setAdjustments",
          "package": "hoodle-core",
          "signature": "((Adjustment, Maybe (ConnectId Adjustment)), (Adjustment, Maybe (ConnectId Adjustment))) -\u003e (Double, Double) -\u003e (Double, Double) -\u003e (Double, Double) -\u003e (Double, Double) -\u003e IO ()",
          "source": "src/Hoodle-ModelAction-Adjustment.html#setAdjustments",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Adjustment",
          "module": "Hoodle.ModelAction.Adjustment",
          "name": "setAdjustments",
          "normalized": "((Adjustment,Maybe(ConnectId Adjustment)),(Adjustment,Maybe(ConnectId Adjustment)))-\u003e(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Adjustments",
          "signature": "((Adjustment,Maybe(ConnectId Adjustment)),(Adjustment,Maybe(ConnectId Adjustment)))-\u003e(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Adjustment.html#v:setAdjustments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClipboard io actions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hoodle.ModelAction.Clipboard",
          "name": "Clipboard",
          "package": "hoodle-core",
          "source": "src/Hoodle-ModelAction-Clipboard.html",
          "type": "module"
        },
        "index": {
          "description": "Clipboard io actions",
          "hierarchy": "Hoodle ModelAction Clipboard",
          "module": "Hoodle.ModelAction.Clipboard",
          "name": "Clipboard",
          "package": "hoodle-core",
          "partial": "Clipboard",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Clipboard.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Clipboard",
          "name": "callback4Clip",
          "package": "hoodle-core",
          "signature": "(AllEvent -\u003e IO ()) -\u003e Maybe String -\u003e IO ()",
          "source": "src/Hoodle-ModelAction-Clipboard.html#callback4Clip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Clipboard",
          "module": "Hoodle.ModelAction.Clipboard",
          "name": "callback4Clip",
          "normalized": "(AllEvent-\u003eIO())-\u003eMaybe String-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Clip",
          "signature": "(AllEvent-\u003eIO())-\u003eMaybe String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Clipboard.html#v:callback4Clip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Clipboard",
          "name": "updateClipboard",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e [Item] -\u003e IO HoodleState",
          "source": "src/Hoodle-ModelAction-Clipboard.html#updateClipboard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Clipboard",
          "module": "Hoodle.ModelAction.Clipboard",
          "name": "updateClipboard",
          "normalized": "HoodleState-\u003e[Item]-\u003eIO HoodleState",
          "package": "hoodle-core",
          "partial": "Clipboard",
          "signature": "HoodleState-\u003e[Item]-\u003eIO HoodleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Clipboard.html#v:updateClipboard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.ContextMenu",
          "name": "ContextMenu",
          "package": "hoodle-core",
          "source": "src/Hoodle-ModelAction-ContextMenu.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction ContextMenu",
          "module": "Hoodle.ModelAction.ContextMenu",
          "name": "ContextMenu",
          "package": "hoodle-core",
          "partial": "Context Menu",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-ContextMenu.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.ContextMenu",
          "name": "makeSVGFromSelection",
          "package": "hoodle-core",
          "signature": "[RItem] -\u003e BBox -\u003e IO SVG",
          "source": "src/Hoodle-ModelAction-ContextMenu.html#makeSVGFromSelection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction ContextMenu",
          "module": "Hoodle.ModelAction.ContextMenu",
          "name": "makeSVGFromSelection",
          "normalized": "[RItem]-\u003eBBox-\u003eIO SVG",
          "package": "hoodle-core",
          "partial": "SVGFrom Selection",
          "signature": "[RItem]-\u003eBBox-\u003eIO SVG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-ContextMenu.html#v:makeSVGFromSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.ContextMenu",
          "name": "menuCreateALink",
          "package": "hoodle-core",
          "signature": "(AllEvent -\u003e IO ()) -\u003e [RItem] -\u003e IO (Maybe MenuItem)",
          "source": "src/Hoodle-ModelAction-ContextMenu.html#menuCreateALink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction ContextMenu",
          "module": "Hoodle.ModelAction.ContextMenu",
          "name": "menuCreateALink",
          "normalized": "(AllEvent-\u003eIO())-\u003e[RItem]-\u003eIO(Maybe MenuItem)",
          "package": "hoodle-core",
          "partial": "Create ALink",
          "signature": "(AllEvent-\u003eIO())-\u003e[RItem]-\u003eIO(Maybe MenuItem)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-ContextMenu.html#v:menuCreateALink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.ContextMenu",
          "name": "menuOpenALink",
          "package": "hoodle-core",
          "signature": "UrlPath -\u003e IO MenuItem",
          "source": "src/Hoodle-ModelAction-ContextMenu.html#menuOpenALink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction ContextMenu",
          "module": "Hoodle.ModelAction.ContextMenu",
          "name": "menuOpenALink",
          "normalized": "UrlPath-\u003eIO MenuItem",
          "package": "hoodle-core",
          "partial": "Open ALink",
          "signature": "UrlPath-\u003eIO MenuItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-ContextMenu.html#v:menuOpenALink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.ContextMenu",
          "name": "openLinkAction",
          "package": "hoodle-core",
          "signature": "UrlPath -\u003e IO ()",
          "source": "src/Hoodle-ModelAction-ContextMenu.html#openLinkAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction ContextMenu",
          "module": "Hoodle.ModelAction.ContextMenu",
          "name": "openLinkAction",
          "normalized": "UrlPath-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Link Action",
          "signature": "UrlPath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-ContextMenu.html#v:openLinkAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Eraser",
          "name": "Eraser",
          "package": "hoodle-core",
          "source": "src/Hoodle-ModelAction-Eraser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Eraser",
          "module": "Hoodle.ModelAction.Eraser",
          "name": "Eraser",
          "package": "hoodle-core",
          "partial": "Eraser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Eraser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Eraser",
          "name": "eraseHitted",
          "package": "hoodle-core",
          "signature": "AlterList (NotHitted a) (AlterList (NotHitted a) (Hitted a)) -\u003e State (Maybe BBox) [a]",
          "source": "src/Hoodle-ModelAction-Eraser.html#eraseHitted",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Eraser",
          "module": "Hoodle.ModelAction.Eraser",
          "name": "eraseHitted",
          "normalized": "AlterList(NotHitted a)(AlterList(NotHitted a)(Hitted a))-\u003eState(Maybe BBox)[a]",
          "package": "hoodle-core",
          "partial": "Hitted",
          "signature": "AlterList(NotHitted a)(AlterList(NotHitted a)(Hitted a))-\u003eState(Maybe BBox)[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Eraser.html#v:eraseHitted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.File",
          "name": "File",
          "package": "hoodle-core",
          "source": "src/Hoodle-ModelAction-File.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction File",
          "module": "Hoodle.ModelAction.File",
          "name": "File",
          "package": "hoodle-core",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echeck hoodle version and migrate if necessary \n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.File",
          "name": "checkVersionAndMigrate",
          "package": "hoodle-core",
          "signature": "ByteString -\u003e IO (Either String Hoodle)",
          "source": "src/Hoodle-ModelAction-File.html#checkVersionAndMigrate",
          "type": "function"
        },
        "index": {
          "description": "check hoodle version and migrate if necessary",
          "hierarchy": "Hoodle ModelAction File",
          "module": "Hoodle.ModelAction.File",
          "name": "checkVersionAndMigrate",
          "normalized": "ByteString-\u003eIO(Either String Hoodle)",
          "package": "hoodle-core",
          "partial": "Version And Migrate",
          "signature": "ByteString-\u003eIO(Either String Hoodle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-File.html#v:checkVersionAndMigrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.File",
          "name": "constructNewHoodleStateFromHoodle",
          "package": "hoodle-core",
          "signature": "Hoodle -\u003e HoodleState -\u003e IO HoodleState",
          "source": "src/Hoodle-ModelAction-File.html#constructNewHoodleStateFromHoodle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction File",
          "module": "Hoodle.ModelAction.File",
          "name": "constructNewHoodleStateFromHoodle",
          "normalized": "Hoodle-\u003eHoodleState-\u003eIO HoodleState",
          "package": "hoodle-core",
          "partial": "New Hoodle State From Hoodle",
          "signature": "Hoodle-\u003eHoodleState-\u003eIO HoodleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-File.html#v:constructNewHoodleStateFromHoodle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.File",
          "name": "createPage",
          "package": "hoodle-core",
          "signature": "Bool-\u003e Dimension-\u003e ByteString-\u003e Int-\u003e Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction File",
          "module": "Hoodle.ModelAction.File",
          "name": "createPage",
          "normalized": "Bool-\u003eDimension-\u003eByteString-\u003eInt-\u003ePage",
          "package": "hoodle-core",
          "partial": "Page",
          "signature": "Bool-\u003eDimension-\u003eByteString-\u003eInt-\u003ePage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-File.html#v:createPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.File",
          "name": "embedPDFInHoodle",
          "package": "hoodle-core",
          "signature": "RHoodle -\u003e IO RHoodle",
          "source": "src/Hoodle-ModelAction-File.html#embedPDFInHoodle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction File",
          "module": "Hoodle.ModelAction.File",
          "name": "embedPDFInHoodle",
          "normalized": "RHoodle-\u003eIO RHoodle",
          "package": "hoodle-core",
          "partial": "PDFIn Hoodle",
          "signature": "RHoodle-\u003eIO RHoodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-File.html#v:embedPDFInHoodle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.File",
          "name": "findAllPDFPages",
          "package": "hoodle-core",
          "signature": "[(Int, RPage)] -\u003e [Int]",
          "source": "src/Hoodle-ModelAction-File.html#findAllPDFPages",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction File",
          "module": "Hoodle.ModelAction.File",
          "name": "findAllPDFPages",
          "normalized": "[(Int,RPage)]-\u003e[Int]",
          "package": "hoodle-core",
          "partial": "All PDFPages",
          "signature": "[(Int,RPage)]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-File.html#v:findAllPDFPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis is very temporary, need to be changed.     \n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.File",
          "name": "findFirstPDFFile",
          "package": "hoodle-core",
          "signature": "[(Int, RPage)] -\u003e Maybe ByteString",
          "source": "src/Hoodle-ModelAction-File.html#findFirstPDFFile",
          "type": "function"
        },
        "index": {
          "description": "this is very temporary need to be changed",
          "hierarchy": "Hoodle ModelAction File",
          "module": "Hoodle.ModelAction.File",
          "name": "findFirstPDFFile",
          "normalized": "[(Int,RPage)]-\u003eMaybe ByteString",
          "package": "hoodle-core",
          "partial": "First PDFFile",
          "signature": "[(Int,RPage)]-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-File.html#v:findFirstPDFFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget file content from xournal file and update xournal state \n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.File",
          "name": "getFileContent",
          "package": "hoodle-core",
          "signature": "Maybe FilePath -\u003e HoodleState -\u003e IO HoodleState",
          "source": "src/Hoodle-ModelAction-File.html#getFileContent",
          "type": "function"
        },
        "index": {
          "description": "get file content from xournal file and update xournal state",
          "hierarchy": "Hoodle ModelAction File",
          "module": "Hoodle.ModelAction.File",
          "name": "getFileContent",
          "normalized": "Maybe FilePath-\u003eHoodleState-\u003eIO HoodleState",
          "package": "hoodle-core",
          "partial": "File Content",
          "signature": "Maybe FilePath-\u003eHoodleState-\u003eIO HoodleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-File.html#v:getFileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.File",
          "name": "makeEmbeddedPdfSrcString",
          "package": "hoodle-core",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Hoodle-ModelAction-File.html#makeEmbeddedPdfSrcString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction File",
          "module": "Hoodle.ModelAction.File",
          "name": "makeEmbeddedPdfSrcString",
          "normalized": "ByteString-\u003eByteString",
          "package": "hoodle-core",
          "partial": "Embedded Pdf Src String",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-File.html#v:makeEmbeddedPdfSrcString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.File",
          "name": "makeNewHoodleWithPDF",
          "package": "hoodle-core",
          "signature": "Bool-\u003e FilePath-\u003e IO (Maybe Hoodle)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction File",
          "module": "Hoodle.ModelAction.File",
          "name": "makeNewHoodleWithPDF",
          "normalized": "Bool-\u003eFilePath-\u003eIO(Maybe Hoodle)",
          "package": "hoodle-core",
          "partial": "New Hoodle With PDF",
          "signature": "Bool-\u003eFilePath-\u003eIO(Maybe Hoodle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-File.html#v:makeNewHoodleWithPDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.File",
          "name": "makeNewItemImage",
          "package": "hoodle-core",
          "signature": "Bool-\u003e FilePath-\u003e IO Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction File",
          "module": "Hoodle.ModelAction.File",
          "name": "makeNewItemImage",
          "normalized": "Bool-\u003eFilePath-\u003eIO Item",
          "package": "hoodle-core",
          "partial": "New Item Image",
          "signature": "Bool-\u003eFilePath-\u003eIO Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-File.html#v:makeNewItemImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.File",
          "name": "replacePDFPages",
          "package": "hoodle-core",
          "signature": "[(Int, RPage)] -\u003e [(Int, RPage)]",
          "source": "src/Hoodle-ModelAction-File.html#replacePDFPages",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction File",
          "module": "Hoodle.ModelAction.File",
          "name": "replacePDFPages",
          "normalized": "[(Int,RPage)]-\u003e[(Int,RPage)]",
          "package": "hoodle-core",
          "partial": "PDFPages",
          "signature": "[(Int,RPage)]-\u003e[(Int,RPage)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-File.html#v:replacePDFPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.File",
          "name": "saveHoodle",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e IO HoodleState",
          "source": "src/Hoodle-ModelAction-File.html#saveHoodle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction File",
          "module": "Hoodle.ModelAction.File",
          "name": "saveHoodle",
          "normalized": "HoodleState-\u003eIO HoodleState",
          "package": "hoodle-core",
          "partial": "Hoodle",
          "signature": "HoodleState-\u003eIO HoodleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-File.html#v:saveHoodle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis function must be moved to GUI.Reflect\n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.File",
          "name": "toggleSave",
          "package": "hoodle-core",
          "signature": "UIManager -\u003e Bool -\u003e IO ()",
          "source": "src/Hoodle-ModelAction-File.html#toggleSave",
          "type": "function"
        },
        "index": {
          "description": "this function must be moved to GUI.Reflect",
          "hierarchy": "Hoodle ModelAction File",
          "module": "Hoodle.ModelAction.File",
          "name": "toggleSave",
          "normalized": "UIManager-\u003eBool-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Save",
          "signature": "UIManager-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-File.html#v:toggleSave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Layer",
          "name": "Layer",
          "package": "hoodle-core",
          "source": "src/Hoodle-ModelAction-Layer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Layer",
          "module": "Hoodle.ModelAction.Layer",
          "name": "Layer",
          "package": "hoodle-core",
          "partial": "Layer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Layer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Layer",
          "name": "adjustCurrentLayer",
          "package": "hoodle-core",
          "signature": "RLayer -\u003e Page EditMode -\u003e Page EditMode",
          "source": "src/Hoodle-ModelAction-Layer.html#adjustCurrentLayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Layer",
          "module": "Hoodle.ModelAction.Layer",
          "name": "adjustCurrentLayer",
          "normalized": "RLayer-\u003ePage EditMode-\u003ePage EditMode",
          "package": "hoodle-core",
          "partial": "Current Layer",
          "signature": "RLayer-\u003ePage EditMode-\u003ePage EditMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Layer.html#v:adjustCurrentLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Layer",
          "name": "getCurrentLayer",
          "package": "hoodle-core",
          "signature": "Page EditMode -\u003e RLayer",
          "source": "src/Hoodle-ModelAction-Layer.html#getCurrentLayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Layer",
          "module": "Hoodle.ModelAction.Layer",
          "name": "getCurrentLayer",
          "normalized": "Page EditMode-\u003eRLayer",
          "package": "hoodle-core",
          "partial": "Current Layer",
          "signature": "Page EditMode-\u003eRLayer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Layer.html#v:getCurrentLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Layer",
          "name": "layerChooseDialog",
          "package": "hoodle-core",
          "signature": "IORef Int -\u003e Int -\u003e Int -\u003e IO Dialog",
          "source": "src/Hoodle-ModelAction-Layer.html#layerChooseDialog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Layer",
          "module": "Hoodle.ModelAction.Layer",
          "name": "layerChooseDialog",
          "normalized": "IORef Int-\u003eInt-\u003eInt-\u003eIO Dialog",
          "package": "hoodle-core",
          "partial": "Choose Dialog",
          "signature": "IORef Int-\u003eInt-\u003eInt-\u003eIO Dialog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Layer.html#v:layerChooseDialog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Page",
          "name": "Page",
          "package": "hoodle-core",
          "source": "src/Hoodle-ModelAction-Page.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Page",
          "module": "Hoodle.ModelAction.Page",
          "name": "Page",
          "package": "hoodle-core",
          "partial": "Page",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Page.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Page",
          "name": "addNewPageInHoodle",
          "package": "hoodle-core",
          "signature": "BackgroundStyle -\u003e AddDirection -\u003e Hoodle EditMode -\u003e Int -\u003e Hoodle EditMode",
          "source": "src/Hoodle-ModelAction-Page.html#addNewPageInHoodle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Page",
          "module": "Hoodle.ModelAction.Page",
          "name": "addNewPageInHoodle",
          "normalized": "BackgroundStyle-\u003eAddDirection-\u003eHoodle EditMode-\u003eInt-\u003eHoodle EditMode",
          "package": "hoodle-core",
          "partial": "New Page In Hoodle",
          "signature": "BackgroundStyle-\u003eAddDirection-\u003eHoodle EditMode-\u003eInt-\u003eHoodle EditMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Page.html#v:addNewPageInHoodle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Page",
          "name": "adjustPage",
          "package": "hoodle-core",
          "signature": "HoodleModeState -\u003e CanvasInfoBox -\u003e CanvasInfoBox",
          "source": "src/Hoodle-ModelAction-Page.html#adjustPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Page",
          "module": "Hoodle.ModelAction.Page",
          "name": "adjustPage",
          "normalized": "HoodleModeState-\u003eCanvasInfoBox-\u003eCanvasInfoBox",
          "package": "hoodle-core",
          "partial": "Page",
          "signature": "HoodleModeState-\u003eCanvasInfoBox-\u003eCanvasInfoBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Page.html#v:adjustPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Page",
          "name": "getPageFromGHoodleMap",
          "package": "hoodle-core",
          "signature": "Int -\u003e GHoodle IntMap a -\u003e a",
          "source": "src/Hoodle-ModelAction-Page.html#getPageFromGHoodleMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Page",
          "module": "Hoodle.ModelAction.Page",
          "name": "getPageFromGHoodleMap",
          "normalized": "Int-\u003eGHoodle IntMap a-\u003ea",
          "package": "hoodle-core",
          "partial": "Page From GHoodle Map",
          "signature": "Int-\u003eGHoodle IntMap a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Page.html#v:getPageFromGHoodleMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Page",
          "name": "getPageMap",
          "package": "hoodle-core",
          "signature": "HoodleModeState -\u003e IntMap (Page EditMode)",
          "source": "src/Hoodle-ModelAction-Page.html#getPageMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Page",
          "module": "Hoodle.ModelAction.Page",
          "name": "getPageMap",
          "normalized": "HoodleModeState-\u003eIntMap(Page EditMode)",
          "package": "hoodle-core",
          "partial": "Page Map",
          "signature": "HoodleModeState-\u003eIntMap(Page EditMode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Page.html#v:getPageMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Page",
          "name": "newSinglePageFromOld",
          "package": "hoodle-core",
          "signature": "Page EditMode -\u003e Page EditMode",
          "source": "src/Hoodle-ModelAction-Page.html#newSinglePageFromOld",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Page",
          "module": "Hoodle.ModelAction.Page",
          "name": "newSinglePageFromOld",
          "normalized": "Page EditMode-\u003ePage EditMode",
          "package": "hoodle-core",
          "partial": "Single Page From Old",
          "signature": "Page EditMode-\u003ePage EditMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Page.html#v:newSinglePageFromOld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eneed to be refactored into zoomRatioFrmRelToCurr (rename zoomRatioRelPredefined)\n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Page",
          "name": "relZoomRatio",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e ZoomModeRel -\u003e Double",
          "source": "src/Hoodle-ModelAction-Page.html#relZoomRatio",
          "type": "function"
        },
        "index": {
          "description": "need to be refactored into zoomRatioFrmRelToCurr rename zoomRatioRelPredefined",
          "hierarchy": "Hoodle ModelAction Page",
          "module": "Hoodle.ModelAction.Page",
          "name": "relZoomRatio",
          "normalized": "CanvasGeometry-\u003eZoomModeRel-\u003eDouble",
          "package": "hoodle-core",
          "partial": "Zoom Ratio",
          "signature": "CanvasGeometry-\u003eZoomModeRel-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Page.html#v:relZoomRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Page",
          "name": "setPage",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e PageNum -\u003e CanvasId -\u003e IO CanvasInfoBox",
          "source": "src/Hoodle-ModelAction-Page.html#setPage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Page",
          "module": "Hoodle.ModelAction.Page",
          "name": "setPage",
          "normalized": "HoodleState-\u003ePageNum-\u003eCanvasId-\u003eIO CanvasInfoBox",
          "package": "hoodle-core",
          "partial": "Page",
          "signature": "HoodleState-\u003ePageNum-\u003eCanvasId-\u003eIO CanvasInfoBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Page.html#v:setPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esetPageCont : in Continuous Page mode   \n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Page",
          "name": "setPageCont",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e PageNum -\u003e CanvasInfo ContinuousPage -\u003e IO (CanvasInfo ContinuousPage)",
          "source": "src/Hoodle-ModelAction-Page.html#setPageCont",
          "type": "function"
        },
        "index": {
          "description": "setPageCont in Continuous Page mode",
          "hierarchy": "Hoodle ModelAction Page",
          "module": "Hoodle.ModelAction.Page",
          "name": "setPageCont",
          "normalized": "HoodleState-\u003ePageNum-\u003eCanvasInfo ContinuousPage-\u003eIO(CanvasInfo ContinuousPage)",
          "package": "hoodle-core",
          "partial": "Page Cont",
          "signature": "HoodleState-\u003ePageNum-\u003eCanvasInfo ContinuousPage-\u003eIO(CanvasInfo ContinuousPage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Page.html#v:setPageCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Page",
          "name": "setPageMap",
          "package": "hoodle-core",
          "signature": "IntMap (Page EditMode) -\u003e HoodleModeState -\u003e HoodleModeState",
          "source": "src/Hoodle-ModelAction-Page.html#setPageMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Page",
          "module": "Hoodle.ModelAction.Page",
          "name": "setPageMap",
          "normalized": "IntMap(Page EditMode)-\u003eHoodleModeState-\u003eHoodleModeState",
          "package": "hoodle-core",
          "partial": "Page Map",
          "signature": "IntMap(Page EditMode)-\u003eHoodleModeState-\u003eHoodleModeState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Page.html#v:setPageMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esetPageSingle : in Single Page mode   \n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Page",
          "name": "setPageSingle",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e PageNum -\u003e CanvasInfo SinglePage -\u003e IO (CanvasInfo SinglePage)",
          "source": "src/Hoodle-ModelAction-Page.html#setPageSingle",
          "type": "function"
        },
        "index": {
          "description": "setPageSingle in Single Page mode",
          "hierarchy": "Hoodle ModelAction Page",
          "module": "Hoodle.ModelAction.Page",
          "name": "setPageSingle",
          "normalized": "HoodleState-\u003ePageNum-\u003eCanvasInfo SinglePage-\u003eIO(CanvasInfo SinglePage)",
          "package": "hoodle-core",
          "partial": "Page Single",
          "signature": "HoodleState-\u003ePageNum-\u003eCanvasInfo SinglePage-\u003eIO(CanvasInfo SinglePage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Page.html#v:setPageSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Page",
          "name": "updateCvsInfoFrmHoodle",
          "package": "hoodle-core",
          "signature": "Hoodle EditMode -\u003e CanvasInfoBox -\u003e IO CanvasInfoBox",
          "source": "src/Hoodle-ModelAction-Page.html#updateCvsInfoFrmHoodle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Page",
          "module": "Hoodle.ModelAction.Page",
          "name": "updateCvsInfoFrmHoodle",
          "normalized": "Hoodle EditMode-\u003eCanvasInfoBox-\u003eIO CanvasInfoBox",
          "package": "hoodle-core",
          "partial": "Cvs Info Frm Hoodle",
          "signature": "Hoodle EditMode-\u003eCanvasInfoBox-\u003eIO CanvasInfoBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Page.html#v:updateCvsInfoFrmHoodle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Page",
          "name": "updatePage",
          "package": "hoodle-core",
          "signature": "HoodleModeState -\u003e CanvasInfoBox -\u003e IO CanvasInfoBox",
          "source": "src/Hoodle-ModelAction-Page.html#updatePage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Page",
          "module": "Hoodle.ModelAction.Page",
          "name": "updatePage",
          "normalized": "HoodleModeState-\u003eCanvasInfoBox-\u003eIO CanvasInfoBox",
          "package": "hoodle-core",
          "partial": "Page",
          "signature": "HoodleModeState-\u003eCanvasInfoBox-\u003eIO CanvasInfoBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Page.html#v:updatePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Page",
          "name": "updatePageAll",
          "package": "hoodle-core",
          "signature": "HoodleModeState -\u003e HoodleState -\u003e IO HoodleState",
          "source": "src/Hoodle-ModelAction-Page.html#updatePageAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Page",
          "module": "Hoodle.ModelAction.Page",
          "name": "updatePageAll",
          "normalized": "HoodleModeState-\u003eHoodleState-\u003eIO HoodleState",
          "package": "hoodle-core",
          "partial": "Page All",
          "signature": "HoodleModeState-\u003eHoodleState-\u003eIO HoodleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Page.html#v:updatePageAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Page",
          "name": "zoomRatioFrmRelToCurr",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e Double -\u003e Double",
          "source": "src/Hoodle-ModelAction-Page.html#zoomRatioFrmRelToCurr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Page",
          "module": "Hoodle.ModelAction.Page",
          "name": "zoomRatioFrmRelToCurr",
          "normalized": "CanvasGeometry-\u003eDouble-\u003eDouble",
          "package": "hoodle-core",
          "partial": "Ratio Frm Rel To Curr",
          "signature": "CanvasGeometry-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Page.html#v:zoomRatioFrmRelToCurr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Pen",
          "name": "Pen",
          "package": "hoodle-core",
          "source": "src/Hoodle-ModelAction-Pen.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Pen",
          "module": "Hoodle.ModelAction.Pen",
          "name": "Pen",
          "package": "hoodle-core",
          "partial": "Pen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Pen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Pen",
          "name": "TempRender",
          "package": "hoodle-core",
          "source": "src/Hoodle-ModelAction-Pen.html#TempRender",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Pen",
          "module": "Hoodle.ModelAction.Pen",
          "name": "TempRender",
          "package": "hoodle-core",
          "partial": "Temp Render",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Pen.html#t:TempRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Pen",
          "name": "TempRender",
          "package": "hoodle-core",
          "signature": "TempRender",
          "source": "src/Hoodle-ModelAction-Pen.html#TempRender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Pen",
          "module": "Hoodle.ModelAction.Pen",
          "name": "TempRender",
          "package": "hoodle-core",
          "partial": "Temp Render",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Pen.html#v:TempRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Pen",
          "name": "addPDraw",
          "package": "hoodle-core",
          "signature": "PenInfo-\u003e RHoodle-\u003e PageNum-\u003e Seq (Double, Double, Double)-\u003e IO (RHoodle, BBox)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Pen",
          "module": "Hoodle.ModelAction.Pen",
          "name": "addPDraw",
          "normalized": "PenInfo-\u003eRHoodle-\u003ePageNum-\u003eSeq(Double,Double,Double)-\u003eIO(RHoodle,BBox)",
          "package": "hoodle-core",
          "partial": "PDraw",
          "signature": "PenInfo-\u003eRHoodle-\u003ePageNum-\u003eSeq(Double,Double,Double)-\u003eIO(RHoodle,BBox)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Pen.html#v:addPDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Pen",
          "name": "createNewStroke",
          "package": "hoodle-core",
          "signature": "PenInfo -\u003e Seq (Double, Double, Double) -\u003e Stroke",
          "source": "src/Hoodle-ModelAction-Pen.html#createNewStroke",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Pen",
          "module": "Hoodle.ModelAction.Pen",
          "name": "createNewStroke",
          "normalized": "PenInfo-\u003eSeq(Double,Double,Double)-\u003eStroke",
          "package": "hoodle-core",
          "partial": "New Stroke",
          "signature": "PenInfo-\u003eSeq(Double,Double,Double)-\u003eStroke",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Pen.html#v:createNewStroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Pen",
          "name": "tempInfo",
          "package": "hoodle-core",
          "signature": "a",
          "source": "src/Hoodle-ModelAction-Pen.html#TempRender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Pen",
          "module": "Hoodle.ModelAction.Pen",
          "name": "tempInfo",
          "package": "hoodle-core",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Pen.html#v:tempInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Pen",
          "name": "tempSurfaceSrc",
          "package": "hoodle-core",
          "signature": "Surface",
          "source": "src/Hoodle-ModelAction-Pen.html#TempRender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Pen",
          "module": "Hoodle.ModelAction.Pen",
          "name": "tempSurfaceSrc",
          "package": "hoodle-core",
          "partial": "Surface Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Pen.html#v:tempSurfaceSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Pen",
          "name": "tempSurfaceTgt",
          "package": "hoodle-core",
          "signature": "Surface",
          "source": "src/Hoodle-ModelAction-Pen.html#TempRender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Pen",
          "module": "Hoodle.ModelAction.Pen",
          "name": "tempSurfaceTgt",
          "package": "hoodle-core",
          "partial": "Surface Tgt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Pen.html#v:tempSurfaceTgt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eupdate the content of temp selection. should not be often updated\n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Pen",
          "name": "updateTempRender",
          "package": "hoodle-core",
          "signature": "TempRender a -\u003e Render () -\u003e Bool -\u003e IO ()",
          "source": "src/Hoodle-ModelAction-Pen.html#updateTempRender",
          "type": "function"
        },
        "index": {
          "description": "update the content of temp selection should not be often updated",
          "hierarchy": "Hoodle ModelAction Pen",
          "module": "Hoodle.ModelAction.Pen",
          "name": "updateTempRender",
          "normalized": "TempRender a-\u003eRender()-\u003eBool-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Temp Render",
          "signature": "TempRender a-\u003eRender()-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Pen.html#v:updateTempRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Pen",
          "name": "widthHeight",
          "package": "hoodle-core",
          "signature": "(Double, Double)",
          "source": "src/Hoodle-ModelAction-Pen.html#TempRender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Pen",
          "module": "Hoodle.ModelAction.Pen",
          "name": "widthHeight",
          "normalized": "(Double,Double)",
          "package": "hoodle-core",
          "partial": "Height",
          "signature": "(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Pen.html#v:widthHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "Transform",
          "package": "hoodle-core",
          "source": "src/Hoodle-ModelAction-Select-Transform.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select Transform",
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "Transform",
          "package": "hoodle-core",
          "partial": "Transform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select-Transform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "changeImageBy",
          "package": "hoodle-core",
          "signature": "((Double, Double) -\u003e (Double, Double)) -\u003e BBoxed Image -\u003e BBoxed Image",
          "source": "src/Hoodle-ModelAction-Select-Transform.html#changeImageBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select Transform",
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "changeImageBy",
          "normalized": "((Double,Double)-\u003e(Double,Double))-\u003eBBoxed Image-\u003eBBoxed Image",
          "package": "hoodle-core",
          "partial": "Image By",
          "signature": "((Double,Double)-\u003e(Double,Double))-\u003eBBoxed Image-\u003eBBoxed Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select-Transform.html#v:changeImageBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "changeItemBy",
          "package": "hoodle-core",
          "signature": "((Double, Double) -\u003e (Double, Double)) -\u003e RItem -\u003e RItem",
          "source": "src/Hoodle-ModelAction-Select-Transform.html#changeItemBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select Transform",
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "changeItemBy",
          "normalized": "((Double,Double)-\u003e(Double,Double))-\u003eRItem-\u003eRItem",
          "package": "hoodle-core",
          "partial": "Item By",
          "signature": "((Double,Double)-\u003e(Double,Double))-\u003eRItem-\u003eRItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select-Transform.html#v:changeItemBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "changeLinkBy",
          "package": "hoodle-core",
          "signature": "((Double, Double) -\u003e (Double, Double)) -\u003e BBoxed Link -\u003e BBoxed Link",
          "source": "src/Hoodle-ModelAction-Select-Transform.html#changeLinkBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select Transform",
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "changeLinkBy",
          "normalized": "((Double,Double)-\u003e(Double,Double))-\u003eBBoxed Link-\u003eBBoxed Link",
          "package": "hoodle-core",
          "partial": "Link By",
          "signature": "((Double,Double)-\u003e(Double,Double))-\u003eBBoxed Link-\u003eBBoxed Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select-Transform.html#v:changeLinkBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "changeSVGBy",
          "package": "hoodle-core",
          "signature": "((Double, Double) -\u003e (Double, Double)) -\u003e BBoxed SVG -\u003e BBoxed SVG",
          "source": "src/Hoodle-ModelAction-Select-Transform.html#changeSVGBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select Transform",
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "changeSVGBy",
          "normalized": "((Double,Double)-\u003e(Double,Double))-\u003eBBoxed SVG-\u003eBBoxed SVG",
          "package": "hoodle-core",
          "partial": "SVGBy",
          "signature": "((Double,Double)-\u003e(Double,Double))-\u003eBBoxed SVG-\u003eBBoxed SVG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select-Transform.html#v:changeSVGBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodify the whole selection using a function\n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "changeSelectionBy",
          "package": "hoodle-core",
          "signature": "((Double, Double) -\u003e (Double, Double)) -\u003e Page SelectMode -\u003e Page SelectMode",
          "source": "src/Hoodle-ModelAction-Select-Transform.html#changeSelectionBy",
          "type": "function"
        },
        "index": {
          "description": "modify the whole selection using function",
          "hierarchy": "Hoodle ModelAction Select Transform",
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "changeSelectionBy",
          "normalized": "((Double,Double)-\u003e(Double,Double))-\u003ePage SelectMode-\u003ePage SelectMode",
          "package": "hoodle-core",
          "partial": "Selection By",
          "signature": "((Double,Double)-\u003e(Double,Double))-\u003ePage SelectMode-\u003ePage SelectMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select-Transform.html#v:changeSelectionBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003especial case of offset modification\n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "changeSelectionByOffset",
          "package": "hoodle-core",
          "signature": "(Double, Double) -\u003e Page SelectMode -\u003e Page SelectMode",
          "source": "src/Hoodle-ModelAction-Select-Transform.html#changeSelectionByOffset",
          "type": "function"
        },
        "index": {
          "description": "special case of offset modification",
          "hierarchy": "Hoodle ModelAction Select Transform",
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "changeSelectionByOffset",
          "normalized": "(Double,Double)-\u003ePage SelectMode-\u003ePage SelectMode",
          "package": "hoodle-core",
          "partial": "Selection By Offset",
          "signature": "(Double,Double)-\u003ePage SelectMode-\u003ePage SelectMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select-Transform.html#v:changeSelectionByOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodify stroke using a function\n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "changeStrokeBy",
          "package": "hoodle-core",
          "signature": "((Double, Double) -\u003e (Double, Double)) -\u003e BBoxed Stroke -\u003e BBoxed Stroke",
          "source": "src/Hoodle-ModelAction-Select-Transform.html#changeStrokeBy",
          "type": "function"
        },
        "index": {
          "description": "modify stroke using function",
          "hierarchy": "Hoodle ModelAction Select Transform",
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "changeStrokeBy",
          "normalized": "((Double,Double)-\u003e(Double,Double))-\u003eBBoxed Stroke-\u003eBBoxed Stroke",
          "package": "hoodle-core",
          "partial": "Stroke By",
          "signature": "((Double,Double)-\u003e(Double,Double))-\u003eBBoxed Stroke-\u003eBBoxed Stroke",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select-Transform.html#v:changeStrokeBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "offsetFunc",
          "package": "hoodle-core",
          "signature": "(Double, Double) -\u003e (Double, Double) -\u003e (Double, Double)",
          "source": "src/Hoodle-ModelAction-Select-Transform.html#offsetFunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select Transform",
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "offsetFunc",
          "normalized": "(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)",
          "package": "hoodle-core",
          "partial": "Func",
          "signature": "(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select-Transform.html#v:offsetFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "rItmsInActiveLyr",
          "package": "hoodle-core",
          "signature": "Page SelectMode -\u003e Either [RItem] (TAlterHitted RItem)",
          "source": "src/Hoodle-ModelAction-Select-Transform.html#rItmsInActiveLyr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select Transform",
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "rItmsInActiveLyr",
          "normalized": "Page SelectMode-\u003eEither[RItem](TAlterHitted RItem)",
          "package": "hoodle-core",
          "partial": "Itms In Active Lyr",
          "signature": "Page SelectMode-\u003eEither[RItem](TAlterHitted RItem)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select-Transform.html#v:rItmsInActiveLyr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereplace selection with one item\n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "replaceSelection",
          "package": "hoodle-core",
          "signature": "RItem -\u003e Page SelectMode -\u003e Page SelectMode",
          "source": "src/Hoodle-ModelAction-Select-Transform.html#replaceSelection",
          "type": "function"
        },
        "index": {
          "description": "replace selection with one item",
          "hierarchy": "Hoodle ModelAction Select Transform",
          "module": "Hoodle.ModelAction.Select.Transform",
          "name": "replaceSelection",
          "normalized": "RItem-\u003ePage SelectMode-\u003ePage SelectMode",
          "package": "hoodle-core",
          "partial": "Selection",
          "signature": "RItem-\u003ePage SelectMode-\u003ePage SelectMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select-Transform.html#v:replaceSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "Select",
          "package": "hoodle-core",
          "source": "src/Hoodle-ModelAction-Select.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "Select",
          "package": "hoodle-core",
          "partial": "Select",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "CmpBBox",
          "package": "hoodle-core",
          "source": "src/Hoodle-ModelAction-Select.html#CmpBBox",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "CmpBBox",
          "package": "hoodle-core",
          "partial": "Cmp BBox",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#t:CmpBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "Handle",
          "package": "hoodle-core",
          "source": "src/Hoodle-ModelAction-Select.html#Handle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "Handle",
          "package": "hoodle-core",
          "partial": "Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#t:Handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "ItmsNImg",
          "package": "hoodle-core",
          "source": "src/Hoodle-ModelAction-Select.html#ItmsNImg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "ItmsNImg",
          "package": "hoodle-core",
          "partial": "Itms NImg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#t:ItmsNImg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "TempSelection",
          "package": "hoodle-core",
          "source": "src/Hoodle-ModelAction-Select.html#TempSelection",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "TempSelection",
          "package": "hoodle-core",
          "partial": "Temp Selection",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#t:TempSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "CmpBBox",
          "package": "hoodle-core",
          "signature": "CmpBBox",
          "source": "src/Hoodle-ModelAction-Select.html#CmpBBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "CmpBBox",
          "package": "hoodle-core",
          "partial": "Cmp BBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:CmpBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "HandleBL",
          "package": "hoodle-core",
          "signature": "HandleBL",
          "source": "src/Hoodle-ModelAction-Select.html#Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "HandleBL",
          "package": "hoodle-core",
          "partial": "Handle BL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:HandleBL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "HandleBM",
          "package": "hoodle-core",
          "signature": "HandleBM",
          "source": "src/Hoodle-ModelAction-Select.html#Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "HandleBM",
          "package": "hoodle-core",
          "partial": "Handle BM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:HandleBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "HandleBR",
          "package": "hoodle-core",
          "signature": "HandleBR",
          "source": "src/Hoodle-ModelAction-Select.html#Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "HandleBR",
          "package": "hoodle-core",
          "partial": "Handle BR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:HandleBR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "HandleML",
          "package": "hoodle-core",
          "signature": "HandleML",
          "source": "src/Hoodle-ModelAction-Select.html#Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "HandleML",
          "package": "hoodle-core",
          "partial": "Handle ML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:HandleML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "HandleMR",
          "package": "hoodle-core",
          "signature": "HandleMR",
          "source": "src/Hoodle-ModelAction-Select.html#Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "HandleMR",
          "package": "hoodle-core",
          "partial": "Handle MR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:HandleMR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "HandleTL",
          "package": "hoodle-core",
          "signature": "HandleTL",
          "source": "src/Hoodle-ModelAction-Select.html#Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "HandleTL",
          "package": "hoodle-core",
          "partial": "Handle TL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:HandleTL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "HandleTM",
          "package": "hoodle-core",
          "signature": "HandleTM",
          "source": "src/Hoodle-ModelAction-Select.html#Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "HandleTM",
          "package": "hoodle-core",
          "partial": "Handle TM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:HandleTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "HandleTR",
          "package": "hoodle-core",
          "signature": "HandleTR",
          "source": "src/Hoodle-ModelAction-Select.html#Handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "HandleTR",
          "package": "hoodle-core",
          "partial": "Handle TR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:HandleTR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "ItmsNImg",
          "package": "hoodle-core",
          "signature": "ItmsNImg",
          "source": "src/Hoodle-ModelAction-Select.html#ItmsNImg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "ItmsNImg",
          "package": "hoodle-core",
          "partial": "Itms NImg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:ItmsNImg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "adjustItemPosition4Paste",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e PageNum -\u003e [RItem] -\u003e [RItem]",
          "source": "src/Hoodle-ModelAction-Select.html#adjustItemPosition4Paste",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "adjustItemPosition4Paste",
          "normalized": "CanvasGeometry-\u003ePageNum-\u003e[RItem]-\u003e[RItem]",
          "package": "hoodle-core",
          "partial": "Item Position Paste",
          "signature": "CanvasGeometry-\u003ePageNum-\u003e[RItem]-\u003e[RItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:adjustItemPosition4Paste"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "angleBAC",
          "package": "hoodle-core",
          "signature": "(Double, Double) -\u003e (Double, Double) -\u003e (Double, Double) -\u003e Double",
          "source": "src/Hoodle-ModelAction-Select.html#angleBAC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "angleBAC",
          "normalized": "(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eDouble",
          "package": "hoodle-core",
          "partial": "BAC",
          "signature": "(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:angleBAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "calculateWholeBBox",
          "package": "hoodle-core",
          "signature": "[BBoxed Stroke] -\u003e Maybe BBox",
          "source": "src/Hoodle-ModelAction-Select.html#calculateWholeBBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "calculateWholeBBox",
          "normalized": "[BBoxed Stroke]-\u003eMaybe BBox",
          "package": "hoodle-core",
          "partial": "Whole BBox",
          "signature": "[BBoxed Stroke]-\u003eMaybe BBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:calculateWholeBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "changeItemStrokeColor",
          "package": "hoodle-core",
          "signature": "PenColor -\u003e RItem -\u003e RItem",
          "source": "src/Hoodle-ModelAction-Select.html#changeItemStrokeColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "changeItemStrokeColor",
          "normalized": "PenColor-\u003eRItem-\u003eRItem",
          "package": "hoodle-core",
          "partial": "Item Stroke Color",
          "signature": "PenColor-\u003eRItem-\u003eRItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:changeItemStrokeColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "changeItemStrokeWidth",
          "package": "hoodle-core",
          "signature": "Double -\u003e RItem -\u003e RItem",
          "source": "src/Hoodle-ModelAction-Select.html#changeItemStrokeWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "changeItemStrokeWidth",
          "normalized": "Double-\u003eRItem-\u003eRItem",
          "package": "hoodle-core",
          "partial": "Item Stroke Width",
          "signature": "Double-\u003eRItem-\u003eRItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:changeItemStrokeWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "changeStrokeColor",
          "package": "hoodle-core",
          "signature": "PenColor -\u003e BBoxed Stroke -\u003e BBoxed Stroke",
          "source": "src/Hoodle-ModelAction-Select.html#changeStrokeColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "changeStrokeColor",
          "normalized": "PenColor-\u003eBBoxed Stroke-\u003eBBoxed Stroke",
          "package": "hoodle-core",
          "partial": "Stroke Color",
          "signature": "PenColor-\u003eBBoxed Stroke-\u003eBBoxed Stroke",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:changeStrokeColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "changeStrokeWidth",
          "package": "hoodle-core",
          "signature": "Double -\u003e BBoxed Stroke -\u003e BBoxed Stroke",
          "source": "src/Hoodle-ModelAction-Select.html#changeStrokeWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "changeStrokeWidth",
          "normalized": "Double-\u003eBBoxed Stroke-\u003eBBoxed Stroke",
          "package": "hoodle-core",
          "partial": "Stroke Width",
          "signature": "Double-\u003eBBoxed Stroke-\u003eBBoxed Stroke",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:changeStrokeWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "checkIfHandleGrasped",
          "package": "hoodle-core",
          "signature": "BBox -\u003e (Double, Double) -\u003e Maybe Handle",
          "source": "src/Hoodle-ModelAction-Select.html#checkIfHandleGrasped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "checkIfHandleGrasped",
          "normalized": "BBox-\u003e(Double,Double)-\u003eMaybe Handle",
          "package": "hoodle-core",
          "partial": "If Handle Grasped",
          "signature": "BBox-\u003e(Double,Double)-\u003eMaybe Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:checkIfHandleGrasped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget unselected part of page and make an ordinary page\n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Select",
          "name": "deleteSelected",
          "package": "hoodle-core",
          "signature": "Page SelectMode -\u003e Page SelectMode",
          "source": "src/Hoodle-ModelAction-Select.html#deleteSelected",
          "type": "function"
        },
        "index": {
          "description": "get unselected part of page and make an ordinary page",
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "deleteSelected",
          "normalized": "Page SelectMode-\u003ePage SelectMode",
          "package": "hoodle-core",
          "partial": "Selected",
          "signature": "Page SelectMode-\u003ePage SelectMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:deleteSelected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "drawTempSelectImage",
          "package": "hoodle-core",
          "signature": "CanvasGeometry-\u003e TempRender ItmsNImg-\u003e Matrix-\u003e Render ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "drawTempSelectImage",
          "normalized": "CanvasGeometry-\u003eTempRender ItmsNImg-\u003eMatrix-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Temp Select Image",
          "signature": "CanvasGeometry-\u003eTempRender ItmsNImg-\u003eMatrix-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:drawTempSelectImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "getDiffBBox",
          "package": "hoodle-core",
          "signature": "[a] -\u003e [a] -\u003e [Diff a]",
          "source": "src/Hoodle-ModelAction-Select.html#getDiffBBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "getDiffBBox",
          "normalized": "[a]-\u003e[a]-\u003e[Diff a]",
          "package": "hoodle-core",
          "partial": "Diff BBox",
          "signature": "[a]-\u003e[a]-\u003e[Diff a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:getDiffBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "getNewBBoxFromHandlePos",
          "package": "hoodle-core",
          "signature": "Handle -\u003e BBox -\u003e (Double, Double) -\u003e BBox",
          "source": "src/Hoodle-ModelAction-Select.html#getNewBBoxFromHandlePos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "getNewBBoxFromHandlePos",
          "normalized": "Handle-\u003eBBox-\u003e(Double,Double)-\u003eBBox",
          "package": "hoodle-core",
          "partial": "New BBox From Handle Pos",
          "signature": "Handle-\u003eBBox-\u003e(Double,Double)-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:getNewBBoxFromHandlePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "getNewCoordTime",
          "package": "hoodle-core",
          "signature": "((Double, Double), UTCTime) -\u003e (Double, Double) -\u003e IO (Bool, ((Double, Double), UTCTime))",
          "source": "src/Hoodle-ModelAction-Select.html#getNewCoordTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "getNewCoordTime",
          "normalized": "((Double,Double),UTCTime)-\u003e(Double,Double)-\u003eIO(Bool,((Double,Double),UTCTime))",
          "package": "hoodle-core",
          "partial": "New Coord Time",
          "signature": "((Double,Double),UTCTime)-\u003e(Double,Double)-\u003eIO(Bool,((Double,Double),UTCTime))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:getNewCoordTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "getSelectedItms",
          "package": "hoodle-core",
          "signature": "Page SelectMode -\u003e [RItem]",
          "source": "src/Hoodle-ModelAction-Select.html#getSelectedItms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "getSelectedItms",
          "normalized": "Page SelectMode-\u003e[RItem]",
          "package": "hoodle-core",
          "partial": "Selected Itms",
          "signature": "Page SelectMode-\u003e[RItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:getSelectedItms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "getSelectedItmsFromHoodleState",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e Maybe [RItem]",
          "source": "src/Hoodle-ModelAction-Select.html#getSelectedItmsFromHoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "getSelectedItmsFromHoodleState",
          "normalized": "HoodleState-\u003eMaybe[RItem]",
          "package": "hoodle-core",
          "partial": "Selected Itms From Hoodle State",
          "signature": "HoodleState-\u003eMaybe[RItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:getSelectedItmsFromHoodleState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "getULBBoxFromSelected",
          "package": "hoodle-core",
          "signature": "Page SelectMode -\u003e ULMaybe BBox",
          "source": "src/Hoodle-ModelAction-Select.html#getULBBoxFromSelected",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "getULBBoxFromSelected",
          "normalized": "Page SelectMode-\u003eULMaybe BBox",
          "package": "hoodle-core",
          "partial": "ULBBox From Selected",
          "signature": "Page SelectMode-\u003eULMaybe BBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:getULBBoxFromSelected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "hitInHandle",
          "package": "hoodle-core",
          "signature": "Page SelectMode -\u003e (Double, Double) -\u003e Bool",
          "source": "src/Hoodle-ModelAction-Select.html#hitInHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "hitInHandle",
          "normalized": "Page SelectMode-\u003e(Double,Double)-\u003eBool",
          "package": "hoodle-core",
          "partial": "In Handle",
          "signature": "Page SelectMode-\u003e(Double,Double)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:hitInHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "hitInSelection",
          "package": "hoodle-core",
          "signature": "Page SelectMode -\u003e (Double, Double) -\u003e Bool",
          "source": "src/Hoodle-ModelAction-Select.html#hitInSelection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "hitInSelection",
          "normalized": "Page SelectMode-\u003e(Double,Double)-\u003eBool",
          "package": "hoodle-core",
          "partial": "In Selection",
          "signature": "Page SelectMode-\u003e(Double,Double)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:hitInSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "hitLassoItem",
          "package": "hoodle-core",
          "signature": "Seq (Double, Double) -\u003e RItem -\u003e Bool",
          "source": "src/Hoodle-ModelAction-Select.html#hitLassoItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "hitLassoItem",
          "normalized": "Seq(Double,Double)-\u003eRItem-\u003eBool",
          "package": "hoodle-core",
          "partial": "Lasso Item",
          "signature": "Seq(Double,Double)-\u003eRItem-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:hitLassoItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "hitLassoPoint",
          "package": "hoodle-core",
          "signature": "Seq (Double, Double) -\u003e (Double, Double) -\u003e Bool",
          "source": "src/Hoodle-ModelAction-Select.html#hitLassoPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "hitLassoPoint",
          "normalized": "Seq(Double,Double)-\u003e(Double,Double)-\u003eBool",
          "package": "hoodle-core",
          "partial": "Lasso Point",
          "signature": "Seq(Double,Double)-\u003e(Double,Double)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:hitLassoPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "hitLassoStroke",
          "package": "hoodle-core",
          "signature": "Seq (Double, Double) -\u003e BBoxed Stroke -\u003e Bool",
          "source": "src/Hoodle-ModelAction-Select.html#hitLassoStroke",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "hitLassoStroke",
          "normalized": "Seq(Double,Double)-\u003eBBoxed Stroke-\u003eBool",
          "package": "hoodle-core",
          "partial": "Lasso Stroke",
          "signature": "Seq(Double,Double)-\u003eBBoxed Stroke-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:hitLassoStroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "imageSurface",
          "package": "hoodle-core",
          "signature": "Surface",
          "source": "src/Hoodle-ModelAction-Select.html#ItmsNImg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "imageSurface",
          "package": "hoodle-core",
          "partial": "Surface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:imageSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "isBBoxDeltaSmallerThan",
          "package": "hoodle-core",
          "signature": "Double -\u003e PageNum -\u003e CanvasGeometry -\u003e BBox -\u003e BBox -\u003e Bool",
          "source": "src/Hoodle-ModelAction-Select.html#isBBoxDeltaSmallerThan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "isBBoxDeltaSmallerThan",
          "normalized": "Double-\u003ePageNum-\u003eCanvasGeometry-\u003eBBox-\u003eBBox-\u003eBool",
          "package": "hoodle-core",
          "partial": "BBox Delta Smaller Than",
          "signature": "Double-\u003ePageNum-\u003eCanvasGeometry-\u003eBBox-\u003eBBox-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:isBBoxDeltaSmallerThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "isSame",
          "package": "hoodle-core",
          "signature": "Diff a -\u003e Bool",
          "source": "src/Hoodle-ModelAction-Select.html#isSame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "isSame",
          "normalized": "Diff a-\u003eBool",
          "package": "hoodle-core",
          "partial": "Same",
          "signature": "Diff a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:isSame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "itmNimg_itms",
          "package": "hoodle-core",
          "signature": "[RItem]",
          "source": "src/Hoodle-ModelAction-Select.html#ItmsNImg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "itmNimg_itms",
          "normalized": "[RItem]",
          "package": "hoodle-core",
          "partial": "Nimg",
          "signature": "[RItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:itmNimg_itms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "itmNimg_mbbx",
          "package": "hoodle-core",
          "signature": "Maybe BBox",
          "source": "src/Hoodle-ModelAction-Select.html#ItmsNImg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "itmNimg_mbbx",
          "package": "hoodle-core",
          "partial": "Nimg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:itmNimg_mbbx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart a select mode with alter list selection \n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Select",
          "name": "makePageSelectMode",
          "package": "hoodle-core",
          "signature": "Page EditMode-\u003e TAlterHitted RItem-\u003e Page SelectMode",
          "type": "function"
        },
        "index": {
          "description": "start select mode with alter list selection",
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "makePageSelectMode",
          "normalized": "Page EditMode-\u003eTAlterHitted RItem-\u003ePage SelectMode",
          "package": "hoodle-core",
          "partial": "Page Select Mode",
          "signature": "Page EditMode-\u003eTAlterHitted RItem-\u003ePage SelectMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:makePageSelectMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "mappingDegree",
          "package": "hoodle-core",
          "signature": "Seq (Double, Double) -\u003e (Double, Double) -\u003e Int",
          "source": "src/Hoodle-ModelAction-Select.html#mappingDegree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "mappingDegree",
          "normalized": "Seq(Double,Double)-\u003e(Double,Double)-\u003eInt",
          "package": "hoodle-core",
          "partial": "Degree",
          "signature": "Seq(Double,Double)-\u003e(Double,Double)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:mappingDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "mkItmsNImg",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e Page SelectMode -\u003e IO ItmsNImg",
          "source": "src/Hoodle-ModelAction-Select.html#mkItmsNImg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "mkItmsNImg",
          "normalized": "CanvasGeometry-\u003ePage SelectMode-\u003eIO ItmsNImg",
          "package": "hoodle-core",
          "partial": "Itms NImg",
          "signature": "CanvasGeometry-\u003ePage SelectMode-\u003eIO ItmsNImg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:mkItmsNImg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "scaleFromToBBox",
          "package": "hoodle-core",
          "signature": "BBox -\u003e BBox -\u003e (Double, Double) -\u003e (Double, Double)",
          "source": "src/Hoodle-ModelAction-Select.html#scaleFromToBBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "scaleFromToBBox",
          "normalized": "BBox-\u003eBBox-\u003e(Double,Double)-\u003e(Double,Double)",
          "package": "hoodle-core",
          "partial": "From To BBox",
          "signature": "BBox-\u003eBBox-\u003e(Double,Double)-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:scaleFromToBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "separateFS",
          "package": "hoodle-core",
          "signature": "[Diff a] -\u003e ([a], [a])",
          "source": "src/Hoodle-ModelAction-Select.html#separateFS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "separateFS",
          "normalized": "[Diff a]-\u003e([a],[a])",
          "package": "hoodle-core",
          "partial": "FS",
          "signature": "[Diff a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:separateFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "toggleCutCopyDelete",
          "package": "hoodle-core",
          "signature": "UIManager -\u003e Bool -\u003e IO ()",
          "source": "src/Hoodle-ModelAction-Select.html#toggleCutCopyDelete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "toggleCutCopyDelete",
          "normalized": "UIManager-\u003eBool-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Cut Copy Delete",
          "signature": "UIManager-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:toggleCutCopyDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "togglePaste",
          "package": "hoodle-core",
          "signature": "UIManager -\u003e Bool -\u003e IO ()",
          "source": "src/Hoodle-ModelAction-Select.html#togglePaste",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "togglePaste",
          "normalized": "UIManager-\u003eBool-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Paste",
          "signature": "UIManager-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:togglePaste"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "unCmpBBox",
          "package": "hoodle-core",
          "signature": "a",
          "source": "src/Hoodle-ModelAction-Select.html#CmpBBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "unCmpBBox",
          "package": "hoodle-core",
          "partial": "Cmp BBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:unCmpBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "updateTempHoodleSelect",
          "package": "hoodle-core",
          "signature": "Hoodle SelectMode -\u003e Page SelectMode -\u003e Int -\u003e Hoodle SelectMode",
          "source": "src/Hoodle-ModelAction-Select.html#updateTempHoodleSelect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "updateTempHoodleSelect",
          "normalized": "Hoodle SelectMode-\u003ePage SelectMode-\u003eInt-\u003eHoodle SelectMode",
          "package": "hoodle-core",
          "partial": "Temp Hoodle Select",
          "signature": "Hoodle SelectMode-\u003ePage SelectMode-\u003eInt-\u003eHoodle SelectMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:updateTempHoodleSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "updateTempHoodleSelectIO",
          "package": "hoodle-core",
          "signature": "Hoodle SelectMode -\u003e Page SelectMode -\u003e Int -\u003e IO (Hoodle SelectMode)",
          "source": "src/Hoodle-ModelAction-Select.html#updateTempHoodleSelectIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "updateTempHoodleSelectIO",
          "normalized": "Hoodle SelectMode-\u003ePage SelectMode-\u003eInt-\u003eIO(Hoodle SelectMode)",
          "package": "hoodle-core",
          "partial": "Temp Hoodle Select IO",
          "signature": "Hoodle SelectMode-\u003ePage SelectMode-\u003eInt-\u003eIO(Hoodle SelectMode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:updateTempHoodleSelectIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Select",
          "name": "wrappingAngle",
          "package": "hoodle-core",
          "signature": "Seq (Double, Double) -\u003e (Double, Double) -\u003e Double",
          "source": "src/Hoodle-ModelAction-Select.html#wrappingAngle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Select",
          "module": "Hoodle.ModelAction.Select",
          "name": "wrappingAngle",
          "normalized": "Seq(Double,Double)-\u003e(Double,Double)-\u003eDouble",
          "package": "hoodle-core",
          "partial": "Angle",
          "signature": "Seq(Double,Double)-\u003e(Double,Double)-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Select.html#v:wrappingAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Window",
          "name": "Window",
          "package": "hoodle-core",
          "source": "src/Hoodle-ModelAction-Window.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Window",
          "module": "Hoodle.ModelAction.Window",
          "name": "Window",
          "package": "hoodle-core",
          "partial": "Window",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Window.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eonly connect events \n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Window",
          "name": "connectDefaultEventCanvasInfo",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e CanvasInfo a -\u003e IO (CanvasInfo a)",
          "source": "src/Hoodle-ModelAction-Window.html#connectDefaultEventCanvasInfo",
          "type": "function"
        },
        "index": {
          "description": "only connect events",
          "hierarchy": "Hoodle ModelAction Window",
          "module": "Hoodle.ModelAction.Window",
          "name": "connectDefaultEventCanvasInfo",
          "normalized": "HoodleState-\u003eCanvasInfo a-\u003eIO(CanvasInfo a)",
          "package": "hoodle-core",
          "partial": "Default Event Canvas Info",
          "signature": "HoodleState-\u003eCanvasInfo a-\u003eIO(CanvasInfo a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Window.html#v:connectDefaultEventCanvasInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault construct frame     \n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Window",
          "name": "constructFrame",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e WindowConfig -\u003e IO (HoodleState, Widget, WindowConfig)",
          "source": "src/Hoodle-ModelAction-Window.html#constructFrame",
          "type": "function"
        },
        "index": {
          "description": "default construct frame",
          "hierarchy": "Hoodle ModelAction Window",
          "module": "Hoodle.ModelAction.Window",
          "name": "constructFrame",
          "normalized": "HoodleState-\u003eWindowConfig-\u003eIO(HoodleState,Widget,WindowConfig)",
          "package": "hoodle-core",
          "partial": "Frame",
          "signature": "HoodleState-\u003eWindowConfig-\u003eIO(HoodleState,Widget,WindowConfig)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Window.html#v:constructFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econstruct frames with template\n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Window",
          "name": "constructFrame'",
          "package": "hoodle-core",
          "signature": "CanvasInfoBox -\u003e HoodleState -\u003e WindowConfig -\u003e IO (HoodleState, Widget, WindowConfig)",
          "source": "src/Hoodle-ModelAction-Window.html#constructFrame%27",
          "type": "function"
        },
        "index": {
          "description": "construct frames with template",
          "hierarchy": "Hoodle ModelAction Window",
          "module": "Hoodle.ModelAction.Window",
          "name": "constructFrame'",
          "normalized": "CanvasInfoBox-\u003eHoodleState-\u003eWindowConfig-\u003eIO(HoodleState,Widget,WindowConfig)",
          "package": "hoodle-core",
          "partial": "Frame'",
          "signature": "CanvasInfoBox-\u003eHoodleState-\u003eWindowConfig-\u003eIO(HoodleState,Widget,WindowConfig)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Window.html#v:constructFrame-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eevent connecting for all windows                          \n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Window",
          "name": "eventConnect",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e WindowConfig -\u003e IO (HoodleState, WindowConfig)",
          "source": "src/Hoodle-ModelAction-Window.html#eventConnect",
          "type": "function"
        },
        "index": {
          "description": "event connecting for all windows",
          "hierarchy": "Hoodle ModelAction Window",
          "module": "Hoodle.ModelAction.Window",
          "name": "eventConnect",
          "normalized": "HoodleState-\u003eWindowConfig-\u003eIO(HoodleState,WindowConfig)",
          "package": "hoodle-core",
          "partial": "Connect",
          "signature": "HoodleState-\u003eWindowConfig-\u003eIO(HoodleState,WindowConfig)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Window.html#v:eventConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Window",
          "name": "getDBUSEvent",
          "package": "hoodle-core",
          "signature": "(AllEvent -\u003e IO ()) -\u003e TVar Bool -\u003e IO ()",
          "source": "src/Hoodle-ModelAction-Window.html#getDBUSEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Window",
          "module": "Hoodle.ModelAction.Window",
          "name": "getDBUSEvent",
          "normalized": "(AllEvent-\u003eIO())-\u003eTVar Bool-\u003eIO()",
          "package": "hoodle-core",
          "partial": "DBUSEvent",
          "signature": "(AllEvent-\u003eIO())-\u003eTVar Bool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Window.html#v:getDBUSEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einitialize CanvasInfo with creating windows and connect events\n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Window",
          "name": "initCanvasInfo",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e CanvasId -\u003e IO (CanvasInfo a)",
          "source": "src/Hoodle-ModelAction-Window.html#initCanvasInfo",
          "type": "function"
        },
        "index": {
          "description": "initialize CanvasInfo with creating windows and connect events",
          "hierarchy": "Hoodle ModelAction Window",
          "module": "Hoodle.ModelAction.Window",
          "name": "initCanvasInfo",
          "normalized": "HoodleState-\u003eCanvasId-\u003eIO(CanvasInfo a)",
          "package": "hoodle-core",
          "partial": "Canvas Info",
          "signature": "HoodleState-\u003eCanvasId-\u003eIO(CanvasInfo a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Window.html#v:initCanvasInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eonly creating windows \n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Window",
          "name": "minimalCanvasInfo",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e CanvasId -\u003e IO (CanvasInfo a)",
          "source": "src/Hoodle-ModelAction-Window.html#minimalCanvasInfo",
          "type": "function"
        },
        "index": {
          "description": "only creating windows",
          "hierarchy": "Hoodle ModelAction Window",
          "module": "Hoodle.ModelAction.Window",
          "name": "minimalCanvasInfo",
          "normalized": "HoodleState-\u003eCanvasId-\u003eIO(CanvasInfo a)",
          "package": "hoodle-core",
          "partial": "Canvas Info",
          "signature": "HoodleState-\u003eCanvasId-\u003eIO(CanvasInfo a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Window.html#v:minimalCanvasInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.ModelAction.Window",
          "name": "newCanvasId",
          "package": "hoodle-core",
          "signature": "CanvasInfoMap -\u003e CanvasId",
          "source": "src/Hoodle-ModelAction-Window.html#newCanvasId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle ModelAction Window",
          "module": "Hoodle.ModelAction.Window",
          "name": "newCanvasId",
          "normalized": "CanvasInfoMap-\u003eCanvasId",
          "package": "hoodle-core",
          "partial": "Canvas Id",
          "signature": "CanvasInfoMap-\u003eCanvasId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Window.html#v:newCanvasId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecreate windows from old canvas info but no event connect\n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Window",
          "name": "reinitCanvasInfoStage1",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e CanvasInfo a -\u003e IO (CanvasInfo a)",
          "source": "src/Hoodle-ModelAction-Window.html#reinitCanvasInfoStage1",
          "type": "function"
        },
        "index": {
          "description": "recreate windows from old canvas info but no event connect",
          "hierarchy": "Hoodle ModelAction Window",
          "module": "Hoodle.ModelAction.Window",
          "name": "reinitCanvasInfoStage1",
          "normalized": "HoodleState-\u003eCanvasInfo a-\u003eIO(CanvasInfo a)",
          "package": "hoodle-core",
          "partial": "Canvas Info Stage",
          "signature": "HoodleState-\u003eCanvasInfo a-\u003eIO(CanvasInfo a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Window.html#v:reinitCanvasInfoStage1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eevent connect\n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Window",
          "name": "reinitCanvasInfoStage2",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e CanvasInfo a -\u003e IO (CanvasInfo a)",
          "source": "src/Hoodle-ModelAction-Window.html#reinitCanvasInfoStage2",
          "type": "function"
        },
        "index": {
          "description": "event connect",
          "hierarchy": "Hoodle ModelAction Window",
          "module": "Hoodle.ModelAction.Window",
          "name": "reinitCanvasInfoStage2",
          "normalized": "HoodleState-\u003eCanvasInfo a-\u003eIO(CanvasInfo a)",
          "package": "hoodle-core",
          "partial": "Canvas Info Stage",
          "signature": "HoodleState-\u003eCanvasInfo a-\u003eIO(CanvasInfo a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Window.html#v:reinitCanvasInfoStage2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset frame title according to file name\n\u003c/p\u003e",
          "module": "Hoodle.ModelAction.Window",
          "name": "setTitleFromFileName",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e IO ()",
          "source": "src/Hoodle-ModelAction-Window.html#setTitleFromFileName",
          "type": "function"
        },
        "index": {
          "description": "set frame title according to file name",
          "hierarchy": "Hoodle ModelAction Window",
          "module": "Hoodle.ModelAction.Window",
          "name": "setTitleFromFileName",
          "normalized": "HoodleState-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Title From File Name",
          "signature": "HoodleState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-ModelAction-Window.html#v:setTitleFromFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Coroutine",
          "name": "Coroutine",
          "package": "hoodle-core",
          "source": "src/Hoodle-Script-Coroutine.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Script Coroutine",
          "module": "Hoodle.Script.Coroutine",
          "name": "Coroutine",
          "package": "hoodle-core",
          "partial": "Coroutine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Coroutine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Coroutine",
          "name": "afterSaveHook",
          "package": "hoodle-core",
          "signature": "FilePath -\u003e Hoodle -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Script-Coroutine.html#afterSaveHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Coroutine",
          "module": "Hoodle.Script.Coroutine",
          "name": "afterSaveHook",
          "normalized": "FilePath-\u003eHoodle-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Save Hook",
          "signature": "FilePath-\u003eHoodle-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Coroutine.html#v:afterSaveHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etemporary\n\u003c/p\u003e",
          "module": "Hoodle.Script.Coroutine",
          "name": "embedPredefinedImage2Hook",
          "package": "hoodle-core",
          "signature": "MainCoroutine (Maybe FilePath)",
          "source": "src/Hoodle-Script-Coroutine.html#embedPredefinedImage2Hook",
          "type": "function"
        },
        "index": {
          "description": "temporary",
          "hierarchy": "Hoodle Script Coroutine",
          "module": "Hoodle.Script.Coroutine",
          "name": "embedPredefinedImage2Hook",
          "package": "hoodle-core",
          "partial": "Predefined Image Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Coroutine.html#v:embedPredefinedImage2Hook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etemporary\n\u003c/p\u003e",
          "module": "Hoodle.Script.Coroutine",
          "name": "embedPredefinedImage3Hook",
          "package": "hoodle-core",
          "signature": "MainCoroutine (Maybe FilePath)",
          "source": "src/Hoodle-Script-Coroutine.html#embedPredefinedImage3Hook",
          "type": "function"
        },
        "index": {
          "description": "temporary",
          "hierarchy": "Hoodle Script Coroutine",
          "module": "Hoodle.Script.Coroutine",
          "name": "embedPredefinedImage3Hook",
          "package": "hoodle-core",
          "partial": "Predefined Image Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Coroutine.html#v:embedPredefinedImage3Hook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Coroutine",
          "name": "embedPredefinedImageHook",
          "package": "hoodle-core",
          "signature": "MainCoroutine (Maybe FilePath)",
          "source": "src/Hoodle-Script-Coroutine.html#embedPredefinedImageHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Coroutine",
          "module": "Hoodle.Script.Coroutine",
          "name": "embedPredefinedImageHook",
          "package": "hoodle-core",
          "partial": "Predefined Image Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Coroutine.html#v:embedPredefinedImageHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Coroutine",
          "name": "hoist",
          "package": "hoodle-core",
          "signature": "Maybe a -\u003e MaybeT m a",
          "source": "src/Hoodle-Script-Coroutine.html#hoist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Coroutine",
          "module": "Hoodle.Script.Coroutine",
          "name": "hoist",
          "normalized": "Maybe a-\u003eMaybeT b a",
          "package": "hoodle-core",
          "signature": "Maybe a-\u003eMaybeT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Coroutine.html#v:hoist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Coroutine",
          "name": "recentFolderHook",
          "package": "hoodle-core",
          "signature": "MainCoroutine (Maybe FilePath)",
          "source": "src/Hoodle-Script-Coroutine.html#recentFolderHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Coroutine",
          "module": "Hoodle.Script.Coroutine",
          "name": "recentFolderHook",
          "package": "hoodle-core",
          "partial": "Folder Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Coroutine.html#v:recentFolderHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Coroutine",
          "name": "saveAsHook",
          "package": "hoodle-core",
          "signature": "FilePath -\u003e Hoodle -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Script-Coroutine.html#saveAsHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Coroutine",
          "module": "Hoodle.Script.Coroutine",
          "name": "saveAsHook",
          "normalized": "FilePath-\u003eHoodle-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "As Hook",
          "signature": "FilePath-\u003eHoodle-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Coroutine.html#v:saveAsHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "Hook",
          "package": "hoodle-core",
          "source": "src/Hoodle-Script-Hook.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "Hook",
          "package": "hoodle-core",
          "partial": "Hook",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "Hook",
          "package": "hoodle-core",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "Hook",
          "package": "hoodle-core",
          "partial": "Hook",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#t:Hook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "Hook",
          "package": "hoodle-core",
          "signature": "Hook",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "Hook",
          "package": "hoodle-core",
          "partial": "Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:Hook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "afterOpenHook",
          "package": "hoodle-core",
          "signature": "Maybe (FilePath -\u003e Hoodle -\u003e IO ())",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "afterOpenHook",
          "normalized": "Maybe(FilePath-\u003eHoodle-\u003eIO())",
          "package": "hoodle-core",
          "partial": "Open Hook",
          "signature": "Maybe(FilePath-\u003eHoodle-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:afterOpenHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "afterSaveHook",
          "package": "hoodle-core",
          "signature": "Maybe (FilePath -\u003e Hoodle -\u003e IO ())",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "afterSaveHook",
          "normalized": "Maybe(FilePath-\u003eHoodle-\u003eIO())",
          "package": "hoodle-core",
          "partial": "Save Hook",
          "signature": "Maybe(FilePath-\u003eHoodle-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:afterSaveHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "afterUpdateClipboardHook",
          "package": "hoodle-core",
          "signature": "Maybe ([Item] -\u003e IO ())",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "afterUpdateClipboardHook",
          "normalized": "Maybe([Item]-\u003eIO())",
          "package": "hoodle-core",
          "partial": "Update Clipboard Hook",
          "signature": "Maybe([Item]-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:afterUpdateClipboardHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "customAutosavePage",
          "package": "hoodle-core",
          "signature": "Maybe (RPage -\u003e IO ())",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "customAutosavePage",
          "normalized": "Maybe(RPage-\u003eIO())",
          "package": "hoodle-core",
          "partial": "Autosave Page",
          "signature": "Maybe(RPage-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:customAutosavePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "customContextMenuHook",
          "package": "hoodle-core",
          "signature": "Maybe ([Item] -\u003e IO ())",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "customContextMenuHook",
          "normalized": "Maybe([Item]-\u003eIO())",
          "package": "hoodle-core",
          "partial": "Context Menu Hook",
          "signature": "Maybe([Item]-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:customContextMenuHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "customContextMenuTitle",
          "package": "hoodle-core",
          "signature": "Maybe String",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "customContextMenuTitle",
          "package": "hoodle-core",
          "partial": "Context Menu Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:customContextMenuTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "defaultHook",
          "package": "hoodle-core",
          "signature": "Hook",
          "source": "src/Hoodle-Script-Hook.html#defaultHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "defaultHook",
          "package": "hoodle-core",
          "partial": "Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:defaultHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "embedPredefinedImage2Hook",
          "package": "hoodle-core",
          "signature": "Maybe (IO FilePath)",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "embedPredefinedImage2Hook",
          "package": "hoodle-core",
          "partial": "Predefined Image Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:embedPredefinedImage2Hook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "embedPredefinedImage3Hook",
          "package": "hoodle-core",
          "signature": "Maybe (IO FilePath)",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "embedPredefinedImage3Hook",
          "package": "hoodle-core",
          "partial": "Predefined Image Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:embedPredefinedImage3Hook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "embedPredefinedImageHook",
          "package": "hoodle-core",
          "signature": "Maybe (IO FilePath)",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "embedPredefinedImageHook",
          "package": "hoodle-core",
          "partial": "Predefined Image Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:embedPredefinedImageHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "fileNameSuggestionHook",
          "package": "hoodle-core",
          "signature": "Maybe (IO String)",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "fileNameSuggestionHook",
          "package": "hoodle-core",
          "partial": "Name Suggestion Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:fileNameSuggestionHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "getIPaddress",
          "package": "hoodle-core",
          "signature": "Maybe (IO String)",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "getIPaddress",
          "package": "hoodle-core",
          "partial": "IPaddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:getIPaddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "lookupPathFromId",
          "package": "hoodle-core",
          "signature": "Maybe (String -\u003e IO (Maybe FilePath))",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "lookupPathFromId",
          "normalized": "Maybe(String-\u003eIO(Maybe FilePath))",
          "package": "hoodle-core",
          "partial": "Path From Id",
          "signature": "Maybe(String-\u003eIO(Maybe FilePath))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:lookupPathFromId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "recentFolderHook",
          "package": "hoodle-core",
          "signature": "Maybe (IO FilePath)",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "recentFolderHook",
          "package": "hoodle-core",
          "partial": "Folder Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:recentFolderHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "saveAsHook",
          "package": "hoodle-core",
          "signature": "Maybe (Hoodle -\u003e IO ())",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "saveAsHook",
          "normalized": "Maybe(Hoodle-\u003eIO())",
          "package": "hoodle-core",
          "partial": "As Hook",
          "signature": "Maybe(Hoodle-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:saveAsHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "shrinkCmd4EmbedImage",
          "package": "hoodle-core",
          "signature": "Maybe (Double -\u003e FilePath -\u003e FilePath -\u003e IO ())",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "shrinkCmd4EmbedImage",
          "normalized": "Maybe(Double-\u003eFilePath-\u003eFilePath-\u003eIO())",
          "package": "hoodle-core",
          "partial": "Cmd Embed Image",
          "signature": "Maybe(Double-\u003eFilePath-\u003eFilePath-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:shrinkCmd4EmbedImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script.Hook",
          "name": "warningEmbedImageSize",
          "package": "hoodle-core",
          "signature": "Maybe Integer",
          "source": "src/Hoodle-Script-Hook.html#Hook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script Hook",
          "module": "Hoodle.Script.Hook",
          "name": "warningEmbedImageSize",
          "package": "hoodle-core",
          "partial": "Embed Image Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script-Hook.html#v:warningEmbedImageSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script",
          "name": "Script",
          "package": "hoodle-core",
          "source": "src/Hoodle-Script.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Script",
          "module": "Hoodle.Script",
          "name": "Script",
          "package": "hoodle-core",
          "partial": "Script",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script",
          "name": "ScriptConfig",
          "package": "hoodle-core",
          "source": "src/Hoodle-Script.html#ScriptConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Script",
          "module": "Hoodle.Script",
          "name": "ScriptConfig",
          "package": "hoodle-core",
          "partial": "Script Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script.html#t:ScriptConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script",
          "name": "ScriptConfig",
          "package": "hoodle-core",
          "signature": "ScriptConfig",
          "source": "src/Hoodle-Script.html#ScriptConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script",
          "module": "Hoodle.Script",
          "name": "ScriptConfig",
          "package": "hoodle-core",
          "partial": "Script Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script.html#v:ScriptConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script",
          "name": "defaultScriptConfig",
          "package": "hoodle-core",
          "signature": "ScriptConfig",
          "source": "src/Hoodle-Script.html#defaultScriptConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script",
          "module": "Hoodle.Script",
          "name": "defaultScriptConfig",
          "package": "hoodle-core",
          "partial": "Script Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script.html#v:defaultScriptConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script",
          "name": "errorMsg",
          "package": "hoodle-core",
          "signature": "Maybe String",
          "source": "src/Hoodle-Script.html#ScriptConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script",
          "module": "Hoodle.Script",
          "name": "errorMsg",
          "package": "hoodle-core",
          "partial": "Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script.html#v:errorMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script",
          "name": "hook",
          "package": "hoodle-core",
          "signature": "Maybe Hook",
          "source": "src/Hoodle-Script.html#ScriptConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script",
          "module": "Hoodle.Script",
          "name": "hook",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script.html#v:hook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script",
          "name": "message",
          "package": "hoodle-core",
          "signature": "Maybe String",
          "source": "src/Hoodle-Script.html#ScriptConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script",
          "module": "Hoodle.Script",
          "name": "message",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script.html#v:message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script",
          "name": "relaunchApplication",
          "package": "hoodle-core",
          "signature": "IO ()",
          "source": "src/Hoodle-Script.html#relaunchApplication",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script",
          "module": "Hoodle.Script",
          "name": "relaunchApplication",
          "normalized": "IO()",
          "package": "hoodle-core",
          "partial": "Application",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script.html#v:relaunchApplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Script",
          "name": "showError",
          "package": "hoodle-core",
          "signature": "ScriptConfig -\u003e String -\u003e ScriptConfig",
          "source": "src/Hoodle-Script.html#showError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Script",
          "module": "Hoodle.Script",
          "name": "showError",
          "normalized": "ScriptConfig-\u003eString-\u003eScriptConfig",
          "package": "hoodle-core",
          "partial": "Error",
          "signature": "ScriptConfig-\u003eString-\u003eScriptConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Script.html#v:showError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Alias",
          "name": "Alias",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Alias.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Type Alias",
          "module": "Hoodle.Type.Alias",
          "name": "Alias",
          "package": "hoodle-core",
          "partial": "Alias",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Alias.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Alias",
          "name": "EditMode",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Alias.html#EditMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Alias",
          "module": "Hoodle.Type.Alias",
          "name": "EditMode",
          "package": "hoodle-core",
          "partial": "Edit Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Alias.html#t:EditMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Alias",
          "name": "Hoodle",
          "package": "hoodle-core",
          "signature": "Hoodle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Alias",
          "module": "Hoodle.Type.Alias",
          "name": "Hoodle",
          "package": "hoodle-core",
          "partial": "Hoodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Alias.html#t:Hoodle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Alias",
          "name": "Layer",
          "package": "hoodle-core",
          "signature": "Layer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Alias",
          "module": "Hoodle.Type.Alias",
          "name": "Layer",
          "package": "hoodle-core",
          "partial": "Layer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Alias.html#t:Layer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Alias",
          "name": "Page",
          "package": "hoodle-core",
          "signature": "Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Alias",
          "module": "Hoodle.Type.Alias",
          "name": "Page",
          "package": "hoodle-core",
          "partial": "Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Alias.html#t:Page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Alias",
          "name": "SelectMode",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Alias.html#SelectMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Alias",
          "module": "Hoodle.Type.Alias",
          "name": "SelectMode",
          "package": "hoodle-core",
          "partial": "Select Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Alias.html#t:SelectMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Alias",
          "name": "EditMode",
          "package": "hoodle-core",
          "signature": "EditMode",
          "source": "src/Hoodle-Type-Alias.html#EditMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Alias",
          "module": "Hoodle.Type.Alias",
          "name": "EditMode",
          "package": "hoodle-core",
          "partial": "Edit Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Alias.html#v:EditMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Alias",
          "name": "SelectMode",
          "package": "hoodle-core",
          "signature": "SelectMode",
          "source": "src/Hoodle-Type-Alias.html#SelectMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Alias",
          "module": "Hoodle.Type.Alias",
          "name": "SelectMode",
          "package": "hoodle-core",
          "partial": "Select Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Alias.html#v:SelectMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "Canvas",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Canvas.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "Canvas",
          "package": "hoodle-core",
          "partial": "Canvas",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "CanvasId",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Canvas.html#CanvasId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "CanvasId",
          "package": "hoodle-core",
          "partial": "Canvas Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#t:CanvasId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "CanvasInfo",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "CanvasInfo",
          "package": "hoodle-core",
          "partial": "Canvas Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#t:CanvasInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "CanvasInfoBox",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfoBox",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "CanvasInfoBox",
          "package": "hoodle-core",
          "partial": "Canvas Info Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#t:CanvasInfoBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "CanvasInfoMap",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfoMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "CanvasInfoMap",
          "package": "hoodle-core",
          "partial": "Canvas Info Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#t:CanvasInfoMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "PenDraw",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Canvas.html#PenDraw",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "PenDraw",
          "package": "hoodle-core",
          "partial": "Pen Draw",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#t:PenDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "PenHighlighterEraserSet",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Canvas.html#PenHighlighterEraserSet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "PenHighlighterEraserSet",
          "package": "hoodle-core",
          "partial": "Pen Highlighter Eraser Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#t:PenHighlighterEraserSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "PenInfo",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Canvas.html#PenInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "PenInfo",
          "package": "hoodle-core",
          "partial": "Pen Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#t:PenInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "ViewInfo",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Canvas.html#ViewInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "ViewInfo",
          "package": "hoodle-core",
          "partial": "View Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#t:ViewInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "WidthColorStyle",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Canvas.html#WidthColorStyle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "WidthColorStyle",
          "package": "hoodle-core",
          "partial": "Width Color Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#t:WidthColorStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "CanvasContPage",
          "package": "hoodle-core",
          "signature": "CanvasInfo ContinuousPage -\u003e CanvasInfoBox",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfoBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "CanvasContPage",
          "normalized": "CanvasInfo ContinuousPage-\u003eCanvasInfoBox",
          "package": "hoodle-core",
          "partial": "Canvas Cont Page",
          "signature": "CanvasInfo ContinuousPage-\u003eCanvasInfoBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:CanvasContPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "CanvasInfo",
          "package": "hoodle-core",
          "signature": "CanvasInfo",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "CanvasInfo",
          "package": "hoodle-core",
          "partial": "Canvas Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:CanvasInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "CanvasSinglePage",
          "package": "hoodle-core",
          "signature": "CanvasInfo SinglePage -\u003e CanvasInfoBox",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfoBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "CanvasSinglePage",
          "normalized": "CanvasInfo SinglePage-\u003eCanvasInfoBox",
          "package": "hoodle-core",
          "partial": "Canvas Single Page",
          "signature": "CanvasInfo SinglePage-\u003eCanvasInfoBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:CanvasSinglePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "PenDraw",
          "package": "hoodle-core",
          "signature": "PenDraw",
          "source": "src/Hoodle-Type-Canvas.html#PenDraw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "PenDraw",
          "package": "hoodle-core",
          "partial": "Pen Draw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:PenDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "ViewInfo",
          "package": "hoodle-core",
          "signature": "ViewInfo",
          "source": "src/Hoodle-Type-Canvas.html#ViewInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "ViewInfo",
          "package": "hoodle-core",
          "partial": "View Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:ViewInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "_canvasId",
          "package": "hoodle-core",
          "signature": "CanvasId",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "_canvasId",
          "package": "hoodle-core",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:_canvasId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "_canvasWidgets",
          "package": "hoodle-core",
          "signature": "CanvasWidgets",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "_canvasWidgets",
          "package": "hoodle-core",
          "partial": "Widgets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:_canvasWidgets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "_currentPageNum",
          "package": "hoodle-core",
          "signature": "Int",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "_currentPageNum",
          "package": "hoodle-core",
          "partial": "Page Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:_currentPageNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "_drawArea",
          "package": "hoodle-core",
          "signature": "DrawingArea",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "_drawArea",
          "package": "hoodle-core",
          "partial": "Area",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:_drawArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "_horizAdjConnId",
          "package": "hoodle-core",
          "signature": "Maybe (ConnectId Adjustment)",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "_horizAdjConnId",
          "package": "hoodle-core",
          "partial": "Adj Conn Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:_horizAdjConnId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "_horizAdjustment",
          "package": "hoodle-core",
          "signature": "Adjustment",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "_horizAdjustment",
          "package": "hoodle-core",
          "partial": "Adjustment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:_horizAdjustment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "_mDrawSurface",
          "package": "hoodle-core",
          "signature": "Maybe Surface",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "_mDrawSurface",
          "package": "hoodle-core",
          "partial": "Draw Surface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:_mDrawSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "_notifiedItem",
          "package": "hoodle-core",
          "signature": "Maybe (PageNum, BBox, RItem)",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "_notifiedItem",
          "normalized": "Maybe(PageNum,BBox,RItem)",
          "package": "hoodle-core",
          "partial": "Item",
          "signature": "Maybe(PageNum,BBox,RItem)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:_notifiedItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "_pageArrangement",
          "package": "hoodle-core",
          "signature": "PageArrangement a",
          "source": "src/Hoodle-Type-Canvas.html#ViewInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "_pageArrangement",
          "package": "hoodle-core",
          "partial": "Arrangement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:_pageArrangement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "_points",
          "package": "hoodle-core",
          "signature": "Seq (Double, Double)",
          "source": "src/Hoodle-Type-Canvas.html#PenDraw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "_points",
          "normalized": "Seq(Double,Double)",
          "package": "hoodle-core",
          "signature": "Seq(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:_points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "_scrolledWindow",
          "package": "hoodle-core",
          "signature": "ScrolledWindow",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "_scrolledWindow",
          "package": "hoodle-core",
          "partial": "Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:_scrolledWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "_vertAdjConnId",
          "package": "hoodle-core",
          "signature": "Maybe (ConnectId Adjustment)",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "_vertAdjConnId",
          "package": "hoodle-core",
          "partial": "Adj Conn Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:_vertAdjConnId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "_vertAdjustment",
          "package": "hoodle-core",
          "signature": "Adjustment",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "_vertAdjustment",
          "package": "hoodle-core",
          "partial": "Adjustment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:_vertAdjustment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "_viewInfo",
          "package": "hoodle-core",
          "signature": "ViewInfo a",
          "source": "src/Hoodle-Type-Canvas.html#CanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "_viewInfo",
          "package": "hoodle-core",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:_viewInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "_zoomMode",
          "package": "hoodle-core",
          "signature": "ZoomMode",
          "source": "src/Hoodle-Type-Canvas.html#ViewInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "_zoomMode",
          "package": "hoodle-core",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:_zoomMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecomposition lens\n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "adjustments",
          "package": "hoodle-core",
          "signature": "Simple Lens (CanvasInfo a) (Adjustment, Adjustment)",
          "source": "src/Hoodle-Type-Canvas.html#adjustments",
          "type": "function"
        },
        "index": {
          "description": "composition lens",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "adjustments",
          "normalized": "Simple Lens(CanvasInfo a)(Adjustment,Adjustment)",
          "package": "hoodle-core",
          "signature": "Simple Lens(CanvasInfo a)(Adjustment,Adjustment)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:adjustments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "canvasId",
          "package": "hoodle-core",
          "signature": "Simple Lens (CanvasInfo a) CanvasId",
          "source": "src/Hoodle-Type-Canvas.html#canvasId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "canvasId",
          "package": "hoodle-core",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:canvasId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for canavs widgets\n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "canvasWidgets",
          "package": "hoodle-core",
          "signature": "Simple Lens (CanvasInfo a) CanvasWidgets",
          "source": "src/Hoodle-Type-Canvas.html#canvasWidgets",
          "type": "function"
        },
        "index": {
          "description": "lens for canavs widgets",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "canvasWidgets",
          "package": "hoodle-core",
          "partial": "Widgets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:canvasWidgets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for currEraser\n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "currEraser",
          "package": "hoodle-core",
          "signature": "Simple Lens PenHighlighterEraserSet WidthColorStyle",
          "source": "src/Hoodle-Type-Canvas.html#currEraser",
          "type": "function"
        },
        "index": {
          "description": "lens for currEraser",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "currEraser",
          "package": "hoodle-core",
          "partial": "Eraser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:currEraser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for currHighlighter\n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "currHighlighter",
          "package": "hoodle-core",
          "signature": "Simple Lens PenHighlighterEraserSet WidthColorStyle",
          "source": "src/Hoodle-Type-Canvas.html#currHighlighter",
          "type": "function"
        },
        "index": {
          "description": "lens for currHighlighter",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "currHighlighter",
          "package": "hoodle-core",
          "partial": "Highlighter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:currHighlighter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for currPen\n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "currPen",
          "package": "hoodle-core",
          "signature": "Simple Lens PenHighlighterEraserSet WidthColorStyle",
          "source": "src/Hoodle-Type-Canvas.html#currPen",
          "type": "function"
        },
        "index": {
          "description": "lens for currPen",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "currPen",
          "package": "hoodle-core",
          "partial": "Pen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:currPen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for currText\n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "currText",
          "package": "hoodle-core",
          "signature": "Simple Lens PenHighlighterEraserSet WidthColorStyle",
          "source": "src/Hoodle-Type-Canvas.html#currText",
          "type": "function"
        },
        "index": {
          "description": "lens for currText",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "currText",
          "package": "hoodle-core",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:currText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for currText\n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "currVerticalSpace",
          "package": "hoodle-core",
          "signature": "Simple Lens PenHighlighterEraserSet WidthColorStyle",
          "source": "src/Hoodle-Type-Canvas.html#currVerticalSpace",
          "type": "function"
        },
        "index": {
          "description": "lens for currText",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "currVerticalSpace",
          "package": "hoodle-core",
          "partial": "Vertical Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:currVerticalSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "currentPageNum",
          "package": "hoodle-core",
          "signature": "Simple Lens (CanvasInfo a) Int",
          "source": "src/Hoodle-Type-Canvas.html#currentPageNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "currentPageNum",
          "package": "hoodle-core",
          "partial": "Page Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:currentPageNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "currentTool",
          "package": "hoodle-core",
          "signature": "Simple Lens PenInfo WidthColorStyle",
          "source": "src/Hoodle-Type-Canvas.html#currentTool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "currentTool",
          "package": "hoodle-core",
          "partial": "Tool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:currentTool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault hoodle widgets\n\u003c/p\u003e",
          "module": "[\"Hoodle.Type.Canvas\",\"Hoodle.Type.Widget\"]",
          "name": "defaultCanvasWidgets",
          "package": "hoodle-core",
          "signature": "CanvasWidgets",
          "source": "src/Hoodle-Type-Widget.html#defaultCanvasWidgets",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:defaultCanvasWidgets\",\"http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:defaultCanvasWidgets\"]"
        },
        "index": {
          "description": "default hoodle widgets",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "defaultCanvasWidgets",
          "package": "hoodle-core",
          "partial": "Canvas Widgets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:defaultCanvasWidgets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "defaultCvsInfoSinglePage",
          "package": "hoodle-core",
          "signature": "CanvasInfo SinglePage",
          "source": "src/Hoodle-Type-Canvas.html#defaultCvsInfoSinglePage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "defaultCvsInfoSinglePage",
          "package": "hoodle-core",
          "partial": "Cvs Info Single Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:defaultCvsInfoSinglePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "defaultEraserWCS",
          "package": "hoodle-core",
          "signature": "WidthColorStyle",
          "source": "src/Hoodle-Type-Canvas.html#defaultEraserWCS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "defaultEraserWCS",
          "package": "hoodle-core",
          "partial": "Eraser WCS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:defaultEraserWCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "defaultHighligherWCS",
          "package": "hoodle-core",
          "signature": "WidthColorStyle",
          "source": "src/Hoodle-Type-Canvas.html#defaultHighligherWCS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "defaultHighligherWCS",
          "package": "hoodle-core",
          "partial": "Highligher WCS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:defaultHighligherWCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "defaultPenInfo",
          "package": "hoodle-core",
          "signature": "PenInfo",
          "source": "src/Hoodle-Type-Canvas.html#defaultPenInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "defaultPenInfo",
          "package": "hoodle-core",
          "partial": "Pen Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:defaultPenInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "defaultPenWCS",
          "package": "hoodle-core",
          "signature": "WidthColorStyle",
          "source": "src/Hoodle-Type-Canvas.html#defaultPenWCS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "defaultPenWCS",
          "package": "hoodle-core",
          "partial": "Pen WCS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:defaultPenWCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "defaultTextWCS",
          "package": "hoodle-core",
          "signature": "WidthColorStyle",
          "source": "src/Hoodle-Type-Canvas.html#defaultTextWCS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "defaultTextWCS",
          "package": "hoodle-core",
          "partial": "Text WCS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:defaultTextWCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault view info with single page mode\n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "defaultViewInfoSinglePage",
          "package": "hoodle-core",
          "signature": "ViewInfo SinglePage",
          "source": "src/Hoodle-Type-Canvas.html#defaultViewInfoSinglePage",
          "type": "function"
        },
        "index": {
          "description": "default view info with single page mode",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "defaultViewInfoSinglePage",
          "package": "hoodle-core",
          "partial": "View Info Single Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:defaultViewInfoSinglePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "drawArea",
          "package": "hoodle-core",
          "signature": "Simple Lens (CanvasInfo a) DrawingArea",
          "source": "src/Hoodle-Type-Canvas.html#drawArea",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "drawArea",
          "package": "hoodle-core",
          "partial": "Area",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:drawArea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "emptyPenDraw",
          "package": "hoodle-core",
          "signature": "PenDraw",
          "source": "src/Hoodle-Type-Canvas.html#emptyPenDraw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "emptyPenDraw",
          "package": "hoodle-core",
          "partial": "Pen Draw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:emptyPenDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "forBoth",
          "package": "hoodle-core",
          "signature": "((CanvasInfo SinglePage -\u003e f (CanvasInfo SinglePage)) -\u003e (CanvasInfo ContinuousPage -\u003e f (CanvasInfo ContinuousPage)) -\u003e CanvasInfoBox -\u003e f CanvasInfoBox) -\u003e (forall a.  CanvasInfo a -\u003e f (CanvasInfo a)) -\u003e CanvasInfoBox -\u003e f CanvasInfoBox",
          "source": "src/Hoodle-Type-Canvas.html#forBoth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "forBoth",
          "normalized": "((CanvasInfo SinglePage-\u003ea(CanvasInfo SinglePage))-\u003e(CanvasInfo ContinuousPage-\u003ea(CanvasInfo ContinuousPage))-\u003eCanvasInfoBox-\u003ea CanvasInfoBox)-\u003e(b c CanvasInfo d-\u003ea(CanvasInfo d))-\u003eCanvasInfoBox-\u003ea CanvasInfoBox",
          "package": "hoodle-core",
          "partial": "Both",
          "signature": "((CanvasInfo SinglePage-\u003ef(CanvasInfo SinglePage))-\u003e(CanvasInfo ContinuousPage-\u003ef(CanvasInfo ContinuousPage))-\u003eCanvasInfoBox-\u003ef CanvasInfoBox)-\u003e(forall a. CanvasInfo a-\u003ef(CanvasInfo a))-\u003eCanvasInfoBox-\u003ef CanvasInfoBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:forBoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "forBoth'",
          "package": "hoodle-core",
          "signature": "((CanvasInfo SinglePage -\u003e r) -\u003e (CanvasInfo ContinuousPage -\u003e r) -\u003e CanvasInfoBox -\u003e r) -\u003e (forall a.  CanvasInfo a -\u003e r) -\u003e CanvasInfoBox -\u003e r",
          "source": "src/Hoodle-Type-Canvas.html#forBoth%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "forBoth'",
          "normalized": "((CanvasInfo SinglePage-\u003ea)-\u003e(CanvasInfo ContinuousPage-\u003ea)-\u003eCanvasInfoBox-\u003ea)-\u003e(b c CanvasInfo d-\u003ea)-\u003eCanvasInfoBox-\u003ea",
          "package": "hoodle-core",
          "partial": "Both'",
          "signature": "((CanvasInfo SinglePage-\u003er)-\u003e(CanvasInfo ContinuousPage-\u003er)-\u003eCanvasInfoBox-\u003er)-\u003e(forall a. CanvasInfo a-\u003er)-\u003eCanvasInfoBox-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:forBoth-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "getDrawAreaFromBox",
          "package": "hoodle-core",
          "signature": "CanvasInfoBox -\u003e DrawingArea",
          "source": "src/Hoodle-Type-Canvas.html#getDrawAreaFromBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "getDrawAreaFromBox",
          "normalized": "CanvasInfoBox-\u003eDrawingArea",
          "package": "hoodle-core",
          "partial": "Draw Area From Box",
          "signature": "CanvasInfoBox-\u003eDrawingArea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:getDrawAreaFromBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnectId for horizontal scrollbar value change event \n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "horizAdjConnId",
          "package": "hoodle-core",
          "signature": "Simple Lens (CanvasInfo a) (Maybe (ConnectId Adjustment))",
          "source": "src/Hoodle-Type-Canvas.html#horizAdjConnId",
          "type": "function"
        },
        "index": {
          "description": "ConnectId for horizontal scrollbar value change event",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "horizAdjConnId",
          "package": "hoodle-core",
          "partial": "Adj Conn Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:horizAdjConnId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "horizAdjustment",
          "package": "hoodle-core",
          "signature": "Simple Lens (CanvasInfo a) Adjustment",
          "source": "src/Hoodle-Type-Canvas.html#horizAdjustment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "horizAdjustment",
          "package": "hoodle-core",
          "partial": "Adjustment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:horizAdjustment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "mDrawSurface",
          "package": "hoodle-core",
          "signature": "Simple Lens (CanvasInfo a) (Maybe Surface)",
          "source": "src/Hoodle-Type-Canvas.html#mDrawSurface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "mDrawSurface",
          "package": "hoodle-core",
          "partial": "Draw Surface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:mDrawSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for notified item\n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "notifiedItem",
          "package": "hoodle-core",
          "signature": "Simple Lens (CanvasInfo a) (Maybe (PageNum, BBox, RItem))",
          "source": "src/Hoodle-Type-Canvas.html#notifiedItem",
          "type": "function"
        },
        "index": {
          "description": "lens for notified item",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "notifiedItem",
          "normalized": "Simple Lens(CanvasInfo a)(Maybe(PageNum,BBox,RItem))",
          "package": "hoodle-core",
          "partial": "Item",
          "signature": "Simple Lens(CanvasInfo a)(Maybe(PageNum,BBox,RItem))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:notifiedItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "pageArrangement",
          "package": "hoodle-core",
          "signature": "Simple Lens (ViewInfo a) (PageArrangement a)",
          "source": "src/Hoodle-Type-Canvas.html#pageArrangement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "pageArrangement",
          "package": "hoodle-core",
          "partial": "Arrangement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:pageArrangement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for penColor\n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "penColor",
          "package": "hoodle-core",
          "signature": "Simple Lens WidthColorStyle PenColor",
          "source": "src/Hoodle-Type-Canvas.html#penColor",
          "type": "function"
        },
        "index": {
          "description": "lens for penColor",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "penColor",
          "package": "hoodle-core",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:penColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for penSet\n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "penSet",
          "package": "hoodle-core",
          "signature": "Simple Lens PenInfo PenHighlighterEraserSet",
          "source": "src/Hoodle-Type-Canvas.html#penSet",
          "type": "function"
        },
        "index": {
          "description": "lens for penSet",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "penSet",
          "package": "hoodle-core",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:penSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for penType\n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "penType",
          "package": "hoodle-core",
          "signature": "Simple Lens PenInfo PenType",
          "source": "src/Hoodle-Type-Canvas.html#penType",
          "type": "function"
        },
        "index": {
          "description": "lens for penType",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "penType",
          "package": "hoodle-core",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:penType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for penWidth\n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "penWidth",
          "package": "hoodle-core",
          "signature": "Simple Lens WidthColorStyle Double",
          "source": "src/Hoodle-Type-Canvas.html#penWidth",
          "type": "function"
        },
        "index": {
          "description": "lens for penWidth",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "penWidth",
          "package": "hoodle-core",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:penWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for zoomMode \n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "points",
          "package": "hoodle-core",
          "signature": "Simple Lens PenDraw (Seq (Double, Double))",
          "source": "src/Hoodle-Type-Canvas.html#points",
          "type": "function"
        },
        "index": {
          "description": "lens for zoomMode",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "points",
          "normalized": "Simple Lens PenDraw(Seq(Double,Double))",
          "package": "hoodle-core",
          "signature": "Simple Lens PenDraw(Seq(Double,Double))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "scrolledWindow",
          "package": "hoodle-core",
          "signature": "Simple Lens (CanvasInfo a) ScrolledWindow",
          "source": "src/Hoodle-Type-Canvas.html#scrolledWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "scrolledWindow",
          "package": "hoodle-core",
          "partial": "Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:scrolledWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esingle page action and continuous page act\n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "unboxBiAct",
          "package": "hoodle-core",
          "signature": "(CanvasInfo SinglePage -\u003e r) -\u003e (CanvasInfo ContinuousPage -\u003e r) -\u003e CanvasInfoBox -\u003e r",
          "source": "src/Hoodle-Type-Canvas.html#unboxBiAct",
          "type": "function"
        },
        "index": {
          "description": "single page action and continuous page act",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "unboxBiAct",
          "normalized": "(CanvasInfo SinglePage-\u003ea)-\u003e(CanvasInfo ContinuousPage-\u003ea)-\u003eCanvasInfoBox-\u003ea",
          "package": "hoodle-core",
          "partial": "Bi Act",
          "signature": "(CanvasInfo SinglePage-\u003er)-\u003e(CanvasInfo ContinuousPage-\u003er)-\u003eCanvasInfoBox-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:unboxBiAct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esingle page action and continuous page act\n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "unboxBiXform",
          "package": "hoodle-core",
          "signature": "(CanvasInfo SinglePage -\u003e f (CanvasInfo SinglePage)) -\u003e (CanvasInfo ContinuousPage -\u003e f (CanvasInfo ContinuousPage)) -\u003e CanvasInfoBox -\u003e f CanvasInfoBox",
          "source": "src/Hoodle-Type-Canvas.html#unboxBiXform",
          "type": "function"
        },
        "index": {
          "description": "single page action and continuous page act",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "unboxBiXform",
          "normalized": "(CanvasInfo SinglePage-\u003ea(CanvasInfo SinglePage))-\u003e(CanvasInfo ContinuousPage-\u003ea(CanvasInfo ContinuousPage))-\u003eCanvasInfoBox-\u003ea CanvasInfoBox",
          "package": "hoodle-core",
          "partial": "Bi Xform",
          "signature": "(CanvasInfo SinglePage-\u003ef(CanvasInfo SinglePage))-\u003e(CanvasInfo ContinuousPage-\u003ef(CanvasInfo ContinuousPage))-\u003eCanvasInfoBox-\u003ef CanvasInfoBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:unboxBiXform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "unboxLens",
          "package": "hoodle-core",
          "signature": "(forall a.  Simple Lens (CanvasInfo a) b) -\u003e Simple Lens CanvasInfoBox b",
          "source": "src/Hoodle-Type-Canvas.html#unboxLens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "unboxLens",
          "normalized": "(a b Simple Lens(CanvasInfo c)d)-\u003eSimple Lens CanvasInfoBox d",
          "package": "hoodle-core",
          "partial": "Lens",
          "signature": "(forall a. Simple Lens(CanvasInfo a)b)-\u003eSimple Lens CanvasInfoBox b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:unboxLens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "updateCanvasDimForContSingle",
          "package": "hoodle-core",
          "signature": "PageDimension -\u003e CanvasDimension -\u003e CanvasInfo ContinuousPage -\u003e IO (CanvasInfo ContinuousPage)",
          "source": "src/Hoodle-Type-Canvas.html#updateCanvasDimForContSingle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "updateCanvasDimForContSingle",
          "normalized": "PageDimension-\u003eCanvasDimension-\u003eCanvasInfo ContinuousPage-\u003eIO(CanvasInfo ContinuousPage)",
          "package": "hoodle-core",
          "partial": "Canvas Dim For Cont Single",
          "signature": "PageDimension-\u003eCanvasDimension-\u003eCanvasInfo ContinuousPage-\u003eIO(CanvasInfo ContinuousPage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:updateCanvasDimForContSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "updateCanvasDimForSingle",
          "package": "hoodle-core",
          "signature": "CanvasDimension -\u003e CanvasInfo SinglePage -\u003e IO (CanvasInfo SinglePage)",
          "source": "src/Hoodle-Type-Canvas.html#updateCanvasDimForSingle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "updateCanvasDimForSingle",
          "normalized": "CanvasDimension-\u003eCanvasInfo SinglePage-\u003eIO(CanvasInfo SinglePage)",
          "package": "hoodle-core",
          "partial": "Canvas Dim For Single",
          "signature": "CanvasDimension-\u003eCanvasInfo SinglePage-\u003eIO(CanvasInfo SinglePage)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:updateCanvasDimForSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for variableWidthPen\n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "variableWidthPen",
          "package": "hoodle-core",
          "signature": "Simple Lens PenInfo Bool",
          "source": "src/Hoodle-Type-Canvas.html#variableWidthPen",
          "type": "function"
        },
        "index": {
          "description": "lens for variableWidthPen",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "variableWidthPen",
          "package": "hoodle-core",
          "partial": "Width Pen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:variableWidthPen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnectId for vertical scrollbar value change event \n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "vertAdjConnId",
          "package": "hoodle-core",
          "signature": "Simple Lens (CanvasInfo a) (Maybe (ConnectId Adjustment))",
          "source": "src/Hoodle-Type-Canvas.html#vertAdjConnId",
          "type": "function"
        },
        "index": {
          "description": "ConnectId for vertical scrollbar value change event",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "vertAdjConnId",
          "package": "hoodle-core",
          "partial": "Adj Conn Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:vertAdjConnId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "vertAdjustment",
          "package": "hoodle-core",
          "signature": "Simple Lens (CanvasInfo a) Adjustment",
          "source": "src/Hoodle-Type-Canvas.html#vertAdjustment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "vertAdjustment",
          "package": "hoodle-core",
          "partial": "Adjustment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:vertAdjustment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "viewInfo",
          "package": "hoodle-core",
          "signature": "Simple Lens (CanvasInfo a) (ViewInfo a)",
          "source": "src/Hoodle-Type-Canvas.html#viewInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "viewInfo",
          "package": "hoodle-core",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:viewInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "xfrmCvsInfo",
          "package": "hoodle-core",
          "signature": "(ViewInfo a -\u003e ViewInfo b) -\u003e CanvasInfo a -\u003e CanvasInfo b",
          "source": "src/Hoodle-Type-Canvas.html#xfrmCvsInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "xfrmCvsInfo",
          "normalized": "(ViewInfo a-\u003eViewInfo b)-\u003eCanvasInfo a-\u003eCanvasInfo b",
          "package": "hoodle-core",
          "partial": "Cvs Info",
          "signature": "(ViewInfo a-\u003eViewInfo b)-\u003eCanvasInfo a-\u003eCanvasInfo b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:xfrmCvsInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Canvas",
          "name": "xfrmViewInfo",
          "package": "hoodle-core",
          "signature": "(PageArrangement a -\u003e PageArrangement b) -\u003e ViewInfo a -\u003e ViewInfo b",
          "source": "src/Hoodle-Type-Canvas.html#xfrmViewInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "xfrmViewInfo",
          "normalized": "(PageArrangement a-\u003ePageArrangement b)-\u003eViewInfo a-\u003eViewInfo b",
          "package": "hoodle-core",
          "partial": "View Info",
          "signature": "(PageArrangement a-\u003ePageArrangement b)-\u003eViewInfo a-\u003eViewInfo b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:xfrmViewInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for zoomMode \n\u003c/p\u003e",
          "module": "Hoodle.Type.Canvas",
          "name": "zoomMode",
          "package": "hoodle-core",
          "signature": "Simple Lens (ViewInfo a) ZoomMode",
          "source": "src/Hoodle-Type-Canvas.html#zoomMode",
          "type": "function"
        },
        "index": {
          "description": "lens for zoomMode",
          "hierarchy": "Hoodle Type Canvas",
          "module": "Hoodle.Type.Canvas",
          "name": "zoomMode",
          "package": "hoodle-core",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Canvas.html#v:zoomMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Clipboard",
          "name": "Clipboard",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Clipboard.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Type Clipboard",
          "module": "Hoodle.Type.Clipboard",
          "name": "Clipboard",
          "package": "hoodle-core",
          "partial": "Clipboard",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Clipboard.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Clipboard",
          "name": "Clipboard",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Clipboard.html#Clipboard",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hoodle Type Clipboard",
          "module": "Hoodle.Type.Clipboard",
          "name": "Clipboard",
          "package": "hoodle-core",
          "partial": "Clipboard",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Clipboard.html#t:Clipboard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Clipboard",
          "name": "Clipboard",
          "package": "hoodle-core",
          "signature": "Clipboard",
          "source": "src/Hoodle-Type-Clipboard.html#Clipboard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Clipboard",
          "module": "Hoodle.Type.Clipboard",
          "name": "Clipboard",
          "package": "hoodle-core",
          "partial": "Clipboard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Clipboard.html#v:Clipboard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Clipboard",
          "name": "emptyClipboard",
          "package": "hoodle-core",
          "signature": "Clipboard",
          "source": "src/Hoodle-Type-Clipboard.html#emptyClipboard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Clipboard",
          "module": "Hoodle.Type.Clipboard",
          "name": "emptyClipboard",
          "package": "hoodle-core",
          "partial": "Clipboard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Clipboard.html#v:emptyClipboard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Clipboard",
          "name": "getClipContents",
          "package": "hoodle-core",
          "signature": "Clipboard -\u003e [BBoxed Stroke]",
          "source": "src/Hoodle-Type-Clipboard.html#getClipContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Clipboard",
          "module": "Hoodle.Type.Clipboard",
          "name": "getClipContents",
          "normalized": "Clipboard-\u003e[BBoxed Stroke]",
          "package": "hoodle-core",
          "partial": "Clip Contents",
          "signature": "Clipboard-\u003e[BBoxed Stroke]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Clipboard.html#v:getClipContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Clipboard",
          "name": "isEmpty",
          "package": "hoodle-core",
          "signature": "Clipboard -\u003e Bool",
          "source": "src/Hoodle-Type-Clipboard.html#isEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Clipboard",
          "module": "Hoodle.Type.Clipboard",
          "name": "isEmpty",
          "normalized": "Clipboard-\u003eBool",
          "package": "hoodle-core",
          "partial": "Empty",
          "signature": "Clipboard-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Clipboard.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Clipboard",
          "name": "replaceClipContents",
          "package": "hoodle-core",
          "signature": "[BBoxed Stroke] -\u003e Clipboard -\u003e Clipboard",
          "source": "src/Hoodle-Type-Clipboard.html#replaceClipContents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Clipboard",
          "module": "Hoodle.Type.Clipboard",
          "name": "replaceClipContents",
          "normalized": "[BBoxed Stroke]-\u003eClipboard-\u003eClipboard",
          "package": "hoodle-core",
          "partial": "Clip Contents",
          "signature": "[BBoxed Stroke]-\u003eClipboard-\u003eClipboard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Clipboard.html#v:replaceClipContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Clipboard",
          "name": "unClipboard",
          "package": "hoodle-core",
          "signature": "[BBoxed Stroke]",
          "source": "src/Hoodle-Type-Clipboard.html#Clipboard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Clipboard",
          "module": "Hoodle.Type.Clipboard",
          "name": "unClipboard",
          "normalized": "[BBoxed Stroke]",
          "package": "hoodle-core",
          "partial": "Clipboard",
          "signature": "[BBoxed Stroke]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Clipboard.html#v:unClipboard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "Coroutine",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Coroutine.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "Coroutine",
          "package": "hoodle-core",
          "partial": "Coroutine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "Driver",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Coroutine.html#Driver",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "Driver",
          "package": "hoodle-core",
          "partial": "Driver",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#t:Driver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "DriverB",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Coroutine.html#DriverB",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "DriverB",
          "package": "hoodle-core",
          "partial": "Driver",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#t:DriverB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "EventVar",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Coroutine.html#EventVar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "EventVar",
          "package": "hoodle-core",
          "partial": "Event Var",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#t:EventVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "MainCoroutine",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Coroutine.html#MainCoroutine",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "MainCoroutine",
          "package": "hoodle-core",
          "partial": "Main Coroutine",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#t:MainCoroutine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "MainObj",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Coroutine.html#MainObj",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "MainObj",
          "package": "hoodle-core",
          "partial": "Main Obj",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#t:MainObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "MainObjB",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Coroutine.html#MainObjB",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "MainObjB",
          "package": "hoodle-core",
          "partial": "Main Obj",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#t:MainObjB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "MainOp",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Coroutine.html#MainOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "MainOp",
          "package": "hoodle-core",
          "partial": "Main Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#t:MainOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "WorldObj",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Coroutine.html#WorldObj",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "WorldObj",
          "package": "hoodle-core",
          "partial": "World Obj",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#t:WorldObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "WorldObjB",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Coroutine.html#WorldObjB",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "WorldObjB",
          "package": "hoodle-core",
          "partial": "World Obj",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#t:WorldObjB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "DoEvent",
          "package": "hoodle-core",
          "signature": "MainOp AllEvent ()",
          "source": "src/Hoodle-Type-Coroutine.html#MainOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "DoEvent",
          "normalized": "MainOp AllEvent()",
          "package": "hoodle-core",
          "partial": "Do Event",
          "signature": "MainOp AllEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#v:DoEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "doEvent",
          "package": "hoodle-core",
          "signature": "AllEvent -\u003e CObjT MainOp m ()",
          "source": "src/Hoodle-Type-Coroutine.html#doEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "doEvent",
          "normalized": "AllEvent-\u003eCObjT MainOp a()",
          "package": "hoodle-core",
          "partial": "Event",
          "signature": "AllEvent-\u003eCObjT MainOp m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#v:doEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "doIOaction",
          "package": "hoodle-core",
          "signature": "((AllEvent -\u003e IO ()) -\u003e IO AllEvent) -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Type-Coroutine.html#doIOaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "doIOaction",
          "normalized": "((AllEvent-\u003eIO())-\u003eIO AllEvent)-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "IOaction",
          "signature": "((AllEvent-\u003eIO())-\u003eIO AllEvent)-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#v:doIOaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "maybeError",
          "package": "hoodle-core",
          "signature": "String -\u003e Maybe a -\u003e MainCoroutine a",
          "source": "src/Hoodle-Type-Coroutine.html#maybeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "maybeError",
          "normalized": "String-\u003eMaybe a-\u003eMainCoroutine a",
          "package": "hoodle-core",
          "partial": "Error",
          "signature": "String-\u003eMaybe a-\u003eMainCoroutine a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#v:maybeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "nextevent",
          "package": "hoodle-core",
          "signature": "MainCoroutine UserEvent",
          "source": "src/Hoodle-Type-Coroutine.html#nextevent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "nextevent",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#v:nextevent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "sysevent",
          "package": "hoodle-core",
          "signature": "SystemEvent -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Type-Coroutine.html#sysevent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "sysevent",
          "normalized": "SystemEvent-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "signature": "SystemEvent-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#v:sysevent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Coroutine",
          "name": "world",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e MainObj () -\u003e WorldObj ()",
          "source": "src/Hoodle-Type-Coroutine.html#world",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Coroutine",
          "module": "Hoodle.Type.Coroutine",
          "name": "world",
          "normalized": "HoodleState-\u003eMainObj()-\u003eWorldObj()",
          "package": "hoodle-core",
          "signature": "HoodleState-\u003eMainObj()-\u003eWorldObj()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Coroutine.html#v:world"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "Enum",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Enum.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "Enum",
          "package": "hoodle-core",
          "partial": "Enum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epage add direction\n\u003c/p\u003e",
          "module": "Hoodle.Type.Enum",
          "name": "AddDirection",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Enum.html#AddDirection",
          "type": "data"
        },
        "index": {
          "description": "page add direction",
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "AddDirection",
          "package": "hoodle-core",
          "partial": "Add Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#t:AddDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epredefined background styles\n\u003c/p\u003e",
          "module": "Hoodle.Type.Enum",
          "name": "BackgroundStyle",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Enum.html#BackgroundStyle",
          "type": "data"
        },
        "index": {
          "description": "predefined background styles",
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "BackgroundStyle",
          "package": "hoodle-core",
          "partial": "Background Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#t:BackgroundStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edrawing efficiency\n\u003c/p\u003e",
          "module": "Hoodle.Type.Enum",
          "name": "DrawFlag",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Enum.html#DrawFlag",
          "type": "data"
        },
        "index": {
          "description": "drawing efficiency",
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "DrawFlag",
          "package": "hoodle-core",
          "partial": "Draw Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#t:DrawFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epredefined pen colors \n\u003c/p\u003e",
          "module": "Hoodle.Type.Enum",
          "name": "PenColor",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Enum.html#PenColor",
          "type": "data"
        },
        "index": {
          "description": "predefined pen colors",
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "PenColor",
          "package": "hoodle-core",
          "partial": "Pen Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#t:PenColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epen tool type \n\u003c/p\u003e",
          "module": "Hoodle.Type.Enum",
          "name": "PenType",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Enum.html#PenType",
          "type": "data"
        },
        "index": {
          "description": "pen tool type",
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "PenType",
          "package": "hoodle-core",
          "partial": "Pen Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#t:PenType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "RotateDir",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Enum.html#RotateDir",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "RotateDir",
          "package": "hoodle-core",
          "partial": "Rotate Dir",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#t:RotateDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "SelectInfo",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Enum.html#SelectInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "SelectInfo",
          "package": "hoodle-core",
          "partial": "Select Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#t:SelectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselect tool type\n\u003c/p\u003e",
          "module": "Hoodle.Type.Enum",
          "name": "SelectType",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Enum.html#SelectType",
          "type": "data"
        },
        "index": {
          "description": "select tool type",
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "SelectType",
          "package": "hoodle-core",
          "partial": "Select Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#t:SelectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emode for vertical space adding \n\u003c/p\u003e",
          "module": "Hoodle.Type.Enum",
          "name": "VerticalSpaceMode",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Enum.html#VerticalSpaceMode",
          "type": "data"
        },
        "index": {
          "description": "mode for vertical space adding",
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "VerticalSpaceMode",
          "package": "hoodle-core",
          "partial": "Vertical Space Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#t:VerticalSpaceMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erelative zoom mode \n\u003c/p\u003e",
          "module": "Hoodle.Type.Enum",
          "name": "ZoomModeRel",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Enum.html#ZoomModeRel",
          "type": "data"
        },
        "index": {
          "description": "relative zoom mode",
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "ZoomModeRel",
          "package": "hoodle-core",
          "partial": "Zoom Mode Rel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#t:ZoomModeRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "BkgEfficient",
          "package": "hoodle-core",
          "signature": "BkgEfficient",
          "source": "src/Hoodle-Type-Enum.html#DrawFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "BkgEfficient",
          "package": "hoodle-core",
          "partial": "Bkg Efficient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:BkgEfficient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "BkgStyleGraph",
          "package": "hoodle-core",
          "signature": "BkgStyleGraph",
          "source": "src/Hoodle-Type-Enum.html#BackgroundStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "BkgStyleGraph",
          "package": "hoodle-core",
          "partial": "Bkg Style Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:BkgStyleGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "BkgStyleLined",
          "package": "hoodle-core",
          "signature": "BkgStyleLined",
          "source": "src/Hoodle-Type-Enum.html#BackgroundStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "BkgStyleLined",
          "package": "hoodle-core",
          "partial": "Bkg Style Lined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:BkgStyleLined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "BkgStylePlain",
          "package": "hoodle-core",
          "signature": "BkgStylePlain",
          "source": "src/Hoodle-Type-Enum.html#BackgroundStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "BkgStylePlain",
          "package": "hoodle-core",
          "partial": "Bkg Style Plain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:BkgStylePlain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "BkgStyleRuled",
          "package": "hoodle-core",
          "signature": "BkgStyleRuled",
          "source": "src/Hoodle-Type-Enum.html#BackgroundStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "BkgStyleRuled",
          "package": "hoodle-core",
          "partial": "Bkg Style Ruled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:BkgStyleRuled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "CCW",
          "package": "hoodle-core",
          "signature": "CCW",
          "source": "src/Hoodle-Type-Enum.html#RotateDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "CCW",
          "package": "hoodle-core",
          "partial": "CCW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:CCW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "CW",
          "package": "hoodle-core",
          "signature": "CW",
          "source": "src/Hoodle-Type-Enum.html#RotateDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "CW",
          "package": "hoodle-core",
          "partial": "CW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:CW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "Clear",
          "package": "hoodle-core",
          "signature": "Clear",
          "source": "src/Hoodle-Type-Enum.html#DrawFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "Clear",
          "package": "hoodle-core",
          "partial": "Clear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:Clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "ColorBlack",
          "package": "hoodle-core",
          "signature": "ColorBlack",
          "source": "src/Hoodle-Type-Enum.html#PenColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "ColorBlack",
          "package": "hoodle-core",
          "partial": "Color Black",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:ColorBlack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "ColorBlue",
          "package": "hoodle-core",
          "signature": "ColorBlue",
          "source": "src/Hoodle-Type-Enum.html#PenColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "ColorBlue",
          "package": "hoodle-core",
          "partial": "Color Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:ColorBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "ColorGray",
          "package": "hoodle-core",
          "signature": "ColorGray",
          "source": "src/Hoodle-Type-Enum.html#PenColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "ColorGray",
          "package": "hoodle-core",
          "partial": "Color Gray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:ColorGray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "ColorGreen",
          "package": "hoodle-core",
          "signature": "ColorGreen",
          "source": "src/Hoodle-Type-Enum.html#PenColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "ColorGreen",
          "package": "hoodle-core",
          "partial": "Color Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:ColorGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "ColorLightBlue",
          "package": "hoodle-core",
          "signature": "ColorLightBlue",
          "source": "src/Hoodle-Type-Enum.html#PenColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "ColorLightBlue",
          "package": "hoodle-core",
          "partial": "Color Light Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:ColorLightBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "ColorLightGreen",
          "package": "hoodle-core",
          "signature": "ColorLightGreen",
          "source": "src/Hoodle-Type-Enum.html#PenColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "ColorLightGreen",
          "package": "hoodle-core",
          "partial": "Color Light Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:ColorLightGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "ColorMagenta",
          "package": "hoodle-core",
          "signature": "ColorMagenta",
          "source": "src/Hoodle-Type-Enum.html#PenColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "ColorMagenta",
          "package": "hoodle-core",
          "partial": "Color Magenta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:ColorMagenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "ColorOrange",
          "package": "hoodle-core",
          "signature": "ColorOrange",
          "source": "src/Hoodle-Type-Enum.html#PenColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "ColorOrange",
          "package": "hoodle-core",
          "partial": "Color Orange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:ColorOrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "ColorRGBA",
          "package": "hoodle-core",
          "signature": "ColorRGBA Double Double Double Double",
          "source": "src/Hoodle-Type-Enum.html#PenColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "ColorRGBA",
          "package": "hoodle-core",
          "partial": "Color RGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:ColorRGBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "ColorRed",
          "package": "hoodle-core",
          "signature": "ColorRed",
          "source": "src/Hoodle-Type-Enum.html#PenColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "ColorRed",
          "package": "hoodle-core",
          "partial": "Color Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:ColorRed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "ColorWhite",
          "package": "hoodle-core",
          "signature": "ColorWhite",
          "source": "src/Hoodle-Type-Enum.html#PenColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "ColorWhite",
          "package": "hoodle-core",
          "partial": "Color White",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:ColorWhite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "ColorYellow",
          "package": "hoodle-core",
          "signature": "ColorYellow",
          "source": "src/Hoodle-Type-Enum.html#PenColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "ColorYellow",
          "package": "hoodle-core",
          "partial": "Color Yellow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:ColorYellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "Efficient",
          "package": "hoodle-core",
          "signature": "Efficient",
          "source": "src/Hoodle-Type-Enum.html#DrawFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "Efficient",
          "package": "hoodle-core",
          "partial": "Efficient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:Efficient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "EraserWork",
          "package": "hoodle-core",
          "signature": "EraserWork",
          "source": "src/Hoodle-Type-Enum.html#PenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "EraserWork",
          "package": "hoodle-core",
          "partial": "Eraser Work",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:EraserWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "GoingDown",
          "package": "hoodle-core",
          "signature": "GoingDown",
          "source": "src/Hoodle-Type-Enum.html#VerticalSpaceMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "GoingDown",
          "package": "hoodle-core",
          "partial": "Going Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:GoingDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "GoingUp",
          "package": "hoodle-core",
          "signature": "GoingUp",
          "source": "src/Hoodle-Type-Enum.html#VerticalSpaceMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "GoingUp",
          "package": "hoodle-core",
          "partial": "Going Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:GoingUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "HighlighterWork",
          "package": "hoodle-core",
          "signature": "HighlighterWork",
          "source": "src/Hoodle-Type-Enum.html#PenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "HighlighterWork",
          "package": "hoodle-core",
          "partial": "Highlighter Work",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:HighlighterWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "OverPage",
          "package": "hoodle-core",
          "signature": "OverPage",
          "source": "src/Hoodle-Type-Enum.html#VerticalSpaceMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "OverPage",
          "package": "hoodle-core",
          "partial": "Over Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:OverPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "PageAfter",
          "package": "hoodle-core",
          "signature": "PageAfter",
          "source": "src/Hoodle-Type-Enum.html#AddDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "PageAfter",
          "package": "hoodle-core",
          "partial": "Page After",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:PageAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "PageBefore",
          "package": "hoodle-core",
          "signature": "PageBefore",
          "source": "src/Hoodle-Type-Enum.html#AddDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "PageBefore",
          "package": "hoodle-core",
          "partial": "Page Before",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:PageBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "PenWork",
          "package": "hoodle-core",
          "signature": "PenWork",
          "source": "src/Hoodle-Type-Enum.html#PenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "PenWork",
          "package": "hoodle-core",
          "partial": "Pen Work",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:PenWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "SelectHandToolWork",
          "package": "hoodle-core",
          "signature": "SelectHandToolWork",
          "source": "src/Hoodle-Type-Enum.html#SelectType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "SelectHandToolWork",
          "package": "hoodle-core",
          "partial": "Select Hand Tool Work",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:SelectHandToolWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "SelectInfo",
          "package": "hoodle-core",
          "signature": "SelectInfo",
          "source": "src/Hoodle-Type-Enum.html#SelectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "SelectInfo",
          "package": "hoodle-core",
          "partial": "Select Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:SelectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "SelectLassoWork",
          "package": "hoodle-core",
          "signature": "SelectLassoWork",
          "source": "src/Hoodle-Type-Enum.html#SelectType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "SelectLassoWork",
          "package": "hoodle-core",
          "partial": "Select Lasso Work",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:SelectLassoWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "SelectRectangleWork",
          "package": "hoodle-core",
          "signature": "SelectRectangleWork",
          "source": "src/Hoodle-Type-Enum.html#SelectType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "SelectRectangleWork",
          "package": "hoodle-core",
          "partial": "Select Rectangle Work",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:SelectRectangleWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "VerticalSpaceWork",
          "package": "hoodle-core",
          "signature": "VerticalSpaceWork",
          "source": "src/Hoodle-Type-Enum.html#PenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "VerticalSpaceWork",
          "package": "hoodle-core",
          "partial": "Vertical Space Work",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:VerticalSpaceWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "ZoomIn",
          "package": "hoodle-core",
          "signature": "ZoomIn",
          "source": "src/Hoodle-Type-Enum.html#ZoomModeRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "ZoomIn",
          "package": "hoodle-core",
          "partial": "Zoom In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:ZoomIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "ZoomOut",
          "package": "hoodle-core",
          "signature": "ZoomOut",
          "source": "src/Hoodle-Type-Enum.html#ZoomModeRel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "ZoomOut",
          "package": "hoodle-core",
          "partial": "Zoom Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:ZoomOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "_selectType",
          "package": "hoodle-core",
          "signature": "SelectType",
          "source": "src/Hoodle-Type-Enum.html#SelectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "_selectType",
          "package": "hoodle-core",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:_selectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "convertBackgroundStyleToByteString",
          "package": "hoodle-core",
          "signature": "BackgroundStyle -\u003e ByteString",
          "source": "src/Hoodle-Type-Enum.html#convertBackgroundStyleToByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "convertBackgroundStyleToByteString",
          "normalized": "BackgroundStyle-\u003eByteString",
          "package": "hoodle-core",
          "partial": "Background Style To Byte String",
          "signature": "BackgroundStyle-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:convertBackgroundStyleToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "convertPenColorToByteString",
          "package": "hoodle-core",
          "signature": "PenColor -\u003e ByteString",
          "source": "src/Hoodle-Type-Enum.html#convertPenColorToByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "convertPenColorToByteString",
          "normalized": "PenColor-\u003eByteString",
          "package": "hoodle-core",
          "partial": "Pen Color To Byte String",
          "signature": "PenColor-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:convertPenColorToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "convertPenColorToRGBA",
          "package": "hoodle-core",
          "signature": "PenColor -\u003e (Double, Double, Double, Double)",
          "source": "src/Hoodle-Type-Enum.html#convertPenColorToRGBA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "convertPenColorToRGBA",
          "normalized": "PenColor-\u003e(Double,Double,Double,Double)",
          "package": "hoodle-core",
          "partial": "Pen Color To RGBA",
          "signature": "PenColor-\u003e(Double,Double,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:convertPenColorToRGBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "convertRGBAToHex",
          "package": "hoodle-core",
          "signature": "(Double, Double, Double, Double) -\u003e ByteString",
          "source": "src/Hoodle-Type-Enum.html#convertRGBAToHex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "convertRGBAToHex",
          "normalized": "(Double,Double,Double,Double)-\u003eByteString",
          "package": "hoodle-core",
          "partial": "RGBATo Hex",
          "signature": "(Double,Double,Double,Double)-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:convertRGBAToHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "penColorNameMap",
          "package": "hoodle-core",
          "signature": "Map PenColor ByteString",
          "source": "src/Hoodle-Type-Enum.html#penColorNameMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "penColorNameMap",
          "package": "hoodle-core",
          "partial": "Color Name Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:penColorNameMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "penColorRGBAmap",
          "package": "hoodle-core",
          "signature": "Map PenColor (Double, Double, Double, Double)",
          "source": "src/Hoodle-Type-Enum.html#penColorRGBAmap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "penColorRGBAmap",
          "normalized": "Map PenColor(Double,Double,Double,Double)",
          "package": "hoodle-core",
          "partial": "Color RGBAmap",
          "signature": "Map PenColor(Double,Double,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:penColorRGBAmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Enum",
          "name": "selectType",
          "package": "hoodle-core",
          "signature": "Simple Lens SelectInfo SelectType",
          "source": "src/Hoodle-Type-Enum.html#selectType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Enum",
          "module": "Hoodle.Type.Enum",
          "name": "selectType",
          "package": "hoodle-core",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Enum.html#v:selectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGUI events in hoodle application\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hoodle.Type.Event",
          "name": "Event",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Event.html",
          "type": "module"
        },
        "index": {
          "description": "GUI events in hoodle application",
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "Event",
          "package": "hoodle-core",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "AllEvent",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Event.html#AllEvent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "AllEvent",
          "package": "hoodle-core",
          "partial": "All Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#t:AllEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "ContextMenuEvent",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Event.html#ContextMenuEvent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "ContextMenuEvent",
          "package": "hoodle-core",
          "partial": "Context Menu Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#t:ContextMenuEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "ImgType",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Event.html#ImgType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "ImgType",
          "package": "hoodle-core",
          "partial": "Img Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#t:ImgType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuEvent",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuEvent",
          "package": "hoodle-core",
          "partial": "Menu Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#t:MenuEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eevent for minibuffer operation (currently pen only) \n\u003c/p\u003e",
          "module": "Hoodle.Type.Event",
          "name": "MiniBufferEvent",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Event.html#MiniBufferEvent",
          "type": "data"
        },
        "index": {
          "description": "event for minibuffer operation currently pen only",
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MiniBufferEvent",
          "package": "hoodle-core",
          "partial": "Mini Buffer Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#t:MiniBufferEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eevent for multiline text view/buffer\n\u003c/p\u003e",
          "module": "Hoodle.Type.Event",
          "name": "MultiLineEvent",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Event.html#MultiLineEvent",
          "type": "data"
        },
        "index": {
          "description": "event for multiline text view buffer",
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MultiLineEvent",
          "package": "hoodle-core",
          "partial": "Multi Line Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#t:MultiLineEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eevent for network\n\u003c/p\u003e",
          "module": "Hoodle.Type.Event",
          "name": "NetworkEvent",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Event.html#NetworkEvent",
          "type": "data"
        },
        "index": {
          "description": "event for network",
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "NetworkEvent",
          "package": "hoodle-core",
          "partial": "Network Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#t:NetworkEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "SystemEvent",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Event.html#SystemEvent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "SystemEvent",
          "package": "hoodle-core",
          "partial": "System Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#t:SystemEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "UserEvent",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "UserEvent",
          "package": "hoodle-core",
          "partial": "User Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#t:UserEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "ActionOrdered",
          "package": "hoodle-core",
          "signature": "ActionOrdered",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "ActionOrdered",
          "package": "hoodle-core",
          "partial": "Action Ordered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:ActionOrdered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "AddLink",
          "package": "hoodle-core",
          "signature": "AddLink (Maybe (String, FilePath))",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "AddLink",
          "normalized": "AddLink(Maybe(String,FilePath))",
          "package": "hoodle-core",
          "partial": "Add Link",
          "signature": "AddLink(Maybe(String,FilePath))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:AddLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "AssignPenMode",
          "package": "hoodle-core",
          "signature": "AssignPenMode (Either PenType SelectType)",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "AssignPenMode",
          "package": "hoodle-core",
          "partial": "Assign Pen Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:AssignPenMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "BackgroundStyleChanged",
          "package": "hoodle-core",
          "signature": "BackgroundStyleChanged BackgroundStyle",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "BackgroundStyleChanged",
          "package": "hoodle-core",
          "partial": "Background Style Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:BackgroundStyleChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CMenuAssocWithNewFile",
          "package": "hoodle-core",
          "signature": "CMenuAssocWithNewFile",
          "source": "src/Hoodle-Type-Event.html#ContextMenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CMenuAssocWithNewFile",
          "package": "hoodle-core",
          "partial": "CMenu Assoc With New File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CMenuAssocWithNewFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CMenuAutosavePage",
          "package": "hoodle-core",
          "signature": "CMenuAutosavePage",
          "source": "src/Hoodle-Type-Event.html#ContextMenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CMenuAutosavePage",
          "package": "hoodle-core",
          "partial": "CMenu Autosave Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CMenuAutosavePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CMenuCanvasView",
          "package": "hoodle-core",
          "signature": "CMenuCanvasView CanvasId PageNum Double Double",
          "source": "src/Hoodle-Type-Event.html#ContextMenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CMenuCanvasView",
          "package": "hoodle-core",
          "partial": "CMenu Canvas View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CMenuCanvasView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CMenuCopy",
          "package": "hoodle-core",
          "signature": "CMenuCopy",
          "source": "src/Hoodle-Type-Event.html#ContextMenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CMenuCopy",
          "package": "hoodle-core",
          "partial": "CMenu Copy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CMenuCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CMenuCreateALink",
          "package": "hoodle-core",
          "signature": "CMenuCreateALink",
          "source": "src/Hoodle-Type-Event.html#ContextMenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CMenuCreateALink",
          "package": "hoodle-core",
          "partial": "CMenu Create ALink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CMenuCreateALink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CMenuCropImage",
          "package": "hoodle-core",
          "signature": "CMenuCropImage (BBoxed Image)",
          "source": "src/Hoodle-Type-Event.html#ContextMenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CMenuCropImage",
          "package": "hoodle-core",
          "partial": "CMenu Crop Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CMenuCropImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CMenuCustom",
          "package": "hoodle-core",
          "signature": "CMenuCustom",
          "source": "src/Hoodle-Type-Event.html#ContextMenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CMenuCustom",
          "package": "hoodle-core",
          "partial": "CMenu Custom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CMenuCustom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CMenuCut",
          "package": "hoodle-core",
          "signature": "CMenuCut",
          "source": "src/Hoodle-Type-Event.html#ContextMenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CMenuCut",
          "package": "hoodle-core",
          "partial": "CMenu Cut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CMenuCut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CMenuDelete",
          "package": "hoodle-core",
          "signature": "CMenuDelete",
          "source": "src/Hoodle-Type-Event.html#ContextMenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CMenuDelete",
          "package": "hoodle-core",
          "partial": "CMenu Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CMenuDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CMenuLaTeXConvert",
          "package": "hoodle-core",
          "signature": "CMenuLaTeXConvert (Double, Double) Text",
          "source": "src/Hoodle-Type-Event.html#ContextMenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CMenuLaTeXConvert",
          "normalized": "CMenuLaTeXConvert(Double,Double)Text",
          "package": "hoodle-core",
          "partial": "CMenu La Te XConvert",
          "signature": "CMenuLaTeXConvert(Double,Double)Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CMenuLaTeXConvert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CMenuLaTeXConvertNetwork",
          "package": "hoodle-core",
          "signature": "CMenuLaTeXConvertNetwork (Double, Double) Text",
          "source": "src/Hoodle-Type-Event.html#ContextMenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CMenuLaTeXConvertNetwork",
          "normalized": "CMenuLaTeXConvertNetwork(Double,Double)Text",
          "package": "hoodle-core",
          "partial": "CMenu La Te XConvert Network",
          "signature": "CMenuLaTeXConvertNetwork(Double,Double)Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CMenuLaTeXConvertNetwork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CMenuLinkConvert",
          "package": "hoodle-core",
          "signature": "CMenuLinkConvert Link",
          "source": "src/Hoodle-Type-Event.html#ContextMenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CMenuLinkConvert",
          "package": "hoodle-core",
          "partial": "CMenu Link Convert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CMenuLinkConvert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CMenuPangoConvert",
          "package": "hoodle-core",
          "signature": "CMenuPangoConvert (Double, Double) Text",
          "source": "src/Hoodle-Type-Event.html#ContextMenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CMenuPangoConvert",
          "normalized": "CMenuPangoConvert(Double,Double)Text",
          "package": "hoodle-core",
          "partial": "CMenu Pango Convert",
          "signature": "CMenuPangoConvert(Double,Double)Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CMenuPangoConvert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CMenuRotate",
          "package": "hoodle-core",
          "signature": "CMenuRotate RotateDir (BBoxed Image)",
          "source": "src/Hoodle-Type-Event.html#ContextMenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CMenuRotate",
          "package": "hoodle-core",
          "partial": "CMenu Rotate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CMenuRotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CMenuSaveSelectionAs",
          "package": "hoodle-core",
          "signature": "CMenuSaveSelectionAs ImgType",
          "source": "src/Hoodle-Type-Event.html#ContextMenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CMenuSaveSelectionAs",
          "package": "hoodle-core",
          "partial": "CMenu Save Selection As",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CMenuSaveSelectionAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CanvasConfigure",
          "package": "hoodle-core",
          "signature": "CanvasConfigure Int Double Double",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CanvasConfigure",
          "package": "hoodle-core",
          "partial": "Canvas Configure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CanvasConfigure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "ChangeDialog",
          "package": "hoodle-core",
          "signature": "ChangeDialog",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "ChangeDialog",
          "package": "hoodle-core",
          "partial": "Change Dialog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:ChangeDialog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "ClockUpdateEvent",
          "package": "hoodle-core",
          "signature": "ClockUpdateEvent",
          "source": "src/Hoodle-Type-Event.html#SystemEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "ClockUpdateEvent",
          "package": "hoodle-core",
          "partial": "Clock Update Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:ClockUpdateEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "ColorChosen",
          "package": "hoodle-core",
          "signature": "ColorChosen (Maybe PenColor)",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "ColorChosen",
          "package": "hoodle-core",
          "partial": "Color Chosen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:ColorChosen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "ContextMenuCreated",
          "package": "hoodle-core",
          "signature": "ContextMenuCreated",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "ContextMenuCreated",
          "package": "hoodle-core",
          "partial": "Context Menu Created",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:ContextMenuCreated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "CustomKeyEvent",
          "package": "hoodle-core",
          "signature": "CustomKeyEvent String",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "CustomKeyEvent",
          "package": "hoodle-core",
          "partial": "Custom Key Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:CustomKeyEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "EventDisconnected",
          "package": "hoodle-core",
          "signature": "EventDisconnected",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "EventDisconnected",
          "package": "hoodle-core",
          "partial": "Event Disconnected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:EventDisconnected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "FileChosen",
          "package": "hoodle-core",
          "signature": "FileChosen (Maybe FilePath)",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "FileChosen",
          "package": "hoodle-core",
          "partial": "File Chosen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:FileChosen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "FileReloadOrdered",
          "package": "hoodle-core",
          "signature": "FileReloadOrdered",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "FileReloadOrdered",
          "package": "hoodle-core",
          "partial": "File Reload Ordered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:FileReloadOrdered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "GetHoodleFileInfo",
          "package": "hoodle-core",
          "signature": "GetHoodleFileInfo (IORef (Maybe String))",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "GetHoodleFileInfo",
          "package": "hoodle-core",
          "partial": "Get Hoodle File Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:GetHoodleFileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "GotClipboardContent",
          "package": "hoodle-core",
          "signature": "GotClipboardContent (Maybe [Item])",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "GotClipboardContent",
          "normalized": "GotClipboardContent(Maybe[Item])",
          "package": "hoodle-core",
          "partial": "Got Clipboard Content",
          "signature": "GotClipboardContent(Maybe[Item])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:GotClipboardContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "GotContextMenuSignal",
          "package": "hoodle-core",
          "signature": "GotContextMenuSignal ContextMenuEvent",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "GotContextMenuSignal",
          "package": "hoodle-core",
          "partial": "Got Context Menu Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:GotContextMenuSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "GotLink",
          "package": "hoodle-core",
          "signature": "GotLink (Maybe String) (Int, Int)",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "GotLink",
          "normalized": "GotLink(Maybe String)(Int,Int)",
          "package": "hoodle-core",
          "partial": "Got Link",
          "signature": "GotLink(Maybe String)(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:GotLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "GotOk",
          "package": "hoodle-core",
          "signature": "GotOk",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "GotOk",
          "package": "hoodle-core",
          "partial": "Got Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:GotOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "GotRevision",
          "package": "hoodle-core",
          "signature": "GotRevision String String",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "GotRevision",
          "package": "hoodle-core",
          "partial": "Got Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:GotRevision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "GotRevisionInk",
          "package": "hoodle-core",
          "signature": "GotRevisionInk String [Stroke]",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "GotRevisionInk",
          "normalized": "GotRevisionInk String[Stroke]",
          "package": "hoodle-core",
          "partial": "Got Revision Ink",
          "signature": "GotRevisionInk String[Stroke]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:GotRevisionInk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "HScrollBarMoved",
          "package": "hoodle-core",
          "signature": "HScrollBarMoved Int Double",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "HScrollBarMoved",
          "package": "hoodle-core",
          "partial": "HScroll Bar Moved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:HScrollBarMoved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "ImageFileDropped",
          "package": "hoodle-core",
          "signature": "ImageFileDropped FilePath",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "ImageFileDropped",
          "package": "hoodle-core",
          "partial": "Image File Dropped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:ImageFileDropped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "Initialized",
          "package": "hoodle-core",
          "signature": "Initialized",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "Initialized",
          "package": "hoodle-core",
          "partial": "Initialized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:Initialized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "LaTeXInput",
          "package": "hoodle-core",
          "signature": "LaTeXInput (Maybe (ByteString, ByteString))",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "LaTeXInput",
          "normalized": "LaTeXInput(Maybe(ByteString,ByteString))",
          "package": "hoodle-core",
          "partial": "La Te XInput",
          "signature": "LaTeXInput(Maybe(ByteString,ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:LaTeXInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "Menu",
          "package": "hoodle-core",
          "signature": "Menu MenuEvent",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "Menu",
          "package": "hoodle-core",
          "partial": "Menu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:Menu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuAbout",
          "package": "hoodle-core",
          "signature": "MenuAbout",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuAbout",
          "package": "hoodle-core",
          "partial": "Menu About",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuAbout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuAddLink",
          "package": "hoodle-core",
          "signature": "MenuAddLink",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuAddLink",
          "package": "hoodle-core",
          "partial": "Menu Add Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuAddLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuAnnotatePDF",
          "package": "hoodle-core",
          "signature": "MenuAnnotatePDF",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuAnnotatePDF",
          "package": "hoodle-core",
          "partial": "Menu Annotate PDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuAnnotatePDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuAntialiasedBitmaps",
          "package": "hoodle-core",
          "signature": "MenuAntialiasedBitmaps",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuAntialiasedBitmaps",
          "package": "hoodle-core",
          "partial": "Menu Antialiased Bitmaps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuAntialiasedBitmaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuApplyToAllPages",
          "package": "hoodle-core",
          "signature": "MenuApplyToAllPages",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuApplyToAllPages",
          "package": "hoodle-core",
          "partial": "Menu Apply To All Pages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuApplyToAllPages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuAutoSavePreferences",
          "package": "hoodle-core",
          "signature": "MenuAutoSavePreferences",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuAutoSavePreferences",
          "package": "hoodle-core",
          "partial": "Menu Auto Save Preferences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuAutoSavePreferences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuButton2Mapping",
          "package": "hoodle-core",
          "signature": "MenuButton2Mapping",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuButton2Mapping",
          "package": "hoodle-core",
          "partial": "Menu Button Mapping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuButton2Mapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuButton3Mapping",
          "package": "hoodle-core",
          "signature": "MenuButton3Mapping",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuButton3Mapping",
          "package": "hoodle-core",
          "partial": "Menu Button Mapping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuButton3Mapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuColorPicker",
          "package": "hoodle-core",
          "signature": "MenuColorPicker",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuColorPicker",
          "package": "hoodle-core",
          "partial": "Menu Color Picker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuColorPicker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuCombineLaTeX",
          "package": "hoodle-core",
          "signature": "MenuCombineLaTeX",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuCombineLaTeX",
          "package": "hoodle-core",
          "partial": "Menu Combine La Te",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuCombineLaTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuCopy",
          "package": "hoodle-core",
          "signature": "MenuCopy",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuCopy",
          "package": "hoodle-core",
          "partial": "Menu Copy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuCut",
          "package": "hoodle-core",
          "signature": "MenuCut",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuCut",
          "package": "hoodle-core",
          "partial": "Menu Cut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuCut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuDefault",
          "package": "hoodle-core",
          "signature": "MenuDefault",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuDefault",
          "package": "hoodle-core",
          "partial": "Menu Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuDefaultEraser",
          "package": "hoodle-core",
          "signature": "MenuDefaultEraser",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuDefaultEraser",
          "package": "hoodle-core",
          "partial": "Menu Default Eraser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuDefaultEraser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuDefaultHighlighter",
          "package": "hoodle-core",
          "signature": "MenuDefaultHighlighter",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuDefaultHighlighter",
          "package": "hoodle-core",
          "partial": "Menu Default Highlighter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuDefaultHighlighter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuDefaultPaper",
          "package": "hoodle-core",
          "signature": "MenuDefaultPaper",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuDefaultPaper",
          "package": "hoodle-core",
          "partial": "Menu Default Paper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuDefaultPaper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuDefaultPen",
          "package": "hoodle-core",
          "signature": "MenuDefaultPen",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuDefaultPen",
          "package": "hoodle-core",
          "partial": "Menu Default Pen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuDefaultPen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuDefaultText",
          "package": "hoodle-core",
          "signature": "MenuDefaultText",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuDefaultText",
          "package": "hoodle-core",
          "partial": "Menu Default Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuDefaultText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuDelCanvas",
          "package": "hoodle-core",
          "signature": "MenuDelCanvas",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuDelCanvas",
          "package": "hoodle-core",
          "partial": "Menu Del Canvas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuDelCanvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuDelete",
          "package": "hoodle-core",
          "signature": "MenuDelete",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuDelete",
          "package": "hoodle-core",
          "partial": "Menu Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuDeleteLayer",
          "package": "hoodle-core",
          "signature": "MenuDeleteLayer",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuDeleteLayer",
          "package": "hoodle-core",
          "partial": "Menu Delete Layer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuDeleteLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuDeletePage",
          "package": "hoodle-core",
          "signature": "MenuDeletePage",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuDeletePage",
          "package": "hoodle-core",
          "partial": "Menu Delete Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuDeletePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuDiscardCoreEvents",
          "package": "hoodle-core",
          "signature": "MenuDiscardCoreEvents",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuDiscardCoreEvents",
          "package": "hoodle-core",
          "partial": "Menu Discard Core Events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuDiscardCoreEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuEmbedAllPDFBkg",
          "package": "hoodle-core",
          "signature": "MenuEmbedAllPDFBkg",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuEmbedAllPDFBkg",
          "package": "hoodle-core",
          "partial": "Menu Embed All PDFBkg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuEmbedAllPDFBkg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuEmbedImage",
          "package": "hoodle-core",
          "signature": "MenuEmbedImage",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuEmbedImage",
          "package": "hoodle-core",
          "partial": "Menu Embed Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuEmbedImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuEmbedPDF",
          "package": "hoodle-core",
          "signature": "MenuEmbedPDF",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuEmbedPDF",
          "package": "hoodle-core",
          "partial": "Menu Embed PDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuEmbedPDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuEmbedPredefinedImage",
          "package": "hoodle-core",
          "signature": "MenuEmbedPredefinedImage",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuEmbedPredefinedImage",
          "package": "hoodle-core",
          "partial": "Menu Embed Predefined Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuEmbedPredefinedImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuEmbedPredefinedImage2",
          "package": "hoodle-core",
          "signature": "MenuEmbedPredefinedImage2",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuEmbedPredefinedImage2",
          "package": "hoodle-core",
          "partial": "Menu Embed Predefined Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuEmbedPredefinedImage2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuEmbedPredefinedImage3",
          "package": "hoodle-core",
          "signature": "MenuEmbedPredefinedImage3",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuEmbedPredefinedImage3",
          "package": "hoodle-core",
          "partial": "Menu Embed Predefined Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuEmbedPredefinedImage3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuEraserOptions",
          "package": "hoodle-core",
          "signature": "MenuEraserOptions",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuEraserOptions",
          "package": "hoodle-core",
          "partial": "Menu Eraser Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuEraserOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuEraserTip",
          "package": "hoodle-core",
          "signature": "MenuEraserTip",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuEraserTip",
          "package": "hoodle-core",
          "partial": "Menu Eraser Tip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuEraserTip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuExport",
          "package": "hoodle-core",
          "signature": "MenuExport",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuExport",
          "package": "hoodle-core",
          "partial": "Menu Export",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuExport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuExportPageSVG",
          "package": "hoodle-core",
          "signature": "MenuExportPageSVG",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuExportPageSVG",
          "package": "hoodle-core",
          "partial": "Menu Export Page SVG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuExportPageSVG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuFirstPage",
          "package": "hoodle-core",
          "signature": "MenuFirstPage",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuFirstPage",
          "package": "hoodle-core",
          "partial": "Menu First Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuFirstPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuFollowLinks",
          "package": "hoodle-core",
          "signature": "MenuFollowLinks",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuFollowLinks",
          "package": "hoodle-core",
          "partial": "Menu Follow Links",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuFollowLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuFullScreen",
          "package": "hoodle-core",
          "signature": "MenuFullScreen",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuFullScreen",
          "package": "hoodle-core",
          "partial": "Menu Full Screen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuFullScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuGotoLayer",
          "package": "hoodle-core",
          "signature": "MenuGotoLayer",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuGotoLayer",
          "package": "hoodle-core",
          "partial": "Menu Goto Layer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuGotoLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuHSplit",
          "package": "hoodle-core",
          "signature": "MenuHSplit",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuHSplit",
          "package": "hoodle-core",
          "partial": "Menu HSplit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuHSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuHideLayer",
          "package": "hoodle-core",
          "signature": "MenuHideLayer",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuHideLayer",
          "package": "hoodle-core",
          "partial": "Menu Hide Layer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuHideLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuHighlighterOptions",
          "package": "hoodle-core",
          "signature": "MenuHighlighterOptions",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuHighlighterOptions",
          "package": "hoodle-core",
          "partial": "Menu Highlighter Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuHighlighterOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuKeepAspectRatio",
          "package": "hoodle-core",
          "signature": "MenuKeepAspectRatio",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuKeepAspectRatio",
          "package": "hoodle-core",
          "partial": "Menu Keep Aspect Ratio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuKeepAspectRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuLaTeX",
          "package": "hoodle-core",
          "signature": "MenuLaTeX",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuLaTeX",
          "package": "hoodle-core",
          "partial": "Menu La Te",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuLaTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuLastPage",
          "package": "hoodle-core",
          "signature": "MenuLastPage",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuLastPage",
          "package": "hoodle-core",
          "partial": "Menu Last Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuLastPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuLeftHandedScrollbar",
          "package": "hoodle-core",
          "signature": "MenuLeftHandedScrollbar",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuLeftHandedScrollbar",
          "package": "hoodle-core",
          "partial": "Menu Left Handed Scrollbar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuLeftHandedScrollbar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuLoadPNGorJPG",
          "package": "hoodle-core",
          "signature": "MenuLoadPNGorJPG",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuLoadPNGorJPG",
          "package": "hoodle-core",
          "partial": "Menu Load PNGor JPG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuLoadPNGorJPG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuLoadSVG",
          "package": "hoodle-core",
          "signature": "MenuLoadSVG",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuLoadSVG",
          "package": "hoodle-core",
          "partial": "Menu Load SVG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuLoadSVG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuMultiplePageView",
          "package": "hoodle-core",
          "signature": "MenuMultiplePageView",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuMultiplePageView",
          "package": "hoodle-core",
          "partial": "Menu Multiple Page View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuMultiplePageView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuMultiplePages",
          "package": "hoodle-core",
          "signature": "MenuMultiplePages",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuMultiplePages",
          "package": "hoodle-core",
          "partial": "Menu Multiple Pages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuMultiplePages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuNew",
          "package": "hoodle-core",
          "signature": "MenuNew",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuNew",
          "package": "hoodle-core",
          "partial": "Menu New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuNewLayer",
          "package": "hoodle-core",
          "signature": "MenuNewLayer",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuNewLayer",
          "package": "hoodle-core",
          "partial": "Menu New Layer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuNewLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuNewPageAfter",
          "package": "hoodle-core",
          "signature": "MenuNewPageAfter",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuNewPageAfter",
          "package": "hoodle-core",
          "partial": "Menu New Page After",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuNewPageAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuNewPageAtEnd",
          "package": "hoodle-core",
          "signature": "MenuNewPageAtEnd",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuNewPageAtEnd",
          "package": "hoodle-core",
          "partial": "Menu New Page At End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuNewPageAtEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuNewPageBefore",
          "package": "hoodle-core",
          "signature": "MenuNewPageBefore",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuNewPageBefore",
          "package": "hoodle-core",
          "partial": "Menu New Page Before",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuNewPageBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuNextLayer",
          "package": "hoodle-core",
          "signature": "MenuNextLayer",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuNextLayer",
          "package": "hoodle-core",
          "partial": "Menu Next Layer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuNextLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuNextPage",
          "package": "hoodle-core",
          "signature": "MenuNextPage",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuNextPage",
          "package": "hoodle-core",
          "partial": "Menu Next Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuNextPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuNormalSize",
          "package": "hoodle-core",
          "signature": "MenuNormalSize",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuNormalSize",
          "package": "hoodle-core",
          "partial": "Menu Normal Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuNormalSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuOpen",
          "package": "hoodle-core",
          "signature": "MenuOpen",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuOpen",
          "package": "hoodle-core",
          "partial": "Menu Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuPageHeight",
          "package": "hoodle-core",
          "signature": "MenuPageHeight",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuPageHeight",
          "package": "hoodle-core",
          "partial": "Menu Page Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuPageHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuPageHighlight",
          "package": "hoodle-core",
          "signature": "MenuPageHighlight",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuPageHighlight",
          "package": "hoodle-core",
          "partial": "Menu Page Highlight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuPageHighlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuPageWidth",
          "package": "hoodle-core",
          "signature": "MenuPageWidth",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuPageWidth",
          "package": "hoodle-core",
          "partial": "Menu Page Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuPageWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuPaperColor",
          "package": "hoodle-core",
          "signature": "MenuPaperColor",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuPaperColor",
          "package": "hoodle-core",
          "partial": "Menu Paper Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuPaperColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuPaperSize",
          "package": "hoodle-core",
          "signature": "MenuPaperSize",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuPaperSize",
          "package": "hoodle-core",
          "partial": "Menu Paper Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuPaperSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuPaperStyle",
          "package": "hoodle-core",
          "signature": "MenuPaperStyle",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuPaperStyle",
          "package": "hoodle-core",
          "partial": "Menu Paper Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuPaperStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuPaste",
          "package": "hoodle-core",
          "signature": "MenuPaste",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuPaste",
          "package": "hoodle-core",
          "partial": "Menu Paste",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuPaste"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuPenOptions",
          "package": "hoodle-core",
          "signature": "MenuPenOptions",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuPenOptions",
          "package": "hoodle-core",
          "partial": "Menu Pen Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuPenOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuPressureSensitivity",
          "package": "hoodle-core",
          "signature": "MenuPressureSensitivity",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuPressureSensitivity",
          "package": "hoodle-core",
          "partial": "Menu Pressure Sensitivity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuPressureSensitivity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuPrevLayer",
          "package": "hoodle-core",
          "signature": "MenuPrevLayer",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuPrevLayer",
          "package": "hoodle-core",
          "partial": "Menu Prev Layer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuPrevLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuPreviousPage",
          "package": "hoodle-core",
          "signature": "MenuPreviousPage",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuPreviousPage",
          "package": "hoodle-core",
          "partial": "Menu Previous Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuPreviousPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuPrint",
          "package": "hoodle-core",
          "signature": "MenuPrint",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuPrint",
          "package": "hoodle-core",
          "partial": "Menu Print",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuPrintPaperRuling",
          "package": "hoodle-core",
          "signature": "MenuPrintPaperRuling",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuPrintPaperRuling",
          "package": "hoodle-core",
          "partial": "Menu Print Paper Ruling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuPrintPaperRuling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuProgressiveBackgrounds",
          "package": "hoodle-core",
          "signature": "MenuProgressiveBackgrounds",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuProgressiveBackgrounds",
          "package": "hoodle-core",
          "partial": "Menu Progressive Backgrounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuProgressiveBackgrounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuQuit",
          "package": "hoodle-core",
          "signature": "MenuQuit",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuQuit",
          "package": "hoodle-core",
          "partial": "Menu Quit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuQuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuRecentDocument",
          "package": "hoodle-core",
          "signature": "MenuRecentDocument",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuRecentDocument",
          "package": "hoodle-core",
          "partial": "Menu Recent Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuRecentDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuRedo",
          "package": "hoodle-core",
          "signature": "MenuRedo",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuRedo",
          "package": "hoodle-core",
          "partial": "Menu Redo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuRedo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuRelaunch",
          "package": "hoodle-core",
          "signature": "MenuRelaunch",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuRelaunch",
          "package": "hoodle-core",
          "partial": "Menu Relaunch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuRelaunch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuReload",
          "package": "hoodle-core",
          "signature": "MenuReload",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuReload",
          "package": "hoodle-core",
          "partial": "Menu Reload",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuReload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuRuler",
          "package": "hoodle-core",
          "signature": "MenuRuler",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuRuler",
          "package": "hoodle-core",
          "partial": "Menu Ruler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuRuler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuSave",
          "package": "hoodle-core",
          "signature": "MenuSave",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuSave",
          "package": "hoodle-core",
          "partial": "Menu Save",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuSave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuSaveAs",
          "package": "hoodle-core",
          "signature": "MenuSaveAs",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuSaveAs",
          "package": "hoodle-core",
          "partial": "Menu Save As",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuSaveAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuSavePreferences",
          "package": "hoodle-core",
          "signature": "MenuSavePreferences",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuSavePreferences",
          "package": "hoodle-core",
          "partial": "Menu Save Preferences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuSavePreferences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuSelectRectangle",
          "package": "hoodle-core",
          "signature": "MenuSelectRectangle",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuSelectRectangle",
          "package": "hoodle-core",
          "partial": "Menu Select Rectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuSelectRectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuSelectRegion",
          "package": "hoodle-core",
          "signature": "MenuSelectRegion",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuSelectRegion",
          "package": "hoodle-core",
          "partial": "Menu Select Region",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuSelectRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuSetAsDefaultOption",
          "package": "hoodle-core",
          "signature": "MenuSetAsDefaultOption",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuSetAsDefaultOption",
          "package": "hoodle-core",
          "partial": "Menu Set As Default Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuSetAsDefaultOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuSetAsDefaultPaper",
          "package": "hoodle-core",
          "signature": "MenuSetAsDefaultPaper",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuSetAsDefaultPaper",
          "package": "hoodle-core",
          "partial": "Menu Set As Default Paper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuSetAsDefaultPaper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuSetZoom",
          "package": "hoodle-core",
          "signature": "MenuSetZoom",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuSetZoom",
          "package": "hoodle-core",
          "partial": "Menu Set Zoom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuSetZoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuShapeRecognizer",
          "package": "hoodle-core",
          "signature": "MenuShapeRecognizer",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuShapeRecognizer",
          "package": "hoodle-core",
          "partial": "Menu Shape Recognizer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuShapeRecognizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuShortenMenus",
          "package": "hoodle-core",
          "signature": "MenuShortenMenus",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuShortenMenus",
          "package": "hoodle-core",
          "partial": "Menu Shorten Menus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuShortenMenus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuShowLayer",
          "package": "hoodle-core",
          "signature": "MenuShowLayer",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuShowLayer",
          "package": "hoodle-core",
          "partial": "Menu Show Layer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuShowLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuShowRevisions",
          "package": "hoodle-core",
          "signature": "MenuShowRevisions",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuShowRevisions",
          "package": "hoodle-core",
          "partial": "Menu Show Revisions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuShowRevisions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuShowUUID",
          "package": "hoodle-core",
          "signature": "MenuShowUUID",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuShowUUID",
          "package": "hoodle-core",
          "partial": "Menu Show UUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuShowUUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuSmoothScroll",
          "package": "hoodle-core",
          "signature": "MenuSmoothScroll",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuSmoothScroll",
          "package": "hoodle-core",
          "partial": "Menu Smooth Scroll",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuSmoothScroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuStartSync",
          "package": "hoodle-core",
          "signature": "MenuStartSync",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuStartSync",
          "package": "hoodle-core",
          "partial": "Menu Start Sync",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuStartSync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuText",
          "package": "hoodle-core",
          "signature": "MenuText",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuText",
          "package": "hoodle-core",
          "partial": "Menu Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuTextFont",
          "package": "hoodle-core",
          "signature": "MenuTextFont",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuTextFont",
          "package": "hoodle-core",
          "partial": "Menu Text Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuTextFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuToggleClockWidget",
          "package": "hoodle-core",
          "signature": "MenuToggleClockWidget",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuToggleClockWidget",
          "package": "hoodle-core",
          "partial": "Menu Toggle Clock Widget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuToggleClockWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuToggleLayerWidget",
          "package": "hoodle-core",
          "signature": "MenuToggleLayerWidget",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuToggleLayerWidget",
          "package": "hoodle-core",
          "partial": "Menu Toggle Layer Widget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuToggleLayerWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuTogglePanZoomWidget",
          "package": "hoodle-core",
          "signature": "MenuTogglePanZoomWidget",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuTogglePanZoomWidget",
          "package": "hoodle-core",
          "partial": "Menu Toggle Pan Zoom Widget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuTogglePanZoomWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuUndo",
          "package": "hoodle-core",
          "signature": "MenuUndo",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuUndo",
          "package": "hoodle-core",
          "partial": "Menu Undo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuUndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuUsePopUpMenu",
          "package": "hoodle-core",
          "signature": "MenuUsePopUpMenu",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuUsePopUpMenu",
          "package": "hoodle-core",
          "partial": "Menu Use Pop Up Menu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuUsePopUpMenu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuUseTouch",
          "package": "hoodle-core",
          "signature": "MenuUseTouch",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuUseTouch",
          "package": "hoodle-core",
          "partial": "Menu Use Touch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuUseTouch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuUseXInput",
          "package": "hoodle-core",
          "signature": "MenuUseXInput",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuUseXInput",
          "package": "hoodle-core",
          "partial": "Menu Use XInput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuUseXInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuVSplit",
          "package": "hoodle-core",
          "signature": "MenuVSplit",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuVSplit",
          "package": "hoodle-core",
          "partial": "Menu VSplit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuVSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuVersionSave",
          "package": "hoodle-core",
          "signature": "MenuVersionSave",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuVersionSave",
          "package": "hoodle-core",
          "partial": "Menu Version Save",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuVersionSave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuVerticalSpace",
          "package": "hoodle-core",
          "signature": "MenuVerticalSpace",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuVerticalSpace",
          "package": "hoodle-core",
          "partial": "Menu Vertical Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuVerticalSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuZoom",
          "package": "hoodle-core",
          "signature": "MenuZoom",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuZoom",
          "package": "hoodle-core",
          "partial": "Menu Zoom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuZoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuZoomIn",
          "package": "hoodle-core",
          "signature": "MenuZoomIn",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuZoomIn",
          "package": "hoodle-core",
          "partial": "Menu Zoom In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuZoomIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MenuZoomOut",
          "package": "hoodle-core",
          "signature": "MenuZoomOut",
          "source": "src/Hoodle-Type-Event.html#MenuEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MenuZoomOut",
          "package": "hoodle-core",
          "partial": "Menu Zoom Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MenuZoomOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MiniBuffer",
          "package": "hoodle-core",
          "signature": "MiniBuffer MiniBufferEvent",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MiniBuffer",
          "package": "hoodle-core",
          "partial": "Mini Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MiniBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MiniBufferInitialized",
          "package": "hoodle-core",
          "signature": "MiniBufferInitialized DrawWindow",
          "source": "src/Hoodle-Type-Event.html#MiniBufferEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MiniBufferInitialized",
          "package": "hoodle-core",
          "partial": "Mini Buffer Initialized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MiniBufferInitialized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MiniBufferPenDown",
          "package": "hoodle-core",
          "signature": "MiniBufferPenDown PenButton PointerCoord",
          "source": "src/Hoodle-Type-Event.html#MiniBufferEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MiniBufferPenDown",
          "package": "hoodle-core",
          "partial": "Mini Buffer Pen Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MiniBufferPenDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MiniBufferPenMove",
          "package": "hoodle-core",
          "signature": "MiniBufferPenMove PointerCoord",
          "source": "src/Hoodle-Type-Event.html#MiniBufferEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MiniBufferPenMove",
          "package": "hoodle-core",
          "partial": "Mini Buffer Pen Move",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MiniBufferPenMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MiniBufferPenUp",
          "package": "hoodle-core",
          "signature": "MiniBufferPenUp PointerCoord",
          "source": "src/Hoodle-Type-Event.html#MiniBufferEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MiniBufferPenUp",
          "package": "hoodle-core",
          "partial": "Mini Buffer Pen Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MiniBufferPenUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MultiLine",
          "package": "hoodle-core",
          "signature": "MultiLine MultiLineEvent",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MultiLine",
          "package": "hoodle-core",
          "partial": "Multi Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MultiLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "MultiLineChanged",
          "package": "hoodle-core",
          "signature": "MultiLineChanged Text",
          "source": "src/Hoodle-Type-Event.html#MultiLineEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "MultiLineChanged",
          "package": "hoodle-core",
          "partial": "Multi Line Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:MultiLineChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "NetworkCloseDialog",
          "package": "hoodle-core",
          "signature": "NetworkCloseDialog",
          "source": "src/Hoodle-Type-Event.html#NetworkEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "NetworkCloseDialog",
          "package": "hoodle-core",
          "partial": "Network Close Dialog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:NetworkCloseDialog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "NetworkClosed",
          "package": "hoodle-core",
          "signature": "NetworkClosed",
          "source": "src/Hoodle-Type-Event.html#NetworkEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "NetworkClosed",
          "package": "hoodle-core",
          "partial": "Network Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:NetworkClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "NetworkDialog",
          "package": "hoodle-core",
          "signature": "NetworkDialog",
          "source": "src/Hoodle-Type-Event.html#NetworkEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "NetworkDialog",
          "package": "hoodle-core",
          "partial": "Network Dialog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:NetworkDialog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "NetworkInitialized",
          "package": "hoodle-core",
          "signature": "NetworkInitialized ThreadId (MVar ())",
          "source": "src/Hoodle-Type-Event.html#NetworkEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "NetworkInitialized",
          "normalized": "NetworkInitialized ThreadId(MVar())",
          "package": "hoodle-core",
          "partial": "Network Initialized",
          "signature": "NetworkInitialized ThreadId(MVar())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:NetworkInitialized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "NetworkProcess",
          "package": "hoodle-core",
          "signature": "NetworkProcess NetworkEvent",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "NetworkProcess",
          "package": "hoodle-core",
          "partial": "Network Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:NetworkProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "NetworkReceived",
          "package": "hoodle-core",
          "signature": "NetworkReceived Text",
          "source": "src/Hoodle-Type-Event.html#NetworkEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "NetworkReceived",
          "package": "hoodle-core",
          "partial": "Network Received",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:NetworkReceived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "OkCancel",
          "package": "hoodle-core",
          "signature": "OkCancel Bool",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "OkCancel",
          "package": "hoodle-core",
          "partial": "Ok Cancel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:OkCancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "PaneMoveEnd",
          "package": "hoodle-core",
          "signature": "PaneMoveEnd",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "PaneMoveEnd",
          "package": "hoodle-core",
          "partial": "Pane Move End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:PaneMoveEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "PaneMoveStart",
          "package": "hoodle-core",
          "signature": "PaneMoveStart",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "PaneMoveStart",
          "package": "hoodle-core",
          "partial": "Pane Move Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:PaneMoveStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "PenColorChanged",
          "package": "hoodle-core",
          "signature": "PenColorChanged PenColor",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "PenColorChanged",
          "package": "hoodle-core",
          "partial": "Pen Color Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:PenColorChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "PenDown",
          "package": "hoodle-core",
          "signature": "PenDown Int PenButton PointerCoord",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "PenDown",
          "package": "hoodle-core",
          "partial": "Pen Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:PenDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "PenMove",
          "package": "hoodle-core",
          "signature": "PenMove Int PointerCoord",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "PenMove",
          "package": "hoodle-core",
          "partial": "Pen Move",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:PenMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "PenUp",
          "package": "hoodle-core",
          "signature": "PenUp Int PointerCoord",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "PenUp",
          "package": "hoodle-core",
          "partial": "Pen Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:PenUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "PenWidthChanged",
          "package": "hoodle-core",
          "signature": "PenWidthChanged Int",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "PenWidthChanged",
          "package": "hoodle-core",
          "partial": "Pen Width Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:PenWidthChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "Sync",
          "package": "hoodle-core",
          "signature": "Sync UTCTime",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "Sync",
          "package": "hoodle-core",
          "partial": "Sync",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:Sync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "SysEv",
          "package": "hoodle-core",
          "signature": "SysEv SystemEvent",
          "source": "src/Hoodle-Type-Event.html#AllEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "SysEv",
          "package": "hoodle-core",
          "partial": "Sys Ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:SysEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "TestSystemEvent",
          "package": "hoodle-core",
          "signature": "TestSystemEvent",
          "source": "src/Hoodle-Type-Event.html#SystemEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "TestSystemEvent",
          "package": "hoodle-core",
          "partial": "Test System Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:TestSystemEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "TextInput",
          "package": "hoodle-core",
          "signature": "TextInput (Maybe String)",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "TextInput",
          "package": "hoodle-core",
          "partial": "Text Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:TextInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "ToContSinglePage",
          "package": "hoodle-core",
          "signature": "ToContSinglePage",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "ToContSinglePage",
          "package": "hoodle-core",
          "partial": "To Cont Single Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:ToContSinglePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "ToSelectMode",
          "package": "hoodle-core",
          "signature": "ToSelectMode",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "ToSelectMode",
          "package": "hoodle-core",
          "partial": "To Select Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:ToSelectMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "ToSinglePage",
          "package": "hoodle-core",
          "signature": "ToSinglePage",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "ToSinglePage",
          "package": "hoodle-core",
          "partial": "To Single Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:ToSinglePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "ToViewAppendMode",
          "package": "hoodle-core",
          "signature": "ToViewAppendMode",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "ToViewAppendMode",
          "package": "hoodle-core",
          "partial": "To View Append Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:ToViewAppendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "TouchDown",
          "package": "hoodle-core",
          "signature": "TouchDown Int PointerCoord",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "TouchDown",
          "package": "hoodle-core",
          "partial": "Touch Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:TouchDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "TouchMove",
          "package": "hoodle-core",
          "signature": "TouchMove Int PointerCoord",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "TouchMove",
          "package": "hoodle-core",
          "partial": "Touch Move",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:TouchMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "TouchUp",
          "package": "hoodle-core",
          "signature": "TouchUp Int PointerCoord",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "TouchUp",
          "package": "hoodle-core",
          "partial": "Touch Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:TouchUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "TypPDF",
          "package": "hoodle-core",
          "signature": "TypPDF",
          "source": "src/Hoodle-Type-Event.html#ImgType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "TypPDF",
          "package": "hoodle-core",
          "partial": "Typ PDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:TypPDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "TypSVG",
          "package": "hoodle-core",
          "signature": "TypSVG",
          "source": "src/Hoodle-Type-Event.html#ImgType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "TypSVG",
          "package": "hoodle-core",
          "partial": "Typ SVG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:TypSVG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "UpdateCanvas",
          "package": "hoodle-core",
          "signature": "UpdateCanvas Int",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "UpdateCanvas",
          "package": "hoodle-core",
          "partial": "Update Canvas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:UpdateCanvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "UpdateCanvasEfficient",
          "package": "hoodle-core",
          "signature": "UpdateCanvasEfficient Int",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "UpdateCanvasEfficient",
          "package": "hoodle-core",
          "partial": "Update Canvas Efficient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:UpdateCanvasEfficient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "UsrEv",
          "package": "hoodle-core",
          "signature": "UsrEv UserEvent",
          "source": "src/Hoodle-Type-Event.html#AllEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "UsrEv",
          "package": "hoodle-core",
          "partial": "Usr Ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:UsrEv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "VScrollBarEnd",
          "package": "hoodle-core",
          "signature": "VScrollBarEnd Int Double",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "VScrollBarEnd",
          "package": "hoodle-core",
          "partial": "VScroll Bar End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:VScrollBarEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "VScrollBarMoved",
          "package": "hoodle-core",
          "signature": "VScrollBarMoved Int Double",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "VScrollBarMoved",
          "package": "hoodle-core",
          "partial": "VScroll Bar Moved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:VScrollBarMoved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "VScrollBarStart",
          "package": "hoodle-core",
          "signature": "VScrollBarStart Int Double",
          "source": "src/Hoodle-Type-Event.html#UserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "VScrollBarStart",
          "package": "hoodle-core",
          "partial": "VScroll Bar Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:VScrollBarStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "mkIOaction",
          "package": "hoodle-core",
          "signature": "((AllEvent -\u003e IO ()) -\u003e IO AllEvent) -\u003e Either (ActionOrder AllEvent) AllEvent",
          "source": "src/Hoodle-Type-Event.html#mkIOaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "mkIOaction",
          "normalized": "((AllEvent-\u003eIO())-\u003eIO AllEvent)-\u003eEither(ActionOrder AllEvent)AllEvent",
          "package": "hoodle-core",
          "partial": "IOaction",
          "signature": "((AllEvent-\u003eIO())-\u003eIO AllEvent)-\u003eEither(ActionOrder AllEvent)AllEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:mkIOaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Event",
          "name": "viewModeToUserEvent",
          "package": "hoodle-core",
          "signature": "RadioAction -\u003e IO UserEvent",
          "source": "src/Hoodle-Type-Event.html#viewModeToUserEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Event",
          "module": "Hoodle.Type.Event",
          "name": "viewModeToUserEvent",
          "normalized": "RadioAction-\u003eIO UserEvent",
          "package": "hoodle-core",
          "partial": "Mode To User Event",
          "signature": "RadioAction-\u003eIO UserEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Event.html#v:viewModeToUserEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "HoodleState",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-HoodleState.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "HoodleState",
          "package": "hoodle-core",
          "partial": "Hoodle State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "HoodleModeState",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleModeState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "HoodleModeState",
          "package": "hoodle-core",
          "partial": "Hoodle Mode State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#t:HoodleModeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "HoodleState",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "HoodleState",
          "package": "hoodle-core",
          "partial": "Hoodle State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#t:HoodleState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "IsOneTimeSelectMode",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-HoodleState.html#IsOneTimeSelectMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "IsOneTimeSelectMode",
          "package": "hoodle-core",
          "partial": "Is One Time Select Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#t:IsOneTimeSelectMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of Hoodle settings \n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "Settings",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-HoodleState.html#Settings",
          "type": "data"
        },
        "index": {
          "description": "set of Hoodle settings",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "Settings",
          "package": "hoodle-core",
          "partial": "Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#t:Settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "UIComponentSignalHandler",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-HoodleState.html#UIComponentSignalHandler",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "UIComponentSignalHandler",
          "package": "hoodle-core",
          "partial": "UIComponent Signal Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#t:UIComponentSignalHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "HoodleState",
          "package": "hoodle-core",
          "signature": "HoodleState",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "HoodleState",
          "package": "hoodle-core",
          "partial": "Hoodle State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:HoodleState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "NoOneTimeSelectMode",
          "package": "hoodle-core",
          "signature": "NoOneTimeSelectMode",
          "source": "src/Hoodle-Type-HoodleState.html#IsOneTimeSelectMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "NoOneTimeSelectMode",
          "package": "hoodle-core",
          "partial": "No One Time Select Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:NoOneTimeSelectMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "SelectState",
          "package": "hoodle-core",
          "signature": "SelectState",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleModeState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "SelectState",
          "package": "hoodle-core",
          "partial": "Select State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:SelectState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "Settings",
          "package": "hoodle-core",
          "signature": "Settings",
          "source": "src/Hoodle-Type-HoodleState.html#Settings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "Settings",
          "package": "hoodle-core",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:Settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "UIComponentSignalHandler",
          "package": "hoodle-core",
          "signature": "UIComponentSignalHandler",
          "source": "src/Hoodle-Type-HoodleState.html#UIComponentSignalHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "UIComponentSignalHandler",
          "package": "hoodle-core",
          "partial": "UIComponent Signal Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:UIComponentSignalHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "ViewAppendState",
          "package": "hoodle-core",
          "signature": "ViewAppendState",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleModeState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "ViewAppendState",
          "package": "hoodle-core",
          "partial": "View Append State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:ViewAppendState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "YesAfterSelect",
          "package": "hoodle-core",
          "signature": "YesAfterSelect",
          "source": "src/Hoodle-Type-HoodleState.html#IsOneTimeSelectMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "YesAfterSelect",
          "package": "hoodle-core",
          "partial": "Yes After Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:YesAfterSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "YesBeforeSelect",
          "package": "hoodle-core",
          "signature": "YesBeforeSelect",
          "source": "src/Hoodle-Type-HoodleState.html#IsOneTimeSelectMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "YesBeforeSelect",
          "package": "hoodle-core",
          "partial": "Yes Before Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:YesBeforeSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_backgroundStyle",
          "package": "hoodle-core",
          "signature": "BackgroundStyle",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_backgroundStyle",
          "package": "hoodle-core",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_backgroundStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_callBack",
          "package": "hoodle-core",
          "signature": "AllEvent -\u003e IO ()",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_callBack",
          "normalized": "AllEvent-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Back",
          "signature": "AllEvent-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_callBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_currentCanvas",
          "package": "hoodle-core",
          "signature": "(CanvasId, CanvasInfoBox)",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_currentCanvas",
          "normalized": "(CanvasId,CanvasInfoBox)",
          "package": "hoodle-core",
          "partial": "Canvas",
          "signature": "(CanvasId,CanvasInfoBox)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_currentCanvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_currentPenDraw",
          "package": "hoodle-core",
          "signature": "PenDraw",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_currentPenDraw",
          "package": "hoodle-core",
          "partial": "Pen Draw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_currentPenDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_cvsInfoMap",
          "package": "hoodle-core",
          "signature": "CanvasInfoMap",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_cvsInfoMap",
          "package": "hoodle-core",
          "partial": "Info Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_cvsInfoMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_deviceList",
          "package": "hoodle-core",
          "signature": "DeviceList",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_deviceList",
          "package": "hoodle-core",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_deviceList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_doesEmbedImage",
          "package": "hoodle-core",
          "signature": "Bool",
          "source": "src/Hoodle-Type-HoodleState.html#Settings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_doesEmbedImage",
          "package": "hoodle-core",
          "partial": "Embed Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_doesEmbedImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_doesEmbedPDF",
          "package": "hoodle-core",
          "signature": "Bool",
          "source": "src/Hoodle-Type-HoodleState.html#Settings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_doesEmbedPDF",
          "package": "hoodle-core",
          "partial": "Embed PDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_doesEmbedPDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_doesFollowLinks",
          "package": "hoodle-core",
          "signature": "Bool",
          "source": "src/Hoodle-Type-HoodleState.html#Settings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_doesFollowLinks",
          "package": "hoodle-core",
          "partial": "Follow Links",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_doesFollowLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_doesKeepAspectRatio",
          "package": "hoodle-core",
          "signature": "Bool",
          "source": "src/Hoodle-Type-HoodleState.html#Settings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_doesKeepAspectRatio",
          "package": "hoodle-core",
          "partial": "Keep Aspect Ratio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_doesKeepAspectRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_doesSmoothScroll",
          "package": "hoodle-core",
          "signature": "Bool",
          "source": "src/Hoodle-Type-HoodleState.html#Settings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_doesSmoothScroll",
          "package": "hoodle-core",
          "partial": "Smooth Scroll",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_doesSmoothScroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_doesUsePopUpMenu",
          "package": "hoodle-core",
          "signature": "Bool",
          "source": "src/Hoodle-Type-HoodleState.html#Settings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_doesUsePopUpMenu",
          "package": "hoodle-core",
          "partial": "Use Pop Up Menu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_doesUsePopUpMenu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_doesUseTouch",
          "package": "hoodle-core",
          "signature": "Bool",
          "source": "src/Hoodle-Type-HoodleState.html#Settings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_doesUseTouch",
          "package": "hoodle-core",
          "partial": "Use Touch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_doesUseTouch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_doesUseXInput",
          "package": "hoodle-core",
          "signature": "Bool",
          "source": "src/Hoodle-Type-HoodleState.html#Settings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_doesUseXInput",
          "package": "hoodle-core",
          "partial": "Use XInput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_doesUseXInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_frameState",
          "package": "hoodle-core",
          "signature": "WindowConfig",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_frameState",
          "package": "hoodle-core",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_frameState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_gtkUIManager",
          "package": "hoodle-core",
          "signature": "UIManager",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_gtkUIManager",
          "package": "hoodle-core",
          "partial": "UIManager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_gtkUIManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_hoodleFileControl",
          "package": "hoodle-core",
          "signature": "HoodleFileControl",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_hoodleFileControl",
          "package": "hoodle-core",
          "partial": "File Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_hoodleFileControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_hoodleModeState",
          "package": "hoodle-core",
          "signature": "HoodleModeState",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_hoodleModeState",
          "package": "hoodle-core",
          "partial": "Mode State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_hoodleModeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_hookSet",
          "package": "hoodle-core",
          "signature": "Maybe Hook",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_hookSet",
          "package": "hoodle-core",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_hookSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_isFullScreen",
          "package": "hoodle-core",
          "signature": "Bool",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_isFullScreen",
          "package": "hoodle-core",
          "partial": "Full Screen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_isFullScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_isOneTimeSelectMode",
          "package": "hoodle-core",
          "signature": "IsOneTimeSelectMode",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_isOneTimeSelectMode",
          "package": "hoodle-core",
          "partial": "One Time Select Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_isOneTimeSelectMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_isSaved",
          "package": "hoodle-core",
          "signature": "Bool",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_isSaved",
          "package": "hoodle-core",
          "partial": "Saved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_isSaved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_lastTimeCanvasConfigure",
          "package": "hoodle-core",
          "signature": "Maybe UTCTime",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_lastTimeCanvasConfigure",
          "package": "hoodle-core",
          "partial": "Time Canvas Configure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_lastTimeCanvasConfigure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_pageModeSignal",
          "package": "hoodle-core",
          "signature": "Maybe (ConnectId RadioAction)",
          "source": "src/Hoodle-Type-HoodleState.html#UIComponentSignalHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_pageModeSignal",
          "package": "hoodle-core",
          "partial": "Mode Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_pageModeSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_penColorSignal",
          "package": "hoodle-core",
          "signature": "Maybe (ConnectId RadioAction)",
          "source": "src/Hoodle-Type-HoodleState.html#UIComponentSignalHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_penColorSignal",
          "package": "hoodle-core",
          "partial": "Color Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_penColorSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_penInfo",
          "package": "hoodle-core",
          "signature": "PenInfo",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_penInfo",
          "package": "hoodle-core",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_penInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_penModeSignal",
          "package": "hoodle-core",
          "signature": "Maybe (ConnectId RadioAction)",
          "source": "src/Hoodle-Type-HoodleState.html#UIComponentSignalHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_penModeSignal",
          "package": "hoodle-core",
          "partial": "Mode Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_penModeSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_penPointSignal",
          "package": "hoodle-core",
          "signature": "Maybe (ConnectId RadioAction)",
          "source": "src/Hoodle-Type-HoodleState.html#UIComponentSignalHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_penPointSignal",
          "package": "hoodle-core",
          "partial": "Point Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_penPointSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_rootContainer",
          "package": "hoodle-core",
          "signature": "Box",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_rootContainer",
          "package": "hoodle-core",
          "partial": "Container",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_rootContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_rootOfRootWindow",
          "package": "hoodle-core",
          "signature": "Window",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_rootOfRootWindow",
          "package": "hoodle-core",
          "partial": "Of Root Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_rootOfRootWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_rootWindow",
          "package": "hoodle-core",
          "signature": "Widget",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_rootWindow",
          "package": "hoodle-core",
          "partial": "Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_rootWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_selectInfo",
          "package": "hoodle-core",
          "signature": "SelectInfo",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_selectInfo",
          "package": "hoodle-core",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_selectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_settings",
          "package": "hoodle-core",
          "signature": "Settings",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_settings",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_statusBar",
          "package": "hoodle-core",
          "signature": "Maybe Statusbar",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_statusBar",
          "package": "hoodle-core",
          "partial": "Bar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_statusBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_tempLog",
          "package": "hoodle-core",
          "signature": "String -\u003e String",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_tempLog",
          "normalized": "String-\u003eString",
          "package": "hoodle-core",
          "partial": "Log",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_tempLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_tempQueue",
          "package": "hoodle-core",
          "signature": "Queue (Either (ActionOrder AllEvent) AllEvent)",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_tempQueue",
          "package": "hoodle-core",
          "partial": "Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_tempQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_uiComponentSignalHandler",
          "package": "hoodle-core",
          "signature": "UIComponentSignalHandler",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_uiComponentSignalHandler",
          "package": "hoodle-core",
          "partial": "Component Signal Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_uiComponentSignalHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "_undoTable",
          "package": "hoodle-core",
          "signature": "UndoTable HoodleModeState",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "_undoTable",
          "package": "hoodle-core",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:_undoTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebackground style = plain, lined, ruled, graph\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "backgroundStyle",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState BackgroundStyle",
          "source": "src/Hoodle-Type-HoodleState.html#backgroundStyle",
          "type": "function"
        },
        "index": {
          "description": "background style plain lined ruled graph",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "backgroundStyle",
          "package": "hoodle-core",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:backgroundStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for callBack\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "callBack",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState (AllEvent -\u003e IO ())",
          "source": "src/Hoodle-Type-HoodleState.html#callBack",
          "type": "function"
        },
        "index": {
          "description": "lens for callBack",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "callBack",
          "normalized": "Simple Lens HoodleState(AllEvent-\u003eIO())",
          "package": "hoodle-core",
          "partial": "Back",
          "signature": "Simple Lens HoodleState(AllEvent-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:callBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for currentCanvas\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "currentCanvas",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState (CanvasId, CanvasInfoBox)",
          "source": "src/Hoodle-Type-HoodleState.html#currentCanvas",
          "type": "function"
        },
        "index": {
          "description": "lens for currentCanvas",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "currentCanvas",
          "normalized": "Simple Lens HoodleState(CanvasId,CanvasInfoBox)",
          "package": "hoodle-core",
          "partial": "Canvas",
          "signature": "Simple Lens HoodleState(CanvasId,CanvasInfoBox)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:currentCanvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "currentCanvasInfo",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState CanvasInfoBox",
          "source": "src/Hoodle-Type-HoodleState.html#currentCanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "currentCanvasInfo",
          "package": "hoodle-core",
          "partial": "Canvas Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:currentCanvasInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for currentPenDraw\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "currentPenDraw",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState PenDraw",
          "source": "src/Hoodle-Type-HoodleState.html#currentPenDraw",
          "type": "function"
        },
        "index": {
          "description": "lens for currentPenDraw",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "currentPenDraw",
          "package": "hoodle-core",
          "partial": "Pen Draw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:currentPenDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for cvsInfoMap\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "cvsInfoMap",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState CanvasInfoMap",
          "source": "src/Hoodle-Type-HoodleState.html#cvsInfoMap",
          "type": "function"
        },
        "index": {
          "description": "lens for cvsInfoMap",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "cvsInfoMap",
          "package": "hoodle-core",
          "partial": "Info Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:cvsInfoMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault settings\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "defaultSettings",
          "package": "hoodle-core",
          "signature": "Settings",
          "source": "src/Hoodle-Type-HoodleState.html#defaultSettings",
          "type": "function"
        },
        "index": {
          "description": "default settings",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "defaultSettings",
          "package": "hoodle-core",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:defaultSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "defaultUIComponentSignalHandler",
          "package": "hoodle-core",
          "signature": "UIComponentSignalHandler",
          "source": "src/Hoodle-Type-HoodleState.html#defaultUIComponentSignalHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "defaultUIComponentSignalHandler",
          "package": "hoodle-core",
          "partial": "UIComponent Signal Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:defaultUIComponentSignalHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for deviceList\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "deviceList",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState DeviceList",
          "source": "src/Hoodle-Type-HoodleState.html#deviceList",
          "type": "function"
        },
        "index": {
          "description": "lens for deviceList",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "deviceList",
          "package": "hoodle-core",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:deviceList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflag for embedding image as base64 in hdl file \n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "doesEmbedImage",
          "package": "hoodle-core",
          "signature": "Simple Lens Settings Bool",
          "source": "src/Hoodle-Type-HoodleState.html#doesEmbedImage",
          "type": "function"
        },
        "index": {
          "description": "flag for embedding image as base64 in hdl file",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "doesEmbedImage",
          "package": "hoodle-core",
          "partial": "Embed Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:doesEmbedImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflag for embedding pdf background as base64 in hdl file \n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "doesEmbedPDF",
          "package": "hoodle-core",
          "signature": "Simple Lens Settings Bool",
          "source": "src/Hoodle-Type-HoodleState.html#doesEmbedPDF",
          "type": "function"
        },
        "index": {
          "description": "flag for embedding pdf background as base64 in hdl file",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "doesEmbedPDF",
          "package": "hoodle-core",
          "partial": "Embed PDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:doesEmbedPDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflag for embedding pdf background as base64 in hdl file \n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "doesFollowLinks",
          "package": "hoodle-core",
          "signature": "Simple Lens Settings Bool",
          "source": "src/Hoodle-Type-HoodleState.html#doesFollowLinks",
          "type": "function"
        },
        "index": {
          "description": "flag for embedding pdf background as base64 in hdl file",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "doesFollowLinks",
          "package": "hoodle-core",
          "partial": "Follow Links",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:doesFollowLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflag for keeping aspect ratio\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "doesKeepAspectRatio",
          "package": "hoodle-core",
          "signature": "Simple Lens Settings Bool",
          "source": "src/Hoodle-Type-HoodleState.html#doesKeepAspectRatio",
          "type": "function"
        },
        "index": {
          "description": "flag for keeping aspect ratio",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "doesKeepAspectRatio",
          "package": "hoodle-core",
          "partial": "Keep Aspect Ratio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:doesKeepAspectRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflag for smooth scrolling \n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "doesSmoothScroll",
          "package": "hoodle-core",
          "signature": "Simple Lens Settings Bool",
          "source": "src/Hoodle-Type-HoodleState.html#doesSmoothScroll",
          "type": "function"
        },
        "index": {
          "description": "flag for smooth scrolling",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "doesSmoothScroll",
          "package": "hoodle-core",
          "partial": "Smooth Scroll",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:doesSmoothScroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflag for using popup menu\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "doesUsePopUpMenu",
          "package": "hoodle-core",
          "signature": "Simple Lens Settings Bool",
          "source": "src/Hoodle-Type-HoodleState.html#doesUsePopUpMenu",
          "type": "function"
        },
        "index": {
          "description": "flag for using popup menu",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "doesUsePopUpMenu",
          "package": "hoodle-core",
          "partial": "Use Pop Up Menu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:doesUsePopUpMenu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflag for touch\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "doesUseTouch",
          "package": "hoodle-core",
          "signature": "Simple Lens Settings Bool",
          "source": "src/Hoodle-Type-HoodleState.html#doesUseTouch",
          "type": "function"
        },
        "index": {
          "description": "flag for touch",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "doesUseTouch",
          "package": "hoodle-core",
          "partial": "Use Touch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:doesUseTouch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflag for XInput extension (needed for using full power of wacom)\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "doesUseXInput",
          "package": "hoodle-core",
          "signature": "Simple Lens Settings Bool",
          "source": "src/Hoodle-Type-HoodleState.html#doesUseXInput",
          "type": "function"
        },
        "index": {
          "description": "flag for XInput extension needed for using full power of wacom",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "doesUseXInput",
          "package": "hoodle-core",
          "partial": "Use XInput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:doesUseXInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault hoodle state \n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "emptyHoodleState",
          "package": "hoodle-core",
          "signature": "IO HoodleState",
          "source": "src/Hoodle-Type-HoodleState.html#emptyHoodleState",
          "type": "function"
        },
        "index": {
          "description": "default hoodle state",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "emptyHoodleState",
          "package": "hoodle-core",
          "partial": "Hoodle State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:emptyHoodleState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for frameState\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "frameState",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState WindowConfig",
          "source": "src/Hoodle-Type-HoodleState.html#frameState",
          "type": "function"
        },
        "index": {
          "description": "lens for frameState",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "frameState",
          "package": "hoodle-core",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:frameState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "getCanvasInfo",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e HoodleState -\u003e CanvasInfoBox",
          "source": "src/Hoodle-Type-HoodleState.html#getCanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "getCanvasInfo",
          "normalized": "CanvasId-\u003eHoodleState-\u003eCanvasInfoBox",
          "package": "hoodle-core",
          "partial": "Canvas Info",
          "signature": "CanvasId-\u003eHoodleState-\u003eCanvasInfoBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:getCanvasInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "getCanvasInfoMap",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e CanvasInfoMap",
          "source": "src/Hoodle-Type-HoodleState.html#getCanvasInfoMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "getCanvasInfoMap",
          "normalized": "HoodleState-\u003eCanvasInfoMap",
          "package": "hoodle-core",
          "partial": "Canvas Info Map",
          "signature": "HoodleState-\u003eCanvasInfoMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:getCanvasInfoMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "getCurrentCanvasId",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e CanvasId",
          "source": "src/Hoodle-Type-HoodleState.html#getCurrentCanvasId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "getCurrentCanvasId",
          "normalized": "HoodleState-\u003eCanvasId",
          "package": "hoodle-core",
          "partial": "Current Canvas Id",
          "signature": "HoodleState-\u003eCanvasId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:getCurrentCanvasId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "getCurrentPageDimFromHoodleModeState",
          "package": "hoodle-core",
          "signature": "CanvasInfo a -\u003e HoodleModeState -\u003e PageDimension",
          "source": "src/Hoodle-Type-HoodleState.html#getCurrentPageDimFromHoodleModeState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "getCurrentPageDimFromHoodleModeState",
          "normalized": "CanvasInfo a-\u003eHoodleModeState-\u003ePageDimension",
          "package": "hoodle-core",
          "partial": "Current Page Dim From Hoodle Mode State",
          "signature": "CanvasInfo a-\u003eHoodleModeState-\u003ePageDimension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:getCurrentPageDimFromHoodleModeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "getCurrentPageFromHoodleModeState",
          "package": "hoodle-core",
          "signature": "CanvasInfo a -\u003e HoodleModeState -\u003e Page EditMode",
          "source": "src/Hoodle-Type-HoodleState.html#getCurrentPageFromHoodleModeState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "getCurrentPageFromHoodleModeState",
          "normalized": "CanvasInfo a-\u003eHoodleModeState-\u003ePage EditMode",
          "package": "hoodle-core",
          "partial": "Current Page From Hoodle Mode State",
          "signature": "CanvasInfo a-\u003eHoodleModeState-\u003ePage EditMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:getCurrentPageFromHoodleModeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "getHoodle",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e Hoodle EditMode",
          "source": "src/Hoodle-Type-HoodleState.html#getHoodle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "getHoodle",
          "normalized": "HoodleState-\u003eHoodle EditMode",
          "package": "hoodle-core",
          "partial": "Hoodle",
          "signature": "HoodleState-\u003eHoodle EditMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:getHoodle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for gtkUIManager\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "gtkUIManager",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState UIManager",
          "source": "src/Hoodle-Type-HoodleState.html#gtkUIManager",
          "type": "function"
        },
        "index": {
          "description": "lens for gtkUIManager",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "gtkUIManager",
          "package": "hoodle-core",
          "partial": "UIManager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:gtkUIManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "hoodleFileControl",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState HoodleFileControl",
          "source": "src/Hoodle-Type-HoodleState.html#hoodleFileControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "hoodleFileControl",
          "package": "hoodle-core",
          "partial": "File Control",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:hoodleFileControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for currFileName\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "hoodleFileName",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleFileControl (Maybe FilePath)",
          "source": "src/Hoodle-Type-HoodleState.html#hoodleFileName",
          "type": "function"
        },
        "index": {
          "description": "lens for currFileName",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "hoodleFileName",
          "package": "hoodle-core",
          "partial": "File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:hoodleFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for hoodleModeState\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "hoodleModeState",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState HoodleModeState",
          "source": "src/Hoodle-Type-HoodleState.html#hoodleModeState",
          "type": "function"
        },
        "index": {
          "description": "lens for hoodleModeState",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "hoodleModeState",
          "package": "hoodle-core",
          "partial": "Mode State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:hoodleModeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "hoodleModeStateEither",
          "package": "hoodle-core",
          "signature": "HoodleModeState -\u003e Either (Hoodle EditMode) (Hoodle SelectMode)",
          "source": "src/Hoodle-Type-HoodleState.html#hoodleModeStateEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "hoodleModeStateEither",
          "normalized": "HoodleModeState-\u003eEither(Hoodle EditMode)(Hoodle SelectMode)",
          "package": "hoodle-core",
          "partial": "Mode State Either",
          "signature": "HoodleModeState-\u003eEither(Hoodle EditMode)(Hoodle SelectMode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:hoodleModeStateEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for hookSet\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "hookSet",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState (Maybe Hook)",
          "source": "src/Hoodle-Type-HoodleState.html#hookSet",
          "type": "function"
        },
        "index": {
          "description": "lens for hookSet",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "hookSet",
          "package": "hoodle-core",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:hookSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for isFullScreen\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "isFullScreen",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState Bool",
          "source": "src/Hoodle-Type-HoodleState.html#isFullScreen",
          "type": "function"
        },
        "index": {
          "description": "lens for isFullScreen",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "isFullScreen",
          "package": "hoodle-core",
          "partial": "Full Screen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:isFullScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for isOneTimeSelectMode\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "isOneTimeSelectMode",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState IsOneTimeSelectMode",
          "source": "src/Hoodle-Type-HoodleState.html#isOneTimeSelectMode",
          "type": "function"
        },
        "index": {
          "description": "lens for isOneTimeSelectMode",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "isOneTimeSelectMode",
          "package": "hoodle-core",
          "partial": "One Time Select Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:isOneTimeSelectMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for isSaved\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "isSaved",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState Bool",
          "source": "src/Hoodle-Type-HoodleState.html#isSaved",
          "type": "function"
        },
        "index": {
          "description": "lens for isSaved",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "isSaved",
          "package": "hoodle-core",
          "partial": "Saved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:isSaved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for last saved time\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "lastSavedTime",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleFileControl (Maybe UTCTime)",
          "source": "src/Hoodle-Type-HoodleState.html#lastSavedTime",
          "type": "function"
        },
        "index": {
          "description": "lens for last saved time",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "lastSavedTime",
          "package": "hoodle-core",
          "partial": "Saved Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:lastSavedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for lastTimeCanvasConfigure\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "lastTimeCanvasConfigure",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState (Maybe UTCTime)",
          "source": "src/Hoodle-Type-HoodleState.html#lastTimeCanvasConfigure",
          "type": "function"
        },
        "index": {
          "description": "lens for lastTimeCanvasConfigure",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "lastTimeCanvasConfigure",
          "package": "hoodle-core",
          "partial": "Time Canvas Configure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:lastTimeCanvasConfigure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "modifyCanvasInfo",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e (CanvasInfoBox -\u003e CanvasInfoBox) -\u003e HoodleState -\u003e HoodleState",
          "source": "src/Hoodle-Type-HoodleState.html#modifyCanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "modifyCanvasInfo",
          "normalized": "CanvasId-\u003e(CanvasInfoBox-\u003eCanvasInfoBox)-\u003eHoodleState-\u003eHoodleState",
          "package": "hoodle-core",
          "partial": "Canvas Info",
          "signature": "CanvasId-\u003e(CanvasInfoBox-\u003eCanvasInfoBox)-\u003eHoodleState-\u003eHoodleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:modifyCanvasInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for pageModeSignal\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "pageModeSignal",
          "package": "hoodle-core",
          "signature": "Simple Lens UIComponentSignalHandler (Maybe (ConnectId RadioAction))",
          "source": "src/Hoodle-Type-HoodleState.html#pageModeSignal",
          "type": "function"
        },
        "index": {
          "description": "lens for pageModeSignal",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "pageModeSignal",
          "package": "hoodle-core",
          "partial": "Mode Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:pageModeSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for penColorSignal\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "penColorSignal",
          "package": "hoodle-core",
          "signature": "Simple Lens UIComponentSignalHandler (Maybe (ConnectId RadioAction))",
          "source": "src/Hoodle-Type-HoodleState.html#penColorSignal",
          "type": "function"
        },
        "index": {
          "description": "lens for penColorSignal",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "penColorSignal",
          "package": "hoodle-core",
          "partial": "Color Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:penColorSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for penInfo\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "penInfo",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState PenInfo",
          "source": "src/Hoodle-Type-HoodleState.html#penInfo",
          "type": "function"
        },
        "index": {
          "description": "lens for penInfo",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "penInfo",
          "package": "hoodle-core",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:penInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for penModeSignal\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "penModeSignal",
          "package": "hoodle-core",
          "signature": "Simple Lens UIComponentSignalHandler (Maybe (ConnectId RadioAction))",
          "source": "src/Hoodle-Type-HoodleState.html#penModeSignal",
          "type": "function"
        },
        "index": {
          "description": "lens for penModeSignal",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "penModeSignal",
          "package": "hoodle-core",
          "partial": "Mode Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:penModeSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for penPointSignal\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "penPointSignal",
          "package": "hoodle-core",
          "signature": "Simple Lens UIComponentSignalHandler (Maybe (ConnectId RadioAction))",
          "source": "src/Hoodle-Type-HoodleState.html#penPointSignal",
          "type": "function"
        },
        "index": {
          "description": "lens for penPointSignal",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "penPointSignal",
          "package": "hoodle-core",
          "partial": "Point Signal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:penPointSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "resetHoodleModeStateBuffers",
          "package": "hoodle-core",
          "signature": "HoodleModeState -\u003e IO HoodleModeState",
          "source": "src/Hoodle-Type-HoodleState.html#resetHoodleModeStateBuffers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "resetHoodleModeStateBuffers",
          "normalized": "HoodleModeState-\u003eIO HoodleModeState",
          "package": "hoodle-core",
          "partial": "Hoodle Mode State Buffers",
          "signature": "HoodleModeState-\u003eIO HoodleModeState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:resetHoodleModeStateBuffers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for rootContainer\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "rootContainer",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState Box",
          "source": "src/Hoodle-Type-HoodleState.html#rootContainer",
          "type": "function"
        },
        "index": {
          "description": "lens for rootContainer",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "rootContainer",
          "package": "hoodle-core",
          "partial": "Container",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:rootContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for rootOfRootWindow\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "rootOfRootWindow",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState Window",
          "source": "src/Hoodle-Type-HoodleState.html#rootOfRootWindow",
          "type": "function"
        },
        "index": {
          "description": "lens for rootOfRootWindow",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "rootOfRootWindow",
          "package": "hoodle-core",
          "partial": "Of Root Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:rootOfRootWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for rootWindow\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "rootWindow",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState Widget",
          "source": "src/Hoodle-Type-HoodleState.html#rootWindow",
          "type": "function"
        },
        "index": {
          "description": "lens for rootWindow",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "rootWindow",
          "package": "hoodle-core",
          "partial": "Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:rootWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for selectInfo\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "selectInfo",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState SelectInfo",
          "source": "src/Hoodle-Type-HoodleState.html#selectInfo",
          "type": "function"
        },
        "index": {
          "description": "lens for selectInfo",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "selectInfo",
          "package": "hoodle-core",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:selectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "setCanvasId",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e CanvasInfoBox -\u003e CanvasInfoBox",
          "source": "src/Hoodle-Type-HoodleState.html#setCanvasId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "setCanvasId",
          "normalized": "CanvasId-\u003eCanvasInfoBox-\u003eCanvasInfoBox",
          "package": "hoodle-core",
          "partial": "Canvas Id",
          "signature": "CanvasId-\u003eCanvasInfoBox-\u003eCanvasInfoBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:setCanvasId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "setCanvasInfo",
          "package": "hoodle-core",
          "signature": "(CanvasId, CanvasInfoBox) -\u003e HoodleState -\u003e HoodleState",
          "source": "src/Hoodle-Type-HoodleState.html#setCanvasInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "setCanvasInfo",
          "normalized": "(CanvasId,CanvasInfoBox)-\u003eHoodleState-\u003eHoodleState",
          "package": "hoodle-core",
          "partial": "Canvas Info",
          "signature": "(CanvasId,CanvasInfoBox)-\u003eHoodleState-\u003eHoodleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:setCanvasInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "setCanvasInfoMap",
          "package": "hoodle-core",
          "signature": "CanvasInfoMap -\u003e HoodleState -\u003e Maybe HoodleState",
          "source": "src/Hoodle-Type-HoodleState.html#setCanvasInfoMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "setCanvasInfoMap",
          "normalized": "CanvasInfoMap-\u003eHoodleState-\u003eMaybe HoodleState",
          "package": "hoodle-core",
          "partial": "Canvas Info Map",
          "signature": "CanvasInfoMap-\u003eHoodleState-\u003eMaybe HoodleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:setCanvasInfoMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "setCurrentCanvasId",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e HoodleState -\u003e Maybe HoodleState",
          "source": "src/Hoodle-Type-HoodleState.html#setCurrentCanvasId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "setCurrentCanvasId",
          "normalized": "CanvasId-\u003eHoodleState-\u003eMaybe HoodleState",
          "package": "hoodle-core",
          "partial": "Current Canvas Id",
          "signature": "CanvasId-\u003eHoodleState-\u003eMaybe HoodleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:setCurrentCanvasId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "settings",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState Settings",
          "source": "src/Hoodle-Type-HoodleState.html#settings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "settings",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "showCanvasInfoMapViewPortBBox",
          "package": "hoodle-core",
          "signature": "HoodleState -\u003e IO ()",
          "source": "src/Hoodle-Type-HoodleState.html#showCanvasInfoMapViewPortBBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "showCanvasInfoMapViewPortBBox",
          "normalized": "HoodleState-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Canvas Info Map View Port BBox",
          "signature": "HoodleState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:showCanvasInfoMapViewPortBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "statusBar",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState (Maybe Statusbar)",
          "source": "src/Hoodle-Type-HoodleState.html#statusBar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "statusBar",
          "package": "hoodle-core",
          "partial": "Bar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:statusBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for tempLog\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "tempLog",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState (String -\u003e String)",
          "source": "src/Hoodle-Type-HoodleState.html#tempLog",
          "type": "function"
        },
        "index": {
          "description": "lens for tempLog",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "tempLog",
          "normalized": "Simple Lens HoodleState(String-\u003eString)",
          "package": "hoodle-core",
          "partial": "Log",
          "signature": "Simple Lens HoodleState(String-\u003eString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:tempLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for tempQueue\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "tempQueue",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState (Queue (Either (ActionOrder AllEvent) AllEvent))",
          "source": "src/Hoodle-Type-HoodleState.html#tempQueue",
          "type": "function"
        },
        "index": {
          "description": "lens for tempQueue",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "tempQueue",
          "package": "hoodle-core",
          "partial": "Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:tempQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "tempSelect",
          "package": "hoodle-core",
          "signature": "HHoodle",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleModeState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "tempSelect",
          "package": "hoodle-core",
          "partial": "Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:tempSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "uiComponentSignalHandler",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState UIComponentSignalHandler",
          "source": "src/Hoodle-Type-HoodleState.html#uiComponentSignalHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "uiComponentSignalHandler",
          "package": "hoodle-core",
          "partial": "Component Signal Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:uiComponentSignalHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.HoodleState",
          "name": "unView",
          "package": "hoodle-core",
          "signature": "RHoodle",
          "source": "src/Hoodle-Type-HoodleState.html#HoodleModeState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "unView",
          "package": "hoodle-core",
          "partial": "View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:unView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elens for undoTable\n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "undoTable",
          "package": "hoodle-core",
          "signature": "Simple Lens HoodleState (UndoTable HoodleModeState)",
          "source": "src/Hoodle-Type-HoodleState.html#undoTable",
          "type": "function"
        },
        "index": {
          "description": "lens for undoTable",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "undoTable",
          "package": "hoodle-core",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:undoTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echange current canvas. this is the master function  \n\u003c/p\u003e",
          "module": "Hoodle.Type.HoodleState",
          "name": "updateFromCanvasInfoAsCurrentCanvas",
          "package": "hoodle-core",
          "signature": "CanvasInfoBox -\u003e HoodleState -\u003e HoodleState",
          "source": "src/Hoodle-Type-HoodleState.html#updateFromCanvasInfoAsCurrentCanvas",
          "type": "function"
        },
        "index": {
          "description": "change current canvas this is the master function",
          "hierarchy": "Hoodle Type HoodleState",
          "module": "Hoodle.Type.HoodleState",
          "name": "updateFromCanvasInfoAsCurrentCanvas",
          "normalized": "CanvasInfoBox-\u003eHoodleState-\u003eHoodleState",
          "package": "hoodle-core",
          "partial": "From Canvas Info As Current Canvas",
          "signature": "CanvasInfoBox-\u003eHoodleState-\u003eHoodleState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-HoodleState.html#v:updateFromCanvasInfoAsCurrentCanvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageArrangement",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageArrangement",
          "package": "hoodle-core",
          "partial": "Page Arrangement",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "CanvasCoordinate",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html#CanvasCoordinate",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "CanvasCoordinate",
          "package": "hoodle-core",
          "partial": "Canvas Coordinate",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#t:CanvasCoordinate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "CanvasDimension",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html#CanvasDimension",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "CanvasDimension",
          "package": "hoodle-core",
          "partial": "Canvas Dimension",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#t:CanvasDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "CanvasOrigin",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html#CanvasOrigin",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "CanvasOrigin",
          "package": "hoodle-core",
          "partial": "Canvas Origin",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#t:CanvasOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "DesktopConstraint",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html#DesktopConstraint",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "DesktopConstraint",
          "package": "hoodle-core",
          "partial": "Desktop Constraint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#t:DesktopConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "DesktopCoordinate",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html#DesktopCoordinate",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "DesktopCoordinate",
          "package": "hoodle-core",
          "partial": "Desktop Coordinate",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#t:DesktopCoordinate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "DesktopDimension",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html#DesktopDimension",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "DesktopDimension",
          "package": "hoodle-core",
          "partial": "Desktop Dimension",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#t:DesktopDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edata structure for coordinate arrangement of pages in desktop coordinate\n\u003c/p\u003e",
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageArrangement",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html#PageArrangement",
          "type": "data"
        },
        "index": {
          "description": "data structure for coordinate arrangement of pages in desktop coordinate",
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageArrangement",
          "package": "hoodle-core",
          "partial": "Page Arrangement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#t:PageArrangement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageCoordinate",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html#PageCoordinate",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageCoordinate",
          "package": "hoodle-core",
          "partial": "Page Coordinate",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#t:PageCoordinate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageDimension",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html#PageDimension",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageDimension",
          "package": "hoodle-core",
          "partial": "Page Dimension",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#t:PageDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageNum",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html#PageNum",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageNum",
          "package": "hoodle-core",
          "partial": "Page Num",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#t:PageNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageOrigin",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html#PageOrigin",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageOrigin",
          "package": "hoodle-core",
          "partial": "Page Origin",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#t:PageOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "ScreenCoordinate",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html#ScreenCoordinate",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "ScreenCoordinate",
          "package": "hoodle-core",
          "partial": "Screen Coordinate",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#t:ScreenCoordinate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "ScreenDimension",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html#ScreenDimension",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "ScreenDimension",
          "package": "hoodle-core",
          "partial": "Screen Dimension",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#t:ScreenDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esupported view modes\n\u003c/p\u003e",
          "module": "Hoodle.Type.PageArrangement",
          "name": "ViewMode",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html#ViewMode",
          "type": "data"
        },
        "index": {
          "description": "supported view modes",
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "ViewMode",
          "package": "hoodle-core",
          "partial": "View Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#t:ViewMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "ViewPortBBox",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html#ViewPortBBox",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "ViewPortBBox",
          "package": "hoodle-core",
          "partial": "View Port BBox",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#t:ViewPortBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esupported zoom modes\n\u003c/p\u003e",
          "module": "Hoodle.Type.PageArrangement",
          "name": "ZoomMode",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-PageArrangement.html#ZoomMode",
          "type": "data"
        },
        "index": {
          "description": "supported zoom modes",
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "ZoomMode",
          "package": "hoodle-core",
          "partial": "Zoom Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#t:ZoomMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "CanvasDimension",
          "package": "hoodle-core",
          "signature": "CanvasDimension",
          "source": "src/Hoodle-Type-PageArrangement.html#CanvasDimension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "CanvasDimension",
          "package": "hoodle-core",
          "partial": "Canvas Dimension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:CanvasDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "CanvasOrigin",
          "package": "hoodle-core",
          "signature": "CanvasOrigin",
          "source": "src/Hoodle-Type-PageArrangement.html#CanvasOrigin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "CanvasOrigin",
          "package": "hoodle-core",
          "partial": "Canvas Origin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:CanvasOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "ContinuousArrangement",
          "package": "hoodle-core",
          "signature": "CanvasDimension -\u003e DesktopDimension -\u003e (PageNum -\u003e Maybe (PageOrigin, PageDimension)) -\u003e ViewPortBBox -\u003e PageArrangement ContinuousPage",
          "source": "src/Hoodle-Type-PageArrangement.html#PageArrangement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "ContinuousArrangement",
          "normalized": "CanvasDimension-\u003eDesktopDimension-\u003e(PageNum-\u003eMaybe(PageOrigin,PageDimension))-\u003eViewPortBBox-\u003ePageArrangement ContinuousPage",
          "package": "hoodle-core",
          "partial": "Continuous Arrangement",
          "signature": "CanvasDimension-\u003eDesktopDimension-\u003e(PageNum-\u003eMaybe(PageOrigin,PageDimension))-\u003eViewPortBBox-\u003ePageArrangement ContinuousPage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:ContinuousArrangement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "ContinuousPage",
          "package": "hoodle-core",
          "signature": "ContinuousPage",
          "source": "src/Hoodle-Type-PageArrangement.html#ViewMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "ContinuousPage",
          "package": "hoodle-core",
          "partial": "Continuous Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:ContinuousPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "CvsCoord",
          "package": "hoodle-core",
          "signature": "CvsCoord",
          "source": "src/Hoodle-Type-PageArrangement.html#CanvasCoordinate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "CvsCoord",
          "package": "hoodle-core",
          "partial": "Cvs Coord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:CvsCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "DeskCoord",
          "package": "hoodle-core",
          "signature": "DeskCoord",
          "source": "src/Hoodle-Type-PageArrangement.html#DesktopCoordinate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "DeskCoord",
          "package": "hoodle-core",
          "partial": "Desk Coord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:DeskCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "DesktopDimension",
          "package": "hoodle-core",
          "signature": "DesktopDimension",
          "source": "src/Hoodle-Type-PageArrangement.html#DesktopDimension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "DesktopDimension",
          "package": "hoodle-core",
          "partial": "Desktop Dimension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:DesktopDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "DesktopWidthConstrained",
          "package": "hoodle-core",
          "signature": "DesktopWidthConstrained Double",
          "source": "src/Hoodle-Type-PageArrangement.html#DesktopConstraint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "DesktopWidthConstrained",
          "package": "hoodle-core",
          "partial": "Desktop Width Constrained",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:DesktopWidthConstrained"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "FitHeight",
          "package": "hoodle-core",
          "signature": "FitHeight",
          "source": "src/Hoodle-Type-PageArrangement.html#ZoomMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "FitHeight",
          "package": "hoodle-core",
          "partial": "Fit Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:FitHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "FitWidth",
          "package": "hoodle-core",
          "signature": "FitWidth",
          "source": "src/Hoodle-Type-PageArrangement.html#ZoomMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "FitWidth",
          "package": "hoodle-core",
          "partial": "Fit Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:FitWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "Original",
          "package": "hoodle-core",
          "signature": "Original",
          "source": "src/Hoodle-Type-PageArrangement.html#ZoomMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "Original",
          "package": "hoodle-core",
          "partial": "Original",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:Original"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageCoord",
          "package": "hoodle-core",
          "signature": "PageCoord",
          "source": "src/Hoodle-Type-PageArrangement.html#PageCoordinate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageCoord",
          "package": "hoodle-core",
          "partial": "Page Coord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:PageCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageDimension",
          "package": "hoodle-core",
          "signature": "PageDimension",
          "source": "src/Hoodle-Type-PageArrangement.html#PageDimension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageDimension",
          "package": "hoodle-core",
          "partial": "Page Dimension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:PageDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageNum",
          "package": "hoodle-core",
          "signature": "PageNum",
          "source": "src/Hoodle-Type-PageArrangement.html#PageNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageNum",
          "package": "hoodle-core",
          "partial": "Page Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:PageNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageOrigin",
          "package": "hoodle-core",
          "signature": "PageOrigin",
          "source": "src/Hoodle-Type-PageArrangement.html#PageOrigin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "PageOrigin",
          "package": "hoodle-core",
          "partial": "Page Origin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:PageOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "ScrCoord",
          "package": "hoodle-core",
          "signature": "ScrCoord",
          "source": "src/Hoodle-Type-PageArrangement.html#ScreenCoordinate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "ScrCoord",
          "package": "hoodle-core",
          "partial": "Scr Coord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:ScrCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "ScreenDimension",
          "package": "hoodle-core",
          "signature": "ScreenDimension",
          "source": "src/Hoodle-Type-PageArrangement.html#ScreenDimension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "ScreenDimension",
          "package": "hoodle-core",
          "partial": "Screen Dimension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:ScreenDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "SingleArrangement",
          "package": "hoodle-core",
          "signature": "CanvasDimension -\u003e PageDimension -\u003e ViewPortBBox -\u003e PageArrangement SinglePage",
          "source": "src/Hoodle-Type-PageArrangement.html#PageArrangement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "SingleArrangement",
          "normalized": "CanvasDimension-\u003ePageDimension-\u003eViewPortBBox-\u003ePageArrangement SinglePage",
          "package": "hoodle-core",
          "partial": "Single Arrangement",
          "signature": "CanvasDimension-\u003ePageDimension-\u003eViewPortBBox-\u003ePageArrangement SinglePage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:SingleArrangement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "SinglePage",
          "package": "hoodle-core",
          "signature": "SinglePage",
          "source": "src/Hoodle-Type-PageArrangement.html#ViewMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "SinglePage",
          "package": "hoodle-core",
          "partial": "Single Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:SinglePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "ViewPortBBox",
          "package": "hoodle-core",
          "signature": "ViewPortBBox",
          "source": "src/Hoodle-Type-PageArrangement.html#ViewPortBBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "ViewPortBBox",
          "package": "hoodle-core",
          "partial": "View Port BBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:ViewPortBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "Zoom",
          "package": "hoodle-core",
          "signature": "Zoom Double",
          "source": "src/Hoodle-Type-PageArrangement.html#ZoomMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "Zoom",
          "package": "hoodle-core",
          "partial": "Zoom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:Zoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "apply",
          "package": "hoodle-core",
          "signature": "(BBox -\u003e BBox) -\u003e ViewPortBBox -\u003e ViewPortBBox",
          "source": "src/Hoodle-Type-PageArrangement.html#apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "apply",
          "normalized": "(BBox-\u003eBBox)-\u003eViewPortBBox-\u003eViewPortBBox",
          "package": "hoodle-core",
          "signature": "(BBox-\u003eBBox)-\u003eViewPortBBox-\u003eViewPortBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "canvasDimension",
          "package": "hoodle-core",
          "signature": "Simple Lens (PageArrangement a) CanvasDimension",
          "source": "src/Hoodle-Type-PageArrangement.html#canvasDimension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "canvasDimension",
          "package": "hoodle-core",
          "partial": "Dimension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:canvasDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "deskDimCont",
          "package": "hoodle-core",
          "signature": "DesktopConstraint -\u003e Hoodle EditMode -\u003e DesktopDimension",
          "source": "src/Hoodle-Type-PageArrangement.html#deskDimCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "deskDimCont",
          "normalized": "DesktopConstraint-\u003eHoodle EditMode-\u003eDesktopDimension",
          "package": "hoodle-core",
          "partial": "Dim Cont",
          "signature": "DesktopConstraint-\u003eHoodle EditMode-\u003eDesktopDimension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:deskDimCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "desktopDimension",
          "package": "hoodle-core",
          "signature": "Simple Lens (PageArrangement a) DesktopDimension",
          "source": "src/Hoodle-Type-PageArrangement.html#desktopDimension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "desktopDimension",
          "package": "hoodle-core",
          "partial": "Dimension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:desktopDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "getRatioPageCanvas",
          "package": "hoodle-core",
          "signature": "ZoomMode -\u003e PageDimension -\u003e CanvasDimension -\u003e (Double, Double)",
          "source": "src/Hoodle-Type-PageArrangement.html#getRatioPageCanvas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "getRatioPageCanvas",
          "normalized": "ZoomMode-\u003ePageDimension-\u003eCanvasDimension-\u003e(Double,Double)",
          "package": "hoodle-core",
          "partial": "Ratio Page Canvas",
          "signature": "ZoomMode-\u003ePageDimension-\u003eCanvasDimension-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:getRatioPageCanvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "makeContinuousArrangement",
          "package": "hoodle-core",
          "signature": "ZoomMode -\u003e CanvasDimension -\u003e Hoodle EditMode -\u003e (PageNum, PageCoordinate) -\u003e PageArrangement ContinuousPage",
          "source": "src/Hoodle-Type-PageArrangement.html#makeContinuousArrangement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "makeContinuousArrangement",
          "normalized": "ZoomMode-\u003eCanvasDimension-\u003eHoodle EditMode-\u003e(PageNum,PageCoordinate)-\u003ePageArrangement ContinuousPage",
          "package": "hoodle-core",
          "partial": "Continuous Arrangement",
          "signature": "ZoomMode-\u003eCanvasDimension-\u003eHoodle EditMode-\u003e(PageNum,PageCoordinate)-\u003ePageArrangement ContinuousPage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:makeContinuousArrangement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "makeSingleArrangement",
          "package": "hoodle-core",
          "signature": "ZoomMode -\u003e PageDimension -\u003e CanvasDimension -\u003e (Double, Double) -\u003e PageArrangement SinglePage",
          "source": "src/Hoodle-Type-PageArrangement.html#makeSingleArrangement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "makeSingleArrangement",
          "normalized": "ZoomMode-\u003ePageDimension-\u003eCanvasDimension-\u003e(Double,Double)-\u003ePageArrangement SinglePage",
          "package": "hoodle-core",
          "partial": "Single Arrangement",
          "signature": "ZoomMode-\u003ePageDimension-\u003eCanvasDimension-\u003e(Double,Double)-\u003ePageArrangement SinglePage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:makeSingleArrangement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "pageArrFuncCont",
          "package": "hoodle-core",
          "signature": "DesktopConstraint -\u003e Hoodle EditMode -\u003e PageNum -\u003e Maybe (PageOrigin, PageDimension)",
          "source": "src/Hoodle-Type-PageArrangement.html#pageArrFuncCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "pageArrFuncCont",
          "normalized": "DesktopConstraint-\u003eHoodle EditMode-\u003ePageNum-\u003eMaybe(PageOrigin,PageDimension)",
          "package": "hoodle-core",
          "partial": "Arr Func Cont",
          "signature": "DesktopConstraint-\u003eHoodle EditMode-\u003ePageNum-\u003eMaybe(PageOrigin,PageDimension)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:pageArrFuncCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "pageDimension",
          "package": "hoodle-core",
          "signature": "Simple Lens (PageArrangement SinglePage) PageDimension",
          "source": "src/Hoodle-Type-PageArrangement.html#pageDimension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "pageDimension",
          "package": "hoodle-core",
          "partial": "Dimension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:pageDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "unCanvasDimension",
          "package": "hoodle-core",
          "signature": "Dimension",
          "source": "src/Hoodle-Type-PageArrangement.html#CanvasDimension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "unCanvasDimension",
          "package": "hoodle-core",
          "partial": "Canvas Dimension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:unCanvasDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "unCanvasOrigin",
          "package": "hoodle-core",
          "signature": "(Double, Double)",
          "source": "src/Hoodle-Type-PageArrangement.html#CanvasOrigin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "unCanvasOrigin",
          "normalized": "(Double,Double)",
          "package": "hoodle-core",
          "partial": "Canvas Origin",
          "signature": "(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:unCanvasOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "unCvsCoord",
          "package": "hoodle-core",
          "signature": "(Double, Double)",
          "source": "src/Hoodle-Type-PageArrangement.html#CanvasCoordinate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "unCvsCoord",
          "normalized": "(Double,Double)",
          "package": "hoodle-core",
          "partial": "Cvs Coord",
          "signature": "(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:unCvsCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "unDeskCoord",
          "package": "hoodle-core",
          "signature": "(Double, Double)",
          "source": "src/Hoodle-Type-PageArrangement.html#DesktopCoordinate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "unDeskCoord",
          "normalized": "(Double,Double)",
          "package": "hoodle-core",
          "partial": "Desk Coord",
          "signature": "(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:unDeskCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "unDesktopDimension",
          "package": "hoodle-core",
          "signature": "Dimension",
          "source": "src/Hoodle-Type-PageArrangement.html#DesktopDimension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "unDesktopDimension",
          "package": "hoodle-core",
          "partial": "Desktop Dimension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:unDesktopDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "unPageCoord",
          "package": "hoodle-core",
          "signature": "(Double, Double)",
          "source": "src/Hoodle-Type-PageArrangement.html#PageCoordinate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "unPageCoord",
          "normalized": "(Double,Double)",
          "package": "hoodle-core",
          "partial": "Page Coord",
          "signature": "(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:unPageCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "unPageDimension",
          "package": "hoodle-core",
          "signature": "Dimension",
          "source": "src/Hoodle-Type-PageArrangement.html#PageDimension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "unPageDimension",
          "package": "hoodle-core",
          "partial": "Page Dimension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:unPageDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "unPageNum",
          "package": "hoodle-core",
          "signature": "Int",
          "source": "src/Hoodle-Type-PageArrangement.html#PageNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "unPageNum",
          "package": "hoodle-core",
          "partial": "Page Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:unPageNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "unPageOrigin",
          "package": "hoodle-core",
          "signature": "(Double, Double)",
          "source": "src/Hoodle-Type-PageArrangement.html#PageOrigin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "unPageOrigin",
          "normalized": "(Double,Double)",
          "package": "hoodle-core",
          "partial": "Page Origin",
          "signature": "(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:unPageOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "unScrCoord",
          "package": "hoodle-core",
          "signature": "(Double, Double)",
          "source": "src/Hoodle-Type-PageArrangement.html#ScreenCoordinate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "unScrCoord",
          "normalized": "(Double,Double)",
          "package": "hoodle-core",
          "partial": "Scr Coord",
          "signature": "(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:unScrCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "unScreenDimension",
          "package": "hoodle-core",
          "signature": "Dimension",
          "source": "src/Hoodle-Type-PageArrangement.html#ScreenDimension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "unScreenDimension",
          "package": "hoodle-core",
          "partial": "Screen Dimension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:unScreenDimension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "unViewPortBBox",
          "package": "hoodle-core",
          "signature": "BBox",
          "source": "src/Hoodle-Type-PageArrangement.html#ViewPortBBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "unViewPortBBox",
          "package": "hoodle-core",
          "partial": "View Port BBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:unViewPortBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "viewPortBBox",
          "package": "hoodle-core",
          "signature": "Simple Lens (PageArrangement a) ViewPortBBox",
          "source": "src/Hoodle-Type-PageArrangement.html#viewPortBBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "viewPortBBox",
          "package": "hoodle-core",
          "partial": "Port BBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:viewPortBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.PageArrangement",
          "name": "xformViewPortFitInSize",
          "package": "hoodle-core",
          "signature": "Dimension -\u003e (BBox -\u003e BBox) -\u003e ViewPortBBox -\u003e ViewPortBBox",
          "source": "src/Hoodle-Type-PageArrangement.html#xformViewPortFitInSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type PageArrangement",
          "module": "Hoodle.Type.PageArrangement",
          "name": "xformViewPortFitInSize",
          "normalized": "Dimension-\u003e(BBox-\u003eBBox)-\u003eViewPortBBox-\u003eViewPortBBox",
          "package": "hoodle-core",
          "partial": "View Port Fit In Size",
          "signature": "Dimension-\u003e(BBox-\u003eBBox)-\u003eViewPortBBox-\u003eViewPortBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-PageArrangement.html#v:xformViewPortFitInSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Predefined",
          "name": "Predefined",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Predefined.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Type Predefined",
          "module": "Hoodle.Type.Predefined",
          "name": "Predefined",
          "package": "hoodle-core",
          "partial": "Predefined",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Predefined.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Predefined",
          "name": "dtime_bound",
          "package": "hoodle-core",
          "signature": "NominalDiffTime",
          "source": "src/Hoodle-Type-Predefined.html#dtime_bound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Predefined",
          "module": "Hoodle.Type.Predefined",
          "name": "dtime_bound",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Predefined.html#v:dtime_bound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Predefined",
          "name": "millisec",
          "package": "hoodle-core",
          "signature": "Integer",
          "source": "src/Hoodle-Type-Predefined.html#millisec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Predefined",
          "module": "Hoodle.Type.Predefined",
          "name": "millisec",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Predefined.html#v:millisec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Predefined",
          "name": "predefinedLassoColor",
          "package": "hoodle-core",
          "signature": "(Double, Double, Double, Double)",
          "source": "src/Hoodle-Type-Predefined.html#predefinedLassoColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Predefined",
          "module": "Hoodle.Type.Predefined",
          "name": "predefinedLassoColor",
          "normalized": "(Double,Double,Double,Double)",
          "package": "hoodle-core",
          "partial": "Lasso Color",
          "signature": "(Double,Double,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Predefined.html#v:predefinedLassoColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Predefined",
          "name": "predefinedLassoDash",
          "package": "hoodle-core",
          "signature": "([Double], Double)",
          "source": "src/Hoodle-Type-Predefined.html#predefinedLassoDash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Predefined",
          "module": "Hoodle.Type.Predefined",
          "name": "predefinedLassoDash",
          "normalized": "([Double],Double)",
          "package": "hoodle-core",
          "partial": "Lasso Dash",
          "signature": "([Double],Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Predefined.html#v:predefinedLassoDash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Predefined",
          "name": "predefinedLassoHandleSize",
          "package": "hoodle-core",
          "signature": "Double",
          "source": "src/Hoodle-Type-Predefined.html#predefinedLassoHandleSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Predefined",
          "module": "Hoodle.Type.Predefined",
          "name": "predefinedLassoHandleSize",
          "package": "hoodle-core",
          "partial": "Lasso Handle Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Predefined.html#v:predefinedLassoHandleSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Predefined",
          "name": "predefinedLassoWidth",
          "package": "hoodle-core",
          "signature": "Double",
          "source": "src/Hoodle-Type-Predefined.html#predefinedLassoWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Predefined",
          "module": "Hoodle.Type.Predefined",
          "name": "predefinedLassoWidth",
          "package": "hoodle-core",
          "partial": "Lasso Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Predefined.html#v:predefinedLassoWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Predefined",
          "name": "predefinedPageSpacing",
          "package": "hoodle-core",
          "signature": "Double",
          "source": "src/Hoodle-Type-Predefined.html#predefinedPageSpacing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Predefined",
          "module": "Hoodle.Type.Predefined",
          "name": "predefinedPageSpacing",
          "package": "hoodle-core",
          "partial": "Page Spacing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Predefined.html#v:predefinedPageSpacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Predefined",
          "name": "predefinedWinReconfTimeBound",
          "package": "hoodle-core",
          "signature": "NominalDiffTime",
          "source": "src/Hoodle-Type-Predefined.html#predefinedWinReconfTimeBound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Predefined",
          "module": "Hoodle.Type.Predefined",
          "name": "predefinedWinReconfTimeBound",
          "package": "hoodle-core",
          "partial": "Win Reconf Time Bound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Predefined.html#v:predefinedWinReconfTimeBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Predefined",
          "name": "predefinedZoomStepFactor",
          "package": "hoodle-core",
          "signature": "Double",
          "source": "src/Hoodle-Type-Predefined.html#predefinedZoomStepFactor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Predefined",
          "module": "Hoodle.Type.Predefined",
          "name": "predefinedZoomStepFactor",
          "package": "hoodle-core",
          "partial": "Zoom Step Factor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Predefined.html#v:predefinedZoomStepFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Undo",
          "name": "Undo",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Undo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Type Undo",
          "module": "Hoodle.Type.Undo",
          "name": "Undo",
          "package": "hoodle-core",
          "partial": "Undo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Undo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Undo",
          "name": "UndoTable",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Undo.html#UndoTable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Undo",
          "module": "Hoodle.Type.Undo",
          "name": "UndoTable",
          "package": "hoodle-core",
          "partial": "Undo Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Undo.html#t:UndoTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Undo",
          "name": "UndoTable",
          "package": "hoodle-core",
          "signature": "UndoTable",
          "source": "src/Hoodle-Type-Undo.html#UndoTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Undo",
          "module": "Hoodle.Type.Undo",
          "name": "UndoTable",
          "package": "hoodle-core",
          "partial": "Undo Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Undo.html#v:UndoTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Undo",
          "name": "addToUndo",
          "package": "hoodle-core",
          "signature": "UndoTable a -\u003e a -\u003e UndoTable a",
          "source": "src/Hoodle-Type-Undo.html#addToUndo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Undo",
          "module": "Hoodle.Type.Undo",
          "name": "addToUndo",
          "normalized": "UndoTable a-\u003ea-\u003eUndoTable a",
          "package": "hoodle-core",
          "partial": "To Undo",
          "signature": "UndoTable a-\u003ea-\u003eUndoTable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Undo.html#v:addToUndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Undo",
          "name": "emptyUndo",
          "package": "hoodle-core",
          "signature": "Int -\u003e UndoTable a",
          "source": "src/Hoodle-Type-Undo.html#emptyUndo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Undo",
          "module": "Hoodle.Type.Undo",
          "name": "emptyUndo",
          "normalized": "Int-\u003eUndoTable a",
          "package": "hoodle-core",
          "partial": "Undo",
          "signature": "Int-\u003eUndoTable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Undo.html#v:emptyUndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Undo",
          "name": "getCurrentUndoItem",
          "package": "hoodle-core",
          "signature": "UndoTable a -\u003e Maybe a",
          "source": "src/Hoodle-Type-Undo.html#getCurrentUndoItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Undo",
          "module": "Hoodle.Type.Undo",
          "name": "getCurrentUndoItem",
          "normalized": "UndoTable a-\u003eMaybe a",
          "package": "hoodle-core",
          "partial": "Current Undo Item",
          "signature": "UndoTable a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Undo.html#v:getCurrentUndoItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Undo",
          "name": "getNextUndo",
          "package": "hoodle-core",
          "signature": "UndoTable a -\u003e Maybe (a, UndoTable a)",
          "source": "src/Hoodle-Type-Undo.html#getNextUndo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Undo",
          "module": "Hoodle.Type.Undo",
          "name": "getNextUndo",
          "normalized": "UndoTable a-\u003eMaybe(a,UndoTable a)",
          "package": "hoodle-core",
          "partial": "Next Undo",
          "signature": "UndoTable a-\u003eMaybe(a,UndoTable a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Undo.html#v:getNextUndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Undo",
          "name": "getPrevUndo",
          "package": "hoodle-core",
          "signature": "UndoTable a -\u003e Maybe (a, UndoTable a)",
          "source": "src/Hoodle-Type-Undo.html#getPrevUndo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Undo",
          "module": "Hoodle.Type.Undo",
          "name": "getPrevUndo",
          "normalized": "UndoTable a-\u003eMaybe(a,UndoTable a)",
          "package": "hoodle-core",
          "partial": "Prev Undo",
          "signature": "UndoTable a-\u003eMaybe(a,UndoTable a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Undo.html#v:getPrevUndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Undo",
          "name": "numOfUndo",
          "package": "hoodle-core",
          "signature": "UndoTable a -\u003e Int",
          "source": "src/Hoodle-Type-Undo.html#numOfUndo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Undo",
          "module": "Hoodle.Type.Undo",
          "name": "numOfUndo",
          "normalized": "UndoTable a-\u003eInt",
          "package": "hoodle-core",
          "partial": "Of Undo",
          "signature": "UndoTable a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Undo.html#v:numOfUndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Undo",
          "name": "singletonUndo",
          "package": "hoodle-core",
          "signature": "Int -\u003e a -\u003e UndoTable a",
          "source": "src/Hoodle-Type-Undo.html#singletonUndo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Undo",
          "module": "Hoodle.Type.Undo",
          "name": "singletonUndo",
          "normalized": "Int-\u003ea-\u003eUndoTable a",
          "package": "hoodle-core",
          "partial": "Undo",
          "signature": "Int-\u003ea-\u003eUndoTable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Undo.html#v:singletonUndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Undo",
          "name": "undo_allowednum",
          "package": "hoodle-core",
          "signature": "Int",
          "source": "src/Hoodle-Type-Undo.html#UndoTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Undo",
          "module": "Hoodle.Type.Undo",
          "name": "undo_allowednum",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Undo.html#v:undo_allowednum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Undo",
          "name": "undo_totalnum",
          "package": "hoodle-core",
          "signature": "Int",
          "source": "src/Hoodle-Type-Undo.html#UndoTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Undo",
          "module": "Hoodle.Type.Undo",
          "name": "undo_totalnum",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Undo.html#v:undo_totalnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Undo",
          "name": "undo_zipper",
          "package": "hoodle-core",
          "signature": "Maybe (SeqZipper a)",
          "source": "src/Hoodle-Type-Undo.html#UndoTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Undo",
          "module": "Hoodle.Type.Undo",
          "name": "undo_zipper",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Undo.html#v:undo_zipper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for Widgets \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hoodle.Type.Widget",
          "name": "Widget",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Widget.html",
          "type": "module"
        },
        "index": {
          "description": "Types for Widgets",
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "Widget",
          "package": "hoodle-core",
          "partial": "Widget",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "CanvasWidgets",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Widget.html#CanvasWidgets",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "CanvasWidgets",
          "package": "hoodle-core",
          "partial": "Canvas Widgets",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#t:CanvasWidgets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "ClockWidgetConfig",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Widget.html#ClockWidgetConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "ClockWidgetConfig",
          "package": "hoodle-core",
          "partial": "Clock Widget Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#t:ClockWidgetConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "LayerWidgetConfig",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Widget.html#LayerWidgetConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "LayerWidgetConfig",
          "package": "hoodle-core",
          "partial": "Layer Widget Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#t:LayerWidgetConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "WidgetConfig",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Widget.html#WidgetConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "WidgetConfig",
          "package": "hoodle-core",
          "partial": "Widget Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#t:WidgetConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "WidgetItem",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Widget.html#WidgetItem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "WidgetItem",
          "package": "hoodle-core",
          "partial": "Widget Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#t:WidgetItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "ClockWidget",
          "package": "hoodle-core",
          "signature": "ClockWidget",
          "source": "src/Hoodle-Type-Widget.html#WidgetItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "ClockWidget",
          "package": "hoodle-core",
          "partial": "Clock Widget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:ClockWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "LayerWidget",
          "package": "hoodle-core",
          "signature": "LayerWidget",
          "source": "src/Hoodle-Type-Widget.html#WidgetItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "LayerWidget",
          "package": "hoodle-core",
          "partial": "Layer Widget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:LayerWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "PanZoomWidget",
          "package": "hoodle-core",
          "signature": "PanZoomWidget",
          "source": "src/Hoodle-Type-Widget.html#WidgetItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "PanZoomWidget",
          "package": "hoodle-core",
          "partial": "Pan Zoom Widget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:PanZoomWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "allWidgets",
          "package": "hoodle-core",
          "signature": "[WidgetItem]",
          "source": "src/Hoodle-Type-Widget.html#allWidgets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "allWidgets",
          "normalized": "[WidgetItem]",
          "package": "hoodle-core",
          "partial": "Widgets",
          "signature": "[WidgetItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:allWidgets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "clockWidgetConfig",
          "package": "hoodle-core",
          "signature": "Simple Lens CanvasWidgets ClockWidgetConfig",
          "source": "src/Hoodle-Type-Widget.html#clockWidgetConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "clockWidgetConfig",
          "package": "hoodle-core",
          "partial": "Widget Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:clockWidgetConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "clockWidgetPosition",
          "package": "hoodle-core",
          "signature": "Simple Lens ClockWidgetConfig CanvasCoordinate",
          "source": "src/Hoodle-Type-Widget.html#clockWidgetPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "clockWidgetPosition",
          "package": "hoodle-core",
          "partial": "Widget Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:clockWidgetPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "clockWidgetTime",
          "package": "hoodle-core",
          "signature": "Simple Lens ClockWidgetConfig (Int, Int, Int)",
          "source": "src/Hoodle-Type-Widget.html#clockWidgetTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "clockWidgetTime",
          "normalized": "Simple Lens ClockWidgetConfig(Int,Int,Int)",
          "package": "hoodle-core",
          "partial": "Widget Time",
          "signature": "Simple Lens ClockWidgetConfig(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:clockWidgetTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "defaultLWConfig",
          "package": "hoodle-core",
          "signature": "LayerWidgetConfig",
          "source": "src/Hoodle-Type-Widget.html#defaultLWConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "defaultLWConfig",
          "package": "hoodle-core",
          "partial": "LWConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:defaultLWConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault widget configuration \n\u003c/p\u003e",
          "module": "Hoodle.Type.Widget",
          "name": "defaultWidgetConfig",
          "package": "hoodle-core",
          "signature": "WidgetConfig",
          "source": "src/Hoodle-Type-Widget.html#defaultWidgetConfig",
          "type": "function"
        },
        "index": {
          "description": "default widget configuration",
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "defaultWidgetConfig",
          "package": "hoodle-core",
          "partial": "Widget Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:defaultWidgetConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflag for clock widget \n\u003c/p\u003e",
          "module": "Hoodle.Type.Widget",
          "name": "doesUseClockWidget",
          "package": "hoodle-core",
          "signature": "Simple Lens WidgetConfig Bool",
          "source": "src/Hoodle-Type-Widget.html#doesUseClockWidget",
          "type": "function"
        },
        "index": {
          "description": "flag for clock widget",
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "doesUseClockWidget",
          "package": "hoodle-core",
          "partial": "Use Clock Widget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:doesUseClockWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflag for layer widget \n\u003c/p\u003e",
          "module": "Hoodle.Type.Widget",
          "name": "doesUseLayerWidget",
          "package": "hoodle-core",
          "signature": "Simple Lens WidgetConfig Bool",
          "source": "src/Hoodle-Type-Widget.html#doesUseLayerWidget",
          "type": "function"
        },
        "index": {
          "description": "flag for layer widget",
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "doesUseLayerWidget",
          "package": "hoodle-core",
          "partial": "Use Layer Widget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:doesUseLayerWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflag for pan zoom widget \n\u003c/p\u003e",
          "module": "Hoodle.Type.Widget",
          "name": "doesUsePanZoomWidget",
          "package": "hoodle-core",
          "signature": "Simple Lens WidgetConfig Bool",
          "source": "src/Hoodle-Type-Widget.html#doesUsePanZoomWidget",
          "type": "function"
        },
        "index": {
          "description": "flag for pan zoom widget",
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "doesUsePanZoomWidget",
          "package": "hoodle-core",
          "partial": "Use Pan Zoom Widget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:doesUsePanZoomWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "layerWidgetConfig",
          "package": "hoodle-core",
          "signature": "Simple Lens CanvasWidgets LayerWidgetConfig",
          "source": "src/Hoodle-Type-Widget.html#layerWidgetConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "layerWidgetConfig",
          "package": "hoodle-core",
          "partial": "Widget Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:layerWidgetConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "layerWidgetPosition",
          "package": "hoodle-core",
          "signature": "Simple Lens LayerWidgetConfig CanvasCoordinate",
          "source": "src/Hoodle-Type-Widget.html#layerWidgetPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "layerWidgetPosition",
          "package": "hoodle-core",
          "partial": "Widget Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:layerWidgetPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "layerWidgetShowContent",
          "package": "hoodle-core",
          "signature": "Simple Lens LayerWidgetConfig Bool",
          "source": "src/Hoodle-Type-Widget.html#layerWidgetShowContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "layerWidgetShowContent",
          "package": "hoodle-core",
          "partial": "Widget Show Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:layerWidgetShowContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "panZoomWidgetConfig",
          "package": "hoodle-core",
          "signature": "Simple Lens CanvasWidgets PanZoomWidgetConfig",
          "source": "src/Hoodle-Type-Widget.html#panZoomWidgetConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "panZoomWidgetConfig",
          "package": "hoodle-core",
          "partial": "Zoom Widget Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:panZoomWidgetConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "panZoomWidgetPosition",
          "package": "hoodle-core",
          "signature": "Simple Lens PanZoomWidgetConfig CanvasCoordinate",
          "source": "src/Hoodle-Type-Widget.html#panZoomWidgetPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "panZoomWidgetPosition",
          "package": "hoodle-core",
          "partial": "Zoom Widget Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:panZoomWidgetPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Widget",
          "name": "panZoomWidgetTouchIsZoom",
          "package": "hoodle-core",
          "signature": "Simple Lens PanZoomWidgetConfig Bool",
          "source": "src/Hoodle-Type-Widget.html#panZoomWidgetTouchIsZoom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "panZoomWidgetTouchIsZoom",
          "package": "hoodle-core",
          "partial": "Zoom Widget Touch Is Zoom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:panZoomWidgetTouchIsZoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewidget config lens \n\u003c/p\u003e",
          "module": "Hoodle.Type.Widget",
          "name": "widgetConfig",
          "package": "hoodle-core",
          "signature": "Simple Lens CanvasWidgets WidgetConfig",
          "source": "src/Hoodle-Type-Widget.html#widgetConfig",
          "type": "function"
        },
        "index": {
          "description": "widget config lens",
          "hierarchy": "Hoodle Type Widget",
          "module": "Hoodle.Type.Widget",
          "name": "widgetConfig",
          "package": "hoodle-core",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Widget.html#v:widgetConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Window",
          "name": "Window",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Window.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Type Window",
          "module": "Hoodle.Type.Window",
          "name": "Window",
          "package": "hoodle-core",
          "partial": "Window",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Window.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Window",
          "name": "SplitType",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Window.html#SplitType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Window",
          "module": "Hoodle.Type.Window",
          "name": "SplitType",
          "package": "hoodle-core",
          "partial": "Split Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Window.html#t:SplitType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Window",
          "name": "WindowConfig",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type-Window.html#WindowConfig",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Type Window",
          "module": "Hoodle.Type.Window",
          "name": "WindowConfig",
          "package": "hoodle-core",
          "partial": "Window Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Window.html#t:WindowConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Window",
          "name": "HSplit",
          "package": "hoodle-core",
          "signature": "HSplit WindowConfig WindowConfig",
          "source": "src/Hoodle-Type-Window.html#WindowConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Window",
          "module": "Hoodle.Type.Window",
          "name": "HSplit",
          "package": "hoodle-core",
          "partial": "HSplit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Window.html#v:HSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Window",
          "name": "Node",
          "package": "hoodle-core",
          "signature": "Node CanvasId",
          "source": "src/Hoodle-Type-Window.html#WindowConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Window",
          "module": "Hoodle.Type.Window",
          "name": "Node",
          "package": "hoodle-core",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Window.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Window",
          "name": "SplitHorizontal",
          "package": "hoodle-core",
          "signature": "SplitHorizontal",
          "source": "src/Hoodle-Type-Window.html#SplitType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Window",
          "module": "Hoodle.Type.Window",
          "name": "SplitHorizontal",
          "package": "hoodle-core",
          "partial": "Split Horizontal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Window.html#v:SplitHorizontal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Window",
          "name": "SplitVertical",
          "package": "hoodle-core",
          "signature": "SplitVertical",
          "source": "src/Hoodle-Type-Window.html#SplitType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Window",
          "module": "Hoodle.Type.Window",
          "name": "SplitVertical",
          "package": "hoodle-core",
          "partial": "Split Vertical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Window.html#v:SplitVertical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Window",
          "name": "VSplit",
          "package": "hoodle-core",
          "signature": "VSplit WindowConfig WindowConfig",
          "source": "src/Hoodle-Type-Window.html#WindowConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Window",
          "module": "Hoodle.Type.Window",
          "name": "VSplit",
          "package": "hoodle-core",
          "partial": "VSplit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Window.html#v:VSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type.Window",
          "name": "removeWindow",
          "package": "hoodle-core",
          "signature": "CanvasId-\u003e WindowConfig-\u003e Either WindowConfig (Maybe WindowConfig)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Type Window",
          "module": "Hoodle.Type.Window",
          "name": "removeWindow",
          "normalized": "CanvasId-\u003eWindowConfig-\u003eEither WindowConfig(Maybe WindowConfig)",
          "package": "hoodle-core",
          "partial": "Window",
          "signature": "CanvasId-\u003eWindowConfig-\u003eEither WindowConfig(Maybe WindowConfig)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Window.html#v:removeWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esplit window in the place of cidold \n\u003c/p\u003e",
          "module": "Hoodle.Type.Window",
          "name": "splitWindow",
          "package": "hoodle-core",
          "signature": "CanvasId-\u003e (CanvasId, SplitType)-\u003e WindowConfig-\u003e Either WindowConfig WindowConfig",
          "type": "function"
        },
        "index": {
          "description": "split window in the place of cidold",
          "hierarchy": "Hoodle Type Window",
          "module": "Hoodle.Type.Window",
          "name": "splitWindow",
          "normalized": "CanvasId-\u003e(CanvasId,SplitType)-\u003eWindowConfig-\u003eEither WindowConfig WindowConfig",
          "package": "hoodle-core",
          "partial": "Window",
          "signature": "CanvasId-\u003e(CanvasId,SplitType)-\u003eWindowConfig-\u003eEither WindowConfig WindowConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type-Window.html#v:splitWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Type",
          "name": "Type",
          "package": "hoodle-core",
          "source": "src/Hoodle-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Type",
          "module": "Hoodle.Type",
          "name": "Type",
          "package": "hoodle-core",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "Util",
          "package": "hoodle-core",
          "source": "src/Hoodle-Util.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "Util",
          "package": "hoodle-core",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "T",
          "package": "hoodle-core",
          "source": "src/Hoodle-Util.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "T",
          "package": "hoodle-core",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "UrlPath",
          "package": "hoodle-core",
          "source": "src/Hoodle-Util.html#UrlPath",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "UrlPath",
          "package": "hoodle-core",
          "partial": "Url Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#t:UrlPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "(#)",
          "package": "hoodle-core",
          "signature": "a -\u003e (a -\u003e b) -\u003e b",
          "source": "src/Hoodle-Util.html#%23",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "(#) #",
          "normalized": "a-\u003e(a-\u003eb)-\u003eb",
          "package": "hoodle-core",
          "signature": "a-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "F",
          "package": "hoodle-core",
          "signature": "F",
          "source": "src/Hoodle-Util.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "F",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "FileUrl",
          "package": "hoodle-core",
          "signature": "FileUrl FilePath",
          "source": "src/Hoodle-Util.html#UrlPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "FileUrl",
          "package": "hoodle-core",
          "partial": "File Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:FileUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "H",
          "package": "hoodle-core",
          "signature": "H",
          "source": "src/Hoodle-Util.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "H",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:H"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "HS",
          "package": "hoodle-core",
          "signature": "HS",
          "source": "src/Hoodle-Util.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "HS",
          "package": "hoodle-core",
          "partial": "HS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:HS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "HttpUrl",
          "package": "hoodle-core",
          "signature": "HttpUrl String",
          "source": "src/Hoodle-Util.html#UrlPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "HttpUrl",
          "package": "hoodle-core",
          "partial": "Http Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:HttpUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "N",
          "package": "hoodle-core",
          "signature": "N",
          "source": "src/Hoodle-Util.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "N",
          "package": "hoodle-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor debugging\n\u003c/p\u003e",
          "module": "Hoodle.Util",
          "name": "errorlog",
          "package": "hoodle-core",
          "signature": "String -\u003e IO ()",
          "source": "src/Hoodle-Util.html#errorlog",
          "type": "function"
        },
        "index": {
          "description": "for debugging",
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "errorlog",
          "normalized": "String-\u003eIO()",
          "package": "hoodle-core",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:errorlog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "getLargestHeight",
          "package": "hoodle-core",
          "signature": "Hoodle -\u003e Double",
          "source": "src/Hoodle-Util.html#getLargestHeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "getLargestHeight",
          "normalized": "Hoodle-\u003eDouble",
          "package": "hoodle-core",
          "partial": "Largest Height",
          "signature": "Hoodle-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:getLargestHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "getLargestWidth",
          "package": "hoodle-core",
          "signature": "Hoodle -\u003e Double",
          "source": "src/Hoodle-Util.html#getLargestWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "getLargestWidth",
          "normalized": "Hoodle-\u003eDouble",
          "package": "hoodle-core",
          "partial": "Largest Width",
          "signature": "Hoodle-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:getLargestWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "maybeError'",
          "package": "hoodle-core",
          "signature": "String -\u003e Maybe a -\u003e a",
          "source": "src/Hoodle-Util.html#maybeError%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "maybeError'",
          "normalized": "String-\u003eMaybe a-\u003ea",
          "package": "hoodle-core",
          "partial": "Error'",
          "signature": "String-\u003eMaybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:maybeError-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "maybeFlip",
          "package": "hoodle-core",
          "signature": "Maybe a -\u003e b -\u003e (a -\u003e b) -\u003e b",
          "source": "src/Hoodle-Util.html#maybeFlip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "maybeFlip",
          "normalized": "Maybe a-\u003eb-\u003e(a-\u003eb)-\u003eb",
          "package": "hoodle-core",
          "partial": "Flip",
          "signature": "Maybe a-\u003eb-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:maybeFlip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "maybeRead",
          "package": "hoodle-core",
          "signature": "String -\u003e Maybe a",
          "source": "src/Hoodle-Util.html#maybeRead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "maybeRead",
          "normalized": "String-\u003eMaybe a",
          "package": "hoodle-core",
          "partial": "Read",
          "signature": "String-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:maybeRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "mkTmpFile",
          "package": "hoodle-core",
          "signature": "String -\u003e IO FilePath",
          "source": "src/Hoodle-Util.html#mkTmpFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "mkTmpFile",
          "normalized": "String-\u003eIO FilePath",
          "package": "hoodle-core",
          "partial": "Tmp File",
          "signature": "String-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:mkTmpFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "uncurry4",
          "package": "hoodle-core",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e (a, b, c, d) -\u003e e",
          "source": "src/Hoodle-Util.html#uncurry4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "uncurry4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(a,b,c,d)-\u003ee",
          "package": "hoodle-core",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(a,b,c,d)-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:uncurry4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "urlParse",
          "package": "hoodle-core",
          "signature": "String -\u003e Maybe UrlPath",
          "source": "src/Hoodle-Util.html#urlParse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "urlParse",
          "normalized": "String-\u003eMaybe UrlPath",
          "package": "hoodle-core",
          "partial": "Parse",
          "signature": "String-\u003eMaybe UrlPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:urlParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Util",
          "name": "waitUntil",
          "package": "hoodle-core",
          "signature": "(a -\u003e Bool) -\u003e m a -\u003e m ()",
          "source": "src/Hoodle-Util.html#waitUntil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Util",
          "module": "Hoodle.Util",
          "name": "waitUntil",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb()",
          "package": "hoodle-core",
          "partial": "Until",
          "signature": "(a-\u003eBool)-\u003em a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Util.html#v:waitUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "Coordinate",
          "package": "hoodle-core",
          "source": "src/Hoodle-View-Coordinate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "Coordinate",
          "package": "hoodle-core",
          "partial": "Coordinate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edata structure for transformation among screen, canvas, desktop and page coordinates\n\u003c/p\u003e",
          "module": "Hoodle.View.Coordinate",
          "name": "CanvasGeometry",
          "package": "hoodle-core",
          "source": "src/Hoodle-View-Coordinate.html#CanvasGeometry",
          "type": "data"
        },
        "index": {
          "description": "data structure for transformation among screen canvas desktop and page coordinates",
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "CanvasGeometry",
          "package": "hoodle-core",
          "partial": "Canvas Geometry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#t:CanvasGeometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "CanvasGeometry",
          "package": "hoodle-core",
          "signature": "CanvasGeometry",
          "source": "src/Hoodle-View-Coordinate.html#CanvasGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "CanvasGeometry",
          "package": "hoodle-core",
          "partial": "Canvas Geometry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:CanvasGeometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "canvas2Desktop",
          "package": "hoodle-core",
          "signature": "CanvasCoordinate -\u003e DesktopCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#CanvasGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "canvas2Desktop",
          "normalized": "CanvasCoordinate-\u003eDesktopCoordinate",
          "package": "hoodle-core",
          "partial": "Desktop",
          "signature": "CanvasCoordinate-\u003eDesktopCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:canvas2Desktop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "canvas2Screen",
          "package": "hoodle-core",
          "signature": "CanvasCoordinate -\u003e ScreenCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#CanvasGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "canvas2Screen",
          "normalized": "CanvasCoordinate-\u003eScreenCoordinate",
          "package": "hoodle-core",
          "partial": "Screen",
          "signature": "CanvasCoordinate-\u003eScreenCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:canvas2Screen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "canvasDim",
          "package": "hoodle-core",
          "signature": "CanvasDimension",
          "source": "src/Hoodle-View-Coordinate.html#CanvasGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "canvasDim",
          "package": "hoodle-core",
          "partial": "Dim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:canvasDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ein desktop coordinate \n\u003c/p\u003e",
          "module": "Hoodle.View.Coordinate",
          "name": "canvasViewPort",
          "package": "hoodle-core",
          "signature": "ViewPortBBox",
          "source": "src/Hoodle-View-Coordinate.html#CanvasGeometry",
          "type": "function"
        },
        "index": {
          "description": "in desktop coordinate",
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "canvasViewPort",
          "package": "hoodle-core",
          "partial": "View Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:canvasViewPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "core2Desktop",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e (Double, Double) -\u003e DesktopCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#core2Desktop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "core2Desktop",
          "normalized": "CanvasGeometry-\u003e(Double,Double)-\u003eDesktopCoordinate",
          "package": "hoodle-core",
          "partial": "Desktop",
          "signature": "CanvasGeometry-\u003e(Double,Double)-\u003eDesktopCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:core2Desktop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "desktop2Canvas",
          "package": "hoodle-core",
          "signature": "DesktopCoordinate -\u003e CanvasCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#CanvasGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "desktop2Canvas",
          "normalized": "DesktopCoordinate-\u003eCanvasCoordinate",
          "package": "hoodle-core",
          "partial": "Canvas",
          "signature": "DesktopCoordinate-\u003eCanvasCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:desktop2Canvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "desktop2Page",
          "package": "hoodle-core",
          "signature": "DesktopCoordinate -\u003e Maybe (PageNum, PageCoordinate)",
          "source": "src/Hoodle-View-Coordinate.html#CanvasGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "desktop2Page",
          "normalized": "DesktopCoordinate-\u003eMaybe(PageNum,PageCoordinate)",
          "package": "hoodle-core",
          "partial": "Page",
          "signature": "DesktopCoordinate-\u003eMaybe(PageNum,PageCoordinate)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:desktop2Page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "desktop2Screen",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e DesktopCoordinate -\u003e ScreenCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#desktop2Screen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "desktop2Screen",
          "normalized": "CanvasGeometry-\u003eDesktopCoordinate-\u003eScreenCoordinate",
          "package": "hoodle-core",
          "partial": "Screen",
          "signature": "CanvasGeometry-\u003eDesktopCoordinate-\u003eScreenCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:desktop2Screen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "desktopDim",
          "package": "hoodle-core",
          "signature": "DesktopDimension",
          "source": "src/Hoodle-View-Coordinate.html#CanvasGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "desktopDim",
          "package": "hoodle-core",
          "partial": "Dim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:desktopDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "device2Desktop",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e PointerCoord -\u003e DesktopCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#device2Desktop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "device2Desktop",
          "normalized": "CanvasGeometry-\u003ePointerCoord-\u003eDesktopCoordinate",
          "package": "hoodle-core",
          "partial": "Desktop",
          "signature": "CanvasGeometry-\u003ePointerCoord-\u003eDesktopCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:device2Desktop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "getCvsGeomFrmCvsInfo",
          "package": "hoodle-core",
          "signature": "CanvasInfo a -\u003e IO CanvasGeometry",
          "source": "src/Hoodle-View-Coordinate.html#getCvsGeomFrmCvsInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "getCvsGeomFrmCvsInfo",
          "normalized": "CanvasInfo a-\u003eIO CanvasGeometry",
          "package": "hoodle-core",
          "partial": "Cvs Geom Frm Cvs Info",
          "signature": "CanvasInfo a-\u003eIO CanvasGeometry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:getCvsGeomFrmCvsInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet Canvas Origin in Page Coordinate : Right is successful case, \n   Left is unsuccessful case, then return in DesktopCoordinate\n\u003c/p\u003e",
          "module": "Hoodle.View.Coordinate",
          "name": "getCvsOriginInPage",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e Either DesktopCoordinate (PageNum, PageCoordinate)",
          "source": "src/Hoodle-View-Coordinate.html#getCvsOriginInPage",
          "type": "function"
        },
        "index": {
          "description": "Get Canvas Origin in Page Coordinate Right is successful case Left is unsuccessful case then return in DesktopCoordinate",
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "getCvsOriginInPage",
          "normalized": "CanvasGeometry-\u003eEither DesktopCoordinate(PageNum,PageCoordinate)",
          "package": "hoodle-core",
          "partial": "Cvs Origin In Page",
          "signature": "CanvasGeometry-\u003eEither DesktopCoordinate(PageNum,PageCoordinate)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:getCvsOriginInPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "getPagesInRange",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e ViewPortBBox -\u003e Hoodle EditMode -\u003e [PageNum]",
          "source": "src/Hoodle-View-Coordinate.html#getPagesInRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "getPagesInRange",
          "normalized": "CanvasGeometry-\u003eViewPortBBox-\u003eHoodle EditMode-\u003e[PageNum]",
          "package": "hoodle-core",
          "partial": "Pages In Range",
          "signature": "CanvasGeometry-\u003eViewPortBBox-\u003eHoodle EditMode-\u003e[PageNum]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:getPagesInRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "getPagesInViewPortRange",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e Hoodle EditMode -\u003e [PageNum]",
          "source": "src/Hoodle-View-Coordinate.html#getPagesInViewPortRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "getPagesInViewPortRange",
          "normalized": "CanvasGeometry-\u003eHoodle EditMode-\u003e[PageNum]",
          "package": "hoodle-core",
          "partial": "Pages In View Port Range",
          "signature": "CanvasGeometry-\u003eHoodle EditMode-\u003e[PageNum]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:getPagesInViewPortRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emake a canvas geometry data structure from current status \n\u003c/p\u003e",
          "module": "Hoodle.View.Coordinate",
          "name": "makeCanvasGeometry",
          "package": "hoodle-core",
          "signature": "PageNum -\u003e PageArrangement vm -\u003e DrawingArea -\u003e IO CanvasGeometry",
          "source": "src/Hoodle-View-Coordinate.html#makeCanvasGeometry",
          "type": "function"
        },
        "index": {
          "description": "make canvas geometry data structure from current status",
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "makeCanvasGeometry",
          "normalized": "PageNum-\u003ePageArrangement a-\u003eDrawingArea-\u003eIO CanvasGeometry",
          "package": "hoodle-core",
          "partial": "Canvas Geometry",
          "signature": "PageNum-\u003ePageArrangement vm-\u003eDrawingArea-\u003eIO CanvasGeometry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:makeCanvasGeometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "makeDesktop2Page",
          "package": "hoodle-core",
          "signature": "(PageNum -\u003e Maybe (PageOrigin, PageDimension)) -\u003e DesktopCoordinate -\u003e Maybe (PageNum, PageCoordinate)",
          "source": "src/Hoodle-View-Coordinate.html#makeDesktop2Page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "makeDesktop2Page",
          "normalized": "(PageNum-\u003eMaybe(PageOrigin,PageDimension))-\u003eDesktopCoordinate-\u003eMaybe(PageNum,PageCoordinate)",
          "package": "hoodle-core",
          "partial": "Desktop Page",
          "signature": "(PageNum-\u003eMaybe(PageOrigin,PageDimension))-\u003eDesktopCoordinate-\u003eMaybe(PageNum,PageCoordinate)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:makeDesktop2Page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "makePage2Desktop",
          "package": "hoodle-core",
          "signature": "(PageNum -\u003e Maybe (PageOrigin, PageDimension)) -\u003e (PageNum, PageCoordinate) -\u003e DesktopCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#makePage2Desktop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "makePage2Desktop",
          "normalized": "(PageNum-\u003eMaybe(PageOrigin,PageDimension))-\u003e(PageNum,PageCoordinate)-\u003eDesktopCoordinate",
          "package": "hoodle-core",
          "partial": "Page Desktop",
          "signature": "(PageNum-\u003eMaybe(PageOrigin,PageDimension))-\u003e(PageNum,PageCoordinate)-\u003eDesktopCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:makePage2Desktop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "page2Desktop",
          "package": "hoodle-core",
          "signature": "(PageNum, PageCoordinate) -\u003e DesktopCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#CanvasGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "page2Desktop",
          "normalized": "(PageNum,PageCoordinate)-\u003eDesktopCoordinate",
          "package": "hoodle-core",
          "partial": "Desktop",
          "signature": "(PageNum,PageCoordinate)-\u003eDesktopCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:page2Desktop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "screen2Canvas",
          "package": "hoodle-core",
          "signature": "ScreenCoordinate -\u003e CanvasCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#CanvasGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "screen2Canvas",
          "normalized": "ScreenCoordinate-\u003eCanvasCoordinate",
          "package": "hoodle-core",
          "partial": "Canvas",
          "signature": "ScreenCoordinate-\u003eCanvasCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:screen2Canvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "screen2Desktop",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e ScreenCoordinate -\u003e DesktopCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#screen2Desktop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "screen2Desktop",
          "normalized": "CanvasGeometry-\u003eScreenCoordinate-\u003eDesktopCoordinate",
          "package": "hoodle-core",
          "partial": "Desktop",
          "signature": "CanvasGeometry-\u003eScreenCoordinate-\u003eDesktopCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:screen2Desktop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "screenDim",
          "package": "hoodle-core",
          "signature": "ScreenDimension",
          "source": "src/Hoodle-View-Coordinate.html#CanvasGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "screenDim",
          "package": "hoodle-core",
          "partial": "Dim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:screenDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "touch2Desktop",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e (Double, Double) -\u003e DesktopCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#touch2Desktop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "touch2Desktop",
          "normalized": "CanvasGeometry-\u003e(Double,Double)-\u003eDesktopCoordinate",
          "package": "hoodle-core",
          "partial": "Desktop",
          "signature": "CanvasGeometry-\u003e(Double,Double)-\u003eDesktopCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:touch2Desktop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "wacom2Canvas",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e (Double, Double) -\u003e CanvasCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#wacom2Canvas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "wacom2Canvas",
          "normalized": "CanvasGeometry-\u003e(Double,Double)-\u003eCanvasCoordinate",
          "package": "hoodle-core",
          "partial": "Canvas",
          "signature": "CanvasGeometry-\u003e(Double,Double)-\u003eCanvasCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:wacom2Canvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "wacom2Desktop",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e (Double, Double) -\u003e DesktopCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#wacom2Desktop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "wacom2Desktop",
          "normalized": "CanvasGeometry-\u003e(Double,Double)-\u003eDesktopCoordinate",
          "package": "hoodle-core",
          "partial": "Desktop",
          "signature": "CanvasGeometry-\u003e(Double,Double)-\u003eDesktopCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:wacom2Desktop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "xformCanvas2Desk",
          "package": "hoodle-core",
          "signature": "CanvasDimension -\u003e ViewPortBBox -\u003e CanvasCoordinate -\u003e DesktopCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#xformCanvas2Desk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "xformCanvas2Desk",
          "normalized": "CanvasDimension-\u003eViewPortBBox-\u003eCanvasCoordinate-\u003eDesktopCoordinate",
          "package": "hoodle-core",
          "partial": "Canvas Desk",
          "signature": "CanvasDimension-\u003eViewPortBBox-\u003eCanvasCoordinate-\u003eDesktopCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:xformCanvas2Desk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "xformCanvas2Screen",
          "package": "hoodle-core",
          "signature": "CanvasOrigin -\u003e CanvasCoordinate -\u003e ScreenCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#xformCanvas2Screen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "xformCanvas2Screen",
          "normalized": "CanvasOrigin-\u003eCanvasCoordinate-\u003eScreenCoordinate",
          "package": "hoodle-core",
          "partial": "Canvas Screen",
          "signature": "CanvasOrigin-\u003eCanvasCoordinate-\u003eScreenCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:xformCanvas2Screen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "xformDesk2Canvas",
          "package": "hoodle-core",
          "signature": "CanvasDimension -\u003e ViewPortBBox -\u003e DesktopCoordinate -\u003e CanvasCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#xformDesk2Canvas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "xformDesk2Canvas",
          "normalized": "CanvasDimension-\u003eViewPortBBox-\u003eDesktopCoordinate-\u003eCanvasCoordinate",
          "package": "hoodle-core",
          "partial": "Desk Canvas",
          "signature": "CanvasDimension-\u003eViewPortBBox-\u003eDesktopCoordinate-\u003eCanvasCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:xformDesk2Canvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Coordinate",
          "name": "xformScreen2Canvas",
          "package": "hoodle-core",
          "signature": "CanvasOrigin -\u003e ScreenCoordinate -\u003e CanvasCoordinate",
          "source": "src/Hoodle-View-Coordinate.html#xformScreen2Canvas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Coordinate",
          "module": "Hoodle.View.Coordinate",
          "name": "xformScreen2Canvas",
          "normalized": "CanvasOrigin-\u003eScreenCoordinate-\u003eCanvasCoordinate",
          "package": "hoodle-core",
          "partial": "Screen Canvas",
          "signature": "CanvasOrigin-\u003eScreenCoordinate-\u003eCanvasCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Coordinate.html#v:xformScreen2Canvas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "Draw",
          "package": "hoodle-core",
          "source": "src/Hoodle-View-Draw.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "Draw",
          "package": "hoodle-core",
          "partial": "Draw",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "ContPageDraw",
          "package": "hoodle-core",
          "source": "src/Hoodle-View-Draw.html#ContPageDraw",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "ContPageDraw",
          "package": "hoodle-core",
          "partial": "Cont Page Draw",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#t:ContPageDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "DrawingFunction",
          "package": "hoodle-core",
          "signature": "DrawingFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "DrawingFunction",
          "package": "hoodle-core",
          "partial": "Drawing Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#t:DrawingFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "PressureMode",
          "package": "hoodle-core",
          "source": "src/Hoodle-View-Draw.html#PressureMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "PressureMode",
          "package": "hoodle-core",
          "partial": "Pressure Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#t:PressureMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "SinglePageDraw",
          "package": "hoodle-core",
          "source": "src/Hoodle-View-Draw.html#SinglePageDraw",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "SinglePageDraw",
          "package": "hoodle-core",
          "partial": "Single Page Draw",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#t:SinglePageDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "ContPageDraw",
          "package": "hoodle-core",
          "signature": "ContPageDraw",
          "source": "src/Hoodle-View-Draw.html#ContPageDraw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "ContPageDraw",
          "package": "hoodle-core",
          "partial": "Cont Page Draw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:ContPageDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "NoPressure",
          "package": "hoodle-core",
          "signature": "NoPressure",
          "source": "src/Hoodle-View-Draw.html#PressureMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "NoPressure",
          "package": "hoodle-core",
          "partial": "No Pressure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:NoPressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "Pressure",
          "package": "hoodle-core",
          "signature": "Pressure",
          "source": "src/Hoodle-View-Draw.html#PressureMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "Pressure",
          "package": "hoodle-core",
          "partial": "Pressure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:Pressure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "SinglePageDraw",
          "package": "hoodle-core",
          "signature": "SinglePageDraw",
          "source": "src/Hoodle-View-Draw.html#SinglePageDraw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "SinglePageDraw",
          "package": "hoodle-core",
          "partial": "Single Page Draw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:SinglePageDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "cairoHittedBoxDraw",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e Page SelectMode -\u003e Maybe BBox -\u003e Render ()",
          "source": "src/Hoodle-View-Draw.html#cairoHittedBoxDraw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "cairoHittedBoxDraw",
          "normalized": "CanvasGeometry-\u003ePage SelectMode-\u003eMaybe BBox-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Hitted Box Draw",
          "signature": "CanvasGeometry-\u003ePage SelectMode-\u003eMaybe BBox-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:cairoHittedBoxDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "cairoXform4PageCoordinate",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e PageNum -\u003e Render ()",
          "source": "src/Hoodle-View-Draw.html#cairoXform4PageCoordinate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "cairoXform4PageCoordinate",
          "normalized": "CanvasGeometry-\u003ePageNum-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Xform Page Coordinate",
          "signature": "CanvasGeometry-\u003ePageNum-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:cairoXform4PageCoordinate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "canvas2DesktopRatio",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e Double",
          "source": "src/Hoodle-View-Draw.html#canvas2DesktopRatio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "canvas2DesktopRatio",
          "normalized": "CanvasGeometry-\u003eDouble",
          "package": "hoodle-core",
          "partial": "Desktop Ratio",
          "signature": "CanvasGeometry-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:canvas2DesktopRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "canvasImageSurface",
          "package": "hoodle-core",
          "signature": "Maybe Double-\u003e CanvasGeometry-\u003e Hoodle EditMode-\u003e IO (Surface, Dimension)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "canvasImageSurface",
          "normalized": "Maybe Double-\u003eCanvasGeometry-\u003eHoodle EditMode-\u003eIO(Surface,Dimension)",
          "package": "hoodle-core",
          "partial": "Image Surface",
          "signature": "Maybe Double-\u003eCanvasGeometry-\u003eHoodle EditMode-\u003eIO(Surface,Dimension)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:canvasImageSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecommon routine for double buffering \n\u003c/p\u003e",
          "module": "Hoodle.View.Draw",
          "name": "doubleBufferDraw",
          "package": "hoodle-core",
          "signature": "(DrawWindow, Maybe Surface) -\u003e CanvasGeometry -\u003e Render () -\u003e Render a -\u003e IntersectBBox -\u003e IO (Maybe a)",
          "source": "src/Hoodle-View-Draw.html#doubleBufferDraw",
          "type": "function"
        },
        "index": {
          "description": "common routine for double buffering",
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "doubleBufferDraw",
          "normalized": "(DrawWindow,Maybe Surface)-\u003eCanvasGeometry-\u003eRender()-\u003eRender a-\u003eIntersectBBox-\u003eIO(Maybe a)",
          "package": "hoodle-core",
          "partial": "Buffer Draw",
          "signature": "(DrawWindow,Maybe Surface)-\u003eCanvasGeometry-\u003eRender()-\u003eRender a-\u003eIntersectBBox-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:doubleBufferDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "doubleBufferFlush",
          "package": "hoodle-core",
          "signature": "Surface -\u003e CanvasInfo a -\u003e IO ()",
          "source": "src/Hoodle-View-Draw.html#doubleBufferFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "doubleBufferFlush",
          "normalized": "Surface-\u003eCanvasInfo a-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Buffer Flush",
          "signature": "Surface-\u003eCanvasInfo a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:doubleBufferFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "drawContHoodle",
          "package": "hoodle-core",
          "signature": "DrawingFunction ContinuousPage EditMode",
          "source": "src/Hoodle-View-Draw.html#drawContHoodle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "drawContHoodle",
          "package": "hoodle-core",
          "partial": "Cont Hoodle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:drawContHoodle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "drawContHoodleSel",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e DrawingFunction ContinuousPage SelectMode",
          "source": "src/Hoodle-View-Draw.html#drawContHoodleSel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "drawContHoodleSel",
          "normalized": "CanvasGeometry-\u003eDrawingFunction ContinuousPage SelectMode",
          "package": "hoodle-core",
          "partial": "Cont Hoodle Sel",
          "signature": "CanvasGeometry-\u003eDrawingFunction ContinuousPage SelectMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:drawContHoodleSel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "drawContPageGen",
          "package": "hoodle-core",
          "signature": "((PageNum, Page EditMode) -\u003e Maybe BBox -\u003e DrawFlag -\u003e Render (Int, Page EditMode)) -\u003e DrawingFunction ContinuousPage EditMode",
          "source": "src/Hoodle-View-Draw.html#drawContPageGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "drawContPageGen",
          "normalized": "((PageNum,Page EditMode)-\u003eMaybe BBox-\u003eDrawFlag-\u003eRender(Int,Page EditMode))-\u003eDrawingFunction ContinuousPage EditMode",
          "package": "hoodle-core",
          "partial": "Cont Page Gen",
          "signature": "((PageNum,Page EditMode)-\u003eMaybe BBox-\u003eDrawFlag-\u003eRender(Int,Page EditMode))-\u003eDrawingFunction ContinuousPage EditMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:drawContPageGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "drawContPageSelGen",
          "package": "hoodle-core",
          "signature": "((PageNum, Page EditMode) -\u003e Maybe BBox -\u003e DrawFlag -\u003e Render (Int, Page EditMode)) -\u003e ((PageNum, Page SelectMode) -\u003e Maybe BBox -\u003e DrawFlag -\u003e Render (Int, Page SelectMode)) -\u003e DrawingFunction ContinuousPage SelectMode",
          "source": "src/Hoodle-View-Draw.html#drawContPageSelGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "drawContPageSelGen",
          "normalized": "((PageNum,Page EditMode)-\u003eMaybe BBox-\u003eDrawFlag-\u003eRender(Int,Page EditMode))-\u003e((PageNum,Page SelectMode)-\u003eMaybe BBox-\u003eDrawFlag-\u003eRender(Int,Page SelectMode))-\u003eDrawingFunction ContinuousPage SelectMode",
          "package": "hoodle-core",
          "partial": "Cont Page Sel Gen",
          "signature": "((PageNum,Page EditMode)-\u003eMaybe BBox-\u003eDrawFlag-\u003eRender(Int,Page EditMode))-\u003e((PageNum,Page SelectMode)-\u003eMaybe BBox-\u003eDrawFlag-\u003eRender(Int,Page SelectMode))-\u003eDrawingFunction ContinuousPage SelectMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:drawContPageSelGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "drawCurvebitGen",
          "package": "hoodle-core",
          "signature": "PressureMode -\u003e DrawingArea -\u003e CanvasGeometry -\u003e Double -\u003e (Double, Double, Double, Double) -\u003e PageNum -\u003e Seq (Double, Double, Double) -\u003e ((Double, Double), Double) -\u003e ((Double, Double), Double) -\u003e IO ()",
          "source": "src/Hoodle-View-Draw.html#drawCurvebitGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "drawCurvebitGen",
          "normalized": "PressureMode-\u003eDrawingArea-\u003eCanvasGeometry-\u003eDouble-\u003e(Double,Double,Double,Double)-\u003ePageNum-\u003eSeq(Double,Double,Double)-\u003e((Double,Double),Double)-\u003e((Double,Double),Double)-\u003eIO()",
          "package": "hoodle-core",
          "partial": "Curvebit Gen",
          "signature": "PressureMode-\u003eDrawingArea-\u003eCanvasGeometry-\u003eDouble-\u003e(Double,Double,Double,Double)-\u003ePageNum-\u003eSeq(Double,Double,Double)-\u003e((Double,Double),Double)-\u003e((Double,Double),Double)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:drawCurvebitGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "drawFuncGen",
          "package": "hoodle-core",
          "signature": "em -\u003e ((PageNum, Page em) -\u003e Maybe BBox -\u003e DrawFlag -\u003e Render (Page em)) -\u003e DrawingFunction SinglePage em",
          "source": "src/Hoodle-View-Draw.html#drawFuncGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "drawFuncGen",
          "normalized": "a-\u003e((PageNum,Page a)-\u003eMaybe BBox-\u003eDrawFlag-\u003eRender(Page a))-\u003eDrawingFunction SinglePage a",
          "package": "hoodle-core",
          "partial": "Func Gen",
          "signature": "em-\u003e((PageNum,Page em)-\u003eMaybe BBox-\u003eDrawFlag-\u003eRender(Page em))-\u003eDrawingFunction SinglePage em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:drawFuncGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "drawFuncSelGen",
          "package": "hoodle-core",
          "signature": "((PageNum, Page SelectMode) -\u003e Maybe BBox -\u003e DrawFlag -\u003e Render ()) -\u003e ((PageNum, Page SelectMode) -\u003e Maybe BBox -\u003e DrawFlag -\u003e Render ()) -\u003e DrawingFunction SinglePage SelectMode",
          "source": "src/Hoodle-View-Draw.html#drawFuncSelGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "drawFuncSelGen",
          "normalized": "((PageNum,Page SelectMode)-\u003eMaybe BBox-\u003eDrawFlag-\u003eRender())-\u003e((PageNum,Page SelectMode)-\u003eMaybe BBox-\u003eDrawFlag-\u003eRender())-\u003eDrawingFunction SinglePage SelectMode",
          "package": "hoodle-core",
          "partial": "Func Sel Gen",
          "signature": "((PageNum,Page SelectMode)-\u003eMaybe BBox-\u003eDrawFlag-\u003eRender())-\u003e((PageNum,Page SelectMode)-\u003eMaybe BBox-\u003eDrawFlag-\u003eRender())-\u003eDrawingFunction SinglePage SelectMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:drawFuncSelGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "drawLayerWidget",
          "package": "hoodle-core",
          "signature": "Hoodle EditMode -\u003e CanvasInfo a -\u003e Maybe BBox -\u003e CanvasCoordinate -\u003e Render ()",
          "source": "src/Hoodle-View-Draw.html#drawLayerWidget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "drawLayerWidget",
          "normalized": "Hoodle EditMode-\u003eCanvasInfo a-\u003eMaybe BBox-\u003eCanvasCoordinate-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Layer Widget",
          "signature": "Hoodle EditMode-\u003eCanvasInfo a-\u003eMaybe BBox-\u003eCanvasCoordinate-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:drawLayerWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "drawSinglePage",
          "package": "hoodle-core",
          "signature": "DrawingFunction SinglePage EditMode",
          "source": "src/Hoodle-View-Draw.html#drawSinglePage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "drawSinglePage",
          "package": "hoodle-core",
          "partial": "Single Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:drawSinglePage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "drawSinglePageSel",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e DrawingFunction SinglePage SelectMode",
          "source": "src/Hoodle-View-Draw.html#drawSinglePageSel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "drawSinglePageSel",
          "normalized": "CanvasGeometry-\u003eDrawingFunction SinglePage SelectMode",
          "package": "hoodle-core",
          "partial": "Single Page Sel",
          "signature": "CanvasGeometry-\u003eDrawingFunction SinglePage SelectMode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:drawSinglePageSel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "drawWidgets",
          "package": "hoodle-core",
          "signature": "[WidgetItem] -\u003e Hoodle EditMode -\u003e CanvasInfo a -\u003e Maybe BBox -\u003e Render ()",
          "source": "src/Hoodle-View-Draw.html#drawWidgets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "drawWidgets",
          "normalized": "[WidgetItem]-\u003eHoodle EditMode-\u003eCanvasInfo a-\u003eMaybe BBox-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Widgets",
          "signature": "[WidgetItem]-\u003eHoodle EditMode-\u003eCanvasInfo a-\u003eMaybe BBox-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:drawWidgets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "emphasisCanvasRender",
          "package": "hoodle-core",
          "signature": "PenColor -\u003e CanvasGeometry -\u003e Render ()",
          "source": "src/Hoodle-View-Draw.html#emphasisCanvasRender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "emphasisCanvasRender",
          "normalized": "PenColor-\u003eCanvasGeometry-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Canvas Render",
          "signature": "PenColor-\u003eCanvasGeometry-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:emphasisCanvasRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehighlight notified item (like link)\n\u003c/p\u003e",
          "module": "Hoodle.View.Draw",
          "name": "emphasisNotifiedRender",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e (PageNum, BBox, RItem) -\u003e Render ()",
          "source": "src/Hoodle-View-Draw.html#emphasisNotifiedRender",
          "type": "function"
        },
        "index": {
          "description": "highlight notified item like link",
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "emphasisNotifiedRender",
          "normalized": "CanvasGeometry-\u003e(PageNum,BBox,RItem)-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Notified Render",
          "signature": "CanvasGeometry-\u003e(PageNum,BBox,RItem)-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:emphasisNotifiedRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehighlight current page\n\u003c/p\u003e",
          "module": "Hoodle.View.Draw",
          "name": "emphasisPageRender",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e (PageNum, Page EditMode) -\u003e Render ()",
          "source": "src/Hoodle-View-Draw.html#emphasisPageRender",
          "type": "function"
        },
        "index": {
          "description": "highlight current page",
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "emphasisPageRender",
          "normalized": "CanvasGeometry-\u003e(PageNum,Page EditMode)-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Page Render",
          "signature": "CanvasGeometry-\u003e(PageNum,Page EditMode)-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:emphasisPageRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "getBBoxInPageCoord",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e PageNum -\u003e BBox -\u003e BBox",
          "source": "src/Hoodle-View-Draw.html#getBBoxInPageCoord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "getBBoxInPageCoord",
          "normalized": "CanvasGeometry-\u003ePageNum-\u003eBBox-\u003eBBox",
          "package": "hoodle-core",
          "partial": "BBox In Page Coord",
          "signature": "CanvasGeometry-\u003ePageNum-\u003eBBox-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:getBBoxInPageCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "getCanvasViewPort",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e ViewPortBBox",
          "source": "src/Hoodle-View-Draw.html#getCanvasViewPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "getCanvasViewPort",
          "normalized": "CanvasGeometry-\u003eViewPortBBox",
          "package": "hoodle-core",
          "partial": "Canvas View Port",
          "signature": "CanvasGeometry-\u003eViewPortBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:getCanvasViewPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "getViewableBBox",
          "package": "hoodle-core",
          "signature": "CanvasGeometry-\u003e Maybe BBox-\u003e IntersectBBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "getViewableBBox",
          "normalized": "CanvasGeometry-\u003eMaybe BBox-\u003eIntersectBBox",
          "package": "hoodle-core",
          "partial": "Viewable BBox",
          "signature": "CanvasGeometry-\u003eMaybe BBox-\u003eIntersectBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:getViewableBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "renderBoxSelection",
          "package": "hoodle-core",
          "signature": "BBox -\u003e Render ()",
          "source": "src/Hoodle-View-Draw.html#renderBoxSelection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "renderBoxSelection",
          "normalized": "BBox-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Box Selection",
          "signature": "BBox-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:renderBoxSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "renderClockWidget",
          "package": "hoodle-core",
          "signature": "Maybe BBox -\u003e ClockWidgetConfig -\u003e Render ()",
          "source": "src/Hoodle-View-Draw.html#renderClockWidget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "renderClockWidget",
          "normalized": "Maybe BBox-\u003eClockWidgetConfig-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Clock Widget",
          "signature": "Maybe BBox-\u003eClockWidgetConfig-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:renderClockWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "renderLasso",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e Seq (Double, Double) -\u003e Render ()",
          "source": "src/Hoodle-View-Draw.html#renderLasso",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "renderLasso",
          "normalized": "CanvasGeometry-\u003eSeq(Double,Double)-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Lasso",
          "signature": "CanvasGeometry-\u003eSeq(Double,Double)-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:renderLasso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "renderLayerContent",
          "package": "hoodle-core",
          "signature": "Maybe BBox -\u003e Dimension -\u003e Surface -\u003e CanvasCoordinate -\u003e Render ()",
          "source": "src/Hoodle-View-Draw.html#renderLayerContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "renderLayerContent",
          "normalized": "Maybe BBox-\u003eDimension-\u003eSurface-\u003eCanvasCoordinate-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Layer Content",
          "signature": "Maybe BBox-\u003eDimension-\u003eSurface-\u003eCanvasCoordinate-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:renderLayerContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "renderLayerWidget",
          "package": "hoodle-core",
          "signature": "String -\u003e Maybe BBox -\u003e CanvasCoordinate -\u003e Render ()",
          "source": "src/Hoodle-View-Draw.html#renderLayerWidget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "renderLayerWidget",
          "normalized": "String-\u003eMaybe BBox-\u003eCanvasCoordinate-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Layer Widget",
          "signature": "String-\u003eMaybe BBox-\u003eCanvasCoordinate-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:renderLayerWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "renderPanZoomWidget",
          "package": "hoodle-core",
          "signature": "Bool -\u003e Maybe BBox -\u003e CanvasCoordinate -\u003e Render ()",
          "source": "src/Hoodle-View-Draw.html#renderPanZoomWidget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "renderPanZoomWidget",
          "normalized": "Bool-\u003eMaybe BBox-\u003eCanvasCoordinate-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Pan Zoom Widget",
          "signature": "Bool-\u003eMaybe BBox-\u003eCanvasCoordinate-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:renderPanZoomWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "renderSelectHandle",
          "package": "hoodle-core",
          "signature": "CanvasGeometry -\u003e BBox -\u003e Render ()",
          "source": "src/Hoodle-View-Draw.html#renderSelectHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "renderSelectHandle",
          "normalized": "CanvasGeometry-\u003eBBox-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Select Handle",
          "signature": "CanvasGeometry-\u003eBBox-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:renderSelectHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "renderSelectedItem",
          "package": "hoodle-core",
          "signature": "RItem -\u003e Render ()",
          "source": "src/Hoodle-View-Draw.html#renderSelectedItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "renderSelectedItem",
          "normalized": "RItem-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Selected Item",
          "signature": "RItem-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:renderSelectedItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "renderSelectedStroke",
          "package": "hoodle-core",
          "signature": "BBoxed Stroke -\u003e Render ()",
          "source": "src/Hoodle-View-Draw.html#renderSelectedStroke",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "renderSelectedStroke",
          "normalized": "BBoxed Stroke-\u003eRender()",
          "package": "hoodle-core",
          "partial": "Selected Stroke",
          "signature": "BBoxed Stroke-\u003eRender()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:renderSelectedStroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "unContPageDraw",
          "package": "hoodle-core",
          "signature": "Bool -\u003e CanvasInfo ContinuousPage -\u003e Maybe BBox -\u003e Hoodle a -\u003e DrawFlag -\u003e IO (Hoodle a)",
          "source": "src/Hoodle-View-Draw.html#ContPageDraw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "unContPageDraw",
          "normalized": "Bool-\u003eCanvasInfo ContinuousPage-\u003eMaybe BBox-\u003eHoodle a-\u003eDrawFlag-\u003eIO(Hoodle a)",
          "package": "hoodle-core",
          "partial": "Cont Page Draw",
          "signature": "Bool-\u003eCanvasInfo ContinuousPage-\u003eMaybe BBox-\u003eHoodle a-\u003eDrawFlag-\u003eIO(Hoodle a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:unContPageDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.View.Draw",
          "name": "unSinglePageDraw",
          "package": "hoodle-core",
          "signature": "Bool -\u003e (DrawingArea, Maybe Surface) -\u003e (PageNum, Page a) -\u003e ViewInfo SinglePage -\u003e Maybe BBox -\u003e DrawFlag -\u003e IO (Page a)",
          "source": "src/Hoodle-View-Draw.html#SinglePageDraw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "unSinglePageDraw",
          "normalized": "Bool-\u003e(DrawingArea,Maybe Surface)-\u003e(PageNum,Page a)-\u003eViewInfo SinglePage-\u003eMaybe BBox-\u003eDrawFlag-\u003eIO(Page a)",
          "package": "hoodle-core",
          "partial": "Single Page Draw",
          "signature": "Bool-\u003e(DrawingArea,Maybe Surface)-\u003e(PageNum,Page a)-\u003eViewInfo SinglePage-\u003eMaybe BBox-\u003eDrawFlag-\u003eIO(Page a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:unSinglePageDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edouble buffering within two image surfaces \n\u003c/p\u003e",
          "module": "Hoodle.View.Draw",
          "name": "virtualDoubleBufferDraw",
          "package": "hoodle-core",
          "signature": "Surface -\u003e Surface -\u003e Render () -\u003e Render () -\u003e m ()",
          "source": "src/Hoodle-View-Draw.html#virtualDoubleBufferDraw",
          "type": "function"
        },
        "index": {
          "description": "double buffering within two image surfaces",
          "hierarchy": "Hoodle View Draw",
          "module": "Hoodle.View.Draw",
          "name": "virtualDoubleBufferDraw",
          "normalized": "Surface-\u003eSurface-\u003eRender()-\u003eRender()-\u003ea()",
          "package": "hoodle-core",
          "partial": "Double Buffer Draw",
          "signature": "Surface-\u003eSurface-\u003eRender()-\u003eRender()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-View-Draw.html#v:virtualDoubleBufferDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClock widget drawing and action\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hoodle.Widget.Clock",
          "name": "Clock",
          "package": "hoodle-core",
          "source": "src/Hoodle-Widget-Clock.html",
          "type": "module"
        },
        "index": {
          "description": "Clock widget drawing and action",
          "hierarchy": "Hoodle Widget Clock",
          "module": "Hoodle.Widget.Clock",
          "name": "Clock",
          "package": "hoodle-core",
          "partial": "Clock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Clock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.Clock",
          "name": "CWAction",
          "package": "hoodle-core",
          "source": "src/Hoodle-Widget-Clock.html#CWAction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Widget Clock",
          "module": "Hoodle.Widget.Clock",
          "name": "CWAction",
          "package": "hoodle-core",
          "partial": "CWAction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Clock.html#t:CWAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.Clock",
          "name": "Move",
          "package": "hoodle-core",
          "signature": "Move (CanvasCoordinate, CanvasCoordinate)",
          "source": "src/Hoodle-Widget-Clock.html#CWAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget Clock",
          "module": "Hoodle.Widget.Clock",
          "name": "Move",
          "normalized": "Move(CanvasCoordinate,CanvasCoordinate)",
          "package": "hoodle-core",
          "partial": "Move",
          "signature": "Move(CanvasCoordinate,CanvasCoordinate)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Clock.html#v:Move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.Clock",
          "name": "checkPointerInClock",
          "package": "hoodle-core",
          "signature": "(CanvasId, CanvasInfo a, CanvasGeometry) -\u003e PointerCoord -\u003e Maybe CWAction",
          "source": "src/Hoodle-Widget-Clock.html#checkPointerInClock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget Clock",
          "module": "Hoodle.Widget.Clock",
          "name": "checkPointerInClock",
          "normalized": "(CanvasId,CanvasInfo a,CanvasGeometry)-\u003ePointerCoord-\u003eMaybe CWAction",
          "package": "hoodle-core",
          "partial": "Pointer In Clock",
          "signature": "(CanvasId,CanvasInfo a,CanvasGeometry)-\u003ePointerCoord-\u003eMaybe CWAction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Clock.html#v:checkPointerInClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emain event loop for clock widget\n\u003c/p\u003e",
          "module": "Hoodle.Widget.Clock",
          "name": "manipulateCW",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e CanvasGeometry -\u003e (Surface, Surface) -\u003e CanvasCoordinate -\u003e CanvasCoordinate -\u003e UTCTime -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Widget-Clock.html#manipulateCW",
          "type": "function"
        },
        "index": {
          "description": "main event loop for clock widget",
          "hierarchy": "Hoodle Widget Clock",
          "module": "Hoodle.Widget.Clock",
          "name": "manipulateCW",
          "normalized": "CanvasId-\u003eCanvasGeometry-\u003e(Surface,Surface)-\u003eCanvasCoordinate-\u003eCanvasCoordinate-\u003eUTCTime-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "CW",
          "signature": "CanvasId-\u003eCanvasGeometry-\u003e(Surface,Surface)-\u003eCanvasCoordinate-\u003eCanvasCoordinate-\u003eUTCTime-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Clock.html#v:manipulateCW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.Clock",
          "name": "moveClockWidget",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e CanvasGeometry -\u003e (Surface, Surface) -\u003e CanvasCoordinate -\u003e CanvasCoordinate -\u003e PointerCoord -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Widget-Clock.html#moveClockWidget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget Clock",
          "module": "Hoodle.Widget.Clock",
          "name": "moveClockWidget",
          "normalized": "CanvasId-\u003eCanvasGeometry-\u003e(Surface,Surface)-\u003eCanvasCoordinate-\u003eCanvasCoordinate-\u003ePointerCoord-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Clock Widget",
          "signature": "CanvasId-\u003eCanvasGeometry-\u003e(Surface,Surface)-\u003eCanvasCoordinate-\u003eCanvasCoordinate-\u003ePointerCoord-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Clock.html#v:moveClockWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.Clock",
          "name": "startClockWidget",
          "package": "hoodle-core",
          "signature": "(CanvasId, CanvasInfo a, CanvasGeometry) -\u003e CWAction -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Widget-Clock.html#startClockWidget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget Clock",
          "module": "Hoodle.Widget.Clock",
          "name": "startClockWidget",
          "normalized": "(CanvasId,CanvasInfo a,CanvasGeometry)-\u003eCWAction-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Clock Widget",
          "signature": "(CanvasId,CanvasInfo a,CanvasGeometry)-\u003eCWAction-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Clock.html#v:startClockWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.Clock",
          "name": "toggleClock",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Widget-Clock.html#toggleClock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget Clock",
          "module": "Hoodle.Widget.Clock",
          "name": "toggleClock",
          "normalized": "CanvasId-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Clock",
          "signature": "CanvasId-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Clock.html#v:toggleClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.Dispatch",
          "name": "Dispatch",
          "package": "hoodle-core",
          "source": "src/Hoodle-Widget-Dispatch.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hoodle Widget Dispatch",
          "module": "Hoodle.Widget.Dispatch",
          "name": "Dispatch",
          "package": "hoodle-core",
          "partial": "Dispatch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Dispatch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.Dispatch",
          "name": "widgetCheckPen",
          "package": "hoodle-core",
          "signature": "CanvasId-\u003e PointerCoord-\u003e MainCoroutine ()-\u003e MainCoroutine ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget Dispatch",
          "module": "Hoodle.Widget.Dispatch",
          "name": "widgetCheckPen",
          "normalized": "CanvasId-\u003ePointerCoord-\u003eMainCoroutine()-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Check Pen",
          "signature": "CanvasId-\u003ePointerCoord-\u003eMainCoroutine()-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Dispatch.html#v:widgetCheckPen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLayer widget\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hoodle.Widget.Layer",
          "name": "Layer",
          "package": "hoodle-core",
          "source": "src/Hoodle-Widget-Layer.html",
          "type": "module"
        },
        "index": {
          "description": "Layer widget",
          "hierarchy": "Hoodle Widget Layer",
          "module": "Hoodle.Widget.Layer",
          "name": "Layer",
          "package": "hoodle-core",
          "partial": "Layer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Layer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.Layer",
          "name": "LWAction",
          "package": "hoodle-core",
          "source": "src/Hoodle-Widget-Layer.html#LWAction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Widget Layer",
          "module": "Hoodle.Widget.Layer",
          "name": "LWAction",
          "package": "hoodle-core",
          "partial": "LWAction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Layer.html#t:LWAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.Layer",
          "name": "Close",
          "package": "hoodle-core",
          "signature": "Close",
          "source": "src/Hoodle-Widget-Layer.html#LWAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget Layer",
          "module": "Hoodle.Widget.Layer",
          "name": "Close",
          "package": "hoodle-core",
          "partial": "Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Layer.html#v:Close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.Layer",
          "name": "Move",
          "package": "hoodle-core",
          "signature": "Move (CanvasCoordinate, CanvasCoordinate)",
          "source": "src/Hoodle-Widget-Layer.html#LWAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget Layer",
          "module": "Hoodle.Widget.Layer",
          "name": "Move",
          "normalized": "Move(CanvasCoordinate,CanvasCoordinate)",
          "package": "hoodle-core",
          "partial": "Move",
          "signature": "Move(CanvasCoordinate,CanvasCoordinate)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Layer.html#v:Move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.Layer",
          "name": "ToggleShowContent",
          "package": "hoodle-core",
          "signature": "ToggleShowContent",
          "source": "src/Hoodle-Widget-Layer.html#LWAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget Layer",
          "module": "Hoodle.Widget.Layer",
          "name": "ToggleShowContent",
          "package": "hoodle-core",
          "partial": "Toggle Show Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Layer.html#v:ToggleShowContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.Layer",
          "name": "checkPointerInLayer",
          "package": "hoodle-core",
          "signature": "(CanvasId, CanvasInfo a, CanvasGeometry) -\u003e PointerCoord -\u003e Maybe LWAction",
          "source": "src/Hoodle-Widget-Layer.html#checkPointerInLayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget Layer",
          "module": "Hoodle.Widget.Layer",
          "name": "checkPointerInLayer",
          "normalized": "(CanvasId,CanvasInfo a,CanvasGeometry)-\u003ePointerCoord-\u003eMaybe LWAction",
          "package": "hoodle-core",
          "partial": "Pointer In Layer",
          "signature": "(CanvasId,CanvasInfo a,CanvasGeometry)-\u003ePointerCoord-\u003eMaybe LWAction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Layer.html#v:checkPointerInLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emain event loop for layer widget\n\u003c/p\u003e",
          "module": "Hoodle.Widget.Layer",
          "name": "manipulateLW",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e CanvasGeometry -\u003e (Surface, Surface) -\u003e CanvasCoordinate -\u003e CanvasCoordinate -\u003e UTCTime -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Widget-Layer.html#manipulateLW",
          "type": "function"
        },
        "index": {
          "description": "main event loop for layer widget",
          "hierarchy": "Hoodle Widget Layer",
          "module": "Hoodle.Widget.Layer",
          "name": "manipulateLW",
          "normalized": "CanvasId-\u003eCanvasGeometry-\u003e(Surface,Surface)-\u003eCanvasCoordinate-\u003eCanvasCoordinate-\u003eUTCTime-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "LW",
          "signature": "CanvasId-\u003eCanvasGeometry-\u003e(Surface,Surface)-\u003eCanvasCoordinate-\u003eCanvasCoordinate-\u003eUTCTime-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Layer.html#v:manipulateLW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.Layer",
          "name": "moveLayerWidget",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e CanvasGeometry -\u003e (Surface, Surface) -\u003e CanvasCoordinate -\u003e CanvasCoordinate -\u003e PointerCoord -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Widget-Layer.html#moveLayerWidget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget Layer",
          "module": "Hoodle.Widget.Layer",
          "name": "moveLayerWidget",
          "normalized": "CanvasId-\u003eCanvasGeometry-\u003e(Surface,Surface)-\u003eCanvasCoordinate-\u003eCanvasCoordinate-\u003ePointerCoord-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Layer Widget",
          "signature": "CanvasId-\u003eCanvasGeometry-\u003e(Surface,Surface)-\u003eCanvasCoordinate-\u003eCanvasCoordinate-\u003ePointerCoord-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Layer.html#v:moveLayerWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.Layer",
          "name": "startLayerWidget",
          "package": "hoodle-core",
          "signature": "(CanvasId, CanvasInfo a, CanvasGeometry) -\u003e LWAction -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Widget-Layer.html#startLayerWidget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget Layer",
          "module": "Hoodle.Widget.Layer",
          "name": "startLayerWidget",
          "normalized": "(CanvasId,CanvasInfo a,CanvasGeometry)-\u003eLWAction-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Layer Widget",
          "signature": "(CanvasId,CanvasInfo a,CanvasGeometry)-\u003eLWAction-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Layer.html#v:startLayerWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.Layer",
          "name": "toggleLayer",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Widget-Layer.html#toggleLayer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget Layer",
          "module": "Hoodle.Widget.Layer",
          "name": "toggleLayer",
          "normalized": "CanvasId-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Layer",
          "signature": "CanvasId-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-Layer.html#v:toggleLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePan-Zoom widget drawing and action\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hoodle.Widget.PanZoom",
          "name": "PanZoom",
          "package": "hoodle-core",
          "source": "src/Hoodle-Widget-PanZoom.html",
          "type": "module"
        },
        "index": {
          "description": "Pan-Zoom widget drawing and action",
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "PanZoom",
          "package": "hoodle-core",
          "partial": "Pan Zoom",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.PanZoom",
          "name": "PanZoomMode",
          "package": "hoodle-core",
          "source": "src/Hoodle-Widget-PanZoom.html#PanZoomMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "PanZoomMode",
          "package": "hoodle-core",
          "partial": "Pan Zoom Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#t:PanZoomMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.PanZoom",
          "name": "PanZoomTouch",
          "package": "hoodle-core",
          "source": "src/Hoodle-Widget-PanZoom.html#PanZoomTouch",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "PanZoomTouch",
          "package": "hoodle-core",
          "partial": "Pan Zoom Touch",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#t:PanZoomTouch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.PanZoom",
          "name": "Moving",
          "package": "hoodle-core",
          "signature": "Moving",
          "source": "src/Hoodle-Widget-PanZoom.html#PanZoomMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "Moving",
          "package": "hoodle-core",
          "partial": "Moving",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#v:Moving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.PanZoom",
          "name": "Panning",
          "package": "hoodle-core",
          "signature": "Panning Bool",
          "source": "src/Hoodle-Widget-PanZoom.html#PanZoomMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "Panning",
          "package": "hoodle-core",
          "partial": "Panning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#v:Panning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.PanZoom",
          "name": "PenMode",
          "package": "hoodle-core",
          "signature": "PenMode",
          "source": "src/Hoodle-Widget-PanZoom.html#PanZoomTouch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "PenMode",
          "package": "hoodle-core",
          "partial": "Pen Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#v:PenMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.PanZoom",
          "name": "TouchMode",
          "package": "hoodle-core",
          "signature": "TouchMode",
          "source": "src/Hoodle-Widget-PanZoom.html#PanZoomTouch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "TouchMode",
          "package": "hoodle-core",
          "partial": "Touch Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#v:TouchMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.PanZoom",
          "name": "Zooming",
          "package": "hoodle-core",
          "signature": "Zooming",
          "source": "src/Hoodle-Widget-PanZoom.html#PanZoomMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "Zooming",
          "package": "hoodle-core",
          "partial": "Zooming",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#v:Zooming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.PanZoom",
          "name": "checkPointerInPanZoom",
          "package": "hoodle-core",
          "signature": "(CanvasId, CanvasInfo a, CanvasGeometry) -\u003e PointerCoord -\u003e Maybe (Maybe (PanZoomMode, (CanvasCoordinate, CanvasCoordinate)))",
          "source": "src/Hoodle-Widget-PanZoom.html#checkPointerInPanZoom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "checkPointerInPanZoom",
          "normalized": "(CanvasId,CanvasInfo a,CanvasGeometry)-\u003ePointerCoord-\u003eMaybe(Maybe(PanZoomMode,(CanvasCoordinate,CanvasCoordinate)))",
          "package": "hoodle-core",
          "partial": "Pointer In Pan Zoom",
          "signature": "(CanvasId,CanvasInfo a,CanvasGeometry)-\u003ePointerCoord-\u003eMaybe(Maybe(PanZoomMode,(CanvasCoordinate,CanvasCoordinate)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#v:checkPointerInPanZoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.PanZoom",
          "name": "findPanXform",
          "package": "hoodle-core",
          "signature": "Dimension -\u003e ((Double, Double), (Double, Double)) -\u003e (Double, Double)",
          "source": "src/Hoodle-Widget-PanZoom.html#findPanXform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "findPanXform",
          "normalized": "Dimension-\u003e((Double,Double),(Double,Double))-\u003e(Double,Double)",
          "package": "hoodle-core",
          "partial": "Pan Xform",
          "signature": "Dimension-\u003e((Double,Double),(Double,Double))-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#v:findPanXform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.PanZoom",
          "name": "findZoomXform",
          "package": "hoodle-core",
          "signature": "Dimension -\u003e ((Double, Double), (Double, Double), (Double, Double)) -\u003e (Double, (Double, Double))",
          "source": "src/Hoodle-Widget-PanZoom.html#findZoomXform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "findZoomXform",
          "normalized": "Dimension-\u003e((Double,Double),(Double,Double),(Double,Double))-\u003e(Double,(Double,Double))",
          "package": "hoodle-core",
          "partial": "Zoom Xform",
          "signature": "Dimension-\u003e((Double,Double),(Double,Double),(Double,Double))-\u003e(Double,(Double,Double))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#v:findZoomXform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emanipulate Pan-Zoom widget until released when grabbing the widget\n\u003c/p\u003e",
          "module": "Hoodle.Widget.PanZoom",
          "name": "manipulatePZW",
          "package": "hoodle-core",
          "signature": "(PanZoomTouch, PanZoomMode)-\u003e CanvasId-\u003e CanvasGeometry-\u003e (Surface, Surface)-\u003e CanvasCoordinate-\u003e CanvasCoordinate-\u003e UTCTime-\u003e MainCoroutine ()",
          "type": "function"
        },
        "index": {
          "description": "manipulate Pan-Zoom widget until released when grabbing the widget",
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "manipulatePZW",
          "normalized": "(PanZoomTouch,PanZoomMode)-\u003eCanvasId-\u003eCanvasGeometry-\u003e(Surface,Surface)-\u003eCanvasCoordinate-\u003eCanvasCoordinate-\u003eUTCTime-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "PZW",
          "signature": "(PanZoomTouch,PanZoomMode)-\u003eCanvasId-\u003eCanvasGeometry-\u003e(Surface,Surface)-\u003eCanvasCoordinate-\u003eCanvasCoordinate-\u003eUTCTime-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#v:manipulatePZW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.PanZoom",
          "name": "movingRender",
          "package": "hoodle-core",
          "signature": "PanZoomMode -\u003e CanvasId -\u003e CanvasGeometry -\u003e (Surface, Surface) -\u003e CanvasCoordinate -\u003e CanvasCoordinate -\u003e PointerCoord -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Widget-PanZoom.html#movingRender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "movingRender",
          "normalized": "PanZoomMode-\u003eCanvasId-\u003eCanvasGeometry-\u003e(Surface,Surface)-\u003eCanvasCoordinate-\u003eCanvasCoordinate-\u003ePointerCoord-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Render",
          "signature": "PanZoomMode-\u003eCanvasId-\u003eCanvasGeometry-\u003e(Surface,Surface)-\u003eCanvasCoordinate-\u003eCanvasCoordinate-\u003ePointerCoord-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#v:movingRender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.PanZoom",
          "name": "startPanZoomWidget",
          "package": "hoodle-core",
          "signature": "PanZoomTouch -\u003e (CanvasId, CanvasInfo a, CanvasGeometry) -\u003e Maybe (PanZoomMode, (CanvasCoordinate, CanvasCoordinate)) -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Widget-PanZoom.html#startPanZoomWidget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "startPanZoomWidget",
          "normalized": "PanZoomTouch-\u003e(CanvasId,CanvasInfo a,CanvasGeometry)-\u003eMaybe(PanZoomMode,(CanvasCoordinate,CanvasCoordinate))-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Pan Zoom Widget",
          "signature": "PanZoomTouch-\u003e(CanvasId,CanvasInfo a,CanvasGeometry)-\u003eMaybe(PanZoomMode,(CanvasCoordinate,CanvasCoordinate))-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#v:startPanZoomWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.PanZoom",
          "name": "togglePanZoom",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Widget-PanZoom.html#togglePanZoom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "togglePanZoom",
          "normalized": "CanvasId-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Pan Zoom",
          "signature": "CanvasId-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#v:togglePanZoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.PanZoom",
          "name": "toggleTouch",
          "package": "hoodle-core",
          "signature": "MainCoroutine ()",
          "source": "src/Hoodle-Widget-PanZoom.html#toggleTouch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "toggleTouch",
          "normalized": "MainCoroutine()",
          "package": "hoodle-core",
          "partial": "Touch",
          "signature": "MainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#v:toggleTouch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hoodle.Widget.PanZoom",
          "name": "touchStart",
          "package": "hoodle-core",
          "signature": "CanvasId -\u003e PointerCoord -\u003e MainCoroutine ()",
          "source": "src/Hoodle-Widget-PanZoom.html#touchStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hoodle Widget PanZoom",
          "module": "Hoodle.Widget.PanZoom",
          "name": "touchStart",
          "normalized": "CanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "package": "hoodle-core",
          "partial": "Start",
          "signature": "CanvasId-\u003ePointerCoord-\u003eMainCoroutine()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hoodle-core/docs/Hoodle-Widget-PanZoom.html#v:touchStart"
      }
    }
  ]
]