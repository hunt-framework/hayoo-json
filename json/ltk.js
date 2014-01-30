[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple event mechanism\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Event",
        "fct-package": "ltk",
        "fct-signature": "module",
        "fct-source": "src/Control-Event.html",
        "fct-type": "module",
        "title": "Event"
      },
      "index": {
        "description": "simple event mechanism",
        "hierarchy": "Control Event",
        "module": "Control.Event",
        "name": "Event",
        "normalized": "",
        "package": "ltk",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003eEvery event needs to know its selector and its source\n\u003c/p\u003e",
        "fct-module": "Control.Event",
        "fct-package": "ltk",
        "fct-signature": "class",
        "fct-source": "src/Control-Event.html#Event",
        "fct-type": "class",
        "title": "Event"
      },
      "index": {
        "description": "Every event needs to know its selector and its source",
        "hierarchy": "Control Event",
        "module": "Control.Event",
        "name": "Event",
        "normalized": "",
        "package": "ltk",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#t:EventSelector",
      "description": {
        "fct-descr": "\u003cp\u003eEvery event needs a selector, which should identify the type of event\n\u003c/p\u003e",
        "fct-module": "Control.Event",
        "fct-package": "ltk",
        "fct-signature": "class",
        "fct-source": "src/Control-Event.html#EventSelector",
        "fct-type": "class",
        "title": "EventSelector"
      },
      "index": {
        "description": "Every event needs selector which should identify the type of event",
        "hierarchy": "Control Event",
        "module": "Control.Event",
        "name": "EventSelector",
        "normalized": "",
        "package": "ltk",
        "partial": "Event Selector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#t:EventSource",
      "description": {
        "fct-descr": "\u003cp\u003eEverything which is an event source needs this\n alpha is the Notifier\n beta is the event\n gamma is the monad\n delta is the event selector\n\u003c/p\u003e",
        "fct-module": "Control.Event",
        "fct-package": "ltk",
        "fct-signature": "class",
        "fct-source": "src/Control-Event.html#EventSource",
        "fct-type": "class",
        "title": "EventSource"
      },
      "index": {
        "description": "Everything which is an event source needs this alpha is the Notifier beta is the event gamma is the monad delta is the event selector",
        "hierarchy": "Control Event",
        "module": "Control.Event",
        "name": "EventSource",
        "normalized": "",
        "package": "ltk",
        "partial": "Event Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#t:Handlers",
      "description": {
        "fct-descr": "\u003cp\u003eThis shows the implementation of the event mechnism\n\u003c/p\u003e",
        "fct-module": "Control.Event",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Control-Event.html#Handlers",
        "fct-type": "type",
        "title": "Handlers"
      },
      "index": {
        "description": "This shows the implementation of the event mechnism",
        "hierarchy": "Control Event",
        "module": "Control.Event",
        "name": "Handlers",
        "normalized": "",
        "package": "ltk",
        "partial": "Handlers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:canTriggerEvent",
      "description": {
        "fct-descr": "\u003cp\u003eReimplement this in instances to make triggering of events possible\n\u003c/p\u003e",
        "fct-module": "Control.Event",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e delta -\u003e Bool",
        "fct-source": "src/Control-Event.html#canTriggerEvent",
        "fct-type": "method",
        "title": "canTriggerEvent"
      },
      "index": {
        "description": "Reimplement this in instances to make triggering of events possible",
        "hierarchy": "Control Event",
        "module": "Control.Event",
        "name": "canTriggerEvent",
        "normalized": "a-\u003eb-\u003eBool",
        "package": "ltk",
        "partial": "Trigger Event",
        "signature": "alpha-\u003edelta-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:getHandlers",
      "description": {
        "fct-module": "Control.Event",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e gamma (Handlers beta gamma delta)",
        "fct-source": "src/Control-Event.html#getHandlers",
        "fct-type": "method",
        "title": "getHandlers"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Event",
        "module": "Control.Event",
        "name": "getHandlers",
        "normalized": "a-\u003eb(Handlers c b d)",
        "package": "ltk",
        "partial": "Handlers",
        "signature": "alpha-\u003egamma(Handlers beta gamma delta)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:getSelector",
      "description": {
        "fct-module": "Control.Event",
        "fct-package": "ltk",
        "fct-signature": "beta -\u003e delta",
        "fct-source": "src/Control-Event.html#getSelector",
        "fct-type": "method",
        "title": "getSelector"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Event",
        "module": "Control.Event",
        "name": "getSelector",
        "normalized": "a-\u003eb",
        "package": "ltk",
        "partial": "Selector",
        "signature": "beta-\u003edelta"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:myUnique",
      "description": {
        "fct-module": "Control.Event",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e gamma Unique",
        "fct-source": "src/Control-Event.html#myUnique",
        "fct-type": "method",
        "title": "myUnique"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Event",
        "module": "Control.Event",
        "name": "myUnique",
        "normalized": "a-\u003eb Unique",
        "package": "ltk",
        "partial": "Unique",
        "signature": "alpha-\u003egamma Unique"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:registerEvent",
      "description": {
        "fct-module": "Control.Event",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e delta -\u003e (beta -\u003e gamma beta) -\u003e gamma (Maybe Unique)",
        "fct-source": "src/Control-Event.html#registerEvent",
        "fct-type": "method",
        "title": "registerEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Event",
        "module": "Control.Event",
        "name": "registerEvent",
        "normalized": "a-\u003eb-\u003e(c-\u003ed c)-\u003ed(Maybe Unique)",
        "package": "ltk",
        "partial": "Event",
        "signature": "alpha-\u003edelta-\u003e(beta-\u003egamma beta)-\u003egamma(Maybe Unique)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:registerEvents",
      "description": {
        "fct-module": "Control.Event",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e [delta] -\u003e (beta -\u003e gamma beta) -\u003e gamma [Unique]",
        "fct-source": "src/Control-Event.html#registerEvents",
        "fct-type": "function",
        "title": "registerEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Event",
        "module": "Control.Event",
        "name": "registerEvents",
        "normalized": "a-\u003e[b]-\u003e(c-\u003ed c)-\u003ed[Unique]",
        "package": "ltk",
        "partial": "Events",
        "signature": "alpha-\u003e[delta]-\u003e(beta-\u003egamma beta)-\u003egamma[Unique]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:setHandlers",
      "description": {
        "fct-module": "Control.Event",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e Handlers beta gamma delta -\u003e gamma ()",
        "fct-source": "src/Control-Event.html#setHandlers",
        "fct-type": "method",
        "title": "setHandlers"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Event",
        "module": "Control.Event",
        "name": "setHandlers",
        "normalized": "a-\u003eHandlers b c d-\u003ec()",
        "package": "ltk",
        "partial": "Handlers",
        "signature": "alpha-\u003eHandlers beta gamma delta-\u003egamma()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:triggerEvent",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the event, so that you may get values back from an event\n Args: Notifier, Event\n\u003c/p\u003e",
        "fct-module": "Control.Event",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e beta -\u003e gamma beta",
        "fct-source": "src/Control-Event.html#triggerEvent",
        "fct-type": "method",
        "title": "triggerEvent"
      },
      "index": {
        "description": "Returns the event so that you may get values back from an event Args Notifier Event",
        "hierarchy": "Control Event",
        "module": "Control.Event",
        "name": "triggerEvent",
        "normalized": "a-\u003eb-\u003ec b",
        "package": "ltk",
        "partial": "Event",
        "signature": "alpha-\u003ebeta-\u003egamma beta"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:unregisterEvent",
      "description": {
        "fct-descr": "\u003cp\u003euse Left to register and Right to unregister\n Args: Notifier, EventSelector, Unique\n\u003c/p\u003e",
        "fct-module": "Control.Event",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e delta -\u003e Unique -\u003e gamma ()",
        "fct-source": "src/Control-Event.html#unregisterEvent",
        "fct-type": "method",
        "title": "unregisterEvent"
      },
      "index": {
        "description": "use Left to register and Right to unregister Args Notifier EventSelector Unique",
        "hierarchy": "Control Event",
        "module": "Control.Event",
        "name": "unregisterEvent",
        "normalized": "a-\u003eb-\u003eUnique-\u003ec()",
        "package": "ltk",
        "partial": "Event",
        "signature": "alpha-\u003edelta-\u003eUnique-\u003egamma()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Default.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for default values of a data type\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Default",
        "fct-package": "ltk",
        "fct-signature": "module",
        "fct-source": "src/Default.html",
        "fct-type": "module",
        "title": "Default"
      },
      "index": {
        "description": "Module for default values of data type",
        "hierarchy": "Default",
        "module": "Default",
        "name": "Default",
        "normalized": "",
        "package": "ltk",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Default.html#t:Default",
      "description": {
        "fct-descr": "\u003cp\u003eA class for providing default values for certain types of editors\n\u003c/p\u003e",
        "fct-module": "Default",
        "fct-package": "ltk",
        "fct-signature": "class",
        "fct-source": "src/Default.html#Default",
        "fct-type": "class",
        "title": "Default"
      },
      "index": {
        "description": "class for providing default values for certain types of editors",
        "hierarchy": "Default",
        "module": "Default",
        "name": "Default",
        "normalized": "",
        "package": "ltk",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Default.html#v:getDefault",
      "description": {
        "fct-module": "Default",
        "fct-package": "ltk",
        "fct-signature": "alpha",
        "fct-source": "src/Default.html#getDefault",
        "fct-type": "method",
        "title": "getDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Default",
        "module": "Default",
        "name": "getDefault",
        "normalized": "",
        "package": "ltk",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for the basiscs of composing GUIs from editors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Editor-Basics.html",
        "fct-type": "module",
        "title": "Basics"
      },
      "index": {
        "description": "Module for the basiscs of composing GUIs from editors",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "Basics",
        "normalized": "",
        "package": "ltk",
        "partial": "Basics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Applicator",
      "description": {
        "fct-descr": "\u003cp\u003eA type for the application of a value to be reflected in the GUI\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#Applicator",
        "fct-type": "type",
        "title": "Applicator"
      },
      "index": {
        "description": "type for the application of value to be reflected in the GUI",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "Applicator",
        "normalized": "",
        "package": "ltk",
        "partial": "Applicator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eSignal handlers for the different pane types\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "Signal handlers for the different pane types",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "Connection",
        "normalized": "",
        "package": "ltk",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Connections",
      "description": {
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#Connections",
        "fct-type": "type",
        "title": "Connections"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "Connections",
        "normalized": "",
        "package": "ltk",
        "partial": "Connections",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Editor",
      "description": {
        "fct-descr": "\u003cp\u003eA type to describe an editor.\n alpha is the type of the individual field of the record\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#Editor",
        "fct-type": "type",
        "title": "Editor"
      },
      "index": {
        "description": "type to describe an editor alpha is the type of the individual field of the record",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "Editor",
        "normalized": "",
        "package": "ltk",
        "partial": "Editor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Extractor",
      "description": {
        "fct-descr": "\u003cp\u003eA type for extracting a value from an editor\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#Extractor",
        "fct-type": "type",
        "title": "Extractor"
      },
      "index": {
        "description": "type for extracting value from an editor",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "Extractor",
        "normalized": "",
        "package": "ltk",
        "partial": "Extractor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:GUIEvent",
      "description": {
        "fct-descr": "\u003cp\u003eA type for an event in the GUI\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#GUIEvent",
        "fct-type": "data",
        "title": "GUIEvent"
      },
      "index": {
        "description": "type for an event in the GUI",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "GUIEvent",
        "normalized": "",
        "package": "ltk",
        "partial": "GUIEvent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:GUIEventSelector",
      "description": {
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#GUIEventSelector",
        "fct-type": "data",
        "title": "GUIEventSelector"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "GUIEventSelector",
        "normalized": "",
        "package": "ltk",
        "partial": "GUIEvent Selector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Getter",
      "description": {
        "fct-descr": "\u003cp\u003eA type for getting a field of a record\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#Getter",
        "fct-type": "type",
        "title": "Getter"
      },
      "index": {
        "description": "type for getting field of record",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "Getter",
        "normalized": "",
        "package": "ltk",
        "partial": "Getter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:GtkHandler",
      "description": {
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#GtkHandler",
        "fct-type": "type",
        "title": "GtkHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "GtkHandler",
        "normalized": "",
        "package": "ltk",
        "partial": "Gtk Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:GtkRegFunc",
      "description": {
        "fct-descr": "\u003cp\u003eA type for a function to register a gtk event\n |\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#GtkRegFunc",
        "fct-type": "type",
        "title": "GtkRegFunc"
      },
      "index": {
        "description": "type for function to register gtk event",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "GtkRegFunc",
        "normalized": "",
        "package": "ltk",
        "partial": "Gtk Reg Func",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Injector",
      "description": {
        "fct-descr": "\u003cp\u003eA type for injecting a value into an editor\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#Injector",
        "fct-type": "type",
        "title": "Injector"
      },
      "index": {
        "description": "type for injecting value into an editor",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "Injector",
        "normalized": "",
        "package": "ltk",
        "partial": "Injector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Notifier",
      "description": {
        "fct-descr": "\u003cp\u003eThe event source in the gtk editor context\n If the second argument is Left Handler the handler gets registered\n If the second argument is Right Unique the handler will be removed\n The returned unique value must be used for unregistering an event\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "newtype",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#Notifier",
        "fct-type": "newtype",
        "title": "Notifier"
      },
      "index": {
        "description": "The event source in the gtk editor context If the second argument is Left Handler the handler gets registered If the second argument is Right Unique the handler will be removed The returned unique value must be used for unregistering an event",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "Notifier",
        "normalized": "",
        "package": "ltk",
        "partial": "Notifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Setter",
      "description": {
        "fct-descr": "\u003cp\u003eA type for setting the field of a record\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#Setter",
        "fct-type": "type",
        "title": "Setter"
      },
      "index": {
        "description": "type for setting the field of record",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "Setter",
        "normalized": "",
        "package": "ltk",
        "partial": "Setter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:ButtonPressed",
      "description": {
        "fct-descr": "\u003cp\u003egeneric, a mouse key has been pressed and released, while the widget has the focus\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "ButtonPressed",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#GUIEventSelector",
        "fct-type": "function",
        "title": "ButtonPressed"
      },
      "index": {
        "description": "generic mouse key has been pressed and released while the widget has the focus",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "ButtonPressed",
        "normalized": "",
        "package": "ltk",
        "partial": "Button Pressed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:Clicked",
      "description": {
        "fct-descr": "\u003cp\u003ebutton specific, the button has been pressed\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "Clicked",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#GUIEventSelector",
        "fct-type": "function",
        "title": "Clicked"
      },
      "index": {
        "description": "button specific the button has been pressed",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "Clicked",
        "normalized": "",
        "package": "ltk",
        "partial": "Clicked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:ConnectC",
      "description": {
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "ConnectC (ConnectId alpha)",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#Connection",
        "fct-type": "function",
        "title": "ConnectC"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "ConnectC",
        "normalized": "",
        "package": "ltk",
        "partial": "Connect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:FocusIn",
      "description": {
        "fct-descr": "\u003cp\u003egeneric, the widget gets the focus\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "FocusIn",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#GUIEventSelector",
        "fct-type": "function",
        "title": "FocusIn"
      },
      "index": {
        "description": "generic the widget gets the focus",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "FocusIn",
        "normalized": "",
        "package": "ltk",
        "partial": "Focus In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:FocusOut",
      "description": {
        "fct-descr": "\u003cp\u003egeneric, the widget looses the focus\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "FocusOut",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#GUIEventSelector",
        "fct-type": "function",
        "title": "FocusOut"
      },
      "index": {
        "description": "generic the widget looses the focus",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "FocusOut",
        "normalized": "",
        "package": "ltk",
        "partial": "Focus Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:GUIEvent",
      "description": {
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "GUIEvent",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#GUIEvent",
        "fct-type": "function",
        "title": "GUIEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "GUIEvent",
        "normalized": "",
        "package": "ltk",
        "partial": "GUIEvent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:KeyPressed",
      "description": {
        "fct-descr": "\u003cp\u003egeneric, a keyboard key has been pressed and released, while the widget has the focus\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "KeyPressed",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#GUIEventSelector",
        "fct-type": "function",
        "title": "KeyPressed"
      },
      "index": {
        "description": "generic keyboard key has been pressed and released while the widget has the focus",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "KeyPressed",
        "normalized": "",
        "package": "ltk",
        "partial": "Key Pressed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:MayHaveChanged",
      "description": {
        "fct-descr": "\u003cp\u003egeneric, no gui event, the contents of the widget may have changed\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "MayHaveChanged",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#GUIEventSelector",
        "fct-type": "function",
        "title": "MayHaveChanged"
      },
      "index": {
        "description": "generic no gui event the contents of the widget may have changed",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "MayHaveChanged",
        "normalized": "",
        "package": "ltk",
        "partial": "May Have Changed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:Noti",
      "description": {
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "Noti (IORef (Handlers GUIEvent IO GUIEventSelector, Map GUIEventSelector GUIEventReg))",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#Notifier",
        "fct-type": "function",
        "title": "Noti"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "Noti",
        "normalized": "Noti(IORef(Handlers GUIEvent IO GUIEventSelector,Map GUIEventSelector GUIEventReg))",
        "package": "ltk",
        "partial": "Noti",
        "signature": "Noti(IORef(Handlers GUIEvent IO GUIEventSelector,Map GUIEventSelector GUIEventReg))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:ValidationError",
      "description": {
        "fct-descr": "\u003cp\u003evalidation of a contents has failed\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "ValidationError",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#GUIEventSelector",
        "fct-type": "function",
        "title": "ValidationError"
      },
      "index": {
        "description": "validation of contents has failed",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "ValidationError",
        "normalized": "",
        "package": "ltk",
        "partial": "Validation Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:activateEvent",
      "description": {
        "fct-descr": "\u003cp\u003eActivate the event after the event has been declared and the\n widget has been constructed\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "o -\u003e Notifier -\u003e Maybe (o -\u003e GtkHandler -\u003e IO Connection) -\u003e GUIEventSelector -\u003e IO ()",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#activateEvent",
        "fct-type": "function",
        "title": "activateEvent"
      },
      "index": {
        "description": "Activate the event after the event has been declared and the widget has been constructed",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "activateEvent",
        "normalized": "a-\u003eNotifier-\u003eMaybe(a-\u003eGtkHandler-\u003eIO Connection)-\u003eGUIEventSelector-\u003eIO()",
        "package": "ltk",
        "partial": "Event",
        "signature": "o-\u003eNotifier-\u003eMaybe(o-\u003eGtkHandler-\u003eIO Connection)-\u003eGUIEventSelector-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:allGUIEvents",
      "description": {
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "[GUIEventSelector]",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#allGUIEvents",
        "fct-type": "function",
        "title": "allGUIEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "allGUIEvents",
        "normalized": "[GUIEventSelector]",
        "package": "ltk",
        "partial": "GUIEvents",
        "signature": "[GUIEventSelector]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:emptyNotifier",
      "description": {
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "IO Notifier",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#emptyNotifier",
        "fct-type": "function",
        "title": "emptyNotifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "emptyNotifier",
        "normalized": "",
        "package": "ltk",
        "partial": "Notifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:eventText",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "String",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#GUIEvent",
        "fct-type": "function",
        "title": "eventText"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "eventText",
        "normalized": "",
        "package": "ltk",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:genericGUIEvents",
      "description": {
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "[GUIEventSelector]",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#genericGUIEvents",
        "fct-type": "function",
        "title": "genericGUIEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "genericGUIEvents",
        "normalized": "[GUIEventSelector]",
        "package": "ltk",
        "partial": "GUIEvents",
        "signature": "[GUIEventSelector]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:getStandardRegFunction",
      "description": {
        "fct-descr": "\u003cp\u003eA convinence method for not repeating this over and over again\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "GUIEventSelector -\u003e GtkRegFunc",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#getStandardRegFunction",
        "fct-type": "function",
        "title": "getStandardRegFunction"
      },
      "index": {
        "description": "convinence method for not repeating this over and over again",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "getStandardRegFunction",
        "normalized": "GUIEventSelector-\u003eGtkRegFunc",
        "package": "ltk",
        "partial": "Standard Reg Function",
        "signature": "GUIEventSelector-\u003eGtkRegFunc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:gtkEvent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "Event",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#GUIEvent",
        "fct-type": "function",
        "title": "gtkEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "gtkEvent",
        "normalized": "",
        "package": "ltk",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:gtkReturn",
      "description": {
        "fct-descr": "\u003cp\u003eTrue means that the event has been completely handled,\n  gtk shoudn't do any further action about it (Often not\n  a good idea\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "Bool",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#GUIEvent",
        "fct-type": "function",
        "title": "gtkReturn"
      },
      "index": {
        "description": "True means that the event has been completely handled gtk shoudn do any further action about it Often not good idea",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "gtkReturn",
        "normalized": "",
        "package": "ltk",
        "partial": "Return",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:propagateAsChanged",
      "description": {
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e [GUIEventSelector] -\u003e m ()",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#propagateAsChanged",
        "fct-type": "function",
        "title": "propagateAsChanged"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "propagateAsChanged",
        "normalized": "a-\u003e[GUIEventSelector]-\u003eb()",
        "package": "ltk",
        "partial": "As Changed",
        "signature": "alpha-\u003e[GUIEventSelector]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:propagateEvent",
      "description": {
        "fct-descr": "\u003cp\u003ePropagate the event with the selector from notifier to eventSource\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "Notifier -\u003e [Notifier] -\u003e GUIEventSelector -\u003e IO ()",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#propagateEvent",
        "fct-type": "function",
        "title": "propagateEvent"
      },
      "index": {
        "description": "Propagate the event with the selector from notifier to eventSource",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "propagateEvent",
        "normalized": "Notifier-\u003e[Notifier]-\u003eGUIEventSelector-\u003eIO()",
        "package": "ltk",
        "partial": "Event",
        "signature": "Notifier-\u003e[Notifier]-\u003eGUIEventSelector-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:selector",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Editor.Basics",
        "fct-package": "ltk",
        "fct-signature": "GUIEventSelector",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#GUIEvent",
        "fct-type": "function",
        "title": "selector"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Basics",
        "module": "Graphics.UI.Editor.Basics",
        "name": "selector",
        "normalized": "",
        "package": "ltk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for making composite editors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.UI.Editor.Composite",
        "fct-package": "ltk",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Editor-Composite.html",
        "fct-type": "module",
        "title": "Composite"
      },
      "index": {
        "description": "Module for making composite editors",
        "hierarchy": "Graphics UI Editor Composite",
        "module": "Graphics.UI.Editor.Composite",
        "name": "Composite",
        "normalized": "",
        "package": "ltk",
        "partial": "Composite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#t:ColumnDescr",
      "description": {
        "fct-module": "Graphics.UI.Editor.Composite",
        "fct-package": "ltk",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Editor-Composite.html#ColumnDescr",
        "fct-type": "data",
        "title": "ColumnDescr"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Composite",
        "module": "Graphics.UI.Editor.Composite",
        "name": "ColumnDescr",
        "normalized": "",
        "package": "ltk",
        "partial": "Column Descr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:ColumnDescr",
      "description": {
        "fct-module": "Graphics.UI.Editor.Composite",
        "fct-package": "ltk",
        "fct-signature": "ColumnDescr Bool [(String, row -\u003e [AttrOp CellRendererText])]",
        "fct-source": "src/Graphics-UI-Editor-Composite.html#ColumnDescr",
        "fct-type": "function",
        "title": "ColumnDescr"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Composite",
        "module": "Graphics.UI.Editor.Composite",
        "name": "ColumnDescr",
        "normalized": "ColumnDescr Bool[(String,a-\u003e[AttrOp CellRendererText])]",
        "package": "ltk",
        "partial": "Column Descr",
        "signature": "ColumnDescr Bool[(String,row-\u003e[AttrOp CellRendererText])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:dependenciesEditor",
      "description": {
        "fct-module": "Graphics.UI.Editor.Composite",
        "fct-package": "ltk",
        "fct-signature": "[PackageIdentifier] -\u003e Editor [Dependency]",
        "fct-source": "src/Graphics-UI-Editor-Composite.html#dependenciesEditor",
        "fct-type": "function",
        "title": "dependenciesEditor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Composite",
        "module": "Graphics.UI.Editor.Composite",
        "name": "dependenciesEditor",
        "normalized": "[PackageIdentifier]-\u003eEditor[Dependency]",
        "package": "ltk",
        "partial": "Editor",
        "signature": "[PackageIdentifier]-\u003eEditor[Dependency]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:dependencyEditor",
      "description": {
        "fct-module": "Graphics.UI.Editor.Composite",
        "fct-package": "ltk",
        "fct-signature": "[PackageIdentifier] -\u003e Editor Dependency",
        "fct-source": "src/Graphics-UI-Editor-Composite.html#dependencyEditor",
        "fct-type": "function",
        "title": "dependencyEditor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Composite",
        "module": "Graphics.UI.Editor.Composite",
        "name": "dependencyEditor",
        "normalized": "[PackageIdentifier]-\u003eEditor Dependency",
        "package": "ltk",
        "partial": "Editor",
        "signature": "[PackageIdentifier]-\u003eEditor Dependency"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:disableEditor",
      "description": {
        "fct-descr": "\u003cp\u003eAn editor with a subeditor which gets active, when a checkbox is selected\n or grayed out (if the positive Argument is False)\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Composite",
        "fct-package": "ltk",
        "fct-signature": "(Editor beta, Parameters) -\u003e Bool -\u003e String -\u003e Editor (Bool, beta)",
        "fct-source": "src/Graphics-UI-Editor-Composite.html#disableEditor",
        "fct-type": "function",
        "title": "disableEditor"
      },
      "index": {
        "description": "An editor with subeditor which gets active when checkbox is selected or grayed out if the positive Argument is False",
        "hierarchy": "Graphics UI Editor Composite",
        "module": "Graphics.UI.Editor.Composite",
        "name": "disableEditor",
        "normalized": "(Editor a,Parameters)-\u003eBool-\u003eString-\u003eEditor(Bool,a)",
        "package": "ltk",
        "partial": "Editor",
        "signature": "(Editor beta,Parameters)-\u003eBool-\u003eString-\u003eEditor(Bool,beta)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:eitherOrEditor",
      "description": {
        "fct-descr": "\u003cp\u003eAn editor with a subeditor which gets active, when a checkbox is selected\n or deselected (if the positive Argument is False)\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Composite",
        "fct-package": "ltk",
        "fct-signature": "(Editor alpha, Parameters) -\u003e (Editor beta, Parameters) -\u003e String -\u003e Editor (Either alpha beta)",
        "fct-source": "src/Graphics-UI-Editor-Composite.html#eitherOrEditor",
        "fct-type": "function",
        "title": "eitherOrEditor"
      },
      "index": {
        "description": "An editor with subeditor which gets active when checkbox is selected or deselected if the positive Argument is False",
        "hierarchy": "Graphics UI Editor Composite",
        "module": "Graphics.UI.Editor.Composite",
        "name": "eitherOrEditor",
        "normalized": "(Editor a,Parameters)-\u003e(Editor b,Parameters)-\u003eString-\u003eEditor(Either a b)",
        "package": "ltk",
        "partial": "Or Editor",
        "signature": "(Editor alpha,Parameters)-\u003e(Editor beta,Parameters)-\u003eString-\u003eEditor(Either alpha beta)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:filesEditor",
      "description": {
        "fct-module": "Graphics.UI.Editor.Composite",
        "fct-package": "ltk",
        "fct-signature": "Maybe FilePath -\u003e FileChooserAction -\u003e String -\u003e Editor [FilePath]",
        "fct-source": "src/Graphics-UI-Editor-Composite.html#filesEditor",
        "fct-type": "function",
        "title": "filesEditor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Composite",
        "module": "Graphics.UI.Editor.Composite",
        "name": "filesEditor",
        "normalized": "Maybe FilePath-\u003eFileChooserAction-\u003eString-\u003eEditor[FilePath]",
        "package": "ltk",
        "partial": "Editor",
        "signature": "Maybe FilePath-\u003eFileChooserAction-\u003eString-\u003eEditor[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:maybeEditor",
      "description": {
        "fct-descr": "\u003cp\u003eAn editor with a subeditor which gets active, when a checkbox is selected\n or deselected (if the positive Argument is False)\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Composite",
        "fct-package": "ltk",
        "fct-signature": "(Editor beta, Parameters) -\u003e Bool -\u003e String -\u003e Editor (Maybe beta)",
        "fct-source": "src/Graphics-UI-Editor-Composite.html#maybeEditor",
        "fct-type": "function",
        "title": "maybeEditor"
      },
      "index": {
        "description": "An editor with subeditor which gets active when checkbox is selected or deselected if the positive Argument is False",
        "hierarchy": "Graphics UI Editor Composite",
        "module": "Graphics.UI.Editor.Composite",
        "name": "maybeEditor",
        "normalized": "(Editor a,Parameters)-\u003eBool-\u003eString-\u003eEditor(Maybe a)",
        "package": "ltk",
        "partial": "Editor",
        "signature": "(Editor beta,Parameters)-\u003eBool-\u003eString-\u003eEditor(Maybe beta)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:multisetEditor",
      "description": {
        "fct-descr": "\u003cp\u003eAn editor with a subeditor, of which a list of items can be selected\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Composite",
        "fct-package": "ltk",
        "fct-signature": "ColumnDescr alpha-\u003e (Editor alpha, Parameters)-\u003e Maybe ([alpha] -\u003e [alpha])-\u003e Maybe (alpha -\u003e alpha -\u003e Bool)-\u003e Editor [alpha]",
        "fct-type": "function",
        "title": "multisetEditor"
      },
      "index": {
        "description": "An editor with subeditor of which list of items can be selected",
        "hierarchy": "Graphics UI Editor Composite",
        "module": "Graphics.UI.Editor.Composite",
        "name": "multisetEditor",
        "normalized": "ColumnDescr a-\u003e(Editor a,Parameters)-\u003eMaybe([a]-\u003e[a])-\u003eMaybe(a-\u003ea-\u003eBool)-\u003eEditor[a]",
        "package": "ltk",
        "partial": "Editor",
        "signature": "ColumnDescr alpha-\u003e(Editor alpha,Parameters)-\u003eMaybe([alpha]-\u003e[alpha])-\u003eMaybe(alpha-\u003ealpha-\u003eBool)-\u003eEditor[alpha]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:pairEditor",
      "description": {
        "fct-descr": "\u003cp\u003eAn editor which composes two subeditors\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Composite",
        "fct-package": "ltk",
        "fct-signature": "(Editor alpha, Parameters) -\u003e (Editor beta, Parameters) -\u003e Editor (alpha, beta)",
        "fct-source": "src/Graphics-UI-Editor-Composite.html#pairEditor",
        "fct-type": "function",
        "title": "pairEditor"
      },
      "index": {
        "description": "An editor which composes two subeditors",
        "hierarchy": "Graphics UI Editor Composite",
        "module": "Graphics.UI.Editor.Composite",
        "name": "pairEditor",
        "normalized": "(Editor a,Parameters)-\u003e(Editor b,Parameters)-\u003eEditor(a,b)",
        "package": "ltk",
        "partial": "Editor",
        "signature": "(Editor alpha,Parameters)-\u003e(Editor beta,Parameters)-\u003eEditor(alpha,beta)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:splitEditor",
      "description": {
        "fct-descr": "\u003cp\u003eLike a pair editor, but with a moveable split\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Composite",
        "fct-package": "ltk",
        "fct-signature": "(Editor alpha, Parameters) -\u003e (Editor beta, Parameters) -\u003e Editor (alpha, beta)",
        "fct-source": "src/Graphics-UI-Editor-Composite.html#splitEditor",
        "fct-type": "function",
        "title": "splitEditor"
      },
      "index": {
        "description": "Like pair editor but with moveable split",
        "hierarchy": "Graphics UI Editor Composite",
        "module": "Graphics.UI.Editor.Composite",
        "name": "splitEditor",
        "normalized": "(Editor a,Parameters)-\u003e(Editor b,Parameters)-\u003eEditor(a,b)",
        "package": "ltk",
        "partial": "Editor",
        "signature": "(Editor alpha,Parameters)-\u003e(Editor beta,Parameters)-\u003eEditor(alpha,beta)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:stringsEditor",
      "description": {
        "fct-module": "Graphics.UI.Editor.Composite",
        "fct-package": "ltk",
        "fct-signature": "(String -\u003e Bool) -\u003e Bool -\u003e Editor [String]",
        "fct-source": "src/Graphics-UI-Editor-Composite.html#stringsEditor",
        "fct-type": "function",
        "title": "stringsEditor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Composite",
        "module": "Graphics.UI.Editor.Composite",
        "name": "stringsEditor",
        "normalized": "(String-\u003eBool)-\u003eBool-\u003eEditor[String]",
        "package": "ltk",
        "partial": "Editor",
        "signature": "(String-\u003eBool)-\u003eBool-\u003eEditor[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:tupel3Editor",
      "description": {
        "fct-module": "Graphics.UI.Editor.Composite",
        "fct-package": "ltk",
        "fct-signature": "(Editor alpha, Parameters) -\u003e (Editor beta, Parameters) -\u003e (Editor gamma, Parameters) -\u003e Editor (alpha, beta, gamma)",
        "fct-source": "src/Graphics-UI-Editor-Composite.html#tupel3Editor",
        "fct-type": "function",
        "title": "tupel3Editor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Composite",
        "module": "Graphics.UI.Editor.Composite",
        "name": "tupel3Editor",
        "normalized": "(Editor a,Parameters)-\u003e(Editor b,Parameters)-\u003e(Editor c,Parameters)-\u003eEditor(a,b,c)",
        "package": "ltk",
        "partial": "Editor",
        "signature": "(Editor alpha,Parameters)-\u003e(Editor beta,Parameters)-\u003e(Editor gamma,Parameters)-\u003eEditor(alpha,beta,gamma)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:versionEditor",
      "description": {
        "fct-module": "Graphics.UI.Editor.Composite",
        "fct-package": "ltk",
        "fct-signature": "Editor Version",
        "fct-source": "src/Graphics-UI-Editor-Composite.html#versionEditor",
        "fct-type": "function",
        "title": "versionEditor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Composite",
        "module": "Graphics.UI.Editor.Composite",
        "name": "versionEditor",
        "normalized": "",
        "package": "ltk",
        "partial": "Editor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:versionRangeEditor",
      "description": {
        "fct-module": "Graphics.UI.Editor.Composite",
        "fct-package": "ltk",
        "fct-signature": "Editor VersionRange",
        "fct-source": "src/Graphics-UI-Editor-Composite.html#versionRangeEditor",
        "fct-type": "function",
        "title": "versionRangeEditor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Composite",
        "module": "Graphics.UI.Editor.Composite",
        "name": "versionRangeEditor",
        "normalized": "",
        "package": "ltk",
        "partial": "Range Editor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDescription of a editor with additional fileds for printing and parsing\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.UI.Editor.DescriptionPP",
        "fct-package": "ltk",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Editor-DescriptionPP.html",
        "fct-type": "module",
        "title": "DescriptionPP"
      },
      "index": {
        "description": "Description of editor with additional fileds for printing and parsing",
        "hierarchy": "Graphics UI Editor DescriptionPP",
        "module": "Graphics.UI.Editor.DescriptionPP",
        "name": "DescriptionPP",
        "normalized": "",
        "package": "ltk",
        "partial": "Description PP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#t:Applicator",
      "description": {
        "fct-descr": "\u003cp\u003eA type for the application of a value to be reflected in the GUI\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.DescriptionPP",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#Applicator",
        "fct-type": "type",
        "title": "Applicator"
      },
      "index": {
        "description": "type for the application of value to be reflected in the GUI",
        "hierarchy": "Graphics UI Editor DescriptionPP",
        "module": "Graphics.UI.Editor.DescriptionPP",
        "name": "Applicator",
        "normalized": "",
        "package": "ltk",
        "partial": "Applicator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#t:FieldDescriptionPP",
      "description": {
        "fct-module": "Graphics.UI.Editor.DescriptionPP",
        "fct-package": "ltk",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
        "fct-type": "data",
        "title": "FieldDescriptionPP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor DescriptionPP",
        "module": "Graphics.UI.Editor.DescriptionPP",
        "name": "FieldDescriptionPP",
        "normalized": "",
        "package": "ltk",
        "partial": "Field Description PP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:FDPP",
      "description": {
        "fct-module": "Graphics.UI.Editor.DescriptionPP",
        "fct-package": "ltk",
        "fct-signature": "FDPP",
        "fct-source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
        "fct-type": "function",
        "title": "FDPP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor DescriptionPP",
        "module": "Graphics.UI.Editor.DescriptionPP",
        "name": "FDPP",
        "normalized": "",
        "package": "ltk",
        "partial": "FDPP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:HFDPP",
      "description": {
        "fct-module": "Graphics.UI.Editor.DescriptionPP",
        "fct-package": "ltk",
        "fct-signature": "HFDPP Parameters [FieldDescriptionPP alpha gamma]",
        "fct-source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
        "fct-type": "function",
        "title": "HFDPP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor DescriptionPP",
        "module": "Graphics.UI.Editor.DescriptionPP",
        "name": "HFDPP",
        "normalized": "HFDPP Parameters[FieldDescriptionPP a b]",
        "package": "ltk",
        "partial": "HFDPP",
        "signature": "HFDPP Parameters[FieldDescriptionPP alpha gamma]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:NFDPP",
      "description": {
        "fct-module": "Graphics.UI.Editor.DescriptionPP",
        "fct-package": "ltk",
        "fct-signature": "NFDPP [(String, FieldDescriptionPP alpha gamma)]",
        "fct-source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
        "fct-type": "function",
        "title": "NFDPP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor DescriptionPP",
        "module": "Graphics.UI.Editor.DescriptionPP",
        "name": "NFDPP",
        "normalized": "NFDPP[(String,FieldDescriptionPP a b)]",
        "package": "ltk",
        "partial": "NFDPP",
        "signature": "NFDPP[(String,FieldDescriptionPP alpha gamma)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:VFDPP",
      "description": {
        "fct-module": "Graphics.UI.Editor.DescriptionPP",
        "fct-package": "ltk",
        "fct-signature": "VFDPP Parameters [FieldDescriptionPP alpha gamma]",
        "fct-source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
        "fct-type": "function",
        "title": "VFDPP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor DescriptionPP",
        "module": "Graphics.UI.Editor.DescriptionPP",
        "name": "VFDPP",
        "normalized": "VFDPP Parameters[FieldDescriptionPP a b]",
        "package": "ltk",
        "partial": "VFDPP",
        "signature": "VFDPP Parameters[FieldDescriptionPP alpha gamma]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:applicator",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Editor.DescriptionPP",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e alpha -\u003e gamma ()",
        "fct-source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
        "fct-type": "function",
        "title": "applicator"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor DescriptionPP",
        "module": "Graphics.UI.Editor.DescriptionPP",
        "name": "applicator",
        "normalized": "a-\u003ea-\u003eb()",
        "package": "ltk",
        "partial": "",
        "signature": "alpha-\u003ealpha-\u003egamma()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:extractFieldDescription",
      "description": {
        "fct-module": "Graphics.UI.Editor.DescriptionPP",
        "fct-package": "ltk",
        "fct-signature": "FieldDescriptionPP alpha gamma -\u003e FieldDescription alpha",
        "fct-source": "src/Graphics-UI-Editor-DescriptionPP.html#extractFieldDescription",
        "fct-type": "function",
        "title": "extractFieldDescription"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor DescriptionPP",
        "module": "Graphics.UI.Editor.DescriptionPP",
        "name": "extractFieldDescription",
        "normalized": "FieldDescriptionPP a b-\u003eFieldDescription a",
        "package": "ltk",
        "partial": "Field Description",
        "signature": "FieldDescriptionPP alpha gamma-\u003eFieldDescription alpha"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:fieldEditor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Editor.DescriptionPP",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e IO (Widget, Injector alpha, alpha -\u003e Extractor alpha, Notifier)",
        "fct-source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
        "fct-type": "function",
        "title": "fieldEditor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor DescriptionPP",
        "module": "Graphics.UI.Editor.DescriptionPP",
        "name": "fieldEditor",
        "normalized": "a-\u003eIO(Widget,Injector a,a-\u003eExtractor a,Notifier)",
        "package": "ltk",
        "partial": "Editor",
        "signature": "alpha-\u003eIO(Widget,Injector alpha,alpha-\u003eExtractor alpha,Notifier)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:fieldParser",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Editor.DescriptionPP",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e CharParser () alpha",
        "fct-source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
        "fct-type": "function",
        "title": "fieldParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor DescriptionPP",
        "module": "Graphics.UI.Editor.DescriptionPP",
        "name": "fieldParser",
        "normalized": "a-\u003eCharParser()a",
        "package": "ltk",
        "partial": "Parser",
        "signature": "alpha-\u003eCharParser()alpha"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:fieldPrinter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Editor.DescriptionPP",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e Doc",
        "fct-source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
        "fct-type": "function",
        "title": "fieldPrinter"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor DescriptionPP",
        "module": "Graphics.UI.Editor.DescriptionPP",
        "name": "fieldPrinter",
        "normalized": "a-\u003eDoc",
        "package": "ltk",
        "partial": "Printer",
        "signature": "alpha-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:flattenFieldDescriptionPP",
      "description": {
        "fct-module": "Graphics.UI.Editor.DescriptionPP",
        "fct-package": "ltk",
        "fct-signature": "FieldDescriptionPP alpha gamma -\u003e [FieldDescriptionPP alpha gamma]",
        "fct-source": "src/Graphics-UI-Editor-DescriptionPP.html#flattenFieldDescriptionPP",
        "fct-type": "function",
        "title": "flattenFieldDescriptionPP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor DescriptionPP",
        "module": "Graphics.UI.Editor.DescriptionPP",
        "name": "flattenFieldDescriptionPP",
        "normalized": "FieldDescriptionPP a b-\u003e[FieldDescriptionPP a b]",
        "package": "ltk",
        "partial": "Field Description PP",
        "signature": "FieldDescriptionPP alpha gamma-\u003e[FieldDescriptionPP alpha gamma]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:flattenFieldDescriptionPPToS",
      "description": {
        "fct-module": "Graphics.UI.Editor.DescriptionPP",
        "fct-package": "ltk",
        "fct-signature": "FieldDescriptionPP alpha gamma -\u003e [FieldDescriptionS alpha]",
        "fct-source": "src/Graphics-UI-Editor-DescriptionPP.html#flattenFieldDescriptionPPToS",
        "fct-type": "function",
        "title": "flattenFieldDescriptionPPToS"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor DescriptionPP",
        "module": "Graphics.UI.Editor.DescriptionPP",
        "name": "flattenFieldDescriptionPPToS",
        "normalized": "FieldDescriptionPP a b-\u003e[FieldDescriptionS a]",
        "package": "ltk",
        "partial": "Field Description PPTo",
        "signature": "FieldDescriptionPP alpha gamma-\u003e[FieldDescriptionS alpha]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:mkFieldPP",
      "description": {
        "fct-module": "Graphics.UI.Editor.DescriptionPP",
        "fct-package": "ltk",
        "fct-signature": "MkFieldDescriptionPP alpha beta gamma",
        "fct-source": "src/Graphics-UI-Editor-DescriptionPP.html#mkFieldPP",
        "fct-type": "function",
        "title": "mkFieldPP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor DescriptionPP",
        "module": "Graphics.UI.Editor.DescriptionPP",
        "name": "mkFieldPP",
        "normalized": "",
        "package": "ltk",
        "partial": "Field PP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:parameters",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Editor.DescriptionPP",
        "fct-package": "ltk",
        "fct-signature": "Parameters",
        "fct-source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
        "fct-type": "function",
        "title": "parameters"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor DescriptionPP",
        "module": "Graphics.UI.Editor.DescriptionPP",
        "name": "parameters",
        "normalized": "",
        "package": "ltk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for making editors out of descriptions\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.UI.Editor.MakeEditor",
        "fct-package": "ltk",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Editor-MakeEditor.html",
        "fct-type": "module",
        "title": "MakeEditor"
      },
      "index": {
        "description": "Module for making editors out of descriptions",
        "hierarchy": "Graphics UI Editor MakeEditor",
        "module": "Graphics.UI.Editor.MakeEditor",
        "name": "MakeEditor",
        "normalized": "",
        "package": "ltk",
        "partial": "Make Editor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#t:FieldDescription",
      "description": {
        "fct-descr": "\u003cp\u003eA type to describe a field of a record, which can be edited\n | alpha is the type of the individual field of the record\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.MakeEditor",
        "fct-package": "ltk",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Editor-MakeEditor.html#FieldDescription",
        "fct-type": "data",
        "title": "FieldDescription"
      },
      "index": {
        "description": "type to describe field of record which can be edited alpha is the type of the individual field of the record",
        "hierarchy": "Graphics UI Editor MakeEditor",
        "module": "Graphics.UI.Editor.MakeEditor",
        "name": "FieldDescription",
        "normalized": "",
        "package": "ltk",
        "partial": "Field Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#t:MkFieldDescription",
      "description": {
        "fct-descr": "\u003cp\u003eA constructor type for a field desciption\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.MakeEditor",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Editor-MakeEditor.html#MkFieldDescription",
        "fct-type": "type",
        "title": "MkFieldDescription"
      },
      "index": {
        "description": "constructor type for field desciption",
        "hierarchy": "Graphics UI Editor MakeEditor",
        "module": "Graphics.UI.Editor.MakeEditor",
        "name": "MkFieldDescription",
        "normalized": "",
        "package": "ltk",
        "partial": "Mk Field Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:FD",
      "description": {
        "fct-module": "Graphics.UI.Editor.MakeEditor",
        "fct-package": "ltk",
        "fct-signature": "FD Parameters (alpha -\u003e IO (Widget, Injector alpha, alpha -\u003e Extractor alpha, Notifier))",
        "fct-source": "src/Graphics-UI-Editor-MakeEditor.html#FieldDescription",
        "fct-type": "function",
        "title": "FD"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor MakeEditor",
        "module": "Graphics.UI.Editor.MakeEditor",
        "name": "FD",
        "normalized": "FD Parameters(a-\u003eIO(Widget,Injector a,a-\u003eExtractor a,Notifier))",
        "package": "ltk",
        "partial": "FD",
        "signature": "FD Parameters(alpha-\u003eIO(Widget,Injector alpha,alpha-\u003eExtractor alpha,Notifier))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:HFD",
      "description": {
        "fct-module": "Graphics.UI.Editor.MakeEditor",
        "fct-package": "ltk",
        "fct-signature": "HFD Parameters [FieldDescription alpha]",
        "fct-source": "src/Graphics-UI-Editor-MakeEditor.html#FieldDescription",
        "fct-type": "function",
        "title": "HFD"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor MakeEditor",
        "module": "Graphics.UI.Editor.MakeEditor",
        "name": "HFD",
        "normalized": "HFD Parameters[FieldDescription a]",
        "package": "ltk",
        "partial": "HFD",
        "signature": "HFD Parameters[FieldDescription alpha]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:NFD",
      "description": {
        "fct-module": "Graphics.UI.Editor.MakeEditor",
        "fct-package": "ltk",
        "fct-signature": "NFD [(String, FieldDescription alpha)]",
        "fct-source": "src/Graphics-UI-Editor-MakeEditor.html#FieldDescription",
        "fct-type": "function",
        "title": "NFD"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor MakeEditor",
        "module": "Graphics.UI.Editor.MakeEditor",
        "name": "NFD",
        "normalized": "NFD[(String,FieldDescription a)]",
        "package": "ltk",
        "partial": "NFD",
        "signature": "NFD[(String,FieldDescription alpha)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:VFD",
      "description": {
        "fct-module": "Graphics.UI.Editor.MakeEditor",
        "fct-package": "ltk",
        "fct-signature": "VFD Parameters [FieldDescription alpha]",
        "fct-source": "src/Graphics-UI-Editor-MakeEditor.html#FieldDescription",
        "fct-type": "function",
        "title": "VFD"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor MakeEditor",
        "module": "Graphics.UI.Editor.MakeEditor",
        "name": "VFD",
        "normalized": "VFD Parameters[FieldDescription a]",
        "package": "ltk",
        "partial": "VFD",
        "signature": "VFD Parameters[FieldDescription alpha]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:buildEditor",
      "description": {
        "fct-module": "Graphics.UI.Editor.MakeEditor",
        "fct-package": "ltk",
        "fct-signature": "FieldDescription alpha -\u003e alpha -\u003e IO (Widget, Injector alpha, alpha -\u003e Extractor alpha, Notifier)",
        "fct-source": "src/Graphics-UI-Editor-MakeEditor.html#buildEditor",
        "fct-type": "function",
        "title": "buildEditor"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor MakeEditor",
        "module": "Graphics.UI.Editor.MakeEditor",
        "name": "buildEditor",
        "normalized": "FieldDescription a-\u003ea-\u003eIO(Widget,Injector a,a-\u003eExtractor a,Notifier)",
        "package": "ltk",
        "partial": "Editor",
        "signature": "FieldDescription alpha-\u003ealpha-\u003eIO(Widget,Injector alpha,alpha-\u003eExtractor alpha,Notifier)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:extract",
      "description": {
        "fct-module": "Graphics.UI.Editor.MakeEditor",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e [alpha -\u003e Extractor alpha] -\u003e IO (Maybe alpha)",
        "fct-source": "src/Graphics-UI-Editor-MakeEditor.html#extract",
        "fct-type": "function",
        "title": "extract"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor MakeEditor",
        "module": "Graphics.UI.Editor.MakeEditor",
        "name": "extract",
        "normalized": "a-\u003e[a-\u003eExtractor a]-\u003eIO(Maybe a)",
        "package": "ltk",
        "partial": "",
        "signature": "alpha-\u003e[alpha-\u003eExtractor alpha]-\u003eIO(Maybe alpha)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:extractAndValidate",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience method to validate and extract fields\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.MakeEditor",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e [alpha -\u003e Extractor alpha] -\u003e [String] -\u003e Notifier -\u003e IO (Maybe alpha)",
        "fct-source": "src/Graphics-UI-Editor-MakeEditor.html#extractAndValidate",
        "fct-type": "function",
        "title": "extractAndValidate"
      },
      "index": {
        "description": "Convenience method to validate and extract fields",
        "hierarchy": "Graphics UI Editor MakeEditor",
        "module": "Graphics.UI.Editor.MakeEditor",
        "name": "extractAndValidate",
        "normalized": "a-\u003e[a-\u003eExtractor a]-\u003e[String]-\u003eNotifier-\u003eIO(Maybe a)",
        "package": "ltk",
        "partial": "And Validate",
        "signature": "alpha-\u003e[alpha-\u003eExtractor alpha]-\u003e[String]-\u003eNotifier-\u003eIO(Maybe alpha)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:flattenFieldDescription",
      "description": {
        "fct-module": "Graphics.UI.Editor.MakeEditor",
        "fct-package": "ltk",
        "fct-signature": "FieldDescription alpha -\u003e [FieldDescription alpha]",
        "fct-source": "src/Graphics-UI-Editor-MakeEditor.html#flattenFieldDescription",
        "fct-type": "function",
        "title": "flattenFieldDescription"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor MakeEditor",
        "module": "Graphics.UI.Editor.MakeEditor",
        "name": "flattenFieldDescription",
        "normalized": "FieldDescription a-\u003e[FieldDescription a]",
        "package": "ltk",
        "partial": "Field Description",
        "signature": "FieldDescription alpha-\u003e[FieldDescription alpha]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:getRealWidget",
      "description": {
        "fct-descr": "\u003cp\u003eget through outerAlignment, frame, innerAlignment\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.MakeEditor",
        "fct-package": "ltk",
        "fct-signature": "Widget -\u003e IO (Maybe Widget)",
        "fct-source": "src/Graphics-UI-Editor-MakeEditor.html#getRealWidget",
        "fct-type": "function",
        "title": "getRealWidget"
      },
      "index": {
        "description": "get through outerAlignment frame innerAlignment",
        "hierarchy": "Graphics UI Editor MakeEditor",
        "module": "Graphics.UI.Editor.MakeEditor",
        "name": "getRealWidget",
        "normalized": "Widget-\u003eIO(Maybe Widget)",
        "package": "ltk",
        "partial": "Real Widget",
        "signature": "Widget-\u003eIO(Maybe Widget)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:mkEditor",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to construct an editor\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.MakeEditor",
        "fct-package": "ltk",
        "fct-signature": "(Container -\u003e Injector alpha) -\u003e Extractor alpha -\u003e Editor alpha",
        "fct-source": "src/Graphics-UI-Editor-MakeEditor.html#mkEditor",
        "fct-type": "function",
        "title": "mkEditor"
      },
      "index": {
        "description": "Function to construct an editor",
        "hierarchy": "Graphics UI Editor MakeEditor",
        "module": "Graphics.UI.Editor.MakeEditor",
        "name": "mkEditor",
        "normalized": "(Container-\u003eInjector a)-\u003eExtractor a-\u003eEditor a",
        "package": "ltk",
        "partial": "Editor",
        "signature": "(Container-\u003eInjector alpha)-\u003eExtractor alpha-\u003eEditor alpha"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:mkField",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to construct a field description\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.MakeEditor",
        "fct-package": "ltk",
        "fct-signature": "MkFieldDescription alpha beta",
        "fct-source": "src/Graphics-UI-Editor-MakeEditor.html#mkField",
        "fct-type": "function",
        "title": "mkField"
      },
      "index": {
        "description": "Function to construct field description",
        "hierarchy": "Graphics UI Editor MakeEditor",
        "module": "Graphics.UI.Editor.MakeEditor",
        "name": "mkField",
        "normalized": "",
        "package": "ltk",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:parameters",
      "description": {
        "fct-module": "Graphics.UI.Editor.MakeEditor",
        "fct-package": "ltk",
        "fct-signature": "FieldDescription alpha -\u003e Parameters",
        "fct-source": "src/Graphics-UI-Editor-MakeEditor.html#parameters",
        "fct-type": "function",
        "title": "parameters"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor MakeEditor",
        "module": "Graphics.UI.Editor.MakeEditor",
        "name": "parameters",
        "normalized": "FieldDescription a-\u003eParameters",
        "package": "ltk",
        "partial": "",
        "signature": "FieldDescription alpha-\u003eParameters"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for parameters for editors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html",
        "fct-type": "module",
        "title": "Parameters"
      },
      "index": {
        "description": "Module for parameters for editors",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "Parameters",
        "normalized": "",
        "package": "ltk",
        "partial": "Parameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#t:Direction",
      "description": {
        "fct-descr": "\u003cp\u003eThe direction of a split\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Direction",
        "fct-type": "data",
        "title": "Direction"
      },
      "index": {
        "description": "The direction of split",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "Direction",
        "normalized": "",
        "package": "ltk",
        "partial": "Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#t:HorizontalAlign",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#HorizontalAlign",
        "fct-type": "data",
        "title": "HorizontalAlign"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "HorizontalAlign",
        "normalized": "",
        "package": "ltk",
        "partial": "Horizontal Align",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#t:Parameter",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
        "fct-type": "data",
        "title": "Parameter"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "Parameter",
        "normalized": "",
        "package": "ltk",
        "partial": "Parameter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#t:Parameters",
      "description": {
        "fct-descr": "\u003cp\u003eA type for parameters for editors\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Parameters",
        "fct-type": "type",
        "title": "Parameters"
      },
      "index": {
        "description": "type for parameters for editors",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "Parameters",
        "normalized": "",
        "package": "ltk",
        "partial": "Parameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:-60--60--60--45-",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "(Parameter -\u003e Maybe beta) -\u003e Parameter -\u003e Parameters -\u003e Parameters",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#%3C%3C%3C-",
        "fct-type": "function",
        "title": "(\u003c\u003c\u003c-)"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "(\u003c\u003c\u003c-) \u003c\u003c\u003c-",
        "normalized": "(Parameter-\u003eMaybe a)-\u003eParameter-\u003eParameters-\u003eParameters",
        "package": "ltk",
        "partial": "",
        "signature": "(Parameter-\u003eMaybe beta)-\u003eParameter-\u003eParameters-\u003eParameters"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:Horizontal",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Horizontal",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Direction",
        "fct-type": "function",
        "title": "Horizontal"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "Horizontal",
        "normalized": "",
        "package": "ltk",
        "partial": "Horizontal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:Keep",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Keep",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#HorizontalAlign",
        "fct-type": "function",
        "title": "Keep"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "Keep",
        "normalized": "",
        "package": "ltk",
        "partial": "Keep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaDirection",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "ParaDirection Direction",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
        "fct-type": "function",
        "title": "ParaDirection"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "ParaDirection",
        "normalized": "",
        "package": "ltk",
        "partial": "Para Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaHorizontal",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "ParaHorizontal HorizontalAlign",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
        "fct-type": "function",
        "title": "ParaHorizontal"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "ParaHorizontal",
        "normalized": "",
        "package": "ltk",
        "partial": "Para Horizontal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaInnerAlignment",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "ParaInnerAlignment (Float, Float, Float, Float)",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
        "fct-type": "function",
        "title": "ParaInnerAlignment"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "ParaInnerAlignment",
        "normalized": "ParaInnerAlignment(Float,Float,Float,Float)",
        "package": "ltk",
        "partial": "Para Inner Alignment",
        "signature": "ParaInnerAlignment(Float,Float,Float,Float)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaInnerPadding",
      "description": {
        "fct-descr": "\u003cp\u003exalign yalign xscale yscale\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "ParaInnerPadding (Int, Int, Int, Int)",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
        "fct-type": "function",
        "title": "ParaInnerPadding"
      },
      "index": {
        "description": "xalign yalign xscale yscale",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "ParaInnerPadding",
        "normalized": "ParaInnerPadding(Int,Int,Int,Int)",
        "package": "ltk",
        "partial": "Para Inner Padding",
        "signature": "ParaInnerPadding(Int,Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaMinSize",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "ParaMinSize (Int, Int)",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
        "fct-type": "function",
        "title": "ParaMinSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "ParaMinSize",
        "normalized": "ParaMinSize(Int,Int)",
        "package": "ltk",
        "partial": "Para Min Size",
        "signature": "ParaMinSize(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaMultiSel",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "ParaMultiSel Bool",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
        "fct-type": "function",
        "title": "ParaMultiSel"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "ParaMultiSel",
        "normalized": "",
        "package": "ltk",
        "partial": "Para Multi Sel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaName",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "ParaName String",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
        "fct-type": "function",
        "title": "ParaName"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "ParaName",
        "normalized": "",
        "package": "ltk",
        "partial": "Para Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaOuterAlignment",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "ParaOuterAlignment (Float, Float, Float, Float)",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
        "fct-type": "function",
        "title": "ParaOuterAlignment"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "ParaOuterAlignment",
        "normalized": "ParaOuterAlignment(Float,Float,Float,Float)",
        "package": "ltk",
        "partial": "Para Outer Alignment",
        "signature": "ParaOuterAlignment(Float,Float,Float,Float)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaOuterPadding",
      "description": {
        "fct-descr": "\u003cp\u003exalign yalign xscale yscale\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "ParaOuterPadding (Int, Int, Int, Int)",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
        "fct-type": "function",
        "title": "ParaOuterPadding"
      },
      "index": {
        "description": "xalign yalign xscale yscale",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "ParaOuterPadding",
        "normalized": "ParaOuterPadding(Int,Int,Int,Int)",
        "package": "ltk",
        "partial": "Para Outer Padding",
        "signature": "ParaOuterPadding(Int,Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaPack",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "ParaPack Packing",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
        "fct-type": "function",
        "title": "ParaPack"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "ParaPack",
        "normalized": "",
        "package": "ltk",
        "partial": "Para Pack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaShadow",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "ParaShadow ShadowType",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
        "fct-type": "function",
        "title": "ParaShadow"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "ParaShadow",
        "normalized": "",
        "package": "ltk",
        "partial": "Para Shadow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaShowLabel",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "ParaShowLabel Bool",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
        "fct-type": "function",
        "title": "ParaShowLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "ParaShowLabel",
        "normalized": "",
        "package": "ltk",
        "partial": "Para Show Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaStockId",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "ParaStockId String",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
        "fct-type": "function",
        "title": "ParaStockId"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "ParaStockId",
        "normalized": "",
        "package": "ltk",
        "partial": "Para Stock Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaSynopsis",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "ParaSynopsis String",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
        "fct-type": "function",
        "title": "ParaSynopsis"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "ParaSynopsis",
        "normalized": "",
        "package": "ltk",
        "partial": "Para Synopsis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:StartHorizontal",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "StartHorizontal",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#HorizontalAlign",
        "fct-type": "function",
        "title": "StartHorizontal"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "StartHorizontal",
        "normalized": "",
        "package": "ltk",
        "partial": "Start Horizontal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:StopHorizontal",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "StopHorizontal",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#HorizontalAlign",
        "fct-type": "function",
        "title": "StopHorizontal"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "StopHorizontal",
        "normalized": "",
        "package": "ltk",
        "partial": "Stop Horizontal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:Vertical",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Vertical",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#Direction",
        "fct-type": "function",
        "title": "Vertical"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "Vertical",
        "normalized": "",
        "package": "ltk",
        "partial": "Vertical",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:emptyParams",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "[Parameter]",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#emptyParams",
        "fct-type": "function",
        "title": "emptyParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "emptyParams",
        "normalized": "[Parameter]",
        "package": "ltk",
        "partial": "Params",
        "signature": "[Parameter]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:getParameter",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience method to get a parameter, or if not set the default parameter\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "(Parameter -\u003e Maybe beta) -\u003e Parameters -\u003e beta",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#getParameter",
        "fct-type": "function",
        "title": "getParameter"
      },
      "index": {
        "description": "Convenience method to get parameter or if not set the default parameter",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "getParameter",
        "normalized": "(Parameter-\u003eMaybe a)-\u003eParameters-\u003ea",
        "package": "ltk",
        "partial": "Parameter",
        "signature": "(Parameter-\u003eMaybe beta)-\u003eParameters-\u003ebeta"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:getParameterPrim",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "(Parameter -\u003e Maybe beta) -\u003e Parameters -\u003e Maybe beta",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#getParameterPrim",
        "fct-type": "function",
        "title": "getParameterPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "getParameterPrim",
        "normalized": "(Parameter-\u003eMaybe a)-\u003eParameters-\u003eMaybe a",
        "package": "ltk",
        "partial": "Parameter Prim",
        "signature": "(Parameter-\u003eMaybe beta)-\u003eParameters-\u003eMaybe beta"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraDirection",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Parameter -\u003e Maybe Direction",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#paraDirection",
        "fct-type": "function",
        "title": "paraDirection"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "paraDirection",
        "normalized": "Parameter-\u003eMaybe Direction",
        "package": "ltk",
        "partial": "Direction",
        "signature": "Parameter-\u003eMaybe Direction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraHorizontal",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Parameter -\u003e Maybe HorizontalAlign",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#paraHorizontal",
        "fct-type": "function",
        "title": "paraHorizontal"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "paraHorizontal",
        "normalized": "Parameter-\u003eMaybe HorizontalAlign",
        "package": "ltk",
        "partial": "Horizontal",
        "signature": "Parameter-\u003eMaybe HorizontalAlign"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraInnerAlignment",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Parameter -\u003e Maybe (Float, Float, Float, Float)",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#paraInnerAlignment",
        "fct-type": "function",
        "title": "paraInnerAlignment"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "paraInnerAlignment",
        "normalized": "Parameter-\u003eMaybe(Float,Float,Float,Float)",
        "package": "ltk",
        "partial": "Inner Alignment",
        "signature": "Parameter-\u003eMaybe(Float,Float,Float,Float)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraInnerPadding",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Parameter -\u003e Maybe (Int, Int, Int, Int)",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#paraInnerPadding",
        "fct-type": "function",
        "title": "paraInnerPadding"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "paraInnerPadding",
        "normalized": "Parameter-\u003eMaybe(Int,Int,Int,Int)",
        "package": "ltk",
        "partial": "Inner Padding",
        "signature": "Parameter-\u003eMaybe(Int,Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraMinSize",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Parameter -\u003e Maybe (Int, Int)",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#paraMinSize",
        "fct-type": "function",
        "title": "paraMinSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "paraMinSize",
        "normalized": "Parameter-\u003eMaybe(Int,Int)",
        "package": "ltk",
        "partial": "Min Size",
        "signature": "Parameter-\u003eMaybe(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraMultiSel",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Parameter -\u003e Maybe Bool",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#paraMultiSel",
        "fct-type": "function",
        "title": "paraMultiSel"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "paraMultiSel",
        "normalized": "Parameter-\u003eMaybe Bool",
        "package": "ltk",
        "partial": "Multi Sel",
        "signature": "Parameter-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraName",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Parameter -\u003e Maybe String",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#paraName",
        "fct-type": "function",
        "title": "paraName"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "paraName",
        "normalized": "Parameter-\u003eMaybe String",
        "package": "ltk",
        "partial": "Name",
        "signature": "Parameter-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraOuterAlignment",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Parameter -\u003e Maybe (Float, Float, Float, Float)",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#paraOuterAlignment",
        "fct-type": "function",
        "title": "paraOuterAlignment"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "paraOuterAlignment",
        "normalized": "Parameter-\u003eMaybe(Float,Float,Float,Float)",
        "package": "ltk",
        "partial": "Outer Alignment",
        "signature": "Parameter-\u003eMaybe(Float,Float,Float,Float)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraOuterPadding",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Parameter -\u003e Maybe (Int, Int, Int, Int)",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#paraOuterPadding",
        "fct-type": "function",
        "title": "paraOuterPadding"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "paraOuterPadding",
        "normalized": "Parameter-\u003eMaybe(Int,Int,Int,Int)",
        "package": "ltk",
        "partial": "Outer Padding",
        "signature": "Parameter-\u003eMaybe(Int,Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraPack",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Parameter -\u003e Maybe Packing",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#paraPack",
        "fct-type": "function",
        "title": "paraPack"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "paraPack",
        "normalized": "Parameter-\u003eMaybe Packing",
        "package": "ltk",
        "partial": "Pack",
        "signature": "Parameter-\u003eMaybe Packing"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraShadow",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Parameter -\u003e Maybe ShadowType",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#paraShadow",
        "fct-type": "function",
        "title": "paraShadow"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "paraShadow",
        "normalized": "Parameter-\u003eMaybe ShadowType",
        "package": "ltk",
        "partial": "Shadow",
        "signature": "Parameter-\u003eMaybe ShadowType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraShowLabel",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Parameter -\u003e Maybe Bool",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#paraShowLabel",
        "fct-type": "function",
        "title": "paraShowLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "paraShowLabel",
        "normalized": "Parameter-\u003eMaybe Bool",
        "package": "ltk",
        "partial": "Show Label",
        "signature": "Parameter-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraStockId",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Parameter -\u003e Maybe String",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#paraStockId",
        "fct-type": "function",
        "title": "paraStockId"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "paraStockId",
        "normalized": "Parameter-\u003eMaybe String",
        "package": "ltk",
        "partial": "Stock Id",
        "signature": "Parameter-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraSynopsis",
      "description": {
        "fct-module": "Graphics.UI.Editor.Parameters",
        "fct-package": "ltk",
        "fct-signature": "Parameter -\u003e Maybe String",
        "fct-source": "src/Graphics-UI-Editor-Parameters.html#paraSynopsis",
        "fct-type": "function",
        "title": "paraSynopsis"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Parameters",
        "module": "Graphics.UI.Editor.Parameters",
        "name": "paraSynopsis",
        "normalized": "Parameter-\u003eMaybe String",
        "package": "ltk",
        "partial": "Synopsis",
        "signature": "Parameter-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for making simple editors\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Editor-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "Module for making simple editors",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "ltk",
        "partial": "Simple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:boolEditor",
      "description": {
        "fct-descr": "\u003cp\u003eEditor for a boolean value in the form of a check button\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "Editor Bool",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#boolEditor",
        "fct-type": "function",
        "title": "boolEditor"
      },
      "index": {
        "description": "Editor for boolean value in the form of check button",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "boolEditor",
        "normalized": "",
        "package": "ltk",
        "partial": "Editor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:boolEditor2",
      "description": {
        "fct-descr": "\u003cp\u003eEditor for a boolean value in the form of two radio buttons\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "String -\u003e Editor Bool",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#boolEditor2",
        "fct-type": "function",
        "title": "boolEditor2"
      },
      "index": {
        "description": "Editor for boolean value in the form of two radio buttons",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "boolEditor2",
        "normalized": "String-\u003eEditor Bool",
        "package": "ltk",
        "partial": "Editor",
        "signature": "String-\u003eEditor Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:clickEditor",
      "description": {
        "fct-descr": "\u003cp\u003eAn Editor for nothing (which may report a click) in the form of a button\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "Bool -\u003e Editor ()",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#clickEditor",
        "fct-type": "function",
        "title": "clickEditor"
      },
      "index": {
        "description": "An Editor for nothing which may report click in the form of button",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "clickEditor",
        "normalized": "Bool-\u003eEditor()",
        "package": "ltk",
        "partial": "Editor",
        "signature": "Bool-\u003eEditor()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:colorEditor",
      "description": {
        "fct-descr": "\u003cp\u003eEditor for color selection\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "Editor Color",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#colorEditor",
        "fct-type": "function",
        "title": "colorEditor"
      },
      "index": {
        "description": "Editor for color selection",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "colorEditor",
        "normalized": "",
        "package": "ltk",
        "partial": "Editor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:comboSelectionEditor",
      "description": {
        "fct-descr": "\u003cp\u003eEditor for the selection of some element from a static list of elements in the\n | form of a combo box\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "[beta] -\u003e (beta -\u003e String) -\u003e Editor beta",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#comboSelectionEditor",
        "fct-type": "function",
        "title": "comboSelectionEditor"
      },
      "index": {
        "description": "Editor for the selection of some element from static list of elements in the form of combo box",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "comboSelectionEditor",
        "normalized": "[a]-\u003e(a-\u003eString)-\u003eEditor a",
        "package": "ltk",
        "partial": "Selection Editor",
        "signature": "[beta]-\u003e(beta-\u003eString)-\u003eEditor beta"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:enumEditor",
      "description": {
        "fct-descr": "\u003cp\u003eEditor for an enum value in the form of n radio buttons\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "[String] -\u003e Editor alpha",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#enumEditor",
        "fct-type": "function",
        "title": "enumEditor"
      },
      "index": {
        "description": "Editor for an enum value in the form of radio buttons",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "enumEditor",
        "normalized": "[String]-\u003eEditor a",
        "package": "ltk",
        "partial": "Editor",
        "signature": "[String]-\u003eEditor alpha"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:fileEditor",
      "description": {
        "fct-descr": "\u003cp\u003eEditor for the selection of a file path in the form of a text entry and a button,\n | which opens a gtk file chooser\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "Maybe FilePath -\u003e FileChooserAction -\u003e String -\u003e Editor FilePath",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#fileEditor",
        "fct-type": "function",
        "title": "fileEditor"
      },
      "index": {
        "description": "Editor for the selection of file path in the form of text entry and button which opens gtk file chooser",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "fileEditor",
        "normalized": "Maybe FilePath-\u003eFileChooserAction-\u003eString-\u003eEditor FilePath",
        "package": "ltk",
        "partial": "Editor",
        "signature": "Maybe FilePath-\u003eFileChooserAction-\u003eString-\u003eEditor FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:fontEditor",
      "description": {
        "fct-descr": "\u003cp\u003eEditor for a font selection\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "Editor (Maybe String)",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#fontEditor",
        "fct-type": "function",
        "title": "fontEditor"
      },
      "index": {
        "description": "Editor for font selection",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "fontEditor",
        "normalized": "",
        "package": "ltk",
        "partial": "Editor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:genericEditor",
      "description": {
        "fct-descr": "\u003cp\u003eEditor for for any value which is an instance of Read and Show in the form of a\n | text entry\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "Editor beta",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#genericEditor",
        "fct-type": "function",
        "title": "genericEditor"
      },
      "index": {
        "description": "Editor for for any value which is an instance of Read and Show in the form of text entry",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "genericEditor",
        "normalized": "",
        "package": "ltk",
        "partial": "Editor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:imageEditor",
      "description": {
        "fct-descr": "\u003cp\u003eAn Editor to display an image\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "Editor StockId",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#imageEditor",
        "fct-type": "function",
        "title": "imageEditor"
      },
      "index": {
        "description": "An Editor to display an image",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "imageEditor",
        "normalized": "",
        "package": "ltk",
        "partial": "Editor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:intEditor",
      "description": {
        "fct-descr": "\u003cp\u003eEditor for an integer in the form of a spin entry\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "(Double, Double, Double) -\u003e Editor Int",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#intEditor",
        "fct-type": "function",
        "title": "intEditor"
      },
      "index": {
        "description": "Editor for an integer in the form of spin entry",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "intEditor",
        "normalized": "(Double,Double,Double)-\u003eEditor Int",
        "package": "ltk",
        "partial": "Editor",
        "signature": "(Double,Double,Double)-\u003eEditor Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:multilineStringEditor",
      "description": {
        "fct-descr": "\u003cp\u003eEditor for a multiline string in the form of a multiline text entry\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "Editor String",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#multilineStringEditor",
        "fct-type": "function",
        "title": "multilineStringEditor"
      },
      "index": {
        "description": "Editor for multiline string in the form of multiline text entry",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "multilineStringEditor",
        "normalized": "",
        "package": "ltk",
        "partial": "String Editor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:multiselectionEditor",
      "description": {
        "fct-descr": "\u003cp\u003eEditor for the selection of some elements from a list of elements in the\n | form of a list box\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "Editor [beta]",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#multiselectionEditor",
        "fct-type": "function",
        "title": "multiselectionEditor"
      },
      "index": {
        "description": "Editor for the selection of some elements from list of elements in the form of list box",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "multiselectionEditor",
        "normalized": "Editor[a]",
        "package": "ltk",
        "partial": "Editor",
        "signature": "Editor[beta]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:noEditor",
      "description": {
        "fct-descr": "\u003cp\u003eAn invisible editor without any effect\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e Editor alpha",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#noEditor",
        "fct-type": "function",
        "title": "noEditor"
      },
      "index": {
        "description": "An invisible editor without any effect",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "noEditor",
        "normalized": "a-\u003eEditor a",
        "package": "ltk",
        "partial": "Editor",
        "signature": "alpha-\u003eEditor alpha"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:okCancelFields",
      "description": {
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "FieldDescription ()",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#okCancelFields",
        "fct-type": "function",
        "title": "okCancelFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "okCancelFields",
        "normalized": "FieldDescription()",
        "package": "ltk",
        "partial": "Cancel Fields",
        "signature": "FieldDescription()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:otherEditor",
      "description": {
        "fct-descr": "\u003cp\u003eAn editor, which opens another editor\n   You have to inject a value before the button can be clicked.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "(alpha -\u003e String -\u003e IO (Maybe alpha)) -\u003e Editor alpha",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#otherEditor",
        "fct-type": "function",
        "title": "otherEditor"
      },
      "index": {
        "description": "An editor which opens another editor You have to inject value before the button can be clicked",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "otherEditor",
        "normalized": "(a-\u003eString-\u003eIO(Maybe a))-\u003eEditor a",
        "package": "ltk",
        "partial": "Editor",
        "signature": "(alpha-\u003eString-\u003eIO(Maybe alpha))-\u003eEditor alpha"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:staticListEditor",
      "description": {
        "fct-descr": "\u003cp\u003eEditor for the selection of some elements from a static list of elements in the\n | form of a list box\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "[beta] -\u003e (beta -\u003e String) -\u003e Editor beta",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#staticListEditor",
        "fct-type": "function",
        "title": "staticListEditor"
      },
      "index": {
        "description": "Editor for the selection of some elements from static list of elements in the form of list box",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "staticListEditor",
        "normalized": "[a]-\u003e(a-\u003eString)-\u003eEditor a",
        "package": "ltk",
        "partial": "List Editor",
        "signature": "[beta]-\u003e(beta-\u003eString)-\u003eEditor beta"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:staticListMultiEditor",
      "description": {
        "fct-descr": "\u003cp\u003eEditor for the selection of some elements from a static list of elements in the\n | form of a list box with toggle elements\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "[beta] -\u003e (beta -\u003e String) -\u003e Editor [beta]",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#staticListMultiEditor",
        "fct-type": "function",
        "title": "staticListMultiEditor"
      },
      "index": {
        "description": "Editor for the selection of some elements from static list of elements in the form of list box with toggle elements",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "staticListMultiEditor",
        "normalized": "[a]-\u003e(a-\u003eString)-\u003eEditor[a]",
        "package": "ltk",
        "partial": "List Multi Editor",
        "signature": "[beta]-\u003e(beta-\u003eString)-\u003eEditor[beta]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:stringEditor",
      "description": {
        "fct-descr": "\u003cp\u003eEditor for a string in the form of a text entry\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Editor.Simple",
        "fct-package": "ltk",
        "fct-signature": "(String -\u003e Bool) -\u003e Bool -\u003e Editor String",
        "fct-source": "src/Graphics-UI-Editor-Simple.html#stringEditor",
        "fct-type": "function",
        "title": "stringEditor"
      },
      "index": {
        "description": "Editor for string in the form of text entry",
        "hierarchy": "Graphics UI Editor Simple",
        "module": "Graphics.UI.Editor.Simple",
        "name": "stringEditor",
        "normalized": "(String-\u003eBool)-\u003eBool-\u003eEditor String",
        "package": "ltk",
        "partial": "Editor",
        "signature": "(String-\u003eBool)-\u003eBool-\u003eEditor String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe basic definitions for all panes\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Frame-Panes.html",
        "fct-type": "module",
        "title": "Panes"
      },
      "index": {
        "description": "The basic definitions for all panes",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "Panes",
        "normalized": "",
        "package": "ltk",
        "partial": "Panes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eSignal handlers for the different pane types\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "Signal handlers for the different pane types",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "Connection",
        "normalized": "",
        "package": "ltk",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:Connections",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#Connections",
        "fct-type": "type",
        "title": "Connections"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "Connections",
        "normalized": "",
        "package": "ltk",
        "partial": "Connections",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:FrameState",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#FrameState",
        "fct-type": "data",
        "title": "FrameState"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "FrameState",
        "normalized": "",
        "package": "ltk",
        "partial": "Frame State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:IDEPane",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#IDEPane",
        "fct-type": "data",
        "title": "IDEPane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "IDEPane",
        "normalized": "",
        "package": "ltk",
        "partial": "IDEPane",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:Pane",
      "description": {
        "fct-descr": "\u003cp\u003eAll kinds of panes are instances of pane\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "class",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#Pane",
        "fct-type": "class",
        "title": "Pane"
      },
      "index": {
        "description": "All kinds of panes are instances of pane",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "Pane",
        "normalized": "",
        "package": "ltk",
        "partial": "Pane",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:PaneDirection",
      "description": {
        "fct-descr": "\u003cp\u003eThe relative direction to a pane from the parent\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PaneDirection",
        "fct-type": "data",
        "title": "PaneDirection"
      },
      "index": {
        "description": "The relative direction to pane from the parent",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "PaneDirection",
        "normalized": "",
        "package": "ltk",
        "partial": "Pane Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:PaneLayout",
      "description": {
        "fct-descr": "\u003cp\u003eDescription of a window layout\n Horizontal: top bottom Vertical: left right\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
        "fct-type": "data",
        "title": "PaneLayout"
      },
      "index": {
        "description": "Description of window layout Horizontal top bottom Vertical left right",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "PaneLayout",
        "normalized": "",
        "package": "ltk",
        "partial": "Pane Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:PaneMonad",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "class",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PaneMonad",
        "fct-type": "class",
        "title": "PaneMonad"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "PaneMonad",
        "normalized": "",
        "package": "ltk",
        "partial": "Pane Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:PaneName",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PaneName",
        "fct-type": "type",
        "title": "PaneName"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "PaneName",
        "normalized": "",
        "package": "ltk",
        "partial": "Pane Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:PanePath",
      "description": {
        "fct-descr": "\u003cp\u003eA path to a pane\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PanePath",
        "fct-type": "type",
        "title": "PanePath"
      },
      "index": {
        "description": "path to pane",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "PanePath",
        "normalized": "",
        "package": "ltk",
        "partial": "Pane Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:PanePathElement",
      "description": {
        "fct-descr": "\u003cp\u003eAn element of a path to a pane\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "data",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PanePathElement",
        "fct-type": "data",
        "title": "PanePathElement"
      },
      "index": {
        "description": "An element of path to pane",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "PanePathElement",
        "normalized": "",
        "package": "ltk",
        "partial": "Pane Path Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:RecoverablePane",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "class",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#RecoverablePane",
        "fct-type": "class",
        "title": "RecoverablePane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "RecoverablePane",
        "normalized": "",
        "package": "ltk",
        "partial": "Recoverable Pane",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:StandardPath",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#StandardPath",
        "fct-type": "type",
        "title": "StandardPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "StandardPath",
        "normalized": "",
        "package": "ltk",
        "partial": "Standard Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:BottomP",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "BottomP",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PaneDirection",
        "fct-type": "function",
        "title": "BottomP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "BottomP",
        "normalized": "",
        "package": "ltk",
        "partial": "Bottom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:ConnectC",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "ConnectC (ConnectId alpha)",
        "fct-source": "src/Graphics-UI-Editor-Basics.html#Connection",
        "fct-type": "function",
        "title": "ConnectC"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "ConnectC",
        "normalized": "",
        "package": "ltk",
        "partial": "Connect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:FrameState",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "FrameState",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#FrameState",
        "fct-type": "function",
        "title": "FrameState"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "FrameState",
        "normalized": "",
        "package": "ltk",
        "partial": "Frame State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:GroupP",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "GroupP String",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PanePathElement",
        "fct-type": "function",
        "title": "GroupP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "GroupP",
        "normalized": "",
        "package": "ltk",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:HorizontalP",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "HorizontalP PaneLayout PaneLayout Int",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
        "fct-type": "function",
        "title": "HorizontalP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "HorizontalP",
        "normalized": "",
        "package": "ltk",
        "partial": "Horizontal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:LeftP",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "LeftP",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PaneDirection",
        "fct-type": "function",
        "title": "LeftP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "LeftP",
        "normalized": "",
        "package": "ltk",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:PaneC",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "PaneC alpha",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#IDEPane",
        "fct-type": "function",
        "title": "PaneC"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "PaneC",
        "normalized": "",
        "package": "ltk",
        "partial": "Pane",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:RightP",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "RightP",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PaneDirection",
        "fct-type": "function",
        "title": "RightP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "RightP",
        "normalized": "",
        "package": "ltk",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:SplitP",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "SplitP PaneDirection",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PanePathElement",
        "fct-type": "function",
        "title": "SplitP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "SplitP",
        "normalized": "",
        "package": "ltk",
        "partial": "Split",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:TerminalP",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "TerminalP",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
        "fct-type": "function",
        "title": "TerminalP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "TerminalP",
        "normalized": "",
        "package": "ltk",
        "partial": "Terminal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:TopP",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "TopP",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PaneDirection",
        "fct-type": "function",
        "title": "TopP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "TopP",
        "normalized": "",
        "package": "ltk",
        "partial": "Top",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:VerticalP",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "VerticalP PaneLayout PaneLayout Int",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
        "fct-type": "function",
        "title": "VerticalP"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "VerticalP",
        "normalized": "",
        "package": "ltk",
        "partial": "Vertical",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:activateThisPane",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e Connections -\u003e delta ()",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#activateThisPane",
        "fct-type": "method",
        "title": "activateThisPane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "activateThisPane",
        "normalized": "a-\u003eConnections-\u003eb()",
        "package": "ltk",
        "partial": "This Pane",
        "signature": "alpha-\u003eConnections-\u003edelta()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:activePane",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "Maybe (PaneName, Connections)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#FrameState",
        "fct-type": "function",
        "title": "activePane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "activePane",
        "normalized": "Maybe(PaneName,Connections)",
        "package": "ltk",
        "partial": "Pane",
        "signature": "Maybe(PaneName,Connections)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:buildPane",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "PanePath -\u003e Notebook -\u003e (PanePath -\u003e Notebook -\u003e Window -\u003e delta (Maybe alpha, Connections)) -\u003e delta (Maybe alpha)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#buildPane",
        "fct-type": "method",
        "title": "buildPane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "buildPane",
        "normalized": "PanePath-\u003eNotebook-\u003e(PanePath-\u003eNotebook-\u003eWindow-\u003ea(Maybe b,Connections))-\u003ea(Maybe b)",
        "package": "ltk",
        "partial": "Pane",
        "signature": "PanePath-\u003eNotebook-\u003e(PanePath-\u003eNotebook-\u003eWindow-\u003edelta(Maybe alpha,Connections))-\u003edelta(Maybe alpha)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:buildThisPane",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "PanePath -\u003e Notebook -\u003e (PanePath -\u003e Notebook -\u003e Window -\u003e delta (Maybe alpha, Connections)) -\u003e delta (Maybe alpha)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#buildThisPane",
        "fct-type": "method",
        "title": "buildThisPane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "buildThisPane",
        "normalized": "PanePath-\u003eNotebook-\u003e(PanePath-\u003eNotebook-\u003eWindow-\u003ea(Maybe b,Connections))-\u003ea(Maybe b)",
        "package": "ltk",
        "partial": "This Pane",
        "signature": "PanePath-\u003eNotebook-\u003e(PanePath-\u003eNotebook-\u003eWindow-\u003edelta(Maybe alpha,Connections))-\u003edelta(Maybe alpha)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:builder",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "PanePath -\u003e Notebook -\u003e Window -\u003e delta (Maybe alpha, Connections)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#builder",
        "fct-type": "method",
        "title": "builder"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "builder",
        "normalized": "PanePath-\u003eNotebook-\u003eWindow-\u003ea(Maybe b,Connections)",
        "package": "ltk",
        "partial": "",
        "signature": "PanePath-\u003eNotebook-\u003eWindow-\u003edelta(Maybe alpha,Connections)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:closePane",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e delta Bool",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#closePane",
        "fct-type": "method",
        "title": "closePane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "closePane",
        "normalized": "a-\u003eb Bool",
        "package": "ltk",
        "partial": "Pane",
        "signature": "alpha-\u003edelta Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:closeThisPane",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e delta Bool",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#closeThisPane",
        "fct-type": "method",
        "title": "closeThisPane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "closeThisPane",
        "normalized": "a-\u003eb Bool",
        "package": "ltk",
        "partial": "This Pane",
        "signature": "alpha-\u003edelta Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:currentPage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "Int",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
        "fct-type": "function",
        "title": "currentPage"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "currentPage",
        "normalized": "",
        "package": "ltk",
        "partial": "Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:detachedId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "Maybe String",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
        "fct-type": "function",
        "title": "detachedId"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "detachedId",
        "normalized": "",
        "package": "ltk",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:detachedSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "Maybe (Int, Int)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
        "fct-type": "function",
        "title": "detachedSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "detachedSize",
        "normalized": "Maybe(Int,Int)",
        "package": "ltk",
        "partial": "Size",
        "signature": "Maybe(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:displayPane",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e Bool -\u003e delta ()",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#displayPane",
        "fct-type": "method",
        "title": "displayPane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "displayPane",
        "normalized": "a-\u003eBool-\u003eb()",
        "package": "ltk",
        "partial": "Pane",
        "signature": "alpha-\u003eBool-\u003edelta()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:displayThisPane",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e Bool -\u003e delta ()",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#displayThisPane",
        "fct-type": "method",
        "title": "displayThisPane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "displayThisPane",
        "normalized": "a-\u003eBool-\u003eb()",
        "package": "ltk",
        "partial": "This Pane",
        "signature": "alpha-\u003eBool-\u003edelta()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:forceGetPane",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "Either PanePath String -\u003e delta alpha",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#forceGetPane",
        "fct-type": "method",
        "title": "forceGetPane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "forceGetPane",
        "normalized": "Either PanePath String-\u003ea b",
        "package": "ltk",
        "partial": "Get Pane",
        "signature": "Either PanePath String-\u003edelta alpha"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:getAddedIndex",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e Int",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#getAddedIndex",
        "fct-type": "method",
        "title": "getAddedIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "getAddedIndex",
        "normalized": "a-\u003eInt",
        "package": "ltk",
        "partial": "Added Index",
        "signature": "alpha-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:getAndDisplayPane",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "Either PanePath String -\u003e Bool -\u003e delta (Maybe alpha)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#getAndDisplayPane",
        "fct-type": "method",
        "title": "getAndDisplayPane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "getAndDisplayPane",
        "normalized": "Either PanePath String-\u003eBool-\u003ea(Maybe b)",
        "package": "ltk",
        "partial": "And Display Pane",
        "signature": "Either PanePath String-\u003eBool-\u003edelta(Maybe alpha)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:getFrameState",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "delta (FrameState delta)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#getFrameState",
        "fct-type": "method",
        "title": "getFrameState"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "getFrameState",
        "normalized": "",
        "package": "ltk",
        "partial": "Frame State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:getOrBuildPane",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "Either PanePath String -\u003e delta (Maybe alpha)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#getOrBuildPane",
        "fct-type": "method",
        "title": "getOrBuildPane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "getOrBuildPane",
        "normalized": "Either PanePath String-\u003ea(Maybe b)",
        "package": "ltk",
        "partial": "Or Build Pane",
        "signature": "Either PanePath String-\u003edelta(Maybe alpha)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:getOrBuildThisPane",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "Either PanePath String -\u003e delta (Maybe alpha)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#getOrBuildThisPane",
        "fct-type": "method",
        "title": "getOrBuildThisPane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "getOrBuildThisPane",
        "normalized": "Either PanePath String-\u003ea(Maybe b)",
        "package": "ltk",
        "partial": "Or Build This Pane",
        "signature": "Either PanePath String-\u003edelta(Maybe alpha)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:getPane",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "delta (Maybe alpha)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#getPane",
        "fct-type": "method",
        "title": "getPane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "getPane",
        "normalized": "",
        "package": "ltk",
        "partial": "Pane",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:getThisPane",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "delta (Maybe alpha)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#getThisPane",
        "fct-type": "method",
        "title": "getThisPane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "getThisPane",
        "normalized": "",
        "package": "ltk",
        "partial": "This Pane",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:getTopWidget",
      "description": {
        "fct-descr": "\u003cp\u003egets the top Widget of this pane\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e Widget",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#getTopWidget",
        "fct-type": "method",
        "title": "getTopWidget"
      },
      "index": {
        "description": "gets the top Widget of this pane",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "getTopWidget",
        "normalized": "a-\u003eWidget",
        "package": "ltk",
        "partial": "Top Widget",
        "signature": "alpha-\u003eWidget"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:layout",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "PaneLayout",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#FrameState",
        "fct-type": "function",
        "title": "layout"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "layout",
        "normalized": "",
        "package": "ltk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:makeActive",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e delta ()",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#makeActive",
        "fct-type": "method",
        "title": "makeActive"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "makeActive",
        "normalized": "a-\u003eb()",
        "package": "ltk",
        "partial": "Active",
        "signature": "alpha-\u003edelta()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:paneGroups",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "Map String PaneLayout",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
        "fct-type": "function",
        "title": "paneGroups"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "paneGroups",
        "normalized": "",
        "package": "ltk",
        "partial": "Groups",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:paneId",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e String",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#paneId",
        "fct-type": "method",
        "title": "paneId"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "paneId",
        "normalized": "a-\u003eString",
        "package": "ltk",
        "partial": "Id",
        "signature": "alpha-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:paneMap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "Map PaneName (PanePath, Connections)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#FrameState",
        "fct-type": "function",
        "title": "paneMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "paneMap",
        "normalized": "Map PaneName(PanePath,Connections)",
        "package": "ltk",
        "partial": "Map",
        "signature": "Map PaneName(PanePath,Connections)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:paneName",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e PaneName",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#paneName",
        "fct-type": "method",
        "title": "paneName"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "paneName",
        "normalized": "a-\u003ePaneName",
        "package": "ltk",
        "partial": "Name",
        "signature": "alpha-\u003ePaneName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:panePathForGroup",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "String -\u003e delta PanePath",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#panePathForGroup",
        "fct-type": "method",
        "title": "panePathForGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "panePathForGroup",
        "normalized": "String-\u003ea PanePath",
        "package": "ltk",
        "partial": "Path For Group",
        "signature": "String-\u003edelta PanePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:panePathFromNB",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "!(Map Notebook PanePath)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#FrameState",
        "fct-type": "function",
        "title": "panePathFromNB"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "panePathFromNB",
        "normalized": "",
        "package": "ltk",
        "partial": "Path From NB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:paneTabs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "Maybe PaneDirection",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
        "fct-type": "function",
        "title": "paneTabs"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "paneTabs",
        "normalized": "",
        "package": "ltk",
        "partial": "Tabs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:panes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "Map PaneName (IDEPane delta)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#FrameState",
        "fct-type": "function",
        "title": "panes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "panes",
        "normalized": "",
        "package": "ltk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:primPaneName",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e String",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#primPaneName",
        "fct-type": "method",
        "title": "primPaneName"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "primPaneName",
        "normalized": "a-\u003eString",
        "package": "ltk",
        "partial": "Pane Name",
        "signature": "alpha-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:recoverState",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "PanePath -\u003e beta -\u003e delta (Maybe alpha)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#recoverState",
        "fct-type": "method",
        "title": "recoverState"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "recoverState",
        "normalized": "PanePath-\u003ea-\u003eb(Maybe c)",
        "package": "ltk",
        "partial": "State",
        "signature": "PanePath-\u003ebeta-\u003edelta(Maybe alpha)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:runInIO",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "forall alpha beta.  (beta -\u003e delta alpha) -\u003e delta (beta -\u003e IO alpha)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#runInIO",
        "fct-type": "method",
        "title": "runInIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "runInIO",
        "normalized": "a b c(d-\u003ee b)-\u003ee(d-\u003eIO b)",
        "package": "ltk",
        "partial": "In IO",
        "signature": "forall alpha beta.(beta-\u003edelta alpha)-\u003edelta(beta-\u003eIO alpha)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:saveState",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e delta (Maybe beta)",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#saveState",
        "fct-type": "method",
        "title": "saveState"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "saveState",
        "normalized": "a-\u003eb(Maybe c)",
        "package": "ltk",
        "partial": "State",
        "signature": "alpha-\u003edelta(Maybe beta)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:setFrameState",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "FrameState delta -\u003e delta ()",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#setFrameState",
        "fct-type": "method",
        "title": "setFrameState"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "setFrameState",
        "normalized": "FrameState a-\u003ea()",
        "package": "ltk",
        "partial": "Frame State",
        "signature": "FrameState delta-\u003edelta()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:signalDisconnectAll",
      "description": {
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "Connections -\u003e IO ()",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#signalDisconnectAll",
        "fct-type": "function",
        "title": "signalDisconnectAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "signalDisconnectAll",
        "normalized": "Connections-\u003eIO()",
        "package": "ltk",
        "partial": "Disconnect All",
        "signature": "Connections-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:uiManager",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "UIManager",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#FrameState",
        "fct-type": "function",
        "title": "uiManager"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "uiManager",
        "normalized": "",
        "package": "ltk",
        "partial": "Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:windows",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.UI.Frame.Panes",
        "fct-package": "ltk",
        "fct-signature": "[Window]",
        "fct-source": "src/Graphics-UI-Frame-Panes.html#FrameState",
        "fct-type": "function",
        "title": "windows"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame Panes",
        "module": "Graphics.UI.Frame.Panes",
        "name": "windows",
        "normalized": "[Window]",
        "package": "ltk",
        "partial": "",
        "signature": "[Window]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSplittable panes containing notebooks with any widgets\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "module",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html",
        "fct-type": "module",
        "title": "ViewFrame"
      },
      "index": {
        "description": "Splittable panes containing notebooks with any widgets",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "ViewFrame",
        "normalized": "",
        "package": "ltk",
        "partial": "View Frame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:addPaneAdmin",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e Connections -\u003e PanePath -\u003e delta Bool",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#addPaneAdmin",
        "fct-type": "function",
        "title": "addPaneAdmin"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "addPaneAdmin",
        "normalized": "a-\u003eConnections-\u003ePanePath-\u003eb Bool",
        "package": "ltk",
        "partial": "Pane Admin",
        "signature": "alpha-\u003eConnections-\u003ePanePath-\u003edelta Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:allGroupNames",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "PaneLayout -\u003e Set String",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#allGroupNames",
        "fct-type": "function",
        "title": "allGroupNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "allGroupNames",
        "normalized": "PaneLayout-\u003eSet String",
        "package": "ltk",
        "partial": "Group Names",
        "signature": "PaneLayout-\u003eSet String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:bringGroupToFront",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "String -\u003e alpha (Maybe PanePath)",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#bringGroupToFront",
        "fct-type": "function",
        "title": "bringGroupToFront"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "bringGroupToFront",
        "normalized": "String-\u003ea(Maybe PanePath)",
        "package": "ltk",
        "partial": "Group To Front",
        "signature": "String-\u003ealpha(Maybe PanePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:bringPaneToFront",
      "description": {
        "fct-descr": "\u003cp\u003eBring the pane to the front position in its notebook\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e IO ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#bringPaneToFront",
        "fct-type": "function",
        "title": "bringPaneToFront"
      },
      "index": {
        "description": "Bring the pane to the front position in its notebook",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "bringPaneToFront",
        "normalized": "a-\u003eIO()",
        "package": "ltk",
        "partial": "Pane To Front",
        "signature": "alpha-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:closeGroup",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "String -\u003e alpha ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#closeGroup",
        "fct-type": "function",
        "title": "closeGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "closeGroup",
        "normalized": "String-\u003ea()",
        "package": "ltk",
        "partial": "Group",
        "signature": "String-\u003ealpha()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:figureOutPaneName",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a unique pane name, which is an index and a string\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "String -\u003e Int -\u003e alpha (Int, String)",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#figureOutPaneName",
        "fct-type": "function",
        "title": "figureOutPaneName"
      },
      "index": {
        "description": "Constructs unique pane name which is an index and string",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "figureOutPaneName",
        "normalized": "String-\u003eInt-\u003ea(Int,String)",
        "package": "ltk",
        "partial": "Out Pane Name",
        "signature": "String-\u003eInt-\u003ealpha(Int,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getActiveNotebook",
      "description": {
        "fct-descr": "\u003cp\u003eGet the active notebook\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "alpha (Maybe Notebook)",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getActiveNotebook",
        "fct-type": "function",
        "title": "getActiveNotebook"
      },
      "index": {
        "description": "Get the active notebook",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getActiveNotebook",
        "normalized": "",
        "package": "ltk",
        "partial": "Active Notebook",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getActivePane",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "delta (Maybe (PaneName, Connections))",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getActivePane",
        "fct-type": "function",
        "title": "getActivePane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getActivePane",
        "normalized": "a(Maybe(PaneName,Connections))",
        "package": "ltk",
        "partial": "Active Pane",
        "signature": "delta(Maybe(PaneName,Connections))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getActivePanePath",
      "description": {
        "fct-descr": "\u003cp\u003eGet the path to the active pane\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "alpha (Maybe PanePath)",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getActivePanePath",
        "fct-type": "function",
        "title": "getActivePanePath"
      },
      "index": {
        "description": "Get the path to the active pane",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getActivePanePath",
        "normalized": "",
        "package": "ltk",
        "partial": "Active Pane Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getActivePanePathOrStandard",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "StandardPath -\u003e alpha PanePath",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getActivePanePathOrStandard",
        "fct-type": "function",
        "title": "getActivePanePathOrStandard"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getActivePanePathOrStandard",
        "normalized": "StandardPath-\u003ea PanePath",
        "package": "ltk",
        "partial": "Active Pane Path Or Standard",
        "signature": "StandardPath-\u003ealpha PanePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getBestPanePath",
      "description": {
        "fct-descr": "\u003cp\u003eGet a valid panePath from a standard path.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "StandardPath -\u003e PaneLayout -\u003e PanePath",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getBestPanePath",
        "fct-type": "function",
        "title": "getBestPanePath"
      },
      "index": {
        "description": "Get valid panePath from standard path",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getBestPanePath",
        "normalized": "StandardPath-\u003ePaneLayout-\u003ePanePath",
        "package": "ltk",
        "partial": "Best Pane Path",
        "signature": "StandardPath-\u003ePaneLayout-\u003ePanePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getBestPathForId",
      "description": {
        "fct-descr": "\u003cp\u003eGet a standard path.\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "String -\u003e alpha PanePath",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getBestPathForId",
        "fct-type": "function",
        "title": "getBestPathForId"
      },
      "index": {
        "description": "Get standard path",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getBestPathForId",
        "normalized": "String-\u003ea PanePath",
        "package": "ltk",
        "partial": "Best Path For Id",
        "signature": "String-\u003ealpha PanePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getLayout",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "delta PaneLayout",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getLayout",
        "fct-type": "function",
        "title": "getLayout"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getLayout",
        "normalized": "",
        "package": "ltk",
        "partial": "Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getMainWindow",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "m Window",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getMainWindow",
        "fct-type": "function",
        "title": "getMainWindow"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getMainWindow",
        "normalized": "",
        "package": "ltk",
        "partial": "Main Window",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getNotebook",
      "description": {
        "fct-descr": "\u003cp\u003eGet the notebook widget for the given pane path\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "PanePath -\u003e alpha Notebook",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getNotebook",
        "fct-type": "function",
        "title": "getNotebook"
      },
      "index": {
        "description": "Get the notebook widget for the given pane path",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getNotebook",
        "normalized": "PanePath-\u003ea Notebook",
        "package": "ltk",
        "partial": "Notebook",
        "signature": "PanePath-\u003ealpha Notebook"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getPaneMapSt",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "delta (Map PaneName (PanePath, Connections))",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getPaneMapSt",
        "fct-type": "function",
        "title": "getPaneMapSt"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getPaneMapSt",
        "normalized": "a(Map PaneName(PanePath,Connections))",
        "package": "ltk",
        "partial": "Pane Map St",
        "signature": "delta(Map PaneName(PanePath,Connections))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getPanePrim",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "delta (Maybe alpha)",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getPanePrim",
        "fct-type": "function",
        "title": "getPanePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getPanePrim",
        "normalized": "",
        "package": "ltk",
        "partial": "Pane Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getPaned",
      "description": {
        "fct-descr": "\u003cp\u003eGet the (gtk) Paned widget for a given path\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "PanePath -\u003e alpha Paned",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getPaned",
        "fct-type": "function",
        "title": "getPaned"
      },
      "index": {
        "description": "Get the gtk Paned widget for given path",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getPaned",
        "normalized": "PanePath-\u003ea Paned",
        "package": "ltk",
        "partial": "Paned",
        "signature": "PanePath-\u003ealpha Paned"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getPanes",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "delta [alpha]",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getPanes",
        "fct-type": "function",
        "title": "getPanes"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getPanes",
        "normalized": "a[b]",
        "package": "ltk",
        "partial": "Panes",
        "signature": "delta[alpha]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getPanesSt",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "delta (Map PaneName (IDEPane delta))",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getPanesSt",
        "fct-type": "function",
        "title": "getPanesSt"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getPanesSt",
        "normalized": "",
        "package": "ltk",
        "partial": "Panes St",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getUIAction",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "String -\u003e (Action -\u003e a) -\u003e alpha a",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getUIAction",
        "fct-type": "function",
        "title": "getUIAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getUIAction",
        "normalized": "String-\u003e(Action-\u003ea)-\u003eb a",
        "package": "ltk",
        "partial": "UIAction",
        "signature": "String-\u003e(Action-\u003ea)-\u003ealpha a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getUiManager",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "delta UIManager",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getUiManager",
        "fct-type": "function",
        "title": "getUiManager"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getUiManager",
        "normalized": "",
        "package": "ltk",
        "partial": "Ui Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getWindows",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "delta [Window]",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#getWindows",
        "fct-type": "function",
        "title": "getWindows"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "getWindows",
        "normalized": "a[Window]",
        "package": "ltk",
        "partial": "Windows",
        "signature": "delta[Window]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:guiPropertiesFromName",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "PaneName -\u003e alpha (PanePath, Connections)",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#guiPropertiesFromName",
        "fct-type": "function",
        "title": "guiPropertiesFromName"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "guiPropertiesFromName",
        "normalized": "PaneName-\u003ea(PanePath,Connections)",
        "package": "ltk",
        "partial": "Properties From Name",
        "signature": "PaneName-\u003ealpha(PanePath,Connections)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:handleNotebookSwitch",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "Notebook -\u003e Int -\u003e beta ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#handleNotebookSwitch",
        "fct-type": "function",
        "title": "handleNotebookSwitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "handleNotebookSwitch",
        "normalized": "Notebook-\u003eInt-\u003ea()",
        "package": "ltk",
        "partial": "Notebook Switch",
        "signature": "Notebook-\u003eInt-\u003ebeta()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:initGtkRc",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "IO ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#initGtkRc",
        "fct-type": "function",
        "title": "initGtkRc"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "initGtkRc",
        "normalized": "IO()",
        "package": "ltk",
        "partial": "Gtk Rc",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:markLabel",
      "description": {
        "fct-descr": "\u003cp\u003eAdd the change mark or removes it\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "beta -\u003e alpha -\u003e Bool -\u003e IO ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#markLabel",
        "fct-type": "function",
        "title": "markLabel"
      },
      "index": {
        "description": "Add the change mark or removes it",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "markLabel",
        "normalized": "a-\u003eb-\u003eBool-\u003eIO()",
        "package": "ltk",
        "partial": "Label",
        "signature": "beta-\u003ealpha-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:mbPaneFromName",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "PaneName -\u003e alpha (Maybe (IDEPane alpha))",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#mbPaneFromName",
        "fct-type": "function",
        "title": "mbPaneFromName"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "mbPaneFromName",
        "normalized": "PaneName-\u003ea(Maybe(IDEPane a))",
        "package": "ltk",
        "partial": "Pane From Name",
        "signature": "PaneName-\u003ealpha(Maybe(IDEPane alpha))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:newGroupOrBringToFront",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "String -\u003e PanePath -\u003e alpha (Maybe PanePath, Bool)",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#newGroupOrBringToFront",
        "fct-type": "function",
        "title": "newGroupOrBringToFront"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "newGroupOrBringToFront",
        "normalized": "String-\u003ePanePath-\u003ea(Maybe PanePath,Bool)",
        "package": "ltk",
        "partial": "Group Or Bring To Front",
        "signature": "String-\u003ePanePath-\u003ealpha(Maybe PanePath,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:newNotebook",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a new notebook,\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "PanePath -\u003e alpha Notebook",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#newNotebook",
        "fct-type": "function",
        "title": "newNotebook"
      },
      "index": {
        "description": "Construct new notebook",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "newNotebook",
        "normalized": "PanePath-\u003ea Notebook",
        "package": "ltk",
        "partial": "Notebook",
        "signature": "PanePath-\u003ealpha Notebook"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:newNotebook-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a new notebook\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "IO Notebook",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#newNotebook%27",
        "fct-type": "function",
        "title": "newNotebook'"
      },
      "index": {
        "description": "Construct new notebook",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "newNotebook'",
        "normalized": "",
        "package": "ltk",
        "partial": "Notebook'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:notebookInsertOrdered",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "self -\u003e child -\u003e String -\u003e Maybe Label -\u003e Bool -\u003e alpha ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#notebookInsertOrdered",
        "fct-type": "function",
        "title": "notebookInsertOrdered"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "notebookInsertOrdered",
        "normalized": "a-\u003eb-\u003eString-\u003eMaybe Label-\u003eBool-\u003ec()",
        "package": "ltk",
        "partial": "Insert Ordered",
        "signature": "self-\u003echild-\u003eString-\u003eMaybe Label-\u003eBool-\u003ealpha()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:paneDirectionToPosType",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "PaneDirection -\u003e PositionType",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#paneDirectionToPosType",
        "fct-type": "function",
        "title": "paneDirectionToPosType"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "paneDirectionToPosType",
        "normalized": "PaneDirection-\u003ePositionType",
        "package": "ltk",
        "partial": "Direction To Pos Type",
        "signature": "PaneDirection-\u003ePositionType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:paneFromName",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "PaneName -\u003e alpha (IDEPane alpha)",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#paneFromName",
        "fct-type": "function",
        "title": "paneFromName"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "paneFromName",
        "normalized": "PaneName-\u003ea(IDEPane a)",
        "package": "ltk",
        "partial": "From Name",
        "signature": "PaneName-\u003ealpha(IDEPane alpha)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:posTypeToPaneDirection",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "PositionType -\u003e PaneDirection",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#posTypeToPaneDirection",
        "fct-type": "function",
        "title": "posTypeToPaneDirection"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "posTypeToPaneDirection",
        "normalized": "PositionType-\u003ePaneDirection",
        "package": "ltk",
        "partial": "Type To Pane Direction",
        "signature": "PositionType-\u003ePaneDirection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:removePaneAdmin",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e delta ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#removePaneAdmin",
        "fct-type": "function",
        "title": "removePaneAdmin"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "removePaneAdmin",
        "normalized": "a-\u003eb()",
        "package": "ltk",
        "partial": "Pane Admin",
        "signature": "alpha-\u003edelta()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:setActivePane",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "Maybe (PaneName, Connections) -\u003e delta ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#setActivePane",
        "fct-type": "function",
        "title": "setActivePane"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "setActivePane",
        "normalized": "Maybe(PaneName,Connections)-\u003ea()",
        "package": "ltk",
        "partial": "Active Pane",
        "signature": "Maybe(PaneName,Connections)-\u003edelta()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewCollapse",
      "description": {
        "fct-descr": "\u003cp\u003eTwo notebooks can be collapsed to one\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "alpha ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#viewCollapse",
        "fct-type": "function",
        "title": "viewCollapse"
      },
      "index": {
        "description": "Two notebooks can be collapsed to one",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "viewCollapse",
        "normalized": "a()",
        "package": "ltk",
        "partial": "Collapse",
        "signature": "alpha()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewCollapse-39-",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "PanePath -\u003e alpha ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#viewCollapse%27",
        "fct-type": "function",
        "title": "viewCollapse'"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "viewCollapse'",
        "normalized": "PanePath-\u003ea()",
        "package": "ltk",
        "partial": "Collapse'",
        "signature": "PanePath-\u003ealpha()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewDetach",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "alpha (Maybe (Window, Widget))",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#viewDetach",
        "fct-type": "function",
        "title": "viewDetach"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "viewDetach",
        "normalized": "a(Maybe(Window,Widget))",
        "package": "ltk",
        "partial": "Detach",
        "signature": "alpha(Maybe(Window,Widget))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewDetach-39-",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "PanePath -\u003e String -\u003e alpha (Maybe (Window, Widget))",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#viewDetach%27",
        "fct-type": "function",
        "title": "viewDetach'"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "viewDetach'",
        "normalized": "PanePath-\u003eString-\u003ea(Maybe(Window,Widget))",
        "package": "ltk",
        "partial": "Detach'",
        "signature": "PanePath-\u003eString-\u003ealpha(Maybe(Window,Widget))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewMove",
      "description": {
        "fct-descr": "\u003cp\u003eMoves the activePane in the given direction, if possible\n | If their are many possibilities choose the leftmost and topmost\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "PaneDirection -\u003e beta ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#viewMove",
        "fct-type": "function",
        "title": "viewMove"
      },
      "index": {
        "description": "Moves the activePane in the given direction if possible If their are many possibilities choose the leftmost and topmost",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "viewMove",
        "normalized": "PaneDirection-\u003ea()",
        "package": "ltk",
        "partial": "Move",
        "signature": "PaneDirection-\u003ebeta()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewNest",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "String -\u003e alpha ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#viewNest",
        "fct-type": "function",
        "title": "viewNest"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "viewNest",
        "normalized": "String-\u003ea()",
        "package": "ltk",
        "partial": "Nest",
        "signature": "String-\u003ealpha()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewNest-39-",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "PanePath -\u003e String -\u003e alpha ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#viewNest%27",
        "fct-type": "function",
        "title": "viewNest'"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "viewNest'",
        "normalized": "PanePath-\u003eString-\u003ea()",
        "package": "ltk",
        "partial": "Nest'",
        "signature": "PanePath-\u003eString-\u003ealpha()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewNewGroup",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "alpha ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#viewNewGroup",
        "fct-type": "function",
        "title": "viewNewGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "viewNewGroup",
        "normalized": "a()",
        "package": "ltk",
        "partial": "New Group",
        "signature": "alpha()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewSplit-39-",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "PanePath -\u003e Direction -\u003e alpha ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#viewSplit%27",
        "fct-type": "function",
        "title": "viewSplit'"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "viewSplit'",
        "normalized": "PanePath-\u003eDirection-\u003ea()",
        "package": "ltk",
        "partial": "Split'",
        "signature": "PanePath-\u003eDirection-\u003ealpha()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewSplitHorizontal",
      "description": {
        "fct-descr": "\u003cp\u003eSplit the currently active pane in horizontal direction\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "alpha ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#viewSplitHorizontal",
        "fct-type": "function",
        "title": "viewSplitHorizontal"
      },
      "index": {
        "description": "Split the currently active pane in horizontal direction",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "viewSplitHorizontal",
        "normalized": "a()",
        "package": "ltk",
        "partial": "Split Horizontal",
        "signature": "alpha()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewSplitVertical",
      "description": {
        "fct-descr": "\u003cp\u003eSplit the currently active pane in vertical direction\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "alpha ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#viewSplitVertical",
        "fct-type": "function",
        "title": "viewSplitVertical"
      },
      "index": {
        "description": "Split the currently active pane in vertical direction",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "viewSplitVertical",
        "normalized": "a()",
        "package": "ltk",
        "partial": "Split Vertical",
        "signature": "alpha()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewSwitchTabs",
      "description": {
        "fct-descr": "\u003cp\u003eToggle the tabs of the current notebook\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "alpha ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#viewSwitchTabs",
        "fct-type": "function",
        "title": "viewSwitchTabs"
      },
      "index": {
        "description": "Toggle the tabs of the current notebook",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "viewSwitchTabs",
        "normalized": "a()",
        "package": "ltk",
        "partial": "Switch Tabs",
        "signature": "alpha()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewTabsPos",
      "description": {
        "fct-descr": "\u003cp\u003eSets the tab position in the current notebook\n\u003c/p\u003e",
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "PositionType -\u003e alpha ()",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#viewTabsPos",
        "fct-type": "function",
        "title": "viewTabsPos"
      },
      "index": {
        "description": "Sets the tab position in the current notebook",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "viewTabsPos",
        "normalized": "PositionType-\u003ea()",
        "package": "ltk",
        "partial": "Tabs Pos",
        "signature": "PositionType-\u003ealpha()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:widgetGet",
      "description": {
        "fct-module": "Graphics.UI.Frame.ViewFrame",
        "fct-package": "ltk",
        "fct-signature": "[String] -\u003e (Widget -\u003e b) -\u003e alpha b",
        "fct-source": "src/Graphics-UI-Frame-ViewFrame.html#widgetGet",
        "fct-type": "function",
        "title": "widgetGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics UI Frame ViewFrame",
        "module": "Graphics.UI.Frame.ViewFrame",
        "name": "widgetGet",
        "normalized": "[String]-\u003e(Widget-\u003ea)-\u003eb a",
        "package": "ltk",
        "partial": "Get",
        "signature": "[String]-\u003e(Widget-\u003eb)-\u003ealpha b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/MyMissing.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for missing base functions\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "MyMissing",
        "fct-package": "ltk",
        "fct-signature": "module",
        "fct-source": "src/MyMissing.html",
        "fct-type": "module",
        "title": "MyMissing"
      },
      "index": {
        "description": "Module for missing base functions",
        "hierarchy": "MyMissing",
        "module": "MyMissing",
        "name": "MyMissing",
        "normalized": "",
        "package": "ltk",
        "partial": "My Missing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/MyMissing.html#v:allOf",
      "description": {
        "fct-module": "MyMissing",
        "fct-package": "ltk",
        "fct-signature": "[alpha]",
        "fct-source": "src/MyMissing.html#allOf",
        "fct-type": "function",
        "title": "allOf"
      },
      "index": {
        "description": "",
        "hierarchy": "MyMissing",
        "module": "MyMissing",
        "name": "allOf",
        "normalized": "[a]",
        "package": "ltk",
        "partial": "Of",
        "signature": "[alpha]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/MyMissing.html#v:forceHead",
      "description": {
        "fct-module": "MyMissing",
        "fct-package": "ltk",
        "fct-signature": "[alpha] -\u003e String -\u003e alpha",
        "fct-source": "src/MyMissing.html#forceHead",
        "fct-type": "function",
        "title": "forceHead"
      },
      "index": {
        "description": "",
        "hierarchy": "MyMissing",
        "module": "MyMissing",
        "name": "forceHead",
        "normalized": "[a]-\u003eString-\u003ea",
        "package": "ltk",
        "partial": "Head",
        "signature": "[alpha]-\u003eString-\u003ealpha"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/MyMissing.html#v:forceJust",
      "description": {
        "fct-module": "MyMissing",
        "fct-package": "ltk",
        "fct-signature": "Maybe alpha -\u003e String -\u003e alpha",
        "fct-source": "src/MyMissing.html#forceJust",
        "fct-type": "function",
        "title": "forceJust"
      },
      "index": {
        "description": "",
        "hierarchy": "MyMissing",
        "module": "MyMissing",
        "name": "forceJust",
        "normalized": "Maybe a-\u003eString-\u003ea",
        "package": "ltk",
        "partial": "Just",
        "signature": "Maybe alpha-\u003eString-\u003ealpha"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/MyMissing.html#v:nonEmptyLines",
      "description": {
        "fct-module": "MyMissing",
        "fct-package": "ltk",
        "fct-signature": "String -\u003e [String]",
        "fct-source": "src/MyMissing.html#nonEmptyLines",
        "fct-type": "function",
        "title": "nonEmptyLines"
      },
      "index": {
        "description": "",
        "hierarchy": "MyMissing",
        "module": "MyMissing",
        "name": "nonEmptyLines",
        "normalized": "String-\u003e[String]",
        "package": "ltk",
        "partial": "Empty Lines",
        "signature": "String-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/MyMissing.html#v:replace",
      "description": {
        "fct-module": "MyMissing",
        "fct-package": "ltk",
        "fct-signature": "[a] -\u003e [a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/MyMissing.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "",
        "hierarchy": "MyMissing",
        "module": "MyMissing",
        "name": "replace",
        "normalized": "[a]-\u003e[a]-\u003e[a]-\u003e[a]",
        "package": "ltk",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/MyMissing.html#v:split",
      "description": {
        "fct-module": "MyMissing",
        "fct-package": "ltk",
        "fct-signature": "a -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/MyMissing.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "",
        "hierarchy": "MyMissing",
        "module": "MyMissing",
        "name": "split",
        "normalized": "a-\u003e[a]-\u003e[[a]]",
        "package": "ltk",
        "partial": "",
        "signature": "a-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/MyMissing.html#v:trim",
      "description": {
        "fct-descr": "\u003cp\u003eremove leading and trailing spaces\n\u003c/p\u003e",
        "fct-module": "MyMissing",
        "fct-package": "ltk",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/MyMissing.html#trim",
        "fct-type": "function",
        "title": "trim"
      },
      "index": {
        "description": "remove leading and trailing spaces",
        "hierarchy": "MyMissing",
        "module": "MyMissing",
        "name": "trim",
        "normalized": "String-\u003eString",
        "package": "ltk",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for saving and restoring preferences and settings\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "module",
        "fct-source": "src/Text-PrinterParser.html",
        "fct-type": "module",
        "title": "PrinterParser"
      },
      "index": {
        "description": "Module for saving and restoring preferences and settings",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "PrinterParser",
        "normalized": "",
        "package": "ltk",
        "partial": "Printer Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#t:FieldDescriptionS",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "data",
        "fct-source": "src/Text-PrinterParser.html#FieldDescriptionS",
        "fct-type": "data",
        "title": "FieldDescriptionS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "FieldDescriptionS",
        "normalized": "",
        "package": "ltk",
        "partial": "Field Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#t:MkFieldDescriptionS",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Text-PrinterParser.html#MkFieldDescriptionS",
        "fct-type": "type",
        "title": "MkFieldDescriptionS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "MkFieldDescriptionS",
        "normalized": "",
        "package": "ltk",
        "partial": "Mk Field Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#t:Parser",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Text-PrinterParser.html#Parser",
        "fct-type": "type",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "Parser",
        "normalized": "",
        "package": "ltk",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#t:Pretty",
      "description": {
        "fct-descr": "\u003cp\u003eThings that can be pretty-printed\n\u003c/p\u003e",
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "class",
        "fct-source": "src/Text-PrinterParser.html#Pretty",
        "fct-type": "class",
        "title": "Pretty"
      },
      "index": {
        "description": "Things that can be pretty-printed",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "Pretty",
        "normalized": "",
        "package": "ltk",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#t:Printer",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "type",
        "fct-source": "src/Text-PrinterParser.html#Printer",
        "fct-type": "type",
        "title": "Printer"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "Printer",
        "normalized": "",
        "package": "ltk",
        "partial": "Printer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:FDS",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "FDS",
        "fct-source": "src/Text-PrinterParser.html#FieldDescriptionS",
        "fct-type": "function",
        "title": "FDS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "FDS",
        "normalized": "",
        "package": "ltk",
        "partial": "FDS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:applyFieldParsers",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "a -\u003e [a -\u003e CharParser () a] -\u003e CharParser () a",
        "fct-source": "src/Text-PrinterParser.html#applyFieldParsers",
        "fct-type": "function",
        "title": "applyFieldParsers"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "applyFieldParsers",
        "normalized": "a-\u003e[a-\u003eCharParser()a]-\u003eCharParser()a",
        "package": "ltk",
        "partial": "Field Parsers",
        "signature": "a-\u003e[a-\u003eCharParser()a]-\u003eCharParser()a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:boolParser",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "CharParser () Bool",
        "fct-source": "src/Text-PrinterParser.html#boolParser",
        "fct-type": "function",
        "title": "boolParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "boolParser",
        "normalized": "CharParser()Bool",
        "package": "ltk",
        "partial": "Parser",
        "signature": "CharParser()Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:colon",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "CharParser st String",
        "fct-source": "src/Text-PrinterParser.html#identifier",
        "fct-type": "function",
        "title": "colon"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "colon",
        "normalized": "",
        "package": "ltk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:colorParser",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "CharParser () Color",
        "fct-source": "src/Text-PrinterParser.html#colorParser",
        "fct-type": "function",
        "title": "colorParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "colorParser",
        "normalized": "CharParser()Color",
        "package": "ltk",
        "partial": "Parser",
        "signature": "CharParser()Color"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:emptyParser",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "CharParser () ()",
        "fct-source": "src/Text-PrinterParser.html#emptyParser",
        "fct-type": "function",
        "title": "emptyParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "emptyParser",
        "normalized": "CharParser()()",
        "package": "ltk",
        "partial": "Parser",
        "signature": "CharParser()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:emptyPrinter",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "() -\u003e Doc",
        "fct-source": "src/Text-PrinterParser.html#emptyPrinter",
        "fct-type": "function",
        "title": "emptyPrinter"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "emptyPrinter",
        "normalized": "()-\u003eDoc",
        "package": "ltk",
        "partial": "Printer",
        "signature": "()-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:fieldParser",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e CharParser () alpha",
        "fct-source": "src/Text-PrinterParser.html#FieldDescriptionS",
        "fct-type": "function",
        "title": "fieldParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "fieldParser",
        "normalized": "a-\u003eCharParser()a",
        "package": "ltk",
        "partial": "Parser",
        "signature": "alpha-\u003eCharParser()alpha"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:fieldPrinter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e Doc",
        "fct-source": "src/Text-PrinterParser.html#FieldDescriptionS",
        "fct-type": "function",
        "title": "fieldPrinter"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "fieldPrinter",
        "normalized": "a-\u003eDoc",
        "package": "ltk",
        "partial": "Printer",
        "signature": "alpha-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:identifier",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "CharParser st String",
        "fct-source": "src/Text-PrinterParser.html#identifier",
        "fct-type": "function",
        "title": "identifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "identifier",
        "normalized": "",
        "package": "ltk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:intParser",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "CharParser () Int",
        "fct-source": "src/Text-PrinterParser.html#intParser",
        "fct-type": "function",
        "title": "intParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "intParser",
        "normalized": "CharParser()Int",
        "package": "ltk",
        "partial": "Parser",
        "signature": "CharParser()Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:lineParser",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "CharParser () String",
        "fct-source": "src/Text-PrinterParser.html#lineParser",
        "fct-type": "function",
        "title": "lineParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "lineParser",
        "normalized": "CharParser()String",
        "package": "ltk",
        "partial": "Parser",
        "signature": "CharParser()String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:maybePP",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "(a -\u003e Doc) -\u003e Maybe a -\u003e Doc",
        "fct-source": "src/Text-PrinterParser.html#maybePP",
        "fct-type": "function",
        "title": "maybePP"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "maybePP",
        "normalized": "(a-\u003eDoc)-\u003eMaybe a-\u003eDoc",
        "package": "ltk",
        "partial": "PP",
        "signature": "(a-\u003eDoc)-\u003eMaybe a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:mkFieldS",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "MkFieldDescriptionS alpha beta",
        "fct-source": "src/Text-PrinterParser.html#mkFieldS",
        "fct-type": "function",
        "title": "mkFieldS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "mkFieldS",
        "normalized": "",
        "package": "ltk",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:pairParser",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "CharParser () alpha -\u003e CharParser () (alpha, alpha)",
        "fct-source": "src/Text-PrinterParser.html#pairParser",
        "fct-type": "function",
        "title": "pairParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "pairParser",
        "normalized": "CharParser()a-\u003eCharParser()(a,a)",
        "package": "ltk",
        "partial": "Parser",
        "signature": "CharParser()alpha-\u003eCharParser()(alpha,alpha)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:parameters",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "Parameters",
        "fct-source": "src/Text-PrinterParser.html#FieldDescriptionS",
        "fct-type": "function",
        "title": "parameters"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "parameters",
        "normalized": "",
        "package": "ltk",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:parseFields",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e [FieldDescriptionS alpha] -\u003e CharParser () alpha",
        "fct-source": "src/Text-PrinterParser.html#parseFields",
        "fct-type": "function",
        "title": "parseFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "parseFields",
        "normalized": "a-\u003e[FieldDescriptionS a]-\u003eCharParser()a",
        "package": "ltk",
        "partial": "Fields",
        "signature": "alpha-\u003e[FieldDescriptionS alpha]-\u003eCharParser()alpha"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:pretty",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print something in isolation.\n\u003c/p\u003e",
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "a -\u003e Doc",
        "fct-source": "src/Text-PrinterParser.html#pretty",
        "fct-type": "method",
        "title": "pretty"
      },
      "index": {
        "description": "Pretty-print something in isolation",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "pretty",
        "normalized": "a-\u003eDoc",
        "package": "ltk",
        "partial": "",
        "signature": "a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:prettyPrec",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print something in a precedence context.\n\u003c/p\u003e",
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "Int -\u003e a -\u003e Doc",
        "fct-source": "src/Text-PrinterParser.html#prettyPrec",
        "fct-type": "method",
        "title": "prettyPrec"
      },
      "index": {
        "description": "Pretty-print something in precedence context",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "prettyPrec",
        "normalized": "Int-\u003ea-\u003eDoc",
        "package": "ltk",
        "partial": "Prec",
        "signature": "Int-\u003ea-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:prettyPrint",
      "description": {
        "fct-descr": "\u003cp\u003epretty-print with the default style and \u003ccode\u003edefaultMode\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Text-PrinterParser.html#prettyPrint",
        "fct-type": "function",
        "title": "prettyPrint"
      },
      "index": {
        "description": "pretty-print with the default style and defaultMode",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "prettyPrint",
        "normalized": "a-\u003eString",
        "package": "ltk",
        "partial": "Print",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:readFields",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "FilePath -\u003e [FieldDescriptionS alpha] -\u003e alpha -\u003e IO alpha",
        "fct-source": "src/Text-PrinterParser.html#readFields",
        "fct-type": "function",
        "title": "readFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "readFields",
        "normalized": "FilePath-\u003e[FieldDescriptionS a]-\u003ea-\u003eIO a",
        "package": "ltk",
        "partial": "Fields",
        "signature": "FilePath-\u003e[FieldDescriptionS alpha]-\u003ealpha-\u003eIO alpha"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:readParser",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "CharParser () a",
        "fct-source": "src/Text-PrinterParser.html#readParser",
        "fct-type": "function",
        "title": "readParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "readParser",
        "normalized": "CharParser()a",
        "package": "ltk",
        "partial": "Parser",
        "signature": "CharParser()a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:showFields",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "alpha -\u003e [FieldDescriptionS alpha] -\u003e String",
        "fct-source": "src/Text-PrinterParser.html#showFields",
        "fct-type": "function",
        "title": "showFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "showFields",
        "normalized": "a-\u003e[FieldDescriptionS a]-\u003eString",
        "package": "ltk",
        "partial": "Fields",
        "signature": "alpha-\u003e[FieldDescriptionS alpha]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:stringParser",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "CharParser () String",
        "fct-source": "src/Text-PrinterParser.html#stringParser",
        "fct-type": "function",
        "title": "stringParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "stringParser",
        "normalized": "CharParser()String",
        "package": "ltk",
        "partial": "Parser",
        "signature": "CharParser()String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:symbol",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "String -\u003e CharParser st String",
        "fct-source": "src/Text-PrinterParser.html#symbol",
        "fct-type": "function",
        "title": "symbol"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "symbol",
        "normalized": "String-\u003eCharParser a String",
        "package": "ltk",
        "partial": "",
        "signature": "String-\u003eCharParser st String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:whiteSpace",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "CharParser st ()",
        "fct-source": "src/Text-PrinterParser.html#whiteSpace",
        "fct-type": "function",
        "title": "whiteSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "whiteSpace",
        "normalized": "CharParser a()",
        "package": "ltk",
        "partial": "Space",
        "signature": "CharParser st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:writeFields",
      "description": {
        "fct-module": "Text.PrinterParser",
        "fct-package": "ltk",
        "fct-signature": "FilePath -\u003e alpha -\u003e [FieldDescriptionS alpha] -\u003e IO ()",
        "fct-source": "src/Text-PrinterParser.html#writeFields",
        "fct-type": "function",
        "title": "writeFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Text PrinterParser",
        "module": "Text.PrinterParser",
        "name": "writeFields",
        "normalized": "FilePath-\u003ea-\u003e[FieldDescriptionS a]-\u003eIO()",
        "package": "ltk",
        "partial": "Fields",
        "signature": "FilePath-\u003ealpha-\u003e[FieldDescriptionS alpha]-\u003eIO()"
      }
    }
  }
]