[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides convenience functions for manipulating dAmn packets.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "module",
        "fct-source": "src/Text-Damn-Packet.html",
        "fct-type": "module",
        "title": "Packet"
      },
      "index": {
        "description": "Provides convenience functions for manipulating dAmn packets",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "Packet",
        "normalized": "",
        "package": "damnpacket",
        "partial": "Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#t:Arguments",
      "description": {
        "fct-descr": "\u003cp\u003eA type synonym--because pressing spacebar is pretty irritating.\n\u003c/p\u003e",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "type",
        "fct-source": "src/Text-Damn-Packet-Internal.html#Arguments",
        "fct-type": "type",
        "title": "Arguments"
      },
      "index": {
        "description": "type synonym--because pressing spacebar is pretty irritating",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "Arguments",
        "normalized": "",
        "package": "damnpacket",
        "partial": "Arguments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#t:Packet",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a dAmn packet.\n\u003c/p\u003e\u003cp\u003ePackets are comprised of a command, which is mandatory, and three other\n optional elements: a \"parameter\", an argument list, and a body. Any\n combination of the latter three (or none of them) is valid, so the\n parser is fairly lenient.\n\u003c/p\u003e\u003cp\u003eA packet with all four elements will look something like this:\n\u003c/p\u003e\u003cpre\u003e\nproperty chat:SomeChatroom\np=propertyName\nby=name of setter\nts=timestamp\n\nvalue of property\n\u003c/pre\u003e\u003cp\u003eParsing this results in the packet:\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003ePacket\u003c/a\u003e\u003c/code\u003e { \u003ccode\u003e\u003ca\u003epktCommand\u003c/a\u003e\u003c/code\u003e = \"property\"\n       , \u003ccode\u003e\u003ca\u003epktParameter\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \"chat:SomeChatroom\"\n       , \u003ccode\u003e\u003ca\u003epktArgs\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003efromList\u003c/code\u003e [(\"p\",\"propertyName\"),(\"by\",\"name of setter\"),(\"ts\",\"timestamp\")]\n       , \u003ccode\u003e\u003ca\u003epktBody\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \"value of property\"\n       }\n\u003c/pre\u003e",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "data",
        "fct-source": "src/Text-Damn-Packet-Internal.html#Packet",
        "fct-type": "data",
        "title": "Packet"
      },
      "index": {
        "description": "Represents dAmn packet Packets are comprised of command which is mandatory and three other optional elements parameter an argument list and body Any combination of the latter three or none of them is valid so the parser is fairly lenient packet with all four elements will look something like this property chat SomeChatroom propertyName by name of setter ts timestamp value of property Parsing this results in the packet Packet pktCommand property pktParameter Just chat SomeChatroom pktArgs fromList propertyName by name of setter ts timestamp pktBody Just value of property",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "Packet",
        "normalized": "",
        "package": "damnpacket",
        "partial": "Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:Packet",
      "description": {
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "Packet",
        "fct-source": "src/Text-Damn-Packet-Internal.html#Packet",
        "fct-type": "function",
        "title": "Packet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "Packet",
        "normalized": "",
        "package": "damnpacket",
        "partial": "Packet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eParse some text, providing a packet or the reason for parse failure.\n\u003c/p\u003e",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "Text -\u003e Either String Packet",
        "fct-source": "src/Text-Damn-Packet-Parser.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Parse some text providing packet or the reason for parse failure",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "parse",
        "normalized": "Text-\u003eEither String Packet",
        "package": "damnpacket",
        "partial": "",
        "signature": "Text-\u003eEither String Packet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:parse-39-",
      "description": {
        "fct-descr": "\u003cp\u003eParse some text, discarding any failure message.\n\u003c/p\u003e",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "Text -\u003e Maybe Packet",
        "fct-source": "src/Text-Damn-Packet-Parser.html#parse%27",
        "fct-type": "function",
        "title": "parse'"
      },
      "index": {
        "description": "Parse some text discarding any failure message",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "parse'",
        "normalized": "Text-\u003eMaybe Packet",
        "package": "damnpacket",
        "partial": "",
        "signature": "Text-\u003eMaybe Packet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktArgs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "Arguments",
        "fct-source": "src/Text-Damn-Packet-Internal.html#Packet",
        "fct-type": "function",
        "title": "pktArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "pktArgs",
        "normalized": "",
        "package": "damnpacket",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktArgsL",
      "description": {
        "fct-descr": "\u003cp\u003eA lens on \u003ccode\u003e\u003ca\u003epktArgs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "(Arguments -\u003e f Arguments) -\u003e Packet -\u003e f Packet",
        "fct-source": "src/Text-Damn-Packet-Internal.html#pktArgsL",
        "fct-type": "function",
        "title": "pktArgsL"
      },
      "index": {
        "description": "lens on pktArgs",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "pktArgsL",
        "normalized": "(Arguments-\u003ea Arguments)-\u003ePacket-\u003ea Packet",
        "package": "damnpacket",
        "partial": "Args",
        "signature": "(Arguments-\u003ef Arguments)-\u003ePacket-\u003ef Packet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktBody",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Text-Damn-Packet-Internal.html#Packet",
        "fct-type": "function",
        "title": "pktBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "pktBody",
        "normalized": "",
        "package": "damnpacket",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktBodyL",
      "description": {
        "fct-descr": "\u003cp\u003eA lens on \u003ccode\u003e\u003ca\u003epktBody\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "(Maybe Text -\u003e f (Maybe Text)) -\u003e Packet -\u003e f Packet",
        "fct-source": "src/Text-Damn-Packet-Internal.html#pktBodyL",
        "fct-type": "function",
        "title": "pktBodyL"
      },
      "index": {
        "description": "lens on pktBody",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "pktBodyL",
        "normalized": "(Maybe Text-\u003ea(Maybe Text))-\u003ePacket-\u003ea Packet",
        "package": "damnpacket",
        "partial": "Body",
        "signature": "(Maybe Text-\u003ef(Maybe Text))-\u003ePacket-\u003ef Packet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktCommand",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "Text",
        "fct-source": "src/Text-Damn-Packet-Internal.html#Packet",
        "fct-type": "function",
        "title": "pktCommand"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "pktCommand",
        "normalized": "",
        "package": "damnpacket",
        "partial": "Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktCommandL",
      "description": {
        "fct-descr": "\u003cp\u003eA lens on \u003ccode\u003e\u003ca\u003epktCommand\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "(Text -\u003e f Text) -\u003e Packet -\u003e f Packet",
        "fct-source": "src/Text-Damn-Packet-Internal.html#pktCommandL",
        "fct-type": "function",
        "title": "pktCommandL"
      },
      "index": {
        "description": "lens on pktCommand",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "pktCommandL",
        "normalized": "(Text-\u003ea Text)-\u003ePacket-\u003ea Packet",
        "package": "damnpacket",
        "partial": "Command",
        "signature": "(Text-\u003ef Text)-\u003ePacket-\u003ef Packet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktParameter",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "Maybe Text",
        "fct-source": "src/Text-Damn-Packet-Internal.html#Packet",
        "fct-type": "function",
        "title": "pktParameter"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "pktParameter",
        "normalized": "",
        "package": "damnpacket",
        "partial": "Parameter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktParameterL",
      "description": {
        "fct-descr": "\u003cp\u003eA lens on \u003ccode\u003e\u003ca\u003epktParameter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "(Maybe Text -\u003e f (Maybe Text)) -\u003e Packet -\u003e f Packet",
        "fct-source": "src/Text-Damn-Packet-Internal.html#pktParameterL",
        "fct-type": "function",
        "title": "pktParameterL"
      },
      "index": {
        "description": "lens on pktParameter",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "pktParameterL",
        "normalized": "(Maybe Text-\u003ea(Maybe Text))-\u003ePacket-\u003ea Packet",
        "package": "damnpacket",
        "partial": "Parameter",
        "signature": "(Maybe Text-\u003ef(Maybe Text))-\u003ePacket-\u003ef Packet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktSubpacket",
      "description": {
        "fct-descr": "\u003cp\u003eDue to the way dAmn packets are designed, it's not possible to\n unambiguously determine whether a packet has a subpacket or just a body.\n Thus you will need to request a subpacket yourself.\n\u003c/p\u003e",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "Packet -\u003e Either String Packet",
        "fct-source": "src/Text-Damn-Packet-Parser.html#pktSubpacket",
        "fct-type": "function",
        "title": "pktSubpacket"
      },
      "index": {
        "description": "Due to the way dAmn packets are designed it not possible to unambiguously determine whether packet has subpacket or just body Thus you will need to request subpacket yourself",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "pktSubpacket",
        "normalized": "Packet-\u003eEither String Packet",
        "package": "damnpacket",
        "partial": "Subpacket",
        "signature": "Packet-\u003eEither String Packet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktSubpacket-39-",
      "description": {
        "fct-descr": "\u003cp\u003eUse when you don't care about the reason for parse failure.\n\u003c/p\u003e",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "Packet -\u003e Maybe Packet",
        "fct-source": "src/Text-Damn-Packet-Parser.html#pktSubpacket%27",
        "fct-type": "function",
        "title": "pktSubpacket'"
      },
      "index": {
        "description": "Use when you don care about the reason for parse failure",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "pktSubpacket'",
        "normalized": "Packet-\u003eMaybe Packet",
        "package": "damnpacket",
        "partial": "Subpacket'",
        "signature": "Packet-\u003eMaybe Packet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:pktSubpacketL",
      "description": {
        "fct-descr": "\u003cp\u003eA lens on \u003ccode\u003e\u003ca\u003epktSubpacket'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "(Maybe Packet -\u003e f (Maybe Packet)) -\u003e Packet -\u003e f Packet",
        "fct-source": "src/Text-Damn-Packet-Parser.html#pktSubpacketL",
        "fct-type": "function",
        "title": "pktSubpacketL"
      },
      "index": {
        "description": "lens on pktSubpacket",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "pktSubpacketL",
        "normalized": "(Maybe Packet-\u003ea(Maybe Packet))-\u003ePacket-\u003ea Packet",
        "package": "damnpacket",
        "partial": "Subpacket",
        "signature": "(Maybe Packet-\u003ef(Maybe Packet))-\u003ePacket-\u003ef Packet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/damnpacket/docs/Text-Damn-Packet.html#v:render",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erender\u003c/a\u003e\u003c/code\u003e converts a packet back into the dAmn text format.\n This is used by \u003ccode\u003e\u003ca\u003epktSubpacketL\u003c/a\u003e\u003c/code\u003e to fulfill the lens laws, but you might\n find it useful if you want to write packets to dAmn.\n\u003c/p\u003e",
        "fct-module": "Text.Damn.Packet",
        "fct-package": "damnpacket",
        "fct-signature": "Packet -\u003e Text",
        "fct-source": "src/Text-Damn-Packet-Parser.html#render",
        "fct-type": "function",
        "title": "render"
      },
      "index": {
        "description": "render converts packet back into the dAmn text format This is used by pktSubpacketL to fulfill the lens laws but you might find it useful if you want to write packets to dAmn",
        "hierarchy": "Text Damn Packet",
        "module": "Text.Damn.Packet",
        "name": "render",
        "normalized": "Packet-\u003eText",
        "package": "damnpacket",
        "partial": "",
        "signature": "Packet-\u003eText"
      }
    }
  }
]