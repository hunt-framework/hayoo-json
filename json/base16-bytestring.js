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
        "word": "base16-bytestring"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast and efficient encoding and decoding of base16-encoded strings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Base16.Lazy",
          "name": "Lazy",
          "package": "base16-bytestring",
          "source": "src/Data-ByteString-Base16-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Fast and efficient encoding and decoding of base16-encoded strings",
          "hierarchy": "Data ByteString Base16 Lazy",
          "module": "Data.ByteString.Base16.Lazy",
          "name": "Lazy",
          "package": "base16-bytestring",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/base16-bytestring/docs/Data-ByteString-Base16-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a string from base16 form. The first element of the\n returned tuple contains the decoded data. The second element starts\n at the first invalid base16 sequence in the original string.\n\u003c/p\u003e\u003cp\u003eThis function operates as lazily as possible over the input chunks.\n The only instance in which it is non-lazy is if an odd-length chunk\n ends with a byte that is valid base16.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e decode \"666f6f\"  == (\"foo\", \"\")\n decode \"66quux\"  == (\"f\", \"quux\")\n decode \"666quux\" == (\"f\", \"6quux\")\n\u003c/pre\u003e",
          "module": "Data.ByteString.Base16.Lazy",
          "name": "decode",
          "package": "base16-bytestring",
          "signature": "ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Base16-Lazy.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode string from base16 form The first element of the returned tuple contains the decoded data The second element starts at the first invalid base16 sequence in the original string This function operates as lazily as possible over the input chunks The only instance in which it is non-lazy is if an odd-length chunk ends with byte that is valid base16 Examples decode f6f foo decode quux quux decode quux quux",
          "hierarchy": "Data ByteString Base16 Lazy",
          "module": "Data.ByteString.Base16.Lazy",
          "name": "decode",
          "normalized": "ByteString-\u003e(ByteString,ByteString)",
          "package": "base16-bytestring",
          "signature": "ByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base16-bytestring/docs/Data-ByteString-Base16-Lazy.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a string into base16 form.  The result will always be a\n multiple of 2 bytes in length.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e encode \"foo\"  == \"666f6f\"\n\u003c/pre\u003e",
          "module": "Data.ByteString.Base16.Lazy",
          "name": "encode",
          "package": "base16-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Base16-Lazy.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode string into base16 form The result will always be multiple of bytes in length Example encode foo f6f",
          "hierarchy": "Data ByteString Base16 Lazy",
          "module": "Data.ByteString.Base16.Lazy",
          "name": "encode",
          "normalized": "ByteString-\u003eByteString",
          "package": "base16-bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base16-bytestring/docs/Data-ByteString-Base16-Lazy.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast and efficient encoding and decoding of base16-encoded strings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Base16",
          "name": "Base16",
          "package": "base16-bytestring",
          "source": "src/Data-ByteString-Base16.html",
          "type": "module"
        },
        "index": {
          "description": "Fast and efficient encoding and decoding of base16-encoded strings",
          "hierarchy": "Data ByteString Base16",
          "module": "Data.ByteString.Base16",
          "name": "Base16",
          "package": "base16-bytestring",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/base16-bytestring/docs/Data-ByteString-Base16.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a string from base16 form. The first element of the\n returned tuple contains the decoded data. The second element starts\n at the first invalid base16 sequence in the original string.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e decode \"666f6f\"  == (\"foo\", \"\")\n decode \"66quux\"  == (\"f\", \"quux\")\n decode \"666quux\" == (\"f\", \"6quux\")\n\u003c/pre\u003e",
          "module": "Data.ByteString.Base16",
          "name": "decode",
          "package": "base16-bytestring",
          "signature": "ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Base16.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode string from base16 form The first element of the returned tuple contains the decoded data The second element starts at the first invalid base16 sequence in the original string Examples decode f6f foo decode quux quux decode quux quux",
          "hierarchy": "Data ByteString Base16",
          "module": "Data.ByteString.Base16",
          "name": "decode",
          "normalized": "ByteString-\u003e(ByteString,ByteString)",
          "package": "base16-bytestring",
          "signature": "ByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base16-bytestring/docs/Data-ByteString-Base16.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a string into base16 form.  The result will always be a\n multiple of 2 bytes in length.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e encode \"foo\"  == \"666f6f\"\n\u003c/pre\u003e",
          "module": "Data.ByteString.Base16",
          "name": "encode",
          "package": "base16-bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Base16.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode string into base16 form The result will always be multiple of bytes in length Example encode foo f6f",
          "hierarchy": "Data ByteString Base16",
          "module": "Data.ByteString.Base16",
          "name": "encode",
          "normalized": "ByteString-\u003eByteString",
          "package": "base16-bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/base16-bytestring/docs/Data-ByteString-Base16.html#v:encode"
      }
    }
  ]
]