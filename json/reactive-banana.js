[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Control-Event-Handler.html#",
      "description": {
        "fct-module": "Control.Event.Handler",
        "fct-package": "reactive-banana",
        "fct-signature": "module",
        "fct-source": "src/Control-Event-Handler.html",
        "fct-type": "module",
        "title": "Handler"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Event Handler",
        "module": "Control.Event.Handler",
        "name": "Handler",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Control-Event-Handler.html#t:AddHandler",
      "description": {
        "fct-descr": "\u003cp\u003eA value of type \u003ccode\u003eAddhandler a\u003c/code\u003e is a facility for registering\n event handlers. These will be called whenever the event occurs.\n\u003c/p\u003e\u003cp\u003eWhen registering an event handler, you will also be given an action\n that unregisters this handler again.\n\u003c/p\u003e\u003cpre\u003e do unregisterMyHandler \u003c- register addHandler myHandler\n\u003c/pre\u003e",
        "fct-module": "Control.Event.Handler",
        "fct-package": "reactive-banana",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Event-Handler.html#AddHandler",
        "fct-type": "newtype",
        "title": "AddHandler"
      },
      "index": {
        "description": "value of type Addhandler is facility for registering event handlers These will be called whenever the event occurs When registering an event handler you will also be given an action that unregisters this handler again do unregisterMyHandler register addHandler myHandler",
        "hierarchy": "Control Event Handler",
        "module": "Control.Event.Handler",
        "name": "AddHandler",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Add Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Control-Event-Handler.html#t:Handler",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003cem\u003eevent handler\u003c/em\u003e is a function that takes an\n \u003cem\u003eevent value\u003c/em\u003e and performs some computation.\n\u003c/p\u003e",
        "fct-module": "Control.Event.Handler",
        "fct-package": "reactive-banana",
        "fct-signature": "type",
        "fct-source": "src/Control-Event-Handler.html#Handler",
        "fct-type": "type",
        "title": "Handler"
      },
      "index": {
        "description": "An event handler is function that takes an event value and performs some computation",
        "hierarchy": "Control Event Handler",
        "module": "Control.Event.Handler",
        "name": "Handler",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Control-Event-Handler.html#v:AddHandler",
      "description": {
        "fct-module": "Control.Event.Handler",
        "fct-package": "reactive-banana",
        "fct-signature": "AddHandler",
        "fct-source": "src/Control-Event-Handler.html#AddHandler",
        "fct-type": "function",
        "title": "AddHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Event Handler",
        "module": "Control.Event.Handler",
        "name": "AddHandler",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Add Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Control-Event-Handler.html#v:filterIO",
      "description": {
        "fct-descr": "\u003cp\u003eFilter event values that don't return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Event.Handler",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e IO Bool) -\u003e AddHandler a -\u003e AddHandler a",
        "fct-source": "src/Control-Event-Handler.html#filterIO",
        "fct-type": "function",
        "title": "filterIO"
      },
      "index": {
        "description": "Filter event values that don return True",
        "hierarchy": "Control Event Handler",
        "module": "Control.Event.Handler",
        "name": "filterIO",
        "normalized": "(a-\u003eIO Bool)-\u003eAddHandler a-\u003eAddHandler a",
        "package": "reactive-banana",
        "partial": "IO",
        "signature": "(a-\u003eIO Bool)-\u003eAddHandler a-\u003eAddHandler a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Control-Event-Handler.html#v:mapIO",
      "description": {
        "fct-descr": "\u003cp\u003eMap the event value with an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
        "fct-module": "Control.Event.Handler",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e IO b) -\u003e AddHandler a -\u003e AddHandler b",
        "fct-source": "src/Control-Event-Handler.html#mapIO",
        "fct-type": "function",
        "title": "mapIO"
      },
      "index": {
        "description": "Map the event value with an IO action",
        "hierarchy": "Control Event Handler",
        "module": "Control.Event.Handler",
        "name": "mapIO",
        "normalized": "(a-\u003eIO b)-\u003eAddHandler a-\u003eAddHandler b",
        "package": "reactive-banana",
        "partial": "IO",
        "signature": "(a-\u003eIO b)-\u003eAddHandler a-\u003eAddHandler b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Control-Event-Handler.html#v:newAddHandler",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a facility to register and unregister event handlers.\n Also yields a function that takes an event handler and runs all the registered\n handlers.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e do\n     (addHandler, fire) \u003c- newAddHandler\n     register addHandler putStrLn\n     fire \"Hello!\"\n\u003c/pre\u003e",
        "fct-module": "Control.Event.Handler",
        "fct-package": "reactive-banana",
        "fct-signature": "IO (AddHandler a, Handler a)",
        "fct-source": "src/Control-Event-Handler.html#newAddHandler",
        "fct-type": "function",
        "title": "newAddHandler"
      },
      "index": {
        "description": "Build facility to register and unregister event handlers Also yields function that takes an event handler and runs all the registered handlers Example do addHandler fire newAddHandler register addHandler putStrLn fire Hello",
        "hierarchy": "Control Event Handler",
        "module": "Control.Event.Handler",
        "name": "newAddHandler",
        "normalized": "IO(AddHandler a,Handler a)",
        "package": "reactive-banana",
        "partial": "Add Handler",
        "signature": "IO(AddHandler a,Handler a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Control-Event-Handler.html#v:register",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Event.Handler",
        "fct-package": "reactive-banana",
        "fct-signature": "Handler a -\u003e IO (IO ())",
        "fct-source": "src/Control-Event-Handler.html#AddHandler",
        "fct-type": "function",
        "title": "register"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Event Handler",
        "module": "Control.Event.Handler",
        "name": "register",
        "normalized": "Handler a-\u003eIO(IO())",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Handler a-\u003eIO(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#",
      "description": {
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "module",
        "fct-source": "src/Reactive-Banana-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#t:Behavior",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eBehavior t a\u003c/code\u003e represents a value that varies in time. Think of it as\n\u003c/p\u003e\u003cpre\u003e type Behavior t a = Time -\u003e a\n\u003c/pre\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "data",
        "fct-source": "src/Reactive-Banana-Types.html#Behavior",
        "fct-type": "data",
        "title": "Behavior"
      },
      "index": {
        "description": "Behavior represents value that varies in time Think of it as type Behavior Time",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "Behavior",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Behavior",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eEvent t a\u003c/code\u003e represents a stream of events as they occur in time.\nSemantically, you can think of \u003ccode\u003eEvent t a\u003c/code\u003e as an infinite list of values\nthat are tagged with their corresponding time of occurence,\n\u003c/p\u003e\u003cpre\u003e type Event t a = [(Time,a)]\n\u003c/pre\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "data",
        "fct-source": "src/Reactive-Banana-Types.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "Event represents stream of events as they occur in time Semantically you can think of Event as an infinite list of values that are tagged with their corresponding time of occurence type Event Time",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "Event",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:-60--64-",
      "description": {
        "fct-descr": "\u003cp\u003eTag all event occurrences with a time-varying value. Similar to \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e infixl 4 \u003c@\n\u003c/pre\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior t b -\u003e Event t a -\u003e Event t b",
        "fct-source": "src/Reactive-Banana-Combinators.html#%3C%40",
        "fct-type": "function",
        "title": "(\u003c@)"
      },
      "index": {
        "description": "Tag all event occurrences with time-varying value Similar to infixl",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "(\u003c@) \u003c@",
        "normalized": "Behavior a b-\u003eEvent a c-\u003eEvent a b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Behavior t b-\u003eEvent t a-\u003eEvent t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:-60--64--62-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix synonym for the \u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e combinator. Similar to \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e infixl 4 \u003c@\u003e\n\u003c/pre\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior t (a -\u003e b) -\u003e Event t a -\u003e Event t b",
        "fct-source": "src/Reactive-Banana-Combinators.html#%3C%40%3E",
        "fct-type": "function",
        "title": "(\u003c@\u003e)"
      },
      "index": {
        "description": "Infix synonym for the apply combinator Similar to infixl",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "(\u003c@\u003e) \u003c@\u003e",
        "normalized": "Behavior a(b-\u003ec)-\u003eEvent a b-\u003eEvent a c",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Behavior t(a-\u003eb)-\u003eEvent t a-\u003eEvent t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:accumB",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eaccumB\u003c/a\u003e\u003c/code\u003e function is similar to a \u003cem\u003estrict\u003c/em\u003e left fold, \u003ccode\u003efoldl'\u003c/code\u003e.\n It starts with an initial value and combines it with incoming events.\n For example, think\n\u003c/p\u003e\u003cpre\u003e accumB \"x\" [(time1,(++\"y\")),(time2,(++\"z\"))]\n    = stepper \"x\" [(time1,\"xy\"),(time2,\"xyz\")]\n\u003c/pre\u003e\u003cp\u003eNote that the value of the behavior changes \"slightly after\"\n the events occur. This allows for recursive definitions.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "a -\u003e Event t (a -\u003e a) -\u003e Behavior t a",
        "fct-source": "src/Reactive-Banana-Combinators.html#accumB",
        "fct-type": "function",
        "title": "accumB"
      },
      "index": {
        "description": "The accumB function is similar to strict left fold foldl It starts with an initial value and combines it with incoming events For example think accumB time1 time2 stepper time1 xy time2 xyz Note that the value of the behavior changes slightly after the events occur This allows for recursive definitions",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "accumB",
        "normalized": "a-\u003eEvent b(a-\u003ea)-\u003eBehavior b a",
        "package": "reactive-banana",
        "partial": "",
        "signature": "a-\u003eEvent t(a-\u003ea)-\u003eBehavior t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:accumE",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eaccumE\u003c/a\u003e\u003c/code\u003e function accumulates a stream of events.\n Example:\n\u003c/p\u003e\u003cpre\u003e accumE \"x\" [(time1,(++\"y\")),(time2,(++\"z\"))]\n    = [(time1,\"xy\"),(time2,\"xyz\")]\n\u003c/pre\u003e\u003cp\u003eNote that the output events are simultaneous with the input events,\n there is no \"delay\" like in the case of \u003ccode\u003e\u003ca\u003eaccumB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "a -\u003e Event t (a -\u003e a) -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Combinators.html#accumE",
        "fct-type": "function",
        "title": "accumE"
      },
      "index": {
        "description": "The accumE function accumulates stream of events Example accumE time1 time2 time1 xy time2 xyz Note that the output events are simultaneous with the input events there is no delay like in the case of accumB",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "accumE",
        "normalized": "a-\u003eEvent b(a-\u003ea)-\u003eEvent b a",
        "package": "reactive-banana",
        "partial": "",
        "signature": "a-\u003eEvent t(a-\u003ea)-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:apply",
      "description": {
        "fct-descr": "\u003cp\u003eApply a time-varying function to a stream of events.\n Think of it as\n\u003c/p\u003e\u003cpre\u003e apply bf ex = [(time, bf time x) | (time, x) \u003c- ex]\n\u003c/pre\u003e\u003cp\u003eThis function is generally used in its infix variant \u003ccode\u003e\u003ca\u003e\u003c@\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior t (a -\u003e b) -\u003e Event t a -\u003e Event t b",
        "fct-source": "src/Reactive-Banana-Combinators.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "Apply time-varying function to stream of events Think of it as apply bf ex time bf time time ex This function is generally used in its infix variant",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "apply",
        "normalized": "Behavior a(b-\u003ec)-\u003eEvent a b-\u003eEvent a c",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Behavior t(a-\u003eb)-\u003eEvent t a-\u003eEvent t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:calm",
      "description": {
        "fct-descr": "\u003cp\u003eKeep only the last occurrence when simultaneous occurrences happen.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "Event t a -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Combinators.html#calm",
        "fct-type": "function",
        "title": "calm"
      },
      "index": {
        "description": "Keep only the last occurrence when simultaneous occurrences happen",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "calm",
        "normalized": "Event a b-\u003eEvent a b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Event t a-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:collect",
      "description": {
        "fct-descr": "\u003cp\u003eCollect simultaneous event occurences.\n The result will never contain an empty list.\n Example:\n\u003c/p\u003e\u003cpre\u003e collect [(time1, e1), (time1, e2)] = [(time1, [e1,e2])]\n\u003c/pre\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "Event t a -\u003e Event t [a]",
        "fct-source": "src/Reactive-Banana-Combinators.html#collect",
        "fct-type": "function",
        "title": "collect"
      },
      "index": {
        "description": "Collect simultaneous event occurences The result will never contain an empty list Example collect time1 e1 time1 e2 time1 e1 e2",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "collect",
        "normalized": "Event a b-\u003eEvent a[b]",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Event t a-\u003eEvent t[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:filterApply",
      "description": {
        "fct-descr": "\u003cp\u003eAllow all events that fulfill the time-varying predicate, discard the rest.\n Generalization of \u003ccode\u003e\u003ca\u003efilterE\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior t (a -\u003e Bool) -\u003e Event t a -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Combinators.html#filterApply",
        "fct-type": "function",
        "title": "filterApply"
      },
      "index": {
        "description": "Allow all events that fulfill the time-varying predicate discard the rest Generalization of filterE",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "filterApply",
        "normalized": "Behavior a(b-\u003eBool)-\u003eEvent a b-\u003eEvent a b",
        "package": "reactive-banana",
        "partial": "Apply",
        "signature": "Behavior t(a-\u003eBool)-\u003eEvent t a-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:filterE",
      "description": {
        "fct-descr": "\u003cp\u003eAllow all events that fulfill the predicate, discard the rest.\n Think of it as\n\u003c/p\u003e\u003cpre\u003e filterE p es = [(time,a) | (time,a) \u003c- es, p a]\n\u003c/pre\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e Bool) -\u003e Event t a -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Combinators.html#filterE",
        "fct-type": "function",
        "title": "filterE"
      },
      "index": {
        "description": "Allow all events that fulfill the predicate discard the rest Think of it as filterE es time time es",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "filterE",
        "normalized": "(a-\u003eBool)-\u003eEvent b a-\u003eEvent b a",
        "package": "reactive-banana",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eEvent t a-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:filterJust",
      "description": {
        "fct-descr": "\u003cp\u003eAllow all event occurrences that are \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e values, discard the rest.\n Variant of \u003ccode\u003e\u003ca\u003efilterE\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "Event t (Maybe a) -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Combinators.html#filterJust",
        "fct-type": "function",
        "title": "filterJust"
      },
      "index": {
        "description": "Allow all event occurrences that are Just values discard the rest Variant of filterE",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "filterJust",
        "normalized": "Event a(Maybe b)-\u003eEvent a b",
        "package": "reactive-banana",
        "partial": "Just",
        "signature": "Event t(Maybe a)-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:interpret",
      "description": {
        "fct-descr": "\u003cp\u003eInterpret an event processing function.\n Useful for testing.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "(forall t.  Event t a -\u003e Event t b) -\u003e [[a]] -\u003e IO [[b]]",
        "fct-source": "src/Reactive-Banana-Combinators.html#interpret",
        "fct-type": "function",
        "title": "interpret"
      },
      "index": {
        "description": "Interpret an event processing function Useful for testing",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "interpret",
        "normalized": "(a b Event c d-\u003eEvent c e)-\u003e[[d]]-\u003eIO[[e]]",
        "package": "reactive-banana",
        "partial": "",
        "signature": "(forall t. Event t a-\u003eEvent t b)-\u003e[[a]]-\u003eIO[[b]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:mapAccum",
      "description": {
        "fct-descr": "\u003cp\u003eEfficient combination of \u003ccode\u003e\u003ca\u003eaccumE\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eaccumB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "acc -\u003e Event t (acc -\u003e (x, acc)) -\u003e (Event t x, Behavior t acc)",
        "fct-source": "src/Reactive-Banana-Combinators.html#mapAccum",
        "fct-type": "function",
        "title": "mapAccum"
      },
      "index": {
        "description": "Efficient combination of accumE and accumB",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "mapAccum",
        "normalized": "a-\u003eEvent b(a-\u003e(c,a))-\u003e(Event b c,Behavior b a)",
        "package": "reactive-banana",
        "partial": "Accum",
        "signature": "acc-\u003eEvent t(acc-\u003e(x,acc))-\u003e(Event t x,Behavior t acc)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:never",
      "description": {
        "fct-descr": "\u003cp\u003eEvent that never occurs.\n Think of it as \u003ccode\u003enever = []\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "Event t a",
        "fct-source": "src/Reactive-Banana-Combinators.html#never",
        "fct-type": "function",
        "title": "never"
      },
      "index": {
        "description": "Event that never occurs Think of it as never",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "never",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:spill",
      "description": {
        "fct-descr": "\u003cp\u003eEmit simultaneous event occurrences.\n The first element in the list will be emitted first, and so on.\n\u003c/p\u003e\u003cp\u003eUp to strictness, we have\n\u003c/p\u003e\u003cpre\u003e spill . collect = id\n\u003c/pre\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "Event t [a] -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Combinators.html#spill",
        "fct-type": "function",
        "title": "spill"
      },
      "index": {
        "description": "Emit simultaneous event occurrences The first element in the list will be emitted first and so on Up to strictness we have spill collect id",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "spill",
        "normalized": "Event a[b]-\u003eEvent a b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Event t[a]-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eSplit event occurrences according to a tag.\n The \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e values go into the left component while the \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e values\n go into the right component of the result.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "Event t (Either a b) -\u003e (Event t a, Event t b)",
        "fct-source": "src/Reactive-Banana-Combinators.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Split event occurrences according to tag The Left values go into the left component while the Right values go into the right component of the result",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "split",
        "normalized": "Event a(Either b c)-\u003e(Event a b,Event a c)",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Event t(Either a b)-\u003e(Event t a,Event t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:stepper",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a time-varying function from an initial value and \n a stream of new values. Think of it as\n\u003c/p\u003e\u003cpre\u003e stepper x0 ex = \\time -\u003e last (x0 : [x | (timex,x) \u003c- ex, timex \u003c time])\n\u003c/pre\u003e\u003cp\u003eNote that the smaller-than-sign in the comparision \u003ccode\u003etimex \u003c time\u003c/code\u003e means \n that the value of the behavior changes \"slightly after\"\n the event occurrences. This allows for recursive definitions.\n\u003c/p\u003e\u003cp\u003eAlso note that in the case of simultaneous occurrences,\n only the last one is kept.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "a -\u003e Event t a -\u003e Behavior t a",
        "fct-source": "src/Reactive-Banana-Combinators.html#stepper",
        "fct-type": "function",
        "title": "stepper"
      },
      "index": {
        "description": "Construct time-varying function from an initial value and stream of new values Think of it as stepper x0 ex time last x0 timex ex timex time Note that the smaller-than-sign in the comparision timex time means that the value of the behavior changes slightly after the event occurrences This allows for recursive definitions Also note that in the case of simultaneous occurrences only the last one is kept",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "stepper",
        "normalized": "a-\u003eEvent b a-\u003eBehavior b a",
        "package": "reactive-banana",
        "partial": "",
        "signature": "a-\u003eEvent t a-\u003eBehavior t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two event streams of the same type.\n In case of simultaneous occurrences, the left argument comes first.\n Think of it as\n\u003c/p\u003e\u003cpre\u003e union ((timex,x):xs) ((timey,y):ys)\n    | timex \u003c= timey = (timex,x) : union xs ((timey,y):ys)\n    | timex \u003e  timey = (timey,y) : union ((timex,x):xs) ys\n\u003c/pre\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "Event t a -\u003e Event t a -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Combinators.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Merge two event streams of the same type In case of simultaneous occurrences the left argument comes first Think of it as union timex xs timey ys timex timey timex union xs timey ys timex timey timey union timex xs ys",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "union",
        "normalized": "Event a b-\u003eEvent a b-\u003eEvent a b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Event t a-\u003eEvent t a-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003eCombine simultaneous event occurrences into a single occurrence.\n\u003c/p\u003e\u003cpre\u003e unionWith f e1 e2 = fmap (foldr1 f) \u003c$\u003e collect (e1 `union` e2)\n\u003c/pre\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Event t a -\u003e Event t a -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Combinators.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "Combine simultaneous event occurrences into single occurrence unionWith e1 e2 fmap foldr1 collect e1 union e2",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eEvent b a-\u003eEvent b a-\u003eEvent b a",
        "package": "reactive-banana",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eEvent t a-\u003eEvent t a-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eMerge several event streams of the same type.\n\u003c/p\u003e\u003cpre\u003e unions = foldr union never\n\u003c/pre\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "[Event t a] -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Combinators.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "Merge several event streams of the same type unions foldr union never",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "unions",
        "normalized": "[Event a b]-\u003eEvent a b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "[Event t a]-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Combinators.html#v:whenE",
      "description": {
        "fct-descr": "\u003cp\u003eAllow events only when the behavior is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n Variant of \u003ccode\u003e\u003ca\u003efilterApply\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Combinators",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior t Bool -\u003e Event t a -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Combinators.html#whenE",
        "fct-type": "function",
        "title": "whenE"
      },
      "index": {
        "description": "Allow events only when the behavior is True Variant of filterApply",
        "hierarchy": "Reactive Banana Combinators",
        "module": "Reactive.Banana.Combinators",
        "name": "whenE",
        "normalized": "Behavior a Bool-\u003eEvent a b-\u003eEvent a b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Behavior t Bool-\u003eEvent t a-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#",
      "description": {
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "module",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html",
        "fct-type": "module",
        "title": "Calm"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "Calm",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Calm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#t:Behavior",
      "description": {
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "type",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html#Behavior",
        "fct-type": "type",
        "title": "Behavior"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "Behavior",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Behavior",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#t:Event",
      "description": {
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "data",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "Event",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#v:-60--64-",
      "description": {
        "fct-descr": "\u003cp\u003eTag all event occurrences with a time-varying value. Similar to \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior t a -\u003e Event t b -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html#%3C%40",
        "fct-type": "function",
        "title": "(\u003c@)"
      },
      "index": {
        "description": "Tag all event occurrences with time-varying value Similar to",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "(\u003c@) \u003c@",
        "normalized": "Behavior a b-\u003eEvent a c-\u003eEvent a b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Behavior t a-\u003eEvent t b-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#v:-60--64--62-",
      "description": {
        "fct-descr": "\u003cp\u003eInfix synonym for the \u003ccode\u003e\u003ca\u003eapply\u003c/a\u003e\u003c/code\u003e combinator. Similar to \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior t (a -\u003e b) -\u003e Event t a -\u003e Event t b",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html#%3C%40%3E",
        "fct-type": "function",
        "title": "(\u003c@\u003e)"
      },
      "index": {
        "description": "Infix synonym for the apply combinator Similar to",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "(\u003c@\u003e) \u003c@\u003e",
        "normalized": "Behavior a(b-\u003ec)-\u003eEvent a b-\u003eEvent a c",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Behavior t(a-\u003eb)-\u003eEvent t a-\u003eEvent t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#v:accumB",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eaccumB\u003c/a\u003e\u003c/code\u003e function is similar to a \u003cem\u003estrict\u003c/em\u003e left fold, \u003ccode\u003efoldl'\u003c/code\u003e.\n It starts with an initial value and combines it with incoming events.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "a -\u003e Event t (a -\u003e a) -\u003e Behavior t a",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html#accumB",
        "fct-type": "function",
        "title": "accumB"
      },
      "index": {
        "description": "The accumB function is similar to strict left fold foldl It starts with an initial value and combines it with incoming events",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "accumB",
        "normalized": "a-\u003eEvent b(a-\u003ea)-\u003eBehavior b a",
        "package": "reactive-banana",
        "partial": "",
        "signature": "a-\u003eEvent t(a-\u003ea)-\u003eBehavior t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#v:accumE",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eaccumE\u003c/a\u003e\u003c/code\u003e function accumulates a stream of events.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "a -\u003e Event t (a -\u003e a) -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html#accumE",
        "fct-type": "function",
        "title": "accumE"
      },
      "index": {
        "description": "The accumE function accumulates stream of events",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "accumE",
        "normalized": "a-\u003eEvent b(a-\u003ea)-\u003eEvent b a",
        "package": "reactive-banana",
        "partial": "",
        "signature": "a-\u003eEvent t(a-\u003ea)-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#v:apply",
      "description": {
        "fct-descr": "\u003cp\u003eApply a time-varying function to a stream of events.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior t (a -\u003e b) -\u003e Event t a -\u003e Event t b",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "Apply time-varying function to stream of events",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "apply",
        "normalized": "Behavior a(b-\u003ec)-\u003eEvent a b-\u003eEvent a c",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Behavior t(a-\u003eb)-\u003eEvent t a-\u003eEvent t b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#v:collect",
      "description": {
        "fct-descr": "\u003cp\u003eConvert event with possible simultaneous occurrences\n into an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e with a single occurrence.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "Event t a -\u003e Event t [a]",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html#collect",
        "fct-type": "function",
        "title": "collect"
      },
      "index": {
        "description": "Convert event with possible simultaneous occurrences into an Event with single occurrence",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "collect",
        "normalized": "Event a b-\u003eEvent a[b]",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Event t a-\u003eEvent t[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#v:filterE",
      "description": {
        "fct-descr": "\u003cp\u003eAllow all events that fulfill the predicate, discard the rest.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e Bool) -\u003e Event t a -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html#filterE",
        "fct-type": "function",
        "title": "filterE"
      },
      "index": {
        "description": "Allow all events that fulfill the predicate discard the rest",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "filterE",
        "normalized": "(a-\u003eBool)-\u003eEvent b a-\u003eEvent b a",
        "package": "reactive-banana",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eEvent t a-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#v:filterJust",
      "description": {
        "fct-descr": "\u003cp\u003eKeep only the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e values.\n Variant of \u003ccode\u003e\u003ca\u003efilterE\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "Event t (Maybe a) -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html#filterJust",
        "fct-type": "function",
        "title": "filterJust"
      },
      "index": {
        "description": "Keep only the Just values Variant of filterE",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "filterJust",
        "normalized": "Event a(Maybe b)-\u003eEvent a b",
        "package": "reactive-banana",
        "partial": "Just",
        "signature": "Event t(Maybe a)-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#v:fromCalm",
      "description": {
        "fct-descr": "\u003cp\u003eConvert event with single occurrences into\n event with possible simultaneous occurrences\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "Event t a -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html#fromCalm",
        "fct-type": "function",
        "title": "fromCalm"
      },
      "index": {
        "description": "Convert event with single occurrences into event with possible simultaneous occurrences",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "fromCalm",
        "normalized": "Event a b-\u003eEvent a b",
        "package": "reactive-banana",
        "partial": "Calm",
        "signature": "Event t a-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#v:interpret",
      "description": {
        "fct-descr": "\u003cp\u003eInterpretation function.\n Useful for testing.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "(forall t.  Event t a -\u003e Event t b) -\u003e [a] -\u003e IO [Maybe b]",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html#interpret",
        "fct-type": "function",
        "title": "interpret"
      },
      "index": {
        "description": "Interpretation function Useful for testing",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "interpret",
        "normalized": "(a b Event c d-\u003eEvent c e)-\u003e[d]-\u003eIO[Maybe e]",
        "package": "reactive-banana",
        "partial": "",
        "signature": "(forall t. Event t a-\u003eEvent t b)-\u003e[a]-\u003eIO[Maybe b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#v:mapAccum",
      "description": {
        "fct-descr": "\u003cp\u003eEfficient combination of \u003ccode\u003e\u003ca\u003eaccumE\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eaccumB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "acc -\u003e Event t (acc -\u003e (x, acc)) -\u003e (Event t x, Behavior t acc)",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html#mapAccum",
        "fct-type": "function",
        "title": "mapAccum"
      },
      "index": {
        "description": "Efficient combination of accumE and accumB",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "mapAccum",
        "normalized": "a-\u003eEvent b(a-\u003e(c,a))-\u003e(Event b c,Behavior b a)",
        "package": "reactive-banana",
        "partial": "Accum",
        "signature": "acc-\u003eEvent t(acc-\u003e(x,acc))-\u003e(Event t x,Behavior t acc)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#v:never",
      "description": {
        "fct-descr": "\u003cp\u003eEvent that never occurs.\n Think of it as \u003ccode\u003enever = []\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "Event t a",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html#never",
        "fct-type": "function",
        "title": "never"
      },
      "index": {
        "description": "Event that never occurs Think of it as never",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "never",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#v:stepper",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a time-varying function from an initial value and \n a stream of new values.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "a -\u003e Event t a -\u003e Behavior t a",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html#stepper",
        "fct-type": "function",
        "title": "stepper"
      },
      "index": {
        "description": "Construct time-varying function from an initial value and stream of new values",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "stepper",
        "normalized": "a-\u003eEvent b a-\u003eBehavior b a",
        "package": "reactive-banana",
        "partial": "",
        "signature": "a-\u003eEvent t a-\u003eBehavior t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Experimental-Calm.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two event streams of the same type.\n Combine simultaneous values if necessary.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Experimental.Calm",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Event t a -\u003e Event t a -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Experimental-Calm.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "Merge two event streams of the same type Combine simultaneous values if necessary",
        "hierarchy": "Reactive Banana Experimental Calm",
        "module": "Reactive.Banana.Experimental.Calm",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eEvent b a-\u003eEvent b a-\u003eEvent b a",
        "package": "reactive-banana",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eEvent t a-\u003eEvent t a-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#",
      "description": {
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "module",
        "fct-source": "src/Reactive-Banana-Frameworks.html",
        "fct-type": "module",
        "title": "Frameworks"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "Frameworks",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Frameworks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#t:EventNetwork",
      "description": {
        "fct-descr": "\u003cp\u003eData type that represents a compiled event network.\n It may be paused or already running.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "data",
        "fct-source": "src/Reactive-Banana-Frameworks.html#EventNetwork",
        "fct-type": "data",
        "title": "EventNetwork"
      },
      "index": {
        "description": "Data type that represents compiled event network It may be paused or already running",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "EventNetwork",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Event Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#t:Frameworks",
      "description": {
        "fct-descr": "\u003cp\u003eClass constraint on the type parameter \u003ccode\u003et\u003c/code\u003e of the \u003ccode\u003eMoment\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eIndicates that we can add input and output to an event network.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "class",
        "fct-source": "src/Reactive-Banana-Internal-Phantom.html#Frameworks",
        "fct-type": "class",
        "title": "Frameworks"
      },
      "index": {
        "description": "Class constraint on the type parameter of the Moment monad Indicates that we can add input and output to an event network",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "Frameworks",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Frameworks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#t:FrameworksMoment",
      "description": {
        "fct-descr": "\u003cp\u003eDummy type needed to simulate impredicative polymorphism.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "newtype",
        "fct-source": "src/Reactive-Banana-Frameworks.html#FrameworksMoment",
        "fct-type": "newtype",
        "title": "FrameworksMoment"
      },
      "index": {
        "description": "Dummy type needed to simulate impredicative polymorphism",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "FrameworksMoment",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Frameworks Moment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:FrameworksMoment",
      "description": {
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "FrameworksMoment",
        "fct-source": "src/Reactive-Banana-Frameworks.html#FrameworksMoment",
        "fct-type": "function",
        "title": "FrameworksMoment"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "FrameworksMoment",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Frameworks Moment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:actuate",
      "description": {
        "fct-descr": "\u003cp\u003eActuate an event network.\n The inputs will register their event handlers, so that\n the networks starts to produce outputs in response to input events.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "EventNetwork -\u003e IO ()",
        "fct-source": "src/Reactive-Banana-Frameworks.html#actuate",
        "fct-type": "function",
        "title": "actuate"
      },
      "index": {
        "description": "Actuate an event network The inputs will register their event handlers so that the networks starts to produce outputs in response to input events",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "actuate",
        "normalized": "EventNetwork-\u003eIO()",
        "package": "reactive-banana",
        "partial": "",
        "signature": "EventNetwork-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:changes",
      "description": {
        "fct-descr": "\u003cp\u003eOutput,\n observe when a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e changes.\n\u003c/p\u003e\u003cp\u003eStrictly speaking, a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e denotes a value that\n varies \u003cem\u003econtinuously\u003c/em\u003e in time,\n so there is no well-defined event which indicates when the behavior changes.\n\u003c/p\u003e\u003cp\u003eStill, for reasons of efficiency, the library provides a way to observe\n changes when the behavior is a step function, for instance as \n created by \u003ccode\u003e\u003ca\u003estepper\u003c/a\u003e\u003c/code\u003e. There are no formal guarantees,\n but the idea is that\n\u003c/p\u003e\u003cpre\u003e changes (stepper x e) = return (calm e)\n\u003c/pre\u003e\u003cp\u003eNote: The values of the event will not become available\n until event processing is complete.\n It can be used only in the context of \u003ccode\u003e\u003ca\u003ereactimate'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior t a -\u003e Moment t (Event t (Future a))",
        "fct-source": "src/Reactive-Banana-Frameworks.html#changes",
        "fct-type": "function",
        "title": "changes"
      },
      "index": {
        "description": "Output observe when Behavior changes Strictly speaking Behavior denotes value that varies continuously in time so there is no well-defined event which indicates when the behavior changes Still for reasons of efficiency the library provides way to observe changes when the behavior is step function for instance as created by stepper There are no formal guarantees but the idea is that changes stepper return calm Note The values of the event will not become available until event processing is complete It can be used only in the context of reactimate",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "changes",
        "normalized": "Behavior a b-\u003eMoment a(Event a(Future b))",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Behavior t a-\u003eMoment t(Event t(Future a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:compile",
      "description": {
        "fct-descr": "\u003cp\u003eCompile the description of an event network\n into an \u003ccode\u003e\u003ca\u003eEventNetwork\u003c/a\u003e\u003c/code\u003e\n that you can \u003ccode\u003e\u003ca\u003eactuate\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epause\u003c/a\u003e\u003c/code\u003e and so on.\n\u003c/p\u003e\u003cp\u003eEvent networks are described in the \u003ccode\u003e\u003ca\u003eMoment\u003c/a\u003e\u003c/code\u003e monad\n and use the \u003ccode\u003e\u003ca\u003eFrameworks\u003c/a\u003e\u003c/code\u003e class constraint.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "Moment t ()) -\u003e IO EventNetwork",
        "fct-source": "src/Reactive-Banana-Frameworks.html#compile",
        "fct-type": "function",
        "title": "compile"
      },
      "index": {
        "description": "Compile the description of an event network into an EventNetwork that you can actuate pause and so on Event networks are described in the Moment monad and use the Frameworks class constraint",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "compile",
        "normalized": "Moment a())-\u003eIO EventNetwork",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Moment t())-\u003eIO EventNetwork"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eDynamically add input and output to an existing event network.\n\u003c/p\u003e\u003cp\u003eNote: You can even do \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions here, but there is no\n guarantee about the order in which they are executed.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "Event t (FrameworksMoment a) -\u003e Moment t (Event t a)",
        "fct-source": "src/Reactive-Banana-Frameworks.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Dynamically add input and output to an existing event network Note You can even do IO actions here but there is no guarantee about the order in which they are executed",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "execute",
        "normalized": "Event a(FrameworksMoment b)-\u003eMoment a(Event a b)",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Event t(FrameworksMoment a)-\u003eMoment t(Event t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:fromAddHandler",
      "description": {
        "fct-descr": "\u003cp\u003eInput,\n obtain an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eAddHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen the event network is actuated,\n this will register a callback function such that\n an event will occur whenever the callback function is called.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "AddHandler a -\u003e Moment t (Event t a)",
        "fct-source": "src/Reactive-Banana-Frameworks.html#fromAddHandler",
        "fct-type": "function",
        "title": "fromAddHandler"
      },
      "index": {
        "description": "Input obtain an Event from an AddHandler When the event network is actuated this will register callback function such that an event will occur whenever the callback function is called",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "fromAddHandler",
        "normalized": "AddHandler a-\u003eMoment b(Event b a)",
        "package": "reactive-banana",
        "partial": "Add Handler",
        "signature": "AddHandler a-\u003eMoment t(Event t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:fromChanges",
      "description": {
        "fct-descr": "\u003cp\u003eInput,\n obtain a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eAddHandler\u003c/a\u003e\u003c/code\u003e that notifies changes.\n\u003c/p\u003e\u003cp\u003eThis is essentially just an application of the \u003ccode\u003e\u003ca\u003estepper\u003c/a\u003e\u003c/code\u003e combinator.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "a -\u003e AddHandler a -\u003e Moment t (Behavior t a)",
        "fct-source": "src/Reactive-Banana-Frameworks.html#fromChanges",
        "fct-type": "function",
        "title": "fromChanges"
      },
      "index": {
        "description": "Input obtain Behavior from an AddHandler that notifies changes This is essentially just an application of the stepper combinator",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "fromChanges",
        "normalized": "a-\u003eAddHandler a-\u003eMoment b(Behavior b a)",
        "package": "reactive-banana",
        "partial": "Changes",
        "signature": "a-\u003eAddHandler a-\u003eMoment t(Behavior t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:fromPoll",
      "description": {
        "fct-descr": "\u003cp\u003eInput,\n obtain a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e by frequently polling mutable data, like the current time.\n\u003c/p\u003e\u003cp\u003eThe resulting \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e will be updated on whenever the event\n network processes an input event.\n\u003c/p\u003e\u003cp\u003eThis function is occasionally useful, but\n the recommended way to obtain \u003ccode\u003eBehaviors\u003c/code\u003e is by using \u003ccode\u003e\u003ca\u003efromChanges\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIdeally, the argument IO action just polls a mutable variable,\n it should not perform expensive computations.\n Neither should its side effects affect the event network significantly.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "IO a -\u003e Moment t (Behavior t a)",
        "fct-source": "src/Reactive-Banana-Frameworks.html#fromPoll",
        "fct-type": "function",
        "title": "fromPoll"
      },
      "index": {
        "description": "Input obtain Behavior by frequently polling mutable data like the current time The resulting Behavior will be updated on whenever the event network processes an input event This function is occasionally useful but the recommended way to obtain Behaviors is by using fromChanges Ideally the argument IO action just polls mutable variable it should not perform expensive computations Neither should its side effects affect the event network significantly",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "fromPoll",
        "normalized": "IO a-\u003eMoment b(Behavior b a)",
        "package": "reactive-banana",
        "partial": "Poll",
        "signature": "IO a-\u003eMoment t(Behavior t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:imposeChanges",
      "description": {
        "fct-descr": "\u003cp\u003eImpose a different sampling event on a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e will vary continuously as before, but the event returned\n by the \u003ccode\u003e\u003ca\u003echanges\u003c/a\u003e\u003c/code\u003e function will now happen simultaneously with the\n imposed event.\n\u003c/p\u003e\u003cp\u003eNote: This function is useful only in very specific circumstances.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior t a -\u003e Event t () -\u003e Behavior t a",
        "fct-source": "src/Reactive-Banana-Frameworks.html#imposeChanges",
        "fct-type": "function",
        "title": "imposeChanges"
      },
      "index": {
        "description": "Impose different sampling event on Behavior The Behavior will vary continuously as before but the event returned by the changes function will now happen simultaneously with the imposed event Note This function is useful only in very specific circumstances",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "imposeChanges",
        "normalized": "Behavior a b-\u003eEvent a()-\u003eBehavior a b",
        "package": "reactive-banana",
        "partial": "Changes",
        "signature": "Behavior t a-\u003eEvent t()-\u003eBehavior t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:initial",
      "description": {
        "fct-descr": "\u003cp\u003eOutput,\n observe the initial value contained in a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior t a -\u003e Moment t a",
        "fct-source": "src/Reactive-Banana-Frameworks.html#initial",
        "fct-type": "function",
        "title": "initial"
      },
      "index": {
        "description": "Output observe the initial value contained in Behavior",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "initial",
        "normalized": "Behavior a b-\u003eMoment a b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Behavior t a-\u003eMoment t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:interpretAsHandler",
      "description": {
        "fct-descr": "\u003cp\u003eSimple way to write a single event handler with\n functional reactive programming.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "(forall t.  Event t a -\u003e Event t b) -\u003e AddHandler a -\u003e AddHandler b",
        "fct-source": "src/Reactive-Banana-Frameworks.html#interpretAsHandler",
        "fct-type": "function",
        "title": "interpretAsHandler"
      },
      "index": {
        "description": "Simple way to write single event handler with functional reactive programming",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "interpretAsHandler",
        "normalized": "(a b Event c d-\u003eEvent c e)-\u003eAddHandler d-\u003eAddHandler e",
        "package": "reactive-banana",
        "partial": "As Handler",
        "signature": "(forall t. Event t a-\u003eEvent t b)-\u003eAddHandler a-\u003eAddHandler b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:interpretFrameworks",
      "description": {
        "fct-descr": "\u003cp\u003eInterpret by using a framework internally.\n Only useful for testing library internals.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "(forall t.  Event t a -\u003e Event t b) -\u003e [a] -\u003e IO [[b]]",
        "fct-source": "src/Reactive-Banana-Frameworks.html#interpretFrameworks",
        "fct-type": "function",
        "title": "interpretFrameworks"
      },
      "index": {
        "description": "Interpret by using framework internally Only useful for testing library internals",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "interpretFrameworks",
        "normalized": "(a b Event c d-\u003eEvent c e)-\u003e[d]-\u003eIO[[e]]",
        "package": "reactive-banana",
        "partial": "Frameworks",
        "signature": "(forall t. Event t a-\u003eEvent t b)-\u003e[a]-\u003eIO[[b]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:liftIOLater",
      "description": {
        "fct-descr": "\u003cp\u003eLift an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action into the \u003ccode\u003e\u003ca\u003eMoment\u003c/a\u003e\u003c/code\u003e monad,\n but defer its execution until compilation time.\n This can be useful for recursive definitions using \u003ccode\u003eMonadFix\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "IO () -\u003e Moment t ()",
        "fct-source": "src/Reactive-Banana-Frameworks.html#liftIOLater",
        "fct-type": "function",
        "title": "liftIOLater"
      },
      "index": {
        "description": "Lift an IO action into the Moment monad but defer its execution until compilation time This can be useful for recursive definitions using MonadFix",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "liftIOLater",
        "normalized": "IO()-\u003eMoment a()",
        "package": "reactive-banana",
        "partial": "IOLater",
        "signature": "IO()-\u003eMoment t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:newEvent",
      "description": {
        "fct-descr": "\u003cp\u003eBuild an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e together with an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action that can \n fire occurrences of this event. Variant of \u003ccode\u003e\u003ca\u003enewAddHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is mainly useful for passing callback functions\n inside a \u003ccode\u003e\u003ca\u003ereactimate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "Moment t (Event t a, Handler a)",
        "fct-source": "src/Reactive-Banana-Frameworks.html#newEvent",
        "fct-type": "function",
        "title": "newEvent"
      },
      "index": {
        "description": "Build an Event together with an IO action that can fire occurrences of this event Variant of newAddHandler This function is mainly useful for passing callback functions inside reactimate",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "newEvent",
        "normalized": "Moment a(Event a b,Handler b)",
        "package": "reactive-banana",
        "partial": "Event",
        "signature": "Moment t(Event t a,Handler a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:pause",
      "description": {
        "fct-descr": "\u003cp\u003ePause an event network.\n Immediately stop producing output and\n unregister all event handlers for inputs.\n Hence, the network stops responding to input events,\n but it's state will be preserved.\n\u003c/p\u003e\u003cp\u003eYou can resume the network with \u003ccode\u003e\u003ca\u003eactuate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: You can stop a network even while it is processing events,\n i.e. you can use \u003ccode\u003e\u003ca\u003epause\u003c/a\u003e\u003c/code\u003e as an argument to \u003ccode\u003e\u003ca\u003ereactimate\u003c/a\u003e\u003c/code\u003e.\n The network will \u003cem\u003enot\u003c/em\u003e stop immediately though, only after\n the current event has been processed completely.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "EventNetwork -\u003e IO ()",
        "fct-source": "src/Reactive-Banana-Frameworks.html#pause",
        "fct-type": "function",
        "title": "pause"
      },
      "index": {
        "description": "Pause an event network Immediately stop producing output and unregister all event handlers for inputs Hence the network stops responding to input events but it state will be preserved You can resume the network with actuate Note You can stop network even while it is processing events i.e you can use pause as an argument to reactimate The network will not stop immediately though only after the current event has been processed completely",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "pause",
        "normalized": "EventNetwork-\u003eIO()",
        "package": "reactive-banana",
        "partial": "",
        "signature": "EventNetwork-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:reactimate",
      "description": {
        "fct-descr": "\u003cp\u003eOutput.\nExecute the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action whenever the event occurs.\n\u003c/p\u003e\u003cp\u003eNote: If two events occur very close to each other,\nthere is no guarantee that the \u003ccode\u003ereactimate\u003c/code\u003es for one \nevent will have finished before the ones for the next event start executing.\nThis does \u003cem\u003enot\u003c/em\u003e affect the values of events and behaviors,\nit only means that the \u003ccode\u003ereactimate\u003c/code\u003e for different events may interleave.\nFortuantely, this is a very rare occurrence, and only happens if\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e you call an event handler from inside \u003ccode\u003e\u003ca\u003ereactimate\u003c/a\u003e\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e or you use concurrency.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIn these cases, the \u003ccode\u003ereactimate\u003c/code\u003es follow the control flow\nof your event-based framework.\n\u003c/p\u003e\u003cp\u003eNote: An event network essentially behaves like a single,\nhuge callback function. The \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action are not run in a separate thread.\nThe callback function will throw an exception if one of your \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e actions\ndoes so as well.\nYour event-based framework will have to handle this situation.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "Event t (IO ()) -\u003e Moment t ()",
        "fct-source": "src/Reactive-Banana-Frameworks.html#reactimate",
        "fct-type": "function",
        "title": "reactimate"
      },
      "index": {
        "description": "Output Execute the IO action whenever the event occurs Note If two events occur very close to each other there is no guarantee that the reactimate for one event will have finished before the ones for the next event start executing This does not affect the values of events and behaviors it only means that the reactimate for different events may interleave Fortuantely this is very rare occurrence and only happens if you call an event handler from inside reactimate or you use concurrency In these cases the reactimate follow the control flow of your event-based framework Note An event network essentially behaves like single huge callback function The IO action are not run in separate thread The callback function will throw an exception if one of your IO actions does so as well Your event-based framework will have to handle this situation",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "reactimate",
        "normalized": "Event a(IO())-\u003eMoment a()",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Event t(IO())-\u003eMoment t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:reactimate-39-",
      "description": {
        "fct-descr": "\u003cp\u003eOutput.\n Execute the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action whenever the event occurs.\n\u003c/p\u003e\u003cp\u003eThis version of \u003ccode\u003e\u003ca\u003ereactimate\u003c/a\u003e\u003c/code\u003e can deal with values obtained\n from the \u003ccode\u003e\u003ca\u003echanges\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "Event t (Future (IO ())) -\u003e Moment t ()",
        "fct-source": "src/Reactive-Banana-Frameworks.html#reactimate%27",
        "fct-type": "function",
        "title": "reactimate'"
      },
      "index": {
        "description": "Output Execute the IO action whenever the event occurs This version of reactimate can deal with values obtained from the changes function",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "reactimate'",
        "normalized": "Event a(Future(IO()))-\u003eMoment a()",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Event t(Future(IO()))-\u003eMoment t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:runFrameworksMoment",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "Moment t a",
        "fct-source": "src/Reactive-Banana-Frameworks.html#FrameworksMoment",
        "fct-type": "function",
        "title": "runFrameworksMoment"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "runFrameworksMoment",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Frameworks Moment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Frameworks.html#v:showNetwork",
      "description": {
        "fct-descr": "\u003cp\u003eA multiline description of the current \u003ccode\u003eLatch\u003c/code\u003ees and \u003ccode\u003ePulse\u003c/code\u003es in\n the \u003ccode\u003e\u003ca\u003eEventNetwork\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIncidentally, evaluation the returned string to normal\n form will also force the \u003ccode\u003e\u003ca\u003eEventNetwork\u003c/a\u003e\u003c/code\u003e to some kind of normal form.\n This may be useful for benchmarking purposes.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Frameworks",
        "fct-package": "reactive-banana",
        "fct-signature": "EventNetwork -\u003e IO String",
        "fct-source": "src/Reactive-Banana-Frameworks.html#showNetwork",
        "fct-type": "function",
        "title": "showNetwork"
      },
      "index": {
        "description": "multiline description of the current Latch es and Pulse in the EventNetwork Incidentally evaluation the returned string to normal form will also force the EventNetwork to some kind of normal form This may be useful for benchmarking purposes",
        "hierarchy": "Reactive Banana Frameworks",
        "module": "Reactive.Banana.Frameworks",
        "name": "showNetwork",
        "normalized": "EventNetwork-\u003eIO String",
        "package": "reactive-banana",
        "partial": "Network",
        "signature": "EventNetwork-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "module",
        "fct-source": "src/Reactive-Banana-Model.html",
        "fct-type": "module",
        "title": "Model"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "Model",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#t:Behavior",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "data",
        "fct-source": "src/Reactive-Banana-Model.html#Behavior",
        "fct-type": "data",
        "title": "Behavior"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "Behavior",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Behavior",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#t:Event",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "type",
        "fct-source": "src/Reactive-Banana-Model.html#Event",
        "fct-type": "type",
        "title": "Event"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "Event",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#t:Moment",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "type",
        "fct-source": "src/Reactive-Banana-Model.html#Moment",
        "fct-type": "type",
        "title": "Moment"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "Moment",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Moment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:accumE",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "a -\u003e Event (a -\u003e a) -\u003e Event a",
        "fct-source": "src/Reactive-Banana-Model.html#accumE",
        "fct-type": "function",
        "title": "accumE"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "accumE",
        "normalized": "a-\u003eEvent(a-\u003ea)-\u003eEvent a",
        "package": "reactive-banana",
        "partial": "",
        "signature": "a-\u003eEvent(a-\u003ea)-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:applyB",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior (a -\u003e b) -\u003e Behavior a -\u003e Behavior b",
        "fct-source": "src/Reactive-Banana-Model.html#applyB",
        "fct-type": "function",
        "title": "applyB"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "applyB",
        "normalized": "Behavior(a-\u003eb)-\u003eBehavior a-\u003eBehavior b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Behavior(a-\u003eb)-\u003eBehavior a-\u003eBehavior b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:applyE",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior (a -\u003e b) -\u003e Event a -\u003e Event b",
        "fct-source": "src/Reactive-Banana-Model.html#applyE",
        "fct-type": "function",
        "title": "applyE"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "applyE",
        "normalized": "Behavior(a-\u003eb)-\u003eEvent a-\u003eEvent b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Behavior(a-\u003eb)-\u003eEvent a-\u003eEvent b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:filterJust",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "Event (Maybe a) -\u003e Event a",
        "fct-source": "src/Reactive-Banana-Model.html#filterJust",
        "fct-type": "function",
        "title": "filterJust"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "filterJust",
        "normalized": "Event(Maybe a)-\u003eEvent a",
        "package": "reactive-banana",
        "partial": "Just",
        "signature": "Event(Maybe a)-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:initialB",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior a -\u003e Moment a",
        "fct-source": "src/Reactive-Banana-Model.html#initialB",
        "fct-type": "function",
        "title": "initialB"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "initialB",
        "normalized": "Behavior a-\u003eMoment a",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Behavior a-\u003eMoment a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:interpret",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "(Event a -\u003e Moment (Event b)) -\u003e [Maybe a] -\u003e [Maybe b]",
        "fct-source": "src/Reactive-Banana-Model.html#interpret",
        "fct-type": "function",
        "title": "interpret"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "interpret",
        "normalized": "(Event a-\u003eMoment(Event b))-\u003e[Maybe a]-\u003e[Maybe b]",
        "package": "reactive-banana",
        "partial": "",
        "signature": "(Event a-\u003eMoment(Event b))-\u003e[Maybe a]-\u003e[Maybe b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:mapB",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e b) -\u003e Behavior a -\u003e Behavior b",
        "fct-source": "src/Reactive-Banana-Model.html#mapB",
        "fct-type": "function",
        "title": "mapB"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "mapB",
        "normalized": "(a-\u003eb)-\u003eBehavior a-\u003eBehavior b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eBehavior a-\u003eBehavior b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:mapE",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e b) -\u003e Event a -\u003e Event b",
        "fct-source": "src/Reactive-Banana-Model.html#mapE",
        "fct-type": "function",
        "title": "mapE"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "mapE",
        "normalized": "(a-\u003eb)-\u003eEvent a-\u003eEvent b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eEvent a-\u003eEvent b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:never",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "Event a",
        "fct-source": "src/Reactive-Banana-Model.html#never",
        "fct-type": "function",
        "title": "never"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "never",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:observeE",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "Event (Moment a) -\u003e Event a",
        "fct-source": "src/Reactive-Banana-Model.html#observeE",
        "fct-type": "function",
        "title": "observeE"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "observeE",
        "normalized": "Event(Moment a)-\u003eEvent a",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Event(Moment a)-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:pureB",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "a -\u003e Behavior a",
        "fct-source": "src/Reactive-Banana-Model.html#pureB",
        "fct-type": "function",
        "title": "pureB"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "pureB",
        "normalized": "a-\u003eBehavior a",
        "package": "reactive-banana",
        "partial": "",
        "signature": "a-\u003eBehavior a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:stepperB",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "a -\u003e Event a -\u003e Behavior a",
        "fct-source": "src/Reactive-Banana-Model.html#stepperB",
        "fct-type": "function",
        "title": "stepperB"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "stepperB",
        "normalized": "a-\u003eEvent a-\u003eBehavior a",
        "package": "reactive-banana",
        "partial": "",
        "signature": "a-\u003eEvent a-\u003eBehavior a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:switchB",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior a -\u003e Event (Moment (Behavior a)) -\u003e Behavior a",
        "fct-source": "src/Reactive-Banana-Model.html#switchB",
        "fct-type": "function",
        "title": "switchB"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "switchB",
        "normalized": "Behavior a-\u003eEvent(Moment(Behavior a))-\u003eBehavior a",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Behavior a-\u003eEvent(Moment(Behavior a))-\u003eBehavior a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:switchE",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "Event (Moment (Event a)) -\u003e Event a",
        "fct-source": "src/Reactive-Banana-Model.html#switchE",
        "fct-type": "function",
        "title": "switchE"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "switchE",
        "normalized": "Event(Moment(Event a))-\u003eEvent a",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Event(Moment(Event a))-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:trimB",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior a -\u003e Moment (Moment (Behavior a))",
        "fct-source": "src/Reactive-Banana-Model.html#trimB",
        "fct-type": "function",
        "title": "trimB"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "trimB",
        "normalized": "Behavior a-\u003eMoment(Moment(Behavior a))",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Behavior a-\u003eMoment(Moment(Behavior a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:trimE",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "Event a -\u003e Moment (Moment (Event a))",
        "fct-source": "src/Reactive-Banana-Model.html#trimE",
        "fct-type": "function",
        "title": "trimE"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "trimE",
        "normalized": "Event a-\u003eMoment(Moment(Event a))",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Event a-\u003eMoment(Moment(Event a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Model.html#v:unionWith",
      "description": {
        "fct-module": "Reactive.Banana.Model",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Event a -\u003e Event a -\u003e Event a",
        "fct-source": "src/Reactive-Banana-Model.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Model",
        "module": "Reactive.Banana.Model",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a-\u003eEvent a",
        "package": "reactive-banana",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eEvent a-\u003eEvent a-\u003eEvent a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim-Cached.html#",
      "description": {
        "fct-module": "Reactive.Banana.Prim.Cached",
        "fct-package": "reactive-banana",
        "fct-signature": "module",
        "fct-source": "src/Reactive-Banana-Prim-Cached.html",
        "fct-type": "module",
        "title": "Cached"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim Cached",
        "module": "Reactive.Banana.Prim.Cached",
        "name": "Cached",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Cached",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim-Cached.html#t:Cached",
      "description": {
        "fct-module": "Reactive.Banana.Prim.Cached",
        "fct-package": "reactive-banana",
        "fct-signature": "data",
        "fct-source": "src/Reactive-Banana-Prim-Cached.html#Cached",
        "fct-type": "data",
        "title": "Cached"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim Cached",
        "module": "Reactive.Banana.Prim.Cached",
        "name": "Cached",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Cached",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim-Cached.html#t:HasCache",
      "description": {
        "fct-descr": "\u003cp\u003eType class for monads that have a lazy \u003ccode\u003eVault\u003c/code\u003e that can be used as a cache.\n\u003c/p\u003e\u003cp\u003eThe cache has to be lazy in the values in order to be useful for recursion.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Prim.Cached",
        "fct-package": "reactive-banana",
        "fct-signature": "class",
        "fct-source": "src/Reactive-Banana-Prim-Cached.html#HasCache",
        "fct-type": "class",
        "title": "HasCache"
      },
      "index": {
        "description": "Type class for monads that have lazy Vault that can be used as cache The cache has to be lazy in the values in order to be useful for recursion",
        "hierarchy": "Reactive Banana Prim Cached",
        "module": "Reactive.Banana.Prim.Cached",
        "name": "HasCache",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Has Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim-Cached.html#v:cache",
      "description": {
        "fct-descr": "\u003cp\u003eAn action whose result will be cached.\n Executing the action the first time in the monad will\n execute the side effects. From then on,\n only the generated value will be returned.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Prim.Cached",
        "fct-package": "reactive-banana",
        "fct-signature": "m a -\u003e Cached m a",
        "fct-source": "src/Reactive-Banana-Prim-Cached.html#cache",
        "fct-type": "function",
        "title": "cache"
      },
      "index": {
        "description": "An action whose result will be cached Executing the action the first time in the monad will execute the side effects From then on only the generated value will be returned",
        "hierarchy": "Reactive Banana Prim Cached",
        "module": "Reactive.Banana.Prim.Cached",
        "name": "cache",
        "normalized": "a b-\u003eCached a b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "m a-\u003eCached m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim-Cached.html#v:don-39-tCache",
      "description": {
        "fct-descr": "\u003cp\u003eLift an action that is \u003cem\u003enot\u003c/em\u003e chached, for instance because it is idempotent.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Prim.Cached",
        "fct-package": "reactive-banana",
        "fct-signature": "m a -\u003e Cached m a",
        "fct-source": "src/Reactive-Banana-Prim-Cached.html#don%27tCache",
        "fct-type": "function",
        "title": "don'tCache"
      },
      "index": {
        "description": "Lift an action that is not chached for instance because it is idempotent",
        "hierarchy": "Reactive Banana Prim Cached",
        "module": "Reactive.Banana.Prim.Cached",
        "name": "don'tCache",
        "normalized": "a b-\u003eCached a b",
        "package": "reactive-banana",
        "partial": "Cache",
        "signature": "m a-\u003eCached m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim-Cached.html#v:fromPure",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a pure value. Doesn't make use of the cache.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Prim.Cached",
        "fct-package": "reactive-banana",
        "fct-signature": "a -\u003e Cached m a",
        "fct-source": "src/Reactive-Banana-Prim-Cached.html#fromPure",
        "fct-type": "function",
        "title": "fromPure"
      },
      "index": {
        "description": "Return pure value Doesn make use of the cache",
        "hierarchy": "Reactive Banana Prim Cached",
        "module": "Reactive.Banana.Prim.Cached",
        "name": "fromPure",
        "normalized": "a-\u003eCached b a",
        "package": "reactive-banana",
        "partial": "Pure",
        "signature": "a-\u003eCached m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim-Cached.html#v:liftCached1",
      "description": {
        "fct-module": "Reactive.Banana.Prim.Cached",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e m b) -\u003e Cached m a -\u003e Cached m b",
        "fct-source": "src/Reactive-Banana-Prim-Cached.html#liftCached1",
        "fct-type": "function",
        "title": "liftCached1"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim Cached",
        "module": "Reactive.Banana.Prim.Cached",
        "name": "liftCached1",
        "normalized": "(a-\u003eb c)-\u003eCached b a-\u003eCached b c",
        "package": "reactive-banana",
        "partial": "Cached",
        "signature": "(a-\u003em b)-\u003eCached m a-\u003eCached m b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim-Cached.html#v:liftCached2",
      "description": {
        "fct-module": "Reactive.Banana.Prim.Cached",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e b -\u003e m c) -\u003e Cached m a -\u003e Cached m b -\u003e Cached m c",
        "fct-source": "src/Reactive-Banana-Prim-Cached.html#liftCached2",
        "fct-type": "function",
        "title": "liftCached2"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim Cached",
        "module": "Reactive.Banana.Prim.Cached",
        "name": "liftCached2",
        "normalized": "(a-\u003eb-\u003ec d)-\u003eCached c a-\u003eCached c b-\u003eCached c d",
        "package": "reactive-banana",
        "partial": "Cached",
        "signature": "(a-\u003eb-\u003em c)-\u003eCached m a-\u003eCached m b-\u003eCached m c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim-Cached.html#v:retrieve",
      "description": {
        "fct-module": "Reactive.Banana.Prim.Cached",
        "fct-package": "reactive-banana",
        "fct-signature": "Key a -\u003e m (Maybe a)",
        "fct-source": "src/Reactive-Banana-Prim-Cached.html#retrieve",
        "fct-type": "method",
        "title": "retrieve"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim Cached",
        "module": "Reactive.Banana.Prim.Cached",
        "name": "retrieve",
        "normalized": "Key a-\u003eb(Maybe a)",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Key a-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim-Cached.html#v:runCached",
      "description": {
        "fct-module": "Reactive.Banana.Prim.Cached",
        "fct-package": "reactive-banana",
        "fct-signature": "Cached m a -\u003e m a",
        "fct-source": "src/Reactive-Banana-Prim-Cached.html#runCached",
        "fct-type": "function",
        "title": "runCached"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim Cached",
        "module": "Reactive.Banana.Prim.Cached",
        "name": "runCached",
        "normalized": "Cached a b-\u003ea b",
        "package": "reactive-banana",
        "partial": "Cached",
        "signature": "Cached m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim-Cached.html#v:write",
      "description": {
        "fct-module": "Reactive.Banana.Prim.Cached",
        "fct-package": "reactive-banana",
        "fct-signature": "Key a -\u003e a -\u003e m ()",
        "fct-source": "src/Reactive-Banana-Prim-Cached.html#write",
        "fct-type": "method",
        "title": "write"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim Cached",
        "module": "Reactive.Banana.Prim.Cached",
        "name": "write",
        "normalized": "Key a-\u003ea-\u003eb()",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Key a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "module",
        "fct-source": "src/Reactive-Banana-Prim.html",
        "fct-type": "module",
        "title": "Prim"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "Prim",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#t:Build",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "type",
        "fct-source": "src/Reactive-Banana-Prim-Types.html#Build",
        "fct-type": "type",
        "title": "Build"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "Build",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Build",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#t:BuildIO",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "type",
        "fct-source": "src/Reactive-Banana-Prim-Types.html#BuildIO",
        "fct-type": "type",
        "title": "BuildIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "BuildIO",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Build IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#t:BuildT",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "type",
        "fct-source": "src/Reactive-Banana-Prim-Types.html#BuildT",
        "fct-type": "type",
        "title": "BuildT"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "BuildT",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Build",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#t:Future",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "type",
        "fct-source": "src/Reactive-Banana-Prim-Types.html#Future",
        "fct-type": "type",
        "title": "Future"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "Future",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Future",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#t:Latch",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "data",
        "fct-source": "src/Reactive-Banana-Prim-Types.html#Latch",
        "fct-type": "data",
        "title": "Latch"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "Latch",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Latch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#t:Network",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eNetwork\u003c/a\u003e\u003c/code\u003e represents the state of a pulse/latch network,\n which consists of a \u003ccode\u003eGraph\u003c/code\u003e and the values of all accumulated latches\n in the network.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "data",
        "fct-source": "src/Reactive-Banana-Prim-Types.html#Network",
        "fct-type": "data",
        "title": "Network"
      },
      "index": {
        "description": "Network represents the state of pulse latch network which consists of Graph and the values of all accumulated latches in the network",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "Network",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#t:Pulse",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "data",
        "fct-source": "src/Reactive-Banana-Prim-Types.html#Pulse",
        "fct-type": "data",
        "title": "Pulse"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "Pulse",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Pulse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#t:Step",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "type",
        "fct-source": "src/Reactive-Banana-Prim-Types.html#Step",
        "fct-type": "type",
        "title": "Step"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "Step",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:accumL",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "a -\u003e Pulse (a -\u003e a) -\u003e Build (Latch a, Pulse a)",
        "fct-source": "src/Reactive-Banana-Prim-Combinators.html#accumL",
        "fct-type": "function",
        "title": "accumL"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "accumL",
        "normalized": "a-\u003ePulse(a-\u003ea)-\u003eBuild(Latch a,Pulse a)",
        "package": "reactive-banana",
        "partial": "",
        "signature": "a-\u003ePulse(a-\u003ea)-\u003eBuild(Latch a,Pulse a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:addHandler",
      "description": {
        "fct-descr": "\u003cp\u003eRegister a handler to be executed whenever a pulse occurs.\n\u003c/p\u003e\u003cp\u003eThe pulse may refer to future latch values.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "Pulse (Future a) -\u003e (a -\u003e IO ()) -\u003e Build ()",
        "fct-source": "src/Reactive-Banana-Prim-IO.html#addHandler",
        "fct-type": "function",
        "title": "addHandler"
      },
      "index": {
        "description": "Register handler to be executed whenever pulse occurs The pulse may refer to future latch values",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "addHandler",
        "normalized": "Pulse(Future a)-\u003e(a-\u003eIO())-\u003eBuild()",
        "package": "reactive-banana",
        "partial": "Handler",
        "signature": "Pulse(Future a)-\u003e(a-\u003eIO())-\u003eBuild()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:alwaysP",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "Build (Pulse ())",
        "fct-source": "src/Reactive-Banana-Prim-Plumbing.html#alwaysP",
        "fct-type": "function",
        "title": "alwaysP"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "alwaysP",
        "normalized": "Build(Pulse())",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Build(Pulse())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:applyL",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "Latch (a -\u003e b) -\u003e Latch a -\u003e Latch b",
        "fct-source": "src/Reactive-Banana-Prim-Combinators.html#applyL",
        "fct-type": "function",
        "title": "applyL"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "applyL",
        "normalized": "Latch(a-\u003eb)-\u003eLatch a-\u003eLatch b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Latch(a-\u003eb)-\u003eLatch a-\u003eLatch b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:applyP",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "Latch (a -\u003e b) -\u003e Pulse a -\u003e Build (Pulse b)",
        "fct-source": "src/Reactive-Banana-Prim-Combinators.html#applyP",
        "fct-type": "function",
        "title": "applyP"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "applyP",
        "normalized": "Latch(a-\u003eb)-\u003ePulse a-\u003eBuild(Pulse b)",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Latch(a-\u003eb)-\u003ePulse a-\u003eBuild(Pulse b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:compile",
      "description": {
        "fct-descr": "\u003cp\u003eChange a \u003ccode\u003e\u003ca\u003eNetwork\u003c/a\u003e\u003c/code\u003e of pulses and latches by \n executing a \u003ccode\u003e\u003ca\u003eBuildIO\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "BuildIO a -\u003e Network -\u003e IO (a, Network)",
        "fct-source": "src/Reactive-Banana-Prim-Compile.html#compile",
        "fct-type": "function",
        "title": "compile"
      },
      "index": {
        "description": "Change Network of pulses and latches by executing BuildIO action",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "compile",
        "normalized": "BuildIO a-\u003eNetwork-\u003eIO(a,Network)",
        "package": "reactive-banana",
        "partial": "",
        "signature": "BuildIO a-\u003eNetwork-\u003eIO(a,Network)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:emptyNetwork",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNetwork\u003c/a\u003e\u003c/code\u003e that contains no pulses or latches.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "Network",
        "fct-source": "src/Reactive-Banana-Prim-Types.html#emptyNetwork",
        "fct-type": "function",
        "title": "emptyNetwork"
      },
      "index": {
        "description": "The Network that contains no pulses or latches",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "emptyNetwork",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:executeP",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "Pulse (b -\u003e BuildIO a) -\u003e b -\u003e Build (Pulse a)",
        "fct-source": "src/Reactive-Banana-Prim-Combinators.html#executeP",
        "fct-type": "function",
        "title": "executeP"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "executeP",
        "normalized": "Pulse(a-\u003eBuildIO b)-\u003ea-\u003eBuild(Pulse b)",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Pulse(b-\u003eBuildIO a)-\u003eb-\u003eBuild(Pulse a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:filterJustP",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "Pulse (Maybe a) -\u003e Build (Pulse a)",
        "fct-source": "src/Reactive-Banana-Prim-Combinators.html#filterJustP",
        "fct-type": "function",
        "title": "filterJustP"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "filterJustP",
        "normalized": "Pulse(Maybe a)-\u003eBuild(Pulse a)",
        "package": "reactive-banana",
        "partial": "Just",
        "signature": "Pulse(Maybe a)-\u003eBuild(Pulse a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:interpret",
      "description": {
        "fct-descr": "\u003cp\u003eSimple interpreter for pulse/latch networks.\n\u003c/p\u003e\u003cp\u003eMainly useful for testing functionality\n\u003c/p\u003e\u003cp\u003eNote: The result is not computed lazily, for similar reasons\n that the \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e function does not compute its result lazily.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "(Pulse a -\u003e BuildIO (Pulse b)) -\u003e [Maybe a] -\u003e IO [Maybe b]",
        "fct-source": "src/Reactive-Banana-Prim-Compile.html#interpret",
        "fct-type": "function",
        "title": "interpret"
      },
      "index": {
        "description": "Simple interpreter for pulse latch networks Mainly useful for testing functionality Note The result is not computed lazily for similar reasons that the sequence function does not compute its result lazily",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "interpret",
        "normalized": "(Pulse a-\u003eBuildIO(Pulse b))-\u003e[Maybe a]-\u003eIO[Maybe b]",
        "package": "reactive-banana",
        "partial": "",
        "signature": "(Pulse a-\u003eBuildIO(Pulse b))-\u003e[Maybe a]-\u003eIO[Maybe b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:liftBuild",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "Build a -\u003e BuildT m a",
        "fct-source": "src/Reactive-Banana-Prim-Plumbing.html#liftBuild",
        "fct-type": "function",
        "title": "liftBuild"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "liftBuild",
        "normalized": "Build a-\u003eBuildT b a",
        "package": "reactive-banana",
        "partial": "Build",
        "signature": "Build a-\u003eBuildT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:liftIOLater",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "IO () -\u003e Build ()",
        "fct-source": "src/Reactive-Banana-Prim-Plumbing.html#liftIOLater",
        "fct-type": "function",
        "title": "liftIOLater"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "liftIOLater",
        "normalized": "IO()-\u003eBuild()",
        "package": "reactive-banana",
        "partial": "IOLater",
        "signature": "IO()-\u003eBuild()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:mapAccumM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003emapAccum\u003c/code\u003e for a monad.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e s -\u003e m (b, s)) -\u003e s -\u003e [a] -\u003e m [b]",
        "fct-source": "src/Reactive-Banana-Prim-Compile.html#mapAccumM",
        "fct-type": "function",
        "title": "mapAccumM"
      },
      "index": {
        "description": "mapAccum for monad",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "mapAccumM",
        "normalized": "(a-\u003eb-\u003ec(d,b))-\u003eb-\u003e[a]-\u003ec[d]",
        "package": "reactive-banana",
        "partial": "Accum",
        "signature": "(a-\u003es-\u003em(b,s))-\u003es-\u003e[a]-\u003em[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:mapAccumM_",
      "description": {
        "fct-descr": "\u003cp\u003eStrict \u003ccode\u003emapAccum\u003c/code\u003e for a monad. Discards results.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e s -\u003e m (b, s)) -\u003e s -\u003e [a] -\u003e m ()",
        "fct-source": "src/Reactive-Banana-Prim-Compile.html#mapAccumM_",
        "fct-type": "function",
        "title": "mapAccumM_"
      },
      "index": {
        "description": "Strict mapAccum for monad Discards results",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "mapAccumM_",
        "normalized": "(a-\u003eb-\u003ec(d,b))-\u003eb-\u003e[a]-\u003ec()",
        "package": "reactive-banana",
        "partial": "Accum",
        "signature": "(a-\u003es-\u003em(b,s))-\u003es-\u003e[a]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:mapL",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e b) -\u003e Latch a -\u003e Latch b",
        "fct-source": "src/Reactive-Banana-Prim-Combinators.html#mapL",
        "fct-type": "function",
        "title": "mapL"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "mapL",
        "normalized": "(a-\u003eb)-\u003eLatch a-\u003eLatch b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eLatch a-\u003eLatch b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:mapP",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e b) -\u003e Pulse a -\u003e Build (Pulse b)",
        "fct-source": "src/Reactive-Banana-Prim-Combinators.html#mapP",
        "fct-type": "function",
        "title": "mapP"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "mapP",
        "normalized": "(a-\u003eb)-\u003ePulse a-\u003eBuild(Pulse b)",
        "package": "reactive-banana",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ePulse a-\u003eBuild(Pulse b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:neverP",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePulse\u003c/a\u003e\u003c/code\u003e that never fires.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "Build (Pulse a)",
        "fct-source": "src/Reactive-Banana-Prim-Plumbing.html#neverP",
        "fct-type": "function",
        "title": "neverP"
      },
      "index": {
        "description": "Pulse that never fires",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "neverP",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:newInput",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new pulse in the network and a function to trigger it.\n\u003c/p\u003e\u003cp\u003eTogether with \u003ccode\u003e\u003ca\u003eaddHandler\u003c/a\u003e\u003c/code\u003e, this function can be used to operate with\n pulses as with standard callback-based events.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "Key a -\u003e Build (Pulse a, a -\u003e Step)",
        "fct-source": "src/Reactive-Banana-Prim-IO.html#newInput",
        "fct-type": "function",
        "title": "newInput"
      },
      "index": {
        "description": "Create new pulse in the network and function to trigger it Together with addHandler this function can be used to operate with pulses as with standard callback-based events",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "newInput",
        "normalized": "Key a-\u003eBuild(Pulse a,a-\u003eStep)",
        "package": "reactive-banana",
        "partial": "Input",
        "signature": "Key a-\u003eBuild(Pulse a,a-\u003eStep)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:pureL",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "a -\u003e Latch a",
        "fct-source": "src/Reactive-Banana-Prim-Combinators.html#pureL",
        "fct-type": "function",
        "title": "pureL"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "pureL",
        "normalized": "a-\u003eLatch a",
        "package": "reactive-banana",
        "partial": "",
        "signature": "a-\u003eLatch a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:readLatch",
      "description": {
        "fct-descr": "\u003cp\u003eRead the value of a \u003ccode\u003e\u003ca\u003eLatch\u003c/a\u003e\u003c/code\u003e at a particular moment in time.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "Latch a -\u003e Build a",
        "fct-source": "src/Reactive-Banana-Prim-IO.html#readLatch",
        "fct-type": "function",
        "title": "readLatch"
      },
      "index": {
        "description": "Read the value of Latch at particular moment in time",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "readLatch",
        "normalized": "Latch a-\u003eBuild a",
        "package": "reactive-banana",
        "partial": "Latch",
        "signature": "Latch a-\u003eBuild a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:runSpaceProfile",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an FRP network with a sequence of inputs, but discard results.\n\u003c/p\u003e\u003cp\u003eMainly useful for testing whether there are space leaks. \n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "(Pulse a -\u003e BuildIO void) -\u003e [a] -\u003e IO ()",
        "fct-source": "src/Reactive-Banana-Prim-Compile.html#runSpaceProfile",
        "fct-type": "function",
        "title": "runSpaceProfile"
      },
      "index": {
        "description": "Execute an FRP network with sequence of inputs but discard results Mainly useful for testing whether there are space leaks",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "runSpaceProfile",
        "normalized": "(Pulse a-\u003eBuildIO b)-\u003e[a]-\u003eIO()",
        "package": "reactive-banana",
        "partial": "Space Profile",
        "signature": "(Pulse a-\u003eBuildIO void)-\u003e[a]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:switchL",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "Latch a -\u003e Pulse (Latch a) -\u003e Build (Latch a)",
        "fct-source": "src/Reactive-Banana-Prim-Combinators.html#switchL",
        "fct-type": "function",
        "title": "switchL"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "switchL",
        "normalized": "Latch a-\u003ePulse(Latch a)-\u003eBuild(Latch a)",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Latch a-\u003ePulse(Latch a)-\u003eBuild(Latch a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:switchP",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "Pulse (Pulse a) -\u003e Build (Pulse a)",
        "fct-source": "src/Reactive-Banana-Prim-Combinators.html#switchP",
        "fct-type": "function",
        "title": "switchP"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "switchP",
        "normalized": "Pulse(Pulse a)-\u003eBuild(Pulse a)",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Pulse(Pulse a)-\u003eBuild(Pulse a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:tagFuture",
      "description": {
        "fct-descr": "\u003cp\u003eTag a \u003ccode\u003e\u003ca\u003ePulse\u003c/a\u003e\u003c/code\u003e with future values of a \u003ccode\u003e\u003ca\u003eLatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is in contrast to \u003ccode\u003e\u003ca\u003eapplyP\u003c/a\u003e\u003c/code\u003e which applies the current value\n of a \u003ccode\u003e\u003ca\u003eLatch\u003c/a\u003e\u003c/code\u003e to a pulse.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "Latch a -\u003e Pulse b -\u003e Build (Pulse (Future a))",
        "fct-source": "src/Reactive-Banana-Prim-Combinators.html#tagFuture",
        "fct-type": "function",
        "title": "tagFuture"
      },
      "index": {
        "description": "Tag Pulse with future values of Latch This is in contrast to applyP which applies the current value of Latch to pulse",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "tagFuture",
        "normalized": "Latch a-\u003ePulse b-\u003eBuild(Pulse(Future a))",
        "package": "reactive-banana",
        "partial": "Future",
        "signature": "Latch a-\u003ePulse b-\u003eBuild(Pulse(Future a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:unionWithP",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Pulse a -\u003e Pulse a -\u003e Build (Pulse a)",
        "fct-source": "src/Reactive-Banana-Prim-Combinators.html#unionWithP",
        "fct-type": "function",
        "title": "unionWithP"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "unionWithP",
        "normalized": "(a-\u003ea-\u003ea)-\u003ePulse a-\u003ePulse a-\u003eBuild(Pulse a)",
        "package": "reactive-banana",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003ePulse a-\u003ePulse a-\u003eBuild(Pulse a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Prim.html#v:unsafeMapIOP",
      "description": {
        "fct-module": "Reactive.Banana.Prim",
        "fct-package": "reactive-banana",
        "fct-signature": "(a -\u003e IO b) -\u003e Pulse a -\u003e Build (Pulse b)",
        "fct-source": "src/Reactive-Banana-Prim-Combinators.html#unsafeMapIOP",
        "fct-type": "function",
        "title": "unsafeMapIOP"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Prim",
        "module": "Reactive.Banana.Prim",
        "name": "unsafeMapIOP",
        "normalized": "(a-\u003eIO b)-\u003ePulse a-\u003eBuild(Pulse b)",
        "package": "reactive-banana",
        "partial": "Map IOP",
        "signature": "(a-\u003eIO b)-\u003ePulse a-\u003eBuild(Pulse b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Switch.html#",
      "description": {
        "fct-module": "Reactive.Banana.Switch",
        "fct-package": "reactive-banana",
        "fct-signature": "module",
        "fct-source": "src/Reactive-Banana-Switch.html",
        "fct-type": "module",
        "title": "Switch"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Switch",
        "module": "Reactive.Banana.Switch",
        "name": "Switch",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Switch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Switch.html#t:AnyMoment",
      "description": {
        "fct-descr": "\u003cp\u003eValue present at any/every moment in time.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Switch",
        "fct-package": "reactive-banana",
        "fct-signature": "data",
        "fct-source": "src/Reactive-Banana-Switch.html#AnyMoment",
        "fct-type": "data",
        "title": "AnyMoment"
      },
      "index": {
        "description": "Value present at any every moment in time",
        "hierarchy": "Reactive Banana Switch",
        "module": "Reactive.Banana.Switch",
        "name": "AnyMoment",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Any Moment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Switch.html#t:Identity",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity functor with a dummy argument.\n Unlike \u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e,\n this functor is constant in the \u003cem\u003esecond\u003c/em\u003e argument.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Switch",
        "fct-package": "reactive-banana",
        "fct-signature": "newtype",
        "fct-source": "src/Reactive-Banana-Switch.html#Identity",
        "fct-type": "newtype",
        "title": "Identity"
      },
      "index": {
        "description": "Identity functor with dummy argument Unlike Constant this functor is constant in the second argument",
        "hierarchy": "Reactive Banana Switch",
        "module": "Reactive.Banana.Switch",
        "name": "Identity",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Switch.html#t:Moment",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMoment\u003c/a\u003e\u003c/code\u003e monad denotes a value at a particular \u003cem\u003emoment in time\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThis monad is not very interesting, it is mainly used for book-keeping.\nIn particular, the type parameter \u003ccode\u003et\u003c/code\u003e is used\nto disallow various unhealthy programs.\n\u003c/p\u003e\u003cp\u003eThis monad is also used to describe event networks\nin the \u003ca\u003eReactive.Banana.Frameworks\u003c/a\u003e module.\nThis only happens when the type parameter \u003ccode\u003et\u003c/code\u003e\nis constrained by the \u003ccode\u003e\u003ca\u003eFrameworks\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003cp\u003eTo be precise, an expression of type \u003ccode\u003eMoment t a\u003c/code\u003e denotes\na value of type \u003ccode\u003ea\u003c/code\u003e that is observed at a moment in time\nwhich is indicated by the type parameter \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Switch",
        "fct-package": "reactive-banana",
        "fct-signature": "data",
        "fct-source": "src/Reactive-Banana-Types.html#Moment",
        "fct-type": "data",
        "title": "Moment"
      },
      "index": {
        "description": "The Moment monad denotes value at particular moment in time This monad is not very interesting it is mainly used for book-keeping In particular the type parameter is used to disallow various unhealthy programs This monad is also used to describe event networks in the Reactive.Banana.Frameworks module This only happens when the type parameter is constrained by the Frameworks class To be precise an expression of type Moment denotes value of type that is observed at moment in time which is indicated by the type parameter",
        "hierarchy": "Reactive Banana Switch",
        "module": "Reactive.Banana.Switch",
        "name": "Moment",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Moment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Switch.html#v:Identity",
      "description": {
        "fct-module": "Reactive.Banana.Switch",
        "fct-package": "reactive-banana",
        "fct-signature": "Identity",
        "fct-source": "src/Reactive-Banana-Switch.html#Identity",
        "fct-type": "function",
        "title": "Identity"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Switch",
        "module": "Reactive.Banana.Switch",
        "name": "Identity",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Switch.html#v:anyMoment",
      "description": {
        "fct-module": "Reactive.Banana.Switch",
        "fct-package": "reactive-banana",
        "fct-signature": "(forall t.  Moment t (f t a)) -\u003e AnyMoment f a",
        "fct-source": "src/Reactive-Banana-Switch.html#anyMoment",
        "fct-type": "function",
        "title": "anyMoment"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Switch",
        "module": "Reactive.Banana.Switch",
        "name": "anyMoment",
        "normalized": "(a b Moment c(d c e))-\u003eAnyMoment d e",
        "package": "reactive-banana",
        "partial": "Moment",
        "signature": "(forall t. Moment t(f t a))-\u003eAnyMoment f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Switch.html#v:getIdentity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Reactive.Banana.Switch",
        "fct-package": "reactive-banana",
        "fct-signature": "a",
        "fct-source": "src/Reactive-Banana-Switch.html#Identity",
        "fct-type": "function",
        "title": "getIdentity"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Switch",
        "module": "Reactive.Banana.Switch",
        "name": "getIdentity",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Switch.html#v:now",
      "description": {
        "fct-module": "Reactive.Banana.Switch",
        "fct-package": "reactive-banana",
        "fct-signature": "AnyMoment f a -\u003e forall t.  Moment t (f t a)",
        "fct-source": "src/Reactive-Banana-Switch.html#now",
        "fct-type": "function",
        "title": "now"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana Switch",
        "module": "Reactive.Banana.Switch",
        "name": "now",
        "normalized": "AnyMoment a b-\u003ec d Moment e(a e b)",
        "package": "reactive-banana",
        "partial": "",
        "signature": "AnyMoment f a-\u003eforall t. Moment t(f t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Switch.html#v:observeE",
      "description": {
        "fct-descr": "\u003cp\u003eObserve a value at those moments in time where\n event occurrences happen.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Switch",
        "fct-package": "reactive-banana",
        "fct-signature": "Event t (AnyMoment Identity a) -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Switch.html#observeE",
        "fct-type": "function",
        "title": "observeE"
      },
      "index": {
        "description": "Observe value at those moments in time where event occurrences happen",
        "hierarchy": "Reactive Banana Switch",
        "module": "Reactive.Banana.Switch",
        "name": "observeE",
        "normalized": "Event a(AnyMoment Identity b)-\u003eEvent a b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Event t(AnyMoment Identity a)-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Switch.html#v:switchB",
      "description": {
        "fct-descr": "\u003cp\u003eDynamically switch between \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Switch",
        "fct-package": "reactive-banana",
        "fct-signature": "forall t a.  Behavior t a -\u003e Event t (AnyMoment Behavior a) -\u003e Behavior t a",
        "fct-source": "src/Reactive-Banana-Switch.html#switchB",
        "fct-type": "function",
        "title": "switchB"
      },
      "index": {
        "description": "Dynamically switch between Behavior",
        "hierarchy": "Reactive Banana Switch",
        "module": "Reactive.Banana.Switch",
        "name": "switchB",
        "normalized": "a b c Behavior b d-\u003eEvent b(AnyMoment Behavior d)-\u003eBehavior b d",
        "package": "reactive-banana",
        "partial": "",
        "signature": "forall t a. Behavior t a-\u003eEvent t(AnyMoment Behavior a)-\u003eBehavior t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Switch.html#v:switchE",
      "description": {
        "fct-descr": "\u003cp\u003eDynamically switch between \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Switch",
        "fct-package": "reactive-banana",
        "fct-signature": "forall t a.  Event t (AnyMoment Event a) -\u003e Event t a",
        "fct-source": "src/Reactive-Banana-Switch.html#switchE",
        "fct-type": "function",
        "title": "switchE"
      },
      "index": {
        "description": "Dynamically switch between Event",
        "hierarchy": "Reactive Banana Switch",
        "module": "Reactive.Banana.Switch",
        "name": "switchE",
        "normalized": "a b c Event b(AnyMoment Event d)-\u003eEvent b d",
        "package": "reactive-banana",
        "partial": "",
        "signature": "forall t a. Event t(AnyMoment Event a)-\u003eEvent t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Switch.html#v:trimB",
      "description": {
        "fct-descr": "\u003cp\u003eTrim a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e to a variable start time.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Switch",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior t a -\u003e Moment t (AnyMoment Behavior a)",
        "fct-source": "src/Reactive-Banana-Switch.html#trimB",
        "fct-type": "function",
        "title": "trimB"
      },
      "index": {
        "description": "Trim Behavior to variable start time",
        "hierarchy": "Reactive Banana Switch",
        "module": "Reactive.Banana.Switch",
        "name": "trimB",
        "normalized": "Behavior a b-\u003eMoment a(AnyMoment Behavior b)",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Behavior t a-\u003eMoment t(AnyMoment Behavior a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Switch.html#v:trimE",
      "description": {
        "fct-descr": "\u003cp\u003eTrim an \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003e to a variable start time.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Switch",
        "fct-package": "reactive-banana",
        "fct-signature": "Event t a -\u003e Moment t (AnyMoment Event a)",
        "fct-source": "src/Reactive-Banana-Switch.html#trimE",
        "fct-type": "function",
        "title": "trimE"
      },
      "index": {
        "description": "Trim an Event to variable start time",
        "hierarchy": "Reactive Banana Switch",
        "module": "Reactive.Banana.Switch",
        "name": "trimE",
        "normalized": "Event a b-\u003eMoment a(AnyMoment Event b)",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Event t a-\u003eMoment t(AnyMoment Event a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana-Switch.html#v:valueB",
      "description": {
        "fct-descr": "\u003cp\u003eObtain the value of the \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e at moment \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana.Switch",
        "fct-package": "reactive-banana",
        "fct-signature": "Behavior t a -\u003e Moment t a",
        "fct-source": "src/Reactive-Banana-Switch.html#valueB",
        "fct-type": "function",
        "title": "valueB"
      },
      "index": {
        "description": "Obtain the value of the Behavior at moment",
        "hierarchy": "Reactive Banana Switch",
        "module": "Reactive.Banana.Switch",
        "name": "valueB",
        "normalized": "Behavior a b-\u003eMoment a b",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Behavior t a-\u003eMoment t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana.html#",
      "description": {
        "fct-module": "Reactive.Banana",
        "fct-package": "reactive-banana",
        "fct-signature": "module",
        "fct-source": "src/Reactive-Banana.html",
        "fct-type": "module",
        "title": "Banana"
      },
      "index": {
        "description": "",
        "hierarchy": "Reactive Banana",
        "module": "Reactive.Banana",
        "name": "Banana",
        "normalized": "",
        "package": "reactive-banana",
        "partial": "Banana",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/reactive-banana/docs/Reactive-Banana.html#v:compile",
      "description": {
        "fct-descr": "\u003cp\u003eCompile the description of an event network\n into an \u003ccode\u003e\u003ca\u003eEventNetwork\u003c/a\u003e\u003c/code\u003e\n that you can \u003ccode\u003e\u003ca\u003eactuate\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epause\u003c/a\u003e\u003c/code\u003e and so on.\n\u003c/p\u003e\u003cp\u003eEvent networks are described in the \u003ccode\u003e\u003ca\u003eMoment\u003c/a\u003e\u003c/code\u003e monad\n and use the \u003ccode\u003e\u003ca\u003eFrameworks\u003c/a\u003e\u003c/code\u003e class constraint.\n\u003c/p\u003e",
        "fct-module": "Reactive.Banana",
        "fct-package": "reactive-banana",
        "fct-signature": "Moment t ()) -\u003e IO EventNetwork",
        "fct-source": "src/Reactive-Banana-Frameworks.html#compile",
        "fct-type": "function",
        "title": "compile"
      },
      "index": {
        "description": "Compile the description of an event network into an EventNetwork that you can actuate pause and so on Event networks are described in the Moment monad and use the Frameworks class constraint",
        "hierarchy": "Reactive Banana",
        "module": "Reactive.Banana",
        "name": "compile",
        "normalized": "Moment a())-\u003eIO EventNetwork",
        "package": "reactive-banana",
        "partial": "",
        "signature": "Moment t())-\u003eIO EventNetwork"
      }
    }
  }
]