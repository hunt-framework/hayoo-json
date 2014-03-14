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
        "word": "reactive-banana-threepenny"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Reactive.Banana.Threepenny",
          "name": "Threepenny",
          "package": "reactive-banana-threepenny",
          "source": "src/Reactive-Banana-Threepenny.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Reactive Banana Threepenny",
          "module": "Reactive.Banana.Threepenny",
          "name": "Threepenny",
          "package": "reactive-banana-threepenny",
          "partial": "Threepenny",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reactive-banana-threepenny/docs/Reactive-Banana-Threepenny.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBehavior from an attribute.\n Uses \u003ccode\u003e\u003ca\u003efromPoll\u003c/a\u003e\u003c/code\u003e, so may behave as you expect.\n\u003c/p\u003e",
          "module": "Reactive.Banana.Threepenny",
          "name": "behavior",
          "package": "reactive-banana-threepenny",
          "signature": "ReadWriteAttr x i o -\u003e x -\u003e Moment t (Behavior t o)",
          "source": "src/Reactive-Banana-Threepenny.html#behavior",
          "type": "function"
        },
        "index": {
          "description": "Behavior from an attribute Uses fromPoll so may behave as you expect",
          "hierarchy": "Reactive Banana Threepenny",
          "module": "Reactive.Banana.Threepenny",
          "name": "behavior",
          "normalized": "ReadWriteAttr a b c-\u003ea-\u003eMoment d(Behavior d c)",
          "package": "reactive-banana-threepenny",
          "signature": "ReadWriteAttr x i o-\u003ex-\u003eMoment t(Behavior t o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-banana-threepenny/docs/Reactive-Banana-Threepenny.html#v:behavior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBehavior corresponding to user input in the element.\n\u003c/p\u003e",
          "module": "Reactive.Banana.Threepenny",
          "name": "behaviorValue",
          "package": "reactive-banana-threepenny",
          "signature": "Element -\u003e String -\u003e Moment t (Behavior t String)",
          "source": "src/Reactive-Banana-Threepenny.html#behaviorValue",
          "type": "function"
        },
        "index": {
          "description": "Behavior corresponding to user input in the element",
          "hierarchy": "Reactive Banana Threepenny",
          "module": "Reactive.Banana.Threepenny",
          "name": "behaviorValue",
          "normalized": "Element-\u003eString-\u003eMoment a(Behavior a String)",
          "package": "reactive-banana-threepenny",
          "partial": "Value",
          "signature": "Element-\u003eString-\u003eMoment t(Behavior t String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-banana-threepenny/docs/Reactive-Banana-Threepenny.html#v:behaviorValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain an event for an element.\n\u003c/p\u003e",
          "module": "Reactive.Banana.Threepenny",
          "name": "event",
          "package": "reactive-banana-threepenny",
          "signature": "(x -\u003e Event a) -\u003e x -\u003e Moment t (Event t a)",
          "source": "src/Reactive-Banana-Threepenny.html#event",
          "type": "function"
        },
        "index": {
          "description": "Obtain an event for an element",
          "hierarchy": "Reactive Banana Threepenny",
          "module": "Reactive.Banana.Threepenny",
          "name": "event",
          "normalized": "(a-\u003eEvent b)-\u003ea-\u003eMoment c(Event c b)",
          "package": "reactive-banana-threepenny",
          "signature": "(x-\u003eEvent a)-\u003ex-\u003eMoment t(Event t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-banana-threepenny/docs/Reactive-Banana-Threepenny.html#v:event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent that occurs when the \u003cem\u003euser\u003c/em\u003e changes the selection of a \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
          "module": "Reactive.Banana.Threepenny",
          "name": "eventSelection",
          "package": "reactive-banana-threepenny",
          "signature": "Element -\u003e Moment t (Event t (Maybe Int))",
          "source": "src/Reactive-Banana-Threepenny.html#eventSelection",
          "type": "function"
        },
        "index": {
          "description": "Event that occurs when the user changes the selection of select element",
          "hierarchy": "Reactive Banana Threepenny",
          "module": "Reactive.Banana.Threepenny",
          "name": "eventSelection",
          "normalized": "Element-\u003eMoment a(Event a(Maybe Int))",
          "package": "reactive-banana-threepenny",
          "partial": "Selection",
          "signature": "Element-\u003eMoment t(Event t(Maybe Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-banana-threepenny/docs/Reactive-Banana-Threepenny.html#v:eventSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent that occurs when the \u003cem\u003euser\u003c/em\u003e changes the value of the input element.\n\u003c/p\u003e",
          "module": "Reactive.Banana.Threepenny",
          "name": "eventValue",
          "package": "reactive-banana-threepenny",
          "signature": "Element -\u003e Moment t (Event t String)",
          "source": "src/Reactive-Banana-Threepenny.html#eventValue",
          "type": "function"
        },
        "index": {
          "description": "Event that occurs when the user changes the value of the input element",
          "hierarchy": "Reactive Banana Threepenny",
          "module": "Reactive.Banana.Threepenny",
          "name": "eventValue",
          "normalized": "Element-\u003eMoment a(Event a String)",
          "package": "reactive-banana-threepenny",
          "partial": "Value",
          "signature": "Element-\u003eMoment t(Event t String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-banana-threepenny/docs/Reactive-Banana-Threepenny.html#v:eventValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003eAnimate\u003c/a\u003e an attribute with a behavior.\n\u003c/p\u003e",
          "module": "Reactive.Banana.Threepenny",
          "name": "sink",
          "package": "reactive-banana-threepenny",
          "signature": "ReadWriteAttr x i o -\u003e Behavior t i -\u003e Moment t x -\u003e Moment t ()",
          "source": "src/Reactive-Banana-Threepenny.html#sink",
          "type": "function"
        },
        "index": {
          "description": "Animate an attribute with behavior",
          "hierarchy": "Reactive Banana Threepenny",
          "module": "Reactive.Banana.Threepenny",
          "name": "sink",
          "normalized": "ReadWriteAttr a b c-\u003eBehavior d b-\u003eMoment d a-\u003eMoment d()",
          "package": "reactive-banana-threepenny",
          "signature": "ReadWriteAttr x i o-\u003eBehavior t i-\u003eMoment t x-\u003eMoment t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reactive-banana-threepenny/docs/Reactive-Banana-Threepenny.html#v:sink"
      }
    }
  ]
]