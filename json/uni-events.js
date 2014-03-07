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
        "word": "uni-events"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Cell is a container for a value.  It is created with the value in it.\n The only change we can make is to remove the value, and we cannot put\n it back again.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Events.Cells",
          "name": "Cells",
          "package": "uni-events",
          "source": "src/Events-Cells.html",
          "type": "module"
        },
        "index": {
          "description": "Cell is container for value It is created with the value in it The only change we can make is to remove the value and we cannot put it back again",
          "hierarchy": "Events Cells",
          "module": "Events.Cells",
          "name": "Cells",
          "package": "uni-events",
          "partial": "Cells",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Cells.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Cells",
          "name": "Cell",
          "package": "uni-events",
          "source": "src/Events-Cells.html#Cell",
          "type": "data"
        },
        "index": {
          "hierarchy": "Events Cells",
          "module": "Events.Cells",
          "name": "Cell",
          "package": "uni-events",
          "partial": "Cell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Cells.html#t:Cell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Cells",
          "name": "emptyCell",
          "package": "uni-events",
          "signature": "Cell a -\u003e IO ()",
          "source": "src/Events-Cells.html#emptyCell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Cells",
          "module": "Events.Cells",
          "name": "emptyCell",
          "normalized": "Cell a-\u003eIO()",
          "package": "uni-events",
          "partial": "Cell",
          "signature": "Cell a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Cells.html#v:emptyCell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Cells",
          "name": "inspectCell",
          "package": "uni-events",
          "signature": "Cell a -\u003e IO (Maybe a)",
          "source": "src/Events-Cells.html#inspectCell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Cells",
          "module": "Events.Cells",
          "name": "inspectCell",
          "normalized": "Cell a-\u003eIO(Maybe a)",
          "package": "uni-events",
          "partial": "Cell",
          "signature": "Cell a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Cells.html#v:inspectCell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Cells",
          "name": "newCell",
          "package": "uni-events",
          "signature": "a -\u003e IO (Cell a)",
          "source": "src/Events-Cells.html#newCell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Cells",
          "module": "Events.Cells",
          "name": "newCell",
          "normalized": "a-\u003eIO(Cell a)",
          "package": "uni-events",
          "partial": "Cell",
          "signature": "a-\u003eIO(Cell a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Cells.html#v:newCell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a bare-bones implementation of CML-style channels, IE no\n guards.  Why not use NullGuardChannel you might ask?  Because all the\n gunge we add to do guards makes it too inefficient.\n\u003c/p\u003e\u003cp\u003eTo avoid memory-leaks we need to clean out superannuated registrations\n occasionally, as otherwise we will gradually run out of memory if the\n user continually polls a receive channel event, but no-one is sending\n anything.  (The memory lost is potentially quite big, since it includes\n all the continuations we will never need.)\n\u003c/p\u003e\u003cp\u003eAlthough this is not expressed by the type, there are three possible states\n for the channel\n (1) we have \u003e=0 queued send events and no queued receive events.\n (2) we have \u003e=0 queued receive events and no queued send events.\n (3) we have both send and receive events queued, but they all come\n     from the same synchronisation.\n When we have a new send event, and there are queued receive events\n not from the same synchronisation, we can match.  Otherwise the\n send event must be queued.  For receive events the situation is exactly\n the same in reverse.\n\u003c/p\u003e\u003cp\u003eOur quick and dirty strategy is to maintain an integer counter for the\n channel.  This is initially 0 and on each send or receive registration\n changes as follows:\n 1) If we match an event set counter to 0.\n 2) If we try to match an event, but fail because the event was already\n    matched by someone else (Anticipated), leave counter as it is.\n 3) If finally we have to queue an event, look at counter.  If it\n    exceeds 10, clean the queue and set counter to 0, otherwise increment it.\n \"cleaning\" means removing all items from the front of the queue which\n have flipped toggles.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Events.Channels",
          "name": "Channels",
          "package": "uni-events",
          "source": "src/Events-Channels.html",
          "type": "module"
        },
        "index": {
          "description": "This is bare-bones implementation of CML-style channels IE no guards Why not use NullGuardChannel you might ask Because all the gunge we add to do guards makes it too inefficient To avoid memory-leaks we need to clean out superannuated registrations occasionally as otherwise we will gradually run out of memory if the user continually polls receive channel event but no-one is sending anything The memory lost is potentially quite big since it includes all the continuations we will never need Although this is not expressed by the type there are three possible states for the channel we have queued send events and no queued receive events we have queued receive events and no queued send events we have both send and receive events queued but they all come from the same synchronisation When we have new send event and there are queued receive events not from the same synchronisation we can match Otherwise the send event must be queued For receive events the situation is exactly the same in reverse Our quick and dirty strategy is to maintain an integer counter for the channel This is initially and on each send or receive registration changes as follows If we match an event set counter to If we try to match an event but fail because the event was already matched by someone else Anticipated leave counter as it is If finally we have to queue an event look at counter If it exceeds clean the queue and set counter to otherwise increment it cleaning means removing all items from the front of the queue which have flipped toggles",
          "hierarchy": "Events Channels",
          "module": "Events.Channels",
          "name": "Channels",
          "package": "uni-events",
          "partial": "Channels",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Channels.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synchronous channel\n\u003c/p\u003e",
          "module": "Events.Channels",
          "name": "Channel",
          "package": "uni-events",
          "source": "src/Events-Channels.html#Channel",
          "type": "data"
        },
        "index": {
          "description": "synchronous channel",
          "hierarchy": "Events Channels",
          "module": "Events.Channels",
          "name": "Channel",
          "package": "uni-events",
          "partial": "Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Channels.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new channel\n\u003c/p\u003e",
          "module": "Events.Channels",
          "name": "newChannel",
          "package": "uni-events",
          "signature": "IO (Channel a)",
          "source": "src/Events-Channels.html#newChannel",
          "type": "function"
        },
        "index": {
          "description": "Create new channel",
          "hierarchy": "Events Channels",
          "module": "Events.Channels",
          "name": "newChannel",
          "package": "uni-events",
          "partial": "Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Channels.html#v:newChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA DeleteQueue is a queue where entries can be deleted by an\n IO action.  This is a fairly specialised implementation, designed\n for event handling.\n\u003c/p\u003e\u003cp\u003eQueue entries are either active or invalid.  Once invalid,\n removeQueue will not return them, but they still take up (a little) memory.\n\u003c/p\u003e\u003cp\u003eaddQueue, removeQueue, isEmptyQueue, cleanQueue all take a delete queue\n as argument.  We assume that this argument is not used again.\n\u003c/p\u003e\u003cp\u003eEither removeQueue or isEmptyQueue or cleanQueue should be run\n occasionally, to remove invalid entries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Events.DeleteQueue",
          "name": "DeleteQueue",
          "package": "uni-events",
          "source": "src/Events-DeleteQueue.html",
          "type": "module"
        },
        "index": {
          "description": "DeleteQueue is queue where entries can be deleted by an IO action This is fairly specialised implementation designed for event handling Queue entries are either active or invalid Once invalid removeQueue will not return them but they still take up little memory addQueue removeQueue isEmptyQueue cleanQueue all take delete queue as argument We assume that this argument is not used again Either removeQueue or isEmptyQueue or cleanQueue should be run occasionally to remove invalid entries",
          "hierarchy": "Events DeleteQueue",
          "module": "Events.DeleteQueue",
          "name": "DeleteQueue",
          "package": "uni-events",
          "partial": "Delete Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-DeleteQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.DeleteQueue",
          "name": "DeleteQueue",
          "package": "uni-events",
          "source": "src/Events-DeleteQueue.html#DeleteQueue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Events DeleteQueue",
          "module": "Events.DeleteQueue",
          "name": "DeleteQueue",
          "package": "uni-events",
          "partial": "Delete Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-DeleteQueue.html#t:DeleteQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.DeleteQueue",
          "name": "addQueue",
          "package": "uni-events",
          "signature": "DeleteQueue v -\u003e v -\u003e IO (DeleteQueue v, IO ())",
          "source": "src/Events-DeleteQueue.html#addQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events DeleteQueue",
          "module": "Events.DeleteQueue",
          "name": "addQueue",
          "normalized": "DeleteQueue a-\u003ea-\u003eIO(DeleteQueue a,IO())",
          "package": "uni-events",
          "partial": "Queue",
          "signature": "DeleteQueue v-\u003ev-\u003eIO(DeleteQueue v,IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-DeleteQueue.html#v:addQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.DeleteQueue",
          "name": "cleanQueue",
          "package": "uni-events",
          "signature": "DeleteQueue v -\u003e IO (DeleteQueue v)",
          "source": "src/Events-DeleteQueue.html#cleanQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events DeleteQueue",
          "module": "Events.DeleteQueue",
          "name": "cleanQueue",
          "normalized": "DeleteQueue a-\u003eIO(DeleteQueue a)",
          "package": "uni-events",
          "partial": "Queue",
          "signature": "DeleteQueue v-\u003eIO(DeleteQueue v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-DeleteQueue.html#v:cleanQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.DeleteQueue",
          "name": "emptyQueue",
          "package": "uni-events",
          "signature": "DeleteQueue v",
          "source": "src/Events-DeleteQueue.html#emptyQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events DeleteQueue",
          "module": "Events.DeleteQueue",
          "name": "emptyQueue",
          "package": "uni-events",
          "partial": "Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-DeleteQueue.html#v:emptyQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.DeleteQueue",
          "name": "isEmptyQueue",
          "package": "uni-events",
          "signature": "DeleteQueue v -\u003e IO (Maybe (DeleteQueue v))",
          "source": "src/Events-DeleteQueue.html#isEmptyQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events DeleteQueue",
          "module": "Events.DeleteQueue",
          "name": "isEmptyQueue",
          "normalized": "DeleteQueue a-\u003eIO(Maybe(DeleteQueue a))",
          "package": "uni-events",
          "partial": "Empty Queue",
          "signature": "DeleteQueue v-\u003eIO(Maybe(DeleteQueue v))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-DeleteQueue.html#v:isEmptyQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.DeleteQueue",
          "name": "removeQueue",
          "package": "uni-events",
          "signature": "DeleteQueue v -\u003e IO (Maybe (v, DeleteQueue v, DeleteQueue v))",
          "source": "src/Events-DeleteQueue.html#removeQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events DeleteQueue",
          "module": "Events.DeleteQueue",
          "name": "removeQueue",
          "normalized": "DeleteQueue a-\u003eIO(Maybe(a,DeleteQueue a,DeleteQueue a))",
          "package": "uni-events",
          "partial": "Queue",
          "signature": "DeleteQueue v-\u003eIO(Maybe(v,DeleteQueue v,DeleteQueue v))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-DeleteQueue.html#v:removeQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThings which instance Destroyable and Destructible can be destroyed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Events.Destructible",
          "name": "Destructible",
          "package": "uni-events",
          "source": "src/Events-Destructible.html",
          "type": "module"
        },
        "index": {
          "description": "Things which instance Destroyable and Destructible can be destroyed",
          "hierarchy": "Events Destructible",
          "module": "Events.Destructible",
          "name": "Destructible",
          "package": "uni-events",
          "partial": "Destructible",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Destructible.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Destructible",
          "name": "Destroyable",
          "package": "uni-events",
          "source": "src/Events-Destructible.html#Destroyable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Events Destructible",
          "module": "Events.Destructible",
          "name": "Destroyable",
          "package": "uni-events",
          "partial": "Destroyable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Destructible.html#t:Destroyable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Destructible",
          "name": "Destructible",
          "package": "uni-events",
          "source": "src/Events-Destructible.html#Destructible",
          "type": "class"
        },
        "index": {
          "hierarchy": "Events Destructible",
          "module": "Events.Destructible",
          "name": "Destructible",
          "package": "uni-events",
          "partial": "Destructible",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Destructible.html#t:Destructible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroys an object\n\u003c/p\u003e",
          "module": "Events.Destructible",
          "name": "destroy",
          "package": "uni-events",
          "signature": "o -\u003e IO ()",
          "source": "src/Events-Destructible.html#destroy",
          "type": "method"
        },
        "index": {
          "description": "Destroys an object",
          "hierarchy": "Events Destructible",
          "module": "Events.Destructible",
          "name": "destroy",
          "normalized": "a-\u003eIO()",
          "package": "uni-events",
          "signature": "o-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Destructible.html#v:destroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event which occurs when the object is destroyed.\n\u003c/p\u003e",
          "module": "Events.Destructible",
          "name": "destroyed",
          "package": "uni-events",
          "signature": "o -\u003e Event ()",
          "source": "src/Events-Destructible.html#destroyed",
          "type": "method"
        },
        "index": {
          "description": "An event which occurs when the object is destroyed",
          "hierarchy": "Events Destructible",
          "module": "Events.Destructible",
          "name": "destroyed",
          "normalized": "a-\u003eEvent()",
          "package": "uni-events",
          "signature": "o-\u003eEvent()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Destructible.html#v:destroyed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edoOnce can be used to produce an action which is identical\n to its argument, except that if it's already been called, it\n does nothing.\n\u003c/p\u003e",
          "module": "Events.Destructible",
          "name": "doOnce",
          "package": "uni-events",
          "signature": "IO () -\u003e IO (IO ())",
          "source": "src/Events-Destructible.html#doOnce",
          "type": "function"
        },
        "index": {
          "description": "doOnce can be used to produce an action which is identical to its argument except that if it already been called it does nothing",
          "hierarchy": "Events Destructible",
          "module": "Events.Destructible",
          "name": "doOnce",
          "normalized": "IO()-\u003eIO(IO())",
          "package": "uni-events",
          "partial": "Once",
          "signature": "IO()-\u003eIO(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Destructible.html#v:doOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere we create a simple guarded queue which allows guarding by equality\n according to an ordered key.  Thus guards have three values,\n match anything, match nothing, and match this value.\n\u003c/p\u003e\u003cp\u003eTo simplify the implementation, we specify that an Eq match has higher\n priority than a MatchAnything match, and when we must choose between\n values for MatchAnything, do not necessarily choose the first\n (more likely the one with the lowest key value).  But we do respect\n FIFO order when only Eq guards are involved.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Events.EqGuard",
          "name": "EqGuard",
          "package": "uni-events",
          "source": "src/Events-EqGuard.html",
          "type": "module"
        },
        "index": {
          "description": "Here we create simple guarded queue which allows guarding by equality according to an ordered key Thus guards have three values match anything match nothing and match this value To simplify the implementation we specify that an Eq match has higher priority than MatchAnything match and when we must choose between values for MatchAnything do not necessarily choose the first more likely the one with the lowest key value But we do respect FIFO order when only Eq guards are involved",
          "hierarchy": "Events EqGuard",
          "module": "Events.EqGuard",
          "name": "EqGuard",
          "package": "uni-events",
          "partial": "Eq Guard",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-EqGuard.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.EqGuard",
          "name": "EqGuardedChannel",
          "package": "uni-events",
          "source": "src/Events-EqGuard.html#EqGuardedChannel",
          "type": "type"
        },
        "index": {
          "hierarchy": "Events EqGuard",
          "module": "Events.EqGuard",
          "name": "EqGuardedChannel",
          "package": "uni-events",
          "partial": "Eq Guarded Channel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-EqGuard.html#t:EqGuardedChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.EqGuard",
          "name": "EqMatch",
          "package": "uni-events",
          "source": "src/Events-EqGuard.html#EqMatch",
          "type": "data"
        },
        "index": {
          "hierarchy": "Events EqGuard",
          "module": "Events.EqGuard",
          "name": "EqMatch",
          "package": "uni-events",
          "partial": "Eq Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-EqGuard.html#t:EqMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.EqGuard",
          "name": "Eq",
          "package": "uni-events",
          "signature": "Eq !key",
          "source": "src/Events-EqGuard.html#EqMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events EqGuard",
          "module": "Events.EqGuard",
          "name": "Eq",
          "package": "uni-events",
          "partial": "Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-EqGuard.html#v:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.EqGuard",
          "name": "EqMatchAny",
          "package": "uni-events",
          "signature": "EqMatchAny",
          "source": "src/Events-EqGuard.html#EqMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events EqGuard",
          "module": "Events.EqGuard",
          "name": "EqMatchAny",
          "package": "uni-events",
          "partial": "Eq Match Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-EqGuard.html#v:EqMatchAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.EqGuard",
          "name": "EqMatchNone",
          "package": "uni-events",
          "signature": "EqMatchNone",
          "source": "src/Events-EqGuard.html#EqMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events EqGuard",
          "module": "Events.EqGuard",
          "name": "EqMatchNone",
          "package": "uni-events",
          "partial": "Eq Match None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-EqGuard.html#v:EqMatchNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.EqGuard",
          "name": "newEqGuardedChannel",
          "package": "uni-events",
          "signature": "IO (EqGuardedChannel key value)",
          "source": "src/Events-EqGuard.html#newEqGuardedChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events EqGuard",
          "module": "Events.EqGuard",
          "name": "newEqGuardedChannel",
          "package": "uni-events",
          "partial": "Eq Guarded Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-EqGuard.html#v:newEqGuardedChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es and combinators for them.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Events.Events",
          "name": "Events",
          "package": "uni-events",
          "source": "src/Events-Events.html",
          "type": "module"
        },
        "index": {
          "description": "Event and combinators for them",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "Events",
          "package": "uni-events",
          "partial": "Events",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Events",
          "name": "Event",
          "package": "uni-events",
          "source": "src/Events-Events.html#Event",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "Event",
          "package": "uni-events",
          "partial": "Event",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHasEvent represents those event-like things which can be converted to\n an event.\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "HasEvent",
          "package": "uni-events",
          "source": "src/Events-Events.html#HasEvent",
          "type": "class"
        },
        "index": {
          "description": "HasEvent represents those event-like things which can be converted to an event",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "HasEvent",
          "package": "uni-events",
          "partial": "Has Event",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#t:HasEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHasReceive represents things like channels from which we can take values.\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "HasReceive",
          "package": "uni-events",
          "source": "src/Events-Events.html#HasReceive",
          "type": "class"
        },
        "index": {
          "description": "HasReceive represents things like channels from which we can take values",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "HasReceive",
          "package": "uni-events",
          "partial": "Has Receive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#t:HasReceive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHasSend represents things like channels on which we can send values\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "HasSend",
          "package": "uni-events",
          "source": "src/Events-Events.html#HasSend",
          "type": "class"
        },
        "index": {
          "description": "HasSend represents things like channels on which we can send values",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "HasSend",
          "package": "uni-events",
          "partial": "Has Send",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#t:HasSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Events",
          "name": "Request",
          "package": "uni-events",
          "source": "src/Events-Events.html#Request",
          "type": "data"
        },
        "index": {
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "Request",
          "package": "uni-events",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Events",
          "name": "Result",
          "package": "uni-events",
          "source": "src/Events-Events.html#Result",
          "type": "data"
        },
        "index": {
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "Result",
          "package": "uni-events",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoose between two events.  The first one takes priority.\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "(+\u003e)",
          "package": "uni-events",
          "signature": "Event a -\u003e Event a -\u003e Event a",
          "source": "src/Events-Events.html#%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Choose between two events The first one takes priority",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "(+\u003e) +\u003e",
          "normalized": "Event a-\u003eEvent a-\u003eEvent a",
          "package": "uni-events",
          "signature": "Event a-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:-43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach an action to be done after the event occurs.\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "(\u003e\u003e\u003e)",
          "package": "uni-events",
          "signature": "Event a -\u003e IO b -\u003e Event b",
          "source": "src/Events-Events.html#%3E%3E%3E",
          "type": "function"
        },
        "index": {
          "description": "Attach an action to be done after the event occurs",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
          "normalized": "Event a-\u003eIO b-\u003eEvent b",
          "package": "uni-events",
          "signature": "Event a-\u003eIO b-\u003eEvent b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:-62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach an action to be done after the event occurs.\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "(\u003e\u003e\u003e=)",
          "package": "uni-events",
          "signature": "Event a -\u003e (a -\u003e IO b) -\u003e Event b",
          "source": "src/Events-Events.html#%3E%3E%3E%3D",
          "type": "function"
        },
        "index": {
          "description": "Attach an action to be done after the event occurs",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "(\u003e\u003e\u003e=) \u003e\u003e\u003e=",
          "normalized": "Event a-\u003e(a-\u003eIO b)-\u003eEvent b",
          "package": "uni-events",
          "signature": "Event a-\u003e(a-\u003eIO b)-\u003eEvent b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:-62--62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Events",
          "name": "Awaiting",
          "package": "uni-events",
          "signature": "Awaiting (IO ())",
          "source": "src/Events-Events.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "Awaiting",
          "normalized": "Awaiting(IO())",
          "package": "uni-events",
          "partial": "Awaiting",
          "signature": "Awaiting(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:Awaiting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Events",
          "name": "AwaitingAlways",
          "package": "uni-events",
          "signature": "AwaitingAlways (IO ())",
          "source": "src/Events-Events.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "AwaitingAlways",
          "normalized": "AwaitingAlways(IO())",
          "package": "uni-events",
          "partial": "Awaiting Always",
          "signature": "AwaitingAlways(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:AwaitingAlways"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Events",
          "name": "Event",
          "package": "uni-events",
          "signature": "Event (Toggle -\u003e (IO a -\u003e IO ()) -\u003e IO Result)",
          "source": "src/Events-Events.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "Event",
          "normalized": "Event(Toggle-\u003e(IO a-\u003eIO())-\u003eIO Result)",
          "package": "uni-events",
          "partial": "Event",
          "signature": "Event(Toggle-\u003e(IO a-\u003eIO())-\u003eIO Result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Events",
          "name": "Immediate",
          "package": "uni-events",
          "signature": "Immediate",
          "source": "src/Events-Events.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "Immediate",
          "package": "uni-events",
          "partial": "Immediate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:Immediate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Events",
          "name": "Request",
          "package": "uni-events",
          "signature": "Request (a -\u003e IO (Event b, IO ()))",
          "source": "src/Events-Events.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "Request",
          "normalized": "Request(a-\u003eIO(Event b,IO()))",
          "package": "uni-events",
          "partial": "Request",
          "signature": "Request(a-\u003eIO(Event b,IO()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eallowWhile event1 event2 waits for event2, while handling event1.\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "allowWhile",
          "package": "uni-events",
          "signature": "Event () -\u003e Event a -\u003e Event a",
          "source": "src/Events-Events.html#allowWhile",
          "type": "function"
        },
        "index": {
          "description": "allowWhile event1 event2 waits for event2 while handling event1",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "allowWhile",
          "normalized": "Event()-\u003eEvent a-\u003eEvent a",
          "package": "uni-events",
          "partial": "While",
          "signature": "Event()-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:allowWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe event that always happens, immediately\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "always",
          "package": "uni-events",
          "signature": "IO a -\u003e Event a",
          "source": "src/Events-Events.html#always",
          "type": "function"
        },
        "index": {
          "description": "The event that always happens immediately",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "always",
          "normalized": "IO a-\u003eEvent a",
          "package": "uni-events",
          "signature": "IO a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoose between a list of events.\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "choose",
          "package": "uni-events",
          "signature": "[Event a] -\u003e Event a",
          "source": "src/Events-Events.html#choose",
          "type": "function"
        },
        "index": {
          "description": "Choose between list of events",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "choose",
          "normalized": "[Event a]-\u003eEvent a",
          "package": "uni-events",
          "signature": "[Event a]-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new event using an action which is called at each\n synchronisation\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "computeEvent",
          "package": "uni-events",
          "signature": "IO (Event a) -\u003e Event a",
          "source": "src/Events-Events.html#computeEvent",
          "type": "function"
        },
        "index": {
          "description": "Construct new event using an action which is called at each synchronisation",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "computeEvent",
          "normalized": "IO(Event a)-\u003eEvent a",
          "package": "uni-events",
          "partial": "Event",
          "signature": "IO(Event a)-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:computeEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Events",
          "name": "doRequest",
          "package": "uni-events",
          "signature": "Request a b -\u003e a -\u003e IO (Event b, IO ())",
          "source": "src/Events-Events.html#doRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "doRequest",
          "normalized": "Request a b-\u003ea-\u003eIO(Event b,IO())",
          "package": "uni-events",
          "partial": "Request",
          "signature": "Request a b-\u003ea-\u003eIO(Event b,IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:doRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Events",
          "name": "doneEvent",
          "package": "uni-events",
          "signature": "a -\u003e Event a",
          "source": "src/Events-Events.html#doneEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "doneEvent",
          "normalized": "a-\u003eEvent a",
          "package": "uni-events",
          "partial": "Event",
          "signature": "a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:doneEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget all we can get from the event without waiting.\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "getAllQueued",
          "package": "uni-events",
          "signature": "Event a -\u003e IO [a]",
          "source": "src/Events-Events.html#getAllQueued",
          "type": "function"
        },
        "index": {
          "description": "get all we can get from the event without waiting",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "getAllQueued",
          "normalized": "Event a-\u003eIO[a]",
          "package": "uni-events",
          "partial": "All Queued",
          "signature": "Event a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:getAllQueued"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe event that never happens\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "never",
          "package": "uni-events",
          "signature": "Event a",
          "source": "src/Events-Events.html#never",
          "type": "function"
        },
        "index": {
          "description": "The event that never happens",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "never",
          "package": "uni-events",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns an event into one which is always satisfied at once but registers\n the value to be done later.  WARNING - only to be used with events without\n actions attached, as any actions will not get done.  noWait is typically\n used with send events, where we don't want to wait for someone to pick up\n the value.\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "noWait",
          "package": "uni-events",
          "signature": "Event a -\u003e Event ()",
          "source": "src/Events-Events.html#noWait",
          "type": "function"
        },
        "index": {
          "description": "Turns an event into one which is always satisfied at once but registers the value to be done later WARNING only to be used with events without actions attached as any actions will not get done noWait is typically used with send events where we don want to wait for someone to pick up the value",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "noWait",
          "normalized": "Event a-\u003eEvent()",
          "package": "uni-events",
          "partial": "Wait",
          "signature": "Event a-\u003eEvent()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:noWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronise on an event, but return immediately with Nothing if it\n can't be satisfied at once.\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "poll",
          "package": "uni-events",
          "signature": "Event a -\u003e IO (Maybe a)",
          "source": "src/Events-Events.html#poll",
          "type": "function"
        },
        "index": {
          "description": "Synchronise on an event but return immediately with Nothing if it can be satisfied at once",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "poll",
          "normalized": "Event a-\u003eIO(Maybe a)",
          "package": "uni-events",
          "signature": "Event a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:poll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Events",
          "name": "receive",
          "package": "uni-events",
          "signature": "chan a -\u003e Event a",
          "source": "src/Events-Events.html#receive",
          "type": "method"
        },
        "index": {
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "receive",
          "normalized": "a b-\u003eEvent b",
          "package": "uni-events",
          "signature": "chan a-\u003eEvent a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a value from a channel (as an IO action)\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "receiveIO",
          "package": "uni-events",
          "signature": "chan a -\u003e IO a",
          "source": "src/Events-Events.html#receiveIO",
          "type": "function"
        },
        "index": {
          "description": "Get value from channel as an IO action",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "receiveIO",
          "normalized": "a b-\u003eIO b",
          "package": "uni-events",
          "partial": "IO",
          "signature": "chan a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:receiveIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Events",
          "name": "request",
          "package": "uni-events",
          "signature": "Request a b -\u003e a -\u003e IO b",
          "source": "src/Events-Events.html#request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "request",
          "normalized": "Request a b-\u003ea-\u003eIO b",
          "package": "uni-events",
          "signature": "Request a b-\u003ea-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Events",
          "name": "send",
          "package": "uni-events",
          "signature": "chan a -\u003e a -\u003e Event ()",
          "source": "src/Events-Events.html#send",
          "type": "method"
        },
        "index": {
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "send",
          "normalized": "a b-\u003eb-\u003eEvent()",
          "package": "uni-events",
          "signature": "chan a-\u003ea-\u003eEvent()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a value along a channel (as an IO action)\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "sendIO",
          "package": "uni-events",
          "signature": "chan a -\u003e a -\u003e IO ()",
          "source": "src/Events-Events.html#sendIO",
          "type": "function"
        },
        "index": {
          "description": "Send value along channel as an IO action",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "sendIO",
          "normalized": "a b-\u003eb-\u003eIO()",
          "package": "uni-events",
          "partial": "IO",
          "signature": "chan a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:sendIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronise on an event in a different thread.\n The kill action it returns is unsafe since it can cause deadlocks if\n it occurs at an awkward moment.  To avoid this use spawnEvent, if possible.\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "spawnEvent",
          "package": "uni-events",
          "signature": "Event () -\u003e IO (IO ())",
          "source": "src/Events-Events.html#spawnEvent",
          "type": "function"
        },
        "index": {
          "description": "Synchronise on an event in different thread The kill action it returns is unsafe since it can cause deadlocks if it occurs at an awkward moment To avoid this use spawnEvent if possible",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "spawnEvent",
          "normalized": "Event()-\u003eIO(IO())",
          "package": "uni-events",
          "partial": "Event",
          "signature": "Event()-\u003eIO(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:spawnEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronise on an event, waiting on it until it happens, then returning\n the attached value.\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "sync",
          "package": "uni-events",
          "signature": "Event a -\u003e IO a",
          "source": "src/Events-Events.html#sync",
          "type": "function"
        },
        "index": {
          "description": "Synchronise on an event waiting on it until it happens then returning the attached value",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "sync",
          "normalized": "Event a-\u003eIO a",
          "package": "uni-events",
          "signature": "Event a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:sync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister an event as synchronised but don't wait for it to complete.\n WARNING - only to be used with events without\n actions attached, as any actions will not get done.  noWait is typically\n used with send events, where we don't want to wait for someone to pick up\n the value.\n synchronise on something without waiting\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "syncNoWait",
          "package": "uni-events",
          "signature": "Event a -\u003e IO ()",
          "source": "src/Events-Events.html#syncNoWait",
          "type": "function"
        },
        "index": {
          "description": "Register an event as synchronised but don wait for it to complete WARNING only to be used with events without actions attached as any actions will not get done noWait is typically used with send events where we don want to wait for someone to pick up the value synchronise on something without waiting",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "syncNoWait",
          "normalized": "Event a-\u003eIO()",
          "package": "uni-events",
          "partial": "No Wait",
          "signature": "Event a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:syncNoWait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Events",
          "name": "thenEvent",
          "package": "uni-events",
          "signature": "Event a -\u003e Event b -\u003e Event b",
          "source": "src/Events-Events.html#thenEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "thenEvent",
          "normalized": "Event a-\u003eEvent b-\u003eEvent b",
          "package": "uni-events",
          "partial": "Event",
          "signature": "Event a-\u003eEvent b-\u003eEvent b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:thenEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Events",
          "name": "thenGetEvent",
          "package": "uni-events",
          "signature": "Event a -\u003e (a -\u003e Event b) -\u003e Event b",
          "source": "src/Events-Events.html#thenGetEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "thenGetEvent",
          "normalized": "Event a-\u003e(a-\u003eEvent b)-\u003eEvent b",
          "package": "uni-events",
          "partial": "Get Event",
          "signature": "Event a-\u003e(a-\u003eEvent b)-\u003eEvent b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:thenGetEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Events",
          "name": "toEvent",
          "package": "uni-events",
          "signature": "eventType a -\u003e Event a",
          "source": "src/Events-Events.html#toEvent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "toEvent",
          "normalized": "a b-\u003eEvent b",
          "package": "uni-events",
          "partial": "Event",
          "signature": "eventType a-\u003eEvent a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:toEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch an error if it occurs during an action attached to an event.\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "tryEV",
          "package": "uni-events",
          "signature": "Event a -\u003e Event (Either SomeException a)",
          "source": "src/Events-Events.html#tryEV",
          "type": "function"
        },
        "index": {
          "description": "Catch an error if it occurs during an action attached to an event",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "tryEV",
          "normalized": "Event a-\u003eEvent(Either SomeException a)",
          "package": "uni-events",
          "partial": "EV",
          "signature": "Event a-\u003eEvent(Either SomeException a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:tryEV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen we synchronise on wrapAbort preAction\n preAction is evaluated to yield (event,postAction).\n Then exactly one of the following:\n (1) thr event is satisfied, and postAction is not done.\n (2) some other event in this synchronisation is satisfied\n (so this one isn't), and postAction is done.\n (3) no event is satisfied (and so we will deadlock).\n\u003c/p\u003e",
          "module": "Events.Events",
          "name": "wrapAbort",
          "package": "uni-events",
          "signature": "IO (Event a, IO ()) -\u003e Event a",
          "source": "src/Events-Events.html#wrapAbort",
          "type": "function"
        },
        "index": {
          "description": "When we synchronise on wrapAbort preAction preAction is evaluated to yield event postAction Then exactly one of the following thr event is satisfied and postAction is not done some other event in this synchronisation is satisfied so this one isn and postAction is done no event is satisfied and so we will deadlock",
          "hierarchy": "Events Events",
          "module": "Events.Events",
          "name": "wrapAbort",
          "normalized": "IO(Event a,IO())-\u003eEvent a",
          "package": "uni-events",
          "partial": "Abort",
          "signature": "IO(Event a,IO())-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Events.html#v:wrapAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExamples is meant to contain examples of using events which\n are too small to go into their own module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Events.Examples",
          "name": "Examples",
          "package": "uni-events",
          "source": "src/Events-Examples.html",
          "type": "module"
        },
        "index": {
          "description": "Examples is meant to contain examples of using events which are too small to go into their own module",
          "hierarchy": "Events Examples",
          "module": "Events.Examples",
          "name": "Examples",
          "package": "uni-events",
          "partial": "Examples",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Examples.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Examples",
          "name": "EventSet",
          "package": "uni-events",
          "source": "src/Events-Examples.html#EventSet",
          "type": "data"
        },
        "index": {
          "hierarchy": "Events Examples",
          "module": "Events.Examples",
          "name": "EventSet",
          "package": "uni-events",
          "partial": "Event Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Examples.html#t:EventSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Examples",
          "name": "addToEventSet",
          "package": "uni-events",
          "signature": "EventSet a -\u003e Event a -\u003e EventSet a",
          "source": "src/Events-Examples.html#addToEventSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Examples",
          "module": "Events.Examples",
          "name": "addToEventSet",
          "normalized": "EventSet a-\u003eEvent a-\u003eEventSet a",
          "package": "uni-events",
          "partial": "To Event Set",
          "signature": "EventSet a-\u003eEvent a-\u003eEventSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Examples.html#v:addToEventSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Examples",
          "name": "emptyEventSet",
          "package": "uni-events",
          "signature": "EventSet a",
          "source": "src/Events-Examples.html#emptyEventSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Examples",
          "module": "Events.Examples",
          "name": "emptyEventSet",
          "package": "uni-events",
          "partial": "Event Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Examples.html#v:emptyEventSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Examples",
          "name": "fromEventSet",
          "package": "uni-events",
          "signature": "EventSet a -\u003e Event (a, EventSet a)",
          "source": "src/Events-Examples.html#fromEventSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Examples",
          "module": "Events.Examples",
          "name": "fromEventSet",
          "normalized": "EventSet a-\u003eEvent(a,EventSet a)",
          "package": "uni-events",
          "partial": "Event Set",
          "signature": "EventSet a-\u003eEvent(a,EventSet a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Examples.html#v:fromEventSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Examples",
          "name": "isEmptyEventSet",
          "package": "uni-events",
          "signature": "EventSet a -\u003e Bool",
          "source": "src/Events-Examples.html#isEmptyEventSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Examples",
          "module": "Events.Examples",
          "name": "isEmptyEventSet",
          "normalized": "EventSet a-\u003eBool",
          "package": "uni-events",
          "partial": "Empty Event Set",
          "signature": "EventSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Examples.html#v:isEmptyEventSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003espawnRepeatedEvent concurrently syncs on the event until the\n given action is used; it is somewhat safer than spawnEvent.\n It also never interrupts the handler event attached to\n the event.\n\u003c/p\u003e",
          "module": "Events.Examples",
          "name": "spawnRepeatedEvent",
          "package": "uni-events",
          "signature": "Event () -\u003e IO (IO ())",
          "source": "src/Events-Examples.html#spawnRepeatedEvent",
          "type": "function"
        },
        "index": {
          "description": "spawnRepeatedEvent concurrently syncs on the event until the given action is used it is somewhat safer than spawnEvent It also never interrupts the handler event attached to the event",
          "hierarchy": "Events Examples",
          "module": "Events.Examples",
          "name": "spawnRepeatedEvent",
          "normalized": "Event()-\u003eIO(IO())",
          "package": "uni-events",
          "partial": "Repeated Event",
          "signature": "Event()-\u003eIO(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Examples.html#v:spawnRepeatedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewatch is used for events like mouse motion events where\n if we can't find time we don't want them queued.\n The event returned waits until the original event next happens and\n returns it.  A worker thread is needed to run this; the attached action\n should be used to stop that thread when we are no longer interested.\n\u003c/p\u003e",
          "module": "Events.Examples",
          "name": "watch",
          "package": "uni-events",
          "signature": "Event a -\u003e IO (Event a, IO ())",
          "source": "src/Events-Examples.html#watch",
          "type": "function"
        },
        "index": {
          "description": "watch is used for events like mouse motion events where if we can find time we don want them queued The event returned waits until the original event next happens and returns it worker thread is needed to run this the attached action should be used to stop that thread when we are no longer interested",
          "hierarchy": "Events Examples",
          "module": "Events.Examples",
          "name": "watch",
          "normalized": "Event a-\u003eIO(Event a,IO())",
          "package": "uni-events",
          "signature": "Event a-\u003eIO(Event a,IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Examples.html#v:watch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFMQueue handles finite maps of delete queues, so that we\n can implement EqGuard.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Events.FMQueue",
          "name": "FMQueue",
          "package": "uni-events",
          "source": "src/Events-FMQueue.html",
          "type": "module"
        },
        "index": {
          "description": "FMQueue handles finite maps of delete queues so that we can implement EqGuard",
          "hierarchy": "Events FMQueue",
          "module": "Events.FMQueue",
          "name": "FMQueue",
          "package": "uni-events",
          "partial": "FMQueue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-FMQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.FMQueue",
          "name": "FMQueue",
          "package": "uni-events",
          "source": "src/Events-FMQueue.html#FMQueue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Events FMQueue",
          "module": "Events.FMQueue",
          "name": "FMQueue",
          "package": "uni-events",
          "partial": "FMQueue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-FMQueue.html#t:FMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.FMQueue",
          "name": "addFMQueue",
          "package": "uni-events",
          "signature": "FMQueue key contents -\u003e key -\u003e contents -\u003e IO (FMQueue key contents, IO ())",
          "source": "src/Events-FMQueue.html#addFMQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events FMQueue",
          "module": "Events.FMQueue",
          "name": "addFMQueue",
          "normalized": "FMQueue a b-\u003ea-\u003eb-\u003eIO(FMQueue a b,IO())",
          "package": "uni-events",
          "partial": "FMQueue",
          "signature": "FMQueue key contents-\u003ekey-\u003econtents-\u003eIO(FMQueue key contents,IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-FMQueue.html#v:addFMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.FMQueue",
          "name": "emptyFMQueue",
          "package": "uni-events",
          "signature": "FMQueue key contents",
          "source": "src/Events-FMQueue.html#emptyFMQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events FMQueue",
          "module": "Events.FMQueue",
          "name": "emptyFMQueue",
          "package": "uni-events",
          "partial": "FMQueue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-FMQueue.html#v:emptyFMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.FMQueue",
          "name": "removeFMQueue",
          "package": "uni-events",
          "signature": "FMQueue key contents -\u003e key -\u003e IO (Maybe (contents, FMQueue key contents), FMQueue key contents)",
          "source": "src/Events-FMQueue.html#removeFMQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events FMQueue",
          "module": "Events.FMQueue",
          "name": "removeFMQueue",
          "normalized": "FMQueue a b-\u003ea-\u003eIO(Maybe(b,FMQueue a b),FMQueue a b)",
          "package": "uni-events",
          "partial": "FMQueue",
          "signature": "FMQueue key contents-\u003ekey-\u003eIO(Maybe(contents,FMQueue key contents),FMQueue key contents)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-FMQueue.html#v:removeFMQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.FMQueue",
          "name": "removeFMQueueAny",
          "package": "uni-events",
          "signature": "FMQueue key contents -\u003e IO (Maybe (key, contents, FMQueue key contents), FMQueue key contents)",
          "source": "src/Events-FMQueue.html#removeFMQueueAny",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events FMQueue",
          "module": "Events.FMQueue",
          "name": "removeFMQueueAny",
          "normalized": "FMQueue a b-\u003eIO(Maybe(a,b,FMQueue a b),FMQueue a b)",
          "package": "uni-events",
          "partial": "FMQueue Any",
          "signature": "FMQueue key contents-\u003eIO(Maybe(key,contents,FMQueue key contents),FMQueue key contents)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-FMQueue.html#v:removeFMQueueAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGuardedEvents implements guarded events for channels.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Events.GuardedChannels",
          "name": "GuardedChannels",
          "package": "uni-events",
          "source": "src/Events-GuardedChannels.html",
          "type": "module"
        },
        "index": {
          "description": "GuardedEvents implements guarded events for channels",
          "hierarchy": "Events GuardedChannels",
          "module": "Events.GuardedChannels",
          "name": "GuardedChannels",
          "package": "uni-events",
          "partial": "Guarded Channels",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedChannels",
          "name": "CanSendX",
          "package": "uni-events",
          "source": "src/Events-GuardedChannels.html#CanSendX",
          "type": "class"
        },
        "index": {
          "hierarchy": "Events GuardedChannels",
          "module": "Events.GuardedChannels",
          "name": "CanSendX",
          "package": "uni-events",
          "partial": "Can Send",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#t:CanSendX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedChannels",
          "name": "GQ",
          "package": "uni-events",
          "source": "src/Events-GuardedChannels.html#GQ",
          "type": "type"
        },
        "index": {
          "hierarchy": "Events GuardedChannels",
          "module": "Events.GuardedChannels",
          "name": "GQ",
          "package": "uni-events",
          "partial": "GQ",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#t:GQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedChannels",
          "name": "GuardedChannel",
          "package": "uni-events",
          "source": "src/Events-GuardedChannels.html#GuardedChannel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Events GuardedChannels",
          "module": "Events.GuardedChannels",
          "name": "GuardedChannel",
          "package": "uni-events",
          "partial": "Guarded Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#t:GuardedChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedChannels",
          "name": "HasAdd",
          "package": "uni-events",
          "source": "src/Events-GuardedChannels.html#HasAdd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Events GuardedChannels",
          "module": "Events.GuardedChannels",
          "name": "HasAdd",
          "package": "uni-events",
          "partial": "Has Add",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#t:HasAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedChannels",
          "name": "HasEmpty",
          "package": "uni-events",
          "source": "src/Events-GuardedChannels.html#HasEmpty",
          "type": "class"
        },
        "index": {
          "hierarchy": "Events GuardedChannels",
          "module": "Events.GuardedChannels",
          "name": "HasEmpty",
          "package": "uni-events",
          "partial": "Has Empty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#t:HasEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedChannels",
          "name": "HasGuardedChannel",
          "package": "uni-events",
          "source": "src/Events-GuardedChannels.html#HasGuardedChannel",
          "type": "class"
        },
        "index": {
          "hierarchy": "Events GuardedChannels",
          "module": "Events.GuardedChannels",
          "name": "HasGuardedChannel",
          "package": "uni-events",
          "partial": "Has Guarded Channel",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#t:HasGuardedChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedChannels",
          "name": "HasRemove",
          "package": "uni-events",
          "source": "src/Events-GuardedChannels.html#HasRemove",
          "type": "class"
        },
        "index": {
          "hierarchy": "Events GuardedChannels",
          "module": "Events.GuardedChannels",
          "name": "HasRemove",
          "package": "uni-events",
          "partial": "Has Remove",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#t:HasRemove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedChannels",
          "name": "VQ",
          "package": "uni-events",
          "source": "src/Events-GuardedChannels.html#VQ",
          "type": "type"
        },
        "index": {
          "hierarchy": "Events GuardedChannels",
          "module": "Events.GuardedChannels",
          "name": "VQ",
          "package": "uni-events",
          "partial": "VQ",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#t:VQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedChannels",
          "name": "add",
          "package": "uni-events",
          "signature": "xQueue xData -\u003e x -\u003e xData -\u003e IO (xQueue xData, IO ())",
          "source": "src/Events-GuardedChannels.html#add",
          "type": "method"
        },
        "index": {
          "hierarchy": "Events GuardedChannels",
          "module": "Events.GuardedChannels",
          "name": "add",
          "normalized": "a b-\u003ec-\u003eb-\u003eIO(a b,IO())",
          "package": "uni-events",
          "signature": "xQueue xData-\u003ex-\u003exData-\u003eIO(xQueue xData,IO())",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedChannels",
          "name": "newEmpty",
          "package": "uni-events",
          "signature": "IO (xQueue xData)",
          "source": "src/Events-GuardedChannels.html#newEmpty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Events GuardedChannels",
          "module": "Events.GuardedChannels",
          "name": "newEmpty",
          "package": "uni-events",
          "partial": "Empty",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#v:newEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedChannels",
          "name": "newGuardedChannel",
          "package": "uni-events",
          "signature": "GQ guardQueue value -\u003e VQ valueQueue -\u003e IO (GuardedChannel guard value)",
          "source": "src/Events-GuardedChannels.html#newGuardedChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events GuardedChannels",
          "module": "Events.GuardedChannels",
          "name": "newGuardedChannel",
          "normalized": "GQ a b-\u003eVQ c-\u003eIO(GuardedChannel d b)",
          "package": "uni-events",
          "partial": "Guarded Channel",
          "signature": "GQ guardQueue value-\u003eVQ valueQueue-\u003eIO(GuardedChannel guard value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#v:newGuardedChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedChannels",
          "name": "remove",
          "package": "uni-events",
          "signature": "yQueue yData -\u003e x -\u003e IO (Maybe (y, yData, IO (yQueue yData)), yQueue yData)",
          "source": "src/Events-GuardedChannels.html#remove",
          "type": "method"
        },
        "index": {
          "hierarchy": "Events GuardedChannels",
          "module": "Events.GuardedChannels",
          "name": "remove",
          "normalized": "a b-\u003ec-\u003eIO(Maybe(d,b,IO(a b)),a b)",
          "package": "uni-events",
          "signature": "yQueue yData-\u003ex-\u003eIO(Maybe(y,yData,IO(yQueue yData)),yQueue yData)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedChannels",
          "name": "replace",
          "package": "uni-events",
          "signature": "GuardedChannel guard value -\u003e value -\u003e GuardedEvent guard (Maybe value)",
          "source": "src/Events-GuardedChannels.html#replace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events GuardedChannels",
          "module": "Events.GuardedChannels",
          "name": "replace",
          "normalized": "GuardedChannel a b-\u003eb-\u003eGuardedEvent a(Maybe b)",
          "package": "uni-events",
          "signature": "GuardedChannel guard value-\u003evalue-\u003eGuardedEvent guard(Maybe value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedChannels",
          "name": "sneak",
          "package": "uni-events",
          "signature": "GuardedChannel guard value -\u003e GuardedEvent guard (Maybe value)",
          "source": "src/Events-GuardedChannels.html#sneak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events GuardedChannels",
          "module": "Events.GuardedChannels",
          "name": "sneak",
          "normalized": "GuardedChannel a b-\u003eGuardedEvent a(Maybe b)",
          "package": "uni-events",
          "signature": "GuardedChannel guard value-\u003eGuardedEvent guard(Maybe value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedChannels.html#v:sneak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn GuardedEvents we extend the notion of PrimEvents to allow Guarded\n Events, which can be guarded with the new (|\u003e) operator.  GuardedChannels\n will implement guarded events on channels, which will hopefully be the\n only guarded event we will ever need.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Events.GuardedEvents",
          "name": "GuardedEvents",
          "package": "uni-events",
          "source": "src/Events-GuardedEvents.html",
          "type": "module"
        },
        "index": {
          "description": "In GuardedEvents we extend the notion of PrimEvents to allow Guarded Events which can be guarded with the new operator GuardedChannels will implement guarded events on channels which will hopefully be the only guarded event we will ever need",
          "hierarchy": "Events GuardedEvents",
          "module": "Events.GuardedEvents",
          "name": "GuardedEvents",
          "package": "uni-events",
          "partial": "Guarded Events",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Guard represents some condition on a value which we impose on\n a channel, selecting those values we are interested in.\n\u003c/p\u003e",
          "module": "Events.GuardedEvents",
          "name": "Guard",
          "package": "uni-events",
          "source": "src/Events-GuardedEvents.html#Guard",
          "type": "class"
        },
        "index": {
          "description": "Guard represents some condition on value which we impose on channel selecting those values we are interested in",
          "hierarchy": "Events GuardedEvents",
          "module": "Events.GuardedEvents",
          "name": "Guard",
          "package": "uni-events",
          "partial": "Guard",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#t:Guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GuardedEvent guard a represents a source of values of type a, which\n may be selected from according to guards of type guard.\n\u003c/p\u003e",
          "module": "Events.GuardedEvents",
          "name": "GuardedEvent",
          "package": "uni-events",
          "source": "src/Events-GuardedEvents.html#GuardedEvent",
          "type": "data"
        },
        "index": {
          "description": "GuardedEvent guard represents source of values of type which may be selected from according to guards of type guard",
          "hierarchy": "Events GuardedEvents",
          "module": "Events.GuardedEvents",
          "name": "GuardedEvent",
          "package": "uni-events",
          "partial": "Guarded Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#t:GuardedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedEvents",
          "name": "HasGuard",
          "package": "uni-events",
          "source": "src/Events-GuardedEvents.html#HasGuard",
          "type": "class"
        },
        "index": {
          "hierarchy": "Events GuardedEvents",
          "module": "Events.GuardedEvents",
          "name": "HasGuard",
          "package": "uni-events",
          "partial": "Has Guard",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#t:HasGuard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of those channels which have guarded events.\n\u003c/p\u003e",
          "module": "Events.GuardedEvents",
          "name": "HasListen",
          "package": "uni-events",
          "source": "src/Events-GuardedEvents.html#HasListen",
          "type": "class"
        },
        "index": {
          "description": "Class of those channels which have guarded events",
          "hierarchy": "Events GuardedEvents",
          "module": "Events.GuardedEvents",
          "name": "HasListen",
          "package": "uni-events",
          "partial": "Has Listen",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#t:HasListen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedEvents",
          "name": "(|\u003e)",
          "package": "uni-events",
          "signature": "eventType a -\u003e guard -\u003e eventType a",
          "source": "src/Events-GuardedEvents.html#%7C%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Events GuardedEvents",
          "module": "Events.GuardedEvents",
          "name": "(|\u003e) |\u003e",
          "normalized": "a b-\u003ec-\u003ea b",
          "package": "uni-events",
          "signature": "eventType a-\u003eguard-\u003eeventType a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedEvents",
          "name": "GuardedEvent",
          "package": "uni-events",
          "signature": "GuardedEvent !(guard -\u003e Event a) !guard",
          "source": "src/Events-GuardedEvents.html#GuardedEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events GuardedEvents",
          "module": "Events.GuardedEvents",
          "name": "GuardedEvent",
          "normalized": "GuardedEvent(a-\u003eEvent b)a",
          "package": "uni-events",
          "partial": "Guarded Event",
          "signature": "GuardedEvent(guard-\u003eEvent a)guard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#v:GuardedEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis should be the guard that corresponds to the conjunction\n of the two given guards.\n\u003c/p\u003e",
          "module": "Events.GuardedEvents",
          "name": "andGuard",
          "package": "uni-events",
          "signature": "guard -\u003e guard -\u003e guard",
          "source": "src/Events-GuardedEvents.html#andGuard",
          "type": "method"
        },
        "index": {
          "description": "this should be the guard that corresponds to the conjunction of the two given guards",
          "hierarchy": "Events GuardedEvents",
          "module": "Events.GuardedEvents",
          "name": "andGuard",
          "normalized": "a-\u003ea-\u003ea",
          "package": "uni-events",
          "partial": "Guard",
          "signature": "guard-\u003eguard-\u003eguard",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#v:andGuard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.GuardedEvents",
          "name": "listen",
          "package": "uni-events",
          "signature": "chan guard a -\u003e GuardedEvent guard a",
          "source": "src/Events-GuardedEvents.html#listen",
          "type": "method"
        },
        "index": {
          "hierarchy": "Events GuardedEvents",
          "module": "Events.GuardedEvents",
          "name": "listen",
          "normalized": "a b c-\u003eGuardedEvent b c",
          "package": "uni-events",
          "signature": "chan guard a-\u003eGuardedEvent guard a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis should be the guard that always matches\n\u003c/p\u003e",
          "module": "Events.GuardedEvents",
          "name": "nullGuard",
          "package": "uni-events",
          "signature": "guard",
          "source": "src/Events-GuardedEvents.html#nullGuard",
          "type": "method"
        },
        "index": {
          "description": "this should be the guard that always matches",
          "hierarchy": "Events GuardedEvents",
          "module": "Events.GuardedEvents",
          "name": "nullGuard",
          "package": "uni-events",
          "partial": "Guard",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-GuardedEvents.html#v:nullGuard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere we implement a null guard channel that provides no guards,\n but is hopefully useful as an example.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Events.NullGuard",
          "name": "NullGuard",
          "package": "uni-events",
          "source": "src/Events-NullGuard.html",
          "type": "module"
        },
        "index": {
          "description": "Here we implement null guard channel that provides no guards but is hopefully useful as an example",
          "hierarchy": "Events NullGuard",
          "module": "Events.NullGuard",
          "name": "NullGuard",
          "package": "uni-events",
          "partial": "Null Guard",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-NullGuard.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.NullGuard",
          "name": "NullGuardedChannel",
          "package": "uni-events",
          "source": "src/Events-NullGuard.html#NullGuardedChannel",
          "type": "type"
        },
        "index": {
          "hierarchy": "Events NullGuard",
          "module": "Events.NullGuard",
          "name": "NullGuardedChannel",
          "package": "uni-events",
          "partial": "Null Guarded Channel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-NullGuard.html#t:NullGuardedChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.NullGuard",
          "name": "newNullGuardedChannel",
          "package": "uni-events",
          "signature": "IO (NullGuardedChannel value)",
          "source": "src/Events-NullGuard.html#newNullGuardedChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events NullGuard",
          "module": "Events.NullGuard",
          "name": "newNullGuardedChannel",
          "package": "uni-events",
          "partial": "Null Guarded Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-NullGuard.html#v:newNullGuardedChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRefQueue are standard non-functional\n queues using pointers (aka IORefs).  Events can be deleted asynchronously,\n but this is done only by nulling the cell they are contained in, otherwise\n we would need to double-link.   Other operations, IE the push and pop\n function must not occur on the same queue concurrently.\n\u003c/p\u003e\u003cp\u003eAlthough the queues are impure, we return the new queue to be used\n in future after push and search operations.\n\u003c/p\u003e\u003cp\u003eRefQueue are intended for use for queues of guarded strings,\n hence the specialised implementation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Events.RefQueue",
          "name": "RefQueue",
          "package": "uni-events",
          "source": "src/Events-RefQueue.html",
          "type": "module"
        },
        "index": {
          "description": "RefQueue are standard non-functional queues using pointers aka IORefs Events can be deleted asynchronously but this is done only by nulling the cell they are contained in otherwise we would need to double-link Other operations IE the push and pop function must not occur on the same queue concurrently Although the queues are impure we return the new queue to be used in future after push and search operations RefQueue are intended for use for queues of guarded strings hence the specialised implementation",
          "hierarchy": "Events RefQueue",
          "module": "Events.RefQueue",
          "name": "RefQueue",
          "package": "uni-events",
          "partial": "Ref Queue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-RefQueue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.RefQueue",
          "name": "RefQueue",
          "package": "uni-events",
          "source": "src/Events-RefQueue.html#RefQueue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Events RefQueue",
          "module": "Events.RefQueue",
          "name": "RefQueue",
          "package": "uni-events",
          "partial": "Ref Queue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-RefQueue.html#t:RefQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.RefQueue",
          "name": "newRefQueue",
          "package": "uni-events",
          "signature": "IO (RefQueue a)",
          "source": "src/Events-RefQueue.html#newRefQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events RefQueue",
          "module": "Events.RefQueue",
          "name": "newRefQueue",
          "package": "uni-events",
          "partial": "Ref Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-RefQueue.html#v:newRefQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.RefQueue",
          "name": "pushRefQueue",
          "package": "uni-events",
          "signature": "RefQueue a -\u003e a -\u003e IO (RefQueue a, IO ())",
          "source": "src/Events-RefQueue.html#pushRefQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events RefQueue",
          "module": "Events.RefQueue",
          "name": "pushRefQueue",
          "normalized": "RefQueue a-\u003ea-\u003eIO(RefQueue a,IO())",
          "package": "uni-events",
          "partial": "Ref Queue",
          "signature": "RefQueue a-\u003ea-\u003eIO(RefQueue a,IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-RefQueue.html#v:pushRefQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.RefQueue",
          "name": "searchRefQueue",
          "package": "uni-events",
          "signature": "RefQueue a -\u003e (a -\u003e Bool) -\u003e IO (Maybe (a, IO (RefQueue a)), RefQueue a)",
          "source": "src/Events-RefQueue.html#searchRefQueue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events RefQueue",
          "module": "Events.RefQueue",
          "name": "searchRefQueue",
          "normalized": "RefQueue a-\u003e(a-\u003eBool)-\u003eIO(Maybe(a,IO(RefQueue a)),RefQueue a)",
          "package": "uni-events",
          "partial": "Ref Queue",
          "signature": "RefQueue a-\u003e(a-\u003eBool)-\u003eIO(Maybe(a,IO(RefQueue a)),RefQueue a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-RefQueue.html#v:searchRefQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSpawn provides an interface to Concurrent.forkIO which is supposed\n to be implementable for both Hugs and GHC.\n\u003c/p\u003e\u003cp\u003eThis is the GHC implementation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Events.Spawn",
          "name": "Spawn",
          "package": "uni-events",
          "source": "src/Events-Spawn.html",
          "type": "module"
        },
        "index": {
          "description": "Spawn provides an interface to Concurrent.forkIO which is supposed to be implementable for both Hugs and GHC This is the GHC implementation",
          "hierarchy": "Events Spawn",
          "module": "Events.Spawn",
          "name": "Spawn",
          "package": "uni-events",
          "partial": "Spawn",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Spawn.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo a fork, returning an action which may attempt to\n kill the forked thread.  (Or may not . . .)\n\u003c/p\u003e",
          "module": "Events.Spawn",
          "name": "spawn",
          "package": "uni-events",
          "signature": "IO () -\u003e IO (IO ())",
          "source": "src/Events-Spawn.html#spawn",
          "type": "function"
        },
        "index": {
          "description": "Do fork returning an action which may attempt to kill the forked thread Or may not",
          "hierarchy": "Events Spawn",
          "module": "Events.Spawn",
          "name": "spawn",
          "normalized": "IO()-\u003eIO(IO())",
          "package": "uni-events",
          "signature": "IO()-\u003eIO(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Spawn.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Synchronized",
          "name": "Synchronized",
          "package": "uni-events",
          "source": "src/Events-Synchronized.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Events Synchronized",
          "module": "Events.Synchronized",
          "name": "Synchronized",
          "package": "uni-events",
          "partial": "Synchronized",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Synchronized.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Synchronized",
          "name": "Synchronized",
          "package": "uni-events",
          "source": "src/Events-Synchronized.html#Synchronized",
          "type": "class"
        },
        "index": {
          "hierarchy": "Events Synchronized",
          "module": "Events.Synchronized",
          "name": "Synchronized",
          "package": "uni-events",
          "partial": "Synchronized",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Synchronized.html#t:Synchronized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eacquire lock on a, and while we've got it do this action.\n\u003c/p\u003e",
          "module": "Events.Synchronized",
          "name": "synchronize",
          "package": "uni-events",
          "signature": "a -\u003e IO b -\u003e IO b",
          "source": "src/Events-Synchronized.html#synchronize",
          "type": "method"
        },
        "index": {
          "description": "acquire lock on and while we ve got it do this action",
          "hierarchy": "Events Synchronized",
          "module": "Events.Synchronized",
          "name": "synchronize",
          "normalized": "a-\u003eIO b-\u003eIO b",
          "package": "uni-events",
          "signature": "a-\u003eIO b-\u003eIO b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Synchronized.html#v:synchronize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA toggle is a switch initially True, which can only be made false\n (when some action is performed, say).  This module implements\n toggles, allowing atomic switching to false of 1 toggle, or\n 2 toggles together.  To avoid deadlock we use a supply of unique\n integers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Events.Toggle",
          "name": "Toggle",
          "package": "uni-events",
          "source": "src/Events-Toggle.html",
          "type": "module"
        },
        "index": {
          "description": "toggle is switch initially True which can only be made false when some action is performed say This module implements toggles allowing atomic switching to false of toggle or toggles together To avoid deadlock we use supply of unique integers",
          "hierarchy": "Events Toggle",
          "module": "Events.Toggle",
          "name": "Toggle",
          "package": "uni-events",
          "partial": "Toggle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Toggle",
          "name": "SimpleToggle",
          "package": "uni-events",
          "source": "src/Events-Toggle.html#SimpleToggle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Events Toggle",
          "module": "Events.Toggle",
          "name": "SimpleToggle",
          "package": "uni-events",
          "partial": "Simple Toggle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#t:SimpleToggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Toggle",
          "name": "Toggle",
          "package": "uni-events",
          "source": "src/Events-Toggle.html#Toggle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Events Toggle",
          "module": "Events.Toggle",
          "name": "Toggle",
          "package": "uni-events",
          "partial": "Toggle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#t:Toggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Toggle",
          "name": "ifSimpleToggle",
          "package": "uni-events",
          "signature": "SimpleToggle -\u003e IO () -\u003e IO ()",
          "source": "src/Events-Toggle.html#ifSimpleToggle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Toggle",
          "module": "Events.Toggle",
          "name": "ifSimpleToggle",
          "normalized": "SimpleToggle-\u003eIO()-\u003eIO()",
          "package": "uni-events",
          "partial": "Simple Toggle",
          "signature": "SimpleToggle-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#v:ifSimpleToggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Toggle",
          "name": "ifToggle",
          "package": "uni-events",
          "signature": "Toggle -\u003e IO () -\u003e IO ()",
          "source": "src/Events-Toggle.html#ifToggle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Toggle",
          "module": "Events.Toggle",
          "name": "ifToggle",
          "normalized": "Toggle-\u003eIO()-\u003eIO()",
          "package": "uni-events",
          "partial": "Toggle",
          "signature": "Toggle-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#v:ifToggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Toggle",
          "name": "newSimpleToggle",
          "package": "uni-events",
          "signature": "IO SimpleToggle",
          "source": "src/Events-Toggle.html#newSimpleToggle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Toggle",
          "module": "Events.Toggle",
          "name": "newSimpleToggle",
          "package": "uni-events",
          "partial": "Simple Toggle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#v:newSimpleToggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Toggle",
          "name": "newToggle",
          "package": "uni-events",
          "signature": "IO Toggle",
          "source": "src/Events-Toggle.html#newToggle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Toggle",
          "module": "Events.Toggle",
          "name": "newToggle",
          "package": "uni-events",
          "partial": "Toggle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#v:newToggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Toggle",
          "name": "peekToggle",
          "package": "uni-events",
          "signature": "Toggle -\u003e IO Bool",
          "source": "src/Events-Toggle.html#peekToggle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Toggle",
          "module": "Events.Toggle",
          "name": "peekToggle",
          "normalized": "Toggle-\u003eIO Bool",
          "package": "uni-events",
          "partial": "Toggle",
          "signature": "Toggle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#v:peekToggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Toggle",
          "name": "simpleToggle",
          "package": "uni-events",
          "signature": "SimpleToggle -\u003e IO Bool",
          "source": "src/Events-Toggle.html#simpleToggle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Toggle",
          "module": "Events.Toggle",
          "name": "simpleToggle",
          "normalized": "SimpleToggle-\u003eIO Bool",
          "package": "uni-events",
          "partial": "Toggle",
          "signature": "SimpleToggle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#v:simpleToggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Toggle",
          "name": "toggle1",
          "package": "uni-events",
          "signature": "Toggle -\u003e IO Bool",
          "source": "src/Events-Toggle.html#toggle1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Toggle",
          "module": "Events.Toggle",
          "name": "toggle1",
          "normalized": "Toggle-\u003eIO Bool",
          "package": "uni-events",
          "signature": "Toggle-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#v:toggle1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Events.Toggle",
          "name": "toggle2",
          "package": "uni-events",
          "signature": "Toggle -\u003e Toggle -\u003e IO (Maybe (Bool, Bool))",
          "source": "src/Events-Toggle.html#toggle2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Events Toggle",
          "module": "Events.Toggle",
          "name": "toggle2",
          "normalized": "Toggle-\u003eToggle-\u003eIO(Maybe(Bool,Bool))",
          "package": "uni-events",
          "signature": "Toggle-\u003eToggle-\u003eIO(Maybe(Bool,Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uni-events/docs/Events-Toggle.html#v:toggle2"
      }
    }
  ]
]