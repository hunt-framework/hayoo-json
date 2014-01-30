[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a high-level interface for processing YAML files.\n\u003c/p\u003e\u003cp\u003eThis module reuses most of the infrastructure from the \u003ccode\u003eaeson\u003c/code\u003e package.\n This means that you can use all of the existing tools for JSON\n processing for processing YAML files. As a result, much of the\n documentation below mentions JSON; do not let that confuse you, it's\n intentional.\n\u003c/p\u003e\u003cp\u003eFor the most part, YAML content translates directly into JSON, and\n therefore there is very little data loss. If you need to deal with YAML\n more directly (e.g., directly deal with aliases), you should use the\n \u003ca\u003eText.Libyaml\u003c/a\u003e module instead.\n\u003c/p\u003e\u003cp\u003eFor documentation on the \u003ccode\u003eaeson\u003c/code\u003e types, functions, classes, and\n operators, please see the \u003ccode\u003eData.Aeson\u003c/code\u003e module of the \u003ccode\u003eaeson\u003c/code\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "module",
        "fct-source": "src/Data-Yaml.html",
        "fct-type": "module",
        "title": "Yaml"
      },
      "index": {
        "description": "Provides high-level interface for processing YAML files This module reuses most of the infrastructure from the aeson package This means that you can use all of the existing tools for JSON processing for processing YAML files As result much of the documentation below mentions JSON do not let that confuse you it intentional For the most part YAML content translates directly into JSON and therefore there is very little data loss If you need to deal with YAML more directly e.g directly deal with aliases you should use the Text.Libyaml module instead For documentation on the aeson types functions classes and operators please see the Data.Aeson module of the aeson package",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "Yaml",
        "normalized": "",
        "package": "yaml",
        "partial": "Yaml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#t:Array",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON \"array\" (sequence).\n\u003c/p\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Array"
      },
      "index": {
        "description": "JSON array sequence",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "Array",
        "normalized": "",
        "package": "yaml",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#t:FromJSON",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be converted from JSON, with the possibility of\n failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003eempty\u003c/code\u003e, \u003ccode\u003emzero\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e is missing a required key, or\n the value is of the wrong type.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance FromJSON Coord where\n   parseJSON (\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e v) = Coord    \u003ccode\u003e\u003c$\u003e\u003c/code\u003e\n                          v \u003ccode\u003e.:\u003c/code\u003e \"x\" \u003ccode\u003e\u003c*\u003e\u003c/code\u003e\n                          v \u003ccode\u003e.:\u003c/code\u003e \"y\"\n\n-- A non-\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e value is of the wrong type, so use \u003ccode\u003emzero\u003c/code\u003e to fail.\n   parseJSON _          = \u003ccode\u003emzero\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003eText\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003efromJSON\u003c/code\u003e function that parses to\n any type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions, \u003ccode\u003eparseJSON\u003c/code\u003e will have a default\n generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use this, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your datatype and\n declare a \u003ccode\u003eFromJSON\u003c/code\u003e instance for your datatype without giving a definition\n for \u003ccode\u003eparseJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance FromJSON Coord\n\u003c/pre\u003e\u003cp\u003eNote that, instead of using \u003ccode\u003eDefaultSignatures\u003c/code\u003e, it's also possible\n to parameterize the generic decoding using \u003ccode\u003e\u003ca\u003egenericParseJSON\u003c/a\u003e\u003c/code\u003e applied\n to your encoding/decoding \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n instance FromJSON Coord where\n     parseJSON = \u003ccode\u003e\u003ca\u003egenericParseJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "FromJSON"
      },
      "index": {
        "description": "type that can be converted from JSON with the possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if an Object is missing required key or the value is of the wrong type An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance FromJSON Coord where parseJSON Object Coord non Object value is of the wrong type so use mzero to fail parseJSON mzero Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your FromJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic fromJSON function that parses to any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions parseJSON will have default generic implementation To use this simply add deriving Generic clause to your datatype and declare FromJSON instance for your datatype without giving definition for parseJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance FromJSON Coord Note that instead of using DefaultSignatures it also possible to parameterize the generic decoding using genericParseJSON applied to your encoding decoding Options instance FromJSON Coord where parseJSON genericParseJSON defaultOptions",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "FromJSON",
        "normalized": "",
        "package": "yaml",
        "partial": "From JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#t:Object",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON \"object\" (key/value map).\n\u003c/p\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Object"
      },
      "index": {
        "description": "JSON object key value map",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "Object",
        "normalized": "",
        "package": "yaml",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#t:ParseException",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "data",
        "fct-source": "src/Data-Yaml.html#ParseException",
        "fct-type": "data",
        "title": "ParseException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "ParseException",
        "normalized": "",
        "package": "yaml",
        "partial": "Parse Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#t:Parser",
      "description": {
        "fct-descr": "\u003cp\u003eA continuation-based parser type.\n\u003c/p\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Parser"
      },
      "index": {
        "description": "continuation-based parser type",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "Parser",
        "normalized": "",
        "package": "yaml",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#t:ToJSON",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be converted to JSON.\n\u003c/p\u003e\u003cp\u003eAn example type and instance:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE OverloadedStrings #-}\n\ndata Coord { x :: Double, y :: Double }\n\ninstance ToJSON Coord where\n   toJSON (Coord x y) = \u003ccode\u003e\u003ca\u003eobject\u003c/a\u003e\u003c/code\u003e [\"x\" \u003ccode\u003e.=\u003c/code\u003e x, \"y\" \u003ccode\u003e.=\u003c/code\u003e y]\n\u003c/pre\u003e\u003cp\u003eNote the use of the \u003ccode\u003eOverloadedStrings\u003c/code\u003e language extension which enables\n \u003ccode\u003eText\u003c/code\u003e values to be written as string literals.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing your \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e instance, there are three options\n to do it automatically:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003eData.Aeson.TH\u003c/a\u003e provides template-haskell functions which will derive an\n instance at compile-time. The generated instance is optimized for your type\n so will probably be more efficient than the following two options:\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eData.Aeson.Generic\u003c/a\u003e provides a generic \u003ccode\u003etoJSON\u003c/code\u003e function that accepts any\n type which is an instance of \u003ccode\u003eData\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If your compiler has support for the \u003ccode\u003eDeriveGeneric\u003c/code\u003e and\n \u003ccode\u003eDefaultSignatures\u003c/code\u003e language extensions (GHC 7.2 and newer),\n \u003ccode\u003etoJSON\u003c/code\u003e will have a default generic implementation.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo use the latter option, simply add a \u003ccode\u003ederiving \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e clause to your\n datatype and declare a \u003ccode\u003eToJSON\u003c/code\u003e instance for your datatype without giving a\n definition for \u003ccode\u003etoJSON\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE DeriveGeneric #-}\n\nimport GHC.Generics\n\ndata Coord { x :: Double, y :: Double } deriving Generic\n\ninstance ToJSON Coord\n\u003c/pre\u003e\u003cp\u003eNote that, instead of using \u003ccode\u003eDefaultSignatures\u003c/code\u003e, it's also possible\n to parameterize the generic encoding using \u003ccode\u003e\u003ca\u003egenericToJSON\u003c/a\u003e\u003c/code\u003e applied\n to your encoding/decoding \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n instance ToJSON Coord where\n     toJSON = \u003ccode\u003e\u003ca\u003egenericToJSON\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultOptions\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "ToJSON"
      },
      "index": {
        "description": "type that can be converted to JSON An example type and instance LANGUAGE OverloadedStrings data Coord Double Double instance ToJSON Coord where toJSON Coord object Note the use of the OverloadedStrings language extension which enables Text values to be written as string literals Instead of manually writing your ToJSON instance there are three options to do it automatically Data.Aeson.TH provides template-haskell functions which will derive an instance at compile-time The generated instance is optimized for your type so will probably be more efficient than the following two options Data.Aeson.Generic provides generic toJSON function that accepts any type which is an instance of Data If your compiler has support for the DeriveGeneric and DefaultSignatures language extensions GHC and newer toJSON will have default generic implementation To use the latter option simply add deriving Generic clause to your datatype and declare ToJSON instance for your datatype without giving definition for toJSON For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Coord Double Double deriving Generic instance ToJSON Coord Note that instead of using DefaultSignatures it also possible to parameterize the generic encoding using genericToJSON applied to your encoding decoding Options instance ToJSON Coord where toJSON genericToJSON defaultOptions",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "ToJSON",
        "normalized": "",
        "package": "yaml",
        "partial": "To JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON value represented as a Haskell value.\n\u003c/p\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "JSON value represented as Haskell value",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "Value",
        "normalized": "",
        "package": "yaml",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#t:YamlException",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "data",
        "fct-source": "src/Text-Libyaml.html#YamlException",
        "fct-type": "data",
        "title": "YamlException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "YamlException",
        "normalized": "",
        "package": "yaml",
        "partial": "Yaml Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#t:YamlMark",
      "description": {
        "fct-descr": "\u003cp\u003eThe pointer position\n\u003c/p\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "data",
        "fct-source": "src/Text-Libyaml.html#YamlMark",
        "fct-type": "data",
        "title": "YamlMark"
      },
      "index": {
        "description": "The pointer position",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "YamlMark",
        "normalized": "",
        "package": "yaml",
        "partial": "Yaml Mark",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:.-33--61-",
      "description": {
        "fct-descr": "\u003cp\u003eHelper for use in combination with \u003ccode\u003e\u003ca\u003e.:?\u003c/a\u003e\u003c/code\u003e to provide default\n values for optional JSON object fields.\n\u003c/p\u003e\u003cp\u003eThis combinator is most useful if the key and value can be absent\n from an object without affecting its validity and we know a default\n value to assign in that case.  If the key and value are mandatory,\n use '(.:)' instead.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e v1 \u003c- o \u003ccode\u003e\u003ca\u003e.:?\u003c/a\u003e\u003c/code\u003e \"opt_field_with_dfl\" .!= \"default_val\"\n v2 \u003c- o \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e  \"mandatory_field\"\n v3 \u003c- o \u003ccode\u003e\u003ca\u003e.:?\u003c/a\u003e\u003c/code\u003e \"opt_field2\"\n\u003c/pre\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "Parser (Maybe a) -\u003e a -\u003e Parser a",
        "fct-type": "function",
        "title": "(.!=)"
      },
      "index": {
        "description": "Helper for use in combination with to provide default values for optional JSON object fields This combinator is most useful if the key and value can be absent from an object without affecting its validity and we know default value to assign in that case If the key and value are mandatory use instead Example usage v1 opt field with dfl default val v2 mandatory field v3 opt field2",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "(.!=) .!=",
        "normalized": "Parser(Maybe a)-\u003ea-\u003eParser a",
        "package": "yaml",
        "partial": "",
        "signature": "Parser(Maybe a)-\u003ea-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:.-61-",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003e from a key and a value.\n\u003c/p\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "Text -\u003e a -\u003e Pair",
        "fct-type": "function",
        "title": "(.=)"
      },
      "index": {
        "description": "Construct Pair from key and value",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "(.=) .=",
        "normalized": "Text-\u003ea-\u003ePair",
        "package": "yaml",
        "partial": "",
        "signature": "Text-\u003ea-\u003ePair"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:.:",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the value associated with the given key of an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n The result is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if the key is not present or the value cannot\n be converted to the desired type.\n\u003c/p\u003e\u003cp\u003eThis accessor is appropriate if the key and value \u003cem\u003emust\u003c/em\u003e be present\n in an object for it to be valid.  If the key and value are\n optional, use '(.:?)' instead.\n\u003c/p\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "Object -\u003e Text -\u003e Parser a",
        "fct-type": "function",
        "title": "(.:)"
      },
      "index": {
        "description": "Retrieve the value associated with the given key of an Object The result is empty if the key is not present or the value cannot be converted to the desired type This accessor is appropriate if the key and value must be present in an object for it to be valid If the key and value are optional use instead",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "(.:) .:",
        "normalized": "Object-\u003eText-\u003eParser a",
        "package": "yaml",
        "partial": "",
        "signature": "Object-\u003eText-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:.:-63-",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the value associated with the given key of an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n The result is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key is not present, or \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if\n the value cannot be converted to the desired type.\n\u003c/p\u003e\u003cp\u003eThis accessor is most useful if the key and value can be absent\n from an object without affecting its validity.  If the key and\n value are mandatory, use '(.:)' instead.\n\u003c/p\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "Object -\u003e Text -\u003e Parser (Maybe a)",
        "fct-type": "function",
        "title": "(.:?)"
      },
      "index": {
        "description": "Retrieve the value associated with the given key of an Object The result is Nothing if the key is not present or empty if the value cannot be converted to the desired type This accessor is most useful if the key and value can be absent from an object without affecting its validity If the key and value are mandatory use instead",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "(.:?) .:?",
        "normalized": "Object-\u003eText-\u003eParser(Maybe a)",
        "package": "yaml",
        "partial": "",
        "signature": "Object-\u003eText-\u003eParser(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:AesonException",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "AesonException String",
        "fct-source": "src/Data-Yaml.html#ParseException",
        "fct-type": "function",
        "title": "AesonException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "AesonException",
        "normalized": "",
        "package": "yaml",
        "partial": "Aeson Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:Array",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "Array !Array",
        "fct-type": "function",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "Array",
        "normalized": "",
        "package": "yaml",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:Bool",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "Bool !Bool",
        "fct-type": "function",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "Bool",
        "normalized": "",
        "package": "yaml",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:InvalidYaml",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "InvalidYaml (Maybe YamlException)",
        "fct-source": "src/Data-Yaml.html#ParseException",
        "fct-type": "function",
        "title": "InvalidYaml"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "InvalidYaml",
        "normalized": "",
        "package": "yaml",
        "partial": "Invalid Yaml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:NonScalarKey",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "NonScalarKey",
        "fct-source": "src/Data-Yaml.html#ParseException",
        "fct-type": "function",
        "title": "NonScalarKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "NonScalarKey",
        "normalized": "",
        "package": "yaml",
        "partial": "Non Scalar Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:Null",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "Null",
        "fct-type": "function",
        "title": "Null"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "Null",
        "normalized": "",
        "package": "yaml",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:Number",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "Number !Scientific",
        "fct-type": "function",
        "title": "Number"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "Number",
        "normalized": "",
        "package": "yaml",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:Object",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "Object !Object",
        "fct-type": "function",
        "title": "Object"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "Object",
        "normalized": "",
        "package": "yaml",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:OtherParseException",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "OtherParseException SomeException",
        "fct-source": "src/Data-Yaml.html#ParseException",
        "fct-type": "function",
        "title": "OtherParseException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "OtherParseException",
        "normalized": "",
        "package": "yaml",
        "partial": "Other Parse Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:String",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "String !Text",
        "fct-type": "function",
        "title": "String"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "String",
        "normalized": "",
        "package": "yaml",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:UnexpectedEvent",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "UnexpectedEvent",
        "fct-source": "src/Data-Yaml.html#ParseException",
        "fct-type": "function",
        "title": "UnexpectedEvent"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "UnexpectedEvent",
        "normalized": "",
        "package": "yaml",
        "partial": "Unexpected Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:UnknownAlias",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "UnknownAlias",
        "fct-source": "src/Data-Yaml.html#ParseException",
        "fct-type": "function",
        "title": "UnknownAlias"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "UnknownAlias",
        "normalized": "",
        "package": "yaml",
        "partial": "Unknown Alias",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:YamlException",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "YamlException String",
        "fct-source": "src/Text-Libyaml.html#YamlException",
        "fct-type": "function",
        "title": "YamlException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "YamlException",
        "normalized": "",
        "package": "yaml",
        "partial": "Yaml Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:YamlMark",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "YamlMark",
        "fct-source": "src/Text-Libyaml.html#YamlMark",
        "fct-type": "function",
        "title": "YamlMark"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "YamlMark",
        "normalized": "",
        "package": "yaml",
        "partial": "Yaml Mark",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:YamlParseException",
      "description": {
        "fct-descr": "\u003cp\u003eproblem, context, index, position line, position column\n\u003c/p\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "YamlParseException",
        "fct-source": "src/Text-Libyaml.html#YamlException",
        "fct-type": "function",
        "title": "YamlParseException"
      },
      "index": {
        "description": "problem context index position line position column",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "YamlParseException",
        "normalized": "",
        "package": "yaml",
        "partial": "Yaml Parse Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:_anchorName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "AnchorName",
        "fct-source": "src/Data-Yaml.html#ParseException",
        "fct-type": "function",
        "title": "_anchorName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "_anchorName",
        "normalized": "",
        "package": "yaml",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:_expected",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "Maybe Event",
        "fct-source": "src/Data-Yaml.html#ParseException",
        "fct-type": "function",
        "title": "_expected"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "_expected",
        "normalized": "",
        "package": "yaml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:_received",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "Maybe Event",
        "fct-source": "src/Data-Yaml.html#ParseException",
        "fct-type": "function",
        "title": "_received"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "_received",
        "normalized": "",
        "package": "yaml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:array",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "[Value] -\u003e Value",
        "fct-source": "src/Data-Yaml.html#array",
        "fct-type": "function",
        "title": "array"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "array",
        "normalized": "[Value]-\u003eValue",
        "package": "yaml",
        "partial": "",
        "signature": "[Value]-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:decode",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "ByteString -\u003e Maybe a",
        "fct-source": "src/Data-Yaml.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "decode",
        "normalized": "ByteString-\u003eMaybe a",
        "package": "yaml",
        "partial": "",
        "signature": "ByteString-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:decodeEither",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "ByteString -\u003e Either String a",
        "fct-source": "src/Data-Yaml.html#decodeEither",
        "fct-type": "function",
        "title": "decodeEither"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "decodeEither",
        "normalized": "ByteString-\u003eEither String a",
        "package": "yaml",
        "partial": "Either",
        "signature": "ByteString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:decodeEither-39-",
      "description": {
        "fct-descr": "\u003cp\u003eMore helpful version of \u003ccode\u003e\u003ca\u003edecodeEither\u003c/a\u003e\u003c/code\u003e which returns the \u003ccode\u003e\u003ca\u003eYamlException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.8.3\n\u003c/p\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "ByteString -\u003e Either ParseException a",
        "fct-source": "src/Data-Yaml.html#decodeEither%27",
        "fct-type": "function",
        "title": "decodeEither'"
      },
      "index": {
        "description": "More helpful version of decodeEither which returns the YamlException Since",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "decodeEither'",
        "normalized": "ByteString-\u003eEither ParseException a",
        "package": "yaml",
        "partial": "Either'",
        "signature": "ByteString-\u003eEither ParseException a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:decodeFile",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "FilePath -\u003e IO (Maybe a)",
        "fct-source": "src/Data-Yaml.html#decodeFile",
        "fct-type": "function",
        "title": "decodeFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "decodeFile",
        "normalized": "FilePath-\u003eIO(Maybe a)",
        "package": "yaml",
        "partial": "File",
        "signature": "FilePath-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:decodeFileEither",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003edecodeFile\u003c/a\u003e\u003c/code\u003e which should not throw runtime exceptions.\n\u003c/p\u003e\u003cp\u003eSince 0.8.4\n\u003c/p\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "FilePath -\u003e IO (Either ParseException a)",
        "fct-source": "src/Data-Yaml.html#decodeFileEither",
        "fct-type": "function",
        "title": "decodeFileEither"
      },
      "index": {
        "description": "version of decodeFile which should not throw runtime exceptions Since",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "decodeFileEither",
        "normalized": "FilePath-\u003eIO(Either ParseException a)",
        "package": "yaml",
        "partial": "File Either",
        "signature": "FilePath-\u003eIO(Either ParseException a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:decodeHelper",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "Source Parse Event -\u003e IO (Either ParseException (Either String a))",
        "fct-source": "src/Data-Yaml.html#decodeHelper",
        "fct-type": "function",
        "title": "decodeHelper"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "decodeHelper",
        "normalized": "Source Parse Event-\u003eIO(Either ParseException(Either String a))",
        "package": "yaml",
        "partial": "Helper",
        "signature": "Source Parse Event-\u003eIO(Either ParseException(Either String a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:encode",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Data-Yaml.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "encode",
        "normalized": "a-\u003eByteString",
        "package": "yaml",
        "partial": "",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:encodeFile",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "FilePath -\u003e a -\u003e IO ()",
        "fct-source": "src/Data-Yaml.html#encodeFile",
        "fct-type": "function",
        "title": "encodeFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "encodeFile",
        "normalized": "FilePath-\u003ea-\u003eIO()",
        "package": "yaml",
        "partial": "File",
        "signature": "FilePath-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:object",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e from a list of name/value \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003es.  If duplicate\n keys arise, earlier keys and their associated values win.\n\u003c/p\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "[Pair] -\u003e Value",
        "fct-type": "function",
        "title": "object"
      },
      "index": {
        "description": "Create Value from list of name value Pair If duplicate keys arise earlier keys and their associated values win",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "object",
        "normalized": "[Pair]-\u003eValue",
        "package": "yaml",
        "partial": "",
        "signature": "[Pair]-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:parseEither",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e with an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e result type.\n\u003c/p\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "(a -\u003e Parser b) -\u003e a -\u003e Either String b",
        "fct-type": "function",
        "title": "parseEither"
      },
      "index": {
        "description": "Run Parser with an Either result type",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "parseEither",
        "normalized": "(a-\u003eParser b)-\u003ea-\u003eEither String b",
        "package": "yaml",
        "partial": "Either",
        "signature": "(a-\u003eParser b)-\u003ea-\u003eEither String b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:parseJSON",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "Value -\u003e Parser a",
        "fct-type": "method",
        "title": "parseJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "parseJSON",
        "normalized": "Value-\u003eParser a",
        "package": "yaml",
        "partial": "JSON",
        "signature": "Value-\u003eParser a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:parseMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e result type.\n\u003c/p\u003e",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "(a -\u003e Parser b) -\u003e a -\u003e Maybe b",
        "fct-type": "function",
        "title": "parseMaybe"
      },
      "index": {
        "description": "Run Parser with Maybe result type",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "parseMaybe",
        "normalized": "(a-\u003eParser b)-\u003ea-\u003eMaybe b",
        "package": "yaml",
        "partial": "Maybe",
        "signature": "(a-\u003eParser b)-\u003ea-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:parseMonad",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "(a -\u003e Parser b) -\u003e a -\u003e m b",
        "fct-source": "src/Data-Yaml.html#parseMonad",
        "fct-type": "function",
        "title": "parseMonad"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "parseMonad",
        "normalized": "(a-\u003eParser b)-\u003ea-\u003ec b",
        "package": "yaml",
        "partial": "Monad",
        "signature": "(a-\u003eParser b)-\u003ea-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:toJSON",
      "description": {
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "a -\u003e Value",
        "fct-type": "method",
        "title": "toJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "toJSON",
        "normalized": "a-\u003eValue",
        "package": "yaml",
        "partial": "JSON",
        "signature": "a-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:yamlColumn",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "Int",
        "fct-source": "src/Text-Libyaml.html#YamlMark",
        "fct-type": "function",
        "title": "yamlColumn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "yamlColumn",
        "normalized": "",
        "package": "yaml",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:yamlContext",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "String",
        "fct-source": "src/Text-Libyaml.html#YamlException",
        "fct-type": "function",
        "title": "yamlContext"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "yamlContext",
        "normalized": "",
        "package": "yaml",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:yamlIndex",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "Int",
        "fct-source": "src/Text-Libyaml.html#YamlMark",
        "fct-type": "function",
        "title": "yamlIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "yamlIndex",
        "normalized": "",
        "package": "yaml",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:yamlLine",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "Int",
        "fct-source": "src/Text-Libyaml.html#YamlMark",
        "fct-type": "function",
        "title": "yamlLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "yamlLine",
        "normalized": "",
        "package": "yaml",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:yamlProblem",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "String",
        "fct-source": "src/Text-Libyaml.html#YamlException",
        "fct-type": "function",
        "title": "yamlProblem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "yamlProblem",
        "normalized": "",
        "package": "yaml",
        "partial": "Problem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Data-Yaml.html#v:yamlProblemMark",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Yaml",
        "fct-package": "yaml",
        "fct-signature": "YamlMark",
        "fct-source": "src/Text-Libyaml.html#YamlException",
        "fct-type": "function",
        "title": "yamlProblemMark"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Yaml",
        "module": "Data.Yaml",
        "name": "yamlProblemMark",
        "normalized": "",
        "package": "yaml",
        "partial": "Problem Mark",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLow-level, streaming YAML interface. For a higher-level interface, see\n \u003ca\u003eData.Yaml\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "module",
        "fct-source": "src/Text-Libyaml.html",
        "fct-type": "module",
        "title": "Libyaml"
      },
      "index": {
        "description": "Low-level streaming YAML interface For higher-level interface see Data.Yaml",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "Libyaml",
        "normalized": "",
        "package": "yaml",
        "partial": "Libyaml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#t:Anchor",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "type",
        "fct-source": "src/Text-Libyaml.html#Anchor",
        "fct-type": "type",
        "title": "Anchor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "Anchor",
        "normalized": "",
        "package": "yaml",
        "partial": "Anchor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#t:AnchorName",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "type",
        "fct-source": "src/Text-Libyaml.html#AnchorName",
        "fct-type": "type",
        "title": "AnchorName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "AnchorName",
        "normalized": "",
        "package": "yaml",
        "partial": "Anchor Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#t:Event",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "data",
        "fct-source": "src/Text-Libyaml.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "Event",
        "normalized": "",
        "package": "yaml",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#t:Style",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "data",
        "fct-source": "src/Text-Libyaml.html#Style",
        "fct-type": "data",
        "title": "Style"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "Style",
        "normalized": "",
        "package": "yaml",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#t:Tag",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "data",
        "fct-source": "src/Text-Libyaml.html#Tag",
        "fct-type": "data",
        "title": "Tag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "Tag",
        "normalized": "",
        "package": "yaml",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#t:YamlException",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "data",
        "fct-source": "src/Text-Libyaml.html#YamlException",
        "fct-type": "data",
        "title": "YamlException"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "YamlException",
        "normalized": "",
        "package": "yaml",
        "partial": "Yaml Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#t:YamlMark",
      "description": {
        "fct-descr": "\u003cp\u003eThe pointer position\n\u003c/p\u003e",
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "data",
        "fct-source": "src/Text-Libyaml.html#YamlMark",
        "fct-type": "data",
        "title": "YamlMark"
      },
      "index": {
        "description": "The pointer position",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "YamlMark",
        "normalized": "",
        "package": "yaml",
        "partial": "Yaml Mark",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:Any",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "Any",
        "fct-source": "src/Text-Libyaml.html#Style",
        "fct-type": "function",
        "title": "Any"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "Any",
        "normalized": "",
        "package": "yaml",
        "partial": "Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:BoolTag",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "BoolTag",
        "fct-source": "src/Text-Libyaml.html#Tag",
        "fct-type": "function",
        "title": "BoolTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "BoolTag",
        "normalized": "",
        "package": "yaml",
        "partial": "Bool Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:DoubleQuoted",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "DoubleQuoted",
        "fct-source": "src/Text-Libyaml.html#Style",
        "fct-type": "function",
        "title": "DoubleQuoted"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "DoubleQuoted",
        "normalized": "",
        "package": "yaml",
        "partial": "Double Quoted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:EventAlias",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "EventAlias !AnchorName",
        "fct-source": "src/Text-Libyaml.html#Event",
        "fct-type": "function",
        "title": "EventAlias"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "EventAlias",
        "normalized": "",
        "package": "yaml",
        "partial": "Event Alias",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:EventDocumentEnd",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "EventDocumentEnd",
        "fct-source": "src/Text-Libyaml.html#Event",
        "fct-type": "function",
        "title": "EventDocumentEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "EventDocumentEnd",
        "normalized": "",
        "package": "yaml",
        "partial": "Event Document End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:EventDocumentStart",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "EventDocumentStart",
        "fct-source": "src/Text-Libyaml.html#Event",
        "fct-type": "function",
        "title": "EventDocumentStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "EventDocumentStart",
        "normalized": "",
        "package": "yaml",
        "partial": "Event Document Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:EventMappingEnd",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "EventMappingEnd",
        "fct-source": "src/Text-Libyaml.html#Event",
        "fct-type": "function",
        "title": "EventMappingEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "EventMappingEnd",
        "normalized": "",
        "package": "yaml",
        "partial": "Event Mapping End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:EventMappingStart",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "EventMappingStart !Anchor",
        "fct-source": "src/Text-Libyaml.html#Event",
        "fct-type": "function",
        "title": "EventMappingStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "EventMappingStart",
        "normalized": "",
        "package": "yaml",
        "partial": "Event Mapping Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:EventScalar",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "EventScalar !ByteString !Tag !Style !Anchor",
        "fct-source": "src/Text-Libyaml.html#Event",
        "fct-type": "function",
        "title": "EventScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "EventScalar",
        "normalized": "",
        "package": "yaml",
        "partial": "Event Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:EventSequenceEnd",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "EventSequenceEnd",
        "fct-source": "src/Text-Libyaml.html#Event",
        "fct-type": "function",
        "title": "EventSequenceEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "EventSequenceEnd",
        "normalized": "",
        "package": "yaml",
        "partial": "Event Sequence End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:EventSequenceStart",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "EventSequenceStart !Anchor",
        "fct-source": "src/Text-Libyaml.html#Event",
        "fct-type": "function",
        "title": "EventSequenceStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "EventSequenceStart",
        "normalized": "",
        "package": "yaml",
        "partial": "Event Sequence Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:EventStreamEnd",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "EventStreamEnd",
        "fct-source": "src/Text-Libyaml.html#Event",
        "fct-type": "function",
        "title": "EventStreamEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "EventStreamEnd",
        "normalized": "",
        "package": "yaml",
        "partial": "Event Stream End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:EventStreamStart",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "EventStreamStart",
        "fct-source": "src/Text-Libyaml.html#Event",
        "fct-type": "function",
        "title": "EventStreamStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "EventStreamStart",
        "normalized": "",
        "package": "yaml",
        "partial": "Event Stream Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:FloatTag",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "FloatTag",
        "fct-source": "src/Text-Libyaml.html#Tag",
        "fct-type": "function",
        "title": "FloatTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "FloatTag",
        "normalized": "",
        "package": "yaml",
        "partial": "Float Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:Folded",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "Folded",
        "fct-source": "src/Text-Libyaml.html#Style",
        "fct-type": "function",
        "title": "Folded"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "Folded",
        "normalized": "",
        "package": "yaml",
        "partial": "Folded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:IntTag",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "IntTag",
        "fct-source": "src/Text-Libyaml.html#Tag",
        "fct-type": "function",
        "title": "IntTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "IntTag",
        "normalized": "",
        "package": "yaml",
        "partial": "Int Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:Literal",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "Literal",
        "fct-source": "src/Text-Libyaml.html#Style",
        "fct-type": "function",
        "title": "Literal"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "Literal",
        "normalized": "",
        "package": "yaml",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:MapTag",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "MapTag",
        "fct-source": "src/Text-Libyaml.html#Tag",
        "fct-type": "function",
        "title": "MapTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "MapTag",
        "normalized": "",
        "package": "yaml",
        "partial": "Map Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:NoTag",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "NoTag",
        "fct-source": "src/Text-Libyaml.html#Tag",
        "fct-type": "function",
        "title": "NoTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "NoTag",
        "normalized": "",
        "package": "yaml",
        "partial": "No Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:NullTag",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "NullTag",
        "fct-source": "src/Text-Libyaml.html#Tag",
        "fct-type": "function",
        "title": "NullTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "NullTag",
        "normalized": "",
        "package": "yaml",
        "partial": "Null Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:Plain",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "Plain",
        "fct-source": "src/Text-Libyaml.html#Style",
        "fct-type": "function",
        "title": "Plain"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "Plain",
        "normalized": "",
        "package": "yaml",
        "partial": "Plain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:PlainNoTag",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "PlainNoTag",
        "fct-source": "src/Text-Libyaml.html#Style",
        "fct-type": "function",
        "title": "PlainNoTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "PlainNoTag",
        "normalized": "",
        "package": "yaml",
        "partial": "Plain No Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:SeqTag",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "SeqTag",
        "fct-source": "src/Text-Libyaml.html#Tag",
        "fct-type": "function",
        "title": "SeqTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "SeqTag",
        "normalized": "",
        "package": "yaml",
        "partial": "Seq Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:SetTag",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "SetTag",
        "fct-source": "src/Text-Libyaml.html#Tag",
        "fct-type": "function",
        "title": "SetTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "SetTag",
        "normalized": "",
        "package": "yaml",
        "partial": "Set Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:SingleQuoted",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "SingleQuoted",
        "fct-source": "src/Text-Libyaml.html#Style",
        "fct-type": "function",
        "title": "SingleQuoted"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "SingleQuoted",
        "normalized": "",
        "package": "yaml",
        "partial": "Single Quoted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:StrTag",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "StrTag",
        "fct-source": "src/Text-Libyaml.html#Tag",
        "fct-type": "function",
        "title": "StrTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "StrTag",
        "normalized": "",
        "package": "yaml",
        "partial": "Str Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:UriTag",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "UriTag String",
        "fct-source": "src/Text-Libyaml.html#Tag",
        "fct-type": "function",
        "title": "UriTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "UriTag",
        "normalized": "",
        "package": "yaml",
        "partial": "Uri Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:YamlException",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "YamlException String",
        "fct-source": "src/Text-Libyaml.html#YamlException",
        "fct-type": "function",
        "title": "YamlException"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "YamlException",
        "normalized": "",
        "package": "yaml",
        "partial": "Yaml Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:YamlMark",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "YamlMark",
        "fct-source": "src/Text-Libyaml.html#YamlMark",
        "fct-type": "function",
        "title": "YamlMark"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "YamlMark",
        "normalized": "",
        "package": "yaml",
        "partial": "Yaml Mark",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:YamlParseException",
      "description": {
        "fct-descr": "\u003cp\u003eproblem, context, index, position line, position column\n\u003c/p\u003e",
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "YamlParseException",
        "fct-source": "src/Text-Libyaml.html#YamlException",
        "fct-type": "function",
        "title": "YamlParseException"
      },
      "index": {
        "description": "problem context index position line position column",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "YamlParseException",
        "normalized": "",
        "package": "yaml",
        "partial": "Yaml Parse Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:decode",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "ByteString -\u003e Producer m Event",
        "fct-source": "src/Text-Libyaml.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "decode",
        "normalized": "ByteString-\u003eProducer a Event",
        "package": "yaml",
        "partial": "",
        "signature": "ByteString-\u003eProducer m Event"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:decodeFile",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "FilePath -\u003e Producer m Event",
        "fct-source": "src/Text-Libyaml.html#decodeFile",
        "fct-type": "function",
        "title": "decodeFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "decodeFile",
        "normalized": "FilePath-\u003eProducer a Event",
        "package": "yaml",
        "partial": "File",
        "signature": "FilePath-\u003eProducer m Event"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:encode",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "Consumer Event m ByteString",
        "fct-source": "src/Text-Libyaml.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "encode",
        "normalized": "",
        "package": "yaml",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:encodeFile",
      "description": {
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "FilePath -\u003e Consumer Event m ()",
        "fct-source": "src/Text-Libyaml.html#encodeFile",
        "fct-type": "function",
        "title": "encodeFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "encodeFile",
        "normalized": "FilePath-\u003eConsumer Event a()",
        "package": "yaml",
        "partial": "File",
        "signature": "FilePath-\u003eConsumer Event m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:yamlColumn",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "Int",
        "fct-source": "src/Text-Libyaml.html#YamlMark",
        "fct-type": "function",
        "title": "yamlColumn"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "yamlColumn",
        "normalized": "",
        "package": "yaml",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:yamlContext",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "String",
        "fct-source": "src/Text-Libyaml.html#YamlException",
        "fct-type": "function",
        "title": "yamlContext"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "yamlContext",
        "normalized": "",
        "package": "yaml",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:yamlIndex",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "Int",
        "fct-source": "src/Text-Libyaml.html#YamlMark",
        "fct-type": "function",
        "title": "yamlIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "yamlIndex",
        "normalized": "",
        "package": "yaml",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:yamlLine",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "Int",
        "fct-source": "src/Text-Libyaml.html#YamlMark",
        "fct-type": "function",
        "title": "yamlLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "yamlLine",
        "normalized": "",
        "package": "yaml",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:yamlProblem",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "String",
        "fct-source": "src/Text-Libyaml.html#YamlException",
        "fct-type": "function",
        "title": "yamlProblem"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "yamlProblem",
        "normalized": "",
        "package": "yaml",
        "partial": "Problem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yaml/docs/Text-Libyaml.html#v:yamlProblemMark",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Libyaml",
        "fct-package": "yaml",
        "fct-signature": "YamlMark",
        "fct-source": "src/Text-Libyaml.html#YamlException",
        "fct-type": "function",
        "title": "yamlProblemMark"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Libyaml",
        "module": "Text.Libyaml",
        "name": "yamlProblemMark",
        "normalized": "",
        "package": "yaml",
        "partial": "Problem Mark",
        "signature": ""
      }
    }
  }
]