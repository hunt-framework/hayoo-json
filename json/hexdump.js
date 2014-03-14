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
        "word": "hexdump"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Hexdump",
          "name": "Hexdump",
          "package": "hexdump",
          "source": "src/Text-Hexdump.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Hexdump",
          "module": "Text.Hexdump",
          "name": "Hexdump",
          "package": "hexdump",
          "partial": "Hexdump",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hexdump/docs/Text-Hexdump.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a printable character, or a dot.\n\u003c/p\u003e\u003cp\u003eReturn a string containing a pretty hexdump of xs using addresses\n starting at n.\n\u003c/p\u003e",
          "module": "Text.Hexdump",
          "name": "hexdump",
          "package": "hexdump",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Text-Hexdump.html#hexdump",
          "type": "function"
        },
        "index": {
          "description": "Return printable character or dot Return string containing pretty hexdump of xs using addresses starting at",
          "hierarchy": "Text Hexdump",
          "module": "Text.Hexdump",
          "name": "hexdump",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "hexdump",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hexdump/docs/Text-Hexdump.html#v:hexdump"
      }
    }
  ]
]