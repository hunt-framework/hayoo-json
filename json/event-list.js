[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "module",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html",
        "fct-type": "module",
        "title": "TimeBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "TimeBody",
        "normalized": "",
        "package": "event-list",
        "partial": "Time Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#t:T",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "data",
        "fct-source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#T",
        "fct-type": "data",
        "title": "T"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "T",
        "normalized": "",
        "package": "event-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:append",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "append",
        "normalized": "T a b-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:catMaybes",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time (Maybe body) -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#catMaybes",
        "fct-type": "function",
        "title": "catMaybes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "catMaybes",
        "normalized": "T a(Maybe b)-\u003eT a b",
        "package": "event-list",
        "partial": "Maybes",
        "signature": "T time(Maybe body)-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:checkTimes",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether time values are in ascending order.\nThe list is processed lazily and\ntimes that are smaller than there predecessors are replaced by \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e.\nIf you would remove the \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e times from the resulting list\nthe times may still not be ordered.\nE.g. consider the time list \u003ccode\u003e[0,3,1,2]\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#checkTimes",
        "fct-type": "function",
        "title": "checkTimes"
      },
      "index": {
        "description": "Check whether time values are in ascending order The list is processed lazily and times that are smaller than there predecessors are replaced by undefined If you would remove the undefined times from the resulting list the times may still not be ordered E.g consider the time list",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "checkTimes",
        "normalized": "T a b-\u003eT a b",
        "package": "event-list",
        "partial": "Times",
        "signature": "T time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:collectCoincident",
      "description": {
        "fct-descr": "\u003cp\u003eWe will also sometimes need a function which groups events by equal start times.\nThis implementation is not so obvious since we work with time differences.\nThe criterion is: Two neighbouring events start at the same time\nif the second one has zero time difference.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time [body]",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#collectCoincident",
        "fct-type": "function",
        "title": "collectCoincident"
      },
      "index": {
        "description": "We will also sometimes need function which groups events by equal start times This implementation is not so obvious since we work with time differences The criterion is Two neighbouring events start at the same time if the second one has zero time difference",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "collectCoincident",
        "normalized": "T a b-\u003eT a[b]",
        "package": "event-list",
        "partial": "Coincident",
        "signature": "T time body-\u003eT time[body]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:collectCoincidentFoldr",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time [body]",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#collectCoincidentFoldr",
        "fct-type": "function",
        "title": "collectCoincidentFoldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "collectCoincidentFoldr",
        "normalized": "T a b-\u003eT a[b]",
        "package": "event-list",
        "partial": "Coincident Foldr",
        "signature": "T time body-\u003eT time[body]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:collectCoincidentNonLazy",
      "description": {
        "fct-descr": "\u003cp\u003eWill fail on infinite lists.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time [body]",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#collectCoincidentNonLazy",
        "fct-type": "function",
        "title": "collectCoincidentNonLazy"
      },
      "index": {
        "description": "Will fail on infinite lists",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "collectCoincidentNonLazy",
        "normalized": "T a b-\u003eT a[b]",
        "package": "event-list",
        "partial": "Coincident Non Lazy",
        "signature": "T time body-\u003eT time[body]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:concat",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "[T time body] -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "concat",
        "normalized": "[T a b]-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "[T time body]-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:concatMapMonoid",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e m) -\u003e (body -\u003e m) -\u003e T time body -\u003e m",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#concatMapMonoid",
        "fct-type": "function",
        "title": "concatMapMonoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "concatMapMonoid",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eT a c-\u003eb",
        "package": "event-list",
        "partial": "Map Monoid",
        "signature": "(time-\u003em)-\u003e(body-\u003em)-\u003eT time body-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:cons",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "cons",
        "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003ebody-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:cycle",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#cycle",
        "fct-type": "function",
        "title": "cycle"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "cycle",
        "normalized": "T a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:decreaseStart",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#decreaseStart",
        "fct-type": "function",
        "title": "decreaseStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "decreaseStart",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Start",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:delay",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#delay",
        "fct-type": "function",
        "title": "delay"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "delay",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:discretize",
      "description": {
        "fct-descr": "\u003cp\u003eHere are some functions for discretizing the time information.\nWhen converting the precise relative event times\nto the integer relative event times\nwe have to prevent accumulation of rounding errors.\nWe avoid this problem with a stateful conversion\nwhich remembers each rounding error we make.\nThis rounding error is used to correct the next rounding.\nGiven the relative time and duration of a note\nthe function \u003ccode\u003ediscretizeEventM\u003c/code\u003e creates a \u003ccode\u003eState\u003c/code\u003e\nwhich computes the rounded relative time.\nIt is corrected by previous rounding errors.\n\u003c/p\u003e\u003cp\u003eThe resulting event list may have differing time differences\nwhich were equal before discretization,\nbut the overall timing is uniformly close to the original.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T i body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#discretize",
        "fct-type": "function",
        "title": "discretize"
      },
      "index": {
        "description": "Here are some functions for discretizing the time information When converting the precise relative event times to the integer relative event times we have to prevent accumulation of rounding errors We avoid this problem with stateful conversion which remembers each rounding error we make This rounding error is used to correct the next rounding Given the relative time and duration of note the function discretizeEventM creates State which computes the rounded relative time It is corrected by previous rounding errors The resulting event list may have differing time differences which were equal before discretization but the overall timing is uniformly close to the original",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "discretize",
        "normalized": "T a b-\u003eT c b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT i body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:duration",
      "description": {
        "fct-descr": "\u003cp\u003eDuration of an empty event list is considered zero.\nHowever, I'm not sure if this is sound.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e time",
        "fct-source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#duration",
        "fct-type": "function",
        "title": "duration"
      },
      "index": {
        "description": "Duration of an empty event list is considered zero However not sure if this is sound",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "duration",
        "normalized": "T a b-\u003ea",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003etime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:empty",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "empty",
        "normalized": "",
        "package": "event-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:filter",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e Bool) -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "",
        "signature": "(body-\u003eBool)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:flatten",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time [body] -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#flatten",
        "fct-type": "function",
        "title": "flatten"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "flatten",
        "normalized": "T a[b]-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time[body]-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:foldr",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e a -\u003e b) -\u003e (body -\u003e b -\u003e a) -\u003e b -\u003e T time body -\u003e b",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ec-\u003eb)-\u003ec-\u003eT a d-\u003ec",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003ea-\u003eb)-\u003e(body-\u003eb-\u003ea)-\u003eb-\u003eT time body-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:foldrPair",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e body -\u003e a -\u003e a) -\u003e a -\u003e T time body -\u003e a",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#foldrPair",
        "fct-type": "function",
        "title": "foldrPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "foldrPair",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eT a b-\u003ec",
        "package": "event-list",
        "partial": "Pair",
        "signature": "(time-\u003ebody-\u003ea-\u003ea)-\u003ea-\u003eT time body-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:fromPairList",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "[(a, b)] -\u003e T a b",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#fromPairList",
        "fct-type": "function",
        "title": "fromPairList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "fromPairList",
        "normalized": "[(a,b)]-\u003eT a b",
        "package": "event-list",
        "partial": "Pair List",
        "signature": "[(a,b)]-\u003eT a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:getBodies",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e [body]",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#getBodies",
        "fct-type": "function",
        "title": "getBodies"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "getBodies",
        "normalized": "T a b-\u003e[b]",
        "package": "event-list",
        "partial": "Bodies",
        "signature": "T time body-\u003e[body]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:getTimes",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e [time]",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#getTimes",
        "fct-type": "function",
        "title": "getTimes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "getTimes",
        "normalized": "T a b-\u003e[a]",
        "package": "event-list",
        "partial": "Times",
        "signature": "T time body-\u003e[time]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eThe final critical function is \u003ccode\u003einsert\u003c/code\u003e,\nwhich inserts an event\ninto an already time-ordered sequence of events.\nFor instance it is used in MidiFiles to insert a \u003ccode\u003eNoteOff\u003c/code\u003e event\ninto a list of \u003ccode\u003eNoteOn\u003c/code\u003e and \u003ccode\u003eNoteOff\u003c/code\u003e events.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "The final critical function is insert which inserts an event into an already time-ordered sequence of events For instance it is used in MidiFiles to insert NoteOff event into list of NoteOn and NoteOff events",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003ebody-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:insertBy",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e body -\u003e Bool) -\u003e time -\u003e body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#insertBy",
        "fct-type": "function",
        "title": "insertBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "insertBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003ea-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "By",
        "signature": "(body-\u003ebody-\u003eBool)-\u003etime-\u003ebody-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:isNormalized",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Bool",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#isNormalized",
        "fct-type": "function",
        "title": "isNormalized"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "isNormalized",
        "normalized": "T a b-\u003eBool",
        "package": "event-list",
        "partial": "Normalized",
        "signature": "T time body-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mapBody",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e body1) -\u003e T time body0 -\u003e T time body1",
        "fct-source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#mapBody",
        "fct-type": "function",
        "title": "mapBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "mapBody",
        "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mapBodyM",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#mapBodyM",
        "fct-type": "function",
        "title": "mapBodyM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "mapBodyM",
        "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mapCoincident",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to the lists of coincident events.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "([a] -\u003e [b]) -\u003e T time a -\u003e T time b",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#mapCoincident",
        "fct-type": "function",
        "title": "mapCoincident"
      },
      "index": {
        "description": "Apply function to the lists of coincident events",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "mapCoincident",
        "normalized": "([a]-\u003e[b])-\u003eT c a-\u003eT c b",
        "package": "event-list",
        "partial": "Coincident",
        "signature": "([a]-\u003e[b])-\u003eT time a-\u003eT time b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mapM",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "mapM",
        "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mapM_",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "mapM_",
        "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mapMaybe",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e Maybe body1) -\u003e T time body0 -\u003e T time body1",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe a)-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "Maybe",
        "signature": "(body-\u003eMaybe body)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mapTime",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e time1) -\u003e T time0 body -\u003e T time1 body",
        "fct-source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#mapTime",
        "fct-type": "function",
        "title": "mapTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "mapTime",
        "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mapTimeM",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#mapTimeM",
        "fct-type": "function",
        "title": "mapTimeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "mapTimeM",
        "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eThe first important function is \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e\nwhich merges the events of two lists into a new time order list.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "The first important function is merge which merges the events of two lists into new time order list",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "merge",
        "normalized": "T a b-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:mergeBy",
      "description": {
        "fct-descr": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e compares entire events rather than just start\ntimes.  This is to ensure that it is commutative, a desirable\ncondition for some of the proofs used in secref{equivalence}.\nIt is also necessary to assert a unique representation\nof the performance independent of the structure of the 'Music.T note'.\nThe same function for inserting into a time ordered list with a trailing pause.\nThe strictness annotation is necessary for working with infinite lists.\n\u003c/p\u003e\u003cp\u003eHere are two other functions that are already known for non-padded time lists.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e body -\u003e Bool) -\u003e T time body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#mergeBy",
        "fct-type": "function",
        "title": "mergeBy"
      },
      "index": {
        "description": "Note that merge compares entire events rather than just start times This is to ensure that it is commutative desirable condition for some of the proofs used in secref equivalence It is also necessary to assert unique representation of the performance independent of the structure of the Music.T note The same function for inserting into time ordered list with trailing pause The strictness annotation is necessary for working with infinite lists Here are two other functions that are already known for non-padded time lists",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "mergeBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eT b a-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "By",
        "signature": "(body-\u003ebody-\u003eBool)-\u003eT time body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:moveForward",
      "description": {
        "fct-descr": "\u003cp\u003eMove events towards the front of the event list.\nYou must make sure, that no event is moved before time zero.\nThis works only for finite lists.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time (time, body) -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#moveForward",
        "fct-type": "function",
        "title": "moveForward"
      },
      "index": {
        "description": "Move events towards the front of the event list You must make sure that no event is moved before time zero This works only for finite lists",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "moveForward",
        "normalized": "T a(a,b)-\u003eT a b",
        "package": "event-list",
        "partial": "Forward",
        "signature": "T time(time,body)-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:normalize",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e sorts a list of coinciding events,\nthat is all events but the first one have time difference 0.\n\u003ccode\u003e\u003ca\u003enormalize\u003c/a\u003e\u003c/code\u003e sorts all coinciding events in a list\nthus yielding a canonical representation of a time ordered list.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#normalize",
        "fct-type": "function",
        "title": "normalize"
      },
      "index": {
        "description": "sort sorts list of coinciding events that is all events but the first one have time difference normalize sorts all coinciding events in list thus yielding canonical representation of time ordered list",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "normalize",
        "normalized": "T a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:null",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Bool",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "null",
        "normalized": "T a b-\u003eBool",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:partition",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e Bool) -\u003e T time body -\u003e (T time body, T time body)",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eT b a-\u003e(T b a,T b a)",
        "package": "event-list",
        "partial": "",
        "signature": "(body-\u003eBool)-\u003eT time body-\u003e(T time body,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:partitionMaybe",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e Maybe body1) -\u003e T time body0 -\u003e (T time body1, T time body0)",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#partitionMaybe",
        "fct-type": "function",
        "title": "partitionMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "partitionMaybe",
        "normalized": "(a-\u003eMaybe a)-\u003eT b a-\u003e(T b a,T b a)",
        "package": "event-list",
        "partial": "Maybe",
        "signature": "(body-\u003eMaybe body)-\u003eT time body-\u003e(T time body,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:resample",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T i body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#resample",
        "fct-type": "function",
        "title": "resample"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "resample",
        "normalized": "a-\u003eT a b-\u003eT c b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003eT time body-\u003eT i body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:singleton",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "singleton",
        "normalized": "a-\u003eb-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003ebody-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:slice",
      "description": {
        "fct-descr": "\u003cp\u003eSince we need it later for MIDI generation,\nwe will also define a slicing into equivalence classes of events.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e a) -\u003e T time body -\u003e [(a, T time body)]",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#slice",
        "fct-type": "function",
        "title": "slice"
      },
      "index": {
        "description": "Since we need it later for MIDI generation we will also define slicing into equivalence classes of events",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "slice",
        "normalized": "(a-\u003eb)-\u003eT c a-\u003e[(b,T c a)]",
        "package": "event-list",
        "partial": "",
        "signature": "(body-\u003ea)-\u003eT time body-\u003e[(a,T time body)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:snoc",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e time -\u003e body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#snoc",
        "fct-type": "function",
        "title": "snoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "snoc",
        "normalized": "T a b-\u003ea-\u003eb-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003etime-\u003ebody-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:switchL",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "c -\u003e ((time, body) -\u003e T time body -\u003e c) -\u003e T time body -\u003e c",
        "fct-source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#switchL",
        "fct-type": "function",
        "title": "switchL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "switchL",
        "normalized": "a-\u003e((b,c)-\u003eT b c-\u003ea)-\u003eT b c-\u003ea",
        "package": "event-list",
        "partial": "",
        "signature": "c-\u003e((time,body)-\u003eT time body-\u003ec)-\u003eT time body-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:switchR",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "c -\u003e (T time body -\u003e (time, body) -\u003e c) -\u003e T time body -\u003e c",
        "fct-source": "src/Data-EventList-Absolute-TimeBodyPrivate.html#switchR",
        "fct-type": "function",
        "title": "switchR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "switchR",
        "normalized": "a-\u003e(T b c-\u003e(b,c)-\u003ea)-\u003eT b c-\u003ea",
        "package": "event-list",
        "partial": "",
        "signature": "c-\u003e(T time body-\u003e(time,body)-\u003ec)-\u003eT time body-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:toPairList",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T a b -\u003e [(a, b)]",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#toPairList",
        "fct-type": "function",
        "title": "toPairList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "toPairList",
        "normalized": "T a b-\u003e[(a,b)]",
        "package": "event-list",
        "partial": "Pair List",
        "signature": "T a b-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:traverse",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#traverse",
        "fct-type": "function",
        "title": "traverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "traverse",
        "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:traverseBody",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#traverseBody",
        "fct-type": "function",
        "title": "traverseBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "traverseBody",
        "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:traverseTime",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#traverseTime",
        "fct-type": "function",
        "title": "traverseTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "traverseTime",
        "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:traverse_",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#traverse_",
        "fct-type": "function",
        "title": "traverse_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "traverse_",
        "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:viewL",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Maybe ((time, body), T time body)",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#viewL",
        "fct-type": "function",
        "title": "viewL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "viewL",
        "normalized": "T a b-\u003eMaybe((a,b),T a b)",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eMaybe((time,body),T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeBody.html#v:viewR",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Maybe (T time body, (time, body))",
        "fct-source": "src/Data-EventList-Absolute-TimeBody.html#viewR",
        "fct-type": "function",
        "title": "viewR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeBody",
        "module": "Data.EventList.Absolute.TimeBody",
        "name": "viewR",
        "normalized": "T a b-\u003eMaybe(T a b,(a,b))",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eMaybe(T time body,(time,body))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeMixed.html#",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "module",
        "fct-source": "src/Data-EventList-Absolute-TimeMixed.html",
        "fct-type": "module",
        "title": "TimeMixed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeMixed",
        "module": "Data.EventList.Absolute.TimeMixed",
        "name": "TimeMixed",
        "normalized": "",
        "package": "event-list",
        "partial": "Time Mixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeMixed.html#v:mapTimeInit",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "(T time body0 -\u003e T time body1) -\u003e T time body0 -\u003e T time body1",
        "fct-source": "src/Data-EventList-Absolute-TimeTimePrivate.html#mapTimeInit",
        "fct-type": "function",
        "title": "mapTimeInit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeMixed",
        "module": "Data.EventList.Absolute.TimeMixed",
        "name": "mapTimeInit",
        "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time Init",
        "signature": "(T time body-\u003eT time body)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeMixed.html#v:snocBody",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTimePrivate.html#snocBody",
        "fct-type": "function",
        "title": "snocBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeMixed",
        "module": "Data.EventList.Absolute.TimeMixed",
        "name": "snocBody",
        "normalized": "T a b-\u003eb-\u003eT a b",
        "package": "event-list",
        "partial": "Body",
        "signature": "T time body-\u003ebody-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeMixed.html#v:snocTime",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e time -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTimePrivate.html#snocTime",
        "fct-type": "function",
        "title": "snocTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeMixed",
        "module": "Data.EventList.Absolute.TimeMixed",
        "name": "snocTime",
        "normalized": "T a b-\u003ea-\u003eT a b",
        "package": "event-list",
        "partial": "Time",
        "signature": "T time body-\u003etime-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeMixed.html#v:switchBodyR",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "a -\u003e (T time body -\u003e body -\u003e a) -\u003e T time body -\u003e a",
        "fct-source": "src/Data-EventList-Absolute-TimeTimePrivate.html#switchBodyR",
        "fct-type": "function",
        "title": "switchBodyR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeMixed",
        "module": "Data.EventList.Absolute.TimeMixed",
        "name": "switchBodyR",
        "normalized": "a-\u003e(T b c-\u003ec-\u003ea)-\u003eT b c-\u003ea",
        "package": "event-list",
        "partial": "Body",
        "signature": "a-\u003e(T time body-\u003ebody-\u003ea)-\u003eT time body-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeMixed.html#v:switchTimeR",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "(T time body -\u003e time -\u003e a) -\u003e T time body -\u003e a",
        "fct-source": "src/Data-EventList-Absolute-TimeTimePrivate.html#switchTimeR",
        "fct-type": "function",
        "title": "switchTimeR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeMixed",
        "module": "Data.EventList.Absolute.TimeMixed",
        "name": "switchTimeR",
        "normalized": "(T a b-\u003ea-\u003ec)-\u003eT a b-\u003ec",
        "package": "event-list",
        "partial": "Time",
        "signature": "(T time body-\u003etime-\u003ea)-\u003eT time body-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeMixed.html#v:viewBodyR",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Maybe (T time body, body)",
        "fct-source": "src/Data-EventList-Absolute-TimeTimePrivate.html#viewBodyR",
        "fct-type": "function",
        "title": "viewBodyR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeMixed",
        "module": "Data.EventList.Absolute.TimeMixed",
        "name": "viewBodyR",
        "normalized": "T a b-\u003eMaybe(T a b,b)",
        "package": "event-list",
        "partial": "Body",
        "signature": "T time body-\u003eMaybe(T time body,body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeMixed.html#v:viewTimeR",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e (T time body, time)",
        "fct-source": "src/Data-EventList-Absolute-TimeTimePrivate.html#viewTimeR",
        "fct-type": "function",
        "title": "viewTimeR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeMixed",
        "module": "Data.EventList.Absolute.TimeMixed",
        "name": "viewTimeR",
        "normalized": "T a b-\u003e(T a b,a)",
        "package": "event-list",
        "partial": "Time",
        "signature": "T time body-\u003e(T time body,time)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent list with absolute times starting with a time and ending with a body\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "module",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html",
        "fct-type": "module",
        "title": "TimeTime"
      },
      "index": {
        "description": "Event list with absolute times starting with time and ending with body",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "TimeTime",
        "normalized": "",
        "package": "event-list",
        "partial": "Time Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#t:T",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "data",
        "fct-source": "src/Data-EventList-Absolute-TimeTimePrivate.html#T",
        "fct-type": "data",
        "title": "T"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "T",
        "normalized": "",
        "package": "event-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:append",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "append",
        "normalized": "T a b-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:catMaybes",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time (Maybe body) -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#catMaybes",
        "fct-type": "function",
        "title": "catMaybes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "catMaybes",
        "normalized": "T a(Maybe b)-\u003eT a b",
        "package": "event-list",
        "partial": "Maybes",
        "signature": "T time(Maybe body)-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:collectCoincident",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time [body]",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#collectCoincident",
        "fct-type": "function",
        "title": "collectCoincident"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "collectCoincident",
        "normalized": "T a b-\u003eT a[b]",
        "package": "event-list",
        "partial": "Coincident",
        "signature": "T time body-\u003eT time[body]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:concat",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "[T time body] -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "concat",
        "normalized": "[T a b]-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "[T time body]-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:concatMapMonoid",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e m) -\u003e (body -\u003e m) -\u003e T time body -\u003e m",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#concatMapMonoid",
        "fct-type": "function",
        "title": "concatMapMonoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "concatMapMonoid",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eT a c-\u003eb",
        "package": "event-list",
        "partial": "Map Monoid",
        "signature": "(time-\u003em)-\u003e(body-\u003em)-\u003eT time body-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:cons",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "cons",
        "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003ebody-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:cycle",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#cycle",
        "fct-type": "function",
        "title": "cycle"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "cycle",
        "normalized": "T a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:decreaseStart",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#decreaseStart",
        "fct-type": "function",
        "title": "decreaseStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "decreaseStart",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Start",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:delay",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#delay",
        "fct-type": "function",
        "title": "delay"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "delay",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:discretize",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T i body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#discretize",
        "fct-type": "function",
        "title": "discretize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "discretize",
        "normalized": "T a b-\u003eT c b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT i body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:duration",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e time",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#duration",
        "fct-type": "function",
        "title": "duration"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "duration",
        "normalized": "T a b-\u003ea",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003etime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:filter",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e Bool) -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "",
        "signature": "(body-\u003eBool)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:flatten",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time [body] -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#flatten",
        "fct-type": "function",
        "title": "flatten"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "flatten",
        "normalized": "T a[b]-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time[body]-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:foldr",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e a -\u003e b) -\u003e (body -\u003e b -\u003e a) -\u003e a -\u003e T time body -\u003e b",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ec-\u003eb)-\u003eb-\u003eT a d-\u003ec",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003ea-\u003eb)-\u003e(body-\u003eb-\u003ea)-\u003ea-\u003eT time body-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:getBodies",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e [body]",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#getBodies",
        "fct-type": "function",
        "title": "getBodies"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "getBodies",
        "normalized": "T a b-\u003e[b]",
        "package": "event-list",
        "partial": "Bodies",
        "signature": "T time body-\u003e[body]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:getTimes",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e [time]",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#getTimes",
        "fct-type": "function",
        "title": "getTimes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "getTimes",
        "normalized": "T a b-\u003e[a]",
        "package": "event-list",
        "partial": "Times",
        "signature": "T time body-\u003e[time]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:insert",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003ebody-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:insertBy",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e body -\u003e Bool) -\u003e time -\u003e body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#insertBy",
        "fct-type": "function",
        "title": "insertBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "insertBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003ea-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "By",
        "signature": "(body-\u003ebody-\u003eBool)-\u003etime-\u003ebody-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:isNormalized",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Bool",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#isNormalized",
        "fct-type": "function",
        "title": "isNormalized"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "isNormalized",
        "normalized": "T a b-\u003eBool",
        "package": "event-list",
        "partial": "Normalized",
        "signature": "T time body-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:isPause",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Bool",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#isPause",
        "fct-type": "function",
        "title": "isPause"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "isPause",
        "normalized": "T a b-\u003eBool",
        "package": "event-list",
        "partial": "Pause",
        "signature": "T time body-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mapBody",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e body1) -\u003e T time body0 -\u003e T time body1",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#mapBody",
        "fct-type": "function",
        "title": "mapBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "mapBody",
        "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mapBodyM",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#mapBodyM",
        "fct-type": "function",
        "title": "mapBodyM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "mapBodyM",
        "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mapCoincident",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to the lists of coincident events.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "([a] -\u003e [b]) -\u003e T time a -\u003e T time b",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#mapCoincident",
        "fct-type": "function",
        "title": "mapCoincident"
      },
      "index": {
        "description": "Apply function to the lists of coincident events",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "mapCoincident",
        "normalized": "([a]-\u003e[b])-\u003eT c a-\u003eT c b",
        "package": "event-list",
        "partial": "Coincident",
        "signature": "([a]-\u003e[b])-\u003eT time a-\u003eT time b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mapM",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "mapM",
        "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mapM_",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "mapM_",
        "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mapMaybe",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e Maybe body1) -\u003e T time body0 -\u003e T time body1",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe a)-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "Maybe",
        "signature": "(body-\u003eMaybe body)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mapTime",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e time1) -\u003e T time0 body -\u003e T time1 body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#mapTime",
        "fct-type": "function",
        "title": "mapTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "mapTime",
        "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mapTimeM",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#mapTimeM",
        "fct-type": "function",
        "title": "mapTimeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "mapTimeM",
        "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:merge",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "merge",
        "normalized": "T a b-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:mergeBy",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e body -\u003e Bool) -\u003e T time body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#mergeBy",
        "fct-type": "function",
        "title": "mergeBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "mergeBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eT b a-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "By",
        "signature": "(body-\u003ebody-\u003eBool)-\u003eT time body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:moveForward",
      "description": {
        "fct-descr": "\u003cp\u003eMove events towards the front of the event list.\nYou must make sure, that no event is moved before time zero.\nThis works only for finite lists.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time (time, body) -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#moveForward",
        "fct-type": "function",
        "title": "moveForward"
      },
      "index": {
        "description": "Move events towards the front of the event list You must make sure that no event is moved before time zero This works only for finite lists",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "moveForward",
        "normalized": "T a(a,b)-\u003eT a b",
        "package": "event-list",
        "partial": "Forward",
        "signature": "T time(time,body)-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:normalize",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e sorts a list of coinciding events,\nthat is all events but the first one have time difference 0.\n\u003ccode\u003e\u003ca\u003enormalize\u003c/a\u003e\u003c/code\u003e sorts all coinciding events in a list\nthus yielding a canonical representation of a time ordered list.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#normalize",
        "fct-type": "function",
        "title": "normalize"
      },
      "index": {
        "description": "sort sorts list of coinciding events that is all events but the first one have time difference normalize sorts all coinciding events in list thus yielding canonical representation of time ordered list",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "normalize",
        "normalized": "T a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:partition",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e Bool) -\u003e T time body -\u003e (T time body, T time body)",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eT b a-\u003e(T b a,T b a)",
        "package": "event-list",
        "partial": "",
        "signature": "(body-\u003eBool)-\u003eT time body-\u003e(T time body,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:pause",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#pause",
        "fct-type": "function",
        "title": "pause"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "pause",
        "normalized": "a-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:resample",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T i body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#resample",
        "fct-type": "function",
        "title": "resample"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "resample",
        "normalized": "a-\u003eT a b-\u003eT c b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003eT time body-\u003eT i body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:slice",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e a) -\u003e T time body -\u003e [(a, T time body)]",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#slice",
        "fct-type": "function",
        "title": "slice"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "slice",
        "normalized": "(a-\u003eb)-\u003eT c a-\u003e[(b,T c a)]",
        "package": "event-list",
        "partial": "",
        "signature": "(body-\u003ea)-\u003eT time body-\u003e[(a,T time body)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:snoc",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e body -\u003e time -\u003e T time body",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#snoc",
        "fct-type": "function",
        "title": "snoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "snoc",
        "normalized": "T a b-\u003eb-\u003ea-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003ebody-\u003etime-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:switchL",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e a) -\u003e ((time, body) -\u003e T time body -\u003e a) -\u003e T time body -\u003e a",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#switchL",
        "fct-type": "function",
        "title": "switchL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "switchL",
        "normalized": "(a-\u003eb)-\u003e((a,c)-\u003eT a c-\u003eb)-\u003eT a c-\u003eb",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003ea)-\u003e((time,body)-\u003eT time body-\u003ea)-\u003eT time body-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:traverse",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#traverse",
        "fct-type": "function",
        "title": "traverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "traverse",
        "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:traverseBody",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#traverseBody",
        "fct-type": "function",
        "title": "traverseBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "traverseBody",
        "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:traverseTime",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#traverseTime",
        "fct-type": "function",
        "title": "traverseTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "traverseTime",
        "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:traverse_",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#traverse_",
        "fct-type": "function",
        "title": "traverse_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "traverse_",
        "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Absolute-TimeTime.html#v:viewL",
      "description": {
        "fct-module": "Data.EventList.Absolute.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e (time, Maybe (body, T time body))",
        "fct-source": "src/Data-EventList-Absolute-TimeTime.html#viewL",
        "fct-type": "function",
        "title": "viewL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Absolute TimeTime",
        "module": "Data.EventList.Absolute.TimeTime",
        "name": "viewL",
        "normalized": "T a b-\u003e(a,Maybe(b,T a b))",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003e(time,Maybe(body,T time body))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyBody.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent lists starting with a body and ending with a body.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.EventList.Relative.BodyBody",
        "fct-package": "event-list",
        "fct-signature": "module",
        "fct-source": "src/Data-EventList-Relative-BodyBody.html",
        "fct-type": "module",
        "title": "BodyBody"
      },
      "index": {
        "description": "Event lists starting with body and ending with body",
        "hierarchy": "Data EventList Relative BodyBody",
        "module": "Data.EventList.Relative.BodyBody",
        "name": "BodyBody",
        "normalized": "",
        "package": "event-list",
        "partial": "Body Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyBody.html#t:T",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyBody",
        "fct-package": "event-list",
        "fct-signature": "data",
        "fct-source": "src/Data-EventList-Relative-BodyBodyPrivate.html#T",
        "fct-type": "data",
        "title": "T"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyBody",
        "module": "Data.EventList.Relative.BodyBody",
        "name": "T",
        "normalized": "",
        "package": "event-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyBody.html#v:concatMapMonoid",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyBody",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e m) -\u003e (body -\u003e m) -\u003e T time body -\u003e m",
        "fct-source": "src/Data-EventList-Relative-BodyBody.html#concatMapMonoid",
        "fct-type": "function",
        "title": "concatMapMonoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyBody",
        "module": "Data.EventList.Relative.BodyBody",
        "name": "concatMapMonoid",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eT a c-\u003eb",
        "package": "event-list",
        "partial": "Map Monoid",
        "signature": "(time-\u003em)-\u003e(body-\u003em)-\u003eT time body-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyBody.html#v:mapM",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyBody",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
        "fct-source": "src/Data-EventList-Relative-BodyBody.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyBody",
        "module": "Data.EventList.Relative.BodyBody",
        "name": "mapM",
        "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyBody.html#v:traverse",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyBody",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
        "fct-source": "src/Data-EventList-Relative-BodyBody.html#traverse",
        "fct-type": "function",
        "title": "traverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyBody",
        "module": "Data.EventList.Relative.BodyBody",
        "name": "traverse",
        "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent lists starting with a body and ending with a time difference.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "module",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html",
        "fct-type": "module",
        "title": "BodyTime"
      },
      "index": {
        "description": "Event lists starting with body and ending with time difference",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "BodyTime",
        "normalized": "",
        "package": "event-list",
        "partial": "Body Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#t:T",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "data",
        "fct-source": "src/Data-EventList-Relative-BodyTimePrivate.html#T",
        "fct-type": "data",
        "title": "T"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "T",
        "normalized": "",
        "package": "event-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:concatMapMonoid",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e m) -\u003e (body -\u003e m) -\u003e T time body -\u003e m",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#concatMapMonoid",
        "fct-type": "function",
        "title": "concatMapMonoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "concatMapMonoid",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eT a c-\u003eb",
        "package": "event-list",
        "partial": "Map Monoid",
        "signature": "(time-\u003em)-\u003e(body-\u003em)-\u003eT time body-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:cons",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "body -\u003e time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "cons",
        "normalized": "a-\u003eb-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "",
        "signature": "body-\u003etime-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:duration",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e time",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#duration",
        "fct-type": "function",
        "title": "duration"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "duration",
        "normalized": "T a b-\u003ea",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003etime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:durationR",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e time",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#durationR",
        "fct-type": "function",
        "title": "durationR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "durationR",
        "normalized": "T a b-\u003ea",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003etime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:empty",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "T time body",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "empty",
        "normalized": "",
        "package": "event-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:foldr",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e a -\u003e b) -\u003e (time -\u003e b -\u003e a) -\u003e b -\u003e T time body -\u003e b",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ec-\u003eb)-\u003ec-\u003eT d a-\u003ec",
        "package": "event-list",
        "partial": "",
        "signature": "(body-\u003ea-\u003eb)-\u003e(time-\u003eb-\u003ea)-\u003eb-\u003eT time body-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:foldrPair",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e time -\u003e a -\u003e a) -\u003e a -\u003e T time body -\u003e a",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#foldrPair",
        "fct-type": "function",
        "title": "foldrPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "foldrPair",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eT b a-\u003ec",
        "package": "event-list",
        "partial": "Pair",
        "signature": "(body-\u003etime-\u003ea-\u003ea)-\u003ea-\u003eT time body-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:fromPairList",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "[(body, time)] -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#fromPairList",
        "fct-type": "function",
        "title": "fromPairList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "fromPairList",
        "normalized": "[(a,b)]-\u003eT b a",
        "package": "event-list",
        "partial": "Pair List",
        "signature": "[(body,time)]-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:getBodies",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e [body]",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#getBodies",
        "fct-type": "function",
        "title": "getBodies"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "getBodies",
        "normalized": "T a b-\u003e[b]",
        "package": "event-list",
        "partial": "Bodies",
        "signature": "T time body-\u003e[body]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:getTimes",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e [time]",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#getTimes",
        "fct-type": "function",
        "title": "getTimes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "getTimes",
        "normalized": "T a b-\u003e[a]",
        "package": "event-list",
        "partial": "Times",
        "signature": "T time body-\u003e[time]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:mapBody",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e body1) -\u003e T time body0 -\u003e T time body1",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#mapBody",
        "fct-type": "function",
        "title": "mapBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "mapBody",
        "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:mapBodyM",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#mapBodyM",
        "fct-type": "function",
        "title": "mapBodyM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "mapBodyM",
        "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:mapM",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "mapM",
        "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:mapM_",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "mapM_",
        "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:mapTime",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e time1) -\u003e T time0 body -\u003e T time1 body",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#mapTime",
        "fct-type": "function",
        "title": "mapTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "mapTime",
        "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:mapTimeM",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#mapTimeM",
        "fct-type": "function",
        "title": "mapTimeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "mapTimeM",
        "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:null",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Bool",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "null",
        "normalized": "T a b-\u003eBool",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:singleton",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "body -\u003e time -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "singleton",
        "normalized": "a-\u003eb-\u003eT b a",
        "package": "event-list",
        "partial": "",
        "signature": "body-\u003etime-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:snoc",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e body -\u003e time -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#snoc",
        "fct-type": "function",
        "title": "snoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "snoc",
        "normalized": "T a b-\u003eb-\u003ea-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003ebody-\u003etime-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:span",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e Bool) -\u003e T time body -\u003e (T time body, T time body)",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "span",
        "normalized": "(a-\u003eBool)-\u003eT b a-\u003e(T b a,T b a)",
        "package": "event-list",
        "partial": "",
        "signature": "(body-\u003eBool)-\u003eT time body-\u003e(T time body,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:switchL",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "c -\u003e (body -\u003e time -\u003e T time body -\u003e c) -\u003e T time body -\u003e c",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#switchL",
        "fct-type": "function",
        "title": "switchL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "switchL",
        "normalized": "a-\u003e(b-\u003ec-\u003eT c b-\u003ea)-\u003eT c b-\u003ea",
        "package": "event-list",
        "partial": "",
        "signature": "c-\u003e(body-\u003etime-\u003eT time body-\u003ec)-\u003eT time body-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:switchR",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "c -\u003e (T time body -\u003e body -\u003e time -\u003e c) -\u003e T time body -\u003e c",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#switchR",
        "fct-type": "function",
        "title": "switchR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "switchR",
        "normalized": "a-\u003e(T b c-\u003ec-\u003eb-\u003ea)-\u003eT b c-\u003ea",
        "package": "event-list",
        "partial": "",
        "signature": "c-\u003e(T time body-\u003ebody-\u003etime-\u003ec)-\u003eT time body-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:toPairList",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e [(body, time)]",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#toPairList",
        "fct-type": "function",
        "title": "toPairList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "toPairList",
        "normalized": "T a b-\u003e[(b,a)]",
        "package": "event-list",
        "partial": "Pair List",
        "signature": "T time body-\u003e[(body,time)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:traverse",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#traverse",
        "fct-type": "function",
        "title": "traverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "traverse",
        "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:traverseBody",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#traverseBody",
        "fct-type": "function",
        "title": "traverseBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "traverseBody",
        "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:traverseTime",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#traverseTime",
        "fct-type": "function",
        "title": "traverseTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "traverseTime",
        "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:traverse_",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#traverse_",
        "fct-type": "function",
        "title": "traverse_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "traverse_",
        "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:viewL",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Maybe ((body, time), T time body)",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#viewL",
        "fct-type": "function",
        "title": "viewL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "viewL",
        "normalized": "T a b-\u003eMaybe((b,a),T a b)",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eMaybe((body,time),T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-BodyTime.html#v:viewR",
      "description": {
        "fct-module": "Data.EventList.Relative.BodyTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Maybe (T time body, (body, time))",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#viewR",
        "fct-type": "function",
        "title": "viewR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative BodyTime",
        "module": "Data.EventList.Relative.BodyTime",
        "name": "viewR",
        "normalized": "T a b-\u003eMaybe(T a b,(b,a))",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eMaybe(T time body,(body,time))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent lists starting with a body and ending with a time difference.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.EventList.Relative.MixedBody",
        "fct-package": "event-list",
        "fct-signature": "module",
        "fct-source": "src/Data-EventList-Relative-MixedBody.html",
        "fct-type": "module",
        "title": "MixedBody"
      },
      "index": {
        "description": "Event lists starting with body and ending with time difference",
        "hierarchy": "Data EventList Relative MixedBody",
        "module": "Data.EventList.Relative.MixedBody",
        "name": "MixedBody",
        "normalized": "",
        "package": "event-list",
        "partial": "Mixed Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:-47-.",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedBody",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-MixedBody.html#consTime",
        "fct-type": "function",
        "title": "(/.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedBody",
        "module": "Data.EventList.Relative.MixedBody",
        "name": "(/.) /.",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:.-47-",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedBody",
        "fct-package": "event-list",
        "fct-signature": "body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-MixedBody.html#consBody",
        "fct-type": "function",
        "title": "(./)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedBody",
        "module": "Data.EventList.Relative.MixedBody",
        "name": "(./) ./",
        "normalized": "a-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "",
        "signature": "body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:consBody",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedBody",
        "fct-package": "event-list",
        "fct-signature": "body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-MixedBody.html#consBody",
        "fct-type": "function",
        "title": "consBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedBody",
        "module": "Data.EventList.Relative.MixedBody",
        "name": "consBody",
        "normalized": "a-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "Body",
        "signature": "body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:consTime",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedBody",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-MixedBody.html#consTime",
        "fct-type": "function",
        "title": "consTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedBody",
        "module": "Data.EventList.Relative.MixedBody",
        "name": "consTime",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:empty",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedBody",
        "fct-package": "event-list",
        "fct-signature": "T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedBody",
        "module": "Data.EventList.Relative.MixedBody",
        "name": "empty",
        "normalized": "",
        "package": "event-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:mapTimeHead",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedBody",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e time) -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBodyPrivate.html#mapTimeHead",
        "fct-type": "function",
        "title": "mapTimeHead"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedBody",
        "module": "Data.EventList.Relative.MixedBody",
        "name": "mapTimeHead",
        "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time Head",
        "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:mapTimeL",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedBody",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e time, T time body0 -\u003e T time body1) -\u003e T time body0 -\u003e T time body1",
        "fct-source": "src/Data-EventList-Relative-TimeBodyPrivate.html#mapTimeL",
        "fct-type": "function",
        "title": "mapTimeL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedBody",
        "module": "Data.EventList.Relative.MixedBody",
        "name": "mapTimeL",
        "normalized": "(a-\u003ea,T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003etime,T time body-\u003eT time body)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:mapTimeTail",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedBody",
        "fct-package": "event-list",
        "fct-signature": "(T time body0 -\u003e T time body1) -\u003e T time body0 -\u003e T time body1",
        "fct-source": "src/Data-EventList-Relative-TimeBodyPrivate.html#mapTimeTail",
        "fct-type": "function",
        "title": "mapTimeTail"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedBody",
        "module": "Data.EventList.Relative.MixedBody",
        "name": "mapTimeTail",
        "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time Tail",
        "signature": "(T time body-\u003eT time body)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:switchBodyL",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedBody",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e T time body -\u003e a) -\u003e T time body -\u003e a",
        "fct-source": "src/Data-EventList-Relative-MixedBody.html#switchBodyL",
        "fct-type": "function",
        "title": "switchBodyL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedBody",
        "module": "Data.EventList.Relative.MixedBody",
        "name": "switchBodyL",
        "normalized": "(a-\u003eT b a-\u003ec)-\u003eT b a-\u003ec",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003eT time body-\u003ea)-\u003eT time body-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:switchTimeL",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedBody",
        "fct-package": "event-list",
        "fct-signature": "a -\u003e (time -\u003e T time body -\u003e a) -\u003e T time body -\u003e a",
        "fct-source": "src/Data-EventList-Relative-MixedBody.html#switchTimeL",
        "fct-type": "function",
        "title": "switchTimeL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedBody",
        "module": "Data.EventList.Relative.MixedBody",
        "name": "switchTimeL",
        "normalized": "a-\u003e(b-\u003eT b c-\u003ea)-\u003eT b c-\u003ea",
        "package": "event-list",
        "partial": "Time",
        "signature": "a-\u003e(time-\u003eT time body-\u003ea)-\u003eT time body-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:viewBodyL",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e (body, T time body)",
        "fct-source": "src/Data-EventList-Relative-MixedBody.html#viewBodyL",
        "fct-type": "function",
        "title": "viewBodyL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedBody",
        "module": "Data.EventList.Relative.MixedBody",
        "name": "viewBodyL",
        "normalized": "T a b-\u003e(b,T a b)",
        "package": "event-list",
        "partial": "Body",
        "signature": "T time body-\u003e(body,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedBody.html#v:viewTimeL",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Maybe (time, T time body)",
        "fct-source": "src/Data-EventList-Relative-MixedBody.html#viewTimeL",
        "fct-type": "function",
        "title": "viewTimeL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedBody",
        "module": "Data.EventList.Relative.MixedBody",
        "name": "viewTimeL",
        "normalized": "T a b-\u003eMaybe(a,T a b)",
        "package": "event-list",
        "partial": "Time",
        "signature": "T time body-\u003eMaybe(time,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent lists starting with a body and ending with a time difference.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.EventList.Relative.MixedTime",
        "fct-package": "event-list",
        "fct-signature": "module",
        "fct-source": "src/Data-EventList-Relative-MixedTime.html",
        "fct-type": "module",
        "title": "MixedTime"
      },
      "index": {
        "description": "Event lists starting with body and ending with time difference",
        "hierarchy": "Data EventList Relative MixedTime",
        "module": "Data.EventList.Relative.MixedTime",
        "name": "MixedTime",
        "normalized": "",
        "package": "event-list",
        "partial": "Mixed Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:-47-.",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-MixedTime.html#%2F.",
        "fct-type": "function",
        "title": "(/.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedTime",
        "module": "Data.EventList.Relative.MixedTime",
        "name": "(/.) /.",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:.-47-",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedTime",
        "fct-package": "event-list",
        "fct-signature": "body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-MixedTime.html#.%2F",
        "fct-type": "function",
        "title": "(./)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedTime",
        "module": "Data.EventList.Relative.MixedTime",
        "name": "(./) ./",
        "normalized": "a-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "",
        "signature": "body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:consBody",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedTime",
        "fct-package": "event-list",
        "fct-signature": "body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#consBody",
        "fct-type": "function",
        "title": "consBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedTime",
        "module": "Data.EventList.Relative.MixedTime",
        "name": "consBody",
        "normalized": "a-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "Body",
        "signature": "body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:consTime",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#consTime",
        "fct-type": "function",
        "title": "consTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedTime",
        "module": "Data.EventList.Relative.MixedTime",
        "name": "consTime",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:empty",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedTime",
        "fct-package": "event-list",
        "fct-signature": "T time body",
        "fct-source": "src/Data-EventList-Relative-BodyTime.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedTime",
        "module": "Data.EventList.Relative.MixedTime",
        "name": "empty",
        "normalized": "",
        "package": "event-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:mapBodyHead",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e body) -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-MixedTime.html#mapBodyHead",
        "fct-type": "function",
        "title": "mapBodyHead"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedTime",
        "module": "Data.EventList.Relative.MixedTime",
        "name": "mapBodyHead",
        "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "Body Head",
        "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:mapBodyL",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e body, T time0 body -\u003e T time1 body) -\u003e T time0 body -\u003e T time1 body",
        "fct-source": "src/Data-EventList-Relative-MixedTime.html#mapBodyL",
        "fct-type": "function",
        "title": "mapBodyL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedTime",
        "module": "Data.EventList.Relative.MixedTime",
        "name": "mapBodyL",
        "normalized": "(a-\u003ea,T b a-\u003eT b a)-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003ebody,T time body-\u003eT time body)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:mapBodyTail",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedTime",
        "fct-package": "event-list",
        "fct-signature": "(T time0 body -\u003e T time1 body) -\u003e T time0 body -\u003e T time1 body",
        "fct-source": "src/Data-EventList-Relative-MixedTime.html#mapBodyTail",
        "fct-type": "function",
        "title": "mapBodyTail"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedTime",
        "module": "Data.EventList.Relative.MixedTime",
        "name": "mapBodyTail",
        "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Body Tail",
        "signature": "(T time body-\u003eT time body)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:mapTimeHead",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e time) -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#mapTimeHead",
        "fct-type": "function",
        "title": "mapTimeHead"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedTime",
        "module": "Data.EventList.Relative.MixedTime",
        "name": "mapTimeHead",
        "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time Head",
        "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:mapTimeL",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e time, T time body0 -\u003e T time body1) -\u003e T time body0 -\u003e T time body1",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#mapTimeL",
        "fct-type": "function",
        "title": "mapTimeL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedTime",
        "module": "Data.EventList.Relative.MixedTime",
        "name": "mapTimeL",
        "normalized": "(a-\u003ea,T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003etime,T time body-\u003eT time body)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:mapTimeTail",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedTime",
        "fct-package": "event-list",
        "fct-signature": "(T time body0 -\u003e T time body1) -\u003e T time body0 -\u003e T time body1",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#mapTimeTail",
        "fct-type": "function",
        "title": "mapTimeTail"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedTime",
        "module": "Data.EventList.Relative.MixedTime",
        "name": "mapTimeTail",
        "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time Tail",
        "signature": "(T time body-\u003eT time body)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:switchBodyL",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedTime",
        "fct-package": "event-list",
        "fct-signature": "a -\u003e (body -\u003e T time body -\u003e a) -\u003e T time body -\u003e a",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#switchBodyL",
        "fct-type": "function",
        "title": "switchBodyL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedTime",
        "module": "Data.EventList.Relative.MixedTime",
        "name": "switchBodyL",
        "normalized": "a-\u003e(b-\u003eT c b-\u003ea)-\u003eT c b-\u003ea",
        "package": "event-list",
        "partial": "Body",
        "signature": "a-\u003e(body-\u003eT time body-\u003ea)-\u003eT time body-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:switchTimeL",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e T time body -\u003e a) -\u003e T time body -\u003e a",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#switchTimeL",
        "fct-type": "function",
        "title": "switchTimeL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedTime",
        "module": "Data.EventList.Relative.MixedTime",
        "name": "switchTimeL",
        "normalized": "(a-\u003eT a b-\u003ec)-\u003eT a b-\u003ec",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003eT time body-\u003ea)-\u003eT time body-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:viewBodyL",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Maybe (body, T time body)",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#viewBodyL",
        "fct-type": "function",
        "title": "viewBodyL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedTime",
        "module": "Data.EventList.Relative.MixedTime",
        "name": "viewBodyL",
        "normalized": "T a b-\u003eMaybe(b,T a b)",
        "package": "event-list",
        "partial": "Body",
        "signature": "T time body-\u003eMaybe(body,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-MixedTime.html#v:viewTimeL",
      "description": {
        "fct-module": "Data.EventList.Relative.MixedTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e (time, T time body)",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#viewTimeL",
        "fct-type": "function",
        "title": "viewTimeL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative MixedTime",
        "module": "Data.EventList.Relative.MixedTime",
        "name": "viewTimeL",
        "normalized": "T a b-\u003e(a,T a b)",
        "package": "event-list",
        "partial": "Time",
        "signature": "T time body-\u003e(time,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent lists starting with a time difference and ending with a body.\n\u003c/p\u003e\u003cp\u003eThe time is stored in differences between the events.\nThus there is no increase of time information for long,\nor even infinite, streams of events.\nFurther on, the time difference is stored\nin the latter of two neighbouring events.\nThis is necessary for real-time computing\nwhere it is not known whether and when the next event happens.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "module",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html",
        "fct-type": "module",
        "title": "TimeBody"
      },
      "index": {
        "description": "Event lists starting with time difference and ending with body The time is stored in differences between the events Thus there is no increase of time information for long or even infinite streams of events Further on the time difference is stored in the latter of two neighbouring events This is necessary for real-time computing where it is not known whether and when the next event happens",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "TimeBody",
        "normalized": "",
        "package": "event-list",
        "partial": "Time Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#t:T",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "data",
        "fct-source": "src/Data-EventList-Relative-TimeBodyPrivate.html#T",
        "fct-type": "data",
        "title": "T"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "T",
        "normalized": "",
        "package": "event-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:append",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "append",
        "normalized": "T a b-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:catMaybes",
      "description": {
        "fct-descr": "\u003cp\u003eAdds times in a left-associative fashion.\nUse this if the time is a strict data type.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time (Maybe body) -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#catMaybes",
        "fct-type": "function",
        "title": "catMaybes"
      },
      "index": {
        "description": "Adds times in left-associative fashion Use this if the time is strict data type",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "catMaybes",
        "normalized": "T a(Maybe b)-\u003eT a b",
        "package": "event-list",
        "partial": "Maybes",
        "signature": "T time(Maybe body)-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:collectCoincident",
      "description": {
        "fct-descr": "\u003cp\u003eGroup events that have equal start times\n(that is zero time differences).\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time [body]",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#collectCoincident",
        "fct-type": "function",
        "title": "collectCoincident"
      },
      "index": {
        "description": "Group events that have equal start times that is zero time differences",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "collectCoincident",
        "normalized": "T a b-\u003eT a[b]",
        "package": "event-list",
        "partial": "Coincident",
        "signature": "T time body-\u003eT time[body]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:concat",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "[T time body] -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "concat",
        "normalized": "[T a b]-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "[T time body]-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:concatMapMonoid",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e m) -\u003e (body -\u003e m) -\u003e T time body -\u003e m",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#concatMapMonoid",
        "fct-type": "function",
        "title": "concatMapMonoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "concatMapMonoid",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eT a c-\u003eb",
        "package": "event-list",
        "partial": "Map Monoid",
        "signature": "(time-\u003em)-\u003e(body-\u003em)-\u003eT time body-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:cons",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "cons",
        "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003ebody-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:cycle",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#cycle",
        "fct-type": "function",
        "title": "cycle"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "cycle",
        "normalized": "T a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:decreaseStart",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#decreaseStart",
        "fct-type": "function",
        "title": "decreaseStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "decreaseStart",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Start",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:delay",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#delay",
        "fct-type": "function",
        "title": "delay"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "delay",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:discretize",
      "description": {
        "fct-descr": "\u003cp\u003eWe provide \u003ccode\u003e\u003ca\u003ediscretize\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eresample\u003c/a\u003e\u003c/code\u003e for discretizing the time information.\nWhen converting the precise relative event times\nto the integer relative event times\nwe have to prevent accumulation of rounding errors.\nWe avoid this problem with a stateful conversion\nwhich remembers each rounding error we make.\nThis rounding error is used to correct the next rounding.\nGiven the relative time and duration of an event\nthe function \u003ccode\u003efloorDiff\u003c/code\u003e creates a \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e\nwhich computes the rounded relative time.\nIt is corrected by previous rounding errors.\n\u003c/p\u003e\u003cp\u003eThe resulting event list may have differing time differences\nwhich were equal before discretization,\nbut the overall timing is uniformly close to the original.\n\u003c/p\u003e\u003cp\u003eWe use \u003ccode\u003efloorDiff\u003c/code\u003e rather than \u003ccode\u003eroundDiff\u003c/code\u003e\nin order to compute exclusively with non-negative numbers.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T i body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#discretize",
        "fct-type": "function",
        "title": "discretize"
      },
      "index": {
        "description": "We provide discretize and resample for discretizing the time information When converting the precise relative event times to the integer relative event times we have to prevent accumulation of rounding errors We avoid this problem with stateful conversion which remembers each rounding error we make This rounding error is used to correct the next rounding Given the relative time and duration of an event the function floorDiff creates State which computes the rounded relative time It is corrected by previous rounding errors The resulting event list may have differing time differences which were equal before discretization but the overall timing is uniformly close to the original We use floorDiff rather than roundDiff in order to compute exclusively with non-negative numbers",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "discretize",
        "normalized": "T a b-\u003eT c b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT i body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:duration",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e time",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#duration",
        "fct-type": "function",
        "title": "duration"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "duration",
        "normalized": "T a b-\u003ea",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003etime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:empty",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "empty",
        "normalized": "",
        "package": "event-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eKeep only events that match a predicate while preserving absolute times.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e Bool) -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Keep only events that match predicate while preserving absolute times",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "",
        "signature": "(body-\u003eBool)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:flatten",
      "description": {
        "fct-descr": "\u003cp\u003eReverse to collectCoincident:\nTurn each \u003ccode\u003ebody\u003c/code\u003e into a separate event.\n\u003c/p\u003e\u003cpre\u003e   xs  ==  flatten (collectCoincident xs)\n\u003c/pre\u003e",
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time [body] -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#flatten",
        "fct-type": "function",
        "title": "flatten"
      },
      "index": {
        "description": "Reverse to collectCoincident Turn each body into separate event xs flatten collectCoincident xs",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "flatten",
        "normalized": "T a[b]-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time[body]-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:foldr",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e a -\u003e b) -\u003e (body -\u003e b -\u003e a) -\u003e b -\u003e T time body -\u003e b",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ec-\u003eb)-\u003ec-\u003eT a d-\u003ec",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003ea-\u003eb)-\u003e(body-\u003eb-\u003ea)-\u003eb-\u003eT time body-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:foldrPair",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e body -\u003e a -\u003e a) -\u003e a -\u003e T time body -\u003e a",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#foldrPair",
        "fct-type": "function",
        "title": "foldrPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "foldrPair",
        "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eT a b-\u003ec",
        "package": "event-list",
        "partial": "Pair",
        "signature": "(time-\u003ebody-\u003ea-\u003ea)-\u003ea-\u003eT time body-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:fromAbsoluteEventList",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#fromAbsoluteEventList",
        "fct-type": "function",
        "title": "fromAbsoluteEventList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "fromAbsoluteEventList",
        "normalized": "T a b-\u003eT a b",
        "package": "event-list",
        "partial": "Absolute Event List",
        "signature": "T time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:fromPairList",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "[(a, b)] -\u003e T a b",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#fromPairList",
        "fct-type": "function",
        "title": "fromPairList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "fromPairList",
        "normalized": "[(a,b)]-\u003eT a b",
        "package": "event-list",
        "partial": "Pair List",
        "signature": "[(a,b)]-\u003eT a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:getBodies",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e [body]",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#getBodies",
        "fct-type": "function",
        "title": "getBodies"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "getBodies",
        "normalized": "T a b-\u003e[b]",
        "package": "event-list",
        "partial": "Bodies",
        "signature": "T time body-\u003e[body]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:getTimes",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e [time]",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#getTimes",
        "fct-type": "function",
        "title": "getTimes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "getTimes",
        "normalized": "T a b-\u003e[a]",
        "package": "event-list",
        "partial": "Times",
        "signature": "T time body-\u003e[time]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e inserts an event into an event list at the given time.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "insert inserts an event into an event list at the given time",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003ebody-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:insertBy",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e body -\u003e Bool) -\u003e time -\u003e body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#insertBy",
        "fct-type": "function",
        "title": "insertBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "insertBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003ea-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "By",
        "signature": "(body-\u003ebody-\u003eBool)-\u003etime-\u003ebody-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:isNormalized",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Bool",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#isNormalized",
        "fct-type": "function",
        "title": "isNormalized"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "isNormalized",
        "normalized": "T a b-\u003eBool",
        "package": "event-list",
        "partial": "Normalized",
        "signature": "T time body-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mapBody",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e body1) -\u003e T time body0 -\u003e T time body1",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#mapBody",
        "fct-type": "function",
        "title": "mapBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "mapBody",
        "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mapBodyM",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#mapBodyM",
        "fct-type": "function",
        "title": "mapBodyM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "mapBodyM",
        "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mapCoincident",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to the lists of coincident events.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "([a] -\u003e [b]) -\u003e T time a -\u003e T time b",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#mapCoincident",
        "fct-type": "function",
        "title": "mapCoincident"
      },
      "index": {
        "description": "Apply function to the lists of coincident events",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "mapCoincident",
        "normalized": "([a]-\u003e[b])-\u003eT c a-\u003eT c b",
        "package": "event-list",
        "partial": "Coincident",
        "signature": "([a]-\u003e[b])-\u003eT time a-\u003eT time b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mapM",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "mapM",
        "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mapM_",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "mapM_",
        "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mapMaybe",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e Maybe body1) -\u003e T time body0 -\u003e T time body1",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe a)-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "Maybe",
        "signature": "(body-\u003eMaybe body)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mapTime",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e time1) -\u003e T time0 body -\u003e T time1 body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#mapTime",
        "fct-type": "function",
        "title": "mapTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "mapTime",
        "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mapTimeM",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#mapTimeM",
        "fct-type": "function",
        "title": "mapTimeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "mapTimeM",
        "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eThis function merges the events of two lists into a new event list.\nNote that \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e compares entire events rather than just start times.\nThis is to ensure that it is commutative,\none of the properties we test for.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "This function merges the events of two lists into new event list Note that merge compares entire events rather than just start times This is to ensure that it is commutative one of the properties we test for",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "merge",
        "normalized": "T a b-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:mergeBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emergeBy\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e but does not simply use the methods of the \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class\nbut allows a custom comparison function.\nIf in event lists \u003ccode\u003exs\u003c/code\u003e and \u003ccode\u003eys\u003c/code\u003e there are coinciding elements \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e,\nand \u003ccode\u003ecmp x y\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\nthen \u003ccode\u003ex\u003c/code\u003e comes before \u003ccode\u003ey\u003c/code\u003e in \u003ccode\u003emergeBy cmp xs ys\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e EventList\u003e EventList.mergeBy (\\_ _ -\u003e True) (0 /. 'a' ./ empty) (0 /. 'b' ./ empty)\n 0 /. 'a' ./ 0 /. 'b' ./ empty\n\n EventList\u003e EventList.mergeBy (\\_ _ -\u003e False) (0 /. 'a' ./ empty) (0 /. 'b' ./ empty)\n 0 /. 'b' ./ 0 /. 'a' ./ empty\n\u003c/pre\u003e",
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e body -\u003e Bool) -\u003e T time body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#mergeBy",
        "fct-type": "function",
        "title": "mergeBy"
      },
      "index": {
        "description": "mergeBy is like merge but does not simply use the methods of the Ord class but allows custom comparison function If in event lists xs and ys there are coinciding elements and and cmp is True then comes before in mergeBy cmp xs ys EventList EventList.mergeBy True empty empty empty EventList EventList.mergeBy False empty empty empty",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "mergeBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eT b a-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "By",
        "signature": "(body-\u003ebody-\u003eBool)-\u003eT time body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:moveForward",
      "description": {
        "fct-descr": "\u003cp\u003eMove events towards the front of the event list.\nYou must make sure, that no event is moved before time zero.\nThis works only for finite lists.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time (time, body) -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#moveForward",
        "fct-type": "function",
        "title": "moveForward"
      },
      "index": {
        "description": "Move events towards the front of the event list You must make sure that no event is moved before time zero This works only for finite lists",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "moveForward",
        "normalized": "T a(a,b)-\u003eT a b",
        "package": "event-list",
        "partial": "Forward",
        "signature": "T time(time,body)-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:normalize",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e sorts a list of coinciding events,\nthat is all events but the first one have time difference 0.\n\u003ccode\u003e\u003ca\u003enormalize\u003c/a\u003e\u003c/code\u003e sorts all coinciding events in a list\nthus yielding a canonical representation of a time ordered list.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#normalize",
        "fct-type": "function",
        "title": "normalize"
      },
      "index": {
        "description": "sort sorts list of coinciding events that is all events but the first one have time difference normalize sorts all coinciding events in list thus yielding canonical representation of time ordered list",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "normalize",
        "normalized": "T a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:null",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Bool",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "null",
        "normalized": "T a b-\u003eBool",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:partition",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e Bool) -\u003e T time body -\u003e (T time body, T time body)",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eT b a-\u003e(T b a,T b a)",
        "package": "event-list",
        "partial": "",
        "signature": "(body-\u003eBool)-\u003eT time body-\u003e(T time body,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:partitionMaybe",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e Maybe body1) -\u003e T time body0 -\u003e (T time body1, T time body0)",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#partitionMaybe",
        "fct-type": "function",
        "title": "partitionMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "partitionMaybe",
        "normalized": "(a-\u003eMaybe a)-\u003eT b a-\u003e(T b a,T b a)",
        "package": "event-list",
        "partial": "Maybe",
        "signature": "(body-\u003eMaybe body)-\u003eT time body-\u003e(T time body,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:resample",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T i body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#resample",
        "fct-type": "function",
        "title": "resample"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "resample",
        "normalized": "a-\u003eT a b-\u003eT c b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003eT time body-\u003eT i body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:singleton",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "singleton",
        "normalized": "a-\u003eb-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003ebody-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:slice",
      "description": {
        "fct-descr": "\u003cp\u003eUsing a classification function\nwe splice the event list into lists, each containing the same class.\nAbsolute time stamps are preserved.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e a) -\u003e T time body -\u003e [(a, T time body)]",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#slice",
        "fct-type": "function",
        "title": "slice"
      },
      "index": {
        "description": "Using classification function we splice the event list into lists each containing the same class Absolute time stamps are preserved",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "slice",
        "normalized": "(a-\u003eb)-\u003eT c a-\u003e[(b,T c a)]",
        "package": "event-list",
        "partial": "",
        "signature": "(body-\u003ea)-\u003eT time body-\u003e[(a,T time body)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:snoc",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e time -\u003e body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#snoc",
        "fct-type": "function",
        "title": "snoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "snoc",
        "normalized": "T a b-\u003ea-\u003eb-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003etime-\u003ebody-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:span",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e Bool) -\u003e T time body -\u003e (T time body, T time body)",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "span",
        "normalized": "(a-\u003eBool)-\u003eT b a-\u003e(T b a,T b a)",
        "package": "event-list",
        "partial": "",
        "signature": "(body-\u003eBool)-\u003eT time body-\u003e(T time body,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:switchL",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "c -\u003e ((time, body) -\u003e T time body -\u003e c) -\u003e T time body -\u003e c",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#switchL",
        "fct-type": "function",
        "title": "switchL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "switchL",
        "normalized": "a-\u003e((b,c)-\u003eT b c-\u003ea)-\u003eT b c-\u003ea",
        "package": "event-list",
        "partial": "",
        "signature": "c-\u003e((time,body)-\u003eT time body-\u003ec)-\u003eT time body-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:switchR",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "c -\u003e (T time body -\u003e (time, body) -\u003e c) -\u003e T time body -\u003e c",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#switchR",
        "fct-type": "function",
        "title": "switchR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "switchR",
        "normalized": "a-\u003e(T b c-\u003e(b,c)-\u003ea)-\u003eT b c-\u003ea",
        "package": "event-list",
        "partial": "",
        "signature": "c-\u003e(T time body-\u003e(time,body)-\u003ec)-\u003eT time body-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:toAbsoluteEventList",
      "description": {
        "fct-descr": "\u003cp\u003eWe tried hard to compute everything with respect to relative times.\nHowever sometimes we need absolute time values.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#toAbsoluteEventList",
        "fct-type": "function",
        "title": "toAbsoluteEventList"
      },
      "index": {
        "description": "We tried hard to compute everything with respect to relative times However sometimes we need absolute time values",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "toAbsoluteEventList",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Absolute Event List",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:toPairList",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T a b -\u003e [(a, b)]",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#toPairList",
        "fct-type": "function",
        "title": "toPairList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "toPairList",
        "normalized": "T a b-\u003e[(a,b)]",
        "package": "event-list",
        "partial": "Pair List",
        "signature": "T a b-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:traverse",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#traverse",
        "fct-type": "function",
        "title": "traverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "traverse",
        "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:traverseBody",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#traverseBody",
        "fct-type": "function",
        "title": "traverseBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "traverseBody",
        "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:traverseTime",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#traverseTime",
        "fct-type": "function",
        "title": "traverseTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "traverseTime",
        "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:traverse_",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#traverse_",
        "fct-type": "function",
        "title": "traverse_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "traverse_",
        "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:unzip",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time (body0, body1) -\u003e (T time body0, T time body1)",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#unzip",
        "fct-type": "function",
        "title": "unzip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "unzip",
        "normalized": "T a(b,b)-\u003e(T a b,T a b)",
        "package": "event-list",
        "partial": "",
        "signature": "T time(body,body)-\u003e(T time body,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:viewL",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Maybe ((time, body), T time body)",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#viewL",
        "fct-type": "function",
        "title": "viewL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "viewL",
        "normalized": "T a b-\u003eMaybe((a,b),T a b)",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eMaybe((time,body),T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:viewR",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Maybe (T time body, (time, body))",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#viewR",
        "fct-type": "function",
        "title": "viewR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "viewR",
        "normalized": "T a b-\u003eMaybe(T a b,(a,b))",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eMaybe(T time body,(time,body))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:zipWithBody",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e body1 -\u003e body2) -\u003e [body0] -\u003e T time body1 -\u003e T time body2",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#zipWithBody",
        "fct-type": "function",
        "title": "zipWithBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "zipWithBody",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "With Body",
        "signature": "(body-\u003ebody-\u003ebody)-\u003e[body]-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeBody.html#v:zipWithTime",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeBody",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e time1 -\u003e time2) -\u003e [time0] -\u003e T time1 body -\u003e T time2 body",
        "fct-source": "src/Data-EventList-Relative-TimeBody.html#zipWithTime",
        "fct-type": "function",
        "title": "zipWithTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeBody",
        "module": "Data.EventList.Relative.TimeBody",
        "name": "zipWithTime",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "With Time",
        "signature": "(time-\u003etime-\u003etime)-\u003e[time]-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent lists starting with a body and ending with a time difference.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "module",
        "fct-source": "src/Data-EventList-Relative-TimeMixed.html",
        "fct-type": "module",
        "title": "TimeMixed"
      },
      "index": {
        "description": "Event lists starting with body and ending with time difference",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "TimeMixed",
        "normalized": "",
        "package": "event-list",
        "partial": "Time Mixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:appendBodyEnd",
      "description": {
        "fct-descr": "\u003cp\u003eThis is not a good name, expect a change.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeMixed.html#appendBodyEnd",
        "fct-type": "function",
        "title": "appendBodyEnd"
      },
      "index": {
        "description": "This is not good name expect change",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "appendBodyEnd",
        "normalized": "T a b-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Body End",
        "signature": "T time body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:dropTime",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeMixed.html#dropTime",
        "fct-type": "function",
        "title": "dropTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "dropTime",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:mapBodyInit",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "(T time0 body -\u003e T time1 body) -\u003e T time0 body -\u003e T time1 body",
        "fct-source": "src/Data-EventList-Relative-TimeMixed.html#mapBodyInit",
        "fct-type": "function",
        "title": "mapBodyInit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "mapBodyInit",
        "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Body Init",
        "signature": "(T time body-\u003eT time body)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:mapBodyLast",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e body) -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeMixed.html#mapBodyLast",
        "fct-type": "function",
        "title": "mapBodyLast"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "mapBodyLast",
        "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "Body Last",
        "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:mapBodyR",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "(T time0 body -\u003e T time1 body, body -\u003e body) -\u003e T time0 body -\u003e T time1 body",
        "fct-source": "src/Data-EventList-Relative-TimeMixed.html#mapBodyR",
        "fct-type": "function",
        "title": "mapBodyR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "mapBodyR",
        "normalized": "(T a b-\u003eT a b,b-\u003eb)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Body",
        "signature": "(T time body-\u003eT time body,body-\u003ebody)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:mapTimeInit",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "(T time body0 -\u003e T time body1) -\u003e T time body0 -\u003e T time body1",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#mapTimeInit",
        "fct-type": "function",
        "title": "mapTimeInit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "mapTimeInit",
        "normalized": "(T a b-\u003eT a b)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time Init",
        "signature": "(T time body-\u003eT time body)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:mapTimeLast",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e time) -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#mapTimeLast",
        "fct-type": "function",
        "title": "mapTimeLast"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "mapTimeLast",
        "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time Last",
        "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:mapTimeR",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "(T time body0 -\u003e T time body1, time -\u003e time) -\u003e T time body0 -\u003e T time body1",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#mapTimeR",
        "fct-type": "function",
        "title": "mapTimeR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "mapTimeR",
        "normalized": "(T a b-\u003eT a b,a-\u003ea)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time",
        "signature": "(T time body-\u003eT time body,time-\u003etime)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:prependBodyEnd",
      "description": {
        "fct-descr": "\u003cp\u003eThis is not a good name, expect a change.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeMixed.html#prependBodyEnd",
        "fct-type": "function",
        "title": "prependBodyEnd"
      },
      "index": {
        "description": "This is not good name expect change",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "prependBodyEnd",
        "normalized": "T a b-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Body End",
        "signature": "T time body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:snocBody",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeMixed.html#snocBody",
        "fct-type": "function",
        "title": "snocBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "snocBody",
        "normalized": "T a b-\u003eb-\u003eT a b",
        "package": "event-list",
        "partial": "Body",
        "signature": "T time body-\u003ebody-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:snocTime",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e time -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeMixed.html#snocTime",
        "fct-type": "function",
        "title": "snocTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "snocTime",
        "normalized": "T a b-\u003ea-\u003eT a b",
        "package": "event-list",
        "partial": "Time",
        "signature": "T time body-\u003etime-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:splitAtTime",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e (T time body, T time body)",
        "fct-source": "src/Data-EventList-Relative-TimeMixed.html#splitAtTime",
        "fct-type": "function",
        "title": "splitAtTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "splitAtTime",
        "normalized": "a-\u003eT a b-\u003e(T a b,T a b)",
        "package": "event-list",
        "partial": "At Time",
        "signature": "time-\u003eT time body-\u003e(T time body,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:switchBodyR",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "a -\u003e (T time body -\u003e body -\u003e a) -\u003e T time body -\u003e a",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#switchBodyR",
        "fct-type": "function",
        "title": "switchBodyR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "switchBodyR",
        "normalized": "a-\u003e(T b c-\u003ec-\u003ea)-\u003eT b c-\u003ea",
        "package": "event-list",
        "partial": "Body",
        "signature": "a-\u003e(T time body-\u003ebody-\u003ea)-\u003eT time body-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:switchTimeR",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "(T time body -\u003e time -\u003e a) -\u003e T time body -\u003e a",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#switchTimeR",
        "fct-type": "function",
        "title": "switchTimeR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "switchTimeR",
        "normalized": "(T a b-\u003ea-\u003ec)-\u003eT a b-\u003ec",
        "package": "event-list",
        "partial": "Time",
        "signature": "(T time body-\u003etime-\u003ea)-\u003eT time body-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:takeTime",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeMixed.html#takeTime",
        "fct-type": "function",
        "title": "takeTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "takeTime",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:viewBodyR",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Maybe (T time body, body)",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#viewBodyR",
        "fct-type": "function",
        "title": "viewBodyR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "viewBodyR",
        "normalized": "T a b-\u003eMaybe(T a b,b)",
        "package": "event-list",
        "partial": "Body",
        "signature": "T time body-\u003eMaybe(T time body,body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeMixed.html#v:viewTimeR",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeMixed",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e (T time body, time)",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#viewTimeR",
        "fct-type": "function",
        "title": "viewTimeR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeMixed",
        "module": "Data.EventList.Relative.TimeMixed",
        "name": "viewTimeR",
        "normalized": "T a b-\u003e(T a b,a)",
        "package": "event-list",
        "partial": "Time",
        "signature": "T time body-\u003e(T time body,time)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEvent lists starting with a time difference and ending with a time difference.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "module",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html",
        "fct-type": "module",
        "title": "TimeTime"
      },
      "index": {
        "description": "Event lists starting with time difference and ending with time difference",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "TimeTime",
        "normalized": "",
        "package": "event-list",
        "partial": "Time Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#t:T",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "data",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#T",
        "fct-type": "data",
        "title": "T"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "T",
        "normalized": "",
        "package": "event-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:append",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "append",
        "normalized": "T a b-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:arrange",
      "description": {
        "fct-descr": "\u003cp\u003eMerge several event lists respecting the start time of the outer event list.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time (T time body) -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#arrange",
        "fct-type": "function",
        "title": "arrange"
      },
      "index": {
        "description": "Merge several event lists respecting the start time of the outer event list",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "arrange",
        "normalized": "T a(T a b)-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time(T time body)-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:arrangeBy",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e body -\u003e Bool) -\u003e T time (T time body) -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#arrangeBy",
        "fct-type": "function",
        "title": "arrangeBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "arrangeBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eT b(T b a)-\u003eT b a",
        "package": "event-list",
        "partial": "By",
        "signature": "(body-\u003ebody-\u003eBool)-\u003eT time(T time body)-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:catMaybes",
      "description": {
        "fct-descr": "\u003cp\u003eAdds times in a left-associative fashion.\nUse this if the time is a strict data type.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time (Maybe body) -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#catMaybes",
        "fct-type": "function",
        "title": "catMaybes"
      },
      "index": {
        "description": "Adds times in left-associative fashion Use this if the time is strict data type",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "catMaybes",
        "normalized": "T a(Maybe b)-\u003eT a b",
        "package": "event-list",
        "partial": "Maybes",
        "signature": "T time(Maybe body)-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:catMaybesR",
      "description": {
        "fct-descr": "\u003cp\u003eAdds times in a right-associative fashion.\nUse this if the time is a data type like lazy Peano numbers\nor \u003ca\u003eNumeric.NonNegative.Chunky\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time (Maybe body) -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#catMaybesR",
        "fct-type": "function",
        "title": "catMaybesR"
      },
      "index": {
        "description": "Adds times in right-associative fashion Use this if the time is data type like lazy Peano numbers or Numeric.NonNegative.Chunky",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "catMaybesR",
        "normalized": "T a(Maybe b)-\u003eT a b",
        "package": "event-list",
        "partial": "Maybes",
        "signature": "T time(Maybe body)-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:collectCoincident",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time [body]",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#collectCoincident",
        "fct-type": "function",
        "title": "collectCoincident"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "collectCoincident",
        "normalized": "T a b-\u003eT a[b]",
        "package": "event-list",
        "partial": "Coincident",
        "signature": "T time body-\u003eT time[body]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:concat",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "[T time body] -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "concat",
        "normalized": "[T a b]-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "[T time body]-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:concatMapMonoid",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e m) -\u003e (body -\u003e m) -\u003e T time body -\u003e m",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#concatMapMonoid",
        "fct-type": "function",
        "title": "concatMapMonoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "concatMapMonoid",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eT a c-\u003eb",
        "package": "event-list",
        "partial": "Map Monoid",
        "signature": "(time-\u003em)-\u003e(body-\u003em)-\u003eT time body-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:concatNaive",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econcatNaive\u003c/a\u003e\u003c/code\u003e are essentially the same.\n\u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e must use \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e in order to work on infinite lists,\nhowever if there are many empty lists,\nsumming of their durations will be done from right to left,\nwhich is inefficient.\nThus we detect subsequent empty lists and merge them from left to right.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "[T time body] -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#concatNaive",
        "fct-type": "function",
        "title": "concatNaive"
      },
      "index": {
        "description": "concat and concatNaive are essentially the same concat must use foldr in order to work on infinite lists however if there are many empty lists summing of their durations will be done from right to left which is inefficient Thus we detect subsequent empty lists and merge them from left to right",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "concatNaive",
        "normalized": "[T a b]-\u003eT a b",
        "package": "event-list",
        "partial": "Naive",
        "signature": "[T time body]-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:cons",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "cons",
        "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003ebody-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:cycle",
      "description": {
        "fct-descr": "\u003cp\u003eUses sharing.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#cycle",
        "fct-type": "function",
        "title": "cycle"
      },
      "index": {
        "description": "Uses sharing",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "cycle",
        "normalized": "T a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:cycleNaive",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#cycleNaive",
        "fct-type": "function",
        "title": "cycleNaive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "cycleNaive",
        "normalized": "T a b-\u003eT a b",
        "package": "event-list",
        "partial": "Naive",
        "signature": "T time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:decreaseStart",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#decreaseStart",
        "fct-type": "function",
        "title": "decreaseStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "decreaseStart",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Start",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:delay",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#delay",
        "fct-type": "function",
        "title": "delay"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "delay",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:discretize",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T i body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#discretize",
        "fct-type": "function",
        "title": "discretize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "discretize",
        "normalized": "T a b-\u003eT c b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT i body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:dropTime",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#dropTime",
        "fct-type": "function",
        "title": "dropTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "dropTime",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:duration",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e time",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#duration",
        "fct-type": "function",
        "title": "duration"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "duration",
        "normalized": "T a b-\u003ea",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003etime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogously to the \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003e\u003ca\u003econcatNaive\u003c/a\u003e\u003c/code\u003e pair\nwe have to versions of \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e,\nwhere the clever implementation sums up pauses\nfrom the beginning to the end.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e Bool) -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "Analogously to the concat concatNaive pair we have to versions of filter where the clever implementation sums up pauses from the beginning to the end",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "",
        "signature": "(body-\u003eBool)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:flatten",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time [body] -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#flatten",
        "fct-type": "function",
        "title": "flatten"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "flatten",
        "normalized": "T a[b]-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time[body]-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:foldl",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(a -\u003e time -\u003e b) -\u003e (b -\u003e body -\u003e a) -\u003e a -\u003e T time body -\u003e b",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(c-\u003ed-\u003ea)-\u003ea-\u003eT b d-\u003ec",
        "package": "event-list",
        "partial": "",
        "signature": "(a-\u003etime-\u003eb)-\u003e(b-\u003ebody-\u003ea)-\u003ea-\u003eT time body-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:foldr",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e a -\u003e b) -\u003e (body -\u003e b -\u003e a) -\u003e a -\u003e T time body -\u003e b",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ec-\u003eb)-\u003eb-\u003eT a d-\u003ec",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003ea-\u003eb)-\u003e(body-\u003eb-\u003ea)-\u003ea-\u003eT time body-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:forceTimeHead",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTimePrivate.html#forceTimeHead",
        "fct-type": "function",
        "title": "forceTimeHead"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "forceTimeHead",
        "normalized": "T a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time Head",
        "signature": "T time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:fromAbsoluteEventList",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#fromAbsoluteEventList",
        "fct-type": "function",
        "title": "fromAbsoluteEventList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "fromAbsoluteEventList",
        "normalized": "T a b-\u003eT a b",
        "package": "event-list",
        "partial": "Absolute Event List",
        "signature": "T time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:getBodies",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e [body]",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#getBodies",
        "fct-type": "function",
        "title": "getBodies"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "getBodies",
        "normalized": "T a b-\u003e[b]",
        "package": "event-list",
        "partial": "Bodies",
        "signature": "T time body-\u003e[body]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:getTimes",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e [time]",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#getTimes",
        "fct-type": "function",
        "title": "getTimes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "getTimes",
        "normalized": "T a b-\u003e[a]",
        "package": "event-list",
        "partial": "Times",
        "signature": "T time body-\u003e[time]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e compares entire events rather than just start\ntimes.  This is to ensure that it is commutative, a desirable\ncondition for some of the proofs used in Haskore/section equivalence.\nIt is also necessary to assert a unique representation\nof the event list independent of the structure of the event type.\nThe same function for inserting into a time ordered list with a trailing pause.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Note that merge compares entire events rather than just start times This is to ensure that it is commutative desirable condition for some of the proofs used in Haskore section equivalence It is also necessary to assert unique representation of the event list independent of the structure of the event type The same function for inserting into time ordered list with trailing pause",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003ebody-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:isNormalized",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Bool",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#isNormalized",
        "fct-type": "function",
        "title": "isNormalized"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "isNormalized",
        "normalized": "T a b-\u003eBool",
        "package": "event-list",
        "partial": "Normalized",
        "signature": "T time body-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:isPause",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e Bool",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#isPause",
        "fct-type": "function",
        "title": "isPause"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "isPause",
        "normalized": "T a b-\u003eBool",
        "package": "event-list",
        "partial": "Pause",
        "signature": "T time body-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mapBody",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e body1) -\u003e T time body0 -\u003e T time body1",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#mapBody",
        "fct-type": "function",
        "title": "mapBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "mapBody",
        "normalized": "(a-\u003ea)-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003ebody)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mapBodyM",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#mapBodyM",
        "fct-type": "function",
        "title": "mapBodyM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "mapBodyM",
        "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mapCoincident",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "([a] -\u003e [b]) -\u003e T time a -\u003e T time b",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#mapCoincident",
        "fct-type": "function",
        "title": "mapCoincident"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "mapCoincident",
        "normalized": "([a]-\u003e[b])-\u003eT c a-\u003eT c b",
        "package": "event-list",
        "partial": "Coincident",
        "signature": "([a]-\u003e[b])-\u003eT time a-\u003eT time b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mapM",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "mapM",
        "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mapM_",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#mapM_",
        "fct-type": "function",
        "title": "mapM_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "mapM_",
        "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mapMaybe",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e Maybe body1) -\u003e T time body0 -\u003e T time body1",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe a)-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "Maybe",
        "signature": "(body-\u003eMaybe body)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mapTime",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e time1) -\u003e T time0 body -\u003e T time1 body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#mapTime",
        "fct-type": "function",
        "title": "mapTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "mapTime",
        "normalized": "(a-\u003ea)-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003etime)-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mapTimeM",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#mapTimeM",
        "fct-type": "function",
        "title": "mapTimeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "mapTimeM",
        "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eThe first important function is \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e\nwhich merges the events of two lists into a new time order list.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "The first important function is merge which merges the events of two lists into new time order list",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "merge",
        "normalized": "T a b-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:mergeBy",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e body -\u003e Bool) -\u003e T time body -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#mergeBy",
        "fct-type": "function",
        "title": "mergeBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "mergeBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eT b a-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "By",
        "signature": "(body-\u003ebody-\u003eBool)-\u003eT time body-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:moveBackward",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time (time, body) -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#moveBackward",
        "fct-type": "function",
        "title": "moveBackward"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "moveBackward",
        "normalized": "T a(a,b)-\u003eT a b",
        "package": "event-list",
        "partial": "Backward",
        "signature": "T time(time,body)-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:moveForward",
      "description": {
        "fct-descr": "\u003cp\u003eMove events towards the front of the event list.\nYou must make sure, that no event is moved before time zero.\nThis works only for finite lists.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time (time, body) -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#moveForward",
        "fct-type": "function",
        "title": "moveForward"
      },
      "index": {
        "description": "Move events towards the front of the event list You must make sure that no event is moved before time zero This works only for finite lists",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "moveForward",
        "normalized": "T a(a,b)-\u003eT a b",
        "package": "event-list",
        "partial": "Forward",
        "signature": "T time(time,body)-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:moveForwardRestricted",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emoveForward\u003c/a\u003e\u003c/code\u003e but restricts the look-ahead time.\nFor \u003ccode\u003emoveForwardRestricted maxTimeDiff xs\u003c/code\u003e\nall time differences (aka the moveForward offsets) in \u003ccode\u003exs\u003c/code\u003e\nmust be at most \u003ccode\u003emaxTimeDiff\u003c/code\u003e.\nWith this restriction the function is lazy enough\nfor handling infinite event lists.\nHowever the larger \u003ccode\u003emaxTimeDiff\u003c/code\u003e the more memory and time is consumed.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time (time, body) -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#moveForwardRestricted",
        "fct-type": "function",
        "title": "moveForwardRestricted"
      },
      "index": {
        "description": "Like moveForward but restricts the look-ahead time For moveForwardRestricted maxTimeDiff xs all time differences aka the moveForward offsets in xs must be at most maxTimeDiff With this restriction the function is lazy enough for handling infinite event lists However the larger maxTimeDiff the more memory and time is consumed",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "moveForwardRestricted",
        "normalized": "a-\u003eT a(a,b)-\u003eT a b",
        "package": "event-list",
        "partial": "Forward Restricted",
        "signature": "time-\u003eT time(time,body)-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:moveForwardRestrictedBy",
      "description": {
        "fct-descr": "\u003cp\u003ecurrently only for testing\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e body -\u003e Bool) -\u003e time -\u003e T time (time, body) -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#moveForwardRestrictedBy",
        "fct-type": "function",
        "title": "moveForwardRestrictedBy"
      },
      "index": {
        "description": "currently only for testing",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "moveForwardRestrictedBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003eT b(b,a)-\u003eT b a",
        "package": "event-list",
        "partial": "Forward Restricted By",
        "signature": "(body-\u003ebody-\u003eBool)-\u003etime-\u003eT time(time,body)-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:moveForwardRestrictedByQueue",
      "description": {
        "fct-descr": "\u003cp\u003ecurrently only for testing\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e body -\u003e Bool) -\u003e time -\u003e T time (time, body) -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#moveForwardRestrictedByQueue",
        "fct-type": "function",
        "title": "moveForwardRestrictedByQueue"
      },
      "index": {
        "description": "currently only for testing",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "moveForwardRestrictedByQueue",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003eT b(b,a)-\u003eT b a",
        "package": "event-list",
        "partial": "Forward Restricted By Queue",
        "signature": "(body-\u003ebody-\u003eBool)-\u003etime-\u003eT time(time,body)-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:moveForwardRestrictedByStrict",
      "description": {
        "fct-descr": "\u003cp\u003ecurrently only for testing\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e body -\u003e Bool) -\u003e time -\u003e T time (time, body) -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#moveForwardRestrictedByStrict",
        "fct-type": "function",
        "title": "moveForwardRestrictedByStrict"
      },
      "index": {
        "description": "currently only for testing",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "moveForwardRestrictedByStrict",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eb-\u003eT b(b,a)-\u003eT b a",
        "package": "event-list",
        "partial": "Forward Restricted By Strict",
        "signature": "(body-\u003ebody-\u003eBool)-\u003etime-\u003eT time(time,body)-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:normalize",
      "description": {
        "fct-descr": "\u003cp\u003eSort coincident elements.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#normalize",
        "fct-type": "function",
        "title": "normalize"
      },
      "index": {
        "description": "Sort coincident elements",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "normalize",
        "normalized": "T a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:pad",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#pad",
        "fct-type": "function",
        "title": "pad"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "pad",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:partition",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e Bool) -\u003e T time body -\u003e (T time body, T time body)",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eT b a-\u003e(T b a,T b a)",
        "package": "event-list",
        "partial": "",
        "signature": "(body-\u003eBool)-\u003eT time body-\u003e(T time body,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:partitionMaybe",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e Maybe body1) -\u003e T time body0 -\u003e (T time body1, T time body0)",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#partitionMaybe",
        "fct-type": "function",
        "title": "partitionMaybe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "partitionMaybe",
        "normalized": "(a-\u003eMaybe a)-\u003eT b a-\u003e(T b a,T b a)",
        "package": "event-list",
        "partial": "Maybe",
        "signature": "(body-\u003eMaybe body)-\u003eT time body-\u003e(T time body,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:partitionMaybeR",
      "description": {
        "fct-descr": "\u003cp\u003eCf. \u003ccode\u003e\u003ca\u003ecatMaybesR\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e Maybe body1) -\u003e T time body0 -\u003e (T time body1, T time body0)",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#partitionMaybeR",
        "fct-type": "function",
        "title": "partitionMaybeR"
      },
      "index": {
        "description": "Cf catMaybesR",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "partitionMaybeR",
        "normalized": "(a-\u003eMaybe a)-\u003eT b a-\u003e(T b a,T b a)",
        "package": "event-list",
        "partial": "Maybe",
        "signature": "(body-\u003eMaybe body)-\u003eT time body-\u003e(T time body,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:pause",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#pause",
        "fct-type": "function",
        "title": "pause"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "pause",
        "normalized": "a-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:resample",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T i body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#resample",
        "fct-type": "function",
        "title": "resample"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "resample",
        "normalized": "a-\u003eT a b-\u003eT c b",
        "package": "event-list",
        "partial": "",
        "signature": "time-\u003eT time body-\u003eT i body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:reverse",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#reverse",
        "fct-type": "function",
        "title": "reverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "reverse",
        "normalized": "T a b-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:slice",
      "description": {
        "fct-descr": "\u003cp\u003eSince we need it later for MIDI generation,\nwe will also define a slicing into equivalence classes of events.\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body -\u003e a) -\u003e T time body -\u003e [(a, T time body)]",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#slice",
        "fct-type": "function",
        "title": "slice"
      },
      "index": {
        "description": "Since we need it later for MIDI generation we will also define slicing into equivalence classes of events",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "slice",
        "normalized": "(a-\u003eb)-\u003eT c a-\u003e[(b,T c a)]",
        "package": "event-list",
        "partial": "",
        "signature": "(body-\u003ea)-\u003eT time body-\u003e[(a,T time body)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:snoc",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e body -\u003e time -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#snoc",
        "fct-type": "function",
        "title": "snoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "snoc",
        "normalized": "T a b-\u003eb-\u003ea-\u003eT a b",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003ebody-\u003etime-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:splitAtTime",
      "description": {
        "fct-descr": "\u003cp\u003eIf there is an event at the cutting time,\nthis event is returned in the suffix part.\nThat is\n\u003ccode\u003esplitAtTime t0 (t0 .\u003cem\u003e x \u003c/em\u003e. t1 ./ empty) ==\n    (pause t0, 0 .\u003cem\u003e x \u003c/em\u003e. t1 ./ empty)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e (T time body, T time body)",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#splitAtTime",
        "fct-type": "function",
        "title": "splitAtTime"
      },
      "index": {
        "description": "If there is an event at the cutting time this event is returned in the suffix part That is splitAtTime t0 t0 t1 empty pause t0 t1 empty",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "splitAtTime",
        "normalized": "a-\u003eT a b-\u003e(T a b,T a b)",
        "package": "event-list",
        "partial": "At Time",
        "signature": "time-\u003eT time body-\u003e(T time body,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:switchL",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e a) -\u003e ((time, body) -\u003e T time body -\u003e a) -\u003e T time body -\u003e a",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#switchL",
        "fct-type": "function",
        "title": "switchL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "switchL",
        "normalized": "(a-\u003eb)-\u003e((a,c)-\u003eT a c-\u003eb)-\u003eT a c-\u003eb",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003ea)-\u003e((time,body)-\u003eT time body-\u003ea)-\u003eT time body-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:switchR",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e a) -\u003e (T time body -\u003e body -\u003e time -\u003e a) -\u003e T time body -\u003e a",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#switchR",
        "fct-type": "function",
        "title": "switchR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "switchR",
        "normalized": "(a-\u003eb)-\u003e(T a c-\u003ec-\u003ea-\u003eb)-\u003eT a c-\u003eb",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003ea)-\u003e(T time body-\u003ebody-\u003etime-\u003ea)-\u003eT time body-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:takeTime",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#takeTime",
        "fct-type": "function",
        "title": "takeTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "takeTime",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Time",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:toAbsoluteEventList",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "time -\u003e T time body -\u003e T time body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#toAbsoluteEventList",
        "fct-type": "function",
        "title": "toAbsoluteEventList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "toAbsoluteEventList",
        "normalized": "a-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "Absolute Event List",
        "signature": "time-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:traverse",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e (body0 -\u003e m body1) -\u003e T time0 body0 -\u003e m (T time1 body1)",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#traverse",
        "fct-type": "function",
        "title": "traverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "traverse",
        "normalized": "(a-\u003eb a)-\u003e(c-\u003eb c)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em time)-\u003e(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:traverseBody",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e m body1) -\u003e T time body0 -\u003e m (T time body1)",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#traverseBody",
        "fct-type": "function",
        "title": "traverseBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "traverseBody",
        "normalized": "(a-\u003eb a)-\u003eT c a-\u003eb(T c a)",
        "package": "event-list",
        "partial": "Body",
        "signature": "(body-\u003em body)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:traverseTime",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e m time1) -\u003e T time0 body -\u003e m (T time1 body)",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#traverseTime",
        "fct-type": "function",
        "title": "traverseTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "traverseTime",
        "normalized": "(a-\u003eb a)-\u003eT a c-\u003eb(T a c)",
        "package": "event-list",
        "partial": "Time",
        "signature": "(time-\u003em time)-\u003eT time body-\u003em(T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:traverse_",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time -\u003e m ()) -\u003e (body -\u003e m ()) -\u003e T time body -\u003e m ()",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#traverse_",
        "fct-type": "function",
        "title": "traverse_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "traverse_",
        "normalized": "(a-\u003eb())-\u003e(c-\u003eb())-\u003eT a c-\u003eb()",
        "package": "event-list",
        "partial": "",
        "signature": "(time-\u003em())-\u003e(body-\u003em())-\u003eT time body-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:unzip",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time (body0, body1) -\u003e (T time body0, T time body1)",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#unzip",
        "fct-type": "function",
        "title": "unzip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "unzip",
        "normalized": "T a(b,b)-\u003e(T a b,T a b)",
        "package": "event-list",
        "partial": "",
        "signature": "T time(body,body)-\u003e(T time body,T time body)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:viewL",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e (time, Maybe (body, T time body))",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#viewL",
        "fct-type": "function",
        "title": "viewL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "viewL",
        "normalized": "T a b-\u003e(a,Maybe(b,T a b))",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003e(time,Maybe(body,T time body))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:viewR",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "T time body -\u003e (Maybe (T time body, body), time)",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#viewR",
        "fct-type": "function",
        "title": "viewR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "viewR",
        "normalized": "T a b-\u003e(Maybe(T a b,b),a)",
        "package": "event-list",
        "partial": "",
        "signature": "T time body-\u003e(Maybe(T time body,body),time)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:zipWithBody",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(body0 -\u003e body1 -\u003e body2) -\u003e [body0] -\u003e T time body1 -\u003e T time body2",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#zipWithBody",
        "fct-type": "function",
        "title": "zipWithBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "zipWithBody",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003eT b a-\u003eT b a",
        "package": "event-list",
        "partial": "With Body",
        "signature": "(body-\u003ebody-\u003ebody)-\u003e[body]-\u003eT time body-\u003eT time body"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/event-list/docs/Data-EventList-Relative-TimeTime.html#v:zipWithTime",
      "description": {
        "fct-module": "Data.EventList.Relative.TimeTime",
        "fct-package": "event-list",
        "fct-signature": "(time0 -\u003e time1 -\u003e time2) -\u003e (time0, [time0]) -\u003e T time1 body -\u003e T time2 body",
        "fct-source": "src/Data-EventList-Relative-TimeTime.html#zipWithTime",
        "fct-type": "function",
        "title": "zipWithTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Data EventList Relative TimeTime",
        "module": "Data.EventList.Relative.TimeTime",
        "name": "zipWithTime",
        "normalized": "(a-\u003ea-\u003ea)-\u003e(a,[a])-\u003eT a b-\u003eT a b",
        "package": "event-list",
        "partial": "With Time",
        "signature": "(time-\u003etime-\u003etime)-\u003e(time,[time])-\u003eT time body-\u003eT time body"
      }
    }
  }
]