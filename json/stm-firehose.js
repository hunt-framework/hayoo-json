[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-firehose/docs/Control-Concurrent-STM-Firehose.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA subscription based messaging system, with non-blocking bounded write.\n\u003c/p\u003e\u003cpre\u003e fh \u003c- atomically newFirehose\n -- the following line will not block, even though nobody subscribed\n atomically (mapM_ (writeEvent fh) [1..100])\n -- let's subscribe a single client\n sub \u003c- atomically (subscribe 10 fh)\n forkIO (forever (atomically (readEvent fh) \u003e\u003e= print))\n writeEvent fh 1\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Concurrent.STM.Firehose",
        "fct-package": "stm-firehose",
        "fct-signature": "module",
        "fct-source": "src/Control-Concurrent-STM-Firehose.html",
        "fct-type": "module",
        "title": "Firehose"
      },
      "index": {
        "description": "subscription based messaging system with non-blocking bounded write fh atomically newFirehose the following line will not block even though nobody subscribed atomically mapM writeEvent fh let subscribe single client sub atomically subscribe fh forkIO forever atomically readEvent fh print writeEvent fh",
        "hierarchy": "Control Concurrent STM Firehose",
        "module": "Control.Concurrent.STM.Firehose",
        "name": "Firehose",
        "normalized": "",
        "package": "stm-firehose",
        "partial": "Firehose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-firehose/docs/Control-Concurrent-STM-Firehose.html#t:Firehose",
      "description": {
        "fct-module": "Control.Concurrent.STM.Firehose",
        "fct-package": "stm-firehose",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Firehose.html#Firehose",
        "fct-type": "data",
        "title": "Firehose"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM Firehose",
        "module": "Control.Concurrent.STM.Firehose",
        "name": "Firehose",
        "normalized": "",
        "package": "stm-firehose",
        "partial": "Firehose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-firehose/docs/Control-Concurrent-STM-Firehose.html#t:Subscription",
      "description": {
        "fct-module": "Control.Concurrent.STM.Firehose",
        "fct-package": "stm-firehose",
        "fct-signature": "data",
        "fct-source": "src/Control-Concurrent-STM-Firehose.html#Subscription",
        "fct-type": "data",
        "title": "Subscription"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Concurrent STM Firehose",
        "module": "Control.Concurrent.STM.Firehose",
        "name": "Subscription",
        "normalized": "",
        "package": "stm-firehose",
        "partial": "Subscription",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-firehose/docs/Control-Concurrent-STM-Firehose.html#v:getQueue",
      "description": {
        "fct-descr": "\u003cp\u003eGets the underlying queue from a subscription.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Firehose",
        "fct-package": "stm-firehose",
        "fct-signature": "Subscription a -\u003e TBMQueue a",
        "fct-source": "src/Control-Concurrent-STM-Firehose.html#getQueue",
        "fct-type": "function",
        "title": "getQueue"
      },
      "index": {
        "description": "Gets the underlying queue from subscription",
        "hierarchy": "Control Concurrent STM Firehose",
        "module": "Control.Concurrent.STM.Firehose",
        "name": "getQueue",
        "normalized": "Subscription a-\u003eTBMQueue a",
        "package": "stm-firehose",
        "partial": "Queue",
        "signature": "Subscription a-\u003eTBMQueue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-firehose/docs/Control-Concurrent-STM-Firehose.html#v:newFirehose",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eFirehose\u003c/a\u003e\u003c/code\u003e item.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Firehose",
        "fct-package": "stm-firehose",
        "fct-signature": "STM (Firehose a)",
        "fct-source": "src/Control-Concurrent-STM-Firehose.html#newFirehose",
        "fct-type": "function",
        "title": "newFirehose"
      },
      "index": {
        "description": "Creates new Firehose item",
        "hierarchy": "Control Concurrent STM Firehose",
        "module": "Control.Concurrent.STM.Firehose",
        "name": "newFirehose",
        "normalized": "",
        "package": "stm-firehose",
        "partial": "Firehose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-firehose/docs/Control-Concurrent-STM-Firehose.html#v:readEvent",
      "description": {
        "fct-descr": "\u003cp\u003eRead an event from a \u003ccode\u003e\u003ca\u003eSubscription\u003c/a\u003e\u003c/code\u003e. This will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n firehose is shut, or the subscription removed.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Firehose",
        "fct-package": "stm-firehose",
        "fct-signature": "Subscription a -\u003e STM (Maybe a)",
        "fct-source": "src/Control-Concurrent-STM-Firehose.html#readEvent",
        "fct-type": "function",
        "title": "readEvent"
      },
      "index": {
        "description": "Read an event from Subscription This will return Nothing if the firehose is shut or the subscription removed",
        "hierarchy": "Control Concurrent STM Firehose",
        "module": "Control.Concurrent.STM.Firehose",
        "name": "readEvent",
        "normalized": "Subscription a-\u003eSTM(Maybe a)",
        "package": "stm-firehose",
        "partial": "Event",
        "signature": "Subscription a-\u003eSTM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-firehose/docs/Control-Concurrent-STM-Firehose.html#v:subscribe",
      "description": {
        "fct-descr": "\u003cp\u003eGet a subscription from the fire hose, that will be used to\n read events.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Firehose",
        "fct-package": "stm-firehose",
        "fct-signature": "Int-\u003e Firehose a-\u003e STM (Subscription a)",
        "fct-type": "function",
        "title": "subscribe"
      },
      "index": {
        "description": "Get subscription from the fire hose that will be used to read events",
        "hierarchy": "Control Concurrent STM Firehose",
        "module": "Control.Concurrent.STM.Firehose",
        "name": "subscribe",
        "normalized": "Int-\u003eFirehose a-\u003eSTM(Subscription a)",
        "package": "stm-firehose",
        "partial": "",
        "signature": "Int-\u003eFirehose a-\u003eSTM(Subscription a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-firehose/docs/Control-Concurrent-STM-Firehose.html#v:unsubscribe",
      "description": {
        "fct-descr": "\u003cp\u003eUnsubscribe from the fire hose. Subsequent calls to \u003ccode\u003e\u003ca\u003ereadEvent\u003c/a\u003e\u003c/code\u003e will\n return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. This runs in O(n), where n is the current number of\n subscriptions. Please contact the maintainer if you need better\n performance.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Firehose",
        "fct-package": "stm-firehose",
        "fct-signature": "Subscription a -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-Firehose.html#unsubscribe",
        "fct-type": "function",
        "title": "unsubscribe"
      },
      "index": {
        "description": "Unsubscribe from the fire hose Subsequent calls to readEvent will return Nothing This runs in where is the current number of subscriptions Please contact the maintainer if you need better performance",
        "hierarchy": "Control Concurrent STM Firehose",
        "module": "Control.Concurrent.STM.Firehose",
        "name": "unsubscribe",
        "normalized": "Subscription a-\u003eSTM()",
        "package": "stm-firehose",
        "partial": "",
        "signature": "Subscription a-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-firehose/docs/Control-Concurrent-STM-Firehose.html#v:writeEvent",
      "description": {
        "fct-descr": "\u003cp\u003eSends a piece of data in the fire hose.\n\u003c/p\u003e",
        "fct-module": "Control.Concurrent.STM.Firehose",
        "fct-package": "stm-firehose",
        "fct-signature": "Firehose a -\u003e a -\u003e STM ()",
        "fct-source": "src/Control-Concurrent-STM-Firehose.html#writeEvent",
        "fct-type": "function",
        "title": "writeEvent"
      },
      "index": {
        "description": "Sends piece of data in the fire hose",
        "hierarchy": "Control Concurrent STM Firehose",
        "module": "Control.Concurrent.STM.Firehose",
        "name": "writeEvent",
        "normalized": "Firehose a-\u003ea-\u003eSTM()",
        "package": "stm-firehose",
        "partial": "Event",
        "signature": "Firehose a-\u003ea-\u003eSTM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-firehose/docs/Data-Conduit-Network-Firehose.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is here to let you easily build firehose systems. The\n\u003ccode\u003e\u003ca\u003efirehoseApp\u003c/a\u003e\u003c/code\u003e application is a standard \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e that will stream the events to clients. The \u003ccode\u003e\u003ca\u003efirehoseConduit\u003c/a\u003e\u003c/code\u003e function will spawn a web server on the given port, and let\nthe data-flow in a conduit be examined this way.\n\u003c/p\u003e\u003cp\u003eFor an example implementation, with a JSON encodable data type, see \u003ca\u003ehttp://hackage.haskell.org/package/hslogstash/docs/src/Data-Conduit-FireHose.html#fireHose\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.Network.Firehose",
        "fct-package": "stm-firehose",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Network-Firehose.html",
        "fct-type": "module",
        "title": "Firehose"
      },
      "index": {
        "description": "This module is here to let you easily build firehose systems The firehoseApp application is standard Application that will stream the events to clients The firehoseConduit function will spawn web server on the given port and let the data-flow in conduit be examined this way For an example implementation with JSON encodable data type see http hackage.haskell.org package hslogstash docs src Data-Conduit-FireHose.html fireHose",
        "hierarchy": "Data Conduit Network Firehose",
        "module": "Data.Conduit.Network.Firehose",
        "name": "Firehose",
        "normalized": "",
        "package": "stm-firehose",
        "partial": "Firehose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-firehose/docs/Data-Conduit-Network-Firehose.html#v:firehoseApp",
      "description": {
        "fct-descr": "\u003cp\u003eA firehose application, suitable for use in a wai-compatible server.\nA typical usage is with JSON encodable data, where the serialization function can be :\n\u003c/p\u003e\u003cpre\u003e -- encode to JSON, turn into a Builder, then append a newline.\n (\u003c\u003e fromByteString \"\\n\") . fromLazyByteString . encode\n\u003c/pre\u003e\u003cp\u003eThe filtering function has a type that let you create it based on the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e. That means you can use the query string to build the proper filters.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Network.Firehose",
        "fct-package": "stm-firehose",
        "fct-signature": "Int-\u003e (Request -\u003e a -\u003e Bool)-\u003e (a -\u003e Builder)-\u003e Firehose a-\u003e Application",
        "fct-type": "function",
        "title": "firehoseApp"
      },
      "index": {
        "description": "firehose application suitable for use in wai-compatible server typical usage is with JSON encodable data where the serialization function can be encode to JSON turn into Builder then append newline fromByteString fromLazyByteString encode The filtering function has type that let you create it based on the Request That means you can use the query string to build the proper filters",
        "hierarchy": "Data Conduit Network Firehose",
        "module": "Data.Conduit.Network.Firehose",
        "name": "firehoseApp",
        "normalized": "Int-\u003e(Request-\u003ea-\u003eBool)-\u003e(a-\u003eBuilder)-\u003eFirehose a-\u003eApplication",
        "package": "stm-firehose",
        "partial": "App",
        "signature": "Int-\u003e(Request-\u003ea-\u003eBool)-\u003e(a-\u003eBuilder)-\u003eFirehose a-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/stm-firehose/docs/Data-Conduit-Network-Firehose.html#v:firehoseConduit",
      "description": {
        "fct-descr": "\u003cp\u003eA fire hose conduit creator, that can be inserted in your conduits as\nfirehose entry points. Will run Warp on the specified port. Please not\nthat the connection will timeout after an hour.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Network.Firehose",
        "fct-package": "stm-firehose",
        "fct-signature": "Int-\u003e Int-\u003e (Request -\u003e a -\u003e Bool)-\u003e (a -\u003e Builder)-\u003e IO (Conduit a m a)",
        "fct-type": "function",
        "title": "firehoseConduit"
      },
      "index": {
        "description": "fire hose conduit creator that can be inserted in your conduits as firehose entry points Will run Warp on the specified port Please not that the connection will timeout after an hour",
        "hierarchy": "Data Conduit Network Firehose",
        "module": "Data.Conduit.Network.Firehose",
        "name": "firehoseConduit",
        "normalized": "Int-\u003eInt-\u003e(Request-\u003ea-\u003eBool)-\u003e(a-\u003eBuilder)-\u003eIO(Conduit a b a)",
        "package": "stm-firehose",
        "partial": "Conduit",
        "signature": "Int-\u003eInt-\u003e(Request-\u003ea-\u003eBool)-\u003e(a-\u003eBuilder)-\u003eIO(Conduit a m a)"
      }
    }
  }
]