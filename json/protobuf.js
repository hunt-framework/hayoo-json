[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "module",
        "fct-source": "src/Data-ProtocolBuffers-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "protobuf",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#t:Always",
      "description": {
        "fct-descr": "\u003cp\u003eTo provide consistent instances for serialization a \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e is needed to\n make \u003ccode\u003e\u003ca\u003eRequired\u003c/a\u003e\u003c/code\u003e fields have the same shape as \u003ccode\u003e\u003ca\u003eOptional\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRepeated\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePacked\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "newtype",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Always",
        "fct-type": "newtype",
        "title": "Always"
      },
      "index": {
        "description": "To provide consistent instances for serialization Traversable Functor is needed to make Required fields have the same shape as Optional Repeated and Packed This is the Identity Functor with Show instance",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Always",
        "normalized": "",
        "package": "protobuf",
        "partial": "Always",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#t:DecodeWire",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "class",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#DecodeWire",
        "fct-type": "class",
        "title": "DecodeWire"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "DecodeWire",
        "normalized": "",
        "package": "protobuf",
        "partial": "Decode Wire",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#t:EncodeWire",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "class",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#EncodeWire",
        "fct-type": "class",
        "title": "EncodeWire"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "EncodeWire",
        "normalized": "",
        "package": "protobuf",
        "partial": "Encode Wire",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#t:Enumeration",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEnumeration\u003c/a\u003e\u003c/code\u003e fields use \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e when encoding and decoding messages.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "newtype",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Enumeration",
        "fct-type": "newtype",
        "title": "Enumeration"
      },
      "index": {
        "description": "Enumeration fields use fromEnum and toEnum when encoding and decoding messages",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Enumeration",
        "normalized": "",
        "package": "protobuf",
        "partial": "Enumeration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eFields are merely a way to hold a field tag along with its type, this shouldn't normally be referenced directly.\n\u003c/p\u003e\u003cp\u003eThis provides better error messages than older versions which used \u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "newtype",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Field",
        "fct-type": "newtype",
        "title": "Field"
      },
      "index": {
        "description": "Fields are merely way to hold field tag along with its type this shouldn normally be referenced directly This provides better error messages than older versions which used Tagged",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Field",
        "normalized": "",
        "package": "protobuf",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#t:Message",
      "description": {
        "fct-descr": "\u003cp\u003eThe way to embed a message within another message.\n These embedded messages are stored as length-delimited fields.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e\ndata Inner = Inner\n   { innerField :: \u003ccode\u003e\u003ca\u003eRequired\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eD1\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e)\n   } deriving (\u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e)\n\ninstance \u003ccode\u003e\u003ca\u003eEncode\u003c/a\u003e\u003c/code\u003e Inner\ninstance \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e Inner\n\ndata Outer = Outer\n   { outerField :: \u003ccode\u003e\u003ca\u003eRequired\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eD1\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e Inner)\n   } deriving (\u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e)\n\ninstance \u003ccode\u003e\u003ca\u003eEncode\u003c/a\u003e\u003c/code\u003e Outer\ninstance \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e Outer\n\u003c/pre\u003e\u003cp\u003eIt's worth noting that \u003ccode\u003e \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e a \u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e instance. The \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e behavior models\n that of the Protocol Buffers documentation, effectively \u003ccode\u003e\u003ca\u003eLast\u003c/a\u003e\u003c/code\u003e. It's done with a fairly big hammer\n and it isn't possible to override this behavior. This can cause some less-obvious compile errors for\n paramterized \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e types:\n\u003c/p\u003e\u003cpre\u003e\ndata Inner = Inner{inner :: \u003ccode\u003e\u003ca\u003eRequired\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eD2\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e)} deriving (\u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e)\ninstance \u003ccode\u003e\u003ca\u003eEncode\u003c/a\u003e\u003c/code\u003e Inner\ninstance \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e Inner\n\ndata Outer a = Outer{outer :: \u003ccode\u003e\u003ca\u003eRequired\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eD3\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e a)} deriving (\u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e)\ninstance \u003ccode\u003e\u003ca\u003eEncode\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eEncode\u003c/a\u003e\u003c/code\u003e (Outer a)\ninstance \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e (Outer a)\n\u003c/pre\u003e\u003cp\u003eThis fails because \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e needs to know that the message can be merged. The resulting error\n implies that you may want to add a constraint to the internal \u003ccode\u003eGMessageMonoid\u003c/code\u003e class:\n\u003c/p\u003e\u003cpre\u003e\n /tmp/tst.hs:18:10:\n   Could not deduce (protobuf-0.1:\u003ccode\u003eGMessageMonoid\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e a))\n     arising from a use of `protobuf-0.1: \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e .$gdmdecode'\n   from the context (\u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e a)\n     bound by the instance declaration at /tmp/tst.hs:18:10-39\n   Possible fix:\n     add an instance declaration for\n     (protobuf-0.1:\u003ccode\u003eGMessageMonoid\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e a))\n   In the expression:\n     (protobuf-0.1:\u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e.$gdmdecode)\n   In an equation for \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e:\n       decode = (protobuf-0.1:\u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e .$gdmdecode)\n   In the instance declaration for `'Decode' (Outer a)'\n\u003c/pre\u003e\u003cp\u003eThe correct fix is to add the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e constraint for the message:\n\u003c/p\u003e\u003cpre\u003e\n - instance (\u003ccode\u003e\u003ca\u003eEncode\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e (Outer a)\n + instance (\u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e a), \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e (Outer a)\n\u003c/pre\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "newtype",
        "fct-source": "src/Data-ProtocolBuffers-Message.html#Message",
        "fct-type": "newtype",
        "title": "Message"
      },
      "index": {
        "description": "The way to embed message within another message These embedded messages are stored as length-delimited fields For example data Inner Inner innerField Required D1 Value Int64 deriving Generic Show instance Encode Inner instance Decode Inner data Outer Outer outerField Required D1 Message Inner deriving Generic Show instance Encode Outer instance Decode Outer It worth noting that Message is Monoid and NFData instance The Monoid behavior models that of the Protocol Buffers documentation effectively Last It done with fairly big hammer and it isn possible to override this behavior This can cause some less-obvious compile errors for paramterized Message types data Inner Inner inner Required D2 Value Float deriving Generic Show instance Encode Inner instance Decode Inner data Outer Outer outer Required D3 Message deriving Generic Show instance Encode Encode Outer instance Decode Decode Outer This fails because Decode needs to know that the message can be merged The resulting error implies that you may want to add constraint to the internal GMessageMonoid class tmp tst.hs Could not deduce protobuf-0.1 GMessageMonoid Rep arising from use of protobuf-0.1 Decode gdmdecode from the context Decode bound by the instance declaration at tmp tst.hs Possible fix add an instance declaration for protobuf-0.1 GMessageMonoid Rep In the expression protobuf-0.1 Decode gdmdecode In an equation for decode decode protobuf-0.1 Decode gdmdecode In the instance declaration for Decode Outer The correct fix is to add the Monoid constraint for the message instance Encode Decode Outer instance Monoid Message Decode Decode Outer",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Message",
        "normalized": "",
        "package": "protobuf",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#t:OptionalField",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eOptionalField\u003c/a\u003e\u003c/code\u003e is a newtype wrapped used to break overlapping instances\n for encoding and decoding values\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "newtype",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#OptionalField",
        "fct-type": "newtype",
        "title": "OptionalField"
      },
      "index": {
        "description": "OptionalField is newtype wrapped used to break overlapping instances for encoding and decoding values",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "OptionalField",
        "normalized": "",
        "package": "protobuf",
        "partial": "Optional Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#t:PackedField",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e used to select packed sequence encoding/decoding.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "newtype",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#PackedField",
        "fct-type": "newtype",
        "title": "PackedField"
      },
      "index": {
        "description": "Traversable Functor used to select packed sequence encoding decoding",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "PackedField",
        "normalized": "",
        "package": "protobuf",
        "partial": "Packed Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#t:PackedList",
      "description": {
        "fct-descr": "\u003cp\u003eA list that is stored in a packed format.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "newtype",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#PackedList",
        "fct-type": "newtype",
        "title": "PackedList"
      },
      "index": {
        "description": "list that is stored in packed format",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "PackedList",
        "normalized": "",
        "package": "protobuf",
        "partial": "Packed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#t:RepeatedField",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRepeatedField\u003c/a\u003e\u003c/code\u003e is a newtype wrapped used to break overlapping instances\n for encoding and decoding values\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "newtype",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#RepeatedField",
        "fct-type": "newtype",
        "title": "RepeatedField"
      },
      "index": {
        "description": "RepeatedField is newtype wrapped used to break overlapping instances for encoding and decoding values",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "RepeatedField",
        "normalized": "",
        "package": "protobuf",
        "partial": "Repeated Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#t:RequiredField",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRequiredField\u003c/a\u003e\u003c/code\u003e is a newtype wrapped used to break overlapping instances\n for encoding and decoding values\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "newtype",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#RequiredField",
        "fct-type": "newtype",
        "title": "RequiredField"
      },
      "index": {
        "description": "RequiredField is newtype wrapped used to break overlapping instances for encoding and decoding values",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "RequiredField",
        "normalized": "",
        "package": "protobuf",
        "partial": "Required Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#t:Tag",
      "description": {
        "fct-descr": "\u003cp\u003eField identifiers\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "type",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#Tag",
        "fct-type": "type",
        "title": "Tag"
      },
      "index": {
        "description": "Field identifiers",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Tag",
        "normalized": "",
        "package": "protobuf",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e selects the normal/typical way for encoding scalar (primitive) values.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "newtype",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Value",
        "fct-type": "newtype",
        "title": "Value"
      },
      "index": {
        "description": "Value selects the normal typical way for encoding scalar primitive values",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Value",
        "normalized": "",
        "package": "protobuf",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#t:WireField",
      "description": {
        "fct-descr": "\u003cp\u003eA representation of the wire format as described in\n \u003ca\u003ehttps://developers.google.com/protocol-buffers/docs/encoding#structure\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "data",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#WireField",
        "fct-type": "data",
        "title": "WireField"
      },
      "index": {
        "description": "representation of the wire format as described in https developers.google.com protocol-buffers docs encoding structure",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "WireField",
        "normalized": "",
        "package": "protobuf",
        "partial": "Wire Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:Always",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "Always",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Always",
        "fct-type": "function",
        "title": "Always"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Always",
        "normalized": "",
        "package": "protobuf",
        "partial": "Always",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:DelimitedField",
      "description": {
        "fct-descr": "\u003cp\u003eFor: string, bytes, embedded messages, packed repeated fields\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "DelimitedField !Tag !ByteString",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#WireField",
        "fct-type": "function",
        "title": "DelimitedField"
      },
      "index": {
        "description": "For string bytes embedded messages packed repeated fields",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "DelimitedField",
        "normalized": "",
        "package": "protobuf",
        "partial": "Delimited Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:EndField",
      "description": {
        "fct-descr": "\u003cp\u003eFor: groups (deprecated)\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "EndField !Tag",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#WireField",
        "fct-type": "function",
        "title": "EndField"
      },
      "index": {
        "description": "For groups deprecated",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "EndField",
        "normalized": "",
        "package": "protobuf",
        "partial": "End Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:Enumeration",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "Enumeration",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Enumeration",
        "fct-type": "function",
        "title": "Enumeration"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Enumeration",
        "normalized": "",
        "package": "protobuf",
        "partial": "Enumeration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:Field",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "Field",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Field",
        "fct-type": "function",
        "title": "Field"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Field",
        "normalized": "",
        "package": "protobuf",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:Fixed32Field",
      "description": {
        "fct-descr": "\u003cp\u003eFor: fixed32, sfixed32, float\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "Fixed32Field !Tag !Word32",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#WireField",
        "fct-type": "function",
        "title": "Fixed32Field"
      },
      "index": {
        "description": "For fixed32 sfixed32 float",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Fixed32Field",
        "normalized": "",
        "package": "protobuf",
        "partial": "Fixed Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:Fixed64Field",
      "description": {
        "fct-descr": "\u003cp\u003eFor: fixed64, sfixed64, double\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "Fixed64Field !Tag !Word64",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#WireField",
        "fct-type": "function",
        "title": "Fixed64Field"
      },
      "index": {
        "description": "For fixed64 sfixed64 double",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Fixed64Field",
        "normalized": "",
        "package": "protobuf",
        "partial": "Fixed Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:Message",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "Message",
        "fct-source": "src/Data-ProtocolBuffers-Message.html#Message",
        "fct-type": "function",
        "title": "Message"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Message",
        "normalized": "",
        "package": "protobuf",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:Optional",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "Optional",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#OptionalField",
        "fct-type": "function",
        "title": "Optional"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Optional",
        "normalized": "",
        "package": "protobuf",
        "partial": "Optional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:PackedField",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "PackedField",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#PackedField",
        "fct-type": "function",
        "title": "PackedField"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "PackedField",
        "normalized": "",
        "package": "protobuf",
        "partial": "Packed Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:PackedList",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "PackedList",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#PackedList",
        "fct-type": "function",
        "title": "PackedList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "PackedList",
        "normalized": "",
        "package": "protobuf",
        "partial": "Packed List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:Repeated",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "Repeated",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#RepeatedField",
        "fct-type": "function",
        "title": "Repeated"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Repeated",
        "normalized": "",
        "package": "protobuf",
        "partial": "Repeated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:Required",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "Required",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#RequiredField",
        "fct-type": "function",
        "title": "Required"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Required",
        "normalized": "",
        "package": "protobuf",
        "partial": "Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:StartField",
      "description": {
        "fct-descr": "\u003cp\u003eFor: groups (deprecated)\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "StartField !Tag",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#WireField",
        "fct-type": "function",
        "title": "StartField"
      },
      "index": {
        "description": "For groups deprecated",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "StartField",
        "normalized": "",
        "package": "protobuf",
        "partial": "Start Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:Value",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "Value",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Value",
        "fct-type": "function",
        "title": "Value"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "Value",
        "normalized": "",
        "package": "protobuf",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:VarintField",
      "description": {
        "fct-descr": "\u003cp\u003eFor: int32, int64, uint32, uint64, sint32, sint64, bool, enum\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "VarintField !Tag !Word64",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#WireField",
        "fct-type": "function",
        "title": "VarintField"
      },
      "index": {
        "description": "For int32 int64 uint32 uint64 sint32 sint64 bool enum",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "VarintField",
        "normalized": "",
        "package": "protobuf",
        "partial": "Varint Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:decodeWire",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "WireField -\u003e Get a",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#decodeWire",
        "fct-type": "method",
        "title": "decodeWire"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "decodeWire",
        "normalized": "WireField-\u003eGet a",
        "package": "protobuf",
        "partial": "Wire",
        "signature": "WireField-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:encodeWire",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "Tag -\u003e a -\u003e Put",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#encodeWire",
        "fct-type": "method",
        "title": "encodeWire"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "encodeWire",
        "normalized": "Tag-\u003ea-\u003ePut",
        "package": "protobuf",
        "partial": "Wire",
        "signature": "Tag-\u003ea-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:getWireField",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "Get WireField",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#getWireField",
        "fct-type": "function",
        "title": "getWireField"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "getWireField",
        "normalized": "",
        "package": "protobuf",
        "partial": "Wire Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:runAlways",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "a",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Always",
        "fct-type": "function",
        "title": "runAlways"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "runAlways",
        "normalized": "",
        "package": "protobuf",
        "partial": "Always",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:runEnumeration",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "a",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Enumeration",
        "fct-type": "function",
        "title": "runEnumeration"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "runEnumeration",
        "normalized": "",
        "package": "protobuf",
        "partial": "Enumeration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:runField",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "a",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Field",
        "fct-type": "function",
        "title": "runField"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "runField",
        "normalized": "",
        "package": "protobuf",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:runMessage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "m",
        "fct-source": "src/Data-ProtocolBuffers-Message.html#Message",
        "fct-type": "function",
        "title": "runMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "runMessage",
        "normalized": "",
        "package": "protobuf",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:runOptional",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "a",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#OptionalField",
        "fct-type": "function",
        "title": "runOptional"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "runOptional",
        "normalized": "",
        "package": "protobuf",
        "partial": "Optional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:runPackedField",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "a",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#PackedField",
        "fct-type": "function",
        "title": "runPackedField"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "runPackedField",
        "normalized": "",
        "package": "protobuf",
        "partial": "Packed Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:runRepeated",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "a",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#RepeatedField",
        "fct-type": "function",
        "title": "runRepeated"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "runRepeated",
        "normalized": "",
        "package": "protobuf",
        "partial": "Repeated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:runRequired",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "a",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#RequiredField",
        "fct-type": "function",
        "title": "runRequired"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "runRequired",
        "normalized": "",
        "package": "protobuf",
        "partial": "Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:runValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "a",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Value",
        "fct-type": "function",
        "title": "runValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "runValue",
        "normalized": "",
        "package": "protobuf",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:unPackedList",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "[a]",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#PackedList",
        "fct-type": "function",
        "title": "unPackedList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "unPackedList",
        "normalized": "[a]",
        "package": "protobuf",
        "partial": "Packed List",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:wireFieldTag",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "WireField -\u003e Tag",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#wireFieldTag",
        "fct-type": "function",
        "title": "wireFieldTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "wireFieldTag",
        "normalized": "WireField-\u003eTag",
        "package": "protobuf",
        "partial": "Field Tag",
        "signature": "WireField-\u003eTag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:zzDecode32",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "Word32 -\u003e Int32",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#zzDecode32",
        "fct-type": "function",
        "title": "zzDecode32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "zzDecode32",
        "normalized": "Word-\u003eInt",
        "package": "protobuf",
        "partial": "Decode",
        "signature": "Word-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:zzDecode64",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "Word64 -\u003e Int64",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#zzDecode64",
        "fct-type": "function",
        "title": "zzDecode64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "zzDecode64",
        "normalized": "Word-\u003eInt",
        "package": "protobuf",
        "partial": "Decode",
        "signature": "Word-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:zzEncode32",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "Int32 -\u003e Word32",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#zzEncode32",
        "fct-type": "function",
        "title": "zzEncode32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "zzEncode32",
        "normalized": "Int-\u003eWord",
        "package": "protobuf",
        "partial": "Encode",
        "signature": "Int-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers-Internal.html#v:zzEncode64",
      "description": {
        "fct-module": "Data.ProtocolBuffers.Internal",
        "fct-package": "protobuf",
        "fct-signature": "Int64 -\u003e Word64",
        "fct-source": "src/Data-ProtocolBuffers-Wire.html#zzEncode64",
        "fct-type": "function",
        "title": "zzEncode64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers Internal",
        "module": "Data.ProtocolBuffers.Internal",
        "name": "zzEncode64",
        "normalized": "Int-\u003eWord",
        "package": "protobuf",
        "partial": "Encode",
        "signature": "Int-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of Protocol Buffers in pure Haskell.\n\u003c/p\u003e\u003cp\u003eExtensive documentation is available at \u003ca\u003ehttps://developers.google.com/protocol-buffers/docs/overview\u003c/a\u003e\n and Google's reference implementation can be found at \u003ca\u003ehttp://code.google.com/p/protobuf/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIt is intended to be used via \u003ca\u003eGHC.Generics\u003c/a\u003e and does not require \u003ccode\u003e .proto \u003c/code\u003e files to function.\n Tools are being developed that will convert a Haskell Protobuf definition into a \u003ccode\u003e .proto \u003c/code\u003e and vise versa.\n\u003c/p\u003e\u003cp\u003eThe \u003ca\u003eData.TypeLevel\u003c/a\u003e dependency is required due to \u003ca\u003ehttp://hackage.haskell.org/trac/ghc/ticket/7459\u003c/a\u003e.\n I believe the partial fix already committed will allow migrating to \u003ca\u003eGHC.TypeLits\u003c/a\u003e once GHC 7.8.1 is released.\n\u003c/p\u003e\u003cp\u003eGiven a message definition:\n\u003c/p\u003e\u003cpre\u003e\n{-# LANGUAGE DeriveGeneric #-}\n\nimport \u003ca\u003eData.Int\u003c/a\u003e\nimport \u003ca\u003eData.ProtocolBuffers\u003c/a\u003e\nimport \u003ca\u003eData.TypeLevel\u003c/a\u003e (\u003ccode\u003e\u003ca\u003eD1\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eD2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eD3\u003c/a\u003e\u003c/code\u003e)\nimport \u003ca\u003eData.Text\u003c/a\u003e\nimport \u003ca\u003eGHC.Generics\u003c/a\u003e (\u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e)\n\ndata Foo = Foo\n   { field1 :: \u003ccode\u003e\u003ca\u003eRequired\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eD1\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e) -- ^ The last field with tag = 1\n   , field2 :: \u003ccode\u003e\u003ca\u003eOptional\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eD2\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e) -- ^ The last field with tag = 2\n   , field3 :: \u003ccode\u003e\u003ca\u003eRepeated\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eD3\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e) -- ^ All fields with tag = 3, ordering is preserved\n   } deriving (\u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e)\n\ninstance \u003ccode\u003e\u003ca\u003eEncode\u003c/a\u003e\u003c/code\u003e Foo\ninstance \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e Foo\n\u003c/pre\u003e\u003cp\u003eIt can then be used for encoding and decoding. The \u003ccode\u003e\u003ca\u003eEncode\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e instances are derived automatically\n using DeriveGeneric and DefaultSignatures as outlined here: \u003ca\u003ehttp://www.haskell.org/haskellwiki/GHC.Generics#More_general_default_methods\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eTo construct a message, use \u003ccode\u003e\u003ca\u003eputField\u003c/a\u003e\u003c/code\u003e to set each field value. \u003ccode\u003e\u003ca\u003eOptional\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRepeated\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePacked\u003c/a\u003e\u003c/code\u003e\n fields can be set to their empty value by using \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e. An example using record syntax for clarity:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet msg = Foo{field1 = putField 42, field2 = mempty, field3 = putField [True, False]}\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eTo serialize a message first convert it into a \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e by way of \u003ccode\u003e\u003ca\u003eencodeMessage\u003c/a\u003e\u003c/code\u003e\n and then to a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e by using \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e. Lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e serialization is done with \u003ccode\u003e\u003ca\u003erunPutLazy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap hex runPut $ encodeMessage msg\n\u003c/code\u003e\u003c/strong\u003e\"082A18011800\"\n\u003c/pre\u003e\u003cp\u003eDecoding is done with the inverse functions: \u003ccode\u003e\u003ca\u003edecodeMessage\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003erunGet\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003erunGetLazy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunGet decodeMessage =\u003c\u003c unhex \"082A18011800\" :: Either String Foo\n\u003c/code\u003e\u003c/strong\u003eRight\n  (Foo\n    { field1 = Field {runField = Required {runRequired = Always {runAlways = Value {runValue = 42}}}}\n    , field2 = Field {runField = Optional {runOptional = Last {getLast = Nothing}}}\n    , field3 = Field {runField = Repeated {runRepeated = [Value {runValue = True},Value {runValue = False}]}}\n    }\n  )\n\u003c/pre\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003egetField\u003c/a\u003e\u003c/code\u003e to read fields from a message:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet Right msg = runGet decodeMessage =\u003c\u003c unhex \"082A18011800\" :: Either String Foo\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetField $ field1 msg\n\u003c/code\u003e\u003c/strong\u003e42\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetField $ field2 msg\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egetField $ field3 msg\n\u003c/code\u003e\u003c/strong\u003e[True,False]\n\u003c/pre\u003e\u003cp\u003eSome Protocol Buffers features are not currently implemented:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Default values for \u003ccode\u003e\u003ca\u003eOptional\u003c/a\u003e\u003c/code\u003e fields\n\u003c/li\u003e\u003cli\u003e Extension fields\n\u003c/li\u003e\u003cli\u003e Storing unknown fields, those without a mapped field tag in message record\n\u003c/li\u003e\u003cli\u003e Tag-delimited Groups, deprecated in lieu of \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "module",
        "fct-source": "src/Data-ProtocolBuffers.html",
        "fct-type": "module",
        "title": "ProtocolBuffers"
      },
      "index": {
        "description": "An implementation of Protocol Buffers in pure Haskell Extensive documentation is available at https developers.google.com protocol-buffers docs overview and Google reference implementation can be found at http code.google.com protobuf It is intended to be used via GHC.Generics and does not require proto files to function Tools are being developed that will convert Haskell Protobuf definition into proto and vise versa The Data.TypeLevel dependency is required due to http hackage.haskell.org trac ghc ticket believe the partial fix already committed will allow migrating to GHC.TypeLits once GHC is released Given message definition LANGUAGE DeriveGeneric import Data.Int import Data.ProtocolBuffers import Data.TypeLevel D1 D2 D3 import Data.Text import GHC.Generics Generic data Foo Foo field1 Required D1 Value Int64 The last field with tag field2 Optional D2 Value Text The last field with tag field3 Repeated D3 Value Bool All fields with tag ordering is preserved deriving Generic Show instance Encode Foo instance Decode Foo It can then be used for encoding and decoding The Encode and Decode instances are derived automatically using DeriveGeneric and DefaultSignatures as outlined here http www.haskell.org haskellwiki GHC.Generics More general default methods To construct message use putField to set each field value Optional Repeated and Packed fields can be set to their empty value by using mempty An example using record syntax for clarity let msg Foo field1 putField field2 mempty field3 putField True False To serialize message first convert it into Put by way of encodeMessage and then to ByteString by using runPut Lazy ByteString serialization is done with runPutLazy fmap hex runPut encodeMessage msg A18011800 Decoding is done with the inverse functions decodeMessage and runGet or runGetLazy runGet decodeMessage unhex A18011800 Either String Foo Right Foo field1 Field runField Required runRequired Always runAlways Value runValue field2 Field runField Optional runOptional Last getLast Nothing field3 Field runField Repeated runRepeated Value runValue True Value runValue False Use getField to read fields from message let Right msg runGet decodeMessage unhex A18011800 Either String Foo getField field1 msg getField field2 msg Nothing getField field3 msg True False Some Protocol Buffers features are not currently implemented Default values for Optional fields Extension fields Storing unknown fields those without mapped field tag in message record Tag-delimited Groups deprecated in lieu of Message",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "ProtocolBuffers",
        "normalized": "",
        "package": "protobuf",
        "partial": "Protocol Buffers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#t:Decode",
      "description": {
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "class",
        "fct-source": "src/Data-ProtocolBuffers-Decode.html#Decode",
        "fct-type": "class",
        "title": "Decode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "Decode",
        "normalized": "",
        "package": "protobuf",
        "partial": "Decode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#t:Encode",
      "description": {
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "class",
        "fct-source": "src/Data-ProtocolBuffers-Encode.html#Encode",
        "fct-type": "class",
        "title": "Encode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "Encode",
        "normalized": "",
        "package": "protobuf",
        "partial": "Encode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#t:Enumeration",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEnumeration\u003c/a\u003e\u003c/code\u003e fields use \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e when encoding and decoding messages.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "data",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Enumeration",
        "fct-type": "data",
        "title": "Enumeration"
      },
      "index": {
        "description": "Enumeration fields use fromEnum and toEnum when encoding and decoding messages",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "Enumeration",
        "normalized": "",
        "package": "protobuf",
        "partial": "Enumeration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eFields are merely a way to hold a field tag along with its type, this shouldn't normally be referenced directly.\n\u003c/p\u003e\u003cp\u003eThis provides better error messages than older versions which used \u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "data",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Field",
        "fct-type": "data",
        "title": "Field"
      },
      "index": {
        "description": "Fields are merely way to hold field tag along with its type this shouldn normally be referenced directly This provides better error messages than older versions which used Tagged",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "Field",
        "normalized": "",
        "package": "protobuf",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#t:Fixed",
      "description": {
        "fct-descr": "\u003cp\u003eFixed integers are stored in little-endian form without additional encoding.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "newtype",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Fixed",
        "fct-type": "newtype",
        "title": "Fixed"
      },
      "index": {
        "description": "Fixed integers are stored in little-endian form without additional encoding",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "Fixed",
        "normalized": "",
        "package": "protobuf",
        "partial": "Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#t:HasField",
      "description": {
        "fct-descr": "\u003cp\u003eFunctions for wrapping and unwrapping record fields.\n When applied they will have types similar to these:\n\u003c/p\u003e\u003cpre\u003e\n\u003ccode\u003e\u003ca\u003egetField\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eRequired\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eD1\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e) -\u003e \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003ccode\u003e\u003ca\u003eputField\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eRequired\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eD1\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e)\n\n\u003ccode\u003e\u003ca\u003egetField\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eOptional\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eD2\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e) -\u003e \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e\n\u003ccode\u003e\u003ca\u003eputField\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eOptional\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eD2\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e)\n\n\u003ccode\u003e\u003ca\u003egetField\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eRepeated\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eD3\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e) -\u003e [\u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e]\n\u003ccode\u003e\u003ca\u003eputField\u003c/a\u003e\u003c/code\u003e :: [\u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e] -\u003e \u003ccode\u003e\u003ca\u003eRepeated\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eD3\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e)\n\n\u003ccode\u003e\u003ca\u003egetField\u003c/a\u003e\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003ePacked\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eD4\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e) -\u003e [\u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e]\n\u003ccode\u003e\u003ca\u003eputField\u003c/a\u003e\u003c/code\u003e :: [\u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e] -\u003e \u003ccode\u003e\u003ca\u003ePacked\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eD4\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "class",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#HasField",
        "fct-type": "class",
        "title": "HasField"
      },
      "index": {
        "description": "Functions for wrapping and unwrapping record fields When applied they will have types similar to these getField Required D1 Value Text Text putField Text Required D1 Value Text getField Optional D2 Value Int32 Maybe Int32 putField Maybe Int32 Optional D2 Value Int32 getField Repeated D3 Value Double Double putField Double Repeated D3 Value Double getField Packed D4 Value Word64 Word64 putField Word64 Packed D4 Value Word64",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "HasField",
        "normalized": "",
        "package": "protobuf",
        "partial": "Has Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#t:Message",
      "description": {
        "fct-descr": "\u003cp\u003eThe way to embed a message within another message.\n These embedded messages are stored as length-delimited fields.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e\ndata Inner = Inner\n   { innerField :: \u003ccode\u003e\u003ca\u003eRequired\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eD1\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e)\n   } deriving (\u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e)\n\ninstance \u003ccode\u003e\u003ca\u003eEncode\u003c/a\u003e\u003c/code\u003e Inner\ninstance \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e Inner\n\ndata Outer = Outer\n   { outerField :: \u003ccode\u003e\u003ca\u003eRequired\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eD1\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e Inner)\n   } deriving (\u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e)\n\ninstance \u003ccode\u003e\u003ca\u003eEncode\u003c/a\u003e\u003c/code\u003e Outer\ninstance \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e Outer\n\u003c/pre\u003e\u003cp\u003eIt's worth noting that \u003ccode\u003e \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e a \u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e instance. The \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e behavior models\n that of the Protocol Buffers documentation, effectively \u003ccode\u003e\u003ca\u003eLast\u003c/a\u003e\u003c/code\u003e. It's done with a fairly big hammer\n and it isn't possible to override this behavior. This can cause some less-obvious compile errors for\n paramterized \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e types:\n\u003c/p\u003e\u003cpre\u003e\ndata Inner = Inner{inner :: \u003ccode\u003e\u003ca\u003eRequired\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eD2\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e)} deriving (\u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e)\ninstance \u003ccode\u003e\u003ca\u003eEncode\u003c/a\u003e\u003c/code\u003e Inner\ninstance \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e Inner\n\ndata Outer a = Outer{outer :: \u003ccode\u003e\u003ca\u003eRequired\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eD3\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e a)} deriving (\u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e)\ninstance \u003ccode\u003e\u003ca\u003eEncode\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eEncode\u003c/a\u003e\u003c/code\u003e (Outer a)\ninstance \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e (Outer a)\n\u003c/pre\u003e\u003cp\u003eThis fails because \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e needs to know that the message can be merged. The resulting error\n implies that you may want to add a constraint to the internal \u003ccode\u003eGMessageMonoid\u003c/code\u003e class:\n\u003c/p\u003e\u003cpre\u003e\n /tmp/tst.hs:18:10:\n   Could not deduce (protobuf-0.1:\u003ccode\u003eGMessageMonoid\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e a))\n     arising from a use of `protobuf-0.1: \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e .$gdmdecode'\n   from the context (\u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e a)\n     bound by the instance declaration at /tmp/tst.hs:18:10-39\n   Possible fix:\n     add an instance declaration for\n     (protobuf-0.1:\u003ccode\u003eGMessageMonoid\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eRep\u003c/a\u003e\u003c/code\u003e a))\n   In the expression:\n     (protobuf-0.1:\u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e.$gdmdecode)\n   In an equation for \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e:\n       decode = (protobuf-0.1:\u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e .$gdmdecode)\n   In the instance declaration for `'Decode' (Outer a)'\n\u003c/pre\u003e\u003cp\u003eThe correct fix is to add the \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e constraint for the message:\n\u003c/p\u003e\u003cpre\u003e\n - instance (\u003ccode\u003e\u003ca\u003eEncode\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e (Outer a)\n + instance (\u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e a), \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e a) =\u003e \u003ccode\u003e\u003ca\u003eDecode\u003c/a\u003e\u003c/code\u003e (Outer a)\n\u003c/pre\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "data",
        "fct-source": "src/Data-ProtocolBuffers-Message.html#Message",
        "fct-type": "data",
        "title": "Message"
      },
      "index": {
        "description": "The way to embed message within another message These embedded messages are stored as length-delimited fields For example data Inner Inner innerField Required D1 Value Int64 deriving Generic Show instance Encode Inner instance Decode Inner data Outer Outer outerField Required D1 Message Inner deriving Generic Show instance Encode Outer instance Decode Outer It worth noting that Message is Monoid and NFData instance The Monoid behavior models that of the Protocol Buffers documentation effectively Last It done with fairly big hammer and it isn possible to override this behavior This can cause some less-obvious compile errors for paramterized Message types data Inner Inner inner Required D2 Value Float deriving Generic Show instance Encode Inner instance Decode Inner data Outer Outer outer Required D3 Message deriving Generic Show instance Encode Encode Outer instance Decode Decode Outer This fails because Decode needs to know that the message can be merged The resulting error implies that you may want to add constraint to the internal GMessageMonoid class tmp tst.hs Could not deduce protobuf-0.1 GMessageMonoid Rep arising from use of protobuf-0.1 Decode gdmdecode from the context Decode bound by the instance declaration at tmp tst.hs Possible fix add an instance declaration for protobuf-0.1 GMessageMonoid Rep In the expression protobuf-0.1 Decode gdmdecode In an equation for decode decode protobuf-0.1 Decode gdmdecode In the instance declaration for Decode Outer The correct fix is to add the Monoid constraint for the message instance Encode Decode Outer instance Monoid Message Decode Decode Outer",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "Message",
        "normalized": "",
        "package": "protobuf",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#t:Optional",
      "description": {
        "fct-descr": "\u003cp\u003eOptional fields. Values that are not found will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "Optional",
        "fct-type": "function",
        "title": "Optional"
      },
      "index": {
        "description": "Optional fields Values that are not found will return Nothing",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "Optional",
        "normalized": "",
        "package": "protobuf",
        "partial": "Optional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#t:Packed",
      "description": {
        "fct-descr": "\u003cp\u003ePacked values.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "type",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Packed",
        "fct-type": "type",
        "title": "Packed"
      },
      "index": {
        "description": "Packed values",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "Packed",
        "normalized": "",
        "package": "protobuf",
        "partial": "Packed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#t:Repeated",
      "description": {
        "fct-descr": "\u003cp\u003eLists of values.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "type",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Repeated",
        "fct-type": "type",
        "title": "Repeated"
      },
      "index": {
        "description": "Lists of values",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "Repeated",
        "normalized": "",
        "package": "protobuf",
        "partial": "Repeated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#t:Required",
      "description": {
        "fct-descr": "\u003cp\u003eRequired fields. Parsing will return \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e if a \u003ccode\u003e\u003ca\u003eRequired\u003c/a\u003e\u003c/code\u003e value is not found while decoding.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "Required",
        "fct-type": "function",
        "title": "Required"
      },
      "index": {
        "description": "Required fields Parsing will return empty if Required value is not found while decoding",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "Required",
        "normalized": "",
        "package": "protobuf",
        "partial": "Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#t:Signed",
      "description": {
        "fct-descr": "\u003cp\u003eSigned integers are stored in a zz-encoded form.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "newtype",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Signed",
        "fct-type": "newtype",
        "title": "Signed"
      },
      "index": {
        "description": "Signed integers are stored in zz-encoded form",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "Signed",
        "normalized": "",
        "package": "protobuf",
        "partial": "Signed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e selects the normal/typical way for encoding scalar (primitive) values.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "data",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Value",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "Value selects the normal typical way for encoding scalar primitive values",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "Value",
        "normalized": "",
        "package": "protobuf",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#v:Fixed",
      "description": {
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "Fixed a",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Fixed",
        "fct-type": "function",
        "title": "Fixed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "Fixed",
        "normalized": "",
        "package": "protobuf",
        "partial": "Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#v:Signed",
      "description": {
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "Signed a",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#Signed",
        "fct-type": "function",
        "title": "Signed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "Signed",
        "normalized": "",
        "package": "protobuf",
        "partial": "Signed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#v:decode",
      "description": {
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "HashMap Tag [WireField] -\u003e Get a",
        "fct-source": "src/Data-ProtocolBuffers-Decode.html#decode",
        "fct-type": "method",
        "title": "decode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "decode",
        "normalized": "HashMap Tag[WireField]-\u003eGet a",
        "package": "protobuf",
        "partial": "",
        "signature": "HashMap Tag[WireField]-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#v:decodeLengthPrefixedMessage",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a Protocol Buffers message prefixed with a varint encoded 32-bit integer describing it's length.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "Get a",
        "fct-source": "src/Data-ProtocolBuffers-Decode.html#decodeLengthPrefixedMessage",
        "fct-type": "function",
        "title": "decodeLengthPrefixedMessage"
      },
      "index": {
        "description": "Decode Protocol Buffers message prefixed with varint encoded bit integer describing it length",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "decodeLengthPrefixedMessage",
        "normalized": "",
        "package": "protobuf",
        "partial": "Length Prefixed Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#v:decodeMessage",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a Protocol Buffers message.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "Get a",
        "fct-source": "src/Data-ProtocolBuffers-Decode.html#decodeMessage",
        "fct-type": "function",
        "title": "decodeMessage"
      },
      "index": {
        "description": "Decode Protocol Buffers message",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "decodeMessage",
        "normalized": "",
        "package": "protobuf",
        "partial": "Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#v:encode",
      "description": {
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "a -\u003e Put",
        "fct-source": "src/Data-ProtocolBuffers-Encode.html#encode",
        "fct-type": "method",
        "title": "encode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "encode",
        "normalized": "a-\u003ePut",
        "package": "protobuf",
        "partial": "",
        "signature": "a-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#v:encodeLengthPrefixedMessage",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a Protocol Buffers message prefixed with a varint encoded 32-bit integer describing it's length.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "a -\u003e Put",
        "fct-source": "src/Data-ProtocolBuffers-Encode.html#encodeLengthPrefixedMessage",
        "fct-type": "function",
        "title": "encodeLengthPrefixedMessage"
      },
      "index": {
        "description": "Encode Protocol Buffers message prefixed with varint encoded bit integer describing it length",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "encodeLengthPrefixedMessage",
        "normalized": "a-\u003ePut",
        "package": "protobuf",
        "partial": "Length Prefixed Message",
        "signature": "a-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#v:encodeMessage",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a Protocol Buffers message.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "a -\u003e Put",
        "fct-source": "src/Data-ProtocolBuffers-Encode.html#encodeMessage",
        "fct-type": "function",
        "title": "encodeMessage"
      },
      "index": {
        "description": "Encode Protocol Buffers message",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "encodeMessage",
        "normalized": "a-\u003ePut",
        "package": "protobuf",
        "partial": "Message",
        "signature": "a-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#v:field",
      "description": {
        "fct-descr": "\u003cp\u003eAn isomorphism lens compatible with the lens package\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "(FieldType a -\u003e f (FieldType a)) -\u003e a -\u003e f a",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#field",
        "fct-type": "method",
        "title": "field"
      },
      "index": {
        "description": "An isomorphism lens compatible with the lens package",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "field",
        "normalized": "(FieldType a-\u003eb(FieldType a))-\u003ea-\u003eb a",
        "package": "protobuf",
        "partial": "",
        "signature": "(FieldType a-\u003ef(FieldType a))-\u003ea-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#v:getField",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a value from it's \u003ccode\u003e\u003ca\u003eField\u003c/a\u003e\u003c/code\u003e representation.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "a -\u003e FieldType a",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#getField",
        "fct-type": "method",
        "title": "getField"
      },
      "index": {
        "description": "Extract value from it Field representation",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "getField",
        "normalized": "a-\u003eFieldType a",
        "package": "protobuf",
        "partial": "Field",
        "signature": "a-\u003eFieldType a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protobuf/docs/Data-ProtocolBuffers.html#v:putField",
      "description": {
        "fct-descr": "\u003cp\u003eWrap it back up again.\n\u003c/p\u003e",
        "fct-module": "Data.ProtocolBuffers",
        "fct-package": "protobuf",
        "fct-signature": "FieldType a -\u003e a",
        "fct-source": "src/Data-ProtocolBuffers-Types.html#putField",
        "fct-type": "method",
        "title": "putField"
      },
      "index": {
        "description": "Wrap it back up again",
        "hierarchy": "Data ProtocolBuffers",
        "module": "Data.ProtocolBuffers",
        "name": "putField",
        "normalized": "FieldType a-\u003ea",
        "package": "protobuf",
        "partial": "Field",
        "signature": "FieldType a-\u003ea"
      }
    }
  }
]