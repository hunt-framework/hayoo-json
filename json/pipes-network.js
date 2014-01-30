[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-network/docs/Pipes-Network-TCP-Safe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports facilities allowing you to safely obtain, use and\n release \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e resources within a \u003cem\u003ePipes\u003c/em\u003e pipeline, by relying on\n \u003ccode\u003epipes-safe\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is meant to be used as a replacement of \u003ca\u003ePipes.Network.TCP\u003c/a\u003e,\n and as such it overrides some functions from \u003ca\u003eNetwork.Simple.TCP\u003c/a\u003e so that\n they use \u003ccode\u003e\u003ca\u003eMonadSafe\u003c/a\u003e\u003c/code\u003e instead of \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e as their base monad. Additionally,\n It also exports pipes that establish a TCP connection and interact with\n it in a streaming fashion at once.\n\u003c/p\u003e\u003cp\u003eIf you just want to use \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e obtained outside the \u003cem\u003ePipes\u003c/em\u003e pipeline,\n then you can just ignore this module and use the simpler module\n \u003ca\u003ePipes.Network.TCP\u003c/a\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Network.TCP.Safe",
        "fct-package": "pipes-network",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Network-TCP-Safe.html",
        "fct-type": "module",
        "title": "Safe"
      },
      "index": {
        "description": "This module exports facilities allowing you to safely obtain use and release Socket resources within Pipes pipeline by relying on pipes-safe This module is meant to be used as replacement of Pipes.Network.TCP and as such it overrides some functions from Network.Simple.TCP so that they use MonadSafe instead of IO as their base monad Additionally It also exports pipes that establish TCP connection and interact with it in streaming fashion at once If you just want to use Socket obtained outside the Pipes pipeline then you can just ignore this module and use the simpler module Pipes.Network.TCP instead",
        "hierarchy": "Pipes Network TCP Safe",
        "module": "Pipes.Network.TCP.Safe",
        "name": "Safe",
        "normalized": "",
        "package": "pipes-network",
        "partial": "Safe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-network/docs/Pipes-Network-TCP-Safe.html#v:accept",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eaccept\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eNetwork.Simple.TCP\u003c/a\u003e, but compatible\n with \u003ccode\u003e\u003ca\u003eMonadSafe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Network.TCP.Safe",
        "fct-package": "pipes-network",
        "fct-signature": "Socket -\u003e ((Socket, SockAddr) -\u003e m r) -\u003e m r",
        "fct-source": "src/Pipes-Network-TCP-Safe.html#accept",
        "fct-type": "function",
        "title": "accept"
      },
      "index": {
        "description": "Like accept from Network.Simple.TCP but compatible with MonadSafe",
        "hierarchy": "Pipes Network TCP Safe",
        "module": "Pipes.Network.TCP.Safe",
        "name": "accept",
        "normalized": "Socket-\u003e((Socket,SockAddr)-\u003ea b)-\u003ea b",
        "package": "pipes-network",
        "partial": "",
        "signature": "Socket-\u003e((Socket,SockAddr)-\u003em r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-network/docs/Pipes-Network-TCP-Safe.html#v:connect",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eNetwork.Simple.TCP\u003c/a\u003e, but compatible\n with \u003ccode\u003e\u003ca\u003eMonadSafe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Network.TCP.Safe",
        "fct-package": "pipes-network",
        "fct-signature": "HostName -\u003e ServiceName -\u003e ((Socket, SockAddr) -\u003e m r) -\u003e m r",
        "fct-source": "src/Pipes-Network-TCP-Safe.html#connect",
        "fct-type": "function",
        "title": "connect"
      },
      "index": {
        "description": "Like connect from Network.Simple.TCP but compatible with MonadSafe",
        "hierarchy": "Pipes Network TCP Safe",
        "module": "Pipes.Network.TCP.Safe",
        "name": "connect",
        "normalized": "HostName-\u003eServiceName-\u003e((Socket,SockAddr)-\u003ea b)-\u003ea b",
        "package": "pipes-network",
        "partial": "",
        "signature": "HostName-\u003eServiceName-\u003e((Socket,SockAddr)-\u003em r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-network/docs/Pipes-Network-TCP-Safe.html#v:fromConnect",
      "description": {
        "fct-descr": "\u003cp\u003eConnect to a TCP server and send downstream the bytes received from the\n remote end.\n\u003c/p\u003e\u003cp\u003eThe connection socket is closed when done or in case of exceptions.\n\u003c/p\u003e\u003cp\u003eUsing this \u003ccode\u003e\u003ca\u003eProducer'\u003c/a\u003e\u003c/code\u003e you can write straightforward code like the following,\n which prints whatever is received from a single TCP connection to a given\n server listening locally on port 9000, in chunks of up to 4096 bytes:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunSafeT . runEffect $ fromConnect 4096 \"127.0.0.1\" \"9000\" \u003e-\u003e P.print\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
        "fct-module": "Pipes.Network.TCP.Safe",
        "fct-package": "pipes-network",
        "fct-signature": "Int-\u003e HostName-\u003e ServiceName-\u003e Producer' ByteString m ()",
        "fct-type": "function",
        "title": "fromConnect"
      },
      "index": {
        "description": "Connect to TCP server and send downstream the bytes received from the remote end The connection socket is closed when done or in case of exceptions Using this Producer you can write straightforward code like the following which prints whatever is received from single TCP connection to given server listening locally on port in chunks of up to bytes runSafeT runEffect fromConnect P.print",
        "hierarchy": "Pipes Network TCP Safe",
        "module": "Pipes.Network.TCP.Safe",
        "name": "fromConnect",
        "normalized": "Int-\u003eHostName-\u003eServiceName-\u003eProducer' ByteString a()",
        "package": "pipes-network",
        "partial": "Connect",
        "signature": "Int-\u003eHostName-\u003eServiceName-\u003eProducer' ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-network/docs/Pipes-Network-TCP-Safe.html#v:fromServe",
      "description": {
        "fct-descr": "\u003cp\u003eBinds a listening socket, accepts a single connection and sends downstream\n any bytes received from the remote end.\n\u003c/p\u003e\u003cp\u003eLess than the specified maximum number of bytes might be received at once.\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eProducer'\u003c/a\u003e\u003c/code\u003e returns if the remote peer closes its side of the connection\n or EOF is received.\n\u003c/p\u003e\u003cp\u003eBoth the listening and connection sockets are closed when done or in case of\n exceptions.\n\u003c/p\u003e\u003cp\u003eUsing this \u003ccode\u003e\u003ca\u003eProducer'\u003c/a\u003e\u003c/code\u003e you can write straightforward code like the following,\n which prints whatever is received from a single TCP connection to port 9000,\n in chunks of up to 4096 bytes.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XOverloadedStrings\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunSafeT . runEffect $ fromServe 4096 \"127.0.0.1\" \"9000\" \u003e-\u003e P.print\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
        "fct-module": "Pipes.Network.TCP.Safe",
        "fct-package": "pipes-network",
        "fct-signature": "Int-\u003e HostPreference-\u003e ServiceName-\u003e Producer' ByteString m ()",
        "fct-type": "function",
        "title": "fromServe"
      },
      "index": {
        "description": "Binds listening socket accepts single connection and sends downstream any bytes received from the remote end Less than the specified maximum number of bytes might be received at once This Producer returns if the remote peer closes its side of the connection or EOF is received Both the listening and connection sockets are closed when done or in case of exceptions Using this Producer you can write straightforward code like the following which prints whatever is received from single TCP connection to port in chunks of up to bytes set XOverloadedStrings runSafeT runEffect fromServe P.print",
        "hierarchy": "Pipes Network TCP Safe",
        "module": "Pipes.Network.TCP.Safe",
        "name": "fromServe",
        "normalized": "Int-\u003eHostPreference-\u003eServiceName-\u003eProducer' ByteString a()",
        "package": "pipes-network",
        "partial": "Serve",
        "signature": "Int-\u003eHostPreference-\u003eServiceName-\u003eProducer' ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-network/docs/Pipes-Network-TCP-Safe.html#v:listen",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eNetwork.Simple.TCP\u003c/a\u003e, but compatible\n with \u003ccode\u003e\u003ca\u003eMonadSafe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Network.TCP.Safe",
        "fct-package": "pipes-network",
        "fct-signature": "HostPreference -\u003e ServiceName -\u003e ((Socket, SockAddr) -\u003e m r) -\u003e m r",
        "fct-source": "src/Pipes-Network-TCP-Safe.html#listen",
        "fct-type": "function",
        "title": "listen"
      },
      "index": {
        "description": "Like listen from Network.Simple.TCP but compatible with MonadSafe",
        "hierarchy": "Pipes Network TCP Safe",
        "module": "Pipes.Network.TCP.Safe",
        "name": "listen",
        "normalized": "HostPreference-\u003eServiceName-\u003e((Socket,SockAddr)-\u003ea b)-\u003ea b",
        "package": "pipes-network",
        "partial": "",
        "signature": "HostPreference-\u003eServiceName-\u003e((Socket,SockAddr)-\u003em r)-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-network/docs/Pipes-Network-TCP-Safe.html#v:serve",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eserve\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eNetwork.Simple.TCP\u003c/a\u003e, but compatible\n with \u003ccode\u003e\u003ca\u003eMonadSafe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Network.TCP.Safe",
        "fct-package": "pipes-network",
        "fct-signature": "HostPreference -\u003e ServiceName -\u003e ((Socket, SockAddr) -\u003e IO ()) -\u003e m r",
        "fct-source": "src/Pipes-Network-TCP-Safe.html#serve",
        "fct-type": "function",
        "title": "serve"
      },
      "index": {
        "description": "Like serve from Network.Simple.TCP but compatible with MonadSafe",
        "hierarchy": "Pipes Network TCP Safe",
        "module": "Pipes.Network.TCP.Safe",
        "name": "serve",
        "normalized": "HostPreference-\u003eServiceName-\u003e((Socket,SockAddr)-\u003eIO())-\u003ea b",
        "package": "pipes-network",
        "partial": "",
        "signature": "HostPreference-\u003eServiceName-\u003e((Socket,SockAddr)-\u003eIO())-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-network/docs/Pipes-Network-TCP-Safe.html#v:toConnect",
      "description": {
        "fct-descr": "\u003cp\u003eConnects to a TCP server, sends to the remote end the bytes received from\n upstream.\n\u003c/p\u003e\u003cp\u003eThe connection socket is closed in case of exceptions.\n\u003c/p\u003e\u003cp\u003eUsing this \u003ccode\u003e\u003ca\u003eConsumer'\u003c/a\u003e\u003c/code\u003e you can write straightforward code like the following,\n which greets a TCP client listening locally at port 9000:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XOverloadedStrings\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunSafeT . runEffect $ each [\"He\",\"llo\\r\\n\"] \u003e-\u003e toConnect \"127.0.0.1\" \"9000\"\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
        "fct-module": "Pipes.Network.TCP.Safe",
        "fct-package": "pipes-network",
        "fct-signature": "HostName-\u003e ServiceName-\u003e Consumer' ByteString m r",
        "fct-type": "function",
        "title": "toConnect"
      },
      "index": {
        "description": "Connects to TCP server sends to the remote end the bytes received from upstream The connection socket is closed in case of exceptions Using this Consumer you can write straightforward code like the following which greets TCP client listening locally at port set XOverloadedStrings runSafeT runEffect each He llo toConnect",
        "hierarchy": "Pipes Network TCP Safe",
        "module": "Pipes.Network.TCP.Safe",
        "name": "toConnect",
        "normalized": "HostName-\u003eServiceName-\u003eConsumer' ByteString a b",
        "package": "pipes-network",
        "partial": "Connect",
        "signature": "HostName-\u003eServiceName-\u003eConsumer' ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-network/docs/Pipes-Network-TCP-Safe.html#v:toServe",
      "description": {
        "fct-descr": "\u003cp\u003eBinds a listening socket, accepts a single connection, sends to the remote\n end the bytes received from upstream.\n\u003c/p\u003e\u003cp\u003eBoth the listening and connection sockets are closed when done or in case of\n exceptions.\n\u003c/p\u003e\u003cp\u003eUsing this \u003ccode\u003e\u003ca\u003eConsumer'\u003c/a\u003e\u003c/code\u003e you can write straightforward code like the following,\n which greets a TCP client connecting to port 9000:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XOverloadedStrings\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunSafeT . runEffect $ each [\"He\",\"llo\\r\\n\"] \u003e-\u003e toServe \"127.0.0.1\" \"9000\"\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
        "fct-module": "Pipes.Network.TCP.Safe",
        "fct-package": "pipes-network",
        "fct-signature": "HostPreference-\u003e ServiceName-\u003e Consumer' ByteString m r",
        "fct-type": "function",
        "title": "toServe"
      },
      "index": {
        "description": "Binds listening socket accepts single connection sends to the remote end the bytes received from upstream Both the listening and connection sockets are closed when done or in case of exceptions Using this Consumer you can write straightforward code like the following which greets TCP client connecting to port set XOverloadedStrings runSafeT runEffect each He llo toServe",
        "hierarchy": "Pipes Network TCP Safe",
        "module": "Pipes.Network.TCP.Safe",
        "name": "toServe",
        "normalized": "HostPreference-\u003eServiceName-\u003eConsumer' ByteString a b",
        "package": "pipes-network",
        "partial": "Serve",
        "signature": "HostPreference-\u003eServiceName-\u003eConsumer' ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-network/docs/Pipes-Network-TCP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis minimal module exports facilities that ease the usage of TCP\n \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003es in the \u003cem\u003ePipes ecosystem\u003c/em\u003e. It is meant to be used together with\n the \u003ca\u003eNetwork.Simple.TCP\u003c/a\u003e module from the \u003ccode\u003enetwork-simple\u003c/code\u003e package, which is\n completely re-exported from this module.\n\u003c/p\u003e\u003cp\u003eThis module \u003cem\u003edoes not\u003c/em\u003e export facilities that would allow you to acquire new\n \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003es within a pipeline. If you need to do so, then you should use\n \u003ca\u003ePipes.Network.TCP.Safe\u003c/a\u003e instead, which exports a similar API to the one\n exported by this module. However, don't be confused by the word &#8220;safe&#8221; in\n that module; this module is equally safe to use as long as you don't try to\n acquire resources within the pipeline.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Network.TCP",
        "fct-package": "pipes-network",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Network-TCP.html",
        "fct-type": "module",
        "title": "TCP"
      },
      "index": {
        "description": "This minimal module exports facilities that ease the usage of TCP Socket in the Pipes ecosystem It is meant to be used together with the Network.Simple.TCP module from the network-simple package which is completely re-exported from this module This module does not export facilities that would allow you to acquire new Socket within pipeline If you need to do so then you should use Pipes.Network.TCP.Safe instead which exports similar API to the one exported by this module However don be confused by the word safe in that module this module is equally safe to use as long as you don try to acquire resources within the pipeline",
        "hierarchy": "Pipes Network TCP",
        "module": "Pipes.Network.TCP",
        "name": "TCP",
        "normalized": "",
        "package": "pipes-network",
        "partial": "TCP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-network/docs/Pipes-Network-TCP.html#v:fromSocket",
      "description": {
        "fct-descr": "\u003cp\u003eReceives bytes from the remote end and sends them downstream.\n\u003c/p\u003e\u003cp\u003eThe number of bytes received at once is always in the interval\n \u003cem\u003e[1 .. specified maximum]\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eProducer'\u003c/a\u003e\u003c/code\u003e returns if the remote peer closes its side of the connection\n or EOF is received.\n\u003c/p\u003e",
        "fct-module": "Pipes.Network.TCP",
        "fct-package": "pipes-network",
        "fct-signature": "Socket-\u003e Int-\u003e Producer' ByteString m ()",
        "fct-type": "function",
        "title": "fromSocket"
      },
      "index": {
        "description": "Receives bytes from the remote end and sends them downstream The number of bytes received at once is always in the interval specified maximum This Producer returns if the remote peer closes its side of the connection or EOF is received",
        "hierarchy": "Pipes Network TCP",
        "module": "Pipes.Network.TCP",
        "name": "fromSocket",
        "normalized": "Socket-\u003eInt-\u003eProducer' ByteString a()",
        "package": "pipes-network",
        "partial": "Socket",
        "signature": "Socket-\u003eInt-\u003eProducer' ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-network/docs/Pipes-Network-TCP.html#v:fromSocketN",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efromSocket\u003c/a\u003e\u003c/code\u003e, except the downstream pipe can specify the maximum\n number of bytes to receive at once using \u003ccode\u003e\u003ca\u003erequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Network.TCP",
        "fct-package": "pipes-network",
        "fct-signature": "Socket -\u003e Int -\u003e Server' Int ByteString m ()",
        "fct-source": "src/Pipes-Network-TCP.html#fromSocketN",
        "fct-type": "function",
        "title": "fromSocketN"
      },
      "index": {
        "description": "Like fromSocket except the downstream pipe can specify the maximum number of bytes to receive at once using request",
        "hierarchy": "Pipes Network TCP",
        "module": "Pipes.Network.TCP",
        "name": "fromSocketN",
        "normalized": "Socket-\u003eInt-\u003eServer' Int ByteString a()",
        "package": "pipes-network",
        "partial": "Socket",
        "signature": "Socket-\u003eInt-\u003eServer' Int ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-network/docs/Pipes-Network-TCP.html#v:fromSocketTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efromSocket\u003c/a\u003e\u003c/code\u003e, except with the first \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e argument you can specify\n the maximum time that each interaction with the remote end can take. If such\n time elapses before the interaction finishes, then an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e exception is\n thrown. The time is specified in microseconds (10e6).\n\u003c/p\u003e",
        "fct-module": "Pipes.Network.TCP",
        "fct-package": "pipes-network",
        "fct-signature": "Int -\u003e Socket -\u003e Int -\u003e Producer' ByteString m ()",
        "fct-source": "src/Pipes-Network-TCP.html#fromSocketTimeout",
        "fct-type": "function",
        "title": "fromSocketTimeout"
      },
      "index": {
        "description": "Like fromSocket except with the first Int argument you can specify the maximum time that each interaction with the remote end can take If such time elapses before the interaction finishes then an IOError exception is thrown The time is specified in microseconds e6",
        "hierarchy": "Pipes Network TCP",
        "module": "Pipes.Network.TCP",
        "name": "fromSocketTimeout",
        "normalized": "Int-\u003eSocket-\u003eInt-\u003eProducer' ByteString a()",
        "package": "pipes-network",
        "partial": "Socket Timeout",
        "signature": "Int-\u003eSocket-\u003eInt-\u003eProducer' ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-network/docs/Pipes-Network-TCP.html#v:fromSocketTimeoutN",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efromSocketN\u003c/a\u003e\u003c/code\u003e, except with the first \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e argument you can specify\n the maximum time that each interaction with the remote end can take. If such\n time elapses before the interaction finishes, then an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e exception is\n thrown. The time is specified in microseconds (10e6).\n\u003c/p\u003e",
        "fct-module": "Pipes.Network.TCP",
        "fct-package": "pipes-network",
        "fct-signature": "Int -\u003e Socket -\u003e Int -\u003e Server' Int ByteString m ()",
        "fct-source": "src/Pipes-Network-TCP.html#fromSocketTimeoutN",
        "fct-type": "function",
        "title": "fromSocketTimeoutN"
      },
      "index": {
        "description": "Like fromSocketN except with the first Int argument you can specify the maximum time that each interaction with the remote end can take If such time elapses before the interaction finishes then an IOError exception is thrown The time is specified in microseconds e6",
        "hierarchy": "Pipes Network TCP",
        "module": "Pipes.Network.TCP",
        "name": "fromSocketTimeoutN",
        "normalized": "Int-\u003eSocket-\u003eInt-\u003eServer' Int ByteString a()",
        "package": "pipes-network",
        "partial": "Socket Timeout",
        "signature": "Int-\u003eSocket-\u003eInt-\u003eServer' Int ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-network/docs/Pipes-Network-TCP.html#v:toSocket",
      "description": {
        "fct-descr": "\u003cp\u003eSends to the remote end each \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e received from upstream.\n\u003c/p\u003e",
        "fct-module": "Pipes.Network.TCP",
        "fct-package": "pipes-network",
        "fct-signature": "Socket-\u003e Consumer' ByteString m r",
        "fct-type": "function",
        "title": "toSocket"
      },
      "index": {
        "description": "Sends to the remote end each ByteString received from upstream",
        "hierarchy": "Pipes Network TCP",
        "module": "Pipes.Network.TCP",
        "name": "toSocket",
        "normalized": "Socket-\u003eConsumer' ByteString a b",
        "package": "pipes-network",
        "partial": "Socket",
        "signature": "Socket-\u003eConsumer' ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-network/docs/Pipes-Network-TCP.html#v:toSocketTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etoSocket\u003c/a\u003e\u003c/code\u003e, except with the first \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e argument you can specify\n the maximum time that each interaction with the remote end can take. If such\n time elapses before the interaction finishes, then an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e exception is\n thrown. The time is specified in microseconds (10e6).\n\u003c/p\u003e",
        "fct-module": "Pipes.Network.TCP",
        "fct-package": "pipes-network",
        "fct-signature": "Int -\u003e Socket -\u003e Consumer' ByteString m r",
        "fct-source": "src/Pipes-Network-TCP.html#toSocketTimeout",
        "fct-type": "function",
        "title": "toSocketTimeout"
      },
      "index": {
        "description": "Like toSocket except with the first Int argument you can specify the maximum time that each interaction with the remote end can take If such time elapses before the interaction finishes then an IOError exception is thrown The time is specified in microseconds e6",
        "hierarchy": "Pipes Network TCP",
        "module": "Pipes.Network.TCP",
        "name": "toSocketTimeout",
        "normalized": "Int-\u003eSocket-\u003eConsumer' ByteString a b",
        "package": "pipes-network",
        "partial": "Socket Timeout",
        "signature": "Int-\u003eSocket-\u003eConsumer' ByteString m r"
      }
    }
  }
]