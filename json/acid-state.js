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
        "word": "acid-state"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHome of the more specialized functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Acid.Advanced",
          "name": "Advanced",
          "package": "acid-state",
          "source": "src/Data-Acid-Advanced.html",
          "type": "module"
        },
        "index": {
          "description": "Home of the more specialized functions",
          "hierarchy": "Data Acid Advanced",
          "module": "Data.Acid.Advanced",
          "name": "Advanced",
          "package": "acid-state",
          "partial": "Advanced",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Advanced.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe distinguish between events that modify the state and those that do not.\n\u003c/p\u003e\u003cp\u003eUpdateEvents are executed in a MonadState context and have to be serialized\n   to disk before they are considered durable.\n\u003c/p\u003e\u003cp\u003eQueryEvents are executed in a MonadReader context and obviously do not have\n   to be serialized to disk.\n\u003c/p\u003e",
          "module": "Data.Acid.Advanced",
          "name": "Event",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#Event",
          "type": "data"
        },
        "index": {
          "description": "We distinguish between events that modify the state and those that do not UpdateEvents are executed in MonadState context and have to be serialized to disk before they are considered durable QueryEvents are executed in MonadReader context and obviously do not have to be serialized to disk",
          "hierarchy": "Data Acid Advanced",
          "module": "Data.Acid.Advanced",
          "name": "Event",
          "package": "acid-state",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Advanced.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid.Advanced",
          "name": "IsAcidic",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#IsAcidic",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Acid Advanced",
          "module": "Data.Acid.Advanced",
          "name": "IsAcidic",
          "package": "acid-state",
          "partial": "Is Acidic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Advanced.html#t:IsAcidic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic Method class. Each Method has an indexed result type\n   and a unique tag.\n\u003c/p\u003e",
          "module": "Data.Acid.Advanced",
          "name": "Method",
          "package": "acid-state",
          "source": "src/Data-Acid-Core.html#Method",
          "type": "class"
        },
        "index": {
          "description": "The basic Method class Each Method has an indexed result type and unique tag",
          "hierarchy": "Data Acid Advanced",
          "module": "Data.Acid.Advanced",
          "name": "Method",
          "package": "acid-state",
          "partial": "Method",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Advanced.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Acid.Advanced\",\"Data.Acid.Memory.Pure\"]",
          "name": "QueryEvent",
          "package": "acid-state",
          "signature": "(ev -\u003e Query (EventState ev) (EventResult ev)) -\u003e Event (EventState ev)",
          "source": "src/Data-Acid-Common.html#Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Advanced.html#v:QueryEvent\",\"http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#v:QueryEvent\"]"
        },
        "index": {
          "hierarchy": "Data Acid Advanced",
          "module": "Data.Acid.Advanced",
          "name": "QueryEvent",
          "normalized": "(a-\u003eQuery(EventState a)(EventResult a))-\u003eEvent(EventState a)",
          "package": "acid-state",
          "partial": "Query Event",
          "signature": "(ev-\u003eQuery(EventState ev)(EventResult ev))-\u003eEvent(EventState ev)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Advanced.html#v:QueryEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Acid.Advanced\",\"Data.Acid.Memory.Pure\"]",
          "name": "UpdateEvent",
          "package": "acid-state",
          "signature": "(ev -\u003e Update (EventState ev) (EventResult ev)) -\u003e Event (EventState ev)",
          "source": "src/Data-Acid-Common.html#Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Advanced.html#v:UpdateEvent\",\"http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#v:UpdateEvent\"]"
        },
        "index": {
          "hierarchy": "Data Acid Advanced",
          "module": "Data.Acid.Advanced",
          "name": "UpdateEvent",
          "normalized": "(a-\u003eUpdate(EventState a)(EventResult a))-\u003eEvent(EventState a)",
          "package": "acid-state",
          "partial": "Update Event",
          "signature": "(ev-\u003eUpdate(EventState ev)(EventResult ev))-\u003eEvent(EventState ev)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Advanced.html#v:UpdateEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid.Advanced",
          "name": "acidEvents",
          "package": "acid-state",
          "signature": "acidEvents",
          "source": "src/Data-Acid-Common.html#acidEvents",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Acid Advanced",
          "module": "Data.Acid.Advanced",
          "name": "acidEvents",
          "package": "acid-state",
          "partial": "Events",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Advanced.html#v:acidEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSchedule multiple Update events and wait for them to be durable, but\n   throw away their results. This is useful for importing existing\n   datasets into an AcidState.\n\u003c/p\u003e",
          "module": "Data.Acid.Advanced",
          "name": "groupUpdates",
          "package": "acid-state",
          "signature": "AcidState (EventState event) -\u003e [event] -\u003e IO ()",
          "source": "src/Data-Acid-Abstract.html#groupUpdates",
          "type": "function"
        },
        "index": {
          "description": "Schedule multiple Update events and wait for them to be durable but throw away their results This is useful for importing existing datasets into an AcidState",
          "hierarchy": "Data Acid Advanced",
          "module": "Data.Acid.Advanced",
          "name": "groupUpdates",
          "normalized": "AcidState(EventState a)-\u003e[a]-\u003eIO()",
          "package": "acid-state",
          "partial": "Updates",
          "signature": "AcidState(EventState event)-\u003e[event]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Advanced.html#v:groupUpdates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid.Advanced",
          "name": "methodTag",
          "package": "acid-state",
          "signature": "ev -\u003e Tag",
          "source": "src/Data-Acid-Core.html#methodTag",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Acid Advanced",
          "module": "Data.Acid.Advanced",
          "name": "methodTag",
          "normalized": "a-\u003eTag",
          "package": "acid-state",
          "partial": "Tag",
          "signature": "ev-\u003eTag",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Advanced.html#v:methodTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e but lifted into any monad capable of doing IO.\n\u003c/p\u003e",
          "module": "Data.Acid.Advanced",
          "name": "query'",
          "package": "acid-state",
          "signature": "AcidState (EventState event) -\u003e event -\u003e m (EventResult event)",
          "source": "src/Data-Acid-Abstract.html#query%27",
          "type": "function"
        },
        "index": {
          "description": "Same as query but lifted into any monad capable of doing IO",
          "hierarchy": "Data Acid Advanced",
          "module": "Data.Acid.Advanced",
          "name": "query'",
          "normalized": "AcidState(EventState a)-\u003ea-\u003eb(EventResult a)",
          "package": "acid-state",
          "signature": "AcidState(EventState event)-\u003eevent-\u003em(EventResult event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Advanced.html#v:query-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIssue an Update event and return immediately. The event is not durable\n   before the MVar has been filled but the order of events is honored.\n   The behavior in case of exceptions is exactly the same as for \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf EventA is scheduled before EventB, EventA \u003cem\u003ewill\u003c/em\u003e be executed before EventB:\n\u003c/p\u003e\u003cpre\u003e\ndo scheduleUpdate acid EventA\n   scheduleUpdate acid EventB\n\u003c/pre\u003e",
          "module": "Data.Acid.Advanced",
          "name": "scheduleUpdate",
          "package": "acid-state",
          "signature": "AcidState (EventState event) -\u003e event -\u003e IO (MVar (EventResult event))",
          "source": "src/Data-Acid-Abstract.html#scheduleUpdate",
          "type": "function"
        },
        "index": {
          "description": "Issue an Update event and return immediately The event is not durable before the MVar has been filled but the order of events is honored The behavior in case of exceptions is exactly the same as for update If EventA is scheduled before EventB EventA will be executed before EventB do scheduleUpdate acid EventA scheduleUpdate acid EventB",
          "hierarchy": "Data Acid Advanced",
          "module": "Data.Acid.Advanced",
          "name": "scheduleUpdate",
          "normalized": "AcidState(EventState a)-\u003ea-\u003eIO(MVar(EventResult a))",
          "package": "acid-state",
          "partial": "Update",
          "signature": "AcidState(EventState event)-\u003eevent-\u003eIO(MVar(EventResult event))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Advanced.html#v:scheduleUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e but lifted into any monad capable of doing IO.\n\u003c/p\u003e",
          "module": "Data.Acid.Advanced",
          "name": "update'",
          "package": "acid-state",
          "signature": "AcidState (EventState event) -\u003e event -\u003e m (EventResult event)",
          "source": "src/Data-Acid-Abstract.html#update%27",
          "type": "function"
        },
        "index": {
          "description": "Same as update but lifted into any monad capable of doing IO",
          "hierarchy": "Data Acid Advanced",
          "module": "Data.Acid.Advanced",
          "name": "update'",
          "normalized": "AcidState(EventState a)-\u003ea-\u003eb(EventResult a)",
          "package": "acid-state",
          "signature": "AcidState(EventState event)-\u003eevent-\u003em(EventResult event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Advanced.html#v:update-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAcidState container using a transaction log on disk. The term 'Event' is\n loosely used for transactions with ACID guarantees. 'Method' is loosely\n used for state operations without ACID guarantees (see \u003ca\u003eData.Acid.Core\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Acid.Local",
          "name": "Local",
          "package": "acid-state",
          "source": "src/Data-Acid-Local.html",
          "type": "module"
        },
        "index": {
          "description": "AcidState container using transaction log on disk The term Event is loosely used for transactions with ACID guarantees Method is loosely used for state operations without ACID guarantees see Data.Acid.Core",
          "hierarchy": "Data Acid Local",
          "module": "Data.Acid.Local",
          "name": "Local",
          "package": "acid-state",
          "partial": "Local",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Local.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave a snapshot to disk and close the AcidState as a single atomic\n   action. This is useful when you want to make sure that no events\n   are saved to disk after a checkpoint.\n\u003c/p\u003e",
          "module": "Data.Acid.Local",
          "name": "createCheckpointAndClose",
          "package": "acid-state",
          "signature": "AcidState st -\u003e IO ()",
          "source": "src/Data-Acid-Local.html#createCheckpointAndClose",
          "type": "function"
        },
        "index": {
          "description": "Save snapshot to disk and close the AcidState as single atomic action This is useful when you want to make sure that no events are saved to disk after checkpoint",
          "hierarchy": "Data Acid Local",
          "module": "Data.Acid.Local",
          "name": "createCheckpointAndClose",
          "normalized": "AcidState a-\u003eIO()",
          "package": "acid-state",
          "partial": "Checkpoint And Close",
          "signature": "AcidState st-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Local.html#v:createCheckpointAndClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove all log files that are no longer necessary for state restoration into the \u003ccode\u003eArchive\u003c/code\u003e\n   folder in the state directory. This folder can then be backed up or thrown out as you see fit.\n   Reverting to a state before the last checkpoint will not be possible if the \u003ccode\u003eArchive\u003c/code\u003e folder\n   has been thrown out.\n\u003c/p\u003e\u003cp\u003eThis method is idempotent and does not block the normal operation of the AcidState.\n\u003c/p\u003e",
          "module": "Data.Acid.Local",
          "name": "createLocalArchive",
          "package": "acid-state",
          "signature": "LocalState st -\u003e IO ()",
          "source": "src/Data-Acid-Local.html#createLocalArchive",
          "type": "function"
        },
        "index": {
          "description": "Move all log files that are no longer necessary for state restoration into the Archive folder in the state directory This folder can then be backed up or thrown out as you see fit Reverting to state before the last checkpoint will not be possible if the Archive folder has been thrown out This method is idempotent and does not block the normal operation of the AcidState",
          "hierarchy": "Data Acid Local",
          "module": "Data.Acid.Local",
          "name": "createLocalArchive",
          "normalized": "LocalState a-\u003eIO()",
          "package": "acid-state",
          "partial": "Local Archive",
          "signature": "LocalState st-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Local.html#v:createLocalArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an AcidState given an initial value.\n\u003c/p\u003e\u003cp\u003eThis will create or resume a log found in the \"state/[typeOf state]/\" directory.\n\u003c/p\u003e",
          "module": "[\"Data.Acid.Local\",\"Data.Acid\"]",
          "name": "openLocalState",
          "package": "acid-state",
          "signature": "st-\u003e IO (AcidState st)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Local.html#v:openLocalState\",\"http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#v:openLocalState\"]"
        },
        "index": {
          "description": "Create an AcidState given an initial value This will create or resume log found in the state typeOf state directory",
          "hierarchy": "Data Acid Local",
          "module": "Data.Acid.Local",
          "name": "openLocalState",
          "normalized": "a-\u003eIO(AcidState a)",
          "package": "acid-state",
          "partial": "Local State",
          "signature": "st-\u003eIO(AcidState st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Local.html#v:openLocalState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an AcidState given a log directory and an initial value.\n\u003c/p\u003e\u003cp\u003eThis will create or resume a log found in \u003ccode\u003edirectory\u003c/code\u003e.\n   Running two AcidState's from the same directory is an error\n   but will not result in dataloss.\n\u003c/p\u003e",
          "module": "[\"Data.Acid.Local\",\"Data.Acid\"]",
          "name": "openLocalStateFrom",
          "package": "acid-state",
          "signature": "FilePath-\u003e st-\u003e IO (AcidState st)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Local.html#v:openLocalStateFrom\",\"http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#v:openLocalStateFrom\"]"
        },
        "index": {
          "description": "Create an AcidState given log directory and an initial value This will create or resume log found in directory Running two AcidState from the same directory is an error but will not result in dataloss",
          "hierarchy": "Data Acid Local",
          "module": "Data.Acid.Local",
          "name": "openLocalStateFrom",
          "normalized": "FilePath-\u003ea-\u003eIO(AcidState a)",
          "package": "acid-state",
          "partial": "Local State From",
          "signature": "FilePath-\u003est-\u003eIO(AcidState st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Local.html#v:openLocalStateFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an AcidState given an initial value.\n\u003c/p\u003e\u003cp\u003eThis will create or resume a log found in the \"state/[typeOf state]/\" directory.\n   The most recent checkpoint will be loaded immediately but the AcidState will not be opened\n   until the returned function is executed.\n\u003c/p\u003e",
          "module": "Data.Acid.Local",
          "name": "prepareLocalState",
          "package": "acid-state",
          "signature": "st-\u003e IO (IO (AcidState st))",
          "type": "function"
        },
        "index": {
          "description": "Create an AcidState given an initial value This will create or resume log found in the state typeOf state directory The most recent checkpoint will be loaded immediately but the AcidState will not be opened until the returned function is executed",
          "hierarchy": "Data Acid Local",
          "module": "Data.Acid.Local",
          "name": "prepareLocalState",
          "normalized": "a-\u003eIO(IO(AcidState a))",
          "package": "acid-state",
          "partial": "Local State",
          "signature": "st-\u003eIO(IO(AcidState st))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Local.html#v:prepareLocalState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an AcidState given an initial value.\n\u003c/p\u003e\u003cp\u003eThis will create or resume a log found in \u003ccode\u003edirectory\u003c/code\u003e.\n   The most recent checkpoint will be loaded immediately but the AcidState will not be opened\n   until the returned function is executed.\n\u003c/p\u003e",
          "module": "Data.Acid.Local",
          "name": "prepareLocalStateFrom",
          "package": "acid-state",
          "signature": "FilePath-\u003e st-\u003e IO (IO (AcidState st))",
          "type": "function"
        },
        "index": {
          "description": "Create an AcidState given an initial value This will create or resume log found in directory The most recent checkpoint will be loaded immediately but the AcidState will not be opened until the returned function is executed",
          "hierarchy": "Data Acid Local",
          "module": "Data.Acid.Local",
          "name": "prepareLocalStateFrom",
          "normalized": "FilePath-\u003ea-\u003eIO(IO(AcidState a))",
          "package": "acid-state",
          "partial": "Local State From",
          "signature": "FilePath-\u003est-\u003eIO(IO(AcidState st))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Local.html#v:prepareLocalStateFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAcidState container without a transaction log. Mostly used for testing. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Acid.Memory.Pure",
          "name": "Pure",
          "package": "acid-state",
          "source": "src/Data-Acid-Memory-Pure.html",
          "type": "module"
        },
        "index": {
          "description": "AcidState container without transaction log Mostly used for testing",
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "Pure",
          "package": "acid-state",
          "partial": "Pure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState container offering full ACID (Atomicity, Consistency, Isolation and Durability)\n    guarantees.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAtomicity\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  State changes are all-or-nothing. This is what you'd expect of any state\n                   variable in Haskell and AcidState doesn't change that.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eConsistency\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e No event or set of events will break your data invariants.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eIsolation\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Transactions cannot interfere with each other even when issued in parallel.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDurability\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Successful transaction are guaranteed to survive system failure (both\n                   hardware and software).\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Data.Acid.Memory.Pure",
          "name": "AcidState",
          "package": "acid-state",
          "source": "src/Data-Acid-Memory-Pure.html#AcidState",
          "type": "data"
        },
        "index": {
          "description": "State container offering full ACID Atomicity Consistency Isolation and Durability guarantees Atomicity State changes are all-or-nothing This is what you expect of any state variable in Haskell and AcidState doesn change that Consistency No event or set of events will break your data invariants Isolation Transactions cannot interfere with each other even when issued in parallel Durability Successful transaction are guaranteed to survive system failure both hardware and software",
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "AcidState",
          "package": "acid-state",
          "partial": "Acid State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#t:AcidState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe distinguish between events that modify the state and those that do not.\n\u003c/p\u003e\u003cp\u003eUpdateEvents are executed in a MonadState context and have to be serialized\n   to disk before they are considered durable.\n\u003c/p\u003e\u003cp\u003eQueryEvents are executed in a MonadReader context and obviously do not have\n   to be serialized to disk.\n\u003c/p\u003e",
          "module": "Data.Acid.Memory.Pure",
          "name": "Event",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#Event",
          "type": "data"
        },
        "index": {
          "description": "We distinguish between events that modify the state and those that do not UpdateEvents are executed in MonadState context and have to be serialized to disk before they are considered durable QueryEvents are executed in MonadReader context and obviously do not have to be serialized to disk",
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "Event",
          "package": "acid-state",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvents return the same thing as Methods. The exact type of \u003ccode\u003e\u003ca\u003eEventResult\u003c/a\u003e\u003c/code\u003e\n   depends on the event.\n\u003c/p\u003e",
          "module": "Data.Acid.Memory.Pure",
          "name": "EventResult",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#EventResult",
          "type": "type"
        },
        "index": {
          "description": "Events return the same thing as Methods The exact type of EventResult depends on the event",
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "EventResult",
          "package": "acid-state",
          "partial": "Event Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#t:EventResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid.Memory.Pure",
          "name": "EventState",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#EventState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "EventState",
          "package": "acid-state",
          "partial": "Event State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#t:EventState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid.Memory.Pure",
          "name": "IsAcidic",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#IsAcidic",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "IsAcidic",
          "package": "acid-state",
          "partial": "Is Acidic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#t:IsAcidic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext monad for Query events.\n\u003c/p\u003e",
          "module": "Data.Acid.Memory.Pure",
          "name": "Query",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#Query",
          "type": "data"
        },
        "index": {
          "description": "Context monad for Query events",
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "Query",
          "package": "acid-state",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll QueryEvents are also Methods.\n\u003c/p\u003e",
          "module": "Data.Acid.Memory.Pure",
          "name": "QueryEvent",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#QueryEvent",
          "type": "class"
        },
        "index": {
          "description": "All QueryEvents are also Methods",
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "QueryEvent",
          "package": "acid-state",
          "partial": "Query Event",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#t:QueryEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext monad for Update events.\n\u003c/p\u003e",
          "module": "Data.Acid.Memory.Pure",
          "name": "Update",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#Update",
          "type": "data"
        },
        "index": {
          "description": "Context monad for Update events",
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "Update",
          "package": "acid-state",
          "partial": "Update",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#t:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll UpdateEvents are also Methods.\n\u003c/p\u003e",
          "module": "Data.Acid.Memory.Pure",
          "name": "UpdateEvent",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#UpdateEvent",
          "type": "class"
        },
        "index": {
          "description": "All UpdateEvents are also Methods",
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "UpdateEvent",
          "package": "acid-state",
          "partial": "Update Event",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#t:UpdateEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid.Memory.Pure",
          "name": "acidEvents",
          "package": "acid-state",
          "signature": "acidEvents",
          "source": "src/Data-Acid-Common.html#acidEvents",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "acidEvents",
          "package": "acid-state",
          "partial": "Events",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#v:acidEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a query in the Update Monad.\n\u003c/p\u003e",
          "module": "[\"Data.Acid.Memory.Pure\",\"Data.Acid\"]",
          "name": "liftQuery",
          "package": "acid-state",
          "signature": "Query st a -\u003e Update st a",
          "source": "src/Data-Acid-Common.html#liftQuery",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#v:liftQuery\",\"http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#v:liftQuery\"]"
        },
        "index": {
          "description": "Run query in the Update Monad",
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "liftQuery",
          "normalized": "Query a b-\u003eUpdate a b",
          "package": "acid-state",
          "partial": "Query",
          "signature": "Query st a-\u003eUpdate st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#v:liftQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an AcidState given an initial value.\n\u003c/p\u003e",
          "module": "Data.Acid.Memory.Pure",
          "name": "openAcidState",
          "package": "acid-state",
          "signature": "st-\u003e AcidState st",
          "type": "function"
        },
        "index": {
          "description": "Create an AcidState given an initial value",
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "openAcidState",
          "normalized": "a-\u003eAcidState a",
          "package": "acid-state",
          "partial": "Acid State",
          "signature": "st-\u003eAcidState st",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#v:openAcidState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIssue a Query event and wait for its result.\n\u003c/p\u003e",
          "module": "Data.Acid.Memory.Pure",
          "name": "query",
          "package": "acid-state",
          "signature": "AcidState (EventState event) -\u003e event -\u003e EventResult event",
          "source": "src/Data-Acid-Memory-Pure.html#query",
          "type": "function"
        },
        "index": {
          "description": "Issue Query event and wait for its result",
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "query",
          "normalized": "AcidState(EventState a)-\u003ea-\u003eEventResult a",
          "package": "acid-state",
          "signature": "AcidState(EventState event)-\u003eevent-\u003eEventResult event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e monad in a pure environment.\n\u003c/p\u003e",
          "module": "Data.Acid.Memory.Pure",
          "name": "runQuery",
          "package": "acid-state",
          "signature": "Query s r -\u003e s -\u003e r",
          "source": "src/Data-Acid-Memory-Pure.html#runQuery",
          "type": "function"
        },
        "index": {
          "description": "Execute the Query monad in pure environment",
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "runQuery",
          "normalized": "Query a b-\u003ea-\u003eb",
          "package": "acid-state",
          "partial": "Query",
          "signature": "Query s r-\u003es-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#v:runQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the \u003ccode\u003e\u003ca\u003eUpdate\u003c/a\u003e\u003c/code\u003e monad in a pure environment.\n\u003c/p\u003e",
          "module": "Data.Acid.Memory.Pure",
          "name": "runUpdate",
          "package": "acid-state",
          "signature": "Update s r -\u003e s -\u003e (r, s)",
          "source": "src/Data-Acid-Memory-Pure.html#runUpdate",
          "type": "function"
        },
        "index": {
          "description": "Execute the Update monad in pure environment",
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "runUpdate",
          "normalized": "Update a b-\u003ea-\u003e(b,a)",
          "package": "acid-state",
          "partial": "Update",
          "signature": "Update s r-\u003es-\u003e(r,s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#v:runUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIssue an Update event and wait for its result. Once this call returns, you are\n   guaranteed that the changes to the state are durable. Events may be issued in\n   parallel.\n\u003c/p\u003e\u003cp\u003eIt's a run-time error to issue events that aren't supported by the AcidState.\n\u003c/p\u003e",
          "module": "Data.Acid.Memory.Pure",
          "name": "update",
          "package": "acid-state",
          "signature": "AcidState (EventState event) -\u003e event -\u003e (AcidState (EventState event), EventResult event)",
          "source": "src/Data-Acid-Memory-Pure.html#update",
          "type": "function"
        },
        "index": {
          "description": "Issue an Update event and wait for its result Once this call returns you are guaranteed that the changes to the state are durable Events may be issued in parallel It run-time error to issue events that aren supported by the AcidState",
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "update",
          "normalized": "AcidState(EventState a)-\u003ea-\u003e(AcidState(EventState a),EventResult a)",
          "package": "acid-state",
          "signature": "AcidState(EventState event)-\u003eevent-\u003e(AcidState(EventState event),EventResult event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e but ignoring the event result.\n\u003c/p\u003e",
          "module": "Data.Acid.Memory.Pure",
          "name": "update_",
          "package": "acid-state",
          "signature": "AcidState (EventState event) -\u003e event -\u003e AcidState (EventState event)",
          "source": "src/Data-Acid-Memory-Pure.html#update_",
          "type": "function"
        },
        "index": {
          "description": "Same as update but ignoring the event result",
          "hierarchy": "Data Acid Memory Pure",
          "module": "Data.Acid.Memory.Pure",
          "name": "update_",
          "normalized": "AcidState(EventState a)-\u003ea-\u003eAcidState(EventState a)",
          "package": "acid-state",
          "signature": "AcidState(EventState event)-\u003eevent-\u003eAcidState(EventState event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory-Pure.html#v:update_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAcidState container without a transaction log. Mostly used for testing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Acid.Memory",
          "name": "Memory",
          "package": "acid-state",
          "source": "src/Data-Acid-Memory.html",
          "type": "module"
        },
        "index": {
          "description": "AcidState container without transaction log Mostly used for testing",
          "hierarchy": "Data Acid Memory",
          "module": "Data.Acid.Memory",
          "name": "Memory",
          "package": "acid-state",
          "partial": "Memory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an AcidState given an initial value.\n\u003c/p\u003e",
          "module": "Data.Acid.Memory",
          "name": "openMemoryState",
          "package": "acid-state",
          "signature": "st-\u003e IO (AcidState st)",
          "type": "function"
        },
        "index": {
          "description": "Create an AcidState given an initial value",
          "hierarchy": "Data Acid Memory",
          "module": "Data.Acid.Memory",
          "name": "openMemoryState",
          "normalized": "a-\u003eIO(AcidState a)",
          "package": "acid-state",
          "partial": "Memory State",
          "signature": "st-\u003eIO(AcidState st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Memory.html#v:openMemoryState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the ability perform \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e calls\nfrom a remote process.\n\u003c/p\u003e\u003cp\u003eOn the server-side you:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e open your \u003ccode\u003e\u003ca\u003eAcidState\u003c/a\u003e\u003c/code\u003e normally\n\u003c/li\u003e\u003cli\u003e then use \u003ccode\u003e\u003ca\u003eacidServer\u003c/a\u003e\u003c/code\u003e to share the state\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eOn the client-side you:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e use \u003ccode\u003e\u003ca\u003eopenRemoteState\u003c/a\u003e\u003c/code\u003e to connect to the remote state\n\u003c/li\u003e\u003cli\u003e use the returned \u003ccode\u003e\u003ca\u003eAcidState\u003c/a\u003e\u003c/code\u003e like any other \u003ccode\u003e\u003ca\u003eAcidState\u003c/a\u003e\u003c/code\u003e handle\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eopenRemoteState\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eacidServer\u003c/a\u003e\u003c/code\u003e communicate over an unencrypted\nsocket. If you need an encrypted connection, see \u003ccode\u003eacid-state-tls\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOn Unix&#174;-like systems you can use\u003ccode\u003eUnixSocket\u003c/code\u003e to create a socket file for\nlocal communication between the client and server. Access can be\ncontrolled by setting the permissions of the parent directory\ncontaining the socket file.\n\u003c/p\u003e\u003cp\u003eIt is also possible to perform some simple authentication using\n\u003ccode\u003e\u003ca\u003esharedSecretCheck\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esharedSecretPerform\u003c/a\u003e\u003c/code\u003e. Keep in mind that\nsecrets will be sent in plain-text if you do not use\n\u003ccode\u003eacid-state-tls\u003c/code\u003e. If you are using a \u003ccode\u003eUnixSocket\u003c/code\u003e additional\nauthentication may not be required, so you can use\n\u003ccode\u003e\u003ca\u003eskipAuthenticationCheck\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eskipAuthenticationPerform\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWorking with a remote \u003ccode\u003e\u003ca\u003eAcidState\u003c/a\u003e\u003c/code\u003e is nearly identical to working with\na local \u003ccode\u003e\u003ca\u003eAcidState\u003c/a\u003e\u003c/code\u003e with a few important differences.\n\u003c/p\u003e\u003cp\u003eThe connection to the remote \u003ccode\u003e\u003ca\u003eAcidState\u003c/a\u003e\u003c/code\u003e can be lost. The client will\nautomatically attempt to reconnect every second. Because \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e\nevents do not affect the state, an aborted \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e will be retried\nautomatically after the server is reconnected.\n\u003c/p\u003e\u003cp\u003eIf the connection was lost during an \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e event, the event will\nnot be retried. Instead \u003ccode\u003e\u003ca\u003eRemoteConnectionError\u003c/a\u003e\u003c/code\u003e will be raised. This\nis because it is impossible for the client to know if the aborted\nupdate completed on the server-side or not.\n\u003c/p\u003e\u003cp\u003eWhen using a local \u003ccode\u003e\u003ca\u003eAcidState\u003c/a\u003e\u003c/code\u003e, an update event in one thread does not\nblock query events taking place in other threads. With a remote\nconnection, all queries and requests are channeled over a single\nconnection. As a result, updates and queries are performed in the\norder they are executed and do block each other. In the rare case\nwhere this is an issue, you could create one remote connection per\nthread.\n\u003c/p\u003e\u003cp\u003eWhen working with local state, a query or update which returns the\nwhole state is not usually a problem due to memory sharing. The\nupdate/query event basically just needs to return a pointer to the\ndata already in memory. But, when working remotely, the entire result\nwill be serialized and sent to the remote client. Hence, it is good\npractice to create queries and updates that will only return the\nrequired data.\n\u003c/p\u003e\u003cp\u003eThis module is designed to be extenible. You can easily add your own\nauthentication methods by creating a suitable pair of functions and\npassing them to \u003ccode\u003e\u003ca\u003eacidServer\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eopenRemoteState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is also possible to create alternative communication layers using\n\u003ccode\u003e\u003ca\u003eCommChannel\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprocess\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eprocessRemoteState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Acid.Remote",
          "name": "Remote",
          "package": "acid-state",
          "source": "src/Data-Acid-Remote.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the ability perform update and query calls from remote process On the server-side you open your AcidState normally then use acidServer to share the state On the client-side you use openRemoteState to connect to the remote state use the returned AcidState like any other AcidState handle openRemoteState and acidServer communicate over an unencrypted socket If you need an encrypted connection see acid-state-tls On Unix like systems you can use UnixSocket to create socket file for local communication between the client and server Access can be controlled by setting the permissions of the parent directory containing the socket file It is also possible to perform some simple authentication using sharedSecretCheck and sharedSecretPerform Keep in mind that secrets will be sent in plain-text if you do not use acid-state-tls If you are using UnixSocket additional authentication may not be required so you can use skipAuthenticationCheck and skipAuthenticationPerform Working with remote AcidState is nearly identical to working with local AcidState with few important differences The connection to the remote AcidState can be lost The client will automatically attempt to reconnect every second Because query events do not affect the state an aborted query will be retried automatically after the server is reconnected If the connection was lost during an update event the event will not be retried Instead RemoteConnectionError will be raised This is because it is impossible for the client to know if the aborted update completed on the server-side or not When using local AcidState an update event in one thread does not block query events taking place in other threads With remote connection all queries and requests are channeled over single connection As result updates and queries are performed in the order they are executed and do block each other In the rare case where this is an issue you could create one remote connection per thread When working with local state query or update which returns the whole state is not usually problem due to memory sharing The update query event basically just needs to return pointer to the data already in memory But when working remotely the entire result will be serialized and sent to the remote client Hence it is good practice to create queries and updates that will only return the required data This module is designed to be extenible You can easily add your own authentication methods by creating suitable pair of functions and passing them to acidServer and openRemoteState It is also possible to create alternative communication layers using CommChannel process and processRemoteState",
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "Remote",
          "package": "acid-state",
          "partial": "Remote",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid.Remote",
          "name": "AcidRemoteException",
          "package": "acid-state",
          "source": "src/Data-Acid-Remote.html#AcidRemoteException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "AcidRemoteException",
          "package": "acid-state",
          "partial": "Acid Remote Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#t:AcidRemoteException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCommChannel\u003c/a\u003e\u003c/code\u003e is a record containing the IO functions we need for communication between the server and client.\n\u003c/p\u003e\u003cp\u003eWe abstract this out of the core processing function so that we can easily add support for SSL/TLS and Unit testing.\n\u003c/p\u003e",
          "module": "Data.Acid.Remote",
          "name": "CommChannel",
          "package": "acid-state",
          "source": "src/Data-Acid-Remote.html#CommChannel",
          "type": "data"
        },
        "index": {
          "description": "CommChannel is record containing the IO functions we need for communication between the server and client We abstract this out of the core processing function so that we can easily add support for SSL TLS and Unit testing",
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "CommChannel",
          "package": "acid-state",
          "partial": "Comm Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#t:CommChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid.Remote",
          "name": "AcidStateClosed",
          "package": "acid-state",
          "signature": "AcidStateClosed",
          "source": "src/Data-Acid-Remote.html#AcidRemoteException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "AcidStateClosed",
          "package": "acid-state",
          "partial": "Acid State Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:AcidStateClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid.Remote",
          "name": "AuthenticationError",
          "package": "acid-state",
          "signature": "AuthenticationError String",
          "source": "src/Data-Acid-Remote.html#AcidRemoteException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "AuthenticationError",
          "package": "acid-state",
          "partial": "Authentication Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:AuthenticationError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid.Remote",
          "name": "CommChannel",
          "package": "acid-state",
          "signature": "CommChannel",
          "source": "src/Data-Acid-Remote.html#CommChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "CommChannel",
          "package": "acid-state",
          "partial": "Comm Channel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:CommChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid.Remote",
          "name": "RemoteConnectionError",
          "package": "acid-state",
          "signature": "RemoteConnectionError",
          "source": "src/Data-Acid-Remote.html#AcidRemoteException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "RemoteConnectionError",
          "package": "acid-state",
          "partial": "Remote Connection Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:RemoteConnectionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid.Remote",
          "name": "SerializeError",
          "package": "acid-state",
          "signature": "SerializeError String",
          "source": "src/Data-Acid-Remote.html#AcidRemoteException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "SerializeError",
          "package": "acid-state",
          "partial": "Serialize Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:SerializeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept connections on \u003ccode\u003eport\u003c/code\u003e and handle requests using the given \u003ccode\u003e\u003ca\u003eAcidState\u003c/a\u003e\u003c/code\u003e.\n     This call doesn't return.\n\u003c/p\u003e\u003cp\u003eOn Unix&#174;-like systems you can use\u003ccode\u003eUnixSocket\u003c/code\u003e to communicate\n     using a socket file. To control access, you can set the permissions of\n     the parent directory which contains the socket file.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eopenRemoteState\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esharedSecretCheck\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Acid.Remote",
          "name": "acidServer",
          "package": "acid-state",
          "signature": "(CommChannel -\u003e IO Bool)-\u003e PortID-\u003e AcidState st-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Accept connections on port and handle requests using the given AcidState This call doesn return On Unix like systems you can use UnixSocket to communicate using socket file To control access you can set the permissions of the parent directory which contains the socket file see also openRemoteState and sharedSecretCheck",
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "acidServer",
          "normalized": "(CommChannel-\u003eIO Bool)-\u003ePortID-\u003eAcidState a-\u003eIO()",
          "package": "acid-state",
          "partial": "Server",
          "signature": "(CommChannel-\u003eIO Bool)-\u003ePortID-\u003eAcidState st-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:acidServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorks the same way as \u003ccode\u003e\u003ca\u003eacidServer\u003c/a\u003e\u003c/code\u003e, but uses pre-binded socket \u003ccode\u003elistenSocket\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCan be useful when fine-tuning of socket binding parameters is needed\n     (for example, listening on a particular network interface, IPv4/IPv6 options).\n\u003c/p\u003e",
          "module": "Data.Acid.Remote",
          "name": "acidServer'",
          "package": "acid-state",
          "signature": "(CommChannel -\u003e IO Bool)-\u003e Socket-\u003e AcidState st-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Works the same way as acidServer but uses pre-binded socket listenSocket Can be useful when fine-tuning of socket binding parameters is needed for example listening on particular network interface IPv4 IPv6 options",
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "acidServer'",
          "normalized": "(CommChannel-\u003eIO Bool)-\u003eSocket-\u003eAcidState a-\u003eIO()",
          "package": "acid-state",
          "partial": "Server'",
          "signature": "(CommChannel-\u003eIO Bool)-\u003eSocket-\u003eAcidState st-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:acidServer-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid.Remote",
          "name": "ccClose",
          "package": "acid-state",
          "signature": "IO ()",
          "source": "src/Data-Acid-Remote.html#CommChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "ccClose",
          "normalized": "IO()",
          "package": "acid-state",
          "partial": "Close",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:ccClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid.Remote",
          "name": "ccGetSome",
          "package": "acid-state",
          "signature": "Int -\u003e IO ByteString",
          "source": "src/Data-Acid-Remote.html#CommChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "ccGetSome",
          "normalized": "Int-\u003eIO ByteString",
          "package": "acid-state",
          "partial": "Get Some",
          "signature": "Int-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:ccGetSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid.Remote",
          "name": "ccPut",
          "package": "acid-state",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Data-Acid-Remote.html#CommChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "ccPut",
          "normalized": "ByteString-\u003eIO()",
          "package": "acid-state",
          "partial": "Put",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:ccPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to an acid-state server which is sharing an \u003ccode\u003e\u003ca\u003eAcidState\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.Acid.Remote",
          "name": "openRemoteState",
          "package": "acid-state",
          "signature": "(CommChannel -\u003e IO ())-\u003e HostName-\u003e PortID-\u003e IO (AcidState st)",
          "type": "function"
        },
        "index": {
          "description": "Connect to an acid-state server which is sharing an AcidState",
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "openRemoteState",
          "normalized": "(CommChannel-\u003eIO())-\u003eHostName-\u003ePortID-\u003eIO(AcidState a)",
          "package": "acid-state",
          "partial": "Remote State",
          "signature": "(CommChannel-\u003eIO())-\u003eHostName-\u003ePortID-\u003eIO(AcidState st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:openRemoteState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer inner-loop\n\u003c/p\u003e\u003cp\u003eThis function is generally only needed if you are adding a new communication channel.\n\u003c/p\u003e",
          "module": "Data.Acid.Remote",
          "name": "process",
          "package": "acid-state",
          "signature": "CommChannel-\u003e AcidState st-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Server inner-loop This function is generally only needed if you are adding new communication channel",
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "process",
          "normalized": "CommChannel-\u003eAcidState a-\u003eIO()",
          "package": "acid-state",
          "signature": "CommChannel-\u003eAcidState st-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient inner-loop\n\u003c/p\u003e\u003cp\u003eThis function is generally only needed if you are adding a new communication channel.\n\u003c/p\u003e",
          "module": "Data.Acid.Remote",
          "name": "processRemoteState",
          "package": "acid-state",
          "signature": "IO CommChannel-\u003e IO (AcidState st)",
          "type": "function"
        },
        "index": {
          "description": "Client inner-loop This function is generally only needed if you are adding new communication channel",
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "processRemoteState",
          "normalized": "IO CommChannel-\u003eIO(AcidState a)",
          "package": "acid-state",
          "partial": "Remote State",
          "signature": "IO CommChannel-\u003eIO(AcidState st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:processRemoteState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echeck that the client knows a shared secret.\n\u003c/p\u003e\u003cp\u003eThe function takes a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e of shared secrets. If a client knows any\nof them, it is considered to be trusted.\n\u003c/p\u003e\u003cp\u003eThe shared secret is any \u003ccode\u003eByteString\u003c/code\u003e of your choice.\n\u003c/p\u003e\u003cp\u003eIf you give each client a different shared secret then you can\nrevoke access individually.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003esharedSecretPerform\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Acid.Remote",
          "name": "sharedSecretCheck",
          "package": "acid-state",
          "signature": "Set ByteString-\u003e CommChannel -\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "check that the client knows shared secret The function takes Set of shared secrets If client knows any of them it is considered to be trusted The shared secret is any ByteString of your choice If you give each client different shared secret then you can revoke access individually see also sharedSecretPerform",
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "sharedSecretCheck",
          "normalized": "Set ByteString-\u003eCommChannel-\u003eIO Bool",
          "package": "acid-state",
          "partial": "Secret Check",
          "signature": "Set ByteString-\u003eCommChannel-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:sharedSecretCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eattempt to authenticate with the server using a shared secret.\n\u003c/p\u003e",
          "module": "Data.Acid.Remote",
          "name": "sharedSecretPerform",
          "package": "acid-state",
          "signature": "ByteString-\u003e CommChannel -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "attempt to authenticate with the server using shared secret",
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "sharedSecretPerform",
          "normalized": "ByteString-\u003eCommChannel-\u003eIO()",
          "package": "acid-state",
          "partial": "Secret Perform",
          "signature": "ByteString-\u003eCommChannel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:sharedSecretPerform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eskip server-side authentication checking entirely. \n\u003c/p\u003e",
          "module": "Data.Acid.Remote",
          "name": "skipAuthenticationCheck",
          "package": "acid-state",
          "signature": "CommChannel -\u003e IO Bool",
          "source": "src/Data-Acid-Remote.html#skipAuthenticationCheck",
          "type": "function"
        },
        "index": {
          "description": "skip server-side authentication checking entirely",
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "skipAuthenticationCheck",
          "normalized": "CommChannel-\u003eIO Bool",
          "package": "acid-state",
          "partial": "Authentication Check",
          "signature": "CommChannel-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:skipAuthenticationCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eskip client-side authentication entirely. \n\u003c/p\u003e",
          "module": "Data.Acid.Remote",
          "name": "skipAuthenticationPerform",
          "package": "acid-state",
          "signature": "CommChannel -\u003e IO ()",
          "source": "src/Data-Acid-Remote.html#skipAuthenticationPerform",
          "type": "function"
        },
        "index": {
          "description": "skip client-side authentication entirely",
          "hierarchy": "Data Acid Remote",
          "module": "Data.Acid.Remote",
          "name": "skipAuthenticationPerform",
          "normalized": "CommChannel-\u003eIO()",
          "package": "acid-state",
          "partial": "Authentication Perform",
          "signature": "CommChannel-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid-Remote.html#v:skipAuthenticationPerform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAcidState container using a transaction log on disk.\n\u003c/p\u003e\u003cp\u003eTo see how it all fits together, have a look at these example\n \u003ca\u003ehttp://mirror.seize.it/acid-state/examples/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Acid",
          "name": "Acid",
          "package": "acid-state",
          "source": "src/Data-Acid.html",
          "type": "module"
        },
        "index": {
          "description": "AcidState container using transaction log on disk To see how it all fits together have look at these example http mirror.seize.it acid-state examples",
          "hierarchy": "Data Acid",
          "module": "Data.Acid",
          "name": "Acid",
          "package": "acid-state",
          "partial": "Acid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState container offering full ACID (Atomicity, Consistency, Isolation and Durability)\n    guarantees.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAtomicity\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e  State changes are all-or-nothing. This is what you'd expect of any state\n                   variable in Haskell and AcidState doesn't change that.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eConsistency\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e No event or set of events will break your data invariants.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eIsolation\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Transactions cannot interfere with each other even when issued in parallel.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDurability\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Successful transaction are guaranteed to survive unexpected system shutdowns\n                   (both those caused by hardware and software).\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Data.Acid",
          "name": "AcidState",
          "package": "acid-state",
          "source": "src/Data-Acid-Abstract.html#AcidState",
          "type": "data"
        },
        "index": {
          "description": "State container offering full ACID Atomicity Consistency Isolation and Durability guarantees Atomicity State changes are all-or-nothing This is what you expect of any state variable in Haskell and AcidState doesn change that Consistency No event or set of events will break your data invariants Isolation Transactions cannot interfere with each other even when issued in parallel Durability Successful transaction are guaranteed to survive unexpected system shutdowns both those caused by hardware and software",
          "hierarchy": "Data Acid",
          "module": "Data.Acid",
          "name": "AcidState",
          "package": "acid-state",
          "partial": "Acid State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#t:AcidState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvents return the same thing as Methods. The exact type of \u003ccode\u003e\u003ca\u003eEventResult\u003c/a\u003e\u003c/code\u003e\n   depends on the event.\n\u003c/p\u003e",
          "module": "Data.Acid",
          "name": "EventResult",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#EventResult",
          "type": "type"
        },
        "index": {
          "description": "Events return the same thing as Methods The exact type of EventResult depends on the event",
          "hierarchy": "Data Acid",
          "module": "Data.Acid",
          "name": "EventResult",
          "package": "acid-state",
          "partial": "Event Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#t:EventResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid",
          "name": "EventState",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#EventState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Acid",
          "module": "Data.Acid",
          "name": "EventState",
          "package": "acid-state",
          "partial": "Event State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#t:EventState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid",
          "name": "IsAcidic",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#IsAcidic",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Acid",
          "module": "Data.Acid",
          "name": "IsAcidic",
          "package": "acid-state",
          "partial": "Is Acidic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#t:IsAcidic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext monad for Query events.\n\u003c/p\u003e",
          "module": "Data.Acid",
          "name": "Query",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#Query",
          "type": "data"
        },
        "index": {
          "description": "Context monad for Query events",
          "hierarchy": "Data Acid",
          "module": "Data.Acid",
          "name": "Query",
          "package": "acid-state",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll QueryEvents are also Methods.\n\u003c/p\u003e",
          "module": "Data.Acid",
          "name": "QueryEvent",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#QueryEvent",
          "type": "class"
        },
        "index": {
          "description": "All QueryEvents are also Methods",
          "hierarchy": "Data Acid",
          "module": "Data.Acid",
          "name": "QueryEvent",
          "package": "acid-state",
          "partial": "Query Event",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#t:QueryEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext monad for Update events.\n\u003c/p\u003e",
          "module": "Data.Acid",
          "name": "Update",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#Update",
          "type": "data"
        },
        "index": {
          "description": "Context monad for Update events",
          "hierarchy": "Data Acid",
          "module": "Data.Acid",
          "name": "Update",
          "package": "acid-state",
          "partial": "Update",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#t:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll UpdateEvents are also Methods.\n\u003c/p\u003e",
          "module": "Data.Acid",
          "name": "UpdateEvent",
          "package": "acid-state",
          "source": "src/Data-Acid-Common.html#UpdateEvent",
          "type": "class"
        },
        "index": {
          "description": "All UpdateEvents are also Methods",
          "hierarchy": "Data Acid",
          "module": "Data.Acid",
          "name": "UpdateEvent",
          "package": "acid-state",
          "partial": "Update Event",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#t:UpdateEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose an AcidState and associated resources.\n   Any subsequent usage of the AcidState will throw an exception.\n\u003c/p\u003e",
          "module": "Data.Acid",
          "name": "closeAcidState",
          "package": "acid-state",
          "signature": "AcidState st -\u003e IO ()",
          "source": "src/Data-Acid-Abstract.html#closeAcidState",
          "type": "function"
        },
        "index": {
          "description": "Close an AcidState and associated resources Any subsequent usage of the AcidState will throw an exception",
          "hierarchy": "Data Acid",
          "module": "Data.Acid",
          "name": "closeAcidState",
          "normalized": "AcidState a-\u003eIO()",
          "package": "acid-state",
          "partial": "Acid State",
          "signature": "AcidState st-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#v:closeAcidState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Acid",
          "name": "createArchive",
          "package": "acid-state",
          "signature": "AcidState st -\u003e IO ()",
          "source": "src/Data-Acid-Abstract.html#createArchive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Acid",
          "module": "Data.Acid",
          "name": "createArchive",
          "normalized": "AcidState a-\u003eIO()",
          "package": "acid-state",
          "partial": "Archive",
          "signature": "AcidState st-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#v:createArchive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a snapshot of the state and save it to disk. Creating checkpoints\n   makes it faster to resume AcidStates and you're free to create them as\n   often or seldom as fits your needs. Transactions can run concurrently\n   with this call.\n\u003c/p\u003e\u003cp\u003eThis call will not return until the operation has succeeded.\n\u003c/p\u003e",
          "module": "Data.Acid",
          "name": "createCheckpoint",
          "package": "acid-state",
          "signature": "AcidState st -\u003e IO ()",
          "source": "src/Data-Acid-Abstract.html#createCheckpoint",
          "type": "function"
        },
        "index": {
          "description": "Take snapshot of the state and save it to disk Creating checkpoints makes it faster to resume AcidStates and you re free to create them as often or seldom as fits your needs Transactions can run concurrently with this call This call will not return until the operation has succeeded",
          "hierarchy": "Data Acid",
          "module": "Data.Acid",
          "name": "createCheckpoint",
          "normalized": "AcidState a-\u003eIO()",
          "package": "acid-state",
          "partial": "Checkpoint",
          "signature": "AcidState st-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#v:createCheckpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the control structures required for acid states\n    using Template Haskell.\n\u003c/p\u003e\u003cp\u003eThis code:\n\u003c/p\u003e\u003cpre\u003e\nmyUpdate :: Argument -\u003e Update State Result\nmyUpdate arg = ...\n\nmyQuery :: Argument -\u003e Query State Result\nmyQuery arg = ...\n\n$(makeAcidic ''State ['myUpdate, 'myQuery])\n\u003c/pre\u003e\u003cp\u003ewill make \u003ccode\u003eState\u003c/code\u003e an instance of \u003ccode\u003e\u003ca\u003eIsAcidic\u003c/a\u003e\u003c/code\u003e and provide the following\nevents:\n\u003c/p\u003e\u003cpre\u003e\ndata MyUpdate = MyUpdate Argument\ndata MyQuery  = MyQuery Argument\n\u003c/pre\u003e",
          "module": "Data.Acid",
          "name": "makeAcidic",
          "package": "acid-state",
          "signature": "Name -\u003e [Name] -\u003e Q [Dec]",
          "source": "src/Data-Acid-TemplateHaskell.html#makeAcidic",
          "type": "function"
        },
        "index": {
          "description": "Create the control structures required for acid states using Template Haskell This code myUpdate Argument Update State Result myUpdate arg myQuery Argument Query State Result myQuery arg makeAcidic State myUpdate myQuery will make State an instance of IsAcidic and provide the following events data MyUpdate MyUpdate Argument data MyQuery MyQuery Argument",
          "hierarchy": "Data Acid",
          "module": "Data.Acid",
          "name": "makeAcidic",
          "normalized": "Name-\u003e[Name]-\u003eQ[Dec]",
          "package": "acid-state",
          "partial": "Acidic",
          "signature": "Name-\u003e[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#v:makeAcidic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIssue a Query event and wait for its result. Events may be issued in parallel.\n\u003c/p\u003e",
          "module": "Data.Acid",
          "name": "query",
          "package": "acid-state",
          "signature": "AcidState (EventState event) -\u003e event -\u003e IO (EventResult event)",
          "source": "src/Data-Acid-Abstract.html#query",
          "type": "function"
        },
        "index": {
          "description": "Issue Query event and wait for its result Events may be issued in parallel",
          "hierarchy": "Data Acid",
          "module": "Data.Acid",
          "name": "query",
          "normalized": "AcidState(EventState a)-\u003ea-\u003eIO(EventResult a)",
          "package": "acid-state",
          "signature": "AcidState(EventState event)-\u003eevent-\u003eIO(EventResult event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIssue an Update event and wait for its result. Once this call returns, you are\n   guaranteed that the changes to the state are durable. Events may be issued in\n   parallel.\n\u003c/p\u003e\u003cp\u003eIt's a run-time error to issue events that aren't supported by the AcidState.\n\u003c/p\u003e",
          "module": "Data.Acid",
          "name": "update",
          "package": "acid-state",
          "signature": "AcidState (EventState event) -\u003e event -\u003e IO (EventResult event)",
          "source": "src/Data-Acid-Abstract.html#update",
          "type": "function"
        },
        "index": {
          "description": "Issue an Update event and wait for its result Once this call returns you are guaranteed that the changes to the state are durable Events may be issued in parallel It run-time error to issue events that aren supported by the AcidState",
          "hierarchy": "Data Acid",
          "module": "Data.Acid",
          "name": "update",
          "normalized": "AcidState(EventState a)-\u003ea-\u003eIO(EventResult a)",
          "package": "acid-state",
          "signature": "AcidState(EventState event)-\u003eevent-\u003eIO(EventResult event)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acid-state/docs/Data-Acid.html#v:update"
      }
    }
  ]
]