[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe core of this package is the \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e data type, which is used for\n handling scalars, sequences and mappings in a nested manner. This\n is the same structure used in JSON or Yaml data.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e data type is polymorphic in its keys and values. Submodules\n within this package provide more concrete datatypes, such as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e and a specialized scalar type.\n\u003c/p\u003e\u003cp\u003eBesides the \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e data type, there are utility functions and type classes\n for converting objects around. Care has been taken to avoid any overloaded\n instances for these type classes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "module",
        "fct-source": "src/Data-Object.html",
        "fct-type": "module",
        "title": "Object"
      },
      "index": {
        "description": "The core of this package is the Object data type which is used for handling scalars sequences and mappings in nested manner This is the same structure used in JSON or Yaml data The Object data type is polymorphic in its keys and values Submodules within this package provide more concrete datatypes such as String Object and specialized scalar type Besides the Object data type there are utility functions and type classes for converting objects around Care has been taken to avoid any overloaded instances for these type classes",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "Object",
        "normalized": "",
        "package": "data-object",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#t:Object",
      "description": {
        "fct-descr": "\u003cp\u003eCan represent nested values as scalars, sequences and mappings.  A\n sequence is synonymous with a list, while a mapping is synonymous with a\n list of pairs.\n\u003c/p\u003e\u003cp\u003eNote that instances of standard library type classes for this data type\n leave the key untouched while altering the value. For example, the \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e\n instance defines \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e to be synonymous with \u003ccode\u003e\u003ca\u003emapValues\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "data",
        "fct-source": "src/Data-Object.html#Object",
        "fct-type": "data",
        "title": "Object"
      },
      "index": {
        "description": "Can represent nested values as scalars sequences and mappings sequence is synonymous with list while mapping is synonymous with list of pairs Note that instances of standard library type classes for this data type leave the key untouched while altering the value For example the Functor instance defines fmap to be synonymous with mapValues",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "Object",
        "normalized": "",
        "package": "data-object",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#t:ObjectExtractError",
      "description": {
        "fct-descr": "\u003cp\u003eAn error value returned when an unexpected node is encountered, eg you\n were expecting a \u003ccode\u003e\u003ca\u003eScalar\u003c/a\u003e\u003c/code\u003e and found a \u003ccode\u003e\u003ca\u003eMapping\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "data",
        "fct-source": "src/Data-Object.html#ObjectExtractError",
        "fct-type": "data",
        "title": "ObjectExtractError"
      },
      "index": {
        "description": "An error value returned when an unexpected node is encountered eg you were expecting Scalar and found Mapping",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "ObjectExtractError",
        "normalized": "",
        "package": "data-object",
        "partial": "Object Extract Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#t:Scalar",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "data",
        "fct-source": "src/Data-Object.html#Scalar",
        "fct-type": "data",
        "title": "Scalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "Scalar",
        "normalized": "",
        "package": "data-object",
        "partial": "Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#t:ScalarObject",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "type",
        "fct-source": "src/Data-Object.html#ScalarObject",
        "fct-type": "type",
        "title": "ScalarObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "ScalarObject",
        "normalized": "",
        "package": "data-object",
        "partial": "Scalar Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#t:StringObject",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "type",
        "fct-source": "src/Data-Object.html#StringObject",
        "fct-type": "type",
        "title": "StringObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "StringObject",
        "normalized": "",
        "package": "data-object",
        "partial": "String Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#t:TextObject",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003es with keys and values of strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "type",
        "fct-source": "src/Data-Object.html#TextObject",
        "fct-type": "type",
        "title": "TextObject"
      },
      "index": {
        "description": "Object with keys and values of strict Text",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "TextObject",
        "normalized": "",
        "package": "data-object",
        "partial": "Text Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Binary",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "Binary ByteString",
        "fct-source": "src/Data-Object.html#Scalar",
        "fct-type": "function",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "Binary",
        "normalized": "",
        "package": "data-object",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Bool",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "Bool Bool",
        "fct-source": "src/Data-Object.html#Scalar",
        "fct-type": "function",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "Bool",
        "normalized": "",
        "package": "data-object",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:ExpectedMapping",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "ExpectedMapping",
        "fct-source": "src/Data-Object.html#ObjectExtractError",
        "fct-type": "function",
        "title": "ExpectedMapping"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "ExpectedMapping",
        "normalized": "",
        "package": "data-object",
        "partial": "Expected Mapping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:ExpectedScalar",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "ExpectedScalar",
        "fct-source": "src/Data-Object.html#ObjectExtractError",
        "fct-type": "function",
        "title": "ExpectedScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "ExpectedScalar",
        "normalized": "",
        "package": "data-object",
        "partial": "Expected Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:ExpectedSequence",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "ExpectedSequence",
        "fct-source": "src/Data-Object.html#ObjectExtractError",
        "fct-type": "function",
        "title": "ExpectedSequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "ExpectedSequence",
        "normalized": "",
        "package": "data-object",
        "partial": "Expected Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Mapping",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "Mapping [(key, Object key val)]",
        "fct-source": "src/Data-Object.html#Object",
        "fct-type": "function",
        "title": "Mapping"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "Mapping",
        "normalized": "Mapping[(a,Object a b)]",
        "package": "data-object",
        "partial": "Mapping",
        "signature": "Mapping[(key,Object key val)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:MissingKey",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "MissingKey String",
        "fct-source": "src/Data-Object.html#ObjectExtractError",
        "fct-type": "function",
        "title": "MissingKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "MissingKey",
        "normalized": "",
        "package": "data-object",
        "partial": "Missing Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Null",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "Null",
        "fct-source": "src/Data-Object.html#Scalar",
        "fct-type": "function",
        "title": "Null"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "Null",
        "normalized": "",
        "package": "data-object",
        "partial": "Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Numeric",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "Numeric Rational",
        "fct-source": "src/Data-Object.html#Scalar",
        "fct-type": "function",
        "title": "Numeric"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "Numeric",
        "normalized": "",
        "package": "data-object",
        "partial": "Numeric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Scalar",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "Scalar val",
        "fct-source": "src/Data-Object.html#Object",
        "fct-type": "function",
        "title": "Scalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "Scalar",
        "normalized": "",
        "package": "data-object",
        "partial": "Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Sequence",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "Sequence [Object key val]",
        "fct-source": "src/Data-Object.html#Object",
        "fct-type": "function",
        "title": "Sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "Sequence",
        "normalized": "Sequence[Object a b]",
        "package": "data-object",
        "partial": "Sequence",
        "signature": "Sequence[Object key val]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Text",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "Text Text",
        "fct-source": "src/Data-Object.html#Scalar",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "Text",
        "normalized": "",
        "package": "data-object",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:Timestamp",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "Timestamp UTCTime",
        "fct-source": "src/Data-Object.html#Scalar",
        "fct-type": "function",
        "title": "Timestamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "Timestamp",
        "normalized": "",
        "package": "data-object",
        "partial": "Timestamp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:fromMapping",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a mapping from the input, failing if the input is a scalar or\n sequence.\n\u003c/p\u003e",
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "Object k v -\u003e m [(k, Object k v)]",
        "fct-source": "src/Data-Object.html#fromMapping",
        "fct-type": "function",
        "title": "fromMapping"
      },
      "index": {
        "description": "Extract mapping from the input failing if the input is scalar or sequence",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "fromMapping",
        "normalized": "Object a b-\u003ec[(a,Object a b)]",
        "package": "data-object",
        "partial": "Mapping",
        "signature": "Object k v-\u003em[(k,Object k v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:fromScalar",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a scalar from the input, failing if the input is a sequence or\n mapping.\n\u003c/p\u003e",
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "Object k v -\u003e m v",
        "fct-source": "src/Data-Object.html#fromScalar",
        "fct-type": "function",
        "title": "fromScalar"
      },
      "index": {
        "description": "Extract scalar from the input failing if the input is sequence or mapping",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "fromScalar",
        "normalized": "Object a b-\u003ec b",
        "package": "data-object",
        "partial": "Scalar",
        "signature": "Object k v-\u003em v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:fromSequence",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a sequence from the input, failing if the input is a scalar or\n mapping.\n\u003c/p\u003e",
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "Object k v -\u003e m [Object k v]",
        "fct-source": "src/Data-Object.html#fromSequence",
        "fct-type": "function",
        "title": "fromSequence"
      },
      "index": {
        "description": "Extract sequence from the input failing if the input is scalar or mapping",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "fromSequence",
        "normalized": "Object a b-\u003ec[Object a b]",
        "package": "data-object",
        "partial": "Sequence",
        "signature": "Object k v-\u003em[Object k v]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:lookupMapping",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "k -\u003e [(k, Object k v)] -\u003e m [(k, Object k v)]",
        "fct-source": "src/Data-Object.html#lookupMapping",
        "fct-type": "function",
        "title": "lookupMapping"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "lookupMapping",
        "normalized": "a-\u003e[(a,Object a b)]-\u003ec[(a,Object a b)]",
        "package": "data-object",
        "partial": "Mapping",
        "signature": "k-\u003e[(k,Object k v)]-\u003em[(k,Object k v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:lookupObject",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "k -\u003e [(k, Object k v)] -\u003e m (Object k v)",
        "fct-source": "src/Data-Object.html#lookupObject",
        "fct-type": "function",
        "title": "lookupObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "lookupObject",
        "normalized": "a-\u003e[(a,Object a b)]-\u003ec(Object a b)",
        "package": "data-object",
        "partial": "Object",
        "signature": "k-\u003e[(k,Object k v)]-\u003em(Object k v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:lookupScalar",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "k -\u003e [(k, Object k v)] -\u003e m v",
        "fct-source": "src/Data-Object.html#lookupScalar",
        "fct-type": "function",
        "title": "lookupScalar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "lookupScalar",
        "normalized": "a-\u003e[(a,Object a b)]-\u003ec b",
        "package": "data-object",
        "partial": "Scalar",
        "signature": "k-\u003e[(k,Object k v)]-\u003em v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:lookupSequence",
      "description": {
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "k -\u003e [(k, Object k v)] -\u003e m [Object k v]",
        "fct-source": "src/Data-Object.html#lookupSequence",
        "fct-type": "function",
        "title": "lookupSequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "lookupSequence",
        "normalized": "a-\u003e[(a,Object a b)]-\u003ec[Object a b]",
        "package": "data-object",
        "partial": "Sequence",
        "signature": "k-\u003e[(k,Object k v)]-\u003em[Object k v]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:mapKeys",
      "description": {
        "fct-descr": "\u003cp\u003eApply some conversion to the keys of an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e, leaving the values\n unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "(keyIn -\u003e keyOut) -\u003e Object keyIn val -\u003e Object keyOut val",
        "fct-source": "src/Data-Object.html#mapKeys",
        "fct-type": "function",
        "title": "mapKeys"
      },
      "index": {
        "description": "Apply some conversion to the keys of an Object leaving the values unchanged",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "mapKeys",
        "normalized": "(a-\u003eb)-\u003eObject a c-\u003eObject b c",
        "package": "data-object",
        "partial": "Keys",
        "signature": "(keyIn-\u003ekeyOut)-\u003eObject keyIn val-\u003eObject keyOut val"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:mapKeysValues",
      "description": {
        "fct-descr": "\u003cp\u003eApply a conversion to both the keys and values of an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "(keyIn -\u003e keyOut) -\u003e (valIn -\u003e valOut) -\u003e Object keyIn valIn -\u003e Object keyOut valOut",
        "fct-source": "src/Data-Object.html#mapKeysValues",
        "fct-type": "function",
        "title": "mapKeysValues"
      },
      "index": {
        "description": "Apply conversion to both the keys and values of an Object",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "mapKeysValues",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eObject a c-\u003eObject b d",
        "package": "data-object",
        "partial": "Keys Values",
        "signature": "(keyIn-\u003ekeyOut)-\u003e(valIn-\u003evalOut)-\u003eObject keyIn valIn-\u003eObject keyOut valOut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:mapKeysValuesA",
      "description": {
        "fct-descr": "\u003cp\u003eApply an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e conversion to both the keys and values of an\n \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "(keyIn -\u003e f keyOut) -\u003e (valIn -\u003e f valOut) -\u003e Object keyIn valIn -\u003e f (Object keyOut valOut)",
        "fct-source": "src/Data-Object.html#mapKeysValuesA",
        "fct-type": "function",
        "title": "mapKeysValuesA"
      },
      "index": {
        "description": "Apply an Applicative conversion to both the keys and values of an Object",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "mapKeysValuesA",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003eObject a d-\u003eb(Object c e)",
        "package": "data-object",
        "partial": "Keys Values",
        "signature": "(keyIn-\u003ef keyOut)-\u003e(valIn-\u003ef valOut)-\u003eObject keyIn valIn-\u003ef(Object keyOut valOut)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:mapKeysValuesM",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003emapKeysValuesA\u003c/a\u003e\u003c/code\u003e, but using a \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e since some people are\n more comfortable with \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es and not all \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003es are \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "(keyIn -\u003e m keyOut) -\u003e (valIn -\u003e m valOut) -\u003e Object keyIn valIn -\u003e m (Object keyOut valOut)",
        "fct-source": "src/Data-Object.html#mapKeysValuesM",
        "fct-type": "function",
        "title": "mapKeysValuesM"
      },
      "index": {
        "description": "The same as mapKeysValuesA but using Monad since some people are more comfortable with Monad and not all Monad are Applicative",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "mapKeysValuesM",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003eObject a d-\u003eb(Object c e)",
        "package": "data-object",
        "partial": "Keys Values",
        "signature": "(keyIn-\u003em keyOut)-\u003e(valIn-\u003em valOut)-\u003eObject keyIn valIn-\u003em(Object keyOut valOut)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-object/docs/Data-Object.html#v:mapValues",
      "description": {
        "fct-descr": "\u003cp\u003eApply some conversion to the values of an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e, leaving the keys\n unchanged. This is equivalent to \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Object",
        "fct-package": "data-object",
        "fct-signature": "(valIn -\u003e valOut) -\u003e Object key valIn -\u003e Object key valOut",
        "fct-source": "src/Data-Object.html#mapValues",
        "fct-type": "function",
        "title": "mapValues"
      },
      "index": {
        "description": "Apply some conversion to the values of an Object leaving the keys unchanged This is equivalent to fmap",
        "hierarchy": "Data Object",
        "module": "Data.Object",
        "name": "mapValues",
        "normalized": "(a-\u003eb)-\u003eObject c a-\u003eObject c b",
        "package": "data-object",
        "partial": "Values",
        "signature": "(valIn-\u003evalOut)-\u003eObject key valIn-\u003eObject key valOut"
      }
    }
  }
]