[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson-Pretty.html#",
      "description": {
        "fct-module": "Text.HJson.Pretty",
        "fct-package": "hjson",
        "fct-signature": "module",
        "fct-source": "src/Text-HJson-Pretty.html",
        "fct-type": "module",
        "title": "Pretty"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HJson Pretty",
        "module": "Text.HJson.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "hjson",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson-Pretty.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-prints JSON with given indenter\n\u003c/p\u003e",
        "fct-module": "Text.HJson.Pretty",
        "fct-package": "hjson",
        "fct-signature": "String -\u003e Json -\u003e String",
        "fct-source": "src/Text-HJson-Pretty.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "Pretty-prints JSON with given indenter",
        "hierarchy": "Text HJson Pretty",
        "module": "Text.HJson.Pretty",
        "name": "toString",
        "normalized": "String-\u003eJson-\u003eString",
        "package": "hjson",
        "partial": "String",
        "signature": "String-\u003eJson-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#",
      "description": {
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "module",
        "fct-source": "src/Text-HJson.html",
        "fct-type": "module",
        "title": "HJson"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "HJson",
        "normalized": "",
        "package": "hjson",
        "partial": "HJson",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#t:Json",
      "description": {
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "data",
        "fct-source": "src/Text-HJson.html#Json",
        "fct-type": "data",
        "title": "Json"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "Json",
        "normalized": "",
        "package": "hjson",
        "partial": "Json",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#t:Jsonable",
      "description": {
        "fct-descr": "\u003cp\u003eClass of types that can be converted to or from JSON\n\u003c/p\u003e",
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "class",
        "fct-source": "src/Text-HJson.html#Jsonable",
        "fct-type": "class",
        "title": "Jsonable"
      },
      "index": {
        "description": "Class of types that can be converted to or from JSON",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "Jsonable",
        "normalized": "",
        "package": "hjson",
        "partial": "Jsonable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#t:LaxObject",
      "description": {
        "fct-descr": "\u003cp\u003eAnother wrapper for Map String a. It have different \u003ccode\u003e\u003ca\u003eJsonable\u003c/a\u003e\u003c/code\u003e\n   instance. Undecodable values in \u003ccode\u003e\u003ca\u003eJObject\u003c/a\u003e\u003c/code\u003e are ignored.\n\u003c/p\u003e",
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "newtype",
        "fct-source": "src/Text-HJson.html#LaxObject",
        "fct-type": "newtype",
        "title": "LaxObject"
      },
      "index": {
        "description": "Another wrapper for Map String It have different Jsonable instance Undecodable values in JObject are ignored",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "LaxObject",
        "normalized": "",
        "package": "hjson",
        "partial": "Lax Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#t:List",
      "description": {
        "fct-descr": "\u003cp\u003eNewtype wrapper for list. It's user to avoid overlapping\n   instances for string\n\u003c/p\u003e",
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "newtype",
        "fct-source": "src/Text-HJson.html#List",
        "fct-type": "newtype",
        "title": "List"
      },
      "index": {
        "description": "Newtype wrapper for list It user to avoid overlapping instances for string",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "List",
        "normalized": "",
        "package": "hjson",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#t:Object",
      "description": {
        "fct-descr": "\u003cp\u003eNewtype wrapper for Map String a. Similarly it's used to avoid\n   overlapping instances for more generic Map a b instance.\n\u003c/p\u003e\u003cp\u003eJsonable instance for this type require that every JSON value in\n   map should be properly decoded.\n\u003c/p\u003e",
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "newtype",
        "fct-source": "src/Text-HJson.html#Object",
        "fct-type": "newtype",
        "title": "Object"
      },
      "index": {
        "description": "Newtype wrapper for Map String Similarly it used to avoid overlapping instances for more generic Map instance Jsonable instance for this type require that every JSON value in map should be properly decoded",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "Object",
        "normalized": "",
        "package": "hjson",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:JArray",
      "description": {
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "JArray [Json]",
        "fct-source": "src/Text-HJson.html#Json",
        "fct-type": "function",
        "title": "JArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "JArray",
        "normalized": "JArray[Json]",
        "package": "hjson",
        "partial": "JArray",
        "signature": "JArray[Json]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:JBool",
      "description": {
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "JBool Bool",
        "fct-source": "src/Text-HJson.html#Json",
        "fct-type": "function",
        "title": "JBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "JBool",
        "normalized": "",
        "package": "hjson",
        "partial": "JBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:JNull",
      "description": {
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "JNull",
        "fct-source": "src/Text-HJson.html#Json",
        "fct-type": "function",
        "title": "JNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "JNull",
        "normalized": "",
        "package": "hjson",
        "partial": "JNull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:JNumber",
      "description": {
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "JNumber Rational",
        "fct-source": "src/Text-HJson.html#Json",
        "fct-type": "function",
        "title": "JNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "JNumber",
        "normalized": "",
        "package": "hjson",
        "partial": "JNumber",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:JObject",
      "description": {
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "JObject (Map String Json)",
        "fct-source": "src/Text-HJson.html#Json",
        "fct-type": "function",
        "title": "JObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "JObject",
        "normalized": "",
        "package": "hjson",
        "partial": "JObject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:JString",
      "description": {
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "JString String",
        "fct-source": "src/Text-HJson.html#Json",
        "fct-type": "function",
        "title": "JString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "JString",
        "normalized": "",
        "package": "hjson",
        "partial": "JString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:LaxObject",
      "description": {
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "LaxObject",
        "fct-source": "src/Text-HJson.html#LaxObject",
        "fct-type": "function",
        "title": "LaxObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "LaxObject",
        "normalized": "",
        "package": "hjson",
        "partial": "Lax Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:List",
      "description": {
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "List",
        "fct-source": "src/Text-HJson.html#List",
        "fct-type": "function",
        "title": "List"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "List",
        "normalized": "",
        "package": "hjson",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:Object",
      "description": {
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "Object",
        "fct-source": "src/Text-HJson.html#Object",
        "fct-type": "function",
        "title": "Object"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "Object",
        "normalized": "",
        "package": "hjson",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:asLaxMap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "Map String a",
        "fct-source": "src/Text-HJson.html#LaxObject",
        "fct-type": "function",
        "title": "asLaxMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "asLaxMap",
        "normalized": "",
        "package": "hjson",
        "partial": "Lax Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:asList",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "[a]",
        "fct-source": "src/Text-HJson.html#List",
        "fct-type": "function",
        "title": "asList"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "asList",
        "normalized": "[a]",
        "package": "hjson",
        "partial": "List",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:asMap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "Map String a",
        "fct-source": "src/Text-HJson.html#Object",
        "fct-type": "function",
        "title": "asMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "asMap",
        "normalized": "",
        "package": "hjson",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:escapeJString",
      "description": {
        "fct-descr": "\u003cp\u003eEscapes string for inclusion in JSON\n\u003c/p\u003e",
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Text-HJson.html#escapeJString",
        "fct-type": "function",
        "title": "escapeJString"
      },
      "index": {
        "description": "Escapes string for inclusion in JSON",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "escapeJString",
        "normalized": "String-\u003eString",
        "package": "hjson",
        "partial": "JString",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:fromJson",
      "description": {
        "fct-descr": "\u003cp\u003eDeserialize value. Returns Nothing in case of failure. Default\n   implementation always returns Nothing\n\u003c/p\u003e",
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "Json -\u003e Maybe a",
        "fct-source": "src/Text-HJson.html#fromJson",
        "fct-type": "method",
        "title": "fromJson"
      },
      "index": {
        "description": "Deserialize value Returns Nothing in case of failure Default implementation always returns Nothing",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "fromJson",
        "normalized": "Json-\u003eMaybe a",
        "package": "hjson",
        "partial": "Json",
        "signature": "Json-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:fromString",
      "description": {
        "fct-descr": "\u003cp\u003eParses JSON string\n\u003c/p\u003e",
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "String -\u003e Either ParseError Json",
        "fct-source": "src/Text-HJson.html#fromString",
        "fct-type": "function",
        "title": "fromString"
      },
      "index": {
        "description": "Parses JSON string",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "fromString",
        "normalized": "String-\u003eEither ParseError Json",
        "package": "hjson",
        "partial": "String",
        "signature": "String-\u003eEither ParseError Json"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:jsonParser",
      "description": {
        "fct-descr": "\u003cp\u003eParsec parser for JSON\n\u003c/p\u003e",
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "ParsecT String s m Json",
        "fct-source": "src/Text-HJson.html#jsonParser",
        "fct-type": "function",
        "title": "jsonParser"
      },
      "index": {
        "description": "Parsec parser for JSON",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "jsonParser",
        "normalized": "",
        "package": "hjson",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:toJson",
      "description": {
        "fct-descr": "\u003cp\u003eConvert value to JSON representation\n\u003c/p\u003e",
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "a -\u003e Json",
        "fct-source": "src/Text-HJson.html#toJson",
        "fct-type": "method",
        "title": "toJson"
      },
      "index": {
        "description": "Convert value to JSON representation",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "toJson",
        "normalized": "a-\u003eJson",
        "package": "hjson",
        "partial": "Json",
        "signature": "a-\u003eJson"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:toString",
      "description": {
        "fct-descr": "\u003cp\u003eRenders JSON to String\n\u003c/p\u003e",
        "fct-module": "Text.HJson",
        "fct-package": "hjson",
        "fct-signature": "Json -\u003e String",
        "fct-source": "src/Text-HJson.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "Renders JSON to String",
        "hierarchy": "Text HJson",
        "module": "Text.HJson",
        "name": "toString",
        "normalized": "Json-\u003eString",
        "package": "hjson",
        "partial": "String",
        "signature": "Json-\u003eString"
      }
    }
  }
]