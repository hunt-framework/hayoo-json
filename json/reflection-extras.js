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
        "word": "reflection-extras"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reflection.Extras",
          "name": "Extras",
          "package": "reflection-extras",
          "source": "src/Data-Reflection-Extras.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Reflection Extras",
          "module": "Data.Reflection.Extras",
          "name": "Extras",
          "package": "reflection-extras",
          "partial": "Extras",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/reflection-extras/docs/Data-Reflection-Extras.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted from JSON, with the possibility of\n failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003emzero\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e is missing a required key, or\n the value is of the wrong type.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance FromJSON Coord where\n   parseJSON (\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e v) = Coord    \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e\n                          v \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e \"x\" \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e\n                          v \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e \"y\"\n\n-- A non-\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e value is of the wrong type, so use \u003ccode\u003emzero\u003c/code\u003e to fail.\n   parseJSON _          = \u003ccode\u003emzero\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003efromJSON\u003c/code\u003e function that parses to\n any type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions, \u003ccode\u003eparseJSON\u003c/code\u003e will have a default\n generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use this, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your datatype and\n declare a \u003ccode\u003eFromJSON\u003c/code\u003e instance for your datatype without giving a definition\n for \u003ccode\u003eparseJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance FromJSON Coord\n\u003c/pre\u003e\u003cp\u003eNote that, instead of using \u003ccode\u003eDefaultSignatures\u003c/code\u003e, it's also possible\n to parameterize the generic decoding using \u003ccode\u003e\u003ca\u003egenericParseJSON\u003c/a\u003e\u003c/code\u003e applied\n to your encoding/decoding \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n instance FromJSON Coord where\n     parseJSON = \u003ccode\u003e\u003ca\u003egenericParseJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Reflection.Extras",
          "name": "FromJSON",
          "package": "reflection-extras",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted from JSON with the possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if an Object is missing required key or the value is of the wrong type An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance FromJSON Coord where parseJSON Object Coord non Object value is of the wrong type so use mzero to fail parseJSON mzero Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your FromJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic fromJSON function that parses to any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions parseJSON will have default generic implementation To use this simply add deriving Generic clause to your datatype and declare FromJSON instance for your datatype without giving definition for parseJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance FromJSON Coord Note that instead of using DefaultSignatures it also possible to parameterize the generic decoding using genericParseJSON applied to your encoding decoding Options instance FromJSON Coord where parseJSON genericParseJSON defaultOptions",
          "hierarchy": "Data Reflection Extras",
          "module": "Data.Reflection.Extras",
          "name": "FromJSON",
          "package": "reflection-extras",
          "partial": "From JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reflection-extras/docs/Data-Reflection-Extras.html#t:FromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reflection.Extras",
          "name": "Lift",
          "package": "reflection-extras",
          "source": "src/Data-Reflection-Extras.html#Lift",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Reflection Extras",
          "module": "Data.Reflection.Extras",
          "name": "Lift",
          "package": "reflection-extras",
          "partial": "Lift",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/reflection-extras/docs/Data-Reflection-Extras.html#t:Lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reflection.Extras",
          "name": "ReifiableConstraint",
          "package": "reflection-extras",
          "source": "src/Data-Reflection-Extras.html#ReifiableConstraint",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Reflection Extras",
          "module": "Data.Reflection.Extras",
          "name": "ReifiableConstraint",
          "package": "reflection-extras",
          "partial": "Reifiable Constraint",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reflection-extras/docs/Data-Reflection-Extras.html#t:ReifiableConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reflection.Extras",
          "name": "Reifies",
          "package": "reflection-extras",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Reflection Extras",
          "module": "Data.Reflection.Extras",
          "name": "Reifies",
          "package": "reflection-extras",
          "partial": "Reifies",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reflection-extras/docs/Data-Reflection-Extras.html#t:Reifies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted to JSON.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance ToJSON Coord where\n   toJSON (Coord x y) = \u003ccode\u003e\u003ca\u003eobject\u003c/a\u003e\u003c/code\u003e [\"x\" \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e x, \"y\" \u003ccode\u003e\u003ca\u003e.=\u003c/a\u003e\u003c/code\u003e y]\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003etoJSON\u003c/code\u003e function that accepts any\n type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions (GHC 7.2 and newer),\n \u003ccode\u003etoJSON\u003c/code\u003e will have a default generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use the latter option, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your\n datatype and declare a \u003ccode\u003eToJSON\u003c/code\u003e instance for your datatype without giving a\n definition for \u003ccode\u003etoJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance ToJSON Coord\n\u003c/pre\u003e\u003cp\u003eNote that, instead of using \u003ccode\u003eDefaultSignatures\u003c/code\u003e, it's also possible\n to parameterize the generic encoding using \u003ccode\u003e\u003ca\u003egenericToJSON\u003c/a\u003e\u003c/code\u003e applied\n to your encoding/decoding \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n instance ToJSON Coord where\n     toJSON = \u003ccode\u003e\u003ca\u003egenericToJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.Reflection.Extras",
          "name": "ToJSON",
          "package": "reflection-extras",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted to JSON An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance ToJSON Coord where toJSON Coord object Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your ToJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic toJSON function that accepts any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions GHC and newer toJSON will have default generic implementation To use the latter option simply add deriving Generic clause to your datatype and declare ToJSON instance for your datatype without giving definition for toJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance ToJSON Coord Note that instead of using DefaultSignatures it also possible to parameterize the generic encoding using genericToJSON applied to your encoding decoding Options instance ToJSON Coord where toJSON genericToJSON defaultOptions",
          "hierarchy": "Data Reflection Extras",
          "module": "Data.Reflection.Extras",
          "name": "ToJSON",
          "package": "reflection-extras",
          "partial": "To JSON",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/reflection-extras/docs/Data-Reflection-Extras.html#t:ToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reflection.Extras",
          "name": "parseJSON",
          "package": "reflection-extras",
          "signature": "Value -\u003e Parser a",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Reflection Extras",
          "module": "Data.Reflection.Extras",
          "name": "parseJSON",
          "normalized": "Value-\u003eParser a",
          "package": "reflection-extras",
          "partial": "JSON",
          "signature": "Value-\u003eParser a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reflection-extras/docs/Data-Reflection-Extras.html#v:parseJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecover a value inside a \u003ccode\u003e\u003ca\u003ereify\u003c/a\u003e\u003c/code\u003e context, given a proxy for its\n reified type.\n\u003c/p\u003e",
          "module": "Data.Reflection.Extras",
          "name": "reflect",
          "package": "reflection-extras",
          "signature": "proxy s -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Recover value inside reify context given proxy for its reified type",
          "hierarchy": "Data Reflection Extras",
          "module": "Data.Reflection.Extras",
          "name": "reflect",
          "normalized": "a b-\u003ec",
          "package": "reflection-extras",
          "signature": "proxy s-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reflection-extras/docs/Data-Reflection-Extras.html#v:reflect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reflection.Extras",
          "name": "reifiedIns",
          "package": "reflection-extras",
          "signature": "forall s a.  Reifies s (Def p a) :- p (Lift p s a)",
          "source": "src/Data-Reflection-Extras.html#reifiedIns",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Reflection Extras",
          "module": "Data.Reflection.Extras",
          "name": "reifiedIns",
          "package": "reflection-extras",
          "partial": "Ins",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reflection-extras/docs/Data-Reflection-Extras.html#v:reifiedIns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reflection.Extras",
          "name": "reifyInstance",
          "package": "reflection-extras",
          "signature": "Proxy s -\u003e r) -\u003e r",
          "source": "src/Data-Reflection-Extras.html#reifyInstance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reflection Extras",
          "module": "Data.Reflection.Extras",
          "name": "reifyInstance",
          "normalized": "Proxy a-\u003eb)-\u003eb",
          "package": "reflection-extras",
          "partial": "Instance",
          "signature": "Proxy s-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reflection-extras/docs/Data-Reflection-Extras.html#v:reifyInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reflection.Extras",
          "name": "toJSON",
          "package": "reflection-extras",
          "signature": "a -\u003e Value",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Reflection Extras",
          "module": "Data.Reflection.Extras",
          "name": "toJSON",
          "normalized": "a-\u003eValue",
          "package": "reflection-extras",
          "partial": "JSON",
          "signature": "a-\u003eValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/reflection-extras/docs/Data-Reflection-Extras.html#v:toJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoose a dictionary for a local type class instance.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eusing (Monoid (+) 0) $ mempty \u003c\u003e 10 \u003c\u003e 12\n\u003c/code\u003e\u003c/strong\u003e\u003e 12\n\u003c/pre\u003e",
          "module": "Data.Reflection.Extras",
          "name": "using",
          "package": "reflection-extras",
          "signature": "a) -\u003e a",
          "source": "src/Data-Reflection-Extras.html#using",
          "type": "function"
        },
        "index": {
          "description": "Choose dictionary for local type class instance using Monoid mempty",
          "hierarchy": "Data Reflection Extras",
          "module": "Data.Reflection.Extras",
          "name": "using",
          "normalized": "a)-\u003ea",
          "package": "reflection-extras",
          "signature": "a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reflection-extras/docs/Data-Reflection-Extras.html#v:using"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reflection.Extras",
          "name": "usingT",
          "package": "reflection-extras",
          "signature": "f a) -\u003e f a",
          "source": "src/Data-Reflection-Extras.html#usingT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reflection Extras",
          "module": "Data.Reflection.Extras",
          "name": "usingT",
          "normalized": "a b)-\u003ea b",
          "package": "reflection-extras",
          "signature": "f a)-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reflection-extras/docs/Data-Reflection-Extras.html#v:usingT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Reflection.Extras",
          "name": "with",
          "package": "reflection-extras",
          "signature": "Lift p s a) -\u003e a",
          "source": "src/Data-Reflection-Extras.html#with",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Reflection Extras",
          "module": "Data.Reflection.Extras",
          "name": "with",
          "normalized": "Lift a b c)-\u003ec",
          "package": "reflection-extras",
          "signature": "Lift p s a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/reflection-extras/docs/Data-Reflection-Extras.html#v:with"
      }
    }
  ]
]