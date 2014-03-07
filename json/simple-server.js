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
        "word": "simple-server"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SimpleServer.Examples.ChatClient",
          "name": "ChatClient",
          "package": "simple-server",
          "source": "src/Network-SimpleServer-Examples-ChatClient.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network SimpleServer Examples ChatClient",
          "module": "Network.SimpleServer.Examples.ChatClient",
          "name": "ChatClient",
          "package": "simple-server",
          "partial": "Chat Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer-Examples-ChatClient.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SimpleServer.Examples.ChatClient",
          "name": "main",
          "package": "simple-server",
          "signature": "IO ()",
          "source": "src/Network-SimpleServer-Examples-ChatClient.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SimpleServer Examples ChatClient",
          "module": "Network.SimpleServer.Examples.ChatClient",
          "name": "main",
          "normalized": "IO()",
          "package": "simple-server",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer-Examples-ChatClient.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SimpleServer.Examples.ChatClient",
          "name": "run",
          "package": "simple-server",
          "signature": "HostName -\u003e Int -\u003e IO ()",
          "source": "src/Network-SimpleServer-Examples-ChatClient.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SimpleServer Examples ChatClient",
          "module": "Network.SimpleServer.Examples.ChatClient",
          "name": "run",
          "normalized": "HostName-\u003eInt-\u003eIO()",
          "package": "simple-server",
          "signature": "HostName-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer-Examples-ChatClient.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SimpleServer.Examples.ChatServer",
          "name": "ChatServer",
          "package": "simple-server",
          "source": "src/Network-SimpleServer-Examples-ChatServer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network SimpleServer Examples ChatServer",
          "module": "Network.SimpleServer.Examples.ChatServer",
          "name": "ChatServer",
          "package": "simple-server",
          "partial": "Chat Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer-Examples-ChatServer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SimpleServer.Examples.ChatServer",
          "name": "main",
          "package": "simple-server",
          "signature": "IO ()",
          "source": "src/Network-SimpleServer-Examples-ChatServer.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SimpleServer Examples ChatServer",
          "module": "Network.SimpleServer.Examples.ChatServer",
          "name": "main",
          "normalized": "IO()",
          "package": "simple-server",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer-Examples-ChatServer.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SimpleServer.Examples.ChatServer",
          "name": "run",
          "package": "simple-server",
          "signature": "Int -\u003e IO ()",
          "source": "src/Network-SimpleServer-Examples-ChatServer.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SimpleServer Examples ChatServer",
          "module": "Network.SimpleServer.Examples.ChatServer",
          "name": "run",
          "normalized": "Int-\u003eIO()",
          "package": "simple-server",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer-Examples-ChatServer.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe goal of SimpleServer, as its name implies, is to make it easy to build\nsimple message passing servers by puting a layer between the programmer and\nthe concurrent operations between it and the network layer connecting\nit to multiple clients.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.SimpleServer",
          "name": "SimpleServer",
          "package": "simple-server",
          "source": "src/Network-SimpleServer.html",
          "type": "module"
        },
        "index": {
          "description": "The goal of SimpleServer as its name implies is to make it easy to build simple message passing servers by puting layer between the programmer and the concurrent operations between it and the network layer connecting it to multiple clients",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "SimpleServer",
          "package": "simple-server",
          "partial": "Simple Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes a Clients connection and provides an interface for\nstoring data associated with the client. Each client will be given\na unique cid and are Eq if their cid's are Eq.\n\u003c/p\u003e\u003cp\u003eA ClientConn comes packaged with two functions for storing additional\ninformation in Strings, lookup and modify. The lookup function\ntakes a key and returns the current value of the key or the empty\nstring if it has never been set. The modify function\ntakes a key and value and updates it such that the next call to\nlookup with that key will return the value provided.\n\u003c/p\u003e",
          "module": "Network.SimpleServer",
          "name": "ClientConn",
          "package": "simple-server",
          "source": "src/Network-SimpleServer.html#ClientConn",
          "type": "data"
        },
        "index": {
          "description": "Describes Clients connection and provides an interface for storing data associated with the client Each client will be given unique cid and are Eq if their cid are Eq ClientConn comes packaged with two functions for storing additional information in Strings lookup and modify The lookup function takes key and returns the current value of the key or the empty string if it has never been set The modify function takes key and value and updates it such that the next call to lookup with that key will return the value provided",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "ClientConn",
          "package": "simple-server",
          "partial": "Client Conn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#t:ClientConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA server may have any number of CmdHandlers. When a CmdHandler is called it\nis passed a list of strings representing the message the server received, the\nserver that received it, and the client that send the message. The first\npart element of the list is the string that triggered the CmdHandler.\n\u003c/p\u003e",
          "module": "Network.SimpleServer",
          "name": "CmdHandler",
          "package": "simple-server",
          "source": "src/Network-SimpleServer.html#CmdHandler",
          "type": "type"
        },
        "index": {
          "description": "server may have any number of CmdHandlers When CmdHandler is called it is passed list of strings representing the message the server received the server that received it and the client that send the message The first part element of the list is the string that triggered the CmdHandler",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "CmdHandler",
          "package": "simple-server",
          "partial": "Cmd Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#t:CmdHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach server has one ConnectionHandler that is called each time a client connects to the server.\n\u003c/p\u003e",
          "module": "Network.SimpleServer",
          "name": "ConnectionHandler",
          "package": "simple-server",
          "source": "src/Network-SimpleServer.html#ConnectionHandler",
          "type": "type"
        },
        "index": {
          "description": "Each server has one ConnectionHandler that is called each time client connects to the server",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "ConnectionHandler",
          "package": "simple-server",
          "partial": "Connection Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#t:ConnectionHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA DisconnectHandler is called each time a client is disconnected from the server.\n\u003c/p\u003e",
          "module": "Network.SimpleServer",
          "name": "DisconnectHandler",
          "package": "simple-server",
          "source": "src/Network-SimpleServer.html#DisconnectHandler",
          "type": "type"
        },
        "index": {
          "description": "DisconnectHandler is called each time client is disconnected from the server",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "DisconnectHandler",
          "package": "simple-server",
          "partial": "Disconnect Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#t:DisconnectHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Simple Server\n\u003c/p\u003e",
          "module": "Network.SimpleServer",
          "name": "Server",
          "package": "simple-server",
          "source": "src/Network-SimpleServer.html#Server",
          "type": "data"
        },
        "index": {
          "description": "Simple Server",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "Server",
          "package": "simple-server",
          "partial": "Server",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#t:Server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a server, a command, and a command handler, adds the command to the\nserver. If the command already exists, it will be overwritten.\n\u003c/p\u003e",
          "module": "Network.SimpleServer",
          "name": "addCommand",
          "package": "simple-server",
          "signature": "Server -\u003e String -\u003e CmdHandler -\u003e IO ()",
          "source": "src/Network-SimpleServer.html#addCommand",
          "type": "function"
        },
        "index": {
          "description": "Given server command and command handler adds the command to the server If the command already exists it will be overwritten",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "addCommand",
          "normalized": "Server-\u003eString-\u003eCmdHandler-\u003eIO()",
          "package": "simple-server",
          "partial": "Command",
          "signature": "Server-\u003eString-\u003eCmdHandler-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:addCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a message to all clients message queue to be handled eventually.\n\u003c/p\u003e",
          "module": "Network.SimpleServer",
          "name": "broadcast",
          "package": "simple-server",
          "signature": "Server -\u003e String -\u003e IO ()",
          "source": "src/Network-SimpleServer.html#broadcast",
          "type": "function"
        },
        "index": {
          "description": "Adds message to all clients message queue to be handled eventually",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "broadcast",
          "normalized": "Server-\u003eString-\u003eIO()",
          "package": "simple-server",
          "signature": "Server-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:broadcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Unique ID for this client\n\u003c/p\u003e",
          "module": "Network.SimpleServer",
          "name": "cid",
          "package": "simple-server",
          "signature": "ClientConn -\u003e Integer",
          "source": "src/Network-SimpleServer.html#cid",
          "type": "function"
        },
        "index": {
          "description": "The Unique ID for this client",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "cid",
          "normalized": "ClientConn-\u003eInteger",
          "package": "simple-server",
          "signature": "ClientConn-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:cid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all clients that are currently connected to the server\n\u003c/p\u003e",
          "module": "Network.SimpleServer",
          "name": "clientList",
          "package": "simple-server",
          "signature": "Server -\u003e IO [ClientConn]",
          "source": "src/Network-SimpleServer.html#clientList",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all clients that are currently connected to the server",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "clientList",
          "normalized": "Server-\u003eIO[ClientConn]",
          "package": "simple-server",
          "partial": "List",
          "signature": "Server-\u003eIO[ClientConn]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:clientList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisconnects the client if they are still connected to the server.\n\u003c/p\u003e",
          "module": "Network.SimpleServer",
          "name": "disconnect",
          "package": "simple-server",
          "signature": "ClientConn -\u003e IO ()",
          "source": "src/Network-SimpleServer.html#disconnect",
          "type": "function"
        },
        "index": {
          "description": "Disconnects the client if they are still connected to the server",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "disconnect",
          "normalized": "ClientConn-\u003eIO()",
          "package": "simple-server",
          "signature": "ClientConn-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up a property for this client. By default, all properties are the empty string.\n\u003c/p\u003e",
          "module": "Network.SimpleServer",
          "name": "lookup",
          "package": "simple-server",
          "signature": "ClientConn -\u003e String -\u003e IO String",
          "source": "src/Network-SimpleServer.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Looks up property for this client By default all properties are the empty string",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "lookup",
          "normalized": "ClientConn-\u003eString-\u003eIO String",
          "package": "simple-server",
          "signature": "ClientConn-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifies a client property. Given a property string, and a value string, the next call to lookup for the given property will result in the value.\n\u003c/p\u003e",
          "module": "Network.SimpleServer",
          "name": "modify",
          "package": "simple-server",
          "signature": "ClientConn -\u003e String -\u003e String -\u003e IO ()",
          "source": "src/Network-SimpleServer.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Modifies client property Given property string and value string the next call to lookup for the given property will result in the value",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "modify",
          "normalized": "ClientConn-\u003eString-\u003eString-\u003eIO()",
          "package": "simple-server",
          "signature": "ClientConn-\u003eString-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new server with the specified ConnectionHandler and DisconnectHandler.\nOn a call to start, the server will attempt to connect on the specified Port.\nIf a client does not talk to a server for more than 60 seconds\nit will be disconnected.\n\u003c/p\u003e",
          "module": "Network.SimpleServer",
          "name": "new",
          "package": "simple-server",
          "signature": "ConnectionHandler -\u003e DisconnectHandler -\u003e Int -\u003e IO Server",
          "source": "src/Network-SimpleServer.html#new",
          "type": "function"
        },
        "index": {
          "description": "Creates new server with the specified ConnectionHandler and DisconnectHandler On call to start the server will attempt to connect on the specified Port If client does not talk to server for more than seconds it will be disconnected",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "new",
          "normalized": "ConnectionHandler-\u003eDisconnectHandler-\u003eInt-\u003eIO Server",
          "package": "simple-server",
          "signature": "ConnectionHandler-\u003eDisconnectHandler-\u003eInt-\u003eIO Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a message to the clients message queue to be handled eventually.\n\u003c/p\u003e",
          "module": "Network.SimpleServer",
          "name": "respond",
          "package": "simple-server",
          "signature": "ClientConn -\u003e String -\u003e IO ()",
          "source": "src/Network-SimpleServer.html#respond",
          "type": "function"
        },
        "index": {
          "description": "Adds message to the clients message queue to be handled eventually",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "respond",
          "normalized": "ClientConn-\u003eString-\u003eIO()",
          "package": "simple-server",
          "signature": "ClientConn-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:respond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts a server if it is currently not started. Otherwise, does nothing. The\nserver will be started on a new thread and control will be returned to the\nthread that called this function.\n\u003c/p\u003e",
          "module": "Network.SimpleServer",
          "name": "start",
          "package": "simple-server",
          "signature": "Server -\u003e IO ()",
          "source": "src/Network-SimpleServer.html#start",
          "type": "function"
        },
        "index": {
          "description": "Starts server if it is currently not started Otherwise does nothing The server will be started on new thread and control will be returned to the thread that called this function",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "start",
          "normalized": "Server-\u003eIO()",
          "package": "simple-server",
          "signature": "Server-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStops a server if it is running sending a disconnect message\nto all clients and killing any threads that have been spawned. \nOtherwise, does nothing.\nAny shutdown operations should be run before this is called. \n\u003c/p\u003e",
          "module": "Network.SimpleServer",
          "name": "stop",
          "package": "simple-server",
          "signature": "Server -\u003e IO ()",
          "source": "src/Network-SimpleServer.html#stop",
          "type": "function"
        },
        "index": {
          "description": "Stops server if it is running sending disconnect message to all clients and killing any threads that have been spawned Otherwise does nothing Any shutdown operations should be run before this is called",
          "hierarchy": "Network SimpleServer",
          "module": "Network.SimpleServer",
          "name": "stop",
          "normalized": "Server-\u003eIO()",
          "package": "simple-server",
          "signature": "Server-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:stop"
      }
    }
  ]
]