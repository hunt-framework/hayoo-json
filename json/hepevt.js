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
        "word": "hepevt"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a pure haskell implementation of a reader for the ASCII\nHEPEVT file format, rougly as described at\n\u003ca\u003ehttp://cepa.fnal.gov/psm/simulation/mcgen/lund/pythia_manual/pythia6.3/pythia6301/node39.html\u003c/a\u003e.\nCompatibility with the extended format used by HepMC\n(\u003ca\u003ehttp://lcgapp.cern.ch/project/simu/HepMC/\u003c/a\u003e) is given priority.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HEPEVT",
          "name": "HEPEVT",
          "package": "hepevt",
          "source": "src/Data-HEPEVT.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides pure haskell implementation of reader for the ASCII HEPEVT file format rougly as described at http cepa.fnal.gov psm simulation mcgen lund pythia manual pythia6.3 pythia6301 node39.html Compatibility with the extended format used by HepMC http lcgapp.cern.ch project simu HepMC is given priority",
          "hierarchy": "Data HEPEVT",
          "module": "Data.HEPEVT",
          "name": "HEPEVT",
          "package": "hepevt",
          "partial": "HEPEVT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hepevt/docs/Data-HEPEVT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HEPEVT",
          "name": "parseEventFile",
          "package": "hepevt",
          "signature": "String -\u003e IO [Event]",
          "source": "src/Data-HEPEVT.html#parseEventFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HEPEVT",
          "module": "Data.HEPEVT",
          "name": "parseEventFile",
          "normalized": "String-\u003eIO[Event]",
          "package": "hepevt",
          "partial": "Event File",
          "signature": "String-\u003eIO[Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hepevt/docs/Data-HEPEVT.html#v:parseEventFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HEPEVT",
          "name": "parseEvents",
          "package": "hepevt",
          "signature": "ByteString -\u003e [Event]",
          "source": "src/Data-HEPEVT.html#parseEvents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HEPEVT",
          "module": "Data.HEPEVT",
          "name": "parseEvents",
          "normalized": "ByteString-\u003e[Event]",
          "package": "hepevt",
          "partial": "Events",
          "signature": "ByteString-\u003e[Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hepevt/docs/Data-HEPEVT.html#v:parseEvents"
      }
    }
  ]
]