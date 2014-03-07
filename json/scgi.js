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
        "word": "scgi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SCGI",
          "name": "SCGI",
          "package": "scgi",
          "source": "src/Network-SCGI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "SCGI",
          "package": "scgi",
          "partial": "SCGI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scgi/docs/Network-SCGI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SCGI",
          "name": "runOnceSCGI",
          "package": "scgi",
          "signature": "PortID -\u003e CGI CGIResult -\u003e IO ()",
          "source": "src/Network-SCGI.html#runOnceSCGI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "runOnceSCGI",
          "normalized": "PortID-\u003eCGI CGIResult-\u003eIO()",
          "package": "scgi",
          "partial": "Once SCGI",
          "signature": "PortID-\u003eCGI CGIResult-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scgi/docs/Network-SCGI.html#v:runOnceSCGI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SCGI",
          "name": "runSCGI",
          "package": "scgi",
          "signature": "PortID -\u003e CGI CGIResult -\u003e IO ()",
          "source": "src/Network-SCGI.html#runSCGI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "runSCGI",
          "normalized": "PortID-\u003eCGI CGIResult-\u003eIO()",
          "package": "scgi",
          "partial": "SCGI",
          "signature": "PortID-\u003eCGI CGIResult-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scgi/docs/Network-SCGI.html#v:runSCGI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SCGI",
          "name": "runSCGIConcurrent",
          "package": "scgi",
          "signature": "Int-\u003e PortID-\u003e CGI CGIResult-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "runSCGIConcurrent",
          "normalized": "Int-\u003ePortID-\u003eCGI CGIResult-\u003eIO()",
          "package": "scgi",
          "partial": "SCGIConcurrent",
          "signature": "Int-\u003ePortID-\u003eCGI CGIResult-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scgi/docs/Network-SCGI.html#v:runSCGIConcurrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SCGI",
          "name": "runSCGIConcurrent'",
          "package": "scgi",
          "signature": "(IO () -\u003e IO a)-\u003e Int-\u003e PortID-\u003e CGI CGIResult-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "runSCGIConcurrent'",
          "normalized": "(IO()-\u003eIO a)-\u003eInt-\u003ePortID-\u003eCGI CGIResult-\u003eIO()",
          "package": "scgi",
          "partial": "SCGIConcurrent'",
          "signature": "(IO()-\u003eIO a)-\u003eInt-\u003ePortID-\u003eCGI CGIResult-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scgi/docs/Network-SCGI.html#v:runSCGIConcurrent-39-"
      }
    }
  ]
]