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
        "word": "to-string-class"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.ToString",
          "name": "ToString",
          "package": "to-string-class",
          "source": "src/Data-String-ToString.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data String ToString",
          "module": "Data.String.ToString",
          "name": "ToString",
          "package": "to-string-class",
          "partial": "To String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/to-string-class/docs/Data-String-ToString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of string-like types that can be converted to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eEnsure that types that have an instance for this class and also have an\n instance for \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e obey the \u003ccode\u003e\u003ca\u003eprop_fromToString\u003c/a\u003e\u003c/code\u003e law.\n\u003c/p\u003e",
          "module": "Data.String.ToString",
          "name": "ToString",
          "package": "to-string-class",
          "source": "src/Data-String-ToString.html#ToString",
          "type": "class"
        },
        "index": {
          "description": "Class of string-like types that can be converted to String Ensure that types that have an instance for this class and also have an instance for IsString obey the prop fromToString law",
          "hierarchy": "Data String ToString",
          "module": "Data.String.ToString",
          "name": "ToString",
          "package": "to-string-class",
          "partial": "To String",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/to-string-class/docs/Data-String-ToString.html#t:ToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral coercion between string-like types.\n\u003c/p\u003e\u003cp\u003eNote that: \u003ccode\u003efromToString = \u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.String.ToString",
          "name": "fromToString",
          "package": "to-string-class",
          "signature": "s1 -\u003e s2",
          "source": "src/Data-String-ToString.html#fromToString",
          "type": "function"
        },
        "index": {
          "description": "General coercion between string-like types Note that fromToString fromString toString",
          "hierarchy": "Data String ToString",
          "module": "Data.String.ToString",
          "name": "fromToString",
          "normalized": "a-\u003ea",
          "package": "to-string-class",
          "partial": "To String",
          "signature": "s-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/to-string-class/docs/Data-String-ToString.html#v:fromToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eprop_fromToString x = \u003ccode\u003e\u003ca\u003efromToString\u003c/a\u003e\u003c/code\u003e x == x\u003c/pre\u003e",
          "module": "Data.String.ToString",
          "name": "prop_fromToString",
          "package": "to-string-class",
          "signature": "s -\u003e Bool",
          "source": "src/Data-String-ToString.html#prop_fromToString",
          "type": "function"
        },
        "index": {
          "description": "prop fromToString fromToString",
          "hierarchy": "Data String ToString",
          "module": "Data.String.ToString",
          "name": "prop_fromToString",
          "normalized": "a-\u003eBool",
          "package": "to-string-class",
          "partial": "To String",
          "signature": "s-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/to-string-class/docs/Data-String-ToString.html#v:prop_fromToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a string-like type to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.String.ToString",
          "name": "toString",
          "package": "to-string-class",
          "signature": "s -\u003e String",
          "source": "src/Data-String-ToString.html#toString",
          "type": "method"
        },
        "index": {
          "description": "Convert string-like type to String",
          "hierarchy": "Data String ToString",
          "module": "Data.String.ToString",
          "name": "toString",
          "normalized": "a-\u003eString",
          "package": "to-string-class",
          "partial": "String",
          "signature": "s-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/to-string-class/docs/Data-String-ToString.html#v:toString"
      }
    }
  ]
]