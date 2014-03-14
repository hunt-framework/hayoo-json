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
        "word": "http-client-tls"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for making connections via the connection package and, in turn,\n the tls package suite.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Client.TLS",
          "name": "TLS",
          "package": "http-client-tls",
          "source": "src/Network-HTTP-Client-TLS.html",
          "type": "module"
        },
        "index": {
          "description": "Support for making connections via the connection package and in turn the tls package suite",
          "hierarchy": "Network HTTP Client TLS",
          "module": "Network.HTTP.Client.TLS",
          "name": "TLS",
          "package": "http-client-tls",
          "partial": "TLS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-client-tls/docs/Network-HTTP-Client-TLS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.TLS",
          "name": "getTlsConnection",
          "package": "http-client-tls",
          "signature": "Maybe TLSSettings -\u003e Maybe SockSettings -\u003e IO (Maybe HostAddress -\u003e String -\u003e Int -\u003e IO Connection)",
          "source": "src/Network-HTTP-Client-TLS.html#getTlsConnection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client TLS",
          "module": "Network.HTTP.Client.TLS",
          "name": "getTlsConnection",
          "normalized": "Maybe TLSSettings-\u003eMaybe SockSettings-\u003eIO(Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection)",
          "package": "http-client-tls",
          "partial": "Tls Connection",
          "signature": "Maybe TLSSettings-\u003eMaybe SockSettings-\u003eIO(Maybe HostAddress-\u003eString-\u003eInt-\u003eIO Connection)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-tls/docs/Network-HTTP-Client-TLS.html#v:getTlsConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.TLS",
          "name": "mkManagerSettings",
          "package": "http-client-tls",
          "signature": "TLSSettings -\u003e Maybe SockSettings -\u003e ManagerSettings",
          "source": "src/Network-HTTP-Client-TLS.html#mkManagerSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client TLS",
          "module": "Network.HTTP.Client.TLS",
          "name": "mkManagerSettings",
          "normalized": "TLSSettings-\u003eMaybe SockSettings-\u003eManagerSettings",
          "package": "http-client-tls",
          "partial": "Manager Settings",
          "signature": "TLSSettings-\u003eMaybe SockSettings-\u003eManagerSettings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-tls/docs/Network-HTTP-Client-TLS.html#v:mkManagerSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Client.TLS",
          "name": "tlsManagerSettings",
          "package": "http-client-tls",
          "signature": "ManagerSettings",
          "source": "src/Network-HTTP-Client-TLS.html#tlsManagerSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Client TLS",
          "module": "Network.HTTP.Client.TLS",
          "name": "tlsManagerSettings",
          "package": "http-client-tls",
          "partial": "Manager Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-client-tls/docs/Network-HTTP-Client-TLS.html#v:tlsManagerSettings"
      }
    }
  ]
]