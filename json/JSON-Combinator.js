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
        "word": "JSON-Combinator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCombinators for JSON data types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.Combinator",
          "name": "Combinator",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-Combinator.html",
          "type": "module"
        },
        "index": {
          "description": "Combinators for JSON data types",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "Combinator",
          "package": "JSON-Combinator",
          "partial": "Combinator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the possible value associated with the given field if this is an object. An alias for \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "(-|)",
          "package": "JSON-Combinator",
          "signature": "f-\u003e j-\u003e m j",
          "type": "function"
        },
        "index": {
          "description": "Returns the possible value associated with the given field if this is an object An alias for field",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "(-|) -|",
          "normalized": "a-\u003eb-\u003ec b",
          "package": "JSON-Combinator",
          "signature": "f-\u003ej-\u003em j",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:-45--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses down JSON objects with the association fields and returns the potential value. An alias for \u003ccode\u003e\u003ca\u003efield'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "(-||)",
          "package": "JSON-Combinator",
          "signature": "t f -\u003e j -\u003e m j",
          "source": "src/Text-JSON-Combinator.html#-%7C%7C",
          "type": "function"
        },
        "index": {
          "description": "Traverses down JSON objects with the association fields and returns the potential value An alias for field",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "(-||) -||",
          "normalized": "a b-\u003ec-\u003ed c",
          "package": "JSON-Combinator",
          "signature": "t f-\u003ej-\u003em j",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:-45--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not a JSON value is an object with the given field. An alias for \u003ccode\u003e\u003ca\u003ehasField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "(-?)",
          "package": "JSON-Combinator",
          "signature": "f-\u003e j-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Whether or not JSON value is an object with the given field An alias for hasField",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "(-?) -?",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "JSON-Combinator",
          "signature": "f-\u003ej-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:-45--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses down JSON objects with the association fields and returns true if the association graph exists. An alias for \u003ccode\u003e\u003ca\u003ehasField'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "(-??)",
          "package": "JSON-Combinator",
          "signature": "t f-\u003e j-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Traverses down JSON objects with the association fields and returns true if the association graph exists An alias for hasField",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "(-??) -??",
          "normalized": "a b-\u003ec-\u003eBool",
          "package": "JSON-Combinator",
          "signature": "t f-\u003ej-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:-45--63--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a rational value from a JSON value or if it is not a rational, returns the given default.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "arrayOr",
          "package": "JSON-Combinator",
          "signature": "a j-\u003e j-\u003e a j",
          "type": "function"
        },
        "index": {
          "description": "Returns rational value from JSON value or if it is not rational returns the given default",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "arrayOr",
          "normalized": "a b-\u003eb-\u003ea b",
          "package": "JSON-Combinator",
          "partial": "Or",
          "signature": "a j-\u003ej-\u003ea j",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:arrayOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an array value from a JSON value or if it is not an array, returns an empty array.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "arrayOrEmpty",
          "package": "JSON-Combinator",
          "signature": "j-\u003e a j",
          "type": "function"
        },
        "index": {
          "description": "Returns an array value from JSON value or if it is not an array returns an empty array",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "arrayOrEmpty",
          "normalized": "a-\u003eb a",
          "package": "JSON-Combinator",
          "partial": "Or Empty",
          "signature": "j-\u003ea j",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:arrayOrEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses down JSON objects with the association fields and returns the potential value.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "field'",
          "package": "JSON-Combinator",
          "signature": "t f -\u003e j -\u003e m j",
          "source": "src/Text-JSON-Combinator.html#field%27",
          "type": "function"
        },
        "index": {
          "description": "Traverses down JSON objects with the association fields and returns the potential value",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "field'",
          "normalized": "a b-\u003ec-\u003ed c",
          "package": "JSON-Combinator",
          "signature": "t f-\u003ej-\u003em j",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:field-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses down JSON objects with the association fields and returns the potential value or the given default.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "field'Or",
          "package": "JSON-Combinator",
          "signature": "j-\u003e t f-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Traverses down JSON objects with the association fields and returns the potential value or the given default",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "field'Or",
          "normalized": "a-\u003eb c-\u003ea-\u003ea",
          "package": "JSON-Combinator",
          "partial": "Or",
          "signature": "j-\u003et f-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:field-39-Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses down JSON objects with the association fields and returns the potential value or a JSON empty array.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "field'OrEmptyArray",
          "package": "JSON-Combinator",
          "signature": "t f-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Traverses down JSON objects with the association fields and returns the potential value or JSON empty array",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "field'OrEmptyArray",
          "normalized": "a b-\u003ec-\u003ec",
          "package": "JSON-Combinator",
          "partial": "Or Empty Array",
          "signature": "t f-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:field-39-OrEmptyArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses down JSON objects with the association fields and returns the potential value or a JSON empty object.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "field'OrEmptyObject",
          "package": "JSON-Combinator",
          "signature": "t f-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Traverses down JSON objects with the association fields and returns the potential value or JSON empty object",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "field'OrEmptyObject",
          "normalized": "a b-\u003ec-\u003ec",
          "package": "JSON-Combinator",
          "partial": "Or Empty Object",
          "signature": "t f-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:field-39-OrEmptyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses down JSON objects with the association fields and returns the potential value or a JSON empty string.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "field'OrEmptyString",
          "package": "JSON-Combinator",
          "signature": "t f-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Traverses down JSON objects with the association fields and returns the potential value or JSON empty string",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "field'OrEmptyString",
          "normalized": "a b-\u003ec-\u003ec",
          "package": "JSON-Combinator",
          "partial": "Or Empty String",
          "signature": "t f-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:field-39-OrEmptyString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses down JSON objects with the association fields and returns the potential value or a JSON false.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "field'OrFalse",
          "package": "JSON-Combinator",
          "signature": "t f-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Traverses down JSON objects with the association fields and returns the potential value or JSON false",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "field'OrFalse",
          "normalized": "a b-\u003ec-\u003ec",
          "package": "JSON-Combinator",
          "partial": "Or False",
          "signature": "t f-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:field-39-OrFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses down JSON objects with the association fields and returns the potential value or a JSON null.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "field'OrNull",
          "package": "JSON-Combinator",
          "signature": "t f-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Traverses down JSON objects with the association fields and returns the potential value or JSON null",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "field'OrNull",
          "normalized": "a b-\u003ec-\u003ec",
          "package": "JSON-Combinator",
          "partial": "Or Null",
          "signature": "t f-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:field-39-OrNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses down JSON objects with the association fields and returns the potential value or a JSON true.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "field'OrTrue",
          "package": "JSON-Combinator",
          "signature": "t f-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Traverses down JSON objects with the association fields and returns the potential value or JSON true",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "field'OrTrue",
          "normalized": "a b-\u003ec-\u003ec",
          "package": "JSON-Combinator",
          "partial": "Or True",
          "signature": "t f-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:field-39-OrTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses down JSON objects with the association fields and returns the potential value or a JSON zero.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "field'OrZero",
          "package": "JSON-Combinator",
          "signature": "t f-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Traverses down JSON objects with the association fields and returns the potential value or JSON zero",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "field'OrZero",
          "normalized": "a b-\u003ec-\u003ec",
          "package": "JSON-Combinator",
          "partial": "Or Zero",
          "signature": "t f-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:field-39-OrZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value associated with the given field or if this is not an object or has no associated value, return the given default.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "fieldOr",
          "package": "JSON-Combinator",
          "signature": "f-\u003e j-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Returns the value associated with the given field or if this is not an object or has no associated value return the given default",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "fieldOr",
          "normalized": "a-\u003eb-\u003eb-\u003eb",
          "package": "JSON-Combinator",
          "partial": "Or",
          "signature": "f-\u003ej-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:fieldOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value associated with the given field or if this is not an object or has no associated value, return a JSON array that is empty.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "fieldOrEmptyArray",
          "package": "JSON-Combinator",
          "signature": "f-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Returns the value associated with the given field or if this is not an object or has no associated value return JSON array that is empty",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "fieldOrEmptyArray",
          "normalized": "a-\u003eb-\u003eb",
          "package": "JSON-Combinator",
          "partial": "Or Empty Array",
          "signature": "f-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:fieldOrEmptyArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value associated with the given field or if this is not an object or has no associated value, return a JSON object that is empty.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "fieldOrEmptyObject",
          "package": "JSON-Combinator",
          "signature": "f-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Returns the value associated with the given field or if this is not an object or has no associated value return JSON object that is empty",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "fieldOrEmptyObject",
          "normalized": "a-\u003eb-\u003eb",
          "package": "JSON-Combinator",
          "partial": "Or Empty Object",
          "signature": "f-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:fieldOrEmptyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value associated with the given field or if this is not an object or has no associated value, return a JSON string that is empty.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "fieldOrEmptyString",
          "package": "JSON-Combinator",
          "signature": "f-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Returns the value associated with the given field or if this is not an object or has no associated value return JSON string that is empty",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "fieldOrEmptyString",
          "normalized": "a-\u003eb-\u003eb",
          "package": "JSON-Combinator",
          "partial": "Or Empty String",
          "signature": "f-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:fieldOrEmptyString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value associated with the given field or if this is not an object or has no associated value, return a JSON false.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "fieldOrFalse",
          "package": "JSON-Combinator",
          "signature": "f-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Returns the value associated with the given field or if this is not an object or has no associated value return JSON false",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "fieldOrFalse",
          "normalized": "a-\u003eb-\u003eb",
          "package": "JSON-Combinator",
          "partial": "Or False",
          "signature": "f-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:fieldOrFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value associated with the given field or if this is not an object or has no associated value, return a JSON null.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "fieldOrNull",
          "package": "JSON-Combinator",
          "signature": "f-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Returns the value associated with the given field or if this is not an object or has no associated value return JSON null",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "fieldOrNull",
          "normalized": "a-\u003eb-\u003eb",
          "package": "JSON-Combinator",
          "partial": "Or Null",
          "signature": "f-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:fieldOrNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value associated with the given field or if this is not an object or has no associated value, return a JSON true.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "fieldOrTrue",
          "package": "JSON-Combinator",
          "signature": "f-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Returns the value associated with the given field or if this is not an object or has no associated value return JSON true",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "fieldOrTrue",
          "normalized": "a-\u003eb-\u003eb",
          "package": "JSON-Combinator",
          "partial": "Or True",
          "signature": "f-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:fieldOrTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value associated with the given field or if this is not an object or has no associated value, return a JSON zero.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "fieldOrZero",
          "package": "JSON-Combinator",
          "signature": "f-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Returns the value associated with the given field or if this is not an object or has no associated value return JSON zero",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "fieldOrZero",
          "normalized": "a-\u003eb-\u003eb",
          "package": "JSON-Combinator",
          "partial": "Or Zero",
          "signature": "f-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:fieldOrZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an object's fields from a JSON value or if it is not an object, returns the given default.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "fieldsOr",
          "package": "JSON-Combinator",
          "signature": "[f]-\u003e j-\u003e [f]",
          "type": "function"
        },
        "index": {
          "description": "Returns an object fields from JSON value or if it is not an object returns the given default",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "fieldsOr",
          "normalized": "[a]-\u003eb-\u003e[a]",
          "package": "JSON-Combinator",
          "partial": "Or",
          "signature": "[f]-\u003ej-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:fieldsOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the potential array value of a JSON value.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "getArray",
          "package": "JSON-Combinator",
          "signature": "j-\u003e m (a j)",
          "type": "function"
        },
        "index": {
          "description": "Returns the potential array value of JSON value",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "getArray",
          "normalized": "a-\u003eb(c a)",
          "package": "JSON-Combinator",
          "partial": "Array",
          "signature": "j-\u003em(a j)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:getArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the potential boolean value of a JSON value.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "getBool",
          "package": "JSON-Combinator",
          "signature": "j-\u003e m Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns the potential boolean value of JSON value",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "getBool",
          "normalized": "a-\u003eb Bool",
          "package": "JSON-Combinator",
          "partial": "Bool",
          "signature": "j-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:getBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the potential number value of a JSON value.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "getNumber",
          "package": "JSON-Combinator",
          "signature": "j-\u003e m Rational",
          "type": "function"
        },
        "index": {
          "description": "Returns the potential number value of JSON value",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "getNumber",
          "normalized": "a-\u003eb Rational",
          "package": "JSON-Combinator",
          "partial": "Number",
          "signature": "j-\u003em Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:getNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the potential object value of a JSON value.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "getObject",
          "package": "JSON-Combinator",
          "signature": "j-\u003e m (o j)",
          "type": "function"
        },
        "index": {
          "description": "Returns the potential object value of JSON value",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "getObject",
          "normalized": "a-\u003eb(c a)",
          "package": "JSON-Combinator",
          "partial": "Object",
          "signature": "j-\u003em(o j)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:getObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the potential string value of a JSON value.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "getString",
          "package": "JSON-Combinator",
          "signature": "j-\u003e m s",
          "type": "function"
        },
        "index": {
          "description": "Returns the potential string value of JSON value",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "getString",
          "normalized": "a-\u003eb c",
          "package": "JSON-Combinator",
          "partial": "String",
          "signature": "j-\u003em s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:getString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not a JSON value is an object with the given field.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "hasField",
          "package": "JSON-Combinator",
          "signature": "f-\u003e j-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Whether or not JSON value is an object with the given field",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "hasField",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "JSON-Combinator",
          "partial": "Field",
          "signature": "f-\u003ej-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:hasField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverses down JSON objects with the association fields and returns true if the association graph exists.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "hasField'",
          "package": "JSON-Combinator",
          "signature": "t f-\u003e j-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Traverses down JSON objects with the association fields and returns true if the association graph exists",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "hasField'",
          "normalized": "a b-\u003ec-\u003eBool",
          "package": "JSON-Combinator",
          "partial": "Field'",
          "signature": "t f-\u003ej-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:hasField-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteracts by parsing the standard input for JSON, passing the result to the given function, then printing the result to standard output.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "interactJSON",
          "package": "JSON-Combinator",
          "signature": "(Either e j -\u003e j') -\u003e IO ()",
          "source": "src/Text-JSON-Combinator.html#interactJSON",
          "type": "function"
        },
        "index": {
          "description": "Interacts by parsing the standard input for JSON passing the result to the given function then printing the result to standard output",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "interactJSON",
          "normalized": "(Either a b-\u003ec)-\u003eIO()",
          "package": "JSON-Combinator",
          "partial": "JSON",
          "signature": "(Either e j-\u003ej')-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:interactJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteracts by parsing the standard input for JSON, passing a failed result with a string error message to the given function, or a successful result to the given function, then printing the result to standard output.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "interactJSON'",
          "package": "JSON-Combinator",
          "signature": "(e -\u003e j') -\u003e (j -\u003e j') -\u003e IO ()",
          "source": "src/Text-JSON-Combinator.html#interactJSON%27",
          "type": "function"
        },
        "index": {
          "description": "Interacts by parsing the standard input for JSON passing failed result with string error message to the given function or successful result to the given function then printing the result to standard output",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "interactJSON'",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eIO()",
          "package": "JSON-Combinator",
          "partial": "JSON'",
          "signature": "(e-\u003ej')-\u003e(j-\u003ej')-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:interactJSON-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteracts by parsing the given file for JSON, passing the result to the given function, then writing the result to the given file.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "interactJSONFile",
          "package": "JSON-Combinator",
          "signature": "(Either e j -\u003e j') -\u003e FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/Text-JSON-Combinator.html#interactJSONFile",
          "type": "function"
        },
        "index": {
          "description": "Interacts by parsing the given file for JSON passing the result to the given function then writing the result to the given file",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "interactJSONFile",
          "normalized": "(Either a b-\u003ec)-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "package": "JSON-Combinator",
          "partial": "JSONFile",
          "signature": "(Either e j-\u003ej')-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:interactJSONFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteracts by parsing the given file for JSON, passing a failed result with a string error message to the given function, or a successful result to the given function, then writing the result to the given file.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "interactJSONFile'",
          "package": "JSON-Combinator",
          "signature": "(e -\u003e j') -\u003e (j -\u003e j') -\u003e FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/Text-JSON-Combinator.html#interactJSONFile%27",
          "type": "function"
        },
        "index": {
          "description": "Interacts by parsing the given file for JSON passing failed result with string error message to the given function or successful result to the given function then writing the result to the given file",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "interactJSONFile'",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "package": "JSON-Combinator",
          "partial": "JSONFile'",
          "signature": "(e-\u003ej')-\u003e(j-\u003ej')-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:interactJSONFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not a JSON is an array value.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "isArray",
          "package": "JSON-Combinator",
          "signature": "j-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns whether or not JSON is an array value",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "isArray",
          "normalized": "a-\u003eBool",
          "package": "JSON-Combinator",
          "partial": "Array",
          "signature": "j-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:isArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not a JSON is a boolean value.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "isBool",
          "package": "JSON-Combinator",
          "signature": "j-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns whether or not JSON is boolean value",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "isBool",
          "normalized": "a-\u003eBool",
          "package": "JSON-Combinator",
          "partial": "Bool",
          "signature": "j-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:isBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not a JSON is a boolean with the value false.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "isFalse",
          "package": "JSON-Combinator",
          "signature": "j-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns whether or not JSON is boolean with the value false",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "isFalse",
          "normalized": "a-\u003eBool",
          "package": "JSON-Combinator",
          "partial": "False",
          "signature": "j-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:isFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not a JSON is a number value.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "isNumber",
          "package": "JSON-Combinator",
          "signature": "j-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns whether or not JSON is number value",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "isNumber",
          "normalized": "a-\u003eBool",
          "package": "JSON-Combinator",
          "partial": "Number",
          "signature": "j-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:isNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not a JSON is an object value.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "isObject",
          "package": "JSON-Combinator",
          "signature": "j-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns whether or not JSON is an object value",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "isObject",
          "normalized": "a-\u003eBool",
          "package": "JSON-Combinator",
          "partial": "Object",
          "signature": "j-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:isObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not a JSON is a string value.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "isString",
          "package": "JSON-Combinator",
          "signature": "j-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns whether or not JSON is string value",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "isString",
          "normalized": "a-\u003eBool",
          "package": "JSON-Combinator",
          "partial": "String",
          "signature": "j-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:isString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not a JSON is a boolean with the value true.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "isTrue",
          "package": "JSON-Combinator",
          "signature": "j-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Returns whether or not JSON is boolean with the value true",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "isTrue",
          "normalized": "a-\u003eBool",
          "package": "JSON-Combinator",
          "partial": "True",
          "signature": "j-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:isTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSON value empty array.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "jemptyarray",
          "package": "JSON-Combinator",
          "signature": "j",
          "source": "src/Text-JSON-Combinator.html#jemptyarray",
          "type": "function"
        },
        "index": {
          "description": "The JSON value empty array",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "jemptyarray",
          "package": "JSON-Combinator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:jemptyarray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSON value empty object.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "jemptyobject",
          "package": "JSON-Combinator",
          "signature": "j",
          "source": "src/Text-JSON-Combinator.html#jemptyobject",
          "type": "function"
        },
        "index": {
          "description": "The JSON value empty object",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "jemptyobject",
          "package": "JSON-Combinator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:jemptyobject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSON value empty string.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "jemptystring",
          "package": "JSON-Combinator",
          "signature": "j",
          "source": "src/Text-JSON-Combinator.html#jemptystring",
          "type": "function"
        },
        "index": {
          "description": "The JSON value empty string",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "jemptystring",
          "package": "JSON-Combinator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:jemptystring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverts the JSON value if it is a boolean.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "jnot",
          "package": "JSON-Combinator",
          "signature": "j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Inverts the JSON value if it is boolean",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "jnot",
          "normalized": "a-\u003ea",
          "package": "JSON-Combinator",
          "signature": "j-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:jnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts a single value into a JSON array.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "jsinglearray",
          "package": "JSON-Combinator",
          "signature": "j -\u003e j",
          "source": "src/Text-JSON-Combinator.html#jsinglearray",
          "type": "function"
        },
        "index": {
          "description": "Puts single value into JSON array",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "jsinglearray",
          "normalized": "a-\u003ea",
          "package": "JSON-Combinator",
          "signature": "j-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:jsinglearray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePuts a single value into a JSON object.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "jsingleobject",
          "package": "JSON-Combinator",
          "signature": "j -\u003e j",
          "source": "src/Text-JSON-Combinator.html#jsingleobject",
          "type": "function"
        },
        "index": {
          "description": "Puts single value into JSON object",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "jsingleobject",
          "normalized": "a-\u003ea",
          "package": "JSON-Combinator",
          "signature": "j-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:jsingleobject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSON value zero.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "jzero",
          "package": "JSON-Combinator",
          "signature": "j",
          "source": "src/Text-JSON-Combinator.html#jzero",
          "type": "function"
        },
        "index": {
          "description": "The JSON value zero",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "jzero",
          "package": "JSON-Combinator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:jzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a number value from a JSON value or if it is not a number, returns the given default.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "numberOr",
          "package": "JSON-Combinator",
          "signature": "Rational-\u003e j-\u003e Rational",
          "type": "function"
        },
        "index": {
          "description": "Returns number value from JSON value or if it is not number returns the given default",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "numberOr",
          "normalized": "Rational-\u003ea-\u003eRational",
          "package": "JSON-Combinator",
          "partial": "Or",
          "signature": "Rational-\u003ej-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:numberOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a number value from a JSON value or if it is not a number, returns zero.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "numberOrZero",
          "package": "JSON-Combinator",
          "signature": "j-\u003e Rational",
          "type": "function"
        },
        "index": {
          "description": "Returns number value from JSON value or if it is not number returns zero",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "numberOrZero",
          "normalized": "a-\u003eRational",
          "package": "JSON-Combinator",
          "partial": "Or Zero",
          "signature": "j-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:numberOrZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an object's fields from a JSON value or if it is not an object, returns no fields.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "objectFieldsOrEmpty",
          "package": "JSON-Combinator",
          "signature": "j-\u003e [f]",
          "type": "function"
        },
        "index": {
          "description": "Returns an object fields from JSON value or if it is not an object returns no fields",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "objectFieldsOrEmpty",
          "normalized": "a-\u003e[b]",
          "package": "JSON-Combinator",
          "partial": "Fields Or Empty",
          "signature": "j-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:objectFieldsOrEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an object value from a JSON value or if it is not an object, returns the given default.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "objectOr",
          "package": "JSON-Combinator",
          "signature": "o j-\u003e j-\u003e o j",
          "type": "function"
        },
        "index": {
          "description": "Returns an object value from JSON value or if it is not an object returns the given default",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "objectOr",
          "normalized": "a b-\u003eb-\u003ea b",
          "package": "JSON-Combinator",
          "partial": "Or",
          "signature": "o j-\u003ej-\u003eo j",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:objectOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an object value from a JSON value or if it is not an object, returns an empty object.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "objectOrEmpty",
          "package": "JSON-Combinator",
          "signature": "j-\u003e o j",
          "type": "function"
        },
        "index": {
          "description": "Returns an object value from JSON value or if it is not an object returns an empty object",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "objectOrEmpty",
          "normalized": "a-\u003eb a",
          "package": "JSON-Combinator",
          "partial": "Or Empty",
          "signature": "j-\u003eo j",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:objectOrEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an object's values from a JSON value or if it is not an object, returns no values.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "objectValuesOrEmpty",
          "package": "JSON-Combinator",
          "signature": "j-\u003e [j]",
          "type": "function"
        },
        "index": {
          "description": "Returns an object values from JSON value or if it is not an object returns no values",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "objectValuesOrEmpty",
          "normalized": "a-\u003e[a]",
          "package": "JSON-Combinator",
          "partial": "Values Or Empty",
          "signature": "j-\u003e[j]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:objectValuesOrEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a JSON file into a possible JSON object.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "readJSONFile",
          "package": "JSON-Combinator",
          "signature": "FilePath -\u003e IO (Either e j)",
          "source": "src/Text-JSON-Combinator.html#readJSONFile",
          "type": "function"
        },
        "index": {
          "description": "Parses JSON file into possible JSON object",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "readJSONFile",
          "normalized": "FilePath-\u003eIO(Either a b)",
          "package": "JSON-Combinator",
          "partial": "JSONFile",
          "signature": "FilePath-\u003eIO(Either e j)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:readJSONFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a string value from a JSON value or if it is not a string, returns the given default.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "stringOr",
          "package": "JSON-Combinator",
          "signature": "s-\u003e j-\u003e s",
          "type": "function"
        },
        "index": {
          "description": "Returns string value from JSON value or if it is not string returns the given default",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "stringOr",
          "normalized": "a-\u003eb-\u003ea",
          "package": "JSON-Combinator",
          "partial": "Or",
          "signature": "s-\u003ej-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:stringOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a string value from a JSON value or if it is not a string, returns an empty string.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "stringOrEmpty",
          "package": "JSON-Combinator",
          "signature": "j-\u003e s",
          "type": "function"
        },
        "index": {
          "description": "Returns string value from JSON value or if it is not string returns an empty string",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "stringOrEmpty",
          "normalized": "a-\u003eb",
          "package": "JSON-Combinator",
          "partial": "Or Empty",
          "signature": "j-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:stringOrEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a function on the array of a JSON value or if it is not an array, returns the given default.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "usingArray",
          "package": "JSON-Combinator",
          "signature": "x-\u003e (a j -\u003e x)-\u003e j-\u003e x",
          "type": "function"
        },
        "index": {
          "description": "Runs function on the array of JSON value or if it is not an array returns the given default",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "usingArray",
          "normalized": "a-\u003e(b c-\u003ea)-\u003ec-\u003ea",
          "package": "JSON-Combinator",
          "partial": "Array",
          "signature": "x-\u003e(a j-\u003ex)-\u003ej-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:usingArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a function on the number of a JSON value or if it is not a number, returns the given default.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "usingNumber",
          "package": "JSON-Combinator",
          "signature": "x-\u003e (Rational -\u003e x)-\u003e j-\u003e x",
          "type": "function"
        },
        "index": {
          "description": "Runs function on the number of JSON value or if it is not number returns the given default",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "usingNumber",
          "normalized": "a-\u003e(Rational-\u003ea)-\u003eb-\u003ea",
          "package": "JSON-Combinator",
          "partial": "Number",
          "signature": "x-\u003e(Rational-\u003ex)-\u003ej-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:usingNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a function on the object of a JSON value or if it is not an object, returns the given default.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "usingObject",
          "package": "JSON-Combinator",
          "signature": "x-\u003e (o j -\u003e x)-\u003e j-\u003e x",
          "type": "function"
        },
        "index": {
          "description": "Runs function on the object of JSON value or if it is not an object returns the given default",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "usingObject",
          "normalized": "a-\u003e(b c-\u003ea)-\u003ec-\u003ea",
          "package": "JSON-Combinator",
          "partial": "Object",
          "signature": "x-\u003e(o j-\u003ex)-\u003ej-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:usingObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a function on the fields of an object of a JSON value or if it is not an object, returns the given default.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "usingObjectFields",
          "package": "JSON-Combinator",
          "signature": "a-\u003e ([f] -\u003e a)-\u003e j-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Runs function on the fields of an object of JSON value or if it is not an object returns the given default",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "usingObjectFields",
          "normalized": "a-\u003e([b]-\u003ea)-\u003ec-\u003ea",
          "package": "JSON-Combinator",
          "partial": "Object Fields",
          "signature": "a-\u003e([f]-\u003ea)-\u003ej-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:usingObjectFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a function on the values of an object of a JSON value or if it is not an object, returns the given default.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "usingObjectValues",
          "package": "JSON-Combinator",
          "signature": "a-\u003e ([j] -\u003e a)-\u003e j-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Runs function on the values of an object of JSON value or if it is not an object returns the given default",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "usingObjectValues",
          "normalized": "a-\u003e([b]-\u003ea)-\u003eb-\u003ea",
          "package": "JSON-Combinator",
          "partial": "Object Values",
          "signature": "a-\u003e([j]-\u003ea)-\u003ej-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:usingObjectValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a function on the string of a JSON value or if it is not a string, returns the given default.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "usingString",
          "package": "JSON-Combinator",
          "signature": "x-\u003e (s -\u003e x)-\u003e j-\u003e x",
          "type": "function"
        },
        "index": {
          "description": "Runs function on the string of JSON value or if it is not string returns the given default",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "usingString",
          "normalized": "a-\u003e(b-\u003ea)-\u003ec-\u003ea",
          "package": "JSON-Combinator",
          "partial": "String",
          "signature": "x-\u003e(s-\u003ex)-\u003ej-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:usingString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an object's values from a JSON value or if it is not an object, returns the given default.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "valuesOr",
          "package": "JSON-Combinator",
          "signature": "[j]-\u003e j-\u003e [j]",
          "type": "function"
        },
        "index": {
          "description": "Returns an object values from JSON value or if it is not an object returns the given default",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "valuesOr",
          "normalized": "[a]-\u003ea-\u003e[a]",
          "package": "JSON-Combinator",
          "partial": "Or",
          "signature": "[j]-\u003ej-\u003e[j]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:valuesOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the given function if the JSON value is an array.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "withArray",
          "package": "JSON-Combinator",
          "signature": "(a j -\u003e a j)-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Runs the given function if the JSON value is an array",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "withArray",
          "normalized": "(a b-\u003ea b)-\u003eb-\u003eb",
          "package": "JSON-Combinator",
          "partial": "Array",
          "signature": "(a j-\u003ea j)-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:withArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteracts by parsing the standard input for JSON, executing the given function for a failed result with a string error message, or printing a successful result to the given function and passing the result to standard output.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "withJSON",
          "package": "JSON-Combinator",
          "signature": "(e -\u003e IO ()) -\u003e (j -\u003e j') -\u003e IO ()",
          "source": "src/Text-JSON-Combinator.html#withJSON",
          "type": "function"
        },
        "index": {
          "description": "Interacts by parsing the standard input for JSON executing the given function for failed result with string error message or printing successful result to the given function and passing the result to standard output",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "withJSON",
          "normalized": "(a-\u003eIO())-\u003e(b-\u003ec)-\u003eIO()",
          "package": "JSON-Combinator",
          "partial": "JSON",
          "signature": "(e-\u003eIO())-\u003e(j-\u003ej')-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:withJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteracts by parsing the given file for JSON, executing the given function for a failed result with a string error message, or printing a successful result to the given function and writing the result to the given file.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "withJSONFile",
          "package": "JSON-Combinator",
          "signature": "(e -\u003e IO ()) -\u003e (j -\u003e j') -\u003e FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/Text-JSON-Combinator.html#withJSONFile",
          "type": "function"
        },
        "index": {
          "description": "Interacts by parsing the given file for JSON executing the given function for failed result with string error message or printing successful result to the given function and writing the result to the given file",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "withJSONFile",
          "normalized": "(a-\u003eIO())-\u003e(b-\u003ec)-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "package": "JSON-Combinator",
          "partial": "JSONFile",
          "signature": "(e-\u003eIO())-\u003e(j-\u003ej')-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:withJSONFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the given function if the JSON value is a number.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "withNumber",
          "package": "JSON-Combinator",
          "signature": "(Rational -\u003e Rational)-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Runs the given function if the JSON value is number",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "withNumber",
          "normalized": "(Rational-\u003eRational)-\u003ea-\u003ea",
          "package": "JSON-Combinator",
          "partial": "Number",
          "signature": "(Rational-\u003eRational)-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:withNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the given function if the JSON value is an object.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "withObject",
          "package": "JSON-Combinator",
          "signature": "(o j -\u003e o j)-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Runs the given function if the JSON value is an object",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "withObject",
          "normalized": "(a b-\u003ea b)-\u003eb-\u003eb",
          "package": "JSON-Combinator",
          "partial": "Object",
          "signature": "(o j-\u003eo j)-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:withObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the given function on the fields if the JSON value is an object.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "withObjectFields",
          "package": "JSON-Combinator",
          "signature": "(j -\u003e j)-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Runs the given function on the fields if the JSON value is an object",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "withObjectFields",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "JSON-Combinator",
          "partial": "Object Fields",
          "signature": "(j-\u003ej)-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:withObjectFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the given function if the JSON value is a string.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "withString",
          "package": "JSON-Combinator",
          "signature": "(s -\u003e s)-\u003e j-\u003e j",
          "type": "function"
        },
        "index": {
          "description": "Runs the given function if the JSON value is string",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "withString",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "JSON-Combinator",
          "partial": "String",
          "signature": "(s-\u003es)-\u003ej-\u003ej",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:withString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a JSON object to a file.\n\u003c/p\u003e",
          "module": "Text.JSON.Combinator",
          "name": "writeJSONFile",
          "package": "JSON-Combinator",
          "signature": "FilePath -\u003e a -\u003e IO ()",
          "source": "src/Text-JSON-Combinator.html#writeJSONFile",
          "type": "function"
        },
        "index": {
          "description": "Writes JSON object to file",
          "hierarchy": "Text JSON Combinator",
          "module": "Text.JSON.Combinator",
          "name": "writeJSONFile",
          "normalized": "FilePath-\u003ea-\u003eIO()",
          "package": "JSON-Combinator",
          "partial": "JSONFile",
          "signature": "FilePath-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Combinator.html#v:writeJSONFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData structures that used to denote failure of accessing JSON values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.Failure",
          "name": "Failure",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-Failure.html",
          "type": "module"
        },
        "index": {
          "description": "Data structures that used to denote failure of accessing JSON values",
          "hierarchy": "Text JSON Failure",
          "module": "Text.JSON.Failure",
          "name": "Failure",
          "package": "JSON-Combinator",
          "partial": "Failure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Failure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSON value was expected to be an array but it wasn't.\n\u003c/p\u003e",
          "module": "Text.JSON.Failure",
          "name": "ExpectedArray",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-Failure.html#ExpectedArray",
          "type": "data"
        },
        "index": {
          "description": "The JSON value was expected to be an array but it wasn",
          "hierarchy": "Text JSON Failure",
          "module": "Text.JSON.Failure",
          "name": "ExpectedArray",
          "package": "JSON-Combinator",
          "partial": "Expected Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Failure.html#t:ExpectedArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSON value was expected to be a boolean but it wasn't.\n\u003c/p\u003e",
          "module": "Text.JSON.Failure",
          "name": "ExpectedBool",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-Failure.html#ExpectedBool",
          "type": "data"
        },
        "index": {
          "description": "The JSON value was expected to be boolean but it wasn",
          "hierarchy": "Text JSON Failure",
          "module": "Text.JSON.Failure",
          "name": "ExpectedBool",
          "package": "JSON-Combinator",
          "partial": "Expected Bool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Failure.html#t:ExpectedBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSON value was expected to be a number but it wasn't.\n\u003c/p\u003e",
          "module": "Text.JSON.Failure",
          "name": "ExpectedNumber",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-Failure.html#ExpectedNumber",
          "type": "data"
        },
        "index": {
          "description": "The JSON value was expected to be number but it wasn",
          "hierarchy": "Text JSON Failure",
          "module": "Text.JSON.Failure",
          "name": "ExpectedNumber",
          "package": "JSON-Combinator",
          "partial": "Expected Number",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Failure.html#t:ExpectedNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSON value was expected to be an object but it wasn't.\n\u003c/p\u003e",
          "module": "Text.JSON.Failure",
          "name": "ExpectedObject",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-Failure.html#ExpectedObject",
          "type": "data"
        },
        "index": {
          "description": "The JSON value was expected to be an object but it wasn",
          "hierarchy": "Text JSON Failure",
          "module": "Text.JSON.Failure",
          "name": "ExpectedObject",
          "package": "JSON-Combinator",
          "partial": "Expected Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Failure.html#t:ExpectedObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSON value was expected to be a string but it wasn't.\n\u003c/p\u003e",
          "module": "Text.JSON.Failure",
          "name": "ExpectedString",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-Failure.html#ExpectedString",
          "type": "data"
        },
        "index": {
          "description": "The JSON value was expected to be string but it wasn",
          "hierarchy": "Text JSON Failure",
          "module": "Text.JSON.Failure",
          "name": "ExpectedString",
          "package": "JSON-Combinator",
          "partial": "Expected String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Failure.html#t:ExpectedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn object field was attempted to access but the object has no such field.\n\u003c/p\u003e",
          "module": "Text.JSON.Failure",
          "name": "NoSuchField",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-Failure.html#NoSuchField",
          "type": "data"
        },
        "index": {
          "description": "An object field was attempted to access but the object has no such field",
          "hierarchy": "Text JSON Failure",
          "module": "Text.JSON.Failure",
          "name": "NoSuchField",
          "package": "JSON-Combinator",
          "partial": "No Such Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Failure.html#t:NoSuchField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn object field was attempted to access but the object has no such field or\n the JSON value was expected to be an object but it wasn't.\n\u003c/p\u003e",
          "module": "Text.JSON.Failure",
          "name": "NoSuchFieldOrExpectedObject",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-Failure.html#NoSuchFieldOrExpectedObject",
          "type": "data"
        },
        "index": {
          "description": "An object field was attempted to access but the object has no such field or the JSON value was expected to be an object but it wasn",
          "hierarchy": "Text JSON Failure",
          "module": "Text.JSON.Failure",
          "name": "NoSuchFieldOrExpectedObject",
          "package": "JSON-Combinator",
          "partial": "No Such Field Or Expected Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Failure.html#t:NoSuchFieldOrExpectedObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Failure",
          "name": "ExpectedArray",
          "package": "JSON-Combinator",
          "signature": "ExpectedArray j",
          "source": "src/Text-JSON-Failure.html#ExpectedArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Failure",
          "module": "Text.JSON.Failure",
          "name": "ExpectedArray",
          "package": "JSON-Combinator",
          "partial": "Expected Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Failure.html#v:ExpectedArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Failure",
          "name": "ExpectedBool",
          "package": "JSON-Combinator",
          "signature": "ExpectedBool j",
          "source": "src/Text-JSON-Failure.html#ExpectedBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Failure",
          "module": "Text.JSON.Failure",
          "name": "ExpectedBool",
          "package": "JSON-Combinator",
          "partial": "Expected Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Failure.html#v:ExpectedBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Failure",
          "name": "ExpectedNumber",
          "package": "JSON-Combinator",
          "signature": "ExpectedNumber j",
          "source": "src/Text-JSON-Failure.html#ExpectedNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Failure",
          "module": "Text.JSON.Failure",
          "name": "ExpectedNumber",
          "package": "JSON-Combinator",
          "partial": "Expected Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Failure.html#v:ExpectedNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Failure",
          "name": "ExpectedObject",
          "package": "JSON-Combinator",
          "signature": "ExpectedObject j",
          "source": "src/Text-JSON-Failure.html#ExpectedObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Failure",
          "module": "Text.JSON.Failure",
          "name": "ExpectedObject",
          "package": "JSON-Combinator",
          "partial": "Expected Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Failure.html#v:ExpectedObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Failure",
          "name": "ExpectedString",
          "package": "JSON-Combinator",
          "signature": "ExpectedString j",
          "source": "src/Text-JSON-Failure.html#ExpectedString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Failure",
          "module": "Text.JSON.Failure",
          "name": "ExpectedString",
          "package": "JSON-Combinator",
          "partial": "Expected String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Failure.html#v:ExpectedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Failure",
          "name": "NoSuchField",
          "package": "JSON-Combinator",
          "signature": "NoSuchField z",
          "source": "src/Text-JSON-Failure.html#NoSuchField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Failure",
          "module": "Text.JSON.Failure",
          "name": "NoSuchField",
          "package": "JSON-Combinator",
          "partial": "No Such Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Failure.html#v:NoSuchField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Failure",
          "name": "NoSuchFieldOrExpectedObject_ExpectedObject",
          "package": "JSON-Combinator",
          "signature": "NoSuchFieldOrExpectedObject_ExpectedObject j",
          "source": "src/Text-JSON-Failure.html#NoSuchFieldOrExpectedObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Failure",
          "module": "Text.JSON.Failure",
          "name": "NoSuchFieldOrExpectedObject_ExpectedObject",
          "package": "JSON-Combinator",
          "partial": "No Such Field Or Expected Object Expected Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Failure.html#v:NoSuchFieldOrExpectedObject_ExpectedObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Failure",
          "name": "NoSuchFieldOrExpectedObject_NoSuchField",
          "package": "JSON-Combinator",
          "signature": "NoSuchFieldOrExpectedObject_NoSuchField z",
          "source": "src/Text-JSON-Failure.html#NoSuchFieldOrExpectedObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON Failure",
          "module": "Text.JSON.Failure",
          "name": "NoSuchFieldOrExpectedObject_NoSuchField",
          "package": "JSON-Combinator",
          "partial": "No Such Field Or Expected Object No Such Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Failure.html#v:NoSuchFieldOrExpectedObject_NoSuchField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generalisation on functions to interact with standard input and standard output.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.Interact",
          "name": "Interact",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-Interact.html",
          "type": "module"
        },
        "index": {
          "description": "generalisation on functions to interact with standard input and standard output",
          "hierarchy": "Text JSON Interact",
          "module": "Text.JSON.Interact",
          "name": "Interact",
          "package": "JSON-Combinator",
          "partial": "Interact",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Interact.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Interact",
          "name": "Interact",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-Interact.html#Interact",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text JSON Interact",
          "module": "Text.JSON.Interact",
          "name": "Interact",
          "package": "JSON-Combinator",
          "partial": "Interact",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Interact.html#t:Interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Interact",
          "name": "getContents'",
          "package": "JSON-Combinator",
          "signature": "IO z",
          "source": "src/Text-JSON-Interact.html#getContents%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON Interact",
          "module": "Text.JSON.Interact",
          "name": "getContents'",
          "package": "JSON-Combinator",
          "partial": "Contents'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Interact.html#v:getContents-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Interact",
          "name": "interact'",
          "package": "JSON-Combinator",
          "signature": "(z -\u003e z) -\u003e IO ()",
          "source": "src/Text-JSON-Interact.html#interact%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON Interact",
          "module": "Text.JSON.Interact",
          "name": "interact'",
          "normalized": "(a-\u003ea)-\u003eIO()",
          "package": "JSON-Combinator",
          "signature": "(z-\u003ez)-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Interact.html#v:interact-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Interact",
          "name": "putStr'",
          "package": "JSON-Combinator",
          "signature": "z -\u003e IO ()",
          "source": "src/Text-JSON-Interact.html#putStr%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON Interact",
          "module": "Text.JSON.Interact",
          "name": "putStr'",
          "normalized": "a-\u003eIO()",
          "package": "JSON-Combinator",
          "partial": "Str'",
          "signature": "z-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-Interact.html#v:putStr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generalisation on functions to read and write files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.InteractFile",
          "name": "InteractFile",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-InteractFile.html",
          "type": "module"
        },
        "index": {
          "description": "generalisation on functions to read and write files",
          "hierarchy": "Text JSON InteractFile",
          "module": "Text.JSON.InteractFile",
          "name": "InteractFile",
          "package": "JSON-Combinator",
          "partial": "Interact File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-InteractFile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.InteractFile",
          "name": "InteractFile",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-InteractFile.html#InteractFile",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text JSON InteractFile",
          "module": "Text.JSON.InteractFile",
          "name": "InteractFile",
          "package": "JSON-Combinator",
          "partial": "Interact File",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-InteractFile.html#t:InteractFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.InteractFile",
          "name": "readFile'",
          "package": "JSON-Combinator",
          "signature": "FilePath -\u003e IO z",
          "source": "src/Text-JSON-InteractFile.html#readFile%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON InteractFile",
          "module": "Text.JSON.InteractFile",
          "name": "readFile'",
          "normalized": "FilePath-\u003eIO a",
          "package": "JSON-Combinator",
          "partial": "File'",
          "signature": "FilePath-\u003eIO z",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-InteractFile.html#v:readFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.InteractFile",
          "name": "writeFile'",
          "package": "JSON-Combinator",
          "signature": "FilePath -\u003e z -\u003e IO ()",
          "source": "src/Text-JSON-InteractFile.html#writeFile%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON InteractFile",
          "module": "Text.JSON.InteractFile",
          "name": "writeFile'",
          "normalized": "FilePath-\u003ea-\u003eIO()",
          "package": "JSON-Combinator",
          "partial": "File'",
          "signature": "FilePath-\u003ez-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-InteractFile.html#v:writeFile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe base functions for accessing JSON object fields.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.JSONField",
          "name": "JSONField",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-JSONField.html",
          "type": "module"
        },
        "index": {
          "description": "The base functions for accessing JSON object fields",
          "hierarchy": "Text JSON JSONField",
          "module": "Text.JSON.JSONField",
          "name": "JSONField",
          "package": "JSON-Combinator",
          "partial": "JSONField",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONField.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessing JSON object fields.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONField",
          "name": "JSONField",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-JSONField.html#JSONField",
          "type": "class"
        },
        "index": {
          "description": "Accessing JSON object fields",
          "hierarchy": "Text JSON JSONField",
          "module": "Text.JSON.JSONField",
          "name": "JSONField",
          "package": "JSON-Combinator",
          "partial": "JSONField",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONField.html#t:JSONField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the field of a JSON object with potential failure.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONField",
          "name": "field",
          "package": "JSON-Combinator",
          "signature": "f -\u003e j -\u003e m j",
          "source": "src/Text-JSON-JSONField.html#field",
          "type": "method"
        },
        "index": {
          "description": "Access the field of JSON object with potential failure",
          "hierarchy": "Text JSON JSONField",
          "module": "Text.JSON.JSONField",
          "name": "field",
          "normalized": "a-\u003eb-\u003ec b",
          "package": "JSON-Combinator",
          "signature": "f-\u003ej-\u003em j",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONField.html#v:field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess all fields of a JSON object with potential failure.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONField",
          "name": "fields",
          "package": "JSON-Combinator",
          "signature": "j -\u003e m [f]",
          "source": "src/Text-JSON-JSONField.html#fields",
          "type": "method"
        },
        "index": {
          "description": "Access all fields of JSON object with potential failure",
          "hierarchy": "Text JSON JSONField",
          "module": "Text.JSON.JSONField",
          "name": "fields",
          "normalized": "a-\u003eb[c]",
          "package": "JSON-Combinator",
          "signature": "j-\u003em[f]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONField.html#v:fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all object field values of a JSON value.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONField",
          "name": "values",
          "package": "JSON-Combinator",
          "signature": "j -\u003e m [j]",
          "source": "src/Text-JSON-JSONField.html#values",
          "type": "method"
        },
        "index": {
          "description": "Returns all object field values of JSON value",
          "hierarchy": "Text JSON JSONField",
          "module": "Text.JSON.JSONField",
          "name": "values",
          "normalized": "a-\u003eb[a]",
          "package": "JSON-Combinator",
          "signature": "j-\u003em[j]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONField.html#v:values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe generalisation of a JSON object.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.JSONLike",
          "name": "JSONLike",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-JSONLike.html",
          "type": "module"
        },
        "index": {
          "description": "The generalisation of JSON object",
          "hierarchy": "Text JSON JSONLike",
          "module": "Text.JSON.JSONLike",
          "name": "JSONLike",
          "package": "JSON-Combinator",
          "partial": "JSONLike",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONLike.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe generalisation of a JSON object.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONLike",
          "name": "JSONLike",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-JSONLike.html#JSONLike",
          "type": "class"
        },
        "index": {
          "description": "The generalisation of JSON object",
          "hierarchy": "Text JSON JSONLike",
          "module": "Text.JSON.JSONLike",
          "name": "JSONLike",
          "package": "JSON-Combinator",
          "partial": "JSONLike",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONLike.html#t:JSONLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.JSONLike",
          "name": "StringMap",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-JSONLike.html#StringMap",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text JSON JSONLike",
          "module": "Text.JSON.JSONLike",
          "name": "StringMap",
          "package": "JSON-Combinator",
          "partial": "String Map",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONLike.html#t:StringMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.JSONLike",
          "name": "StringMap",
          "package": "JSON-Combinator",
          "signature": "StringMap",
          "source": "src/Text-JSON-JSONLike.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON JSONLike",
          "module": "Text.JSON.JSONLike",
          "name": "StringMap",
          "package": "JSON-Combinator",
          "partial": "String Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONLike.html#v:StringMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstructs a JSON object.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONLike",
          "name": "foldJSON",
          "package": "JSON-Combinator",
          "signature": "foldJSON",
          "source": "src/Text-JSON-JSONLike.html#foldJSON",
          "type": "method"
        },
        "index": {
          "description": "Deconstructs JSON object",
          "hierarchy": "Text JSON JSONLike",
          "module": "Text.JSON.JSONLike",
          "name": "foldJSON",
          "package": "JSON-Combinator",
          "partial": "JSON",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONLike.html#v:foldJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a JSON array value from the given array.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONLike",
          "name": "jarray",
          "package": "JSON-Combinator",
          "signature": "a j -\u003e j",
          "source": "src/Text-JSON-JSONLike.html#jarray",
          "type": "method"
        },
        "index": {
          "description": "Constructs JSON array value from the given array",
          "hierarchy": "Text JSON JSONLike",
          "module": "Text.JSON.JSONLike",
          "name": "jarray",
          "normalized": "a b-\u003eb",
          "package": "JSON-Combinator",
          "signature": "a j-\u003ej",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONLike.html#v:jarray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a JSON false value.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONLike",
          "name": "jfalse",
          "package": "JSON-Combinator",
          "signature": "j",
          "source": "src/Text-JSON-JSONLike.html#jfalse",
          "type": "method"
        },
        "index": {
          "description": "Constructs JSON false value",
          "hierarchy": "Text JSON JSONLike",
          "module": "Text.JSON.JSONLike",
          "name": "jfalse",
          "package": "JSON-Combinator",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONLike.html#v:jfalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a JSON null value.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONLike",
          "name": "jnull",
          "package": "JSON-Combinator",
          "signature": "j",
          "source": "src/Text-JSON-JSONLike.html#jnull",
          "type": "method"
        },
        "index": {
          "description": "Constructs JSON null value",
          "hierarchy": "Text JSON JSONLike",
          "module": "Text.JSON.JSONLike",
          "name": "jnull",
          "package": "JSON-Combinator",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONLike.html#v:jnull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a JSON number value from the given rational.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONLike",
          "name": "jnumber",
          "package": "JSON-Combinator",
          "signature": "Rational -\u003e j",
          "source": "src/Text-JSON-JSONLike.html#jnumber",
          "type": "method"
        },
        "index": {
          "description": "Constructs JSON number value from the given rational",
          "hierarchy": "Text JSON JSONLike",
          "module": "Text.JSON.JSONLike",
          "name": "jnumber",
          "normalized": "Rational-\u003ea",
          "package": "JSON-Combinator",
          "signature": "Rational-\u003ej",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONLike.html#v:jnumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a JSON object value from the given object.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONLike",
          "name": "jobject",
          "package": "JSON-Combinator",
          "signature": "o j -\u003e j",
          "source": "src/Text-JSON-JSONLike.html#jobject",
          "type": "method"
        },
        "index": {
          "description": "Constructs JSON object value from the given object",
          "hierarchy": "Text JSON JSONLike",
          "module": "Text.JSON.JSONLike",
          "name": "jobject",
          "normalized": "a b-\u003eb",
          "package": "JSON-Combinator",
          "signature": "o j-\u003ej",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONLike.html#v:jobject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a JSON string value from the given string.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONLike",
          "name": "jstring",
          "package": "JSON-Combinator",
          "signature": "s -\u003e j",
          "source": "src/Text-JSON-JSONLike.html#jstring",
          "type": "method"
        },
        "index": {
          "description": "Constructs JSON string value from the given string",
          "hierarchy": "Text JSON JSONLike",
          "module": "Text.JSON.JSONLike",
          "name": "jstring",
          "normalized": "a-\u003eb",
          "package": "JSON-Combinator",
          "signature": "s-\u003ej",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONLike.html#v:jstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a JSON true value.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONLike",
          "name": "jtrue",
          "package": "JSON-Combinator",
          "signature": "j",
          "source": "src/Text-JSON-JSONLike.html#jtrue",
          "type": "method"
        },
        "index": {
          "description": "Constructs JSON true value",
          "hierarchy": "Text JSON JSONLike",
          "module": "Text.JSON.JSONLike",
          "name": "jtrue",
          "package": "JSON-Combinator",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONLike.html#v:jtrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.JSONLike",
          "name": "runStringMap",
          "package": "JSON-Combinator",
          "signature": "Map String a",
          "source": "src/Text-JSON-JSONLike.html#StringMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSON JSONLike",
          "module": "Text.JSON.JSONLike",
          "name": "runStringMap",
          "package": "JSON-Combinator",
          "partial": "String Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONLike.html#v:runStringMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing JSON object values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.JSONParse",
          "name": "JSONParse",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-JSONParse.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing JSON object values",
          "hierarchy": "Text JSON JSONParse",
          "module": "Text.JSON.JSONParse",
          "name": "JSONParse",
          "package": "JSON-Combinator",
          "partial": "JSONParse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONParse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing JSON object values.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONParse",
          "name": "JSONParse",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-JSONParse.html#JSONParse",
          "type": "class"
        },
        "index": {
          "description": "Parsing JSON object values",
          "hierarchy": "Text JSON JSONParse",
          "module": "Text.JSON.JSONParse",
          "name": "JSONParse",
          "package": "JSON-Combinator",
          "partial": "JSONParse",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONParse.html#t:JSONParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a value into either an error or a JSON object.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONParse",
          "name": "parseJSON",
          "package": "JSON-Combinator",
          "signature": "parseJSON",
          "source": "src/Text-JSON-JSONParse.html#parseJSON",
          "type": "method"
        },
        "index": {
          "description": "Parses value into either an error or JSON object",
          "hierarchy": "Text JSON JSONParse",
          "module": "Text.JSON.JSONParse",
          "name": "parseJSON",
          "package": "JSON-Combinator",
          "partial": "JSON",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONParse.html#v:parseJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a value with an empty source name.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONParse",
          "name": "parseJSON'",
          "package": "JSON-Combinator",
          "signature": "p-\u003e Either e j",
          "type": "function"
        },
        "index": {
          "description": "Parse value with an empty source name",
          "hierarchy": "Text JSON JSONParse",
          "module": "Text.JSON.JSONParse",
          "name": "parseJSON'",
          "normalized": "a-\u003eEither b c",
          "package": "JSON-Combinator",
          "partial": "JSON'",
          "signature": "p-\u003eEither e j",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONParse.html#v:parseJSON-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrepending values to existing JSON association values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.JSONPrepend",
          "name": "JSONPrepend",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-JSONPrepend.html",
          "type": "module"
        },
        "index": {
          "description": "Prepending values to existing JSON association values",
          "hierarchy": "Text JSON JSONPrepend",
          "module": "Text.JSON.JSONPrepend",
          "name": "JSONPrepend",
          "package": "JSON-Combinator",
          "partial": "JSONPrepend",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONPrepend.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepending values to existing JSON association values.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONPrepend",
          "name": "JSONPrepend",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-JSONPrepend.html#JSONPrepend",
          "type": "class"
        },
        "index": {
          "description": "Prepending values to existing JSON association values",
          "hierarchy": "Text JSON JSONPrepend",
          "module": "Text.JSON.JSONPrepend",
          "name": "JSONPrepend",
          "package": "JSON-Combinator",
          "partial": "JSONPrepend",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONPrepend.html#t:JSONPrepend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepends the given value if the JSON is an array.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONPrepend",
          "name": "(--\u003e\u003e:)",
          "package": "JSON-Combinator",
          "signature": "(--\u003e\u003e:)",
          "source": "src/Text-JSON-JSONPrepend.html#--%3E%3E%3A",
          "type": "method"
        },
        "index": {
          "description": "Prepends the given value if the JSON is an array",
          "hierarchy": "Text JSON JSONPrepend",
          "module": "Text.JSON.JSONPrepend",
          "name": "(--\u003e\u003e:) --\u003e\u003e:",
          "normalized": "(-\u003e)",
          "package": "JSON-Combinator",
          "signature": "(-\u003e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONPrepend.html#v:-45--45--62--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepends the given association if the JSON is an object.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONPrepend",
          "name": "(-\u003e:)",
          "package": "JSON-Combinator",
          "signature": "(-\u003e:)",
          "source": "src/Text-JSON-JSONPrepend.html#-%3E%3A",
          "type": "method"
        },
        "index": {
          "description": "Prepends the given association if the JSON is an object",
          "hierarchy": "Text JSON JSONPrepend",
          "module": "Text.JSON.JSONPrepend",
          "name": "(-\u003e:) -\u003e:",
          "normalized": "(-\u003e)",
          "package": "JSON-Combinator",
          "signature": "(-\u003e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONPrepend.html#v:-45--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty-printing JSON values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSON.JSONPrint",
          "name": "JSONPrint",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-JSONPrint.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty-printing JSON values",
          "hierarchy": "Text JSON JSONPrint",
          "module": "Text.JSON.JSONPrint",
          "name": "JSONPrint",
          "package": "JSON-Combinator",
          "partial": "JSONPrint",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONPrint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-printing JSON values.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONPrint",
          "name": "JSONPrint",
          "package": "JSON-Combinator",
          "source": "src/Text-JSON-JSONPrint.html#JSONPrint",
          "type": "class"
        },
        "index": {
          "description": "Pretty-printing JSON values",
          "hierarchy": "Text JSON JSONPrint",
          "module": "Text.JSON.JSONPrint",
          "name": "JSONPrint",
          "package": "JSON-Combinator",
          "partial": "JSONPrint",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONPrint.html#t:JSONPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the given JSON value to a pretty-printed value.\n\u003c/p\u003e",
          "module": "Text.JSON.JSONPrint",
          "name": "printJSON",
          "package": "JSON-Combinator",
          "signature": "printJSON",
          "source": "src/Text-JSON-JSONPrint.html#printJSON",
          "type": "method"
        },
        "index": {
          "description": "Print the given JSON value to pretty-printed value",
          "hierarchy": "Text JSON JSONPrint",
          "module": "Text.JSON.JSONPrint",
          "name": "printJSON",
          "package": "JSON-Combinator",
          "partial": "JSON",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/JSON-Combinator/docs/Text-JSON-JSONPrint.html#v:printJSON"
      }
    }
  ]
]