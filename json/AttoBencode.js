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
        "word": "AttoBencode"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AttoBencode.Parser",
          "name": "Parser",
          "package": "AttoBencode",
          "source": "src/Data-AttoBencode-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data AttoBencode Parser",
          "module": "Data.AttoBencode.Parser",
          "name": "Parser",
          "package": "AttoBencode",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser for Bencode values\n\u003c/p\u003e",
          "module": "Data.AttoBencode.Parser",
          "name": "bValue",
          "package": "AttoBencode",
          "signature": "Parser BValue",
          "source": "src/Data-AttoBencode-Parser.html#bValue",
          "type": "function"
        },
        "index": {
          "description": "Parser for Bencode values",
          "hierarchy": "Data AttoBencode Parser",
          "module": "Data.AttoBencode.Parser",
          "name": "bValue",
          "package": "AttoBencode",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode-Parser.html#v:bValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserialise a bencoded ByteString.\n If parsing or conversion fails, Nothing is returned.\n\u003c/p\u003e",
          "module": "[\"Data.AttoBencode.Parser\",\"Data.AttoBencode\"]",
          "name": "decode",
          "package": "AttoBencode",
          "signature": "ByteString -\u003e Maybe a",
          "source": "src/Data-AttoBencode-Parser.html#decode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode-Parser.html#v:decode\",\"http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode.html#v:decode\"]"
        },
        "index": {
          "description": "Deserialise bencoded ByteString If parsing or conversion fails Nothing is returned",
          "hierarchy": "Data AttoBencode Parser",
          "module": "Data.AttoBencode.Parser",
          "name": "decode",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "AttoBencode",
          "signature": "ByteString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode-Parser.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AttoBencode",
          "name": "AttoBencode",
          "package": "AttoBencode",
          "source": "src/Data-AttoBencode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data AttoBencode",
          "module": "Data.AttoBencode",
          "name": "AttoBencode",
          "package": "AttoBencode",
          "partial": "Atto Bencode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Haskell data type for Bencode values\n\u003c/p\u003e",
          "module": "Data.AttoBencode",
          "name": "BValue",
          "package": "AttoBencode",
          "source": "src/Data-AttoBencode-Types.html#BValue",
          "type": "data"
        },
        "index": {
          "description": "The Haskell data type for Bencode values",
          "hierarchy": "Data AttoBencode",
          "module": "Data.AttoBencode",
          "name": "BValue",
          "package": "AttoBencode",
          "partial": "BValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode.html#t:BValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Bencode dictionary. Dictionaries have \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e keys and \u003ccode\u003e\u003ca\u003eBValue\u003c/a\u003e\u003c/code\u003e\n   values.\n\u003c/p\u003e",
          "module": "Data.AttoBencode",
          "name": "Dict",
          "package": "AttoBencode",
          "source": "src/Data-AttoBencode-Types.html#Dict",
          "type": "type"
        },
        "index": {
          "description": "Bencode dictionary Dictionaries have ByteString keys and BValue values",
          "hierarchy": "Data AttoBencode",
          "module": "Data.AttoBencode",
          "name": "Dict",
          "package": "AttoBencode",
          "partial": "Dict",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode.html#t:Dict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted from a \u003ccode\u003e\u003ca\u003eBValue\u003c/a\u003e\u003c/code\u003e. The conversion can fail.\n\u003c/p\u003e",
          "module": "Data.AttoBencode",
          "name": "FromBencode",
          "package": "AttoBencode",
          "source": "src/Data-AttoBencode-Types.html#FromBencode",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted from BValue The conversion can fail",
          "hierarchy": "Data AttoBencode",
          "module": "Data.AttoBencode",
          "name": "FromBencode",
          "package": "AttoBencode",
          "partial": "From Bencode",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode.html#t:FromBencode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted to a \u003ccode\u003e\u003ca\u003eBValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.AttoBencode",
          "name": "ToBencode",
          "package": "AttoBencode",
          "source": "src/Data-AttoBencode-Types.html#ToBencode",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted to BValue",
          "hierarchy": "Data AttoBencode",
          "module": "Data.AttoBencode",
          "name": "ToBencode",
          "package": "AttoBencode",
          "partial": "To Bencode",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode.html#t:ToBencode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a (key, value) tuple from a ByteString key and some bencode-able\n   value. Can be used with the \u003ccode\u003e\u003ca\u003edict\u003c/a\u003e\u003c/code\u003e function as a convenient way to create\n   \u003ccode\u003e\u003ca\u003eBDict\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.AttoBencode",
          "name": "(.=)",
          "package": "AttoBencode",
          "signature": "ByteString -\u003e a -\u003e (ByteString, BValue)",
          "source": "src/Data-AttoBencode-Types.html#.%3D",
          "type": "function"
        },
        "index": {
          "description": "Create key value tuple from ByteString key and some bencode-able value Can be used with the dict function as convenient way to create BDict",
          "hierarchy": "Data AttoBencode",
          "module": "Data.AttoBencode",
          "name": "(.=) .=",
          "normalized": "ByteString-\u003ea-\u003e(ByteString,BValue)",
          "package": "AttoBencode",
          "signature": "ByteString-\u003ea-\u003e(ByteString,BValue)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode.html#v:.-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up the value corresponding to a (ByteString) key from a dictionary.\n   Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key is not in the dictionary or if the \u003ccode\u003e\u003ca\u003eBValue\u003c/a\u003e\u003c/code\u003e\n   cannot be converted to the expected type.\n\u003c/p\u003e",
          "module": "Data.AttoBencode",
          "name": "(.:)",
          "package": "AttoBencode",
          "signature": "Dict -\u003e ByteString -\u003e Maybe a",
          "source": "src/Data-AttoBencode-Types.html#.%3A",
          "type": "function"
        },
        "index": {
          "description": "Look up the value corresponding to ByteString key from dictionary Returns Nothing if the key is not in the dictionary or if the BValue cannot be converted to the expected type",
          "hierarchy": "Data AttoBencode",
          "module": "Data.AttoBencode",
          "name": "(.:) .:",
          "normalized": "Dict-\u003eByteString-\u003eMaybe a",
          "package": "AttoBencode",
          "signature": "Dict-\u003eByteString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode.html#v:.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AttoBencode",
          "name": "BDict",
          "package": "AttoBencode",
          "signature": "BDict !Dict",
          "source": "src/Data-AttoBencode-Types.html#BValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AttoBencode",
          "module": "Data.AttoBencode",
          "name": "BDict",
          "package": "AttoBencode",
          "partial": "BDict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode.html#v:BDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AttoBencode",
          "name": "BInt",
          "package": "AttoBencode",
          "signature": "BInt !Integer",
          "source": "src/Data-AttoBencode-Types.html#BValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AttoBencode",
          "module": "Data.AttoBencode",
          "name": "BInt",
          "package": "AttoBencode",
          "partial": "BInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode.html#v:BInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AttoBencode",
          "name": "BList",
          "package": "AttoBencode",
          "signature": "BList ![BValue]",
          "source": "src/Data-AttoBencode-Types.html#BValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AttoBencode",
          "module": "Data.AttoBencode",
          "name": "BList",
          "normalized": "BList[BValue]",
          "package": "AttoBencode",
          "partial": "BList",
          "signature": "BList[BValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode.html#v:BList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AttoBencode",
          "name": "BString",
          "package": "AttoBencode",
          "signature": "BString !ByteString",
          "source": "src/Data-AttoBencode-Types.html#BValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AttoBencode",
          "module": "Data.AttoBencode",
          "name": "BString",
          "package": "AttoBencode",
          "partial": "BString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode.html#v:BString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a BDict from a list of (key, value) tuples.\n\u003c/p\u003e",
          "module": "Data.AttoBencode",
          "name": "dict",
          "package": "AttoBencode",
          "signature": "[(ByteString, BValue)] -\u003e BValue",
          "source": "src/Data-AttoBencode-Types.html#dict",
          "type": "function"
        },
        "index": {
          "description": "Make BDict from list of key value tuples",
          "hierarchy": "Data AttoBencode",
          "module": "Data.AttoBencode",
          "name": "dict",
          "normalized": "[(ByteString,BValue)]-\u003eBValue",
          "package": "AttoBencode",
          "signature": "[(ByteString,BValue)]-\u003eBValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode.html#v:dict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialise a Bencode value to a (strict) ByteString\n\u003c/p\u003e",
          "module": "Data.AttoBencode",
          "name": "encode",
          "package": "AttoBencode",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-AttoBencode-Encode.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Serialise Bencode value to strict ByteString",
          "hierarchy": "Data AttoBencode",
          "module": "Data.AttoBencode",
          "name": "encode",
          "normalized": "a-\u003eByteString",
          "package": "AttoBencode",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AttoBencode",
          "name": "fromBencode",
          "package": "AttoBencode",
          "signature": "BValue -\u003e Maybe a",
          "source": "src/Data-AttoBencode-Types.html#fromBencode",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data AttoBencode",
          "module": "Data.AttoBencode",
          "name": "fromBencode",
          "normalized": "BValue-\u003eMaybe a",
          "package": "AttoBencode",
          "partial": "Bencode",
          "signature": "BValue-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode.html#v:fromBencode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AttoBencode",
          "name": "toBencode",
          "package": "AttoBencode",
          "signature": "a -\u003e BValue",
          "source": "src/Data-AttoBencode-Types.html#toBencode",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data AttoBencode",
          "module": "Data.AttoBencode",
          "name": "toBencode",
          "normalized": "a-\u003eBValue",
          "package": "AttoBencode",
          "partial": "Bencode",
          "signature": "a-\u003eBValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AttoBencode/docs/Data-AttoBencode.html#v:toBencode"
      }
    }
  ]
]