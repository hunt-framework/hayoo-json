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
        "word": "sodium"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneralization of the Sodium API to allow for parallel processing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FRP.Sodium.Context",
          "name": "Context",
          "package": "sodium",
          "source": "src/FRP-Sodium-Context.html",
          "type": "module"
        },
        "index": {
          "description": "Generalization of the Sodium API to allow for parallel processing",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "Context",
          "package": "sodium",
          "partial": "Context",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA time-varying value, British spelling.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "Behaviour",
          "package": "sodium",
          "source": "src/FRP-Sodium-Context.html#Behaviour",
          "type": "type"
        },
        "index": {
          "description": "time-varying value British spelling",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "Behaviour",
          "package": "sodium",
          "partial": "Behaviour",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#t:Behaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.Context",
          "name": "Context",
          "package": "sodium",
          "source": "src/FRP-Sodium-Context.html#Context",
          "type": "class"
        },
        "index": {
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "Context",
          "package": "sodium",
          "partial": "Context",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.Context",
          "name": "ContextIO",
          "package": "sodium",
          "source": "src/FRP-Sodium-Context.html#ContextIO",
          "type": "class"
        },
        "index": {
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "ContextIO",
          "package": "sodium",
          "partial": "Context IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#t:ContextIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulate state changes given in the input event.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "accum",
          "package": "sodium",
          "signature": "a -\u003e Event r (a -\u003e a) -\u003e Reactive r (Behavior r a)",
          "source": "src/FRP-Sodium-Context.html#accum",
          "type": "function"
        },
        "index": {
          "description": "Accumulate state changes given in the input event",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "accum",
          "normalized": "a-\u003eEvent b(a-\u003ea)-\u003eReactive b(Behavior b a)",
          "package": "sodium",
          "signature": "a-\u003eEvent r(a-\u003ea)-\u003eReactive r(Behavior r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:accum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf there's more than one firing in a single transaction, combine them into\n one using the specified combining function.\n\u003c/p\u003e\u003cp\u003eIf the event firings are ordered, then the first will appear at the left\n input of the combining function. In most common cases it's best not to\n make any assumptions about the ordering, and the combining function would\n ideally be commutative.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "coalesce",
          "package": "sodium",
          "signature": "(a -\u003e a -\u003e a) -\u003e Event r a -\u003e Event r a",
          "source": "src/FRP-Sodium-Context.html#coalesce",
          "type": "method"
        },
        "index": {
          "description": "If there more than one firing in single transaction combine them into one using the specified combining function If the event firings are ordered then the first will appear at the left input of the combining function In most common cases it best not to make any assumptions about the ordering and the combining function would ideally be commutative",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "coalesce",
          "normalized": "(a-\u003ea-\u003ea)-\u003eEvent b a-\u003eEvent b a",
          "package": "sodium",
          "signature": "(a-\u003ea-\u003ea)-\u003eEvent r a-\u003eEvent r a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:coalesce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a behavior with a generalized state loop (a mealy machine). The function\n is passed the input and the old state and returns the new state and output value.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "collect",
          "package": "sodium",
          "signature": "(a -\u003e s -\u003e (b, s)) -\u003e s -\u003e Behavior r a -\u003e Reactive r (Behavior r b)",
          "source": "src/FRP-Sodium-Context.html#collect",
          "type": "function"
        },
        "index": {
          "description": "Transform behavior with generalized state loop mealy machine The function is passed the input and the old state and returns the new state and output value",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "collect",
          "normalized": "(a-\u003eb-\u003e(c,b))-\u003eb-\u003eBehavior d a-\u003eReactive d(Behavior d c)",
          "package": "sodium",
          "signature": "(a-\u003es-\u003e(b,s))-\u003es-\u003eBehavior r a-\u003eReactive r(Behavior r b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform an event with a generalized state loop (a mealy machine). The function\n is passed the input and the old state and returns the new state and output value.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "collectE",
          "package": "sodium",
          "signature": "(a -\u003e s -\u003e (b, s)) -\u003e s -\u003e Event r a -\u003e Reactive r (Event r b)",
          "source": "src/FRP-Sodium-Context.html#collectE",
          "type": "function"
        },
        "index": {
          "description": "Transform an event with generalized state loop mealy machine The function is passed the input and the old state and returns the new state and output value",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "collectE",
          "normalized": "(a-\u003eb-\u003e(c,b))-\u003eb-\u003eEvent d a-\u003eReactive d(Event d c)",
          "package": "sodium",
          "signature": "(a-\u003es-\u003e(b,s))-\u003es-\u003eEvent r a-\u003eReactive r(Event r b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:collectE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the specified \u003ccode\u003e\u003ca\u003eReactive\u003c/a\u003e\u003c/code\u003e action inside an event.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "execute",
          "package": "sodium",
          "signature": "Event r (Reactive r a) -\u003e Event r a",
          "source": "src/FRP-Sodium-Context.html#execute",
          "type": "method"
        },
        "index": {
          "description": "Execute the specified Reactive action inside an event",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "execute",
          "normalized": "Event a(Reactive a b)-\u003eEvent a b",
          "package": "sodium",
          "signature": "Event r(Reactive r a)-\u003eEvent r a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the specified IO operation asynchronously on a separate thread, and\n signal the output event in a new transaction upon its completion.\n\u003c/p\u003e\u003cp\u003eCaveat: Where \u003ccode\u003e\u003ca\u003eswitch\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eswitchE\u003c/a\u003e\u003c/code\u003e is used, when some reactive logic has been\n switched away, we rely on garbage collection to actually disconnect this logic\n from any input it may be listening to. With normal Sodium code, everything is\n pure, so before garbage collection happens, the worst we will get is some wasted\n CPU cycles. If you are using 'executeAsyncIO'/'executeSyncIO' inside a \u003ccode\u003e\u003ca\u003eswitch\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eswitchE\u003c/a\u003e\u003c/code\u003e, however, it is possible that logic that has been switched away\n hasn't been garbage collected yet. This logic \u003cem\u003ecould\u003c/em\u003e still run, and if it has\n observable effects, you could see it running after it is supposed to have been\n switched out. One way to avoid this is to pipe the source event for IO out of the\n switch, run the 'executeAsyncIO'/'executeSyncIO' outside the switch, and pipe its\n output back into the switch contents.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "executeAsyncIO",
          "package": "sodium",
          "signature": "Event r (IO a) -\u003e Event r a",
          "source": "src/FRP-Sodium-Context.html#executeAsyncIO",
          "type": "method"
        },
        "index": {
          "description": "Execute the specified IO operation asynchronously on separate thread and signal the output event in new transaction upon its completion Caveat Where switch or switchE is used when some reactive logic has been switched away we rely on garbage collection to actually disconnect this logic from any input it may be listening to With normal Sodium code everything is pure so before garbage collection happens the worst we will get is some wasted CPU cycles If you are using executeAsyncIO executeSyncIO inside switch or switchE however it is possible that logic that has been switched away hasn been garbage collected yet This logic could still run and if it has observable effects you could see it running after it is supposed to have been switched out One way to avoid this is to pipe the source event for IO out of the switch run the executeAsyncIO executeSyncIO outside the switch and pipe its output back into the switch contents",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "executeAsyncIO",
          "normalized": "Event a(IO b)-\u003eEvent a b",
          "package": "sodium",
          "partial": "Async IO",
          "signature": "Event r(IO a)-\u003eEvent r a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:executeAsyncIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the specified IO operation synchronously and fire the output event\n in the same transaction.\n\u003c/p\u003e\u003cp\u003eCaveat: See \u003ccode\u003e\u003ca\u003eexecuteAsyncIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "executeSyncIO",
          "package": "sodium",
          "signature": "Event r (IO a) -\u003e Event r a",
          "source": "src/FRP-Sodium-Context.html#executeSyncIO",
          "type": "method"
        },
        "index": {
          "description": "Execute the specified IO operation synchronously and fire the output event in the same transaction Caveat See executeAsyncIO",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "executeSyncIO",
          "normalized": "Event a(IO b)-\u003eEvent a b",
          "package": "sodium",
          "partial": "Sync IO",
          "signature": "Event r(IO a)-\u003eEvent r a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:executeSyncIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly keep event occurrences for which the predicate returns true.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "filterE",
          "package": "sodium",
          "signature": "(a -\u003e Bool) -\u003e Event r a -\u003e Event r a",
          "source": "src/FRP-Sodium-Context.html#filterE",
          "type": "function"
        },
        "index": {
          "description": "Only keep event occurrences for which the predicate returns true",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "filterE",
          "normalized": "(a-\u003eBool)-\u003eEvent b a-\u003eEvent b a",
          "package": "sodium",
          "signature": "(a-\u003eBool)-\u003eEvent r a-\u003eEvent r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:filterE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap Just values, and discard event occurrences with Nothing values.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "filterJust",
          "package": "sodium",
          "signature": "Event r (Maybe a) -\u003e Event r a",
          "source": "src/FRP-Sodium-Context.html#filterJust",
          "type": "method"
        },
        "index": {
          "description": "Unwrap Just values and discard event occurrences with Nothing values",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "filterJust",
          "normalized": "Event a(Maybe b)-\u003eEvent a b",
          "package": "sodium",
          "partial": "Just",
          "signature": "Event r(Maybe a)-\u003eEvent r a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:filterJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLet event occurrences through only when the behavior's value is True.\n Note that the behavior's value is as it was at the start of the transaction,\n that is, no state changes from the current transaction are taken into account.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "gate",
          "package": "sodium",
          "signature": "Event r a -\u003e Behavior r Bool -\u003e Event r a",
          "source": "src/FRP-Sodium-Context.html#gate",
          "type": "function"
        },
        "index": {
          "description": "Let event occurrences through only when the behavior value is True Note that the behavior value is as it was at the start of the transaction that is no state changes from the current transaction are taken into account",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "gate",
          "normalized": "Event a b-\u003eBehavior a Bool-\u003eEvent a b",
          "package": "sodium",
          "signature": "Event r a-\u003eBehavior r Bool-\u003eEvent r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:gate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a behavior with the specified initial value, that gets updated\n by the values coming through the event. The 'current value' of the behavior\n is notionally the value as it was 'at the start of the transaction'.\n That is, state updates caused by event firings get processed at the end of\n the transaction.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "hold",
          "package": "sodium",
          "signature": "a -\u003e Event r a -\u003e Reactive r (Behavior r a)",
          "source": "src/FRP-Sodium-Context.html#hold",
          "type": "method"
        },
        "index": {
          "description": "Create behavior with the specified initial value that gets updated by the values coming through the event The current value of the behavior is notionally the value as it was at the start of the transaction That is state updates caused by event firings get processed at the end of the transaction",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "hold",
          "normalized": "a-\u003eEvent b a-\u003eReactive b(Behavior b a)",
          "package": "sodium",
          "signature": "a-\u003eEvent r a-\u003eReactive r(Behavior r a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:hold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eListen for firings of this event. The returned \u003ccode\u003eIO ()\u003c/code\u003e is an IO action\n that unregisters the listener. This is the observer pattern.\n\u003c/p\u003e\u003cp\u003eTo listen to a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e use \u003ccode\u003elisten (value b) handler\u003c/code\u003e\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "listen",
          "package": "sodium",
          "signature": "Event r a -\u003e (a -\u003e IO ()) -\u003e Reactive r (IO ())",
          "source": "src/FRP-Sodium-Context.html#listen",
          "type": "method"
        },
        "index": {
          "description": "Listen for firings of this event The returned IO is an IO action that unregisters the listener This is the observer pattern To listen to Behavior use listen value handler",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "listen",
          "normalized": "Event a b-\u003e(b-\u003eIO())-\u003eReactive a(IO())",
          "package": "sodium",
          "signature": "Event r a-\u003e(a-\u003eIO())-\u003eReactive r(IO())",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two streams of events of the same type.\n\u003c/p\u003e\u003cp\u003eIn the case where two event occurrences are simultaneous (i.e. both\n within the same transaction), both will be delivered in the same\n transaction. If the event firings are ordered for some reason, then\n their ordering is retained. In many common cases the ordering will\n be undefined.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "merge",
          "package": "sodium",
          "signature": "Event r a -\u003e Event r a -\u003e Event r a",
          "source": "src/FRP-Sodium-Context.html#merge",
          "type": "method"
        },
        "index": {
          "description": "Merge two streams of events of the same type In the case where two event occurrences are simultaneous i.e both within the same transaction both will be delivered in the same transaction If the event firings are ordered for some reason then their ordering is retained In many common cases the ordering will be undefined",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "merge",
          "normalized": "Event a b-\u003eEvent a b-\u003eEvent a b",
          "package": "sodium",
          "signature": "Event r a-\u003eEvent r a-\u003eEvent r a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two streams of events of the same type, combining simultaneous\n event occurrences.\n\u003c/p\u003e\u003cp\u003eIn the case where multiple event occurrences are simultaneous (i.e. all\n within the same transaction), they are combined using the same logic as\n \u003ccode\u003e\u003ca\u003ecoalesce\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "mergeWith",
          "package": "sodium",
          "signature": "(a -\u003e a -\u003e a) -\u003e Event r a -\u003e Event r a -\u003e Event r a",
          "source": "src/FRP-Sodium-Context.html#mergeWith",
          "type": "function"
        },
        "index": {
          "description": "Merge two streams of events of the same type combining simultaneous event occurrences In the case where multiple event occurrences are simultaneous i.e all within the same transaction they are combined using the same logic as coalesce",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "mergeWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eEvent b a-\u003eEvent b a-\u003eEvent b a",
          "package": "sodium",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eEvent r a-\u003eEvent r a-\u003eEvent r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:mergeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event that never fires.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "never",
          "package": "sodium",
          "signature": "Event r a",
          "source": "src/FRP-Sodium-Context.html#never",
          "type": "method"
        },
        "index": {
          "description": "An event that never fires",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "never",
          "package": "sodium",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e along with an action to push changes into it.\n American spelling.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "newBehavior",
          "package": "sodium",
          "signature": "a-\u003e Reactive r (Behavior r a, a -\u003e Reactive r ())",
          "type": "function"
        },
        "index": {
          "description": "Create new Behavior along with an action to push changes into it American spelling",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "newBehavior",
          "normalized": "a-\u003eReactive b(Behavior b a,a-\u003eReactive b())",
          "package": "sodium",
          "partial": "Behavior",
          "signature": "a-\u003eReactive r(Behavior r a,a-\u003eReactive r())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:newBehavior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e along with an action to push changes into it.\n British spelling.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "newBehaviour",
          "package": "sodium",
          "signature": "a-\u003e Reactive r (Behavior r a, a -\u003e Reactive r ())",
          "type": "function"
        },
        "index": {
          "description": "Create new Behavior along with an action to push changes into it British spelling",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "newBehaviour",
          "normalized": "a-\u003eReactive b(Behavior b a,a-\u003eReactive b())",
          "package": "sodium",
          "partial": "Behaviour",
          "signature": "a-\u003eReactive r(Behavior r a,a-\u003eReactive r())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:newBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an event, and a push action for pushing a value into the event.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "newEvent",
          "package": "sodium",
          "signature": "Reactive r (Event r a, a -\u003e Reactive r ())",
          "source": "src/FRP-Sodium-Context.html#newEvent",
          "type": "method"
        },
        "index": {
          "description": "Returns an event and push action for pushing value into the event",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "newEvent",
          "normalized": "Reactive a(Event a b,b-\u003eReactive a())",
          "package": "sodium",
          "partial": "Event",
          "signature": "Reactive r(Event r a,a-\u003eReactive r())",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:newEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow away all event occurrences except for the first one.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "once",
          "package": "sodium",
          "signature": "Event r a -\u003e Event r a",
          "source": "src/FRP-Sodium-Context.html#once",
          "type": "method"
        },
        "index": {
          "description": "Throw away all event occurrences except for the first one",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "once",
          "normalized": "Event a b-\u003eEvent a b",
          "package": "sodium",
          "signature": "Event r a-\u003eEvent r a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:once"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the current value of a behavior.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "sample",
          "package": "sodium",
          "signature": "Behavior r a -\u003e Reactive r a",
          "source": "src/FRP-Sodium-Context.html#sample",
          "type": "method"
        },
        "index": {
          "description": "Obtain the current value of behavior",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "sample",
          "normalized": "Behavior a b-\u003eReactive a b",
          "package": "sodium",
          "signature": "Behavior r a-\u003eReactive r a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample the behavior at the time of the event firing. Note that the 'current value'\n of the behavior that's sampled is the value as at the start of the transaction\n before any state changes of the current transaction are applied through \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "snapshot",
          "package": "sodium",
          "signature": "(a -\u003e b -\u003e c) -\u003e Event r a -\u003e Behavior r b -\u003e Event r c",
          "source": "src/FRP-Sodium-Context.html#snapshot",
          "type": "method"
        },
        "index": {
          "description": "Sample the behavior at the time of the event firing Note that the current value of the behavior that sampled is the value as at the start of the transaction before any state changes of the current transaction are applied through hold",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "snapshot",
          "normalized": "(a-\u003eb-\u003ec)-\u003eEvent d a-\u003eBehavior d b-\u003eEvent d c",
          "package": "sodium",
          "signature": "(a-\u003eb-\u003ec)-\u003eEvent r a-\u003eBehavior r b-\u003eEvent r c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:snapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake each list item and put it into a new transaction of its own.\n\u003c/p\u003e\u003cp\u003eAn example use case of this might be a situation where we are splitting\n a block of input data into frames. We obviously want each frame to have\n its own transaction so that state is updated separately each frame.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "split",
          "package": "sodium",
          "signature": "Event r [a] -\u003e Event r a",
          "source": "src/FRP-Sodium-Context.html#split",
          "type": "method"
        },
        "index": {
          "description": "Take each list item and put it into new transaction of its own An example use case of this might be situation where we are splitting block of input data into frames We obviously want each frame to have its own transaction so that state is updated separately each frame",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "split",
          "normalized": "Event a[b]-\u003eEvent a b",
          "package": "sodium",
          "signature": "Event r[a]-\u003eEvent r a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a behavior inside another behavior to give a time-varying behavior implementation.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "switch",
          "package": "sodium",
          "signature": "Behavior r (Behavior r a) -\u003e Reactive r (Behavior r a)",
          "source": "src/FRP-Sodium-Context.html#switch",
          "type": "method"
        },
        "index": {
          "description": "Unwrap behavior inside another behavior to give time-varying behavior implementation",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "switch",
          "normalized": "Behavior a(Behavior a b)-\u003eReactive a(Behavior a b)",
          "package": "sodium",
          "signature": "Behavior r(Behavior r a)-\u003eReactive r(Behavior r a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap an event inside a behavior to give a time-varying event implementation.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "switchE",
          "package": "sodium",
          "signature": "Behavior r (Event r a) -\u003e Event r a",
          "source": "src/FRP-Sodium-Context.html#switchE",
          "type": "method"
        },
        "index": {
          "description": "Unwrap an event inside behavior to give time-varying event implementation",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "switchE",
          "normalized": "Behavior a(Event a b)-\u003eEvent a b",
          "package": "sodium",
          "signature": "Behavior r(Event r a)-\u003eEvent r a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:switchE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the specified \u003ccode\u003e\u003ca\u003eReactive\u003c/a\u003e\u003c/code\u003e within a new transaction, blocking the caller\n until all resulting processing is complete and all callbacks have been called.\n This operation is thread-safe, so it may be called from any thread.\n\u003c/p\u003e\u003cp\u003eState changes to \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003e values occur after processing of the transaction is complete.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "sync",
          "package": "sodium",
          "signature": "Reactive r a -\u003e IO a",
          "source": "src/FRP-Sodium-Context.html#sync",
          "type": "method"
        },
        "index": {
          "description": "Execute the specified Reactive within new transaction blocking the caller until all resulting processing is complete and all callbacks have been called This operation is thread-safe so it may be called from any thread State changes to hold values occur after processing of the transaction is complete",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "sync",
          "normalized": "Reactive a b-\u003eIO b",
          "package": "sodium",
          "signature": "Reactive r a-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:sync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event that gives the updates for the behavior. If the behavior was created\n with \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003e, then \u003ccode\u003e\u003ca\u003eupdates\u003c/a\u003e\u003c/code\u003e gives you an event equivalent to the one that was held.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "updates",
          "package": "sodium",
          "signature": "Behavior r a -\u003e Event r a",
          "source": "src/FRP-Sodium-Context.html#updates",
          "type": "method"
        },
        "index": {
          "description": "An event that gives the updates for the behavior If the behavior was created with hold then updates gives you an event equivalent to the one that was held",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "updates",
          "normalized": "Behavior a b-\u003eEvent a b",
          "package": "sodium",
          "signature": "Behavior r a-\u003eEvent r a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event that is guaranteed to fire once when you listen to it, giving\n the current value of the behavior, and thereafter behaves like \u003ccode\u003echanges\u003c/code\u003e,\n firing for each update to the behavior's value.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Context",
          "name": "value",
          "package": "sodium",
          "signature": "Behavior r a -\u003e Event r a",
          "source": "src/FRP-Sodium-Context.html#value",
          "type": "method"
        },
        "index": {
          "description": "An event that is guaranteed to fire once when you listen to it giving the current value of the behavior and thereafter behaves like changes firing for each update to the behavior value",
          "hierarchy": "FRP Sodium Context",
          "module": "FRP.Sodium.Context",
          "name": "value",
          "normalized": "Behavior a b-\u003eEvent a b",
          "package": "sodium",
          "signature": "Behavior r a-\u003eEvent r a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Context.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.IO",
          "name": "IO",
          "package": "sodium",
          "source": "src/FRP-Sodium-IO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Sodium IO",
          "module": "FRP.Sodium.IO",
          "name": "IO",
          "package": "sodium",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the specified IO operation asynchronously on a separate thread, and\n signal the output event in a new transaction upon its completion.\n\u003c/p\u003e\u003cp\u003eCaveat: Where \u003ccode\u003e\u003ca\u003eswitch\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eswitchE\u003c/a\u003e\u003c/code\u003e is used, when some reactive logic has been\n switched away, we rely on garbage collection to actually disconnect this logic\n from any input it may be listening to. With normal Sodium code, everything is\n pure, so before garbage collection happens, the worst we will get is some wasted\n CPU cycles. If you are using 'executeAsyncIO'/'executeSyncIO' inside a \u003ccode\u003e\u003ca\u003eswitch\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eswitchE\u003c/a\u003e\u003c/code\u003e, however, it is possible that logic that has been switched away\n hasn't been garbage collected yet. This logic \u003cem\u003ecould\u003c/em\u003e still run, and if it has\n observable effects, you could see it running after it is supposed to have been\n switched out. One way to avoid this is to pipe the source event for IO out of the\n switch, run the 'executeAsyncIO'/'executeSyncIO' outside the switch, and pipe its\n output back into the switch contents.\n\u003c/p\u003e",
          "module": "FRP.Sodium.IO",
          "name": "executeAsyncIO",
          "package": "sodium",
          "signature": "Event Plain (IO a) -\u003e Event Plain a",
          "source": "src/FRP-Sodium-IO.html#executeAsyncIO",
          "type": "function"
        },
        "index": {
          "description": "Execute the specified IO operation asynchronously on separate thread and signal the output event in new transaction upon its completion Caveat Where switch or switchE is used when some reactive logic has been switched away we rely on garbage collection to actually disconnect this logic from any input it may be listening to With normal Sodium code everything is pure so before garbage collection happens the worst we will get is some wasted CPU cycles If you are using executeAsyncIO executeSyncIO inside switch or switchE however it is possible that logic that has been switched away hasn been garbage collected yet This logic could still run and if it has observable effects you could see it running after it is supposed to have been switched out One way to avoid this is to pipe the source event for IO out of the switch run the executeAsyncIO executeSyncIO outside the switch and pipe its output back into the switch contents",
          "hierarchy": "FRP Sodium IO",
          "module": "FRP.Sodium.IO",
          "name": "executeAsyncIO",
          "normalized": "Event Plain(IO a)-\u003eEvent Plain a",
          "package": "sodium",
          "partial": "Async IO",
          "signature": "Event Plain(IO a)-\u003eEvent Plain a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-IO.html#v:executeAsyncIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the specified IO operation synchronously and fire the output event\n in the same transaction.\n\u003c/p\u003e\u003cp\u003eCaveat: See \u003ccode\u003e\u003ca\u003eexecuteAsyncIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Sodium.IO",
          "name": "executeSyncIO",
          "package": "sodium",
          "signature": "Event Plain (IO a) -\u003e Event Plain a",
          "source": "src/FRP-Sodium-IO.html#executeSyncIO",
          "type": "function"
        },
        "index": {
          "description": "Execute the specified IO operation synchronously and fire the output event in the same transaction Caveat See executeAsyncIO",
          "hierarchy": "FRP Sodium IO",
          "module": "FRP.Sodium.IO",
          "name": "executeSyncIO",
          "normalized": "Event Plain(IO a)-\u003eEvent Plain a",
          "package": "sodium",
          "partial": "Sync IO",
          "signature": "Event Plain(IO a)-\u003eEvent Plain a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-IO.html#v:executeSyncIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.Internal",
          "name": "Internal",
          "package": "sodium",
          "source": "src/FRP-Sodium-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "Internal",
          "package": "sodium",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.Internal",
          "name": "Listen",
          "package": "sodium",
          "source": "src/FRP-Sodium-Plain.html#Listen",
          "type": "data"
        },
        "index": {
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "Listen",
          "package": "sodium",
          "partial": "Listen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#t:Listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.Internal",
          "name": "Node",
          "package": "sodium",
          "source": "src/FRP-Sodium-Plain.html#Node",
          "type": "data"
        },
        "index": {
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "Node",
          "package": "sodium",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhantom type for use with \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Internal",
          "name": "Plain",
          "package": "sodium",
          "source": "src/FRP-Sodium-Plain.html#Plain",
          "type": "data"
        },
        "index": {
          "description": "Phantom type for use with Context type class",
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "Plain",
          "package": "sodium",
          "partial": "Plain",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#t:Plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.Internal",
          "name": "Sample",
          "package": "sodium",
          "source": "src/FRP-Sodium-Plain.html#Sample",
          "type": "data"
        },
        "index": {
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "Sample",
          "package": "sodium",
          "partial": "Sample",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#t:Sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.Internal",
          "name": "Unlistener",
          "package": "sodium",
          "source": "src/FRP-Sodium-Plain.html#Unlistener",
          "type": "data"
        },
        "index": {
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "Unlistener",
          "package": "sodium",
          "partial": "Unlistener",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#t:Unlistener"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.Internal",
          "name": "Listen",
          "package": "sodium",
          "signature": "Listen",
          "source": "src/FRP-Sodium-Plain.html#Listen",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "Listen",
          "package": "sodium",
          "partial": "Listen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:Listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.Internal",
          "name": "Sample",
          "package": "sodium",
          "signature": "Sample",
          "source": "src/FRP-Sodium-Plain.html#Sample",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "Sample",
          "package": "sodium",
          "partial": "Sample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:Sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCause the things listened to with \u003ccode\u003e\u003ca\u003elater\u003c/a\u003e\u003c/code\u003e to be unlistened when the\n specified listener is not referenced any more.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Internal",
          "name": "addCleanup_Listen",
          "package": "sodium",
          "signature": "Unlistener -\u003e Listen a -\u003e Reactive (Listen a)",
          "source": "src/FRP-Sodium-Plain.html#addCleanup_Listen",
          "type": "function"
        },
        "index": {
          "description": "Cause the things listened to with later to be unlistened when the specified listener is not referenced any more",
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "addCleanup_Listen",
          "normalized": "Unlistener-\u003eListen a-\u003eReactive(Listen a)",
          "package": "sodium",
          "partial": "Cleanup Listen",
          "signature": "Unlistener-\u003eListen a-\u003eReactive(Listen a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:addCleanup_Listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCause the things listened to with \u003ccode\u003e\u003ca\u003elater\u003c/a\u003e\u003c/code\u003e to be unlistened when the\n specified sample is not referenced any more.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Internal",
          "name": "addCleanup_Sample",
          "package": "sodium",
          "signature": "Unlistener -\u003e Sample a -\u003e IO (Sample a)",
          "source": "src/FRP-Sodium-Plain.html#addCleanup_Sample",
          "type": "function"
        },
        "index": {
          "description": "Cause the things listened to with later to be unlistened when the specified sample is not referenced any more",
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "addCleanup_Sample",
          "normalized": "Unlistener-\u003eSample a-\u003eIO(Sample a)",
          "package": "sodium",
          "partial": "Cleanup Sample",
          "signature": "Unlistener-\u003eSample a-\u003eIO(Sample a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:addCleanup_Sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.Internal",
          "name": "dep",
          "package": "sodium",
          "signature": "a -\u003e Dep",
          "source": "src/FRP-Sodium-Plain.html#dep",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "dep",
          "normalized": "a-\u003eDep",
          "package": "sodium",
          "signature": "a-\u003eDep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:dep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a finalizer to an event.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Internal",
          "name": "finalizeEvent",
          "package": "sodium",
          "signature": "Event a -\u003e IO () -\u003e Event a",
          "source": "src/FRP-Sodium-Plain.html#finalizeEvent",
          "type": "function"
        },
        "index": {
          "description": "Add finalizer to an event",
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "finalizeEvent",
          "normalized": "Event a-\u003eIO()-\u003eEvent a",
          "package": "sodium",
          "partial": "Event",
          "signature": "Event a-\u003eIO()-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:finalizeEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a finalizer to a listener.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Internal",
          "name": "finalizeListen",
          "package": "sodium",
          "signature": "Listen a -\u003e IO () -\u003e IO (Listen a)",
          "source": "src/FRP-Sodium-Plain.html#finalizeListen",
          "type": "function"
        },
        "index": {
          "description": "Add finalizer to listener",
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "finalizeListen",
          "normalized": "Listen a-\u003eIO()-\u003eIO(Listen a)",
          "package": "sodium",
          "partial": "Listen",
          "signature": "Listen a-\u003eIO()-\u003eIO(Listen a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:finalizeListen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap an event's listener machinery.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Internal",
          "name": "getListen",
          "package": "sodium",
          "signature": "Event a -\u003e Reactive (Listen a)",
          "source": "src/FRP-Sodium-Plain.html#getListen",
          "type": "function"
        },
        "index": {
          "description": "Unwrap an event listener machinery",
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "getListen",
          "normalized": "Event a-\u003eReactive(Listen a)",
          "package": "sodium",
          "partial": "Listen",
          "signature": "Event a-\u003eReactive(Listen a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:getListen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.Internal",
          "name": "ioReactive",
          "package": "sodium",
          "signature": "IO a -\u003e Reactive a",
          "source": "src/FRP-Sodium-Plain.html#ioReactive",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "ioReactive",
          "normalized": "IO a-\u003eReactive a",
          "package": "sodium",
          "partial": "Reactive",
          "signature": "IO a-\u003eReactive a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:ioReactive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a listen later so we can tolerate lazy loops.\n Returns an \u003ccode\u003e\u003ca\u003eUnlistener\u003c/a\u003e\u003c/code\u003e that can be attached to an event with \u003ccode\u003e\u003ca\u003eaddCleanup_Listen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Internal",
          "name": "later",
          "package": "sodium",
          "signature": "Reactive (IO ()) -\u003e Reactive Unlistener",
          "source": "src/FRP-Sodium-Plain.html#later",
          "type": "function"
        },
        "index": {
          "description": "Perform listen later so we can tolerate lazy loops Returns an Unlistener that can be attached to an event with addCleanup Listen",
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "later",
          "normalized": "Reactive(IO())-\u003eReactive Unlistener",
          "package": "sodium",
          "signature": "Reactive(IO())-\u003eReactive Unlistener",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:later"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eListen for firings of this event. The returned \u003ccode\u003eIO ()\u003c/code\u003e is an IO action\n that unregisters the listener. This is the observer pattern.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Internal",
          "name": "linkedListen",
          "package": "sodium",
          "signature": "Event a -\u003e Maybe (MVar Node) -\u003e Bool -\u003e (a -\u003e Reactive ()) -\u003e Reactive (IO ())",
          "source": "src/FRP-Sodium-Plain.html#linkedListen",
          "type": "function"
        },
        "index": {
          "description": "Listen for firings of this event The returned IO is an IO action that unregisters the listener This is the observer pattern",
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "linkedListen",
          "normalized": "Event a-\u003eMaybe(MVar Node)-\u003eBool-\u003e(a-\u003eReactive())-\u003eReactive(IO())",
          "package": "sodium",
          "partial": "Listen",
          "signature": "Event a-\u003eMaybe(MVar Node)-\u003eBool-\u003e(a-\u003eReactive())-\u003eReactive(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:linkedListen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e that allows you to initiate more activity in the current\n transaction. Useful for implementing new primitives.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Internal",
          "name": "listenTrans",
          "package": "sodium",
          "signature": "Event a -\u003e (a -\u003e Reactive ()) -\u003e Reactive (IO ())",
          "source": "src/FRP-Sodium-Plain.html#listenTrans",
          "type": "function"
        },
        "index": {
          "description": "Variant of listen that allows you to initiate more activity in the current transaction Useful for implementing new primitives",
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "listenTrans",
          "normalized": "Event a-\u003e(a-\u003eReactive())-\u003eReactive(IO())",
          "package": "sodium",
          "partial": "Trans",
          "signature": "Event a-\u003e(a-\u003eReactive())-\u003eReactive(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:listenTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an event, and a push action for pushing a value into the event.\n\u003c/p\u003e",
          "module": "[\"FRP.Sodium.Internal\",\"FRP.Sodium\"]",
          "name": "newEvent",
          "package": "sodium",
          "signature": "Reactive (Event a, a -\u003e Reactive ())",
          "source": "src/FRP-Sodium-Plain.html#newEvent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:newEvent\",\"http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:newEvent\"]"
        },
        "index": {
          "description": "Returns an event and push action for pushing value into the event",
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "newEvent",
          "normalized": "Reactive(Event a,a-\u003eReactive())",
          "package": "sodium",
          "partial": "Event",
          "signature": "Reactive(Event a,a-\u003eReactive())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:newEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eListen\u003c/a\u003e\u003c/code\u003e for registering listeners, and a push action for pushing\n a value into the event.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Internal",
          "name": "newEventImpl",
          "package": "sodium",
          "signature": "forall p a.  IO (Listen a, a -\u003e Reactive (), MVar Node)",
          "source": "src/FRP-Sodium-Plain.html#newEventImpl",
          "type": "function"
        },
        "index": {
          "description": "Returns Listen for registering listeners and push action for pushing value into the event",
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "newEventImpl",
          "normalized": "a b c IO(Listen d,d-\u003eReactive(),MVar Node)",
          "package": "sodium",
          "partial": "Event Impl",
          "signature": "forall p a. IO(Listen a,a-\u003eReactive(),MVar Node)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:newEventImpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an event, and a push action for pushing a value into the event.\n\u003c/p\u003e",
          "module": "FRP.Sodium.Internal",
          "name": "newEventLinked",
          "package": "sodium",
          "signature": "Dep -\u003e IO (Event a, a -\u003e Reactive (), MVar Node)",
          "source": "src/FRP-Sodium-Plain.html#newEventLinked",
          "type": "function"
        },
        "index": {
          "description": "Returns an event and push action for pushing value into the event",
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "newEventLinked",
          "normalized": "Dep-\u003eIO(Event a,a-\u003eReactive(),MVar Node)",
          "package": "sodium",
          "partial": "Event Linked",
          "signature": "Dep-\u003eIO(Event a,a-\u003eReactive(),MVar Node)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:newEventLinked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.Internal",
          "name": "runListen_",
          "package": "sodium",
          "signature": "Maybe (MVar Node) -\u003e Bool -\u003e (a -\u003e Reactive ()) -\u003e Reactive (IO ())",
          "source": "src/FRP-Sodium-Plain.html#Listen",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "runListen_",
          "normalized": "Maybe(MVar Node)-\u003eBool-\u003e(a-\u003eReactive())-\u003eReactive(IO())",
          "package": "sodium",
          "partial": "Listen",
          "signature": "Maybe(MVar Node)-\u003eBool-\u003e(a-\u003eReactive())-\u003eReactive(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:runListen_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.Internal",
          "name": "sDep",
          "package": "sodium",
          "signature": "Dep",
          "source": "src/FRP-Sodium-Plain.html#Sample",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "sDep",
          "package": "sodium",
          "partial": "Dep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:sDep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.Internal",
          "name": "scheduleLast",
          "package": "sodium",
          "signature": "Reactive () -\u003e Reactive ()",
          "source": "src/FRP-Sodium-Plain.html#scheduleLast",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "scheduleLast",
          "normalized": "Reactive()-\u003eReactive()",
          "package": "sodium",
          "partial": "Last",
          "signature": "Reactive()-\u003eReactive()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:scheduleLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQueue the specified atomic to run at the end of the priority 2 queue\n\u003c/p\u003e",
          "module": "FRP.Sodium.Internal",
          "name": "schedulePrioritized",
          "package": "sodium",
          "signature": "Maybe (MVar Node) -\u003e Reactive () -\u003e Reactive ()",
          "source": "src/FRP-Sodium-Plain.html#schedulePrioritized",
          "type": "function"
        },
        "index": {
          "description": "Queue the specified atomic to run at the end of the priority queue",
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "schedulePrioritized",
          "normalized": "Maybe(MVar Node)-\u003eReactive()-\u003eReactive()",
          "package": "sodium",
          "partial": "Prioritized",
          "signature": "Maybe(MVar Node)-\u003eReactive()-\u003eReactive()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:schedulePrioritized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.Internal",
          "name": "unSample",
          "package": "sodium",
          "signature": "IO a",
          "source": "src/FRP-Sodium-Plain.html#Sample",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "unSample",
          "package": "sodium",
          "partial": "Sample",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:unSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Sodium.Internal",
          "name": "unsafeNewIORef",
          "package": "sodium",
          "signature": "a -\u003e b -\u003e IORef a",
          "source": "src/FRP-Sodium-Plain.html#unsafeNewIORef",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Sodium Internal",
          "module": "FRP.Sodium.Internal",
          "name": "unsafeNewIORef",
          "normalized": "a-\u003eb-\u003eIORef a",
          "package": "sodium",
          "partial": "New IORef",
          "signature": "a-\u003eb-\u003eIORef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium-Internal.html#v:unsafeNewIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSodium Reactive Programming (FRP) system.\n\u003c/p\u003e\u003cp\u003eSee the \u003cem\u003eexamples\u003c/em\u003e directory for test cases and examples.\n\u003c/p\u003e\u003cp\u003eSome functions are pure, and others need to run under the \u003ccode\u003e\u003ca\u003eReactive\u003c/a\u003e\u003c/code\u003e monad via\n \u003ccode\u003e\u003ca\u003esync\u003c/a\u003e\u003c/code\u003e. An \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e \u003cem\u003e(\u003c/em\u003e\u003ccode\u003e\u003ca\u003eReactive\u003c/a\u003e\u003c/code\u003e \u003cem\u003ea)\u003c/em\u003e can be flattened\n to an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e \u003cem\u003ea\u003c/em\u003e using the \u003ccode\u003e\u003ca\u003eexecute\u003c/a\u003e\u003c/code\u003e primitive.\n\u003c/p\u003e\u003cp\u003eIn addition to the explicit functions in the language, note that you can use\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Functor on \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Applicative on \u003ccode\u003ebehaviour\u003c/code\u003e, e.g. \u003ccode\u003elet bsum = (+) \u003c$\u003e ba \u003c*\u003e bb\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Applicative \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e is used to give a constant \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e A Monoid instance on \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e where \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003enever\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Recursive do (using the DoRec language extension) to make state loops with the \u003ccode\u003erec\u003c/code\u003e keyword.\n\u003c/li\u003e\u003cli\u003e Data.Traversable.\u003ccode\u003e\u003ca\u003esequenceA\u003c/a\u003e\u003c/code\u003e is useful to convert \u003cem\u003e[Behavior a]\u003c/em\u003e into \u003cem\u003eBehavior [a]\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHere's an example of recursive do to write state-keeping loops. Note that\n all \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003es are delayed, so \u003ccode\u003e\u003ca\u003esnapshot\u003c/a\u003e\u003c/code\u003e will capture the \u003cem\u003eold\u003c/em\u003e value of the state \u003cem\u003es\u003c/em\u003e.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DoRec #-}\n -- | Accumulate state changes given in the input event.\n accum :: Context r =\u003e a -\u003e Event r (a -\u003e a) -\u003e Reactive r (Behavior r a)\n accum z efa = do\n     rec\n         s \u003c- hold z $ snapshot ($) efa s\n     return s\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "FRP.Sodium",
          "name": "Sodium",
          "package": "sodium",
          "source": "src/FRP-Sodium.html",
          "type": "module"
        },
        "index": {
          "description": "Sodium Reactive Programming FRP system See the examples directory for test cases and examples Some functions are pure and others need to run under the Reactive monad via sync An Event Reactive can be flattened to an Event using the execute primitive In addition to the explicit functions in the language note that you can use Functor on Event and Behavior Applicative on behaviour e.g let bsum ba bb Applicative pure is used to give constant Behavior Monoid instance on Event where mempty never and mappend merge Recursive do using the DoRec language extension to make state loops with the rec keyword Data.Traversable sequenceA is useful to convert Behavior into Behavior Here an example of recursive do to write state-keeping loops Note that all hold are delayed so snapshot will capture the old value of the state LANGUAGE DoRec Accumulate state changes given in the input event accum Context Event Reactive Behavior accum efa do rec hold snapshot efa return",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "Sodium",
          "package": "sodium",
          "partial": "Sodium",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA time-varying value, American spelling.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "Behavior",
          "package": "sodium",
          "source": "src/FRP-Sodium-Plain.html#Behavior",
          "type": "type"
        },
        "index": {
          "description": "time-varying value American spelling",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "Behavior",
          "package": "sodium",
          "partial": "Behavior",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#t:Behavior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA time-varying value, British spelling.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "Behaviour",
          "package": "sodium",
          "source": "src/FRP-Sodium-Plain.html#Behaviour",
          "type": "type"
        },
        "index": {
          "description": "time-varying value British spelling",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "Behaviour",
          "package": "sodium",
          "partial": "Behaviour",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#t:Behaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream of events. The individual firings of events are called 'event occurrences'.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "Event",
          "package": "sodium",
          "source": "src/FRP-Sodium-Plain.html#Event",
          "type": "type"
        },
        "index": {
          "description": "stream of events The individual firings of events are called event occurrences",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "Event",
          "package": "sodium",
          "partial": "Event",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhantom type for use with \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "Plain",
          "package": "sodium",
          "source": "src/FRP-Sodium-Plain.html#Plain",
          "type": "data"
        },
        "index": {
          "description": "Phantom type for use with Context type class",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "Plain",
          "package": "sodium",
          "partial": "Plain",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#t:Plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad for transactional reactive operations. Execute it from \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003esync\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "Reactive",
          "package": "sodium",
          "source": "src/FRP-Sodium-Plain.html#Reactive",
          "type": "type"
        },
        "index": {
          "description": "monad for transactional reactive operations Execute it from IO using sync",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "Reactive",
          "package": "sodium",
          "partial": "Reactive",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#t:Reactive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulate state changes given in the input event.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "accum",
          "package": "sodium",
          "signature": "a -\u003e Event (a -\u003e a) -\u003e Reactive (Behavior a)",
          "source": "src/FRP-Sodium-Plain.html#accum",
          "type": "function"
        },
        "index": {
          "description": "Accumulate state changes given in the input event",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "accum",
          "normalized": "a-\u003eEvent(a-\u003ea)-\u003eReactive(Behavior a)",
          "package": "sodium",
          "signature": "a-\u003eEvent(a-\u003ea)-\u003eReactive(Behavior a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:accum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: renamed to \u003ccode\u003e\u003ca\u003eupdates\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eAn event that gives the updates for the behavior. If the behavior was created\n with \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003e, then \u003ccode\u003e\u003ca\u003echanges\u003c/a\u003e\u003c/code\u003e gives you an event equivalent to the one that was held.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "changes",
          "package": "sodium",
          "signature": "Behavior a -\u003e Event a",
          "source": "src/FRP-Sodium-Plain.html#changes",
          "type": "function"
        },
        "index": {
          "description": "Deprecated renamed to updates An event that gives the updates for the behavior If the behavior was created with hold then changes gives you an event equivalent to the one that was held",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "changes",
          "normalized": "Behavior a-\u003eEvent a",
          "package": "sodium",
          "signature": "Behavior a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:changes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf there's more than one firing in a single transaction, combine them into\n one using the specified combining function.\n\u003c/p\u003e\u003cp\u003eIf the event firings are ordered, then the first will appear at the left\n input of the combining function. In most common cases it's best not to\n make any assumptions about the ordering, and the combining function would\n ideally be commutative.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "coalesce",
          "package": "sodium",
          "signature": "(a -\u003e a -\u003e a) -\u003e Event a -\u003e Event a",
          "source": "src/FRP-Sodium-Plain.html#coalesce",
          "type": "function"
        },
        "index": {
          "description": "If there more than one firing in single transaction combine them into one using the specified combining function If the event firings are ordered then the first will appear at the left input of the combining function In most common cases it best not to make any assumptions about the ordering and the combining function would ideally be commutative",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "coalesce",
          "normalized": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a",
          "package": "sodium",
          "signature": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:coalesce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a behavior with a generalized state loop (a mealy machine). The function\n is passed the input and the old state and returns the new state and output value.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "collect",
          "package": "sodium",
          "signature": "(a -\u003e s -\u003e (b, s)) -\u003e s -\u003e Behavior a -\u003e Reactive (Behavior b)",
          "source": "src/FRP-Sodium-Plain.html#collect",
          "type": "function"
        },
        "index": {
          "description": "Transform behavior with generalized state loop mealy machine The function is passed the input and the old state and returns the new state and output value",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "collect",
          "normalized": "(a-\u003eb-\u003e(c,b))-\u003eb-\u003eBehavior a-\u003eReactive(Behavior c)",
          "package": "sodium",
          "signature": "(a-\u003es-\u003e(b,s))-\u003es-\u003eBehavior a-\u003eReactive(Behavior b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform an event with a generalized state loop (a mealy machine). The function\n is passed the input and the old state and returns the new state and output value.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "collectE",
          "package": "sodium",
          "signature": "(a -\u003e s -\u003e (b, s)) -\u003e s -\u003e Event a -\u003e Reactive (Event b)",
          "source": "src/FRP-Sodium-Plain.html#collectE",
          "type": "function"
        },
        "index": {
          "description": "Transform an event with generalized state loop mealy machine The function is passed the input and the old state and returns the new state and output value",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "collectE",
          "normalized": "(a-\u003eb-\u003e(c,b))-\u003eb-\u003eEvent a-\u003eReactive(Event c)",
          "package": "sodium",
          "signature": "(a-\u003es-\u003e(b,s))-\u003es-\u003eEvent a-\u003eReactive(Event b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:collectE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: removing it in the pursuit of minimalism, replace with: accum 0 (const (1+) \u003ca\u003e$\u003c/a\u003e e)\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eCount event occurrences, giving a behavior that starts with 0 before the first occurrence.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "count",
          "package": "sodium",
          "signature": "Event a -\u003e Reactive (Behavior Int)",
          "source": "src/FRP-Sodium-Plain.html#count",
          "type": "function"
        },
        "index": {
          "description": "Deprecated removing it in the pursuit of minimalism replace with accum const Count event occurrences giving behavior that starts with before the first occurrence",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "count",
          "normalized": "Event a-\u003eReactive(Behavior Int)",
          "package": "sodium",
          "signature": "Event a-\u003eReactive(Behavior Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the specified \u003ccode\u003e\u003ca\u003eReactive\u003c/a\u003e\u003c/code\u003e action inside an event.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "execute",
          "package": "sodium",
          "signature": "Event (Reactive a) -\u003e Event a",
          "source": "src/FRP-Sodium-Plain.html#execute",
          "type": "function"
        },
        "index": {
          "description": "Execute the specified Reactive action inside an event",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "execute",
          "normalized": "Event(Reactive a)-\u003eEvent a",
          "package": "sodium",
          "signature": "Event(Reactive a)-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly keep event occurrences for which the predicate is true.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "filterE",
          "package": "sodium",
          "signature": "(a -\u003e Bool) -\u003e Event a -\u003e Event a",
          "source": "src/FRP-Sodium-Plain.html#filterE",
          "type": "function"
        },
        "index": {
          "description": "Only keep event occurrences for which the predicate is true",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "filterE",
          "normalized": "(a-\u003eBool)-\u003eEvent a-\u003eEvent a",
          "package": "sodium",
          "signature": "(a-\u003eBool)-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:filterE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap Just values, and discard event occurrences with Nothing values.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "filterJust",
          "package": "sodium",
          "signature": "Event (Maybe a) -\u003e Event a",
          "source": "src/FRP-Sodium-Plain.html#filterJust",
          "type": "function"
        },
        "index": {
          "description": "Unwrap Just values and discard event occurrences with Nothing values",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "filterJust",
          "normalized": "Event(Maybe a)-\u003eEvent a",
          "package": "sodium",
          "partial": "Just",
          "signature": "Event(Maybe a)-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:filterJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLet event occurrences through only when the behavior's value is True.\n Note that the behavior's value is as it was at the start of the transaction,\n that is, no state changes from the current transaction are taken into account.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "gate",
          "package": "sodium",
          "signature": "Event a -\u003e Behavior Bool -\u003e Event a",
          "source": "src/FRP-Sodium-Plain.html#gate",
          "type": "function"
        },
        "index": {
          "description": "Let event occurrences through only when the behavior value is True Note that the behavior value is as it was at the start of the transaction that is no state changes from the current transaction are taken into account",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "gate",
          "normalized": "Event a-\u003eBehavior Bool-\u003eEvent a",
          "package": "sodium",
          "signature": "Event a-\u003eBehavior Bool-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:gate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a behavior with the specified initial value, that gets updated\n by the values coming through the event. The 'current value' of the behavior\n is notionally the value as it was 'at the start of the transaction'.\n That is, state updates caused by event firings get processed at the end of\n the transaction.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "hold",
          "package": "sodium",
          "signature": "a -\u003e Event a -\u003e Reactive (Behavior a)",
          "source": "src/FRP-Sodium-Plain.html#hold",
          "type": "function"
        },
        "index": {
          "description": "Create behavior with the specified initial value that gets updated by the values coming through the event The current value of the behavior is notionally the value as it was at the start of the transaction That is state updates caused by event firings get processed at the end of the transaction",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "hold",
          "normalized": "a-\u003eEvent a-\u003eReactive(Behavior a)",
          "package": "sodium",
          "signature": "a-\u003eEvent a-\u003eReactive(Behavior a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:hold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eListen for firings of this event. The returned \u003ccode\u003eIO ()\u003c/code\u003e is an IO action\n that unregisters the listener. This is the observer pattern.\n\u003c/p\u003e\u003cp\u003eTo listen to a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e use \u003ccode\u003elisten (value b) handler\u003c/code\u003e or\n \u003ccode\u003elisten (updates b) handler\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNOTE: The callback is called with the transaction held, so you cannot\n use \u003ccode\u003e\u003ca\u003esync\u003c/a\u003e\u003c/code\u003e inside a listener. You can delegate to another thread and have\n that start the new transaction. If you want to do more processing in\n the same transction, then you can use \u003ccode\u003e\u003ca\u003elistenTrans\u003c/a\u003e\u003c/code\u003e\n but this is discouraged unless you really need to write a new primitive.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "listen",
          "package": "sodium",
          "signature": "Event a -\u003e (a -\u003e IO ()) -\u003e Reactive (IO ())",
          "source": "src/FRP-Sodium-Plain.html#listen",
          "type": "function"
        },
        "index": {
          "description": "Listen for firings of this event The returned IO is an IO action that unregisters the listener This is the observer pattern To listen to Behavior use listen value handler or listen updates handler NOTE The callback is called with the transaction held so you cannot use sync inside listener You can delegate to another thread and have that start the new transaction If you want to do more processing in the same transction then you can use listenTrans but this is discouraged unless you really need to write new primitive",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "listen",
          "normalized": "Event a-\u003e(a-\u003eIO())-\u003eReactive(IO())",
          "package": "sodium",
          "signature": "Event a-\u003e(a-\u003eIO())-\u003eReactive(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two streams of events of the same type.\n\u003c/p\u003e\u003cp\u003eIn the case where two event occurrences are simultaneous (i.e. both\n within the same transaction), both will be delivered in the same\n transaction. If the event firings are ordered for some reason, then\n their ordering is retained. In many common cases the ordering will\n be undefined.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "merge",
          "package": "sodium",
          "signature": "Event a -\u003e Event a -\u003e Event a",
          "source": "src/FRP-Sodium-Plain.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merge two streams of events of the same type In the case where two event occurrences are simultaneous i.e both within the same transaction both will be delivered in the same transaction If the event firings are ordered for some reason then their ordering is retained In many common cases the ordering will be undefined",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "merge",
          "normalized": "Event a-\u003eEvent a-\u003eEvent a",
          "package": "sodium",
          "signature": "Event a-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two streams of events of the same type, combining simultaneous\n event occurrences.\n\u003c/p\u003e\u003cp\u003eIn the case where multiple event occurrences are simultaneous (i.e. all\n within the same transaction), they are combined using the supplied\n function. The output event is guaranteed not to have more than one\n event occurrence per transaction.\n\u003c/p\u003e\u003cp\u003eThe combine function should be commutative, because simultaneous events\n should be considered to be order-agnostic.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "mergeWith",
          "package": "sodium",
          "signature": "(a -\u003e a -\u003e a) -\u003e Event a -\u003e Event a -\u003e Event a",
          "source": "src/FRP-Sodium-Plain.html#mergeWith",
          "type": "function"
        },
        "index": {
          "description": "Merge two streams of events of the same type combining simultaneous event occurrences In the case where multiple event occurrences are simultaneous i.e all within the same transaction they are combined using the supplied function The output event is guaranteed not to have more than one event occurrence per transaction The combine function should be commutative because simultaneous events should be considered to be order-agnostic",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "mergeWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a-\u003eEvent a",
          "package": "sodium",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:mergeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event that never fires.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "never",
          "package": "sodium",
          "signature": "Event a",
          "source": "src/FRP-Sodium-Plain.html#never",
          "type": "function"
        },
        "index": {
          "description": "An event that never fires",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "never",
          "package": "sodium",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e along with an action to push changes into it.\n American spelling.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "newBehavior",
          "package": "sodium",
          "signature": "a-\u003e Reactive (Behavior a, a -\u003e Reactive ())",
          "type": "function"
        },
        "index": {
          "description": "Create new Behavior along with an action to push changes into it American spelling",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "newBehavior",
          "normalized": "a-\u003eReactive(Behavior a,a-\u003eReactive())",
          "package": "sodium",
          "partial": "Behavior",
          "signature": "a-\u003eReactive(Behavior a,a-\u003eReactive())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:newBehavior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e along with an action to push changes into it.\n British spelling.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "newBehaviour",
          "package": "sodium",
          "signature": "a-\u003e Reactive (Behavior a, a -\u003e Reactive ())",
          "type": "function"
        },
        "index": {
          "description": "Create new Behavior along with an action to push changes into it British spelling",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "newBehaviour",
          "normalized": "a-\u003eReactive(Behavior a,a-\u003eReactive())",
          "package": "sodium",
          "partial": "Behaviour",
          "signature": "a-\u003eReactive(Behavior a,a-\u003eReactive())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:newBehaviour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow away all event occurrences except for the first one.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "once",
          "package": "sodium",
          "signature": "Event a -\u003e Event a",
          "source": "src/FRP-Sodium-Plain.html#once",
          "type": "function"
        },
        "index": {
          "description": "Throw away all event occurrences except for the first one",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "once",
          "normalized": "Event a-\u003eEvent a",
          "package": "sodium",
          "signature": "Event a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:once"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the current value of a behavior.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "sample",
          "package": "sodium",
          "signature": "Behavior a -\u003e Reactive a",
          "source": "src/FRP-Sodium-Plain.html#sample",
          "type": "function"
        },
        "index": {
          "description": "Obtain the current value of behavior",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "sample",
          "normalized": "Behavior a-\u003eReactive a",
          "package": "sodium",
          "signature": "Behavior a-\u003eReactive a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample the behavior at the time of the event firing. Note that the 'current value'\n of the behavior that's sampled is the value as at the start of the transaction\n before any state changes of the current transaction are applied through \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "snapshot",
          "package": "sodium",
          "signature": "(a -\u003e b -\u003e c) -\u003e Event a -\u003e Behavior b -\u003e Event c",
          "source": "src/FRP-Sodium-Plain.html#snapshot",
          "type": "function"
        },
        "index": {
          "description": "Sample the behavior at the time of the event firing Note that the current value of the behavior that sampled is the value as at the start of the transaction before any state changes of the current transaction are applied through hold",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "snapshot",
          "normalized": "(a-\u003eb-\u003ec)-\u003eEvent a-\u003eBehavior b-\u003eEvent c",
          "package": "sodium",
          "signature": "(a-\u003eb-\u003ec)-\u003eEvent a-\u003eBehavior b-\u003eEvent c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:snapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: renamed to \u003ccode\u003e\u003ca\u003esnapshot\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eSample the behavior at the time of the event firing. Note that the 'current value'\n of the behavior that's sampled is the value as at the start of the transaction\n before any state changes of the current transaction are applied through \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "snapshotWith",
          "package": "sodium",
          "signature": "(a -\u003e b -\u003e c) -\u003e Event a -\u003e Behavior b -\u003e Event c",
          "source": "src/FRP-Sodium-Plain.html#snapshotWith",
          "type": "function"
        },
        "index": {
          "description": "Deprecated renamed to snapshot Sample the behavior at the time of the event firing Note that the current value of the behavior that sampled is the value as at the start of the transaction before any state changes of the current transaction are applied through hold",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "snapshotWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eEvent a-\u003eBehavior b-\u003eEvent c",
          "package": "sodium",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eEvent a-\u003eBehavior b-\u003eEvent c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:snapshotWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake each list item and put it into a new transaction of its own.\n\u003c/p\u003e\u003cp\u003eAn example use case of this might be a situation where we are splitting\n a block of input data into frames. We obviously want each frame to have\n its own transaction so that state is updated separately each frame.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "split",
          "package": "sodium",
          "signature": "Event [a] -\u003e Event a",
          "source": "src/FRP-Sodium-Plain.html#split",
          "type": "function"
        },
        "index": {
          "description": "Take each list item and put it into new transaction of its own An example use case of this might be situation where we are splitting block of input data into frames We obviously want each frame to have its own transaction so that state is updated separately each frame",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "split",
          "normalized": "Event[a]-\u003eEvent a",
          "package": "sodium",
          "signature": "Event[a]-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap a behavior inside another behavior to give a time-varying behavior implementation.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "switch",
          "package": "sodium",
          "signature": "Behavior (Behavior a) -\u003e Reactive (Behavior a)",
          "source": "src/FRP-Sodium-Plain.html#switch",
          "type": "function"
        },
        "index": {
          "description": "Unwrap behavior inside another behavior to give time-varying behavior implementation",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "switch",
          "normalized": "Behavior(Behavior a)-\u003eReactive(Behavior a)",
          "package": "sodium",
          "signature": "Behavior(Behavior a)-\u003eReactive(Behavior a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap an event inside a behavior to give a time-varying event implementation.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "switchE",
          "package": "sodium",
          "signature": "Behavior (Event a) -\u003e Event a",
          "source": "src/FRP-Sodium-Plain.html#switchE",
          "type": "function"
        },
        "index": {
          "description": "Unwrap an event inside behavior to give time-varying event implementation",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "switchE",
          "normalized": "Behavior(Event a)-\u003eEvent a",
          "package": "sodium",
          "signature": "Behavior(Event a)-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:switchE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the specified \u003ccode\u003e\u003ca\u003eReactive\u003c/a\u003e\u003c/code\u003e within a new transaction, blocking the caller\n until all resulting processing is complete and all callbacks have been called.\n This operation is thread-safe, so it may be called from any thread.\n\u003c/p\u003e\u003cp\u003eState changes to \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003e values occur after processing of the transaction is complete.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "sync",
          "package": "sodium",
          "signature": "Reactive a -\u003e IO a",
          "source": "src/FRP-Sodium-Plain.html#sync",
          "type": "function"
        },
        "index": {
          "description": "Execute the specified Reactive within new transaction blocking the caller until all resulting processing is complete and all callbacks have been called This operation is thread-safe so it may be called from any thread State changes to hold values occur after processing of the transaction is complete",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "sync",
          "normalized": "Reactive a-\u003eIO a",
          "package": "sodium",
          "signature": "Reactive a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:sync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event that gives the updates for the behavior. If the behavior was created\n with \u003ccode\u003e\u003ca\u003ehold\u003c/a\u003e\u003c/code\u003e, then \u003ccode\u003e\u003ca\u003eupdates\u003c/a\u003e\u003c/code\u003e gives you an event equivalent to the one that was held.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "updates",
          "package": "sodium",
          "signature": "Behavior a -\u003e Event a",
          "source": "src/FRP-Sodium-Plain.html#updates",
          "type": "function"
        },
        "index": {
          "description": "An event that gives the updates for the behavior If the behavior was created with hold then updates gives you an event equivalent to the one that was held",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "updates",
          "normalized": "Behavior a-\u003eEvent a",
          "package": "sodium",
          "signature": "Behavior a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event that is guaranteed to fire once when you listen to it, giving\n the current value of the behavior, and thereafter behaves like \u003ccode\u003e\u003ca\u003eupdates\u003c/a\u003e\u003c/code\u003e,\n firing for each update to the behavior's value.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "value",
          "package": "sodium",
          "signature": "Behavior a -\u003e Event a",
          "source": "src/FRP-Sodium-Plain.html#value",
          "type": "function"
        },
        "index": {
          "description": "An event that is guaranteed to fire once when you listen to it giving the current value of the behavior and thereafter behaves like updates firing for each update to the behavior value",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "value",
          "normalized": "Behavior a-\u003eEvent a",
          "package": "sodium",
          "signature": "Behavior a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: renamed to \u003ccode\u003e\u003ca\u003evalue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eAn event that is guaranteed to fire once when you listen to it, giving\n the current value of the behavior, and thereafter behaves like \u003ccode\u003e\u003ca\u003echanges\u003c/a\u003e\u003c/code\u003e,\n firing for each update to the behavior's value.\n\u003c/p\u003e",
          "module": "FRP.Sodium",
          "name": "values",
          "package": "sodium",
          "signature": "Behavior a -\u003e Event a",
          "source": "src/FRP-Sodium-Plain.html#values",
          "type": "function"
        },
        "index": {
          "description": "Deprecated renamed to value An event that is guaranteed to fire once when you listen to it giving the current value of the behavior and thereafter behaves like changes firing for each update to the behavior value",
          "hierarchy": "FRP Sodium",
          "module": "FRP.Sodium",
          "name": "values",
          "normalized": "Behavior a-\u003eEvent a",
          "package": "sodium",
          "signature": "Behavior a-\u003eEvent a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sodium/docs/FRP-Sodium.html#v:values"
      }
    }
  ]
]