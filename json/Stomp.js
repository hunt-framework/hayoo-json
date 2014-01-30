[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA client library for Stomp serevers implementing stomp 1.1 specification. See http:\u003cem/\u003estomp.github.com/stomp-specification-1.1.html\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eExample\u003c/em\u003e:\n\u003c/p\u003e\u003cpre\u003eimport Network.Stomp\nimport qualified Data.ByteString.Lazy.Char8 as B\n\nmain = do\n  -- connect to a stomp broker\n  con \u003c- connect \"stomp://guest:guest@127.0.0.1:61613\" vers headers\n  putStrLn $ \"Accepted versions: \" ++ show (versions con)\n  \n  -- start consumer and subscribe to the queue\n  startConsumer con callback\n  subscribe con \"/queue/test\" \"0\" []\n\n  -- send the messages to the queue\n  send con \"/queue/test\" [] (B.pack \"message1\")\n  send con \"/queue/test\" [] (B.pack \"message2\")\n\n  -- wait\n  getLine\n  \n  -- unsubscribe and disconnect\n  unsubscribe con \"0\" []\n  disconnect con []\n  where \n    vers = [(1,0),(1,1)]\n    headers = []\n\ncallback :: Frame -\u003e IO ()\ncallback (Frame (SC MESSAGE) hs body) = do\n      putStrLn $ \"received message: \" ++ (B.unpack body) \n      putStrLn $ \"headers: \" ++ show hs\ncallback f = putStrLn $ \"received frame: \" ++ show f\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "module",
        "fct-source": "src/Network-Stomp.html",
        "fct-type": "module",
        "title": "Stomp"
      },
      "index": {
        "description": "client library for Stomp serevers implementing stomp specification See http stomp.github.com stomp-specification-1.1.html Example import Network.Stomp import qualified Data.ByteString.Lazy.Char8 as main do connect to stomp broker con connect stomp guest guest@127.0.0.1 vers headers putStrLn Accepted versions show versions con start consumer and subscribe to the queue startConsumer con callback subscribe con queue test send the messages to the queue send con queue test B.pack message1 send con queue test B.pack message2 wait getLine unsubscribe and disconnect unsubscribe con disconnect con where vers headers callback Frame IO callback Frame SC MESSAGE hs body do putStrLn received message B.unpack body putStrLn headers show hs callback putStrLn received frame show",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "Stomp",
        "normalized": "",
        "package": "Stomp",
        "partial": "Stomp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:ClientCommand",
      "description": {
        "fct-descr": "\u003cp\u003eClient frame commands\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "data",
        "fct-source": "src/Network-Stomp.html#ClientCommand",
        "fct-type": "data",
        "title": "ClientCommand"
      },
      "index": {
        "description": "Client frame commands",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "ClientCommand",
        "normalized": "",
        "package": "Stomp",
        "partial": "Client Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:Command",
      "description": {
        "fct-descr": "\u003cp\u003eStomp frame commands\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "data",
        "fct-source": "src/Network-Stomp.html#Command",
        "fct-type": "data",
        "title": "Command"
      },
      "index": {
        "description": "Stomp frame commands",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "Command",
        "normalized": "",
        "package": "Stomp",
        "partial": "Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eA record used to communicate with Stomp brokers\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "data",
        "fct-source": "src/Network-Stomp.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "record used to communicate with Stomp brokers",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "Connection",
        "normalized": "",
        "package": "Stomp",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:Destination",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "type",
        "fct-source": "src/Network-Stomp.html#Destination",
        "fct-type": "type",
        "title": "Destination"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "Destination",
        "normalized": "",
        "package": "Stomp",
        "partial": "Destination",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:Frame",
      "description": {
        "fct-descr": "\u003cp\u003eStomp frame record\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "data",
        "fct-source": "src/Network-Stomp.html#Frame",
        "fct-type": "data",
        "title": "Frame"
      },
      "index": {
        "description": "Stomp frame record",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "Frame",
        "normalized": "",
        "package": "Stomp",
        "partial": "Frame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:Host",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "type",
        "fct-source": "src/Network-Stomp.html#Host",
        "fct-type": "type",
        "title": "Host"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "Host",
        "normalized": "",
        "package": "Stomp",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:MessageId",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "type",
        "fct-source": "src/Network-Stomp.html#MessageId",
        "fct-type": "type",
        "title": "MessageId"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "MessageId",
        "normalized": "",
        "package": "Stomp",
        "partial": "Message Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:ServerCommand",
      "description": {
        "fct-descr": "\u003cp\u003eBroker frame commands\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "data",
        "fct-source": "src/Network-Stomp.html#ServerCommand",
        "fct-type": "data",
        "title": "ServerCommand"
      },
      "index": {
        "description": "Broker frame commands",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "ServerCommand",
        "normalized": "",
        "package": "Stomp",
        "partial": "Server Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:StompException",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "data",
        "fct-source": "src/Network-Stomp.html#StompException",
        "fct-type": "data",
        "title": "StompException"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "StompException",
        "normalized": "",
        "package": "Stomp",
        "partial": "Stomp Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:StompUri",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "type",
        "fct-source": "src/Network-Stomp.html#StompUri",
        "fct-type": "type",
        "title": "StompUri"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "StompUri",
        "normalized": "",
        "package": "Stomp",
        "partial": "Stomp Uri",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:Subscription",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "type",
        "fct-source": "src/Network-Stomp.html#Subscription",
        "fct-type": "type",
        "title": "Subscription"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "Subscription",
        "normalized": "",
        "package": "Stomp",
        "partial": "Subscription",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:Transaction",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "type",
        "fct-source": "src/Network-Stomp.html#Transaction",
        "fct-type": "type",
        "title": "Transaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "Transaction",
        "normalized": "",
        "package": "Stomp",
        "partial": "Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#t:Version",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "type",
        "fct-source": "src/Network-Stomp.html#Version",
        "fct-type": "type",
        "title": "Version"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "Version",
        "normalized": "",
        "package": "Stomp",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:ABORT",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "ABORT",
        "fct-source": "src/Network-Stomp.html#ClientCommand",
        "fct-type": "function",
        "title": "ABORT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "ABORT",
        "normalized": "",
        "package": "Stomp",
        "partial": "ABORT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:ACK",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "ACK",
        "fct-source": "src/Network-Stomp.html#ClientCommand",
        "fct-type": "function",
        "title": "ACK"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "ACK",
        "normalized": "",
        "package": "Stomp",
        "partial": "ACK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:BEGIN",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "BEGIN",
        "fct-source": "src/Network-Stomp.html#ClientCommand",
        "fct-type": "function",
        "title": "BEGIN"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "BEGIN",
        "normalized": "",
        "package": "Stomp",
        "partial": "BEGIN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:BrokerError",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "BrokerError String",
        "fct-source": "src/Network-Stomp.html#StompException",
        "fct-type": "function",
        "title": "BrokerError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "BrokerError",
        "normalized": "",
        "package": "Stomp",
        "partial": "Broker Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:CC",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "CC ClientCommand",
        "fct-source": "src/Network-Stomp.html#Command",
        "fct-type": "function",
        "title": "CC"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "CC",
        "normalized": "",
        "package": "Stomp",
        "partial": "CC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:COMMIT",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "COMMIT",
        "fct-source": "src/Network-Stomp.html#ClientCommand",
        "fct-type": "function",
        "title": "COMMIT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "COMMIT",
        "normalized": "",
        "package": "Stomp",
        "partial": "COMMIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:CONNECT",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "CONNECT",
        "fct-source": "src/Network-Stomp.html#ClientCommand",
        "fct-type": "function",
        "title": "CONNECT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "CONNECT",
        "normalized": "",
        "package": "Stomp",
        "partial": "CONNECT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:CONNECTED",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "CONNECTED",
        "fct-source": "src/Network-Stomp.html#ServerCommand",
        "fct-type": "function",
        "title": "CONNECTED"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "CONNECTED",
        "normalized": "",
        "package": "Stomp",
        "partial": "CONNECTED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:ConnectionError",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "ConnectionError String",
        "fct-source": "src/Network-Stomp.html#StompException",
        "fct-type": "function",
        "title": "ConnectionError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "ConnectionError",
        "normalized": "",
        "package": "Stomp",
        "partial": "Connection Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:DISCONNECT",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "DISCONNECT",
        "fct-source": "src/Network-Stomp.html#ClientCommand",
        "fct-type": "function",
        "title": "DISCONNECT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "DISCONNECT",
        "normalized": "",
        "package": "Stomp",
        "partial": "DISCONNECT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:ERROR",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "ERROR",
        "fct-source": "src/Network-Stomp.html#ServerCommand",
        "fct-type": "function",
        "title": "ERROR"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "ERROR",
        "normalized": "",
        "package": "Stomp",
        "partial": "ERROR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:Frame",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Frame",
        "fct-source": "src/Network-Stomp.html#Frame",
        "fct-type": "function",
        "title": "Frame"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "Frame",
        "normalized": "",
        "package": "Stomp",
        "partial": "Frame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:InvalidFrame",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "InvalidFrame String",
        "fct-source": "src/Network-Stomp.html#StompException",
        "fct-type": "function",
        "title": "InvalidFrame"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "InvalidFrame",
        "normalized": "",
        "package": "Stomp",
        "partial": "Invalid Frame",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:InvalidUri",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "InvalidUri String",
        "fct-source": "src/Network-Stomp.html#StompException",
        "fct-type": "function",
        "title": "InvalidUri"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "InvalidUri",
        "normalized": "",
        "package": "Stomp",
        "partial": "Invalid Uri",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:MESSAGE",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "MESSAGE",
        "fct-source": "src/Network-Stomp.html#ServerCommand",
        "fct-type": "function",
        "title": "MESSAGE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "MESSAGE",
        "normalized": "",
        "package": "Stomp",
        "partial": "MESSAGE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:NACK",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "NACK",
        "fct-source": "src/Network-Stomp.html#ClientCommand",
        "fct-type": "function",
        "title": "NACK"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "NACK",
        "normalized": "",
        "package": "Stomp",
        "partial": "NACK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:RECEIPT",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "RECEIPT",
        "fct-source": "src/Network-Stomp.html#ServerCommand",
        "fct-type": "function",
        "title": "RECEIPT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "RECEIPT",
        "normalized": "",
        "package": "Stomp",
        "partial": "RECEIPT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:SC",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "SC ServerCommand",
        "fct-source": "src/Network-Stomp.html#Command",
        "fct-type": "function",
        "title": "SC"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "SC",
        "normalized": "",
        "package": "Stomp",
        "partial": "SC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:SEND",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "SEND",
        "fct-source": "src/Network-Stomp.html#ClientCommand",
        "fct-type": "function",
        "title": "SEND"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "SEND",
        "normalized": "",
        "package": "Stomp",
        "partial": "SEND",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:STOMP",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "STOMP",
        "fct-source": "src/Network-Stomp.html#ClientCommand",
        "fct-type": "function",
        "title": "STOMP"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "STOMP",
        "normalized": "",
        "package": "Stomp",
        "partial": "STOMP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:SUBSCRIBE",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "SUBSCRIBE",
        "fct-source": "src/Network-Stomp.html#ClientCommand",
        "fct-type": "function",
        "title": "SUBSCRIBE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "SUBSCRIBE",
        "normalized": "",
        "package": "Stomp",
        "partial": "SUBSCRIBE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:StompIOError",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "StompIOError IOException",
        "fct-source": "src/Network-Stomp.html#StompException",
        "fct-type": "function",
        "title": "StompIOError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "StompIOError",
        "normalized": "",
        "package": "Stomp",
        "partial": "Stomp IOError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:UNSUBSCRIBE",
      "description": {
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "UNSUBSCRIBE",
        "fct-source": "src/Network-Stomp.html#ClientCommand",
        "fct-type": "function",
        "title": "UNSUBSCRIBE"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "UNSUBSCRIBE",
        "normalized": "",
        "package": "Stomp",
        "partial": "UNSUBSCRIBE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:abort",
      "description": {
        "fct-descr": "\u003cp\u003erollback a transaction\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e Transaction -\u003e [Header] -\u003e IO ()",
        "fct-source": "src/Network-Stomp.html#abort",
        "fct-type": "function",
        "title": "abort"
      },
      "index": {
        "description": "rollback transaction",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "abort",
        "normalized": "Connection-\u003eTransaction-\u003e[Header]-\u003eIO()",
        "package": "Stomp",
        "partial": "",
        "signature": "Connection-\u003eTransaction-\u003e[Header]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:ack",
      "description": {
        "fct-descr": "\u003cp\u003eacknowledge the consumption of a message from a subscription\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e Subscription -\u003e MessageId -\u003e [Header] -\u003e IO ()",
        "fct-source": "src/Network-Stomp.html#ack",
        "fct-type": "function",
        "title": "ack"
      },
      "index": {
        "description": "acknowledge the consumption of message from subscription",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "ack",
        "normalized": "Connection-\u003eSubscription-\u003eMessageId-\u003e[Header]-\u003eIO()",
        "package": "Stomp",
        "partial": "",
        "signature": "Connection-\u003eSubscription-\u003eMessageId-\u003e[Header]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:beat",
      "description": {
        "fct-descr": "\u003cp\u003esend a single newline byte to the server\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Network-Stomp.html#beat",
        "fct-type": "function",
        "title": "beat"
      },
      "index": {
        "description": "send single newline byte to the server",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "beat",
        "normalized": "Connection-\u003eIO()",
        "package": "Stomp",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:begin",
      "description": {
        "fct-descr": "\u003cp\u003estart a transaction\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e Transaction -\u003e [Header] -\u003e IO ()",
        "fct-source": "src/Network-Stomp.html#begin",
        "fct-type": "function",
        "title": "begin"
      },
      "index": {
        "description": "start transaction",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "begin",
        "normalized": "Connection-\u003eTransaction-\u003e[Header]-\u003eIO()",
        "package": "Stomp",
        "partial": "",
        "signature": "Connection-\u003eTransaction-\u003e[Header]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:body",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Stomp.html#Frame",
        "fct-type": "function",
        "title": "body"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "body",
        "normalized": "",
        "package": "Stomp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:command",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Command",
        "fct-source": "src/Network-Stomp.html#Frame",
        "fct-type": "function",
        "title": "command"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "command",
        "normalized": "",
        "package": "Stomp",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:commit",
      "description": {
        "fct-descr": "\u003cp\u003ecommit a transaction\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e Transaction -\u003e [Header] -\u003e IO ()",
        "fct-source": "src/Network-Stomp.html#commit",
        "fct-type": "function",
        "title": "commit"
      },
      "index": {
        "description": "commit transaction",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "commit",
        "normalized": "Connection-\u003eTransaction-\u003e[Header]-\u003eIO()",
        "package": "Stomp",
        "partial": "",
        "signature": "Connection-\u003eTransaction-\u003e[Header]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003econnect to the stomp (1.0, 1.1) broker using uri   \n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "StompUri -\u003e [Version] -\u003e [Header] -\u003e IO Connection",
        "fct-source": "src/Network-Stomp.html#connect",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "connect to the stomp broker using uri",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "connect",
        "normalized": "StompUri-\u003e[Version]-\u003e[Header]-\u003eIO Connection",
        "package": "Stomp",
        "partial": "",
        "signature": "StompUri-\u003e[Version]-\u003e[Header]-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:connect-39-",
      "description": {
        "fct-descr": "\u003cp\u003econnect to the stomp (1.0, 1.1) broker using hostname and port\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Host -\u003e PortNumber -\u003e [Version] -\u003e [Header] -\u003e IO Connection",
        "fct-source": "src/Network-Stomp.html#connect%27",
        "fct-type": "function",
        "title": "connect'"
      },
      "index": {
        "description": "connect to the stomp broker using hostname and port",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "connect'",
        "normalized": "Host-\u003ePortNumber-\u003e[Version]-\u003e[Header]-\u003eIO Connection",
        "package": "Stomp",
        "partial": "",
        "signature": "Host-\u003ePortNumber-\u003e[Version]-\u003e[Header]-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:disconnect",
      "description": {
        "fct-descr": "\u003cp\u003ecloses stomp connection\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e [Header] -\u003e IO ()",
        "fct-source": "src/Network-Stomp.html#disconnect",
        "fct-type": "function",
        "title": "disconnect"
      },
      "index": {
        "description": "closes stomp connection",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "disconnect",
        "normalized": "Connection-\u003e[Header]-\u003eIO()",
        "package": "Stomp",
        "partial": "",
        "signature": "Connection-\u003e[Header]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:headers",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "[Header]",
        "fct-source": "src/Network-Stomp.html#Frame",
        "fct-type": "function",
        "title": "headers"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "headers",
        "normalized": "[Header]",
        "package": "Stomp",
        "partial": "",
        "signature": "[Header]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:lastRecv",
      "description": {
        "fct-descr": "\u003cp\u003elast frame received time\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e MVar UTCTime",
        "fct-source": "src/Network-Stomp.html#lastRecv",
        "fct-type": "function",
        "title": "lastRecv"
      },
      "index": {
        "description": "last frame received time",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "lastRecv",
        "normalized": "Connection-\u003eMVar UTCTime",
        "package": "Stomp",
        "partial": "Recv",
        "signature": "Connection-\u003eMVar UTCTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:lastSend",
      "description": {
        "fct-descr": "\u003cp\u003elast frame sent time \n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e MVar UTCTime",
        "fct-source": "src/Network-Stomp.html#lastSend",
        "fct-type": "function",
        "title": "lastSend"
      },
      "index": {
        "description": "last frame sent time",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "lastSend",
        "normalized": "Connection-\u003eMVar UTCTime",
        "package": "Stomp",
        "partial": "Send",
        "signature": "Connection-\u003eMVar UTCTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:nack",
      "description": {
        "fct-descr": "\u003cp\u003eacknowledge the rejection of a message from a subscription\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e Subscription -\u003e MessageId -\u003e [Header] -\u003e IO ()",
        "fct-source": "src/Network-Stomp.html#nack",
        "fct-type": "function",
        "title": "nack"
      },
      "index": {
        "description": "acknowledge the rejection of message from subscription",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "nack",
        "normalized": "Connection-\u003eSubscription-\u003eMessageId-\u003e[Header]-\u003eIO()",
        "package": "Stomp",
        "partial": "",
        "signature": "Connection-\u003eSubscription-\u003eMessageId-\u003e[Header]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:receiveFrame",
      "description": {
        "fct-descr": "\u003cp\u003ereceives incoming frame\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e IO Frame",
        "fct-source": "src/Network-Stomp.html#receiveFrame",
        "fct-type": "function",
        "title": "receiveFrame"
      },
      "index": {
        "description": "receives incoming frame",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "receiveFrame",
        "normalized": "Connection-\u003eIO Frame",
        "package": "Stomp",
        "partial": "Frame",
        "signature": "Connection-\u003eIO Frame"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:recvTimeout",
      "description": {
        "fct-descr": "\u003cp\u003ereceive heaertbeat timeout\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e Int",
        "fct-source": "src/Network-Stomp.html#recvTimeout",
        "fct-type": "function",
        "title": "recvTimeout"
      },
      "index": {
        "description": "receive heaertbeat timeout",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "recvTimeout",
        "normalized": "Connection-\u003eInt",
        "package": "Stomp",
        "partial": "Timeout",
        "signature": "Connection-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:send",
      "description": {
        "fct-descr": "\u003cp\u003esend message to the destination.\n | The header 'content-length' is automatically set by this module. \n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e Destination -\u003e [Header] -\u003e ByteString -\u003e IO ()",
        "fct-source": "src/Network-Stomp.html#send",
        "fct-type": "function",
        "title": "send"
      },
      "index": {
        "description": "send message to the destination The header content-length is automatically set by this module",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "send",
        "normalized": "Connection-\u003eDestination-\u003e[Header]-\u003eByteString-\u003eIO()",
        "package": "Stomp",
        "partial": "",
        "signature": "Connection-\u003eDestination-\u003e[Header]-\u003eByteString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:send-39-",
      "description": {
        "fct-descr": "\u003cp\u003esend group of messages to the destination.\n | The header 'content-length' is automatically set by this module. \n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e [(Destination, [Header], ByteString)] -\u003e IO ()",
        "fct-source": "src/Network-Stomp.html#send%27",
        "fct-type": "function",
        "title": "send'"
      },
      "index": {
        "description": "send group of messages to the destination The header content-length is automatically set by this module",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "send'",
        "normalized": "Connection-\u003e[(Destination,[Header],ByteString)]-\u003eIO()",
        "package": "Stomp",
        "partial": "",
        "signature": "Connection-\u003e[(Destination,[Header],ByteString)]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:sendTimeout",
      "description": {
        "fct-descr": "\u003cp\u003esend heartbeat timeout\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e Int",
        "fct-source": "src/Network-Stomp.html#sendTimeout",
        "fct-type": "function",
        "title": "sendTimeout"
      },
      "index": {
        "description": "send heartbeat timeout",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "sendTimeout",
        "normalized": "Connection-\u003eInt",
        "package": "Stomp",
        "partial": "Timeout",
        "signature": "Connection-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:server",
      "description": {
        "fct-descr": "\u003cp\u003estomp server info\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e String",
        "fct-source": "src/Network-Stomp.html#server",
        "fct-type": "function",
        "title": "server"
      },
      "index": {
        "description": "stomp server info",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "server",
        "normalized": "Connection-\u003eString",
        "package": "Stomp",
        "partial": "",
        "signature": "Connection-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:session",
      "description": {
        "fct-descr": "\u003cp\u003esession identifier\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e String",
        "fct-source": "src/Network-Stomp.html#session",
        "fct-type": "function",
        "title": "session"
      },
      "index": {
        "description": "session identifier",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "session",
        "normalized": "Connection-\u003eString",
        "package": "Stomp",
        "partial": "",
        "signature": "Connection-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:setExcpHandler",
      "description": {
        "fct-descr": "\u003cp\u003eset exception handler callback to process the exception in the consumer/heartbeats threads \n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e (StompException -\u003e IO ()) -\u003e IO ()",
        "fct-source": "src/Network-Stomp.html#setExcpHandler",
        "fct-type": "function",
        "title": "setExcpHandler"
      },
      "index": {
        "description": "set exception handler callback to process the exception in the consumer heartbeats threads",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "setExcpHandler",
        "normalized": "Connection-\u003e(StompException-\u003eIO())-\u003eIO()",
        "package": "Stomp",
        "partial": "Excp Handler",
        "signature": "Connection-\u003e(StompException-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:startConsumer",
      "description": {
        "fct-descr": "\u003cp\u003ecreate consume frames thread\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e (Frame -\u003e IO ()) -\u003e IO ()",
        "fct-source": "src/Network-Stomp.html#startConsumer",
        "fct-type": "function",
        "title": "startConsumer"
      },
      "index": {
        "description": "create consume frames thread",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "startConsumer",
        "normalized": "Connection-\u003e(Frame-\u003eIO())-\u003eIO()",
        "package": "Stomp",
        "partial": "Consumer",
        "signature": "Connection-\u003e(Frame-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:startRecvBeat",
      "description": {
        "fct-descr": "\u003cp\u003efork receive heartbeat thread\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Network-Stomp.html#startRecvBeat",
        "fct-type": "function",
        "title": "startRecvBeat"
      },
      "index": {
        "description": "fork receive heartbeat thread",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "startRecvBeat",
        "normalized": "Connection-\u003eIO()",
        "package": "Stomp",
        "partial": "Recv Beat",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:startSendBeat",
      "description": {
        "fct-descr": "\u003cp\u003efork send heartbeat thread\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Network-Stomp.html#startSendBeat",
        "fct-type": "function",
        "title": "startSendBeat"
      },
      "index": {
        "description": "fork send heartbeat thread",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "startSendBeat",
        "normalized": "Connection-\u003eIO()",
        "package": "Stomp",
        "partial": "Send Beat",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:stomp",
      "description": {
        "fct-descr": "\u003cp\u003econnect to the stomp 1.1 broker using uri\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "StompUri -\u003e [Header] -\u003e IO Connection",
        "fct-source": "src/Network-Stomp.html#stomp",
        "fct-type": "function",
        "title": "stomp"
      },
      "index": {
        "description": "connect to the stomp broker using uri",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "stomp",
        "normalized": "StompUri-\u003e[Header]-\u003eIO Connection",
        "package": "Stomp",
        "partial": "",
        "signature": "StompUri-\u003e[Header]-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:stomp-39-",
      "description": {
        "fct-descr": "\u003cp\u003econnect to the stomp 1.1 broker using hostname and port\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Host -\u003e PortNumber -\u003e [Header] -\u003e IO Connection",
        "fct-source": "src/Network-Stomp.html#stomp%27",
        "fct-type": "function",
        "title": "stomp'"
      },
      "index": {
        "description": "connect to the stomp broker using hostname and port",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "stomp'",
        "normalized": "Host-\u003ePortNumber-\u003e[Header]-\u003eIO Connection",
        "package": "Stomp",
        "partial": "",
        "signature": "Host-\u003ePortNumber-\u003e[Header]-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:subscribe",
      "description": {
        "fct-descr": "\u003cp\u003esubscribe to the destination to receive stomp frames\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e Destination -\u003e Subscription -\u003e [Header] -\u003e IO ()",
        "fct-source": "src/Network-Stomp.html#subscribe",
        "fct-type": "function",
        "title": "subscribe"
      },
      "index": {
        "description": "subscribe to the destination to receive stomp frames",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "subscribe",
        "normalized": "Connection-\u003eDestination-\u003eSubscription-\u003e[Header]-\u003eIO()",
        "package": "Stomp",
        "partial": "",
        "signature": "Connection-\u003eDestination-\u003eSubscription-\u003e[Header]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:unsubscribe",
      "description": {
        "fct-descr": "\u003cp\u003eunsubscribe from destination given the subscription id\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e Subscription -\u003e [Header] -\u003e IO ()",
        "fct-source": "src/Network-Stomp.html#unsubscribe",
        "fct-type": "function",
        "title": "unsubscribe"
      },
      "index": {
        "description": "unsubscribe from destination given the subscription id",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "unsubscribe",
        "normalized": "Connection-\u003eSubscription-\u003e[Header]-\u003eIO()",
        "package": "Stomp",
        "partial": "",
        "signature": "Connection-\u003eSubscription-\u003e[Header]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Stomp/docs/Network-Stomp.html#v:versions",
      "description": {
        "fct-descr": "\u003cp\u003eaccepted stomp versions\n\u003c/p\u003e",
        "fct-module": "Network.Stomp",
        "fct-package": "Stomp",
        "fct-signature": "Connection -\u003e [Version]",
        "fct-source": "src/Network-Stomp.html#versions",
        "fct-type": "function",
        "title": "versions"
      },
      "index": {
        "description": "accepted stomp versions",
        "hierarchy": "Network Stomp",
        "module": "Network.Stomp",
        "name": "versions",
        "normalized": "Connection-\u003e[Version]",
        "package": "Stomp",
        "partial": "",
        "signature": "Connection-\u003e[Version]"
      }
    }
  }
]