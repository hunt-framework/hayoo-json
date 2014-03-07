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
        "word": "hack-frontend-monadcgi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hack.Frontend.MonadCGI",
          "name": "MonadCGI",
          "package": "hack-frontend-monadcgi",
          "source": "src/Hack-Frontend-MonadCGI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hack Frontend MonadCGI",
          "module": "Hack.Frontend.MonadCGI",
          "name": "MonadCGI",
          "package": "hack-frontend-monadcgi",
          "partial": "Monad CGI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hack-frontend-monadcgi/docs/Hack-Frontend-MonadCGI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hack.Frontend.MonadCGI",
          "name": "cgiToApp",
          "package": "hack-frontend-monadcgi",
          "signature": "CGI CGIResult -\u003e Application",
          "source": "src/Hack-Frontend-MonadCGI.html#cgiToApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hack Frontend MonadCGI",
          "module": "Hack.Frontend.MonadCGI",
          "name": "cgiToApp",
          "normalized": "CGI CGIResult-\u003eApplication",
          "package": "hack-frontend-monadcgi",
          "partial": "To App",
          "signature": "CGI CGIResult-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hack-frontend-monadcgi/docs/Hack-Frontend-MonadCGI.html#v:cgiToApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hack.Frontend.MonadCGI",
          "name": "cgiToAppGeneric",
          "package": "hack-frontend-monadcgi",
          "signature": "(m (Headers, CGIResult) -\u003e IO (Headers, CGIResult)) -\u003e CGIT m CGIResult -\u003e Application",
          "source": "src/Hack-Frontend-MonadCGI.html#cgiToAppGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hack Frontend MonadCGI",
          "module": "Hack.Frontend.MonadCGI",
          "name": "cgiToAppGeneric",
          "normalized": "(a(Headers,CGIResult)-\u003eIO(Headers,CGIResult))-\u003eCGIT a CGIResult-\u003eApplication",
          "package": "hack-frontend-monadcgi",
          "partial": "To App Generic",
          "signature": "(m(Headers,CGIResult)-\u003eIO(Headers,CGIResult))-\u003eCGIT m CGIResult-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hack-frontend-monadcgi/docs/Hack-Frontend-MonadCGI.html#v:cgiToAppGeneric"
      }
    }
  ]
]