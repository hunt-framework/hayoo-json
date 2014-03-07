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
        "word": "pipes-network-tls"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports facilities allowing you to safely obtain, use and\n release TLS-secured TCP connections within a \u003cem\u003ePipes\u003c/em\u003e pipeline, by relying on\n \u003ccode\u003epipes-safe\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is meant to be used together with \u003ca\u003ePipes.Network.TCP.TLS\u003c/a\u003e, and it\n overrides some functions from \u003ca\u003eNetwork.Simple.TCP\u003c/a\u003e so that they support\n \u003ccode\u003e\u003ca\u003eMonadSafe\u003c/a\u003e\u003c/code\u003e. Additionally, it also exports pipes that establish a\n TLS-secured TCP connection and interact with it unidirectionally, in a\n streaming fashion at once.\n\u003c/p\u003e\u003cp\u003eYou are encouraged to use this module together with \u003ca\u003ePipes.Network.TCP.TLS\u003c/a\u003e\n and \u003ca\u003eNetwork.Simple.TCP.TLS\u003c/a\u003e as follows:\n\u003c/p\u003e\u003cpre\u003e\n import qualified \u003ca\u003eNetwork.Simple.TCP.TLS\u003c/a\u003e     as TLS hiding (connect, serve, listen, accept)\n import qualified \u003ca\u003ePipes.Network.TCP.TLS\u003c/a\u003e      as TLS\n import qualified \u003ca\u003ePipes.Network.TCP.TLS.Safe\u003c/a\u003e as TLS\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "Safe",
          "package": "pipes-network-tls",
          "source": "src/Pipes-Network-TCP-TLS-Safe.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports facilities allowing you to safely obtain use and release TLS-secured TCP connections within Pipes pipeline by relying on pipes-safe This module is meant to be used together with Pipes.Network.TCP.TLS and it overrides some functions from Network.Simple.TCP so that they support MonadSafe Additionally it also exports pipes that establish TLS-secured TCP connection and interact with it unidirectionally in streaming fashion at once You are encouraged to use this module together with Pipes.Network.TCP.TLS and Network.Simple.TCP.TLS as follows import qualified Network.Simple.TCP.TLS as TLS hiding connect serve listen accept import qualified Pipes.Network.TCP.TLS as TLS import qualified Pipes.Network.TCP.TLS.Safe as TLS",
          "hierarchy": "Pipes Network TCP TLS Safe",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "Safe",
          "package": "pipes-network-tls",
          "partial": "Safe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-network-tls/docs/Pipes-Network-TCP-TLS-Safe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eaccept\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eNetwork.Simple.TCP.TLS\u003c/a\u003e, but\n compatible with \u003ccode\u003e\u003ca\u003eMonadSafe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "accept",
          "package": "pipes-network-tls",
          "signature": "ServerSettings -\u003e Socket -\u003e ((Context, SockAddr) -\u003e m r) -\u003e m r",
          "source": "src/Pipes-Network-TCP-TLS-Safe.html#accept",
          "type": "function"
        },
        "index": {
          "description": "Like accept from Network.Simple.TCP.TLS but compatible with MonadSafe",
          "hierarchy": "Pipes Network TCP TLS Safe",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "accept",
          "normalized": "ServerSettings-\u003eSocket-\u003e((Context,SockAddr)-\u003ea b)-\u003ea b",
          "package": "pipes-network-tls",
          "signature": "ServerSettings-\u003eSocket-\u003e((Context,SockAddr)-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-network-tls/docs/Pipes-Network-TCP-TLS-Safe.html#v:accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eNetwork.Simple.TCP.TLS\u003c/a\u003e, but\n compatible with \u003ccode\u003e\u003ca\u003eMonadSafe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "connect",
          "package": "pipes-network-tls",
          "signature": "ClientSettings -\u003e HostName -\u003e ServiceName -\u003e ((Context, SockAddr) -\u003e m r) -\u003e m r",
          "source": "src/Pipes-Network-TCP-TLS-Safe.html#connect",
          "type": "function"
        },
        "index": {
          "description": "Like connect from Network.Simple.TCP.TLS but compatible with MonadSafe",
          "hierarchy": "Pipes Network TCP TLS Safe",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "connect",
          "normalized": "ClientSettings-\u003eHostName-\u003eServiceName-\u003e((Context,SockAddr)-\u003ea b)-\u003ea b",
          "package": "pipes-network-tls",
          "signature": "ClientSettings-\u003eHostName-\u003eServiceName-\u003e((Context,SockAddr)-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-network-tls/docs/Pipes-Network-TCP-TLS-Safe.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to a TLS-secured TCP server and send downstream the decrypted bytes\n received from the remote end.\n\u003c/p\u003e\u003cp\u003eUp to \u003ccode\u003e16384\u003c/code\u003e decrypted bytes will be received at once. The TLS connection is\n automatically renegotiated if a \u003cem\u003eClientHello\u003c/em\u003e message is received.\n\u003c/p\u003e\u003cp\u003eIf the remote peer closes its side of the connection of EOF is reached, this\n proxy returns.\n\u003c/p\u003e\u003cp\u003eThe connection is closed when done or in case of exceptions.\n\u003c/p\u003e",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "fromConnect",
          "package": "pipes-network-tls",
          "signature": "ClientSettings-\u003e HostName-\u003e ServiceName-\u003e Producer' ByteString m ()",
          "type": "function"
        },
        "index": {
          "description": "Connect to TLS-secured TCP server and send downstream the decrypted bytes received from the remote end Up to decrypted bytes will be received at once The TLS connection is automatically renegotiated if ClientHello message is received If the remote peer closes its side of the connection of EOF is reached this proxy returns The connection is closed when done or in case of exceptions",
          "hierarchy": "Pipes Network TCP TLS Safe",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "fromConnect",
          "normalized": "ClientSettings-\u003eHostName-\u003eServiceName-\u003eProducer' ByteString a()",
          "package": "pipes-network-tls",
          "partial": "Connect",
          "signature": "ClientSettings-\u003eHostName-\u003eServiceName-\u003eProducer' ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-network-tls/docs/Pipes-Network-TCP-TLS-Safe.html#v:fromConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinds a listening TCP socket, accepts a single TLS-secured connection and\n sends downstream any decrypted bytes received from the remote end.\n\u003c/p\u003e\u003cp\u003eUp to \u003ccode\u003e16384\u003c/code\u003e decrypted bytes will be received at once. The TLS connection is\n automatically renegotiated if a \u003cem\u003eClientHello\u003c/em\u003e message is received.\n\u003c/p\u003e\u003cp\u003eIf the remote peer closes its side of the connection of EOF is reached,  this\n proxy returns.\n\u003c/p\u003e\u003cp\u003eBoth the listening and connection sockets are closed when done or in case of\n exceptions.\n\u003c/p\u003e",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "fromServe",
          "package": "pipes-network-tls",
          "signature": "ServerSettings-\u003e HostPreference-\u003e ServiceName-\u003e Producer' ByteString m ()",
          "type": "function"
        },
        "index": {
          "description": "Binds listening TCP socket accepts single TLS-secured connection and sends downstream any decrypted bytes received from the remote end Up to decrypted bytes will be received at once The TLS connection is automatically renegotiated if ClientHello message is received If the remote peer closes its side of the connection of EOF is reached this proxy returns Both the listening and connection sockets are closed when done or in case of exceptions",
          "hierarchy": "Pipes Network TCP TLS Safe",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "fromServe",
          "normalized": "ServerSettings-\u003eHostPreference-\u003eServiceName-\u003eProducer' ByteString a()",
          "package": "pipes-network-tls",
          "partial": "Serve",
          "signature": "ServerSettings-\u003eHostPreference-\u003eServiceName-\u003eProducer' ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-network-tls/docs/Pipes-Network-TCP-TLS-Safe.html#v:fromServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eNetwork.Simple.TCP\u003c/a\u003e, but compatible\n with \u003ccode\u003e\u003ca\u003eMonadSafe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "listen",
          "package": "pipes-network-tls",
          "signature": "HostPreference -\u003e ServiceName -\u003e ((Socket, SockAddr) -\u003e m r) -\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Like listen from Network.Simple.TCP but compatible with MonadSafe",
          "hierarchy": "Pipes Network TCP TLS Safe",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "listen",
          "normalized": "HostPreference-\u003eServiceName-\u003e((Socket,SockAddr)-\u003ea b)-\u003ea b",
          "package": "pipes-network-tls",
          "signature": "HostPreference-\u003eServiceName-\u003e((Socket,SockAddr)-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-network-tls/docs/Pipes-Network-TCP-TLS-Safe.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eserve\u003c/a\u003e\u003c/code\u003e from \u003ca\u003eNetwork.Simple.TCP.TLS\u003c/a\u003e, but\n compatible with \u003ccode\u003e\u003ca\u003eMonadSafe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "serve",
          "package": "pipes-network-tls",
          "signature": "ServerSettings -\u003e HostPreference -\u003e ServiceName -\u003e ((Context, SockAddr) -\u003e IO ()) -\u003e m r",
          "source": "src/Pipes-Network-TCP-TLS-Safe.html#serve",
          "type": "function"
        },
        "index": {
          "description": "Like serve from Network.Simple.TCP.TLS but compatible with MonadSafe",
          "hierarchy": "Pipes Network TCP TLS Safe",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "serve",
          "normalized": "ServerSettings-\u003eHostPreference-\u003eServiceName-\u003e((Context,SockAddr)-\u003eIO())-\u003ea b",
          "package": "pipes-network-tls",
          "signature": "ServerSettings-\u003eHostPreference-\u003eServiceName-\u003e((Context,SockAddr)-\u003eIO())-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-network-tls/docs/Pipes-Network-TCP-TLS-Safe.html#v:serve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnects to a TLS-secured TCP server, then repeatedly encrypts and sends to\n the remote end the bytes received from upstream.\n\u003c/p\u003e\u003cp\u003eThe connection is properly closed when done or in case of exceptions.\n\u003c/p\u003e",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "toConnect",
          "package": "pipes-network-tls",
          "signature": "ClientSettings-\u003e HostName-\u003e ServiceName-\u003e Consumer' ByteString m ()",
          "type": "function"
        },
        "index": {
          "description": "Connects to TLS-secured TCP server then repeatedly encrypts and sends to the remote end the bytes received from upstream The connection is properly closed when done or in case of exceptions",
          "hierarchy": "Pipes Network TCP TLS Safe",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "toConnect",
          "normalized": "ClientSettings-\u003eHostName-\u003eServiceName-\u003eConsumer' ByteString a()",
          "package": "pipes-network-tls",
          "partial": "Connect",
          "signature": "ClientSettings-\u003eHostName-\u003eServiceName-\u003eConsumer' ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-network-tls/docs/Pipes-Network-TCP-TLS-Safe.html#v:toConnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinds a listening TCP socket, accepts a single TLS-secured connection,\n and repeatedly sends to the remote end any bytes received from upstream.\n\u003c/p\u003e\u003cp\u003eIf the remote peer closes its side of the connection, this proxy returns.\n\u003c/p\u003e\u003cp\u003eBoth the listening and connection sockets are closed when done or in case of\n exceptions.\n\u003c/p\u003e",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "toServe",
          "package": "pipes-network-tls",
          "signature": "ServerSettings-\u003e HostPreference-\u003e ServiceName-\u003e Consumer' ByteString m r",
          "type": "function"
        },
        "index": {
          "description": "Binds listening TCP socket accepts single TLS-secured connection and repeatedly sends to the remote end any bytes received from upstream If the remote peer closes its side of the connection this proxy returns Both the listening and connection sockets are closed when done or in case of exceptions",
          "hierarchy": "Pipes Network TCP TLS Safe",
          "module": "Pipes.Network.TCP.TLS.Safe",
          "name": "toServe",
          "normalized": "ServerSettings-\u003eHostPreference-\u003eServiceName-\u003eConsumer' ByteString a b",
          "package": "pipes-network-tls",
          "partial": "Serve",
          "signature": "ServerSettings-\u003eHostPreference-\u003eServiceName-\u003eConsumer' ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-network-tls/docs/Pipes-Network-TCP-TLS-Safe.html#v:toServe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports functions that allow you to use TLS-secured\n TCP connections in a streaming fashion.\n\u003c/p\u003e\u003cp\u003eYou are encouraged to use this module together with \u003ca\u003eNetwork.Simple.TCP.TLS\u003c/a\u003e\n as follows:\n\u003c/p\u003e\u003cpre\u003e\n import qualified \u003ca\u003eNetwork.Simple.TCP.TLS\u003c/a\u003e as TLS\n import qualified \u003ca\u003ePipes.Network.TCP.TLS\u003c/a\u003e  as TLS\n\u003c/pre\u003e\u003cp\u003eThis module \u003cem\u003edoes not\u003c/em\u003e export facilities that would allow you to establish\n new connections within a pipeline. If you need to do so, then you should use\n \u003ca\u003ePipes.Network.TCP.TLS.Safe\u003c/a\u003e instead, which exports a similar API to the one\n exported by this module. Don't be confused by the word &#8220;safe&#8221; in that module;\n this module is equally safe to use as long as you don't try to acquire new\n resources within the pipeline.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.Network.TCP.TLS",
          "name": "TLS",
          "package": "pipes-network-tls",
          "source": "src/Pipes-Network-TCP-TLS.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports functions that allow you to use TLS-secured TCP connections in streaming fashion You are encouraged to use this module together with Network.Simple.TCP.TLS as follows import qualified Network.Simple.TCP.TLS as TLS import qualified Pipes.Network.TCP.TLS as TLS This module does not export facilities that would allow you to establish new connections within pipeline If you need to do so then you should use Pipes.Network.TCP.TLS.Safe instead which exports similar API to the one exported by this module Don be confused by the word safe in that module this module is equally safe to use as long as you don try to acquire new resources within the pipeline",
          "hierarchy": "Pipes Network TCP TLS",
          "module": "Pipes.Network.TCP.TLS",
          "name": "TLS",
          "package": "pipes-network-tls",
          "partial": "TLS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-network-tls/docs/Pipes-Network-TCP-TLS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceives decrypted bytes from the remote end and sends them downstream.\n\u003c/p\u003e\u003cp\u003eThe number of bytes received at once is always in the interval\n \u003cem\u003e[1 .. 16384]\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThe TLS connection is automatically renegotiated if a \u003cem\u003eClientHello\u003c/em\u003e message\n is received.\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eProducer'\u003c/a\u003e\u003c/code\u003e returns if the remote peer closes its side of the connection\n or EOF is received.\n\u003c/p\u003e",
          "module": "Pipes.Network.TCP.TLS",
          "name": "fromContext",
          "package": "pipes-network-tls",
          "signature": "Context-\u003e Producer' ByteString m ()",
          "type": "function"
        },
        "index": {
          "description": "Receives decrypted bytes from the remote end and sends them downstream The number of bytes received at once is always in the interval The TLS connection is automatically renegotiated if ClientHello message is received This Producer returns if the remote peer closes its side of the connection or EOF is received",
          "hierarchy": "Pipes Network TCP TLS",
          "module": "Pipes.Network.TCP.TLS",
          "name": "fromContext",
          "normalized": "Context-\u003eProducer' ByteString a()",
          "package": "pipes-network-tls",
          "partial": "Context",
          "signature": "Context-\u003eProducer' ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-network-tls/docs/Pipes-Network-TCP-TLS.html#v:fromContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efromContext\u003c/a\u003e\u003c/code\u003e, except with the first \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e argument you can specify\n the maximum time that each interaction with the remote end can take. If such\n time elapses before the interaction finishes, then an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e exception is\n thrown. The time is specified in microseconds (10e6).\n\u003c/p\u003e",
          "module": "Pipes.Network.TCP.TLS",
          "name": "fromContextTimeout",
          "package": "pipes-network-tls",
          "signature": "Int-\u003e Context-\u003e Producer' ByteString m ()",
          "type": "function"
        },
        "index": {
          "description": "Like fromContext except with the first Int argument you can specify the maximum time that each interaction with the remote end can take If such time elapses before the interaction finishes then an IOError exception is thrown The time is specified in microseconds e6",
          "hierarchy": "Pipes Network TCP TLS",
          "module": "Pipes.Network.TCP.TLS",
          "name": "fromContextTimeout",
          "normalized": "Int-\u003eContext-\u003eProducer' ByteString a()",
          "package": "pipes-network-tls",
          "partial": "Context Timeout",
          "signature": "Int-\u003eContext-\u003eProducer' ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-network-tls/docs/Pipes-Network-TCP-TLS.html#v:fromContextTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypts and sends to the remote end each \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e received from\n upstream.\n\u003c/p\u003e",
          "module": "Pipes.Network.TCP.TLS",
          "name": "toContext",
          "package": "pipes-network-tls",
          "signature": "Context-\u003e Consumer' ByteString m r",
          "type": "function"
        },
        "index": {
          "description": "Encrypts and sends to the remote end each ByteString received from upstream",
          "hierarchy": "Pipes Network TCP TLS",
          "module": "Pipes.Network.TCP.TLS",
          "name": "toContext",
          "normalized": "Context-\u003eConsumer' ByteString a b",
          "package": "pipes-network-tls",
          "partial": "Context",
          "signature": "Context-\u003eConsumer' ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-network-tls/docs/Pipes-Network-TCP-TLS.html#v:toContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etoContext\u003c/a\u003e\u003c/code\u003e, except with the first \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e argument you can specify\n the maximum time that each interaction with the remote end can take. If such\n time elapses before the interaction finishes, then an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e exception is\n thrown. The time is specified in microseconds (10e6).\n\u003c/p\u003e",
          "module": "Pipes.Network.TCP.TLS",
          "name": "toContextTimeout",
          "package": "pipes-network-tls",
          "signature": "Int-\u003e Context-\u003e Consumer' ByteString m r",
          "type": "function"
        },
        "index": {
          "description": "Like toContext except with the first Int argument you can specify the maximum time that each interaction with the remote end can take If such time elapses before the interaction finishes then an IOError exception is thrown The time is specified in microseconds e6",
          "hierarchy": "Pipes Network TCP TLS",
          "module": "Pipes.Network.TCP.TLS",
          "name": "toContextTimeout",
          "normalized": "Int-\u003eContext-\u003eConsumer' ByteString a b",
          "package": "pipes-network-tls",
          "partial": "Context Timeout",
          "signature": "Int-\u003eContext-\u003eConsumer' ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-network-tls/docs/Pipes-Network-TCP-TLS.html#v:toContextTimeout"
      }
    }
  ]
]