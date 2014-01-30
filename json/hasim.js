[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience functions and shadowing of API internals.\n Likely to be a more stable interface then \u003ccode\u003eControl.Hasim.Process\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Hasim.Action",
        "fct-package": "hasim",
        "fct-signature": "module",
        "fct-source": "src/Control-Hasim-Action.html",
        "fct-type": "module",
        "title": "Action"
      },
      "index": {
        "description": "Convenience functions and shadowing of API internals Likely to be more stable interface then Control.Hasim.Process",
        "hierarchy": "Control Hasim Action",
        "module": "Control.Hasim.Action",
        "name": "Action",
        "normalized": "",
        "package": "hasim",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:getTime",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current time. The result will be nonnegative.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Action",
        "fct-package": "hasim",
        "fct-signature": "Action pkt st Time",
        "fct-source": "src/Control-Hasim-Action.html#getTime",
        "fct-type": "function",
        "title": "getTime"
      },
      "index": {
        "description": "Get the current time The result will be nonnegative",
        "hierarchy": "Control Hasim Action",
        "module": "Control.Hasim.Action",
        "name": "getTime",
        "normalized": "",
        "package": "hasim",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:poll",
      "description": {
        "fct-descr": "\u003cp\u003eReceive a packet, non-blocking.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Action",
        "fct-package": "hasim",
        "fct-signature": "Action pkt st (Maybe pkt)",
        "fct-source": "src/Control-Hasim-Action.html#poll",
        "fct-type": "function",
        "title": "poll"
      },
      "index": {
        "description": "Receive packet non-blocking",
        "hierarchy": "Control Hasim Action",
        "module": "Control.Hasim.Action",
        "name": "poll",
        "normalized": "",
        "package": "hasim",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eReceive a packet. Block until the first packet comes in.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Action",
        "fct-package": "hasim",
        "fct-signature": "Action pkt st pkt",
        "fct-source": "src/Control-Hasim-Action.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Receive packet Block until the first packet comes in",
        "hierarchy": "Control Hasim Action",
        "module": "Control.Hasim.Action",
        "name": "receive",
        "normalized": "",
        "package": "hasim",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend a packet to a process, with a timeout\n time interval. Returns True iff the\n packet was accepted.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Action",
        "fct-package": "hasim",
        "fct-signature": "pkt-\u003e Proc pkt st-\u003e Time-\u003e Action pkt' st' Bool",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send packet to process with timeout time interval Returns True iff the packet was accepted",
        "hierarchy": "Control Hasim Action",
        "module": "Control.Hasim.Action",
        "name": "send",
        "normalized": "a-\u003eProc a b-\u003eTime-\u003eAction c d Bool",
        "package": "hasim",
        "partial": "",
        "signature": "pkt-\u003eProc pkt st-\u003eTime-\u003eAction pkt' st' Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:sendBlock",
      "description": {
        "fct-descr": "\u003cp\u003eSend a packet. Wait as long as necessary to deliver the packet.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Action",
        "fct-package": "hasim",
        "fct-signature": "pkt-\u003e Proc pkt st-\u003e Action pkt' st' ()",
        "fct-type": "function",
        "title": "sendBlock"
      },
      "index": {
        "description": "Send packet Wait as long as necessary to deliver the packet",
        "hierarchy": "Control Hasim Action",
        "module": "Control.Hasim.Action",
        "name": "sendBlock",
        "normalized": "a-\u003eProc a b-\u003eAction c d()",
        "package": "hasim",
        "partial": "Block",
        "signature": "pkt-\u003eProc pkt st-\u003eAction pkt' st'()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:trySend",
      "description": {
        "fct-descr": "\u003cp\u003eSend a packet. Return True iff the packet was\n accepted immediately. Do not wait in case the\n packet was not accepted.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Action",
        "fct-package": "hasim",
        "fct-signature": "pkt-\u003e Proc pkt st-\u003e Action pkt' st' Bool",
        "fct-type": "function",
        "title": "trySend"
      },
      "index": {
        "description": "Send packet Return True iff the packet was accepted immediately Do not wait in case the packet was not accepted",
        "hierarchy": "Control Hasim Action",
        "module": "Control.Hasim.Action",
        "name": "trySend",
        "normalized": "a-\u003eProc a b-\u003eAction c d Bool",
        "package": "hasim",
        "partial": "Send",
        "signature": "pkt-\u003eProc pkt st-\u003eAction pkt' st' Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:wait",
      "description": {
        "fct-descr": "\u003cp\u003eWait for a nonnegative time period.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Action",
        "fct-package": "hasim",
        "fct-signature": "Time-\u003e Action pkt st ()",
        "fct-type": "function",
        "title": "wait"
      },
      "index": {
        "description": "Wait for nonnegative time period",
        "hierarchy": "Control Hasim Action",
        "module": "Control.Hasim.Action",
        "name": "wait",
        "normalized": "Time-\u003eAction a b()",
        "package": "hasim",
        "partial": "",
        "signature": "Time-\u003eAction pkt st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:waitForever",
      "description": {
        "fct-descr": "\u003cp\u003eWait forever. This can be useful in case you want to block,\n waiting for incoming packets.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Action",
        "fct-package": "hasim",
        "fct-signature": "Action pkt st ()",
        "fct-source": "src/Control-Hasim-Action.html#waitForever",
        "fct-type": "function",
        "title": "waitForever"
      },
      "index": {
        "description": "Wait forever This can be useful in case you want to block waiting for incoming packets",
        "hierarchy": "Control Hasim Action",
        "module": "Control.Hasim.Action",
        "name": "waitForever",
        "normalized": "Action a b()",
        "package": "hasim",
        "partial": "Forever",
        "signature": "Action pkt st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:withAcceptor",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an action with an \u003ccode\u003e\u003ca\u003eAcceptor\u003c/a\u003e\u003c/code\u003e function\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Action",
        "fct-package": "hasim",
        "fct-signature": "Acceptor pkt st-\u003e Action pkt st ()-\u003e Action pkt st ()",
        "fct-type": "function",
        "title": "withAcceptor"
      },
      "index": {
        "description": "Execute an action with an Acceptor function",
        "hierarchy": "Control Hasim Action",
        "module": "Control.Hasim.Action",
        "name": "withAcceptor",
        "normalized": "Acceptor a b-\u003eAction a b()-\u003eAction a b()",
        "package": "hasim",
        "partial": "Acceptor",
        "signature": "Acceptor pkt st-\u003eAction pkt st()-\u003eAction pkt st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:withoutInterruptions",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an action without interruptions from incoming packets.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Action",
        "fct-package": "hasim",
        "fct-signature": "Action pkt st () -\u003e Action pkt st ()",
        "fct-source": "src/Control-Hasim-Action.html#withoutInterruptions",
        "fct-type": "function",
        "title": "withoutInterruptions"
      },
      "index": {
        "description": "Execute an action without interruptions from incoming packets",
        "hierarchy": "Control Hasim Action",
        "module": "Control.Hasim.Action",
        "name": "withoutInterruptions",
        "normalized": "Action a b()-\u003eAction a b()",
        "package": "hasim",
        "partial": "Interruptions",
        "signature": "Action pkt st()-\u003eAction pkt st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a \u003cem\u003eDES\u003c/em\u003e, which stands for \u003cem\u003eDiscrete Event Set\u003c/em\u003e.\n There are functions for creating and inserting events.\n\u003c/p\u003e\u003cp\u003eFor each process, an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e may be scheduled. This event consists of\n a \u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e. There can be at most one \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e scheduled\n for each \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Hasim.DES",
        "fct-package": "hasim",
        "fct-signature": "module",
        "fct-source": "src/Control-Hasim-DES.html",
        "fct-type": "module",
        "title": "DES"
      },
      "index": {
        "description": "This module defines DES which stands for Discrete Event Set There are functions for creating and inserting events For each process an Event may be scheduled This event consists of Time and Runnable There can be at most one Event scheduled for each Process",
        "hierarchy": "Control Hasim DES",
        "module": "Control.Hasim.DES",
        "name": "DES",
        "normalized": "",
        "package": "hasim",
        "partial": "DES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#t:DES",
      "description": {
        "fct-descr": "\u003cp\u003eDiscrete Event Set. A discrete event set is a data structure\n that supports the operations \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eremoveNext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.DES",
        "fct-package": "hasim",
        "fct-signature": "data",
        "fct-source": "src/Control-Hasim-DES.html#DES",
        "fct-type": "data",
        "title": "DES"
      },
      "index": {
        "description": "Discrete Event Set discrete event set is data structure that supports the operations update and removeNext",
        "hierarchy": "Control Hasim DES",
        "module": "Control.Hasim.DES",
        "name": "DES",
        "normalized": "",
        "package": "hasim",
        "partial": "DES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003eEvent. An event consists of a \u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.DES",
        "fct-package": "hasim",
        "fct-signature": "data",
        "fct-source": "src/Control-Hasim-DES.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "Event An event consists of Time and Runnable",
        "hierarchy": "Control Hasim DES",
        "module": "Control.Hasim.DES",
        "name": "Event",
        "normalized": "",
        "package": "hasim",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#v:eProcess",
      "description": {
        "fct-descr": "\u003cp\u003eThe process of an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.DES",
        "fct-package": "hasim",
        "fct-signature": "Event -\u003e Process",
        "fct-source": "src/Control-Hasim-DES.html#eProcess",
        "fct-type": "function",
        "title": "eProcess"
      },
      "index": {
        "description": "The process of an Event",
        "hierarchy": "Control Hasim DES",
        "module": "Control.Hasim.DES",
        "name": "eProcess",
        "normalized": "Event-\u003eProcess",
        "package": "hasim",
        "partial": "Process",
        "signature": "Event-\u003eProcess"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#v:eRunnable",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e that should be run at this time\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.DES",
        "fct-package": "hasim",
        "fct-signature": "Event -\u003e Runnable",
        "fct-source": "src/Control-Hasim-DES.html#eRunnable",
        "fct-type": "function",
        "title": "eRunnable"
      },
      "index": {
        "description": "The Runnable that should be run at this time",
        "hierarchy": "Control Hasim DES",
        "module": "Control.Hasim.DES",
        "name": "eRunnable",
        "normalized": "Event-\u003eRunnable",
        "package": "hasim",
        "partial": "Runnable",
        "signature": "Event-\u003eRunnable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#v:eTime",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003e at which the event takes place.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.DES",
        "fct-package": "hasim",
        "fct-signature": "Event -\u003e Time",
        "fct-source": "src/Control-Hasim-DES.html#eTime",
        "fct-type": "function",
        "title": "eTime"
      },
      "index": {
        "description": "The Time at which the event takes place",
        "hierarchy": "Control Hasim DES",
        "module": "Control.Hasim.DES",
        "name": "eTime",
        "normalized": "Event-\u003eTime",
        "package": "hasim",
        "partial": "Time",
        "signature": "Event-\u003eTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#v:emptyDES",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty discrete event set.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.DES",
        "fct-package": "hasim",
        "fct-signature": "DES",
        "fct-source": "src/Control-Hasim-DES.html#emptyDES",
        "fct-type": "function",
        "title": "emptyDES"
      },
      "index": {
        "description": "An empty discrete event set",
        "hierarchy": "Control Hasim DES",
        "module": "Control.Hasim.DES",
        "name": "emptyDES",
        "normalized": "",
        "package": "hasim",
        "partial": "DES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#v:initDES",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eDES\u003c/a\u003e\u003c/code\u003e. For each \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e, an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e is scheduled\n at time 0 and with \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e the associated \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.DES",
        "fct-package": "hasim",
        "fct-signature": "[Process]-\u003e IO DES",
        "fct-type": "function",
        "title": "initDES"
      },
      "index": {
        "description": "Create new DES For each Process an Event is scheduled at time and with Runnable the associated Runnable of the Process",
        "hierarchy": "Control Hasim DES",
        "module": "Control.Hasim.DES",
        "name": "initDES",
        "normalized": "[Process]-\u003eIO DES",
        "package": "hasim",
        "partial": "DES",
        "signature": "[Process]-\u003eIO DES"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eIs the Discrete Event Set empty?\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.DES",
        "fct-package": "hasim",
        "fct-signature": "DES -\u003e Bool",
        "fct-source": "src/Control-Hasim-DES.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Is the Discrete Event Set empty",
        "hierarchy": "Control Hasim DES",
        "module": "Control.Hasim.DES",
        "name": "isEmpty",
        "normalized": "DES-\u003eBool",
        "package": "hasim",
        "partial": "Empty",
        "signature": "DES-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#v:removeNext",
      "description": {
        "fct-descr": "\u003cp\u003eGet an event with lowest time that will take place next.\n Returns a tuple \u003ccode\u003e(evt, des)\u003c/code\u003e where \u003ccode\u003eevt\u003c/code\u003e is the next \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003edes\u003c/code\u003e is the new \u003ccode\u003e\u003ca\u003eDES\u003c/a\u003e\u003c/code\u003e where this event is removed.\n\u003c/p\u003e\u003cp\u003eCalls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eDES\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.DES",
        "fct-package": "hasim",
        "fct-signature": "DES -\u003e (Event, DES)",
        "fct-source": "src/Control-Hasim-DES.html#removeNext",
        "fct-type": "function",
        "title": "removeNext"
      },
      "index": {
        "description": "Get an event with lowest time that will take place next Returns tuple evt des where evt is the next Event and des is the new DES where this event is removed Calls error if the DES is empty",
        "hierarchy": "Control Hasim DES",
        "module": "Control.Hasim.DES",
        "name": "removeNext",
        "normalized": "DES-\u003e(Event,DES)",
        "package": "hasim",
        "partial": "Next",
        "signature": "DES-\u003e(Event,DES)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eSchedule an event in a discrete event set. Note that an old\n event of the same process is removed from the discrete event set.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.DES",
        "fct-package": "hasim",
        "fct-signature": "Time-\u003e Runnable-\u003e DES-\u003e DES",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Schedule an event in discrete event set Note that an old event of the same process is removed from the discrete event set",
        "hierarchy": "Control Hasim DES",
        "module": "Control.Hasim.DES",
        "name": "update",
        "normalized": "Time-\u003eRunnable-\u003eDES-\u003eDES",
        "package": "hasim",
        "partial": "",
        "signature": "Time-\u003eRunnable-\u003eDES-\u003eDES"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module takes care of defining processes and their actions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "module",
        "fct-source": "src/Control-Hasim-Process.html",
        "fct-type": "module",
        "title": "Process"
      },
      "index": {
        "description": "This module takes care of defining processes and their actions",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Process",
        "normalized": "",
        "package": "hasim",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#t:AcceptResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of result of the \u003ccode\u003e\u003ca\u003eAcceptor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "data",
        "fct-source": "src/Control-Hasim-Process.html#AcceptResult",
        "fct-type": "data",
        "title": "AcceptResult"
      },
      "index": {
        "description": "The type of result of the Acceptor",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "AcceptResult",
        "normalized": "",
        "package": "hasim",
        "partial": "Accept Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#t:Acceptor",
      "description": {
        "fct-descr": "\u003cp\u003eAn acceptor of a \u003ccode\u003epkt\u003c/code\u003e is an \u003ccode\u003e\u003ca\u003eAcceptResult\u003c/a\u003e\u003c/code\u003e, which is either\n   * \u003ccode\u003eRefuse\u003c/code\u003e if the packet is to be delivered at a later time, or\n   never, of course\n   * \u003ccode\u003eParallel act\u003c/code\u003e if a current computation should not be suspended,\n   but the state should be changed.\n   * \u003ccode\u003eInterrupt act\u003c/code\u003e if the current computation should be suspended.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "type",
        "fct-source": "src/Control-Hasim-Process.html#Acceptor",
        "fct-type": "type",
        "title": "Acceptor"
      },
      "index": {
        "description": "An acceptor of pkt is an AcceptResult which is either Refuse if the packet is to be delivered at later time or never of course Parallel act if current computation should not be suspended but the state should be changed Interrupt act if the current computation should be suspended",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Acceptor",
        "normalized": "",
        "package": "hasim",
        "partial": "Acceptor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#t:Action",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eAction\u003c/code\u003e GADT. This is a GADT with three\n parameters; an \u003ccode\u003eAction pkt st a\u003c/code\u003e is a action where\n   * pkt denotes the packet type of incoming packets\n   * st denotes the state that can be modified\n     and inspected\n   * a denotes the result value of the \u003ccode\u003eAction\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "data",
        "fct-source": "src/Control-Hasim-Process.html#Action",
        "fct-type": "data",
        "title": "Action"
      },
      "index": {
        "description": "The Action GADT This is GADT with three parameters an Action pkt st is action where pkt denotes the packet type of incoming packets st denotes the state that can be modified and inspected denotes the result value of the Action",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Action",
        "normalized": "",
        "package": "hasim",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#t:Atom",
      "description": {
        "fct-descr": "\u003cp\u003eExistential type for the \u003ccode\u003e\u003ca\u003ePrimAction\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "data",
        "fct-source": "src/Control-Hasim-Process.html#Atom",
        "fct-type": "data",
        "title": "Atom"
      },
      "index": {
        "description": "Existential type for the PrimAction type",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Atom",
        "normalized": "",
        "package": "hasim",
        "partial": "Atom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#t:PrimAction",
      "description": {
        "fct-descr": "\u003cp\u003eGADT for the primitive actions. These are the primitives\n Hasim supports. \n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003ePrimAction pkt st a\u003c/code\u003e is a primitive action where\n   * \u003ccode\u003epkt\u003c/code\u003e is the packet type the associated \u003ccode\u003e\u003ca\u003eProc\u003c/a\u003e\u003c/code\u003e supports.\n   * \u003ccode\u003est\u003c/code\u003e is the state of the associated \u003ccode\u003e\u003ca\u003eProc\u003c/a\u003e\u003c/code\u003e.\n   * \u003ccode\u003ea\u003c/code\u003e is the return type of the PrimAction.\n   (this is why we need a GADT; the return type\n   varies for each primitive action).\n\u003c/p\u003e\u003cp\u003e(Unfortunately, the documentation for each constructor is\n not available in the generated output due to a glitch in Haddock.\n You can use the source, which is documented.)\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "data",
        "fct-source": "src/Control-Hasim-Process.html#PrimAction",
        "fct-type": "data",
        "title": "PrimAction"
      },
      "index": {
        "description": "GADT for the primitive actions These are the primitives Hasim supports PrimAction pkt st is primitive action where pkt is the packet type the associated Proc supports st is the state of the associated Proc is the return type of the PrimAction this is why we need GADT the return type varies for each primitive action Unfortunately the documentation for each constructor is not available in the generated output due to glitch in Haddock You can use the source which is documented",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "PrimAction",
        "normalized": "",
        "package": "hasim",
        "partial": "Prim Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#t:Proc",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eProc st pkt\u003c/code\u003e is a process that potentially accepts packets of type \n \u003ccode\u003epkt\u003c/code\u003e while maintaining state \u003ccode\u003est\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "data",
        "fct-source": "src/Control-Hasim-Process.html#Proc",
        "fct-type": "data",
        "title": "Proc"
      },
      "index": {
        "description": "Proc st pkt is process that potentially accepts packets of type pkt while maintaining state st",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Proc",
        "normalized": "",
        "package": "hasim",
        "partial": "Proc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#t:Process",
      "description": {
        "fct-descr": "\u003cp\u003eExistential type for a \u003ccode\u003e\u003ca\u003eProc\u003c/a\u003e\u003c/code\u003e. A \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003eProc pkt\u003c/code\u003e\n for some \u003ccode\u003epkt\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "data",
        "fct-source": "src/Control-Hasim-Process.html#Process",
        "fct-type": "data",
        "title": "Process"
      },
      "index": {
        "description": "Existential type for Proc Process is Proc pkt for some pkt",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Process",
        "normalized": "",
        "package": "hasim",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#t:Runnable",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e is an action that can be run. A \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e has\n three parameters:\n   * The first is the process to which this \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e belongs.\n   * The second is a primitive action to be run.\n   * The third is Maybe a continuation.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "data",
        "fct-source": "src/Control-Hasim-Process.html#Runnable",
        "fct-type": "data",
        "title": "Runnable"
      },
      "index": {
        "description": "Runnable is an action that can be run Runnable has three parameters The first is the process to which this Runnable belongs The second is primitive action to be run The third is Maybe continuation",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Runnable",
        "normalized": "",
        "package": "hasim",
        "partial": "Runnable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Atom",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "forall a st pkt . Atom (PrimAction pkt st a)",
        "fct-source": "src/Control-Hasim-Process.html#Atom",
        "fct-type": "function",
        "title": "Atom"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Atom",
        "normalized": "",
        "package": "hasim",
        "partial": "Atom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:GetState",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "PrimAction pkt st st",
        "fct-source": "src/Control-Hasim-Process.html#PrimAction",
        "fct-type": "function",
        "title": "GetState"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "GetState",
        "normalized": "",
        "package": "hasim",
        "partial": "Get State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Interrupt",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "Interrupt (Action pkt st ())",
        "fct-source": "src/Control-Hasim-Process.html#AcceptResult",
        "fct-type": "function",
        "title": "Interrupt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Interrupt",
        "normalized": "Interrupt(Action a b())",
        "package": "hasim",
        "partial": "Interrupt",
        "signature": "Interrupt(Action pkt st())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:ObserveTime",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "PrimAction pkt st Time",
        "fct-source": "src/Control-Hasim-Process.html#PrimAction",
        "fct-type": "function",
        "title": "ObserveTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "ObserveTime",
        "normalized": "",
        "package": "hasim",
        "partial": "Observe Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Parallel",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "Parallel (st -\u003e st)",
        "fct-source": "src/Control-Hasim-Process.html#AcceptResult",
        "fct-type": "function",
        "title": "Parallel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Parallel",
        "normalized": "Parallel(a-\u003ea)",
        "package": "hasim",
        "partial": "Parallel",
        "signature": "Parallel(st-\u003est)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:PerformIO",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "IO a -\u003e PrimAction pkt st a",
        "fct-source": "src/Control-Hasim-Process.html#PrimAction",
        "fct-type": "function",
        "title": "PerformIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "PerformIO",
        "normalized": "IO a-\u003ePrimAction b c a",
        "package": "hasim",
        "partial": "Perform IO",
        "signature": "IO a-\u003ePrimAction pkt st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:PopAcceptor",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "PrimAction pkt st ()",
        "fct-source": "src/Control-Hasim-Process.html#PrimAction",
        "fct-type": "function",
        "title": "PopAcceptor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "PopAcceptor",
        "normalized": "PrimAction a b()",
        "package": "hasim",
        "partial": "Pop Acceptor",
        "signature": "PrimAction pkt st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Prim",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "PrimAction pkt st a -\u003e Action pkt st a",
        "fct-source": "src/Control-Hasim-Process.html#Action",
        "fct-type": "function",
        "title": "Prim"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Prim",
        "normalized": "PrimAction a b c-\u003eAction a b c",
        "package": "hasim",
        "partial": "Prim",
        "signature": "PrimAction pkt st a-\u003eAction pkt st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Proc",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "Proc",
        "fct-source": "src/Control-Hasim-Process.html#Proc",
        "fct-type": "function",
        "title": "Proc"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Proc",
        "normalized": "",
        "package": "hasim",
        "partial": "Proc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Process",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "forall pkt st . Process (Proc pkt st)",
        "fct-source": "src/Control-Hasim-Process.html#Process",
        "fct-type": "function",
        "title": "Process"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Process",
        "normalized": "",
        "package": "hasim",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:PutState",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "st -\u003e PrimAction pkt st ()",
        "fct-source": "src/Control-Hasim-Process.html#PrimAction",
        "fct-type": "function",
        "title": "PutState"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "PutState",
        "normalized": "a-\u003ePrimAction b a()",
        "package": "hasim",
        "partial": "Put State",
        "signature": "st-\u003ePrimAction pkt st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Refuse",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "Refuse",
        "fct-source": "src/Control-Hasim-Process.html#AcceptResult",
        "fct-type": "function",
        "title": "Refuse"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Refuse",
        "normalized": "",
        "package": "hasim",
        "partial": "Refuse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Ret",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "a -\u003e PrimAction pkt st a",
        "fct-source": "src/Control-Hasim-Process.html#PrimAction",
        "fct-type": "function",
        "title": "Ret"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Ret",
        "normalized": "a-\u003ePrimAction b c a",
        "package": "hasim",
        "partial": "Ret",
        "signature": "a-\u003ePrimAction pkt st a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Run",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "forall a pkt st . Run (Proc pkt st) (PrimAction pkt st a) (Maybe (a -\u003e Runnable))",
        "fct-source": "src/Control-Hasim-Process.html#Runnable",
        "fct-type": "function",
        "title": "Run"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Run",
        "normalized": "a b c d Run(Proc c d)(PrimAction c d b)(Maybe(b-\u003eRunnable))",
        "package": "hasim",
        "partial": "Run",
        "signature": "forall a pkt st Run(Proc pkt st)(PrimAction pkt st a)(Maybe(a-\u003eRunnable))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Send",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "snd -\u003e Proc snd st2 -\u003e Time -\u003e PrimAction pkt st Bool",
        "fct-source": "src/Control-Hasim-Process.html#PrimAction",
        "fct-type": "function",
        "title": "Send"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Send",
        "normalized": "a-\u003eProc a b-\u003eTime-\u003ePrimAction c b Bool",
        "package": "hasim",
        "partial": "Send",
        "signature": "snd-\u003eProc snd st-\u003eTime-\u003ePrimAction pkt st Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Unwatch",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "Proc rcv st2 -\u003e PrimAction pkt st ()",
        "fct-source": "src/Control-Hasim-Process.html#PrimAction",
        "fct-type": "function",
        "title": "Unwatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Unwatch",
        "normalized": "Proc a b-\u003ePrimAction c b()",
        "package": "hasim",
        "partial": "Unwatch",
        "signature": "Proc rcv st-\u003ePrimAction pkt st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Wait",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "Time -\u003e PrimAction pkt st ()",
        "fct-source": "src/Control-Hasim-Process.html#PrimAction",
        "fct-type": "function",
        "title": "Wait"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "Wait",
        "normalized": "Time-\u003ePrimAction a b()",
        "package": "hasim",
        "partial": "Wait",
        "signature": "Time-\u003ePrimAction pkt st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:WaitForever",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "PrimAction pkt st ()",
        "fct-source": "src/Control-Hasim-Process.html#PrimAction",
        "fct-type": "function",
        "title": "WaitForever"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "WaitForever",
        "normalized": "PrimAction a b()",
        "package": "hasim",
        "partial": "Wait Forever",
        "signature": "PrimAction pkt st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:WithAcceptor",
      "description": {
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "Acceptor pkt st -\u003e Action pkt st () -\u003e PrimAction pkt st ()",
        "fct-source": "src/Control-Hasim-Process.html#PrimAction",
        "fct-type": "function",
        "title": "WithAcceptor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "WithAcceptor",
        "normalized": "Acceptor a b-\u003eAction a b()-\u003ePrimAction a b()",
        "package": "hasim",
        "partial": "With Acceptor",
        "signature": "Acceptor pkt st-\u003eAction pkt st()-\u003ePrimAction pkt st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:acceptor",
      "description": {
        "fct-descr": "\u003cp\u003eThe list of acceptors with the continuations\n after the WithAcceptor.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "IORef [(Acceptor pkt st, Maybe Runnable)]",
        "fct-source": "src/Control-Hasim-Process.html#Proc",
        "fct-type": "function",
        "title": "acceptor"
      },
      "index": {
        "description": "The list of acceptors with the continuations after the WithAcceptor",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "acceptor",
        "normalized": "IORef[(Acceptor a b,Maybe Runnable)]",
        "package": "hasim",
        "partial": "",
        "signature": "IORef[(Acceptor pkt st,Maybe Runnable)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:action",
      "description": {
        "fct-descr": "\u003cp\u003eThe starting action. Loses its relevance\n after startup of the simulation.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "IORef (Maybe Runnable)",
        "fct-source": "src/Control-Hasim-Process.html#Proc",
        "fct-type": "function",
        "title": "action"
      },
      "index": {
        "description": "The starting action Loses its relevance after startup of the simulation",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "action",
        "normalized": "",
        "package": "hasim",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:currentState",
      "description": {
        "fct-descr": "\u003cp\u003eThe state of the process.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "IORef st",
        "fct-source": "src/Control-Hasim-Process.html#Proc",
        "fct-type": "function",
        "title": "currentState"
      },
      "index": {
        "description": "The state of the process",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "currentState",
        "normalized": "",
        "package": "hasim",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:identifier",
      "description": {
        "fct-descr": "\u003cp\u003eThe identifier of this process. Must be unique\n or hell will ensue. Guaranteed to be unique by\n the creator of the process.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "Id",
        "fct-source": "src/Control-Hasim-Process.html#Proc",
        "fct-type": "function",
        "title": "identifier"
      },
      "index": {
        "description": "The identifier of this process Must be unique or hell will ensue Guaranteed to be unique by the creator of the process",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "identifier",
        "normalized": "",
        "package": "hasim",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:name",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the process. Determined by the user,\n may be any string. Used for displaying information\n to the user.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "String",
        "fct-source": "src/Control-Hasim-Process.html#Proc",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "The name of the process Determined by the user may be any string Used for displaying information to the user",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "name",
        "normalized": "",
        "package": "hasim",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:runnable2process",
      "description": {
        "fct-descr": "\u003cp\u003eFinds the \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e (existential type) belonging to a \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "Runnable -\u003e Process",
        "fct-source": "src/Control-Hasim-Process.html#runnable2process",
        "fct-type": "function",
        "title": "runnable2process"
      },
      "index": {
        "description": "Finds the Process existential type belonging to Runnable",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "runnable2process",
        "normalized": "Runnable-\u003eProcess",
        "package": "hasim",
        "partial": "",
        "signature": "Runnable-\u003eProcess"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:toRunnable",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a process with an action to a \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "Proc pkt st -\u003e Action pkt st () -\u003e Runnable",
        "fct-source": "src/Control-Hasim-Process.html#toRunnable",
        "fct-type": "function",
        "title": "toRunnable"
      },
      "index": {
        "description": "Converts process with an action to Runnable",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "toRunnable",
        "normalized": "Proc a b-\u003eAction a b()-\u003eRunnable",
        "package": "hasim",
        "partial": "Runnable",
        "signature": "Proc pkt st-\u003eAction pkt st()-\u003eRunnable"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:wakeup",
      "description": {
        "fct-descr": "\u003cp\u003eThe current wakeup function, if any. \n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Process",
        "fct-package": "hasim",
        "fct-signature": "IORef (Maybe Runnable)",
        "fct-source": "src/Control-Hasim-Process.html#Proc",
        "fct-type": "function",
        "title": "wakeup"
      },
      "index": {
        "description": "The current wakeup function if any",
        "hierarchy": "Control Hasim Process",
        "module": "Control.Hasim.Process",
        "name": "wakeup",
        "normalized": "",
        "package": "hasim",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-SimRun.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module takes care of actually running a simulation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Hasim.SimRun",
        "fct-package": "hasim",
        "fct-signature": "module",
        "fct-source": "src/Control-Hasim-SimRun.html",
        "fct-type": "module",
        "title": "SimRun"
      },
      "index": {
        "description": "This module takes care of actually running simulation",
        "hierarchy": "Control Hasim SimRun",
        "module": "Control.Hasim.SimRun",
        "name": "SimRun",
        "normalized": "",
        "package": "hasim",
        "partial": "Sim Run",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-SimRun.html#v:runSimulation",
      "description": {
        "fct-descr": "\u003cp\u003eRun the simulation.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.SimRun",
        "fct-package": "hasim",
        "fct-signature": "Simulation -\u003e IO ()",
        "fct-source": "src/Control-Hasim-SimRun.html#runSimulation",
        "fct-type": "function",
        "title": "runSimulation"
      },
      "index": {
        "description": "Run the simulation",
        "hierarchy": "Control Hasim SimRun",
        "module": "Control.Hasim.SimRun",
        "name": "runSimulation",
        "normalized": "Simulation-\u003eIO()",
        "package": "hasim",
        "partial": "Simulation",
        "signature": "Simulation-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the Simulation monad, with\n functions to create processes and set actions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Hasim.Simulation",
        "fct-package": "hasim",
        "fct-signature": "module",
        "fct-source": "src/Control-Hasim-Simulation.html",
        "fct-type": "module",
        "title": "Simulation"
      },
      "index": {
        "description": "This module defines the Simulation monad with functions to create processes and set actions",
        "hierarchy": "Control Hasim Simulation",
        "module": "Control.Hasim.Simulation",
        "name": "Simulation",
        "normalized": "",
        "package": "hasim",
        "partial": "Simulation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#t:SimMonad",
      "description": {
        "fct-descr": "\u003cp\u003eThe simulation monad called \u003ccode\u003e\u003ca\u003eSimMonad\u003c/a\u003e\u003c/code\u003e. In this\n monad you can define a simulation to be run.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Simulation",
        "fct-package": "hasim",
        "fct-signature": "type",
        "fct-source": "src/Control-Hasim-Simulation.html#SimMonad",
        "fct-type": "type",
        "title": "SimMonad"
      },
      "index": {
        "description": "The simulation monad called SimMonad In this monad you can define simulation to be run",
        "hierarchy": "Control Hasim Simulation",
        "module": "Control.Hasim.Simulation",
        "name": "SimMonad",
        "normalized": "",
        "package": "hasim",
        "partial": "Sim Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#t:Simulation",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing a simulation.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Simulation",
        "fct-package": "hasim",
        "fct-signature": "data",
        "fct-source": "src/Control-Hasim-Simulation.html#Simulation",
        "fct-type": "data",
        "title": "Simulation"
      },
      "index": {
        "description": "Data type representing simulation",
        "hierarchy": "Control Hasim Simulation",
        "module": "Control.Hasim.Simulation",
        "name": "Simulation",
        "normalized": "",
        "package": "hasim",
        "partial": "Simulation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#v:createSimulation",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a simulation from a SimMonad (a simulation definition).\n If the simulation is invalid, \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e will be called.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Simulation",
        "fct-package": "hasim",
        "fct-signature": "SimMonad () -\u003e IO Simulation",
        "fct-source": "src/Control-Hasim-Simulation.html#createSimulation",
        "fct-type": "function",
        "title": "createSimulation"
      },
      "index": {
        "description": "Create simulation from SimMonad simulation definition If the simulation is invalid error will be called",
        "hierarchy": "Control Hasim Simulation",
        "module": "Control.Hasim.Simulation",
        "name": "createSimulation",
        "normalized": "SimMonad()-\u003eIO Simulation",
        "package": "hasim",
        "partial": "Simulation",
        "signature": "SimMonad()-\u003eIO Simulation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#v:mkAnonProcess",
      "description": {
        "fct-descr": "\u003cp\u003eMake an anonymous process.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Simulation",
        "fct-package": "hasim",
        "fct-signature": "SimMonad (Proc pkt ())",
        "fct-source": "src/Control-Hasim-Simulation.html#mkAnonProcess",
        "fct-type": "function",
        "title": "mkAnonProcess"
      },
      "index": {
        "description": "Make an anonymous process",
        "hierarchy": "Control Hasim Simulation",
        "module": "Control.Hasim.Simulation",
        "name": "mkAnonProcess",
        "normalized": "SimMonad(Proc a())",
        "package": "hasim",
        "partial": "Anon Process",
        "signature": "SimMonad(Proc pkt())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#v:mkProcess",
      "description": {
        "fct-descr": "\u003cp\u003eMake a process with a name. This name will be used\n in logging and error messages\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Simulation",
        "fct-package": "hasim",
        "fct-signature": "String-\u003e st-\u003e SimMonad (Proc pkt st)",
        "fct-type": "function",
        "title": "mkProcess"
      },
      "index": {
        "description": "Make process with name This name will be used in logging and error messages",
        "hierarchy": "Control Hasim Simulation",
        "module": "Control.Hasim.Simulation",
        "name": "mkProcess",
        "normalized": "String-\u003ea-\u003eSimMonad(Proc b a)",
        "package": "hasim",
        "partial": "Process",
        "signature": "String-\u003est-\u003eSimMonad(Proc pkt st)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#v:setAction",
      "description": {
        "fct-descr": "\u003cp\u003eSet the action of the process.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Simulation",
        "fct-package": "hasim",
        "fct-signature": "Proc pkt st-\u003e Action pkt st ()-\u003e SimMonad ()",
        "fct-type": "function",
        "title": "setAction"
      },
      "index": {
        "description": "Set the action of the process",
        "hierarchy": "Control Hasim Simulation",
        "module": "Control.Hasim.Simulation",
        "name": "setAction",
        "normalized": "Proc a b-\u003eAction a b()-\u003eSimMonad()",
        "package": "hasim",
        "partial": "Action",
        "signature": "Proc pkt st-\u003eAction pkt st()-\u003eSimMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#v:unSim",
      "description": {
        "fct-module": "Control.Hasim.Simulation",
        "fct-package": "hasim",
        "fct-signature": "Simulation -\u003e [Process]",
        "fct-source": "src/Control-Hasim-Simulation.html#unSim",
        "fct-type": "function",
        "title": "unSim"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Simulation",
        "module": "Control.Hasim.Simulation",
        "name": "unSim",
        "normalized": "Simulation-\u003e[Process]",
        "package": "hasim",
        "partial": "Sim",
        "signature": "Simulation-\u003e[Process]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines common types used everywhere in Hasim.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Hasim.Types",
        "fct-package": "hasim",
        "fct-signature": "module",
        "fct-source": "src/Control-Hasim-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "This module defines common types used everywhere in Hasim",
        "hierarchy": "Control Hasim Types",
        "module": "Control.Hasim.Types",
        "name": "Types",
        "normalized": "",
        "package": "hasim",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Types.html#t:Id",
      "description": {
        "fct-module": "Control.Hasim.Types",
        "fct-package": "hasim",
        "fct-signature": "type",
        "fct-source": "src/Control-Hasim-Types.html#Id",
        "fct-type": "type",
        "title": "Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim Types",
        "module": "Control.Hasim.Types",
        "name": "Id",
        "normalized": "",
        "package": "hasim",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Types.html#t:Time",
      "description": {
        "fct-descr": "\u003cp\u003eThe type that represents a time.\n\u003c/p\u003e\u003cp\u003eThe type that represents a process identifier.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.Types",
        "fct-package": "hasim",
        "fct-signature": "type",
        "fct-source": "src/Control-Hasim-Types.html#Time",
        "fct-type": "type",
        "title": "Time"
      },
      "index": {
        "description": "The type that represents time The type that represents process identifier",
        "hierarchy": "Control Hasim Types",
        "module": "Control.Hasim.Types",
        "name": "Time",
        "normalized": "",
        "package": "hasim",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-WatchMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a \u003ccode\u003e\u003ca\u003eWatchMap\u003c/a\u003e\u003c/code\u003e, a data structure that keeps track\n of which processes watch which other processes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Hasim.WatchMap",
        "fct-package": "hasim",
        "fct-signature": "module",
        "fct-source": "src/Control-Hasim-WatchMap.html",
        "fct-type": "module",
        "title": "WatchMap"
      },
      "index": {
        "description": "This module defines WatchMap data structure that keeps track of which processes watch which other processes",
        "hierarchy": "Control Hasim WatchMap",
        "module": "Control.Hasim.WatchMap",
        "name": "WatchMap",
        "normalized": "",
        "package": "hasim",
        "partial": "Watch Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-WatchMap.html#t:WatchMap",
      "description": {
        "fct-descr": "\u003cp\u003eA watch map. This data structure represents a relation on\n processes.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.WatchMap",
        "fct-package": "hasim",
        "fct-signature": "data",
        "fct-source": "src/Control-Hasim-WatchMap.html#WatchMap",
        "fct-type": "data",
        "title": "WatchMap"
      },
      "index": {
        "description": "watch map This data structure represents relation on processes",
        "hierarchy": "Control Hasim WatchMap",
        "module": "Control.Hasim.WatchMap",
        "name": "WatchMap",
        "normalized": "",
        "package": "hasim",
        "partial": "Watch Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-WatchMap.html#v:emptyWM",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eWatchMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.WatchMap",
        "fct-package": "hasim",
        "fct-signature": "WatchMap",
        "fct-source": "src/Control-Hasim-WatchMap.html#emptyWM",
        "fct-type": "function",
        "title": "emptyWM"
      },
      "index": {
        "description": "An empty WatchMap",
        "hierarchy": "Control Hasim WatchMap",
        "module": "Control.Hasim.WatchMap",
        "name": "emptyWM",
        "normalized": "",
        "package": "hasim",
        "partial": "WM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-WatchMap.html#v:register",
      "description": {
        "fct-descr": "\u003cp\u003eAdd the tuple \u003ccode\u003e(p1, p2)\u003c/code\u003e to the relation.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.WatchMap",
        "fct-package": "hasim",
        "fct-signature": "Process-\u003e Process-\u003e WatchMap-\u003e WatchMap",
        "fct-type": "function",
        "title": "register"
      },
      "index": {
        "description": "Add the tuple p1 p2 to the relation",
        "hierarchy": "Control Hasim WatchMap",
        "module": "Control.Hasim.WatchMap",
        "name": "register",
        "normalized": "Process-\u003eProcess-\u003eWatchMap-\u003eWatchMap",
        "package": "hasim",
        "partial": "",
        "signature": "Process-\u003eProcess-\u003eWatchMap-\u003eWatchMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-WatchMap.html#v:unregister",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the tuple \u003ccode\u003e(p1, p2)\u003c/code\u003e from the relation, if it existed.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.WatchMap",
        "fct-package": "hasim",
        "fct-signature": "Process-\u003e Process-\u003e WatchMap-\u003e WatchMap",
        "fct-type": "function",
        "title": "unregister"
      },
      "index": {
        "description": "Remove the tuple p1 p2 from the relation if it existed",
        "hierarchy": "Control Hasim WatchMap",
        "module": "Control.Hasim.WatchMap",
        "name": "unregister",
        "normalized": "Process-\u003eProcess-\u003eWatchMap-\u003eWatchMap",
        "package": "hasim",
        "partial": "",
        "signature": "Process-\u003eProcess-\u003eWatchMap-\u003eWatchMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-WatchMap.html#v:watchers",
      "description": {
        "fct-descr": "\u003cp\u003eFind all \u003ccode\u003ep1\u003c/code\u003e such that \u003ccode\u003e(p1, p2)\u003c/code\u003e is in the relation.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim.WatchMap",
        "fct-package": "hasim",
        "fct-signature": "WatchMap-\u003e Process-\u003e [Process]",
        "fct-type": "function",
        "title": "watchers"
      },
      "index": {
        "description": "Find all p1 such that p1 p2 is in the relation",
        "hierarchy": "Control Hasim WatchMap",
        "module": "Control.Hasim.WatchMap",
        "name": "watchers",
        "normalized": "WatchMap-\u003eProcess-\u003e[Process]",
        "package": "hasim",
        "partial": "",
        "signature": "WatchMap-\u003eProcess-\u003e[Process]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module imports all relevant functions from Control.Hasim.*\n hiding implementation details.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "module",
        "fct-source": "src/Control-Hasim.html",
        "fct-type": "module",
        "title": "Hasim"
      },
      "index": {
        "description": "This module imports all relevant functions from Control.Hasim hiding implementation details",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "Hasim",
        "normalized": "",
        "package": "hasim",
        "partial": "Hasim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:AcceptResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of result of the \u003ccode\u003e\u003ca\u003eAcceptor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "data",
        "fct-source": "src/Control-Hasim-Process.html#AcceptResult",
        "fct-type": "data",
        "title": "AcceptResult"
      },
      "index": {
        "description": "The type of result of the Acceptor",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "AcceptResult",
        "normalized": "",
        "package": "hasim",
        "partial": "Accept Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:Acceptor",
      "description": {
        "fct-descr": "\u003cp\u003eAn acceptor of a \u003ccode\u003epkt\u003c/code\u003e is an \u003ccode\u003e\u003ca\u003eAcceptResult\u003c/a\u003e\u003c/code\u003e, which is either\n   * \u003ccode\u003eRefuse\u003c/code\u003e if the packet is to be delivered at a later time, or\n   never, of course\n   * \u003ccode\u003eParallel act\u003c/code\u003e if a current computation should not be suspended,\n   but the state should be changed.\n   * \u003ccode\u003eInterrupt act\u003c/code\u003e if the current computation should be suspended.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "type",
        "fct-source": "src/Control-Hasim-Process.html#Acceptor",
        "fct-type": "type",
        "title": "Acceptor"
      },
      "index": {
        "description": "An acceptor of pkt is an AcceptResult which is either Refuse if the packet is to be delivered at later time or never of course Parallel act if current computation should not be suspended but the state should be changed Interrupt act if the current computation should be suspended",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "Acceptor",
        "normalized": "",
        "package": "hasim",
        "partial": "Acceptor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:Action",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eAction\u003c/code\u003e GADT. This is a GADT with three\n parameters; an \u003ccode\u003eAction pkt st a\u003c/code\u003e is a action where\n   * pkt denotes the packet type of incoming packets\n   * st denotes the state that can be modified\n     and inspected\n   * a denotes the result value of the \u003ccode\u003eAction\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "data",
        "fct-source": "src/Control-Hasim-Process.html#Action",
        "fct-type": "data",
        "title": "Action"
      },
      "index": {
        "description": "The Action GADT This is GADT with three parameters an Action pkt st is action where pkt denotes the packet type of incoming packets st denotes the state that can be modified and inspected denotes the result value of the Action",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "Action",
        "normalized": "",
        "package": "hasim",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:Id",
      "description": {
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "type",
        "fct-source": "src/Control-Hasim-Types.html#Id",
        "fct-type": "type",
        "title": "Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "Id",
        "normalized": "",
        "package": "hasim",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:Proc",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eProc st pkt\u003c/code\u003e is a process that potentially accepts packets of type \n \u003ccode\u003epkt\u003c/code\u003e while maintaining state \u003ccode\u003est\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "data",
        "fct-source": "src/Control-Hasim-Process.html#Proc",
        "fct-type": "data",
        "title": "Proc"
      },
      "index": {
        "description": "Proc st pkt is process that potentially accepts packets of type pkt while maintaining state st",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "Proc",
        "normalized": "",
        "package": "hasim",
        "partial": "Proc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:Process",
      "description": {
        "fct-descr": "\u003cp\u003eExistential type for a \u003ccode\u003e\u003ca\u003eProc\u003c/a\u003e\u003c/code\u003e. A \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003eProc pkt\u003c/code\u003e\n for some \u003ccode\u003epkt\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "data",
        "fct-source": "src/Control-Hasim-Process.html#Process",
        "fct-type": "data",
        "title": "Process"
      },
      "index": {
        "description": "Existential type for Proc Process is Proc pkt for some pkt",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "Process",
        "normalized": "",
        "package": "hasim",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:SimMonad",
      "description": {
        "fct-descr": "\u003cp\u003eThe simulation monad called \u003ccode\u003e\u003ca\u003eSimMonad\u003c/a\u003e\u003c/code\u003e. In this\n monad you can define a simulation to be run.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "type",
        "fct-source": "src/Control-Hasim-Simulation.html#SimMonad",
        "fct-type": "type",
        "title": "SimMonad"
      },
      "index": {
        "description": "The simulation monad called SimMonad In this monad you can define simulation to be run",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "SimMonad",
        "normalized": "",
        "package": "hasim",
        "partial": "Sim Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:Simulation",
      "description": {
        "fct-descr": "\u003cp\u003eData type representing a simulation.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "data",
        "fct-source": "src/Control-Hasim-Simulation.html#Simulation",
        "fct-type": "data",
        "title": "Simulation"
      },
      "index": {
        "description": "Data type representing simulation",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "Simulation",
        "normalized": "",
        "package": "hasim",
        "partial": "Simulation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:Time",
      "description": {
        "fct-descr": "\u003cp\u003eThe type that represents a time.\n\u003c/p\u003e\u003cp\u003eThe type that represents a process identifier.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "type",
        "fct-source": "src/Control-Hasim-Types.html#Time",
        "fct-type": "type",
        "title": "Time"
      },
      "index": {
        "description": "The type that represents time The type that represents process identifier",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "Time",
        "normalized": "",
        "package": "hasim",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#v:Interrupt",
      "description": {
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "Interrupt (Action pkt st ())",
        "fct-source": "src/Control-Hasim-Process.html#AcceptResult",
        "fct-type": "function",
        "title": "Interrupt"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "Interrupt",
        "normalized": "Interrupt(Action a b())",
        "package": "hasim",
        "partial": "Interrupt",
        "signature": "Interrupt(Action pkt st())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#v:Parallel",
      "description": {
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "Parallel (st -\u003e st)",
        "fct-source": "src/Control-Hasim-Process.html#AcceptResult",
        "fct-type": "function",
        "title": "Parallel"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "Parallel",
        "normalized": "Parallel(a-\u003ea)",
        "package": "hasim",
        "partial": "Parallel",
        "signature": "Parallel(st-\u003est)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#v:Refuse",
      "description": {
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "Refuse",
        "fct-source": "src/Control-Hasim-Process.html#AcceptResult",
        "fct-type": "function",
        "title": "Refuse"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "Refuse",
        "normalized": "",
        "package": "hasim",
        "partial": "Refuse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#v:createSimulation",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a simulation from a SimMonad (a simulation definition).\n If the simulation is invalid, \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e will be called.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "SimMonad () -\u003e IO Simulation",
        "fct-source": "src/Control-Hasim-Simulation.html#createSimulation",
        "fct-type": "function",
        "title": "createSimulation"
      },
      "index": {
        "description": "Create simulation from SimMonad simulation definition If the simulation is invalid error will be called",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "createSimulation",
        "normalized": "SimMonad()-\u003eIO Simulation",
        "package": "hasim",
        "partial": "Simulation",
        "signature": "SimMonad()-\u003eIO Simulation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#v:mkAnonProcess",
      "description": {
        "fct-descr": "\u003cp\u003eMake an anonymous process.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "SimMonad (Proc pkt ())",
        "fct-source": "src/Control-Hasim-Simulation.html#mkAnonProcess",
        "fct-type": "function",
        "title": "mkAnonProcess"
      },
      "index": {
        "description": "Make an anonymous process",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "mkAnonProcess",
        "normalized": "SimMonad(Proc a())",
        "package": "hasim",
        "partial": "Anon Process",
        "signature": "SimMonad(Proc pkt())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#v:mkProcess",
      "description": {
        "fct-descr": "\u003cp\u003eMake a process with a name. This name will be used\n in logging and error messages\n\u003c/p\u003e",
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "String-\u003e st-\u003e SimMonad (Proc pkt st)",
        "fct-type": "function",
        "title": "mkProcess"
      },
      "index": {
        "description": "Make process with name This name will be used in logging and error messages",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "mkProcess",
        "normalized": "String-\u003ea-\u003eSimMonad(Proc b a)",
        "package": "hasim",
        "partial": "Process",
        "signature": "String-\u003est-\u003eSimMonad(Proc pkt st)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#v:runSimulation",
      "description": {
        "fct-descr": "\u003cp\u003eRun the simulation.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "Simulation -\u003e IO ()",
        "fct-source": "src/Control-Hasim-SimRun.html#runSimulation",
        "fct-type": "function",
        "title": "runSimulation"
      },
      "index": {
        "description": "Run the simulation",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "runSimulation",
        "normalized": "Simulation-\u003eIO()",
        "package": "hasim",
        "partial": "Simulation",
        "signature": "Simulation-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#v:setAction",
      "description": {
        "fct-descr": "\u003cp\u003eSet the action of the process.\n\u003c/p\u003e",
        "fct-module": "Control.Hasim",
        "fct-package": "hasim",
        "fct-signature": "Proc pkt st-\u003e Action pkt st ()-\u003e SimMonad ()",
        "fct-type": "function",
        "title": "setAction"
      },
      "index": {
        "description": "Set the action of the process",
        "hierarchy": "Control Hasim",
        "module": "Control.Hasim",
        "name": "setAction",
        "normalized": "Proc a b-\u003eAction a b()-\u003eSimMonad()",
        "package": "hasim",
        "partial": "Action",
        "signature": "Proc pkt st-\u003eAction pkt st()-\u003eSimMonad()"
      }
    }
  }
]