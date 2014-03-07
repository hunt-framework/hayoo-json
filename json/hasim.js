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
        "word": "hasim"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience functions and shadowing of API internals.\n Likely to be a more stable interface then \u003ccode\u003eControl.Hasim.Process\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Hasim.Action",
          "name": "Action",
          "package": "hasim",
          "source": "src/Control-Hasim-Action.html",
          "type": "module"
        },
        "index": {
          "description": "Convenience functions and shadowing of API internals Likely to be more stable interface then Control.Hasim.Process",
          "hierarchy": "Control Hasim Action",
          "module": "Control.Hasim.Action",
          "name": "Action",
          "package": "hasim",
          "partial": "Action",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current time. The result will be nonnegative.\n\u003c/p\u003e",
          "module": "Control.Hasim.Action",
          "name": "getTime",
          "package": "hasim",
          "signature": "Action pkt st Time",
          "source": "src/Control-Hasim-Action.html#getTime",
          "type": "function"
        },
        "index": {
          "description": "Get the current time The result will be nonnegative",
          "hierarchy": "Control Hasim Action",
          "module": "Control.Hasim.Action",
          "name": "getTime",
          "package": "hasim",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:getTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive a packet, non-blocking.\n\u003c/p\u003e",
          "module": "Control.Hasim.Action",
          "name": "poll",
          "package": "hasim",
          "signature": "Action pkt st (Maybe pkt)",
          "source": "src/Control-Hasim-Action.html#poll",
          "type": "function"
        },
        "index": {
          "description": "Receive packet non-blocking",
          "hierarchy": "Control Hasim Action",
          "module": "Control.Hasim.Action",
          "name": "poll",
          "package": "hasim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:poll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive a packet. Block until the first packet comes in.\n\u003c/p\u003e",
          "module": "Control.Hasim.Action",
          "name": "receive",
          "package": "hasim",
          "signature": "Action pkt st pkt",
          "source": "src/Control-Hasim-Action.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Receive packet Block until the first packet comes in",
          "hierarchy": "Control Hasim Action",
          "module": "Control.Hasim.Action",
          "name": "receive",
          "package": "hasim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a packet to a process, with a timeout\n time interval. Returns True iff the\n packet was accepted.\n\u003c/p\u003e",
          "module": "Control.Hasim.Action",
          "name": "send",
          "package": "hasim",
          "signature": "pkt-\u003e Proc pkt st-\u003e Time-\u003e Action pkt' st' Bool",
          "type": "function"
        },
        "index": {
          "description": "Send packet to process with timeout time interval Returns True iff the packet was accepted",
          "hierarchy": "Control Hasim Action",
          "module": "Control.Hasim.Action",
          "name": "send",
          "normalized": "a-\u003eProc a b-\u003eTime-\u003eAction c d Bool",
          "package": "hasim",
          "signature": "pkt-\u003eProc pkt st-\u003eTime-\u003eAction pkt' st' Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a packet. Wait as long as necessary to deliver the packet.\n\u003c/p\u003e",
          "module": "Control.Hasim.Action",
          "name": "sendBlock",
          "package": "hasim",
          "signature": "pkt-\u003e Proc pkt st-\u003e Action pkt' st' ()",
          "type": "function"
        },
        "index": {
          "description": "Send packet Wait as long as necessary to deliver the packet",
          "hierarchy": "Control Hasim Action",
          "module": "Control.Hasim.Action",
          "name": "sendBlock",
          "normalized": "a-\u003eProc a b-\u003eAction c d()",
          "package": "hasim",
          "partial": "Block",
          "signature": "pkt-\u003eProc pkt st-\u003eAction pkt' st'()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:sendBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a packet. Return True iff the packet was\n accepted immediately. Do not wait in case the\n packet was not accepted.\n\u003c/p\u003e",
          "module": "Control.Hasim.Action",
          "name": "trySend",
          "package": "hasim",
          "signature": "pkt-\u003e Proc pkt st-\u003e Action pkt' st' Bool",
          "type": "function"
        },
        "index": {
          "description": "Send packet Return True iff the packet was accepted immediately Do not wait in case the packet was not accepted",
          "hierarchy": "Control Hasim Action",
          "module": "Control.Hasim.Action",
          "name": "trySend",
          "normalized": "a-\u003eProc a b-\u003eAction c d Bool",
          "package": "hasim",
          "partial": "Send",
          "signature": "pkt-\u003eProc pkt st-\u003eAction pkt' st' Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:trySend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait for a nonnegative time period.\n\u003c/p\u003e",
          "module": "Control.Hasim.Action",
          "name": "wait",
          "package": "hasim",
          "signature": "Time-\u003e Action pkt st ()",
          "type": "function"
        },
        "index": {
          "description": "Wait for nonnegative time period",
          "hierarchy": "Control Hasim Action",
          "module": "Control.Hasim.Action",
          "name": "wait",
          "normalized": "Time-\u003eAction a b()",
          "package": "hasim",
          "signature": "Time-\u003eAction pkt st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:wait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWait forever. This can be useful in case you want to block,\n waiting for incoming packets.\n\u003c/p\u003e",
          "module": "Control.Hasim.Action",
          "name": "waitForever",
          "package": "hasim",
          "signature": "Action pkt st ()",
          "source": "src/Control-Hasim-Action.html#waitForever",
          "type": "function"
        },
        "index": {
          "description": "Wait forever This can be useful in case you want to block waiting for incoming packets",
          "hierarchy": "Control Hasim Action",
          "module": "Control.Hasim.Action",
          "name": "waitForever",
          "normalized": "Action a b()",
          "package": "hasim",
          "partial": "Forever",
          "signature": "Action pkt st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:waitForever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action with an \u003ccode\u003e\u003ca\u003eAcceptor\u003c/a\u003e\u003c/code\u003e function\n\u003c/p\u003e",
          "module": "Control.Hasim.Action",
          "name": "withAcceptor",
          "package": "hasim",
          "signature": "Acceptor pkt st-\u003e Action pkt st ()-\u003e Action pkt st ()",
          "type": "function"
        },
        "index": {
          "description": "Execute an action with an Acceptor function",
          "hierarchy": "Control Hasim Action",
          "module": "Control.Hasim.Action",
          "name": "withAcceptor",
          "normalized": "Acceptor a b-\u003eAction a b()-\u003eAction a b()",
          "package": "hasim",
          "partial": "Acceptor",
          "signature": "Acceptor pkt st-\u003eAction pkt st()-\u003eAction pkt st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:withAcceptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an action without interruptions from incoming packets.\n\u003c/p\u003e",
          "module": "Control.Hasim.Action",
          "name": "withoutInterruptions",
          "package": "hasim",
          "signature": "Action pkt st () -\u003e Action pkt st ()",
          "source": "src/Control-Hasim-Action.html#withoutInterruptions",
          "type": "function"
        },
        "index": {
          "description": "Execute an action without interruptions from incoming packets",
          "hierarchy": "Control Hasim Action",
          "module": "Control.Hasim.Action",
          "name": "withoutInterruptions",
          "normalized": "Action a b()-\u003eAction a b()",
          "package": "hasim",
          "partial": "Interruptions",
          "signature": "Action pkt st()-\u003eAction pkt st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Action.html#v:withoutInterruptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a \u003cem\u003eDES\u003c/em\u003e, which stands for \u003cem\u003eDiscrete Event Set\u003c/em\u003e.\n There are functions for creating and inserting events.\n\u003c/p\u003e\u003cp\u003eFor each process, an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e may be scheduled. This event consists of\n a \u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e. There can be at most one \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e scheduled\n for each \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Hasim.DES",
          "name": "DES",
          "package": "hasim",
          "source": "src/Control-Hasim-DES.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines DES which stands for Discrete Event Set There are functions for creating and inserting events For each process an Event may be scheduled This event consists of Time and Runnable There can be at most one Event scheduled for each Process",
          "hierarchy": "Control Hasim DES",
          "module": "Control.Hasim.DES",
          "name": "DES",
          "package": "hasim",
          "partial": "DES",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscrete Event Set. A discrete event set is a data structure\n that supports the operations \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eremoveNext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Hasim.DES",
          "name": "DES",
          "package": "hasim",
          "source": "src/Control-Hasim-DES.html#DES",
          "type": "data"
        },
        "index": {
          "description": "Discrete Event Set discrete event set is data structure that supports the operations update and removeNext",
          "hierarchy": "Control Hasim DES",
          "module": "Control.Hasim.DES",
          "name": "DES",
          "package": "hasim",
          "partial": "DES",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#t:DES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvent. An event consists of a \u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Hasim.DES",
          "name": "Event",
          "package": "hasim",
          "source": "src/Control-Hasim-DES.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Event An event consists of Time and Runnable",
          "hierarchy": "Control Hasim DES",
          "module": "Control.Hasim.DES",
          "name": "Event",
          "package": "hasim",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe process of an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Hasim.DES",
          "name": "eProcess",
          "package": "hasim",
          "signature": "Event -\u003e Process",
          "source": "src/Control-Hasim-DES.html#eProcess",
          "type": "function"
        },
        "index": {
          "description": "The process of an Event",
          "hierarchy": "Control Hasim DES",
          "module": "Control.Hasim.DES",
          "name": "eProcess",
          "normalized": "Event-\u003eProcess",
          "package": "hasim",
          "partial": "Process",
          "signature": "Event-\u003eProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#v:eProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e that should be run at this time\n\u003c/p\u003e",
          "module": "Control.Hasim.DES",
          "name": "eRunnable",
          "package": "hasim",
          "signature": "Event -\u003e Runnable",
          "source": "src/Control-Hasim-DES.html#eRunnable",
          "type": "function"
        },
        "index": {
          "description": "The Runnable that should be run at this time",
          "hierarchy": "Control Hasim DES",
          "module": "Control.Hasim.DES",
          "name": "eRunnable",
          "normalized": "Event-\u003eRunnable",
          "package": "hasim",
          "partial": "Runnable",
          "signature": "Event-\u003eRunnable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#v:eRunnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003e at which the event takes place.\n\u003c/p\u003e",
          "module": "Control.Hasim.DES",
          "name": "eTime",
          "package": "hasim",
          "signature": "Event -\u003e Time",
          "source": "src/Control-Hasim-DES.html#eTime",
          "type": "function"
        },
        "index": {
          "description": "The Time at which the event takes place",
          "hierarchy": "Control Hasim DES",
          "module": "Control.Hasim.DES",
          "name": "eTime",
          "normalized": "Event-\u003eTime",
          "package": "hasim",
          "partial": "Time",
          "signature": "Event-\u003eTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#v:eTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty discrete event set.\n\u003c/p\u003e",
          "module": "Control.Hasim.DES",
          "name": "emptyDES",
          "package": "hasim",
          "signature": "DES",
          "source": "src/Control-Hasim-DES.html#emptyDES",
          "type": "function"
        },
        "index": {
          "description": "An empty discrete event set",
          "hierarchy": "Control Hasim DES",
          "module": "Control.Hasim.DES",
          "name": "emptyDES",
          "package": "hasim",
          "partial": "DES",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#v:emptyDES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eDES\u003c/a\u003e\u003c/code\u003e. For each \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e, an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e is scheduled\n at time 0 and with \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e the associated \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Hasim.DES",
          "name": "initDES",
          "package": "hasim",
          "signature": "[Process]-\u003e IO DES",
          "type": "function"
        },
        "index": {
          "description": "Create new DES For each Process an Event is scheduled at time and with Runnable the associated Runnable of the Process",
          "hierarchy": "Control Hasim DES",
          "module": "Control.Hasim.DES",
          "name": "initDES",
          "normalized": "[Process]-\u003eIO DES",
          "package": "hasim",
          "partial": "DES",
          "signature": "[Process]-\u003eIO DES",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#v:initDES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the Discrete Event Set empty?\n\u003c/p\u003e",
          "module": "Control.Hasim.DES",
          "name": "isEmpty",
          "package": "hasim",
          "signature": "DES -\u003e Bool",
          "source": "src/Control-Hasim-DES.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Is the Discrete Event Set empty",
          "hierarchy": "Control Hasim DES",
          "module": "Control.Hasim.DES",
          "name": "isEmpty",
          "normalized": "DES-\u003eBool",
          "package": "hasim",
          "partial": "Empty",
          "signature": "DES-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an event with lowest time that will take place next.\n Returns a tuple \u003ccode\u003e(evt, des)\u003c/code\u003e where \u003ccode\u003eevt\u003c/code\u003e is the next \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003edes\u003c/code\u003e is the new \u003ccode\u003e\u003ca\u003eDES\u003c/a\u003e\u003c/code\u003e where this event is removed.\n\u003c/p\u003e\u003cp\u003eCalls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eDES\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Control.Hasim.DES",
          "name": "removeNext",
          "package": "hasim",
          "signature": "DES -\u003e (Event, DES)",
          "source": "src/Control-Hasim-DES.html#removeNext",
          "type": "function"
        },
        "index": {
          "description": "Get an event with lowest time that will take place next Returns tuple evt des where evt is the next Event and des is the new DES where this event is removed Calls error if the DES is empty",
          "hierarchy": "Control Hasim DES",
          "module": "Control.Hasim.DES",
          "name": "removeNext",
          "normalized": "DES-\u003e(Event,DES)",
          "package": "hasim",
          "partial": "Next",
          "signature": "DES-\u003e(Event,DES)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#v:removeNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSchedule an event in a discrete event set. Note that an old\n event of the same process is removed from the discrete event set.\n\u003c/p\u003e",
          "module": "Control.Hasim.DES",
          "name": "update",
          "package": "hasim",
          "signature": "Time-\u003e Runnable-\u003e DES-\u003e DES",
          "type": "function"
        },
        "index": {
          "description": "Schedule an event in discrete event set Note that an old event of the same process is removed from the discrete event set",
          "hierarchy": "Control Hasim DES",
          "module": "Control.Hasim.DES",
          "name": "update",
          "normalized": "Time-\u003eRunnable-\u003eDES-\u003eDES",
          "package": "hasim",
          "signature": "Time-\u003eRunnable-\u003eDES-\u003eDES",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-DES.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module takes care of defining processes and their actions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Hasim.Process",
          "name": "Process",
          "package": "hasim",
          "source": "src/Control-Hasim-Process.html",
          "type": "module"
        },
        "index": {
          "description": "This module takes care of defining processes and their actions",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Process",
          "package": "hasim",
          "partial": "Process",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of result of the \u003ccode\u003e\u003ca\u003eAcceptor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Hasim.Process",
          "name": "AcceptResult",
          "package": "hasim",
          "source": "src/Control-Hasim-Process.html#AcceptResult",
          "type": "data"
        },
        "index": {
          "description": "The type of result of the Acceptor",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "AcceptResult",
          "package": "hasim",
          "partial": "Accept Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#t:AcceptResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn acceptor of a \u003ccode\u003epkt\u003c/code\u003e is an \u003ccode\u003e\u003ca\u003eAcceptResult\u003c/a\u003e\u003c/code\u003e, which is either\n   * \u003ccode\u003eRefuse\u003c/code\u003e if the packet is to be delivered at a later time, or\n   never, of course\n   * \u003ccode\u003eParallel act\u003c/code\u003e if a current computation should not be suspended,\n   but the state should be changed.\n   * \u003ccode\u003eInterrupt act\u003c/code\u003e if the current computation should be suspended.\n\u003c/p\u003e",
          "module": "Control.Hasim.Process",
          "name": "Acceptor",
          "package": "hasim",
          "source": "src/Control-Hasim-Process.html#Acceptor",
          "type": "type"
        },
        "index": {
          "description": "An acceptor of pkt is an AcceptResult which is either Refuse if the packet is to be delivered at later time or never of course Parallel act if current computation should not be suspended but the state should be changed Interrupt act if the current computation should be suspended",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Acceptor",
          "package": "hasim",
          "partial": "Acceptor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#t:Acceptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eAction\u003c/code\u003e GADT. This is a GADT with three\n parameters; an \u003ccode\u003eAction pkt st a\u003c/code\u003e is a action where\n   * pkt denotes the packet type of incoming packets\n   * st denotes the state that can be modified\n     and inspected\n   * a denotes the result value of the \u003ccode\u003eAction\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Hasim.Process",
          "name": "Action",
          "package": "hasim",
          "source": "src/Control-Hasim-Process.html#Action",
          "type": "data"
        },
        "index": {
          "description": "The Action GADT This is GADT with three parameters an Action pkt st is action where pkt denotes the packet type of incoming packets st denotes the state that can be modified and inspected denotes the result value of the Action",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Action",
          "package": "hasim",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExistential type for the \u003ccode\u003e\u003ca\u003ePrimAction\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Control.Hasim.Process",
          "name": "Atom",
          "package": "hasim",
          "source": "src/Control-Hasim-Process.html#Atom",
          "type": "data"
        },
        "index": {
          "description": "Existential type for the PrimAction type",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Atom",
          "package": "hasim",
          "partial": "Atom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#t:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGADT for the primitive actions. These are the primitives\n Hasim supports. \n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003ePrimAction pkt st a\u003c/code\u003e is a primitive action where\n   * \u003ccode\u003epkt\u003c/code\u003e is the packet type the associated \u003ccode\u003e\u003ca\u003eProc\u003c/a\u003e\u003c/code\u003e supports.\n   * \u003ccode\u003est\u003c/code\u003e is the state of the associated \u003ccode\u003e\u003ca\u003eProc\u003c/a\u003e\u003c/code\u003e.\n   * \u003ccode\u003ea\u003c/code\u003e is the return type of the PrimAction.\n   (this is why we need a GADT; the return type\n   varies for each primitive action).\n\u003c/p\u003e\u003cp\u003e(Unfortunately, the documentation for each constructor is\n not available in the generated output due to a glitch in Haddock.\n You can use the source, which is documented.)\n\u003c/p\u003e",
          "module": "Control.Hasim.Process",
          "name": "PrimAction",
          "package": "hasim",
          "source": "src/Control-Hasim-Process.html#PrimAction",
          "type": "data"
        },
        "index": {
          "description": "GADT for the primitive actions These are the primitives Hasim supports PrimAction pkt st is primitive action where pkt is the packet type the associated Proc supports st is the state of the associated Proc is the return type of the PrimAction this is why we need GADT the return type varies for each primitive action Unfortunately the documentation for each constructor is not available in the generated output due to glitch in Haddock You can use the source which is documented",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "PrimAction",
          "package": "hasim",
          "partial": "Prim Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#t:PrimAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eProc st pkt\u003c/code\u003e is a process that potentially accepts packets of type \n \u003ccode\u003epkt\u003c/code\u003e while maintaining state \u003ccode\u003est\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Hasim.Process",
          "name": "Proc",
          "package": "hasim",
          "source": "src/Control-Hasim-Process.html#Proc",
          "type": "data"
        },
        "index": {
          "description": "Proc st pkt is process that potentially accepts packets of type pkt while maintaining state st",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Proc",
          "package": "hasim",
          "partial": "Proc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#t:Proc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExistential type for a \u003ccode\u003e\u003ca\u003eProc\u003c/a\u003e\u003c/code\u003e. A \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003eProc pkt\u003c/code\u003e\n for some \u003ccode\u003epkt\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Hasim.Process",
          "name": "Process",
          "package": "hasim",
          "source": "src/Control-Hasim-Process.html#Process",
          "type": "data"
        },
        "index": {
          "description": "Existential type for Proc Process is Proc pkt for some pkt",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Process",
          "package": "hasim",
          "partial": "Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#t:Process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e is an action that can be run. A \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e has\n three parameters:\n   * The first is the process to which this \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e belongs.\n   * The second is a primitive action to be run.\n   * The third is Maybe a continuation.\n\u003c/p\u003e",
          "module": "Control.Hasim.Process",
          "name": "Runnable",
          "package": "hasim",
          "source": "src/Control-Hasim-Process.html#Runnable",
          "type": "data"
        },
        "index": {
          "description": "Runnable is an action that can be run Runnable has three parameters The first is the process to which this Runnable belongs The second is primitive action to be run The third is Maybe continuation",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Runnable",
          "package": "hasim",
          "partial": "Runnable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#t:Runnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Process",
          "name": "Atom",
          "package": "hasim",
          "signature": "forall a st pkt . Atom (PrimAction pkt st a)",
          "source": "src/Control-Hasim-Process.html#Atom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Atom",
          "package": "hasim",
          "partial": "Atom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Process",
          "name": "GetState",
          "package": "hasim",
          "signature": "PrimAction pkt st st",
          "source": "src/Control-Hasim-Process.html#PrimAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "GetState",
          "package": "hasim",
          "partial": "Get State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:GetState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Hasim.Process\",\"Control.Hasim\"]",
          "name": "Interrupt",
          "package": "hasim",
          "signature": "Interrupt (Action pkt st ())",
          "source": "src/Control-Hasim-Process.html#AcceptResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Interrupt\",\"http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#v:Interrupt\"]"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Interrupt",
          "normalized": "Interrupt(Action a b())",
          "package": "hasim",
          "partial": "Interrupt",
          "signature": "Interrupt(Action pkt st())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Interrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Process",
          "name": "ObserveTime",
          "package": "hasim",
          "signature": "PrimAction pkt st Time",
          "source": "src/Control-Hasim-Process.html#PrimAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "ObserveTime",
          "package": "hasim",
          "partial": "Observe Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:ObserveTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Hasim.Process\",\"Control.Hasim\"]",
          "name": "Parallel",
          "package": "hasim",
          "signature": "Parallel (st -\u003e st)",
          "source": "src/Control-Hasim-Process.html#AcceptResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Parallel\",\"http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#v:Parallel\"]"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Parallel",
          "normalized": "Parallel(a-\u003ea)",
          "package": "hasim",
          "partial": "Parallel",
          "signature": "Parallel(st-\u003est)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Parallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Process",
          "name": "PerformIO",
          "package": "hasim",
          "signature": "IO a -\u003e PrimAction pkt st a",
          "source": "src/Control-Hasim-Process.html#PrimAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "PerformIO",
          "normalized": "IO a-\u003ePrimAction b c a",
          "package": "hasim",
          "partial": "Perform IO",
          "signature": "IO a-\u003ePrimAction pkt st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:PerformIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Process",
          "name": "PopAcceptor",
          "package": "hasim",
          "signature": "PrimAction pkt st ()",
          "source": "src/Control-Hasim-Process.html#PrimAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "PopAcceptor",
          "normalized": "PrimAction a b()",
          "package": "hasim",
          "partial": "Pop Acceptor",
          "signature": "PrimAction pkt st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:PopAcceptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Process",
          "name": "Prim",
          "package": "hasim",
          "signature": "PrimAction pkt st a -\u003e Action pkt st a",
          "source": "src/Control-Hasim-Process.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Prim",
          "normalized": "PrimAction a b c-\u003eAction a b c",
          "package": "hasim",
          "partial": "Prim",
          "signature": "PrimAction pkt st a-\u003eAction pkt st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Prim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Process",
          "name": "Proc",
          "package": "hasim",
          "signature": "Proc",
          "source": "src/Control-Hasim-Process.html#Proc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Proc",
          "package": "hasim",
          "partial": "Proc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Proc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Process",
          "name": "Process",
          "package": "hasim",
          "signature": "forall pkt st . Process (Proc pkt st)",
          "source": "src/Control-Hasim-Process.html#Process",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Process",
          "package": "hasim",
          "partial": "Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Process",
          "name": "PutState",
          "package": "hasim",
          "signature": "st -\u003e PrimAction pkt st ()",
          "source": "src/Control-Hasim-Process.html#PrimAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "PutState",
          "normalized": "a-\u003ePrimAction b a()",
          "package": "hasim",
          "partial": "Put State",
          "signature": "st-\u003ePrimAction pkt st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:PutState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Hasim.Process\",\"Control.Hasim\"]",
          "name": "Refuse",
          "package": "hasim",
          "signature": "Refuse",
          "source": "src/Control-Hasim-Process.html#AcceptResult",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Refuse\",\"http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#v:Refuse\"]"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Refuse",
          "package": "hasim",
          "partial": "Refuse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Refuse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Process",
          "name": "Ret",
          "package": "hasim",
          "signature": "a -\u003e PrimAction pkt st a",
          "source": "src/Control-Hasim-Process.html#PrimAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Ret",
          "normalized": "a-\u003ePrimAction b c a",
          "package": "hasim",
          "partial": "Ret",
          "signature": "a-\u003ePrimAction pkt st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Ret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Process",
          "name": "Run",
          "package": "hasim",
          "signature": "forall a pkt st . Run (Proc pkt st) (PrimAction pkt st a) (Maybe (a -\u003e Runnable))",
          "source": "src/Control-Hasim-Process.html#Runnable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Run",
          "normalized": "a b c d Run(Proc c d)(PrimAction c d b)(Maybe(b-\u003eRunnable))",
          "package": "hasim",
          "partial": "Run",
          "signature": "forall a pkt st Run(Proc pkt st)(PrimAction pkt st a)(Maybe(a-\u003eRunnable))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Process",
          "name": "Send",
          "package": "hasim",
          "signature": "snd -\u003e Proc snd st2 -\u003e Time -\u003e PrimAction pkt st Bool",
          "source": "src/Control-Hasim-Process.html#PrimAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Send",
          "normalized": "a-\u003eProc a b-\u003eTime-\u003ePrimAction c b Bool",
          "package": "hasim",
          "partial": "Send",
          "signature": "snd-\u003eProc snd st-\u003eTime-\u003ePrimAction pkt st Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Process",
          "name": "Unwatch",
          "package": "hasim",
          "signature": "Proc rcv st2 -\u003e PrimAction pkt st ()",
          "source": "src/Control-Hasim-Process.html#PrimAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Unwatch",
          "normalized": "Proc a b-\u003ePrimAction c b()",
          "package": "hasim",
          "partial": "Unwatch",
          "signature": "Proc rcv st-\u003ePrimAction pkt st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Unwatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Process",
          "name": "Wait",
          "package": "hasim",
          "signature": "Time -\u003e PrimAction pkt st ()",
          "source": "src/Control-Hasim-Process.html#PrimAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "Wait",
          "normalized": "Time-\u003ePrimAction a b()",
          "package": "hasim",
          "partial": "Wait",
          "signature": "Time-\u003ePrimAction pkt st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:Wait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Process",
          "name": "WaitForever",
          "package": "hasim",
          "signature": "PrimAction pkt st ()",
          "source": "src/Control-Hasim-Process.html#PrimAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "WaitForever",
          "normalized": "PrimAction a b()",
          "package": "hasim",
          "partial": "Wait Forever",
          "signature": "PrimAction pkt st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:WaitForever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Process",
          "name": "WithAcceptor",
          "package": "hasim",
          "signature": "Acceptor pkt st -\u003e Action pkt st () -\u003e PrimAction pkt st ()",
          "source": "src/Control-Hasim-Process.html#PrimAction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "WithAcceptor",
          "normalized": "Acceptor a b-\u003eAction a b()-\u003ePrimAction a b()",
          "package": "hasim",
          "partial": "With Acceptor",
          "signature": "Acceptor pkt st-\u003eAction pkt st()-\u003ePrimAction pkt st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:WithAcceptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of acceptors with the continuations\n after the WithAcceptor.\n\u003c/p\u003e",
          "module": "Control.Hasim.Process",
          "name": "acceptor",
          "package": "hasim",
          "signature": "IORef [(Acceptor pkt st, Maybe Runnable)]",
          "source": "src/Control-Hasim-Process.html#Proc",
          "type": "function"
        },
        "index": {
          "description": "The list of acceptors with the continuations after the WithAcceptor",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "acceptor",
          "normalized": "IORef[(Acceptor a b,Maybe Runnable)]",
          "package": "hasim",
          "signature": "IORef[(Acceptor pkt st,Maybe Runnable)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:acceptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe starting action. Loses its relevance\n after startup of the simulation.\n\u003c/p\u003e",
          "module": "Control.Hasim.Process",
          "name": "action",
          "package": "hasim",
          "signature": "IORef (Maybe Runnable)",
          "source": "src/Control-Hasim-Process.html#Proc",
          "type": "function"
        },
        "index": {
          "description": "The starting action Loses its relevance after startup of the simulation",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "action",
          "package": "hasim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state of the process.\n\u003c/p\u003e",
          "module": "Control.Hasim.Process",
          "name": "currentState",
          "package": "hasim",
          "signature": "IORef st",
          "source": "src/Control-Hasim-Process.html#Proc",
          "type": "function"
        },
        "index": {
          "description": "The state of the process",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "currentState",
          "package": "hasim",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:currentState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identifier of this process. Must be unique\n or hell will ensue. Guaranteed to be unique by\n the creator of the process.\n\u003c/p\u003e",
          "module": "Control.Hasim.Process",
          "name": "identifier",
          "package": "hasim",
          "signature": "Id",
          "source": "src/Control-Hasim-Process.html#Proc",
          "type": "function"
        },
        "index": {
          "description": "The identifier of this process Must be unique or hell will ensue Guaranteed to be unique by the creator of the process",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "identifier",
          "package": "hasim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the process. Determined by the user,\n may be any string. Used for displaying information\n to the user.\n\u003c/p\u003e",
          "module": "Control.Hasim.Process",
          "name": "name",
          "package": "hasim",
          "signature": "String",
          "source": "src/Control-Hasim-Process.html#Proc",
          "type": "function"
        },
        "index": {
          "description": "The name of the process Determined by the user may be any string Used for displaying information to the user",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "name",
          "package": "hasim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e (existential type) belonging to a \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Hasim.Process",
          "name": "runnable2process",
          "package": "hasim",
          "signature": "Runnable -\u003e Process",
          "source": "src/Control-Hasim-Process.html#runnable2process",
          "type": "function"
        },
        "index": {
          "description": "Finds the Process existential type belonging to Runnable",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "runnable2process",
          "normalized": "Runnable-\u003eProcess",
          "package": "hasim",
          "signature": "Runnable-\u003eProcess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:runnable2process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a process with an action to a \u003ccode\u003e\u003ca\u003eRunnable\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Control.Hasim.Process",
          "name": "toRunnable",
          "package": "hasim",
          "signature": "Proc pkt st -\u003e Action pkt st () -\u003e Runnable",
          "source": "src/Control-Hasim-Process.html#toRunnable",
          "type": "function"
        },
        "index": {
          "description": "Converts process with an action to Runnable",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "toRunnable",
          "normalized": "Proc a b-\u003eAction a b()-\u003eRunnable",
          "package": "hasim",
          "partial": "Runnable",
          "signature": "Proc pkt st-\u003eAction pkt st()-\u003eRunnable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:toRunnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current wakeup function, if any. \n\u003c/p\u003e",
          "module": "Control.Hasim.Process",
          "name": "wakeup",
          "package": "hasim",
          "signature": "IORef (Maybe Runnable)",
          "source": "src/Control-Hasim-Process.html#Proc",
          "type": "function"
        },
        "index": {
          "description": "The current wakeup function if any",
          "hierarchy": "Control Hasim Process",
          "module": "Control.Hasim.Process",
          "name": "wakeup",
          "package": "hasim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Process.html#v:wakeup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module takes care of actually running a simulation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Hasim.SimRun",
          "name": "SimRun",
          "package": "hasim",
          "source": "src/Control-Hasim-SimRun.html",
          "type": "module"
        },
        "index": {
          "description": "This module takes care of actually running simulation",
          "hierarchy": "Control Hasim SimRun",
          "module": "Control.Hasim.SimRun",
          "name": "SimRun",
          "package": "hasim",
          "partial": "Sim Run",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-SimRun.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the simulation.\n\u003c/p\u003e",
          "module": "[\"Control.Hasim.SimRun\",\"Control.Hasim\"]",
          "name": "runSimulation",
          "package": "hasim",
          "signature": "Simulation -\u003e IO ()",
          "source": "src/Control-Hasim-SimRun.html#runSimulation",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hasim/docs/Control-Hasim-SimRun.html#v:runSimulation\",\"http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#v:runSimulation\"]"
        },
        "index": {
          "description": "Run the simulation",
          "hierarchy": "Control Hasim SimRun",
          "module": "Control.Hasim.SimRun",
          "name": "runSimulation",
          "normalized": "Simulation-\u003eIO()",
          "package": "hasim",
          "partial": "Simulation",
          "signature": "Simulation-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-SimRun.html#v:runSimulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the Simulation monad, with\n functions to create processes and set actions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Hasim.Simulation",
          "name": "Simulation",
          "package": "hasim",
          "source": "src/Control-Hasim-Simulation.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the Simulation monad with functions to create processes and set actions",
          "hierarchy": "Control Hasim Simulation",
          "module": "Control.Hasim.Simulation",
          "name": "Simulation",
          "package": "hasim",
          "partial": "Simulation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe simulation monad called \u003ccode\u003e\u003ca\u003eSimMonad\u003c/a\u003e\u003c/code\u003e. In this\n monad you can define a simulation to be run.\n\u003c/p\u003e",
          "module": "Control.Hasim.Simulation",
          "name": "SimMonad",
          "package": "hasim",
          "source": "src/Control-Hasim-Simulation.html#SimMonad",
          "type": "type"
        },
        "index": {
          "description": "The simulation monad called SimMonad In this monad you can define simulation to be run",
          "hierarchy": "Control Hasim Simulation",
          "module": "Control.Hasim.Simulation",
          "name": "SimMonad",
          "package": "hasim",
          "partial": "Sim Monad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#t:SimMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a simulation.\n\u003c/p\u003e",
          "module": "Control.Hasim.Simulation",
          "name": "Simulation",
          "package": "hasim",
          "source": "src/Control-Hasim-Simulation.html#Simulation",
          "type": "data"
        },
        "index": {
          "description": "Data type representing simulation",
          "hierarchy": "Control Hasim Simulation",
          "module": "Control.Hasim.Simulation",
          "name": "Simulation",
          "package": "hasim",
          "partial": "Simulation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#t:Simulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a simulation from a SimMonad (a simulation definition).\n If the simulation is invalid, \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e will be called.\n\u003c/p\u003e",
          "module": "[\"Control.Hasim.Simulation\",\"Control.Hasim\"]",
          "name": "createSimulation",
          "package": "hasim",
          "signature": "SimMonad () -\u003e IO Simulation",
          "source": "src/Control-Hasim-Simulation.html#createSimulation",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#v:createSimulation\",\"http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#v:createSimulation\"]"
        },
        "index": {
          "description": "Create simulation from SimMonad simulation definition If the simulation is invalid error will be called",
          "hierarchy": "Control Hasim Simulation",
          "module": "Control.Hasim.Simulation",
          "name": "createSimulation",
          "normalized": "SimMonad()-\u003eIO Simulation",
          "package": "hasim",
          "partial": "Simulation",
          "signature": "SimMonad()-\u003eIO Simulation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#v:createSimulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an anonymous process.\n\u003c/p\u003e",
          "module": "[\"Control.Hasim.Simulation\",\"Control.Hasim\"]",
          "name": "mkAnonProcess",
          "package": "hasim",
          "signature": "SimMonad (Proc pkt ())",
          "source": "src/Control-Hasim-Simulation.html#mkAnonProcess",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#v:mkAnonProcess\",\"http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#v:mkAnonProcess\"]"
        },
        "index": {
          "description": "Make an anonymous process",
          "hierarchy": "Control Hasim Simulation",
          "module": "Control.Hasim.Simulation",
          "name": "mkAnonProcess",
          "normalized": "SimMonad(Proc a())",
          "package": "hasim",
          "partial": "Anon Process",
          "signature": "SimMonad(Proc pkt())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#v:mkAnonProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a process with a name. This name will be used\n in logging and error messages\n\u003c/p\u003e",
          "module": "[\"Control.Hasim.Simulation\",\"Control.Hasim\"]",
          "name": "mkProcess",
          "package": "hasim",
          "signature": "String-\u003e st-\u003e SimMonad (Proc pkt st)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#v:mkProcess\",\"http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#v:mkProcess\"]"
        },
        "index": {
          "description": "Make process with name This name will be used in logging and error messages",
          "hierarchy": "Control Hasim Simulation",
          "module": "Control.Hasim.Simulation",
          "name": "mkProcess",
          "normalized": "String-\u003ea-\u003eSimMonad(Proc b a)",
          "package": "hasim",
          "partial": "Process",
          "signature": "String-\u003est-\u003eSimMonad(Proc pkt st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#v:mkProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the action of the process.\n\u003c/p\u003e",
          "module": "[\"Control.Hasim.Simulation\",\"Control.Hasim\"]",
          "name": "setAction",
          "package": "hasim",
          "signature": "Proc pkt st-\u003e Action pkt st ()-\u003e SimMonad ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#v:setAction\",\"http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#v:setAction\"]"
        },
        "index": {
          "description": "Set the action of the process",
          "hierarchy": "Control Hasim Simulation",
          "module": "Control.Hasim.Simulation",
          "name": "setAction",
          "normalized": "Proc a b-\u003eAction a b()-\u003eSimMonad()",
          "package": "hasim",
          "partial": "Action",
          "signature": "Proc pkt st-\u003eAction pkt st()-\u003eSimMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#v:setAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Simulation",
          "name": "unSim",
          "package": "hasim",
          "signature": "Simulation -\u003e [Process]",
          "source": "src/Control-Hasim-Simulation.html#unSim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Hasim Simulation",
          "module": "Control.Hasim.Simulation",
          "name": "unSim",
          "normalized": "Simulation-\u003e[Process]",
          "package": "hasim",
          "partial": "Sim",
          "signature": "Simulation-\u003e[Process]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Simulation.html#v:unSim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines common types used everywhere in Hasim.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Hasim.Types",
          "name": "Types",
          "package": "hasim",
          "source": "src/Control-Hasim-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines common types used everywhere in Hasim",
          "hierarchy": "Control Hasim Types",
          "module": "Control.Hasim.Types",
          "name": "Types",
          "package": "hasim",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim.Types",
          "name": "Id",
          "package": "hasim",
          "source": "src/Control-Hasim-Types.html#Id",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Hasim Types",
          "module": "Control.Hasim.Types",
          "name": "Id",
          "package": "hasim",
          "partial": "Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Types.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type that represents a time.\n\u003c/p\u003e\u003cp\u003eThe type that represents a process identifier.\n\u003c/p\u003e",
          "module": "Control.Hasim.Types",
          "name": "Time",
          "package": "hasim",
          "source": "src/Control-Hasim-Types.html#Time",
          "type": "type"
        },
        "index": {
          "description": "The type that represents time The type that represents process identifier",
          "hierarchy": "Control Hasim Types",
          "module": "Control.Hasim.Types",
          "name": "Time",
          "package": "hasim",
          "partial": "Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-Types.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a \u003ccode\u003e\u003ca\u003eWatchMap\u003c/a\u003e\u003c/code\u003e, a data structure that keeps track\n of which processes watch which other processes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Hasim.WatchMap",
          "name": "WatchMap",
          "package": "hasim",
          "source": "src/Control-Hasim-WatchMap.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines WatchMap data structure that keeps track of which processes watch which other processes",
          "hierarchy": "Control Hasim WatchMap",
          "module": "Control.Hasim.WatchMap",
          "name": "WatchMap",
          "package": "hasim",
          "partial": "Watch Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-WatchMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA watch map. This data structure represents a relation on\n processes.\n\u003c/p\u003e",
          "module": "Control.Hasim.WatchMap",
          "name": "WatchMap",
          "package": "hasim",
          "source": "src/Control-Hasim-WatchMap.html#WatchMap",
          "type": "data"
        },
        "index": {
          "description": "watch map This data structure represents relation on processes",
          "hierarchy": "Control Hasim WatchMap",
          "module": "Control.Hasim.WatchMap",
          "name": "WatchMap",
          "package": "hasim",
          "partial": "Watch Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-WatchMap.html#t:WatchMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty \u003ccode\u003e\u003ca\u003eWatchMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Hasim.WatchMap",
          "name": "emptyWM",
          "package": "hasim",
          "signature": "WatchMap",
          "source": "src/Control-Hasim-WatchMap.html#emptyWM",
          "type": "function"
        },
        "index": {
          "description": "An empty WatchMap",
          "hierarchy": "Control Hasim WatchMap",
          "module": "Control.Hasim.WatchMap",
          "name": "emptyWM",
          "package": "hasim",
          "partial": "WM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-WatchMap.html#v:emptyWM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the tuple \u003ccode\u003e(p1, p2)\u003c/code\u003e to the relation.\n\u003c/p\u003e",
          "module": "Control.Hasim.WatchMap",
          "name": "register",
          "package": "hasim",
          "signature": "Process-\u003e Process-\u003e WatchMap-\u003e WatchMap",
          "type": "function"
        },
        "index": {
          "description": "Add the tuple p1 p2 to the relation",
          "hierarchy": "Control Hasim WatchMap",
          "module": "Control.Hasim.WatchMap",
          "name": "register",
          "normalized": "Process-\u003eProcess-\u003eWatchMap-\u003eWatchMap",
          "package": "hasim",
          "signature": "Process-\u003eProcess-\u003eWatchMap-\u003eWatchMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-WatchMap.html#v:register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the tuple \u003ccode\u003e(p1, p2)\u003c/code\u003e from the relation, if it existed.\n\u003c/p\u003e",
          "module": "Control.Hasim.WatchMap",
          "name": "unregister",
          "package": "hasim",
          "signature": "Process-\u003e Process-\u003e WatchMap-\u003e WatchMap",
          "type": "function"
        },
        "index": {
          "description": "Remove the tuple p1 p2 from the relation if it existed",
          "hierarchy": "Control Hasim WatchMap",
          "module": "Control.Hasim.WatchMap",
          "name": "unregister",
          "normalized": "Process-\u003eProcess-\u003eWatchMap-\u003eWatchMap",
          "package": "hasim",
          "signature": "Process-\u003eProcess-\u003eWatchMap-\u003eWatchMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-WatchMap.html#v:unregister"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all \u003ccode\u003ep1\u003c/code\u003e such that \u003ccode\u003e(p1, p2)\u003c/code\u003e is in the relation.\n\u003c/p\u003e",
          "module": "Control.Hasim.WatchMap",
          "name": "watchers",
          "package": "hasim",
          "signature": "WatchMap-\u003e Process-\u003e [Process]",
          "type": "function"
        },
        "index": {
          "description": "Find all p1 such that p1 p2 is in the relation",
          "hierarchy": "Control Hasim WatchMap",
          "module": "Control.Hasim.WatchMap",
          "name": "watchers",
          "normalized": "WatchMap-\u003eProcess-\u003e[Process]",
          "package": "hasim",
          "signature": "WatchMap-\u003eProcess-\u003e[Process]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim-WatchMap.html#v:watchers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module imports all relevant functions from Control.Hasim.*\n hiding implementation details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Hasim",
          "name": "Hasim",
          "package": "hasim",
          "source": "src/Control-Hasim.html",
          "type": "module"
        },
        "index": {
          "description": "This module imports all relevant functions from Control.Hasim hiding implementation details",
          "hierarchy": "Control Hasim",
          "module": "Control.Hasim",
          "name": "Hasim",
          "package": "hasim",
          "partial": "Hasim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of result of the \u003ccode\u003e\u003ca\u003eAcceptor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Hasim",
          "name": "AcceptResult",
          "package": "hasim",
          "source": "src/Control-Hasim-Process.html#AcceptResult",
          "type": "data"
        },
        "index": {
          "description": "The type of result of the Acceptor",
          "hierarchy": "Control Hasim",
          "module": "Control.Hasim",
          "name": "AcceptResult",
          "package": "hasim",
          "partial": "Accept Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:AcceptResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn acceptor of a \u003ccode\u003epkt\u003c/code\u003e is an \u003ccode\u003e\u003ca\u003eAcceptResult\u003c/a\u003e\u003c/code\u003e, which is either\n   * \u003ccode\u003eRefuse\u003c/code\u003e if the packet is to be delivered at a later time, or\n   never, of course\n   * \u003ccode\u003eParallel act\u003c/code\u003e if a current computation should not be suspended,\n   but the state should be changed.\n   * \u003ccode\u003eInterrupt act\u003c/code\u003e if the current computation should be suspended.\n\u003c/p\u003e",
          "module": "Control.Hasim",
          "name": "Acceptor",
          "package": "hasim",
          "source": "src/Control-Hasim-Process.html#Acceptor",
          "type": "type"
        },
        "index": {
          "description": "An acceptor of pkt is an AcceptResult which is either Refuse if the packet is to be delivered at later time or never of course Parallel act if current computation should not be suspended but the state should be changed Interrupt act if the current computation should be suspended",
          "hierarchy": "Control Hasim",
          "module": "Control.Hasim",
          "name": "Acceptor",
          "package": "hasim",
          "partial": "Acceptor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:Acceptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eAction\u003c/code\u003e GADT. This is a GADT with three\n parameters; an \u003ccode\u003eAction pkt st a\u003c/code\u003e is a action where\n   * pkt denotes the packet type of incoming packets\n   * st denotes the state that can be modified\n     and inspected\n   * a denotes the result value of the \u003ccode\u003eAction\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Hasim",
          "name": "Action",
          "package": "hasim",
          "source": "src/Control-Hasim-Process.html#Action",
          "type": "data"
        },
        "index": {
          "description": "The Action GADT This is GADT with three parameters an Action pkt st is action where pkt denotes the packet type of incoming packets st denotes the state that can be modified and inspected denotes the result value of the Action",
          "hierarchy": "Control Hasim",
          "module": "Control.Hasim",
          "name": "Action",
          "package": "hasim",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Hasim",
          "name": "Id",
          "package": "hasim",
          "source": "src/Control-Hasim-Types.html#Id",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Hasim",
          "module": "Control.Hasim",
          "name": "Id",
          "package": "hasim",
          "partial": "Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eProc st pkt\u003c/code\u003e is a process that potentially accepts packets of type \n \u003ccode\u003epkt\u003c/code\u003e while maintaining state \u003ccode\u003est\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Hasim",
          "name": "Proc",
          "package": "hasim",
          "source": "src/Control-Hasim-Process.html#Proc",
          "type": "data"
        },
        "index": {
          "description": "Proc st pkt is process that potentially accepts packets of type pkt while maintaining state st",
          "hierarchy": "Control Hasim",
          "module": "Control.Hasim",
          "name": "Proc",
          "package": "hasim",
          "partial": "Proc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:Proc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExistential type for a \u003ccode\u003e\u003ca\u003eProc\u003c/a\u003e\u003c/code\u003e. A \u003ccode\u003e\u003ca\u003eProcess\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003eProc pkt\u003c/code\u003e\n for some \u003ccode\u003epkt\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Hasim",
          "name": "Process",
          "package": "hasim",
          "source": "src/Control-Hasim-Process.html#Process",
          "type": "data"
        },
        "index": {
          "description": "Existential type for Proc Process is Proc pkt for some pkt",
          "hierarchy": "Control Hasim",
          "module": "Control.Hasim",
          "name": "Process",
          "package": "hasim",
          "partial": "Process",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:Process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe simulation monad called \u003ccode\u003e\u003ca\u003eSimMonad\u003c/a\u003e\u003c/code\u003e. In this\n monad you can define a simulation to be run.\n\u003c/p\u003e",
          "module": "Control.Hasim",
          "name": "SimMonad",
          "package": "hasim",
          "source": "src/Control-Hasim-Simulation.html#SimMonad",
          "type": "type"
        },
        "index": {
          "description": "The simulation monad called SimMonad In this monad you can define simulation to be run",
          "hierarchy": "Control Hasim",
          "module": "Control.Hasim",
          "name": "SimMonad",
          "package": "hasim",
          "partial": "Sim Monad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:SimMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a simulation.\n\u003c/p\u003e",
          "module": "Control.Hasim",
          "name": "Simulation",
          "package": "hasim",
          "source": "src/Control-Hasim-Simulation.html#Simulation",
          "type": "data"
        },
        "index": {
          "description": "Data type representing simulation",
          "hierarchy": "Control Hasim",
          "module": "Control.Hasim",
          "name": "Simulation",
          "package": "hasim",
          "partial": "Simulation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:Simulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type that represents a time.\n\u003c/p\u003e\u003cp\u003eThe type that represents a process identifier.\n\u003c/p\u003e",
          "module": "Control.Hasim",
          "name": "Time",
          "package": "hasim",
          "source": "src/Control-Hasim-Types.html#Time",
          "type": "type"
        },
        "index": {
          "description": "The type that represents time The type that represents process identifier",
          "hierarchy": "Control Hasim",
          "module": "Control.Hasim",
          "name": "Time",
          "package": "hasim",
          "partial": "Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hasim/docs/Control-Hasim.html#t:Time"
      }
    }
  ]
]