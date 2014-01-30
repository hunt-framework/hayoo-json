[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvents and Channels as in Concurrent ML (extended with communication guards)\n\u003c/p\u003e\u003cp\u003eSee \u003cem\u003eA Concurrent ML Library in Concurrent Haskell\u003c/em\u003e by Avik Chaudhuri\n (avik@cs.ucsc.edu). The original code as well as the papers can be\n found at \u003ca\u003ehttp://www.cs.umd.edu/~avik/projects/cmllch/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.CML",
        "fct-package": "cml",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-CML.html",
        "fct-type": "module",
        "title": "CML"
      },
      "index": {
        "description": "Events and Channels as in Concurrent ML extended with communication guards See Concurrent ML Library in Concurrent Haskell by Avik Chaudhuri avik@cs.ucsc.edu The original code as well as the papers can be found at http www.cs.umd.edu avik projects cmllch",
        "hierarchy": "Control Concurrent CML",
        "module": "Control.Concurrent.CML",
        "name": "CML",
        "normalized": "",
        "package": "cml",
        "partial": "CML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#t:Channel",
      "description": {
        "fct-descr": "\u003cp\u003eValues of type \u003ccode\u003ea\u003c/code\u003e can be transported over channels of type \u003ccode\u003eChannel a\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CML",
        "fct-package": "cml",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CML.html#Channel",
        "fct-type": "data",
        "title": "Channel"
      },
      "index": {
        "description": "Values of type can be transported over channels of type Channel",
        "hierarchy": "Control Concurrent CML",
        "module": "Control.Concurrent.CML",
        "name": "Channel",
        "normalized": "",
        "package": "cml",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003eEvents return a value on synchronization.\n\u003c/p\u003e\u003cp\u003eNote that by construction, an event can synchronize at exactly one\n \u003cem\u003ecommit point\u003c/em\u003e, where a message is either sent or accepted on a\n channel. This commit point may be selected among several other,\n potential commit points. Some code may be run before\n synchronization, as specified by \u003ccode\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/code\u003e functions throughout the\n event. Some more code may be run after synchronization, as specified\n by \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e functions that surround the commit point, and by \u003ccode\u003e\u003ca\u003ewrapabort\u003c/a\u003e\u003c/code\u003e\n functions that do not surround the commit point.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CML",
        "fct-package": "cml",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-CML.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "Events return value on synchronization Note that by construction an event can synchronize at exactly one commit point where message is either sent or accepted on channel This commit point may be selected among several other potential commit points Some code may be run before synchronization as specified by guard functions throughout the event Some more code may be run after synchronization as specified by wrap functions that surround the commit point and by wrapabort functions that do not surround the commit point",
        "hierarchy": "Control Concurrent CML",
        "module": "Control.Concurrent.CML",
        "name": "Event",
        "normalized": "",
        "package": "cml",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:channel",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new channel.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CML",
        "fct-package": "cml",
        "fct-signature": "IO (Channel a)",
        "fct-source": "src/Control-Concurrent-CML.html#channel",
        "fct-type": "function",
        "title": "channel"
      },
      "index": {
        "description": "Create new channel",
        "hierarchy": "Control Concurrent CML",
        "module": "Control.Concurrent.CML",
        "name": "channel",
        "normalized": "",
        "package": "cml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:choose",
      "description": {
        "fct-descr": "\u003cp\u003eNon-deterministically select an event from a list of events, so that\n the selected event can be synchronized. The other events in the list are\n \u003cem\u003eaborted\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CML",
        "fct-package": "cml",
        "fct-signature": "[Event a] -\u003e Event a",
        "fct-source": "src/Control-Concurrent-CML.html#choose",
        "fct-type": "function",
        "title": "choose"
      },
      "index": {
        "description": "Non-deterministically select an event from list of events so that the selected event can be synchronized The other events in the list are aborted",
        "hierarchy": "Control Concurrent CML",
        "module": "Control.Concurrent.CML",
        "name": "choose",
        "normalized": "[Event a]-\u003eEvent a",
        "package": "cml",
        "partial": "",
        "signature": "[Event a]-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:guard",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify a pre-synchronization action.\n\u003c/p\u003e\u003cp\u003eMore precisely, \u003ccode\u003eguard a\u003c/code\u003e returns an event that, on synchronization,\n synchronizes the event returned by the action \u003ccode\u003ea\u003c/code\u003e. Here, \u003ccode\u003ea\u003c/code\u003e is run\n every time a thread \u003cem\u003etries\u003c/em\u003e to synchronize \u003ccode\u003eguard a\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CML",
        "fct-package": "cml",
        "fct-signature": "IO (Event a) -\u003e Event a",
        "fct-source": "src/Control-Concurrent-CML.html#guard",
        "fct-type": "function",
        "title": "guard"
      },
      "index": {
        "description": "Specify pre-synchronization action More precisely guard returns an event that on synchronization synchronizes the event returned by the action Here is run every time thread tries to synchronize guard",
        "hierarchy": "Control Concurrent CML",
        "module": "Control.Concurrent.CML",
        "name": "guard",
        "normalized": "IO(Event a)-\u003eEvent a",
        "package": "cml",
        "partial": "",
        "signature": "IO(Event a)-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eReceive a message from a channel.\n\u003c/p\u003e\u003cp\u003eMore precisely, \u003ccode\u003ereceive c cond\u003c/code\u003e returns an event that, on synchronization,\n accepts a message \u003ccode\u003em\u003c/code\u003e on channel \u003ccode\u003ec\u003c/code\u003e and returns \u003ccode\u003em\u003c/code\u003e. The resulting\n event is eligible for synchronization with a \u003ccode\u003etransmit c m\u003c/code\u003e only if \u003ccode\u003econd m\u003c/code\u003e\n is true.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CML",
        "fct-package": "cml",
        "fct-signature": "Channel a -\u003e (a -\u003e Bool) -\u003e Event a",
        "fct-source": "src/Control-Concurrent-CML.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Receive message from channel More precisely receive cond returns an event that on synchronization accepts message on channel and returns The resulting event is eligible for synchronization with transmit only if cond is true",
        "hierarchy": "Control Concurrent CML",
        "module": "Control.Concurrent.CML",
        "name": "receive",
        "normalized": "Channel a-\u003e(a-\u003eBool)-\u003eEvent a",
        "package": "cml",
        "partial": "",
        "signature": "Channel a-\u003e(a-\u003eBool)-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:spawn",
      "description": {
        "fct-descr": "\u003cp\u003eA synonym for \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CML",
        "fct-package": "cml",
        "fct-signature": "IO () -\u003e IO ThreadId",
        "fct-source": "src/Control-Concurrent-CML.html#spawn",
        "fct-type": "function",
        "title": "spawn"
      },
      "index": {
        "description": "synonym for forkIO",
        "hierarchy": "Control Concurrent CML",
        "module": "Control.Concurrent.CML",
        "name": "spawn",
        "normalized": "IO()-\u003eIO ThreadId",
        "package": "cml",
        "partial": "",
        "signature": "IO()-\u003eIO ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:sync",
      "description": {
        "fct-descr": "\u003cp\u003eSynchronize an event.\n\u003c/p\u003e\u003cp\u003eThis blocks the calling thread until a matching event is available.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CML",
        "fct-package": "cml",
        "fct-signature": "Event a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-CML.html#sync",
        "fct-type": "function",
        "title": "sync"
      },
      "index": {
        "description": "Synchronize an event This blocks the calling thread until matching event is available",
        "hierarchy": "Control Concurrent CML",
        "module": "Control.Concurrent.CML",
        "name": "sync",
        "normalized": "Event a-\u003eIO a",
        "package": "cml",
        "partial": "",
        "signature": "Event a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:transmit",
      "description": {
        "fct-descr": "\u003cp\u003eTransmit a message over a channel.\n\u003c/p\u003e\u003cp\u003eMore precisely, \u003ccode\u003etransmit c m\u003c/code\u003e returns an event that, on synchronization,\n sends the message \u003ccode\u003em\u003c/code\u003e on channel \u003ccode\u003ec\u003c/code\u003e and returns \u003ccode\u003e()\u003c/code\u003e. Such an event must\n synchronize with \u003ccode\u003ereceive c\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CML",
        "fct-package": "cml",
        "fct-signature": "Channel a -\u003e a -\u003e Event ()",
        "fct-source": "src/Control-Concurrent-CML.html#transmit",
        "fct-type": "function",
        "title": "transmit"
      },
      "index": {
        "description": "Transmit message over channel More precisely transmit returns an event that on synchronization sends the message on channel and returns Such an event must synchronize with receive",
        "hierarchy": "Control Concurrent CML",
        "module": "Control.Concurrent.CML",
        "name": "transmit",
        "normalized": "Channel a-\u003ea-\u003eEvent()",
        "package": "cml",
        "partial": "",
        "signature": "Channel a-\u003ea-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:wrap",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify a post-synchronization action.\n\u003c/p\u003e\u003cp\u003eMore precisely, \u003ccode\u003ewrap v f\u003c/code\u003e returns an event that, on synchronization,\n synchronizes the event \u003ccode\u003ev\u003c/code\u003e and then runs the action returned by \u003ccode\u003ef\u003c/code\u003e\n applied to the result.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CML",
        "fct-package": "cml",
        "fct-signature": "Event a -\u003e (a -\u003e IO b) -\u003e Event b",
        "fct-source": "src/Control-Concurrent-CML.html#wrap",
        "fct-type": "function",
        "title": "wrap"
      },
      "index": {
        "description": "Specify post-synchronization action More precisely wrap returns an event that on synchronization synchronizes the event and then runs the action returned by applied to the result",
        "hierarchy": "Control Concurrent CML",
        "module": "Control.Concurrent.CML",
        "name": "wrap",
        "normalized": "Event a-\u003e(a-\u003eIO b)-\u003eEvent b",
        "package": "cml",
        "partial": "",
        "signature": "Event a-\u003e(a-\u003eIO b)-\u003eEvent b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:wrapabort",
      "description": {
        "fct-descr": "\u003cp\u003eSpecify a post-synchronization action that is spawned if an event is\n \u003cem\u003enot\u003c/em\u003e selected by a \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMore precisely, \u003ccode\u003ewrapabort a v\u003c/code\u003e returns an event that, on\n synchronization, synchronizes the event \u003ccode\u003ev\u003c/code\u003e, and on abortion, spawns a\n thread that runs the action \u003ccode\u003ea\u003c/code\u003e. Here, if \u003ccode\u003ev\u003c/code\u003e itself is of the form\n \u003ccode\u003echoose vs\u003c/code\u003e and one of the events in \u003ccode\u003evs\u003c/code\u003e is selected, then \u003ccode\u003ev\u003c/code\u003e is\n considered selected, so \u003ccode\u003ea\u003c/code\u003e is not spawned.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.CML",
        "fct-package": "cml",
        "fct-signature": "IO () -\u003e Event a -\u003e Event a",
        "fct-source": "src/Control-Concurrent-CML.html#wrapabort",
        "fct-type": "function",
        "title": "wrapabort"
      },
      "index": {
        "description": "Specify post-synchronization action that is spawned if an event is not selected by choose More precisely wrapabort returns an event that on synchronization synchronizes the event and on abortion spawns thread that runs the action Here if itself is of the form choose vs and one of the events in vs is selected then is considered selected so is not spawned",
        "hierarchy": "Control Concurrent CML",
        "module": "Control.Concurrent.CML",
        "name": "wrapabort",
        "normalized": "IO()-\u003eEvent a-\u003eEvent a",
        "package": "cml",
        "partial": "",
        "signature": "IO()-\u003eEvent a-\u003eEvent a"
      }
    }
  }
]