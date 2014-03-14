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
        "word": "uid"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eUID\u003c/a\u003e\u003c/code\u003e is a unique identifier, generated from \u003ca\u003eData.UUID.V4\u003c/a\u003e. \n\u003c/p\u003e\u003cp\u003eThese identifiers are designed for easy presentation as Base32, using \u003ca\u003eCodec.Binary.Base32\u003c/a\u003e, and\nfor transport in a JSON format using \u003ca\u003eData.Aeson\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe primary constructor, \u003ccode\u003e\u003ca\u003enewUID\u003c/a\u003e\u003c/code\u003e, runs in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad, primarily because of its\nuse of a random number generator during construction. If all you need is a unique string,\nthen \u003ccode\u003e\u003ca\u003enewUIDString\u003c/a\u003e\u003c/code\u003e is just a wrapper that creates a new UID and then invokes \u003ccode\u003e\u003ca\u003etoBase32\u003c/a\u003e\u003c/code\u003e on it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.UID",
          "name": "UID",
          "package": "uid",
          "source": "src/Data-UID.html",
          "type": "module"
        },
        "index": {
          "description": "UID is unique identifier generated from Data.UUID.V4 These identifiers are designed for easy presentation as Base32 using Codec.Binary.Base32 and for transport in JSON format using Data.Aeson The primary constructor newUID runs in the IO monad primarily because of its use of random number generator during construction If all you need is unique string then newUIDString is just wrapper that creates new UID and then invokes toBase32 on it",
          "hierarchy": "Data UID",
          "module": "Data.UID",
          "name": "UID",
          "package": "uid",
          "partial": "UID",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/uid/docs/Data-UID.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA new, randomly generated identifier\n\u003c/p\u003e",
          "module": "Data.UID",
          "name": "UID",
          "package": "uid",
          "source": "src/Data-UID.html#UID",
          "type": "data"
        },
        "index": {
          "description": "new randomly generated identifier",
          "hierarchy": "Data UID",
          "module": "Data.UID",
          "name": "UID",
          "package": "uid",
          "partial": "UID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/uid/docs/Data-UID.html#t:UID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a base32 \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation of the \u003ccode\u003e\u003ca\u003eUID\u003c/a\u003e\u003c/code\u003e back into a UID instance.\n\u003c/p\u003e",
          "module": "Data.UID",
          "name": "fromBase32",
          "package": "uid",
          "signature": "String -\u003e UID",
          "source": "src/Data-UID.html#fromBase32",
          "type": "function"
        },
        "index": {
          "description": "Convert base32 String representation of the UID back into UID instance",
          "hierarchy": "Data UID",
          "module": "Data.UID",
          "name": "fromBase32",
          "normalized": "String-\u003eUID",
          "package": "uid",
          "partial": "Base",
          "signature": "String-\u003eUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uid/docs/Data-UID.html#v:fromBase32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new unique identifier.\n\u003c/p\u003e",
          "module": "Data.UID",
          "name": "newUID",
          "package": "uid",
          "signature": "IO UID",
          "source": "src/Data-UID.html#newUID",
          "type": "function"
        },
        "index": {
          "description": "Construct new unique identifier",
          "hierarchy": "Data UID",
          "module": "Data.UID",
          "name": "newUID",
          "package": "uid",
          "partial": "UID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uid/docs/Data-UID.html#v:newUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new identifier and immediately convert to its base32 representation using \u003ccode\u003e\u003ca\u003etoBase32\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.UID",
          "name": "newUIDString",
          "package": "uid",
          "signature": "IO String",
          "source": "src/Data-UID.html#newUIDString",
          "type": "function"
        },
        "index": {
          "description": "Construct new identifier and immediately convert to its base32 representation using toBase32",
          "hierarchy": "Data UID",
          "module": "Data.UID",
          "name": "newUIDString",
          "package": "uid",
          "partial": "UIDString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uid/docs/Data-UID.html#v:newUIDString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the \u003ccode\u003e\u003ca\u003eUID\u003c/a\u003e\u003c/code\u003e into a base32 \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation'.\n\u003c/p\u003e",
          "module": "Data.UID",
          "name": "toBase32",
          "package": "uid",
          "signature": "UID -\u003e String",
          "source": "src/Data-UID.html#toBase32",
          "type": "function"
        },
        "index": {
          "description": "Convert the UID into base32 String representation",
          "hierarchy": "Data UID",
          "module": "Data.UID",
          "name": "toBase32",
          "normalized": "UID-\u003eString",
          "package": "uid",
          "partial": "Base",
          "signature": "UID-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/uid/docs/Data-UID.html#v:toBase32"
      }
    }
  ]
]