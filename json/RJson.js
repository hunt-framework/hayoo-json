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
        "word": "RJson"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "RJson",
          "package": "RJson",
          "source": "src/Text-RJson.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "RJson",
          "package": "RJson",
          "partial": "RJson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "FromJson",
          "package": "RJson",
          "source": "src/Text-RJson.html#FromJson",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "FromJson",
          "package": "RJson",
          "partial": "From Json",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#t:FromJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "FromJsonD",
          "package": "RJson",
          "source": "src/Text-RJson.html#FromJsonD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "FromJsonD",
          "package": "RJson",
          "partial": "From Json",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#t:FromJsonD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Haskell representation of a JSON\n   data structure.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "JsonData",
          "package": "RJson",
          "source": "src/Text-RJson.html#JsonData",
          "type": "data"
        },
        "index": {
          "description": "Haskell representation of JSON data structure",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "JsonData",
          "package": "RJson",
          "partial": "Json Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#t:JsonData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNew instances can be added to this class to customize certain aspects\n   of the way in which Haskell types are serialized to JSON.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "ToJson",
          "package": "RJson",
          "source": "src/Text-RJson.html#ToJson",
          "type": "class"
        },
        "index": {
          "description": "New instances can be added to this class to customize certain aspects of the way in which Haskell types are serialized to JSON",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "ToJson",
          "package": "RJson",
          "partial": "To Json",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#t:ToJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "ToJsonD",
          "package": "RJson",
          "source": "src/Text-RJson.html#ToJsonD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "ToJsonD",
          "package": "RJson",
          "partial": "To Json",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#t:ToJsonD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "TranslateField",
          "package": "RJson",
          "source": "src/Text-RJson.html#TranslateField",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "TranslateField",
          "package": "RJson",
          "partial": "Translate Field",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#t:TranslateField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "TranslateFieldD",
          "package": "RJson",
          "source": "src/Text-RJson.html#TranslateFieldD",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "TranslateFieldD",
          "package": "RJson",
          "partial": "Translate Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#t:TranslateFieldD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type can be used for merging two or more records together into a single\n   JSON object. By default, a structure such as (Union X Y) is serialized as follows.\n   First, X and Y are serialized, and a runtime error is signalled if the result of\n   serialization is not a JSON object in both cases. The key/value pairs of the\n   two JSON objects are then merged to form a single object.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "Union",
          "package": "RJson",
          "source": "src/Text-RJson.html#Union",
          "type": "data"
        },
        "index": {
          "description": "This type can be used for merging two or more records together into single JSON object By default structure such as Union is serialized as follows First and are serialized and runtime error is signalled if the result of serialization is not JSON object in both cases The key value pairs of the two JSON objects are then merged to form single object",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "Union",
          "package": "RJson",
          "partial": "Union",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#t:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "Union10",
          "package": "RJson",
          "source": "src/Text-RJson.html#Union10",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "Union10",
          "package": "RJson",
          "partial": "Union",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#t:Union10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNested Unions are left-branching by convention (since this is what you get\n   by using the constructor as an infix operator).\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "Union3",
          "package": "RJson",
          "source": "src/Text-RJson.html#Union3",
          "type": "type"
        },
        "index": {
          "description": "Nested Unions are left-branching by convention since this is what you get by using the constructor as an infix operator",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "Union3",
          "package": "RJson",
          "partial": "Union",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#t:Union3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "Union4",
          "package": "RJson",
          "source": "src/Text-RJson.html#Union4",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "Union4",
          "package": "RJson",
          "partial": "Union",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#t:Union4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "Union5",
          "package": "RJson",
          "source": "src/Text-RJson.html#Union5",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "Union5",
          "package": "RJson",
          "partial": "Union",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#t:Union5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "Union6",
          "package": "RJson",
          "source": "src/Text-RJson.html#Union6",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "Union6",
          "package": "RJson",
          "partial": "Union",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#t:Union6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "Union7",
          "package": "RJson",
          "source": "src/Text-RJson.html#Union7",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "Union7",
          "package": "RJson",
          "partial": "Union",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#t:Union7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "Union8",
          "package": "RJson",
          "source": "src/Text-RJson.html#Union8",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "Union8",
          "package": "RJson",
          "partial": "Union",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#t:Union8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "Union9",
          "package": "RJson",
          "source": "src/Text-RJson.html#Union9",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "Union9",
          "package": "RJson",
          "partial": "Union",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#t:Union9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "JDArray",
          "package": "RJson",
          "signature": "JDArray [JsonData]",
          "source": "src/Text-RJson.html#JsonData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "JDArray",
          "normalized": "JDArray[JsonData]",
          "package": "RJson",
          "partial": "JDArray",
          "signature": "JDArray[JsonData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:JDArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "JDBool",
          "package": "RJson",
          "signature": "JDBool Bool",
          "source": "src/Text-RJson.html#JsonData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "JDBool",
          "package": "RJson",
          "partial": "JDBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:JDBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "JDNull",
          "package": "RJson",
          "signature": "JDNull",
          "source": "src/Text-RJson.html#JsonData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "JDNull",
          "package": "RJson",
          "partial": "JDNull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:JDNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "JDNumber",
          "package": "RJson",
          "signature": "JDNumber Double",
          "source": "src/Text-RJson.html#JsonData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "JDNumber",
          "package": "RJson",
          "partial": "JDNumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:JDNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "JDObject",
          "package": "RJson",
          "signature": "JDObject (Map String JsonData)",
          "source": "src/Text-RJson.html#JsonData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "JDObject",
          "package": "RJson",
          "partial": "JDObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:JDObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "JDString",
          "package": "RJson",
          "signature": "JDString String",
          "source": "src/Text-RJson.html#JsonData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "JDString",
          "package": "RJson",
          "partial": "JDString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:JDString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "Union",
          "package": "RJson",
          "signature": "Union a b",
          "source": "src/Text-RJson.html#Union",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "Union",
          "package": "RJson",
          "partial": "Union",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes that will be converted to JSON arrays can override\n   this method to specify additional elements to be appended to the array.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "arrayAppend",
          "package": "RJson",
          "signature": "a -\u003e [JsonData]",
          "source": "src/Text-RJson.html#arrayAppend",
          "type": "method"
        },
        "index": {
          "description": "Types that will be converted to JSON arrays can override this method to specify additional elements to be appended to the array",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "arrayAppend",
          "normalized": "a-\u003e[JsonData]",
          "package": "RJson",
          "partial": "Append",
          "signature": "a-\u003e[JsonData]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:arrayAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes that will be converted to JSON arrays can override\n   this method to specify additional elements to be prepended to the array.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "arrayPrepend",
          "package": "RJson",
          "signature": "a -\u003e [JsonData]",
          "source": "src/Text-RJson.html#arrayPrepend",
          "type": "method"
        },
        "index": {
          "description": "Types that will be converted to JSON arrays can override this method to specify additional elements to be prepended to the array",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "arrayPrepend",
          "normalized": "a-\u003e[JsonData]",
          "package": "RJson",
          "partial": "Prepend",
          "signature": "a-\u003e[JsonData]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:arrayPrepend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "cond",
          "package": "RJson",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e b) -\u003e (a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Text-RJson.html#cond",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "cond",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003ea-\u003eb",
          "package": "RJson",
          "signature": "(a-\u003eBool)-\u003e(a-\u003eb)-\u003e(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:cond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe counterpart of \u003ccode\u003e\u003ca\u003eenumToJson\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "enumFromJson",
          "package": "RJson",
          "signature": "(String -\u003e String) -\u003e a -\u003e JsonData -\u003e Either String a",
          "source": "src/Text-RJson.html#enumFromJson",
          "type": "function"
        },
        "index": {
          "description": "The counterpart of enumToJson",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "enumFromJson",
          "normalized": "(String-\u003eString)-\u003ea-\u003eJsonData-\u003eEither String a",
          "package": "RJson",
          "partial": "From Json",
          "signature": "(String-\u003eString)-\u003ea-\u003eJsonData-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:enumFromJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function can be used as an implementation of \u003ccode\u003e\u003ca\u003etoJson\u003c/a\u003e\u003c/code\u003e for simple enums.\n   It converts an enum value to a string determined by the name of the constructor,\n   after being fed through the (String -\u003e String) function given as the first argument.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "enumToJson",
          "package": "RJson",
          "signature": "(String -\u003e String) -\u003e a -\u003e JsonData",
          "source": "src/Text-RJson.html#enumToJson",
          "type": "function"
        },
        "index": {
          "description": "This function can be used as an implementation of toJson for simple enums It converts an enum value to string determined by the name of the constructor after being fed through the String String function given as the first argument",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "enumToJson",
          "normalized": "(String-\u003eString)-\u003ea-\u003eJsonData",
          "package": "RJson",
          "partial": "To Json",
          "signature": "(String-\u003eString)-\u003ea-\u003eJsonData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:enumToJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies to record types only. You can specialize this method to\n   prevent certain fields from being serialized.\n   Given a Haskell field name, it should return True if that field is\n   to be serialized, and False otherwise.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "exclude",
          "package": "RJson",
          "signature": "a -\u003e String -\u003e Bool",
          "source": "src/Text-RJson.html#exclude",
          "type": "method"
        },
        "index": {
          "description": "Applies to record types only You can specialize this method to prevent certain fields from being serialized Given Haskell field name it should return True if that field is to be serialized and False otherwise",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "exclude",
          "normalized": "a-\u003eString-\u003eBool",
          "package": "RJson",
          "signature": "a-\u003eString-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:exclude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the first character of a string to lower case.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "firstCharToLower",
          "package": "RJson",
          "signature": "String -\u003e String",
          "source": "src/Text-RJson.html#firstCharToLower",
          "type": "function"
        },
        "index": {
          "description": "Converts the first character of string to lower case",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "firstCharToLower",
          "normalized": "String-\u003eString",
          "package": "RJson",
          "partial": "Char To Lower",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:firstCharToLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the first character of a string to upper case.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "firstCharToUpper",
          "package": "RJson",
          "signature": "String -\u003e String",
          "source": "src/Text-RJson.html#firstCharToUpper",
          "type": "function"
        },
        "index": {
          "description": "Converts the first character of string to upper case",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "firstCharToUpper",
          "normalized": "String-\u003eString",
          "package": "RJson",
          "partial": "Char To Upper",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:firstCharToUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "fromJson",
          "package": "RJson",
          "signature": "a -\u003e JsonData -\u003e Either String a",
          "source": "src/Text-RJson.html#fromJson",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "fromJson",
          "normalized": "a-\u003eJsonData-\u003eEither String a",
          "package": "RJson",
          "partial": "Json",
          "signature": "a-\u003eJsonData-\u003eEither String a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:fromJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a JSON ByteString (with unicode encoding automatically detected)\n   to a value of the type given by the first (dummy) argument.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "fromJsonByteString",
          "package": "RJson",
          "signature": "a -\u003e ByteString -\u003e Either String a",
          "source": "src/Text-RJson.html#fromJsonByteString",
          "type": "function"
        },
        "index": {
          "description": "Converts JSON ByteString with unicode encoding automatically detected to value of the type given by the first dummy argument",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "fromJsonByteString",
          "normalized": "a-\u003eByteString-\u003eEither String a",
          "package": "RJson",
          "partial": "Json Byte String",
          "signature": "a-\u003eByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:fromJsonByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a JSON String (interpreted as a true unicode string) to\n   a value of the type given by the first (dummy) argument.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "fromJsonString",
          "package": "RJson",
          "signature": "a -\u003e String -\u003e Either String a",
          "source": "src/Text-RJson.html#fromJsonString",
          "type": "function"
        },
        "index": {
          "description": "Converts JSON String interpreted as true unicode string to value of the type given by the first dummy argument",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "fromJsonString",
          "normalized": "a-\u003eString-\u003eEither String a",
          "package": "RJson",
          "partial": "Json String",
          "signature": "a-\u003eString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:fromJsonString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "genericFromJson",
          "package": "RJson",
          "signature": "a -\u003e JsonData -\u003e Either String a",
          "source": "src/Text-RJson.html#genericFromJson",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "genericFromJson",
          "normalized": "a-\u003eJsonData-\u003eEither String a",
          "package": "RJson",
          "partial": "From Json",
          "signature": "a-\u003eJsonData-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:genericFromJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is used as the the implementation of \u003ccode\u003e\u003ca\u003etoJson\u003c/a\u003e\u003c/code\u003e for the\n   generic instance declaration.\n   It's useful to be able to use the same implentation for\n   other instance declarations which override the default implementations\n   of other methods of the ToJson class.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "genericToJson",
          "package": "RJson",
          "signature": "a -\u003e JsonData",
          "source": "src/Text-RJson.html#genericToJson",
          "type": "function"
        },
        "index": {
          "description": "This function is used as the the implementation of toJson for the generic instance declaration It useful to be able to use the same implentation for other instance declarations which override the default implementations of other methods of the ToJson class",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "genericToJson",
          "normalized": "a-\u003eJsonData",
          "package": "RJson",
          "partial": "To Json",
          "signature": "a-\u003eJsonData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:genericToJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo specify default values for the required fields of a JSON object,\n   specialize this method in the instance definition for the relevant\n   datatype.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "objectDefaults",
          "package": "RJson",
          "signature": "a -\u003e Map String JsonData",
          "source": "src/Text-RJson.html#objectDefaults",
          "type": "method"
        },
        "index": {
          "description": "To specify default values for the required fields of JSON object specialize this method in the instance definition for the relevant datatype",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "objectDefaults",
          "normalized": "a-\u003eMap String JsonData",
          "package": "RJson",
          "partial": "Defaults",
          "signature": "a-\u003eMap String JsonData",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:objectDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes that will be converted to JSON objects can override\n   this method to specify additional fields of the object.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "objectExtras",
          "package": "RJson",
          "signature": "a -\u003e [(String, JsonData)]",
          "source": "src/Text-RJson.html#objectExtras",
          "type": "method"
        },
        "index": {
          "description": "Types that will be converted to JSON objects can override this method to specify additional fields of the object",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "objectExtras",
          "normalized": "a-\u003e[(String,JsonData)]",
          "package": "RJson",
          "partial": "Extras",
          "signature": "a-\u003e[(String,JsonData)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:objectExtras"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a ByteString to an instance of JsonData (unicode encoding\n   is detected automatically).\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "parseJsonByteString",
          "package": "RJson",
          "signature": "ByteString -\u003e Either String JsonData",
          "source": "src/Text-RJson.html#parseJsonByteString",
          "type": "function"
        },
        "index": {
          "description": "Converts ByteString to an instance of JsonData unicode encoding is detected automatically",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "parseJsonByteString",
          "normalized": "ByteString-\u003eEither String JsonData",
          "package": "RJson",
          "partial": "Json Byte String",
          "signature": "ByteString-\u003eEither String JsonData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:parseJsonByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a String (interpreted as a true unicode String) to an instance\n   of JsonData.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "parseJsonString",
          "package": "RJson",
          "signature": "String -\u003e Either String JsonData",
          "source": "src/Text-RJson.html#parseJsonString",
          "type": "function"
        },
        "index": {
          "description": "Converts String interpreted as true unicode String to an instance of JsonData",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "parseJsonString",
          "normalized": "String-\u003eEither String JsonData",
          "package": "RJson",
          "partial": "Json String",
          "signature": "String-\u003eEither String JsonData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:parseJsonString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "stripInitialUnderscores",
          "package": "RJson",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Text-RJson.html#stripInitialUnderscores",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "stripInitialUnderscores",
          "normalized": "[Char]-\u003e[Char]",
          "package": "RJson",
          "partial": "Initial Underscores",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:stripInitialUnderscores"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.RJson",
          "name": "toJson",
          "package": "RJson",
          "signature": "a -\u003e JsonData",
          "source": "src/Text-RJson.html#toJson",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "toJson",
          "normalized": "a-\u003eJsonData",
          "package": "RJson",
          "partial": "Json",
          "signature": "a-\u003eJsonData",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:toJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a value to an ASCII-only JSON String.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "toJsonString",
          "package": "RJson",
          "signature": "a -\u003e String",
          "source": "src/Text-RJson.html#toJsonString",
          "type": "function"
        },
        "index": {
          "description": "Converts value to an ASCII-only JSON String",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "toJsonString",
          "normalized": "a-\u003eString",
          "package": "RJson",
          "partial": "Json String",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:toJsonString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method defines the mapping from Haskell record field names\n   to JSON object field names. The default is to strip any initial\n   underscores. Specialize this method to define a different behavior.\n\u003c/p\u003e",
          "module": "Text.RJson",
          "name": "translateField",
          "package": "RJson",
          "signature": "a -\u003e String -\u003e String",
          "source": "src/Text-RJson.html#translateField",
          "type": "method"
        },
        "index": {
          "description": "This method defines the mapping from Haskell record field names to JSON object field names The default is to strip any initial underscores Specialize this method to define different behavior",
          "hierarchy": "Text RJson",
          "module": "Text.RJson",
          "name": "translateField",
          "normalized": "a-\u003eString-\u003eString",
          "package": "RJson",
          "partial": "Field",
          "signature": "a-\u003eString-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/RJson/docs/Text-RJson.html#v:translateField"
      }
    }
  ]
]