[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions for TCP sockets \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Transport.TCP.Internal",
        "fct-package": "network-transport-tcp",
        "fct-signature": "module",
        "fct-source": "src/Network-Transport-TCP-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Utility functions for TCP sockets",
        "hierarchy": "Network Transport TCP Internal",
        "module": "Network.Transport.TCP.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP-Internal.html#v:forkServer",
      "description": {
        "fct-descr": "\u003cp\u003eStart a server at the specified address.\n\u003c/p\u003e\u003cp\u003eThis sets up a server socket for the specified host and port. Exceptions\n thrown during setup are not caught.\n\u003c/p\u003e\u003cp\u003eOnce the socket is created we spawn a new thread which repeatedly accepts\n incoming connections and executes the given request handler. If any\n exception occurs the thread terminates and calls the terminationHandler.\n This exception may occur because of a call to \u003ccode\u003e\u003ca\u003eaccept\u003c/a\u003e\u003c/code\u003e, because the thread\n was explicitly killed, or because of a synchronous exception thrown by the\n request handler. Typically, you should avoid the last case by catching any\n relevant exceptions in the request handler.\n\u003c/p\u003e\u003cp\u003eThe request handler should spawn threads to handle each individual request\n or the server will block. Once a thread has been spawned it will be the\n responsibility of the new thread to close the socket when an exception\n occurs. \n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP.Internal",
        "fct-package": "network-transport-tcp",
        "fct-signature": "HostName-\u003e ServiceName-\u003e Int-\u003e Bool-\u003e (SomeException -\u003e IO ())-\u003e (Socket -\u003e IO ())-\u003e IO ThreadId",
        "fct-type": "function",
        "title": "forkServer"
      },
      "index": {
        "description": "Start server at the specified address This sets up server socket for the specified host and port Exceptions thrown during setup are not caught Once the socket is created we spawn new thread which repeatedly accepts incoming connections and executes the given request handler If any exception occurs the thread terminates and calls the terminationHandler This exception may occur because of call to accept because the thread was explicitly killed or because of synchronous exception thrown by the request handler Typically you should avoid the last case by catching any relevant exceptions in the request handler The request handler should spawn threads to handle each individual request or the server will block Once thread has been spawned it will be the responsibility of the new thread to close the socket when an exception occurs",
        "hierarchy": "Network Transport TCP Internal",
        "module": "Network.Transport.TCP.Internal",
        "name": "forkServer",
        "normalized": "HostName-\u003eServiceName-\u003eInt-\u003eBool-\u003e(SomeException-\u003eIO())-\u003e(Socket-\u003eIO())-\u003eIO ThreadId",
        "package": "network-transport-tcp",
        "partial": "Server",
        "signature": "HostName-\u003eServiceName-\u003eInt-\u003eBool-\u003e(SomeException-\u003eIO())-\u003e(Socket-\u003eIO())-\u003eIO ThreadId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP-Internal.html#v:recvExact",
      "description": {
        "fct-descr": "\u003cp\u003eRead an exact number of bytes from a socket\n\u003c/p\u003e\u003cp\u003eThrows an I/O exception if the socket closes before the specified\n number of bytes could be read\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP.Internal",
        "fct-package": "network-transport-tcp",
        "fct-signature": "Socket-\u003e Int32-\u003e IO [ByteString]",
        "fct-type": "function",
        "title": "recvExact"
      },
      "index": {
        "description": "Read an exact number of bytes from socket Throws an exception if the socket closes before the specified number of bytes could be read",
        "hierarchy": "Network Transport TCP Internal",
        "module": "Network.Transport.TCP.Internal",
        "name": "recvExact",
        "normalized": "Socket-\u003eInt-\u003eIO[ByteString]",
        "package": "network-transport-tcp",
        "partial": "Exact",
        "signature": "Socket-\u003eInt-\u003eIO[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP-Internal.html#v:recvInt32",
      "description": {
        "fct-descr": "\u003cp\u003eReceive a 32-bit integer\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP.Internal",
        "fct-package": "network-transport-tcp",
        "fct-signature": "Socket -\u003e IO a",
        "fct-source": "src/Network-Transport-TCP-Internal.html#recvInt32",
        "fct-type": "function",
        "title": "recvInt32"
      },
      "index": {
        "description": "Receive bit integer",
        "hierarchy": "Network Transport TCP Internal",
        "module": "Network.Transport.TCP.Internal",
        "name": "recvInt32",
        "normalized": "Socket-\u003eIO a",
        "package": "network-transport-tcp",
        "partial": "Int",
        "signature": "Socket-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP-Internal.html#v:recvWithLength",
      "description": {
        "fct-descr": "\u003cp\u003eRead a length and then a payload of that length\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP.Internal",
        "fct-package": "network-transport-tcp",
        "fct-signature": "Socket -\u003e IO [ByteString]",
        "fct-source": "src/Network-Transport-TCP-Internal.html#recvWithLength",
        "fct-type": "function",
        "title": "recvWithLength"
      },
      "index": {
        "description": "Read length and then payload of that length",
        "hierarchy": "Network Transport TCP Internal",
        "module": "Network.Transport.TCP.Internal",
        "name": "recvWithLength",
        "normalized": "Socket-\u003eIO[ByteString]",
        "package": "network-transport-tcp",
        "partial": "With Length",
        "signature": "Socket-\u003eIO[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP-Internal.html#v:tryCloseSocket",
      "description": {
        "fct-descr": "\u003cp\u003eClose a socket, ignoring I/O exceptions\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP.Internal",
        "fct-package": "network-transport-tcp",
        "fct-signature": "Socket -\u003e IO ()",
        "fct-source": "src/Network-Transport-TCP-Internal.html#tryCloseSocket",
        "fct-type": "function",
        "title": "tryCloseSocket"
      },
      "index": {
        "description": "Close socket ignoring exceptions",
        "hierarchy": "Network Transport TCP Internal",
        "module": "Network.Transport.TCP.Internal",
        "name": "tryCloseSocket",
        "normalized": "Socket-\u003eIO()",
        "package": "network-transport-tcp",
        "partial": "Close Socket",
        "signature": "Socket-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTCP implementation of the transport layer. \n\u003c/p\u003e\u003cp\u003eThe TCP implementation guarantees that only a single TCP connection (socket)\n will be used between endpoints, provided that the addresses specified are\n canonical. If \u003cem\u003eA\u003c/em\u003e connects to \u003cem\u003eB\u003c/em\u003e and reports its address as\n \u003ccode\u003e192.168.0.1:8080\u003c/code\u003e and \u003cem\u003eB\u003c/em\u003e subsequently connects tries to connect to \u003cem\u003eA\u003c/em\u003e as\n \u003ccode\u003eclient1.local:http-alt\u003c/code\u003e then the transport layer will not realize that the\n TCP connection can be reused. \n\u003c/p\u003e\u003cp\u003eApplications that use the TCP transport should use\n \u003ccode\u003e\u003ca\u003ewithSocketsDo\u003c/a\u003e\u003c/code\u003e in their main function for Windows\n compatibility (see \u003ca\u003eNetwork.Socket\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "module",
        "fct-source": "src/Network-Transport-TCP.html",
        "fct-type": "module",
        "title": "TCP"
      },
      "index": {
        "description": "TCP implementation of the transport layer The TCP implementation guarantees that only single TCP connection socket will be used between endpoints provided that the addresses specified are canonical If connects to and reports its address as and subsequently connects tries to connect to as client1.local http-alt then the transport layer will not realize that the TCP connection can be reused Applications that use the TCP transport should use withSocketsDo in their main function for Windows compatibility see Network.Socket",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "TCP",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "TCP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#t:ConnectionRequestResponse",
      "description": {
        "fct-descr": "\u003cp\u003eResponse sent by \u003cem\u003eB\u003c/em\u003e to \u003cem\u003eA\u003c/em\u003e when \u003cem\u003eA\u003c/em\u003e tries to connect\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport-TCP.html#ConnectionRequestResponse",
        "fct-type": "data",
        "title": "ConnectionRequestResponse"
      },
      "index": {
        "description": "Response sent by to when tries to connect",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "ConnectionRequestResponse",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Connection Request Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#t:ControlHeader",
      "description": {
        "fct-descr": "\u003cp\u003eControl headers \n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport-TCP.html#ControlHeader",
        "fct-type": "data",
        "title": "ControlHeader"
      },
      "index": {
        "description": "Control headers",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "ControlHeader",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Control Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#t:EndPointId",
      "description": {
        "fct-descr": "\u003cp\u003eLocal identifier for an endpoint within this transport\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "type",
        "fct-source": "src/Network-Transport-TCP.html#EndPointId",
        "fct-type": "type",
        "title": "EndPointId"
      },
      "index": {
        "description": "Local identifier for an endpoint within this transport",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "EndPointId",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "End Point Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#t:LightweightConnectionId",
      "description": {
        "fct-descr": "\u003cp\u003eLightweight connection ID (sender allocated)\n\u003c/p\u003e\u003cp\u003eA ConnectionId is the concentation of a \u003ccode\u003eHeavyweightConnectionId\u003c/code\u003e and a\n \u003ccode\u003e\u003ca\u003eLightweightConnectionId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "type",
        "fct-source": "src/Network-Transport-TCP.html#LightweightConnectionId",
        "fct-type": "type",
        "title": "LightweightConnectionId"
      },
      "index": {
        "description": "Lightweight connection ID sender allocated ConnectionId is the concentation of HeavyweightConnectionId and LightweightConnectionId",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "LightweightConnectionId",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Lightweight Connection Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#t:TCPParameters",
      "description": {
        "fct-descr": "\u003cp\u003eParameters for setting up the TCP transport\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport-TCP.html#TCPParameters",
        "fct-type": "data",
        "title": "TCPParameters"
      },
      "index": {
        "description": "Parameters for setting up the TCP transport",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "TCPParameters",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "TCPParameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#t:TransportInternals",
      "description": {
        "fct-descr": "\u003cp\u003eInternal functionality we expose for unit testing\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "data",
        "fct-source": "src/Network-Transport-TCP.html#TransportInternals",
        "fct-type": "data",
        "title": "TransportInternals"
      },
      "index": {
        "description": "Internal functionality we expose for unit testing",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "TransportInternals",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Transport Internals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:CloseConnection",
      "description": {
        "fct-descr": "\u003cp\u003eTell the remote endpoint we will no longer be using a connection\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "CloseConnection",
        "fct-source": "src/Network-Transport-TCP.html#ControlHeader",
        "fct-type": "function",
        "title": "CloseConnection"
      },
      "index": {
        "description": "Tell the remote endpoint we will no longer be using connection",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "CloseConnection",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Close Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:CloseSocket",
      "description": {
        "fct-descr": "\u003cp\u003eRequest to close the connection (see module description)\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "CloseSocket",
        "fct-source": "src/Network-Transport-TCP.html#ControlHeader",
        "fct-type": "function",
        "title": "CloseSocket"
      },
      "index": {
        "description": "Request to close the connection see module description",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "CloseSocket",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Close Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:ConnectionRequestAccepted",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eB\u003c/em\u003e accepts the connection\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "ConnectionRequestAccepted",
        "fct-source": "src/Network-Transport-TCP.html#ConnectionRequestResponse",
        "fct-type": "function",
        "title": "ConnectionRequestAccepted"
      },
      "index": {
        "description": "accepts the connection",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "ConnectionRequestAccepted",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Connection Request Accepted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:ConnectionRequestCrossed",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eA\u003c/em\u003es request crossed with a request from \u003cem\u003eB\u003c/em\u003e (see protocols)\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "ConnectionRequestCrossed",
        "fct-source": "src/Network-Transport-TCP.html#ConnectionRequestResponse",
        "fct-type": "function",
        "title": "ConnectionRequestCrossed"
      },
      "index": {
        "description": "request crossed with request from see protocols",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "ConnectionRequestCrossed",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Connection Request Crossed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:ConnectionRequestInvalid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eA\u003c/em\u003e requested an invalid endpoint\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "ConnectionRequestInvalid",
        "fct-source": "src/Network-Transport-TCP.html#ConnectionRequestResponse",
        "fct-type": "function",
        "title": "ConnectionRequestInvalid"
      },
      "index": {
        "description": "requested an invalid endpoint",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "ConnectionRequestInvalid",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Connection Request Invalid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:CreatedNewConnection",
      "description": {
        "fct-descr": "\u003cp\u003eTell the remote endpoint that we created a new connection\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "CreatedNewConnection",
        "fct-source": "src/Network-Transport-TCP.html#ControlHeader",
        "fct-type": "function",
        "title": "CreatedNewConnection"
      },
      "index": {
        "description": "Tell the remote endpoint that we created new connection",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "CreatedNewConnection",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Created New Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:TCPParameters",
      "description": {
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "TCPParameters",
        "fct-source": "src/Network-Transport-TCP.html#TCPParameters",
        "fct-type": "function",
        "title": "TCPParameters"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "TCPParameters",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "TCPParameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:TransportInternals",
      "description": {
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "TransportInternals",
        "fct-source": "src/Network-Transport-TCP.html#TransportInternals",
        "fct-type": "function",
        "title": "TransportInternals"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "TransportInternals",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Transport Internals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:createTransport",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a TCP transport\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "HostName -\u003e ServiceName -\u003e TCPParameters -\u003e IO (Either IOException Transport)",
        "fct-source": "src/Network-Transport-TCP.html#createTransport",
        "fct-type": "function",
        "title": "createTransport"
      },
      "index": {
        "description": "Create TCP transport",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "createTransport",
        "normalized": "HostName-\u003eServiceName-\u003eTCPParameters-\u003eIO(Either IOException Transport)",
        "package": "network-transport-tcp",
        "partial": "Transport",
        "signature": "HostName-\u003eServiceName-\u003eTCPParameters-\u003eIO(Either IOException Transport)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:createTransportExposeInternals",
      "description": {
        "fct-descr": "\u003cp\u003eYou should probably not use this function (used for unit testing only)\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "HostName -\u003e ServiceName -\u003e TCPParameters -\u003e IO (Either IOException (Transport, TransportInternals))",
        "fct-source": "src/Network-Transport-TCP.html#createTransportExposeInternals",
        "fct-type": "function",
        "title": "createTransportExposeInternals"
      },
      "index": {
        "description": "You should probably not use this function used for unit testing only",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "createTransportExposeInternals",
        "normalized": "HostName-\u003eServiceName-\u003eTCPParameters-\u003eIO(Either IOException(Transport,TransportInternals))",
        "package": "network-transport-tcp",
        "partial": "Transport Expose Internals",
        "signature": "HostName-\u003eServiceName-\u003eTCPParameters-\u003eIO(Either IOException(Transport,TransportInternals))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:decodeEndPointAddress",
      "description": {
        "fct-descr": "\u003cp\u003eDecode end point address\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "EndPointAddress -\u003e Maybe (HostName, ServiceName, EndPointId)",
        "fct-source": "src/Network-Transport-TCP.html#decodeEndPointAddress",
        "fct-type": "function",
        "title": "decodeEndPointAddress"
      },
      "index": {
        "description": "Decode end point address",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "decodeEndPointAddress",
        "normalized": "EndPointAddress-\u003eMaybe(HostName,ServiceName,EndPointId)",
        "package": "network-transport-tcp",
        "partial": "End Point Address",
        "signature": "EndPointAddress-\u003eMaybe(HostName,ServiceName,EndPointId)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:defaultTCPParameters",
      "description": {
        "fct-descr": "\u003cp\u003eDefault TCP parameters\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "TCPParameters",
        "fct-source": "src/Network-Transport-TCP.html#defaultTCPParameters",
        "fct-type": "function",
        "title": "defaultTCPParameters"
      },
      "index": {
        "description": "Default TCP parameters",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "defaultTCPParameters",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "TCPParameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:encodeEndPointAddress",
      "description": {
        "fct-descr": "\u003cp\u003eEncode end point address\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "HostName -\u003e ServiceName -\u003e EndPointId -\u003e EndPointAddress",
        "fct-source": "src/Network-Transport-TCP.html#encodeEndPointAddress",
        "fct-type": "function",
        "title": "encodeEndPointAddress"
      },
      "index": {
        "description": "Encode end point address",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "encodeEndPointAddress",
        "normalized": "HostName-\u003eServiceName-\u003eEndPointId-\u003eEndPointAddress",
        "package": "network-transport-tcp",
        "partial": "End Point Address",
        "signature": "HostName-\u003eServiceName-\u003eEndPointId-\u003eEndPointAddress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:firstNonReservedHeavyweightConnectionId",
      "description": {
        "fct-descr": "\u003cp\u003eWe reserve some connection IDs for special heavyweight connections\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "HeavyweightConnectionId",
        "fct-source": "src/Network-Transport-TCP.html#firstNonReservedHeavyweightConnectionId",
        "fct-type": "function",
        "title": "firstNonReservedHeavyweightConnectionId"
      },
      "index": {
        "description": "We reserve some connection IDs for special heavyweight connections",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "firstNonReservedHeavyweightConnectionId",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Non Reserved Heavyweight Connection Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:firstNonReservedLightweightConnectionId",
      "description": {
        "fct-descr": "\u003cp\u003eWe reserve a bunch of connection IDs for control messages\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "LightweightConnectionId",
        "fct-source": "src/Network-Transport-TCP.html#firstNonReservedLightweightConnectionId",
        "fct-type": "function",
        "title": "firstNonReservedLightweightConnectionId"
      },
      "index": {
        "description": "We reserve bunch of connection IDs for control messages",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "firstNonReservedLightweightConnectionId",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Non Reserved Lightweight Connection Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:socketBetween",
      "description": {
        "fct-descr": "\u003cp\u003eFind the socket between a local and a remote endpoint\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "EndPointAddress -\u003e EndPointAddress -\u003e IO Socket",
        "fct-source": "src/Network-Transport-TCP.html#TransportInternals",
        "fct-type": "function",
        "title": "socketBetween"
      },
      "index": {
        "description": "Find the socket between local and remote endpoint",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "socketBetween",
        "normalized": "EndPointAddress-\u003eEndPointAddress-\u003eIO Socket",
        "package": "network-transport-tcp",
        "partial": "Between",
        "signature": "EndPointAddress-\u003eEndPointAddress-\u003eIO Socket"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:socketToEndPoint",
      "description": {
        "fct-descr": "\u003cp\u003eEstablish a connection to a remote endpoint\n\u003c/p\u003e\u003cp\u003eMaybe throw a TransportError\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "EndPointAddress-\u003e EndPointAddress-\u003e Bool-\u003e Maybe Int-\u003e IO (Either (TransportError ConnectErrorCode) (Socket, ConnectionRequestResponse))",
        "fct-type": "function",
        "title": "socketToEndPoint"
      },
      "index": {
        "description": "Establish connection to remote endpoint Maybe throw TransportError",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "socketToEndPoint",
        "normalized": "EndPointAddress-\u003eEndPointAddress-\u003eBool-\u003eMaybe Int-\u003eIO(Either(TransportError ConnectErrorCode)(Socket,ConnectionRequestResponse))",
        "package": "network-transport-tcp",
        "partial": "To End Point",
        "signature": "EndPointAddress-\u003eEndPointAddress-\u003eBool-\u003eMaybe Int-\u003eIO(Either(TransportError ConnectErrorCode)(Socket,ConnectionRequestResponse))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:tcpBacklog",
      "description": {
        "fct-descr": "\u003cp\u003eBacklog for \u003ccode\u003elisten\u003c/code\u003e.\n Defaults to SOMAXCONN.\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "Int",
        "fct-source": "src/Network-Transport-TCP.html#TCPParameters",
        "fct-type": "function",
        "title": "tcpBacklog"
      },
      "index": {
        "description": "Backlog for listen Defaults to SOMAXCONN",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "tcpBacklog",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Backlog",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:tcpReuseClientAddr",
      "description": {
        "fct-descr": "\u003cp\u003eShould we set SO_REUSEADDR on client sockets?\n Defaults to True.\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "Bool",
        "fct-source": "src/Network-Transport-TCP.html#TCPParameters",
        "fct-type": "function",
        "title": "tcpReuseClientAddr"
      },
      "index": {
        "description": "Should we set SO REUSEADDR on client sockets Defaults to True",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "tcpReuseClientAddr",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Reuse Client Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:tcpReuseServerAddr",
      "description": {
        "fct-descr": "\u003cp\u003eShould we set SO_REUSEADDR on the server socket? \n Defaults to True.\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "Bool",
        "fct-source": "src/Network-Transport-TCP.html#TCPParameters",
        "fct-type": "function",
        "title": "tcpReuseServerAddr"
      },
      "index": {
        "description": "Should we set SO REUSEADDR on the server socket Defaults to True",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "tcpReuseServerAddr",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Reuse Server Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:transportThread",
      "description": {
        "fct-descr": "\u003cp\u003eThe ID of the thread that listens for new incoming connections\n\u003c/p\u003e",
        "fct-module": "Network.Transport.TCP",
        "fct-package": "network-transport-tcp",
        "fct-signature": "ThreadId",
        "fct-source": "src/Network-Transport-TCP.html#TransportInternals",
        "fct-type": "function",
        "title": "transportThread"
      },
      "index": {
        "description": "The ID of the thread that listens for new incoming connections",
        "hierarchy": "Network Transport TCP",
        "module": "Network.Transport.TCP",
        "name": "transportThread",
        "normalized": "",
        "package": "network-transport-tcp",
        "partial": "Thread",
        "signature": ""
      }
    }
  }
]