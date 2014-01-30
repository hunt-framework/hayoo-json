[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geohash/docs/Data-Geohash.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompute geohashes as per \u003ca\u003ehttp://en.wikipedia.org/wiki/Geohash\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Geohash",
        "fct-package": "geohash",
        "fct-signature": "module",
        "fct-source": "src/Data-Geohash.html",
        "fct-type": "module",
        "title": "Geohash"
      },
      "index": {
        "description": "Compute geohashes as per http en.wikipedia.org wiki Geohash",
        "hierarchy": "Data Geohash",
        "module": "Data.Geohash",
        "name": "Geohash",
        "normalized": "",
        "package": "geohash",
        "partial": "Geohash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geohash/docs/Data-Geohash.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a geohash into a \u003ccode\u003e(lat, lon)\u003c/code\u003e pair.\n\u003c/p\u003e\u003cpre\u003e decode \"9q8yyk9pqd\"\n\u003c/pre\u003e",
        "fct-module": "Data.Geohash",
        "fct-package": "geohash",
        "fct-signature": "String-\u003e Maybe (a, a)",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Decode geohash into lat lon pair decode q8yyk9pqd",
        "hierarchy": "Data Geohash",
        "module": "Data.Geohash",
        "name": "decode",
        "normalized": "String-\u003eMaybe(a,a)",
        "package": "geohash",
        "partial": "",
        "signature": "String-\u003eMaybe(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geohash/docs/Data-Geohash.html#v:decode_",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a geohash into ranges of latitude & longitude. This\n reflects the precision of the decode and can be used to construct a\n bounding box.\n\u003c/p\u003e\u003cpre\u003e decode_ \"9q8yyk9pqd\"\n\u003c/pre\u003e",
        "fct-module": "Data.Geohash",
        "fct-package": "geohash",
        "fct-signature": "String-\u003e Maybe ((a, a), (a, a))",
        "fct-type": "function",
        "title": "decode_"
      },
      "index": {
        "description": "Decode geohash into ranges of latitude longitude This reflects the precision of the decode and can be used to construct bounding box decode q8yyk9pqd",
        "hierarchy": "Data Geohash",
        "module": "Data.Geohash",
        "name": "decode_",
        "normalized": "String-\u003eMaybe((a,a),(a,a))",
        "package": "geohash",
        "partial": "",
        "signature": "String-\u003eMaybe((a,a),(a,a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geohash/docs/Data-Geohash.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a geohash from the given \u003ccode\u003e(lat, lon)\u003c/code\u003e pair with the given\n precision.\n\u003c/p\u003e\u003cpre\u003e encode 10 (37.775, -122.419)\n\u003c/pre\u003e",
        "fct-module": "Data.Geohash",
        "fct-package": "geohash",
        "fct-signature": "Int-\u003e (a, a)-\u003e Maybe String",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode geohash from the given lat lon pair with the given precision encode",
        "hierarchy": "Data Geohash",
        "module": "Data.Geohash",
        "name": "encode",
        "normalized": "Int-\u003e(a,a)-\u003eMaybe String",
        "package": "geohash",
        "partial": "",
        "signature": "Int-\u003e(a,a)-\u003eMaybe String"
      }
    }
  }
]