[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Alt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing the choice constructs.  See \u003ca\u003ehttp://chplib.wordpress.com/2010/04/20/automatic-model-generation-part-3-choice-and-io/\u003c/a\u003e\n for details of how choice is modelled.\n\u003c/p\u003e\u003cp\u003eCurrently conjunction is not modelled (mainly because CSP/FDR don't support\n it), but external choice is modelled fine; \u003ccode\u003e\u003ca\u003epriAlt\u003c/a\u003e\u003c/code\u003e is modelled as a plain \u003ccode\u003e\u003ca\u003ealt\u003c/a\u003e\u003c/code\u003e,\n though.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Alt",
        "fct-package": "chp-spec",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHPSpec-Alt.html",
        "fct-type": "module",
        "title": "Alt"
      },
      "index": {
        "description": "module containing the choice constructs See http chplib.wordpress.com automatic-model-generation-part-3-choice-and-io for details of how choice is modelled Currently conjunction is not modelled mainly because CSP FDR don support it but external choice is modelled fine priAlt is modelled as plain alt though",
        "hierarchy": "Control Concurrent CHPSpec Alt",
        "module": "Control.Concurrent.CHPSpec.Alt",
        "name": "Alt",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Alt.html#v:-60--45--62-",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Alt",
        "fct-package": "chp-spec",
        "fct-signature": "CHP a -\u003e CHP a -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Alt.html#%3C-%3E",
        "fct-type": "function",
        "title": "(\u003c-\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Alt",
        "module": "Control.Concurrent.CHPSpec.Alt",
        "name": "(\u003c-\u003e) \u003c-\u003e",
        "normalized": "CHP a-\u003eCHP a-\u003eCHP a",
        "package": "chp-spec",
        "partial": "",
        "signature": "CHP a-\u003eCHP a-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Alt.html#v:-60--47--62-",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Alt",
        "fct-package": "chp-spec",
        "fct-signature": "CHP a -\u003e CHP a -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Alt.html#%3C%2F%3E",
        "fct-type": "function",
        "title": "(\u003c/\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Alt",
        "module": "Control.Concurrent.CHPSpec.Alt",
        "name": "(\u003c/\u003e) \u003c/\u003e",
        "normalized": "CHP a-\u003eCHP a-\u003eCHP a",
        "package": "chp-spec",
        "partial": "",
        "signature": "CHP a-\u003eCHP a-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Alt.html#v:alt",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Alt",
        "fct-package": "chp-spec",
        "fct-signature": "[CHP a] -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Alt.html#alt",
        "fct-type": "function",
        "title": "alt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Alt",
        "module": "Control.Concurrent.CHPSpec.Alt",
        "name": "alt",
        "normalized": "[CHP a]-\u003eCHP a",
        "package": "chp-spec",
        "partial": "",
        "signature": "[CHP a]-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Alt.html#v:priAlt",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Alt",
        "fct-package": "chp-spec",
        "fct-signature": "[CHP a] -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Alt.html#priAlt",
        "fct-type": "function",
        "title": "priAlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Alt",
        "module": "Control.Concurrent.CHPSpec.Alt",
        "name": "priAlt",
        "normalized": "[CHP a]-\u003eCHP a",
        "package": "chp-spec",
        "partial": "Alt",
        "signature": "[CHP a]-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing barriers.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePhasedBarrier\u003c/a\u003e\u003c/code\u003e type remains, but currently \u003ccode\u003e\u003ca\u003esyncBarrier\u003c/a\u003e\u003c/code\u003e has been changed\n so that it only works on \u003ccode\u003e\u003ca\u003eBarrier\u003c/a\u003e\u003c/code\u003e, i.e. \u003ccode\u003ePhasedBarrier ()\u003c/code\u003e.  This is because\n phases haven't been modelled yet.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html",
        "fct-type": "module",
        "title": "Barriers"
      },
      "index": {
        "description": "module containing barriers The PhasedBarrier type remains but currently syncBarrier has been changed so that it only works on Barrier i.e PhasedBarrier This is because phases haven been modelled yet",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "Barriers",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Barriers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#t:BarOpts",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#BarOpts",
        "fct-type": "data",
        "title": "BarOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "BarOpts",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Bar Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#t:Barrier",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#Barrier",
        "fct-type": "type",
        "title": "Barrier"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "Barrier",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Barrier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#t:EnrolledBarrier",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#EnrolledBarrier",
        "fct-type": "type",
        "title": "EnrolledBarrier"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "EnrolledBarrier",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Enrolled Barrier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#t:PhasedBarrier",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHPSpec-CSP.html#PhasedBarrier",
        "fct-type": "data",
        "title": "PhasedBarrier"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "PhasedBarrier",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Phased Barrier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:BarOpts",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "BarOpts",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#BarOpts",
        "fct-type": "function",
        "title": "BarOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "BarOpts",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Bar Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:barIncPhase",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "phase -\u003e phase",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#BarOpts",
        "fct-type": "function",
        "title": "barIncPhase"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "barIncPhase",
        "normalized": "a-\u003ea",
        "package": "chp-spec",
        "partial": "Inc Phase",
        "signature": "phase-\u003ephase"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:barLabel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "String -\u003e BarOpts phase",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#barLabel",
        "fct-type": "function",
        "title": "barLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "barLabel",
        "normalized": "String-\u003eBarOpts a",
        "package": "chp-spec",
        "partial": "Label",
        "signature": "String-\u003eBarOpts phase"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:barOptsLabel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "Maybe String",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#BarOpts",
        "fct-type": "function",
        "title": "barOptsLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "barOptsLabel",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Opts Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:barOptsShow",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "phase -\u003e String",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#BarOpts",
        "fct-type": "function",
        "title": "barOptsShow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "barOptsShow",
        "normalized": "a-\u003eString",
        "package": "chp-spec",
        "partial": "Opts Show",
        "signature": "phase-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:barPriority",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "Int",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#BarOpts",
        "fct-type": "function",
        "title": "barPriority"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "barPriority",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Priority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:defaultBarOpts",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "BarOpts phase",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#defaultBarOpts",
        "fct-type": "function",
        "title": "defaultBarOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "defaultBarOpts",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Bar Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:defaultIncPhase",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "phase -\u003e phase",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#defaultIncPhase",
        "fct-type": "function",
        "title": "defaultIncPhase"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "defaultIncPhase",
        "normalized": "a-\u003ea",
        "package": "chp-spec",
        "partial": "Inc Phase",
        "signature": "phase-\u003ephase"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:newBarrier",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "CHP Barrier",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#newBarrier",
        "fct-type": "function",
        "title": "newBarrier"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "newBarrier",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Barrier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:newBarrierPri",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "Int -\u003e CHP Barrier",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#newBarrierPri",
        "fct-type": "function",
        "title": "newBarrierPri"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "newBarrierPri",
        "normalized": "Int-\u003eCHP Barrier",
        "package": "chp-spec",
        "partial": "Barrier Pri",
        "signature": "Int-\u003eCHP Barrier"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:newBarrierWithLabel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "String -\u003e CHP Barrier",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#newBarrierWithLabel",
        "fct-type": "function",
        "title": "newBarrierWithLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "newBarrierWithLabel",
        "normalized": "String-\u003eCHP Barrier",
        "package": "chp-spec",
        "partial": "Barrier With Label",
        "signature": "String-\u003eCHP Barrier"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:newPhasedBarrier",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "phase -\u003e CHP (PhasedBarrier phase)",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#newPhasedBarrier",
        "fct-type": "function",
        "title": "newPhasedBarrier"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "newPhasedBarrier",
        "normalized": "a-\u003eCHP(PhasedBarrier a)",
        "package": "chp-spec",
        "partial": "Phased Barrier",
        "signature": "phase-\u003eCHP(PhasedBarrier phase)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:newPhasedBarrier-39-",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "phase -\u003e BarOpts phase -\u003e CHP (PhasedBarrier phase)",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#newPhasedBarrier%27",
        "fct-type": "function",
        "title": "newPhasedBarrier'"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "newPhasedBarrier'",
        "normalized": "a-\u003eBarOpts a-\u003eCHP(PhasedBarrier a)",
        "package": "chp-spec",
        "partial": "Phased Barrier'",
        "signature": "phase-\u003eBarOpts phase-\u003eCHP(PhasedBarrier phase)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Barriers.html#v:syncBarrier",
      "description": {
        "fct-descr": "\u003cp\u003eUnlike normal CHP, this function only works on barriers with the unit type\n for a phase.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Barriers",
        "fct-package": "chp-spec",
        "fct-signature": "EnrolledBarrier -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHPSpec-Barriers.html#syncBarrier",
        "fct-type": "function",
        "title": "syncBarrier"
      },
      "index": {
        "description": "Unlike normal CHP this function only works on barriers with the unit type for phase",
        "hierarchy": "Control Concurrent CHPSpec Barriers",
        "module": "Control.Concurrent.CHPSpec.Barriers",
        "name": "syncBarrier",
        "normalized": "EnrolledBarrier-\u003eCHP()",
        "package": "chp-spec",
        "partial": "Barrier",
        "signature": "EnrolledBarrier-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "fct-package": "chp-spec",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html",
        "fct-type": "module",
        "title": "Communication"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Communication",
        "module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "name": "Communication",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Communication",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#t:ReadableChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "fct-package": "chp-spec",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#ReadableChannel",
        "fct-type": "class",
        "title": "ReadableChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Communication",
        "module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "name": "ReadableChannel",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Readable Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#t:WriteableChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "fct-package": "chp-spec",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#WriteableChannel",
        "fct-type": "class",
        "title": "WriteableChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Communication",
        "module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "name": "WriteableChannel",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Writeable Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#v:extReadChannel",
      "description": {
        "fct-descr": "\u003cp\u003eCurrently, extended inputs and outputs are modelled (incorrectly) as standard\n inputs and outputs.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "fct-package": "chp-spec",
        "fct-signature": "chanEnd a -\u003e (a -\u003e CHP b) -\u003e CHP b",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#extReadChannel",
        "fct-type": "method",
        "title": "extReadChannel"
      },
      "index": {
        "description": "Currently extended inputs and outputs are modelled incorrectly as standard inputs and outputs",
        "hierarchy": "Control Concurrent CHPSpec Channels Communication",
        "module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "name": "extReadChannel",
        "normalized": "a b-\u003e(b-\u003eCHP c)-\u003eCHP c",
        "package": "chp-spec",
        "partial": "Read Channel",
        "signature": "chanEnd a-\u003e(a-\u003eCHP b)-\u003eCHP b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#v:extWriteChannel",
      "description": {
        "fct-descr": "\u003cp\u003eCurrently, extended inputs and outputs are modelled (incorrectly) as standard\n inputs and outputs.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "fct-package": "chp-spec",
        "fct-signature": "chanEnd a -\u003e CHP a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#extWriteChannel",
        "fct-type": "method",
        "title": "extWriteChannel"
      },
      "index": {
        "description": "Currently extended inputs and outputs are modelled incorrectly as standard inputs and outputs",
        "hierarchy": "Control Concurrent CHPSpec Channels Communication",
        "module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "name": "extWriteChannel",
        "normalized": "a b-\u003eCHP b-\u003eCHP()",
        "package": "chp-spec",
        "partial": "Write Channel",
        "signature": "chanEnd a-\u003eCHP a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#v:extWriteChannel-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCurrently, extended inputs and outputs are modelled (incorrectly) as standard\n inputs and outputs.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "fct-package": "chp-spec",
        "fct-signature": "chanEnd a -\u003e CHP (a, b) -\u003e CHP b",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#extWriteChannel%27",
        "fct-type": "method",
        "title": "extWriteChannel'"
      },
      "index": {
        "description": "Currently extended inputs and outputs are modelled incorrectly as standard inputs and outputs",
        "hierarchy": "Control Concurrent CHPSpec Channels Communication",
        "module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "name": "extWriteChannel'",
        "normalized": "a b-\u003eCHP(b,c)-\u003eCHP c",
        "package": "chp-spec",
        "partial": "Write Channel'",
        "signature": "chanEnd a-\u003eCHP(a,b)-\u003eCHP b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#v:readChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "fct-package": "chp-spec",
        "fct-signature": "chanEnd a -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#readChannel",
        "fct-type": "method",
        "title": "readChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Communication",
        "module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "name": "readChannel",
        "normalized": "a b-\u003eCHP b",
        "package": "chp-spec",
        "partial": "Channel",
        "signature": "chanEnd a-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#v:writeChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "fct-package": "chp-spec",
        "fct-signature": "chanEnd a -\u003e a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#writeChannel",
        "fct-type": "method",
        "title": "writeChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Communication",
        "module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "name": "writeChannel",
        "normalized": "a b-\u003eb-\u003eCHP()",
        "package": "chp-spec",
        "partial": "Channel",
        "signature": "chanEnd a-\u003ea-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#v:writeChannelStrict",
      "description": {
        "fct-descr": "\u003cp\u003eThis function strictly evaluates its second argument and then behaves like\n \u003ccode\u003e\u003ca\u003ewriteChannel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "fct-package": "chp-spec",
        "fct-signature": "chanEnd a -\u003e a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#writeChannelStrict",
        "fct-type": "function",
        "title": "writeChannelStrict"
      },
      "index": {
        "description": "This function strictly evaluates its second argument and then behaves like writeChannel",
        "hierarchy": "Control Concurrent CHPSpec Channels Communication",
        "module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "name": "writeChannelStrict",
        "normalized": "a b-\u003eb-\u003eCHP()",
        "package": "chp-spec",
        "partial": "Channel Strict",
        "signature": "chanEnd a-\u003ea-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Communication.html#v:writeValue",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "fct-package": "chp-spec",
        "fct-signature": "a -\u003e chanEnd a -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Communication.html#writeValue",
        "fct-type": "function",
        "title": "writeValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Communication",
        "module": "Control.Concurrent.CHPSpec.Channels.Communication",
        "name": "writeValue",
        "normalized": "a-\u003eb a-\u003eCHP()",
        "package": "chp-spec",
        "partial": "Value",
        "signature": "a-\u003echanEnd a-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html",
        "fct-type": "module",
        "title": "Creation"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "Creation",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Creation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#t:Chan",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Base.html#Chan",
        "fct-type": "data",
        "title": "Chan"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "Chan",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Chan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#t:ChanOpts",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for channel creation.  The first two will be ignored, but the label\n (if present) will be used to label the channel in the specification.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#ChanOpts",
        "fct-type": "data",
        "title": "ChanOpts"
      },
      "index": {
        "description": "Options for channel creation The first two will be ignored but the label if present will be used to label the channel in the specification",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "ChanOpts",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Chan Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#t:Channel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#Channel",
        "fct-type": "class",
        "title": "Channel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "Channel",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:ChanOpts",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "ChanOpts",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#ChanOpts",
        "fct-type": "function",
        "title": "ChanOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "ChanOpts",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Chan Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:chanLabel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "String -\u003e ChanOpts a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#chanLabel",
        "fct-type": "function",
        "title": "chanLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "chanLabel",
        "normalized": "String-\u003eChanOpts a",
        "package": "chp-spec",
        "partial": "Label",
        "signature": "String-\u003eChanOpts a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:chanOptsLabel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "Maybe String",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#ChanOpts",
        "fct-type": "function",
        "title": "chanOptsLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "chanOptsLabel",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Opts Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:chanOptsPriority",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "Int",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#ChanOpts",
        "fct-type": "function",
        "title": "chanOptsPriority"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "chanOptsPriority",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Opts Priority",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:chanOptsShow",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#ChanOpts",
        "fct-type": "function",
        "title": "chanOptsShow"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "chanOptsShow",
        "normalized": "a-\u003eString",
        "package": "chp-spec",
        "partial": "Opts Show",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:defaultChanOpts",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "ChanOpts a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#defaultChanOpts",
        "fct-type": "function",
        "title": "defaultChanOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "defaultChanOpts",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Chan Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:labelChannel",
      "description": {
        "fct-descr": "\u003cp\u003eLabels a channel in the traces.  It is easiest to do this at creation.\n The effect of re-labelling channels after their first use is undefined.\n\u003c/p\u003e\u003cp\u003eThis function does work as expected in chp-spec.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "Chan r w a -\u003e String -\u003e m ()",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#labelChannel",
        "fct-type": "function",
        "title": "labelChannel"
      },
      "index": {
        "description": "Labels channel in the traces It is easiest to do this at creation The effect of re-labelling channels after their first use is undefined This function does work as expected in chp-spec",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "labelChannel",
        "normalized": "Chan a b c-\u003eString-\u003ed()",
        "package": "chp-spec",
        "partial": "Channel",
        "signature": "Chan r w a-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:newChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "m (Chan r w a)",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#newChannel",
        "fct-type": "function",
        "title": "newChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "newChannel",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:newChannel-39-",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "ChanOpts a -\u003e m (Chan r w a)",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#newChannel%27",
        "fct-type": "method",
        "title": "newChannel'"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "newChannel'",
        "normalized": "ChanOpts a-\u003eb(Chan c d a)",
        "package": "chp-spec",
        "partial": "Channel'",
        "signature": "ChanOpts a-\u003em(Chan r w a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:newChannelList",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "Int -\u003e m [Chan r w a]",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#newChannelList",
        "fct-type": "function",
        "title": "newChannelList"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "newChannelList",
        "normalized": "Int-\u003ea[Chan b c d]",
        "package": "chp-spec",
        "partial": "Channel List",
        "signature": "Int-\u003em[Chan r w a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:newChannelListWithLabels",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "[String] -\u003e m [Chan r w a]",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#newChannelListWithLabels",
        "fct-type": "function",
        "title": "newChannelListWithLabels"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "newChannelListWithLabels",
        "normalized": "[String]-\u003ea[Chan b c d]",
        "package": "chp-spec",
        "partial": "Channel List With Labels",
        "signature": "[String]-\u003em[Chan r w a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:newChannelListWithStem",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "Int -\u003e String -\u003e m [Chan r w a]",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#newChannelListWithStem",
        "fct-type": "function",
        "title": "newChannelListWithStem"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "newChannelListWithStem",
        "normalized": "Int-\u003eString-\u003ea[Chan b c d]",
        "package": "chp-spec",
        "partial": "Channel List With Stem",
        "signature": "Int-\u003eString-\u003em[Chan r w a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:newChannelRW",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "m (r a, w a)",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#newChannelRW",
        "fct-type": "function",
        "title": "newChannelRW"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "newChannelRW",
        "normalized": "a(b c,d c)",
        "package": "chp-spec",
        "partial": "Channel RW",
        "signature": "m(r a,w a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:newChannelWR",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "m (w a, r a)",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#newChannelWR",
        "fct-type": "function",
        "title": "newChannelWR"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "newChannelWR",
        "normalized": "a(b c,d c)",
        "package": "chp-spec",
        "partial": "Channel WR",
        "signature": "m(w a,r a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Creation.html#v:sameChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "fct-package": "chp-spec",
        "fct-signature": "r a -\u003e w a -\u003e Bool",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Creation.html#sameChannel",
        "fct-type": "method",
        "title": "sameChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Creation",
        "module": "Control.Concurrent.CHPSpec.Channels.Creation",
        "name": "sameChannel",
        "normalized": "a b-\u003ec b-\u003eBool",
        "package": "chp-spec",
        "partial": "Channel",
        "signature": "r a-\u003ew a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "fct-package": "chp-spec",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Ends.html",
        "fct-type": "module",
        "title": "Ends"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Ends",
        "module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "name": "Ends",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Ends",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#t:Chanin",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "fct-package": "chp-spec",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Base.html#Chanin",
        "fct-type": "data",
        "title": "Chanin"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Ends",
        "module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "name": "Chanin",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Chanin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#t:Chanout",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "fct-package": "chp-spec",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Base.html#Chanout",
        "fct-type": "data",
        "title": "Chanout"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Ends",
        "module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "name": "Chanout",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Chanout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#t:Shared",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "fct-package": "chp-spec",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHPSpec-CSP.html#Shared",
        "fct-type": "data",
        "title": "Shared"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Ends",
        "module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "name": "Shared",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Shared",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#v:claim",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "fct-package": "chp-spec",
        "fct-signature": "Shared c a -\u003e (c a -\u003e CHP b) -\u003e CHP b",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Ends.html#claim",
        "fct-type": "function",
        "title": "claim"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Ends",
        "module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "name": "claim",
        "normalized": "Shared a b-\u003e(a b-\u003eCHP c)-\u003eCHP c",
        "package": "chp-spec",
        "partial": "",
        "signature": "Shared c a-\u003e(c a-\u003eCHP b)-\u003eCHP b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#v:reader",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "fct-package": "chp-spec",
        "fct-signature": "Chan r w a -\u003e r a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Base.html#reader",
        "fct-type": "function",
        "title": "reader"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Ends",
        "module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "name": "reader",
        "normalized": "Chan a b c-\u003ea c",
        "package": "chp-spec",
        "partial": "",
        "signature": "Chan r w a-\u003er a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#v:readers",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "fct-package": "chp-spec",
        "fct-signature": "[Chan r w a] -\u003e [r a]",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Ends.html#readers",
        "fct-type": "function",
        "title": "readers"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Ends",
        "module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "name": "readers",
        "normalized": "[Chan a b c]-\u003e[a c]",
        "package": "chp-spec",
        "partial": "",
        "signature": "[Chan r w a]-\u003e[r a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#v:writer",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "fct-package": "chp-spec",
        "fct-signature": "Chan r w a -\u003e w a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Base.html#writer",
        "fct-type": "function",
        "title": "writer"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Ends",
        "module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "name": "writer",
        "normalized": "Chan a b c-\u003eb c",
        "package": "chp-spec",
        "partial": "",
        "signature": "Chan r w a-\u003ew a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Ends.html#v:writers",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "fct-package": "chp-spec",
        "fct-signature": "[Chan r w a] -\u003e [w a]",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Ends.html#writers",
        "fct-type": "function",
        "title": "writers"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Ends",
        "module": "Control.Concurrent.CHPSpec.Channels.Ends",
        "name": "writers",
        "normalized": "[Chan a b c]-\u003e[b c]",
        "package": "chp-spec",
        "partial": "",
        "signature": "[Chan r w a]-\u003e[w a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "fct-package": "chp-spec",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html",
        "fct-type": "module",
        "title": "Synonyms"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
        "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "name": "Synonyms",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Synonyms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#t:AnyToAnyChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "fct-package": "chp-spec",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#AnyToAnyChannel",
        "fct-type": "type",
        "title": "AnyToAnyChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
        "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "name": "AnyToAnyChannel",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Any To Any Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#t:AnyToOneChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "fct-package": "chp-spec",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#AnyToOneChannel",
        "fct-type": "type",
        "title": "AnyToOneChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
        "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "name": "AnyToOneChannel",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Any To One Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#t:OneToAnyChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "fct-package": "chp-spec",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#OneToAnyChannel",
        "fct-type": "type",
        "title": "OneToAnyChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
        "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "name": "OneToAnyChannel",
        "normalized": "",
        "package": "chp-spec",
        "partial": "One To Any Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#t:OneToOneChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "fct-package": "chp-spec",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#OneToOneChannel",
        "fct-type": "type",
        "title": "OneToOneChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
        "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "name": "OneToOneChannel",
        "normalized": "",
        "package": "chp-spec",
        "partial": "One To One Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#v:anyToAnyChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "fct-package": "chp-spec",
        "fct-signature": "m (AnyToAnyChannel a)",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#anyToAnyChannel",
        "fct-type": "function",
        "title": "anyToAnyChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
        "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "name": "anyToAnyChannel",
        "normalized": "",
        "package": "chp-spec",
        "partial": "To Any Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#v:anyToAnyChannel-39-",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "fct-package": "chp-spec",
        "fct-signature": "ChanOpts a -\u003e m (AnyToAnyChannel a)",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#anyToAnyChannel%27",
        "fct-type": "function",
        "title": "anyToAnyChannel'"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
        "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "name": "anyToAnyChannel'",
        "normalized": "ChanOpts a-\u003eb(AnyToAnyChannel a)",
        "package": "chp-spec",
        "partial": "To Any Channel'",
        "signature": "ChanOpts a-\u003em(AnyToAnyChannel a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#v:anyToOneChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "fct-package": "chp-spec",
        "fct-signature": "m (AnyToOneChannel a)",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#anyToOneChannel",
        "fct-type": "function",
        "title": "anyToOneChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
        "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "name": "anyToOneChannel",
        "normalized": "",
        "package": "chp-spec",
        "partial": "To One Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#v:anyToOneChannel-39-",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "fct-package": "chp-spec",
        "fct-signature": "ChanOpts a -\u003e m (AnyToOneChannel a)",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#anyToOneChannel%27",
        "fct-type": "function",
        "title": "anyToOneChannel'"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
        "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "name": "anyToOneChannel'",
        "normalized": "ChanOpts a-\u003eb(AnyToOneChannel a)",
        "package": "chp-spec",
        "partial": "To One Channel'",
        "signature": "ChanOpts a-\u003em(AnyToOneChannel a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#v:oneToAnyChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "fct-package": "chp-spec",
        "fct-signature": "m (OneToAnyChannel a)",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#oneToAnyChannel",
        "fct-type": "function",
        "title": "oneToAnyChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
        "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "name": "oneToAnyChannel",
        "normalized": "",
        "package": "chp-spec",
        "partial": "To Any Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#v:oneToAnyChannel-39-",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "fct-package": "chp-spec",
        "fct-signature": "ChanOpts a -\u003e m (OneToAnyChannel a)",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#oneToAnyChannel%27",
        "fct-type": "function",
        "title": "oneToAnyChannel'"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
        "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "name": "oneToAnyChannel'",
        "normalized": "ChanOpts a-\u003eb(OneToAnyChannel a)",
        "package": "chp-spec",
        "partial": "To Any Channel'",
        "signature": "ChanOpts a-\u003em(OneToAnyChannel a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#v:oneToOneChannel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "fct-package": "chp-spec",
        "fct-signature": "m (OneToOneChannel a)",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#oneToOneChannel",
        "fct-type": "function",
        "title": "oneToOneChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
        "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "name": "oneToOneChannel",
        "normalized": "",
        "package": "chp-spec",
        "partial": "To One Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels-Synonyms.html#v:oneToOneChannel-39-",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "fct-package": "chp-spec",
        "fct-signature": "ChanOpts a -\u003e m (OneToOneChannel a)",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels-Synonyms.html#oneToOneChannel%27",
        "fct-type": "function",
        "title": "oneToOneChannel'"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Channels Synonyms",
        "module": "Control.Concurrent.CHPSpec.Channels.Synonyms",
        "name": "oneToOneChannel'",
        "normalized": "ChanOpts a-\u003eb(OneToOneChannel a)",
        "package": "chp-spec",
        "partial": "To One Channel'",
        "signature": "ChanOpts a-\u003em(OneToOneChannel a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Channels.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module containing all the different types of channels in CHP.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://chplib.wordpress.com/2010/04/22/automatic-model-generation-part-4-communication/\u003c/a\u003e\n for details of modelling communication.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Channels",
        "fct-package": "chp-spec",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHPSpec-Channels.html",
        "fct-type": "module",
        "title": "Channels"
      },
      "index": {
        "description": "The module containing all the different types of channels in CHP See http chplib.wordpress.com automatic-model-generation-part-4-communication for details of modelling communication",
        "hierarchy": "Control Concurrent CHPSpec Channels",
        "module": "Control.Concurrent.CHPSpec.Channels",
        "name": "Channels",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Channels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module with support for things that are enrollable.\n\u003c/p\u003e\u003cp\u003eEnrollment is currently pretty much ignored during model generation, but these\n operations are provided so that you don't have to change your program.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Enroll",
        "fct-package": "chp-spec",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHPSpec-Enroll.html",
        "fct-type": "module",
        "title": "Enroll"
      },
      "index": {
        "description": "module with support for things that are enrollable Enrollment is currently pretty much ignored during model generation but these operations are provided so that you don have to change your program",
        "hierarchy": "Control Concurrent CHPSpec Enroll",
        "module": "Control.Concurrent.CHPSpec.Enroll",
        "name": "Enroll",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Enroll",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#t:Enrollable",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Enroll",
        "fct-package": "chp-spec",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHPSpec-Enroll.html#Enrollable",
        "fct-type": "class",
        "title": "Enrollable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Enroll",
        "module": "Control.Concurrent.CHPSpec.Enroll",
        "name": "Enrollable",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Enrollable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#t:Enrolled",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Enroll",
        "fct-package": "chp-spec",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHPSpec-Base.html#Enrolled",
        "fct-type": "data",
        "title": "Enrolled"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Enroll",
        "module": "Control.Concurrent.CHPSpec.Enroll",
        "name": "Enrolled",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Enrolled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:enroll",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Enroll",
        "fct-package": "chp-spec",
        "fct-signature": "b z -\u003e (Enrolled b z -\u003e CHP a) -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Enroll.html#enroll",
        "fct-type": "method",
        "title": "enroll"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Enroll",
        "module": "Control.Concurrent.CHPSpec.Enroll",
        "name": "enroll",
        "normalized": "a b-\u003e(Enrolled a b-\u003eCHP c)-\u003eCHP c",
        "package": "chp-spec",
        "partial": "",
        "signature": "b z-\u003e(Enrolled b z-\u003eCHP a)-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:enrollAll",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Enroll",
        "fct-package": "chp-spec",
        "fct-signature": "CHP (b p) -\u003e [Enrolled b p -\u003e CHP a] -\u003e CHP [a]",
        "fct-source": "src/Control-Concurrent-CHPSpec-Enroll.html#enrollAll",
        "fct-type": "function",
        "title": "enrollAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Enroll",
        "module": "Control.Concurrent.CHPSpec.Enroll",
        "name": "enrollAll",
        "normalized": "CHP(a b)-\u003e[Enrolled a b-\u003eCHP c]-\u003eCHP[c]",
        "package": "chp-spec",
        "partial": "All",
        "signature": "CHP(b p)-\u003e[Enrolled b p-\u003eCHP a]-\u003eCHP[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:enrollAllT",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Enroll",
        "fct-package": "chp-spec",
        "fct-signature": "([a] -\u003e CHP c) -\u003e CHP (b p) -\u003e [Enrolled b p -\u003e a] -\u003e CHP c",
        "fct-source": "src/Control-Concurrent-CHPSpec-Enroll.html#enrollAllT",
        "fct-type": "function",
        "title": "enrollAllT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Enroll",
        "module": "Control.Concurrent.CHPSpec.Enroll",
        "name": "enrollAllT",
        "normalized": "([a]-\u003eCHP b)-\u003eCHP(c d)-\u003e[Enrolled c d-\u003ea]-\u003eCHP b",
        "package": "chp-spec",
        "partial": "All",
        "signature": "([a]-\u003eCHP c)-\u003eCHP(b p)-\u003e[Enrolled b p-\u003ea]-\u003eCHP c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:enrollAll_",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Enroll",
        "fct-package": "chp-spec",
        "fct-signature": "CHP (b p) -\u003e [Enrolled b p -\u003e CHP a] -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHPSpec-Enroll.html#enrollAll_",
        "fct-type": "function",
        "title": "enrollAll_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Enroll",
        "module": "Control.Concurrent.CHPSpec.Enroll",
        "name": "enrollAll_",
        "normalized": "CHP(a b)-\u003e[Enrolled a b-\u003eCHP c]-\u003eCHP()",
        "package": "chp-spec",
        "partial": "All",
        "signature": "CHP(b p)-\u003e[Enrolled b p-\u003eCHP a]-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:enrollList",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Enroll",
        "fct-package": "chp-spec",
        "fct-signature": "[b p] -\u003e ([Enrolled b p] -\u003e CHP a) -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Enroll.html#enrollList",
        "fct-type": "function",
        "title": "enrollList"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Enroll",
        "module": "Control.Concurrent.CHPSpec.Enroll",
        "name": "enrollList",
        "normalized": "[a b]-\u003e([Enrolled a b]-\u003eCHP c)-\u003eCHP c",
        "package": "chp-spec",
        "partial": "List",
        "signature": "[b p]-\u003e([Enrolled b p]-\u003eCHP a)-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:enrollOneMany",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Enroll",
        "fct-package": "chp-spec",
        "fct-signature": "([Enrolled b p] -\u003e CHP a) -\u003e [(CHP (b p), Enrolled b p -\u003e CHP c)] -\u003e CHP (a, [c])",
        "fct-source": "src/Control-Concurrent-CHPSpec-Enroll.html#enrollOneMany",
        "fct-type": "function",
        "title": "enrollOneMany"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Enroll",
        "module": "Control.Concurrent.CHPSpec.Enroll",
        "name": "enrollOneMany",
        "normalized": "([Enrolled a b]-\u003eCHP c)-\u003e[(CHP(a b),Enrolled a b-\u003eCHP d)]-\u003eCHP(c,[d])",
        "package": "chp-spec",
        "partial": "One Many",
        "signature": "([Enrolled b p]-\u003eCHP a)-\u003e[(CHP(b p),Enrolled b p-\u003eCHP c)]-\u003eCHP(a,[c])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:enrollPair",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Enroll",
        "fct-package": "chp-spec",
        "fct-signature": "(b p, b' p') -\u003e ((Enrolled b p, Enrolled b' p') -\u003e CHP a) -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Enroll.html#enrollPair",
        "fct-type": "function",
        "title": "enrollPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Enroll",
        "module": "Control.Concurrent.CHPSpec.Enroll",
        "name": "enrollPair",
        "normalized": "(a b,c d)-\u003e((Enrolled a b,Enrolled c d)-\u003eCHP e)-\u003eCHP e",
        "package": "chp-spec",
        "partial": "Pair",
        "signature": "(b p,b' p')-\u003e((Enrolled b p,Enrolled b' p')-\u003eCHP a)-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:furtherEnroll",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Enroll",
        "fct-package": "chp-spec",
        "fct-signature": "Enrolled b z -\u003e (Enrolled b z -\u003e CHP a) -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Enroll.html#furtherEnroll",
        "fct-type": "function",
        "title": "furtherEnroll"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Enroll",
        "module": "Control.Concurrent.CHPSpec.Enroll",
        "name": "furtherEnroll",
        "normalized": "Enrolled a b-\u003e(Enrolled a b-\u003eCHP c)-\u003eCHP c",
        "package": "chp-spec",
        "partial": "Enroll",
        "signature": "Enrolled b z-\u003e(Enrolled b z-\u003eCHP a)-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Enroll.html#v:resign",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Enroll",
        "fct-package": "chp-spec",
        "fct-signature": "Enrolled b z -\u003e CHP a -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Enroll.html#resign",
        "fct-type": "method",
        "title": "resign"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Enroll",
        "module": "Control.Concurrent.CHPSpec.Enroll",
        "name": "resign",
        "normalized": "Enrolled a b-\u003eCHP c-\u003eCHP c",
        "package": "chp-spec",
        "partial": "",
        "signature": "Enrolled b z-\u003eCHP a-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a near-copy of the Test.LazySmallCheck module from the lazysmallcheck\n package on Hackage.  It was written by Matthew Naylor and Fredrik Lindblad.\n  I have modified it to add the \u003ccode\u003e\u003ca\u003efuzz\u003c/a\u003e\u003c/code\u003e function that is used by chp-spec internally,\n but to write that function I needed access to more internals than the original\n Test.LazySmallCheck exposed, hence I had to make a copy of the module.  Unfortunately,\n this means that the Serial type-class here is a different type-class (despite\n being identical in behaviour and API) from the original lazysmallcheck package.\n The modified module is exposed in case you need to supply any of your own instances\n for \u003ccode\u003e\u003ca\u003eSerial\u003c/a\u003e\u003c/code\u003e.  For more explanation of how Lazy SmallCheck is used in this library\n for modelling IO actions, see this blog post: \u003ca\u003ehttp://chplib.wordpress.com/2010/04/20/automatic-model-generation-part-3-choice-and-io/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "fct-package": "chp-spec",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html",
        "fct-type": "module",
        "title": "LazySmallCheck"
      },
      "index": {
        "description": "This module is near-copy of the Test.LazySmallCheck module from the lazysmallcheck package on Hackage It was written by Matthew Naylor and Fredrik Lindblad have modified it to add the fuzz function that is used by chp-spec internally but to write that function needed access to more internals than the original Test.LazySmallCheck exposed hence had to make copy of the module Unfortunately this means that the Serial type-class here is different type-class despite being identical in behaviour and API from the original lazysmallcheck package The modified module is exposed in case you need to supply any of your own instances for Serial For more explanation of how Lazy SmallCheck is used in this library for modelling IO actions see this blog post http chplib.wordpress.com automatic-model-generation-part-3-choice-and-io",
        "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
        "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "name": "LazySmallCheck",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Lazy Small Check",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#t:Cons",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "fct-package": "chp-spec",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#Cons",
        "fct-type": "data",
        "title": "Cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
        "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "name": "Cons",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#t:Serial",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "fct-package": "chp-spec",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#Serial",
        "fct-type": "class",
        "title": "Serial"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
        "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "name": "Serial",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Serial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#t:Series",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "fct-package": "chp-spec",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#Series",
        "fct-type": "type",
        "title": "Series"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
        "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "name": "Series",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Series",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:-62--60-",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "fct-package": "chp-spec",
        "fct-signature": "Series (a -\u003e b) -\u003e Series a -\u003e Series b",
        "fct-source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#%3E%3C",
        "fct-type": "function",
        "title": "(\u003e\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
        "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "name": "(\u003e\u003c) \u003e\u003c",
        "normalized": "Series(a-\u003eb)-\u003eSeries a-\u003eSeries b",
        "package": "chp-spec",
        "partial": "",
        "signature": "Series(a-\u003eb)-\u003eSeries a-\u003eSeries b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:-92--47-",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "fct-package": "chp-spec",
        "fct-signature": "Series a -\u003e Series a -\u003e Series a",
        "fct-source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#%5C%2F",
        "fct-type": "function",
        "title": "(\\/)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
        "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "name": "(\\/) \\/",
        "normalized": "Series a-\u003eSeries a-\u003eSeries a",
        "package": "chp-spec",
        "partial": "",
        "signature": "Series a-\u003eSeries a-\u003eSeries a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:cons",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "fct-package": "chp-spec",
        "fct-signature": "a -\u003e Series a",
        "fct-source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
        "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "name": "cons",
        "normalized": "a-\u003eSeries a",
        "package": "chp-spec",
        "partial": "",
        "signature": "a-\u003eSeries a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:cons0",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "fct-package": "chp-spec",
        "fct-signature": "a -\u003e Series a",
        "fct-source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#cons0",
        "fct-type": "function",
        "title": "cons0"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
        "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "name": "cons0",
        "normalized": "a-\u003eSeries a",
        "package": "chp-spec",
        "partial": "",
        "signature": "a-\u003eSeries a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:cons1",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "fct-package": "chp-spec",
        "fct-signature": "(a -\u003e b) -\u003e Series b",
        "fct-source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#cons1",
        "fct-type": "function",
        "title": "cons1"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
        "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "name": "cons1",
        "normalized": "(a-\u003eb)-\u003eSeries b",
        "package": "chp-spec",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eSeries b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:cons2",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "fct-package": "chp-spec",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Series c",
        "fct-source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#cons2",
        "fct-type": "function",
        "title": "cons2"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
        "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "name": "cons2",
        "normalized": "(a-\u003eb-\u003ec)-\u003eSeries c",
        "package": "chp-spec",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003eSeries c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:cons3",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "fct-package": "chp-spec",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Series d",
        "fct-source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#cons3",
        "fct-type": "function",
        "title": "cons3"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
        "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "name": "cons3",
        "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eSeries d",
        "package": "chp-spec",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eSeries d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:cons4",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "fct-package": "chp-spec",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Series e",
        "fct-source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#cons4",
        "fct-type": "function",
        "title": "cons4"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
        "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "name": "cons4",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eSeries e",
        "package": "chp-spec",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eSeries e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:cons5",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "fct-package": "chp-spec",
        "fct-signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e Series f",
        "fct-source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#cons5",
        "fct-type": "function",
        "title": "cons5"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
        "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "name": "cons5",
        "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eSeries f",
        "package": "chp-spec",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eSeries f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:drawnFrom",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "fct-package": "chp-spec",
        "fct-signature": "[a] -\u003e Cons a",
        "fct-source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#drawnFrom",
        "fct-type": "function",
        "title": "drawnFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
        "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "name": "drawnFrom",
        "normalized": "[a]-\u003eCons a",
        "package": "chp-spec",
        "partial": "From",
        "signature": "[a]-\u003eCons a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:fuzz",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "fct-package": "chp-spec",
        "fct-signature": "(a -\u003e StateT s IO b) -\u003e StateT s IO ([b], Bool)",
        "fct-source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#fuzz",
        "fct-type": "function",
        "title": "fuzz"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
        "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "name": "fuzz",
        "normalized": "(a-\u003eStateT b IO c)-\u003eStateT b IO([c],Bool)",
        "package": "chp-spec",
        "partial": "",
        "signature": "(a-\u003eStateT s IO b)-\u003eStateT s IO([b],Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-LazySmallCheck.html#v:series",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "fct-package": "chp-spec",
        "fct-signature": "Series a",
        "fct-source": "src/Control-Concurrent-CHPSpec-LazySmallCheck.html#series",
        "fct-type": "method",
        "title": "series"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec LazySmallCheck",
        "module": "Control.Concurrent.CHPSpec.LazySmallCheck",
        "name": "series",
        "normalized": "",
        "package": "chp-spec",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains all the central monads in the CHP library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHPSpec-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "This module contains all the central monads in the CHP library",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#t:CHP",
      "description": {
        "fct-descr": "\u003cp\u003eThe central monad of the library.  You can use\n the \u003ccode\u003especify\u003c/code\u003e function to model programs written with this monad.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-CHPSpec-Base.html#CHP",
        "fct-type": "type",
        "title": "CHP"
      },
      "index": {
        "description": "The central monad of the library You can use the specify function to model programs written with this monad",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "CHP",
        "normalized": "",
        "package": "chp-spec",
        "partial": "CHP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#t:MonadCHP",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHPSpec-Base.html#MonadCHP",
        "fct-type": "class",
        "title": "MonadCHP"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "MonadCHP",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Monad CHP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#t:Poisonable",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHPSpec-Base.html#Poisonable",
        "fct-type": "class",
        "title": "Poisonable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "Poisonable",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Poisonable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#t:Process",
      "description": {
        "fct-descr": "\u003cp\u003eA class with instances for CHP processes of the form \u003ccode\u003ea -\u003e b -\u003e .. -\u003e CHP r\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe return value of the process must support \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, and the arguments of\n the process must support \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-CHPSpec-Process.html#Process",
        "fct-type": "class",
        "title": "Process"
      },
      "index": {
        "description": "class with instances for CHP processes of the form CHP The return value of the process must support Typeable and the arguments of the process must support Typeable and Eq",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "Process",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:checkForPoison",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "c -\u003e m ()",
        "fct-source": "src/Control-Concurrent-CHPSpec-Base.html#checkForPoison",
        "fct-type": "method",
        "title": "checkForPoison"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "checkForPoison",
        "normalized": "a-\u003eb()",
        "package": "chp-spec",
        "partial": "For Poison",
        "signature": "c-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:foreverP",
      "description": {
        "fct-descr": "\u003cp\u003eModels processes that run forever.\n\u003c/p\u003e\u003cp\u003eAnything following a \u003ccode\u003e\u003ca\u003eforeverP\u003c/a\u003e\u003c/code\u003e call in sequence will not be modelled.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "CHP a -\u003e CHP b",
        "fct-source": "src/Control-Concurrent-CHPSpec-Monad.html#foreverP",
        "fct-type": "function",
        "title": "foreverP"
      },
      "index": {
        "description": "Models processes that run forever Anything following foreverP call in sequence will not be modelled",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "foreverP",
        "normalized": "CHP a-\u003eCHP b",
        "package": "chp-spec",
        "partial": "",
        "signature": "CHP a-\u003eCHP b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:liftCHP",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "CHP a -\u003e m a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Base.html#liftCHP",
        "fct-type": "method",
        "title": "liftCHP"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "liftCHP",
        "normalized": "CHP a-\u003eb a",
        "package": "chp-spec",
        "partial": "CHP",
        "signature": "CHP a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:liftIO_CHP",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003eliftIO_CHP'\u003c/code\u003e, but with an empty label.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "IO a -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Monad.html#liftIO_CHP",
        "fct-type": "function",
        "title": "liftIO_CHP"
      },
      "index": {
        "description": "Like liftIO CHP but with an empty label",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "liftIO_CHP",
        "normalized": "IO a-\u003eCHP a",
        "package": "chp-spec",
        "partial": "IO CHP",
        "signature": "IO a-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:liftIO_CHP-39-",
      "description": {
        "fct-descr": "\u003cp\u003eModels the lifting of an IO action into the CHP monad.\n\u003c/p\u003e\u003cp\u003eThe IO computation itself is completely ignored.  The label (first parameter)\n is used to label various different dummy events, which arise from exploring\n the return type of the IO computation.  To support this exploration, the return\n type must be an instance of \u003ccode\u003e\u003ca\u003eSerial\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMore details and a full explanation of how IO events are modelled are available\n in this blog post: \u003ca\u003ehttp://chplib.wordpress.com/2010/04/20/automatic-model-generation-part-3-choice-and-io/\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "String -\u003e IO a -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Monad.html#liftIO_CHP%27",
        "fct-type": "function",
        "title": "liftIO_CHP'"
      },
      "index": {
        "description": "Models the lifting of an IO action into the CHP monad The IO computation itself is completely ignored The label first parameter is used to label various different dummy events which arise from exploring the return type of the IO computation To support this exploration the return type must be an instance of Serial More details and full explanation of how IO events are modelled are available in this blog post http chplib.wordpress.com automatic-model-generation-part-3-choice-and-io",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "liftIO_CHP'",
        "normalized": "String-\u003eIO a-\u003eCHP a",
        "package": "chp-spec",
        "partial": "IO CHP'",
        "signature": "String-\u003eIO a-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:onPoisonRethrow",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eonPoisonTrap\u003c/a\u003e\u003c/code\u003e, this function allows you to provide a handler for\n  poison.  Since poison is not currently modelled, this acts like \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e at\n  the moment.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "CHP a -\u003e CHP () -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Base.html#onPoisonRethrow",
        "fct-type": "function",
        "title": "onPoisonRethrow"
      },
      "index": {
        "description": "Like onPoisonTrap this function allows you to provide handler for poison Since poison is not currently modelled this acts like const at the moment",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "onPoisonRethrow",
        "normalized": "CHP a-\u003eCHP()-\u003eCHP a",
        "package": "chp-spec",
        "partial": "Poison Rethrow",
        "signature": "CHP a-\u003eCHP()-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:onPoisonTrap",
      "description": {
        "fct-descr": "\u003cp\u003eAllows you to provide a handler for sections with poison.  Since poison is\n not currently modelled, this acts like \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e at the moment.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "forall a.  CHP a -\u003e CHP a -\u003e CHP a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Base.html#onPoisonTrap",
        "fct-type": "function",
        "title": "onPoisonTrap"
      },
      "index": {
        "description": "Allows you to provide handler for sections with poison Since poison is not currently modelled this acts like const at the moment",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "onPoisonTrap",
        "normalized": "a b CHP c-\u003eCHP c-\u003eCHP c",
        "package": "chp-spec",
        "partial": "Poison Trap",
        "signature": "forall a. CHP a-\u003eCHP a-\u003eCHP a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:poison",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "c -\u003e m ()",
        "fct-source": "src/Control-Concurrent-CHPSpec-Base.html#poison",
        "fct-type": "method",
        "title": "poison"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "poison",
        "normalized": "a-\u003eb()",
        "package": "chp-spec",
        "partial": "",
        "signature": "c-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:poisonAll",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "[c] -\u003e m ()",
        "fct-source": "src/Control-Concurrent-CHPSpec-Base.html#poisonAll",
        "fct-type": "function",
        "title": "poisonAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "poisonAll",
        "normalized": "[a]-\u003eb()",
        "package": "chp-spec",
        "partial": "All",
        "signature": "[c]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:process",
      "description": {
        "fct-descr": "\u003cp\u003eAn annotation to put around a top-level process.  This annotation must be\n inside the recursive knot.  You can either place it as:\n\u003c/p\u003e\u003cpre\u003e foo :: Int -\u003e String -\u003e CHP ()\n foo = process \"foo\" $ \\n s -\u003e ...\n\u003c/pre\u003e\u003cp\u003eOr as follows:\n\u003c/p\u003e\u003cpre\u003e foo :: Int -\u003e String -\u003e CHP ()\n foo = process \"foo\" foo'\n   where\n     foo' n s = ...\n\u003c/pre\u003e\u003cp\u003eThe annotation must capture all the parameters to the process.  What you must \u003cem\u003enot\u003c/em\u003e do is place it\n such that there are free parameters not captured, for example this is \u003cem\u003ewrong\u003c/em\u003e:\n\u003c/p\u003e\u003cpre\u003e foo :: Int -\u003e String -\u003e CHP ()\n foo n s = process \"foo\" foo'\n   where\n     foo' = ...\n\u003c/pre\u003e\u003cp\u003eIf you do want to have recursive processes that have outer parameters and not\n pass them, you must wrap the outer process in \u003ccode\u003e\u003ca\u003eprocess\u003c/a\u003e\u003c/code\u003e and the inner process(es)\n in \u003ccode\u003e\u003ca\u003esubProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "String -\u003e p -\u003e p",
        "fct-source": "src/Control-Concurrent-CHPSpec-Process.html#process",
        "fct-type": "function",
        "title": "process"
      },
      "index": {
        "description": "An annotation to put around top-level process This annotation must be inside the recursive knot You can either place it as foo Int String CHP foo process foo Or as follows foo Int String CHP foo process foo foo where foo The annotation must capture all the parameters to the process What you must not do is place it such that there are free parameters not captured for example this is wrong foo Int String CHP foo process foo foo where foo If you do want to have recursive processes that have outer parameters and not pass them you must wrap the outer process in process and the inner process es in subProcess",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "process",
        "normalized": "String-\u003ea-\u003ea",
        "package": "chp-spec",
        "partial": "",
        "signature": "String-\u003ep-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:skip",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "CHP ()",
        "fct-source": "src/Control-Concurrent-CHPSpec-Monad.html#skip",
        "fct-type": "function",
        "title": "skip"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "skip",
        "normalized": "CHP()",
        "package": "chp-spec",
        "partial": "",
        "signature": "CHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:specify",
      "description": {
        "fct-descr": "\u003cp\u003eThe top-level function in this library, to be used in place of runCHP in your\n program.  You pass it a boolean (True if you want to leave the dummy IO events\n exposed, False if you want them hidden) and a CHP process that you want to specify.\n  The result is a String containing a CSP-M specification that can be written\n out to a file and read in to other tools, such as FDR, PRoBE and others.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "Bool -\u003e CHP () -\u003e IO String",
        "fct-source": "src/Control-Concurrent-CHPSpec-Monad.html#specify",
        "fct-type": "function",
        "title": "specify"
      },
      "index": {
        "description": "The top-level function in this library to be used in place of runCHP in your program You pass it boolean True if you want to leave the dummy IO events exposed False if you want them hidden and CHP process that you want to specify The result is String containing CSP-M specification that can be written out to file and read in to other tools such as FDR PRoBE and others",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "specify",
        "normalized": "Bool-\u003eCHP()-\u003eIO String",
        "package": "chp-spec",
        "partial": "",
        "signature": "Bool-\u003eCHP()-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:stop",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "CHP a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Monad.html#stop",
        "fct-type": "function",
        "title": "stop"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "stop",
        "normalized": "",
        "package": "chp-spec",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:subProcess",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "String -\u003e p -\u003e p",
        "fct-source": "src/Control-Concurrent-CHPSpec-Process.html#subProcess",
        "fct-type": "function",
        "title": "subProcess"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "subProcess",
        "normalized": "String-\u003ea-\u003ea",
        "package": "chp-spec",
        "partial": "Process",
        "signature": "String-\u003ep-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Monad.html#v:throwPoison",
      "description": {
        "fct-descr": "\u003cp\u003eThrows a poison exception.  Poison is not currently modelled.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Monad",
        "fct-package": "chp-spec",
        "fct-signature": "CHP a",
        "fct-source": "src/Control-Concurrent-CHPSpec-Base.html#throwPoison",
        "fct-type": "function",
        "title": "throwPoison"
      },
      "index": {
        "description": "Throws poison exception Poison is not currently modelled",
        "hierarchy": "Control Concurrent CHPSpec Monad",
        "module": "Control.Concurrent.CHPSpec.Monad",
        "name": "throwPoison",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Poison",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Parallel.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for running items in parallel.  See \u003ca\u003ehttp://chplib.wordpress.com/2010/04/13/automatic-model-generation-part-1-parallel/\u003c/a\u003e\n for details of how parallel items are modelled.\n\u003c/p\u003e\u003cp\u003eParallel specifications are well supported, and the only change to this module\n from normal CHP is that forking is not currently supported.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHPSpec.Parallel",
        "fct-package": "chp-spec",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHPSpec-Parallel.html",
        "fct-type": "module",
        "title": "Parallel"
      },
      "index": {
        "description": "module for running items in parallel See http chplib.wordpress.com automatic-model-generation-part-1-parallel for details of how parallel items are modelled Parallel specifications are well supported and the only change to this module from normal CHP is that forking is not currently supported",
        "hierarchy": "Control Concurrent CHPSpec Parallel",
        "module": "Control.Concurrent.CHPSpec.Parallel",
        "name": "Parallel",
        "normalized": "",
        "package": "chp-spec",
        "partial": "Parallel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Parallel.html#v:-60--124--124--62-",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Parallel",
        "fct-package": "chp-spec",
        "fct-signature": "CHP a -\u003e CHP b -\u003e CHP (a, b)",
        "fct-source": "src/Control-Concurrent-CHPSpec-Parallel.html#%3C%7C%7C%3E",
        "fct-type": "function",
        "title": "(\u003c||\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Parallel",
        "module": "Control.Concurrent.CHPSpec.Parallel",
        "name": "(\u003c||\u003e) \u003c||\u003e",
        "normalized": "CHP a-\u003eCHP b-\u003eCHP(a,b)",
        "package": "chp-spec",
        "partial": "",
        "signature": "CHP a-\u003eCHP b-\u003eCHP(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Parallel.html#v:-60--124--42--124--62-",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Parallel",
        "fct-package": "chp-spec",
        "fct-signature": "CHP a -\u003e CHP b -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHPSpec-Parallel.html#%3C%7C%2A%7C%3E",
        "fct-type": "function",
        "title": "(\u003c|*|\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Parallel",
        "module": "Control.Concurrent.CHPSpec.Parallel",
        "name": "(\u003c|*|\u003e) \u003c|*|\u003e",
        "normalized": "CHP a-\u003eCHP b-\u003eCHP()",
        "package": "chp-spec",
        "partial": "",
        "signature": "CHP a-\u003eCHP b-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Parallel.html#v:runParMapM",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Parallel",
        "fct-package": "chp-spec",
        "fct-signature": "(a -\u003e CHP b) -\u003e [a] -\u003e CHP [b]",
        "fct-source": "src/Control-Concurrent-CHPSpec-Parallel.html#runParMapM",
        "fct-type": "function",
        "title": "runParMapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Parallel",
        "module": "Control.Concurrent.CHPSpec.Parallel",
        "name": "runParMapM",
        "normalized": "(a-\u003eCHP b)-\u003e[a]-\u003eCHP[b]",
        "package": "chp-spec",
        "partial": "Par Map",
        "signature": "(a-\u003eCHP b)-\u003e[a]-\u003eCHP[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Parallel.html#v:runParMapM_",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Parallel",
        "fct-package": "chp-spec",
        "fct-signature": "(a -\u003e CHP b) -\u003e [a] -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHPSpec-Parallel.html#runParMapM_",
        "fct-type": "function",
        "title": "runParMapM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Parallel",
        "module": "Control.Concurrent.CHPSpec.Parallel",
        "name": "runParMapM_",
        "normalized": "(a-\u003eCHP b)-\u003e[a]-\u003eCHP()",
        "package": "chp-spec",
        "partial": "Par Map",
        "signature": "(a-\u003eCHP b)-\u003e[a]-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Parallel.html#v:runParallel",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Parallel",
        "fct-package": "chp-spec",
        "fct-signature": "[CHP a] -\u003e CHP [a]",
        "fct-source": "src/Control-Concurrent-CHPSpec-Parallel.html#runParallel",
        "fct-type": "function",
        "title": "runParallel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Parallel",
        "module": "Control.Concurrent.CHPSpec.Parallel",
        "name": "runParallel",
        "normalized": "[CHP a]-\u003eCHP[a]",
        "package": "chp-spec",
        "partial": "Parallel",
        "signature": "[CHP a]-\u003eCHP[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec-Parallel.html#v:runParallel_",
      "description": {
        "fct-module": "Control.Concurrent.CHPSpec.Parallel",
        "fct-package": "chp-spec",
        "fct-signature": "[CHP a] -\u003e CHP ()",
        "fct-source": "src/Control-Concurrent-CHPSpec-Parallel.html#runParallel_",
        "fct-type": "function",
        "title": "runParallel_"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent CHPSpec Parallel",
        "module": "Control.Concurrent.CHPSpec.Parallel",
        "name": "runParallel_",
        "normalized": "[CHP a]-\u003eCHP()",
        "package": "chp-spec",
        "partial": "Parallel",
        "signature": "[CHP a]-\u003eCHP()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/chp-spec/docs/Control-Concurrent-CHPSpec.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports all of the functionality of the chp-spec library, except\n the \u003ca\u003eControl.Concurrent.CHPSpec.LazySmallCheck\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eThe documentation for this library may seem relatively spartan; only the functions\n and modules with significant differences/caveats from CHP API are documented.\n  All the details of how each aspect is modelled is available in the original\n series of blog posts.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CHPSpec",
        "fct-package": "chp-spec",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CHPSpec.html",
        "fct-type": "module",
        "title": "CHPSpec"
      },
      "index": {
        "description": "This module re-exports all of the functionality of the chp-spec library except the Control.Concurrent.CHPSpec.LazySmallCheck module The documentation for this library may seem relatively spartan only the functions and modules with significant differences caveats from CHP API are documented All the details of how each aspect is modelled is available in the original series of blog posts",
        "hierarchy": "Control Concurrent CHPSpec",
        "module": "Control.Concurrent.CHPSpec",
        "name": "CHPSpec",
        "normalized": "",
        "package": "chp-spec",
        "partial": "CHPSpec",
        "signature": ""
      }
    }
  }
]