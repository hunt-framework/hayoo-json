[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AesonBson/docs/Data-AesonBson-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides \u003ccode\u003eToJSON\u003c/code\u003e instances for BSON \u003ccode\u003eValue\u003c/code\u003es and \u003ccode\u003eDocument\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.AesonBson.Instances",
        "fct-package": "AesonBson",
        "fct-signature": "module",
        "fct-source": "src/Data-AesonBson-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "Provides ToJSON instances for BSON Value and Document",
        "hierarchy": "Data AesonBson Instances",
        "module": "Data.AesonBson.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "AesonBson",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AesonBson/docs/Data-AesonBson.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert JSON to BSON and the other way around.\n\u003c/p\u003e\u003cp\u003eNote that BSON has more data types than JSON,\n so some BSON to JSON conversions are not bijective and somewhat arbitrary.\n\u003c/p\u003e\u003cp\u003eThis means that for some BSON objects:\n\u003c/p\u003e\u003cpre\u003ebsonify . aesonify /= id\nbsonifyValue . aesonifyValue /= id\n\u003c/pre\u003e\u003cp\u003eWe tried to choose sensible translations on those cases.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.AesonBson",
        "fct-package": "AesonBson",
        "fct-signature": "module",
        "fct-source": "src/Data-AesonBson.html",
        "fct-type": "module",
        "title": "AesonBson"
      },
      "index": {
        "description": "Convert JSON to BSON and the other way around Note that BSON has more data types than JSON so some BSON to JSON conversions are not bijective and somewhat arbitrary This means that for some BSON objects bsonify aesonify id bsonifyValue aesonifyValue id We tried to choose sensible translations on those cases",
        "hierarchy": "Data AesonBson",
        "module": "Data.AesonBson",
        "name": "AesonBson",
        "normalized": "",
        "package": "AesonBson",
        "partial": "Aeson Bson",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AesonBson/docs/Data-AesonBson.html#v:aesonify",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a BSON document to an AESON object.\n\u003c/p\u003e",
        "fct-module": "Data.AesonBson",
        "fct-package": "AesonBson",
        "fct-signature": "Document -\u003e Object",
        "fct-source": "src/Data-AesonBson.html#aesonify",
        "fct-type": "function",
        "title": "aesonify"
      },
      "index": {
        "description": "Converts BSON document to an AESON object",
        "hierarchy": "Data AesonBson",
        "module": "Data.AesonBson",
        "name": "aesonify",
        "normalized": "Document-\u003eObject",
        "package": "AesonBson",
        "partial": "",
        "signature": "Document-\u003eObject"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AesonBson/docs/Data-AesonBson.html#v:aesonifyValue",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a BSON value to JSON.\n\u003c/p\u003e",
        "fct-module": "Data.AesonBson",
        "fct-package": "AesonBson",
        "fct-signature": "Value -\u003e Value",
        "fct-source": "src/Data-AesonBson.html#aesonifyValue",
        "fct-type": "function",
        "title": "aesonifyValue"
      },
      "index": {
        "description": "Converts BSON value to JSON",
        "hierarchy": "Data AesonBson",
        "module": "Data.AesonBson",
        "name": "aesonifyValue",
        "normalized": "Value-\u003eValue",
        "package": "AesonBson",
        "partial": "Value",
        "signature": "Value-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AesonBson/docs/Data-AesonBson.html#v:bsonify",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an AESON object to a BSON document.\n\u003c/p\u003e",
        "fct-module": "Data.AesonBson",
        "fct-package": "AesonBson",
        "fct-signature": "Object -\u003e Document",
        "fct-source": "src/Data-AesonBson.html#bsonify",
        "fct-type": "function",
        "title": "bsonify"
      },
      "index": {
        "description": "Converts an AESON object to BSON document",
        "hierarchy": "Data AesonBson",
        "module": "Data.AesonBson",
        "name": "bsonify",
        "normalized": "Object-\u003eDocument",
        "package": "AesonBson",
        "partial": "",
        "signature": "Object-\u003eDocument"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AesonBson/docs/Data-AesonBson.html#v:bsonifyValue",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a JSON value to BSON.\n\u003c/p\u003e",
        "fct-module": "Data.AesonBson",
        "fct-package": "AesonBson",
        "fct-signature": "Value -\u003e Value",
        "fct-source": "src/Data-AesonBson.html#bsonifyValue",
        "fct-type": "function",
        "title": "bsonifyValue"
      },
      "index": {
        "description": "Converts JSON value to BSON",
        "hierarchy": "Data AesonBson",
        "module": "Data.AesonBson",
        "name": "bsonifyValue",
        "normalized": "Value-\u003eValue",
        "package": "AesonBson",
        "partial": "Value",
        "signature": "Value-\u003eValue"
      }
    }
  }
]