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
        "word": "network-simple"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports functions that abstract simple TCP \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e\n usage patterns.\n\u003c/p\u003e\u003cp\u003eThis module uses \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonadCatch\u003c/a\u003e\u003c/code\u003e extensively so that you can\n reuse these functions in monads other than \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e. However, if you don't care\n about any of that, just pretend you are using the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad all the time\n and everything will work as expected.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Simple.TCP",
          "name": "TCP",
          "package": "network-simple",
          "source": "src/Network-Simple-TCP.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports functions that abstract simple TCP Socket usage patterns This module uses MonadIO and MonadCatch extensively so that you can reuse these functions in monads other than IO However if you don care about any of that just pretend you are using the IO monad all the time and everything will work as expected",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "TCP",
          "package": "network-simple",
          "partial": "TCP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither a host name e.g., \u003ccode\u003e\"haskell.org\"\u003c/code\u003e or a numeric host\n address string consisting of a dotted decimal IPv4 address or an\n IPv6 address e.g., \u003ccode\u003e\"192.168.0.1\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "HostName",
          "package": "network-simple",
          "type": "type"
        },
        "index": {
          "description": "Either host name e.g haskell.org or numeric host address string consisting of dotted decimal IPv4 address or an IPv6 address e.g",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "HostName",
          "package": "network-simple",
          "partial": "Host Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#t:HostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreferred host to bind.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "HostPreference",
          "package": "network-simple",
          "source": "src/Network-Simple-Internal.html#HostPreference",
          "type": "data"
        },
        "index": {
          "description": "Preferred host to bind",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "HostPreference",
          "package": "network-simple",
          "partial": "Host Preference",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#t:HostPreference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Simple.TCP",
          "name": "ServiceName",
          "package": "network-simple",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "ServiceName",
          "package": "network-simple",
          "partial": "Service Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#t:ServiceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Simple.TCP",
          "name": "SockAddr",
          "package": "network-simple",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "SockAddr",
          "package": "network-simple",
          "partial": "Sock Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#t:SockAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Simple.TCP",
          "name": "Socket",
          "package": "network-simple",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "Socket",
          "package": "network-simple",
          "partial": "Socket",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#t:Socket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn explicit host name.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "Host",
          "package": "network-simple",
          "signature": "Host HostName",
          "source": "src/Network-Simple-Internal.html#HostPreference",
          "type": "function"
        },
        "index": {
          "description": "An explicit host name",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "Host",
          "package": "network-simple",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#v:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny available host.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "HostAny",
          "package": "network-simple",
          "signature": "HostAny",
          "source": "src/Network-Simple-Internal.html#HostPreference",
          "type": "function"
        },
        "index": {
          "description": "Any available host",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "HostAny",
          "package": "network-simple",
          "partial": "Host Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#v:HostAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny available IPv4 host.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "HostIPv4",
          "package": "network-simple",
          "signature": "HostIPv4",
          "source": "src/Network-Simple-Internal.html#HostPreference",
          "type": "function"
        },
        "index": {
          "description": "Any available IPv4 host",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "HostIPv4",
          "package": "network-simple",
          "partial": "Host IPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#v:HostIPv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny available IPv6 host.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "HostIPv6",
          "package": "network-simple",
          "signature": "HostIPv6",
          "source": "src/Network-Simple-Internal.html#HostPreference",
          "type": "function"
        },
        "index": {
          "description": "Any available IPv6 host",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "HostIPv6",
          "package": "network-simple",
          "partial": "Host IPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#v:HostIPv6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept a single incoming connection and use it.\n\u003c/p\u003e\u003cp\u003eThe connection socket is closed when done or in case of exceptions.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "accept",
          "package": "network-simple",
          "signature": "Socket-\u003e ((Socket, SockAddr) -\u003e m r)-\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Accept single incoming connection and use it The connection socket is closed when done or in case of exceptions",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "accept",
          "normalized": "Socket-\u003e((Socket,SockAddr)-\u003ea b)-\u003ea b",
          "package": "network-simple",
          "signature": "Socket-\u003e((Socket,SockAddr)-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#v:accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept a single incoming connection and use it in a different thread.\n\u003c/p\u003e\u003cp\u003eThe connection socket is closed when done or in case of exceptions.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "acceptFork",
          "package": "network-simple",
          "signature": "Socket-\u003e ((Socket, SockAddr) -\u003e IO ())-\u003e m ThreadId",
          "type": "function"
        },
        "index": {
          "description": "Accept single incoming connection and use it in different thread The connection socket is closed when done or in case of exceptions",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "acceptFork",
          "normalized": "Socket-\u003e((Socket,SockAddr)-\u003eIO())-\u003ea ThreadId",
          "package": "network-simple",
          "partial": "Fork",
          "signature": "Socket-\u003e((Socket,SockAddr)-\u003eIO())-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#v:acceptFork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain a \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e bound to the given host name and TCP service port.\n\u003c/p\u003e\u003cp\u003eThe obtained \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e should be closed manually using \u003ccode\u003e\u003ca\u003ecloseSock\u003c/a\u003e\u003c/code\u003e when\n it's not needed anymore.\n\u003c/p\u003e\u003cp\u003ePrefer to use \u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e if you will be listening on this socket and using it\n within a limited scope, and would like it to be closed immediately after its\n usage or in case of exceptions.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "bindSock",
          "package": "network-simple",
          "signature": "HostPreference -\u003e ServiceName -\u003e m (Socket, SockAddr)",
          "source": "src/Network-Simple-TCP.html#bindSock",
          "type": "function"
        },
        "index": {
          "description": "Obtain Socket bound to the given host name and TCP service port The obtained Socket should be closed manually using closeSock when it not needed anymore Prefer to use listen if you will be listening on this socket and using it within limited scope and would like it to be closed immediately after its usage or in case of exceptions",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "bindSock",
          "normalized": "HostPreference-\u003eServiceName-\u003ea(Socket,SockAddr)",
          "package": "network-simple",
          "partial": "Sock",
          "signature": "HostPreference-\u003eServiceName-\u003em(Socket,SockAddr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#v:bindSock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "closeSock",
          "package": "network-simple",
          "signature": "Socket -\u003e m ()",
          "source": "src/Network-Simple-TCP.html#closeSock",
          "type": "function"
        },
        "index": {
          "description": "Close the Socket",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "closeSock",
          "normalized": "Socket-\u003ea()",
          "package": "network-simple",
          "partial": "Sock",
          "signature": "Socket-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#v:closeSock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to a TCP server and use the connection.\n\u003c/p\u003e\u003cp\u003eThe connection socket is closed when done or in case of exceptions.\n\u003c/p\u003e\u003cp\u003eIf you prefer to acquire and close the socket yourself, then use\n \u003ccode\u003e\u003ca\u003econnectSock\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecloseSock\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "connect",
          "package": "network-simple",
          "signature": "HostName-\u003e ServiceName-\u003e ((Socket, SockAddr) -\u003e m r)-\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Connect to TCP server and use the connection The connection socket is closed when done or in case of exceptions If you prefer to acquire and close the socket yourself then use connectSock and closeSock",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "connect",
          "normalized": "HostName-\u003eServiceName-\u003e((Socket,SockAddr)-\u003ea b)-\u003ea b",
          "package": "network-simple",
          "signature": "HostName-\u003eServiceName-\u003e((Socket,SockAddr)-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain a \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e connected to the given host and TCP service port.\n\u003c/p\u003e\u003cp\u003eThe obtained \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e should be closed manually using \u003ccode\u003e\u003ca\u003ecloseSock\u003c/a\u003e\u003c/code\u003e when\n it's not needed anymore, otherwise you risk having the socket open for much\n longer than needed.\n\u003c/p\u003e\u003cp\u003ePrefer to use \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e if you will be using the socket within a limited\n scope and would like it to be closed immediately after its usage or in case\n of exceptions.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "connectSock",
          "package": "network-simple",
          "signature": "HostName -\u003e ServiceName -\u003e m (Socket, SockAddr)",
          "source": "src/Network-Simple-TCP.html#connectSock",
          "type": "function"
        },
        "index": {
          "description": "Obtain Socket connected to the given host and TCP service port The obtained Socket should be closed manually using closeSock when it not needed anymore otherwise you risk having the socket open for much longer than needed Prefer to use connect if you will be using the socket within limited scope and would like it to be closed immediately after its usage or in case of exceptions",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "connectSock",
          "normalized": "HostName-\u003eServiceName-\u003ea(Socket,SockAddr)",
          "package": "network-simple",
          "partial": "Sock",
          "signature": "HostName-\u003eServiceName-\u003em(Socket,SockAddr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#v:connectSock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind a TCP listening socket and use it.\n\u003c/p\u003e\u003cp\u003eThe listening socket is closed when done or in case of exceptions.\n\u003c/p\u003e\u003cp\u003eIf you prefer to acquire and close the socket yourself, then use \u003ccode\u003e\u003ca\u003ebindSock\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecloseSock\u003c/a\u003e\u003c/code\u003e and the \u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e function from \u003ca\u003eNetwork.Socket\u003c/a\u003e instead.\n\u003c/p\u003e\u003cp\u003eNote: \u003ccode\u003e\u003ca\u003emaxListenQueue\u003c/a\u003e\u003c/code\u003e is tipically 128, which is too small for high\n performance servers. So, we use the maximum between \u003ccode\u003e\u003ca\u003emaxListenQueue\u003c/a\u003e\u003c/code\u003e and\n 2048 as the default size of the listening queue. The \u003ccode\u003e\u003ca\u003eNoDelay\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eReuseAddr\u003c/a\u003e\u003c/code\u003e options are set on the socket.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "listen",
          "package": "network-simple",
          "signature": "HostPreference-\u003e ServiceName-\u003e ((Socket, SockAddr) -\u003e m r)-\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Bind TCP listening socket and use it The listening socket is closed when done or in case of exceptions If you prefer to acquire and close the socket yourself then use bindSock closeSock and the listen function from Network.Socket instead Note maxListenQueue is tipically which is too small for high performance servers So we use the maximum between maxListenQueue and as the default size of the listening queue The NoDelay and ReuseAddr options are set on the socket",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "listen",
          "normalized": "HostPreference-\u003eServiceName-\u003e((Socket,SockAddr)-\u003ea b)-\u003ea b",
          "package": "network-simple",
          "signature": "HostPreference-\u003eServiceName-\u003e((Socket,SockAddr)-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead up to a limited number of bytes from a socket.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the remote end closed the connection or end-of-input was\n reached. The number of returned bytes might be less than the specified limit.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "recv",
          "package": "network-simple",
          "signature": "Socket -\u003e Int -\u003e m (Maybe ByteString)",
          "source": "src/Network-Simple-TCP.html#recv",
          "type": "function"
        },
        "index": {
          "description": "Read up to limited number of bytes from socket Returns Nothing if the remote end closed the connection or end-of-input was reached The number of returned bytes might be less than the specified limit",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "recv",
          "normalized": "Socket-\u003eInt-\u003ea(Maybe ByteString)",
          "package": "network-simple",
          "signature": "Socket-\u003eInt-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#v:recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites the given bytes to the socket.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "send",
          "package": "network-simple",
          "signature": "Socket -\u003e ByteString -\u003e m ()",
          "source": "src/Network-Simple-TCP.html#send",
          "type": "function"
        },
        "index": {
          "description": "Writes the given bytes to the socket",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "send",
          "normalized": "Socket-\u003eByteString-\u003ea()",
          "package": "network-simple",
          "signature": "Socket-\u003eByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a TCP server that accepts incoming connections and handles them\n concurrently in different threads.\n\u003c/p\u003e\u003cp\u003eAny acquired network resources are properly closed and discarded when done or\n in case of exceptions.\n\u003c/p\u003e\u003cp\u003eNote: This function performs \u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eacceptFork\u003c/a\u003e\u003c/code\u003e, so you don't need to\n perform those manually.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "serve",
          "package": "network-simple",
          "signature": "HostPreference-\u003e ServiceName-\u003e ((Socket, SockAddr) -\u003e IO ())-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Start TCP server that accepts incoming connections and handles them concurrently in different threads Any acquired network resources are properly closed and discarded when done or in case of exceptions Note This function performs listen and acceptFork so you don need to perform those manually",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "serve",
          "normalized": "HostPreference-\u003eServiceName-\u003e((Socket,SockAddr)-\u003eIO())-\u003ea()",
          "package": "network-simple",
          "signature": "HostPreference-\u003eServiceName-\u003e((Socket,SockAddr)-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#v:serve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOn Windows operating systems, the networking subsystem has to be\ninitialised using \u003ccode\u003e\u003ca\u003ewithSocketsDo\u003c/a\u003e\u003c/code\u003e before any networking operations can\nbe used.  eg.\n\u003c/p\u003e\u003cpre\u003e main = withSocketsDo $ do {...}\n\u003c/pre\u003e\u003cp\u003eAlthough this is only strictly necessary on Windows platforms, it is\nharmless on other platforms, so for portability it is good practice to\nuse it all the time.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP",
          "name": "withSocketsDo",
          "package": "network-simple",
          "signature": "IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "On Windows operating systems the networking subsystem has to be initialised using withSocketsDo before any networking operations can be used eg main withSocketsDo do Although this is only strictly necessary on Windows platforms it is harmless on other platforms so for portability it is good practice to use it all the time",
          "hierarchy": "Network Simple TCP",
          "module": "Network.Simple.TCP",
          "name": "withSocketsDo",
          "normalized": "IO a-\u003eIO a",
          "package": "network-simple",
          "partial": "Sockets Do",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple/docs/Network-Simple-TCP.html#v:withSocketsDo"
      }
    }
  ]
]