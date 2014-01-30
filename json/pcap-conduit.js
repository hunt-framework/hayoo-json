[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap-conduit/docs/Network-Pcap-Conduit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides conduit \u003ccode\u003eSources\u003c/code\u003e for pcap data ( captured by\n wireshark, tcpdump, etc.) You can enumerate pcap files and live\n interfaces.\n\u003c/p\u003e\u003cp\u003eBased on \u003ccode\u003epcap-enumerator\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Pcap.Conduit",
        "fct-package": "pcap-conduit",
        "fct-signature": "module",
        "fct-source": "src/Network-Pcap-Conduit.html",
        "fct-type": "module",
        "title": "Conduit"
      },
      "index": {
        "description": "This package provides conduit Sources for pcap data captured by wireshark tcpdump etc You can enumerate pcap files and live interfaces Based on pcap-enumerator",
        "hierarchy": "Network Pcap Conduit",
        "module": "Network.Pcap.Conduit",
        "name": "Conduit",
        "normalized": "",
        "package": "pcap-conduit",
        "partial": "Conduit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap-conduit/docs/Network-Pcap-Conduit.html#t:Packet",
      "description": {
        "fct-descr": "\u003cp\u003eConvenient alias.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Conduit",
        "fct-package": "pcap-conduit",
        "fct-signature": "type",
        "fct-source": "src/Network-Pcap-Conduit.html#Packet",
        "fct-type": "type",
        "title": "Packet"
      },
      "index": {
        "description": "Convenient alias",
        "hierarchy": "Network Pcap Conduit",
        "module": "Network.Pcap.Conduit",
        "name": "Packet",
        "normalized": "",
        "package": "pcap-conduit",
        "partial": "Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap-conduit/docs/Network-Pcap-Conduit.html#v:sourceLive",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a conduit \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e from a live interface.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Conduit",
        "fct-package": "pcap-conduit",
        "fct-signature": "String-\u003e Int-\u003e Bool-\u003e Int64-\u003e Source m Packet",
        "fct-type": "function",
        "title": "sourceLive"
      },
      "index": {
        "description": "Create conduit Source from live interface",
        "hierarchy": "Network Pcap Conduit",
        "module": "Network.Pcap.Conduit",
        "name": "sourceLive",
        "normalized": "String-\u003eInt-\u003eBool-\u003eInt-\u003eSource a Packet",
        "package": "pcap-conduit",
        "partial": "Live",
        "signature": "String-\u003eInt-\u003eBool-\u003eInt-\u003eSource m Packet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcap-conduit/docs/Network-Pcap-Conduit.html#v:sourceOffline",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a conduit \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e from a pcap data file.\n\u003c/p\u003e",
        "fct-module": "Network.Pcap.Conduit",
        "fct-package": "pcap-conduit",
        "fct-signature": "FilePath -\u003e Source m Packet",
        "fct-source": "src/Network-Pcap-Conduit.html#sourceOffline",
        "fct-type": "function",
        "title": "sourceOffline"
      },
      "index": {
        "description": "Create conduit Source from pcap data file",
        "hierarchy": "Network Pcap Conduit",
        "module": "Network.Pcap.Conduit",
        "name": "sourceOffline",
        "normalized": "FilePath-\u003eSource a Packet",
        "package": "pcap-conduit",
        "partial": "Offline",
        "signature": "FilePath-\u003eSource m Packet"
      }
    }
  }
]