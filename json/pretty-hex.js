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
        "word": "pretty-hex"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hexdump",
          "name": "Hexdump",
          "package": "pretty-hex",
          "source": "src/Hexdump.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hexdump",
          "module": "Hexdump",
          "name": "Hexdump",
          "package": "pretty-hex",
          "partial": "Hexdump",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pretty-hex/docs/Hexdump.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eprettyHex\u003c/a\u003e\u003c/code\u003e renders a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e as a multi-line \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e complete with\n addressing, hex digits, and ASCII representation.\n\u003c/p\u003e\u003cp\u003eSample output\n\u003c/p\u003e\u003cpre\u003eLength: 100 (0x64) bytes\n0000:   4b c1 ad 8a  5b 47 d7 57  48 64 e7 cc  5e b5 2f 6e   K...[G.WHd..^./n\n0010:   c5 b3 a4 73  44 3b 97 53  99 2d 54 e7  1b 2f 91 12   ...sD;.S.-T../..\n0020:   c8 1a ff c4  3b 2b 72 ea  97 e2 9f e2  93 ad 23 79   ....;+r.......#y\n0030:   e8 0f 08 54  02 14 fa 09  f0 2d 34 c9  08 6b e1 64   ...T.....-4..k.d\n0040:   d1 c5 98 7e  d6 a1 98 e2  97 da 46 68  4e 60 11 15   ...~......FhN`..\n0050:   d8 32 c6 0b  70 f5 2e 76  7f 8d f2 3b  ed de 90 c6   .2..p..v...;....\n0060:   93 12 9c e1                                          ....\u003c/pre\u003e",
          "module": "Hexdump",
          "name": "prettyHex",
          "package": "pretty-hex",
          "signature": "ByteString -\u003e String",
          "source": "src/Hexdump.html#prettyHex",
          "type": "function"
        },
        "index": {
          "description": "prettyHex renders ByteString as multi-line String complete with addressing hex digits and ASCII representation Sample output Length x64 bytes c1 ad d7 e7 cc b5 G.WHd c5 b3 a4 e7 sD S.-T c8 ff c4 ea e2 e2 ad e8 fa f0 c9 e1 T.....-4..k.d d1 c5 d6 a1 e2 da FhN d8 c6 f5 f2 ed de c6 p..v e1",
          "hierarchy": "Hexdump",
          "module": "Hexdump",
          "name": "prettyHex",
          "normalized": "ByteString-\u003eString",
          "package": "pretty-hex",
          "partial": "Hex",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-hex/docs/Hexdump.html#v:prettyHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esimpleHex\u003c/a\u003e\u003c/code\u003e converts a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e showing the octets\n grouped in 32-bit words.\n\u003c/p\u003e\u003cp\u003eSample output\n\u003c/p\u003e\u003cpre\u003e4b c1 ad 8a  5b 47 d7 57\u003c/pre\u003e",
          "module": "Hexdump",
          "name": "simpleHex",
          "package": "pretty-hex",
          "signature": "ByteString -\u003e String",
          "source": "src/Hexdump.html#simpleHex",
          "type": "function"
        },
        "index": {
          "description": "simpleHex converts ByteString to String showing the octets grouped in bit words Sample output c1 ad d7",
          "hierarchy": "Hexdump",
          "module": "Hexdump",
          "name": "simpleHex",
          "normalized": "ByteString-\u003eString",
          "package": "pretty-hex",
          "partial": "Hex",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pretty-hex/docs/Hexdump.html#v:simpleHex"
      }
    }
  ]
]