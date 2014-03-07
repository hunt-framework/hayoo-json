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
        "word": "crockford"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements Douglas Crockford's base32 encoding scheme to\n   store integers as text. See \u003ca\u003ehttp://www.crockford.com/wrmg/base32.html\u003c/a\u003e\n   for more details on how this scheme works.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Crockford",
          "name": "Crockford",
          "package": "crockford",
          "source": "src/Codec-Crockford.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements Douglas Crockford base32 encoding scheme to store integers as text See http www.crockford.com wrmg base32.html for more details on how this scheme works",
          "hierarchy": "Codec Crockford",
          "module": "Codec.Crockford",
          "name": "Crockford",
          "package": "crockford",
          "partial": "Crockford",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crockford/docs/Codec-Crockford.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes a Crockford-encoded String into an integer, if possible. Returns\n   Nothing if the string is not a valid Crockford-encoded value.\n\u003c/p\u003e",
          "module": "Codec.Crockford",
          "name": "decode",
          "package": "crockford",
          "signature": "String -\u003e Maybe i",
          "source": "src/Codec-Crockford.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decodes Crockford-encoded String into an integer if possible Returns Nothing if the string is not valid Crockford-encoded value",
          "hierarchy": "Codec Crockford",
          "module": "Codec.Crockford",
          "name": "decode",
          "normalized": "String-\u003eMaybe a",
          "package": "crockford",
          "signature": "String-\u003eMaybe i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crockford/docs/Codec-Crockford.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodes an integer into a String, using Douglas Crockford's base32\n   encoding.\n\u003c/p\u003e",
          "module": "Codec.Crockford",
          "name": "encode",
          "package": "crockford",
          "signature": "i -\u003e String",
          "source": "src/Codec-Crockford.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encodes an integer into String using Douglas Crockford base32 encoding",
          "hierarchy": "Codec Crockford",
          "module": "Codec.Crockford",
          "name": "encode",
          "normalized": "a-\u003eString",
          "package": "crockford",
          "signature": "i-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crockford/docs/Codec-Crockford.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA QuickCheck property that asserts a positive integer encoded and then\n   decoded using this module remains the same number.\n\u003c/p\u003e",
          "module": "Codec.Crockford",
          "name": "prop_crockfordRoundTrip",
          "package": "crockford",
          "signature": "Integer-\u003e Property",
          "type": "function"
        },
        "index": {
          "description": "QuickCheck property that asserts positive integer encoded and then decoded using this module remains the same number",
          "hierarchy": "Codec Crockford",
          "module": "Codec.Crockford",
          "name": "prop_crockfordRoundTrip",
          "normalized": "Integer-\u003eProperty",
          "package": "crockford",
          "partial": "Round Trip",
          "signature": "Integer-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crockford/docs/Codec-Crockford.html#v:prop_crockfordRoundTrip"
      }
    }
  ]
]