[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Client.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClient side of Client/Server\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Client",
        "fct-package": "patterns",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Patterns-Basic-Client.html",
        "fct-type": "module",
        "title": "Client"
      },
      "index": {
        "description": "Client side of Client Server",
        "hierarchy": "Network Mom Patterns Basic Client",
        "module": "Network.Mom.Patterns.Basic.Client",
        "name": "Client",
        "normalized": "",
        "package": "patterns",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Client.html#t:Client",
      "description": {
        "fct-descr": "\u003cp\u003eClient data type\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Client",
        "fct-package": "patterns",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Patterns-Basic-Client.html#Client",
        "fct-type": "data",
        "title": "Client"
      },
      "index": {
        "description": "Client data type",
        "hierarchy": "Network Mom Patterns Basic Client",
        "module": "Network.Mom.Patterns.Basic.Client",
        "name": "Client",
        "normalized": "",
        "package": "patterns",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Client.html#v:checkResult",
      "description": {
        "fct-descr": "\u003cp\u003eCheck for a of a previously requested result;\n   use case: request with timout 0, do some work\n             and check for a result later.\n   Do not use this function without having requested the service\n      previously.\n   The parameters equal those of \u003ccode\u003e\u003ca\u003erequest\u003c/a\u003e\u003c/code\u003e,\n   but do not include a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Client",
        "fct-package": "patterns",
        "fct-signature": "Client -\u003e Timeout -\u003e SinkR (Maybe r) -\u003e IO (Maybe r)",
        "fct-source": "src/Network-Mom-Patterns-Basic-Client.html#checkResult",
        "fct-type": "function",
        "title": "checkResult"
      },
      "index": {
        "description": "Check for of previously requested result use case request with timout do some work and check for result later Do not use this function without having requested the service previously The parameters equal those of request but do not include Source",
        "hierarchy": "Network Mom Patterns Basic Client",
        "module": "Network.Mom.Patterns.Basic.Client",
        "name": "checkResult",
        "normalized": "Client-\u003eTimeout-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)",
        "package": "patterns",
        "partial": "Result",
        "signature": "Client-\u003eTimeout-\u003eSinkR(Maybe r)-\u003eIO(Maybe r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Client.html#v:clService",
      "description": {
        "fct-module": "Network.Mom.Patterns.Basic.Client",
        "fct-package": "patterns",
        "fct-signature": "Client -\u003e Service",
        "fct-source": "src/Network-Mom-Patterns-Basic-Client.html#clService",
        "fct-type": "function",
        "title": "clService"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Patterns Basic Client",
        "module": "Network.Mom.Patterns.Basic.Client",
        "name": "clService",
        "normalized": "Client-\u003eService",
        "package": "patterns",
        "partial": "Service",
        "signature": "Client-\u003eService"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Client.html#v:request",
      "description": {
        "fct-descr": "\u003cp\u003eRequest a service:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e - The client, through which the service is requested\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e - Timeout in microseconds, -1 to wait eternally.\n                 With timeout = 0, the function returns immediately\n                 with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n                 When the timeout expires, request is abandoned. \n                 In this case, the result of the request\n                 is Nothing.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e  - The source of the request stream;\n                 the format of the request will probably comply\n                 with some communication protocol,\n                 as, for instance, in the majordomo pattern.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSinkR\u003c/a\u003e\u003c/code\u003e   - The sink receiving the reply. The result of the sink\n                 is returned as the request's overall result.\n                 Note that the sink may perform different \n                 actions on the segments of the resulting stream,\n                 \u003cem\u003ee.g.\u003c/em\u003e storing data in a database,\n                 and return the number of records received.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA 'hello world' Example:\n\u003c/p\u003e\u003cpre\u003e  import qualified Data.Conduit          as C\n  import qualified Data.ByteString.Char8 as B\n  import           Network.Mom.Patterns.Basic.Client\n  import           Network.Mom.Patterns.Types\n\u003c/pre\u003e\u003cpre\u003e  main :: IO ()\n  main = withContext 1 $ \\ctx -\u003e \n           withClient ctx \"test\" \n               \"tcp://localhost:5555\" Connect $ \\c -\u003e do\n             mbX \u003c- request c (-1) src snk\n             case mbX of\n               Nothing -\u003e putStrLn \"No Result\"\n               Just x  -\u003e putStrLn $ \"Result: \" ++ x\n    where src = C.yield (B.pack \"hello world\")\n          snk = do mbX \u003c- C.await \n                   case mbX of\n                     Nothing -\u003e return Nothing\n                     Just x  -\u003e return $ Just $ B.unpack x\n\u003c/pre\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Client",
        "fct-package": "patterns",
        "fct-signature": "Client -\u003e Timeout -\u003e Source -\u003e SinkR (Maybe r) -\u003e IO (Maybe r)",
        "fct-source": "src/Network-Mom-Patterns-Basic-Client.html#request",
        "fct-type": "function",
        "title": "request"
      },
      "index": {
        "description": "Request service Client The client through which the service is requested Timeout Timeout in microseconds to wait eternally With timeout the function returns immediately with Nothing When the timeout expires request is abandoned In this case the result of the request is Nothing Source The source of the request stream the format of the request will probably comply with some communication protocol as for instance in the majordomo pattern SinkR The sink receiving the reply The result of the sink is returned as the request overall result Note that the sink may perform different actions on the segments of the resulting stream e.g storing data in database and return the number of records received hello world Example import qualified Data.Conduit as import qualified Data.ByteString.Char8 as import Network.Mom.Patterns.Basic.Client import Network.Mom.Patterns.Types main IO main withContext ctx withClient ctx test tcp localhost Connect do mbX request src snk case mbX of Nothing putStrLn No Result Just putStrLn Result where src C.yield B.pack hello world snk do mbX C.await case mbX of Nothing return Nothing Just return Just B.unpack",
        "hierarchy": "Network Mom Patterns Basic Client",
        "module": "Network.Mom.Patterns.Basic.Client",
        "name": "request",
        "normalized": "Client-\u003eTimeout-\u003eSource-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)",
        "package": "patterns",
        "partial": "",
        "signature": "Client-\u003eTimeout-\u003eSource-\u003eSinkR(Maybe r)-\u003eIO(Maybe r)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Client.html#v:withClient",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a client\n   with name \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e,\n   linking to address \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e,\n   connecting or binding the address according to \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e\n   and finally entering the action, in whose scope\n   the client lives.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Client",
        "fct-package": "patterns",
        "fct-signature": "Context -\u003e Service -\u003e String -\u003e LinkType -\u003e (Client -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Network-Mom-Patterns-Basic-Client.html#withClient",
        "fct-type": "function",
        "title": "withClient"
      },
      "index": {
        "description": "Create client with name Service linking to address String connecting or binding the address according to LinkType and finally entering the action in whose scope the client lives",
        "hierarchy": "Network Mom Patterns Basic Client",
        "module": "Network.Mom.Patterns.Basic.Client",
        "name": "withClient",
        "normalized": "Context-\u003eService-\u003eString-\u003eLinkType-\u003e(Client-\u003eIO a)-\u003eIO a",
        "package": "patterns",
        "partial": "Client",
        "signature": "Context-\u003eService-\u003eString-\u003eLinkType-\u003e(Client-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Publisher.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePublish side of 'Publish/Subscribe'\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Publisher",
        "fct-package": "patterns",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Patterns-Basic-Publisher.html",
        "fct-type": "module",
        "title": "Publisher"
      },
      "index": {
        "description": "Publish side of Publish Subscribe",
        "hierarchy": "Network Mom Patterns Basic Publisher",
        "module": "Network.Mom.Patterns.Basic.Publisher",
        "name": "Publisher",
        "normalized": "",
        "package": "patterns",
        "partial": "Publisher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Publisher.html#t:Pub",
      "description": {
        "fct-descr": "\u003cp\u003ePublisher data type\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Publisher",
        "fct-package": "patterns",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Patterns-Basic-Publisher.html#Pub",
        "fct-type": "data",
        "title": "Pub"
      },
      "index": {
        "description": "Publisher data type",
        "hierarchy": "Network Mom Patterns Basic Publisher",
        "module": "Network.Mom.Patterns.Basic.Publisher",
        "name": "Pub",
        "normalized": "",
        "package": "patterns",
        "partial": "Pub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Publisher.html#v:issue",
      "description": {
        "fct-descr": "\u003cp\u003ePublish data:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePub\u003c/a\u003e\u003c/code\u003e       - The publisher\n\u003c/li\u003e\u003cli\u003e [\u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e] - List of topics, to which these data should be\n                   published\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e    - Create the stream to publish.\n                   The first message segment\n                   contains the subscription header,\n                   \u003cem\u003ei.e.\u003c/em\u003e the comma-separated list of topics\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Publisher",
        "fct-package": "patterns",
        "fct-signature": "Pub -\u003e [Service] -\u003e Source -\u003e IO ()",
        "fct-source": "src/Network-Mom-Patterns-Basic-Publisher.html#issue",
        "fct-type": "function",
        "title": "issue"
      },
      "index": {
        "description": "Publish data Pub The publisher Service List of topics to which these data should be published Source Create the stream to publish The first message segment contains the subscription header i.e the comma-separated list of topics",
        "hierarchy": "Network Mom Patterns Basic Publisher",
        "module": "Network.Mom.Patterns.Basic.Publisher",
        "name": "issue",
        "normalized": "Pub-\u003e[Service]-\u003eSource-\u003eIO()",
        "package": "patterns",
        "partial": "",
        "signature": "Pub-\u003e[Service]-\u003eSource-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Publisher.html#v:withForwarder",
      "description": {
        "fct-descr": "\u003cp\u003eA simple forwarder,\n   \u003cem\u003ei.e.\u003c/em\u003e a device that connects to a publisher\n   and provides an additional endpoint \n   for more subscribers to connect to.\n   A forwarder, hence, is a means to extend \n   the capacity of a publisher.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e            - The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e            - The name of the forwarder\n\u003c/li\u003e\u003cli\u003e (String, \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e) - access point for subscribers;\n                            usually, you want to bind\n                            the address, such that subscribers\n                            connect to it.\n\u003c/li\u003e\u003cli\u003e (String, \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e) - access point for the publisher;\n                            usually, you want to connect \n                            to the publisher.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOnError_\u003c/a\u003e\u003c/code\u003e           - Error handler\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e a          - Control loop\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Publisher",
        "fct-package": "patterns",
        "fct-signature": "Context -\u003e Service -\u003e [Service] -\u003e (String, LinkType) -\u003e (String, LinkType) -\u003e OnError_ -\u003e Control a -\u003e IO a",
        "fct-source": "src/Network-Mom-Patterns-Basic-Publisher.html#withForwarder",
        "fct-type": "function",
        "title": "withForwarder"
      },
      "index": {
        "description": "simple forwarder i.e device that connects to publisher and provides an additional endpoint for more subscribers to connect to forwarder hence is means to extend the capacity of publisher Context The zeromq context Service The name of the forwarder String LinkType access point for subscribers usually you want to bind the address such that subscribers connect to it String LinkType access point for the publisher usually you want to connect to the publisher OnError Error handler Control Control loop",
        "hierarchy": "Network Mom Patterns Basic Publisher",
        "module": "Network.Mom.Patterns.Basic.Publisher",
        "name": "withForwarder",
        "normalized": "Context-\u003eService-\u003e[Service]-\u003e(String,LinkType)-\u003e(String,LinkType)-\u003eOnError_-\u003eControl a-\u003eIO a",
        "package": "patterns",
        "partial": "Forwarder",
        "signature": "Context-\u003eService-\u003e[Service]-\u003e(String,LinkType)-\u003e(String,LinkType)-\u003eOnError_-\u003eControl a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Publisher.html#v:withPub",
      "description": {
        "fct-descr": "\u003cp\u003eCreate and link a publisher:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e     -  The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e      -  The service address\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e    -  How to link (bind or connect)\n\u003c/li\u003e\u003cli\u003e (Pub -\u003e IO a) -  The action, in whose scope the publisher lives\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Publisher",
        "fct-package": "patterns",
        "fct-signature": "Context -\u003e String -\u003e LinkType -\u003e (Pub -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Network-Mom-Patterns-Basic-Publisher.html#withPub",
        "fct-type": "function",
        "title": "withPub"
      },
      "index": {
        "description": "Create and link publisher Context The zeromq context String The service address LinkType How to link bind or connect Pub IO The action in whose scope the publisher lives",
        "hierarchy": "Network Mom Patterns Basic Publisher",
        "module": "Network.Mom.Patterns.Basic.Publisher",
        "name": "withPub",
        "normalized": "Context-\u003eString-\u003eLinkType-\u003e(Pub-\u003eIO a)-\u003eIO a",
        "package": "patterns",
        "partial": "Pub",
        "signature": "Context-\u003eString-\u003eLinkType-\u003e(Pub-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Puller.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePuller side of 'Pipeline'\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Puller",
        "fct-package": "patterns",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Patterns-Basic-Puller.html",
        "fct-type": "module",
        "title": "Puller"
      },
      "index": {
        "description": "Puller side of Pipeline",
        "hierarchy": "Network Mom Patterns Basic Puller",
        "module": "Network.Mom.Patterns.Basic.Puller",
        "name": "Puller",
        "normalized": "",
        "package": "patterns",
        "partial": "Puller",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Puller.html#v:withPipe",
      "description": {
        "fct-descr": "\u003cp\u003eA pipeline extends the capacity of the \n   pusher-puller chain;\n   a pipeline connects to a pusher\n   and provides an access point to a set of pullers.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e            - The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e            - The service name of this queue\n\u003c/li\u003e\u003cli\u003e (String, \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e) - Address and link type, to where pullers\n                            connect. Note: if pullers connect,\n                            the pipeline must bind the address!\n\u003c/li\u003e\u003cli\u003e (String, \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e) - Address and link type that pushers bind.\n                            Note, again, that \n                            if pusher bind, the pipeline must\n                            connect to the address!\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOnError_\u003c/a\u003e\u003c/code\u003e           - Error handler\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e a          - \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e action\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Puller",
        "fct-package": "patterns",
        "fct-signature": "Context -\u003e Service -\u003e (String, LinkType) -\u003e (String, LinkType) -\u003e OnError_ -\u003e (Controller -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Network-Mom-Patterns-Basic-Puller.html#withPipe",
        "fct-type": "function",
        "title": "withPipe"
      },
      "index": {
        "description": "pipeline extends the capacity of the pusher-puller chain pipeline connects to pusher and provides an access point to set of pullers Context The zeromq context Service The service name of this queue String LinkType Address and link type to where pullers connect Note if pullers connect the pipeline must bind the address String LinkType Address and link type that pushers bind Note again that if pusher bind the pipeline must connect to the address OnError Error handler Control Controller action",
        "hierarchy": "Network Mom Patterns Basic Puller",
        "module": "Network.Mom.Patterns.Basic.Puller",
        "name": "withPipe",
        "normalized": "Context-\u003eService-\u003e(String,LinkType)-\u003e(String,LinkType)-\u003eOnError_-\u003e(Controller-\u003eIO a)-\u003eIO a",
        "package": "patterns",
        "partial": "Pipe",
        "signature": "Context-\u003eService-\u003e(String,LinkType)-\u003e(String,LinkType)-\u003eOnError_-\u003e(Controller-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Puller.html#v:withPuller",
      "description": {
        "fct-descr": "\u003cp\u003eStart a puller as a background service:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e   - The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e   - Service name of this worker\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e    - The address to link to\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e  - Whether to connect to or to bind the address;\n                   usually you want to connect many workers\n                   to one pusher\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOnError_\u003c/a\u003e\u003c/code\u003e  - Error handler\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e      - The application-defined sink\n                   that does the job sent down the pipeline\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e a - Control loop\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Puller",
        "fct-package": "patterns",
        "fct-signature": "Context -\u003e Service -\u003e String -\u003e LinkType -\u003e OnError_ -\u003e Sink -\u003e (Controller -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Network-Mom-Patterns-Basic-Puller.html#withPuller",
        "fct-type": "function",
        "title": "withPuller"
      },
      "index": {
        "description": "Start puller as background service Context The zeromq context Service Service name of this worker String The address to link to LinkType Whether to connect to or to bind the address usually you want to connect many workers to one pusher OnError Error handler Sink The application-defined sink that does the job sent down the pipeline Control Control loop",
        "hierarchy": "Network Mom Patterns Basic Puller",
        "module": "Network.Mom.Patterns.Basic.Puller",
        "name": "withPuller",
        "normalized": "Context-\u003eService-\u003eString-\u003eLinkType-\u003eOnError_-\u003eSink-\u003e(Controller-\u003eIO a)-\u003eIO a",
        "package": "patterns",
        "partial": "Puller",
        "signature": "Context-\u003eService-\u003eString-\u003eLinkType-\u003eOnError_-\u003eSink-\u003e(Controller-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Pusher.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePusher side of 'Pipeline'\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Pusher",
        "fct-package": "patterns",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Patterns-Basic-Pusher.html",
        "fct-type": "module",
        "title": "Pusher"
      },
      "index": {
        "description": "Pusher side of Pipeline",
        "hierarchy": "Network Mom Patterns Basic Pusher",
        "module": "Network.Mom.Patterns.Basic.Pusher",
        "name": "Pusher",
        "normalized": "",
        "package": "patterns",
        "partial": "Pusher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Pusher.html#t:Pusher",
      "description": {
        "fct-descr": "\u003cp\u003eThe pusher data type\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Pusher",
        "fct-package": "patterns",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Patterns-Basic-Pusher.html#Pusher",
        "fct-type": "data",
        "title": "Pusher"
      },
      "index": {
        "description": "The pusher data type",
        "hierarchy": "Network Mom Patterns Basic Pusher",
        "module": "Network.Mom.Patterns.Basic.Pusher",
        "name": "Pusher",
        "normalized": "",
        "package": "patterns",
        "partial": "Pusher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Pusher.html#v:push",
      "description": {
        "fct-descr": "\u003cp\u003ePush a job down the pipeline;\n   the \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e creates the outgoing stream.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Pusher",
        "fct-package": "patterns",
        "fct-signature": "Pusher -\u003e Source -\u003e IO ()",
        "fct-source": "src/Network-Mom-Patterns-Basic-Pusher.html#push",
        "fct-type": "function",
        "title": "push"
      },
      "index": {
        "description": "Push job down the pipeline the Source creates the outgoing stream",
        "hierarchy": "Network Mom Patterns Basic Pusher",
        "module": "Network.Mom.Patterns.Basic.Pusher",
        "name": "push",
        "normalized": "Pusher-\u003eSource-\u003eIO()",
        "package": "patterns",
        "partial": "",
        "signature": "Pusher-\u003eSource-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Pusher.html#v:withPusher",
      "description": {
        "fct-descr": "\u003cp\u003eThe function in whose scope the pusher lives:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e          - The zeromq Context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e           - The address\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e         - Link type; usually, you want to bind\n                          a pusher to its address\n\u003c/li\u003e\u003cli\u003e (\u003ccode\u003e\u003ca\u003ePusher\u003c/a\u003e\u003c/code\u003e -\u003e IO a) - Action in whose scope the pusher lives\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Pusher",
        "fct-package": "patterns",
        "fct-signature": "Context -\u003e String -\u003e LinkType -\u003e (Pusher -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Network-Mom-Patterns-Basic-Pusher.html#withPusher",
        "fct-type": "function",
        "title": "withPusher"
      },
      "index": {
        "description": "The function in whose scope the pusher lives Context The zeromq Context String The address LinkType Link type usually you want to bind pusher to its address Pusher IO Action in whose scope the pusher lives",
        "hierarchy": "Network Mom Patterns Basic Pusher",
        "module": "Network.Mom.Patterns.Basic.Pusher",
        "name": "withPusher",
        "normalized": "Context-\u003eString-\u003eLinkType-\u003e(Pusher-\u003eIO a)-\u003eIO a",
        "package": "patterns",
        "partial": "Pusher",
        "signature": "Context-\u003eString-\u003eLinkType-\u003e(Pusher-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Server.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eServer side of 'Client/Server'\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Server",
        "fct-package": "patterns",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Patterns-Basic-Server.html",
        "fct-type": "module",
        "title": "Server"
      },
      "index": {
        "description": "Server side of Client Server",
        "hierarchy": "Network Mom Patterns Basic Server",
        "module": "Network.Mom.Patterns.Basic.Server",
        "name": "Server",
        "normalized": "",
        "package": "patterns",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Server.html#v:withQueue",
      "description": {
        "fct-descr": "\u003cp\u003eA simple load balancer device to link clients and servers.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e            - The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e            - The service name of this queue\n\u003c/li\u003e\u003cli\u003e (String, \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e) - Address and link type, to where clients\n                            connect. Note if clients connect,\n                            the queue must bind the address!\n\u003c/li\u003e\u003cli\u003e (String, \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e) - Address and link type, to where servers\n                            connect. Note, again, that \n                            if servers connect, the queue must\n                            bind the address!\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOnError_\u003c/a\u003e\u003c/code\u003e           - Error handler\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e a          - \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e action\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Server",
        "fct-package": "patterns",
        "fct-signature": "Context -\u003e Service -\u003e (String, LinkType) -\u003e (String, LinkType) -\u003e OnError_ -\u003e Control a -\u003e IO a",
        "fct-source": "src/Network-Mom-Patterns-Basic-Server.html#withQueue",
        "fct-type": "function",
        "title": "withQueue"
      },
      "index": {
        "description": "simple load balancer device to link clients and servers Context The zeromq context Service The service name of this queue String LinkType Address and link type to where clients connect Note if clients connect the queue must bind the address String LinkType Address and link type to where servers connect Note again that if servers connect the queue must bind the address OnError Error handler Control Controller action",
        "hierarchy": "Network Mom Patterns Basic Server",
        "module": "Network.Mom.Patterns.Basic.Server",
        "name": "withQueue",
        "normalized": "Context-\u003eService-\u003e(String,LinkType)-\u003e(String,LinkType)-\u003eOnError_-\u003eControl a-\u003eIO a",
        "package": "patterns",
        "partial": "Queue",
        "signature": "Context-\u003eService-\u003e(String,LinkType)-\u003e(String,LinkType)-\u003eOnError_-\u003eControl a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Server.html#v:withServer",
      "description": {
        "fct-descr": "\u003cp\u003eStart a server as a background process\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e   - The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e   - Service name\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e    - The address to link to\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e  - Whether to connect to or to bind the address\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOnError_\u003c/a\u003e\u003c/code\u003e  - Error handler\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eConduit_\u003c/a\u003e\u003c/code\u003e  - The application-defined stream transformer;\n                   the conduit receives the request as input stream\n                   and should create the output stream that is\n                   internally sent back to the client\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e a - Control action\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA very simple example, which just sends the incoming stream\n back to the client (\u003ccode\u003ebounce\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e  import           Control.Monad (forever)\n  import           Control.Concurrent\n  import           Network.Mom.Patterns.Basic.Server\n  import           Network.Mom.Patterns.Types\n\u003c/pre\u003e\u003cpre\u003e  main :: IO ()\n  main = withContext 1 $ \\ctx -\u003e \n             withServer ctx \"Bouncer\" \"tcp://*:5555\" Bind\n                        (\\_ _ _ -\u003e return ()) -- ignore error\n                        bounce $ \\_ -\u003e forever $ threadDelay 100000\n    where bounce = passThrough\n\u003c/pre\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Server",
        "fct-package": "patterns",
        "fct-signature": "Context -\u003e Service -\u003e String -\u003e LinkType -\u003e OnError_ -\u003e Conduit_ -\u003e Control a -\u003e IO a",
        "fct-source": "src/Network-Mom-Patterns-Basic-Server.html#withServer",
        "fct-type": "function",
        "title": "withServer"
      },
      "index": {
        "description": "Start server as background process Context The zeromq context Service Service name String The address to link to LinkType Whether to connect to or to bind the address OnError Error handler Conduit The application-defined stream transformer the conduit receives the request as input stream and should create the output stream that is internally sent back to the client Control Control action very simple example which just sends the incoming stream back to the client bounce import Control.Monad forever import Control.Concurrent import Network.Mom.Patterns.Basic.Server import Network.Mom.Patterns.Types main IO main withContext ctx withServer ctx Bouncer tcp Bind return ignore error bounce forever threadDelay where bounce passThrough",
        "hierarchy": "Network Mom Patterns Basic Server",
        "module": "Network.Mom.Patterns.Basic.Server",
        "name": "withServer",
        "normalized": "Context-\u003eService-\u003eString-\u003eLinkType-\u003eOnError_-\u003eConduit_-\u003eControl a-\u003eIO a",
        "package": "patterns",
        "partial": "Server",
        "signature": "Context-\u003eService-\u003eString-\u003eLinkType-\u003eOnError_-\u003eConduit_-\u003eControl a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Subscriber.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSubscriber side of 'Publish Subscribe'\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Subscriber",
        "fct-package": "patterns",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Patterns-Basic-Subscriber.html",
        "fct-type": "module",
        "title": "Subscriber"
      },
      "index": {
        "description": "Subscriber side of Publish Subscribe",
        "hierarchy": "Network Mom Patterns Basic Subscriber",
        "module": "Network.Mom.Patterns.Basic.Subscriber",
        "name": "Subscriber",
        "normalized": "",
        "package": "patterns",
        "partial": "Subscriber",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Subscriber.html#t:Sub",
      "description": {
        "fct-descr": "\u003cp\u003eSubscription data type\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Subscriber",
        "fct-package": "patterns",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Patterns-Basic-Subscriber.html#Sub",
        "fct-type": "data",
        "title": "Sub"
      },
      "index": {
        "description": "Subscription data type",
        "hierarchy": "Network Mom Patterns Basic Subscriber",
        "module": "Network.Mom.Patterns.Basic.Subscriber",
        "name": "Sub",
        "normalized": "",
        "package": "patterns",
        "partial": "Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Subscriber.html#v:checkSub",
      "description": {
        "fct-descr": "\u003cp\u003eCheck for new data:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSub\u003c/a\u003e\u003c/code\u003e     - The subscriber\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e - When timeout expires,\n                 the function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n                 Timeout may be \n                 -1  - listen eternally,\n                 0   - return immediately,\n                 \u003e 0 - timeout in microseconds\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSinkR\u003c/a\u003e\u003c/code\u003e   - Sink the result stream.\n                 Note that the subscription header,\n                 \u003cem\u003ei.e.\u003c/em\u003e a message segment containing\n                        a comma-separated list \n                        of the topics, to which\n                        the data belong,\n                 is dropped.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Subscriber",
        "fct-package": "patterns",
        "fct-signature": "Sub -\u003e Timeout -\u003e SinkR (Maybe a) -\u003e IO (Maybe a)",
        "fct-source": "src/Network-Mom-Patterns-Basic-Subscriber.html#checkSub",
        "fct-type": "function",
        "title": "checkSub"
      },
      "index": {
        "description": "Check for new data Sub The subscriber Timeout When timeout expires the function returns Nothing Timeout may be listen eternally return immediately timeout in microseconds SinkR Sink the result stream Note that the subscription header i.e message segment containing comma-separated list of the topics to which the data belong is dropped",
        "hierarchy": "Network Mom Patterns Basic Subscriber",
        "module": "Network.Mom.Patterns.Basic.Subscriber",
        "name": "checkSub",
        "normalized": "Sub-\u003eTimeout-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)",
        "package": "patterns",
        "partial": "Sub",
        "signature": "Sub-\u003eTimeout-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Subscriber.html#v:subscribe",
      "description": {
        "fct-descr": "\u003cp\u003eSubscribe to a list of topics;\n   Note that a subscriber has to subscribe to at least one topic\n   to receive any data.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSub\u003c/a\u003e\u003c/code\u003e       - The subscriber\n\u003c/li\u003e\u003cli\u003e [\u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e] - The list of topics to subscribe to\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Subscriber",
        "fct-package": "patterns",
        "fct-signature": "Sub -\u003e [Service] -\u003e IO ()",
        "fct-source": "src/Network-Mom-Patterns-Basic-Subscriber.html#subscribe",
        "fct-type": "function",
        "title": "subscribe"
      },
      "index": {
        "description": "Subscribe to list of topics Note that subscriber has to subscribe to at least one topic to receive any data Sub The subscriber Service The list of topics to subscribe to",
        "hierarchy": "Network Mom Patterns Basic Subscriber",
        "module": "Network.Mom.Patterns.Basic.Subscriber",
        "name": "subscribe",
        "normalized": "Sub-\u003e[Service]-\u003eIO()",
        "package": "patterns",
        "partial": "",
        "signature": "Sub-\u003e[Service]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Subscriber.html#v:withSub",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a subscription and start the action, in which it lives\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e       - The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e        - The address \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e      - The link type, usually Connect\n\u003c/li\u003e\u003cli\u003e (\u003ccode\u003e\u003ca\u003eSub\u003c/a\u003e\u003c/code\u003e -\u003e IO a) - The action, in which the subscription lives\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Patterns.Basic.Subscriber",
        "fct-package": "patterns",
        "fct-signature": "Context -\u003e String -\u003e LinkType -\u003e (Sub -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Network-Mom-Patterns-Basic-Subscriber.html#withSub",
        "fct-type": "function",
        "title": "withSub"
      },
      "index": {
        "description": "Create subscription and start the action in which it lives Context The zeromq context String The address LinkType The link type usually Connect Sub IO The action in which the subscription lives",
        "hierarchy": "Network Mom Patterns Basic Subscriber",
        "module": "Network.Mom.Patterns.Basic.Subscriber",
        "name": "withSub",
        "normalized": "Context-\u003eString-\u003eLinkType-\u003e(Sub-\u003eIO a)-\u003eIO a",
        "package": "patterns",
        "partial": "Sub",
        "signature": "Context-\u003eString-\u003eLinkType-\u003e(Sub-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic communication patterns\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Patterns.Basic",
        "fct-package": "patterns",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Patterns-Basic.html",
        "fct-type": "module",
        "title": "Basic"
      },
      "index": {
        "description": "Basic communication patterns",
        "hierarchy": "Network Mom Patterns Basic",
        "module": "Network.Mom.Patterns.Basic",
        "name": "Basic",
        "normalized": "",
        "package": "patterns",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Broker.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMajordomo Broker\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Broker",
        "fct-package": "patterns",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Patterns-Broker-Broker.html",
        "fct-type": "module",
        "title": "Broker"
      },
      "index": {
        "description": "Majordomo Broker",
        "hierarchy": "Network Mom Patterns Broker Broker",
        "module": "Network.Mom.Patterns.Broker.Broker",
        "name": "Broker",
        "normalized": "",
        "package": "patterns",
        "partial": "Broker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Broker.html#v:withBroker",
      "description": {
        "fct-descr": "\u003cp\u003eStart a broker as a background process\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e   - The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e   - Service name -\n                   the service name is for debugging only,\n                   there is no relation whatsoever\n                   to the service of the Majordomo Protocol.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eMsec\u003c/a\u003e\u003c/code\u003e      - The heartbeat interval in milliseconds,\n                   which should be equal \n                   for all workers and the broker \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e    - The address clients connect to\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e    - The address servers connect to\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOnError_\u003c/a\u003e\u003c/code\u003e  - Error handler\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e a - Control action\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Broker",
        "fct-package": "patterns",
        "fct-signature": "Context -\u003e Service -\u003e Msec -\u003e String -\u003e String -\u003e OnError_ -\u003e (Controller -\u003e IO r) -\u003e IO r",
        "fct-source": "src/Network-Mom-Patterns-Broker-Broker.html#withBroker",
        "fct-type": "function",
        "title": "withBroker"
      },
      "index": {
        "description": "Start broker as background process Context The zeromq context Service Service name the service name is for debugging only there is no relation whatsoever to the service of the Majordomo Protocol Msec The heartbeat interval in milliseconds which should be equal for all workers and the broker String The address clients connect to String The address servers connect to OnError Error handler Control Control action",
        "hierarchy": "Network Mom Patterns Broker Broker",
        "module": "Network.Mom.Patterns.Broker.Broker",
        "name": "withBroker",
        "normalized": "Context-\u003eService-\u003eMsec-\u003eString-\u003eString-\u003eOnError_-\u003e(Controller-\u003eIO a)-\u003eIO a",
        "package": "patterns",
        "partial": "Broker",
        "signature": "Context-\u003eService-\u003eMsec-\u003eString-\u003eString-\u003eOnError_-\u003e(Controller-\u003eIO r)-\u003eIO r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Client.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMajordomo Client\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Client",
        "fct-package": "patterns",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Patterns-Broker-Client.html",
        "fct-type": "module",
        "title": "Client"
      },
      "index": {
        "description": "Majordomo Client",
        "hierarchy": "Network Mom Patterns Broker Client",
        "module": "Network.Mom.Patterns.Broker.Client",
        "name": "Client",
        "normalized": "",
        "package": "patterns",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Client.html#t:Client",
      "description": {
        "fct-descr": "\u003cp\u003eClient data type\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Client",
        "fct-package": "patterns",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Patterns-Broker-Client.html#Client",
        "fct-type": "data",
        "title": "Client"
      },
      "index": {
        "description": "Client data type",
        "hierarchy": "Network Mom Patterns Broker Client",
        "module": "Network.Mom.Patterns.Broker.Client",
        "name": "Client",
        "normalized": "",
        "package": "patterns",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Client.html#v:checkResult",
      "description": {
        "fct-descr": "\u003cp\u003eCheck for a of a previously requested result;\n   use case: request with timout 0, do some work\n             and check for a result later.\n   Do not use this function without having requested the service\n      previously.\n   The parameters equal those of \u003ccode\u003e\u003ca\u003erequest\u003c/a\u003e\u003c/code\u003e,\n   but do not include a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Client",
        "fct-package": "patterns",
        "fct-signature": "Client -\u003e Timeout -\u003e SinkR (Maybe a) -\u003e IO (Maybe a)",
        "fct-source": "src/Network-Mom-Patterns-Broker-Client.html#checkResult",
        "fct-type": "function",
        "title": "checkResult"
      },
      "index": {
        "description": "Check for of previously requested result use case request with timout do some work and check for result later Do not use this function without having requested the service previously The parameters equal those of request but do not include Source",
        "hierarchy": "Network Mom Patterns Broker Client",
        "module": "Network.Mom.Patterns.Broker.Client",
        "name": "checkResult",
        "normalized": "Client-\u003eTimeout-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)",
        "package": "patterns",
        "partial": "Result",
        "signature": "Client-\u003eTimeout-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Client.html#v:checkService",
      "description": {
        "fct-descr": "\u003cp\u003eService discovery:\n   The function checks whether the client's service \n   is provided by the broker.\n\u003c/p\u003e\u003cp\u003eReturn values:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Nothing: The broker timed out\n\u003c/li\u003e\u003cli\u003e Just False: The service is not available\n\u003c/li\u003e\u003cli\u003e Just True: The service is available\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Client",
        "fct-package": "patterns",
        "fct-signature": "Client -\u003e Timeout -\u003e IO (Maybe Bool)",
        "fct-source": "src/Network-Mom-Patterns-Broker-Client.html#checkService",
        "fct-type": "function",
        "title": "checkService"
      },
      "index": {
        "description": "Service discovery The function checks whether the client service is provided by the broker Return values Nothing The broker timed out Just False The service is not available Just True The service is available",
        "hierarchy": "Network Mom Patterns Broker Client",
        "module": "Network.Mom.Patterns.Broker.Client",
        "name": "checkService",
        "normalized": "Client-\u003eTimeout-\u003eIO(Maybe Bool)",
        "package": "patterns",
        "partial": "Service",
        "signature": "Client-\u003eTimeout-\u003eIO(Maybe Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Client.html#v:request",
      "description": {
        "fct-descr": "\u003cp\u003eRequest a service:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e - The client, through which the service is requested\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e - Timeout in microseconds, -1 to wait eternally.\n                 With timeout = 0, the function returns immediately\n                 with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n                 When the timeout expires, request is abandoned. \n                 In this case, the result of the request\n                 is Nothing.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e  - The source of the request stream;\n                 the format of the request will probably comply\n                 with some communication protocol,\n                 as, for instance, in the majordomo pattern.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSinkR\u003c/a\u003e\u003c/code\u003e   - The sink receiving the reply. The result of the sink\n                 is returned as the request's overall result.\n                 Note that the sink may perform different \n                 actions on the segments of the resulting stream,\n                 \u003cem\u003ee.g.\u003c/em\u003e storing data in a database,\n                 and return the number of records received.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Client",
        "fct-package": "patterns",
        "fct-signature": "Client -\u003e Timeout -\u003e Source -\u003e SinkR (Maybe a) -\u003e IO (Maybe a)",
        "fct-source": "src/Network-Mom-Patterns-Broker-Client.html#request",
        "fct-type": "function",
        "title": "request"
      },
      "index": {
        "description": "Request service Client The client through which the service is requested Timeout Timeout in microseconds to wait eternally With timeout the function returns immediately with Nothing When the timeout expires request is abandoned In this case the result of the request is Nothing Source The source of the request stream the format of the request will probably comply with some communication protocol as for instance in the majordomo pattern SinkR The sink receiving the reply The result of the sink is returned as the request overall result Note that the sink may perform different actions on the segments of the resulting stream e.g storing data in database and return the number of records received",
        "hierarchy": "Network Mom Patterns Broker Client",
        "module": "Network.Mom.Patterns.Broker.Client",
        "name": "request",
        "normalized": "Client-\u003eTimeout-\u003eSource-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)",
        "package": "patterns",
        "partial": "",
        "signature": "Client-\u003eTimeout-\u003eSource-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Client.html#v:withClient",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a client and start the action, \n   in whose scope the client lives;\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Client",
        "fct-package": "patterns",
        "fct-signature": "Context -\u003e Service -\u003e String -\u003e LinkType -\u003e (Client -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Network-Mom-Patterns-Broker-Client.html#withClient",
        "fct-type": "function",
        "title": "withClient"
      },
      "index": {
        "description": "Create client and start the action in whose scope the client lives",
        "hierarchy": "Network Mom Patterns Broker Client",
        "module": "Network.Mom.Patterns.Broker.Client",
        "name": "withClient",
        "normalized": "Context-\u003eService-\u003eString-\u003eLinkType-\u003e(Client-\u003eIO a)-\u003eIO a",
        "package": "patterns",
        "partial": "Client",
        "signature": "Context-\u003eService-\u003eString-\u003eLinkType-\u003e(Client-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMajordomo common definitions\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html",
        "fct-type": "module",
        "title": "Common"
      },
      "index": {
        "description": "Majordomo common definitions",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "Common",
        "normalized": "",
        "package": "patterns",
        "partial": "Common",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#t:FrameType",
      "description": {
        "fct-descr": "\u003cp\u003eWorker Frame Type\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#FrameType",
        "fct-type": "data",
        "title": "FrameType"
      },
      "index": {
        "description": "Worker Frame Type",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "FrameType",
        "normalized": "",
        "package": "patterns",
        "partial": "Frame Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#t:MDPException",
      "description": {
        "fct-descr": "\u003cp\u003eMDP Exception\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#MDPException",
        "fct-type": "data",
        "title": "MDPException"
      },
      "index": {
        "description": "MDP Exception",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "MDPException",
        "normalized": "",
        "package": "patterns",
        "partial": "MDPException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#t:ServiceName",
      "description": {
        "fct-descr": "\u003cp\u003eService name \n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#ServiceName",
        "fct-type": "type",
        "title": "ServiceName"
      },
      "index": {
        "description": "Service name",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "ServiceName",
        "normalized": "",
        "package": "patterns",
        "partial": "Service Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#t:WFrame",
      "description": {
        "fct-descr": "\u003cp\u003eBroker / Server protocol:\n  Heartbeat, Ready, Reply, Request, Disconnect\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#WFrame",
        "fct-type": "data",
        "title": "WFrame"
      },
      "index": {
        "description": "Broker Server protocol Heartbeat Ready Reply Request Disconnect",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "WFrame",
        "normalized": "",
        "package": "patterns",
        "partial": "WFrame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:BrokerExc",
      "description": {
        "fct-descr": "\u003cp\u003eBroker exception\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "BrokerExc String",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#MDPException",
        "fct-type": "function",
        "title": "BrokerExc"
      },
      "index": {
        "description": "Broker exception",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "BrokerExc",
        "normalized": "",
        "package": "patterns",
        "partial": "Broker Exc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:ClientExc",
      "description": {
        "fct-descr": "\u003cp\u003eClient-side exception\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ClientExc String",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#MDPException",
        "fct-type": "function",
        "title": "ClientExc"
      },
      "index": {
        "description": "Client-side exception",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "ClientExc",
        "normalized": "",
        "package": "patterns",
        "partial": "Client Exc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:DisconnectT",
      "description": {
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "DisconnectT",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#FrameType",
        "fct-type": "function",
        "title": "DisconnectT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "DisconnectT",
        "normalized": "",
        "package": "patterns",
        "partial": "Disconnect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:HeartBeatT",
      "description": {
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "HeartBeatT",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#FrameType",
        "fct-type": "function",
        "title": "HeartBeatT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "HeartBeatT",
        "normalized": "",
        "package": "patterns",
        "partial": "Heart Beat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:MDPExc",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric Protocol\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "MDPExc String",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#MDPException",
        "fct-type": "function",
        "title": "MDPExc"
      },
      "index": {
        "description": "Generic Protocol",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "MDPExc",
        "normalized": "",
        "package": "patterns",
        "partial": "MDPExc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:MMIExc",
      "description": {
        "fct-descr": "\u003cp\u003eMMI Protocol\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "MMIExc String",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#MDPException",
        "fct-type": "function",
        "title": "MMIExc"
      },
      "index": {
        "description": "MMI Protocol",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "MMIExc",
        "normalized": "",
        "package": "patterns",
        "partial": "MMIExc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:ReadyT",
      "description": {
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ReadyT",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#FrameType",
        "fct-type": "function",
        "title": "ReadyT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "ReadyT",
        "normalized": "",
        "package": "patterns",
        "partial": "Ready",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:ReplyT",
      "description": {
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ReplyT",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#FrameType",
        "fct-type": "function",
        "title": "ReplyT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "ReplyT",
        "normalized": "",
        "package": "patterns",
        "partial": "Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:RequestT",
      "description": {
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "RequestT",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#FrameType",
        "fct-type": "function",
        "title": "RequestT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "RequestT",
        "normalized": "",
        "package": "patterns",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:ServerExc",
      "description": {
        "fct-descr": "\u003cp\u003eServer-side exception\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ServerExc String",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#MDPException",
        "fct-type": "function",
        "title": "ServerExc"
      },
      "index": {
        "description": "Server-side exception",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "ServerExc",
        "normalized": "",
        "package": "patterns",
        "partial": "Server Exc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:WBeat",
      "description": {
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "WBeat Identity",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#WFrame",
        "fct-type": "function",
        "title": "WBeat"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "WBeat",
        "normalized": "",
        "package": "patterns",
        "partial": "WBeat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:WDisc",
      "description": {
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "WDisc Identity",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#WFrame",
        "fct-type": "function",
        "title": "WDisc"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "WDisc",
        "normalized": "",
        "package": "patterns",
        "partial": "WDisc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:WReady",
      "description": {
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "WReady Identity ByteString",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#WFrame",
        "fct-type": "function",
        "title": "WReady"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "WReady",
        "normalized": "",
        "package": "patterns",
        "partial": "WReady",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:WReply",
      "description": {
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "WReply Identity [Identity]",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#WFrame",
        "fct-type": "function",
        "title": "WReply"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "WReply",
        "normalized": "WReply Identity[Identity]",
        "package": "patterns",
        "partial": "WReply",
        "signature": "WReply Identity[Identity]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:WRequest",
      "description": {
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "WRequest [Identity]",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#WFrame",
        "fct-type": "function",
        "title": "WRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "WRequest",
        "normalized": "WRequest[Identity]",
        "package": "patterns",
        "partial": "WRequest",
        "signature": "WRequest[Identity]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:chunk",
      "description": {
        "fct-descr": "\u003cp\u003eCheck segment contents\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ByteString -\u003e String -\u003e Conduit o ()",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#chunk",
        "fct-type": "function",
        "title": "chunk"
      },
      "index": {
        "description": "Check segment contents",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "chunk",
        "normalized": "ByteString-\u003eString-\u003eConduit a()",
        "package": "patterns",
        "partial": "",
        "signature": "ByteString-\u003eString-\u003eConduit o()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eGet empty segment\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "Conduit o ()",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Get empty segment",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "empty",
        "normalized": "Conduit a()",
        "package": "patterns",
        "partial": "",
        "signature": "Conduit o()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:envelope",
      "description": {
        "fct-descr": "\u003cp\u003eGet block of identities (\u003ca\u003eenvelope\u003c/a\u003e)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "Conduit o [Identity]",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#envelope",
        "fct-type": "function",
        "title": "envelope"
      },
      "index": {
        "description": "Get block of identities envelope",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "envelope",
        "normalized": "Conduit a[Identity]",
        "package": "patterns",
        "partial": "",
        "signature": "Conduit o[Identity]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:frameType",
      "description": {
        "fct-descr": "\u003cp\u003eGet frame type\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "Conduit o FrameType",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#frameType",
        "fct-type": "function",
        "title": "frameType"
      },
      "index": {
        "description": "Get frame type",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "frameType",
        "normalized": "",
        "package": "patterns",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:getChunk",
      "description": {
        "fct-descr": "\u003cp\u003eGet segment contents\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "Conduit o ByteString",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#getChunk",
        "fct-type": "function",
        "title": "getChunk"
      },
      "index": {
        "description": "Get segment contents",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "getChunk",
        "normalized": "",
        "package": "patterns",
        "partial": "Chunk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:identity",
      "description": {
        "fct-descr": "\u003cp\u003eGet identity\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "Conduit o Identity",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#identity",
        "fct-type": "function",
        "title": "identity"
      },
      "index": {
        "description": "Get identity",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "identity",
        "normalized": "",
        "package": "patterns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpC01",
      "description": {
        "fct-descr": "\u003cp\u003eMajordomo protocol client/worker version 1\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mdpC01",
        "fct-type": "function",
        "title": "mdpC01"
      },
      "index": {
        "description": "Majordomo protocol client worker version",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mdpC01",
        "normalized": "",
        "package": "patterns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpCRcvRep",
      "description": {
        "fct-descr": "\u003cp\u003eBroker -\u003e Client: receive reply\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ServiceName -\u003e Conduit ByteString ()",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mdpCRcvRep",
        "fct-type": "function",
        "title": "mdpCRcvRep"
      },
      "index": {
        "description": "Broker Client receive reply",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mdpCRcvRep",
        "normalized": "ServiceName-\u003eConduit ByteString()",
        "package": "patterns",
        "partial": "CRcv Rep",
        "signature": "ServiceName-\u003eConduit ByteString()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpCRcvReq",
      "description": {
        "fct-descr": "\u003cp\u003eClient -\u003e Broker: receive request\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "Conduit o (Identity, ByteString)",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mdpCRcvReq",
        "fct-type": "function",
        "title": "mdpCRcvReq"
      },
      "index": {
        "description": "Client Broker receive request",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mdpCRcvReq",
        "normalized": "Conduit a(Identity,ByteString)",
        "package": "patterns",
        "partial": "CRcv Req",
        "signature": "Conduit o(Identity,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpCSndRep",
      "description": {
        "fct-descr": "\u003cp\u003eBroker -\u003e Client: send reply\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ByteString -\u003e [Identity] -\u003e Conduit ByteString ()",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mdpCSndRep",
        "fct-type": "function",
        "title": "mdpCSndRep"
      },
      "index": {
        "description": "Broker Client send reply",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mdpCSndRep",
        "normalized": "ByteString-\u003e[Identity]-\u003eConduit ByteString()",
        "package": "patterns",
        "partial": "CSnd Rep",
        "signature": "ByteString-\u003e[Identity]-\u003eConduit ByteString()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpCSndReq",
      "description": {
        "fct-descr": "\u003cp\u003eClient -\u003e Broker: send request\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ServiceName -\u003e Conduit ByteString ()",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mdpCSndReq",
        "fct-type": "function",
        "title": "mdpCSndReq"
      },
      "index": {
        "description": "Client Broker send request",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mdpCSndReq",
        "normalized": "ServiceName-\u003eConduit ByteString()",
        "package": "patterns",
        "partial": "CSnd Req",
        "signature": "ServiceName-\u003eConduit ByteString()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpW01",
      "description": {
        "fct-descr": "\u003cp\u003eMajordomo protocol client/worker version 1\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mdpW01",
        "fct-type": "function",
        "title": "mdpW01"
      },
      "index": {
        "description": "Majordomo protocol client worker version",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mdpW01",
        "normalized": "",
        "package": "patterns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpWBeat",
      "description": {
        "fct-descr": "\u003cp\u003eBroker \u003c-\u003e Server: send heartbeat \n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "Conduit ByteString ()",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mdpWBeat",
        "fct-type": "function",
        "title": "mdpWBeat"
      },
      "index": {
        "description": "Broker Server send heartbeat",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mdpWBeat",
        "normalized": "Conduit ByteString()",
        "package": "patterns",
        "partial": "WBeat",
        "signature": "Conduit ByteString()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpWBrkDisc",
      "description": {
        "fct-descr": "\u003cp\u003eBroker -\u003e Server: disconnect\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "Identity -\u003e Source",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mdpWBrkDisc",
        "fct-type": "function",
        "title": "mdpWBrkDisc"
      },
      "index": {
        "description": "Broker Server disconnect",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mdpWBrkDisc",
        "normalized": "Identity-\u003eSource",
        "package": "patterns",
        "partial": "WBrk Disc",
        "signature": "Identity-\u003eSource"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpWConnect",
      "description": {
        "fct-descr": "\u003cp\u003eServer -\u003e Broker: send connect request (ready)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ServiceName -\u003e Source",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mdpWConnect",
        "fct-type": "function",
        "title": "mdpWConnect"
      },
      "index": {
        "description": "Server Broker send connect request ready",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mdpWConnect",
        "normalized": "ServiceName-\u003eSource",
        "package": "patterns",
        "partial": "WConnect",
        "signature": "ServiceName-\u003eSource"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpWDisconnect",
      "description": {
        "fct-descr": "\u003cp\u003eServer -\u003e Broker: disconnect \n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "Source",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mdpWDisconnect",
        "fct-type": "function",
        "title": "mdpWDisconnect"
      },
      "index": {
        "description": "Server Broker disconnect",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mdpWDisconnect",
        "normalized": "",
        "package": "patterns",
        "partial": "WDisconnect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpWRcvRep",
      "description": {
        "fct-descr": "\u003cp\u003eServer -\u003e Broker: receive reply\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "Conduit o WFrame",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mdpWRcvRep",
        "fct-type": "function",
        "title": "mdpWRcvRep"
      },
      "index": {
        "description": "Server Broker receive reply",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mdpWRcvRep",
        "normalized": "",
        "package": "patterns",
        "partial": "WRcv Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpWRcvReq",
      "description": {
        "fct-descr": "\u003cp\u003eBroker -\u003e Server: receive request \n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "Conduit o WFrame",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mdpWRcvReq",
        "fct-type": "function",
        "title": "mdpWRcvReq"
      },
      "index": {
        "description": "Broker Server receive request",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mdpWRcvReq",
        "normalized": "",
        "package": "patterns",
        "partial": "WRcv Req",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpWSndRep",
      "description": {
        "fct-descr": "\u003cp\u003eServer -\u003e Broker: send reply\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "[Identity] -\u003e Conduit ByteString ()",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mdpWSndRep",
        "fct-type": "function",
        "title": "mdpWSndRep"
      },
      "index": {
        "description": "Server Broker send reply",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mdpWSndRep",
        "normalized": "[Identity]-\u003eConduit ByteString()",
        "package": "patterns",
        "partial": "WSnd Rep",
        "signature": "[Identity]-\u003eConduit ByteString()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpWSndReq",
      "description": {
        "fct-descr": "\u003cp\u003eBroker -\u003e Server: send request \n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "Identity -\u003e [Identity] -\u003e Conduit ByteString ()",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mdpWSndReq",
        "fct-type": "function",
        "title": "mdpWSndReq"
      },
      "index": {
        "description": "Broker Server send request",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mdpWSndReq",
        "normalized": "Identity-\u003e[Identity]-\u003eConduit ByteString()",
        "package": "patterns",
        "partial": "WSnd Req",
        "signature": "Identity-\u003e[Identity]-\u003eConduit ByteString()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mmiFound",
      "description": {
        "fct-descr": "\u003cp\u003eMajordomo Management Interface -- responses:\n   Found (\"200\"), NotFound (\"404\"), NotImplemented (\"501\")\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mmiFound",
        "fct-type": "function",
        "title": "mmiFound"
      },
      "index": {
        "description": "Majordomo Management Interface responses Found NotFound NotImplemented",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mmiFound",
        "normalized": "",
        "package": "patterns",
        "partial": "Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mmiHdr",
      "description": {
        "fct-descr": "\u003cp\u003eMajordomo Management Interface (MMI) -\n   \"mmi.service\" \n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mmiHdr",
        "fct-type": "function",
        "title": "mmiHdr"
      },
      "index": {
        "description": "Majordomo Management Interface MMI mmi.service",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mmiHdr",
        "normalized": "",
        "package": "patterns",
        "partial": "Hdr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mmiNimpl",
      "description": {
        "fct-descr": "\u003cp\u003eMajordomo Management Interface -- responses:\n   Found (\"200\"), NotFound (\"404\"), NotImplemented (\"501\")\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mmiNimpl",
        "fct-type": "function",
        "title": "mmiNimpl"
      },
      "index": {
        "description": "Majordomo Management Interface responses Found NotFound NotImplemented",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mmiNimpl",
        "normalized": "",
        "package": "patterns",
        "partial": "Nimpl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mmiNotFound",
      "description": {
        "fct-descr": "\u003cp\u003eMajordomo Management Interface -- responses:\n   Found (\"200\"), NotFound (\"404\"), NotImplemented (\"501\")\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mmiNotFound",
        "fct-type": "function",
        "title": "mmiNotFound"
      },
      "index": {
        "description": "Majordomo Management Interface responses Found NotFound NotImplemented",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mmiNotFound",
        "normalized": "",
        "package": "patterns",
        "partial": "Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mmiSrv",
      "description": {
        "fct-descr": "\u003cp\u003eMajordomo Management Interface (MMI) -\n   \"mmi.service\" \n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#mmiSrv",
        "fct-type": "function",
        "title": "mmiSrv"
      },
      "index": {
        "description": "Majordomo Management Interface MMI mmi.service",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "mmiSrv",
        "normalized": "",
        "package": "patterns",
        "partial": "Srv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:toIs",
      "description": {
        "fct-descr": "\u003cp\u003eCreate envelope [(identity, B.empty)]\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "[Identity] -\u003e [ByteString]",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#toIs",
        "fct-type": "function",
        "title": "toIs"
      },
      "index": {
        "description": "Create envelope identity B.empty",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "toIs",
        "normalized": "[Identity]-\u003e[ByteString]",
        "package": "patterns",
        "partial": "Is",
        "signature": "[Identity]-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:xDisc",
      "description": {
        "fct-descr": "\u003cp\u003eMessage types (ready, request, reply, heartbeat, disconnect)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#xDisc",
        "fct-type": "function",
        "title": "xDisc"
      },
      "index": {
        "description": "Message types ready request reply heartbeat disconnect",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "xDisc",
        "normalized": "",
        "package": "patterns",
        "partial": "Disc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:xHeartBeat",
      "description": {
        "fct-descr": "\u003cp\u003eMessage types (ready, request, reply, heartbeat, disconnect)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#xHeartBeat",
        "fct-type": "function",
        "title": "xHeartBeat"
      },
      "index": {
        "description": "Message types ready request reply heartbeat disconnect",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "xHeartBeat",
        "normalized": "",
        "package": "patterns",
        "partial": "Heart Beat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:xReady",
      "description": {
        "fct-descr": "\u003cp\u003eMessage types (ready, request, reply, heartbeat, disconnect)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#xReady",
        "fct-type": "function",
        "title": "xReady"
      },
      "index": {
        "description": "Message types ready request reply heartbeat disconnect",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "xReady",
        "normalized": "",
        "package": "patterns",
        "partial": "Ready",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:xReply",
      "description": {
        "fct-descr": "\u003cp\u003eMessage types (ready, request, reply, heartbeat, disconnect)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#xReply",
        "fct-type": "function",
        "title": "xReply"
      },
      "index": {
        "description": "Message types ready request reply heartbeat disconnect",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "xReply",
        "normalized": "",
        "package": "patterns",
        "partial": "Reply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:xRequest",
      "description": {
        "fct-descr": "\u003cp\u003eMessage types (ready, request, reply, heartbeat, disconnect)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Common",
        "fct-package": "patterns",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Mom-Patterns-Broker-Common.html#xRequest",
        "fct-type": "function",
        "title": "xRequest"
      },
      "index": {
        "description": "Message types ready request reply heartbeat disconnect",
        "hierarchy": "Network Mom Patterns Broker Common",
        "module": "Network.Mom.Patterns.Broker.Common",
        "name": "xRequest",
        "normalized": "",
        "package": "patterns",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Server.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMajordomo Server\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Server",
        "fct-package": "patterns",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Patterns-Broker-Server.html",
        "fct-type": "module",
        "title": "Server"
      },
      "index": {
        "description": "Majordomo Server",
        "hierarchy": "Network Mom Patterns Broker Server",
        "module": "Network.Mom.Patterns.Broker.Server",
        "name": "Server",
        "normalized": "",
        "package": "patterns",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Server.html#v:withServer",
      "description": {
        "fct-descr": "\u003cp\u003eStart a server as a background process\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e   - The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e   - Service name; \n                   the service name is used to register\n                   at the broker.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eMsec\u003c/a\u003e\u003c/code\u003e      - Heartbeat in Milliseconds;\n                   must be synchronised with the broker heartbeat\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e    - The address to link to\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOnError_\u003c/a\u003e\u003c/code\u003e  - Error handler\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eConduit_\u003c/a\u003e\u003c/code\u003e  - The application-defined stream transformer;\n                   the conduit receives the request as input stream\n                   and should create the output stream that is\n                   internally sent back to the client\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e a - Control action\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Patterns.Broker.Server",
        "fct-package": "patterns",
        "fct-signature": "Context -\u003e Service -\u003e Msec -\u003e String -\u003e OnError_ -\u003e Conduit_ -\u003e Control a -\u003e IO a",
        "fct-source": "src/Network-Mom-Patterns-Broker-Server.html#withServer",
        "fct-type": "function",
        "title": "withServer"
      },
      "index": {
        "description": "Start server as background process Context The zeromq context Service Service name the service name is used to register at the broker Msec Heartbeat in Milliseconds must be synchronised with the broker heartbeat String The address to link to OnError Error handler Conduit The application-defined stream transformer the conduit receives the request as input stream and should create the output stream that is internally sent back to the client Control Control action",
        "hierarchy": "Network Mom Patterns Broker Server",
        "module": "Network.Mom.Patterns.Broker.Server",
        "name": "withServer",
        "normalized": "Context-\u003eService-\u003eMsec-\u003eString-\u003eOnError_-\u003eConduit_-\u003eControl a-\u003eIO a",
        "package": "patterns",
        "partial": "Server",
        "signature": "Context-\u003eService-\u003eMsec-\u003eString-\u003eOnError_-\u003eConduit_-\u003eControl a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMajordomo Service Broker \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Patterns.Broker",
        "fct-package": "patterns",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Patterns-Broker.html",
        "fct-type": "module",
        "title": "Broker"
      },
      "index": {
        "description": "Majordomo Service Broker",
        "hierarchy": "Network Mom Patterns Broker",
        "module": "Network.Mom.Patterns.Broker",
        "name": "Broker",
        "normalized": "",
        "package": "patterns",
        "partial": "Broker",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStream processing services\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Patterns-Streams.html",
        "fct-type": "module",
        "title": "Streams"
      },
      "index": {
        "description": "Stream processing services",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "Streams",
        "normalized": "",
        "package": "patterns",
        "partial": "Streams",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:AccessType",
      "description": {
        "fct-descr": "\u003cp\u003eDefines the type of a \u003ccode\u003e\u003ca\u003ePollEntry\u003c/a\u003e\u003c/code\u003e;\n   the names of the constructors are similar \n   to the corresponding ZMQ socket types.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#AccessType",
        "fct-type": "data",
        "title": "AccessType"
      },
      "index": {
        "description": "Defines the type of PollEntry the names of the constructors are similar to the corresponding ZMQ socket types",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "AccessType",
        "normalized": "",
        "package": "patterns",
        "partial": "Access Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:Control",
      "description": {
        "fct-descr": "\u003cp\u003eControl Action\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#Control",
        "fct-type": "type",
        "title": "Control"
      },
      "index": {
        "description": "Control Action",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "Control",
        "normalized": "",
        "package": "patterns",
        "partial": "Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:Controller",
      "description": {
        "fct-descr": "\u003cp\u003eController\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#Controller",
        "fct-type": "data",
        "title": "Controller"
      },
      "index": {
        "description": "Controller",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "Controller",
        "normalized": "",
        "package": "patterns",
        "partial": "Controller",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:LinkType",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003cem\u003ezeromq\u003c/em\u003e \u003ccode\u003eAccessPoint\u003c/code\u003e\n   can be bound or connected to its address.\n   Only one peer can bind the address,\n   all other parties have to connect.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Patterns-Types.html#LinkType",
        "fct-type": "data",
        "title": "LinkType"
      },
      "index": {
        "description": "zeromq AccessPoint can be bound or connected to its address Only one peer can bind the address all other parties have to connect",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "LinkType",
        "normalized": "",
        "package": "patterns",
        "partial": "Link Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:PollEntry",
      "description": {
        "fct-descr": "\u003cp\u003eA poll entry describes how to access and identify a socket\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#PollEntry",
        "fct-type": "data",
        "title": "PollEntry"
      },
      "index": {
        "description": "poll entry describes how to access and identify socket",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "PollEntry",
        "normalized": "",
        "package": "patterns",
        "partial": "Poll Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:StreamAction",
      "description": {
        "fct-descr": "\u003cp\u003eIO Action with Streamer (\u003cem\u003ee.g.\u003c/em\u003e Timeout action)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#StreamAction",
        "fct-type": "type",
        "title": "StreamAction"
      },
      "index": {
        "description": "IO Action with Streamer e.g Timeout action",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "StreamAction",
        "normalized": "",
        "package": "patterns",
        "partial": "Stream Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:StreamConduit",
      "description": {
        "fct-descr": "\u003cp\u003eConduit with Streamer\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#StreamConduit",
        "fct-type": "type",
        "title": "StreamConduit"
      },
      "index": {
        "description": "Conduit with Streamer",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "StreamConduit",
        "normalized": "",
        "package": "patterns",
        "partial": "Stream Conduit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:StreamSink",
      "description": {
        "fct-descr": "\u003cp\u003eSink with Streamer\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#StreamSink",
        "fct-type": "type",
        "title": "StreamSink"
      },
      "index": {
        "description": "Sink with Streamer",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "StreamSink",
        "normalized": "",
        "package": "patterns",
        "partial": "Stream Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:Streamer",
      "description": {
        "fct-descr": "\u003cp\u003eHolds information on streams and the current state of the streamer,\n   \u003cem\u003ei.e.\u003c/em\u003e the current source.\n   Streamers are passed to processing conduits.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#Streamer",
        "fct-type": "data",
        "title": "Streamer"
      },
      "index": {
        "description": "Holds information on streams and the current state of the streamer i.e the current source Streamers are passed to processing conduits",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "Streamer",
        "normalized": "",
        "package": "patterns",
        "partial": "Streamer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:Bind",
      "description": {
        "fct-descr": "\u003cp\u003eBind the address\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Bind",
        "fct-source": "src/Network-Mom-Patterns-Types.html#LinkType",
        "fct-type": "function",
        "title": "Bind"
      },
      "index": {
        "description": "Bind the address",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "Bind",
        "normalized": "",
        "package": "patterns",
        "partial": "Bind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:ClientT",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a client and connects to a server;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003eReq\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "ClientT",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#AccessType",
        "fct-type": "function",
        "title": "ClientT"
      },
      "index": {
        "description": "Represents client and connects to server corresponds to ZMQ Socket Type Req",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "ClientT",
        "normalized": "",
        "package": "patterns",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:Connect",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to the address\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Connect",
        "fct-source": "src/Network-Mom-Patterns-Types.html#LinkType",
        "fct-type": "function",
        "title": "Connect"
      },
      "index": {
        "description": "Connect to the address",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "Connect",
        "normalized": "",
        "package": "patterns",
        "partial": "Connect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:DealerT",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a router\n   expecting connections from servers;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003eXReq\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "DealerT",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#AccessType",
        "fct-type": "function",
        "title": "DealerT"
      },
      "index": {
        "description": "Represents router expecting connections from servers corresponds to ZMQ Socket Type XReq",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "DealerT",
        "normalized": "",
        "package": "patterns",
        "partial": "Dealer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:PeerT",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a Peer;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "PeerT",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#AccessType",
        "fct-type": "function",
        "title": "PeerT"
      },
      "index": {
        "description": "Represents Peer corresponds to ZMQ Socket Type Pair",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "PeerT",
        "normalized": "",
        "package": "patterns",
        "partial": "Peer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:PipeT",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a Pipe;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003ePush\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "PipeT",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#AccessType",
        "fct-type": "function",
        "title": "PipeT"
      },
      "index": {
        "description": "Represents Pipe corresponds to ZMQ Socket Type Push",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "PipeT",
        "normalized": "",
        "package": "patterns",
        "partial": "Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:Poll",
      "description": {
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Poll",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#PollEntry",
        "fct-type": "function",
        "title": "Poll"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "Poll",
        "normalized": "",
        "package": "patterns",
        "partial": "Poll",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:PubT",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a publisher;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003ePub\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "PubT",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#AccessType",
        "fct-type": "function",
        "title": "PubT"
      },
      "index": {
        "description": "Represents publisher corresponds to ZMQ Socket Type Pub",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "PubT",
        "normalized": "",
        "package": "patterns",
        "partial": "Pub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:PullT",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a Puller;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003ePull\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "PullT",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#AccessType",
        "fct-type": "function",
        "title": "PullT"
      },
      "index": {
        "description": "Represents Puller corresponds to ZMQ Socket Type Pull",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "PullT",
        "normalized": "",
        "package": "patterns",
        "partial": "Pull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:RouterT",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a load balancer, \n   expecting connections from clients;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003eXRep\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "RouterT",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#AccessType",
        "fct-type": "function",
        "title": "RouterT"
      },
      "index": {
        "description": "Represents load balancer expecting connections from clients corresponds to ZMQ Socket Type XRep",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "RouterT",
        "normalized": "",
        "package": "patterns",
        "partial": "Router",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:ServerT",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a server and expects connections from clients;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "ServerT",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#AccessType",
        "fct-type": "function",
        "title": "ServerT"
      },
      "index": {
        "description": "Represents server and expects connections from clients corresponds to ZMQ Socket Type Rep",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "ServerT",
        "normalized": "",
        "package": "patterns",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:SubT",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a subscriber;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003eSub\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "SubT",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#AccessType",
        "fct-type": "function",
        "title": "SubT"
      },
      "index": {
        "description": "Represents subscriber corresponds to ZMQ Socket Type Sub",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "SubT",
        "normalized": "",
        "package": "patterns",
        "partial": "Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:filterStreams",
      "description": {
        "fct-descr": "\u003cp\u003eFilter subset of streams; usually you want to filter\n   a subset of streams to which to relay an incoming stream.\n   Note that the result is just a list of stream identifiers,\n   which of course could be used directly in the first place.\n   A meaningful use of filterstreams would be, for instance:\n\u003c/p\u003e\u003cpre\u003e let targets = filterStreams s (/= getSource s)\n\u003c/pre\u003e\u003cp\u003eWhere all streams but the source are selected.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Streamer -\u003e (Identifier -\u003e Bool) -\u003e [Identifier]",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#filterStreams",
        "fct-type": "function",
        "title": "filterStreams"
      },
      "index": {
        "description": "Filter subset of streams usually you want to filter subset of streams to which to relay an incoming stream Note that the result is just list of stream identifiers which of course could be used directly in the first place meaningful use of filterstreams would be for instance let targets filterStreams getSource Where all streams but the source are selected",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "filterStreams",
        "normalized": "Streamer-\u003e(Identifier-\u003eBool)-\u003e[Identifier]",
        "package": "patterns",
        "partial": "Streams",
        "signature": "Streamer-\u003e(Identifier-\u003eBool)-\u003e[Identifier]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:getSource",
      "description": {
        "fct-descr": "\u003cp\u003eGet current source\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Streamer -\u003e Identifier",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#getSource",
        "fct-type": "function",
        "title": "getSource"
      },
      "index": {
        "description": "Get current source",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "getSource",
        "normalized": "Streamer-\u003eIdentifier",
        "package": "patterns",
        "partial": "Source",
        "signature": "Streamer-\u003eIdentifier"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:ignoreStream",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore an incoming stream\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Sink",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#ignoreStream",
        "fct-type": "function",
        "title": "ignoreStream"
      },
      "index": {
        "description": "Ignore an incoming stream",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "ignoreStream",
        "normalized": "",
        "package": "patterns",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:internal",
      "description": {
        "fct-descr": "\u003cp\u003eThe internal stream that represents the \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e.\n   StreamSinks can write to this stream, \u003cem\u003ee.g.\u003c/em\u003e:\n\u003c/p\u003e\u003cpre\u003e passAll s [internal]\n\u003c/pre\u003e\u003cp\u003eAnd the streamer may also receive from this stream, \u003cem\u003ee.g.\u003c/em\u003e:\n\u003c/p\u003e\u003cpre\u003e if getSource s == internal\n\u003c/pre\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Identifier",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#internal",
        "fct-type": "function",
        "title": "internal"
      },
      "index": {
        "description": "The internal stream that represents the Controller StreamSinks can write to this stream e.g passAll internal And the streamer may also receive from this stream e.g if getSource internal",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "internal",
        "normalized": "",
        "package": "patterns",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:link",
      "description": {
        "fct-descr": "\u003cp\u003eBinds or connects a socket to an address\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "LinkType -\u003e Socket a -\u003e String -\u003e [SocketOption] -\u003e IO ()",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#link",
        "fct-type": "function",
        "title": "link"
      },
      "index": {
        "description": "Binds or connects socket to an address",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "link",
        "normalized": "LinkType-\u003eSocket a-\u003eString-\u003e[SocketOption]-\u003eIO()",
        "package": "patterns",
        "partial": "",
        "signature": "LinkType-\u003eSocket a-\u003eString-\u003e[SocketOption]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:parseAccess",
      "description": {
        "fct-descr": "\u003cp\u003eSafely read \u003ccode\u003e\u003ca\u003eAccessType\u003c/a\u003e\u003c/code\u003e;\n   ignores the case of the input string\n   (\u003cem\u003ee.g.\u003c/em\u003e \"servert\" -\u003e \u003ccode\u003e\u003ca\u003eServerT\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "String -\u003e Maybe AccessType",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#parseAccess",
        "fct-type": "function",
        "title": "parseAccess"
      },
      "index": {
        "description": "Safely read AccessType ignores the case of the input string e.g servert ServerT",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "parseAccess",
        "normalized": "String-\u003eMaybe AccessType",
        "package": "patterns",
        "partial": "Access",
        "signature": "String-\u003eMaybe AccessType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:parseLink",
      "description": {
        "fct-descr": "\u003cp\u003eSafely read \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e;\n   ignores the case of the input string\n   and, besides \"bind\" and \"connect\", \n   also accepts \"bin\", \"con\" and \"conn\";\n   intended for use with command line parameters\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "String -\u003e Maybe LinkType",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#parseLink",
        "fct-type": "function",
        "title": "parseLink"
      },
      "index": {
        "description": "Safely read LinkType ignores the case of the input string and besides bind and connect also accepts bin con and conn intended for use with command line parameters",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "parseLink",
        "normalized": "String-\u003eMaybe LinkType",
        "package": "patterns",
        "partial": "Link",
        "signature": "String-\u003eMaybe LinkType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:part",
      "description": {
        "fct-descr": "\u003cp\u003eSend the \u003ccode\u003eByteString\u003c/code\u003e segments to the outgoing streams\n   identified by [\u003ccode\u003e\u003ca\u003eIdentifier\u003c/a\u003e\u003c/code\u003e]\n   without terminating the stream,\n   \u003cem\u003ei.e.\u003c/em\u003e more segments must be sent.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Streamer -\u003e [Identifier] -\u003e [ByteString] -\u003e Sink",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#part",
        "fct-type": "function",
        "title": "part"
      },
      "index": {
        "description": "Send the ByteString segments to the outgoing streams identified by Identifier without terminating the stream i.e more segments must be sent",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "part",
        "normalized": "Streamer-\u003e[Identifier]-\u003e[ByteString]-\u003eSink",
        "package": "patterns",
        "partial": "",
        "signature": "Streamer-\u003e[Identifier]-\u003e[ByteString]-\u003eSink"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:pass1",
      "description": {
        "fct-descr": "\u003cp\u003ePass one segment and ignore the remainder of the stream.\n   The stream is terminated.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Streamer -\u003e [Identifier] -\u003e Sink",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#pass1",
        "fct-type": "function",
        "title": "pass1"
      },
      "index": {
        "description": "Pass one segment and ignore the remainder of the stream The stream is terminated",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "pass1",
        "normalized": "Streamer-\u003e[Identifier]-\u003eSink",
        "package": "patterns",
        "partial": "",
        "signature": "Streamer-\u003e[Identifier]-\u003eSink"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:passAll",
      "description": {
        "fct-descr": "\u003cp\u003ePass all segments of an incoming stream \n   to a list of outgoing streams.\n   The stream is terminated.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Streamer -\u003e [Identifier] -\u003e Sink",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#passAll",
        "fct-type": "function",
        "title": "passAll"
      },
      "index": {
        "description": "Pass all segments of an incoming stream to list of outgoing streams The stream is terminated",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "passAll",
        "normalized": "Streamer-\u003e[Identifier]-\u003eSink",
        "package": "patterns",
        "partial": "All",
        "signature": "Streamer-\u003e[Identifier]-\u003eSink"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:passN",
      "description": {
        "fct-descr": "\u003cp\u003ePass n segments and ignore the remainder of the stream.\n   The stream is terminated.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Streamer -\u003e [Identifier] -\u003e Int -\u003e Sink",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#passN",
        "fct-type": "function",
        "title": "passN"
      },
      "index": {
        "description": "Pass segments and ignore the remainder of the stream The stream is terminated",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "passN",
        "normalized": "Streamer-\u003e[Identifier]-\u003eInt-\u003eSink",
        "package": "patterns",
        "partial": "",
        "signature": "Streamer-\u003e[Identifier]-\u003eInt-\u003eSink"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:passWhile",
      "description": {
        "fct-descr": "\u003cp\u003ePass while condition is true and ignore the remainder of the stream.\n   The stream is terminated.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Streamer -\u003e [Identifier] -\u003e (ByteString -\u003e Bool) -\u003e Sink",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#passWhile",
        "fct-type": "function",
        "title": "passWhile"
      },
      "index": {
        "description": "Pass while condition is true and ignore the remainder of the stream The stream is terminated",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "passWhile",
        "normalized": "Streamer-\u003e[Identifier]-\u003e(ByteString-\u003eBool)-\u003eSink",
        "package": "patterns",
        "partial": "While",
        "signature": "Streamer-\u003e[Identifier]-\u003e(ByteString-\u003eBool)-\u003eSink"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:pause",
      "description": {
        "fct-descr": "\u003cp\u003ePause streams\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Controller -\u003e IO ()",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#pause",
        "fct-type": "function",
        "title": "pause"
      },
      "index": {
        "description": "Pause streams",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "pause",
        "normalized": "Controller-\u003eIO()",
        "package": "patterns",
        "partial": "",
        "signature": "Controller-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:pollAdd",
      "description": {
        "fct-descr": "\u003cp\u003eThe address to link to\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "String",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#PollEntry",
        "fct-type": "function",
        "title": "pollAdd"
      },
      "index": {
        "description": "The address to link to",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "pollAdd",
        "normalized": "",
        "package": "patterns",
        "partial": "Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:pollId",
      "description": {
        "fct-descr": "\u003cp\u003eHow to address this particular stream\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Identifier",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#PollEntry",
        "fct-type": "function",
        "title": "pollId"
      },
      "index": {
        "description": "How to address this particular stream",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "pollId",
        "normalized": "",
        "package": "patterns",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:pollLink",
      "description": {
        "fct-descr": "\u003cp\u003eHow to link (bind or connect)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "LinkType",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#PollEntry",
        "fct-type": "function",
        "title": "pollLink"
      },
      "index": {
        "description": "How to link bind or connect",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "pollLink",
        "normalized": "",
        "package": "patterns",
        "partial": "Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:pollOs",
      "description": {
        "fct-descr": "\u003cp\u003ezeromq socket options\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "[SocketOption]",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#PollEntry",
        "fct-type": "function",
        "title": "pollOs"
      },
      "index": {
        "description": "zeromq socket options",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "pollOs",
        "normalized": "[SocketOption]",
        "package": "patterns",
        "partial": "Os",
        "signature": "[SocketOption]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:pollSub",
      "description": {
        "fct-descr": "\u003cp\u003eList of \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e (or topics)\n   for subscribers\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "[Service]",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#PollEntry",
        "fct-type": "function",
        "title": "pollSub"
      },
      "index": {
        "description": "List of Service or topics for subscribers",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "pollSub",
        "normalized": "[Service]",
        "package": "patterns",
        "partial": "Sub",
        "signature": "[Service]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:pollType",
      "description": {
        "fct-descr": "\u003cp\u003eThe zeromq socket type\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "AccessType",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#PollEntry",
        "fct-type": "function",
        "title": "pollType"
      },
      "index": {
        "description": "The zeromq socket type",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "pollType",
        "normalized": "",
        "package": "patterns",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:receive",
      "description": {
        "fct-descr": "\u003cp\u003eReceive a stream through the controller\n   that was sink'd to the target \u003ccode\u003e\u003ca\u003einternal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Controller -\u003e Timeout -\u003e SinkR (Maybe a) -\u003e IO (Maybe a)",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#receive",
        "fct-type": "function",
        "title": "receive"
      },
      "index": {
        "description": "Receive stream through the controller that was sink to the target internal",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "receive",
        "normalized": "Controller-\u003eTimeout-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)",
        "package": "patterns",
        "partial": "",
        "signature": "Controller-\u003eTimeout-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:resume",
      "description": {
        "fct-descr": "\u003cp\u003eResume streams\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Controller -\u003e IO ()",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#resume",
        "fct-type": "function",
        "title": "resume"
      },
      "index": {
        "description": "Resume streams",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "resume",
        "normalized": "Controller-\u003eIO()",
        "package": "patterns",
        "partial": "",
        "signature": "Controller-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:runReceiver",
      "description": {
        "fct-descr": "\u003cp\u003eReceiver Sink: \n   Internally a zeromq socket is waiting for input;\n   when input is available, it is send to the sink.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 'Z.Socket a' - The source socket\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e - receiver timeout\n     \u003cem\u003e\u003c 0\u003c/em\u003e - listens eternally,\n     \u003cem\u003e0\u003c/em\u003e - returns immediately,\n     \u003cem\u003e\u003e 0\u003c/em\u003e - timeout in microseconds;\n     when the timeout expires, the stream terminates\n      and the return value is Nothing.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Socket a -\u003e Timeout -\u003e SinkR (Maybe o) -\u003e IO (Maybe o)",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#runReceiver",
        "fct-type": "function",
        "title": "runReceiver"
      },
      "index": {
        "description": "Receiver Sink Internally zeromq socket is waiting for input when input is available it is send to the sink Z.Socket The source socket Timeout receiver timeout listens eternally returns immediately timeout in microseconds when the timeout expires the stream terminates and the return value is Nothing",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "runReceiver",
        "normalized": "Socket a-\u003eTimeout-\u003eSinkR(Maybe b)-\u003eIO(Maybe b)",
        "package": "patterns",
        "partial": "Receiver",
        "signature": "Socket a-\u003eTimeout-\u003eSinkR(Maybe o)-\u003eIO(Maybe o)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:runSender",
      "description": {
        "fct-descr": "\u003cp\u003eSender Source:\n   The \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e generates a stream,\n   which is relayed to the \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Socket a -\u003e Source -\u003e IO ()",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#runSender",
        "fct-type": "function",
        "title": "runSender"
      },
      "index": {
        "description": "Sender Source The Source generates stream which is relayed to the Socket",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "runSender",
        "normalized": "Socket a-\u003eSource-\u003eIO()",
        "package": "patterns",
        "partial": "Sender",
        "signature": "Socket a-\u003eSource-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003eSend a stream through the controller\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Controller -\u003e [Identifier] -\u003e Source -\u003e IO ()",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "Send stream through the controller",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "send",
        "normalized": "Controller-\u003e[Identifier]-\u003eSource-\u003eIO()",
        "package": "patterns",
        "partial": "",
        "signature": "Controller-\u003e[Identifier]-\u003eSource-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:stop",
      "description": {
        "fct-descr": "\u003cp\u003eStop streams\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Controller -\u003e IO ()",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#stop",
        "fct-type": "function",
        "title": "stop"
      },
      "index": {
        "description": "Stop streams",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "stop",
        "normalized": "Controller-\u003eIO()",
        "package": "patterns",
        "partial": "",
        "signature": "Controller-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:stream",
      "description": {
        "fct-descr": "\u003cp\u003eSend the \u003ccode\u003eByteString\u003c/code\u003e segments to the outgoing streams\n   identified by [\u003ccode\u003e\u003ca\u003eIdentifier\u003c/a\u003e\u003c/code\u003e].\n   The stream is terminated.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Streamer -\u003e [Identifier] -\u003e [ByteString] -\u003e Sink",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#stream",
        "fct-type": "function",
        "title": "stream"
      },
      "index": {
        "description": "Send the ByteString segments to the outgoing streams identified by Identifier The stream is terminated",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "stream",
        "normalized": "Streamer-\u003e[Identifier]-\u003e[ByteString]-\u003eSink",
        "package": "patterns",
        "partial": "",
        "signature": "Streamer-\u003e[Identifier]-\u003e[ByteString]-\u003eSink"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:withStreams",
      "description": {
        "fct-descr": "\u003cp\u003eStarts polling on a set of streams.\n   The actual polling will be run in another thread.\n   The current thread continues with the action passed in.\n   When this action terminates, the streamer stops polling.\n\u003c/p\u003e\u003cp\u003eParameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e - The \u003cem\u003eZMQ\u003c/em\u003e context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e - The service name \n                 indicated for instance in error messages.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e - The polling timeout:\n     \u003cem\u003e\u003c 0\u003c/em\u003e - listens eternally,\n     \u003cem\u003e0\u003c/em\u003e - returns immediately,\n     \u003cem\u003e\u003e 0\u003c/em\u003e - timeout in microseconds;\n     when the timeout expires, the \u003ccode\u003e\u003ca\u003eStreamAction\u003c/a\u003e\u003c/code\u003e is invoked.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePollEntry\u003c/a\u003e\u003c/code\u003e - List of \u003ccode\u003e\u003ca\u003ePollEntry\u003c/a\u003e\u003c/code\u003e;\n                   the streamer will poll over \n                   all list members.\n                   When input is available,\n                   it is directed to the \u003ccode\u003e\u003ca\u003eStreamSink\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eStreamAction\u003c/a\u003e\u003c/code\u003e - Invoked when timeout expires.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOnError_\u003c/a\u003e\u003c/code\u003e - Error handler\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eStreamSink\u003c/a\u003e\u003c/code\u003e - The sink, to which the stream is sent.\n                    Note that the sink must terminate \n                    the outgoing stream \n                    (using one of the terminating sinks\n                     described below).\n                    Not terminating the stream properly\n                    will result in a zeromq socket error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e a - The action to invoke,\n                   when the streamer has been started;\n                   The \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e is used to control the device.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Mom.Patterns.Streams",
        "fct-package": "patterns",
        "fct-signature": "Context -\u003e Service -\u003e Timeout -\u003e [PollEntry] -\u003e StreamAction -\u003e OnError_ -\u003e StreamSink -\u003e Control a -\u003e IO a",
        "fct-source": "src/Network-Mom-Patterns-Streams.html#withStreams",
        "fct-type": "function",
        "title": "withStreams"
      },
      "index": {
        "description": "Starts polling on set of streams The actual polling will be run in another thread The current thread continues with the action passed in When this action terminates the streamer stops polling Parameters Context The ZMQ context Service The service name indicated for instance in error messages Timeout The polling timeout listens eternally returns immediately timeout in microseconds when the timeout expires the StreamAction is invoked PollEntry List of PollEntry the streamer will poll over all list members When input is available it is directed to the StreamSink StreamAction Invoked when timeout expires OnError Error handler StreamSink The sink to which the stream is sent Note that the sink must terminate the outgoing stream using one of the terminating sinks described below Not terminating the stream properly will result in zeromq socket error Control The action to invoke when the streamer has been started The Control is used to control the device",
        "hierarchy": "Network Mom Patterns Streams",
        "module": "Network.Mom.Patterns.Streams",
        "name": "withStreams",
        "normalized": "Context-\u003eService-\u003eTimeout-\u003e[PollEntry]-\u003eStreamAction-\u003eOnError_-\u003eStreamSink-\u003eControl a-\u003eIO a",
        "package": "patterns",
        "partial": "Streams",
        "signature": "Context-\u003eService-\u003eTimeout-\u003e[PollEntry]-\u003eStreamAction-\u003eOnError_-\u003eStreamSink-\u003eControl a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFundamental streaming types \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Patterns-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Fundamental streaming types",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Types",
        "normalized": "",
        "package": "patterns",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Body",
      "description": {
        "fct-descr": "\u003cp\u003eMessage body,\n   needed for complex patterns (\u003cem\u003ee.g.\u003c/em\u003e broker)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Types.html#Body",
        "fct-type": "type",
        "title": "Body"
      },
      "index": {
        "description": "Message body needed for complex patterns e.g broker",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Body",
        "normalized": "",
        "package": "patterns",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Conduit",
      "description": {
        "fct-descr": "\u003cp\u003eA conduit that links source and sink\n   applying some transformation to the stream.\n   Input is always \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n   output and return type may vary.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Types.html#Conduit",
        "fct-type": "type",
        "title": "Conduit"
      },
      "index": {
        "description": "conduit that links source and sink applying some transformation to the stream Input is always ByteString output and return type may vary",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Conduit",
        "normalized": "",
        "package": "patterns",
        "partial": "Conduit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Conduit_",
      "description": {
        "fct-descr": "\u003cp\u003eSimplified Conduit where output\n   is always \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e \n   and no final value is returned.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Types.html#Conduit_",
        "fct-type": "type",
        "title": "Conduit_"
      },
      "index": {
        "description": "Simplified Conduit where output is always ByteString and no final value is returned",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Conduit_",
        "normalized": "",
        "package": "patterns",
        "partial": "Conduit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Context",
      "description": {
        "fct-descr": "\u003cp\u003eReexport from zeromq\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Types.html#Context",
        "fct-type": "type",
        "title": "Context"
      },
      "index": {
        "description": "Reexport from zeromq",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Context",
        "normalized": "",
        "package": "patterns",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Criticality",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates criticality of the error event\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Patterns-Types.html#Criticality",
        "fct-type": "data",
        "title": "Criticality"
      },
      "index": {
        "description": "Indicates criticality of the error event",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Criticality",
        "normalized": "",
        "package": "patterns",
        "partial": "Criticality",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Identifier",
      "description": {
        "fct-descr": "\u003cp\u003eString identifying a stream in the streams device\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Types.html#Identifier",
        "fct-type": "type",
        "title": "Identifier"
      },
      "index": {
        "description": "String identifying stream in the streams device",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Identifier",
        "normalized": "",
        "package": "patterns",
        "partial": "Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Identity",
      "description": {
        "fct-descr": "\u003cp\u003eIdentity of a communication peer,\n   needed for complex patterns (\u003cem\u003ee.g.\u003c/em\u003e broker)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Types.html#Identity",
        "fct-type": "type",
        "title": "Identity"
      },
      "index": {
        "description": "Identity of communication peer needed for complex patterns e.g broker",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Identity",
        "normalized": "",
        "package": "patterns",
        "partial": "Identity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:LinkType",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003cem\u003ezeromq\u003c/em\u003e \u003ccode\u003eAccessPoint\u003c/code\u003e\n   can be bound or connected to its address.\n   Only one peer can bind the address,\n   all other parties have to connect.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Patterns-Types.html#LinkType",
        "fct-type": "data",
        "title": "LinkType"
      },
      "index": {
        "description": "zeromq AccessPoint can be bound or connected to its address Only one peer can bind the address all other parties have to connect",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "LinkType",
        "normalized": "",
        "package": "patterns",
        "partial": "Link Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Msec",
      "description": {
        "fct-descr": "\u003cp\u003eMilliseconds \n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Types.html#Msec",
        "fct-type": "type",
        "title": "Msec"
      },
      "index": {
        "description": "Milliseconds",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Msec",
        "normalized": "",
        "package": "patterns",
        "partial": "Msec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:OnError_",
      "description": {
        "fct-descr": "\u003cp\u003eError handler for all services \n   that are implemented as background services,\n   \u003cem\u003ee.g.\u003c/em\u003e servers and brokers.\n   The handler receives the \u003ccode\u003e\u003ca\u003eCriticality\u003c/a\u003e\u003c/code\u003e of the error event,\n   the exception and an additional descriptive string.\n\u003c/p\u003e\u003cp\u003eA good policy is\n   to terminate or restart the service\n   when a \u003ccode\u003e\u003ca\u003eFatal\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eCritical\u003c/a\u003e\u003c/code\u003e error occurs\n   and to continue, if possible,\n   on a plain \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e.\n   The error handler may perform additional, user-defined actions, \n   such as logging the incident or \n   sending an SMS.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Types.html#OnError_",
        "fct-type": "type",
        "title": "OnError_"
      },
      "index": {
        "description": "Error handler for all services that are implemented as background services e.g servers and brokers The handler receives the Criticality of the error event the exception and an additional descriptive string good policy is to terminate or restart the service when Fatal or Critical error occurs and to continue if possible on plain Error The error handler may perform additional user-defined actions such as logging the incident or sending an SMS",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "OnError_",
        "normalized": "",
        "package": "patterns",
        "partial": "On Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:RIO",
      "description": {
        "fct-descr": "\u003cp\u003eThe IO Resource transformer.\n   See the conduit package for details\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Types.html#RIO",
        "fct-type": "type",
        "title": "RIO"
      },
      "index": {
        "description": "The IO Resource transformer See the conduit package for details",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "RIO",
        "normalized": "",
        "package": "patterns",
        "partial": "RIO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Service",
      "description": {
        "fct-descr": "\u003cp\u003eString identifying a service provided, \u003cem\u003ee.g.\u003c/em\u003e by a \u003cem\u003eserver\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Types.html#Service",
        "fct-type": "type",
        "title": "Service"
      },
      "index": {
        "description": "String identifying service provided e.g by server",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Service",
        "normalized": "",
        "package": "patterns",
        "partial": "Service",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Sink",
      "description": {
        "fct-descr": "\u003cp\u003eA stream sink without return type\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Types.html#Sink",
        "fct-type": "type",
        "title": "Sink"
      },
      "index": {
        "description": "stream sink without return type",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Sink",
        "normalized": "",
        "package": "patterns",
        "partial": "Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:SinkR",
      "description": {
        "fct-descr": "\u003cp\u003eA stream sink wit return type\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Types.html#SinkR",
        "fct-type": "type",
        "title": "SinkR"
      },
      "index": {
        "description": "stream sink wit return type",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "SinkR",
        "normalized": "",
        "package": "patterns",
        "partial": "Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Size",
      "description": {
        "fct-descr": "\u003cp\u003eReexport from zeromq\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Types.html#Size",
        "fct-type": "type",
        "title": "Size"
      },
      "index": {
        "description": "Reexport from zeromq",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Size",
        "normalized": "",
        "package": "patterns",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Source",
      "description": {
        "fct-descr": "\u003cp\u003eA stream source\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Types.html#Source",
        "fct-type": "type",
        "title": "Source"
      },
      "index": {
        "description": "stream source",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Source",
        "normalized": "",
        "package": "patterns",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:StreamException",
      "description": {
        "fct-descr": "\u003cp\u003eStream Exception\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "data",
        "fct-source": "src/Network-Mom-Patterns-Types.html#StreamException",
        "fct-type": "data",
        "title": "StreamException"
      },
      "index": {
        "description": "Stream Exception",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "StreamException",
        "normalized": "",
        "package": "patterns",
        "partial": "Stream Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Timeout",
      "description": {
        "fct-descr": "\u003cp\u003eReexport from zeromq (timeout in microseconds)\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "type",
        "fct-source": "src/Network-Mom-Patterns-Types.html#Timeout",
        "fct-type": "type",
        "title": "Timeout"
      },
      "index": {
        "description": "Reexport from zeromq timeout in microseconds",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Timeout",
        "normalized": "",
        "package": "patterns",
        "partial": "Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:AppExc",
      "description": {
        "fct-descr": "\u003cp\u003eApplication-defined error\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "AppExc String",
        "fct-source": "src/Network-Mom-Patterns-Types.html#StreamException",
        "fct-type": "function",
        "title": "AppExc"
      },
      "index": {
        "description": "Application-defined error",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "AppExc",
        "normalized": "",
        "package": "patterns",
        "partial": "App Exc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:Bind",
      "description": {
        "fct-descr": "\u003cp\u003eBind the address\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "Bind",
        "fct-source": "src/Network-Mom-Patterns-Types.html#LinkType",
        "fct-type": "function",
        "title": "Bind"
      },
      "index": {
        "description": "Bind the address",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Bind",
        "normalized": "",
        "package": "patterns",
        "partial": "Bind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:Connect",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to the address\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "Connect",
        "fct-source": "src/Network-Mom-Patterns-Types.html#LinkType",
        "fct-type": "function",
        "title": "Connect"
      },
      "index": {
        "description": "Connect to the address",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Connect",
        "normalized": "",
        "package": "patterns",
        "partial": "Connect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:Critical",
      "description": {
        "fct-descr": "\u003cp\u003eThe event has impact on the process,\n   leaving it in an unkown state.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "Critical",
        "fct-source": "src/Network-Mom-Patterns-Types.html#Criticality",
        "fct-type": "function",
        "title": "Critical"
      },
      "index": {
        "description": "The event has impact on the process leaving it in an unkown state",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Critical",
        "normalized": "",
        "package": "patterns",
        "partial": "Critical",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:Error",
      "description": {
        "fct-descr": "\u003cp\u003eThe current operation \n   (\u003cem\u003ee.g.\u003c/em\u003e processing a request)\n   has not terminated properly,\n   but the service is able to continue;\n   the error may have been caused by a faulty\n   request or other temporal conditions.\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "Error",
        "fct-source": "src/Network-Mom-Patterns-Types.html#Criticality",
        "fct-type": "function",
        "title": "Error"
      },
      "index": {
        "description": "The current operation e.g processing request has not terminated properly but the service is able to continue the error may have been caused by faulty request or other temporal conditions",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Error",
        "normalized": "",
        "package": "patterns",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:Fatal",
      "description": {
        "fct-descr": "\u003cp\u003eThe service cannot recover and will terminate\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "Fatal",
        "fct-source": "src/Network-Mom-Patterns-Types.html#Criticality",
        "fct-type": "function",
        "title": "Fatal"
      },
      "index": {
        "description": "The service cannot recover and will terminate",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Fatal",
        "normalized": "",
        "package": "patterns",
        "partial": "Fatal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:IOExc",
      "description": {
        "fct-descr": "\u003cp\u003eIO error\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "IOExc String",
        "fct-source": "src/Network-Mom-Patterns-Types.html#StreamException",
        "fct-type": "function",
        "title": "IOExc"
      },
      "index": {
        "description": "IO error",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "IOExc",
        "normalized": "",
        "package": "patterns",
        "partial": "IOExc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:Ouch",
      "description": {
        "fct-descr": "\u003cp\u003eInternal error, indicating a code error in library\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "Ouch String",
        "fct-source": "src/Network-Mom-Patterns-Types.html#StreamException",
        "fct-type": "function",
        "title": "Ouch"
      },
      "index": {
        "description": "Internal error indicating code error in library",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "Ouch",
        "normalized": "",
        "package": "patterns",
        "partial": "Ouch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:ProtocolExc",
      "description": {
        "fct-descr": "\u003cp\u003eProtocol error\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "ProtocolExc String",
        "fct-source": "src/Network-Mom-Patterns-Types.html#StreamException",
        "fct-type": "function",
        "title": "ProtocolExc"
      },
      "index": {
        "description": "Protocol error",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "ProtocolExc",
        "normalized": "",
        "package": "patterns",
        "partial": "Protocol Exc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:SocketExc",
      "description": {
        "fct-descr": "\u003cp\u003elow-level error\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "SocketExc String",
        "fct-source": "src/Network-Mom-Patterns-Types.html#StreamException",
        "fct-type": "function",
        "title": "SocketExc"
      },
      "index": {
        "description": "low-level error",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "SocketExc",
        "normalized": "",
        "package": "patterns",
        "partial": "Socket Exc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:passThrough",
      "description": {
        "fct-descr": "\u003cp\u003ePass the stream through without applying\n   any transformation to it\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "Conduit ByteString ()",
        "fct-source": "src/Network-Mom-Patterns-Types.html#passThrough",
        "fct-type": "function",
        "title": "passThrough"
      },
      "index": {
        "description": "Pass the stream through without applying any transformation to it",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "passThrough",
        "normalized": "Conduit ByteString()",
        "package": "patterns",
        "partial": "Through",
        "signature": "Conduit ByteString()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:streamList",
      "description": {
        "fct-descr": "\u003cp\u003eStreaming the elements of a list\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "[ByteString] -\u003e Producer RIO ByteString",
        "fct-source": "src/Network-Mom-Patterns-Types.html#streamList",
        "fct-type": "function",
        "title": "streamList"
      },
      "index": {
        "description": "Streaming the elements of list",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "streamList",
        "normalized": "[ByteString]-\u003eProducer RIO ByteString",
        "package": "patterns",
        "partial": "List",
        "signature": "[ByteString]-\u003eProducer RIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:withContext",
      "description": {
        "fct-descr": "\u003cp\u003eReexport from zeromq\n\u003c/p\u003e",
        "fct-module": "Network.Mom.Patterns.Types",
        "fct-package": "patterns",
        "fct-signature": "Size -\u003e (Context -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Network-Mom-Patterns-Types.html#withContext",
        "fct-type": "function",
        "title": "withContext"
      },
      "index": {
        "description": "Reexport from zeromq",
        "hierarchy": "Network Mom Patterns Types",
        "module": "Network.Mom.Patterns.Types",
        "name": "withContext",
        "normalized": "Size-\u003e(Context-\u003eIO a)-\u003eIO a",
        "package": "patterns",
        "partial": "Context",
        "signature": "Size-\u003e(Context-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn distributed message-oriented applications,\n the same communication patterns show up\n over and over again.\n This package implements some of these patterns\n based on the \u003cem\u003ezeromq\u003c/em\u003e library.\n \u003cem\u003ePatterns\u003c/em\u003e uses the \u003cem\u003ezeromq-haskell\u003c/em\u003e package,\n but goes beyond in several aspects:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It uses \u003cem\u003econduits\u003c/em\u003e to stream incoming and\n   outgoing message segments;\n\u003c/li\u003e\u003cli\u003e It defines libraries of basic patterns\n   to enforce coherent use of \u003cem\u003ezeromq\u003c/em\u003e sockets;\n\u003c/li\u003e\u003cli\u003e It implements modules for advanced patterns;\n   currently the majordomo pattern (broker) is implemented.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMore information on \u003cem\u003ezeromq\u003c/em\u003e can be found at\n \u003ca\u003ehttp://www.zeromq.org\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Mom.Patterns",
        "fct-package": "patterns",
        "fct-signature": "module",
        "fct-source": "src/Network-Mom-Patterns.html",
        "fct-type": "module",
        "title": "Patterns"
      },
      "index": {
        "description": "In distributed message-oriented applications the same communication patterns show up over and over again This package implements some of these patterns based on the zeromq library Patterns uses the zeromq-haskell package but goes beyond in several aspects It uses conduits to stream incoming and outgoing message segments It defines libraries of basic patterns to enforce coherent use of zeromq sockets It implements modules for advanced patterns currently the majordomo pattern broker is implemented More information on zeromq can be found at http www.zeromq.org",
        "hierarchy": "Network Mom Patterns",
        "module": "Network.Mom.Patterns",
        "name": "Patterns",
        "normalized": "",
        "package": "patterns",
        "partial": "Patterns",
        "signature": ""
      }
    }
  }
]