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
        "word": "type-cereal"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType-level serialization (i.e. type -\u003e \u003ccode\u003etype-digit\u003c/code\u003e type-level numeral).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Type.Serialize.Base",
          "name": "Base",
          "package": "type-cereal",
          "source": "src/Type-Serialize-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Type-level serialization i.e type type-digit type-level numeral",
          "hierarchy": "Type Serialize Base",
          "module": "Type.Serialize.Base",
          "name": "Base",
          "package": "type-cereal",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-cereal/docs/Type-Serialize-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSerialize\u003c/code\u003e maps a type to its unique type-level serialization.\n\u003c/p\u003e",
          "module": "Type.Serialize.Base",
          "name": "Serialize",
          "package": "type-cereal",
          "signature": "Serialize",
          "type": "function"
        },
        "index": {
          "description": "Serialize maps type to its unique type-level serialization",
          "hierarchy": "Type Serialize Base",
          "module": "Type.Serialize.Base",
          "name": "Serialize",
          "package": "type-cereal",
          "partial": "Serialize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-cereal/docs/Type-Serialize-Base.html#t:Serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode uses the \u003ccode\u003ecereal\u003c/code\u003e package serializer to encode the value and then\n uses \u003ccode\u003etype-digits\u003c/code\u003e to reflect it as a type-level numeral.\n\u003c/p\u003e",
          "module": "Type.Serialize.Base",
          "name": "encode",
          "package": "type-cereal",
          "signature": "a -\u003e Type",
          "source": "src/Type-Serialize-Base.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode uses the cereal package serializer to encode the value and then uses type-digits to reflect it as type-level numeral",
          "hierarchy": "Type Serialize Base",
          "module": "Type.Serialize.Base",
          "name": "encode",
          "normalized": "a-\u003eType",
          "package": "type-cereal",
          "signature": "a-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-cereal/docs/Type-Serialize-Base.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Type.Serialize.Base",
          "name": "serializeTypeAsHash_",
          "package": "type-cereal",
          "signature": "(Name -\u003e Type) -\u003e Name -\u003e m [Dec]",
          "source": "src/Type-Serialize-Base.html#serializeTypeAsHash_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Type Serialize Base",
          "module": "Type.Serialize.Base",
          "name": "serializeTypeAsHash_",
          "normalized": "(Name-\u003eType)-\u003eName-\u003ea[Dec]",
          "package": "type-cereal",
          "partial": "Type As Hash",
          "signature": "(Name-\u003eType)-\u003eName-\u003em[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-cereal/docs/Type-Serialize-Base.html#v:serializeTypeAsHash_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eserializeType\u003c/code\u003e can result in very large types, so we prefer the\n \u003ccode\u003edata-hash\u003c/code\u003e hash of the \u003ccode\u003eNameG\u003c/code\u003e's serialization.\n\u003c/p\u003e",
          "module": "Type.Serialize.Base",
          "name": "serializeTypeAsHash_data",
          "package": "type-cereal",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Type-Serialize-Base.html#serializeTypeAsHash_data",
          "type": "function"
        },
        "index": {
          "description": "serializeType can result in very large types so we prefer the data-hash hash of the NameG serialization",
          "hierarchy": "Type Serialize Base",
          "module": "Type.Serialize.Base",
          "name": "serializeTypeAsHash_data",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "type-cereal",
          "partial": "Type As Hash",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-cereal/docs/Type-Serialize-Base.html#v:serializeTypeAsHash_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Type.Serialize.Base",
          "name": "serializeTypeAsHash_pro",
          "package": "type-cereal",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Type-Serialize-Base.html#serializeTypeAsHash_pro",
          "type": "function"
        },
        "index": {
          "hierarchy": "Type Serialize Base",
          "module": "Type.Serialize.Base",
          "name": "serializeTypeAsHash_pro",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "type-cereal",
          "partial": "Type As Hash",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-cereal/docs/Type-Serialize-Base.html#v:serializeTypeAsHash_pro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Type.Serialize.Base",
          "name": "serializeType_",
          "package": "type-cereal",
          "signature": "(Name -\u003e Type) -\u003e Name -\u003e m [Dec]",
          "source": "src/Type-Serialize-Base.html#serializeType_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Type Serialize Base",
          "module": "Type.Serialize.Base",
          "name": "serializeType_",
          "normalized": "(Name-\u003eType)-\u003eName-\u003ea[Dec]",
          "package": "type-cereal",
          "partial": "Type",
          "signature": "(Name-\u003eType)-\u003eName-\u003em[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-cereal/docs/Type-Serialize-Base.html#v:serializeType_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the \u003ccode\u003eSerialize\u003c/code\u003e instance corresponding to the serialization of\n the type constructor's globally unique name (i.e. TH's \u003ccode\u003eNameG\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Type.Serialize.Base",
          "name": "serializeType_data",
          "package": "type-cereal",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Type-Serialize-Base.html#serializeType_data",
          "type": "function"
        },
        "index": {
          "description": "Generates the Serialize instance corresponding to the serialization of the type constructor globally unique name i.e TH NameG",
          "hierarchy": "Type Serialize Base",
          "module": "Type.Serialize.Base",
          "name": "serializeType_data",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "type-cereal",
          "partial": "Type",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-cereal/docs/Type-Serialize-Base.html#v:serializeType_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Type.Serialize.Base",
          "name": "serializeType_pro",
          "package": "type-cereal",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Type-Serialize-Base.html#serializeType_pro",
          "type": "function"
        },
        "index": {
          "hierarchy": "Type Serialize Base",
          "module": "Type.Serialize.Base",
          "name": "serializeType_pro",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "type-cereal",
          "partial": "Type",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-cereal/docs/Type-Serialize-Base.html#v:serializeType_pro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType-level serialization for the basic types: Bool, Char, Either, etc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Type.Serialize",
          "name": "Serialize",
          "package": "type-cereal",
          "source": "src/Type-Serialize.html",
          "type": "module"
        },
        "index": {
          "description": "Type-level serialization for the basic types Bool Char Either etc",
          "hierarchy": "Type Serialize",
          "module": "Type.Serialize",
          "name": "Serialize",
          "package": "type-cereal",
          "partial": "Serialize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-cereal/docs/Type-Serialize.html#"
      }
    }
  ]
]