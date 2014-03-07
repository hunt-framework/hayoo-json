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
        "word": "AesonBson"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides \u003ccode\u003eToJSON\u003c/code\u003e instances for BSON \u003ccode\u003eValue\u003c/code\u003es and \u003ccode\u003eDocument\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.AesonBson.Instances",
          "name": "Instances",
          "package": "AesonBson",
          "source": "src/Data-AesonBson-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "Provides ToJSON instances for BSON Value and Document",
          "hierarchy": "Data AesonBson Instances",
          "module": "Data.AesonBson.Instances",
          "name": "Instances",
          "package": "AesonBson",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AesonBson/docs/Data-AesonBson-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert JSON to BSON and the other way around.\n\u003c/p\u003e\u003cp\u003eNote that BSON has more data types than JSON,\n so some BSON to JSON conversions are not bijective and somewhat arbitrary.\n\u003c/p\u003e\u003cp\u003eThis means that for some BSON objects:\n\u003c/p\u003e\u003cpre\u003ebsonify . aesonify /= id\nbsonifyValue . aesonifyValue /= id\n\u003c/pre\u003e\u003cp\u003eWe tried to choose sensible translations on those cases.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.AesonBson",
          "name": "AesonBson",
          "package": "AesonBson",
          "source": "src/Data-AesonBson.html",
          "type": "module"
        },
        "index": {
          "description": "Convert JSON to BSON and the other way around Note that BSON has more data types than JSON so some BSON to JSON conversions are not bijective and somewhat arbitrary This means that for some BSON objects bsonify aesonify id bsonifyValue aesonifyValue id We tried to choose sensible translations on those cases",
          "hierarchy": "Data AesonBson",
          "module": "Data.AesonBson",
          "name": "AesonBson",
          "package": "AesonBson",
          "partial": "Aeson Bson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AesonBson/docs/Data-AesonBson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a BSON document to an AESON object.\n\u003c/p\u003e",
          "module": "Data.AesonBson",
          "name": "aesonify",
          "package": "AesonBson",
          "signature": "Document -\u003e Object",
          "source": "src/Data-AesonBson.html#aesonify",
          "type": "function"
        },
        "index": {
          "description": "Converts BSON document to an AESON object",
          "hierarchy": "Data AesonBson",
          "module": "Data.AesonBson",
          "name": "aesonify",
          "normalized": "Document-\u003eObject",
          "package": "AesonBson",
          "signature": "Document-\u003eObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AesonBson/docs/Data-AesonBson.html#v:aesonify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a BSON value to JSON.\n\u003c/p\u003e",
          "module": "Data.AesonBson",
          "name": "aesonifyValue",
          "package": "AesonBson",
          "signature": "Value -\u003e Value",
          "source": "src/Data-AesonBson.html#aesonifyValue",
          "type": "function"
        },
        "index": {
          "description": "Converts BSON value to JSON",
          "hierarchy": "Data AesonBson",
          "module": "Data.AesonBson",
          "name": "aesonifyValue",
          "normalized": "Value-\u003eValue",
          "package": "AesonBson",
          "partial": "Value",
          "signature": "Value-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AesonBson/docs/Data-AesonBson.html#v:aesonifyValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an AESON object to a BSON document.\n\u003c/p\u003e",
          "module": "Data.AesonBson",
          "name": "bsonify",
          "package": "AesonBson",
          "signature": "Object -\u003e Document",
          "source": "src/Data-AesonBson.html#bsonify",
          "type": "function"
        },
        "index": {
          "description": "Converts an AESON object to BSON document",
          "hierarchy": "Data AesonBson",
          "module": "Data.AesonBson",
          "name": "bsonify",
          "normalized": "Object-\u003eDocument",
          "package": "AesonBson",
          "signature": "Object-\u003eDocument",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AesonBson/docs/Data-AesonBson.html#v:bsonify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a JSON value to BSON.\n\u003c/p\u003e",
          "module": "Data.AesonBson",
          "name": "bsonifyValue",
          "package": "AesonBson",
          "signature": "Value -\u003e Value",
          "source": "src/Data-AesonBson.html#bsonifyValue",
          "type": "function"
        },
        "index": {
          "description": "Converts JSON value to BSON",
          "hierarchy": "Data AesonBson",
          "module": "Data.AesonBson",
          "name": "bsonifyValue",
          "normalized": "Value-\u003eValue",
          "package": "AesonBson",
          "partial": "Value",
          "signature": "Value-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AesonBson/docs/Data-AesonBson.html#v:bsonifyValue"
      }
    }
  ]
]