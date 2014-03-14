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
        "word": "network-info"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Info",
          "name": "Info",
          "package": "network-info",
          "source": "src/Network-Info.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Info",
          "module": "Network.Info",
          "name": "Info",
          "package": "network-info",
          "partial": "Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-info/docs/Network-Info.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an IPv4 address (e.g. \u003ccode\u003e172.23.21.1\u003c/code\u003e, \u003ccode\u003e127.0.0.1\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Network.Info",
          "name": "IPv4",
          "package": "network-info",
          "source": "src/Network-Info.html#IPv4",
          "type": "data"
        },
        "index": {
          "description": "Represents an IPv4 address e.g",
          "hierarchy": "Network Info",
          "module": "Network.Info",
          "name": "IPv4",
          "package": "network-info",
          "partial": "IPv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-info/docs/Network-Info.html#t:IPv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an IPv6 address (e.g. \u003ccode\u003e2001:db8:85a3::8a2e:370:7334\u003c/code\u003e, \u003ccode\u003e::1\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Network.Info",
          "name": "IPv6",
          "package": "network-info",
          "source": "src/Network-Info.html#IPv6",
          "type": "data"
        },
        "index": {
          "description": "Represents an IPv6 address e.g db8 a3 a2e",
          "hierarchy": "Network Info",
          "module": "Network.Info",
          "name": "IPv6",
          "package": "network-info",
          "partial": "IPv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-info/docs/Network-Info.html#t:IPv6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a MAC address (e.g. \u003ccode\u003e01:23:45:67:89:ab\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Network.Info",
          "name": "MAC",
          "package": "network-info",
          "source": "src/Network-Info.html#MAC",
          "type": "data"
        },
        "index": {
          "description": "Represents MAC address e.g ab",
          "hierarchy": "Network Info",
          "module": "Network.Info",
          "name": "MAC",
          "package": "network-info",
          "partial": "MAC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-info/docs/Network-Info.html#t:MAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the basic configuration of a network interface. \u003cem\u003eThis\u003c/em\u003e\n   \u003cem\u003edefinition is currently limited to just one address per family.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Network.Info",
          "name": "NetworkInterface",
          "package": "network-info",
          "source": "src/Network-Info.html#NetworkInterface",
          "type": "data"
        },
        "index": {
          "description": "Describes the basic configuration of network interface This definition is currently limited to just one address per family",
          "hierarchy": "Network Info",
          "module": "Network.Info",
          "name": "NetworkInterface",
          "package": "network-info",
          "partial": "Network Interface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-info/docs/Network-Info.html#t:NetworkInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Info",
          "name": "IPv4",
          "package": "network-info",
          "signature": "IPv4 !Word32",
          "source": "src/Network-Info.html#IPv4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Info",
          "module": "Network.Info",
          "name": "IPv4",
          "package": "network-info",
          "partial": "IPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-info/docs/Network-Info.html#v:IPv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Info",
          "name": "IPv6",
          "package": "network-info",
          "signature": "IPv6 !Word32 !Word32 !Word32 !Word32",
          "source": "src/Network-Info.html#IPv6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Info",
          "module": "Network.Info",
          "name": "IPv6",
          "package": "network-info",
          "partial": "IPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-info/docs/Network-Info.html#v:IPv6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Info",
          "name": "MAC",
          "package": "network-info",
          "signature": "MAC !Word8 !Word8 !Word8 !Word8 !Word8 !Word8",
          "source": "src/Network-Info.html#MAC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Info",
          "module": "Network.Info",
          "name": "MAC",
          "package": "network-info",
          "partial": "MAC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-info/docs/Network-Info.html#v:MAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Info",
          "name": "NetworkInterface",
          "package": "network-info",
          "signature": "NetworkInterface",
          "source": "src/Network-Info.html#NetworkInterface",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Info",
          "module": "Network.Info",
          "name": "NetworkInterface",
          "package": "network-info",
          "partial": "Network Interface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-info/docs/Network-Info.html#v:NetworkInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the address information for each of the network interfaces on\n   the local computer.\n\u003c/p\u003e",
          "module": "Network.Info",
          "name": "getNetworkInterfaces",
          "package": "network-info",
          "signature": "IO [NetworkInterface]",
          "source": "src/Network-Info.html#getNetworkInterfaces",
          "type": "function"
        },
        "index": {
          "description": "Gets the address information for each of the network interfaces on the local computer",
          "hierarchy": "Network Info",
          "module": "Network.Info",
          "name": "getNetworkInterfaces",
          "normalized": "IO[NetworkInterface]",
          "package": "network-info",
          "partial": "Network Interfaces",
          "signature": "IO[NetworkInterface]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-info/docs/Network-Info.html#v:getNetworkInterfaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIPv4 address\n\u003c/p\u003e",
          "module": "Network.Info",
          "name": "ipv4",
          "package": "network-info",
          "signature": "IPv4",
          "source": "src/Network-Info.html#NetworkInterface",
          "type": "function"
        },
        "index": {
          "description": "IPv4 address",
          "hierarchy": "Network Info",
          "module": "Network.Info",
          "name": "ipv4",
          "package": "network-info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-info/docs/Network-Info.html#v:ipv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIPv6 address\n\u003c/p\u003e",
          "module": "Network.Info",
          "name": "ipv6",
          "package": "network-info",
          "signature": "IPv6",
          "source": "src/Network-Info.html#NetworkInterface",
          "type": "function"
        },
        "index": {
          "description": "IPv6 address",
          "hierarchy": "Network Info",
          "module": "Network.Info",
          "name": "ipv6",
          "package": "network-info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-info/docs/Network-Info.html#v:ipv6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMAC address\n\u003c/p\u003e",
          "module": "Network.Info",
          "name": "mac",
          "package": "network-info",
          "signature": "MAC",
          "source": "src/Network-Info.html#NetworkInterface",
          "type": "function"
        },
        "index": {
          "description": "MAC address",
          "hierarchy": "Network Info",
          "module": "Network.Info",
          "name": "mac",
          "package": "network-info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-info/docs/Network-Info.html#v:mac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface name (e.g. \"eth0\", \"lo\", \"Local Area Connection\")\n\u003c/p\u003e",
          "module": "Network.Info",
          "name": "name",
          "package": "network-info",
          "signature": "String",
          "source": "src/Network-Info.html#NetworkInterface",
          "type": "function"
        },
        "index": {
          "description": "Interface name e.g eth0 lo Local Area Connection",
          "hierarchy": "Network Info",
          "module": "Network.Info",
          "name": "name",
          "package": "network-info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-info/docs/Network-Info.html#v:name"
      }
    }
  ]
]