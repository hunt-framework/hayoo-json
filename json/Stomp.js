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
        "word": "Stomp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA client library for Stomp serevers implementing stomp 1.1 specification. See http:\u003cem/\u003estomp.github.com/stomp-specification-1.1.html\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eExample\u003c/em\u003e:\n\u003c/p\u003e\u003cpre\u003eimport Network.Stomp\nimport qualified Data.ByteString.Lazy.Char8 as B\n\nmain = do\n  -- connect to a stomp broker\n  con \u003c- connect \"stomp://guest:guest@127.0.0.1:61613\" vers headers\n  putStrLn $ \"Accepted versions: \" ++ show (versions con)\n  \n  -- start consumer and subscribe to the queue\n  startConsumer con callback\n  subscribe con \"/queue/test\" \"0\" []\n\n  -- send the messages to the queue\n  send con \"/queue/test\" [] (B.pack \"message1\")\n  send con \"/queue/test\" [] (B.pack \"message2\")\n\n  -- wait\n  getLine\n  \n  -- unsubscribe and disconnect\n  unsubscribe con \"0\" []\n  disconnect con []\n  where \n    vers = [(1,0),(1,1)]\n    headers = []\n\ncallback :: Frame -\u003e IO ()\ncallback (Frame (SC MESSAGE) hs body) = do\n      putStrLn $ \"received message: \" ++ (B.unpack body) \n      putStrLn $ \"headers: \" ++ show hs\ncallback f = putStrLn $ \"received frame: \" ++ show f\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.Stomp",
          "name": "Stomp",
          "package": "Stomp",
          "source": "src/Network-Stomp.html",
          "type": "module"
        },
        "index": {
          "description": "client library for Stomp serevers implementing stomp specification See http stomp.github.com stomp-specification-1.1.html Example import Network.Stomp import qualified Data.ByteString.Lazy.Char8 as main do connect to stomp broker con connect stomp guest guest@127.0.0.1 vers headers putStrLn Accepted versions show versions con start consumer and subscribe to the queue startConsumer con callback subscribe con queue test send the messages to the queue send con queue test B.pack message1 send con queue test B.pack message2 wait getLine unsubscribe and disconnect unsubscribe con disconnect con where vers headers callback Frame IO callback Frame SC MESSAGE hs body do putStrLn received message B.unpack body putStrLn headers show hs callback putStrLn received frame show",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "Stomp",
          "package": "Stomp",
          "partial": "Stomp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient frame commands\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "ClientCommand",
          "package": "Stomp",
          "source": "src/Network-Stomp.html#ClientCommand",
          "type": "data"
        },
        "index": {
          "description": "Client frame commands",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "ClientCommand",
          "package": "Stomp",
          "partial": "Client Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:ClientCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStomp frame commands\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "Command",
          "package": "Stomp",
          "source": "src/Network-Stomp.html#Command",
          "type": "data"
        },
        "index": {
          "description": "Stomp frame commands",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "Command",
          "package": "Stomp",
          "partial": "Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record used to communicate with Stomp brokers\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "Connection",
          "package": "Stomp",
          "source": "src/Network-Stomp.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "record used to communicate with Stomp brokers",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "Connection",
          "package": "Stomp",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "Destination",
          "package": "Stomp",
          "source": "src/Network-Stomp.html#Destination",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "Destination",
          "package": "Stomp",
          "partial": "Destination",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:Destination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStomp frame record\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "Frame",
          "package": "Stomp",
          "source": "src/Network-Stomp.html#Frame",
          "type": "data"
        },
        "index": {
          "description": "Stomp frame record",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "Frame",
          "package": "Stomp",
          "partial": "Frame",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "Host",
          "package": "Stomp",
          "source": "src/Network-Stomp.html#Host",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "Host",
          "package": "Stomp",
          "partial": "Host",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "MessageId",
          "package": "Stomp",
          "source": "src/Network-Stomp.html#MessageId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "MessageId",
          "package": "Stomp",
          "partial": "Message Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:MessageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBroker frame commands\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "ServerCommand",
          "package": "Stomp",
          "source": "src/Network-Stomp.html#ServerCommand",
          "type": "data"
        },
        "index": {
          "description": "Broker frame commands",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "ServerCommand",
          "package": "Stomp",
          "partial": "Server Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:ServerCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "StompException",
          "package": "Stomp",
          "source": "src/Network-Stomp.html#StompException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "StompException",
          "package": "Stomp",
          "partial": "Stomp Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:StompException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "StompUri",
          "package": "Stomp",
          "source": "src/Network-Stomp.html#StompUri",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "StompUri",
          "package": "Stomp",
          "partial": "Stomp Uri",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:StompUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "Subscription",
          "package": "Stomp",
          "source": "src/Network-Stomp.html#Subscription",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "Subscription",
          "package": "Stomp",
          "partial": "Subscription",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:Subscription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "Transaction",
          "package": "Stomp",
          "source": "src/Network-Stomp.html#Transaction",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "Transaction",
          "package": "Stomp",
          "partial": "Transaction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:Transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "Version",
          "package": "Stomp",
          "source": "src/Network-Stomp.html#Version",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "Version",
          "package": "Stomp",
          "partial": "Version",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "ABORT",
          "package": "Stomp",
          "signature": "ABORT",
          "source": "src/Network-Stomp.html#ClientCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "ABORT",
          "package": "Stomp",
          "partial": "ABORT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:ABORT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "ACK",
          "package": "Stomp",
          "signature": "ACK",
          "source": "src/Network-Stomp.html#ClientCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "ACK",
          "package": "Stomp",
          "partial": "ACK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:ACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "BEGIN",
          "package": "Stomp",
          "signature": "BEGIN",
          "source": "src/Network-Stomp.html#ClientCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "BEGIN",
          "package": "Stomp",
          "partial": "BEGIN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:BEGIN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "BrokerError",
          "package": "Stomp",
          "signature": "BrokerError String",
          "source": "src/Network-Stomp.html#StompException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "BrokerError",
          "package": "Stomp",
          "partial": "Broker Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:BrokerError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "CC",
          "package": "Stomp",
          "signature": "CC ClientCommand",
          "source": "src/Network-Stomp.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "CC",
          "package": "Stomp",
          "partial": "CC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:CC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "COMMIT",
          "package": "Stomp",
          "signature": "COMMIT",
          "source": "src/Network-Stomp.html#ClientCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "COMMIT",
          "package": "Stomp",
          "partial": "COMMIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:COMMIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "CONNECT",
          "package": "Stomp",
          "signature": "CONNECT",
          "source": "src/Network-Stomp.html#ClientCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "CONNECT",
          "package": "Stomp",
          "partial": "CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "CONNECTED",
          "package": "Stomp",
          "signature": "CONNECTED",
          "source": "src/Network-Stomp.html#ServerCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "CONNECTED",
          "package": "Stomp",
          "partial": "CONNECTED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:CONNECTED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "ConnectionError",
          "package": "Stomp",
          "signature": "ConnectionError String",
          "source": "src/Network-Stomp.html#StompException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "ConnectionError",
          "package": "Stomp",
          "partial": "Connection Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:ConnectionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "DISCONNECT",
          "package": "Stomp",
          "signature": "DISCONNECT",
          "source": "src/Network-Stomp.html#ClientCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "DISCONNECT",
          "package": "Stomp",
          "partial": "DISCONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:DISCONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "ERROR",
          "package": "Stomp",
          "signature": "ERROR",
          "source": "src/Network-Stomp.html#ServerCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "ERROR",
          "package": "Stomp",
          "partial": "ERROR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:ERROR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "Frame",
          "package": "Stomp",
          "signature": "Frame",
          "source": "src/Network-Stomp.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "Frame",
          "package": "Stomp",
          "partial": "Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "InvalidFrame",
          "package": "Stomp",
          "signature": "InvalidFrame String",
          "source": "src/Network-Stomp.html#StompException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "InvalidFrame",
          "package": "Stomp",
          "partial": "Invalid Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:InvalidFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "InvalidUri",
          "package": "Stomp",
          "signature": "InvalidUri String",
          "source": "src/Network-Stomp.html#StompException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "InvalidUri",
          "package": "Stomp",
          "partial": "Invalid Uri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:InvalidUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "MESSAGE",
          "package": "Stomp",
          "signature": "MESSAGE",
          "source": "src/Network-Stomp.html#ServerCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "MESSAGE",
          "package": "Stomp",
          "partial": "MESSAGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:MESSAGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "NACK",
          "package": "Stomp",
          "signature": "NACK",
          "source": "src/Network-Stomp.html#ClientCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "NACK",
          "package": "Stomp",
          "partial": "NACK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:NACK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "RECEIPT",
          "package": "Stomp",
          "signature": "RECEIPT",
          "source": "src/Network-Stomp.html#ServerCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "RECEIPT",
          "package": "Stomp",
          "partial": "RECEIPT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:RECEIPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "SC",
          "package": "Stomp",
          "signature": "SC ServerCommand",
          "source": "src/Network-Stomp.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "SC",
          "package": "Stomp",
          "partial": "SC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:SC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "SEND",
          "package": "Stomp",
          "signature": "SEND",
          "source": "src/Network-Stomp.html#ClientCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "SEND",
          "package": "Stomp",
          "partial": "SEND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:SEND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "STOMP",
          "package": "Stomp",
          "signature": "STOMP",
          "source": "src/Network-Stomp.html#ClientCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "STOMP",
          "package": "Stomp",
          "partial": "STOMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:STOMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "SUBSCRIBE",
          "package": "Stomp",
          "signature": "SUBSCRIBE",
          "source": "src/Network-Stomp.html#ClientCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "SUBSCRIBE",
          "package": "Stomp",
          "partial": "SUBSCRIBE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:SUBSCRIBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "StompIOError",
          "package": "Stomp",
          "signature": "StompIOError IOException",
          "source": "src/Network-Stomp.html#StompException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "StompIOError",
          "package": "Stomp",
          "partial": "Stomp IOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:StompIOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "UNSUBSCRIBE",
          "package": "Stomp",
          "signature": "UNSUBSCRIBE",
          "source": "src/Network-Stomp.html#ClientCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "UNSUBSCRIBE",
          "package": "Stomp",
          "partial": "UNSUBSCRIBE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:UNSUBSCRIBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erollback a transaction\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "abort",
          "package": "Stomp",
          "signature": "Connection -\u003e Transaction -\u003e [Header] -\u003e IO ()",
          "source": "src/Network-Stomp.html#abort",
          "type": "function"
        },
        "index": {
          "description": "rollback transaction",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "abort",
          "normalized": "Connection-\u003eTransaction-\u003e[Header]-\u003eIO()",
          "package": "Stomp",
          "signature": "Connection-\u003eTransaction-\u003e[Header]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eacknowledge the consumption of a message from a subscription\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "ack",
          "package": "Stomp",
          "signature": "Connection -\u003e Subscription -\u003e MessageId -\u003e [Header] -\u003e IO ()",
          "source": "src/Network-Stomp.html#ack",
          "type": "function"
        },
        "index": {
          "description": "acknowledge the consumption of message from subscription",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "ack",
          "normalized": "Connection-\u003eSubscription-\u003eMessageId-\u003e[Header]-\u003eIO()",
          "package": "Stomp",
          "signature": "Connection-\u003eSubscription-\u003eMessageId-\u003e[Header]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:ack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esend a single newline byte to the server\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "beat",
          "package": "Stomp",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Network-Stomp.html#beat",
          "type": "function"
        },
        "index": {
          "description": "send single newline byte to the server",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "beat",
          "normalized": "Connection-\u003eIO()",
          "package": "Stomp",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:beat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart a transaction\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "begin",
          "package": "Stomp",
          "signature": "Connection -\u003e Transaction -\u003e [Header] -\u003e IO ()",
          "source": "src/Network-Stomp.html#begin",
          "type": "function"
        },
        "index": {
          "description": "start transaction",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "begin",
          "normalized": "Connection-\u003eTransaction-\u003e[Header]-\u003eIO()",
          "package": "Stomp",
          "signature": "Connection-\u003eTransaction-\u003e[Header]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "body",
          "package": "Stomp",
          "signature": "ByteString",
          "source": "src/Network-Stomp.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "body",
          "package": "Stomp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "command",
          "package": "Stomp",
          "signature": "Command",
          "source": "src/Network-Stomp.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "command",
          "package": "Stomp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecommit a transaction\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "commit",
          "package": "Stomp",
          "signature": "Connection -\u003e Transaction -\u003e [Header] -\u003e IO ()",
          "source": "src/Network-Stomp.html#commit",
          "type": "function"
        },
        "index": {
          "description": "commit transaction",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "commit",
          "normalized": "Connection-\u003eTransaction-\u003e[Header]-\u003eIO()",
          "package": "Stomp",
          "signature": "Connection-\u003eTransaction-\u003e[Header]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:commit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econnect to the stomp (1.0, 1.1) broker using uri   \n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "connect",
          "package": "Stomp",
          "signature": "StompUri -\u003e [Version] -\u003e [Header] -\u003e IO Connection",
          "source": "src/Network-Stomp.html#connect",
          "type": "function"
        },
        "index": {
          "description": "connect to the stomp broker using uri",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "connect",
          "normalized": "StompUri-\u003e[Version]-\u003e[Header]-\u003eIO Connection",
          "package": "Stomp",
          "signature": "StompUri-\u003e[Version]-\u003e[Header]-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econnect to the stomp (1.0, 1.1) broker using hostname and port\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "connect'",
          "package": "Stomp",
          "signature": "Host -\u003e PortNumber -\u003e [Version] -\u003e [Header] -\u003e IO Connection",
          "source": "src/Network-Stomp.html#connect%27",
          "type": "function"
        },
        "index": {
          "description": "connect to the stomp broker using hostname and port",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "connect'",
          "normalized": "Host-\u003ePortNumber-\u003e[Version]-\u003e[Header]-\u003eIO Connection",
          "package": "Stomp",
          "signature": "Host-\u003ePortNumber-\u003e[Version]-\u003e[Header]-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:connect-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecloses stomp connection\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "disconnect",
          "package": "Stomp",
          "signature": "Connection -\u003e [Header] -\u003e IO ()",
          "source": "src/Network-Stomp.html#disconnect",
          "type": "function"
        },
        "index": {
          "description": "closes stomp connection",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "disconnect",
          "normalized": "Connection-\u003e[Header]-\u003eIO()",
          "package": "Stomp",
          "signature": "Connection-\u003e[Header]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Stomp",
          "name": "headers",
          "package": "Stomp",
          "signature": "[Header]",
          "source": "src/Network-Stomp.html#Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "headers",
          "normalized": "[Header]",
          "package": "Stomp",
          "signature": "[Header]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elast frame received time\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "lastRecv",
          "package": "Stomp",
          "signature": "Connection -\u003e MVar UTCTime",
          "source": "src/Network-Stomp.html#lastRecv",
          "type": "function"
        },
        "index": {
          "description": "last frame received time",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "lastRecv",
          "normalized": "Connection-\u003eMVar UTCTime",
          "package": "Stomp",
          "partial": "Recv",
          "signature": "Connection-\u003eMVar UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:lastRecv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elast frame sent time \n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "lastSend",
          "package": "Stomp",
          "signature": "Connection -\u003e MVar UTCTime",
          "source": "src/Network-Stomp.html#lastSend",
          "type": "function"
        },
        "index": {
          "description": "last frame sent time",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "lastSend",
          "normalized": "Connection-\u003eMVar UTCTime",
          "package": "Stomp",
          "partial": "Send",
          "signature": "Connection-\u003eMVar UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:lastSend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eacknowledge the rejection of a message from a subscription\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "nack",
          "package": "Stomp",
          "signature": "Connection -\u003e Subscription -\u003e MessageId -\u003e [Header] -\u003e IO ()",
          "source": "src/Network-Stomp.html#nack",
          "type": "function"
        },
        "index": {
          "description": "acknowledge the rejection of message from subscription",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "nack",
          "normalized": "Connection-\u003eSubscription-\u003eMessageId-\u003e[Header]-\u003eIO()",
          "package": "Stomp",
          "signature": "Connection-\u003eSubscription-\u003eMessageId-\u003e[Header]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:nack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereceives incoming frame\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "receiveFrame",
          "package": "Stomp",
          "signature": "Connection -\u003e IO Frame",
          "source": "src/Network-Stomp.html#receiveFrame",
          "type": "function"
        },
        "index": {
          "description": "receives incoming frame",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "receiveFrame",
          "normalized": "Connection-\u003eIO Frame",
          "package": "Stomp",
          "partial": "Frame",
          "signature": "Connection-\u003eIO Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:receiveFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereceive heaertbeat timeout\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "recvTimeout",
          "package": "Stomp",
          "signature": "Connection -\u003e Int",
          "source": "src/Network-Stomp.html#recvTimeout",
          "type": "function"
        },
        "index": {
          "description": "receive heaertbeat timeout",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "recvTimeout",
          "normalized": "Connection-\u003eInt",
          "package": "Stomp",
          "partial": "Timeout",
          "signature": "Connection-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:recvTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esend message to the destination.\n | The header 'content-length' is automatically set by this module. \n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "send",
          "package": "Stomp",
          "signature": "Connection -\u003e Destination -\u003e [Header] -\u003e ByteString -\u003e IO ()",
          "source": "src/Network-Stomp.html#send",
          "type": "function"
        },
        "index": {
          "description": "send message to the destination The header content-length is automatically set by this module",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "send",
          "normalized": "Connection-\u003eDestination-\u003e[Header]-\u003eByteString-\u003eIO()",
          "package": "Stomp",
          "signature": "Connection-\u003eDestination-\u003e[Header]-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esend group of messages to the destination.\n | The header 'content-length' is automatically set by this module. \n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "send'",
          "package": "Stomp",
          "signature": "Connection -\u003e [(Destination, [Header], ByteString)] -\u003e IO ()",
          "source": "src/Network-Stomp.html#send%27",
          "type": "function"
        },
        "index": {
          "description": "send group of messages to the destination The header content-length is automatically set by this module",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "send'",
          "normalized": "Connection-\u003e[(Destination,[Header],ByteString)]-\u003eIO()",
          "package": "Stomp",
          "signature": "Connection-\u003e[(Destination,[Header],ByteString)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:send-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esend heartbeat timeout\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "sendTimeout",
          "package": "Stomp",
          "signature": "Connection -\u003e Int",
          "source": "src/Network-Stomp.html#sendTimeout",
          "type": "function"
        },
        "index": {
          "description": "send heartbeat timeout",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "sendTimeout",
          "normalized": "Connection-\u003eInt",
          "package": "Stomp",
          "partial": "Timeout",
          "signature": "Connection-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:sendTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estomp server info\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "server",
          "package": "Stomp",
          "signature": "Connection -\u003e String",
          "source": "src/Network-Stomp.html#server",
          "type": "function"
        },
        "index": {
          "description": "stomp server info",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "server",
          "normalized": "Connection-\u003eString",
          "package": "Stomp",
          "signature": "Connection-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esession identifier\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "session",
          "package": "Stomp",
          "signature": "Connection -\u003e String",
          "source": "src/Network-Stomp.html#session",
          "type": "function"
        },
        "index": {
          "description": "session identifier",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "session",
          "normalized": "Connection-\u003eString",
          "package": "Stomp",
          "signature": "Connection-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset exception handler callback to process the exception in the consumer/heartbeats threads \n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "setExcpHandler",
          "package": "Stomp",
          "signature": "Connection -\u003e (StompException -\u003e IO ()) -\u003e IO ()",
          "source": "src/Network-Stomp.html#setExcpHandler",
          "type": "function"
        },
        "index": {
          "description": "set exception handler callback to process the exception in the consumer heartbeats threads",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "setExcpHandler",
          "normalized": "Connection-\u003e(StompException-\u003eIO())-\u003eIO()",
          "package": "Stomp",
          "partial": "Excp Handler",
          "signature": "Connection-\u003e(StompException-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:setExcpHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate consume frames thread\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "startConsumer",
          "package": "Stomp",
          "signature": "Connection -\u003e (Frame -\u003e IO ()) -\u003e IO ()",
          "source": "src/Network-Stomp.html#startConsumer",
          "type": "function"
        },
        "index": {
          "description": "create consume frames thread",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "startConsumer",
          "normalized": "Connection-\u003e(Frame-\u003eIO())-\u003eIO()",
          "package": "Stomp",
          "partial": "Consumer",
          "signature": "Connection-\u003e(Frame-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:startConsumer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efork receive heartbeat thread\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "startRecvBeat",
          "package": "Stomp",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Network-Stomp.html#startRecvBeat",
          "type": "function"
        },
        "index": {
          "description": "fork receive heartbeat thread",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "startRecvBeat",
          "normalized": "Connection-\u003eIO()",
          "package": "Stomp",
          "partial": "Recv Beat",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:startRecvBeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efork send heartbeat thread\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "startSendBeat",
          "package": "Stomp",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Network-Stomp.html#startSendBeat",
          "type": "function"
        },
        "index": {
          "description": "fork send heartbeat thread",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "startSendBeat",
          "normalized": "Connection-\u003eIO()",
          "package": "Stomp",
          "partial": "Send Beat",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:startSendBeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econnect to the stomp 1.1 broker using uri\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "stomp",
          "package": "Stomp",
          "signature": "StompUri -\u003e [Header] -\u003e IO Connection",
          "source": "src/Network-Stomp.html#stomp",
          "type": "function"
        },
        "index": {
          "description": "connect to the stomp broker using uri",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "stomp",
          "normalized": "StompUri-\u003e[Header]-\u003eIO Connection",
          "package": "Stomp",
          "signature": "StompUri-\u003e[Header]-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:stomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econnect to the stomp 1.1 broker using hostname and port\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "stomp'",
          "package": "Stomp",
          "signature": "Host -\u003e PortNumber -\u003e [Header] -\u003e IO Connection",
          "source": "src/Network-Stomp.html#stomp%27",
          "type": "function"
        },
        "index": {
          "description": "connect to the stomp broker using hostname and port",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "stomp'",
          "normalized": "Host-\u003ePortNumber-\u003e[Header]-\u003eIO Connection",
          "package": "Stomp",
          "signature": "Host-\u003ePortNumber-\u003e[Header]-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:stomp-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubscribe to the destination to receive stomp frames\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "subscribe",
          "package": "Stomp",
          "signature": "Connection -\u003e Destination -\u003e Subscription -\u003e [Header] -\u003e IO ()",
          "source": "src/Network-Stomp.html#subscribe",
          "type": "function"
        },
        "index": {
          "description": "subscribe to the destination to receive stomp frames",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "subscribe",
          "normalized": "Connection-\u003eDestination-\u003eSubscription-\u003e[Header]-\u003eIO()",
          "package": "Stomp",
          "signature": "Connection-\u003eDestination-\u003eSubscription-\u003e[Header]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:subscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunsubscribe from destination given the subscription id\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "unsubscribe",
          "package": "Stomp",
          "signature": "Connection -\u003e Subscription -\u003e [Header] -\u003e IO ()",
          "source": "src/Network-Stomp.html#unsubscribe",
          "type": "function"
        },
        "index": {
          "description": "unsubscribe from destination given the subscription id",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "unsubscribe",
          "normalized": "Connection-\u003eSubscription-\u003e[Header]-\u003eIO()",
          "package": "Stomp",
          "signature": "Connection-\u003eSubscription-\u003e[Header]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:unsubscribe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eaccepted stomp versions\n\u003c/p\u003e",
          "module": "Network.Stomp",
          "name": "versions",
          "package": "Stomp",
          "signature": "Connection -\u003e [Version]",
          "source": "src/Network-Stomp.html#versions",
          "type": "function"
        },
        "index": {
          "description": "accepted stomp versions",
          "hierarchy": "Network Stomp",
          "module": "Network.Stomp",
          "name": "versions",
          "normalized": "Connection-\u003e[Version]",
          "package": "Stomp",
          "signature": "Connection-\u003e[Version]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:versions"
      }
    }
  ]
]