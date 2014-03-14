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
        "word": "ez-couch"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEZCouch is a library which takes a mission of bringing the topmost level of abstraction for working with CouchDB in Haskell. It abstracts away from loose concepts of this database and brings a strict static API over standard ADTs. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "EZCouch",
          "name": "EZCouch",
          "package": "ez-couch",
          "source": "src/EZCouch.html",
          "type": "module"
        },
        "index": {
          "description": "EZCouch is library which takes mission of bringing the topmost level of abstraction for working with CouchDB in Haskell It abstracts away from loose concepts of this database and brings strict static API over standard ADTs",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "EZCouch",
          "package": "ez-couch",
          "partial": "EZCouch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "ConnectionSettings",
          "package": "ez-couch",
          "source": "src/EZCouch-Action.html#ConnectionSettings",
          "type": "data"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ConnectionSettings",
          "package": "ez-couch",
          "partial": "Connection Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:ConnectionSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "EZCouchException",
          "package": "ez-couch",
          "source": "src/EZCouch-Types.html#EZCouchException",
          "type": "data"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "EZCouchException",
          "package": "ez-couch",
          "partial": "EZCouch Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:EZCouchException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "Entity",
          "package": "ez-couch",
          "source": "src/EZCouch-Entity.html#Entity",
          "type": "class"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "Entity",
          "package": "ez-couch",
          "partial": "Entity",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:Entity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "Environment",
          "package": "ez-couch",
          "source": "src/EZCouch-Action.html#Environment",
          "type": "type"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "Environment",
          "package": "ez-couch",
          "partial": "Environment",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:Environment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted from JSON, with the possibility of\n failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003emzero\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e is missing a required key, or\n the value is of the wrong type.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance FromJSON Coord where\n   parseJSON (\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e v) = Coord    \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e\n                          v \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e \"x\" \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e\n                          v \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e \"y\"\n\n-- A non-\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e value is of the wrong type, so use \u003ccode\u003emzero\u003c/code\u003e to fail.\n   parseJSON _          = \u003ccode\u003emzero\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003efromJSON\u003c/code\u003e function that parses to\n any type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions, \u003ccode\u003eparseJSON\u003c/code\u003e will have a default\n generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use this, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your datatype and\n declare a \u003ccode\u003eFromJSON\u003c/code\u003e instance for your datatype without giving a definition\n for \u003ccode\u003eparseJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance FromJSON Coord\n\u003c/pre\u003e",
          "module": "EZCouch",
          "name": "FromJSON",
          "package": "ez-couch",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted from JSON with the possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if an Object is missing required key or the value is of the wrong type An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance FromJSON Coord where parseJSON Object Coord non Object value is of the wrong type so use mzero to fail parseJSON mzero Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your FromJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic fromJSON function that parses to any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions parseJSON will have default generic implementation To use this simply add deriving Generic clause to your datatype and declare FromJSON instance for your datatype without giving definition for parseJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance FromJSON Coord",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "FromJSON",
          "package": "ez-couch",
          "partial": "From JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:FromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "Isolation",
          "package": "ez-couch",
          "source": "src/EZCouch-EntityIsolation.html#Isolation",
          "type": "data"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "Isolation",
          "package": "ez-couch",
          "partial": "Isolation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:Isolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "KeysSelection",
          "package": "ez-couch",
          "source": "src/EZCouch-ReadAction.html#KeysSelection",
          "type": "data"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "KeysSelection",
          "package": "ez-couch",
          "partial": "Keys Selection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:KeysSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll EZCouch operations are performed in this monad.\n\u003c/p\u003e",
          "module": "EZCouch",
          "name": "MonadAction",
          "package": "ez-couch",
          "source": "src/EZCouch-Action.html#MonadAction",
          "type": "class"
        },
        "index": {
          "description": "All EZCouch operations are performed in this monad",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "MonadAction",
          "package": "ez-couch",
          "partial": "Monad Action",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:MonadAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for entity values which preserves the information required for\n identifying the appropriate documents in the db.\n\u003c/p\u003e",
          "module": "EZCouch",
          "name": "Persisted",
          "package": "ez-couch",
          "source": "src/EZCouch-Types.html#Persisted",
          "type": "data"
        },
        "index": {
          "description": "wrapper for entity values which preserves the information required for identifying the appropriate documents in the db",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "Persisted",
          "package": "ez-couch",
          "partial": "Persisted",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:Persisted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted to JSON.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance ToJSON Coord where\n   toJSON (Coord x y) = \u003ccode\u003e\u003ca\u003eobject\u003c/a\u003e\u003c/code\u003e [\"x\" \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e x, \"y\" \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e y]\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003etoJSON\u003c/code\u003e function that accepts any\n type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions (GHC 7.2 and newer),\n \u003ccode\u003etoJSON\u003c/code\u003e will have a default generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use the latter option, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your\n datatype and declare a \u003ccode\u003eToJSON\u003c/code\u003e instance for your datatype without giving a\n definition for \u003ccode\u003etoJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance ToJSON Coord\n\u003c/pre\u003e",
          "module": "EZCouch",
          "name": "ToJSON",
          "package": "ez-couch",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted to JSON An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance ToJSON Coord where toJSON Coord object Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your ToJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic toJSON function that accepts any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions GHC and newer toJSON will have default generic implementation To use the latter option simply add deriving Generic clause to your datatype and declare ToJSON instance for your datatype without giving definition for toJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance ToJSON Coord",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ToJSON",
          "package": "ez-couch",
          "partial": "To JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:ToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "View",
          "package": "ez-couch",
          "source": "src/EZCouch-View.html#View",
          "type": "data"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "View",
          "package": "ez-couch",
          "partial": "View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "ViewKey",
          "package": "ez-couch",
          "source": "src/EZCouch-View.html#ViewKey",
          "type": "data"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ViewKey",
          "package": "ez-couch",
          "partial": "View Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#t:ViewKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither a connection got closed or a timeout passed\n\u003c/p\u003e",
          "module": "EZCouch",
          "name": "ConnectionException",
          "package": "ez-couch",
          "signature": "ConnectionException Text",
          "source": "src/EZCouch-Types.html#EZCouchException",
          "type": "function"
        },
        "index": {
          "description": "Either connection got closed or timeout passed",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ConnectionException",
          "package": "ez-couch",
          "partial": "Connection Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ConnectionException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "ConnectionSettings",
          "package": "ez-couch",
          "signature": "ConnectionSettings",
          "source": "src/EZCouch-Action.html#ConnectionSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ConnectionSettings",
          "package": "ez-couch",
          "partial": "Connection Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ConnectionSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "KeysSelectionAll",
          "package": "ez-couch",
          "signature": "KeysSelectionAll",
          "source": "src/EZCouch-ReadAction.html#KeysSelection",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "KeysSelectionAll",
          "package": "ez-couch",
          "partial": "Keys Selection All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:KeysSelectionAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "KeysSelectionList",
          "package": "ez-couch",
          "signature": "KeysSelectionList [k]",
          "source": "src/EZCouch-ReadAction.html#KeysSelection",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "KeysSelectionList",
          "normalized": "KeysSelectionList[a]",
          "package": "ez-couch",
          "partial": "Keys Selection List",
          "signature": "KeysSelectionList[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:KeysSelectionList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "KeysSelectionRange",
          "package": "ez-couch",
          "signature": "KeysSelectionRange k k",
          "source": "src/EZCouch-ReadAction.html#KeysSelection",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "KeysSelectionRange",
          "package": "ez-couch",
          "partial": "Keys Selection Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:KeysSelectionRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "KeysSelectionRangeEnd",
          "package": "ez-couch",
          "signature": "KeysSelectionRangeEnd k",
          "source": "src/EZCouch-ReadAction.html#KeysSelection",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "KeysSelectionRangeEnd",
          "package": "ez-couch",
          "partial": "Keys Selection Range End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:KeysSelectionRangeEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "KeysSelectionRangeStart",
          "package": "ez-couch",
          "signature": "KeysSelectionRangeStart k",
          "source": "src/EZCouch-ReadAction.html#KeysSelection",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "KeysSelectionRangeStart",
          "package": "ez-couch",
          "partial": "Keys Selection Range Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:KeysSelectionRangeStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn operation failed, e.g. a document couldn't be created or deleted.\n\u003c/p\u003e",
          "module": "EZCouch",
          "name": "OperationException",
          "package": "ez-couch",
          "signature": "OperationException Text",
          "source": "src/EZCouch-Types.html#EZCouchException",
          "type": "function"
        },
        "index": {
          "description": "An operation failed e.g document couldn be created or deleted",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "OperationException",
          "package": "ez-couch",
          "partial": "Operation Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:OperationException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA response from CouchDB could not be parsed.\n\u003c/p\u003e",
          "module": "EZCouch",
          "name": "ParsingException",
          "package": "ez-couch",
          "signature": "ParsingException Text",
          "source": "src/EZCouch-Types.html#EZCouchException",
          "type": "function"
        },
        "index": {
          "description": "response from CouchDB could not be parsed",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ParsingException",
          "package": "ez-couch",
          "partial": "Parsing Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ParsingException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "Persisted",
          "package": "ez-couch",
          "signature": "Persisted",
          "source": "src/EZCouch-Types.html#Persisted",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "Persisted",
          "package": "ez-couch",
          "partial": "Persisted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:Persisted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eE.g., server provided an unexpected response\n\u003c/p\u003e",
          "module": "EZCouch",
          "name": "ResponseException",
          "package": "ez-couch",
          "signature": "ResponseException Text",
          "source": "src/EZCouch-Types.html#EZCouchException",
          "type": "function"
        },
        "index": {
          "description": "E.g server provided an unexpected response",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ResponseException",
          "package": "ez-couch",
          "partial": "Response Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ResponseException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA weird status 500 response\n\u003c/p\u003e",
          "module": "EZCouch",
          "name": "ServerException",
          "package": "ez-couch",
          "signature": "ServerException Text",
          "source": "src/EZCouch-Types.html#EZCouchException",
          "type": "function"
        },
        "index": {
          "description": "weird status response",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ServerException",
          "package": "ez-couch",
          "partial": "Server Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ServerException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "ViewById",
          "package": "ez-couch",
          "signature": "View entity Text",
          "source": "src/EZCouch-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ViewById",
          "package": "ez-couch",
          "partial": "View By Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewById"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "ViewByKeys1",
          "package": "ez-couch",
          "signature": "ViewKey a -\u003e View entity a",
          "source": "src/EZCouch-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ViewByKeys1",
          "normalized": "ViewKey a-\u003eView b a",
          "package": "ez-couch",
          "partial": "View By Keys",
          "signature": "ViewKey a-\u003eView entity a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewByKeys1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "ViewByKeys2",
          "package": "ez-couch",
          "signature": "ViewKey a -\u003e ViewKey b -\u003e View entity (a, b)",
          "source": "src/EZCouch-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ViewByKeys2",
          "normalized": "ViewKey a-\u003eViewKey b-\u003eView c(a,b)",
          "package": "ez-couch",
          "partial": "View By Keys",
          "signature": "ViewKey a-\u003eViewKey b-\u003eView entity(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewByKeys2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "ViewByKeys3",
          "package": "ez-couch",
          "signature": "ViewKey a -\u003e ViewKey b -\u003e ViewKey c -\u003e View entity (a, b, c)",
          "source": "src/EZCouch-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ViewByKeys3",
          "normalized": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eView d(a,b,c)",
          "package": "ez-couch",
          "partial": "View By Keys",
          "signature": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eView entity(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewByKeys3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "ViewByKeys4",
          "package": "ez-couch",
          "signature": "ViewKey a -\u003e ViewKey b -\u003e ViewKey c -\u003e ViewKey d -\u003e View entity (a, b, c, d)",
          "source": "src/EZCouch-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ViewByKeys4",
          "normalized": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eViewKey d-\u003eView e(a,b,c,d)",
          "package": "ez-couch",
          "partial": "View By Keys",
          "signature": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eViewKey d-\u003eView entity(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewByKeys4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "ViewByKeys5",
          "package": "ez-couch",
          "signature": "ViewKey a -\u003e ViewKey b -\u003e ViewKey c -\u003e ViewKey d -\u003e ViewKey e -\u003e View entity (a, b, c, d, e)",
          "source": "src/EZCouch-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ViewByKeys5",
          "normalized": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eViewKey d-\u003eViewKey e-\u003eView f(a,b,c,d,e)",
          "package": "ez-couch",
          "partial": "View By Keys",
          "signature": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eViewKey d-\u003eViewKey e-\u003eView entity(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewByKeys5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "ViewByKeys6",
          "package": "ez-couch",
          "signature": "ViewKey a -\u003e ViewKey b -\u003e ViewKey c -\u003e ViewKey d -\u003e ViewKey e -\u003e ViewKey f -\u003e View entity (a, b, c, d, e, f)",
          "source": "src/EZCouch-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ViewByKeys6",
          "normalized": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eViewKey d-\u003eViewKey e-\u003eViewKey f-\u003eView g(a,b,c,d,e,f)",
          "package": "ez-couch",
          "partial": "View By Keys",
          "signature": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eViewKey d-\u003eViewKey e-\u003eViewKey f-\u003eView entity(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewByKeys6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "ViewByKeys7",
          "package": "ez-couch",
          "signature": "ViewKey a -\u003e ViewKey b -\u003e ViewKey c -\u003e ViewKey d -\u003e ViewKey e -\u003e ViewKey f -\u003e ViewKey g -\u003e View entity (a, b, c, d, e, f, g)",
          "source": "src/EZCouch-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ViewByKeys7",
          "normalized": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eViewKey d-\u003eViewKey e-\u003eViewKey f-\u003eViewKey g-\u003eView h(a,b,c,d,e,f,g)",
          "package": "ez-couch",
          "partial": "View By Keys",
          "signature": "ViewKey a-\u003eViewKey b-\u003eViewKey c-\u003eViewKey d-\u003eViewKey e-\u003eViewKey f-\u003eViewKey g-\u003eView entity(a,b,c,d,e,f,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewByKeys7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path to a field value.\n\u003c/p\u003e\u003cp\u003eAssuming the following record declarations:\n\u003c/p\u003e\u003cpre\u003e data A = A { b :: B }\n data B = B { c :: Int }\n\u003c/pre\u003e\u003cp\u003eA path value of \u003ccode\u003e\"b.c\"\u003c/code\u003e will emit the values of the \u003ccode\u003ec\u003c/code\u003e field of a JSON \n object representing the record \u003ccode\u003eB\u003c/code\u003e in a view key of type \u003ccode\u003eViewKey A\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYes, it's not static. But it's probably the only place in the library that \n the compiler doesn't check for you.\n\u003c/p\u003e",
          "module": "EZCouch",
          "name": "ViewKeyField",
          "package": "ez-couch",
          "signature": "ViewKeyField Text",
          "source": "src/EZCouch-View.html#ViewKey",
          "type": "function"
        },
        "index": {
          "description": "path to field value Assuming the following record declarations data data Int path value of b.c will emit the values of the field of JSON object representing the record in view key of type ViewKey Yes it not static But it probably the only place in the library that the compiler doesn check for you",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ViewKeyField",
          "package": "ez-couch",
          "partial": "View Key Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewKeyField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis will emit a JavaScript \u003ccode\u003eMath.random()\u003c/code\u003e value as a key. This is what \n makes the querying for random entities possible.\n\u003c/p\u003e",
          "module": "EZCouch",
          "name": "ViewKeyRandom",
          "package": "ez-couch",
          "signature": "ViewKeyRandom",
          "source": "src/EZCouch-View.html#ViewKey",
          "type": "function"
        },
        "index": {
          "description": "This will emit JavaScript Math.random value as key This is what makes the querying for random entities possible",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "ViewKeyRandom",
          "package": "ez-couch",
          "partial": "View Key Random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:ViewKeyRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "connectionSettingsAuth",
          "package": "ez-couch",
          "signature": "Maybe (Text, Text)",
          "source": "src/EZCouch-Action.html#ConnectionSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "connectionSettingsAuth",
          "normalized": "Maybe(Text,Text)",
          "package": "ez-couch",
          "partial": "Settings Auth",
          "signature": "Maybe(Text,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:connectionSettingsAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "connectionSettingsDatabase",
          "package": "ez-couch",
          "signature": "Text",
          "source": "src/EZCouch-Action.html#ConnectionSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "connectionSettingsDatabase",
          "package": "ez-couch",
          "partial": "Settings Database",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:connectionSettingsDatabase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "connectionSettingsHost",
          "package": "ez-couch",
          "signature": "Text",
          "source": "src/EZCouch-Action.html#ConnectionSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "connectionSettingsHost",
          "package": "ez-couch",
          "partial": "Settings Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:connectionSettingsHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "connectionSettingsPort",
          "package": "ez-couch",
          "signature": "Int",
          "source": "src/EZCouch-Action.html#ConnectionSettings",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "connectionSettingsPort",
          "package": "ez-couch",
          "partial": "Settings Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:connectionSettingsPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "createEntities",
          "package": "ez-couch",
          "signature": "[a] -\u003e m [Persisted a]",
          "source": "src/EZCouch-WriteAction.html#createEntities",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "createEntities",
          "normalized": "[a]-\u003eb[Persisted a]",
          "package": "ez-couch",
          "partial": "Entities",
          "signature": "[a]-\u003em[Persisted a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:createEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "createEntity",
          "package": "ez-couch",
          "signature": "a -\u003e m (Persisted a)",
          "source": "src/EZCouch-WriteAction.html#createEntity",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "createEntity",
          "normalized": "a-\u003eb(Persisted a)",
          "package": "ez-couch",
          "partial": "Entity",
          "signature": "a-\u003em(Persisted a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:createEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "defaultPort",
          "package": "ez-couch",
          "signature": "Int",
          "source": "src/EZCouch-Action.html#defaultPort",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "defaultPort",
          "package": "ez-couch",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:defaultPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "deleteEntities",
          "package": "ez-couch",
          "signature": "[Persisted a] -\u003e m ()",
          "source": "src/EZCouch-WriteAction.html#deleteEntities",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "deleteEntities",
          "normalized": "[Persisted a]-\u003eb()",
          "package": "ez-couch",
          "partial": "Entities",
          "signature": "[Persisted a]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:deleteEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "deleteEntity",
          "package": "ez-couch",
          "signature": "Persisted a -\u003e m ()",
          "source": "src/EZCouch-WriteAction.html#deleteEntity",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "deleteEntity",
          "normalized": "Persisted a-\u003eb()",
          "package": "ez-couch",
          "partial": "Entity",
          "signature": "Persisted a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:deleteEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet rid of both the isolation and the entity. The entity won't get restored\n by the sweeper daemon after.\n\u003c/p\u003e",
          "module": "EZCouch",
          "name": "deleteIsolation",
          "package": "ez-couch",
          "signature": "Isolation e -\u003e m ()",
          "source": "src/EZCouch-EntityIsolation.html#deleteIsolation",
          "type": "function"
        },
        "index": {
          "description": "Get rid of both the isolation and the entity The entity won get restored by the sweeper daemon after",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "deleteIsolation",
          "normalized": "Isolation a-\u003eb()",
          "package": "ez-couch",
          "partial": "Isolation",
          "signature": "Isolation e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:deleteIsolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "deleteIsolations",
          "package": "ez-couch",
          "signature": "[Isolation e] -\u003e m ()",
          "source": "src/EZCouch-EntityIsolation.html#deleteIsolations",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "deleteIsolations",
          "normalized": "[Isolation a]-\u003eb()",
          "package": "ez-couch",
          "partial": "Isolations",
          "signature": "[Isolation e]-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:deleteIsolations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "entityType",
          "package": "ez-couch",
          "signature": "a -\u003e Text",
          "source": "src/EZCouch-Entity.html#entityType",
          "type": "method"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "entityType",
          "normalized": "a-\u003eText",
          "package": "ez-couch",
          "partial": "Type",
          "signature": "a-\u003eText",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:entityType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the same as \u003ccode\u003e\u003ca\u003eisolateEntity\u003c/a\u003e\u003c/code\u003e but for multiple entities and in a single\n request.\n\u003c/p\u003e",
          "module": "EZCouch",
          "name": "isolateEntities",
          "package": "ez-couch",
          "signature": "Int -\u003e [Persisted e] -\u003e m [Maybe (Isolation e)]",
          "source": "src/EZCouch-EntityIsolation.html#isolateEntities",
          "type": "function"
        },
        "index": {
          "description": "Does the same as isolateEntity but for multiple entities and in single request",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "isolateEntities",
          "normalized": "Int-\u003e[Persisted a]-\u003eb[Maybe(Isolation a)]",
          "package": "ez-couch",
          "partial": "Entities",
          "signature": "Int-\u003e[Persisted e]-\u003em[Maybe(Isolation e)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:isolateEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProtect the entity from being accessed by concurrent clients until you \n release it using \u003ccode\u003e\u003ca\u003ereleaseIsolation\u003c/a\u003e\u003c/code\u003e, delete it with the isolation using \n \u003ccode\u003e\u003ca\u003edeleteIsolation\u003c/a\u003e\u003c/code\u003e, or the timeout passes and it gets considered to be zombie \n and gets released automatically some time later.\n\u003c/p\u003e\u003cp\u003eThe automatic releasing gets done by a sweeper daemon running in background\n when EZCouch is being used on a timely basis and on its launch.\n\u003c/p\u003e",
          "module": "EZCouch",
          "name": "isolateEntity",
          "package": "ez-couch",
          "signature": "Int-\u003e Persisted e-\u003e m (Maybe (Isolation e))",
          "type": "function"
        },
        "index": {
          "description": "Protect the entity from being accessed by concurrent clients until you release it using releaseIsolation delete it with the isolation using deleteIsolation or the timeout passes and it gets considered to be zombie and gets released automatically some time later The automatic releasing gets done by sweeper daemon running in background when EZCouch is being used on timely basis and on its launch",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "isolateEntity",
          "normalized": "Int-\u003ePersisted a-\u003eb(Maybe(Isolation a))",
          "package": "ez-couch",
          "partial": "Entity",
          "signature": "Int-\u003ePersisted e-\u003em(Maybe(Isolation e))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:isolateEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "isolationEntity",
          "package": "ez-couch",
          "signature": "Isolation t1 -\u003e t1",
          "source": "src/EZCouch-EntityIsolation.html#isolationEntity",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "isolationEntity",
          "normalized": "Isolation a-\u003ea",
          "package": "ez-couch",
          "partial": "Entity",
          "signature": "Isolation t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:isolationEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "parseJSON",
          "package": "ez-couch",
          "signature": "Value -\u003e Parser a",
          "type": "method"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "parseJSON",
          "normalized": "Value-\u003eParser a",
          "package": "ez-couch",
          "partial": "JSON",
          "signature": "Value-\u003eParser a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:parseJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "persistedId",
          "package": "ez-couch",
          "signature": "Text",
          "source": "src/EZCouch-Types.html#Persisted",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "persistedId",
          "package": "ez-couch",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:persistedId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "persistedIdHashPart",
          "package": "ez-couch",
          "signature": "Persisted a -\u003e Text",
          "source": "src/EZCouch-Types.html#persistedIdHashPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "persistedIdHashPart",
          "normalized": "Persisted a-\u003eText",
          "package": "ez-couch",
          "partial": "Id Hash Part",
          "signature": "Persisted a-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:persistedIdHashPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "persistedRev",
          "package": "ez-couch",
          "signature": "Text",
          "source": "src/EZCouch-Types.html#Persisted",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "persistedRev",
          "package": "ez-couch",
          "partial": "Rev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:persistedRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "persistedValue",
          "package": "ez-couch",
          "signature": "a",
          "source": "src/EZCouch-Types.html#Persisted",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "persistedValue",
          "package": "ez-couch",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:persistedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "readCount",
          "package": "ez-couch",
          "signature": "View a k-\u003e KeysSelection k-\u003e m Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "readCount",
          "normalized": "View a b-\u003eKeysSelection b-\u003ec Int",
          "package": "ez-couch",
          "partial": "Count",
          "signature": "View a k-\u003eKeysSelection k-\u003em Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:readCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "readEntities",
          "package": "ez-couch",
          "signature": "View a k-\u003e KeysSelection k-\u003e Int-\u003e Maybe Int-\u003e Bool-\u003e m [Persisted a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "readEntities",
          "normalized": "View a b-\u003eKeysSelection b-\u003eInt-\u003eMaybe Int-\u003eBool-\u003ec[Persisted a]",
          "package": "ez-couch",
          "partial": "Entities",
          "signature": "View a k-\u003eKeysSelection k-\u003eInt-\u003eMaybe Int-\u003eBool-\u003em[Persisted a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:readEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "readEntity",
          "package": "ez-couch",
          "signature": "View a k-\u003e KeysSelection k-\u003e Int-\u003e Bool-\u003e m (Maybe (Persisted a))",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "readEntity",
          "normalized": "View a b-\u003eKeysSelection b-\u003eInt-\u003eBool-\u003ec(Maybe(Persisted a))",
          "package": "ez-couch",
          "partial": "Entity",
          "signature": "View a k-\u003eKeysSelection k-\u003eInt-\u003eBool-\u003em(Maybe(Persisted a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:readEntity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "readKeys",
          "package": "ez-couch",
          "signature": "View a k-\u003e KeysSelection k-\u003e m [k]",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "readKeys",
          "normalized": "View a b-\u003eKeysSelection b-\u003ec[b]",
          "package": "ez-couch",
          "partial": "Keys",
          "signature": "View a k-\u003eKeysSelection k-\u003em[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:readKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "readKeysExist",
          "package": "ez-couch",
          "signature": "View a k-\u003e KeysSelection k-\u003e m [(k, Bool)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "readKeysExist",
          "normalized": "View a b-\u003eKeysSelection b-\u003ec[(b,Bool)]",
          "package": "ez-couch",
          "partial": "Keys Exist",
          "signature": "View a k-\u003eKeysSelection k-\u003em[(k,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:readKeysExist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "readRandomEntities",
          "package": "ez-couch",
          "signature": "Maybe Int-\u003e m [Persisted a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "readRandomEntities",
          "normalized": "Maybe Int-\u003ea[Persisted b]",
          "package": "ez-couch",
          "partial": "Random Entities",
          "signature": "Maybe Int-\u003em[Persisted a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:readRandomEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent time according to server. This function doesn't actually emit any\n requests to the server, calculating the value from a deviation of local time\n from server time determined at the beginning of the EZCouch session.\n\u003c/p\u003e",
          "module": "EZCouch",
          "name": "readTime",
          "package": "ez-couch",
          "signature": "m UTCTime",
          "source": "src/EZCouch-Time.html#readTime",
          "type": "function"
        },
        "index": {
          "description": "Current time according to server This function doesn actually emit any requests to the server calculating the value from deviation of local time from server time determined at the beginning of the EZCouch session",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "readTime",
          "package": "ez-couch",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:readTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestore the entity document under the same id and drop the isolation.\n\u003c/p\u003e",
          "module": "EZCouch",
          "name": "releaseIsolation",
          "package": "ez-couch",
          "signature": "Isolation e-\u003e m (Persisted e)",
          "type": "function"
        },
        "index": {
          "description": "Restore the entity document under the same id and drop the isolation",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "releaseIsolation",
          "normalized": "Isolation a-\u003eb(Persisted a)",
          "package": "ez-couch",
          "partial": "Isolation",
          "signature": "Isolation e-\u003em(Persisted e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:releaseIsolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "releaseIsolations",
          "package": "ez-couch",
          "signature": "[Isolation e] -\u003e m [Persisted e]",
          "source": "src/EZCouch-EntityIsolation.html#releaseIsolations",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "releaseIsolations",
          "normalized": "[Isolation a]-\u003eb[Persisted a]",
          "package": "ez-couch",
          "partial": "Isolations",
          "signature": "[Isolation e]-\u003em[Persisted e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:releaseIsolations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "run",
          "package": "ez-couch",
          "signature": "ConnectionSettings -\u003e ReaderT (ConnectionSettings, Manager, NominalDiffTime) (ResourceT m) a -\u003e m a",
          "source": "src/EZCouch.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "run",
          "normalized": "ConnectionSettings-\u003eReaderT(ConnectionSettings,Manager,NominalDiffTime)(ResourceT a)b-\u003ea b",
          "package": "ez-couch",
          "signature": "ConnectionSettings-\u003eReaderT(ConnectionSettings,Manager,NominalDiffTime)(ResourceT m)a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "runWithManager",
          "package": "ez-couch",
          "signature": "Manager -\u003e ConnectionSettings -\u003e ReaderT (ConnectionSettings, Manager, NominalDiffTime) m a -\u003e m a",
          "source": "src/EZCouch.html#runWithManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "runWithManager",
          "normalized": "Manager-\u003eConnectionSettings-\u003eReaderT(ConnectionSettings,Manager,NominalDiffTime)a b-\u003ea b",
          "package": "ez-couch",
          "partial": "With Manager",
          "signature": "Manager-\u003eConnectionSettings-\u003eReaderT(ConnectionSettings,Manager,NominalDiffTime)m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:runWithManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "toJSON",
          "package": "ez-couch",
          "signature": "a -\u003e Value",
          "type": "method"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "toJSON",
          "normalized": "a-\u003eValue",
          "package": "ez-couch",
          "partial": "JSON",
          "signature": "a-\u003eValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:toJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if an action throws an \u003ccode\u003e\u003ca\u003eOperationException\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e its \n result otherwise.\n\u003c/p\u003e\u003cp\u003eThis is only useful for writing actions (Create, Update, Delete).\n\u003c/p\u003e",
          "module": "EZCouch",
          "name": "tryOperation",
          "package": "ez-couch",
          "signature": "m a -\u003e m (Maybe a)",
          "source": "src/EZCouch-Try.html#tryOperation",
          "type": "function"
        },
        "index": {
          "description": "Return Nothing if an action throws an OperationException or Just its result otherwise This is only useful for writing actions Create Update Delete",
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "tryOperation",
          "normalized": "a b-\u003ea(Maybe b)",
          "package": "ez-couch",
          "partial": "Operation",
          "signature": "m a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:tryOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "updateEntities",
          "package": "ez-couch",
          "signature": "[Persisted a] -\u003e m [Persisted a]",
          "source": "src/EZCouch-WriteAction.html#updateEntities",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "updateEntities",
          "normalized": "[Persisted a]-\u003eb[Persisted a]",
          "package": "ez-couch",
          "partial": "Entities",
          "signature": "[Persisted a]-\u003em[Persisted a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:updateEntities"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EZCouch",
          "name": "updateEntity",
          "package": "ez-couch",
          "signature": "Persisted a -\u003e m (Persisted a)",
          "source": "src/EZCouch-WriteAction.html#updateEntity",
          "type": "function"
        },
        "index": {
          "hierarchy": "EZCouch",
          "module": "EZCouch",
          "name": "updateEntity",
          "normalized": "Persisted a-\u003eb(Persisted a)",
          "package": "ez-couch",
          "partial": "Entity",
          "signature": "Persisted a-\u003em(Persisted a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ez-couch/docs/EZCouch.html#v:updateEntity"
      }
    }
  ]
]