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
        "word": "wol"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA 'sort of' reusable module for mac addresses.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.MacAddress",
          "name": "MacAddress",
          "package": "wol",
          "source": "src/Network-MacAddress.html",
          "type": "module"
        },
        "index": {
          "description": "sort of reusable module for mac addresses",
          "hierarchy": "Network MacAddress",
          "module": "Network.MacAddress",
          "name": "MacAddress",
          "package": "wol",
          "partial": "Mac Address",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wol/docs/Network-MacAddress.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MacAddress",
          "name": "MacAddress",
          "package": "wol",
          "source": "src/Network-MacAddress.html#MacAddress",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network MacAddress",
          "module": "Network.MacAddress",
          "name": "MacAddress",
          "package": "wol",
          "partial": "Mac Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wol/docs/Network-MacAddress.html#t:MacAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.MacAddress",
          "name": "MacAddress",
          "package": "wol",
          "signature": "MacAddress Word8 Word8 Word8 Word8 Word8 Word8",
          "source": "src/Network-MacAddress.html#MacAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network MacAddress",
          "module": "Network.MacAddress",
          "name": "MacAddress",
          "package": "wol",
          "partial": "Mac Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wol/docs/Network-MacAddress.html#v:MacAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all bytes in a mac address\n\u003c/p\u003e",
          "module": "Network.MacAddress",
          "name": "bytes",
          "package": "wol",
          "signature": "MacAddress -\u003e [Word8]",
          "source": "src/Network-MacAddress.html#bytes",
          "type": "function"
        },
        "index": {
          "description": "Get all bytes in mac address",
          "hierarchy": "Network MacAddress",
          "module": "Network.MacAddress",
          "name": "bytes",
          "normalized": "MacAddress-\u003e[Word]",
          "package": "wol",
          "signature": "MacAddress-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wol/docs/Network-MacAddress.html#v:bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartial function to \u003ca\u003eparse\u003c/a\u003e a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eMacAddress\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.MacAddress",
          "name": "parse",
          "package": "wol",
          "signature": "String -\u003e MacAddress",
          "source": "src/Network-MacAddress.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Partial function to parse String to MacAddress",
          "hierarchy": "Network MacAddress",
          "module": "Network.MacAddress",
          "name": "parse",
          "normalized": "String-\u003eMacAddress",
          "package": "wol",
          "signature": "String-\u003eMacAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wol/docs/Network-MacAddress.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for sending a Wake on LAN Magic Packet.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.WoL",
          "name": "WoL",
          "package": "wol",
          "source": "src/Network-WoL.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for sending Wake on LAN Magic Packet",
          "hierarchy": "Network WoL",
          "module": "Network.WoL",
          "name": "WoL",
          "package": "wol",
          "partial": "Wo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wol/docs/Network-WoL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a magic packet based on \u003ccode\u003e\u003ca\u003eMacAddress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.WoL",
          "name": "magicPacket",
          "package": "wol",
          "signature": "MacAddress -\u003e String",
          "source": "src/Network-WoL.html#magicPacket",
          "type": "function"
        },
        "index": {
          "description": "Construct magic packet based on MacAddress",
          "hierarchy": "Network WoL",
          "module": "Network.WoL",
          "name": "magicPacket",
          "normalized": "MacAddress-\u003eString",
          "package": "wol",
          "partial": "Packet",
          "signature": "MacAddress-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wol/docs/Network-WoL.html#v:magicPacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a magic packet to the specified location.\n\u003c/p\u003e",
          "module": "Network.WoL",
          "name": "send",
          "package": "wol",
          "signature": "HostAddress -\u003e MacAddress -\u003e PortNumber -\u003e IO ()",
          "source": "src/Network-WoL.html#send",
          "type": "function"
        },
        "index": {
          "description": "Send magic packet to the specified location",
          "hierarchy": "Network WoL",
          "module": "Network.WoL",
          "name": "send",
          "normalized": "HostAddress-\u003eMacAddress-\u003ePortNumber-\u003eIO()",
          "package": "wol",
          "signature": "HostAddress-\u003eMacAddress-\u003ePortNumber-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wol/docs/Network-WoL.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser friendly wrapper around \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Network.WoL",
          "name": "sendWoLMagicPacket",
          "package": "wol",
          "signature": "String -\u003e String -\u003e Int -\u003e IO ()",
          "source": "src/Network-WoL.html#sendWoLMagicPacket",
          "type": "function"
        },
        "index": {
          "description": "User friendly wrapper around send function",
          "hierarchy": "Network WoL",
          "module": "Network.WoL",
          "name": "sendWoLMagicPacket",
          "normalized": "String-\u003eString-\u003eInt-\u003eIO()",
          "package": "wol",
          "partial": "Wo LMagic Packet",
          "signature": "String-\u003eString-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wol/docs/Network-WoL.html#v:sendWoLMagicPacket"
      }
    }
  ]
]