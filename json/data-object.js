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
        "word": "data-object"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe core of this package is the \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e data type, which is used for\n handling scalars, sequences and mappings in a nested manner. This\n is the same structure used in JSON or Yaml data.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e data type is polymorphic in its keys and values. Submodules\n within this package provide more concrete datatypes, such as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e and a specialized scalar type.\n\u003c/p\u003e\u003cp\u003eBesides the \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e data type, there are utility functions and type classes\n for converting objects around. Care has been taken to avoid any overloaded\n instances for these type classes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Object",
          "name": "Object",
          "package": "data-object",
          "source": "src/Data-Object.html",
          "type": "module"
        },
        "index": {
          "description": "The core of this package is the Object data type which is used for handling scalars sequences and mappings in nested manner This is the same structure used in JSON or Yaml data The Object data type is polymorphic in its keys and values Submodules within this package provide more concrete datatypes such as String Object and specialized scalar type Besides the Object data type there are utility functions and type classes for converting objects around Care has been taken to avoid any overloaded instances for these type classes",
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "Object",
          "package": "data-object",
          "partial": "Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan represent nested values as scalars, sequences and mappings.  A\n sequence is synonymous with a list, while a mapping is synonymous with a\n list of pairs.\n\u003c/p\u003e\u003cp\u003eNote that instances of standard library type classes for this data type\n leave the key untouched while altering the value. For example, the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n instance defines \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e to be synonymous with \u003ccode\u003e\u003ca\u003emapValues\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Object",
          "name": "Object",
          "package": "data-object",
          "source": "src/Data-Object.html#Object",
          "type": "data"
        },
        "index": {
          "description": "Can represent nested values as scalars sequences and mappings sequence is synonymous with list while mapping is synonymous with list of pairs Note that instances of standard library type classes for this data type leave the key untouched while altering the value For example the Functor instance defines fmap to be synonymous with mapValues",
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "Object",
          "package": "data-object",
          "partial": "Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error value returned when an unexpected node is encountered, eg you\n were expecting a \u003ccode\u003e\u003ca\u003eScalar\u003c/a\u003e\u003c/code\u003e and found a \u003ccode\u003e\u003ca\u003eMapping\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Object",
          "name": "ObjectExtractError",
          "package": "data-object",
          "source": "src/Data-Object.html#ObjectExtractError",
          "type": "data"
        },
        "index": {
          "description": "An error value returned when an unexpected node is encountered eg you were expecting Scalar and found Mapping",
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "ObjectExtractError",
          "package": "data-object",
          "partial": "Object Extract Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#t:ObjectExtractError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "Scalar",
          "package": "data-object",
          "source": "src/Data-Object.html#Scalar",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "Scalar",
          "package": "data-object",
          "partial": "Scalar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#t:Scalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "ScalarObject",
          "package": "data-object",
          "source": "src/Data-Object.html#ScalarObject",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "ScalarObject",
          "package": "data-object",
          "partial": "Scalar Object",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#t:ScalarObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "StringObject",
          "package": "data-object",
          "source": "src/Data-Object.html#StringObject",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "StringObject",
          "package": "data-object",
          "partial": "String Object",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#t:StringObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003es with keys and values of strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Object",
          "name": "TextObject",
          "package": "data-object",
          "source": "src/Data-Object.html#TextObject",
          "type": "type"
        },
        "index": {
          "description": "Object with keys and values of strict Text",
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "TextObject",
          "package": "data-object",
          "partial": "Text Object",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#t:TextObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "Binary",
          "package": "data-object",
          "signature": "Binary ByteString",
          "source": "src/Data-Object.html#Scalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "Binary",
          "package": "data-object",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "Bool",
          "package": "data-object",
          "signature": "Bool Bool",
          "source": "src/Data-Object.html#Scalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "Bool",
          "package": "data-object",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "ExpectedMapping",
          "package": "data-object",
          "signature": "ExpectedMapping",
          "source": "src/Data-Object.html#ObjectExtractError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "ExpectedMapping",
          "package": "data-object",
          "partial": "Expected Mapping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:ExpectedMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "ExpectedScalar",
          "package": "data-object",
          "signature": "ExpectedScalar",
          "source": "src/Data-Object.html#ObjectExtractError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "ExpectedScalar",
          "package": "data-object",
          "partial": "Expected Scalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:ExpectedScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "ExpectedSequence",
          "package": "data-object",
          "signature": "ExpectedSequence",
          "source": "src/Data-Object.html#ObjectExtractError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "ExpectedSequence",
          "package": "data-object",
          "partial": "Expected Sequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:ExpectedSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "Mapping",
          "package": "data-object",
          "signature": "Mapping [(key, Object key val)]",
          "source": "src/Data-Object.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "Mapping",
          "normalized": "Mapping[(a,Object a b)]",
          "package": "data-object",
          "partial": "Mapping",
          "signature": "Mapping[(key,Object key val)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Mapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "MissingKey",
          "package": "data-object",
          "signature": "MissingKey String",
          "source": "src/Data-Object.html#ObjectExtractError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "MissingKey",
          "package": "data-object",
          "partial": "Missing Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:MissingKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "Null",
          "package": "data-object",
          "signature": "Null",
          "source": "src/Data-Object.html#Scalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "Null",
          "package": "data-object",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "Numeric",
          "package": "data-object",
          "signature": "Numeric Rational",
          "source": "src/Data-Object.html#Scalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "Numeric",
          "package": "data-object",
          "partial": "Numeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Numeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "Scalar",
          "package": "data-object",
          "signature": "Scalar val",
          "source": "src/Data-Object.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "Scalar",
          "package": "data-object",
          "partial": "Scalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Scalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "Sequence",
          "package": "data-object",
          "signature": "Sequence [Object key val]",
          "source": "src/Data-Object.html#Object",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "Sequence",
          "normalized": "Sequence[Object a b]",
          "package": "data-object",
          "partial": "Sequence",
          "signature": "Sequence[Object key val]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "Text",
          "package": "data-object",
          "signature": "Text Text",
          "source": "src/Data-Object.html#Scalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "Text",
          "package": "data-object",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "Timestamp",
          "package": "data-object",
          "signature": "Timestamp UTCTime",
          "source": "src/Data-Object.html#Scalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "Timestamp",
          "package": "data-object",
          "partial": "Timestamp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Timestamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a mapping from the input, failing if the input is a scalar or\n sequence.\n\u003c/p\u003e",
          "module": "Data.Object",
          "name": "fromMapping",
          "package": "data-object",
          "signature": "Object k v -\u003e m [(k, Object k v)]",
          "source": "src/Data-Object.html#fromMapping",
          "type": "function"
        },
        "index": {
          "description": "Extract mapping from the input failing if the input is scalar or sequence",
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "fromMapping",
          "normalized": "Object a b-\u003ec[(a,Object a b)]",
          "package": "data-object",
          "partial": "Mapping",
          "signature": "Object k v-\u003em[(k,Object k v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:fromMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a scalar from the input, failing if the input is a sequence or\n mapping.\n\u003c/p\u003e",
          "module": "Data.Object",
          "name": "fromScalar",
          "package": "data-object",
          "signature": "Object k v -\u003e m v",
          "source": "src/Data-Object.html#fromScalar",
          "type": "function"
        },
        "index": {
          "description": "Extract scalar from the input failing if the input is sequence or mapping",
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "fromScalar",
          "normalized": "Object a b-\u003ec b",
          "package": "data-object",
          "partial": "Scalar",
          "signature": "Object k v-\u003em v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:fromScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a sequence from the input, failing if the input is a scalar or\n mapping.\n\u003c/p\u003e",
          "module": "Data.Object",
          "name": "fromSequence",
          "package": "data-object",
          "signature": "Object k v -\u003e m [Object k v]",
          "source": "src/Data-Object.html#fromSequence",
          "type": "function"
        },
        "index": {
          "description": "Extract sequence from the input failing if the input is scalar or mapping",
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "fromSequence",
          "normalized": "Object a b-\u003ec[Object a b]",
          "package": "data-object",
          "partial": "Sequence",
          "signature": "Object k v-\u003em[Object k v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:fromSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "lookupMapping",
          "package": "data-object",
          "signature": "k -\u003e [(k, Object k v)] -\u003e m [(k, Object k v)]",
          "source": "src/Data-Object.html#lookupMapping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "lookupMapping",
          "normalized": "a-\u003e[(a,Object a b)]-\u003ec[(a,Object a b)]",
          "package": "data-object",
          "partial": "Mapping",
          "signature": "k-\u003e[(k,Object k v)]-\u003em[(k,Object k v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:lookupMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "lookupObject",
          "package": "data-object",
          "signature": "k -\u003e [(k, Object k v)] -\u003e m (Object k v)",
          "source": "src/Data-Object.html#lookupObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "lookupObject",
          "normalized": "a-\u003e[(a,Object a b)]-\u003ec(Object a b)",
          "package": "data-object",
          "partial": "Object",
          "signature": "k-\u003e[(k,Object k v)]-\u003em(Object k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:lookupObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "lookupScalar",
          "package": "data-object",
          "signature": "k -\u003e [(k, Object k v)] -\u003e m v",
          "source": "src/Data-Object.html#lookupScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "lookupScalar",
          "normalized": "a-\u003e[(a,Object a b)]-\u003ec b",
          "package": "data-object",
          "partial": "Scalar",
          "signature": "k-\u003e[(k,Object k v)]-\u003em v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:lookupScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Object",
          "name": "lookupSequence",
          "package": "data-object",
          "signature": "k -\u003e [(k, Object k v)] -\u003e m [Object k v]",
          "source": "src/Data-Object.html#lookupSequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "lookupSequence",
          "normalized": "a-\u003e[(a,Object a b)]-\u003ec[Object a b]",
          "package": "data-object",
          "partial": "Sequence",
          "signature": "k-\u003e[(k,Object k v)]-\u003em[Object k v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:lookupSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply some conversion to the keys of an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e, leaving the values\n unchanged.\n\u003c/p\u003e",
          "module": "Data.Object",
          "name": "mapKeys",
          "package": "data-object",
          "signature": "(keyIn -\u003e keyOut) -\u003e Object keyIn val -\u003e Object keyOut val",
          "source": "src/Data-Object.html#mapKeys",
          "type": "function"
        },
        "index": {
          "description": "Apply some conversion to the keys of an Object leaving the values unchanged",
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "mapKeys",
          "normalized": "(a-\u003eb)-\u003eObject a c-\u003eObject b c",
          "package": "data-object",
          "partial": "Keys",
          "signature": "(keyIn-\u003ekeyOut)-\u003eObject keyIn val-\u003eObject keyOut val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:mapKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a conversion to both the keys and values of an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Object",
          "name": "mapKeysValues",
          "package": "data-object",
          "signature": "(keyIn -\u003e keyOut) -\u003e (valIn -\u003e valOut) -\u003e Object keyIn valIn -\u003e Object keyOut valOut",
          "source": "src/Data-Object.html#mapKeysValues",
          "type": "function"
        },
        "index": {
          "description": "Apply conversion to both the keys and values of an Object",
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "mapKeysValues",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eObject a c-\u003eObject b d",
          "package": "data-object",
          "partial": "Keys Values",
          "signature": "(keyIn-\u003ekeyOut)-\u003e(valIn-\u003evalOut)-\u003eObject keyIn valIn-\u003eObject keyOut valOut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:mapKeysValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e conversion to both the keys and values of an\n \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Object",
          "name": "mapKeysValuesA",
          "package": "data-object",
          "signature": "(keyIn -\u003e f keyOut) -\u003e (valIn -\u003e f valOut) -\u003e Object keyIn valIn -\u003e f (Object keyOut valOut)",
          "source": "src/Data-Object.html#mapKeysValuesA",
          "type": "function"
        },
        "index": {
          "description": "Apply an Applicative conversion to both the keys and values of an Object",
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "mapKeysValuesA",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003eObject a d-\u003eb(Object c e)",
          "package": "data-object",
          "partial": "Keys Values",
          "signature": "(keyIn-\u003ef keyOut)-\u003e(valIn-\u003ef valOut)-\u003eObject keyIn valIn-\u003ef(Object keyOut valOut)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:mapKeysValuesA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003emapKeysValuesA\u003c/a\u003e\u003c/code\u003e, but using a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e since some people are\n more comfortable with \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es and not all \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es are \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Object",
          "name": "mapKeysValuesM",
          "package": "data-object",
          "signature": "(keyIn -\u003e m keyOut) -\u003e (valIn -\u003e m valOut) -\u003e Object keyIn valIn -\u003e m (Object keyOut valOut)",
          "source": "src/Data-Object.html#mapKeysValuesM",
          "type": "function"
        },
        "index": {
          "description": "The same as mapKeysValuesA but using Monad since some people are more comfortable with Monad and not all Monad are Applicative",
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "mapKeysValuesM",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003eObject a d-\u003eb(Object c e)",
          "package": "data-object",
          "partial": "Keys Values",
          "signature": "(keyIn-\u003em keyOut)-\u003e(valIn-\u003em valOut)-\u003eObject keyIn valIn-\u003em(Object keyOut valOut)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:mapKeysValuesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply some conversion to the values of an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e, leaving the keys\n unchanged. This is equivalent to \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Object",
          "name": "mapValues",
          "package": "data-object",
          "signature": "(valIn -\u003e valOut) -\u003e Object key valIn -\u003e Object key valOut",
          "source": "src/Data-Object.html#mapValues",
          "type": "function"
        },
        "index": {
          "description": "Apply some conversion to the values of an Object leaving the keys unchanged This is equivalent to fmap",
          "hierarchy": "Data Object",
          "module": "Data.Object",
          "name": "mapValues",
          "normalized": "(a-\u003eb)-\u003eObject c a-\u003eObject c b",
          "package": "data-object",
          "partial": "Values",
          "signature": "(valIn-\u003evalOut)-\u003eObject key valIn-\u003eObject key valOut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:mapValues"
      }
    }
  ]
]