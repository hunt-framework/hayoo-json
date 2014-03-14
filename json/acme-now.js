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
        "word": "acme-now"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Time.Now",
          "name": "Now",
          "package": "acme-now",
          "source": "src/Acme-Time-Now.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Acme Time Now",
          "module": "Acme.Time.Now",
          "name": "Now",
          "package": "acme-now",
          "partial": "Now",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-now/docs/Acme-Time-Now.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unchanging \"now\". If you get any errors or unexpecting results from using\n   this value, it's because your assumptions about the nature of time are wrong.\n   I have a proof of this, but the margin isn't large enough to contain it.\n\u003c/p\u003e",
          "module": "Acme.Time.Now",
          "name": "now",
          "package": "acme-now",
          "signature": "UTCTime",
          "source": "src/Acme-Time-Now.html#now",
          "type": "function"
        },
        "index": {
          "description": "The unchanging now If you get any errors or unexpecting results from using this value it because your assumptions about the nature of time are wrong have proof of this but the margin isn large enough to contain it",
          "hierarchy": "Acme Time Now",
          "module": "Acme.Time.Now",
          "name": "now",
          "package": "acme-now",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-now/docs/Acme-Time-Now.html#v:now"
      }
    }
  ]
]