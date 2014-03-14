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
        "word": "ltk"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple event mechanism\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Event",
          "name": "Event",
          "package": "ltk",
          "source": "src/Control-Event.html",
          "type": "module"
        },
        "index": {
          "description": "simple event mechanism",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "Event",
          "package": "ltk",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery event needs to know its selector and its source\n\u003c/p\u003e",
          "module": "Control.Event",
          "name": "Event",
          "package": "ltk",
          "source": "src/Control-Event.html#Event",
          "type": "class"
        },
        "index": {
          "description": "Every event needs to know its selector and its source",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "Event",
          "package": "ltk",
          "partial": "Event",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery event needs a selector, which should identify the type of event\n\u003c/p\u003e",
          "module": "Control.Event",
          "name": "EventSelector",
          "package": "ltk",
          "source": "src/Control-Event.html#EventSelector",
          "type": "class"
        },
        "index": {
          "description": "Every event needs selector which should identify the type of event",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "EventSelector",
          "package": "ltk",
          "partial": "Event Selector",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#t:EventSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEverything which is an event source needs this\n alpha is the Notifier\n beta is the event\n gamma is the monad\n delta is the event selector\n\u003c/p\u003e",
          "module": "Control.Event",
          "name": "EventSource",
          "package": "ltk",
          "source": "src/Control-Event.html#EventSource",
          "type": "class"
        },
        "index": {
          "description": "Everything which is an event source needs this alpha is the Notifier beta is the event gamma is the monad delta is the event selector",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "EventSource",
          "package": "ltk",
          "partial": "Event Source",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#t:EventSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis shows the implementation of the event mechnism\n\u003c/p\u003e",
          "module": "Control.Event",
          "name": "Handlers",
          "package": "ltk",
          "source": "src/Control-Event.html#Handlers",
          "type": "type"
        },
        "index": {
          "description": "This shows the implementation of the event mechnism",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "Handlers",
          "package": "ltk",
          "partial": "Handlers",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#t:Handlers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReimplement this in instances to make triggering of events possible\n\u003c/p\u003e",
          "module": "Control.Event",
          "name": "canTriggerEvent",
          "package": "ltk",
          "signature": "alpha -\u003e delta -\u003e Bool",
          "source": "src/Control-Event.html#canTriggerEvent",
          "type": "method"
        },
        "index": {
          "description": "Reimplement this in instances to make triggering of events possible",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "canTriggerEvent",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "ltk",
          "partial": "Trigger Event",
          "signature": "alpha-\u003edelta-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:canTriggerEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Event",
          "name": "getHandlers",
          "package": "ltk",
          "signature": "alpha -\u003e gamma (Handlers beta gamma delta)",
          "source": "src/Control-Event.html#getHandlers",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "getHandlers",
          "normalized": "a-\u003eb(Handlers c b d)",
          "package": "ltk",
          "partial": "Handlers",
          "signature": "alpha-\u003egamma(Handlers beta gamma delta)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:getHandlers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Event",
          "name": "getSelector",
          "package": "ltk",
          "signature": "beta -\u003e delta",
          "source": "src/Control-Event.html#getSelector",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "getSelector",
          "normalized": "a-\u003eb",
          "package": "ltk",
          "partial": "Selector",
          "signature": "beta-\u003edelta",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:getSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Event",
          "name": "myUnique",
          "package": "ltk",
          "signature": "alpha -\u003e gamma Unique",
          "source": "src/Control-Event.html#myUnique",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "myUnique",
          "normalized": "a-\u003eb Unique",
          "package": "ltk",
          "partial": "Unique",
          "signature": "alpha-\u003egamma Unique",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:myUnique"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Event",
          "name": "registerEvent",
          "package": "ltk",
          "signature": "alpha -\u003e delta -\u003e (beta -\u003e gamma beta) -\u003e gamma (Maybe Unique)",
          "source": "src/Control-Event.html#registerEvent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "registerEvent",
          "normalized": "a-\u003eb-\u003e(c-\u003ed c)-\u003ed(Maybe Unique)",
          "package": "ltk",
          "partial": "Event",
          "signature": "alpha-\u003edelta-\u003e(beta-\u003egamma beta)-\u003egamma(Maybe Unique)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:registerEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Event",
          "name": "registerEvents",
          "package": "ltk",
          "signature": "alpha -\u003e [delta] -\u003e (beta -\u003e gamma beta) -\u003e gamma [Unique]",
          "source": "src/Control-Event.html#registerEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "registerEvents",
          "normalized": "a-\u003e[b]-\u003e(c-\u003ed c)-\u003ed[Unique]",
          "package": "ltk",
          "partial": "Events",
          "signature": "alpha-\u003e[delta]-\u003e(beta-\u003egamma beta)-\u003egamma[Unique]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:registerEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Event",
          "name": "setHandlers",
          "package": "ltk",
          "signature": "alpha -\u003e Handlers beta gamma delta -\u003e gamma ()",
          "source": "src/Control-Event.html#setHandlers",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "setHandlers",
          "normalized": "a-\u003eHandlers b c d-\u003ec()",
          "package": "ltk",
          "partial": "Handlers",
          "signature": "alpha-\u003eHandlers beta gamma delta-\u003egamma()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:setHandlers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the event, so that you may get values back from an event\n Args: Notifier, Event\n\u003c/p\u003e",
          "module": "Control.Event",
          "name": "triggerEvent",
          "package": "ltk",
          "signature": "alpha -\u003e beta -\u003e gamma beta",
          "source": "src/Control-Event.html#triggerEvent",
          "type": "method"
        },
        "index": {
          "description": "Returns the event so that you may get values back from an event Args Notifier Event",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "triggerEvent",
          "normalized": "a-\u003eb-\u003ec b",
          "package": "ltk",
          "partial": "Event",
          "signature": "alpha-\u003ebeta-\u003egamma beta",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:triggerEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euse Left to register and Right to unregister\n Args: Notifier, EventSelector, Unique\n\u003c/p\u003e",
          "module": "Control.Event",
          "name": "unregisterEvent",
          "package": "ltk",
          "signature": "alpha -\u003e delta -\u003e Unique -\u003e gamma ()",
          "source": "src/Control-Event.html#unregisterEvent",
          "type": "method"
        },
        "index": {
          "description": "use Left to register and Right to unregister Args Notifier EventSelector Unique",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "unregisterEvent",
          "normalized": "a-\u003eb-\u003eUnique-\u003ec()",
          "package": "ltk",
          "partial": "Event",
          "signature": "alpha-\u003edelta-\u003eUnique-\u003egamma()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Control-Event.html#v:unregisterEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for default values of a data type\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Default",
          "name": "Default",
          "package": "ltk",
          "source": "src/Default.html",
          "type": "module"
        },
        "index": {
          "description": "Module for default values of data type",
          "hierarchy": "Default",
          "module": "Default",
          "name": "Default",
          "package": "ltk",
          "partial": "Default",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Default.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for providing default values for certain types of editors\n\u003c/p\u003e",
          "module": "Default",
          "name": "Default",
          "package": "ltk",
          "source": "src/Default.html#Default",
          "type": "class"
        },
        "index": {
          "description": "class for providing default values for certain types of editors",
          "hierarchy": "Default",
          "module": "Default",
          "name": "Default",
          "package": "ltk",
          "partial": "Default",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Default.html#t:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Default",
          "name": "getDefault",
          "package": "ltk",
          "signature": "alpha",
          "source": "src/Default.html#getDefault",
          "type": "method"
        },
        "index": {
          "hierarchy": "Default",
          "module": "Default",
          "name": "getDefault",
          "package": "ltk",
          "partial": "Default",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Default.html#v:getDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for the basiscs of composing GUIs from editors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Basics",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html",
          "type": "module"
        },
        "index": {
          "description": "Module for the basiscs of composing GUIs from editors",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Basics",
          "package": "ltk",
          "partial": "Basics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for the application of a value to be reflected in the GUI\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Applicator",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html#Applicator",
          "type": "type"
        },
        "index": {
          "description": "type for the application of value to be reflected in the GUI",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Applicator",
          "package": "ltk",
          "partial": "Applicator",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Applicator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal handlers for the different pane types\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Connection",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "Signal handlers for the different pane types",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Connection",
          "package": "ltk",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Basics",
          "name": "Connections",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html#Connections",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Connections",
          "package": "ltk",
          "partial": "Connections",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Connections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type to describe an editor.\n alpha is the type of the individual field of the record\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Editor",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html#Editor",
          "type": "type"
        },
        "index": {
          "description": "type to describe an editor alpha is the type of the individual field of the record",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Editor",
          "package": "ltk",
          "partial": "Editor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Editor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for extracting a value from an editor\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Extractor",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html#Extractor",
          "type": "type"
        },
        "index": {
          "description": "type for extracting value from an editor",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Extractor",
          "package": "ltk",
          "partial": "Extractor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Extractor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for an event in the GUI\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "GUIEvent",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html#GUIEvent",
          "type": "data"
        },
        "index": {
          "description": "type for an event in the GUI",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "GUIEvent",
          "package": "ltk",
          "partial": "GUIEvent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:GUIEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Basics",
          "name": "GUIEventSelector",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html#GUIEventSelector",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "GUIEventSelector",
          "package": "ltk",
          "partial": "GUIEvent Selector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:GUIEventSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for getting a field of a record\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Getter",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html#Getter",
          "type": "type"
        },
        "index": {
          "description": "type for getting field of record",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Getter",
          "package": "ltk",
          "partial": "Getter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Getter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Basics",
          "name": "GtkHandler",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html#GtkHandler",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "GtkHandler",
          "package": "ltk",
          "partial": "Gtk Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:GtkHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for a function to register a gtk event\n |\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "GtkRegFunc",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html#GtkRegFunc",
          "type": "type"
        },
        "index": {
          "description": "type for function to register gtk event",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "GtkRegFunc",
          "package": "ltk",
          "partial": "Gtk Reg Func",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:GtkRegFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for injecting a value into an editor\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Injector",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html#Injector",
          "type": "type"
        },
        "index": {
          "description": "type for injecting value into an editor",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Injector",
          "package": "ltk",
          "partial": "Injector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Injector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe event source in the gtk editor context\n If the second argument is Left Handler the handler gets registered\n If the second argument is Right Unique the handler will be removed\n The returned unique value must be used for unregistering an event\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Notifier",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html#Notifier",
          "type": "newtype"
        },
        "index": {
          "description": "The event source in the gtk editor context If the second argument is Left Handler the handler gets registered If the second argument is Right Unique the handler will be removed The returned unique value must be used for unregistering an event",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Notifier",
          "package": "ltk",
          "partial": "Notifier",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Notifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for setting the field of a record\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Setter",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html#Setter",
          "type": "type"
        },
        "index": {
          "description": "type for setting the field of record",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Setter",
          "package": "ltk",
          "partial": "Setter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#t:Setter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneric, a mouse key has been pressed and released, while the widget has the focus\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "ButtonPressed",
          "package": "ltk",
          "signature": "ButtonPressed",
          "source": "src/Graphics-UI-Editor-Basics.html#GUIEventSelector",
          "type": "function"
        },
        "index": {
          "description": "generic mouse key has been pressed and released while the widget has the focus",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "ButtonPressed",
          "package": "ltk",
          "partial": "Button Pressed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:ButtonPressed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebutton specific, the button has been pressed\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Clicked",
          "package": "ltk",
          "signature": "Clicked",
          "source": "src/Graphics-UI-Editor-Basics.html#GUIEventSelector",
          "type": "function"
        },
        "index": {
          "description": "button specific the button has been pressed",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Clicked",
          "package": "ltk",
          "partial": "Clicked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:Clicked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.UI.Editor.Basics\",\"Graphics.UI.Frame.Panes\"]",
          "name": "ConnectC",
          "package": "ltk",
          "signature": "ConnectC (ConnectId alpha)",
          "source": "src/Graphics-UI-Editor-Basics.html#Connection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:ConnectC\",\"http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:ConnectC\"]"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "ConnectC",
          "package": "ltk",
          "partial": "Connect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:ConnectC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneric, the widget gets the focus\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "FocusIn",
          "package": "ltk",
          "signature": "FocusIn",
          "source": "src/Graphics-UI-Editor-Basics.html#GUIEventSelector",
          "type": "function"
        },
        "index": {
          "description": "generic the widget gets the focus",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "FocusIn",
          "package": "ltk",
          "partial": "Focus In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:FocusIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneric, the widget looses the focus\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "FocusOut",
          "package": "ltk",
          "signature": "FocusOut",
          "source": "src/Graphics-UI-Editor-Basics.html#GUIEventSelector",
          "type": "function"
        },
        "index": {
          "description": "generic the widget looses the focus",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "FocusOut",
          "package": "ltk",
          "partial": "Focus Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:FocusOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Basics",
          "name": "GUIEvent",
          "package": "ltk",
          "signature": "GUIEvent",
          "source": "src/Graphics-UI-Editor-Basics.html#GUIEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "GUIEvent",
          "package": "ltk",
          "partial": "GUIEvent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:GUIEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneric, a keyboard key has been pressed and released, while the widget has the focus\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "KeyPressed",
          "package": "ltk",
          "signature": "KeyPressed",
          "source": "src/Graphics-UI-Editor-Basics.html#GUIEventSelector",
          "type": "function"
        },
        "index": {
          "description": "generic keyboard key has been pressed and released while the widget has the focus",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "KeyPressed",
          "package": "ltk",
          "partial": "Key Pressed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:KeyPressed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egeneric, no gui event, the contents of the widget may have changed\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "MayHaveChanged",
          "package": "ltk",
          "signature": "MayHaveChanged",
          "source": "src/Graphics-UI-Editor-Basics.html#GUIEventSelector",
          "type": "function"
        },
        "index": {
          "description": "generic no gui event the contents of the widget may have changed",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "MayHaveChanged",
          "package": "ltk",
          "partial": "May Have Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:MayHaveChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Basics",
          "name": "Noti",
          "package": "ltk",
          "signature": "Noti (IORef (Handlers GUIEvent IO GUIEventSelector, Map GUIEventSelector GUIEventReg))",
          "source": "src/Graphics-UI-Editor-Basics.html#Notifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "Noti",
          "normalized": "Noti(IORef(Handlers GUIEvent IO GUIEventSelector,Map GUIEventSelector GUIEventReg))",
          "package": "ltk",
          "partial": "Noti",
          "signature": "Noti(IORef(Handlers GUIEvent IO GUIEventSelector,Map GUIEventSelector GUIEventReg))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:Noti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evalidation of a contents has failed\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "ValidationError",
          "package": "ltk",
          "signature": "ValidationError",
          "source": "src/Graphics-UI-Editor-Basics.html#GUIEventSelector",
          "type": "function"
        },
        "index": {
          "description": "validation of contents has failed",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "ValidationError",
          "package": "ltk",
          "partial": "Validation Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:ValidationError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActivate the event after the event has been declared and the\n widget has been constructed\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "activateEvent",
          "package": "ltk",
          "signature": "o -\u003e Notifier -\u003e Maybe (o -\u003e GtkHandler -\u003e IO Connection) -\u003e GUIEventSelector -\u003e IO ()",
          "source": "src/Graphics-UI-Editor-Basics.html#activateEvent",
          "type": "function"
        },
        "index": {
          "description": "Activate the event after the event has been declared and the widget has been constructed",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "activateEvent",
          "normalized": "a-\u003eNotifier-\u003eMaybe(a-\u003eGtkHandler-\u003eIO Connection)-\u003eGUIEventSelector-\u003eIO()",
          "package": "ltk",
          "partial": "Event",
          "signature": "o-\u003eNotifier-\u003eMaybe(o-\u003eGtkHandler-\u003eIO Connection)-\u003eGUIEventSelector-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:activateEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Basics",
          "name": "allGUIEvents",
          "package": "ltk",
          "signature": "[GUIEventSelector]",
          "source": "src/Graphics-UI-Editor-Basics.html#allGUIEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "allGUIEvents",
          "normalized": "[GUIEventSelector]",
          "package": "ltk",
          "partial": "GUIEvents",
          "signature": "[GUIEventSelector]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:allGUIEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Basics",
          "name": "emptyNotifier",
          "package": "ltk",
          "signature": "IO Notifier",
          "source": "src/Graphics-UI-Editor-Basics.html#emptyNotifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "emptyNotifier",
          "package": "ltk",
          "partial": "Notifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:emptyNotifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Basics",
          "name": "eventText",
          "package": "ltk",
          "signature": "String",
          "source": "src/Graphics-UI-Editor-Basics.html#GUIEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "eventText",
          "package": "ltk",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:eventText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Basics",
          "name": "genericGUIEvents",
          "package": "ltk",
          "signature": "[GUIEventSelector]",
          "source": "src/Graphics-UI-Editor-Basics.html#genericGUIEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "genericGUIEvents",
          "normalized": "[GUIEventSelector]",
          "package": "ltk",
          "partial": "GUIEvents",
          "signature": "[GUIEventSelector]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:genericGUIEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convinence method for not repeating this over and over again\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "getStandardRegFunction",
          "package": "ltk",
          "signature": "GUIEventSelector -\u003e GtkRegFunc",
          "source": "src/Graphics-UI-Editor-Basics.html#getStandardRegFunction",
          "type": "function"
        },
        "index": {
          "description": "convinence method for not repeating this over and over again",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "getStandardRegFunction",
          "normalized": "GUIEventSelector-\u003eGtkRegFunc",
          "package": "ltk",
          "partial": "Standard Reg Function",
          "signature": "GUIEventSelector-\u003eGtkRegFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:getStandardRegFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Basics",
          "name": "gtkEvent",
          "package": "ltk",
          "signature": "Event",
          "source": "src/Graphics-UI-Editor-Basics.html#GUIEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "gtkEvent",
          "package": "ltk",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:gtkEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue means that the event has been completely handled,\n  gtk shoudn't do any further action about it (Often not\n  a good idea\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "gtkReturn",
          "package": "ltk",
          "signature": "Bool",
          "source": "src/Graphics-UI-Editor-Basics.html#GUIEvent",
          "type": "function"
        },
        "index": {
          "description": "True means that the event has been completely handled gtk shoudn do any further action about it Often not good idea",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "gtkReturn",
          "package": "ltk",
          "partial": "Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:gtkReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Basics",
          "name": "propagateAsChanged",
          "package": "ltk",
          "signature": "alpha -\u003e [GUIEventSelector] -\u003e m ()",
          "source": "src/Graphics-UI-Editor-Basics.html#propagateAsChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "propagateAsChanged",
          "normalized": "a-\u003e[GUIEventSelector]-\u003eb()",
          "package": "ltk",
          "partial": "As Changed",
          "signature": "alpha-\u003e[GUIEventSelector]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:propagateAsChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagate the event with the selector from notifier to eventSource\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Basics",
          "name": "propagateEvent",
          "package": "ltk",
          "signature": "Notifier -\u003e [Notifier] -\u003e GUIEventSelector -\u003e IO ()",
          "source": "src/Graphics-UI-Editor-Basics.html#propagateEvent",
          "type": "function"
        },
        "index": {
          "description": "Propagate the event with the selector from notifier to eventSource",
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "propagateEvent",
          "normalized": "Notifier-\u003e[Notifier]-\u003eGUIEventSelector-\u003eIO()",
          "package": "ltk",
          "partial": "Event",
          "signature": "Notifier-\u003e[Notifier]-\u003eGUIEventSelector-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:propagateEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Basics",
          "name": "selector",
          "package": "ltk",
          "signature": "GUIEventSelector",
          "source": "src/Graphics-UI-Editor-Basics.html#GUIEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Basics",
          "module": "Graphics.UI.Editor.Basics",
          "name": "selector",
          "package": "ltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Basics.html#v:selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for making composite editors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Editor.Composite",
          "name": "Composite",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Composite.html",
          "type": "module"
        },
        "index": {
          "description": "Module for making composite editors",
          "hierarchy": "Graphics UI Editor Composite",
          "module": "Graphics.UI.Editor.Composite",
          "name": "Composite",
          "package": "ltk",
          "partial": "Composite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Composite",
          "name": "ColumnDescr",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Composite.html#ColumnDescr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Composite",
          "module": "Graphics.UI.Editor.Composite",
          "name": "ColumnDescr",
          "package": "ltk",
          "partial": "Column Descr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#t:ColumnDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Composite",
          "name": "ColumnDescr",
          "package": "ltk",
          "signature": "ColumnDescr Bool [(String, row -\u003e [AttrOp CellRendererText])]",
          "source": "src/Graphics-UI-Editor-Composite.html#ColumnDescr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Composite",
          "module": "Graphics.UI.Editor.Composite",
          "name": "ColumnDescr",
          "normalized": "ColumnDescr Bool[(String,a-\u003e[AttrOp CellRendererText])]",
          "package": "ltk",
          "partial": "Column Descr",
          "signature": "ColumnDescr Bool[(String,row-\u003e[AttrOp CellRendererText])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:ColumnDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Composite",
          "name": "dependenciesEditor",
          "package": "ltk",
          "signature": "[PackageIdentifier] -\u003e Editor [Dependency]",
          "source": "src/Graphics-UI-Editor-Composite.html#dependenciesEditor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Composite",
          "module": "Graphics.UI.Editor.Composite",
          "name": "dependenciesEditor",
          "normalized": "[PackageIdentifier]-\u003eEditor[Dependency]",
          "package": "ltk",
          "partial": "Editor",
          "signature": "[PackageIdentifier]-\u003eEditor[Dependency]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:dependenciesEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Composite",
          "name": "dependencyEditor",
          "package": "ltk",
          "signature": "[PackageIdentifier] -\u003e Editor Dependency",
          "source": "src/Graphics-UI-Editor-Composite.html#dependencyEditor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Composite",
          "module": "Graphics.UI.Editor.Composite",
          "name": "dependencyEditor",
          "normalized": "[PackageIdentifier]-\u003eEditor Dependency",
          "package": "ltk",
          "partial": "Editor",
          "signature": "[PackageIdentifier]-\u003eEditor Dependency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:dependencyEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn editor with a subeditor which gets active, when a checkbox is selected\n or grayed out (if the positive Argument is False)\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Composite",
          "name": "disableEditor",
          "package": "ltk",
          "signature": "(Editor beta, Parameters) -\u003e Bool -\u003e String -\u003e Editor (Bool, beta)",
          "source": "src/Graphics-UI-Editor-Composite.html#disableEditor",
          "type": "function"
        },
        "index": {
          "description": "An editor with subeditor which gets active when checkbox is selected or grayed out if the positive Argument is False",
          "hierarchy": "Graphics UI Editor Composite",
          "module": "Graphics.UI.Editor.Composite",
          "name": "disableEditor",
          "normalized": "(Editor a,Parameters)-\u003eBool-\u003eString-\u003eEditor(Bool,a)",
          "package": "ltk",
          "partial": "Editor",
          "signature": "(Editor beta,Parameters)-\u003eBool-\u003eString-\u003eEditor(Bool,beta)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:disableEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn editor with a subeditor which gets active, when a checkbox is selected\n or deselected (if the positive Argument is False)\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Composite",
          "name": "eitherOrEditor",
          "package": "ltk",
          "signature": "(Editor alpha, Parameters) -\u003e (Editor beta, Parameters) -\u003e String -\u003e Editor (Either alpha beta)",
          "source": "src/Graphics-UI-Editor-Composite.html#eitherOrEditor",
          "type": "function"
        },
        "index": {
          "description": "An editor with subeditor which gets active when checkbox is selected or deselected if the positive Argument is False",
          "hierarchy": "Graphics UI Editor Composite",
          "module": "Graphics.UI.Editor.Composite",
          "name": "eitherOrEditor",
          "normalized": "(Editor a,Parameters)-\u003e(Editor b,Parameters)-\u003eString-\u003eEditor(Either a b)",
          "package": "ltk",
          "partial": "Or Editor",
          "signature": "(Editor alpha,Parameters)-\u003e(Editor beta,Parameters)-\u003eString-\u003eEditor(Either alpha beta)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:eitherOrEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Composite",
          "name": "filesEditor",
          "package": "ltk",
          "signature": "Maybe FilePath -\u003e FileChooserAction -\u003e String -\u003e Editor [FilePath]",
          "source": "src/Graphics-UI-Editor-Composite.html#filesEditor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Composite",
          "module": "Graphics.UI.Editor.Composite",
          "name": "filesEditor",
          "normalized": "Maybe FilePath-\u003eFileChooserAction-\u003eString-\u003eEditor[FilePath]",
          "package": "ltk",
          "partial": "Editor",
          "signature": "Maybe FilePath-\u003eFileChooserAction-\u003eString-\u003eEditor[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:filesEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn editor with a subeditor which gets active, when a checkbox is selected\n or deselected (if the positive Argument is False)\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Composite",
          "name": "maybeEditor",
          "package": "ltk",
          "signature": "(Editor beta, Parameters) -\u003e Bool -\u003e String -\u003e Editor (Maybe beta)",
          "source": "src/Graphics-UI-Editor-Composite.html#maybeEditor",
          "type": "function"
        },
        "index": {
          "description": "An editor with subeditor which gets active when checkbox is selected or deselected if the positive Argument is False",
          "hierarchy": "Graphics UI Editor Composite",
          "module": "Graphics.UI.Editor.Composite",
          "name": "maybeEditor",
          "normalized": "(Editor a,Parameters)-\u003eBool-\u003eString-\u003eEditor(Maybe a)",
          "package": "ltk",
          "partial": "Editor",
          "signature": "(Editor beta,Parameters)-\u003eBool-\u003eString-\u003eEditor(Maybe beta)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:maybeEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn editor with a subeditor, of which a list of items can be selected\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Composite",
          "name": "multisetEditor",
          "package": "ltk",
          "signature": "ColumnDescr alpha-\u003e (Editor alpha, Parameters)-\u003e Maybe ([alpha] -\u003e [alpha])-\u003e Maybe (alpha -\u003e alpha -\u003e Bool)-\u003e Editor [alpha]",
          "type": "function"
        },
        "index": {
          "description": "An editor with subeditor of which list of items can be selected",
          "hierarchy": "Graphics UI Editor Composite",
          "module": "Graphics.UI.Editor.Composite",
          "name": "multisetEditor",
          "normalized": "ColumnDescr a-\u003e(Editor a,Parameters)-\u003eMaybe([a]-\u003e[a])-\u003eMaybe(a-\u003ea-\u003eBool)-\u003eEditor[a]",
          "package": "ltk",
          "partial": "Editor",
          "signature": "ColumnDescr alpha-\u003e(Editor alpha,Parameters)-\u003eMaybe([alpha]-\u003e[alpha])-\u003eMaybe(alpha-\u003ealpha-\u003eBool)-\u003eEditor[alpha]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:multisetEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn editor which composes two subeditors\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Composite",
          "name": "pairEditor",
          "package": "ltk",
          "signature": "(Editor alpha, Parameters) -\u003e (Editor beta, Parameters) -\u003e Editor (alpha, beta)",
          "source": "src/Graphics-UI-Editor-Composite.html#pairEditor",
          "type": "function"
        },
        "index": {
          "description": "An editor which composes two subeditors",
          "hierarchy": "Graphics UI Editor Composite",
          "module": "Graphics.UI.Editor.Composite",
          "name": "pairEditor",
          "normalized": "(Editor a,Parameters)-\u003e(Editor b,Parameters)-\u003eEditor(a,b)",
          "package": "ltk",
          "partial": "Editor",
          "signature": "(Editor alpha,Parameters)-\u003e(Editor beta,Parameters)-\u003eEditor(alpha,beta)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:pairEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike a pair editor, but with a moveable split\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Composite",
          "name": "splitEditor",
          "package": "ltk",
          "signature": "(Editor alpha, Parameters) -\u003e (Editor beta, Parameters) -\u003e Editor (alpha, beta)",
          "source": "src/Graphics-UI-Editor-Composite.html#splitEditor",
          "type": "function"
        },
        "index": {
          "description": "Like pair editor but with moveable split",
          "hierarchy": "Graphics UI Editor Composite",
          "module": "Graphics.UI.Editor.Composite",
          "name": "splitEditor",
          "normalized": "(Editor a,Parameters)-\u003e(Editor b,Parameters)-\u003eEditor(a,b)",
          "package": "ltk",
          "partial": "Editor",
          "signature": "(Editor alpha,Parameters)-\u003e(Editor beta,Parameters)-\u003eEditor(alpha,beta)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:splitEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Composite",
          "name": "stringsEditor",
          "package": "ltk",
          "signature": "(String -\u003e Bool) -\u003e Bool -\u003e Editor [String]",
          "source": "src/Graphics-UI-Editor-Composite.html#stringsEditor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Composite",
          "module": "Graphics.UI.Editor.Composite",
          "name": "stringsEditor",
          "normalized": "(String-\u003eBool)-\u003eBool-\u003eEditor[String]",
          "package": "ltk",
          "partial": "Editor",
          "signature": "(String-\u003eBool)-\u003eBool-\u003eEditor[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:stringsEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Composite",
          "name": "tupel3Editor",
          "package": "ltk",
          "signature": "(Editor alpha, Parameters) -\u003e (Editor beta, Parameters) -\u003e (Editor gamma, Parameters) -\u003e Editor (alpha, beta, gamma)",
          "source": "src/Graphics-UI-Editor-Composite.html#tupel3Editor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Composite",
          "module": "Graphics.UI.Editor.Composite",
          "name": "tupel3Editor",
          "normalized": "(Editor a,Parameters)-\u003e(Editor b,Parameters)-\u003e(Editor c,Parameters)-\u003eEditor(a,b,c)",
          "package": "ltk",
          "partial": "Editor",
          "signature": "(Editor alpha,Parameters)-\u003e(Editor beta,Parameters)-\u003e(Editor gamma,Parameters)-\u003eEditor(alpha,beta,gamma)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:tupel3Editor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Composite",
          "name": "versionEditor",
          "package": "ltk",
          "signature": "Editor Version",
          "source": "src/Graphics-UI-Editor-Composite.html#versionEditor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Composite",
          "module": "Graphics.UI.Editor.Composite",
          "name": "versionEditor",
          "package": "ltk",
          "partial": "Editor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:versionEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Composite",
          "name": "versionRangeEditor",
          "package": "ltk",
          "signature": "Editor VersionRange",
          "source": "src/Graphics-UI-Editor-Composite.html#versionRangeEditor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Composite",
          "module": "Graphics.UI.Editor.Composite",
          "name": "versionRangeEditor",
          "package": "ltk",
          "partial": "Range Editor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Composite.html#v:versionRangeEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDescription of a editor with additional fileds for printing and parsing\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "DescriptionPP",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-DescriptionPP.html",
          "type": "module"
        },
        "index": {
          "description": "Description of editor with additional fileds for printing and parsing",
          "hierarchy": "Graphics UI Editor DescriptionPP",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "DescriptionPP",
          "package": "ltk",
          "partial": "Description PP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for the application of a value to be reflected in the GUI\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "Applicator",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html#Applicator",
          "type": "type"
        },
        "index": {
          "description": "type for the application of value to be reflected in the GUI",
          "hierarchy": "Graphics UI Editor DescriptionPP",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "Applicator",
          "package": "ltk",
          "partial": "Applicator",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#t:Applicator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "FieldDescriptionPP",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Editor DescriptionPP",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "FieldDescriptionPP",
          "package": "ltk",
          "partial": "Field Description PP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#t:FieldDescriptionPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "FDPP",
          "package": "ltk",
          "signature": "FDPP",
          "source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor DescriptionPP",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "FDPP",
          "package": "ltk",
          "partial": "FDPP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:FDPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "HFDPP",
          "package": "ltk",
          "signature": "HFDPP Parameters [FieldDescriptionPP alpha gamma]",
          "source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor DescriptionPP",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "HFDPP",
          "normalized": "HFDPP Parameters[FieldDescriptionPP a b]",
          "package": "ltk",
          "partial": "HFDPP",
          "signature": "HFDPP Parameters[FieldDescriptionPP alpha gamma]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:HFDPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "NFDPP",
          "package": "ltk",
          "signature": "NFDPP [(String, FieldDescriptionPP alpha gamma)]",
          "source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor DescriptionPP",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "NFDPP",
          "normalized": "NFDPP[(String,FieldDescriptionPP a b)]",
          "package": "ltk",
          "partial": "NFDPP",
          "signature": "NFDPP[(String,FieldDescriptionPP alpha gamma)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:NFDPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "VFDPP",
          "package": "ltk",
          "signature": "VFDPP Parameters [FieldDescriptionPP alpha gamma]",
          "source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor DescriptionPP",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "VFDPP",
          "normalized": "VFDPP Parameters[FieldDescriptionPP a b]",
          "package": "ltk",
          "partial": "VFDPP",
          "signature": "VFDPP Parameters[FieldDescriptionPP alpha gamma]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:VFDPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "applicator",
          "package": "ltk",
          "signature": "alpha -\u003e alpha -\u003e gamma ()",
          "source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor DescriptionPP",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "applicator",
          "normalized": "a-\u003ea-\u003eb()",
          "package": "ltk",
          "signature": "alpha-\u003ealpha-\u003egamma()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:applicator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "extractFieldDescription",
          "package": "ltk",
          "signature": "FieldDescriptionPP alpha gamma -\u003e FieldDescription alpha",
          "source": "src/Graphics-UI-Editor-DescriptionPP.html#extractFieldDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor DescriptionPP",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "extractFieldDescription",
          "normalized": "FieldDescriptionPP a b-\u003eFieldDescription a",
          "package": "ltk",
          "partial": "Field Description",
          "signature": "FieldDescriptionPP alpha gamma-\u003eFieldDescription alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:extractFieldDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "fieldEditor",
          "package": "ltk",
          "signature": "alpha -\u003e IO (Widget, Injector alpha, alpha -\u003e Extractor alpha, Notifier)",
          "source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor DescriptionPP",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "fieldEditor",
          "normalized": "a-\u003eIO(Widget,Injector a,a-\u003eExtractor a,Notifier)",
          "package": "ltk",
          "partial": "Editor",
          "signature": "alpha-\u003eIO(Widget,Injector alpha,alpha-\u003eExtractor alpha,Notifier)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:fieldEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "fieldParser",
          "package": "ltk",
          "signature": "alpha -\u003e CharParser () alpha",
          "source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor DescriptionPP",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "fieldParser",
          "normalized": "a-\u003eCharParser()a",
          "package": "ltk",
          "partial": "Parser",
          "signature": "alpha-\u003eCharParser()alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:fieldParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "fieldPrinter",
          "package": "ltk",
          "signature": "alpha -\u003e Doc",
          "source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor DescriptionPP",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "fieldPrinter",
          "normalized": "a-\u003eDoc",
          "package": "ltk",
          "partial": "Printer",
          "signature": "alpha-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:fieldPrinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "flattenFieldDescriptionPP",
          "package": "ltk",
          "signature": "FieldDescriptionPP alpha gamma -\u003e [FieldDescriptionPP alpha gamma]",
          "source": "src/Graphics-UI-Editor-DescriptionPP.html#flattenFieldDescriptionPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor DescriptionPP",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "flattenFieldDescriptionPP",
          "normalized": "FieldDescriptionPP a b-\u003e[FieldDescriptionPP a b]",
          "package": "ltk",
          "partial": "Field Description PP",
          "signature": "FieldDescriptionPP alpha gamma-\u003e[FieldDescriptionPP alpha gamma]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:flattenFieldDescriptionPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "flattenFieldDescriptionPPToS",
          "package": "ltk",
          "signature": "FieldDescriptionPP alpha gamma -\u003e [FieldDescriptionS alpha]",
          "source": "src/Graphics-UI-Editor-DescriptionPP.html#flattenFieldDescriptionPPToS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor DescriptionPP",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "flattenFieldDescriptionPPToS",
          "normalized": "FieldDescriptionPP a b-\u003e[FieldDescriptionS a]",
          "package": "ltk",
          "partial": "Field Description PPTo",
          "signature": "FieldDescriptionPP alpha gamma-\u003e[FieldDescriptionS alpha]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:flattenFieldDescriptionPPToS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "mkFieldPP",
          "package": "ltk",
          "signature": "MkFieldDescriptionPP alpha beta gamma",
          "source": "src/Graphics-UI-Editor-DescriptionPP.html#mkFieldPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor DescriptionPP",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "mkFieldPP",
          "package": "ltk",
          "partial": "Field PP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:mkFieldPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "parameters",
          "package": "ltk",
          "signature": "Parameters",
          "source": "src/Graphics-UI-Editor-DescriptionPP.html#FieldDescriptionPP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor DescriptionPP",
          "module": "Graphics.UI.Editor.DescriptionPP",
          "name": "parameters",
          "package": "ltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-DescriptionPP.html#v:parameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for making editors out of descriptions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "MakeEditor",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-MakeEditor.html",
          "type": "module"
        },
        "index": {
          "description": "Module for making editors out of descriptions",
          "hierarchy": "Graphics UI Editor MakeEditor",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "MakeEditor",
          "package": "ltk",
          "partial": "Make Editor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type to describe a field of a record, which can be edited\n | alpha is the type of the individual field of the record\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "FieldDescription",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-MakeEditor.html#FieldDescription",
          "type": "data"
        },
        "index": {
          "description": "type to describe field of record which can be edited alpha is the type of the individual field of the record",
          "hierarchy": "Graphics UI Editor MakeEditor",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "FieldDescription",
          "package": "ltk",
          "partial": "Field Description",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#t:FieldDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constructor type for a field desciption\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "MkFieldDescription",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-MakeEditor.html#MkFieldDescription",
          "type": "type"
        },
        "index": {
          "description": "constructor type for field desciption",
          "hierarchy": "Graphics UI Editor MakeEditor",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "MkFieldDescription",
          "package": "ltk",
          "partial": "Mk Field Description",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#t:MkFieldDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "FD",
          "package": "ltk",
          "signature": "FD Parameters (alpha -\u003e IO (Widget, Injector alpha, alpha -\u003e Extractor alpha, Notifier))",
          "source": "src/Graphics-UI-Editor-MakeEditor.html#FieldDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor MakeEditor",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "FD",
          "normalized": "FD Parameters(a-\u003eIO(Widget,Injector a,a-\u003eExtractor a,Notifier))",
          "package": "ltk",
          "partial": "FD",
          "signature": "FD Parameters(alpha-\u003eIO(Widget,Injector alpha,alpha-\u003eExtractor alpha,Notifier))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:FD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "HFD",
          "package": "ltk",
          "signature": "HFD Parameters [FieldDescription alpha]",
          "source": "src/Graphics-UI-Editor-MakeEditor.html#FieldDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor MakeEditor",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "HFD",
          "normalized": "HFD Parameters[FieldDescription a]",
          "package": "ltk",
          "partial": "HFD",
          "signature": "HFD Parameters[FieldDescription alpha]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:HFD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "NFD",
          "package": "ltk",
          "signature": "NFD [(String, FieldDescription alpha)]",
          "source": "src/Graphics-UI-Editor-MakeEditor.html#FieldDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor MakeEditor",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "NFD",
          "normalized": "NFD[(String,FieldDescription a)]",
          "package": "ltk",
          "partial": "NFD",
          "signature": "NFD[(String,FieldDescription alpha)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:NFD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "VFD",
          "package": "ltk",
          "signature": "VFD Parameters [FieldDescription alpha]",
          "source": "src/Graphics-UI-Editor-MakeEditor.html#FieldDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor MakeEditor",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "VFD",
          "normalized": "VFD Parameters[FieldDescription a]",
          "package": "ltk",
          "partial": "VFD",
          "signature": "VFD Parameters[FieldDescription alpha]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:VFD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "buildEditor",
          "package": "ltk",
          "signature": "FieldDescription alpha -\u003e alpha -\u003e IO (Widget, Injector alpha, alpha -\u003e Extractor alpha, Notifier)",
          "source": "src/Graphics-UI-Editor-MakeEditor.html#buildEditor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor MakeEditor",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "buildEditor",
          "normalized": "FieldDescription a-\u003ea-\u003eIO(Widget,Injector a,a-\u003eExtractor a,Notifier)",
          "package": "ltk",
          "partial": "Editor",
          "signature": "FieldDescription alpha-\u003ealpha-\u003eIO(Widget,Injector alpha,alpha-\u003eExtractor alpha,Notifier)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:buildEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "extract",
          "package": "ltk",
          "signature": "alpha -\u003e [alpha -\u003e Extractor alpha] -\u003e IO (Maybe alpha)",
          "source": "src/Graphics-UI-Editor-MakeEditor.html#extract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor MakeEditor",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "extract",
          "normalized": "a-\u003e[a-\u003eExtractor a]-\u003eIO(Maybe a)",
          "package": "ltk",
          "signature": "alpha-\u003e[alpha-\u003eExtractor alpha]-\u003eIO(Maybe alpha)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience method to validate and extract fields\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "extractAndValidate",
          "package": "ltk",
          "signature": "alpha -\u003e [alpha -\u003e Extractor alpha] -\u003e [String] -\u003e Notifier -\u003e IO (Maybe alpha)",
          "source": "src/Graphics-UI-Editor-MakeEditor.html#extractAndValidate",
          "type": "function"
        },
        "index": {
          "description": "Convenience method to validate and extract fields",
          "hierarchy": "Graphics UI Editor MakeEditor",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "extractAndValidate",
          "normalized": "a-\u003e[a-\u003eExtractor a]-\u003e[String]-\u003eNotifier-\u003eIO(Maybe a)",
          "package": "ltk",
          "partial": "And Validate",
          "signature": "alpha-\u003e[alpha-\u003eExtractor alpha]-\u003e[String]-\u003eNotifier-\u003eIO(Maybe alpha)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:extractAndValidate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "flattenFieldDescription",
          "package": "ltk",
          "signature": "FieldDescription alpha -\u003e [FieldDescription alpha]",
          "source": "src/Graphics-UI-Editor-MakeEditor.html#flattenFieldDescription",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor MakeEditor",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "flattenFieldDescription",
          "normalized": "FieldDescription a-\u003e[FieldDescription a]",
          "package": "ltk",
          "partial": "Field Description",
          "signature": "FieldDescription alpha-\u003e[FieldDescription alpha]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:flattenFieldDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget through outerAlignment, frame, innerAlignment\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "getRealWidget",
          "package": "ltk",
          "signature": "Widget -\u003e IO (Maybe Widget)",
          "source": "src/Graphics-UI-Editor-MakeEditor.html#getRealWidget",
          "type": "function"
        },
        "index": {
          "description": "get through outerAlignment frame innerAlignment",
          "hierarchy": "Graphics UI Editor MakeEditor",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "getRealWidget",
          "normalized": "Widget-\u003eIO(Maybe Widget)",
          "package": "ltk",
          "partial": "Real Widget",
          "signature": "Widget-\u003eIO(Maybe Widget)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:getRealWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to construct an editor\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "mkEditor",
          "package": "ltk",
          "signature": "(Container -\u003e Injector alpha) -\u003e Extractor alpha -\u003e Editor alpha",
          "source": "src/Graphics-UI-Editor-MakeEditor.html#mkEditor",
          "type": "function"
        },
        "index": {
          "description": "Function to construct an editor",
          "hierarchy": "Graphics UI Editor MakeEditor",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "mkEditor",
          "normalized": "(Container-\u003eInjector a)-\u003eExtractor a-\u003eEditor a",
          "package": "ltk",
          "partial": "Editor",
          "signature": "(Container-\u003eInjector alpha)-\u003eExtractor alpha-\u003eEditor alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:mkEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to construct a field description\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "mkField",
          "package": "ltk",
          "signature": "MkFieldDescription alpha beta",
          "source": "src/Graphics-UI-Editor-MakeEditor.html#mkField",
          "type": "function"
        },
        "index": {
          "description": "Function to construct field description",
          "hierarchy": "Graphics UI Editor MakeEditor",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "mkField",
          "package": "ltk",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:mkField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "parameters",
          "package": "ltk",
          "signature": "FieldDescription alpha -\u003e Parameters",
          "source": "src/Graphics-UI-Editor-MakeEditor.html#parameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor MakeEditor",
          "module": "Graphics.UI.Editor.MakeEditor",
          "name": "parameters",
          "normalized": "FieldDescription a-\u003eParameters",
          "package": "ltk",
          "signature": "FieldDescription alpha-\u003eParameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-MakeEditor.html#v:parameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for parameters for editors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "Parameters",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Parameters.html",
          "type": "module"
        },
        "index": {
          "description": "Module for parameters for editors",
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "Parameters",
          "package": "ltk",
          "partial": "Parameters",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe direction of a split\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "Direction",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Parameters.html#Direction",
          "type": "data"
        },
        "index": {
          "description": "The direction of split",
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "Direction",
          "package": "ltk",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "HorizontalAlign",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Parameters.html#HorizontalAlign",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "HorizontalAlign",
          "package": "ltk",
          "partial": "Horizontal Align",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#t:HorizontalAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "Parameter",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "Parameter",
          "package": "ltk",
          "partial": "Parameter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#t:Parameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for parameters for editors\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "Parameters",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Parameters.html#Parameters",
          "type": "type"
        },
        "index": {
          "description": "type for parameters for editors",
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "Parameters",
          "package": "ltk",
          "partial": "Parameters",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#t:Parameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "(\u003c\u003c\u003c-)",
          "package": "ltk",
          "signature": "(Parameter -\u003e Maybe beta) -\u003e Parameter -\u003e Parameters -\u003e Parameters",
          "source": "src/Graphics-UI-Editor-Parameters.html#%3C%3C%3C-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "(\u003c\u003c\u003c-) \u003c\u003c\u003c-",
          "normalized": "(Parameter-\u003eMaybe a)-\u003eParameter-\u003eParameters-\u003eParameters",
          "package": "ltk",
          "signature": "(Parameter-\u003eMaybe beta)-\u003eParameter-\u003eParameters-\u003eParameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:-60--60--60--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "Horizontal",
          "package": "ltk",
          "signature": "Horizontal",
          "source": "src/Graphics-UI-Editor-Parameters.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "Horizontal",
          "package": "ltk",
          "partial": "Horizontal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:Horizontal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "Keep",
          "package": "ltk",
          "signature": "Keep",
          "source": "src/Graphics-UI-Editor-Parameters.html#HorizontalAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "Keep",
          "package": "ltk",
          "partial": "Keep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:Keep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaDirection",
          "package": "ltk",
          "signature": "ParaDirection Direction",
          "source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaDirection",
          "package": "ltk",
          "partial": "Para Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaHorizontal",
          "package": "ltk",
          "signature": "ParaHorizontal HorizontalAlign",
          "source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaHorizontal",
          "package": "ltk",
          "partial": "Para Horizontal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaHorizontal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaInnerAlignment",
          "package": "ltk",
          "signature": "ParaInnerAlignment (Float, Float, Float, Float)",
          "source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaInnerAlignment",
          "normalized": "ParaInnerAlignment(Float,Float,Float,Float)",
          "package": "ltk",
          "partial": "Para Inner Alignment",
          "signature": "ParaInnerAlignment(Float,Float,Float,Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaInnerAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003exalign yalign xscale yscale\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaInnerPadding",
          "package": "ltk",
          "signature": "ParaInnerPadding (Int, Int, Int, Int)",
          "source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "xalign yalign xscale yscale",
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaInnerPadding",
          "normalized": "ParaInnerPadding(Int,Int,Int,Int)",
          "package": "ltk",
          "partial": "Para Inner Padding",
          "signature": "ParaInnerPadding(Int,Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaInnerPadding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaMinSize",
          "package": "ltk",
          "signature": "ParaMinSize (Int, Int)",
          "source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaMinSize",
          "normalized": "ParaMinSize(Int,Int)",
          "package": "ltk",
          "partial": "Para Min Size",
          "signature": "ParaMinSize(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaMinSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaMultiSel",
          "package": "ltk",
          "signature": "ParaMultiSel Bool",
          "source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaMultiSel",
          "package": "ltk",
          "partial": "Para Multi Sel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaMultiSel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaName",
          "package": "ltk",
          "signature": "ParaName String",
          "source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaName",
          "package": "ltk",
          "partial": "Para Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaOuterAlignment",
          "package": "ltk",
          "signature": "ParaOuterAlignment (Float, Float, Float, Float)",
          "source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaOuterAlignment",
          "normalized": "ParaOuterAlignment(Float,Float,Float,Float)",
          "package": "ltk",
          "partial": "Para Outer Alignment",
          "signature": "ParaOuterAlignment(Float,Float,Float,Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaOuterAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003exalign yalign xscale yscale\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaOuterPadding",
          "package": "ltk",
          "signature": "ParaOuterPadding (Int, Int, Int, Int)",
          "source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
          "type": "function"
        },
        "index": {
          "description": "xalign yalign xscale yscale",
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaOuterPadding",
          "normalized": "ParaOuterPadding(Int,Int,Int,Int)",
          "package": "ltk",
          "partial": "Para Outer Padding",
          "signature": "ParaOuterPadding(Int,Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaOuterPadding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaPack",
          "package": "ltk",
          "signature": "ParaPack Packing",
          "source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaPack",
          "package": "ltk",
          "partial": "Para Pack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaPack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaShadow",
          "package": "ltk",
          "signature": "ParaShadow ShadowType",
          "source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaShadow",
          "package": "ltk",
          "partial": "Para Shadow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaShadow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaShowLabel",
          "package": "ltk",
          "signature": "ParaShowLabel Bool",
          "source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaShowLabel",
          "package": "ltk",
          "partial": "Para Show Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaShowLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaStockId",
          "package": "ltk",
          "signature": "ParaStockId String",
          "source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaStockId",
          "package": "ltk",
          "partial": "Para Stock Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaStockId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaSynopsis",
          "package": "ltk",
          "signature": "ParaSynopsis String",
          "source": "src/Graphics-UI-Editor-Parameters.html#Parameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "ParaSynopsis",
          "package": "ltk",
          "partial": "Para Synopsis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:ParaSynopsis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "StartHorizontal",
          "package": "ltk",
          "signature": "StartHorizontal",
          "source": "src/Graphics-UI-Editor-Parameters.html#HorizontalAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "StartHorizontal",
          "package": "ltk",
          "partial": "Start Horizontal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:StartHorizontal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "StopHorizontal",
          "package": "ltk",
          "signature": "StopHorizontal",
          "source": "src/Graphics-UI-Editor-Parameters.html#HorizontalAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "StopHorizontal",
          "package": "ltk",
          "partial": "Stop Horizontal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:StopHorizontal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "Vertical",
          "package": "ltk",
          "signature": "Vertical",
          "source": "src/Graphics-UI-Editor-Parameters.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "Vertical",
          "package": "ltk",
          "partial": "Vertical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:Vertical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "emptyParams",
          "package": "ltk",
          "signature": "[Parameter]",
          "source": "src/Graphics-UI-Editor-Parameters.html#emptyParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "emptyParams",
          "normalized": "[Parameter]",
          "package": "ltk",
          "partial": "Params",
          "signature": "[Parameter]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:emptyParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience method to get a parameter, or if not set the default parameter\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "getParameter",
          "package": "ltk",
          "signature": "(Parameter -\u003e Maybe beta) -\u003e Parameters -\u003e beta",
          "source": "src/Graphics-UI-Editor-Parameters.html#getParameter",
          "type": "function"
        },
        "index": {
          "description": "Convenience method to get parameter or if not set the default parameter",
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "getParameter",
          "normalized": "(Parameter-\u003eMaybe a)-\u003eParameters-\u003ea",
          "package": "ltk",
          "partial": "Parameter",
          "signature": "(Parameter-\u003eMaybe beta)-\u003eParameters-\u003ebeta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:getParameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "getParameterPrim",
          "package": "ltk",
          "signature": "(Parameter -\u003e Maybe beta) -\u003e Parameters -\u003e Maybe beta",
          "source": "src/Graphics-UI-Editor-Parameters.html#getParameterPrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "getParameterPrim",
          "normalized": "(Parameter-\u003eMaybe a)-\u003eParameters-\u003eMaybe a",
          "package": "ltk",
          "partial": "Parameter Prim",
          "signature": "(Parameter-\u003eMaybe beta)-\u003eParameters-\u003eMaybe beta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:getParameterPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraDirection",
          "package": "ltk",
          "signature": "Parameter -\u003e Maybe Direction",
          "source": "src/Graphics-UI-Editor-Parameters.html#paraDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraDirection",
          "normalized": "Parameter-\u003eMaybe Direction",
          "package": "ltk",
          "partial": "Direction",
          "signature": "Parameter-\u003eMaybe Direction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraHorizontal",
          "package": "ltk",
          "signature": "Parameter -\u003e Maybe HorizontalAlign",
          "source": "src/Graphics-UI-Editor-Parameters.html#paraHorizontal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraHorizontal",
          "normalized": "Parameter-\u003eMaybe HorizontalAlign",
          "package": "ltk",
          "partial": "Horizontal",
          "signature": "Parameter-\u003eMaybe HorizontalAlign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraHorizontal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraInnerAlignment",
          "package": "ltk",
          "signature": "Parameter -\u003e Maybe (Float, Float, Float, Float)",
          "source": "src/Graphics-UI-Editor-Parameters.html#paraInnerAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraInnerAlignment",
          "normalized": "Parameter-\u003eMaybe(Float,Float,Float,Float)",
          "package": "ltk",
          "partial": "Inner Alignment",
          "signature": "Parameter-\u003eMaybe(Float,Float,Float,Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraInnerAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraInnerPadding",
          "package": "ltk",
          "signature": "Parameter -\u003e Maybe (Int, Int, Int, Int)",
          "source": "src/Graphics-UI-Editor-Parameters.html#paraInnerPadding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraInnerPadding",
          "normalized": "Parameter-\u003eMaybe(Int,Int,Int,Int)",
          "package": "ltk",
          "partial": "Inner Padding",
          "signature": "Parameter-\u003eMaybe(Int,Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraInnerPadding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraMinSize",
          "package": "ltk",
          "signature": "Parameter -\u003e Maybe (Int, Int)",
          "source": "src/Graphics-UI-Editor-Parameters.html#paraMinSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraMinSize",
          "normalized": "Parameter-\u003eMaybe(Int,Int)",
          "package": "ltk",
          "partial": "Min Size",
          "signature": "Parameter-\u003eMaybe(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraMinSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraMultiSel",
          "package": "ltk",
          "signature": "Parameter -\u003e Maybe Bool",
          "source": "src/Graphics-UI-Editor-Parameters.html#paraMultiSel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraMultiSel",
          "normalized": "Parameter-\u003eMaybe Bool",
          "package": "ltk",
          "partial": "Multi Sel",
          "signature": "Parameter-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraMultiSel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraName",
          "package": "ltk",
          "signature": "Parameter -\u003e Maybe String",
          "source": "src/Graphics-UI-Editor-Parameters.html#paraName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraName",
          "normalized": "Parameter-\u003eMaybe String",
          "package": "ltk",
          "partial": "Name",
          "signature": "Parameter-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraOuterAlignment",
          "package": "ltk",
          "signature": "Parameter -\u003e Maybe (Float, Float, Float, Float)",
          "source": "src/Graphics-UI-Editor-Parameters.html#paraOuterAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraOuterAlignment",
          "normalized": "Parameter-\u003eMaybe(Float,Float,Float,Float)",
          "package": "ltk",
          "partial": "Outer Alignment",
          "signature": "Parameter-\u003eMaybe(Float,Float,Float,Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraOuterAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraOuterPadding",
          "package": "ltk",
          "signature": "Parameter -\u003e Maybe (Int, Int, Int, Int)",
          "source": "src/Graphics-UI-Editor-Parameters.html#paraOuterPadding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraOuterPadding",
          "normalized": "Parameter-\u003eMaybe(Int,Int,Int,Int)",
          "package": "ltk",
          "partial": "Outer Padding",
          "signature": "Parameter-\u003eMaybe(Int,Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraOuterPadding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraPack",
          "package": "ltk",
          "signature": "Parameter -\u003e Maybe Packing",
          "source": "src/Graphics-UI-Editor-Parameters.html#paraPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraPack",
          "normalized": "Parameter-\u003eMaybe Packing",
          "package": "ltk",
          "partial": "Pack",
          "signature": "Parameter-\u003eMaybe Packing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraPack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraShadow",
          "package": "ltk",
          "signature": "Parameter -\u003e Maybe ShadowType",
          "source": "src/Graphics-UI-Editor-Parameters.html#paraShadow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraShadow",
          "normalized": "Parameter-\u003eMaybe ShadowType",
          "package": "ltk",
          "partial": "Shadow",
          "signature": "Parameter-\u003eMaybe ShadowType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraShadow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraShowLabel",
          "package": "ltk",
          "signature": "Parameter -\u003e Maybe Bool",
          "source": "src/Graphics-UI-Editor-Parameters.html#paraShowLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraShowLabel",
          "normalized": "Parameter-\u003eMaybe Bool",
          "package": "ltk",
          "partial": "Show Label",
          "signature": "Parameter-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraShowLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraStockId",
          "package": "ltk",
          "signature": "Parameter -\u003e Maybe String",
          "source": "src/Graphics-UI-Editor-Parameters.html#paraStockId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraStockId",
          "normalized": "Parameter-\u003eMaybe String",
          "package": "ltk",
          "partial": "Stock Id",
          "signature": "Parameter-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraStockId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraSynopsis",
          "package": "ltk",
          "signature": "Parameter -\u003e Maybe String",
          "source": "src/Graphics-UI-Editor-Parameters.html#paraSynopsis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Parameters",
          "module": "Graphics.UI.Editor.Parameters",
          "name": "paraSynopsis",
          "normalized": "Parameter-\u003eMaybe String",
          "package": "ltk",
          "partial": "Synopsis",
          "signature": "Parameter-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Parameters.html#v:paraSynopsis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for making simple editors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "Simple",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "Module for making simple editors",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "Simple",
          "package": "ltk",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEditor for a boolean value in the form of a check button\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "boolEditor",
          "package": "ltk",
          "signature": "Editor Bool",
          "source": "src/Graphics-UI-Editor-Simple.html#boolEditor",
          "type": "function"
        },
        "index": {
          "description": "Editor for boolean value in the form of check button",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "boolEditor",
          "package": "ltk",
          "partial": "Editor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:boolEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEditor for a boolean value in the form of two radio buttons\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "boolEditor2",
          "package": "ltk",
          "signature": "String -\u003e Editor Bool",
          "source": "src/Graphics-UI-Editor-Simple.html#boolEditor2",
          "type": "function"
        },
        "index": {
          "description": "Editor for boolean value in the form of two radio buttons",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "boolEditor2",
          "normalized": "String-\u003eEditor Bool",
          "package": "ltk",
          "partial": "Editor",
          "signature": "String-\u003eEditor Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:boolEditor2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Editor for nothing (which may report a click) in the form of a button\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "clickEditor",
          "package": "ltk",
          "signature": "Bool -\u003e Editor ()",
          "source": "src/Graphics-UI-Editor-Simple.html#clickEditor",
          "type": "function"
        },
        "index": {
          "description": "An Editor for nothing which may report click in the form of button",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "clickEditor",
          "normalized": "Bool-\u003eEditor()",
          "package": "ltk",
          "partial": "Editor",
          "signature": "Bool-\u003eEditor()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:clickEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEditor for color selection\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "colorEditor",
          "package": "ltk",
          "signature": "Editor Color",
          "source": "src/Graphics-UI-Editor-Simple.html#colorEditor",
          "type": "function"
        },
        "index": {
          "description": "Editor for color selection",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "colorEditor",
          "package": "ltk",
          "partial": "Editor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:colorEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEditor for the selection of some element from a static list of elements in the\n | form of a combo box\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "comboSelectionEditor",
          "package": "ltk",
          "signature": "[beta] -\u003e (beta -\u003e String) -\u003e Editor beta",
          "source": "src/Graphics-UI-Editor-Simple.html#comboSelectionEditor",
          "type": "function"
        },
        "index": {
          "description": "Editor for the selection of some element from static list of elements in the form of combo box",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "comboSelectionEditor",
          "normalized": "[a]-\u003e(a-\u003eString)-\u003eEditor a",
          "package": "ltk",
          "partial": "Selection Editor",
          "signature": "[beta]-\u003e(beta-\u003eString)-\u003eEditor beta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:comboSelectionEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEditor for an enum value in the form of n radio buttons\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "enumEditor",
          "package": "ltk",
          "signature": "[String] -\u003e Editor alpha",
          "source": "src/Graphics-UI-Editor-Simple.html#enumEditor",
          "type": "function"
        },
        "index": {
          "description": "Editor for an enum value in the form of radio buttons",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "enumEditor",
          "normalized": "[String]-\u003eEditor a",
          "package": "ltk",
          "partial": "Editor",
          "signature": "[String]-\u003eEditor alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:enumEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEditor for the selection of a file path in the form of a text entry and a button,\n | which opens a gtk file chooser\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "fileEditor",
          "package": "ltk",
          "signature": "Maybe FilePath -\u003e FileChooserAction -\u003e String -\u003e Editor FilePath",
          "source": "src/Graphics-UI-Editor-Simple.html#fileEditor",
          "type": "function"
        },
        "index": {
          "description": "Editor for the selection of file path in the form of text entry and button which opens gtk file chooser",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "fileEditor",
          "normalized": "Maybe FilePath-\u003eFileChooserAction-\u003eString-\u003eEditor FilePath",
          "package": "ltk",
          "partial": "Editor",
          "signature": "Maybe FilePath-\u003eFileChooserAction-\u003eString-\u003eEditor FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:fileEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEditor for a font selection\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "fontEditor",
          "package": "ltk",
          "signature": "Editor (Maybe String)",
          "source": "src/Graphics-UI-Editor-Simple.html#fontEditor",
          "type": "function"
        },
        "index": {
          "description": "Editor for font selection",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "fontEditor",
          "package": "ltk",
          "partial": "Editor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:fontEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEditor for for any value which is an instance of Read and Show in the form of a\n | text entry\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "genericEditor",
          "package": "ltk",
          "signature": "Editor beta",
          "source": "src/Graphics-UI-Editor-Simple.html#genericEditor",
          "type": "function"
        },
        "index": {
          "description": "Editor for for any value which is an instance of Read and Show in the form of text entry",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "genericEditor",
          "package": "ltk",
          "partial": "Editor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:genericEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Editor to display an image\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "imageEditor",
          "package": "ltk",
          "signature": "Editor StockId",
          "source": "src/Graphics-UI-Editor-Simple.html#imageEditor",
          "type": "function"
        },
        "index": {
          "description": "An Editor to display an image",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "imageEditor",
          "package": "ltk",
          "partial": "Editor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:imageEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEditor for an integer in the form of a spin entry\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "intEditor",
          "package": "ltk",
          "signature": "(Double, Double, Double) -\u003e Editor Int",
          "source": "src/Graphics-UI-Editor-Simple.html#intEditor",
          "type": "function"
        },
        "index": {
          "description": "Editor for an integer in the form of spin entry",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "intEditor",
          "normalized": "(Double,Double,Double)-\u003eEditor Int",
          "package": "ltk",
          "partial": "Editor",
          "signature": "(Double,Double,Double)-\u003eEditor Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:intEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEditor for a multiline string in the form of a multiline text entry\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "multilineStringEditor",
          "package": "ltk",
          "signature": "Editor String",
          "source": "src/Graphics-UI-Editor-Simple.html#multilineStringEditor",
          "type": "function"
        },
        "index": {
          "description": "Editor for multiline string in the form of multiline text entry",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "multilineStringEditor",
          "package": "ltk",
          "partial": "String Editor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:multilineStringEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEditor for the selection of some elements from a list of elements in the\n | form of a list box\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "multiselectionEditor",
          "package": "ltk",
          "signature": "Editor [beta]",
          "source": "src/Graphics-UI-Editor-Simple.html#multiselectionEditor",
          "type": "function"
        },
        "index": {
          "description": "Editor for the selection of some elements from list of elements in the form of list box",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "multiselectionEditor",
          "normalized": "Editor[a]",
          "package": "ltk",
          "partial": "Editor",
          "signature": "Editor[beta]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:multiselectionEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn invisible editor without any effect\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "noEditor",
          "package": "ltk",
          "signature": "alpha -\u003e Editor alpha",
          "source": "src/Graphics-UI-Editor-Simple.html#noEditor",
          "type": "function"
        },
        "index": {
          "description": "An invisible editor without any effect",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "noEditor",
          "normalized": "a-\u003eEditor a",
          "package": "ltk",
          "partial": "Editor",
          "signature": "alpha-\u003eEditor alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:noEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Editor.Simple",
          "name": "okCancelFields",
          "package": "ltk",
          "signature": "FieldDescription ()",
          "source": "src/Graphics-UI-Editor-Simple.html#okCancelFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "okCancelFields",
          "normalized": "FieldDescription()",
          "package": "ltk",
          "partial": "Cancel Fields",
          "signature": "FieldDescription()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:okCancelFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn editor, which opens another editor\n   You have to inject a value before the button can be clicked.\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "otherEditor",
          "package": "ltk",
          "signature": "(alpha -\u003e String -\u003e IO (Maybe alpha)) -\u003e Editor alpha",
          "source": "src/Graphics-UI-Editor-Simple.html#otherEditor",
          "type": "function"
        },
        "index": {
          "description": "An editor which opens another editor You have to inject value before the button can be clicked",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "otherEditor",
          "normalized": "(a-\u003eString-\u003eIO(Maybe a))-\u003eEditor a",
          "package": "ltk",
          "partial": "Editor",
          "signature": "(alpha-\u003eString-\u003eIO(Maybe alpha))-\u003eEditor alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:otherEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEditor for the selection of some elements from a static list of elements in the\n | form of a list box\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "staticListEditor",
          "package": "ltk",
          "signature": "[beta] -\u003e (beta -\u003e String) -\u003e Editor beta",
          "source": "src/Graphics-UI-Editor-Simple.html#staticListEditor",
          "type": "function"
        },
        "index": {
          "description": "Editor for the selection of some elements from static list of elements in the form of list box",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "staticListEditor",
          "normalized": "[a]-\u003e(a-\u003eString)-\u003eEditor a",
          "package": "ltk",
          "partial": "List Editor",
          "signature": "[beta]-\u003e(beta-\u003eString)-\u003eEditor beta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:staticListEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEditor for the selection of some elements from a static list of elements in the\n | form of a list box with toggle elements\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "staticListMultiEditor",
          "package": "ltk",
          "signature": "[beta] -\u003e (beta -\u003e String) -\u003e Editor [beta]",
          "source": "src/Graphics-UI-Editor-Simple.html#staticListMultiEditor",
          "type": "function"
        },
        "index": {
          "description": "Editor for the selection of some elements from static list of elements in the form of list box with toggle elements",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "staticListMultiEditor",
          "normalized": "[a]-\u003e(a-\u003eString)-\u003eEditor[a]",
          "package": "ltk",
          "partial": "List Multi Editor",
          "signature": "[beta]-\u003e(beta-\u003eString)-\u003eEditor[beta]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:staticListMultiEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEditor for a string in the form of a text entry\n\u003c/p\u003e",
          "module": "Graphics.UI.Editor.Simple",
          "name": "stringEditor",
          "package": "ltk",
          "signature": "(String -\u003e Bool) -\u003e Bool -\u003e Editor String",
          "source": "src/Graphics-UI-Editor-Simple.html#stringEditor",
          "type": "function"
        },
        "index": {
          "description": "Editor for string in the form of text entry",
          "hierarchy": "Graphics UI Editor Simple",
          "module": "Graphics.UI.Editor.Simple",
          "name": "stringEditor",
          "normalized": "(String-\u003eBool)-\u003eBool-\u003eEditor String",
          "package": "ltk",
          "partial": "Editor",
          "signature": "(String-\u003eBool)-\u003eBool-\u003eEditor String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Editor-Simple.html#v:stringEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe basic definitions for all panes\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Frame.Panes",
          "name": "Panes",
          "package": "ltk",
          "source": "src/Graphics-UI-Frame-Panes.html",
          "type": "module"
        },
        "index": {
          "description": "The basic definitions for all panes",
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "Panes",
          "package": "ltk",
          "partial": "Panes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignal handlers for the different pane types\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.Panes",
          "name": "Connection",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "Signal handlers for the different pane types",
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "Connection",
          "package": "ltk",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "Connections",
          "package": "ltk",
          "source": "src/Graphics-UI-Editor-Basics.html#Connections",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "Connections",
          "package": "ltk",
          "partial": "Connections",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:Connections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "FrameState",
          "package": "ltk",
          "source": "src/Graphics-UI-Frame-Panes.html#FrameState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "FrameState",
          "package": "ltk",
          "partial": "Frame State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:FrameState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "IDEPane",
          "package": "ltk",
          "source": "src/Graphics-UI-Frame-Panes.html#IDEPane",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "IDEPane",
          "package": "ltk",
          "partial": "IDEPane",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:IDEPane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll kinds of panes are instances of pane\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.Panes",
          "name": "Pane",
          "package": "ltk",
          "source": "src/Graphics-UI-Frame-Panes.html#Pane",
          "type": "class"
        },
        "index": {
          "description": "All kinds of panes are instances of pane",
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "Pane",
          "package": "ltk",
          "partial": "Pane",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:Pane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe relative direction to a pane from the parent\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.Panes",
          "name": "PaneDirection",
          "package": "ltk",
          "source": "src/Graphics-UI-Frame-Panes.html#PaneDirection",
          "type": "data"
        },
        "index": {
          "description": "The relative direction to pane from the parent",
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "PaneDirection",
          "package": "ltk",
          "partial": "Pane Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:PaneDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescription of a window layout\n Horizontal: top bottom Vertical: left right\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.Panes",
          "name": "PaneLayout",
          "package": "ltk",
          "source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
          "type": "data"
        },
        "index": {
          "description": "Description of window layout Horizontal top bottom Vertical left right",
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "PaneLayout",
          "package": "ltk",
          "partial": "Pane Layout",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:PaneLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "PaneMonad",
          "package": "ltk",
          "source": "src/Graphics-UI-Frame-Panes.html#PaneMonad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "PaneMonad",
          "package": "ltk",
          "partial": "Pane Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:PaneMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "PaneName",
          "package": "ltk",
          "source": "src/Graphics-UI-Frame-Panes.html#PaneName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "PaneName",
          "package": "ltk",
          "partial": "Pane Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:PaneName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path to a pane\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.Panes",
          "name": "PanePath",
          "package": "ltk",
          "source": "src/Graphics-UI-Frame-Panes.html#PanePath",
          "type": "type"
        },
        "index": {
          "description": "path to pane",
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "PanePath",
          "package": "ltk",
          "partial": "Pane Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:PanePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn element of a path to a pane\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.Panes",
          "name": "PanePathElement",
          "package": "ltk",
          "source": "src/Graphics-UI-Frame-Panes.html#PanePathElement",
          "type": "data"
        },
        "index": {
          "description": "An element of path to pane",
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "PanePathElement",
          "package": "ltk",
          "partial": "Pane Path Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:PanePathElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "RecoverablePane",
          "package": "ltk",
          "source": "src/Graphics-UI-Frame-Panes.html#RecoverablePane",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "RecoverablePane",
          "package": "ltk",
          "partial": "Recoverable Pane",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:RecoverablePane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "StandardPath",
          "package": "ltk",
          "source": "src/Graphics-UI-Frame-Panes.html#StandardPath",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "StandardPath",
          "package": "ltk",
          "partial": "Standard Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#t:StandardPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "BottomP",
          "package": "ltk",
          "signature": "BottomP",
          "source": "src/Graphics-UI-Frame-Panes.html#PaneDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "BottomP",
          "package": "ltk",
          "partial": "Bottom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:BottomP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "FrameState",
          "package": "ltk",
          "signature": "FrameState",
          "source": "src/Graphics-UI-Frame-Panes.html#FrameState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "FrameState",
          "package": "ltk",
          "partial": "Frame State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:FrameState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "GroupP",
          "package": "ltk",
          "signature": "GroupP String",
          "source": "src/Graphics-UI-Frame-Panes.html#PanePathElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "GroupP",
          "package": "ltk",
          "partial": "Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:GroupP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "HorizontalP",
          "package": "ltk",
          "signature": "HorizontalP PaneLayout PaneLayout Int",
          "source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "HorizontalP",
          "package": "ltk",
          "partial": "Horizontal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:HorizontalP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "LeftP",
          "package": "ltk",
          "signature": "LeftP",
          "source": "src/Graphics-UI-Frame-Panes.html#PaneDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "LeftP",
          "package": "ltk",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:LeftP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "PaneC",
          "package": "ltk",
          "signature": "PaneC alpha",
          "source": "src/Graphics-UI-Frame-Panes.html#IDEPane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "PaneC",
          "package": "ltk",
          "partial": "Pane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:PaneC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "RightP",
          "package": "ltk",
          "signature": "RightP",
          "source": "src/Graphics-UI-Frame-Panes.html#PaneDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "RightP",
          "package": "ltk",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:RightP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "SplitP",
          "package": "ltk",
          "signature": "SplitP PaneDirection",
          "source": "src/Graphics-UI-Frame-Panes.html#PanePathElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "SplitP",
          "package": "ltk",
          "partial": "Split",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:SplitP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "TerminalP",
          "package": "ltk",
          "signature": "TerminalP",
          "source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "TerminalP",
          "package": "ltk",
          "partial": "Terminal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:TerminalP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "TopP",
          "package": "ltk",
          "signature": "TopP",
          "source": "src/Graphics-UI-Frame-Panes.html#PaneDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "TopP",
          "package": "ltk",
          "partial": "Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:TopP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "VerticalP",
          "package": "ltk",
          "signature": "VerticalP PaneLayout PaneLayout Int",
          "source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "VerticalP",
          "package": "ltk",
          "partial": "Vertical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:VerticalP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "activateThisPane",
          "package": "ltk",
          "signature": "alpha -\u003e Connections -\u003e delta ()",
          "source": "src/Graphics-UI-Frame-Panes.html#activateThisPane",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "activateThisPane",
          "normalized": "a-\u003eConnections-\u003eb()",
          "package": "ltk",
          "partial": "This Pane",
          "signature": "alpha-\u003eConnections-\u003edelta()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:activateThisPane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "activePane",
          "package": "ltk",
          "signature": "Maybe (PaneName, Connections)",
          "source": "src/Graphics-UI-Frame-Panes.html#FrameState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "activePane",
          "normalized": "Maybe(PaneName,Connections)",
          "package": "ltk",
          "partial": "Pane",
          "signature": "Maybe(PaneName,Connections)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:activePane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "buildPane",
          "package": "ltk",
          "signature": "PanePath -\u003e Notebook -\u003e (PanePath -\u003e Notebook -\u003e Window -\u003e delta (Maybe alpha, Connections)) -\u003e delta (Maybe alpha)",
          "source": "src/Graphics-UI-Frame-Panes.html#buildPane",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "buildPane",
          "normalized": "PanePath-\u003eNotebook-\u003e(PanePath-\u003eNotebook-\u003eWindow-\u003ea(Maybe b,Connections))-\u003ea(Maybe b)",
          "package": "ltk",
          "partial": "Pane",
          "signature": "PanePath-\u003eNotebook-\u003e(PanePath-\u003eNotebook-\u003eWindow-\u003edelta(Maybe alpha,Connections))-\u003edelta(Maybe alpha)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:buildPane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "buildThisPane",
          "package": "ltk",
          "signature": "PanePath -\u003e Notebook -\u003e (PanePath -\u003e Notebook -\u003e Window -\u003e delta (Maybe alpha, Connections)) -\u003e delta (Maybe alpha)",
          "source": "src/Graphics-UI-Frame-Panes.html#buildThisPane",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "buildThisPane",
          "normalized": "PanePath-\u003eNotebook-\u003e(PanePath-\u003eNotebook-\u003eWindow-\u003ea(Maybe b,Connections))-\u003ea(Maybe b)",
          "package": "ltk",
          "partial": "This Pane",
          "signature": "PanePath-\u003eNotebook-\u003e(PanePath-\u003eNotebook-\u003eWindow-\u003edelta(Maybe alpha,Connections))-\u003edelta(Maybe alpha)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:buildThisPane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "builder",
          "package": "ltk",
          "signature": "PanePath -\u003e Notebook -\u003e Window -\u003e delta (Maybe alpha, Connections)",
          "source": "src/Graphics-UI-Frame-Panes.html#builder",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "builder",
          "normalized": "PanePath-\u003eNotebook-\u003eWindow-\u003ea(Maybe b,Connections)",
          "package": "ltk",
          "signature": "PanePath-\u003eNotebook-\u003eWindow-\u003edelta(Maybe alpha,Connections)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:builder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "closePane",
          "package": "ltk",
          "signature": "alpha -\u003e delta Bool",
          "source": "src/Graphics-UI-Frame-Panes.html#closePane",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "closePane",
          "normalized": "a-\u003eb Bool",
          "package": "ltk",
          "partial": "Pane",
          "signature": "alpha-\u003edelta Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:closePane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "closeThisPane",
          "package": "ltk",
          "signature": "alpha -\u003e delta Bool",
          "source": "src/Graphics-UI-Frame-Panes.html#closeThisPane",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "closeThisPane",
          "normalized": "a-\u003eb Bool",
          "package": "ltk",
          "partial": "This Pane",
          "signature": "alpha-\u003edelta Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:closeThisPane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "currentPage",
          "package": "ltk",
          "signature": "Int",
          "source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "currentPage",
          "package": "ltk",
          "partial": "Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:currentPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "detachedId",
          "package": "ltk",
          "signature": "Maybe String",
          "source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "detachedId",
          "package": "ltk",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:detachedId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "detachedSize",
          "package": "ltk",
          "signature": "Maybe (Int, Int)",
          "source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "detachedSize",
          "normalized": "Maybe(Int,Int)",
          "package": "ltk",
          "partial": "Size",
          "signature": "Maybe(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:detachedSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "displayPane",
          "package": "ltk",
          "signature": "alpha -\u003e Bool -\u003e delta ()",
          "source": "src/Graphics-UI-Frame-Panes.html#displayPane",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "displayPane",
          "normalized": "a-\u003eBool-\u003eb()",
          "package": "ltk",
          "partial": "Pane",
          "signature": "alpha-\u003eBool-\u003edelta()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:displayPane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "displayThisPane",
          "package": "ltk",
          "signature": "alpha -\u003e Bool -\u003e delta ()",
          "source": "src/Graphics-UI-Frame-Panes.html#displayThisPane",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "displayThisPane",
          "normalized": "a-\u003eBool-\u003eb()",
          "package": "ltk",
          "partial": "This Pane",
          "signature": "alpha-\u003eBool-\u003edelta()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:displayThisPane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "forceGetPane",
          "package": "ltk",
          "signature": "Either PanePath String -\u003e delta alpha",
          "source": "src/Graphics-UI-Frame-Panes.html#forceGetPane",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "forceGetPane",
          "normalized": "Either PanePath String-\u003ea b",
          "package": "ltk",
          "partial": "Get Pane",
          "signature": "Either PanePath String-\u003edelta alpha",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:forceGetPane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "getAddedIndex",
          "package": "ltk",
          "signature": "alpha -\u003e Int",
          "source": "src/Graphics-UI-Frame-Panes.html#getAddedIndex",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "getAddedIndex",
          "normalized": "a-\u003eInt",
          "package": "ltk",
          "partial": "Added Index",
          "signature": "alpha-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:getAddedIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "getAndDisplayPane",
          "package": "ltk",
          "signature": "Either PanePath String -\u003e Bool -\u003e delta (Maybe alpha)",
          "source": "src/Graphics-UI-Frame-Panes.html#getAndDisplayPane",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "getAndDisplayPane",
          "normalized": "Either PanePath String-\u003eBool-\u003ea(Maybe b)",
          "package": "ltk",
          "partial": "And Display Pane",
          "signature": "Either PanePath String-\u003eBool-\u003edelta(Maybe alpha)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:getAndDisplayPane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "getFrameState",
          "package": "ltk",
          "signature": "delta (FrameState delta)",
          "source": "src/Graphics-UI-Frame-Panes.html#getFrameState",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "getFrameState",
          "package": "ltk",
          "partial": "Frame State",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:getFrameState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "getOrBuildPane",
          "package": "ltk",
          "signature": "Either PanePath String -\u003e delta (Maybe alpha)",
          "source": "src/Graphics-UI-Frame-Panes.html#getOrBuildPane",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "getOrBuildPane",
          "normalized": "Either PanePath String-\u003ea(Maybe b)",
          "package": "ltk",
          "partial": "Or Build Pane",
          "signature": "Either PanePath String-\u003edelta(Maybe alpha)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:getOrBuildPane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "getOrBuildThisPane",
          "package": "ltk",
          "signature": "Either PanePath String -\u003e delta (Maybe alpha)",
          "source": "src/Graphics-UI-Frame-Panes.html#getOrBuildThisPane",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "getOrBuildThisPane",
          "normalized": "Either PanePath String-\u003ea(Maybe b)",
          "package": "ltk",
          "partial": "Or Build This Pane",
          "signature": "Either PanePath String-\u003edelta(Maybe alpha)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:getOrBuildThisPane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "getPane",
          "package": "ltk",
          "signature": "delta (Maybe alpha)",
          "source": "src/Graphics-UI-Frame-Panes.html#getPane",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "getPane",
          "package": "ltk",
          "partial": "Pane",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:getPane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "getThisPane",
          "package": "ltk",
          "signature": "delta (Maybe alpha)",
          "source": "src/Graphics-UI-Frame-Panes.html#getThisPane",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "getThisPane",
          "package": "ltk",
          "partial": "This Pane",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:getThisPane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egets the top Widget of this pane\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.Panes",
          "name": "getTopWidget",
          "package": "ltk",
          "signature": "alpha -\u003e Widget",
          "source": "src/Graphics-UI-Frame-Panes.html#getTopWidget",
          "type": "method"
        },
        "index": {
          "description": "gets the top Widget of this pane",
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "getTopWidget",
          "normalized": "a-\u003eWidget",
          "package": "ltk",
          "partial": "Top Widget",
          "signature": "alpha-\u003eWidget",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:getTopWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "layout",
          "package": "ltk",
          "signature": "PaneLayout",
          "source": "src/Graphics-UI-Frame-Panes.html#FrameState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "layout",
          "package": "ltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:layout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "makeActive",
          "package": "ltk",
          "signature": "alpha -\u003e delta ()",
          "source": "src/Graphics-UI-Frame-Panes.html#makeActive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "makeActive",
          "normalized": "a-\u003eb()",
          "package": "ltk",
          "partial": "Active",
          "signature": "alpha-\u003edelta()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:makeActive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "paneGroups",
          "package": "ltk",
          "signature": "Map String PaneLayout",
          "source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "paneGroups",
          "package": "ltk",
          "partial": "Groups",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:paneGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "paneId",
          "package": "ltk",
          "signature": "alpha -\u003e String",
          "source": "src/Graphics-UI-Frame-Panes.html#paneId",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "paneId",
          "normalized": "a-\u003eString",
          "package": "ltk",
          "partial": "Id",
          "signature": "alpha-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:paneId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "paneMap",
          "package": "ltk",
          "signature": "Map PaneName (PanePath, Connections)",
          "source": "src/Graphics-UI-Frame-Panes.html#FrameState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "paneMap",
          "normalized": "Map PaneName(PanePath,Connections)",
          "package": "ltk",
          "partial": "Map",
          "signature": "Map PaneName(PanePath,Connections)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:paneMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "paneName",
          "package": "ltk",
          "signature": "alpha -\u003e PaneName",
          "source": "src/Graphics-UI-Frame-Panes.html#paneName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "paneName",
          "normalized": "a-\u003ePaneName",
          "package": "ltk",
          "partial": "Name",
          "signature": "alpha-\u003ePaneName",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:paneName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "panePathForGroup",
          "package": "ltk",
          "signature": "String -\u003e delta PanePath",
          "source": "src/Graphics-UI-Frame-Panes.html#panePathForGroup",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "panePathForGroup",
          "normalized": "String-\u003ea PanePath",
          "package": "ltk",
          "partial": "Path For Group",
          "signature": "String-\u003edelta PanePath",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:panePathForGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "panePathFromNB",
          "package": "ltk",
          "signature": "(Map Notebook PanePath)",
          "source": "src/Graphics-UI-Frame-Panes.html#FrameState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "panePathFromNB",
          "package": "ltk",
          "partial": "Path From NB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:panePathFromNB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "paneTabs",
          "package": "ltk",
          "signature": "Maybe PaneDirection",
          "source": "src/Graphics-UI-Frame-Panes.html#PaneLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "paneTabs",
          "package": "ltk",
          "partial": "Tabs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:paneTabs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "panes",
          "package": "ltk",
          "signature": "Map PaneName (IDEPane delta)",
          "source": "src/Graphics-UI-Frame-Panes.html#FrameState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "panes",
          "package": "ltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:panes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "primPaneName",
          "package": "ltk",
          "signature": "alpha -\u003e String",
          "source": "src/Graphics-UI-Frame-Panes.html#primPaneName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "primPaneName",
          "normalized": "a-\u003eString",
          "package": "ltk",
          "partial": "Pane Name",
          "signature": "alpha-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:primPaneName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "recoverState",
          "package": "ltk",
          "signature": "PanePath -\u003e beta -\u003e delta (Maybe alpha)",
          "source": "src/Graphics-UI-Frame-Panes.html#recoverState",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "recoverState",
          "normalized": "PanePath-\u003ea-\u003eb(Maybe c)",
          "package": "ltk",
          "partial": "State",
          "signature": "PanePath-\u003ebeta-\u003edelta(Maybe alpha)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:recoverState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "runInIO",
          "package": "ltk",
          "signature": "forall alpha beta.  (beta -\u003e delta alpha) -\u003e delta (beta -\u003e IO alpha)",
          "source": "src/Graphics-UI-Frame-Panes.html#runInIO",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "runInIO",
          "normalized": "a b c(d-\u003ee b)-\u003ee(d-\u003eIO b)",
          "package": "ltk",
          "partial": "In IO",
          "signature": "forall alpha beta.(beta-\u003edelta alpha)-\u003edelta(beta-\u003eIO alpha)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:runInIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "saveState",
          "package": "ltk",
          "signature": "alpha -\u003e delta (Maybe beta)",
          "source": "src/Graphics-UI-Frame-Panes.html#saveState",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "saveState",
          "normalized": "a-\u003eb(Maybe c)",
          "package": "ltk",
          "partial": "State",
          "signature": "alpha-\u003edelta(Maybe beta)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:saveState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "setFrameState",
          "package": "ltk",
          "signature": "FrameState delta -\u003e delta ()",
          "source": "src/Graphics-UI-Frame-Panes.html#setFrameState",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "setFrameState",
          "normalized": "FrameState a-\u003ea()",
          "package": "ltk",
          "partial": "Frame State",
          "signature": "FrameState delta-\u003edelta()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:setFrameState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "signalDisconnectAll",
          "package": "ltk",
          "signature": "Connections -\u003e IO ()",
          "source": "src/Graphics-UI-Frame-Panes.html#signalDisconnectAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "signalDisconnectAll",
          "normalized": "Connections-\u003eIO()",
          "package": "ltk",
          "partial": "Disconnect All",
          "signature": "Connections-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:signalDisconnectAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "uiManager",
          "package": "ltk",
          "signature": "UIManager",
          "source": "src/Graphics-UI-Frame-Panes.html#FrameState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "uiManager",
          "package": "ltk",
          "partial": "Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:uiManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.Panes",
          "name": "windows",
          "package": "ltk",
          "signature": "[Window]",
          "source": "src/Graphics-UI-Frame-Panes.html#FrameState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame Panes",
          "module": "Graphics.UI.Frame.Panes",
          "name": "windows",
          "normalized": "[Window]",
          "package": "ltk",
          "signature": "[Window]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-Panes.html#v:windows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSplittable panes containing notebooks with any widgets\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "ViewFrame",
          "package": "ltk",
          "source": "src/Graphics-UI-Frame-ViewFrame.html",
          "type": "module"
        },
        "index": {
          "description": "Splittable panes containing notebooks with any widgets",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "ViewFrame",
          "package": "ltk",
          "partial": "View Frame",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "addPaneAdmin",
          "package": "ltk",
          "signature": "alpha -\u003e Connections -\u003e PanePath -\u003e delta Bool",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#addPaneAdmin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "addPaneAdmin",
          "normalized": "a-\u003eConnections-\u003ePanePath-\u003eb Bool",
          "package": "ltk",
          "partial": "Pane Admin",
          "signature": "alpha-\u003eConnections-\u003ePanePath-\u003edelta Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:addPaneAdmin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "allGroupNames",
          "package": "ltk",
          "signature": "PaneLayout -\u003e Set String",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#allGroupNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "allGroupNames",
          "normalized": "PaneLayout-\u003eSet String",
          "package": "ltk",
          "partial": "Group Names",
          "signature": "PaneLayout-\u003eSet String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:allGroupNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "bringGroupToFront",
          "package": "ltk",
          "signature": "String -\u003e alpha (Maybe PanePath)",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#bringGroupToFront",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "bringGroupToFront",
          "normalized": "String-\u003ea(Maybe PanePath)",
          "package": "ltk",
          "partial": "Group To Front",
          "signature": "String-\u003ealpha(Maybe PanePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:bringGroupToFront"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBring the pane to the front position in its notebook\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "bringPaneToFront",
          "package": "ltk",
          "signature": "alpha -\u003e IO ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#bringPaneToFront",
          "type": "function"
        },
        "index": {
          "description": "Bring the pane to the front position in its notebook",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "bringPaneToFront",
          "normalized": "a-\u003eIO()",
          "package": "ltk",
          "partial": "Pane To Front",
          "signature": "alpha-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:bringPaneToFront"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "closeGroup",
          "package": "ltk",
          "signature": "String -\u003e alpha ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#closeGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "closeGroup",
          "normalized": "String-\u003ea()",
          "package": "ltk",
          "partial": "Group",
          "signature": "String-\u003ealpha()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:closeGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a unique pane name, which is an index and a string\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "figureOutPaneName",
          "package": "ltk",
          "signature": "String -\u003e Int -\u003e alpha (Int, String)",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#figureOutPaneName",
          "type": "function"
        },
        "index": {
          "description": "Constructs unique pane name which is an index and string",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "figureOutPaneName",
          "normalized": "String-\u003eInt-\u003ea(Int,String)",
          "package": "ltk",
          "partial": "Out Pane Name",
          "signature": "String-\u003eInt-\u003ealpha(Int,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:figureOutPaneName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the active notebook\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getActiveNotebook",
          "package": "ltk",
          "signature": "alpha (Maybe Notebook)",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getActiveNotebook",
          "type": "function"
        },
        "index": {
          "description": "Get the active notebook",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getActiveNotebook",
          "package": "ltk",
          "partial": "Active Notebook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getActiveNotebook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getActivePane",
          "package": "ltk",
          "signature": "delta (Maybe (PaneName, Connections))",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getActivePane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getActivePane",
          "normalized": "a(Maybe(PaneName,Connections))",
          "package": "ltk",
          "partial": "Active Pane",
          "signature": "delta(Maybe(PaneName,Connections))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getActivePane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the path to the active pane\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getActivePanePath",
          "package": "ltk",
          "signature": "alpha (Maybe PanePath)",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getActivePanePath",
          "type": "function"
        },
        "index": {
          "description": "Get the path to the active pane",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getActivePanePath",
          "package": "ltk",
          "partial": "Active Pane Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getActivePanePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getActivePanePathOrStandard",
          "package": "ltk",
          "signature": "StandardPath -\u003e alpha PanePath",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getActivePanePathOrStandard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getActivePanePathOrStandard",
          "normalized": "StandardPath-\u003ea PanePath",
          "package": "ltk",
          "partial": "Active Pane Path Or Standard",
          "signature": "StandardPath-\u003ealpha PanePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getActivePanePathOrStandard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a valid panePath from a standard path.\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getBestPanePath",
          "package": "ltk",
          "signature": "StandardPath -\u003e PaneLayout -\u003e PanePath",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getBestPanePath",
          "type": "function"
        },
        "index": {
          "description": "Get valid panePath from standard path",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getBestPanePath",
          "normalized": "StandardPath-\u003ePaneLayout-\u003ePanePath",
          "package": "ltk",
          "partial": "Best Pane Path",
          "signature": "StandardPath-\u003ePaneLayout-\u003ePanePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getBestPanePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a standard path.\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getBestPathForId",
          "package": "ltk",
          "signature": "String -\u003e alpha PanePath",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getBestPathForId",
          "type": "function"
        },
        "index": {
          "description": "Get standard path",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getBestPathForId",
          "normalized": "String-\u003ea PanePath",
          "package": "ltk",
          "partial": "Best Path For Id",
          "signature": "String-\u003ealpha PanePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getBestPathForId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getLayout",
          "package": "ltk",
          "signature": "delta PaneLayout",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getLayout",
          "package": "ltk",
          "partial": "Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getMainWindow",
          "package": "ltk",
          "signature": "m Window",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getMainWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getMainWindow",
          "package": "ltk",
          "partial": "Main Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getMainWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the notebook widget for the given pane path\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getNotebook",
          "package": "ltk",
          "signature": "PanePath -\u003e alpha Notebook",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getNotebook",
          "type": "function"
        },
        "index": {
          "description": "Get the notebook widget for the given pane path",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getNotebook",
          "normalized": "PanePath-\u003ea Notebook",
          "package": "ltk",
          "partial": "Notebook",
          "signature": "PanePath-\u003ealpha Notebook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getNotebook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getPaneMapSt",
          "package": "ltk",
          "signature": "delta (Map PaneName (PanePath, Connections))",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getPaneMapSt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getPaneMapSt",
          "normalized": "a(Map PaneName(PanePath,Connections))",
          "package": "ltk",
          "partial": "Pane Map St",
          "signature": "delta(Map PaneName(PanePath,Connections))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getPaneMapSt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getPanePrim",
          "package": "ltk",
          "signature": "delta (Maybe alpha)",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getPanePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getPanePrim",
          "package": "ltk",
          "partial": "Pane Prim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getPanePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the (gtk) Paned widget for a given path\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getPaned",
          "package": "ltk",
          "signature": "PanePath -\u003e alpha Paned",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getPaned",
          "type": "function"
        },
        "index": {
          "description": "Get the gtk Paned widget for given path",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getPaned",
          "normalized": "PanePath-\u003ea Paned",
          "package": "ltk",
          "partial": "Paned",
          "signature": "PanePath-\u003ealpha Paned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getPaned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getPanes",
          "package": "ltk",
          "signature": "delta [alpha]",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getPanes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getPanes",
          "normalized": "a[b]",
          "package": "ltk",
          "partial": "Panes",
          "signature": "delta[alpha]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getPanes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getPanesSt",
          "package": "ltk",
          "signature": "delta (Map PaneName (IDEPane delta))",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getPanesSt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getPanesSt",
          "package": "ltk",
          "partial": "Panes St",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getPanesSt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getUIAction",
          "package": "ltk",
          "signature": "String -\u003e (Action -\u003e a) -\u003e alpha a",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getUIAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getUIAction",
          "normalized": "String-\u003e(Action-\u003ea)-\u003eb a",
          "package": "ltk",
          "partial": "UIAction",
          "signature": "String-\u003e(Action-\u003ea)-\u003ealpha a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getUIAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getUiManager",
          "package": "ltk",
          "signature": "delta UIManager",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getUiManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getUiManager",
          "package": "ltk",
          "partial": "Ui Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getUiManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getWindows",
          "package": "ltk",
          "signature": "delta [Window]",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#getWindows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "getWindows",
          "normalized": "a[Window]",
          "package": "ltk",
          "partial": "Windows",
          "signature": "delta[Window]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:getWindows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "guiPropertiesFromName",
          "package": "ltk",
          "signature": "PaneName -\u003e alpha (PanePath, Connections)",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#guiPropertiesFromName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "guiPropertiesFromName",
          "normalized": "PaneName-\u003ea(PanePath,Connections)",
          "package": "ltk",
          "partial": "Properties From Name",
          "signature": "PaneName-\u003ealpha(PanePath,Connections)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:guiPropertiesFromName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "handleNotebookSwitch",
          "package": "ltk",
          "signature": "Notebook -\u003e Int -\u003e beta ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#handleNotebookSwitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "handleNotebookSwitch",
          "normalized": "Notebook-\u003eInt-\u003ea()",
          "package": "ltk",
          "partial": "Notebook Switch",
          "signature": "Notebook-\u003eInt-\u003ebeta()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:handleNotebookSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "initGtkRc",
          "package": "ltk",
          "signature": "IO ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#initGtkRc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "initGtkRc",
          "normalized": "IO()",
          "package": "ltk",
          "partial": "Gtk Rc",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:initGtkRc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the change mark or removes it\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "markLabel",
          "package": "ltk",
          "signature": "beta -\u003e alpha -\u003e Bool -\u003e IO ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#markLabel",
          "type": "function"
        },
        "index": {
          "description": "Add the change mark or removes it",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "markLabel",
          "normalized": "a-\u003eb-\u003eBool-\u003eIO()",
          "package": "ltk",
          "partial": "Label",
          "signature": "beta-\u003ealpha-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:markLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "mbPaneFromName",
          "package": "ltk",
          "signature": "PaneName -\u003e alpha (Maybe (IDEPane alpha))",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#mbPaneFromName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "mbPaneFromName",
          "normalized": "PaneName-\u003ea(Maybe(IDEPane a))",
          "package": "ltk",
          "partial": "Pane From Name",
          "signature": "PaneName-\u003ealpha(Maybe(IDEPane alpha))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:mbPaneFromName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "newGroupOrBringToFront",
          "package": "ltk",
          "signature": "String -\u003e PanePath -\u003e alpha (Maybe PanePath, Bool)",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#newGroupOrBringToFront",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "newGroupOrBringToFront",
          "normalized": "String-\u003ePanePath-\u003ea(Maybe PanePath,Bool)",
          "package": "ltk",
          "partial": "Group Or Bring To Front",
          "signature": "String-\u003ePanePath-\u003ealpha(Maybe PanePath,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:newGroupOrBringToFront"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new notebook,\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "newNotebook",
          "package": "ltk",
          "signature": "PanePath -\u003e alpha Notebook",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#newNotebook",
          "type": "function"
        },
        "index": {
          "description": "Construct new notebook",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "newNotebook",
          "normalized": "PanePath-\u003ea Notebook",
          "package": "ltk",
          "partial": "Notebook",
          "signature": "PanePath-\u003ealpha Notebook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:newNotebook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new notebook\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "newNotebook'",
          "package": "ltk",
          "signature": "IO Notebook",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#newNotebook%27",
          "type": "function"
        },
        "index": {
          "description": "Construct new notebook",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "newNotebook'",
          "package": "ltk",
          "partial": "Notebook'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:newNotebook-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "notebookInsertOrdered",
          "package": "ltk",
          "signature": "self -\u003e child -\u003e String -\u003e Maybe Label -\u003e Bool -\u003e alpha ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#notebookInsertOrdered",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "notebookInsertOrdered",
          "normalized": "a-\u003eb-\u003eString-\u003eMaybe Label-\u003eBool-\u003ec()",
          "package": "ltk",
          "partial": "Insert Ordered",
          "signature": "self-\u003echild-\u003eString-\u003eMaybe Label-\u003eBool-\u003ealpha()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:notebookInsertOrdered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "paneDirectionToPosType",
          "package": "ltk",
          "signature": "PaneDirection -\u003e PositionType",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#paneDirectionToPosType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "paneDirectionToPosType",
          "normalized": "PaneDirection-\u003ePositionType",
          "package": "ltk",
          "partial": "Direction To Pos Type",
          "signature": "PaneDirection-\u003ePositionType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:paneDirectionToPosType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "paneFromName",
          "package": "ltk",
          "signature": "PaneName -\u003e alpha (IDEPane alpha)",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#paneFromName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "paneFromName",
          "normalized": "PaneName-\u003ea(IDEPane a)",
          "package": "ltk",
          "partial": "From Name",
          "signature": "PaneName-\u003ealpha(IDEPane alpha)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:paneFromName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "posTypeToPaneDirection",
          "package": "ltk",
          "signature": "PositionType -\u003e PaneDirection",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#posTypeToPaneDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "posTypeToPaneDirection",
          "normalized": "PositionType-\u003ePaneDirection",
          "package": "ltk",
          "partial": "Type To Pane Direction",
          "signature": "PositionType-\u003ePaneDirection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:posTypeToPaneDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "removePaneAdmin",
          "package": "ltk",
          "signature": "alpha -\u003e delta ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#removePaneAdmin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "removePaneAdmin",
          "normalized": "a-\u003eb()",
          "package": "ltk",
          "partial": "Pane Admin",
          "signature": "alpha-\u003edelta()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:removePaneAdmin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "setActivePane",
          "package": "ltk",
          "signature": "Maybe (PaneName, Connections) -\u003e delta ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#setActivePane",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "setActivePane",
          "normalized": "Maybe(PaneName,Connections)-\u003ea()",
          "package": "ltk",
          "partial": "Active Pane",
          "signature": "Maybe(PaneName,Connections)-\u003edelta()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:setActivePane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo notebooks can be collapsed to one\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewCollapse",
          "package": "ltk",
          "signature": "alpha ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#viewCollapse",
          "type": "function"
        },
        "index": {
          "description": "Two notebooks can be collapsed to one",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewCollapse",
          "normalized": "a()",
          "package": "ltk",
          "partial": "Collapse",
          "signature": "alpha()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewCollapse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewCollapse'",
          "package": "ltk",
          "signature": "PanePath -\u003e alpha ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#viewCollapse%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewCollapse'",
          "normalized": "PanePath-\u003ea()",
          "package": "ltk",
          "partial": "Collapse'",
          "signature": "PanePath-\u003ealpha()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewCollapse-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewDetach",
          "package": "ltk",
          "signature": "alpha (Maybe (Window, Widget))",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#viewDetach",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewDetach",
          "normalized": "a(Maybe(Window,Widget))",
          "package": "ltk",
          "partial": "Detach",
          "signature": "alpha(Maybe(Window,Widget))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewDetach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewDetach'",
          "package": "ltk",
          "signature": "PanePath -\u003e String -\u003e alpha (Maybe (Window, Widget))",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#viewDetach%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewDetach'",
          "normalized": "PanePath-\u003eString-\u003ea(Maybe(Window,Widget))",
          "package": "ltk",
          "partial": "Detach'",
          "signature": "PanePath-\u003eString-\u003ealpha(Maybe(Window,Widget))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewDetach-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves the activePane in the given direction, if possible\n | If their are many possibilities choose the leftmost and topmost\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewMove",
          "package": "ltk",
          "signature": "PaneDirection -\u003e beta ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#viewMove",
          "type": "function"
        },
        "index": {
          "description": "Moves the activePane in the given direction if possible If their are many possibilities choose the leftmost and topmost",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewMove",
          "normalized": "PaneDirection-\u003ea()",
          "package": "ltk",
          "partial": "Move",
          "signature": "PaneDirection-\u003ebeta()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewMove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewNest",
          "package": "ltk",
          "signature": "String -\u003e alpha ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#viewNest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewNest",
          "normalized": "String-\u003ea()",
          "package": "ltk",
          "partial": "Nest",
          "signature": "String-\u003ealpha()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewNest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewNest'",
          "package": "ltk",
          "signature": "PanePath -\u003e String -\u003e alpha ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#viewNest%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewNest'",
          "normalized": "PanePath-\u003eString-\u003ea()",
          "package": "ltk",
          "partial": "Nest'",
          "signature": "PanePath-\u003eString-\u003ealpha()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewNest-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewNewGroup",
          "package": "ltk",
          "signature": "alpha ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#viewNewGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewNewGroup",
          "normalized": "a()",
          "package": "ltk",
          "partial": "New Group",
          "signature": "alpha()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewNewGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewSplit'",
          "package": "ltk",
          "signature": "PanePath -\u003e Direction -\u003e alpha ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#viewSplit%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewSplit'",
          "normalized": "PanePath-\u003eDirection-\u003ea()",
          "package": "ltk",
          "partial": "Split'",
          "signature": "PanePath-\u003eDirection-\u003ealpha()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewSplit-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the currently active pane in horizontal direction\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewSplitHorizontal",
          "package": "ltk",
          "signature": "alpha ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#viewSplitHorizontal",
          "type": "function"
        },
        "index": {
          "description": "Split the currently active pane in horizontal direction",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewSplitHorizontal",
          "normalized": "a()",
          "package": "ltk",
          "partial": "Split Horizontal",
          "signature": "alpha()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewSplitHorizontal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the currently active pane in vertical direction\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewSplitVertical",
          "package": "ltk",
          "signature": "alpha ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#viewSplitVertical",
          "type": "function"
        },
        "index": {
          "description": "Split the currently active pane in vertical direction",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewSplitVertical",
          "normalized": "a()",
          "package": "ltk",
          "partial": "Split Vertical",
          "signature": "alpha()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewSplitVertical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToggle the tabs of the current notebook\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewSwitchTabs",
          "package": "ltk",
          "signature": "alpha ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#viewSwitchTabs",
          "type": "function"
        },
        "index": {
          "description": "Toggle the tabs of the current notebook",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewSwitchTabs",
          "normalized": "a()",
          "package": "ltk",
          "partial": "Switch Tabs",
          "signature": "alpha()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewSwitchTabs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the tab position in the current notebook\n\u003c/p\u003e",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewTabsPos",
          "package": "ltk",
          "signature": "PositionType -\u003e alpha ()",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#viewTabsPos",
          "type": "function"
        },
        "index": {
          "description": "Sets the tab position in the current notebook",
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "viewTabsPos",
          "normalized": "PositionType-\u003ea()",
          "package": "ltk",
          "partial": "Tabs Pos",
          "signature": "PositionType-\u003ealpha()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:viewTabsPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "widgetGet",
          "package": "ltk",
          "signature": "[String] -\u003e (Widget -\u003e b) -\u003e alpha b",
          "source": "src/Graphics-UI-Frame-ViewFrame.html#widgetGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI Frame ViewFrame",
          "module": "Graphics.UI.Frame.ViewFrame",
          "name": "widgetGet",
          "normalized": "[String]-\u003e(Widget-\u003ea)-\u003eb a",
          "package": "ltk",
          "partial": "Get",
          "signature": "[String]-\u003e(Widget-\u003eb)-\u003ealpha b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Graphics-UI-Frame-ViewFrame.html#v:widgetGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for missing base functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MyMissing",
          "name": "MyMissing",
          "package": "ltk",
          "source": "src/MyMissing.html",
          "type": "module"
        },
        "index": {
          "description": "Module for missing base functions",
          "hierarchy": "MyMissing",
          "module": "MyMissing",
          "name": "MyMissing",
          "package": "ltk",
          "partial": "My Missing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/MyMissing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MyMissing",
          "name": "allOf",
          "package": "ltk",
          "signature": "[alpha]",
          "source": "src/MyMissing.html#allOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "MyMissing",
          "module": "MyMissing",
          "name": "allOf",
          "normalized": "[a]",
          "package": "ltk",
          "partial": "Of",
          "signature": "[alpha]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/MyMissing.html#v:allOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MyMissing",
          "name": "forceHead",
          "package": "ltk",
          "signature": "[alpha] -\u003e String -\u003e alpha",
          "source": "src/MyMissing.html#forceHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "MyMissing",
          "module": "MyMissing",
          "name": "forceHead",
          "normalized": "[a]-\u003eString-\u003ea",
          "package": "ltk",
          "partial": "Head",
          "signature": "[alpha]-\u003eString-\u003ealpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/MyMissing.html#v:forceHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MyMissing",
          "name": "forceJust",
          "package": "ltk",
          "signature": "Maybe alpha -\u003e String -\u003e alpha",
          "source": "src/MyMissing.html#forceJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "MyMissing",
          "module": "MyMissing",
          "name": "forceJust",
          "normalized": "Maybe a-\u003eString-\u003ea",
          "package": "ltk",
          "partial": "Just",
          "signature": "Maybe alpha-\u003eString-\u003ealpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/MyMissing.html#v:forceJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MyMissing",
          "name": "nonEmptyLines",
          "package": "ltk",
          "signature": "String -\u003e [String]",
          "source": "src/MyMissing.html#nonEmptyLines",
          "type": "function"
        },
        "index": {
          "hierarchy": "MyMissing",
          "module": "MyMissing",
          "name": "nonEmptyLines",
          "normalized": "String-\u003e[String]",
          "package": "ltk",
          "partial": "Empty Lines",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/MyMissing.html#v:nonEmptyLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MyMissing",
          "name": "replace",
          "package": "ltk",
          "signature": "[a] -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/MyMissing.html#replace",
          "type": "function"
        },
        "index": {
          "hierarchy": "MyMissing",
          "module": "MyMissing",
          "name": "replace",
          "normalized": "[a]-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "ltk",
          "signature": "[a]-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/MyMissing.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MyMissing",
          "name": "split",
          "package": "ltk",
          "signature": "a -\u003e [a] -\u003e [[a]]",
          "source": "src/MyMissing.html#split",
          "type": "function"
        },
        "index": {
          "hierarchy": "MyMissing",
          "module": "MyMissing",
          "name": "split",
          "normalized": "a-\u003e[a]-\u003e[[a]]",
          "package": "ltk",
          "signature": "a-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/MyMissing.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove leading and trailing spaces\n\u003c/p\u003e",
          "module": "MyMissing",
          "name": "trim",
          "package": "ltk",
          "signature": "String -\u003e String",
          "source": "src/MyMissing.html#trim",
          "type": "function"
        },
        "index": {
          "description": "remove leading and trailing spaces",
          "hierarchy": "MyMissing",
          "module": "MyMissing",
          "name": "trim",
          "normalized": "String-\u003eString",
          "package": "ltk",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/MyMissing.html#v:trim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for saving and restoring preferences and settings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PrinterParser",
          "name": "PrinterParser",
          "package": "ltk",
          "source": "src/Text-PrinterParser.html",
          "type": "module"
        },
        "index": {
          "description": "Module for saving and restoring preferences and settings",
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "PrinterParser",
          "package": "ltk",
          "partial": "Printer Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "FieldDescriptionS",
          "package": "ltk",
          "source": "src/Text-PrinterParser.html#FieldDescriptionS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "FieldDescriptionS",
          "package": "ltk",
          "partial": "Field Description",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#t:FieldDescriptionS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "MkFieldDescriptionS",
          "package": "ltk",
          "source": "src/Text-PrinterParser.html#MkFieldDescriptionS",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "MkFieldDescriptionS",
          "package": "ltk",
          "partial": "Mk Field Description",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#t:MkFieldDescriptionS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "Parser",
          "package": "ltk",
          "source": "src/Text-PrinterParser.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "Parser",
          "package": "ltk",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThings that can be pretty-printed\n\u003c/p\u003e",
          "module": "Text.PrinterParser",
          "name": "Pretty",
          "package": "ltk",
          "source": "src/Text-PrinterParser.html#Pretty",
          "type": "class"
        },
        "index": {
          "description": "Things that can be pretty-printed",
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "Pretty",
          "package": "ltk",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "Printer",
          "package": "ltk",
          "source": "src/Text-PrinterParser.html#Printer",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "Printer",
          "package": "ltk",
          "partial": "Printer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#t:Printer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "FDS",
          "package": "ltk",
          "signature": "FDS",
          "source": "src/Text-PrinterParser.html#FieldDescriptionS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "FDS",
          "package": "ltk",
          "partial": "FDS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:FDS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "applyFieldParsers",
          "package": "ltk",
          "signature": "a -\u003e [a -\u003e CharParser () a] -\u003e CharParser () a",
          "source": "src/Text-PrinterParser.html#applyFieldParsers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "applyFieldParsers",
          "normalized": "a-\u003e[a-\u003eCharParser()a]-\u003eCharParser()a",
          "package": "ltk",
          "partial": "Field Parsers",
          "signature": "a-\u003e[a-\u003eCharParser()a]-\u003eCharParser()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:applyFieldParsers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "boolParser",
          "package": "ltk",
          "signature": "CharParser () Bool",
          "source": "src/Text-PrinterParser.html#boolParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "boolParser",
          "normalized": "CharParser()Bool",
          "package": "ltk",
          "partial": "Parser",
          "signature": "CharParser()Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:boolParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "colon",
          "package": "ltk",
          "signature": "CharParser st String",
          "source": "src/Text-PrinterParser.html#identifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "colon",
          "package": "ltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "colorParser",
          "package": "ltk",
          "signature": "CharParser () Color",
          "source": "src/Text-PrinterParser.html#colorParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "colorParser",
          "normalized": "CharParser()Color",
          "package": "ltk",
          "partial": "Parser",
          "signature": "CharParser()Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:colorParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "emptyParser",
          "package": "ltk",
          "signature": "CharParser () ()",
          "source": "src/Text-PrinterParser.html#emptyParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "emptyParser",
          "normalized": "CharParser()()",
          "package": "ltk",
          "partial": "Parser",
          "signature": "CharParser()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:emptyParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "emptyPrinter",
          "package": "ltk",
          "signature": "() -\u003e Doc",
          "source": "src/Text-PrinterParser.html#emptyPrinter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "emptyPrinter",
          "normalized": "()-\u003eDoc",
          "package": "ltk",
          "partial": "Printer",
          "signature": "()-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:emptyPrinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "fieldParser",
          "package": "ltk",
          "signature": "alpha -\u003e CharParser () alpha",
          "source": "src/Text-PrinterParser.html#FieldDescriptionS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "fieldParser",
          "normalized": "a-\u003eCharParser()a",
          "package": "ltk",
          "partial": "Parser",
          "signature": "alpha-\u003eCharParser()alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:fieldParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "fieldPrinter",
          "package": "ltk",
          "signature": "alpha -\u003e Doc",
          "source": "src/Text-PrinterParser.html#FieldDescriptionS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "fieldPrinter",
          "normalized": "a-\u003eDoc",
          "package": "ltk",
          "partial": "Printer",
          "signature": "alpha-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:fieldPrinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "identifier",
          "package": "ltk",
          "signature": "CharParser st String",
          "source": "src/Text-PrinterParser.html#identifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "identifier",
          "package": "ltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "intParser",
          "package": "ltk",
          "signature": "CharParser () Int",
          "source": "src/Text-PrinterParser.html#intParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "intParser",
          "normalized": "CharParser()Int",
          "package": "ltk",
          "partial": "Parser",
          "signature": "CharParser()Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:intParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "lineParser",
          "package": "ltk",
          "signature": "CharParser () String",
          "source": "src/Text-PrinterParser.html#lineParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "lineParser",
          "normalized": "CharParser()String",
          "package": "ltk",
          "partial": "Parser",
          "signature": "CharParser()String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:lineParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "maybePP",
          "package": "ltk",
          "signature": "(a -\u003e Doc) -\u003e Maybe a -\u003e Doc",
          "source": "src/Text-PrinterParser.html#maybePP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "maybePP",
          "normalized": "(a-\u003eDoc)-\u003eMaybe a-\u003eDoc",
          "package": "ltk",
          "partial": "PP",
          "signature": "(a-\u003eDoc)-\u003eMaybe a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:maybePP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "mkFieldS",
          "package": "ltk",
          "signature": "MkFieldDescriptionS alpha beta",
          "source": "src/Text-PrinterParser.html#mkFieldS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "mkFieldS",
          "package": "ltk",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:mkFieldS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "pairParser",
          "package": "ltk",
          "signature": "CharParser () alpha -\u003e CharParser () (alpha, alpha)",
          "source": "src/Text-PrinterParser.html#pairParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "pairParser",
          "normalized": "CharParser()a-\u003eCharParser()(a,a)",
          "package": "ltk",
          "partial": "Parser",
          "signature": "CharParser()alpha-\u003eCharParser()(alpha,alpha)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:pairParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "parameters",
          "package": "ltk",
          "signature": "Parameters",
          "source": "src/Text-PrinterParser.html#FieldDescriptionS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "parameters",
          "package": "ltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:parameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "parseFields",
          "package": "ltk",
          "signature": "alpha -\u003e [FieldDescriptionS alpha] -\u003e CharParser () alpha",
          "source": "src/Text-PrinterParser.html#parseFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "parseFields",
          "normalized": "a-\u003e[FieldDescriptionS a]-\u003eCharParser()a",
          "package": "ltk",
          "partial": "Fields",
          "signature": "alpha-\u003e[FieldDescriptionS alpha]-\u003eCharParser()alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:parseFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print something in isolation.\n\u003c/p\u003e",
          "module": "Text.PrinterParser",
          "name": "pretty",
          "package": "ltk",
          "signature": "a -\u003e Doc",
          "source": "src/Text-PrinterParser.html#pretty",
          "type": "method"
        },
        "index": {
          "description": "Pretty-print something in isolation",
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "pretty",
          "normalized": "a-\u003eDoc",
          "package": "ltk",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print something in a precedence context.\n\u003c/p\u003e",
          "module": "Text.PrinterParser",
          "name": "prettyPrec",
          "package": "ltk",
          "signature": "Int -\u003e a -\u003e Doc",
          "source": "src/Text-PrinterParser.html#prettyPrec",
          "type": "method"
        },
        "index": {
          "description": "Pretty-print something in precedence context",
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "prettyPrec",
          "normalized": "Int-\u003ea-\u003eDoc",
          "package": "ltk",
          "partial": "Prec",
          "signature": "Int-\u003ea-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:prettyPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epretty-print with the default style and \u003ccode\u003edefaultMode\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrinterParser",
          "name": "prettyPrint",
          "package": "ltk",
          "signature": "a -\u003e String",
          "source": "src/Text-PrinterParser.html#prettyPrint",
          "type": "function"
        },
        "index": {
          "description": "pretty-print with the default style and defaultMode",
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "prettyPrint",
          "normalized": "a-\u003eString",
          "package": "ltk",
          "partial": "Print",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:prettyPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "readFields",
          "package": "ltk",
          "signature": "FilePath -\u003e [FieldDescriptionS alpha] -\u003e alpha -\u003e IO alpha",
          "source": "src/Text-PrinterParser.html#readFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "readFields",
          "normalized": "FilePath-\u003e[FieldDescriptionS a]-\u003ea-\u003eIO a",
          "package": "ltk",
          "partial": "Fields",
          "signature": "FilePath-\u003e[FieldDescriptionS alpha]-\u003ealpha-\u003eIO alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:readFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "readParser",
          "package": "ltk",
          "signature": "CharParser () a",
          "source": "src/Text-PrinterParser.html#readParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "readParser",
          "normalized": "CharParser()a",
          "package": "ltk",
          "partial": "Parser",
          "signature": "CharParser()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:readParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "showFields",
          "package": "ltk",
          "signature": "alpha -\u003e [FieldDescriptionS alpha] -\u003e String",
          "source": "src/Text-PrinterParser.html#showFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "showFields",
          "normalized": "a-\u003e[FieldDescriptionS a]-\u003eString",
          "package": "ltk",
          "partial": "Fields",
          "signature": "alpha-\u003e[FieldDescriptionS alpha]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:showFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "stringParser",
          "package": "ltk",
          "signature": "CharParser () String",
          "source": "src/Text-PrinterParser.html#stringParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "stringParser",
          "normalized": "CharParser()String",
          "package": "ltk",
          "partial": "Parser",
          "signature": "CharParser()String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:stringParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "symbol",
          "package": "ltk",
          "signature": "String -\u003e CharParser st String",
          "source": "src/Text-PrinterParser.html#symbol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "symbol",
          "normalized": "String-\u003eCharParser a String",
          "package": "ltk",
          "signature": "String-\u003eCharParser st String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "whiteSpace",
          "package": "ltk",
          "signature": "CharParser st ()",
          "source": "src/Text-PrinterParser.html#whiteSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "whiteSpace",
          "normalized": "CharParser a()",
          "package": "ltk",
          "partial": "Space",
          "signature": "CharParser st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:whiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrinterParser",
          "name": "writeFields",
          "package": "ltk",
          "signature": "FilePath -\u003e alpha -\u003e [FieldDescriptionS alpha] -\u003e IO ()",
          "source": "src/Text-PrinterParser.html#writeFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrinterParser",
          "module": "Text.PrinterParser",
          "name": "writeFields",
          "normalized": "FilePath-\u003ea-\u003e[FieldDescriptionS a]-\u003eIO()",
          "package": "ltk",
          "partial": "Fields",
          "signature": "FilePath-\u003ealpha-\u003e[FieldDescriptionS alpha]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ltk/docs/Text-PrinterParser.html#v:writeFields"
      }
    }
  ]
]