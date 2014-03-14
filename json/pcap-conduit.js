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
        "word": "pcap-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides conduit \u003ccode\u003eSources\u003c/code\u003e for pcap data ( captured by\n wireshark, tcpdump, etc.) You can enumerate pcap files and live\n interfaces.\n\u003c/p\u003e\u003cp\u003eBased on \u003ccode\u003epcap-enumerator\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Pcap.Conduit",
          "name": "Conduit",
          "package": "pcap-conduit",
          "source": "src/Network-Pcap-Conduit.html",
          "type": "module"
        },
        "index": {
          "description": "This package provides conduit Sources for pcap data captured by wireshark tcpdump etc You can enumerate pcap files and live interfaces Based on pcap-enumerator",
          "hierarchy": "Network Pcap Conduit",
          "module": "Network.Pcap.Conduit",
          "name": "Conduit",
          "package": "pcap-conduit",
          "partial": "Conduit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pcap-conduit/docs/Network-Pcap-Conduit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient alias.\n\u003c/p\u003e",
          "module": "Network.Pcap.Conduit",
          "name": "Packet",
          "package": "pcap-conduit",
          "source": "src/Network-Pcap-Conduit.html#Packet",
          "type": "type"
        },
        "index": {
          "description": "Convenient alias",
          "hierarchy": "Network Pcap Conduit",
          "module": "Network.Pcap.Conduit",
          "name": "Packet",
          "package": "pcap-conduit",
          "partial": "Packet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pcap-conduit/docs/Network-Pcap-Conduit.html#t:Packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a conduit \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e from a live interface.\n\u003c/p\u003e",
          "module": "Network.Pcap.Conduit",
          "name": "sourceLive",
          "package": "pcap-conduit",
          "signature": "String-\u003e Int-\u003e Bool-\u003e Int64-\u003e Source m Packet",
          "type": "function"
        },
        "index": {
          "description": "Create conduit Source from live interface",
          "hierarchy": "Network Pcap Conduit",
          "module": "Network.Pcap.Conduit",
          "name": "sourceLive",
          "normalized": "String-\u003eInt-\u003eBool-\u003eInt-\u003eSource a Packet",
          "package": "pcap-conduit",
          "partial": "Live",
          "signature": "String-\u003eInt-\u003eBool-\u003eInt-\u003eSource m Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap-conduit/docs/Network-Pcap-Conduit.html#v:sourceLive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a conduit \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e from a pcap data file.\n\u003c/p\u003e",
          "module": "Network.Pcap.Conduit",
          "name": "sourceOffline",
          "package": "pcap-conduit",
          "signature": "FilePath -\u003e Source m Packet",
          "source": "src/Network-Pcap-Conduit.html#sourceOffline",
          "type": "function"
        },
        "index": {
          "description": "Create conduit Source from pcap data file",
          "hierarchy": "Network Pcap Conduit",
          "module": "Network.Pcap.Conduit",
          "name": "sourceOffline",
          "normalized": "FilePath-\u003eSource a Packet",
          "package": "pcap-conduit",
          "partial": "Offline",
          "signature": "FilePath-\u003eSource m Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap-conduit/docs/Network-Pcap-Conduit.html#v:sourceOffline"
      }
    }
  ]
]