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
        "word": "portable-lines"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PortableLines.ByteString.Lazy",
          "name": "Lazy",
          "package": "portable-lines",
          "source": "src/Text-PortableLines-ByteString-Lazy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text PortableLines ByteString Lazy",
          "module": "Text.PortableLines.ByteString.Lazy",
          "name": "Lazy",
          "package": "portable-lines",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/portable-lines/docs/Text-PortableLines-ByteString-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e function from Data.ByteString.Lazy.Char8, but treat the\n \u003ccode\u003e\"\\r\\n\"\u003c/code\u003e and \u003ccode\u003e\"\\r\"\u003c/code\u003e sequences as newlines too, not just \u003ccode\u003e\"\\n\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInput is assumed to be in ASCII or an ASCII-compatible encoding (at least\n with respect to newline characters).  For example, UTF-8 is fine, but UTF-16\n is not.\n\u003c/p\u003e",
          "module": "Text.PortableLines.ByteString.Lazy",
          "name": "lines8",
          "package": "portable-lines",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Text-PortableLines-ByteString-Lazy.html#lines8",
          "type": "function"
        },
        "index": {
          "description": "Like the lines function from Data.ByteString.Lazy.Char8 but treat the and sequences as newlines too not just Input is assumed to be in ASCII or an ASCII-compatible encoding at least with respect to newline characters For example UTF-8 is fine but UTF-16 is not",
          "hierarchy": "Text PortableLines ByteString Lazy",
          "module": "Text.PortableLines.ByteString.Lazy",
          "name": "lines8",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "portable-lines",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/portable-lines/docs/Text-PortableLines-ByteString-Lazy.html#v:lines8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PortableLines.ByteString",
          "name": "ByteString",
          "package": "portable-lines",
          "source": "src/Text-PortableLines-ByteString.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text PortableLines ByteString",
          "module": "Text.PortableLines.ByteString",
          "name": "ByteString",
          "package": "portable-lines",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/portable-lines/docs/Text-PortableLines-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e function from Data.ByteString.Char8, but treat the\n \u003ccode\u003e\"\\r\\n\"\u003c/code\u003e and \u003ccode\u003e\"\\r\"\u003c/code\u003e sequences as newlines too, not just \u003ccode\u003e\"\\n\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInput is assumed to be in ASCII or an ASCII-compatible encoding (at least\n with respect to newline characters).  For example, UTF-8 is fine, but UTF-16\n is not.\n\u003c/p\u003e",
          "module": "Text.PortableLines.ByteString",
          "name": "lines8",
          "package": "portable-lines",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Text-PortableLines-ByteString.html#lines8",
          "type": "function"
        },
        "index": {
          "description": "Like the lines function from Data.ByteString.Char8 but treat the and sequences as newlines too not just Input is assumed to be in ASCII or an ASCII-compatible encoding at least with respect to newline characters For example UTF-8 is fine but UTF-16 is not",
          "hierarchy": "Text PortableLines ByteString",
          "module": "Text.PortableLines.ByteString",
          "name": "lines8",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "portable-lines",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/portable-lines/docs/Text-PortableLines-ByteString.html#v:lines8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PortableLines",
          "name": "PortableLines",
          "package": "portable-lines",
          "source": "src/Text-PortableLines.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text PortableLines",
          "module": "Text.PortableLines",
          "name": "PortableLines",
          "package": "portable-lines",
          "partial": "Portable Lines",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/portable-lines/docs/Text-PortableLines.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike the \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e function from Prelude, but treat the \u003ccode\u003e\"\\r\\n\"\u003c/code\u003e and\n   \u003ccode\u003e\"\\r\"\u003c/code\u003e sequences as newlines too, not just \u003ccode\u003e\"\\n\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PortableLines",
          "name": "lines",
          "package": "portable-lines",
          "signature": "String -\u003e [String]",
          "source": "src/Text-PortableLines.html#lines",
          "type": "function"
        },
        "index": {
          "description": "Like the lines function from Prelude but treat the and sequences as newlines too not just",
          "hierarchy": "Text PortableLines",
          "module": "Text.PortableLines",
          "name": "lines",
          "normalized": "String-\u003e[String]",
          "package": "portable-lines",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/portable-lines/docs/Text-PortableLines.html#v:lines"
      }
    }
  ]
]