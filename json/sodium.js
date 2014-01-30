[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneralization of the Sodium API to allow for parallel processing.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "module",
        "fct-source": "src/FRP-Sodium-Context.html",
        "fct-type": "module",
        "title": "Context"
      },
      "index": {
        "description": "Generalization of the Sodium API to allow for parallel processing",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "Context",
        "normalized": "",
        "package": "sodium",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#t:Behaviour",
      "description": {
        "fct-descr": "\u003cp\u003eA time-varying value, British spelling.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "type",
        "fct-source": "src/FRP-Sodium-Context.html#Behaviour",
        "fct-type": "type",
        "title": "Behaviour"
      },
      "index": {
        "description": "time-varying value British spelling",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "Behaviour",
        "normalized": "",
        "package": "sodium",
        "partial": "Behaviour",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#t:Context",
      "description": {
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "class",
        "fct-source": "src/FRP-Sodium-Context.html#Context",
        "fct-type": "class",
        "title": "Context"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "Context",
        "normalized": "",
        "package": "sodium",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#t:ContextIO",
      "description": {
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "class",
        "fct-source": "src/FRP-Sodium-Context.html#ContextIO",
        "fct-type": "class",
        "title": "ContextIO"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "ContextIO",
        "normalized": "",
        "package": "sodium",
        "partial": "Context IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:accum",
      "description": {
        "fct-descr": "\u003cp\u003eAccumulate state changes given in the input event.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "a -\u003e Event r (a -\u003e a) -\u003e Reactive r (Behavior r a)",
        "fct-source": "src/FRP-Sodium-Context.html#accum",
        "fct-type": "function",
        "title": "accum"
      },
      "index": {
        "description": "Accumulate state changes given in the input event",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "accum",
        "normalized": "a-\u003eEvent b(a-\u003ea)-\u003eReactive b(Behavior b a)",
        "package": "sodium",
        "partial": "",
        "signature": "a-\u003eEvent r(a-\u003ea)-\u003eReactive r(Behavior r a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:coalesce",
      "description": {
        "fct-descr": "\u003cp\u003eIf there's more than one firing in a single transaction, combine them into\n one using the specified combining function.\n\u003c/p\u003e\u003cp\u003eIf the event firings are ordered, then the first will appear at the left\n input of the combining function. In most common cases it's best not to\n make any assumptions about the ordering, and the combining function would\n ideally be commutative.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Event r a -\u003e Event r a",
        "fct-source": "src/FRP-Sodium-Context.html#coalesce",
        "fct-type": "method",
        "title": "coalesce"
      },
      "index": {
        "description": "If there more than one firing in single transaction combine them into one using the specified combining function If the event firings are ordered then the first will appear at the left input of the combining function In most common cases it best not to make any assumptions about the ordering and the combining function would ideally be commutative",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "coalesce",
        "normalized": "(a-\u003ea-\u003ea)-\u003eEvent b a-\u003eEvent b a",
        "package": "sodium",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eEvent r a-\u003eEvent r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:collect",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a behavior with a generalized state loop (a mealy machine). The function\n is passed the input and the old state and returns the new state and output value.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "(a -\u003e s -\u003e (b, s)) -\u003e s -\u003e Behavior r a -\u003e Reactive r (Behavior r b)",
        "fct-source": "src/FRP-Sodium-Context.html#collect",
        "fct-type": "function",
        "title": "collect"
      },
      "index": {
        "description": "Transform behavior with generalized state loop mealy machine The function is passed the input and the old state and returns the new state and output value",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "collect",
        "normalized": "(a-\u003eb-\u003e(c,b))-\u003eb-\u003eBehavior d a-\u003eReactive d(Behavior d c)",
        "package": "sodium",
        "partial": "",
        "signature": "(a-\u003es-\u003e(b,s))-\u003es-\u003eBehavior r a-\u003eReactive r(Behavior r b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:collectE",
      "description": {
        "fct-descr": "\u003cp\u003eTransform an event with a generalized state loop (a mealy machine). The function\n is passed the input and the old state and returns the new state and output value.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "(a -\u003e s -\u003e (b, s)) -\u003e s -\u003e Event r a -\u003e Reactive r (Event r b)",
        "fct-source": "src/FRP-Sodium-Context.html#collectE",
        "fct-type": "function",
        "title": "collectE"
      },
      "index": {
        "description": "Transform an event with generalized state loop mealy machine The function is passed the input and the old state and returns the new state and output value",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "collectE",
        "normalized": "(a-\u003eb-\u003e(c,b))-\u003eb-\u003eEvent d a-\u003eReactive d(Event d c)",
        "package": "sodium",
        "partial": "",
        "signature": "(a-\u003es-\u003e(b,s))-\u003es-\u003eEvent r a-\u003eReactive r(Event r b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the specified \u003ccode\u003e\u003ca\u003eReactive\u003c/a\u003e\u003c/code\u003e action inside an event.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Event r (Reactive r a) -\u003e Event r a",
        "fct-source": "src/FRP-Sodium-Context.html#execute",
        "fct-type": "method",
        "title": "execute"
      },
      "index": {
        "description": "Execute the specified Reactive action inside an event",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "execute",
        "normalized": "Event a(Reactive a b)-\u003eEvent a b",
        "package": "sodium",
        "partial": "",
        "signature": "Event r(Reactive r a)-\u003eEvent r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:executeAsyncIO",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the specified IO operation asynchronously on a separate thread, and\n signal the output event in a new transaction upon its completion.\n\u003c/p\u003e\u003cp\u003eCaveat: Where \u003ccode\u003e\u003ca\u003eswitch\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eswitchE\u003c/a\u003e\u003c/code\u003e is used, when some reactive logic has been\n switched away, we rely on garbage collection to actually disconnect this logic\n from any input it may be listening to. With normal Sodium code, everything is\n pure, so before garbage collection happens, the worst we will get is some wasted\n CPU cycles. If you are using 'executeAsyncIO'/'executeSyncIO' inside a \u003ccode\u003e\u003ca\u003eswitch\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eswitchE\u003c/a\u003e\u003c/code\u003e, however, it is possible that logic that has been switched away\n hasn't been garbage collected yet. This logic \u003cem\u003ecould\u003c/em\u003e still run, and if it has\n observable effects, you could see it running after it is supposed to have been\n switched out. One way to avoid this is to pipe the source event for IO out of the\n switch, run the 'executeAsyncIO'/'executeSyncIO' outside the switch, and pipe its\n output back into the switch contents.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Event r (IO a) -\u003e Event r a",
        "fct-source": "src/FRP-Sodium-Context.html#executeAsyncIO",
        "fct-type": "method",
        "title": "executeAsyncIO"
      },
      "index": {
        "description": "Execute the specified IO operation asynchronously on separate thread and signal the output event in new transaction upon its completion Caveat Where switch or switchE is used when some reactive logic has been switched away we rely on garbage collection to actually disconnect this logic from any input it may be listening to With normal Sodium code everything is pure so before garbage collection happens the worst we will get is some wasted CPU cycles If you are using executeAsyncIO executeSyncIO inside switch or switchE however it is possible that logic that has been switched away hasn been garbage collected yet This logic could still run and if it has observable effects you could see it running after it is supposed to have been switched out One way to avoid this is to pipe the source event for IO out of the switch run the executeAsyncIO executeSyncIO outside the switch and pipe its output back into the switch contents",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "executeAsyncIO",
        "normalized": "Event a(IO b)-\u003eEvent a b",
        "package": "sodium",
        "partial": "Async IO",
        "signature": "Event r(IO a)-\u003eEvent r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:executeSyncIO",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the specified IO operation synchronously and fire the output event\n in the same transaction.\n\u003c/p\u003e\u003cp\u003eCaveat: See \u003ccode\u003e\u003ca\u003eexecuteAsyncIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Event r (IO a) -\u003e Event r a",
        "fct-source": "src/FRP-Sodium-Context.html#executeSyncIO",
        "fct-type": "method",
        "title": "executeSyncIO"
      },
      "index": {
        "description": "Execute the specified IO operation synchronously and fire the output event in the same transaction Caveat See executeAsyncIO",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "executeSyncIO",
        "normalized": "Event a(IO b)-\u003eEvent a b",
        "package": "sodium",
        "partial": "Sync IO",
        "signature": "Event r(IO a)-\u003eEvent r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:filterE",
      "description": {
        "fct-descr": "\u003cp\u003eOnly keep event occurrences for which the predicate returns true.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "(a -\u003e Bool) -\u003e Event r a -\u003e Event r a",
        "fct-source": "src/FRP-Sodium-Context.html#filterE",
        "fct-type": "function",
        "title": "filterE"
      },
      "index": {
        "description": "Only keep event occurrences for which the predicate returns true",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "filterE",
        "normalized": "(a-\u003eBool)-\u003eEvent b a-\u003eEvent b a",
        "package": "sodium",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eEvent r a-\u003eEvent r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:filterJust",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap Just values, and discard event occurrences with Nothing values.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Event r (Maybe a) -\u003e Event r a",
        "fct-source": "src/FRP-Sodium-Context.html#filterJust",
        "fct-type": "method",
        "title": "filterJust"
      },
      "index": {
        "description": "Unwrap Just values and discard event occurrences with Nothing values",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "filterJust",
        "normalized": "Event a(Maybe b)-\u003eEvent a b",
        "package": "sodium",
        "partial": "Just",
        "signature": "Event r(Maybe a)-\u003eEvent r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:gate",
      "description": {
        "fct-descr": "\u003cp\u003eLet event occurrences through only when the behavior's value is True.\n Note that the behavior's value is as it was at the start of the transaction,\n that is, no state changes from the current transaction are taken into account.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Event r a -\u003e Behavior r Bool -\u003e Event r a",
        "fct-source": "src/FRP-Sodium-Context.html#gate",
        "fct-type": "function",
        "title": "gate"
      },
      "index": {
        "description": "Let event occurrences through only when the behavior value is True Note that the behavior value is as it was at the start of the transaction that is no state changes from the current transaction are taken into account",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "gate",
        "normalized": "Event a b-\u003eBehavior a Bool-\u003eEvent a b",
        "package": "sodium",
        "partial": "",
        "signature": "Event r a-\u003eBehavior r Bool-\u003eEvent r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:hold",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a behavior with the specified initial value, that gets updated\n by the values coming through the event. The 'current value' of the behavior\n is notionally the value as it was 'at the start of the transaction'.\n That is, state updates caused by event firings get processed at the end of\n the transaction.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "a -\u003e Event r a -\u003e Reactive r (Behavior r a)",
        "fct-source": "src/FRP-Sodium-Context.html#hold",
        "fct-type": "method",
        "title": "hold"
      },
      "index": {
        "description": "Create behavior with the specified initial value that gets updated by the values coming through the event The current value of the behavior is notionally the value as it was at the start of the transaction That is state updates caused by event firings get processed at the end of the transaction",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "hold",
        "normalized": "a-\u003eEvent b a-\u003eReactive b(Behavior b a)",
        "package": "sodium",
        "partial": "",
        "signature": "a-\u003eEvent r a-\u003eReactive r(Behavior r a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:listen",
      "description": {
        "fct-descr": "\u003cp\u003eListen for firings of this event. The returned \u003ccode\u003eIO ()\u003c/code\u003e is an IO action\n that unregisters the listener. This is the observer pattern.\n\u003c/p\u003e\u003cp\u003eTo listen to a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e use \u003ccode\u003elisten (value b) handler\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Event r a -\u003e (a -\u003e IO ()) -\u003e Reactive r (IO ())",
        "fct-source": "src/FRP-Sodium-Context.html#listen",
        "fct-type": "method",
        "title": "listen"
      },
      "index": {
        "description": "Listen for firings of this event The returned IO is an IO action that unregisters the listener This is the observer pattern To listen to Behavior use listen value handler",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "listen",
        "normalized": "Event a b-\u003e(b-\u003eIO())-\u003eReactive a(IO())",
        "package": "sodium",
        "partial": "",
        "signature": "Event r a-\u003e(a-\u003eIO())-\u003eReactive r(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two streams of events of the same type.\n\u003c/p\u003e\u003cp\u003eIn the case where two event occurrences are simultaneous (i.e. both\n within the same transaction), both will be delivered in the same\n transaction. If the event firings are ordered for some reason, then\n their ordering is retained. In many common cases the ordering will\n be undefined.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Event r a -\u003e Event r a -\u003e Event r a",
        "fct-source": "src/FRP-Sodium-Context.html#merge",
        "fct-type": "method",
        "title": "merge"
      },
      "index": {
        "description": "Merge two streams of events of the same type In the case where two event occurrences are simultaneous i.e both within the same transaction both will be delivered in the same transaction If the event firings are ordered for some reason then their ordering is retained In many common cases the ordering will be undefined",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "merge",
        "normalized": "Event a b-\u003eEvent a b-\u003eEvent a b",
        "package": "sodium",
        "partial": "",
        "signature": "Event r a-\u003eEvent r a-\u003eEvent r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:mergeWith",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two streams of events of the same type, combining simultaneous\n event occurrences.\n\u003c/p\u003e\u003cp\u003eIn the case where multiple event occurrences are simultaneous (i.e. all\n within the same transaction), they are combined using the same logic as\n \u003ccode\u003e\u003ca\u003ecoalesce\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Event r a -\u003e Event r a -\u003e Event r a",
        "fct-source": "src/FRP-Sodium-Context.html#mergeWith",
        "fct-type": "function",
        "title": "mergeWith"
      },
      "index": {
        "description": "Merge two streams of events of the same type combining simultaneous event occurrences In the case where multiple event occurrences are simultaneous i.e all within the same transaction they are combined using the same logic as coalesce",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "mergeWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eEvent b a-\u003eEvent b a-\u003eEvent b a",
        "package": "sodium",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eEvent r a-\u003eEvent r a-\u003eEvent r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:never",
      "description": {
        "fct-descr": "\u003cp\u003eAn event that never fires.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Event r a",
        "fct-source": "src/FRP-Sodium-Context.html#never",
        "fct-type": "method",
        "title": "never"
      },
      "index": {
        "description": "An event that never fires",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "never",
        "normalized": "",
        "package": "sodium",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:newBehavior",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e along with an action to push changes into it.\n American spelling.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "a-\u003e Reactive r (Behavior r a, a -\u003e Reactive r ())",
        "fct-type": "function",
        "title": "newBehavior"
      },
      "index": {
        "description": "Create new Behavior along with an action to push changes into it American spelling",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "newBehavior",
        "normalized": "a-\u003eReactive b(Behavior b a,a-\u003eReactive b())",
        "package": "sodium",
        "partial": "Behavior",
        "signature": "a-\u003eReactive r(Behavior r a,a-\u003eReactive r())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:newBehaviour",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e along with an action to push changes into it.\n British spelling.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "a-\u003e Reactive r (Behavior r a, a -\u003e Reactive r ())",
        "fct-type": "function",
        "title": "newBehaviour"
      },
      "index": {
        "description": "Create new Behavior along with an action to push changes into it British spelling",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "newBehaviour",
        "normalized": "a-\u003eReactive b(Behavior b a,a-\u003eReactive b())",
        "package": "sodium",
        "partial": "Behaviour",
        "signature": "a-\u003eReactive r(Behavior r a,a-\u003eReactive r())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:newEvent",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an event, and a push action for pushing a value into the event.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Reactive r (Event r a, a -\u003e Reactive r ())",
        "fct-source": "src/FRP-Sodium-Context.html#newEvent",
        "fct-type": "method",
        "title": "newEvent"
      },
      "index": {
        "description": "Returns an event and push action for pushing value into the event",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "newEvent",
        "normalized": "Reactive a(Event a b,b-\u003eReactive a())",
        "package": "sodium",
        "partial": "Event",
        "signature": "Reactive r(Event r a,a-\u003eReactive r())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:once",
      "description": {
        "fct-descr": "\u003cp\u003eThrow away all event occurrences except for the first one.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Event r a -\u003e Event r a",
        "fct-source": "src/FRP-Sodium-Context.html#once",
        "fct-type": "method",
        "title": "once"
      },
      "index": {
        "description": "Throw away all event occurrences except for the first one",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "once",
        "normalized": "Event a b-\u003eEvent a b",
        "package": "sodium",
        "partial": "",
        "signature": "Event r a-\u003eEvent r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:sample",
      "description": {
        "fct-descr": "\u003cp\u003eObtain the current value of a behavior.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Behavior r a -\u003e Reactive r a",
        "fct-source": "src/FRP-Sodium-Context.html#sample",
        "fct-type": "method",
        "title": "sample"
      },
      "index": {
        "description": "Obtain the current value of behavior",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "sample",
        "normalized": "Behavior a b-\u003eReactive a b",
        "package": "sodium",
        "partial": "",
        "signature": "Behavior r a-\u003eReactive r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:snapshot",
      "description": {
        "fct-descr": "\u003cp\u003eSample the behavior at the time of the event firing. Note that the 'current value'\n of the behavior that's sampled is the value as at the start of the transaction\n before any state changes of the current transaction are applied through \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Event r a -\u003e Behavior r b -\u003e Event r c",
        "fct-source": "src/FRP-Sodium-Context.html#snapshot",
        "fct-type": "method",
        "title": "snapshot"
      },
      "index": {
        "description": "Sample the behavior at the time of the event firing Note that the current value of the behavior that sampled is the value as at the start of the transaction before any state changes of the current transaction are applied through hold",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "snapshot",
        "normalized": "(a-\u003eb-\u003ec)-\u003eEvent d a-\u003eBehavior d b-\u003eEvent d c",
        "package": "sodium",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003eEvent r a-\u003eBehavior r b-\u003eEvent r c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eTake each list item and put it into a new transaction of its own.\n\u003c/p\u003e\u003cp\u003eAn example use case of this might be a situation where we are splitting\n a block of input data into frames. We obviously want each frame to have\n its own transaction so that state is updated separately each frame.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Event r [a] -\u003e Event r a",
        "fct-source": "src/FRP-Sodium-Context.html#split",
        "fct-type": "method",
        "title": "split"
      },
      "index": {
        "description": "Take each list item and put it into new transaction of its own An example use case of this might be situation where we are splitting block of input data into frames We obviously want each frame to have its own transaction so that state is updated separately each frame",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "split",
        "normalized": "Event a[b]-\u003eEvent a b",
        "package": "sodium",
        "partial": "",
        "signature": "Event r[a]-\u003eEvent r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:switch",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a behavior inside another behavior to give a time-varying behavior implementation.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Behavior r (Behavior r a) -\u003e Reactive r (Behavior r a)",
        "fct-source": "src/FRP-Sodium-Context.html#switch",
        "fct-type": "method",
        "title": "switch"
      },
      "index": {
        "description": "Unwrap behavior inside another behavior to give time-varying behavior implementation",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "switch",
        "normalized": "Behavior a(Behavior a b)-\u003eReactive a(Behavior a b)",
        "package": "sodium",
        "partial": "",
        "signature": "Behavior r(Behavior r a)-\u003eReactive r(Behavior r a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:switchE",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap an event inside a behavior to give a time-varying event implementation.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Behavior r (Event r a) -\u003e Event r a",
        "fct-source": "src/FRP-Sodium-Context.html#switchE",
        "fct-type": "method",
        "title": "switchE"
      },
      "index": {
        "description": "Unwrap an event inside behavior to give time-varying event implementation",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "switchE",
        "normalized": "Behavior a(Event a b)-\u003eEvent a b",
        "package": "sodium",
        "partial": "",
        "signature": "Behavior r(Event r a)-\u003eEvent r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:sync",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the specified \u003ccode\u003e\u003ca\u003eReactive\u003c/a\u003e\u003c/code\u003e within a new transaction, blocking the caller\n until all resulting processing is complete and all callbacks have been called.\n This operation is thread-safe, so it may be called from any thread.\n\u003c/p\u003e\u003cp\u003eState changes to \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003e values occur after processing of the transaction is complete.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Reactive r a -\u003e IO a",
        "fct-source": "src/FRP-Sodium-Context.html#sync",
        "fct-type": "method",
        "title": "sync"
      },
      "index": {
        "description": "Execute the specified Reactive within new transaction blocking the caller until all resulting processing is complete and all callbacks have been called This operation is thread-safe so it may be called from any thread State changes to hold values occur after processing of the transaction is complete",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "sync",
        "normalized": "Reactive a b-\u003eIO b",
        "package": "sodium",
        "partial": "",
        "signature": "Reactive r a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:updates",
      "description": {
        "fct-descr": "\u003cp\u003eAn event that gives the updates for the behavior. If the behavior was created\n with \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003e, then \u003ccode\u003e\u003ca\u003eupdates\u003c/a\u003e\u003c/code\u003e gives you an event equivalent to the one that was held.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Behavior r a -\u003e Event r a",
        "fct-source": "src/FRP-Sodium-Context.html#updates",
        "fct-type": "method",
        "title": "updates"
      },
      "index": {
        "description": "An event that gives the updates for the behavior If the behavior was created with hold then updates gives you an event equivalent to the one that was held",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "updates",
        "normalized": "Behavior a b-\u003eEvent a b",
        "package": "sodium",
        "partial": "",
        "signature": "Behavior r a-\u003eEvent r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003eAn event that is guaranteed to fire once when you listen to it, giving\n the current value of the behavior, and thereafter behaves like \u003ccode\u003echanges\u003c/code\u003e,\n firing for each update to the behavior's value.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Context",
        "fct-package": "sodium",
        "fct-signature": "Behavior r a -\u003e Event r a",
        "fct-source": "src/FRP-Sodium-Context.html#value",
        "fct-type": "method",
        "title": "value"
      },
      "index": {
        "description": "An event that is guaranteed to fire once when you listen to it giving the current value of the behavior and thereafter behaves like changes firing for each update to the behavior value",
        "hierarchy": "FRP Sodium Context",
        "module": "FRP.Sodium.Context",
        "name": "value",
        "normalized": "Behavior a b-\u003eEvent a b",
        "package": "sodium",
        "partial": "",
        "signature": "Behavior r a-\u003eEvent r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-IO.html#",
      "description": {
        "fct-module": "FRP.Sodium.IO",
        "fct-package": "sodium",
        "fct-signature": "module",
        "fct-source": "src/FRP-Sodium-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium IO",
        "module": "FRP.Sodium.IO",
        "name": "IO",
        "normalized": "",
        "package": "sodium",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-IO.html#v:executeAsyncIO",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the specified IO operation asynchronously on a separate thread, and\n signal the output event in a new transaction upon its completion.\n\u003c/p\u003e\u003cp\u003eCaveat: Where \u003ccode\u003e\u003ca\u003eswitch\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eswitchE\u003c/a\u003e\u003c/code\u003e is used, when some reactive logic has been\n switched away, we rely on garbage collection to actually disconnect this logic\n from any input it may be listening to. With normal Sodium code, everything is\n pure, so before garbage collection happens, the worst we will get is some wasted\n CPU cycles. If you are using 'executeAsyncIO'/'executeSyncIO' inside a \u003ccode\u003e\u003ca\u003eswitch\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eswitchE\u003c/a\u003e\u003c/code\u003e, however, it is possible that logic that has been switched away\n hasn't been garbage collected yet. This logic \u003cem\u003ecould\u003c/em\u003e still run, and if it has\n observable effects, you could see it running after it is supposed to have been\n switched out. One way to avoid this is to pipe the source event for IO out of the\n switch, run the 'executeAsyncIO'/'executeSyncIO' outside the switch, and pipe its\n output back into the switch contents.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.IO",
        "fct-package": "sodium",
        "fct-signature": "Event Plain (IO a) -\u003e Event Plain a",
        "fct-source": "src/FRP-Sodium-IO.html#executeAsyncIO",
        "fct-type": "function",
        "title": "executeAsyncIO"
      },
      "index": {
        "description": "Execute the specified IO operation asynchronously on separate thread and signal the output event in new transaction upon its completion Caveat Where switch or switchE is used when some reactive logic has been switched away we rely on garbage collection to actually disconnect this logic from any input it may be listening to With normal Sodium code everything is pure so before garbage collection happens the worst we will get is some wasted CPU cycles If you are using executeAsyncIO executeSyncIO inside switch or switchE however it is possible that logic that has been switched away hasn been garbage collected yet This logic could still run and if it has observable effects you could see it running after it is supposed to have been switched out One way to avoid this is to pipe the source event for IO out of the switch run the executeAsyncIO executeSyncIO outside the switch and pipe its output back into the switch contents",
        "hierarchy": "FRP Sodium IO",
        "module": "FRP.Sodium.IO",
        "name": "executeAsyncIO",
        "normalized": "Event Plain(IO a)-\u003eEvent Plain a",
        "package": "sodium",
        "partial": "Async IO",
        "signature": "Event Plain(IO a)-\u003eEvent Plain a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-IO.html#v:executeSyncIO",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the specified IO operation synchronously and fire the output event\n in the same transaction.\n\u003c/p\u003e\u003cp\u003eCaveat: See \u003ccode\u003e\u003ca\u003eexecuteAsyncIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.IO",
        "fct-package": "sodium",
        "fct-signature": "Event Plain (IO a) -\u003e Event Plain a",
        "fct-source": "src/FRP-Sodium-IO.html#executeSyncIO",
        "fct-type": "function",
        "title": "executeSyncIO"
      },
      "index": {
        "description": "Execute the specified IO operation synchronously and fire the output event in the same transaction Caveat See executeAsyncIO",
        "hierarchy": "FRP Sodium IO",
        "module": "FRP.Sodium.IO",
        "name": "executeSyncIO",
        "normalized": "Event Plain(IO a)-\u003eEvent Plain a",
        "package": "sodium",
        "partial": "Sync IO",
        "signature": "Event Plain(IO a)-\u003eEvent Plain a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#",
      "description": {
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "module",
        "fct-source": "src/FRP-Sodium-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "sodium",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#t:Listen",
      "description": {
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "data",
        "fct-source": "src/FRP-Sodium-Plain.html#Listen",
        "fct-type": "data",
        "title": "Listen"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "Listen",
        "normalized": "",
        "package": "sodium",
        "partial": "Listen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#t:Node",
      "description": {
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "data",
        "fct-source": "src/FRP-Sodium-Plain.html#Node",
        "fct-type": "data",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "Node",
        "normalized": "",
        "package": "sodium",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#t:Plain",
      "description": {
        "fct-descr": "\u003cp\u003ePhantom type for use with \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "data",
        "fct-source": "src/FRP-Sodium-Plain.html#Plain",
        "fct-type": "data",
        "title": "Plain"
      },
      "index": {
        "description": "Phantom type for use with Context type class",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "Plain",
        "normalized": "",
        "package": "sodium",
        "partial": "Plain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#t:Sample",
      "description": {
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "data",
        "fct-source": "src/FRP-Sodium-Plain.html#Sample",
        "fct-type": "data",
        "title": "Sample"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "Sample",
        "normalized": "",
        "package": "sodium",
        "partial": "Sample",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#t:Unlistener",
      "description": {
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "data",
        "fct-source": "src/FRP-Sodium-Plain.html#Unlistener",
        "fct-type": "data",
        "title": "Unlistener"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "Unlistener",
        "normalized": "",
        "package": "sodium",
        "partial": "Unlistener",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:Listen",
      "description": {
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "Listen",
        "fct-source": "src/FRP-Sodium-Plain.html#Listen",
        "fct-type": "function",
        "title": "Listen"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "Listen",
        "normalized": "",
        "package": "sodium",
        "partial": "Listen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:Sample",
      "description": {
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "Sample",
        "fct-source": "src/FRP-Sodium-Plain.html#Sample",
        "fct-type": "function",
        "title": "Sample"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "Sample",
        "normalized": "",
        "package": "sodium",
        "partial": "Sample",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:addCleanup_Listen",
      "description": {
        "fct-descr": "\u003cp\u003eCause the things listened to with \u003ccode\u003e\u003ca\u003elater\u003c/a\u003e\u003c/code\u003e to be unlistened when the\n specified listener is not referenced any more.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "Unlistener -\u003e Listen a -\u003e Reactive (Listen a)",
        "fct-source": "src/FRP-Sodium-Plain.html#addCleanup_Listen",
        "fct-type": "function",
        "title": "addCleanup_Listen"
      },
      "index": {
        "description": "Cause the things listened to with later to be unlistened when the specified listener is not referenced any more",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "addCleanup_Listen",
        "normalized": "Unlistener-\u003eListen a-\u003eReactive(Listen a)",
        "package": "sodium",
        "partial": "Cleanup Listen",
        "signature": "Unlistener-\u003eListen a-\u003eReactive(Listen a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:addCleanup_Sample",
      "description": {
        "fct-descr": "\u003cp\u003eCause the things listened to with \u003ccode\u003e\u003ca\u003elater\u003c/a\u003e\u003c/code\u003e to be unlistened when the\n specified sample is not referenced any more.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "Unlistener -\u003e Sample a -\u003e IO (Sample a)",
        "fct-source": "src/FRP-Sodium-Plain.html#addCleanup_Sample",
        "fct-type": "function",
        "title": "addCleanup_Sample"
      },
      "index": {
        "description": "Cause the things listened to with later to be unlistened when the specified sample is not referenced any more",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "addCleanup_Sample",
        "normalized": "Unlistener-\u003eSample a-\u003eIO(Sample a)",
        "package": "sodium",
        "partial": "Cleanup Sample",
        "signature": "Unlistener-\u003eSample a-\u003eIO(Sample a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:dep",
      "description": {
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "a -\u003e Dep",
        "fct-source": "src/FRP-Sodium-Plain.html#dep",
        "fct-type": "function",
        "title": "dep"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "dep",
        "normalized": "a-\u003eDep",
        "package": "sodium",
        "partial": "",
        "signature": "a-\u003eDep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:finalizeEvent",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a finalizer to an event.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "Event a -\u003e IO () -\u003e Event a",
        "fct-source": "src/FRP-Sodium-Plain.html#finalizeEvent",
        "fct-type": "function",
        "title": "finalizeEvent"
      },
      "index": {
        "description": "Add finalizer to an event",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "finalizeEvent",
        "normalized": "Event a-\u003eIO()-\u003eEvent a",
        "package": "sodium",
        "partial": "Event",
        "signature": "Event a-\u003eIO()-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:finalizeListen",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a finalizer to a listener.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "Listen a -\u003e IO () -\u003e IO (Listen a)",
        "fct-source": "src/FRP-Sodium-Plain.html#finalizeListen",
        "fct-type": "function",
        "title": "finalizeListen"
      },
      "index": {
        "description": "Add finalizer to listener",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "finalizeListen",
        "normalized": "Listen a-\u003eIO()-\u003eIO(Listen a)",
        "package": "sodium",
        "partial": "Listen",
        "signature": "Listen a-\u003eIO()-\u003eIO(Listen a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:getListen",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap an event's listener machinery.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "Event a -\u003e Reactive (Listen a)",
        "fct-source": "src/FRP-Sodium-Plain.html#getListen",
        "fct-type": "function",
        "title": "getListen"
      },
      "index": {
        "description": "Unwrap an event listener machinery",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "getListen",
        "normalized": "Event a-\u003eReactive(Listen a)",
        "package": "sodium",
        "partial": "Listen",
        "signature": "Event a-\u003eReactive(Listen a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:ioReactive",
      "description": {
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "IO a -\u003e Reactive a",
        "fct-source": "src/FRP-Sodium-Plain.html#ioReactive",
        "fct-type": "function",
        "title": "ioReactive"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "ioReactive",
        "normalized": "IO a-\u003eReactive a",
        "package": "sodium",
        "partial": "Reactive",
        "signature": "IO a-\u003eReactive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:later",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a listen later so we can tolerate lazy loops.\n Returns an \u003ccode\u003e\u003ca\u003eUnlistener\u003c/a\u003e\u003c/code\u003e that can be attached to an event with \u003ccode\u003e\u003ca\u003eaddCleanup_Listen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "Reactive (IO ()) -\u003e Reactive Unlistener",
        "fct-source": "src/FRP-Sodium-Plain.html#later",
        "fct-type": "function",
        "title": "later"
      },
      "index": {
        "description": "Perform listen later so we can tolerate lazy loops Returns an Unlistener that can be attached to an event with addCleanup Listen",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "later",
        "normalized": "Reactive(IO())-\u003eReactive Unlistener",
        "package": "sodium",
        "partial": "",
        "signature": "Reactive(IO())-\u003eReactive Unlistener"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:linkedListen",
      "description": {
        "fct-descr": "\u003cp\u003eListen for firings of this event. The returned \u003ccode\u003eIO ()\u003c/code\u003e is an IO action\n that unregisters the listener. This is the observer pattern.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "Event a -\u003e Maybe (MVar Node) -\u003e Bool -\u003e (a -\u003e Reactive ()) -\u003e Reactive (IO ())",
        "fct-source": "src/FRP-Sodium-Plain.html#linkedListen",
        "fct-type": "function",
        "title": "linkedListen"
      },
      "index": {
        "description": "Listen for firings of this event The returned IO is an IO action that unregisters the listener This is the observer pattern",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "linkedListen",
        "normalized": "Event a-\u003eMaybe(MVar Node)-\u003eBool-\u003e(a-\u003eReactive())-\u003eReactive(IO())",
        "package": "sodium",
        "partial": "Listen",
        "signature": "Event a-\u003eMaybe(MVar Node)-\u003eBool-\u003e(a-\u003eReactive())-\u003eReactive(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:listenTrans",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e that allows you to initiate more activity in the current\n transaction. Useful for implementing new primitives.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "Event a -\u003e (a -\u003e Reactive ()) -\u003e Reactive (IO ())",
        "fct-source": "src/FRP-Sodium-Plain.html#listenTrans",
        "fct-type": "function",
        "title": "listenTrans"
      },
      "index": {
        "description": "Variant of listen that allows you to initiate more activity in the current transaction Useful for implementing new primitives",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "listenTrans",
        "normalized": "Event a-\u003e(a-\u003eReactive())-\u003eReactive(IO())",
        "package": "sodium",
        "partial": "Trans",
        "signature": "Event a-\u003e(a-\u003eReactive())-\u003eReactive(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:newEvent",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an event, and a push action for pushing a value into the event.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "Reactive (Event a, a -\u003e Reactive ())",
        "fct-source": "src/FRP-Sodium-Plain.html#newEvent",
        "fct-type": "function",
        "title": "newEvent"
      },
      "index": {
        "description": "Returns an event and push action for pushing value into the event",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "newEvent",
        "normalized": "Reactive(Event a,a-\u003eReactive())",
        "package": "sodium",
        "partial": "Event",
        "signature": "Reactive(Event a,a-\u003eReactive())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:newEventImpl",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eListen\u003c/a\u003e\u003c/code\u003e for registering listeners, and a push action for pushing\n a value into the event.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "forall p a.  IO (Listen a, a -\u003e Reactive (), MVar Node)",
        "fct-source": "src/FRP-Sodium-Plain.html#newEventImpl",
        "fct-type": "function",
        "title": "newEventImpl"
      },
      "index": {
        "description": "Returns Listen for registering listeners and push action for pushing value into the event",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "newEventImpl",
        "normalized": "a b c IO(Listen d,d-\u003eReactive(),MVar Node)",
        "package": "sodium",
        "partial": "Event Impl",
        "signature": "forall p a. IO(Listen a,a-\u003eReactive(),MVar Node)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:newEventLinked",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an event, and a push action for pushing a value into the event.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "Dep -\u003e IO (Event a, a -\u003e Reactive (), MVar Node)",
        "fct-source": "src/FRP-Sodium-Plain.html#newEventLinked",
        "fct-type": "function",
        "title": "newEventLinked"
      },
      "index": {
        "description": "Returns an event and push action for pushing value into the event",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "newEventLinked",
        "normalized": "Dep-\u003eIO(Event a,a-\u003eReactive(),MVar Node)",
        "package": "sodium",
        "partial": "Event Linked",
        "signature": "Dep-\u003eIO(Event a,a-\u003eReactive(),MVar Node)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:runListen_",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "Maybe (MVar Node) -\u003e Bool -\u003e (a -\u003e Reactive ()) -\u003e Reactive (IO ())",
        "fct-source": "src/FRP-Sodium-Plain.html#Listen",
        "fct-type": "function",
        "title": "runListen_"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "runListen_",
        "normalized": "Maybe(MVar Node)-\u003eBool-\u003e(a-\u003eReactive())-\u003eReactive(IO())",
        "package": "sodium",
        "partial": "Listen",
        "signature": "Maybe(MVar Node)-\u003eBool-\u003e(a-\u003eReactive())-\u003eReactive(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:sDep",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "Dep",
        "fct-source": "src/FRP-Sodium-Plain.html#Sample",
        "fct-type": "function",
        "title": "sDep"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "sDep",
        "normalized": "",
        "package": "sodium",
        "partial": "Dep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:scheduleLast",
      "description": {
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "Reactive () -\u003e Reactive ()",
        "fct-source": "src/FRP-Sodium-Plain.html#scheduleLast",
        "fct-type": "function",
        "title": "scheduleLast"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "scheduleLast",
        "normalized": "Reactive()-\u003eReactive()",
        "package": "sodium",
        "partial": "Last",
        "signature": "Reactive()-\u003eReactive()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:schedulePrioritized",
      "description": {
        "fct-descr": "\u003cp\u003eQueue the specified atomic to run at the end of the priority 2 queue\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "Maybe (MVar Node) -\u003e Reactive () -\u003e Reactive ()",
        "fct-source": "src/FRP-Sodium-Plain.html#schedulePrioritized",
        "fct-type": "function",
        "title": "schedulePrioritized"
      },
      "index": {
        "description": "Queue the specified atomic to run at the end of the priority queue",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "schedulePrioritized",
        "normalized": "Maybe(MVar Node)-\u003eReactive()-\u003eReactive()",
        "package": "sodium",
        "partial": "Prioritized",
        "signature": "Maybe(MVar Node)-\u003eReactive()-\u003eReactive()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:unSample",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "IO a",
        "fct-source": "src/FRP-Sodium-Plain.html#Sample",
        "fct-type": "function",
        "title": "unSample"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "unSample",
        "normalized": "",
        "package": "sodium",
        "partial": "Sample",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:unsafeNewIORef",
      "description": {
        "fct-module": "FRP.Sodium.Internal",
        "fct-package": "sodium",
        "fct-signature": "a -\u003e b -\u003e IORef a",
        "fct-source": "src/FRP-Sodium-Plain.html#unsafeNewIORef",
        "fct-type": "function",
        "title": "unsafeNewIORef"
      },
      "index": {
        "description": "",
        "hierarchy": "FRP Sodium Internal",
        "module": "FRP.Sodium.Internal",
        "name": "unsafeNewIORef",
        "normalized": "a-\u003eb-\u003eIORef a",
        "package": "sodium",
        "partial": "New IORef",
        "signature": "a-\u003eb-\u003eIORef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSodium Reactive Programming (FRP) system.\n\u003c/p\u003e\u003cp\u003eSee the \u003cem\u003eexamples\u003c/em\u003e directory for test cases and examples.\n\u003c/p\u003e\u003cp\u003eSome functions are pure, and others need to run under the \u003ccode\u003e\u003ca\u003eReactive\u003c/a\u003e\u003c/code\u003e monad via\n \u003ccode\u003e\u003ca\u003esync\u003c/a\u003e\u003c/code\u003e. An \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e \u003cem\u003e(\u003c/em\u003e\u003ccode\u003e\u003ca\u003eReactive\u003c/a\u003e\u003c/code\u003e \u003cem\u003ea)\u003c/em\u003e can be flattened\n to an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e \u003cem\u003ea\u003c/em\u003e using the \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e primitive.\n\u003c/p\u003e\u003cp\u003eIn addition to the explicit functions in the language, note that you can use\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Functor on \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Applicative on \u003ccode\u003ebehaviour\u003c/code\u003e, e.g. \u003ccode\u003elet bsum = (+) \u003c$\u003e ba \u003c*\u003e bb\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Applicative \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e is used to give a constant \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e A Monoid instance on \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e where \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003enever\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Recursive do (using the DoRec language extension) to make state loops with the \u003ccode\u003erec\u003c/code\u003e keyword.\n\u003c/li\u003e\u003cli\u003e Data.Traversable.\u003ccode\u003e\u003ca\u003esequenceA\u003c/a\u003e\u003c/code\u003e is useful to convert \u003cem\u003e[Behavior a]\u003c/em\u003e into \u003cem\u003eBehavior [a]\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHere's an example of recursive do to write state-keeping loops. Note that\n all \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003es are delayed, so \u003ccode\u003e\u003ca\u003esnapshot\u003c/a\u003e\u003c/code\u003e will capture the \u003cem\u003eold\u003c/em\u003e value of the state \u003cem\u003es\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DoRec #-}\n -- | Accumulate state changes given in the input event.\n accum :: Context r =\u003e a -\u003e Event r (a -\u003e a) -\u003e Reactive r (Behavior r a)\n accum z efa = do\n     rec\n         s \u003c- hold z $ snapshot ($) efa s\n     return s\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "module",
        "fct-source": "src/FRP-Sodium.html",
        "fct-type": "module",
        "title": "Sodium"
      },
      "index": {
        "description": "Sodium Reactive Programming FRP system See the examples directory for test cases and examples Some functions are pure and others need to run under the Reactive monad via sync An Event Reactive can be flattened to an Event using the execute primitive In addition to the explicit functions in the language note that you can use Functor on Event and Behavior Applicative on behaviour e.g let bsum ba bb Applicative pure is used to give constant Behavior Monoid instance on Event where mempty never and mappend merge Recursive do using the DoRec language extension to make state loops with the rec keyword Data.Traversable sequenceA is useful to convert Behavior into Behavior Here an example of recursive do to write state-keeping loops Note that all hold are delayed so snapshot will capture the old value of the state LANGUAGE DoRec Accumulate state changes given in the input event accum Context Event Reactive Behavior accum efa do rec hold snapshot efa return",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "Sodium",
        "normalized": "",
        "package": "sodium",
        "partial": "Sodium",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#t:Behavior",
      "description": {
        "fct-descr": "\u003cp\u003eA time-varying value, American spelling.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "type",
        "fct-source": "src/FRP-Sodium-Plain.html#Behavior",
        "fct-type": "type",
        "title": "Behavior"
      },
      "index": {
        "description": "time-varying value American spelling",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "Behavior",
        "normalized": "",
        "package": "sodium",
        "partial": "Behavior",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#t:Behaviour",
      "description": {
        "fct-descr": "\u003cp\u003eA time-varying value, British spelling.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "type",
        "fct-source": "src/FRP-Sodium-Plain.html#Behaviour",
        "fct-type": "type",
        "title": "Behaviour"
      },
      "index": {
        "description": "time-varying value British spelling",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "Behaviour",
        "normalized": "",
        "package": "sodium",
        "partial": "Behaviour",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003eA stream of events. The individual firings of events are called 'event occurrences'.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "type",
        "fct-source": "src/FRP-Sodium-Plain.html#Event",
        "fct-type": "type",
        "title": "Event"
      },
      "index": {
        "description": "stream of events The individual firings of events are called event occurrences",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "Event",
        "normalized": "",
        "package": "sodium",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#t:Plain",
      "description": {
        "fct-descr": "\u003cp\u003ePhantom type for use with \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "data",
        "fct-source": "src/FRP-Sodium-Plain.html#Plain",
        "fct-type": "data",
        "title": "Plain"
      },
      "index": {
        "description": "Phantom type for use with Context type class",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "Plain",
        "normalized": "",
        "package": "sodium",
        "partial": "Plain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#t:Reactive",
      "description": {
        "fct-descr": "\u003cp\u003eA monad for transactional reactive operations. Execute it from \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003esync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "type",
        "fct-source": "src/FRP-Sodium-Plain.html#Reactive",
        "fct-type": "type",
        "title": "Reactive"
      },
      "index": {
        "description": "monad for transactional reactive operations Execute it from IO using sync",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "Reactive",
        "normalized": "",
        "package": "sodium",
        "partial": "Reactive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:accum",
      "description": {
        "fct-descr": "\u003cp\u003eAccumulate state changes given in the input event.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "a -\u003e Event (a -\u003e a) -\u003e Reactive (Behavior a)",
        "fct-source": "src/FRP-Sodium-Plain.html#accum",
        "fct-type": "function",
        "title": "accum"
      },
      "index": {
        "description": "Accumulate state changes given in the input event",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "accum",
        "normalized": "a-\u003eEvent(a-\u003ea)-\u003eReactive(Behavior a)",
        "package": "sodium",
        "partial": "",
        "signature": "a-\u003eEvent(a-\u003ea)-\u003eReactive(Behavior a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:changes",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: renamed to \u003ccode\u003e\u003ca\u003eupdates\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eAn event that gives the updates for the behavior. If the behavior was created\n with \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003e, then \u003ccode\u003e\u003ca\u003echanges\u003c/a\u003e\u003c/code\u003e gives you an event equivalent to the one that was held.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Behavior a -\u003e Event a",
        "fct-source": "src/FRP-Sodium-Plain.html#changes",
        "fct-type": "function",
        "title": "changes"
      },
      "index": {
        "description": "Deprecated renamed to updates An event that gives the updates for the behavior If the behavior was created with hold then changes gives you an event equivalent to the one that was held",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "changes",
        "normalized": "Behavior a-\u003eEvent a",
        "package": "sodium",
        "partial": "",
        "signature": "Behavior a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:coalesce",
      "description": {
        "fct-descr": "\u003cp\u003eIf there's more than one firing in a single transaction, combine them into\n one using the specified combining function.\n\u003c/p\u003e\u003cp\u003eIf the event firings are ordered, then the first will appear at the left\n input of the combining function. In most common cases it's best not to\n make any assumptions about the ordering, and the combining function would\n ideally be commutative.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Event a -\u003e Event a",
        "fct-source": "src/FRP-Sodium-Plain.html#coalesce",
        "fct-type": "function",
        "title": "coalesce"
      },
      "index": {
        "description": "If there more than one firing in single transaction combine them into one using the specified combining function If the event firings are ordered then the first will appear at the left input of the combining function In most common cases it best not to make any assumptions about the ordering and the combining function would ideally be commutative",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "coalesce",
        "normalized": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a",
        "package": "sodium",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:collect",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a behavior with a generalized state loop (a mealy machine). The function\n is passed the input and the old state and returns the new state and output value.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "(a -\u003e s -\u003e (b, s)) -\u003e s -\u003e Behavior a -\u003e Reactive (Behavior b)",
        "fct-source": "src/FRP-Sodium-Plain.html#collect",
        "fct-type": "function",
        "title": "collect"
      },
      "index": {
        "description": "Transform behavior with generalized state loop mealy machine The function is passed the input and the old state and returns the new state and output value",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "collect",
        "normalized": "(a-\u003eb-\u003e(c,b))-\u003eb-\u003eBehavior a-\u003eReactive(Behavior c)",
        "package": "sodium",
        "partial": "",
        "signature": "(a-\u003es-\u003e(b,s))-\u003es-\u003eBehavior a-\u003eReactive(Behavior b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:collectE",
      "description": {
        "fct-descr": "\u003cp\u003eTransform an event with a generalized state loop (a mealy machine). The function\n is passed the input and the old state and returns the new state and output value.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "(a -\u003e s -\u003e (b, s)) -\u003e s -\u003e Event a -\u003e Reactive (Event b)",
        "fct-source": "src/FRP-Sodium-Plain.html#collectE",
        "fct-type": "function",
        "title": "collectE"
      },
      "index": {
        "description": "Transform an event with generalized state loop mealy machine The function is passed the input and the old state and returns the new state and output value",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "collectE",
        "normalized": "(a-\u003eb-\u003e(c,b))-\u003eb-\u003eEvent a-\u003eReactive(Event c)",
        "package": "sodium",
        "partial": "",
        "signature": "(a-\u003es-\u003e(b,s))-\u003es-\u003eEvent a-\u003eReactive(Event b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:count",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: removing it in the pursuit of minimalism, replace with: accum 0 (const (1+) \u003ca\u003e$\u003c/a\u003e e)\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eCount event occurrences, giving a behavior that starts with 0 before the first occurrence.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Event a -\u003e Reactive (Behavior Int)",
        "fct-source": "src/FRP-Sodium-Plain.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "Deprecated removing it in the pursuit of minimalism replace with accum const Count event occurrences giving behavior that starts with before the first occurrence",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "count",
        "normalized": "Event a-\u003eReactive(Behavior Int)",
        "package": "sodium",
        "partial": "",
        "signature": "Event a-\u003eReactive(Behavior Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the specified \u003ccode\u003e\u003ca\u003eReactive\u003c/a\u003e\u003c/code\u003e action inside an event.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Event (Reactive a) -\u003e Event a",
        "fct-source": "src/FRP-Sodium-Plain.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Execute the specified Reactive action inside an event",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "execute",
        "normalized": "Event(Reactive a)-\u003eEvent a",
        "package": "sodium",
        "partial": "",
        "signature": "Event(Reactive a)-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:filterE",
      "description": {
        "fct-descr": "\u003cp\u003eOnly keep event occurrences for which the predicate is true.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "(a -\u003e Bool) -\u003e Event a -\u003e Event a",
        "fct-source": "src/FRP-Sodium-Plain.html#filterE",
        "fct-type": "function",
        "title": "filterE"
      },
      "index": {
        "description": "Only keep event occurrences for which the predicate is true",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "filterE",
        "normalized": "(a-\u003eBool)-\u003eEvent a-\u003eEvent a",
        "package": "sodium",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eEvent a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:filterJust",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap Just values, and discard event occurrences with Nothing values.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Event (Maybe a) -\u003e Event a",
        "fct-source": "src/FRP-Sodium-Plain.html#filterJust",
        "fct-type": "function",
        "title": "filterJust"
      },
      "index": {
        "description": "Unwrap Just values and discard event occurrences with Nothing values",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "filterJust",
        "normalized": "Event(Maybe a)-\u003eEvent a",
        "package": "sodium",
        "partial": "Just",
        "signature": "Event(Maybe a)-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:gate",
      "description": {
        "fct-descr": "\u003cp\u003eLet event occurrences through only when the behavior's value is True.\n Note that the behavior's value is as it was at the start of the transaction,\n that is, no state changes from the current transaction are taken into account.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Event a -\u003e Behavior Bool -\u003e Event a",
        "fct-source": "src/FRP-Sodium-Plain.html#gate",
        "fct-type": "function",
        "title": "gate"
      },
      "index": {
        "description": "Let event occurrences through only when the behavior value is True Note that the behavior value is as it was at the start of the transaction that is no state changes from the current transaction are taken into account",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "gate",
        "normalized": "Event a-\u003eBehavior Bool-\u003eEvent a",
        "package": "sodium",
        "partial": "",
        "signature": "Event a-\u003eBehavior Bool-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:hold",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a behavior with the specified initial value, that gets updated\n by the values coming through the event. The 'current value' of the behavior\n is notionally the value as it was 'at the start of the transaction'.\n That is, state updates caused by event firings get processed at the end of\n the transaction.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "a -\u003e Event a -\u003e Reactive (Behavior a)",
        "fct-source": "src/FRP-Sodium-Plain.html#hold",
        "fct-type": "function",
        "title": "hold"
      },
      "index": {
        "description": "Create behavior with the specified initial value that gets updated by the values coming through the event The current value of the behavior is notionally the value as it was at the start of the transaction That is state updates caused by event firings get processed at the end of the transaction",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "hold",
        "normalized": "a-\u003eEvent a-\u003eReactive(Behavior a)",
        "package": "sodium",
        "partial": "",
        "signature": "a-\u003eEvent a-\u003eReactive(Behavior a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:listen",
      "description": {
        "fct-descr": "\u003cp\u003eListen for firings of this event. The returned \u003ccode\u003eIO ()\u003c/code\u003e is an IO action\n that unregisters the listener. This is the observer pattern.\n\u003c/p\u003e\u003cp\u003eTo listen to a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e use \u003ccode\u003elisten (value b) handler\u003c/code\u003e or\n \u003ccode\u003elisten (updates b) handler\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNOTE: The callback is called with the transaction held, so you cannot\n use \u003ccode\u003e\u003ca\u003esync\u003c/a\u003e\u003c/code\u003e inside a listener. You can delegate to another thread and have\n that start the new transaction. If you want to do more processing in\n the same transction, then you can use \u003ccode\u003e\u003ca\u003elistenTrans\u003c/a\u003e\u003c/code\u003e\n but this is discouraged unless you really need to write a new primitive.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Event a -\u003e (a -\u003e IO ()) -\u003e Reactive (IO ())",
        "fct-source": "src/FRP-Sodium-Plain.html#listen",
        "fct-type": "function",
        "title": "listen"
      },
      "index": {
        "description": "Listen for firings of this event The returned IO is an IO action that unregisters the listener This is the observer pattern To listen to Behavior use listen value handler or listen updates handler NOTE The callback is called with the transaction held so you cannot use sync inside listener You can delegate to another thread and have that start the new transaction If you want to do more processing in the same transction then you can use listenTrans but this is discouraged unless you really need to write new primitive",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "listen",
        "normalized": "Event a-\u003e(a-\u003eIO())-\u003eReactive(IO())",
        "package": "sodium",
        "partial": "",
        "signature": "Event a-\u003e(a-\u003eIO())-\u003eReactive(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two streams of events of the same type.\n\u003c/p\u003e\u003cp\u003eIn the case where two event occurrences are simultaneous (i.e. both\n within the same transaction), both will be delivered in the same\n transaction. If the event firings are ordered for some reason, then\n their ordering is retained. In many common cases the ordering will\n be undefined.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Event a -\u003e Event a -\u003e Event a",
        "fct-source": "src/FRP-Sodium-Plain.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "Merge two streams of events of the same type In the case where two event occurrences are simultaneous i.e both within the same transaction both will be delivered in the same transaction If the event firings are ordered for some reason then their ordering is retained In many common cases the ordering will be undefined",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "merge",
        "normalized": "Event a-\u003eEvent a-\u003eEvent a",
        "package": "sodium",
        "partial": "",
        "signature": "Event a-\u003eEvent a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:mergeWith",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two streams of events of the same type, combining simultaneous\n event occurrences.\n\u003c/p\u003e\u003cp\u003eIn the case where multiple event occurrences are simultaneous (i.e. all\n within the same transaction), they are combined using the supplied\n function. The output event is guaranteed not to have more than one\n event occurrence per transaction.\n\u003c/p\u003e\u003cp\u003eThe combine function should be commutative, because simultaneous events\n should be considered to be order-agnostic.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Event a -\u003e Event a -\u003e Event a",
        "fct-source": "src/FRP-Sodium-Plain.html#mergeWith",
        "fct-type": "function",
        "title": "mergeWith"
      },
      "index": {
        "description": "Merge two streams of events of the same type combining simultaneous event occurrences In the case where multiple event occurrences are simultaneous i.e all within the same transaction they are combined using the supplied function The output event is guaranteed not to have more than one event occurrence per transaction The combine function should be commutative because simultaneous events should be considered to be order-agnostic",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "mergeWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a-\u003eEvent a",
        "package": "sodium",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:never",
      "description": {
        "fct-descr": "\u003cp\u003eAn event that never fires.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Event a",
        "fct-source": "src/FRP-Sodium-Plain.html#never",
        "fct-type": "function",
        "title": "never"
      },
      "index": {
        "description": "An event that never fires",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "never",
        "normalized": "",
        "package": "sodium",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:newBehavior",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e along with an action to push changes into it.\n American spelling.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "a-\u003e Reactive (Behavior a, a -\u003e Reactive ())",
        "fct-type": "function",
        "title": "newBehavior"
      },
      "index": {
        "description": "Create new Behavior along with an action to push changes into it American spelling",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "newBehavior",
        "normalized": "a-\u003eReactive(Behavior a,a-\u003eReactive())",
        "package": "sodium",
        "partial": "Behavior",
        "signature": "a-\u003eReactive(Behavior a,a-\u003eReactive())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:newBehaviour",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e along with an action to push changes into it.\n British spelling.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "a-\u003e Reactive (Behavior a, a -\u003e Reactive ())",
        "fct-type": "function",
        "title": "newBehaviour"
      },
      "index": {
        "description": "Create new Behavior along with an action to push changes into it British spelling",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "newBehaviour",
        "normalized": "a-\u003eReactive(Behavior a,a-\u003eReactive())",
        "package": "sodium",
        "partial": "Behaviour",
        "signature": "a-\u003eReactive(Behavior a,a-\u003eReactive())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:newEvent",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an event, and a push action for pushing a value into the event.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Reactive (Event a, a -\u003e Reactive ())",
        "fct-source": "src/FRP-Sodium-Plain.html#newEvent",
        "fct-type": "function",
        "title": "newEvent"
      },
      "index": {
        "description": "Returns an event and push action for pushing value into the event",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "newEvent",
        "normalized": "Reactive(Event a,a-\u003eReactive())",
        "package": "sodium",
        "partial": "Event",
        "signature": "Reactive(Event a,a-\u003eReactive())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:once",
      "description": {
        "fct-descr": "\u003cp\u003eThrow away all event occurrences except for the first one.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Event a -\u003e Event a",
        "fct-source": "src/FRP-Sodium-Plain.html#once",
        "fct-type": "function",
        "title": "once"
      },
      "index": {
        "description": "Throw away all event occurrences except for the first one",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "once",
        "normalized": "Event a-\u003eEvent a",
        "package": "sodium",
        "partial": "",
        "signature": "Event a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:sample",
      "description": {
        "fct-descr": "\u003cp\u003eObtain the current value of a behavior.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Behavior a -\u003e Reactive a",
        "fct-source": "src/FRP-Sodium-Plain.html#sample",
        "fct-type": "function",
        "title": "sample"
      },
      "index": {
        "description": "Obtain the current value of behavior",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "sample",
        "normalized": "Behavior a-\u003eReactive a",
        "package": "sodium",
        "partial": "",
        "signature": "Behavior a-\u003eReactive a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:snapshot",
      "description": {
        "fct-descr": "\u003cp\u003eSample the behavior at the time of the event firing. Note that the 'current value'\n of the behavior that's sampled is the value as at the start of the transaction\n before any state changes of the current transaction are applied through \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Event a -\u003e Behavior b -\u003e Event c",
        "fct-source": "src/FRP-Sodium-Plain.html#snapshot",
        "fct-type": "function",
        "title": "snapshot"
      },
      "index": {
        "description": "Sample the behavior at the time of the event firing Note that the current value of the behavior that sampled is the value as at the start of the transaction before any state changes of the current transaction are applied through hold",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "snapshot",
        "normalized": "(a-\u003eb-\u003ec)-\u003eEvent a-\u003eBehavior b-\u003eEvent c",
        "package": "sodium",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)-\u003eEvent a-\u003eBehavior b-\u003eEvent c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:snapshotWith",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: renamed to \u003ccode\u003e\u003ca\u003esnapshot\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eSample the behavior at the time of the event firing. Note that the 'current value'\n of the behavior that's sampled is the value as at the start of the transaction\n before any state changes of the current transaction are applied through \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e Event a -\u003e Behavior b -\u003e Event c",
        "fct-source": "src/FRP-Sodium-Plain.html#snapshotWith",
        "fct-type": "function",
        "title": "snapshotWith"
      },
      "index": {
        "description": "Deprecated renamed to snapshot Sample the behavior at the time of the event firing Note that the current value of the behavior that sampled is the value as at the start of the transaction before any state changes of the current transaction are applied through hold",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "snapshotWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003eEvent a-\u003eBehavior b-\u003eEvent c",
        "package": "sodium",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003eEvent a-\u003eBehavior b-\u003eEvent c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eTake each list item and put it into a new transaction of its own.\n\u003c/p\u003e\u003cp\u003eAn example use case of this might be a situation where we are splitting\n a block of input data into frames. We obviously want each frame to have\n its own transaction so that state is updated separately each frame.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Event [a] -\u003e Event a",
        "fct-source": "src/FRP-Sodium-Plain.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Take each list item and put it into new transaction of its own An example use case of this might be situation where we are splitting block of input data into frames We obviously want each frame to have its own transaction so that state is updated separately each frame",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "split",
        "normalized": "Event[a]-\u003eEvent a",
        "package": "sodium",
        "partial": "",
        "signature": "Event[a]-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:switch",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap a behavior inside another behavior to give a time-varying behavior implementation.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Behavior (Behavior a) -\u003e Reactive (Behavior a)",
        "fct-source": "src/FRP-Sodium-Plain.html#switch",
        "fct-type": "function",
        "title": "switch"
      },
      "index": {
        "description": "Unwrap behavior inside another behavior to give time-varying behavior implementation",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "switch",
        "normalized": "Behavior(Behavior a)-\u003eReactive(Behavior a)",
        "package": "sodium",
        "partial": "",
        "signature": "Behavior(Behavior a)-\u003eReactive(Behavior a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:switchE",
      "description": {
        "fct-descr": "\u003cp\u003eUnwrap an event inside a behavior to give a time-varying event implementation.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Behavior (Event a) -\u003e Event a",
        "fct-source": "src/FRP-Sodium-Plain.html#switchE",
        "fct-type": "function",
        "title": "switchE"
      },
      "index": {
        "description": "Unwrap an event inside behavior to give time-varying event implementation",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "switchE",
        "normalized": "Behavior(Event a)-\u003eEvent a",
        "package": "sodium",
        "partial": "",
        "signature": "Behavior(Event a)-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:sync",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the specified \u003ccode\u003e\u003ca\u003eReactive\u003c/a\u003e\u003c/code\u003e within a new transaction, blocking the caller\n until all resulting processing is complete and all callbacks have been called.\n This operation is thread-safe, so it may be called from any thread.\n\u003c/p\u003e\u003cp\u003eState changes to \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003e values occur after processing of the transaction is complete.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Reactive a -\u003e IO a",
        "fct-source": "src/FRP-Sodium-Plain.html#sync",
        "fct-type": "function",
        "title": "sync"
      },
      "index": {
        "description": "Execute the specified Reactive within new transaction blocking the caller until all resulting processing is complete and all callbacks have been called This operation is thread-safe so it may be called from any thread State changes to hold values occur after processing of the transaction is complete",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "sync",
        "normalized": "Reactive a-\u003eIO a",
        "package": "sodium",
        "partial": "",
        "signature": "Reactive a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:updates",
      "description": {
        "fct-descr": "\u003cp\u003eAn event that gives the updates for the behavior. If the behavior was created\n with \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003e, then \u003ccode\u003e\u003ca\u003eupdates\u003c/a\u003e\u003c/code\u003e gives you an event equivalent to the one that was held.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Behavior a -\u003e Event a",
        "fct-source": "src/FRP-Sodium-Plain.html#updates",
        "fct-type": "function",
        "title": "updates"
      },
      "index": {
        "description": "An event that gives the updates for the behavior If the behavior was created with hold then updates gives you an event equivalent to the one that was held",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "updates",
        "normalized": "Behavior a-\u003eEvent a",
        "package": "sodium",
        "partial": "",
        "signature": "Behavior a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003eAn event that is guaranteed to fire once when you listen to it, giving\n the current value of the behavior, and thereafter behaves like \u003ccode\u003e\u003ca\u003eupdates\u003c/a\u003e\u003c/code\u003e,\n firing for each update to the behavior's value.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Behavior a -\u003e Event a",
        "fct-source": "src/FRP-Sodium-Plain.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "An event that is guaranteed to fire once when you listen to it giving the current value of the behavior and thereafter behaves like updates firing for each update to the behavior value",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "value",
        "normalized": "Behavior a-\u003eEvent a",
        "package": "sodium",
        "partial": "",
        "signature": "Behavior a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:values",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: renamed to \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eAn event that is guaranteed to fire once when you listen to it, giving\n the current value of the behavior, and thereafter behaves like \u003ccode\u003e\u003ca\u003echanges\u003c/a\u003e\u003c/code\u003e,\n firing for each update to the behavior's value.\n\u003c/p\u003e",
        "fct-module": "FRP.Sodium",
        "fct-package": "sodium",
        "fct-signature": "Behavior a -\u003e Event a",
        "fct-source": "src/FRP-Sodium-Plain.html#values",
        "fct-type": "function",
        "title": "values"
      },
      "index": {
        "description": "Deprecated renamed to value An event that is guaranteed to fire once when you listen to it giving the current value of the behavior and thereafter behaves like changes firing for each update to the behavior value",
        "hierarchy": "FRP Sodium",
        "module": "FRP.Sodium",
        "name": "values",
        "normalized": "Behavior a-\u003eEvent a",
        "package": "sodium",
        "partial": "",
        "signature": "Behavior a-\u003eEvent a"
      }
    }
  }
]