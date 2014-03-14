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
        "word": "typehash"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProduce a \u003cem\u003ehash\u003c/em\u003e for a type that is unique for that type.\n The hash takes both actual type names and type structure into account.\n\u003c/p\u003e\u003cp\u003eThe purpose of the hash of a type is to be able to store the type\n of a persisted value together with the value.\n By comparing the type hash of a persisted value and the hash of expected type\n we can know if the persistened value is of the correct type.\n\u003c/p\u003e\u003cp\u003eThe type hash uses a cryptographic hash and can only be used to test equality.\n\u003c/p\u003e\u003cp\u003eThe type code preserves the exact structure of the type and can be used to\n check if one type is convertible to another in various ways.\n\u003c/p\u003e\u003cp\u003eThis module uses the reflection offered by \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e to extract\n the information.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.TypeHash",
          "name": "TypeHash",
          "package": "typehash",
          "source": "src/Data-TypeHash.html",
          "type": "module"
        },
        "index": {
          "description": "Produce hash for type that is unique for that type The hash takes both actual type names and type structure into account The purpose of the hash of type is to be able to store the type of persisted value together with the value By comparing the type hash of persisted value and the hash of expected type we can know if the persistened value is of the correct type The type hash uses cryptographic hash and can only be used to test equality The type code preserves the exact structure of the type and can be used to check if one type is convertible to another in various ways This module uses the reflection offered by Typeable and Data to extract the information",
          "hierarchy": "Data TypeHash",
          "module": "Data.TypeHash",
          "name": "TypeHash",
          "package": "typehash",
          "partial": "Type Hash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/typehash/docs/Data-TypeHash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType codes.\n\u003c/p\u003e",
          "module": "Data.TypeHash",
          "name": "TypeCode",
          "package": "typehash",
          "source": "src/Data-TypeHash.html#TypeCode",
          "type": "data"
        },
        "index": {
          "description": "Type codes",
          "hierarchy": "Data TypeHash",
          "module": "Data.TypeHash",
          "name": "TypeCode",
          "package": "typehash",
          "partial": "Type Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/typehash/docs/Data-TypeHash.html#t:TypeCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType hash.\n\u003c/p\u003e",
          "module": "Data.TypeHash",
          "name": "TypeHash",
          "package": "typehash",
          "source": "src/Data-TypeHash.html#TypeHash",
          "type": "data"
        },
        "index": {
          "description": "Type hash",
          "hierarchy": "Data TypeHash",
          "module": "Data.TypeHash",
          "name": "TypeHash",
          "package": "typehash",
          "partial": "Type Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/typehash/docs/Data-TypeHash.html#t:TypeHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAre the types strongly isomorphic, only allows change of type names.\n\u003c/p\u003e",
          "module": "Data.TypeHash",
          "name": "convertibleIso",
          "package": "typehash",
          "signature": "TypeCode -\u003e TypeCode -\u003e Bool",
          "source": "src/Data-TypeHash.html#convertibleIso",
          "type": "function"
        },
        "index": {
          "description": "Are the types strongly isomorphic only allows change of type names",
          "hierarchy": "Data TypeHash",
          "module": "Data.TypeHash",
          "name": "convertibleIso",
          "normalized": "TypeCode-\u003eTypeCode-\u003eBool",
          "package": "typehash",
          "partial": "Iso",
          "signature": "TypeCode-\u003eTypeCode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typehash/docs/Data-TypeHash.html#v:convertibleIso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan the generic JSON serializer and deserializer convert the first type to the second.\n Allows changing type names,\n allows permuting and/or adding constructors to the new type,\n also allows permuting and/or deleting named fields of a constructor.\n Furhermore, allows types with a single constructor to change constructor name.\n\u003c/p\u003e",
          "module": "Data.TypeHash",
          "name": "convertibleWithJSON",
          "package": "typehash",
          "signature": "TypeCode -\u003e TypeCode -\u003e Bool",
          "source": "src/Data-TypeHash.html#convertibleWithJSON",
          "type": "function"
        },
        "index": {
          "description": "Can the generic JSON serializer and deserializer convert the first type to the second Allows changing type names allows permuting and or adding constructors to the new type also allows permuting and or deleting named fields of constructor Furhermore allows types with single constructor to change constructor name",
          "hierarchy": "Data TypeHash",
          "module": "Data.TypeHash",
          "name": "convertibleWithJSON",
          "normalized": "TypeCode-\u003eTypeCode-\u003eBool",
          "package": "typehash",
          "partial": "With JSON",
          "signature": "TypeCode-\u003eTypeCode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typehash/docs/Data-TypeHash.html#v:convertibleWithJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan \u003ccode\u003eread . show\u003c/code\u003e convert the first type to the second?\n Allows changing type names,\n allows permuting and/or adding constructors to the new type,\n also allows permuting named fields of a constructor.\n\u003c/p\u003e",
          "module": "Data.TypeHash",
          "name": "convertibleWithReadShow",
          "package": "typehash",
          "signature": "TypeCode -\u003e TypeCode -\u003e Bool",
          "source": "src/Data-TypeHash.html#convertibleWithReadShow",
          "type": "function"
        },
        "index": {
          "description": "Can read show convert the first type to the second Allows changing type names allows permuting and or adding constructors to the new type also allows permuting named fields of constructor",
          "hierarchy": "Data TypeHash",
          "module": "Data.TypeHash",
          "name": "convertibleWithReadShow",
          "normalized": "TypeCode-\u003eTypeCode-\u003eBool",
          "package": "typehash",
          "partial": "With Read Show",
          "signature": "TypeCode-\u003eTypeCode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typehash/docs/Data-TypeHash.html#v:convertibleWithReadShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn the type of the value into a type code.\n\u003c/p\u003e",
          "module": "Data.TypeHash",
          "name": "typeCode",
          "package": "typehash",
          "signature": "a -\u003e TypeCode",
          "source": "src/Data-TypeHash.html#typeCode",
          "type": "function"
        },
        "index": {
          "description": "Turn the type of the value into type code",
          "hierarchy": "Data TypeHash",
          "module": "Data.TypeHash",
          "name": "typeCode",
          "normalized": "a-\u003eTypeCode",
          "package": "typehash",
          "partial": "Code",
          "signature": "a-\u003eTypeCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typehash/docs/Data-TypeHash.html#v:typeCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn the type of the value into a type hash.\n\u003c/p\u003e",
          "module": "Data.TypeHash",
          "name": "typeHash",
          "package": "typehash",
          "signature": "a -\u003e TypeHash",
          "source": "src/Data-TypeHash.html#typeHash",
          "type": "function"
        },
        "index": {
          "description": "Turn the type of the value into type hash",
          "hierarchy": "Data TypeHash",
          "module": "Data.TypeHash",
          "name": "typeHash",
          "normalized": "a-\u003eTypeHash",
          "package": "typehash",
          "partial": "Hash",
          "signature": "a-\u003eTypeHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/typehash/docs/Data-TypeHash.html#v:typeHash"
      }
    }
  ]
]