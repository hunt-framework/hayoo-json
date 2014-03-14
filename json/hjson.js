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
        "word": "hjson"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HJson.Pretty",
          "name": "Pretty",
          "package": "hjson",
          "source": "src/Text-HJson-Pretty.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text HJson Pretty",
          "module": "Text.HJson.Pretty",
          "name": "Pretty",
          "package": "hjson",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-prints JSON with given indenter\n\u003c/p\u003e",
          "module": "Text.HJson.Pretty",
          "name": "toString",
          "package": "hjson",
          "signature": "String -\u003e Json -\u003e String",
          "source": "src/Text-HJson-Pretty.html#toString",
          "type": "function"
        },
        "index": {
          "description": "Pretty-prints JSON with given indenter",
          "hierarchy": "Text HJson Pretty",
          "module": "Text.HJson.Pretty",
          "name": "toString",
          "normalized": "String-\u003eJson-\u003eString",
          "package": "hjson",
          "partial": "String",
          "signature": "String-\u003eJson-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson-Pretty.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HJson",
          "name": "HJson",
          "package": "hjson",
          "source": "src/Text-HJson.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "HJson",
          "package": "hjson",
          "partial": "HJson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HJson",
          "name": "Json",
          "package": "hjson",
          "source": "src/Text-HJson.html#Json",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "Json",
          "package": "hjson",
          "partial": "Json",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#t:Json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of types that can be converted to or from JSON\n\u003c/p\u003e",
          "module": "Text.HJson",
          "name": "Jsonable",
          "package": "hjson",
          "source": "src/Text-HJson.html#Jsonable",
          "type": "class"
        },
        "index": {
          "description": "Class of types that can be converted to or from JSON",
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "Jsonable",
          "package": "hjson",
          "partial": "Jsonable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#t:Jsonable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnother wrapper for Map String a. It have different \u003ccode\u003e\u003ca\u003eJsonable\u003c/a\u003e\u003c/code\u003e\n   instance. Undecodable values in \u003ccode\u003e\u003ca\u003eJObject\u003c/a\u003e\u003c/code\u003e are ignored.\n\u003c/p\u003e",
          "module": "Text.HJson",
          "name": "LaxObject",
          "package": "hjson",
          "source": "src/Text-HJson.html#LaxObject",
          "type": "newtype"
        },
        "index": {
          "description": "Another wrapper for Map String It have different Jsonable instance Undecodable values in JObject are ignored",
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "LaxObject",
          "package": "hjson",
          "partial": "Lax Object",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#t:LaxObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewtype wrapper for list. It's user to avoid overlapping\n   instances for string\n\u003c/p\u003e",
          "module": "Text.HJson",
          "name": "List",
          "package": "hjson",
          "source": "src/Text-HJson.html#List",
          "type": "newtype"
        },
        "index": {
          "description": "Newtype wrapper for list It user to avoid overlapping instances for string",
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "List",
          "package": "hjson",
          "partial": "List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#t:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNewtype wrapper for Map String a. Similarly it's used to avoid\n   overlapping instances for more generic Map a b instance.\n\u003c/p\u003e\u003cp\u003eJsonable instance for this type require that every JSON value in\n   map should be properly decoded.\n\u003c/p\u003e",
          "module": "Text.HJson",
          "name": "Object",
          "package": "hjson",
          "source": "src/Text-HJson.html#Object",
          "type": "newtype"
        },
        "index": {
          "description": "Newtype wrapper for Map String Similarly it used to avoid overlapping instances for more generic Map instance Jsonable instance for this type require that every JSON value in map should be properly decoded",
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "Object",
          "package": "hjson",
          "partial": "Object",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HJson",
          "name": "JArray",
          "package": "hjson",
          "signature": "JArray [Json]",
          "source": "src/Text-HJson.html#Json",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "JArray",
          "normalized": "JArray[Json]",
          "package": "hjson",
          "partial": "JArray",
          "signature": "JArray[Json]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:JArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HJson",
          "name": "JBool",
          "package": "hjson",
          "signature": "JBool Bool",
          "source": "src/Text-HJson.html#Json",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "JBool",
          "package": "hjson",
          "partial": "JBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:JBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HJson",
          "name": "JNull",
          "package": "hjson",
          "signature": "JNull",
          "source": "src/Text-HJson.html#Json",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "JNull",
          "package": "hjson",
          "partial": "JNull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:JNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HJson",
          "name": "JNumber",
          "package": "hjson",
          "signature": "JNumber Rational",
          "source": "src/Text-HJson.html#Json",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "JNumber",
          "package": "hjson",
          "partial": "JNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:JNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HJson",
          "name": "JObject",
          "package": "hjson",
          "signature": "JObject (Map String Json)",
          "source": "src/Text-HJson.html#Json",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "JObject",
          "package": "hjson",
          "partial": "JObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:JObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HJson",
          "name": "JString",
          "package": "hjson",
          "signature": "JString String",
          "source": "src/Text-HJson.html#Json",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "JString",
          "package": "hjson",
          "partial": "JString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:JString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HJson",
          "name": "LaxObject",
          "package": "hjson",
          "signature": "LaxObject",
          "source": "src/Text-HJson.html#LaxObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "LaxObject",
          "package": "hjson",
          "partial": "Lax Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:LaxObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HJson",
          "name": "List",
          "package": "hjson",
          "signature": "List",
          "source": "src/Text-HJson.html#List",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "List",
          "package": "hjson",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HJson",
          "name": "Object",
          "package": "hjson",
          "signature": "Object",
          "source": "src/Text-HJson.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "Object",
          "package": "hjson",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HJson",
          "name": "asLaxMap",
          "package": "hjson",
          "signature": "Map String a",
          "source": "src/Text-HJson.html#LaxObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "asLaxMap",
          "package": "hjson",
          "partial": "Lax Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:asLaxMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HJson",
          "name": "asList",
          "package": "hjson",
          "signature": "[a]",
          "source": "src/Text-HJson.html#List",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "asList",
          "normalized": "[a]",
          "package": "hjson",
          "partial": "List",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:asList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HJson",
          "name": "asMap",
          "package": "hjson",
          "signature": "Map String a",
          "source": "src/Text-HJson.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "asMap",
          "package": "hjson",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:asMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscapes string for inclusion in JSON\n\u003c/p\u003e",
          "module": "Text.HJson",
          "name": "escapeJString",
          "package": "hjson",
          "signature": "String -\u003e String",
          "source": "src/Text-HJson.html#escapeJString",
          "type": "function"
        },
        "index": {
          "description": "Escapes string for inclusion in JSON",
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "escapeJString",
          "normalized": "String-\u003eString",
          "package": "hjson",
          "partial": "JString",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:escapeJString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserialize value. Returns Nothing in case of failure. Default\n   implementation always returns Nothing\n\u003c/p\u003e",
          "module": "Text.HJson",
          "name": "fromJson",
          "package": "hjson",
          "signature": "Json -\u003e Maybe a",
          "source": "src/Text-HJson.html#fromJson",
          "type": "method"
        },
        "index": {
          "description": "Deserialize value Returns Nothing in case of failure Default implementation always returns Nothing",
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "fromJson",
          "normalized": "Json-\u003eMaybe a",
          "package": "hjson",
          "partial": "Json",
          "signature": "Json-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:fromJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses JSON string\n\u003c/p\u003e",
          "module": "Text.HJson",
          "name": "fromString",
          "package": "hjson",
          "signature": "String -\u003e Either ParseError Json",
          "source": "src/Text-HJson.html#fromString",
          "type": "function"
        },
        "index": {
          "description": "Parses JSON string",
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "fromString",
          "normalized": "String-\u003eEither ParseError Json",
          "package": "hjson",
          "partial": "String",
          "signature": "String-\u003eEither ParseError Json",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsec parser for JSON\n\u003c/p\u003e",
          "module": "Text.HJson",
          "name": "jsonParser",
          "package": "hjson",
          "signature": "ParsecT String s m Json",
          "source": "src/Text-HJson.html#jsonParser",
          "type": "function"
        },
        "index": {
          "description": "Parsec parser for JSON",
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "jsonParser",
          "package": "hjson",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:jsonParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert value to JSON representation\n\u003c/p\u003e",
          "module": "Text.HJson",
          "name": "toJson",
          "package": "hjson",
          "signature": "a -\u003e Json",
          "source": "src/Text-HJson.html#toJson",
          "type": "method"
        },
        "index": {
          "description": "Convert value to JSON representation",
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "toJson",
          "normalized": "a-\u003eJson",
          "package": "hjson",
          "partial": "Json",
          "signature": "a-\u003eJson",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:toJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders JSON to String\n\u003c/p\u003e",
          "module": "Text.HJson",
          "name": "toString",
          "package": "hjson",
          "signature": "Json -\u003e String",
          "source": "src/Text-HJson.html#toString",
          "type": "function"
        },
        "index": {
          "description": "Renders JSON to String",
          "hierarchy": "Text HJson",
          "module": "Text.HJson",
          "name": "toString",
          "normalized": "Json-\u003eString",
          "package": "hjson",
          "partial": "String",
          "signature": "Json-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hjson/docs/Text-HJson.html#v:toString"
      }
    }
  ]
]