[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#",
      "description": {
        "fct-module": "Data.Handler",
        "fct-package": "event-handlers",
        "fct-signature": "module",
        "fct-source": "src/Data-Handler.html",
        "fct-type": "module",
        "title": "Handler"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Handler",
        "module": "Data.Handler",
        "name": "Handler",
        "normalized": "",
        "package": "event-handlers",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#t:HandlerID",
      "description": {
        "fct-descr": "\u003cp\u003eAn opaque identifier for handlers, useful for removing them from a set\n later.\n\u003c/p\u003e",
        "fct-module": "Data.Handler",
        "fct-package": "event-handlers",
        "fct-signature": "data",
        "fct-source": "src/Data-Handler.html#HandlerID",
        "fct-type": "data",
        "title": "HandlerID"
      },
      "index": {
        "description": "An opaque identifier for handlers useful for removing them from set later",
        "hierarchy": "Data Handler",
        "module": "Data.Handler",
        "name": "HandlerID",
        "normalized": "",
        "package": "event-handlers",
        "partial": "Handler ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#t:HandlerSet",
      "description": {
        "fct-descr": "\u003cp\u003eA collection of handlers that can be fired in a batch.\n Consists of a collection of handlers and a sequencing rule that \n determines how multiple handlers are ordered and their results\n threaded or aggregated.\n\u003c/p\u003e",
        "fct-module": "Data.Handler",
        "fct-package": "event-handlers",
        "fct-signature": "data",
        "fct-source": "src/Data-Handler.html#HandlerSet",
        "fct-type": "data",
        "title": "HandlerSet"
      },
      "index": {
        "description": "collection of handlers that can be fired in batch Consists of collection of handlers and sequencing rule that determines how multiple handlers are ordered and their results threaded or aggregated",
        "hierarchy": "Data Handler",
        "module": "Data.Handler",
        "name": "HandlerSet",
        "normalized": "",
        "package": "event-handlers",
        "partial": "Handler Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#v:addHandlerToSet",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a handler to a set and return the updated set and the assigned \u003ccode\u003e\u003ca\u003eHandlerID\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Handler",
        "fct-package": "event-handlers",
        "fct-signature": "(a -\u003e m b) -\u003e HandlerSet m a b -\u003e (HandlerSet m a b, HandlerID)",
        "fct-source": "src/Data-Handler.html#addHandlerToSet",
        "fct-type": "function",
        "title": "addHandlerToSet"
      },
      "index": {
        "description": "Add handler to set and return the updated set and the assigned HandlerID",
        "hierarchy": "Data Handler",
        "module": "Data.Handler",
        "name": "addHandlerToSet",
        "normalized": "(a-\u003eb c)-\u003eHandlerSet b a c-\u003e(HandlerSet b a c,HandlerID)",
        "package": "event-handlers",
        "partial": "Handler To Set",
        "signature": "(a-\u003em b)-\u003eHandlerSet m a b-\u003e(HandlerSet m a b,HandlerID)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#v:emptyHandlerSet",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new handler set with a simple default sequencer\n  (\u003ccode\u003esequenceHandlers\u003c/code\u003e ())\n\u003c/p\u003e",
        "fct-module": "Data.Handler",
        "fct-package": "event-handlers",
        "fct-signature": "HandlerSet m a ()",
        "fct-source": "src/Data-Handler.html#emptyHandlerSet",
        "fct-type": "function",
        "title": "emptyHandlerSet"
      },
      "index": {
        "description": "Create new handler set with simple default sequencer sequenceHandlers",
        "hierarchy": "Data Handler",
        "module": "Data.Handler",
        "name": "emptyHandlerSet",
        "normalized": "HandlerSet a b()",
        "package": "event-handlers",
        "partial": "Handler Set",
        "signature": "HandlerSet m a()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#v:emptyHandlerSetWithSequencer",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new handler set using the provided function to coordinate\n  the dispatch of the handlers\n\u003c/p\u003e",
        "fct-module": "Data.Handler",
        "fct-package": "event-handlers",
        "fct-signature": "(a -\u003e [a -\u003e m b] -\u003e m b) -\u003e HandlerSet m a b",
        "fct-source": "src/Data-Handler.html#emptyHandlerSetWithSequencer",
        "fct-type": "function",
        "title": "emptyHandlerSetWithSequencer"
      },
      "index": {
        "description": "Create new handler set using the provided function to coordinate the dispatch of the handlers",
        "hierarchy": "Data Handler",
        "module": "Data.Handler",
        "name": "emptyHandlerSetWithSequencer",
        "normalized": "(a-\u003e[a-\u003eb c]-\u003eb c)-\u003eHandlerSet b a c",
        "package": "event-handlers",
        "partial": "Handler Set With Sequencer",
        "signature": "(a-\u003e[a-\u003em b]-\u003em b)-\u003eHandlerSet m a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#v:invokeHandlers",
      "description": {
        "fct-descr": "\u003cp\u003eInvoke the handlers in a \u003ccode\u003e\u003ca\u003eHandlerSet\u003c/a\u003e\u003c/code\u003e with the provided input.\n\u003c/p\u003e",
        "fct-module": "Data.Handler",
        "fct-package": "event-handlers",
        "fct-signature": "HandlerSet m a b -\u003e a -\u003e m b",
        "fct-source": "src/Data-Handler.html#invokeHandlers",
        "fct-type": "function",
        "title": "invokeHandlers"
      },
      "index": {
        "description": "Invoke the handlers in HandlerSet with the provided input",
        "hierarchy": "Data Handler",
        "module": "Data.Handler",
        "name": "invokeHandlers",
        "normalized": "HandlerSet a b c-\u003eb-\u003ea c",
        "package": "event-handlers",
        "partial": "Handlers",
        "signature": "HandlerSet m a b-\u003ea-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#v:removeHandlerFromSet",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to remove a handler from a set (based on its \u003ccode\u003e\u003ca\u003eHandlerID\u003c/a\u003e\u003c/code\u003e), returning\n the modified set and the handler removed, if any.\n\u003c/p\u003e",
        "fct-module": "Data.Handler",
        "fct-package": "event-handlers",
        "fct-signature": "HandlerID -\u003e HandlerSet m a b -\u003e (HandlerSet m a b, Maybe (a -\u003e m b))",
        "fct-source": "src/Data-Handler.html#removeHandlerFromSet",
        "fct-type": "function",
        "title": "removeHandlerFromSet"
      },
      "index": {
        "description": "Attempt to remove handler from set based on its HandlerID returning the modified set and the handler removed if any",
        "hierarchy": "Data Handler",
        "module": "Data.Handler",
        "name": "removeHandlerFromSet",
        "normalized": "HandlerID-\u003eHandlerSet a b c-\u003e(HandlerSet a b c,Maybe(b-\u003ea c))",
        "package": "event-handlers",
        "partial": "Handler From Set",
        "signature": "HandlerID-\u003eHandlerSet m a b-\u003e(HandlerSet m a b,Maybe(a-\u003em b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#v:setHandlerSequencer",
      "description": {
        "fct-descr": "\u003cp\u003eReplace the handler sequencing rule in a \u003ccode\u003e\u003ca\u003eHandlerSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Handler",
        "fct-package": "event-handlers",
        "fct-signature": "(a -\u003e [a -\u003e m b] -\u003e m b) -\u003e HandlerSet m a b -\u003e HandlerSet m a b",
        "fct-source": "src/Data-Handler.html#setHandlerSequencer",
        "fct-type": "function",
        "title": "setHandlerSequencer"
      },
      "index": {
        "description": "Replace the handler sequencing rule in HandlerSet",
        "hierarchy": "Data Handler",
        "module": "Data.Handler",
        "name": "setHandlerSequencer",
        "normalized": "(a-\u003e[a-\u003eb c]-\u003eb c)-\u003eHandlerSet b a c-\u003eHandlerSet b a c",
        "package": "event-handlers",
        "partial": "Handler Sequencer",
        "signature": "(a-\u003e[a-\u003em b]-\u003em b)-\u003eHandlerSet m a b-\u003eHandlerSet m a b"
      }
    }
  }
]