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
        "word": "bitstring"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBig-endian bitstrings. In this context, \"big-endian\" means that\n the bits in the bytes are in the opposite order than what would be\n logical. If you ask me, this is just plain stupid, but some people\n apparently still use it...\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BitString.BigEndian",
          "name": "BigEndian",
          "package": "bitstring",
          "source": "src/Data-BitString-BigEndian.html",
          "type": "module"
        },
        "index": {
          "description": "Big-endian bitstrings In this context big-endian means that the bits in the bytes are in the opposite order than what would be logical If you ask me this is just plain stupid but some people apparently still use it",
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "BigEndian",
          "package": "bitstring",
          "partial": "Big Endian",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "BitString",
          "package": "bitstring",
          "source": "src/Data-BitString-BigEndian.html#BitString",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "BitString",
          "package": "bitstring",
          "partial": "Bit String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#t:BitString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "append",
          "package": "bitstring",
          "signature": "BitString -\u003e BitString -\u003e BitString",
          "source": "src/Data-BitString-BigEndian.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "append",
          "normalized": "BitString-\u003eBitString-\u003eBitString",
          "package": "bitstring",
          "signature": "BitString-\u003eBitString-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBitString\u003c/a\u003e\u003c/code\u003e from a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.BitString.BigEndian",
          "name": "bitString",
          "package": "bitstring",
          "signature": "ByteString -\u003e BitString",
          "source": "src/Data-BitString-BigEndian.html#bitString",
          "type": "function"
        },
        "index": {
          "description": "Create BitString from strict ByteString",
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "bitString",
          "normalized": "ByteString-\u003eBitString",
          "package": "bitstring",
          "partial": "String",
          "signature": "ByteString-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:bitString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBitString\u003c/a\u003e\u003c/code\u003e from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.BitString.BigEndian",
          "name": "bitStringLazy",
          "package": "bitstring",
          "signature": "ByteString -\u003e BitString",
          "source": "src/Data-BitString-BigEndian.html#bitStringLazy",
          "type": "function"
        },
        "index": {
          "description": "Create BitString from lazy ByteString",
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "bitStringLazy",
          "normalized": "ByteString-\u003eBitString",
          "package": "bitstring",
          "partial": "String Lazy",
          "signature": "ByteString-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:bitStringLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "concat",
          "package": "bitstring",
          "signature": "[BitString] -\u003e BitString",
          "source": "src/Data-BitString-BigEndian.html#concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "concat",
          "normalized": "[BitString]-\u003eBitString",
          "package": "bitstring",
          "signature": "[BitString]-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "drop",
          "package": "bitstring",
          "signature": "Int64 -\u003e BitString -\u003e BitString",
          "source": "src/Data-BitString-BigEndian.html#drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "drop",
          "normalized": "Int-\u003eBitString-\u003eBitString",
          "package": "bitstring",
          "signature": "Int-\u003eBitString-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "empty",
          "package": "bitstring",
          "signature": "BitString",
          "source": "src/Data-BitString-BigEndian.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "empty",
          "package": "bitstring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.BitString.BigEndian\",\"Data.BitString\"]",
          "name": "findSubstring",
          "package": "bitstring",
          "signature": "BitString-\u003e BitString-\u003e Maybe Int64",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:findSubstring\",\"http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:findSubstring\"]"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "findSubstring",
          "normalized": "BitString-\u003eBitString-\u003eMaybe Int",
          "package": "bitstring",
          "partial": "Substring",
          "signature": "BitString-\u003eBitString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:findSubstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "foldl'",
          "package": "bitstring",
          "signature": "(a -\u003e Bool -\u003e a) -\u003e a -\u003e BitString -\u003e a",
          "source": "src/Data-BitString-BigEndian.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "foldl'",
          "normalized": "(a-\u003eBool-\u003ea)-\u003ea-\u003eBitString-\u003ea",
          "package": "bitstring",
          "signature": "(a-\u003eBool-\u003ea)-\u003ea-\u003eBitString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "from01List",
          "package": "bitstring",
          "signature": "[Word8] -\u003e BitString",
          "source": "src/Data-BitString-BigEndian.html#from01List",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "from01List",
          "normalized": "[Word]-\u003eBitString",
          "package": "bitstring",
          "partial": "List",
          "signature": "[Word]-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:from01List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "fromList",
          "package": "bitstring",
          "signature": "[Bool] -\u003e BitString",
          "source": "src/Data-BitString-BigEndian.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "fromList",
          "normalized": "[Bool]-\u003eBitString",
          "package": "bitstring",
          "partial": "List",
          "signature": "[Bool]-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "length",
          "package": "bitstring",
          "signature": "BitString -\u003e Int64",
          "source": "src/Data-BitString-BigEndian.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "length",
          "normalized": "BitString-\u003eInt",
          "package": "bitstring",
          "signature": "BitString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "null",
          "package": "bitstring",
          "signature": "BitString -\u003e Bool",
          "source": "src/Data-BitString-BigEndian.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "null",
          "normalized": "BitString-\u003eBool",
          "package": "bitstring",
          "signature": "BitString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "realizeBitString'",
          "package": "bitstring",
          "signature": "BitString -\u003e [ByteString]",
          "source": "src/Data-BitString-BigEndian.html#realizeBitString%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "realizeBitString'",
          "normalized": "BitString-\u003e[ByteString]",
          "package": "bitstring",
          "partial": "Bit String'",
          "signature": "BitString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:realizeBitString-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "realizeBitStringLazy",
          "package": "bitstring",
          "signature": "BitString -\u003e ByteString",
          "source": "src/Data-BitString-BigEndian.html#realizeBitStringLazy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "realizeBitStringLazy",
          "normalized": "BitString-\u003eByteString",
          "package": "bitstring",
          "partial": "Bit String Lazy",
          "signature": "BitString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:realizeBitStringLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "realizeBitStringStrict",
          "package": "bitstring",
          "signature": "BitString -\u003e ByteString",
          "source": "src/Data-BitString-BigEndian.html#realizeBitStringStrict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "realizeBitStringStrict",
          "normalized": "BitString-\u003eByteString",
          "package": "bitstring",
          "partial": "Bit String Strict",
          "signature": "BitString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:realizeBitStringStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "splitAt",
          "package": "bitstring",
          "signature": "Int64 -\u003e BitString -\u003e (BitString, BitString)",
          "source": "src/Data-BitString-BigEndian.html#splitAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "splitAt",
          "normalized": "Int-\u003eBitString-\u003e(BitString,BitString)",
          "package": "bitstring",
          "partial": "At",
          "signature": "Int-\u003eBitString-\u003e(BitString,BitString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "take",
          "package": "bitstring",
          "signature": "Int64 -\u003e BitString -\u003e BitString",
          "source": "src/Data-BitString-BigEndian.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "take",
          "normalized": "Int-\u003eBitString-\u003eBitString",
          "package": "bitstring",
          "signature": "Int-\u003eBitString-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "to01List",
          "package": "bitstring",
          "signature": "BitString -\u003e [Word8]",
          "source": "src/Data-BitString-BigEndian.html#to01List",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "to01List",
          "normalized": "BitString-\u003e[Word]",
          "package": "bitstring",
          "partial": "List",
          "signature": "BitString-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:to01List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString.BigEndian",
          "name": "toList",
          "package": "bitstring",
          "signature": "BitString -\u003e [Bool]",
          "source": "src/Data-BitString-BigEndian.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "toList",
          "normalized": "BitString-\u003e[Bool]",
          "package": "bitstring",
          "partial": "List",
          "signature": "BitString-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBitString\u003c/a\u003e\u003c/code\u003e from a portion of a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n Warning! No boundary checks are performed!\n\u003c/p\u003e",
          "module": "[\"Data.BitString.BigEndian\",\"Data.BitString\"]",
          "name": "unsafeBitString'",
          "package": "bitstring",
          "signature": "Int64-\u003e Int64-\u003e ByteString-\u003e BitString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:unsafeBitString-39-\",\"http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:unsafeBitString-39-\"]"
        },
        "index": {
          "description": "Create BitString from portion of ByteString Warning No boundary checks are performed",
          "hierarchy": "Data BitString BigEndian",
          "module": "Data.BitString.BigEndian",
          "name": "unsafeBitString'",
          "normalized": "Int-\u003eInt-\u003eByteString-\u003eBitString",
          "package": "bitstring",
          "partial": "Bit String'",
          "signature": "Int-\u003eInt-\u003eByteString-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString-BigEndian.html#v:unsafeBitString-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy bitstrings, somewhat similar to lazy bytestrings.\n This module is intended to be imported qualified.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BitString",
          "name": "BitString",
          "package": "bitstring",
          "source": "src/Data-BitString.html",
          "type": "module"
        },
        "index": {
          "description": "Lazy bitstrings somewhat similar to lazy bytestrings This module is intended to be imported qualified",
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "BitString",
          "package": "bitstring",
          "partial": "Bit String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "BitString",
          "package": "bitstring",
          "source": "src/Data-BitString.html#BitString",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "BitString",
          "package": "bitstring",
          "partial": "Bit String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#t:BitString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "append",
          "package": "bitstring",
          "signature": "BitString -\u003e BitString -\u003e BitString",
          "source": "src/Data-BitString.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "append",
          "normalized": "BitString-\u003eBitString-\u003eBitString",
          "package": "bitstring",
          "signature": "BitString-\u003eBitString-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBitString\u003c/a\u003e\u003c/code\u003e from a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.BitString",
          "name": "bitString",
          "package": "bitstring",
          "signature": "ByteString -\u003e BitString",
          "source": "src/Data-BitString.html#bitString",
          "type": "function"
        },
        "index": {
          "description": "Create BitString from strict ByteString",
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "bitString",
          "normalized": "ByteString-\u003eBitString",
          "package": "bitstring",
          "partial": "String",
          "signature": "ByteString-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:bitString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBitString\u003c/a\u003e\u003c/code\u003e from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.BitString",
          "name": "bitStringLazy",
          "package": "bitstring",
          "signature": "ByteString -\u003e BitString",
          "source": "src/Data-BitString.html#bitStringLazy",
          "type": "function"
        },
        "index": {
          "description": "Create BitString from lazy ByteString",
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "bitStringLazy",
          "normalized": "ByteString-\u003eBitString",
          "package": "bitstring",
          "partial": "String Lazy",
          "signature": "ByteString-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:bitStringLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "concat",
          "package": "bitstring",
          "signature": "[BitString] -\u003e BitString",
          "source": "src/Data-BitString.html#concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "concat",
          "normalized": "[BitString]-\u003eBitString",
          "package": "bitstring",
          "signature": "[BitString]-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "drop",
          "package": "bitstring",
          "signature": "Int64 -\u003e BitString -\u003e BitString",
          "source": "src/Data-BitString.html#drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "drop",
          "normalized": "Int-\u003eBitString-\u003eBitString",
          "package": "bitstring",
          "signature": "Int-\u003eBitString-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "empty",
          "package": "bitstring",
          "signature": "BitString",
          "source": "src/Data-BitString.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "empty",
          "package": "bitstring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "foldl'",
          "package": "bitstring",
          "signature": "(a -\u003e Bool -\u003e a) -\u003e a -\u003e BitString -\u003e a",
          "source": "src/Data-BitString.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "foldl'",
          "normalized": "(a-\u003eBool-\u003ea)-\u003ea-\u003eBitString-\u003ea",
          "package": "bitstring",
          "signature": "(a-\u003eBool-\u003ea)-\u003ea-\u003eBitString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "from01List",
          "package": "bitstring",
          "signature": "[Word8] -\u003e BitString",
          "source": "src/Data-BitString.html#from01List",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "from01List",
          "normalized": "[Word]-\u003eBitString",
          "package": "bitstring",
          "partial": "List",
          "signature": "[Word]-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:from01List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "fromList",
          "package": "bitstring",
          "signature": "[Bool] -\u003e BitString",
          "source": "src/Data-BitString.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "fromList",
          "normalized": "[Bool]-\u003eBitString",
          "package": "bitstring",
          "partial": "List",
          "signature": "[Bool]-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "length",
          "package": "bitstring",
          "signature": "BitString -\u003e Int64",
          "source": "src/Data-BitString.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "length",
          "normalized": "BitString-\u003eInt",
          "package": "bitstring",
          "signature": "BitString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "null",
          "package": "bitstring",
          "signature": "BitString -\u003e Bool",
          "source": "src/Data-BitString.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "null",
          "normalized": "BitString-\u003eBool",
          "package": "bitstring",
          "signature": "BitString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "realizeBitString'",
          "package": "bitstring",
          "signature": "BitString -\u003e [ByteString]",
          "source": "src/Data-BitString.html#realizeBitString%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "realizeBitString'",
          "normalized": "BitString-\u003e[ByteString]",
          "package": "bitstring",
          "partial": "Bit String'",
          "signature": "BitString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:realizeBitString-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "realizeBitStringLazy",
          "package": "bitstring",
          "signature": "BitString -\u003e ByteString",
          "source": "src/Data-BitString.html#realizeBitStringLazy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "realizeBitStringLazy",
          "normalized": "BitString-\u003eByteString",
          "package": "bitstring",
          "partial": "Bit String Lazy",
          "signature": "BitString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:realizeBitStringLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "realizeBitStringStrict",
          "package": "bitstring",
          "signature": "BitString -\u003e ByteString",
          "source": "src/Data-BitString.html#realizeBitStringStrict",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "realizeBitStringStrict",
          "normalized": "BitString-\u003eByteString",
          "package": "bitstring",
          "partial": "Bit String Strict",
          "signature": "BitString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:realizeBitStringStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "splitAt",
          "package": "bitstring",
          "signature": "Int64 -\u003e BitString -\u003e (BitString, BitString)",
          "source": "src/Data-BitString.html#splitAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "splitAt",
          "normalized": "Int-\u003eBitString-\u003e(BitString,BitString)",
          "package": "bitstring",
          "partial": "At",
          "signature": "Int-\u003eBitString-\u003e(BitString,BitString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "take",
          "package": "bitstring",
          "signature": "Int64 -\u003e BitString -\u003e BitString",
          "source": "src/Data-BitString.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "take",
          "normalized": "Int-\u003eBitString-\u003eBitString",
          "package": "bitstring",
          "signature": "Int-\u003eBitString-\u003eBitString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "to01List",
          "package": "bitstring",
          "signature": "BitString -\u003e [Word8]",
          "source": "src/Data-BitString.html#to01List",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "to01List",
          "normalized": "BitString-\u003e[Word]",
          "package": "bitstring",
          "partial": "List",
          "signature": "BitString-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:to01List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BitString",
          "name": "toList",
          "package": "bitstring",
          "signature": "BitString -\u003e [Bool]",
          "source": "src/Data-BitString.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BitString",
          "module": "Data.BitString",
          "name": "toList",
          "normalized": "BitString-\u003e[Bool]",
          "package": "bitstring",
          "partial": "List",
          "signature": "BitString-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bitstring/docs/Data-BitString.html#v:toList"
      }
    }
  ]
]