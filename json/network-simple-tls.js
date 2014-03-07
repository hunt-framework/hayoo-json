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
        "word": "network-simple-tls"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports simple tools for establishing TLS-secured TCP\n connections, relevant to both the client side and server side of the\n connection.\n\u003c/p\u003e\u003cp\u003eThis module re-exports some functions from the \u003ca\u003eNetwork.Simple.TCP\u003c/a\u003e module\n in the \u003ccode\u003enetwork-simple\u003c/code\u003e package. Consider using that module directly if you\n need a similar API without TLS support.\n\u003c/p\u003e\u003cp\u003eThis module uses \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonadCatch\u003c/a\u003e\u003c/code\u003e extensively so that you can\n reuse these functions in monads other than \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e. However, if you don't care\n about any of that, just pretend you are using the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad all the time\n and everything will work as expected.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "TLS",
          "package": "network-simple-tls",
          "source": "src/Network-Simple-TCP-TLS.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports simple tools for establishing TLS-secured TCP connections relevant to both the client side and server side of the connection This module re-exports some functions from the Network.Simple.TCP module in the network-simple package Consider using that module directly if you need similar API without TLS support This module uses MonadIO and MonadCatch extensively so that you can reuse these functions in monads other than IO However if you don care about any of that just pretend you are using the IO monad all the time and everything will work as expected",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "TLS",
          "package": "network-simple-tls",
          "partial": "TLS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract type representing the configuration settings for a TLS client.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003emakeClientSettings\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003egetDefaultClientSettings\u003c/a\u003e\u003c/code\u003e to obtain your\n \u003ccode\u003e\u003ca\u003eClientSettings\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "ClientSettings",
          "package": "network-simple-tls",
          "source": "src/Network-Simple-TCP-TLS.html#ClientSettings",
          "type": "data"
        },
        "index": {
          "description": "Abstract type representing the configuration settings for TLS client Use makeClientSettings or getDefaultClientSettings to obtain your ClientSettings value",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "ClientSettings",
          "package": "network-simple-tls",
          "partial": "Client Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#t:ClientSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimary certificate, private key and the rest of the certificate chain.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "Credential",
          "package": "network-simple-tls",
          "source": "src/Network-Simple-TCP-TLS.html#Credential",
          "type": "data"
        },
        "index": {
          "description": "Primary certificate private key and the rest of the certificate chain",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "Credential",
          "package": "network-simple-tls",
          "partial": "Credential",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#t:Credential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract type representing the configuration settings for a TLS server.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003emakeServerSettings\u003c/a\u003e\u003c/code\u003e to obtain your \u003ccode\u003e\u003ca\u003eServerSettings\u003c/a\u003e\u003c/code\u003e value, and\n \u003ccode\u003e\u003ca\u003eupdateServerParams\u003c/a\u003e\u003c/code\u003e to update it.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "ServerSettings",
          "package": "network-simple-tls",
          "source": "src/Network-Simple-TCP-TLS.html#ServerSettings",
          "type": "data"
        },
        "index": {
          "description": "Abstract type representing the configuration settings for TLS server Use makeServerSettings to obtain your ServerSettings value and updateServerParams to update it",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "ServerSettings",
          "package": "network-simple-tls",
          "partial": "Server Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#t:ServerSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Simple.TCP.TLS",
          "name": "Credential",
          "package": "network-simple-tls",
          "signature": "Credential !X509 !PrivateKey [X509]",
          "source": "src/Network-Simple-TCP-TLS.html#Credential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "Credential",
          "normalized": "Credential X PrivateKey[X]",
          "package": "network-simple-tls",
          "partial": "Credential",
          "signature": "Credential X PrivateKey[X]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:Credential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccepts a single incomming TLS-secured TCP connection and use it.\n\u003c/p\u003e\u003cp\u003eA TLS handshake is performed immediately after establishing the TCP\n connection and the TLS and TCP connections are properly closed when done or\n in case of exceptions. If you need to manage the lifetime of the connection\n resources yourself, then use \u003ccode\u003e\u003ca\u003eacceptTls\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "accept",
          "package": "network-simple-tls",
          "signature": "ServerSettings-\u003e Socket-\u003e ((Context, SockAddr) -\u003e m r)-\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Accepts single incomming TLS-secured TCP connection and use it TLS handshake is performed immediately after establishing the TCP connection and the TLS and TCP connections are properly closed when done or in case of exceptions If you need to manage the lifetime of the connection resources yourself then use acceptTls instead",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "accept",
          "normalized": "ServerSettings-\u003eSocket-\u003e((Context,SockAddr)-\u003ea b)-\u003ea b",
          "package": "network-simple-tls",
          "signature": "ServerSettings-\u003eSocket-\u003e((Context,SockAddr)-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eaccept\u003c/a\u003e\u003c/code\u003e, except it uses a different thread to performs the TLS\n handshake and run the given computation.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "acceptFork",
          "package": "network-simple-tls",
          "signature": "ServerSettings-\u003e Socket-\u003e ((Context, SockAddr) -\u003e IO ())-\u003e m ThreadId",
          "type": "function"
        },
        "index": {
          "description": "Like accept except it uses different thread to performs the TLS handshake and run the given computation",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "acceptFork",
          "normalized": "ServerSettings-\u003eSocket-\u003e((Context,SockAddr)-\u003eIO())-\u003ea ThreadId",
          "package": "network-simple-tls",
          "partial": "Fork",
          "signature": "ServerSettings-\u003eSocket-\u003e((Context,SockAddr)-\u003eIO())-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:acceptFork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccepts an incoming TCP connection and returns a TLS \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e configured\n on top of it using the given \u003ccode\u003e\u003ca\u003eServerSettings\u003c/a\u003e\u003c/code\u003e. The remote end address is also\n returned.\n\u003c/p\u003e\u003cp\u003ePrefer to use \u003ccode\u003e\u003ca\u003eaccept\u003c/a\u003e\u003c/code\u003e if you will be using the obtained \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e within a\n limited scope.\n\u003c/p\u003e\u003cp\u003eYou need to perform a TLS handshake on the resulting \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e before using\n it for communication purposes, and gracefully close the TLS and TCP\n connections afterwards using. The \u003ccode\u003e\u003ca\u003euseTls\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euseTlsThenClose\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003euseTlsThenCloseFork\u003c/a\u003e\u003c/code\u003e can help you with that.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "acceptTls",
          "package": "network-simple-tls",
          "signature": "ServerSettings-\u003e Socket-\u003e m (Context, SockAddr)",
          "type": "function"
        },
        "index": {
          "description": "Accepts an incoming TCP connection and returns TLS Context configured on top of it using the given ServerSettings The remote end address is also returned Prefer to use accept if you will be using the obtained Context within limited scope You need to perform TLS handshake on the resulting Context before using it for communication purposes and gracefully close the TLS and TCP connections afterwards using The useTls useTlsThenClose and useTlsThenCloseFork can help you with that",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "acceptTls",
          "normalized": "ServerSettings-\u003eSocket-\u003ea(Context,SockAddr)",
          "package": "network-simple-tls",
          "partial": "Tls",
          "signature": "ServerSettings-\u003eSocket-\u003em(Context,SockAddr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:acceptTls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e into the TLS client configuration \u003ccode\u003e\u003ca\u003eParams\u003c/a\u003e\u003c/code\u003e.\n See the \u003ca\u003eNetwork.TLS\u003c/a\u003e and the \u003ccode\u003elens\u003c/code\u003e package for details.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "clientParams",
          "package": "network-simple-tls",
          "signature": "(Params -\u003e f Params) -\u003e ClientSettings -\u003e f ClientSettings",
          "source": "src/Network-Simple-TCP-TLS.html#clientParams",
          "type": "function"
        },
        "index": {
          "description": "Lens into the TLS client configuration Params See the Network.TLS and the lens package for details",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "clientParams",
          "normalized": "(Params-\u003ea Params)-\u003eClientSettings-\u003ea ClientSettings",
          "package": "network-simple-tls",
          "partial": "Params",
          "signature": "(Params-\u003ef Params)-\u003eClientSettings-\u003ef ClientSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:clientParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to a TLS-secured TCP server and use the connection\n\u003c/p\u003e\u003cp\u003eA TLS handshake is performed immediately after establishing the TCP\n connection and the TLS and TCP connections are properly closed when done or\n in case of exceptions. If you need to manage the lifetime of the connection\n resources yourself, then use \u003ccode\u003e\u003ca\u003econnectTls\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "connect",
          "package": "network-simple-tls",
          "signature": "ClientSettings-\u003e HostName-\u003e ServiceName-\u003e ((Context, SockAddr) -\u003e m r)-\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Connect to TLS-secured TCP server and use the connection TLS handshake is performed immediately after establishing the TCP connection and the TLS and TCP connections are properly closed when done or in case of exceptions If you need to manage the lifetime of the connection resources yourself then use connectTls instead",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "connect",
          "normalized": "ClientSettings-\u003eHostName-\u003eServiceName-\u003e((Context,SockAddr)-\u003ea b)-\u003ea b",
          "package": "network-simple-tls",
          "signature": "ClientSettings-\u003eHostName-\u003eServiceName-\u003e((Context,SockAddr)-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstalbishes a TCP connection to a remote server and returns a TLS\n \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e configured on top of it using the given \u003ccode\u003e\u003ca\u003eClientSettings\u003c/a\u003e\u003c/code\u003e.\n The remote end address is also returned.\n\u003c/p\u003e\u003cp\u003ePrefer to use \u003ccode\u003e\u003ca\u003econnect\u003c/a\u003e\u003c/code\u003e if you will be using the obtained \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e within a\n limited scope.\n\u003c/p\u003e\u003cp\u003eYou need to perform a TLS handshake on the resulting \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e before using\n it for communication purposes, and gracefully close the TLS and TCP\n connections afterwards using. The \u003ccode\u003e\u003ca\u003euseTls\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003euseTlsThenClose\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003euseTlsThenCloseFork\u003c/a\u003e\u003c/code\u003e can help you with that.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "connectTls",
          "package": "network-simple-tls",
          "signature": "ClientSettings-\u003e HostName-\u003e ServiceName-\u003e m (Context, SockAddr)",
          "type": "function"
        },
        "index": {
          "description": "Estalbishes TCP connection to remote server and returns TLS Context configured on top of it using the given ClientSettings The remote end address is also returned Prefer to use connect if you will be using the obtained Context within limited scope You need to perform TLS handshake on the resulting Context before using it for communication purposes and gracefully close the TLS and TCP connections afterwards using The useTls useTlsThenClose and useTlsThenCloseFork can help you with that",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "connectTls",
          "normalized": "ClientSettings-\u003eHostName-\u003eServiceName-\u003ea(Context,SockAddr)",
          "package": "network-simple-tls",
          "partial": "Tls",
          "signature": "ClientSettings-\u003eHostName-\u003eServiceName-\u003em(Context,SockAddr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:connectTls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert client \u003ccode\u003e\u003ca\u003eCredential\u003c/a\u003e\u003c/code\u003e to the format expected by \u003ccode\u003e\u003ca\u003epCertificates\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "credentialToCertList",
          "package": "network-simple-tls",
          "signature": "Credential -\u003e [(X509, Maybe PrivateKey)]",
          "source": "src/Network-Simple-TCP-TLS.html#credentialToCertList",
          "type": "function"
        },
        "index": {
          "description": "Convert client Credential to the format expected by pCertificates",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "credentialToCertList",
          "normalized": "Credential-\u003e[(X,Maybe PrivateKey)]",
          "package": "network-simple-tls",
          "partial": "To Cert List",
          "signature": "Credential-\u003e[(X,Maybe PrivateKey)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:credentialToCertList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the system default \u003ccode\u003e\u003ca\u003eClientSettings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003emakeClientSettings\u003c/a\u003e\u003c/code\u003e for the for the default TLS settings used.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "getDefaultClientSettings",
          "package": "network-simple-tls",
          "signature": "m ClientSettings",
          "source": "src/Network-Simple-TCP-TLS.html#getDefaultClientSettings",
          "type": "function"
        },
        "index": {
          "description": "Get the system default ClientSettings See makeClientSettings for the for the default TLS settings used",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "getDefaultClientSettings",
          "package": "network-simple-tls",
          "partial": "Default Client Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:getDefaultClientSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind a TCP listening socket and use it.\n\u003c/p\u003e\u003cp\u003eThe listening socket is closed when done or in case of exceptions.\n\u003c/p\u003e\u003cp\u003eIf you prefer to acquire and close the socket yourself, then use \u003ccode\u003e\u003ca\u003ebindSock\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecloseSock\u003c/a\u003e\u003c/code\u003e and the \u003ccode\u003e\u003ca\u003elisten\u003c/a\u003e\u003c/code\u003e function from \u003ca\u003eNetwork.Socket\u003c/a\u003e instead.\n\u003c/p\u003e\u003cp\u003eNote: \u003ccode\u003e\u003ca\u003emaxListenQueue\u003c/a\u003e\u003c/code\u003e is tipically 128, which is too small for high\n performance servers. So, we use the maximum between \u003ccode\u003e\u003ca\u003emaxListenQueue\u003c/a\u003e\u003c/code\u003e and\n 2048 as the default size of the listening queue. The \u003ccode\u003e\u003ca\u003eNoDelay\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eReuseAddr\u003c/a\u003e\u003c/code\u003e options are set on the socket.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "listen",
          "package": "network-simple-tls",
          "signature": "HostPreference-\u003e ServiceName-\u003e ((Socket, SockAddr) -\u003e m r)-\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Bind TCP listening socket and use it The listening socket is closed when done or in case of exceptions If you prefer to acquire and close the socket yourself then use bindSock closeSock and the listen function from Network.Socket instead Note maxListenQueue is tipically which is too small for high performance servers So we use the maximum between maxListenQueue and as the default size of the listening queue The NoDelay and ReuseAddr options are set on the socket",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "listen",
          "normalized": "HostPreference-\u003eServiceName-\u003e((Socket,SockAddr)-\u003ea b)-\u003ea b",
          "package": "network-simple-tls",
          "signature": "HostPreference-\u003eServiceName-\u003e((Socket,SockAddr)-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a client-side TLS \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e for the given settings, on top of the\n given TCP \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e connected to the remote end.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "makeClientContext",
          "package": "network-simple-tls",
          "signature": "ClientSettings -\u003e Socket -\u003e m Context",
          "source": "src/Network-Simple-TCP-TLS.html#makeClientContext",
          "type": "function"
        },
        "index": {
          "description": "Make client-side TLS Context for the given settings on top of the given TCP Socket connected to the remote end",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "makeClientContext",
          "normalized": "ClientSettings-\u003eSocket-\u003ea Context",
          "package": "network-simple-tls",
          "partial": "Client Context",
          "signature": "ClientSettings-\u003eSocket-\u003em Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:makeClientContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake defaults \u003ccode\u003e\u003ca\u003eClientSettings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe following TLS settings are used by default:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eSupported versions\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eTLS10\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTLS11\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTLS12\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003eVersion reported during \u003cem\u003eClientHello\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eTLS10\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003eSupported cipher suites\u003c/dt\u003e\u003cdd\u003e In decreasing order of preference:\n \u003ccode\u003e\u003ca\u003ecipher_AES256_SHA256\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecipher_AES256_SHA1\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecipher_AES128_SHA256\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecipher_AES128_SHA1\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecipher_RC4_128_SHA1\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecipher_RC4_128_MD5\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "makeClientSettings",
          "package": "network-simple-tls",
          "signature": "[Credential]-\u003e Maybe HostName-\u003e CertificateStore-\u003e ClientSettings",
          "type": "function"
        },
        "index": {
          "description": "Make defaults ClientSettings The following TLS settings are used by default Supported versions TLS10 TLS11 TLS12 Version reported during ClientHello TLS10 Supported cipher suites In decreasing order of preference cipher AES256 SHA256 cipher AES256 SHA1 cipher AES128 SHA256 cipher AES128 SHA1 cipher RC4 SHA1 cipher RC4 MD5",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "makeClientSettings",
          "normalized": "[Credential]-\u003eMaybe HostName-\u003eCertificateStore-\u003eClientSettings",
          "package": "network-simple-tls",
          "partial": "Client Settings",
          "signature": "[Credential]-\u003eMaybe HostName-\u003eCertificateStore-\u003eClientSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:makeClientSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a server-side TLS \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e for the given settings, on top of the\n given TCP \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e connected to the remote end.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "makeServerContext",
          "package": "network-simple-tls",
          "signature": "ServerSettings -\u003e Socket -\u003e m Context",
          "source": "src/Network-Simple-TCP-TLS.html#makeServerContext",
          "type": "function"
        },
        "index": {
          "description": "Make server-side TLS Context for the given settings on top of the given TCP Socket connected to the remote end",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "makeServerContext",
          "normalized": "ServerSettings-\u003eSocket-\u003ea Context",
          "package": "network-simple-tls",
          "partial": "Server Context",
          "signature": "ServerSettings-\u003eSocket-\u003em Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:makeServerContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake default \u003ccode\u003e\u003ca\u003eServerSettings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe following TLS settings are used by default:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eSupported versions\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003e\u003ca\u003eTLS10\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTLS11\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTLS12\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003eSupported cipher suites for \u003ccode\u003e\u003ca\u003eTLS10\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n In decreasing order of preference:\n \u003ccode\u003e\u003ca\u003ecipher_AES256_SHA256\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecipher_AES256_SHA1\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecipher_AES128_SHA256\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecipher_AES128_SHA1\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecipher_RC4_128_SHA1\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecipher_RC4_128_MD5\u003c/a\u003e\u003c/code\u003e.\n The cipher suite preferred by the client is used.\n\u003c/dd\u003e\u003cdt\u003eSupported cipher suites for \u003ccode\u003e\u003ca\u003eTLS11\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eTLS12\u003c/a\u003e\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n In decreasing order of preference:\n \u003ccode\u003e\u003ca\u003ecipher_AES256_SHA256\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecipher_AES256_SHA1\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecipher_AES128_SHA256\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ecipher_AES128_SHA1\u003c/a\u003e\u003c/code\u003e.\n The cipher suite preferred by the client is used.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "makeServerSettings",
          "package": "network-simple-tls",
          "signature": "Credential-\u003e Maybe CertificateStore-\u003e ServerSettings",
          "type": "function"
        },
        "index": {
          "description": "Make default ServerSettings The following TLS settings are used by default Supported versions TLS10 TLS11 TLS12 Supported cipher suites for TLS10 In decreasing order of preference cipher AES256 SHA256 cipher AES256 SHA1 cipher AES128 SHA256 cipher AES128 SHA1 cipher RC4 SHA1 cipher RC4 MD5 The cipher suite preferred by the client is used Supported cipher suites for TLS11 and TLS12 In decreasing order of preference cipher AES256 SHA256 cipher AES256 SHA1 cipher AES128 SHA256 cipher AES128 SHA1 The cipher suite preferred by the client is used",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "makeServerSettings",
          "normalized": "Credential-\u003eMaybe CertificateStore-\u003eServerSettings",
          "package": "network-simple-tls",
          "partial": "Server Settings",
          "signature": "Credential-\u003eMaybe CertificateStore-\u003eServerSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:makeServerSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceives decrypted bytes from the given \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e. Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n on EOF.\n\u003c/p\u003e\u003cp\u003eUp to \u003ccode\u003e16384\u003c/code\u003e decrypted bytes will be received at once. The TLS connection is\n automatically renegotiated if a \u003cem\u003eClientHello\u003c/em\u003e message is received.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "recv",
          "package": "network-simple-tls",
          "signature": "Context -\u003e m (Maybe ByteString)",
          "source": "src/Network-Simple-TCP-TLS.html#recv",
          "type": "function"
        },
        "index": {
          "description": "Receives decrypted bytes from the given Context Returns Nothing on EOF Up to decrypted bytes will be received at once The TLS connection is automatically renegotiated if ClientHello message is received",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "recv",
          "normalized": "Context-\u003ea(Maybe ByteString)",
          "package": "network-simple-tls",
          "signature": "Context-\u003em(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:recv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypts the given strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and sends it through the\n \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "send",
          "package": "network-simple-tls",
          "signature": "Context -\u003e ByteString -\u003e m ()",
          "source": "src/Network-Simple-TCP-TLS.html#send",
          "type": "function"
        },
        "index": {
          "description": "Encrypts the given strict ByteString and sends it through the Context",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "send",
          "normalized": "Context-\u003eByteString-\u003ea()",
          "package": "network-simple-tls",
          "signature": "Context-\u003eByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a TLS-secured TCP server that accepts incoming connections and\n handles each of them concurrently, in different threads.\n\u003c/p\u003e\u003cp\u003eAny acquired network resources are properly closed and discarded when done or\n in case of exceptions. This function binds a listening socket, accepts an\n incoming connection, performs a TLS handshake and then safely closes the\n connection when done or in case of exceptions. You don't need to perform any\n of those steps manually.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "serve",
          "package": "network-simple-tls",
          "signature": "ServerSettings-\u003e HostPreference-\u003e ServiceName-\u003e ((Context, SockAddr) -\u003e IO ())-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Start TLS-secured TCP server that accepts incoming connections and handles each of them concurrently in different threads Any acquired network resources are properly closed and discarded when done or in case of exceptions This function binds listening socket accepts an incoming connection performs TLS handshake and then safely closes the connection when done or in case of exceptions You don need to perform any of those steps manually",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "serve",
          "normalized": "ServerSettings-\u003eHostPreference-\u003eServiceName-\u003e((Context,SockAddr)-\u003eIO())-\u003ea()",
          "package": "network-simple-tls",
          "signature": "ServerSettings-\u003eHostPreference-\u003eServiceName-\u003e((Context,SockAddr)-\u003eIO())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:serve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e into the TLS server configuration \u003ccode\u003e\u003ca\u003eParams\u003c/a\u003e\u003c/code\u003e.\n See the \u003ca\u003eNetwork.TLS\u003c/a\u003e and the \u003ccode\u003elens\u003c/code\u003e package for details.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "serverParams",
          "package": "network-simple-tls",
          "signature": "(Params -\u003e f Params) -\u003e ServerSettings -\u003e f ServerSettings",
          "source": "src/Network-Simple-TCP-TLS.html#serverParams",
          "type": "function"
        },
        "index": {
          "description": "Lens into the TLS server configuration Params See the Network.TLS and the lens package for details",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "serverParams",
          "normalized": "(Params-\u003ea Params)-\u003eServerSettings-\u003ea ServerSettings",
          "package": "network-simple-tls",
          "partial": "Params",
          "signature": "(Params-\u003ef Params)-\u003eServerSettings-\u003ef ServerSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:serverParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate advanced TLS client configuration \u003ccode\u003e\u003ca\u003eParams\u003c/a\u003e\u003c/code\u003e.\n See the \u003ca\u003eNetwork.TLS\u003c/a\u003e module for details.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "updateClientParams",
          "package": "network-simple-tls",
          "signature": "(Params -\u003e Params) -\u003e ClientSettings -\u003e ClientSettings",
          "source": "src/Network-Simple-TCP-TLS.html#updateClientParams",
          "type": "function"
        },
        "index": {
          "description": "Update advanced TLS client configuration Params See the Network.TLS module for details",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "updateClientParams",
          "normalized": "(Params-\u003eParams)-\u003eClientSettings-\u003eClientSettings",
          "package": "network-simple-tls",
          "partial": "Client Params",
          "signature": "(Params-\u003eParams)-\u003eClientSettings-\u003eClientSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:updateClientParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate advanced TLS server configuration \u003ccode\u003e\u003ca\u003eParams\u003c/a\u003e\u003c/code\u003e.\n See the \u003ca\u003eNetwork.TLS\u003c/a\u003e module for details.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "updateServerParams",
          "package": "network-simple-tls",
          "signature": "(Params -\u003e Params) -\u003e ServerSettings -\u003e ServerSettings",
          "source": "src/Network-Simple-TCP-TLS.html#updateServerParams",
          "type": "function"
        },
        "index": {
          "description": "Update advanced TLS server configuration Params See the Network.TLS module for details",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "updateServerParams",
          "normalized": "(Params-\u003eParams)-\u003eServerSettings-\u003eServerSettings",
          "package": "network-simple-tls",
          "partial": "Server Params",
          "signature": "(Params-\u003eParams)-\u003eServerSettings-\u003eServerSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:updateServerParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a TLS handshake on the given \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e, then perform the\n given action and at last gracefully close the TLS session using \u003ccode\u003e\u003ca\u003ebye\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function does not close the underlying TCP connection when done.\n Prefer to use \u003ccode\u003e\u003ca\u003euseTlsThenClose\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003euseTlsThenCloseFork\u003c/a\u003e\u003c/code\u003e if you need that\n behavior. Otherwise, you must call \u003ccode\u003e\u003ca\u003econtextClose\u003c/a\u003e\u003c/code\u003e yourself at some point.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "useTls",
          "package": "network-simple-tls",
          "signature": "((Context, SockAddr) -\u003e m a) -\u003e (Context, SockAddr) -\u003e m a",
          "source": "src/Network-Simple-TCP-TLS.html#useTls",
          "type": "function"
        },
        "index": {
          "description": "Perform TLS handshake on the given Context then perform the given action and at last gracefully close the TLS session using bye This function does not close the underlying TCP connection when done Prefer to use useTlsThenClose or useTlsThenCloseFork if you need that behavior Otherwise you must call contextClose yourself at some point",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "useTls",
          "normalized": "((Context,SockAddr)-\u003ea b)-\u003e(Context,SockAddr)-\u003ea b",
          "package": "network-simple-tls",
          "partial": "Tls",
          "signature": "((Context,SockAddr)-\u003em a)-\u003e(Context,SockAddr)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:useTls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003euseTls\u003c/a\u003e\u003c/code\u003e, except it also fully closes the TCP connection when done.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "useTlsThenClose",
          "package": "network-simple-tls",
          "signature": "((Context, SockAddr) -\u003e m a) -\u003e (Context, SockAddr) -\u003e m a",
          "source": "src/Network-Simple-TCP-TLS.html#useTlsThenClose",
          "type": "function"
        },
        "index": {
          "description": "Like useTls except it also fully closes the TCP connection when done",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "useTlsThenClose",
          "normalized": "((Context,SockAddr)-\u003ea b)-\u003e(Context,SockAddr)-\u003ea b",
          "package": "network-simple-tls",
          "partial": "Tls Then Close",
          "signature": "((Context,SockAddr)-\u003em a)-\u003e(Context,SockAddr)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:useTlsThenClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003euseTlsThenClose\u003c/a\u003e\u003c/code\u003e, except it performs the all the IO actions\n in a new  thread.\n\u003c/p\u003e\u003cp\u003eUse this instead of forking \u003ccode\u003e\u003ca\u003euseTlsThenClose\u003c/a\u003e\u003c/code\u003e yourself, as that won't give\n the right behavior.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "useTlsThenCloseFork",
          "package": "network-simple-tls",
          "signature": "((Context, SockAddr) -\u003e IO ()) -\u003e (Context, SockAddr) -\u003e m ThreadId",
          "source": "src/Network-Simple-TCP-TLS.html#useTlsThenCloseFork",
          "type": "function"
        },
        "index": {
          "description": "Similar to useTlsThenClose except it performs the all the IO actions in new thread Use this instead of forking useTlsThenClose yourself as that won give the right behavior",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "useTlsThenCloseFork",
          "normalized": "((Context,SockAddr)-\u003eIO())-\u003e(Context,SockAddr)-\u003ea ThreadId",
          "package": "network-simple-tls",
          "partial": "Tls Then Close Fork",
          "signature": "((Context,SockAddr)-\u003eIO())-\u003e(Context,SockAddr)-\u003em ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:useTlsThenCloseFork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOn Windows operating systems, the networking subsystem has to be\ninitialised using \u003ccode\u003e\u003ca\u003ewithSocketsDo\u003c/a\u003e\u003c/code\u003e before any networking operations can\nbe used.  eg.\n\u003c/p\u003e\u003cpre\u003e main = withSocketsDo $ do {...}\n\u003c/pre\u003e\u003cp\u003eAlthough this is only strictly necessary on Windows platforms, it is\nharmless on other platforms, so for portability it is good practice to\nuse it all the time.\n\u003c/p\u003e",
          "module": "Network.Simple.TCP.TLS",
          "name": "withSocketsDo",
          "package": "network-simple-tls",
          "signature": "IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "On Windows operating systems the networking subsystem has to be initialised using withSocketsDo before any networking operations can be used eg main withSocketsDo do Although this is only strictly necessary on Windows platforms it is harmless on other platforms so for portability it is good practice to use it all the time",
          "hierarchy": "Network Simple TCP TLS",
          "module": "Network.Simple.TCP.TLS",
          "name": "withSocketsDo",
          "normalized": "IO a-\u003eIO a",
          "package": "network-simple-tls",
          "partial": "Sockets Do",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-simple-tls/docs/Network-Simple-TCP-TLS.html#v:withSocketsDo"
      }
    }
  ]
]