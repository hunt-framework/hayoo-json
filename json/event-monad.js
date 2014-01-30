[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#",
      "description": {
        "fct-module": "Control.Monad.Event.BasicEvents",
        "fct-package": "event-monad",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Event-BasicEvents.html",
        "fct-type": "module",
        "title": "BasicEvents"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event BasicEvents",
        "module": "Control.Monad.Event.BasicEvents",
        "name": "BasicEvents",
        "normalized": "",
        "package": "event-monad",
        "partial": "Basic Events",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#t:AdHocEvent",
      "description": {
        "fct-descr": "\u003cp\u003eAn event with description and effect supplied at run time\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.BasicEvents",
        "fct-package": "event-monad",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Event-BasicEvents.html#AdHocEvent",
        "fct-type": "data",
        "title": "AdHocEvent"
      },
      "index": {
        "description": "An event with description and effect supplied at run time",
        "hierarchy": "Control Monad Event BasicEvents",
        "module": "Control.Monad.Event.BasicEvents",
        "name": "AdHocEvent",
        "normalized": "",
        "package": "event-monad",
        "partial": "Ad Hoc Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#t:SimControl",
      "description": {
        "fct-module": "Control.Monad.Event.BasicEvents",
        "fct-package": "event-monad",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Event-BasicEvents.html#SimControl",
        "fct-type": "data",
        "title": "SimControl"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event BasicEvents",
        "module": "Control.Monad.Event.BasicEvents",
        "name": "SimControl",
        "normalized": "",
        "package": "event-monad",
        "partial": "Sim Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#v:-38-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix operator for sequential composition of events\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.BasicEvents",
        "fct-package": "event-monad",
        "fct-signature": "e1 -\u003e e2 -\u003e AdHocEvent m",
        "fct-source": "src/Control-Monad-Event-BasicEvents.html#%26",
        "fct-type": "function",
        "title": "(&)"
      },
      "index": {
        "description": "An infix operator for sequential composition of events",
        "hierarchy": "Control Monad Event BasicEvents",
        "module": "Control.Monad.Event.BasicEvents",
        "name": "(&) &",
        "normalized": "a-\u003ea-\u003eAdHocEvent b",
        "package": "event-monad",
        "partial": "",
        "signature": "e-\u003ee-\u003eAdHocEvent m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#v:-38--45-",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003e&\u003c/a\u003e\u003c/code\u003e that preserves distinctness of events\n at the expense of being able to guarantee \"proper\" interleaving\n with other events scheduled at the same time.  For example, suppose a\n composite event e1 &- e2 of this type is scheduled, then a third\n event e3 is scheduled for the same time.  The \"expected\" order of\n execution is e1; e2; e3.  What actually happens is e1; e3; e2 - \n because (e1 &- e2) runs, having the effect of running e1 and \n scheduling e2, then e3 runs (because it's next in the queue),\n then e2 finally runs.  This situation could be solved by changing\n the semantics for \u003ccode\u003e\u003ca\u003edoNext\u003c/a\u003e\u003c/code\u003e as proposed there.\n\u003c/p\u003e\u003cp\u003eThis is primarily useful for separating an initial \u003ccode\u003eSetDebugHandlers\u003c/code\u003e\n event from the other event(s) being fired at the start\n of the simulation, so that they will be \"seen\" by the \n newly installed handlers.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.BasicEvents",
        "fct-package": "event-monad",
        "fct-signature": "e1 -\u003e e2 -\u003e AdHocEvent m",
        "fct-source": "src/Control-Monad-Event-BasicEvents.html#%26-",
        "fct-type": "function",
        "title": "(&-)"
      },
      "index": {
        "description": "version of that preserves distinctness of events at the expense of being able to guarantee proper interleaving with other events scheduled at the same time For example suppose composite event e1 e2 of this type is scheduled then third event e3 is scheduled for the same time The expected order of execution is e1 e2 e3 What actually happens is e1 e3 e2 because e1 e2 runs having the effect of running e1 and scheduling e2 then e3 runs because it next in the queue then e2 finally runs This situation could be solved by changing the semantics for doNext as proposed there This is primarily useful for separating an initial SetDebugHandlers event from the other event being fired at the start of the simulation so that they will be seen by the newly installed handlers",
        "hierarchy": "Control Monad Event BasicEvents",
        "module": "Control.Monad.Event.BasicEvents",
        "name": "(&-) &-",
        "normalized": "a-\u003ea-\u003eAdHocEvent b",
        "package": "event-monad",
        "partial": "",
        "signature": "e-\u003ee-\u003eAdHocEvent m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#v:-63-:",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix operator to construct an event from a description and an action\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.BasicEvents",
        "fct-package": "event-monad",
        "fct-signature": "desc -\u003e m a -\u003e AdHocEvent m",
        "fct-source": "src/Control-Monad-Event-BasicEvents.html#%3F%3A",
        "fct-type": "function",
        "title": "(?:)"
      },
      "index": {
        "description": "An infix operator to construct an event from description and an action",
        "hierarchy": "Control Monad Event BasicEvents",
        "module": "Control.Monad.Event.BasicEvents",
        "name": "(?:) ?:",
        "normalized": "a-\u003eb c-\u003eAdHocEvent b",
        "package": "event-monad",
        "partial": "",
        "signature": "desc-\u003em a-\u003eAdHocEvent m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#v:-63-::",
      "description": {
        "fct-descr": "\u003cp\u003eSame thing, but use an action to generate the description\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.BasicEvents",
        "fct-package": "event-monad",
        "fct-signature": "m Doc -\u003e m a -\u003e AdHocEvent m",
        "fct-source": "src/Control-Monad-Event-BasicEvents.html#%3F%3A%3A",
        "fct-type": "function",
        "title": "(?::)"
      },
      "index": {
        "description": "Same thing but use an action to generate the description",
        "hierarchy": "Control Monad Event BasicEvents",
        "module": "Control.Monad.Event.BasicEvents",
        "name": "(?::) ?::",
        "normalized": "a Doc-\u003ea b-\u003eAdHocEvent a",
        "package": "event-monad",
        "partial": "",
        "signature": "m Doc-\u003em a-\u003eAdHocEvent m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#v:-64-:",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix operator for defining a \"delayed\" event - or rather a \n new event that schedules its payload at a later time\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.BasicEvents",
        "fct-package": "event-monad",
        "fct-signature": "e -\u003e t -\u003e AdHocEvent m",
        "fct-source": "src/Control-Monad-Event-BasicEvents.html#%40%3A",
        "fct-type": "function",
        "title": "(@:)"
      },
      "index": {
        "description": "An infix operator for defining delayed event or rather new event that schedules its payload at later time",
        "hierarchy": "Control Monad Event BasicEvents",
        "module": "Control.Monad.Event.BasicEvents",
        "name": "(@:) @:",
        "normalized": "a-\u003eb-\u003eAdHocEvent c",
        "package": "event-monad",
        "partial": "",
        "signature": "e-\u003et-\u003eAdHocEvent m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#v:AdHocEvent",
      "description": {
        "fct-module": "Control.Monad.Event.BasicEvents",
        "fct-package": "event-monad",
        "fct-signature": "AdHocEvent (m Doc) (m ())",
        "fct-source": "src/Control-Monad-Event-BasicEvents.html#AdHocEvent",
        "fct-type": "function",
        "title": "AdHocEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event BasicEvents",
        "module": "Control.Monad.Event.BasicEvents",
        "name": "AdHocEvent",
        "normalized": "AdHocEvent(a Doc)(a())",
        "package": "event-monad",
        "partial": "Ad Hoc Event",
        "signature": "AdHocEvent(m Doc)(m())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#v:StartSim",
      "description": {
        "fct-module": "Control.Monad.Event.BasicEvents",
        "fct-package": "event-monad",
        "fct-signature": "StartSim",
        "fct-source": "src/Control-Monad-Event-BasicEvents.html#SimControl",
        "fct-type": "function",
        "title": "StartSim"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event BasicEvents",
        "module": "Control.Monad.Event.BasicEvents",
        "name": "StartSim",
        "normalized": "",
        "package": "event-monad",
        "partial": "Start Sim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-BasicEvents.html#v:StopSim",
      "description": {
        "fct-module": "Control.Monad.Event.BasicEvents",
        "fct-package": "event-monad",
        "fct-signature": "StopSim",
        "fct-source": "src/Control-Monad-Event-BasicEvents.html#SimControl",
        "fct-type": "function",
        "title": "StopSim"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event BasicEvents",
        "module": "Control.Monad.Event.BasicEvents",
        "name": "StopSim",
        "normalized": "",
        "package": "event-monad",
        "partial": "Stop Sim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#",
      "description": {
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Event-Classes.html",
        "fct-type": "module",
        "title": "Classes"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "Classes",
        "normalized": "",
        "package": "event-monad",
        "partial": "Classes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#t:CancelEvent",
      "description": {
        "fct-descr": "\u003cp\u003eA monad in which an event (presumably one previously scheduled)\n can be canceled.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Event-Classes.html#CancelEvent",
        "fct-type": "class",
        "title": "CancelEvent"
      },
      "index": {
        "description": "monad in which an event presumably one previously scheduled can be canceled",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "CancelEvent",
        "normalized": "",
        "package": "event-monad",
        "partial": "Cancel Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#t:GetCurrentEvent",
      "description": {
        "fct-descr": "\u003cp\u003eA monad in which an \u003ccode\u003e\u003ca\u003eEventDescriptor\u003c/a\u003e\u003c/code\u003e for the currently-executing\n event, if any, can be obtained.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Event-Classes.html#GetCurrentEvent",
        "fct-type": "class",
        "title": "GetCurrentEvent"
      },
      "index": {
        "description": "monad in which an EventDescriptor for the currently-executing event if any can be obtained",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "GetCurrentEvent",
        "normalized": "",
        "package": "event-monad",
        "partial": "Get Current Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#t:MonadEvent",
      "description": {
        "fct-descr": "\u003cp\u003eA monad in which there is a concept of an \"event\" - an action with a\n sort of a special status, which can be described for humans and can be\n otherwise manipulated in monads implementing the classes to follow.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Event-Classes.html#MonadEvent",
        "fct-type": "class",
        "title": "MonadEvent"
      },
      "index": {
        "description": "monad in which there is concept of an event an action with sort of special status which can be described for humans and can be otherwise manipulated in monads implementing the classes to follow",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "MonadEvent",
        "normalized": "",
        "package": "event-monad",
        "partial": "Monad Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#t:MonadEventQueueInfo",
      "description": {
        "fct-descr": "\u003cp\u003eA monad in which information about the event queue can be retrieved.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Event-Classes.html#MonadEventQueueInfo",
        "fct-type": "class",
        "title": "MonadEventQueueInfo"
      },
      "index": {
        "description": "monad in which information about the event queue can be retrieved",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "MonadEventQueueInfo",
        "normalized": "",
        "package": "event-monad",
        "partial": "Monad Event Queue Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#t:MonadSimControl",
      "description": {
        "fct-descr": "\u003cp\u003eA monad in which there is a concept of running and not-running and\n unrestricted operations for switching between them.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Event-Classes.html#MonadSimControl",
        "fct-type": "class",
        "title": "MonadSimControl"
      },
      "index": {
        "description": "monad in which there is concept of running and not-running and unrestricted operations for switching between them",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "MonadSimControl",
        "normalized": "",
        "package": "event-monad",
        "partial": "Monad Sim Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#t:MonadTime",
      "description": {
        "fct-descr": "\u003cp\u003eA type-class for monads with a concept of time.  That concept need not\n necessarily meet any prior conditions - not even an Eq instance.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Event-Classes.html#MonadTime",
        "fct-type": "class",
        "title": "MonadTime"
      },
      "index": {
        "description": "type-class for monads with concept of time That concept need not necessarily meet any prior conditions not even an Eq instance",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "MonadTime",
        "normalized": "",
        "package": "event-monad",
        "partial": "Monad Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#t:RetryEvent",
      "description": {
        "fct-descr": "\u003cp\u003eA monad in which the currently executing event can be rescheduled.\n Note that calling \u003ccode\u003e\u003ca\u003eretryEventAt\u003c/a\u003e\u003c/code\u003e does not terminate the currently\n executing event - although perhaps it should.  Until a more permanent\n decision is made, it's probably best to make \u003ccode\u003e\u003ca\u003eretryEventAt\u003c/a\u003e\u003c/code\u003e the last\n action of an event when it is used, to minimize impact of future changes.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Event-Classes.html#RetryEvent",
        "fct-type": "class",
        "title": "RetryEvent"
      },
      "index": {
        "description": "monad in which the currently executing event can be rescheduled Note that calling retryEventAt does not terminate the currently executing event although perhaps it should Until more permanent decision is made it probably best to make retryEventAt the last action of an event when it is used to minimize impact of future changes",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "RetryEvent",
        "normalized": "",
        "package": "event-monad",
        "partial": "Retry Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#t:ScheduleEvent",
      "description": {
        "fct-descr": "\u003cp\u003eA monad which can schedule events for later execution.  For obvious\n reasons, such a monad must also have a concept of events (covering the\n event that the user is trying to schedule) and a concept of time.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Event-Classes.html#ScheduleEvent",
        "fct-type": "class",
        "title": "ScheduleEvent"
      },
      "index": {
        "description": "monad which can schedule events for later execution For obvious reasons such monad must also have concept of events covering the event that the user is trying to schedule and concept of time",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "ScheduleEvent",
        "normalized": "",
        "package": "event-monad",
        "partial": "Schedule Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:cancelEvent",
      "description": {
        "fct-descr": "\u003cp\u003eCancel an event given its \u003ccode\u003e\u003ca\u003eEventID\u003c/a\u003e\u003c/code\u003e.  If successful (and\n if the monad's implementation allows it), an \u003ccode\u003e\u003ca\u003eEventDescriptor\u003c/a\u003e\u003c/code\u003e\n (an existential wrapper describing an event, its ID, and\n the time at which it would have run) containing the \n canceled event is returned.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "EventID -\u003e m (Maybe (EventDescriptor m t))",
        "fct-source": "src/Control-Monad-Event-Classes.html#cancelEvent",
        "fct-type": "method",
        "title": "cancelEvent"
      },
      "index": {
        "description": "Cancel an event given its EventID If successful and if the monad implementation allows it an EventDescriptor an existential wrapper describing an event its ID and the time at which it would have run containing the canceled event is returned",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "cancelEvent",
        "normalized": "EventID-\u003ea(Maybe(EventDescriptor a b))",
        "package": "event-monad",
        "partial": "Event",
        "signature": "EventID-\u003em(Maybe(EventDescriptor m t))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:describeEvent",
      "description": {
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "e -\u003e m Doc",
        "fct-source": "src/Control-Monad-Event-Classes.html#describeEvent",
        "fct-type": "method",
        "title": "describeEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "describeEvent",
        "normalized": "a-\u003eb Doc",
        "package": "event-monad",
        "partial": "Event",
        "signature": "e-\u003em Doc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:doNext",
      "description": {
        "fct-descr": "\u003cp\u003eschedule an event to run at the current time.  This does not \n constitute a promise to execute immediately or in any particular\n order relative to other events that have been or will be\n scheduled for the current time.\n\u003c/p\u003e\u003cp\u003eIf an implementor has a time type which is an instance of \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e, then\n \u003ccode\u003e\u003ca\u003edoNext\u003c/a\u003e\u003c/code\u003e should be equivalent to \u003ccode\u003e\u003ca\u003escheduleEventIn\u003c/a\u003e\u003c/code\u003e 0 - unless the\n monad's documentation clearly warns to the contrary in a really big\n typeface.  ; )  Note that this clause may change to also strongly\n suggest that \u003ccode\u003e\u003ca\u003edoNext\u003c/a\u003e\u003c/code\u003e put its event at the very front of the queue\n (ie, before any other events already scheduled for the current time).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "e -\u003e m ()",
        "fct-source": "src/Control-Monad-Event-Classes.html#doNext",
        "fct-type": "method",
        "title": "doNext"
      },
      "index": {
        "description": "schedule an event to run at the current time This does not constitute promise to execute immediately or in any particular order relative to other events that have been or will be scheduled for the current time If an implementor has time type which is an instance of Num then doNext should be equivalent to scheduleEventIn unless the monad documentation clearly warns to the contrary in really big typeface Note that this clause may change to also strongly suggest that doNext put its event at the very front of the queue ie before any other events already scheduled for the current time",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "doNext",
        "normalized": "a-\u003eb()",
        "package": "event-monad",
        "partial": "Next",
        "signature": "e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:eventQueueContents",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a list of (some or all of) the events coming up.\n There is no obligation on the part of the monad to provide\n anything at all.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "m [EventDescriptor m t]",
        "fct-source": "src/Control-Monad-Event-Classes.html#eventQueueContents",
        "fct-type": "method",
        "title": "eventQueueContents"
      },
      "index": {
        "description": "Return list of some or all of the events coming up There is no obligation on the part of the monad to provide anything at all",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "eventQueueContents",
        "normalized": "a[EventDescriptor a b]",
        "package": "event-monad",
        "partial": "Queue Contents",
        "signature": "m[EventDescriptor m t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:eventQueueSize",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of events currently scheduled.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "m Int",
        "fct-source": "src/Control-Monad-Event-Classes.html#eventQueueSize",
        "fct-type": "method",
        "title": "eventQueueSize"
      },
      "index": {
        "description": "Return the number of events currently scheduled",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "eventQueueSize",
        "normalized": "",
        "package": "event-monad",
        "partial": "Queue Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:getCurrentEvent",
      "description": {
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "m (Maybe (EventDescriptor m t))",
        "fct-source": "src/Control-Monad-Event-Classes.html#getCurrentEvent",
        "fct-type": "method",
        "title": "getCurrentEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "getCurrentEvent",
        "normalized": "",
        "package": "event-monad",
        "partial": "Current Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:getCurrentTime",
      "description": {
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "m t",
        "fct-source": "src/Control-Monad-Event-Classes.html#getCurrentTime",
        "fct-type": "method",
        "title": "getCurrentTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "getCurrentTime",
        "normalized": "",
        "package": "event-monad",
        "partial": "Current Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:isSimulationRunning",
      "description": {
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "m Bool",
        "fct-source": "src/Control-Monad-Event-Classes.html#isSimulationRunning",
        "fct-type": "method",
        "title": "isSimulationRunning"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "isSimulationRunning",
        "normalized": "",
        "package": "event-monad",
        "partial": "Simulation Running",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:pauseSimulation",
      "description": {
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "m ()",
        "fct-source": "src/Control-Monad-Event-Classes.html#pauseSimulation",
        "fct-type": "method",
        "title": "pauseSimulation"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "pauseSimulation",
        "normalized": "a()",
        "package": "event-monad",
        "partial": "Simulation",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:resumeSimulation",
      "description": {
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "m ()",
        "fct-source": "src/Control-Monad-Event-Classes.html#resumeSimulation",
        "fct-type": "method",
        "title": "resumeSimulation"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "resumeSimulation",
        "normalized": "a()",
        "package": "event-monad",
        "partial": "Simulation",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:retryEventAt",
      "description": {
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "t -\u003e m EventID",
        "fct-source": "src/Control-Monad-Event-Classes.html#retryEventAt",
        "fct-type": "method",
        "title": "retryEventAt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "retryEventAt",
        "normalized": "a-\u003eb EventID",
        "package": "event-monad",
        "partial": "Event At",
        "signature": "t-\u003em EventID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:retryEventIn",
      "description": {
        "fct-descr": "\u003cp\u003eretry the currently-executing event at an absolute time (see \u003ccode\u003e\u003ca\u003eretryEventIn\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "t -\u003e m EventID",
        "fct-source": "src/Control-Monad-Event-Classes.html#retryEventIn",
        "fct-type": "function",
        "title": "retryEventIn"
      },
      "index": {
        "description": "retry the currently-executing event at an absolute time see retryEventIn",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "retryEventIn",
        "normalized": "a-\u003eb EventID",
        "package": "event-monad",
        "partial": "Event In",
        "signature": "t-\u003em EventID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:runEvent",
      "description": {
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "e -\u003e m ()",
        "fct-source": "src/Control-Monad-Event-Classes.html#runEvent",
        "fct-type": "method",
        "title": "runEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "runEvent",
        "normalized": "a-\u003eb()",
        "package": "event-monad",
        "partial": "Event",
        "signature": "e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:scheduleEventAt",
      "description": {
        "fct-descr": "\u003cp\u003eSchedule an event for execution at a time.\n The meaning of \"time\" is left entirely up to the\n implementor, however it will generally be the case that time is\n an instance of \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e and/or is totally ordered in the usual way.\n\u003c/p\u003e\u003cp\u003eReturns an \u003ccode\u003e\u003ca\u003eEventID\u003c/a\u003e\u003c/code\u003e that can be used to identify the event\n if needed later (for example, to cancel it).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "t -\u003e e -\u003e m EventID",
        "fct-source": "src/Control-Monad-Event-Classes.html#scheduleEventAt",
        "fct-type": "method",
        "title": "scheduleEventAt"
      },
      "index": {
        "description": "Schedule an event for execution at time The meaning of time is left entirely up to the implementor however it will generally be the case that time is an instance of Num and or is totally ordered in the usual way Returns an EventID that can be used to identify the event if needed later for example to cancel it",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "scheduleEventAt",
        "normalized": "a-\u003eb-\u003ec EventID",
        "package": "event-monad",
        "partial": "Event At",
        "signature": "t-\u003ee-\u003em EventID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event-Classes.html#v:scheduleEventIn",
      "description": {
        "fct-descr": "\u003cp\u003eschedule an event at an absolute time (see \u003ccode\u003e\u003ca\u003escheduleEventIn\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event.Classes",
        "fct-package": "event-monad",
        "fct-signature": "t -\u003e e -\u003e m EventID",
        "fct-source": "src/Control-Monad-Event-Classes.html#scheduleEventIn",
        "fct-type": "function",
        "title": "scheduleEventIn"
      },
      "index": {
        "description": "schedule an event at an absolute time see scheduleEventIn",
        "hierarchy": "Control Monad Event Classes",
        "module": "Control.Monad.Event.Classes",
        "name": "scheduleEventIn",
        "normalized": "a-\u003eb-\u003ec EventID",
        "package": "event-monad",
        "partial": "Event In",
        "signature": "t-\u003ee-\u003em EventID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#",
      "description": {
        "fct-module": "Control.Monad.Event",
        "fct-package": "event-monad",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Event.html",
        "fct-type": "module",
        "title": "Event"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event",
        "module": "Control.Monad.Event",
        "name": "Event",
        "normalized": "",
        "package": "event-monad",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#t:EventDescriptor",
      "description": {
        "fct-descr": "\u003cp\u003eAn existential wrapper containing an event which can be executed in the\n monad \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eI would like to existentially quantify the time parameter too, since it's\n uniquely determined according to the functional dependencies of \u003ccode\u003e\u003ca\u003eMonadTime\u003c/a\u003e\u003c/code\u003e,\n but GHC doesn't unify it with its actual type in pattern matches - I was\n not able to use it as a \u003ccode\u003e\u003ca\u003ePrintfArg\u003c/a\u003e\u003c/code\u003e in:\n\u003c/p\u003e\u003cpre\u003e instance MonadEvent (EventT Double IO) (EventDescriptor (EventT Double IO))\n\u003c/pre\u003e",
        "fct-module": "Control.Monad.Event",
        "fct-package": "event-monad",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Event-Internal-Types.html#EventDescriptor",
        "fct-type": "data",
        "title": "EventDescriptor"
      },
      "index": {
        "description": "An existential wrapper containing an event which can be executed in the monad would like to existentially quantify the time parameter too since it uniquely determined according to the functional dependencies of MonadTime but GHC doesn unify it with its actual type in pattern matches was not able to use it as PrintfArg in instance MonadEvent EventT Double IO EventDescriptor EventT Double IO",
        "hierarchy": "Control Monad Event",
        "module": "Control.Monad.Event",
        "name": "EventDescriptor",
        "normalized": "",
        "package": "event-monad",
        "partial": "Event Descriptor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#t:EventID",
      "description": {
        "fct-descr": "\u003cp\u003eAn opaque identifier for events.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event",
        "fct-package": "event-monad",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Event-Internal-EventID.html#EventID",
        "fct-type": "newtype",
        "title": "EventID"
      },
      "index": {
        "description": "An opaque identifier for events",
        "hierarchy": "Control Monad Event",
        "module": "Control.Monad.Event",
        "name": "EventID",
        "normalized": "",
        "package": "event-monad",
        "partial": "Event ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#t:EventM",
      "description": {
        "fct-module": "Control.Monad.Event",
        "fct-package": "event-monad",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-EventM.html#EventM",
        "fct-type": "type",
        "title": "EventM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event",
        "module": "Control.Monad.Event",
        "name": "EventM",
        "normalized": "",
        "package": "event-monad",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#t:EventT",
      "description": {
        "fct-descr": "\u003cp\u003eA monad transformer which adds an event queue and related operations to\n an underlying monad.  The \"t\" parameter specifies the type of the\n simulation time.\n\u003c/p\u003e\u003cp\u003eSeveral hooks are provided to allow special handling of various events,\n such as the progression of time, the scheduling or canceling or dispatch\n of an event, etc.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Event",
        "fct-package": "event-monad",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-EventT.html#EventT",
        "fct-type": "data",
        "title": "EventT"
      },
      "index": {
        "description": "monad transformer which adds an event queue and related operations to an underlying monad The parameter specifies the type of the simulation time Several hooks are provided to allow special handling of various events such as the progression of time the scheduling or canceling or dispatch of an event etc",
        "hierarchy": "Control Monad Event",
        "module": "Control.Monad.Event",
        "name": "EventT",
        "normalized": "",
        "package": "event-monad",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#v:EventDescriptor",
      "description": {
        "fct-module": "Control.Monad.Event",
        "fct-package": "event-monad",
        "fct-signature": "EventDescriptor",
        "fct-source": "src/Control-Monad-Event-Internal-Types.html#EventDescriptor",
        "fct-type": "function",
        "title": "EventDescriptor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event",
        "module": "Control.Monad.Event",
        "name": "EventDescriptor",
        "normalized": "",
        "package": "event-monad",
        "partial": "Event Descriptor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#v:EventID",
      "description": {
        "fct-module": "Control.Monad.Event",
        "fct-package": "event-monad",
        "fct-signature": "EventID Int",
        "fct-source": "src/Control-Monad-Event-Internal-EventID.html#EventID",
        "fct-type": "function",
        "title": "EventID"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event",
        "module": "Control.Monad.Event",
        "name": "EventID",
        "normalized": "",
        "package": "event-monad",
        "partial": "Event ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#v:event",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Event",
        "fct-package": "event-monad",
        "fct-signature": "e",
        "fct-source": "src/Control-Monad-Event-Internal-Types.html#EventDescriptor",
        "fct-type": "function",
        "title": "event"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event",
        "module": "Control.Monad.Event",
        "name": "event",
        "normalized": "",
        "package": "event-monad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#v:eventId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Event",
        "fct-package": "event-monad",
        "fct-signature": "EventID",
        "fct-source": "src/Control-Monad-Event-Internal-Types.html#EventDescriptor",
        "fct-type": "function",
        "title": "eventId"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event",
        "module": "Control.Monad.Event",
        "name": "eventId",
        "normalized": "",
        "package": "event-monad",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-Event.html#v:eventTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Event",
        "fct-package": "event-monad",
        "fct-signature": "t",
        "fct-source": "src/Control-Monad-Event-Internal-Types.html#EventDescriptor",
        "fct-type": "function",
        "title": "eventTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Event",
        "module": "Control.Monad.Event",
        "name": "eventTime",
        "normalized": "",
        "package": "event-monad",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#",
      "description": {
        "fct-module": "Control.Monad.EventM",
        "fct-package": "event-monad",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-EventM.html",
        "fct-type": "module",
        "title": "EventM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad EventM",
        "module": "Control.Monad.EventM",
        "name": "EventM",
        "normalized": "",
        "package": "event-monad",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#t:EventIO",
      "description": {
        "fct-module": "Control.Monad.EventM",
        "fct-package": "event-monad",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-EventM.html#EventIO",
        "fct-type": "data",
        "title": "EventIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad EventM",
        "module": "Control.Monad.EventM",
        "name": "EventIO",
        "normalized": "",
        "package": "event-monad",
        "partial": "Event IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#t:EventIOState",
      "description": {
        "fct-module": "Control.Monad.EventM",
        "fct-package": "event-monad",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-EventM.html#EventIOState",
        "fct-type": "data",
        "title": "EventIOState"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad EventM",
        "module": "Control.Monad.EventM",
        "name": "EventIOState",
        "normalized": "",
        "package": "event-monad",
        "partial": "Event IOState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#t:EventM",
      "description": {
        "fct-module": "Control.Monad.EventM",
        "fct-package": "event-monad",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-EventM.html#EventM",
        "fct-type": "type",
        "title": "EventM"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad EventM",
        "module": "Control.Monad.EventM",
        "name": "EventM",
        "normalized": "",
        "package": "event-monad",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#t:HandlerAccessor",
      "description": {
        "fct-module": "Control.Monad.EventM",
        "fct-package": "event-monad",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-EventM.html#HandlerAccessor",
        "fct-type": "type",
        "title": "HandlerAccessor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad EventM",
        "module": "Control.Monad.EventM",
        "name": "HandlerAccessor",
        "normalized": "",
        "package": "event-monad",
        "partial": "Handler Accessor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:addHandler",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an event handler to be called when the specified event happens.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventM",
        "fct-package": "event-monad",
        "fct-signature": "HandlerAccessor t a b -\u003e (a -\u003e EventIO t b) -\u003e EventIO t HandlerID",
        "fct-source": "src/Control-Monad-EventM.html#addHandler",
        "fct-type": "function",
        "title": "addHandler"
      },
      "index": {
        "description": "Add an event handler to be called when the specified event happens",
        "hierarchy": "Control Monad EventM",
        "module": "Control.Monad.EventM",
        "name": "addHandler",
        "normalized": "HandlerAccessor a b c-\u003e(b-\u003eEventIO a c)-\u003eEventIO a HandlerID",
        "package": "event-monad",
        "partial": "Handler",
        "signature": "HandlerAccessor t a b-\u003e(a-\u003eEventIO t b)-\u003eEventIO t HandlerID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:newEventIOState",
      "description": {
        "fct-module": "Control.Monad.EventM",
        "fct-package": "event-monad",
        "fct-signature": "t -\u003e IO (EventIOState t)",
        "fct-source": "src/Control-Monad-EventM.html#newEventIOState",
        "fct-type": "function",
        "title": "newEventIOState"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad EventM",
        "module": "Control.Monad.EventM",
        "name": "newEventIOState",
        "normalized": "a-\u003eIO(EventIOState a)",
        "package": "event-monad",
        "partial": "Event IOState",
        "signature": "t-\u003eIO(EventIOState t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:onClockChanged",
      "description": {
        "fct-module": "Control.Monad.EventM",
        "fct-package": "event-monad",
        "fct-signature": "EventIOHandlers t -\u003e Ref IO (HandlerSet (EventIO t) (t, t) ())",
        "fct-source": "src/Control-Monad-EventM.html#onClockChanged",
        "fct-type": "function",
        "title": "onClockChanged"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad EventM",
        "module": "Control.Monad.EventM",
        "name": "onClockChanged",
        "normalized": "EventIOHandlers a-\u003eRef IO(HandlerSet(EventIO a)(a,a)())",
        "package": "event-monad",
        "partial": "Clock Changed",
        "signature": "EventIOHandlers t-\u003eRef IO(HandlerSet(EventIO t)(t,t)())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:onEventCancel",
      "description": {
        "fct-module": "Control.Monad.EventM",
        "fct-package": "event-monad",
        "fct-signature": "EventIOHandlers t -\u003e Ref IO (HandlerSet (EventIO t) (Either EventID (EventDescriptor (EventIO t) t)) ())",
        "fct-source": "src/Control-Monad-EventM.html#onEventCancel",
        "fct-type": "function",
        "title": "onEventCancel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad EventM",
        "module": "Control.Monad.EventM",
        "name": "onEventCancel",
        "normalized": "EventIOHandlers a-\u003eRef IO(HandlerSet(EventIO a)(Either EventID(EventDescriptor(EventIO a)a))())",
        "package": "event-monad",
        "partial": "Event Cancel",
        "signature": "EventIOHandlers t-\u003eRef IO(HandlerSet(EventIO t)(Either EventID(EventDescriptor(EventIO t)t))())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:onEventComplete",
      "description": {
        "fct-module": "Control.Monad.EventM",
        "fct-package": "event-monad",
        "fct-signature": "EventIOHandlers t -\u003e Ref IO (HandlerSet (EventIO t) (EventDescriptor (EventIO t) t) ())",
        "fct-source": "src/Control-Monad-EventM.html#onEventComplete",
        "fct-type": "function",
        "title": "onEventComplete"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad EventM",
        "module": "Control.Monad.EventM",
        "name": "onEventComplete",
        "normalized": "EventIOHandlers a-\u003eRef IO(HandlerSet(EventIO a)(EventDescriptor(EventIO a)a)())",
        "package": "event-monad",
        "partial": "Event Complete",
        "signature": "EventIOHandlers t-\u003eRef IO(HandlerSet(EventIO t)(EventDescriptor(EventIO t)t)())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:onEventDispatch",
      "description": {
        "fct-module": "Control.Monad.EventM",
        "fct-package": "event-monad",
        "fct-signature": "EventIOHandlers t -\u003e Ref IO (HandlerSet (EventIO t) (EventDescriptor (EventIO t) t) ())",
        "fct-source": "src/Control-Monad-EventM.html#onEventDispatch",
        "fct-type": "function",
        "title": "onEventDispatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad EventM",
        "module": "Control.Monad.EventM",
        "name": "onEventDispatch",
        "normalized": "EventIOHandlers a-\u003eRef IO(HandlerSet(EventIO a)(EventDescriptor(EventIO a)a)())",
        "package": "event-monad",
        "partial": "Event Dispatch",
        "signature": "EventIOHandlers t-\u003eRef IO(HandlerSet(EventIO t)(EventDescriptor(EventIO t)t)())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:onEventSchedule",
      "description": {
        "fct-module": "Control.Monad.EventM",
        "fct-package": "event-monad",
        "fct-signature": "EventIOHandlers t -\u003e Ref IO (HandlerSet (EventIO t) (EventDescriptor (EventIO t) t) ())",
        "fct-source": "src/Control-Monad-EventM.html#onEventSchedule",
        "fct-type": "function",
        "title": "onEventSchedule"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad EventM",
        "module": "Control.Monad.EventM",
        "name": "onEventSchedule",
        "normalized": "EventIOHandlers a-\u003eRef IO(HandlerSet(EventIO a)(EventDescriptor(EventIO a)a)())",
        "package": "event-monad",
        "partial": "Event Schedule",
        "signature": "EventIOHandlers t-\u003eRef IO(HandlerSet(EventIO t)(EventDescriptor(EventIO t)t)())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:removeHandler",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an event handler given its ID, and return it if it was in the set.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventM",
        "fct-package": "event-monad",
        "fct-signature": "HandlerAccessor t a b -\u003e HandlerID -\u003e EventIO t (Maybe (a -\u003e EventIO t b))",
        "fct-source": "src/Control-Monad-EventM.html#removeHandler",
        "fct-type": "function",
        "title": "removeHandler"
      },
      "index": {
        "description": "Remove an event handler given its ID and return it if it was in the set",
        "hierarchy": "Control Monad EventM",
        "module": "Control.Monad.EventM",
        "name": "removeHandler",
        "normalized": "HandlerAccessor a b c-\u003eHandlerID-\u003eEventIO a(Maybe(b-\u003eEventIO a c))",
        "package": "event-monad",
        "partial": "Handler",
        "signature": "HandlerAccessor t a b-\u003eHandlerID-\u003eEventIO t(Maybe(a-\u003eEventIO t b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:runEventGraph",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize the event queue and other stuff, run the provided \"start \n event\", and run the queue until it's empty or until the simulation is\n paused.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventM",
        "fct-package": "event-monad",
        "fct-signature": "e -\u003e IO (EventIOState t)",
        "fct-source": "src/Control-Monad-EventM.html#runEventGraph",
        "fct-type": "function",
        "title": "runEventGraph"
      },
      "index": {
        "description": "Initialize the event queue and other stuff run the provided start event and run the queue until it empty or until the simulation is paused",
        "hierarchy": "Control Monad EventM",
        "module": "Control.Monad.EventM",
        "name": "runEventGraph",
        "normalized": "a-\u003eIO(EventIOState b)",
        "package": "event-monad",
        "partial": "Event Graph",
        "signature": "e-\u003eIO(EventIOState t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:runEventGraphWithState",
      "description": {
        "fct-descr": "\u003cp\u003eRepeatedly pull and run the next event in the queue until it's \n empty or until the simulation is paused using \u003ccode\u003e\u003ca\u003epauseSimulation\u003c/a\u003e\u003c/code\u003e\n or something equivalent.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventM",
        "fct-package": "event-monad",
        "fct-signature": "EventIOState t -\u003e IO ()",
        "fct-source": "src/Control-Monad-EventM.html#runEventGraphWithState",
        "fct-type": "function",
        "title": "runEventGraphWithState"
      },
      "index": {
        "description": "Repeatedly pull and run the next event in the queue until it empty or until the simulation is paused using pauseSimulation or something equivalent",
        "hierarchy": "Control Monad EventM",
        "module": "Control.Monad.EventM",
        "name": "runEventGraphWithState",
        "normalized": "EventIOState a-\u003eIO()",
        "package": "event-monad",
        "partial": "Event Graph With State",
        "signature": "EventIOState t-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventM.html#v:runEventIO",
      "description": {
        "fct-descr": "\u003cp\u003eRun an \u003ccode\u003eEventT\u003c/code\u003e wrapped action.  This is a \"raw\" action - there is no \n interaction with the state (including event graph) except whatever the\n action itself does.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventM",
        "fct-package": "event-monad",
        "fct-signature": "EventIO t a -\u003e EventIOState t -\u003e IO a",
        "fct-source": "src/Control-Monad-EventM.html#runEventIO",
        "fct-type": "function",
        "title": "runEventIO"
      },
      "index": {
        "description": "Run an EventT wrapped action This is raw action there is no interaction with the state including event graph except whatever the action itself does",
        "hierarchy": "Control Monad EventM",
        "module": "Control.Monad.EventM",
        "name": "runEventIO",
        "normalized": "EventIO a b-\u003eEventIOState a-\u003eIO b",
        "package": "event-monad",
        "partial": "Event IO",
        "signature": "EventIO t a-\u003eEventIOState t-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#",
      "description": {
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-EventT.html",
        "fct-type": "module",
        "title": "EventT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "EventT",
        "normalized": "",
        "package": "event-monad",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#t:EventT",
      "description": {
        "fct-descr": "\u003cp\u003eA monad transformer which adds an event queue and related operations to\n an underlying monad.  The \"t\" parameter specifies the type of the\n simulation time.\n\u003c/p\u003e\u003cp\u003eSeveral hooks are provided to allow special handling of various events,\n such as the progression of time, the scheduling or canceling or dispatch\n of an event, etc.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-EventT.html#EventT",
        "fct-type": "data",
        "title": "EventT"
      },
      "index": {
        "description": "monad transformer which adds an event queue and related operations to an underlying monad The parameter specifies the type of the simulation time Several hooks are provided to allow special handling of various events such as the progression of time the scheduling or canceling or dispatch of an event etc",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "EventT",
        "normalized": "",
        "package": "event-monad",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#t:EventT_RState",
      "description": {
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-EventT.html#EventT_RState",
        "fct-type": "data",
        "title": "EventT_RState"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "EventT_RState",
        "normalized": "",
        "package": "event-monad",
        "partial": "Event RState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#t:EventT_RWState",
      "description": {
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-EventT.html#EventT_RWState",
        "fct-type": "data",
        "title": "EventT_RWState"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "EventT_RWState",
        "normalized": "",
        "package": "event-monad",
        "partial": "Event RWState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#t:HandlerAccessor",
      "description": {
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-EventT.html#HandlerAccessor",
        "fct-type": "type",
        "title": "HandlerAccessor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "HandlerAccessor",
        "normalized": "",
        "package": "event-monad",
        "partial": "Handler Accessor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:addHandler",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an event handler to be called when the specified event happens.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "HandlerAccessor t m a b -\u003e (a -\u003e EventT t m b) -\u003e EventT t m HandlerID",
        "fct-source": "src/Control-Monad-EventT.html#addHandler",
        "fct-type": "function",
        "title": "addHandler"
      },
      "index": {
        "description": "Add an event handler to be called when the specified event happens",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "addHandler",
        "normalized": "HandlerAccessor a b c d-\u003e(c-\u003eEventT a b d)-\u003eEventT a b HandlerID",
        "package": "event-monad",
        "partial": "Handler",
        "signature": "HandlerAccessor t m a b-\u003e(a-\u003eEventT t m b)-\u003eEventT t m HandlerID"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:newEventT_RState",
      "description": {
        "fct-descr": "\u003cp\u003eA new instance of the read-only portion of the \u003ccode\u003e\u003ca\u003eEventT\u003c/a\u003e\u003c/code\u003e internal\n state.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "EventT_RState t m",
        "fct-source": "src/Control-Monad-EventT.html#newEventT_RState",
        "fct-type": "function",
        "title": "newEventT_RState"
      },
      "index": {
        "description": "new instance of the read-only portion of the EventT internal state",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "newEventT_RState",
        "normalized": "",
        "package": "event-monad",
        "partial": "Event RState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:newEventT_RWState",
      "description": {
        "fct-descr": "\u003cp\u003eA new instance of the read/write portion of the \u003ccode\u003e\u003ca\u003eEventT\u003c/a\u003e\u003c/code\u003e internal\n state.  The parameter is the initial time value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "t -\u003e EventT_RWState t m",
        "fct-source": "src/Control-Monad-EventT.html#newEventT_RWState",
        "fct-type": "function",
        "title": "newEventT_RWState"
      },
      "index": {
        "description": "new instance of the read write portion of the EventT internal state The parameter is the initial time value",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "newEventT_RWState",
        "normalized": "a-\u003eEventT_RWState a b",
        "package": "event-monad",
        "partial": "Event RWState",
        "signature": "t-\u003eEventT_RWState t m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:onClockChanged",
      "description": {
        "fct-descr": "\u003cp\u003eFires whenever the clock changes, and is passed a tuple containing\n (old time, new time)\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "HandlerAccessor t m (t, t) ()",
        "fct-source": "src/Control-Monad-EventT.html#onClockChanged",
        "fct-type": "function",
        "title": "onClockChanged"
      },
      "index": {
        "description": "Fires whenever the clock changes and is passed tuple containing old time new time",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "onClockChanged",
        "normalized": "HandlerAccessor a b(a,a)()",
        "package": "event-monad",
        "partial": "Clock Changed",
        "signature": "HandlerAccessor t m(t,t)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:onEventCancel",
      "description": {
        "fct-descr": "\u003cp\u003eFires after an event is canceled.  Is passed either an \u003ccode\u003e\u003ca\u003eEventID\u003c/a\u003e\u003c/code\u003e (if the\n cancellation failed) or an \u003ccode\u003e\u003ca\u003eEventDescriptor\u003c/a\u003e\u003c/code\u003e for the event that was canceled.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "HandlerAccessor t m (Either EventID (EventDescriptor (EventT t m) t)) ()",
        "fct-source": "src/Control-Monad-EventT.html#onEventCancel",
        "fct-type": "function",
        "title": "onEventCancel"
      },
      "index": {
        "description": "Fires after an event is canceled Is passed either an EventID if the cancellation failed or an EventDescriptor for the event that was canceled",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "onEventCancel",
        "normalized": "HandlerAccessor a b(Either EventID(EventDescriptor(EventT a b)a))()",
        "package": "event-monad",
        "partial": "Event Cancel",
        "signature": "HandlerAccessor t m(Either EventID(EventDescriptor(EventT t m)t))()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:onEventComplete",
      "description": {
        "fct-descr": "\u003cp\u003eFires after an event returns.  Is passed an \u003ccode\u003e\u003ca\u003eEventDescriptor\u003c/a\u003e\u003c/code\u003e for the\n event that just finished.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "HandlerAccessor t m (EventDescriptor (EventT t m) t) ()",
        "fct-source": "src/Control-Monad-EventT.html#onEventComplete",
        "fct-type": "function",
        "title": "onEventComplete"
      },
      "index": {
        "description": "Fires after an event returns Is passed an EventDescriptor for the event that just finished",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "onEventComplete",
        "normalized": "HandlerAccessor a b(EventDescriptor(EventT a b)a)()",
        "package": "event-monad",
        "partial": "Event Complete",
        "signature": "HandlerAccessor t m(EventDescriptor(EventT t m)t)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:onEventDispatch",
      "description": {
        "fct-descr": "\u003cp\u003eFires just before an event is dispatched.  Is passed an \u003ccode\u003e\u003ca\u003eEventDescriptor\u003c/a\u003e\u003c/code\u003e\n describing the event about to be run.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "HandlerAccessor t m (EventDescriptor (EventT t m) t) ()",
        "fct-source": "src/Control-Monad-EventT.html#onEventDispatch",
        "fct-type": "function",
        "title": "onEventDispatch"
      },
      "index": {
        "description": "Fires just before an event is dispatched Is passed an EventDescriptor describing the event about to be run",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "onEventDispatch",
        "normalized": "HandlerAccessor a b(EventDescriptor(EventT a b)a)()",
        "package": "event-monad",
        "partial": "Event Dispatch",
        "signature": "HandlerAccessor t m(EventDescriptor(EventT t m)t)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:onEventSchedule",
      "description": {
        "fct-descr": "\u003cp\u003eFires after an event is scheduled.  Is passed an \u003ccode\u003e\u003ca\u003eEventDescriptor\u003c/a\u003e\u003c/code\u003e for\n the event.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "HandlerAccessor t m (EventDescriptor (EventT t m) t) ()",
        "fct-source": "src/Control-Monad-EventT.html#onEventSchedule",
        "fct-type": "function",
        "title": "onEventSchedule"
      },
      "index": {
        "description": "Fires after an event is scheduled Is passed an EventDescriptor for the event",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "onEventSchedule",
        "normalized": "HandlerAccessor a b(EventDescriptor(EventT a b)a)()",
        "package": "event-monad",
        "partial": "Event Schedule",
        "signature": "HandlerAccessor t m(EventDescriptor(EventT t m)t)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:removeHandler",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an event handler given its ID, and return it if it was in the set.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "HandlerAccessor t m a b -\u003e HandlerID -\u003e EventT t m (Maybe (a -\u003e EventT t m b))",
        "fct-source": "src/Control-Monad-EventT.html#removeHandler",
        "fct-type": "function",
        "title": "removeHandler"
      },
      "index": {
        "description": "Remove an event handler given its ID and return it if it was in the set",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "removeHandler",
        "normalized": "HandlerAccessor a b c d-\u003eHandlerID-\u003eEventT a b(Maybe(c-\u003eEventT a b d))",
        "package": "event-monad",
        "partial": "Handler",
        "signature": "HandlerAccessor t m a b-\u003eHandlerID-\u003eEventT t m(Maybe(a-\u003eEventT t m b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:runEventGraph",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize the event queue and other stuff, enqueue the provided \"start \n event\", and run the queue until it's empty or until the simulation is\n paused.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "e -\u003e m (EventT_RState t m, EventT_RWState t m)",
        "fct-source": "src/Control-Monad-EventT.html#runEventGraph",
        "fct-type": "function",
        "title": "runEventGraph"
      },
      "index": {
        "description": "Initialize the event queue and other stuff enqueue the provided start event and run the queue until it empty or until the simulation is paused",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "runEventGraph",
        "normalized": "a-\u003eb(EventT_RState c b,EventT_RWState c b)",
        "package": "event-monad",
        "partial": "Event Graph",
        "signature": "e-\u003em(EventT_RState t m,EventT_RWState t m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:runEventGraphWithState",
      "description": {
        "fct-descr": "\u003cp\u003eRepeatedly pull and run the next event in the queue until it's \n empty or until the simulation is paused using \u003ccode\u003e\u003ca\u003epauseSimulation\u003c/a\u003e\u003c/code\u003e\n or something equivalent.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "EventT_RState t m -\u003e EventT_RWState t m -\u003e m (EventT_RWState t m)",
        "fct-source": "src/Control-Monad-EventT.html#runEventGraphWithState",
        "fct-type": "function",
        "title": "runEventGraphWithState"
      },
      "index": {
        "description": "Repeatedly pull and run the next event in the queue until it empty or until the simulation is paused using pauseSimulation or something equivalent",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "runEventGraphWithState",
        "normalized": "EventT_RState a b-\u003eEventT_RWState a b-\u003eb(EventT_RWState a b)",
        "package": "event-monad",
        "partial": "Event Graph With State",
        "signature": "EventT_RState t m-\u003eEventT_RWState t m-\u003em(EventT_RWState t m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-monad/docs/Control-Monad-EventT.html#v:runEventT",
      "description": {
        "fct-descr": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eEventT\u003c/a\u003e\u003c/code\u003e wrapped action.  This is a \"raw\" action - there is no \n interaction with the state (including event graph) except whatever the\n action itself does.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.EventT",
        "fct-package": "event-monad",
        "fct-signature": "EventT t m a -\u003e EventT_RState t m -\u003e EventT_RWState t m -\u003e m (a, EventT_RWState t m)",
        "fct-source": "src/Control-Monad-EventT.html#runEventT",
        "fct-type": "function",
        "title": "runEventT"
      },
      "index": {
        "description": "Run an EventT wrapped action This is raw action there is no interaction with the state including event graph except whatever the action itself does",
        "hierarchy": "Control Monad EventT",
        "module": "Control.Monad.EventT",
        "name": "runEventT",
        "normalized": "EventT a b c-\u003eEventT_RState a b-\u003eEventT_RWState a b-\u003eb(c,EventT_RWState a b)",
        "package": "event-monad",
        "partial": "Event",
        "signature": "EventT t m a-\u003eEventT_RState t m-\u003eEventT_RWState t m-\u003em(a,EventT_RWState t m)"
      }
    }
  }
]