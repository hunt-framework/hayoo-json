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
        "word": "scotty-tls"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.TLS",
          "name": "TLS",
          "package": "scotty-tls",
          "source": "src/Web-Scotty-TLS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web Scotty TLS",
          "module": "Web.Scotty.TLS",
          "name": "TLS",
          "package": "scotty-tls",
          "partial": "TLS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scotty-tls/docs/Web-Scotty-TLS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a Scotty application over TLS\n\u003c/p\u003e",
          "module": "Web.Scotty.TLS",
          "name": "scottyTLS",
          "package": "scotty-tls",
          "signature": "Port -\u003e FilePath -\u003e FilePath -\u003e ScottyM () -\u003e IO ()",
          "source": "src/Web-Scotty-TLS.html#scottyTLS",
          "type": "function"
        },
        "index": {
          "description": "Run Scotty application over TLS",
          "hierarchy": "Web Scotty TLS",
          "module": "Web.Scotty.TLS",
          "name": "scottyTLS",
          "normalized": "Port-\u003eFilePath-\u003eFilePath-\u003eScottyM()-\u003eIO()",
          "package": "scotty-tls",
          "partial": "TLS",
          "signature": "Port-\u003eFilePath-\u003eFilePath-\u003eScottyM()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-tls/docs/Web-Scotty-TLS.html#v:scottyTLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.TLS",
          "name": "scottyTTLS",
          "package": "scotty-tls",
          "signature": "Port -\u003e FilePath -\u003e FilePath -\u003e (forall a.  m a -\u003e n a) -\u003e (m Response -\u003e IO Response) -\u003e ScottyT m () -\u003e n ()",
          "source": "src/Web-Scotty-TLS.html#scottyTTLS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Scotty TLS",
          "module": "Web.Scotty.TLS",
          "name": "scottyTTLS",
          "normalized": "Port-\u003eFilePath-\u003eFilePath-\u003e(a b c d-\u003ee d)-\u003e(c Response-\u003eIO Response)-\u003eScottyT c()-\u003ee()",
          "package": "scotty-tls",
          "partial": "TTLS",
          "signature": "Port-\u003eFilePath-\u003eFilePath-\u003e(forall a. m a-\u003en a)-\u003e(m Response-\u003eIO Response)-\u003eScottyT m()-\u003en()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-tls/docs/Web-Scotty-TLS.html#v:scottyTTLS"
      }
    }
  ]
]