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
        "word": "sync"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library supports synchronous message-passing with choice in Haskell.\n It is similar to the CML package for Haskell\n (\u003ca\u003ehttp://hackage.haskell.org/package/cml\u003c/a\u003e), and shares a similar API.  It\n avoids some of the problems the CML package has with choose on GHC 6.12.1\n (\u003ca\u003ehttp://www.haskell.org/pipermail/haskell-cafe/2010-March/074134.html\u003c/a\u003e),\n and also deliberately leaves out some of the features in the CML package.\n\u003c/p\u003e\u003cp\u003eThe implementation is explained in this blog post:\n  \u003ca\u003ehttp://chplib.wordpress.com/2010/03/04/choice-over-events-using-stm/\u003c/a\u003e.\n  The algorithm uses STM rather than spawning threads to implement choice.\n\u003c/p\u003e\u003cp\u003eAt the moment the library is fairly unfeatured; if you want more features I\n would suggest using my more powerful CHP library\n (\u003ca\u003ehttp://hackage.haskell.org/package/chp\u003c/a\u003e) -- but then I am biased!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Sync",
          "name": "Sync",
          "package": "sync",
          "source": "src/Control-Concurrent-Sync.html",
          "type": "module"
        },
        "index": {
          "description": "This library supports synchronous message-passing with choice in Haskell It is similar to the CML package for Haskell http hackage.haskell.org package cml and shares similar API It avoids some of the problems the CML package has with choose on GHC http www.haskell.org pipermail haskell-cafe March html and also deliberately leaves out some of the features in the CML package The implementation is explained in this blog post http chplib.wordpress.com choice-over-events-using-stm The algorithm uses STM rather than spawning threads to implement choice At the moment the library is fairly unfeatured if you want more features would suggest using my more powerful CHP library http hackage.haskell.org package chp but then am biased",
          "hierarchy": "Control Concurrent Sync",
          "module": "Control.Concurrent.Sync",
          "name": "Sync",
          "package": "sync",
          "partial": "Sync",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sync/docs/Control-Concurrent-Sync.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synchronous communication channel (i.e. the writer must wait until the read\n is willing to read the value).  Should only ever be used by one writer and one\n reader -- the algorithm is not currently designed for anything else.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Sync",
          "name": "Channel",
          "package": "sync",
          "source": "src/Control-Concurrent-Sync.html#Channel",
          "type": "data"
        },
        "index": {
          "description": "synchronous communication channel i.e the writer must wait until the read is willing to read the value Should only ever be used by one writer and one reader the algorithm is not currently designed for anything else",
          "hierarchy": "Control Concurrent Sync",
          "module": "Control.Concurrent.Sync",
          "name": "Channel",
          "package": "sync",
          "partial": "Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sync/docs/Control-Concurrent-Sync.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synchronisation that is yet to be executed (and that returns a value).\n The functor instance allows you to modify the value after the\n synchronisation has occurred.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Sync",
          "name": "Event",
          "package": "sync",
          "source": "src/Control-Concurrent-Sync.html#Event",
          "type": "data"
        },
        "index": {
          "description": "synchronisation that is yet to be executed and that returns value The functor instance allows you to modify the value after the synchronisation has occurred",
          "hierarchy": "Control Concurrent Sync",
          "module": "Control.Concurrent.Sync",
          "name": "Event",
          "package": "sync",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sync/docs/Control-Concurrent-Sync.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an event that is the choice of the given list of events.\n\u003c/p\u003e\u003cp\u003eIf the list is a singleton this is equivalent to calling \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e.  If the\n list is empty, and you call \u003ccode\u003e\u003ca\u003esync\u003c/a\u003e\u003c/code\u003e on the resulting event, it will block\n forever (or GHC will throw you an exception because of it).\n\u003c/p\u003e\u003cp\u003eYou should not pass more than one event from each channel in the list (nor\n combine two events that are themselves choices, such that you end up\n combining more than one event from a channel) or undefined behaviour will result.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Sync",
          "name": "choose",
          "package": "sync",
          "signature": "[Event a] -\u003e Event a",
          "source": "src/Control-Concurrent-Sync.html#choose",
          "type": "function"
        },
        "index": {
          "description": "Creates an event that is the choice of the given list of events If the list is singleton this is equivalent to calling head If the list is empty and you call sync on the resulting event it will block forever or GHC will throw you an exception because of it You should not pass more than one event from each channel in the list nor combine two events that are themselves choices such that you end up combining more than one event from channel or undefined behaviour will result",
          "hierarchy": "Control Concurrent Sync",
          "module": "Control.Concurrent.Sync",
          "name": "choose",
          "normalized": "[Event a]-\u003eEvent a",
          "package": "sync",
          "signature": "[Event a]-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sync/docs/Control-Concurrent-Sync.html#v:choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new communication channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Sync",
          "name": "newChannel",
          "package": "sync",
          "signature": "IO (Channel a)",
          "source": "src/Control-Concurrent-Sync.html#newChannel",
          "type": "function"
        },
        "index": {
          "description": "Creates new communication channel",
          "hierarchy": "Control Concurrent Sync",
          "module": "Control.Concurrent.Sync",
          "name": "newChannel",
          "package": "sync",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sync/docs/Control-Concurrent-Sync.html#v:newChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an event that represents receiving a value from the given channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Sync",
          "name": "recv",
          "package": "sync",
          "signature": "Channel a -\u003e Event a",
          "source": "src/Control-Concurrent-Sync.html#recv",
          "type": "function"
        },
        "index": {
          "description": "Creates an event that represents receiving value from the given channel",
          "hierarchy": "Control Concurrent Sync",
          "module": "Control.Concurrent.Sync",
          "name": "recv",
          "normalized": "Channel a-\u003eEvent a",
          "package": "sync",
          "signature": "Channel a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sync/docs/Control-Concurrent-Sync.html#v:recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an event that represents sending the given value on the given channel.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Sync",
          "name": "send",
          "package": "sync",
          "signature": "Channel a -\u003e a -\u003e Event ()",
          "source": "src/Control-Concurrent-Sync.html#send",
          "type": "function"
        },
        "index": {
          "description": "Creates an event that represents sending the given value on the given channel",
          "hierarchy": "Control Concurrent Sync",
          "module": "Control.Concurrent.Sync",
          "name": "send",
          "normalized": "Channel a-\u003ea-\u003eEvent()",
          "package": "sync",
          "signature": "Channel a-\u003ea-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sync/docs/Control-Concurrent-Sync.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronises on an event.  This blocks the thread until the Event can occur.\n This may be a choice of several different events, via the \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Sync",
          "name": "sync",
          "package": "sync",
          "signature": "Event a -\u003e IO a",
          "source": "src/Control-Concurrent-Sync.html#sync",
          "type": "function"
        },
        "index": {
          "description": "Synchronises on an event This blocks the thread until the Event can occur This may be choice of several different events via the choose function",
          "hierarchy": "Control Concurrent Sync",
          "module": "Control.Concurrent.Sync",
          "name": "sync",
          "normalized": "Event a-\u003eIO a",
          "package": "sync",
          "signature": "Event a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sync/docs/Control-Concurrent-Sync.html#v:sync"
      }
    }
  ]
]