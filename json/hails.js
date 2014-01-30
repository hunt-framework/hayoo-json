[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the type for a Hails BSON document, \u003ccode\u003eHsonDoc\u003c/code\u003e.  A\nHails document is akin to \u003ca\u003eData.Bson\u003c/a\u003e's documents, but differs in two\nways. First, Hails restricts the number of types to a subset of BSON's\n(see \u003ccode\u003eBsonVal\u003c/code\u003e). This restriction is primarily due to the fact that\nmany of the BSON types are redundant and not used (at least within\nHails). Second, Hails allows for documents to contain policy-labeled\nvalues.\n\u003c/p\u003e\u003cp\u003ePolicy labeled values (\u003ccode\u003e\u003ca\u003ePolicyLabeled\u003c/a\u003e\u003c/code\u003e) are permitted only at the\n\"top-level\" of a document. (This is primarily done to keep\npolicy-specification simple and may change in the future.)\nConsequently to allow for nested documents and documents containing an\narray of values we separate top-level fields (\u003ccode\u003e\u003ca\u003eHsonField\u003c/a\u003e\u003c/code\u003e), that may\ncontain policy labeled values, from potentially-nested fields\n(\u003ccode\u003e\u003ca\u003eBsonField\u003c/a\u003e\u003c/code\u003e). A top-level field \u003ccode\u003e\u003ca\u003eHsonField\u003c/a\u003e\u003c/code\u003e is thus either a\n\u003ccode\u003e\u003ca\u003eBsonField\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003ePolicyLabled\u003c/code\u003e value.\n\u003c/p\u003e\u003cp\u003eTo keep the TCB compact, this module does not export the combinators\nused to create documents in a friendly fashion. See \u003ca\u003eHails.Data.Hson\u003c/a\u003e\nfor the safe external API.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eCredit:\u003c/em\u003e Much of this code is based on/reuses \u003ca\u003eData.Bson\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-Data-Hson-TCB.html",
        "fct-type": "module",
        "title": "TCB"
      },
      "index": {
        "description": "This module exports the type for Hails BSON document HsonDoc Hails document is akin to Data.Bson documents but differs in two ways First Hails restricts the number of types to subset of BSON see BsonVal This restriction is primarily due to the fact that many of the BSON types are redundant and not used at least within Hails Second Hails allows for documents to contain policy-labeled values Policy labeled values PolicyLabeled are permitted only at the top-level of document This is primarily done to keep policy-specification simple and may change in the future Consequently to allow for nested documents and documents containing an array of values we separate top-level fields HsonField that may contain policy labeled values from potentially-nested fields BsonField top-level field HsonField is thus either BsonField or PolicyLabled value To keep the TCB compact this module does not export the combinators used to create documents in friendly fashion See Hails.Data.Hson for the safe external API Credit Much of this code is based on reuses Data.Bson",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "TCB",
        "normalized": "",
        "package": "hails",
        "partial": "TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#t:Binary",
      "description": {
        "fct-descr": "\u003cp\u003eArbitrary binary blob\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "newtype",
        "fct-source": "src/Hails-Data-Hson-TCB.html#Binary",
        "fct-type": "newtype",
        "title": "Binary"
      },
      "index": {
        "description": "Arbitrary binary blob",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "Binary",
        "normalized": "",
        "package": "hails",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#t:BsonDocument",
      "description": {
        "fct-descr": "\u003cp\u003eA (possibly top-)level document containing \u003ccode\u003e\u003ca\u003eBsonField\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonDocument",
        "fct-type": "type",
        "title": "BsonDocument"
      },
      "index": {
        "description": "possibly top level document containing BsonField",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "BsonDocument",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#t:BsonField",
      "description": {
        "fct-descr": "\u003cp\u003eA field containing a named \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonField",
        "fct-type": "data",
        "title": "BsonField"
      },
      "index": {
        "description": "field containing named BsonValue",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "BsonField",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#t:BsonValue",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eBsonValue\u003c/code\u003e is a subset of BSON (\u003ca\u003eData.Bson\u003c/a\u003e) values.  Note that a\n \u003ccode\u003eBsonValue\u003c/code\u003e cannot contain any labeled values; all labeled values\n occur in a document as \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003es.  Correspondingly, \u003ccode\u003eBsonValue\u003c/code\u003es\n may be arbitrarily nested.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "data",
        "title": "BsonValue"
      },
      "index": {
        "description": "BsonValue is subset of BSON Data.Bson values Note that BsonValue cannot contain any labeled values all labeled values occur in document as HsonValue Correspondingly BsonValue may be arbitrarily nested",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "BsonValue",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#t:FieldName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a field.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Data-Hson-TCB.html#FieldName",
        "fct-type": "type",
        "title": "FieldName"
      },
      "index": {
        "description": "The name of field",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "FieldName",
        "normalized": "",
        "package": "hails",
        "partial": "Field Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#t:HsonDocument",
      "description": {
        "fct-descr": "\u003cp\u003eA top-level document containing \u003ccode\u003e\u003ca\u003eHsonField\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Data-Hson-TCB.html#HsonDocument",
        "fct-type": "type",
        "title": "HsonDocument"
      },
      "index": {
        "description": "top-level document containing HsonField",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "HsonDocument",
        "normalized": "",
        "package": "hails",
        "partial": "Hson Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#t:HsonField",
      "description": {
        "fct-descr": "\u003cp\u003eA field containing a named \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Data-Hson-TCB.html#HsonField",
        "fct-type": "data",
        "title": "HsonField"
      },
      "index": {
        "description": "field containing named HsonValue",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "HsonField",
        "normalized": "",
        "package": "hails",
        "partial": "Hson Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#t:HsonValue",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003eHsonValue\u003c/code\u003e is a top-level value that may either be a\n \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003e or a policy labeled value. The separation of values\n into \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003e is solely due to the restriction\n that policy-labeled values may only occur at the top level and\n \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003es may be nested (e.g. using \u003ccode\u003e\u003ca\u003eBsonArray\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBsonDoc\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Data-Hson-TCB.html#HsonValue",
        "fct-type": "data",
        "title": "HsonValue"
      },
      "index": {
        "description": "An HsonValue is top-level value that may either be BsonValue or policy labeled value The separation of values into BsonValue and HsonValue is solely due to the restriction that policy-labeled values may only occur at the top level and BsonValue may be nested e.g using BsonArray and BsonDoc",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "HsonValue",
        "normalized": "",
        "package": "hails",
        "partial": "Hson Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#t:ObjectId",
      "description": {
        "fct-descr": "\u003cp\u003eA BSON ObjectID is a 12-byte value consisting of a 4-byte timestamp (seconds since epoch), a 3-byte machine id, a 2-byte process id, and a 3-byte counter. Note that the timestamp and counter fields must be stored big endian unlike the rest of BSON. This is because they are compared byte-by-byte and we want to ensure a mostly increasing order.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ObjectId"
      },
      "index": {
        "description": "BSON ObjectID is byte value consisting of byte timestamp seconds since epoch byte machine id byte process id and byte counter Note that the timestamp and counter fields must be stored big endian unlike the rest of BSON This is because they are compared byte-by-byte and we want to ensure mostly increasing order",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "ObjectId",
        "normalized": "",
        "package": "hails",
        "partial": "Object Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#t:PolicyLabeled",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003ePolicyLabeled\u003c/code\u003e value can be either an unlabeled value for which\n the policy needs to be applied (\u003ccode\u003eNeedPolicyTCB\u003c/code\u003e), or an already\n labeled value (\u003ccode\u003eHasPolicyTCB\u003c/code\u003e). \u003ccode\u003ePolicyLabeled\u003c/code\u003e is a partially-opaque\n type; code should not be able to inspect the value of an unlabeleda\n value, but may inspect an already labeled value.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Data-Hson-TCB.html#PolicyLabeled",
        "fct-type": "data",
        "title": "PolicyLabeled"
      },
      "index": {
        "description": "PolicyLabeled value can be either an unlabeled value for which the policy needs to be applied NeedPolicyTCB or an already labeled value HasPolicyTCB PolicyLabeled is partially-opaque type code should not be able to inspect the value of an unlabeleda value but may inspect an already labeled value",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "PolicyLabeled",
        "normalized": "",
        "package": "hails",
        "partial": "Policy Labeled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#t:S8",
      "description": {
        "fct-descr": "\u003cp\u003eStrict ByeString\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Data-Hson-TCB.html#S8",
        "fct-type": "type",
        "title": "S8"
      },
      "index": {
        "description": "Strict ByeString",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "S8",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:Binary",
      "description": {
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "Binary",
        "fct-source": "src/Hails-Data-Hson-TCB.html#Binary",
        "fct-type": "function",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "Binary",
        "normalized": "",
        "package": "hails",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:BsonArray",
      "description": {
        "fct-descr": "\u003cp\u003eList of values\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "BsonArray [BsonValue]",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonArray"
      },
      "index": {
        "description": "List of values",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "BsonArray",
        "normalized": "BsonArray[BsonValue]",
        "package": "hails",
        "partial": "Bson Array",
        "signature": "BsonArray[BsonValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:BsonBlob",
      "description": {
        "fct-descr": "\u003cp\u003eBinary blob value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "BsonBlob Binary",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonBlob"
      },
      "index": {
        "description": "Binary blob value",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "BsonBlob",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:BsonBool",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "BsonBool Bool",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonBool"
      },
      "index": {
        "description": "Boolean value",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "BsonBool",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:BsonDoc",
      "description": {
        "fct-descr": "\u003cp\u003eInner document\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "BsonDoc BsonDocument",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonDoc"
      },
      "index": {
        "description": "Inner document",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "BsonDoc",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:BsonField",
      "description": {
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "BsonField !FieldName BsonValue",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonField",
        "fct-type": "function",
        "title": "BsonField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "BsonField",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:BsonFloat",
      "description": {
        "fct-descr": "\u003cp\u003eFloat value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "BsonFloat Double",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonFloat"
      },
      "index": {
        "description": "Float value",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "BsonFloat",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:BsonInt32",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit integer\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "BsonInt32 Int32",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonInt32"
      },
      "index": {
        "description": "bit integer",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "BsonInt32",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:BsonInt64",
      "description": {
        "fct-descr": "\u003cp\u003e64-bit integer\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "BsonInt64 Int64",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonInt64"
      },
      "index": {
        "description": "bit integer",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "BsonInt64",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:BsonNull",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eNULL\u003c/code\u003e value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "BsonNull",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonNull"
      },
      "index": {
        "description": "The NULL value",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "BsonNull",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:BsonObjId",
      "description": {
        "fct-descr": "\u003cp\u003eObject Id value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "BsonObjId ObjectId",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonObjId"
      },
      "index": {
        "description": "Object Id value",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "BsonObjId",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Obj Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:BsonString",
      "description": {
        "fct-descr": "\u003cp\u003eString value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "BsonString Text",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonString"
      },
      "index": {
        "description": "String value",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "BsonString",
        "normalized": "",
        "package": "hails",
        "partial": "Bson String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:BsonUTC",
      "description": {
        "fct-descr": "\u003cp\u003eTime stamp value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "BsonUTC UTCTime",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonUTC"
      },
      "index": {
        "description": "Time stamp value",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "BsonUTC",
        "normalized": "",
        "package": "hails",
        "partial": "Bson UTC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:HasPolicyTCB",
      "description": {
        "fct-descr": "\u003cp\u003ePolicy applied\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "HasPolicyTCB (DCLabeled BsonValue)",
        "fct-source": "src/Hails-Data-Hson-TCB.html#PolicyLabeled",
        "fct-type": "function",
        "title": "HasPolicyTCB"
      },
      "index": {
        "description": "Policy applied",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "HasPolicyTCB",
        "normalized": "",
        "package": "hails",
        "partial": "Has Policy TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:HsonField",
      "description": {
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "HsonField !FieldName HsonValue",
        "fct-source": "src/Hails-Data-Hson-TCB.html#HsonField",
        "fct-type": "function",
        "title": "HsonField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "HsonField",
        "normalized": "",
        "package": "hails",
        "partial": "Hson Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:HsonLabeled",
      "description": {
        "fct-descr": "\u003cp\u003ePolicy labeled value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "HsonLabeled PolicyLabeled",
        "fct-source": "src/Hails-Data-Hson-TCB.html#HsonValue",
        "fct-type": "function",
        "title": "HsonLabeled"
      },
      "index": {
        "description": "Policy labeled value",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "HsonLabeled",
        "normalized": "",
        "package": "hails",
        "partial": "Hson Labeled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:HsonValue",
      "description": {
        "fct-descr": "\u003cp\u003eBson value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "HsonValue BsonValue",
        "fct-source": "src/Hails-Data-Hson-TCB.html#HsonValue",
        "fct-type": "function",
        "title": "HsonValue"
      },
      "index": {
        "description": "Bson value",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "HsonValue",
        "normalized": "",
        "package": "hails",
        "partial": "Hson Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:NeedPolicyTCB",
      "description": {
        "fct-descr": "\u003cp\u003ePolicy was not applied \n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "NeedPolicyTCB BsonValue",
        "fct-source": "src/Hails-Data-Hson-TCB.html#PolicyLabeled",
        "fct-type": "function",
        "title": "NeedPolicyTCB"
      },
      "index": {
        "description": "Policy was not applied",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "NeedPolicyTCB",
        "normalized": "",
        "package": "hails",
        "partial": "Need Policy TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:Oid",
      "description": {
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "Oid Word32 Word64",
        "fct-type": "function",
        "title": "Oid"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "Oid",
        "normalized": "",
        "package": "hails",
        "partial": "Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:add__hails_prefix",
      "description": {
        "fct-descr": "\u003cp\u003eHails internal prefix that is used to serialized labeled values.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "FieldName -\u003e FieldName",
        "fct-source": "src/Hails-Data-Hson-TCB.html#add__hails_prefix",
        "fct-type": "function",
        "title": "add__hails_prefix"
      },
      "index": {
        "description": "Hails internal prefix that is used to serialized labeled values",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "add__hails_prefix",
        "normalized": "FieldName-\u003eFieldName",
        "package": "hails",
        "partial": "",
        "signature": "FieldName-\u003eFieldName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:bsonDocToDataBsonDocTCB",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eBsonDocument\u003c/a\u003e\u003c/code\u003e to a \u003ca\u003eData.Bson\u003c/a\u003e \u003ccode\u003eDocument\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "BsonDocument -\u003e Document",
        "fct-source": "src/Hails-Data-Hson-TCB.html#bsonDocToDataBsonDocTCB",
        "fct-type": "function",
        "title": "bsonDocToDataBsonDocTCB"
      },
      "index": {
        "description": "Convert BsonDocument to Data.Bson Document",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "bsonDocToDataBsonDocTCB",
        "normalized": "BsonDocument-\u003eDocument",
        "package": "hails",
        "partial": "Doc To Data Bson Doc TCB",
        "signature": "BsonDocument-\u003eDocument"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:dataBsonDocToHsonDocTCB",
      "description": {
        "fct-descr": "\u003cp\u003eConvert \u003ca\u003eData.Bson\u003c/a\u003e \u003ccode\u003eDocument\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eHsonDocument\u003c/a\u003e\u003c/code\u003e. This is the\n top-level function that marshalls BSON documents to Hails\n documents. This function assumes that all documents have been\n marshalled out using \u003ccode\u003e\u003ca\u003ehsonDocToDataBsonDocTCB\u003c/a\u003e\u003c/code\u003e. Otherwise, the\n \u003ccode\u003ePolicyLabled\u003c/code\u003e values that are created from the document may be\n forged.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "Document -\u003e HsonDocument",
        "fct-source": "src/Hails-Data-Hson-TCB.html#dataBsonDocToHsonDocTCB",
        "fct-type": "function",
        "title": "dataBsonDocToHsonDocTCB"
      },
      "index": {
        "description": "Convert Data.Bson Document to HsonDocument This is the top-level function that marshalls BSON documents to Hails documents This function assumes that all documents have been marshalled out using hsonDocToDataBsonDocTCB Otherwise the PolicyLabled values that are created from the document may be forged",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "dataBsonDocToHsonDocTCB",
        "normalized": "Document-\u003eHsonDocument",
        "package": "hails",
        "partial": "Bson Doc To Hson Doc TCB",
        "signature": "Document-\u003eHsonDocument"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:dataBsonValueToHsonValueTCB",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ca\u003eData.Bson\u003c/a\u003e \u003ccode\u003eValue\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003e. See\n \u003ccode\u003e\u003ca\u003edataBsonDocToHsonDocTCB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "Value -\u003e HsonValue",
        "fct-source": "src/Hails-Data-Hson-TCB.html#dataBsonValueToHsonValueTCB",
        "fct-type": "function",
        "title": "dataBsonValueToHsonValueTCB"
      },
      "index": {
        "description": "Convert Data.Bson Value to HsonValue See dataBsonDocToHsonDocTCB",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "dataBsonValueToHsonValueTCB",
        "normalized": "Value-\u003eHsonValue",
        "package": "hails",
        "partial": "Bson Value To Hson Value TCB",
        "signature": "Value-\u003eHsonValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:hsonDocToDataBsonDocTCB",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a top-level document (i.e., \u003ccode\u003e\u003ca\u003eHsonDocument\u003c/a\u003e\u003c/code\u003e) to a \u003ca\u003eData.Bson\u003c/a\u003e\n \u003ccode\u003eDocument\u003c/code\u003e. This is the primary marshall-out function.  All\n \u003ccode\u003e\u003ca\u003ePolicyLabeled\u003c/a\u003e\u003c/code\u003e values are marshalled out as \u003ca\u003eData.Bson\u003c/a\u003e \u003ccode\u003eUserDefined\u003c/code\u003e\n values. This means that the \u003ccode\u003eUserDefined\u003c/code\u003e type is reserved and\n exposing it as a type in \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003e would potentially lead to\n vulnerabilities in which labeled values can be marshalled in from\n well-crafted ByteStrings. Moreover, untrusted code should not have\n access to this function; having such access would allow it to\n inspect the serialized labeled values and thus violate IFC.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "HsonDocument -\u003e Document",
        "fct-source": "src/Hails-Data-Hson-TCB.html#hsonDocToDataBsonDocTCB",
        "fct-type": "function",
        "title": "hsonDocToDataBsonDocTCB"
      },
      "index": {
        "description": "Convert top-level document i.e HsonDocument to Data.Bson Document This is the primary marshall-out function All PolicyLabeled values are marshalled out as Data.Bson UserDefined values This means that the UserDefined type is reserved and exposing it as type in BsonValue would potentially lead to vulnerabilities in which labeled values can be marshalled in from well-crafted ByteStrings Moreover untrusted code should not have access to this function having such access would allow it to inspect the serialized labeled values and thus violate IFC",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "hsonDocToDataBsonDocTCB",
        "normalized": "HsonDocument-\u003eDocument",
        "package": "hails",
        "partial": "Doc To Data Bson Doc TCB",
        "signature": "HsonDocument-\u003eDocument"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson-TCB.html#v:unBinary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hails.Data.Hson.TCB",
        "fct-package": "hails",
        "fct-signature": "S8",
        "fct-source": "src/Hails-Data-Hson-TCB.html#Binary",
        "fct-type": "function",
        "title": "unBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Data Hson TCB",
        "module": "Hails.Data.Hson.TCB",
        "name": "unBinary",
        "normalized": "",
        "package": "hails",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the type for a Hails BSON document, \u003ccode\u003eHsonDoc\u003c/code\u003e and\nrelated classes for creating such documents.  A Hails document is\nsimilar to \u003ca\u003eData.Bson\u003c/a\u003e's documents, but differs in two ways. First,\nHails restricts the number of types to a subset of BSON's (see\n\u003ccode\u003e\u003ca\u003eBsonVal\u003c/a\u003e\u003c/code\u003e). This restriction is primarily due to the fact that many of\nthe BSON types are redundant and not used (at least within Hails).\nSecond, Hails allows for documents to contain policy-labeled values.\n\u003c/p\u003e\u003cp\u003ePolicy labeled values (\u003ccode\u003e\u003ca\u003ePolicyLabeled\u003c/a\u003e\u003c/code\u003e) are permitted only at the\n\"top-level\" of a document. (This is primarily done to keep\npolicy-specification simple and may change in the future.)\nConsequently to allow for nested documents and documents containing an\narray of values we separate top-level fields (\u003ccode\u003e\u003ca\u003eHsonField\u003c/a\u003e\u003c/code\u003e), that may\ncontain policy labeled values, from potentially-nested fields\n(\u003ccode\u003e\u003ca\u003eBsonField\u003c/a\u003e\u003c/code\u003e). A top-level field \u003ccode\u003e\u003ca\u003eHsonField\u003c/a\u003e\u003c/code\u003e is thus either a\n\u003ccode\u003e\u003ca\u003eBsonField\u003c/a\u003e\u003c/code\u003e or a \u003ccode\u003ePolicyLabled\u003c/code\u003e value.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e module Main (x, y) where\n \n import Data.Text (Text)\n \n import LIO.DCLabel\n import LIO.Labeled.TCB (labelTCB)\n import Hails.Data.Hson\n \n -- | Create document, verbose approach\n x :: HsonDocument\n x = [ \"myInt\"  =: BsonInt32 42\n     , \"nested\" =: BsonDoc [ \"flag\" =: BsonBool True]\n     , \"secret\" =: (HsonLabeled $ hasPolicy (labelTCB dcPub (BsonString \"hi\")))\n     ]\n \n -- | Create same document, clean approach\n y :: HsonDocument\n y = [ \"myInt\" -: (42 :: Int)\n     , \"nested\"  -: ([ \"flag\" -: True] :: BsonDocument)\n     , \"secret\" -: labelTCB dcPub (toBsonValue (\"hi\" :: Text))\n     ]\n\u003c/pre\u003e\u003cp\u003eBoth \u003ccode\u003ex\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e with \u003ccode\u003e-XOverloadedStrings\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e [myInt -: 42,nested -: [flag -: True],secret -: HsonLabeled]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-Data-Hson.html",
        "fct-type": "module",
        "title": "Hson"
      },
      "index": {
        "description": "This module exports the type for Hails BSON document HsonDoc and related classes for creating such documents Hails document is similar to Data.Bson documents but differs in two ways First Hails restricts the number of types to subset of BSON see BsonVal This restriction is primarily due to the fact that many of the BSON types are redundant and not used at least within Hails Second Hails allows for documents to contain policy-labeled values Policy labeled values PolicyLabeled are permitted only at the top-level of document This is primarily done to keep policy-specification simple and may change in the future Consequently to allow for nested documents and documents containing an array of values we separate top-level fields HsonField that may contain policy labeled values from potentially-nested fields BsonField top-level field HsonField is thus either BsonField or PolicyLabled value Example module Main where import Data.Text Text import LIO.DCLabel import LIO.Labeled.TCB labelTCB import Hails.Data.Hson Create document verbose approach HsonDocument myInt BsonInt32 nested BsonDoc flag BsonBool True secret HsonLabeled hasPolicy labelTCB dcPub BsonString hi Create same document clean approach HsonDocument myInt Int nested flag True BsonDocument secret labelTCB dcPub toBsonValue hi Text Both and with XOverloadedStrings myInt nested flag True secret HsonLabeled",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "Hson",
        "normalized": "",
        "package": "hails",
        "partial": "Hson",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:Binary",
      "description": {
        "fct-descr": "\u003cp\u003eArbitrary binary blob\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "newtype",
        "fct-source": "src/Hails-Data-Hson-TCB.html#Binary",
        "fct-type": "newtype",
        "title": "Binary"
      },
      "index": {
        "description": "Arbitrary binary blob",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "Binary",
        "normalized": "",
        "package": "hails",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:BsonDocument",
      "description": {
        "fct-descr": "\u003cp\u003eA (possibly top-)level document containing \u003ccode\u003e\u003ca\u003eBsonField\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonDocument",
        "fct-type": "type",
        "title": "BsonDocument"
      },
      "index": {
        "description": "possibly top level document containing BsonField",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "BsonDocument",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:BsonField",
      "description": {
        "fct-descr": "\u003cp\u003eA field containing a named \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonField",
        "fct-type": "data",
        "title": "BsonField"
      },
      "index": {
        "description": "field containing named BsonValue",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "BsonField",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:BsonVal",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to (de)construct \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-Data-Hson.html#BsonVal",
        "fct-type": "class",
        "title": "BsonVal"
      },
      "index": {
        "description": "Class used to de construct BsonValue",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "BsonVal",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Val",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:BsonValue",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eBsonValue\u003c/code\u003e is a subset of BSON (\u003ca\u003eData.Bson\u003c/a\u003e) values.  Note that a\n \u003ccode\u003eBsonValue\u003c/code\u003e cannot contain any labeled values; all labeled values\n occur in a document as \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003es.  Correspondingly, \u003ccode\u003eBsonValue\u003c/code\u003es\n may be arbitrarily nested.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "data",
        "title": "BsonValue"
      },
      "index": {
        "description": "BsonValue is subset of BSON Data.Bson values Note that BsonValue cannot contain any labeled values all labeled values occur in document as HsonValue Correspondingly BsonValue may be arbitrarily nested",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "BsonValue",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:DocOps",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to implement operatoins on documents that return\n \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003es or \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003es. The main role of this function is to\n impose the functional dependency between values and fields.  As a\n consequence \u003ccode\u003e\u003ca\u003elook\u003c/a\u003e\u003c/code\u003eing up and getting \u003ccode\u003e\u003ca\u003evalueAt\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eHsonDocument\u003c/a\u003e\u003c/code\u003e\n (resp. \u003ccode\u003e\u003ca\u003eBsonDocument\u003c/a\u003e\u003c/code\u003e) will return a \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003e (resp. \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003e).\n This eliminates the need to specify the end type of very query, but\n forces the programmer to cast between Hson and Bson values.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-Data-Hson.html#DocOps",
        "fct-type": "class",
        "title": "DocOps"
      },
      "index": {
        "description": "Class used to implement operatoins on documents that return HsonValue or BsonValue The main role of this function is to impose the functional dependency between values and fields As consequence look ing up and getting valueAt in HsonDocument resp BsonDocument will return HsonValue resp BsonValue This eliminates the need to specify the end type of very query but forces the programmer to cast between Hson and Bson values",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "DocOps",
        "normalized": "",
        "package": "hails",
        "partial": "Doc Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:DocValOps",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to implement operations on documents that return\n Haskell values (as opposed to \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-Data-Hson.html#DocValOps",
        "fct-type": "class",
        "title": "DocValOps"
      },
      "index": {
        "description": "Class used to implement operations on documents that return Haskell values as opposed to HsonValue or BsonValue",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "DocValOps",
        "normalized": "",
        "package": "hails",
        "partial": "Doc Val Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:Document",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003eHsonDocument\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Data-Hson.html#Document",
        "fct-type": "type",
        "title": "Document"
      },
      "index": {
        "description": "Synonym for HsonDocument",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "Document",
        "normalized": "",
        "package": "hails",
        "partial": "Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to define fields.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-Data-Hson.html#Field",
        "fct-type": "class",
        "title": "Field"
      },
      "index": {
        "description": "Class used to define fields",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "Field",
        "normalized": "",
        "package": "hails",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:FieldName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a field.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Data-Hson-TCB.html#FieldName",
        "fct-type": "type",
        "title": "FieldName"
      },
      "index": {
        "description": "The name of field",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "FieldName",
        "normalized": "",
        "package": "hails",
        "partial": "Field Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:GenField",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to define fields.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-Data-Hson.html#GenField",
        "fct-type": "class",
        "title": "GenField"
      },
      "index": {
        "description": "Class used to define fields",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "GenField",
        "normalized": "",
        "package": "hails",
        "partial": "Gen Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:HsonDocument",
      "description": {
        "fct-descr": "\u003cp\u003eA top-level document containing \u003ccode\u003e\u003ca\u003eHsonField\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Data-Hson-TCB.html#HsonDocument",
        "fct-type": "type",
        "title": "HsonDocument"
      },
      "index": {
        "description": "top-level document containing HsonField",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "HsonDocument",
        "normalized": "",
        "package": "hails",
        "partial": "Hson Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:HsonField",
      "description": {
        "fct-descr": "\u003cp\u003eA field containing a named \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Data-Hson-TCB.html#HsonField",
        "fct-type": "data",
        "title": "HsonField"
      },
      "index": {
        "description": "field containing named HsonValue",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "HsonField",
        "normalized": "",
        "package": "hails",
        "partial": "Hson Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:HsonVal",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to (de)construct \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-Data-Hson.html#HsonVal",
        "fct-type": "class",
        "title": "HsonVal"
      },
      "index": {
        "description": "Class used to de construct HsonValue",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "HsonVal",
        "normalized": "",
        "package": "hails",
        "partial": "Hson Val",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:HsonValue",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003eHsonValue\u003c/code\u003e is a top-level value that may either be a\n \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003e or a policy labeled value. The separation of values\n into \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003e is solely due to the restriction\n that policy-labeled values may only occur at the top level and\n \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003es may be nested (e.g. using \u003ccode\u003e\u003ca\u003eBsonArray\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBsonDoc\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Data-Hson-TCB.html#HsonValue",
        "fct-type": "data",
        "title": "HsonValue"
      },
      "index": {
        "description": "An HsonValue is top-level value that may either be BsonValue or policy labeled value The separation of values into BsonValue and HsonValue is solely due to the restriction that policy-labeled values may only occur at the top level and BsonValue may be nested e.g using BsonArray and BsonDoc",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "HsonValue",
        "normalized": "",
        "package": "hails",
        "partial": "Hson Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:IsField",
      "description": {
        "fct-descr": "\u003cp\u003eClass for retrieving the name of a field.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-Data-Hson.html#IsField",
        "fct-type": "class",
        "title": "IsField"
      },
      "index": {
        "description": "Class for retrieving the name of field",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "IsField",
        "normalized": "",
        "package": "hails",
        "partial": "Is Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:ObjectId",
      "description": {
        "fct-descr": "\u003cp\u003eA BSON ObjectID is a 12-byte value consisting of a 4-byte timestamp (seconds since epoch), a 3-byte machine id, a 2-byte process id, and a 3-byte counter. Note that the timestamp and counter fields must be stored big endian unlike the rest of BSON. This is because they are compared byte-by-byte and we want to ensure a mostly increasing order.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ObjectId"
      },
      "index": {
        "description": "BSON ObjectID is byte value consisting of byte timestamp seconds since epoch byte machine id byte process id and byte counter Note that the timestamp and counter fields must be stored big endian unlike the rest of BSON This is because they are compared byte-by-byte and we want to ensure mostly increasing order",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "ObjectId",
        "normalized": "",
        "package": "hails",
        "partial": "Object Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#t:PolicyLabeled",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003ePolicyLabeled\u003c/code\u003e value can be either an unlabeled value for which\n the policy needs to be applied (\u003ccode\u003eNeedPolicyTCB\u003c/code\u003e), or an already\n labeled value (\u003ccode\u003eHasPolicyTCB\u003c/code\u003e). \u003ccode\u003ePolicyLabeled\u003c/code\u003e is a partially-opaque\n type; code should not be able to inspect the value of an unlabeleda\n value, but may inspect an already labeled value.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Data-Hson-TCB.html#PolicyLabeled",
        "fct-type": "data",
        "title": "PolicyLabeled"
      },
      "index": {
        "description": "PolicyLabeled value can be either an unlabeled value for which the policy needs to be applied NeedPolicyTCB or an already labeled value HasPolicyTCB PolicyLabeled is partially-opaque type code should not be able to inspect the value of an unlabeleda value but may inspect an already labeled value",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "PolicyLabeled",
        "normalized": "",
        "package": "hails",
        "partial": "Policy Labeled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:-45-:",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a name and Haskell value construct either a \u003ccode\u003e\u003ca\u003eHsonField\u003c/a\u003e\u003c/code\u003e\n or a \u003ccode\u003e\u003ca\u003eBsonField\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "FieldName -\u003e v -\u003e f",
        "fct-source": "src/Hails-Data-Hson.html#-%3A",
        "fct-type": "method",
        "title": "(-:)"
      },
      "index": {
        "description": "Given name and Haskell value construct either HsonField or BsonField",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "(-:) -:",
        "normalized": "FieldName-\u003ea-\u003eb",
        "package": "hails",
        "partial": "",
        "signature": "FieldName-\u003ev-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:-61-:",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a name and value construct either a \u003ccode\u003e\u003ca\u003eHsonField\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eBsonField\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "FieldName -\u003e v -\u003e f",
        "fct-source": "src/Hails-Data-Hson.html#%3D%3A",
        "fct-type": "method",
        "title": "(=:)"
      },
      "index": {
        "description": "Given name and value construct either HsonField or BsonField",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "(=:) =:",
        "normalized": "FieldName-\u003ea-\u003eb",
        "package": "hails",
        "partial": "",
        "signature": "FieldName-\u003ev-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:Binary",
      "description": {
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "Binary",
        "fct-source": "src/Hails-Data-Hson-TCB.html#Binary",
        "fct-type": "function",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "Binary",
        "normalized": "",
        "package": "hails",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:BsonArray",
      "description": {
        "fct-descr": "\u003cp\u003eList of values\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "BsonArray [BsonValue]",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonArray"
      },
      "index": {
        "description": "List of values",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "BsonArray",
        "normalized": "BsonArray[BsonValue]",
        "package": "hails",
        "partial": "Bson Array",
        "signature": "BsonArray[BsonValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:BsonBlob",
      "description": {
        "fct-descr": "\u003cp\u003eBinary blob value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "BsonBlob Binary",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonBlob"
      },
      "index": {
        "description": "Binary blob value",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "BsonBlob",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Blob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:BsonBool",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "BsonBool Bool",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonBool"
      },
      "index": {
        "description": "Boolean value",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "BsonBool",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:BsonDoc",
      "description": {
        "fct-descr": "\u003cp\u003eInner document\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "BsonDoc BsonDocument",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonDoc"
      },
      "index": {
        "description": "Inner document",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "BsonDoc",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:BsonField",
      "description": {
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "BsonField !FieldName BsonValue",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonField",
        "fct-type": "function",
        "title": "BsonField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "BsonField",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:BsonFloat",
      "description": {
        "fct-descr": "\u003cp\u003eFloat value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "BsonFloat Double",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonFloat"
      },
      "index": {
        "description": "Float value",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "BsonFloat",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:BsonInt32",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit integer\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "BsonInt32 Int32",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonInt32"
      },
      "index": {
        "description": "bit integer",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "BsonInt32",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:BsonInt64",
      "description": {
        "fct-descr": "\u003cp\u003e64-bit integer\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "BsonInt64 Int64",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonInt64"
      },
      "index": {
        "description": "bit integer",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "BsonInt64",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:BsonNull",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eNULL\u003c/code\u003e value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "BsonNull",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonNull"
      },
      "index": {
        "description": "The NULL value",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "BsonNull",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:BsonObjId",
      "description": {
        "fct-descr": "\u003cp\u003eObject Id value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "BsonObjId ObjectId",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonObjId"
      },
      "index": {
        "description": "Object Id value",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "BsonObjId",
        "normalized": "",
        "package": "hails",
        "partial": "Bson Obj Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:BsonString",
      "description": {
        "fct-descr": "\u003cp\u003eString value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "BsonString Text",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonString"
      },
      "index": {
        "description": "String value",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "BsonString",
        "normalized": "",
        "package": "hails",
        "partial": "Bson String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:BsonUTC",
      "description": {
        "fct-descr": "\u003cp\u003eTime stamp value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "BsonUTC UTCTime",
        "fct-source": "src/Hails-Data-Hson-TCB.html#BsonValue",
        "fct-type": "function",
        "title": "BsonUTC"
      },
      "index": {
        "description": "Time stamp value",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "BsonUTC",
        "normalized": "",
        "package": "hails",
        "partial": "Bson UTC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:HsonField",
      "description": {
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "HsonField !FieldName HsonValue",
        "fct-source": "src/Hails-Data-Hson-TCB.html#HsonField",
        "fct-type": "function",
        "title": "HsonField"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "HsonField",
        "normalized": "",
        "package": "hails",
        "partial": "Hson Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:HsonLabeled",
      "description": {
        "fct-descr": "\u003cp\u003ePolicy labeled value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "HsonLabeled PolicyLabeled",
        "fct-source": "src/Hails-Data-Hson-TCB.html#HsonValue",
        "fct-type": "function",
        "title": "HsonLabeled"
      },
      "index": {
        "description": "Policy labeled value",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "HsonLabeled",
        "normalized": "",
        "package": "hails",
        "partial": "Hson Labeled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:HsonValue",
      "description": {
        "fct-descr": "\u003cp\u003eBson value\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "HsonValue BsonValue",
        "fct-source": "src/Hails-Data-Hson-TCB.html#HsonValue",
        "fct-type": "function",
        "title": "HsonValue"
      },
      "index": {
        "description": "Bson value",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "HsonValue",
        "normalized": "",
        "package": "hails",
        "partial": "Hson Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:Oid",
      "description": {
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "Oid Word32 Word64",
        "fct-type": "function",
        "title": "Oid"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "Oid",
        "normalized": "",
        "package": "hails",
        "partial": "Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:at",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003evalueAt\u003c/a\u003e\u003c/code\u003e, but returns \"unwrapped\" value.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "FieldName -\u003e d -\u003e v",
        "fct-source": "src/Hails-Data-Hson.html#at",
        "fct-type": "method",
        "title": "at"
      },
      "index": {
        "description": "Same as valueAt but returns unwrapped value",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "at",
        "normalized": "FieldName-\u003ea-\u003eb",
        "package": "hails",
        "partial": "",
        "signature": "FieldName-\u003ed-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:bsonDocToHsonDoc",
      "description": {
        "fct-descr": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eBsonDocument\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHsonDocument\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "BsonDocument -\u003e HsonDocument",
        "fct-source": "src/Hails-Data-Hson.html#bsonDocToHsonDoc",
        "fct-type": "function",
        "title": "bsonDocToHsonDoc"
      },
      "index": {
        "description": "Convert BsonDocument to HsonDocument",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "bsonDocToHsonDoc",
        "normalized": "BsonDocument-\u003eHsonDocument",
        "package": "hails",
        "partial": "Doc To Hson Doc",
        "signature": "BsonDocument-\u003eHsonDocument"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:bsonFieldToHsonField",
      "description": {
        "fct-descr": "\u003cp\u003eConvert \u003ccode\u003e\u003ca\u003eBsonField\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHsonField\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "BsonField -\u003e HsonField",
        "fct-source": "src/Hails-Data-Hson.html#bsonFieldToHsonField",
        "fct-type": "function",
        "title": "bsonFieldToHsonField"
      },
      "index": {
        "description": "Convert BsonField to HsonField",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "bsonFieldToHsonField",
        "normalized": "BsonField-\u003eHsonField",
        "package": "hails",
        "partial": "Field To Hson Field",
        "signature": "BsonField-\u003eHsonField"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:exclude",
      "description": {
        "fct-descr": "\u003cp\u003eExclude fields specified.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "[FieldName] -\u003e [f] -\u003e [f]",
        "fct-source": "src/Hails-Data-Hson.html#exclude",
        "fct-type": "function",
        "title": "exclude"
      },
      "index": {
        "description": "Exclude fields specified",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "exclude",
        "normalized": "[FieldName]-\u003e[a]-\u003e[a]",
        "package": "hails",
        "partial": "",
        "signature": "[FieldName]-\u003e[f]-\u003e[f]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:fieldName",
      "description": {
        "fct-descr": "\u003cp\u003eGet the name of a field.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "f -\u003e FieldName",
        "fct-source": "src/Hails-Data-Hson.html#fieldName",
        "fct-type": "method",
        "title": "fieldName"
      },
      "index": {
        "description": "Get the name of field",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "fieldName",
        "normalized": "a-\u003eFieldName",
        "package": "hails",
        "partial": "Name",
        "signature": "f-\u003eFieldName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:fieldValue",
      "description": {
        "fct-descr": "\u003cp\u003eGet the field value.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "f -\u003e m v",
        "fct-source": "src/Hails-Data-Hson.html#fieldValue",
        "fct-type": "method",
        "title": "fieldValue"
      },
      "index": {
        "description": "Get the field value",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "fieldValue",
        "normalized": "a-\u003eb c",
        "package": "hails",
        "partial": "Value",
        "signature": "f-\u003em v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:fromBsonValue",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "BsonValue -\u003e m a",
        "fct-source": "src/Hails-Data-Hson.html#fromBsonValue",
        "fct-type": "method",
        "title": "fromBsonValue"
      },
      "index": {
        "description": "Convert from BsonValue",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "fromBsonValue",
        "normalized": "BsonValue-\u003ea b",
        "package": "hails",
        "partial": "Bson Value",
        "signature": "BsonValue-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:fromHsonValue",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "HsonValue -\u003e m a",
        "fct-source": "src/Hails-Data-Hson.html#fromHsonValue",
        "fct-type": "method",
        "title": "fromHsonValue"
      },
      "index": {
        "description": "Convert from HsonValue",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "fromHsonValue",
        "normalized": "HsonValue-\u003ea b",
        "package": "hails",
        "partial": "Hson Value",
        "signature": "HsonValue-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:genObjectId",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a fresh ObjectId.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "m ObjectId",
        "fct-source": "src/Hails-Data-Hson.html#genObjectId",
        "fct-type": "function",
        "title": "genObjectId"
      },
      "index": {
        "description": "Create fresh ObjectId",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "genObjectId",
        "normalized": "",
        "package": "hails",
        "partial": "Object Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:getPolicyLabeled",
      "description": {
        "fct-descr": "\u003cp\u003eGet the policy labeled value, only if the policy has been\n applied.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "PolicyLabeled -\u003e m (DCLabeled BsonValue)",
        "fct-source": "src/Hails-Data-Hson.html#getPolicyLabeled",
        "fct-type": "function",
        "title": "getPolicyLabeled"
      },
      "index": {
        "description": "Get the policy labeled value only if the policy has been applied",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "getPolicyLabeled",
        "normalized": "PolicyLabeled-\u003ea(DCLabeled BsonValue)",
        "package": "hails",
        "partial": "Policy Labeled",
        "signature": "PolicyLabeled-\u003em(DCLabeled BsonValue)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:hasPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a policy labeled value a labeled \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "DCLabeled BsonValue -\u003e PolicyLabeled",
        "fct-source": "src/Hails-Data-Hson.html#hasPolicy",
        "fct-type": "function",
        "title": "hasPolicy"
      },
      "index": {
        "description": "Create policy labeled value labeled HsonValue",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "hasPolicy",
        "normalized": "DCLabeled BsonValue-\u003ePolicyLabeled",
        "package": "hails",
        "partial": "Policy",
        "signature": "DCLabeled BsonValue-\u003ePolicyLabeled"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:hsonDocToBsonDoc",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a relaxed version of \u003ccode\u003e\u003ca\u003ehsonDocToBsonDocStrict\u003c/a\u003e\u003c/code\u003e that only\n converts fields containing \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003es. In other words, the\n \u003ccode\u003e\u003ca\u003ePolicyLabeled\u003c/a\u003e\u003c/code\u003e values are dropped.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "HsonDocument -\u003e BsonDocument",
        "fct-source": "src/Hails-Data-Hson.html#hsonDocToBsonDoc",
        "fct-type": "function",
        "title": "hsonDocToBsonDoc"
      },
      "index": {
        "description": "This is relaxed version of hsonDocToBsonDocStrict that only converts fields containing BsonValue In other words the PolicyLabeled values are dropped",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "hsonDocToBsonDoc",
        "normalized": "HsonDocument-\u003eBsonDocument",
        "package": "hails",
        "partial": "Doc To Bson Doc",
        "signature": "HsonDocument-\u003eBsonDocument"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:hsonDocToBsonDocStrict",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eHsonDocument\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eBsonDocument\u003c/a\u003e\u003c/code\u003e. If any of the\n fields contain \u003ccode\u003e\u003ca\u003ePolicyLabeled\u003c/a\u003e\u003c/code\u003e values (i.e., are \u003ccode\u003e\u003ca\u003eHsonLabeled\u003c/a\u003e\u003c/code\u003e\n values) this function \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003es, otherwise it returns the converted\n document. To check for failure use \u003ccode\u003e\u003ca\u003eisBsonDoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "HsonDocument -\u003e m BsonDocument",
        "fct-source": "src/Hails-Data-Hson.html#hsonDocToBsonDocStrict",
        "fct-type": "function",
        "title": "hsonDocToBsonDocStrict"
      },
      "index": {
        "description": "Convert an HsonDocument to BsonDocument If any of the fields contain PolicyLabeled values i.e are HsonLabeled values this function fail otherwise it returns the converted document To check for failure use isBsonDoc",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "hsonDocToBsonDocStrict",
        "normalized": "HsonDocument-\u003ea BsonDocument",
        "package": "hails",
        "partial": "Doc To Bson Doc Strict",
        "signature": "HsonDocument-\u003em BsonDocument"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:include",
      "description": {
        "fct-descr": "\u003cp\u003eOnly include fields specified.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "[FieldName] -\u003e [f] -\u003e [f]",
        "fct-source": "src/Hails-Data-Hson.html#include",
        "fct-type": "function",
        "title": "include"
      },
      "index": {
        "description": "Only include fields specified",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "include",
        "normalized": "[FieldName]-\u003e[a]-\u003e[a]",
        "package": "hails",
        "partial": "",
        "signature": "[FieldName]-\u003e[f]-\u003e[f]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:isBsonDoc",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the document is composed solely of \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003es.\n This function is useful when converting from \u003ccode\u003e\u003ca\u003eHsonDocument\u003c/a\u003e\u003c/code\u003e to\n \u003ccode\u003e\u003ca\u003eBsonDocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "HsonDocument -\u003e Bool",
        "fct-source": "src/Hails-Data-Hson.html#isBsonDoc",
        "fct-type": "function",
        "title": "isBsonDoc"
      },
      "index": {
        "description": "Returns true if the document is composed solely of BsonValue This function is useful when converting from HsonDocument to BsonDocument",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "isBsonDoc",
        "normalized": "HsonDocument-\u003eBool",
        "package": "hails",
        "partial": "Bson Doc",
        "signature": "HsonDocument-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:labeledRequestToHson",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a labeled request to a labeled document. Values of fields that\n have a name that ends with \u003ccode\u003e[]\u003c/code\u003e are converted to arrays and the\n suffix \u003ccode\u003e[]\u003c/code\u003e is stripped from the name.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "DCLabeled Request -\u003e m (DCLabeled HsonDocument)",
        "fct-source": "src/Hails-Data-Hson.html#labeledRequestToHson",
        "fct-type": "function",
        "title": "labeledRequestToHson"
      },
      "index": {
        "description": "Convert labeled request to labeled document Values of fields that have name that ends with are converted to arrays and the suffix is stripped from the name",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "labeledRequestToHson",
        "normalized": "DCLabeled Request-\u003ea(DCLabeled HsonDocument)",
        "package": "hails",
        "partial": "Request To Hson",
        "signature": "DCLabeled Request-\u003em(DCLabeled HsonDocument)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:look",
      "description": {
        "fct-descr": "\u003cp\u003eFind value of field in document, or fail not found.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "FieldName -\u003e [f] -\u003e m v",
        "fct-source": "src/Hails-Data-Hson.html#look",
        "fct-type": "method",
        "title": "look"
      },
      "index": {
        "description": "Find value of field in document or fail not found",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "look",
        "normalized": "FieldName-\u003e[a]-\u003eb c",
        "package": "hails",
        "partial": "",
        "signature": "FieldName-\u003e[f]-\u003em v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003elook\u003c/a\u003e\u003c/code\u003e, but returns \"unwrapped\" value.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "FieldName -\u003e d -\u003e m v",
        "fct-source": "src/Hails-Data-Hson.html#lookup",
        "fct-type": "method",
        "title": "lookup"
      },
      "index": {
        "description": "Same as look but returns unwrapped value",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "lookup",
        "normalized": "FieldName-\u003ea-\u003eb c",
        "package": "hails",
        "partial": "",
        "signature": "FieldName-\u003ed-\u003em v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eMerge documents with preference given to first one when both have\n the same field name.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "[f] -\u003e [f] -\u003e [f]",
        "fct-source": "src/Hails-Data-Hson.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "Merge documents with preference given to first one when both have the same field name",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "merge",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "hails",
        "partial": "",
        "signature": "[f]-\u003e[f]-\u003e[f]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:needPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a policy labeled value given an unlabeled \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "BsonValue -\u003e PolicyLabeled",
        "fct-source": "src/Hails-Data-Hson.html#needPolicy",
        "fct-type": "function",
        "title": "needPolicy"
      },
      "index": {
        "description": "Create policy labeled value given an unlabeled HsonValue",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "needPolicy",
        "normalized": "BsonValue-\u003ePolicyLabeled",
        "package": "hails",
        "partial": "Policy",
        "signature": "BsonValue-\u003ePolicyLabeled"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:serialize",
      "description": {
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "[f] -\u003e ByteString",
        "fct-source": "src/Hails-Data-Hson.html#serialize",
        "fct-type": "method",
        "title": "serialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "serialize",
        "normalized": "[a]-\u003eByteString",
        "package": "hails",
        "partial": "",
        "signature": "[f]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:toBsonValue",
      "description": {
        "fct-descr": "\u003cp\u003eConvert to \u003ccode\u003e\u003ca\u003eBsonValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "a -\u003e BsonValue",
        "fct-source": "src/Hails-Data-Hson.html#toBsonValue",
        "fct-type": "method",
        "title": "toBsonValue"
      },
      "index": {
        "description": "Convert to BsonValue",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "toBsonValue",
        "normalized": "a-\u003eBsonValue",
        "package": "hails",
        "partial": "Bson Value",
        "signature": "a-\u003eBsonValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:toHsonValue",
      "description": {
        "fct-descr": "\u003cp\u003eConvert to \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "a -\u003e HsonValue",
        "fct-source": "src/Hails-Data-Hson.html#toHsonValue",
        "fct-type": "method",
        "title": "toHsonValue"
      },
      "index": {
        "description": "Convert to HsonValue",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "toHsonValue",
        "normalized": "a-\u003eHsonValue",
        "package": "hails",
        "partial": "Hson Value",
        "signature": "a-\u003eHsonValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:unBinary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "S8",
        "fct-source": "src/Hails-Data-Hson-TCB.html#Binary",
        "fct-type": "function",
        "title": "unBinary"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "unBinary",
        "normalized": "",
        "package": "hails",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Data-Hson.html#v:valueAt",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003elook\u003c/a\u003e\u003c/code\u003e, but \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003es if the value is not found.\n\u003c/p\u003e",
        "fct-module": "Hails.Data.Hson",
        "fct-package": "hails",
        "fct-signature": "FieldName -\u003e [f] -\u003e v",
        "fct-source": "src/Hails-Data-Hson.html#valueAt",
        "fct-type": "method",
        "title": "valueAt"
      },
      "index": {
        "description": "Same as look but fail if the value is not found",
        "hierarchy": "Hails Data Hson",
        "module": "Hails.Data.Hson",
        "name": "valueAt",
        "normalized": "FieldName-\u003e[a]-\u003eb",
        "package": "hails",
        "partial": "At",
        "signature": "FieldName-\u003e[f]-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports labeled documents and the databse monad\n(\u003ccode\u003e\u003ca\u003eDBAction\u003c/a\u003e\u003c/code\u003e). The database monad is used by apps and policy modules to\nexecute database actions against a policy module's databse (see\n\u003ca\u003eHails.PolicyModule\u003c/a\u003e). The Hails database model and interface is\ndocumented in \u003ca\u003eHails.Database\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-Database-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "This module exports labeled documents and the databse monad DBAction The database monad is used by apps and policy modules to execute database actions against policy module databse see Hails.PolicyModule The Hails database model and interface is documented in Hails.Database",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "Core",
        "normalized": "",
        "package": "hails",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#t:AccessMode",
      "description": {
        "fct-descr": "\u003cp\u003eType of reads and writes to perform\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "AccessMode"
      },
      "index": {
        "description": "Type of reads and writes to perform",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "AccessMode",
        "normalized": "",
        "package": "hails",
        "partial": "Access Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#t:Collection",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eCollection\u003c/code\u003e is a MongoDB collection name with an associated\n label, clearance and labeling policy. Access to the collection is\n restricted according to the collection label. Data inserted-to and\n retrieved-from the collection will be labeled according to the\n collection policy, with the guarantee that no data more sensitive than\n the collection clearance can be inserted into the collection.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#Collection",
        "fct-type": "data",
        "title": "Collection"
      },
      "index": {
        "description": "Collection is MongoDB collection name with an associated label clearance and labeling policy Access to the collection is restricted according to the collection label Data inserted-to and retrieved-from the collection will be labeled according to the collection policy with the guarantee that no data more sensitive than the collection clearance can be inserted into the collection",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "Collection",
        "normalized": "",
        "package": "hails",
        "partial": "Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#t:CollectionName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a collection.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Database-TCB.html#CollectionName",
        "fct-type": "type",
        "title": "CollectionName"
      },
      "index": {
        "description": "The name of collection",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "CollectionName",
        "normalized": "",
        "package": "hails",
        "partial": "Collection Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#t:CollectionSet",
      "description": {
        "fct-descr": "\u003cp\u003eA labeled \u003ccode\u003e\u003ca\u003eCollection\u003c/a\u003e\u003c/code\u003e set.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Database-TCB.html#CollectionSet",
        "fct-type": "type",
        "title": "CollectionSet"
      },
      "index": {
        "description": "labeled Collection set",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "CollectionSet",
        "normalized": "",
        "package": "hails",
        "partial": "Collection Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#t:DBAction",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eDBAction\u003c/code\u003e is the monad within which database actions can be\n executed, and policy modules are defined.  The monad is simply a\n state monad with \u003ccode\u003e\u003ca\u003eDC\u003c/a\u003e\u003c/code\u003e as monad as the underlying monad with access to\n a database system configuration (\u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAccessMode\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003eDatabase\u003c/a\u003e\u003c/code\u003e).  The value constructor is part of the \u003ccode\u003eTCB\u003c/code\u003e as to\n disallow untrusted code from modifying the access mode.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#DBAction",
        "fct-type": "data",
        "title": "DBAction"
      },
      "index": {
        "description": "DBAction is the monad within which database actions can be executed and policy modules are defined The monad is simply state monad with DC as monad as the underlying monad with access to database system configuration Pipe AccessMode and Database The value constructor is part of the TCB as to disallow untrusted code from modifying the access mode",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "DBAction",
        "normalized": "",
        "package": "hails",
        "partial": "DBAction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#t:DBActionState",
      "description": {
        "fct-descr": "\u003cp\u003eThe database system state threaded within a Hails computation.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#DBActionState",
        "fct-type": "data",
        "title": "DBActionState"
      },
      "index": {
        "description": "The database system state threaded within Hails computation",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "DBActionState",
        "normalized": "",
        "package": "hails",
        "partial": "DBAction State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#t:Database",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eDatabase\u003c/code\u003e is a MongoDB database with an associated label and set\n of collections. The label is used to restrict access to the database.\n Since collection policies are specified by policy modules, every\n collection must \u003cem\u003ealways\u003c/em\u003e be associated with some database (and\n thereby, policy module); a policy module is \u003cem\u003enot\u003c/em\u003e allowed to create a\n collection (and specify policies on it) in an arbitrary database.  We\n allow for the existance of a collection to be secrect, and thus\n protect the set of collections with a label.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#Database",
        "fct-type": "data",
        "title": "Database"
      },
      "index": {
        "description": "Database is MongoDB database with an associated label and set of collections The label is used to restrict access to the database Since collection policies are specified by policy modules every collection must always be associated with some database and thereby policy module policy module is not allowed to create collection and specify policies on it in an arbitrary database We allow for the existance of collection to be secrect and thus protect the set of collections with label",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "Database",
        "normalized": "",
        "package": "hails",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#t:DatabaseName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a database.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Database-TCB.html#DatabaseName",
        "fct-type": "type",
        "title": "DatabaseName"
      },
      "index": {
        "description": "The name of database",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "DatabaseName",
        "normalized": "",
        "package": "hails",
        "partial": "Database Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#t:LabeledHsonDocument",
      "description": {
        "fct-descr": "\u003cp\u003eA labeled \u003ccode\u003e\u003ca\u003eHsonDocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Database-Core.html#LabeledHsonDocument",
        "fct-type": "type",
        "title": "LabeledHsonDocument"
      },
      "index": {
        "description": "labeled HsonDocument",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "LabeledHsonDocument",
        "normalized": "",
        "package": "hails",
        "partial": "Labeled Hson Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#t:MonadDB",
      "description": {
        "fct-descr": "\u003cp\u003eArbitrary monad that can perform database actions.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-Database-Core.html#MonadDB",
        "fct-type": "class",
        "title": "MonadDB"
      },
      "index": {
        "description": "Arbitrary monad that can perform database actions",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "MonadDB",
        "normalized": "",
        "package": "hails",
        "partial": "Monad DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#t:Pipe",
      "description": {
        "fct-descr": "\u003cp\u003eThread-safe TCP connection with pipelined requests\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Pipe"
      },
      "index": {
        "description": "Thread-safe TCP connection with pipelined requests",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "Pipe",
        "normalized": "",
        "package": "hails",
        "partial": "Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:ConfirmWrites",
      "description": {
        "fct-descr": "\u003cp\u003eRead-write action, slave not OK, every write is confirmed with getLastError.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "ConfirmWrites GetLastError",
        "fct-type": "function",
        "title": "ConfirmWrites"
      },
      "index": {
        "description": "Read-write action slave not OK every write is confirmed with getLastError",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "ConfirmWrites",
        "normalized": "",
        "package": "hails",
        "partial": "Confirm Writes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:ReadStaleOk",
      "description": {
        "fct-descr": "\u003cp\u003eRead-only action, reading stale data from a slave is OK.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "ReadStaleOk",
        "fct-type": "function",
        "title": "ReadStaleOk"
      },
      "index": {
        "description": "Read-only action reading stale data from slave is OK",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "ReadStaleOk",
        "normalized": "",
        "package": "hails",
        "partial": "Read Stale Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:UnconfirmedWrites",
      "description": {
        "fct-descr": "\u003cp\u003eRead-write action, slave not OK, every write is fire & forget.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "UnconfirmedWrites",
        "fct-type": "function",
        "title": "UnconfirmedWrites"
      },
      "index": {
        "description": "Read-write action slave not OK every write is fire forget",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "UnconfirmedWrites",
        "normalized": "",
        "package": "hails",
        "partial": "Unconfirmed Writes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:colClearance",
      "description": {
        "fct-descr": "\u003cp\u003eCollection clearance\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "Collection -\u003e DCLabel",
        "fct-source": "src/Hails-Database-TCB.html#colClearance",
        "fct-type": "function",
        "title": "colClearance"
      },
      "index": {
        "description": "Collection clearance",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "colClearance",
        "normalized": "Collection-\u003eDCLabel",
        "package": "hails",
        "partial": "Clearance",
        "signature": "Collection-\u003eDCLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:colLabel",
      "description": {
        "fct-descr": "\u003cp\u003eCollection label\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "Collection -\u003e DCLabel",
        "fct-source": "src/Hails-Database-TCB.html#colLabel",
        "fct-type": "function",
        "title": "colLabel"
      },
      "index": {
        "description": "Collection label",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "colLabel",
        "normalized": "Collection-\u003eDCLabel",
        "package": "hails",
        "partial": "Label",
        "signature": "Collection-\u003eDCLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:colName",
      "description": {
        "fct-descr": "\u003cp\u003eCollection name\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "Collection -\u003e CollectionName",
        "fct-source": "src/Hails-Database-TCB.html#colName",
        "fct-type": "function",
        "title": "colName"
      },
      "index": {
        "description": "Collection name",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "colName",
        "normalized": "Collection-\u003eCollectionName",
        "package": "hails",
        "partial": "Name",
        "signature": "Collection-\u003eCollectionName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:colPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eCollection labeling policies\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "Collection -\u003e CollectionPolicy",
        "fct-source": "src/Hails-Database-TCB.html#colPolicy",
        "fct-type": "function",
        "title": "colPolicy"
      },
      "index": {
        "description": "Collection labeling policies",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "colPolicy",
        "normalized": "Collection-\u003eCollectionPolicy",
        "package": "hails",
        "partial": "Policy",
        "signature": "Collection-\u003eCollectionPolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:databaseCollections",
      "description": {
        "fct-descr": "\u003cp\u003eCollections associated with databsae\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "Database -\u003e CollectionSet",
        "fct-source": "src/Hails-Database-TCB.html#databaseCollections",
        "fct-type": "function",
        "title": "databaseCollections"
      },
      "index": {
        "description": "Collections associated with databsae",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "databaseCollections",
        "normalized": "Database-\u003eCollectionSet",
        "package": "hails",
        "partial": "Collections",
        "signature": "Database-\u003eCollectionSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:databaseLabel",
      "description": {
        "fct-descr": "\u003cp\u003eLabel of database\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "Database -\u003e DCLabel",
        "fct-source": "src/Hails-Database-TCB.html#databaseLabel",
        "fct-type": "function",
        "title": "databaseLabel"
      },
      "index": {
        "description": "Label of database",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "databaseLabel",
        "normalized": "Database-\u003eDCLabel",
        "package": "hails",
        "partial": "Label",
        "signature": "Database-\u003eDCLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:databaseName",
      "description": {
        "fct-descr": "\u003cp\u003eDatabase name\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "Database -\u003e DatabaseName",
        "fct-source": "src/Hails-Database-TCB.html#databaseName",
        "fct-type": "function",
        "title": "databaseName"
      },
      "index": {
        "description": "Database name",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "databaseName",
        "normalized": "Database-\u003eDatabaseName",
        "package": "hails",
        "partial": "Name",
        "signature": "Database-\u003eDatabaseName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:evalDBAction",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a database action returning the final result.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "DBAction a -\u003e DBActionState -\u003e DC a",
        "fct-source": "src/Hails-Database-Core.html#evalDBAction",
        "fct-type": "function",
        "title": "evalDBAction"
      },
      "index": {
        "description": "Execute database action returning the final result",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "evalDBAction",
        "normalized": "DBAction a-\u003eDBActionState-\u003eDC a",
        "package": "hails",
        "partial": "DBAction",
        "signature": "DBAction a-\u003eDBActionState-\u003eDC a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:getDatabase",
      "description": {
        "fct-descr": "\u003cp\u003eGet the underlying database. Must be able to read from the\n database as enforced by applying \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e to the database label.\n This is required because the database label protects the\n label on collections which can be projected given a \u003ccode\u003e\u003ca\u003eDatabase\u003c/a\u003e\u003c/code\u003e\n value.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "DBAction Database",
        "fct-source": "src/Hails-Database-Core.html#getDatabase",
        "fct-type": "function",
        "title": "getDatabase"
      },
      "index": {
        "description": "Get the underlying database Must be able to read from the database as enforced by applying taint to the database label This is required because the database label protects the label on collections which can be projected given Database value",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "getDatabase",
        "normalized": "",
        "package": "hails",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:getDatabaseP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egetDatabase\u003c/a\u003e\u003c/code\u003e, but uses privileges when raising the\n current label.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e DBAction Database",
        "fct-source": "src/Hails-Database-Core.html#getDatabaseP",
        "fct-type": "function",
        "title": "getDatabaseP"
      },
      "index": {
        "description": "Same as getDatabase but uses privileges when raising the current label",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "getDatabaseP",
        "normalized": "DCPriv-\u003eDBAction Database",
        "package": "hails",
        "partial": "Database",
        "signature": "DCPriv-\u003eDBAction Database"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:liftDB",
      "description": {
        "fct-descr": "\u003cp\u003eLift a database action into the database monad.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "DBAction a -\u003e m a",
        "fct-source": "src/Hails-Database-Core.html#liftDB",
        "fct-type": "method",
        "title": "liftDB"
      },
      "index": {
        "description": "Lift database action into the database monad",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "liftDB",
        "normalized": "DBAction a-\u003eb a",
        "package": "hails",
        "partial": "DB",
        "signature": "DBAction a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:master",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eConfirmWrites\u003c/a\u003e\u003c/code\u003e []\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "AccessMode",
        "fct-type": "function",
        "title": "master"
      },
      "index": {
        "description": "Same as ConfirmWrites",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "master",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:runDBAction",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a database action returning the final result and state.\n In general, code should instead use \u003ccode\u003e\u003ca\u003eevalDBAction\u003c/a\u003e\u003c/code\u003e. This function\n is primarily used by trusted code to initialize a policy module\n which may have modified the underlying database.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "DBAction a -\u003e DBActionState -\u003e DC (a, DBActionState)",
        "fct-source": "src/Hails-Database-Core.html#runDBAction",
        "fct-type": "function",
        "title": "runDBAction"
      },
      "index": {
        "description": "Execute database action returning the final result and state In general code should instead use evalDBAction This function is primarily used by trusted code to initialize policy module which may have modified the underlying database",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "runDBAction",
        "normalized": "DBAction a-\u003eDBActionState-\u003eDC(a,DBActionState)",
        "package": "hails",
        "partial": "DBAction",
        "signature": "DBAction a-\u003eDBActionState-\u003eDC(a,DBActionState)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Core.html#v:slaveOk",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eReadStaleOk\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Core",
        "fct-package": "hails",
        "fct-signature": "AccessMode",
        "fct-type": "function",
        "title": "slaveOk"
      },
      "index": {
        "description": "Same as ReadStaleOk",
        "hierarchy": "Hails Database Core",
        "module": "Hails.Database.Core",
        "name": "slaveOk",
        "normalized": "",
        "package": "hails",
        "partial": "Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query-TCB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the trusted types and functions used by\n\u003ca\u003eHails.Database.Query\u003c/a\u003e when performing database queries.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.Database.Query.TCB",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-Database-Query-TCB.html",
        "fct-type": "module",
        "title": "TCB"
      },
      "index": {
        "description": "This module exports the trusted types and functions used by Hails.Database.Query when performing database queries",
        "hierarchy": "Hails Database Query TCB",
        "module": "Hails.Database.Query.TCB",
        "name": "TCB",
        "normalized": "",
        "package": "hails",
        "partial": "TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query-TCB.html#t:Cursor",
      "description": {
        "fct-descr": "\u003cp\u003eA labeled cursor. The cursor is labeled with the join of the\n database and collection it reads from. The collection policies\n are \"carried\" along since they are applied on-demand.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query.TCB",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-Query-TCB.html#Cursor",
        "fct-type": "data",
        "title": "Cursor"
      },
      "index": {
        "description": "labeled cursor The cursor is labeled with the join of the database and collection it reads from The collection policies are carried along since they are applied on-demand",
        "hierarchy": "Hails Database Query TCB",
        "module": "Hails.Database.Query.TCB",
        "name": "Cursor",
        "normalized": "",
        "package": "hails",
        "partial": "Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query-TCB.html#v:CursorTCB",
      "description": {
        "fct-module": "Hails.Database.Query.TCB",
        "fct-package": "hails",
        "fct-signature": "CursorTCB",
        "fct-source": "src/Hails-Database-Query-TCB.html#Cursor",
        "fct-type": "function",
        "title": "CursorTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Database Query TCB",
        "module": "Hails.Database.Query.TCB",
        "name": "CursorTCB",
        "normalized": "",
        "package": "hails",
        "partial": "Cursor TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query-TCB.html#v:curCollection",
      "description": {
        "fct-descr": "\u003cp\u003eCollection cursor is reading from\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query.TCB",
        "fct-package": "hails",
        "fct-signature": "Collection",
        "fct-source": "src/Hails-Database-Query-TCB.html#Cursor",
        "fct-type": "function",
        "title": "curCollection"
      },
      "index": {
        "description": "Collection cursor is reading from",
        "hierarchy": "Hails Database Query TCB",
        "module": "Hails.Database.Query.TCB",
        "name": "curCollection",
        "normalized": "",
        "package": "hails",
        "partial": "Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query-TCB.html#v:curInternal",
      "description": {
        "fct-descr": "\u003cp\u003eInternal MongoDB cursor\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query.TCB",
        "fct-package": "hails",
        "fct-signature": "Cursor",
        "fct-source": "src/Hails-Database-Query-TCB.html#Cursor",
        "fct-type": "function",
        "title": "curInternal"
      },
      "index": {
        "description": "Internal MongoDB cursor",
        "hierarchy": "Hails Database Query TCB",
        "module": "Hails.Database.Query.TCB",
        "name": "curInternal",
        "normalized": "",
        "package": "hails",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query-TCB.html#v:curLabel",
      "description": {
        "fct-descr": "\u003cp\u003eCursor label\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query.TCB",
        "fct-package": "hails",
        "fct-signature": "DCLabel",
        "fct-source": "src/Hails-Database-Query-TCB.html#Cursor",
        "fct-type": "function",
        "title": "curLabel"
      },
      "index": {
        "description": "Cursor label",
        "hierarchy": "Hails Database Query TCB",
        "module": "Hails.Database.Query.TCB",
        "name": "curLabel",
        "normalized": "",
        "package": "hails",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query-TCB.html#v:curProject",
      "description": {
        "fct-descr": "\u003cp\u003eProjector from query. Used to remove\n fields after performing query.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query.TCB",
        "fct-package": "hails",
        "fct-signature": "[FieldName]",
        "fct-source": "src/Hails-Database-Query-TCB.html#Cursor",
        "fct-type": "function",
        "title": "curProject"
      },
      "index": {
        "description": "Projector from query Used to remove fields after performing query",
        "hierarchy": "Hails Database Query TCB",
        "module": "Hails.Database.Query.TCB",
        "name": "curProject",
        "normalized": "[FieldName]",
        "package": "hails",
        "partial": "Project",
        "signature": "[FieldName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the basic types used to create queries and\nselections. Different from standard MongoDB, Hails queries are limited\nto \u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003es (similarly, ordering a query result is limited\nto such fields) and projections are carried out by this library and\nnot the database. The later is a result of allowing policy modules to\nexpress a labeling policy as a function of a document -- hence we\ncannot determine at compile time if a field is used in a policy and\nthus must be included in the projection. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-Database-Query.html",
        "fct-type": "module",
        "title": "Query"
      },
      "index": {
        "description": "This module exports the basic types used to create queries and selections Different from standard MongoDB Hails queries are limited to SearchableField similarly ordering query result is limited to such fields and projections are carried out by this library and not the database The later is result of allowing policy modules to express labeling policy as function of document hence we cannot determine at compile time if field is used in policy and thus must be included in the projection",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "Query",
        "normalized": "",
        "package": "hails",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#t:BatchSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of document to return in each batch response from the server. 0 means use Mongo default.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "BatchSize"
      },
      "index": {
        "description": "The number of document to return in each batch response from the server means use Mongo default",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "BatchSize",
        "normalized": "",
        "package": "hails",
        "partial": "Batch Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#t:Cursor",
      "description": {
        "fct-descr": "\u003cp\u003eA labeled cursor. The cursor is labeled with the join of the\n database and collection it reads from. The collection policies\n are \"carried\" along since they are applied on-demand.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-Query-TCB.html#Cursor",
        "fct-type": "data",
        "title": "Cursor"
      },
      "index": {
        "description": "labeled cursor The cursor is labeled with the join of the database and collection it reads from The collection policies are carried along since they are applied on-demand",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "Cursor",
        "normalized": "",
        "package": "hails",
        "partial": "Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#t:DBError",
      "description": {
        "fct-descr": "\u003cp\u003eExceptions thrown by invalid database queries.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#DBError",
        "fct-type": "data",
        "title": "DBError"
      },
      "index": {
        "description": "Exceptions thrown by invalid database queries",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "DBError",
        "normalized": "",
        "package": "hails",
        "partial": "DBError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#t:InsertLike",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to generalize insertion and saving of documents.\n Specifically, it permits reusing function names when inserting/saving\n both already-labeled and unlabeled documents.\n Minimal definition: \u003ccode\u003e\u003ca\u003einsertP\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esaveP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-Database-Query.html#InsertLike",
        "fct-type": "class",
        "title": "InsertLike"
      },
      "index": {
        "description": "Class used to generalize insertion and saving of documents Specifically it permits reusing function names when inserting saving both already-labeled and unlabeled documents Minimal definition insertP and saveP",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "InsertLike",
        "normalized": "",
        "package": "hails",
        "partial": "Insert Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#t:Limit",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum number of documents to return, i.e. cursor will close after iterating over this number of documents. 0 means no limit.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Limit"
      },
      "index": {
        "description": "Maximum number of documents to return i.e cursor will close after iterating over this number of documents means no limit",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "Limit",
        "normalized": "",
        "package": "hails",
        "partial": "Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#t:Order",
      "description": {
        "fct-descr": "\u003cp\u003eSorting fields in \u003ccode\u003e\u003ca\u003eAsc\u003c/a\u003e\u003c/code\u003eending or \u003ccode\u003e\u003ca\u003eDesc\u003c/a\u003e\u003c/code\u003eending order.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-Query.html#Order",
        "fct-type": "data",
        "title": "Order"
      },
      "index": {
        "description": "Sorting fields in Asc ending or Desc ending order",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "Order",
        "normalized": "",
        "package": "hails",
        "partial": "Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#t:PolicyError",
      "description": {
        "fct-descr": "\u003cp\u003eA document policy error.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-Query.html#PolicyError",
        "fct-type": "data",
        "title": "PolicyError"
      },
      "index": {
        "description": "document policy error",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "PolicyError",
        "normalized": "",
        "package": "hails",
        "partial": "Policy Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eUse select to create a basic query with defaults, then modify if\n desired. Example: \u003ccode\u003e(select sel col) {limit =: 10}\u003c/code\u003e. For simplicity,\n and since policies may be specified in terms of arbitrary fields,\n The \u003ccode\u003e\u003ca\u003eselection\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e fields are restricted to \u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003es,\n or the \u003ccode\u003e\u003ca\u003e_id\u003c/a\u003e\u003c/code\u003e field that is implicitly a \u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "Use select to create basic query with defaults then modify if desired Example select sel col limit For simplicity and since policies may be specified in terms of arbitrary fields The selection and sort fields are restricted to SearchableField or the id field that is implicitly SearchableField",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "Query",
        "normalized": "",
        "package": "hails",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#t:QueryOption",
      "description": {
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "QueryOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "QueryOption",
        "normalized": "",
        "package": "hails",
        "partial": "Query Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#t:Select",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to simplicy the creation of a 'Selection'/'Query'.\n Specifically, \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e can be used to create a \u003ccode\u003eSection\u003c/code\u003e in a\n straight foward manner, but similarly can be used to create a\n \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e with a set of default options.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-Database-Query.html#Select",
        "fct-type": "class",
        "title": "Select"
      },
      "index": {
        "description": "Class used to simplicy the creation of Selection Query Specifically select can be used to create Section in straight foward manner but similarly can be used to create Query with set of default options",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "Select",
        "normalized": "",
        "package": "hails",
        "partial": "Select",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#t:Selection",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eSection\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eSelector\u003c/a\u003e\u003c/code\u003e query on a \u003ccode\u003e\u003ca\u003eCollection\u003c/a\u003e\u003c/code\u003e. In other\n words, a \u003ccode\u003eSelection\u003c/code\u003e is the necessary information for performing a\n database query.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-Query.html#Selection",
        "fct-type": "data",
        "title": "Selection"
      },
      "index": {
        "description": "Section is Selector query on Collection In other words Selection is the necessary information for performing database query",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "Selection",
        "normalized": "",
        "package": "hails",
        "partial": "Selection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#t:Selector",
      "description": {
        "fct-descr": "\u003cp\u003eFilter for a query, analogous to the \u003ccode\u003eWHERE\u003c/code\u003e clause in\n SQL. \u003ccode\u003e[]\u003c/code\u003e matches all documents in collection. For example,\n \u003ccode\u003e[x \u003ccode\u003e\u003ca\u003e-:\u003c/a\u003e\u003c/code\u003e a, y \u003ccode\u003e\u003ca\u003e-:\u003c/a\u003e\u003c/code\u003e b]\u003c/code\u003e is analogous to\n \u003ccode\u003eWHERE x = a AND y = b\u003c/code\u003e in SQL.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: only \u003ccode\u003e\u003ca\u003eFieldName\u003c/a\u003e\u003c/code\u003es of \u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003es may be used in\n selections, and thus all other fields are ignored.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Database-Query.html#Selector",
        "fct-type": "type",
        "title": "Selector"
      },
      "index": {
        "description": "Filter for query analogous to the WHERE clause in SQL matches all documents in collection For example is analogous to WHERE AND in SQL Note only FieldName of SearchableField may be used in selections and thus all other fields are ignored",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "Selector",
        "normalized": "",
        "package": "hails",
        "partial": "Selector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:Asc",
      "description": {
        "fct-descr": "\u003cp\u003eAscending order\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Asc FieldName",
        "fct-source": "src/Hails-Database-Query.html#Order",
        "fct-type": "function",
        "title": "Asc"
      },
      "index": {
        "description": "Ascending order",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "Asc",
        "normalized": "",
        "package": "hails",
        "partial": "Asc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:AwaitData",
      "description": {
        "fct-descr": "\u003cp\u003eUse with TailableCursor. If we are at the end of the data, block for a while rather than returning no data. After a timeout period, we do return as normal.\n\t| Exhaust  -- ^ Stream the data down full blast in multiple \u003ca\u003emore\u003c/a\u003e packages, on the assumption that the client will fully read all data queried. Faster when you are pulling a lot of data and know you want to pull it all down. Note: the client is not allowed to not read all the data unless it closes the connection.\n Exhaust commented out because not compatible with current \u003ccode\u003e\u003ca\u003ePipeline\u003c/a\u003e\u003c/code\u003e implementation\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "AwaitData",
        "fct-type": "function",
        "title": "AwaitData"
      },
      "index": {
        "description": "Use with TailableCursor If we are at the end of the data block for while rather than returning no data After timeout period we do return as normal Exhaust Stream the data down full blast in multiple more packages on the assumption that the client will fully read all data queried Faster when you are pulling lot of data and know you want to pull it all down Note the client is not allowed to not read all the data unless it closes the connection Exhaust commented out because not compatible with current Pipeline implementation",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "AwaitData",
        "normalized": "",
        "package": "hails",
        "partial": "Await Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:Desc",
      "description": {
        "fct-descr": "\u003cp\u003eDescending order\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Desc FieldName",
        "fct-source": "src/Hails-Database-Query.html#Order",
        "fct-type": "function",
        "title": "Desc"
      },
      "index": {
        "description": "Descending order",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "Desc",
        "normalized": "",
        "package": "hails",
        "partial": "Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:ExecFailure",
      "description": {
        "fct-descr": "\u003cp\u003eExecution of action failed\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "ExecFailure Failure",
        "fct-source": "src/Hails-Database-TCB.html#DBError",
        "fct-type": "function",
        "title": "ExecFailure"
      },
      "index": {
        "description": "Execution of action failed",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "ExecFailure",
        "normalized": "",
        "package": "hails",
        "partial": "Exec Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:NoCursorTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eThe server normally times out idle cursors after 10 minutes to prevent a memory leak in case a client forgets to close a cursor. Set this option to allow a cursor to live forever until it is closed.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "NoCursorTimeout",
        "fct-type": "function",
        "title": "NoCursorTimeout"
      },
      "index": {
        "description": "The server normally times out idle cursors after minutes to prevent memory leak in case client forgets to close cursor Set this option to allow cursor to live forever until it is closed",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "NoCursorTimeout",
        "normalized": "",
        "package": "hails",
        "partial": "No Cursor Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:Partial",
      "description": {
        "fct-descr": "\u003cp\u003eGet partial results from a _mongos_ if some shards are down, instead of throwing an error.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Partial",
        "fct-type": "function",
        "title": "Partial"
      },
      "index": {
        "description": "Get partial results from mongos if some shards are down instead of throwing an error",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "Partial",
        "normalized": "",
        "package": "hails",
        "partial": "Partial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:PolicyViolation",
      "description": {
        "fct-descr": "\u003cp\u003ePolicy has been violated\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "PolicyViolation",
        "fct-source": "src/Hails-Database-Query.html#PolicyError",
        "fct-type": "function",
        "title": "PolicyViolation"
      },
      "index": {
        "description": "Policy has been violated",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "PolicyViolation",
        "normalized": "",
        "package": "hails",
        "partial": "Policy Violation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:Query",
      "description": {
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Query",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "Query",
        "normalized": "",
        "package": "hails",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:Selection",
      "description": {
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Selection",
        "fct-source": "src/Hails-Database-Query.html#Selection",
        "fct-type": "function",
        "title": "Selection"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "Selection",
        "normalized": "",
        "package": "hails",
        "partial": "Selection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:TailableCursor",
      "description": {
        "fct-descr": "\u003cp\u003eTailable means cursor is not closed when the last data is retrieved. Rather, the cursor marks the final object's position. You can resume using the cursor later, from where it was located, if more data were received. Like any \u003ca\u003elatent cursor\u003c/a\u003e, the cursor may become invalid at some point &#8211; for example if the final object it references were deleted. Thus, you should be prepared to requery on CursorNotFound exception.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "TailableCursor",
        "fct-type": "function",
        "title": "TailableCursor"
      },
      "index": {
        "description": "Tailable means cursor is not closed when the last data is retrieved Rather the cursor marks the final object position You can resume using the cursor later from where it was located if more data were received Like any latent cursor the cursor may become invalid at some point for example if the final object it references were deleted Thus you should be prepared to requery on CursorNotFound exception",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "TailableCursor",
        "normalized": "",
        "package": "hails",
        "partial": "Tailable Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:TypeError",
      "description": {
        "fct-descr": "\u003cp\u003eDocument is not \"well-typed\"\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "TypeError String",
        "fct-source": "src/Hails-Database-Query.html#PolicyError",
        "fct-type": "function",
        "title": "TypeError"
      },
      "index": {
        "description": "Document is not well-typed",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "TypeError",
        "normalized": "",
        "package": "hails",
        "partial": "Type Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:UnknownCollection",
      "description": {
        "fct-descr": "\u003cp\u003eCollection does not exist\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "UnknownCollection",
        "fct-source": "src/Hails-Database-TCB.html#DBError",
        "fct-type": "function",
        "title": "UnknownCollection"
      },
      "index": {
        "description": "Collection does not exist",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "UnknownCollection",
        "normalized": "",
        "package": "hails",
        "partial": "Unknown Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:UnknownPolicyModule",
      "description": {
        "fct-descr": "\u003cp\u003ePolicy module not found\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "UnknownPolicyModule",
        "fct-source": "src/Hails-Database-TCB.html#DBError",
        "fct-type": "function",
        "title": "UnknownPolicyModule"
      },
      "index": {
        "description": "Policy module not found",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "UnknownPolicyModule",
        "normalized": "",
        "package": "hails",
        "partial": "Unknown Policy Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:applyCollectionPolicyP",
      "description": {
        "fct-descr": "\u003cp\u003eApply a collection policy the given document, using privileges\n when labeling the document and performing label comparisons.\n The labeling proceeds as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If two fields have the same \u003ccode\u003e\u003ca\u003eFieldName\u003c/a\u003e\u003c/code\u003e, only the first is kept.\n   This filtering is only perfomed at the top level.\n\u003c/li\u003e\u003cli\u003e Each policy labeled value (\u003ccode\u003e\u003ca\u003eHsonLabeled\u003c/a\u003e\u003c/code\u003e) is labled if the policy\n   has not been applied. If the value is already labeled, then the\n   label is checked to be equivalent to that generated by the policy.\n   In both cases a failure results in \u003ccode\u003e\u003ca\u003ePolicyViolation\u003c/a\u003e\u003c/code\u003e being thrown;\n   the actual error must be hidden to retain the opaqueness of\n   \u003ccode\u003e\u003ca\u003ePolicyLabeled\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e For each \u003ccode\u003eFieldNamed\u003c/code\u003e in the policy there \u003cem\u003emust\u003c/em\u003e be a\n   field in the document corresponding to it. Moreover its \"type\"\n   must be correct: all policy labeled values must be \u003ccode\u003e\u003ca\u003eHsonLabeled\u003c/a\u003e\u003c/code\u003e\n   values and all searchable fields must be \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003es. The \u003ccode\u003e_id\u003c/code\u003e\n   field is always treated as a \u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The resulting document (from the above step) is labeled according\n   to the collection policy.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe labels on \u003ccode\u003e\u003ca\u003ePolicyLabeled\u003c/a\u003e\u003c/code\u003e values and the document must be bounded\n by the current label and clearance as imposed by \u003ccode\u003e\u003ca\u003eguardAllocP\u003c/a\u003e\u003c/code\u003e.\n Additionally, these labels must flow to the label of the collection\n clearance. (Of course, in both cases privileges are used to allow for\n more permissive flows.)\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "DCPriv-\u003e Collection-\u003e HsonDocument-\u003e m LabeledHsonDocument",
        "fct-type": "function",
        "title": "applyCollectionPolicyP"
      },
      "index": {
        "description": "Apply collection policy the given document using privileges when labeling the document and performing label comparisons The labeling proceeds as follows If two fields have the same FieldName only the first is kept This filtering is only perfomed at the top level Each policy labeled value HsonLabeled is labled if the policy has not been applied If the value is already labeled then the label is checked to be equivalent to that generated by the policy In both cases failure results in PolicyViolation being thrown the actual error must be hidden to retain the opaqueness of PolicyLabeled Note For each FieldNamed in the policy there must be field in the document corresponding to it Moreover its type must be correct all policy labeled values must be HsonLabeled values and all searchable fields must be HsonValue The id field is always treated as SearchableField The resulting document from the above step is labeled according to the collection policy The labels on PolicyLabeled values and the document must be bounded by the current label and clearance as imposed by guardAllocP Additionally these labels must flow to the label of the collection clearance Of course in both cases privileges are used to allow for more permissive flows",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "applyCollectionPolicyP",
        "normalized": "DCPriv-\u003eCollection-\u003eHsonDocument-\u003ea LabeledHsonDocument",
        "package": "hails",
        "partial": "Collection Policy",
        "signature": "DCPriv-\u003eCollection-\u003eHsonDocument-\u003em LabeledHsonDocument"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:batchSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of document to return in each\n batch response from the server. 0 means\n MongoDB default.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "BatchSize",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "batchSize"
      },
      "index": {
        "description": "The number of document to return in each batch response from the server means MongoDB default",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "batchSize",
        "normalized": "",
        "package": "hails",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:curLabel",
      "description": {
        "fct-descr": "\u003cp\u003eCursor label\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Cursor -\u003e DCLabel",
        "fct-source": "src/Hails-Database-Query-TCB.html#curLabel",
        "fct-type": "function",
        "title": "curLabel"
      },
      "index": {
        "description": "Cursor label",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "curLabel",
        "normalized": "Cursor-\u003eDCLabel",
        "package": "hails",
        "partial": "Label",
        "signature": "Cursor-\u003eDCLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete documents according to the selection.\n It must be that the current computation can overwrite the\n existing documents. That is, the current label must flow\n to the label of each document that matches the selection.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Selection -\u003e DBAction ()",
        "fct-source": "src/Hails-Database-Query.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete documents according to the selection It must be that the current computation can overwrite the existing documents That is the current label must flow to the label of each document that matches the selection",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "delete",
        "normalized": "Selection-\u003eDBAction()",
        "package": "hails",
        "partial": "",
        "signature": "Selection-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:deleteP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e, but uses privileges.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e Selection -\u003e DBAction ()",
        "fct-source": "src/Hails-Database-Query.html#deleteP",
        "fct-type": "function",
        "title": "deleteP"
      },
      "index": {
        "description": "Same as delete but uses privileges",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "deleteP",
        "normalized": "DCPriv-\u003eSelection-\u003eDBAction()",
        "package": "hails",
        "partial": "",
        "signature": "DCPriv-\u003eSelection-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eFetch documents satisfying query. A labeled \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e is returned,\n which can be used to retrieve the actual \u003ccode\u003e\u003ca\u003eHsonDocument\u003c/a\u003e\u003c/code\u003es.  For this\n function to succeed the current computation must be able to read from\n the database and collection (implicilty the database's\n collection-set). This is satisfied by applying \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e to the join\n join of the collection, database, and ccollection-set label.\n The curor label is labeled by the \u003ccode\u003eupperBound\u003c/code\u003e of the database and\n collection labels and must be used within the same \u003ccode\u003ewithPolicyModule\u003c/code\u003e\n block.\n\u003c/p\u003e\u003cp\u003eNote that this function is quite permissive in the queries it\n accepts. Specifically, any non-\u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003es used in \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003eorder\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003ehint\u003c/a\u003e\u003c/code\u003e are \u003cem\u003eignored\u003c/em\u003e (as opposed to throwing an\n exception).\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Query -\u003e DBAction Cursor",
        "fct-source": "src/Hails-Database-Query.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "Fetch documents satisfying query labeled Cursor is returned which can be used to retrieve the actual HsonDocument For this function to succeed the current computation must be able to read from the database and collection implicilty the database collection-set This is satisfied by applying taint to the join join of the collection database and ccollection-set label The curor label is labeled by the upperBound of the database and collection labels and must be used within the same withPolicyModule block Note that this function is quite permissive in the queries it accepts Specifically any non SearchableField used in sort order or hint are ignored as opposed to throwing an exception",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "find",
        "normalized": "Query-\u003eDBAction Cursor",
        "package": "hails",
        "partial": "",
        "signature": "Query-\u003eDBAction Cursor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:findOne",
      "description": {
        "fct-descr": "\u003cp\u003eFetch the first document satisfying query, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if not\n documents matched the query.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Query -\u003e DBAction (Maybe LabeledHsonDocument)",
        "fct-source": "src/Hails-Database-Query.html#findOne",
        "fct-type": "function",
        "title": "findOne"
      },
      "index": {
        "description": "Fetch the first document satisfying query or Nothing if not documents matched the query",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "findOne",
        "normalized": "Query-\u003eDBAction(Maybe LabeledHsonDocument)",
        "package": "hails",
        "partial": "One",
        "signature": "Query-\u003eDBAction(Maybe LabeledHsonDocument)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:findOneP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efindOne\u003c/a\u003e\u003c/code\u003e, but uses privileges when performing label\n comparisons.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e Query -\u003e DBAction (Maybe LabeledHsonDocument)",
        "fct-source": "src/Hails-Database-Query.html#findOneP",
        "fct-type": "function",
        "title": "findOneP"
      },
      "index": {
        "description": "Same as findOne but uses privileges when performing label comparisons",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "findOneP",
        "normalized": "DCPriv-\u003eQuery-\u003eDBAction(Maybe LabeledHsonDocument)",
        "package": "hails",
        "partial": "One",
        "signature": "DCPriv-\u003eQuery-\u003eDBAction(Maybe LabeledHsonDocument)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:findP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e, but uses privileges when reading from the\n collection and database.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e Query -\u003e DBAction Cursor",
        "fct-source": "src/Hails-Database-Query.html#findP",
        "fct-type": "function",
        "title": "findP"
      },
      "index": {
        "description": "Same as find but uses privileges when reading from the collection and database",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "findP",
        "normalized": "DCPriv-\u003eQuery-\u003eDBAction Cursor",
        "package": "hails",
        "partial": "",
        "signature": "DCPriv-\u003eQuery-\u003eDBAction Cursor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:hint",
      "description": {
        "fct-descr": "\u003cp\u003eForce mongoDB to use this index, default \u003ccode\u003e[]\u003c/code\u003e,\n no hint.  \n Non-\u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003es ignored.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "[FieldName]",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "hint"
      },
      "index": {
        "description": "Force mongoDB to use this index default no hint Non SearchableField ignored",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "hint",
        "normalized": "[FieldName]",
        "package": "hails",
        "partial": "",
        "signature": "[FieldName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert document into collection and return its \u003ccode\u003e_id\u003c/code\u003e value.  When\n performing an \u003ccode\u003einsert\u003c/code\u003e it is required that the computation be able\n to write to both the database and collection. To this end, \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e\n internally applies \u003ccode\u003e\u003ca\u003eguardWrite\u003c/a\u003e\u003c/code\u003e on the database label and collection\n label. Of course, the computation must be able to name the\n collection in the database, and thus must be able to read the\n database collection map as verified by applying \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e to the\n collections label.\n\u003c/p\u003e\u003cp\u003eWhen inserting an unlabeled document, all policies must  be\n succesfully applied using \u003ccode\u003e\u003ca\u003eapplyCollectionPolicyP\u003c/a\u003e\u003c/code\u003e and the document\n must be \"well-typed\" (see \u003ccode\u003e\u003ca\u003eapplyCollectionPolicyP\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eWhen inserting an already-labeled document, the labels on fields\n and the document itself are compared against the policy-generated\n labels. Note that this approach allows an untrusted piece of code\n to insert a document it could not label according to the policy\n module.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "CollectionName -\u003e doc -\u003e DBAction ObjectId",
        "fct-source": "src/Hails-Database-Query.html#insert",
        "fct-type": "method",
        "title": "insert"
      },
      "index": {
        "description": "Insert document into collection and return its id value When performing an insert it is required that the computation be able to write to both the database and collection To this end insert internally applies guardWrite on the database label and collection label Of course the computation must be able to name the collection in the database and thus must be able to read the database collection map as verified by applying taint to the collections label When inserting an unlabeled document all policies must be succesfully applied using applyCollectionPolicyP and the document must be well-typed see applyCollectionPolicyP When inserting an already-labeled document the labels on fields and the document itself are compared against the policy-generated labels Note that this approach allows an untrusted piece of code to insert document it could not label according to the policy module",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "insert",
        "normalized": "CollectionName-\u003ea-\u003eDBAction ObjectId",
        "package": "hails",
        "partial": "",
        "signature": "CollectionName-\u003edoc-\u003eDBAction ObjectId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:insertP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, but uses privileges when applying the\n policies and performing label comparisons.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e CollectionName -\u003e doc -\u003e DBAction ObjectId",
        "fct-source": "src/Hails-Database-Query.html#insertP",
        "fct-type": "method",
        "title": "insertP"
      },
      "index": {
        "description": "Same as insert but uses privileges when applying the policies and performing label comparisons",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "insertP",
        "normalized": "DCPriv-\u003eCollectionName-\u003ea-\u003eDBAction ObjectId",
        "package": "hails",
        "partial": "",
        "signature": "DCPriv-\u003eCollectionName-\u003edoc-\u003eDBAction ObjectId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:insertP_",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsertP\u003c/a\u003e\u003c/code\u003e except it does not return the \u003ccode\u003e_id\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e CollectionName -\u003e doc -\u003e DBAction ()",
        "fct-source": "src/Hails-Database-Query.html#insertP_",
        "fct-type": "method",
        "title": "insertP_"
      },
      "index": {
        "description": "Same as insertP except it does not return the id",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "insertP_",
        "normalized": "DCPriv-\u003eCollectionName-\u003ea-\u003eDBAction()",
        "package": "hails",
        "partial": "",
        "signature": "DCPriv-\u003eCollectionName-\u003edoc-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:insert_",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e except it does not return \u003ccode\u003e_id\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "CollectionName -\u003e doc -\u003e DBAction ()",
        "fct-source": "src/Hails-Database-Query.html#insert_",
        "fct-type": "method",
        "title": "insert_"
      },
      "index": {
        "description": "Same as insert except it does not return id",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "insert_",
        "normalized": "CollectionName-\u003ea-\u003eDBAction()",
        "package": "hails",
        "partial": "",
        "signature": "CollectionName-\u003edoc-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:limit",
      "description": {
        "fct-descr": "\u003cp\u003eMax number of documents to return. Default, 0,\n means no limit.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Limit",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "limit"
      },
      "index": {
        "description": "Max number of documents to return Default means no limit",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "limit",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003eReturn next \u003ccode\u003e\u003ca\u003eHsonDocument\u003c/a\u003e\u003c/code\u003e in the query result, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n finished.  Note that the current computation must be able to read from\n the labeled \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e. To enforce this, \u003ccode\u003enext\u003c/code\u003e uses \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e to raise\n the current label to join of the current label and 'Cursor'\\'s label.\n The returned document is labeled according to the underlying\n \u003ccode\u003e\u003ca\u003eCollection\u003c/a\u003e\u003c/code\u003e policy.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Cursor -\u003e DBAction (Maybe LabeledHsonDocument)",
        "fct-source": "src/Hails-Database-Query.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "Return next HsonDocument in the query result or Nothing if finished Note that the current computation must be able to read from the labeled Cursor To enforce this next uses taint to raise the current label to join of the current label and Cursor label The returned document is labeled according to the underlying Collection policy",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "next",
        "normalized": "Cursor-\u003eDBAction(Maybe LabeledHsonDocument)",
        "package": "hails",
        "partial": "",
        "signature": "Cursor-\u003eDBAction(Maybe LabeledHsonDocument)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:nextP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e, but usess privileges when raising the current label.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e Cursor -\u003e DBAction (Maybe LabeledHsonDocument)",
        "fct-source": "src/Hails-Database-Query.html#nextP",
        "fct-type": "function",
        "title": "nextP"
      },
      "index": {
        "description": "Same as next but usess privileges when raising the current label",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "nextP",
        "normalized": "DCPriv-\u003eCursor-\u003eDBAction(Maybe LabeledHsonDocument)",
        "package": "hails",
        "partial": "",
        "signature": "DCPriv-\u003eCursor-\u003eDBAction(Maybe LabeledHsonDocument)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:options",
      "description": {
        "fct-descr": "\u003cp\u003eQuery options, default \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "[QueryOption]",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "options"
      },
      "index": {
        "description": "Query options default",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "options",
        "normalized": "[QueryOption]",
        "package": "hails",
        "partial": "",
        "signature": "[QueryOption]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:orderName",
      "description": {
        "fct-descr": "\u003cp\u003eGet the field name in the order.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Order -\u003e FieldName",
        "fct-source": "src/Hails-Database-Query.html#orderName",
        "fct-type": "function",
        "title": "orderName"
      },
      "index": {
        "description": "Get the field name in the order",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "orderName",
        "normalized": "Order-\u003eFieldName",
        "package": "hails",
        "partial": "Name",
        "signature": "Order-\u003eFieldName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:project",
      "description": {
        "fct-descr": "\u003cp\u003eThe fields to project. Default \u003ccode\u003e[]\u003c/code\u003e\n corresponds to all.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "[FieldName]",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "project"
      },
      "index": {
        "description": "The fields to project Default corresponds to all",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "project",
        "normalized": "[FieldName]",
        "package": "hails",
        "partial": "",
        "signature": "[FieldName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:save",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate a document according to its \u003ccode\u003e_id\u003c/code\u003e value. The IFC requirements\n subsume those of \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e. Specifically, in addition to being able\n to apply all the policies and requiring that the current label flow\n to the label of the collection and database, \u003ccode\u003esave\u003c/code\u003e requires that \n the current label flow to the label of the existing database\n record (i.e, the existing document can be overwritten).\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "CollectionName -\u003e doc -\u003e DBAction ()",
        "fct-source": "src/Hails-Database-Query.html#save",
        "fct-type": "method",
        "title": "save"
      },
      "index": {
        "description": "Update document according to its id value The IFC requirements subsume those of insert Specifically in addition to being able to apply all the policies and requiring that the current label flow to the label of the collection and database save requires that the current label flow to the label of the existing database record i.e the existing document can be overwritten",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "save",
        "normalized": "CollectionName-\u003ea-\u003eDBAction()",
        "package": "hails",
        "partial": "",
        "signature": "CollectionName-\u003edoc-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:saveP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e, but uses privileges when applying the\n policies and performing label comparisons.\n Note that a find is performed if the provided document contains\n an \u003ccode\u003e_id\u003c/code\u003e field. This lookup does _not_ leak timing information\n since the \u003ccode\u003e_id\u003c/code\u003e field is always searchable and thus solely\n protected by the collection label (which the computation is\n tainted by).\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e CollectionName -\u003e doc -\u003e DBAction ()",
        "fct-source": "src/Hails-Database-Query.html#saveP",
        "fct-type": "method",
        "title": "saveP"
      },
      "index": {
        "description": "Same as save but uses privileges when applying the policies and performing label comparisons Note that find is performed if the provided document contains an id field This lookup does not leak timing information since the id field is always searchable and thus solely protected by the collection label which the computation is tainted by",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "saveP",
        "normalized": "DCPriv-\u003eCollectionName-\u003ea-\u003eDBAction()",
        "package": "hails",
        "partial": "",
        "signature": "DCPriv-\u003eCollectionName-\u003edoc-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a selector and collection name create a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e.\n The resultant type depends on the use case, for example,\n in \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eselect mySel myCol\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e, but in \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e\n it is a \u003ccode\u003e\u003ca\u003eSelection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Selector -\u003e CollectionName -\u003e selectionOrQuery",
        "fct-source": "src/Hails-Database-Query.html#select",
        "fct-type": "method",
        "title": "select"
      },
      "index": {
        "description": "Given selector and collection name create Query The resultant type depends on the use case for example in find select mySel myCol is Query but in delete it is Selection",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "select",
        "normalized": "Selector-\u003eCollectionName-\u003ea",
        "package": "hails",
        "partial": "",
        "signature": "Selector-\u003eCollectionName-\u003eselectionOrQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:selection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eWHERE\u003c/code\u003e clause,default \u003ccode\u003e[]\u003c/code\u003e.\n Non-\u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003es ignored.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Selection",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "selection"
      },
      "index": {
        "description": "WHERE clause default Non SearchableField ignored",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "selection",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:selectionCollection",
      "description": {
        "fct-descr": "\u003cp\u003eCollection to perform query on.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "CollectionName",
        "fct-source": "src/Hails-Database-Query.html#Selection",
        "fct-type": "function",
        "title": "selectionCollection"
      },
      "index": {
        "description": "Collection to perform query on",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "selectionCollection",
        "normalized": "",
        "package": "hails",
        "partial": "Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:selectionSelector",
      "description": {
        "fct-descr": "\u003cp\u003eSelection query.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Selector",
        "fct-source": "src/Hails-Database-Query.html#Selection",
        "fct-type": "function",
        "title": "selectionSelector"
      },
      "index": {
        "description": "Selection query",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "selectionSelector",
        "normalized": "",
        "package": "hails",
        "partial": "Selector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:skip",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of documents to skip, default 0.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Word32",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "skip"
      },
      "index": {
        "description": "Number of documents to skip default",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "skip",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:sort",
      "description": {
        "fct-descr": "\u003cp\u003eSort result by given order, default \u003ccode\u003e[]\u003c/code\u003e.\n Non-\u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003es ignored.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "[Order]",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "Sort result by given order default Non SearchableField ignored",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "sort",
        "normalized": "[Order]",
        "package": "hails",
        "partial": "",
        "signature": "[Order]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Query.html#v:typeCheckDocument",
      "description": {
        "fct-descr": "\u003cp\u003eThis function \"type-checks\" a document against a set of policies.\n Specifically, it checks that the set of policy labeled values is the\n same between the policy and document, searchable fields are not\n policy labeled, and all searchable/policy-labeled fields named in\n the collection policy are present in the document (except for \u003ccode\u003e_id\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Query",
        "fct-package": "hails",
        "fct-signature": "Map FieldName FieldPolicy -\u003e HsonDocument -\u003e DC ()",
        "fct-source": "src/Hails-Database-Query.html#typeCheckDocument",
        "fct-type": "function",
        "title": "typeCheckDocument"
      },
      "index": {
        "description": "This function type-checks document against set of policies Specifically it checks that the set of policy labeled values is the same between the policy and document searchable fields are not policy labeled and all searchable policy-labeled fields named in the collection policy are present in the document except for id",
        "hierarchy": "Hails Database Query",
        "module": "Hails.Database.Query",
        "name": "typeCheckDocument",
        "normalized": "Map FieldName FieldPolicy-\u003eHsonDocument-\u003eDC()",
        "package": "hails",
        "partial": "Check Document",
        "signature": "Map FieldName FieldPolicy-\u003eHsonDocument-\u003eDC()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports classes \u003ccode\u003e\u003ca\u003eDCRecord\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDCLabeledRecord\u003c/a\u003e\u003c/code\u003e that\nprovide a way for Hails applications to interact with persistent data\nmore easily. Specifically, it provides a way to work with Haskell\ntypes as opposed to \"unstructured\" \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-Database-Structured.html",
        "fct-type": "module",
        "title": "Structured"
      },
      "index": {
        "description": "This module exports classes DCRecord and DCLabeledRecord that provide way for Hails applications to interact with persistent data more easily Specifically it provides way to work with Haskell types as opposed to unstructured Document",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "Structured",
        "normalized": "",
        "package": "hails",
        "partial": "Structured",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#t:DCLabeledRecord",
      "description": {
        "fct-descr": "\u003cp\u003eClass used by a policy module to translate a labeled record to a\n labeled document. Since the insert and save functions use the\n policy module's privileges, only the policy module should be\n allowed to create an instance of this class. Thus, we leverage the \n fact that the value constructor for a \u003ccode\u003e\u003ca\u003ePolicyModule\u003c/a\u003e\u003c/code\u003e is not exposed\n to untrusted code and require the policy module to create such a\n value in \u003ccode\u003e\u003ca\u003eendorseInstance\u003c/a\u003e\u003c/code\u003e. The minimal implementation needs to\n define \u003ccode\u003e\u003ca\u003eendorseInstance\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-Database-Structured.html#DCLabeledRecord",
        "fct-type": "class",
        "title": "DCLabeledRecord"
      },
      "index": {
        "description": "Class used by policy module to translate labeled record to labeled document Since the insert and save functions use the policy module privileges only the policy module should be allowed to create an instance of this class Thus we leverage the fact that the value constructor for PolicyModule is not exposed to untrusted code and require the policy module to create such value in endorseInstance The minimal implementation needs to define endorseInstance",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "DCLabeledRecord",
        "normalized": "",
        "package": "hails",
        "partial": "DCLabeled Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#t:DCRecord",
      "description": {
        "fct-descr": "\u003cp\u003eClass for converting from \"structured\" records to documents\n (and vice versa). Minimal definition consists of \u003ccode\u003e\u003ca\u003etoDocument\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003efromDocument\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003erecordCollection\u003c/a\u003e\u003c/code\u003e. All database operations\n performed on the collection defined by \u003ccode\u003e\u003ca\u003erecordCollection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-Database-Structured.html#DCRecord",
        "fct-type": "class",
        "title": "DCRecord"
      },
      "index": {
        "description": "Class for converting from structured records to documents and vice versa Minimal definition consists of toDocument fromDocument and recordCollection All database operations performed on the collection defined by recordCollection",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "DCRecord",
        "normalized": "",
        "package": "hails",
        "partial": "DCRecord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:endorseInstance",
      "description": {
        "fct-descr": "\u003cp\u003eEndorse the implementation of this instance. Note that this is\n reduced to WHNF to catch invalid instances that use \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample implementation:\n\u003c/p\u003e\u003cpre\u003e endorseInstance _ = MyPolicyModuleTCB {- May leave other values undefined -}\n\u003c/pre\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "DCLabeled a -\u003e pm",
        "fct-source": "src/Hails-Database-Structured.html#endorseInstance",
        "fct-type": "method",
        "title": "endorseInstance"
      },
      "index": {
        "description": "Endorse the implementation of this instance Note that this is reduced to WHNF to catch invalid instances that use undefined Example implementation endorseInstance MyPolicyModuleTCB May leave other values undefined",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "endorseInstance",
        "normalized": "DCLabeled a-\u003eb",
        "package": "hails",
        "partial": "Instance",
        "signature": "DCLabeled a-\u003epm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:findAll",
      "description": {
        "fct-descr": "\u003cp\u003eFind all records that satisfy the query and can be read, subject\n to the current clearance.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "Query -\u003e m [a]",
        "fct-source": "src/Hails-Database-Structured.html#findAll",
        "fct-type": "function",
        "title": "findAll"
      },
      "index": {
        "description": "Find all records that satisfy the query and can be read subject to the current clearance",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "findAll",
        "normalized": "Query-\u003ea[b]",
        "package": "hails",
        "partial": "All",
        "signature": "Query-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:findAllP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efindAll\u003c/a\u003e\u003c/code\u003e, but uses privileges.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e Query -\u003e m [a]",
        "fct-source": "src/Hails-Database-Structured.html#findAllP",
        "fct-type": "function",
        "title": "findAllP"
      },
      "index": {
        "description": "Same as findAll but uses privileges",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "findAllP",
        "normalized": "DCPriv-\u003eQuery-\u003ea[b]",
        "package": "hails",
        "partial": "All",
        "signature": "DCPriv-\u003eQuery-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:findBy",
      "description": {
        "fct-descr": "\u003cp\u003eFind an object with matching value for the given key. If the\n object does not exist or cannot be read (its label is above the\n clearance), this returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "CollectionName -\u003e FieldName -\u003e v -\u003e m (Maybe a)",
        "fct-source": "src/Hails-Database-Structured.html#findBy",
        "fct-type": "method",
        "title": "findBy"
      },
      "index": {
        "description": "Find an object with matching value for the given key If the object does not exist or cannot be read its label is above the clearance this returns Nothing",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "findBy",
        "normalized": "CollectionName-\u003eFieldName-\u003ea-\u003eb(Maybe c)",
        "package": "hails",
        "partial": "By",
        "signature": "CollectionName-\u003eFieldName-\u003ev-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:findByP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efindBy\u003c/a\u003e\u003c/code\u003e, but uses privileges. \n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e CollectionName -\u003e FieldName -\u003e v -\u003e m (Maybe a)",
        "fct-source": "src/Hails-Database-Structured.html#findByP",
        "fct-type": "method",
        "title": "findByP"
      },
      "index": {
        "description": "Same as findBy but uses privileges",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "findByP",
        "normalized": "DCPriv-\u003eCollectionName-\u003eFieldName-\u003ea-\u003eb(Maybe c)",
        "package": "hails",
        "partial": "By",
        "signature": "DCPriv-\u003eCollectionName-\u003eFieldName-\u003ev-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:findWhere",
      "description": {
        "fct-descr": "\u003cp\u003eFind an object with given query\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "Query -\u003e m (Maybe a)",
        "fct-source": "src/Hails-Database-Structured.html#findWhere",
        "fct-type": "method",
        "title": "findWhere"
      },
      "index": {
        "description": "Find an object with given query",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "findWhere",
        "normalized": "Query-\u003ea(Maybe b)",
        "package": "hails",
        "partial": "Where",
        "signature": "Query-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:findWhereP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efindWhere\u003c/a\u003e\u003c/code\u003e, but uses privileges. \n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e Query -\u003e m (Maybe a)",
        "fct-source": "src/Hails-Database-Structured.html#findWhereP",
        "fct-type": "method",
        "title": "findWhereP"
      },
      "index": {
        "description": "Same as findWhere but uses privileges",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "findWhereP",
        "normalized": "DCPriv-\u003eQuery-\u003ea(Maybe b)",
        "package": "hails",
        "partial": "Where",
        "signature": "DCPriv-\u003eQuery-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:fromDocument",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a document to a record\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "Document -\u003e m a",
        "fct-source": "src/Hails-Database-Structured.html#fromDocument",
        "fct-type": "method",
        "title": "fromDocument"
      },
      "index": {
        "description": "Convert document to record",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "fromDocument",
        "normalized": "Document-\u003ea b",
        "package": "hails",
        "partial": "Document",
        "signature": "Document-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:fromLabeledDocument",
      "description": {
        "fct-descr": "\u003cp\u003eConvert labeled document to labeled record\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "DCLabeled Document -\u003e m (DCLabeled a)",
        "fct-source": "src/Hails-Database-Structured.html#fromLabeledDocument",
        "fct-type": "function",
        "title": "fromLabeledDocument"
      },
      "index": {
        "description": "Convert labeled document to labeled record",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "fromLabeledDocument",
        "normalized": "DCLabeled Document-\u003ea(DCLabeled b)",
        "package": "hails",
        "partial": "Labeled Document",
        "signature": "DCLabeled Document-\u003em(DCLabeled a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:fromLabeledDocumentP",
      "description": {
        "fct-descr": "\u003cp\u003eUses the policy modules's privileges to convert a labeled document\n to a labeled record, if the policy module created an instance of\n \u003ccode\u003e\u003ca\u003eDCLabeledRecord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e DCLabeled Document -\u003e m (DCLabeled a)",
        "fct-source": "src/Hails-Database-Structured.html#fromLabeledDocumentP",
        "fct-type": "function",
        "title": "fromLabeledDocumentP"
      },
      "index": {
        "description": "Uses the policy modules privileges to convert labeled document to labeled record if the policy module created an instance of DCLabeledRecord",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "fromLabeledDocumentP",
        "normalized": "DCPriv-\u003eDCLabeled Document-\u003ea(DCLabeled b)",
        "package": "hails",
        "partial": "Labeled Document",
        "signature": "DCPriv-\u003eDCLabeled Document-\u003em(DCLabeled a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:insertLabeledRecord",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a labeled record into the database.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "DCLabeled a -\u003e m ObjectId",
        "fct-source": "src/Hails-Database-Structured.html#insertLabeledRecord",
        "fct-type": "method",
        "title": "insertLabeledRecord"
      },
      "index": {
        "description": "Insert labeled record into the database",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "insertLabeledRecord",
        "normalized": "DCLabeled a-\u003eb ObjectId",
        "package": "hails",
        "partial": "Labeled Record",
        "signature": "DCLabeled a-\u003em ObjectId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:insertLabeledRecordP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsertLabeledRecord\u003c/a\u003e\u003c/code\u003e, but using explicit privileges.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e DCLabeled a -\u003e m ObjectId",
        "fct-source": "src/Hails-Database-Structured.html#insertLabeledRecordP",
        "fct-type": "method",
        "title": "insertLabeledRecordP"
      },
      "index": {
        "description": "Same as insertLabeledRecord but using explicit privileges",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "insertLabeledRecordP",
        "normalized": "DCPriv-\u003eDCLabeled a-\u003eb ObjectId",
        "package": "hails",
        "partial": "Labeled Record",
        "signature": "DCPriv-\u003eDCLabeled a-\u003em ObjectId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:insertRecord",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a record into the database\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "a -\u003e m ObjectId",
        "fct-source": "src/Hails-Database-Structured.html#insertRecord",
        "fct-type": "method",
        "title": "insertRecord"
      },
      "index": {
        "description": "Insert record into the database",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "insertRecord",
        "normalized": "a-\u003eb ObjectId",
        "package": "hails",
        "partial": "Record",
        "signature": "a-\u003em ObjectId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:insertRecordP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsertRecord\u003c/a\u003e\u003c/code\u003e, but uses privileges. \n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e a -\u003e m ObjectId",
        "fct-source": "src/Hails-Database-Structured.html#insertRecordP",
        "fct-type": "method",
        "title": "insertRecordP"
      },
      "index": {
        "description": "Same as insertRecord but uses privileges",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "insertRecordP",
        "normalized": "DCPriv-\u003ea-\u003eb ObjectId",
        "package": "hails",
        "partial": "Record",
        "signature": "DCPriv-\u003ea-\u003em ObjectId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:recordCollection",
      "description": {
        "fct-descr": "\u003cp\u003eGet the collection name for the record\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "a -\u003e CollectionName",
        "fct-source": "src/Hails-Database-Structured.html#recordCollection",
        "fct-type": "method",
        "title": "recordCollection"
      },
      "index": {
        "description": "Get the collection name for the record",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "recordCollection",
        "normalized": "a-\u003eCollectionName",
        "package": "hails",
        "partial": "Collection",
        "signature": "a-\u003eCollectionName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:saveLabeledRecord",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a labeled record into the database\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "DCLabeled a -\u003e m ()",
        "fct-source": "src/Hails-Database-Structured.html#saveLabeledRecord",
        "fct-type": "method",
        "title": "saveLabeledRecord"
      },
      "index": {
        "description": "Insert labeled record into the database",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "saveLabeledRecord",
        "normalized": "DCLabeled a-\u003eb()",
        "package": "hails",
        "partial": "Labeled Record",
        "signature": "DCLabeled a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:saveLabeledRecordP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esaveLabeledRecord\u003c/a\u003e\u003c/code\u003e, but using explicit privileges.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e DCLabeled a -\u003e m ()",
        "fct-source": "src/Hails-Database-Structured.html#saveLabeledRecordP",
        "fct-type": "method",
        "title": "saveLabeledRecordP"
      },
      "index": {
        "description": "Same as saveLabeledRecord but using explicit privileges",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "saveLabeledRecordP",
        "normalized": "DCPriv-\u003eDCLabeled a-\u003eb()",
        "package": "hails",
        "partial": "Labeled Record",
        "signature": "DCPriv-\u003eDCLabeled a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:saveRecord",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate a record in the database\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Hails-Database-Structured.html#saveRecord",
        "fct-type": "method",
        "title": "saveRecord"
      },
      "index": {
        "description": "Update record in the database",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "saveRecord",
        "normalized": "a-\u003eb()",
        "package": "hails",
        "partial": "Record",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:saveRecordP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esaveRecord\u003c/a\u003e\u003c/code\u003e, but uses privileges. \n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e a -\u003e m ()",
        "fct-source": "src/Hails-Database-Structured.html#saveRecordP",
        "fct-type": "method",
        "title": "saveRecordP"
      },
      "index": {
        "description": "Same as saveRecord but uses privileges",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "saveRecordP",
        "normalized": "DCPriv-\u003ea-\u003eb()",
        "package": "hails",
        "partial": "Record",
        "signature": "DCPriv-\u003ea-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:toDocument",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a record to a document\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "a -\u003e Document",
        "fct-source": "src/Hails-Database-Structured.html#toDocument",
        "fct-type": "method",
        "title": "toDocument"
      },
      "index": {
        "description": "Convert record to document",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "toDocument",
        "normalized": "a-\u003eDocument",
        "package": "hails",
        "partial": "Document",
        "signature": "a-\u003eDocument"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:toLabeledDocument",
      "description": {
        "fct-descr": "\u003cp\u003eConvert labeled record to labeled document.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "DCLabeled a -\u003e m (DCLabeled Document)",
        "fct-source": "src/Hails-Database-Structured.html#toLabeledDocument",
        "fct-type": "function",
        "title": "toLabeledDocument"
      },
      "index": {
        "description": "Convert labeled record to labeled document",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "toLabeledDocument",
        "normalized": "DCLabeled a-\u003eb(DCLabeled Document)",
        "package": "hails",
        "partial": "Labeled Document",
        "signature": "DCLabeled a-\u003em(DCLabeled Document)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-Structured.html#v:toLabeledDocumentP",
      "description": {
        "fct-descr": "\u003cp\u003eUses the policy modules's privileges to convert a labeled record\n to a labeled document, if the policy module created an instance of\n \u003ccode\u003e\u003ca\u003eDCLabeledRecord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.Structured",
        "fct-package": "hails",
        "fct-signature": "DCPriv-\u003e DCLabeled a-\u003e m (DCLabeled Document)",
        "fct-type": "function",
        "title": "toLabeledDocumentP"
      },
      "index": {
        "description": "Uses the policy modules privileges to convert labeled record to labeled document if the policy module created an instance of DCLabeledRecord",
        "hierarchy": "Hails Database Structured",
        "module": "Hails.Database.Structured",
        "name": "toLabeledDocumentP",
        "normalized": "DCPriv-\u003eDCLabeled a-\u003eb(DCLabeled Document)",
        "package": "hails",
        "partial": "Labeled Document",
        "signature": "DCPriv-\u003eDCLabeled a-\u003em(DCLabeled Document)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the basic database types and constructors.\nSee \u003ca\u003eHails.Database\u003c/a\u003e for a description of the Hails database system.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-Database-TCB.html",
        "fct-type": "module",
        "title": "TCB"
      },
      "index": {
        "description": "This module exports the basic database types and constructors See Hails.Database for description of the Hails database system",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "TCB",
        "normalized": "",
        "package": "hails",
        "partial": "TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#t:AccessMode",
      "description": {
        "fct-descr": "\u003cp\u003eType of reads and writes to perform\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "AccessMode"
      },
      "index": {
        "description": "Type of reads and writes to perform",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "AccessMode",
        "normalized": "",
        "package": "hails",
        "partial": "Access Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#t:Collection",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eCollection\u003c/code\u003e is a MongoDB collection name with an associated\n label, clearance and labeling policy. Access to the collection is\n restricted according to the collection label. Data inserted-to and\n retrieved-from the collection will be labeled according to the\n collection policy, with the guarantee that no data more sensitive than\n the collection clearance can be inserted into the collection.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#Collection",
        "fct-type": "data",
        "title": "Collection"
      },
      "index": {
        "description": "Collection is MongoDB collection name with an associated label clearance and labeling policy Access to the collection is restricted according to the collection label Data inserted-to and retrieved-from the collection will be labeled according to the collection policy with the guarantee that no data more sensitive than the collection clearance can be inserted into the collection",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "Collection",
        "normalized": "",
        "package": "hails",
        "partial": "Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#t:CollectionName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a collection.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Database-TCB.html#CollectionName",
        "fct-type": "type",
        "title": "CollectionName"
      },
      "index": {
        "description": "The name of collection",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "CollectionName",
        "normalized": "",
        "package": "hails",
        "partial": "Collection Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#t:CollectionPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eA collection policy contains the policy for labeling documents\n (\u003ccode\u003e\u003ca\u003edocumentLabelPolicy\u003c/a\u003e\u003c/code\u003e) at a coarse grained level, and a set of\n policies for labeling fields of a document (\u003ccode\u003e\u003ca\u003efieldLabelPolicies\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eSpecific fields can be associated with a \u003ccode\u003e\u003ca\u003eFieldPolicy\u003c/a\u003e\u003c/code\u003e, which\n allows the policy module to either:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Explicitly make a field publicly readable to anyone who can\n   access the collection by declaring the field to be a\n   \u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003e, or\n\u003c/li\u003e\u003cli\u003e Label a field given the full documnet (see \u003ccode\u003e\u003ca\u003eFieldPolicy\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFields that do not have an associated policy are (conceputally)\n labeled with the document label (\u003ccode\u003e\u003ca\u003edocumentLabelPolicy\u003c/a\u003e\u003c/code\u003e).\n Similarly, the labels on the label of a policy-labeled field is the\n document label created with \u003ccode\u003e\u003ca\u003edocumentLabelPolicy\u003c/a\u003e\u003c/code\u003e. \u003cem\u003eNote:\u003c/em\u003e the\n label on \u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003es is solely the collection label.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#CollectionPolicy",
        "fct-type": "data",
        "title": "CollectionPolicy"
      },
      "index": {
        "description": "collection policy contains the policy for labeling documents documentLabelPolicy at coarse grained level and set of policies for labeling fields of document fieldLabelPolicies Specific fields can be associated with FieldPolicy which allows the policy module to either Explicitly make field publicly readable to anyone who can access the collection by declaring the field to be SearchableField or Label field given the full documnet see FieldPolicy Fields that do not have an associated policy are conceputally labeled with the document label documentLabelPolicy Similarly the labels on the label of policy-labeled field is the document label created with documentLabelPolicy Note the label on SearchableField is solely the collection label",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "CollectionPolicy",
        "normalized": "",
        "package": "hails",
        "partial": "Collection Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#t:CollectionSet",
      "description": {
        "fct-descr": "\u003cp\u003eA labeled \u003ccode\u003e\u003ca\u003eCollection\u003c/a\u003e\u003c/code\u003e set.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Database-TCB.html#CollectionSet",
        "fct-type": "type",
        "title": "CollectionSet"
      },
      "index": {
        "description": "labeled Collection set",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "CollectionSet",
        "normalized": "",
        "package": "hails",
        "partial": "Collection Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#t:DBAction",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eDBAction\u003c/code\u003e is the monad within which database actions can be\n executed, and policy modules are defined.  The monad is simply a\n state monad with \u003ccode\u003e\u003ca\u003eDC\u003c/a\u003e\u003c/code\u003e as monad as the underlying monad with access to\n a database system configuration (\u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAccessMode\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003eDatabase\u003c/a\u003e\u003c/code\u003e).  The value constructor is part of the \u003ccode\u003eTCB\u003c/code\u003e as to\n disallow untrusted code from modifying the access mode.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "newtype",
        "fct-source": "src/Hails-Database-TCB.html#DBAction",
        "fct-type": "newtype",
        "title": "DBAction"
      },
      "index": {
        "description": "DBAction is the monad within which database actions can be executed and policy modules are defined The monad is simply state monad with DC as monad as the underlying monad with access to database system configuration Pipe AccessMode and Database The value constructor is part of the TCB as to disallow untrusted code from modifying the access mode",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "DBAction",
        "normalized": "",
        "package": "hails",
        "partial": "DBAction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#t:DBActionState",
      "description": {
        "fct-descr": "\u003cp\u003eThe database system state threaded within a Hails computation.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#DBActionState",
        "fct-type": "data",
        "title": "DBActionState"
      },
      "index": {
        "description": "The database system state threaded within Hails computation",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "DBActionState",
        "normalized": "",
        "package": "hails",
        "partial": "DBAction State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#t:DBError",
      "description": {
        "fct-descr": "\u003cp\u003eExceptions thrown by invalid database queries.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#DBError",
        "fct-type": "data",
        "title": "DBError"
      },
      "index": {
        "description": "Exceptions thrown by invalid database queries",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "DBError",
        "normalized": "",
        "package": "hails",
        "partial": "DBError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#t:Database",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eDatabase\u003c/code\u003e is a MongoDB database with an associated label and set\n of collections. The label is used to restrict access to the database.\n Since collection policies are specified by policy modules, every\n collection must \u003cem\u003ealways\u003c/em\u003e be associated with some database (and\n thereby, policy module); a policy module is \u003cem\u003enot\u003c/em\u003e allowed to create a\n collection (and specify policies on it) in an arbitrary database.  We\n allow for the existance of a collection to be secrect, and thus\n protect the set of collections with a label.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#Database",
        "fct-type": "data",
        "title": "Database"
      },
      "index": {
        "description": "Database is MongoDB database with an associated label and set of collections The label is used to restrict access to the database Since collection policies are specified by policy modules every collection must always be associated with some database and thereby policy module policy module is not allowed to create collection and specify policies on it in an arbitrary database We allow for the existance of collection to be secrect and thus protect the set of collections with label",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "Database",
        "normalized": "",
        "package": "hails",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#t:DatabaseName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a database.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Database-TCB.html#DatabaseName",
        "fct-type": "type",
        "title": "DatabaseName"
      },
      "index": {
        "description": "The name of database",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "DatabaseName",
        "normalized": "",
        "package": "hails",
        "partial": "Database Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#t:FieldPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eFieldPolicy\u003c/code\u003e is a security policy associated with fields.\n \u003ccode\u003eSearchabelField\u003c/code\u003e specifies that the field can be referenced in the\n selection clause of a \u003ccode\u003eQuery\u003c/code\u003e, and therefore only the collection label\n protects such fields. Conversely, \u003ccode\u003e\u003ca\u003eFieldPolicy\u003c/a\u003e\u003c/code\u003e specifies a labeling\n policy for the field.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#FieldPolicy",
        "fct-type": "data",
        "title": "FieldPolicy"
      },
      "index": {
        "description": "FieldPolicy is security policy associated with fields SearchabelField specifies that the field can be referenced in the selection clause of Query and therefore only the collection label protects such fields Conversely FieldPolicy specifies labeling policy for the field",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "FieldPolicy",
        "normalized": "",
        "package": "hails",
        "partial": "Field Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#t:Pipe",
      "description": {
        "fct-descr": "\u003cp\u003eThread-safe TCP connection with pipelined requests\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Pipe"
      },
      "index": {
        "description": "Thread-safe TCP connection with pipelined requests",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "Pipe",
        "normalized": "",
        "package": "hails",
        "partial": "Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:CollectionPolicy",
      "description": {
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "CollectionPolicy",
        "fct-source": "src/Hails-Database-TCB.html#CollectionPolicy",
        "fct-type": "function",
        "title": "CollectionPolicy"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "CollectionPolicy",
        "normalized": "",
        "package": "hails",
        "partial": "Collection Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:CollectionTCB",
      "description": {
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "CollectionTCB",
        "fct-source": "src/Hails-Database-TCB.html#Collection",
        "fct-type": "function",
        "title": "CollectionTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "CollectionTCB",
        "normalized": "",
        "package": "hails",
        "partial": "Collection TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:ConfirmWrites",
      "description": {
        "fct-descr": "\u003cp\u003eRead-write action, slave not OK, every write is confirmed with getLastError.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "ConfirmWrites GetLastError",
        "fct-type": "function",
        "title": "ConfirmWrites"
      },
      "index": {
        "description": "Read-write action slave not OK every write is confirmed with getLastError",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "ConfirmWrites",
        "normalized": "",
        "package": "hails",
        "partial": "Confirm Writes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:DBActionStateTCB",
      "description": {
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "DBActionStateTCB",
        "fct-source": "src/Hails-Database-TCB.html#DBActionState",
        "fct-type": "function",
        "title": "DBActionStateTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "DBActionStateTCB",
        "normalized": "",
        "package": "hails",
        "partial": "DBAction State TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:DBActionTCB",
      "description": {
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "DBActionTCB",
        "fct-source": "src/Hails-Database-TCB.html#DBAction",
        "fct-type": "function",
        "title": "DBActionTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "DBActionTCB",
        "normalized": "",
        "package": "hails",
        "partial": "DBAction TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:DatabaseTCB",
      "description": {
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "DatabaseTCB",
        "fct-source": "src/Hails-Database-TCB.html#Database",
        "fct-type": "function",
        "title": "DatabaseTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "DatabaseTCB",
        "normalized": "",
        "package": "hails",
        "partial": "Database TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:ExecFailure",
      "description": {
        "fct-descr": "\u003cp\u003eExecution of action failed\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "ExecFailure Failure",
        "fct-source": "src/Hails-Database-TCB.html#DBError",
        "fct-type": "function",
        "title": "ExecFailure"
      },
      "index": {
        "description": "Execution of action failed",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "ExecFailure",
        "normalized": "",
        "package": "hails",
        "partial": "Exec Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:FieldPolicy",
      "description": {
        "fct-descr": "\u003cp\u003ePolicy labeled field.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "FieldPolicy (HsonDocument -\u003e DCLabel)",
        "fct-source": "src/Hails-Database-TCB.html#FieldPolicy",
        "fct-type": "function",
        "title": "FieldPolicy"
      },
      "index": {
        "description": "Policy labeled field",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "FieldPolicy",
        "normalized": "FieldPolicy(HsonDocument-\u003eDCLabel)",
        "package": "hails",
        "partial": "Field Policy",
        "signature": "FieldPolicy(HsonDocument-\u003eDCLabel)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:ReadStaleOk",
      "description": {
        "fct-descr": "\u003cp\u003eRead-only action, reading stale data from a slave is OK.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "ReadStaleOk",
        "fct-type": "function",
        "title": "ReadStaleOk"
      },
      "index": {
        "description": "Read-only action reading stale data from slave is OK",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "ReadStaleOk",
        "normalized": "",
        "package": "hails",
        "partial": "Read Stale Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:SearchableField",
      "description": {
        "fct-descr": "\u003cp\u003eUnlabeled, searchable field.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "SearchableField",
        "fct-source": "src/Hails-Database-TCB.html#FieldPolicy",
        "fct-type": "function",
        "title": "SearchableField"
      },
      "index": {
        "description": "Unlabeled searchable field",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "SearchableField",
        "normalized": "",
        "package": "hails",
        "partial": "Searchable Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:UnconfirmedWrites",
      "description": {
        "fct-descr": "\u003cp\u003eRead-write action, slave not OK, every write is fire & forget.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "UnconfirmedWrites",
        "fct-type": "function",
        "title": "UnconfirmedWrites"
      },
      "index": {
        "description": "Read-write action slave not OK every write is fire forget",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "UnconfirmedWrites",
        "normalized": "",
        "package": "hails",
        "partial": "Unconfirmed Writes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:UnknownCollection",
      "description": {
        "fct-descr": "\u003cp\u003eCollection does not exist\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "UnknownCollection",
        "fct-source": "src/Hails-Database-TCB.html#DBError",
        "fct-type": "function",
        "title": "UnknownCollection"
      },
      "index": {
        "description": "Collection does not exist",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "UnknownCollection",
        "normalized": "",
        "package": "hails",
        "partial": "Unknown Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:UnknownPolicyModule",
      "description": {
        "fct-descr": "\u003cp\u003ePolicy module not found\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "UnknownPolicyModule",
        "fct-source": "src/Hails-Database-TCB.html#DBError",
        "fct-type": "function",
        "title": "UnknownPolicyModule"
      },
      "index": {
        "description": "Policy module not found",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "UnknownPolicyModule",
        "normalized": "",
        "package": "hails",
        "partial": "Unknown Policy Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:associateCollectionTCB",
      "description": {
        "fct-descr": "\u003cp\u003eAssociate a collection with underlying database, ignoring IFC.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "Collection-\u003e DBAction ()",
        "fct-type": "function",
        "title": "associateCollectionTCB"
      },
      "index": {
        "description": "Associate collection with underlying database ignoring IFC",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "associateCollectionTCB",
        "normalized": "Collection-\u003eDBAction()",
        "package": "hails",
        "partial": "Collection TCB",
        "signature": "Collection-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:colClearance",
      "description": {
        "fct-descr": "\u003cp\u003eCollection clearance\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "DCLabel",
        "fct-source": "src/Hails-Database-TCB.html#Collection",
        "fct-type": "function",
        "title": "colClearance"
      },
      "index": {
        "description": "Collection clearance",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "colClearance",
        "normalized": "",
        "package": "hails",
        "partial": "Clearance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:colLabel",
      "description": {
        "fct-descr": "\u003cp\u003eCollection label\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "DCLabel",
        "fct-source": "src/Hails-Database-TCB.html#Collection",
        "fct-type": "function",
        "title": "colLabel"
      },
      "index": {
        "description": "Collection label",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "colLabel",
        "normalized": "",
        "package": "hails",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:colName",
      "description": {
        "fct-descr": "\u003cp\u003eCollection name\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "CollectionName",
        "fct-source": "src/Hails-Database-TCB.html#Collection",
        "fct-type": "function",
        "title": "colName"
      },
      "index": {
        "description": "Collection name",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "colName",
        "normalized": "",
        "package": "hails",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:colPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eCollection labeling policies\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "CollectionPolicy",
        "fct-source": "src/Hails-Database-TCB.html#Collection",
        "fct-type": "function",
        "title": "colPolicy"
      },
      "index": {
        "description": "Collection labeling policies",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "colPolicy",
        "normalized": "",
        "package": "hails",
        "partial": "Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:collectionTCB",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eCollection\u003c/a\u003e\u003c/code\u003e, ignoring any IFC restrictions.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "CollectionName-\u003e DCLabel-\u003e DCLabel-\u003e CollectionPolicy-\u003e Collection",
        "fct-type": "function",
        "title": "collectionTCB"
      },
      "index": {
        "description": "Create Collection ignoring any IFC restrictions",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "collectionTCB",
        "normalized": "CollectionName-\u003eDCLabel-\u003eDCLabel-\u003eCollectionPolicy-\u003eCollection",
        "package": "hails",
        "partial": "TCB",
        "signature": "CollectionName-\u003eDCLabel-\u003eDCLabel-\u003eCollectionPolicy-\u003eCollection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:databaseCollections",
      "description": {
        "fct-descr": "\u003cp\u003eCollections associated with databsae\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "CollectionSet",
        "fct-source": "src/Hails-Database-TCB.html#Database",
        "fct-type": "function",
        "title": "databaseCollections"
      },
      "index": {
        "description": "Collections associated with databsae",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "databaseCollections",
        "normalized": "",
        "package": "hails",
        "partial": "Collections",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:databaseLabel",
      "description": {
        "fct-descr": "\u003cp\u003eLabel of database\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "DCLabel",
        "fct-source": "src/Hails-Database-TCB.html#Database",
        "fct-type": "function",
        "title": "databaseLabel"
      },
      "index": {
        "description": "Label of database",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "databaseLabel",
        "normalized": "",
        "package": "hails",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:databaseName",
      "description": {
        "fct-descr": "\u003cp\u003eDatabase name\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "DatabaseName",
        "fct-source": "src/Hails-Database-TCB.html#Database",
        "fct-type": "function",
        "title": "databaseName"
      },
      "index": {
        "description": "Database name",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "databaseName",
        "normalized": "",
        "package": "hails",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:dbActionDB",
      "description": {
        "fct-descr": "\u003cp\u003eDatabase computation is currently executing against\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "Database",
        "fct-source": "src/Hails-Database-TCB.html#DBActionState",
        "fct-type": "function",
        "title": "dbActionDB"
      },
      "index": {
        "description": "Database computation is currently executing against",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "dbActionDB",
        "normalized": "",
        "package": "hails",
        "partial": "Action DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:dbActionMode",
      "description": {
        "fct-descr": "\u003cp\u003eTypes of reads/write to perform\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "AccessMode",
        "fct-source": "src/Hails-Database-TCB.html#DBActionState",
        "fct-type": "function",
        "title": "dbActionMode"
      },
      "index": {
        "description": "Types of reads write to perform",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "dbActionMode",
        "normalized": "",
        "package": "hails",
        "partial": "Action Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:dbActionPipe",
      "description": {
        "fct-descr": "\u003cp\u003ePipe to underlying database system\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "Pipe",
        "fct-source": "src/Hails-Database-TCB.html#DBActionState",
        "fct-type": "function",
        "title": "dbActionPipe"
      },
      "index": {
        "description": "Pipe to underlying database system",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "dbActionPipe",
        "normalized": "",
        "package": "hails",
        "partial": "Action Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:dbActionPriv",
      "description": {
        "fct-descr": "\u003cp\u003ePrivilege of the policy module related to the DB\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "DCPriv",
        "fct-source": "src/Hails-Database-TCB.html#DBActionState",
        "fct-type": "function",
        "title": "dbActionPriv"
      },
      "index": {
        "description": "Privilege of the policy module related to the DB",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "dbActionPriv",
        "normalized": "",
        "package": "hails",
        "partial": "Action Priv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:documentLabelPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eThe label on documents of the collection.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "HsonDocument -\u003e DCLabel",
        "fct-source": "src/Hails-Database-TCB.html#CollectionPolicy",
        "fct-type": "function",
        "title": "documentLabelPolicy"
      },
      "index": {
        "description": "The label on documents of the collection",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "documentLabelPolicy",
        "normalized": "HsonDocument-\u003eDCLabel",
        "package": "hails",
        "partial": "Label Policy",
        "signature": "HsonDocument-\u003eDCLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:execMongoActionTCB",
      "description": {
        "fct-descr": "\u003cp\u003eLift a mongoDB action into the \u003ccode\u003e\u003ca\u003eDBAction\u003c/a\u003e\u003c/code\u003e monad. This function\n always executes the action with \u003ca\u003eDatabase.MongoDB\u003c/a\u003e's \u003ccode\u003eaccess\u003c/code\u003e. If\n the database action fails an exception of type \u003ccode\u003e\u003ca\u003eFailure\u003c/a\u003e\u003c/code\u003e is thrown.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "Action IO a -\u003e DBAction a",
        "fct-source": "src/Hails-Database-TCB.html#execMongoActionTCB",
        "fct-type": "function",
        "title": "execMongoActionTCB"
      },
      "index": {
        "description": "Lift mongoDB action into the DBAction monad This function always executes the action with Database.MongoDB access If the database action fails an exception of type Failure is thrown",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "execMongoActionTCB",
        "normalized": "Action IO a-\u003eDBAction a",
        "package": "hails",
        "partial": "Mongo Action TCB",
        "signature": "Action IO a-\u003eDBAction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:fieldLabelPolicies",
      "description": {
        "fct-descr": "\u003cp\u003eThe policies associated with specific fields.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "Map FieldName FieldPolicy",
        "fct-source": "src/Hails-Database-TCB.html#CollectionPolicy",
        "fct-type": "function",
        "title": "fieldLabelPolicies"
      },
      "index": {
        "description": "The policies associated with specific fields",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "fieldLabelPolicies",
        "normalized": "",
        "package": "hails",
        "partial": "Label Policies",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:getActionStateTCB",
      "description": {
        "fct-descr": "\u003cp\u003eGet the underlying state.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "DBAction DBActionState",
        "fct-source": "src/Hails-Database-TCB.html#getActionStateTCB",
        "fct-type": "function",
        "title": "getActionStateTCB"
      },
      "index": {
        "description": "Get the underlying state",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "getActionStateTCB",
        "normalized": "",
        "package": "hails",
        "partial": "Action State TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:makeDBActionStateTCB",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a policy module's privileges, database name, pipe and access\n mode create the initial state for a \u003ccode\u003e\u003ca\u003eDBAction\u003c/a\u003e\u003c/code\u003e. The underlying\n database is labeled with the supplied privileges: both components of\n the label (secrecy and integrity) are set to the privilege\n description. In other words, only code that owns the policy module's\n privileges can modify the database configuration.  Policy modules can\n use \u003ccode\u003esetDatabaseLabelP\u003c/code\u003e to change the label of their database, and\n \u003ccode\u003esetCollectionMapLabelP\u003c/code\u003e to change the label of the collection map.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e DatabaseName -\u003e Pipe -\u003e AccessMode -\u003e DBActionState",
        "fct-source": "src/Hails-Database-TCB.html#makeDBActionStateTCB",
        "fct-type": "function",
        "title": "makeDBActionStateTCB"
      },
      "index": {
        "description": "Given policy module privileges database name pipe and access mode create the initial state for DBAction The underlying database is labeled with the supplied privileges both components of the label secrecy and integrity are set to the privilege description In other words only code that owns the policy module privileges can modify the database configuration Policy modules can use setDatabaseLabelP to change the label of their database and setCollectionMapLabelP to change the label of the collection map",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "makeDBActionStateTCB",
        "normalized": "DCPriv-\u003eDatabaseName-\u003ePipe-\u003eAccessMode-\u003eDBActionState",
        "package": "hails",
        "partial": "DBAction State TCB",
        "signature": "DCPriv-\u003eDatabaseName-\u003ePipe-\u003eAccessMode-\u003eDBActionState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:master",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eConfirmWrites\u003c/a\u003e\u003c/code\u003e []\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "AccessMode",
        "fct-type": "function",
        "title": "master"
      },
      "index": {
        "description": "Same as ConfirmWrites",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "master",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:putActionStateTCB",
      "description": {
        "fct-descr": "\u003cp\u003eGet the underlying state.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "DBActionState -\u003e DBAction ()",
        "fct-source": "src/Hails-Database-TCB.html#putActionStateTCB",
        "fct-type": "function",
        "title": "putActionStateTCB"
      },
      "index": {
        "description": "Get the underlying state",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "putActionStateTCB",
        "normalized": "DBActionState-\u003eDBAction()",
        "package": "hails",
        "partial": "Action State TCB",
        "signature": "DBActionState-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:setCollectionSetLabelTCB",
      "description": {
        "fct-descr": "\u003cp\u003eSet the label of the underlying database to the supplied label,\n ignoring IFC.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "DCLabel -\u003e DBAction ()",
        "fct-source": "src/Hails-Database-TCB.html#setCollectionSetLabelTCB",
        "fct-type": "function",
        "title": "setCollectionSetLabelTCB"
      },
      "index": {
        "description": "Set the label of the underlying database to the supplied label ignoring IFC",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "setCollectionSetLabelTCB",
        "normalized": "DCLabel-\u003eDBAction()",
        "package": "hails",
        "partial": "Collection Set Label TCB",
        "signature": "DCLabel-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:setDatabaseLabelTCB",
      "description": {
        "fct-descr": "\u003cp\u003eSet the label of the underlying database to the supplied label,\n ignoring IFC.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "DCLabel -\u003e DBAction ()",
        "fct-source": "src/Hails-Database-TCB.html#setDatabaseLabelTCB",
        "fct-type": "function",
        "title": "setDatabaseLabelTCB"
      },
      "index": {
        "description": "Set the label of the underlying database to the supplied label ignoring IFC",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "setDatabaseLabelTCB",
        "normalized": "DCLabel-\u003eDBAction()",
        "package": "hails",
        "partial": "Database Label TCB",
        "signature": "DCLabel-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:slaveOk",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eReadStaleOk\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "AccessMode",
        "fct-type": "function",
        "title": "slaveOk"
      },
      "index": {
        "description": "Same as ReadStaleOk",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "slaveOk",
        "normalized": "",
        "package": "hails",
        "partial": "Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:unDBAction",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "StateT DBActionState DC a",
        "fct-source": "src/Hails-Database-TCB.html#DBAction",
        "fct-type": "function",
        "title": "unDBAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "unDBAction",
        "normalized": "",
        "package": "hails",
        "partial": "DBAction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database-TCB.html#v:updateActionStateTCB",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the underlying state using the supplied function.\n\u003c/p\u003e",
        "fct-module": "Hails.Database.TCB",
        "fct-package": "hails",
        "fct-signature": "(DBActionState -\u003e DBActionState) -\u003e DBAction ()",
        "fct-source": "src/Hails-Database-TCB.html#updateActionStateTCB",
        "fct-type": "function",
        "title": "updateActionStateTCB"
      },
      "index": {
        "description": "Update the underlying state using the supplied function",
        "hierarchy": "Hails Database TCB",
        "module": "Hails.Database.TCB",
        "name": "updateActionStateTCB",
        "normalized": "(DBActionState-\u003eDBActionState)-\u003eDBAction()",
        "package": "hails",
        "partial": "Action State TCB",
        "signature": "(DBActionState-\u003eDBActionState)-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the database interface used by apps and policy\nmodules to carry out database queries. The Hails data model is similar\nto that of MongoDB. Below we highlight some similarities and\ndifference. We refer the interested reader to the documentation in\n\u003ca\u003eHails.PolicyModule\u003c/a\u003e for more details on the role of labels in Hails.\n\u003c/p\u003e\u003cp\u003eAt the coarsest level code can execute database actions (\u003ccode\u003e\u003ca\u003eDBAction\u003c/a\u003e\u003c/code\u003e)\nagainst the \u003ccode\u003e\u003ca\u003eDatabase\u003c/a\u003e\u003c/code\u003e of a policy module using \u003ccode\u003e\u003ca\u003ewithPolicyModule\u003c/a\u003e\u003c/code\u003e.\nDifferent from MongoDB's notion of a database, Hails databases have an\nassociated \u003ccode\u003eLabel\u003c/code\u003e which is used to restrict who can access the\ndatabase.\n\u003c/p\u003e\u003cp\u003eEach \u003ccode\u003e\u003ca\u003eDatabase\u003c/a\u003e\u003c/code\u003e is composed of a set of \u003ccode\u003e\u003ca\u003eCollection\u003c/a\u003e\u003c/code\u003es. The existence\nof a collection is protected by a collection-set label, which is,\nintern, protected by the database label. A collection is an approach\nto organizing and grouping elements of the same model. For example,\ncollection \"users\" may contain elements (documents) corresponding to\nusers of the system. Each collection has a label, clearance, and\nassociated collection policy. The label of a collection serves the\nsame role as the database label, but at a finer grain: it protects who\ncan read and write to the collection. The collection clearance is also\na label, but its role is to set an upper bound on the sensitivity of\ndata that is and can be stored in the collection. For example, the\ncollection \"user\" may set a clearance such that the system's\nprivate keys cannot be stored in the collection (by accident or\nmalice). The collection policy specifies how elements of the\ncollection are to be labeled when retrieved from the database.\n\u003c/p\u003e\u003cp\u003eThe aforementioned elements of a collection are documents of type\n\u003ccode\u003e\u003ca\u003eHsonDocument\u003c/a\u003e\u003c/code\u003e. Documents are the basic storage units composed of a\nfields (of type \u003ccode\u003e\u003ca\u003eHsonField\u003c/a\u003e\u003c/code\u003e), which are effectively key-value pairs.\nThe first part of the collection policy is to specify how such\ndocuments are labeled upon retrieval from the database. Namely, by\nproviding a function from the document to a label.  Keys, or field\nnames, have type \u003ccode\u003e\u003ca\u003eFieldName\u003c/a\u003e\u003c/code\u003e while values have type \u003ccode\u003e\u003ca\u003eHsonValue\u003c/a\u003e\u003c/code\u003e. Hails\nvalues are a subset of MongoDB's BSON specification. The second part\nof the collection policy is used to specify if a field value is\npublicly-searchable (i.e., readable by anybody that can read from the\ncollection) or labeled according to a function that may depend on the\ndata contained within the document itself. Hence, different form\nMongoDB's documents, Hails documents are typically labeled and thus\nprotect the potentially-sensitive data contained within.\n\u003c/p\u003e\u003cp\u003eThis module is analogous to \u003ca\u003eDatabase.MongoDB\u003c/a\u003e and uses MongoDB as the\nbacked. Since the interfaces are similar we recommend glancing at\ntheir documentation as well.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-Database.html",
        "fct-type": "module",
        "title": "Database"
      },
      "index": {
        "description": "This module exports the database interface used by apps and policy modules to carry out database queries The Hails data model is similar to that of MongoDB Below we highlight some similarities and difference We refer the interested reader to the documentation in Hails.PolicyModule for more details on the role of labels in Hails At the coarsest level code can execute database actions DBAction against the Database of policy module using withPolicyModule Different from MongoDB notion of database Hails databases have an associated Label which is used to restrict who can access the database Each Database is composed of set of Collection The existence of collection is protected by collection-set label which is intern protected by the database label collection is an approach to organizing and grouping elements of the same model For example collection users may contain elements documents corresponding to users of the system Each collection has label clearance and associated collection policy The label of collection serves the same role as the database label but at finer grain it protects who can read and write to the collection The collection clearance is also label but its role is to set an upper bound on the sensitivity of data that is and can be stored in the collection For example the collection user may set clearance such that the system private keys cannot be stored in the collection by accident or malice The collection policy specifies how elements of the collection are to be labeled when retrieved from the database The aforementioned elements of collection are documents of type HsonDocument Documents are the basic storage units composed of fields of type HsonField which are effectively key-value pairs The first part of the collection policy is to specify how such documents are labeled upon retrieval from the database Namely by providing function from the document to label Keys or field names have type FieldName while values have type HsonValue Hails values are subset of MongoDB BSON specification The second part of the collection policy is used to specify if field value is publicly-searchable i.e readable by anybody that can read from the collection or labeled according to function that may depend on the data contained within the document itself Hence different form MongoDB documents Hails documents are typically labeled and thus protect the potentially-sensitive data contained within This module is analogous to Database.MongoDB and uses MongoDB as the backed Since the interfaces are similar we recommend glancing at their documentation as well",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "Database",
        "normalized": "",
        "package": "hails",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:BatchSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of document to return in each batch response from the server. 0 means use Mongo default.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "BatchSize"
      },
      "index": {
        "description": "The number of document to return in each batch response from the server means use Mongo default",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "BatchSize",
        "normalized": "",
        "package": "hails",
        "partial": "Batch Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:Collection",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eCollection\u003c/code\u003e is a MongoDB collection name with an associated\n label, clearance and labeling policy. Access to the collection is\n restricted according to the collection label. Data inserted-to and\n retrieved-from the collection will be labeled according to the\n collection policy, with the guarantee that no data more sensitive than\n the collection clearance can be inserted into the collection.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#Collection",
        "fct-type": "data",
        "title": "Collection"
      },
      "index": {
        "description": "Collection is MongoDB collection name with an associated label clearance and labeling policy Access to the collection is restricted according to the collection label Data inserted-to and retrieved-from the collection will be labeled according to the collection policy with the guarantee that no data more sensitive than the collection clearance can be inserted into the collection",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "Collection",
        "normalized": "",
        "package": "hails",
        "partial": "Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:CollectionName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a collection.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Database-TCB.html#CollectionName",
        "fct-type": "type",
        "title": "CollectionName"
      },
      "index": {
        "description": "The name of collection",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "CollectionName",
        "normalized": "",
        "package": "hails",
        "partial": "Collection Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:CollectionSet",
      "description": {
        "fct-descr": "\u003cp\u003eA labeled \u003ccode\u003e\u003ca\u003eCollection\u003c/a\u003e\u003c/code\u003e set.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Database-TCB.html#CollectionSet",
        "fct-type": "type",
        "title": "CollectionSet"
      },
      "index": {
        "description": "labeled Collection set",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "CollectionSet",
        "normalized": "",
        "package": "hails",
        "partial": "Collection Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:Cursor",
      "description": {
        "fct-descr": "\u003cp\u003eA labeled cursor. The cursor is labeled with the join of the\n database and collection it reads from. The collection policies\n are \"carried\" along since they are applied on-demand.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-Query-TCB.html#Cursor",
        "fct-type": "data",
        "title": "Cursor"
      },
      "index": {
        "description": "labeled cursor The cursor is labeled with the join of the database and collection it reads from The collection policies are carried along since they are applied on-demand",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "Cursor",
        "normalized": "",
        "package": "hails",
        "partial": "Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:DBAction",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eDBAction\u003c/code\u003e is the monad within which database actions can be\n executed, and policy modules are defined.  The monad is simply a\n state monad with \u003ccode\u003e\u003ca\u003eDC\u003c/a\u003e\u003c/code\u003e as monad as the underlying monad with access to\n a database system configuration (\u003ccode\u003e\u003ca\u003ePipe\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAccessMode\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003eDatabase\u003c/a\u003e\u003c/code\u003e).  The value constructor is part of the \u003ccode\u003eTCB\u003c/code\u003e as to\n disallow untrusted code from modifying the access mode.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#DBAction",
        "fct-type": "data",
        "title": "DBAction"
      },
      "index": {
        "description": "DBAction is the monad within which database actions can be executed and policy modules are defined The monad is simply state monad with DC as monad as the underlying monad with access to database system configuration Pipe AccessMode and Database The value constructor is part of the TCB as to disallow untrusted code from modifying the access mode",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "DBAction",
        "normalized": "",
        "package": "hails",
        "partial": "DBAction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:DBError",
      "description": {
        "fct-descr": "\u003cp\u003eExceptions thrown by invalid database queries.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#DBError",
        "fct-type": "data",
        "title": "DBError"
      },
      "index": {
        "description": "Exceptions thrown by invalid database queries",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "DBError",
        "normalized": "",
        "package": "hails",
        "partial": "DBError",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:Database",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eDatabase\u003c/code\u003e is a MongoDB database with an associated label and set\n of collections. The label is used to restrict access to the database.\n Since collection policies are specified by policy modules, every\n collection must \u003cem\u003ealways\u003c/em\u003e be associated with some database (and\n thereby, policy module); a policy module is \u003cem\u003enot\u003c/em\u003e allowed to create a\n collection (and specify policies on it) in an arbitrary database.  We\n allow for the existance of a collection to be secrect, and thus\n protect the set of collections with a label.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#Database",
        "fct-type": "data",
        "title": "Database"
      },
      "index": {
        "description": "Database is MongoDB database with an associated label and set of collections The label is used to restrict access to the database Since collection policies are specified by policy modules every collection must always be associated with some database and thereby policy module policy module is not allowed to create collection and specify policies on it in an arbitrary database We allow for the existance of collection to be secrect and thus protect the set of collections with label",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "Database",
        "normalized": "",
        "package": "hails",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:DatabaseName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a database.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Database-TCB.html#DatabaseName",
        "fct-type": "type",
        "title": "DatabaseName"
      },
      "index": {
        "description": "The name of database",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "DatabaseName",
        "normalized": "",
        "package": "hails",
        "partial": "Database Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:InsertLike",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to generalize insertion and saving of documents.\n Specifically, it permits reusing function names when inserting/saving\n both already-labeled and unlabeled documents.\n Minimal definition: \u003ccode\u003e\u003ca\u003einsertP\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esaveP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-Database-Query.html#InsertLike",
        "fct-type": "class",
        "title": "InsertLike"
      },
      "index": {
        "description": "Class used to generalize insertion and saving of documents Specifically it permits reusing function names when inserting saving both already-labeled and unlabeled documents Minimal definition insertP and saveP",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "InsertLike",
        "normalized": "",
        "package": "hails",
        "partial": "Insert Like",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:LabeledHsonDocument",
      "description": {
        "fct-descr": "\u003cp\u003eA labeled \u003ccode\u003e\u003ca\u003eHsonDocument\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Database-Core.html#LabeledHsonDocument",
        "fct-type": "type",
        "title": "LabeledHsonDocument"
      },
      "index": {
        "description": "labeled HsonDocument",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "LabeledHsonDocument",
        "normalized": "",
        "package": "hails",
        "partial": "Labeled Hson Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:Limit",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum number of documents to return, i.e. cursor will close after iterating over this number of documents. 0 means no limit.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Limit"
      },
      "index": {
        "description": "Maximum number of documents to return i.e cursor will close after iterating over this number of documents means no limit",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "Limit",
        "normalized": "",
        "package": "hails",
        "partial": "Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:MonadDB",
      "description": {
        "fct-descr": "\u003cp\u003eArbitrary monad that can perform database actions.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-Database-Core.html#MonadDB",
        "fct-type": "class",
        "title": "MonadDB"
      },
      "index": {
        "description": "Arbitrary monad that can perform database actions",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "MonadDB",
        "normalized": "",
        "package": "hails",
        "partial": "Monad DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:Order",
      "description": {
        "fct-descr": "\u003cp\u003eSorting fields in \u003ccode\u003e\u003ca\u003eAsc\u003c/a\u003e\u003c/code\u003eending or \u003ccode\u003e\u003ca\u003eDesc\u003c/a\u003e\u003c/code\u003eending order.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-Query.html#Order",
        "fct-type": "data",
        "title": "Order"
      },
      "index": {
        "description": "Sorting fields in Asc ending or Desc ending order",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "Order",
        "normalized": "",
        "package": "hails",
        "partial": "Order",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:PolicyError",
      "description": {
        "fct-descr": "\u003cp\u003eA document policy error.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-Query.html#PolicyError",
        "fct-type": "data",
        "title": "PolicyError"
      },
      "index": {
        "description": "document policy error",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "PolicyError",
        "normalized": "",
        "package": "hails",
        "partial": "Policy Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:Query",
      "description": {
        "fct-descr": "\u003cp\u003eUse select to create a basic query with defaults, then modify if\n desired. Example: \u003ccode\u003e(select sel col) {limit =: 10}\u003c/code\u003e. For simplicity,\n and since policies may be specified in terms of arbitrary fields,\n The \u003ccode\u003e\u003ca\u003eselection\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e fields are restricted to \u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003es,\n or the \u003ccode\u003e\u003ca\u003e_id\u003c/a\u003e\u003c/code\u003e field that is implicitly a \u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "data",
        "title": "Query"
      },
      "index": {
        "description": "Use select to create basic query with defaults then modify if desired Example select sel col limit For simplicity and since policies may be specified in terms of arbitrary fields The selection and sort fields are restricted to SearchableField or the id field that is implicitly SearchableField",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "Query",
        "normalized": "",
        "package": "hails",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:QueryOption",
      "description": {
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "QueryOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "QueryOption",
        "normalized": "",
        "package": "hails",
        "partial": "Query Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:Select",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to simplicy the creation of a 'Selection'/'Query'.\n Specifically, \u003ccode\u003e\u003ca\u003eselect\u003c/a\u003e\u003c/code\u003e can be used to create a \u003ccode\u003eSection\u003c/code\u003e in a\n straight foward manner, but similarly can be used to create a\n \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e with a set of default options.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-Database-Query.html#Select",
        "fct-type": "class",
        "title": "Select"
      },
      "index": {
        "description": "Class used to simplicy the creation of Selection Query Specifically select can be used to create Section in straight foward manner but similarly can be used to create Query with set of default options",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "Select",
        "normalized": "",
        "package": "hails",
        "partial": "Select",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:Selection",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eSection\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eSelector\u003c/a\u003e\u003c/code\u003e query on a \u003ccode\u003e\u003ca\u003eCollection\u003c/a\u003e\u003c/code\u003e. In other\n words, a \u003ccode\u003eSelection\u003c/code\u003e is the necessary information for performing a\n database query.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-Query.html#Selection",
        "fct-type": "data",
        "title": "Selection"
      },
      "index": {
        "description": "Section is Selector query on Collection In other words Selection is the necessary information for performing database query",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "Selection",
        "normalized": "",
        "package": "hails",
        "partial": "Selection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#t:Selector",
      "description": {
        "fct-descr": "\u003cp\u003eFilter for a query, analogous to the \u003ccode\u003eWHERE\u003c/code\u003e clause in\n SQL. \u003ccode\u003e[]\u003c/code\u003e matches all documents in collection. For example,\n \u003ccode\u003e[x \u003ccode\u003e\u003ca\u003e-:\u003c/a\u003e\u003c/code\u003e a, y \u003ccode\u003e\u003ca\u003e-:\u003c/a\u003e\u003c/code\u003e b]\u003c/code\u003e is analogous to\n \u003ccode\u003eWHERE x = a AND y = b\u003c/code\u003e in SQL.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: only \u003ccode\u003e\u003ca\u003eFieldName\u003c/a\u003e\u003c/code\u003es of \u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003es may be used in\n selections, and thus all other fields are ignored.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Database-Query.html#Selector",
        "fct-type": "type",
        "title": "Selector"
      },
      "index": {
        "description": "Filter for query analogous to the WHERE clause in SQL matches all documents in collection For example is analogous to WHERE AND in SQL Note only FieldName of SearchableField may be used in selections and thus all other fields are ignored",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "Selector",
        "normalized": "",
        "package": "hails",
        "partial": "Selector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:Asc",
      "description": {
        "fct-descr": "\u003cp\u003eAscending order\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Asc FieldName",
        "fct-source": "src/Hails-Database-Query.html#Order",
        "fct-type": "function",
        "title": "Asc"
      },
      "index": {
        "description": "Ascending order",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "Asc",
        "normalized": "",
        "package": "hails",
        "partial": "Asc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:AwaitData",
      "description": {
        "fct-descr": "\u003cp\u003eUse with TailableCursor. If we are at the end of the data, block for a while rather than returning no data. After a timeout period, we do return as normal.\n\t| Exhaust  -- ^ Stream the data down full blast in multiple \u003ca\u003emore\u003c/a\u003e packages, on the assumption that the client will fully read all data queried. Faster when you are pulling a lot of data and know you want to pull it all down. Note: the client is not allowed to not read all the data unless it closes the connection.\n Exhaust commented out because not compatible with current \u003ccode\u003e\u003ca\u003ePipeline\u003c/a\u003e\u003c/code\u003e implementation\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "AwaitData",
        "fct-type": "function",
        "title": "AwaitData"
      },
      "index": {
        "description": "Use with TailableCursor If we are at the end of the data block for while rather than returning no data After timeout period we do return as normal Exhaust Stream the data down full blast in multiple more packages on the assumption that the client will fully read all data queried Faster when you are pulling lot of data and know you want to pull it all down Note the client is not allowed to not read all the data unless it closes the connection Exhaust commented out because not compatible with current Pipeline implementation",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "AwaitData",
        "normalized": "",
        "package": "hails",
        "partial": "Await Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:Desc",
      "description": {
        "fct-descr": "\u003cp\u003eDescending order\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Desc FieldName",
        "fct-source": "src/Hails-Database-Query.html#Order",
        "fct-type": "function",
        "title": "Desc"
      },
      "index": {
        "description": "Descending order",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "Desc",
        "normalized": "",
        "package": "hails",
        "partial": "Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:ExecFailure",
      "description": {
        "fct-descr": "\u003cp\u003eExecution of action failed\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "ExecFailure Failure",
        "fct-source": "src/Hails-Database-TCB.html#DBError",
        "fct-type": "function",
        "title": "ExecFailure"
      },
      "index": {
        "description": "Execution of action failed",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "ExecFailure",
        "normalized": "",
        "package": "hails",
        "partial": "Exec Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:NoCursorTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eThe server normally times out idle cursors after 10 minutes to prevent a memory leak in case a client forgets to close a cursor. Set this option to allow a cursor to live forever until it is closed.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "NoCursorTimeout",
        "fct-type": "function",
        "title": "NoCursorTimeout"
      },
      "index": {
        "description": "The server normally times out idle cursors after minutes to prevent memory leak in case client forgets to close cursor Set this option to allow cursor to live forever until it is closed",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "NoCursorTimeout",
        "normalized": "",
        "package": "hails",
        "partial": "No Cursor Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:Partial",
      "description": {
        "fct-descr": "\u003cp\u003eGet partial results from a _mongos_ if some shards are down, instead of throwing an error.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Partial",
        "fct-type": "function",
        "title": "Partial"
      },
      "index": {
        "description": "Get partial results from mongos if some shards are down instead of throwing an error",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "Partial",
        "normalized": "",
        "package": "hails",
        "partial": "Partial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:PolicyViolation",
      "description": {
        "fct-descr": "\u003cp\u003ePolicy has been violated\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "PolicyViolation",
        "fct-source": "src/Hails-Database-Query.html#PolicyError",
        "fct-type": "function",
        "title": "PolicyViolation"
      },
      "index": {
        "description": "Policy has been violated",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "PolicyViolation",
        "normalized": "",
        "package": "hails",
        "partial": "Policy Violation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:Query",
      "description": {
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Query",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "Query"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "Query",
        "normalized": "",
        "package": "hails",
        "partial": "Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:Selection",
      "description": {
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Selection",
        "fct-source": "src/Hails-Database-Query.html#Selection",
        "fct-type": "function",
        "title": "Selection"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "Selection",
        "normalized": "",
        "package": "hails",
        "partial": "Selection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:TailableCursor",
      "description": {
        "fct-descr": "\u003cp\u003eTailable means cursor is not closed when the last data is retrieved. Rather, the cursor marks the final object's position. You can resume using the cursor later, from where it was located, if more data were received. Like any \u003ca\u003elatent cursor\u003c/a\u003e, the cursor may become invalid at some point &#8211; for example if the final object it references were deleted. Thus, you should be prepared to requery on CursorNotFound exception.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "TailableCursor",
        "fct-type": "function",
        "title": "TailableCursor"
      },
      "index": {
        "description": "Tailable means cursor is not closed when the last data is retrieved Rather the cursor marks the final object position You can resume using the cursor later from where it was located if more data were received Like any latent cursor the cursor may become invalid at some point for example if the final object it references were deleted Thus you should be prepared to requery on CursorNotFound exception",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "TailableCursor",
        "normalized": "",
        "package": "hails",
        "partial": "Tailable Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:TypeError",
      "description": {
        "fct-descr": "\u003cp\u003eDocument is not \"well-typed\"\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "TypeError String",
        "fct-source": "src/Hails-Database-Query.html#PolicyError",
        "fct-type": "function",
        "title": "TypeError"
      },
      "index": {
        "description": "Document is not well-typed",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "TypeError",
        "normalized": "",
        "package": "hails",
        "partial": "Type Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:UnknownCollection",
      "description": {
        "fct-descr": "\u003cp\u003eCollection does not exist\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "UnknownCollection",
        "fct-source": "src/Hails-Database-TCB.html#DBError",
        "fct-type": "function",
        "title": "UnknownCollection"
      },
      "index": {
        "description": "Collection does not exist",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "UnknownCollection",
        "normalized": "",
        "package": "hails",
        "partial": "Unknown Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:UnknownPolicyModule",
      "description": {
        "fct-descr": "\u003cp\u003ePolicy module not found\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "UnknownPolicyModule",
        "fct-source": "src/Hails-Database-TCB.html#DBError",
        "fct-type": "function",
        "title": "UnknownPolicyModule"
      },
      "index": {
        "description": "Policy module not found",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "UnknownPolicyModule",
        "normalized": "",
        "package": "hails",
        "partial": "Unknown Policy Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:batchSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of document to return in each\n batch response from the server. 0 means\n MongoDB default.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "BatchSize",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "batchSize"
      },
      "index": {
        "description": "The number of document to return in each batch response from the server means MongoDB default",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "batchSize",
        "normalized": "",
        "package": "hails",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:colClearance",
      "description": {
        "fct-descr": "\u003cp\u003eCollection clearance\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Collection -\u003e DCLabel",
        "fct-source": "src/Hails-Database-TCB.html#colClearance",
        "fct-type": "function",
        "title": "colClearance"
      },
      "index": {
        "description": "Collection clearance",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "colClearance",
        "normalized": "Collection-\u003eDCLabel",
        "package": "hails",
        "partial": "Clearance",
        "signature": "Collection-\u003eDCLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:colLabel",
      "description": {
        "fct-descr": "\u003cp\u003eCollection label\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Collection -\u003e DCLabel",
        "fct-source": "src/Hails-Database-TCB.html#colLabel",
        "fct-type": "function",
        "title": "colLabel"
      },
      "index": {
        "description": "Collection label",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "colLabel",
        "normalized": "Collection-\u003eDCLabel",
        "package": "hails",
        "partial": "Label",
        "signature": "Collection-\u003eDCLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:colName",
      "description": {
        "fct-descr": "\u003cp\u003eCollection name\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Collection -\u003e CollectionName",
        "fct-source": "src/Hails-Database-TCB.html#colName",
        "fct-type": "function",
        "title": "colName"
      },
      "index": {
        "description": "Collection name",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "colName",
        "normalized": "Collection-\u003eCollectionName",
        "package": "hails",
        "partial": "Name",
        "signature": "Collection-\u003eCollectionName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:colPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eCollection labeling policies\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Collection -\u003e CollectionPolicy",
        "fct-source": "src/Hails-Database-TCB.html#colPolicy",
        "fct-type": "function",
        "title": "colPolicy"
      },
      "index": {
        "description": "Collection labeling policies",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "colPolicy",
        "normalized": "Collection-\u003eCollectionPolicy",
        "package": "hails",
        "partial": "Policy",
        "signature": "Collection-\u003eCollectionPolicy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:curLabel",
      "description": {
        "fct-descr": "\u003cp\u003eCursor label\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Cursor -\u003e DCLabel",
        "fct-source": "src/Hails-Database-Query-TCB.html#curLabel",
        "fct-type": "function",
        "title": "curLabel"
      },
      "index": {
        "description": "Cursor label",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "curLabel",
        "normalized": "Cursor-\u003eDCLabel",
        "package": "hails",
        "partial": "Label",
        "signature": "Cursor-\u003eDCLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:databaseCollections",
      "description": {
        "fct-descr": "\u003cp\u003eCollections associated with databsae\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Database -\u003e CollectionSet",
        "fct-source": "src/Hails-Database-TCB.html#databaseCollections",
        "fct-type": "function",
        "title": "databaseCollections"
      },
      "index": {
        "description": "Collections associated with databsae",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "databaseCollections",
        "normalized": "Database-\u003eCollectionSet",
        "package": "hails",
        "partial": "Collections",
        "signature": "Database-\u003eCollectionSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:databaseLabel",
      "description": {
        "fct-descr": "\u003cp\u003eLabel of database\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Database -\u003e DCLabel",
        "fct-source": "src/Hails-Database-TCB.html#databaseLabel",
        "fct-type": "function",
        "title": "databaseLabel"
      },
      "index": {
        "description": "Label of database",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "databaseLabel",
        "normalized": "Database-\u003eDCLabel",
        "package": "hails",
        "partial": "Label",
        "signature": "Database-\u003eDCLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:databaseName",
      "description": {
        "fct-descr": "\u003cp\u003eDatabase name\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Database -\u003e DatabaseName",
        "fct-source": "src/Hails-Database-TCB.html#databaseName",
        "fct-type": "function",
        "title": "databaseName"
      },
      "index": {
        "description": "Database name",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "databaseName",
        "normalized": "Database-\u003eDatabaseName",
        "package": "hails",
        "partial": "Name",
        "signature": "Database-\u003eDatabaseName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete documents according to the selection.\n It must be that the current computation can overwrite the\n existing documents. That is, the current label must flow\n to the label of each document that matches the selection.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Selection -\u003e DBAction ()",
        "fct-source": "src/Hails-Database-Query.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete documents according to the selection It must be that the current computation can overwrite the existing documents That is the current label must flow to the label of each document that matches the selection",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "delete",
        "normalized": "Selection-\u003eDBAction()",
        "package": "hails",
        "partial": "",
        "signature": "Selection-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:deleteP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e, but uses privileges.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e Selection -\u003e DBAction ()",
        "fct-source": "src/Hails-Database-Query.html#deleteP",
        "fct-type": "function",
        "title": "deleteP"
      },
      "index": {
        "description": "Same as delete but uses privileges",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "deleteP",
        "normalized": "DCPriv-\u003eSelection-\u003eDBAction()",
        "package": "hails",
        "partial": "",
        "signature": "DCPriv-\u003eSelection-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eFetch documents satisfying query. A labeled \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e is returned,\n which can be used to retrieve the actual \u003ccode\u003e\u003ca\u003eHsonDocument\u003c/a\u003e\u003c/code\u003es.  For this\n function to succeed the current computation must be able to read from\n the database and collection (implicilty the database's\n collection-set). This is satisfied by applying \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e to the join\n join of the collection, database, and ccollection-set label.\n The curor label is labeled by the \u003ccode\u003eupperBound\u003c/code\u003e of the database and\n collection labels and must be used within the same \u003ccode\u003ewithPolicyModule\u003c/code\u003e\n block.\n\u003c/p\u003e\u003cp\u003eNote that this function is quite permissive in the queries it\n accepts. Specifically, any non-\u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003es used in \u003ccode\u003e\u003ca\u003esort\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003eorder\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003ehint\u003c/a\u003e\u003c/code\u003e are \u003cem\u003eignored\u003c/em\u003e (as opposed to throwing an\n exception).\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Query -\u003e DBAction Cursor",
        "fct-source": "src/Hails-Database-Query.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "Fetch documents satisfying query labeled Cursor is returned which can be used to retrieve the actual HsonDocument For this function to succeed the current computation must be able to read from the database and collection implicilty the database collection-set This is satisfied by applying taint to the join join of the collection database and ccollection-set label The curor label is labeled by the upperBound of the database and collection labels and must be used within the same withPolicyModule block Note that this function is quite permissive in the queries it accepts Specifically any non SearchableField used in sort order or hint are ignored as opposed to throwing an exception",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "find",
        "normalized": "Query-\u003eDBAction Cursor",
        "package": "hails",
        "partial": "",
        "signature": "Query-\u003eDBAction Cursor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:findOne",
      "description": {
        "fct-descr": "\u003cp\u003eFetch the first document satisfying query, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if not\n documents matched the query.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Query -\u003e DBAction (Maybe LabeledHsonDocument)",
        "fct-source": "src/Hails-Database-Query.html#findOne",
        "fct-type": "function",
        "title": "findOne"
      },
      "index": {
        "description": "Fetch the first document satisfying query or Nothing if not documents matched the query",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "findOne",
        "normalized": "Query-\u003eDBAction(Maybe LabeledHsonDocument)",
        "package": "hails",
        "partial": "One",
        "signature": "Query-\u003eDBAction(Maybe LabeledHsonDocument)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:findOneP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efindOne\u003c/a\u003e\u003c/code\u003e, but uses privileges when performing label\n comparisons.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e Query -\u003e DBAction (Maybe LabeledHsonDocument)",
        "fct-source": "src/Hails-Database-Query.html#findOneP",
        "fct-type": "function",
        "title": "findOneP"
      },
      "index": {
        "description": "Same as findOne but uses privileges when performing label comparisons",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "findOneP",
        "normalized": "DCPriv-\u003eQuery-\u003eDBAction(Maybe LabeledHsonDocument)",
        "package": "hails",
        "partial": "One",
        "signature": "DCPriv-\u003eQuery-\u003eDBAction(Maybe LabeledHsonDocument)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:findP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e, but uses privileges when reading from the\n collection and database.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e Query -\u003e DBAction Cursor",
        "fct-source": "src/Hails-Database-Query.html#findP",
        "fct-type": "function",
        "title": "findP"
      },
      "index": {
        "description": "Same as find but uses privileges when reading from the collection and database",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "findP",
        "normalized": "DCPriv-\u003eQuery-\u003eDBAction Cursor",
        "package": "hails",
        "partial": "",
        "signature": "DCPriv-\u003eQuery-\u003eDBAction Cursor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:getDatabase",
      "description": {
        "fct-descr": "\u003cp\u003eGet the underlying database. Must be able to read from the\n database as enforced by applying \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e to the database label.\n This is required because the database label protects the\n label on collections which can be projected given a \u003ccode\u003e\u003ca\u003eDatabase\u003c/a\u003e\u003c/code\u003e\n value.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "DBAction Database",
        "fct-source": "src/Hails-Database-Core.html#getDatabase",
        "fct-type": "function",
        "title": "getDatabase"
      },
      "index": {
        "description": "Get the underlying database Must be able to read from the database as enforced by applying taint to the database label This is required because the database label protects the label on collections which can be projected given Database value",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "getDatabase",
        "normalized": "",
        "package": "hails",
        "partial": "Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:getDatabaseP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egetDatabase\u003c/a\u003e\u003c/code\u003e, but uses privileges when raising the\n current label.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e DBAction Database",
        "fct-source": "src/Hails-Database-Core.html#getDatabaseP",
        "fct-type": "function",
        "title": "getDatabaseP"
      },
      "index": {
        "description": "Same as getDatabase but uses privileges when raising the current label",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "getDatabaseP",
        "normalized": "DCPriv-\u003eDBAction Database",
        "package": "hails",
        "partial": "Database",
        "signature": "DCPriv-\u003eDBAction Database"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:hint",
      "description": {
        "fct-descr": "\u003cp\u003eForce mongoDB to use this index, default \u003ccode\u003e[]\u003c/code\u003e,\n no hint.  \n Non-\u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003es ignored.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "[FieldName]",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "hint"
      },
      "index": {
        "description": "Force mongoDB to use this index default no hint Non SearchableField ignored",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "hint",
        "normalized": "[FieldName]",
        "package": "hails",
        "partial": "",
        "signature": "[FieldName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert document into collection and return its \u003ccode\u003e_id\u003c/code\u003e value.  When\n performing an \u003ccode\u003einsert\u003c/code\u003e it is required that the computation be able\n to write to both the database and collection. To this end, \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e\n internally applies \u003ccode\u003e\u003ca\u003eguardWrite\u003c/a\u003e\u003c/code\u003e on the database label and collection\n label. Of course, the computation must be able to name the\n collection in the database, and thus must be able to read the\n database collection map as verified by applying \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e to the\n collections label.\n\u003c/p\u003e\u003cp\u003eWhen inserting an unlabeled document, all policies must  be\n succesfully applied using \u003ccode\u003e\u003ca\u003eapplyCollectionPolicyP\u003c/a\u003e\u003c/code\u003e and the document\n must be \"well-typed\" (see \u003ccode\u003e\u003ca\u003eapplyCollectionPolicyP\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eWhen inserting an already-labeled document, the labels on fields\n and the document itself are compared against the policy-generated\n labels. Note that this approach allows an untrusted piece of code\n to insert a document it could not label according to the policy\n module.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "CollectionName -\u003e doc -\u003e DBAction ObjectId",
        "fct-source": "src/Hails-Database-Query.html#insert",
        "fct-type": "method",
        "title": "insert"
      },
      "index": {
        "description": "Insert document into collection and return its id value When performing an insert it is required that the computation be able to write to both the database and collection To this end insert internally applies guardWrite on the database label and collection label Of course the computation must be able to name the collection in the database and thus must be able to read the database collection map as verified by applying taint to the collections label When inserting an unlabeled document all policies must be succesfully applied using applyCollectionPolicyP and the document must be well-typed see applyCollectionPolicyP When inserting an already-labeled document the labels on fields and the document itself are compared against the policy-generated labels Note that this approach allows an untrusted piece of code to insert document it could not label according to the policy module",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "insert",
        "normalized": "CollectionName-\u003ea-\u003eDBAction ObjectId",
        "package": "hails",
        "partial": "",
        "signature": "CollectionName-\u003edoc-\u003eDBAction ObjectId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:insertP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, but uses privileges when applying the\n policies and performing label comparisons.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e CollectionName -\u003e doc -\u003e DBAction ObjectId",
        "fct-source": "src/Hails-Database-Query.html#insertP",
        "fct-type": "method",
        "title": "insertP"
      },
      "index": {
        "description": "Same as insert but uses privileges when applying the policies and performing label comparisons",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "insertP",
        "normalized": "DCPriv-\u003eCollectionName-\u003ea-\u003eDBAction ObjectId",
        "package": "hails",
        "partial": "",
        "signature": "DCPriv-\u003eCollectionName-\u003edoc-\u003eDBAction ObjectId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:insertP_",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsertP\u003c/a\u003e\u003c/code\u003e except it does not return the \u003ccode\u003e_id\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e CollectionName -\u003e doc -\u003e DBAction ()",
        "fct-source": "src/Hails-Database-Query.html#insertP_",
        "fct-type": "method",
        "title": "insertP_"
      },
      "index": {
        "description": "Same as insertP except it does not return the id",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "insertP_",
        "normalized": "DCPriv-\u003eCollectionName-\u003ea-\u003eDBAction()",
        "package": "hails",
        "partial": "",
        "signature": "DCPriv-\u003eCollectionName-\u003edoc-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:insert_",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e except it does not return \u003ccode\u003e_id\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "CollectionName -\u003e doc -\u003e DBAction ()",
        "fct-source": "src/Hails-Database-Query.html#insert_",
        "fct-type": "method",
        "title": "insert_"
      },
      "index": {
        "description": "Same as insert except it does not return id",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "insert_",
        "normalized": "CollectionName-\u003ea-\u003eDBAction()",
        "package": "hails",
        "partial": "",
        "signature": "CollectionName-\u003edoc-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:liftDB",
      "description": {
        "fct-descr": "\u003cp\u003eLift a database action into the database monad.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "DBAction a -\u003e m a",
        "fct-source": "src/Hails-Database-Core.html#liftDB",
        "fct-type": "method",
        "title": "liftDB"
      },
      "index": {
        "description": "Lift database action into the database monad",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "liftDB",
        "normalized": "DBAction a-\u003eb a",
        "package": "hails",
        "partial": "DB",
        "signature": "DBAction a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:limit",
      "description": {
        "fct-descr": "\u003cp\u003eMax number of documents to return. Default, 0,\n means no limit.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Limit",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "limit"
      },
      "index": {
        "description": "Max number of documents to return Default means no limit",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "limit",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003eReturn next \u003ccode\u003e\u003ca\u003eHsonDocument\u003c/a\u003e\u003c/code\u003e in the query result, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n finished.  Note that the current computation must be able to read from\n the labeled \u003ccode\u003e\u003ca\u003eCursor\u003c/a\u003e\u003c/code\u003e. To enforce this, \u003ccode\u003enext\u003c/code\u003e uses \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e to raise\n the current label to join of the current label and 'Cursor'\\'s label.\n The returned document is labeled according to the underlying\n \u003ccode\u003e\u003ca\u003eCollection\u003c/a\u003e\u003c/code\u003e policy.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Cursor -\u003e DBAction (Maybe LabeledHsonDocument)",
        "fct-source": "src/Hails-Database-Query.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "Return next HsonDocument in the query result or Nothing if finished Note that the current computation must be able to read from the labeled Cursor To enforce this next uses taint to raise the current label to join of the current label and Cursor label The returned document is labeled according to the underlying Collection policy",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "next",
        "normalized": "Cursor-\u003eDBAction(Maybe LabeledHsonDocument)",
        "package": "hails",
        "partial": "",
        "signature": "Cursor-\u003eDBAction(Maybe LabeledHsonDocument)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:nextP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e, but usess privileges when raising the current label.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e Cursor -\u003e DBAction (Maybe LabeledHsonDocument)",
        "fct-source": "src/Hails-Database-Query.html#nextP",
        "fct-type": "function",
        "title": "nextP"
      },
      "index": {
        "description": "Same as next but usess privileges when raising the current label",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "nextP",
        "normalized": "DCPriv-\u003eCursor-\u003eDBAction(Maybe LabeledHsonDocument)",
        "package": "hails",
        "partial": "",
        "signature": "DCPriv-\u003eCursor-\u003eDBAction(Maybe LabeledHsonDocument)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:options",
      "description": {
        "fct-descr": "\u003cp\u003eQuery options, default \u003ccode\u003e[]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "[QueryOption]",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "options"
      },
      "index": {
        "description": "Query options default",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "options",
        "normalized": "[QueryOption]",
        "package": "hails",
        "partial": "",
        "signature": "[QueryOption]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:project",
      "description": {
        "fct-descr": "\u003cp\u003eThe fields to project. Default \u003ccode\u003e[]\u003c/code\u003e\n corresponds to all.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "[FieldName]",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "project"
      },
      "index": {
        "description": "The fields to project Default corresponds to all",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "project",
        "normalized": "[FieldName]",
        "package": "hails",
        "partial": "",
        "signature": "[FieldName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:save",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate a document according to its \u003ccode\u003e_id\u003c/code\u003e value. The IFC requirements\n subsume those of \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e. Specifically, in addition to being able\n to apply all the policies and requiring that the current label flow\n to the label of the collection and database, \u003ccode\u003esave\u003c/code\u003e requires that \n the current label flow to the label of the existing database\n record (i.e, the existing document can be overwritten).\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "CollectionName -\u003e doc -\u003e DBAction ()",
        "fct-source": "src/Hails-Database-Query.html#save",
        "fct-type": "method",
        "title": "save"
      },
      "index": {
        "description": "Update document according to its id value The IFC requirements subsume those of insert Specifically in addition to being able to apply all the policies and requiring that the current label flow to the label of the collection and database save requires that the current label flow to the label of the existing database record i.e the existing document can be overwritten",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "save",
        "normalized": "CollectionName-\u003ea-\u003eDBAction()",
        "package": "hails",
        "partial": "",
        "signature": "CollectionName-\u003edoc-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:saveP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e, but uses privileges when applying the\n policies and performing label comparisons.\n Note that a find is performed if the provided document contains\n an \u003ccode\u003e_id\u003c/code\u003e field. This lookup does _not_ leak timing information\n since the \u003ccode\u003e_id\u003c/code\u003e field is always searchable and thus solely\n protected by the collection label (which the computation is\n tainted by).\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e CollectionName -\u003e doc -\u003e DBAction ()",
        "fct-source": "src/Hails-Database-Query.html#saveP",
        "fct-type": "method",
        "title": "saveP"
      },
      "index": {
        "description": "Same as save but uses privileges when applying the policies and performing label comparisons Note that find is performed if the provided document contains an id field This lookup does not leak timing information since the id field is always searchable and thus solely protected by the collection label which the computation is tainted by",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "saveP",
        "normalized": "DCPriv-\u003eCollectionName-\u003ea-\u003eDBAction()",
        "package": "hails",
        "partial": "",
        "signature": "DCPriv-\u003eCollectionName-\u003edoc-\u003eDBAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a selector and collection name create a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e.\n The resultant type depends on the use case, for example,\n in \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eselect mySel myCol\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eQuery\u003c/a\u003e\u003c/code\u003e, but in \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e\n it is a \u003ccode\u003e\u003ca\u003eSelection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Selector -\u003e CollectionName -\u003e selectionOrQuery",
        "fct-source": "src/Hails-Database-Query.html#select",
        "fct-type": "method",
        "title": "select"
      },
      "index": {
        "description": "Given selector and collection name create Query The resultant type depends on the use case for example in find select mySel myCol is Query but in delete it is Selection",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "select",
        "normalized": "Selector-\u003eCollectionName-\u003ea",
        "package": "hails",
        "partial": "",
        "signature": "Selector-\u003eCollectionName-\u003eselectionOrQuery"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:selection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eWHERE\u003c/code\u003e clause,default \u003ccode\u003e[]\u003c/code\u003e.\n Non-\u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003es ignored.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Selection",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "selection"
      },
      "index": {
        "description": "WHERE clause default Non SearchableField ignored",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "selection",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:selectionCollection",
      "description": {
        "fct-descr": "\u003cp\u003eCollection to perform query on.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "CollectionName",
        "fct-source": "src/Hails-Database-Query.html#Selection",
        "fct-type": "function",
        "title": "selectionCollection"
      },
      "index": {
        "description": "Collection to perform query on",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "selectionCollection",
        "normalized": "",
        "package": "hails",
        "partial": "Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:selectionSelector",
      "description": {
        "fct-descr": "\u003cp\u003eSelection query.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Selector",
        "fct-source": "src/Hails-Database-Query.html#Selection",
        "fct-type": "function",
        "title": "selectionSelector"
      },
      "index": {
        "description": "Selection query",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "selectionSelector",
        "normalized": "",
        "package": "hails",
        "partial": "Selector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:skip",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of documents to skip, default 0.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "Word32",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "skip"
      },
      "index": {
        "description": "Number of documents to skip default",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "skip",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:sort",
      "description": {
        "fct-descr": "\u003cp\u003eSort result by given order, default \u003ccode\u003e[]\u003c/code\u003e.\n Non-\u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003es ignored.\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "[Order]",
        "fct-source": "src/Hails-Database-Query.html#Query",
        "fct-type": "function",
        "title": "sort"
      },
      "index": {
        "description": "Sort result by given order default Non SearchableField ignored",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "sort",
        "normalized": "[Order]",
        "package": "hails",
        "partial": "",
        "signature": "[Order]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Database.html#v:withPolicyModule",
      "description": {
        "fct-descr": "\u003cp\u003eThis function is the used to execute database queries on policy\n module databases. The function firstly invokes the policy module,\n determined from the type \u003ccode\u003epm\u003c/code\u003e, and creates a pipe to the policy\n module's database. The supplied database query function is then\n applied to the policy module. In most cases, the value of type \u003ccode\u003epm\u003c/code\u003e is\n opaque and the query is executed without additionally privileges.\n\u003c/p\u003e\u003cpre\u003e withPolicyModule $ \\(_ :: SomePolicyModule) -\u003e do\n  -- Perform database operations: insert, save, find, delete, etc.\n\u003c/pre\u003e\u003cp\u003eTrustworthy code (as deemed by the policy module) may, however, be\n passed in additional privileges by encapsulating them in \u003ccode\u003epm\u003c/code\u003e (see\n \u003ccode\u003e\u003ca\u003ePolicyModule\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Hails.Database",
        "fct-package": "hails",
        "fct-signature": "(pm -\u003e DBAction a) -\u003e DC a",
        "fct-source": "src/Hails-PolicyModule.html#withPolicyModule",
        "fct-type": "function",
        "title": "withPolicyModule"
      },
      "index": {
        "description": "This function is the used to execute database queries on policy module databases The function firstly invokes the policy module determined from the type pm and creates pipe to the policy module database The supplied database query function is then applied to the policy module In most cases the value of type pm is opaque and the query is executed without additionally privileges withPolicyModule SomePolicyModule do Perform database operations insert save find delete etc Trustworthy code as deemed by the policy module may however be passed in additional privileges by encapsulating them in pm see PolicyModule",
        "hierarchy": "Hails Database",
        "module": "Hails.Database",
        "name": "withPolicyModule",
        "normalized": "(a-\u003eDBAction b)-\u003eDC b",
        "package": "hails",
        "partial": "Policy Module",
        "signature": "(pm-\u003eDBAction a)-\u003eDC a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExports basic HTTP client functions inside the \u003ccode\u003e\u003ca\u003eDC\u003c/a\u003e\u003c/code\u003e Monad.\nComputations are allowed to communicate over HTTP as long as they can\nread and write to a labeled origin. An origin is associated with two\nlabels. When writing, the origin has a label of the form\n\u003ccode\u003e\u003c \"scheme://authority\", |True \u003e\u003c/code\u003e, where \u003ccode\u003escheme\u003c/code\u003e is\neither 'http' or 'https', and \u003ccode\u003eauthority\u003c/code\u003e is the domain name or IP\naddress used in the request and port number of the connection. In\nother words, the secrecy component contains the origin information,\nwhile the integrity component is the same as that of public data.\nWhen reading, the origin has a label of the form\n\u003ccode\u003e\u003c |True, \"scheme://authority\" \u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis means that \u003ccode\u003e\u003ca\u003eDC\u003c/a\u003e\u003c/code\u003e computations can export data if the current label\nis not higher than that of the labeled origin, and read data that is\nno more trustworthy than that of the origin.  Practically, this means\nthat untrusted computation can export data so long as the they have\nnot observed any data more sensitive than the label of the target\ndomain. Reading (which also occurs on every request/write) further\nraises the current label to the join of the current label and origin.\n\u003c/p\u003e\u003cp\u003eFor example, suppose some piece of data, \u003ccode\u003emyLoc\u003c/code\u003e, has the label:\n\u003c/p\u003e\u003cpre\u003e aliceLocL = dcLabel (\"alice\" /\\ \"http://maps.googleapis.com:80\") dcTrue\n\u003c/pre\u003e\u003cp\u003ecreated as:\n\u003c/p\u003e\u003cpre\u003e myLoc \u003c- labelP alicePriv  aliceLocL \"3101 24th Street, San Francisco, CA\"\n\u003c/pre\u003e\u003cp\u003eThen, untrusted code (with initial label set to public) running on\nbehalf of \"alice\" , may perform the following operation:\n\u003c/p\u003e\u003cpre\u003e let mapBase = \"http://maps.googleapis.com/maps/api/geocode/json?sensor=false\"\n aliceLoc \u003c- unlabelP alicePriv myLoc\n resp \u003c- simpleGetHttp $ mapBase ++ \"&address=\" ++ aliceLoc\n\u003c/pre\u003e\u003cp\u003eIn this case the \u003ccode\u003e\u003ca\u003eunlabelP\u003c/a\u003e\u003c/code\u003e will raise the current label to the label:\n\u003c/p\u003e\u003cpre\u003e \u003c \"http://maps.googleapis.com:80\", |True \u003e\n\u003c/pre\u003e\u003cp\u003eby exercising \"alice\"s privilges.  Directly, the \u003ccode\u003e\u003ca\u003esimpleHttp\u003c/a\u003e\u003c/code\u003e\nwill be permitted. However, if\n\u003c/p\u003e\u003cpre\u003e let mapBase = \"http://maps.evilalternatives.org/geocode/json?sensor=false\"\n\u003c/pre\u003e\u003cp\u003ean exception will be thrown since the current label does not flow to\nthe label of \u003ccode\u003emapBase\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis module uses 'http-conduit' as the underlying client, we recommend\nlooking at the \u003ca\u003eNetwork.HTTP.Conduit\u003c/a\u003e documentation on how to\nconstruct \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003es. Here, we highlight some important details:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The headers \u003ccode\u003eContent-Length\u003c/code\u003e and \u003ccode\u003eHost\u003c/code\u003e are automatically set, and\n  should not be added to \u003ccode\u003e\u003ca\u003erequestHeaders\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e By default, the functions in this package will \u003cem\u003enot\u003c/em\u003e throw\n  exceptions for non-2xx status codes. If you would like to use the\n  default http-conduit behavior, you should use \u003ccode\u003e\u003ca\u003echeckStatus\u003c/a\u003e\u003c/code\u003e, e.g.:\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e  req \u003c- parseUrl mapBase\n  resp \u003c- simpleGetHttp $ req { checkStatus = \\s@(Status sci _) hs -\u003e\n            if 200 \u003c= sci && sci \u003c 300\n                then Nothing\n                else Just $ toException $ StatusCodeException s hs }\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-HttpClient.html",
        "fct-type": "module",
        "title": "HttpClient"
      },
      "index": {
        "description": "Exports basic HTTP client functions inside the DC Monad Computations are allowed to communicate over HTTP as long as they can read and write to labeled origin An origin is associated with two labels When writing the origin has label of the form scheme authority True where scheme is either http or https and authority is the domain name or IP address used in the request and port number of the connection In other words the secrecy component contains the origin information while the integrity component is the same as that of public data When reading the origin has label of the form True scheme authority This means that DC computations can export data if the current label is not higher than that of the labeled origin and read data that is no more trustworthy than that of the origin Practically this means that untrusted computation can export data so long as the they have not observed any data more sensitive than the label of the target domain Reading which also occurs on every request write further raises the current label to the join of the current label and origin For example suppose some piece of data myLoc has the label aliceLocL dcLabel alice http maps.googleapis.com dcTrue created as myLoc labelP alicePriv aliceLocL th Street San Francisco CA Then untrusted code with initial label set to public running on behalf of alice may perform the following operation let mapBase http maps.googleapis.com maps api geocode json sensor false aliceLoc unlabelP alicePriv myLoc resp simpleGetHttp mapBase address aliceLoc In this case the unlabelP will raise the current label to the label http maps.googleapis.com True by exercising alice privilges Directly the simpleHttp will be permitted However if let mapBase http maps.evilalternatives.org geocode json sensor false an exception will be thrown since the current label does not flow to the label of mapBase This module uses http-conduit as the underlying client we recommend looking at the Network.HTTP.Conduit documentation on how to construct Request Here we highlight some important details The headers Content-Length and Host are automatically set and should not be added to requestHeaders By default the functions in this package will not throw exceptions for non-2xx status codes If you would like to use the default http-conduit behavior you should use checkStatus e.g req parseUrl mapBase resp simpleGetHttp req checkStatus Status sci hs if sci sci then Nothing else Just toException StatusCodeException hs",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "HttpClient",
        "normalized": "",
        "package": "hails",
        "partial": "Http Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#t:HttpException",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "HttpException"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "HttpException",
        "normalized": "",
        "package": "hails",
        "partial": "Http Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#t:Request",
      "description": {
        "fct-descr": "\u003cp\u003eReques type, wrapper for the conduit \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-HttpClient.html#Request",
        "fct-type": "type",
        "title": "Request"
      },
      "index": {
        "description": "Reques type wrapper for the conduit Request",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "Request",
        "normalized": "",
        "package": "hails",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#t:Response",
      "description": {
        "fct-descr": "\u003cp\u003eA response sent by the app.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-HttpServer-Types.html#Response",
        "fct-type": "data",
        "title": "Response"
      },
      "index": {
        "description": "response sent by the app",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "Response",
        "normalized": "",
        "package": "hails",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:ExpectedBlankAfter100Continue",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "ExpectedBlankAfter100Continue",
        "fct-type": "function",
        "title": "ExpectedBlankAfter100Continue"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "ExpectedBlankAfter100Continue",
        "normalized": "",
        "package": "hails",
        "partial": "Expected Blank After Continue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:FailedConnectionException",
      "description": {
        "fct-descr": "\u003cp\u003ehost/port\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "FailedConnectionException String Int",
        "fct-type": "function",
        "title": "FailedConnectionException"
      },
      "index": {
        "description": "host port",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "FailedConnectionException",
        "normalized": "",
        "package": "hails",
        "partial": "Failed Connection Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:HandshakeFailed",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "HandshakeFailed",
        "fct-type": "function",
        "title": "HandshakeFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "HandshakeFailed",
        "normalized": "",
        "package": "hails",
        "partial": "Handshake Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:HttpParserException",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "HttpParserException String",
        "fct-type": "function",
        "title": "HttpParserException"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "HttpParserException",
        "normalized": "",
        "package": "hails",
        "partial": "Http Parser Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:InternalIOException",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "InternalIOException IOException",
        "fct-type": "function",
        "title": "InternalIOException"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "InternalIOException",
        "normalized": "",
        "package": "hails",
        "partial": "Internal IOException",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:InvalidChunkHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eSince 1.9.4\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "InvalidChunkHeaders",
        "fct-type": "function",
        "title": "InvalidChunkHeaders"
      },
      "index": {
        "description": "Since",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "InvalidChunkHeaders",
        "normalized": "",
        "package": "hails",
        "partial": "Invalid Chunk Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:InvalidHeader",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "InvalidHeader ByteString",
        "fct-type": "function",
        "title": "InvalidHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "InvalidHeader",
        "normalized": "",
        "package": "hails",
        "partial": "Invalid Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:InvalidStatusLine",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "InvalidStatusLine ByteString",
        "fct-type": "function",
        "title": "InvalidStatusLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "InvalidStatusLine",
        "normalized": "",
        "package": "hails",
        "partial": "Invalid Status Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:InvalidUrlException",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "InvalidUrlException String String",
        "fct-type": "function",
        "title": "InvalidUrlException"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "InvalidUrlException",
        "normalized": "",
        "package": "hails",
        "partial": "Invalid Url Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:NoResponseDataReceived",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "NoResponseDataReceived",
        "fct-type": "function",
        "title": "NoResponseDataReceived"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "NoResponseDataReceived",
        "normalized": "",
        "package": "hails",
        "partial": "No Response Data Received",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:OverlongHeaders",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "OverlongHeaders",
        "fct-type": "function",
        "title": "OverlongHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "OverlongHeaders",
        "normalized": "",
        "package": "hails",
        "partial": "Overlong Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:ProxyConnectException",
      "description": {
        "fct-descr": "\u003cp\u003ehost/port\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "ProxyConnectException ByteString Int (Either ByteString HttpException)",
        "fct-type": "function",
        "title": "ProxyConnectException"
      },
      "index": {
        "description": "host port",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "ProxyConnectException",
        "normalized": "",
        "package": "hails",
        "partial": "Proxy Connect Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:Response",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "Response",
        "fct-source": "src/Hails-HttpServer-Types.html#Response",
        "fct-type": "function",
        "title": "Response"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "Response",
        "normalized": "",
        "package": "hails",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:ResponseBodyTooShort",
      "description": {
        "fct-descr": "\u003cp\u003eExpected size/actual size.\n\u003c/p\u003e\u003cp\u003eSince 1.9.4\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "ResponseBodyTooShort Word64 Word64",
        "fct-type": "function",
        "title": "ResponseBodyTooShort"
      },
      "index": {
        "description": "Expected size actual size Since",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "ResponseBodyTooShort",
        "normalized": "",
        "package": "hails",
        "partial": "Response Body Too Short",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:ResponseTimeout",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "ResponseTimeout",
        "fct-type": "function",
        "title": "ResponseTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "ResponseTimeout",
        "normalized": "",
        "package": "hails",
        "partial": "Response Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:StatusCodeException",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "StatusCodeException Status ResponseHeaders CookieJar",
        "fct-type": "function",
        "title": "StatusCodeException"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "StatusCodeException",
        "normalized": "",
        "package": "hails",
        "partial": "Status Code Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:TlsException",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "TlsException SomeException",
        "fct-type": "function",
        "title": "TlsException"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "TlsException",
        "normalized": "",
        "package": "hails",
        "partial": "Tls Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:TooManyRedirects",
      "description": {
        "fct-descr": "\u003cp\u003eList of encountered responses containing redirects in reverse chronological order; including last redirect, which triggered the exception and was not followed.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "TooManyRedirects [Response ByteString]",
        "fct-type": "function",
        "title": "TooManyRedirects"
      },
      "index": {
        "description": "List of encountered responses containing redirects in reverse chronological order including last redirect which triggered the exception and was not followed",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "TooManyRedirects",
        "normalized": "TooManyRedirects[Response ByteString]",
        "package": "hails",
        "partial": "Too Many Redirects",
        "signature": "TooManyRedirects[Response ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:TooManyRetries",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "TooManyRetries",
        "fct-type": "function",
        "title": "TooManyRetries"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "TooManyRetries",
        "normalized": "",
        "package": "hails",
        "partial": "Too Many Retries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:UnparseableRedirect",
      "description": {
        "fct-descr": "\u003cp\u003eResponse containing unparseable redirect.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "UnparseableRedirect (Response ByteString)",
        "fct-type": "function",
        "title": "UnparseableRedirect"
      },
      "index": {
        "description": "Response containing unparseable redirect",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "UnparseableRedirect",
        "normalized": "",
        "package": "hails",
        "partial": "Unparseable Redirect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:applyBasicAuth",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a Basic Auth header (with the specified user name and password) to the\n given Request. Ignore error handling:\n\u003c/p\u003e\u003cp\u003eapplyBasicAuth \u003ca\u003euser\u003c/a\u003e \u003ca\u003epass\u003c/a\u003e $ fromJust $ parseUrl url\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "ByteString -\u003e ByteString -\u003e Request m -\u003e Request m",
        "fct-type": "function",
        "title": "applyBasicAuth"
      },
      "index": {
        "description": "Add Basic Auth header with the specified user name and password to the given Request Ignore error handling applyBasicAuth user pass fromJust parseUrl url",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "applyBasicAuth",
        "normalized": "ByteString-\u003eByteString-\u003eRequest a-\u003eRequest a",
        "package": "hails",
        "partial": "Basic Auth",
        "signature": "ByteString-\u003eByteString-\u003eRequest m-\u003eRequest m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:checkStatus",
      "description": {
        "fct-descr": "\u003cp\u003eCheck the status code. Note that this will run after all redirects are\n performed. Default: return a \u003ccode\u003eStatusCodeException\u003c/code\u003e on non-2XX responses.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "Request m -\u003e Status -\u003e ResponseHeaders -\u003e CookieJar -\u003e Maybe SomeException",
        "fct-type": "function",
        "title": "checkStatus"
      },
      "index": {
        "description": "Check the status code Note that this will run after all redirects are performed Default return StatusCodeException on non-2XX responses",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "checkStatus",
        "normalized": "Request a-\u003eStatus-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException",
        "package": "hails",
        "partial": "Status",
        "signature": "Request m-\u003eStatus-\u003eResponseHeaders-\u003eCookieJar-\u003eMaybe SomeException"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:decompress",
      "description": {
        "fct-descr": "\u003cp\u003ePredicate to specify whether gzipped data should be\n decompressed on the fly (see \u003ccode\u003ealwaysDecompress\u003c/code\u003e and\n \u003ccode\u003ebrowserDecompress\u003c/code\u003e). Default: browserDecompress.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "Request m -\u003e ContentType -\u003e Bool",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "Predicate to specify whether gzipped data should be decompressed on the fly see alwaysDecompress and browserDecompress Default browserDecompress",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "decompress",
        "normalized": "Request a-\u003eContentType-\u003eBool",
        "package": "hails",
        "partial": "",
        "signature": "Request m-\u003eContentType-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:host",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "Request m -\u003e ByteString",
        "fct-type": "function",
        "title": "host"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "host",
        "normalized": "Request a-\u003eByteString",
        "package": "hails",
        "partial": "",
        "signature": "Request m-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:method",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP request method, eg GET, POST.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "Request m -\u003e Method",
        "fct-type": "function",
        "title": "method"
      },
      "index": {
        "description": "HTTP request method eg GET POST",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "method",
        "normalized": "Request a-\u003eMethod",
        "package": "hails",
        "partial": "",
        "signature": "Request m-\u003eMethod"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:parseUrl",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a URL into a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis defaults some of the values in \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e, such as setting\n method to GET and \u003ccode\u003e\u003ca\u003erequestHeaders\u003c/a\u003e\u003c/code\u003e to [].\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "String -\u003e DC Request",
        "fct-source": "src/Hails-HttpClient.html#parseUrl",
        "fct-type": "function",
        "title": "parseUrl"
      },
      "index": {
        "description": "Convert URL into Request This defaults some of the values in Request such as setting method to GET and requestHeaders to",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "parseUrl",
        "normalized": "String-\u003eDC Request",
        "package": "hails",
        "partial": "Url",
        "signature": "String-\u003eDC Request"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:path",
      "description": {
        "fct-descr": "\u003cp\u003eEverything from the host to the query string.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "Request m -\u003e ByteString",
        "fct-type": "function",
        "title": "path"
      },
      "index": {
        "description": "Everything from the host to the query string",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "path",
        "normalized": "Request a-\u003eByteString",
        "package": "hails",
        "partial": "",
        "signature": "Request m-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:port",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "Request m -\u003e Int",
        "fct-type": "function",
        "title": "port"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "port",
        "normalized": "Request a-\u003eInt",
        "package": "hails",
        "partial": "",
        "signature": "Request m-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:queryString",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "Request m -\u003e ByteString",
        "fct-type": "function",
        "title": "queryString"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "queryString",
        "normalized": "Request a-\u003eByteString",
        "package": "hails",
        "partial": "String",
        "signature": "Request m-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:rawBody",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003eTrue\u003c/code\u003e, a chunked and/or gzipped body will not be\n decoded. Use with caution.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "Request m -\u003e Bool",
        "fct-type": "function",
        "title": "rawBody"
      },
      "index": {
        "description": "If True chunked and or gzipped body will not be decoded Use with caution",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "rawBody",
        "normalized": "Request a-\u003eBool",
        "package": "hails",
        "partial": "Body",
        "signature": "Request m-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:redirectCount",
      "description": {
        "fct-descr": "\u003cp\u003eHow many redirects to follow when getting a resource. 0 means follow\n no redirects. Default value: 10.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "Request m -\u003e Int",
        "fct-type": "function",
        "title": "redirectCount"
      },
      "index": {
        "description": "How many redirects to follow when getting resource means follow no redirects Default value",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "redirectCount",
        "normalized": "Request a-\u003eInt",
        "package": "hails",
        "partial": "Count",
        "signature": "Request m-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:requestBody",
      "description": {
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "Request m -\u003e RequestBody m",
        "fct-type": "function",
        "title": "requestBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "requestBody",
        "normalized": "Request a-\u003eRequestBody a",
        "package": "hails",
        "partial": "Body",
        "signature": "Request m-\u003eRequestBody m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:requestHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eCustom HTTP request headers\n\u003c/p\u003e\u003cp\u003eAs already stated in the introduction, the Content-Length and Host\n headers are set automatically by this module, and shall not be added to\n requestHeaders.\n\u003c/p\u003e\u003cp\u003eMoreover, the Accept-Encoding header is set implicitly to gzip for\n convenience by default. This behaviour can be overridden if needed, by\n setting the header explicitly to a different value. In order to omit the\n Accept-Header altogether, set it to the empty string \"\". If you need an\n empty Accept-Header (i.e. requesting the identity encoding), set it to a\n non-empty white-space string, e.g. \" \". See RFC 2616 section 14.3 for\n details about the semantics of the Accept-Header field. If you request a\n content-encoding not supported by this module, you will have to decode\n it yourself (see also the \u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e field).\n\u003c/p\u003e\u003cp\u003eNote: Multiple header fields with the same field-name will result in\n multiple header fields being sent and therefore it's the responsibility\n of the client code to ensure that the rules from RFC 2616 section 4.2\n are honoured.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "Request m -\u003e RequestHeaders",
        "fct-type": "function",
        "title": "requestHeaders"
      },
      "index": {
        "description": "Custom HTTP request headers As already stated in the introduction the Content-Length and Host headers are set automatically by this module and shall not be added to requestHeaders Moreover the Accept-Encoding header is set implicitly to gzip for convenience by default This behaviour can be overridden if needed by setting the header explicitly to different value In order to omit the Accept-Header altogether set it to the empty string If you need an empty Accept-Header i.e requesting the identity encoding set it to non-empty white-space string e.g See RFC section for details about the semantics of the Accept-Header field If you request content-encoding not supported by this module you will have to decode it yourself see also the decompress field Note Multiple header fields with the same field-name will result in multiple header fields being sent and therefore it the responsibility of the client code to ensure that the rules from RFC section are honoured",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "requestHeaders",
        "normalized": "Request a-\u003eRequestHeaders",
        "package": "hails",
        "partial": "Headers",
        "signature": "Request m-\u003eRequestHeaders"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:respBody",
      "description": {
        "fct-descr": "\u003cp\u003eResponse body\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "ByteString",
        "fct-source": "src/Hails-HttpServer-Types.html#Response",
        "fct-type": "function",
        "title": "respBody"
      },
      "index": {
        "description": "Response body",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "respBody",
        "normalized": "",
        "package": "hails",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:respHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eResponse headers\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "ResponseHeaders",
        "fct-source": "src/Hails-HttpServer-Types.html#Response",
        "fct-type": "function",
        "title": "respHeaders"
      },
      "index": {
        "description": "Response headers",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "respHeaders",
        "normalized": "",
        "package": "hails",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:respStatus",
      "description": {
        "fct-descr": "\u003cp\u003eResponse status\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "Status",
        "fct-source": "src/Hails-HttpServer-Types.html#Response",
        "fct-type": "function",
        "title": "respStatus"
      },
      "index": {
        "description": "Response status",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "respStatus",
        "normalized": "",
        "package": "hails",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:secure",
      "description": {
        "fct-descr": "\u003cp\u003eWhether to use HTTPS (ie, SSL).\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "Request m -\u003e Bool",
        "fct-type": "function",
        "title": "secure"
      },
      "index": {
        "description": "Whether to use HTTPS ie SSL",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "secure",
        "normalized": "Request a-\u003eBool",
        "package": "hails",
        "partial": "",
        "signature": "Request m-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:simpleGetHttp",
      "description": {
        "fct-descr": "\u003cp\u003eSimple HTTP GET request.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "String -\u003e DC Response",
        "fct-source": "src/Hails-HttpClient.html#simpleGetHttp",
        "fct-type": "function",
        "title": "simpleGetHttp"
      },
      "index": {
        "description": "Simple HTTP GET request",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "simpleGetHttp",
        "normalized": "String-\u003eDC Response",
        "package": "hails",
        "partial": "Get Http",
        "signature": "String-\u003eDC Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:simpleGetHttpP",
      "description": {
        "fct-descr": "\u003cp\u003eSimple HTTP GET request.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "DCPriv-\u003e String-\u003e DC Response",
        "fct-type": "function",
        "title": "simpleGetHttpP"
      },
      "index": {
        "description": "Simple HTTP GET request",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "simpleGetHttpP",
        "normalized": "DCPriv-\u003eString-\u003eDC Response",
        "package": "hails",
        "partial": "Get Http",
        "signature": "DCPriv-\u003eString-\u003eDC Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:simpleHeadHttp",
      "description": {
        "fct-descr": "\u003cp\u003eSimple HTTP HEAD request.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "String -\u003e DC Response",
        "fct-source": "src/Hails-HttpClient.html#simpleHeadHttp",
        "fct-type": "function",
        "title": "simpleHeadHttp"
      },
      "index": {
        "description": "Simple HTTP HEAD request",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "simpleHeadHttp",
        "normalized": "String-\u003eDC Response",
        "package": "hails",
        "partial": "Head Http",
        "signature": "String-\u003eDC Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:simpleHeadHttpP",
      "description": {
        "fct-descr": "\u003cp\u003eSimple HTTP HEAD request.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "DCPriv-\u003e String-\u003e DC Response",
        "fct-type": "function",
        "title": "simpleHeadHttpP"
      },
      "index": {
        "description": "Simple HTTP HEAD request",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "simpleHeadHttpP",
        "normalized": "DCPriv-\u003eString-\u003eDC Response",
        "package": "hails",
        "partial": "Head Http",
        "signature": "DCPriv-\u003eString-\u003eDC Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:simpleHttp",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a simple HTTP(S) request.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "Request-\u003e DC Response",
        "fct-type": "function",
        "title": "simpleHttp"
      },
      "index": {
        "description": "Perform simple HTTP request",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "simpleHttp",
        "normalized": "Request-\u003eDC Response",
        "package": "hails",
        "partial": "Http",
        "signature": "Request-\u003eDC Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpClient.html#v:simpleHttpP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esimpleHttp\u003c/a\u003e\u003c/code\u003e, but uses privileges.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpClient",
        "fct-package": "hails",
        "fct-signature": "Priv p-\u003e Request-\u003e DC Response",
        "fct-type": "function",
        "title": "simpleHttpP"
      },
      "index": {
        "description": "Same as simpleHttp but uses privileges",
        "hierarchy": "Hails HttpClient",
        "module": "Hails.HttpClient",
        "name": "simpleHttpP",
        "normalized": "Priv a-\u003eRequest-\u003eDC Response",
        "package": "hails",
        "partial": "Http",
        "signature": "Priv p-\u003eRequest-\u003eDC Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Auth.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports generic definitions for Wai-authentication pipelines\nin Hails.  \u003ccode\u003e\u003ca\u003erequireLoginMiddleware\u003c/a\u003e\u003c/code\u003e looks for the \u003ccode\u003eX-Hails-Login\u003c/code\u003e\nheader from an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e 's \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e and, if present, responds to\nthe user with an authentication request instead of the \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e\nresponse (e.g., a redirect to a login page or an HTTP response with\nstatus 401). \n\u003c/p\u003e\u003cp\u003eAdditionally, this module exports authentication \u003ccode\u003e\u003ca\u003eMiddleware\u003c/a\u003e\u003c/code\u003es for basic HTTP\nauthentication, \u003ccode\u003e\u003ca\u003edevBasicAuth\u003c/a\u003e\u003c/code\u003e, (useful in development environments)\nand federated (OpenID) authentication, \u003ccode\u003e\u003ca\u003eopenIdAuth\u003c/a\u003e\u003c/code\u003e. In general,\nauthentication \u003ccode\u003e\u003ca\u003eMiddleware\u003c/a\u003e\u003c/code\u003es are expected to set the \u003ccode\u003eX-Hails-User\u003c/code\u003e\nheader on the request if it is from an authenticated user.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.HttpServer.Auth",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-HttpServer-Auth.html",
        "fct-type": "module",
        "title": "Auth"
      },
      "index": {
        "description": "This module exports generic definitions for Wai-authentication pipelines in Hails requireLoginMiddleware looks for the X-Hails-Login header from an Application Response and if present responds to the user with an authentication request instead of the Application response e.g redirect to login page or an HTTP response with status Additionally this module exports authentication Middleware for basic HTTP authentication devBasicAuth useful in development environments and federated OpenID authentication openIdAuth In general authentication Middleware are expected to set the X-Hails-User header on the request if it is from an authenticated user",
        "hierarchy": "Hails HttpServer Auth",
        "module": "Hails.HttpServer.Auth",
        "name": "Auth",
        "normalized": "",
        "package": "hails",
        "partial": "Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Auth.html#v:devBasicAuth",
      "description": {
        "fct-descr": "\u003cp\u003eBasic HTTP authentication middleware for development. Accepts any username\n and password.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Auth",
        "fct-package": "hails",
        "fct-signature": "Middleware",
        "fct-source": "src/Hails-HttpServer-Auth.html#devBasicAuth",
        "fct-type": "function",
        "title": "devBasicAuth"
      },
      "index": {
        "description": "Basic HTTP authentication middleware for development Accepts any username and password",
        "hierarchy": "Hails HttpServer Auth",
        "module": "Hails.HttpServer.Auth",
        "name": "devBasicAuth",
        "normalized": "",
        "package": "hails",
        "partial": "Basic Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Auth.html#v:externalAuth",
      "description": {
        "fct-module": "Hails.HttpServer.Auth",
        "fct-package": "hails",
        "fct-signature": "ByteString -\u003e String -\u003e Middleware",
        "fct-source": "src/Hails-HttpServer-Auth.html#externalAuth",
        "fct-type": "function",
        "title": "externalAuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpServer Auth",
        "module": "Hails.HttpServer.Auth",
        "name": "externalAuth",
        "normalized": "ByteString-\u003eString-\u003eMiddleware",
        "package": "hails",
        "partial": "Auth",
        "signature": "ByteString-\u003eString-\u003eMiddleware"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Auth.html#v:openIdAuth",
      "description": {
        "fct-descr": "\u003cp\u003ePerform OpenID authentication.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Auth",
        "fct-package": "hails",
        "fct-signature": "Text-\u003e Middleware",
        "fct-type": "function",
        "title": "openIdAuth"
      },
      "index": {
        "description": "Perform OpenID authentication",
        "hierarchy": "Hails HttpServer Auth",
        "module": "Hails.HttpServer.Auth",
        "name": "openIdAuth",
        "normalized": "Text-\u003eMiddleware",
        "package": "hails",
        "partial": "Id Auth",
        "signature": "Text-\u003eMiddleware"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Auth.html#v:personaAuth",
      "description": {
        "fct-descr": "\u003cp\u003eAuthentica user with Mozilla's persona.\n If the \u003ccode\u003eX-Hails-Persona-Login\u003c/code\u003e header is set, this intercepts the\n request and verifies the supplied identity assertion, supplied in the\n request body.\n\u003c/p\u003e\u003cp\u003eIf the authentication is successful, set the \u003ccode\u003e_hails_user\u003c/code\u003e and\n \u003ccode\u003e_hails_user_hmac\u003c/code\u003e cookies to identify the user. The former\n contains the user email address, the latter contains the MAC that is\n used for verifications in later requests.\n\u003c/p\u003e\u003cp\u003eIf the \u003ccode\u003eX-Hails-Persona-Logout\u003c/code\u003e header is set, this intercepts the\n request and deletes the aforementioned cookies.\n\u003c/p\u003e\u003cp\u003eIf the app wishes the user to authenticate (by setting \u003ccode\u003eX-Hails-Login\u003c/code\u003e)\n this redirects to \u003ccode\u003eaudience/login\u003c/code\u003e -- where the app can call\n \u003ccode\u003enavigator.request()\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Auth",
        "fct-package": "hails",
        "fct-signature": "ByteString -\u003e Text -\u003e Middleware",
        "fct-source": "src/Hails-HttpServer-Auth.html#personaAuth",
        "fct-type": "function",
        "title": "personaAuth"
      },
      "index": {
        "description": "Authentica user with Mozilla persona If the X-Hails-Persona-Login header is set this intercepts the request and verifies the supplied identity assertion supplied in the request body If the authentication is successful set the hails user and hails user hmac cookies to identify the user The former contains the user email address the latter contains the MAC that is used for verifications in later requests If the X-Hails-Persona-Logout header is set this intercepts the request and deletes the aforementioned cookies If the app wishes the user to authenticate by setting X-Hails-Login this redirects to audience login where the app can call navigator.request",
        "hierarchy": "Hails HttpServer Auth",
        "module": "Hails.HttpServer.Auth",
        "name": "personaAuth",
        "normalized": "ByteString-\u003eText-\u003eMiddleware",
        "package": "hails",
        "partial": "Auth",
        "signature": "ByteString-\u003eText-\u003eMiddleware"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Auth.html#v:requireLoginMiddleware",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes the app and if the app \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e has header\n \u003ccode\u003eX-Hails-Login\u003c/code\u003e and the user is not logged in, respond with an\n authentication response (Basic Auth, redirect, etc.)\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Auth",
        "fct-package": "hails",
        "fct-signature": "ResourceT IO Response -\u003e Middleware",
        "fct-source": "src/Hails-HttpServer-Auth.html#requireLoginMiddleware",
        "fct-type": "function",
        "title": "requireLoginMiddleware"
      },
      "index": {
        "description": "Executes the app and if the app Response has header X-Hails-Login and the user is not logged in respond with an authentication response Basic Auth redirect etc",
        "hierarchy": "Hails HttpServer Auth",
        "module": "Hails.HttpServer.Auth",
        "name": "requireLoginMiddleware",
        "normalized": "ResourceT IO Response-\u003eMiddleware",
        "package": "hails",
        "partial": "Login Middleware",
        "signature": "ResourceT IO Response-\u003eMiddleware"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#",
      "description": {
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-HttpServer-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "Types",
        "normalized": "",
        "package": "hails",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#t:Application",
      "description": {
        "fct-descr": "\u003cp\u003eBase Hails type implemented by untrusted applications.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-HttpServer-Types.html#Application",
        "fct-type": "type",
        "title": "Application"
      },
      "index": {
        "description": "Base Hails type implemented by untrusted applications",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "Application",
        "normalized": "",
        "package": "hails",
        "partial": "Application",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#t:Middleware",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience type for middleware components.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-HttpServer-Types.html#Middleware",
        "fct-type": "type",
        "title": "Middleware"
      },
      "index": {
        "description": "Convenience type for middleware components",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "Middleware",
        "normalized": "",
        "package": "hails",
        "partial": "Middleware",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#t:Request",
      "description": {
        "fct-descr": "\u003cp\u003eA request sent by the end-user.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-HttpServer-Types.html#Request",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "request sent by the end-user",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "Request",
        "normalized": "",
        "package": "hails",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#t:RequestBodyType",
      "description": {
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "RequestBodyType"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "RequestBodyType",
        "normalized": "",
        "package": "hails",
        "partial": "Request Body Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#t:RequestConfig",
      "description": {
        "fct-descr": "\u003cp\u003eThe settings with which the app will run.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-HttpServer-Types.html#RequestConfig",
        "fct-type": "data",
        "title": "RequestConfig"
      },
      "index": {
        "description": "The settings with which the app will run",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "RequestConfig",
        "normalized": "",
        "package": "hails",
        "partial": "Request Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#t:Response",
      "description": {
        "fct-descr": "\u003cp\u003eA response sent by the app.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-HttpServer-Types.html#Response",
        "fct-type": "data",
        "title": "Response"
      },
      "index": {
        "description": "response sent by the app",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "Response",
        "normalized": "",
        "package": "hails",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:Multipart",
      "description": {
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "Multipart ByteString",
        "fct-type": "function",
        "title": "Multipart"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "Multipart",
        "normalized": "",
        "package": "hails",
        "partial": "Multipart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:Request",
      "description": {
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "Request",
        "fct-source": "src/Hails-HttpServer-Types.html#Request",
        "fct-type": "function",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "Request",
        "normalized": "",
        "package": "hails",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:RequestConfig",
      "description": {
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "RequestConfig",
        "fct-source": "src/Hails-HttpServer-Types.html#RequestConfig",
        "fct-type": "function",
        "title": "RequestConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "RequestConfig",
        "normalized": "",
        "package": "hails",
        "partial": "Request Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:Response",
      "description": {
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "Response",
        "fct-source": "src/Hails-HttpServer-Types.html#Response",
        "fct-type": "function",
        "title": "Response"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "Response",
        "normalized": "",
        "package": "hails",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:UrlEncoded",
      "description": {
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "UrlEncoded",
        "fct-type": "function",
        "title": "UrlEncoded"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "UrlEncoded",
        "normalized": "",
        "package": "hails",
        "partial": "Url Encoded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:addRequestHeader",
      "description": {
        "fct-descr": "\u003cp\u003eAdd/replace a \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "Request -\u003e Header -\u003e Request",
        "fct-source": "src/Hails-HttpServer-Types.html#addRequestHeader",
        "fct-type": "function",
        "title": "addRequestHeader"
      },
      "index": {
        "description": "Add replace Header to the Request",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "addRequestHeader",
        "normalized": "Request-\u003eHeader-\u003eRequest",
        "package": "hails",
        "partial": "Request Header",
        "signature": "Request-\u003eHeader-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:addResponseHeader",
      "description": {
        "fct-descr": "\u003cp\u003eAdd/replace a \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "Response -\u003e Header -\u003e Response",
        "fct-source": "src/Hails-HttpServer-Types.html#addResponseHeader",
        "fct-type": "function",
        "title": "addResponseHeader"
      },
      "index": {
        "description": "Add replace Header to the Response",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "addResponseHeader",
        "normalized": "Response-\u003eHeader-\u003eResponse",
        "package": "hails",
        "partial": "Response Header",
        "signature": "Response-\u003eHeader-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:appPrivilege",
      "description": {
        "fct-descr": "\u003cp\u003eA privilege minted for the app.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "DCPriv",
        "fct-source": "src/Hails-HttpServer-Types.html#RequestConfig",
        "fct-type": "function",
        "title": "appPrivilege"
      },
      "index": {
        "description": "privilege minted for the app",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "appPrivilege",
        "normalized": "",
        "package": "hails",
        "partial": "Privilege",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:browserLabel",
      "description": {
        "fct-descr": "\u003cp\u003eThe label of the browser the reponse will be sent to.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "DCLabel",
        "fct-source": "src/Hails-HttpServer-Types.html#RequestConfig",
        "fct-type": "function",
        "title": "browserLabel"
      },
      "index": {
        "description": "The label of the browser the reponse will be sent to",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "browserLabel",
        "normalized": "",
        "package": "hails",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:getRequestBodyType",
      "description": {
        "fct-descr": "\u003cp\u003eGet the request body type (copied from \u003ccode\u003ewai-extra\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "Request -\u003e Maybe RequestBodyType",
        "fct-source": "src/Hails-HttpServer-Types.html#getRequestBodyType",
        "fct-type": "function",
        "title": "getRequestBodyType"
      },
      "index": {
        "description": "Get the request body type copied from wai-extra",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "getRequestBodyType",
        "normalized": "Request-\u003eMaybe RequestBodyType",
        "package": "hails",
        "partial": "Request Body Type",
        "signature": "Request-\u003eMaybe RequestBodyType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:httpVersion",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP version (e.g., 1.1 or 1.0).\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "HttpVersion",
        "fct-source": "src/Hails-HttpServer-Types.html#Request",
        "fct-type": "function",
        "title": "httpVersion"
      },
      "index": {
        "description": "HTTP version e.g or",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "httpVersion",
        "normalized": "",
        "package": "hails",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:isSecure",
      "description": {
        "fct-descr": "\u003cp\u003eWas this request made over an SSL connection?\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "Bool",
        "fct-source": "src/Hails-HttpServer-Types.html#Request",
        "fct-type": "function",
        "title": "isSecure"
      },
      "index": {
        "description": "Was this request made over an SSL connection",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "isSecure",
        "normalized": "",
        "package": "hails",
        "partial": "Secure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:pathInfo",
      "description": {
        "fct-descr": "\u003cp\u003ePath info in individual pieces- the url without a hostname/port\n and without a query string, split on forward slashes,\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "[Text]",
        "fct-source": "src/Hails-HttpServer-Types.html#Request",
        "fct-type": "function",
        "title": "pathInfo"
      },
      "index": {
        "description": "Path info in individual pieces the url without hostname port and without query string split on forward slashes",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "pathInfo",
        "normalized": "[Text]",
        "package": "hails",
        "partial": "Info",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:queryString",
      "description": {
        "fct-descr": "\u003cp\u003eParsed query string information\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "Query",
        "fct-source": "src/Hails-HttpServer-Types.html#Request",
        "fct-type": "function",
        "title": "queryString"
      },
      "index": {
        "description": "Parsed query string information",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "queryString",
        "normalized": "",
        "package": "hails",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:rawPathInfo",
      "description": {
        "fct-descr": "\u003cp\u003eExtra path information sent by the client.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "ByteString",
        "fct-source": "src/Hails-HttpServer-Types.html#Request",
        "fct-type": "function",
        "title": "rawPathInfo"
      },
      "index": {
        "description": "Extra path information sent by the client",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "rawPathInfo",
        "normalized": "",
        "package": "hails",
        "partial": "Path Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:rawQueryString",
      "description": {
        "fct-descr": "\u003cp\u003eIf no query string was specified, this should be empty. This value\n \u003cem\u003ewill\u003c/em\u003e include the leading question mark.\n Do not modify this raw value- modify queryString instead.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "ByteString",
        "fct-source": "src/Hails-HttpServer-Types.html#Request",
        "fct-type": "function",
        "title": "rawQueryString"
      },
      "index": {
        "description": "If no query string was specified this should be empty This value will include the leading question mark Do not modify this raw value modify queryString instead",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "rawQueryString",
        "normalized": "",
        "package": "hails",
        "partial": "Query String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:remoteHost",
      "description": {
        "fct-descr": "\u003cp\u003eThe client's host information.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "SockAddr",
        "fct-source": "src/Hails-HttpServer-Types.html#Request",
        "fct-type": "function",
        "title": "remoteHost"
      },
      "index": {
        "description": "The client host information",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "remoteHost",
        "normalized": "",
        "package": "hails",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:removeRequestHeader",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a header (if it exists) from the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "Request -\u003e HeaderName -\u003e Request",
        "fct-source": "src/Hails-HttpServer-Types.html#removeRequestHeader",
        "fct-type": "function",
        "title": "removeRequestHeader"
      },
      "index": {
        "description": "Remove header if it exists from the Request",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "removeRequestHeader",
        "normalized": "Request-\u003eHeaderName-\u003eRequest",
        "package": "hails",
        "partial": "Request Header",
        "signature": "Request-\u003eHeaderName-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:removeResponseHeader",
      "description": {
        "fct-descr": "\u003cp\u003eRemove a header (if it exists) from the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "Response -\u003e HeaderName -\u003e Response",
        "fct-source": "src/Hails-HttpServer-Types.html#removeResponseHeader",
        "fct-type": "function",
        "title": "removeResponseHeader"
      },
      "index": {
        "description": "Remove header if it exists from the Response",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "removeResponseHeader",
        "normalized": "Response-\u003eHeaderName-\u003eResponse",
        "package": "hails",
        "partial": "Response Header",
        "signature": "Response-\u003eHeaderName-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:requestBody",
      "description": {
        "fct-descr": "\u003cp\u003eLazy ByteString containing the request body.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "ByteString",
        "fct-source": "src/Hails-HttpServer-Types.html#Request",
        "fct-type": "function",
        "title": "requestBody"
      },
      "index": {
        "description": "Lazy ByteString containing the request body",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "requestBody",
        "normalized": "",
        "package": "hails",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:requestHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eThe request headers.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "RequestHeaders",
        "fct-source": "src/Hails-HttpServer-Types.html#Request",
        "fct-type": "function",
        "title": "requestHeaders"
      },
      "index": {
        "description": "The request headers",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "requestHeaders",
        "normalized": "",
        "package": "hails",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:requestLabel",
      "description": {
        "fct-descr": "\u003cp\u003eThe label of the incoming request (with the logged in user's integrity).\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "DCLabel",
        "fct-source": "src/Hails-HttpServer-Types.html#RequestConfig",
        "fct-type": "function",
        "title": "requestLabel"
      },
      "index": {
        "description": "The label of the incoming request with the logged in user integrity",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "requestLabel",
        "normalized": "",
        "package": "hails",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:requestMethod",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP Request (e.g., \u003ccode\u003eGET\u003c/code\u003e, \u003ccode\u003ePOST\u003c/code\u003e, etc.).\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "Method",
        "fct-source": "src/Hails-HttpServer-Types.html#Request",
        "fct-type": "function",
        "title": "requestMethod"
      },
      "index": {
        "description": "HTTP Request e.g GET POST etc",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "requestMethod",
        "normalized": "",
        "package": "hails",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:requestTime",
      "description": {
        "fct-descr": "\u003cp\u003eTime request was received.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "UTCTime",
        "fct-source": "src/Hails-HttpServer-Types.html#Request",
        "fct-type": "function",
        "title": "requestTime"
      },
      "index": {
        "description": "Time request was received",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "requestTime",
        "normalized": "",
        "package": "hails",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:respBody",
      "description": {
        "fct-descr": "\u003cp\u003eResponse body\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "ByteString",
        "fct-source": "src/Hails-HttpServer-Types.html#Response",
        "fct-type": "function",
        "title": "respBody"
      },
      "index": {
        "description": "Response body",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "respBody",
        "normalized": "",
        "package": "hails",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:respHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eResponse headers\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "ResponseHeaders",
        "fct-source": "src/Hails-HttpServer-Types.html#Response",
        "fct-type": "function",
        "title": "respHeaders"
      },
      "index": {
        "description": "Response headers",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "respHeaders",
        "normalized": "",
        "package": "hails",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:respStatus",
      "description": {
        "fct-descr": "\u003cp\u003eResponse status\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "Status",
        "fct-source": "src/Hails-HttpServer-Types.html#Response",
        "fct-type": "function",
        "title": "respStatus"
      },
      "index": {
        "description": "Response status",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "respStatus",
        "normalized": "",
        "package": "hails",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:serverName",
      "description": {
        "fct-descr": "\u003cp\u003eGenerally the host requested by the user via the Host request header.\n Backends are free to provide alternative values as necessary. This value\n should not be used to construct URLs.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "ByteString",
        "fct-source": "src/Hails-HttpServer-Types.html#Request",
        "fct-type": "function",
        "title": "serverName"
      },
      "index": {
        "description": "Generally the host requested by the user via the Host request header Backends are free to provide alternative values as necessary This value should not be used to construct URLs",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "serverName",
        "normalized": "",
        "package": "hails",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer-Types.html#v:serverPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe listening port that the server received this request on. It is\n possible for a server to listen on a non-numeric port (i.e., Unix named\n socket), in which case this value will be arbitrary. Like \u003ccode\u003e\u003ca\u003eserverName\u003c/a\u003e\u003c/code\u003e,\n this value should not be used in URL construction.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer.Types",
        "fct-package": "hails",
        "fct-signature": "Int",
        "fct-source": "src/Hails-HttpServer-Types.html#Request",
        "fct-type": "function",
        "title": "serverPort"
      },
      "index": {
        "description": "The listening port that the server received this request on It is possible for server to listen on non-numeric port i.e Unix named socket in which case this value will be arbitrary Like serverName this value should not be used in URL construction",
        "hierarchy": "Hails HttpServer Types",
        "module": "Hails.HttpServer.Types",
        "name": "serverPort",
        "normalized": "",
        "package": "hails",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the core of the Hails HTTP server. Specifically it\ndefines basic types, such as HTTP \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e, used by\nthe Hails web server and untrusted Hails \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003es. \n\u003c/p\u003e\u003cp\u003eAt a high level, a Hails \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e, is a function from \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\nto \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eDC\u003c/a\u003e\u003c/code\u003e monad. Every application response is\nsanitized and sanity checked with the \u003ccode\u003esecureApplication\u003c/code\u003e\n\u003ccode\u003e\u003ca\u003eMiddleware\u003c/a\u003e\u003c/code\u003e. Moreover, every \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e is sanitized with \u003ccode\u003esanitizeReq\u003c/code\u003e\nbefore handed over to authenticators.\n\u003c/p\u003e\u003cp\u003eHails uses Wai, and as such we provide a function for converting\nHails \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003es to Wai \u003ccode\u003e\u003ca\u003eApplicatoin\u003c/a\u003e\u003c/code\u003es: \u003ccode\u003e\u003ca\u003eexecHailsApplication\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.HttpServer",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-HttpServer.html",
        "fct-type": "module",
        "title": "HttpServer"
      },
      "index": {
        "description": "This module exports the core of the Hails HTTP server Specifically it defines basic types such as HTTP Request and Response used by the Hails web server and untrusted Hails Application At high level Hails Application is function from Request to Response in the DC monad Every application response is sanitized and sanity checked with the secureApplication Middleware Moreover every Request is sanitized with sanitizeReq before handed over to authenticators Hails uses Wai and as such we provide function for converting Hails Application to Wai Applicatoin execHailsApplication",
        "hierarchy": "Hails HttpServer",
        "module": "Hails.HttpServer",
        "name": "HttpServer",
        "normalized": "",
        "package": "hails",
        "partial": "Http Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer.html#v:browserLabelGuard",
      "description": {
        "fct-descr": "\u003cp\u003eHails \u003ccode\u003e\u003ca\u003eMiddleware\u003c/a\u003e\u003c/code\u003e that ensures the \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e from the\n application is readable by the client's browser (as determined by the\n result label of the app computation and the label of the browser). If\n the response is not readable by the browser, the middleware sends a\n 403 (unauthorized) response instead.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer",
        "fct-package": "hails",
        "fct-signature": "Middleware",
        "fct-source": "src/Hails-HttpServer.html#browserLabelGuard",
        "fct-type": "function",
        "title": "browserLabelGuard"
      },
      "index": {
        "description": "Hails Middleware that ensures the Response from the application is readable by the client browser as determined by the result label of the app computation and the label of the browser If the response is not readable by the browser the middleware sends unauthorized response instead",
        "hierarchy": "Hails HttpServer",
        "module": "Hails.HttpServer",
        "name": "browserLabelGuard",
        "normalized": "",
        "package": "hails",
        "partial": "Label Guard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer.html#v:catchAllExceptions",
      "description": {
        "fct-descr": "\u003cp\u003eCatch all exceptions thrown by middleware and return 500.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer",
        "fct-package": "hails",
        "fct-signature": "Middleware",
        "fct-source": "src/Hails-HttpServer.html#catchAllExceptions",
        "fct-type": "function",
        "title": "catchAllExceptions"
      },
      "index": {
        "description": "Catch all exceptions thrown by middleware and return",
        "hierarchy": "Hails HttpServer",
        "module": "Hails.HttpServer",
        "name": "catchAllExceptions",
        "normalized": "",
        "package": "hails",
        "partial": "All Exceptions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer.html#v:execHailsApplication",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an application, safely filtering unsafe request headers,\n overriding method posts,  catching all exceptions, and sanitizing\n responses.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer",
        "fct-package": "hails",
        "fct-signature": "Middleware -\u003e Application -\u003e Application",
        "fct-source": "src/Hails-HttpServer.html#execHailsApplication",
        "fct-type": "function",
        "title": "execHailsApplication"
      },
      "index": {
        "description": "Execute an application safely filtering unsafe request headers overriding method posts catching all exceptions and sanitizing responses",
        "hierarchy": "Hails HttpServer",
        "module": "Hails.HttpServer",
        "name": "execHailsApplication",
        "normalized": "Middleware-\u003eApplication-\u003eApplication",
        "package": "hails",
        "partial": "Hails Application",
        "signature": "Middleware-\u003eApplication-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer.html#v:guardSensitiveResp",
      "description": {
        "fct-descr": "\u003cp\u003eAdds the header \u003ccode\u003eContent-Security-Policy\u003c/code\u003e to the response, if the\n label of the computation does not flow to the public label,\n \u003ccode\u003e\u003ca\u003edcPublic\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003edefault-src\u003c/code\u003e directive is set to the secrecy\n component of the response label (if it is a disjunction\n of principals). Currently, \u003ccode\u003e\u003ccode\u003eself\u003c/code\u003e\u003c/code\u003e is always added to the\n whitelist. An example may be:\n\u003c/p\u003e\u003cpre\u003e Content-Security-Policy: default-src 'self' http://google.com:80 https://a.lvh.me:3000;\n\u003c/pre\u003e",
        "fct-module": "Hails.HttpServer",
        "fct-package": "hails",
        "fct-signature": "Middleware",
        "fct-source": "src/Hails-HttpServer.html#guardSensitiveResp",
        "fct-type": "function",
        "title": "guardSensitiveResp"
      },
      "index": {
        "description": "Adds the header Content-Security-Policy to the response if the label of the computation does not flow to the public label dcPublic The default-src directive is set to the secrecy component of the response label if it is disjunction of principals Currently self is always added to the whitelist An example may be Content-Security-Policy default-src self http google.com https a.lvh.me",
        "hierarchy": "Hails HttpServer",
        "module": "Hails.HttpServer",
        "name": "guardSensitiveResp",
        "normalized": "",
        "package": "hails",
        "partial": "Sensitive Resp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer.html#v:sanitizeReqMiddleware",
      "description": {
        "fct-descr": "\u003cp\u003eRemove any unsafe headers, in this case only \u003ccode\u003eX-Hails-User\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer",
        "fct-package": "hails",
        "fct-signature": "Middleware",
        "fct-source": "src/Hails-HttpServer.html#sanitizeReqMiddleware",
        "fct-type": "function",
        "title": "sanitizeReqMiddleware"
      },
      "index": {
        "description": "Remove any unsafe headers in this case only X-Hails-User",
        "hierarchy": "Hails HttpServer",
        "module": "Hails.HttpServer",
        "name": "sanitizeReqMiddleware",
        "normalized": "",
        "package": "hails",
        "partial": "Req Middleware",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-HttpServer.html#v:sanitizeResp",
      "description": {
        "fct-descr": "\u003cp\u003eRemove anything from the response that could cause inadvertant\n declasification. Currently this only removes the \u003ccode\u003eSet-Cookie\u003c/code\u003e\n header.\n\u003c/p\u003e",
        "fct-module": "Hails.HttpServer",
        "fct-package": "hails",
        "fct-signature": "Middleware",
        "fct-source": "src/Hails-HttpServer.html#sanitizeResp",
        "fct-type": "function",
        "title": "sanitizeResp"
      },
      "index": {
        "description": "Remove anything from the response that could cause inadvertant declasification Currently this only removes the Set-Cookie header",
        "hierarchy": "Hails HttpServer",
        "module": "Hails.HttpServer",
        "name": "sanitizeResp",
        "normalized": "",
        "package": "hails",
        "partial": "Resp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a domain specific language for specifying policy\nmodule policies. It is recommended that \u003cem\u003eall\u003c/em\u003e policy modules use this\ncode when specifying security policies as it simplifies auditing and\nbuilding trust in the authors. Policy modules are described in\n\u003ca\u003eHails.PolicyModule\u003c/a\u003e, which is a pre-required reading to this\nmodule's documentation.\n\u003c/p\u003e\u003cp\u003eConsider creating a policy module where anybody can read and write\nfreely to the databse. In this databsae we wish to create a simple\nuser model collecting user names and passwords. This collection\n\"users\" is also readable and writable by anybody. However, the\npasswords must always belong to the named user. Specifically, only the\nuser (or policy module) may read and modify the password. This policy\nis implemented below:\n\u003c/p\u003e\u003cpre\u003e\ndata UsersPolicyModule = UsersPolicyModuleTCB DCPriv\n  deriving Typeable\n\ninstance PolicyModule UsersPolicyModule where\n  \u003ccode\u003e\u003ca\u003einitPolicyModule\u003c/a\u003e\u003c/code\u003e priv = do\n    \u003ccode\u003e\u003ca\u003esetPolicy\u003c/a\u003e\u003c/code\u003e priv $ do\n      \u003ccode\u003e\u003ca\u003edatabase\u003c/a\u003e\u003c/code\u003e $ do\n        \u003ccode\u003e\u003ca\u003ereaders\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunrestricted\u003c/a\u003e\u003c/code\u003e\n        \u003ccode\u003e\u003ca\u003ewriters\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunrestricted\u003c/a\u003e\u003c/code\u003e\n        \u003ccode\u003e\u003ca\u003eadmins\u003c/a\u003e\u003c/code\u003e  \u003ccode\u003e\u003ca\u003e==\u003e\u003c/a\u003e\u003c/code\u003e this\n      \u003ccode\u003e\u003ca\u003ecollection\u003c/a\u003e\u003c/code\u003e \"users\" $ do\n        \u003ccode\u003e\u003ca\u003eaccess\u003c/a\u003e\u003c/code\u003e $ do\n          \u003ccode\u003e\u003ca\u003ereaders\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunrestricted\u003c/a\u003e\u003c/code\u003e\n          \u003ccode\u003e\u003ca\u003ewriters\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunrestricted\u003c/a\u003e\u003c/code\u003e\n        \u003ccode\u003e\u003ca\u003eclearance\u003c/a\u003e\u003c/code\u003e $ do\n          \u003ccode\u003e\u003ca\u003esecrecy\u003c/a\u003e\u003c/code\u003e   \u003ccode\u003e\u003ca\u003e==\u003e\u003c/a\u003e\u003c/code\u003e this\n          \u003ccode\u003e\u003ca\u003eintegrity\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunrestricted\u003c/a\u003e\u003c/code\u003e\n        \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e $ doc -\u003e do\n          \u003ccode\u003e\u003ca\u003ereaders\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunrestricted\u003c/a\u003e\u003c/code\u003e\n          \u003ccode\u003e\u003ca\u003ewriters\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunrestricted\u003c/a\u003e\u003c/code\u003e\n        \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e \"name\"     $ \u003ccode\u003e\u003ca\u003esearchable\u003c/a\u003e\u003c/code\u003e\n        \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e \"password\" $ \u003ccode\u003e\u003ca\u003elabeled\u003c/a\u003e\u003c/code\u003e $ doc -\u003e do\n          let user = \"name\" `\u003ccode\u003e\u003ca\u003eat\u003c/a\u003e\u003c/code\u003e` doc :: String\n          \u003ccode\u003e\u003ca\u003ereaders\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==\u003e\u003c/a\u003e\u003c/code\u003e this \\/ user\n          \u003ccode\u003e\u003ca\u003ewriters\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==\u003e\u003c/a\u003e\u003c/code\u003e this \\/ user\n    return $ UsersPolicyModuleTCB priv\n      where this = \u003ccode\u003e\u003ca\u003eprivDesc\u003c/a\u003e\u003c/code\u003e priv\n\u003c/pre\u003e\u003cp\u003eNotice that the database is public, as described above, but only this\npolicy module may modify the internal collection names (as indicated\nby the \u003ccode\u003eadmin\u003c/code\u003e keyword). Similarly the collection is publicly\naccessible (as set with the \u003ccode\u003e\u003ca\u003eaccess\u003c/a\u003e\u003c/code\u003e keyword), and may contain data at\nmost as sensitve as the policy module can read (i.e., the\n\u003ccode\u003e\u003ca\u003eclearance\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eDocuments retrieved from the \"users\" \u003ccode\u003e\u003ca\u003ecollection\u003c/a\u003e\u003c/code\u003e are public (as\nindicated by the \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e data-dependent policy that sets the\n\u003ccode\u003e\u003ca\u003ereaders\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewriters\u003c/a\u003e\u003c/code\u003e). The \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e \"name\" is \u003ccode\u003e\u003ca\u003esearchable\u003c/a\u003e\u003c/code\u003e (i.e.,\nit is a \u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003e) and thus can be used in query predicates.\nConversely, the \"password\" \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003elabeled\u003c/a\u003e\u003c/code\u003e using a\ndata-dependent policy. Specifically the field is labed using the\n\"name\" value contained in the document (i.e., the user's name):\nhence only the user having the right privilege or the policy module\n(\u003ccode\u003ethis\u003c/code\u003e) may read and create such data.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-PolicyModule-DSL.html",
        "fct-type": "module",
        "title": "DSL"
      },
      "index": {
        "description": "This module exports domain specific language for specifying policy module policies It is recommended that all policy modules use this code when specifying security policies as it simplifies auditing and building trust in the authors Policy modules are described in Hails.PolicyModule which is pre-required reading to this module documentation Consider creating policy module where anybody can read and write freely to the databse In this databsae we wish to create simple user model collecting user names and passwords This collection users is also readable and writable by anybody However the passwords must always belong to the named user Specifically only the user or policy module may read and modify the password This policy is implemented below data UsersPolicyModule UsersPolicyModuleTCB DCPriv deriving Typeable instance PolicyModule UsersPolicyModule where initPolicyModule priv do setPolicy priv do database do readers unrestricted writers unrestricted admins this collection users do access do readers unrestricted writers unrestricted clearance do secrecy this integrity unrestricted document doc do readers unrestricted writers unrestricted field name searchable field password labeled doc do let user name at doc String readers this user writers this user return UsersPolicyModuleTCB priv where this privDesc priv Notice that the database is public as described above but only this policy module may modify the internal collection names as indicated by the admin keyword Similarly the collection is publicly accessible as set with the access keyword and may contain data at most as sensitve as the policy module can read i.e the clearance Documents retrieved from the users collection are public as indicated by the document data-dependent policy that sets the readers and writers The field name is searchable i.e it is SearchableField and thus can be used in query predicates Conversely the password field is labeled using data-dependent policy Specifically the field is labed using the name value contained in the document i.e the user name hence only the user having the right privilege or the policy module this may read and create such data",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "DSL",
        "normalized": "",
        "package": "hails",
        "partial": "DSL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:-60--61--61-",
      "description": {
        "fct-descr": "\u003cp\u003eInverse implication. Purely provided for readability. The\n direction is not relevant to the internal representation.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "r -\u003e c -\u003e m ()",
        "fct-source": "src/Hails-PolicyModule-DSL.html#%3C%3D%3D",
        "fct-type": "function",
        "title": "(\u003c==)"
      },
      "index": {
        "description": "Inverse implication Purely provided for readability The direction is not relevant to the internal representation",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "(\u003c==) \u003c==",
        "normalized": "a-\u003eb-\u003ec()",
        "package": "hails",
        "partial": "",
        "signature": "r-\u003ec-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:-61--61--62-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003er ==\u003e c\u003c/code\u003e effectively states that role \u003ccode\u003er\u003c/code\u003e (i.e., \u003ccode\u003e\u003ca\u003ereaders\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ewriters\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eadmins\u003c/a\u003e\u003c/code\u003e must imply label component \u003ccode\u003ec\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "r -\u003e c -\u003e m ()",
        "fct-source": "src/Hails-PolicyModule-DSL.html#%3D%3D%3E",
        "fct-type": "function",
        "title": "(==\u003e)"
      },
      "index": {
        "description": "effectively states that role i.e readers writers admins must imply label component",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "(==\u003e) ==\u003e",
        "normalized": "a-\u003eb-\u003ec()",
        "package": "hails",
        "partial": "",
        "signature": "r-\u003ec-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:access",
      "description": {
        "fct-descr": "\u003cp\u003eSet the collection access label. For example,\n\u003c/p\u003e\u003cpre\u003e collection \"w00t\" $ do\n   ...\n   access $ do\n     readers ==\u003e \"Alice\" \\/ \"Bob\"\n     writers ==\u003e \"Alice\"\n\u003c/pre\u003e\u003cp\u003estates that Alice and Bob can read documents from the collection,\n but only Alice can insert new documents or modify existing ones.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "ColAccExpM () -\u003e ColExpM ()",
        "fct-source": "src/Hails-PolicyModule-DSL.html#access",
        "fct-type": "function",
        "title": "access"
      },
      "index": {
        "description": "Set the collection access label For example collection w00t do access do readers Alice Bob writers Alice states that Alice and Bob can read documents from the collection but only Alice can insert new documents or modify existing ones",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "access",
        "normalized": "ColAccExpM()-\u003eColExpM()",
        "package": "hails",
        "partial": "",
        "signature": "ColAccExpM()-\u003eColExpM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:admins",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003eAdmins\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "Admins",
        "fct-source": "src/Hails-PolicyModule-DSL.html#admins",
        "fct-type": "function",
        "title": "admins"
      },
      "index": {
        "description": "Synonym for Admins",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "admins",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:clearance",
      "description": {
        "fct-descr": "\u003cp\u003eSet the collection clearance. For example,\n\u003c/p\u003e\u003cpre\u003e collection \"w00t\" $ do\n   ...\n   clearance $ do\n     secrecy ==\u003e \"Alice\" \\/ \"Bob\"\n     integrity ==\u003e \"Alice\"\n\u003c/pre\u003e\u003cp\u003estates that all data in the collection is always readable by Alice\n and Bob, and no more trustworthy than data Alice can create.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "ColClrExpM () -\u003e ColExpM ()",
        "fct-source": "src/Hails-PolicyModule-DSL.html#clearance",
        "fct-type": "function",
        "title": "clearance"
      },
      "index": {
        "description": "Set the collection clearance For example collection w00t do clearance do secrecy Alice Bob integrity Alice states that all data in the collection is always readable by Alice and Bob and no more trustworthy than data Alice can create",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "clearance",
        "normalized": "ColClrExpM()-\u003eColExpM()",
        "package": "hails",
        "partial": "",
        "signature": "ColClrExpM()-\u003eColExpM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:collection",
      "description": {
        "fct-descr": "\u003cp\u003eSet the collection labels and policies. Each \u003ccode\u003ecollection\u003c/code\u003e, must \n at least specify who can \u003ccode\u003e\u003ca\u003eaccess\u003c/a\u003e\u003c/code\u003e the collection, what the\n \u003ccode\u003e\u003ca\u003eclearance\u003c/a\u003e\u003c/code\u003e of the data in the collection is, and how \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003es\n are labeled. Below is an example that also labels the \u003ccode\u003epassword\u003c/code\u003e\n field and declares \u003ccode\u003ename\u003c/code\u003e a searchable key.\n\u003c/p\u003e\u003cpre\u003e collection \"w00t\" $ do\n   access $ do\n     readers ==\u003e \"Alice\" \\/ \"Bob\"\n     writers ==\u003e \"Alice\"          \n   clearance $ do\n     secrecy   ==\u003e \"Users\"\n     integrity ==\u003e \"Alice\"          \n   document $ \\doc -\u003e  do\n     readers ==\u003e 'unrestricted'\n     writers ==\u003e \"Alice\" \\/ ((\"name\" `at`doc) :: String)\n   field \"name\" searchable\n   field \"password\" $ labeled $ \\doc -\u003e do\n     readers ==\u003e ((\"name\" `at`doc) :: String)\n     writers ==\u003e ((\"name\" `at`doc) :: String)\n\u003c/pre\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "CollectionName -\u003e ColExpM () -\u003e PolicyExpM ()",
        "fct-source": "src/Hails-PolicyModule-DSL.html#collection",
        "fct-type": "function",
        "title": "collection"
      },
      "index": {
        "description": "Set the collection labels and policies Each collection must at least specify who can access the collection what the clearance of the data in the collection is and how document are labeled Below is an example that also labels the password field and declares name searchable key collection w00t do access do readers Alice Bob writers Alice clearance do secrecy Users integrity Alice document doc do readers unrestricted writers Alice name at doc String field name searchable field password labeled doc do readers name at doc String writers name at doc String",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "collection",
        "normalized": "CollectionName-\u003eColExpM()-\u003ePolicyExpM()",
        "package": "hails",
        "partial": "",
        "signature": "CollectionName-\u003eColExpM()-\u003ePolicyExpM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:database",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a database lebeling policy The policy must set the label\n of the database, i.e., the \u003ccode\u003e\u003ca\u003ereaders\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewriters\u003c/a\u003e\u003c/code\u003e. Additionally it\n must state the \u003ccode\u003e\u003ca\u003eadmins\u003c/a\u003e\u003c/code\u003e that can modify the underlying collection-set \n\u003c/p\u003e\u003cp\u003eFor example, the policy\n\u003c/p\u003e\u003cpre\u003e database $ do\n   readers ==\u003e \"Alice\" \\/ \"Bob\" \\/ \"Clarice\"\n   writers ==\u003e \"Alice\" \\/ \"Bob\"\n   admins  ==\u003e \"Alice\"\n\u003c/pre\u003e\u003cp\u003estates that Alice, Bob, and Clarice can read from the database,\n including the collections in the database (the \u003ccode\u003e\u003ca\u003ereaders\u003c/a\u003e\u003c/code\u003e is used as\n the secrecy component in the collection-set label). Only Alice or\n Bob may, however, write to the database. Finally, only Alice can\n add additional collections in the policy module code.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "DBExpM () -\u003e PolicyExpM ()",
        "fct-source": "src/Hails-PolicyModule-DSL.html#database",
        "fct-type": "function",
        "title": "database"
      },
      "index": {
        "description": "Create database lebeling policy The policy must set the label of the database i.e the readers and writers Additionally it must state the admins that can modify the underlying collection-set For example the policy database do readers Alice Bob Clarice writers Alice Bob admins Alice states that Alice Bob and Clarice can read from the database including the collections in the database the readers is used as the secrecy component in the collection-set label Only Alice or Bob may however write to the database Finally only Alice can add additional collections in the policy module code",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "database",
        "normalized": "DBExpM()-\u003ePolicyExpM()",
        "package": "hails",
        "partial": "",
        "signature": "DBExpM()-\u003ePolicyExpM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:document",
      "description": {
        "fct-descr": "\u003cp\u003eSet data-dependent document label. For example,\n\u003c/p\u003e\u003cpre\u003e collection \"w00t\" $ do\n   ...\n   document $ \\doc -\u003e  do\n     readers ==\u003e 'unrestricted'\n     writers ==\u003e \"Alice\" \\/ ((\"name\" `at`doc) :: String)\n\u003c/pre\u003e\u003cp\u003estates that every document in the collection is readable by anybody,\n and only Alice or the principal named by the \u003ccode\u003ename\u003c/code\u003e value in the\n document can modify or insert such data.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "(HsonDocument -\u003e ColDocExpM ()) -\u003e ColExpM ()",
        "fct-source": "src/Hails-PolicyModule-DSL.html#document",
        "fct-type": "function",
        "title": "document"
      },
      "index": {
        "description": "Set data-dependent document label For example collection w00t do document doc do readers unrestricted writers Alice name at doc String states that every document in the collection is readable by anybody and only Alice or the principal named by the name value in the document can modify or insert such data",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "document",
        "normalized": "(HsonDocument-\u003eColDocExpM())-\u003eColExpM()",
        "package": "hails",
        "partial": "",
        "signature": "(HsonDocument-\u003eColDocExpM())-\u003eColExpM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:field",
      "description": {
        "fct-descr": "\u003cp\u003eSet field policy. A field can be declared to be a \u003ccode\u003e\u003ca\u003esearchable\u003c/a\u003e\u003c/code\u003e\n key or a \u003ccode\u003e\u003ca\u003elabeled\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e\u003cp\u003eDeclaring a field to be a \u003ccode\u003e\u003ca\u003esearchable\u003c/a\u003e\u003c/code\u003e key is straight forward:\n\u003c/p\u003e\u003cpre\u003e collection \"w00t\" $ do\n   ...\n   field \"name\" searchable\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elabeled\u003c/a\u003e\u003c/code\u003e field declaration is similar to the \u003ccode\u003e\u003ca\u003edocument\u003c/a\u003e\u003c/code\u003e policy, but\n sets the label of a specific field. For example\n\u003c/p\u003e\u003cpre\u003e collection \"w00t\" $ do\n   ...\n   field \"password\" $ labeled $ \\doc -\u003e do\n     let user = \"name\" `at` doc :: String\n     readers ==\u003e user\n     writers ==\u003e user\n\u003c/pre\u003e\u003cp\u003estates that every \u003ccode\u003epassword\u003c/code\u003e field in the is readable and writable\n only by or the principal named by the \u003ccode\u003ename\u003c/code\u003e value of the document can\n modify or insert such data.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "FieldName -\u003e ColFieldExpM () -\u003e ColExpM ()",
        "fct-source": "src/Hails-PolicyModule-DSL.html#field",
        "fct-type": "function",
        "title": "field"
      },
      "index": {
        "description": "Set field policy field can be declared to be searchable key or labeled value Declaring field to be searchable key is straight forward collection w00t do field name searchable The labeled field declaration is similar to the document policy but sets the label of specific field For example collection w00t do field password labeled doc do let user name at doc String readers user writers user states that every password field in the is readable and writable only by or the principal named by the name value of the document can modify or insert such data",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "field",
        "normalized": "FieldName-\u003eColFieldExpM()-\u003eColExpM()",
        "package": "hails",
        "partial": "",
        "signature": "FieldName-\u003eColFieldExpM()-\u003eColExpM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:integrity",
      "description": {
        "fct-descr": "\u003cp\u003eSet integrity component of the label, i.e., the principals that can\n write.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "Writers",
        "fct-source": "src/Hails-PolicyModule-DSL.html#integrity",
        "fct-type": "function",
        "title": "integrity"
      },
      "index": {
        "description": "Set integrity component of the label i.e the principals that can write",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "integrity",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:key",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003esearchable\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "ColFieldExpM ()",
        "fct-source": "src/Hails-PolicyModule-DSL.html#key",
        "fct-type": "function",
        "title": "key"
      },
      "index": {
        "description": "Synonym for searchable",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "key",
        "normalized": "ColFieldExpM()",
        "package": "hails",
        "partial": "",
        "signature": "ColFieldExpM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:labeled",
      "description": {
        "fct-descr": "\u003cp\u003eSet data-dependent document label\n\u003c/p\u003e\u003cpre\u003e   field \"password\" $ labeled $ \\doc -\u003e do\n     readers ==\u003e ((\"name\" `at`doc) :: String)\n     writers ==\u003e ((\"name\" `at`doc) :: String)\n\u003c/pre\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "(HsonDocument -\u003e ColLabFieldExpM ()) -\u003e ColFieldExpM ()",
        "fct-source": "src/Hails-PolicyModule-DSL.html#labeled",
        "fct-type": "function",
        "title": "labeled"
      },
      "index": {
        "description": "Set data-dependent document label field password labeled doc do readers name at doc String writers name at doc String",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "labeled",
        "normalized": "(HsonDocument-\u003eColLabFieldExpM())-\u003eColFieldExpM()",
        "package": "hails",
        "partial": "",
        "signature": "(HsonDocument-\u003eColLabFieldExpM())-\u003eColFieldExpM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:readers",
      "description": {
        "fct-descr": "\u003cp\u003eSet secrecy component of the label, i.e., the principals that can\n read.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "Readers",
        "fct-source": "src/Hails-PolicyModule-DSL.html#readers",
        "fct-type": "function",
        "title": "readers"
      },
      "index": {
        "description": "Set secrecy component of the label i.e the principals that can read",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "readers",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:searchable",
      "description": {
        "fct-descr": "\u003cp\u003eSet the underlying field to be a searchable key.\n\u003c/p\u003e\u003cpre\u003e   field \"name\" searchable\n\u003c/pre\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "ColFieldExpM ()",
        "fct-source": "src/Hails-PolicyModule-DSL.html#searchable",
        "fct-type": "function",
        "title": "searchable"
      },
      "index": {
        "description": "Set the underlying field to be searchable key field name searchable",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "searchable",
        "normalized": "ColFieldExpM()",
        "package": "hails",
        "partial": "",
        "signature": "ColFieldExpM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:secrecy",
      "description": {
        "fct-descr": "\u003cp\u003eSet secrecy component of the label, i.e., the principals that can\n read.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "Readers",
        "fct-source": "src/Hails-PolicyModule-DSL.html#secrecy",
        "fct-type": "function",
        "title": "secrecy"
      },
      "index": {
        "description": "Set secrecy component of the label i.e the principals that can read",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "secrecy",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:setPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eHigh level function used to set the policy in a \u003ccode\u003e\u003ca\u003ePolicyModule\u003c/a\u003e\u003c/code\u003e.\n This function takes the policy module's privileges and a policy\n expression, and produces a \u003ccode\u003e\u003ca\u003ePMAction\u003c/a\u003e\u003c/code\u003e that sets the policy.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e PolicyExpM () -\u003e PMAction ()",
        "fct-source": "src/Hails-PolicyModule-DSL.html#setPolicy",
        "fct-type": "function",
        "title": "setPolicy"
      },
      "index": {
        "description": "High level function used to set the policy in PolicyModule This function takes the policy module privileges and policy expression and produces PMAction that sets the policy",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "setPolicy",
        "normalized": "DCPriv-\u003ePolicyExpM()-\u003ePMAction()",
        "package": "hails",
        "partial": "Policy",
        "signature": "DCPriv-\u003ePolicyExpM()-\u003ePMAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:unrestricted",
      "description": {
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "CNF",
        "fct-source": "src/Hails-PolicyModule-DSL.html#unrestricted",
        "fct-type": "function",
        "title": "unrestricted"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "unrestricted",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-DSL.html#v:writers",
      "description": {
        "fct-descr": "\u003cp\u003eSet integrity component of the label, i.e., the principals that can\n write.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.DSL",
        "fct-package": "hails",
        "fct-signature": "Writers",
        "fct-source": "src/Hails-PolicyModule-DSL.html#writers",
        "fct-type": "function",
        "title": "writers"
      },
      "index": {
        "description": "Set integrity component of the label i.e the principals that can write",
        "hierarchy": "Hails PolicyModule DSL",
        "module": "Hails.PolicyModule.DSL",
        "name": "writers",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-Groups.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a class \u003ccode\u003e\u003ca\u003eGroups\u003c/a\u003e\u003c/code\u003e that policy modules\nmust define an instance of to define groups, or mappings\nbetween a group \u003ccode\u003e\u003ca\u003ePrincipal\u003c/a\u003e\u003c/code\u003eand the principals in the group.\n\u003c/p\u003e\u003cp\u003eAn app may then relabel a labeled value by using \u003ccode\u003e\u003ca\u003elabelRewrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.PolicyModule.Groups",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-PolicyModule-Groups.html",
        "fct-type": "module",
        "title": "Groups"
      },
      "index": {
        "description": "This module exports class Groups that policy modules must define an instance of to define groups or mappings between group Principal and the principals in the group An app may then relabel labeled value by using labelRewrite",
        "hierarchy": "Hails PolicyModule Groups",
        "module": "Hails.PolicyModule.Groups",
        "name": "Groups",
        "normalized": "",
        "package": "hails",
        "partial": "Groups",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-Groups.html#t:Groups",
      "description": {
        "fct-module": "Hails.PolicyModule.Groups",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-PolicyModule-Groups.html#Groups",
        "fct-type": "class",
        "title": "Groups"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails PolicyModule Groups",
        "module": "Hails.PolicyModule.Groups",
        "name": "Groups",
        "normalized": "",
        "package": "hails",
        "partial": "Groups",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-Groups.html#v:groups",
      "description": {
        "fct-descr": "\u003cp\u003eTypically, the action should expand a principal such as \u003ccode\u003e#group\u003c/code\u003e to\n list of group members \u003ccode\u003e[alice, bob]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.Groups",
        "fct-package": "hails",
        "fct-signature": "groups",
        "fct-source": "src/Hails-PolicyModule-Groups.html#groups",
        "fct-type": "method",
        "title": "groups"
      },
      "index": {
        "description": "Typically the action should expand principal such as group to list of group members alice bob",
        "hierarchy": "Hails PolicyModule Groups",
        "module": "Hails.PolicyModule.Groups",
        "name": "groups",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-Groups.html#v:groupsInstanceEndorse",
      "description": {
        "fct-module": "Hails.PolicyModule.Groups",
        "fct-package": "hails",
        "fct-signature": "pm",
        "fct-source": "src/Hails-PolicyModule-Groups.html#groupsInstanceEndorse",
        "fct-type": "method",
        "title": "groupsInstanceEndorse"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails PolicyModule Groups",
        "module": "Hails.PolicyModule.Groups",
        "name": "groupsInstanceEndorse",
        "normalized": "",
        "package": "hails",
        "partial": "Instance Endorse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-Groups.html#v:labelRewrite",
      "description": {
        "fct-descr": "\u003cp\u003eGiven the policy module (which is used to invoke the right\n \u003ccode\u003e\u003ca\u003egroups\u003c/a\u003e\u003c/code\u003e function) and labeled value, relabel the value according\n to the \u003ccode\u003e\u003ca\u003eGroups\u003c/a\u003e\u003c/code\u003e of the policy module. Note that the first argument\n may be bottom since it is solely used for typing purposes.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.Groups",
        "fct-package": "hails",
        "fct-signature": "unused_pm-\u003e DCLabeled a-\u003e DBAction (DCLabeled a)",
        "fct-type": "function",
        "title": "labelRewrite"
      },
      "index": {
        "description": "Given the policy module which is used to invoke the right groups function and labeled value relabel the value according to the Groups of the policy module Note that the first argument may be bottom since it is solely used for typing purposes",
        "hierarchy": "Hails PolicyModule Groups",
        "module": "Hails.PolicyModule.Groups",
        "name": "labelRewrite",
        "normalized": "a-\u003eDCLabeled b-\u003eDBAction(DCLabeled b)",
        "package": "hails",
        "partial": "Rewrite",
        "signature": "unused_pm-\u003eDCLabeled a-\u003eDBAction(DCLabeled a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-TCB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a newtype wrapper for \u003ccode\u003e\u003ca\u003eDBAction\u003c/a\u003e\u003c/code\u003e that restricts\ncertain combinators solely to policy modules. Specifically, this\npolicy module monad (\u003ccode\u003e\u003ca\u003ePMAction\u003c/a\u003e\u003c/code\u003e) is used when setting labels,\nspecifing policies, creating collections, etc. The newtype is used to\nrestrict such functionality to policy modules; apps cannot and should\nnot be concerned with specifying data models and policies.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.PolicyModule.TCB",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-PolicyModule-TCB.html",
        "fct-type": "module",
        "title": "TCB"
      },
      "index": {
        "description": "This module exports newtype wrapper for DBAction that restricts certain combinators solely to policy modules Specifically this policy module monad PMAction is used when setting labels specifing policies creating collections etc The newtype is used to restrict such functionality to policy modules apps cannot and should not be concerned with specifying data models and policies",
        "hierarchy": "Hails PolicyModule TCB",
        "module": "Hails.PolicyModule.TCB",
        "name": "TCB",
        "normalized": "",
        "package": "hails",
        "partial": "TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-TCB.html#t:PMAction",
      "description": {
        "fct-descr": "\u003cp\u003eA policy module action (\u003ccode\u003ePMAction\u003c/code\u003e) is simply a wrapper for\n database action (\u003ccode\u003e\u003ca\u003eDBAction\u003c/a\u003e\u003c/code\u003e). The wrapper is used to restrict \u003cem\u003eapp\u003c/em\u003e\n code from specifying policies; only policy module may execute\n \u003ccode\u003ePMAction\u003c/code\u003es, and thus create collections, set a label on their\n databases, etc.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule.TCB",
        "fct-package": "hails",
        "fct-signature": "newtype",
        "fct-source": "src/Hails-PolicyModule-TCB.html#PMAction",
        "fct-type": "newtype",
        "title": "PMAction"
      },
      "index": {
        "description": "policy module action PMAction is simply wrapper for database action DBAction The wrapper is used to restrict app code from specifying policies only policy module may execute PMAction and thus create collections set label on their databases etc",
        "hierarchy": "Hails PolicyModule TCB",
        "module": "Hails.PolicyModule.TCB",
        "name": "PMAction",
        "normalized": "",
        "package": "hails",
        "partial": "PMAction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-TCB.html#v:PMActionTCB",
      "description": {
        "fct-module": "Hails.PolicyModule.TCB",
        "fct-package": "hails",
        "fct-signature": "PMActionTCB",
        "fct-source": "src/Hails-PolicyModule-TCB.html#PMAction",
        "fct-type": "function",
        "title": "PMActionTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails PolicyModule TCB",
        "module": "Hails.PolicyModule.TCB",
        "name": "PMActionTCB",
        "normalized": "",
        "package": "hails",
        "partial": "PMAction TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule-TCB.html#v:unPMActionTCB",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hails.PolicyModule.TCB",
        "fct-package": "hails",
        "fct-signature": "DBAction a",
        "fct-source": "src/Hails-PolicyModule-TCB.html#PMAction",
        "fct-type": "function",
        "title": "unPMActionTCB"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails PolicyModule TCB",
        "module": "Hails.PolicyModule.TCB",
        "name": "unPMActionTCB",
        "normalized": "",
        "package": "hails",
        "partial": "PMAction TCB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003cem\u003epolicy module\u003c/em\u003e is a library with access to the privileges of a\ndedicated principal (conceptually, the author of the library) and\nassociated with a dedicated database. The job of the policy module is\nto specify what sort of data may be stored in this database, and what\naccess-control policies should be applied to it. However, because\nHails uses information flow control (IFC) to enforce policies, a\npolicy specified by a policy module on a piece of data is enforce even\nwhen an app gets a hold of the data.\n\u003c/p\u003e\u003cp\u003eIFC lets \u003cem\u003eapps\u003c/em\u003e and policy modules productively use other policy\nmodules despite mutual distrust.  Moreover, IFC prevents malicious\napps from violating any of the policies specified by a policy module.\nAs a consequence, users need not place as much trust in apps. Rather,\nthey need to trust or verify the policies specified by policy modules.\n\u003c/p\u003e\u003cp\u003eThis moule exports the class which every policy module must be an\ninstance of. Though simple, the class allows a policy module to create\ncollections with a set of policies and associate them with the policy\nmodule's underlying database.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-PolicyModule.html",
        "fct-type": "module",
        "title": "PolicyModule"
      },
      "index": {
        "description": "policy module is library with access to the privileges of dedicated principal conceptually the author of the library and associated with dedicated database The job of the policy module is to specify what sort of data may be stored in this database and what access-control policies should be applied to it However because Hails uses information flow control IFC to enforce policies policy specified by policy module on piece of data is enforce even when an app gets hold of the data IFC lets apps and policy modules productively use other policy modules despite mutual distrust Moreover IFC prevents malicious apps from violating any of the policies specified by policy module As consequence users need not place as much trust in apps Rather they need to trust or verify the policies specified by policy modules This moule exports the class which every policy module must be an instance of Though simple the class allows policy module to create collections with set of policies and associate them with the policy module underlying database",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "PolicyModule",
        "normalized": "",
        "package": "hails",
        "partial": "Policy Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#t:CollectionPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eA collection policy contains the policy for labeling documents\n (\u003ccode\u003e\u003ca\u003edocumentLabelPolicy\u003c/a\u003e\u003c/code\u003e) at a coarse grained level, and a set of\n policies for labeling fields of a document (\u003ccode\u003e\u003ca\u003efieldLabelPolicies\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eSpecific fields can be associated with a \u003ccode\u003e\u003ca\u003eFieldPolicy\u003c/a\u003e\u003c/code\u003e, which\n allows the policy module to either:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Explicitly make a field publicly readable to anyone who can\n   access the collection by declaring the field to be a\n   \u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003e, or\n\u003c/li\u003e\u003cli\u003e Label a field given the full documnet (see \u003ccode\u003e\u003ca\u003eFieldPolicy\u003c/a\u003e\u003c/code\u003e).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFields that do not have an associated policy are (conceputally)\n labeled with the document label (\u003ccode\u003e\u003ca\u003edocumentLabelPolicy\u003c/a\u003e\u003c/code\u003e).\n Similarly, the labels on the label of a policy-labeled field is the\n document label created with \u003ccode\u003e\u003ca\u003edocumentLabelPolicy\u003c/a\u003e\u003c/code\u003e. \u003cem\u003eNote:\u003c/em\u003e the\n label on \u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003es is solely the collection label.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#CollectionPolicy",
        "fct-type": "data",
        "title": "CollectionPolicy"
      },
      "index": {
        "description": "collection policy contains the policy for labeling documents documentLabelPolicy at coarse grained level and set of policies for labeling fields of document fieldLabelPolicies Specific fields can be associated with FieldPolicy which allows the policy module to either Explicitly make field publicly readable to anyone who can access the collection by declaring the field to be SearchableField or Label field given the full documnet see FieldPolicy Fields that do not have an associated policy are conceputally labeled with the document label documentLabelPolicy Similarly the labels on the label of policy-labeled field is the document label created with documentLabelPolicy Note the label on SearchableField is solely the collection label",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "CollectionPolicy",
        "normalized": "",
        "package": "hails",
        "partial": "Collection Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#t:FieldPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eFieldPolicy\u003c/code\u003e is a security policy associated with fields.\n \u003ccode\u003eSearchabelField\u003c/code\u003e specifies that the field can be referenced in the\n selection clause of a \u003ccode\u003eQuery\u003c/code\u003e, and therefore only the collection label\n protects such fields. Conversely, \u003ccode\u003e\u003ca\u003eFieldPolicy\u003c/a\u003e\u003c/code\u003e specifies a labeling\n policy for the field.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Database-TCB.html#FieldPolicy",
        "fct-type": "data",
        "title": "FieldPolicy"
      },
      "index": {
        "description": "FieldPolicy is security policy associated with fields SearchabelField specifies that the field can be referenced in the selection clause of Query and therefore only the collection label protects such fields Conversely FieldPolicy specifies labeling policy for the field",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "FieldPolicy",
        "normalized": "",
        "package": "hails",
        "partial": "Field Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#t:PMAction",
      "description": {
        "fct-descr": "\u003cp\u003eA policy module action (\u003ccode\u003ePMAction\u003c/code\u003e) is simply a wrapper for\n database action (\u003ccode\u003e\u003ca\u003eDBAction\u003c/a\u003e\u003c/code\u003e). The wrapper is used to restrict \u003cem\u003eapp\u003c/em\u003e\n code from specifying policies; only policy module may execute\n \u003ccode\u003ePMAction\u003c/code\u003es, and thus create collections, set a label on their\n databases, etc.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-PolicyModule-TCB.html#PMAction",
        "fct-type": "data",
        "title": "PMAction"
      },
      "index": {
        "description": "policy module action PMAction is simply wrapper for database action DBAction The wrapper is used to restrict app code from specifying policies only policy module may execute PMAction and thus create collections set label on their databases etc",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "PMAction",
        "normalized": "",
        "package": "hails",
        "partial": "PMAction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#t:PolicyModule",
      "description": {
        "fct-descr": "\u003cp\u003eA policy module is specified as an instance of the \u003ccode\u003ePolicyModule\u003c/code\u003e\n class. The role of this class is to define an entry point for\n policy modules. The policy module author should set up the database\n labels and create all the database collections in \u003ccode\u003e\u003ca\u003einitPolicyModule\u003c/a\u003e\u003c/code\u003e.\n It is these collections and corresponding policies that apps and\n other policy modules use when interacting with the policy module's\n database using \u003ccode\u003e\u003ca\u003ewithPolicyModule\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe Hails runtime system relies on the policy module's type \u003ccode\u003epm\u003c/code\u003e to\n load the corresponding \u003ccode\u003e\u003ca\u003einitPolicyModule\u003c/a\u003e\u003c/code\u003e when some code \"invokes\"\n the policy module using \u003ccode\u003e\u003ca\u003ewithPolicyModule\u003c/a\u003e\u003c/code\u003e.  In fact when a piece of\n code wishes to execute a database action on the policy module,\n \u003ccode\u003e\u003ca\u003ewithPolicyModule\u003c/a\u003e\u003c/code\u003e first executes the policy module's\n \u003ccode\u003e\u003ca\u003einitPolicyModule\u003c/a\u003e\u003c/code\u003e and passes the result (of type \u003ccode\u003epm\u003c/code\u003e) to the\n invoking code.\n\u003c/p\u003e\u003cp\u003eObserve that \u003ccode\u003e\u003ca\u003einitPolicyModule\u003c/a\u003e\u003c/code\u003e has access to the policy module's\n privileges, which are passed in as an argument.  This allows the\n policy module to encapsulate its privileges in its \u003ccode\u003epm\u003c/code\u003e type and allow\n code it trusts to use its privileges when executing a database action\n using \u003ccode\u003e\u003ca\u003ewithPolicyModule\u003c/a\u003e\u003c/code\u003e. Of course, untrusted code (which is usually\n the case) should not be allow to inspect values of type \u003ccode\u003epm\u003c/code\u003e to get\n the encapsulated privileges.\n\u003c/p\u003e\u003cp\u003eConsider the example below:\n\u003c/p\u003e\u003cpre\u003e  module My.Policy ( MyPolicyModule ) where\n\n  import LIO\n  import LIO.DCLabel\n  import Data.Typeable\n  import Hails.PolicyModule\n  \n  -- | Handle to policy module, not exporting @MyPolicyModuleTCB@\n  data MyPolicyModule = MyPolicyModuleTCB DCPriv deriving Typeable\n  \n  instance PolicyModule MyPolicyModule where\n    initPolicyModule priv = do\n          -- Get the policy module principal:\n      let this = privDesc priv\n          -- Create label:\n          l    = dcLabel dcTrue -- Everybody can read\n                         this   -- Only policy module can modify\n      -- Label database and collection-set:\n      labelDatabaseP priv l l\n      -- Create collections:\n      createCollectionP priv \"collection1\" ...\n      createCollectionP priv \"collection2\" ...\n      ....\n      createCollectionP priv \"collectionN\" ...\n      -- Return the policy module:\n      return (MyPolicyModuleTCB priv)\n\u003c/pre\u003e\u003cp\u003eHere the policy module labels the database, labels the list of\n collections and finally creates \u003ccode\u003eN\u003c/code\u003e collections.  The computation\n returns a value of type \u003ccode\u003eMyPolicyModule\u003c/code\u003e which wraps the policy\n module's privileges. As a consequence, trustworthy code that has\n access to the value constructor can use the policy module's\n privileges:\n\u003c/p\u003e\u003cpre\u003e -- Trustworthy code within the same module (My.Policy)\n\n alwaysInsert doc = withPolicyModule $ \\(MyPolicyModuleTCB priv) -\u003e\n  insertP priv \"collection1\" doc\n\u003c/pre\u003e\u003cp\u003eHere \u003ccode\u003ealwaysInsert\u003c/code\u003e uses the policy module's privileges to insert a\n document into collection \"collection1\". As such, if \u003ccode\u003edoc\u003c/code\u003e is well-formed\n the function always succeeds. (Of course, such functions should not be\n exported.)\n\u003c/p\u003e\u003cp\u003eUntrusted code in a different module cannot, however use the policy\n module's privilege:\n\u003c/p\u003e\u003cpre\u003e -- Untrusted code in a separate module\n import My.Policy\n\n maybeInsertIntoDB appPriv doc = withPolicyModule $ (_ :: MyPolicyModule) -\u003e\n  insertP appPriv \"collection1\" doc\n\u003c/pre\u003e\u003cp\u003eDepending on the privileges passed to \u003ccode\u003emaybeInsertIntoDB\u003c/code\u003e, and set\n policies, the insertion may or may not succeed.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-PolicyModule.html#PolicyModule",
        "fct-type": "class",
        "title": "PolicyModule"
      },
      "index": {
        "description": "policy module is specified as an instance of the PolicyModule class The role of this class is to define an entry point for policy modules The policy module author should set up the database labels and create all the database collections in initPolicyModule It is these collections and corresponding policies that apps and other policy modules use when interacting with the policy module database using withPolicyModule The Hails runtime system relies on the policy module type pm to load the corresponding initPolicyModule when some code invokes the policy module using withPolicyModule In fact when piece of code wishes to execute database action on the policy module withPolicyModule first executes the policy module initPolicyModule and passes the result of type pm to the invoking code Observe that initPolicyModule has access to the policy module privileges which are passed in as an argument This allows the policy module to encapsulate its privileges in its pm type and allow code it trusts to use its privileges when executing database action using withPolicyModule Of course untrusted code which is usually the case should not be allow to inspect values of type pm to get the encapsulated privileges Consider the example below module My.Policy MyPolicyModule where import LIO import LIO.DCLabel import Data.Typeable import Hails.PolicyModule Handle to policy module not exporting MyPolicyModuleTCB data MyPolicyModule MyPolicyModuleTCB DCPriv deriving Typeable instance PolicyModule MyPolicyModule where initPolicyModule priv do Get the policy module principal let this privDesc priv Create label dcLabel dcTrue Everybody can read this Only policy module can modify Label database and collection-set labelDatabaseP priv Create collections createCollectionP priv collection1 createCollectionP priv collection2 createCollectionP priv collectionN Return the policy module return MyPolicyModuleTCB priv Here the policy module labels the database labels the list of collections and finally creates collections The computation returns value of type MyPolicyModule which wraps the policy module privileges As consequence trustworthy code that has access to the value constructor can use the policy module privileges Trustworthy code within the same module My.Policy alwaysInsert doc withPolicyModule MyPolicyModuleTCB priv insertP priv collection1 doc Here alwaysInsert uses the policy module privileges to insert document into collection collection1 As such if doc is well-formed the function always succeeds Of course such functions should not be exported Untrusted code in different module cannot however use the policy module privilege Untrusted code in separate module import My.Policy maybeInsertIntoDB appPriv doc withPolicyModule MyPolicyModule insertP appPriv collection1 doc Depending on the privileges passed to maybeInsertIntoDB and set policies the insertion may or may not succeed",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "PolicyModule",
        "normalized": "",
        "package": "hails",
        "partial": "Policy Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#t:TypeName",
      "description": {
        "fct-descr": "\u003cp\u003ePolicy type name. Has the form:\n\u003c/p\u003e\u003cpre\u003e \u003cPolicy module package\u003e:\u003cFully qualified module\u003e.\u003cPolicy module type\u003e\n\u003c/pre\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-PolicyModule.html#TypeName",
        "fct-type": "type",
        "title": "TypeName"
      },
      "index": {
        "description": "Policy type name Has the form Policy module package Fully qualified module Policy module type",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "TypeName",
        "normalized": "",
        "package": "hails",
        "partial": "Type Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:CollectionPolicy",
      "description": {
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "CollectionPolicy",
        "fct-source": "src/Hails-Database-TCB.html#CollectionPolicy",
        "fct-type": "function",
        "title": "CollectionPolicy"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "CollectionPolicy",
        "normalized": "",
        "package": "hails",
        "partial": "Collection Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:FieldPolicy",
      "description": {
        "fct-descr": "\u003cp\u003ePolicy labeled field.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "FieldPolicy (HsonDocument -\u003e DCLabel)",
        "fct-source": "src/Hails-Database-TCB.html#FieldPolicy",
        "fct-type": "function",
        "title": "FieldPolicy"
      },
      "index": {
        "description": "Policy labeled field",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "FieldPolicy",
        "normalized": "FieldPolicy(HsonDocument-\u003eDCLabel)",
        "package": "hails",
        "partial": "Field Policy",
        "signature": "FieldPolicy(HsonDocument-\u003eDCLabel)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:SearchableField",
      "description": {
        "fct-descr": "\u003cp\u003eUnlabeled, searchable field.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "SearchableField",
        "fct-source": "src/Hails-Database-TCB.html#FieldPolicy",
        "fct-type": "function",
        "title": "SearchableField"
      },
      "index": {
        "description": "Unlabeled searchable field",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "SearchableField",
        "normalized": "",
        "package": "hails",
        "partial": "Searchable Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:availablePolicyModules",
      "description": {
        "fct-descr": "\u003cp\u003eThis contains a map of all the policy modules. Specifically, it\n maps the policy moule types to a pair of the policy module\n principal and database name.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eFor the trusted programmer:\u003c/em\u003e\n The map itself is read from the file pointed to by the environment\n variable \u003ccode\u003eDATABASE_CONFIG_FILE\u003c/code\u003e. Each line in the file corresponds\n to a policy module. The format of a line is as follows\n\u003c/p\u003e\u003cpre\u003e (\"\u003cPolicy module package\u003e:\u003cFully qualified module\u003e.\u003cPolicy module type\u003e\", \"\u003cPolicy module database name\u003e\")\n\u003c/pre\u003e\u003cp\u003eExample of valid line is:\n\u003c/p\u003e\u003cpre\u003e (\"my-policy-0.1.2.3:My.Policy.MyPolicyModule\", \"my_db\")\n\u003c/pre\u003e\u003cp\u003eThe principal used by Hails is the first projection with a \u003ccode\u003e\"_\"\u003c/code\u003e\n suffix. In the above, the principal assigned by Hails is:\n\u003c/p\u003e\u003cpre\u003e \"_my-policy-0.1.2.3:My.Policy.MyPolicyModule\"\n\u003c/pre\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "Map TypeName (Principal, DatabaseName)",
        "fct-source": "src/Hails-PolicyModule.html#availablePolicyModules",
        "fct-type": "function",
        "title": "availablePolicyModules"
      },
      "index": {
        "description": "This contains map of all the policy modules Specifically it maps the policy moule types to pair of the policy module principal and database name For the trusted programmer The map itself is read from the file pointed to by the environment variable DATABASE CONFIG FILE Each line in the file corresponds to policy module The format of line is as follows Policy module package Fully qualified module Policy module type Policy module database name Example of valid line is my-policy-0.1.2.3 My.Policy.MyPolicyModule my db The principal used by Hails is the first projection with suffix In the above the principal assigned by Hails is my-policy-0.1.2.3 My.Policy.MyPolicyModule",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "availablePolicyModules",
        "normalized": "Map TypeName(Principal,DatabaseName)",
        "package": "hails",
        "partial": "Policy Modules",
        "signature": "Map TypeName(Principal,DatabaseName)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:createCollection",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eCollection\u003c/a\u003e\u003c/code\u003e given a name, label, clearance, and policy.\n Several IFC rules must be respected for this function to succeed:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The supplied collection label and clearance must be above the\n     current label and below the current clearance as enforced by\n     \u003ccode\u003e\u003ca\u003eguardAlloc\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The current computation must be able to read the database\n    collection-set protected by the database label. The guard \u003ccode\u003e\u003ca\u003etaint\u003c/a\u003e\u003c/code\u003e is\n    used to guarantee this and raise the current label (to the\n    join of the current label and database label) appropriately.\n\u003c/li\u003e\u003cli\u003e The computation must be able to modify the database collection-set.\n    The guard \u003ccode\u003e\u003ca\u003eguardWrite\u003c/a\u003e\u003c/code\u003e is used to guarantee that the current label\n    is essentially equal to the collection-set label.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eNote: the collection policy is modified to make the \u003ccode\u003e_id\u003c/code\u003e field\n explicitly a \u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "CollectionName-\u003e DCLabel-\u003e DCLabel-\u003e CollectionPolicy-\u003e PMAction ()",
        "fct-type": "function",
        "title": "createCollection"
      },
      "index": {
        "description": "Create Collection given name label clearance and policy Several IFC rules must be respected for this function to succeed The supplied collection label and clearance must be above the current label and below the current clearance as enforced by guardAlloc The current computation must be able to read the database collection-set protected by the database label The guard taint is used to guarantee this and raise the current label to the join of the current label and database label appropriately The computation must be able to modify the database collection-set The guard guardWrite is used to guarantee that the current label is essentially equal to the collection-set label Note the collection policy is modified to make the id field explicitly SearchableField",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "createCollection",
        "normalized": "CollectionName-\u003eDCLabel-\u003eDCLabel-\u003eCollectionPolicy-\u003ePMAction()",
        "package": "hails",
        "partial": "Collection",
        "signature": "CollectionName-\u003eDCLabel-\u003eDCLabel-\u003eCollectionPolicy-\u003ePMAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:createCollectionP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ecreateCollection\u003c/a\u003e\u003c/code\u003e, but uses privileges when performing\n IFC checks.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "DCPriv-\u003e CollectionName-\u003e DCLabel-\u003e DCLabel-\u003e CollectionPolicy-\u003e PMAction ()",
        "fct-type": "function",
        "title": "createCollectionP"
      },
      "index": {
        "description": "Same as createCollection but uses privileges when performing IFC checks",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "createCollectionP",
        "normalized": "DCPriv-\u003eCollectionName-\u003eDCLabel-\u003eDCLabel-\u003eCollectionPolicy-\u003ePMAction()",
        "package": "hails",
        "partial": "Collection",
        "signature": "DCPriv-\u003eCollectionName-\u003eDCLabel-\u003eDCLabel-\u003eCollectionPolicy-\u003ePMAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:documentLabelPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eThe label on documents of the collection.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "HsonDocument -\u003e DCLabel",
        "fct-source": "src/Hails-Database-TCB.html#CollectionPolicy",
        "fct-type": "function",
        "title": "documentLabelPolicy"
      },
      "index": {
        "description": "The label on documents of the collection",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "documentLabelPolicy",
        "normalized": "HsonDocument-\u003eDCLabel",
        "package": "hails",
        "partial": "Label Policy",
        "signature": "HsonDocument-\u003eDCLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:fieldLabelPolicies",
      "description": {
        "fct-descr": "\u003cp\u003eThe policies associated with specific fields.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "Map FieldName FieldPolicy",
        "fct-source": "src/Hails-Database-TCB.html#CollectionPolicy",
        "fct-type": "function",
        "title": "fieldLabelPolicies"
      },
      "index": {
        "description": "The policies associated with specific fields",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "fieldLabelPolicies",
        "normalized": "",
        "package": "hails",
        "partial": "Label Policies",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:initPolicyModule",
      "description": {
        "fct-descr": "\u003cp\u003eEntry point for policy module. Before executing the entry function,\n the current clearance is \"raised\" to the greatest lower bound of the\n current clearance and the label \u003ccode\u003e\u003c\"Policy module principal\", |True\u003e\u003c/code\u003e, \n as to allow the policy module to read data labeled with its principal.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "DCPriv -\u003e PMAction pm",
        "fct-source": "src/Hails-PolicyModule.html#initPolicyModule",
        "fct-type": "method",
        "title": "initPolicyModule"
      },
      "index": {
        "description": "Entry point for policy module Before executing the entry function the current clearance is raised to the greatest lower bound of the current clearance and the label Policy module principal True as to allow the policy module to read data labeled with its principal",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "initPolicyModule",
        "normalized": "DCPriv-\u003ePMAction a",
        "package": "hails",
        "partial": "Policy Module",
        "signature": "DCPriv-\u003ePMAction pm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:isSearchableField",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the field policy is a \u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "FieldPolicy -\u003e Bool",
        "fct-source": "src/Hails-PolicyModule.html#isSearchableField",
        "fct-type": "function",
        "title": "isSearchableField"
      },
      "index": {
        "description": "Returns True if the field policy is SearchableField",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "isSearchableField",
        "normalized": "FieldPolicy-\u003eBool",
        "package": "hails",
        "partial": "Searchable Field",
        "signature": "FieldPolicy-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:labelDatabaseP",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the first action that any policy module should execute.  It\n is simply a wrapper for \u003ccode\u003e\u003ca\u003esetDatabaseLabelP\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003esetCollectionSetLabelP\u003c/a\u003e\u003c/code\u003e.  Given the policy module's privilges, label\n for the database, and label for the collection-set \u003ccode\u003elabelDatabaseP\u003c/code\u003e\n accordingly sets the labels.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "DCPriv-\u003e DCLabel-\u003e DCLabel-\u003e PMAction ()",
        "fct-type": "function",
        "title": "labelDatabaseP"
      },
      "index": {
        "description": "This is the first action that any policy module should execute It is simply wrapper for setDatabaseLabelP and setCollectionSetLabelP Given the policy module privilges label for the database and label for the collection-set labelDatabaseP accordingly sets the labels",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "labelDatabaseP",
        "normalized": "DCPriv-\u003eDCLabel-\u003eDCLabel-\u003ePMAction()",
        "package": "hails",
        "partial": "Database",
        "signature": "DCPriv-\u003eDCLabel-\u003eDCLabel-\u003ePMAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:policyModuleTypeName",
      "description": {
        "fct-descr": "\u003cp\u003eGet the name of a policy module.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "pm -\u003e TypeName",
        "fct-source": "src/Hails-PolicyModule.html#policyModuleTypeName",
        "fct-type": "function",
        "title": "policyModuleTypeName"
      },
      "index": {
        "description": "Get the name of policy module",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "policyModuleTypeName",
        "normalized": "a-\u003eTypeName",
        "package": "hails",
        "partial": "Module Type Name",
        "signature": "pm-\u003eTypeName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:searchableFields",
      "description": {
        "fct-descr": "\u003cp\u003eGet the list of names corresponding to \u003ccode\u003e\u003ca\u003eSearchableField\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "CollectionPolicy -\u003e [FieldName]",
        "fct-source": "src/Hails-PolicyModule.html#searchableFields",
        "fct-type": "function",
        "title": "searchableFields"
      },
      "index": {
        "description": "Get the list of names corresponding to SearchableField",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "searchableFields",
        "normalized": "CollectionPolicy-\u003e[FieldName]",
        "package": "hails",
        "partial": "Fields",
        "signature": "CollectionPolicy-\u003e[FieldName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:setCollectionSetLabel",
      "description": {
        "fct-descr": "\u003cp\u003eThe collections label protects the collection-set of the database.\n It is used to restrict who can name a collection in the database and\n who can modify the underlying collection-set (e.g., by creating a new\n collection). The policy module may change the default collections\n label, which limits access to the policy module alone, using\n \u003ccode\u003esetCollectionSetLabel\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe new label must be bounded by the current label and clearance as\n checked by \u003ccode\u003e\u003ca\u003eguardAlloc\u003c/a\u003e\u003c/code\u003e. Additionally, the current label must flow to\n the label of the database which protects the label of the\n colleciton set. In most cases code should use \u003ccode\u003e\u003ca\u003esetCollectionSetLabelP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "DCLabel -\u003e PMAction ()",
        "fct-source": "src/Hails-PolicyModule.html#setCollectionSetLabel",
        "fct-type": "function",
        "title": "setCollectionSetLabel"
      },
      "index": {
        "description": "The collections label protects the collection-set of the database It is used to restrict who can name collection in the database and who can modify the underlying collection-set e.g by creating new collection The policy module may change the default collections label which limits access to the policy module alone using setCollectionSetLabel The new label must be bounded by the current label and clearance as checked by guardAlloc Additionally the current label must flow to the label of the database which protects the label of the colleciton set In most cases code should use setCollectionSetLabelP",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "setCollectionSetLabel",
        "normalized": "DCLabel-\u003ePMAction()",
        "package": "hails",
        "partial": "Collection Set Label",
        "signature": "DCLabel-\u003ePMAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:setCollectionSetLabelP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esetCollectionSetLabel\u003c/a\u003e\u003c/code\u003e, but uses the supplied privileges\n when performing label comparisons.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "DCPriv-\u003e DCLabel-\u003e PMAction ()",
        "fct-type": "function",
        "title": "setCollectionSetLabelP"
      },
      "index": {
        "description": "Same as setCollectionSetLabel but uses the supplied privileges when performing label comparisons",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "setCollectionSetLabelP",
        "normalized": "DCPriv-\u003eDCLabel-\u003ePMAction()",
        "package": "hails",
        "partial": "Collection Set Label",
        "signature": "DCPriv-\u003eDCLabel-\u003ePMAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:setDatabaseLabel",
      "description": {
        "fct-descr": "\u003cp\u003eSet the label of the underlying database. The supplied label must\n be bounded by the current label and clearance as enforced by\n \u003ccode\u003e\u003ca\u003eguardAlloc\u003c/a\u003e\u003c/code\u003e. Moreover the current computation mut write to the\n database, as enforce by applying \u003ccode\u003e\u003ca\u003eguardWrite\u003c/a\u003e\u003c/code\u003e to the current\n database label. The latter requirement  suggests that every policy\n module use \u003ccode\u003e\u003ca\u003esetDatabaseLabelP\u003c/a\u003e\u003c/code\u003e when first changing the label.\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "DCLabel -\u003e PMAction ()",
        "fct-source": "src/Hails-PolicyModule.html#setDatabaseLabel",
        "fct-type": "function",
        "title": "setDatabaseLabel"
      },
      "index": {
        "description": "Set the label of the underlying database The supplied label must be bounded by the current label and clearance as enforced by guardAlloc Moreover the current computation mut write to the database as enforce by applying guardWrite to the current database label The latter requirement suggests that every policy module use setDatabaseLabelP when first changing the label",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "setDatabaseLabel",
        "normalized": "DCLabel-\u003ePMAction()",
        "package": "hails",
        "partial": "Database Label",
        "signature": "DCLabel-\u003ePMAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:setDatabaseLabelP",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esetDatabaseLabel\u003c/a\u003e\u003c/code\u003e, but uses privileges when performing\n label comparisons. If a policy module wishes to allow other policy\n modules or apps to access the underlying databse it must use \n \u003ccode\u003esetDatabaseLabelP\u003c/code\u003e to \"downgrade\" the database label, which by\n default only allows the policy module itself to access any of the\n contents (including collection-set).\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "DCPriv-\u003e DCLabel-\u003e PMAction ()",
        "fct-type": "function",
        "title": "setDatabaseLabelP"
      },
      "index": {
        "description": "Same as setDatabaseLabel but uses privileges when performing label comparisons If policy module wishes to allow other policy modules or apps to access the underlying databse it must use setDatabaseLabelP to downgrade the database label which by default only allows the policy module itself to access any of the contents including collection-set",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "setDatabaseLabelP",
        "normalized": "DCPriv-\u003eDCLabel-\u003ePMAction()",
        "package": "hails",
        "partial": "Database Label",
        "signature": "DCPriv-\u003eDCLabel-\u003ePMAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-PolicyModule.html#v:withPolicyModule",
      "description": {
        "fct-descr": "\u003cp\u003eThis function is the used to execute database queries on policy\n module databases. The function firstly invokes the policy module,\n determined from the type \u003ccode\u003epm\u003c/code\u003e, and creates a pipe to the policy\n module's database. The supplied database query function is then\n applied to the policy module. In most cases, the value of type \u003ccode\u003epm\u003c/code\u003e is\n opaque and the query is executed without additionally privileges.\n\u003c/p\u003e\u003cpre\u003e withPolicyModule $ \\(_ :: SomePolicyModule) -\u003e do\n  -- Perform database operations: insert, save, find, delete, etc.\n\u003c/pre\u003e\u003cp\u003eTrustworthy code (as deemed by the policy module) may, however, be\n passed in additional privileges by encapsulating them in \u003ccode\u003epm\u003c/code\u003e (see\n \u003ccode\u003e\u003ca\u003ePolicyModule\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Hails.PolicyModule",
        "fct-package": "hails",
        "fct-signature": "(pm -\u003e DBAction a) -\u003e DC a",
        "fct-source": "src/Hails-PolicyModule.html#withPolicyModule",
        "fct-type": "function",
        "title": "withPolicyModule"
      },
      "index": {
        "description": "This function is the used to execute database queries on policy module databases The function firstly invokes the policy module determined from the type pm and creates pipe to the policy module database The supplied database query function is then applied to the policy module In most cases the value of type pm is opaque and the query is executed without additionally privileges withPolicyModule SomePolicyModule do Perform database operations insert save find delete etc Trustworthy code as deemed by the policy module may however be passed in additional privileges by encapsulating them in pm see PolicyModule",
        "hierarchy": "Hails PolicyModule",
        "module": "Hails.PolicyModule",
        "name": "withPolicyModule",
        "normalized": "(a-\u003eDBAction b)-\u003eDC b",
        "package": "hails",
        "partial": "Policy Module",
        "signature": "(pm-\u003eDBAction a)-\u003eDC a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Version.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module solely exports the versoin of hails.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.Version",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-Version.html",
        "fct-type": "module",
        "title": "Version"
      },
      "index": {
        "description": "This module solely exports the versoin of hails",
        "hierarchy": "Hails Version",
        "module": "Hails.Version",
        "name": "Version",
        "normalized": "",
        "package": "hails",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Version.html#v:version",
      "description": {
        "fct-module": "Hails.Version",
        "fct-package": "hails",
        "fct-signature": "Version",
        "fct-source": "src/Paths_hails.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Version",
        "module": "Hails.Version",
        "name": "version",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Controller.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a definition of a \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e, which is simply a\n\u003ccode\u003e\u003ca\u003eDC\u003c/a\u003e\u003c/code\u003e action with the \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e HTTP \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e in the environment\n(i.e., it is a \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e monad).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.Web.Controller",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-Web-Controller.html",
        "fct-type": "module",
        "title": "Controller"
      },
      "index": {
        "description": "This module exports definition of Controller which is simply DC action with the Labeled HTTP Request in the environment i.e it is Reader monad",
        "hierarchy": "Hails Web Controller",
        "module": "Hails.Web.Controller",
        "name": "Controller",
        "normalized": "",
        "package": "hails",
        "partial": "Controller",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Controller.html#t:Controller",
      "description": {
        "fct-descr": "\u003cp\u003eA controller is simply a reader monad atop \u003ccode\u003e\u003ca\u003eDC\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003eLabeled\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e as the environment.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Controller",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Web-Controller.html#Controller",
        "fct-type": "type",
        "title": "Controller"
      },
      "index": {
        "description": "controller is simply reader monad atop DC with the Labeled Request as the environment",
        "hierarchy": "Hails Web Controller",
        "module": "Hails.Web.Controller",
        "name": "Controller",
        "normalized": "",
        "package": "hails",
        "partial": "Controller",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Controller.html#t:ControllerState",
      "description": {
        "fct-module": "Hails.Web.Controller",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Web-Controller.html#ControllerState",
        "fct-type": "data",
        "title": "ControllerState"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Web Controller",
        "module": "Hails.Web.Controller",
        "name": "ControllerState",
        "normalized": "",
        "package": "hails",
        "partial": "Controller State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Controller.html#v:ControllerState",
      "description": {
        "fct-module": "Hails.Web.Controller",
        "fct-package": "hails",
        "fct-signature": "ControllerState",
        "fct-source": "src/Hails-Web-Controller.html#ControllerState",
        "fct-type": "function",
        "title": "ControllerState"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Web Controller",
        "module": "Hails.Web.Controller",
        "name": "ControllerState",
        "normalized": "",
        "package": "hails",
        "partial": "Controller State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Controller.html#v:body",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the body in the request (after unlabeling it).\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Controller",
        "fct-package": "hails",
        "fct-signature": "Controller ByteString",
        "fct-source": "src/Hails-Web-Controller.html#body",
        "fct-type": "function",
        "title": "body"
      },
      "index": {
        "description": "Extract the body in the request after unlabeling it",
        "hierarchy": "Hails Web Controller",
        "module": "Hails.Web.Controller",
        "name": "body",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Controller.html#v:csPathParams",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hails.Web.Controller",
        "fct-package": "hails",
        "fct-signature": "Query",
        "fct-source": "src/Hails-Web-Controller.html#ControllerState",
        "fct-type": "function",
        "title": "csPathParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Web Controller",
        "module": "Hails.Web.Controller",
        "name": "csPathParams",
        "normalized": "",
        "package": "hails",
        "partial": "Path Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Controller.html#v:csRequest",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Hails.Web.Controller",
        "fct-package": "hails",
        "fct-signature": "DCLabeled Request",
        "fct-source": "src/Hails-Web-Controller.html#ControllerState",
        "fct-type": "function",
        "title": "csRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Web Controller",
        "module": "Hails.Web.Controller",
        "name": "csRequest",
        "normalized": "",
        "package": "hails",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Controller.html#v:queryParam",
      "description": {
        "fct-descr": "\u003cp\u003eGet the query parameter mathing the supplied variable name.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Controller",
        "fct-package": "hails",
        "fct-signature": "ByteString -\u003e Controller (Maybe ByteString)",
        "fct-source": "src/Hails-Web-Controller.html#queryParam",
        "fct-type": "function",
        "title": "queryParam"
      },
      "index": {
        "description": "Get the query parameter mathing the supplied variable name",
        "hierarchy": "Hails Web Controller",
        "module": "Hails.Web.Controller",
        "name": "queryParam",
        "normalized": "ByteString-\u003eController(Maybe ByteString)",
        "package": "hails",
        "partial": "Param",
        "signature": "ByteString-\u003eController(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Controller.html#v:redirectBack",
      "description": {
        "fct-descr": "\u003cp\u003eRedirect back acording to the referer header. If the header is\n not present redirect to root (i.e., \u003ccode\u003e/\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Controller",
        "fct-package": "hails",
        "fct-signature": "Controller Response",
        "fct-source": "src/Hails-Web-Controller.html#redirectBack",
        "fct-type": "function",
        "title": "redirectBack"
      },
      "index": {
        "description": "Redirect back acording to the referer header If the header is not present redirect to root i.e",
        "hierarchy": "Hails Web Controller",
        "module": "Hails.Web.Controller",
        "name": "redirectBack",
        "normalized": "",
        "package": "hails",
        "partial": "Back",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Controller.html#v:redirectBackOr",
      "description": {
        "fct-descr": "\u003cp\u003eRedirect back acording to the referer header. If the header is\n not present return the given response.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Controller",
        "fct-package": "hails",
        "fct-signature": "Response -\u003e Controller Response",
        "fct-source": "src/Hails-Web-Controller.html#redirectBackOr",
        "fct-type": "function",
        "title": "redirectBackOr"
      },
      "index": {
        "description": "Redirect back acording to the referer header If the header is not present return the given response",
        "hierarchy": "Hails Web Controller",
        "module": "Hails.Web.Controller",
        "name": "redirectBackOr",
        "normalized": "Response-\u003eController Response",
        "package": "hails",
        "partial": "Back Or",
        "signature": "Response-\u003eController Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Controller.html#v:request",
      "description": {
        "fct-descr": "\u003cp\u003eGet the underlying request.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Controller",
        "fct-package": "hails",
        "fct-signature": "Controller (DCLabeled Request)",
        "fct-source": "src/Hails-Web-Controller.html#request",
        "fct-type": "function",
        "title": "request"
      },
      "index": {
        "description": "Get the underlying request",
        "hierarchy": "Hails Web Controller",
        "module": "Hails.Web.Controller",
        "name": "request",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Controller.html#v:requestHeader",
      "description": {
        "fct-descr": "\u003cp\u003eGet a request header\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Controller",
        "fct-package": "hails",
        "fct-signature": "HeaderName -\u003e Controller (Maybe ByteString)",
        "fct-source": "src/Hails-Web-Controller.html#requestHeader",
        "fct-type": "function",
        "title": "requestHeader"
      },
      "index": {
        "description": "Get request header",
        "hierarchy": "Hails Web Controller",
        "module": "Hails.Web.Controller",
        "name": "requestHeader",
        "normalized": "HeaderName-\u003eController(Maybe ByteString)",
        "package": "hails",
        "partial": "Header",
        "signature": "HeaderName-\u003eController(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Controller.html#v:respond",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a response.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Controller",
        "fct-package": "hails",
        "fct-signature": "r -\u003e Controller r",
        "fct-source": "src/Hails-Web-Controller.html#respond",
        "fct-type": "function",
        "title": "respond"
      },
      "index": {
        "description": "Produce response",
        "hierarchy": "Hails Web Controller",
        "module": "Hails.Web.Controller",
        "name": "respond",
        "normalized": "a-\u003eController a",
        "package": "hails",
        "partial": "",
        "signature": "r-\u003eController r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Frank.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFrank is a Sinatra-inspired DSL (see \u003ca\u003ehttp://www.sinatrarb.com\u003c/a\u003e) for creating\nroutes. It is composable with all \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e types, but is designed to be used\nwith \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003es. Each verb (\u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epost\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, etc') takes a\nURL pattern of the form \"/dir/:paramname/dir\" (see \u003ccode\u003e\u003ca\u003eroutePattern\u003c/a\u003e\u003c/code\u003e for\ndetails) and a \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\nmodule SimpleFrank (server) where\n\nimport           \u003ca\u003eData.String\u003c/a\u003e\nimport           \u003ca\u003eData.Maybe\u003c/a\u003e\nimport           \u003ca\u003eControl.Monad\u003c/a\u003e\n\nimport           \u003ca\u003eLIO\u003c/a\u003e\nimport           \u003ca\u003eHails.HttpServer.Types\u003c/a\u003e\nimport           \u003ca\u003eHails.Web\u003c/a\u003e\nimport qualified \u003ca\u003eHails.Web.Frank\u003c/a\u003e as F\n\nserver :: \u003ccode\u003eApplication\u003c/code\u003e\nserver = \u003ccode\u003e\u003ca\u003emkRouter\u003c/a\u003e\u003c/code\u003e $ do\n  F.\u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e \"/users\" $ do\n    req \u003c- \u003ccode\u003erequest\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e unlabel\n    return $ \u003ccode\u003eokHtml\u003c/code\u003e $ \u003ccode\u003efromString\u003c/code\u003e $\n      \"Welcome Home \" ++ (show $ \u003ccode\u003eserverName\u003c/code\u003e req)\n  F.\u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e \"/users/:id\" $ do\n    userId \u003c- fromMaybe \"\" `\u003ccode\u003eliftM\u003c/code\u003e` \u003ccode\u003equeryParam\u003c/code\u003e \"id\"\n    return $ \u003ccode\u003eok\u003c/code\u003e \"text/json\" $ fromString $\n      \"{\\\"myid\\\": \" ++ (show userId) ++ \"}\"\n  F.\u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e \"/user/:id\" $ do\n  ...\n\u003c/pre\u003e\u003cp\u003eWith \u003ccode\u003ehails\u003c/code\u003e, you can directly run this:\n\u003c/p\u003e\u003cpre\u003e hails --app=SimpleFrank\n\u003c/pre\u003e\u003cp\u003eAnd, with \u003ccode\u003ecurl\u003c/code\u003e, you can now checkout your page:\n\u003c/p\u003e\u003cpre\u003e $ curl localhost:8080/users\n Welcome Home \"localhost\"\n\n $ curl localhost:8080/users/123\n {\"myid\": \"123\"}\n\n $ ...\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Hails.Web.Frank",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-Web-Frank.html",
        "fct-type": "module",
        "title": "Frank"
      },
      "index": {
        "description": "Frank is Sinatra-inspired DSL see http www.sinatrarb.com for creating routes It is composable with all Routeable types but is designed to be used with Controller Each verb get post put etc takes URL pattern of the form dir paramname dir see routePattern for details and Routeable module SimpleFrank server where import Data.String import Data.Maybe import Control.Monad import LIO import Hails.HttpServer.Types import Hails.Web import qualified Hails.Web.Frank as server Application server mkRouter do get users do req request unlabel return okHtml fromString Welcome Home show serverName req get users id do userId fromMaybe liftM queryParam id return ok text json fromString myid show userId put user id do With hails you can directly run this hails app SimpleFrank And with curl you can now checkout your page curl localhost users Welcome Home localhost curl localhost users myid",
        "hierarchy": "Hails Web Frank",
        "module": "Hails.Web.Frank",
        "name": "Frank",
        "normalized": "",
        "package": "hails",
        "partial": "Frank",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Frank.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eMatches the DELETE method on the given URL pattern\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Frank",
        "fct-package": "hails",
        "fct-signature": "ByteString -\u003e r -\u003e Route",
        "fct-source": "src/Hails-Web-Frank.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Matches the DELETE method on the given URL pattern",
        "hierarchy": "Hails Web Frank",
        "module": "Hails.Web.Frank",
        "name": "delete",
        "normalized": "ByteString-\u003ea-\u003eRoute",
        "package": "hails",
        "partial": "",
        "signature": "ByteString-\u003er-\u003eRoute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Frank.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eMatches the GET method on the given URL pattern\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Frank",
        "fct-package": "hails",
        "fct-signature": "ByteString -\u003e r -\u003e Route",
        "fct-source": "src/Hails-Web-Frank.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Matches the GET method on the given URL pattern",
        "hierarchy": "Hails Web Frank",
        "module": "Hails.Web.Frank",
        "name": "get",
        "normalized": "ByteString-\u003ea-\u003eRoute",
        "package": "hails",
        "partial": "",
        "signature": "ByteString-\u003er-\u003eRoute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Frank.html#v:options",
      "description": {
        "fct-descr": "\u003cp\u003eMatches the OPTIONS method on the given URL pattern\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Frank",
        "fct-package": "hails",
        "fct-signature": "ByteString -\u003e r -\u003e Route",
        "fct-source": "src/Hails-Web-Frank.html#options",
        "fct-type": "function",
        "title": "options"
      },
      "index": {
        "description": "Matches the OPTIONS method on the given URL pattern",
        "hierarchy": "Hails Web Frank",
        "module": "Hails.Web.Frank",
        "name": "options",
        "normalized": "ByteString-\u003ea-\u003eRoute",
        "package": "hails",
        "partial": "",
        "signature": "ByteString-\u003er-\u003eRoute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Frank.html#v:post",
      "description": {
        "fct-descr": "\u003cp\u003eMatches the POST method on the given URL pattern\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Frank",
        "fct-package": "hails",
        "fct-signature": "ByteString -\u003e r -\u003e Route",
        "fct-source": "src/Hails-Web-Frank.html#post",
        "fct-type": "function",
        "title": "post"
      },
      "index": {
        "description": "Matches the POST method on the given URL pattern",
        "hierarchy": "Hails Web Frank",
        "module": "Hails.Web.Frank",
        "name": "post",
        "normalized": "ByteString-\u003ea-\u003eRoute",
        "package": "hails",
        "partial": "",
        "signature": "ByteString-\u003er-\u003eRoute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Frank.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eMatches the PUT method on the given URL pattern\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Frank",
        "fct-package": "hails",
        "fct-signature": "ByteString -\u003e r -\u003e Route",
        "fct-source": "src/Hails-Web-Frank.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "Matches the PUT method on the given URL pattern",
        "hierarchy": "Hails Web Frank",
        "module": "Hails.Web.Frank",
        "name": "put",
        "normalized": "ByteString-\u003ea-\u003eRoute",
        "package": "hails",
        "partial": "",
        "signature": "ByteString-\u003er-\u003eRoute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-REST.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eREST is a DSL for creating routes using RESTful HTTP verbs.\nSee \u003ca\u003ehttp://en.wikipedia.org/wiki/Representational_state_transfer\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eFor example, an app handling users may define a REST controller as:\n\u003c/p\u003e\u003cpre\u003e\nmodule SimpleREST (server) where\n\nimport           \u003ca\u003eData.String\u003c/a\u003e\nimport           \u003ca\u003eData.Maybe\u003c/a\u003e\nimport           \u003ca\u003eControl.Monad\u003c/a\u003e\n\nimport           \u003ca\u003eLIO\u003c/a\u003e\nimport           \u003ca\u003eHails.HttpServer.Types\u003c/a\u003e\nimport           \u003ca\u003eHails.Web\u003c/a\u003e\nimport qualified \u003ca\u003eHails.Web.REST\u003c/a\u003e as REST\n\nserver :: \u003ccode\u003eApplication\u003c/code\u003e\nserver = \u003ccode\u003e\u003ca\u003emkRouter\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003erouteName\u003c/a\u003e\u003c/code\u003e \"users\" $ do\n  REST.\u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e $ do\n    req \u003c- \u003ccode\u003erequest\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e unlabel\n    return $ \u003ccode\u003e\u003ca\u003eokHtml\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003efromString\u003c/code\u003e $\n      \"Welcome Home \" ++ (show $ \u003ccode\u003eserverName\u003c/code\u003e req)\n  REST.\u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e $ do\n    userId \u003c- fromMaybe \"\" `\u003ccode\u003eliftM\u003c/code\u003e` \u003ccode\u003equeryParam\u003c/code\u003e \"id\"\n    return $ \u003ccode\u003e\u003ca\u003eok\u003c/a\u003e\u003c/code\u003e \"text/json\" $ fromString $\n      \"{\\\"myid\\\": \" ++ (show userId) ++ \"}\"\n  ...\n\u003c/pre\u003e\u003cp\u003eWith \u003ccode\u003ehails\u003c/code\u003e, you can directly run this:\n\u003c/p\u003e\u003cpre\u003e hails --app=SimpleREST\n\u003c/pre\u003e\u003cp\u003eAnd, with \u003ccode\u003ecurl\u003c/code\u003e, you can now checkout your page:\n\u003c/p\u003e\u003cpre\u003e $ curl localhost:8080/users\n Welcome Home \"localhost\"\n\n $ curl localhost:8080/users/123\n {\"myid\": \"123\"}\n\n $ ...\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Hails.Web.REST",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-Web-REST.html",
        "fct-type": "module",
        "title": "REST"
      },
      "index": {
        "description": "REST is DSL for creating routes using RESTful HTTP verbs See http en.wikipedia.org wiki Representational state transfer For example an app handling users may define REST controller as module SimpleREST server where import Data.String import Data.Maybe import Control.Monad import LIO import Hails.HttpServer.Types import Hails.Web import qualified Hails.Web.REST as REST server Application server mkRouter routeName users do REST index do req request unlabel return okHtml fromString Welcome Home show serverName req REST show do userId fromMaybe liftM queryParam id return ok text json fromString myid show userId With hails you can directly run this hails app SimpleREST And with curl you can now checkout your page curl localhost users Welcome Home localhost curl localhost users myid",
        "hierarchy": "Hails Web REST",
        "module": "Hails.Web.REST",
        "name": "REST",
        "normalized": "",
        "package": "hails",
        "partial": "REST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-REST.html#t:RESTController",
      "description": {
        "fct-descr": "\u003cp\u003eMonad used to encode a REST controller incrementally.\n The return type is not used, hence always '()'.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.REST",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Web-REST.html#RESTController",
        "fct-type": "type",
        "title": "RESTController"
      },
      "index": {
        "description": "Monad used to encode REST controller incrementally The return type is not used hence always",
        "hierarchy": "Hails Web REST",
        "module": "Hails.Web.REST",
        "name": "RESTController",
        "normalized": "",
        "package": "hails",
        "partial": "RESTController",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-REST.html#v:create",
      "description": {
        "fct-descr": "\u003cp\u003ePOST /\n\u003c/p\u003e",
        "fct-module": "Hails.Web.REST",
        "fct-package": "hails",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Hails-Web-REST.html#create",
        "fct-type": "function",
        "title": "create"
      },
      "index": {
        "description": "POST",
        "hierarchy": "Hails Web REST",
        "module": "Hails.Web.REST",
        "name": "create",
        "normalized": "a-\u003eRESTController",
        "package": "hails",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-REST.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDELETE /:id\n\u003c/p\u003e",
        "fct-module": "Hails.Web.REST",
        "fct-package": "hails",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Hails-Web-REST.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "DELETE id",
        "hierarchy": "Hails Web REST",
        "module": "Hails.Web.REST",
        "name": "delete",
        "normalized": "a-\u003eRESTController",
        "package": "hails",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-REST.html#v:edit",
      "description": {
        "fct-descr": "\u003cp\u003eGET /:id/edit\n\u003c/p\u003e",
        "fct-module": "Hails.Web.REST",
        "fct-package": "hails",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Hails-Web-REST.html#edit",
        "fct-type": "function",
        "title": "edit"
      },
      "index": {
        "description": "GET id edit",
        "hierarchy": "Hails Web REST",
        "module": "Hails.Web.REST",
        "name": "edit",
        "normalized": "a-\u003eRESTController",
        "package": "hails",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-REST.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003eGET /\n\u003c/p\u003e",
        "fct-module": "Hails.Web.REST",
        "fct-package": "hails",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Hails-Web-REST.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "GET",
        "hierarchy": "Hails Web REST",
        "module": "Hails.Web.REST",
        "name": "index",
        "normalized": "a-\u003eRESTController",
        "package": "hails",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-REST.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eGET /new\n\u003c/p\u003e",
        "fct-module": "Hails.Web.REST",
        "fct-package": "hails",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Hails-Web-REST.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "GET new",
        "hierarchy": "Hails Web REST",
        "module": "Hails.Web.REST",
        "name": "new",
        "normalized": "a-\u003eRESTController",
        "package": "hails",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-REST.html#v:show",
      "description": {
        "fct-descr": "\u003cp\u003eGET /:id\n\u003c/p\u003e",
        "fct-module": "Hails.Web.REST",
        "fct-package": "hails",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Hails-Web-REST.html#show",
        "fct-type": "function",
        "title": "show"
      },
      "index": {
        "description": "GET id",
        "hierarchy": "Hails Web REST",
        "module": "Hails.Web.REST",
        "name": "show",
        "normalized": "a-\u003eRESTController",
        "package": "hails",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-REST.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003ePUT /:id\n\u003c/p\u003e",
        "fct-module": "Hails.Web.REST",
        "fct-package": "hails",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Hails-Web-REST.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "PUT id",
        "hierarchy": "Hails Web REST",
        "module": "Hails.Web.REST",
        "name": "update",
        "normalized": "a-\u003eRESTController",
        "package": "hails",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Responses.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines some convenience functions for creating responses.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.Web.Responses",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-Web-Responses.html",
        "fct-type": "module",
        "title": "Responses"
      },
      "index": {
        "description": "This module defines some convenience functions for creating responses",
        "hierarchy": "Hails Web Responses",
        "module": "Hails.Web.Responses",
        "name": "Responses",
        "normalized": "",
        "package": "hails",
        "partial": "Responses",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Responses.html#v:badRequest",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a 400 (Bad Request) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Responses",
        "fct-package": "hails",
        "fct-signature": "Response",
        "fct-source": "src/Hails-Web-Responses.html#badRequest",
        "fct-type": "function",
        "title": "badRequest"
      },
      "index": {
        "description": "Returns Bad Request Response",
        "hierarchy": "Hails Web Responses",
        "module": "Hails.Web.Responses",
        "name": "badRequest",
        "normalized": "",
        "package": "hails",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Responses.html#v:forbidden",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a 403 (Forbidden) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Responses",
        "fct-package": "hails",
        "fct-signature": "Response",
        "fct-source": "src/Hails-Web-Responses.html#forbidden",
        "fct-type": "function",
        "title": "forbidden"
      },
      "index": {
        "description": "Returns Forbidden Response",
        "hierarchy": "Hails Web Responses",
        "module": "Hails.Web.Responses",
        "name": "forbidden",
        "normalized": "",
        "package": "hails",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Responses.html#v:movedTo",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a URL returns a 301 (Moved Permanently) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e redirecting to\n that URL.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Responses",
        "fct-package": "hails",
        "fct-signature": "String -\u003e Response",
        "fct-source": "src/Hails-Web-Responses.html#movedTo",
        "fct-type": "function",
        "title": "movedTo"
      },
      "index": {
        "description": "Given URL returns Moved Permanently Response redirecting to that URL",
        "hierarchy": "Hails Web Responses",
        "module": "Hails.Web.Responses",
        "name": "movedTo",
        "normalized": "String-\u003eResponse",
        "package": "hails",
        "partial": "To",
        "signature": "String-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Responses.html#v:notFound",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a 404 (Not Found) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Responses",
        "fct-package": "hails",
        "fct-signature": "Response",
        "fct-source": "src/Hails-Web-Responses.html#notFound",
        "fct-type": "function",
        "title": "notFound"
      },
      "index": {
        "description": "Returns Not Found Response",
        "hierarchy": "Hails Web Responses",
        "module": "Hails.Web.Responses",
        "name": "notFound",
        "normalized": "",
        "package": "hails",
        "partial": "Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Responses.html#v:ok",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a 200 (OK) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e with the given content-type and resposne\n body\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Responses",
        "fct-package": "hails",
        "fct-signature": "ContentType -\u003e ByteString -\u003e Response",
        "fct-source": "src/Hails-Web-Responses.html#ok",
        "fct-type": "function",
        "title": "ok"
      },
      "index": {
        "description": "Creates OK Response with the given content-type and resposne body",
        "hierarchy": "Hails Web Responses",
        "module": "Hails.Web.Responses",
        "name": "ok",
        "normalized": "ContentType-\u003eByteString-\u003eResponse",
        "package": "hails",
        "partial": "",
        "signature": "ContentType-\u003eByteString-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Responses.html#v:okHtml",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a 200 (OK) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e with content-type \"text/html\" and the\n given resposne body\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Responses",
        "fct-package": "hails",
        "fct-signature": "ByteString -\u003e Response",
        "fct-source": "src/Hails-Web-Responses.html#okHtml",
        "fct-type": "function",
        "title": "okHtml"
      },
      "index": {
        "description": "Creates OK Response with content-type text html and the given resposne body",
        "hierarchy": "Hails Web Responses",
        "module": "Hails.Web.Responses",
        "name": "okHtml",
        "normalized": "ByteString-\u003eResponse",
        "package": "hails",
        "partial": "Html",
        "signature": "ByteString-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Responses.html#v:redirectTo",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a URL returns a 303 (See Other) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e redirecting to that URL.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Responses",
        "fct-package": "hails",
        "fct-signature": "String -\u003e Response",
        "fct-source": "src/Hails-Web-Responses.html#redirectTo",
        "fct-type": "function",
        "title": "redirectTo"
      },
      "index": {
        "description": "Given URL returns See Other Response redirecting to that URL",
        "hierarchy": "Hails Web Responses",
        "module": "Hails.Web.Responses",
        "name": "redirectTo",
        "normalized": "String-\u003eResponse",
        "package": "hails",
        "partial": "To",
        "signature": "String-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Responses.html#v:requireBasicAuth",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a 401 (Authorization Required) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e requiring basic\n authentication in the given realm.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Responses",
        "fct-package": "hails",
        "fct-signature": "String -\u003e Response",
        "fct-source": "src/Hails-Web-Responses.html#requireBasicAuth",
        "fct-type": "function",
        "title": "requireBasicAuth"
      },
      "index": {
        "description": "Returns Authorization Required Response requiring basic authentication in the given realm",
        "hierarchy": "Hails Web Responses",
        "module": "Hails.Web.Responses",
        "name": "requireBasicAuth",
        "normalized": "String-\u003eResponse",
        "package": "hails",
        "partial": "Basic Auth",
        "signature": "String-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Responses.html#v:serverError",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a 500 (Server Error) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Responses",
        "fct-package": "hails",
        "fct-signature": "Response",
        "fct-source": "src/Hails-Web-Responses.html#serverError",
        "fct-type": "function",
        "title": "serverError"
      },
      "index": {
        "description": "Returns Server Error Response",
        "hierarchy": "Hails Web Responses",
        "module": "Hails.Web.Responses",
        "name": "serverError",
        "normalized": "",
        "package": "hails",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Router.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConceptually, a route is function that, given an HTTP request, may return\nan action (something that would return a response for the client if run).\nRoutes can be concatenated--where each route is evaluated until one\nmatches--and nested. Routes are expressed through the \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e type class.\n\u003ccode\u003e\u003ca\u003erunRoute\u003c/a\u003e\u003c/code\u003e transforms an instance of \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e to a function from \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\nto a monadic action (in the \u003ccode\u003eResourceT\u003c/code\u003e monad) that returns a\n\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e. The return type was chosen to be monadic so routing\ndecisions can depend on side-effects (e.g. a random number or counter for A/B\ntesting, IP geolocation lookup etc').\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.Web.Router",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-Web-Router.html",
        "fct-type": "module",
        "title": "Router"
      },
      "index": {
        "description": "Conceptually route is function that given an HTTP request may return an action something that would return response for the client if run Routes can be concatenated--where each route is evaluated until one matches--and nested Routes are expressed through the Routeable type class runRoute transforms an instance of Routeable to function from Request to monadic action in the ResourceT monad that returns Maybe Response The return type was chosen to be monadic so routing decisions can depend on side-effects e.g random number or counter for testing IP geolocation lookup etc",
        "hierarchy": "Hails Web Router",
        "module": "Hails.Web.Router",
        "name": "Router",
        "normalized": "",
        "package": "hails",
        "partial": "Router",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Router.html#t:Route",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003eRouteM\u003c/a\u003e\u003c/code\u003e, the common case where the data parameter is '()'.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Router",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Web-Router.html#Route",
        "fct-type": "type",
        "title": "Route"
      },
      "index": {
        "description": "Synonym for RouteM the common case where the data parameter is",
        "hierarchy": "Hails Web Router",
        "module": "Hails.Web.Router",
        "name": "Route",
        "normalized": "",
        "package": "hails",
        "partial": "Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Router.html#t:RouteM",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRouteM\u003c/a\u003e\u003c/code\u003e type is a basic instance of \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e that simply holds\nthe routing function and an arbitrary additional data parameter. In\nmost cases this paramter is simply '()', hence we have a synonym for\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eRouteM\u003c/a\u003e\u003c/code\u003e '()'\u003c/code\u003e called \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e.  The power is derived from the\ninstances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, which allow the simple construction\nof complex routing rules using either lists (\u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e) or do-notation.\nMoreover, because of it's simple type, any \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e can be used as\na \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e (using \u003ccode\u003e\u003ca\u003erouteAll\u003c/a\u003e\u003c/code\u003e or by applying it to \u003ccode\u003e\u003ca\u003erunRoute\u003c/a\u003e\u003c/code\u003e), making\nit possible to leverage the monadic or monoid syntax for any\n\u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCommonly, route functions that construct a \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e only inspect the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\nand other parameters. For example, \u003ccode\u003e\u003ca\u003erouteHost\u003c/a\u003e\u003c/code\u003e looks at the hostname:\n\u003c/p\u003e\u003cpre\u003e\n  routeHost :: Routeable r =\u003e S.ByteString -\u003e r -\u003e Route\n  routeHost host route = Route func ()\n    where func req = if host == serverName req\n                       then runRoute route req\n                       else return Nothing\n\u003c/pre\u003e\u003cp\u003eHowever, because the result of a route is in the\n\u003ccode\u003eResourceT\u003c/code\u003e monad, routes have all the power of an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e and can make\nstate-dependant decisions. For example, it is trivial to implement a route that\nsucceeds for every other request (perhaps for A/B testing):\n\u003c/p\u003e\u003cpre\u003e\n  routeEveryOther :: (Routeable r1, Routeable r2)\n                  =\u003e MVar Int -\u003e r1 -\u003e r2 -\u003e Route\n  routeEveryOther counter r1 r2 = Route func ()\n    where func req = do\n            i \u003ca\u003eliftIO . modifyMVar $ \\i -\u003c/a\u003e\n                    let i' = i+1\n                    in return (i', i')\n            if i \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e 2 == 0\n              then runRoute r1 req\n              else runRoute r2 req\n\u003c/pre\u003e",
        "fct-module": "Hails.Web.Router",
        "fct-package": "hails",
        "fct-signature": "data",
        "fct-source": "src/Hails-Web-Router.html#RouteM",
        "fct-type": "data",
        "title": "RouteM"
      },
      "index": {
        "description": "The RouteM type is basic instance of Routeable that simply holds the routing function and an arbitrary additional data parameter In most cases this paramter is simply hence we have synonym for RouteM called Route The power is derived from the instances of Monad and Monoid which allow the simple construction of complex routing rules using either lists Monoid or do-notation Moreover because of it simple type any Routeable can be used as Route using routeAll or by applying it to runRoute making it possible to leverage the monadic or monoid syntax for any Routeable Commonly route functions that construct Route only inspect the Request and other parameters For example routeHost looks at the hostname routeHost Routeable S.ByteString Route routeHost host route Route func where func req if host serverName req then runRoute route req else return Nothing However because the result of route is in the ResourceT monad routes have all the power of an Application and can make state-dependant decisions For example it is trivial to implement route that succeeds for every other request perhaps for testing routeEveryOther Routeable r1 Routeable r2 MVar Int r1 r2 Route routeEveryOther counter r1 r2 Route func where func req do liftIO modifyMVar let in return if mod then runRoute r1 req else runRoute r2 req",
        "hierarchy": "Hails Web Router",
        "module": "Hails.Web.Router",
        "name": "RouteM",
        "normalized": "",
        "package": "hails",
        "partial": "Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Router.html#t:Routeable",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e types can be converted into a route function using \u003ccode\u003e\u003ca\u003erunRoute\u003c/a\u003e\u003c/code\u003e.\nIf the route is matched it returns a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn general, \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003es are data-dependant (on the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e), but don't have\nto be. For example, \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e that always\nreturns a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n  instance Routeable Application where\n    runRoute app req = app req \u003e\u003e= return . Just\n\u003c/pre\u003e",
        "fct-module": "Hails.Web.Router",
        "fct-package": "hails",
        "fct-signature": "class",
        "fct-source": "src/Hails-Web-Router.html#Routeable",
        "fct-type": "class",
        "title": "Routeable"
      },
      "index": {
        "description": "Routeable types can be converted into route function using runRoute If the route is matched it returns Response otherwise Nothing In general Routeable are data-dependant on the Request but don have to be For example Application is an instance of Routeable that always returns Response instance Routeable Application where runRoute app req app req return Just",
        "hierarchy": "Hails Web Router",
        "module": "Hails.Web.Router",
        "name": "Routeable",
        "normalized": "",
        "package": "hails",
        "partial": "Routeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Router.html#v:Route",
      "description": {
        "fct-module": "Hails.Web.Router",
        "fct-package": "hails",
        "fct-signature": "Route RouteHandler a",
        "fct-source": "src/Hails-Web-Router.html#RouteM",
        "fct-type": "function",
        "title": "Route"
      },
      "index": {
        "description": "",
        "hierarchy": "Hails Web Router",
        "module": "Hails.Web.Router",
        "name": "Route",
        "normalized": "",
        "package": "hails",
        "partial": "Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Router.html#v:mkRouter",
      "description": {
        "fct-descr": "\u003cp\u003eConverts any \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e that can be passed\n directly to a WAI server.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Router",
        "fct-package": "hails",
        "fct-signature": "r -\u003e Application",
        "fct-source": "src/Hails-Web-Router.html#mkRouter",
        "fct-type": "function",
        "title": "mkRouter"
      },
      "index": {
        "description": "Converts any Routeable into an Application that can be passed directly to WAI server",
        "hierarchy": "Hails Web Router",
        "module": "Hails.Web.Router",
        "name": "mkRouter",
        "normalized": "a-\u003eApplication",
        "package": "hails",
        "partial": "Router",
        "signature": "r-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Router.html#v:routeAll",
      "description": {
        "fct-descr": "\u003cp\u003eA route that always matches (useful for converting a \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e into a\n \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Router",
        "fct-package": "hails",
        "fct-signature": "r -\u003e Route",
        "fct-source": "src/Hails-Web-Router.html#routeAll",
        "fct-type": "function",
        "title": "routeAll"
      },
      "index": {
        "description": "route that always matches useful for converting Routeable into Route",
        "hierarchy": "Hails Web Router",
        "module": "Hails.Web.Router",
        "name": "routeAll",
        "normalized": "a-\u003eRoute",
        "package": "hails",
        "partial": "All",
        "signature": "r-\u003eRoute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Router.html#v:routeHost",
      "description": {
        "fct-descr": "\u003cp\u003eMatches on the hostname from the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e. The route only successeds on\n exact matches.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Router",
        "fct-package": "hails",
        "fct-signature": "ByteString -\u003e r -\u003e Route",
        "fct-source": "src/Hails-Web-Router.html#routeHost",
        "fct-type": "function",
        "title": "routeHost"
      },
      "index": {
        "description": "Matches on the hostname from the Request The route only successeds on exact matches",
        "hierarchy": "Hails Web Router",
        "module": "Hails.Web.Router",
        "name": "routeHost",
        "normalized": "ByteString-\u003ea-\u003eRoute",
        "package": "hails",
        "partial": "Host",
        "signature": "ByteString-\u003er-\u003eRoute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Router.html#v:routeMethod",
      "description": {
        "fct-descr": "\u003cp\u003eMatches on the HTTP request method (e.g. \u003ccode\u003e\u003ca\u003eGET\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ePOST\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ePUT\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Router",
        "fct-package": "hails",
        "fct-signature": "StdMethod -\u003e r -\u003e Route",
        "fct-source": "src/Hails-Web-Router.html#routeMethod",
        "fct-type": "function",
        "title": "routeMethod"
      },
      "index": {
        "description": "Matches on the HTTP request method e.g GET POST PUT",
        "hierarchy": "Hails Web Router",
        "module": "Hails.Web.Router",
        "name": "routeMethod",
        "normalized": "StdMethod-\u003ea-\u003eRoute",
        "package": "hails",
        "partial": "Method",
        "signature": "StdMethod-\u003er-\u003eRoute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Router.html#v:routeName",
      "description": {
        "fct-descr": "\u003cp\u003eMatches if the first directory in the path matches the given \u003ccode\u003eByteString\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Router",
        "fct-package": "hails",
        "fct-signature": "ByteString -\u003e r -\u003e Route",
        "fct-source": "src/Hails-Web-Router.html#routeName",
        "fct-type": "function",
        "title": "routeName"
      },
      "index": {
        "description": "Matches if the first directory in the path matches the given ByteString",
        "hierarchy": "Hails Web Router",
        "module": "Hails.Web.Router",
        "name": "routeName",
        "normalized": "ByteString-\u003ea-\u003eRoute",
        "package": "hails",
        "partial": "Name",
        "signature": "ByteString-\u003er-\u003eRoute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Router.html#v:routePattern",
      "description": {
        "fct-descr": "\u003cp\u003eRoutes the given URL pattern. Patterns can include\n directories as well as variable patterns (prefixed with \u003ccode\u003e:\u003c/code\u003e) to be added\n to \u003ccode\u003e\u003ca\u003equeryString\u003c/a\u003e\u003c/code\u003e (see \u003ccode\u003e\u003ca\u003erouteVar\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e /posts/:id\n\u003c/li\u003e\u003cli\u003e /posts/:id/new\n\u003c/li\u003e\u003cli\u003e /:date/posts/:category/new\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Hails.Web.Router",
        "fct-package": "hails",
        "fct-signature": "ByteString -\u003e r -\u003e Route",
        "fct-source": "src/Hails-Web-Router.html#routePattern",
        "fct-type": "function",
        "title": "routePattern"
      },
      "index": {
        "description": "Routes the given URL pattern Patterns can include directories as well as variable patterns prefixed with to be added to queryString see routeVar posts id posts id new date posts category new",
        "hierarchy": "Hails Web Router",
        "module": "Hails.Web.Router",
        "name": "routePattern",
        "normalized": "ByteString-\u003ea-\u003eRoute",
        "package": "hails",
        "partial": "Pattern",
        "signature": "ByteString-\u003er-\u003eRoute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Router.html#v:routeTop",
      "description": {
        "fct-descr": "\u003cp\u003eMatches if the path is empty. Note that this route checks that \u003ccode\u003e\u003ca\u003epathInfo\u003c/a\u003e\u003c/code\u003e\n is empty, so it works as expected when nested under namespaces or other\n routes that pop the \u003ccode\u003e\u003ca\u003epathInfo\u003c/a\u003e\u003c/code\u003e list.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Router",
        "fct-package": "hails",
        "fct-signature": "r -\u003e Route",
        "fct-source": "src/Hails-Web-Router.html#routeTop",
        "fct-type": "function",
        "title": "routeTop"
      },
      "index": {
        "description": "Matches if the path is empty Note that this route checks that pathInfo is empty so it works as expected when nested under namespaces or other routes that pop the pathInfo list",
        "hierarchy": "Hails Web Router",
        "module": "Hails.Web.Router",
        "name": "routeTop",
        "normalized": "a-\u003eRoute",
        "package": "hails",
        "partial": "Top",
        "signature": "r-\u003eRoute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Router.html#v:routeVar",
      "description": {
        "fct-descr": "\u003cp\u003eAlways matches if there is at least one directory in \u003ccode\u003e\u003ca\u003epathInfo\u003c/a\u003e\u003c/code\u003e but and\n adds a parameter to \u003ccode\u003e\u003ca\u003equeryString\u003c/a\u003e\u003c/code\u003e where the key is the supplied\n variable name and the value is the directory consumed from the path.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Router",
        "fct-package": "hails",
        "fct-signature": "ByteString -\u003e r -\u003e Route",
        "fct-source": "src/Hails-Web-Router.html#routeVar",
        "fct-type": "function",
        "title": "routeVar"
      },
      "index": {
        "description": "Always matches if there is at least one directory in pathInfo but and adds parameter to queryString where the key is the supplied variable name and the value is the directory consumed from the path",
        "hierarchy": "Hails Web Router",
        "module": "Hails.Web.Router",
        "name": "routeVar",
        "normalized": "ByteString-\u003ea-\u003eRoute",
        "package": "hails",
        "partial": "Var",
        "signature": "ByteString-\u003er-\u003eRoute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-Router.html#v:runRoute",
      "description": {
        "fct-descr": "\u003cp\u003eRun a route\n\u003c/p\u003e",
        "fct-module": "Hails.Web.Router",
        "fct-package": "hails",
        "fct-signature": "r -\u003e RouteHandler",
        "fct-source": "src/Hails-Web-Router.html#runRoute",
        "fct-type": "method",
        "title": "runRoute"
      },
      "index": {
        "description": "Run route",
        "hierarchy": "Hails Web Router",
        "module": "Hails.Web.Router",
        "name": "runRoute",
        "normalized": "a-\u003eRouteHandler",
        "package": "hails",
        "partial": "Route",
        "signature": "r-\u003eRouteHandler"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-User.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a type corresponding to user's in Hails\nand some helper functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.Web.User",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-Web-User.html",
        "fct-type": "module",
        "title": "User"
      },
      "index": {
        "description": "This module exports type corresponding to user in Hails and some helper functions",
        "hierarchy": "Hails Web User",
        "module": "Hails.Web.User",
        "name": "User",
        "normalized": "",
        "package": "hails",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-User.html#t:UserName",
      "description": {
        "fct-descr": "\u003cp\u003eUser name.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.User",
        "fct-package": "hails",
        "fct-signature": "type",
        "fct-source": "src/Hails-Web-User.html#UserName",
        "fct-type": "type",
        "title": "UserName"
      },
      "index": {
        "description": "User name",
        "hierarchy": "Hails Web User",
        "module": "Hails.Web.User",
        "name": "UserName",
        "normalized": "",
        "package": "hails",
        "partial": "User Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-User.html#v:getHailsUser",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current user.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.User",
        "fct-package": "hails",
        "fct-signature": "Controller (Maybe UserName)",
        "fct-source": "src/Hails-Web-User.html#getHailsUser",
        "fct-type": "function",
        "title": "getHailsUser"
      },
      "index": {
        "description": "Get the current user",
        "hierarchy": "Hails Web User",
        "module": "Hails.Web.User",
        "name": "getHailsUser",
        "normalized": "",
        "package": "hails",
        "partial": "Hails User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web-User.html#v:withUserOrDoAuth",
      "description": {
        "fct-descr": "\u003cp\u003eExecute action with the current user's name. Otherwise, request\n that the user authenticate.\n\u003c/p\u003e",
        "fct-module": "Hails.Web.User",
        "fct-package": "hails",
        "fct-signature": "(UserName -\u003e Controller Response) -\u003e Controller Response",
        "fct-source": "src/Hails-Web-User.html#withUserOrDoAuth",
        "fct-type": "function",
        "title": "withUserOrDoAuth"
      },
      "index": {
        "description": "Execute action with the current user name Otherwise request that the user authenticate",
        "hierarchy": "Hails Web User",
        "module": "Hails.Web.User",
        "name": "withUserOrDoAuth",
        "normalized": "(UserName-\u003eController Response)-\u003eController Response",
        "package": "hails",
        "partial": "User Or Do Auth",
        "signature": "(UserName-\u003eController Response)-\u003eController Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hails/docs/Hails-Web.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module re-exports the routing and controller modules.\nSee each module for their corresponding documentation.\n\u003c/p\u003e\u003cp\u003eThough you can implement a controller using the methods supplied by\nthis module (actually, \u003ca\u003eHails.Web.Router\u003c/a\u003e), we recommend using the\nDSLs provided by \u003ca\u003eHails.Web.Frank\u003c/a\u003e or \u003ca\u003eHails.Web.REST\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Hails.Web",
        "fct-package": "hails",
        "fct-signature": "module",
        "fct-source": "src/Hails-Web.html",
        "fct-type": "module",
        "title": "Web"
      },
      "index": {
        "description": "This module re-exports the routing and controller modules See each module for their corresponding documentation Though you can implement controller using the methods supplied by this module actually Hails.Web.Router we recommend using the DSLs provided by Hails.Web.Frank or Hails.Web.REST",
        "hierarchy": "Hails Web",
        "module": "Hails.Web",
        "name": "Web",
        "normalized": "",
        "package": "hails",
        "partial": "Web",
        "signature": ""
      }
    }
  }
]