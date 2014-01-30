[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions and types that heavily used by the Frenetic implementation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Frenetic.Common",
        "fct-package": "netcore",
        "fct-signature": "module",
        "fct-source": "src/Frenetic-Common.html",
        "fct-type": "module",
        "title": "Common"
      },
      "index": {
        "description": "Functions and types that heavily used by the Frenetic implementation",
        "hierarchy": "Frenetic Common",
        "module": "Frenetic.Common",
        "name": "Common",
        "normalized": "",
        "package": "netcore",
        "partial": "Common",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#t:ByteString",
      "description": {
        "fct-descr": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
        "fct-module": "Frenetic.Common",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ByteString"
      },
      "index": {
        "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
        "hierarchy": "Frenetic Common",
        "module": "Frenetic.Common",
        "name": "ByteString",
        "normalized": "",
        "package": "netcore",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#t:Map",
      "description": {
        "fct-descr": "\u003cp\u003eA Map from keys \u003ccode\u003ek\u003c/code\u003e to values \u003ccode\u003ea\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Frenetic.Common",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Map"
      },
      "index": {
        "description": "Map from keys to values",
        "hierarchy": "Frenetic Common",
        "module": "Frenetic.Common",
        "name": "Map",
        "normalized": "",
        "package": "netcore",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#t:MultiSet",
      "description": {
        "fct-descr": "\u003cp\u003eA multiset of values \u003ccode\u003ea\u003c/code\u003e.\n   The same value can occur multiple times.\n\u003c/p\u003e",
        "fct-module": "Frenetic.Common",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "MultiSet"
      },
      "index": {
        "description": "multiset of values The same value can occur multiple times",
        "hierarchy": "Frenetic Common",
        "module": "Frenetic.Common",
        "name": "MultiSet",
        "normalized": "",
        "package": "netcore",
        "partial": "Multi Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#t:Set",
      "description": {
        "fct-descr": "\u003cp\u003eA set of values \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Frenetic.Common",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Set"
      },
      "index": {
        "description": "set of values",
        "hierarchy": "Frenetic Common",
        "module": "Frenetic.Common",
        "name": "Set",
        "normalized": "",
        "package": "netcore",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#v:both",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a new channel that waits for both input channels to produce a value,\n and then yields the latest version of both values.  If one channel produces\n multiple values before the other produces any, then the early values are\n discarded.  Afterwards, whenever one channel updates, the output channel\n yields that update along with whatever the current version of the other\n channel is.\n\u003c/p\u003e",
        "fct-module": "Frenetic.Common",
        "fct-package": "netcore",
        "fct-signature": "Chan a -\u003e Chan b -\u003e IO (Chan (a, b))",
        "fct-source": "src/Frenetic-Common.html#both",
        "fct-type": "function",
        "title": "both"
      },
      "index": {
        "description": "Produce new channel that waits for both input channels to produce value and then yields the latest version of both values If one channel produces multiple values before the other produces any then the early values are discarded Afterwards whenever one channel updates the output channel yields that update along with whatever the current version of the other channel is",
        "hierarchy": "Frenetic Common",
        "module": "Frenetic.Common",
        "name": "both",
        "normalized": "Chan a-\u003eChan b-\u003eIO(Chan(a,b))",
        "package": "netcore",
        "partial": "",
        "signature": "Chan a-\u003eChan b-\u003eIO(Chan(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#v:catMaybes",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecatMaybes\u003c/a\u003e\u003c/code\u003e function takes a list of \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003es and returns\n a list of all the \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e values. \n\u003c/p\u003e",
        "fct-module": "Frenetic.Common",
        "fct-package": "netcore",
        "fct-signature": "[Maybe a] -\u003e [a]",
        "fct-type": "function",
        "title": "catMaybes"
      },
      "index": {
        "description": "The catMaybes function takes list of Maybe and returns list of all the Just values",
        "hierarchy": "Frenetic Common",
        "module": "Frenetic.Common",
        "name": "catMaybes",
        "normalized": "[Maybe a]-\u003e[a]",
        "package": "netcore",
        "partial": "Maybes",
        "signature": "[Maybe a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Common.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a new channel that carries updates from both of the input channels,\n but does not wait for both to be ready.  Analogous to Unix SELECT(2) followed\n by READ(2) on the ready file descriptor.\n\u003c/p\u003e",
        "fct-module": "Frenetic.Common",
        "fct-package": "netcore",
        "fct-signature": "Chan a -\u003e Chan b -\u003e IO (Chan (Either a b))",
        "fct-source": "src/Frenetic-Common.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "Produce new channel that carries updates from both of the input channels but does not wait for both to be ready Analogous to Unix SELECT followed by READ on the ready file descriptor",
        "hierarchy": "Frenetic Common",
        "module": "Frenetic.Common",
        "name": "select",
        "normalized": "Chan a-\u003eChan b-\u003eIO(Chan(Either a b))",
        "package": "netcore",
        "partial": "",
        "signature": "Chan a-\u003eChan b-\u003eIO(Chan(Either a b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#",
      "description": {
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "module",
        "fct-source": "src/Frenetic-Compat.html",
        "fct-type": "module",
        "title": "Compat"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "Compat",
        "normalized": "",
        "package": "netcore",
        "partial": "Compat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#t:FreneticImpl",
      "description": {
        "fct-descr": "\u003cp\u003e'FreneticImpl a' is a family of related abstract types that define a\n back-end for Frenetic.\n\u003c/p\u003e",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "class",
        "fct-source": "src/Frenetic-Compat.html#FreneticImpl",
        "fct-type": "class",
        "title": "FreneticImpl"
      },
      "index": {
        "description": "FreneticImpl is family of related abstract types that define back-end for Frenetic",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "FreneticImpl",
        "normalized": "",
        "package": "netcore",
        "partial": "Frenetic Impl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#t:Packet",
      "description": {
        "fct-descr": "\u003cp\u003ePackets' headers.\n\u003c/p\u003e",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "data",
        "title": "Packet"
      },
      "index": {
        "description": "Packets headers",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "Packet",
        "normalized": "",
        "package": "netcore",
        "partial": "Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#t:Transmission",
      "description": {
        "fct-descr": "\u003cp\u003eData that was sent. \n\u003c/p\u003e",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-Compat.html#Transmission",
        "fct-type": "data",
        "title": "Transmission"
      },
      "index": {
        "description": "Data that was sent",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "Transmission",
        "normalized": "",
        "package": "netcore",
        "partial": "Transmission",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:Packet",
      "description": {
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Packet",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "Packet"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "Packet",
        "normalized": "",
        "package": "netcore",
        "partial": "Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:Transmission",
      "description": {
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Transmission",
        "fct-source": "src/Frenetic-Compat.html#Transmission",
        "fct-type": "function",
        "title": "Transmission"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "Transmission",
        "normalized": "",
        "package": "netcore",
        "partial": "Transmission",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:actnController",
      "description": {
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "ActionImpl a",
        "fct-source": "src/Frenetic-Compat.html#actnController",
        "fct-type": "method",
        "title": "actnController"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "actnController",
        "normalized": "",
        "package": "netcore",
        "partial": "Controller",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:actnControllerPart",
      "description": {
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "ActionImpl a -\u003e Switch -\u003e PacketImpl a -\u003e IO ()",
        "fct-source": "src/Frenetic-Compat.html#actnControllerPart",
        "fct-type": "method",
        "title": "actnControllerPart"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "actnControllerPart",
        "normalized": "ActionImpl a-\u003eSwitch-\u003ePacketImpl a-\u003eIO()",
        "package": "netcore",
        "partial": "Controller Part",
        "signature": "ActionImpl a-\u003eSwitch-\u003ePacketImpl a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:actnDefault",
      "description": {
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "ActionImpl a",
        "fct-source": "src/Frenetic-Compat.html#actnDefault",
        "fct-type": "method",
        "title": "actnDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "actnDefault",
        "normalized": "",
        "package": "netcore",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:actnTranslate",
      "description": {
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Action -\u003e ActionImpl a",
        "fct-source": "src/Frenetic-Compat.html#actnTranslate",
        "fct-type": "method",
        "title": "actnTranslate"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "actnTranslate",
        "normalized": "Action-\u003eActionImpl a",
        "package": "netcore",
        "partial": "Translate",
        "signature": "Action-\u003eActionImpl a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:fromPattern",
      "description": {
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Pattern -\u003e PatternImpl a",
        "fct-source": "src/Frenetic-Compat.html#fromPattern",
        "fct-type": "method",
        "title": "fromPattern"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "fromPattern",
        "normalized": "Pattern-\u003ePatternImpl a",
        "package": "netcore",
        "partial": "Pattern",
        "signature": "Pattern-\u003ePatternImpl a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktDlDst",
      "description": {
        "fct-descr": "\u003cp\u003edestination ethernet address\n\u003c/p\u003e",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Word48",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktDlDst"
      },
      "index": {
        "description": "destination ethernet address",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "pktDlDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktDlSrc",
      "description": {
        "fct-descr": "\u003cp\u003esource ethernet address\n\u003c/p\u003e",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Word48",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktDlSrc"
      },
      "index": {
        "description": "source ethernet address",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "pktDlSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktDlTyp",
      "description": {
        "fct-descr": "\u003cp\u003eethernet type code (e.g., 0x800 for IP packets)\n\u003c/p\u003e",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Word16",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktDlTyp"
      },
      "index": {
        "description": "ethernet type code e.g x800 for IP packets",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "pktDlTyp",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Typ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktDlVlan",
      "description": {
        "fct-descr": "\u003cp\u003eVLAN tag\n\u003c/p\u003e",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Maybe Vlan",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktDlVlan"
      },
      "index": {
        "description": "VLAN tag",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "pktDlVlan",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Vlan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktDlVlanPcp",
      "description": {
        "fct-descr": "\u003cp\u003eVLAN priority code\n\u003c/p\u003e",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Word8",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktDlVlanPcp"
      },
      "index": {
        "description": "VLAN priority code",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "pktDlVlanPcp",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Vlan Pcp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktInPort",
      "description": {
        "fct-descr": "\u003cp\u003eingress port on the switch where the packet was\n received\n\u003c/p\u003e",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Port",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktInPort"
      },
      "index": {
        "description": "ingress port on the switch where the packet was received",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "pktInPort",
        "normalized": "",
        "package": "netcore",
        "partial": "In Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktNwDst",
      "description": {
        "fct-descr": "\u003cp\u003edestination IP address for IP packets\n\u003c/p\u003e",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word32",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktNwDst"
      },
      "index": {
        "description": "destination IP address for IP packets",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "pktNwDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktNwProto",
      "description": {
        "fct-descr": "\u003cp\u003eIP protocol number (e.g., 6 for TCP segments)\n\u003c/p\u003e",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Word8",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktNwProto"
      },
      "index": {
        "description": "IP protocol number e.g for TCP segments",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "pktNwProto",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Proto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktNwSrc",
      "description": {
        "fct-descr": "\u003cp\u003esource IP address for IP packets\n\u003c/p\u003e",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word32",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktNwSrc"
      },
      "index": {
        "description": "source IP address for IP packets",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "pktNwSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktNwTos",
      "description": {
        "fct-descr": "\u003cp\u003eIP TOS field\n\u003c/p\u003e",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Word8",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktNwTos"
      },
      "index": {
        "description": "IP TOS field",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "pktNwTos",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Tos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktTpDst",
      "description": {
        "fct-descr": "\u003cp\u003edestination port for IP packets\n\u003c/p\u003e",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word16",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktTpDst"
      },
      "index": {
        "description": "destination port for IP packets",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "pktTpDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Tp Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:pktTpSrc",
      "description": {
        "fct-descr": "\u003cp\u003esource port for IP packets\n\u003c/p\u003e",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word16",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktTpSrc"
      },
      "index": {
        "description": "source port for IP packets",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "pktTpSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Tp Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:ptrnMatchPkt",
      "description": {
        "fct-descr": "\u003cp\u003e'ptrnMatchPkt pkt pat' is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003epat\u003c/code\u003e matches \u003ccode\u003epkt\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "PacketImpl a -\u003e PatternImpl a -\u003e Bool",
        "fct-source": "src/Frenetic-Compat.html#ptrnMatchPkt",
        "fct-type": "method",
        "title": "ptrnMatchPkt"
      },
      "index": {
        "description": "ptrnMatchPkt pkt pat is True if pat matches pkt",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "ptrnMatchPkt",
        "normalized": "PacketImpl a-\u003ePatternImpl a-\u003eBool",
        "package": "netcore",
        "partial": "Match Pkt",
        "signature": "PacketImpl a-\u003ePatternImpl a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:toPacket",
      "description": {
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "PacketImpl a -\u003e Maybe Packet",
        "fct-source": "src/Frenetic-Compat.html#toPacket",
        "fct-type": "method",
        "title": "toPacket"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "toPacket",
        "normalized": "PacketImpl a-\u003eMaybe Packet",
        "package": "netcore",
        "partial": "Packet",
        "signature": "PacketImpl a-\u003eMaybe Packet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:toPattern",
      "description": {
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "PatternImpl a -\u003e Pattern",
        "fct-source": "src/Frenetic-Compat.html#toPattern",
        "fct-type": "method",
        "title": "toPattern"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "toPattern",
        "normalized": "PatternImpl a-\u003ePattern",
        "package": "netcore",
        "partial": "Pattern",
        "signature": "PatternImpl a-\u003ePattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:trPattern",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "ptrn",
        "fct-source": "src/Frenetic-Compat.html#Transmission",
        "fct-type": "function",
        "title": "trPattern"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "trPattern",
        "normalized": "",
        "package": "netcore",
        "partial": "Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:trPkt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "pkt",
        "fct-source": "src/Frenetic-Compat.html#Transmission",
        "fct-type": "function",
        "title": "trPkt"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "trPkt",
        "normalized": "",
        "package": "netcore",
        "partial": "Pkt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:trSwitch",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "Switch",
        "fct-source": "src/Frenetic-Compat.html#Transmission",
        "fct-type": "function",
        "title": "trSwitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "trSwitch",
        "normalized": "",
        "package": "netcore",
        "partial": "Switch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Compat.html#v:updatePacket",
      "description": {
        "fct-module": "Frenetic.Compat",
        "fct-package": "netcore",
        "fct-signature": "PacketImpl a -\u003e Packet -\u003e PacketImpl a",
        "fct-source": "src/Frenetic-Compat.html#updatePacket",
        "fct-type": "method",
        "title": "updatePacket"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Compat",
        "module": "Frenetic.Compat",
        "name": "updatePacket",
        "normalized": "PacketImpl a-\u003ePacket-\u003ePacketImpl a",
        "package": "netcore",
        "partial": "Packet",
        "signature": "PacketImpl a-\u003ePacket-\u003ePacketImpl a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#",
      "description": {
        "fct-module": "Frenetic.EthernetAddress",
        "fct-package": "netcore",
        "fct-signature": "module",
        "fct-source": "src/Frenetic-EthernetAddress.html",
        "fct-type": "module",
        "title": "EthernetAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic EthernetAddress",
        "module": "Frenetic.EthernetAddress",
        "name": "EthernetAddress",
        "normalized": "",
        "package": "netcore",
        "partial": "Ethernet Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#t:EthernetAddress",
      "description": {
        "fct-module": "Frenetic.EthernetAddress",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-EthernetAddress.html#EthernetAddress",
        "fct-type": "data",
        "title": "EthernetAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic EthernetAddress",
        "module": "Frenetic.EthernetAddress",
        "name": "EthernetAddress",
        "normalized": "",
        "package": "netcore",
        "partial": "Ethernet Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#v:EthernetAddress",
      "description": {
        "fct-module": "Frenetic.EthernetAddress",
        "fct-package": "netcore",
        "fct-signature": "EthernetAddress",
        "fct-source": "src/Frenetic-EthernetAddress.html#EthernetAddress",
        "fct-type": "function",
        "title": "EthernetAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic EthernetAddress",
        "module": "Frenetic.EthernetAddress",
        "name": "EthernetAddress",
        "normalized": "",
        "package": "netcore",
        "partial": "Ethernet Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#v:broadcastAddress",
      "description": {
        "fct-module": "Frenetic.EthernetAddress",
        "fct-package": "netcore",
        "fct-signature": "EthernetAddress",
        "fct-source": "src/Frenetic-EthernetAddress.html#broadcastAddress",
        "fct-type": "function",
        "title": "broadcastAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic EthernetAddress",
        "module": "Frenetic.EthernetAddress",
        "name": "broadcastAddress",
        "normalized": "",
        "package": "netcore",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#v:ethernetAddress",
      "description": {
        "fct-module": "Frenetic.EthernetAddress",
        "fct-package": "netcore",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e EthernetAddress",
        "fct-source": "src/Frenetic-EthernetAddress.html#ethernetAddress",
        "fct-type": "function",
        "title": "ethernetAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic EthernetAddress",
        "module": "Frenetic.EthernetAddress",
        "name": "ethernetAddress",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eEthernetAddress",
        "package": "netcore",
        "partial": "Address",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eEthernetAddress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#v:ethernetAddress64",
      "description": {
        "fct-module": "Frenetic.EthernetAddress",
        "fct-package": "netcore",
        "fct-signature": "Word64 -\u003e EthernetAddress",
        "fct-source": "src/Frenetic-EthernetAddress.html#ethernetAddress64",
        "fct-type": "function",
        "title": "ethernetAddress64"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic EthernetAddress",
        "module": "Frenetic.EthernetAddress",
        "name": "ethernetAddress64",
        "normalized": "Word-\u003eEthernetAddress",
        "package": "netcore",
        "partial": "Address",
        "signature": "Word-\u003eEthernetAddress"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#v:unpackEth64",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.EthernetAddress",
        "fct-package": "netcore",
        "fct-signature": "Word64",
        "fct-source": "src/Frenetic-EthernetAddress.html#EthernetAddress",
        "fct-type": "function",
        "title": "unpackEth64"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic EthernetAddress",
        "module": "Frenetic.EthernetAddress",
        "name": "unpackEth64",
        "normalized": "",
        "package": "netcore",
        "partial": "Eth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-EthernetAddress.html#v:unpackEthernetAddress",
      "description": {
        "fct-module": "Frenetic.EthernetAddress",
        "fct-package": "netcore",
        "fct-signature": "EthernetAddress -\u003e (Word8, Word8, Word8, Word8, Word8, Word8)",
        "fct-source": "src/Frenetic-EthernetAddress.html#unpackEthernetAddress",
        "fct-type": "function",
        "title": "unpackEthernetAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic EthernetAddress",
        "module": "Frenetic.EthernetAddress",
        "name": "unpackEthernetAddress",
        "normalized": "EthernetAddress-\u003e(Word,Word,Word,Word,Word,Word)",
        "package": "netcore",
        "partial": "Ethernet Address",
        "signature": "EthernetAddress-\u003e(Word,Word,Word,Word,Word,Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Semantics.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComposes NetCore policies and predicates, and defines how these policies\n interpret abstract packets.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Frenetic.NetCore.Semantics",
        "fct-package": "netcore",
        "fct-signature": "module",
        "fct-source": "src/Frenetic-NetCore-Semantics.html",
        "fct-type": "module",
        "title": "Semantics"
      },
      "index": {
        "description": "Composes NetCore policies and predicates and defines how these policies interpret abstract packets",
        "hierarchy": "Frenetic NetCore Semantics",
        "module": "Frenetic.NetCore.Semantics",
        "name": "Semantics",
        "normalized": "",
        "package": "netcore",
        "partial": "Semantics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Semantics.html#v:interpretPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eImplements the denotation function for policies.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Semantics",
        "fct-package": "netcore",
        "fct-signature": "Policy -\u003e Transmission (PatternImpl a) (PacketImpl a) -\u003e Action",
        "fct-source": "src/Frenetic-NetCore-Semantics.html#interpretPolicy",
        "fct-type": "function",
        "title": "interpretPolicy"
      },
      "index": {
        "description": "Implements the denotation function for policies",
        "hierarchy": "Frenetic NetCore Semantics",
        "module": "Frenetic.NetCore.Semantics",
        "name": "interpretPolicy",
        "normalized": "Policy-\u003eTransmission(PatternImpl a)(PacketImpl a)-\u003eAction",
        "package": "netcore",
        "partial": "Policy",
        "signature": "Policy-\u003eTransmission(PatternImpl a)(PacketImpl a)-\u003eAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Semantics.html#v:interpretPredicate",
      "description": {
        "fct-descr": "\u003cp\u003eImplements the denotation function for predicates.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Semantics",
        "fct-package": "netcore",
        "fct-signature": "Predicate -\u003e Transmission (PatternImpl a) (PacketImpl a) -\u003e Bool",
        "fct-source": "src/Frenetic-NetCore-Semantics.html#interpretPredicate",
        "fct-type": "function",
        "title": "interpretPredicate"
      },
      "index": {
        "description": "Implements the denotation function for predicates",
        "hierarchy": "Frenetic NetCore Semantics",
        "module": "Frenetic.NetCore.Semantics",
        "name": "interpretPredicate",
        "normalized": "Predicate-\u003eTransmission(PatternImpl a)(PacketImpl a)-\u003eBool",
        "package": "netcore",
        "partial": "Predicate",
        "signature": "Predicate-\u003eTransmission(PatternImpl a)(PacketImpl a)-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#",
      "description": {
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "module",
        "fct-source": "src/Frenetic-NetCore-Short.html",
        "fct-type": "module",
        "title": "Short"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "Short",
        "normalized": "",
        "package": "netcore",
        "partial": "Short",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#t:Modification",
      "description": {
        "fct-descr": "\u003cp\u003eFor each fields with a value Just v, modify that field to be v.\n  If the field is Nothing then there is no modification of that field.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "data",
        "title": "Modification"
      },
      "index": {
        "description": "For each fields with value Just modify that field to be If the field is Nothing then there is no modification of that field",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "Modification",
        "normalized": "",
        "package": "netcore",
        "partial": "Modification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:-60--124--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAbbreviation for predicate union.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Predicate -\u003e Predicate -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#%3C%7C%7C%3E",
        "fct-type": "function",
        "title": "(\u003c||\u003e)"
      },
      "index": {
        "description": "Abbreviation for predicate union",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "(\u003c||\u003e) \u003c||\u003e",
        "normalized": "Predicate-\u003ePredicate-\u003ePredicate",
        "package": "netcore",
        "partial": "",
        "signature": "Predicate-\u003ePredicate-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:-60--37--62-",
      "description": {
        "fct-descr": "\u003cp\u003eRestrict a policy to act over packets matching the predicate.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Policy -\u003e Predicate -\u003e Policy",
        "fct-source": "src/Frenetic-NetCore-Short.html#%3C%25%3E",
        "fct-type": "function",
        "title": "(\u003c%\u003e)"
      },
      "index": {
        "description": "Restrict policy to act over packets matching the predicate",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "(\u003c%\u003e) \u003c%\u003e",
        "normalized": "Policy-\u003ePredicate-\u003ePolicy",
        "package": "netcore",
        "partial": "",
        "signature": "Policy-\u003ePredicate-\u003ePolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:-60--38--38--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAbbreviation for predicate intersection.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Predicate -\u003e Predicate -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#%3C%26%26%3E",
        "fct-type": "function",
        "title": "(\u003c&&\u003e)"
      },
      "index": {
        "description": "Abbreviation for predicate intersection",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "(\u003c&&\u003e) \u003c&&\u003e",
        "normalized": "Predicate-\u003ePredicate-\u003ePredicate",
        "package": "netcore",
        "partial": "",
        "signature": "Predicate-\u003ePredicate-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eJoin: overloaded to find the union of policies and the join of actions.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Frenetic-NetCore-Short.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Join overloaded to find the union of policies and the join of actions",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "netcore",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:-61--61--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAbbreviation for constructing a basic policy from a predicate and an action.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Predicate -\u003e Action -\u003e Policy",
        "fct-source": "src/Frenetic-NetCore-Short.html#%3D%3D%3E",
        "fct-type": "function",
        "title": "(==\u003e)"
      },
      "index": {
        "description": "Abbreviation for constructing basic policy from predicate and an action",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "(==\u003e) ==\u003e",
        "normalized": "Predicate-\u003eAction-\u003ePolicy",
        "package": "netcore",
        "partial": "",
        "signature": "Predicate-\u003eAction-\u003ePolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:Modification",
      "description": {
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Modification",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "Modification"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "Modification",
        "normalized": "",
        "package": "netcore",
        "partial": "Modification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:allPorts",
      "description": {
        "fct-descr": "\u003cp\u003eForward the packet out of all physical ports, except the packet's\n ingress port.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Modification-\u003e Action",
        "fct-type": "function",
        "title": "allPorts"
      },
      "index": {
        "description": "Forward the packet out of all physical ports except the packet ingress port",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "allPorts",
        "normalized": "Modification-\u003eAction",
        "package": "netcore",
        "partial": "Ports",
        "signature": "Modification-\u003eAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlDst",
      "description": {
        "fct-descr": "\u003cp\u003eMatch ethernet destination address.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word48 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#dlDst",
        "fct-type": "function",
        "title": "dlDst"
      },
      "index": {
        "description": "Match ethernet destination address",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "dlDst",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Dst",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlNoVlan",
      "description": {
        "fct-descr": "\u003cp\u003eMatch Vlan untagged\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#dlNoVlan",
        "fct-type": "function",
        "title": "dlNoVlan"
      },
      "index": {
        "description": "Match Vlan untagged",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "dlNoVlan",
        "normalized": "",
        "package": "netcore",
        "partial": "No Vlan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlSrc",
      "description": {
        "fct-descr": "\u003cp\u003eMatch ethernet source address.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word48 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#dlSrc",
        "fct-type": "function",
        "title": "dlSrc"
      },
      "index": {
        "description": "Match ethernet source address",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "dlSrc",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Src",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlTyp",
      "description": {
        "fct-descr": "\u003cp\u003eMatch ethernet type code (e.g., 0x0800 for IP packets).\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word16 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#dlTyp",
        "fct-type": "function",
        "title": "dlTyp"
      },
      "index": {
        "description": "Match ethernet type code e.g x0800 for IP packets",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "dlTyp",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Typ",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlVlan",
      "description": {
        "fct-descr": "\u003cp\u003eMatch VLAN tag.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word16 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#dlVlan",
        "fct-type": "function",
        "title": "dlVlan"
      },
      "index": {
        "description": "Match VLAN tag",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "dlVlan",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Vlan",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dlVlanPcp",
      "description": {
        "fct-descr": "\u003cp\u003eMatch VLAN priority\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word8 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#dlVlanPcp",
        "fct-type": "function",
        "title": "dlVlanPcp"
      },
      "index": {
        "description": "Match VLAN priority",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "dlVlanPcp",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Vlan Pcp",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:dropPkt",
      "description": {
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Action",
        "fct-source": "src/Frenetic-NetCore-Short.html#dropPkt",
        "fct-type": "function",
        "title": "dropPkt"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "dropPkt",
        "normalized": "",
        "package": "netcore",
        "partial": "Pkt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:forward",
      "description": {
        "fct-descr": "\u003cp\u003eForward the packet out of the specified physical ports.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "[Port] -\u003e Action",
        "fct-source": "src/Frenetic-NetCore-Short.html#forward",
        "fct-type": "function",
        "title": "forward"
      },
      "index": {
        "description": "Forward the packet out of the specified physical ports",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "forward",
        "normalized": "[Port]-\u003eAction",
        "package": "netcore",
        "partial": "",
        "signature": "[Port]-\u003eAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:inPort",
      "description": {
        "fct-descr": "\u003cp\u003eMatch the ingress port on which packets arrive.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Port -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#inPort",
        "fct-type": "function",
        "title": "inPort"
      },
      "index": {
        "description": "Match the ingress port on which packets arrive",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "inPort",
        "normalized": "Port-\u003ePredicate",
        "package": "netcore",
        "partial": "Port",
        "signature": "Port-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:inport",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the predicate matching packets on this switch and port\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Switch -\u003e Port -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#inport",
        "fct-type": "function",
        "title": "inport"
      },
      "index": {
        "description": "Construct the predicate matching packets on this switch and port",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "inport",
        "normalized": "Switch-\u003ePort-\u003ePredicate",
        "package": "netcore",
        "partial": "",
        "signature": "Switch-\u003ePort-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:matchAll",
      "description": {
        "fct-descr": "\u003cp\u003eMatches all packets.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#matchAll",
        "fct-type": "function",
        "title": "matchAll"
      },
      "index": {
        "description": "Matches all packets",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "matchAll",
        "normalized": "",
        "package": "netcore",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:matchNone",
      "description": {
        "fct-descr": "\u003cp\u003eMatches no packets.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#matchNone",
        "fct-type": "function",
        "title": "matchNone"
      },
      "index": {
        "description": "Matches no packets",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "matchNone",
        "normalized": "",
        "package": "netcore",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modDlDst",
      "description": {
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word48 -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modDlDst",
        "fct-type": "function",
        "title": "modDlDst"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modDlDst",
        "normalized": "Word-\u003eModification",
        "package": "netcore",
        "partial": "Dl Dst",
        "signature": "Word-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modDlSrc",
      "description": {
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word48 -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modDlSrc",
        "fct-type": "function",
        "title": "modDlSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modDlSrc",
        "normalized": "Word-\u003eModification",
        "package": "netcore",
        "partial": "Dl Src",
        "signature": "Word-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modDlVlan",
      "description": {
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Maybe Vlan -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modDlVlan",
        "fct-type": "function",
        "title": "modDlVlan"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modDlVlan",
        "normalized": "Maybe Vlan-\u003eModification",
        "package": "netcore",
        "partial": "Dl Vlan",
        "signature": "Maybe Vlan-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modDlVlanPcp",
      "description": {
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word8 -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modDlVlanPcp",
        "fct-type": "function",
        "title": "modDlVlanPcp"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modDlVlanPcp",
        "normalized": "Word-\u003eModification",
        "package": "netcore",
        "partial": "Dl Vlan Pcp",
        "signature": "Word-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modNwDst",
      "description": {
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word32 -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modNwDst",
        "fct-type": "function",
        "title": "modNwDst"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modNwDst",
        "normalized": "Word-\u003eModification",
        "package": "netcore",
        "partial": "Nw Dst",
        "signature": "Word-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modNwSrc",
      "description": {
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word32 -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modNwSrc",
        "fct-type": "function",
        "title": "modNwSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modNwSrc",
        "normalized": "Word-\u003eModification",
        "package": "netcore",
        "partial": "Nw Src",
        "signature": "Word-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modNwTos",
      "description": {
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word8 -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modNwTos",
        "fct-type": "function",
        "title": "modNwTos"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modNwTos",
        "normalized": "Word-\u003eModification",
        "package": "netcore",
        "partial": "Nw Tos",
        "signature": "Word-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modTpDst",
      "description": {
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word16 -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modTpDst",
        "fct-type": "function",
        "title": "modTpDst"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modTpDst",
        "normalized": "Word-\u003eModification",
        "package": "netcore",
        "partial": "Tp Dst",
        "signature": "Word-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modTpSrc",
      "description": {
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word16 -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modTpSrc",
        "fct-type": "function",
        "title": "modTpSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modTpSrc",
        "normalized": "Word-\u003eModification",
        "package": "netcore",
        "partial": "Tp Src",
        "signature": "Word-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eForward the packet out of the specified physical ports with modifications.\n\u003c/p\u003e\u003cp\u003eEach port has its own record of modifications, so modifications at one port\n do not interfere with modifications at another port.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "[(Port, Modification)] -\u003e Action",
        "fct-source": "src/Frenetic-NetCore-Short.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Forward the packet out of the specified physical ports with modifications Each port has its own record of modifications so modifications at one port do not interfere with modifications at another port",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modify",
        "normalized": "[(Port,Modification)]-\u003eAction",
        "package": "netcore",
        "partial": "",
        "signature": "[(Port,Modification)]-\u003eAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyDlDst",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word48",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyDlDst"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modifyDlDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyDlSrc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word48",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyDlSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modifyDlSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyDlVlan",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Maybe (Maybe Vlan)",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyDlVlan"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modifyDlVlan",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Vlan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyDlVlanPcp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word8",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyDlVlanPcp"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modifyDlVlanPcp",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Vlan Pcp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyNwDst",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word32",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyNwDst"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modifyNwDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyNwSrc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word32",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyNwSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modifyNwSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyNwTos",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word8",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyNwTos"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modifyNwTos",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Tos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyTpDst",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word16",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyTpDst"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modifyTpDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Tp Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:modifyTpSrc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word16",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyTpSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "modifyTpSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Tp Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:neg",
      "description": {
        "fct-descr": "\u003cp\u003eAbbreviation for predicate negation.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Predicate -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#neg",
        "fct-type": "function",
        "title": "neg"
      },
      "index": {
        "description": "Abbreviation for predicate negation",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "neg",
        "normalized": "Predicate-\u003ePredicate",
        "package": "netcore",
        "partial": "",
        "signature": "Predicate-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwDst",
      "description": {
        "fct-descr": "\u003cp\u003eMatch destination IP address.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word32 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#nwDst",
        "fct-type": "function",
        "title": "nwDst"
      },
      "index": {
        "description": "Match destination IP address",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "nwDst",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Dst",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwDstPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eMatch a prefix of the destination IP address.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word32 -\u003e Int -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#nwDstPrefix",
        "fct-type": "function",
        "title": "nwDstPrefix"
      },
      "index": {
        "description": "Match prefix of the destination IP address",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "nwDstPrefix",
        "normalized": "Word-\u003eInt-\u003ePredicate",
        "package": "netcore",
        "partial": "Dst Prefix",
        "signature": "Word-\u003eInt-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwProto",
      "description": {
        "fct-descr": "\u003cp\u003eMatch IP protocol code (e.g., 0x6 indicates TCP segments).\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word8 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#nwProto",
        "fct-type": "function",
        "title": "nwProto"
      },
      "index": {
        "description": "Match IP protocol code e.g x6 indicates TCP segments",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "nwProto",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Proto",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwSrc",
      "description": {
        "fct-descr": "\u003cp\u003eMatch source IP address.\n\u003c/p\u003e\u003cp\u003eThis is only meaningful in combination with 'dlTyp 0x0800'.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word32 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#nwSrc",
        "fct-type": "function",
        "title": "nwSrc"
      },
      "index": {
        "description": "Match source IP address This is only meaningful in combination with dlTyp x0800",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "nwSrc",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Src",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwSrcPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eMatch a prefix of the source IP address.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word32 -\u003e Int -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#nwSrcPrefix",
        "fct-type": "function",
        "title": "nwSrcPrefix"
      },
      "index": {
        "description": "Match prefix of the source IP address",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "nwSrcPrefix",
        "normalized": "Word-\u003eInt-\u003ePredicate",
        "package": "netcore",
        "partial": "Src Prefix",
        "signature": "Word-\u003eInt-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:nwTos",
      "description": {
        "fct-descr": "\u003cp\u003eMatch IP TOS field.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word8 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#nwTos",
        "fct-type": "function",
        "title": "nwTos"
      },
      "index": {
        "description": "Match IP TOS field",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "nwTos",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Tos",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:onSwitch",
      "description": {
        "fct-descr": "\u003cp\u003eMatch switch identifier.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Switch -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#onSwitch",
        "fct-type": "function",
        "title": "onSwitch"
      },
      "index": {
        "description": "Match switch identifier",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "onSwitch",
        "normalized": "Switch-\u003ePredicate",
        "package": "netcore",
        "partial": "Switch",
        "signature": "Switch-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:prAnd",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct nary intersection of a list of predicates\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "[Predicate] -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#prAnd",
        "fct-type": "function",
        "title": "prAnd"
      },
      "index": {
        "description": "Construct nary intersection of list of predicates",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "prAnd",
        "normalized": "[Predicate]-\u003ePredicate",
        "package": "netcore",
        "partial": "And",
        "signature": "[Predicate]-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:prOr",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct nary union of a list of predicates\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "[Predicate] -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#prOr",
        "fct-type": "function",
        "title": "prOr"
      },
      "index": {
        "description": "Construct nary union of list of predicates",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "prOr",
        "normalized": "[Predicate]-\u003ePredicate",
        "package": "netcore",
        "partial": "Or",
        "signature": "[Predicate]-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:prSubtract",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the set difference between p1 and p2\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Predicate -\u003e Predicate -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#prSubtract",
        "fct-type": "function",
        "title": "prSubtract"
      },
      "index": {
        "description": "Construct the set difference between p1 and p2",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "prSubtract",
        "normalized": "Predicate-\u003ePredicate-\u003ePredicate",
        "package": "netcore",
        "partial": "Subtract",
        "signature": "Predicate-\u003ePredicate-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:tpDst",
      "description": {
        "fct-descr": "\u003cp\u003eMatch IP destination port.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word16 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#tpDst",
        "fct-type": "function",
        "title": "tpDst"
      },
      "index": {
        "description": "Match IP destination port",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "tpDst",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Dst",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:tpSrc",
      "description": {
        "fct-descr": "\u003cp\u003eMatch IP source port.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Word16 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#tpSrc",
        "fct-type": "function",
        "title": "tpSrc"
      },
      "index": {
        "description": "Match IP source port",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "tpSrc",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Src",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Short.html#v:unmodified",
      "description": {
        "fct-module": "Frenetic.NetCore.Short",
        "fct-package": "netcore",
        "fct-signature": "Modification",
        "fct-source": "src/Frenetic-NetCore-Types.html#unmodified",
        "fct-type": "function",
        "title": "unmodified"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Short",
        "module": "Frenetic.NetCore.Short",
        "name": "unmodified",
        "normalized": "",
        "package": "netcore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "module",
        "fct-source": "src/Frenetic-NetCore-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Types",
        "normalized": "",
        "package": "netcore",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Action",
      "description": {
        "fct-descr": "\u003cp\u003eActions to perform on packets.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Action",
        "fct-type": "data",
        "title": "Action"
      },
      "index": {
        "description": "Actions to perform on packets",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Action",
        "normalized": "",
        "package": "netcore",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Counter",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Counter",
        "fct-type": "data",
        "title": "Counter"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Counter",
        "normalized": "",
        "package": "netcore",
        "partial": "Counter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Loc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLoc\u003c/a\u003e\u003c/code\u003e uniquely identifies a port at a switch.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Loc",
        "fct-type": "data",
        "title": "Loc"
      },
      "index": {
        "description": "Loc uniquely identifies port at switch",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Loc",
        "normalized": "",
        "package": "netcore",
        "partial": "Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Modification",
      "description": {
        "fct-descr": "\u003cp\u003eFor each fields with a value Just v, modify that field to be v.\n  If the field is Nothing then there is no modification of that field.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "data",
        "title": "Modification"
      },
      "index": {
        "description": "For each fields with value Just modify that field to be If the field is Nothing then there is no modification of that field",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Modification",
        "normalized": "",
        "package": "netcore",
        "partial": "Modification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Packet",
      "description": {
        "fct-descr": "\u003cp\u003ePackets' headers.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "data",
        "title": "Packet"
      },
      "index": {
        "description": "Packets headers",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Packet",
        "normalized": "",
        "package": "netcore",
        "partial": "Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Pattern",
      "description": {
        "fct-descr": "\u003cp\u003ePatterns to match packets. Patterns translate directly to a single OpenFlow\n match rule.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Pattern",
        "fct-type": "data",
        "title": "Pattern"
      },
      "index": {
        "description": "Patterns to match packets Patterns translate directly to single OpenFlow match rule",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Pattern",
        "normalized": "",
        "package": "netcore",
        "partial": "Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Policy",
      "description": {
        "fct-descr": "\u003cp\u003ePolicies denote functions from (switch, packet) to packets. \n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Policy",
        "fct-type": "data",
        "title": "Policy"
      },
      "index": {
        "description": "Policies denote functions from switch packet to packets",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Policy",
        "normalized": "",
        "package": "netcore",
        "partial": "Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Port",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of a physical port.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "type",
        "fct-source": "src/Frenetic-NetCore-Types.html#Port",
        "fct-type": "type",
        "title": "Port"
      },
      "index": {
        "description": "The number of physical port",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Port",
        "normalized": "",
        "package": "netcore",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Predicate",
      "description": {
        "fct-descr": "\u003cp\u003ePredicates to match packets.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Predicate",
        "fct-type": "data",
        "title": "Predicate"
      },
      "index": {
        "description": "Predicates to match packets",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Predicate",
        "normalized": "",
        "package": "netcore",
        "partial": "Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:PseudoPort",
      "description": {
        "fct-descr": "\u003cp\u003eLogical ports.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#PseudoPort",
        "fct-type": "data",
        "title": "PseudoPort"
      },
      "index": {
        "description": "Logical ports",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "PseudoPort",
        "normalized": "",
        "package": "netcore",
        "partial": "Pseudo Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Query",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Query",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Query",
        "normalized": "",
        "package": "netcore",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Switch",
      "description": {
        "fct-descr": "\u003cp\u003eA switch's unique identifier.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "type",
        "fct-source": "src/Frenetic-NetCore-Types.html#Switch",
        "fct-type": "type",
        "title": "Switch"
      },
      "index": {
        "description": "switch unique identifier",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Switch",
        "normalized": "",
        "package": "netcore",
        "partial": "Switch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Vlan",
      "description": {
        "fct-descr": "\u003cp\u003eVLAN tags. Only the lower 12-bits are used.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "type",
        "fct-source": "src/Frenetic-NetCore-Types.html#Vlan",
        "fct-type": "type",
        "title": "Vlan"
      },
      "index": {
        "description": "VLAN tags Only the lower bits are used",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Vlan",
        "normalized": "",
        "package": "netcore",
        "partial": "Vlan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#t:Word48",
      "description": {
        "fct-descr": "\u003cp\u003eEthernet addresses are 48-bits wide.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "type",
        "fct-source": "src/Frenetic-NetCore-Types.html#Word48",
        "fct-type": "type",
        "title": "Word48"
      },
      "index": {
        "description": "Ethernet addresses are bits wide",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Word48",
        "normalized": "",
        "package": "netcore",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:Action",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Action",
        "fct-source": "src/Frenetic-NetCore-Types.html#Action",
        "fct-type": "function",
        "title": "Action"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Action",
        "normalized": "",
        "package": "netcore",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:AllPorts",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "AllPorts",
        "fct-source": "src/Frenetic-NetCore-Types.html#PseudoPort",
        "fct-type": "function",
        "title": "AllPorts"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "AllPorts",
        "normalized": "",
        "package": "netcore",
        "partial": "All Ports",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:CountBytes",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "CountBytes",
        "fct-source": "src/Frenetic-NetCore-Types.html#Counter",
        "fct-type": "function",
        "title": "CountBytes"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "CountBytes",
        "normalized": "",
        "package": "netcore",
        "partial": "Count Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:CountPackets",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "CountPackets",
        "fct-source": "src/Frenetic-NetCore-Types.html#Counter",
        "fct-type": "function",
        "title": "CountPackets"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "CountPackets",
        "normalized": "",
        "package": "netcore",
        "partial": "Count Packets",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:Loc",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Loc Switch Port",
        "fct-source": "src/Frenetic-NetCore-Types.html#Loc",
        "fct-type": "function",
        "title": "Loc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Loc",
        "normalized": "",
        "package": "netcore",
        "partial": "Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:Modification",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Modification",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "Modification"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Modification",
        "normalized": "",
        "package": "netcore",
        "partial": "Modification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:NumPktQuery",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "NumPktQuery",
        "fct-source": "src/Frenetic-NetCore-Types.html#Query",
        "fct-type": "function",
        "title": "NumPktQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "NumPktQuery",
        "normalized": "",
        "package": "netcore",
        "partial": "Num Pkt Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:Packet",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Packet",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "Packet"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Packet",
        "normalized": "",
        "package": "netcore",
        "partial": "Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:Pattern",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Pattern",
        "fct-source": "src/Frenetic-NetCore-Types.html#Pattern",
        "fct-type": "function",
        "title": "Pattern"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Pattern",
        "normalized": "",
        "package": "netcore",
        "partial": "Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:Physical",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Physical Port",
        "fct-source": "src/Frenetic-NetCore-Types.html#PseudoPort",
        "fct-type": "function",
        "title": "Physical"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "Physical",
        "normalized": "",
        "package": "netcore",
        "partial": "Physical",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PktQuery",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "PktQuery",
        "fct-source": "src/Frenetic-NetCore-Types.html#Query",
        "fct-type": "function",
        "title": "PktQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "PktQuery",
        "normalized": "",
        "package": "netcore",
        "partial": "Pkt Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PoBasic",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms the given action on packets matching the given predicate.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "PoBasic Predicate Action",
        "fct-source": "src/Frenetic-NetCore-Types.html#Policy",
        "fct-type": "function",
        "title": "PoBasic"
      },
      "index": {
        "description": "Performs the given action on packets matching the given predicate",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "PoBasic",
        "normalized": "",
        "package": "netcore",
        "partial": "Po Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PoBottom",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms no actions.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "PoBottom",
        "fct-source": "src/Frenetic-NetCore-Types.html#Policy",
        "fct-type": "function",
        "title": "PoBottom"
      },
      "index": {
        "description": "Performs no actions",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "PoBottom",
        "normalized": "",
        "package": "netcore",
        "partial": "Po Bottom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PoUnion",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms the actions of both P1 and P2.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "PoUnion Policy Policy",
        "fct-source": "src/Frenetic-NetCore-Types.html#Policy",
        "fct-type": "function",
        "title": "PoUnion"
      },
      "index": {
        "description": "Performs the actions of both P1 and P2",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "PoUnion",
        "normalized": "",
        "package": "netcore",
        "partial": "Po Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PrIntersect",
      "description": {
        "fct-descr": "\u003cp\u003eMatch both predicates.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "PrIntersect Predicate Predicate",
        "fct-source": "src/Frenetic-NetCore-Types.html#Predicate",
        "fct-type": "function",
        "title": "PrIntersect"
      },
      "index": {
        "description": "Match both predicates",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "PrIntersect",
        "normalized": "",
        "package": "netcore",
        "partial": "Pr Intersect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PrNegate",
      "description": {
        "fct-descr": "\u003cp\u003ePrNegate P matches packets that do not match P.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "PrNegate Predicate",
        "fct-source": "src/Frenetic-NetCore-Types.html#Predicate",
        "fct-type": "function",
        "title": "PrNegate"
      },
      "index": {
        "description": "PrNegate matches packets that do not match",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "PrNegate",
        "normalized": "",
        "package": "netcore",
        "partial": "Pr Negate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PrPattern",
      "description": {
        "fct-descr": "\u003cp\u003eMatch with a simple pattern.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "PrPattern Pattern",
        "fct-source": "src/Frenetic-NetCore-Types.html#Predicate",
        "fct-type": "function",
        "title": "PrPattern"
      },
      "index": {
        "description": "Match with simple pattern",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "PrPattern",
        "normalized": "",
        "package": "netcore",
        "partial": "Pr Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PrTo",
      "description": {
        "fct-descr": "\u003cp\u003eMatch only at this switch.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "PrTo Switch",
        "fct-source": "src/Frenetic-NetCore-Types.html#Predicate",
        "fct-type": "function",
        "title": "PrTo"
      },
      "index": {
        "description": "Match only at this switch",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "PrTo",
        "normalized": "",
        "package": "netcore",
        "partial": "Pr To",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:PrUnion",
      "description": {
        "fct-descr": "\u003cp\u003eMatch either predicates.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "PrUnion Predicate Predicate",
        "fct-source": "src/Frenetic-NetCore-Types.html#Predicate",
        "fct-type": "function",
        "title": "PrUnion"
      },
      "index": {
        "description": "Match either predicates",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "PrUnion",
        "normalized": "",
        "package": "netcore",
        "partial": "Pr Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:actionForwards",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "MultiSet (PseudoPort, Modification)",
        "fct-source": "src/Frenetic-NetCore-Types.html#Action",
        "fct-type": "function",
        "title": "actionForwards"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "actionForwards",
        "normalized": "MultiSet(PseudoPort,Modification)",
        "package": "netcore",
        "partial": "Forwards",
        "signature": "MultiSet(PseudoPort,Modification)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:actionForwardsTo",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Action -\u003e MultiSet PseudoPort",
        "fct-source": "src/Frenetic-NetCore-Types.html#actionForwardsTo",
        "fct-type": "function",
        "title": "actionForwardsTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "actionForwardsTo",
        "normalized": "Action-\u003eMultiSet PseudoPort",
        "package": "netcore",
        "partial": "Forwards To",
        "signature": "Action-\u003eMultiSet PseudoPort"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:actionQueries",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "MultiSet Query",
        "fct-source": "src/Frenetic-NetCore-Types.html#Action",
        "fct-type": "function",
        "title": "actionQueries"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "actionQueries",
        "normalized": "",
        "package": "netcore",
        "partial": "Queries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:countBytes",
      "description": {
        "fct-descr": "\u003cp\u003eSends packets to the controller.\n\u003c/p\u003e\u003cp\u003eReturns an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e and a channel. When the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e is used in the active\n \u003ccode\u003e\u003ca\u003ePolicy\u003c/a\u003e\u003c/code\u003e, all matching packets are sent to the controller. These packets\n are written into the channel.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Int-\u003e IO (Chan (Switch, Integer), Action)",
        "fct-type": "function",
        "title": "countBytes"
      },
      "index": {
        "description": "Sends packets to the controller Returns an Action and channel When the Action is used in the active Policy all matching packets are sent to the controller These packets are written into the channel",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "countBytes",
        "normalized": "Int-\u003eIO(Chan(Switch,Integer),Action)",
        "package": "netcore",
        "partial": "Bytes",
        "signature": "Int-\u003eIO(Chan(Switch,Integer),Action)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:countField",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Counter",
        "fct-source": "src/Frenetic-NetCore-Types.html#Query",
        "fct-type": "function",
        "title": "countField"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "countField",
        "normalized": "",
        "package": "netcore",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:countPkts",
      "description": {
        "fct-descr": "\u003cp\u003ePeriodically polls the network to counts the number of bytes received.\n\u003c/p\u003e\u003cp\u003eReturns an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e and a channel. When the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e is used in the\n active \u003ccode\u003e\u003ca\u003ePolicy\u003c/a\u003e\u003c/code\u003e, the controller periodically reads the packet counters\n on the network. The controller returns the number of matching packets\n on each switch.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Int-\u003e IO (Chan (Switch, Integer), Action)",
        "fct-type": "function",
        "title": "countPkts"
      },
      "index": {
        "description": "Periodically polls the network to counts the number of bytes received Returns an Action and channel When the Action is used in the active Policy the controller periodically reads the packet counters on the network The controller returns the number of matching packets on each switch",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "countPkts",
        "normalized": "Int-\u003eIO(Chan(Switch,Integer),Action)",
        "package": "netcore",
        "partial": "Pkts",
        "signature": "Int-\u003eIO(Chan(Switch,Integer),Action)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:exactMatch",
      "description": {
        "fct-descr": "\u003cp\u003eA predicate that exactly matches a packet's headers.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Packet -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Types.html#exactMatch",
        "fct-type": "function",
        "title": "exactMatch"
      },
      "index": {
        "description": "predicate that exactly matches packet headers",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "exactMatch",
        "normalized": "Packet-\u003ePredicate",
        "package": "netcore",
        "partial": "Match",
        "signature": "Packet-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:getPkts",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "IO (Chan (Switch, Packet), Action)",
        "fct-source": "src/Frenetic-NetCore-Types.html#getPkts",
        "fct-type": "function",
        "title": "getPkts"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "getPkts",
        "normalized": "IO(Chan(Switch,Packet),Action)",
        "package": "netcore",
        "partial": "Pkts",
        "signature": "IO(Chan(Switch,Packet),Action)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:idOfQuery",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "QueryID",
        "fct-source": "src/Frenetic-NetCore-Types.html#Query",
        "fct-type": "function",
        "title": "idOfQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "idOfQuery",
        "normalized": "",
        "package": "netcore",
        "partial": "Of Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:interesting",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a list of the non-wildcarded patterns with sep between field and value\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "String -\u003e Pattern -\u003e [String]",
        "fct-source": "src/Frenetic-NetCore-Types.html#interesting",
        "fct-type": "function",
        "title": "interesting"
      },
      "index": {
        "description": "Build list of the non-wildcarded patterns with sep between field and value",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "interesting",
        "normalized": "String-\u003ePattern-\u003e[String]",
        "package": "netcore",
        "partial": "",
        "signature": "String-\u003ePattern-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:isPktQuery",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Query -\u003e Bool",
        "fct-source": "src/Frenetic-NetCore-Types.html#isPktQuery",
        "fct-type": "function",
        "title": "isPktQuery"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "isPktQuery",
        "normalized": "Query-\u003eBool",
        "package": "netcore",
        "partial": "Pkt Query",
        "signature": "Query-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:lastVal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "IORef Integer",
        "fct-source": "src/Frenetic-NetCore-Types.html#Query",
        "fct-type": "function",
        "title": "lastVal"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "lastVal",
        "normalized": "",
        "package": "netcore",
        "partial": "Val",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifiedFields",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Modification -\u003e Set Field",
        "fct-source": "src/Frenetic-NetCore-Types.html#modifiedFields",
        "fct-type": "function",
        "title": "modifiedFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "modifiedFields",
        "normalized": "Modification-\u003eSet Field",
        "package": "netcore",
        "partial": "Fields",
        "signature": "Modification-\u003eSet Field"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyDlDst",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word48",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyDlDst"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "modifyDlDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyDlSrc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word48",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyDlSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "modifyDlSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyDlVlan",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Maybe (Maybe Vlan)",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyDlVlan"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "modifyDlVlan",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Vlan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyDlVlanPcp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word8",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyDlVlanPcp"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "modifyDlVlanPcp",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Vlan Pcp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyNwDst",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word32",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyNwDst"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "modifyNwDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyNwSrc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word32",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyNwSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "modifyNwSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyNwTos",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word8",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyNwTos"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "modifyNwTos",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Tos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyTpDst",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word16",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyTpDst"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "modifyTpDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Tp Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:modifyTpSrc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word16",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "function",
        "title": "modifyTpSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "modifyTpSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Tp Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:numPktQueryChan",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Chan (Switch, Integer)",
        "fct-source": "src/Frenetic-NetCore-Types.html#Query",
        "fct-type": "function",
        "title": "numPktQueryChan"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "numPktQueryChan",
        "normalized": "Chan(Switch,Integer)",
        "package": "netcore",
        "partial": "Pkt Query Chan",
        "signature": "Chan(Switch,Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktDlDst",
      "description": {
        "fct-descr": "\u003cp\u003edestination ethernet address\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Word48",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktDlDst"
      },
      "index": {
        "description": "destination ethernet address",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "pktDlDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktDlSrc",
      "description": {
        "fct-descr": "\u003cp\u003esource ethernet address\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Word48",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktDlSrc"
      },
      "index": {
        "description": "source ethernet address",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "pktDlSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktDlTyp",
      "description": {
        "fct-descr": "\u003cp\u003eethernet type code (e.g., 0x800 for IP packets)\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Word16",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktDlTyp"
      },
      "index": {
        "description": "ethernet type code e.g x800 for IP packets",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "pktDlTyp",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Typ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktDlVlan",
      "description": {
        "fct-descr": "\u003cp\u003eVLAN tag\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Maybe Vlan",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktDlVlan"
      },
      "index": {
        "description": "VLAN tag",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "pktDlVlan",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Vlan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktDlVlanPcp",
      "description": {
        "fct-descr": "\u003cp\u003eVLAN priority code\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Word8",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktDlVlanPcp"
      },
      "index": {
        "description": "VLAN priority code",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "pktDlVlanPcp",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Vlan Pcp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktInPort",
      "description": {
        "fct-descr": "\u003cp\u003eingress port on the switch where the packet was\n received\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Port",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktInPort"
      },
      "index": {
        "description": "ingress port on the switch where the packet was received",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "pktInPort",
        "normalized": "",
        "package": "netcore",
        "partial": "In Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktNwDst",
      "description": {
        "fct-descr": "\u003cp\u003edestination IP address for IP packets\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word32",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktNwDst"
      },
      "index": {
        "description": "destination IP address for IP packets",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "pktNwDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktNwProto",
      "description": {
        "fct-descr": "\u003cp\u003eIP protocol number (e.g., 6 for TCP segments)\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Word8",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktNwProto"
      },
      "index": {
        "description": "IP protocol number e.g for TCP segments",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "pktNwProto",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Proto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktNwSrc",
      "description": {
        "fct-descr": "\u003cp\u003esource IP address for IP packets\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word32",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktNwSrc"
      },
      "index": {
        "description": "source IP address for IP packets",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "pktNwSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktNwTos",
      "description": {
        "fct-descr": "\u003cp\u003eIP TOS field\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Word8",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktNwTos"
      },
      "index": {
        "description": "IP TOS field",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "pktNwTos",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Tos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktQueryChan",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Chan (Switch, Packet)",
        "fct-source": "src/Frenetic-NetCore-Types.html#Query",
        "fct-type": "function",
        "title": "pktQueryChan"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "pktQueryChan",
        "normalized": "Chan(Switch,Packet)",
        "package": "netcore",
        "partial": "Query Chan",
        "signature": "Chan(Switch,Packet)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktTpDst",
      "description": {
        "fct-descr": "\u003cp\u003edestination port for IP packets\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word16",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktTpDst"
      },
      "index": {
        "description": "destination port for IP packets",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "pktTpDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Tp Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:pktTpSrc",
      "description": {
        "fct-descr": "\u003cp\u003esource port for IP packets\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word16",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktTpSrc"
      },
      "index": {
        "description": "source port for IP packets",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "pktTpSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Tp Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:poDom",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a predicate that matches the domain of the policy.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Policy -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Types.html#poDom",
        "fct-type": "function",
        "title": "poDom"
      },
      "index": {
        "description": "Returns predicate that matches the domain of the policy",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "poDom",
        "normalized": "Policy-\u003ePredicate",
        "package": "netcore",
        "partial": "Dom",
        "signature": "Policy-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:poUnUnion",
      "description": {
        "fct-descr": "\u003cp\u003eGet back all basic policies in the union.  Does not return any unions.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Policy -\u003e [Policy]",
        "fct-source": "src/Frenetic-NetCore-Types.html#poUnUnion",
        "fct-type": "function",
        "title": "poUnUnion"
      },
      "index": {
        "description": "Get back all basic policies in the union Does not return any unions",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "poUnUnion",
        "normalized": "Policy-\u003e[Policy]",
        "package": "netcore",
        "partial": "Un Union",
        "signature": "Policy-\u003e[Policy]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:prUnIntersect",
      "description": {
        "fct-descr": "\u003cp\u003eGet back all predicates in the intersection.  Does not return any naked\n intersections.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Predicate -\u003e [Predicate]",
        "fct-source": "src/Frenetic-NetCore-Types.html#prUnIntersect",
        "fct-type": "function",
        "title": "prUnIntersect"
      },
      "index": {
        "description": "Get back all predicates in the intersection Does not return any naked intersections",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "prUnIntersect",
        "normalized": "Predicate-\u003e[Predicate]",
        "package": "netcore",
        "partial": "Un Intersect",
        "signature": "Predicate-\u003e[Predicate]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:prUnUnion",
      "description": {
        "fct-descr": "\u003cp\u003eGet back all predicates in the union.  Does not return any naked unions.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Predicate -\u003e [Predicate]",
        "fct-source": "src/Frenetic-NetCore-Types.html#prUnUnion",
        "fct-type": "function",
        "title": "prUnUnion"
      },
      "index": {
        "description": "Get back all predicates in the union Does not return any naked unions",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "prUnUnion",
        "normalized": "Predicate-\u003e[Predicate]",
        "package": "netcore",
        "partial": "Un Union",
        "signature": "Predicate-\u003e[Predicate]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnDlDst",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Wildcard Word48",
        "fct-source": "src/Frenetic-NetCore-Types.html#Pattern",
        "fct-type": "function",
        "title": "ptrnDlDst"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "ptrnDlDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnDlSrc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Wildcard Word48",
        "fct-source": "src/Frenetic-NetCore-Types.html#Pattern",
        "fct-type": "function",
        "title": "ptrnDlSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "ptrnDlSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnDlTyp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Wildcard Word16",
        "fct-source": "src/Frenetic-NetCore-Types.html#Pattern",
        "fct-type": "function",
        "title": "ptrnDlTyp"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "ptrnDlTyp",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Typ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnDlVlan",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Wildcard (Maybe Vlan)",
        "fct-source": "src/Frenetic-NetCore-Types.html#Pattern",
        "fct-type": "function",
        "title": "ptrnDlVlan"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "ptrnDlVlan",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Vlan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnDlVlanPcp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Wildcard Word8",
        "fct-source": "src/Frenetic-NetCore-Types.html#Pattern",
        "fct-type": "function",
        "title": "ptrnDlVlanPcp"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "ptrnDlVlanPcp",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Vlan Pcp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnInPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Wildcard Port",
        "fct-source": "src/Frenetic-NetCore-Types.html#Pattern",
        "fct-type": "function",
        "title": "ptrnInPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "ptrnInPort",
        "normalized": "",
        "package": "netcore",
        "partial": "In Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnNwDst",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Prefix Word32",
        "fct-source": "src/Frenetic-NetCore-Types.html#Pattern",
        "fct-type": "function",
        "title": "ptrnNwDst"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "ptrnNwDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnNwProto",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Wildcard Word8",
        "fct-source": "src/Frenetic-NetCore-Types.html#Pattern",
        "fct-type": "function",
        "title": "ptrnNwProto"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "ptrnNwProto",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Proto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnNwSrc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Prefix Word32",
        "fct-source": "src/Frenetic-NetCore-Types.html#Pattern",
        "fct-type": "function",
        "title": "ptrnNwSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "ptrnNwSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnNwTos",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Wildcard Word8",
        "fct-source": "src/Frenetic-NetCore-Types.html#Pattern",
        "fct-type": "function",
        "title": "ptrnNwTos"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "ptrnNwTos",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Tos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnTpDst",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Wildcard Word16",
        "fct-source": "src/Frenetic-NetCore-Types.html#Pattern",
        "fct-type": "function",
        "title": "ptrnTpDst"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "ptrnTpDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Tp Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:ptrnTpSrc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Wildcard Word16",
        "fct-source": "src/Frenetic-NetCore-Types.html#Pattern",
        "fct-type": "function",
        "title": "ptrnTpSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "ptrnTpSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Tp Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:queryInterval",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Int",
        "fct-source": "src/Frenetic-NetCore-Types.html#Query",
        "fct-type": "function",
        "title": "queryInterval"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "queryInterval",
        "normalized": "",
        "package": "netcore",
        "partial": "Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the approximate size of the policy\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Policy -\u003e Int",
        "fct-source": "src/Frenetic-NetCore-Types.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Returns the approximate size of the policy",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "size",
        "normalized": "Policy-\u003eInt",
        "package": "netcore",
        "partial": "",
        "signature": "Policy-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:totalVal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "IORef Integer",
        "fct-source": "src/Frenetic-NetCore-Types.html#Query",
        "fct-type": "function",
        "title": "totalVal"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "totalVal",
        "normalized": "",
        "package": "netcore",
        "partial": "Val",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore-Types.html#v:unmodified",
      "description": {
        "fct-module": "Frenetic.NetCore.Types",
        "fct-package": "netcore",
        "fct-signature": "Modification",
        "fct-source": "src/Frenetic-NetCore-Types.html#unmodified",
        "fct-type": "function",
        "title": "unmodified"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore Types",
        "module": "Frenetic.NetCore.Types",
        "name": "unmodified",
        "normalized": "",
        "package": "netcore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEverything necessary to build a controller atop NetCore, using Nettle as\n a backend.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "module",
        "fct-source": "src/Frenetic-NetCore.html",
        "fct-type": "module",
        "title": "NetCore"
      },
      "index": {
        "description": "Everything necessary to build controller atop NetCore using Nettle as backend",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "NetCore",
        "normalized": "",
        "package": "netcore",
        "partial": "Net Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Action",
      "description": {
        "fct-descr": "\u003cp\u003eActions to perform on packets.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Action",
        "fct-type": "data",
        "title": "Action"
      },
      "index": {
        "description": "Actions to perform on packets",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "Action",
        "normalized": "",
        "package": "netcore",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:EthernetAddress",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-EthernetAddress.html#EthernetAddress",
        "fct-type": "data",
        "title": "EthernetAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "EthernetAddress",
        "normalized": "",
        "package": "netcore",
        "partial": "Ethernet Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Loc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLoc\u003c/a\u003e\u003c/code\u003e uniquely identifies a port at a switch.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Loc",
        "fct-type": "data",
        "title": "Loc"
      },
      "index": {
        "description": "Loc uniquely identifies port at switch",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "Loc",
        "normalized": "",
        "package": "netcore",
        "partial": "Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Modification",
      "description": {
        "fct-descr": "\u003cp\u003eFor each fields with a value Just v, modify that field to be v.\n  If the field is Nothing then there is no modification of that field.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Modification",
        "fct-type": "data",
        "title": "Modification"
      },
      "index": {
        "description": "For each fields with value Just modify that field to be If the field is Nothing then there is no modification of that field",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "Modification",
        "normalized": "",
        "package": "netcore",
        "partial": "Modification",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Packet",
      "description": {
        "fct-descr": "\u003cp\u003ePackets' headers.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "data",
        "title": "Packet"
      },
      "index": {
        "description": "Packets headers",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "Packet",
        "normalized": "",
        "package": "netcore",
        "partial": "Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Policy",
      "description": {
        "fct-descr": "\u003cp\u003ePolicies denote functions from (switch, packet) to packets. \n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Policy",
        "fct-type": "data",
        "title": "Policy"
      },
      "index": {
        "description": "Policies denote functions from switch packet to packets",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "Policy",
        "normalized": "",
        "package": "netcore",
        "partial": "Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Port",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of a physical port.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "type",
        "fct-source": "src/Frenetic-NetCore-Types.html#Port",
        "fct-type": "type",
        "title": "Port"
      },
      "index": {
        "description": "The number of physical port",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "Port",
        "normalized": "",
        "package": "netcore",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Predicate",
      "description": {
        "fct-descr": "\u003cp\u003ePredicates to match packets.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-NetCore-Types.html#Predicate",
        "fct-type": "data",
        "title": "Predicate"
      },
      "index": {
        "description": "Predicates to match packets",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "Predicate",
        "normalized": "",
        "package": "netcore",
        "partial": "Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Slice",
      "description": {
        "fct-descr": "\u003cp\u003eA slice represents a subgraph of the network for the purposes of isolating\n programs from each other.\n\u003c/p\u003e\u003cp\u003eThe interface to a slice has two components: a topology comprising switches,\n ports, and links; and a collection of predicates, one for each outward-facing\n edge port.\n\u003c/p\u003e\u003cp\u003eWe represent the topology as a collection of locations in the network, and\n the predicates as a mapping from locations to predicates.\n\u003c/p\u003e\u003cp\u003eIntuitively, packets may travel freely between internal locations, but must\n satisfy the associated predicate to enter the slice at an ingress location,\n or leave the slice at an egress location.  If an external port is not listed\n in the ingress or egress set, then no packets may enter or leave\n (respectively) on that port.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-Slices-Slice.html#Slice",
        "fct-type": "data",
        "title": "Slice"
      },
      "index": {
        "description": "slice represents subgraph of the network for the purposes of isolating programs from each other The interface to slice has two components topology comprising switches ports and links and collection of predicates one for each outward-facing edge port We represent the topology as collection of locations in the network and the predicates as mapping from locations to predicates Intuitively packets may travel freely between internal locations but must satisfy the associated predicate to enter the slice at an ingress location or leave the slice at an egress location If an external port is not listed in the ingress or egress set then no packets may enter or leave respectively on that port",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "Slice",
        "normalized": "",
        "package": "netcore",
        "partial": "Slice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Switch",
      "description": {
        "fct-descr": "\u003cp\u003eA switch's unique identifier.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "type",
        "fct-source": "src/Frenetic-NetCore-Types.html#Switch",
        "fct-type": "type",
        "title": "Switch"
      },
      "index": {
        "description": "switch unique identifier",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "Switch",
        "normalized": "",
        "package": "netcore",
        "partial": "Switch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Topo",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "type",
        "fct-source": "src/Frenetic-Topo.html#Topo",
        "fct-type": "type",
        "title": "Topo"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "Topo",
        "normalized": "",
        "package": "netcore",
        "partial": "Topo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Vlan",
      "description": {
        "fct-descr": "\u003cp\u003eVLAN tags. Only the lower 12-bits are used.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "type",
        "fct-source": "src/Frenetic-NetCore-Types.html#Vlan",
        "fct-type": "type",
        "title": "Vlan"
      },
      "index": {
        "description": "VLAN tags Only the lower bits are used",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "Vlan",
        "normalized": "",
        "package": "netcore",
        "partial": "Vlan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#t:Word48",
      "description": {
        "fct-descr": "\u003cp\u003eEthernet addresses are 48-bits wide.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "type",
        "fct-source": "src/Frenetic-NetCore-Types.html#Word48",
        "fct-type": "type",
        "title": "Word48"
      },
      "index": {
        "description": "Ethernet addresses are bits wide",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "Word48",
        "normalized": "",
        "package": "netcore",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:-60--124--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAbbreviation for predicate union.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Predicate -\u003e Predicate -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#%3C%7C%7C%3E",
        "fct-type": "function",
        "title": "(\u003c||\u003e)"
      },
      "index": {
        "description": "Abbreviation for predicate union",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "(\u003c||\u003e) \u003c||\u003e",
        "normalized": "Predicate-\u003ePredicate-\u003ePredicate",
        "package": "netcore",
        "partial": "",
        "signature": "Predicate-\u003ePredicate-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:-60--37--62-",
      "description": {
        "fct-descr": "\u003cp\u003eRestrict a policy to act over packets matching the predicate.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Policy -\u003e Predicate -\u003e Policy",
        "fct-source": "src/Frenetic-NetCore-Short.html#%3C%25%3E",
        "fct-type": "function",
        "title": "(\u003c%\u003e)"
      },
      "index": {
        "description": "Restrict policy to act over packets matching the predicate",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "(\u003c%\u003e) \u003c%\u003e",
        "normalized": "Policy-\u003ePredicate-\u003ePolicy",
        "package": "netcore",
        "partial": "",
        "signature": "Policy-\u003ePredicate-\u003ePolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:-60--38--38--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAbbreviation for predicate intersection.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Predicate -\u003e Predicate -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#%3C%26%26%3E",
        "fct-type": "function",
        "title": "(\u003c&&\u003e)"
      },
      "index": {
        "description": "Abbreviation for predicate intersection",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "(\u003c&&\u003e) \u003c&&\u003e",
        "normalized": "Predicate-\u003ePredicate-\u003ePredicate",
        "package": "netcore",
        "partial": "",
        "signature": "Predicate-\u003ePredicate-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eJoin: overloaded to find the union of policies and the join of actions.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Frenetic-NetCore-Short.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Join overloaded to find the union of policies and the join of actions",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "netcore",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:-61--61--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAbbreviation for constructing a basic policy from a predicate and an action.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Predicate -\u003e Action -\u003e Policy",
        "fct-source": "src/Frenetic-NetCore-Short.html#%3D%3D%3E",
        "fct-type": "function",
        "title": "(==\u003e)"
      },
      "index": {
        "description": "Abbreviation for constructing basic policy from predicate and an action",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "(==\u003e) ==\u003e",
        "normalized": "Predicate-\u003eAction-\u003ePolicy",
        "package": "netcore",
        "partial": "",
        "signature": "Predicate-\u003eAction-\u003ePolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:Loc",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Loc Switch Port",
        "fct-source": "src/Frenetic-NetCore-Types.html#Loc",
        "fct-type": "function",
        "title": "Loc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "Loc",
        "normalized": "",
        "package": "netcore",
        "partial": "Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:Packet",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Packet",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "Packet"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "Packet",
        "normalized": "",
        "package": "netcore",
        "partial": "Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:PoBasic",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms the given action on packets matching the given predicate.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "PoBasic Predicate Action",
        "fct-source": "src/Frenetic-NetCore-Types.html#Policy",
        "fct-type": "function",
        "title": "PoBasic"
      },
      "index": {
        "description": "Performs the given action on packets matching the given predicate",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "PoBasic",
        "normalized": "",
        "package": "netcore",
        "partial": "Po Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:PoBottom",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms no actions.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "PoBottom",
        "fct-source": "src/Frenetic-NetCore-Types.html#Policy",
        "fct-type": "function",
        "title": "PoBottom"
      },
      "index": {
        "description": "Performs no actions",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "PoBottom",
        "normalized": "",
        "package": "netcore",
        "partial": "Po Bottom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:PoUnion",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms the actions of both P1 and P2.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "PoUnion Policy Policy",
        "fct-source": "src/Frenetic-NetCore-Types.html#Policy",
        "fct-type": "function",
        "title": "PoUnion"
      },
      "index": {
        "description": "Performs the actions of both P1 and P2",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "PoUnion",
        "normalized": "",
        "package": "netcore",
        "partial": "Po Union",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:Slice",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Slice",
        "fct-source": "src/Frenetic-Slices-Slice.html#Slice",
        "fct-type": "function",
        "title": "Slice"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "Slice",
        "normalized": "",
        "package": "netcore",
        "partial": "Slice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:allPorts",
      "description": {
        "fct-descr": "\u003cp\u003eForward the packet out of all physical ports, except the packet's\n ingress port.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Modification-\u003e Action",
        "fct-type": "function",
        "title": "allPorts"
      },
      "index": {
        "description": "Forward the packet out of all physical ports except the packet ingress port",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "allPorts",
        "normalized": "Modification-\u003eAction",
        "package": "netcore",
        "partial": "Ports",
        "signature": "Modification-\u003eAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:both",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a new channel that waits for both input channels to produce a value,\n and then yields the latest version of both values.  If one channel produces\n multiple values before the other produces any, then the early values are\n discarded.  Afterwards, whenever one channel updates, the output channel\n yields that update along with whatever the current version of the other\n channel is.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Chan a -\u003e Chan b -\u003e IO (Chan (a, b))",
        "fct-source": "src/Frenetic-Common.html#both",
        "fct-type": "function",
        "title": "both"
      },
      "index": {
        "description": "Produce new channel that waits for both input channels to produce value and then yields the latest version of both values If one channel produces multiple values before the other produces any then the early values are discarded Afterwards whenever one channel updates the output channel yields that update along with whatever the current version of the other channel is",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "both",
        "normalized": "Chan a-\u003eChan b-\u003eIO(Chan(a,b))",
        "package": "netcore",
        "partial": "",
        "signature": "Chan a-\u003eChan b-\u003eIO(Chan(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:broadcastAddress",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "EthernetAddress",
        "fct-source": "src/Frenetic-EthernetAddress.html#broadcastAddress",
        "fct-type": "function",
        "title": "broadcastAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "broadcastAddress",
        "normalized": "",
        "package": "netcore",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:buildGraph",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a graph from list of undirected edges labeled with their ports\n Ensures that the resulting graph is undirected-equivalent, and labels each\n \u003ca\u003edirected\u003c/a\u003e edge with the appropriate port to send a packet over that edge\n from the source switch.\n\u003c/p\u003e\u003cp\u003eBy convention, hosts have a single port 0, and non-hosts have any number of\n non-zero ports.  If 0 is in the ports of a node, it is considered to be a\n host regardless of other ports that may be present.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "[((Node, Port), (Node, Port))] -\u003e Topo",
        "fct-source": "src/Frenetic-Topo.html#buildGraph",
        "fct-type": "function",
        "title": "buildGraph"
      },
      "index": {
        "description": "Build graph from list of undirected edges labeled with their ports Ensures that the resulting graph is undirected-equivalent and labels each directed edge with the appropriate port to send packet over that edge from the source switch By convention hosts have single port and non-hosts have any number of non-zero ports If is in the ports of node it is considered to be host regardless of other ports that may be present",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "buildGraph",
        "normalized": "[((Node,Port),(Node,Port))]-\u003eTopo",
        "package": "netcore",
        "partial": "Graph",
        "signature": "[((Node,Port),(Node,Port))]-\u003eTopo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:controller",
      "description": {
        "fct-descr": "\u003cp\u003eStarts an OpenFlow controller that runs a static NetCore program.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Policy -\u003e IO ()",
        "fct-source": "src/Frenetic-Server.html#controller",
        "fct-type": "function",
        "title": "controller"
      },
      "index": {
        "description": "Starts an OpenFlow controller that runs static NetCore program",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "controller",
        "normalized": "Policy-\u003eIO()",
        "package": "netcore",
        "partial": "",
        "signature": "Policy-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:countBytes",
      "description": {
        "fct-descr": "\u003cp\u003eSends packets to the controller.\n\u003c/p\u003e\u003cp\u003eReturns an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e and a channel. When the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e is used in the active\n \u003ccode\u003e\u003ca\u003ePolicy\u003c/a\u003e\u003c/code\u003e, all matching packets are sent to the controller. These packets\n are written into the channel.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Int-\u003e IO (Chan (Switch, Integer), Action)",
        "fct-type": "function",
        "title": "countBytes"
      },
      "index": {
        "description": "Sends packets to the controller Returns an Action and channel When the Action is used in the active Policy all matching packets are sent to the controller These packets are written into the channel",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "countBytes",
        "normalized": "Int-\u003eIO(Chan(Switch,Integer),Action)",
        "package": "netcore",
        "partial": "Bytes",
        "signature": "Int-\u003eIO(Chan(Switch,Integer),Action)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:countPkts",
      "description": {
        "fct-descr": "\u003cp\u003ePeriodically polls the network to counts the number of bytes received.\n\u003c/p\u003e\u003cp\u003eReturns an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e and a channel. When the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e is used in the\n active \u003ccode\u003e\u003ca\u003ePolicy\u003c/a\u003e\u003c/code\u003e, the controller periodically reads the packet counters\n on the network. The controller returns the number of matching packets\n on each switch.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Int-\u003e IO (Chan (Switch, Integer), Action)",
        "fct-type": "function",
        "title": "countPkts"
      },
      "index": {
        "description": "Periodically polls the network to counts the number of bytes received Returns an Action and channel When the Action is used in the active Policy the controller periodically reads the packet counters on the network The controller returns the number of matching packets on each switch",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "countPkts",
        "normalized": "Int-\u003eIO(Chan(Switch,Integer),Action)",
        "package": "netcore",
        "partial": "Pkts",
        "signature": "Int-\u003eIO(Chan(Switch,Integer),Action)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dlDst",
      "description": {
        "fct-descr": "\u003cp\u003eMatch ethernet destination address.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word48 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#dlDst",
        "fct-type": "function",
        "title": "dlDst"
      },
      "index": {
        "description": "Match ethernet destination address",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "dlDst",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Dst",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dlNoVlan",
      "description": {
        "fct-descr": "\u003cp\u003eMatch Vlan untagged\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#dlNoVlan",
        "fct-type": "function",
        "title": "dlNoVlan"
      },
      "index": {
        "description": "Match Vlan untagged",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "dlNoVlan",
        "normalized": "",
        "package": "netcore",
        "partial": "No Vlan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dlSrc",
      "description": {
        "fct-descr": "\u003cp\u003eMatch ethernet source address.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word48 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#dlSrc",
        "fct-type": "function",
        "title": "dlSrc"
      },
      "index": {
        "description": "Match ethernet source address",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "dlSrc",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Src",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dlTyp",
      "description": {
        "fct-descr": "\u003cp\u003eMatch ethernet type code (e.g., 0x0800 for IP packets).\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word16 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#dlTyp",
        "fct-type": "function",
        "title": "dlTyp"
      },
      "index": {
        "description": "Match ethernet type code e.g x0800 for IP packets",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "dlTyp",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Typ",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dlVlan",
      "description": {
        "fct-descr": "\u003cp\u003eMatch VLAN tag.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word16 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#dlVlan",
        "fct-type": "function",
        "title": "dlVlan"
      },
      "index": {
        "description": "Match VLAN tag",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "dlVlan",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Vlan",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dlVlanPcp",
      "description": {
        "fct-descr": "\u003cp\u003eMatch VLAN priority\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word8 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#dlVlanPcp",
        "fct-type": "function",
        "title": "dlVlanPcp"
      },
      "index": {
        "description": "Match VLAN priority",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "dlVlanPcp",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Vlan Pcp",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dropPkt",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Action",
        "fct-source": "src/Frenetic-NetCore-Short.html#dropPkt",
        "fct-type": "function",
        "title": "dropPkt"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "dropPkt",
        "normalized": "",
        "package": "netcore",
        "partial": "Pkt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dynController",
      "description": {
        "fct-descr": "\u003cp\u003eStarts an OpenFlow controller that runs dynamic NetCore programs.\n\u003c/p\u003e\u003cp\u003eThe controller reads NetCore programs from the given channel. When\n the controller receives a program on the channel, it compiles it and\n reconfigures the network to run it.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Chan Policy-\u003e Chan (Loc, ByteString)-\u003e IO ()",
        "fct-type": "function",
        "title": "dynController"
      },
      "index": {
        "description": "Starts an OpenFlow controller that runs dynamic NetCore programs The controller reads NetCore programs from the given channel When the controller receives program on the channel it compiles it and reconfigures the network to run it",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "dynController",
        "normalized": "Chan Policy-\u003eChan(Loc,ByteString)-\u003eIO()",
        "package": "netcore",
        "partial": "Controller",
        "signature": "Chan Policy-\u003eChan(Loc,ByteString)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:dynTransform",
      "description": {
        "fct-descr": "\u003cp\u003eCompile a list of slices and dynamic policies as they change.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "[(Slice, Chan Policy)] -\u003e IO (Chan Policy)",
        "fct-source": "src/Frenetic-Slices-Compile.html#dynTransform",
        "fct-type": "function",
        "title": "dynTransform"
      },
      "index": {
        "description": "Compile list of slices and dynamic policies as they change",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "dynTransform",
        "normalized": "[(Slice,Chan Policy)]-\u003eIO(Chan Policy)",
        "package": "netcore",
        "partial": "Transform",
        "signature": "[(Slice,Chan Policy)]-\u003eIO(Chan Policy)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:egress",
      "description": {
        "fct-descr": "\u003cp\u003eExternal ports, and restrictions on outbound packets.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Map Loc Predicate",
        "fct-source": "src/Frenetic-Slices-Slice.html#Slice",
        "fct-type": "function",
        "title": "egress"
      },
      "index": {
        "description": "External ports and restrictions on outbound packets",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "egress",
        "normalized": "",
        "package": "netcore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:exactMatch",
      "description": {
        "fct-descr": "\u003cp\u003eA predicate that exactly matches a packet's headers.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Packet -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Types.html#exactMatch",
        "fct-type": "function",
        "title": "exactMatch"
      },
      "index": {
        "description": "predicate that exactly matches packet headers",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "exactMatch",
        "normalized": "Packet-\u003ePredicate",
        "package": "netcore",
        "partial": "Match",
        "signature": "Packet-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:forward",
      "description": {
        "fct-descr": "\u003cp\u003eForward the packet out of the specified physical ports.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "[Port] -\u003e Action",
        "fct-source": "src/Frenetic-NetCore-Short.html#forward",
        "fct-type": "function",
        "title": "forward"
      },
      "index": {
        "description": "Forward the packet out of the specified physical ports",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "forward",
        "normalized": "[Port]-\u003eAction",
        "package": "netcore",
        "partial": "",
        "signature": "[Port]-\u003eAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:getPkts",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "IO (Chan (Switch, Packet), Action)",
        "fct-source": "src/Frenetic-NetCore-Types.html#getPkts",
        "fct-type": "function",
        "title": "getPkts"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "getPkts",
        "normalized": "IO(Chan(Switch,Packet),Action)",
        "package": "netcore",
        "partial": "Pkts",
        "signature": "IO(Chan(Switch,Packet),Action)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:inPort",
      "description": {
        "fct-descr": "\u003cp\u003eMatch the ingress port on which packets arrive.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Port -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#inPort",
        "fct-type": "function",
        "title": "inPort"
      },
      "index": {
        "description": "Match the ingress port on which packets arrive",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "inPort",
        "normalized": "Port-\u003ePredicate",
        "package": "netcore",
        "partial": "Port",
        "signature": "Port-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:ingress",
      "description": {
        "fct-descr": "\u003cp\u003eExternal ports, and restrictions on inbound packets.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Map Loc Predicate",
        "fct-source": "src/Frenetic-Slices-Slice.html#Slice",
        "fct-type": "function",
        "title": "ingress"
      },
      "index": {
        "description": "External ports and restrictions on inbound packets",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "ingress",
        "normalized": "",
        "package": "netcore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:inport",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the predicate matching packets on this switch and port\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Switch -\u003e Port -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#inport",
        "fct-type": "function",
        "title": "inport"
      },
      "index": {
        "description": "Construct the predicate matching packets on this switch and port",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "inport",
        "normalized": "Switch-\u003ePort-\u003ePredicate",
        "package": "netcore",
        "partial": "",
        "signature": "Switch-\u003ePort-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:internal",
      "description": {
        "fct-descr": "\u003cp\u003ePorts internal to the slice.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Set Loc",
        "fct-source": "src/Frenetic-Slices-Slice.html#Slice",
        "fct-type": "function",
        "title": "internal"
      },
      "index": {
        "description": "Ports internal to the slice",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "internal",
        "normalized": "",
        "package": "netcore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:internalSlice",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a slice that exactly covers the given topology, with no ingress or\n egress ports.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Topo -\u003e Slice",
        "fct-source": "src/Frenetic-Slices-Slice.html#internalSlice",
        "fct-type": "function",
        "title": "internalSlice"
      },
      "index": {
        "description": "Produce slice that exactly covers the given topology with no ingress or egress ports",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "internalSlice",
        "normalized": "Topo-\u003eSlice",
        "package": "netcore",
        "partial": "Slice",
        "signature": "Topo-\u003eSlice"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:matchAll",
      "description": {
        "fct-descr": "\u003cp\u003eMatches all packets.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#matchAll",
        "fct-type": "function",
        "title": "matchAll"
      },
      "index": {
        "description": "Matches all packets",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "matchAll",
        "normalized": "",
        "package": "netcore",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:matchNone",
      "description": {
        "fct-descr": "\u003cp\u003eMatches no packets.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#matchNone",
        "fct-type": "function",
        "title": "matchNone"
      },
      "index": {
        "description": "Matches no packets",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "matchNone",
        "normalized": "",
        "package": "netcore",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modDlDst",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word48 -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modDlDst",
        "fct-type": "function",
        "title": "modDlDst"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "modDlDst",
        "normalized": "Word-\u003eModification",
        "package": "netcore",
        "partial": "Dl Dst",
        "signature": "Word-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modDlSrc",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word48 -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modDlSrc",
        "fct-type": "function",
        "title": "modDlSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "modDlSrc",
        "normalized": "Word-\u003eModification",
        "package": "netcore",
        "partial": "Dl Src",
        "signature": "Word-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modDlVlan",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Maybe Vlan -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modDlVlan",
        "fct-type": "function",
        "title": "modDlVlan"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "modDlVlan",
        "normalized": "Maybe Vlan-\u003eModification",
        "package": "netcore",
        "partial": "Dl Vlan",
        "signature": "Maybe Vlan-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modDlVlanPcp",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word8 -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modDlVlanPcp",
        "fct-type": "function",
        "title": "modDlVlanPcp"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "modDlVlanPcp",
        "normalized": "Word-\u003eModification",
        "package": "netcore",
        "partial": "Dl Vlan Pcp",
        "signature": "Word-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modNwDst",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word32 -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modNwDst",
        "fct-type": "function",
        "title": "modNwDst"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "modNwDst",
        "normalized": "Word-\u003eModification",
        "package": "netcore",
        "partial": "Nw Dst",
        "signature": "Word-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modNwSrc",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word32 -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modNwSrc",
        "fct-type": "function",
        "title": "modNwSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "modNwSrc",
        "normalized": "Word-\u003eModification",
        "package": "netcore",
        "partial": "Nw Src",
        "signature": "Word-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modNwTos",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word8 -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modNwTos",
        "fct-type": "function",
        "title": "modNwTos"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "modNwTos",
        "normalized": "Word-\u003eModification",
        "package": "netcore",
        "partial": "Nw Tos",
        "signature": "Word-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modTpDst",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word16 -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modTpDst",
        "fct-type": "function",
        "title": "modTpDst"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "modTpDst",
        "normalized": "Word-\u003eModification",
        "package": "netcore",
        "partial": "Tp Dst",
        "signature": "Word-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modTpSrc",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word16 -\u003e Modification",
        "fct-source": "src/Frenetic-NetCore-Short.html#modTpSrc",
        "fct-type": "function",
        "title": "modTpSrc"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "modTpSrc",
        "normalized": "Word-\u003eModification",
        "package": "netcore",
        "partial": "Tp Src",
        "signature": "Word-\u003eModification"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:modify",
      "description": {
        "fct-descr": "\u003cp\u003eForward the packet out of the specified physical ports with modifications.\n\u003c/p\u003e\u003cp\u003eEach port has its own record of modifications, so modifications at one port\n do not interfere with modifications at another port.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "[(Port, Modification)] -\u003e Action",
        "fct-source": "src/Frenetic-NetCore-Short.html#modify",
        "fct-type": "function",
        "title": "modify"
      },
      "index": {
        "description": "Forward the packet out of the specified physical ports with modifications Each port has its own record of modifications so modifications at one port do not interfere with modifications at another port",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "modify",
        "normalized": "[(Port,Modification)]-\u003eAction",
        "package": "netcore",
        "partial": "",
        "signature": "[(Port,Modification)]-\u003eAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:neg",
      "description": {
        "fct-descr": "\u003cp\u003eAbbreviation for predicate negation.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Predicate -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#neg",
        "fct-type": "function",
        "title": "neg"
      },
      "index": {
        "description": "Abbreviation for predicate negation",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "neg",
        "normalized": "Predicate-\u003ePredicate",
        "package": "netcore",
        "partial": "",
        "signature": "Predicate-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:nwDst",
      "description": {
        "fct-descr": "\u003cp\u003eMatch destination IP address.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word32 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#nwDst",
        "fct-type": "function",
        "title": "nwDst"
      },
      "index": {
        "description": "Match destination IP address",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "nwDst",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Dst",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:nwDstPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eMatch a prefix of the destination IP address.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word32 -\u003e Int -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#nwDstPrefix",
        "fct-type": "function",
        "title": "nwDstPrefix"
      },
      "index": {
        "description": "Match prefix of the destination IP address",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "nwDstPrefix",
        "normalized": "Word-\u003eInt-\u003ePredicate",
        "package": "netcore",
        "partial": "Dst Prefix",
        "signature": "Word-\u003eInt-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:nwProto",
      "description": {
        "fct-descr": "\u003cp\u003eMatch IP protocol code (e.g., 0x6 indicates TCP segments).\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word8 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#nwProto",
        "fct-type": "function",
        "title": "nwProto"
      },
      "index": {
        "description": "Match IP protocol code e.g x6 indicates TCP segments",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "nwProto",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Proto",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:nwSrc",
      "description": {
        "fct-descr": "\u003cp\u003eMatch source IP address.\n\u003c/p\u003e\u003cp\u003eThis is only meaningful in combination with 'dlTyp 0x0800'.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word32 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#nwSrc",
        "fct-type": "function",
        "title": "nwSrc"
      },
      "index": {
        "description": "Match source IP address This is only meaningful in combination with dlTyp x0800",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "nwSrc",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Src",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:nwSrcPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eMatch a prefix of the source IP address.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word32 -\u003e Int -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#nwSrcPrefix",
        "fct-type": "function",
        "title": "nwSrcPrefix"
      },
      "index": {
        "description": "Match prefix of the source IP address",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "nwSrcPrefix",
        "normalized": "Word-\u003eInt-\u003ePredicate",
        "package": "netcore",
        "partial": "Src Prefix",
        "signature": "Word-\u003eInt-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:nwTos",
      "description": {
        "fct-descr": "\u003cp\u003eMatch IP TOS field.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word8 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#nwTos",
        "fct-type": "function",
        "title": "nwTos"
      },
      "index": {
        "description": "Match IP TOS field",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "nwTos",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Tos",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:onSwitch",
      "description": {
        "fct-descr": "\u003cp\u003eMatch switch identifier.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Switch -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#onSwitch",
        "fct-type": "function",
        "title": "onSwitch"
      },
      "index": {
        "description": "Match switch identifier",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "onSwitch",
        "normalized": "Switch-\u003ePredicate",
        "package": "netcore",
        "partial": "Switch",
        "signature": "Switch-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktDlDst",
      "description": {
        "fct-descr": "\u003cp\u003edestination ethernet address\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word48",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktDlDst"
      },
      "index": {
        "description": "destination ethernet address",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "pktDlDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktDlSrc",
      "description": {
        "fct-descr": "\u003cp\u003esource ethernet address\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word48",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktDlSrc"
      },
      "index": {
        "description": "source ethernet address",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "pktDlSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktDlTyp",
      "description": {
        "fct-descr": "\u003cp\u003eethernet type code (e.g., 0x800 for IP packets)\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word16",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktDlTyp"
      },
      "index": {
        "description": "ethernet type code e.g x800 for IP packets",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "pktDlTyp",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Typ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktDlVlan",
      "description": {
        "fct-descr": "\u003cp\u003eVLAN tag\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Maybe Vlan",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktDlVlan"
      },
      "index": {
        "description": "VLAN tag",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "pktDlVlan",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Vlan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktDlVlanPcp",
      "description": {
        "fct-descr": "\u003cp\u003eVLAN priority code\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word8",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktDlVlanPcp"
      },
      "index": {
        "description": "VLAN priority code",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "pktDlVlanPcp",
        "normalized": "",
        "package": "netcore",
        "partial": "Dl Vlan Pcp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktInPort",
      "description": {
        "fct-descr": "\u003cp\u003eingress port on the switch where the packet was\n received\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Port",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktInPort"
      },
      "index": {
        "description": "ingress port on the switch where the packet was received",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "pktInPort",
        "normalized": "",
        "package": "netcore",
        "partial": "In Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktNwDst",
      "description": {
        "fct-descr": "\u003cp\u003edestination IP address for IP packets\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word32",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktNwDst"
      },
      "index": {
        "description": "destination IP address for IP packets",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "pktNwDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktNwProto",
      "description": {
        "fct-descr": "\u003cp\u003eIP protocol number (e.g., 6 for TCP segments)\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word8",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktNwProto"
      },
      "index": {
        "description": "IP protocol number e.g for TCP segments",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "pktNwProto",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Proto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktNwSrc",
      "description": {
        "fct-descr": "\u003cp\u003esource IP address for IP packets\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word32",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktNwSrc"
      },
      "index": {
        "description": "source IP address for IP packets",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "pktNwSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktNwTos",
      "description": {
        "fct-descr": "\u003cp\u003eIP TOS field\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word8",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktNwTos"
      },
      "index": {
        "description": "IP TOS field",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "pktNwTos",
        "normalized": "",
        "package": "netcore",
        "partial": "Nw Tos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktTpDst",
      "description": {
        "fct-descr": "\u003cp\u003edestination port for IP packets\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word16",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktTpDst"
      },
      "index": {
        "description": "destination port for IP packets",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "pktTpDst",
        "normalized": "",
        "package": "netcore",
        "partial": "Tp Dst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:pktTpSrc",
      "description": {
        "fct-descr": "\u003cp\u003esource port for IP packets\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Maybe Word16",
        "fct-source": "src/Frenetic-NetCore-Types.html#Packet",
        "fct-type": "function",
        "title": "pktTpSrc"
      },
      "index": {
        "description": "source port for IP packets",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "pktTpSrc",
        "normalized": "",
        "package": "netcore",
        "partial": "Tp Src",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:prAnd",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct nary intersection of a list of predicates\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "[Predicate] -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#prAnd",
        "fct-type": "function",
        "title": "prAnd"
      },
      "index": {
        "description": "Construct nary intersection of list of predicates",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "prAnd",
        "normalized": "[Predicate]-\u003ePredicate",
        "package": "netcore",
        "partial": "And",
        "signature": "[Predicate]-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:prOr",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct nary union of a list of predicates\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "[Predicate] -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#prOr",
        "fct-type": "function",
        "title": "prOr"
      },
      "index": {
        "description": "Construct nary union of list of predicates",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "prOr",
        "normalized": "[Predicate]-\u003ePredicate",
        "package": "netcore",
        "partial": "Or",
        "signature": "[Predicate]-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:prSubtract",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the set difference between p1 and p2\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Predicate -\u003e Predicate -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#prSubtract",
        "fct-type": "function",
        "title": "prSubtract"
      },
      "index": {
        "description": "Construct the set difference between p1 and p2",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "prSubtract",
        "normalized": "Predicate-\u003ePredicate-\u003ePredicate",
        "package": "netcore",
        "partial": "Subtract",
        "signature": "Predicate-\u003ePredicate-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a new channel that carries updates from both of the input channels,\n but does not wait for both to be ready.  Analogous to Unix SELECT(2) followed\n by READ(2) on the ready file descriptor.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Chan a -\u003e Chan b -\u003e IO (Chan (Either a b))",
        "fct-source": "src/Frenetic-Common.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "Produce new channel that carries updates from both of the input channels but does not wait for both to be ready Analogous to Unix SELECT followed by READ on the ready file descriptor",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "select",
        "normalized": "Chan a-\u003eChan b-\u003eIO(Chan(Either a b))",
        "package": "netcore",
        "partial": "",
        "signature": "Chan a-\u003eChan b-\u003eIO(Chan(Either a b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:simpleSlice",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a slice with all the switches in topo, and predicate applied to all\n in- and out-bound connections to hosts\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Topo -\u003e Predicate -\u003e Slice",
        "fct-source": "src/Frenetic-Slices-Slice.html#simpleSlice",
        "fct-type": "function",
        "title": "simpleSlice"
      },
      "index": {
        "description": "Produce slice with all the switches in topo and predicate applied to all in and out-bound connections to hosts",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "simpleSlice",
        "normalized": "Topo-\u003ePredicate-\u003eSlice",
        "package": "netcore",
        "partial": "Slice",
        "signature": "Topo-\u003ePredicate-\u003eSlice"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:tpDst",
      "description": {
        "fct-descr": "\u003cp\u003eMatch IP destination port.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word16 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#tpDst",
        "fct-type": "function",
        "title": "tpDst"
      },
      "index": {
        "description": "Match IP destination port",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "tpDst",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Dst",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:tpSrc",
      "description": {
        "fct-descr": "\u003cp\u003eMatch IP source port.\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Word16 -\u003e Predicate",
        "fct-source": "src/Frenetic-NetCore-Short.html#tpSrc",
        "fct-type": "function",
        "title": "tpSrc"
      },
      "index": {
        "description": "Match IP source port",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "tpSrc",
        "normalized": "Word-\u003ePredicate",
        "package": "netcore",
        "partial": "Src",
        "signature": "Word-\u003ePredicate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:transform",
      "description": {
        "fct-descr": "\u003cp\u003eProduce the combined policy by compiling a list of slices and policies with\n the vanilla compiler\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "[(Slice, Policy)] -\u003e Policy",
        "fct-source": "src/Frenetic-Slices-Compile.html#transform",
        "fct-type": "function",
        "title": "transform"
      },
      "index": {
        "description": "Produce the combined policy by compiling list of slices and policies with the vanilla compiler",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "transform",
        "normalized": "[(Slice,Policy)]-\u003ePolicy",
        "package": "netcore",
        "partial": "",
        "signature": "[(Slice,Policy)]-\u003ePolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:transformEdge",
      "description": {
        "fct-descr": "\u003cp\u003eProduce the combined policy by compiling a list of slices and policies with\n the edge compiler\n\u003c/p\u003e",
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Topo -\u003e [(Slice, Policy)] -\u003e Policy",
        "fct-source": "src/Frenetic-Slices-Compile.html#transformEdge",
        "fct-type": "function",
        "title": "transformEdge"
      },
      "index": {
        "description": "Produce the combined policy by compiling list of slices and policies with the edge compiler",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "transformEdge",
        "normalized": "Topo-\u003e[(Slice,Policy)]-\u003ePolicy",
        "package": "netcore",
        "partial": "Edge",
        "signature": "Topo-\u003e[(Slice,Policy)]-\u003ePolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetCore.html#v:unmodified",
      "description": {
        "fct-module": "Frenetic.NetCore",
        "fct-package": "netcore",
        "fct-signature": "Modification",
        "fct-source": "src/Frenetic-NetCore-Types.html#unmodified",
        "fct-type": "function",
        "title": "unmodified"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetCore",
        "module": "Frenetic.NetCore",
        "name": "unmodified",
        "normalized": "",
        "package": "netcore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetworkFrames.html#",
      "description": {
        "fct-module": "Frenetic.NetworkFrames",
        "fct-package": "netcore",
        "fct-signature": "module",
        "fct-source": "src/Frenetic-NetworkFrames.html",
        "fct-type": "module",
        "title": "NetworkFrames"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetworkFrames",
        "module": "Frenetic.NetworkFrames",
        "name": "NetworkFrames",
        "normalized": "",
        "package": "netcore",
        "partial": "Network Frames",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-NetworkFrames.html#v:arpReply",
      "description": {
        "fct-module": "Frenetic.NetworkFrames",
        "fct-package": "netcore",
        "fct-signature": "Word48 -\u003e Word32 -\u003e Word48 -\u003e Word32 -\u003e ByteString",
        "fct-source": "src/Frenetic-NetworkFrames.html#arpReply",
        "fct-type": "function",
        "title": "arpReply"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic NetworkFrames",
        "module": "Frenetic.NetworkFrames",
        "name": "arpReply",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eByteString",
        "package": "netcore",
        "partial": "Reply",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#",
      "description": {
        "fct-module": "Frenetic.Pattern",
        "fct-package": "netcore",
        "fct-signature": "module",
        "fct-source": "src/Frenetic-Pattern.html",
        "fct-type": "module",
        "title": "Pattern"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Pattern",
        "module": "Frenetic.Pattern",
        "name": "Pattern",
        "normalized": "",
        "package": "netcore",
        "partial": "Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#t:Matchable",
      "description": {
        "fct-descr": "\u003cp\u003eA class for types that compose similar to wildcards.\n\u003c/p\u003e\u003cp\u003eAll instances must satisfy the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ematch\u003c/code\u003e defines a partial order; \u003ccode\u003etop\u003c/code\u003e is the top element of this order\n  and \u003ccode\u003eintersect\u003c/code\u003e is a meet.\n\u003c/li\u003e\u003cli\u003e Meets are exact: if \u003ccode\u003ematch x y\u003c/code\u003e and \u003ccode\u003ematch x z\u003c/code\u003e, then\n  \u003ccode\u003ematch x (fromJust (intersect y z))\u003c/code\u003e, if such a meet exists.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMinimal complete definition: top and intersect.\n\u003c/p\u003e",
        "fct-module": "Frenetic.Pattern",
        "fct-package": "netcore",
        "fct-signature": "class",
        "fct-source": "src/Frenetic-Pattern.html#Matchable",
        "fct-type": "class",
        "title": "Matchable"
      },
      "index": {
        "description": "class for types that compose similar to wildcards All instances must satisfy the following match defines partial order top is the top element of this order and intersect is meet Meets are exact if match and match then match fromJust intersect if such meet exists Minimal complete definition top and intersect",
        "hierarchy": "Frenetic Pattern",
        "module": "Frenetic.Pattern",
        "name": "Matchable",
        "normalized": "",
        "package": "netcore",
        "partial": "Matchable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#t:Prefix",
      "description": {
        "fct-module": "Frenetic.Pattern",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-Pattern.html#Prefix",
        "fct-type": "data",
        "title": "Prefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Pattern",
        "module": "Frenetic.Pattern",
        "name": "Prefix",
        "normalized": "",
        "package": "netcore",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#t:Wildcard",
      "description": {
        "fct-module": "Frenetic.Pattern",
        "fct-package": "netcore",
        "fct-signature": "data",
        "fct-source": "src/Frenetic-Pattern.html#Wildcard",
        "fct-type": "data",
        "title": "Wildcard"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Pattern",
        "module": "Frenetic.Pattern",
        "name": "Wildcard",
        "normalized": "",
        "package": "netcore",
        "partial": "Wildcard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:Exact",
      "description": {
        "fct-module": "Frenetic.Pattern",
        "fct-package": "netcore",
        "fct-signature": "Exact a",
        "fct-source": "src/Frenetic-Pattern.html#Wildcard",
        "fct-type": "function",
        "title": "Exact"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Pattern",
        "module": "Frenetic.Pattern",
        "name": "Exact",
        "normalized": "",
        "package": "netcore",
        "partial": "Exact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:Prefix",
      "description": {
        "fct-module": "Frenetic.Pattern",
        "fct-package": "netcore",
        "fct-signature": "Prefix a Int",
        "fct-source": "src/Frenetic-Pattern.html#Prefix",
        "fct-type": "function",
        "title": "Prefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Pattern",
        "module": "Frenetic.Pattern",
        "name": "Prefix",
        "normalized": "",
        "package": "netcore",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:Wildcard",
      "description": {
        "fct-module": "Frenetic.Pattern",
        "fct-package": "netcore",
        "fct-signature": "Wildcard",
        "fct-source": "src/Frenetic-Pattern.html#Wildcard",
        "fct-type": "function",
        "title": "Wildcard"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Pattern",
        "module": "Frenetic.Pattern",
        "name": "Wildcard",
        "normalized": "",
        "package": "netcore",
        "partial": "Wildcard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:disjoint",
      "description": {
        "fct-module": "Frenetic.Pattern",
        "fct-package": "netcore",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Frenetic-Pattern.html#disjoint",
        "fct-type": "method",
        "title": "disjoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Pattern",
        "module": "Frenetic.Pattern",
        "name": "disjoint",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "netcore",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:intersect",
      "description": {
        "fct-module": "Frenetic.Pattern",
        "fct-package": "netcore",
        "fct-signature": "a -\u003e a -\u003e Maybe a",
        "fct-source": "src/Frenetic-Pattern.html#intersect",
        "fct-type": "method",
        "title": "intersect"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Pattern",
        "module": "Frenetic.Pattern",
        "name": "intersect",
        "normalized": "a-\u003ea-\u003eMaybe a",
        "package": "netcore",
        "partial": "",
        "signature": "a-\u003ea-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:match",
      "description": {
        "fct-module": "Frenetic.Pattern",
        "fct-package": "netcore",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Frenetic-Pattern.html#match",
        "fct-type": "method",
        "title": "match"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Pattern",
        "module": "Frenetic.Pattern",
        "name": "match",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "netcore",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:overlap",
      "description": {
        "fct-module": "Frenetic.Pattern",
        "fct-package": "netcore",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Frenetic-Pattern.html#overlap",
        "fct-type": "method",
        "title": "overlap"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Pattern",
        "module": "Frenetic.Pattern",
        "name": "overlap",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "netcore",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:top",
      "description": {
        "fct-module": "Frenetic.Pattern",
        "fct-package": "netcore",
        "fct-signature": "a",
        "fct-source": "src/Frenetic-Pattern.html#top",
        "fct-type": "method",
        "title": "top"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Pattern",
        "module": "Frenetic.Pattern",
        "name": "top",
        "normalized": "",
        "package": "netcore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Pattern.html#v:wMatch",
      "description": {
        "fct-module": "Frenetic.Pattern",
        "fct-package": "netcore",
        "fct-signature": "a -\u003e Wildcard a -\u003e Bool",
        "fct-source": "src/Frenetic-Pattern.html#wMatch",
        "fct-type": "function",
        "title": "wMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Pattern",
        "module": "Frenetic.Pattern",
        "name": "wMatch",
        "normalized": "a-\u003eWildcard a-\u003eBool",
        "package": "netcore",
        "partial": "Match",
        "signature": "a-\u003eWildcard a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Server.html#",
      "description": {
        "fct-module": "Frenetic.Server",
        "fct-package": "netcore",
        "fct-signature": "module",
        "fct-source": "src/Frenetic-Server.html",
        "fct-type": "module",
        "title": "Server"
      },
      "index": {
        "description": "",
        "hierarchy": "Frenetic Server",
        "module": "Frenetic.Server",
        "name": "Server",
        "normalized": "",
        "package": "netcore",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Server.html#v:controller",
      "description": {
        "fct-descr": "\u003cp\u003eStarts an OpenFlow controller that runs a static NetCore program.\n\u003c/p\u003e",
        "fct-module": "Frenetic.Server",
        "fct-package": "netcore",
        "fct-signature": "Policy -\u003e IO ()",
        "fct-source": "src/Frenetic-Server.html#controller",
        "fct-type": "function",
        "title": "controller"
      },
      "index": {
        "description": "Starts an OpenFlow controller that runs static NetCore program",
        "hierarchy": "Frenetic Server",
        "module": "Frenetic.Server",
        "name": "controller",
        "normalized": "Policy-\u003eIO()",
        "package": "netcore",
        "partial": "",
        "signature": "Policy-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/netcore/docs/Frenetic-Server.html#v:dynController",
      "description": {
        "fct-descr": "\u003cp\u003eStarts an OpenFlow controller that runs dynamic NetCore programs.\n\u003c/p\u003e\u003cp\u003eThe controller reads NetCore programs from the given channel. When\n the controller receives a program on the channel, it compiles it and\n reconfigures the network to run it.\n\u003c/p\u003e",
        "fct-module": "Frenetic.Server",
        "fct-package": "netcore",
        "fct-signature": "Chan Policy-\u003e Chan (Loc, ByteString)-\u003e IO ()",
        "fct-type": "function",
        "title": "dynController"
      },
      "index": {
        "description": "Starts an OpenFlow controller that runs dynamic NetCore programs The controller reads NetCore programs from the given channel When the controller receives program on the channel it compiles it and reconfigures the network to run it",
        "hierarchy": "Frenetic Server",
        "module": "Frenetic.Server",
        "name": "dynController",
        "normalized": "Chan Policy-\u003eChan(Loc,ByteString)-\u003eIO()",
        "package": "netcore",
        "partial": "Controller",
        "signature": "Chan Policy-\u003eChan(Loc,ByteString)-\u003eIO()"
      }
    }
  }
]