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
        "word": "tuntap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TUNTAP",
          "name": "TUNTAP",
          "package": "tuntap",
          "source": "src/Network-TUNTAP.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network TUNTAP",
          "module": "Network.TUNTAP",
          "name": "TUNTAP",
          "package": "tuntap",
          "partial": "TUNTAP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tuntap/docs/Network-TUNTAP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA DevMAC is a hardware address 48 bits long.\n\u003c/p\u003e",
          "module": "Network.TUNTAP",
          "name": "DevMAC",
          "package": "tuntap",
          "source": "src/Network-TUNTAP.html#DevMAC",
          "type": "type"
        },
        "index": {
          "description": "DevMAC is hardware address bits long",
          "hierarchy": "Network TUNTAP",
          "module": "Network.TUNTAP",
          "name": "DevMAC",
          "package": "tuntap",
          "partial": "Dev MAC",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tuntap/docs/Network-TUNTAP.html#t:DevMAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead\u003cem\u003eWritten to the TUN\u003c/em\u003eTAP device.\n\u003c/p\u003e",
          "module": "Network.TUNTAP",
          "name": "Packet",
          "package": "tuntap",
          "source": "src/Network-TUNTAP.html#Packet",
          "type": "type"
        },
        "index": {
          "description": "Read Written to the TUN TAP device",
          "hierarchy": "Network TUNTAP",
          "module": "Network.TUNTAP",
          "name": "Packet",
          "package": "tuntap",
          "partial": "Packet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tuntap/docs/Network-TUNTAP.html#t:Packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.TUNTAP",
          "name": "TAP",
          "package": "tuntap",
          "source": "src/Network-TUNTAP.html#TAP",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network TUNTAP",
          "module": "Network.TUNTAP",
          "name": "TAP",
          "package": "tuntap",
          "partial": "TAP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tuntap/docs/Network-TUNTAP.html#t:TAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBring up the TAP device\n\u003c/p\u003e",
          "module": "Network.TUNTAP",
          "name": "bringUp",
          "package": "tuntap",
          "signature": "TAP -\u003e IO CInt",
          "source": "src/Network-TUNTAP.html#bringUp",
          "type": "function"
        },
        "index": {
          "description": "Bring up the TAP device",
          "hierarchy": "Network TUNTAP",
          "module": "Network.TUNTAP",
          "name": "bringUp",
          "normalized": "TAP-\u003eIO CInt",
          "package": "tuntap",
          "partial": "Up",
          "signature": "TAP-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuntap/docs/Network-TUNTAP.html#v:bringUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the TAP device\n\u003c/p\u003e",
          "module": "Network.TUNTAP",
          "name": "closeTAP",
          "package": "tuntap",
          "signature": "TAP -\u003e IO CInt",
          "source": "src/Network-TUNTAP.html#closeTAP",
          "type": "function"
        },
        "index": {
          "description": "Close the TAP device",
          "hierarchy": "Network TUNTAP",
          "module": "Network.TUNTAP",
          "name": "closeTAP",
          "normalized": "TAP-\u003eIO CInt",
          "package": "tuntap",
          "partial": "TAP",
          "signature": "TAP-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuntap/docs/Network-TUNTAP.html#v:closeTAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeallocate a TAP resource\n\u003c/p\u003e",
          "module": "Network.TUNTAP",
          "name": "finish",
          "package": "tuntap",
          "signature": "TAP -\u003e IO CInt",
          "source": "src/Network-TUNTAP.html#finish",
          "type": "function"
        },
        "index": {
          "description": "Deallocate TAP resource",
          "hierarchy": "Network TUNTAP",
          "module": "Network.TUNTAP",
          "name": "finish",
          "normalized": "TAP-\u003eIO CInt",
          "package": "tuntap",
          "signature": "TAP-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuntap/docs/Network-TUNTAP.html#v:finish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the MAC address assigned to the TAP device\n\u003c/p\u003e",
          "module": "Network.TUNTAP",
          "name": "getMAC",
          "package": "tuntap",
          "signature": "TAP -\u003e IO DevMAC",
          "source": "src/Network-TUNTAP.html#getMAC",
          "type": "function"
        },
        "index": {
          "description": "Get the MAC address assigned to the TAP device",
          "hierarchy": "Network TUNTAP",
          "module": "Network.TUNTAP",
          "name": "getMAC",
          "normalized": "TAP-\u003eIO DevMAC",
          "package": "tuntap",
          "partial": "MAC",
          "signature": "TAP-\u003eIO DevMAC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuntap/docs/Network-TUNTAP.html#v:getMAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen the TAP device\n\u003c/p\u003e",
          "module": "Network.TUNTAP",
          "name": "openTAP",
          "package": "tuntap",
          "signature": "TAP -\u003e String -\u003e IO CInt",
          "source": "src/Network-TUNTAP.html#openTAP",
          "type": "function"
        },
        "index": {
          "description": "Open the TAP device",
          "hierarchy": "Network TUNTAP",
          "module": "Network.TUNTAP",
          "name": "openTAP",
          "normalized": "TAP-\u003eString-\u003eIO CInt",
          "package": "tuntap",
          "partial": "TAP",
          "signature": "TAP-\u003eString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuntap/docs/Network-TUNTAP.html#v:openTAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a packet from the TAP device\n\u003c/p\u003e",
          "module": "Network.TUNTAP",
          "name": "readTAP",
          "package": "tuntap",
          "signature": "TAP -\u003e IO Packet",
          "source": "src/Network-TUNTAP.html#readTAP",
          "type": "function"
        },
        "index": {
          "description": "Read packet from the TAP device",
          "hierarchy": "Network TUNTAP",
          "module": "Network.TUNTAP",
          "name": "readTAP",
          "normalized": "TAP-\u003eIO Packet",
          "package": "tuntap",
          "partial": "TAP",
          "signature": "TAP-\u003eIO Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuntap/docs/Network-TUNTAP.html#v:readTAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the IPv4 address of the TAP device\n\u003c/p\u003e",
          "module": "Network.TUNTAP",
          "name": "setIP",
          "package": "tuntap",
          "signature": "TAP -\u003e Word32 -\u003e IO CInt",
          "source": "src/Network-TUNTAP.html#setIP",
          "type": "function"
        },
        "index": {
          "description": "Set the IPv4 address of the TAP device",
          "hierarchy": "Network TUNTAP",
          "module": "Network.TUNTAP",
          "name": "setIP",
          "normalized": "TAP-\u003eWord-\u003eIO CInt",
          "package": "tuntap",
          "partial": "IP",
          "signature": "TAP-\u003eWord-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuntap/docs/Network-TUNTAP.html#v:setIP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the MTU of the TAP device\n\u003c/p\u003e",
          "module": "Network.TUNTAP",
          "name": "setMTU",
          "package": "tuntap",
          "signature": "TAP -\u003e Int -\u003e IO CInt",
          "source": "src/Network-TUNTAP.html#setMTU",
          "type": "function"
        },
        "index": {
          "description": "Set the MTU of the TAP device",
          "hierarchy": "Network TUNTAP",
          "module": "Network.TUNTAP",
          "name": "setMTU",
          "normalized": "TAP-\u003eInt-\u003eIO CInt",
          "package": "tuntap",
          "partial": "MTU",
          "signature": "TAP-\u003eInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuntap/docs/Network-TUNTAP.html#v:setMTU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the network mask of the TAP device\n\u003c/p\u003e",
          "module": "Network.TUNTAP",
          "name": "setMask",
          "package": "tuntap",
          "signature": "TAP -\u003e Word32 -\u003e IO CInt",
          "source": "src/Network-TUNTAP.html#setMask",
          "type": "function"
        },
        "index": {
          "description": "Set the network mask of the TAP device",
          "hierarchy": "Network TUNTAP",
          "module": "Network.TUNTAP",
          "name": "setMask",
          "normalized": "TAP-\u003eWord-\u003eIO CInt",
          "package": "tuntap",
          "partial": "Mask",
          "signature": "TAP-\u003eWord-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuntap/docs/Network-TUNTAP.html#v:setMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a TAP resource\n\u003c/p\u003e",
          "module": "Network.TUNTAP",
          "name": "start",
          "package": "tuntap",
          "signature": "IO TAP",
          "source": "src/Network-TUNTAP.html#start",
          "type": "function"
        },
        "index": {
          "description": "Allocate TAP resource",
          "hierarchy": "Network TUNTAP",
          "module": "Network.TUNTAP",
          "name": "start",
          "package": "tuntap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuntap/docs/Network-TUNTAP.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept an action and an MTU. Allocate a TAP and\n pass it to the action. Clean up when finished with\n the action.\n\u003c/p\u003e",
          "module": "Network.TUNTAP",
          "name": "withTAP",
          "package": "tuntap",
          "signature": "Int -\u003e (TAP -\u003e IO a) -\u003e IO ()",
          "source": "src/Network-TUNTAP.html#withTAP",
          "type": "function"
        },
        "index": {
          "description": "Accept an action and an MTU Allocate TAP and pass it to the action Clean up when finished with the action",
          "hierarchy": "Network TUNTAP",
          "module": "Network.TUNTAP",
          "name": "withTAP",
          "normalized": "Int-\u003e(TAP-\u003eIO a)-\u003eIO()",
          "package": "tuntap",
          "partial": "TAP",
          "signature": "Int-\u003e(TAP-\u003eIO a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuntap/docs/Network-TUNTAP.html#v:withTAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a packet to the TAP device\n\u003c/p\u003e",
          "module": "Network.TUNTAP",
          "name": "writeTAP",
          "package": "tuntap",
          "signature": "TAP -\u003e Packet -\u003e IO CInt",
          "source": "src/Network-TUNTAP.html#writeTAP",
          "type": "function"
        },
        "index": {
          "description": "Write packet to the TAP device",
          "hierarchy": "Network TUNTAP",
          "module": "Network.TUNTAP",
          "name": "writeTAP",
          "normalized": "TAP-\u003ePacket-\u003eIO CInt",
          "package": "tuntap",
          "partial": "TAP",
          "signature": "TAP-\u003ePacket-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tuntap/docs/Network-TUNTAP.html#v:writeTAP"
      }
    }
  ]
]