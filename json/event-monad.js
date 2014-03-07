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
        "word": "event-monad"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event.BasicEvents",
          "name": "BasicEvents",
          "package": "event-monad",
          "source": "src/Control-Monad-Event-BasicEvents.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Event BasicEvents",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "BasicEvents",
          "package": "event-monad",
          "partial": "Basic Events",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event with description and effect supplied at run time\n\u003c/p\u003e",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "AdHocEvent",
          "package": "event-monad",
          "source": "src/Control-Monad-Event-BasicEvents.html#AdHocEvent",
          "type": "data"
        },
        "index": {
          "description": "An event with description and effect supplied at run time",
          "hierarchy": "Control Monad Event BasicEvents",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "AdHocEvent",
          "package": "event-monad",
          "partial": "Ad Hoc Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#t:AdHocEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event.BasicEvents",
          "name": "SimControl",
          "package": "event-monad",
          "source": "src/Control-Monad-Event-BasicEvents.html#SimControl",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Event BasicEvents",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "SimControl",
          "package": "event-monad",
          "partial": "Sim Control",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#t:SimControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix operator for sequential composition of events\n\u003c/p\u003e",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "(&)",
          "package": "event-monad",
          "signature": "e1 -\u003e e2 -\u003e AdHocEvent m",
          "source": "src/Control-Monad-Event-BasicEvents.html#%26",
          "type": "function"
        },
        "index": {
          "description": "An infix operator for sequential composition of events",
          "hierarchy": "Control Monad Event BasicEvents",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "(&) &",
          "normalized": "a-\u003ea-\u003eAdHocEvent b",
          "package": "event-monad",
          "signature": "e-\u003ee-\u003eAdHocEvent m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003e&\u003c/a\u003e\u003c/code\u003e that preserves distinctness of events\n at the expense of being able to guarantee \"proper\" interleaving\n with other events scheduled at the same time.  For example, suppose a\n composite event e1 &- e2 of this type is scheduled, then a third\n event e3 is scheduled for the same time.  The \"expected\" order of\n execution is e1; e2; e3.  What actually happens is e1; e3; e2 - \n because (e1 &- e2) runs, having the effect of running e1 and \n scheduling e2, then e3 runs (because it's next in the queue),\n then e2 finally runs.  This situation could be solved by changing\n the semantics for \u003ccode\u003e\u003ca\u003edoNext\u003c/a\u003e\u003c/code\u003e as proposed there.\n\u003c/p\u003e\u003cp\u003eThis is primarily useful for separating an initial \u003ccode\u003eSetDebugHandlers\u003c/code\u003e\n event from the other event(s) being fired at the start\n of the simulation, so that they will be \"seen\" by the \n newly installed handlers.\n\u003c/p\u003e",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "(&-)",
          "package": "event-monad",
          "signature": "e1 -\u003e e2 -\u003e AdHocEvent m",
          "source": "src/Control-Monad-Event-BasicEvents.html#%26-",
          "type": "function"
        },
        "index": {
          "description": "version of that preserves distinctness of events at the expense of being able to guarantee proper interleaving with other events scheduled at the same time For example suppose composite event e1 e2 of this type is scheduled then third event e3 is scheduled for the same time The expected order of execution is e1 e2 e3 What actually happens is e1 e3 e2 because e1 e2 runs having the effect of running e1 and scheduling e2 then e3 runs because it next in the queue then e2 finally runs This situation could be solved by changing the semantics for doNext as proposed there This is primarily useful for separating an initial SetDebugHandlers event from the other event being fired at the start of the simulation so that they will be seen by the newly installed handlers",
          "hierarchy": "Control Monad Event BasicEvents",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "(&-) &-",
          "normalized": "a-\u003ea-\u003eAdHocEvent b",
          "package": "event-monad",
          "signature": "e-\u003ee-\u003eAdHocEvent m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#v:-38--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix operator to construct an event from a description and an action\n\u003c/p\u003e",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "(?:)",
          "package": "event-monad",
          "signature": "desc -\u003e m a -\u003e AdHocEvent m",
          "source": "src/Control-Monad-Event-BasicEvents.html#%3F%3A",
          "type": "function"
        },
        "index": {
          "description": "An infix operator to construct an event from description and an action",
          "hierarchy": "Control Monad Event BasicEvents",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "(?:) ?:",
          "normalized": "a-\u003eb c-\u003eAdHocEvent b",
          "package": "event-monad",
          "signature": "desc-\u003em a-\u003eAdHocEvent m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#v:-63-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame thing, but use an action to generate the description\n\u003c/p\u003e",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "(?::)",
          "package": "event-monad",
          "signature": "m Doc -\u003e m a -\u003e AdHocEvent m",
          "source": "src/Control-Monad-Event-BasicEvents.html#%3F%3A%3A",
          "type": "function"
        },
        "index": {
          "description": "Same thing but use an action to generate the description",
          "hierarchy": "Control Monad Event BasicEvents",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "(?::) ?::",
          "normalized": "a Doc-\u003ea b-\u003eAdHocEvent a",
          "package": "event-monad",
          "signature": "m Doc-\u003em a-\u003eAdHocEvent m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#v:-63-::"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix operator for defining a \"delayed\" event - or rather a \n new event that schedules its payload at a later time\n\u003c/p\u003e",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "(@:)",
          "package": "event-monad",
          "signature": "e -\u003e t -\u003e AdHocEvent m",
          "source": "src/Control-Monad-Event-BasicEvents.html#%40%3A",
          "type": "function"
        },
        "index": {
          "description": "An infix operator for defining delayed event or rather new event that schedules its payload at later time",
          "hierarchy": "Control Monad Event BasicEvents",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "(@:) @:",
          "normalized": "a-\u003eb-\u003eAdHocEvent c",
          "package": "event-monad",
          "signature": "e-\u003et-\u003eAdHocEvent m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#v:-64-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event.BasicEvents",
          "name": "AdHocEvent",
          "package": "event-monad",
          "signature": "AdHocEvent (m Doc) (m ())",
          "source": "src/Control-Monad-Event-BasicEvents.html#AdHocEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Event BasicEvents",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "AdHocEvent",
          "normalized": "AdHocEvent(a Doc)(a())",
          "package": "event-monad",
          "partial": "Ad Hoc Event",
          "signature": "AdHocEvent(m Doc)(m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#v:AdHocEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event.BasicEvents",
          "name": "StartSim",
          "package": "event-monad",
          "signature": "StartSim",
          "source": "src/Control-Monad-Event-BasicEvents.html#SimControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Event BasicEvents",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "StartSim",
          "package": "event-monad",
          "partial": "Start Sim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#v:StartSim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event.BasicEvents",
          "name": "StopSim",
          "package": "event-monad",
          "signature": "StopSim",
          "source": "src/Control-Monad-Event-BasicEvents.html#SimControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Event BasicEvents",
          "module": "Control.Monad.Event.BasicEvents",
          "name": "StopSim",
          "package": "event-monad",
          "partial": "Stop Sim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#v:StopSim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event.Classes",
          "name": "Classes",
          "package": "event-monad",
          "source": "src/Control-Monad-Event-Classes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "Classes",
          "package": "event-monad",
          "partial": "Classes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad in which an event (presumably one previously scheduled)\n can be canceled.\n\u003c/p\u003e",
          "module": "Control.Monad.Event.Classes",
          "name": "CancelEvent",
          "package": "event-monad",
          "source": "src/Control-Monad-Event-Classes.html#CancelEvent",
          "type": "class"
        },
        "index": {
          "description": "monad in which an event presumably one previously scheduled can be canceled",
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "CancelEvent",
          "package": "event-monad",
          "partial": "Cancel Event",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#t:CancelEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad in which an \u003ccode\u003e\u003ca\u003eEventDescriptor\u003c/a\u003e\u003c/code\u003e for the currently-executing\n event, if any, can be obtained.\n\u003c/p\u003e",
          "module": "Control.Monad.Event.Classes",
          "name": "GetCurrentEvent",
          "package": "event-monad",
          "source": "src/Control-Monad-Event-Classes.html#GetCurrentEvent",
          "type": "class"
        },
        "index": {
          "description": "monad in which an EventDescriptor for the currently-executing event if any can be obtained",
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "GetCurrentEvent",
          "package": "event-monad",
          "partial": "Get Current Event",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#t:GetCurrentEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad in which there is a concept of an \"event\" - an action with a\n sort of a special status, which can be described for humans and can be\n otherwise manipulated in monads implementing the classes to follow.\n\u003c/p\u003e",
          "module": "Control.Monad.Event.Classes",
          "name": "MonadEvent",
          "package": "event-monad",
          "source": "src/Control-Monad-Event-Classes.html#MonadEvent",
          "type": "class"
        },
        "index": {
          "description": "monad in which there is concept of an event an action with sort of special status which can be described for humans and can be otherwise manipulated in monads implementing the classes to follow",
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "MonadEvent",
          "package": "event-monad",
          "partial": "Monad Event",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#t:MonadEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad in which information about the event queue can be retrieved.\n\u003c/p\u003e",
          "module": "Control.Monad.Event.Classes",
          "name": "MonadEventQueueInfo",
          "package": "event-monad",
          "source": "src/Control-Monad-Event-Classes.html#MonadEventQueueInfo",
          "type": "class"
        },
        "index": {
          "description": "monad in which information about the event queue can be retrieved",
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "MonadEventQueueInfo",
          "package": "event-monad",
          "partial": "Monad Event Queue Info",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#t:MonadEventQueueInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad in which there is a concept of running and not-running and\n unrestricted operations for switching between them.\n\u003c/p\u003e",
          "module": "Control.Monad.Event.Classes",
          "name": "MonadSimControl",
          "package": "event-monad",
          "source": "src/Control-Monad-Event-Classes.html#MonadSimControl",
          "type": "class"
        },
        "index": {
          "description": "monad in which there is concept of running and not-running and unrestricted operations for switching between them",
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "MonadSimControl",
          "package": "event-monad",
          "partial": "Monad Sim Control",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#t:MonadSimControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-class for monads with a concept of time.  That concept need not\n necessarily meet any prior conditions - not even an Eq instance.\n\u003c/p\u003e",
          "module": "Control.Monad.Event.Classes",
          "name": "MonadTime",
          "package": "event-monad",
          "source": "src/Control-Monad-Event-Classes.html#MonadTime",
          "type": "class"
        },
        "index": {
          "description": "type-class for monads with concept of time That concept need not necessarily meet any prior conditions not even an Eq instance",
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "MonadTime",
          "package": "event-monad",
          "partial": "Monad Time",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#t:MonadTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad in which the currently executing event can be rescheduled.\n Note that calling \u003ccode\u003e\u003ca\u003eretryEventAt\u003c/a\u003e\u003c/code\u003e does not terminate the currently\n executing event - although perhaps it should.  Until a more permanent\n decision is made, it's probably best to make \u003ccode\u003e\u003ca\u003eretryEventAt\u003c/a\u003e\u003c/code\u003e the last\n action of an event when it is used, to minimize impact of future changes.\n\u003c/p\u003e",
          "module": "Control.Monad.Event.Classes",
          "name": "RetryEvent",
          "package": "event-monad",
          "source": "src/Control-Monad-Event-Classes.html#RetryEvent",
          "type": "class"
        },
        "index": {
          "description": "monad in which the currently executing event can be rescheduled Note that calling retryEventAt does not terminate the currently executing event although perhaps it should Until more permanent decision is made it probably best to make retryEventAt the last action of an event when it is used to minimize impact of future changes",
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "RetryEvent",
          "package": "event-monad",
          "partial": "Retry Event",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#t:RetryEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad which can schedule events for later execution.  For obvious\n reasons, such a monad must also have a concept of events (covering the\n event that the user is trying to schedule) and a concept of time.\n\u003c/p\u003e",
          "module": "Control.Monad.Event.Classes",
          "name": "ScheduleEvent",
          "package": "event-monad",
          "source": "src/Control-Monad-Event-Classes.html#ScheduleEvent",
          "type": "class"
        },
        "index": {
          "description": "monad which can schedule events for later execution For obvious reasons such monad must also have concept of events covering the event that the user is trying to schedule and concept of time",
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "ScheduleEvent",
          "package": "event-monad",
          "partial": "Schedule Event",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#t:ScheduleEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCancel an event given its \u003ccode\u003e\u003ca\u003eEventID\u003c/a\u003e\u003c/code\u003e.  If successful (and\n if the monad's implementation allows it), an \u003ccode\u003e\u003ca\u003eEventDescriptor\u003c/a\u003e\u003c/code\u003e\n (an existential wrapper describing an event, its ID, and\n the time at which it would have run) containing the \n canceled event is returned.\n\u003c/p\u003e",
          "module": "Control.Monad.Event.Classes",
          "name": "cancelEvent",
          "package": "event-monad",
          "signature": "EventID -\u003e m (Maybe (EventDescriptor m t))",
          "source": "src/Control-Monad-Event-Classes.html#cancelEvent",
          "type": "method"
        },
        "index": {
          "description": "Cancel an event given its EventID If successful and if the monad implementation allows it an EventDescriptor an existential wrapper describing an event its ID and the time at which it would have run containing the canceled event is returned",
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "cancelEvent",
          "normalized": "EventID-\u003ea(Maybe(EventDescriptor a b))",
          "package": "event-monad",
          "partial": "Event",
          "signature": "EventID-\u003em(Maybe(EventDescriptor m t))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:cancelEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event.Classes",
          "name": "describeEvent",
          "package": "event-monad",
          "signature": "e -\u003e m Doc",
          "source": "src/Control-Monad-Event-Classes.html#describeEvent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "describeEvent",
          "normalized": "a-\u003eb Doc",
          "package": "event-monad",
          "partial": "Event",
          "signature": "e-\u003em Doc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:describeEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eschedule an event to run at the current time.  This does not \n constitute a promise to execute immediately or in any particular\n order relative to other events that have been or will be\n scheduled for the current time.\n\u003c/p\u003e\u003cp\u003eIf an implementor has a time type which is an instance of \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e, then\n \u003ccode\u003e\u003ca\u003edoNext\u003c/a\u003e\u003c/code\u003e should be equivalent to \u003ccode\u003e\u003ca\u003escheduleEventIn\u003c/a\u003e\u003c/code\u003e 0 - unless the\n monad's documentation clearly warns to the contrary in a really big\n typeface.  ; )  Note that this clause may change to also strongly\n suggest that \u003ccode\u003e\u003ca\u003edoNext\u003c/a\u003e\u003c/code\u003e put its event at the very front of the queue\n (ie, before any other events already scheduled for the current time).\n\u003c/p\u003e",
          "module": "Control.Monad.Event.Classes",
          "name": "doNext",
          "package": "event-monad",
          "signature": "e -\u003e m ()",
          "source": "src/Control-Monad-Event-Classes.html#doNext",
          "type": "method"
        },
        "index": {
          "description": "schedule an event to run at the current time This does not constitute promise to execute immediately or in any particular order relative to other events that have been or will be scheduled for the current time If an implementor has time type which is an instance of Num then doNext should be equivalent to scheduleEventIn unless the monad documentation clearly warns to the contrary in really big typeface Note that this clause may change to also strongly suggest that doNext put its event at the very front of the queue ie before any other events already scheduled for the current time",
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "doNext",
          "normalized": "a-\u003eb()",
          "package": "event-monad",
          "partial": "Next",
          "signature": "e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:doNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of (some or all of) the events coming up.\n There is no obligation on the part of the monad to provide\n anything at all.\n\u003c/p\u003e",
          "module": "Control.Monad.Event.Classes",
          "name": "eventQueueContents",
          "package": "event-monad",
          "signature": "m [EventDescriptor m t]",
          "source": "src/Control-Monad-Event-Classes.html#eventQueueContents",
          "type": "method"
        },
        "index": {
          "description": "Return list of some or all of the events coming up There is no obligation on the part of the monad to provide anything at all",
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "eventQueueContents",
          "normalized": "a[EventDescriptor a b]",
          "package": "event-monad",
          "partial": "Queue Contents",
          "signature": "m[EventDescriptor m t]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:eventQueueContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of events currently scheduled.\n\u003c/p\u003e",
          "module": "Control.Monad.Event.Classes",
          "name": "eventQueueSize",
          "package": "event-monad",
          "signature": "m Int",
          "source": "src/Control-Monad-Event-Classes.html#eventQueueSize",
          "type": "method"
        },
        "index": {
          "description": "Return the number of events currently scheduled",
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "eventQueueSize",
          "package": "event-monad",
          "partial": "Queue Size",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:eventQueueSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event.Classes",
          "name": "getCurrentEvent",
          "package": "event-monad",
          "signature": "m (Maybe (EventDescriptor m t))",
          "source": "src/Control-Monad-Event-Classes.html#getCurrentEvent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "getCurrentEvent",
          "package": "event-monad",
          "partial": "Current Event",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:getCurrentEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event.Classes",
          "name": "getCurrentTime",
          "package": "event-monad",
          "signature": "m t",
          "source": "src/Control-Monad-Event-Classes.html#getCurrentTime",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "getCurrentTime",
          "package": "event-monad",
          "partial": "Current Time",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:getCurrentTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event.Classes",
          "name": "isSimulationRunning",
          "package": "event-monad",
          "signature": "m Bool",
          "source": "src/Control-Monad-Event-Classes.html#isSimulationRunning",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "isSimulationRunning",
          "package": "event-monad",
          "partial": "Simulation Running",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:isSimulationRunning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event.Classes",
          "name": "pauseSimulation",
          "package": "event-monad",
          "signature": "m ()",
          "source": "src/Control-Monad-Event-Classes.html#pauseSimulation",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "pauseSimulation",
          "normalized": "a()",
          "package": "event-monad",
          "partial": "Simulation",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:pauseSimulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event.Classes",
          "name": "resumeSimulation",
          "package": "event-monad",
          "signature": "m ()",
          "source": "src/Control-Monad-Event-Classes.html#resumeSimulation",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "resumeSimulation",
          "normalized": "a()",
          "package": "event-monad",
          "partial": "Simulation",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:resumeSimulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event.Classes",
          "name": "retryEventAt",
          "package": "event-monad",
          "signature": "t -\u003e m EventID",
          "source": "src/Control-Monad-Event-Classes.html#retryEventAt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "retryEventAt",
          "normalized": "a-\u003eb EventID",
          "package": "event-monad",
          "partial": "Event At",
          "signature": "t-\u003em EventID",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:retryEventAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eretry the currently-executing event at an absolute time (see \u003ccode\u003e\u003ca\u003eretryEventIn\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Control.Monad.Event.Classes",
          "name": "retryEventIn",
          "package": "event-monad",
          "signature": "t -\u003e m EventID",
          "source": "src/Control-Monad-Event-Classes.html#retryEventIn",
          "type": "function"
        },
        "index": {
          "description": "retry the currently-executing event at an absolute time see retryEventIn",
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "retryEventIn",
          "normalized": "a-\u003eb EventID",
          "package": "event-monad",
          "partial": "Event In",
          "signature": "t-\u003em EventID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:retryEventIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event.Classes",
          "name": "runEvent",
          "package": "event-monad",
          "signature": "e -\u003e m ()",
          "source": "src/Control-Monad-Event-Classes.html#runEvent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "runEvent",
          "normalized": "a-\u003eb()",
          "package": "event-monad",
          "partial": "Event",
          "signature": "e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:runEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSchedule an event for execution at a time.\n The meaning of \"time\" is left entirely up to the\n implementor, however it will generally be the case that time is\n an instance of \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e and/or is totally ordered in the usual way.\n\u003c/p\u003e\u003cp\u003eReturns an \u003ccode\u003e\u003ca\u003eEventID\u003c/a\u003e\u003c/code\u003e that can be used to identify the event\n if needed later (for example, to cancel it).\n\u003c/p\u003e",
          "module": "Control.Monad.Event.Classes",
          "name": "scheduleEventAt",
          "package": "event-monad",
          "signature": "t -\u003e e -\u003e m EventID",
          "source": "src/Control-Monad-Event-Classes.html#scheduleEventAt",
          "type": "method"
        },
        "index": {
          "description": "Schedule an event for execution at time The meaning of time is left entirely up to the implementor however it will generally be the case that time is an instance of Num and or is totally ordered in the usual way Returns an EventID that can be used to identify the event if needed later for example to cancel it",
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "scheduleEventAt",
          "normalized": "a-\u003eb-\u003ec EventID",
          "package": "event-monad",
          "partial": "Event At",
          "signature": "t-\u003ee-\u003em EventID",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:scheduleEventAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eschedule an event at an absolute time (see \u003ccode\u003e\u003ca\u003escheduleEventIn\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Control.Monad.Event.Classes",
          "name": "scheduleEventIn",
          "package": "event-monad",
          "signature": "t -\u003e e -\u003e m EventID",
          "source": "src/Control-Monad-Event-Classes.html#scheduleEventIn",
          "type": "function"
        },
        "index": {
          "description": "schedule an event at an absolute time see scheduleEventIn",
          "hierarchy": "Control Monad Event Classes",
          "module": "Control.Monad.Event.Classes",
          "name": "scheduleEventIn",
          "normalized": "a-\u003eb-\u003ec EventID",
          "package": "event-monad",
          "partial": "Event In",
          "signature": "t-\u003ee-\u003em EventID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:scheduleEventIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event",
          "name": "Event",
          "package": "event-monad",
          "source": "src/Control-Monad-Event.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Event",
          "module": "Control.Monad.Event",
          "name": "Event",
          "package": "event-monad",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn existential wrapper containing an event which can be executed in the\n monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eI would like to existentially quantify the time parameter too, since it's\n uniquely determined according to the functional dependencies of \u003ccode\u003e\u003ca\u003eMonadTime\u003c/a\u003e\u003c/code\u003e,\n but GHC doesn't unify it with its actual type in pattern matches - I was\n not able to use it as a \u003ccode\u003e\u003ca\u003ePrintfArg\u003c/a\u003e\u003c/code\u003e in:\n\u003c/p\u003e\u003cpre\u003e instance MonadEvent (EventT Double IO) (EventDescriptor (EventT Double IO))\n\u003c/pre\u003e",
          "module": "Control.Monad.Event",
          "name": "EventDescriptor",
          "package": "event-monad",
          "source": "src/Control-Monad-Event-Internal-Types.html#EventDescriptor",
          "type": "data"
        },
        "index": {
          "description": "An existential wrapper containing an event which can be executed in the monad would like to existentially quantify the time parameter too since it uniquely determined according to the functional dependencies of MonadTime but GHC doesn unify it with its actual type in pattern matches was not able to use it as PrintfArg in instance MonadEvent EventT Double IO EventDescriptor EventT Double IO",
          "hierarchy": "Control Monad Event",
          "module": "Control.Monad.Event",
          "name": "EventDescriptor",
          "package": "event-monad",
          "partial": "Event Descriptor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#t:EventDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque identifier for events.\n\u003c/p\u003e",
          "module": "Control.Monad.Event",
          "name": "EventID",
          "package": "event-monad",
          "source": "src/Control-Monad-Event-Internal-EventID.html#EventID",
          "type": "newtype"
        },
        "index": {
          "description": "An opaque identifier for events",
          "hierarchy": "Control Monad Event",
          "module": "Control.Monad.Event",
          "name": "EventID",
          "package": "event-monad",
          "partial": "Event ID",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#t:EventID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event",
          "name": "EventM",
          "package": "event-monad",
          "source": "src/Control-Monad-EventM.html#EventM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Event",
          "module": "Control.Monad.Event",
          "name": "EventM",
          "package": "event-monad",
          "partial": "Event",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#t:EventM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad transformer which adds an event queue and related operations to\n an underlying monad.  The \"t\" parameter specifies the type of the\n simulation time.\n\u003c/p\u003e\u003cp\u003eSeveral hooks are provided to allow special handling of various events,\n such as the progression of time, the scheduling or canceling or dispatch\n of an event, etc.\n\u003c/p\u003e",
          "module": "Control.Monad.Event",
          "name": "EventT",
          "package": "event-monad",
          "source": "src/Control-Monad-EventT.html#EventT",
          "type": "data"
        },
        "index": {
          "description": "monad transformer which adds an event queue and related operations to an underlying monad The parameter specifies the type of the simulation time Several hooks are provided to allow special handling of various events such as the progression of time the scheduling or canceling or dispatch of an event etc",
          "hierarchy": "Control Monad Event",
          "module": "Control.Monad.Event",
          "name": "EventT",
          "package": "event-monad",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#t:EventT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event",
          "name": "EventDescriptor",
          "package": "event-monad",
          "signature": "EventDescriptor",
          "source": "src/Control-Monad-Event-Internal-Types.html#EventDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Event",
          "module": "Control.Monad.Event",
          "name": "EventDescriptor",
          "package": "event-monad",
          "partial": "Event Descriptor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#v:EventDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event",
          "name": "EventID",
          "package": "event-monad",
          "signature": "EventID Int",
          "source": "src/Control-Monad-Event-Internal-EventID.html#EventID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Event",
          "module": "Control.Monad.Event",
          "name": "EventID",
          "package": "event-monad",
          "partial": "Event ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#v:EventID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event",
          "name": "event",
          "package": "event-monad",
          "signature": "e",
          "source": "src/Control-Monad-Event-Internal-Types.html#EventDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Event",
          "module": "Control.Monad.Event",
          "name": "event",
          "package": "event-monad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#v:event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event",
          "name": "eventId",
          "package": "event-monad",
          "signature": "EventID",
          "source": "src/Control-Monad-Event-Internal-Types.html#EventDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Event",
          "module": "Control.Monad.Event",
          "name": "eventId",
          "package": "event-monad",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#v:eventId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Event",
          "name": "eventTime",
          "package": "event-monad",
          "signature": "t",
          "source": "src/Control-Monad-Event-Internal-Types.html#EventDescriptor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Event",
          "module": "Control.Monad.Event",
          "name": "eventTime",
          "package": "event-monad",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#v:eventTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.EventM",
          "name": "EventM",
          "package": "event-monad",
          "source": "src/Control-Monad-EventM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad EventM",
          "module": "Control.Monad.EventM",
          "name": "EventM",
          "package": "event-monad",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.EventM",
          "name": "EventIO",
          "package": "event-monad",
          "source": "src/Control-Monad-EventM.html#EventIO",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad EventM",
          "module": "Control.Monad.EventM",
          "name": "EventIO",
          "package": "event-monad",
          "partial": "Event IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#t:EventIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.EventM",
          "name": "EventIOState",
          "package": "event-monad",
          "source": "src/Control-Monad-EventM.html#EventIOState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad EventM",
          "module": "Control.Monad.EventM",
          "name": "EventIOState",
          "package": "event-monad",
          "partial": "Event IOState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#t:EventIOState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.EventM",
          "name": "EventM",
          "package": "event-monad",
          "source": "src/Control-Monad-EventM.html#EventM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad EventM",
          "module": "Control.Monad.EventM",
          "name": "EventM",
          "package": "event-monad",
          "partial": "Event",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#t:EventM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.EventM",
          "name": "HandlerAccessor",
          "package": "event-monad",
          "source": "src/Control-Monad-EventM.html#HandlerAccessor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad EventM",
          "module": "Control.Monad.EventM",
          "name": "HandlerAccessor",
          "package": "event-monad",
          "partial": "Handler Accessor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#t:HandlerAccessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an event handler to be called when the specified event happens.\n\u003c/p\u003e",
          "module": "Control.Monad.EventM",
          "name": "addHandler",
          "package": "event-monad",
          "signature": "HandlerAccessor t a b -\u003e (a -\u003e EventIO t b) -\u003e EventIO t HandlerID",
          "source": "src/Control-Monad-EventM.html#addHandler",
          "type": "function"
        },
        "index": {
          "description": "Add an event handler to be called when the specified event happens",
          "hierarchy": "Control Monad EventM",
          "module": "Control.Monad.EventM",
          "name": "addHandler",
          "normalized": "HandlerAccessor a b c-\u003e(b-\u003eEventIO a c)-\u003eEventIO a HandlerID",
          "package": "event-monad",
          "partial": "Handler",
          "signature": "HandlerAccessor t a b-\u003e(a-\u003eEventIO t b)-\u003eEventIO t HandlerID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:addHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.EventM",
          "name": "newEventIOState",
          "package": "event-monad",
          "signature": "t -\u003e IO (EventIOState t)",
          "source": "src/Control-Monad-EventM.html#newEventIOState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad EventM",
          "module": "Control.Monad.EventM",
          "name": "newEventIOState",
          "normalized": "a-\u003eIO(EventIOState a)",
          "package": "event-monad",
          "partial": "Event IOState",
          "signature": "t-\u003eIO(EventIOState t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:newEventIOState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.EventM",
          "name": "onClockChanged",
          "package": "event-monad",
          "signature": "EventIOHandlers t -\u003e Ref IO (HandlerSet (EventIO t) (t, t) ())",
          "source": "src/Control-Monad-EventM.html#onClockChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad EventM",
          "module": "Control.Monad.EventM",
          "name": "onClockChanged",
          "normalized": "EventIOHandlers a-\u003eRef IO(HandlerSet(EventIO a)(a,a)())",
          "package": "event-monad",
          "partial": "Clock Changed",
          "signature": "EventIOHandlers t-\u003eRef IO(HandlerSet(EventIO t)(t,t)())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:onClockChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.EventM",
          "name": "onEventCancel",
          "package": "event-monad",
          "signature": "EventIOHandlers t -\u003e Ref IO (HandlerSet (EventIO t) (Either EventID (EventDescriptor (EventIO t) t)) ())",
          "source": "src/Control-Monad-EventM.html#onEventCancel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad EventM",
          "module": "Control.Monad.EventM",
          "name": "onEventCancel",
          "normalized": "EventIOHandlers a-\u003eRef IO(HandlerSet(EventIO a)(Either EventID(EventDescriptor(EventIO a)a))())",
          "package": "event-monad",
          "partial": "Event Cancel",
          "signature": "EventIOHandlers t-\u003eRef IO(HandlerSet(EventIO t)(Either EventID(EventDescriptor(EventIO t)t))())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:onEventCancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.EventM",
          "name": "onEventComplete",
          "package": "event-monad",
          "signature": "EventIOHandlers t -\u003e Ref IO (HandlerSet (EventIO t) (EventDescriptor (EventIO t) t) ())",
          "source": "src/Control-Monad-EventM.html#onEventComplete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad EventM",
          "module": "Control.Monad.EventM",
          "name": "onEventComplete",
          "normalized": "EventIOHandlers a-\u003eRef IO(HandlerSet(EventIO a)(EventDescriptor(EventIO a)a)())",
          "package": "event-monad",
          "partial": "Event Complete",
          "signature": "EventIOHandlers t-\u003eRef IO(HandlerSet(EventIO t)(EventDescriptor(EventIO t)t)())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:onEventComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.EventM",
          "name": "onEventDispatch",
          "package": "event-monad",
          "signature": "EventIOHandlers t -\u003e Ref IO (HandlerSet (EventIO t) (EventDescriptor (EventIO t) t) ())",
          "source": "src/Control-Monad-EventM.html#onEventDispatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad EventM",
          "module": "Control.Monad.EventM",
          "name": "onEventDispatch",
          "normalized": "EventIOHandlers a-\u003eRef IO(HandlerSet(EventIO a)(EventDescriptor(EventIO a)a)())",
          "package": "event-monad",
          "partial": "Event Dispatch",
          "signature": "EventIOHandlers t-\u003eRef IO(HandlerSet(EventIO t)(EventDescriptor(EventIO t)t)())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:onEventDispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.EventM",
          "name": "onEventSchedule",
          "package": "event-monad",
          "signature": "EventIOHandlers t -\u003e Ref IO (HandlerSet (EventIO t) (EventDescriptor (EventIO t) t) ())",
          "source": "src/Control-Monad-EventM.html#onEventSchedule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad EventM",
          "module": "Control.Monad.EventM",
          "name": "onEventSchedule",
          "normalized": "EventIOHandlers a-\u003eRef IO(HandlerSet(EventIO a)(EventDescriptor(EventIO a)a)())",
          "package": "event-monad",
          "partial": "Event Schedule",
          "signature": "EventIOHandlers t-\u003eRef IO(HandlerSet(EventIO t)(EventDescriptor(EventIO t)t)())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:onEventSchedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an event handler given its ID, and return it if it was in the set.\n\u003c/p\u003e",
          "module": "Control.Monad.EventM",
          "name": "removeHandler",
          "package": "event-monad",
          "signature": "HandlerAccessor t a b -\u003e HandlerID -\u003e EventIO t (Maybe (a -\u003e EventIO t b))",
          "source": "src/Control-Monad-EventM.html#removeHandler",
          "type": "function"
        },
        "index": {
          "description": "Remove an event handler given its ID and return it if it was in the set",
          "hierarchy": "Control Monad EventM",
          "module": "Control.Monad.EventM",
          "name": "removeHandler",
          "normalized": "HandlerAccessor a b c-\u003eHandlerID-\u003eEventIO a(Maybe(b-\u003eEventIO a c))",
          "package": "event-monad",
          "partial": "Handler",
          "signature": "HandlerAccessor t a b-\u003eHandlerID-\u003eEventIO t(Maybe(a-\u003eEventIO t b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:removeHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the event queue and other stuff, run the provided \"start \n event\", and run the queue until it's empty or until the simulation is\n paused.\n\u003c/p\u003e",
          "module": "Control.Monad.EventM",
          "name": "runEventGraph",
          "package": "event-monad",
          "signature": "e -\u003e IO (EventIOState t)",
          "source": "src/Control-Monad-EventM.html#runEventGraph",
          "type": "function"
        },
        "index": {
          "description": "Initialize the event queue and other stuff run the provided start event and run the queue until it empty or until the simulation is paused",
          "hierarchy": "Control Monad EventM",
          "module": "Control.Monad.EventM",
          "name": "runEventGraph",
          "normalized": "a-\u003eIO(EventIOState b)",
          "package": "event-monad",
          "partial": "Event Graph",
          "signature": "e-\u003eIO(EventIOState t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:runEventGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly pull and run the next event in the queue until it's \n empty or until the simulation is paused using \u003ccode\u003e\u003ca\u003epauseSimulation\u003c/a\u003e\u003c/code\u003e\n or something equivalent.\n\u003c/p\u003e",
          "module": "Control.Monad.EventM",
          "name": "runEventGraphWithState",
          "package": "event-monad",
          "signature": "EventIOState t -\u003e IO ()",
          "source": "src/Control-Monad-EventM.html#runEventGraphWithState",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly pull and run the next event in the queue until it empty or until the simulation is paused using pauseSimulation or something equivalent",
          "hierarchy": "Control Monad EventM",
          "module": "Control.Monad.EventM",
          "name": "runEventGraphWithState",
          "normalized": "EventIOState a-\u003eIO()",
          "package": "event-monad",
          "partial": "Event Graph With State",
          "signature": "EventIOState t-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:runEventGraphWithState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003eEventT\u003c/code\u003e wrapped action.  This is a \"raw\" action - there is no \n interaction with the state (including event graph) except whatever the\n action itself does.\n\u003c/p\u003e",
          "module": "Control.Monad.EventM",
          "name": "runEventIO",
          "package": "event-monad",
          "signature": "EventIO t a -\u003e EventIOState t -\u003e IO a",
          "source": "src/Control-Monad-EventM.html#runEventIO",
          "type": "function"
        },
        "index": {
          "description": "Run an EventT wrapped action This is raw action there is no interaction with the state including event graph except whatever the action itself does",
          "hierarchy": "Control Monad EventM",
          "module": "Control.Monad.EventM",
          "name": "runEventIO",
          "normalized": "EventIO a b-\u003eEventIOState a-\u003eIO b",
          "package": "event-monad",
          "partial": "Event IO",
          "signature": "EventIO t a-\u003eEventIOState t-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:runEventIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.EventT",
          "name": "EventT",
          "package": "event-monad",
          "source": "src/Control-Monad-EventT.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "EventT",
          "package": "event-monad",
          "partial": "Event",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad transformer which adds an event queue and related operations to\n an underlying monad.  The \"t\" parameter specifies the type of the\n simulation time.\n\u003c/p\u003e\u003cp\u003eSeveral hooks are provided to allow special handling of various events,\n such as the progression of time, the scheduling or canceling or dispatch\n of an event, etc.\n\u003c/p\u003e",
          "module": "Control.Monad.EventT",
          "name": "EventT",
          "package": "event-monad",
          "source": "src/Control-Monad-EventT.html#EventT",
          "type": "data"
        },
        "index": {
          "description": "monad transformer which adds an event queue and related operations to an underlying monad The parameter specifies the type of the simulation time Several hooks are provided to allow special handling of various events such as the progression of time the scheduling or canceling or dispatch of an event etc",
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "EventT",
          "package": "event-monad",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#t:EventT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.EventT",
          "name": "EventT_RState",
          "package": "event-monad",
          "source": "src/Control-Monad-EventT.html#EventT_RState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "EventT_RState",
          "package": "event-monad",
          "partial": "Event RState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#t:EventT_RState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.EventT",
          "name": "EventT_RWState",
          "package": "event-monad",
          "source": "src/Control-Monad-EventT.html#EventT_RWState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "EventT_RWState",
          "package": "event-monad",
          "partial": "Event RWState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#t:EventT_RWState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.EventT",
          "name": "HandlerAccessor",
          "package": "event-monad",
          "source": "src/Control-Monad-EventT.html#HandlerAccessor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "HandlerAccessor",
          "package": "event-monad",
          "partial": "Handler Accessor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#t:HandlerAccessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an event handler to be called when the specified event happens.\n\u003c/p\u003e",
          "module": "Control.Monad.EventT",
          "name": "addHandler",
          "package": "event-monad",
          "signature": "HandlerAccessor t m a b -\u003e (a -\u003e EventT t m b) -\u003e EventT t m HandlerID",
          "source": "src/Control-Monad-EventT.html#addHandler",
          "type": "function"
        },
        "index": {
          "description": "Add an event handler to be called when the specified event happens",
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "addHandler",
          "normalized": "HandlerAccessor a b c d-\u003e(c-\u003eEventT a b d)-\u003eEventT a b HandlerID",
          "package": "event-monad",
          "partial": "Handler",
          "signature": "HandlerAccessor t m a b-\u003e(a-\u003eEventT t m b)-\u003eEventT t m HandlerID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:addHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA new instance of the read-only portion of the \u003ccode\u003e\u003ca\u003eEventT\u003c/a\u003e\u003c/code\u003e internal\n state.\n\u003c/p\u003e",
          "module": "Control.Monad.EventT",
          "name": "newEventT_RState",
          "package": "event-monad",
          "signature": "EventT_RState t m",
          "source": "src/Control-Monad-EventT.html#newEventT_RState",
          "type": "function"
        },
        "index": {
          "description": "new instance of the read-only portion of the EventT internal state",
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "newEventT_RState",
          "package": "event-monad",
          "partial": "Event RState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:newEventT_RState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA new instance of the read/write portion of the \u003ccode\u003e\u003ca\u003eEventT\u003c/a\u003e\u003c/code\u003e internal\n state.  The parameter is the initial time value.\n\u003c/p\u003e",
          "module": "Control.Monad.EventT",
          "name": "newEventT_RWState",
          "package": "event-monad",
          "signature": "t -\u003e EventT_RWState t m",
          "source": "src/Control-Monad-EventT.html#newEventT_RWState",
          "type": "function"
        },
        "index": {
          "description": "new instance of the read write portion of the EventT internal state The parameter is the initial time value",
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "newEventT_RWState",
          "normalized": "a-\u003eEventT_RWState a b",
          "package": "event-monad",
          "partial": "Event RWState",
          "signature": "t-\u003eEventT_RWState t m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:newEventT_RWState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFires whenever the clock changes, and is passed a tuple containing\n (old time, new time)\n\u003c/p\u003e",
          "module": "Control.Monad.EventT",
          "name": "onClockChanged",
          "package": "event-monad",
          "signature": "HandlerAccessor t m (t, t) ()",
          "source": "src/Control-Monad-EventT.html#onClockChanged",
          "type": "function"
        },
        "index": {
          "description": "Fires whenever the clock changes and is passed tuple containing old time new time",
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "onClockChanged",
          "normalized": "HandlerAccessor a b(a,a)()",
          "package": "event-monad",
          "partial": "Clock Changed",
          "signature": "HandlerAccessor t m(t,t)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:onClockChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFires after an event is canceled.  Is passed either an \u003ccode\u003e\u003ca\u003eEventID\u003c/a\u003e\u003c/code\u003e (if the\n cancellation failed) or an \u003ccode\u003e\u003ca\u003eEventDescriptor\u003c/a\u003e\u003c/code\u003e for the event that was canceled.\n\u003c/p\u003e",
          "module": "Control.Monad.EventT",
          "name": "onEventCancel",
          "package": "event-monad",
          "signature": "HandlerAccessor t m (Either EventID (EventDescriptor (EventT t m) t)) ()",
          "source": "src/Control-Monad-EventT.html#onEventCancel",
          "type": "function"
        },
        "index": {
          "description": "Fires after an event is canceled Is passed either an EventID if the cancellation failed or an EventDescriptor for the event that was canceled",
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "onEventCancel",
          "normalized": "HandlerAccessor a b(Either EventID(EventDescriptor(EventT a b)a))()",
          "package": "event-monad",
          "partial": "Event Cancel",
          "signature": "HandlerAccessor t m(Either EventID(EventDescriptor(EventT t m)t))()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:onEventCancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFires after an event returns.  Is passed an \u003ccode\u003e\u003ca\u003eEventDescriptor\u003c/a\u003e\u003c/code\u003e for the\n event that just finished.\n\u003c/p\u003e",
          "module": "Control.Monad.EventT",
          "name": "onEventComplete",
          "package": "event-monad",
          "signature": "HandlerAccessor t m (EventDescriptor (EventT t m) t) ()",
          "source": "src/Control-Monad-EventT.html#onEventComplete",
          "type": "function"
        },
        "index": {
          "description": "Fires after an event returns Is passed an EventDescriptor for the event that just finished",
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "onEventComplete",
          "normalized": "HandlerAccessor a b(EventDescriptor(EventT a b)a)()",
          "package": "event-monad",
          "partial": "Event Complete",
          "signature": "HandlerAccessor t m(EventDescriptor(EventT t m)t)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:onEventComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFires just before an event is dispatched.  Is passed an \u003ccode\u003e\u003ca\u003eEventDescriptor\u003c/a\u003e\u003c/code\u003e\n describing the event about to be run.\n\u003c/p\u003e",
          "module": "Control.Monad.EventT",
          "name": "onEventDispatch",
          "package": "event-monad",
          "signature": "HandlerAccessor t m (EventDescriptor (EventT t m) t) ()",
          "source": "src/Control-Monad-EventT.html#onEventDispatch",
          "type": "function"
        },
        "index": {
          "description": "Fires just before an event is dispatched Is passed an EventDescriptor describing the event about to be run",
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "onEventDispatch",
          "normalized": "HandlerAccessor a b(EventDescriptor(EventT a b)a)()",
          "package": "event-monad",
          "partial": "Event Dispatch",
          "signature": "HandlerAccessor t m(EventDescriptor(EventT t m)t)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:onEventDispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFires after an event is scheduled.  Is passed an \u003ccode\u003e\u003ca\u003eEventDescriptor\u003c/a\u003e\u003c/code\u003e for\n the event.\n\u003c/p\u003e",
          "module": "Control.Monad.EventT",
          "name": "onEventSchedule",
          "package": "event-monad",
          "signature": "HandlerAccessor t m (EventDescriptor (EventT t m) t) ()",
          "source": "src/Control-Monad-EventT.html#onEventSchedule",
          "type": "function"
        },
        "index": {
          "description": "Fires after an event is scheduled Is passed an EventDescriptor for the event",
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "onEventSchedule",
          "normalized": "HandlerAccessor a b(EventDescriptor(EventT a b)a)()",
          "package": "event-monad",
          "partial": "Event Schedule",
          "signature": "HandlerAccessor t m(EventDescriptor(EventT t m)t)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:onEventSchedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an event handler given its ID, and return it if it was in the set.\n\u003c/p\u003e",
          "module": "Control.Monad.EventT",
          "name": "removeHandler",
          "package": "event-monad",
          "signature": "HandlerAccessor t m a b -\u003e HandlerID -\u003e EventT t m (Maybe (a -\u003e EventT t m b))",
          "source": "src/Control-Monad-EventT.html#removeHandler",
          "type": "function"
        },
        "index": {
          "description": "Remove an event handler given its ID and return it if it was in the set",
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "removeHandler",
          "normalized": "HandlerAccessor a b c d-\u003eHandlerID-\u003eEventT a b(Maybe(c-\u003eEventT a b d))",
          "package": "event-monad",
          "partial": "Handler",
          "signature": "HandlerAccessor t m a b-\u003eHandlerID-\u003eEventT t m(Maybe(a-\u003eEventT t m b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:removeHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the event queue and other stuff, enqueue the provided \"start \n event\", and run the queue until it's empty or until the simulation is\n paused.\n\u003c/p\u003e",
          "module": "Control.Monad.EventT",
          "name": "runEventGraph",
          "package": "event-monad",
          "signature": "e -\u003e m (EventT_RState t m, EventT_RWState t m)",
          "source": "src/Control-Monad-EventT.html#runEventGraph",
          "type": "function"
        },
        "index": {
          "description": "Initialize the event queue and other stuff enqueue the provided start event and run the queue until it empty or until the simulation is paused",
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "runEventGraph",
          "normalized": "a-\u003eb(EventT_RState c b,EventT_RWState c b)",
          "package": "event-monad",
          "partial": "Event Graph",
          "signature": "e-\u003em(EventT_RState t m,EventT_RWState t m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:runEventGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly pull and run the next event in the queue until it's \n empty or until the simulation is paused using \u003ccode\u003e\u003ca\u003epauseSimulation\u003c/a\u003e\u003c/code\u003e\n or something equivalent.\n\u003c/p\u003e",
          "module": "Control.Monad.EventT",
          "name": "runEventGraphWithState",
          "package": "event-monad",
          "signature": "EventT_RState t m -\u003e EventT_RWState t m -\u003e m (EventT_RWState t m)",
          "source": "src/Control-Monad-EventT.html#runEventGraphWithState",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly pull and run the next event in the queue until it empty or until the simulation is paused using pauseSimulation or something equivalent",
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "runEventGraphWithState",
          "normalized": "EventT_RState a b-\u003eEventT_RWState a b-\u003eb(EventT_RWState a b)",
          "package": "event-monad",
          "partial": "Event Graph With State",
          "signature": "EventT_RState t m-\u003eEventT_RWState t m-\u003em(EventT_RWState t m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:runEventGraphWithState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eEventT\u003c/a\u003e\u003c/code\u003e wrapped action.  This is a \"raw\" action - there is no \n interaction with the state (including event graph) except whatever the\n action itself does.\n\u003c/p\u003e",
          "module": "Control.Monad.EventT",
          "name": "runEventT",
          "package": "event-monad",
          "signature": "EventT t m a -\u003e EventT_RState t m -\u003e EventT_RWState t m -\u003e m (a, EventT_RWState t m)",
          "source": "src/Control-Monad-EventT.html#runEventT",
          "type": "function"
        },
        "index": {
          "description": "Run an EventT wrapped action This is raw action there is no interaction with the state including event graph except whatever the action itself does",
          "hierarchy": "Control Monad EventT",
          "module": "Control.Monad.EventT",
          "name": "runEventT",
          "normalized": "EventT a b c-\u003eEventT_RState a b-\u003eEventT_RWState a b-\u003eb(c,EventT_RWState a b)",
          "package": "event-monad",
          "partial": "Event",
          "signature": "EventT t m a-\u003eEventT_RState t m-\u003eEventT_RWState t m-\u003em(a,EventT_RWState t m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:runEventT"
      }
    }
  ]
]