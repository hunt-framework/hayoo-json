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
        "word": "network-transport-tcp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions for TCP sockets \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Transport.TCP.Internal",
          "name": "Internal",
          "package": "network-transport-tcp",
          "source": "src/Network-Transport-TCP-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Utility functions for TCP sockets",
          "hierarchy": "Network Transport TCP Internal",
          "module": "Network.Transport.TCP.Internal",
          "name": "Internal",
          "package": "network-transport-tcp",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a server at the specified address.\n\u003c/p\u003e\u003cp\u003eThis sets up a server socket for the specified host and port. Exceptions\n thrown during setup are not caught.\n\u003c/p\u003e\u003cp\u003eOnce the socket is created we spawn a new thread which repeatedly accepts\n incoming connections and executes the given request handler. If any\n exception occurs the thread terminates and calls the terminationHandler.\n This exception may occur because of a call to \u003ccode\u003e\u003ca\u003eaccept\u003c/a\u003e\u003c/code\u003e, because the thread\n was explicitly killed, or because of a synchronous exception thrown by the\n request handler. Typically, you should avoid the last case by catching any\n relevant exceptions in the request handler.\n\u003c/p\u003e\u003cp\u003eThe request handler should spawn threads to handle each individual request\n or the server will block. Once a thread has been spawned it will be the\n responsibility of the new thread to close the socket when an exception\n occurs. \n\u003c/p\u003e",
          "module": "Network.Transport.TCP.Internal",
          "name": "forkServer",
          "package": "network-transport-tcp",
          "signature": "HostName-\u003e ServiceName-\u003e Int-\u003e Bool-\u003e (SomeException -\u003e IO ())-\u003e (Socket -\u003e IO ())-\u003e IO ThreadId",
          "type": "function"
        },
        "index": {
          "description": "Start server at the specified address This sets up server socket for the specified host and port Exceptions thrown during setup are not caught Once the socket is created we spawn new thread which repeatedly accepts incoming connections and executes the given request handler If any exception occurs the thread terminates and calls the terminationHandler This exception may occur because of call to accept because the thread was explicitly killed or because of synchronous exception thrown by the request handler Typically you should avoid the last case by catching any relevant exceptions in the request handler The request handler should spawn threads to handle each individual request or the server will block Once thread has been spawned it will be the responsibility of the new thread to close the socket when an exception occurs",
          "hierarchy": "Network Transport TCP Internal",
          "module": "Network.Transport.TCP.Internal",
          "name": "forkServer",
          "normalized": "HostName-\u003eServiceName-\u003eInt-\u003eBool-\u003e(SomeException-\u003eIO())-\u003e(Socket-\u003eIO())-\u003eIO ThreadId",
          "package": "network-transport-tcp",
          "partial": "Server",
          "signature": "HostName-\u003eServiceName-\u003eInt-\u003eBool-\u003e(SomeException-\u003eIO())-\u003e(Socket-\u003eIO())-\u003eIO ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP-Internal.html#v:forkServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an exact number of bytes from a socket\n\u003c/p\u003e\u003cp\u003eThrows an I/O exception if the socket closes before the specified\n number of bytes could be read\n\u003c/p\u003e",
          "module": "Network.Transport.TCP.Internal",
          "name": "recvExact",
          "package": "network-transport-tcp",
          "signature": "Socket-\u003e Int32-\u003e IO [ByteString]",
          "type": "function"
        },
        "index": {
          "description": "Read an exact number of bytes from socket Throws an exception if the socket closes before the specified number of bytes could be read",
          "hierarchy": "Network Transport TCP Internal",
          "module": "Network.Transport.TCP.Internal",
          "name": "recvExact",
          "normalized": "Socket-\u003eInt-\u003eIO[ByteString]",
          "package": "network-transport-tcp",
          "partial": "Exact",
          "signature": "Socket-\u003eInt-\u003eIO[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP-Internal.html#v:recvExact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive a 32-bit integer\n\u003c/p\u003e",
          "module": "Network.Transport.TCP.Internal",
          "name": "recvInt32",
          "package": "network-transport-tcp",
          "signature": "Socket -\u003e IO a",
          "source": "src/Network-Transport-TCP-Internal.html#recvInt32",
          "type": "function"
        },
        "index": {
          "description": "Receive bit integer",
          "hierarchy": "Network Transport TCP Internal",
          "module": "Network.Transport.TCP.Internal",
          "name": "recvInt32",
          "normalized": "Socket-\u003eIO a",
          "package": "network-transport-tcp",
          "partial": "Int",
          "signature": "Socket-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP-Internal.html#v:recvInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a length and then a payload of that length\n\u003c/p\u003e",
          "module": "Network.Transport.TCP.Internal",
          "name": "recvWithLength",
          "package": "network-transport-tcp",
          "signature": "Socket -\u003e IO [ByteString]",
          "source": "src/Network-Transport-TCP-Internal.html#recvWithLength",
          "type": "function"
        },
        "index": {
          "description": "Read length and then payload of that length",
          "hierarchy": "Network Transport TCP Internal",
          "module": "Network.Transport.TCP.Internal",
          "name": "recvWithLength",
          "normalized": "Socket-\u003eIO[ByteString]",
          "package": "network-transport-tcp",
          "partial": "With Length",
          "signature": "Socket-\u003eIO[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP-Internal.html#v:recvWithLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose a socket, ignoring I/O exceptions\n\u003c/p\u003e",
          "module": "Network.Transport.TCP.Internal",
          "name": "tryCloseSocket",
          "package": "network-transport-tcp",
          "signature": "Socket -\u003e IO ()",
          "source": "src/Network-Transport-TCP-Internal.html#tryCloseSocket",
          "type": "function"
        },
        "index": {
          "description": "Close socket ignoring exceptions",
          "hierarchy": "Network Transport TCP Internal",
          "module": "Network.Transport.TCP.Internal",
          "name": "tryCloseSocket",
          "normalized": "Socket-\u003eIO()",
          "package": "network-transport-tcp",
          "partial": "Close Socket",
          "signature": "Socket-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP-Internal.html#v:tryCloseSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTCP implementation of the transport layer. \n\u003c/p\u003e\u003cp\u003eThe TCP implementation guarantees that only a single TCP connection (socket)\n will be used between endpoints, provided that the addresses specified are\n canonical. If \u003cem\u003eA\u003c/em\u003e connects to \u003cem\u003eB\u003c/em\u003e and reports its address as\n \u003ccode\u003e192.168.0.1:8080\u003c/code\u003e and \u003cem\u003eB\u003c/em\u003e subsequently connects tries to connect to \u003cem\u003eA\u003c/em\u003e as\n \u003ccode\u003eclient1.local:http-alt\u003c/code\u003e then the transport layer will not realize that the\n TCP connection can be reused. \n\u003c/p\u003e\u003cp\u003eApplications that use the TCP transport should use\n \u003ccode\u003e\u003ca\u003ewithSocketsDo\u003c/a\u003e\u003c/code\u003e in their main function for Windows\n compatibility (see \u003ca\u003eNetwork.Socket\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Transport.TCP",
          "name": "TCP",
          "package": "network-transport-tcp",
          "source": "src/Network-Transport-TCP.html",
          "type": "module"
        },
        "index": {
          "description": "TCP implementation of the transport layer The TCP implementation guarantees that only single TCP connection socket will be used between endpoints provided that the addresses specified are canonical If connects to and reports its address as and subsequently connects tries to connect to as client1.local http-alt then the transport layer will not realize that the TCP connection can be reused Applications that use the TCP transport should use withSocketsDo in their main function for Windows compatibility see Network.Socket",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "TCP",
          "package": "network-transport-tcp",
          "partial": "TCP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse sent by \u003cem\u003eB\u003c/em\u003e to \u003cem\u003eA\u003c/em\u003e when \u003cem\u003eA\u003c/em\u003e tries to connect\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "ConnectionRequestResponse",
          "package": "network-transport-tcp",
          "source": "src/Network-Transport-TCP.html#ConnectionRequestResponse",
          "type": "data"
        },
        "index": {
          "description": "Response sent by to when tries to connect",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "ConnectionRequestResponse",
          "package": "network-transport-tcp",
          "partial": "Connection Request Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#t:ConnectionRequestResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eControl headers \n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "ControlHeader",
          "package": "network-transport-tcp",
          "source": "src/Network-Transport-TCP.html#ControlHeader",
          "type": "data"
        },
        "index": {
          "description": "Control headers",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "ControlHeader",
          "package": "network-transport-tcp",
          "partial": "Control Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#t:ControlHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal identifier for an endpoint within this transport\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "EndPointId",
          "package": "network-transport-tcp",
          "source": "src/Network-Transport-TCP.html#EndPointId",
          "type": "type"
        },
        "index": {
          "description": "Local identifier for an endpoint within this transport",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "EndPointId",
          "package": "network-transport-tcp",
          "partial": "End Point Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#t:EndPointId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLightweight connection ID (sender allocated)\n\u003c/p\u003e\u003cp\u003eA ConnectionId is the concentation of a \u003ccode\u003eHeavyweightConnectionId\u003c/code\u003e and a\n \u003ccode\u003e\u003ca\u003eLightweightConnectionId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "LightweightConnectionId",
          "package": "network-transport-tcp",
          "source": "src/Network-Transport-TCP.html#LightweightConnectionId",
          "type": "type"
        },
        "index": {
          "description": "Lightweight connection ID sender allocated ConnectionId is the concentation of HeavyweightConnectionId and LightweightConnectionId",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "LightweightConnectionId",
          "package": "network-transport-tcp",
          "partial": "Lightweight Connection Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#t:LightweightConnectionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameters for setting up the TCP transport\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "TCPParameters",
          "package": "network-transport-tcp",
          "source": "src/Network-Transport-TCP.html#TCPParameters",
          "type": "data"
        },
        "index": {
          "description": "Parameters for setting up the TCP transport",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "TCPParameters",
          "package": "network-transport-tcp",
          "partial": "TCPParameters",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#t:TCPParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal functionality we expose for unit testing\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "TransportInternals",
          "package": "network-transport-tcp",
          "source": "src/Network-Transport-TCP.html#TransportInternals",
          "type": "data"
        },
        "index": {
          "description": "Internal functionality we expose for unit testing",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "TransportInternals",
          "package": "network-transport-tcp",
          "partial": "Transport Internals",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#t:TransportInternals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTell the remote endpoint we will no longer be using a connection\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "CloseConnection",
          "package": "network-transport-tcp",
          "signature": "CloseConnection",
          "source": "src/Network-Transport-TCP.html#ControlHeader",
          "type": "function"
        },
        "index": {
          "description": "Tell the remote endpoint we will no longer be using connection",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "CloseConnection",
          "package": "network-transport-tcp",
          "partial": "Close Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:CloseConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest to close the connection (see module description)\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "CloseSocket",
          "package": "network-transport-tcp",
          "signature": "CloseSocket",
          "source": "src/Network-Transport-TCP.html#ControlHeader",
          "type": "function"
        },
        "index": {
          "description": "Request to close the connection see module description",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "CloseSocket",
          "package": "network-transport-tcp",
          "partial": "Close Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:CloseSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eB\u003c/em\u003e accepts the connection\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "ConnectionRequestAccepted",
          "package": "network-transport-tcp",
          "signature": "ConnectionRequestAccepted",
          "source": "src/Network-Transport-TCP.html#ConnectionRequestResponse",
          "type": "function"
        },
        "index": {
          "description": "accepts the connection",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "ConnectionRequestAccepted",
          "package": "network-transport-tcp",
          "partial": "Connection Request Accepted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:ConnectionRequestAccepted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eA\u003c/em\u003es request crossed with a request from \u003cem\u003eB\u003c/em\u003e (see protocols)\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "ConnectionRequestCrossed",
          "package": "network-transport-tcp",
          "signature": "ConnectionRequestCrossed",
          "source": "src/Network-Transport-TCP.html#ConnectionRequestResponse",
          "type": "function"
        },
        "index": {
          "description": "request crossed with request from see protocols",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "ConnectionRequestCrossed",
          "package": "network-transport-tcp",
          "partial": "Connection Request Crossed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:ConnectionRequestCrossed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eA\u003c/em\u003e requested an invalid endpoint\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "ConnectionRequestInvalid",
          "package": "network-transport-tcp",
          "signature": "ConnectionRequestInvalid",
          "source": "src/Network-Transport-TCP.html#ConnectionRequestResponse",
          "type": "function"
        },
        "index": {
          "description": "requested an invalid endpoint",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "ConnectionRequestInvalid",
          "package": "network-transport-tcp",
          "partial": "Connection Request Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:ConnectionRequestInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTell the remote endpoint that we created a new connection\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "CreatedNewConnection",
          "package": "network-transport-tcp",
          "signature": "CreatedNewConnection",
          "source": "src/Network-Transport-TCP.html#ControlHeader",
          "type": "function"
        },
        "index": {
          "description": "Tell the remote endpoint that we created new connection",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "CreatedNewConnection",
          "package": "network-transport-tcp",
          "partial": "Created New Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:CreatedNewConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.TCP",
          "name": "TCPParameters",
          "package": "network-transport-tcp",
          "signature": "TCPParameters",
          "source": "src/Network-Transport-TCP.html#TCPParameters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "TCPParameters",
          "package": "network-transport-tcp",
          "partial": "TCPParameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:TCPParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Transport.TCP",
          "name": "TransportInternals",
          "package": "network-transport-tcp",
          "signature": "TransportInternals",
          "source": "src/Network-Transport-TCP.html#TransportInternals",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "TransportInternals",
          "package": "network-transport-tcp",
          "partial": "Transport Internals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:TransportInternals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a TCP transport\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "createTransport",
          "package": "network-transport-tcp",
          "signature": "HostName -\u003e ServiceName -\u003e TCPParameters -\u003e IO (Either IOException Transport)",
          "source": "src/Network-Transport-TCP.html#createTransport",
          "type": "function"
        },
        "index": {
          "description": "Create TCP transport",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "createTransport",
          "normalized": "HostName-\u003eServiceName-\u003eTCPParameters-\u003eIO(Either IOException Transport)",
          "package": "network-transport-tcp",
          "partial": "Transport",
          "signature": "HostName-\u003eServiceName-\u003eTCPParameters-\u003eIO(Either IOException Transport)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:createTransport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou should probably not use this function (used for unit testing only)\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "createTransportExposeInternals",
          "package": "network-transport-tcp",
          "signature": "HostName -\u003e ServiceName -\u003e TCPParameters -\u003e IO (Either IOException (Transport, TransportInternals))",
          "source": "src/Network-Transport-TCP.html#createTransportExposeInternals",
          "type": "function"
        },
        "index": {
          "description": "You should probably not use this function used for unit testing only",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "createTransportExposeInternals",
          "normalized": "HostName-\u003eServiceName-\u003eTCPParameters-\u003eIO(Either IOException(Transport,TransportInternals))",
          "package": "network-transport-tcp",
          "partial": "Transport Expose Internals",
          "signature": "HostName-\u003eServiceName-\u003eTCPParameters-\u003eIO(Either IOException(Transport,TransportInternals))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:createTransportExposeInternals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode end point address\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "decodeEndPointAddress",
          "package": "network-transport-tcp",
          "signature": "EndPointAddress -\u003e Maybe (HostName, ServiceName, EndPointId)",
          "source": "src/Network-Transport-TCP.html#decodeEndPointAddress",
          "type": "function"
        },
        "index": {
          "description": "Decode end point address",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "decodeEndPointAddress",
          "normalized": "EndPointAddress-\u003eMaybe(HostName,ServiceName,EndPointId)",
          "package": "network-transport-tcp",
          "partial": "End Point Address",
          "signature": "EndPointAddress-\u003eMaybe(HostName,ServiceName,EndPointId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:decodeEndPointAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault TCP parameters\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "defaultTCPParameters",
          "package": "network-transport-tcp",
          "signature": "TCPParameters",
          "source": "src/Network-Transport-TCP.html#defaultTCPParameters",
          "type": "function"
        },
        "index": {
          "description": "Default TCP parameters",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "defaultTCPParameters",
          "package": "network-transport-tcp",
          "partial": "TCPParameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:defaultTCPParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode end point address\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "encodeEndPointAddress",
          "package": "network-transport-tcp",
          "signature": "HostName -\u003e ServiceName -\u003e EndPointId -\u003e EndPointAddress",
          "source": "src/Network-Transport-TCP.html#encodeEndPointAddress",
          "type": "function"
        },
        "index": {
          "description": "Encode end point address",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "encodeEndPointAddress",
          "normalized": "HostName-\u003eServiceName-\u003eEndPointId-\u003eEndPointAddress",
          "package": "network-transport-tcp",
          "partial": "End Point Address",
          "signature": "HostName-\u003eServiceName-\u003eEndPointId-\u003eEndPointAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:encodeEndPointAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe reserve some connection IDs for special heavyweight connections\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "firstNonReservedHeavyweightConnectionId",
          "package": "network-transport-tcp",
          "signature": "HeavyweightConnectionId",
          "source": "src/Network-Transport-TCP.html#firstNonReservedHeavyweightConnectionId",
          "type": "function"
        },
        "index": {
          "description": "We reserve some connection IDs for special heavyweight connections",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "firstNonReservedHeavyweightConnectionId",
          "package": "network-transport-tcp",
          "partial": "Non Reserved Heavyweight Connection Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:firstNonReservedHeavyweightConnectionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe reserve a bunch of connection IDs for control messages\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "firstNonReservedLightweightConnectionId",
          "package": "network-transport-tcp",
          "signature": "LightweightConnectionId",
          "source": "src/Network-Transport-TCP.html#firstNonReservedLightweightConnectionId",
          "type": "function"
        },
        "index": {
          "description": "We reserve bunch of connection IDs for control messages",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "firstNonReservedLightweightConnectionId",
          "package": "network-transport-tcp",
          "partial": "Non Reserved Lightweight Connection Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:firstNonReservedLightweightConnectionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the socket between a local and a remote endpoint\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "socketBetween",
          "package": "network-transport-tcp",
          "signature": "EndPointAddress -\u003e EndPointAddress -\u003e IO Socket",
          "source": "src/Network-Transport-TCP.html#TransportInternals",
          "type": "function"
        },
        "index": {
          "description": "Find the socket between local and remote endpoint",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "socketBetween",
          "normalized": "EndPointAddress-\u003eEndPointAddress-\u003eIO Socket",
          "package": "network-transport-tcp",
          "partial": "Between",
          "signature": "EndPointAddress-\u003eEndPointAddress-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:socketBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablish a connection to a remote endpoint\n\u003c/p\u003e\u003cp\u003eMaybe throw a TransportError\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "socketToEndPoint",
          "package": "network-transport-tcp",
          "signature": "EndPointAddress-\u003e EndPointAddress-\u003e Bool-\u003e Maybe Int-\u003e IO (Either (TransportError ConnectErrorCode) (Socket, ConnectionRequestResponse))",
          "type": "function"
        },
        "index": {
          "description": "Establish connection to remote endpoint Maybe throw TransportError",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "socketToEndPoint",
          "normalized": "EndPointAddress-\u003eEndPointAddress-\u003eBool-\u003eMaybe Int-\u003eIO(Either(TransportError ConnectErrorCode)(Socket,ConnectionRequestResponse))",
          "package": "network-transport-tcp",
          "partial": "To End Point",
          "signature": "EndPointAddress-\u003eEndPointAddress-\u003eBool-\u003eMaybe Int-\u003eIO(Either(TransportError ConnectErrorCode)(Socket,ConnectionRequestResponse))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:socketToEndPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacklog for \u003ccode\u003elisten\u003c/code\u003e.\n Defaults to SOMAXCONN.\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "tcpBacklog",
          "package": "network-transport-tcp",
          "signature": "Int",
          "source": "src/Network-Transport-TCP.html#TCPParameters",
          "type": "function"
        },
        "index": {
          "description": "Backlog for listen Defaults to SOMAXCONN",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "tcpBacklog",
          "package": "network-transport-tcp",
          "partial": "Backlog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:tcpBacklog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould we set SO_REUSEADDR on client sockets?\n Defaults to True.\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "tcpReuseClientAddr",
          "package": "network-transport-tcp",
          "signature": "Bool",
          "source": "src/Network-Transport-TCP.html#TCPParameters",
          "type": "function"
        },
        "index": {
          "description": "Should we set SO REUSEADDR on client sockets Defaults to True",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "tcpReuseClientAddr",
          "package": "network-transport-tcp",
          "partial": "Reuse Client Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:tcpReuseClientAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould we set SO_REUSEADDR on the server socket? \n Defaults to True.\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "tcpReuseServerAddr",
          "package": "network-transport-tcp",
          "signature": "Bool",
          "source": "src/Network-Transport-TCP.html#TCPParameters",
          "type": "function"
        },
        "index": {
          "description": "Should we set SO REUSEADDR on the server socket Defaults to True",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "tcpReuseServerAddr",
          "package": "network-transport-tcp",
          "partial": "Reuse Server Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:tcpReuseServerAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ID of the thread that listens for new incoming connections\n\u003c/p\u003e",
          "module": "Network.Transport.TCP",
          "name": "transportThread",
          "package": "network-transport-tcp",
          "signature": "ThreadId",
          "source": "src/Network-Transport-TCP.html#TransportInternals",
          "type": "function"
        },
        "index": {
          "description": "The ID of the thread that listens for new incoming connections",
          "hierarchy": "Network Transport TCP",
          "module": "Network.Transport.TCP",
          "name": "transportThread",
          "package": "network-transport-tcp",
          "partial": "Thread",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-transport-tcp/docs/Network-Transport-TCP.html#v:transportThread"
      }
    }
  ]
]