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
        "word": "event-driven"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.EventDriven",
          "name": "EventDriven",
          "package": "event-driven",
          "source": "src/Control-EventDriven.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control EventDriven",
          "module": "Control.EventDriven",
          "name": "EventDriven",
          "package": "event-driven",
          "partial": "Event Driven",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-driven/docs/Control-EventDriven.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.EventDriven",
          "name": "EventMonad",
          "package": "event-driven",
          "source": "src/Control-EventDriven.html#EventMonad",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control EventDriven",
          "module": "Control.EventDriven",
          "name": "EventMonad",
          "package": "event-driven",
          "partial": "Event Monad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/event-driven/docs/Control-EventDriven.html#t:EventMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.EventDriven",
          "name": "EventState",
          "package": "event-driven",
          "source": "src/Control-EventDriven.html#EventState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control EventDriven",
          "module": "Control.EventDriven",
          "name": "EventState",
          "package": "event-driven",
          "partial": "Event State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/event-driven/docs/Control-EventDriven.html#t:EventState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.EventDriven",
          "name": "bind",
          "package": "event-driven",
          "signature": "(e -\u003e EventMonad e c ()) -\u003e EventMonad e c ()",
          "source": "src/Control-EventDriven.html#bind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control EventDriven",
          "module": "Control.EventDriven",
          "name": "bind",
          "normalized": "(a-\u003eEventMonad a b())-\u003eEventMonad a b()",
          "package": "event-driven",
          "signature": "(e-\u003eEventMonad e c())-\u003eEventMonad e c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-driven/docs/Control-EventDriven.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.EventDriven",
          "name": "copyContainer",
          "package": "event-driven",
          "signature": "EventMonad e c ()",
          "source": "src/Control-EventDriven.html#copyContainer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control EventDriven",
          "module": "Control.EventDriven",
          "name": "copyContainer",
          "normalized": "EventMonad a b()",
          "package": "event-driven",
          "partial": "Container",
          "signature": "EventMonad e c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-driven/docs/Control-EventDriven.html#v:copyContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.EventDriven",
          "name": "delegate",
          "package": "event-driven",
          "signature": "EventMonad e c ()",
          "source": "src/Control-EventDriven.html#delegate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control EventDriven",
          "module": "Control.EventDriven",
          "name": "delegate",
          "normalized": "EventMonad a b()",
          "package": "event-driven",
          "signature": "EventMonad e c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-driven/docs/Control-EventDriven.html#v:delegate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.EventDriven",
          "name": "getEventValue",
          "package": "event-driven",
          "signature": "EventState e c -\u003e c",
          "source": "src/Control-EventDriven.html#getEventValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control EventDriven",
          "module": "Control.EventDriven",
          "name": "getEventValue",
          "normalized": "EventState a b-\u003eb",
          "package": "event-driven",
          "partial": "Event Value",
          "signature": "EventState e c-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-driven/docs/Control-EventDriven.html#v:getEventValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.EventDriven",
          "name": "initEvent",
          "package": "event-driven",
          "signature": "c -\u003e (e -\u003e EventMonad e c ()) -\u003e EventState e c",
          "source": "src/Control-EventDriven.html#initEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control EventDriven",
          "module": "Control.EventDriven",
          "name": "initEvent",
          "normalized": "a-\u003e(b-\u003eEventMonad b a())-\u003eEventState b a",
          "package": "event-driven",
          "partial": "Event",
          "signature": "c-\u003e(e-\u003eEventMonad e c())-\u003eEventState e c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-driven/docs/Control-EventDriven.html#v:initEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.EventDriven",
          "name": "putEvent",
          "package": "event-driven",
          "signature": "(c -\u003e m c) -\u003e Talker e c -\u003e e -\u003e m (Maybe (Talker e c))",
          "source": "src/Control-EventDriven.html#putEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control EventDriven",
          "module": "Control.EventDriven",
          "name": "putEvent",
          "normalized": "(a-\u003eb a)-\u003eTalker c a-\u003ec-\u003eb(Maybe(Talker c a))",
          "package": "event-driven",
          "partial": "Event",
          "signature": "(c-\u003em c)-\u003eTalker e c-\u003ee-\u003em(Maybe(Talker e c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-driven/docs/Control-EventDriven.html#v:putEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.EventDriven",
          "name": "removeContainer",
          "package": "event-driven",
          "signature": "EventMonad e c ()",
          "source": "src/Control-EventDriven.html#removeContainer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control EventDriven",
          "module": "Control.EventDriven",
          "name": "removeContainer",
          "normalized": "EventMonad a b()",
          "package": "event-driven",
          "partial": "Container",
          "signature": "EventMonad e c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-driven/docs/Control-EventDriven.html#v:removeContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.EventDriven",
          "name": "runEvent",
          "package": "event-driven",
          "signature": "e -\u003e EventMonad e c ()",
          "source": "src/Control-EventDriven.html#runEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control EventDriven",
          "module": "Control.EventDriven",
          "name": "runEvent",
          "normalized": "a-\u003eEventMonad a b()",
          "package": "event-driven",
          "partial": "Event",
          "signature": "e-\u003eEventMonad e c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-driven/docs/Control-EventDriven.html#v:runEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.EventDriven",
          "name": "unbind",
          "package": "event-driven",
          "signature": "EventMonad e c ()",
          "source": "src/Control-EventDriven.html#unbind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control EventDriven",
          "module": "Control.EventDriven",
          "name": "unbind",
          "normalized": "EventMonad a b()",
          "package": "event-driven",
          "signature": "EventMonad e c()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-driven/docs/Control-EventDriven.html#v:unbind"
      }
    }
  ]
]