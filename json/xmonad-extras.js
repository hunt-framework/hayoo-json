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
        "word": "xmonad-extras"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvaluate haskell expressions at runtime in the running xmonad instance.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "XMonad.Actions.Eval",
          "name": "Eval",
          "package": "xmonad-extras",
          "source": "src/XMonad-Actions-Eval.html",
          "type": "module"
        },
        "index": {
          "description": "Evaluate haskell expressions at runtime in the running xmonad instance",
          "hierarchy": "XMonad Actions Eval",
          "module": "XMonad.Actions.Eval",
          "name": "Eval",
          "package": "xmonad-extras",
          "partial": "Eval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Eval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration structure\n\u003c/p\u003e",
          "module": "XMonad.Actions.Eval",
          "name": "EvalConfig",
          "package": "xmonad-extras",
          "source": "src/XMonad-Actions-Eval.html#EvalConfig",
          "type": "data"
        },
        "index": {
          "description": "Configuration structure",
          "hierarchy": "XMonad Actions Eval",
          "module": "XMonad.Actions.Eval",
          "name": "EvalConfig",
          "package": "xmonad-extras",
          "partial": "Eval Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Eval.html#t:EvalConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Actions.Eval",
          "name": "EvalConfig",
          "package": "xmonad-extras",
          "signature": "EvalConfig",
          "source": "src/XMonad-Actions-Eval.html#EvalConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Actions Eval",
          "module": "XMonad.Actions.Eval",
          "name": "EvalConfig",
          "package": "xmonad-extras",
          "partial": "Eval Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Eval.html#v:EvalConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefaults for evaluating expressions.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Eval",
          "name": "defaultEvalConfig",
          "package": "xmonad-extras",
          "signature": "EvalConfig",
          "source": "src/XMonad-Actions-Eval.html#defaultEvalConfig",
          "type": "function"
        },
        "index": {
          "description": "Defaults for evaluating expressions",
          "hierarchy": "XMonad Actions Eval",
          "module": "XMonad.Actions.Eval",
          "name": "defaultEvalConfig",
          "package": "xmonad-extras",
          "partial": "Eval Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Eval.html#v:defaultEvalConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates a given expression, but discard the returned value. Provided for\n more convenient use in keybindings\n\u003c/p\u003e",
          "module": "XMonad.Actions.Eval",
          "name": "evalExpression",
          "package": "xmonad-extras",
          "signature": "EvalConfig -\u003e String -\u003e X ()",
          "source": "src/XMonad-Actions-Eval.html#evalExpression",
          "type": "function"
        },
        "index": {
          "description": "Evaluates given expression but discard the returned value Provided for more convenient use in keybindings",
          "hierarchy": "XMonad Actions Eval",
          "module": "XMonad.Actions.Eval",
          "name": "evalExpression",
          "normalized": "EvalConfig-\u003eString-\u003eX()",
          "package": "xmonad-extras",
          "partial": "Expression",
          "signature": "EvalConfig-\u003eString-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Eval.html#v:evalExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates a given expression whose result type has to be an instance of Show\n\u003c/p\u003e",
          "module": "XMonad.Actions.Eval",
          "name": "evalExpressionWithReturn",
          "package": "xmonad-extras",
          "signature": "EvalConfig -\u003e String -\u003e X String",
          "source": "src/XMonad-Actions-Eval.html#evalExpressionWithReturn",
          "type": "function"
        },
        "index": {
          "description": "Evaluates given expression whose result type has to be an instance of Show",
          "hierarchy": "XMonad Actions Eval",
          "module": "XMonad.Actions.Eval",
          "name": "evalExpressionWithReturn",
          "normalized": "EvalConfig-\u003eString-\u003eX String",
          "package": "xmonad-extras",
          "partial": "Expression With Return",
          "signature": "EvalConfig-\u003eString-\u003eX String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Eval.html#v:evalExpressionWithReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to handle errors\n\u003c/p\u003e",
          "module": "XMonad.Actions.Eval",
          "name": "handleError",
          "package": "xmonad-extras",
          "signature": "InterpreterError -\u003e X String",
          "source": "src/XMonad-Actions-Eval.html#EvalConfig",
          "type": "function"
        },
        "index": {
          "description": "Function to handle errors",
          "hierarchy": "XMonad Actions Eval",
          "module": "XMonad.Actions.Eval",
          "name": "handleError",
          "normalized": "InterpreterError-\u003eX String",
          "package": "xmonad-extras",
          "partial": "Error",
          "signature": "InterpreterError-\u003eX String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Eval.html#v:handleError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModules to import for interpreting the expression.\n The pair consists of the module name and an optional\n qualification of the imported module.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Eval",
          "name": "imports",
          "package": "xmonad-extras",
          "signature": "[(ModuleName, Maybe String)]",
          "source": "src/XMonad-Actions-Eval.html#EvalConfig",
          "type": "function"
        },
        "index": {
          "description": "Modules to import for interpreting the expression The pair consists of the module name and an optional qualification of the imported module",
          "hierarchy": "XMonad Actions Eval",
          "module": "XMonad.Actions.Eval",
          "name": "imports",
          "normalized": "[(ModuleName,Maybe String)]",
          "package": "xmonad-extras",
          "signature": "[(ModuleName,Maybe String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Eval.html#v:imports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOther source files that should be loaded\n The definitions of these modules will be visible\n regardless of whether they are exported.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Eval",
          "name": "modules",
          "package": "xmonad-extras",
          "signature": "[String]",
          "source": "src/XMonad-Actions-Eval.html#EvalConfig",
          "type": "function"
        },
        "index": {
          "description": "Other source files that should be loaded The definitions of these modules will be visible regardless of whether they are exported",
          "hierarchy": "XMonad Actions Eval",
          "module": "XMonad.Actions.Eval",
          "name": "modules",
          "normalized": "[String]",
          "package": "xmonad-extras",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Eval.html#v:modules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA minimal interface to the \"amixer\" command-line utility.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "XMonad.Actions.Volume",
          "name": "Volume",
          "package": "xmonad-extras",
          "source": "src/XMonad-Actions-Volume.html",
          "type": "module"
        },
        "index": {
          "description": "minimal interface to the amixer command-line utility",
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "Volume",
          "package": "xmonad-extras",
          "partial": "Volume",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChannels are what amixer calls \"simple controls\".  The most common ones are \"Master\", \"Wave\", and \"PCM\", so these are included in \u003ccode\u003e\u003ca\u003edefaultChannels\u003c/a\u003e\u003c/code\u003e.  It is guaranteed to be safe to pass channel names that don't exist on the default sound device to the *Channels family of functions.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Volume",
          "name": "defaultChannels",
          "package": "xmonad-extras",
          "signature": "[String]",
          "source": "src/XMonad-Actions-Volume.html#defaultChannels",
          "type": "function"
        },
        "index": {
          "description": "Channels are what amixer calls simple controls The most common ones are Master Wave and PCM so these are included in defaultChannels It is guaranteed to be safe to pass channel names that don exist on the default sound device to the Channels family of functions",
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "defaultChannels",
          "normalized": "[String]",
          "package": "xmonad-extras",
          "partial": "Channels",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:defaultChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault options for displaying the volume.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Volume",
          "name": "defaultOSDOpts",
          "package": "xmonad-extras",
          "signature": "Bool -\u003e String",
          "source": "src/XMonad-Actions-Volume.html#defaultOSDOpts",
          "type": "function"
        },
        "index": {
          "description": "Default options for displaying the volume",
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "defaultOSDOpts",
          "normalized": "Bool-\u003eString",
          "package": "xmonad-extras",
          "partial": "OSDOpts",
          "signature": "Bool-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:defaultOSDOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the mutedness of the default channels.  Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if any of the channels are muted, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Volume",
          "name": "getMute",
          "package": "xmonad-extras",
          "signature": "m Bool",
          "source": "src/XMonad-Actions-Volume.html#getMute",
          "type": "function"
        },
        "index": {
          "description": "Get the mutedness of the default channels Returns True if any of the channels are muted and False otherwise",
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "getMute",
          "package": "xmonad-extras",
          "partial": "Mute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:getMute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Actions.Volume",
          "name": "getMuteChannels",
          "package": "xmonad-extras",
          "signature": "[String] -\u003e m Bool",
          "source": "src/XMonad-Actions-Volume.html#getMuteChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "getMuteChannels",
          "normalized": "[String]-\u003ea Bool",
          "package": "xmonad-extras",
          "partial": "Mute Channels",
          "signature": "[String]-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:getMuteChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the geometric mean of the volumes on the default channels.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Volume",
          "name": "getVolume",
          "package": "xmonad-extras",
          "signature": "m Double",
          "source": "src/XMonad-Actions-Volume.html#getVolume",
          "type": "function"
        },
        "index": {
          "description": "Get the geometric mean of the volumes on the default channels",
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "getVolume",
          "package": "xmonad-extras",
          "partial": "Volume",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:getVolume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Actions.Volume",
          "name": "getVolumeChannels",
          "package": "xmonad-extras",
          "signature": "[String] -\u003e m Double",
          "source": "src/XMonad-Actions-Volume.html#getVolumeChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "getVolumeChannels",
          "normalized": "[String]-\u003ea Double",
          "package": "xmonad-extras",
          "partial": "Volume Channels",
          "signature": "[String]-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:getVolumeChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet both the volume and the mutedness of the default channels.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Volume",
          "name": "getVolumeMute",
          "package": "xmonad-extras",
          "signature": "m (Double, Bool)",
          "source": "src/XMonad-Actions-Volume.html#getVolumeMute",
          "type": "function"
        },
        "index": {
          "description": "Get both the volume and the mutedness of the default channels",
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "getVolumeMute",
          "normalized": "a(Double,Bool)",
          "package": "xmonad-extras",
          "partial": "Volume Mute",
          "signature": "m(Double,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:getVolumeMute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Actions.Volume",
          "name": "getVolumeMuteChannels",
          "package": "xmonad-extras",
          "signature": "[String] -\u003e m (Double, Bool)",
          "source": "src/XMonad-Actions-Volume.html#getVolumeMuteChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "getVolumeMuteChannels",
          "normalized": "[String]-\u003ea(Double,Bool)",
          "package": "xmonad-extras",
          "partial": "Volume Mute Channels",
          "signature": "[String]-\u003em(Double,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:getVolumeMuteChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower the volume on the default channels the given number of percentage points.  Returns the volume it attempts to set.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Volume",
          "name": "lowerVolume",
          "package": "xmonad-extras",
          "signature": "Double -\u003e m Double",
          "source": "src/XMonad-Actions-Volume.html#lowerVolume",
          "type": "function"
        },
        "index": {
          "description": "Lower the volume on the default channels the given number of percentage points Returns the volume it attempts to set",
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "lowerVolume",
          "normalized": "Double-\u003ea Double",
          "package": "xmonad-extras",
          "partial": "Volume",
          "signature": "Double-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:lowerVolume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Actions.Volume",
          "name": "lowerVolumeChannels",
          "package": "xmonad-extras",
          "signature": "[String] -\u003e Double -\u003e m Double",
          "source": "src/XMonad-Actions-Volume.html#lowerVolumeChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "lowerVolumeChannels",
          "normalized": "[String]-\u003eDouble-\u003ea Double",
          "package": "xmonad-extras",
          "partial": "Volume Channels",
          "signature": "[String]-\u003eDouble-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:lowerVolumeChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the muting on the default channels, and return the modified value.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Volume",
          "name": "modifyMute",
          "package": "xmonad-extras",
          "signature": "(Bool -\u003e Bool) -\u003e m Bool",
          "source": "src/XMonad-Actions-Volume.html#modifyMute",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the muting on the default channels and return the modified value",
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "modifyMute",
          "normalized": "(Bool-\u003eBool)-\u003ea Bool",
          "package": "xmonad-extras",
          "partial": "Mute",
          "signature": "(Bool-\u003eBool)-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:modifyMute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Actions.Volume",
          "name": "modifyMuteChannels",
          "package": "xmonad-extras",
          "signature": "[String] -\u003e (Bool -\u003e Bool) -\u003e m Bool",
          "source": "src/XMonad-Actions-Volume.html#modifyMuteChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "modifyMuteChannels",
          "normalized": "[String]-\u003e(Bool-\u003eBool)-\u003ea Bool",
          "package": "xmonad-extras",
          "partial": "Mute Channels",
          "signature": "[String]-\u003e(Bool-\u003eBool)-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:modifyMuteChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the volume of the default channels, and return the modified value.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Volume",
          "name": "modifyVolume",
          "package": "xmonad-extras",
          "signature": "(Double -\u003e Double) -\u003e m Double",
          "source": "src/XMonad-Actions-Volume.html#modifyVolume",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the volume of the default channels and return the modified value",
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "modifyVolume",
          "normalized": "(Double-\u003eDouble)-\u003ea Double",
          "package": "xmonad-extras",
          "partial": "Volume",
          "signature": "(Double-\u003eDouble)-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:modifyVolume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Actions.Volume",
          "name": "modifyVolumeChannels",
          "package": "xmonad-extras",
          "signature": "[String] -\u003e (Double -\u003e Double) -\u003e m Double",
          "source": "src/XMonad-Actions-Volume.html#modifyVolumeChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "modifyVolumeChannels",
          "normalized": "[String]-\u003e(Double-\u003eDouble)-\u003ea Double",
          "package": "xmonad-extras",
          "partial": "Volume Channels",
          "signature": "[String]-\u003e(Double-\u003eDouble)-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:modifyVolumeChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to both the volume and the muting of the default channels, and return the modified values.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Volume",
          "name": "modifyVolumeMute",
          "package": "xmonad-extras",
          "signature": "(Double -\u003e Bool -\u003e (Double, Bool)) -\u003e m (Double, Bool)",
          "source": "src/XMonad-Actions-Volume.html#modifyVolumeMute",
          "type": "function"
        },
        "index": {
          "description": "Apply function to both the volume and the muting of the default channels and return the modified values",
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "modifyVolumeMute",
          "normalized": "(Double-\u003eBool-\u003e(Double,Bool))-\u003ea(Double,Bool)",
          "package": "xmonad-extras",
          "partial": "Volume Mute",
          "signature": "(Double-\u003eBool-\u003e(Double,Bool))-\u003em(Double,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:modifyVolumeMute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Actions.Volume",
          "name": "modifyVolumeMuteChannels",
          "package": "xmonad-extras",
          "signature": "[String] -\u003e (Double -\u003e Bool -\u003e (Double, Bool)) -\u003e m (Double, Bool)",
          "source": "src/XMonad-Actions-Volume.html#modifyVolumeMuteChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "modifyVolumeMuteChannels",
          "normalized": "[String]-\u003e(Double-\u003eBool-\u003e(Double,Bool))-\u003ea(Double,Bool)",
          "package": "xmonad-extras",
          "partial": "Volume Mute Channels",
          "signature": "[String]-\u003e(Double-\u003eBool-\u003e(Double,Bool))-\u003em(Double,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:modifyVolumeMuteChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to output current volume via osd_cat.  (Needs the osd_cat executable).\n The second parameter is passed True when the speakers are muted and should\n return the options to pass to osd_cat.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Volume",
          "name": "osdCat",
          "package": "xmonad-extras",
          "signature": "Double -\u003e (Bool -\u003e String) -\u003e m ()",
          "source": "src/XMonad-Actions-Volume.html#osdCat",
          "type": "function"
        },
        "index": {
          "description": "Helper function to output current volume via osd cat Needs the osd cat executable The second parameter is passed True when the speakers are muted and should return the options to pass to osd cat",
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "osdCat",
          "normalized": "Double-\u003e(Bool-\u003eString)-\u003ea()",
          "package": "xmonad-extras",
          "partial": "Cat",
          "signature": "Double-\u003e(Bool-\u003eString)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:osdCat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise the volume on the default channels the given number of percentage points.  Returns the volume it attempts to set.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Volume",
          "name": "raiseVolume",
          "package": "xmonad-extras",
          "signature": "Double -\u003e m Double",
          "source": "src/XMonad-Actions-Volume.html#raiseVolume",
          "type": "function"
        },
        "index": {
          "description": "Raise the volume on the default channels the given number of percentage points Returns the volume it attempts to set",
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "raiseVolume",
          "normalized": "Double-\u003ea Double",
          "package": "xmonad-extras",
          "partial": "Volume",
          "signature": "Double-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:raiseVolume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Actions.Volume",
          "name": "raiseVolumeChannels",
          "package": "xmonad-extras",
          "signature": "[String] -\u003e Double -\u003e m Double",
          "source": "src/XMonad-Actions-Volume.html#raiseVolumeChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "raiseVolumeChannels",
          "normalized": "[String]-\u003eDouble-\u003ea Double",
          "package": "xmonad-extras",
          "partial": "Volume Channels",
          "signature": "[String]-\u003eDouble-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:raiseVolumeChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to set the muting on the default channels.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Volume",
          "name": "setMute",
          "package": "xmonad-extras",
          "signature": "Bool -\u003e m ()",
          "source": "src/XMonad-Actions-Volume.html#setMute",
          "type": "function"
        },
        "index": {
          "description": "Attempt to set the muting on the default channels",
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "setMute",
          "normalized": "Bool-\u003ea()",
          "package": "xmonad-extras",
          "partial": "Mute",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:setMute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Actions.Volume",
          "name": "setMuteChannels",
          "package": "xmonad-extras",
          "signature": "[String] -\u003e Bool -\u003e m ()",
          "source": "src/XMonad-Actions-Volume.html#setMuteChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "setMuteChannels",
          "normalized": "[String]-\u003eBool-\u003ea()",
          "package": "xmonad-extras",
          "partial": "Mute Channels",
          "signature": "[String]-\u003eBool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:setMuteChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to set the default channels to a volume given in percentage of maximum.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Volume",
          "name": "setVolume",
          "package": "xmonad-extras",
          "signature": "Double -\u003e m ()",
          "source": "src/XMonad-Actions-Volume.html#setVolume",
          "type": "function"
        },
        "index": {
          "description": "Attempt to set the default channels to volume given in percentage of maximum",
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "setVolume",
          "normalized": "Double-\u003ea()",
          "package": "xmonad-extras",
          "partial": "Volume",
          "signature": "Double-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:setVolume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Actions.Volume",
          "name": "setVolumeChannels",
          "package": "xmonad-extras",
          "signature": "[String] -\u003e Double -\u003e m ()",
          "source": "src/XMonad-Actions-Volume.html#setVolumeChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "setVolumeChannels",
          "normalized": "[String]-\u003eDouble-\u003ea()",
          "package": "xmonad-extras",
          "partial": "Volume Channels",
          "signature": "[String]-\u003eDouble-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:setVolumeChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to set both the volume in percent and the muting on the default channels.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Volume",
          "name": "setVolumeMute",
          "package": "xmonad-extras",
          "signature": "Double -\u003e Bool -\u003e m ()",
          "source": "src/XMonad-Actions-Volume.html#setVolumeMute",
          "type": "function"
        },
        "index": {
          "description": "Attempt to set both the volume in percent and the muting on the default channels",
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "setVolumeMute",
          "normalized": "Double-\u003eBool-\u003ea()",
          "package": "xmonad-extras",
          "partial": "Volume Mute",
          "signature": "Double-\u003eBool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:setVolumeMute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Actions.Volume",
          "name": "setVolumeMuteChannels",
          "package": "xmonad-extras",
          "signature": "[String] -\u003e Double -\u003e Bool -\u003e m ()",
          "source": "src/XMonad-Actions-Volume.html#setVolumeMuteChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "setVolumeMuteChannels",
          "normalized": "[String]-\u003eDouble-\u003eBool-\u003ea()",
          "package": "xmonad-extras",
          "partial": "Volume Mute Channels",
          "signature": "[String]-\u003eDouble-\u003eBool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:setVolumeMuteChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToggle mutedness on the default channels.  Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when this attempts to mute the speakers and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e when this attempts to unmute the speakers.\n\u003c/p\u003e",
          "module": "XMonad.Actions.Volume",
          "name": "toggleMute",
          "package": "xmonad-extras",
          "signature": "m Bool",
          "source": "src/XMonad-Actions-Volume.html#toggleMute",
          "type": "function"
        },
        "index": {
          "description": "Toggle mutedness on the default channels Returns True when this attempts to mute the speakers and False when this attempts to unmute the speakers",
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "toggleMute",
          "package": "xmonad-extras",
          "partial": "Mute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:toggleMute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Actions.Volume",
          "name": "toggleMuteChannels",
          "package": "xmonad-extras",
          "signature": "[String] -\u003e m Bool",
          "source": "src/XMonad-Actions-Volume.html#toggleMuteChannels",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Actions Volume",
          "module": "XMonad.Actions.Volume",
          "name": "toggleMuteChannels",
          "normalized": "[String]-\u003ea Bool",
          "package": "xmonad-extras",
          "partial": "Mute Channels",
          "signature": "[String]-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Actions-Volume.html#v:toggleMuteChannels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA prompt for evaluating Haskell expressions(in the context of the running\n xmonad instance).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "XMonad.Prompt.Eval",
          "name": "Eval",
          "package": "xmonad-extras",
          "source": "src/XMonad-Prompt-Eval.html",
          "type": "module"
        },
        "index": {
          "description": "prompt for evaluating Haskell expressions in the context of the running xmonad instance",
          "hierarchy": "XMonad Prompt Eval",
          "module": "XMonad.Prompt.Eval",
          "name": "Eval",
          "package": "xmonad-extras",
          "partial": "Eval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Prompt-Eval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prompt that evaluates the entered Haskell expression, whose type has\n to be an instance of Show.\n\u003c/p\u003e",
          "module": "XMonad.Prompt.Eval",
          "name": "evalPrompt",
          "package": "xmonad-extras",
          "signature": "EvalConfig -\u003e XPConfig -\u003e X ()",
          "source": "src/XMonad-Prompt-Eval.html#evalPrompt",
          "type": "function"
        },
        "index": {
          "description": "prompt that evaluates the entered Haskell expression whose type has to be an instance of Show",
          "hierarchy": "XMonad Prompt Eval",
          "module": "XMonad.Prompt.Eval",
          "name": "evalPrompt",
          "normalized": "EvalConfig-\u003eXPConfig-\u003eX()",
          "package": "xmonad-extras",
          "partial": "Prompt",
          "signature": "EvalConfig-\u003eXPConfig-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Prompt-Eval.html#v:evalPrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eevalPrompt\u003c/a\u003e\u003c/code\u003e, but lets the user supply a function to be\n executed on the returned string, which is produced by applying show\n to the executed expression. (This is a crude solution, but the returned\n type has to be monomorphic)\n\u003c/p\u003e",
          "module": "XMonad.Prompt.Eval",
          "name": "evalPromptWithOutput",
          "package": "xmonad-extras",
          "signature": "EvalConfig -\u003e XPConfig -\u003e (String -\u003e X ()) -\u003e X ()",
          "source": "src/XMonad-Prompt-Eval.html#evalPromptWithOutput",
          "type": "function"
        },
        "index": {
          "description": "The same as evalPrompt but lets the user supply function to be executed on the returned string which is produced by applying show to the executed expression This is crude solution but the returned type has to be monomorphic",
          "hierarchy": "XMonad Prompt Eval",
          "module": "XMonad.Prompt.Eval",
          "name": "evalPromptWithOutput",
          "normalized": "EvalConfig-\u003eXPConfig-\u003e(String-\u003eX())-\u003eX()",
          "package": "xmonad-extras",
          "partial": "Prompt With Output",
          "signature": "EvalConfig-\u003eXPConfig-\u003e(String-\u003eX())-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Prompt-Eval.html#v:evalPromptWithOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA nice default to have the result of an expression displayed by dzen,\n if it's interesting (i.e. not () or an empty string).\n The first parameter specifies the display time in microseconds, the second parameter\n allows to pass additional options to dzen.\n\u003c/p\u003e",
          "module": "XMonad.Prompt.Eval",
          "name": "showWithDzen",
          "package": "xmonad-extras",
          "signature": "Int -\u003e [String] -\u003e String -\u003e X ()",
          "source": "src/XMonad-Prompt-Eval.html#showWithDzen",
          "type": "function"
        },
        "index": {
          "description": "nice default to have the result of an expression displayed by dzen if it interesting i.e not or an empty string The first parameter specifies the display time in microseconds the second parameter allows to pass additional options to dzen",
          "hierarchy": "XMonad Prompt Eval",
          "module": "XMonad.Prompt.Eval",
          "name": "showWithDzen",
          "normalized": "Int-\u003e[String]-\u003eString-\u003eX()",
          "package": "xmonad-extras",
          "partial": "With Dzen",
          "signature": "Int-\u003e[String]-\u003eString-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Prompt-Eval.html#v:showWithDzen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module lets the user select songs and have MPD add/play them by\n filtering them by user-supplied criteria(E.g. ask for an artist, then for\n the album..)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "XMonad.Prompt.MPD",
          "name": "MPD",
          "package": "xmonad-extras",
          "source": "src/XMonad-Prompt-MPD.html",
          "type": "module"
        },
        "index": {
          "description": "This module lets the user select songs and have MPD add play them by filtering them by user-supplied criteria E.g ask for an artist then for the album",
          "hierarchy": "XMonad Prompt MPD",
          "module": "XMonad.Prompt.MPD",
          "name": "MPD",
          "package": "xmonad-extras",
          "partial": "MPD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Prompt-MPD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows the user to supply a custom way to connect to MPD (e.g. partially\n applied withMPDEx).\n\u003c/p\u003e",
          "module": "XMonad.Prompt.MPD",
          "name": "RunMPD",
          "package": "xmonad-extras",
          "source": "src/XMonad-Prompt-MPD.html#RunMPD",
          "type": "type"
        },
        "index": {
          "description": "Allows the user to supply custom way to connect to MPD e.g partially applied withMPDEx",
          "hierarchy": "XMonad Prompt MPD",
          "module": "XMonad.Prompt.MPD",
          "name": "RunMPD",
          "package": "xmonad-extras",
          "partial": "Run MPD",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Prompt-MPD.html#t:RunMPD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd matching songs and play the first one.\n\u003c/p\u003e",
          "module": "XMonad.Prompt.MPD",
          "name": "addAndPlay",
          "package": "xmonad-extras",
          "signature": "RunMPD -\u003e XPConfig -\u003e [Metadata] -\u003e X ()",
          "source": "src/XMonad-Prompt-MPD.html#addAndPlay",
          "type": "function"
        },
        "index": {
          "description": "Add matching songs and play the first one",
          "hierarchy": "XMonad Prompt MPD",
          "module": "XMonad.Prompt.MPD",
          "name": "addAndPlay",
          "normalized": "RunMPD-\u003eXPConfig-\u003e[Metadata]-\u003eX()",
          "package": "xmonad-extras",
          "partial": "And Play",
          "signature": "RunMPD-\u003eXPConfig-\u003e[Metadata]-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Prompt-MPD.html#v:addAndPlay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd all selected songs to the playlist if they are not in it.\n\u003c/p\u003e",
          "module": "XMonad.Prompt.MPD",
          "name": "addMatching",
          "package": "xmonad-extras",
          "signature": "RunMPD -\u003e XPConfig -\u003e [Metadata] -\u003e X [Int]",
          "source": "src/XMonad-Prompt-MPD.html#addMatching",
          "type": "function"
        },
        "index": {
          "description": "Add all selected songs to the playlist if they are not in it",
          "hierarchy": "XMonad Prompt MPD",
          "module": "XMonad.Prompt.MPD",
          "name": "addMatching",
          "normalized": "RunMPD-\u003eXPConfig-\u003e[Metadata]-\u003eX[Int]",
          "package": "xmonad-extras",
          "partial": "Matching",
          "signature": "RunMPD-\u003eXPConfig-\u003e[Metadata]-\u003eX[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Prompt-MPD.html#v:addMatching"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLets the user filter out non-matching songs. For example, if given\n [Artist, Album] as third argument, this will prompt the user for an\n artist(with tab-completion), then for an album by that artist and then\n returns the songs from that album.\n\u003c/p\u003e",
          "module": "XMonad.Prompt.MPD",
          "name": "findMatching",
          "package": "xmonad-extras",
          "signature": "RunMPD -\u003e XPConfig -\u003e [Metadata] -\u003e X [Song]",
          "source": "src/XMonad-Prompt-MPD.html#findMatching",
          "type": "function"
        },
        "index": {
          "description": "Lets the user filter out non-matching songs For example if given Artist Album as third argument this will prompt the user for an artist with tab-completion then for an album by that artist and then returns the songs from that album",
          "hierarchy": "XMonad Prompt MPD",
          "module": "XMonad.Prompt.MPD",
          "name": "findMatching",
          "normalized": "RunMPD-\u003eXPConfig-\u003e[Metadata]-\u003eX[Song]",
          "package": "xmonad-extras",
          "partial": "Matching",
          "signature": "RunMPD-\u003eXPConfig-\u003e[Metadata]-\u003eX[Song]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Prompt-MPD.html#v:findMatching"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine playlist position of the song and add it, if it isn't present.\n\u003c/p\u003e",
          "module": "XMonad.Prompt.MPD",
          "name": "findOrAdd",
          "package": "xmonad-extras",
          "signature": "Song -\u003e MPD Int",
          "source": "src/XMonad-Prompt-MPD.html#findOrAdd",
          "type": "function"
        },
        "index": {
          "description": "Determine playlist position of the song and add it if it isn present",
          "hierarchy": "XMonad Prompt MPD",
          "module": "XMonad.Prompt.MPD",
          "name": "findOrAdd",
          "normalized": "Song-\u003eMPD Int",
          "package": "xmonad-extras",
          "partial": "Or Add",
          "signature": "Song-\u003eMPD Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Prompt-MPD.html#v:findOrAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimilar to XMonad.Util.WindowProperties, but uses posix regular expressions matching\n instead of exact match.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "XMonad.Util.WindowPropertiesRE",
          "name": "WindowPropertiesRE",
          "package": "xmonad-extras",
          "source": "src/XMonad-Util-WindowPropertiesRE.html",
          "type": "module"
        },
        "index": {
          "description": "Similar to XMonad.Util.WindowProperties but uses posix regular expressions matching instead of exact match",
          "hierarchy": "XMonad Util WindowPropertiesRE",
          "module": "XMonad.Util.WindowPropertiesRE",
          "name": "WindowPropertiesRE",
          "package": "xmonad-extras",
          "partial": "Window Properties RE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Util-WindowPropertiesRE.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for X.U.WindowProperties.Property.\n Checks using regular expression.\n\u003c/p\u003e",
          "module": "XMonad.Util.WindowPropertiesRE",
          "name": "PropertyRE",
          "package": "xmonad-extras",
          "source": "src/XMonad-Util-WindowPropertiesRE.html#PropertyRE",
          "type": "data"
        },
        "index": {
          "description": "wrapper for X.U.WindowProperties.Property Checks using regular expression",
          "hierarchy": "XMonad Util WindowPropertiesRE",
          "module": "XMonad.Util.WindowPropertiesRE",
          "name": "PropertyRE",
          "package": "xmonad-extras",
          "partial": "Property RE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Util-WindowPropertiesRE.html#t:PropertyRE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegular expressions matching for ManageHooks\n\u003c/p\u003e",
          "module": "XMonad.Util.WindowPropertiesRE",
          "name": "(~?)",
          "package": "xmonad-extras",
          "signature": "f String -\u003e String -\u003e f Bool",
          "source": "src/XMonad-Util-WindowPropertiesRE.html#~%3F",
          "type": "function"
        },
        "index": {
          "description": "Regular expressions matching for ManageHooks",
          "hierarchy": "XMonad Util WindowPropertiesRE",
          "module": "XMonad.Util.WindowPropertiesRE",
          "name": "(~?) ~?",
          "normalized": "a String-\u003eString-\u003ea Bool",
          "package": "xmonad-extras",
          "signature": "f String-\u003eString-\u003ef Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Util-WindowPropertiesRE.html#v:-126--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Util.WindowPropertiesRE",
          "name": "RE",
          "package": "xmonad-extras",
          "signature": "RE Property",
          "source": "src/XMonad-Util-WindowPropertiesRE.html#PropertyRE",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Util WindowPropertiesRE",
          "module": "XMonad.Util.WindowPropertiesRE",
          "name": "RE",
          "package": "xmonad-extras",
          "partial": "RE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Util-WindowPropertiesRE.html#v:RE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes given window have this property?\n\u003c/p\u003e",
          "module": "XMonad.Util.WindowPropertiesRE",
          "name": "hasPropertyRE",
          "package": "xmonad-extras",
          "signature": "PropertyRE -\u003e Window -\u003e X Bool",
          "source": "src/XMonad-Util-WindowPropertiesRE.html#hasPropertyRE",
          "type": "function"
        },
        "index": {
          "description": "Does given window have this property",
          "hierarchy": "XMonad Util WindowPropertiesRE",
          "module": "XMonad.Util.WindowPropertiesRE",
          "name": "hasPropertyRE",
          "normalized": "PropertyRE-\u003eWindow-\u003eX Bool",
          "package": "xmonad-extras",
          "partial": "Property RE",
          "signature": "PropertyRE-\u003eWindow-\u003eX Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Util-WindowPropertiesRE.html#v:hasPropertyRE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to XMonad.Util.WindowProperties.propertyToQuery, \n but uses regexp match instead of exact match\n\u003c/p\u003e",
          "module": "XMonad.Util.WindowPropertiesRE",
          "name": "propertyToQueryRE",
          "package": "xmonad-extras",
          "signature": "Property -\u003e Query Bool",
          "source": "src/XMonad-Util-WindowPropertiesRE.html#propertyToQueryRE",
          "type": "function"
        },
        "index": {
          "description": "Similar to XMonad.Util.WindowProperties.propertyToQuery but uses regexp match instead of exact match",
          "hierarchy": "XMonad Util WindowPropertiesRE",
          "module": "XMonad.Util.WindowPropertiesRE",
          "name": "propertyToQueryRE",
          "normalized": "Property-\u003eQuery Bool",
          "package": "xmonad-extras",
          "partial": "To Query RE",
          "signature": "Property-\u003eQuery Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-extras/docs/XMonad-Util-WindowPropertiesRE.html#v:propertyToQueryRE"
      }
    }
  ]
]