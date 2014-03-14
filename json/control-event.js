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
        "word": "control-event"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module uses Haskell concurrency libraries to build an extremely simple\n event system that should perform better than the Control.Event module\n but does not provide features such as STM action scheduling.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Event.Relative",
          "name": "Relative",
          "package": "control-event",
          "source": "src/Control-Event-Relative.html",
          "type": "module"
        },
        "index": {
          "description": "This module uses Haskell concurrency libraries to build an extremely simple event system that should perform better than the Control.Event module but does not provide features such as STM action scheduling",
          "hierarchy": "Control Event Relative",
          "module": "Control.Event.Relative",
          "name": "Relative",
          "package": "control-event",
          "partial": "Relative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event-Relative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Event.Relative",
          "name": "EventId",
          "package": "control-event",
          "source": "src/Control-Event-Relative.html#EventId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Event Relative",
          "module": "Control.Event.Relative",
          "name": "EventId",
          "package": "control-event",
          "partial": "Event Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event-Relative.html#t:EventId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'addEvent delay action' will delay\n for \u003ccode\u003edelay\u003c/code\u003e microseconds then execute \u003ccode\u003eaction\u003c/code\u003e. An EventId\n is returned, allowing the event to be canceled.\n\u003c/p\u003e",
          "module": "Control.Event.Relative",
          "name": "addEvent",
          "package": "control-event",
          "signature": "Int -\u003e IO () -\u003e IO EventId",
          "source": "src/Control-Event-Relative.html#addEvent",
          "type": "function"
        },
        "index": {
          "description": "addEvent delay action will delay for delay microseconds then execute action An EventId is returned allowing the event to be canceled",
          "hierarchy": "Control Event Relative",
          "module": "Control.Event.Relative",
          "name": "addEvent",
          "normalized": "Int-\u003eIO()-\u003eIO EventId",
          "package": "control-event",
          "partial": "Event",
          "signature": "Int-\u003eIO()-\u003eIO EventId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event-Relative.html#v:addEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'delEvent eid' deletes the event and returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the event was deleted.  If \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e is returned\n then the time elapsed and the action was forked off.\n\u003c/p\u003e",
          "module": "Control.Event.Relative",
          "name": "delEvent",
          "package": "control-event",
          "signature": "EventId -\u003e IO Bool",
          "source": "src/Control-Event-Relative.html#delEvent",
          "type": "function"
        },
        "index": {
          "description": "delEvent eid deletes the event and returns True if the event was deleted If False is returned then the time elapsed and the action was forked off",
          "hierarchy": "Control Event Relative",
          "module": "Control.Event.Relative",
          "name": "delEvent",
          "normalized": "EventId-\u003eIO Bool",
          "package": "control-event",
          "partial": "Event",
          "signature": "EventId-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event-Relative.html#v:delEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a shim, providing the control-timeout api using\n control-event to run the show.  See the control-timeout package\n for documentation.  If you do not need compatability with\n the control-timeout api then do not use this module!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Event.Timeout",
          "name": "Timeout",
          "package": "control-event",
          "source": "src/Control-Event-Timeout.html",
          "type": "module"
        },
        "index": {
          "description": "This module is shim providing the control-timeout api using control-event to run the show See the control-timeout package for documentation If you do not need compatability with the control-timeout api then do not use this module",
          "hierarchy": "Control Event Timeout",
          "module": "Control.Event.Timeout",
          "name": "Timeout",
          "package": "control-event",
          "partial": "Timeout",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event-Timeout.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Event.Timeout",
          "name": "TimeoutTag",
          "package": "control-event",
          "source": "src/Control-Event-Timeout.html#TimeoutTag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Event Timeout",
          "module": "Control.Event.Timeout",
          "name": "TimeoutTag",
          "package": "control-event",
          "partial": "Timeout Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event-Timeout.html#t:TimeoutTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Event.Timeout",
          "name": "addTimeout",
          "package": "control-event",
          "signature": "Float -\u003e IO () -\u003e IO TimeoutTag",
          "source": "src/Control-Event-Timeout.html#addTimeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Event Timeout",
          "module": "Control.Event.Timeout",
          "name": "addTimeout",
          "normalized": "Float-\u003eIO()-\u003eIO TimeoutTag",
          "package": "control-event",
          "partial": "Timeout",
          "signature": "Float-\u003eIO()-\u003eIO TimeoutTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event-Timeout.html#v:addTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Event.Timeout",
          "name": "addTimeoutAtomic",
          "package": "control-event",
          "signature": "Float -\u003e IO (IO () -\u003e IO (STM TimeoutTag))",
          "source": "src/Control-Event-Timeout.html#addTimeoutAtomic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Event Timeout",
          "module": "Control.Event.Timeout",
          "name": "addTimeoutAtomic",
          "normalized": "Float-\u003eIO(IO()-\u003eIO(STM TimeoutTag))",
          "package": "control-event",
          "partial": "Timeout Atomic",
          "signature": "Float-\u003eIO(IO()-\u003eIO(STM TimeoutTag))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event-Timeout.html#v:addTimeoutAtomic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Event.Timeout",
          "name": "cancelTimeout",
          "package": "control-event",
          "signature": "TimeoutTag -\u003e STM Bool",
          "source": "src/Control-Event-Timeout.html#cancelTimeout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Event Timeout",
          "module": "Control.Event.Timeout",
          "name": "cancelTimeout",
          "normalized": "TimeoutTag-\u003eSTM Bool",
          "package": "control-event",
          "partial": "Timeout",
          "signature": "TimeoutTag-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event-Timeout.html#v:cancelTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module can execute events at specified time.  It uses a two thread \n system that allows the STM adding and deleting of new threads without\n requiring later IO actions.  For a simpler system that uses relative times\n see Control.Event.Relative\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Event",
          "name": "Event",
          "package": "control-event",
          "source": "src/Control-Event.html",
          "type": "module"
        },
        "index": {
          "description": "This module can execute events at specified time It uses two thread system that allows the STM adding and deleting of new threads without requiring later IO actions For simpler system that uses relative times see Control.Event.Relative",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "Event",
          "package": "control-event",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIDs useful for canceling previously scheduled events.\n\u003c/p\u003e",
          "module": "Control.Event",
          "name": "EventId",
          "package": "control-event",
          "source": "src/Control-Event.html#EventId",
          "type": "data"
        },
        "index": {
          "description": "IDs useful for canceling previously scheduled events",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "EventId",
          "package": "control-event",
          "partial": "Event Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event.html#t:EventId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe event system must be initilized using initEventSystem.\n More than one event system can be instantiated at once\n (eg. for non-interference).\n\u003c/p\u003e",
          "module": "Control.Event",
          "name": "EventSystem",
          "package": "control-event",
          "source": "src/Control-Event.html#EventSystem",
          "type": "data"
        },
        "index": {
          "description": "The event system must be initilized using initEventSystem More than one event system can be instantiated at once eg for non-interference",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "EventSystem",
          "package": "control-event",
          "partial": "Event System",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event.html#t:EventSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an *action* to be performed at *time* by *system*.  Returns a unique ID.\n\u003c/p\u003e",
          "module": "Control.Event",
          "name": "addEvent",
          "package": "control-event",
          "signature": "EventSystem -\u003e UTCTime -\u003e IO () -\u003e IO EventId",
          "source": "src/Control-Event.html#addEvent",
          "type": "function"
        },
        "index": {
          "description": "Add an action to be performed at time by system Returns unique ID",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "addEvent",
          "normalized": "EventSystem-\u003eUTCTime-\u003eIO()-\u003eIO EventId",
          "package": "control-event",
          "partial": "Event",
          "signature": "EventSystem-\u003eUTCTime-\u003eIO()-\u003eIO EventId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event.html#v:addEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic version of addEvent\n\u003c/p\u003e",
          "module": "Control.Event",
          "name": "addEventSTM",
          "package": "control-event",
          "signature": "EventSystem -\u003e UTCTime -\u003e IO () -\u003e STM EventId",
          "source": "src/Control-Event.html#addEventSTM",
          "type": "function"
        },
        "index": {
          "description": "Atomic version of addEvent",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "addEventSTM",
          "normalized": "EventSystem-\u003eUTCTime-\u003eIO()-\u003eSTM EventId",
          "package": "control-event",
          "partial": "Event STM",
          "signature": "EventSystem-\u003eUTCTime-\u003eIO()-\u003eSTM EventId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event.html#v:addEventSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCancel an event from the system, returning True on success.\n\u003c/p\u003e",
          "module": "Control.Event",
          "name": "cancelEvent",
          "package": "control-event",
          "signature": "EventSystem -\u003e EventId -\u003e IO Bool",
          "source": "src/Control-Event.html#cancelEvent",
          "type": "function"
        },
        "index": {
          "description": "Cancel an event from the system returning True on success",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "cancelEvent",
          "normalized": "EventSystem-\u003eEventId-\u003eIO Bool",
          "package": "control-event",
          "partial": "Event",
          "signature": "EventSystem-\u003eEventId-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event.html#v:cancelEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAtomic version of cancelEvent\n\u003c/p\u003e",
          "module": "Control.Event",
          "name": "cancelEventSTM",
          "package": "control-event",
          "signature": "EventSystem -\u003e EventId -\u003e STM Bool",
          "source": "src/Control-Event.html#cancelEventSTM",
          "type": "function"
        },
        "index": {
          "description": "Atomic version of cancelEvent",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "cancelEventSTM",
          "normalized": "EventSystem-\u003eEventId-\u003eSTM Bool",
          "package": "control-event",
          "partial": "Event STM",
          "signature": "EventSystem-\u003eEventId-\u003eSTM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event.html#v:cancelEventSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of pending events.\n\u003c/p\u003e",
          "module": "Control.Event",
          "name": "evtSystemSize",
          "package": "control-event",
          "signature": "EventSystem -\u003e STM Int",
          "source": "src/Control-Event.html#evtSystemSize",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of pending events",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "evtSystemSize",
          "normalized": "EventSystem-\u003eSTM Int",
          "package": "control-event",
          "partial": "System Size",
          "signature": "EventSystem-\u003eSTM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event.html#v:evtSystemSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe only way to get an event system is to initilize one\n\u003c/p\u003e",
          "module": "Control.Event",
          "name": "initEventSystem",
          "package": "control-event",
          "signature": "IO EventSystem",
          "source": "src/Control-Event.html#initEventSystem",
          "type": "function"
        },
        "index": {
          "description": "The only way to get an event system is to initilize one",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "initEventSystem",
          "package": "control-event",
          "partial": "Event System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event.html#v:initEventSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value indicating there is no such event.\n Canceling this event returns True and has no other effect.\n\u003c/p\u003e",
          "module": "Control.Event",
          "name": "noEvent",
          "package": "control-event",
          "signature": "EventId",
          "source": "src/Control-Event.html#noEvent",
          "type": "function"
        },
        "index": {
          "description": "value indicating there is no such event Canceling this event returns True and has no other effect",
          "hierarchy": "Control Event",
          "module": "Control.Event",
          "name": "noEvent",
          "package": "control-event",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-event/docs/Control-Event.html#v:noEvent"
      }
    }
  ]
]