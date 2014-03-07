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
        "word": "patterns"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClient side of Client/Server\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Patterns.Basic.Client",
          "name": "Client",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Basic-Client.html",
          "type": "module"
        },
        "index": {
          "description": "Client side of Client Server",
          "hierarchy": "Network Mom Patterns Basic Client",
          "module": "Network.Mom.Patterns.Basic.Client",
          "name": "Client",
          "package": "patterns",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient data type\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Basic.Client",
          "name": "Client",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Basic-Client.html#Client",
          "type": "data"
        },
        "index": {
          "description": "Client data type",
          "hierarchy": "Network Mom Patterns Basic Client",
          "module": "Network.Mom.Patterns.Basic.Client",
          "name": "Client",
          "package": "patterns",
          "partial": "Client",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Client.html#t:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck for a of a previously requested result;\n   use case: request with timout 0, do some work\n             and check for a result later.\n   Do not use this function without having requested the service\n      previously.\n   The parameters equal those of \u003ccode\u003e\u003ca\u003erequest\u003c/a\u003e\u003c/code\u003e,\n   but do not include a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Basic.Client",
          "name": "checkResult",
          "package": "patterns",
          "signature": "Client -\u003e Timeout -\u003e SinkR (Maybe r) -\u003e IO (Maybe r)",
          "source": "src/Network-Mom-Patterns-Basic-Client.html#checkResult",
          "type": "function"
        },
        "index": {
          "description": "Check for of previously requested result use case request with timout do some work and check for result later Do not use this function without having requested the service previously The parameters equal those of request but do not include Source",
          "hierarchy": "Network Mom Patterns Basic Client",
          "module": "Network.Mom.Patterns.Basic.Client",
          "name": "checkResult",
          "normalized": "Client-\u003eTimeout-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)",
          "package": "patterns",
          "partial": "Result",
          "signature": "Client-\u003eTimeout-\u003eSinkR(Maybe r)-\u003eIO(Maybe r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Client.html#v:checkResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Patterns.Basic.Client",
          "name": "clService",
          "package": "patterns",
          "signature": "Client -\u003e Service",
          "source": "src/Network-Mom-Patterns-Basic-Client.html#clService",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Mom Patterns Basic Client",
          "module": "Network.Mom.Patterns.Basic.Client",
          "name": "clService",
          "normalized": "Client-\u003eService",
          "package": "patterns",
          "partial": "Service",
          "signature": "Client-\u003eService",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Client.html#v:clService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest a service:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e - The client, through which the service is requested\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e - Timeout in microseconds, -1 to wait eternally.\n                 With timeout = 0, the function returns immediately\n                 with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n                 When the timeout expires, request is abandoned. \n                 In this case, the result of the request\n                 is Nothing.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e  - The source of the request stream;\n                 the format of the request will probably comply\n                 with some communication protocol,\n                 as, for instance, in the majordomo pattern.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSinkR\u003c/a\u003e\u003c/code\u003e   - The sink receiving the reply. The result of the sink\n                 is returned as the request's overall result.\n                 Note that the sink may perform different \n                 actions on the segments of the resulting stream,\n                 \u003cem\u003ee.g.\u003c/em\u003e storing data in a database,\n                 and return the number of records received.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA 'hello world' Example:\n\u003c/p\u003e\u003cpre\u003e  import qualified Data.Conduit          as C\n  import qualified Data.ByteString.Char8 as B\n  import           Network.Mom.Patterns.Basic.Client\n  import           Network.Mom.Patterns.Types\n\u003c/pre\u003e\u003cpre\u003e  main :: IO ()\n  main = withContext 1 $ \\ctx -\u003e \n           withClient ctx \"test\" \n               \"tcp://localhost:5555\" Connect $ \\c -\u003e do\n             mbX \u003c- request c (-1) src snk\n             case mbX of\n               Nothing -\u003e putStrLn \"No Result\"\n               Just x  -\u003e putStrLn $ \"Result: \" ++ x\n    where src = C.yield (B.pack \"hello world\")\n          snk = do mbX \u003c- C.await \n                   case mbX of\n                     Nothing -\u003e return Nothing\n                     Just x  -\u003e return $ Just $ B.unpack x\n\u003c/pre\u003e",
          "module": "Network.Mom.Patterns.Basic.Client",
          "name": "request",
          "package": "patterns",
          "signature": "Client -\u003e Timeout -\u003e Source -\u003e SinkR (Maybe r) -\u003e IO (Maybe r)",
          "source": "src/Network-Mom-Patterns-Basic-Client.html#request",
          "type": "function"
        },
        "index": {
          "description": "Request service Client The client through which the service is requested Timeout Timeout in microseconds to wait eternally With timeout the function returns immediately with Nothing When the timeout expires request is abandoned In this case the result of the request is Nothing Source The source of the request stream the format of the request will probably comply with some communication protocol as for instance in the majordomo pattern SinkR The sink receiving the reply The result of the sink is returned as the request overall result Note that the sink may perform different actions on the segments of the resulting stream e.g storing data in database and return the number of records received hello world Example import qualified Data.Conduit as import qualified Data.ByteString.Char8 as import Network.Mom.Patterns.Basic.Client import Network.Mom.Patterns.Types main IO main withContext ctx withClient ctx test tcp localhost Connect do mbX request src snk case mbX of Nothing putStrLn No Result Just putStrLn Result where src C.yield B.pack hello world snk do mbX C.await case mbX of Nothing return Nothing Just return Just B.unpack",
          "hierarchy": "Network Mom Patterns Basic Client",
          "module": "Network.Mom.Patterns.Basic.Client",
          "name": "request",
          "normalized": "Client-\u003eTimeout-\u003eSource-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)",
          "package": "patterns",
          "signature": "Client-\u003eTimeout-\u003eSource-\u003eSinkR(Maybe r)-\u003eIO(Maybe r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Client.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a client\n   with name \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e,\n   linking to address \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e,\n   connecting or binding the address according to \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e\n   and finally entering the action, in whose scope\n   the client lives.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Basic.Client",
          "name": "withClient",
          "package": "patterns",
          "signature": "Context -\u003e Service -\u003e String -\u003e LinkType -\u003e (Client -\u003e IO a) -\u003e IO a",
          "source": "src/Network-Mom-Patterns-Basic-Client.html#withClient",
          "type": "function"
        },
        "index": {
          "description": "Create client with name Service linking to address String connecting or binding the address according to LinkType and finally entering the action in whose scope the client lives",
          "hierarchy": "Network Mom Patterns Basic Client",
          "module": "Network.Mom.Patterns.Basic.Client",
          "name": "withClient",
          "normalized": "Context-\u003eService-\u003eString-\u003eLinkType-\u003e(Client-\u003eIO a)-\u003eIO a",
          "package": "patterns",
          "partial": "Client",
          "signature": "Context-\u003eService-\u003eString-\u003eLinkType-\u003e(Client-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Client.html#v:withClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePublish side of 'Publish/Subscribe'\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Patterns.Basic.Publisher",
          "name": "Publisher",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Basic-Publisher.html",
          "type": "module"
        },
        "index": {
          "description": "Publish side of Publish Subscribe",
          "hierarchy": "Network Mom Patterns Basic Publisher",
          "module": "Network.Mom.Patterns.Basic.Publisher",
          "name": "Publisher",
          "package": "patterns",
          "partial": "Publisher",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Publisher.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublisher data type\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Basic.Publisher",
          "name": "Pub",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Basic-Publisher.html#Pub",
          "type": "data"
        },
        "index": {
          "description": "Publisher data type",
          "hierarchy": "Network Mom Patterns Basic Publisher",
          "module": "Network.Mom.Patterns.Basic.Publisher",
          "name": "Pub",
          "package": "patterns",
          "partial": "Pub",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Publisher.html#t:Pub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublish data:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePub\u003c/a\u003e\u003c/code\u003e       - The publisher\n\u003c/li\u003e\u003cli\u003e [\u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e] - List of topics, to which these data should be\n                   published\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e    - Create the stream to publish.\n                   The first message segment\n                   contains the subscription header,\n                   \u003cem\u003ei.e.\u003c/em\u003e the comma-separated list of topics\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Patterns.Basic.Publisher",
          "name": "issue",
          "package": "patterns",
          "signature": "Pub -\u003e [Service] -\u003e Source -\u003e IO ()",
          "source": "src/Network-Mom-Patterns-Basic-Publisher.html#issue",
          "type": "function"
        },
        "index": {
          "description": "Publish data Pub The publisher Service List of topics to which these data should be published Source Create the stream to publish The first message segment contains the subscription header i.e the comma-separated list of topics",
          "hierarchy": "Network Mom Patterns Basic Publisher",
          "module": "Network.Mom.Patterns.Basic.Publisher",
          "name": "issue",
          "normalized": "Pub-\u003e[Service]-\u003eSource-\u003eIO()",
          "package": "patterns",
          "signature": "Pub-\u003e[Service]-\u003eSource-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Publisher.html#v:issue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple forwarder,\n   \u003cem\u003ei.e.\u003c/em\u003e a device that connects to a publisher\n   and provides an additional endpoint \n   for more subscribers to connect to.\n   A forwarder, hence, is a means to extend \n   the capacity of a publisher.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e            - The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e            - The name of the forwarder\n\u003c/li\u003e\u003cli\u003e (String, \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e) - access point for subscribers;\n                            usually, you want to bind\n                            the address, such that subscribers\n                            connect to it.\n\u003c/li\u003e\u003cli\u003e (String, \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e) - access point for the publisher;\n                            usually, you want to connect \n                            to the publisher.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOnError_\u003c/a\u003e\u003c/code\u003e           - Error handler\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e a          - Control loop\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Patterns.Basic.Publisher",
          "name": "withForwarder",
          "package": "patterns",
          "signature": "Context -\u003e Service -\u003e [Service] -\u003e (String, LinkType) -\u003e (String, LinkType) -\u003e OnError_ -\u003e Control a -\u003e IO a",
          "source": "src/Network-Mom-Patterns-Basic-Publisher.html#withForwarder",
          "type": "function"
        },
        "index": {
          "description": "simple forwarder i.e device that connects to publisher and provides an additional endpoint for more subscribers to connect to forwarder hence is means to extend the capacity of publisher Context The zeromq context Service The name of the forwarder String LinkType access point for subscribers usually you want to bind the address such that subscribers connect to it String LinkType access point for the publisher usually you want to connect to the publisher OnError Error handler Control Control loop",
          "hierarchy": "Network Mom Patterns Basic Publisher",
          "module": "Network.Mom.Patterns.Basic.Publisher",
          "name": "withForwarder",
          "normalized": "Context-\u003eService-\u003e[Service]-\u003e(String,LinkType)-\u003e(String,LinkType)-\u003eOnError_-\u003eControl a-\u003eIO a",
          "package": "patterns",
          "partial": "Forwarder",
          "signature": "Context-\u003eService-\u003e[Service]-\u003e(String,LinkType)-\u003e(String,LinkType)-\u003eOnError_-\u003eControl a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Publisher.html#v:withForwarder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate and link a publisher:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e     -  The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e      -  The service address\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e    -  How to link (bind or connect)\n\u003c/li\u003e\u003cli\u003e (Pub -\u003e IO a) -  The action, in whose scope the publisher lives\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Patterns.Basic.Publisher",
          "name": "withPub",
          "package": "patterns",
          "signature": "Context -\u003e String -\u003e LinkType -\u003e (Pub -\u003e IO a) -\u003e IO a",
          "source": "src/Network-Mom-Patterns-Basic-Publisher.html#withPub",
          "type": "function"
        },
        "index": {
          "description": "Create and link publisher Context The zeromq context String The service address LinkType How to link bind or connect Pub IO The action in whose scope the publisher lives",
          "hierarchy": "Network Mom Patterns Basic Publisher",
          "module": "Network.Mom.Patterns.Basic.Publisher",
          "name": "withPub",
          "normalized": "Context-\u003eString-\u003eLinkType-\u003e(Pub-\u003eIO a)-\u003eIO a",
          "package": "patterns",
          "partial": "Pub",
          "signature": "Context-\u003eString-\u003eLinkType-\u003e(Pub-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Publisher.html#v:withPub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePuller side of 'Pipeline'\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Patterns.Basic.Puller",
          "name": "Puller",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Basic-Puller.html",
          "type": "module"
        },
        "index": {
          "description": "Puller side of Pipeline",
          "hierarchy": "Network Mom Patterns Basic Puller",
          "module": "Network.Mom.Patterns.Basic.Puller",
          "name": "Puller",
          "package": "patterns",
          "partial": "Puller",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Puller.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pipeline extends the capacity of the \n   pusher-puller chain;\n   a pipeline connects to a pusher\n   and provides an access point to a set of pullers.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e            - The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e            - The service name of this queue\n\u003c/li\u003e\u003cli\u003e (String, \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e) - Address and link type, to where pullers\n                            connect. Note: if pullers connect,\n                            the pipeline must bind the address!\n\u003c/li\u003e\u003cli\u003e (String, \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e) - Address and link type that pushers bind.\n                            Note, again, that \n                            if pusher bind, the pipeline must\n                            connect to the address!\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOnError_\u003c/a\u003e\u003c/code\u003e           - Error handler\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e a          - \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e action\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Patterns.Basic.Puller",
          "name": "withPipe",
          "package": "patterns",
          "signature": "Context -\u003e Service -\u003e (String, LinkType) -\u003e (String, LinkType) -\u003e OnError_ -\u003e (Controller -\u003e IO a) -\u003e IO a",
          "source": "src/Network-Mom-Patterns-Basic-Puller.html#withPipe",
          "type": "function"
        },
        "index": {
          "description": "pipeline extends the capacity of the pusher-puller chain pipeline connects to pusher and provides an access point to set of pullers Context The zeromq context Service The service name of this queue String LinkType Address and link type to where pullers connect Note if pullers connect the pipeline must bind the address String LinkType Address and link type that pushers bind Note again that if pusher bind the pipeline must connect to the address OnError Error handler Control Controller action",
          "hierarchy": "Network Mom Patterns Basic Puller",
          "module": "Network.Mom.Patterns.Basic.Puller",
          "name": "withPipe",
          "normalized": "Context-\u003eService-\u003e(String,LinkType)-\u003e(String,LinkType)-\u003eOnError_-\u003e(Controller-\u003eIO a)-\u003eIO a",
          "package": "patterns",
          "partial": "Pipe",
          "signature": "Context-\u003eService-\u003e(String,LinkType)-\u003e(String,LinkType)-\u003eOnError_-\u003e(Controller-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Puller.html#v:withPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a puller as a background service:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e   - The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e   - Service name of this worker\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e    - The address to link to\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e  - Whether to connect to or to bind the address;\n                   usually you want to connect many workers\n                   to one pusher\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOnError_\u003c/a\u003e\u003c/code\u003e  - Error handler\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e      - The application-defined sink\n                   that does the job sent down the pipeline\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e a - Control loop\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Patterns.Basic.Puller",
          "name": "withPuller",
          "package": "patterns",
          "signature": "Context -\u003e Service -\u003e String -\u003e LinkType -\u003e OnError_ -\u003e Sink -\u003e (Controller -\u003e IO a) -\u003e IO a",
          "source": "src/Network-Mom-Patterns-Basic-Puller.html#withPuller",
          "type": "function"
        },
        "index": {
          "description": "Start puller as background service Context The zeromq context Service Service name of this worker String The address to link to LinkType Whether to connect to or to bind the address usually you want to connect many workers to one pusher OnError Error handler Sink The application-defined sink that does the job sent down the pipeline Control Control loop",
          "hierarchy": "Network Mom Patterns Basic Puller",
          "module": "Network.Mom.Patterns.Basic.Puller",
          "name": "withPuller",
          "normalized": "Context-\u003eService-\u003eString-\u003eLinkType-\u003eOnError_-\u003eSink-\u003e(Controller-\u003eIO a)-\u003eIO a",
          "package": "patterns",
          "partial": "Puller",
          "signature": "Context-\u003eService-\u003eString-\u003eLinkType-\u003eOnError_-\u003eSink-\u003e(Controller-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Puller.html#v:withPuller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePusher side of 'Pipeline'\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Patterns.Basic.Pusher",
          "name": "Pusher",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Basic-Pusher.html",
          "type": "module"
        },
        "index": {
          "description": "Pusher side of Pipeline",
          "hierarchy": "Network Mom Patterns Basic Pusher",
          "module": "Network.Mom.Patterns.Basic.Pusher",
          "name": "Pusher",
          "package": "patterns",
          "partial": "Pusher",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Pusher.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pusher data type\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Basic.Pusher",
          "name": "Pusher",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Basic-Pusher.html#Pusher",
          "type": "data"
        },
        "index": {
          "description": "The pusher data type",
          "hierarchy": "Network Mom Patterns Basic Pusher",
          "module": "Network.Mom.Patterns.Basic.Pusher",
          "name": "Pusher",
          "package": "patterns",
          "partial": "Pusher",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Pusher.html#t:Pusher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush a job down the pipeline;\n   the \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e creates the outgoing stream.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Basic.Pusher",
          "name": "push",
          "package": "patterns",
          "signature": "Pusher -\u003e Source -\u003e IO ()",
          "source": "src/Network-Mom-Patterns-Basic-Pusher.html#push",
          "type": "function"
        },
        "index": {
          "description": "Push job down the pipeline the Source creates the outgoing stream",
          "hierarchy": "Network Mom Patterns Basic Pusher",
          "module": "Network.Mom.Patterns.Basic.Pusher",
          "name": "push",
          "normalized": "Pusher-\u003eSource-\u003eIO()",
          "package": "patterns",
          "signature": "Pusher-\u003eSource-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Pusher.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function in whose scope the pusher lives:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e          - The zeromq Context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e           - The address\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e         - Link type; usually, you want to bind\n                          a pusher to its address\n\u003c/li\u003e\u003cli\u003e (\u003ccode\u003e\u003ca\u003ePusher\u003c/a\u003e\u003c/code\u003e -\u003e IO a) - Action in whose scope the pusher lives\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Patterns.Basic.Pusher",
          "name": "withPusher",
          "package": "patterns",
          "signature": "Context -\u003e String -\u003e LinkType -\u003e (Pusher -\u003e IO a) -\u003e IO a",
          "source": "src/Network-Mom-Patterns-Basic-Pusher.html#withPusher",
          "type": "function"
        },
        "index": {
          "description": "The function in whose scope the pusher lives Context The zeromq Context String The address LinkType Link type usually you want to bind pusher to its address Pusher IO Action in whose scope the pusher lives",
          "hierarchy": "Network Mom Patterns Basic Pusher",
          "module": "Network.Mom.Patterns.Basic.Pusher",
          "name": "withPusher",
          "normalized": "Context-\u003eString-\u003eLinkType-\u003e(Pusher-\u003eIO a)-\u003eIO a",
          "package": "patterns",
          "partial": "Pusher",
          "signature": "Context-\u003eString-\u003eLinkType-\u003e(Pusher-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Pusher.html#v:withPusher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eServer side of 'Client/Server'\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Patterns.Basic.Server",
          "name": "Server",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Basic-Server.html",
          "type": "module"
        },
        "index": {
          "description": "Server side of Client Server",
          "hierarchy": "Network Mom Patterns Basic Server",
          "module": "Network.Mom.Patterns.Basic.Server",
          "name": "Server",
          "package": "patterns",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple load balancer device to link clients and servers.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e            - The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e            - The service name of this queue\n\u003c/li\u003e\u003cli\u003e (String, \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e) - Address and link type, to where clients\n                            connect. Note if clients connect,\n                            the queue must bind the address!\n\u003c/li\u003e\u003cli\u003e (String, \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e) - Address and link type, to where servers\n                            connect. Note, again, that \n                            if servers connect, the queue must\n                            bind the address!\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOnError_\u003c/a\u003e\u003c/code\u003e           - Error handler\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e a          - \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e action\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Patterns.Basic.Server",
          "name": "withQueue",
          "package": "patterns",
          "signature": "Context -\u003e Service -\u003e (String, LinkType) -\u003e (String, LinkType) -\u003e OnError_ -\u003e Control a -\u003e IO a",
          "source": "src/Network-Mom-Patterns-Basic-Server.html#withQueue",
          "type": "function"
        },
        "index": {
          "description": "simple load balancer device to link clients and servers Context The zeromq context Service The service name of this queue String LinkType Address and link type to where clients connect Note if clients connect the queue must bind the address String LinkType Address and link type to where servers connect Note again that if servers connect the queue must bind the address OnError Error handler Control Controller action",
          "hierarchy": "Network Mom Patterns Basic Server",
          "module": "Network.Mom.Patterns.Basic.Server",
          "name": "withQueue",
          "normalized": "Context-\u003eService-\u003e(String,LinkType)-\u003e(String,LinkType)-\u003eOnError_-\u003eControl a-\u003eIO a",
          "package": "patterns",
          "partial": "Queue",
          "signature": "Context-\u003eService-\u003e(String,LinkType)-\u003e(String,LinkType)-\u003eOnError_-\u003eControl a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Server.html#v:withQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a server as a background process\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e   - The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e   - Service name\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e    - The address to link to\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e  - Whether to connect to or to bind the address\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOnError_\u003c/a\u003e\u003c/code\u003e  - Error handler\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eConduit_\u003c/a\u003e\u003c/code\u003e  - The application-defined stream transformer;\n                   the conduit receives the request as input stream\n                   and should create the output stream that is\n                   internally sent back to the client\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e a - Control action\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA very simple example, which just sends the incoming stream\n back to the client (\u003ccode\u003ebounce\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003e  import           Control.Monad (forever)\n  import           Control.Concurrent\n  import           Network.Mom.Patterns.Basic.Server\n  import           Network.Mom.Patterns.Types\n\u003c/pre\u003e\u003cpre\u003e  main :: IO ()\n  main = withContext 1 $ \\ctx -\u003e \n             withServer ctx \"Bouncer\" \"tcp://*:5555\" Bind\n                        (\\_ _ _ -\u003e return ()) -- ignore error\n                        bounce $ \\_ -\u003e forever $ threadDelay 100000\n    where bounce = passThrough\n\u003c/pre\u003e",
          "module": "Network.Mom.Patterns.Basic.Server",
          "name": "withServer",
          "package": "patterns",
          "signature": "Context -\u003e Service -\u003e String -\u003e LinkType -\u003e OnError_ -\u003e Conduit_ -\u003e Control a -\u003e IO a",
          "source": "src/Network-Mom-Patterns-Basic-Server.html#withServer",
          "type": "function"
        },
        "index": {
          "description": "Start server as background process Context The zeromq context Service Service name String The address to link to LinkType Whether to connect to or to bind the address OnError Error handler Conduit The application-defined stream transformer the conduit receives the request as input stream and should create the output stream that is internally sent back to the client Control Control action very simple example which just sends the incoming stream back to the client bounce import Control.Monad forever import Control.Concurrent import Network.Mom.Patterns.Basic.Server import Network.Mom.Patterns.Types main IO main withContext ctx withServer ctx Bouncer tcp Bind return ignore error bounce forever threadDelay where bounce passThrough",
          "hierarchy": "Network Mom Patterns Basic Server",
          "module": "Network.Mom.Patterns.Basic.Server",
          "name": "withServer",
          "normalized": "Context-\u003eService-\u003eString-\u003eLinkType-\u003eOnError_-\u003eConduit_-\u003eControl a-\u003eIO a",
          "package": "patterns",
          "partial": "Server",
          "signature": "Context-\u003eService-\u003eString-\u003eLinkType-\u003eOnError_-\u003eConduit_-\u003eControl a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Server.html#v:withServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSubscriber side of 'Publish Subscribe'\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Patterns.Basic.Subscriber",
          "name": "Subscriber",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Basic-Subscriber.html",
          "type": "module"
        },
        "index": {
          "description": "Subscriber side of Publish Subscribe",
          "hierarchy": "Network Mom Patterns Basic Subscriber",
          "module": "Network.Mom.Patterns.Basic.Subscriber",
          "name": "Subscriber",
          "package": "patterns",
          "partial": "Subscriber",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Subscriber.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscription data type\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Basic.Subscriber",
          "name": "Sub",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Basic-Subscriber.html#Sub",
          "type": "data"
        },
        "index": {
          "description": "Subscription data type",
          "hierarchy": "Network Mom Patterns Basic Subscriber",
          "module": "Network.Mom.Patterns.Basic.Subscriber",
          "name": "Sub",
          "package": "patterns",
          "partial": "Sub",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Subscriber.html#t:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck for new data:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSub\u003c/a\u003e\u003c/code\u003e     - The subscriber\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e - When timeout expires,\n                 the function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n                 Timeout may be \n                 -1  - listen eternally,\n                 0   - return immediately,\n                 \u003e 0 - timeout in microseconds\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSinkR\u003c/a\u003e\u003c/code\u003e   - Sink the result stream.\n                 Note that the subscription header,\n                 \u003cem\u003ei.e.\u003c/em\u003e a message segment containing\n                        a comma-separated list \n                        of the topics, to which\n                        the data belong,\n                 is dropped.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Patterns.Basic.Subscriber",
          "name": "checkSub",
          "package": "patterns",
          "signature": "Sub -\u003e Timeout -\u003e SinkR (Maybe a) -\u003e IO (Maybe a)",
          "source": "src/Network-Mom-Patterns-Basic-Subscriber.html#checkSub",
          "type": "function"
        },
        "index": {
          "description": "Check for new data Sub The subscriber Timeout When timeout expires the function returns Nothing Timeout may be listen eternally return immediately timeout in microseconds SinkR Sink the result stream Note that the subscription header i.e message segment containing comma-separated list of the topics to which the data belong is dropped",
          "hierarchy": "Network Mom Patterns Basic Subscriber",
          "module": "Network.Mom.Patterns.Basic.Subscriber",
          "name": "checkSub",
          "normalized": "Sub-\u003eTimeout-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)",
          "package": "patterns",
          "partial": "Sub",
          "signature": "Sub-\u003eTimeout-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Subscriber.html#v:checkSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscribe to a list of topics;\n   Note that a subscriber has to subscribe to at least one topic\n   to receive any data.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSub\u003c/a\u003e\u003c/code\u003e       - The subscriber\n\u003c/li\u003e\u003cli\u003e [\u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e] - The list of topics to subscribe to\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Patterns.Basic.Subscriber",
          "name": "subscribe",
          "package": "patterns",
          "signature": "Sub -\u003e [Service] -\u003e IO ()",
          "source": "src/Network-Mom-Patterns-Basic-Subscriber.html#subscribe",
          "type": "function"
        },
        "index": {
          "description": "Subscribe to list of topics Note that subscriber has to subscribe to at least one topic to receive any data Sub The subscriber Service The list of topics to subscribe to",
          "hierarchy": "Network Mom Patterns Basic Subscriber",
          "module": "Network.Mom.Patterns.Basic.Subscriber",
          "name": "subscribe",
          "normalized": "Sub-\u003e[Service]-\u003eIO()",
          "package": "patterns",
          "signature": "Sub-\u003e[Service]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Subscriber.html#v:subscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a subscription and start the action, in which it lives\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e       - The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e        - The address \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e      - The link type, usually Connect\n\u003c/li\u003e\u003cli\u003e (\u003ccode\u003e\u003ca\u003eSub\u003c/a\u003e\u003c/code\u003e -\u003e IO a) - The action, in which the subscription lives\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Patterns.Basic.Subscriber",
          "name": "withSub",
          "package": "patterns",
          "signature": "Context -\u003e String -\u003e LinkType -\u003e (Sub -\u003e IO a) -\u003e IO a",
          "source": "src/Network-Mom-Patterns-Basic-Subscriber.html#withSub",
          "type": "function"
        },
        "index": {
          "description": "Create subscription and start the action in which it lives Context The zeromq context String The address LinkType The link type usually Connect Sub IO The action in which the subscription lives",
          "hierarchy": "Network Mom Patterns Basic Subscriber",
          "module": "Network.Mom.Patterns.Basic.Subscriber",
          "name": "withSub",
          "normalized": "Context-\u003eString-\u003eLinkType-\u003e(Sub-\u003eIO a)-\u003eIO a",
          "package": "patterns",
          "partial": "Sub",
          "signature": "Context-\u003eString-\u003eLinkType-\u003e(Sub-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic-Subscriber.html#v:withSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic communication patterns\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Patterns.Basic",
          "name": "Basic",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Basic.html",
          "type": "module"
        },
        "index": {
          "description": "Basic communication patterns",
          "hierarchy": "Network Mom Patterns Basic",
          "module": "Network.Mom.Patterns.Basic",
          "name": "Basic",
          "package": "patterns",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMajordomo Broker\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Patterns.Broker.Broker",
          "name": "Broker",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Broker-Broker.html",
          "type": "module"
        },
        "index": {
          "description": "Majordomo Broker",
          "hierarchy": "Network Mom Patterns Broker Broker",
          "module": "Network.Mom.Patterns.Broker.Broker",
          "name": "Broker",
          "package": "patterns",
          "partial": "Broker",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Broker.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a broker as a background process\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e   - The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e   - Service name -\n                   the service name is for debugging only,\n                   there is no relation whatsoever\n                   to the service of the Majordomo Protocol.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eMsec\u003c/a\u003e\u003c/code\u003e      - The heartbeat interval in milliseconds,\n                   which should be equal \n                   for all workers and the broker \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e    - The address clients connect to\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e    - The address servers connect to\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOnError_\u003c/a\u003e\u003c/code\u003e  - Error handler\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e a - Control action\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Patterns.Broker.Broker",
          "name": "withBroker",
          "package": "patterns",
          "signature": "Context -\u003e Service -\u003e Msec -\u003e String -\u003e String -\u003e OnError_ -\u003e (Controller -\u003e IO r) -\u003e IO r",
          "source": "src/Network-Mom-Patterns-Broker-Broker.html#withBroker",
          "type": "function"
        },
        "index": {
          "description": "Start broker as background process Context The zeromq context Service Service name the service name is for debugging only there is no relation whatsoever to the service of the Majordomo Protocol Msec The heartbeat interval in milliseconds which should be equal for all workers and the broker String The address clients connect to String The address servers connect to OnError Error handler Control Control action",
          "hierarchy": "Network Mom Patterns Broker Broker",
          "module": "Network.Mom.Patterns.Broker.Broker",
          "name": "withBroker",
          "normalized": "Context-\u003eService-\u003eMsec-\u003eString-\u003eString-\u003eOnError_-\u003e(Controller-\u003eIO a)-\u003eIO a",
          "package": "patterns",
          "partial": "Broker",
          "signature": "Context-\u003eService-\u003eMsec-\u003eString-\u003eString-\u003eOnError_-\u003e(Controller-\u003eIO r)-\u003eIO r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Broker.html#v:withBroker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMajordomo Client\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Patterns.Broker.Client",
          "name": "Client",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Broker-Client.html",
          "type": "module"
        },
        "index": {
          "description": "Majordomo Client",
          "hierarchy": "Network Mom Patterns Broker Client",
          "module": "Network.Mom.Patterns.Broker.Client",
          "name": "Client",
          "package": "patterns",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient data type\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Client",
          "name": "Client",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Broker-Client.html#Client",
          "type": "data"
        },
        "index": {
          "description": "Client data type",
          "hierarchy": "Network Mom Patterns Broker Client",
          "module": "Network.Mom.Patterns.Broker.Client",
          "name": "Client",
          "package": "patterns",
          "partial": "Client",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Client.html#t:Client"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck for a of a previously requested result;\n   use case: request with timout 0, do some work\n             and check for a result later.\n   Do not use this function without having requested the service\n      previously.\n   The parameters equal those of \u003ccode\u003e\u003ca\u003erequest\u003c/a\u003e\u003c/code\u003e,\n   but do not include a \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Client",
          "name": "checkResult",
          "package": "patterns",
          "signature": "Client -\u003e Timeout -\u003e SinkR (Maybe a) -\u003e IO (Maybe a)",
          "source": "src/Network-Mom-Patterns-Broker-Client.html#checkResult",
          "type": "function"
        },
        "index": {
          "description": "Check for of previously requested result use case request with timout do some work and check for result later Do not use this function without having requested the service previously The parameters equal those of request but do not include Source",
          "hierarchy": "Network Mom Patterns Broker Client",
          "module": "Network.Mom.Patterns.Broker.Client",
          "name": "checkResult",
          "normalized": "Client-\u003eTimeout-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)",
          "package": "patterns",
          "partial": "Result",
          "signature": "Client-\u003eTimeout-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Client.html#v:checkResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eService discovery:\n   The function checks whether the client's service \n   is provided by the broker.\n\u003c/p\u003e\u003cp\u003eReturn values:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Nothing: The broker timed out\n\u003c/li\u003e\u003cli\u003e Just False: The service is not available\n\u003c/li\u003e\u003cli\u003e Just True: The service is available\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Patterns.Broker.Client",
          "name": "checkService",
          "package": "patterns",
          "signature": "Client -\u003e Timeout -\u003e IO (Maybe Bool)",
          "source": "src/Network-Mom-Patterns-Broker-Client.html#checkService",
          "type": "function"
        },
        "index": {
          "description": "Service discovery The function checks whether the client service is provided by the broker Return values Nothing The broker timed out Just False The service is not available Just True The service is available",
          "hierarchy": "Network Mom Patterns Broker Client",
          "module": "Network.Mom.Patterns.Broker.Client",
          "name": "checkService",
          "normalized": "Client-\u003eTimeout-\u003eIO(Maybe Bool)",
          "package": "patterns",
          "partial": "Service",
          "signature": "Client-\u003eTimeout-\u003eIO(Maybe Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Client.html#v:checkService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest a service:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eClient\u003c/a\u003e\u003c/code\u003e - The client, through which the service is requested\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e - Timeout in microseconds, -1 to wait eternally.\n                 With timeout = 0, the function returns immediately\n                 with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n                 When the timeout expires, request is abandoned. \n                 In this case, the result of the request\n                 is Nothing.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e  - The source of the request stream;\n                 the format of the request will probably comply\n                 with some communication protocol,\n                 as, for instance, in the majordomo pattern.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eSinkR\u003c/a\u003e\u003c/code\u003e   - The sink receiving the reply. The result of the sink\n                 is returned as the request's overall result.\n                 Note that the sink may perform different \n                 actions on the segments of the resulting stream,\n                 \u003cem\u003ee.g.\u003c/em\u003e storing data in a database,\n                 and return the number of records received.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Patterns.Broker.Client",
          "name": "request",
          "package": "patterns",
          "signature": "Client -\u003e Timeout -\u003e Source -\u003e SinkR (Maybe a) -\u003e IO (Maybe a)",
          "source": "src/Network-Mom-Patterns-Broker-Client.html#request",
          "type": "function"
        },
        "index": {
          "description": "Request service Client The client through which the service is requested Timeout Timeout in microseconds to wait eternally With timeout the function returns immediately with Nothing When the timeout expires request is abandoned In this case the result of the request is Nothing Source The source of the request stream the format of the request will probably comply with some communication protocol as for instance in the majordomo pattern SinkR The sink receiving the reply The result of the sink is returned as the request overall result Note that the sink may perform different actions on the segments of the resulting stream e.g storing data in database and return the number of records received",
          "hierarchy": "Network Mom Patterns Broker Client",
          "module": "Network.Mom.Patterns.Broker.Client",
          "name": "request",
          "normalized": "Client-\u003eTimeout-\u003eSource-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)",
          "package": "patterns",
          "signature": "Client-\u003eTimeout-\u003eSource-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Client.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a client and start the action, \n   in whose scope the client lives;\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Client",
          "name": "withClient",
          "package": "patterns",
          "signature": "Context -\u003e Service -\u003e String -\u003e LinkType -\u003e (Client -\u003e IO a) -\u003e IO a",
          "source": "src/Network-Mom-Patterns-Broker-Client.html#withClient",
          "type": "function"
        },
        "index": {
          "description": "Create client and start the action in whose scope the client lives",
          "hierarchy": "Network Mom Patterns Broker Client",
          "module": "Network.Mom.Patterns.Broker.Client",
          "name": "withClient",
          "normalized": "Context-\u003eService-\u003eString-\u003eLinkType-\u003e(Client-\u003eIO a)-\u003eIO a",
          "package": "patterns",
          "partial": "Client",
          "signature": "Context-\u003eService-\u003eString-\u003eLinkType-\u003e(Client-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Client.html#v:withClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMajordomo common definitions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "Common",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Broker-Common.html",
          "type": "module"
        },
        "index": {
          "description": "Majordomo common definitions",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "Common",
          "package": "patterns",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorker Frame Type\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "FrameType",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#FrameType",
          "type": "data"
        },
        "index": {
          "description": "Worker Frame Type",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "FrameType",
          "package": "patterns",
          "partial": "Frame Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#t:FrameType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMDP Exception\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "MDPException",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#MDPException",
          "type": "data"
        },
        "index": {
          "description": "MDP Exception",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "MDPException",
          "package": "patterns",
          "partial": "MDPException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#t:MDPException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eService name \n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "ServiceName",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#ServiceName",
          "type": "type"
        },
        "index": {
          "description": "Service name",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "ServiceName",
          "package": "patterns",
          "partial": "Service Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#t:ServiceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroker / Server protocol:\n  Heartbeat, Ready, Reply, Request, Disconnect\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "WFrame",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#WFrame",
          "type": "data"
        },
        "index": {
          "description": "Broker Server protocol Heartbeat Ready Reply Request Disconnect",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "WFrame",
          "package": "patterns",
          "partial": "WFrame",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#t:WFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroker exception\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "BrokerExc",
          "package": "patterns",
          "signature": "BrokerExc String",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#MDPException",
          "type": "function"
        },
        "index": {
          "description": "Broker exception",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "BrokerExc",
          "package": "patterns",
          "partial": "Broker Exc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:BrokerExc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient-side exception\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "ClientExc",
          "package": "patterns",
          "signature": "ClientExc String",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#MDPException",
          "type": "function"
        },
        "index": {
          "description": "Client-side exception",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "ClientExc",
          "package": "patterns",
          "partial": "Client Exc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:ClientExc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "DisconnectT",
          "package": "patterns",
          "signature": "DisconnectT",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#FrameType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "DisconnectT",
          "package": "patterns",
          "partial": "Disconnect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:DisconnectT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "HeartBeatT",
          "package": "patterns",
          "signature": "HeartBeatT",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#FrameType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "HeartBeatT",
          "package": "patterns",
          "partial": "Heart Beat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:HeartBeatT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric Protocol\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "MDPExc",
          "package": "patterns",
          "signature": "MDPExc String",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#MDPException",
          "type": "function"
        },
        "index": {
          "description": "Generic Protocol",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "MDPExc",
          "package": "patterns",
          "partial": "MDPExc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:MDPExc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMMI Protocol\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "MMIExc",
          "package": "patterns",
          "signature": "MMIExc String",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#MDPException",
          "type": "function"
        },
        "index": {
          "description": "MMI Protocol",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "MMIExc",
          "package": "patterns",
          "partial": "MMIExc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:MMIExc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "ReadyT",
          "package": "patterns",
          "signature": "ReadyT",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#FrameType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "ReadyT",
          "package": "patterns",
          "partial": "Ready",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:ReadyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "ReplyT",
          "package": "patterns",
          "signature": "ReplyT",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#FrameType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "ReplyT",
          "package": "patterns",
          "partial": "Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:ReplyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "RequestT",
          "package": "patterns",
          "signature": "RequestT",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#FrameType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "RequestT",
          "package": "patterns",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:RequestT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer-side exception\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "ServerExc",
          "package": "patterns",
          "signature": "ServerExc String",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#MDPException",
          "type": "function"
        },
        "index": {
          "description": "Server-side exception",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "ServerExc",
          "package": "patterns",
          "partial": "Server Exc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:ServerExc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "WBeat",
          "package": "patterns",
          "signature": "WBeat Identity",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#WFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "WBeat",
          "package": "patterns",
          "partial": "WBeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:WBeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "WDisc",
          "package": "patterns",
          "signature": "WDisc Identity",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#WFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "WDisc",
          "package": "patterns",
          "partial": "WDisc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:WDisc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "WReady",
          "package": "patterns",
          "signature": "WReady Identity ByteString",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#WFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "WReady",
          "package": "patterns",
          "partial": "WReady",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:WReady"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "WReply",
          "package": "patterns",
          "signature": "WReply Identity [Identity]",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#WFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "WReply",
          "normalized": "WReply Identity[Identity]",
          "package": "patterns",
          "partial": "WReply",
          "signature": "WReply Identity[Identity]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:WReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "WRequest",
          "package": "patterns",
          "signature": "WRequest [Identity]",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#WFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "WRequest",
          "normalized": "WRequest[Identity]",
          "package": "patterns",
          "partial": "WRequest",
          "signature": "WRequest[Identity]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:WRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck segment contents\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "chunk",
          "package": "patterns",
          "signature": "ByteString -\u003e String -\u003e Conduit o ()",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#chunk",
          "type": "function"
        },
        "index": {
          "description": "Check segment contents",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "chunk",
          "normalized": "ByteString-\u003eString-\u003eConduit a()",
          "package": "patterns",
          "signature": "ByteString-\u003eString-\u003eConduit o()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet empty segment\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "empty",
          "package": "patterns",
          "signature": "Conduit o ()",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Get empty segment",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "empty",
          "normalized": "Conduit a()",
          "package": "patterns",
          "signature": "Conduit o()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet block of identities (\u003ca\u003eenvelope\u003c/a\u003e)\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "envelope",
          "package": "patterns",
          "signature": "Conduit o [Identity]",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#envelope",
          "type": "function"
        },
        "index": {
          "description": "Get block of identities envelope",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "envelope",
          "normalized": "Conduit a[Identity]",
          "package": "patterns",
          "signature": "Conduit o[Identity]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:envelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet frame type\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "frameType",
          "package": "patterns",
          "signature": "Conduit o FrameType",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#frameType",
          "type": "function"
        },
        "index": {
          "description": "Get frame type",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "frameType",
          "package": "patterns",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:frameType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet segment contents\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "getChunk",
          "package": "patterns",
          "signature": "Conduit o ByteString",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#getChunk",
          "type": "function"
        },
        "index": {
          "description": "Get segment contents",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "getChunk",
          "package": "patterns",
          "partial": "Chunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:getChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet identity\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "identity",
          "package": "patterns",
          "signature": "Conduit o Identity",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#identity",
          "type": "function"
        },
        "index": {
          "description": "Get identity",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "identity",
          "package": "patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMajordomo protocol client/worker version 1\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpC01",
          "package": "patterns",
          "signature": "ByteString",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mdpC01",
          "type": "function"
        },
        "index": {
          "description": "Majordomo protocol client worker version",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpC01",
          "package": "patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpC01"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroker -\u003e Client: receive reply\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpCRcvRep",
          "package": "patterns",
          "signature": "ServiceName -\u003e Conduit ByteString ()",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mdpCRcvRep",
          "type": "function"
        },
        "index": {
          "description": "Broker Client receive reply",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpCRcvRep",
          "normalized": "ServiceName-\u003eConduit ByteString()",
          "package": "patterns",
          "partial": "CRcv Rep",
          "signature": "ServiceName-\u003eConduit ByteString()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpCRcvRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient -\u003e Broker: receive request\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpCRcvReq",
          "package": "patterns",
          "signature": "Conduit o (Identity, ByteString)",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mdpCRcvReq",
          "type": "function"
        },
        "index": {
          "description": "Client Broker receive request",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpCRcvReq",
          "normalized": "Conduit a(Identity,ByteString)",
          "package": "patterns",
          "partial": "CRcv Req",
          "signature": "Conduit o(Identity,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpCRcvReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroker -\u003e Client: send reply\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpCSndRep",
          "package": "patterns",
          "signature": "ByteString -\u003e [Identity] -\u003e Conduit ByteString ()",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mdpCSndRep",
          "type": "function"
        },
        "index": {
          "description": "Broker Client send reply",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpCSndRep",
          "normalized": "ByteString-\u003e[Identity]-\u003eConduit ByteString()",
          "package": "patterns",
          "partial": "CSnd Rep",
          "signature": "ByteString-\u003e[Identity]-\u003eConduit ByteString()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpCSndRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient -\u003e Broker: send request\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpCSndReq",
          "package": "patterns",
          "signature": "ServiceName -\u003e Conduit ByteString ()",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mdpCSndReq",
          "type": "function"
        },
        "index": {
          "description": "Client Broker send request",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpCSndReq",
          "normalized": "ServiceName-\u003eConduit ByteString()",
          "package": "patterns",
          "partial": "CSnd Req",
          "signature": "ServiceName-\u003eConduit ByteString()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpCSndReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMajordomo protocol client/worker version 1\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpW01",
          "package": "patterns",
          "signature": "ByteString",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mdpW01",
          "type": "function"
        },
        "index": {
          "description": "Majordomo protocol client worker version",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpW01",
          "package": "patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpW01"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroker \u003c-\u003e Server: send heartbeat \n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpWBeat",
          "package": "patterns",
          "signature": "Conduit ByteString ()",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mdpWBeat",
          "type": "function"
        },
        "index": {
          "description": "Broker Server send heartbeat",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpWBeat",
          "normalized": "Conduit ByteString()",
          "package": "patterns",
          "partial": "WBeat",
          "signature": "Conduit ByteString()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpWBeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroker -\u003e Server: disconnect\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpWBrkDisc",
          "package": "patterns",
          "signature": "Identity -\u003e Source",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mdpWBrkDisc",
          "type": "function"
        },
        "index": {
          "description": "Broker Server disconnect",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpWBrkDisc",
          "normalized": "Identity-\u003eSource",
          "package": "patterns",
          "partial": "WBrk Disc",
          "signature": "Identity-\u003eSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpWBrkDisc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer -\u003e Broker: send connect request (ready)\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpWConnect",
          "package": "patterns",
          "signature": "ServiceName -\u003e Source",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mdpWConnect",
          "type": "function"
        },
        "index": {
          "description": "Server Broker send connect request ready",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpWConnect",
          "normalized": "ServiceName-\u003eSource",
          "package": "patterns",
          "partial": "WConnect",
          "signature": "ServiceName-\u003eSource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpWConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer -\u003e Broker: disconnect \n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpWDisconnect",
          "package": "patterns",
          "signature": "Source",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mdpWDisconnect",
          "type": "function"
        },
        "index": {
          "description": "Server Broker disconnect",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpWDisconnect",
          "package": "patterns",
          "partial": "WDisconnect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpWDisconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer -\u003e Broker: receive reply\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpWRcvRep",
          "package": "patterns",
          "signature": "Conduit o WFrame",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mdpWRcvRep",
          "type": "function"
        },
        "index": {
          "description": "Server Broker receive reply",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpWRcvRep",
          "package": "patterns",
          "partial": "WRcv Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpWRcvRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroker -\u003e Server: receive request \n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpWRcvReq",
          "package": "patterns",
          "signature": "Conduit o WFrame",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mdpWRcvReq",
          "type": "function"
        },
        "index": {
          "description": "Broker Server receive request",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpWRcvReq",
          "package": "patterns",
          "partial": "WRcv Req",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpWRcvReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer -\u003e Broker: send reply\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpWSndRep",
          "package": "patterns",
          "signature": "[Identity] -\u003e Conduit ByteString ()",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mdpWSndRep",
          "type": "function"
        },
        "index": {
          "description": "Server Broker send reply",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpWSndRep",
          "normalized": "[Identity]-\u003eConduit ByteString()",
          "package": "patterns",
          "partial": "WSnd Rep",
          "signature": "[Identity]-\u003eConduit ByteString()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpWSndRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroker -\u003e Server: send request \n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpWSndReq",
          "package": "patterns",
          "signature": "Identity -\u003e [Identity] -\u003e Conduit ByteString ()",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mdpWSndReq",
          "type": "function"
        },
        "index": {
          "description": "Broker Server send request",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mdpWSndReq",
          "normalized": "Identity-\u003e[Identity]-\u003eConduit ByteString()",
          "package": "patterns",
          "partial": "WSnd Req",
          "signature": "Identity-\u003e[Identity]-\u003eConduit ByteString()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mdpWSndReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMajordomo Management Interface -- responses:\n   Found (\"200\"), NotFound (\"404\"), NotImplemented (\"501\")\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mmiFound",
          "package": "patterns",
          "signature": "ByteString",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mmiFound",
          "type": "function"
        },
        "index": {
          "description": "Majordomo Management Interface responses Found NotFound NotImplemented",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mmiFound",
          "package": "patterns",
          "partial": "Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mmiFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMajordomo Management Interface (MMI) -\n   \"mmi.service\" \n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mmiHdr",
          "package": "patterns",
          "signature": "ByteString",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mmiHdr",
          "type": "function"
        },
        "index": {
          "description": "Majordomo Management Interface MMI mmi.service",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mmiHdr",
          "package": "patterns",
          "partial": "Hdr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mmiHdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMajordomo Management Interface -- responses:\n   Found (\"200\"), NotFound (\"404\"), NotImplemented (\"501\")\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mmiNimpl",
          "package": "patterns",
          "signature": "ByteString",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mmiNimpl",
          "type": "function"
        },
        "index": {
          "description": "Majordomo Management Interface responses Found NotFound NotImplemented",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mmiNimpl",
          "package": "patterns",
          "partial": "Nimpl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mmiNimpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMajordomo Management Interface -- responses:\n   Found (\"200\"), NotFound (\"404\"), NotImplemented (\"501\")\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mmiNotFound",
          "package": "patterns",
          "signature": "ByteString",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mmiNotFound",
          "type": "function"
        },
        "index": {
          "description": "Majordomo Management Interface responses Found NotFound NotImplemented",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mmiNotFound",
          "package": "patterns",
          "partial": "Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mmiNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMajordomo Management Interface (MMI) -\n   \"mmi.service\" \n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mmiSrv",
          "package": "patterns",
          "signature": "ByteString",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#mmiSrv",
          "type": "function"
        },
        "index": {
          "description": "Majordomo Management Interface MMI mmi.service",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "mmiSrv",
          "package": "patterns",
          "partial": "Srv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:mmiSrv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate envelope [(identity, B.empty)]\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "toIs",
          "package": "patterns",
          "signature": "[Identity] -\u003e [ByteString]",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#toIs",
          "type": "function"
        },
        "index": {
          "description": "Create envelope identity B.empty",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "toIs",
          "normalized": "[Identity]-\u003e[ByteString]",
          "package": "patterns",
          "partial": "Is",
          "signature": "[Identity]-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:toIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage types (ready, request, reply, heartbeat, disconnect)\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "xDisc",
          "package": "patterns",
          "signature": "ByteString",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#xDisc",
          "type": "function"
        },
        "index": {
          "description": "Message types ready request reply heartbeat disconnect",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "xDisc",
          "package": "patterns",
          "partial": "Disc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:xDisc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage types (ready, request, reply, heartbeat, disconnect)\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "xHeartBeat",
          "package": "patterns",
          "signature": "ByteString",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#xHeartBeat",
          "type": "function"
        },
        "index": {
          "description": "Message types ready request reply heartbeat disconnect",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "xHeartBeat",
          "package": "patterns",
          "partial": "Heart Beat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:xHeartBeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage types (ready, request, reply, heartbeat, disconnect)\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "xReady",
          "package": "patterns",
          "signature": "ByteString",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#xReady",
          "type": "function"
        },
        "index": {
          "description": "Message types ready request reply heartbeat disconnect",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "xReady",
          "package": "patterns",
          "partial": "Ready",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:xReady"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage types (ready, request, reply, heartbeat, disconnect)\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "xReply",
          "package": "patterns",
          "signature": "ByteString",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#xReply",
          "type": "function"
        },
        "index": {
          "description": "Message types ready request reply heartbeat disconnect",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "xReply",
          "package": "patterns",
          "partial": "Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:xReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage types (ready, request, reply, heartbeat, disconnect)\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "xRequest",
          "package": "patterns",
          "signature": "ByteString",
          "source": "src/Network-Mom-Patterns-Broker-Common.html#xRequest",
          "type": "function"
        },
        "index": {
          "description": "Message types ready request reply heartbeat disconnect",
          "hierarchy": "Network Mom Patterns Broker Common",
          "module": "Network.Mom.Patterns.Broker.Common",
          "name": "xRequest",
          "package": "patterns",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Common.html#v:xRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMajordomo Server\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Patterns.Broker.Server",
          "name": "Server",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Broker-Server.html",
          "type": "module"
        },
        "index": {
          "description": "Majordomo Server",
          "hierarchy": "Network Mom Patterns Broker Server",
          "module": "Network.Mom.Patterns.Broker.Server",
          "name": "Server",
          "package": "patterns",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a server as a background process\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e   - The zeromq context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e   - Service name; \n                   the service name is used to register\n                   at the broker.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eMsec\u003c/a\u003e\u003c/code\u003e      - Heartbeat in Milliseconds;\n                   must be synchronised with the broker heartbeat\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e    - The address to link to\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOnError_\u003c/a\u003e\u003c/code\u003e  - Error handler\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eConduit_\u003c/a\u003e\u003c/code\u003e  - The application-defined stream transformer;\n                   the conduit receives the request as input stream\n                   and should create the output stream that is\n                   internally sent back to the client\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e a - Control action\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Patterns.Broker.Server",
          "name": "withServer",
          "package": "patterns",
          "signature": "Context -\u003e Service -\u003e Msec -\u003e String -\u003e OnError_ -\u003e Conduit_ -\u003e Control a -\u003e IO a",
          "source": "src/Network-Mom-Patterns-Broker-Server.html#withServer",
          "type": "function"
        },
        "index": {
          "description": "Start server as background process Context The zeromq context Service Service name the service name is used to register at the broker Msec Heartbeat in Milliseconds must be synchronised with the broker heartbeat String The address to link to OnError Error handler Conduit The application-defined stream transformer the conduit receives the request as input stream and should create the output stream that is internally sent back to the client Control Control action",
          "hierarchy": "Network Mom Patterns Broker Server",
          "module": "Network.Mom.Patterns.Broker.Server",
          "name": "withServer",
          "normalized": "Context-\u003eService-\u003eMsec-\u003eString-\u003eOnError_-\u003eConduit_-\u003eControl a-\u003eIO a",
          "package": "patterns",
          "partial": "Server",
          "signature": "Context-\u003eService-\u003eMsec-\u003eString-\u003eOnError_-\u003eConduit_-\u003eControl a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker-Server.html#v:withServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMajordomo Service Broker \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Patterns.Broker",
          "name": "Broker",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Broker.html",
          "type": "module"
        },
        "index": {
          "description": "Majordomo Service Broker",
          "hierarchy": "Network Mom Patterns Broker",
          "module": "Network.Mom.Patterns.Broker",
          "name": "Broker",
          "package": "patterns",
          "partial": "Broker",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Broker.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStream processing services\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "Streams",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Streams.html",
          "type": "module"
        },
        "index": {
          "description": "Stream processing services",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "Streams",
          "package": "patterns",
          "partial": "Streams",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the type of a \u003ccode\u003e\u003ca\u003ePollEntry\u003c/a\u003e\u003c/code\u003e;\n   the names of the constructors are similar \n   to the corresponding ZMQ socket types.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "AccessType",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Streams.html#AccessType",
          "type": "data"
        },
        "index": {
          "description": "Defines the type of PollEntry the names of the constructors are similar to the corresponding ZMQ socket types",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "AccessType",
          "package": "patterns",
          "partial": "Access Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:AccessType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl Action\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "Control",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Streams.html#Control",
          "type": "type"
        },
        "index": {
          "description": "Control Action",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "Control",
          "package": "patterns",
          "partial": "Control",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:Control"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eController\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "Controller",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Streams.html#Controller",
          "type": "data"
        },
        "index": {
          "description": "Controller",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "Controller",
          "package": "patterns",
          "partial": "Controller",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:Controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003ezeromq\u003c/em\u003e \u003ccode\u003eAccessPoint\u003c/code\u003e\n   can be bound or connected to its address.\n   Only one peer can bind the address,\n   all other parties have to connect.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "LinkType",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#LinkType",
          "type": "data"
        },
        "index": {
          "description": "zeromq AccessPoint can be bound or connected to its address Only one peer can bind the address all other parties have to connect",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "LinkType",
          "package": "patterns",
          "partial": "Link Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:LinkType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA poll entry describes how to access and identify a socket\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "PollEntry",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Streams.html#PollEntry",
          "type": "data"
        },
        "index": {
          "description": "poll entry describes how to access and identify socket",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "PollEntry",
          "package": "patterns",
          "partial": "Poll Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:PollEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIO Action with Streamer (\u003cem\u003ee.g.\u003c/em\u003e Timeout action)\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "StreamAction",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Streams.html#StreamAction",
          "type": "type"
        },
        "index": {
          "description": "IO Action with Streamer e.g Timeout action",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "StreamAction",
          "package": "patterns",
          "partial": "Stream Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:StreamAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConduit with Streamer\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "StreamConduit",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Streams.html#StreamConduit",
          "type": "type"
        },
        "index": {
          "description": "Conduit with Streamer",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "StreamConduit",
          "package": "patterns",
          "partial": "Stream Conduit",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:StreamConduit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSink with Streamer\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "StreamSink",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Streams.html#StreamSink",
          "type": "type"
        },
        "index": {
          "description": "Sink with Streamer",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "StreamSink",
          "package": "patterns",
          "partial": "Stream Sink",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:StreamSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHolds information on streams and the current state of the streamer,\n   \u003cem\u003ei.e.\u003c/em\u003e the current source.\n   Streamers are passed to processing conduits.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "Streamer",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Streams.html#Streamer",
          "type": "data"
        },
        "index": {
          "description": "Holds information on streams and the current state of the streamer i.e the current source Streamers are passed to processing conduits",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "Streamer",
          "package": "patterns",
          "partial": "Streamer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#t:Streamer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind the address\n\u003c/p\u003e",
          "module": "[\"Network.Mom.Patterns.Streams\",\"Network.Mom.Patterns.Types\"]",
          "name": "Bind",
          "package": "patterns",
          "signature": "Bind",
          "source": "src/Network-Mom-Patterns-Types.html#LinkType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:Bind\",\"http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:Bind\"]"
        },
        "index": {
          "description": "Bind the address",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "Bind",
          "package": "patterns",
          "partial": "Bind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:Bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a client and connects to a server;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003eReq\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "ClientT",
          "package": "patterns",
          "signature": "ClientT",
          "source": "src/Network-Mom-Patterns-Streams.html#AccessType",
          "type": "function"
        },
        "index": {
          "description": "Represents client and connects to server corresponds to ZMQ Socket Type Req",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "ClientT",
          "package": "patterns",
          "partial": "Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:ClientT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to the address\n\u003c/p\u003e",
          "module": "[\"Network.Mom.Patterns.Streams\",\"Network.Mom.Patterns.Types\"]",
          "name": "Connect",
          "package": "patterns",
          "signature": "Connect",
          "source": "src/Network-Mom-Patterns-Types.html#LinkType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:Connect\",\"http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:Connect\"]"
        },
        "index": {
          "description": "Connect to the address",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "Connect",
          "package": "patterns",
          "partial": "Connect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:Connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a router\n   expecting connections from servers;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003eXReq\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "DealerT",
          "package": "patterns",
          "signature": "DealerT",
          "source": "src/Network-Mom-Patterns-Streams.html#AccessType",
          "type": "function"
        },
        "index": {
          "description": "Represents router expecting connections from servers corresponds to ZMQ Socket Type XReq",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "DealerT",
          "package": "patterns",
          "partial": "Dealer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:DealerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a Peer;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "PeerT",
          "package": "patterns",
          "signature": "PeerT",
          "source": "src/Network-Mom-Patterns-Streams.html#AccessType",
          "type": "function"
        },
        "index": {
          "description": "Represents Peer corresponds to ZMQ Socket Type Pair",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "PeerT",
          "package": "patterns",
          "partial": "Peer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:PeerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a Pipe;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003ePush\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "PipeT",
          "package": "patterns",
          "signature": "PipeT",
          "source": "src/Network-Mom-Patterns-Streams.html#AccessType",
          "type": "function"
        },
        "index": {
          "description": "Represents Pipe corresponds to ZMQ Socket Type Push",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "PipeT",
          "package": "patterns",
          "partial": "Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:PipeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Mom.Patterns.Streams",
          "name": "Poll",
          "package": "patterns",
          "signature": "Poll",
          "source": "src/Network-Mom-Patterns-Streams.html#PollEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "Poll",
          "package": "patterns",
          "partial": "Poll",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:Poll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a publisher;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003ePub\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "PubT",
          "package": "patterns",
          "signature": "PubT",
          "source": "src/Network-Mom-Patterns-Streams.html#AccessType",
          "type": "function"
        },
        "index": {
          "description": "Represents publisher corresponds to ZMQ Socket Type Pub",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "PubT",
          "package": "patterns",
          "partial": "Pub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:PubT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a Puller;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003ePull\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "PullT",
          "package": "patterns",
          "signature": "PullT",
          "source": "src/Network-Mom-Patterns-Streams.html#AccessType",
          "type": "function"
        },
        "index": {
          "description": "Represents Puller corresponds to ZMQ Socket Type Pull",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "PullT",
          "package": "patterns",
          "partial": "Pull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:PullT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a load balancer, \n   expecting connections from clients;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003eXRep\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "RouterT",
          "package": "patterns",
          "signature": "RouterT",
          "source": "src/Network-Mom-Patterns-Streams.html#AccessType",
          "type": "function"
        },
        "index": {
          "description": "Represents load balancer expecting connections from clients corresponds to ZMQ Socket Type XRep",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "RouterT",
          "package": "patterns",
          "partial": "Router",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:RouterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a server and expects connections from clients;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "ServerT",
          "package": "patterns",
          "signature": "ServerT",
          "source": "src/Network-Mom-Patterns-Streams.html#AccessType",
          "type": "function"
        },
        "index": {
          "description": "Represents server and expects connections from clients corresponds to ZMQ Socket Type Rep",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "ServerT",
          "package": "patterns",
          "partial": "Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:ServerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a subscriber;\n   corresponds to ZMQ Socket Type \u003ccode\u003e\u003ca\u003eSub\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "SubT",
          "package": "patterns",
          "signature": "SubT",
          "source": "src/Network-Mom-Patterns-Streams.html#AccessType",
          "type": "function"
        },
        "index": {
          "description": "Represents subscriber corresponds to ZMQ Socket Type Sub",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "SubT",
          "package": "patterns",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:SubT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter subset of streams; usually you want to filter\n   a subset of streams to which to relay an incoming stream.\n   Note that the result is just a list of stream identifiers,\n   which of course could be used directly in the first place.\n   A meaningful use of filterstreams would be, for instance:\n\u003c/p\u003e\u003cpre\u003e let targets = filterStreams s (/= getSource s)\n\u003c/pre\u003e\u003cp\u003eWhere all streams but the source are selected.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "filterStreams",
          "package": "patterns",
          "signature": "Streamer -\u003e (Identifier -\u003e Bool) -\u003e [Identifier]",
          "source": "src/Network-Mom-Patterns-Streams.html#filterStreams",
          "type": "function"
        },
        "index": {
          "description": "Filter subset of streams usually you want to filter subset of streams to which to relay an incoming stream Note that the result is just list of stream identifiers which of course could be used directly in the first place meaningful use of filterstreams would be for instance let targets filterStreams getSource Where all streams but the source are selected",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "filterStreams",
          "normalized": "Streamer-\u003e(Identifier-\u003eBool)-\u003e[Identifier]",
          "package": "patterns",
          "partial": "Streams",
          "signature": "Streamer-\u003e(Identifier-\u003eBool)-\u003e[Identifier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:filterStreams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet current source\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "getSource",
          "package": "patterns",
          "signature": "Streamer -\u003e Identifier",
          "source": "src/Network-Mom-Patterns-Streams.html#getSource",
          "type": "function"
        },
        "index": {
          "description": "Get current source",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "getSource",
          "normalized": "Streamer-\u003eIdentifier",
          "package": "patterns",
          "partial": "Source",
          "signature": "Streamer-\u003eIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:getSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore an incoming stream\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "ignoreStream",
          "package": "patterns",
          "signature": "Sink",
          "source": "src/Network-Mom-Patterns-Streams.html#ignoreStream",
          "type": "function"
        },
        "index": {
          "description": "Ignore an incoming stream",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "ignoreStream",
          "package": "patterns",
          "partial": "Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:ignoreStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe internal stream that represents the \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e.\n   StreamSinks can write to this stream, \u003cem\u003ee.g.\u003c/em\u003e:\n\u003c/p\u003e\u003cpre\u003e passAll s [internal]\n\u003c/pre\u003e\u003cp\u003eAnd the streamer may also receive from this stream, \u003cem\u003ee.g.\u003c/em\u003e:\n\u003c/p\u003e\u003cpre\u003e if getSource s == internal\n\u003c/pre\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "internal",
          "package": "patterns",
          "signature": "Identifier",
          "source": "src/Network-Mom-Patterns-Streams.html#internal",
          "type": "function"
        },
        "index": {
          "description": "The internal stream that represents the Controller StreamSinks can write to this stream e.g passAll internal And the streamer may also receive from this stream e.g if getSource internal",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "internal",
          "package": "patterns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinds or connects a socket to an address\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "link",
          "package": "patterns",
          "signature": "LinkType -\u003e Socket a -\u003e String -\u003e [SocketOption] -\u003e IO ()",
          "source": "src/Network-Mom-Patterns-Streams.html#link",
          "type": "function"
        },
        "index": {
          "description": "Binds or connects socket to an address",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "link",
          "normalized": "LinkType-\u003eSocket a-\u003eString-\u003e[SocketOption]-\u003eIO()",
          "package": "patterns",
          "signature": "LinkType-\u003eSocket a-\u003eString-\u003e[SocketOption]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely read \u003ccode\u003e\u003ca\u003eAccessType\u003c/a\u003e\u003c/code\u003e;\n   ignores the case of the input string\n   (\u003cem\u003ee.g.\u003c/em\u003e \"servert\" -\u003e \u003ccode\u003e\u003ca\u003eServerT\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "parseAccess",
          "package": "patterns",
          "signature": "String -\u003e Maybe AccessType",
          "source": "src/Network-Mom-Patterns-Streams.html#parseAccess",
          "type": "function"
        },
        "index": {
          "description": "Safely read AccessType ignores the case of the input string e.g servert ServerT",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "parseAccess",
          "normalized": "String-\u003eMaybe AccessType",
          "package": "patterns",
          "partial": "Access",
          "signature": "String-\u003eMaybe AccessType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:parseAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely read \u003ccode\u003e\u003ca\u003eLinkType\u003c/a\u003e\u003c/code\u003e;\n   ignores the case of the input string\n   and, besides \"bind\" and \"connect\", \n   also accepts \"bin\", \"con\" and \"conn\";\n   intended for use with command line parameters\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "parseLink",
          "package": "patterns",
          "signature": "String -\u003e Maybe LinkType",
          "source": "src/Network-Mom-Patterns-Streams.html#parseLink",
          "type": "function"
        },
        "index": {
          "description": "Safely read LinkType ignores the case of the input string and besides bind and connect also accepts bin con and conn intended for use with command line parameters",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "parseLink",
          "normalized": "String-\u003eMaybe LinkType",
          "package": "patterns",
          "partial": "Link",
          "signature": "String-\u003eMaybe LinkType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:parseLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the \u003ccode\u003eByteString\u003c/code\u003e segments to the outgoing streams\n   identified by [\u003ccode\u003e\u003ca\u003eIdentifier\u003c/a\u003e\u003c/code\u003e]\n   without terminating the stream,\n   \u003cem\u003ei.e.\u003c/em\u003e more segments must be sent.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "part",
          "package": "patterns",
          "signature": "Streamer -\u003e [Identifier] -\u003e [ByteString] -\u003e Sink",
          "source": "src/Network-Mom-Patterns-Streams.html#part",
          "type": "function"
        },
        "index": {
          "description": "Send the ByteString segments to the outgoing streams identified by Identifier without terminating the stream i.e more segments must be sent",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "part",
          "normalized": "Streamer-\u003e[Identifier]-\u003e[ByteString]-\u003eSink",
          "package": "patterns",
          "signature": "Streamer-\u003e[Identifier]-\u003e[ByteString]-\u003eSink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass one segment and ignore the remainder of the stream.\n   The stream is terminated.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "pass1",
          "package": "patterns",
          "signature": "Streamer -\u003e [Identifier] -\u003e Sink",
          "source": "src/Network-Mom-Patterns-Streams.html#pass1",
          "type": "function"
        },
        "index": {
          "description": "Pass one segment and ignore the remainder of the stream The stream is terminated",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "pass1",
          "normalized": "Streamer-\u003e[Identifier]-\u003eSink",
          "package": "patterns",
          "signature": "Streamer-\u003e[Identifier]-\u003eSink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:pass1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass all segments of an incoming stream \n   to a list of outgoing streams.\n   The stream is terminated.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "passAll",
          "package": "patterns",
          "signature": "Streamer -\u003e [Identifier] -\u003e Sink",
          "source": "src/Network-Mom-Patterns-Streams.html#passAll",
          "type": "function"
        },
        "index": {
          "description": "Pass all segments of an incoming stream to list of outgoing streams The stream is terminated",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "passAll",
          "normalized": "Streamer-\u003e[Identifier]-\u003eSink",
          "package": "patterns",
          "partial": "All",
          "signature": "Streamer-\u003e[Identifier]-\u003eSink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:passAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass n segments and ignore the remainder of the stream.\n   The stream is terminated.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "passN",
          "package": "patterns",
          "signature": "Streamer -\u003e [Identifier] -\u003e Int -\u003e Sink",
          "source": "src/Network-Mom-Patterns-Streams.html#passN",
          "type": "function"
        },
        "index": {
          "description": "Pass segments and ignore the remainder of the stream The stream is terminated",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "passN",
          "normalized": "Streamer-\u003e[Identifier]-\u003eInt-\u003eSink",
          "package": "patterns",
          "signature": "Streamer-\u003e[Identifier]-\u003eInt-\u003eSink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:passN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass while condition is true and ignore the remainder of the stream.\n   The stream is terminated.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "passWhile",
          "package": "patterns",
          "signature": "Streamer -\u003e [Identifier] -\u003e (ByteString -\u003e Bool) -\u003e Sink",
          "source": "src/Network-Mom-Patterns-Streams.html#passWhile",
          "type": "function"
        },
        "index": {
          "description": "Pass while condition is true and ignore the remainder of the stream The stream is terminated",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "passWhile",
          "normalized": "Streamer-\u003e[Identifier]-\u003e(ByteString-\u003eBool)-\u003eSink",
          "package": "patterns",
          "partial": "While",
          "signature": "Streamer-\u003e[Identifier]-\u003e(ByteString-\u003eBool)-\u003eSink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:passWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePause streams\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "pause",
          "package": "patterns",
          "signature": "Controller -\u003e IO ()",
          "source": "src/Network-Mom-Patterns-Streams.html#pause",
          "type": "function"
        },
        "index": {
          "description": "Pause streams",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "pause",
          "normalized": "Controller-\u003eIO()",
          "package": "patterns",
          "signature": "Controller-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:pause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe address to link to\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "pollAdd",
          "package": "patterns",
          "signature": "String",
          "source": "src/Network-Mom-Patterns-Streams.html#PollEntry",
          "type": "function"
        },
        "index": {
          "description": "The address to link to",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "pollAdd",
          "package": "patterns",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:pollAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to address this particular stream\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "pollId",
          "package": "patterns",
          "signature": "Identifier",
          "source": "src/Network-Mom-Patterns-Streams.html#PollEntry",
          "type": "function"
        },
        "index": {
          "description": "How to address this particular stream",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "pollId",
          "package": "patterns",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:pollId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to link (bind or connect)\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "pollLink",
          "package": "patterns",
          "signature": "LinkType",
          "source": "src/Network-Mom-Patterns-Streams.html#PollEntry",
          "type": "function"
        },
        "index": {
          "description": "How to link bind or connect",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "pollLink",
          "package": "patterns",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:pollLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ezeromq socket options\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "pollOs",
          "package": "patterns",
          "signature": "[SocketOption]",
          "source": "src/Network-Mom-Patterns-Streams.html#PollEntry",
          "type": "function"
        },
        "index": {
          "description": "zeromq socket options",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "pollOs",
          "normalized": "[SocketOption]",
          "package": "patterns",
          "partial": "Os",
          "signature": "[SocketOption]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:pollOs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e (or topics)\n   for subscribers\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "pollSub",
          "package": "patterns",
          "signature": "[Service]",
          "source": "src/Network-Mom-Patterns-Streams.html#PollEntry",
          "type": "function"
        },
        "index": {
          "description": "List of Service or topics for subscribers",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "pollSub",
          "normalized": "[Service]",
          "package": "patterns",
          "partial": "Sub",
          "signature": "[Service]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:pollSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe zeromq socket type\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "pollType",
          "package": "patterns",
          "signature": "AccessType",
          "source": "src/Network-Mom-Patterns-Streams.html#PollEntry",
          "type": "function"
        },
        "index": {
          "description": "The zeromq socket type",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "pollType",
          "package": "patterns",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:pollType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive a stream through the controller\n   that was sink'd to the target \u003ccode\u003e\u003ca\u003einternal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "receive",
          "package": "patterns",
          "signature": "Controller -\u003e Timeout -\u003e SinkR (Maybe a) -\u003e IO (Maybe a)",
          "source": "src/Network-Mom-Patterns-Streams.html#receive",
          "type": "function"
        },
        "index": {
          "description": "Receive stream through the controller that was sink to the target internal",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "receive",
          "normalized": "Controller-\u003eTimeout-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)",
          "package": "patterns",
          "signature": "Controller-\u003eTimeout-\u003eSinkR(Maybe a)-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:receive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResume streams\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "resume",
          "package": "patterns",
          "signature": "Controller -\u003e IO ()",
          "source": "src/Network-Mom-Patterns-Streams.html#resume",
          "type": "function"
        },
        "index": {
          "description": "Resume streams",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "resume",
          "normalized": "Controller-\u003eIO()",
          "package": "patterns",
          "signature": "Controller-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:resume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceiver Sink: \n   Internally a zeromq socket is waiting for input;\n   when input is available, it is send to the sink.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 'Z.Socket a' - The source socket\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e - receiver timeout\n     \u003cem\u003e\u003c 0\u003c/em\u003e - listens eternally,\n     \u003cem\u003e0\u003c/em\u003e - returns immediately,\n     \u003cem\u003e\u003e 0\u003c/em\u003e - timeout in microseconds;\n     when the timeout expires, the stream terminates\n      and the return value is Nothing.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "runReceiver",
          "package": "patterns",
          "signature": "Socket a -\u003e Timeout -\u003e SinkR (Maybe o) -\u003e IO (Maybe o)",
          "source": "src/Network-Mom-Patterns-Streams.html#runReceiver",
          "type": "function"
        },
        "index": {
          "description": "Receiver Sink Internally zeromq socket is waiting for input when input is available it is send to the sink Z.Socket The source socket Timeout receiver timeout listens eternally returns immediately timeout in microseconds when the timeout expires the stream terminates and the return value is Nothing",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "runReceiver",
          "normalized": "Socket a-\u003eTimeout-\u003eSinkR(Maybe b)-\u003eIO(Maybe b)",
          "package": "patterns",
          "partial": "Receiver",
          "signature": "Socket a-\u003eTimeout-\u003eSinkR(Maybe o)-\u003eIO(Maybe o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:runReceiver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSender Source:\n   The \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e generates a stream,\n   which is relayed to the \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "runSender",
          "package": "patterns",
          "signature": "Socket a -\u003e Source -\u003e IO ()",
          "source": "src/Network-Mom-Patterns-Streams.html#runSender",
          "type": "function"
        },
        "index": {
          "description": "Sender Source The Source generates stream which is relayed to the Socket",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "runSender",
          "normalized": "Socket a-\u003eSource-\u003eIO()",
          "package": "patterns",
          "partial": "Sender",
          "signature": "Socket a-\u003eSource-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:runSender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a stream through the controller\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "send",
          "package": "patterns",
          "signature": "Controller -\u003e [Identifier] -\u003e Source -\u003e IO ()",
          "source": "src/Network-Mom-Patterns-Streams.html#send",
          "type": "function"
        },
        "index": {
          "description": "Send stream through the controller",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "send",
          "normalized": "Controller-\u003e[Identifier]-\u003eSource-\u003eIO()",
          "package": "patterns",
          "signature": "Controller-\u003e[Identifier]-\u003eSource-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop streams\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "stop",
          "package": "patterns",
          "signature": "Controller -\u003e IO ()",
          "source": "src/Network-Mom-Patterns-Streams.html#stop",
          "type": "function"
        },
        "index": {
          "description": "Stop streams",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "stop",
          "normalized": "Controller-\u003eIO()",
          "package": "patterns",
          "signature": "Controller-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the \u003ccode\u003eByteString\u003c/code\u003e segments to the outgoing streams\n   identified by [\u003ccode\u003e\u003ca\u003eIdentifier\u003c/a\u003e\u003c/code\u003e].\n   The stream is terminated.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "stream",
          "package": "patterns",
          "signature": "Streamer -\u003e [Identifier] -\u003e [ByteString] -\u003e Sink",
          "source": "src/Network-Mom-Patterns-Streams.html#stream",
          "type": "function"
        },
        "index": {
          "description": "Send the ByteString segments to the outgoing streams identified by Identifier The stream is terminated",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "stream",
          "normalized": "Streamer-\u003e[Identifier]-\u003e[ByteString]-\u003eSink",
          "package": "patterns",
          "signature": "Streamer-\u003e[Identifier]-\u003e[ByteString]-\u003eSink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts polling on a set of streams.\n   The actual polling will be run in another thread.\n   The current thread continues with the action passed in.\n   When this action terminates, the streamer stops polling.\n\u003c/p\u003e\u003cp\u003eParameters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e - The \u003cem\u003eZMQ\u003c/em\u003e context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eService\u003c/a\u003e\u003c/code\u003e - The service name \n                 indicated for instance in error messages.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e - The polling timeout:\n     \u003cem\u003e\u003c 0\u003c/em\u003e - listens eternally,\n     \u003cem\u003e0\u003c/em\u003e - returns immediately,\n     \u003cem\u003e\u003e 0\u003c/em\u003e - timeout in microseconds;\n     when the timeout expires, the \u003ccode\u003e\u003ca\u003eStreamAction\u003c/a\u003e\u003c/code\u003e is invoked.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ePollEntry\u003c/a\u003e\u003c/code\u003e - List of \u003ccode\u003e\u003ca\u003ePollEntry\u003c/a\u003e\u003c/code\u003e;\n                   the streamer will poll over \n                   all list members.\n                   When input is available,\n                   it is directed to the \u003ccode\u003e\u003ca\u003eStreamSink\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eStreamAction\u003c/a\u003e\u003c/code\u003e - Invoked when timeout expires.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eOnError_\u003c/a\u003e\u003c/code\u003e - Error handler\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eStreamSink\u003c/a\u003e\u003c/code\u003e - The sink, to which the stream is sent.\n                    Note that the sink must terminate \n                    the outgoing stream \n                    (using one of the terminating sinks\n                     described below).\n                    Not terminating the stream properly\n                    will result in a zeromq socket error.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e a - The action to invoke,\n                   when the streamer has been started;\n                   The \u003ccode\u003e\u003ca\u003eControl\u003c/a\u003e\u003c/code\u003e is used to control the device.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Network.Mom.Patterns.Streams",
          "name": "withStreams",
          "package": "patterns",
          "signature": "Context -\u003e Service -\u003e Timeout -\u003e [PollEntry] -\u003e StreamAction -\u003e OnError_ -\u003e StreamSink -\u003e Control a -\u003e IO a",
          "source": "src/Network-Mom-Patterns-Streams.html#withStreams",
          "type": "function"
        },
        "index": {
          "description": "Starts polling on set of streams The actual polling will be run in another thread The current thread continues with the action passed in When this action terminates the streamer stops polling Parameters Context The ZMQ context Service The service name indicated for instance in error messages Timeout The polling timeout listens eternally returns immediately timeout in microseconds when the timeout expires the StreamAction is invoked PollEntry List of PollEntry the streamer will poll over all list members When input is available it is directed to the StreamSink StreamAction Invoked when timeout expires OnError Error handler StreamSink The sink to which the stream is sent Note that the sink must terminate the outgoing stream using one of the terminating sinks described below Not terminating the stream properly will result in zeromq socket error Control The action to invoke when the streamer has been started The Control is used to control the device",
          "hierarchy": "Network Mom Patterns Streams",
          "module": "Network.Mom.Patterns.Streams",
          "name": "withStreams",
          "normalized": "Context-\u003eService-\u003eTimeout-\u003e[PollEntry]-\u003eStreamAction-\u003eOnError_-\u003eStreamSink-\u003eControl a-\u003eIO a",
          "package": "patterns",
          "partial": "Streams",
          "signature": "Context-\u003eService-\u003eTimeout-\u003e[PollEntry]-\u003eStreamAction-\u003eOnError_-\u003eStreamSink-\u003eControl a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Streams.html#v:withStreams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFundamental streaming types \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Types",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Fundamental streaming types",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Types",
          "package": "patterns",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage body,\n   needed for complex patterns (\u003cem\u003ee.g.\u003c/em\u003e broker)\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Body",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#Body",
          "type": "type"
        },
        "index": {
          "description": "Message body needed for complex patterns e.g broker",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Body",
          "package": "patterns",
          "partial": "Body",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA conduit that links source and sink\n   applying some transformation to the stream.\n   Input is always \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n   output and return type may vary.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Conduit",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#Conduit",
          "type": "type"
        },
        "index": {
          "description": "conduit that links source and sink applying some transformation to the stream Input is always ByteString output and return type may vary",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Conduit",
          "package": "patterns",
          "partial": "Conduit",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Conduit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplified Conduit where output\n   is always \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e \n   and no final value is returned.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Conduit_",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#Conduit_",
          "type": "type"
        },
        "index": {
          "description": "Simplified Conduit where output is always ByteString and no final value is returned",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Conduit_",
          "package": "patterns",
          "partial": "Conduit",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Conduit_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReexport from zeromq\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Context",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#Context",
          "type": "type"
        },
        "index": {
          "description": "Reexport from zeromq",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Context",
          "package": "patterns",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates criticality of the error event\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Criticality",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#Criticality",
          "type": "data"
        },
        "index": {
          "description": "Indicates criticality of the error event",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Criticality",
          "package": "patterns",
          "partial": "Criticality",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Criticality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString identifying a stream in the streams device\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Identifier",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#Identifier",
          "type": "type"
        },
        "index": {
          "description": "String identifying stream in the streams device",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Identifier",
          "package": "patterns",
          "partial": "Identifier",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity of a communication peer,\n   needed for complex patterns (\u003cem\u003ee.g.\u003c/em\u003e broker)\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Identity",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#Identity",
          "type": "type"
        },
        "index": {
          "description": "Identity of communication peer needed for complex patterns e.g broker",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Identity",
          "package": "patterns",
          "partial": "Identity",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003ezeromq\u003c/em\u003e \u003ccode\u003eAccessPoint\u003c/code\u003e\n   can be bound or connected to its address.\n   Only one peer can bind the address,\n   all other parties have to connect.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "LinkType",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#LinkType",
          "type": "data"
        },
        "index": {
          "description": "zeromq AccessPoint can be bound or connected to its address Only one peer can bind the address all other parties have to connect",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "LinkType",
          "package": "patterns",
          "partial": "Link Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:LinkType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMilliseconds \n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Msec",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#Msec",
          "type": "type"
        },
        "index": {
          "description": "Milliseconds",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Msec",
          "package": "patterns",
          "partial": "Msec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Msec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError handler for all services \n   that are implemented as background services,\n   \u003cem\u003ee.g.\u003c/em\u003e servers and brokers.\n   The handler receives the \u003ccode\u003e\u003ca\u003eCriticality\u003c/a\u003e\u003c/code\u003e of the error event,\n   the exception and an additional descriptive string.\n\u003c/p\u003e\u003cp\u003eA good policy is\n   to terminate or restart the service\n   when a \u003ccode\u003e\u003ca\u003eFatal\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eCritical\u003c/a\u003e\u003c/code\u003e error occurs\n   and to continue, if possible,\n   on a plain \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e.\n   The error handler may perform additional, user-defined actions, \n   such as logging the incident or \n   sending an SMS.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "OnError_",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#OnError_",
          "type": "type"
        },
        "index": {
          "description": "Error handler for all services that are implemented as background services e.g servers and brokers The handler receives the Criticality of the error event the exception and an additional descriptive string good policy is to terminate or restart the service when Fatal or Critical error occurs and to continue if possible on plain Error The error handler may perform additional user-defined actions such as logging the incident or sending an SMS",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "OnError_",
          "package": "patterns",
          "partial": "On Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:OnError_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe IO Resource transformer.\n   See the conduit package for details\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "RIO",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#RIO",
          "type": "type"
        },
        "index": {
          "description": "The IO Resource transformer See the conduit package for details",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "RIO",
          "package": "patterns",
          "partial": "RIO",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:RIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString identifying a service provided, \u003cem\u003ee.g.\u003c/em\u003e by a \u003cem\u003eserver\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Service",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#Service",
          "type": "type"
        },
        "index": {
          "description": "String identifying service provided e.g by server",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Service",
          "package": "patterns",
          "partial": "Service",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Service"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream sink without return type\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Sink",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#Sink",
          "type": "type"
        },
        "index": {
          "description": "stream sink without return type",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Sink",
          "package": "patterns",
          "partial": "Sink",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Sink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream sink wit return type\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "SinkR",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#SinkR",
          "type": "type"
        },
        "index": {
          "description": "stream sink wit return type",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "SinkR",
          "package": "patterns",
          "partial": "Sink",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:SinkR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReexport from zeromq\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Size",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#Size",
          "type": "type"
        },
        "index": {
          "description": "Reexport from zeromq",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Size",
          "package": "patterns",
          "partial": "Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream source\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Source",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#Source",
          "type": "type"
        },
        "index": {
          "description": "stream source",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Source",
          "package": "patterns",
          "partial": "Source",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream Exception\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "StreamException",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#StreamException",
          "type": "data"
        },
        "index": {
          "description": "Stream Exception",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "StreamException",
          "package": "patterns",
          "partial": "Stream Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:StreamException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReexport from zeromq (timeout in microseconds)\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Timeout",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns-Types.html#Timeout",
          "type": "type"
        },
        "index": {
          "description": "Reexport from zeromq timeout in microseconds",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Timeout",
          "package": "patterns",
          "partial": "Timeout",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#t:Timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication-defined error\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "AppExc",
          "package": "patterns",
          "signature": "AppExc String",
          "source": "src/Network-Mom-Patterns-Types.html#StreamException",
          "type": "function"
        },
        "index": {
          "description": "Application-defined error",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "AppExc",
          "package": "patterns",
          "partial": "App Exc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:AppExc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe event has impact on the process,\n   leaving it in an unkown state.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Critical",
          "package": "patterns",
          "signature": "Critical",
          "source": "src/Network-Mom-Patterns-Types.html#Criticality",
          "type": "function"
        },
        "index": {
          "description": "The event has impact on the process leaving it in an unkown state",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Critical",
          "package": "patterns",
          "partial": "Critical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:Critical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current operation \n   (\u003cem\u003ee.g.\u003c/em\u003e processing a request)\n   has not terminated properly,\n   but the service is able to continue;\n   the error may have been caused by a faulty\n   request or other temporal conditions.\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Error",
          "package": "patterns",
          "signature": "Error",
          "source": "src/Network-Mom-Patterns-Types.html#Criticality",
          "type": "function"
        },
        "index": {
          "description": "The current operation e.g processing request has not terminated properly but the service is able to continue the error may have been caused by faulty request or other temporal conditions",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Error",
          "package": "patterns",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe service cannot recover and will terminate\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Fatal",
          "package": "patterns",
          "signature": "Fatal",
          "source": "src/Network-Mom-Patterns-Types.html#Criticality",
          "type": "function"
        },
        "index": {
          "description": "The service cannot recover and will terminate",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Fatal",
          "package": "patterns",
          "partial": "Fatal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:Fatal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIO error\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "IOExc",
          "package": "patterns",
          "signature": "IOExc String",
          "source": "src/Network-Mom-Patterns-Types.html#StreamException",
          "type": "function"
        },
        "index": {
          "description": "IO error",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "IOExc",
          "package": "patterns",
          "partial": "IOExc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:IOExc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal error, indicating a code error in library\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "Ouch",
          "package": "patterns",
          "signature": "Ouch String",
          "source": "src/Network-Mom-Patterns-Types.html#StreamException",
          "type": "function"
        },
        "index": {
          "description": "Internal error indicating code error in library",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "Ouch",
          "package": "patterns",
          "partial": "Ouch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:Ouch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProtocol error\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "ProtocolExc",
          "package": "patterns",
          "signature": "ProtocolExc String",
          "source": "src/Network-Mom-Patterns-Types.html#StreamException",
          "type": "function"
        },
        "index": {
          "description": "Protocol error",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "ProtocolExc",
          "package": "patterns",
          "partial": "Protocol Exc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:ProtocolExc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elow-level error\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "SocketExc",
          "package": "patterns",
          "signature": "SocketExc String",
          "source": "src/Network-Mom-Patterns-Types.html#StreamException",
          "type": "function"
        },
        "index": {
          "description": "low-level error",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "SocketExc",
          "package": "patterns",
          "partial": "Socket Exc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:SocketExc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass the stream through without applying\n   any transformation to it\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "passThrough",
          "package": "patterns",
          "signature": "Conduit ByteString ()",
          "source": "src/Network-Mom-Patterns-Types.html#passThrough",
          "type": "function"
        },
        "index": {
          "description": "Pass the stream through without applying any transformation to it",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "passThrough",
          "normalized": "Conduit ByteString()",
          "package": "patterns",
          "partial": "Through",
          "signature": "Conduit ByteString()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:passThrough"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStreaming the elements of a list\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "streamList",
          "package": "patterns",
          "signature": "[ByteString] -\u003e Producer RIO ByteString",
          "source": "src/Network-Mom-Patterns-Types.html#streamList",
          "type": "function"
        },
        "index": {
          "description": "Streaming the elements of list",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "streamList",
          "normalized": "[ByteString]-\u003eProducer RIO ByteString",
          "package": "patterns",
          "partial": "List",
          "signature": "[ByteString]-\u003eProducer RIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:streamList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReexport from zeromq\n\u003c/p\u003e",
          "module": "Network.Mom.Patterns.Types",
          "name": "withContext",
          "package": "patterns",
          "signature": "Size -\u003e (Context -\u003e IO a) -\u003e IO a",
          "source": "src/Network-Mom-Patterns-Types.html#withContext",
          "type": "function"
        },
        "index": {
          "description": "Reexport from zeromq",
          "hierarchy": "Network Mom Patterns Types",
          "module": "Network.Mom.Patterns.Types",
          "name": "withContext",
          "normalized": "Size-\u003e(Context-\u003eIO a)-\u003eIO a",
          "package": "patterns",
          "partial": "Context",
          "signature": "Size-\u003e(Context-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns-Types.html#v:withContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn distributed message-oriented applications,\n the same communication patterns show up\n over and over again.\n This package implements some of these patterns\n based on the \u003cem\u003ezeromq\u003c/em\u003e library.\n \u003cem\u003ePatterns\u003c/em\u003e uses the \u003cem\u003ezeromq-haskell\u003c/em\u003e package,\n but goes beyond in several aspects:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It uses \u003cem\u003econduits\u003c/em\u003e to stream incoming and\n   outgoing message segments;\n\u003c/li\u003e\u003cli\u003e It defines libraries of basic patterns\n   to enforce coherent use of \u003cem\u003ezeromq\u003c/em\u003e sockets;\n\u003c/li\u003e\u003cli\u003e It implements modules for advanced patterns;\n   currently the majordomo pattern (broker) is implemented.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMore information on \u003cem\u003ezeromq\u003c/em\u003e can be found at\n \u003ca\u003ehttp://www.zeromq.org\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Mom.Patterns",
          "name": "Patterns",
          "package": "patterns",
          "source": "src/Network-Mom-Patterns.html",
          "type": "module"
        },
        "index": {
          "description": "In distributed message-oriented applications the same communication patterns show up over and over again This package implements some of these patterns based on the zeromq library Patterns uses the zeromq-haskell package but goes beyond in several aspects It uses conduits to stream incoming and outgoing message segments It defines libraries of basic patterns to enforce coherent use of zeromq sockets It implements modules for advanced patterns currently the majordomo pattern broker is implemented More information on zeromq can be found at http www.zeromq.org",
          "hierarchy": "Network Mom Patterns",
          "module": "Network.Mom.Patterns",
          "name": "Patterns",
          "package": "patterns",
          "partial": "Patterns",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/patterns/docs/Network-Mom-Patterns.html#"
      }
    }
  ]
]