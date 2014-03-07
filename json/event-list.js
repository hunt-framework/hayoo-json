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
        "word": "event-list"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "TimeBody",
          "package": "event-list",
          "source": "src/Data-EventList-Absolute-TimeBody.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "TimeBody",
          "package": "event-list",
          "partial": "Time Body",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "T",
          "package": "event-list",
          "source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "T",
          "package": "event-list",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "append",
          "package": "event-list",
          "signature": "T time body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "append",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "catMaybes",
          "package": "event-list",
          "signature": "T time (Maybe body) -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#catMaybes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "catMaybes",
          "normalized": "T a(Maybe b)-\u003eT a b",
          "package": "event-list",
          "partial": "Maybes",
          "signature": "T time(Maybe body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:catMaybes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether time values are in ascending order.\nThe list is processed lazily and\ntimes that are smaller than there predecessors are replaced by \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e.\nIf you would remove the \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e times from the resulting list\nthe times may still not be ordered.\nE.g. consider the time list \u003ccode\u003e[0,3,1,2]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "checkTimes",
          "package": "event-list",
          "signature": "T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#checkTimes",
          "type": "function"
        },
        "index": {
          "description": "Check whether time values are in ascending order The list is processed lazily and times that are smaller than there predecessors are replaced by undefined If you would remove the undefined times from the resulting list the times may still not be ordered E.g consider the time list",
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "checkTimes",
          "normalized": "T a b-\u003eT a b",
          "package": "event-list",
          "partial": "Times",
          "signature": "T time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:checkTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe will also sometimes need a function which groups events by equal start times.\nThis implementation is not so obvious since we work with time differences.\nThe criterion is: Two neighbouring events start at the same time\nif the second one has zero time difference.\n\u003c/p\u003e",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "collectCoincident",
          "package": "event-list",
          "signature": "T time body -\u003e T time [body]",
          "source": "src/Data-EventList-Absolute-TimeBody.html#collectCoincident",
          "type": "function"
        },
        "index": {
          "description": "We will also sometimes need function which groups events by equal start times This implementation is not so obvious since we work with time differences The criterion is Two neighbouring events start at the same time if the second one has zero time difference",
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "collectCoincident",
          "normalized": "T a b-\u003eT a[b]",
          "package": "event-list",
          "partial": "Coincident",
          "signature": "T time body-\u003eT time[body]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:collectCoincident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "collectCoincidentFoldr",
          "package": "event-list",
          "signature": "T time body -\u003e T time [body]",
          "source": "src/Data-EventList-Absolute-TimeBody.html#collectCoincidentFoldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "collectCoincidentFoldr",
          "normalized": "T a b-\u003eT a[b]",
          "package": "event-list",
          "partial": "Coincident Foldr",
          "signature": "T time body-\u003eT time[body]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:collectCoincidentFoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWill fail on infinite lists.\n\u003c/p\u003e",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "collectCoincidentNonLazy",
          "package": "event-list",
          "signature": "T time body -\u003e T time [body]",
          "source": "src/Data-EventList-Absolute-TimeBody.html#collectCoincidentNonLazy",
          "type": "function"
        },
        "index": {
          "description": "Will fail on infinite lists",
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "collectCoincidentNonLazy",
          "normalized": "T a b-\u003eT a[b]",
          "package": "event-list",
          "partial": "Coincident Non Lazy",
          "signature": "T time body-\u003eT time[body]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:collectCoincidentNonLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "concat",
          "package": "event-list",
          "signature": "[T time body] -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "concat",
          "normalized": "[T a b]-\u003eT a b",
          "package": "event-list",
          "signature": "[T time body]-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "concatMapMonoid",
          "package": "event-list",
          "signature": "(time -\u003e m) -\u003e (body -\u003e m) -\u003e T time body -\u003e m",
          "source": "src/Data-EventList-Absolute-TimeBody.html#concatMapMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "concatMapMonoid",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eT a c-\u003eb",
          "package": "event-list",
          "partial": "Map Monoid",
          "signature": "(time-\u003em)-\u003e(body-\u003em)-\u003eT time body-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:concatMapMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "cons",
          "package": "event-list",
          "signature": "time -\u003e body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "cons",
          "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003ebody-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "cycle",
          "package": "event-list",
          "signature": "T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#cycle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "cycle",
          "normalized": "T a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "decreaseStart",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#decreaseStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "decreaseStart",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Start",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:decreaseStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "delay",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#delay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "delay",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHere are some functions for discretizing the time information.\nWhen converting the precise relative event times\nto the integer relative event times\nwe have to prevent accumulation of rounding errors.\nWe avoid this problem with a stateful conversion\nwhich remembers each rounding error we make.\nThis rounding error is used to correct the next rounding.\nGiven the relative time and duration of a note\nthe function \u003ccode\u003ediscretizeEventM\u003c/code\u003e creates a \u003ccode\u003eState\u003c/code\u003e\nwhich computes the rounded relative time.\nIt is corrected by previous rounding errors.\n\u003c/p\u003e\u003cp\u003eThe resulting event list may have differing time differences\nwhich were equal before discretization,\nbut the overall timing is uniformly close to the original.\n\u003c/p\u003e",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "discretize",
          "package": "event-list",
          "signature": "T time body -\u003e T i body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#discretize",
          "type": "function"
        },
        "index": {
          "description": "Here are some functions for discretizing the time information When converting the precise relative event times to the integer relative event times we have to prevent accumulation of rounding errors We avoid this problem with stateful conversion which remembers each rounding error we make This rounding error is used to correct the next rounding Given the relative time and duration of note the function discretizeEventM creates State which computes the rounded relative time It is corrected by previous rounding errors The resulting event list may have differing time differences which were equal before discretization but the overall timing is uniformly close to the original",
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "discretize",
          "normalized": "T a b-\u003eT c b",
          "package": "event-list",
          "signature": "T time body-\u003eT i body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:discretize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuration of an empty event list is considered zero.\nHowever, I'm not sure if this is sound.\n\u003c/p\u003e",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "duration",
          "package": "event-list",
          "signature": "T time body -\u003e time",
          "source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#duration",
          "type": "function"
        },
        "index": {
          "description": "Duration of an empty event list is considered zero However not sure if this is sound",
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "duration",
          "normalized": "T a b-\u003ea",
          "package": "event-list",
          "signature": "T time body-\u003etime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "empty",
          "package": "event-list",
          "signature": "T time body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "empty",
          "package": "event-list",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "filter",
          "package": "event-list",
          "signature": "(body -\u003e Bool) -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "signature": "(body-\u003eBool)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "flatten",
          "package": "event-list",
          "signature": "T time [body] -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#flatten",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "flatten",
          "normalized": "T a[b]-\u003eT a b",
          "package": "event-list",
          "signature": "T time[body]-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "foldr",
          "package": "event-list",
          "signature": "(time -\u003e a -\u003e b) -\u003e (body -\u003e b -\u003e a) -\u003e b -\u003e T time body -\u003e b",
          "source": "src/Data-EventList-Absolute-TimeBody.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ec-\u003eb)-\u003ec-\u003eT a d-\u003ec",
          "package": "event-list",
          "signature": "(time-\u003ea-\u003eb)-\u003e(body-\u003eb-\u003ea)-\u003eb-\u003eT time body-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "foldrPair",
          "package": "event-list",
          "signature": "(time -\u003e body -\u003e a -\u003e a) -\u003e a -\u003e T time body -\u003e a",
          "source": "src/Data-EventList-Absolute-TimeBody.html#foldrPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "foldrPair",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eT a b-\u003ec",
          "package": "event-list",
          "partial": "Pair",
          "signature": "(time-\u003ebody-\u003ea-\u003ea)-\u003ea-\u003eT time body-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:foldrPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "fromPairList",
          "package": "event-list",
          "signature": "[(a, b)] -\u003e T a b",
          "source": "src/Data-EventList-Absolute-TimeBody.html#fromPairList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "fromPairList",
          "normalized": "[(a,b)]-\u003eT a b",
          "package": "event-list",
          "partial": "Pair List",
          "signature": "[(a,b)]-\u003eT a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:fromPairList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "getBodies",
          "package": "event-list",
          "signature": "T time body -\u003e [body]",
          "source": "src/Data-EventList-Absolute-TimeBody.html#getBodies",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "getBodies",
          "normalized": "T a b-\u003e[b]",
          "package": "event-list",
          "partial": "Bodies",
          "signature": "T time body-\u003e[body]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:getBodies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "getTimes",
          "package": "event-list",
          "signature": "T time body -\u003e [time]",
          "source": "src/Data-EventList-Absolute-TimeBody.html#getTimes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "getTimes",
          "normalized": "T a b-\u003e[a]",
          "package": "event-list",
          "partial": "Times",
          "signature": "T time body-\u003e[time]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:getTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe final critical function is \u003ccode\u003einsert\u003c/code\u003e,\nwhich inserts an event\ninto an already time-ordered sequence of events.\nFor instance it is used in MidiFiles to insert a \u003ccode\u003eNoteOff\u003c/code\u003e event\ninto a list of \u003ccode\u003eNoteOn\u003c/code\u003e and \u003ccode\u003eNoteOff\u003c/code\u003e events.\n\u003c/p\u003e",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "insert",
          "package": "event-list",
          "signature": "time -\u003e body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#insert",
          "type": "function"
        },
        "index": {
          "description": "The final critical function is insert which inserts an event into an already time-ordered sequence of events For instance it is used in MidiFiles to insert NoteOff event into list of NoteOn and NoteOff events",
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003ebody-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "insertBy",
          "package": "event-list",
          "signature": "(body -\u003e body -\u003e Bool) -\u003e time -\u003e body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#insertBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "insertBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003ea-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "By",
          "signature": "(body-\u003ebody-\u003eBool)-\u003etime-\u003ebody-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:insertBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "isNormalized",
          "package": "event-list",
          "signature": "T time body -\u003e Bool",
          "source": "src/Data-EventList-Absolute-TimeBody.html#isNormalized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "isNormalized",
          "normalized": "T a b-\u003eBool",
          "package": "event-list",
          "partial": "Normalized",
          "signature": "T time body-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:isNormalized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mapBody",
          "package": "event-list",
          "signature": "(body0 -\u003e body1) -\u003e T time body0 -\u003e T time body1",
          "source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#mapBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mapBody",
          "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mapBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mapBodyM",
          "package": "event-list",
          "signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
          "source": "src/Data-EventList-Absolute-TimeBody.html#mapBodyM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mapBodyM",
          "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mapBodyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the lists of coincident events.\n\u003c/p\u003e",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mapCoincident",
          "package": "event-list",
          "signature": "([a] -\u003e [b]) -\u003e T time a -\u003e T time b",
          "source": "src/Data-EventList-Absolute-TimeBody.html#mapCoincident",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the lists of coincident events",
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mapCoincident",
          "normalized": "([a]-\u003e[b])-\u003eT c a-\u003eT c b",
          "package": "event-list",
          "partial": "Coincident",
          "signature": "([a]-\u003e[b])-\u003eT time a-\u003eT time b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mapCoincident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mapM",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
          "source": "src/Data-EventList-Absolute-TimeBody.html#mapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mapM",
          "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mapM_",
          "package": "event-list",
          "signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
          "source": "src/Data-EventList-Absolute-TimeBody.html#mapM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mapM_",
          "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
          "package": "event-list",
          "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mapMaybe",
          "package": "event-list",
          "signature": "(body0 -\u003e Maybe body1) -\u003e T time body0 -\u003e T time body1",
          "source": "src/Data-EventList-Absolute-TimeBody.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe a)-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "Maybe",
          "signature": "(body-\u003eMaybe body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mapTime",
          "package": "event-list",
          "signature": "(time0 -\u003e time1) -\u003e T time0 body -\u003e T time1 body",
          "source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#mapTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mapTime",
          "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mapTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mapTimeM",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
          "source": "src/Data-EventList-Absolute-TimeBody.html#mapTimeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mapTimeM",
          "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mapTimeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first important function is \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e\nwhich merges the events of two lists into a new time order list.\n\u003c/p\u003e",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "merge",
          "package": "event-list",
          "signature": "T time body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#merge",
          "type": "function"
        },
        "index": {
          "description": "The first important function is merge which merges the events of two lists into new time order list",
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "merge",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e compares entire events rather than just start\ntimes.  This is to ensure that it is commutative, a desirable\ncondition for some of the proofs used in secref{equivalence}.\nIt is also necessary to assert a unique representation\nof the performance independent of the structure of the 'Music.T note'.\nThe same function for inserting into a time ordered list with a trailing pause.\nThe strictness annotation is necessary for working with infinite lists.\n\u003c/p\u003e\u003cp\u003eHere are two other functions that are already known for non-padded time lists.\n\u003c/p\u003e",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mergeBy",
          "package": "event-list",
          "signature": "(body -\u003e body -\u003e Bool) -\u003e T time body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#mergeBy",
          "type": "function"
        },
        "index": {
          "description": "Note that merge compares entire events rather than just start times This is to ensure that it is commutative desirable condition for some of the proofs used in secref equivalence It is also necessary to assert unique representation of the performance independent of the structure of the Music.T note The same function for inserting into time ordered list with trailing pause The strictness annotation is necessary for working with infinite lists Here are two other functions that are already known for non-padded time lists",
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "mergeBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eT b a-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "By",
          "signature": "(body-\u003ebody-\u003eBool)-\u003eT time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mergeBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove events towards the front of the event list.\nYou must make sure, that no event is moved before time zero.\nThis works only for finite lists.\n\u003c/p\u003e",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "moveForward",
          "package": "event-list",
          "signature": "T time (time, body) -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#moveForward",
          "type": "function"
        },
        "index": {
          "description": "Move events towards the front of the event list You must make sure that no event is moved before time zero This works only for finite lists",
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "moveForward",
          "normalized": "T a(a,b)-\u003eT a b",
          "package": "event-list",
          "partial": "Forward",
          "signature": "T time(time,body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:moveForward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e sorts a list of coinciding events,\nthat is all events but the first one have time difference 0.\n\u003ccode\u003e\u003ca\u003enormalize\u003c/a\u003e\u003c/code\u003e sorts all coinciding events in a list\nthus yielding a canonical representation of a time ordered list.\n\u003c/p\u003e",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "normalize",
          "package": "event-list",
          "signature": "T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#normalize",
          "type": "function"
        },
        "index": {
          "description": "sort sorts list of coinciding events that is all events but the first one have time difference normalize sorts all coinciding events in list thus yielding canonical representation of time ordered list",
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "normalize",
          "normalized": "T a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "null",
          "package": "event-list",
          "signature": "T time body -\u003e Bool",
          "source": "src/Data-EventList-Absolute-TimeBody.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "null",
          "normalized": "T a b-\u003eBool",
          "package": "event-list",
          "signature": "T time body-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "partition",
          "package": "event-list",
          "signature": "(body -\u003e Bool) -\u003e T time body -\u003e (T time body, T time body)",
          "source": "src/Data-EventList-Absolute-TimeBody.html#partition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eT b a-\u003e(T b a,T b a)",
          "package": "event-list",
          "signature": "(body-\u003eBool)-\u003eT time body-\u003e(T time body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "partitionMaybe",
          "package": "event-list",
          "signature": "(body0 -\u003e Maybe body1) -\u003e T time body0 -\u003e (T time body1, T time body0)",
          "source": "src/Data-EventList-Absolute-TimeBody.html#partitionMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "partitionMaybe",
          "normalized": "(a-\u003eMaybe a)-\u003eT b a-\u003e(T b a,T b a)",
          "package": "event-list",
          "partial": "Maybe",
          "signature": "(body-\u003eMaybe body)-\u003eT time body-\u003e(T time body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:partitionMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "resample",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T i body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#resample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "resample",
          "normalized": "a-\u003eT a b-\u003eT c b",
          "package": "event-list",
          "signature": "time-\u003eT time body-\u003eT i body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:resample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "singleton",
          "package": "event-list",
          "signature": "time -\u003e body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003ebody-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince we need it later for MIDI generation,\nwe will also define a slicing into equivalence classes of events.\n\u003c/p\u003e",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "slice",
          "package": "event-list",
          "signature": "(body -\u003e a) -\u003e T time body -\u003e [(a, T time body)]",
          "source": "src/Data-EventList-Absolute-TimeBody.html#slice",
          "type": "function"
        },
        "index": {
          "description": "Since we need it later for MIDI generation we will also define slicing into equivalence classes of events",
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "slice",
          "normalized": "(a-\u003eb)-\u003eT c a-\u003e[(b,T c a)]",
          "package": "event-list",
          "signature": "(body-\u003ea)-\u003eT time body-\u003e[(a,T time body)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "snoc",
          "package": "event-list",
          "signature": "T time body -\u003e time -\u003e body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeBody.html#snoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "snoc",
          "normalized": "T a b-\u003ea-\u003eb-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003etime-\u003ebody-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "switchL",
          "package": "event-list",
          "signature": "c -\u003e ((time, body) -\u003e T time body -\u003e c) -\u003e T time body -\u003e c",
          "source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#switchL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "switchL",
          "normalized": "a-\u003e((b,c)-\u003eT b c-\u003ea)-\u003eT b c-\u003ea",
          "package": "event-list",
          "signature": "c-\u003e((time,body)-\u003eT time body-\u003ec)-\u003eT time body-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:switchL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "switchR",
          "package": "event-list",
          "signature": "c -\u003e (T time body -\u003e (time, body) -\u003e c) -\u003e T time body -\u003e c",
          "source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#switchR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "switchR",
          "normalized": "a-\u003e(T b c-\u003e(b,c)-\u003ea)-\u003eT b c-\u003ea",
          "package": "event-list",
          "signature": "c-\u003e(T time body-\u003e(time,body)-\u003ec)-\u003eT time body-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:switchR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "toPairList",
          "package": "event-list",
          "signature": "T a b -\u003e [(a, b)]",
          "source": "src/Data-EventList-Absolute-TimeBody.html#toPairList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "toPairList",
          "normalized": "T a b-\u003e[(a,b)]",
          "package": "event-list",
          "partial": "Pair List",
          "signature": "T a b-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:toPairList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "traverse",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
          "source": "src/Data-EventList-Absolute-TimeBody.html#traverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "traverse",
          "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "traverseBody",
          "package": "event-list",
          "signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
          "source": "src/Data-EventList-Absolute-TimeBody.html#traverseBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "traverseBody",
          "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:traverseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "traverseTime",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
          "source": "src/Data-EventList-Absolute-TimeBody.html#traverseTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "traverseTime",
          "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:traverseTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "traverse_",
          "package": "event-list",
          "signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
          "source": "src/Data-EventList-Absolute-TimeBody.html#traverse_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "traverse_",
          "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
          "package": "event-list",
          "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:traverse_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "viewL",
          "package": "event-list",
          "signature": "T time body -\u003e Maybe ((time, body), T time body)",
          "source": "src/Data-EventList-Absolute-TimeBody.html#viewL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "viewL",
          "normalized": "T a b-\u003eMaybe((a,b),T a b)",
          "package": "event-list",
          "signature": "T time body-\u003eMaybe((time,body),T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:viewL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "viewR",
          "package": "event-list",
          "signature": "T time body -\u003e Maybe (T time body, (time, body))",
          "source": "src/Data-EventList-Absolute-TimeBody.html#viewR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeBody",
          "module": "Data.EventList.Absolute.TimeBody",
          "name": "viewR",
          "normalized": "T a b-\u003eMaybe(T a b,(a,b))",
          "package": "event-list",
          "signature": "T time body-\u003eMaybe(T time body,(time,body))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:viewR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeMixed",
          "name": "TimeMixed",
          "package": "event-list",
          "source": "src/Data-EventList-Absolute-TimeMixed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeMixed",
          "module": "Data.EventList.Absolute.TimeMixed",
          "name": "TimeMixed",
          "package": "event-list",
          "partial": "Time Mixed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeMixed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeMixed",
          "name": "mapTimeInit",
          "package": "event-list",
          "signature": "(T time body0 -\u003e T time body1) -\u003e T time body0 -\u003e T time body1",
          "source": "src/Data-EventList-Absolute-TimeTimePrivate.html#mapTimeInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeMixed",
          "module": "Data.EventList.Absolute.TimeMixed",
          "name": "mapTimeInit",
          "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time Init",
          "signature": "(T time body-\u003eT time body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeMixed.html#v:mapTimeInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeMixed",
          "name": "snocBody",
          "package": "event-list",
          "signature": "T time body -\u003e body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTimePrivate.html#snocBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeMixed",
          "module": "Data.EventList.Absolute.TimeMixed",
          "name": "snocBody",
          "normalized": "T a b-\u003eb-\u003eT a b",
          "package": "event-list",
          "partial": "Body",
          "signature": "T time body-\u003ebody-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeMixed.html#v:snocBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeMixed",
          "name": "snocTime",
          "package": "event-list",
          "signature": "T time body -\u003e time -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTimePrivate.html#snocTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeMixed",
          "module": "Data.EventList.Absolute.TimeMixed",
          "name": "snocTime",
          "normalized": "T a b-\u003ea-\u003eT a b",
          "package": "event-list",
          "partial": "Time",
          "signature": "T time body-\u003etime-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeMixed.html#v:snocTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeMixed",
          "name": "switchBodyR",
          "package": "event-list",
          "signature": "a -\u003e (T time body -\u003e body -\u003e a) -\u003e T time body -\u003e a",
          "source": "src/Data-EventList-Absolute-TimeTimePrivate.html#switchBodyR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeMixed",
          "module": "Data.EventList.Absolute.TimeMixed",
          "name": "switchBodyR",
          "normalized": "a-\u003e(T b c-\u003ec-\u003ea)-\u003eT b c-\u003ea",
          "package": "event-list",
          "partial": "Body",
          "signature": "a-\u003e(T time body-\u003ebody-\u003ea)-\u003eT time body-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeMixed.html#v:switchBodyR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeMixed",
          "name": "switchTimeR",
          "package": "event-list",
          "signature": "(T time body -\u003e time -\u003e a) -\u003e T time body -\u003e a",
          "source": "src/Data-EventList-Absolute-TimeTimePrivate.html#switchTimeR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeMixed",
          "module": "Data.EventList.Absolute.TimeMixed",
          "name": "switchTimeR",
          "normalized": "(T a b-\u003ea-\u003ec)-\u003eT a b-\u003ec",
          "package": "event-list",
          "partial": "Time",
          "signature": "(T time body-\u003etime-\u003ea)-\u003eT time body-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeMixed.html#v:switchTimeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeMixed",
          "name": "viewBodyR",
          "package": "event-list",
          "signature": "T time body -\u003e Maybe (T time body, body)",
          "source": "src/Data-EventList-Absolute-TimeTimePrivate.html#viewBodyR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeMixed",
          "module": "Data.EventList.Absolute.TimeMixed",
          "name": "viewBodyR",
          "normalized": "T a b-\u003eMaybe(T a b,b)",
          "package": "event-list",
          "partial": "Body",
          "signature": "T time body-\u003eMaybe(T time body,body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeMixed.html#v:viewBodyR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeMixed",
          "name": "viewTimeR",
          "package": "event-list",
          "signature": "T time body -\u003e (T time body, time)",
          "source": "src/Data-EventList-Absolute-TimeTimePrivate.html#viewTimeR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeMixed",
          "module": "Data.EventList.Absolute.TimeMixed",
          "name": "viewTimeR",
          "normalized": "T a b-\u003e(T a b,a)",
          "package": "event-list",
          "partial": "Time",
          "signature": "T time body-\u003e(T time body,time)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeMixed.html#v:viewTimeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent list with absolute times starting with a time and ending with a body\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "TimeTime",
          "package": "event-list",
          "source": "src/Data-EventList-Absolute-TimeTime.html",
          "type": "module"
        },
        "index": {
          "description": "Event list with absolute times starting with time and ending with body",
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "TimeTime",
          "package": "event-list",
          "partial": "Time Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "T",
          "package": "event-list",
          "source": "src/Data-EventList-Absolute-TimeTimePrivate.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "T",
          "package": "event-list",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "append",
          "package": "event-list",
          "signature": "T time body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "append",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "catMaybes",
          "package": "event-list",
          "signature": "T time (Maybe body) -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#catMaybes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "catMaybes",
          "normalized": "T a(Maybe b)-\u003eT a b",
          "package": "event-list",
          "partial": "Maybes",
          "signature": "T time(Maybe body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:catMaybes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "collectCoincident",
          "package": "event-list",
          "signature": "T time body -\u003e T time [body]",
          "source": "src/Data-EventList-Absolute-TimeTime.html#collectCoincident",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "collectCoincident",
          "normalized": "T a b-\u003eT a[b]",
          "package": "event-list",
          "partial": "Coincident",
          "signature": "T time body-\u003eT time[body]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:collectCoincident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "concat",
          "package": "event-list",
          "signature": "[T time body] -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "concat",
          "normalized": "[T a b]-\u003eT a b",
          "package": "event-list",
          "signature": "[T time body]-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "concatMapMonoid",
          "package": "event-list",
          "signature": "(time -\u003e m) -\u003e (body -\u003e m) -\u003e T time body -\u003e m",
          "source": "src/Data-EventList-Absolute-TimeTime.html#concatMapMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "concatMapMonoid",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eT a c-\u003eb",
          "package": "event-list",
          "partial": "Map Monoid",
          "signature": "(time-\u003em)-\u003e(body-\u003em)-\u003eT time body-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:concatMapMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "cons",
          "package": "event-list",
          "signature": "time -\u003e body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "cons",
          "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003ebody-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "cycle",
          "package": "event-list",
          "signature": "T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#cycle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "cycle",
          "normalized": "T a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "decreaseStart",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#decreaseStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "decreaseStart",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Start",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:decreaseStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "delay",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#delay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "delay",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "discretize",
          "package": "event-list",
          "signature": "T time body -\u003e T i body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#discretize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "discretize",
          "normalized": "T a b-\u003eT c b",
          "package": "event-list",
          "signature": "T time body-\u003eT i body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:discretize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "duration",
          "package": "event-list",
          "signature": "T time body -\u003e time",
          "source": "src/Data-EventList-Absolute-TimeTime.html#duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "duration",
          "normalized": "T a b-\u003ea",
          "package": "event-list",
          "signature": "T time body-\u003etime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "filter",
          "package": "event-list",
          "signature": "(body -\u003e Bool) -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "signature": "(body-\u003eBool)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "flatten",
          "package": "event-list",
          "signature": "T time [body] -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#flatten",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "flatten",
          "normalized": "T a[b]-\u003eT a b",
          "package": "event-list",
          "signature": "T time[body]-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "foldr",
          "package": "event-list",
          "signature": "(time -\u003e a -\u003e b) -\u003e (body -\u003e b -\u003e a) -\u003e a -\u003e T time body -\u003e b",
          "source": "src/Data-EventList-Absolute-TimeTime.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ec-\u003eb)-\u003eb-\u003eT a d-\u003ec",
          "package": "event-list",
          "signature": "(time-\u003ea-\u003eb)-\u003e(body-\u003eb-\u003ea)-\u003ea-\u003eT time body-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "getBodies",
          "package": "event-list",
          "signature": "T time body -\u003e [body]",
          "source": "src/Data-EventList-Absolute-TimeTime.html#getBodies",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "getBodies",
          "normalized": "T a b-\u003e[b]",
          "package": "event-list",
          "partial": "Bodies",
          "signature": "T time body-\u003e[body]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:getBodies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "getTimes",
          "package": "event-list",
          "signature": "T time body -\u003e [time]",
          "source": "src/Data-EventList-Absolute-TimeTime.html#getTimes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "getTimes",
          "normalized": "T a b-\u003e[a]",
          "package": "event-list",
          "partial": "Times",
          "signature": "T time body-\u003e[time]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:getTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "insert",
          "package": "event-list",
          "signature": "time -\u003e body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003ebody-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "insertBy",
          "package": "event-list",
          "signature": "(body -\u003e body -\u003e Bool) -\u003e time -\u003e body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#insertBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "insertBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003ea-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "By",
          "signature": "(body-\u003ebody-\u003eBool)-\u003etime-\u003ebody-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:insertBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "isNormalized",
          "package": "event-list",
          "signature": "T time body -\u003e Bool",
          "source": "src/Data-EventList-Absolute-TimeTime.html#isNormalized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "isNormalized",
          "normalized": "T a b-\u003eBool",
          "package": "event-list",
          "partial": "Normalized",
          "signature": "T time body-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:isNormalized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "isPause",
          "package": "event-list",
          "signature": "T time body -\u003e Bool",
          "source": "src/Data-EventList-Absolute-TimeTime.html#isPause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "isPause",
          "normalized": "T a b-\u003eBool",
          "package": "event-list",
          "partial": "Pause",
          "signature": "T time body-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:isPause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mapBody",
          "package": "event-list",
          "signature": "(body0 -\u003e body1) -\u003e T time body0 -\u003e T time body1",
          "source": "src/Data-EventList-Absolute-TimeTime.html#mapBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mapBody",
          "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mapBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mapBodyM",
          "package": "event-list",
          "signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
          "source": "src/Data-EventList-Absolute-TimeTime.html#mapBodyM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mapBodyM",
          "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mapBodyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the lists of coincident events.\n\u003c/p\u003e",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mapCoincident",
          "package": "event-list",
          "signature": "([a] -\u003e [b]) -\u003e T time a -\u003e T time b",
          "source": "src/Data-EventList-Absolute-TimeTime.html#mapCoincident",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the lists of coincident events",
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mapCoincident",
          "normalized": "([a]-\u003e[b])-\u003eT c a-\u003eT c b",
          "package": "event-list",
          "partial": "Coincident",
          "signature": "([a]-\u003e[b])-\u003eT time a-\u003eT time b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mapCoincident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mapM",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
          "source": "src/Data-EventList-Absolute-TimeTime.html#mapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mapM",
          "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mapM_",
          "package": "event-list",
          "signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
          "source": "src/Data-EventList-Absolute-TimeTime.html#mapM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mapM_",
          "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
          "package": "event-list",
          "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mapMaybe",
          "package": "event-list",
          "signature": "(body0 -\u003e Maybe body1) -\u003e T time body0 -\u003e T time body1",
          "source": "src/Data-EventList-Absolute-TimeTime.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe a)-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "Maybe",
          "signature": "(body-\u003eMaybe body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mapTime",
          "package": "event-list",
          "signature": "(time0 -\u003e time1) -\u003e T time0 body -\u003e T time1 body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#mapTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mapTime",
          "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mapTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mapTimeM",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
          "source": "src/Data-EventList-Absolute-TimeTime.html#mapTimeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mapTimeM",
          "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mapTimeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "merge",
          "package": "event-list",
          "signature": "T time body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#merge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "merge",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mergeBy",
          "package": "event-list",
          "signature": "(body -\u003e body -\u003e Bool) -\u003e T time body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#mergeBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "mergeBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eT b a-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "By",
          "signature": "(body-\u003ebody-\u003eBool)-\u003eT time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mergeBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove events towards the front of the event list.\nYou must make sure, that no event is moved before time zero.\nThis works only for finite lists.\n\u003c/p\u003e",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "moveForward",
          "package": "event-list",
          "signature": "T time (time, body) -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#moveForward",
          "type": "function"
        },
        "index": {
          "description": "Move events towards the front of the event list You must make sure that no event is moved before time zero This works only for finite lists",
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "moveForward",
          "normalized": "T a(a,b)-\u003eT a b",
          "package": "event-list",
          "partial": "Forward",
          "signature": "T time(time,body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:moveForward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e sorts a list of coinciding events,\nthat is all events but the first one have time difference 0.\n\u003ccode\u003e\u003ca\u003enormalize\u003c/a\u003e\u003c/code\u003e sorts all coinciding events in a list\nthus yielding a canonical representation of a time ordered list.\n\u003c/p\u003e",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "normalize",
          "package": "event-list",
          "signature": "T time body -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#normalize",
          "type": "function"
        },
        "index": {
          "description": "sort sorts list of coinciding events that is all events but the first one have time difference normalize sorts all coinciding events in list thus yielding canonical representation of time ordered list",
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "normalize",
          "normalized": "T a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "partition",
          "package": "event-list",
          "signature": "(body -\u003e Bool) -\u003e T time body -\u003e (T time body, T time body)",
          "source": "src/Data-EventList-Absolute-TimeTime.html#partition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eT b a-\u003e(T b a,T b a)",
          "package": "event-list",
          "signature": "(body-\u003eBool)-\u003eT time body-\u003e(T time body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "pause",
          "package": "event-list",
          "signature": "time -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#pause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "pause",
          "normalized": "a-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:pause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "resample",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T i body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#resample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "resample",
          "normalized": "a-\u003eT a b-\u003eT c b",
          "package": "event-list",
          "signature": "time-\u003eT time body-\u003eT i body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:resample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "slice",
          "package": "event-list",
          "signature": "(body -\u003e a) -\u003e T time body -\u003e [(a, T time body)]",
          "source": "src/Data-EventList-Absolute-TimeTime.html#slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "slice",
          "normalized": "(a-\u003eb)-\u003eT c a-\u003e[(b,T c a)]",
          "package": "event-list",
          "signature": "(body-\u003ea)-\u003eT time body-\u003e[(a,T time body)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "snoc",
          "package": "event-list",
          "signature": "T time body -\u003e body -\u003e time -\u003e T time body",
          "source": "src/Data-EventList-Absolute-TimeTime.html#snoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "snoc",
          "normalized": "T a b-\u003eb-\u003ea-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003ebody-\u003etime-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "switchL",
          "package": "event-list",
          "signature": "(time -\u003e a) -\u003e ((time, body) -\u003e T time body -\u003e a) -\u003e T time body -\u003e a",
          "source": "src/Data-EventList-Absolute-TimeTime.html#switchL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "switchL",
          "normalized": "(a-\u003eb)-\u003e((a,c)-\u003eT a c-\u003eb)-\u003eT a c-\u003eb",
          "package": "event-list",
          "signature": "(time-\u003ea)-\u003e((time,body)-\u003eT time body-\u003ea)-\u003eT time body-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:switchL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "traverse",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
          "source": "src/Data-EventList-Absolute-TimeTime.html#traverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "traverse",
          "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "traverseBody",
          "package": "event-list",
          "signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
          "source": "src/Data-EventList-Absolute-TimeTime.html#traverseBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "traverseBody",
          "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:traverseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "traverseTime",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
          "source": "src/Data-EventList-Absolute-TimeTime.html#traverseTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "traverseTime",
          "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:traverseTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "traverse_",
          "package": "event-list",
          "signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
          "source": "src/Data-EventList-Absolute-TimeTime.html#traverse_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "traverse_",
          "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
          "package": "event-list",
          "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:traverse_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "viewL",
          "package": "event-list",
          "signature": "T time body -\u003e (time, Maybe (body, T time body))",
          "source": "src/Data-EventList-Absolute-TimeTime.html#viewL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Absolute TimeTime",
          "module": "Data.EventList.Absolute.TimeTime",
          "name": "viewL",
          "normalized": "T a b-\u003e(a,Maybe(b,T a b))",
          "package": "event-list",
          "signature": "T time body-\u003e(time,Maybe(body,T time body))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:viewL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent lists starting with a body and ending with a body.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.EventList.Relative.BodyBody",
          "name": "BodyBody",
          "package": "event-list",
          "source": "src/Data-EventList-Relative-BodyBody.html",
          "type": "module"
        },
        "index": {
          "description": "Event lists starting with body and ending with body",
          "hierarchy": "Data EventList Relative BodyBody",
          "module": "Data.EventList.Relative.BodyBody",
          "name": "BodyBody",
          "package": "event-list",
          "partial": "Body Body",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyBody.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyBody",
          "name": "T",
          "package": "event-list",
          "source": "src/Data-EventList-Relative-BodyBodyPrivate.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyBody",
          "module": "Data.EventList.Relative.BodyBody",
          "name": "T",
          "package": "event-list",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyBody.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyBody",
          "name": "concatMapMonoid",
          "package": "event-list",
          "signature": "(time -\u003e m) -\u003e (body -\u003e m) -\u003e T time body -\u003e m",
          "source": "src/Data-EventList-Relative-BodyBody.html#concatMapMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyBody",
          "module": "Data.EventList.Relative.BodyBody",
          "name": "concatMapMonoid",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eT a c-\u003eb",
          "package": "event-list",
          "partial": "Map Monoid",
          "signature": "(time-\u003em)-\u003e(body-\u003em)-\u003eT time body-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyBody.html#v:concatMapMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyBody",
          "name": "mapM",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
          "source": "src/Data-EventList-Relative-BodyBody.html#mapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyBody",
          "module": "Data.EventList.Relative.BodyBody",
          "name": "mapM",
          "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyBody.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyBody",
          "name": "traverse",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
          "source": "src/Data-EventList-Relative-BodyBody.html#traverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyBody",
          "module": "Data.EventList.Relative.BodyBody",
          "name": "traverse",
          "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyBody.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent lists starting with a body and ending with a time difference.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "BodyTime",
          "package": "event-list",
          "source": "src/Data-EventList-Relative-BodyTime.html",
          "type": "module"
        },
        "index": {
          "description": "Event lists starting with body and ending with time difference",
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "BodyTime",
          "package": "event-list",
          "partial": "Body Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "T",
          "package": "event-list",
          "source": "src/Data-EventList-Relative-BodyTimePrivate.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "T",
          "package": "event-list",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "concatMapMonoid",
          "package": "event-list",
          "signature": "(time -\u003e m) -\u003e (body -\u003e m) -\u003e T time body -\u003e m",
          "source": "src/Data-EventList-Relative-BodyTime.html#concatMapMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "concatMapMonoid",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eT a c-\u003eb",
          "package": "event-list",
          "partial": "Map Monoid",
          "signature": "(time-\u003em)-\u003e(body-\u003em)-\u003eT time body-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:concatMapMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "cons",
          "package": "event-list",
          "signature": "body -\u003e time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-BodyTime.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "cons",
          "normalized": "a-\u003eb-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "signature": "body-\u003etime-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "duration",
          "package": "event-list",
          "signature": "T time body -\u003e time",
          "source": "src/Data-EventList-Relative-BodyTime.html#duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "duration",
          "normalized": "T a b-\u003ea",
          "package": "event-list",
          "signature": "T time body-\u003etime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "durationR",
          "package": "event-list",
          "signature": "T time body -\u003e time",
          "source": "src/Data-EventList-Relative-BodyTime.html#durationR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "durationR",
          "normalized": "T a b-\u003ea",
          "package": "event-list",
          "signature": "T time body-\u003etime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:durationR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EventList.Relative.BodyTime\",\"Data.EventList.Relative.MixedTime\"]",
          "name": "empty",
          "package": "event-list",
          "signature": "T time body",
          "source": "src/Data-EventList-Relative-BodyTime.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:empty\",\"http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:empty\"]"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "empty",
          "package": "event-list",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "foldr",
          "package": "event-list",
          "signature": "(body -\u003e a -\u003e b) -\u003e (time -\u003e b -\u003e a) -\u003e b -\u003e T time body -\u003e b",
          "source": "src/Data-EventList-Relative-BodyTime.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ec-\u003eb)-\u003ec-\u003eT d a-\u003ec",
          "package": "event-list",
          "signature": "(body-\u003ea-\u003eb)-\u003e(time-\u003eb-\u003ea)-\u003eb-\u003eT time body-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "foldrPair",
          "package": "event-list",
          "signature": "(body -\u003e time -\u003e a -\u003e a) -\u003e a -\u003e T time body -\u003e a",
          "source": "src/Data-EventList-Relative-BodyTime.html#foldrPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "foldrPair",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eT b a-\u003ec",
          "package": "event-list",
          "partial": "Pair",
          "signature": "(body-\u003etime-\u003ea-\u003ea)-\u003ea-\u003eT time body-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:foldrPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "fromPairList",
          "package": "event-list",
          "signature": "[(body, time)] -\u003e T time body",
          "source": "src/Data-EventList-Relative-BodyTime.html#fromPairList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "fromPairList",
          "normalized": "[(a,b)]-\u003eT b a",
          "package": "event-list",
          "partial": "Pair List",
          "signature": "[(body,time)]-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:fromPairList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "getBodies",
          "package": "event-list",
          "signature": "T time body -\u003e [body]",
          "source": "src/Data-EventList-Relative-BodyTime.html#getBodies",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "getBodies",
          "normalized": "T a b-\u003e[b]",
          "package": "event-list",
          "partial": "Bodies",
          "signature": "T time body-\u003e[body]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:getBodies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "getTimes",
          "package": "event-list",
          "signature": "T time body -\u003e [time]",
          "source": "src/Data-EventList-Relative-BodyTime.html#getTimes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "getTimes",
          "normalized": "T a b-\u003e[a]",
          "package": "event-list",
          "partial": "Times",
          "signature": "T time body-\u003e[time]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:getTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "mapBody",
          "package": "event-list",
          "signature": "(body0 -\u003e body1) -\u003e T time body0 -\u003e T time body1",
          "source": "src/Data-EventList-Relative-BodyTime.html#mapBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "mapBody",
          "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:mapBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "mapBodyM",
          "package": "event-list",
          "signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
          "source": "src/Data-EventList-Relative-BodyTime.html#mapBodyM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "mapBodyM",
          "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:mapBodyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "mapM",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
          "source": "src/Data-EventList-Relative-BodyTime.html#mapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "mapM",
          "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "mapM_",
          "package": "event-list",
          "signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
          "source": "src/Data-EventList-Relative-BodyTime.html#mapM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "mapM_",
          "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
          "package": "event-list",
          "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "mapTime",
          "package": "event-list",
          "signature": "(time0 -\u003e time1) -\u003e T time0 body -\u003e T time1 body",
          "source": "src/Data-EventList-Relative-BodyTime.html#mapTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "mapTime",
          "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:mapTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "mapTimeM",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
          "source": "src/Data-EventList-Relative-BodyTime.html#mapTimeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "mapTimeM",
          "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:mapTimeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "null",
          "package": "event-list",
          "signature": "T time body -\u003e Bool",
          "source": "src/Data-EventList-Relative-BodyTime.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "null",
          "normalized": "T a b-\u003eBool",
          "package": "event-list",
          "signature": "T time body-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "singleton",
          "package": "event-list",
          "signature": "body -\u003e time -\u003e T time body",
          "source": "src/Data-EventList-Relative-BodyTime.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eT b a",
          "package": "event-list",
          "signature": "body-\u003etime-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "snoc",
          "package": "event-list",
          "signature": "T time body -\u003e body -\u003e time -\u003e T time body",
          "source": "src/Data-EventList-Relative-BodyTime.html#snoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "snoc",
          "normalized": "T a b-\u003eb-\u003ea-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003ebody-\u003etime-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "span",
          "package": "event-list",
          "signature": "(body -\u003e Bool) -\u003e T time body -\u003e (T time body, T time body)",
          "source": "src/Data-EventList-Relative-BodyTime.html#span",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003eT b a-\u003e(T b a,T b a)",
          "package": "event-list",
          "signature": "(body-\u003eBool)-\u003eT time body-\u003e(T time body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "switchL",
          "package": "event-list",
          "signature": "c -\u003e (body -\u003e time -\u003e T time body -\u003e c) -\u003e T time body -\u003e c",
          "source": "src/Data-EventList-Relative-BodyTime.html#switchL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "switchL",
          "normalized": "a-\u003e(b-\u003ec-\u003eT c b-\u003ea)-\u003eT c b-\u003ea",
          "package": "event-list",
          "signature": "c-\u003e(body-\u003etime-\u003eT time body-\u003ec)-\u003eT time body-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:switchL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "switchR",
          "package": "event-list",
          "signature": "c -\u003e (T time body -\u003e body -\u003e time -\u003e c) -\u003e T time body -\u003e c",
          "source": "src/Data-EventList-Relative-BodyTime.html#switchR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "switchR",
          "normalized": "a-\u003e(T b c-\u003ec-\u003eb-\u003ea)-\u003eT b c-\u003ea",
          "package": "event-list",
          "signature": "c-\u003e(T time body-\u003ebody-\u003etime-\u003ec)-\u003eT time body-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:switchR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "toPairList",
          "package": "event-list",
          "signature": "T time body -\u003e [(body, time)]",
          "source": "src/Data-EventList-Relative-BodyTime.html#toPairList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "toPairList",
          "normalized": "T a b-\u003e[(b,a)]",
          "package": "event-list",
          "partial": "Pair List",
          "signature": "T time body-\u003e[(body,time)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:toPairList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "traverse",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
          "source": "src/Data-EventList-Relative-BodyTime.html#traverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "traverse",
          "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "traverseBody",
          "package": "event-list",
          "signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
          "source": "src/Data-EventList-Relative-BodyTime.html#traverseBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "traverseBody",
          "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:traverseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "traverseTime",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
          "source": "src/Data-EventList-Relative-BodyTime.html#traverseTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "traverseTime",
          "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:traverseTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "traverse_",
          "package": "event-list",
          "signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
          "source": "src/Data-EventList-Relative-BodyTime.html#traverse_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "traverse_",
          "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
          "package": "event-list",
          "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:traverse_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "viewL",
          "package": "event-list",
          "signature": "T time body -\u003e Maybe ((body, time), T time body)",
          "source": "src/Data-EventList-Relative-BodyTime.html#viewL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "viewL",
          "normalized": "T a b-\u003eMaybe((b,a),T a b)",
          "package": "event-list",
          "signature": "T time body-\u003eMaybe((body,time),T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:viewL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.BodyTime",
          "name": "viewR",
          "package": "event-list",
          "signature": "T time body -\u003e Maybe (T time body, (body, time))",
          "source": "src/Data-EventList-Relative-BodyTime.html#viewR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative BodyTime",
          "module": "Data.EventList.Relative.BodyTime",
          "name": "viewR",
          "normalized": "T a b-\u003eMaybe(T a b,(b,a))",
          "package": "event-list",
          "signature": "T time body-\u003eMaybe(T time body,(body,time))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:viewR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent lists starting with a body and ending with a time difference.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.EventList.Relative.MixedBody",
          "name": "MixedBody",
          "package": "event-list",
          "source": "src/Data-EventList-Relative-MixedBody.html",
          "type": "module"
        },
        "index": {
          "description": "Event lists starting with body and ending with time difference",
          "hierarchy": "Data EventList Relative MixedBody",
          "module": "Data.EventList.Relative.MixedBody",
          "name": "MixedBody",
          "package": "event-list",
          "partial": "Mixed Body",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedBody",
          "name": "(/.)",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-MixedBody.html#consTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedBody",
          "module": "Data.EventList.Relative.MixedBody",
          "name": "(/.) /.",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:-47-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedBody",
          "name": "(./)",
          "package": "event-list",
          "signature": "body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-MixedBody.html#consBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedBody",
          "module": "Data.EventList.Relative.MixedBody",
          "name": "(./) ./",
          "normalized": "a-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "signature": "body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:.-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedBody",
          "name": "consBody",
          "package": "event-list",
          "signature": "body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-MixedBody.html#consBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedBody",
          "module": "Data.EventList.Relative.MixedBody",
          "name": "consBody",
          "normalized": "a-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "Body",
          "signature": "body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:consBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedBody",
          "name": "consTime",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-MixedBody.html#consTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedBody",
          "module": "Data.EventList.Relative.MixedBody",
          "name": "consTime",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:consTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EventList.Relative.MixedBody\",\"Data.EventList.Relative.TimeBody\"]",
          "name": "empty",
          "package": "event-list",
          "signature": "T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:empty\",\"http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:empty\"]"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedBody",
          "module": "Data.EventList.Relative.MixedBody",
          "name": "empty",
          "package": "event-list",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedBody",
          "name": "mapTimeHead",
          "package": "event-list",
          "signature": "(time -\u003e time) -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBodyPrivate.html#mapTimeHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedBody",
          "module": "Data.EventList.Relative.MixedBody",
          "name": "mapTimeHead",
          "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time Head",
          "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:mapTimeHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedBody",
          "name": "mapTimeL",
          "package": "event-list",
          "signature": "(time -\u003e time, T time body0 -\u003e T time body1) -\u003e T time body0 -\u003e T time body1",
          "source": "src/Data-EventList-Relative-TimeBodyPrivate.html#mapTimeL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedBody",
          "module": "Data.EventList.Relative.MixedBody",
          "name": "mapTimeL",
          "normalized": "(a-\u003ea,T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003etime,T time body-\u003eT time body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:mapTimeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedBody",
          "name": "mapTimeTail",
          "package": "event-list",
          "signature": "(T time body0 -\u003e T time body1) -\u003e T time body0 -\u003e T time body1",
          "source": "src/Data-EventList-Relative-TimeBodyPrivate.html#mapTimeTail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedBody",
          "module": "Data.EventList.Relative.MixedBody",
          "name": "mapTimeTail",
          "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time Tail",
          "signature": "(T time body-\u003eT time body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:mapTimeTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedBody",
          "name": "switchBodyL",
          "package": "event-list",
          "signature": "(body -\u003e T time body -\u003e a) -\u003e T time body -\u003e a",
          "source": "src/Data-EventList-Relative-MixedBody.html#switchBodyL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedBody",
          "module": "Data.EventList.Relative.MixedBody",
          "name": "switchBodyL",
          "normalized": "(a-\u003eT b a-\u003ec)-\u003eT b a-\u003ec",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003eT time body-\u003ea)-\u003eT time body-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:switchBodyL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedBody",
          "name": "switchTimeL",
          "package": "event-list",
          "signature": "a -\u003e (time -\u003e T time body -\u003e a) -\u003e T time body -\u003e a",
          "source": "src/Data-EventList-Relative-MixedBody.html#switchTimeL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedBody",
          "module": "Data.EventList.Relative.MixedBody",
          "name": "switchTimeL",
          "normalized": "a-\u003e(b-\u003eT b c-\u003ea)-\u003eT b c-\u003ea",
          "package": "event-list",
          "partial": "Time",
          "signature": "a-\u003e(time-\u003eT time body-\u003ea)-\u003eT time body-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:switchTimeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedBody",
          "name": "viewBodyL",
          "package": "event-list",
          "signature": "T time body -\u003e (body, T time body)",
          "source": "src/Data-EventList-Relative-MixedBody.html#viewBodyL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedBody",
          "module": "Data.EventList.Relative.MixedBody",
          "name": "viewBodyL",
          "normalized": "T a b-\u003e(b,T a b)",
          "package": "event-list",
          "partial": "Body",
          "signature": "T time body-\u003e(body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:viewBodyL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedBody",
          "name": "viewTimeL",
          "package": "event-list",
          "signature": "T time body -\u003e Maybe (time, T time body)",
          "source": "src/Data-EventList-Relative-MixedBody.html#viewTimeL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedBody",
          "module": "Data.EventList.Relative.MixedBody",
          "name": "viewTimeL",
          "normalized": "T a b-\u003eMaybe(a,T a b)",
          "package": "event-list",
          "partial": "Time",
          "signature": "T time body-\u003eMaybe(time,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:viewTimeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent lists starting with a body and ending with a time difference.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.EventList.Relative.MixedTime",
          "name": "MixedTime",
          "package": "event-list",
          "source": "src/Data-EventList-Relative-MixedTime.html",
          "type": "module"
        },
        "index": {
          "description": "Event lists starting with body and ending with time difference",
          "hierarchy": "Data EventList Relative MixedTime",
          "module": "Data.EventList.Relative.MixedTime",
          "name": "MixedTime",
          "package": "event-list",
          "partial": "Mixed Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedTime",
          "name": "(/.)",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-MixedTime.html#%2F.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedTime",
          "module": "Data.EventList.Relative.MixedTime",
          "name": "(/.) /.",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:-47-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedTime",
          "name": "(./)",
          "package": "event-list",
          "signature": "body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-MixedTime.html#.%2F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedTime",
          "module": "Data.EventList.Relative.MixedTime",
          "name": "(./) ./",
          "normalized": "a-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "signature": "body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:.-47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedTime",
          "name": "consBody",
          "package": "event-list",
          "signature": "body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#consBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedTime",
          "module": "Data.EventList.Relative.MixedTime",
          "name": "consBody",
          "normalized": "a-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "Body",
          "signature": "body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:consBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedTime",
          "name": "consTime",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#consTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedTime",
          "module": "Data.EventList.Relative.MixedTime",
          "name": "consTime",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:consTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedTime",
          "name": "mapBodyHead",
          "package": "event-list",
          "signature": "(body -\u003e body) -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-MixedTime.html#mapBodyHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedTime",
          "module": "Data.EventList.Relative.MixedTime",
          "name": "mapBodyHead",
          "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "Body Head",
          "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:mapBodyHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedTime",
          "name": "mapBodyL",
          "package": "event-list",
          "signature": "(body -\u003e body, T time0 body -\u003e T time1 body) -\u003e T time0 body -\u003e T time1 body",
          "source": "src/Data-EventList-Relative-MixedTime.html#mapBodyL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedTime",
          "module": "Data.EventList.Relative.MixedTime",
          "name": "mapBodyL",
          "normalized": "(a-\u003ea,T b a-\u003eT b a)-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003ebody,T time body-\u003eT time body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:mapBodyL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedTime",
          "name": "mapBodyTail",
          "package": "event-list",
          "signature": "(T time0 body -\u003e T time1 body) -\u003e T time0 body -\u003e T time1 body",
          "source": "src/Data-EventList-Relative-MixedTime.html#mapBodyTail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedTime",
          "module": "Data.EventList.Relative.MixedTime",
          "name": "mapBodyTail",
          "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Body Tail",
          "signature": "(T time body-\u003eT time body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:mapBodyTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedTime",
          "name": "mapTimeHead",
          "package": "event-list",
          "signature": "(time -\u003e time) -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#mapTimeHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedTime",
          "module": "Data.EventList.Relative.MixedTime",
          "name": "mapTimeHead",
          "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time Head",
          "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:mapTimeHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedTime",
          "name": "mapTimeL",
          "package": "event-list",
          "signature": "(time -\u003e time, T time body0 -\u003e T time body1) -\u003e T time body0 -\u003e T time body1",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#mapTimeL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedTime",
          "module": "Data.EventList.Relative.MixedTime",
          "name": "mapTimeL",
          "normalized": "(a-\u003ea,T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003etime,T time body-\u003eT time body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:mapTimeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedTime",
          "name": "mapTimeTail",
          "package": "event-list",
          "signature": "(T time body0 -\u003e T time body1) -\u003e T time body0 -\u003e T time body1",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#mapTimeTail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedTime",
          "module": "Data.EventList.Relative.MixedTime",
          "name": "mapTimeTail",
          "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time Tail",
          "signature": "(T time body-\u003eT time body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:mapTimeTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedTime",
          "name": "switchBodyL",
          "package": "event-list",
          "signature": "a -\u003e (body -\u003e T time body -\u003e a) -\u003e T time body -\u003e a",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#switchBodyL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedTime",
          "module": "Data.EventList.Relative.MixedTime",
          "name": "switchBodyL",
          "normalized": "a-\u003e(b-\u003eT c b-\u003ea)-\u003eT c b-\u003ea",
          "package": "event-list",
          "partial": "Body",
          "signature": "a-\u003e(body-\u003eT time body-\u003ea)-\u003eT time body-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:switchBodyL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedTime",
          "name": "switchTimeL",
          "package": "event-list",
          "signature": "(time -\u003e T time body -\u003e a) -\u003e T time body -\u003e a",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#switchTimeL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedTime",
          "module": "Data.EventList.Relative.MixedTime",
          "name": "switchTimeL",
          "normalized": "(a-\u003eT a b-\u003ec)-\u003eT a b-\u003ec",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003eT time body-\u003ea)-\u003eT time body-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:switchTimeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedTime",
          "name": "viewBodyL",
          "package": "event-list",
          "signature": "T time body -\u003e Maybe (body, T time body)",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#viewBodyL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedTime",
          "module": "Data.EventList.Relative.MixedTime",
          "name": "viewBodyL",
          "normalized": "T a b-\u003eMaybe(b,T a b)",
          "package": "event-list",
          "partial": "Body",
          "signature": "T time body-\u003eMaybe(body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:viewBodyL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.MixedTime",
          "name": "viewTimeL",
          "package": "event-list",
          "signature": "T time body -\u003e (time, T time body)",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#viewTimeL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative MixedTime",
          "module": "Data.EventList.Relative.MixedTime",
          "name": "viewTimeL",
          "normalized": "T a b-\u003e(a,T a b)",
          "package": "event-list",
          "partial": "Time",
          "signature": "T time body-\u003e(time,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:viewTimeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent lists starting with a time difference and ending with a body.\n\u003c/p\u003e\u003cp\u003eThe time is stored in differences between the events.\nThus there is no increase of time information for long,\nor even infinite, streams of events.\nFurther on, the time difference is stored\nin the latter of two neighbouring events.\nThis is necessary for real-time computing\nwhere it is not known whether and when the next event happens.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "TimeBody",
          "package": "event-list",
          "source": "src/Data-EventList-Relative-TimeBody.html",
          "type": "module"
        },
        "index": {
          "description": "Event lists starting with time difference and ending with body The time is stored in differences between the events Thus there is no increase of time information for long or even infinite streams of events Further on the time difference is stored in the latter of two neighbouring events This is necessary for real-time computing where it is not known whether and when the next event happens",
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "TimeBody",
          "package": "event-list",
          "partial": "Time Body",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "T",
          "package": "event-list",
          "source": "src/Data-EventList-Relative-TimeBodyPrivate.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "T",
          "package": "event-list",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "append",
          "package": "event-list",
          "signature": "T time body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "append",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds times in a left-associative fashion.\nUse this if the time is a strict data type.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "catMaybes",
          "package": "event-list",
          "signature": "T time (Maybe body) -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#catMaybes",
          "type": "function"
        },
        "index": {
          "description": "Adds times in left-associative fashion Use this if the time is strict data type",
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "catMaybes",
          "normalized": "T a(Maybe b)-\u003eT a b",
          "package": "event-list",
          "partial": "Maybes",
          "signature": "T time(Maybe body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:catMaybes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup events that have equal start times\n(that is zero time differences).\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "collectCoincident",
          "package": "event-list",
          "signature": "T time body -\u003e T time [body]",
          "source": "src/Data-EventList-Relative-TimeBody.html#collectCoincident",
          "type": "function"
        },
        "index": {
          "description": "Group events that have equal start times that is zero time differences",
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "collectCoincident",
          "normalized": "T a b-\u003eT a[b]",
          "package": "event-list",
          "partial": "Coincident",
          "signature": "T time body-\u003eT time[body]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:collectCoincident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "concat",
          "package": "event-list",
          "signature": "[T time body] -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "concat",
          "normalized": "[T a b]-\u003eT a b",
          "package": "event-list",
          "signature": "[T time body]-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "concatMapMonoid",
          "package": "event-list",
          "signature": "(time -\u003e m) -\u003e (body -\u003e m) -\u003e T time body -\u003e m",
          "source": "src/Data-EventList-Relative-TimeBody.html#concatMapMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "concatMapMonoid",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eT a c-\u003eb",
          "package": "event-list",
          "partial": "Map Monoid",
          "signature": "(time-\u003em)-\u003e(body-\u003em)-\u003eT time body-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:concatMapMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "cons",
          "package": "event-list",
          "signature": "time -\u003e body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "cons",
          "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003ebody-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "cycle",
          "package": "event-list",
          "signature": "T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#cycle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "cycle",
          "normalized": "T a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "decreaseStart",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#decreaseStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "decreaseStart",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Start",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:decreaseStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "delay",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#delay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "delay",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe provide \u003ccode\u003e\u003ca\u003ediscretize\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eresample\u003c/a\u003e\u003c/code\u003e for discretizing the time information.\nWhen converting the precise relative event times\nto the integer relative event times\nwe have to prevent accumulation of rounding errors.\nWe avoid this problem with a stateful conversion\nwhich remembers each rounding error we make.\nThis rounding error is used to correct the next rounding.\nGiven the relative time and duration of an event\nthe function \u003ccode\u003efloorDiff\u003c/code\u003e creates a \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e\nwhich computes the rounded relative time.\nIt is corrected by previous rounding errors.\n\u003c/p\u003e\u003cp\u003eThe resulting event list may have differing time differences\nwhich were equal before discretization,\nbut the overall timing is uniformly close to the original.\n\u003c/p\u003e\u003cp\u003eWe use \u003ccode\u003efloorDiff\u003c/code\u003e rather than \u003ccode\u003eroundDiff\u003c/code\u003e\nin order to compute exclusively with non-negative numbers.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "discretize",
          "package": "event-list",
          "signature": "T time body -\u003e T i body",
          "source": "src/Data-EventList-Relative-TimeBody.html#discretize",
          "type": "function"
        },
        "index": {
          "description": "We provide discretize and resample for discretizing the time information When converting the precise relative event times to the integer relative event times we have to prevent accumulation of rounding errors We avoid this problem with stateful conversion which remembers each rounding error we make This rounding error is used to correct the next rounding Given the relative time and duration of an event the function floorDiff creates State which computes the rounded relative time It is corrected by previous rounding errors The resulting event list may have differing time differences which were equal before discretization but the overall timing is uniformly close to the original We use floorDiff rather than roundDiff in order to compute exclusively with non-negative numbers",
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "discretize",
          "normalized": "T a b-\u003eT c b",
          "package": "event-list",
          "signature": "T time body-\u003eT i body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:discretize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "duration",
          "package": "event-list",
          "signature": "T time body -\u003e time",
          "source": "src/Data-EventList-Relative-TimeBody.html#duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "duration",
          "normalized": "T a b-\u003ea",
          "package": "event-list",
          "signature": "T time body-\u003etime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep only events that match a predicate while preserving absolute times.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "filter",
          "package": "event-list",
          "signature": "(body -\u003e Bool) -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Keep only events that match predicate while preserving absolute times",
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "signature": "(body-\u003eBool)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse to collectCoincident:\nTurn each \u003ccode\u003ebody\u003c/code\u003e into a separate event.\n\u003c/p\u003e\u003cpre\u003e   xs  ==  flatten (collectCoincident xs)\n\u003c/pre\u003e",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "flatten",
          "package": "event-list",
          "signature": "T time [body] -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#flatten",
          "type": "function"
        },
        "index": {
          "description": "Reverse to collectCoincident Turn each body into separate event xs flatten collectCoincident xs",
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "flatten",
          "normalized": "T a[b]-\u003eT a b",
          "package": "event-list",
          "signature": "T time[body]-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "foldr",
          "package": "event-list",
          "signature": "(time -\u003e a -\u003e b) -\u003e (body -\u003e b -\u003e a) -\u003e b -\u003e T time body -\u003e b",
          "source": "src/Data-EventList-Relative-TimeBody.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ec-\u003eb)-\u003ec-\u003eT a d-\u003ec",
          "package": "event-list",
          "signature": "(time-\u003ea-\u003eb)-\u003e(body-\u003eb-\u003ea)-\u003eb-\u003eT time body-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "foldrPair",
          "package": "event-list",
          "signature": "(time -\u003e body -\u003e a -\u003e a) -\u003e a -\u003e T time body -\u003e a",
          "source": "src/Data-EventList-Relative-TimeBody.html#foldrPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "foldrPair",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eT a b-\u003ec",
          "package": "event-list",
          "partial": "Pair",
          "signature": "(time-\u003ebody-\u003ea-\u003ea)-\u003ea-\u003eT time body-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:foldrPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "fromAbsoluteEventList",
          "package": "event-list",
          "signature": "T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#fromAbsoluteEventList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "fromAbsoluteEventList",
          "normalized": "T a b-\u003eT a b",
          "package": "event-list",
          "partial": "Absolute Event List",
          "signature": "T time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:fromAbsoluteEventList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "fromPairList",
          "package": "event-list",
          "signature": "[(a, b)] -\u003e T a b",
          "source": "src/Data-EventList-Relative-TimeBody.html#fromPairList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "fromPairList",
          "normalized": "[(a,b)]-\u003eT a b",
          "package": "event-list",
          "partial": "Pair List",
          "signature": "[(a,b)]-\u003eT a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:fromPairList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "getBodies",
          "package": "event-list",
          "signature": "T time body -\u003e [body]",
          "source": "src/Data-EventList-Relative-TimeBody.html#getBodies",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "getBodies",
          "normalized": "T a b-\u003e[b]",
          "package": "event-list",
          "partial": "Bodies",
          "signature": "T time body-\u003e[body]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:getBodies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "getTimes",
          "package": "event-list",
          "signature": "T time body -\u003e [time]",
          "source": "src/Data-EventList-Relative-TimeBody.html#getTimes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "getTimes",
          "normalized": "T a b-\u003e[a]",
          "package": "event-list",
          "partial": "Times",
          "signature": "T time body-\u003e[time]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:getTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e inserts an event into an event list at the given time.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "insert",
          "package": "event-list",
          "signature": "time -\u003e body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#insert",
          "type": "function"
        },
        "index": {
          "description": "insert inserts an event into an event list at the given time",
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003ebody-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "insertBy",
          "package": "event-list",
          "signature": "(body -\u003e body -\u003e Bool) -\u003e time -\u003e body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#insertBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "insertBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003ea-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "By",
          "signature": "(body-\u003ebody-\u003eBool)-\u003etime-\u003ebody-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:insertBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "isNormalized",
          "package": "event-list",
          "signature": "T time body -\u003e Bool",
          "source": "src/Data-EventList-Relative-TimeBody.html#isNormalized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "isNormalized",
          "normalized": "T a b-\u003eBool",
          "package": "event-list",
          "partial": "Normalized",
          "signature": "T time body-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:isNormalized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mapBody",
          "package": "event-list",
          "signature": "(body0 -\u003e body1) -\u003e T time body0 -\u003e T time body1",
          "source": "src/Data-EventList-Relative-TimeBody.html#mapBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mapBody",
          "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mapBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mapBodyM",
          "package": "event-list",
          "signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
          "source": "src/Data-EventList-Relative-TimeBody.html#mapBodyM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mapBodyM",
          "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mapBodyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the lists of coincident events.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mapCoincident",
          "package": "event-list",
          "signature": "([a] -\u003e [b]) -\u003e T time a -\u003e T time b",
          "source": "src/Data-EventList-Relative-TimeBody.html#mapCoincident",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the lists of coincident events",
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mapCoincident",
          "normalized": "([a]-\u003e[b])-\u003eT c a-\u003eT c b",
          "package": "event-list",
          "partial": "Coincident",
          "signature": "([a]-\u003e[b])-\u003eT time a-\u003eT time b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mapCoincident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mapM",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
          "source": "src/Data-EventList-Relative-TimeBody.html#mapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mapM",
          "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mapM_",
          "package": "event-list",
          "signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
          "source": "src/Data-EventList-Relative-TimeBody.html#mapM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mapM_",
          "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
          "package": "event-list",
          "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mapMaybe",
          "package": "event-list",
          "signature": "(body0 -\u003e Maybe body1) -\u003e T time body0 -\u003e T time body1",
          "source": "src/Data-EventList-Relative-TimeBody.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe a)-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "Maybe",
          "signature": "(body-\u003eMaybe body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mapTime",
          "package": "event-list",
          "signature": "(time0 -\u003e time1) -\u003e T time0 body -\u003e T time1 body",
          "source": "src/Data-EventList-Relative-TimeBody.html#mapTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mapTime",
          "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mapTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mapTimeM",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
          "source": "src/Data-EventList-Relative-TimeBody.html#mapTimeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mapTimeM",
          "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mapTimeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function merges the events of two lists into a new event list.\nNote that \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e compares entire events rather than just start times.\nThis is to ensure that it is commutative,\none of the properties we test for.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "merge",
          "package": "event-list",
          "signature": "T time body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#merge",
          "type": "function"
        },
        "index": {
          "description": "This function merges the events of two lists into new event list Note that merge compares entire events rather than just start times This is to ensure that it is commutative one of the properties we test for",
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "merge",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emergeBy\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e but does not simply use the methods of the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class\nbut allows a custom comparison function.\nIf in event lists \u003ccode\u003exs\u003c/code\u003e and \u003ccode\u003eys\u003c/code\u003e there are coinciding elements \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e,\nand \u003ccode\u003ecmp x y\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\nthen \u003ccode\u003ex\u003c/code\u003e comes before \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003emergeBy cmp xs ys\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e EventList\u003e EventList.mergeBy (\\_ _ -\u003e True) (0 /. 'a' ./ empty) (0 /. 'b' ./ empty)\n 0 /. 'a' ./ 0 /. 'b' ./ empty\n\n EventList\u003e EventList.mergeBy (\\_ _ -\u003e False) (0 /. 'a' ./ empty) (0 /. 'b' ./ empty)\n 0 /. 'b' ./ 0 /. 'a' ./ empty\n\u003c/pre\u003e",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mergeBy",
          "package": "event-list",
          "signature": "(body -\u003e body -\u003e Bool) -\u003e T time body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#mergeBy",
          "type": "function"
        },
        "index": {
          "description": "mergeBy is like merge but does not simply use the methods of the Ord class but allows custom comparison function If in event lists xs and ys there are coinciding elements and and cmp is True then comes before in mergeBy cmp xs ys EventList EventList.mergeBy True empty empty empty EventList EventList.mergeBy False empty empty empty",
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "mergeBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eT b a-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "By",
          "signature": "(body-\u003ebody-\u003eBool)-\u003eT time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mergeBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove events towards the front of the event list.\nYou must make sure, that no event is moved before time zero.\nThis works only for finite lists.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "moveForward",
          "package": "event-list",
          "signature": "T time (time, body) -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#moveForward",
          "type": "function"
        },
        "index": {
          "description": "Move events towards the front of the event list You must make sure that no event is moved before time zero This works only for finite lists",
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "moveForward",
          "normalized": "T a(a,b)-\u003eT a b",
          "package": "event-list",
          "partial": "Forward",
          "signature": "T time(time,body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:moveForward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e sorts a list of coinciding events,\nthat is all events but the first one have time difference 0.\n\u003ccode\u003e\u003ca\u003enormalize\u003c/a\u003e\u003c/code\u003e sorts all coinciding events in a list\nthus yielding a canonical representation of a time ordered list.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "normalize",
          "package": "event-list",
          "signature": "T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#normalize",
          "type": "function"
        },
        "index": {
          "description": "sort sorts list of coinciding events that is all events but the first one have time difference normalize sorts all coinciding events in list thus yielding canonical representation of time ordered list",
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "normalize",
          "normalized": "T a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "null",
          "package": "event-list",
          "signature": "T time body -\u003e Bool",
          "source": "src/Data-EventList-Relative-TimeBody.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "null",
          "normalized": "T a b-\u003eBool",
          "package": "event-list",
          "signature": "T time body-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "partition",
          "package": "event-list",
          "signature": "(body -\u003e Bool) -\u003e T time body -\u003e (T time body, T time body)",
          "source": "src/Data-EventList-Relative-TimeBody.html#partition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eT b a-\u003e(T b a,T b a)",
          "package": "event-list",
          "signature": "(body-\u003eBool)-\u003eT time body-\u003e(T time body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "partitionMaybe",
          "package": "event-list",
          "signature": "(body0 -\u003e Maybe body1) -\u003e T time body0 -\u003e (T time body1, T time body0)",
          "source": "src/Data-EventList-Relative-TimeBody.html#partitionMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "partitionMaybe",
          "normalized": "(a-\u003eMaybe a)-\u003eT b a-\u003e(T b a,T b a)",
          "package": "event-list",
          "partial": "Maybe",
          "signature": "(body-\u003eMaybe body)-\u003eT time body-\u003e(T time body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:partitionMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "resample",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T i body",
          "source": "src/Data-EventList-Relative-TimeBody.html#resample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "resample",
          "normalized": "a-\u003eT a b-\u003eT c b",
          "package": "event-list",
          "signature": "time-\u003eT time body-\u003eT i body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:resample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "singleton",
          "package": "event-list",
          "signature": "time -\u003e body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003ebody-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing a classification function\nwe splice the event list into lists, each containing the same class.\nAbsolute time stamps are preserved.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "slice",
          "package": "event-list",
          "signature": "(body -\u003e a) -\u003e T time body -\u003e [(a, T time body)]",
          "source": "src/Data-EventList-Relative-TimeBody.html#slice",
          "type": "function"
        },
        "index": {
          "description": "Using classification function we splice the event list into lists each containing the same class Absolute time stamps are preserved",
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "slice",
          "normalized": "(a-\u003eb)-\u003eT c a-\u003e[(b,T c a)]",
          "package": "event-list",
          "signature": "(body-\u003ea)-\u003eT time body-\u003e[(a,T time body)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "snoc",
          "package": "event-list",
          "signature": "T time body -\u003e time -\u003e body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#snoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "snoc",
          "normalized": "T a b-\u003ea-\u003eb-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003etime-\u003ebody-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "span",
          "package": "event-list",
          "signature": "(body -\u003e Bool) -\u003e T time body -\u003e (T time body, T time body)",
          "source": "src/Data-EventList-Relative-TimeBody.html#span",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003eT b a-\u003e(T b a,T b a)",
          "package": "event-list",
          "signature": "(body-\u003eBool)-\u003eT time body-\u003e(T time body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "switchL",
          "package": "event-list",
          "signature": "c -\u003e ((time, body) -\u003e T time body -\u003e c) -\u003e T time body -\u003e c",
          "source": "src/Data-EventList-Relative-TimeBody.html#switchL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "switchL",
          "normalized": "a-\u003e((b,c)-\u003eT b c-\u003ea)-\u003eT b c-\u003ea",
          "package": "event-list",
          "signature": "c-\u003e((time,body)-\u003eT time body-\u003ec)-\u003eT time body-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:switchL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "switchR",
          "package": "event-list",
          "signature": "c -\u003e (T time body -\u003e (time, body) -\u003e c) -\u003e T time body -\u003e c",
          "source": "src/Data-EventList-Relative-TimeBody.html#switchR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "switchR",
          "normalized": "a-\u003e(T b c-\u003e(b,c)-\u003ea)-\u003eT b c-\u003ea",
          "package": "event-list",
          "signature": "c-\u003e(T time body-\u003e(time,body)-\u003ec)-\u003eT time body-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:switchR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe tried hard to compute everything with respect to relative times.\nHowever sometimes we need absolute time values.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "toAbsoluteEventList",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeBody.html#toAbsoluteEventList",
          "type": "function"
        },
        "index": {
          "description": "We tried hard to compute everything with respect to relative times However sometimes we need absolute time values",
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "toAbsoluteEventList",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Absolute Event List",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:toAbsoluteEventList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "toPairList",
          "package": "event-list",
          "signature": "T a b -\u003e [(a, b)]",
          "source": "src/Data-EventList-Relative-TimeBody.html#toPairList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "toPairList",
          "normalized": "T a b-\u003e[(a,b)]",
          "package": "event-list",
          "partial": "Pair List",
          "signature": "T a b-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:toPairList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "traverse",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
          "source": "src/Data-EventList-Relative-TimeBody.html#traverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "traverse",
          "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "traverseBody",
          "package": "event-list",
          "signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
          "source": "src/Data-EventList-Relative-TimeBody.html#traverseBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "traverseBody",
          "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:traverseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "traverseTime",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
          "source": "src/Data-EventList-Relative-TimeBody.html#traverseTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "traverseTime",
          "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:traverseTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "traverse_",
          "package": "event-list",
          "signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
          "source": "src/Data-EventList-Relative-TimeBody.html#traverse_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "traverse_",
          "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
          "package": "event-list",
          "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:traverse_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "unzip",
          "package": "event-list",
          "signature": "T time (body0, body1) -\u003e (T time body0, T time body1)",
          "source": "src/Data-EventList-Relative-TimeBody.html#unzip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "unzip",
          "normalized": "T a(b,b)-\u003e(T a b,T a b)",
          "package": "event-list",
          "signature": "T time(body,body)-\u003e(T time body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "viewL",
          "package": "event-list",
          "signature": "T time body -\u003e Maybe ((time, body), T time body)",
          "source": "src/Data-EventList-Relative-TimeBody.html#viewL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "viewL",
          "normalized": "T a b-\u003eMaybe((a,b),T a b)",
          "package": "event-list",
          "signature": "T time body-\u003eMaybe((time,body),T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:viewL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "viewR",
          "package": "event-list",
          "signature": "T time body -\u003e Maybe (T time body, (time, body))",
          "source": "src/Data-EventList-Relative-TimeBody.html#viewR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "viewR",
          "normalized": "T a b-\u003eMaybe(T a b,(a,b))",
          "package": "event-list",
          "signature": "T time body-\u003eMaybe(T time body,(time,body))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:viewR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "zipWithBody",
          "package": "event-list",
          "signature": "(body0 -\u003e body1 -\u003e body2) -\u003e [body0] -\u003e T time body1 -\u003e T time body2",
          "source": "src/Data-EventList-Relative-TimeBody.html#zipWithBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "zipWithBody",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "With Body",
          "signature": "(body-\u003ebody-\u003ebody)-\u003e[body]-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:zipWithBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeBody",
          "name": "zipWithTime",
          "package": "event-list",
          "signature": "(time0 -\u003e time1 -\u003e time2) -\u003e [time0] -\u003e T time1 body -\u003e T time2 body",
          "source": "src/Data-EventList-Relative-TimeBody.html#zipWithTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeBody",
          "module": "Data.EventList.Relative.TimeBody",
          "name": "zipWithTime",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "With Time",
          "signature": "(time-\u003etime-\u003etime)-\u003e[time]-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:zipWithTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent lists starting with a body and ending with a time difference.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "TimeMixed",
          "package": "event-list",
          "source": "src/Data-EventList-Relative-TimeMixed.html",
          "type": "module"
        },
        "index": {
          "description": "Event lists starting with body and ending with time difference",
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "TimeMixed",
          "package": "event-list",
          "partial": "Time Mixed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is not a good name, expect a change.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "appendBodyEnd",
          "package": "event-list",
          "signature": "T time body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeMixed.html#appendBodyEnd",
          "type": "function"
        },
        "index": {
          "description": "This is not good name expect change",
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "appendBodyEnd",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Body End",
          "signature": "T time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:appendBodyEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "dropTime",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeMixed.html#dropTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "dropTime",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:dropTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "mapBodyInit",
          "package": "event-list",
          "signature": "(T time0 body -\u003e T time1 body) -\u003e T time0 body -\u003e T time1 body",
          "source": "src/Data-EventList-Relative-TimeMixed.html#mapBodyInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "mapBodyInit",
          "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Body Init",
          "signature": "(T time body-\u003eT time body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:mapBodyInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "mapBodyLast",
          "package": "event-list",
          "signature": "(body -\u003e body) -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeMixed.html#mapBodyLast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "mapBodyLast",
          "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "Body Last",
          "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:mapBodyLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "mapBodyR",
          "package": "event-list",
          "signature": "(T time0 body -\u003e T time1 body, body -\u003e body) -\u003e T time0 body -\u003e T time1 body",
          "source": "src/Data-EventList-Relative-TimeMixed.html#mapBodyR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "mapBodyR",
          "normalized": "(T a b-\u003eT a b,b-\u003eb)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Body",
          "signature": "(T time body-\u003eT time body,body-\u003ebody)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:mapBodyR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "mapTimeInit",
          "package": "event-list",
          "signature": "(T time body0 -\u003e T time body1) -\u003e T time body0 -\u003e T time body1",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#mapTimeInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "mapTimeInit",
          "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time Init",
          "signature": "(T time body-\u003eT time body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:mapTimeInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "mapTimeLast",
          "package": "event-list",
          "signature": "(time -\u003e time) -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#mapTimeLast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "mapTimeLast",
          "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time Last",
          "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:mapTimeLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "mapTimeR",
          "package": "event-list",
          "signature": "(T time body0 -\u003e T time body1, time -\u003e time) -\u003e T time body0 -\u003e T time body1",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#mapTimeR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "mapTimeR",
          "normalized": "(T a b-\u003eT a b,a-\u003ea)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time",
          "signature": "(T time body-\u003eT time body,time-\u003etime)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:mapTimeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is not a good name, expect a change.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "prependBodyEnd",
          "package": "event-list",
          "signature": "T time body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeMixed.html#prependBodyEnd",
          "type": "function"
        },
        "index": {
          "description": "This is not good name expect change",
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "prependBodyEnd",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Body End",
          "signature": "T time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:prependBodyEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "snocBody",
          "package": "event-list",
          "signature": "T time body -\u003e body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeMixed.html#snocBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "snocBody",
          "normalized": "T a b-\u003eb-\u003eT a b",
          "package": "event-list",
          "partial": "Body",
          "signature": "T time body-\u003ebody-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:snocBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "snocTime",
          "package": "event-list",
          "signature": "T time body -\u003e time -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeMixed.html#snocTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "snocTime",
          "normalized": "T a b-\u003ea-\u003eT a b",
          "package": "event-list",
          "partial": "Time",
          "signature": "T time body-\u003etime-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:snocTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "splitAtTime",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e (T time body, T time body)",
          "source": "src/Data-EventList-Relative-TimeMixed.html#splitAtTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "splitAtTime",
          "normalized": "a-\u003eT a b-\u003e(T a b,T a b)",
          "package": "event-list",
          "partial": "At Time",
          "signature": "time-\u003eT time body-\u003e(T time body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:splitAtTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "switchBodyR",
          "package": "event-list",
          "signature": "a -\u003e (T time body -\u003e body -\u003e a) -\u003e T time body -\u003e a",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#switchBodyR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "switchBodyR",
          "normalized": "a-\u003e(T b c-\u003ec-\u003ea)-\u003eT b c-\u003ea",
          "package": "event-list",
          "partial": "Body",
          "signature": "a-\u003e(T time body-\u003ebody-\u003ea)-\u003eT time body-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:switchBodyR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "switchTimeR",
          "package": "event-list",
          "signature": "(T time body -\u003e time -\u003e a) -\u003e T time body -\u003e a",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#switchTimeR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "switchTimeR",
          "normalized": "(T a b-\u003ea-\u003ec)-\u003eT a b-\u003ec",
          "package": "event-list",
          "partial": "Time",
          "signature": "(T time body-\u003etime-\u003ea)-\u003eT time body-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:switchTimeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "takeTime",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeMixed.html#takeTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "takeTime",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:takeTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "viewBodyR",
          "package": "event-list",
          "signature": "T time body -\u003e Maybe (T time body, body)",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#viewBodyR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "viewBodyR",
          "normalized": "T a b-\u003eMaybe(T a b,b)",
          "package": "event-list",
          "partial": "Body",
          "signature": "T time body-\u003eMaybe(T time body,body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:viewBodyR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "viewTimeR",
          "package": "event-list",
          "signature": "T time body -\u003e (T time body, time)",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#viewTimeR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeMixed",
          "module": "Data.EventList.Relative.TimeMixed",
          "name": "viewTimeR",
          "normalized": "T a b-\u003e(T a b,a)",
          "package": "event-list",
          "partial": "Time",
          "signature": "T time body-\u003e(T time body,time)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:viewTimeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent lists starting with a time difference and ending with a time difference.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "TimeTime",
          "package": "event-list",
          "source": "src/Data-EventList-Relative-TimeTime.html",
          "type": "module"
        },
        "index": {
          "description": "Event lists starting with time difference and ending with time difference",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "TimeTime",
          "package": "event-list",
          "partial": "Time Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "T",
          "package": "event-list",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "T",
          "package": "event-list",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "append",
          "package": "event-list",
          "signature": "T time body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "append",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge several event lists respecting the start time of the outer event list.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "arrange",
          "package": "event-list",
          "signature": "T time (T time body) -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#arrange",
          "type": "function"
        },
        "index": {
          "description": "Merge several event lists respecting the start time of the outer event list",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "arrange",
          "normalized": "T a(T a b)-\u003eT a b",
          "package": "event-list",
          "signature": "T time(T time body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:arrange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "arrangeBy",
          "package": "event-list",
          "signature": "(body -\u003e body -\u003e Bool) -\u003e T time (T time body) -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#arrangeBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "arrangeBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eT b(T b a)-\u003eT b a",
          "package": "event-list",
          "partial": "By",
          "signature": "(body-\u003ebody-\u003eBool)-\u003eT time(T time body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:arrangeBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds times in a left-associative fashion.\nUse this if the time is a strict data type.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "catMaybes",
          "package": "event-list",
          "signature": "T time (Maybe body) -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#catMaybes",
          "type": "function"
        },
        "index": {
          "description": "Adds times in left-associative fashion Use this if the time is strict data type",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "catMaybes",
          "normalized": "T a(Maybe b)-\u003eT a b",
          "package": "event-list",
          "partial": "Maybes",
          "signature": "T time(Maybe body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:catMaybes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds times in a right-associative fashion.\nUse this if the time is a data type like lazy Peano numbers\nor \u003ca\u003eNumeric.NonNegative.Chunky\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "catMaybesR",
          "package": "event-list",
          "signature": "T time (Maybe body) -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#catMaybesR",
          "type": "function"
        },
        "index": {
          "description": "Adds times in right-associative fashion Use this if the time is data type like lazy Peano numbers or Numeric.NonNegative.Chunky",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "catMaybesR",
          "normalized": "T a(Maybe b)-\u003eT a b",
          "package": "event-list",
          "partial": "Maybes",
          "signature": "T time(Maybe body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:catMaybesR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "collectCoincident",
          "package": "event-list",
          "signature": "T time body -\u003e T time [body]",
          "source": "src/Data-EventList-Relative-TimeTime.html#collectCoincident",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "collectCoincident",
          "normalized": "T a b-\u003eT a[b]",
          "package": "event-list",
          "partial": "Coincident",
          "signature": "T time body-\u003eT time[body]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:collectCoincident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "concat",
          "package": "event-list",
          "signature": "[T time body] -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "concat",
          "normalized": "[T a b]-\u003eT a b",
          "package": "event-list",
          "signature": "[T time body]-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "concatMapMonoid",
          "package": "event-list",
          "signature": "(time -\u003e m) -\u003e (body -\u003e m) -\u003e T time body -\u003e m",
          "source": "src/Data-EventList-Relative-TimeTime.html#concatMapMonoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "concatMapMonoid",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eT a c-\u003eb",
          "package": "event-list",
          "partial": "Map Monoid",
          "signature": "(time-\u003em)-\u003e(body-\u003em)-\u003eT time body-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:concatMapMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econcatNaive\u003c/a\u003e\u003c/code\u003e are essentially the same.\n\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e must use \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e in order to work on infinite lists,\nhowever if there are many empty lists,\nsumming of their durations will be done from right to left,\nwhich is inefficient.\nThus we detect subsequent empty lists and merge them from left to right.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "concatNaive",
          "package": "event-list",
          "signature": "[T time body] -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#concatNaive",
          "type": "function"
        },
        "index": {
          "description": "concat and concatNaive are essentially the same concat must use foldr in order to work on infinite lists however if there are many empty lists summing of their durations will be done from right to left which is inefficient Thus we detect subsequent empty lists and merge them from left to right",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "concatNaive",
          "normalized": "[T a b]-\u003eT a b",
          "package": "event-list",
          "partial": "Naive",
          "signature": "[T time body]-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:concatNaive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "cons",
          "package": "event-list",
          "signature": "time -\u003e body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "cons",
          "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003ebody-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses sharing.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "cycle",
          "package": "event-list",
          "signature": "T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#cycle",
          "type": "function"
        },
        "index": {
          "description": "Uses sharing",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "cycle",
          "normalized": "T a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "cycleNaive",
          "package": "event-list",
          "signature": "T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#cycleNaive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "cycleNaive",
          "normalized": "T a b-\u003eT a b",
          "package": "event-list",
          "partial": "Naive",
          "signature": "T time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:cycleNaive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "decreaseStart",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#decreaseStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "decreaseStart",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Start",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:decreaseStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "delay",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#delay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "delay",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "discretize",
          "package": "event-list",
          "signature": "T time body -\u003e T i body",
          "source": "src/Data-EventList-Relative-TimeTime.html#discretize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "discretize",
          "normalized": "T a b-\u003eT c b",
          "package": "event-list",
          "signature": "T time body-\u003eT i body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:discretize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "dropTime",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#dropTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "dropTime",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:dropTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "duration",
          "package": "event-list",
          "signature": "T time body -\u003e time",
          "source": "src/Data-EventList-Relative-TimeTime.html#duration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "duration",
          "normalized": "T a b-\u003ea",
          "package": "event-list",
          "signature": "T time body-\u003etime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogously to the \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003econcatNaive\u003c/a\u003e\u003c/code\u003e pair\nwe have to versions of \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e,\nwhere the clever implementation sums up pauses\nfrom the beginning to the end.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "filter",
          "package": "event-list",
          "signature": "(body -\u003e Bool) -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Analogously to the concat concatNaive pair we have to versions of filter where the clever implementation sums up pauses from the beginning to the end",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "signature": "(body-\u003eBool)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "flatten",
          "package": "event-list",
          "signature": "T time [body] -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#flatten",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "flatten",
          "normalized": "T a[b]-\u003eT a b",
          "package": "event-list",
          "signature": "T time[body]-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "foldl",
          "package": "event-list",
          "signature": "(a -\u003e time -\u003e b) -\u003e (b -\u003e body -\u003e a) -\u003e a -\u003e T time body -\u003e b",
          "source": "src/Data-EventList-Relative-TimeTime.html#foldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(c-\u003ed-\u003ea)-\u003ea-\u003eT b d-\u003ec",
          "package": "event-list",
          "signature": "(a-\u003etime-\u003eb)-\u003e(b-\u003ebody-\u003ea)-\u003ea-\u003eT time body-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "foldr",
          "package": "event-list",
          "signature": "(time -\u003e a -\u003e b) -\u003e (body -\u003e b -\u003e a) -\u003e a -\u003e T time body -\u003e b",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ec-\u003eb)-\u003eb-\u003eT a d-\u003ec",
          "package": "event-list",
          "signature": "(time-\u003ea-\u003eb)-\u003e(body-\u003eb-\u003ea)-\u003ea-\u003eT time body-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "forceTimeHead",
          "package": "event-list",
          "signature": "T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTimePrivate.html#forceTimeHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "forceTimeHead",
          "normalized": "T a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time Head",
          "signature": "T time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:forceTimeHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "fromAbsoluteEventList",
          "package": "event-list",
          "signature": "T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#fromAbsoluteEventList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "fromAbsoluteEventList",
          "normalized": "T a b-\u003eT a b",
          "package": "event-list",
          "partial": "Absolute Event List",
          "signature": "T time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:fromAbsoluteEventList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "getBodies",
          "package": "event-list",
          "signature": "T time body -\u003e [body]",
          "source": "src/Data-EventList-Relative-TimeTime.html#getBodies",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "getBodies",
          "normalized": "T a b-\u003e[b]",
          "package": "event-list",
          "partial": "Bodies",
          "signature": "T time body-\u003e[body]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:getBodies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "getTimes",
          "package": "event-list",
          "signature": "T time body -\u003e [time]",
          "source": "src/Data-EventList-Relative-TimeTime.html#getTimes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "getTimes",
          "normalized": "T a b-\u003e[a]",
          "package": "event-list",
          "partial": "Times",
          "signature": "T time body-\u003e[time]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:getTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e compares entire events rather than just start\ntimes.  This is to ensure that it is commutative, a desirable\ncondition for some of the proofs used in Haskore/section equivalence.\nIt is also necessary to assert a unique representation\nof the event list independent of the structure of the event type.\nThe same function for inserting into a time ordered list with a trailing pause.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "insert",
          "package": "event-list",
          "signature": "time -\u003e body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Note that merge compares entire events rather than just start times This is to ensure that it is commutative desirable condition for some of the proofs used in Haskore section equivalence It is also necessary to assert unique representation of the event list independent of the structure of the event type The same function for inserting into time ordered list with trailing pause",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003ebody-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "isNormalized",
          "package": "event-list",
          "signature": "T time body -\u003e Bool",
          "source": "src/Data-EventList-Relative-TimeTime.html#isNormalized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "isNormalized",
          "normalized": "T a b-\u003eBool",
          "package": "event-list",
          "partial": "Normalized",
          "signature": "T time body-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:isNormalized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "isPause",
          "package": "event-list",
          "signature": "T time body -\u003e Bool",
          "source": "src/Data-EventList-Relative-TimeTime.html#isPause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "isPause",
          "normalized": "T a b-\u003eBool",
          "package": "event-list",
          "partial": "Pause",
          "signature": "T time body-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:isPause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mapBody",
          "package": "event-list",
          "signature": "(body0 -\u003e body1) -\u003e T time body0 -\u003e T time body1",
          "source": "src/Data-EventList-Relative-TimeTime.html#mapBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mapBody",
          "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mapBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mapBodyM",
          "package": "event-list",
          "signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
          "source": "src/Data-EventList-Relative-TimeTime.html#mapBodyM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mapBodyM",
          "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mapBodyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mapCoincident",
          "package": "event-list",
          "signature": "([a] -\u003e [b]) -\u003e T time a -\u003e T time b",
          "source": "src/Data-EventList-Relative-TimeTime.html#mapCoincident",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mapCoincident",
          "normalized": "([a]-\u003e[b])-\u003eT c a-\u003eT c b",
          "package": "event-list",
          "partial": "Coincident",
          "signature": "([a]-\u003e[b])-\u003eT time a-\u003eT time b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mapCoincident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mapM",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
          "source": "src/Data-EventList-Relative-TimeTime.html#mapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mapM",
          "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mapM_",
          "package": "event-list",
          "signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
          "source": "src/Data-EventList-Relative-TimeTime.html#mapM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mapM_",
          "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
          "package": "event-list",
          "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mapMaybe",
          "package": "event-list",
          "signature": "(body0 -\u003e Maybe body1) -\u003e T time body0 -\u003e T time body1",
          "source": "src/Data-EventList-Relative-TimeTime.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe a)-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "Maybe",
          "signature": "(body-\u003eMaybe body)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mapTime",
          "package": "event-list",
          "signature": "(time0 -\u003e time1) -\u003e T time0 body -\u003e T time1 body",
          "source": "src/Data-EventList-Relative-TimeTime.html#mapTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mapTime",
          "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mapTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mapTimeM",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
          "source": "src/Data-EventList-Relative-TimeTime.html#mapTimeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mapTimeM",
          "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mapTimeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first important function is \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e\nwhich merges the events of two lists into a new time order list.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "merge",
          "package": "event-list",
          "signature": "T time body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#merge",
          "type": "function"
        },
        "index": {
          "description": "The first important function is merge which merges the events of two lists into new time order list",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "merge",
          "normalized": "T a b-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mergeBy",
          "package": "event-list",
          "signature": "(body -\u003e body -\u003e Bool) -\u003e T time body -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#mergeBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "mergeBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eT b a-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "By",
          "signature": "(body-\u003ebody-\u003eBool)-\u003eT time body-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mergeBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "moveBackward",
          "package": "event-list",
          "signature": "T time (time, body) -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#moveBackward",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "moveBackward",
          "normalized": "T a(a,b)-\u003eT a b",
          "package": "event-list",
          "partial": "Backward",
          "signature": "T time(time,body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:moveBackward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove events towards the front of the event list.\nYou must make sure, that no event is moved before time zero.\nThis works only for finite lists.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "moveForward",
          "package": "event-list",
          "signature": "T time (time, body) -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#moveForward",
          "type": "function"
        },
        "index": {
          "description": "Move events towards the front of the event list You must make sure that no event is moved before time zero This works only for finite lists",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "moveForward",
          "normalized": "T a(a,b)-\u003eT a b",
          "package": "event-list",
          "partial": "Forward",
          "signature": "T time(time,body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:moveForward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emoveForward\u003c/a\u003e\u003c/code\u003e but restricts the look-ahead time.\nFor \u003ccode\u003emoveForwardRestricted maxTimeDiff xs\u003c/code\u003e\nall time differences (aka the moveForward offsets) in \u003ccode\u003exs\u003c/code\u003e\nmust be at most \u003ccode\u003emaxTimeDiff\u003c/code\u003e.\nWith this restriction the function is lazy enough\nfor handling infinite event lists.\nHowever the larger \u003ccode\u003emaxTimeDiff\u003c/code\u003e the more memory and time is consumed.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "moveForwardRestricted",
          "package": "event-list",
          "signature": "time -\u003e T time (time, body) -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#moveForwardRestricted",
          "type": "function"
        },
        "index": {
          "description": "Like moveForward but restricts the look-ahead time For moveForwardRestricted maxTimeDiff xs all time differences aka the moveForward offsets in xs must be at most maxTimeDiff With this restriction the function is lazy enough for handling infinite event lists However the larger maxTimeDiff the more memory and time is consumed",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "moveForwardRestricted",
          "normalized": "a-\u003eT a(a,b)-\u003eT a b",
          "package": "event-list",
          "partial": "Forward Restricted",
          "signature": "time-\u003eT time(time,body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:moveForwardRestricted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrently only for testing\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "moveForwardRestrictedBy",
          "package": "event-list",
          "signature": "(body -\u003e body -\u003e Bool) -\u003e time -\u003e T time (time, body) -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#moveForwardRestrictedBy",
          "type": "function"
        },
        "index": {
          "description": "currently only for testing",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "moveForwardRestrictedBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003eT b(b,a)-\u003eT b a",
          "package": "event-list",
          "partial": "Forward Restricted By",
          "signature": "(body-\u003ebody-\u003eBool)-\u003etime-\u003eT time(time,body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:moveForwardRestrictedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrently only for testing\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "moveForwardRestrictedByQueue",
          "package": "event-list",
          "signature": "(body -\u003e body -\u003e Bool) -\u003e time -\u003e T time (time, body) -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#moveForwardRestrictedByQueue",
          "type": "function"
        },
        "index": {
          "description": "currently only for testing",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "moveForwardRestrictedByQueue",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003eT b(b,a)-\u003eT b a",
          "package": "event-list",
          "partial": "Forward Restricted By Queue",
          "signature": "(body-\u003ebody-\u003eBool)-\u003etime-\u003eT time(time,body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:moveForwardRestrictedByQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrently only for testing\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "moveForwardRestrictedByStrict",
          "package": "event-list",
          "signature": "(body -\u003e body -\u003e Bool) -\u003e time -\u003e T time (time, body) -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#moveForwardRestrictedByStrict",
          "type": "function"
        },
        "index": {
          "description": "currently only for testing",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "moveForwardRestrictedByStrict",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003eT b(b,a)-\u003eT b a",
          "package": "event-list",
          "partial": "Forward Restricted By Strict",
          "signature": "(body-\u003ebody-\u003eBool)-\u003etime-\u003eT time(time,body)-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:moveForwardRestrictedByStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort coincident elements.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "normalize",
          "package": "event-list",
          "signature": "T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#normalize",
          "type": "function"
        },
        "index": {
          "description": "Sort coincident elements",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "normalize",
          "normalized": "T a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "pad",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#pad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "pad",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:pad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "partition",
          "package": "event-list",
          "signature": "(body -\u003e Bool) -\u003e T time body -\u003e (T time body, T time body)",
          "source": "src/Data-EventList-Relative-TimeTime.html#partition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eT b a-\u003e(T b a,T b a)",
          "package": "event-list",
          "signature": "(body-\u003eBool)-\u003eT time body-\u003e(T time body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "partitionMaybe",
          "package": "event-list",
          "signature": "(body0 -\u003e Maybe body1) -\u003e T time body0 -\u003e (T time body1, T time body0)",
          "source": "src/Data-EventList-Relative-TimeTime.html#partitionMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "partitionMaybe",
          "normalized": "(a-\u003eMaybe a)-\u003eT b a-\u003e(T b a,T b a)",
          "package": "event-list",
          "partial": "Maybe",
          "signature": "(body-\u003eMaybe body)-\u003eT time body-\u003e(T time body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:partitionMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCf. \u003ccode\u003e\u003ca\u003ecatMaybesR\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "partitionMaybeR",
          "package": "event-list",
          "signature": "(body0 -\u003e Maybe body1) -\u003e T time body0 -\u003e (T time body1, T time body0)",
          "source": "src/Data-EventList-Relative-TimeTime.html#partitionMaybeR",
          "type": "function"
        },
        "index": {
          "description": "Cf catMaybesR",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "partitionMaybeR",
          "normalized": "(a-\u003eMaybe a)-\u003eT b a-\u003e(T b a,T b a)",
          "package": "event-list",
          "partial": "Maybe",
          "signature": "(body-\u003eMaybe body)-\u003eT time body-\u003e(T time body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:partitionMaybeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "pause",
          "package": "event-list",
          "signature": "time -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#pause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "pause",
          "normalized": "a-\u003eT a b",
          "package": "event-list",
          "signature": "time-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:pause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "resample",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T i body",
          "source": "src/Data-EventList-Relative-TimeTime.html#resample",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "resample",
          "normalized": "a-\u003eT a b-\u003eT c b",
          "package": "event-list",
          "signature": "time-\u003eT time body-\u003eT i body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:resample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "reverse",
          "package": "event-list",
          "signature": "T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "reverse",
          "normalized": "T a b-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince we need it later for MIDI generation,\nwe will also define a slicing into equivalence classes of events.\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "slice",
          "package": "event-list",
          "signature": "(body -\u003e a) -\u003e T time body -\u003e [(a, T time body)]",
          "source": "src/Data-EventList-Relative-TimeTime.html#slice",
          "type": "function"
        },
        "index": {
          "description": "Since we need it later for MIDI generation we will also define slicing into equivalence classes of events",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "slice",
          "normalized": "(a-\u003eb)-\u003eT c a-\u003e[(b,T c a)]",
          "package": "event-list",
          "signature": "(body-\u003ea)-\u003eT time body-\u003e[(a,T time body)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "snoc",
          "package": "event-list",
          "signature": "T time body -\u003e body -\u003e time -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#snoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "snoc",
          "normalized": "T a b-\u003eb-\u003ea-\u003eT a b",
          "package": "event-list",
          "signature": "T time body-\u003ebody-\u003etime-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf there is an event at the cutting time,\nthis event is returned in the suffix part.\nThat is\n\u003ccode\u003esplitAtTime t0 (t0 .\u003cem\u003e x \u003c/em\u003e. t1 ./ empty) ==\n    (pause t0, 0 .\u003cem\u003e x \u003c/em\u003e. t1 ./ empty)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "splitAtTime",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e (T time body, T time body)",
          "source": "src/Data-EventList-Relative-TimeTime.html#splitAtTime",
          "type": "function"
        },
        "index": {
          "description": "If there is an event at the cutting time this event is returned in the suffix part That is splitAtTime t0 t0 t1 empty pause t0 t1 empty",
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "splitAtTime",
          "normalized": "a-\u003eT a b-\u003e(T a b,T a b)",
          "package": "event-list",
          "partial": "At Time",
          "signature": "time-\u003eT time body-\u003e(T time body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:splitAtTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "switchL",
          "package": "event-list",
          "signature": "(time -\u003e a) -\u003e ((time, body) -\u003e T time body -\u003e a) -\u003e T time body -\u003e a",
          "source": "src/Data-EventList-Relative-TimeTime.html#switchL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "switchL",
          "normalized": "(a-\u003eb)-\u003e((a,c)-\u003eT a c-\u003eb)-\u003eT a c-\u003eb",
          "package": "event-list",
          "signature": "(time-\u003ea)-\u003e((time,body)-\u003eT time body-\u003ea)-\u003eT time body-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:switchL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "switchR",
          "package": "event-list",
          "signature": "(time -\u003e a) -\u003e (T time body -\u003e body -\u003e time -\u003e a) -\u003e T time body -\u003e a",
          "source": "src/Data-EventList-Relative-TimeTime.html#switchR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "switchR",
          "normalized": "(a-\u003eb)-\u003e(T a c-\u003ec-\u003ea-\u003eb)-\u003eT a c-\u003eb",
          "package": "event-list",
          "signature": "(time-\u003ea)-\u003e(T time body-\u003ebody-\u003etime-\u003ea)-\u003eT time body-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:switchR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "takeTime",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#takeTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "takeTime",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Time",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:takeTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "toAbsoluteEventList",
          "package": "event-list",
          "signature": "time -\u003e T time body -\u003e T time body",
          "source": "src/Data-EventList-Relative-TimeTime.html#toAbsoluteEventList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "toAbsoluteEventList",
          "normalized": "a-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "Absolute Event List",
          "signature": "time-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:toAbsoluteEventList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "traverse",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
          "source": "src/Data-EventList-Relative-TimeTime.html#traverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "traverse",
          "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "traverseBody",
          "package": "event-list",
          "signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
          "source": "src/Data-EventList-Relative-TimeTime.html#traverseBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "traverseBody",
          "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
          "package": "event-list",
          "partial": "Body",
          "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:traverseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "traverseTime",
          "package": "event-list",
          "signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
          "source": "src/Data-EventList-Relative-TimeTime.html#traverseTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "traverseTime",
          "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
          "package": "event-list",
          "partial": "Time",
          "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:traverseTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "traverse_",
          "package": "event-list",
          "signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
          "source": "src/Data-EventList-Relative-TimeTime.html#traverse_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "traverse_",
          "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
          "package": "event-list",
          "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:traverse_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "unzip",
          "package": "event-list",
          "signature": "T time (body0, body1) -\u003e (T time body0, T time body1)",
          "source": "src/Data-EventList-Relative-TimeTime.html#unzip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "unzip",
          "normalized": "T a(b,b)-\u003e(T a b,T a b)",
          "package": "event-list",
          "signature": "T time(body,body)-\u003e(T time body,T time body)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "viewL",
          "package": "event-list",
          "signature": "T time body -\u003e (time, Maybe (body, T time body))",
          "source": "src/Data-EventList-Relative-TimeTime.html#viewL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "viewL",
          "normalized": "T a b-\u003e(a,Maybe(b,T a b))",
          "package": "event-list",
          "signature": "T time body-\u003e(time,Maybe(body,T time body))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:viewL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "viewR",
          "package": "event-list",
          "signature": "T time body -\u003e (Maybe (T time body, body), time)",
          "source": "src/Data-EventList-Relative-TimeTime.html#viewR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "viewR",
          "normalized": "T a b-\u003e(Maybe(T a b,b),a)",
          "package": "event-list",
          "signature": "T time body-\u003e(Maybe(T time body,body),time)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:viewR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "zipWithBody",
          "package": "event-list",
          "signature": "(body0 -\u003e body1 -\u003e body2) -\u003e [body0] -\u003e T time body1 -\u003e T time body2",
          "source": "src/Data-EventList-Relative-TimeTime.html#zipWithBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "zipWithBody",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eT b a-\u003eT b a",
          "package": "event-list",
          "partial": "With Body",
          "signature": "(body-\u003ebody-\u003ebody)-\u003e[body]-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:zipWithBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EventList.Relative.TimeTime",
          "name": "zipWithTime",
          "package": "event-list",
          "signature": "(time0 -\u003e time1 -\u003e time2) -\u003e (time0, [time0]) -\u003e T time1 body -\u003e T time2 body",
          "source": "src/Data-EventList-Relative-TimeTime.html#zipWithTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EventList Relative TimeTime",
          "module": "Data.EventList.Relative.TimeTime",
          "name": "zipWithTime",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(a,[a])-\u003eT a b-\u003eT a b",
          "package": "event-list",
          "partial": "With Time",
          "signature": "(time-\u003etime-\u003etime)-\u003e(time,[time])-\u003eT time body-\u003eT time body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:zipWithTime"
      }
    }
  ]
]