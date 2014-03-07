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
        "word": "netcore"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions and types that heavily used by the Frenetic implementation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Frenetic.Common",
          "name": "Common",
          "package": "netcore",
          "source": "src/Frenetic-Common.html",
          "type": "module"
        },
        "index": {
          "description": "Functions and types that heavily used by the Frenetic implementation",
          "hierarchy": "Frenetic Common",
          "module": "Frenetic.Common",
          "name": "Common",
          "package": "netcore",
          "partial": "Common",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
          "module": "Frenetic.Common",
          "name": "ByteString",
          "package": "netcore",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
          "hierarchy": "Frenetic Common",
          "module": "Frenetic.Common",
          "name": "ByteString",
          "package": "netcore",
          "partial": "Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Map from keys \u003ccode\u003ek\u003c/code\u003e to values \u003ccode\u003ea\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Frenetic.Common",
          "name": "Map",
          "package": "netcore",
          "type": "data"
        },
        "index": {
          "description": "Map from keys to values",
          "hierarchy": "Frenetic Common",
          "module": "Frenetic.Common",
          "name": "Map",
          "package": "netcore",
          "partial": "Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#t:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multiset of values \u003ccode\u003ea\u003c/code\u003e.\n   The same value can occur multiple times.\n\u003c/p\u003e",
          "module": "Frenetic.Common",
          "name": "MultiSet",
          "package": "netcore",
          "type": "data"
        },
        "index": {
          "description": "multiset of values The same value can occur multiple times",
          "hierarchy": "Frenetic Common",
          "module": "Frenetic.Common",
          "name": "MultiSet",
          "package": "netcore",
          "partial": "Multi Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#t:MultiSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of values \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Frenetic.Common",
          "name": "Set",
          "package": "netcore",
          "type": "data"
        },
        "index": {
          "description": "set of values",
          "hierarchy": "Frenetic Common",
          "module": "Frenetic.Common",
          "name": "Set",
          "package": "netcore",
          "partial": "Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#t:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a new channel that waits for both input channels to produce a value,\n and then yields the latest version of both values.  If one channel produces\n multiple values before the other produces any, then the early values are\n discarded.  Afterwards, whenever one channel updates, the output channel\n yields that update along with whatever the current version of the other\n channel is.\n\u003c/p\u003e",
          "module": "[\"Frenetic.Common\",\"Frenetic.NetCore\"]",
          "name": "both",
          "package": "netcore",
          "signature": "Chan a -\u003e Chan b -\u003e IO (Chan (a, b))",
          "source": "src/Frenetic-Common.html#both",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#v:both\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:both\"]"
        },
        "index": {
          "description": "Produce new channel that waits for both input channels to produce value and then yields the latest version of both values If one channel produces multiple values before the other produces any then the early values are discarded Afterwards whenever one channel updates the output channel yields that update along with whatever the current version of the other channel is",
          "hierarchy": "Frenetic Common",
          "module": "Frenetic.Common",
          "name": "both",
          "normalized": "Chan a-\u003eChan b-\u003eIO(Chan(a,b))",
          "package": "netcore",
          "signature": "Chan a-\u003eChan b-\u003eIO(Chan(a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#v:both"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecatMaybes\u003c/a\u003e\u003c/code\u003e function takes a list of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003es and returns\n a list of all the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e values. \n\u003c/p\u003e",
          "module": "Frenetic.Common",
          "name": "catMaybes",
          "package": "netcore",
          "signature": "[Maybe a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "The catMaybes function takes list of Maybe and returns list of all the Just values",
          "hierarchy": "Frenetic Common",
          "module": "Frenetic.Common",
          "name": "catMaybes",
          "normalized": "[Maybe a]-\u003e[a]",
          "package": "netcore",
          "partial": "Maybes",
          "signature": "[Maybe a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#v:catMaybes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a new channel that carries updates from both of the input channels,\n but does not wait for both to be ready.  Analogous to Unix SELECT(2) followed\n by READ(2) on the ready file descriptor.\n\u003c/p\u003e",
          "module": "[\"Frenetic.Common\",\"Frenetic.NetCore\"]",
          "name": "select",
          "package": "netcore",
          "signature": "Chan a -\u003e Chan b -\u003e IO (Chan (Either a b))",
          "source": "src/Frenetic-Common.html#select",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#v:select\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:select\"]"
        },
        "index": {
          "description": "Produce new channel that carries updates from both of the input channels but does not wait for both to be ready Analogous to Unix SELECT followed by READ on the ready file descriptor",
          "hierarchy": "Frenetic Common",
          "module": "Frenetic.Common",
          "name": "select",
          "normalized": "Chan a-\u003eChan b-\u003eIO(Chan(Either a b))",
          "package": "netcore",
          "signature": "Chan a-\u003eChan b-\u003eIO(Chan(Either a b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Compat",
          "name": "Compat",
          "package": "netcore",
          "source": "src/Frenetic-Compat.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "Compat",
          "package": "netcore",
          "partial": "Compat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'FreneticImpl a' is a family of related abstract types that define a\n back-end for Frenetic.\n\u003c/p\u003e",
          "module": "Frenetic.Compat",
          "name": "FreneticImpl",
          "package": "netcore",
          "source": "src/Frenetic-Compat.html#FreneticImpl",
          "type": "class"
        },
        "index": {
          "description": "FreneticImpl is family of related abstract types that define back-end for Frenetic",
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "FreneticImpl",
          "package": "netcore",
          "partial": "Frenetic Impl",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#t:FreneticImpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePackets' headers.\n\u003c/p\u003e",
          "module": "Frenetic.Compat",
          "name": "Packet",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Packet",
          "type": "data"
        },
        "index": {
          "description": "Packets headers",
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "Packet",
          "package": "netcore",
          "partial": "Packet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#t:Packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData that was sent. \n\u003c/p\u003e",
          "module": "Frenetic.Compat",
          "name": "Transmission",
          "package": "netcore",
          "source": "src/Frenetic-Compat.html#Transmission",
          "type": "data"
        },
        "index": {
          "description": "Data that was sent",
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "Transmission",
          "package": "netcore",
          "partial": "Transmission",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#t:Transmission"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.Compat\",\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "Packet",
          "package": "netcore",
          "signature": "Packet",
          "source": "src/Frenetic-NetCore-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:Packet\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:Packet\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:Packet\"]"
        },
        "index": {
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "Packet",
          "package": "netcore",
          "partial": "Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:Packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Compat",
          "name": "Transmission",
          "package": "netcore",
          "signature": "Transmission",
          "source": "src/Frenetic-Compat.html#Transmission",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "Transmission",
          "package": "netcore",
          "partial": "Transmission",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:Transmission"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Compat",
          "name": "actnController",
          "package": "netcore",
          "signature": "ActionImpl a",
          "source": "src/Frenetic-Compat.html#actnController",
          "type": "method"
        },
        "index": {
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "actnController",
          "package": "netcore",
          "partial": "Controller",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:actnController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Compat",
          "name": "actnControllerPart",
          "package": "netcore",
          "signature": "ActionImpl a -\u003e Switch -\u003e PacketImpl a -\u003e IO ()",
          "source": "src/Frenetic-Compat.html#actnControllerPart",
          "type": "method"
        },
        "index": {
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "actnControllerPart",
          "normalized": "ActionImpl a-\u003eSwitch-\u003ePacketImpl a-\u003eIO()",
          "package": "netcore",
          "partial": "Controller Part",
          "signature": "ActionImpl a-\u003eSwitch-\u003ePacketImpl a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:actnControllerPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Compat",
          "name": "actnDefault",
          "package": "netcore",
          "signature": "ActionImpl a",
          "source": "src/Frenetic-Compat.html#actnDefault",
          "type": "method"
        },
        "index": {
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "actnDefault",
          "package": "netcore",
          "partial": "Default",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:actnDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Compat",
          "name": "actnTranslate",
          "package": "netcore",
          "signature": "Action -\u003e ActionImpl a",
          "source": "src/Frenetic-Compat.html#actnTranslate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "actnTranslate",
          "normalized": "Action-\u003eActionImpl a",
          "package": "netcore",
          "partial": "Translate",
          "signature": "Action-\u003eActionImpl a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:actnTranslate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Compat",
          "name": "fromPattern",
          "package": "netcore",
          "signature": "Pattern -\u003e PatternImpl a",
          "source": "src/Frenetic-Compat.html#fromPattern",
          "type": "method"
        },
        "index": {
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "fromPattern",
          "normalized": "Pattern-\u003ePatternImpl a",
          "package": "netcore",
          "partial": "Pattern",
          "signature": "Pattern-\u003ePatternImpl a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:fromPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edestination ethernet address\n\u003c/p\u003e",
          "module": "[\"Frenetic.Compat\",\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "pktDlDst",
          "package": "netcore",
          "signature": "Word48",
          "source": "src/Frenetic-NetCore-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktDlDst\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktDlDst\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktDlDst\"]"
        },
        "index": {
          "description": "destination ethernet address",
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "pktDlDst",
          "package": "netcore",
          "partial": "Dl Dst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktDlDst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esource ethernet address\n\u003c/p\u003e",
          "module": "[\"Frenetic.Compat\",\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "pktDlSrc",
          "package": "netcore",
          "signature": "Word48",
          "source": "src/Frenetic-NetCore-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktDlSrc\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktDlSrc\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktDlSrc\"]"
        },
        "index": {
          "description": "source ethernet address",
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "pktDlSrc",
          "package": "netcore",
          "partial": "Dl Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktDlSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eethernet type code (e.g., 0x800 for IP packets)\n\u003c/p\u003e",
          "module": "[\"Frenetic.Compat\",\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "pktDlTyp",
          "package": "netcore",
          "signature": "Word16",
          "source": "src/Frenetic-NetCore-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktDlTyp\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktDlTyp\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktDlTyp\"]"
        },
        "index": {
          "description": "ethernet type code e.g x800 for IP packets",
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "pktDlTyp",
          "package": "netcore",
          "partial": "Dl Typ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktDlTyp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVLAN tag\n\u003c/p\u003e",
          "module": "[\"Frenetic.Compat\",\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "pktDlVlan",
          "package": "netcore",
          "signature": "Maybe Vlan",
          "source": "src/Frenetic-NetCore-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktDlVlan\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktDlVlan\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktDlVlan\"]"
        },
        "index": {
          "description": "VLAN tag",
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "pktDlVlan",
          "package": "netcore",
          "partial": "Dl Vlan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktDlVlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVLAN priority code\n\u003c/p\u003e",
          "module": "[\"Frenetic.Compat\",\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "pktDlVlanPcp",
          "package": "netcore",
          "signature": "Word8",
          "source": "src/Frenetic-NetCore-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktDlVlanPcp\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktDlVlanPcp\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktDlVlanPcp\"]"
        },
        "index": {
          "description": "VLAN priority code",
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "pktDlVlanPcp",
          "package": "netcore",
          "partial": "Dl Vlan Pcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktDlVlanPcp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eingress port on the switch where the packet was\n received\n\u003c/p\u003e",
          "module": "[\"Frenetic.Compat\",\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "pktInPort",
          "package": "netcore",
          "signature": "Port",
          "source": "src/Frenetic-NetCore-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktInPort\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktInPort\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktInPort\"]"
        },
        "index": {
          "description": "ingress port on the switch where the packet was received",
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "pktInPort",
          "package": "netcore",
          "partial": "In Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktInPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edestination IP address for IP packets\n\u003c/p\u003e",
          "module": "[\"Frenetic.Compat\",\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "pktNwDst",
          "package": "netcore",
          "signature": "Maybe Word32",
          "source": "src/Frenetic-NetCore-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktNwDst\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktNwDst\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktNwDst\"]"
        },
        "index": {
          "description": "destination IP address for IP packets",
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "pktNwDst",
          "package": "netcore",
          "partial": "Nw Dst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktNwDst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIP protocol number (e.g., 6 for TCP segments)\n\u003c/p\u003e",
          "module": "[\"Frenetic.Compat\",\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "pktNwProto",
          "package": "netcore",
          "signature": "Word8",
          "source": "src/Frenetic-NetCore-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktNwProto\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktNwProto\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktNwProto\"]"
        },
        "index": {
          "description": "IP protocol number e.g for TCP segments",
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "pktNwProto",
          "package": "netcore",
          "partial": "Nw Proto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktNwProto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esource IP address for IP packets\n\u003c/p\u003e",
          "module": "[\"Frenetic.Compat\",\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "pktNwSrc",
          "package": "netcore",
          "signature": "Maybe Word32",
          "source": "src/Frenetic-NetCore-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktNwSrc\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktNwSrc\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktNwSrc\"]"
        },
        "index": {
          "description": "source IP address for IP packets",
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "pktNwSrc",
          "package": "netcore",
          "partial": "Nw Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktNwSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIP TOS field\n\u003c/p\u003e",
          "module": "[\"Frenetic.Compat\",\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "pktNwTos",
          "package": "netcore",
          "signature": "Word8",
          "source": "src/Frenetic-NetCore-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktNwTos\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktNwTos\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktNwTos\"]"
        },
        "index": {
          "description": "IP TOS field",
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "pktNwTos",
          "package": "netcore",
          "partial": "Nw Tos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktNwTos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edestination port for IP packets\n\u003c/p\u003e",
          "module": "[\"Frenetic.Compat\",\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "pktTpDst",
          "package": "netcore",
          "signature": "Maybe Word16",
          "source": "src/Frenetic-NetCore-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktTpDst\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktTpDst\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktTpDst\"]"
        },
        "index": {
          "description": "destination port for IP packets",
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "pktTpDst",
          "package": "netcore",
          "partial": "Tp Dst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktTpDst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esource port for IP packets\n\u003c/p\u003e",
          "module": "[\"Frenetic.Compat\",\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "pktTpSrc",
          "package": "netcore",
          "signature": "Maybe Word16",
          "source": "src/Frenetic-NetCore-Types.html#Packet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktTpSrc\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktTpSrc\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktTpSrc\"]"
        },
        "index": {
          "description": "source port for IP packets",
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "pktTpSrc",
          "package": "netcore",
          "partial": "Tp Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktTpSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'ptrnMatchPkt pkt pat' is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003epat\u003c/code\u003e matches \u003ccode\u003epkt\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Frenetic.Compat",
          "name": "ptrnMatchPkt",
          "package": "netcore",
          "signature": "PacketImpl a -\u003e PatternImpl a -\u003e Bool",
          "source": "src/Frenetic-Compat.html#ptrnMatchPkt",
          "type": "method"
        },
        "index": {
          "description": "ptrnMatchPkt pkt pat is True if pat matches pkt",
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "ptrnMatchPkt",
          "normalized": "PacketImpl a-\u003ePatternImpl a-\u003eBool",
          "package": "netcore",
          "partial": "Match Pkt",
          "signature": "PacketImpl a-\u003ePatternImpl a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:ptrnMatchPkt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Compat",
          "name": "toPacket",
          "package": "netcore",
          "signature": "PacketImpl a -\u003e Maybe Packet",
          "source": "src/Frenetic-Compat.html#toPacket",
          "type": "method"
        },
        "index": {
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "toPacket",
          "normalized": "PacketImpl a-\u003eMaybe Packet",
          "package": "netcore",
          "partial": "Packet",
          "signature": "PacketImpl a-\u003eMaybe Packet",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:toPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Compat",
          "name": "toPattern",
          "package": "netcore",
          "signature": "PatternImpl a -\u003e Pattern",
          "source": "src/Frenetic-Compat.html#toPattern",
          "type": "method"
        },
        "index": {
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "toPattern",
          "normalized": "PatternImpl a-\u003ePattern",
          "package": "netcore",
          "partial": "Pattern",
          "signature": "PatternImpl a-\u003ePattern",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:toPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Compat",
          "name": "trPattern",
          "package": "netcore",
          "signature": "ptrn",
          "source": "src/Frenetic-Compat.html#Transmission",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "trPattern",
          "package": "netcore",
          "partial": "Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:trPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Compat",
          "name": "trPkt",
          "package": "netcore",
          "signature": "pkt",
          "source": "src/Frenetic-Compat.html#Transmission",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "trPkt",
          "package": "netcore",
          "partial": "Pkt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:trPkt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Compat",
          "name": "trSwitch",
          "package": "netcore",
          "signature": "Switch",
          "source": "src/Frenetic-Compat.html#Transmission",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "trSwitch",
          "package": "netcore",
          "partial": "Switch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:trSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Compat",
          "name": "updatePacket",
          "package": "netcore",
          "signature": "PacketImpl a -\u003e Packet -\u003e PacketImpl a",
          "source": "src/Frenetic-Compat.html#updatePacket",
          "type": "method"
        },
        "index": {
          "hierarchy": "Frenetic Compat",
          "module": "Frenetic.Compat",
          "name": "updatePacket",
          "normalized": "PacketImpl a-\u003ePacket-\u003ePacketImpl a",
          "package": "netcore",
          "partial": "Packet",
          "signature": "PacketImpl a-\u003ePacket-\u003ePacketImpl a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:updatePacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.EthernetAddress",
          "name": "EthernetAddress",
          "package": "netcore",
          "source": "src/Frenetic-EthernetAddress.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Frenetic EthernetAddress",
          "module": "Frenetic.EthernetAddress",
          "name": "EthernetAddress",
          "package": "netcore",
          "partial": "Ethernet Address",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.EthernetAddress",
          "name": "EthernetAddress",
          "package": "netcore",
          "source": "src/Frenetic-EthernetAddress.html#EthernetAddress",
          "type": "data"
        },
        "index": {
          "hierarchy": "Frenetic EthernetAddress",
          "module": "Frenetic.EthernetAddress",
          "name": "EthernetAddress",
          "package": "netcore",
          "partial": "Ethernet Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#t:EthernetAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.EthernetAddress",
          "name": "EthernetAddress",
          "package": "netcore",
          "signature": "EthernetAddress",
          "source": "src/Frenetic-EthernetAddress.html#EthernetAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic EthernetAddress",
          "module": "Frenetic.EthernetAddress",
          "name": "EthernetAddress",
          "package": "netcore",
          "partial": "Ethernet Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#v:EthernetAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.EthernetAddress\",\"Frenetic.NetCore\"]",
          "name": "broadcastAddress",
          "package": "netcore",
          "signature": "EthernetAddress",
          "source": "src/Frenetic-EthernetAddress.html#broadcastAddress",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#v:broadcastAddress\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:broadcastAddress\"]"
        },
        "index": {
          "hierarchy": "Frenetic EthernetAddress",
          "module": "Frenetic.EthernetAddress",
          "name": "broadcastAddress",
          "package": "netcore",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#v:broadcastAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.EthernetAddress",
          "name": "ethernetAddress",
          "package": "netcore",
          "signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e EthernetAddress",
          "source": "src/Frenetic-EthernetAddress.html#ethernetAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic EthernetAddress",
          "module": "Frenetic.EthernetAddress",
          "name": "ethernetAddress",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eEthernetAddress",
          "package": "netcore",
          "partial": "Address",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eEthernetAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#v:ethernetAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.EthernetAddress",
          "name": "ethernetAddress64",
          "package": "netcore",
          "signature": "Word64 -\u003e EthernetAddress",
          "source": "src/Frenetic-EthernetAddress.html#ethernetAddress64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic EthernetAddress",
          "module": "Frenetic.EthernetAddress",
          "name": "ethernetAddress64",
          "normalized": "Word-\u003eEthernetAddress",
          "package": "netcore",
          "partial": "Address",
          "signature": "Word-\u003eEthernetAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#v:ethernetAddress64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.EthernetAddress",
          "name": "unpackEth64",
          "package": "netcore",
          "signature": "Word64",
          "source": "src/Frenetic-EthernetAddress.html#EthernetAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic EthernetAddress",
          "module": "Frenetic.EthernetAddress",
          "name": "unpackEth64",
          "package": "netcore",
          "partial": "Eth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#v:unpackEth64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.EthernetAddress",
          "name": "unpackEthernetAddress",
          "package": "netcore",
          "signature": "EthernetAddress -\u003e (Word8, Word8, Word8, Word8, Word8, Word8)",
          "source": "src/Frenetic-EthernetAddress.html#unpackEthernetAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic EthernetAddress",
          "module": "Frenetic.EthernetAddress",
          "name": "unpackEthernetAddress",
          "normalized": "EthernetAddress-\u003e(Word,Word,Word,Word,Word,Word)",
          "package": "netcore",
          "partial": "Ethernet Address",
          "signature": "EthernetAddress-\u003e(Word,Word,Word,Word,Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#v:unpackEthernetAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComposes NetCore policies and predicates, and defines how these policies\n interpret abstract packets.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Frenetic.NetCore.Semantics",
          "name": "Semantics",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Semantics.html",
          "type": "module"
        },
        "index": {
          "description": "Composes NetCore policies and predicates and defines how these policies interpret abstract packets",
          "hierarchy": "Frenetic NetCore Semantics",
          "module": "Frenetic.NetCore.Semantics",
          "name": "Semantics",
          "package": "netcore",
          "partial": "Semantics",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Semantics.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements the denotation function for policies.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Semantics",
          "name": "interpretPolicy",
          "package": "netcore",
          "signature": "Policy -\u003e Transmission (PatternImpl a) (PacketImpl a) -\u003e Action",
          "source": "src/Frenetic-NetCore-Semantics.html#interpretPolicy",
          "type": "function"
        },
        "index": {
          "description": "Implements the denotation function for policies",
          "hierarchy": "Frenetic NetCore Semantics",
          "module": "Frenetic.NetCore.Semantics",
          "name": "interpretPolicy",
          "normalized": "Policy-\u003eTransmission(PatternImpl a)(PacketImpl a)-\u003eAction",
          "package": "netcore",
          "partial": "Policy",
          "signature": "Policy-\u003eTransmission(PatternImpl a)(PacketImpl a)-\u003eAction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Semantics.html#v:interpretPolicy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements the denotation function for predicates.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Semantics",
          "name": "interpretPredicate",
          "package": "netcore",
          "signature": "Predicate -\u003e Transmission (PatternImpl a) (PacketImpl a) -\u003e Bool",
          "source": "src/Frenetic-NetCore-Semantics.html#interpretPredicate",
          "type": "function"
        },
        "index": {
          "description": "Implements the denotation function for predicates",
          "hierarchy": "Frenetic NetCore Semantics",
          "module": "Frenetic.NetCore.Semantics",
          "name": "interpretPredicate",
          "normalized": "Predicate-\u003eTransmission(PatternImpl a)(PacketImpl a)-\u003eBool",
          "package": "netcore",
          "partial": "Predicate",
          "signature": "Predicate-\u003eTransmission(PatternImpl a)(PacketImpl a)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Semantics.html#v:interpretPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Short",
          "name": "Short",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Short.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "Short",
          "package": "netcore",
          "partial": "Short",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each fields with a value Just v, modify that field to be v.\n  If the field is Nothing then there is no modification of that field.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Short",
          "name": "Modification",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Modification",
          "type": "data"
        },
        "index": {
          "description": "For each fields with value Just modify that field to be If the field is Nothing then there is no modification of that field",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "Modification",
          "package": "netcore",
          "partial": "Modification",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#t:Modification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbbreviation for predicate union.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "(\u003c||\u003e)",
          "package": "netcore",
          "signature": "Predicate -\u003e Predicate -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#%3C%7C%7C%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:-60--124--124--62-\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:-60--124--124--62-\"]"
        },
        "index": {
          "description": "Abbreviation for predicate union",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "(\u003c||\u003e) \u003c||\u003e",
          "normalized": "Predicate-\u003ePredicate-\u003ePredicate",
          "package": "netcore",
          "signature": "Predicate-\u003ePredicate-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:-60--124--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestrict a policy to act over packets matching the predicate.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "(\u003c%\u003e)",
          "package": "netcore",
          "signature": "Policy -\u003e Predicate -\u003e Policy",
          "source": "src/Frenetic-NetCore-Short.html#%3C%25%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:-60--37--62-\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:-60--37--62-\"]"
        },
        "index": {
          "description": "Restrict policy to act over packets matching the predicate",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "(\u003c%\u003e) \u003c%\u003e",
          "normalized": "Policy-\u003ePredicate-\u003ePolicy",
          "package": "netcore",
          "signature": "Policy-\u003ePredicate-\u003ePolicy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:-60--37--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbbreviation for predicate intersection.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "(\u003c&&\u003e)",
          "package": "netcore",
          "signature": "Predicate -\u003e Predicate -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#%3C%26%26%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:-60--38--38--62-\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:-60--38--38--62-\"]"
        },
        "index": {
          "description": "Abbreviation for predicate intersection",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "(\u003c&&\u003e) \u003c&&\u003e",
          "normalized": "Predicate-\u003ePredicate-\u003ePredicate",
          "package": "netcore",
          "signature": "Predicate-\u003ePredicate-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:-60--38--38--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin: overloaded to find the union of policies and the join of actions.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "(\u003c+\u003e)",
          "package": "netcore",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Frenetic-NetCore-Short.html#%3C%2B%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:-60--43--62-\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:-60--43--62-\"]"
        },
        "index": {
          "description": "Join overloaded to find the union of policies and the join of actions",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "netcore",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbbreviation for constructing a basic policy from a predicate and an action.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "(==\u003e)",
          "package": "netcore",
          "signature": "Predicate -\u003e Action -\u003e Policy",
          "source": "src/Frenetic-NetCore-Short.html#%3D%3D%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:-61--61--62-\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:-61--61--62-\"]"
        },
        "index": {
          "description": "Abbreviation for constructing basic policy from predicate and an action",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "(==\u003e) ==\u003e",
          "normalized": "Predicate-\u003eAction-\u003ePolicy",
          "package": "netcore",
          "signature": "Predicate-\u003eAction-\u003ePolicy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:-61--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore.Types\"]",
          "name": "Modification",
          "package": "netcore",
          "signature": "Modification",
          "source": "src/Frenetic-NetCore-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:Modification\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:Modification\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "Modification",
          "package": "netcore",
          "partial": "Modification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:Modification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForward the packet out of all physical ports, except the packet's\n ingress port.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "allPorts",
          "package": "netcore",
          "signature": "Modification-\u003e Action",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:allPorts\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:allPorts\"]"
        },
        "index": {
          "description": "Forward the packet out of all physical ports except the packet ingress port",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "allPorts",
          "normalized": "Modification-\u003eAction",
          "package": "netcore",
          "partial": "Ports",
          "signature": "Modification-\u003eAction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:allPorts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch ethernet destination address.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "dlDst",
          "package": "netcore",
          "signature": "Word48 -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#dlDst",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlDst\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dlDst\"]"
        },
        "index": {
          "description": "Match ethernet destination address",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "dlDst",
          "normalized": "Word-\u003ePredicate",
          "package": "netcore",
          "partial": "Dst",
          "signature": "Word-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlDst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch Vlan untagged\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "dlNoVlan",
          "package": "netcore",
          "signature": "Predicate",
          "source": "src/Frenetic-NetCore-Short.html#dlNoVlan",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlNoVlan\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dlNoVlan\"]"
        },
        "index": {
          "description": "Match Vlan untagged",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "dlNoVlan",
          "package": "netcore",
          "partial": "No Vlan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlNoVlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch ethernet source address.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "dlSrc",
          "package": "netcore",
          "signature": "Word48 -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#dlSrc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlSrc\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dlSrc\"]"
        },
        "index": {
          "description": "Match ethernet source address",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "dlSrc",
          "normalized": "Word-\u003ePredicate",
          "package": "netcore",
          "partial": "Src",
          "signature": "Word-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch ethernet type code (e.g., 0x0800 for IP packets).\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "dlTyp",
          "package": "netcore",
          "signature": "Word16 -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#dlTyp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlTyp\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dlTyp\"]"
        },
        "index": {
          "description": "Match ethernet type code e.g x0800 for IP packets",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "dlTyp",
          "normalized": "Word-\u003ePredicate",
          "package": "netcore",
          "partial": "Typ",
          "signature": "Word-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlTyp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch VLAN tag.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "dlVlan",
          "package": "netcore",
          "signature": "Word16 -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#dlVlan",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlVlan\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dlVlan\"]"
        },
        "index": {
          "description": "Match VLAN tag",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "dlVlan",
          "normalized": "Word-\u003ePredicate",
          "package": "netcore",
          "partial": "Vlan",
          "signature": "Word-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlVlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch VLAN priority\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "dlVlanPcp",
          "package": "netcore",
          "signature": "Word8 -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#dlVlanPcp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlVlanPcp\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dlVlanPcp\"]"
        },
        "index": {
          "description": "Match VLAN priority",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "dlVlanPcp",
          "normalized": "Word-\u003ePredicate",
          "package": "netcore",
          "partial": "Vlan Pcp",
          "signature": "Word-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlVlanPcp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "dropPkt",
          "package": "netcore",
          "signature": "Action",
          "source": "src/Frenetic-NetCore-Short.html#dropPkt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dropPkt\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dropPkt\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "dropPkt",
          "package": "netcore",
          "partial": "Pkt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dropPkt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForward the packet out of the specified physical ports.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "forward",
          "package": "netcore",
          "signature": "[Port] -\u003e Action",
          "source": "src/Frenetic-NetCore-Short.html#forward",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:forward\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:forward\"]"
        },
        "index": {
          "description": "Forward the packet out of the specified physical ports",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "forward",
          "normalized": "[Port]-\u003eAction",
          "package": "netcore",
          "signature": "[Port]-\u003eAction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch the ingress port on which packets arrive.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "inPort",
          "package": "netcore",
          "signature": "Port -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#inPort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:inPort\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:inPort\"]"
        },
        "index": {
          "description": "Match the ingress port on which packets arrive",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "inPort",
          "normalized": "Port-\u003ePredicate",
          "package": "netcore",
          "partial": "Port",
          "signature": "Port-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:inPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the predicate matching packets on this switch and port\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "inport",
          "package": "netcore",
          "signature": "Switch -\u003e Port -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#inport",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:inport\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:inport\"]"
        },
        "index": {
          "description": "Construct the predicate matching packets on this switch and port",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "inport",
          "normalized": "Switch-\u003ePort-\u003ePredicate",
          "package": "netcore",
          "signature": "Switch-\u003ePort-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:inport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches all packets.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "matchAll",
          "package": "netcore",
          "signature": "Predicate",
          "source": "src/Frenetic-NetCore-Short.html#matchAll",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:matchAll\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:matchAll\"]"
        },
        "index": {
          "description": "Matches all packets",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "matchAll",
          "package": "netcore",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:matchAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches no packets.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "matchNone",
          "package": "netcore",
          "signature": "Predicate",
          "source": "src/Frenetic-NetCore-Short.html#matchNone",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:matchNone\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:matchNone\"]"
        },
        "index": {
          "description": "Matches no packets",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "matchNone",
          "package": "netcore",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:matchNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "modDlDst",
          "package": "netcore",
          "signature": "Word48 -\u003e Modification",
          "source": "src/Frenetic-NetCore-Short.html#modDlDst",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modDlDst\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modDlDst\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modDlDst",
          "normalized": "Word-\u003eModification",
          "package": "netcore",
          "partial": "Dl Dst",
          "signature": "Word-\u003eModification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modDlDst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "modDlSrc",
          "package": "netcore",
          "signature": "Word48 -\u003e Modification",
          "source": "src/Frenetic-NetCore-Short.html#modDlSrc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modDlSrc\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modDlSrc\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modDlSrc",
          "normalized": "Word-\u003eModification",
          "package": "netcore",
          "partial": "Dl Src",
          "signature": "Word-\u003eModification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modDlSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "modDlVlan",
          "package": "netcore",
          "signature": "Maybe Vlan -\u003e Modification",
          "source": "src/Frenetic-NetCore-Short.html#modDlVlan",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modDlVlan\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modDlVlan\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modDlVlan",
          "normalized": "Maybe Vlan-\u003eModification",
          "package": "netcore",
          "partial": "Dl Vlan",
          "signature": "Maybe Vlan-\u003eModification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modDlVlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "modDlVlanPcp",
          "package": "netcore",
          "signature": "Word8 -\u003e Modification",
          "source": "src/Frenetic-NetCore-Short.html#modDlVlanPcp",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modDlVlanPcp\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modDlVlanPcp\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modDlVlanPcp",
          "normalized": "Word-\u003eModification",
          "package": "netcore",
          "partial": "Dl Vlan Pcp",
          "signature": "Word-\u003eModification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modDlVlanPcp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "modNwDst",
          "package": "netcore",
          "signature": "Word32 -\u003e Modification",
          "source": "src/Frenetic-NetCore-Short.html#modNwDst",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modNwDst\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modNwDst\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modNwDst",
          "normalized": "Word-\u003eModification",
          "package": "netcore",
          "partial": "Nw Dst",
          "signature": "Word-\u003eModification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modNwDst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "modNwSrc",
          "package": "netcore",
          "signature": "Word32 -\u003e Modification",
          "source": "src/Frenetic-NetCore-Short.html#modNwSrc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modNwSrc\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modNwSrc\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modNwSrc",
          "normalized": "Word-\u003eModification",
          "package": "netcore",
          "partial": "Nw Src",
          "signature": "Word-\u003eModification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modNwSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "modNwTos",
          "package": "netcore",
          "signature": "Word8 -\u003e Modification",
          "source": "src/Frenetic-NetCore-Short.html#modNwTos",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modNwTos\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modNwTos\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modNwTos",
          "normalized": "Word-\u003eModification",
          "package": "netcore",
          "partial": "Nw Tos",
          "signature": "Word-\u003eModification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modNwTos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "modTpDst",
          "package": "netcore",
          "signature": "Word16 -\u003e Modification",
          "source": "src/Frenetic-NetCore-Short.html#modTpDst",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modTpDst\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modTpDst\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modTpDst",
          "normalized": "Word-\u003eModification",
          "package": "netcore",
          "partial": "Tp Dst",
          "signature": "Word-\u003eModification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modTpDst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "modTpSrc",
          "package": "netcore",
          "signature": "Word16 -\u003e Modification",
          "source": "src/Frenetic-NetCore-Short.html#modTpSrc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modTpSrc\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modTpSrc\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modTpSrc",
          "normalized": "Word-\u003eModification",
          "package": "netcore",
          "partial": "Tp Src",
          "signature": "Word-\u003eModification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modTpSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForward the packet out of the specified physical ports with modifications.\n\u003c/p\u003e\u003cp\u003eEach port has its own record of modifications, so modifications at one port\n do not interfere with modifications at another port.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "modify",
          "package": "netcore",
          "signature": "[(Port, Modification)] -\u003e Action",
          "source": "src/Frenetic-NetCore-Short.html#modify",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modify\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modify\"]"
        },
        "index": {
          "description": "Forward the packet out of the specified physical ports with modifications Each port has its own record of modifications so modifications at one port do not interfere with modifications at another port",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modify",
          "normalized": "[(Port,Modification)]-\u003eAction",
          "package": "netcore",
          "signature": "[(Port,Modification)]-\u003eAction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore.Types\"]",
          "name": "modifyDlDst",
          "package": "netcore",
          "signature": "Maybe Word48",
          "source": "src/Frenetic-NetCore-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyDlDst\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyDlDst\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modifyDlDst",
          "package": "netcore",
          "partial": "Dl Dst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyDlDst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore.Types\"]",
          "name": "modifyDlSrc",
          "package": "netcore",
          "signature": "Maybe Word48",
          "source": "src/Frenetic-NetCore-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyDlSrc\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyDlSrc\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modifyDlSrc",
          "package": "netcore",
          "partial": "Dl Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyDlSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore.Types\"]",
          "name": "modifyDlVlan",
          "package": "netcore",
          "signature": "Maybe (Maybe Vlan)",
          "source": "src/Frenetic-NetCore-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyDlVlan\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyDlVlan\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modifyDlVlan",
          "package": "netcore",
          "partial": "Dl Vlan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyDlVlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore.Types\"]",
          "name": "modifyDlVlanPcp",
          "package": "netcore",
          "signature": "Maybe Word8",
          "source": "src/Frenetic-NetCore-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyDlVlanPcp\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyDlVlanPcp\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modifyDlVlanPcp",
          "package": "netcore",
          "partial": "Dl Vlan Pcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyDlVlanPcp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore.Types\"]",
          "name": "modifyNwDst",
          "package": "netcore",
          "signature": "Maybe Word32",
          "source": "src/Frenetic-NetCore-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyNwDst\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyNwDst\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modifyNwDst",
          "package": "netcore",
          "partial": "Nw Dst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyNwDst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore.Types\"]",
          "name": "modifyNwSrc",
          "package": "netcore",
          "signature": "Maybe Word32",
          "source": "src/Frenetic-NetCore-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyNwSrc\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyNwSrc\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modifyNwSrc",
          "package": "netcore",
          "partial": "Nw Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyNwSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore.Types\"]",
          "name": "modifyNwTos",
          "package": "netcore",
          "signature": "Maybe Word8",
          "source": "src/Frenetic-NetCore-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyNwTos\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyNwTos\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modifyNwTos",
          "package": "netcore",
          "partial": "Nw Tos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyNwTos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore.Types\"]",
          "name": "modifyTpDst",
          "package": "netcore",
          "signature": "Maybe Word16",
          "source": "src/Frenetic-NetCore-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyTpDst\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyTpDst\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modifyTpDst",
          "package": "netcore",
          "partial": "Tp Dst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyTpDst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore.Types\"]",
          "name": "modifyTpSrc",
          "package": "netcore",
          "signature": "Maybe Word16",
          "source": "src/Frenetic-NetCore-Types.html#Modification",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyTpSrc\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyTpSrc\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "modifyTpSrc",
          "package": "netcore",
          "partial": "Tp Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyTpSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbbreviation for predicate negation.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "neg",
          "package": "netcore",
          "signature": "Predicate -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#neg",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:neg\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:neg\"]"
        },
        "index": {
          "description": "Abbreviation for predicate negation",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "neg",
          "normalized": "Predicate-\u003ePredicate",
          "package": "netcore",
          "signature": "Predicate-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch destination IP address.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "nwDst",
          "package": "netcore",
          "signature": "Word32 -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#nwDst",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwDst\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:nwDst\"]"
        },
        "index": {
          "description": "Match destination IP address",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "nwDst",
          "normalized": "Word-\u003ePredicate",
          "package": "netcore",
          "partial": "Dst",
          "signature": "Word-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwDst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a prefix of the destination IP address.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "nwDstPrefix",
          "package": "netcore",
          "signature": "Word32 -\u003e Int -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#nwDstPrefix",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwDstPrefix\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:nwDstPrefix\"]"
        },
        "index": {
          "description": "Match prefix of the destination IP address",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "nwDstPrefix",
          "normalized": "Word-\u003eInt-\u003ePredicate",
          "package": "netcore",
          "partial": "Dst Prefix",
          "signature": "Word-\u003eInt-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwDstPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch IP protocol code (e.g., 0x6 indicates TCP segments).\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "nwProto",
          "package": "netcore",
          "signature": "Word8 -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#nwProto",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwProto\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:nwProto\"]"
        },
        "index": {
          "description": "Match IP protocol code e.g x6 indicates TCP segments",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "nwProto",
          "normalized": "Word-\u003ePredicate",
          "package": "netcore",
          "partial": "Proto",
          "signature": "Word-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwProto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch source IP address.\n\u003c/p\u003e\u003cp\u003eThis is only meaningful in combination with 'dlTyp 0x0800'.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "nwSrc",
          "package": "netcore",
          "signature": "Word32 -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#nwSrc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwSrc\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:nwSrc\"]"
        },
        "index": {
          "description": "Match source IP address This is only meaningful in combination with dlTyp x0800",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "nwSrc",
          "normalized": "Word-\u003ePredicate",
          "package": "netcore",
          "partial": "Src",
          "signature": "Word-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a prefix of the source IP address.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "nwSrcPrefix",
          "package": "netcore",
          "signature": "Word32 -\u003e Int -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#nwSrcPrefix",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwSrcPrefix\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:nwSrcPrefix\"]"
        },
        "index": {
          "description": "Match prefix of the source IP address",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "nwSrcPrefix",
          "normalized": "Word-\u003eInt-\u003ePredicate",
          "package": "netcore",
          "partial": "Src Prefix",
          "signature": "Word-\u003eInt-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwSrcPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch IP TOS field.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "nwTos",
          "package": "netcore",
          "signature": "Word8 -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#nwTos",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwTos\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:nwTos\"]"
        },
        "index": {
          "description": "Match IP TOS field",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "nwTos",
          "normalized": "Word-\u003ePredicate",
          "package": "netcore",
          "partial": "Tos",
          "signature": "Word-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwTos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch switch identifier.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "onSwitch",
          "package": "netcore",
          "signature": "Switch -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#onSwitch",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:onSwitch\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:onSwitch\"]"
        },
        "index": {
          "description": "Match switch identifier",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "onSwitch",
          "normalized": "Switch-\u003ePredicate",
          "package": "netcore",
          "partial": "Switch",
          "signature": "Switch-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:onSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct nary intersection of a list of predicates\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "prAnd",
          "package": "netcore",
          "signature": "[Predicate] -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#prAnd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:prAnd\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:prAnd\"]"
        },
        "index": {
          "description": "Construct nary intersection of list of predicates",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "prAnd",
          "normalized": "[Predicate]-\u003ePredicate",
          "package": "netcore",
          "partial": "And",
          "signature": "[Predicate]-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:prAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct nary union of a list of predicates\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "prOr",
          "package": "netcore",
          "signature": "[Predicate] -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#prOr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:prOr\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:prOr\"]"
        },
        "index": {
          "description": "Construct nary union of list of predicates",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "prOr",
          "normalized": "[Predicate]-\u003ePredicate",
          "package": "netcore",
          "partial": "Or",
          "signature": "[Predicate]-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:prOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the set difference between p1 and p2\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "prSubtract",
          "package": "netcore",
          "signature": "Predicate -\u003e Predicate -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#prSubtract",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:prSubtract\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:prSubtract\"]"
        },
        "index": {
          "description": "Construct the set difference between p1 and p2",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "prSubtract",
          "normalized": "Predicate-\u003ePredicate-\u003ePredicate",
          "package": "netcore",
          "partial": "Subtract",
          "signature": "Predicate-\u003ePredicate-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:prSubtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch IP destination port.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "tpDst",
          "package": "netcore",
          "signature": "Word16 -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#tpDst",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:tpDst\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:tpDst\"]"
        },
        "index": {
          "description": "Match IP destination port",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "tpDst",
          "normalized": "Word-\u003ePredicate",
          "package": "netcore",
          "partial": "Dst",
          "signature": "Word-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:tpDst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch IP source port.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore\"]",
          "name": "tpSrc",
          "package": "netcore",
          "signature": "Word16 -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Short.html#tpSrc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:tpSrc\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:tpSrc\"]"
        },
        "index": {
          "description": "Match IP source port",
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "tpSrc",
          "normalized": "Word-\u003ePredicate",
          "package": "netcore",
          "partial": "Src",
          "signature": "Word-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:tpSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Short\",\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "unmodified",
          "package": "netcore",
          "signature": "Modification",
          "source": "src/Frenetic-NetCore-Types.html#unmodified",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:unmodified\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:unmodified\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:unmodified\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Short",
          "module": "Frenetic.NetCore.Short",
          "name": "unmodified",
          "package": "netcore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:unmodified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "Types",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Types",
          "package": "netcore",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActions to perform on packets.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "Action",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Action",
          "type": "data"
        },
        "index": {
          "description": "Actions to perform on packets",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Action",
          "package": "netcore",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "Counter",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Counter",
          "type": "data"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Counter",
          "package": "netcore",
          "partial": "Counter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLoc\u003c/a\u003e\u003c/code\u003e uniquely identifies a port at a switch.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "Loc",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Loc",
          "type": "data"
        },
        "index": {
          "description": "Loc uniquely identifies port at switch",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Loc",
          "package": "netcore",
          "partial": "Loc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each fields with a value Just v, modify that field to be v.\n  If the field is Nothing then there is no modification of that field.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "Modification",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Modification",
          "type": "data"
        },
        "index": {
          "description": "For each fields with value Just modify that field to be If the field is Nothing then there is no modification of that field",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Modification",
          "package": "netcore",
          "partial": "Modification",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Modification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePackets' headers.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "Packet",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Packet",
          "type": "data"
        },
        "index": {
          "description": "Packets headers",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Packet",
          "package": "netcore",
          "partial": "Packet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePatterns to match packets. Patterns translate directly to a single OpenFlow\n match rule.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "Pattern",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Pattern",
          "type": "data"
        },
        "index": {
          "description": "Patterns to match packets Patterns translate directly to single OpenFlow match rule",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Pattern",
          "package": "netcore",
          "partial": "Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolicies denote functions from (switch, packet) to packets. \n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "Policy",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Policy",
          "type": "data"
        },
        "index": {
          "description": "Policies denote functions from switch packet to packets",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Policy",
          "package": "netcore",
          "partial": "Policy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Policy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of a physical port.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "Port",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Port",
          "type": "type"
        },
        "index": {
          "description": "The number of physical port",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Port",
          "package": "netcore",
          "partial": "Port",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicates to match packets.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "Predicate",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Predicate",
          "type": "data"
        },
        "index": {
          "description": "Predicates to match packets",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Predicate",
          "package": "netcore",
          "partial": "Predicate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical ports.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "PseudoPort",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#PseudoPort",
          "type": "data"
        },
        "index": {
          "description": "Logical ports",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "PseudoPort",
          "package": "netcore",
          "partial": "Pseudo Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:PseudoPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "Query",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Query",
          "type": "data"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Query",
          "package": "netcore",
          "partial": "Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA switch's unique identifier.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "Switch",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Switch",
          "type": "type"
        },
        "index": {
          "description": "switch unique identifier",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Switch",
          "package": "netcore",
          "partial": "Switch",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVLAN tags. Only the lower 12-bits are used.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "Vlan",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Vlan",
          "type": "type"
        },
        "index": {
          "description": "VLAN tags Only the lower bits are used",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Vlan",
          "package": "netcore",
          "partial": "Vlan",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Vlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEthernet addresses are 48-bits wide.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "Word48",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Word48",
          "type": "type"
        },
        "index": {
          "description": "Ethernet addresses are bits wide",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Word48",
          "package": "netcore",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Word48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "Action",
          "package": "netcore",
          "signature": "Action",
          "source": "src/Frenetic-NetCore-Types.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Action",
          "package": "netcore",
          "partial": "Action",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "AllPorts",
          "package": "netcore",
          "signature": "AllPorts",
          "source": "src/Frenetic-NetCore-Types.html#PseudoPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "AllPorts",
          "package": "netcore",
          "partial": "All Ports",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:AllPorts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "CountBytes",
          "package": "netcore",
          "signature": "CountBytes",
          "source": "src/Frenetic-NetCore-Types.html#Counter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "CountBytes",
          "package": "netcore",
          "partial": "Count Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:CountBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "CountPackets",
          "package": "netcore",
          "signature": "CountPackets",
          "source": "src/Frenetic-NetCore-Types.html#Counter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "CountPackets",
          "package": "netcore",
          "partial": "Count Packets",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:CountPackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "Loc",
          "package": "netcore",
          "signature": "Loc Switch Port",
          "source": "src/Frenetic-NetCore-Types.html#Loc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:Loc\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:Loc\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Loc",
          "package": "netcore",
          "partial": "Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "NumPktQuery",
          "package": "netcore",
          "signature": "NumPktQuery",
          "source": "src/Frenetic-NetCore-Types.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "NumPktQuery",
          "package": "netcore",
          "partial": "Num Pkt Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:NumPktQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "Pattern",
          "package": "netcore",
          "signature": "Pattern",
          "source": "src/Frenetic-NetCore-Types.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Pattern",
          "package": "netcore",
          "partial": "Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "Physical",
          "package": "netcore",
          "signature": "Physical Port",
          "source": "src/Frenetic-NetCore-Types.html#PseudoPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "Physical",
          "package": "netcore",
          "partial": "Physical",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:Physical"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "PktQuery",
          "package": "netcore",
          "signature": "PktQuery",
          "source": "src/Frenetic-NetCore-Types.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "PktQuery",
          "package": "netcore",
          "partial": "Pkt Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PktQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms the given action on packets matching the given predicate.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "PoBasic",
          "package": "netcore",
          "signature": "PoBasic Predicate Action",
          "source": "src/Frenetic-NetCore-Types.html#Policy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PoBasic\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:PoBasic\"]"
        },
        "index": {
          "description": "Performs the given action on packets matching the given predicate",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "PoBasic",
          "package": "netcore",
          "partial": "Po Basic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PoBasic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms no actions.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "PoBottom",
          "package": "netcore",
          "signature": "PoBottom",
          "source": "src/Frenetic-NetCore-Types.html#Policy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PoBottom\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:PoBottom\"]"
        },
        "index": {
          "description": "Performs no actions",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "PoBottom",
          "package": "netcore",
          "partial": "Po Bottom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PoBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms the actions of both P1 and P2.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "PoUnion",
          "package": "netcore",
          "signature": "PoUnion Policy Policy",
          "source": "src/Frenetic-NetCore-Types.html#Policy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PoUnion\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:PoUnion\"]"
        },
        "index": {
          "description": "Performs the actions of both P1 and P2",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "PoUnion",
          "package": "netcore",
          "partial": "Po Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PoUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch both predicates.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "PrIntersect",
          "package": "netcore",
          "signature": "PrIntersect Predicate Predicate",
          "source": "src/Frenetic-NetCore-Types.html#Predicate",
          "type": "function"
        },
        "index": {
          "description": "Match both predicates",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "PrIntersect",
          "package": "netcore",
          "partial": "Pr Intersect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PrIntersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrNegate P matches packets that do not match P.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "PrNegate",
          "package": "netcore",
          "signature": "PrNegate Predicate",
          "source": "src/Frenetic-NetCore-Types.html#Predicate",
          "type": "function"
        },
        "index": {
          "description": "PrNegate matches packets that do not match",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "PrNegate",
          "package": "netcore",
          "partial": "Pr Negate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PrNegate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch with a simple pattern.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "PrPattern",
          "package": "netcore",
          "signature": "PrPattern Pattern",
          "source": "src/Frenetic-NetCore-Types.html#Predicate",
          "type": "function"
        },
        "index": {
          "description": "Match with simple pattern",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "PrPattern",
          "package": "netcore",
          "partial": "Pr Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PrPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch only at this switch.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "PrTo",
          "package": "netcore",
          "signature": "PrTo Switch",
          "source": "src/Frenetic-NetCore-Types.html#Predicate",
          "type": "function"
        },
        "index": {
          "description": "Match only at this switch",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "PrTo",
          "package": "netcore",
          "partial": "Pr To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PrTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either predicates.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "PrUnion",
          "package": "netcore",
          "signature": "PrUnion Predicate Predicate",
          "source": "src/Frenetic-NetCore-Types.html#Predicate",
          "type": "function"
        },
        "index": {
          "description": "Match either predicates",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "PrUnion",
          "package": "netcore",
          "partial": "Pr Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PrUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "actionForwards",
          "package": "netcore",
          "signature": "MultiSet (PseudoPort, Modification)",
          "source": "src/Frenetic-NetCore-Types.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "actionForwards",
          "normalized": "MultiSet(PseudoPort,Modification)",
          "package": "netcore",
          "partial": "Forwards",
          "signature": "MultiSet(PseudoPort,Modification)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:actionForwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "actionForwardsTo",
          "package": "netcore",
          "signature": "Action -\u003e MultiSet PseudoPort",
          "source": "src/Frenetic-NetCore-Types.html#actionForwardsTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "actionForwardsTo",
          "normalized": "Action-\u003eMultiSet PseudoPort",
          "package": "netcore",
          "partial": "Forwards To",
          "signature": "Action-\u003eMultiSet PseudoPort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:actionForwardsTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "actionQueries",
          "package": "netcore",
          "signature": "MultiSet Query",
          "source": "src/Frenetic-NetCore-Types.html#Action",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "actionQueries",
          "package": "netcore",
          "partial": "Queries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:actionQueries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends packets to the controller.\n\u003c/p\u003e\u003cp\u003eReturns an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e and a channel. When the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e is used in the active\n \u003ccode\u003e\u003ca\u003ePolicy\u003c/a\u003e\u003c/code\u003e, all matching packets are sent to the controller. These packets\n are written into the channel.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "countBytes",
          "package": "netcore",
          "signature": "Int-\u003e IO (Chan (Switch, Integer), Action)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:countBytes\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:countBytes\"]"
        },
        "index": {
          "description": "Sends packets to the controller Returns an Action and channel When the Action is used in the active Policy all matching packets are sent to the controller These packets are written into the channel",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "countBytes",
          "normalized": "Int-\u003eIO(Chan(Switch,Integer),Action)",
          "package": "netcore",
          "partial": "Bytes",
          "signature": "Int-\u003eIO(Chan(Switch,Integer),Action)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:countBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "countField",
          "package": "netcore",
          "signature": "Counter",
          "source": "src/Frenetic-NetCore-Types.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "countField",
          "package": "netcore",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:countField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePeriodically polls the network to counts the number of bytes received.\n\u003c/p\u003e\u003cp\u003eReturns an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e and a channel. When the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e is used in the\n active \u003ccode\u003e\u003ca\u003ePolicy\u003c/a\u003e\u003c/code\u003e, the controller periodically reads the packet counters\n on the network. The controller returns the number of matching packets\n on each switch.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "countPkts",
          "package": "netcore",
          "signature": "Int-\u003e IO (Chan (Switch, Integer), Action)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:countPkts\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:countPkts\"]"
        },
        "index": {
          "description": "Periodically polls the network to counts the number of bytes received Returns an Action and channel When the Action is used in the active Policy the controller periodically reads the packet counters on the network The controller returns the number of matching packets on each switch",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "countPkts",
          "normalized": "Int-\u003eIO(Chan(Switch,Integer),Action)",
          "package": "netcore",
          "partial": "Pkts",
          "signature": "Int-\u003eIO(Chan(Switch,Integer),Action)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:countPkts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that exactly matches a packet's headers.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "exactMatch",
          "package": "netcore",
          "signature": "Packet -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Types.html#exactMatch",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:exactMatch\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:exactMatch\"]"
        },
        "index": {
          "description": "predicate that exactly matches packet headers",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "exactMatch",
          "normalized": "Packet-\u003ePredicate",
          "package": "netcore",
          "partial": "Match",
          "signature": "Packet-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:exactMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Frenetic.NetCore.Types\",\"Frenetic.NetCore\"]",
          "name": "getPkts",
          "package": "netcore",
          "signature": "IO (Chan (Switch, Packet), Action)",
          "source": "src/Frenetic-NetCore-Types.html#getPkts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:getPkts\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:getPkts\"]"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "getPkts",
          "normalized": "IO(Chan(Switch,Packet),Action)",
          "package": "netcore",
          "partial": "Pkts",
          "signature": "IO(Chan(Switch,Packet),Action)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:getPkts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "idOfQuery",
          "package": "netcore",
          "signature": "QueryID",
          "source": "src/Frenetic-NetCore-Types.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "idOfQuery",
          "package": "netcore",
          "partial": "Of Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:idOfQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a list of the non-wildcarded patterns with sep between field and value\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "interesting",
          "package": "netcore",
          "signature": "String -\u003e Pattern -\u003e [String]",
          "source": "src/Frenetic-NetCore-Types.html#interesting",
          "type": "function"
        },
        "index": {
          "description": "Build list of the non-wildcarded patterns with sep between field and value",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "interesting",
          "normalized": "String-\u003ePattern-\u003e[String]",
          "package": "netcore",
          "signature": "String-\u003ePattern-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:interesting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "isPktQuery",
          "package": "netcore",
          "signature": "Query -\u003e Bool",
          "source": "src/Frenetic-NetCore-Types.html#isPktQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "isPktQuery",
          "normalized": "Query-\u003eBool",
          "package": "netcore",
          "partial": "Pkt Query",
          "signature": "Query-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:isPktQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "lastVal",
          "package": "netcore",
          "signature": "IORef Integer",
          "source": "src/Frenetic-NetCore-Types.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "lastVal",
          "package": "netcore",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:lastVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "modifiedFields",
          "package": "netcore",
          "signature": "Modification -\u003e Set Field",
          "source": "src/Frenetic-NetCore-Types.html#modifiedFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "modifiedFields",
          "normalized": "Modification-\u003eSet Field",
          "package": "netcore",
          "partial": "Fields",
          "signature": "Modification-\u003eSet Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifiedFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "numPktQueryChan",
          "package": "netcore",
          "signature": "Chan (Switch, Integer)",
          "source": "src/Frenetic-NetCore-Types.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "numPktQueryChan",
          "normalized": "Chan(Switch,Integer)",
          "package": "netcore",
          "partial": "Pkt Query Chan",
          "signature": "Chan(Switch,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:numPktQueryChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "pktQueryChan",
          "package": "netcore",
          "signature": "Chan (Switch, Packet)",
          "source": "src/Frenetic-NetCore-Types.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "pktQueryChan",
          "normalized": "Chan(Switch,Packet)",
          "package": "netcore",
          "partial": "Query Chan",
          "signature": "Chan(Switch,Packet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktQueryChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a predicate that matches the domain of the policy.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "poDom",
          "package": "netcore",
          "signature": "Policy -\u003e Predicate",
          "source": "src/Frenetic-NetCore-Types.html#poDom",
          "type": "function"
        },
        "index": {
          "description": "Returns predicate that matches the domain of the policy",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "poDom",
          "normalized": "Policy-\u003ePredicate",
          "package": "netcore",
          "partial": "Dom",
          "signature": "Policy-\u003ePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:poDom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet back all basic policies in the union.  Does not return any unions.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "poUnUnion",
          "package": "netcore",
          "signature": "Policy -\u003e [Policy]",
          "source": "src/Frenetic-NetCore-Types.html#poUnUnion",
          "type": "function"
        },
        "index": {
          "description": "Get back all basic policies in the union Does not return any unions",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "poUnUnion",
          "normalized": "Policy-\u003e[Policy]",
          "package": "netcore",
          "partial": "Un Union",
          "signature": "Policy-\u003e[Policy]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:poUnUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet back all predicates in the intersection.  Does not return any naked\n intersections.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "prUnIntersect",
          "package": "netcore",
          "signature": "Predicate -\u003e [Predicate]",
          "source": "src/Frenetic-NetCore-Types.html#prUnIntersect",
          "type": "function"
        },
        "index": {
          "description": "Get back all predicates in the intersection Does not return any naked intersections",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "prUnIntersect",
          "normalized": "Predicate-\u003e[Predicate]",
          "package": "netcore",
          "partial": "Un Intersect",
          "signature": "Predicate-\u003e[Predicate]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:prUnIntersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet back all predicates in the union.  Does not return any naked unions.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "prUnUnion",
          "package": "netcore",
          "signature": "Predicate -\u003e [Predicate]",
          "source": "src/Frenetic-NetCore-Types.html#prUnUnion",
          "type": "function"
        },
        "index": {
          "description": "Get back all predicates in the union Does not return any naked unions",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "prUnUnion",
          "normalized": "Predicate-\u003e[Predicate]",
          "package": "netcore",
          "partial": "Un Union",
          "signature": "Predicate-\u003e[Predicate]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:prUnUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnDlDst",
          "package": "netcore",
          "signature": "Wildcard Word48",
          "source": "src/Frenetic-NetCore-Types.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnDlDst",
          "package": "netcore",
          "partial": "Dl Dst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnDlDst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnDlSrc",
          "package": "netcore",
          "signature": "Wildcard Word48",
          "source": "src/Frenetic-NetCore-Types.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnDlSrc",
          "package": "netcore",
          "partial": "Dl Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnDlSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnDlTyp",
          "package": "netcore",
          "signature": "Wildcard Word16",
          "source": "src/Frenetic-NetCore-Types.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnDlTyp",
          "package": "netcore",
          "partial": "Dl Typ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnDlTyp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnDlVlan",
          "package": "netcore",
          "signature": "Wildcard (Maybe Vlan)",
          "source": "src/Frenetic-NetCore-Types.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnDlVlan",
          "package": "netcore",
          "partial": "Dl Vlan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnDlVlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnDlVlanPcp",
          "package": "netcore",
          "signature": "Wildcard Word8",
          "source": "src/Frenetic-NetCore-Types.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnDlVlanPcp",
          "package": "netcore",
          "partial": "Dl Vlan Pcp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnDlVlanPcp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnInPort",
          "package": "netcore",
          "signature": "Wildcard Port",
          "source": "src/Frenetic-NetCore-Types.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnInPort",
          "package": "netcore",
          "partial": "In Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnInPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnNwDst",
          "package": "netcore",
          "signature": "Prefix Word32",
          "source": "src/Frenetic-NetCore-Types.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnNwDst",
          "package": "netcore",
          "partial": "Nw Dst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnNwDst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnNwProto",
          "package": "netcore",
          "signature": "Wildcard Word8",
          "source": "src/Frenetic-NetCore-Types.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnNwProto",
          "package": "netcore",
          "partial": "Nw Proto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnNwProto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnNwSrc",
          "package": "netcore",
          "signature": "Prefix Word32",
          "source": "src/Frenetic-NetCore-Types.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnNwSrc",
          "package": "netcore",
          "partial": "Nw Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnNwSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnNwTos",
          "package": "netcore",
          "signature": "Wildcard Word8",
          "source": "src/Frenetic-NetCore-Types.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnNwTos",
          "package": "netcore",
          "partial": "Nw Tos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnNwTos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnTpDst",
          "package": "netcore",
          "signature": "Wildcard Word16",
          "source": "src/Frenetic-NetCore-Types.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnTpDst",
          "package": "netcore",
          "partial": "Tp Dst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnTpDst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnTpSrc",
          "package": "netcore",
          "signature": "Wildcard Word16",
          "source": "src/Frenetic-NetCore-Types.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "ptrnTpSrc",
          "package": "netcore",
          "partial": "Tp Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnTpSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "queryInterval",
          "package": "netcore",
          "signature": "Int",
          "source": "src/Frenetic-NetCore-Types.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "queryInterval",
          "package": "netcore",
          "partial": "Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:queryInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the approximate size of the policy\n\u003c/p\u003e",
          "module": "Frenetic.NetCore.Types",
          "name": "size",
          "package": "netcore",
          "signature": "Policy -\u003e Int",
          "source": "src/Frenetic-NetCore-Types.html#size",
          "type": "function"
        },
        "index": {
          "description": "Returns the approximate size of the policy",
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "size",
          "normalized": "Policy-\u003eInt",
          "package": "netcore",
          "signature": "Policy-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore.Types",
          "name": "totalVal",
          "package": "netcore",
          "signature": "IORef Integer",
          "source": "src/Frenetic-NetCore-Types.html#Query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore Types",
          "module": "Frenetic.NetCore.Types",
          "name": "totalVal",
          "package": "netcore",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:totalVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEverything necessary to build a controller atop NetCore, using Nettle as\n a backend.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Frenetic.NetCore",
          "name": "NetCore",
          "package": "netcore",
          "source": "src/Frenetic-NetCore.html",
          "type": "module"
        },
        "index": {
          "description": "Everything necessary to build controller atop NetCore using Nettle as backend",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "NetCore",
          "package": "netcore",
          "partial": "Net Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActions to perform on packets.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "Action",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Action",
          "type": "data"
        },
        "index": {
          "description": "Actions to perform on packets",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "Action",
          "package": "netcore",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore",
          "name": "EthernetAddress",
          "package": "netcore",
          "source": "src/Frenetic-EthernetAddress.html#EthernetAddress",
          "type": "data"
        },
        "index": {
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "EthernetAddress",
          "package": "netcore",
          "partial": "Ethernet Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:EthernetAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLoc\u003c/a\u003e\u003c/code\u003e uniquely identifies a port at a switch.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "Loc",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Loc",
          "type": "data"
        },
        "index": {
          "description": "Loc uniquely identifies port at switch",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "Loc",
          "package": "netcore",
          "partial": "Loc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each fields with a value Just v, modify that field to be v.\n  If the field is Nothing then there is no modification of that field.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "Modification",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Modification",
          "type": "data"
        },
        "index": {
          "description": "For each fields with value Just modify that field to be If the field is Nothing then there is no modification of that field",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "Modification",
          "package": "netcore",
          "partial": "Modification",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Modification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePackets' headers.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "Packet",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Packet",
          "type": "data"
        },
        "index": {
          "description": "Packets headers",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "Packet",
          "package": "netcore",
          "partial": "Packet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolicies denote functions from (switch, packet) to packets. \n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "Policy",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Policy",
          "type": "data"
        },
        "index": {
          "description": "Policies denote functions from switch packet to packets",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "Policy",
          "package": "netcore",
          "partial": "Policy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Policy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of a physical port.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "Port",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Port",
          "type": "type"
        },
        "index": {
          "description": "The number of physical port",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "Port",
          "package": "netcore",
          "partial": "Port",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicates to match packets.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "Predicate",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Predicate",
          "type": "data"
        },
        "index": {
          "description": "Predicates to match packets",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "Predicate",
          "package": "netcore",
          "partial": "Predicate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA slice represents a subgraph of the network for the purposes of isolating\n programs from each other.\n\u003c/p\u003e\u003cp\u003eThe interface to a slice has two components: a topology comprising switches,\n ports, and links; and a collection of predicates, one for each outward-facing\n edge port.\n\u003c/p\u003e\u003cp\u003eWe represent the topology as a collection of locations in the network, and\n the predicates as a mapping from locations to predicates.\n\u003c/p\u003e\u003cp\u003eIntuitively, packets may travel freely between internal locations, but must\n satisfy the associated predicate to enter the slice at an ingress location,\n or leave the slice at an egress location.  If an external port is not listed\n in the ingress or egress set, then no packets may enter or leave\n (respectively) on that port.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "Slice",
          "package": "netcore",
          "source": "src/Frenetic-Slices-Slice.html#Slice",
          "type": "data"
        },
        "index": {
          "description": "slice represents subgraph of the network for the purposes of isolating programs from each other The interface to slice has two components topology comprising switches ports and links and collection of predicates one for each outward-facing edge port We represent the topology as collection of locations in the network and the predicates as mapping from locations to predicates Intuitively packets may travel freely between internal locations but must satisfy the associated predicate to enter the slice at an ingress location or leave the slice at an egress location If an external port is not listed in the ingress or egress set then no packets may enter or leave respectively on that port",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "Slice",
          "package": "netcore",
          "partial": "Slice",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA switch's unique identifier.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "Switch",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Switch",
          "type": "type"
        },
        "index": {
          "description": "switch unique identifier",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "Switch",
          "package": "netcore",
          "partial": "Switch",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore",
          "name": "Topo",
          "package": "netcore",
          "source": "src/Frenetic-Topo.html#Topo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "Topo",
          "package": "netcore",
          "partial": "Topo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Topo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVLAN tags. Only the lower 12-bits are used.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "Vlan",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Vlan",
          "type": "type"
        },
        "index": {
          "description": "VLAN tags Only the lower bits are used",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "Vlan",
          "package": "netcore",
          "partial": "Vlan",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Vlan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEthernet addresses are 48-bits wide.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "Word48",
          "package": "netcore",
          "source": "src/Frenetic-NetCore-Types.html#Word48",
          "type": "type"
        },
        "index": {
          "description": "Ethernet addresses are bits wide",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "Word48",
          "package": "netcore",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Word48"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetCore",
          "name": "Slice",
          "package": "netcore",
          "signature": "Slice",
          "source": "src/Frenetic-Slices-Slice.html#Slice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "Slice",
          "package": "netcore",
          "partial": "Slice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:Slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a graph from list of undirected edges labeled with their ports\n Ensures that the resulting graph is undirected-equivalent, and labels each\n \u003ca\u003edirected\u003c/a\u003e edge with the appropriate port to send a packet over that edge\n from the source switch.\n\u003c/p\u003e\u003cp\u003eBy convention, hosts have a single port 0, and non-hosts have any number of\n non-zero ports.  If 0 is in the ports of a node, it is considered to be a\n host regardless of other ports that may be present.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "buildGraph",
          "package": "netcore",
          "signature": "[((Node, Port), (Node, Port))] -\u003e Topo",
          "source": "src/Frenetic-Topo.html#buildGraph",
          "type": "function"
        },
        "index": {
          "description": "Build graph from list of undirected edges labeled with their ports Ensures that the resulting graph is undirected-equivalent and labels each directed edge with the appropriate port to send packet over that edge from the source switch By convention hosts have single port and non-hosts have any number of non-zero ports If is in the ports of node it is considered to be host regardless of other ports that may be present",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "buildGraph",
          "normalized": "[((Node,Port),(Node,Port))]-\u003eTopo",
          "package": "netcore",
          "partial": "Graph",
          "signature": "[((Node,Port),(Node,Port))]-\u003eTopo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:buildGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts an OpenFlow controller that runs a static NetCore program.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore\",\"Frenetic.Server\"]",
          "name": "controller",
          "package": "netcore",
          "signature": "Policy -\u003e IO ()",
          "source": "src/Frenetic-Server.html#controller",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:controller\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Server.html#v:controller\"]"
        },
        "index": {
          "description": "Starts an OpenFlow controller that runs static NetCore program",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "controller",
          "normalized": "Policy-\u003eIO()",
          "package": "netcore",
          "signature": "Policy-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:controller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts an OpenFlow controller that runs dynamic NetCore programs.\n\u003c/p\u003e\u003cp\u003eThe controller reads NetCore programs from the given channel. When\n the controller receives a program on the channel, it compiles it and\n reconfigures the network to run it.\n\u003c/p\u003e",
          "module": "[\"Frenetic.NetCore\",\"Frenetic.Server\"]",
          "name": "dynController",
          "package": "netcore",
          "signature": "Chan Policy-\u003e Chan (Loc, ByteString)-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dynController\",\"http://hackage.haskell.org/package/netcore/docs/Frenetic-Server.html#v:dynController\"]"
        },
        "index": {
          "description": "Starts an OpenFlow controller that runs dynamic NetCore programs The controller reads NetCore programs from the given channel When the controller receives program on the channel it compiles it and reconfigures the network to run it",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "dynController",
          "normalized": "Chan Policy-\u003eChan(Loc,ByteString)-\u003eIO()",
          "package": "netcore",
          "partial": "Controller",
          "signature": "Chan Policy-\u003eChan(Loc,ByteString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dynController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a list of slices and dynamic policies as they change.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "dynTransform",
          "package": "netcore",
          "signature": "[(Slice, Chan Policy)] -\u003e IO (Chan Policy)",
          "source": "src/Frenetic-Slices-Compile.html#dynTransform",
          "type": "function"
        },
        "index": {
          "description": "Compile list of slices and dynamic policies as they change",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "dynTransform",
          "normalized": "[(Slice,Chan Policy)]-\u003eIO(Chan Policy)",
          "package": "netcore",
          "partial": "Transform",
          "signature": "[(Slice,Chan Policy)]-\u003eIO(Chan Policy)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dynTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal ports, and restrictions on outbound packets.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "egress",
          "package": "netcore",
          "signature": "Map Loc Predicate",
          "source": "src/Frenetic-Slices-Slice.html#Slice",
          "type": "function"
        },
        "index": {
          "description": "External ports and restrictions on outbound packets",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "egress",
          "package": "netcore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:egress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal ports, and restrictions on inbound packets.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "ingress",
          "package": "netcore",
          "signature": "Map Loc Predicate",
          "source": "src/Frenetic-Slices-Slice.html#Slice",
          "type": "function"
        },
        "index": {
          "description": "External ports and restrictions on inbound packets",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "ingress",
          "package": "netcore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:ingress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePorts internal to the slice.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "internal",
          "package": "netcore",
          "signature": "Set Loc",
          "source": "src/Frenetic-Slices-Slice.html#Slice",
          "type": "function"
        },
        "index": {
          "description": "Ports internal to the slice",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "internal",
          "package": "netcore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a slice that exactly covers the given topology, with no ingress or\n egress ports.\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "internalSlice",
          "package": "netcore",
          "signature": "Topo -\u003e Slice",
          "source": "src/Frenetic-Slices-Slice.html#internalSlice",
          "type": "function"
        },
        "index": {
          "description": "Produce slice that exactly covers the given topology with no ingress or egress ports",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "internalSlice",
          "normalized": "Topo-\u003eSlice",
          "package": "netcore",
          "partial": "Slice",
          "signature": "Topo-\u003eSlice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:internalSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a slice with all the switches in topo, and predicate applied to all\n in- and out-bound connections to hosts\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "simpleSlice",
          "package": "netcore",
          "signature": "Topo -\u003e Predicate -\u003e Slice",
          "source": "src/Frenetic-Slices-Slice.html#simpleSlice",
          "type": "function"
        },
        "index": {
          "description": "Produce slice with all the switches in topo and predicate applied to all in and out-bound connections to hosts",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "simpleSlice",
          "normalized": "Topo-\u003ePredicate-\u003eSlice",
          "package": "netcore",
          "partial": "Slice",
          "signature": "Topo-\u003ePredicate-\u003eSlice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:simpleSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce the combined policy by compiling a list of slices and policies with\n the vanilla compiler\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "transform",
          "package": "netcore",
          "signature": "[(Slice, Policy)] -\u003e Policy",
          "source": "src/Frenetic-Slices-Compile.html#transform",
          "type": "function"
        },
        "index": {
          "description": "Produce the combined policy by compiling list of slices and policies with the vanilla compiler",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "transform",
          "normalized": "[(Slice,Policy)]-\u003ePolicy",
          "package": "netcore",
          "signature": "[(Slice,Policy)]-\u003ePolicy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce the combined policy by compiling a list of slices and policies with\n the edge compiler\n\u003c/p\u003e",
          "module": "Frenetic.NetCore",
          "name": "transformEdge",
          "package": "netcore",
          "signature": "Topo -\u003e [(Slice, Policy)] -\u003e Policy",
          "source": "src/Frenetic-Slices-Compile.html#transformEdge",
          "type": "function"
        },
        "index": {
          "description": "Produce the combined policy by compiling list of slices and policies with the edge compiler",
          "hierarchy": "Frenetic NetCore",
          "module": "Frenetic.NetCore",
          "name": "transformEdge",
          "normalized": "Topo-\u003e[(Slice,Policy)]-\u003ePolicy",
          "package": "netcore",
          "partial": "Edge",
          "signature": "Topo-\u003e[(Slice,Policy)]-\u003ePolicy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:transformEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetworkFrames",
          "name": "NetworkFrames",
          "package": "netcore",
          "source": "src/Frenetic-NetworkFrames.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Frenetic NetworkFrames",
          "module": "Frenetic.NetworkFrames",
          "name": "NetworkFrames",
          "package": "netcore",
          "partial": "Network Frames",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetworkFrames.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.NetworkFrames",
          "name": "arpReply",
          "package": "netcore",
          "signature": "Word48 -\u003e Word32 -\u003e Word48 -\u003e Word32 -\u003e ByteString",
          "source": "src/Frenetic-NetworkFrames.html#arpReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic NetworkFrames",
          "module": "Frenetic.NetworkFrames",
          "name": "arpReply",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eByteString",
          "package": "netcore",
          "partial": "Reply",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetworkFrames.html#v:arpReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Pattern",
          "name": "Pattern",
          "package": "netcore",
          "source": "src/Frenetic-Pattern.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Frenetic Pattern",
          "module": "Frenetic.Pattern",
          "name": "Pattern",
          "package": "netcore",
          "partial": "Pattern",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for types that compose similar to wildcards.\n\u003c/p\u003e\u003cp\u003eAll instances must satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ematch\u003c/code\u003e defines a partial order; \u003ccode\u003etop\u003c/code\u003e is the top element of this order\n  and \u003ccode\u003eintersect\u003c/code\u003e is a meet.\n\u003c/li\u003e\u003cli\u003e Meets are exact: if \u003ccode\u003ematch x y\u003c/code\u003e and \u003ccode\u003ematch x z\u003c/code\u003e, then\n  \u003ccode\u003ematch x (fromJust (intersect y z))\u003c/code\u003e, if such a meet exists.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMinimal complete definition: top and intersect.\n\u003c/p\u003e",
          "module": "Frenetic.Pattern",
          "name": "Matchable",
          "package": "netcore",
          "source": "src/Frenetic-Pattern.html#Matchable",
          "type": "class"
        },
        "index": {
          "description": "class for types that compose similar to wildcards All instances must satisfy the following match defines partial order top is the top element of this order and intersect is meet Meets are exact if match and match then match fromJust intersect if such meet exists Minimal complete definition top and intersect",
          "hierarchy": "Frenetic Pattern",
          "module": "Frenetic.Pattern",
          "name": "Matchable",
          "package": "netcore",
          "partial": "Matchable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#t:Matchable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Pattern",
          "name": "Prefix",
          "package": "netcore",
          "source": "src/Frenetic-Pattern.html#Prefix",
          "type": "data"
        },
        "index": {
          "hierarchy": "Frenetic Pattern",
          "module": "Frenetic.Pattern",
          "name": "Prefix",
          "package": "netcore",
          "partial": "Prefix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#t:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Pattern",
          "name": "Wildcard",
          "package": "netcore",
          "source": "src/Frenetic-Pattern.html#Wildcard",
          "type": "data"
        },
        "index": {
          "hierarchy": "Frenetic Pattern",
          "module": "Frenetic.Pattern",
          "name": "Wildcard",
          "package": "netcore",
          "partial": "Wildcard",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#t:Wildcard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Pattern",
          "name": "Exact",
          "package": "netcore",
          "signature": "Exact a",
          "source": "src/Frenetic-Pattern.html#Wildcard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic Pattern",
          "module": "Frenetic.Pattern",
          "name": "Exact",
          "package": "netcore",
          "partial": "Exact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:Exact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Pattern",
          "name": "Prefix",
          "package": "netcore",
          "signature": "Prefix a Int",
          "source": "src/Frenetic-Pattern.html#Prefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic Pattern",
          "module": "Frenetic.Pattern",
          "name": "Prefix",
          "package": "netcore",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Pattern",
          "name": "Wildcard",
          "package": "netcore",
          "signature": "Wildcard",
          "source": "src/Frenetic-Pattern.html#Wildcard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic Pattern",
          "module": "Frenetic.Pattern",
          "name": "Wildcard",
          "package": "netcore",
          "partial": "Wildcard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:Wildcard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Pattern",
          "name": "disjoint",
          "package": "netcore",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Frenetic-Pattern.html#disjoint",
          "type": "method"
        },
        "index": {
          "hierarchy": "Frenetic Pattern",
          "module": "Frenetic.Pattern",
          "name": "disjoint",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "netcore",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:disjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Pattern",
          "name": "intersect",
          "package": "netcore",
          "signature": "a -\u003e a -\u003e Maybe a",
          "source": "src/Frenetic-Pattern.html#intersect",
          "type": "method"
        },
        "index": {
          "hierarchy": "Frenetic Pattern",
          "module": "Frenetic.Pattern",
          "name": "intersect",
          "normalized": "a-\u003ea-\u003eMaybe a",
          "package": "netcore",
          "signature": "a-\u003ea-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Pattern",
          "name": "match",
          "package": "netcore",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Frenetic-Pattern.html#match",
          "type": "method"
        },
        "index": {
          "hierarchy": "Frenetic Pattern",
          "module": "Frenetic.Pattern",
          "name": "match",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "netcore",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Pattern",
          "name": "overlap",
          "package": "netcore",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Frenetic-Pattern.html#overlap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Frenetic Pattern",
          "module": "Frenetic.Pattern",
          "name": "overlap",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "netcore",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:overlap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Pattern",
          "name": "top",
          "package": "netcore",
          "signature": "a",
          "source": "src/Frenetic-Pattern.html#top",
          "type": "method"
        },
        "index": {
          "hierarchy": "Frenetic Pattern",
          "module": "Frenetic.Pattern",
          "name": "top",
          "package": "netcore",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Pattern",
          "name": "wMatch",
          "package": "netcore",
          "signature": "a -\u003e Wildcard a -\u003e Bool",
          "source": "src/Frenetic-Pattern.html#wMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Frenetic Pattern",
          "module": "Frenetic.Pattern",
          "name": "wMatch",
          "normalized": "a-\u003eWildcard a-\u003eBool",
          "package": "netcore",
          "partial": "Match",
          "signature": "a-\u003eWildcard a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:wMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Frenetic.Server",
          "name": "Server",
          "package": "netcore",
          "source": "src/Frenetic-Server.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Frenetic Server",
          "module": "Frenetic.Server",
          "name": "Server",
          "package": "netcore",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Server.html#"
      }
    }
  ]
]