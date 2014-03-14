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
        "word": "damnpacket"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides convenience functions for manipulating dAmn packets.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Damn.Packet",
          "name": "Packet",
          "package": "damnpacket",
          "source": "src/Text-Damn-Packet.html",
          "type": "module"
        },
        "index": {
          "description": "Provides convenience functions for manipulating dAmn packets",
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "Packet",
          "package": "damnpacket",
          "partial": "Packet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type synonym--because pressing spacebar is pretty irritating.\n\u003c/p\u003e",
          "module": "Text.Damn.Packet",
          "name": "Arguments",
          "package": "damnpacket",
          "source": "src/Text-Damn-Packet-Internal.html#Arguments",
          "type": "type"
        },
        "index": {
          "description": "type synonym--because pressing spacebar is pretty irritating",
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "Arguments",
          "package": "damnpacket",
          "partial": "Arguments",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#t:Arguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a dAmn packet.\n\u003c/p\u003e\u003cp\u003ePackets are comprised of a command, which is mandatory, and three other\n optional elements: a \"parameter\", an argument list, and a body. Any\n combination of the latter three (or none of them) is valid, so the\n parser is fairly lenient.\n\u003c/p\u003e\u003cp\u003eA packet with all four elements will look something like this:\n\u003c/p\u003e\u003cpre\u003e\nproperty chat:SomeChatroom\np=propertyName\nby=name of setter\nts=timestamp\n\nvalue of property\n\u003c/pre\u003e\u003cp\u003eParsing this results in the packet:\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003ePacket\u003c/a\u003e\u003c/code\u003e { \u003ccode\u003e\u003ca\u003epktCommand\u003c/a\u003e\u003c/code\u003e = \"property\"\n       , \u003ccode\u003e\u003ca\u003epktParameter\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \"chat:SomeChatroom\"\n       , \u003ccode\u003e\u003ca\u003epktArgs\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003efromList\u003c/code\u003e [(\"p\",\"propertyName\"),(\"by\",\"name of setter\"),(\"ts\",\"timestamp\")]\n       , \u003ccode\u003e\u003ca\u003epktBody\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \"value of property\"\n       }\n\u003c/pre\u003e",
          "module": "Text.Damn.Packet",
          "name": "Packet",
          "package": "damnpacket",
          "source": "src/Text-Damn-Packet-Internal.html#Packet",
          "type": "data"
        },
        "index": {
          "description": "Represents dAmn packet Packets are comprised of command which is mandatory and three other optional elements parameter an argument list and body Any combination of the latter three or none of them is valid so the parser is fairly lenient packet with all four elements will look something like this property chat SomeChatroom propertyName by name of setter ts timestamp value of property Parsing this results in the packet Packet pktCommand property pktParameter Just chat SomeChatroom pktArgs fromList propertyName by name of setter ts timestamp pktBody Just value of property",
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "Packet",
          "package": "damnpacket",
          "partial": "Packet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#t:Packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Damn.Packet",
          "name": "Packet",
          "package": "damnpacket",
          "signature": "Packet",
          "source": "src/Text-Damn-Packet-Internal.html#Packet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "Packet",
          "package": "damnpacket",
          "partial": "Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:Packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse some text, providing a packet or the reason for parse failure.\n\u003c/p\u003e",
          "module": "Text.Damn.Packet",
          "name": "parse",
          "package": "damnpacket",
          "signature": "ByteString -\u003e Result Packet",
          "source": "src/Text-Damn-Packet-Parser.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Parse some text providing packet or the reason for parse failure",
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "parse",
          "normalized": "ByteString-\u003eResult Packet",
          "package": "damnpacket",
          "signature": "ByteString-\u003eResult Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse some text, discarding any failure message.\n\u003c/p\u003e",
          "module": "Text.Damn.Packet",
          "name": "parse'",
          "package": "damnpacket",
          "signature": "ByteString -\u003e Maybe Packet",
          "source": "src/Text-Damn-Packet-Parser.html#parse%27",
          "type": "function"
        },
        "index": {
          "description": "Parse some text discarding any failure message",
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "parse'",
          "normalized": "ByteString-\u003eMaybe Packet",
          "package": "damnpacket",
          "signature": "ByteString-\u003eMaybe Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:parse-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Damn.Packet",
          "name": "pktArgs",
          "package": "damnpacket",
          "signature": "Arguments",
          "source": "src/Text-Damn-Packet-Internal.html#Packet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "pktArgs",
          "package": "damnpacket",
          "partial": "Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens on \u003ccode\u003e\u003ca\u003epktArgs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Damn.Packet",
          "name": "pktArgsL",
          "package": "damnpacket",
          "signature": "(Arguments -\u003e f Arguments) -\u003e Packet -\u003e f Packet",
          "source": "src/Text-Damn-Packet-Internal.html#pktArgsL",
          "type": "function"
        },
        "index": {
          "description": "lens on pktArgs",
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "pktArgsL",
          "normalized": "(Arguments-\u003ea Arguments)-\u003ePacket-\u003ea Packet",
          "package": "damnpacket",
          "partial": "Args",
          "signature": "(Arguments-\u003ef Arguments)-\u003ePacket-\u003ef Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktArgsL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Damn.Packet",
          "name": "pktBody",
          "package": "damnpacket",
          "signature": "Maybe ByteString",
          "source": "src/Text-Damn-Packet-Internal.html#Packet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "pktBody",
          "package": "damnpacket",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens on \u003ccode\u003e\u003ca\u003epktBody\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Damn.Packet",
          "name": "pktBodyL",
          "package": "damnpacket",
          "signature": "(Maybe ByteString -\u003e f (Maybe ByteString)) -\u003e Packet -\u003e f Packet",
          "source": "src/Text-Damn-Packet-Internal.html#pktBodyL",
          "type": "function"
        },
        "index": {
          "description": "lens on pktBody",
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "pktBodyL",
          "normalized": "(Maybe ByteString-\u003ea(Maybe ByteString))-\u003ePacket-\u003ea Packet",
          "package": "damnpacket",
          "partial": "Body",
          "signature": "(Maybe ByteString-\u003ef(Maybe ByteString))-\u003ePacket-\u003ef Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktBodyL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Damn.Packet",
          "name": "pktCommand",
          "package": "damnpacket",
          "signature": "Text",
          "source": "src/Text-Damn-Packet-Internal.html#Packet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "pktCommand",
          "package": "damnpacket",
          "partial": "Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens on \u003ccode\u003e\u003ca\u003epktCommand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Damn.Packet",
          "name": "pktCommandL",
          "package": "damnpacket",
          "signature": "(Text -\u003e f Text) -\u003e Packet -\u003e f Packet",
          "source": "src/Text-Damn-Packet-Internal.html#pktCommandL",
          "type": "function"
        },
        "index": {
          "description": "lens on pktCommand",
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "pktCommandL",
          "normalized": "(Text-\u003ea Text)-\u003ePacket-\u003ea Packet",
          "package": "damnpacket",
          "partial": "Command",
          "signature": "(Text-\u003ef Text)-\u003ePacket-\u003ef Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktCommandL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Damn.Packet",
          "name": "pktParameter",
          "package": "damnpacket",
          "signature": "Maybe Text",
          "source": "src/Text-Damn-Packet-Internal.html#Packet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "pktParameter",
          "package": "damnpacket",
          "partial": "Parameter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktParameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens on \u003ccode\u003e\u003ca\u003epktParameter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Damn.Packet",
          "name": "pktParameterL",
          "package": "damnpacket",
          "signature": "(Maybe Text -\u003e f (Maybe Text)) -\u003e Packet -\u003e f Packet",
          "source": "src/Text-Damn-Packet-Internal.html#pktParameterL",
          "type": "function"
        },
        "index": {
          "description": "lens on pktParameter",
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "pktParameterL",
          "normalized": "(Maybe Text-\u003ea(Maybe Text))-\u003ePacket-\u003ea Packet",
          "package": "damnpacket",
          "partial": "Parameter",
          "signature": "(Maybe Text-\u003ef(Maybe Text))-\u003ePacket-\u003ef Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktParameterL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDue to the way dAmn packets are designed, it's not possible to\n unambiguously determine whether a packet has a subpacket or just a body.\n Thus you will need to request a subpacket yourself.\n\u003c/p\u003e",
          "module": "Text.Damn.Packet",
          "name": "pktSubpacket",
          "package": "damnpacket",
          "signature": "Packet -\u003e Result Packet",
          "source": "src/Text-Damn-Packet-Parser.html#pktSubpacket",
          "type": "function"
        },
        "index": {
          "description": "Due to the way dAmn packets are designed it not possible to unambiguously determine whether packet has subpacket or just body Thus you will need to request subpacket yourself",
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "pktSubpacket",
          "normalized": "Packet-\u003eResult Packet",
          "package": "damnpacket",
          "partial": "Subpacket",
          "signature": "Packet-\u003eResult Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktSubpacket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse when you don't care about the reason for parse failure.\n\u003c/p\u003e",
          "module": "Text.Damn.Packet",
          "name": "pktSubpacket'",
          "package": "damnpacket",
          "signature": "Packet -\u003e Maybe Packet",
          "source": "src/Text-Damn-Packet-Parser.html#pktSubpacket%27",
          "type": "function"
        },
        "index": {
          "description": "Use when you don care about the reason for parse failure",
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "pktSubpacket'",
          "normalized": "Packet-\u003eMaybe Packet",
          "package": "damnpacket",
          "partial": "Subpacket'",
          "signature": "Packet-\u003eMaybe Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktSubpacket-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lens on \u003ccode\u003e\u003ca\u003epktSubpacket'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Damn.Packet",
          "name": "pktSubpacketL",
          "package": "damnpacket",
          "signature": "(Maybe Packet -\u003e f (Maybe Packet)) -\u003e Packet -\u003e f Packet",
          "source": "src/Text-Damn-Packet-Parser.html#pktSubpacketL",
          "type": "function"
        },
        "index": {
          "description": "lens on pktSubpacket",
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "pktSubpacketL",
          "normalized": "(Maybe Packet-\u003ea(Maybe Packet))-\u003ePacket-\u003ea Packet",
          "package": "damnpacket",
          "partial": "Subpacket",
          "signature": "(Maybe Packet-\u003ef(Maybe Packet))-\u003ePacket-\u003ef Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktSubpacketL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erender\u003c/a\u003e\u003c/code\u003e converts a packet back into the dAmn text format.\n This is used by \u003ccode\u003e\u003ca\u003epktSubpacketL\u003c/a\u003e\u003c/code\u003e to fulfill the lens laws, but you might\n find it useful if you want to write packets to dAmn.\n\u003c/p\u003e",
          "module": "Text.Damn.Packet",
          "name": "render",
          "package": "damnpacket",
          "signature": "Packet -\u003e ByteString",
          "source": "src/Text-Damn-Packet-Parser.html#render",
          "type": "function"
        },
        "index": {
          "description": "render converts packet back into the dAmn text format This is used by pktSubpacketL to fulfill the lens laws but you might find it useful if you want to write packets to dAmn",
          "hierarchy": "Text Damn Packet",
          "module": "Text.Damn.Packet",
          "name": "render",
          "normalized": "Packet-\u003eByteString",
          "package": "damnpacket",
          "signature": "Packet-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:render"
      }
    }
  ]
]