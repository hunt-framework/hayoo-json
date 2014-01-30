[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/base16-bytestring/docs/Data-ByteString-Base16-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast and efficient encoding and decoding of base16-encoded strings.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Base16.Lazy",
        "fct-package": "base16-bytestring",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Base16-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Fast and efficient encoding and decoding of base16-encoded strings",
        "hierarchy": "Data ByteString Base16 Lazy",
        "module": "Data.ByteString.Base16.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "base16-bytestring",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/base16-bytestring/docs/Data-ByteString-Base16-Lazy.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a string from base16 form. The first element of the\n returned tuple contains the decoded data. The second element starts\n at the first invalid base16 sequence in the original string.\n\u003c/p\u003e\u003cp\u003eThis function operates as lazily as possible over the input chunks.\n The only instance in which it is non-lazy is if an odd-length chunk\n ends with a byte that is valid base16.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e decode \"666f6f\"  == (\"foo\", \"\")\n decode \"66quux\"  == (\"f\", \"quux\")\n decode \"666quux\" == (\"f\", \"6quux\")\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Base16.Lazy",
        "fct-package": "base16-bytestring",
        "fct-signature": "ByteString -\u003e (ByteString, ByteString)",
        "fct-source": "src/Data-ByteString-Base16-Lazy.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Decode string from base16 form The first element of the returned tuple contains the decoded data The second element starts at the first invalid base16 sequence in the original string This function operates as lazily as possible over the input chunks The only instance in which it is non-lazy is if an odd-length chunk ends with byte that is valid base16 Examples decode f6f foo decode quux quux decode quux quux",
        "hierarchy": "Data ByteString Base16 Lazy",
        "module": "Data.ByteString.Base16.Lazy",
        "name": "decode",
        "normalized": "ByteString-\u003e(ByteString,ByteString)",
        "package": "base16-bytestring",
        "partial": "",
        "signature": "ByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/base16-bytestring/docs/Data-ByteString-Base16-Lazy.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a string into base16 form.  The result will always be a\n multiple of 2 bytes in length.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e encode \"foo\"  == \"666f6f\"\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Base16.Lazy",
        "fct-package": "base16-bytestring",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Data-ByteString-Base16-Lazy.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode string into base16 form The result will always be multiple of bytes in length Example encode foo f6f",
        "hierarchy": "Data ByteString Base16 Lazy",
        "module": "Data.ByteString.Base16.Lazy",
        "name": "encode",
        "normalized": "ByteString-\u003eByteString",
        "package": "base16-bytestring",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/base16-bytestring/docs/Data-ByteString-Base16.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast and efficient encoding and decoding of base16-encoded strings.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Base16",
        "fct-package": "base16-bytestring",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Base16.html",
        "fct-type": "module",
        "title": "Base16"
      },
      "index": {
        "description": "Fast and efficient encoding and decoding of base16-encoded strings",
        "hierarchy": "Data ByteString Base16",
        "module": "Data.ByteString.Base16",
        "name": "Base16",
        "normalized": "",
        "package": "base16-bytestring",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/base16-bytestring/docs/Data-ByteString-Base16.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a string from base16 form. The first element of the\n returned tuple contains the decoded data. The second element starts\n at the first invalid base16 sequence in the original string.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e decode \"666f6f\"  == (\"foo\", \"\")\n decode \"66quux\"  == (\"f\", \"quux\")\n decode \"666quux\" == (\"f\", \"6quux\")\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Base16",
        "fct-package": "base16-bytestring",
        "fct-signature": "ByteString -\u003e (ByteString, ByteString)",
        "fct-source": "src/Data-ByteString-Base16.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Decode string from base16 form The first element of the returned tuple contains the decoded data The second element starts at the first invalid base16 sequence in the original string Examples decode f6f foo decode quux quux decode quux quux",
        "hierarchy": "Data ByteString Base16",
        "module": "Data.ByteString.Base16",
        "name": "decode",
        "normalized": "ByteString-\u003e(ByteString,ByteString)",
        "package": "base16-bytestring",
        "partial": "",
        "signature": "ByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/base16-bytestring/docs/Data-ByteString-Base16.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a string into base16 form.  The result will always be a\n multiple of 2 bytes in length.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e encode \"foo\"  == \"666f6f\"\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Base16",
        "fct-package": "base16-bytestring",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Data-ByteString-Base16.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode string into base16 form The result will always be multiple of bytes in length Example encode foo f6f",
        "hierarchy": "Data ByteString Base16",
        "module": "Data.ByteString.Base16",
        "name": "encode",
        "normalized": "ByteString-\u003eByteString",
        "package": "base16-bytestring",
        "partial": "",
        "signature": "ByteString-\u003eByteString"
      }
    }
  }
]