[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-generic/docs/Data-Bson-Generic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExamples\n\u003c/p\u003e\u003cpre\u003e data Test0 = A | B | C deriving (Generic, Typeable, Show, Eq)\n instance ToBSON Test0\n instance FromBSON Test0\n\n (fromBSON $ toBSON A) :: Maybe Test0\n\u003c/pre\u003e\u003cpre\u003e data Test1 = Test1 String String deriving (Generic, Typeable, Show, Eq)\n instance ToBSON Test1\n instance FromBSON Test1\n\n (fromBSON $ toBSON $ Test1 \"aa\" \"bb\") :: Maybe Test1\n\u003c/pre\u003e\u003cpre\u003e data Test2 = Test2 { test20 :: String, test21 :: String } deriving (Generic, Typeable, Show, Eq)\n instance ToBSON Test2\n instance FromBSON Test2\n\n (fromBSON $ toBSON $ Test2 \"aa\" \"bb\") :: Maybe Test2\n\u003c/pre\u003e\u003cpre\u003e data Test3 = Test3 { test30 :: Test2, test31 :: String } deriving (Generic, Typeable, Show, Eq)\n instance ToBSON Test3\n instance FromBSON Test3\n\n (fromBSON $ toBSON $ Test3 (Test2 \"aa\" \"bb\") \"cc\") :: Maybe Test3\n\u003c/pre\u003e\u003cpre\u003e data Test4 = Test4 { test4Key :: ObjectKey, test4 :: String } deriving (Generic, Typeable, Show, Eq)\n instance ToBSON Test4\n instance FromBSON Test4\n\n (fromBSON $ toBSON $ Test4 (ObjectKey . Just $ unsafePerformIO genObjectId) \"something\") :: Maybe Test4\n (fromBSON $ toBSON $ Test4 (ObjectKey Nothing) \"something\") :: Maybe Test4\n\u003c/pre\u003e\u003cpre\u003e data Comment = Comment { author :: String, comments :: [Comment] } deriving (Generic, Typeable, Show, Eq)\n instance ToBSON Comment\n instance FromBSON Comment\n\n (fromBSON $ toBSON $ Comment \"Joe1\" [Comment \"Joe2\" [], Comment \"Joe3\" [Comment \"Joe4\" [], Comment \"Joe5\" []]]) :: Maybe Comment\n\u003c/pre\u003e\u003cp\u003eRepresentation\n\u003c/p\u003e\u003cpre\u003e toBSON $ Test2 \"aa\" \"bb\"\n\n [ test20: \"aa\", test21: \"bb\" ]\n\u003c/pre\u003e\u003cpre\u003e toBSON $ Test3 (Test2 \"aa\" \"bb\") \"cc\"\n\n [ test30: [ test20: \"aa\", test21: \"bb\"], test31: \"cc\" ]\n\u003c/pre\u003e\u003cpre\u003e toBSON $ Test4 (ObjectKey . Just $ unsafePerformIO genObjectId) \"something\"\n\n [ _id: 4f226c27900faa06ab000001, test4: \"something\" ]\n\u003c/pre\u003e\u003cpre\u003e toBSON $ Test4 (ObjectKey Nothing) \"something\"\n\n [ test4: \"something\" ]\n\u003c/pre\u003e\u003cpre\u003e toBSON $ Comment \"Joe1\" [ Comment \"Joe2\" []\n                         , Comment \"Joe3\" [ Comment \"Joe4\" []\n                                          , Comment \"Joe5\" []\n                                          ]\n                         ]\n\n [ author: \"Joe1\", comments: [ [ author: \"Joe2\", comments: []]\n                             , [ author: \"Joe3\", comments: [ [ author: \"Joe4\", comments: []]\n                                                           , [ author: \"Joe5\", comments: []]\n                                                           ]]\n                             ]]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Bson.Generic",
        "fct-package": "bson-generic",
        "fct-signature": "module",
        "fct-source": "src/Data-Bson-Generic.html",
        "fct-type": "module",
        "title": "Generic"
      },
      "index": {
        "description": "Examples data Test0 deriving Generic Typeable Show Eq instance ToBSON Test0 instance FromBSON Test0 fromBSON toBSON Maybe Test0 data Test1 Test1 String String deriving Generic Typeable Show Eq instance ToBSON Test1 instance FromBSON Test1 fromBSON toBSON Test1 aa bb Maybe Test1 data Test2 Test2 test20 String test21 String deriving Generic Typeable Show Eq instance ToBSON Test2 instance FromBSON Test2 fromBSON toBSON Test2 aa bb Maybe Test2 data Test3 Test3 test30 Test2 test31 String deriving Generic Typeable Show Eq instance ToBSON Test3 instance FromBSON Test3 fromBSON toBSON Test3 Test2 aa bb cc Maybe Test3 data Test4 Test4 test4Key ObjectKey test4 String deriving Generic Typeable Show Eq instance ToBSON Test4 instance FromBSON Test4 fromBSON toBSON Test4 ObjectKey Just unsafePerformIO genObjectId something Maybe Test4 fromBSON toBSON Test4 ObjectKey Nothing something Maybe Test4 data Comment Comment author String comments Comment deriving Generic Typeable Show Eq instance ToBSON Comment instance FromBSON Comment fromBSON toBSON Comment Joe1 Comment Joe2 Comment Joe3 Comment Joe4 Comment Joe5 Maybe Comment Representation toBSON Test2 aa bb test20 aa test21 bb toBSON Test3 Test2 aa bb cc test30 test20 aa test21 bb test31 cc toBSON Test4 ObjectKey Just unsafePerformIO genObjectId something id f226c27900faa06ab000001 test4 something toBSON Test4 ObjectKey Nothing something test4 something toBSON Comment Joe1 Comment Joe2 Comment Joe3 Comment Joe4 Comment Joe5 author Joe1 comments author Joe2 comments author Joe3 comments author Joe4 comments author Joe5 comments",
        "hierarchy": "Data Bson Generic",
        "module": "Data.Bson.Generic",
        "name": "Generic",
        "normalized": "",
        "package": "bson-generic",
        "partial": "Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-generic/docs/Data-Bson-Generic.html#t:FromBSON",
      "description": {
        "fct-module": "Data.Bson.Generic",
        "fct-package": "bson-generic",
        "fct-signature": "class",
        "fct-source": "src/Data-Bson-Generic.html#FromBSON",
        "fct-type": "class",
        "title": "FromBSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bson Generic",
        "module": "Data.Bson.Generic",
        "name": "FromBSON",
        "normalized": "",
        "package": "bson-generic",
        "partial": "From BSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-generic/docs/Data-Bson-Generic.html#t:ObjectKey",
      "description": {
        "fct-module": "Data.Bson.Generic",
        "fct-package": "bson-generic",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Bson-Generic.html#ObjectKey",
        "fct-type": "newtype",
        "title": "ObjectKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bson Generic",
        "module": "Data.Bson.Generic",
        "name": "ObjectKey",
        "normalized": "",
        "package": "bson-generic",
        "partial": "Object Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-generic/docs/Data-Bson-Generic.html#t:ToBSON",
      "description": {
        "fct-module": "Data.Bson.Generic",
        "fct-package": "bson-generic",
        "fct-signature": "class",
        "fct-source": "src/Data-Bson-Generic.html#ToBSON",
        "fct-type": "class",
        "title": "ToBSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bson Generic",
        "module": "Data.Bson.Generic",
        "name": "ToBSON",
        "normalized": "",
        "package": "bson-generic",
        "partial": "To BSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-generic/docs/Data-Bson-Generic.html#v:ObjectKey",
      "description": {
        "fct-module": "Data.Bson.Generic",
        "fct-package": "bson-generic",
        "fct-signature": "ObjectKey",
        "fct-source": "src/Data-Bson-Generic.html#ObjectKey",
        "fct-type": "function",
        "title": "ObjectKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bson Generic",
        "module": "Data.Bson.Generic",
        "name": "ObjectKey",
        "normalized": "",
        "package": "bson-generic",
        "partial": "Object Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-generic/docs/Data-Bson-Generic.html#v:constructorLabel",
      "description": {
        "fct-module": "Data.Bson.Generic",
        "fct-package": "bson-generic",
        "fct-signature": "Label",
        "fct-source": "src/Data-Bson-Generic.html#constructorLabel",
        "fct-type": "function",
        "title": "constructorLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bson Generic",
        "module": "Data.Bson.Generic",
        "name": "constructorLabel",
        "normalized": "",
        "package": "bson-generic",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-generic/docs/Data-Bson-Generic.html#v:fromBSON",
      "description": {
        "fct-module": "Data.Bson.Generic",
        "fct-package": "bson-generic",
        "fct-signature": "Document -\u003e Maybe a",
        "fct-source": "src/Data-Bson-Generic.html#fromBSON",
        "fct-type": "method",
        "title": "fromBSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bson Generic",
        "module": "Data.Bson.Generic",
        "name": "fromBSON",
        "normalized": "Document-\u003eMaybe a",
        "package": "bson-generic",
        "partial": "BSON",
        "signature": "Document-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-generic/docs/Data-Bson-Generic.html#v:keyLabel",
      "description": {
        "fct-module": "Data.Bson.Generic",
        "fct-package": "bson-generic",
        "fct-signature": "Label",
        "fct-source": "src/Data-Bson-Generic.html#keyLabel",
        "fct-type": "function",
        "title": "keyLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bson Generic",
        "module": "Data.Bson.Generic",
        "name": "keyLabel",
        "normalized": "",
        "package": "bson-generic",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-generic/docs/Data-Bson-Generic.html#v:toBSON",
      "description": {
        "fct-module": "Data.Bson.Generic",
        "fct-package": "bson-generic",
        "fct-signature": "a -\u003e Document",
        "fct-source": "src/Data-Bson-Generic.html#toBSON",
        "fct-type": "method",
        "title": "toBSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bson Generic",
        "module": "Data.Bson.Generic",
        "name": "toBSON",
        "normalized": "a-\u003eDocument",
        "package": "bson-generic",
        "partial": "BSON",
        "signature": "a-\u003eDocument"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bson-generic/docs/Data-Bson-Generic.html#v:unObjectKey",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Bson.Generic",
        "fct-package": "bson-generic",
        "fct-signature": "Maybe ObjectId",
        "fct-source": "src/Data-Bson-Generic.html#ObjectKey",
        "fct-type": "function",
        "title": "unObjectKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bson Generic",
        "module": "Data.Bson.Generic",
        "name": "unObjectKey",
        "normalized": "",
        "package": "bson-generic",
        "partial": "Object Key",
        "signature": ""
      }
    }
  }
]