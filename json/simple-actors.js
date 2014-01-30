[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#",
      "description": {
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-Actors.html",
        "fct-type": "module",
        "title": "Actors"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "Actors",
        "normalized": "",
        "package": "simple-actors",
        "partial": "Actors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#t:Action",
      "description": {
        "fct-descr": "\u003cp\u003eIn the Actor Model, at each step an actor...\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e processes a single \u003ccode\u003e\u003ca\u003ereceived\u003c/a\u003e\u003c/code\u003e message\n\u003c/li\u003e\u003cli\u003e may \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003e new actors\n\u003c/li\u003e\u003cli\u003e may \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e messages to other actors\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003es the \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e for processing the \u003cem\u003enext\u003c/em\u003e message\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThese actions take place within the \u003ccode\u003eAction i\u003c/code\u003e monad, where \u003ccode\u003ei\u003c/code\u003e is the type\n of the input message the actor receives.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eN.B.:\u003c/em\u003e the MonadIO instance here is an abstraction leak. An example of a\n good use of \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e might be to give an \u003ccode\u003eAction\u003c/code\u003e access to a source of\n randomness.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Actors-Behavior.html#Action",
        "fct-type": "data",
        "title": "Action"
      },
      "index": {
        "description": "In the Actor Model at each step an actor processes single received message may spawn new actors may send messages to other actors return the Behavior for processing the next message These actions take place within the Action monad where is the type of the input message the actor receives N.B the MonadIO instance here is an abstraction leak An example of good use of liftIO might be to give an Action access to source of randomness",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "Action",
        "normalized": "",
        "package": "simple-actors",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#t:Behavior",
      "description": {
        "fct-descr": "\u003cp\u003eAn actor is created by \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003eing a \u003ccode\u003eBehavior\u003c/code\u003e. Behaviors consist of a\n composed \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e that is executed when a message is \u003ccode\u003e\u003ca\u003ereceived\u003c/a\u003e\u003c/code\u003e and\n returns the \u003ccode\u003eBehavior\u003c/code\u003e for processing the next input.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Concurrent-Actors-Behavior.html#Behavior",
        "fct-type": "newtype",
        "title": "Behavior"
      },
      "index": {
        "description": "An actor is created by spawn ing Behavior Behaviors consist of composed Action that is executed when message is received and returns the Behavior for processing the next input",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "Behavior",
        "normalized": "",
        "package": "simple-actors",
        "partial": "Behavior",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#t:Mailbox",
      "description": {
        "fct-descr": "\u003cp\u003eOne can \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e a messages to a \u003ccode\u003eMailbox\u003c/code\u003e where it will be processed\n according to an actor's defined \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e type Joined (Mailbox a) = a\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-Actors.html#Mailbox",
        "fct-type": "data",
        "title": "Mailbox"
      },
      "index": {
        "description": "One can send messages to Mailbox where it will be processed according to an actor defined Behavior type Joined Mailbox",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "Mailbox",
        "normalized": "",
        "package": "simple-actors",
        "partial": "Mailbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#t:Sources",
      "description": {
        "fct-descr": "\u003cp\u003eWe extend the actor model to support joining (or synchronizing) multiple\n \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003ees to a single \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e input type, using a new class with an\n associated type. Functionality is best explained by example:\n\u003c/p\u003e\u003cp\u003eSpawn an actor returning it's \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e, and send it its first message:\n\u003c/p\u003e\u003cpre\u003e sumTuple :: Behavior (Int, Int)\n\n do b \u003c- spawn sumTuple\n    send b (4, 1) \n    ...\n\u003c/pre\u003e\u003cp\u003eBut now we would like our \u003ccode\u003esumTuple\u003c/code\u003e actor to receive each number from a different \n concurrent actor:\n\u003c/p\u003e\u003cpre\u003e do (b1, b2) \u003c- spawn sumTuple\n    b3 \u003c- spawn (multipliesBy2AndSendsTo b1)\n    send b3 2\n    send b2 1\n    ...\n\u003c/pre\u003e\u003cp\u003eLastly spawn an actor that starts immediately on an infinite supply of \u003ccode\u003e()\u003c/code\u003es,\n and supplies an endless stream of \u003ccode\u003eInt\u003c/code\u003es to \u003ccode\u003esumTuple\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e do (b1, b2) \u003c- spawn sumTuple\n    () \u003c- spawn (sendsIntsTo b2)\n    send b1 4\n    ...\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "class",
        "fct-source": "src/Control-Concurrent-Actors.html#Sources",
        "fct-type": "class",
        "title": "Sources"
      },
      "index": {
        "description": "We extend the actor model to support joining or synchronizing multiple Mailbox es to single Behavior input type using new class with an associated type Functionality is best explained by example Spawn an actor returning it Mailbox and send it its first message sumTuple Behavior Int Int do spawn sumTuple send But now we would like our sumTuple actor to receive each number from different concurrent actor do b1 b2 spawn sumTuple b3 spawn multipliesBy2AndSendsTo b1 send b3 send b2 Lastly spawn an actor that starts immediately on an infinite supply of and supplies an endless stream of Int to sumTuple do b1 b2 spawn sumTuple spawn sendsIntsTo b2 send b1",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "Sources",
        "normalized": "",
        "package": "simple-actors",
        "partial": "Sources",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:-60--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e but supports chaining sends by returning the Mailbox.\n Convenient for initializing an Actor with its first input after spawning,\n e.g.\n\u003c/p\u003e\u003cpre\u003e     do mb \u003c- 0 \u003c-\u003e spawn foo\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "a -\u003e m (Mailbox a) -\u003e m (Mailbox a)",
        "fct-source": "src/Control-Concurrent-Actors.html#%3C-%3E",
        "fct-type": "function",
        "title": "(\u003c-\u003e)"
      },
      "index": {
        "description": "Like send but supports chaining sends by returning the Mailbox Convenient for initializing an Actor with its first input after spawning e.g do mb spawn foo",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "(\u003c-\u003e) \u003c-\u003e",
        "normalized": "a-\u003eb(Mailbox a)-\u003eb(Mailbox a)",
        "package": "simple-actors",
        "partial": "",
        "signature": "a-\u003em(Mailbox a)-\u003em(Mailbox a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:-60-.-124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eSequence two \u003ccode\u003eBehavior\u003c/code\u003es. After the first \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003es the second takes over,\n discarding the message the former was processing. See also the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e\n instance for \u003ccode\u003eBehavior\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e b \u003c.|\u003e b' = b `mappend` constB b'\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "Behavior i -\u003e Behavior i -\u003e Behavior i",
        "fct-source": "src/Control-Concurrent-Actors.html#%3C.%7C%3E",
        "fct-type": "function",
        "title": "(\u003c.|\u003e)"
      },
      "index": {
        "description": "Sequence two Behavior After the first yield the second takes over discarding the message the former was processing See also the Monoid instance for Behavior mappend constB",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "(\u003c.|\u003e) \u003c.|\u003e",
        "normalized": "Behavior a-\u003eBehavior a-\u003eBehavior a",
        "package": "simple-actors",
        "partial": "",
        "signature": "Behavior i-\u003eBehavior i-\u003eBehavior i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:Receive",
      "description": {
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "Receive",
        "fct-source": "src/Control-Concurrent-Actors-Behavior.html#Behavior",
        "fct-type": "function",
        "title": "Receive"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "Receive",
        "normalized": "",
        "package": "simple-actors",
        "partial": "Receive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:constB",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eBehavior\u003c/code\u003e that discard its first input, returning the passed Behavior\n for processing subsequent inputs. Useful with \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e\n compositions when one wants to ignore the leftover \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003eed message.\n\u003c/p\u003e\u003cpre\u003e constB = Receive . return\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "Behavior i -\u003e Behavior i",
        "fct-source": "src/Control-Concurrent-Actors.html#constB",
        "fct-type": "function",
        "title": "constB"
      },
      "index": {
        "description": "Behavior that discard its first input returning the passed Behavior for processing subsequent inputs Useful with Alternative or Monoid compositions when one wants to ignore the leftover yield ed message constB Receive return",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "constB",
        "normalized": "Behavior a-\u003eBehavior a",
        "package": "simple-actors",
        "partial": "",
        "signature": "Behavior i-\u003eBehavior i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:contraFanin",
      "description": {
        "fct-descr": "\u003cpre\u003e contraFanin f g = contramap (f ||| g)\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "(b -\u003e a) -\u003e (c -\u003e a) -\u003e f a -\u003e f (Either b c)",
        "fct-source": "src/Control-Concurrent-Actors.html#contraFanin",
        "fct-type": "function",
        "title": "contraFanin"
      },
      "index": {
        "description": "contraFanin contramap",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "contraFanin",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003ed b-\u003ed(Either a c)",
        "package": "simple-actors",
        "partial": "Fanin",
        "signature": "(b-\u003ea)-\u003e(c-\u003ea)-\u003ef a-\u003ef(Either b c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:contraFanout",
      "description": {
        "fct-descr": "\u003cpre\u003e contraFanout f g = contramap (f &&& g)\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "(a -\u003e b) -\u003e (a -\u003e c) -\u003e f (b, c) -\u003e f a",
        "fct-source": "src/Control-Concurrent-Actors.html#contraFanout",
        "fct-type": "function",
        "title": "contraFanout"
      },
      "index": {
        "description": "contraFanout contramap",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "contraFanout",
        "normalized": "(a-\u003eb)-\u003e(a-\u003ec)-\u003ed(b,c)-\u003ed a",
        "package": "simple-actors",
        "partial": "Fanout",
        "signature": "(a-\u003eb)-\u003e(a-\u003ec)-\u003ef(b,c)-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:contraProduct",
      "description": {
        "fct-descr": "\u003cpre\u003e contraProduct = contramap Left &&& contramap Right\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "f (Either a b) -\u003e (f a, f b)",
        "fct-source": "src/Control-Concurrent-Actors.html#contraProduct",
        "fct-type": "function",
        "title": "contraProduct"
      },
      "index": {
        "description": "contraProduct contramap Left contramap Right",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "contraProduct",
        "normalized": "a(Either b c)-\u003e(a b,a c)",
        "package": "simple-actors",
        "partial": "Product",
        "signature": "f(Either a b)-\u003e(f a,f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:coproductMb",
      "description": {
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "Mailbox a -\u003e Mailbox b -\u003e Mailbox (Either a b)",
        "fct-source": "src/Control-Concurrent-Actors.html#coproductMb",
        "fct-type": "function",
        "title": "coproductMb"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "coproductMb",
        "normalized": "Mailbox a-\u003eMailbox b-\u003eMailbox(Either a b)",
        "package": "simple-actors",
        "partial": "Mb",
        "signature": "Mailbox a-\u003eMailbox b-\u003eMailbox(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:guardReceived",
      "description": {
        "fct-descr": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003ereceived\u003c/a\u003e\u003c/code\u003e message matching predicate, otherwise \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e guardReceived p = ask \u003e\u003e= \\i-\u003e guard (p i) \u003e\u003e return i\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "(i -\u003e Bool) -\u003e Action i i",
        "fct-source": "src/Control-Concurrent-Actors.html#guardReceived",
        "fct-type": "function",
        "title": "guardReceived"
      },
      "index": {
        "description": "Return received message matching predicate otherwise yield guardReceived ask guard return",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "guardReceived",
        "normalized": "(a-\u003eBool)-\u003eAction a a",
        "package": "simple-actors",
        "partial": "Received",
        "signature": "(i-\u003eBool)-\u003eAction i i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:headAction",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "Action i (Behavior i)",
        "fct-source": "src/Control-Concurrent-Actors-Behavior.html#Behavior",
        "fct-type": "function",
        "title": "headAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "headAction",
        "normalized": "",
        "package": "simple-actors",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:out",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the input side of a \u003ccode\u003eSplitChan\u003c/code\u003e to a \u003ccode\u003eMailbox\u003c/code\u003e. Useful for \n sending data out from an actor system via a channel created in IO.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "i a -\u003e Mailbox a",
        "fct-source": "src/Control-Concurrent-Actors.html#out",
        "fct-type": "function",
        "title": "out"
      },
      "index": {
        "description": "Convert the input side of SplitChan to Mailbox Useful for sending data out from an actor system via channel created in IO",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "out",
        "normalized": "a b-\u003eMailbox b",
        "package": "simple-actors",
        "partial": "",
        "signature": "i a-\u003eMailbox a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:printB",
      "description": {
        "fct-descr": "\u003cp\u003ePrints all messages to STDOUT in the order they are received,\n \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e-ing \u003cem\u003eimmediately\u003c/em\u003e after \u003ccode\u003en\u003c/code\u003e inputs are printed.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "n -\u003e Behavior s",
        "fct-source": "src/Control-Concurrent-Actors.html#printB",
        "fct-type": "function",
        "title": "printB"
      },
      "index": {
        "description": "Prints all messages to STDOUT in the order they are received yield ing immediately after inputs are printed",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "printB",
        "normalized": "a-\u003eBehavior b",
        "package": "simple-actors",
        "partial": "",
        "signature": "n-\u003eBehavior s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:putStrB",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eprintB\u003c/a\u003e\u003c/code\u003e but using \u003ccode\u003eputStr\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "n -\u003e Behavior String",
        "fct-source": "src/Control-Concurrent-Actors.html#putStrB",
        "fct-type": "function",
        "title": "putStrB"
      },
      "index": {
        "description": "Like printB but using putStr",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "putStrB",
        "normalized": "a-\u003eBehavior String",
        "package": "simple-actors",
        "partial": "Str",
        "signature": "n-\u003eBehavior String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eUseful to make defining a continuing Behavior more readable as a\n \"receive block\", e.g.\n\u003c/p\u003e\u003cpre\u003e pairUpAndSendTo mb = Receive $ do\n     a \u003c- received\n     receive $ do\n         b \u003c- received\n         send mb (b,a)\n         return (pairUpAndSendTo mb)\n\u003c/pre\u003e\u003cp\u003eDefined as: \n\u003c/p\u003e\u003cpre\u003e receive = return . Receive\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "Action i (Behavior i) -\u003e Action i (Behavior i)",
        "fct-source": "src/Control-Concurrent-Actors.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Useful to make defining continuing Behavior more readable as receive block e.g pairUpAndSendTo mb Receive do received receive do received send mb return pairUpAndSendTo mb Defined as receive return Receive",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "receive",
        "normalized": "Action a(Behavior a)-\u003eAction a(Behavior a)",
        "package": "simple-actors",
        "partial": "",
        "signature": "Action i(Behavior i)-\u003eAction i(Behavior i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:received",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the message received to start this \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e block. \u003cem\u003eN.B\u003c/em\u003e the value\n returned here does not change between calls in the same \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e received = ask\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "Action i i",
        "fct-source": "src/Control-Concurrent-Actors.html#received",
        "fct-type": "function",
        "title": "received"
      },
      "index": {
        "description": "Return the message received to start this Action block N.B the value returned here does not change between calls in the same Action received ask",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "received",
        "normalized": "",
        "package": "simple-actors",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:runBehavior",
      "description": {
        "fct-descr": "\u003cp\u003erun a \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e in the IO monad, taking its \"messages\" from the list.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "Behavior a -\u003e [a] -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Actors.html#runBehavior",
        "fct-type": "function",
        "title": "runBehavior"
      },
      "index": {
        "description": "run Behavior in the IO monad taking its messages from the list",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "runBehavior",
        "normalized": "Behavior a-\u003e[a]-\u003eIO()",
        "package": "simple-actors",
        "partial": "Behavior",
        "signature": "Behavior a-\u003e[a]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:runBehavior_",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003eBehavior ()\u003c/code\u003e in the main thread, returning when the computation\n exits.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "Behavior () -\u003e IO ()",
        "fct-source": "src/Control-Concurrent-Actors.html#runBehavior_",
        "fct-type": "function",
        "title": "runBehavior_"
      },
      "index": {
        "description": "Run Behavior in the main thread returning when the computation exits",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "runBehavior_",
        "normalized": "Behavior()-\u003eIO()",
        "package": "simple-actors",
        "partial": "Behavior",
        "signature": "Behavior()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend a message asynchronously to an actor receiving from Mailbox. See\n also \u003ccode\u003e\u003ca\u003eout\u003c/a\u003e\u003c/code\u003e for converting other types of chans to \u003ccode\u003e\u003ca\u003eMailbox\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e send b = liftIO . writeChan b\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "Mailbox a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Actors.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send message asynchronously to an actor receiving from Mailbox See also out for converting other types of chans to Mailbox send liftIO writeChan",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "send",
        "normalized": "Mailbox a-\u003ea-\u003eb()",
        "package": "simple-actors",
        "partial": "",
        "signature": "Mailbox a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:send-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA strict \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e send' b a = a `seq` send b a\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "Mailbox a -\u003e a -\u003e m ()",
        "fct-source": "src/Control-Concurrent-Actors.html#send%27",
        "fct-type": "function",
        "title": "send'"
      },
      "index": {
        "description": "strict send send seq send",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "send'",
        "normalized": "Mailbox a-\u003ea-\u003eb()",
        "package": "simple-actors",
        "partial": "",
        "signature": "Mailbox a-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:signalB",
      "description": {
        "fct-descr": "\u003cp\u003eSends a \u003ccode\u003e()\u003c/code\u003e to the passed chan. This is useful with \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e for\n signalling the end of some other \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e signalB c = Receive (send c () \u003e\u003e yield)\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "Mailbox () -\u003e Behavior i",
        "fct-source": "src/Control-Concurrent-Actors.html#signalB",
        "fct-type": "function",
        "title": "signalB"
      },
      "index": {
        "description": "Sends to the passed chan This is useful with mappend for signalling the end of some other Behavior signalB Receive send yield",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "signalB",
        "normalized": "Mailbox()-\u003eBehavior a",
        "package": "simple-actors",
        "partial": "",
        "signature": "Mailbox()-\u003eBehavior i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:spawn",
      "description": {
        "fct-descr": "\u003cp\u003eFork an actor performing the specified \u003ccode\u003e\u003ca\u003eBehavior\u003c/a\u003e\u003c/code\u003e. \u003cem\u003eN.B.\u003c/em\u003e an actor\n begins execution of its \u003ccode\u003eheadBehavior\u003c/code\u003e only after a message becomes\n available to process; for sending an initial message to an actor right\n after \u003ccode\u003e\u003ca\u003espawn\u003c/a\u003e\u003c/code\u003eing it, (\u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e) can be convenient.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "Behavior (Joined s) -\u003e m s",
        "fct-source": "src/Control-Concurrent-Actors.html#spawn",
        "fct-type": "function",
        "title": "spawn"
      },
      "index": {
        "description": "Fork an actor performing the specified Behavior N.B an actor begins execution of its headBehavior only after message becomes available to process for sending an initial message to an actor right after spawn ing it can be convenient",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "spawn",
        "normalized": "Behavior(Joined a)-\u003eb a",
        "package": "simple-actors",
        "partial": "",
        "signature": "Behavior(Joined s)-\u003em s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eImmediately give up processing an input, perhaps relinquishing the input\n to an \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e computation or exiting the actor.\n\u003c/p\u003e\u003cpre\u003e yield = mzero\n\u003c/pre\u003e",
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "Action i a",
        "fct-source": "src/Control-Concurrent-Actors.html#yield",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "Immediately give up processing an input perhaps relinquishing the input to an Alternative computation or exiting the actor yield mzero",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "yield",
        "normalized": "",
        "package": "simple-actors",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-actors/docs/Control-Concurrent-Actors.html#v:zipMb",
      "description": {
        "fct-module": "Control.Concurrent.Actors",
        "fct-package": "simple-actors",
        "fct-signature": "Mailbox a -\u003e Mailbox b -\u003e Mailbox (a, b)",
        "fct-source": "src/Control-Concurrent-Actors.html#zipMb",
        "fct-type": "function",
        "title": "zipMb"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent Actors",
        "module": "Control.Concurrent.Actors",
        "name": "zipMb",
        "normalized": "Mailbox a-\u003eMailbox b-\u003eMailbox(a,b)",
        "package": "simple-actors",
        "partial": "Mb",
        "signature": "Mailbox a-\u003eMailbox b-\u003eMailbox(a,b)"
      }
    }
  }
]