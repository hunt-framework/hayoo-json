[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Broadcast.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBroadcast\u003c/a\u003e\u003c/code\u003e is a mechanism for communication between threads. Multiple\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003eers\u003c/code\u003e wait until a broadcaster \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebroadcast\u003c/a\u003e\u003c/code\u003es\u003c/code\u003e a value. The listeners\n block until the value is received. When the broadcaster broadcasts a value\n all listeners are woken.\n\u003c/p\u003e\u003cp\u003eAll functions are \u003cem\u003eexception safe\u003c/em\u003e. Throwing asynchronous exceptions will not\n compromise the internal state of a broadcast.\n\u003c/p\u003e\u003cp\u003eThis module is designed to be imported qualified. We suggest importing it\n like:\n\u003c/p\u003e\u003cpre\u003e\n import           Control.Concurrent.Broadcast              ( Broadcast )\n import qualified Control.Concurrent.Broadcast as Broadcast ( ... )\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Broadcast",
        "fct-package": "concurrent-extra",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Broadcast.html",
        "fct-type": "module",
        "title": "Broadcast"
      },
      "index": {
        "description": "Broadcast is mechanism for communication between threads Multiple listen ers wait until broadcaster broadcast value The listeners block until the value is received When the broadcaster broadcasts value all listeners are woken All functions are exception safe Throwing asynchronous exceptions will not compromise the internal state of broadcast This module is designed to be imported qualified We suggest importing it like import Control.Concurrent.Broadcast Broadcast import qualified Control.Concurrent.Broadcast as Broadcast",
        "hierarchy": "Control Concurrent Broadcast",
        "module": "Control.Concurrent.Broadcast",
        "name": "Broadcast",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "Broadcast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Broadcast.html#t:Broadcast",
      "description": {
        "fct-descr": "\u003cp\u003eA broadcast is in one of two possible states:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \"Silent\": \u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003eing\u003c/code\u003e to the broadcast will block until a value is\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003ebroadcast\u003c/a\u003e\u003c/code\u003eed\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \"Broadcasting \u003ccode\u003ex\u003c/code\u003e\": \u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003eing\u003c/code\u003e to the broadcast will return the value \u003ccode\u003ex\u003c/code\u003e\nwithout blocking.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.Broadcast",
        "fct-package": "concurrent-extra",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Broadcast.html#Broadcast",
        "fct-type": "data",
        "title": "Broadcast"
      },
      "index": {
        "description": "broadcast is in one of two possible states Silent listen ing to the broadcast will block until value is broadcast ed Broadcasting listen ing to the broadcast will return the value without blocking",
        "hierarchy": "Control Concurrent Broadcast",
        "module": "Control.Concurrent.Broadcast",
        "name": "Broadcast",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "Broadcast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Broadcast.html#v:broadcast",
      "description": {
        "fct-descr": "\u003cp\u003eBroadcast a value.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ebroadcast b x\u003c/code\u003e changes the state of the broadcast \u003ccode\u003eb\u003c/code\u003e to \"broadcasting \u003ccode\u003ex\u003c/code\u003e\".\n\u003c/p\u003e\u003cp\u003eIf the broadcast was \"silent\" all threads that are \u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003eing\u003c/code\u003e to the\nbroadcast will be woken.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Broadcast",
        "fct-package": "concurrent-extra",
        "fct-signature": "Broadcast α -\u003e α -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Broadcast.html#broadcast",
        "fct-type": "function",
        "title": "broadcast"
      },
      "index": {
        "description": "Broadcast value broadcast changes the state of the broadcast to broadcasting If the broadcast was silent all threads that are listen ing to the broadcast will be woken",
        "hierarchy": "Control Concurrent Broadcast",
        "module": "Control.Concurrent.Broadcast",
        "name": "broadcast",
        "normalized": "Broadcast a-\u003ea-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Broadcast α-\u003eα-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Broadcast.html#v:listen",
      "description": {
        "fct-descr": "\u003cp\u003eListen to a broadcast.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the broadcast is \"broadcasting \u003ccode\u003ex\u003c/code\u003e\", \u003ccode\u003elisten\u003c/code\u003e will return \u003ccode\u003ex\u003c/code\u003e\nimmediately.\n\u003c/li\u003e\u003cli\u003e If the broadcast is \"silent\", \u003ccode\u003elisten\u003c/code\u003e will block until another thread\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003ebroadcast\u003c/a\u003e\u003c/code\u003es\u003c/code\u003e a value to the broadcast.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.Broadcast",
        "fct-package": "concurrent-extra",
        "fct-signature": "Broadcast α -\u003e IO α",
        "fct-source": "src/Control-Concurrent-Broadcast.html#listen",
        "fct-type": "function",
        "title": "listen"
      },
      "index": {
        "description": "Listen to broadcast If the broadcast is broadcasting listen will return immediately If the broadcast is silent listen will block until another thread broadcast value to the broadcast",
        "hierarchy": "Control Concurrent Broadcast",
        "module": "Control.Concurrent.Broadcast",
        "name": "listen",
        "normalized": "Broadcast a-\u003eIO a",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Broadcast α-\u003eIO α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Broadcast.html#v:listenTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eListen to a broadcast if it is available within a given amount of time.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e, but with a timeout. A return value of \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e indicates a\ntimeout occurred.\n\u003c/p\u003e\u003cp\u003eThe timeout is specified in microseconds.\n\u003c/p\u003e\u003cp\u003eIf the broadcast is \"silent\" and a timeout of 0 &#956;s is specified the\nfunction returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e without blocking.\n\u003c/p\u003e\u003cp\u003eNegative timeouts are treated the same as a timeout of 0 &#956;s.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Broadcast",
        "fct-package": "concurrent-extra",
        "fct-signature": "Broadcast α -\u003e Integer -\u003e IO (Maybe α)",
        "fct-source": "src/Control-Concurrent-Broadcast.html#listenTimeout",
        "fct-type": "function",
        "title": "listenTimeout"
      },
      "index": {
        "description": "Listen to broadcast if it is available within given amount of time Like listen but with timeout return value of Nothing indicates timeout occurred The timeout is specified in microseconds If the broadcast is silent and timeout of is specified the function returns Nothing without blocking Negative timeouts are treated the same as timeout of",
        "hierarchy": "Control Concurrent Broadcast",
        "module": "Control.Concurrent.Broadcast",
        "name": "listenTimeout",
        "normalized": "Broadcast a-\u003eInteger-\u003eIO(Maybe a)",
        "package": "concurrent-extra",
        "partial": "Timeout",
        "signature": "Broadcast α-\u003eInteger-\u003eIO(Maybe α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Broadcast.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enew\u003c/code\u003e creates a broadcast in the \"silent\" state.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Broadcast",
        "fct-package": "concurrent-extra",
        "fct-signature": "IO (Broadcast α)",
        "fct-source": "src/Control-Concurrent-Broadcast.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "new creates broadcast in the silent state",
        "hierarchy": "Control Concurrent Broadcast",
        "module": "Control.Concurrent.Broadcast",
        "name": "new",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Broadcast.html#v:newBroadcasting",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enewBroadcasting x\u003c/code\u003e creates a broadcast in the \"broadcasting \u003ccode\u003ex\u003c/code\u003e\" state.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Broadcast",
        "fct-package": "concurrent-extra",
        "fct-signature": "α -\u003e IO (Broadcast α)",
        "fct-source": "src/Control-Concurrent-Broadcast.html#newBroadcasting",
        "fct-type": "function",
        "title": "newBroadcasting"
      },
      "index": {
        "description": "newBroadcasting creates broadcast in the broadcasting state",
        "hierarchy": "Control Concurrent Broadcast",
        "module": "Control.Concurrent.Broadcast",
        "name": "newBroadcasting",
        "normalized": "a-\u003eIO(Broadcast a)",
        "package": "concurrent-extra",
        "partial": "Broadcasting",
        "signature": "α-\u003eIO(Broadcast α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Broadcast.html#v:signal",
      "description": {
        "fct-descr": "\u003cp\u003eBroadcast a value before becoming \"silent\".\n\u003c/p\u003e\u003cp\u003eThe state of the broadcast is changed to \"silent\" after all threads that are\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003eing\u003c/code\u003e to the broadcast are woken and resume with the signalled value.\n\u003c/p\u003e\u003cp\u003eThe semantics of signal are equivalent to the following definition:\n\u003c/p\u003e\u003cpre\u003e\n  signal b x = \u003ccode\u003eblock\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003ebroadcast\u003c/a\u003e\u003c/code\u003e b x \u003e\u003e \u003ccode\u003e\u003ca\u003esilence\u003c/a\u003e\u003c/code\u003e b\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Broadcast",
        "fct-package": "concurrent-extra",
        "fct-signature": "Broadcast α -\u003e α -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Broadcast.html#signal",
        "fct-type": "function",
        "title": "signal"
      },
      "index": {
        "description": "Broadcast value before becoming silent The state of the broadcast is changed to silent after all threads that are listen ing to the broadcast are woken and resume with the signalled value The semantics of signal are equivalent to the following definition signal block broadcast silence",
        "hierarchy": "Control Concurrent Broadcast",
        "module": "Control.Concurrent.Broadcast",
        "name": "signal",
        "normalized": "Broadcast a-\u003ea-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Broadcast α-\u003eα-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Broadcast.html#v:silence",
      "description": {
        "fct-descr": "\u003cp\u003eSet a broadcast to the \"silent\" state.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Broadcast",
        "fct-package": "concurrent-extra",
        "fct-signature": "Broadcast α -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Broadcast.html#silence",
        "fct-type": "function",
        "title": "silence"
      },
      "index": {
        "description": "Set broadcast to the silent state",
        "hierarchy": "Control Concurrent Broadcast",
        "module": "Control.Concurrent.Broadcast",
        "name": "silence",
        "normalized": "Broadcast a-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Broadcast α-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Broadcast.html#v:tryListen",
      "description": {
        "fct-descr": "\u003cp\u003eTry to listen to a broadcast; non blocking.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the broadcast is \"broadcasting \u003ccode\u003ex\u003c/code\u003e\", \u003ccode\u003etryListen\u003c/code\u003e will return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e\nimmediately.\n\u003c/li\u003e\u003cli\u003e If the broadcast is \"silent\", \u003ccode\u003etryListen\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e immediately.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.Broadcast",
        "fct-package": "concurrent-extra",
        "fct-signature": "Broadcast α -\u003e IO (Maybe α)",
        "fct-source": "src/Control-Concurrent-Broadcast.html#tryListen",
        "fct-type": "function",
        "title": "tryListen"
      },
      "index": {
        "description": "Try to listen to broadcast non blocking If the broadcast is broadcasting tryListen will return Just immediately If the broadcast is silent tryListen returns Nothing immediately",
        "hierarchy": "Control Concurrent Broadcast",
        "module": "Control.Concurrent.Broadcast",
        "name": "tryListen",
        "normalized": "Broadcast a-\u003eIO(Maybe a)",
        "package": "concurrent-extra",
        "partial": "Listen",
        "signature": "Broadcast α-\u003eIO(Maybe α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Event.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn Event is a simple mechanism for communication between threads: one thread\n signals an event and other threads wait for it.\n\u003c/p\u003e\u003cp\u003eAn event has a state which is either \"set\" or \"cleared\". This state can\n be changed with the corresponding functions \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eclear\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e\n function blocks until the state is \"set\". An important property of setting\n an event is that \u003cem\u003eall\u003c/em\u003e threads waiting for it are woken.\n\u003c/p\u003e\u003cp\u003eIt was inspired by the Python \u003ccode\u003eEvent\u003c/code\u003e object. See:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://docs.python.org/3.1/library/threading.html#event-objects\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis module is designed to be imported qualified. We suggest importing it\n like:\n\u003c/p\u003e\u003cpre\u003e\n import           Control.Concurrent.Event          ( Event )\n import qualified Control.Concurrent.Event as Event ( ... )\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Event",
        "fct-package": "concurrent-extra",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Event.html",
        "fct-type": "module",
        "title": "Event"
      },
      "index": {
        "description": "An Event is simple mechanism for communication between threads one thread signals an event and other threads wait for it An event has state which is either set or cleared This state can be changed with the corresponding functions set and clear The wait function blocks until the state is set An important property of setting an event is that all threads waiting for it are woken It was inspired by the Python Event object See http docs.python.org library threading.html event-objects This module is designed to be imported qualified We suggest importing it like import Control.Concurrent.Event Event import qualified Control.Concurrent.Event as Event",
        "hierarchy": "Control Concurrent Event",
        "module": "Control.Concurrent.Event",
        "name": "Event",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Event.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003eAn event is in one of two possible states: \"set\" or \"cleared\".\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Event",
        "fct-package": "concurrent-extra",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Event.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "An event is in one of two possible states set or cleared",
        "hierarchy": "Control Concurrent Event",
        "module": "Control.Concurrent.Event",
        "name": "Event",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Event.html#v:clear",
      "description": {
        "fct-descr": "\u003cp\u003eChanges the state of the event to \"cleared\". Threads that \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e after the\nstate is changed to \"cleared\" will block until the state is changed to \"set\".\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Event",
        "fct-package": "concurrent-extra",
        "fct-signature": "Event -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Event.html#clear",
        "fct-type": "function",
        "title": "clear"
      },
      "index": {
        "description": "Changes the state of the event to cleared Threads that wait after the state is changed to cleared will block until the state is changed to set",
        "hierarchy": "Control Concurrent Event",
        "module": "Control.Concurrent.Event",
        "name": "clear",
        "normalized": "Event-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Event-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Event.html#v:isSet",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the state of the event is \"set\" and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the state\nis \"cleared\".\n\u003c/p\u003e\u003cp\u003eNotice that this is only a snapshot of the state. By the time a program reacts\non its result it may already be out of date.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Event",
        "fct-package": "concurrent-extra",
        "fct-signature": "Event -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-Event.html#isSet",
        "fct-type": "function",
        "title": "isSet"
      },
      "index": {
        "description": "Returns True if the state of the event is set and False if the state is cleared Notice that this is only snapshot of the state By the time program reacts on its result it may already be out of date",
        "hierarchy": "Control Concurrent Event",
        "module": "Control.Concurrent.Event",
        "name": "isSet",
        "normalized": "Event-\u003eIO Bool",
        "package": "concurrent-extra",
        "partial": "Set",
        "signature": "Event-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Event.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an event in the \"cleared\" state.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Event",
        "fct-package": "concurrent-extra",
        "fct-signature": "IO Event",
        "fct-source": "src/Control-Concurrent-Event.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create an event in the cleared state",
        "hierarchy": "Control Concurrent Event",
        "module": "Control.Concurrent.Event",
        "name": "new",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Event.html#v:newSet",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an event in the \"set\" state.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Event",
        "fct-package": "concurrent-extra",
        "fct-signature": "IO Event",
        "fct-source": "src/Control-Concurrent-Event.html#newSet",
        "fct-type": "function",
        "title": "newSet"
      },
      "index": {
        "description": "Create an event in the set state",
        "hierarchy": "Control Concurrent Event",
        "module": "Control.Concurrent.Event",
        "name": "newSet",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Event.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eChanges the state of the event to \"set\". All threads that where waiting\nfor this event are woken. Threads that \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e after the state is changed to\n\"set\" will not block at all.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Event",
        "fct-package": "concurrent-extra",
        "fct-signature": "Event -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Event.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Changes the state of the event to set All threads that where waiting for this event are woken Threads that wait after the state is changed to set will not block at all",
        "hierarchy": "Control Concurrent Event",
        "module": "Control.Concurrent.Event",
        "name": "set",
        "normalized": "Event-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Event-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Event.html#v:signal",
      "description": {
        "fct-descr": "\u003cp\u003eChanges the state to \"cleared\" after all threads that where waiting for this\nevent are woken. Threads that \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e after a \u003ccode\u003esignal\u003c/code\u003e will block until the event\nis \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e again.\n\u003c/p\u003e\u003cp\u003eThe semantics of signal are equivalent to the following definition:\n\u003c/p\u003e\u003cpre\u003e\n  signal e = \u003ccode\u003e\u003ca\u003eblock\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e e \u003e\u003e \u003ccode\u003e\u003ca\u003eclear\u003c/a\u003e\u003c/code\u003e e\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Event",
        "fct-package": "concurrent-extra",
        "fct-signature": "Event -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Event.html#signal",
        "fct-type": "function",
        "title": "signal"
      },
      "index": {
        "description": "Changes the state to cleared after all threads that where waiting for this event are woken Threads that wait after signal will block until the event is set again The semantics of signal are equivalent to the following definition signal block set clear",
        "hierarchy": "Control Concurrent Event",
        "module": "Control.Concurrent.Event",
        "name": "signal",
        "normalized": "Event-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Event-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Event.html#v:wait",
      "description": {
        "fct-descr": "\u003cp\u003eBlock until the event is \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the state of the event is already \"set\" this function will return\nimmediately. Otherwise it will block until another thread calls \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e(You can also resume a thread that is waiting for an event by throwing an\nasynchronous exception.)\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Event",
        "fct-package": "concurrent-extra",
        "fct-signature": "Event -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Event.html#wait",
        "fct-type": "function",
        "title": "wait"
      },
      "index": {
        "description": "Block until the event is set If the state of the event is already set this function will return immediately Otherwise it will block until another thread calls set You can also resume thread that is waiting for an event by throwing an asynchronous exception",
        "hierarchy": "Control Concurrent Event",
        "module": "Control.Concurrent.Event",
        "name": "wait",
        "normalized": "Event-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Event-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Event.html#v:waitTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eBlock until the event is \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e or until a timer expires.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewait\u003c/a\u003e\u003c/code\u003e, but with a timeout. A return value of \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e indicates a timeout\noccurred.\n\u003c/p\u003e\u003cp\u003eThe timeout is specified in microseconds.\n\u003c/p\u003e\u003cp\u003eIf the event is \"cleared\" and a timeout of 0 &#956;s is specified the\nfunction returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e without blocking.\n\u003c/p\u003e\u003cp\u003eNegative timeouts are treated the same as a timeout of 0 &#956;s.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Event",
        "fct-package": "concurrent-extra",
        "fct-signature": "Event -\u003e Integer -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-Event.html#waitTimeout",
        "fct-type": "function",
        "title": "waitTimeout"
      },
      "index": {
        "description": "Block until the event is set or until timer expires Like wait but with timeout return value of False indicates timeout occurred The timeout is specified in microseconds If the event is cleared and timeout of is specified the function returns False without blocking Negative timeouts are treated the same as timeout of",
        "hierarchy": "Control Concurrent Event",
        "module": "Control.Concurrent.Event",
        "name": "waitTimeout",
        "normalized": "Event-\u003eInteger-\u003eIO Bool",
        "package": "concurrent-extra",
        "partial": "Timeout",
        "signature": "Event-\u003eInteger-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Lock.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eLock\u003c/a\u003e\u003c/code\u003e synchronisation mechanism. It was inspired by\n the Python and Java \u003ccode\u003eLock\u003c/code\u003e objects and should behave in a similar way. See:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://docs.python.org/3.1/library/threading.html#lock-objects\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eand:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://java.sun.com/javase/7/docs/api/java/util/concurrent/locks/Lock.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAll functions are \u003cem\u003eexception safe\u003c/em\u003e. Throwing asynchronous exceptions will not\n compromise the internal state of a \u003ccode\u003e\u003ca\u003eLock\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified. We suggest importing it like:\n\u003c/p\u003e\u003cpre\u003e\n import           Control.Concurrent.Lock         ( Lock )\n import qualified Control.Concurrent.Lock as Lock ( ... )\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Lock.html",
        "fct-type": "module",
        "title": "Lock"
      },
      "index": {
        "description": "This module provides the Lock synchronisation mechanism It was inspired by the Python and Java Lock objects and should behave in similar way See http docs.python.org library threading.html lock-objects and http java.sun.com javase docs api java util concurrent locks Lock.html All functions are exception safe Throwing asynchronous exceptions will not compromise the internal state of Lock This module is intended to be imported qualified We suggest importing it like import Control.Concurrent.Lock Lock import qualified Control.Concurrent.Lock as Lock",
        "hierarchy": "Control Concurrent Lock",
        "module": "Control.Concurrent.Lock",
        "name": "Lock",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Lock.html#t:Lock",
      "description": {
        "fct-descr": "\u003cp\u003eA lock is in one of two states: \"locked\" or \"unlocked\".\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Lock.html#Lock",
        "fct-type": "data",
        "title": "Lock"
      },
      "index": {
        "description": "lock is in one of two states locked or unlocked",
        "hierarchy": "Control Concurrent Lock",
        "module": "Control.Concurrent.Lock",
        "name": "Lock",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Lock.html#v:acquire",
      "description": {
        "fct-descr": "\u003cp\u003eAcquires the \u003ccode\u003e\u003ca\u003eLock\u003c/a\u003e\u003c/code\u003e. Blocks if another thread has acquired the \u003ccode\u003e\u003ca\u003eLock\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eacquire\u003c/code\u003e behaves as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e When the state is \"unlocked\" \u003ccode\u003eacquire\u003c/code\u003e changes the state to \"locked\".\n\u003c/li\u003e\u003cli\u003e When the state is \"locked\" \u003ccode\u003eacquire\u003c/code\u003e \u003cem\u003eblocks\u003c/em\u003e until a call to \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e in\nanother thread wakes the calling thread. Upon awakening it will change the state\nto \"locked\".\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThere are two further important properties of \u003ccode\u003eacquire\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eacquire\u003c/code\u003e is single-wakeup. That is, if there are multiple threads blocked on\n\u003ccode\u003eacquire\u003c/code\u003e and the lock is released, only one thread will be woken up. The\nruntime guarantees that the woken thread completes its \u003ccode\u003eacquire\u003c/code\u003e operation.\n\u003c/li\u003e\u003cli\u003e When multiple threads are blocked on \u003ccode\u003eacquire\u003c/code\u003e, they are woken up in FIFO\norder. This is useful for providing fairness properties of abstractions built\nusing locks. (Note that this differs from the Python implementation where the\nwake-up order is undefined.)\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "Lock -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Lock.html#acquire",
        "fct-type": "function",
        "title": "acquire"
      },
      "index": {
        "description": "Acquires the Lock Blocks if another thread has acquired the Lock acquire behaves as follows When the state is unlocked acquire changes the state to locked When the state is locked acquire blocks until call to release in another thread wakes the calling thread Upon awakening it will change the state to locked There are two further important properties of acquire acquire is single-wakeup That is if there are multiple threads blocked on acquire and the lock is released only one thread will be woken up The runtime guarantees that the woken thread completes its acquire operation When multiple threads are blocked on acquire they are woken up in FIFO order This is useful for providing fairness properties of abstractions built using locks Note that this differs from the Python implementation where the wake-up order is undefined",
        "hierarchy": "Control Concurrent Lock",
        "module": "Control.Concurrent.Lock",
        "name": "acquire",
        "normalized": "Lock-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Lock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Lock.html#v:locked",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines if the lock is in the \"locked\" state.\n\u003c/p\u003e\u003cp\u003eNote that this is only a snapshot of the state. By the time a program reacts\non its result it may already be out of date.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "Lock -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-Lock.html#locked",
        "fct-type": "function",
        "title": "locked"
      },
      "index": {
        "description": "Determines if the lock is in the locked state Note that this is only snapshot of the state By the time program reacts on its result it may already be out of date",
        "hierarchy": "Control Concurrent Lock",
        "module": "Control.Concurrent.Lock",
        "name": "locked",
        "normalized": "Lock-\u003eIO Bool",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Lock-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Lock.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a lock in the \"unlocked\" state.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "IO Lock",
        "fct-source": "src/Control-Concurrent-Lock.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create lock in the unlocked state",
        "hierarchy": "Control Concurrent Lock",
        "module": "Control.Concurrent.Lock",
        "name": "new",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Lock.html#v:newAcquired",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a lock in the \"locked\" state.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "IO Lock",
        "fct-source": "src/Control-Concurrent-Lock.html#newAcquired",
        "fct-type": "function",
        "title": "newAcquired"
      },
      "index": {
        "description": "Create lock in the locked state",
        "hierarchy": "Control Concurrent Lock",
        "module": "Control.Concurrent.Lock",
        "name": "newAcquired",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "Acquired",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Lock.html#v:release",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erelease\u003c/code\u003e changes the state to \"unlocked\" and returns immediately.\n\u003c/p\u003e\u003cp\u003eNote that it is an error to release a lock in the \"unlocked\" state!\n\u003c/p\u003e\u003cp\u003eIf there are any threads blocked on \u003ccode\u003e\u003ca\u003eacquire\u003c/a\u003e\u003c/code\u003e the thread that first called\n\u003ccode\u003eacquire\u003c/code\u003e will be woken up.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "Lock -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Lock.html#release",
        "fct-type": "function",
        "title": "release"
      },
      "index": {
        "description": "release changes the state to unlocked and returns immediately Note that it is an error to release lock in the unlocked state If there are any threads blocked on acquire the thread that first called acquire will be woken up",
        "hierarchy": "Control Concurrent Lock",
        "module": "Control.Concurrent.Lock",
        "name": "release",
        "normalized": "Lock-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Lock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Lock.html#v:tryAcquire",
      "description": {
        "fct-descr": "\u003cp\u003eA non-blocking \u003ccode\u003e\u003ca\u003eacquire\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e When the state is \"unlocked\" \u003ccode\u003etryAcquire\u003c/code\u003e changes the state to \"locked\"\nand returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e When the state is \"locked\" \u003ccode\u003etryAcquire\u003c/code\u003e leaves the state unchanged and\nreturns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "Lock -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-Lock.html#tryAcquire",
        "fct-type": "function",
        "title": "tryAcquire"
      },
      "index": {
        "description": "non-blocking acquire When the state is unlocked tryAcquire changes the state to locked and returns True When the state is locked tryAcquire leaves the state unchanged and returns False",
        "hierarchy": "Control Concurrent Lock",
        "module": "Control.Concurrent.Lock",
        "name": "tryAcquire",
        "normalized": "Lock-\u003eIO Bool",
        "package": "concurrent-extra",
        "partial": "Acquire",
        "signature": "Lock-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Lock.html#v:tryWith",
      "description": {
        "fct-descr": "\u003cp\u003eA non-blocking \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003etryWith\u003c/code\u003e is a convenience function which first tries to\nacquire the lock. If that fails, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned. If it succeeds, the\ncomputation is performed. When the computation terminates, whether normally or\nby raising an exception, the lock is released and \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the result of the\ncomputation is returned.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "Lock -\u003e IO α -\u003e IO (Maybe α)",
        "fct-source": "src/Control-Concurrent-Lock.html#tryWith",
        "fct-type": "function",
        "title": "tryWith"
      },
      "index": {
        "description": "non-blocking with tryWith is convenience function which first tries to acquire the lock If that fails Nothing is returned If it succeeds the computation is performed When the computation terminates whether normally or by raising an exception the lock is released and Just the result of the computation is returned",
        "hierarchy": "Control Concurrent Lock",
        "module": "Control.Concurrent.Lock",
        "name": "tryWith",
        "normalized": "Lock-\u003eIO a-\u003eIO(Maybe a)",
        "package": "concurrent-extra",
        "partial": "With",
        "signature": "Lock-\u003eIO α-\u003eIO(Maybe α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Lock.html#v:wait",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e When the state is \"locked\", \u003ccode\u003ewait\u003c/code\u003e \u003cem\u003eblocks\u003c/em\u003e until a call to \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e in\nanother thread changes it to \"unlocked\".\n\u003c/li\u003e\u003cli\u003e When the state is \"unlocked\" \u003ccode\u003ewait\u003c/code\u003e returns immediately.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003ewait\u003c/code\u003e does not alter the state of the lock.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003ewait\u003c/code\u003e is just a convenience function we can be defined as:\n\u003c/p\u003e\u003cpre\u003ewait l = \u003ccode\u003eblock\u003c/code\u003e \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eacquire\u003c/a\u003e\u003c/code\u003e l \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e l\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "Lock -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Lock.html#wait",
        "fct-type": "function",
        "title": "wait"
      },
      "index": {
        "description": "When the state is locked wait blocks until call to release in another thread changes it to unlocked When the state is unlocked wait returns immediately wait does not alter the state of the lock Note that wait is just convenience function we can be defined as wait block acquire release",
        "hierarchy": "Control Concurrent Lock",
        "module": "Control.Concurrent.Lock",
        "name": "wait",
        "normalized": "Lock-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Lock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-Lock.html#v:with",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function which first acquires the lock and then performs the\ncomputation. When the computation terminates, whether normally or by raising an\nexception, the lock is released.\n\u003c/p\u003e\u003cp\u003eNote that: \u003ccode\u003ewith = \u003ccode\u003e\u003ca\u003eliftA2\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ebracket_\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eacquire\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "Lock -\u003e IO a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-Lock.html#with",
        "fct-type": "function",
        "title": "with"
      },
      "index": {
        "description": "convenience function which first acquires the lock and then performs the computation When the computation terminates whether normally or by raising an exception the lock is released Note that with liftA2 bracket acquire release",
        "hierarchy": "Control Concurrent Lock",
        "module": "Control.Concurrent.Lock",
        "name": "with",
        "normalized": "Lock-\u003eIO a-\u003eIO a",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Lock-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-RLock.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eRLock\u003c/a\u003e\u003c/code\u003e synchronisation mechanism. It was inspired\n by the Python \u003ccode\u003eRLock\u003c/code\u003e and Java \u003ccode\u003eReentrantLock\u003c/code\u003e objects and should behave in a\n similar way. See:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://docs.python.org/3.1/library/threading.html#rlock-objects\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eand:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://java.sun.com/javase/7/docs/api/java/util/concurrent/locks/ReentrantLock.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAll functions are \u003cem\u003eexception safe\u003c/em\u003e. Throwing asynchronous exceptions will not\n compromise the internal state of an \u003ccode\u003e\u003ca\u003eRLock\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified. We suggest importing it like:\n\u003c/p\u003e\u003cpre\u003e\n import           Control.Concurrent.RLock          ( RLock )\n import qualified Control.Concurrent.RLock as RLock ( ... )\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.RLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-RLock.html",
        "fct-type": "module",
        "title": "RLock"
      },
      "index": {
        "description": "This module provides the RLock synchronisation mechanism It was inspired by the Python RLock and Java ReentrantLock objects and should behave in similar way See http docs.python.org library threading.html rlock-objects and http java.sun.com javase docs api java util concurrent locks ReentrantLock.html All functions are exception safe Throwing asynchronous exceptions will not compromise the internal state of an RLock This module is intended to be imported qualified We suggest importing it like import Control.Concurrent.RLock RLock import qualified Control.Concurrent.RLock as RLock",
        "hierarchy": "Control Concurrent RLock",
        "module": "Control.Concurrent.RLock",
        "name": "RLock",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "RLock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-RLock.html#t:RLock",
      "description": {
        "fct-descr": "\u003cp\u003eA reentrant lock is in one of two states: \"locked\" or \"unlocked\". When\nthe lock is in the \"locked\" state it has two additional properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Its \u003cem\u003eowner\u003c/em\u003e: the thread that acquired the lock.\n\u003c/li\u003e\u003cli\u003e Its \u003cem\u003eacquired count\u003c/em\u003e: how many times its owner acquired the lock.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.RLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-RLock.html#RLock",
        "fct-type": "data",
        "title": "RLock"
      },
      "index": {
        "description": "reentrant lock is in one of two states locked or unlocked When the lock is in the locked state it has two additional properties Its owner the thread that acquired the lock Its acquired count how many times its owner acquired the lock",
        "hierarchy": "Control Concurrent RLock",
        "module": "Control.Concurrent.RLock",
        "name": "RLock",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "RLock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-RLock.html#t:State",
      "description": {
        "fct-descr": "\u003cp\u003eThe state of an \u003ccode\u003e\u003ca\u003eRLock\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e indicates an \"unlocked\" state.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e (tid, n)\u003c/code\u003e indicates a \"locked\" state where the thread identified by\n\u003ccode\u003etid\u003c/code\u003e acquired the lock \u003ccode\u003en\u003c/code\u003e times.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.RLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "type",
        "fct-source": "src/Control-Concurrent-RLock.html#State",
        "fct-type": "type",
        "title": "State"
      },
      "index": {
        "description": "The state of an RLock Nothing indicates an unlocked state Just tid indicates locked state where the thread identified by tid acquired the lock times",
        "hierarchy": "Control Concurrent RLock",
        "module": "Control.Concurrent.RLock",
        "name": "State",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-RLock.html#v:acquire",
      "description": {
        "fct-descr": "\u003cp\u003eAcquires the \u003ccode\u003e\u003ca\u003eRLock\u003c/a\u003e\u003c/code\u003e. Blocks if another thread has acquired the \u003ccode\u003e\u003ca\u003eRLock\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eacquire\u003c/code\u003e behaves as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e When the state is \"unlocked\", \u003ccode\u003eacquire\u003c/code\u003e changes the state to \"locked\"\nwith the current thread as owner and an acquired count of 1.\n\u003c/li\u003e\u003cli\u003e When the state is \"locked\" and the current thread owns the lock \u003ccode\u003eacquire\u003c/code\u003e\nonly increments the acquired count.\n\u003c/li\u003e\u003cli\u003e When the state is \"locked\" and the current thread does not own the lock\n\u003ccode\u003eacquire\u003c/code\u003e \u003cem\u003eblocks\u003c/em\u003e until the owner releases the lock. If the thread that called\n\u003ccode\u003eacquire\u003c/code\u003e is woken upon release of the lock it will take ownership and change\nthe state to \"locked\" with an acquired count of 1.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThere are two further important properties of \u003ccode\u003eacquire\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eacquire\u003c/code\u003e is single-wakeup. That is, if there are multiple threads blocked on\n\u003ccode\u003eacquire\u003c/code\u003e, and the lock is released, only one thread will be woken up. The\nruntime guarantees that the woken thread completes its \u003ccode\u003eacquire\u003c/code\u003e operation.\n\u003c/li\u003e\u003cli\u003e When multiple threads are blocked on \u003ccode\u003eacquire\u003c/code\u003e they are woken up in FIFO\norder. This is useful for providing fairness properties of abstractions built\nusing locks. (Note that this differs from the Python implementation where the\nwake-up order is undefined.)\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.RLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RLock -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-RLock.html#acquire",
        "fct-type": "function",
        "title": "acquire"
      },
      "index": {
        "description": "Acquires the RLock Blocks if another thread has acquired the RLock acquire behaves as follows When the state is unlocked acquire changes the state to locked with the current thread as owner and an acquired count of When the state is locked and the current thread owns the lock acquire only increments the acquired count When the state is locked and the current thread does not own the lock acquire blocks until the owner releases the lock If the thread that called acquire is woken upon release of the lock it will take ownership and change the state to locked with an acquired count of There are two further important properties of acquire acquire is single-wakeup That is if there are multiple threads blocked on acquire and the lock is released only one thread will be woken up The runtime guarantees that the woken thread completes its acquire operation When multiple threads are blocked on acquire they are woken up in FIFO order This is useful for providing fairness properties of abstractions built using locks Note that this differs from the Python implementation where the wake-up order is undefined",
        "hierarchy": "Control Concurrent RLock",
        "module": "Control.Concurrent.RLock",
        "name": "acquire",
        "normalized": "RLock-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "RLock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-RLock.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a reentrant lock in the \"unlocked\" state.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.RLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "IO RLock",
        "fct-source": "src/Control-Concurrent-RLock.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create reentrant lock in the unlocked state",
        "hierarchy": "Control Concurrent RLock",
        "module": "Control.Concurrent.RLock",
        "name": "new",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-RLock.html#v:newAcquired",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a reentrant lock in the \"locked\" state (with the current thread as\nowner and an acquired count of 1).\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.RLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "IO RLock",
        "fct-source": "src/Control-Concurrent-RLock.html#newAcquired",
        "fct-type": "function",
        "title": "newAcquired"
      },
      "index": {
        "description": "Create reentrant lock in the locked state with the current thread as owner and an acquired count of",
        "hierarchy": "Control Concurrent RLock",
        "module": "Control.Concurrent.RLock",
        "name": "newAcquired",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "Acquired",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-RLock.html#v:release",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erelease\u003c/code\u003e decrements the acquired count. When a lock is released with an\nacquired count of 1 its state is changed to \"unlocked\".\n\u003c/p\u003e\u003cp\u003eNote that it is both an error to release a lock in the \"unlocked\" state and to\nrelease a lock that is not owned by the current thread.\n\u003c/p\u003e\u003cp\u003eIf there are any threads blocked on \u003ccode\u003e\u003ca\u003eacquire\u003c/a\u003e\u003c/code\u003e the thread that first called\n\u003ccode\u003eacquire\u003c/code\u003e will be woken up.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.RLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RLock -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-RLock.html#release",
        "fct-type": "function",
        "title": "release"
      },
      "index": {
        "description": "release decrements the acquired count When lock is released with an acquired count of its state is changed to unlocked Note that it is both an error to release lock in the unlocked state and to release lock that is not owned by the current thread If there are any threads blocked on acquire the thread that first called acquire will be woken up",
        "hierarchy": "Control Concurrent RLock",
        "module": "Control.Concurrent.RLock",
        "name": "release",
        "normalized": "RLock-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "RLock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-RLock.html#v:state",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the state of the reentrant lock.\n\u003c/p\u003e\u003cp\u003eNote that this is only a snapshot of the state. By the time a program reacts on\nits result it may already be out of date.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.RLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RLock -\u003e IO State",
        "fct-source": "src/Control-Concurrent-RLock.html#state",
        "fct-type": "function",
        "title": "state"
      },
      "index": {
        "description": "Determine the state of the reentrant lock Note that this is only snapshot of the state By the time program reacts on its result it may already be out of date",
        "hierarchy": "Control Concurrent RLock",
        "module": "Control.Concurrent.RLock",
        "name": "state",
        "normalized": "RLock-\u003eIO State",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "RLock-\u003eIO State"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-RLock.html#v:tryAcquire",
      "description": {
        "fct-descr": "\u003cp\u003eA non-blocking \u003ccode\u003e\u003ca\u003eacquire\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e When the state is \"unlocked\" \u003ccode\u003etryAcquire\u003c/code\u003e changes the state to \"locked\"\n(with the current thread as owner and an acquired count of 1) and returns\n\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e When the state is \"locked\" \u003ccode\u003etryAcquire\u003c/code\u003e leaves the state unchanged and\nreturns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.RLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RLock -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-RLock.html#tryAcquire",
        "fct-type": "function",
        "title": "tryAcquire"
      },
      "index": {
        "description": "non-blocking acquire When the state is unlocked tryAcquire changes the state to locked with the current thread as owner and an acquired count of and returns True When the state is locked tryAcquire leaves the state unchanged and returns False",
        "hierarchy": "Control Concurrent RLock",
        "module": "Control.Concurrent.RLock",
        "name": "tryAcquire",
        "normalized": "RLock-\u003eIO Bool",
        "package": "concurrent-extra",
        "partial": "Acquire",
        "signature": "RLock-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-RLock.html#v:tryWith",
      "description": {
        "fct-descr": "\u003cp\u003eA non-blocking \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003etryWith\u003c/code\u003e is a convenience function which first tries to\nacquire the lock. If that fails, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned. If it succeeds, the\ncomputation is performed. When the computation terminates, whether normally or\nby raising an exception, the lock is released and \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the result of the\ncomputation is returned.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.RLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RLock -\u003e IO α -\u003e IO (Maybe α)",
        "fct-source": "src/Control-Concurrent-RLock.html#tryWith",
        "fct-type": "function",
        "title": "tryWith"
      },
      "index": {
        "description": "non-blocking with tryWith is convenience function which first tries to acquire the lock If that fails Nothing is returned If it succeeds the computation is performed When the computation terminates whether normally or by raising an exception the lock is released and Just the result of the computation is returned",
        "hierarchy": "Control Concurrent RLock",
        "module": "Control.Concurrent.RLock",
        "name": "tryWith",
        "normalized": "RLock-\u003eIO a-\u003eIO(Maybe a)",
        "package": "concurrent-extra",
        "partial": "With",
        "signature": "RLock-\u003eIO α-\u003eIO(Maybe α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-RLock.html#v:wait",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e When the state is \"locked\" \u003ccode\u003ewait\u003c/code\u003e \u003cem\u003eblocks\u003c/em\u003e until a call to \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e in\nanother thread changes it to \"unlocked\".\n\u003c/li\u003e\u003cli\u003e When the state is \"unlocked\" \u003ccode\u003ewait\u003c/code\u003e returns immediately.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003ewait\u003c/code\u003e does not alter the state of the lock.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003ewait\u003c/code\u003e is just a convenience function defined as:\n\u003c/p\u003e\u003cpre\u003ewait l = \u003ccode\u003eblock\u003c/code\u003e \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eacquire\u003c/a\u003e\u003c/code\u003e l \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e l\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.RLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RLock -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-RLock.html#wait",
        "fct-type": "function",
        "title": "wait"
      },
      "index": {
        "description": "When the state is locked wait blocks until call to release in another thread changes it to unlocked When the state is unlocked wait returns immediately wait does not alter the state of the lock Note that wait is just convenience function defined as wait block acquire release",
        "hierarchy": "Control Concurrent RLock",
        "module": "Control.Concurrent.RLock",
        "name": "wait",
        "normalized": "RLock-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "RLock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-RLock.html#v:with",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function which first acquires the lock and then\nperforms the computation. When the computation terminates, whether\nnormally or by raising an exception, the lock is released.\n\u003c/p\u003e\u003cp\u003eNote that: \u003ccode\u003ewith = \u003ccode\u003e\u003ca\u003eliftA2\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ebracket_\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eacquire\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.RLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RLock -\u003e IO α -\u003e IO α",
        "fct-source": "src/Control-Concurrent-RLock.html#with",
        "fct-type": "function",
        "title": "with"
      },
      "index": {
        "description": "convenience function which first acquires the lock and then performs the computation When the computation terminates whether normally or by raising an exception the lock is released Note that with liftA2 bracket acquire release",
        "hierarchy": "Control Concurrent RLock",
        "module": "Control.Concurrent.RLock",
        "name": "with",
        "normalized": "RLock-\u003eIO a-\u003eIO a",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "RLock-\u003eIO α-\u003eIO α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMultiple-reader, single-writer locks. Used to protect shared resources which\n may be concurrently read, but only sequentially written.\n\u003c/p\u003e\u003cp\u003eAll functions are \u003cem\u003eexception safe\u003c/em\u003e. Throwing asynchronous exceptions will not\n compromise the internal state of an \u003ccode\u003e\u003ca\u003eRWLock\u003c/a\u003e\u003c/code\u003e. This means it is perfectly safe\n to kill a thread that is blocking on, for example, \u003ccode\u003e\u003ca\u003eacquireRead\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee also Java's version:\n \u003ca\u003ehttp://java.sun.com/javase/7/docs/api/java/util/concurrent/locks/ReadWriteLock.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis module is designed to be imported qualified. We suggest importing it\n like:\n\u003c/p\u003e\u003cpre\u003e\n import           Control.Concurrent.ReadWriteLock        ( RWLock )\n import qualified Control.Concurrent.ReadWriteLock as RWL ( ... )\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html",
        "fct-type": "module",
        "title": "ReadWriteLock"
      },
      "index": {
        "description": "Multiple-reader single-writer locks Used to protect shared resources which may be concurrently read but only sequentially written All functions are exception safe Throwing asynchronous exceptions will not compromise the internal state of an RWLock This means it is perfectly safe to kill thread that is blocking on for example acquireRead See also Java version http java.sun.com javase docs api java util concurrent locks ReadWriteLock.html This module is designed to be imported qualified We suggest importing it like import Control.Concurrent.ReadWriteLock RWLock import qualified Control.Concurrent.ReadWriteLock as RWL",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "ReadWriteLock",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "Read Write Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#t:RWLock",
      "description": {
        "fct-descr": "\u003cp\u003eMultiple-reader, single-writer lock. Is in one of three states:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \"Free\": Read or write access can be acquired without blocking.\n\u003c/li\u003e\u003cli\u003e \"Read\": One or more threads have acquired read access. Blocks write access.\n\u003c/li\u003e\u003cli\u003e \"Write\": A single thread has acquired write access. Blocks other threads\nfrom acquiring both read and write access.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html#RWLock",
        "fct-type": "data",
        "title": "RWLock"
      },
      "index": {
        "description": "Multiple-reader single-writer lock Is in one of three states Free Read or write access can be acquired without blocking Read One or more threads have acquired read access Blocks write access Write single thread has acquired write access Blocks other threads from acquiring both read and write access",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "RWLock",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "RWLock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#v:acquireRead",
      "description": {
        "fct-descr": "\u003cp\u003eAcquire the read lock.\n\u003c/p\u003e\u003cp\u003eBlocks if another thread has acquired write access. If \u003ccode\u003eacquireRead\u003c/code\u003e terminates\nwithout throwing an exception the state of the \u003ccode\u003e\u003ca\u003eRWLock\u003c/a\u003e\u003c/code\u003e will be \"read\".\n\u003c/p\u003e\u003cp\u003eImplementation note: Throws an exception when more than (maxBound :: Int)\nsimultaneous threads acquire the read lock. But that is unlikely.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWLock -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html#acquireRead",
        "fct-type": "function",
        "title": "acquireRead"
      },
      "index": {
        "description": "Acquire the read lock Blocks if another thread has acquired write access If acquireRead terminates without throwing an exception the state of the RWLock will be read Implementation note Throws an exception when more than maxBound Int simultaneous threads acquire the read lock But that is unlikely",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "acquireRead",
        "normalized": "RWLock-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "Read",
        "signature": "RWLock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#v:acquireWrite",
      "description": {
        "fct-descr": "\u003cp\u003eAcquire the write lock.\n\u003c/p\u003e\u003cp\u003eBlocks if another thread has acquired either read or write access. If\n\u003ccode\u003eacquireWrite\u003c/code\u003e terminates without throwing an exception the state of the\n\u003ccode\u003e\u003ca\u003eRWLock\u003c/a\u003e\u003c/code\u003e will be \"write\".\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWLock -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html#acquireWrite",
        "fct-type": "function",
        "title": "acquireWrite"
      },
      "index": {
        "description": "Acquire the write lock Blocks if another thread has acquired either read or write access If acquireWrite terminates without throwing an exception the state of the RWLock will be write",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "acquireWrite",
        "normalized": "RWLock-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "Write",
        "signature": "RWLock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eRWLock\u003c/a\u003e\u003c/code\u003e in the \"free\" state; either read or write access\n can be acquired without blocking.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "IO RWLock",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create new RWLock in the free state either read or write access can be acquired without blocking",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "new",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#v:newAcquiredRead",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eRWLock\u003c/a\u003e\u003c/code\u003e in the \"read\" state; only read can be acquired\n without blocking.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "IO RWLock",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html#newAcquiredRead",
        "fct-type": "function",
        "title": "newAcquiredRead"
      },
      "index": {
        "description": "Create new RWLock in the read state only read can be acquired without blocking",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "newAcquiredRead",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "Acquired Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#v:newAcquiredWrite",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eRWLock\u003c/a\u003e\u003c/code\u003e in the \"write\" state; either acquiring read or\n write will block.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "IO RWLock",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html#newAcquiredWrite",
        "fct-type": "function",
        "title": "newAcquiredWrite"
      },
      "index": {
        "description": "Create new RWLock in the write state either acquiring read or write will block",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "newAcquiredWrite",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "Acquired Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#v:releaseRead",
      "description": {
        "fct-descr": "\u003cp\u003eRelease the read lock.\n\u003c/p\u003e\u003cp\u003eIf the calling thread was the last one to relinquish read access the state will\nrevert to \"free\".\n\u003c/p\u003e\u003cp\u003eIt is an error to release read access to an \u003ccode\u003e\u003ca\u003eRWLock\u003c/a\u003e\u003c/code\u003e which is not in the\n\"read\" state.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWLock -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html#releaseRead",
        "fct-type": "function",
        "title": "releaseRead"
      },
      "index": {
        "description": "Release the read lock If the calling thread was the last one to relinquish read access the state will revert to free It is an error to release read access to an RWLock which is not in the read state",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "releaseRead",
        "normalized": "RWLock-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "Read",
        "signature": "RWLock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#v:releaseWrite",
      "description": {
        "fct-descr": "\u003cp\u003eRelease the write lock.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003ereleaseWrite\u003c/code\u003e terminates without throwing an exception the state will be\n\"free\".\n\u003c/p\u003e\u003cp\u003eIt is an error to release write access to an \u003ccode\u003e\u003ca\u003eRWLock\u003c/a\u003e\u003c/code\u003e which is not in the\n\"write\" state.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWLock -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html#releaseWrite",
        "fct-type": "function",
        "title": "releaseWrite"
      },
      "index": {
        "description": "Release the write lock If releaseWrite terminates without throwing an exception the state will be free It is an error to release write access to an RWLock which is not in the write state",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "releaseWrite",
        "normalized": "RWLock-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "Write",
        "signature": "RWLock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#v:tryAcquireRead",
      "description": {
        "fct-descr": "\u003cp\u003eTry to acquire the read lock; non blocking.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eacquireRead\u003c/a\u003e\u003c/code\u003e, but doesn't block. Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the resulting state is\n\"read\", \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWLock -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html#tryAcquireRead",
        "fct-type": "function",
        "title": "tryAcquireRead"
      },
      "index": {
        "description": "Try to acquire the read lock non blocking Like acquireRead but doesn block Returns True if the resulting state is read False otherwise",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "tryAcquireRead",
        "normalized": "RWLock-\u003eIO Bool",
        "package": "concurrent-extra",
        "partial": "Acquire Read",
        "signature": "RWLock-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#v:tryAcquireWrite",
      "description": {
        "fct-descr": "\u003cp\u003eTry to acquire the write lock; non blocking.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eacquireWrite\u003c/a\u003e\u003c/code\u003e, but doesn't block. Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the resulting state is\n\"write\", \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWLock -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html#tryAcquireWrite",
        "fct-type": "function",
        "title": "tryAcquireWrite"
      },
      "index": {
        "description": "Try to acquire the write lock non blocking Like acquireWrite but doesn block Returns True if the resulting state is write False otherwise",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "tryAcquireWrite",
        "normalized": "RWLock-\u003eIO Bool",
        "package": "concurrent-extra",
        "partial": "Acquire Write",
        "signature": "RWLock-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#v:tryWithRead",
      "description": {
        "fct-descr": "\u003cp\u003eA non-blocking \u003ccode\u003e\u003ca\u003ewithRead\u003c/a\u003e\u003c/code\u003e. First tries to acquire the lock. If that fails,\n\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned. If it succeeds, the computation is performed. When the\ncomputation terminates, whether normally or by raising an exception, the lock is\nreleased and \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the result of the computation is returned.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWLock -\u003e IO α -\u003e IO (Maybe α)",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html#tryWithRead",
        "fct-type": "function",
        "title": "tryWithRead"
      },
      "index": {
        "description": "non-blocking withRead First tries to acquire the lock If that fails Nothing is returned If it succeeds the computation is performed When the computation terminates whether normally or by raising an exception the lock is released and Just the result of the computation is returned",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "tryWithRead",
        "normalized": "RWLock-\u003eIO a-\u003eIO(Maybe a)",
        "package": "concurrent-extra",
        "partial": "With Read",
        "signature": "RWLock-\u003eIO α-\u003eIO(Maybe α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#v:tryWithWrite",
      "description": {
        "fct-descr": "\u003cp\u003eA non-blocking \u003ccode\u003e\u003ca\u003ewithWrite\u003c/a\u003e\u003c/code\u003e. First tries to acquire the lock. If that fails,\n\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned. If it succeeds, the computation is performed. When the\ncomputation terminates, whether normally or by raising an exception, the lock is\nreleased and \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the result of the computation is returned.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWLock -\u003e IO α -\u003e IO (Maybe α)",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html#tryWithWrite",
        "fct-type": "function",
        "title": "tryWithWrite"
      },
      "index": {
        "description": "non-blocking withWrite First tries to acquire the lock If that fails Nothing is returned If it succeeds the computation is performed When the computation terminates whether normally or by raising an exception the lock is released and Just the result of the computation is returned",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "tryWithWrite",
        "normalized": "RWLock-\u003eIO a-\u003eIO(Maybe a)",
        "package": "concurrent-extra",
        "partial": "With Write",
        "signature": "RWLock-\u003eIO α-\u003eIO(Maybe α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#v:waitRead",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e When the state is \"write\", \u003ccode\u003ewaitRead\u003c/code\u003e \u003cem\u003eblocks\u003c/em\u003e until a call to\n\u003ccode\u003e\u003ca\u003ereleaseWrite\u003c/a\u003e\u003c/code\u003e in another thread changes the state to \"free\".\n\u003c/li\u003e\u003cli\u003e When the state is \"free\" or \"read\" \u003ccode\u003ewaitRead\u003c/code\u003e returns immediately.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003ewaitRead\u003c/code\u003e does not alter the state of the lock.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003ewaitRead\u003c/code\u003e is just a convenience function defined as:\n\u003c/p\u003e\u003cpre\u003ewaitRead l = \u003ccode\u003e\u003ca\u003emask_\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eacquireRead\u003c/a\u003e\u003c/code\u003e l \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ereleaseRead\u003c/a\u003e\u003c/code\u003e l\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWLock -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html#waitRead",
        "fct-type": "function",
        "title": "waitRead"
      },
      "index": {
        "description": "When the state is write waitRead blocks until call to releaseWrite in another thread changes the state to free When the state is free or read waitRead returns immediately waitRead does not alter the state of the lock Note that waitRead is just convenience function defined as waitRead mask acquireRead releaseRead",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "waitRead",
        "normalized": "RWLock-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "Read",
        "signature": "RWLock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#v:waitWrite",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e When the state is \"write\" or \"read\" \u003ccode\u003ewaitWrite\u003c/code\u003e \u003cem\u003eblocks\u003c/em\u003e until a call to\n\u003ccode\u003e\u003ca\u003ereleaseWrite\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ereleaseRead\u003c/a\u003e\u003c/code\u003e in another thread changes the state to \"free\".\n\u003c/li\u003e\u003cli\u003e When the state is \"free\" \u003ccode\u003ewaitWrite\u003c/code\u003e returns immediately.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003ewaitWrite\u003c/code\u003e does not alter the state of the lock.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003ewaitWrite\u003c/code\u003e is just a convenience function defined as:\n\u003c/p\u003e\u003cpre\u003ewaitWrite l = \u003ccode\u003e\u003ca\u003emask_\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eacquireWrite\u003c/a\u003e\u003c/code\u003e l \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ereleaseWrite\u003c/a\u003e\u003c/code\u003e l\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWLock -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html#waitWrite",
        "fct-type": "function",
        "title": "waitWrite"
      },
      "index": {
        "description": "When the state is write or read waitWrite blocks until call to releaseWrite or releaseRead in another thread changes the state to free When the state is free waitWrite returns immediately waitWrite does not alter the state of the lock Note that waitWrite is just convenience function defined as waitWrite mask acquireWrite releaseWrite",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "waitWrite",
        "normalized": "RWLock-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "Write",
        "signature": "RWLock-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#v:withRead",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function wich first acquires read access and then performs the\ncomputation. When the computation terminates, whether normally or by raising an\nexception, the read lock is released.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWLock -\u003e IO α -\u003e IO α",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html#withRead",
        "fct-type": "function",
        "title": "withRead"
      },
      "index": {
        "description": "convenience function wich first acquires read access and then performs the computation When the computation terminates whether normally or by raising an exception the read lock is released",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "withRead",
        "normalized": "RWLock-\u003eIO a-\u003eIO a",
        "package": "concurrent-extra",
        "partial": "Read",
        "signature": "RWLock-\u003eIO α-\u003eIO α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteLock.html#v:withWrite",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function wich first acquires write access and then performs\nthe computation. When the computation terminates, whether normally or by raising\nan exception, the write lock is released.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteLock",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWLock -\u003e IO α -\u003e IO α",
        "fct-source": "src/Control-Concurrent-ReadWriteLock.html#withWrite",
        "fct-type": "function",
        "title": "withWrite"
      },
      "index": {
        "description": "convenience function wich first acquires write access and then performs the computation When the computation terminates whether normally or by raising an exception the write lock is released",
        "hierarchy": "Control Concurrent ReadWriteLock",
        "module": "Control.Concurrent.ReadWriteLock",
        "name": "withWrite",
        "normalized": "RWLock-\u003eIO a-\u003eIO a",
        "package": "concurrent-extra",
        "partial": "Write",
        "signature": "RWLock-\u003eIO α-\u003eIO α"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteVar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConcurrent read, sequential write variables. Comparable to an \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e with\n more advanced synchronization mechanisms. The value stored inside the \u003ccode\u003e\u003ca\u003eRWVar\u003c/a\u003e\u003c/code\u003e\n can be read and used by multiple threads at the same time. Concurrent\n computations inside a \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e \"block\" observe the same value.\n\u003c/p\u003e\u003cp\u003eObserving and changing the contents of an \u003ccode\u003e\u003ca\u003eRWVar\u003c/a\u003e\u003c/code\u003e are mutually\n exclusive. The \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e function will block if \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e is active and\n vice-versa. Furthermore \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e is fully sequential and will also\n block on concurrent calls of \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe following are guaranteed deadlocks:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003emodify_\u003c/a\u003e\u003c/code\u003e v \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e v \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e v \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emodify_\u003c/a\u003e\u003c/code\u003e v \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003emodify_\u003c/a\u003e\u003c/code\u003e v \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emodify_\u003c/a\u003e\u003c/code\u003e v \u003ccode\u003e\u003ca\u003e$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAll functions are \u003cem\u003eexception safe\u003c/em\u003e. Throwing asynchronous exceptions will not\n compromise the internal state of an \u003ccode\u003e\u003ca\u003eRWVar\u003c/a\u003e\u003c/code\u003e. This also means that threads\n blocking on \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e and friends can still be unblocked by throwing\n an asynchronous exception.\n\u003c/p\u003e\u003cp\u003eThis module is designed to be imported qualified. We suggest importing it\n like:\n\u003c/p\u003e\u003cpre\u003e\n import           Control.Concurrent.ReadWriteVar        ( RWVar )\n import qualified Control.Concurrent.ReadWriteVar as RWV ( ... )\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.ReadWriteVar",
        "fct-package": "concurrent-extra",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-ReadWriteVar.html",
        "fct-type": "module",
        "title": "ReadWriteVar"
      },
      "index": {
        "description": "Concurrent read sequential write variables Comparable to an IORef with more advanced synchronization mechanisms The value stored inside the RWVar can be read and used by multiple threads at the same time Concurrent computations inside with block observe the same value Observing and changing the contents of an RWVar are mutually exclusive The with function will block if modify is active and vice-versa Furthermore with is fully sequential and will also block on concurrent calls of modify The following are guaranteed deadlocks modify const with const undefined with const modify const undefined modify const modify const undefined All functions are exception safe Throwing asynchronous exceptions will not compromise the internal state of an RWVar This also means that threads blocking on with or modify and friends can still be unblocked by throwing an asynchronous exception This module is designed to be imported qualified We suggest importing it like import Control.Concurrent.ReadWriteVar RWVar import qualified Control.Concurrent.ReadWriteVar as RWV",
        "hierarchy": "Control Concurrent ReadWriteVar",
        "module": "Control.Concurrent.ReadWriteVar",
        "name": "ReadWriteVar",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "Read Write Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteVar.html#t:RWVar",
      "description": {
        "fct-descr": "\u003cp\u003eConcurrently readable and sequentially writable variable.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteVar",
        "fct-package": "concurrent-extra",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-ReadWriteVar.html#RWVar",
        "fct-type": "data",
        "title": "RWVar"
      },
      "index": {
        "description": "Concurrently readable and sequentially writable variable",
        "hierarchy": "Control Concurrent ReadWriteVar",
        "module": "Control.Concurrent.ReadWriteVar",
        "name": "RWVar",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "RWVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteVar.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eModify the contents of an \u003ccode\u003e\u003ca\u003eRWVar\u003c/a\u003e\u003c/code\u003e and return an additional value.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emodify_\u003c/a\u003e\u003c/code\u003e, but allows a value to be returned (&#946;) in addition to the\nmodified value of the \u003ccode\u003e\u003ca\u003eRWVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteVar",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWVar α -\u003e (α -\u003e IO (α, β)) -\u003e IO β",
        "fct-source": "src/Control-Concurrent-ReadWriteVar.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Modify the contents of an RWVar and return an additional value Like modify but allows value to be returned in addition to the modified value of the RWVar",
        "hierarchy": "Control Concurrent ReadWriteVar",
        "module": "Control.Concurrent.ReadWriteVar",
        "name": "modify",
        "normalized": "RWVar a-\u003e(a-\u003eIO(a,b))-\u003eIO b",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "RWVar α-\u003e(α-\u003eIO(α,β))-\u003eIO β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteVar.html#v:modify_",
      "description": {
        "fct-descr": "\u003cp\u003eModify the contents of an \u003ccode\u003e\u003ca\u003eRWVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function needs exclusive write access to the \u003ccode\u003e\u003ca\u003eRWVar\u003c/a\u003e\u003c/code\u003e. Only one thread can\nmodify an \u003ccode\u003e\u003ca\u003eRWVar\u003c/a\u003e\u003c/code\u003e at the same time. All others will block.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteVar",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWVar α -\u003e (α -\u003e IO α) -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-ReadWriteVar.html#modify_",
        "fct-type": "function",
        "title": "modify_"
      },
      "index": {
        "description": "Modify the contents of an RWVar This function needs exclusive write access to the RWVar Only one thread can modify an RWVar at the same time All others will block",
        "hierarchy": "Control Concurrent ReadWriteVar",
        "module": "Control.Concurrent.ReadWriteVar",
        "name": "modify_",
        "normalized": "RWVar a-\u003e(a-\u003eIO a)-\u003eIO()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "RWVar α-\u003e(α-\u003eIO α)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteVar.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eRWVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteVar",
        "fct-package": "concurrent-extra",
        "fct-signature": "α -\u003e IO (RWVar α)",
        "fct-source": "src/Control-Concurrent-ReadWriteVar.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create new RWVar",
        "hierarchy": "Control Concurrent ReadWriteVar",
        "module": "Control.Concurrent.ReadWriteVar",
        "name": "new",
        "normalized": "a-\u003eIO(RWVar a)",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "α-\u003eIO(RWVar α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteVar.html#v:tryModify",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to modify the contents of an \u003ccode\u003e\u003ca\u003eRWVar\u003c/a\u003e\u003c/code\u003e and return an additional value.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e, but doesn't block. Returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the additional value if the\ncontents could be replaced, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteVar",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWVar α -\u003e (α -\u003e IO (α, β)) -\u003e IO (Maybe β)",
        "fct-source": "src/Control-Concurrent-ReadWriteVar.html#tryModify",
        "fct-type": "function",
        "title": "tryModify"
      },
      "index": {
        "description": "Attempt to modify the contents of an RWVar and return an additional value Like modify but doesn block Returns Just the additional value if the contents could be replaced Nothing otherwise",
        "hierarchy": "Control Concurrent ReadWriteVar",
        "module": "Control.Concurrent.ReadWriteVar",
        "name": "tryModify",
        "normalized": "RWVar a-\u003e(a-\u003eIO(a,b))-\u003eIO(Maybe b)",
        "package": "concurrent-extra",
        "partial": "Modify",
        "signature": "RWVar α-\u003e(α-\u003eIO(α,β))-\u003eIO(Maybe β)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteVar.html#v:tryModify_",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to modify the contents of an \u003ccode\u003e\u003ca\u003eRWVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emodify_\u003c/a\u003e\u003c/code\u003e, but doesn't block. Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the contents could be\nreplaced, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteVar",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWVar α -\u003e (α -\u003e IO α) -\u003e IO Bool",
        "fct-source": "src/Control-Concurrent-ReadWriteVar.html#tryModify_",
        "fct-type": "function",
        "title": "tryModify_"
      },
      "index": {
        "description": "Attempt to modify the contents of an RWVar Like modify but doesn block Returns True if the contents could be replaced False otherwise",
        "hierarchy": "Control Concurrent ReadWriteVar",
        "module": "Control.Concurrent.ReadWriteVar",
        "name": "tryModify_",
        "normalized": "RWVar a-\u003e(a-\u003eIO a)-\u003eIO Bool",
        "package": "concurrent-extra",
        "partial": "Modify",
        "signature": "RWVar α-\u003e(α-\u003eIO α)-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteVar.html#v:tryWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e but doesn't block. Returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the result if read access\ncould be acquired without blocking, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteVar",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWVar α -\u003e (α -\u003e IO β) -\u003e IO (Maybe β)",
        "fct-source": "src/Control-Concurrent-ReadWriteVar.html#tryWith",
        "fct-type": "function",
        "title": "tryWith"
      },
      "index": {
        "description": "Like with but doesn block Returns Just the result if read access could be acquired without blocking Nothing otherwise",
        "hierarchy": "Control Concurrent ReadWriteVar",
        "module": "Control.Concurrent.ReadWriteVar",
        "name": "tryWith",
        "normalized": "RWVar a-\u003e(a-\u003eIO b)-\u003eIO(Maybe b)",
        "package": "concurrent-extra",
        "partial": "With",
        "signature": "RWVar α-\u003e(α-\u003eIO β)-\u003eIO(Maybe β)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-ReadWriteVar.html#v:with",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an action that operates on the contents of the \u003ccode\u003e\u003ca\u003eRWVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe action is guaranteed to have a consistent view of the stored value. Any\nfunction that attempts to \u003ccode\u003e\u003ca\u003emodify\u003c/a\u003e\u003c/code\u003e the contents will block until the action is\ncompleted.\n\u003c/p\u003e\u003cp\u003eIf another thread is modifying the contents of the \u003ccode\u003e\u003ca\u003eRWVar\u003c/a\u003e\u003c/code\u003e this function will\nblock until the other thread finishes its action.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.ReadWriteVar",
        "fct-package": "concurrent-extra",
        "fct-signature": "RWVar α -\u003e (α -\u003e IO β) -\u003e IO β",
        "fct-source": "src/Control-Concurrent-ReadWriteVar.html#with",
        "fct-type": "function",
        "title": "with"
      },
      "index": {
        "description": "Execute an action that operates on the contents of the RWVar The action is guaranteed to have consistent view of the stored value Any function that attempts to modify the contents will block until the action is completed If another thread is modifying the contents of the RWVar this function will block until the other thread finishes its action",
        "hierarchy": "Control Concurrent ReadWriteVar",
        "module": "Control.Concurrent.ReadWriteVar",
        "name": "with",
        "normalized": "RWVar a-\u003e(a-\u003eIO b)-\u003eIO b",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "RWVar α-\u003e(α-\u003eIO β)-\u003eIO β"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-STM-Lock.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an \u003ccode\u003e\u003ca\u003eSTM\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003eControl.Concurrent.Lock\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported qualified. We suggest importing it like:\n\u003c/p\u003e\u003cpre\u003e\n import           Control.Concurrent.STM.Lock         ( Lock )\n import qualified Control.Concurrent.STM.Lock as Lock ( ... )\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.STM.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-STM-Lock.html",
        "fct-type": "module",
        "title": "Lock"
      },
      "index": {
        "description": "This module provides an STM version of Control.Concurrent.Lock This module is intended to be imported qualified We suggest importing it like import Control.Concurrent.STM.Lock Lock import qualified Control.Concurrent.STM.Lock as Lock",
        "hierarchy": "Control Concurrent STM Lock",
        "module": "Control.Concurrent.STM.Lock",
        "name": "Lock",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-STM-Lock.html#t:Lock",
      "description": {
        "fct-descr": "\u003cp\u003eA lock is in one of two states: \"locked\" or \"unlocked\".\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Lock.html#Lock",
        "fct-type": "data",
        "title": "Lock"
      },
      "index": {
        "description": "lock is in one of two states locked or unlocked",
        "hierarchy": "Control Concurrent STM Lock",
        "module": "Control.Concurrent.STM.Lock",
        "name": "Lock",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-STM-Lock.html#v:acquire",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e When the state is \"locked\" \u003ccode\u003eacquire\u003c/code\u003e will \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e the transaction.\n\u003c/li\u003e\u003cli\u003e When the state is \"unlocked\" \u003ccode\u003eacquire\u003c/code\u003e will change the state to \"locked\".\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.STM.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "Lock -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-Lock.html#acquire",
        "fct-type": "function",
        "title": "acquire"
      },
      "index": {
        "description": "When the state is locked acquire will retry the transaction When the state is unlocked acquire will change the state to locked",
        "hierarchy": "Control Concurrent STM Lock",
        "module": "Control.Concurrent.STM.Lock",
        "name": "acquire",
        "normalized": "Lock-\u003eSTM()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Lock-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-STM-Lock.html#v:locked",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines if the lock is in the \"locked\" state.\n\u003c/p\u003e\u003cp\u003eNote that this is only a snapshot of the state. By the time a program reacts\non its result it may already be out of date.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "Lock -\u003e STM Bool",
        "fct-source": "src/Control-Concurrent-STM-Lock.html#locked",
        "fct-type": "function",
        "title": "locked"
      },
      "index": {
        "description": "Determines if the lock is in the locked state Note that this is only snapshot of the state By the time program reacts on its result it may already be out of date",
        "hierarchy": "Control Concurrent STM Lock",
        "module": "Control.Concurrent.STM.Lock",
        "name": "locked",
        "normalized": "Lock-\u003eSTM Bool",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Lock-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-STM-Lock.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a lock in the \"unlocked\" state.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "STM Lock",
        "fct-source": "src/Control-Concurrent-STM-Lock.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create lock in the unlocked state",
        "hierarchy": "Control Concurrent STM Lock",
        "module": "Control.Concurrent.STM.Lock",
        "name": "new",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-STM-Lock.html#v:newAcquired",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a lock in the \"locked\" state.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "STM Lock",
        "fct-source": "src/Control-Concurrent-STM-Lock.html#newAcquired",
        "fct-type": "function",
        "title": "newAcquired"
      },
      "index": {
        "description": "Create lock in the locked state",
        "hierarchy": "Control Concurrent STM Lock",
        "module": "Control.Concurrent.STM.Lock",
        "name": "newAcquired",
        "normalized": "",
        "package": "concurrent-extra",
        "partial": "Acquired",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-STM-Lock.html#v:release",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erelease\u003c/code\u003e changes the state to \"unlocked\" and returns immediately.\n\u003c/p\u003e\u003cp\u003eNote that it is an error to release a lock in the \"unlocked\" state!\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "Lock -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-Lock.html#release",
        "fct-type": "function",
        "title": "release"
      },
      "index": {
        "description": "release changes the state to unlocked and returns immediately Note that it is an error to release lock in the unlocked state",
        "hierarchy": "Control Concurrent STM Lock",
        "module": "Control.Concurrent.STM.Lock",
        "name": "release",
        "normalized": "Lock-\u003eSTM()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Lock-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-STM-Lock.html#v:tryAcquire",
      "description": {
        "fct-descr": "\u003cp\u003eA non-blocking \u003ccode\u003e\u003ca\u003eacquire\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e When the state is \"unlocked\" \u003ccode\u003etryAcquire\u003c/code\u003e changes the state to \"locked\"\nand returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e When the state is \"locked\" \u003ccode\u003etryAcquire\u003c/code\u003e leaves the state unchanged and\nreturns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Control.Concurrent.STM.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "Lock -\u003e STM Bool",
        "fct-source": "src/Control-Concurrent-STM-Lock.html#tryAcquire",
        "fct-type": "function",
        "title": "tryAcquire"
      },
      "index": {
        "description": "non-blocking acquire When the state is unlocked tryAcquire changes the state to locked and returns True When the state is locked tryAcquire leaves the state unchanged and returns False",
        "hierarchy": "Control Concurrent STM Lock",
        "module": "Control.Concurrent.STM.Lock",
        "name": "tryAcquire",
        "normalized": "Lock-\u003eSTM Bool",
        "package": "concurrent-extra",
        "partial": "Acquire",
        "signature": "Lock-\u003eSTM Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-STM-Lock.html#v:tryWith",
      "description": {
        "fct-descr": "\u003cp\u003eA non-blocking \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003etryWith\u003c/code\u003e is a convenience function which first tries to\nacquire the lock. If that fails, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned. If it succeeds, the\ncomputation is performed. When the computation terminates, whether normally or\nby raising an exception, the lock is released and \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the result of the\ncomputation is returned.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "Lock -\u003e IO α -\u003e IO (Maybe α)",
        "fct-source": "src/Control-Concurrent-STM-Lock.html#tryWith",
        "fct-type": "function",
        "title": "tryWith"
      },
      "index": {
        "description": "non-blocking with tryWith is convenience function which first tries to acquire the lock If that fails Nothing is returned If it succeeds the computation is performed When the computation terminates whether normally or by raising an exception the lock is released and Just the result of the computation is returned",
        "hierarchy": "Control Concurrent STM Lock",
        "module": "Control.Concurrent.STM.Lock",
        "name": "tryWith",
        "normalized": "Lock-\u003eIO a-\u003eIO(Maybe a)",
        "package": "concurrent-extra",
        "partial": "With",
        "signature": "Lock-\u003eIO α-\u003eIO(Maybe α)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-STM-Lock.html#v:wait",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e When the state is \"locked\", \u003ccode\u003ewait\u003c/code\u003e will \u003ccode\u003e\u003ca\u003eretry\u003c/a\u003e\u003c/code\u003e the transaction\n\u003c/li\u003e\u003cli\u003e When the state is \"unlocked\" \u003ccode\u003ewait\u003c/code\u003e returns immediately.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003ewait\u003c/code\u003e does not alter the state of the lock.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003ewait\u003c/code\u003e is just a convenience function which can be defined as:\n\u003c/p\u003e\u003cpre\u003ewait l = \u003ccode\u003e\u003ca\u003eacquire\u003c/a\u003e\u003c/code\u003e l \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003erelease\u003c/a\u003e\u003c/code\u003e l\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.STM.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "Lock -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-Lock.html#wait",
        "fct-type": "function",
        "title": "wait"
      },
      "index": {
        "description": "When the state is locked wait will retry the transaction When the state is unlocked wait returns immediately wait does not alter the state of the lock Note that wait is just convenience function which can be defined as wait acquire release",
        "hierarchy": "Control Concurrent STM Lock",
        "module": "Control.Concurrent.STM.Lock",
        "name": "wait",
        "normalized": "Lock-\u003eSTM()",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Lock-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/concurrent-extra/docs/Control-Concurrent-STM-Lock.html#v:with",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function which first acquires the lock and then performs the\ncomputation. When the computation terminates, whether normally or by raising an\nexception, the lock is released.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Lock",
        "fct-package": "concurrent-extra",
        "fct-signature": "Lock -\u003e IO a -\u003e IO a",
        "fct-source": "src/Control-Concurrent-STM-Lock.html#with",
        "fct-type": "function",
        "title": "with"
      },
      "index": {
        "description": "convenience function which first acquires the lock and then performs the computation When the computation terminates whether normally or by raising an exception the lock is released",
        "hierarchy": "Control Concurrent STM Lock",
        "module": "Control.Concurrent.STM.Lock",
        "name": "with",
        "normalized": "Lock-\u003eIO a-\u003eIO a",
        "package": "concurrent-extra",
        "partial": "",
        "signature": "Lock-\u003eIO a-\u003eIO a"
      }
    }
  }
]