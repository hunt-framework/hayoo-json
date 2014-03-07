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
        "word": "chp-spec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing the choice constructs.  See \u003ca\u003ehttp://chplib.wordpress.com/2010/04/20/automatic-model-generation-part-3-choice-and-io/\u003c/a\u003e\n for details of how choice is modelled.\n\u003c/p\u003e\u003cp\u003eCurrently conjunction is not modelled (mainly because CSP/FDR don't support\n it), but external choice is modelled fine; \u003ccode\u003e\u003ca\u003epriAlt\u003c/a\u003e\u003c/code\u003e is modelled as a plain \u003ccode\u003e\u003ca\u003ealt\u003c/a\u003e\u003c/code\u003e,\n though.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.CHPSpec.Alt",
          "name": "Alt",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Alt.html",
          "type": "module"
        },
        "index": {
          "description": "module containing the choice constructs See http chplib.wordpress.com automatic-model-generation-part-3-choice-and-io for details of how choice is modelled Currently conjunction is not modelled mainly because CSP FDR don support it but external choice is modelled fine priAlt is modelled as plain alt though",
          "hierarchy": "Control Concurrent CHPSpec Alt",
          "module": "Control.Concurrent.CHPSpec.Alt",
          "name": "Alt",
          "package": "chp-spec",
          "partial": "Alt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Alt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Alt",
          "name": "(\u003c-\u003e)",
          "package": "chp-spec",
          "signature": "CHP a -\u003e CHP a -\u003e CHP a",
          "source": "src/Control-Concurrent-CHPSpec-Alt.html#%3C-%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Alt",
          "module": "Control.Concurrent.CHPSpec.Alt",
          "name": "(\u003c-\u003e) \u003c-\u003e",
          "normalized": "CHP a-\u003eCHP a-\u003eCHP a",
          "package": "chp-spec",
          "signature": "CHP a-\u003eCHP a-\u003eCHP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Alt.html#v:-60--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Alt",
          "name": "(\u003c/\u003e)",
          "package": "chp-spec",
          "signature": "CHP a -\u003e CHP a -\u003e CHP a",
          "source": "src/Control-Concurrent-CHPSpec-Alt.html#%3C%2F%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Alt",
          "module": "Control.Concurrent.CHPSpec.Alt",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "CHP a-\u003eCHP a-\u003eCHP a",
          "package": "chp-spec",
          "signature": "CHP a-\u003eCHP a-\u003eCHP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Alt.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Alt",
          "name": "alt",
          "package": "chp-spec",
          "signature": "[CHP a] -\u003e CHP a",
          "source": "src/Control-Concurrent-CHPSpec-Alt.html#alt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Alt",
          "module": "Control.Concurrent.CHPSpec.Alt",
          "name": "alt",
          "normalized": "[CHP a]-\u003eCHP a",
          "package": "chp-spec",
          "signature": "[CHP a]-\u003eCHP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Alt.html#v:alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Alt",
          "name": "priAlt",
          "package": "chp-spec",
          "signature": "[CHP a] -\u003e CHP a",
          "source": "src/Control-Concurrent-CHPSpec-Alt.html#priAlt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Alt",
          "module": "Control.Concurrent.CHPSpec.Alt",
          "name": "priAlt",
          "normalized": "[CHP a]-\u003eCHP a",
          "package": "chp-spec",
          "partial": "Alt",
          "signature": "[CHP a]-\u003eCHP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Alt.html#v:priAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing barriers.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePhasedBarrier\u003c/a\u003e\u003c/code\u003e type remains, but currently \u003ccode\u003e\u003ca\u003esyncBarrier\u003c/a\u003e\u003c/code\u003e has been changed\n so that it only works on \u003ccode\u003e\u003ca\u003eBarrier\u003c/a\u003e\u003c/code\u003e, i.e. \u003ccode\u003ePhasedBarrier ()\u003c/code\u003e.  This is because\n phases haven't been modelled yet.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "Barriers",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html",
          "type": "module"
        },
        "index": {
          "description": "module containing barriers The PhasedBarrier type remains but currently syncBarrier has been changed so that it only works on Barrier i.e PhasedBarrier This is because phases haven been modelled yet",
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "Barriers",
          "package": "chp-spec",
          "partial": "Barriers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "BarOpts",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#BarOpts",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "BarOpts",
          "package": "chp-spec",
          "partial": "Bar Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#t:BarOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "Barrier",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#Barrier",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "Barrier",
          "package": "chp-spec",
          "partial": "Barrier",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#t:Barrier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "EnrolledBarrier",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#EnrolledBarrier",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "EnrolledBarrier",
          "package": "chp-spec",
          "partial": "Enrolled Barrier",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#t:EnrolledBarrier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "PhasedBarrier",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-CSP.html#PhasedBarrier",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "PhasedBarrier",
          "package": "chp-spec",
          "partial": "Phased Barrier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#t:PhasedBarrier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "BarOpts",
          "package": "chp-spec",
          "signature": "BarOpts",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#BarOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "BarOpts",
          "package": "chp-spec",
          "partial": "Bar Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:BarOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "barIncPhase",
          "package": "chp-spec",
          "signature": "phase -\u003e phase",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#BarOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "barIncPhase",
          "normalized": "a-\u003ea",
          "package": "chp-spec",
          "partial": "Inc Phase",
          "signature": "phase-\u003ephase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:barIncPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "barLabel",
          "package": "chp-spec",
          "signature": "String -\u003e BarOpts phase",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#barLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "barLabel",
          "normalized": "String-\u003eBarOpts a",
          "package": "chp-spec",
          "partial": "Label",
          "signature": "String-\u003eBarOpts phase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:barLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "barOptsLabel",
          "package": "chp-spec",
          "signature": "Maybe String",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#BarOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "barOptsLabel",
          "package": "chp-spec",
          "partial": "Opts Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:barOptsLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "barOptsShow",
          "package": "chp-spec",
          "signature": "phase -\u003e String",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#BarOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "barOptsShow",
          "normalized": "a-\u003eString",
          "package": "chp-spec",
          "partial": "Opts Show",
          "signature": "phase-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:barOptsShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "barPriority",
          "package": "chp-spec",
          "signature": "Int",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#BarOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "barPriority",
          "package": "chp-spec",
          "partial": "Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:barPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "defaultBarOpts",
          "package": "chp-spec",
          "signature": "BarOpts phase",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#defaultBarOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "defaultBarOpts",
          "package": "chp-spec",
          "partial": "Bar Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:defaultBarOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "defaultIncPhase",
          "package": "chp-spec",
          "signature": "phase -\u003e phase",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#defaultIncPhase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "defaultIncPhase",
          "normalized": "a-\u003ea",
          "package": "chp-spec",
          "partial": "Inc Phase",
          "signature": "phase-\u003ephase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:defaultIncPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "newBarrier",
          "package": "chp-spec",
          "signature": "CHP Barrier",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#newBarrier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "newBarrier",
          "package": "chp-spec",
          "partial": "Barrier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:newBarrier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "newBarrierPri",
          "package": "chp-spec",
          "signature": "Int -\u003e CHP Barrier",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#newBarrierPri",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "newBarrierPri",
          "normalized": "Int-\u003eCHP Barrier",
          "package": "chp-spec",
          "partial": "Barrier Pri",
          "signature": "Int-\u003eCHP Barrier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:newBarrierPri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "newBarrierWithLabel",
          "package": "chp-spec",
          "signature": "String -\u003e CHP Barrier",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#newBarrierWithLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "newBarrierWithLabel",
          "normalized": "String-\u003eCHP Barrier",
          "package": "chp-spec",
          "partial": "Barrier With Label",
          "signature": "String-\u003eCHP Barrier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:newBarrierWithLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "newPhasedBarrier",
          "package": "chp-spec",
          "signature": "phase -\u003e CHP (PhasedBarrier phase)",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#newPhasedBarrier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "newPhasedBarrier",
          "normalized": "a-\u003eCHP(PhasedBarrier a)",
          "package": "chp-spec",
          "partial": "Phased Barrier",
          "signature": "phase-\u003eCHP(PhasedBarrier phase)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:newPhasedBarrier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "newPhasedBarrier'",
          "package": "chp-spec",
          "signature": "phase -\u003e BarOpts phase -\u003e CHP (PhasedBarrier phase)",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#newPhasedBarrier%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "newPhasedBarrier'",
          "normalized": "a-\u003eBarOpts a-\u003eCHP(PhasedBarrier a)",
          "package": "chp-spec",
          "partial": "Phased Barrier'",
          "signature": "phase-\u003eBarOpts phase-\u003eCHP(PhasedBarrier phase)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:newPhasedBarrier-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlike normal CHP, this function only works on barriers with the unit type\n for a phase.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "syncBarrier",
          "package": "chp-spec",
          "signature": "EnrolledBarrier -\u003e CHP ()",
          "source": "src/Control-Concurrent-CHPSpec-Barriers.html#syncBarrier",
          "type": "function"
        },
        "index": {
          "description": "Unlike normal CHP this function only works on barriers with the unit type for phase",
          "hierarchy": "Control Concurrent CHPSpec Barriers",
          "module": "Control.Concurrent.CHPSpec.Barriers",
          "name": "syncBarrier",
          "normalized": "EnrolledBarrier-\u003eCHP()",
          "package": "chp-spec",
          "partial": "Barrier",
          "signature": "EnrolledBarrier-\u003eCHP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:syncBarrier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "Communication",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Communication",
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "Communication",
          "package": "chp-spec",
          "partial": "Communication",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "ReadableChannel",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#ReadableChannel",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Communication",
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "ReadableChannel",
          "package": "chp-spec",
          "partial": "Readable Channel",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#t:ReadableChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "WriteableChannel",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#WriteableChannel",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Communication",
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "WriteableChannel",
          "package": "chp-spec",
          "partial": "Writeable Channel",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#t:WriteableChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrently, extended inputs and outputs are modelled (incorrectly) as standard\n inputs and outputs.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "extReadChannel",
          "package": "chp-spec",
          "signature": "chanEnd a -\u003e (a -\u003e CHP b) -\u003e CHP b",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#extReadChannel",
          "type": "method"
        },
        "index": {
          "description": "Currently extended inputs and outputs are modelled incorrectly as standard inputs and outputs",
          "hierarchy": "Control Concurrent CHPSpec Channels Communication",
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "extReadChannel",
          "normalized": "a b-\u003e(b-\u003eCHP c)-\u003eCHP c",
          "package": "chp-spec",
          "partial": "Read Channel",
          "signature": "chanEnd a-\u003e(a-\u003eCHP b)-\u003eCHP b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#v:extReadChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrently, extended inputs and outputs are modelled (incorrectly) as standard\n inputs and outputs.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "extWriteChannel",
          "package": "chp-spec",
          "signature": "chanEnd a -\u003e CHP a -\u003e CHP ()",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#extWriteChannel",
          "type": "method"
        },
        "index": {
          "description": "Currently extended inputs and outputs are modelled incorrectly as standard inputs and outputs",
          "hierarchy": "Control Concurrent CHPSpec Channels Communication",
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "extWriteChannel",
          "normalized": "a b-\u003eCHP b-\u003eCHP()",
          "package": "chp-spec",
          "partial": "Write Channel",
          "signature": "chanEnd a-\u003eCHP a-\u003eCHP()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#v:extWriteChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrently, extended inputs and outputs are modelled (incorrectly) as standard\n inputs and outputs.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "extWriteChannel'",
          "package": "chp-spec",
          "signature": "chanEnd a -\u003e CHP (a, b) -\u003e CHP b",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#extWriteChannel%27",
          "type": "method"
        },
        "index": {
          "description": "Currently extended inputs and outputs are modelled incorrectly as standard inputs and outputs",
          "hierarchy": "Control Concurrent CHPSpec Channels Communication",
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "extWriteChannel'",
          "normalized": "a b-\u003eCHP(b,c)-\u003eCHP c",
          "package": "chp-spec",
          "partial": "Write Channel'",
          "signature": "chanEnd a-\u003eCHP(a,b)-\u003eCHP b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#v:extWriteChannel-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "readChannel",
          "package": "chp-spec",
          "signature": "chanEnd a -\u003e CHP a",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#readChannel",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Communication",
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "readChannel",
          "normalized": "a b-\u003eCHP b",
          "package": "chp-spec",
          "partial": "Channel",
          "signature": "chanEnd a-\u003eCHP a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#v:readChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "writeChannel",
          "package": "chp-spec",
          "signature": "chanEnd a -\u003e a -\u003e CHP ()",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#writeChannel",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Communication",
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "writeChannel",
          "normalized": "a b-\u003eb-\u003eCHP()",
          "package": "chp-spec",
          "partial": "Channel",
          "signature": "chanEnd a-\u003ea-\u003eCHP()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#v:writeChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function strictly evaluates its second argument and then behaves like\n \u003ccode\u003e\u003ca\u003ewriteChannel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "writeChannelStrict",
          "package": "chp-spec",
          "signature": "chanEnd a -\u003e a -\u003e CHP ()",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#writeChannelStrict",
          "type": "function"
        },
        "index": {
          "description": "This function strictly evaluates its second argument and then behaves like writeChannel",
          "hierarchy": "Control Concurrent CHPSpec Channels Communication",
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "writeChannelStrict",
          "normalized": "a b-\u003eb-\u003eCHP()",
          "package": "chp-spec",
          "partial": "Channel Strict",
          "signature": "chanEnd a-\u003ea-\u003eCHP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#v:writeChannelStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "writeValue",
          "package": "chp-spec",
          "signature": "a -\u003e chanEnd a -\u003e CHP ()",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#writeValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Communication",
          "module": "Control.Concurrent.CHPSpec.Channels.Communication",
          "name": "writeValue",
          "normalized": "a-\u003eb a-\u003eCHP()",
          "package": "chp-spec",
          "partial": "Value",
          "signature": "a-\u003echanEnd a-\u003eCHP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#v:writeValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "Creation",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "Creation",
          "package": "chp-spec",
          "partial": "Creation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "Chan",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Base.html#Chan",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "Chan",
          "package": "chp-spec",
          "partial": "Chan",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#t:Chan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for channel creation.  The first two will be ignored, but the label\n (if present) will be used to label the channel in the specification.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "ChanOpts",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#ChanOpts",
          "type": "data"
        },
        "index": {
          "description": "Options for channel creation The first two will be ignored but the label if present will be used to label the channel in the specification",
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "ChanOpts",
          "package": "chp-spec",
          "partial": "Chan Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#t:ChanOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "Channel",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#Channel",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "Channel",
          "package": "chp-spec",
          "partial": "Channel",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "ChanOpts",
          "package": "chp-spec",
          "signature": "ChanOpts",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#ChanOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "ChanOpts",
          "package": "chp-spec",
          "partial": "Chan Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:ChanOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "chanLabel",
          "package": "chp-spec",
          "signature": "String -\u003e ChanOpts a",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#chanLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "chanLabel",
          "normalized": "String-\u003eChanOpts a",
          "package": "chp-spec",
          "partial": "Label",
          "signature": "String-\u003eChanOpts a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:chanLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "chanOptsLabel",
          "package": "chp-spec",
          "signature": "Maybe String",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#ChanOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "chanOptsLabel",
          "package": "chp-spec",
          "partial": "Opts Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:chanOptsLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "chanOptsPriority",
          "package": "chp-spec",
          "signature": "Int",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#ChanOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "chanOptsPriority",
          "package": "chp-spec",
          "partial": "Opts Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:chanOptsPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "chanOptsShow",
          "package": "chp-spec",
          "signature": "a -\u003e String",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#ChanOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "chanOptsShow",
          "normalized": "a-\u003eString",
          "package": "chp-spec",
          "partial": "Opts Show",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:chanOptsShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "defaultChanOpts",
          "package": "chp-spec",
          "signature": "ChanOpts a",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#defaultChanOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "defaultChanOpts",
          "package": "chp-spec",
          "partial": "Chan Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:defaultChanOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabels a channel in the traces.  It is easiest to do this at creation.\n The effect of re-labelling channels after their first use is undefined.\n\u003c/p\u003e\u003cp\u003eThis function does work as expected in chp-spec.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "labelChannel",
          "package": "chp-spec",
          "signature": "Chan r w a -\u003e String -\u003e m ()",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#labelChannel",
          "type": "function"
        },
        "index": {
          "description": "Labels channel in the traces It is easiest to do this at creation The effect of re-labelling channels after their first use is undefined This function does work as expected in chp-spec",
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "labelChannel",
          "normalized": "Chan a b c-\u003eString-\u003ed()",
          "package": "chp-spec",
          "partial": "Channel",
          "signature": "Chan r w a-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:labelChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "newChannel",
          "package": "chp-spec",
          "signature": "m (Chan r w a)",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#newChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "newChannel",
          "package": "chp-spec",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:newChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "newChannel'",
          "package": "chp-spec",
          "signature": "ChanOpts a -\u003e m (Chan r w a)",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#newChannel%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "newChannel'",
          "normalized": "ChanOpts a-\u003eb(Chan c d a)",
          "package": "chp-spec",
          "partial": "Channel'",
          "signature": "ChanOpts a-\u003em(Chan r w a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:newChannel-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "newChannelList",
          "package": "chp-spec",
          "signature": "Int -\u003e m [Chan r w a]",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#newChannelList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "newChannelList",
          "normalized": "Int-\u003ea[Chan b c d]",
          "package": "chp-spec",
          "partial": "Channel List",
          "signature": "Int-\u003em[Chan r w a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:newChannelList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "newChannelListWithLabels",
          "package": "chp-spec",
          "signature": "[String] -\u003e m [Chan r w a]",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#newChannelListWithLabels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "newChannelListWithLabels",
          "normalized": "[String]-\u003ea[Chan b c d]",
          "package": "chp-spec",
          "partial": "Channel List With Labels",
          "signature": "[String]-\u003em[Chan r w a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:newChannelListWithLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "newChannelListWithStem",
          "package": "chp-spec",
          "signature": "Int -\u003e String -\u003e m [Chan r w a]",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#newChannelListWithStem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "newChannelListWithStem",
          "normalized": "Int-\u003eString-\u003ea[Chan b c d]",
          "package": "chp-spec",
          "partial": "Channel List With Stem",
          "signature": "Int-\u003eString-\u003em[Chan r w a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:newChannelListWithStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "newChannelRW",
          "package": "chp-spec",
          "signature": "m (r a, w a)",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#newChannelRW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "newChannelRW",
          "normalized": "a(b c,d c)",
          "package": "chp-spec",
          "partial": "Channel RW",
          "signature": "m(r a,w a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:newChannelRW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "newChannelWR",
          "package": "chp-spec",
          "signature": "m (w a, r a)",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#newChannelWR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "newChannelWR",
          "normalized": "a(b c,d c)",
          "package": "chp-spec",
          "partial": "Channel WR",
          "signature": "m(w a,r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:newChannelWR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "sameChannel",
          "package": "chp-spec",
          "signature": "r a -\u003e w a -\u003e Bool",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#sameChannel",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Creation",
          "module": "Control.Concurrent.CHPSpec.Channels.Creation",
          "name": "sameChannel",
          "normalized": "a b-\u003ec b-\u003eBool",
          "package": "chp-spec",
          "partial": "Channel",
          "signature": "r a-\u003ew a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:sameChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "Ends",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Ends.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Ends",
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "Ends",
          "package": "chp-spec",
          "partial": "Ends",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "Chanin",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Base.html#Chanin",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Ends",
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "Chanin",
          "package": "chp-spec",
          "partial": "Chanin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#t:Chanin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "Chanout",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Base.html#Chanout",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Ends",
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "Chanout",
          "package": "chp-spec",
          "partial": "Chanout",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#t:Chanout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "Shared",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-CSP.html#Shared",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Ends",
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "Shared",
          "package": "chp-spec",
          "partial": "Shared",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#t:Shared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "claim",
          "package": "chp-spec",
          "signature": "Shared c a -\u003e (c a -\u003e CHP b) -\u003e CHP b",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Ends.html#claim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Ends",
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "claim",
          "normalized": "Shared a b-\u003e(a b-\u003eCHP c)-\u003eCHP c",
          "package": "chp-spec",
          "signature": "Shared c a-\u003e(c a-\u003eCHP b)-\u003eCHP b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#v:claim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "reader",
          "package": "chp-spec",
          "signature": "Chan r w a -\u003e r a",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Base.html#reader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Ends",
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "reader",
          "normalized": "Chan a b c-\u003ea c",
          "package": "chp-spec",
          "signature": "Chan r w a-\u003er a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#v:reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "readers",
          "package": "chp-spec",
          "signature": "[Chan r w a] -\u003e [r a]",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Ends.html#readers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Ends",
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "readers",
          "normalized": "[Chan a b c]-\u003e[a c]",
          "package": "chp-spec",
          "signature": "[Chan r w a]-\u003e[r a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#v:readers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "writer",
          "package": "chp-spec",
          "signature": "Chan r w a -\u003e w a",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Base.html#writer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Ends",
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "writer",
          "normalized": "Chan a b c-\u003eb c",
          "package": "chp-spec",
          "signature": "Chan r w a-\u003ew a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#v:writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "writers",
          "package": "chp-spec",
          "signature": "[Chan r w a] -\u003e [w a]",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Ends.html#writers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Ends",
          "module": "Control.Concurrent.CHPSpec.Channels.Ends",
          "name": "writers",
          "normalized": "[Chan a b c]-\u003e[b c]",
          "package": "chp-spec",
          "signature": "[Chan r w a]-\u003e[w a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#v:writers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "Synonyms",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "Synonyms",
          "package": "chp-spec",
          "partial": "Synonyms",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "AnyToAnyChannel",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#AnyToAnyChannel",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "AnyToAnyChannel",
          "package": "chp-spec",
          "partial": "Any To Any Channel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#t:AnyToAnyChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "AnyToOneChannel",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#AnyToOneChannel",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "AnyToOneChannel",
          "package": "chp-spec",
          "partial": "Any To One Channel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#t:AnyToOneChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "OneToAnyChannel",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#OneToAnyChannel",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "OneToAnyChannel",
          "package": "chp-spec",
          "partial": "One To Any Channel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#t:OneToAnyChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "OneToOneChannel",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#OneToOneChannel",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "OneToOneChannel",
          "package": "chp-spec",
          "partial": "One To One Channel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#t:OneToOneChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "anyToAnyChannel",
          "package": "chp-spec",
          "signature": "m (AnyToAnyChannel a)",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#anyToAnyChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "anyToAnyChannel",
          "package": "chp-spec",
          "partial": "To Any Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#v:anyToAnyChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "anyToAnyChannel'",
          "package": "chp-spec",
          "signature": "ChanOpts a -\u003e m (AnyToAnyChannel a)",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#anyToAnyChannel%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "anyToAnyChannel'",
          "normalized": "ChanOpts a-\u003eb(AnyToAnyChannel a)",
          "package": "chp-spec",
          "partial": "To Any Channel'",
          "signature": "ChanOpts a-\u003em(AnyToAnyChannel a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#v:anyToAnyChannel-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "anyToOneChannel",
          "package": "chp-spec",
          "signature": "m (AnyToOneChannel a)",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#anyToOneChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "anyToOneChannel",
          "package": "chp-spec",
          "partial": "To One Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#v:anyToOneChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "anyToOneChannel'",
          "package": "chp-spec",
          "signature": "ChanOpts a -\u003e m (AnyToOneChannel a)",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#anyToOneChannel%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "anyToOneChannel'",
          "normalized": "ChanOpts a-\u003eb(AnyToOneChannel a)",
          "package": "chp-spec",
          "partial": "To One Channel'",
          "signature": "ChanOpts a-\u003em(AnyToOneChannel a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#v:anyToOneChannel-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "oneToAnyChannel",
          "package": "chp-spec",
          "signature": "m (OneToAnyChannel a)",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#oneToAnyChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "oneToAnyChannel",
          "package": "chp-spec",
          "partial": "To Any Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#v:oneToAnyChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "oneToAnyChannel'",
          "package": "chp-spec",
          "signature": "ChanOpts a -\u003e m (OneToAnyChannel a)",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#oneToAnyChannel%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "oneToAnyChannel'",
          "normalized": "ChanOpts a-\u003eb(OneToAnyChannel a)",
          "package": "chp-spec",
          "partial": "To Any Channel'",
          "signature": "ChanOpts a-\u003em(OneToAnyChannel a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#v:oneToAnyChannel-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "oneToOneChannel",
          "package": "chp-spec",
          "signature": "m (OneToOneChannel a)",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#oneToOneChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "oneToOneChannel",
          "package": "chp-spec",
          "partial": "To One Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#v:oneToOneChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "oneToOneChannel'",
          "package": "chp-spec",
          "signature": "ChanOpts a -\u003e m (OneToOneChannel a)",
          "source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#oneToOneChannel%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
          "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
          "name": "oneToOneChannel'",
          "normalized": "ChanOpts a-\u003eb(OneToOneChannel a)",
          "package": "chp-spec",
          "partial": "To One Channel'",
          "signature": "ChanOpts a-\u003em(OneToOneChannel a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#v:oneToOneChannel-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module containing all the different types of channels in CHP.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://chplib.wordpress.com/2010/04/22/automatic-model-generation-part-4-communication/\u003c/a\u003e\n for details of modelling communication.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.CHPSpec.Channels",
          "name": "Channels",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Channels.html",
          "type": "module"
        },
        "index": {
          "description": "The module containing all the different types of channels in CHP See http chplib.wordpress.com automatic-model-generation-part-4-communication for details of modelling communication",
          "hierarchy": "Control Concurrent CHPSpec Channels",
          "module": "Control.Concurrent.CHPSpec.Channels",
          "name": "Channels",
          "package": "chp-spec",
          "partial": "Channels",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module with support for things that are enrollable.\n\u003c/p\u003e\u003cp\u003eEnrollment is currently pretty much ignored during model generation, but these\n operations are provided so that you don't have to change your program.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "Enroll",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Enroll.html",
          "type": "module"
        },
        "index": {
          "description": "module with support for things that are enrollable Enrollment is currently pretty much ignored during model generation but these operations are provided so that you don have to change your program",
          "hierarchy": "Control Concurrent CHPSpec Enroll",
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "Enroll",
          "package": "chp-spec",
          "partial": "Enroll",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "Enrollable",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Enroll.html#Enrollable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Enroll",
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "Enrollable",
          "package": "chp-spec",
          "partial": "Enrollable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#t:Enrollable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "Enrolled",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Base.html#Enrolled",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Enroll",
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "Enrolled",
          "package": "chp-spec",
          "partial": "Enrolled",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#t:Enrolled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "enroll",
          "package": "chp-spec",
          "signature": "b z -\u003e (Enrolled b z -\u003e CHP a) -\u003e CHP a",
          "source": "src/Control-Concurrent-CHPSpec-Enroll.html#enroll",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Enroll",
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "enroll",
          "normalized": "a b-\u003e(Enrolled a b-\u003eCHP c)-\u003eCHP c",
          "package": "chp-spec",
          "signature": "b z-\u003e(Enrolled b z-\u003eCHP a)-\u003eCHP a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:enroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "enrollAll",
          "package": "chp-spec",
          "signature": "CHP (b p) -\u003e [Enrolled b p -\u003e CHP a] -\u003e CHP [a]",
          "source": "src/Control-Concurrent-CHPSpec-Enroll.html#enrollAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Enroll",
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "enrollAll",
          "normalized": "CHP(a b)-\u003e[Enrolled a b-\u003eCHP c]-\u003eCHP[c]",
          "package": "chp-spec",
          "partial": "All",
          "signature": "CHP(b p)-\u003e[Enrolled b p-\u003eCHP a]-\u003eCHP[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:enrollAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "enrollAllT",
          "package": "chp-spec",
          "signature": "([a] -\u003e CHP c) -\u003e CHP (b p) -\u003e [Enrolled b p -\u003e a] -\u003e CHP c",
          "source": "src/Control-Concurrent-CHPSpec-Enroll.html#enrollAllT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Enroll",
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "enrollAllT",
          "normalized": "([a]-\u003eCHP b)-\u003eCHP(c d)-\u003e[Enrolled c d-\u003ea]-\u003eCHP b",
          "package": "chp-spec",
          "partial": "All",
          "signature": "([a]-\u003eCHP c)-\u003eCHP(b p)-\u003e[Enrolled b p-\u003ea]-\u003eCHP c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:enrollAllT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "enrollAll_",
          "package": "chp-spec",
          "signature": "CHP (b p) -\u003e [Enrolled b p -\u003e CHP a] -\u003e CHP ()",
          "source": "src/Control-Concurrent-CHPSpec-Enroll.html#enrollAll_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Enroll",
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "enrollAll_",
          "normalized": "CHP(a b)-\u003e[Enrolled a b-\u003eCHP c]-\u003eCHP()",
          "package": "chp-spec",
          "partial": "All",
          "signature": "CHP(b p)-\u003e[Enrolled b p-\u003eCHP a]-\u003eCHP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:enrollAll_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "enrollList",
          "package": "chp-spec",
          "signature": "[b p] -\u003e ([Enrolled b p] -\u003e CHP a) -\u003e CHP a",
          "source": "src/Control-Concurrent-CHPSpec-Enroll.html#enrollList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Enroll",
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "enrollList",
          "normalized": "[a b]-\u003e([Enrolled a b]-\u003eCHP c)-\u003eCHP c",
          "package": "chp-spec",
          "partial": "List",
          "signature": "[b p]-\u003e([Enrolled b p]-\u003eCHP a)-\u003eCHP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:enrollList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "enrollOneMany",
          "package": "chp-spec",
          "signature": "([Enrolled b p] -\u003e CHP a) -\u003e [(CHP (b p), Enrolled b p -\u003e CHP c)] -\u003e CHP (a, [c])",
          "source": "src/Control-Concurrent-CHPSpec-Enroll.html#enrollOneMany",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Enroll",
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "enrollOneMany",
          "normalized": "([Enrolled a b]-\u003eCHP c)-\u003e[(CHP(a b),Enrolled a b-\u003eCHP d)]-\u003eCHP(c,[d])",
          "package": "chp-spec",
          "partial": "One Many",
          "signature": "([Enrolled b p]-\u003eCHP a)-\u003e[(CHP(b p),Enrolled b p-\u003eCHP c)]-\u003eCHP(a,[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:enrollOneMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "enrollPair",
          "package": "chp-spec",
          "signature": "(b p, b' p') -\u003e ((Enrolled b p, Enrolled b' p') -\u003e CHP a) -\u003e CHP a",
          "source": "src/Control-Concurrent-CHPSpec-Enroll.html#enrollPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Enroll",
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "enrollPair",
          "normalized": "(a b,c d)-\u003e((Enrolled a b,Enrolled c d)-\u003eCHP e)-\u003eCHP e",
          "package": "chp-spec",
          "partial": "Pair",
          "signature": "(b p,b' p')-\u003e((Enrolled b p,Enrolled b' p')-\u003eCHP a)-\u003eCHP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:enrollPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "furtherEnroll",
          "package": "chp-spec",
          "signature": "Enrolled b z -\u003e (Enrolled b z -\u003e CHP a) -\u003e CHP a",
          "source": "src/Control-Concurrent-CHPSpec-Enroll.html#furtherEnroll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Enroll",
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "furtherEnroll",
          "normalized": "Enrolled a b-\u003e(Enrolled a b-\u003eCHP c)-\u003eCHP c",
          "package": "chp-spec",
          "partial": "Enroll",
          "signature": "Enrolled b z-\u003e(Enrolled b z-\u003eCHP a)-\u003eCHP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:furtherEnroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "resign",
          "package": "chp-spec",
          "signature": "Enrolled b z -\u003e CHP a -\u003e CHP a",
          "source": "src/Control-Concurrent-CHPSpec-Enroll.html#resign",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Enroll",
          "module": "Control.Concurrent.CHPSpec.Enroll",
          "name": "resign",
          "normalized": "Enrolled a b-\u003eCHP c-\u003eCHP c",
          "package": "chp-spec",
          "signature": "Enrolled b z-\u003eCHP a-\u003eCHP a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:resign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a near-copy of the Test.LazySmallCheck module from the lazysmallcheck\n package on Hackage.  It was written by Matthew Naylor and Fredrik Lindblad.\n  I have modified it to add the \u003ccode\u003e\u003ca\u003efuzz\u003c/a\u003e\u003c/code\u003e function that is used by chp-spec internally,\n but to write that function I needed access to more internals than the original\n Test.LazySmallCheck exposed, hence I had to make a copy of the module.  Unfortunately,\n this means that the Serial type-class here is a different type-class (despite\n being identical in behaviour and API) from the original lazysmallcheck package.\n The modified module is exposed in case you need to supply any of your own instances\n for \u003ccode\u003e\u003ca\u003eSerial\u003c/a\u003e\u003c/code\u003e.  For more explanation of how Lazy SmallCheck is used in this library\n for modelling IO actions, see this blog post: \u003ca\u003ehttp://chplib.wordpress.com/2010/04/20/automatic-model-generation-part-3-choice-and-io/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "LazySmallCheck",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html",
          "type": "module"
        },
        "index": {
          "description": "This module is near-copy of the Test.LazySmallCheck module from the lazysmallcheck package on Hackage It was written by Matthew Naylor and Fredrik Lindblad have modified it to add the fuzz function that is used by chp-spec internally but to write that function needed access to more internals than the original Test.LazySmallCheck exposed hence had to make copy of the module Unfortunately this means that the Serial type-class here is different type-class despite being identical in behaviour and API from the original lazysmallcheck package The modified module is exposed in case you need to supply any of your own instances for Serial For more explanation of how Lazy SmallCheck is used in this library for modelling IO actions see this blog post http chplib.wordpress.com automatic-model-generation-part-3-choice-and-io",
          "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "LazySmallCheck",
          "package": "chp-spec",
          "partial": "Lazy Small Check",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "Cons",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#Cons",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "Cons",
          "package": "chp-spec",
          "partial": "Cons",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#t:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "Serial",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#Serial",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "Serial",
          "package": "chp-spec",
          "partial": "Serial",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#t:Serial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "Series",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#Series",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "Series",
          "package": "chp-spec",
          "partial": "Series",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#t:Series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "(\u003e\u003c)",
          "package": "chp-spec",
          "signature": "Series (a -\u003e b) -\u003e Series a -\u003e Series b",
          "source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#%3E%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "(\u003e\u003c) \u003e\u003c",
          "normalized": "Series(a-\u003eb)-\u003eSeries a-\u003eSeries b",
          "package": "chp-spec",
          "signature": "Series(a-\u003eb)-\u003eSeries a-\u003eSeries b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:-62--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "(\\/)",
          "package": "chp-spec",
          "signature": "Series a -\u003e Series a -\u003e Series a",
          "source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#%5C%2F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "(\\/) \\/",
          "normalized": "Series a-\u003eSeries a-\u003eSeries a",
          "package": "chp-spec",
          "signature": "Series a-\u003eSeries a-\u003eSeries a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:-92--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "cons",
          "package": "chp-spec",
          "signature": "a -\u003e Series a",
          "source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "cons",
          "normalized": "a-\u003eSeries a",
          "package": "chp-spec",
          "signature": "a-\u003eSeries a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "cons0",
          "package": "chp-spec",
          "signature": "a -\u003e Series a",
          "source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#cons0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "cons0",
          "normalized": "a-\u003eSeries a",
          "package": "chp-spec",
          "signature": "a-\u003eSeries a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:cons0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "cons1",
          "package": "chp-spec",
          "signature": "(a -\u003e b) -\u003e Series b",
          "source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#cons1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "cons1",
          "normalized": "(a-\u003eb)-\u003eSeries b",
          "package": "chp-spec",
          "signature": "(a-\u003eb)-\u003eSeries b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:cons1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "cons2",
          "package": "chp-spec",
          "signature": "(a -\u003e b -\u003e c) -\u003e Series c",
          "source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#cons2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "cons2",
          "normalized": "(a-\u003eb-\u003ec)-\u003eSeries c",
          "package": "chp-spec",
          "signature": "(a-\u003eb-\u003ec)-\u003eSeries c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:cons2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "cons3",
          "package": "chp-spec",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Series d",
          "source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#cons3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "cons3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eSeries d",
          "package": "chp-spec",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eSeries d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:cons3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "cons4",
          "package": "chp-spec",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Series e",
          "source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#cons4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "cons4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eSeries e",
          "package": "chp-spec",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eSeries e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:cons4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "cons5",
          "package": "chp-spec",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e Series f",
          "source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#cons5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "cons5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eSeries f",
          "package": "chp-spec",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eSeries f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:cons5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "drawnFrom",
          "package": "chp-spec",
          "signature": "[a] -\u003e Cons a",
          "source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#drawnFrom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "drawnFrom",
          "normalized": "[a]-\u003eCons a",
          "package": "chp-spec",
          "partial": "From",
          "signature": "[a]-\u003eCons a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:drawnFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "fuzz",
          "package": "chp-spec",
          "signature": "(a -\u003e StateT s IO b) -\u003e StateT s IO ([b], Bool)",
          "source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#fuzz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "fuzz",
          "normalized": "(a-\u003eStateT b IO c)-\u003eStateT b IO([c],Bool)",
          "package": "chp-spec",
          "signature": "(a-\u003eStateT s IO b)-\u003eStateT s IO([b],Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:fuzz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "series",
          "package": "chp-spec",
          "signature": "Series a",
          "source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#series",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
          "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
          "name": "series",
          "package": "chp-spec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains all the central monads in the CHP library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "Monad",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains all the central monads in the CHP library",
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "Monad",
          "package": "chp-spec",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe central monad of the library.  You can use\n the \u003ccode\u003especify\u003c/code\u003e function to model programs written with this monad.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "CHP",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Base.html#CHP",
          "type": "type"
        },
        "index": {
          "description": "The central monad of the library You can use the specify function to model programs written with this monad",
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "CHP",
          "package": "chp-spec",
          "partial": "CHP",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#t:CHP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "MonadCHP",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Base.html#MonadCHP",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "MonadCHP",
          "package": "chp-spec",
          "partial": "Monad CHP",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#t:MonadCHP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "Poisonable",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Base.html#Poisonable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "Poisonable",
          "package": "chp-spec",
          "partial": "Poisonable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#t:Poisonable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class with instances for CHP processes of the form \u003ccode\u003ea -\u003e b -\u003e .. -\u003e CHP r\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe return value of the process must support \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, and the arguments of\n the process must support \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "Process",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Process.html#Process",
          "type": "class"
        },
        "index": {
          "description": "class with instances for CHP processes of the form CHP The return value of the process must support Typeable and the arguments of the process must support Typeable and Eq",
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "Process",
          "package": "chp-spec",
          "partial": "Process",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#t:Process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "checkForPoison",
          "package": "chp-spec",
          "signature": "c -\u003e m ()",
          "source": "src/Control-Concurrent-CHPSpec-Base.html#checkForPoison",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "checkForPoison",
          "normalized": "a-\u003eb()",
          "package": "chp-spec",
          "partial": "For Poison",
          "signature": "c-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:checkForPoison"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModels processes that run forever.\n\u003c/p\u003e\u003cp\u003eAnything following a \u003ccode\u003e\u003ca\u003eforeverP\u003c/a\u003e\u003c/code\u003e call in sequence will not be modelled.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "foreverP",
          "package": "chp-spec",
          "signature": "CHP a -\u003e CHP b",
          "source": "src/Control-Concurrent-CHPSpec-Monad.html#foreverP",
          "type": "function"
        },
        "index": {
          "description": "Models processes that run forever Anything following foreverP call in sequence will not be modelled",
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "foreverP",
          "normalized": "CHP a-\u003eCHP b",
          "package": "chp-spec",
          "signature": "CHP a-\u003eCHP b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:foreverP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "liftCHP",
          "package": "chp-spec",
          "signature": "CHP a -\u003e m a",
          "source": "src/Control-Concurrent-CHPSpec-Base.html#liftCHP",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "liftCHP",
          "normalized": "CHP a-\u003eb a",
          "package": "chp-spec",
          "partial": "CHP",
          "signature": "CHP a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:liftCHP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003eliftIO_CHP'\u003c/code\u003e, but with an empty label.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "liftIO_CHP",
          "package": "chp-spec",
          "signature": "IO a -\u003e CHP a",
          "source": "src/Control-Concurrent-CHPSpec-Monad.html#liftIO_CHP",
          "type": "function"
        },
        "index": {
          "description": "Like liftIO CHP but with an empty label",
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "liftIO_CHP",
          "normalized": "IO a-\u003eCHP a",
          "package": "chp-spec",
          "partial": "IO CHP",
          "signature": "IO a-\u003eCHP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:liftIO_CHP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModels the lifting of an IO action into the CHP monad.\n\u003c/p\u003e\u003cp\u003eThe IO computation itself is completely ignored.  The label (first parameter)\n is used to label various different dummy events, which arise from exploring\n the return type of the IO computation.  To support this exploration, the return\n type must be an instance of \u003ccode\u003e\u003ca\u003eSerial\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMore details and a full explanation of how IO events are modelled are available\n in this blog post: \u003ca\u003ehttp://chplib.wordpress.com/2010/04/20/automatic-model-generation-part-3-choice-and-io/\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "liftIO_CHP'",
          "package": "chp-spec",
          "signature": "String -\u003e IO a -\u003e CHP a",
          "source": "src/Control-Concurrent-CHPSpec-Monad.html#liftIO_CHP%27",
          "type": "function"
        },
        "index": {
          "description": "Models the lifting of an IO action into the CHP monad The IO computation itself is completely ignored The label first parameter is used to label various different dummy events which arise from exploring the return type of the IO computation To support this exploration the return type must be an instance of Serial More details and full explanation of how IO events are modelled are available in this blog post http chplib.wordpress.com automatic-model-generation-part-3-choice-and-io",
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "liftIO_CHP'",
          "normalized": "String-\u003eIO a-\u003eCHP a",
          "package": "chp-spec",
          "partial": "IO CHP'",
          "signature": "String-\u003eIO a-\u003eCHP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:liftIO_CHP-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eonPoisonTrap\u003c/a\u003e\u003c/code\u003e, this function allows you to provide a handler for\n  poison.  Since poison is not currently modelled, this acts like \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e at\n  the moment.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "onPoisonRethrow",
          "package": "chp-spec",
          "signature": "CHP a -\u003e CHP () -\u003e CHP a",
          "source": "src/Control-Concurrent-CHPSpec-Base.html#onPoisonRethrow",
          "type": "function"
        },
        "index": {
          "description": "Like onPoisonTrap this function allows you to provide handler for poison Since poison is not currently modelled this acts like const at the moment",
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "onPoisonRethrow",
          "normalized": "CHP a-\u003eCHP()-\u003eCHP a",
          "package": "chp-spec",
          "partial": "Poison Rethrow",
          "signature": "CHP a-\u003eCHP()-\u003eCHP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:onPoisonRethrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows you to provide a handler for sections with poison.  Since poison is\n not currently modelled, this acts like \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e at the moment.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "onPoisonTrap",
          "package": "chp-spec",
          "signature": "forall a.  CHP a -\u003e CHP a -\u003e CHP a",
          "source": "src/Control-Concurrent-CHPSpec-Base.html#onPoisonTrap",
          "type": "function"
        },
        "index": {
          "description": "Allows you to provide handler for sections with poison Since poison is not currently modelled this acts like const at the moment",
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "onPoisonTrap",
          "normalized": "a b CHP c-\u003eCHP c-\u003eCHP c",
          "package": "chp-spec",
          "partial": "Poison Trap",
          "signature": "forall a. CHP a-\u003eCHP a-\u003eCHP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:onPoisonTrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "poison",
          "package": "chp-spec",
          "signature": "c -\u003e m ()",
          "source": "src/Control-Concurrent-CHPSpec-Base.html#poison",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "poison",
          "normalized": "a-\u003eb()",
          "package": "chp-spec",
          "signature": "c-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:poison"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "poisonAll",
          "package": "chp-spec",
          "signature": "[c] -\u003e m ()",
          "source": "src/Control-Concurrent-CHPSpec-Base.html#poisonAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "poisonAll",
          "normalized": "[a]-\u003eb()",
          "package": "chp-spec",
          "partial": "All",
          "signature": "[c]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:poisonAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn annotation to put around a top-level process.  This annotation must be\n inside the recursive knot.  You can either place it as:\n\u003c/p\u003e\u003cpre\u003e foo :: Int -\u003e String -\u003e CHP ()\n foo = process \"foo\" $ \\n s -\u003e ...\n\u003c/pre\u003e\u003cp\u003eOr as follows:\n\u003c/p\u003e\u003cpre\u003e foo :: Int -\u003e String -\u003e CHP ()\n foo = process \"foo\" foo'\n   where\n     foo' n s = ...\n\u003c/pre\u003e\u003cp\u003eThe annotation must capture all the parameters to the process.  What you must \u003cem\u003enot\u003c/em\u003e do is place it\n such that there are free parameters not captured, for example this is \u003cem\u003ewrong\u003c/em\u003e:\n\u003c/p\u003e\u003cpre\u003e foo :: Int -\u003e String -\u003e CHP ()\n foo n s = process \"foo\" foo'\n   where\n     foo' = ...\n\u003c/pre\u003e\u003cp\u003eIf you do want to have recursive processes that have outer parameters and not\n pass them, you must wrap the outer process in \u003ccode\u003e\u003ca\u003eprocess\u003c/a\u003e\u003c/code\u003e and the inner process(es)\n in \u003ccode\u003e\u003ca\u003esubProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "process",
          "package": "chp-spec",
          "signature": "String -\u003e p -\u003e p",
          "source": "src/Control-Concurrent-CHPSpec-Process.html#process",
          "type": "function"
        },
        "index": {
          "description": "An annotation to put around top-level process This annotation must be inside the recursive knot You can either place it as foo Int String CHP foo process foo Or as follows foo Int String CHP foo process foo foo where foo The annotation must capture all the parameters to the process What you must not do is place it such that there are free parameters not captured for example this is wrong foo Int String CHP foo process foo foo where foo If you do want to have recursive processes that have outer parameters and not pass them you must wrap the outer process in process and the inner process es in subProcess",
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "process",
          "normalized": "String-\u003ea-\u003ea",
          "package": "chp-spec",
          "signature": "String-\u003ep-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "skip",
          "package": "chp-spec",
          "signature": "CHP ()",
          "source": "src/Control-Concurrent-CHPSpec-Monad.html#skip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "skip",
          "normalized": "CHP()",
          "package": "chp-spec",
          "signature": "CHP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe top-level function in this library, to be used in place of runCHP in your\n program.  You pass it a boolean (True if you want to leave the dummy IO events\n exposed, False if you want them hidden) and a CHP process that you want to specify.\n  The result is a String containing a CSP-M specification that can be written\n out to a file and read in to other tools, such as FDR, PRoBE and others.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "specify",
          "package": "chp-spec",
          "signature": "Bool -\u003e CHP () -\u003e IO String",
          "source": "src/Control-Concurrent-CHPSpec-Monad.html#specify",
          "type": "function"
        },
        "index": {
          "description": "The top-level function in this library to be used in place of runCHP in your program You pass it boolean True if you want to leave the dummy IO events exposed False if you want them hidden and CHP process that you want to specify The result is String containing CSP-M specification that can be written out to file and read in to other tools such as FDR PRoBE and others",
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "specify",
          "normalized": "Bool-\u003eCHP()-\u003eIO String",
          "package": "chp-spec",
          "signature": "Bool-\u003eCHP()-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:specify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "stop",
          "package": "chp-spec",
          "signature": "CHP a",
          "source": "src/Control-Concurrent-CHPSpec-Monad.html#stop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "stop",
          "package": "chp-spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "subProcess",
          "package": "chp-spec",
          "signature": "String -\u003e p -\u003e p",
          "source": "src/Control-Concurrent-CHPSpec-Process.html#subProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "subProcess",
          "normalized": "String-\u003ea-\u003ea",
          "package": "chp-spec",
          "partial": "Process",
          "signature": "String-\u003ep-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:subProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrows a poison exception.  Poison is not currently modelled.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "throwPoison",
          "package": "chp-spec",
          "signature": "CHP a",
          "source": "src/Control-Concurrent-CHPSpec-Base.html#throwPoison",
          "type": "function"
        },
        "index": {
          "description": "Throws poison exception Poison is not currently modelled",
          "hierarchy": "Control Concurrent CHPSpec Monad",
          "module": "Control.Concurrent.CHPSpec.Monad",
          "name": "throwPoison",
          "package": "chp-spec",
          "partial": "Poison",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:throwPoison"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for running items in parallel.  See \u003ca\u003ehttp://chplib.wordpress.com/2010/04/13/automatic-model-generation-part-1-parallel/\u003c/a\u003e\n for details of how parallel items are modelled.\n\u003c/p\u003e\u003cp\u003eParallel specifications are well supported, and the only change to this module\n from normal CHP is that forking is not currently supported.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.CHPSpec.Parallel",
          "name": "Parallel",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec-Parallel.html",
          "type": "module"
        },
        "index": {
          "description": "module for running items in parallel See http chplib.wordpress.com automatic-model-generation-part-1-parallel for details of how parallel items are modelled Parallel specifications are well supported and the only change to this module from normal CHP is that forking is not currently supported",
          "hierarchy": "Control Concurrent CHPSpec Parallel",
          "module": "Control.Concurrent.CHPSpec.Parallel",
          "name": "Parallel",
          "package": "chp-spec",
          "partial": "Parallel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Parallel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Parallel",
          "name": "(\u003c||\u003e)",
          "package": "chp-spec",
          "signature": "CHP a -\u003e CHP b -\u003e CHP (a, b)",
          "source": "src/Control-Concurrent-CHPSpec-Parallel.html#%3C%7C%7C%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Parallel",
          "module": "Control.Concurrent.CHPSpec.Parallel",
          "name": "(\u003c||\u003e) \u003c||\u003e",
          "normalized": "CHP a-\u003eCHP b-\u003eCHP(a,b)",
          "package": "chp-spec",
          "signature": "CHP a-\u003eCHP b-\u003eCHP(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Parallel.html#v:-60--124--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Parallel",
          "name": "(\u003c|*|\u003e)",
          "package": "chp-spec",
          "signature": "CHP a -\u003e CHP b -\u003e CHP ()",
          "source": "src/Control-Concurrent-CHPSpec-Parallel.html#%3C%7C%2A%7C%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Parallel",
          "module": "Control.Concurrent.CHPSpec.Parallel",
          "name": "(\u003c|*|\u003e) \u003c|*|\u003e",
          "normalized": "CHP a-\u003eCHP b-\u003eCHP()",
          "package": "chp-spec",
          "signature": "CHP a-\u003eCHP b-\u003eCHP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Parallel.html#v:-60--124--42--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Parallel",
          "name": "runParMapM",
          "package": "chp-spec",
          "signature": "(a -\u003e CHP b) -\u003e [a] -\u003e CHP [b]",
          "source": "src/Control-Concurrent-CHPSpec-Parallel.html#runParMapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Parallel",
          "module": "Control.Concurrent.CHPSpec.Parallel",
          "name": "runParMapM",
          "normalized": "(a-\u003eCHP b)-\u003e[a]-\u003eCHP[b]",
          "package": "chp-spec",
          "partial": "Par Map",
          "signature": "(a-\u003eCHP b)-\u003e[a]-\u003eCHP[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Parallel.html#v:runParMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Parallel",
          "name": "runParMapM_",
          "package": "chp-spec",
          "signature": "(a -\u003e CHP b) -\u003e [a] -\u003e CHP ()",
          "source": "src/Control-Concurrent-CHPSpec-Parallel.html#runParMapM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Parallel",
          "module": "Control.Concurrent.CHPSpec.Parallel",
          "name": "runParMapM_",
          "normalized": "(a-\u003eCHP b)-\u003e[a]-\u003eCHP()",
          "package": "chp-spec",
          "partial": "Par Map",
          "signature": "(a-\u003eCHP b)-\u003e[a]-\u003eCHP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Parallel.html#v:runParMapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Parallel",
          "name": "runParallel",
          "package": "chp-spec",
          "signature": "[CHP a] -\u003e CHP [a]",
          "source": "src/Control-Concurrent-CHPSpec-Parallel.html#runParallel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Parallel",
          "module": "Control.Concurrent.CHPSpec.Parallel",
          "name": "runParallel",
          "normalized": "[CHP a]-\u003eCHP[a]",
          "package": "chp-spec",
          "partial": "Parallel",
          "signature": "[CHP a]-\u003eCHP[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Parallel.html#v:runParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.CHPSpec.Parallel",
          "name": "runParallel_",
          "package": "chp-spec",
          "signature": "[CHP a] -\u003e CHP ()",
          "source": "src/Control-Concurrent-CHPSpec-Parallel.html#runParallel_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent CHPSpec Parallel",
          "module": "Control.Concurrent.CHPSpec.Parallel",
          "name": "runParallel_",
          "normalized": "[CHP a]-\u003eCHP()",
          "package": "chp-spec",
          "partial": "Parallel",
          "signature": "[CHP a]-\u003eCHP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Parallel.html#v:runParallel_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports all of the functionality of the chp-spec library, except\n the \u003ca\u003eControl.Concurrent.CHPSpec.LazySmallCheck\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eThe documentation for this library may seem relatively spartan; only the functions\n and modules with significant differences/caveats from CHP API are documented.\n  All the details of how each aspect is modelled is available in the original\n series of blog posts.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.CHPSpec",
          "name": "CHPSpec",
          "package": "chp-spec",
          "source": "src/Control-Concurrent-CHPSpec.html",
          "type": "module"
        },
        "index": {
          "description": "This module re-exports all of the functionality of the chp-spec library except the Control.Concurrent.CHPSpec.LazySmallCheck module The documentation for this library may seem relatively spartan only the functions and modules with significant differences caveats from CHP API are documented All the details of how each aspect is modelled is available in the original series of blog posts",
          "hierarchy": "Control Concurrent CHPSpec",
          "module": "Control.Concurrent.CHPSpec",
          "name": "CHPSpec",
          "package": "chp-spec",
          "partial": "CHPSpec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec.html#"
      }
    }
  ]
]