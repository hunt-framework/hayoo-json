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
        "word": "event-handlers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Handler",
          "name": "Handler",
          "package": "event-handlers",
          "source": "src/Data-Handler.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Handler",
          "module": "Data.Handler",
          "name": "Handler",
          "package": "event-handlers",
          "partial": "Handler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque identifier for handlers, useful for removing them from a set\n later.\n\u003c/p\u003e",
          "module": "Data.Handler",
          "name": "HandlerID",
          "package": "event-handlers",
          "source": "src/Data-Handler.html#HandlerID",
          "type": "data"
        },
        "index": {
          "description": "An opaque identifier for handlers useful for removing them from set later",
          "hierarchy": "Data Handler",
          "module": "Data.Handler",
          "name": "HandlerID",
          "package": "event-handlers",
          "partial": "Handler ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#t:HandlerID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection of handlers that can be fired in a batch.\n Consists of a collection of handlers and a sequencing rule that \n determines how multiple handlers are ordered and their results\n threaded or aggregated.\n\u003c/p\u003e",
          "module": "Data.Handler",
          "name": "HandlerSet",
          "package": "event-handlers",
          "source": "src/Data-Handler.html#HandlerSet",
          "type": "data"
        },
        "index": {
          "description": "collection of handlers that can be fired in batch Consists of collection of handlers and sequencing rule that determines how multiple handlers are ordered and their results threaded or aggregated",
          "hierarchy": "Data Handler",
          "module": "Data.Handler",
          "name": "HandlerSet",
          "package": "event-handlers",
          "partial": "Handler Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#t:HandlerSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a handler to a set and return the updated set and the assigned \u003ccode\u003e\u003ca\u003eHandlerID\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Handler",
          "name": "addHandlerToSet",
          "package": "event-handlers",
          "signature": "(a -\u003e m b) -\u003e HandlerSet m a b -\u003e (HandlerSet m a b, HandlerID)",
          "source": "src/Data-Handler.html#addHandlerToSet",
          "type": "function"
        },
        "index": {
          "description": "Add handler to set and return the updated set and the assigned HandlerID",
          "hierarchy": "Data Handler",
          "module": "Data.Handler",
          "name": "addHandlerToSet",
          "normalized": "(a-\u003eb c)-\u003eHandlerSet b a c-\u003e(HandlerSet b a c,HandlerID)",
          "package": "event-handlers",
          "partial": "Handler To Set",
          "signature": "(a-\u003em b)-\u003eHandlerSet m a b-\u003e(HandlerSet m a b,HandlerID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#v:addHandlerToSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new handler set with a simple default sequencer\n  (\u003ccode\u003esequenceHandlers\u003c/code\u003e ())\n\u003c/p\u003e",
          "module": "Data.Handler",
          "name": "emptyHandlerSet",
          "package": "event-handlers",
          "signature": "HandlerSet m a ()",
          "source": "src/Data-Handler.html#emptyHandlerSet",
          "type": "function"
        },
        "index": {
          "description": "Create new handler set with simple default sequencer sequenceHandlers",
          "hierarchy": "Data Handler",
          "module": "Data.Handler",
          "name": "emptyHandlerSet",
          "normalized": "HandlerSet a b()",
          "package": "event-handlers",
          "partial": "Handler Set",
          "signature": "HandlerSet m a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#v:emptyHandlerSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new handler set using the provided function to coordinate\n  the dispatch of the handlers\n\u003c/p\u003e",
          "module": "Data.Handler",
          "name": "emptyHandlerSetWithSequencer",
          "package": "event-handlers",
          "signature": "(a -\u003e [a -\u003e m b] -\u003e m b) -\u003e HandlerSet m a b",
          "source": "src/Data-Handler.html#emptyHandlerSetWithSequencer",
          "type": "function"
        },
        "index": {
          "description": "Create new handler set using the provided function to coordinate the dispatch of the handlers",
          "hierarchy": "Data Handler",
          "module": "Data.Handler",
          "name": "emptyHandlerSetWithSequencer",
          "normalized": "(a-\u003e[a-\u003eb c]-\u003eb c)-\u003eHandlerSet b a c",
          "package": "event-handlers",
          "partial": "Handler Set With Sequencer",
          "signature": "(a-\u003e[a-\u003em b]-\u003em b)-\u003eHandlerSet m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#v:emptyHandlerSetWithSequencer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvoke the handlers in a \u003ccode\u003e\u003ca\u003eHandlerSet\u003c/a\u003e\u003c/code\u003e with the provided input.\n\u003c/p\u003e",
          "module": "Data.Handler",
          "name": "invokeHandlers",
          "package": "event-handlers",
          "signature": "HandlerSet m a b -\u003e a -\u003e m b",
          "source": "src/Data-Handler.html#invokeHandlers",
          "type": "function"
        },
        "index": {
          "description": "Invoke the handlers in HandlerSet with the provided input",
          "hierarchy": "Data Handler",
          "module": "Data.Handler",
          "name": "invokeHandlers",
          "normalized": "HandlerSet a b c-\u003eb-\u003ea c",
          "package": "event-handlers",
          "partial": "Handlers",
          "signature": "HandlerSet m a b-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#v:invokeHandlers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to remove a handler from a set (based on its \u003ccode\u003e\u003ca\u003eHandlerID\u003c/a\u003e\u003c/code\u003e), returning\n the modified set and the handler removed, if any.\n\u003c/p\u003e",
          "module": "Data.Handler",
          "name": "removeHandlerFromSet",
          "package": "event-handlers",
          "signature": "HandlerID -\u003e HandlerSet m a b -\u003e (HandlerSet m a b, Maybe (a -\u003e m b))",
          "source": "src/Data-Handler.html#removeHandlerFromSet",
          "type": "function"
        },
        "index": {
          "description": "Attempt to remove handler from set based on its HandlerID returning the modified set and the handler removed if any",
          "hierarchy": "Data Handler",
          "module": "Data.Handler",
          "name": "removeHandlerFromSet",
          "normalized": "HandlerID-\u003eHandlerSet a b c-\u003e(HandlerSet a b c,Maybe(b-\u003ea c))",
          "package": "event-handlers",
          "partial": "Handler From Set",
          "signature": "HandlerID-\u003eHandlerSet m a b-\u003e(HandlerSet m a b,Maybe(a-\u003em b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#v:removeHandlerFromSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the handler sequencing rule in a \u003ccode\u003e\u003ca\u003eHandlerSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Handler",
          "name": "setHandlerSequencer",
          "package": "event-handlers",
          "signature": "(a -\u003e [a -\u003e m b] -\u003e m b) -\u003e HandlerSet m a b -\u003e HandlerSet m a b",
          "source": "src/Data-Handler.html#setHandlerSequencer",
          "type": "function"
        },
        "index": {
          "description": "Replace the handler sequencing rule in HandlerSet",
          "hierarchy": "Data Handler",
          "module": "Data.Handler",
          "name": "setHandlerSequencer",
          "normalized": "(a-\u003e[a-\u003eb c]-\u003eb c)-\u003eHandlerSet b a c-\u003eHandlerSet b a c",
          "package": "event-handlers",
          "partial": "Handler Sequencer",
          "signature": "(a-\u003e[a-\u003em b]-\u003em b)-\u003eHandlerSet m a b-\u003eHandlerSet m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-handlers/docs/Data-Handler.html#v:setHandlerSequencer"
      }
    }
  ]
]