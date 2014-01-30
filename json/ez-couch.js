[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEZCouch is a library which takes a mission of bringing the topmost level of abstraction for working with CouchDB in Haskell. It abstracts away from loose concepts of this database and brings a strict static API over standard ADTs. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "module",
        "fct-source": "src/EZCouch.html",
        "fct-type": "module",
        "title": "EZCouch"
      },
      "index": {
        "description": "EZCouch is library which takes mission of bringing the topmost level of abstraction for working with CouchDB in Haskell It abstracts away from loose concepts of this database and brings strict static API over standard ADTs",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "EZCouch",
        "normalized": "",
        "package": "ez-couch",
        "partial": "EZCouch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:ConnectionSettings",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "data",
        "fct-source": "src/EZCouch-Action.html#ConnectionSettings",
        "fct-type": "data",
        "title": "ConnectionSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ConnectionSettings",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Connection Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:EZCouchException",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "data",
        "fct-source": "src/EZCouch-Types.html#EZCouchException",
        "fct-type": "data",
        "title": "EZCouchException"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "EZCouchException",
        "normalized": "",
        "package": "ez-couch",
        "partial": "EZCouch Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:Entity",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "class",
        "fct-source": "src/EZCouch-Entity.html#Entity",
        "fct-type": "class",
        "title": "Entity"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "Entity",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Entity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:Environment",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "type",
        "fct-source": "src/EZCouch-Action.html#Environment",
        "fct-type": "type",
        "title": "Environment"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "Environment",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Environment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:FromJSON",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be converted from JSON, with the possibility of\n failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003emzero\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e is missing a required key, or\n the value is of the wrong type.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance FromJSON Coord where\n   parseJSON (\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e v) = Coord    \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e\n                          v \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e \"x\" \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e\n                          v \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e \"y\"\n\n-- A non-\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e value is of the wrong type, so use \u003ccode\u003emzero\u003c/code\u003e to fail.\n   parseJSON _          = \u003ccode\u003emzero\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003efromJSON\u003c/code\u003e function that parses to\n any type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions, \u003ccode\u003eparseJSON\u003c/code\u003e will have a default\n generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use this, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your datatype and\n declare a \u003ccode\u003eFromJSON\u003c/code\u003e instance for your datatype without giving a definition\n for \u003ccode\u003eparseJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance FromJSON Coord\n\u003c/pre\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "FromJSON"
      },
      "index": {
        "description": "type that can be converted from JSON with the possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if an Object is missing required key or the value is of the wrong type An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance FromJSON Coord where parseJSON Object Coord non Object value is of the wrong type so use mzero to fail parseJSON mzero Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your FromJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic fromJSON function that parses to any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions parseJSON will have default generic implementation To use this simply add deriving Generic clause to your datatype and declare FromJSON instance for your datatype without giving definition for parseJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance FromJSON Coord",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "FromJSON",
        "normalized": "",
        "package": "ez-couch",
        "partial": "From JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:Isolation",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "data",
        "fct-source": "src/EZCouch-EntityIsolation.html#Isolation",
        "fct-type": "data",
        "title": "Isolation"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "Isolation",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Isolation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:KeysSelection",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "data",
        "fct-source": "src/EZCouch-ReadAction.html#KeysSelection",
        "fct-type": "data",
        "title": "KeysSelection"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "KeysSelection",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Keys Selection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:MonadAction",
      "description": {
        "fct-descr": "\u003cp\u003eAll EZCouch operations are performed in this monad.\n\u003c/p\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "class",
        "fct-source": "src/EZCouch-Action.html#MonadAction",
        "fct-type": "class",
        "title": "MonadAction"
      },
      "index": {
        "description": "All EZCouch operations are performed in this monad",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "MonadAction",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Monad Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:Persisted",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper for entity values which preserves the information required for\n identifying the appropriate documents in the db.\n\u003c/p\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "data",
        "fct-source": "src/EZCouch-Types.html#Persisted",
        "fct-type": "data",
        "title": "Persisted"
      },
      "index": {
        "description": "wrapper for entity values which preserves the information required for identifying the appropriate documents in the db",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "Persisted",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Persisted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:ToJSON",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be converted to JSON.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance ToJSON Coord where\n   toJSON (Coord x y) = \u003ccode\u003e\u003ca\u003eobject\u003c/a\u003e\u003c/code\u003e [\"x\" \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e x, \"y\" \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e y]\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003etoJSON\u003c/code\u003e function that accepts any\n type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions (GHC 7.2 and newer),\n \u003ccode\u003etoJSON\u003c/code\u003e will have a default generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use the latter option, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your\n datatype and declare a \u003ccode\u003eToJSON\u003c/code\u003e instance for your datatype without giving a\n definition for \u003ccode\u003etoJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance ToJSON Coord\n\u003c/pre\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "ToJSON"
      },
      "index": {
        "description": "type that can be converted to JSON An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance ToJSON Coord where toJSON Coord object Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your ToJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic toJSON function that accepts any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions GHC and newer toJSON will have default generic implementation To use the latter option simply add deriving Generic clause to your datatype and declare ToJSON instance for your datatype without giving definition for toJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance ToJSON Coord",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ToJSON",
        "normalized": "",
        "package": "ez-couch",
        "partial": "To JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:View",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "data",
        "fct-source": "src/EZCouch-View.html#View",
        "fct-type": "data",
        "title": "View"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "View",
        "normalized": "",
        "package": "ez-couch",
        "partial": "View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:ViewKey",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "data",
        "fct-source": "src/EZCouch-View.html#ViewKey",
        "fct-type": "data",
        "title": "ViewKey"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ViewKey",
        "normalized": "",
        "package": "ez-couch",
        "partial": "View Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ConnectionException",
      "description": {
        "fct-descr": "\u003cp\u003eEither a connection got closed or a timeout passed\n\u003c/p\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "ConnectionException Text",
        "fct-source": "src/EZCouch-Types.html#EZCouchException",
        "fct-type": "function",
        "title": "ConnectionException"
      },
      "index": {
        "description": "Either connection got closed or timeout passed",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ConnectionException",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Connection Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ConnectionSettings",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "ConnectionSettings",
        "fct-source": "src/EZCouch-Action.html#ConnectionSettings",
        "fct-type": "function",
        "title": "ConnectionSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ConnectionSettings",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Connection Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:KeysSelectionAll",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "KeysSelectionAll",
        "fct-source": "src/EZCouch-ReadAction.html#KeysSelection",
        "fct-type": "function",
        "title": "KeysSelectionAll"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "KeysSelectionAll",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Keys Selection All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:KeysSelectionList",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "KeysSelectionList [k]",
        "fct-source": "src/EZCouch-ReadAction.html#KeysSelection",
        "fct-type": "function",
        "title": "KeysSelectionList"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "KeysSelectionList",
        "normalized": "KeysSelectionList[a]",
        "package": "ez-couch",
        "partial": "Keys Selection List",
        "signature": "KeysSelectionList[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:KeysSelectionRange",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "KeysSelectionRange k k",
        "fct-source": "src/EZCouch-ReadAction.html#KeysSelection",
        "fct-type": "function",
        "title": "KeysSelectionRange"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "KeysSelectionRange",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Keys Selection Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:KeysSelectionRangeEnd",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "KeysSelectionRangeEnd k",
        "fct-source": "src/EZCouch-ReadAction.html#KeysSelection",
        "fct-type": "function",
        "title": "KeysSelectionRangeEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "KeysSelectionRangeEnd",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Keys Selection Range End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:KeysSelectionRangeStart",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "KeysSelectionRangeStart k",
        "fct-source": "src/EZCouch-ReadAction.html#KeysSelection",
        "fct-type": "function",
        "title": "KeysSelectionRangeStart"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "KeysSelectionRangeStart",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Keys Selection Range Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:OperationException",
      "description": {
        "fct-descr": "\u003cp\u003eAn operation failed, e.g. a document couldn't be created or deleted.\n\u003c/p\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "OperationException Text",
        "fct-source": "src/EZCouch-Types.html#EZCouchException",
        "fct-type": "function",
        "title": "OperationException"
      },
      "index": {
        "description": "An operation failed e.g document couldn be created or deleted",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "OperationException",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Operation Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ParsingException",
      "description": {
        "fct-descr": "\u003cp\u003eA response from CouchDB could not be parsed.\n\u003c/p\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "ParsingException Text",
        "fct-source": "src/EZCouch-Types.html#EZCouchException",
        "fct-type": "function",
        "title": "ParsingException"
      },
      "index": {
        "description": "response from CouchDB could not be parsed",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ParsingException",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Parsing Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:Persisted",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Persisted",
        "fct-source": "src/EZCouch-Types.html#Persisted",
        "fct-type": "function",
        "title": "Persisted"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "Persisted",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Persisted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ResponseException",
      "description": {
        "fct-descr": "\u003cp\u003eE.g., server provided an unexpected response\n\u003c/p\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "ResponseException Text",
        "fct-source": "src/EZCouch-Types.html#EZCouchException",
        "fct-type": "function",
        "title": "ResponseException"
      },
      "index": {
        "description": "E.g server provided an unexpected response",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ResponseException",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Response Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ServerException",
      "description": {
        "fct-descr": "\u003cp\u003eA weird status 500 response\n\u003c/p\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "ServerException Text",
        "fct-source": "src/EZCouch-Types.html#EZCouchException",
        "fct-type": "function",
        "title": "ServerException"
      },
      "index": {
        "description": "weird status response",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ServerException",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Server Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewById",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "View entity Text",
        "fct-source": "src/EZCouch-View.html#View",
        "fct-type": "function",
        "title": "ViewById"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ViewById",
        "normalized": "",
        "package": "ez-couch",
        "partial": "View By Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewByKeys1",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "ViewKey a -\u003e View entity a",
        "fct-source": "src/EZCouch-View.html#View",
        "fct-type": "function",
        "title": "ViewByKeys1"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ViewByKeys1",
        "normalized": "ViewKey a-\u003eView b a",
        "package": "ez-couch",
        "partial": "View By Keys",
        "signature": "ViewKey a-\u003eView entity a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewByKeys2",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "ViewKey a -\u003e ViewKey b -\u003e View entity (a, b)",
        "fct-source": "src/EZCouch-View.html#View",
        "fct-type": "function",
        "title": "ViewByKeys2"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ViewByKeys2",
        "normalized": "ViewKey a-\u003eViewKey b-\u003eView c(a,b)",
        "package": "ez-couch",
        "partial": "View By Keys",
        "signature": "ViewKey a-\u003eViewKey b-\u003eView entity(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewByKeys3",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "ViewKey a -\u003e ViewKey b -\u003e ViewKey c -\u003e View entity (a, b, c)",
        "fct-source": "src/EZCouch-View.html#View",
        "fct-type": "function",
        "title": "ViewByKeys3"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ViewByKeys3",
        "normalized": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eView d(a,b,c)",
        "package": "ez-couch",
        "partial": "View By Keys",
        "signature": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eView entity(a,b,c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewByKeys4",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "ViewKey a -\u003e ViewKey b -\u003e ViewKey c -\u003e ViewKey d -\u003e View entity (a, b, c, d)",
        "fct-source": "src/EZCouch-View.html#View",
        "fct-type": "function",
        "title": "ViewByKeys4"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ViewByKeys4",
        "normalized": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eViewKey d-\u003eView e(a,b,c,d)",
        "package": "ez-couch",
        "partial": "View By Keys",
        "signature": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eViewKey d-\u003eView entity(a,b,c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewByKeys5",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "ViewKey a -\u003e ViewKey b -\u003e ViewKey c -\u003e ViewKey d -\u003e ViewKey e -\u003e View entity (a, b, c, d, e)",
        "fct-source": "src/EZCouch-View.html#View",
        "fct-type": "function",
        "title": "ViewByKeys5"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ViewByKeys5",
        "normalized": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eViewKey d-\u003eViewKey e-\u003eView f(a,b,c,d,e)",
        "package": "ez-couch",
        "partial": "View By Keys",
        "signature": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eViewKey d-\u003eViewKey e-\u003eView entity(a,b,c,d,e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewByKeys6",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "ViewKey a -\u003e ViewKey b -\u003e ViewKey c -\u003e ViewKey d -\u003e ViewKey e -\u003e ViewKey f -\u003e View entity (a, b, c, d, e, f)",
        "fct-source": "src/EZCouch-View.html#View",
        "fct-type": "function",
        "title": "ViewByKeys6"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ViewByKeys6",
        "normalized": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eViewKey d-\u003eViewKey e-\u003eViewKey f-\u003eView g(a,b,c,d,e,f)",
        "package": "ez-couch",
        "partial": "View By Keys",
        "signature": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eViewKey d-\u003eViewKey e-\u003eViewKey f-\u003eView entity(a,b,c,d,e,f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewByKeys7",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "ViewKey a -\u003e ViewKey b -\u003e ViewKey c -\u003e ViewKey d -\u003e ViewKey e -\u003e ViewKey f -\u003e ViewKey g -\u003e View entity (a, b, c, d, e, f, g)",
        "fct-source": "src/EZCouch-View.html#View",
        "fct-type": "function",
        "title": "ViewByKeys7"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ViewByKeys7",
        "normalized": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eViewKey d-\u003eViewKey e-\u003eViewKey f-\u003eViewKey g-\u003eView h(a,b,c,d,e,f,g)",
        "package": "ez-couch",
        "partial": "View By Keys",
        "signature": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eViewKey d-\u003eViewKey e-\u003eViewKey f-\u003eViewKey g-\u003eView entity(a,b,c,d,e,f,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewKeyField",
      "description": {
        "fct-descr": "\u003cp\u003eA path to a field value.\n\u003c/p\u003e\u003cp\u003eAssuming the following record declarations:\n\u003c/p\u003e\u003cpre\u003e data A = A { b :: B }\n data B = B { c :: Int }\n\u003c/pre\u003e\u003cp\u003eA path value of \u003ccode\u003e\"b.c\"\u003c/code\u003e will emit the values of the \u003ccode\u003ec\u003c/code\u003e field of a JSON \n object representing the record \u003ccode\u003eB\u003c/code\u003e in a view key of type \u003ccode\u003eViewKey A\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYes, it's not static. But it's probably the only place in the library that \n the compiler doesn't check for you.\n\u003c/p\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "ViewKeyField Text",
        "fct-source": "src/EZCouch-View.html#ViewKey",
        "fct-type": "function",
        "title": "ViewKeyField"
      },
      "index": {
        "description": "path to field value Assuming the following record declarations data data Int path value of b.c will emit the values of the field of JSON object representing the record in view key of type ViewKey Yes it not static But it probably the only place in the library that the compiler doesn check for you",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ViewKeyField",
        "normalized": "",
        "package": "ez-couch",
        "partial": "View Key Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewKeyRandom",
      "description": {
        "fct-descr": "\u003cp\u003eThis will emit a JavaScript \u003ccode\u003eMath.random()\u003c/code\u003e value as a key. This is what \n makes the querying for random entities possible.\n\u003c/p\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "ViewKeyRandom",
        "fct-source": "src/EZCouch-View.html#ViewKey",
        "fct-type": "function",
        "title": "ViewKeyRandom"
      },
      "index": {
        "description": "This will emit JavaScript Math.random value as key This is what makes the querying for random entities possible",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "ViewKeyRandom",
        "normalized": "",
        "package": "ez-couch",
        "partial": "View Key Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:connectionSettingsAuth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Maybe (Text, Text)",
        "fct-source": "src/EZCouch-Action.html#ConnectionSettings",
        "fct-type": "function",
        "title": "connectionSettingsAuth"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "connectionSettingsAuth",
        "normalized": "Maybe(Text,Text)",
        "package": "ez-couch",
        "partial": "Settings Auth",
        "signature": "Maybe(Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:connectionSettingsDatabase",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Text",
        "fct-source": "src/EZCouch-Action.html#ConnectionSettings",
        "fct-type": "function",
        "title": "connectionSettingsDatabase"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "connectionSettingsDatabase",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Settings Database",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:connectionSettingsHost",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Text",
        "fct-source": "src/EZCouch-Action.html#ConnectionSettings",
        "fct-type": "function",
        "title": "connectionSettingsHost"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "connectionSettingsHost",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Settings Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:connectionSettingsPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Int",
        "fct-source": "src/EZCouch-Action.html#ConnectionSettings",
        "fct-type": "function",
        "title": "connectionSettingsPort"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "connectionSettingsPort",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Settings Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:createEntities",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "[a] -\u003e m [Persisted a]",
        "fct-source": "src/EZCouch-WriteAction.html#createEntities",
        "fct-type": "function",
        "title": "createEntities"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "createEntities",
        "normalized": "[a]-\u003eb[Persisted a]",
        "package": "ez-couch",
        "partial": "Entities",
        "signature": "[a]-\u003em[Persisted a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:createEntity",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "a -\u003e m (Persisted a)",
        "fct-source": "src/EZCouch-WriteAction.html#createEntity",
        "fct-type": "function",
        "title": "createEntity"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "createEntity",
        "normalized": "a-\u003eb(Persisted a)",
        "package": "ez-couch",
        "partial": "Entity",
        "signature": "a-\u003em(Persisted a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:defaultPort",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Int",
        "fct-source": "src/EZCouch-Action.html#defaultPort",
        "fct-type": "function",
        "title": "defaultPort"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "defaultPort",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:deleteEntities",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "[Persisted a] -\u003e m ()",
        "fct-source": "src/EZCouch-WriteAction.html#deleteEntities",
        "fct-type": "function",
        "title": "deleteEntities"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "deleteEntities",
        "normalized": "[Persisted a]-\u003eb()",
        "package": "ez-couch",
        "partial": "Entities",
        "signature": "[Persisted a]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:deleteEntity",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Persisted a -\u003e m ()",
        "fct-source": "src/EZCouch-WriteAction.html#deleteEntity",
        "fct-type": "function",
        "title": "deleteEntity"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "deleteEntity",
        "normalized": "Persisted a-\u003eb()",
        "package": "ez-couch",
        "partial": "Entity",
        "signature": "Persisted a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:deleteIsolation",
      "description": {
        "fct-descr": "\u003cp\u003eGet rid of both the isolation and the entity. The entity won't get restored\n by the sweeper daemon after.\n\u003c/p\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Isolation e -\u003e m ()",
        "fct-source": "src/EZCouch-EntityIsolation.html#deleteIsolation",
        "fct-type": "function",
        "title": "deleteIsolation"
      },
      "index": {
        "description": "Get rid of both the isolation and the entity The entity won get restored by the sweeper daemon after",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "deleteIsolation",
        "normalized": "Isolation a-\u003eb()",
        "package": "ez-couch",
        "partial": "Isolation",
        "signature": "Isolation e-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:deleteIsolations",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "[Isolation e] -\u003e m ()",
        "fct-source": "src/EZCouch-EntityIsolation.html#deleteIsolations",
        "fct-type": "function",
        "title": "deleteIsolations"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "deleteIsolations",
        "normalized": "[Isolation a]-\u003eb()",
        "package": "ez-couch",
        "partial": "Isolations",
        "signature": "[Isolation e]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:entityType",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "a -\u003e Text",
        "fct-source": "src/EZCouch-Entity.html#entityType",
        "fct-type": "method",
        "title": "entityType"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "entityType",
        "normalized": "a-\u003eText",
        "package": "ez-couch",
        "partial": "Type",
        "signature": "a-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:isolateEntities",
      "description": {
        "fct-descr": "\u003cp\u003eDoes the same as \u003ccode\u003e\u003ca\u003eisolateEntity\u003c/a\u003e\u003c/code\u003e but for multiple entities and in a single\n request.\n\u003c/p\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Int -\u003e [Persisted e] -\u003e m [Maybe (Isolation e)]",
        "fct-source": "src/EZCouch-EntityIsolation.html#isolateEntities",
        "fct-type": "function",
        "title": "isolateEntities"
      },
      "index": {
        "description": "Does the same as isolateEntity but for multiple entities and in single request",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "isolateEntities",
        "normalized": "Int-\u003e[Persisted a]-\u003eb[Maybe(Isolation a)]",
        "package": "ez-couch",
        "partial": "Entities",
        "signature": "Int-\u003e[Persisted e]-\u003em[Maybe(Isolation e)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:isolateEntity",
      "description": {
        "fct-descr": "\u003cp\u003eProtect the entity from being accessed by concurrent clients until you \n release it using \u003ccode\u003e\u003ca\u003ereleaseIsolation\u003c/a\u003e\u003c/code\u003e, delete it with the isolation using \n \u003ccode\u003e\u003ca\u003edeleteIsolation\u003c/a\u003e\u003c/code\u003e, or the timeout passes and it gets considered to be zombie \n and gets released automatically some time later.\n\u003c/p\u003e\u003cp\u003eThe automatic releasing gets done by a sweeper daemon running in background\n when EZCouch is being used on a timely basis and on its launch.\n\u003c/p\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Int-\u003e Persisted e-\u003e m (Maybe (Isolation e))",
        "fct-type": "function",
        "title": "isolateEntity"
      },
      "index": {
        "description": "Protect the entity from being accessed by concurrent clients until you release it using releaseIsolation delete it with the isolation using deleteIsolation or the timeout passes and it gets considered to be zombie and gets released automatically some time later The automatic releasing gets done by sweeper daemon running in background when EZCouch is being used on timely basis and on its launch",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "isolateEntity",
        "normalized": "Int-\u003ePersisted a-\u003eb(Maybe(Isolation a))",
        "package": "ez-couch",
        "partial": "Entity",
        "signature": "Int-\u003ePersisted e-\u003em(Maybe(Isolation e))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:isolationEntity",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Isolation t1 -\u003e t1",
        "fct-source": "src/EZCouch-EntityIsolation.html#isolationEntity",
        "fct-type": "function",
        "title": "isolationEntity"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "isolationEntity",
        "normalized": "Isolation a-\u003ea",
        "package": "ez-couch",
        "partial": "Entity",
        "signature": "Isolation t-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:parseJSON",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Value -\u003e Parser a",
        "fct-type": "method",
        "title": "parseJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "parseJSON",
        "normalized": "Value-\u003eParser a",
        "package": "ez-couch",
        "partial": "JSON",
        "signature": "Value-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:persistedId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Text",
        "fct-source": "src/EZCouch-Types.html#Persisted",
        "fct-type": "function",
        "title": "persistedId"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "persistedId",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:persistedIdHashPart",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Persisted a -\u003e Text",
        "fct-source": "src/EZCouch-Types.html#persistedIdHashPart",
        "fct-type": "function",
        "title": "persistedIdHashPart"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "persistedIdHashPart",
        "normalized": "Persisted a-\u003eText",
        "package": "ez-couch",
        "partial": "Id Hash Part",
        "signature": "Persisted a-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:persistedRev",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Text",
        "fct-source": "src/EZCouch-Types.html#Persisted",
        "fct-type": "function",
        "title": "persistedRev"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "persistedRev",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Rev",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:persistedValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "a",
        "fct-source": "src/EZCouch-Types.html#Persisted",
        "fct-type": "function",
        "title": "persistedValue"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "persistedValue",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:readCount",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "View a k-\u003e KeysSelection k-\u003e m Int",
        "fct-type": "function",
        "title": "readCount"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "readCount",
        "normalized": "View a b-\u003eKeysSelection b-\u003ec Int",
        "package": "ez-couch",
        "partial": "Count",
        "signature": "View a k-\u003eKeysSelection k-\u003em Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:readEntities",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "View a k-\u003e KeysSelection k-\u003e Int-\u003e Maybe Int-\u003e Bool-\u003e m [Persisted a]",
        "fct-type": "function",
        "title": "readEntities"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "readEntities",
        "normalized": "View a b-\u003eKeysSelection b-\u003eInt-\u003eMaybe Int-\u003eBool-\u003ec[Persisted a]",
        "package": "ez-couch",
        "partial": "Entities",
        "signature": "View a k-\u003eKeysSelection k-\u003eInt-\u003eMaybe Int-\u003eBool-\u003em[Persisted a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:readEntity",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "View a k-\u003e KeysSelection k-\u003e Int-\u003e Bool-\u003e m (Maybe (Persisted a))",
        "fct-type": "function",
        "title": "readEntity"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "readEntity",
        "normalized": "View a b-\u003eKeysSelection b-\u003eInt-\u003eBool-\u003ec(Maybe(Persisted a))",
        "package": "ez-couch",
        "partial": "Entity",
        "signature": "View a k-\u003eKeysSelection k-\u003eInt-\u003eBool-\u003em(Maybe(Persisted a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:readKeys",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "View a k-\u003e KeysSelection k-\u003e m [k]",
        "fct-type": "function",
        "title": "readKeys"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "readKeys",
        "normalized": "View a b-\u003eKeysSelection b-\u003ec[b]",
        "package": "ez-couch",
        "partial": "Keys",
        "signature": "View a k-\u003eKeysSelection k-\u003em[k]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:readKeysExist",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "View a k-\u003e KeysSelection k-\u003e m [(k, Bool)]",
        "fct-type": "function",
        "title": "readKeysExist"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "readKeysExist",
        "normalized": "View a b-\u003eKeysSelection b-\u003ec[(b,Bool)]",
        "package": "ez-couch",
        "partial": "Keys Exist",
        "signature": "View a k-\u003eKeysSelection k-\u003em[(k,Bool)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:readRandomEntities",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Maybe Int-\u003e m [Persisted a]",
        "fct-type": "function",
        "title": "readRandomEntities"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "readRandomEntities",
        "normalized": "Maybe Int-\u003ea[Persisted b]",
        "package": "ez-couch",
        "partial": "Random Entities",
        "signature": "Maybe Int-\u003em[Persisted a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:readTime",
      "description": {
        "fct-descr": "\u003cp\u003eCurrent time according to server. This function doesn't actually emit any\n requests to the server, calculating the value from a deviation of local time\n from server time determined at the beginning of the EZCouch session.\n\u003c/p\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "m UTCTime",
        "fct-source": "src/EZCouch-Time.html#readTime",
        "fct-type": "function",
        "title": "readTime"
      },
      "index": {
        "description": "Current time according to server This function doesn actually emit any requests to the server calculating the value from deviation of local time from server time determined at the beginning of the EZCouch session",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "readTime",
        "normalized": "",
        "package": "ez-couch",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:releaseIsolation",
      "description": {
        "fct-descr": "\u003cp\u003eRestore the entity document under the same id and drop the isolation.\n\u003c/p\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Isolation e-\u003e m (Persisted e)",
        "fct-type": "function",
        "title": "releaseIsolation"
      },
      "index": {
        "description": "Restore the entity document under the same id and drop the isolation",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "releaseIsolation",
        "normalized": "Isolation a-\u003eb(Persisted a)",
        "package": "ez-couch",
        "partial": "Isolation",
        "signature": "Isolation e-\u003em(Persisted e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:releaseIsolations",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "[Isolation e] -\u003e m [Persisted e]",
        "fct-source": "src/EZCouch-EntityIsolation.html#releaseIsolations",
        "fct-type": "function",
        "title": "releaseIsolations"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "releaseIsolations",
        "normalized": "[Isolation a]-\u003eb[Persisted a]",
        "package": "ez-couch",
        "partial": "Isolations",
        "signature": "[Isolation e]-\u003em[Persisted e]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:run",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "ConnectionSettings -\u003e ReaderT (ConnectionSettings, Manager, NominalDiffTime) (ResourceT m) a -\u003e m a",
        "fct-source": "src/EZCouch.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "run",
        "normalized": "ConnectionSettings-\u003eReaderT(ConnectionSettings,Manager,NominalDiffTime)(ResourceT a)b-\u003ea b",
        "package": "ez-couch",
        "partial": "",
        "signature": "ConnectionSettings-\u003eReaderT(ConnectionSettings,Manager,NominalDiffTime)(ResourceT m)a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:runWithManager",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Manager -\u003e ConnectionSettings -\u003e ReaderT (ConnectionSettings, Manager, NominalDiffTime) m a -\u003e m a",
        "fct-source": "src/EZCouch.html#runWithManager",
        "fct-type": "function",
        "title": "runWithManager"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "runWithManager",
        "normalized": "Manager-\u003eConnectionSettings-\u003eReaderT(ConnectionSettings,Manager,NominalDiffTime)a b-\u003ea b",
        "package": "ez-couch",
        "partial": "With Manager",
        "signature": "Manager-\u003eConnectionSettings-\u003eReaderT(ConnectionSettings,Manager,NominalDiffTime)m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:toJSON",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "a -\u003e Value",
        "fct-type": "method",
        "title": "toJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "toJSON",
        "normalized": "a-\u003eValue",
        "package": "ez-couch",
        "partial": "JSON",
        "signature": "a-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:tryOperation",
      "description": {
        "fct-descr": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if an action throws an \u003ccode\u003e\u003ca\u003eOperationException\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e its \n result otherwise.\n\u003c/p\u003e\u003cp\u003eThis is only useful for writing actions (Create, Update, Delete).\n\u003c/p\u003e",
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "m a -\u003e m (Maybe a)",
        "fct-source": "src/EZCouch-Try.html#tryOperation",
        "fct-type": "function",
        "title": "tryOperation"
      },
      "index": {
        "description": "Return Nothing if an action throws an OperationException or Just its result otherwise This is only useful for writing actions Create Update Delete",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "tryOperation",
        "normalized": "a b-\u003ea(Maybe b)",
        "package": "ez-couch",
        "partial": "Operation",
        "signature": "m a-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:updateEntities",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "[Persisted a] -\u003e m [Persisted a]",
        "fct-source": "src/EZCouch-WriteAction.html#updateEntities",
        "fct-type": "function",
        "title": "updateEntities"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "updateEntities",
        "normalized": "[Persisted a]-\u003eb[Persisted a]",
        "package": "ez-couch",
        "partial": "Entities",
        "signature": "[Persisted a]-\u003em[Persisted a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:updateEntity",
      "description": {
        "fct-module": "EZCouch",
        "fct-package": "ez-couch",
        "fct-signature": "Persisted a -\u003e m (Persisted a)",
        "fct-source": "src/EZCouch-WriteAction.html#updateEntity",
        "fct-type": "function",
        "title": "updateEntity"
      },
      "index": {
        "description": "",
        "hierarchy": "EZCouch",
        "module": "EZCouch",
        "name": "updateEntity",
        "normalized": "Persisted a-\u003eb(Persisted a)",
        "package": "ez-couch",
        "partial": "Entity",
        "signature": "Persisted a-\u003em(Persisted a)"
      }
    }
  }
]