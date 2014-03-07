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
        "word": "reactive-io"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.IO",
          "name": "IO",
          "package": "reactive-io",
          "source": "src/Reactive-IO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Reactive IO",
          "module": "Reactive.IO",
          "name": "IO",
          "package": "reactive-io",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reactive-io/docs/Reactive-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.IO",
          "name": "Event",
          "package": "reactive-io",
          "source": "src/Reactive-IO.html#Event",
          "type": "data"
        },
        "index": {
          "hierarchy": "Reactive IO",
          "module": "Reactive.IO",
          "name": "Event",
          "package": "reactive-io",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reactive-io/docs/Reactive-IO.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.IO",
          "name": "Signal",
          "package": "reactive-io",
          "source": "src/Reactive-IO.html#Signal",
          "type": "data"
        },
        "index": {
          "hierarchy": "Reactive IO",
          "module": "Reactive.IO",
          "name": "Signal",
          "package": "reactive-io",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reactive-io/docs/Reactive-IO.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.IO",
          "name": "accumE",
          "package": "reactive-io",
          "signature": "a -\u003e Event (a -\u003e a) -\u003e Event a",
          "source": "src/Reactive-IO.html#accumE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive IO",
          "module": "Reactive.IO",
          "name": "accumE",
          "normalized": "a-\u003eEvent(a-\u003ea)-\u003eEvent a",
          "package": "reactive-io",
          "signature": "a-\u003eEvent(a-\u003ea)-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-io/docs/Reactive-IO.html#v:accumE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.IO",
          "name": "apply",
          "package": "reactive-io",
          "signature": "Signal (a -\u003e b) -\u003e Event a -\u003e Event b",
          "source": "src/Reactive-IO.html#apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive IO",
          "module": "Reactive.IO",
          "name": "apply",
          "normalized": "Signal(a-\u003eb)-\u003eEvent a-\u003eEvent b",
          "package": "reactive-io",
          "signature": "Signal(a-\u003eb)-\u003eEvent a-\u003eEvent b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-io/docs/Reactive-IO.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.IO",
          "name": "execute",
          "package": "reactive-io",
          "signature": "Event (IO ()) -\u003e IO ()",
          "source": "src/Reactive-IO.html#execute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive IO",
          "module": "Reactive.IO",
          "name": "execute",
          "normalized": "Event(IO())-\u003eIO()",
          "package": "reactive-io",
          "signature": "Event(IO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-io/docs/Reactive-IO.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.IO",
          "name": "filterE",
          "package": "reactive-io",
          "signature": "(a -\u003e Bool) -\u003e Event a -\u003e Event a",
          "source": "src/Reactive-IO.html#filterE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive IO",
          "module": "Reactive.IO",
          "name": "filterE",
          "normalized": "(a-\u003eBool)-\u003eEvent a-\u003eEvent a",
          "package": "reactive-io",
          "signature": "(a-\u003eBool)-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-io/docs/Reactive-IO.html#v:filterE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.IO",
          "name": "newEvent",
          "package": "reactive-io",
          "signature": "((a -\u003e IO ()) -\u003e IO ()) -\u003e Event a",
          "source": "src/Reactive-IO.html#newEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive IO",
          "module": "Reactive.IO",
          "name": "newEvent",
          "normalized": "((a-\u003eIO())-\u003eIO())-\u003eEvent a",
          "package": "reactive-io",
          "partial": "Event",
          "signature": "((a-\u003eIO())-\u003eIO())-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-io/docs/Reactive-IO.html#v:newEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.IO",
          "name": "newSignal",
          "package": "reactive-io",
          "signature": "IO a -\u003e Signal a",
          "source": "src/Reactive-IO.html#newSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive IO",
          "module": "Reactive.IO",
          "name": "newSignal",
          "normalized": "IO a-\u003eSignal a",
          "package": "reactive-io",
          "partial": "Signal",
          "signature": "IO a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-io/docs/Reactive-IO.html#v:newSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.IO",
          "name": "stepper",
          "package": "reactive-io",
          "signature": "a -\u003e Event a -\u003e Signal a",
          "source": "src/Reactive-IO.html#stepper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive IO",
          "module": "Reactive.IO",
          "name": "stepper",
          "normalized": "a-\u003eEvent a-\u003eSignal a",
          "package": "reactive-io",
          "signature": "a-\u003eEvent a-\u003eSignal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-io/docs/Reactive-IO.html#v:stepper"
      }
    }
  ]
]