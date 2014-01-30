[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer-Examples-ChatClient.html#",
      "description": {
        "fct-module": "Network.SimpleServer.Examples.ChatClient",
        "fct-package": "simple-server",
        "fct-signature": "module",
        "fct-source": "src/Network-SimpleServer-Examples-ChatClient.html",
        "fct-type": "module",
        "title": "ChatClient"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SimpleServer Examples ChatClient",
        "module": "Network.SimpleServer.Examples.ChatClient",
        "name": "ChatClient",
        "normalized": "",
        "package": "simple-server",
        "partial": "Chat Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer-Examples-ChatClient.html#v:main",
      "description": {
        "fct-module": "Network.SimpleServer.Examples.ChatClient",
        "fct-package": "simple-server",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-SimpleServer-Examples-ChatClient.html#main",
        "fct-type": "function",
        "title": "main"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SimpleServer Examples ChatClient",
        "module": "Network.SimpleServer.Examples.ChatClient",
        "name": "main",
        "normalized": "IO()",
        "package": "simple-server",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer-Examples-ChatClient.html#v:run",
      "description": {
        "fct-module": "Network.SimpleServer.Examples.ChatClient",
        "fct-package": "simple-server",
        "fct-signature": "HostName -\u003e Int -\u003e IO ()",
        "fct-source": "src/Network-SimpleServer-Examples-ChatClient.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SimpleServer Examples ChatClient",
        "module": "Network.SimpleServer.Examples.ChatClient",
        "name": "run",
        "normalized": "HostName-\u003eInt-\u003eIO()",
        "package": "simple-server",
        "partial": "",
        "signature": "HostName-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer-Examples-ChatServer.html#",
      "description": {
        "fct-module": "Network.SimpleServer.Examples.ChatServer",
        "fct-package": "simple-server",
        "fct-signature": "module",
        "fct-source": "src/Network-SimpleServer-Examples-ChatServer.html",
        "fct-type": "module",
        "title": "ChatServer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SimpleServer Examples ChatServer",
        "module": "Network.SimpleServer.Examples.ChatServer",
        "name": "ChatServer",
        "normalized": "",
        "package": "simple-server",
        "partial": "Chat Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer-Examples-ChatServer.html#v:main",
      "description": {
        "fct-module": "Network.SimpleServer.Examples.ChatServer",
        "fct-package": "simple-server",
        "fct-signature": "IO ()",
        "fct-source": "src/Network-SimpleServer-Examples-ChatServer.html#main",
        "fct-type": "function",
        "title": "main"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SimpleServer Examples ChatServer",
        "module": "Network.SimpleServer.Examples.ChatServer",
        "name": "main",
        "normalized": "IO()",
        "package": "simple-server",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer-Examples-ChatServer.html#v:run",
      "description": {
        "fct-module": "Network.SimpleServer.Examples.ChatServer",
        "fct-package": "simple-server",
        "fct-signature": "Int -\u003e IO ()",
        "fct-source": "src/Network-SimpleServer-Examples-ChatServer.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "",
        "hierarchy": "Network SimpleServer Examples ChatServer",
        "module": "Network.SimpleServer.Examples.ChatServer",
        "name": "run",
        "normalized": "Int-\u003eIO()",
        "package": "simple-server",
        "partial": "",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe goal of SimpleServer, as its name implies, is to make it easy to build\nsimple message passing servers by puting a layer between the programmer and\nthe concurrent operations between it and the network layer connecting\nit to multiple clients.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "module",
        "fct-source": "src/Network-SimpleServer.html",
        "fct-type": "module",
        "title": "SimpleServer"
      },
      "index": {
        "description": "The goal of SimpleServer as its name implies is to make it easy to build simple message passing servers by puting layer between the programmer and the concurrent operations between it and the network layer connecting it to multiple clients",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "SimpleServer",
        "normalized": "",
        "package": "simple-server",
        "partial": "Simple Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#t:ClientConn",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes a Clients connection and provides an interface for\nstoring data associated with the client. Each client will be given\na unique cid and are Eq if their cid's are Eq.\n\u003c/p\u003e\u003cp\u003eA ClientConn comes packaged with two functions for storing additional\ninformation in Strings, lookup and modify. The lookup function\ntakes a key and returns the current value of the key or the empty\nstring if it has never been set. The modify function\ntakes a key and value and updates it such that the next call to\nlookup with that key will return the value provided.\n\u003c/p\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "data",
        "fct-source": "src/Network-SimpleServer.html#ClientConn",
        "fct-type": "data",
        "title": "ClientConn"
      },
      "index": {
        "description": "Describes Clients connection and provides an interface for storing data associated with the client Each client will be given unique cid and are Eq if their cid are Eq ClientConn comes packaged with two functions for storing additional information in Strings lookup and modify The lookup function takes key and returns the current value of the key or the empty string if it has never been set The modify function takes key and value and updates it such that the next call to lookup with that key will return the value provided",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "ClientConn",
        "normalized": "",
        "package": "simple-server",
        "partial": "Client Conn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#t:CmdHandler",
      "description": {
        "fct-descr": "\u003cp\u003eA server may have any number of CmdHandlers. When a CmdHandler is called it\nis passed a list of strings representing the message the server received, the\nserver that received it, and the client that send the message. The first\npart element of the list is the string that triggered the CmdHandler.\n\u003c/p\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "type",
        "fct-source": "src/Network-SimpleServer.html#CmdHandler",
        "fct-type": "type",
        "title": "CmdHandler"
      },
      "index": {
        "description": "server may have any number of CmdHandlers When CmdHandler is called it is passed list of strings representing the message the server received the server that received it and the client that send the message The first part element of the list is the string that triggered the CmdHandler",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "CmdHandler",
        "normalized": "",
        "package": "simple-server",
        "partial": "Cmd Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#t:ConnectionHandler",
      "description": {
        "fct-descr": "\u003cp\u003eEach server has one ConnectionHandler that is called each time a client connects to the server.\n\u003c/p\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "type",
        "fct-source": "src/Network-SimpleServer.html#ConnectionHandler",
        "fct-type": "type",
        "title": "ConnectionHandler"
      },
      "index": {
        "description": "Each server has one ConnectionHandler that is called each time client connects to the server",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "ConnectionHandler",
        "normalized": "",
        "package": "simple-server",
        "partial": "Connection Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#t:DisconnectHandler",
      "description": {
        "fct-descr": "\u003cp\u003eA DisconnectHandler is called each time a client is disconnected from the server.\n\u003c/p\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "type",
        "fct-source": "src/Network-SimpleServer.html#DisconnectHandler",
        "fct-type": "type",
        "title": "DisconnectHandler"
      },
      "index": {
        "description": "DisconnectHandler is called each time client is disconnected from the server",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "DisconnectHandler",
        "normalized": "",
        "package": "simple-server",
        "partial": "Disconnect Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#t:Server",
      "description": {
        "fct-descr": "\u003cp\u003eA Simple Server\n\u003c/p\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "data",
        "fct-source": "src/Network-SimpleServer.html#Server",
        "fct-type": "data",
        "title": "Server"
      },
      "index": {
        "description": "Simple Server",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "Server",
        "normalized": "",
        "package": "simple-server",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:addCommand",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a server, a command, and a command handler, adds the command to the\nserver. If the command already exists, it will be overwritten.\n\u003c/p\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "Server -\u003e String -\u003e CmdHandler -\u003e IO ()",
        "fct-source": "src/Network-SimpleServer.html#addCommand",
        "fct-type": "function",
        "title": "addCommand"
      },
      "index": {
        "description": "Given server command and command handler adds the command to the server If the command already exists it will be overwritten",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "addCommand",
        "normalized": "Server-\u003eString-\u003eCmdHandler-\u003eIO()",
        "package": "simple-server",
        "partial": "Command",
        "signature": "Server-\u003eString-\u003eCmdHandler-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:broadcast",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a message to all clients message queue to be handled eventually.\n\u003c/p\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "Server -\u003e String -\u003e IO ()",
        "fct-source": "src/Network-SimpleServer.html#broadcast",
        "fct-type": "function",
        "title": "broadcast"
      },
      "index": {
        "description": "Adds message to all clients message queue to be handled eventually",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "broadcast",
        "normalized": "Server-\u003eString-\u003eIO()",
        "package": "simple-server",
        "partial": "",
        "signature": "Server-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:cid",
      "description": {
        "fct-descr": "\u003cp\u003eThe Unique ID for this client\n\u003c/p\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "ClientConn -\u003e Integer",
        "fct-source": "src/Network-SimpleServer.html#cid",
        "fct-type": "function",
        "title": "cid"
      },
      "index": {
        "description": "The Unique ID for this client",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "cid",
        "normalized": "ClientConn-\u003eInteger",
        "package": "simple-server",
        "partial": "",
        "signature": "ClientConn-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:clientList",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of all clients that are currently connected to the server\n\u003c/p\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "Server -\u003e IO [ClientConn]",
        "fct-source": "src/Network-SimpleServer.html#clientList",
        "fct-type": "function",
        "title": "clientList"
      },
      "index": {
        "description": "Returns list of all clients that are currently connected to the server",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "clientList",
        "normalized": "Server-\u003eIO[ClientConn]",
        "package": "simple-server",
        "partial": "List",
        "signature": "Server-\u003eIO[ClientConn]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:disconnect",
      "description": {
        "fct-descr": "\u003cp\u003eDisconnects the client if they are still connected to the server.\n\u003c/p\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "ClientConn -\u003e IO ()",
        "fct-source": "src/Network-SimpleServer.html#disconnect",
        "fct-type": "function",
        "title": "disconnect"
      },
      "index": {
        "description": "Disconnects the client if they are still connected to the server",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "disconnect",
        "normalized": "ClientConn-\u003eIO()",
        "package": "simple-server",
        "partial": "",
        "signature": "ClientConn-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLooks up a property for this client. By default, all properties are the empty string.\n\u003c/p\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "ClientConn -\u003e String -\u003e IO String",
        "fct-source": "src/Network-SimpleServer.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Looks up property for this client By default all properties are the empty string",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "lookup",
        "normalized": "ClientConn-\u003eString-\u003eIO String",
        "package": "simple-server",
        "partial": "",
        "signature": "ClientConn-\u003eString-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eModifies a client property. Given a property string, and a value string, the next call to lookup for the given property will result in the value.\n\u003c/p\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "ClientConn -\u003e String -\u003e String -\u003e IO ()",
        "fct-source": "src/Network-SimpleServer.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Modifies client property Given property string and value string the next call to lookup for the given property will result in the value",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "modify",
        "normalized": "ClientConn-\u003eString-\u003eString-\u003eIO()",
        "package": "simple-server",
        "partial": "",
        "signature": "ClientConn-\u003eString-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new server with the specified ConnectionHandler and DisconnectHandler.\nOn a call to start, the server will attempt to connect on the specified Port.\nIf a client does not talk to a server for more than 60 seconds\nit will be disconnected.\n\u003c/p\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "ConnectionHandler -\u003e DisconnectHandler -\u003e Int -\u003e IO Server",
        "fct-source": "src/Network-SimpleServer.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Creates new server with the specified ConnectionHandler and DisconnectHandler On call to start the server will attempt to connect on the specified Port If client does not talk to server for more than seconds it will be disconnected",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "new",
        "normalized": "ConnectionHandler-\u003eDisconnectHandler-\u003eInt-\u003eIO Server",
        "package": "simple-server",
        "partial": "",
        "signature": "ConnectionHandler-\u003eDisconnectHandler-\u003eInt-\u003eIO Server"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:respond",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a message to the clients message queue to be handled eventually.\n\u003c/p\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "ClientConn -\u003e String -\u003e IO ()",
        "fct-source": "src/Network-SimpleServer.html#respond",
        "fct-type": "function",
        "title": "respond"
      },
      "index": {
        "description": "Adds message to the clients message queue to be handled eventually",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "respond",
        "normalized": "ClientConn-\u003eString-\u003eIO()",
        "package": "simple-server",
        "partial": "",
        "signature": "ClientConn-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:start",
      "description": {
        "fct-descr": "\u003cp\u003eStarts a server if it is currently not started. Otherwise, does nothing. The\nserver will be started on a new thread and control will be returned to the\nthread that called this function.\n\u003c/p\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "Server -\u003e IO ()",
        "fct-source": "src/Network-SimpleServer.html#start",
        "fct-type": "function",
        "title": "start"
      },
      "index": {
        "description": "Starts server if it is currently not started Otherwise does nothing The server will be started on new thread and control will be returned to the thread that called this function",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "start",
        "normalized": "Server-\u003eIO()",
        "package": "simple-server",
        "partial": "",
        "signature": "Server-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-server/docs/Network-SimpleServer.html#v:stop",
      "description": {
        "fct-descr": "\u003cp\u003eStops a server if it is running sending a disconnect message\nto all clients and killing any threads that have been spawned. \nOtherwise, does nothing.\nAny shutdown operations should be run before this is called. \n\u003c/p\u003e",
        "fct-module": "Network.SimpleServer",
        "fct-package": "simple-server",
        "fct-signature": "Server -\u003e IO ()",
        "fct-source": "src/Network-SimpleServer.html#stop",
        "fct-type": "function",
        "title": "stop"
      },
      "index": {
        "description": "Stops server if it is running sending disconnect message to all clients and killing any threads that have been spawned Otherwise does nothing Any shutdown operations should be run before this is called",
        "hierarchy": "Network SimpleServer",
        "module": "Network.SimpleServer",
        "name": "stop",
        "normalized": "Server-\u003eIO()",
        "package": "simple-server",
        "partial": "",
        "signature": "Server-\u003eIO()"
      }
    }
  }
]