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
        "word": "pnm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLower-level functions for parsing PNM image format headers.  Most users\nshouldn't need to import this module directly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.PNM.Parse",
          "name": "Parse",
          "package": "pnm",
          "source": "src/Codec-PNM-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "Lower-level functions for parsing PNM image format headers Most users shouldn need to import this module directly",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "Parse",
          "package": "pnm",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of parsing.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "Parse",
          "package": "pnm",
          "source": "src/Codec-PNM-Parse.html#Parse",
          "type": "data"
        },
        "index": {
          "description": "The result of parsing",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "Parse",
          "package": "pnm",
          "partial": "Parse",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#t:Parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "(++)",
          "package": "pnm",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString",
          "source": "src/Codec-PNM-Parse.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "Alias for append",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "(++) ++",
          "normalized": "ByteString-\u003eByteString-\u003eByteString",
          "package": "pnm",
          "signature": "ByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.PNM.Parse\",\"Codec.PNM\"]",
          "name": "Empty",
          "package": "pnm",
          "signature": "Empty",
          "source": "src/Codec-PNM-Parse.html#Parse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:Empty\",\"http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:Empty\"]"
        },
        "index": {
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "Empty",
          "package": "pnm",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.PNM.Parse\",\"Codec.PNM\"]",
          "name": "Parse",
          "package": "pnm",
          "signature": "Parse",
          "source": "src/Codec-PNM-Parse.html#Parse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:Parse\",\"http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:Parse\"]"
        },
        "index": {
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "Parse",
          "package": "pnm",
          "partial": "Parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:Parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.PNM.Parse\",\"Codec.PNM\"]",
          "name": "Wrong",
          "package": "pnm",
          "signature": "Wrong",
          "source": "src/Codec-PNM-Parse.html#Parse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:Wrong\",\"http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:Wrong\"]"
        },
        "index": {
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "Wrong",
          "package": "pnm",
          "partial": "Wrong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:Wrong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe next non-comment character.  Comments can occur in the middle\n    of what might be considered tokens.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "char",
          "package": "pnm",
          "signature": "ByteString -\u003e Parse Word8",
          "source": "src/Codec-PNM-Parse.html#char",
          "type": "function"
        },
        "index": {
          "description": "The next non-comment character Comments can occur in the middle of what might be considered tokens",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "char",
          "normalized": "ByteString-\u003eParse Word",
          "package": "pnm",
          "signature": "ByteString-\u003eParse Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhite space characters.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "cr",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#ht",
          "type": "function"
        },
        "index": {
          "description": "White space characters",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "cr",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:cr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit characters.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "d0",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#d0",
          "type": "function"
        },
        "index": {
          "description": "Decimal digit characters",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "d0",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:d0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit characters.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "d1",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#d0",
          "type": "function"
        },
        "index": {
          "description": "Decimal digit characters",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "d1",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:d1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit characters.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "d2",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#d0",
          "type": "function"
        },
        "index": {
          "description": "Decimal digit characters",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "d2",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:d2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit characters.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "d3",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#d0",
          "type": "function"
        },
        "index": {
          "description": "Decimal digit characters",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "d3",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:d3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit characters.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "d4",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#d0",
          "type": "function"
        },
        "index": {
          "description": "Decimal digit characters",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "d4",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:d4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit characters.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "d5",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#d0",
          "type": "function"
        },
        "index": {
          "description": "Decimal digit characters",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "d5",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:d5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit characters.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "d6",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#d0",
          "type": "function"
        },
        "index": {
          "description": "Decimal digit characters",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "d6",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:d6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit characters.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "d7",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#d0",
          "type": "function"
        },
        "index": {
          "description": "Decimal digit characters",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "d7",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:d7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit characters.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "d8",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#d0",
          "type": "function"
        },
        "index": {
          "description": "Decimal digit characters",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "d8",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:d8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit characters.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "d9",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#d0",
          "type": "function"
        },
        "index": {
          "description": "Decimal digit characters",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "d9",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:d9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber conversion.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "decimal",
          "package": "pnm",
          "signature": "ByteString -\u003e Maybe Integer",
          "source": "src/Codec-PNM-Parse.html#decimal",
          "type": "function"
        },
        "index": {
          "description": "Number conversion",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "decimal",
          "normalized": "ByteString-\u003eMaybe Integer",
          "package": "pnm",
          "signature": "ByteString-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop input while a predicate holds.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "dropWhile",
          "package": "pnm",
          "signature": "(Word8 -\u003e Bool) -\u003e (ByteString -\u003e Parse Word8) -\u003e ByteString -\u003e Parse ()",
          "source": "src/Codec-PNM-Parse.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "Drop input while predicate holds",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "dropWhile",
          "normalized": "(Word-\u003eBool)-\u003e(ByteString-\u003eParse Word)-\u003eByteString-\u003eParse()",
          "package": "pnm",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003e(ByteString-\u003eParse Word)-\u003eByteString-\u003eParse()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhite space characters.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "ff",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#ht",
          "type": "function"
        },
        "index": {
          "description": "White space characters",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "ff",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:ff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComment start character.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "hash",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#hash",
          "type": "function"
        },
        "index": {
          "description": "Comment start character",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "hash",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhite space characters.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "ht",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#ht",
          "type": "function"
        },
        "index": {
          "description": "White space characters",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "ht",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:ht"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter classes.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "isDigit",
          "package": "pnm",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Codec-PNM-Parse.html#isSpace",
          "type": "function"
        },
        "index": {
          "description": "Character classes",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "isDigit",
          "normalized": "Word-\u003eBool",
          "package": "pnm",
          "partial": "Digit",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:isDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter classes.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "isEndComment",
          "package": "pnm",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Codec-PNM-Parse.html#isSpace",
          "type": "function"
        },
        "index": {
          "description": "Character classes",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "isEndComment",
          "normalized": "Word-\u003eBool",
          "package": "pnm",
          "partial": "End Comment",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:isEndComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter classes.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "isSpace",
          "package": "pnm",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Codec-PNM-Parse.html#isSpace",
          "type": "function"
        },
        "index": {
          "description": "Character classes",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "isSpace",
          "normalized": "Word-\u003eBool",
          "package": "pnm",
          "partial": "Space",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:isSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter classes.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "isStartComment",
          "package": "pnm",
          "signature": "Word8 -\u003e Bool",
          "source": "src/Codec-PNM-Parse.html#isSpace",
          "type": "function"
        },
        "index": {
          "description": "Character classes",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "isStartComment",
          "normalized": "Word-\u003eBool",
          "package": "pnm",
          "partial": "Start Comment",
          "signature": "Word-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:isStartComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhite space characters.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "lf",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#ht",
          "type": "function"
        },
        "index": {
          "description": "White space characters",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "lf",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:lf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a positive decimal number.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "number",
          "package": "pnm",
          "signature": "ByteString -\u003e Parse Integer",
          "source": "src/Codec-PNM-Parse.html#number",
          "type": "function"
        },
        "index": {
          "description": "Parse positive decimal number",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "number",
          "normalized": "ByteString-\u003eParse Integer",
          "package": "pnm",
          "signature": "ByteString-\u003eParse Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single space.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "oneSpace",
          "package": "pnm",
          "signature": "ByteString -\u003e Parse ()",
          "source": "src/Codec-PNM-Parse.html#oneSpace",
          "type": "function"
        },
        "index": {
          "description": "Parse single space",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "oneSpace",
          "normalized": "ByteString-\u003eParse()",
          "package": "pnm",
          "partial": "Space",
          "signature": "ByteString-\u003eParse()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:oneSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.PNM.Parse\",\"Codec.PNM\"]",
          "name": "parseMalformed",
          "package": "pnm",
          "signature": "ByteString",
          "source": "src/Codec-PNM-Parse.html#Parse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:parseMalformed\",\"http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:parseMalformed\"]"
        },
        "index": {
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "parseMalformed",
          "package": "pnm",
          "partial": "Malformed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:parseMalformed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.PNM.Parse\",\"Codec.PNM\"]",
          "name": "parseRawResult",
          "package": "pnm",
          "signature": "ByteString",
          "source": "src/Codec-PNM-Parse.html#Parse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:parseRawResult\",\"http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:parseRawResult\"]"
        },
        "index": {
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "parseRawResult",
          "package": "pnm",
          "partial": "Raw Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:parseRawResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.PNM.Parse\",\"Codec.PNM\"]",
          "name": "parseRemainder",
          "package": "pnm",
          "signature": "ByteString",
          "source": "src/Codec-PNM-Parse.html#Parse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:parseRemainder\",\"http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:parseRemainder\"]"
        },
        "index": {
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "parseRemainder",
          "package": "pnm",
          "partial": "Remainder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:parseRemainder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.PNM.Parse\",\"Codec.PNM\"]",
          "name": "parseResult",
          "package": "pnm",
          "signature": "p",
          "source": "src/Codec-PNM-Parse.html#Parse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:parseResult\",\"http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:parseResult\"]"
        },
        "index": {
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "parseResult",
          "package": "pnm",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:parseResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe next character.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "rawChar",
          "package": "pnm",
          "signature": "ByteString -\u003e Parse Word8",
          "source": "src/Codec-PNM-Parse.html#rawChar",
          "type": "function"
        },
        "index": {
          "description": "The next character",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "rawChar",
          "normalized": "ByteString-\u003eParse Word",
          "package": "pnm",
          "partial": "Char",
          "signature": "ByteString-\u003eParse Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:rawChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhite space characters.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "space",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#ht",
          "type": "function"
        },
        "index": {
          "description": "White space characters",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "space",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a string.  Crashes hard on non-ASCII input.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "str",
          "package": "pnm",
          "signature": "String -\u003e ByteString",
          "source": "src/Codec-PNM-Parse.html#str",
          "type": "function"
        },
        "index": {
          "description": "Convert from string Crashes hard on non-ASCII input",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "str",
          "normalized": "String-\u003eByteString",
          "package": "pnm",
          "signature": "String-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a fixed string.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "string",
          "package": "pnm",
          "signature": "ByteString -\u003e ByteString -\u003e Parse ()",
          "source": "src/Codec-PNM-Parse.html#string",
          "type": "function"
        },
        "index": {
          "description": "Parse fixed string",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "string",
          "normalized": "ByteString-\u003eByteString-\u003eParse()",
          "package": "pnm",
          "signature": "ByteString-\u003eByteString-\u003eParse()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake input until a predicate holds.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "takeUntil",
          "package": "pnm",
          "signature": "(Word8 -\u003e Bool) -\u003e (ByteString -\u003e Parse Word8) -\u003e ByteString -\u003e Parse ByteString",
          "source": "src/Codec-PNM-Parse.html#takeUntil",
          "type": "function"
        },
        "index": {
          "description": "Take input until predicate holds",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "takeUntil",
          "normalized": "(Word-\u003eBool)-\u003e(ByteString-\u003eParse Word)-\u003eByteString-\u003eParse ByteString",
          "package": "pnm",
          "partial": "Until",
          "signature": "(Word-\u003eBool)-\u003e(ByteString-\u003eParse Word)-\u003eByteString-\u003eParse ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:takeUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a token.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "token",
          "package": "pnm",
          "signature": "ByteString -\u003e Parse ByteString",
          "source": "src/Codec-PNM-Parse.html#token",
          "type": "function"
        },
        "index": {
          "description": "Parse token",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "token",
          "normalized": "ByteString-\u003eParse ByteString",
          "package": "pnm",
          "signature": "ByteString-\u003eParse ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhite space characters.\n\u003c/p\u003e",
          "module": "Codec.PNM.Parse",
          "name": "vt",
          "package": "pnm",
          "signature": "Word8",
          "source": "src/Codec-PNM-Parse.html#ht",
          "type": "function"
        },
        "index": {
          "description": "White space characters",
          "hierarchy": "Codec PNM Parse",
          "module": "Codec.PNM.Parse",
          "name": "vt",
          "package": "pnm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM-Parse.html#v:vt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePNM image format header parsing and pretty printing.\n\u003c/p\u003e\u003cp\u003ePNM is PBM + PGM + PPM, a family of lowest common denominator image file formats.\n\u003c/p\u003e\u003cp\u003eReferences: \u003ca\u003ehttp://netpbm.sourceforge.net/doc/pnm.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.PNM",
          "name": "PNM",
          "package": "pnm",
          "source": "src/Codec-PNM.html",
          "type": "module"
        },
        "index": {
          "description": "PNM image format header parsing and pretty printing PNM is PBM PGM PPM family of lowest common denominator image file formats References http netpbm.sourceforge.net doc pnm.html",
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "PNM",
          "package": "pnm",
          "partial": "PNM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePNM image headers.\n\u003c/p\u003e",
          "module": "Codec.PNM",
          "name": "PNM",
          "package": "pnm",
          "source": "src/Codec-PNM.html#PNM",
          "type": "data"
        },
        "index": {
          "description": "PNM image headers",
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "PNM",
          "package": "pnm",
          "partial": "PNM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#t:PNM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of parsing.\n\u003c/p\u003e",
          "module": "Codec.PNM",
          "name": "Parse",
          "package": "pnm",
          "source": "src/Codec-PNM-Parse.html#Parse",
          "type": "data"
        },
        "index": {
          "description": "The result of parsing",
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "Parse",
          "package": "pnm",
          "partial": "Parse",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#t:Parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.PNM",
          "name": "PBM",
          "package": "pnm",
          "signature": "PBM",
          "source": "src/Codec-PNM.html#PNM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "PBM",
          "package": "pnm",
          "partial": "PBM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:PBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.PNM",
          "name": "PGM",
          "package": "pnm",
          "signature": "PGM",
          "source": "src/Codec-PNM.html#PNM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "PGM",
          "package": "pnm",
          "partial": "PGM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:PGM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.PNM",
          "name": "PPM",
          "package": "pnm",
          "signature": "PPM",
          "source": "src/Codec-PNM.html#PNM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "PPM",
          "package": "pnm",
          "partial": "PPM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:PPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a sequence of binary PNM images.\n\u003c/p\u003e\u003cp\u003eMalformed input (including huge raster sizes or plain images)\n    is treated as end-of-image-stream.\n\u003c/p\u003e\u003cp\u003eThe precondition that the raster is of the correct length is not\n    checked, so malformed output is possible.\n\u003c/p\u003e\u003cp\u003eHeader comments are not preserved.\n\u003c/p\u003e",
          "module": "Codec.PNM",
          "name": "onPNMs",
          "package": "pnm",
          "signature": "(PNM -\u003e ByteString -\u003e (PNM, ByteString)) -\u003e ByteString -\u003e ByteString",
          "source": "src/Codec-PNM.html#onPNMs",
          "type": "function"
        },
        "index": {
          "description": "Process sequence of binary PNM images Malformed input including huge raster sizes or plain images is treated as end-of-image-stream The precondition that the raster is of the correct length is not checked so malformed output is possible Header comments are not preserved",
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "onPNMs",
          "normalized": "(PNM-\u003eByteString-\u003e(PNM,ByteString))-\u003eByteString-\u003eByteString",
          "package": "pnm",
          "partial": "PNMs",
          "signature": "(PNM-\u003eByteString-\u003e(PNM,ByteString))-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:onPNMs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess a sequence of binary PNM images.\n\u003c/p\u003e\u003cp\u003eMalformed input (including huge raster sizes or plain images)\n    is treated as end-of-image-stream.\n\u003c/p\u003e\u003cp\u003eThe precondition that the raster is of the correct length is not\n    checked, so malformed output is possible.\n\u003c/p\u003e\u003cp\u003eHeader comments are preserved.  Assuming well-formed input:\n\u003c/p\u003e\u003cpre\u003e onPNMs' (\\_ r -\u003e r) = id\n\u003c/pre\u003e",
          "module": "Codec.PNM",
          "name": "onPNMs'",
          "package": "pnm",
          "signature": "(PNM -\u003e ByteString -\u003e ByteString) -\u003e ByteString -\u003e ByteString",
          "source": "src/Codec-PNM.html#onPNMs%27",
          "type": "function"
        },
        "index": {
          "description": "Process sequence of binary PNM images Malformed input including huge raster sizes or plain images is treated as end-of-image-stream The precondition that the raster is of the correct length is not checked so malformed output is possible Header comments are preserved Assuming well-formed input onPNMs id",
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "onPNMs'",
          "normalized": "(PNM-\u003eByteString-\u003eByteString)-\u003eByteString-\u003eByteString",
          "package": "pnm",
          "partial": "PNMs'",
          "signature": "(PNM-\u003eByteString-\u003eByteString)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:onPNMs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.PNM",
          "name": "pnmHeight",
          "package": "pnm",
          "signature": "Integer",
          "source": "src/Codec-PNM.html#PNM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "pnmHeight",
          "package": "pnm",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:pnmHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.PNM",
          "name": "pnmMaxVal",
          "package": "pnm",
          "signature": "Integer",
          "source": "src/Codec-PNM.html#PNM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "pnmMaxVal",
          "package": "pnm",
          "partial": "Max Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:pnmMaxVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a PNM image header.\n\u003c/p\u003e",
          "module": "Codec.PNM",
          "name": "pnmParse",
          "package": "pnm",
          "signature": "ByteString -\u003e Parse PNM",
          "source": "src/Codec-PNM.html#pnmParse",
          "type": "function"
        },
        "index": {
          "description": "Parse PNM image header",
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "pnmParse",
          "normalized": "ByteString-\u003eParse PNM",
          "package": "pnm",
          "partial": "Parse",
          "signature": "ByteString-\u003eParse PNM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:pnmParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.PNM",
          "name": "pnmPlain",
          "package": "pnm",
          "signature": "Bool",
          "source": "src/Codec-PNM.html#PNM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "pnmPlain",
          "package": "pnm",
          "partial": "Plain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:pnmPlain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print a PNM image header without any comments.\n\u003c/p\u003e",
          "module": "Codec.PNM",
          "name": "pnmPretty",
          "package": "pnm",
          "signature": "PNM -\u003e ByteString",
          "source": "src/Codec-PNM.html#pnmPretty",
          "type": "function"
        },
        "index": {
          "description": "Pretty-print PNM image header without any comments",
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "pnmPretty",
          "normalized": "PNM-\u003eByteString",
          "package": "pnm",
          "partial": "Pretty",
          "signature": "PNM-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:pnmPretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the raster size in bytes for binary PNM images.\n\u003c/p\u003e",
          "module": "Codec.PNM",
          "name": "pnmRasterBytes",
          "package": "pnm",
          "signature": "PNM -\u003e Maybe Integer",
          "source": "src/Codec-PNM.html#pnmRasterBytes",
          "type": "function"
        },
        "index": {
          "description": "Compute the raster size in bytes for binary PNM images",
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "pnmRasterBytes",
          "normalized": "PNM-\u003eMaybe Integer",
          "package": "pnm",
          "partial": "Raster Bytes",
          "signature": "PNM-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:pnmRasterBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.PNM",
          "name": "pnmWidth",
          "package": "pnm",
          "signature": "Integer",
          "source": "src/Codec-PNM.html#PNM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "pnmWidth",
          "package": "pnm",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:pnmWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a sequence of binary PNM images.\n\u003c/p\u003e\u003cp\u003eMalformed input (including huge raster sizes or plain images)\n    is treated as end-of-image-stream.\n\u003c/p\u003e",
          "module": "Codec.PNM",
          "name": "pnms",
          "package": "pnm",
          "signature": "ByteString -\u003e [(PNM, ByteString)]",
          "source": "src/Codec-PNM.html#pnms",
          "type": "function"
        },
        "index": {
          "description": "Parse sequence of binary PNM images Malformed input including huge raster sizes or plain images is treated as end-of-image-stream",
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "pnms",
          "normalized": "ByteString-\u003e[(PNM,ByteString)]",
          "package": "pnm",
          "signature": "ByteString-\u003e[(PNM,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:pnms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print a sequence of binary PNM images.\n\u003c/p\u003e\u003cp\u003eThe precondition that the raster is of the correct length is not\n    checked, so malformed output is possible.\n\u003c/p\u003e",
          "module": "Codec.PNM",
          "name": "unpnms",
          "package": "pnm",
          "signature": "[(PNM, ByteString)] -\u003e ByteString",
          "source": "src/Codec-PNM.html#unpnms",
          "type": "function"
        },
        "index": {
          "description": "Pretty-print sequence of binary PNM images The precondition that the raster is of the correct length is not checked so malformed output is possible",
          "hierarchy": "Codec PNM",
          "module": "Codec.PNM",
          "name": "unpnms",
          "normalized": "[(PNM,ByteString)]-\u003eByteString",
          "package": "pnm",
          "signature": "[(PNM,ByteString)]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pnm/docs/Codec-PNM.html#v:unpnms"
      }
    }
  ]
]