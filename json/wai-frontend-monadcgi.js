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
        "word": "wai-frontend-monadcgi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Frontend.MonadCGI",
          "name": "MonadCGI",
          "package": "wai-frontend-monadcgi",
          "source": "src/Network-Wai-Frontend-MonadCGI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Wai Frontend MonadCGI",
          "module": "Network.Wai.Frontend.MonadCGI",
          "name": "MonadCGI",
          "package": "wai-frontend-monadcgi",
          "partial": "Monad CGI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-frontend-monadcgi/docs/Network-Wai-Frontend-MonadCGI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Frontend.MonadCGI",
          "name": "cgiToApp",
          "package": "wai-frontend-monadcgi",
          "signature": "CGI CGIResult -\u003e Application",
          "source": "src/Network-Wai-Frontend-MonadCGI.html#cgiToApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Frontend MonadCGI",
          "module": "Network.Wai.Frontend.MonadCGI",
          "name": "cgiToApp",
          "normalized": "CGI CGIResult-\u003eApplication",
          "package": "wai-frontend-monadcgi",
          "partial": "To App",
          "signature": "CGI CGIResult-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-frontend-monadcgi/docs/Network-Wai-Frontend-MonadCGI.html#v:cgiToApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Frontend.MonadCGI",
          "name": "cgiToAppGeneric",
          "package": "wai-frontend-monadcgi",
          "signature": "(m (Headers, CGIResult) -\u003e IO (Headers, CGIResult)) -\u003e CGIT m CGIResult -\u003e Application",
          "source": "src/Network-Wai-Frontend-MonadCGI.html#cgiToAppGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Frontend MonadCGI",
          "module": "Network.Wai.Frontend.MonadCGI",
          "name": "cgiToAppGeneric",
          "normalized": "(a(Headers,CGIResult)-\u003eIO(Headers,CGIResult))-\u003eCGIT a CGIResult-\u003eApplication",
          "package": "wai-frontend-monadcgi",
          "partial": "To App Generic",
          "signature": "(m(Headers,CGIResult)-\u003eIO(Headers,CGIResult))-\u003eCGIT m CGIResult-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-frontend-monadcgi/docs/Network-Wai-Frontend-MonadCGI.html#v:cgiToAppGeneric"
      }
    }
  ]
]