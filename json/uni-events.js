[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Cells.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Cell is a container for a value.  It is created with the value in it.\n The only change we can make is to remove the value, and we cannot put\n it back again.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Events.Cells",
        "fct-package": "uni-events",
        "fct-signature": "module",
        "fct-source": "src/Events-Cells.html",
        "fct-type": "module",
        "title": "Cells"
      },
      "index": {
        "description": "Cell is container for value It is created with the value in it The only change we can make is to remove the value and we cannot put it back again",
        "hierarchy": "Events Cells",
        "module": "Events.Cells",
        "name": "Cells",
        "normalized": "",
        "package": "uni-events",
        "partial": "Cells",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Cells.html#t:Cell",
      "description": {
        "fct-module": "Events.Cells",
        "fct-package": "uni-events",
        "fct-signature": "data",
        "fct-source": "src/Events-Cells.html#Cell",
        "fct-type": "data",
        "title": "Cell"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Cells",
        "module": "Events.Cells",
        "name": "Cell",
        "normalized": "",
        "package": "uni-events",
        "partial": "Cell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Cells.html#v:emptyCell",
      "description": {
        "fct-module": "Events.Cells",
        "fct-package": "uni-events",
        "fct-signature": "Cell a -\u003e IO ()",
        "fct-source": "src/Events-Cells.html#emptyCell",
        "fct-type": "function",
        "title": "emptyCell"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Cells",
        "module": "Events.Cells",
        "name": "emptyCell",
        "normalized": "Cell a-\u003eIO()",
        "package": "uni-events",
        "partial": "Cell",
        "signature": "Cell a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Cells.html#v:inspectCell",
      "description": {
        "fct-module": "Events.Cells",
        "fct-package": "uni-events",
        "fct-signature": "Cell a -\u003e IO (Maybe a)",
        "fct-source": "src/Events-Cells.html#inspectCell",
        "fct-type": "function",
        "title": "inspectCell"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Cells",
        "module": "Events.Cells",
        "name": "inspectCell",
        "normalized": "Cell a-\u003eIO(Maybe a)",
        "package": "uni-events",
        "partial": "Cell",
        "signature": "Cell a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Cells.html#v:newCell",
      "description": {
        "fct-module": "Events.Cells",
        "fct-package": "uni-events",
        "fct-signature": "a -\u003e IO (Cell a)",
        "fct-source": "src/Events-Cells.html#newCell",
        "fct-type": "function",
        "title": "newCell"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Cells",
        "module": "Events.Cells",
        "name": "newCell",
        "normalized": "a-\u003eIO(Cell a)",
        "package": "uni-events",
        "partial": "Cell",
        "signature": "a-\u003eIO(Cell a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Channels.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a bare-bones implementation of CML-style channels, IE no\n guards.  Why not use NullGuardChannel you might ask?  Because all the\n gunge we add to do guards makes it too inefficient.\n\u003c/p\u003e\u003cp\u003eTo avoid memory-leaks we need to clean out superannuated registrations\n occasionally, as otherwise we will gradually run out of memory if the\n user continually polls a receive channel event, but no-one is sending\n anything.  (The memory lost is potentially quite big, since it includes\n all the continuations we will never need.)\n\u003c/p\u003e\u003cp\u003eAlthough this is not expressed by the type, there are three possible states\n for the channel\n (1) we have \u003e=0 queued send events and no queued receive events.\n (2) we have \u003e=0 queued receive events and no queued send events.\n (3) we have both send and receive events queued, but they all come\n     from the same synchronisation.\n When we have a new send event, and there are queued receive events\n not from the same synchronisation, we can match.  Otherwise the\n send event must be queued.  For receive events the situation is exactly\n the same in reverse.\n\u003c/p\u003e\u003cp\u003eOur quick and dirty strategy is to maintain an integer counter for the\n channel.  This is initially 0 and on each send or receive registration\n changes as follows:\n 1) If we match an event set counter to 0.\n 2) If we try to match an event, but fail because the event was already\n    matched by someone else (Anticipated), leave counter as it is.\n 3) If finally we have to queue an event, look at counter.  If it\n    exceeds 10, clean the queue and set counter to 0, otherwise increment it.\n \"cleaning\" means removing all items from the front of the queue which\n have flipped toggles.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Events.Channels",
        "fct-package": "uni-events",
        "fct-signature": "module",
        "fct-source": "src/Events-Channels.html",
        "fct-type": "module",
        "title": "Channels"
      },
      "index": {
        "description": "This is bare-bones implementation of CML-style channels IE no guards Why not use NullGuardChannel you might ask Because all the gunge we add to do guards makes it too inefficient To avoid memory-leaks we need to clean out superannuated registrations occasionally as otherwise we will gradually run out of memory if the user continually polls receive channel event but no-one is sending anything The memory lost is potentially quite big since it includes all the continuations we will never need Although this is not expressed by the type there are three possible states for the channel we have queued send events and no queued receive events we have queued receive events and no queued send events we have both send and receive events queued but they all come from the same synchronisation When we have new send event and there are queued receive events not from the same synchronisation we can match Otherwise the send event must be queued For receive events the situation is exactly the same in reverse Our quick and dirty strategy is to maintain an integer counter for the channel This is initially and on each send or receive registration changes as follows If we match an event set counter to If we try to match an event but fail because the event was already matched by someone else Anticipated leave counter as it is If finally we have to queue an event look at counter If it exceeds clean the queue and set counter to otherwise increment it cleaning means removing all items from the front of the queue which have flipped toggles",
        "hierarchy": "Events Channels",
        "module": "Events.Channels",
        "name": "Channels",
        "normalized": "",
        "package": "uni-events",
        "partial": "Channels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Channels.html#t:Channel",
      "description": {
        "fct-descr": "\u003cp\u003eA synchronous channel\n\u003c/p\u003e",
        "fct-module": "Events.Channels",
        "fct-package": "uni-events",
        "fct-signature": "data",
        "fct-source": "src/Events-Channels.html#Channel",
        "fct-type": "data",
        "title": "Channel"
      },
      "index": {
        "description": "synchronous channel",
        "hierarchy": "Events Channels",
        "module": "Events.Channels",
        "name": "Channel",
        "normalized": "",
        "package": "uni-events",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Channels.html#v:newChannel",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new channel\n\u003c/p\u003e",
        "fct-module": "Events.Channels",
        "fct-package": "uni-events",
        "fct-signature": "IO (Channel a)",
        "fct-source": "src/Events-Channels.html#newChannel",
        "fct-type": "function",
        "title": "newChannel"
      },
      "index": {
        "description": "Create new channel",
        "hierarchy": "Events Channels",
        "module": "Events.Channels",
        "name": "newChannel",
        "normalized": "",
        "package": "uni-events",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-DeleteQueue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA DeleteQueue is a queue where entries can be deleted by an\n IO action.  This is a fairly specialised implementation, designed\n for event handling.\n\u003c/p\u003e\u003cp\u003eQueue entries are either active or invalid.  Once invalid,\n removeQueue will not return them, but they still take up (a little) memory.\n\u003c/p\u003e\u003cp\u003eaddQueue, removeQueue, isEmptyQueue, cleanQueue all take a delete queue\n as argument.  We assume that this argument is not used again.\n\u003c/p\u003e\u003cp\u003eEither removeQueue or isEmptyQueue or cleanQueue should be run\n occasionally, to remove invalid entries.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Events.DeleteQueue",
        "fct-package": "uni-events",
        "fct-signature": "module",
        "fct-source": "src/Events-DeleteQueue.html",
        "fct-type": "module",
        "title": "DeleteQueue"
      },
      "index": {
        "description": "DeleteQueue is queue where entries can be deleted by an IO action This is fairly specialised implementation designed for event handling Queue entries are either active or invalid Once invalid removeQueue will not return them but they still take up little memory addQueue removeQueue isEmptyQueue cleanQueue all take delete queue as argument We assume that this argument is not used again Either removeQueue or isEmptyQueue or cleanQueue should be run occasionally to remove invalid entries",
        "hierarchy": "Events DeleteQueue",
        "module": "Events.DeleteQueue",
        "name": "DeleteQueue",
        "normalized": "",
        "package": "uni-events",
        "partial": "Delete Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-DeleteQueue.html#t:DeleteQueue",
      "description": {
        "fct-module": "Events.DeleteQueue",
        "fct-package": "uni-events",
        "fct-signature": "data",
        "fct-source": "src/Events-DeleteQueue.html#DeleteQueue",
        "fct-type": "data",
        "title": "DeleteQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Events DeleteQueue",
        "module": "Events.DeleteQueue",
        "name": "DeleteQueue",
        "normalized": "",
        "package": "uni-events",
        "partial": "Delete Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-DeleteQueue.html#v:addQueue",
      "description": {
        "fct-module": "Events.DeleteQueue",
        "fct-package": "uni-events",
        "fct-signature": "DeleteQueue v -\u003e v -\u003e IO (DeleteQueue v, IO ())",
        "fct-source": "src/Events-DeleteQueue.html#addQueue",
        "fct-type": "function",
        "title": "addQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Events DeleteQueue",
        "module": "Events.DeleteQueue",
        "name": "addQueue",
        "normalized": "DeleteQueue a-\u003ea-\u003eIO(DeleteQueue a,IO())",
        "package": "uni-events",
        "partial": "Queue",
        "signature": "DeleteQueue v-\u003ev-\u003eIO(DeleteQueue v,IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-DeleteQueue.html#v:cleanQueue",
      "description": {
        "fct-module": "Events.DeleteQueue",
        "fct-package": "uni-events",
        "fct-signature": "DeleteQueue v -\u003e IO (DeleteQueue v)",
        "fct-source": "src/Events-DeleteQueue.html#cleanQueue",
        "fct-type": "function",
        "title": "cleanQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Events DeleteQueue",
        "module": "Events.DeleteQueue",
        "name": "cleanQueue",
        "normalized": "DeleteQueue a-\u003eIO(DeleteQueue a)",
        "package": "uni-events",
        "partial": "Queue",
        "signature": "DeleteQueue v-\u003eIO(DeleteQueue v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-DeleteQueue.html#v:emptyQueue",
      "description": {
        "fct-module": "Events.DeleteQueue",
        "fct-package": "uni-events",
        "fct-signature": "DeleteQueue v",
        "fct-source": "src/Events-DeleteQueue.html#emptyQueue",
        "fct-type": "function",
        "title": "emptyQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Events DeleteQueue",
        "module": "Events.DeleteQueue",
        "name": "emptyQueue",
        "normalized": "",
        "package": "uni-events",
        "partial": "Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-DeleteQueue.html#v:isEmptyQueue",
      "description": {
        "fct-module": "Events.DeleteQueue",
        "fct-package": "uni-events",
        "fct-signature": "DeleteQueue v -\u003e IO (Maybe (DeleteQueue v))",
        "fct-source": "src/Events-DeleteQueue.html#isEmptyQueue",
        "fct-type": "function",
        "title": "isEmptyQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Events DeleteQueue",
        "module": "Events.DeleteQueue",
        "name": "isEmptyQueue",
        "normalized": "DeleteQueue a-\u003eIO(Maybe(DeleteQueue a))",
        "package": "uni-events",
        "partial": "Empty Queue",
        "signature": "DeleteQueue v-\u003eIO(Maybe(DeleteQueue v))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-DeleteQueue.html#v:removeQueue",
      "description": {
        "fct-module": "Events.DeleteQueue",
        "fct-package": "uni-events",
        "fct-signature": "DeleteQueue v -\u003e IO (Maybe (v, DeleteQueue v, DeleteQueue v))",
        "fct-source": "src/Events-DeleteQueue.html#removeQueue",
        "fct-type": "function",
        "title": "removeQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Events DeleteQueue",
        "module": "Events.DeleteQueue",
        "name": "removeQueue",
        "normalized": "DeleteQueue a-\u003eIO(Maybe(a,DeleteQueue a,DeleteQueue a))",
        "package": "uni-events",
        "partial": "Queue",
        "signature": "DeleteQueue v-\u003eIO(Maybe(v,DeleteQueue v,DeleteQueue v))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Destructible.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThings which instance Destroyable and Destructible can be destroyed.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Events.Destructible",
        "fct-package": "uni-events",
        "fct-signature": "module",
        "fct-source": "src/Events-Destructible.html",
        "fct-type": "module",
        "title": "Destructible"
      },
      "index": {
        "description": "Things which instance Destroyable and Destructible can be destroyed",
        "hierarchy": "Events Destructible",
        "module": "Events.Destructible",
        "name": "Destructible",
        "normalized": "",
        "package": "uni-events",
        "partial": "Destructible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Destructible.html#t:Destroyable",
      "description": {
        "fct-module": "Events.Destructible",
        "fct-package": "uni-events",
        "fct-signature": "class",
        "fct-source": "src/Events-Destructible.html#Destroyable",
        "fct-type": "class",
        "title": "Destroyable"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Destructible",
        "module": "Events.Destructible",
        "name": "Destroyable",
        "normalized": "",
        "package": "uni-events",
        "partial": "Destroyable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Destructible.html#t:Destructible",
      "description": {
        "fct-module": "Events.Destructible",
        "fct-package": "uni-events",
        "fct-signature": "class",
        "fct-source": "src/Events-Destructible.html#Destructible",
        "fct-type": "class",
        "title": "Destructible"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Destructible",
        "module": "Events.Destructible",
        "name": "Destructible",
        "normalized": "",
        "package": "uni-events",
        "partial": "Destructible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Destructible.html#v:destroy",
      "description": {
        "fct-descr": "\u003cp\u003eDestroys an object\n\u003c/p\u003e",
        "fct-module": "Events.Destructible",
        "fct-package": "uni-events",
        "fct-signature": "o -\u003e IO ()",
        "fct-source": "src/Events-Destructible.html#destroy",
        "fct-type": "method",
        "title": "destroy"
      },
      "index": {
        "description": "Destroys an object",
        "hierarchy": "Events Destructible",
        "module": "Events.Destructible",
        "name": "destroy",
        "normalized": "a-\u003eIO()",
        "package": "uni-events",
        "partial": "",
        "signature": "o-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Destructible.html#v:destroyed",
      "description": {
        "fct-descr": "\u003cp\u003eAn event which occurs when the object is destroyed.\n\u003c/p\u003e",
        "fct-module": "Events.Destructible",
        "fct-package": "uni-events",
        "fct-signature": "o -\u003e Event ()",
        "fct-source": "src/Events-Destructible.html#destroyed",
        "fct-type": "method",
        "title": "destroyed"
      },
      "index": {
        "description": "An event which occurs when the object is destroyed",
        "hierarchy": "Events Destructible",
        "module": "Events.Destructible",
        "name": "destroyed",
        "normalized": "a-\u003eEvent()",
        "package": "uni-events",
        "partial": "",
        "signature": "o-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Destructible.html#v:doOnce",
      "description": {
        "fct-descr": "\u003cp\u003edoOnce can be used to produce an action which is identical\n to its argument, except that if it's already been called, it\n does nothing.\n\u003c/p\u003e",
        "fct-module": "Events.Destructible",
        "fct-package": "uni-events",
        "fct-signature": "IO () -\u003e IO (IO ())",
        "fct-source": "src/Events-Destructible.html#doOnce",
        "fct-type": "function",
        "title": "doOnce"
      },
      "index": {
        "description": "doOnce can be used to produce an action which is identical to its argument except that if it already been called it does nothing",
        "hierarchy": "Events Destructible",
        "module": "Events.Destructible",
        "name": "doOnce",
        "normalized": "IO()-\u003eIO(IO())",
        "package": "uni-events",
        "partial": "Once",
        "signature": "IO()-\u003eIO(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-EqGuard.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere we create a simple guarded queue which allows guarding by equality\n according to an ordered key.  Thus guards have three values,\n match anything, match nothing, and match this value.\n\u003c/p\u003e\u003cp\u003eTo simplify the implementation, we specify that an Eq match has higher\n priority than a MatchAnything match, and when we must choose between\n values for MatchAnything, do not necessarily choose the first\n (more likely the one with the lowest key value).  But we do respect\n FIFO order when only Eq guards are involved.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Events.EqGuard",
        "fct-package": "uni-events",
        "fct-signature": "module",
        "fct-source": "src/Events-EqGuard.html",
        "fct-type": "module",
        "title": "EqGuard"
      },
      "index": {
        "description": "Here we create simple guarded queue which allows guarding by equality according to an ordered key Thus guards have three values match anything match nothing and match this value To simplify the implementation we specify that an Eq match has higher priority than MatchAnything match and when we must choose between values for MatchAnything do not necessarily choose the first more likely the one with the lowest key value But we do respect FIFO order when only Eq guards are involved",
        "hierarchy": "Events EqGuard",
        "module": "Events.EqGuard",
        "name": "EqGuard",
        "normalized": "",
        "package": "uni-events",
        "partial": "Eq Guard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-EqGuard.html#t:EqGuardedChannel",
      "description": {
        "fct-module": "Events.EqGuard",
        "fct-package": "uni-events",
        "fct-signature": "type",
        "fct-source": "src/Events-EqGuard.html#EqGuardedChannel",
        "fct-type": "type",
        "title": "EqGuardedChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Events EqGuard",
        "module": "Events.EqGuard",
        "name": "EqGuardedChannel",
        "normalized": "",
        "package": "uni-events",
        "partial": "Eq Guarded Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-EqGuard.html#t:EqMatch",
      "description": {
        "fct-module": "Events.EqGuard",
        "fct-package": "uni-events",
        "fct-signature": "data",
        "fct-source": "src/Events-EqGuard.html#EqMatch",
        "fct-type": "data",
        "title": "EqMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Events EqGuard",
        "module": "Events.EqGuard",
        "name": "EqMatch",
        "normalized": "",
        "package": "uni-events",
        "partial": "Eq Match",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-EqGuard.html#v:Eq",
      "description": {
        "fct-module": "Events.EqGuard",
        "fct-package": "uni-events",
        "fct-signature": "Eq !key",
        "fct-source": "src/Events-EqGuard.html#EqMatch",
        "fct-type": "function",
        "title": "Eq"
      },
      "index": {
        "description": "",
        "hierarchy": "Events EqGuard",
        "module": "Events.EqGuard",
        "name": "Eq",
        "normalized": "",
        "package": "uni-events",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-EqGuard.html#v:EqMatchAny",
      "description": {
        "fct-module": "Events.EqGuard",
        "fct-package": "uni-events",
        "fct-signature": "EqMatchAny",
        "fct-source": "src/Events-EqGuard.html#EqMatch",
        "fct-type": "function",
        "title": "EqMatchAny"
      },
      "index": {
        "description": "",
        "hierarchy": "Events EqGuard",
        "module": "Events.EqGuard",
        "name": "EqMatchAny",
        "normalized": "",
        "package": "uni-events",
        "partial": "Eq Match Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-EqGuard.html#v:EqMatchNone",
      "description": {
        "fct-module": "Events.EqGuard",
        "fct-package": "uni-events",
        "fct-signature": "EqMatchNone",
        "fct-source": "src/Events-EqGuard.html#EqMatch",
        "fct-type": "function",
        "title": "EqMatchNone"
      },
      "index": {
        "description": "",
        "hierarchy": "Events EqGuard",
        "module": "Events.EqGuard",
        "name": "EqMatchNone",
        "normalized": "",
        "package": "uni-events",
        "partial": "Eq Match None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-EqGuard.html#v:newEqGuardedChannel",
      "description": {
        "fct-module": "Events.EqGuard",
        "fct-package": "uni-events",
        "fct-signature": "IO (EqGuardedChannel key value)",
        "fct-source": "src/Events-EqGuard.html#newEqGuardedChannel",
        "fct-type": "function",
        "title": "newEqGuardedChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Events EqGuard",
        "module": "Events.EqGuard",
        "name": "newEqGuardedChannel",
        "normalized": "",
        "package": "uni-events",
        "partial": "Eq Guarded Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es and combinators for them.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "module",
        "fct-source": "src/Events-Events.html",
        "fct-type": "module",
        "title": "Events"
      },
      "index": {
        "description": "Event and combinators for them",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "Events",
        "normalized": "",
        "package": "uni-events",
        "partial": "Events",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#t:Event",
      "description": {
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "newtype",
        "fct-source": "src/Events-Events.html#Event",
        "fct-type": "newtype",
        "title": "Event"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "Event",
        "normalized": "",
        "package": "uni-events",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#t:HasEvent",
      "description": {
        "fct-descr": "\u003cp\u003eHasEvent represents those event-like things which can be converted to\n an event.\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "class",
        "fct-source": "src/Events-Events.html#HasEvent",
        "fct-type": "class",
        "title": "HasEvent"
      },
      "index": {
        "description": "HasEvent represents those event-like things which can be converted to an event",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "HasEvent",
        "normalized": "",
        "package": "uni-events",
        "partial": "Has Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#t:HasReceive",
      "description": {
        "fct-descr": "\u003cp\u003eHasReceive represents things like channels from which we can take values.\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "class",
        "fct-source": "src/Events-Events.html#HasReceive",
        "fct-type": "class",
        "title": "HasReceive"
      },
      "index": {
        "description": "HasReceive represents things like channels from which we can take values",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "HasReceive",
        "normalized": "",
        "package": "uni-events",
        "partial": "Has Receive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#t:HasSend",
      "description": {
        "fct-descr": "\u003cp\u003eHasSend represents things like channels on which we can send values\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "class",
        "fct-source": "src/Events-Events.html#HasSend",
        "fct-type": "class",
        "title": "HasSend"
      },
      "index": {
        "description": "HasSend represents things like channels on which we can send values",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "HasSend",
        "normalized": "",
        "package": "uni-events",
        "partial": "Has Send",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#t:Request",
      "description": {
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "data",
        "fct-source": "src/Events-Events.html#Request",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "Request",
        "normalized": "",
        "package": "uni-events",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#t:Result",
      "description": {
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "data",
        "fct-source": "src/Events-Events.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "Result",
        "normalized": "",
        "package": "uni-events",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:-43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eChoose between two events.  The first one takes priority.\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Event a -\u003e Event a -\u003e Event a",
        "fct-source": "src/Events-Events.html#%2B%3E",
        "fct-type": "function",
        "title": "(+\u003e)"
      },
      "index": {
        "description": "Choose between two events The first one takes priority",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "(+\u003e) +\u003e",
        "normalized": "Event a-\u003eEvent a-\u003eEvent a",
        "package": "uni-events",
        "partial": "",
        "signature": "Event a-\u003eEvent a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:-62--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAttach an action to be done after the event occurs.\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Event a -\u003e IO b -\u003e Event b",
        "fct-source": "src/Events-Events.html#%3E%3E%3E",
        "fct-type": "function",
        "title": "(\u003e\u003e\u003e)"
      },
      "index": {
        "description": "Attach an action to be done after the event occurs",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
        "normalized": "Event a-\u003eIO b-\u003eEvent b",
        "package": "uni-events",
        "partial": "",
        "signature": "Event a-\u003eIO b-\u003eEvent b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:-62--62--62--61-",
      "description": {
        "fct-descr": "\u003cp\u003eAttach an action to be done after the event occurs.\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Event a -\u003e (a -\u003e IO b) -\u003e Event b",
        "fct-source": "src/Events-Events.html#%3E%3E%3E%3D",
        "fct-type": "function",
        "title": "(\u003e\u003e\u003e=)"
      },
      "index": {
        "description": "Attach an action to be done after the event occurs",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "(\u003e\u003e\u003e=) \u003e\u003e\u003e=",
        "normalized": "Event a-\u003e(a-\u003eIO b)-\u003eEvent b",
        "package": "uni-events",
        "partial": "",
        "signature": "Event a-\u003e(a-\u003eIO b)-\u003eEvent b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:Awaiting",
      "description": {
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Awaiting (IO ())",
        "fct-source": "src/Events-Events.html#Result",
        "fct-type": "function",
        "title": "Awaiting"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "Awaiting",
        "normalized": "Awaiting(IO())",
        "package": "uni-events",
        "partial": "Awaiting",
        "signature": "Awaiting(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:AwaitingAlways",
      "description": {
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "AwaitingAlways (IO ())",
        "fct-source": "src/Events-Events.html#Result",
        "fct-type": "function",
        "title": "AwaitingAlways"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "AwaitingAlways",
        "normalized": "AwaitingAlways(IO())",
        "package": "uni-events",
        "partial": "Awaiting Always",
        "signature": "AwaitingAlways(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:Event",
      "description": {
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Event (Toggle -\u003e (IO a -\u003e IO ()) -\u003e IO Result)",
        "fct-source": "src/Events-Events.html#Event",
        "fct-type": "function",
        "title": "Event"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "Event",
        "normalized": "Event(Toggle-\u003e(IO a-\u003eIO())-\u003eIO Result)",
        "package": "uni-events",
        "partial": "Event",
        "signature": "Event(Toggle-\u003e(IO a-\u003eIO())-\u003eIO Result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:Immediate",
      "description": {
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Immediate",
        "fct-source": "src/Events-Events.html#Result",
        "fct-type": "function",
        "title": "Immediate"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "Immediate",
        "normalized": "",
        "package": "uni-events",
        "partial": "Immediate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:Request",
      "description": {
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Request (a -\u003e IO (Event b, IO ()))",
        "fct-source": "src/Events-Events.html#Request",
        "fct-type": "function",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "Request",
        "normalized": "Request(a-\u003eIO(Event b,IO()))",
        "package": "uni-events",
        "partial": "Request",
        "signature": "Request(a-\u003eIO(Event b,IO()))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:allowWhile",
      "description": {
        "fct-descr": "\u003cp\u003eallowWhile event1 event2 waits for event2, while handling event1.\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Event () -\u003e Event a -\u003e Event a",
        "fct-source": "src/Events-Events.html#allowWhile",
        "fct-type": "function",
        "title": "allowWhile"
      },
      "index": {
        "description": "allowWhile event1 event2 waits for event2 while handling event1",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "allowWhile",
        "normalized": "Event()-\u003eEvent a-\u003eEvent a",
        "package": "uni-events",
        "partial": "While",
        "signature": "Event()-\u003eEvent a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:always",
      "description": {
        "fct-descr": "\u003cp\u003eThe event that always happens, immediately\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "IO a -\u003e Event a",
        "fct-source": "src/Events-Events.html#always",
        "fct-type": "function",
        "title": "always"
      },
      "index": {
        "description": "The event that always happens immediately",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "always",
        "normalized": "IO a-\u003eEvent a",
        "package": "uni-events",
        "partial": "",
        "signature": "IO a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:choose",
      "description": {
        "fct-descr": "\u003cp\u003eChoose between a list of events.\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "[Event a] -\u003e Event a",
        "fct-source": "src/Events-Events.html#choose",
        "fct-type": "function",
        "title": "choose"
      },
      "index": {
        "description": "Choose between list of events",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "choose",
        "normalized": "[Event a]-\u003eEvent a",
        "package": "uni-events",
        "partial": "",
        "signature": "[Event a]-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:computeEvent",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a new event using an action which is called at each\n synchronisation\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "IO (Event a) -\u003e Event a",
        "fct-source": "src/Events-Events.html#computeEvent",
        "fct-type": "function",
        "title": "computeEvent"
      },
      "index": {
        "description": "Construct new event using an action which is called at each synchronisation",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "computeEvent",
        "normalized": "IO(Event a)-\u003eEvent a",
        "package": "uni-events",
        "partial": "Event",
        "signature": "IO(Event a)-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:doRequest",
      "description": {
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Request a b -\u003e a -\u003e IO (Event b, IO ())",
        "fct-source": "src/Events-Events.html#doRequest",
        "fct-type": "function",
        "title": "doRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "doRequest",
        "normalized": "Request a b-\u003ea-\u003eIO(Event b,IO())",
        "package": "uni-events",
        "partial": "Request",
        "signature": "Request a b-\u003ea-\u003eIO(Event b,IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:doneEvent",
      "description": {
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "a -\u003e Event a",
        "fct-source": "src/Events-Events.html#doneEvent",
        "fct-type": "function",
        "title": "doneEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "doneEvent",
        "normalized": "a-\u003eEvent a",
        "package": "uni-events",
        "partial": "Event",
        "signature": "a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:getAllQueued",
      "description": {
        "fct-descr": "\u003cp\u003eget all we can get from the event without waiting.\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Event a -\u003e IO [a]",
        "fct-source": "src/Events-Events.html#getAllQueued",
        "fct-type": "function",
        "title": "getAllQueued"
      },
      "index": {
        "description": "get all we can get from the event without waiting",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "getAllQueued",
        "normalized": "Event a-\u003eIO[a]",
        "package": "uni-events",
        "partial": "All Queued",
        "signature": "Event a-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:never",
      "description": {
        "fct-descr": "\u003cp\u003eThe event that never happens\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Event a",
        "fct-source": "src/Events-Events.html#never",
        "fct-type": "function",
        "title": "never"
      },
      "index": {
        "description": "The event that never happens",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "never",
        "normalized": "",
        "package": "uni-events",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:noWait",
      "description": {
        "fct-descr": "\u003cp\u003eTurns an event into one which is always satisfied at once but registers\n the value to be done later.  WARNING - only to be used with events without\n actions attached, as any actions will not get done.  noWait is typically\n used with send events, where we don't want to wait for someone to pick up\n the value.\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Event a -\u003e Event ()",
        "fct-source": "src/Events-Events.html#noWait",
        "fct-type": "function",
        "title": "noWait"
      },
      "index": {
        "description": "Turns an event into one which is always satisfied at once but registers the value to be done later WARNING only to be used with events without actions attached as any actions will not get done noWait is typically used with send events where we don want to wait for someone to pick up the value",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "noWait",
        "normalized": "Event a-\u003eEvent()",
        "package": "uni-events",
        "partial": "Wait",
        "signature": "Event a-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:poll",
      "description": {
        "fct-descr": "\u003cp\u003eSynchronise on an event, but return immediately with Nothing if it\n can't be satisfied at once.\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Event a -\u003e IO (Maybe a)",
        "fct-source": "src/Events-Events.html#poll",
        "fct-type": "function",
        "title": "poll"
      },
      "index": {
        "description": "Synchronise on an event but return immediately with Nothing if it can be satisfied at once",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "poll",
        "normalized": "Event a-\u003eIO(Maybe a)",
        "package": "uni-events",
        "partial": "",
        "signature": "Event a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:receive",
      "description": {
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "chan a -\u003e Event a",
        "fct-source": "src/Events-Events.html#receive",
        "fct-type": "method",
        "title": "receive"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "receive",
        "normalized": "a b-\u003eEvent b",
        "package": "uni-events",
        "partial": "",
        "signature": "chan a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:receiveIO",
      "description": {
        "fct-descr": "\u003cp\u003eGet a value from a channel (as an IO action)\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "chan a -\u003e IO a",
        "fct-source": "src/Events-Events.html#receiveIO",
        "fct-type": "function",
        "title": "receiveIO"
      },
      "index": {
        "description": "Get value from channel as an IO action",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "receiveIO",
        "normalized": "a b-\u003eIO b",
        "package": "uni-events",
        "partial": "IO",
        "signature": "chan a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:request",
      "description": {
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Request a b -\u003e a -\u003e IO b",
        "fct-source": "src/Events-Events.html#request",
        "fct-type": "function",
        "title": "request"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "request",
        "normalized": "Request a b-\u003ea-\u003eIO b",
        "package": "uni-events",
        "partial": "",
        "signature": "Request a b-\u003ea-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:send",
      "description": {
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "chan a -\u003e a -\u003e Event ()",
        "fct-source": "src/Events-Events.html#send",
        "fct-type": "method",
        "title": "send"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "send",
        "normalized": "a b-\u003eb-\u003eEvent()",
        "package": "uni-events",
        "partial": "",
        "signature": "chan a-\u003ea-\u003eEvent()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:sendIO",
      "description": {
        "fct-descr": "\u003cp\u003eSend a value along a channel (as an IO action)\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "chan a -\u003e a -\u003e IO ()",
        "fct-source": "src/Events-Events.html#sendIO",
        "fct-type": "function",
        "title": "sendIO"
      },
      "index": {
        "description": "Send value along channel as an IO action",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "sendIO",
        "normalized": "a b-\u003eb-\u003eIO()",
        "package": "uni-events",
        "partial": "IO",
        "signature": "chan a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:spawnEvent",
      "description": {
        "fct-descr": "\u003cp\u003eSynchronise on an event in a different thread.\n The kill action it returns is unsafe since it can cause deadlocks if\n it occurs at an awkward moment.  To avoid this use spawnEvent, if possible.\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Event () -\u003e IO (IO ())",
        "fct-source": "src/Events-Events.html#spawnEvent",
        "fct-type": "function",
        "title": "spawnEvent"
      },
      "index": {
        "description": "Synchronise on an event in different thread The kill action it returns is unsafe since it can cause deadlocks if it occurs at an awkward moment To avoid this use spawnEvent if possible",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "spawnEvent",
        "normalized": "Event()-\u003eIO(IO())",
        "package": "uni-events",
        "partial": "Event",
        "signature": "Event()-\u003eIO(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:sync",
      "description": {
        "fct-descr": "\u003cp\u003eSynchronise on an event, waiting on it until it happens, then returning\n the attached value.\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Event a -\u003e IO a",
        "fct-source": "src/Events-Events.html#sync",
        "fct-type": "function",
        "title": "sync"
      },
      "index": {
        "description": "Synchronise on an event waiting on it until it happens then returning the attached value",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "sync",
        "normalized": "Event a-\u003eIO a",
        "package": "uni-events",
        "partial": "",
        "signature": "Event a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:syncNoWait",
      "description": {
        "fct-descr": "\u003cp\u003eRegister an event as synchronised but don't wait for it to complete.\n WARNING - only to be used with events without\n actions attached, as any actions will not get done.  noWait is typically\n used with send events, where we don't want to wait for someone to pick up\n the value.\n synchronise on something without waiting\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Event a -\u003e IO ()",
        "fct-source": "src/Events-Events.html#syncNoWait",
        "fct-type": "function",
        "title": "syncNoWait"
      },
      "index": {
        "description": "Register an event as synchronised but don wait for it to complete WARNING only to be used with events without actions attached as any actions will not get done noWait is typically used with send events where we don want to wait for someone to pick up the value synchronise on something without waiting",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "syncNoWait",
        "normalized": "Event a-\u003eIO()",
        "package": "uni-events",
        "partial": "No Wait",
        "signature": "Event a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:thenEvent",
      "description": {
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Event a -\u003e Event b -\u003e Event b",
        "fct-source": "src/Events-Events.html#thenEvent",
        "fct-type": "function",
        "title": "thenEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "thenEvent",
        "normalized": "Event a-\u003eEvent b-\u003eEvent b",
        "package": "uni-events",
        "partial": "Event",
        "signature": "Event a-\u003eEvent b-\u003eEvent b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:thenGetEvent",
      "description": {
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Event a -\u003e (a -\u003e Event b) -\u003e Event b",
        "fct-source": "src/Events-Events.html#thenGetEvent",
        "fct-type": "function",
        "title": "thenGetEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "thenGetEvent",
        "normalized": "Event a-\u003e(a-\u003eEvent b)-\u003eEvent b",
        "package": "uni-events",
        "partial": "Get Event",
        "signature": "Event a-\u003e(a-\u003eEvent b)-\u003eEvent b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:toEvent",
      "description": {
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "eventType a -\u003e Event a",
        "fct-source": "src/Events-Events.html#toEvent",
        "fct-type": "method",
        "title": "toEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "toEvent",
        "normalized": "a b-\u003eEvent b",
        "package": "uni-events",
        "partial": "Event",
        "signature": "eventType a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:tryEV",
      "description": {
        "fct-descr": "\u003cp\u003eCatch an error if it occurs during an action attached to an event.\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "Event a -\u003e Event (Either SomeException a)",
        "fct-source": "src/Events-Events.html#tryEV",
        "fct-type": "function",
        "title": "tryEV"
      },
      "index": {
        "description": "Catch an error if it occurs during an action attached to an event",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "tryEV",
        "normalized": "Event a-\u003eEvent(Either SomeException a)",
        "package": "uni-events",
        "partial": "EV",
        "signature": "Event a-\u003eEvent(Either SomeException a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:wrapAbort",
      "description": {
        "fct-descr": "\u003cp\u003eWhen we synchronise on wrapAbort preAction\n preAction is evaluated to yield (event,postAction).\n Then exactly one of the following:\n (1) thr event is satisfied, and postAction is not done.\n (2) some other event in this synchronisation is satisfied\n (so this one isn't), and postAction is done.\n (3) no event is satisfied (and so we will deadlock).\n\u003c/p\u003e",
        "fct-module": "Events.Events",
        "fct-package": "uni-events",
        "fct-signature": "IO (Event a, IO ()) -\u003e Event a",
        "fct-source": "src/Events-Events.html#wrapAbort",
        "fct-type": "function",
        "title": "wrapAbort"
      },
      "index": {
        "description": "When we synchronise on wrapAbort preAction preAction is evaluated to yield event postAction Then exactly one of the following thr event is satisfied and postAction is not done some other event in this synchronisation is satisfied so this one isn and postAction is done no event is satisfied and so we will deadlock",
        "hierarchy": "Events Events",
        "module": "Events.Events",
        "name": "wrapAbort",
        "normalized": "IO(Event a,IO())-\u003eEvent a",
        "package": "uni-events",
        "partial": "Abort",
        "signature": "IO(Event a,IO())-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Examples.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExamples is meant to contain examples of using events which\n are too small to go into their own module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Events.Examples",
        "fct-package": "uni-events",
        "fct-signature": "module",
        "fct-source": "src/Events-Examples.html",
        "fct-type": "module",
        "title": "Examples"
      },
      "index": {
        "description": "Examples is meant to contain examples of using events which are too small to go into their own module",
        "hierarchy": "Events Examples",
        "module": "Events.Examples",
        "name": "Examples",
        "normalized": "",
        "package": "uni-events",
        "partial": "Examples",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Examples.html#t:EventSet",
      "description": {
        "fct-module": "Events.Examples",
        "fct-package": "uni-events",
        "fct-signature": "data",
        "fct-source": "src/Events-Examples.html#EventSet",
        "fct-type": "data",
        "title": "EventSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Examples",
        "module": "Events.Examples",
        "name": "EventSet",
        "normalized": "",
        "package": "uni-events",
        "partial": "Event Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Examples.html#v:addToEventSet",
      "description": {
        "fct-module": "Events.Examples",
        "fct-package": "uni-events",
        "fct-signature": "EventSet a -\u003e Event a -\u003e EventSet a",
        "fct-source": "src/Events-Examples.html#addToEventSet",
        "fct-type": "function",
        "title": "addToEventSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Examples",
        "module": "Events.Examples",
        "name": "addToEventSet",
        "normalized": "EventSet a-\u003eEvent a-\u003eEventSet a",
        "package": "uni-events",
        "partial": "To Event Set",
        "signature": "EventSet a-\u003eEvent a-\u003eEventSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Examples.html#v:emptyEventSet",
      "description": {
        "fct-module": "Events.Examples",
        "fct-package": "uni-events",
        "fct-signature": "EventSet a",
        "fct-source": "src/Events-Examples.html#emptyEventSet",
        "fct-type": "function",
        "title": "emptyEventSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Examples",
        "module": "Events.Examples",
        "name": "emptyEventSet",
        "normalized": "",
        "package": "uni-events",
        "partial": "Event Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Examples.html#v:fromEventSet",
      "description": {
        "fct-module": "Events.Examples",
        "fct-package": "uni-events",
        "fct-signature": "EventSet a -\u003e Event (a, EventSet a)",
        "fct-source": "src/Events-Examples.html#fromEventSet",
        "fct-type": "function",
        "title": "fromEventSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Examples",
        "module": "Events.Examples",
        "name": "fromEventSet",
        "normalized": "EventSet a-\u003eEvent(a,EventSet a)",
        "package": "uni-events",
        "partial": "Event Set",
        "signature": "EventSet a-\u003eEvent(a,EventSet a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Examples.html#v:isEmptyEventSet",
      "description": {
        "fct-module": "Events.Examples",
        "fct-package": "uni-events",
        "fct-signature": "EventSet a -\u003e Bool",
        "fct-source": "src/Events-Examples.html#isEmptyEventSet",
        "fct-type": "function",
        "title": "isEmptyEventSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Examples",
        "module": "Events.Examples",
        "name": "isEmptyEventSet",
        "normalized": "EventSet a-\u003eBool",
        "package": "uni-events",
        "partial": "Empty Event Set",
        "signature": "EventSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Examples.html#v:spawnRepeatedEvent",
      "description": {
        "fct-descr": "\u003cp\u003espawnRepeatedEvent concurrently syncs on the event until the\n given action is used; it is somewhat safer than spawnEvent.\n It also never interrupts the handler event attached to\n the event.\n\u003c/p\u003e",
        "fct-module": "Events.Examples",
        "fct-package": "uni-events",
        "fct-signature": "Event () -\u003e IO (IO ())",
        "fct-source": "src/Events-Examples.html#spawnRepeatedEvent",
        "fct-type": "function",
        "title": "spawnRepeatedEvent"
      },
      "index": {
        "description": "spawnRepeatedEvent concurrently syncs on the event until the given action is used it is somewhat safer than spawnEvent It also never interrupts the handler event attached to the event",
        "hierarchy": "Events Examples",
        "module": "Events.Examples",
        "name": "spawnRepeatedEvent",
        "normalized": "Event()-\u003eIO(IO())",
        "package": "uni-events",
        "partial": "Repeated Event",
        "signature": "Event()-\u003eIO(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Examples.html#v:watch",
      "description": {
        "fct-descr": "\u003cp\u003ewatch is used for events like mouse motion events where\n if we can't find time we don't want them queued.\n The event returned waits until the original event next happens and\n returns it.  A worker thread is needed to run this; the attached action\n should be used to stop that thread when we are no longer interested.\n\u003c/p\u003e",
        "fct-module": "Events.Examples",
        "fct-package": "uni-events",
        "fct-signature": "Event a -\u003e IO (Event a, IO ())",
        "fct-source": "src/Events-Examples.html#watch",
        "fct-type": "function",
        "title": "watch"
      },
      "index": {
        "description": "watch is used for events like mouse motion events where if we can find time we don want them queued The event returned waits until the original event next happens and returns it worker thread is needed to run this the attached action should be used to stop that thread when we are no longer interested",
        "hierarchy": "Events Examples",
        "module": "Events.Examples",
        "name": "watch",
        "normalized": "Event a-\u003eIO(Event a,IO())",
        "package": "uni-events",
        "partial": "",
        "signature": "Event a-\u003eIO(Event a,IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-FMQueue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFMQueue handles finite maps of delete queues, so that we\n can implement EqGuard.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Events.FMQueue",
        "fct-package": "uni-events",
        "fct-signature": "module",
        "fct-source": "src/Events-FMQueue.html",
        "fct-type": "module",
        "title": "FMQueue"
      },
      "index": {
        "description": "FMQueue handles finite maps of delete queues so that we can implement EqGuard",
        "hierarchy": "Events FMQueue",
        "module": "Events.FMQueue",
        "name": "FMQueue",
        "normalized": "",
        "package": "uni-events",
        "partial": "FMQueue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-FMQueue.html#t:FMQueue",
      "description": {
        "fct-module": "Events.FMQueue",
        "fct-package": "uni-events",
        "fct-signature": "data",
        "fct-source": "src/Events-FMQueue.html#FMQueue",
        "fct-type": "data",
        "title": "FMQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Events FMQueue",
        "module": "Events.FMQueue",
        "name": "FMQueue",
        "normalized": "",
        "package": "uni-events",
        "partial": "FMQueue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-FMQueue.html#v:addFMQueue",
      "description": {
        "fct-module": "Events.FMQueue",
        "fct-package": "uni-events",
        "fct-signature": "FMQueue key contents -\u003e key -\u003e contents -\u003e IO (FMQueue key contents, IO ())",
        "fct-source": "src/Events-FMQueue.html#addFMQueue",
        "fct-type": "function",
        "title": "addFMQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Events FMQueue",
        "module": "Events.FMQueue",
        "name": "addFMQueue",
        "normalized": "FMQueue a b-\u003ea-\u003eb-\u003eIO(FMQueue a b,IO())",
        "package": "uni-events",
        "partial": "FMQueue",
        "signature": "FMQueue key contents-\u003ekey-\u003econtents-\u003eIO(FMQueue key contents,IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-FMQueue.html#v:emptyFMQueue",
      "description": {
        "fct-module": "Events.FMQueue",
        "fct-package": "uni-events",
        "fct-signature": "FMQueue key contents",
        "fct-source": "src/Events-FMQueue.html#emptyFMQueue",
        "fct-type": "function",
        "title": "emptyFMQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Events FMQueue",
        "module": "Events.FMQueue",
        "name": "emptyFMQueue",
        "normalized": "",
        "package": "uni-events",
        "partial": "FMQueue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-FMQueue.html#v:removeFMQueue",
      "description": {
        "fct-module": "Events.FMQueue",
        "fct-package": "uni-events",
        "fct-signature": "FMQueue key contents -\u003e key -\u003e IO (Maybe (contents, FMQueue key contents), FMQueue key contents)",
        "fct-source": "src/Events-FMQueue.html#removeFMQueue",
        "fct-type": "function",
        "title": "removeFMQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Events FMQueue",
        "module": "Events.FMQueue",
        "name": "removeFMQueue",
        "normalized": "FMQueue a b-\u003ea-\u003eIO(Maybe(b,FMQueue a b),FMQueue a b)",
        "package": "uni-events",
        "partial": "FMQueue",
        "signature": "FMQueue key contents-\u003ekey-\u003eIO(Maybe(contents,FMQueue key contents),FMQueue key contents)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-FMQueue.html#v:removeFMQueueAny",
      "description": {
        "fct-module": "Events.FMQueue",
        "fct-package": "uni-events",
        "fct-signature": "FMQueue key contents -\u003e IO (Maybe (key, contents, FMQueue key contents), FMQueue key contents)",
        "fct-source": "src/Events-FMQueue.html#removeFMQueueAny",
        "fct-type": "function",
        "title": "removeFMQueueAny"
      },
      "index": {
        "description": "",
        "hierarchy": "Events FMQueue",
        "module": "Events.FMQueue",
        "name": "removeFMQueueAny",
        "normalized": "FMQueue a b-\u003eIO(Maybe(a,b,FMQueue a b),FMQueue a b)",
        "package": "uni-events",
        "partial": "FMQueue Any",
        "signature": "FMQueue key contents-\u003eIO(Maybe(key,contents,FMQueue key contents),FMQueue key contents)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGuardedEvents implements guarded events for channels.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Events.GuardedChannels",
        "fct-package": "uni-events",
        "fct-signature": "module",
        "fct-source": "src/Events-GuardedChannels.html",
        "fct-type": "module",
        "title": "GuardedChannels"
      },
      "index": {
        "description": "GuardedEvents implements guarded events for channels",
        "hierarchy": "Events GuardedChannels",
        "module": "Events.GuardedChannels",
        "name": "GuardedChannels",
        "normalized": "",
        "package": "uni-events",
        "partial": "Guarded Channels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#t:CanSendX",
      "description": {
        "fct-module": "Events.GuardedChannels",
        "fct-package": "uni-events",
        "fct-signature": "class",
        "fct-source": "src/Events-GuardedChannels.html#CanSendX",
        "fct-type": "class",
        "title": "CanSendX"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedChannels",
        "module": "Events.GuardedChannels",
        "name": "CanSendX",
        "normalized": "",
        "package": "uni-events",
        "partial": "Can Send",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#t:GQ",
      "description": {
        "fct-module": "Events.GuardedChannels",
        "fct-package": "uni-events",
        "fct-signature": "type",
        "fct-source": "src/Events-GuardedChannels.html#GQ",
        "fct-type": "type",
        "title": "GQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedChannels",
        "module": "Events.GuardedChannels",
        "name": "GQ",
        "normalized": "",
        "package": "uni-events",
        "partial": "GQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#t:GuardedChannel",
      "description": {
        "fct-module": "Events.GuardedChannels",
        "fct-package": "uni-events",
        "fct-signature": "data",
        "fct-source": "src/Events-GuardedChannels.html#GuardedChannel",
        "fct-type": "data",
        "title": "GuardedChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedChannels",
        "module": "Events.GuardedChannels",
        "name": "GuardedChannel",
        "normalized": "",
        "package": "uni-events",
        "partial": "Guarded Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#t:HasAdd",
      "description": {
        "fct-module": "Events.GuardedChannels",
        "fct-package": "uni-events",
        "fct-signature": "class",
        "fct-source": "src/Events-GuardedChannels.html#HasAdd",
        "fct-type": "class",
        "title": "HasAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedChannels",
        "module": "Events.GuardedChannels",
        "name": "HasAdd",
        "normalized": "",
        "package": "uni-events",
        "partial": "Has Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#t:HasEmpty",
      "description": {
        "fct-module": "Events.GuardedChannels",
        "fct-package": "uni-events",
        "fct-signature": "class",
        "fct-source": "src/Events-GuardedChannels.html#HasEmpty",
        "fct-type": "class",
        "title": "HasEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedChannels",
        "module": "Events.GuardedChannels",
        "name": "HasEmpty",
        "normalized": "",
        "package": "uni-events",
        "partial": "Has Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#t:HasGuardedChannel",
      "description": {
        "fct-module": "Events.GuardedChannels",
        "fct-package": "uni-events",
        "fct-signature": "class",
        "fct-source": "src/Events-GuardedChannels.html#HasGuardedChannel",
        "fct-type": "class",
        "title": "HasGuardedChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedChannels",
        "module": "Events.GuardedChannels",
        "name": "HasGuardedChannel",
        "normalized": "",
        "package": "uni-events",
        "partial": "Has Guarded Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#t:HasRemove",
      "description": {
        "fct-module": "Events.GuardedChannels",
        "fct-package": "uni-events",
        "fct-signature": "class",
        "fct-source": "src/Events-GuardedChannels.html#HasRemove",
        "fct-type": "class",
        "title": "HasRemove"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedChannels",
        "module": "Events.GuardedChannels",
        "name": "HasRemove",
        "normalized": "",
        "package": "uni-events",
        "partial": "Has Remove",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#t:VQ",
      "description": {
        "fct-module": "Events.GuardedChannels",
        "fct-package": "uni-events",
        "fct-signature": "type",
        "fct-source": "src/Events-GuardedChannels.html#VQ",
        "fct-type": "type",
        "title": "VQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedChannels",
        "module": "Events.GuardedChannels",
        "name": "VQ",
        "normalized": "",
        "package": "uni-events",
        "partial": "VQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#v:add",
      "description": {
        "fct-module": "Events.GuardedChannels",
        "fct-package": "uni-events",
        "fct-signature": "xQueue xData -\u003e x -\u003e xData -\u003e IO (xQueue xData, IO ())",
        "fct-source": "src/Events-GuardedChannels.html#add",
        "fct-type": "method",
        "title": "add"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedChannels",
        "module": "Events.GuardedChannels",
        "name": "add",
        "normalized": "a b-\u003ec-\u003eb-\u003eIO(a b,IO())",
        "package": "uni-events",
        "partial": "",
        "signature": "xQueue xData-\u003ex-\u003exData-\u003eIO(xQueue xData,IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#v:newEmpty",
      "description": {
        "fct-module": "Events.GuardedChannels",
        "fct-package": "uni-events",
        "fct-signature": "IO (xQueue xData)",
        "fct-source": "src/Events-GuardedChannels.html#newEmpty",
        "fct-type": "method",
        "title": "newEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedChannels",
        "module": "Events.GuardedChannels",
        "name": "newEmpty",
        "normalized": "",
        "package": "uni-events",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#v:newGuardedChannel",
      "description": {
        "fct-module": "Events.GuardedChannels",
        "fct-package": "uni-events",
        "fct-signature": "GQ guardQueue value -\u003e VQ valueQueue -\u003e IO (GuardedChannel guard value)",
        "fct-source": "src/Events-GuardedChannels.html#newGuardedChannel",
        "fct-type": "function",
        "title": "newGuardedChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedChannels",
        "module": "Events.GuardedChannels",
        "name": "newGuardedChannel",
        "normalized": "GQ a b-\u003eVQ c-\u003eIO(GuardedChannel d b)",
        "package": "uni-events",
        "partial": "Guarded Channel",
        "signature": "GQ guardQueue value-\u003eVQ valueQueue-\u003eIO(GuardedChannel guard value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#v:remove",
      "description": {
        "fct-module": "Events.GuardedChannels",
        "fct-package": "uni-events",
        "fct-signature": "yQueue yData -\u003e x -\u003e IO (Maybe (y, yData, IO (yQueue yData)), yQueue yData)",
        "fct-source": "src/Events-GuardedChannels.html#remove",
        "fct-type": "method",
        "title": "remove"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedChannels",
        "module": "Events.GuardedChannels",
        "name": "remove",
        "normalized": "a b-\u003ec-\u003eIO(Maybe(d,b,IO(a b)),a b)",
        "package": "uni-events",
        "partial": "",
        "signature": "yQueue yData-\u003ex-\u003eIO(Maybe(y,yData,IO(yQueue yData)),yQueue yData)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#v:replace",
      "description": {
        "fct-module": "Events.GuardedChannels",
        "fct-package": "uni-events",
        "fct-signature": "GuardedChannel guard value -\u003e value -\u003e GuardedEvent guard (Maybe value)",
        "fct-source": "src/Events-GuardedChannels.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedChannels",
        "module": "Events.GuardedChannels",
        "name": "replace",
        "normalized": "GuardedChannel a b-\u003eb-\u003eGuardedEvent a(Maybe b)",
        "package": "uni-events",
        "partial": "",
        "signature": "GuardedChannel guard value-\u003evalue-\u003eGuardedEvent guard(Maybe value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#v:sneak",
      "description": {
        "fct-module": "Events.GuardedChannels",
        "fct-package": "uni-events",
        "fct-signature": "GuardedChannel guard value -\u003e GuardedEvent guard (Maybe value)",
        "fct-source": "src/Events-GuardedChannels.html#sneak",
        "fct-type": "function",
        "title": "sneak"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedChannels",
        "module": "Events.GuardedChannels",
        "name": "sneak",
        "normalized": "GuardedChannel a b-\u003eGuardedEvent a(Maybe b)",
        "package": "uni-events",
        "partial": "",
        "signature": "GuardedChannel guard value-\u003eGuardedEvent guard(Maybe value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn GuardedEvents we extend the notion of PrimEvents to allow Guarded\n Events, which can be guarded with the new (|\u003e) operator.  GuardedChannels\n will implement guarded events on channels, which will hopefully be the\n only guarded event we will ever need.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Events.GuardedEvents",
        "fct-package": "uni-events",
        "fct-signature": "module",
        "fct-source": "src/Events-GuardedEvents.html",
        "fct-type": "module",
        "title": "GuardedEvents"
      },
      "index": {
        "description": "In GuardedEvents we extend the notion of PrimEvents to allow Guarded Events which can be guarded with the new operator GuardedChannels will implement guarded events on channels which will hopefully be the only guarded event we will ever need",
        "hierarchy": "Events GuardedEvents",
        "module": "Events.GuardedEvents",
        "name": "GuardedEvents",
        "normalized": "",
        "package": "uni-events",
        "partial": "Guarded Events",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#t:Guard",
      "description": {
        "fct-descr": "\u003cp\u003eA Guard represents some condition on a value which we impose on\n a channel, selecting those values we are interested in.\n\u003c/p\u003e",
        "fct-module": "Events.GuardedEvents",
        "fct-package": "uni-events",
        "fct-signature": "class",
        "fct-source": "src/Events-GuardedEvents.html#Guard",
        "fct-type": "class",
        "title": "Guard"
      },
      "index": {
        "description": "Guard represents some condition on value which we impose on channel selecting those values we are interested in",
        "hierarchy": "Events GuardedEvents",
        "module": "Events.GuardedEvents",
        "name": "Guard",
        "normalized": "",
        "package": "uni-events",
        "partial": "Guard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#t:GuardedEvent",
      "description": {
        "fct-descr": "\u003cp\u003eA GuardedEvent guard a represents a source of values of type a, which\n may be selected from according to guards of type guard.\n\u003c/p\u003e",
        "fct-module": "Events.GuardedEvents",
        "fct-package": "uni-events",
        "fct-signature": "data",
        "fct-source": "src/Events-GuardedEvents.html#GuardedEvent",
        "fct-type": "data",
        "title": "GuardedEvent"
      },
      "index": {
        "description": "GuardedEvent guard represents source of values of type which may be selected from according to guards of type guard",
        "hierarchy": "Events GuardedEvents",
        "module": "Events.GuardedEvents",
        "name": "GuardedEvent",
        "normalized": "",
        "package": "uni-events",
        "partial": "Guarded Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#t:HasGuard",
      "description": {
        "fct-module": "Events.GuardedEvents",
        "fct-package": "uni-events",
        "fct-signature": "class",
        "fct-source": "src/Events-GuardedEvents.html#HasGuard",
        "fct-type": "class",
        "title": "HasGuard"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedEvents",
        "module": "Events.GuardedEvents",
        "name": "HasGuard",
        "normalized": "",
        "package": "uni-events",
        "partial": "Has Guard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#t:HasListen",
      "description": {
        "fct-descr": "\u003cp\u003eClass of those channels which have guarded events.\n\u003c/p\u003e",
        "fct-module": "Events.GuardedEvents",
        "fct-package": "uni-events",
        "fct-signature": "class",
        "fct-source": "src/Events-GuardedEvents.html#HasListen",
        "fct-type": "class",
        "title": "HasListen"
      },
      "index": {
        "description": "Class of those channels which have guarded events",
        "hierarchy": "Events GuardedEvents",
        "module": "Events.GuardedEvents",
        "name": "HasListen",
        "normalized": "",
        "package": "uni-events",
        "partial": "Has Listen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#v:-124--62-",
      "description": {
        "fct-module": "Events.GuardedEvents",
        "fct-package": "uni-events",
        "fct-signature": "eventType a -\u003e guard -\u003e eventType a",
        "fct-source": "src/Events-GuardedEvents.html#%7C%3E",
        "fct-type": "method",
        "title": "(|\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedEvents",
        "module": "Events.GuardedEvents",
        "name": "(|\u003e) |\u003e",
        "normalized": "a b-\u003ec-\u003ea b",
        "package": "uni-events",
        "partial": "",
        "signature": "eventType a-\u003eguard-\u003eeventType a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#v:GuardedEvent",
      "description": {
        "fct-module": "Events.GuardedEvents",
        "fct-package": "uni-events",
        "fct-signature": "GuardedEvent !(guard -\u003e Event a) !guard",
        "fct-source": "src/Events-GuardedEvents.html#GuardedEvent",
        "fct-type": "function",
        "title": "GuardedEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedEvents",
        "module": "Events.GuardedEvents",
        "name": "GuardedEvent",
        "normalized": "GuardedEvent(a-\u003eEvent b)a",
        "package": "uni-events",
        "partial": "Guarded Event",
        "signature": "GuardedEvent(guard-\u003eEvent a)guard"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#v:andGuard",
      "description": {
        "fct-descr": "\u003cp\u003ethis should be the guard that corresponds to the conjunction\n of the two given guards.\n\u003c/p\u003e",
        "fct-module": "Events.GuardedEvents",
        "fct-package": "uni-events",
        "fct-signature": "guard -\u003e guard -\u003e guard",
        "fct-source": "src/Events-GuardedEvents.html#andGuard",
        "fct-type": "method",
        "title": "andGuard"
      },
      "index": {
        "description": "this should be the guard that corresponds to the conjunction of the two given guards",
        "hierarchy": "Events GuardedEvents",
        "module": "Events.GuardedEvents",
        "name": "andGuard",
        "normalized": "a-\u003ea-\u003ea",
        "package": "uni-events",
        "partial": "Guard",
        "signature": "guard-\u003eguard-\u003eguard"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#v:listen",
      "description": {
        "fct-module": "Events.GuardedEvents",
        "fct-package": "uni-events",
        "fct-signature": "chan guard a -\u003e GuardedEvent guard a",
        "fct-source": "src/Events-GuardedEvents.html#listen",
        "fct-type": "method",
        "title": "listen"
      },
      "index": {
        "description": "",
        "hierarchy": "Events GuardedEvents",
        "module": "Events.GuardedEvents",
        "name": "listen",
        "normalized": "a b c-\u003eGuardedEvent b c",
        "package": "uni-events",
        "partial": "",
        "signature": "chan guard a-\u003eGuardedEvent guard a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#v:nullGuard",
      "description": {
        "fct-descr": "\u003cp\u003ethis should be the guard that always matches\n\u003c/p\u003e",
        "fct-module": "Events.GuardedEvents",
        "fct-package": "uni-events",
        "fct-signature": "guard",
        "fct-source": "src/Events-GuardedEvents.html#nullGuard",
        "fct-type": "method",
        "title": "nullGuard"
      },
      "index": {
        "description": "this should be the guard that always matches",
        "hierarchy": "Events GuardedEvents",
        "module": "Events.GuardedEvents",
        "name": "nullGuard",
        "normalized": "",
        "package": "uni-events",
        "partial": "Guard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-NullGuard.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere we implement a null guard channel that provides no guards,\n but is hopefully useful as an example.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Events.NullGuard",
        "fct-package": "uni-events",
        "fct-signature": "module",
        "fct-source": "src/Events-NullGuard.html",
        "fct-type": "module",
        "title": "NullGuard"
      },
      "index": {
        "description": "Here we implement null guard channel that provides no guards but is hopefully useful as an example",
        "hierarchy": "Events NullGuard",
        "module": "Events.NullGuard",
        "name": "NullGuard",
        "normalized": "",
        "package": "uni-events",
        "partial": "Null Guard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-NullGuard.html#t:NullGuardedChannel",
      "description": {
        "fct-module": "Events.NullGuard",
        "fct-package": "uni-events",
        "fct-signature": "type",
        "fct-source": "src/Events-NullGuard.html#NullGuardedChannel",
        "fct-type": "type",
        "title": "NullGuardedChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Events NullGuard",
        "module": "Events.NullGuard",
        "name": "NullGuardedChannel",
        "normalized": "",
        "package": "uni-events",
        "partial": "Null Guarded Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-NullGuard.html#v:newNullGuardedChannel",
      "description": {
        "fct-module": "Events.NullGuard",
        "fct-package": "uni-events",
        "fct-signature": "IO (NullGuardedChannel value)",
        "fct-source": "src/Events-NullGuard.html#newNullGuardedChannel",
        "fct-type": "function",
        "title": "newNullGuardedChannel"
      },
      "index": {
        "description": "",
        "hierarchy": "Events NullGuard",
        "module": "Events.NullGuard",
        "name": "newNullGuardedChannel",
        "normalized": "",
        "package": "uni-events",
        "partial": "Null Guarded Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-RefQueue.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRefQueue are standard non-functional\n queues using pointers (aka IORefs).  Events can be deleted asynchronously,\n but this is done only by nulling the cell they are contained in, otherwise\n we would need to double-link.   Other operations, IE the push and pop\n function must not occur on the same queue concurrently.\n\u003c/p\u003e\u003cp\u003eAlthough the queues are impure, we return the new queue to be used\n in future after push and search operations.\n\u003c/p\u003e\u003cp\u003eRefQueue are intended for use for queues of guarded strings,\n hence the specialised implementation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Events.RefQueue",
        "fct-package": "uni-events",
        "fct-signature": "module",
        "fct-source": "src/Events-RefQueue.html",
        "fct-type": "module",
        "title": "RefQueue"
      },
      "index": {
        "description": "RefQueue are standard non-functional queues using pointers aka IORefs Events can be deleted asynchronously but this is done only by nulling the cell they are contained in otherwise we would need to double-link Other operations IE the push and pop function must not occur on the same queue concurrently Although the queues are impure we return the new queue to be used in future after push and search operations RefQueue are intended for use for queues of guarded strings hence the specialised implementation",
        "hierarchy": "Events RefQueue",
        "module": "Events.RefQueue",
        "name": "RefQueue",
        "normalized": "",
        "package": "uni-events",
        "partial": "Ref Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-RefQueue.html#t:RefQueue",
      "description": {
        "fct-module": "Events.RefQueue",
        "fct-package": "uni-events",
        "fct-signature": "data",
        "fct-source": "src/Events-RefQueue.html#RefQueue",
        "fct-type": "data",
        "title": "RefQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Events RefQueue",
        "module": "Events.RefQueue",
        "name": "RefQueue",
        "normalized": "",
        "package": "uni-events",
        "partial": "Ref Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-RefQueue.html#v:newRefQueue",
      "description": {
        "fct-module": "Events.RefQueue",
        "fct-package": "uni-events",
        "fct-signature": "IO (RefQueue a)",
        "fct-source": "src/Events-RefQueue.html#newRefQueue",
        "fct-type": "function",
        "title": "newRefQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Events RefQueue",
        "module": "Events.RefQueue",
        "name": "newRefQueue",
        "normalized": "",
        "package": "uni-events",
        "partial": "Ref Queue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-RefQueue.html#v:pushRefQueue",
      "description": {
        "fct-module": "Events.RefQueue",
        "fct-package": "uni-events",
        "fct-signature": "RefQueue a -\u003e a -\u003e IO (RefQueue a, IO ())",
        "fct-source": "src/Events-RefQueue.html#pushRefQueue",
        "fct-type": "function",
        "title": "pushRefQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Events RefQueue",
        "module": "Events.RefQueue",
        "name": "pushRefQueue",
        "normalized": "RefQueue a-\u003ea-\u003eIO(RefQueue a,IO())",
        "package": "uni-events",
        "partial": "Ref Queue",
        "signature": "RefQueue a-\u003ea-\u003eIO(RefQueue a,IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-RefQueue.html#v:searchRefQueue",
      "description": {
        "fct-module": "Events.RefQueue",
        "fct-package": "uni-events",
        "fct-signature": "RefQueue a -\u003e (a -\u003e Bool) -\u003e IO (Maybe (a, IO (RefQueue a)), RefQueue a)",
        "fct-source": "src/Events-RefQueue.html#searchRefQueue",
        "fct-type": "function",
        "title": "searchRefQueue"
      },
      "index": {
        "description": "",
        "hierarchy": "Events RefQueue",
        "module": "Events.RefQueue",
        "name": "searchRefQueue",
        "normalized": "RefQueue a-\u003e(a-\u003eBool)-\u003eIO(Maybe(a,IO(RefQueue a)),RefQueue a)",
        "package": "uni-events",
        "partial": "Ref Queue",
        "signature": "RefQueue a-\u003e(a-\u003eBool)-\u003eIO(Maybe(a,IO(RefQueue a)),RefQueue a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Spawn.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSpawn provides an interface to Concurrent.forkIO which is supposed\n to be implementable for both Hugs and GHC.\n\u003c/p\u003e\u003cp\u003eThis is the GHC implementation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Events.Spawn",
        "fct-package": "uni-events",
        "fct-signature": "module",
        "fct-source": "src/Events-Spawn.html",
        "fct-type": "module",
        "title": "Spawn"
      },
      "index": {
        "description": "Spawn provides an interface to Concurrent.forkIO which is supposed to be implementable for both Hugs and GHC This is the GHC implementation",
        "hierarchy": "Events Spawn",
        "module": "Events.Spawn",
        "name": "Spawn",
        "normalized": "",
        "package": "uni-events",
        "partial": "Spawn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Spawn.html#v:spawn",
      "description": {
        "fct-descr": "\u003cp\u003eDo a fork, returning an action which may attempt to\n kill the forked thread.  (Or may not . . .)\n\u003c/p\u003e",
        "fct-module": "Events.Spawn",
        "fct-package": "uni-events",
        "fct-signature": "IO () -\u003e IO (IO ())",
        "fct-source": "src/Events-Spawn.html#spawn",
        "fct-type": "function",
        "title": "spawn"
      },
      "index": {
        "description": "Do fork returning an action which may attempt to kill the forked thread Or may not",
        "hierarchy": "Events Spawn",
        "module": "Events.Spawn",
        "name": "spawn",
        "normalized": "IO()-\u003eIO(IO())",
        "package": "uni-events",
        "partial": "",
        "signature": "IO()-\u003eIO(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Synchronized.html#",
      "description": {
        "fct-module": "Events.Synchronized",
        "fct-package": "uni-events",
        "fct-signature": "module",
        "fct-source": "src/Events-Synchronized.html",
        "fct-type": "module",
        "title": "Synchronized"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Synchronized",
        "module": "Events.Synchronized",
        "name": "Synchronized",
        "normalized": "",
        "package": "uni-events",
        "partial": "Synchronized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Synchronized.html#t:Synchronized",
      "description": {
        "fct-module": "Events.Synchronized",
        "fct-package": "uni-events",
        "fct-signature": "class",
        "fct-source": "src/Events-Synchronized.html#Synchronized",
        "fct-type": "class",
        "title": "Synchronized"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Synchronized",
        "module": "Events.Synchronized",
        "name": "Synchronized",
        "normalized": "",
        "package": "uni-events",
        "partial": "Synchronized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Synchronized.html#v:synchronize",
      "description": {
        "fct-descr": "\u003cp\u003eacquire lock on a, and while we've got it do this action.\n\u003c/p\u003e",
        "fct-module": "Events.Synchronized",
        "fct-package": "uni-events",
        "fct-signature": "a -\u003e IO b -\u003e IO b",
        "fct-source": "src/Events-Synchronized.html#synchronize",
        "fct-type": "method",
        "title": "synchronize"
      },
      "index": {
        "description": "acquire lock on and while we ve got it do this action",
        "hierarchy": "Events Synchronized",
        "module": "Events.Synchronized",
        "name": "synchronize",
        "normalized": "a-\u003eIO b-\u003eIO b",
        "package": "uni-events",
        "partial": "",
        "signature": "a-\u003eIO b-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA toggle is a switch initially True, which can only be made false\n (when some action is performed, say).  This module implements\n toggles, allowing atomic switching to false of 1 toggle, or\n 2 toggles together.  To avoid deadlock we use a supply of unique\n integers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Events.Toggle",
        "fct-package": "uni-events",
        "fct-signature": "module",
        "fct-source": "src/Events-Toggle.html",
        "fct-type": "module",
        "title": "Toggle"
      },
      "index": {
        "description": "toggle is switch initially True which can only be made false when some action is performed say This module implements toggles allowing atomic switching to false of toggle or toggles together To avoid deadlock we use supply of unique integers",
        "hierarchy": "Events Toggle",
        "module": "Events.Toggle",
        "name": "Toggle",
        "normalized": "",
        "package": "uni-events",
        "partial": "Toggle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#t:SimpleToggle",
      "description": {
        "fct-module": "Events.Toggle",
        "fct-package": "uni-events",
        "fct-signature": "data",
        "fct-source": "src/Events-Toggle.html#SimpleToggle",
        "fct-type": "data",
        "title": "SimpleToggle"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Toggle",
        "module": "Events.Toggle",
        "name": "SimpleToggle",
        "normalized": "",
        "package": "uni-events",
        "partial": "Simple Toggle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#t:Toggle",
      "description": {
        "fct-module": "Events.Toggle",
        "fct-package": "uni-events",
        "fct-signature": "data",
        "fct-source": "src/Events-Toggle.html#Toggle",
        "fct-type": "data",
        "title": "Toggle"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Toggle",
        "module": "Events.Toggle",
        "name": "Toggle",
        "normalized": "",
        "package": "uni-events",
        "partial": "Toggle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#v:ifSimpleToggle",
      "description": {
        "fct-module": "Events.Toggle",
        "fct-package": "uni-events",
        "fct-signature": "SimpleToggle -\u003e IO () -\u003e IO ()",
        "fct-source": "src/Events-Toggle.html#ifSimpleToggle",
        "fct-type": "function",
        "title": "ifSimpleToggle"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Toggle",
        "module": "Events.Toggle",
        "name": "ifSimpleToggle",
        "normalized": "SimpleToggle-\u003eIO()-\u003eIO()",
        "package": "uni-events",
        "partial": "Simple Toggle",
        "signature": "SimpleToggle-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#v:ifToggle",
      "description": {
        "fct-module": "Events.Toggle",
        "fct-package": "uni-events",
        "fct-signature": "Toggle -\u003e IO () -\u003e IO ()",
        "fct-source": "src/Events-Toggle.html#ifToggle",
        "fct-type": "function",
        "title": "ifToggle"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Toggle",
        "module": "Events.Toggle",
        "name": "ifToggle",
        "normalized": "Toggle-\u003eIO()-\u003eIO()",
        "package": "uni-events",
        "partial": "Toggle",
        "signature": "Toggle-\u003eIO()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#v:newSimpleToggle",
      "description": {
        "fct-module": "Events.Toggle",
        "fct-package": "uni-events",
        "fct-signature": "IO SimpleToggle",
        "fct-source": "src/Events-Toggle.html#newSimpleToggle",
        "fct-type": "function",
        "title": "newSimpleToggle"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Toggle",
        "module": "Events.Toggle",
        "name": "newSimpleToggle",
        "normalized": "",
        "package": "uni-events",
        "partial": "Simple Toggle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#v:newToggle",
      "description": {
        "fct-module": "Events.Toggle",
        "fct-package": "uni-events",
        "fct-signature": "IO Toggle",
        "fct-source": "src/Events-Toggle.html#newToggle",
        "fct-type": "function",
        "title": "newToggle"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Toggle",
        "module": "Events.Toggle",
        "name": "newToggle",
        "normalized": "",
        "package": "uni-events",
        "partial": "Toggle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#v:peekToggle",
      "description": {
        "fct-module": "Events.Toggle",
        "fct-package": "uni-events",
        "fct-signature": "Toggle -\u003e IO Bool",
        "fct-source": "src/Events-Toggle.html#peekToggle",
        "fct-type": "function",
        "title": "peekToggle"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Toggle",
        "module": "Events.Toggle",
        "name": "peekToggle",
        "normalized": "Toggle-\u003eIO Bool",
        "package": "uni-events",
        "partial": "Toggle",
        "signature": "Toggle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#v:simpleToggle",
      "description": {
        "fct-module": "Events.Toggle",
        "fct-package": "uni-events",
        "fct-signature": "SimpleToggle -\u003e IO Bool",
        "fct-source": "src/Events-Toggle.html#simpleToggle",
        "fct-type": "function",
        "title": "simpleToggle"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Toggle",
        "module": "Events.Toggle",
        "name": "simpleToggle",
        "normalized": "SimpleToggle-\u003eIO Bool",
        "package": "uni-events",
        "partial": "Toggle",
        "signature": "SimpleToggle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#v:toggle1",
      "description": {
        "fct-module": "Events.Toggle",
        "fct-package": "uni-events",
        "fct-signature": "Toggle -\u003e IO Bool",
        "fct-source": "src/Events-Toggle.html#toggle1",
        "fct-type": "function",
        "title": "toggle1"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Toggle",
        "module": "Events.Toggle",
        "name": "toggle1",
        "normalized": "Toggle-\u003eIO Bool",
        "package": "uni-events",
        "partial": "",
        "signature": "Toggle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#v:toggle2",
      "description": {
        "fct-module": "Events.Toggle",
        "fct-package": "uni-events",
        "fct-signature": "Toggle -\u003e Toggle -\u003e IO (Maybe (Bool, Bool))",
        "fct-source": "src/Events-Toggle.html#toggle2",
        "fct-type": "function",
        "title": "toggle2"
      },
      "index": {
        "description": "",
        "hierarchy": "Events Toggle",
        "module": "Events.Toggle",
        "name": "toggle2",
        "normalized": "Toggle-\u003eToggle-\u003eIO(Maybe(Bool,Bool))",
        "package": "uni-events",
        "partial": "",
        "signature": "Toggle-\u003eToggle-\u003eIO(Maybe(Bool,Bool))"
      }
    }
  }
]