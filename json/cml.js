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
        "word": "cml"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvents and Channels as in Concurrent ML (extended with communication guards)\n\u003c/p\u003e\u003cp\u003eSee \u003cem\u003eA Concurrent ML Library in Concurrent Haskell\u003c/em\u003e by Avik Chaudhuri\n (avik@cs.ucsc.edu). The original code as well as the papers can be\n found at \u003ca\u003ehttp://www.cs.umd.edu/~avik/projects/cmllch/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.CML",
          "name": "CML",
          "package": "cml",
          "source": "src/Control-Concurrent-CML.html",
          "type": "module"
        },
        "index": {
          "description": "Events and Channels as in Concurrent ML extended with communication guards See Concurrent ML Library in Concurrent Haskell by Avik Chaudhuri avik@cs.ucsc.edu The original code as well as the papers can be found at http www.cs.umd.edu avik projects cmllch",
          "hierarchy": "Control Concurrent CML",
          "module": "Control.Concurrent.CML",
          "name": "CML",
          "package": "cml",
          "partial": "CML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues of type \u003ccode\u003ea\u003c/code\u003e can be transported over channels of type \u003ccode\u003eChannel a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CML",
          "name": "Channel",
          "package": "cml",
          "source": "src/Control-Concurrent-CML.html#Channel",
          "type": "data"
        },
        "index": {
          "description": "Values of type can be transported over channels of type Channel",
          "hierarchy": "Control Concurrent CML",
          "module": "Control.Concurrent.CML",
          "name": "Channel",
          "package": "cml",
          "partial": "Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvents return a value on synchronization.\n\u003c/p\u003e\u003cp\u003eNote that by construction, an event can synchronize at exactly one\n \u003cem\u003ecommit point\u003c/em\u003e, where a message is either sent or accepted on a\n channel. This commit point may be selected among several other,\n potential commit points. Some code may be run before\n synchronization, as specified by \u003ccode\u003e\u003ca\u003eguard\u003c/a\u003e\u003c/code\u003e functions throughout the\n event. Some more code may be run after synchronization, as specified\n by \u003ccode\u003e\u003ca\u003ewrap\u003c/a\u003e\u003c/code\u003e functions that surround the commit point, and by \u003ccode\u003e\u003ca\u003ewrapabort\u003c/a\u003e\u003c/code\u003e\n functions that do not surround the commit point.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CML",
          "name": "Event",
          "package": "cml",
          "source": "src/Control-Concurrent-CML.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Events return value on synchronization Note that by construction an event can synchronize at exactly one commit point where message is either sent or accepted on channel This commit point may be selected among several other potential commit points Some code may be run before synchronization as specified by guard functions throughout the event Some more code may be run after synchronization as specified by wrap functions that surround the commit point and by wrapabort functions that do not surround the commit point",
          "hierarchy": "Control Concurrent CML",
          "module": "Control.Concurrent.CML",
          "name": "Event",
          "package": "cml",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CML",
          "name": "channel",
          "package": "cml",
          "signature": "IO (Channel a)",
          "source": "src/Control-Concurrent-CML.html#channel",
          "type": "function"
        },
        "index": {
          "description": "Create new channel",
          "hierarchy": "Control Concurrent CML",
          "module": "Control.Concurrent.CML",
          "name": "channel",
          "package": "cml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-deterministically select an event from a list of events, so that\n the selected event can be synchronized. The other events in the list are\n \u003cem\u003eaborted\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CML",
          "name": "choose",
          "package": "cml",
          "signature": "[Event a] -\u003e Event a",
          "source": "src/Control-Concurrent-CML.html#choose",
          "type": "function"
        },
        "index": {
          "description": "Non-deterministically select an event from list of events so that the selected event can be synchronized The other events in the list are aborted",
          "hierarchy": "Control Concurrent CML",
          "module": "Control.Concurrent.CML",
          "name": "choose",
          "normalized": "[Event a]-\u003eEvent a",
          "package": "cml",
          "signature": "[Event a]-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify a pre-synchronization action.\n\u003c/p\u003e\u003cp\u003eMore precisely, \u003ccode\u003eguard a\u003c/code\u003e returns an event that, on synchronization,\n synchronizes the event returned by the action \u003ccode\u003ea\u003c/code\u003e. Here, \u003ccode\u003ea\u003c/code\u003e is run\n every time a thread \u003cem\u003etries\u003c/em\u003e to synchronize \u003ccode\u003eguard a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CML",
          "name": "guard",
          "package": "cml",
          "signature": "IO (Event a) -\u003e Event a",
          "source": "src/Control-Concurrent-CML.html#guard",
          "type": "function"
        },
        "index": {
          "description": "Specify pre-synchronization action More precisely guard returns an event that on synchronization synchronizes the event returned by the action Here is run every time thread tries to synchronize guard",
          "hierarchy": "Control Concurrent CML",
          "module": "Control.Concurrent.CML",
          "name": "guard",
          "normalized": "IO(Event a)-\u003eEvent a",
          "package": "cml",
          "signature": "IO(Event a)-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive a message from a channel.\n\u003c/p\u003e\u003cp\u003eMore precisely, \u003ccode\u003ereceive c cond\u003c/code\u003e returns an event that, on synchronization,\n accepts a message \u003ccode\u003em\u003c/code\u003e on channel \u003ccode\u003ec\u003c/code\u003e and returns \u003ccode\u003em\u003c/code\u003e. The resulting\n event is eligible for synchronization with a \u003ccode\u003etransmit c m\u003c/code\u003e only if \u003ccode\u003econd m\u003c/code\u003e\n is true.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CML",
          "name": "receive",
          "package": "cml",
          "signature": "Channel a -\u003e (a -\u003e Bool) -\u003e Event a",
          "source": "src/Control-Concurrent-CML.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Receive message from channel More precisely receive cond returns an event that on synchronization accepts message on channel and returns The resulting event is eligible for synchronization with transmit only if cond is true",
          "hierarchy": "Control Concurrent CML",
          "module": "Control.Concurrent.CML",
          "name": "receive",
          "normalized": "Channel a-\u003e(a-\u003eBool)-\u003eEvent a",
          "package": "cml",
          "signature": "Channel a-\u003e(a-\u003eBool)-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CML",
          "name": "spawn",
          "package": "cml",
          "signature": "IO () -\u003e IO ThreadId",
          "source": "src/Control-Concurrent-CML.html#spawn",
          "type": "function"
        },
        "index": {
          "description": "synonym for forkIO",
          "hierarchy": "Control Concurrent CML",
          "module": "Control.Concurrent.CML",
          "name": "spawn",
          "normalized": "IO()-\u003eIO ThreadId",
          "package": "cml",
          "signature": "IO()-\u003eIO ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronize an event.\n\u003c/p\u003e\u003cp\u003eThis blocks the calling thread until a matching event is available.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CML",
          "name": "sync",
          "package": "cml",
          "signature": "Event a -\u003e IO a",
          "source": "src/Control-Concurrent-CML.html#sync",
          "type": "function"
        },
        "index": {
          "description": "Synchronize an event This blocks the calling thread until matching event is available",
          "hierarchy": "Control Concurrent CML",
          "module": "Control.Concurrent.CML",
          "name": "sync",
          "normalized": "Event a-\u003eIO a",
          "package": "cml",
          "signature": "Event a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:sync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransmit a message over a channel.\n\u003c/p\u003e\u003cp\u003eMore precisely, \u003ccode\u003etransmit c m\u003c/code\u003e returns an event that, on synchronization,\n sends the message \u003ccode\u003em\u003c/code\u003e on channel \u003ccode\u003ec\u003c/code\u003e and returns \u003ccode\u003e()\u003c/code\u003e. Such an event must\n synchronize with \u003ccode\u003ereceive c\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CML",
          "name": "transmit",
          "package": "cml",
          "signature": "Channel a -\u003e a -\u003e Event ()",
          "source": "src/Control-Concurrent-CML.html#transmit",
          "type": "function"
        },
        "index": {
          "description": "Transmit message over channel More precisely transmit returns an event that on synchronization sends the message on channel and returns Such an event must synchronize with receive",
          "hierarchy": "Control Concurrent CML",
          "module": "Control.Concurrent.CML",
          "name": "transmit",
          "normalized": "Channel a-\u003ea-\u003eEvent()",
          "package": "cml",
          "signature": "Channel a-\u003ea-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:transmit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify a post-synchronization action.\n\u003c/p\u003e\u003cp\u003eMore precisely, \u003ccode\u003ewrap v f\u003c/code\u003e returns an event that, on synchronization,\n synchronizes the event \u003ccode\u003ev\u003c/code\u003e and then runs the action returned by \u003ccode\u003ef\u003c/code\u003e\n applied to the result.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CML",
          "name": "wrap",
          "package": "cml",
          "signature": "Event a -\u003e (a -\u003e IO b) -\u003e Event b",
          "source": "src/Control-Concurrent-CML.html#wrap",
          "type": "function"
        },
        "index": {
          "description": "Specify post-synchronization action More precisely wrap returns an event that on synchronization synchronizes the event and then runs the action returned by applied to the result",
          "hierarchy": "Control Concurrent CML",
          "module": "Control.Concurrent.CML",
          "name": "wrap",
          "normalized": "Event a-\u003e(a-\u003eIO b)-\u003eEvent b",
          "package": "cml",
          "signature": "Event a-\u003e(a-\u003eIO b)-\u003eEvent b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify a post-synchronization action that is spawned if an event is\n \u003cem\u003enot\u003c/em\u003e selected by a \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMore precisely, \u003ccode\u003ewrapabort a v\u003c/code\u003e returns an event that, on\n synchronization, synchronizes the event \u003ccode\u003ev\u003c/code\u003e, and on abortion, spawns a\n thread that runs the action \u003ccode\u003ea\u003c/code\u003e. Here, if \u003ccode\u003ev\u003c/code\u003e itself is of the form\n \u003ccode\u003echoose vs\u003c/code\u003e and one of the events in \u003ccode\u003evs\u003c/code\u003e is selected, then \u003ccode\u003ev\u003c/code\u003e is\n considered selected, so \u003ccode\u003ea\u003c/code\u003e is not spawned.\n\u003c/p\u003e",
          "module": "Control.Concurrent.CML",
          "name": "wrapabort",
          "package": "cml",
          "signature": "IO () -\u003e Event a -\u003e Event a",
          "source": "src/Control-Concurrent-CML.html#wrapabort",
          "type": "function"
        },
        "index": {
          "description": "Specify post-synchronization action that is spawned if an event is not selected by choose More precisely wrapabort returns an event that on synchronization synchronizes the event and on abortion spawns thread that runs the action Here if itself is of the form choose vs and one of the events in vs is selected then is considered selected so is not spawned",
          "hierarchy": "Control Concurrent CML",
          "module": "Control.Concurrent.CML",
          "name": "wrapabort",
          "normalized": "IO()-\u003eEvent a-\u003eEvent a",
          "package": "cml",
          "signature": "IO()-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cml/docs/Control-Concurrent-CML.html#v:wrapabort"
      }
    }
  ]
]