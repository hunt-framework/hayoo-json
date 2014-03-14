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
        "word": "happstack-server-tls"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ecore functions and types for HTTPS support\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Happstack.Server.Internal.TLS",
          "name": "TLS",
          "package": "happstack-server-tls",
          "source": "src/Happstack-Server-Internal-TLS.html",
          "type": "module"
        },
        "index": {
          "description": "core functions and types for HTTPS support",
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "TLS",
          "package": "happstack-server-tls",
          "partial": "TLS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecord that holds the \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSSLContext\u003c/a\u003e\u003c/code\u003e needed to start\n the https:// event loop. Used with \u003ccode\u003esimpleHTTPWithSocket'\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003ehttpOnSocket\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.TLS",
          "name": "HTTPS",
          "package": "happstack-server-tls",
          "source": "src/Happstack-Server-Internal-TLS.html#HTTPS",
          "type": "data"
        },
        "index": {
          "description": "record that holds the Socket and SSLContext needed to start the https event loop Used with simpleHTTPWithSocket see also httpOnSocket",
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "HTTPS",
          "package": "happstack-server-tls",
          "partial": "HTTPS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#t:HTTPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econfiguration for using https://\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.TLS",
          "name": "TLSConf",
          "package": "happstack-server-tls",
          "source": "src/Happstack-Server-Internal-TLS.html#TLSConf",
          "type": "data"
        },
        "index": {
          "description": "configuration for using https",
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "TLSConf",
          "package": "happstack-server-tls",
          "partial": "TLSConf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#t:TLSConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TLS",
          "name": "HTTPS",
          "package": "happstack-server-tls",
          "signature": "HTTPS",
          "source": "src/Happstack-Server-Internal-TLS.html#HTTPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "HTTPS",
          "package": "happstack-server-tls",
          "partial": "HTTPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:HTTPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.TLS\",\"Happstack.Server.SimpleHTTPS\"]",
          "name": "TLSConf",
          "package": "happstack-server-tls",
          "signature": "TLSConf",
          "source": "src/Happstack-Server-Internal-TLS.html#TLSConf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:TLSConf\",\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-SimpleHTTPS.html#v:TLSConf\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "TLSConf",
          "package": "happstack-server-tls",
          "partial": "TLSConf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:TLSConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eaccept a TLS connection\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.TLS",
          "name": "acceptTLS",
          "package": "happstack-server-tls",
          "signature": "HTTPS -\u003e IO (Socket, SSL, HostName, PortNumber)",
          "source": "src/Happstack-Server-Internal-TLS.html#acceptTLS",
          "type": "function"
        },
        "index": {
          "description": "accept TLS connection",
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "acceptTLS",
          "normalized": "HTTPS-\u003eIO(Socket,SSL,HostName,PortNumber)",
          "package": "happstack-server-tls",
          "partial": "TLS",
          "signature": "HTTPS-\u003eIO(Socket,SSL,HostName,PortNumber)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:acceptTLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerate the \u003ccode\u003e\u003ca\u003eHTTPS\u003c/a\u003e\u003c/code\u003e record needed to start the https:// event loop\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.TLS",
          "name": "httpsOnSocket",
          "package": "happstack-server-tls",
          "signature": "FilePath-\u003e FilePath-\u003e Maybe FilePath-\u003e Socket-\u003e IO HTTPS",
          "type": "function"
        },
        "index": {
          "description": "generate the HTTPS record needed to start the https event loop",
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "httpsOnSocket",
          "normalized": "FilePath-\u003eFilePath-\u003eMaybe FilePath-\u003eSocket-\u003eIO HTTPS",
          "package": "happstack-server-tls",
          "partial": "On Socket",
          "signature": "FilePath-\u003eFilePath-\u003eMaybe FilePath-\u003eSocket-\u003eIO HTTPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:httpsOnSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TLS",
          "name": "httpsSocket",
          "package": "happstack-server-tls",
          "signature": "Socket",
          "source": "src/Happstack-Server-Internal-TLS.html#HTTPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "httpsSocket",
          "package": "happstack-server-tls",
          "partial": "Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:httpsSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehttps:\u003cem/\u003e 'Request'/'Response' loop\n\u003c/p\u003e\u003cp\u003eThis function initializes SSL, and starts accepting and handling\n \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es and sending \u003ccode\u003eRespone\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eEach \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e is processed in a separate thread.\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.TLS",
          "name": "listenTLS",
          "package": "happstack-server-tls",
          "signature": "TLSConf-\u003e (Request -\u003e IO Response)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "https Request Response loop This function initializes SSL and starts accepting and handling Request and sending Respone Each Request is processed in separate thread",
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "listenTLS",
          "normalized": "TLSConf-\u003e(Request-\u003eIO Response)-\u003eIO()",
          "package": "happstack-server-tls",
          "partial": "TLS",
          "signature": "TLSConf-\u003e(Request-\u003eIO Response)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:listenTLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elow-level https:\u003cem/\u003e 'Request'/'Response' loop\n\u003c/p\u003e\u003cp\u003eThis is the low-level loop that reads \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es and sends\n \u003ccode\u003eRespone\u003c/code\u003es. It assumes that SSL has already been initialized and\n that socket is listening.\n\u003c/p\u003e\u003cp\u003eEach \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e is processed in a separate thread.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003elistenTLS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.TLS",
          "name": "listenTLS'",
          "package": "happstack-server-tls",
          "signature": "Int -\u003e Maybe (LogAccess UTCTime) -\u003e Socket -\u003e HTTPS -\u003e (Request -\u003e IO Response) -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-TLS.html#listenTLS%27",
          "type": "function"
        },
        "index": {
          "description": "low-level https Request Response loop This is the low-level loop that reads Request and sends Respone It assumes that SSL has already been initialized and that socket is listening Each Request is processed in separate thread see also listenTLS",
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "listenTLS'",
          "normalized": "Int-\u003eMaybe(LogAccess UTCTime)-\u003eSocket-\u003eHTTPS-\u003e(Request-\u003eIO Response)-\u003eIO()",
          "package": "happstack-server-tls",
          "partial": "TLS'",
          "signature": "Int-\u003eMaybe(LogAccess UTCTime)-\u003eSocket-\u003eHTTPS-\u003e(Request-\u003eIO Response)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:listenTLS-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrapper around \u003ccode\u003e\u003ca\u003elogM\u003c/a\u003e\u003c/code\u003e for this module\n\u003c/p\u003e",
          "module": "Happstack.Server.Internal.TLS",
          "name": "log'",
          "package": "happstack-server-tls",
          "signature": "Priority -\u003e String -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-TLS.html#log%27",
          "type": "function"
        },
        "index": {
          "description": "wrapper around logM for this module",
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "log'",
          "normalized": "Priority-\u003eString-\u003eIO()",
          "package": "happstack-server-tls",
          "signature": "Priority-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:log-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea partially complete \u003ccode\u003e\u003ca\u003eTLSConf\u003c/a\u003e\u003c/code\u003e . You must sete \u003ccode\u003e\u003ca\u003etlsCert\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etlsKey\u003c/a\u003e\u003c/code\u003e at a mininum.\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.TLS\",\"Happstack.Server.SimpleHTTPS\"]",
          "name": "nullTLSConf",
          "package": "happstack-server-tls",
          "signature": "TLSConf",
          "source": "src/Happstack-Server-Internal-TLS.html#nullTLSConf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:nullTLSConf\",\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-SimpleHTTPS.html#v:nullTLSConf\"]"
        },
        "index": {
          "description": "partially complete TLSConf You must sete tlsCert and tlsKey at mininum",
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "nullTLSConf",
          "package": "happstack-server-tls",
          "partial": "TLSConf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:nullTLSConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TLS",
          "name": "sslContext",
          "package": "happstack-server-tls",
          "signature": "SSLContext",
          "source": "src/Happstack-Server-Internal-TLS.html#HTTPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "sslContext",
          "package": "happstack-server-tls",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:sslContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.TLS\",\"Happstack.Server.SimpleHTTPS\"]",
          "name": "tlsCA",
          "package": "happstack-server-tls",
          "signature": "Maybe FilePath",
          "source": "src/Happstack-Server-Internal-TLS.html#TLSConf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:tlsCA\",\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-SimpleHTTPS.html#v:tlsCA\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "tlsCA",
          "package": "happstack-server-tls",
          "partial": "CA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:tlsCA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.TLS\",\"Happstack.Server.SimpleHTTPS\"]",
          "name": "tlsCert",
          "package": "happstack-server-tls",
          "signature": "FilePath",
          "source": "src/Happstack-Server-Internal-TLS.html#TLSConf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:tlsCert\",\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-SimpleHTTPS.html#v:tlsCert\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "tlsCert",
          "package": "happstack-server-tls",
          "partial": "Cert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:tlsCert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.TLS\",\"Happstack.Server.SimpleHTTPS\"]",
          "name": "tlsKey",
          "package": "happstack-server-tls",
          "signature": "FilePath",
          "source": "src/Happstack-Server-Internal-TLS.html#TLSConf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:tlsKey\",\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-SimpleHTTPS.html#v:tlsKey\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "tlsKey",
          "package": "happstack-server-tls",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:tlsKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.TLS\",\"Happstack.Server.SimpleHTTPS\"]",
          "name": "tlsLogAccess",
          "package": "happstack-server-tls",
          "signature": "Maybe (LogAccess UTCTime)",
          "source": "src/Happstack-Server-Internal-TLS.html#TLSConf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:tlsLogAccess\",\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-SimpleHTTPS.html#v:tlsLogAccess\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "tlsLogAccess",
          "package": "happstack-server-tls",
          "partial": "Log Access",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:tlsLogAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.TLS\",\"Happstack.Server.SimpleHTTPS\"]",
          "name": "tlsPort",
          "package": "happstack-server-tls",
          "signature": "Int",
          "source": "src/Happstack-Server-Internal-TLS.html#TLSConf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:tlsPort\",\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-SimpleHTTPS.html#v:tlsPort\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "tlsPort",
          "package": "happstack-server-tls",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:tlsPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Happstack.Server.Internal.TLS\",\"Happstack.Server.SimpleHTTPS\"]",
          "name": "tlsTimeout",
          "package": "happstack-server-tls",
          "signature": "Int",
          "source": "src/Happstack-Server-Internal-TLS.html#TLSConf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:tlsTimeout\",\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-SimpleHTTPS.html#v:tlsTimeout\"]"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "tlsTimeout",
          "package": "happstack-server-tls",
          "partial": "Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:tlsTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea function to validate the output on-the-fly\n\u003c/p\u003e",
          "module": "[\"Happstack.Server.Internal.TLS\",\"Happstack.Server.SimpleHTTPS\"]",
          "name": "tlsValidator",
          "package": "happstack-server-tls",
          "signature": "Maybe (Response -\u003e IO Response)",
          "source": "src/Happstack-Server-Internal-TLS.html#TLSConf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:tlsValidator\",\"http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-SimpleHTTPS.html#v:tlsValidator\"]"
        },
        "index": {
          "description": "function to validate the output on-the-fly",
          "hierarchy": "Happstack Server Internal TLS",
          "module": "Happstack.Server.Internal.TLS",
          "name": "tlsValidator",
          "normalized": "Maybe(Response-\u003eIO Response)",
          "package": "happstack-server-tls",
          "partial": "Validator",
          "signature": "Maybe(Response-\u003eIO Response)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TLS.html#v:tlsValidator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cul\u003e\u003cli\u003e- borrowed from snap-server. Check there periodically for updates.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Happstack.Server.Internal.TimeoutSocketTLS",
          "name": "TimeoutSocketTLS",
          "package": "happstack-server-tls",
          "source": "src/Happstack-Server-Internal-TimeoutSocketTLS.html",
          "type": "module"
        },
        "index": {
          "description": "borrowed from snap-server Check there periodically for updates",
          "hierarchy": "Happstack Server Internal TimeoutSocketTLS",
          "module": "Happstack.Server.Internal.TimeoutSocketTLS",
          "name": "TimeoutSocketTLS",
          "package": "happstack-server-tls",
          "partial": "Timeout Socket TLS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TimeoutSocketTLS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutSocketTLS",
          "name": "sGetContents",
          "package": "happstack-server-tls",
          "signature": "Handle-\u003e SSL-\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutSocketTLS",
          "module": "Happstack.Server.Internal.TimeoutSocketTLS",
          "name": "sGetContents",
          "normalized": "Handle-\u003eSSL-\u003eIO ByteString",
          "package": "happstack-server-tls",
          "partial": "Get Contents",
          "signature": "Handle-\u003eSSL-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TimeoutSocketTLS.html#v:sGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutSocketTLS",
          "name": "sPutLazyTickle",
          "package": "happstack-server-tls",
          "signature": "Handle -\u003e SSL -\u003e ByteString -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-TimeoutSocketTLS.html#sPutLazyTickle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutSocketTLS",
          "module": "Happstack.Server.Internal.TimeoutSocketTLS",
          "name": "sPutLazyTickle",
          "normalized": "Handle-\u003eSSL-\u003eByteString-\u003eIO()",
          "package": "happstack-server-tls",
          "partial": "Put Lazy Tickle",
          "signature": "Handle-\u003eSSL-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TimeoutSocketTLS.html#v:sPutLazyTickle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutSocketTLS",
          "name": "sPutTickle",
          "package": "happstack-server-tls",
          "signature": "Handle -\u003e SSL -\u003e ByteString -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-TimeoutSocketTLS.html#sPutTickle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutSocketTLS",
          "module": "Happstack.Server.Internal.TimeoutSocketTLS",
          "name": "sPutTickle",
          "normalized": "Handle-\u003eSSL-\u003eByteString-\u003eIO()",
          "package": "happstack-server-tls",
          "partial": "Put Tickle",
          "signature": "Handle-\u003eSSL-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TimeoutSocketTLS.html#v:sPutTickle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutSocketTLS",
          "name": "sendFileTickle",
          "package": "happstack-server-tls",
          "signature": "Handle -\u003e SSL -\u003e FilePath -\u003e Offset -\u003e ByteCount -\u003e IO ()",
          "source": "src/Happstack-Server-Internal-TimeoutSocketTLS.html#sendFileTickle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutSocketTLS",
          "module": "Happstack.Server.Internal.TimeoutSocketTLS",
          "name": "sendFileTickle",
          "normalized": "Handle-\u003eSSL-\u003eFilePath-\u003eOffset-\u003eByteCount-\u003eIO()",
          "package": "happstack-server-tls",
          "partial": "File Tickle",
          "signature": "Handle-\u003eSSL-\u003eFilePath-\u003eOffset-\u003eByteCount-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TimeoutSocketTLS.html#v:sendFileTickle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Internal.TimeoutSocketTLS",
          "name": "timeoutSocketIO",
          "package": "happstack-server-tls",
          "signature": "Handle -\u003e Socket -\u003e SSL -\u003e TimeoutIO",
          "source": "src/Happstack-Server-Internal-TimeoutSocketTLS.html#timeoutSocketIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack Server Internal TimeoutSocketTLS",
          "module": "Happstack.Server.Internal.TimeoutSocketTLS",
          "name": "timeoutSocketIO",
          "normalized": "Handle-\u003eSocket-\u003eSSL-\u003eTimeoutIO",
          "package": "happstack-server-tls",
          "partial": "Socket IO",
          "signature": "Handle-\u003eSocket-\u003eSSL-\u003eTimeoutIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-Internal-TimeoutSocketTLS.html#v:timeoutSocketIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.SimpleHTTPS",
          "name": "SimpleHTTPS",
          "package": "happstack-server-tls",
          "source": "src/Happstack-Server-SimpleHTTPS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Server SimpleHTTPS",
          "module": "Happstack.Server.SimpleHTTPS",
          "name": "SimpleHTTPS",
          "package": "happstack-server-tls",
          "partial": "Simple HTTPS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-SimpleHTTPS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econfiguration for using https://\n\u003c/p\u003e",
          "module": "Happstack.Server.SimpleHTTPS",
          "name": "TLSConf",
          "package": "happstack-server-tls",
          "source": "src/Happstack-Server-Internal-TLS.html#TLSConf",
          "type": "data"
        },
        "index": {
          "description": "configuration for using https",
          "hierarchy": "Happstack Server SimpleHTTPS",
          "module": "Happstack.Server.SimpleHTTPS",
          "name": "TLSConf",
          "package": "happstack-server-tls",
          "partial": "TLSConf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-SimpleHTTPS.html#t:TLSConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart the https:// server, and handle requests using the supplied\n \u003ccode\u003eServerPart\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function will not return, though it may throw an exception.\n\u003c/p\u003e",
          "module": "Happstack.Server.SimpleHTTPS",
          "name": "simpleHTTPS",
          "package": "happstack-server-tls",
          "signature": "TLSConf-\u003e ServerPartT IO a-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "start the https server and handle requests using the supplied ServerPart This function will not return though it may throw an exception",
          "hierarchy": "Happstack Server SimpleHTTPS",
          "module": "Happstack.Server.SimpleHTTPS",
          "name": "simpleHTTPS",
          "normalized": "TLSConf-\u003eServerPartT IO a-\u003eIO()",
          "package": "happstack-server-tls",
          "partial": "HTTPS",
          "signature": "TLSConf-\u003eServerPartT IO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-SimpleHTTPS.html#v:simpleHTTPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimilar \u003ccode\u003e\u003ca\u003esimpleHTTPS\u003c/a\u003e\u003c/code\u003e but allows you to supply a function to convert \u003ccode\u003em\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Happstack.Server.SimpleHTTPS",
          "name": "simpleHTTPS'",
          "package": "happstack-server-tls",
          "signature": "(UnWebT m a -\u003e UnWebT IO b) -\u003e TLSConf -\u003e ServerPartT m a -\u003e IO ()",
          "source": "src/Happstack-Server-SimpleHTTPS.html#simpleHTTPS%27",
          "type": "function"
        },
        "index": {
          "description": "similar simpleHTTPS but allows you to supply function to convert to IO",
          "hierarchy": "Happstack Server SimpleHTTPS",
          "module": "Happstack.Server.SimpleHTTPS",
          "name": "simpleHTTPS'",
          "normalized": "(UnWebT a b-\u003eUnWebT IO c)-\u003eTLSConf-\u003eServerPartT a b-\u003eIO()",
          "package": "happstack-server-tls",
          "partial": "HTTPS'",
          "signature": "(UnWebT m a-\u003eUnWebT IO b)-\u003eTLSConf-\u003eServerPartT m a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/happstack-server-tls/docs/Happstack-Server-SimpleHTTPS.html#v:simpleHTTPS-39-"
      }
    }
  ]
]