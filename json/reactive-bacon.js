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
        "word": "reactive-bacon"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "Core",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "Core",
          "package": "reactive-bacon",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "Disposable",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-Core.html#Disposable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "Disposable",
          "package": "reactive-bacon",
          "partial": "Disposable",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#t:Disposable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "Event",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-Core.html#Event",
          "type": "data"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "Event",
          "package": "reactive-bacon",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "EventSink",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-Core.html#EventSink",
          "type": "type"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "EventSink",
          "package": "reactive-bacon",
          "partial": "Event Sink",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#t:EventSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "EventSource",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-Core.html#EventSource",
          "type": "class"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "EventSource",
          "package": "reactive-bacon",
          "partial": "Event Source",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#t:EventSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "EventStream",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-Core.html#EventStream",
          "type": "data"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "EventStream",
          "package": "reactive-bacon",
          "partial": "Event Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#t:EventStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "HandleResult",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-Core.html#HandleResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "HandleResult",
          "package": "reactive-bacon",
          "partial": "Handle Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#t:HandleResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "Observable",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-Core.html#Observable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "Observable",
          "package": "reactive-bacon",
          "partial": "Observable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#t:Observable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReactive property. Differences from EventStream:\n   - addListener function must always deliver the latest known value to the new listener\n\u003c/p\u003e\u003cp\u003eSo a Property is roughly an EventStream that stores its latest value so\n   that it is always available for new listeners. Doesn't mean it has to be\n   up to date if it has been without listeners for a while.\n\u003c/p\u003e",
          "module": "Reactive.Bacon.Core",
          "name": "Property",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-Core.html#Property",
          "type": "data"
        },
        "index": {
          "description": "Reactive property Differences from EventStream addListener function must always deliver the latest known value to the new listener So Property is roughly an EventStream that stores its latest value so that it is always available for new listeners Doesn mean it has to be up to date if it has been without listeners for while",
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "Property",
          "package": "reactive-bacon",
          "partial": "Property",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#t:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "PropertyEvent",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-Core.html#PropertyEvent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "PropertyEvent",
          "package": "reactive-bacon",
          "partial": "Property Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#t:PropertyEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "PropertySink",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-Core.html#PropertySink",
          "type": "type"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "PropertySink",
          "package": "reactive-bacon",
          "partial": "Property Sink",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#t:PropertySink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "PropertySource",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-Core.html#PropertySource",
          "type": "class"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "PropertySource",
          "package": "reactive-bacon",
          "partial": "Property Source",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#t:PropertySource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "(==\u003e)",
          "package": "reactive-bacon",
          "signature": "s a -\u003e (a -\u003e IO ()) -\u003e IO ()",
          "source": "src/Reactive-Bacon-Core.html#%3D%3D%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "(==\u003e) ==\u003e",
          "normalized": "a b-\u003e(b-\u003eIO())-\u003eIO()",
          "package": "reactive-bacon",
          "signature": "s a-\u003e(a-\u003eIO())-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:-61--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "(\u003e\u003e=!)",
          "package": "reactive-bacon",
          "signature": "IO (s a) -\u003e (a -\u003e IO ()) -\u003e IO ()",
          "source": "src/Reactive-Bacon-Core.html#%3E%3E%3D%21",
          "type": "method"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "(\u003e\u003e=!) \u003e\u003e=!",
          "normalized": "IO(a b)-\u003e(b-\u003eIO())-\u003eIO()",
          "package": "reactive-bacon",
          "signature": "IO(s a)-\u003e(a-\u003eIO())-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:-62--62--61--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "End",
          "package": "reactive-bacon",
          "signature": "End",
          "source": "src/Reactive-Bacon-Core.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "End",
          "package": "reactive-bacon",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "EndUpdate",
          "package": "reactive-bacon",
          "signature": "EndUpdate",
          "source": "src/Reactive-Bacon-Core.html#PropertyEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "EndUpdate",
          "package": "reactive-bacon",
          "partial": "End Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:EndUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "EventStream",
          "package": "reactive-bacon",
          "signature": "EventStream",
          "source": "src/Reactive-Bacon-Core.html#EventStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "EventStream",
          "package": "reactive-bacon",
          "partial": "Event Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:EventStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "Initial",
          "package": "reactive-bacon",
          "signature": "Initial a",
          "source": "src/Reactive-Bacon-Core.html#PropertyEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "Initial",
          "package": "reactive-bacon",
          "partial": "Initial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:Initial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "More",
          "package": "reactive-bacon",
          "signature": "More",
          "source": "src/Reactive-Bacon-Core.html#HandleResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "More",
          "package": "reactive-bacon",
          "partial": "More",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:More"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "Next",
          "package": "reactive-bacon",
          "signature": "Next a",
          "source": "src/Reactive-Bacon-Core.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "Next",
          "package": "reactive-bacon",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:Next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "NoMore",
          "package": "reactive-bacon",
          "signature": "NoMore",
          "source": "src/Reactive-Bacon-Core.html#HandleResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "NoMore",
          "package": "reactive-bacon",
          "partial": "No More",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:NoMore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "Property",
          "package": "reactive-bacon",
          "signature": "Property",
          "source": "src/Reactive-Bacon-Core.html#Property",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "Property",
          "package": "reactive-bacon",
          "partial": "Property",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:Property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "Update",
          "package": "reactive-bacon",
          "signature": "Update a",
          "source": "src/Reactive-Bacon-Core.html#PropertyEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "Update",
          "package": "reactive-bacon",
          "partial": "Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "addPropertyListener",
          "package": "reactive-bacon",
          "signature": "PropertySink a -\u003e IO Disposable",
          "source": "src/Reactive-Bacon-Core.html#Property",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "addPropertyListener",
          "normalized": "PropertySink a-\u003eIO Disposable",
          "package": "reactive-bacon",
          "partial": "Property Listener",
          "signature": "PropertySink a-\u003eIO Disposable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:addPropertyListener"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "neverE",
          "package": "reactive-bacon",
          "signature": "EventStream a",
          "source": "src/Reactive-Bacon-Core.html#neverE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "neverE",
          "package": "reactive-bacon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:neverE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "obs",
          "package": "reactive-bacon",
          "signature": "s a -\u003e EventStream a",
          "source": "src/Reactive-Bacon-Core.html#obs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "obs",
          "normalized": "a b-\u003eEventStream b",
          "package": "reactive-bacon",
          "signature": "s a-\u003eEventStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:obs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "subscribe",
          "package": "reactive-bacon",
          "signature": "EventSink a -\u003e IO Disposable",
          "source": "src/Reactive-Bacon-Core.html#EventStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "subscribe",
          "normalized": "EventSink a-\u003eIO Disposable",
          "package": "reactive-bacon",
          "signature": "EventSink a-\u003eIO Disposable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:subscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "toEventObserver",
          "package": "reactive-bacon",
          "signature": "(Event a -\u003e IO ()) -\u003e EventSink a",
          "source": "src/Reactive-Bacon-Core.html#toEventObserver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "toEventObserver",
          "normalized": "(Event a-\u003eIO())-\u003eEventSink a",
          "package": "reactive-bacon",
          "partial": "Event Observer",
          "signature": "(Event a-\u003eIO())-\u003eEventSink a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:toEventObserver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "toEventStream",
          "package": "reactive-bacon",
          "signature": "s a -\u003e EventStream a",
          "source": "src/Reactive-Bacon-Core.html#toEventStream",
          "type": "method"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "toEventStream",
          "normalized": "a b-\u003eEventStream b",
          "package": "reactive-bacon",
          "partial": "Event Stream",
          "signature": "s a-\u003eEventStream a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:toEventStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "toObserver",
          "package": "reactive-bacon",
          "signature": "(a -\u003e IO ()) -\u003e EventSink a",
          "source": "src/Reactive-Bacon-Core.html#toObserver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "toObserver",
          "normalized": "(a-\u003eIO())-\u003eEventSink a",
          "package": "reactive-bacon",
          "partial": "Observer",
          "signature": "(a-\u003eIO())-\u003eEventSink a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:toObserver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Core",
          "name": "toProperty",
          "package": "reactive-bacon",
          "signature": "s a -\u003e Property a",
          "source": "src/Reactive-Bacon-Core.html#toProperty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Reactive Bacon Core",
          "module": "Reactive.Bacon.Core",
          "name": "toProperty",
          "normalized": "a b-\u003eProperty b",
          "package": "reactive-bacon",
          "partial": "Property",
          "signature": "s a-\u003eProperty a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Core.html#v:toProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.Combinators",
          "name": "Combinators",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-EventStream-Combinators.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream Combinators",
          "module": "Reactive.Bacon.EventStream.Combinators",
          "name": "Combinators",
          "package": "reactive-bacon",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.Combinators",
          "name": "combineLatestE",
          "package": "reactive-bacon",
          "signature": "s1 a -\u003e s2 b -\u003e IO (EventStream (a, b))",
          "source": "src/Reactive-Bacon-EventStream-Combinators.html#combineLatestE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream Combinators",
          "module": "Reactive.Bacon.EventStream.Combinators",
          "name": "combineLatestE",
          "normalized": "a b-\u003ea c-\u003eIO(EventStream(b,c))",
          "package": "reactive-bacon",
          "partial": "Latest",
          "signature": "s a-\u003es b-\u003eIO(EventStream(a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Combinators.html#v:combineLatestE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.Combinators",
          "name": "eitherE",
          "package": "reactive-bacon",
          "signature": "s1 a -\u003e s2 b -\u003e IO (EventStream (Either a b))",
          "source": "src/Reactive-Bacon-EventStream-Combinators.html#eitherE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream Combinators",
          "module": "Reactive.Bacon.EventStream.Combinators",
          "name": "eitherE",
          "normalized": "a b-\u003ea c-\u003eIO(EventStream(Either b c))",
          "package": "reactive-bacon",
          "signature": "s a-\u003es b-\u003eIO(EventStream(Either a b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Combinators.html#v:eitherE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.Combinators",
          "name": "mergeE",
          "package": "reactive-bacon",
          "signature": "s1 a -\u003e s2 a -\u003e IO (EventStream a)",
          "source": "src/Reactive-Bacon-EventStream-Combinators.html#mergeE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream Combinators",
          "module": "Reactive.Bacon.EventStream.Combinators",
          "name": "mergeE",
          "normalized": "a b-\u003ea b-\u003eIO(EventStream b)",
          "package": "reactive-bacon",
          "signature": "s a-\u003es a-\u003eIO(EventStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Combinators.html#v:mergeE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.Combinators",
          "name": "takeUntilE",
          "package": "reactive-bacon",
          "signature": "s1 a -\u003e s2 b -\u003e IO (EventStream b)",
          "source": "src/Reactive-Bacon-EventStream-Combinators.html#takeUntilE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream Combinators",
          "module": "Reactive.Bacon.EventStream.Combinators",
          "name": "takeUntilE",
          "normalized": "a b-\u003ea c-\u003eIO(EventStream c)",
          "package": "reactive-bacon",
          "partial": "Until",
          "signature": "s a-\u003es b-\u003eIO(EventStream b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Combinators.html#v:takeUntilE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.IO",
          "name": "IO",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-EventStream-IO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream IO",
          "module": "Reactive.Bacon.EventStream.IO",
          "name": "IO",
          "package": "reactive-bacon",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.IO",
          "name": "fromIO",
          "package": "reactive-bacon",
          "signature": "IO a -\u003e IO (EventStream a)",
          "source": "src/Reactive-Bacon-EventStream-IO.html#fromIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream IO",
          "module": "Reactive.Bacon.EventStream.IO",
          "name": "fromIO",
          "normalized": "IO a-\u003eIO(EventStream a)",
          "package": "reactive-bacon",
          "partial": "IO",
          "signature": "IO a-\u003eIO(EventStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-IO.html#v:fromIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.IO",
          "name": "fromNonStoppableProcess",
          "package": "reactive-bacon",
          "signature": "((Event a -\u003e IO ()) -\u003e IO ()) -\u003e IO (EventStream a)",
          "source": "src/Reactive-Bacon-EventStream-IO.html#fromNonStoppableProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream IO",
          "module": "Reactive.Bacon.EventStream.IO",
          "name": "fromNonStoppableProcess",
          "normalized": "((Event a-\u003eIO())-\u003eIO())-\u003eIO(EventStream a)",
          "package": "reactive-bacon",
          "partial": "Non Stoppable Process",
          "signature": "((Event a-\u003eIO())-\u003eIO())-\u003eIO(EventStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-IO.html#v:fromNonStoppableProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estartProcess is a function whose params are \u003ca\u003eevent sink\u003c/a\u003e and \u003ca\u003estop sign\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Reactive.Bacon.EventStream.IO",
          "name": "fromStoppableProcess",
          "package": "reactive-bacon",
          "signature": "((Event a -\u003e IO ()) -\u003e IO Bool -\u003e IO ()) -\u003e IO (EventStream a, IO ())",
          "source": "src/Reactive-Bacon-EventStream-IO.html#fromStoppableProcess",
          "type": "function"
        },
        "index": {
          "description": "startProcess is function whose params are event sink and stop sign",
          "hierarchy": "Reactive Bacon EventStream IO",
          "module": "Reactive.Bacon.EventStream.IO",
          "name": "fromStoppableProcess",
          "normalized": "((Event a-\u003eIO())-\u003eIO Bool-\u003eIO())-\u003eIO(EventStream a,IO())",
          "package": "reactive-bacon",
          "partial": "Stoppable Process",
          "signature": "((Event a-\u003eIO())-\u003eIO Bool-\u003eIO())-\u003eIO(EventStream a,IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-IO.html#v:fromStoppableProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.Monadic",
          "name": "Monadic",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-EventStream-Monadic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream Monadic",
          "module": "Reactive.Bacon.EventStream.Monadic",
          "name": "Monadic",
          "package": "reactive-bacon",
          "partial": "Monadic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Monadic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.Monadic",
          "name": "flatMapE",
          "package": "reactive-bacon",
          "signature": "(a -\u003e IO (EventStream b)) -\u003e s a -\u003e IO (EventStream b)",
          "source": "src/Reactive-Bacon-EventStream-Monadic.html#flatMapE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream Monadic",
          "module": "Reactive.Bacon.EventStream.Monadic",
          "name": "flatMapE",
          "normalized": "(a-\u003eIO(EventStream b))-\u003ec a-\u003eIO(EventStream b)",
          "package": "reactive-bacon",
          "partial": "Map",
          "signature": "(a-\u003eIO(EventStream b))-\u003es a-\u003eIO(EventStream b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Monadic.html#v:flatMapE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.Monadic",
          "name": "switchE",
          "package": "reactive-bacon",
          "signature": "(a -\u003e IO (EventStream b)) -\u003e s a -\u003e IO (EventStream b)",
          "source": "src/Reactive-Bacon-EventStream-Monadic.html#switchE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream Monadic",
          "module": "Reactive.Bacon.EventStream.Monadic",
          "name": "switchE",
          "normalized": "(a-\u003eIO(EventStream b))-\u003ec a-\u003eIO(EventStream b)",
          "package": "reactive-bacon",
          "signature": "(a-\u003eIO(EventStream b))-\u003es a-\u003eIO(EventStream b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Monadic.html#v:switchE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "Timed",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-EventStream-Timed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream Timed",
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "Timed",
          "package": "reactive-bacon",
          "partial": "Timed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Timed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "delayE",
          "package": "reactive-bacon",
          "signature": "TimeDiff -\u003e s a -\u003e IO (EventStream a)",
          "source": "src/Reactive-Bacon-EventStream-Timed.html#delayE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream Timed",
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "delayE",
          "normalized": "TimeDiff-\u003ea b-\u003eIO(EventStream b)",
          "package": "reactive-bacon",
          "signature": "TimeDiff-\u003es a-\u003eIO(EventStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Timed.html#v:delayE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "laterE",
          "package": "reactive-bacon",
          "signature": "TimeDiff -\u003e a -\u003e IO (EventStream a)",
          "source": "src/Reactive-Bacon-EventStream-Timed.html#laterE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream Timed",
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "laterE",
          "normalized": "TimeDiff-\u003ea-\u003eIO(EventStream a)",
          "package": "reactive-bacon",
          "signature": "TimeDiff-\u003ea-\u003eIO(EventStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Timed.html#v:laterE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMilliseconds to TimeDiff\n\u003c/p\u003e",
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "milliseconds",
          "package": "reactive-bacon",
          "signature": "a -\u003e TimeDiff",
          "source": "src/Reactive-Bacon-EventStream-Timed.html#milliseconds",
          "type": "function"
        },
        "index": {
          "description": "Milliseconds to TimeDiff",
          "hierarchy": "Reactive Bacon EventStream Timed",
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "milliseconds",
          "normalized": "a-\u003eTimeDiff",
          "package": "reactive-bacon",
          "signature": "a-\u003eTimeDiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Timed.html#v:milliseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "periodicallyE",
          "package": "reactive-bacon",
          "signature": "TimeDiff -\u003e a -\u003e IO (EventStream a, Disposable)",
          "source": "src/Reactive-Bacon-EventStream-Timed.html#periodicallyE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream Timed",
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "periodicallyE",
          "normalized": "TimeDiff-\u003ea-\u003eIO(EventStream a,Disposable)",
          "package": "reactive-bacon",
          "signature": "TimeDiff-\u003ea-\u003eIO(EventStream a,Disposable)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Timed.html#v:periodicallyE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeconds to TimeDiff\n\u003c/p\u003e",
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "seconds",
          "package": "reactive-bacon",
          "signature": "a -\u003e TimeDiff",
          "source": "src/Reactive-Bacon-EventStream-Timed.html#seconds",
          "type": "function"
        },
        "index": {
          "description": "Seconds to TimeDiff",
          "hierarchy": "Reactive Bacon EventStream Timed",
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "seconds",
          "normalized": "a-\u003eTimeDiff",
          "package": "reactive-bacon",
          "signature": "a-\u003eTimeDiff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Timed.html#v:seconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "sequentiallyE",
          "package": "reactive-bacon",
          "signature": "TimeDiff -\u003e [a] -\u003e IO (EventStream a)",
          "source": "src/Reactive-Bacon-EventStream-Timed.html#sequentiallyE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream Timed",
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "sequentiallyE",
          "normalized": "TimeDiff-\u003e[a]-\u003eIO(EventStream a)",
          "package": "reactive-bacon",
          "signature": "TimeDiff-\u003e[a]-\u003eIO(EventStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Timed.html#v:sequentiallyE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "throttleE",
          "package": "reactive-bacon",
          "signature": "TimeDiff -\u003e s a -\u003e IO (EventStream a)",
          "source": "src/Reactive-Bacon-EventStream-Timed.html#throttleE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream Timed",
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "throttleE",
          "normalized": "TimeDiff-\u003ea b-\u003eIO(EventStream b)",
          "package": "reactive-bacon",
          "signature": "TimeDiff-\u003es a-\u003eIO(EventStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Timed.html#v:throttleE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "timedE",
          "package": "reactive-bacon",
          "signature": "[(TimeDiff, a)] -\u003e IO (EventStream a, Disposable)",
          "source": "src/Reactive-Bacon-EventStream-Timed.html#timedE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream Timed",
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "timedE",
          "normalized": "[(TimeDiff,a)]-\u003eIO(EventStream a,Disposable)",
          "package": "reactive-bacon",
          "signature": "[(TimeDiff,a)]-\u003eIO(EventStream a,Disposable)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Timed.html#v:timedE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "toMicros",
          "package": "reactive-bacon",
          "signature": "TimeDiff -\u003e Int",
          "source": "src/Reactive-Bacon-EventStream-Timed.html#toMicros",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream Timed",
          "module": "Reactive.Bacon.EventStream.Timed",
          "name": "toMicros",
          "normalized": "TimeDiff-\u003eInt",
          "package": "reactive-bacon",
          "partial": "Micros",
          "signature": "TimeDiff-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream-Timed.html#v:toMicros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream",
          "name": "EventStream",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-EventStream.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream",
          "module": "Reactive.Bacon.EventStream",
          "name": "EventStream",
          "package": "reactive-bacon",
          "partial": "Event Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream",
          "name": "(===\u003e)",
          "package": "reactive-bacon",
          "signature": "s a -\u003e (Event a -\u003e IO ()) -\u003e IO ()",
          "source": "src/Reactive-Bacon-EventStream.html#%3D%3D%3D%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream",
          "module": "Reactive.Bacon.EventStream",
          "name": "(===\u003e) ===\u003e",
          "normalized": "a b-\u003e(Event b-\u003eIO())-\u003eIO()",
          "package": "reactive-bacon",
          "signature": "s a-\u003e(Event a-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream.html#v:-61--61--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream",
          "name": "filterE",
          "package": "reactive-bacon",
          "signature": "(a -\u003e Bool) -\u003e s a -\u003e IO (EventStream a)",
          "source": "src/Reactive-Bacon-EventStream.html#filterE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream",
          "module": "Reactive.Bacon.EventStream",
          "name": "filterE",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eIO(EventStream a)",
          "package": "reactive-bacon",
          "signature": "(a-\u003eBool)-\u003es a-\u003eIO(EventStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream.html#v:filterE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream",
          "name": "mapE",
          "package": "reactive-bacon",
          "signature": "(a -\u003e b) -\u003e s a -\u003e IO (EventStream b)",
          "source": "src/Reactive-Bacon-EventStream.html#mapE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream",
          "module": "Reactive.Bacon.EventStream",
          "name": "mapE",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eIO(EventStream b)",
          "package": "reactive-bacon",
          "signature": "(a-\u003eb)-\u003es a-\u003eIO(EventStream b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream.html#v:mapE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream",
          "name": "scanE",
          "package": "reactive-bacon",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e s a -\u003e IO (EventStream b)",
          "source": "src/Reactive-Bacon-EventStream.html#scanE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream",
          "module": "Reactive.Bacon.EventStream",
          "name": "scanE",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003eIO(EventStream a)",
          "package": "reactive-bacon",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003es a-\u003eIO(EventStream b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream.html#v:scanE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream",
          "name": "sinkMap",
          "package": "reactive-bacon",
          "signature": "(EventSink b -\u003e EventSink a) -\u003e s a -\u003e EventStream b",
          "source": "src/Reactive-Bacon-EventStream.html#sinkMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream",
          "module": "Reactive.Bacon.EventStream",
          "name": "sinkMap",
          "normalized": "(EventSink a-\u003eEventSink b)-\u003ec b-\u003eEventStream a",
          "package": "reactive-bacon",
          "partial": "Map",
          "signature": "(EventSink b-\u003eEventSink a)-\u003es a-\u003eEventStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream.html#v:sinkMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream",
          "name": "skipDuplicatesE",
          "package": "reactive-bacon",
          "signature": "s a -\u003e IO (EventStream a)",
          "source": "src/Reactive-Bacon-EventStream.html#skipDuplicatesE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream",
          "module": "Reactive.Bacon.EventStream",
          "name": "skipDuplicatesE",
          "normalized": "a b-\u003eIO(EventStream b)",
          "package": "reactive-bacon",
          "partial": "Duplicates",
          "signature": "s a-\u003eIO(EventStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream.html#v:skipDuplicatesE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream",
          "name": "stateMachineE",
          "package": "reactive-bacon",
          "signature": "(st -\u003e a -\u003e (st, b)) -\u003e st -\u003e s a -\u003e IO (EventStream b)",
          "source": "src/Reactive-Bacon-EventStream.html#stateMachineE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream",
          "module": "Reactive.Bacon.EventStream",
          "name": "stateMachineE",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003ed b-\u003eIO(EventStream c)",
          "package": "reactive-bacon",
          "partial": "Machine",
          "signature": "(st-\u003ea-\u003e(st,b))-\u003est-\u003es a-\u003eIO(EventStream b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream.html#v:stateMachineE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream",
          "name": "takeE",
          "package": "reactive-bacon",
          "signature": "n -\u003e s a -\u003e IO (EventStream a)",
          "source": "src/Reactive-Bacon-EventStream.html#takeE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream",
          "module": "Reactive.Bacon.EventStream",
          "name": "takeE",
          "normalized": "a-\u003eb c-\u003eIO(EventStream c)",
          "package": "reactive-bacon",
          "signature": "n-\u003es a-\u003eIO(EventStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream.html#v:takeE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream",
          "name": "takeWhileE",
          "package": "reactive-bacon",
          "signature": "(a -\u003e Bool) -\u003e s a -\u003e IO (EventStream a)",
          "source": "src/Reactive-Bacon-EventStream.html#takeWhileE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream",
          "module": "Reactive.Bacon.EventStream",
          "name": "takeWhileE",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eIO(EventStream a)",
          "package": "reactive-bacon",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003es a-\u003eIO(EventStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream.html#v:takeWhileE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.EventStream",
          "name": "voidE",
          "package": "reactive-bacon",
          "signature": "s a -\u003e IO (EventStream ())",
          "source": "src/Reactive-Bacon-EventStream.html#voidE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon EventStream",
          "module": "Reactive.Bacon.EventStream",
          "name": "voidE",
          "normalized": "a b-\u003eIO(EventStream())",
          "package": "reactive-bacon",
          "signature": "s a-\u003eIO(EventStream())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-EventStream.html#v:voidE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Property",
          "name": "Property",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-Property.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Reactive Bacon Property",
          "module": "Reactive.Bacon.Property",
          "name": "Property",
          "package": "reactive-bacon",
          "partial": "Property",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Property.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Property",
          "name": "changesP",
          "package": "reactive-bacon",
          "signature": "s a -\u003e IO (EventStream a)",
          "source": "src/Reactive-Bacon-Property.html#changesP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Property",
          "module": "Reactive.Bacon.Property",
          "name": "changesP",
          "normalized": "a b-\u003eIO(EventStream b)",
          "package": "reactive-bacon",
          "signature": "s a-\u003eIO(EventStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Property.html#v:changesP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Property",
          "name": "combineP",
          "package": "reactive-bacon",
          "signature": "s1 a -\u003e s2 b -\u003e Property (a, b)",
          "source": "src/Reactive-Bacon-Property.html#combineP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Property",
          "module": "Reactive.Bacon.Property",
          "name": "combineP",
          "normalized": "a b-\u003ea c-\u003eProperty(b,c)",
          "package": "reactive-bacon",
          "signature": "s a-\u003es b-\u003eProperty(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Property.html#v:combineP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines the values from the first source to the current value of the second source\n\u003c/p\u003e",
          "module": "Reactive.Bacon.Property",
          "name": "combineWithLatestOfP",
          "package": "reactive-bacon",
          "signature": "(a -\u003e b -\u003e c) -\u003e s1 a -\u003e s2 b -\u003e Property c",
          "source": "src/Reactive-Bacon-Property.html#combineWithLatestOfP",
          "type": "function"
        },
        "index": {
          "description": "Combines the values from the first source to the current value of the second source",
          "hierarchy": "Reactive Bacon Property",
          "module": "Reactive.Bacon.Property",
          "name": "combineWithLatestOfP",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003eProperty c",
          "package": "reactive-bacon",
          "partial": "With Latest Of",
          "signature": "(a-\u003eb-\u003ec)-\u003es a-\u003es b-\u003eProperty c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Property.html#v:combineWithLatestOfP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Property",
          "name": "combineWithP",
          "package": "reactive-bacon",
          "signature": "(a -\u003e b -\u003e c) -\u003e s1 a -\u003e s2 b -\u003e Property c",
          "source": "src/Reactive-Bacon-Property.html#combineWithP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Property",
          "module": "Reactive.Bacon.Property",
          "name": "combineWithP",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003eProperty c",
          "package": "reactive-bacon",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003es a-\u003es b-\u003eProperty c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Property.html#v:combineWithP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Property",
          "name": "constantP",
          "package": "reactive-bacon",
          "signature": "a -\u003e Property a",
          "source": "src/Reactive-Bacon-Property.html#constantP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Property",
          "module": "Reactive.Bacon.Property",
          "name": "constantP",
          "normalized": "a-\u003eProperty a",
          "package": "reactive-bacon",
          "signature": "a-\u003eProperty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Property.html#v:constantP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Property",
          "name": "fromEventSource",
          "package": "reactive-bacon",
          "signature": "s a -\u003e IO (Property a)",
          "source": "src/Reactive-Bacon-Property.html#fromEventSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Property",
          "module": "Reactive.Bacon.Property",
          "name": "fromEventSource",
          "normalized": "a b-\u003eIO(Property b)",
          "package": "reactive-bacon",
          "partial": "Event Source",
          "signature": "s a-\u003eIO(Property a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Property.html#v:fromEventSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Property",
          "name": "fromEventSourceWithStartValue",
          "package": "reactive-bacon",
          "signature": "Maybe a -\u003e s a -\u003e IO (Property a)",
          "source": "src/Reactive-Bacon-Property.html#fromEventSourceWithStartValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Property",
          "module": "Reactive.Bacon.Property",
          "name": "fromEventSourceWithStartValue",
          "normalized": "Maybe a-\u003eb a-\u003eIO(Property a)",
          "package": "reactive-bacon",
          "partial": "Event Source With Start Value",
          "signature": "Maybe a-\u003es a-\u003eIO(Property a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Property.html#v:fromEventSourceWithStartValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Property",
          "name": "mapP",
          "package": "reactive-bacon",
          "signature": "(a -\u003e b) -\u003e s a -\u003e Property b",
          "source": "src/Reactive-Bacon-Property.html#mapP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Property",
          "module": "Reactive.Bacon.Property",
          "name": "mapP",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eProperty b",
          "package": "reactive-bacon",
          "signature": "(a-\u003eb)-\u003es a-\u003eProperty b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Property.html#v:mapP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.Property",
          "name": "newPushProperty",
          "package": "reactive-bacon",
          "signature": "IO (Property a, a -\u003e IO ())",
          "source": "src/Reactive-Bacon-Property.html#newPushProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon Property",
          "module": "Reactive.Bacon.Property",
          "name": "newPushProperty",
          "normalized": "IO(Property a,a-\u003eIO())",
          "package": "reactive-bacon",
          "partial": "Push Property",
          "signature": "IO(Property a,a-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-Property.html#v:newPushProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.PushStream",
          "name": "PushStream",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon-PushStream.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Reactive Bacon PushStream",
          "module": "Reactive.Bacon.PushStream",
          "name": "PushStream",
          "package": "reactive-bacon",
          "partial": "Push Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-PushStream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.PushStream",
          "name": "newDispatcher",
          "package": "reactive-bacon",
          "signature": "((a -\u003e IO ()) -\u003e IO Disposable) -\u003e IO (EventStream a)",
          "source": "src/Reactive-Bacon-PushStream.html#newDispatcher",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon PushStream",
          "module": "Reactive.Bacon.PushStream",
          "name": "newDispatcher",
          "normalized": "((a-\u003eIO())-\u003eIO Disposable)-\u003eIO(EventStream a)",
          "package": "reactive-bacon",
          "partial": "Dispatcher",
          "signature": "((a-\u003eIO())-\u003eIO Disposable)-\u003eIO(EventStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-PushStream.html#v:newDispatcher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon.PushStream",
          "name": "newPushStream",
          "package": "reactive-bacon",
          "signature": "IO (EventStream a, Event a -\u003e IO ())",
          "source": "src/Reactive-Bacon-PushStream.html#newPushStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Reactive Bacon PushStream",
          "module": "Reactive.Bacon.PushStream",
          "name": "newPushStream",
          "normalized": "IO(EventStream a,Event a-\u003eIO())",
          "package": "reactive-bacon",
          "partial": "Push Stream",
          "signature": "IO(EventStream a,Event a-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-PushStream.html#v:newPushStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes an observable with a single connection to the underlying EventSource.\n   Automatically subscribes/unsubscribes from EventSource based on whether there\n   are any EventSinks.\n\u003c/p\u003e",
          "module": "Reactive.Bacon.PushStream",
          "name": "wrap",
          "package": "reactive-bacon",
          "signature": "s a -\u003e IO (EventStream a)",
          "source": "src/Reactive-Bacon-PushStream.html#wrap",
          "type": "function"
        },
        "index": {
          "description": "Makes an observable with single connection to the underlying EventSource Automatically subscribes unsubscribes from EventSource based on whether there are any EventSinks",
          "hierarchy": "Reactive Bacon PushStream",
          "module": "Reactive.Bacon.PushStream",
          "name": "wrap",
          "normalized": "a b-\u003eIO(EventStream b)",
          "package": "reactive-bacon",
          "signature": "s a-\u003eIO(EventStream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon-PushStream.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Bacon",
          "name": "Bacon",
          "package": "reactive-bacon",
          "source": "src/Reactive-Bacon.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Reactive Bacon",
          "module": "Reactive.Bacon",
          "name": "Bacon",
          "package": "reactive-bacon",
          "partial": "Bacon",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reactive-bacon/docs/Reactive-Bacon.html#"
      }
    }
  ]
]