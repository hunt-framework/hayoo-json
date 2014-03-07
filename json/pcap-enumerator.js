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
        "word": "pcap-enumerator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Pcap.Enumerator",
          "name": "Enumerator",
          "package": "pcap-enumerator",
          "source": "src/Network-Pcap-Enumerator.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Pcap Enumerator",
          "module": "Network.Pcap.Enumerator",
          "name": "Enumerator",
          "package": "pcap-enumerator",
          "partial": "Enumerator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pcap-enumerator/docs/Network-Pcap-Enumerator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Pcap.Enumerator",
          "name": "enumLive",
          "package": "pcap-enumerator",
          "signature": "String -\u003e Int -\u003e Bool -\u003e Int64 -\u003e Enumerator (PktHdr, ByteString) m b",
          "source": "src/Network-Pcap-Enumerator.html#enumLive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Pcap Enumerator",
          "module": "Network.Pcap.Enumerator",
          "name": "enumLive",
          "normalized": "String-\u003eInt-\u003eBool-\u003eInt-\u003eEnumerator(PktHdr,ByteString)a b",
          "package": "pcap-enumerator",
          "partial": "Live",
          "signature": "String-\u003eInt-\u003eBool-\u003eInt-\u003eEnumerator(PktHdr,ByteString)m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap-enumerator/docs/Network-Pcap-Enumerator.html#v:enumLive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Pcap.Enumerator",
          "name": "enumOffline",
          "package": "pcap-enumerator",
          "signature": "FilePath -\u003e Enumerator (PktHdr, ByteString) m b",
          "source": "src/Network-Pcap-Enumerator.html#enumOffline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Pcap Enumerator",
          "module": "Network.Pcap.Enumerator",
          "name": "enumOffline",
          "normalized": "FilePath-\u003eEnumerator(PktHdr,ByteString)a b",
          "package": "pcap-enumerator",
          "partial": "Offline",
          "signature": "FilePath-\u003eEnumerator(PktHdr,ByteString)m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcap-enumerator/docs/Network-Pcap-Enumerator.html#v:enumOffline"
      }
    }
  ]
]