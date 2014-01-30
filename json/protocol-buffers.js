[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eText.ProtocolBuffers.Basic\u003c/a\u003e defines or re-exports most of the\n basic field types; \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e come from\n the Prelude instead. This module also defined the \u003ccode\u003e\u003ca\u003eMergeable\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e classes. The \u003ccode\u003eWire\u003c/code\u003e class is not defined here to avoid orphans.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "module",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html",
        "fct-type": "module",
        "title": "Basic"
      },
      "index": {
        "description": "Text.ProtocolBuffers.Basic defines or re-exports most of the basic field types Maybe Bool Double and Float come from the Prelude instead This module also defined the Mergeable and Default classes The Wire class is not defined here to avoid orphans",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "Basic",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Basic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Bool",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "Bool",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:ByteString",
      "description": {
        "fct-descr": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ByteString"
      },
      "index": {
        "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "ByteString",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Default",
      "description": {
        "fct-descr": "\u003cp\u003eThe Default class has the default-default values of types.  See\n \u003ca\u003ehttp://code.google.com/apis/protocolbuffers/docs/proto.html#optional\u003c/a\u003e\n and also note that \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e types have a \u003ccode\u003e\u003ca\u003edefaultValue\u003c/a\u003e\u003c/code\u003e that is the\n first one in the \u003ccode\u003e.proto\u003c/code\u003e file (there is always at least one\n value).  Instances of this for messages hold any default value\n defined in the \u003ccode\u003e.proto\u003c/code\u003e file.  \u003ccode\u003e\u003ca\u003edefaultValue\u003c/a\u003e\u003c/code\u003e is where the\n \u003ccode\u003eMessageAPI\u003c/code\u003e function \u003ccode\u003egetVal\u003c/code\u003e looks when an optional field is not\n set.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "class",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#Default",
        "fct-type": "class",
        "title": "Default"
      },
      "index": {
        "description": "The Default class has the default-default values of types See http code.google.com apis protocolbuffers docs proto.html optional and also note that Enum types have defaultValue that is the first one in the proto file there is always at least one value Instances of this for messages hold any default value defined in the proto file defaultValue is where the MessageAPI function getVal looks when an optional field is not set",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "Default",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Double",
      "description": {
        "fct-descr": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Double"
      },
      "index": {
        "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "Double",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:EnumCode",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEnumCode\u003c/a\u003e\u003c/code\u003e is the Int32 assoicated with a\n EnumValueDescriptorProto and is in the range 0 to 2^31-1.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#EnumCode",
        "fct-type": "newtype",
        "title": "EnumCode"
      },
      "index": {
        "description": "EnumCode is the Int32 assoicated with EnumValueDescriptorProto and is in the range to",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "EnumCode",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Enum Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:FieldId",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e is the field number which can be in the range 1 to\n 2^29-1 but the value from 19000 to 19999 are forbidden (so sayeth\n Google).\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#FieldId",
        "fct-type": "newtype",
        "title": "FieldId"
      },
      "index": {
        "description": "FieldId is the field number which can be in the range to but the value from to are forbidden so sayeth Google",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "FieldId",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Field Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:FieldType",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFieldType\u003c/a\u003e\u003c/code\u003e is the integer associated with the\n  FieldDescriptorProto's Type.  The allowed range is currently 1 to\n  18, as shown below (excerpt from descritor.proto)\n\u003c/p\u003e\u003cpre\u003e    // 0 is reserved for errors.\n    // Order is weird for historical reasons.\n    TYPE_DOUBLE         = 1;\n    TYPE_FLOAT          = 2;\n    TYPE_INT64          = 3;   // Not ZigZag encoded.  Negative numbers\n                               // take 10 bytes.  Use TYPE_SINT64 if negative\n                               // values are likely.\n    TYPE_UINT64         = 4;\n    TYPE_INT32          = 5;   // Not ZigZag encoded.  Negative numbers\n                               // take 10 bytes.  Use TYPE_SINT32 if negative\n                               // values are likely.\n    TYPE_FIXED64        = 6;\n    TYPE_FIXED32        = 7;\n    TYPE_BOOL           = 8;\n    TYPE_STRING         = 9;\n    TYPE_GROUP          = 10;  // Tag-delimited aggregate.\n    TYPE_MESSAGE        = 11;  // Length-delimited aggregate.\n\n    // New in version 2.\n    TYPE_BYTES          = 12;\n    TYPE_UINT32         = 13;\n    TYPE_ENUM           = 14;\n    TYPE_SFIXED32       = 15;\n    TYPE_SFIXED64       = 16;\n    TYPE_SINT32         = 17;  // Uses ZigZag encoding.\n    TYPE_SINT64         = 18;  // Uses ZigZag encoding.\n\u003c/pre\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#FieldType",
        "fct-type": "newtype",
        "title": "FieldType"
      },
      "index": {
        "description": "FieldType is the integer associated with the FieldDescriptorProto Type The allowed range is currently to as shown below excerpt from descritor.proto is reserved for errors Order is weird for historical reasons TYPE DOUBLE TYPE FLOAT TYPE INT64 Not ZigZag encoded Negative numbers take bytes Use TYPE SINT64 if negative values are likely TYPE UINT64 TYPE INT32 Not ZigZag encoded Negative numbers take bytes Use TYPE SINT32 if negative values are likely TYPE FIXED64 TYPE FIXED32 TYPE BOOL TYPE STRING TYPE GROUP Tag-delimited aggregate TYPE MESSAGE Length-delimited aggregate New in version TYPE BYTES TYPE UINT32 TYPE ENUM TYPE SFIXED32 TYPE SFIXED64 TYPE SINT32 Uses ZigZag encoding TYPE SINT64 Uses ZigZag encoding",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "FieldType",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Field Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Float",
      "description": {
        "fct-descr": "\u003cp\u003eSingle-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE single-precision type.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Float"
      },
      "index": {
        "description": "Single-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE single-precision type",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "Float",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Int32",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit signed integer type\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Int32"
      },
      "index": {
        "description": "bit signed integer type",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "Int32",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Int64",
      "description": {
        "fct-descr": "\u003cp\u003e64-bit signed integer type\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Int64"
      },
      "index": {
        "description": "bit signed integer type",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "Int64",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Maybe",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type encapsulates an optional value.  A value of type\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e either contains a value of type \u003ccode\u003ea\u003c/code\u003e (represented as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e), \n or it is empty (represented as \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e).  Using \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is a good way to \n deal with errors or exceptional cases without resorting to drastic\n measures such as \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type is also a monad.  It is a simple kind of error\n monad, where all errors are represented by \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.  A richer\n error monad can be built using the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Maybe"
      },
      "index": {
        "description": "The Maybe type encapsulates an optional value value of type Maybe either contains value of type represented as Just or it is empty represented as Nothing Using Maybe is good way to deal with errors or exceptional cases without resorting to drastic measures such as error The Maybe type is also monad It is simple kind of error monad where all errors are represented by Nothing richer error monad can be built using the Either type",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "Maybe",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Maybe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Mergeable",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMergeable\u003c/a\u003e\u003c/code\u003e class is not a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003emergeEmpty\u003c/code\u003e is not a\n left or right unit like \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.  The default \u003ccode\u003e\u003ca\u003emergeAppend\u003c/a\u003e\u003c/code\u003e is to\n take the second parameter and discard the first one.  The\n \u003ccode\u003e\u003ca\u003emergeConcat\u003c/a\u003e\u003c/code\u003e defaults to \u003ccode\u003efoldl\u003c/code\u003e associativity.\n\u003c/p\u003e\u003cp\u003eNOTE: \u003ccode\u003emergeEmpty\u003c/code\u003e has been removed in protocol buffers version 2.\n Use defaultValue instead.  New strict fields would mean that required\n fields in messages will be automatic errors with \u003ccode\u003emergeEmpty\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "class",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#Mergeable",
        "fct-type": "class",
        "title": "Mergeable"
      },
      "index": {
        "description": "The Mergeable class is not Monoid mergeEmpty is not left or right unit like mempty The default mergeAppend is to take the second parameter and discard the first one The mergeConcat defaults to foldl associativity NOTE mergeEmpty has been removed in protocol buffers version Use defaultValue instead New strict fields would mean that required fields in messages will be automatic errors with mergeEmpty",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "Mergeable",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Mergeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Seq",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral-purpose finite sequences.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Seq"
      },
      "index": {
        "description": "General-purpose finite sequences",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "Seq",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Utf8",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eUtf8\u003c/a\u003e\u003c/code\u003e is used to mark \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values that (should) contain\n valud utf8 encoded strings.  This type is used to represent\n \u003ccode\u003eTYPE_STRING\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#Utf8",
        "fct-type": "newtype",
        "title": "Utf8"
      },
      "index": {
        "description": "Utf8 is used to mark ByteString values that should contain valud utf8 encoded strings This type is used to represent TYPE STRING values",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "Utf8",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Utf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:WireSize",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWireSize\u003c/a\u003e\u003c/code\u003e is the Int64 size type associate with the lazy\n bytestrings used in the \u003ccode\u003ePut\u003c/code\u003e and \u003ccode\u003eGet\u003c/code\u003e monads.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "type",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#WireSize",
        "fct-type": "type",
        "title": "WireSize"
      },
      "index": {
        "description": "WireSize is the Int64 size type associate with the lazy bytestrings used in the Put and Get monads",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "WireSize",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Wire Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:WireTag",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWireTag\u003c/a\u003e\u003c/code\u003e is the 32 bit value with the upper 29 bits being the\n \u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e and the lower 3 bits being the \u003ccode\u003e\u003ca\u003eWireType\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#WireTag",
        "fct-type": "newtype",
        "title": "WireTag"
      },
      "index": {
        "description": "WireTag is the bit value with the upper bits being the FieldId and the lower bits being the WireType",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "WireTag",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Wire Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:WireType",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWireType\u003c/a\u003e\u003c/code\u003e is the 3 bit wire encoding value, and is currently in\n the range 0 to 5, leaving 6 and 7 currently invalid.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 0 \u003cem\u003eVarint\u003c/em\u003e : int32, int64, uint32, uint64, sint32, sint64, bool, enum\n\u003c/li\u003e\u003cli\u003e 1 \u003cem\u003e64-bit\u003c/em\u003e : fixed64, sfixed64, double\n\u003c/li\u003e\u003cli\u003e 2 \u003cem\u003eLength-delimited\u003c/em\u003e : string, bytes, embedded messages\n\u003c/li\u003e\u003cli\u003e 3 \u003cem\u003eStart group\u003c/em\u003e : groups (deprecated)\n\u003c/li\u003e\u003cli\u003e 4 \u003cem\u003eEnd group\u003c/em\u003e : groups (deprecated)\n\u003c/li\u003e\u003cli\u003e 5 \u003cem\u003e32-bit\u003c/em\u003e : fixed32, sfixed32, float\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#WireType",
        "fct-type": "newtype",
        "title": "WireType"
      },
      "index": {
        "description": "WireType is the bit wire encoding value and is currently in the range to leaving and currently invalid Varint int32 int64 uint32 uint64 sint32 sint64 bool enum bit fixed64 sfixed64 double Length-delimited string bytes embedded messages Start group groups deprecated End group groups deprecated bit fixed32 sfixed32 float",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "WireType",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Wire Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Word32",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word32"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "Word32",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Word64",
      "description": {
        "fct-descr": "\u003cp\u003e64-bit unsigned integer type\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Word64"
      },
      "index": {
        "description": "bit unsigned integer type",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "Word64",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:EnumCode",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "EnumCode",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#EnumCode",
        "fct-type": "function",
        "title": "EnumCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "EnumCode",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Enum Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:FieldId",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldId",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#FieldId",
        "fct-type": "function",
        "title": "FieldId"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "FieldId",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Field Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:FieldType",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldType",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#FieldType",
        "fct-type": "function",
        "title": "FieldType"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "FieldType",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Field Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:Utf8",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "Utf8 ByteString",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#Utf8",
        "fct-type": "function",
        "title": "Utf8"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "Utf8",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Utf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:WireTag",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "WireTag",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#WireTag",
        "fct-type": "function",
        "title": "WireTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "WireTag",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Wire Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:WireType",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "WireType",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#WireType",
        "fct-type": "function",
        "title": "WireType"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "WireType",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Wire Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:defaultValue",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edefaultValue\u003c/a\u003e\u003c/code\u003e is never undefined or an error to evalute.\n This makes it much more useful compared to \u003ccode\u003emergeEmpty\u003c/code\u003e. In a\n default message all Optional field values are set to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n and Repeated field values are empty.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "a",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#defaultValue",
        "fct-type": "method",
        "title": "defaultValue"
      },
      "index": {
        "description": "The defaultValue is never undefined or an error to evalute This makes it much more useful compared to mergeEmpty In default message all Optional field values are set to Nothing and Repeated field values are empty",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "defaultValue",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:getEnumCode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "Int32",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#EnumCode",
        "fct-type": "function",
        "title": "getEnumCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "getEnumCode",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Enum Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:getFieldId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "Int32",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#FieldId",
        "fct-type": "function",
        "title": "getFieldId"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "getFieldId",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Field Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:getFieldType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "Int",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#FieldType",
        "fct-type": "function",
        "title": "getFieldType"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "getFieldType",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Field Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:getWireTag",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "Word32",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#WireTag",
        "fct-type": "function",
        "title": "getWireTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "getWireTag",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Wire Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:getWireType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "Word32",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#WireType",
        "fct-type": "function",
        "title": "getWireType"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "getWireType",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Wire Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:isValidUTF8",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "ByteString -\u003e Maybe Int",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#isValidUTF8",
        "fct-type": "function",
        "title": "isValidUTF8"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "isValidUTF8",
        "normalized": "ByteString-\u003eMaybe Int",
        "package": "protocol-buffers",
        "partial": "Valid UTF",
        "signature": "ByteString-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:mergeAppend",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emergeAppend\u003c/a\u003e\u003c/code\u003e is the right-biased merge of two values.  A\n message (or group) is merged recursively.  Required field are\n always taken from the second message. Optional field values are\n taken from the most defined message or the second message if\n both are set.  Repeated fields have the sequences concatenated.\n Note that strings and bytes are NOT concatenated.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#mergeAppend",
        "fct-type": "method",
        "title": "mergeAppend"
      },
      "index": {
        "description": "mergeAppend is the right-biased merge of two values message or group is merged recursively Required field are always taken from the second message Optional field values are taken from the most defined message or the second message if both are set Repeated fields have the sequences concatenated Note that strings and bytes are NOT concatenated",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "mergeAppend",
        "normalized": "a-\u003ea-\u003ea",
        "package": "protocol-buffers",
        "partial": "Append",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:mergeConcat",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emergeConcat\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e F.foldl mergeAppend defaultValue \u003c/code\u003e and this\n default definition is not overridden in any of the code except\n for the (Seq a) instance.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "t a -\u003e a",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#mergeConcat",
        "fct-type": "method",
        "title": "mergeConcat"
      },
      "index": {
        "description": "mergeConcat is F.foldl mergeAppend defaultValue and this default definition is not overridden in any of the code except for the Seq instance",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "mergeConcat",
        "normalized": "a b-\u003eb",
        "package": "protocol-buffers",
        "partial": "Concat",
        "signature": "t a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:toUtf8",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "ByteString -\u003e Either Int Utf8",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#toUtf8",
        "fct-type": "function",
        "title": "toUtf8"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "toUtf8",
        "normalized": "ByteString-\u003eEither Int Utf",
        "package": "protocol-buffers",
        "partial": "Utf",
        "signature": "ByteString-\u003eEither Int Utf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:uFromString",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "String -\u003e Utf8",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#uFromString",
        "fct-type": "function",
        "title": "uFromString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "uFromString",
        "normalized": "String-\u003eUtf",
        "package": "protocol-buffers",
        "partial": "From String",
        "signature": "String-\u003eUtf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:uToString",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "Utf8 -\u003e String",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#uToString",
        "fct-type": "function",
        "title": "uToString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "uToString",
        "normalized": "Utf-\u003eString",
        "package": "protocol-buffers",
        "partial": "To String",
        "signature": "Utf-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:utf8",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Basic",
        "fct-package": "protocol-buffers",
        "fct-signature": "Utf8 -\u003e ByteString",
        "fct-source": "src/Text-ProtocolBuffers-Basic.html#utf8",
        "fct-type": "function",
        "title": "utf8"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Basic",
        "module": "Text.ProtocolBuffers.Basic",
        "name": "utf8",
        "normalized": "Utf-\u003eByteString",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "Utf-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ca\u003eExtensions\u003c/a\u003e module contributes two main things.  The first\n is the definition and implementation of extensible message\n features.  This means that the \u003ccode\u003e\u003ca\u003eExtField\u003c/a\u003e\u003c/code\u003e data type is exported but\n its constructor is (in an ideal world) hidden.\n\u003c/p\u003e\u003cp\u003eThis first part also includes the keys for the extension fields:\n the \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e data type.  These are typically defined in code generated\n by \u003ccode\u003ehprotoc\u003c/code\u003e from '.proto' file definitions.\n\u003c/p\u003e\u003cp\u003eThe second main part is the \u003ccode\u003e\u003ca\u003eMessageAPI\u003c/a\u003e\u003c/code\u003e class which defines\n \u003ccode\u003e\u003ca\u003egetVal\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eisSet\u003c/a\u003e\u003c/code\u003e.  These allow uniform access to normal and\n extension fields for users.\n\u003c/p\u003e\u003cp\u003eAccess to extension fields is strictly though keys.  There is not\n currently any way to query or change or clear any other extension\n field data.\n\u003c/p\u003e\u003cp\u003eThis module is likely to get broken up into pieces.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "module",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html",
        "fct-type": "module",
        "title": "Extensions"
      },
      "index": {
        "description": "The Extensions module contributes two main things The first is the definition and implementation of extensible message features This means that the ExtField data type is exported but its constructor is in an ideal world hidden This first part also includes the keys for the extension fields the Key data type These are typically defined in code generated by hprotoc from proto file definitions The second main part is the MessageAPI class which defines getVal and isSet These allow uniform access to normal and extension fields for users Access to extension fields is strictly though keys There is not currently any way to query or change or clear any other extension field data This module is likely to get broken up into pieces",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "Extensions",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Extensions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:EP",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#EP",
        "fct-type": "data",
        "title": "EP"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "EP",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "EP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:ExtField",
      "description": {
        "fct-descr": "\u003cp\u003eExtField is a newtype'd map from the numeric FieldId key to the\n ExtFieldValue.  This allows for the needed class instances.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#ExtField",
        "fct-type": "newtype",
        "title": "ExtField"
      },
      "index": {
        "description": "ExtField is newtype map from the numeric FieldId key to the ExtFieldValue This allows for the needed class instances",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "ExtField",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Ext Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:ExtFieldValue",
      "description": {
        "fct-descr": "\u003cp\u003eThe WireType is used to ensure the Seq is homogenous.\n The ByteString is the unparsed input after the tag.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#ExtFieldValue",
        "fct-type": "data",
        "title": "ExtFieldValue"
      },
      "index": {
        "description": "The WireType is used to ensure the Seq is homogenous The ByteString is the unparsed input after the tag",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "ExtFieldValue",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Ext Field Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:ExtKey",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eExtKey\u003c/a\u003e\u003c/code\u003e class has three functions for user of the API:\n \u003ccode\u003e\u003ca\u003eputExt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetExt\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eclearExt\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003ewireGetKey\u003c/a\u003e\u003c/code\u003e is used in\n generated code.\n\u003c/p\u003e\u003cp\u003eThere are two instances of this class, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e for optional message\n fields and \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e for repeated message fields.  This class allows\n for uniform treatment of these two kinds of extension fields.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "class",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#ExtKey",
        "fct-type": "class",
        "title": "ExtKey"
      },
      "index": {
        "description": "The ExtKey class has three functions for user of the API putExt getExt and clearExt The wireGetKey is used in generated code There are two instances of this class Maybe for optional message fields and Seq for repeated message fields This class allows for uniform treatment of these two kinds of extension fields",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "ExtKey",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Ext Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:ExtendMessage",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eExtendMessage\u003c/a\u003e\u003c/code\u003e abstracts the operations of storing and\n retrieving the \u003ccode\u003e\u003ca\u003eExtField\u003c/a\u003e\u003c/code\u003e from the message, and provides the\n reflection needed to know the valid field numbers.\n\u003c/p\u003e\u003cp\u003eThis only used internally.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "class",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#ExtendMessage",
        "fct-type": "class",
        "title": "ExtendMessage"
      },
      "index": {
        "description": "ExtendMessage abstracts the operations of storing and retrieving the ExtField from the message and provides the reflection needed to know the valid field numbers This only used internally",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "ExtendMessage",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Extend Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:GPB",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eGPWitness\u003c/code\u003e GADTs use \u003ccode\u003e\u003ca\u003eGPB\u003c/a\u003e\u003c/code\u003e as a shorthand for many\n classes.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "class",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#GPB",
        "fct-type": "class",
        "title": "GPB"
      },
      "index": {
        "description": "The Key and GPWitness GADTs use GPB as shorthand for many classes",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "GPB",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "GPB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e data type is used with the \u003ccode\u003e\u003ca\u003eExtKey\u003c/a\u003e\u003c/code\u003e class to put, get,\n and clear external fields of messages.  The \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e can also be used\n with the \u003ccode\u003eMessagesAPI\u003c/code\u003e to get a possibly default value and to check\n whether a key has been set in a message.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e type (opaque to the user) has a phantom type of Maybe\n or Seq that corresponds to Optional or Repeated fields. And a\n second phantom type that matches the message type it must be used\n with.  The third type parameter corresonds to the Haskell value\n type.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e is a GADT that puts all the needed class instances into\n scope.  The actual content is the \u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e ( numeric key), the\n \u003ccode\u003e\u003ca\u003eFieldType\u003c/a\u003e\u003c/code\u003e (for sanity checks), and \u003ccode\u003eMaybe v\u003c/code\u003e (a non-standard\n default value).\n\u003c/p\u003e\u003cp\u003eWhen code is generated all of the known keys are taken into account\n in the deserialization from the wire.  Unknown extension fields are\n read as a collection of raw byte sequences.  If a key is then\n presented it will be used to parse the bytes.\n\u003c/p\u003e\u003cp\u003eThere is no guarantee for what happens if two Keys disagree about\n the type of a field; in particular there may be undefined values\n and runtime errors.  The data constructor for \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e has to be\n exported to the generated code, but is not exposed to the user by\n \u003ca\u003eText.ProtocolBuffers\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "The Key data type is used with the ExtKey class to put get and clear external fields of messages The Key can also be used with the MessagesAPI to get possibly default value and to check whether key has been set in message The Key type opaque to the user has phantom type of Maybe or Seq that corresponds to Optional or Repeated fields And second phantom type that matches the message type it must be used with The third type parameter corresonds to the Haskell value type The Key is GADT that puts all the needed class instances into scope The actual content is the FieldId numeric key the FieldType for sanity checks and Maybe non-standard default value When code is generated all of the known keys are taken into account in the deserialization from the wire Unknown extension fields are read as collection of raw byte sequences If key is then presented it will be used to parse the bytes There is no guarantee for what happens if two Keys disagree about the type of field in particular there may be undefined values and runtime errors The data constructor for Key has to be exported to the generated code but is not exposed to the user by Text.ProtocolBuffers",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "Key",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:MessageAPI",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "class",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#MessageAPI",
        "fct-type": "class",
        "title": "MessageAPI"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "MessageAPI",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Message API",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:PackedSeq",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePackedSeq\u003c/a\u003e\u003c/code\u003e is needed to distinguish the packed repeated format from the repeated format.\n This is only used in the phantom type of Key.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#PackedSeq",
        "fct-type": "newtype",
        "title": "PackedSeq"
      },
      "index": {
        "description": "The PackedSeq is needed to distinguish the packed repeated format from the repeated format This is only used in the phantom type of Key",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "PackedSeq",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Packed Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:EP",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "EP !WireType !ByteString",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#EP",
        "fct-type": "function",
        "title": "EP"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "EP",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "EP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:ExtField",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "ExtField (Map FieldId ExtFieldValue)",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#ExtField",
        "fct-type": "function",
        "title": "ExtField"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "ExtField",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Ext Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:ExtFromWire",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "ExtFromWire !(Seq EP)",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#ExtFieldValue",
        "fct-type": "function",
        "title": "ExtFromWire"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "ExtFromWire",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Ext From Wire",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:ExtOptional",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "ExtOptional !FieldType !GPDyn",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#ExtFieldValue",
        "fct-type": "function",
        "title": "ExtOptional"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "ExtOptional",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Ext Optional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:ExtPacked",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "ExtPacked !FieldType !GPDynSeq",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#ExtFieldValue",
        "fct-type": "function",
        "title": "ExtPacked"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "ExtPacked",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Ext Packed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:ExtRepeated",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "ExtRepeated !FieldType !GPDynSeq",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#ExtFieldValue",
        "fct-type": "function",
        "title": "ExtRepeated"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "ExtRepeated",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Ext Repeated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:Key",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldId -\u003e FieldType -\u003e Maybe v -\u003e Key c msg v",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#Key",
        "fct-type": "function",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "Key",
        "normalized": "FieldId-\u003eFieldType-\u003eMaybe a-\u003eKey b c a",
        "package": "protocol-buffers",
        "partial": "Key",
        "signature": "FieldId-\u003eFieldType-\u003eMaybe v-\u003eKey c msg v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:PackedSeq",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "PackedSeq",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#PackedSeq",
        "fct-type": "function",
        "title": "PackedSeq"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "PackedSeq",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Packed Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:clearExt",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "Key c msg v -\u003e msg -\u003e msg",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#clearExt",
        "fct-type": "method",
        "title": "clearExt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "clearExt",
        "normalized": "Key a b c-\u003eb-\u003eb",
        "package": "protocol-buffers",
        "partial": "Ext",
        "signature": "Key c msg v-\u003emsg-\u003emsg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:getExt",
      "description": {
        "fct-descr": "\u003cp\u003eAccess the key in the message.  Optional have type \u003ccode\u003e(Key Maybe\n msg v)\u003c/code\u003e and return type \u003ccode\u003e(Maybe v)\u003c/code\u003e while repeated fields have\n type \u003ccode\u003e(Key Seq msg v)\u003c/code\u003e and return type \u003ccode\u003e(Seq v)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere are a few sources of errors with the lookup of the key:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It may find unparsed bytes from loading the message. \u003ccode\u003e\u003ca\u003egetExt\u003c/a\u003e\u003c/code\u003e\n  will attempt to parse the bytes as the key's value type, and\n  may fail.  The parsing is done with the \u003ccode\u003eparseWireExt\u003c/code\u003e method\n  (which is not exported to user API).\n\u003c/li\u003e\u003cli\u003e The wrong optional-key versus repeated-key type is a failure\n\u003c/li\u003e\u003cli\u003e The wrong type of the value might be found in the map and\n  * cause a failure\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe failures above should only happen if two different keys are\n used with the same field number.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "Key c msg v -\u003e msg -\u003e Either String (c v)",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#getExt",
        "fct-type": "method",
        "title": "getExt"
      },
      "index": {
        "description": "Access the key in the message Optional have type Key Maybe msg and return type Maybe while repeated fields have type Key Seq msg and return type Seq There are few sources of errors with the lookup of the key It may find unparsed bytes from loading the message getExt will attempt to parse the bytes as the key value type and may fail The parsing is done with the parseWireExt method which is not exported to user API The wrong optional-key versus repeated-key type is failure The wrong type of the value might be found in the map and cause failure The failures above should only happen if two different keys are used with the same field number",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "getExt",
        "normalized": "Key a b c-\u003eb-\u003eEither String(a c)",
        "package": "protocol-buffers",
        "partial": "Ext",
        "signature": "Key c msg v-\u003emsg-\u003eEither String(c v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:getExtField",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "msg -\u003e ExtField",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#getExtField",
        "fct-type": "method",
        "title": "getExtField"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "getExtField",
        "normalized": "a-\u003eExtField",
        "package": "protocol-buffers",
        "partial": "Ext Field",
        "signature": "msg-\u003eExtField"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:getKeyDefaultValue",
      "description": {
        "fct-descr": "\u003cp\u003eThis will return the default value for a given \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e, which is\n set in the '.proto' file, or if unset it is the \u003ccode\u003e\u003ca\u003edefaultValue\u003c/a\u003e\u003c/code\u003e of\n that type.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "Key c msg v -\u003e v",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#getKeyDefaultValue",
        "fct-type": "function",
        "title": "getKeyDefaultValue"
      },
      "index": {
        "description": "This will return the default value for given Key which is set in the proto file or if unset it is the defaultValue of that type",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "getKeyDefaultValue",
        "normalized": "Key a b c-\u003ec",
        "package": "protocol-buffers",
        "partial": "Key Default Value",
        "signature": "Key c msg v-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:getKeyFieldId",
      "description": {
        "fct-descr": "\u003cp\u003eThis allows reflection, in this case it gives the numerical\n \u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e of the key, from 1 to 2^29-1 (excluding 19,000 through\n 19,999).\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "Key c msg v -\u003e FieldId",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#getKeyFieldId",
        "fct-type": "function",
        "title": "getKeyFieldId"
      },
      "index": {
        "description": "This allows reflection in this case it gives the numerical FieldId of the key from to excluding through",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "getKeyFieldId",
        "normalized": "Key a b c-\u003eFieldId",
        "package": "protocol-buffers",
        "partial": "Key Field Id",
        "signature": "Key c msg v-\u003eFieldId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:getKeyFieldType",
      "description": {
        "fct-descr": "\u003cp\u003eThis allows reflection, in this case it gives the \u003ccode\u003e\u003ca\u003eFieldType\u003c/a\u003e\u003c/code\u003e\n enumeration value (1 to 18) of the\n \u003ca\u003eText.DescriptorProtos.FieldDescriptorProto.Type\u003c/a\u003e of the field.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "Key c msg v -\u003e FieldType",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#getKeyFieldType",
        "fct-type": "function",
        "title": "getKeyFieldType"
      },
      "index": {
        "description": "This allows reflection in this case it gives the FieldType enumeration value to of the Text.DescriptorProtos.FieldDescriptorProto.Type of the field",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "getKeyFieldType",
        "normalized": "Key a b c-\u003eFieldType",
        "package": "protocol-buffers",
        "partial": "Key Field Type",
        "signature": "Key c msg v-\u003eFieldType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:getVal",
      "description": {
        "fct-descr": "\u003cp\u003eAccess data in a message.  The first argument is always the\n message.  The second argument can be one of 4 categories.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The field name of a required field acts a simple retrieval of\n the data from the message.\n\u003c/li\u003e\u003cli\u003e The field name of an optional field will retreive the data if\n it is set or lookup the default value if it is not set.\n\u003c/li\u003e\u003cli\u003e The field name of a repeated field always retrieves the\n (possibly empty) \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e of values.\n\u003c/li\u003e\u003cli\u003e A Key for an optional or repeated value will act as the field\n name does above, but if there is a type mismatch or parse error\n it will use the defaultValue for optional types and an empty\n sequence for repeated types.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "msg -\u003e a -\u003e b",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#getVal",
        "fct-type": "method",
        "title": "getVal"
      },
      "index": {
        "description": "Access data in message The first argument is always the message The second argument can be one of categories The field name of required field acts simple retrieval of the data from the message The field name of an optional field will retreive the data if it is set or lookup the default value if it is not set The field name of repeated field always retrieves the possibly empty Seq of values Key for an optional or repeated value will act as the field name does above but if there is type mismatch or parse error it will use the defaultValue for optional types and an empty sequence for repeated types",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "getVal",
        "normalized": "a-\u003eb-\u003ec",
        "package": "protocol-buffers",
        "partial": "Val",
        "signature": "msg-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:isSet",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether data is present in the message.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Required fields always return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Optional fields return whether a value is present.\n\u003c/li\u003e\u003cli\u003e Repeated field return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if there are no values, otherwise\n they return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Keys return as optional or repeated, but checks only if the\n field # is present.  This assumes that there are no collisions\n where more that one key refers to the same field number of this\n message type.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "msg -\u003e a -\u003e Bool",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#isSet",
        "fct-type": "method",
        "title": "isSet"
      },
      "index": {
        "description": "Check whether data is present in the message Required fields always return True Optional fields return whether value is present Repeated field return False if there are no values otherwise they return True Keys return as optional or repeated but checks only if the field is present This assumes that there are no collisions where more that one key refers to the same field number of this message type",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "isSet",
        "normalized": "a-\u003eb-\u003eBool",
        "package": "protocol-buffers",
        "partial": "Set",
        "signature": "msg-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:loadExtension",
      "description": {
        "fct-descr": "\u003cp\u003eget a value from the wire into the message's ExtField. This is used by generated code for\n extensions that were not known at compile time.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldId -\u003e WireType -\u003e a -\u003e Get a",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#loadExtension",
        "fct-type": "function",
        "title": "loadExtension"
      },
      "index": {
        "description": "get value from the wire into the message ExtField This is used by generated code for extensions that were not known at compile time",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "loadExtension",
        "normalized": "FieldId-\u003eWireType-\u003ea-\u003eGet a",
        "package": "protocol-buffers",
        "partial": "Extension",
        "signature": "FieldId-\u003eWireType-\u003ea-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:notExtension",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldId -\u003e WireType -\u003e a -\u003e Get a",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#notExtension",
        "fct-type": "function",
        "title": "notExtension"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "notExtension",
        "normalized": "FieldId-\u003eWireType-\u003ea-\u003eGet a",
        "package": "protocol-buffers",
        "partial": "Extension",
        "signature": "FieldId-\u003eWireType-\u003ea-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:putExt",
      "description": {
        "fct-descr": "\u003cp\u003eChange or clear the value of a key in a message. Passing\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e with an optional key or an empty \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e with a repeated\n key clears the value.  This function thus maintains the invariant\n that having a field number in the \u003ccode\u003e\u003ca\u003eExtField\u003c/a\u003e\u003c/code\u003e map means that the\n field is set and not empty.\n\u003c/p\u003e\u003cp\u003eThis should be only way to set the contents of a extension field.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "Key c msg v -\u003e c v -\u003e msg -\u003e msg",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#putExt",
        "fct-type": "method",
        "title": "putExt"
      },
      "index": {
        "description": "Change or clear the value of key in message Passing Nothing with an optional key or an empty Seq with repeated key clears the value This function thus maintains the invariant that having field number in the ExtField map means that the field is set and not empty This should be only way to set the contents of extension field",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "putExt",
        "normalized": "Key a b c-\u003ea c-\u003eb-\u003eb",
        "package": "protocol-buffers",
        "partial": "Ext",
        "signature": "Key c msg v-\u003ec v-\u003emsg-\u003emsg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:putExtField",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "ExtField -\u003e msg -\u003e msg",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#putExtField",
        "fct-type": "method",
        "title": "putExtField"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "putExtField",
        "normalized": "ExtField-\u003ea-\u003ea",
        "package": "protocol-buffers",
        "partial": "Ext Field",
        "signature": "ExtField-\u003emsg-\u003emsg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:unPackedSeq",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "Seq a",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#PackedSeq",
        "fct-type": "function",
        "title": "unPackedSeq"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "unPackedSeq",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Packed Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:validExtRanges",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "msg -\u003e [(FieldId, FieldId)]",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#validExtRanges",
        "fct-type": "method",
        "title": "validExtRanges"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "validExtRanges",
        "normalized": "a-\u003e[(FieldId,FieldId)]",
        "package": "protocol-buffers",
        "partial": "Ext Ranges",
        "signature": "msg-\u003e[(FieldId,FieldId)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:wireGetKey",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "Key c msg v -\u003e msg -\u003e Get msg",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#wireGetKey",
        "fct-type": "method",
        "title": "wireGetKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "wireGetKey",
        "normalized": "Key a b c-\u003eb-\u003eGet b",
        "package": "protocol-buffers",
        "partial": "Get Key",
        "signature": "Key c msg v-\u003emsg-\u003eGet msg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:wireGetKeyToPacked",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "Key PackedSeq msg v -\u003e msg -\u003e Get msg",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#wireGetKeyToPacked",
        "fct-type": "function",
        "title": "wireGetKeyToPacked"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "wireGetKeyToPacked",
        "normalized": "Key PackedSeq a b-\u003ea-\u003eGet a",
        "package": "protocol-buffers",
        "partial": "Get Key To Packed",
        "signature": "Key PackedSeq msg v-\u003emsg-\u003eGet msg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:wireGetKeyToUnPacked",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "Key Seq msg v -\u003e msg -\u003e Get msg",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#wireGetKeyToUnPacked",
        "fct-type": "function",
        "title": "wireGetKeyToUnPacked"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "wireGetKeyToUnPacked",
        "normalized": "Key Seq a b-\u003ea-\u003eGet a",
        "package": "protocol-buffers",
        "partial": "Get Key To Un Packed",
        "signature": "Key Seq msg v-\u003emsg-\u003eGet msg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:wirePutExtField",
      "description": {
        "fct-descr": "\u003cp\u003eThis is used by the generated code. The data is serialized in\n order of increasing field number.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "ExtField -\u003e Put",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#wirePutExtField",
        "fct-type": "function",
        "title": "wirePutExtField"
      },
      "index": {
        "description": "This is used by the generated code The data is serialized in order of increasing field number",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "wirePutExtField",
        "normalized": "ExtField-\u003ePut",
        "package": "protocol-buffers",
        "partial": "Put Ext Field",
        "signature": "ExtField-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:wireSizeExtField",
      "description": {
        "fct-descr": "\u003cp\u003eThis is used by the generated code\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Extensions",
        "fct-package": "protocol-buffers",
        "fct-signature": "ExtField -\u003e WireSize",
        "fct-source": "src/Text-ProtocolBuffers-Extensions.html#wireSizeExtField",
        "fct-type": "function",
        "title": "wireSizeExtField"
      },
      "index": {
        "description": "This is used by the generated code",
        "hierarchy": "Text ProtocolBuffers Extensions",
        "module": "Text.ProtocolBuffers.Extensions",
        "name": "wireSizeExtField",
        "normalized": "ExtField-\u003eWireSize",
        "package": "protocol-buffers",
        "partial": "Size Ext Field",
        "signature": "ExtField-\u003eWireSize"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBy Chris Kuklewicz, drawing heavily from binary and binary-strict,\n but all the bugs are my own.\n\u003c/p\u003e\u003cp\u003eThis file is under the usual BSD3 licence, copyright 2008.\n\u003c/p\u003e\u003cp\u003eModified the monad to be strict for version 2.0.0\n\u003c/p\u003e\u003cp\u003eThis started out as an improvement to\n \u003ca\u003eData.Binary.Strict.IncrementalGet\u003c/a\u003e with slightly better internals.\n The simplified \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunGet\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e trio with the\n \u003ca\u003eData.Binary.Strict.Class.BinaryParser\u003c/a\u003e instance are an _untested_\n upgrade from IncrementalGet.  Especially untested are the\n strictness properties.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e usefully implements Applicative and Monad, MonadError,\n Alternative and MonadPlus.  Unhandled errors are reported along\n with the number of bytes successfully consumed.  Effects of\n \u003ccode\u003esuspend\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eputAvailable\u003c/a\u003e\u003c/code\u003e are visible after\n fail\u003cem\u003ethrowError\u003c/em\u003emzero.\n\u003c/p\u003e\u003cp\u003eEach time the parser reaches the end of the input it will return a\n Partial wrapped continuation which requests a (Maybe\n Lazy.ByteString).  Passing (Just bs) will append bs to the input so\n far and continue processing.  If you pass Nothing to the\n continuation then you are declaring that there will never be more\n input and that the parser should never again return a partial\n contination; it should return failure or finished.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esuspendUntilComplete\u003c/a\u003e\u003c/code\u003e repeatedly uses a partial continuation to\n ask for more input until \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is passed and then it proceeds\n with parsing.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetAvailable\u003c/a\u003e\u003c/code\u003e command returns the lazy byte string the parser\n has remaining before calling \u003ccode\u003esuspend\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eputAvailable\u003c/a\u003e\u003c/code\u003e\n replaces this input and is a bit fancy: it also replaces the input\n at the current offset for all the potential catchError/mplus\n handlers.  This change is _not_ reverted by fail\u003cem\u003ethrowError\u003c/em\u003emzero.\n\u003c/p\u003e\u003cp\u003eThe three \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elookAheadM\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elookAheadE\u003c/a\u003e\u003c/code\u003e functions are\n very similar to the ones in binary's Data.Binary.Get.\n\u003c/p\u003e\u003cp\u003eAdd specialized high-bit-run\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "module",
        "fct-source": "src/Text-ProtocolBuffers-Get.html",
        "fct-type": "module",
        "title": "Get"
      },
      "index": {
        "description": "By Chris Kuklewicz drawing heavily from binary and binary-strict but all the bugs are my own This file is under the usual BSD3 licence copyright Modified the monad to be strict for version This started out as an improvement to Data.Binary.Strict.IncrementalGet with slightly better internals The simplified Get runGet Result trio with the Data.Binary.Strict.Class.BinaryParser instance are an untested upgrade from IncrementalGet Especially untested are the strictness properties Get usefully implements Applicative and Monad MonadError Alternative and MonadPlus Unhandled errors are reported along with the number of bytes successfully consumed Effects of suspend and putAvailable are visible after fail throwError mzero Each time the parser reaches the end of the input it will return Partial wrapped continuation which requests Maybe Lazy.ByteString Passing Just bs will append bs to the input so far and continue processing If you pass Nothing to the continuation then you are declaring that there will never be more input and that the parser should never again return partial contination it should return failure or finished suspendUntilComplete repeatedly uses partial continuation to ask for more input until Nothing is passed and then it proceeds with parsing The getAvailable command returns the lazy byte string the parser has remaining before calling suspend The putAvailable replaces this input and is bit fancy it also replaces the input at the current offset for all the potential catchError mplus handlers This change is not reverted by fail throwError mzero The three lookAhead and lookAheadM and lookAheadE functions are very similar to the ones in binary Data.Binary.Get Add specialized high-bit-run",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "Get",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#t:Get",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#Get",
        "fct-type": "data",
        "title": "Get"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "Get",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#t:Result",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "Result",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:Failed",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Failed !Int64 String",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#Result",
        "fct-type": "function",
        "title": "Failed"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "Failed",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:Finished",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Finished !ByteString !Int64 a",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#Result",
        "fct-type": "function",
        "title": "Finished"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "Finished",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Finished",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:Partial",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Partial (Maybe ByteString -\u003e Result a)",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#Result",
        "fct-type": "function",
        "title": "Partial"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "Partial",
        "normalized": "Partial(Maybe ByteString-\u003eResult a)",
        "package": "protocol-buffers",
        "partial": "Partial",
        "signature": "Partial(Maybe ByteString-\u003eResult a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:bytesRead",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of \u003ccode\u003e\u003ca\u003ebytesRead\u003c/a\u003e\u003c/code\u003e so far.  Initially 0, never negative.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Int64",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#bytesRead",
        "fct-type": "function",
        "title": "bytesRead"
      },
      "index": {
        "description": "Return the number of bytesRead so far Initially never negative",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "bytesRead",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:decode7",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get s",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#decode7",
        "fct-type": "function",
        "title": "decode7"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "decode7",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:decode7size",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Int64",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#decode7size",
        "fct-type": "function",
        "title": "decode7size"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "decode7size",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:decode7unrolled",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get s",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#decode7unrolled",
        "fct-type": "function",
        "title": "decode7unrolled"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "decode7unrolled",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:ensureBytes",
      "description": {
        "fct-descr": "\u003cp\u003echeck that there are at least \u003ccode\u003en\u003c/code\u003e bytes available in the input.\n This will suspend if there is to little data.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Int64 -\u003e Get ()",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#ensureBytes",
        "fct-type": "function",
        "title": "ensureBytes"
      },
      "index": {
        "description": "check that there are at least bytes available in the input This will suspend if there is to little data",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "ensureBytes",
        "normalized": "Int-\u003eGet()",
        "package": "protocol-buffers",
        "partial": "Bytes",
        "signature": "Int-\u003eGet()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getAvailable",
      "description": {
        "fct-descr": "\u003cp\u003eGet the input currently available to the parser.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get ByteString",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#getAvailable",
        "fct-type": "function",
        "title": "getAvailable"
      },
      "index": {
        "description": "Get the input currently available to the parser",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "getAvailable",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Available",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getByteString",
      "description": {
        "fct-descr": "\u003cp\u003ePull \u003ccode\u003en\u003c/code\u003e bytes from the input, as a strict ByteString.  This will\n suspend if there is too little data.  If the result spans multiple\n lazy chunks then the result occupies a freshly allocated strict\n bytestring, otherwise it fits in a single chunk and refers to the\n same immutable memory block as the whole chunk.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Int -\u003e Get ByteString",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#getByteString",
        "fct-type": "function",
        "title": "getByteString"
      },
      "index": {
        "description": "Pull bytes from the input as strict ByteString This will suspend if there is too little data If the result spans multiple lazy chunks then the result occupies freshly allocated strict bytestring otherwise it fits in single chunk and refers to the same immutable memory block as the whole chunk",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "getByteString",
        "normalized": "Int-\u003eGet ByteString",
        "package": "protocol-buffers",
        "partial": "Byte String",
        "signature": "Int-\u003eGet ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003ePull \u003ccode\u003en\u003c/code\u003e bytes from the input, as a lazy ByteString.  This will\n suspend if there is too little data.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Int64 -\u003e Get ByteString",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#getLazyByteString",
        "fct-type": "function",
        "title": "getLazyByteString"
      },
      "index": {
        "description": "Pull bytes from the input as lazy ByteString This will suspend if there is too little data",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "getLazyByteString",
        "normalized": "Int-\u003eGet ByteString",
        "package": "protocol-buffers",
        "partial": "Lazy Byte String",
        "signature": "Int-\u003eGet ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getStorable",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get a",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#getStorable",
        "fct-type": "function",
        "title": "getStorable"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "getStorable",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Storable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord16be",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Word16",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#getWord16be",
        "fct-type": "function",
        "title": "getWord16be"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "getWord16be",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord16host",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Word16",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#getWord16host",
        "fct-type": "function",
        "title": "getWord16host"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "getWord16host",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord16le",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Word16",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#getWord16le",
        "fct-type": "function",
        "title": "getWord16le"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "getWord16le",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord32be",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Word32",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#getWord32be",
        "fct-type": "function",
        "title": "getWord32be"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "getWord32be",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord32host",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Word32",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#getWord32host",
        "fct-type": "function",
        "title": "getWord32host"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "getWord32host",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord32le",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Word32",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#getWord32le",
        "fct-type": "function",
        "title": "getWord32le"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "getWord32le",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord64be",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Word64",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#getWord64be",
        "fct-type": "function",
        "title": "getWord64be"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "getWord64be",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord64host",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Word64",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#getWord64host",
        "fct-type": "function",
        "title": "getWord64host"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "getWord64host",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord64le",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Word64",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#getWord64le",
        "fct-type": "function",
        "title": "getWord64le"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "getWord64le",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord8",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Word8",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#getWord8",
        "fct-type": "function",
        "title": "getWord8"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "getWord8",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWordhost",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Word",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#getWordhost",
        "fct-type": "function",
        "title": "getWordhost"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "getWordhost",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Wordhost",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:highBitRun",
      "description": {
        "fct-descr": "\u003cp\u003eget the longest prefix of the input where the high bit is set as well as following byte.\n This made getVarInt slower.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Int64",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#highBitRun",
        "fct-type": "function",
        "title": "highBitRun"
      },
      "index": {
        "description": "get the longest prefix of the input where the high bit is set as well as following byte This made getVarInt slower",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "highBitRun",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Bit Run",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:isEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eReturn True if the number of bytes \u003ccode\u003e\u003ca\u003eremaining\u003c/a\u003e\u003c/code\u003e is 0.  Any futher\n attempts to read an empty parser will call \u003ccode\u003esuspend\u003c/code\u003e which might\n result in more input to consume.\n\u003c/p\u003e\u003cp\u003eCompare with \u003ccode\u003e\u003ca\u003eisReallyEmpty\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Bool",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "Return True if the number of bytes remaining is Any futher attempts to read an empty parser will call suspend which might result in more input to consume Compare with isReallyEmpty",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "isEmpty",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:isReallyEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eReturn True if the input is exhausted and will never be added to.\n Returns False if there is input left to consume.\n\u003c/p\u003e\u003cp\u003eCompare with \u003ccode\u003e\u003ca\u003eisEmpty\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Bool",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#isReallyEmpty",
        "fct-type": "function",
        "title": "isReallyEmpty"
      },
      "index": {
        "description": "Return True if the input is exhausted and will never be added to Returns False if there is input left to consume Compare with isEmpty",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "isReallyEmpty",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Really Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:lookAhead",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e runs the \u003ccode\u003etodo\u003c/code\u003e action and then rewinds only the\n BinaryParser state.  Any new input from \u003ccode\u003esuspend\u003c/code\u003e or changes from\n \u003ccode\u003e\u003ca\u003eputAvailable\u003c/a\u003e\u003c/code\u003e are kept.  Changes to the user state (MonadState)\n are kept.  The MonadWriter output is retained.\n\u003c/p\u003e\u003cp\u003eIf an error is thrown then the entire monad state is reset to last\n catchError as usual.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get a -\u003e Get a",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#lookAhead",
        "fct-type": "function",
        "title": "lookAhead"
      },
      "index": {
        "description": "lookAhead runs the todo action and then rewinds only the BinaryParser state Any new input from suspend or changes from putAvailable are kept Changes to the user state MonadState are kept The MonadWriter output is retained If an error is thrown then the entire monad state is reset to last catchError as usual",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "lookAhead",
        "normalized": "Get a-\u003eGet a",
        "package": "protocol-buffers",
        "partial": "Ahead",
        "signature": "Get a-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:lookAheadE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elookAheadE\u003c/a\u003e\u003c/code\u003e runs the \u003ccode\u003etodo\u003c/code\u003e action. If the action returns \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e then the \n BinaryParser state is rewound (as in \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e).  If the action return \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e then\n the BinaryParser is not rewound, and lookAheadE acts as an identity.\n\u003c/p\u003e\u003cp\u003eIf an error is thrown then the entire monad state is reset to last\n catchError as usual.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get (Either a b) -\u003e Get (Either a b)",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#lookAheadE",
        "fct-type": "function",
        "title": "lookAheadE"
      },
      "index": {
        "description": "lookAheadE runs the todo action If the action returns Left then the BinaryParser state is rewound as in lookAhead If the action return Right then the BinaryParser is not rewound and lookAheadE acts as an identity If an error is thrown then the entire monad state is reset to last catchError as usual",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "lookAheadE",
        "normalized": "Get(Either a b)-\u003eGet(Either a b)",
        "package": "protocol-buffers",
        "partial": "Ahead",
        "signature": "Get(Either a b)-\u003eGet(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:lookAheadM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elookAheadM\u003c/a\u003e\u003c/code\u003e runs the \u003ccode\u003etodo\u003c/code\u003e action. If the action returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e then the \n BinaryParser state is rewound (as in \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e).  If the action return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e then\n the BinaryParser is not rewound, and lookAheadM acts as an identity.\n\u003c/p\u003e\u003cp\u003eIf an error is thrown then the entire monad state is reset to last\n catchError as usual.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get (Maybe a) -\u003e Get (Maybe a)",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#lookAheadM",
        "fct-type": "function",
        "title": "lookAheadM"
      },
      "index": {
        "description": "lookAheadM runs the todo action If the action returns Nothing then the BinaryParser state is rewound as in lookAhead If the action return Just then the BinaryParser is not rewound and lookAheadM acts as an identity If an error is thrown then the entire monad state is reset to last catchError as usual",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "lookAheadM",
        "normalized": "Get(Maybe a)-\u003eGet(Maybe a)",
        "package": "protocol-buffers",
        "partial": "Ahead",
        "signature": "Get(Maybe a)-\u003eGet(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:putAvailable",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eputAvailable\u003c/a\u003e\u003c/code\u003e replaces the bytestream past the current # of read\n bytes.  This will also affect pending MonadError handler and\n MonadPlus branches.  I think all pending branches have to have\n fewer bytesRead than the current one.  If this is wrong then an\n error will be thrown.\n\u003c/p\u003e\u003cp\u003eWARNING : \u003ccode\u003e\u003ca\u003eputAvailable\u003c/a\u003e\u003c/code\u003e is still untested.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "ByteString -\u003e Get ()",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#putAvailable",
        "fct-type": "function",
        "title": "putAvailable"
      },
      "index": {
        "description": "putAvailable replaces the bytestream past the current of read bytes This will also affect pending MonadError handler and MonadPlus branches think all pending branches have to have fewer bytesRead than the current one If this is wrong then an error will be thrown WARNING putAvailable is still untested",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "putAvailable",
        "normalized": "ByteString-\u003eGet()",
        "package": "protocol-buffers",
        "partial": "Available",
        "signature": "ByteString-\u003eGet()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:remaining",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of bytes \u003ccode\u003e\u003ca\u003eremaining\u003c/a\u003e\u003c/code\u003e before the current input\n runs out and \u003ccode\u003esuspend\u003c/code\u003e might be called.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get Int64",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#remaining",
        "fct-type": "function",
        "title": "remaining"
      },
      "index": {
        "description": "Return the number of bytes remaining before the current input runs out and suspend might be called",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "remaining",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:runGet",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunGet\u003c/a\u003e\u003c/code\u003e is the simple executor\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get a -\u003e ByteString -\u003e Result a",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#runGet",
        "fct-type": "function",
        "title": "runGet"
      },
      "index": {
        "description": "runGet is the simple executor",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "runGet",
        "normalized": "Get a-\u003eByteString-\u003eResult a",
        "package": "protocol-buffers",
        "partial": "Get",
        "signature": "Get a-\u003eByteString-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:runGetAll",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunGetAll\u003c/a\u003e\u003c/code\u003e is the simple executor, and will not ask for any continuation because this lazy bytestring is all the input\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get a -\u003e ByteString -\u003e Result a",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#runGetAll",
        "fct-type": "function",
        "title": "runGetAll"
      },
      "index": {
        "description": "runGetAll is the simple executor and will not ask for any continuation because this lazy bytestring is all the input",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "runGetAll",
        "normalized": "Get a-\u003eByteString-\u003eResult a",
        "package": "protocol-buffers",
        "partial": "Get All",
        "signature": "Get a-\u003eByteString-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:skip",
      "description": {
        "fct-descr": "\u003cp\u003eDiscard the next \u003ccode\u003em\u003c/code\u003e bytes\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Int64 -\u003e Get ()",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#skip",
        "fct-type": "function",
        "title": "skip"
      },
      "index": {
        "description": "Discard the next bytes",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "skip",
        "normalized": "Int-\u003eGet()",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "Int-\u003eGet()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:spanOf",
      "description": {
        "fct-descr": "\u003cp\u003eget the longest prefix of the input where all the bytes satisfy the predicate.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Get ByteString",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#spanOf",
        "fct-type": "function",
        "title": "spanOf"
      },
      "index": {
        "description": "get the longest prefix of the input where all the bytes satisfy the predicate",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "spanOf",
        "normalized": "(Word-\u003eBool)-\u003eGet ByteString",
        "package": "protocol-buffers",
        "partial": "Of",
        "signature": "(Word-\u003eBool)-\u003eGet ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:suspendUntilComplete",
      "description": {
        "fct-descr": "\u003cp\u003eKeep calling \u003ccode\u003esuspend\u003c/code\u003e until Nothing is passed to the \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e\n continuation.  This ensures all the data has been loaded into the\n state of the parser.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Get",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get ()",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#suspendUntilComplete",
        "fct-type": "function",
        "title": "suspendUntilComplete"
      },
      "index": {
        "description": "Keep calling suspend until Nothing is passed to the Partial continuation This ensures all the data has been loaded into the state of the parser",
        "hierarchy": "Text ProtocolBuffers Get",
        "module": "Text.ProtocolBuffers.Get",
        "name": "suspendUntilComplete",
        "normalized": "Get()",
        "package": "protocol-buffers",
        "partial": "Until Complete",
        "signature": "Get()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis provides what is needed for the output of \u003ccode\u003ehprotoc\u003c/code\u003e to\n compile.  This and the Prelude will both be imported qualified as\n P', the prime ensuring no name conflicts are possible.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ProtocolBuffers.Header",
        "fct-package": "protocol-buffers",
        "fct-signature": "module",
        "fct-source": "src/Text-ProtocolBuffers-Header.html",
        "fct-type": "module",
        "title": "Header"
      },
      "index": {
        "description": "This provides what is needed for the output of hprotoc to compile This and the Prelude will both be imported qualified as the prime ensuring no name conflicts are possible",
        "hierarchy": "Text ProtocolBuffers Header",
        "module": "Text.ProtocolBuffers.Header",
        "name": "Header",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:ap",
      "description": {
        "fct-descr": "\u003cp\u003eIn many situations, the \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e operations can be replaced by uses of\n\u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e, which promotes function application. \n\u003c/p\u003e\u003cpre\u003e       return f `ap` x1 `ap` ... `ap` xn\n\u003c/pre\u003e\u003cp\u003eis equivalent to \n\u003c/p\u003e\u003cpre\u003e       liftMn f x1 x2 ... xn\n\u003c/pre\u003e",
        "fct-module": "Text.ProtocolBuffers.Header",
        "fct-package": "protocol-buffers",
        "fct-signature": "m (a -\u003e b) -\u003e m a -\u003e m b",
        "fct-type": "function",
        "title": "ap"
      },
      "index": {
        "description": "In many situations the liftM operations can be replaced by uses of ap which promotes function application return ap x1 ap ap xn is equivalent to liftMn x1 x2 xn",
        "hierarchy": "Text ProtocolBuffers Header",
        "module": "Text.ProtocolBuffers.Header",
        "name": "ap",
        "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "m(a-\u003eb)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:append",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Header",
        "fct-package": "protocol-buffers",
        "fct-signature": "Seq a -\u003e a -\u003e Seq a",
        "fct-source": "src/Text-ProtocolBuffers-Header.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Header",
        "module": "Text.ProtocolBuffers.Header",
        "name": "append",
        "normalized": "Seq a-\u003ea-\u003eSeq a",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "Seq a-\u003ea-\u003eSeq a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:catchError",
      "description": {
        "fct-descr": "\u003cp\u003eA handler function to handle previous errors and return to normal execution.\n    A common idiom is:\n\u003c/p\u003e\u003cpre\u003e do { action1; action2; action3 } `catchError` handler\n\u003c/pre\u003e\u003cp\u003ewhere the \u003ccode\u003eaction\u003c/code\u003e functions can call \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e.\n    Note that \u003ccode\u003ehandler\u003c/code\u003e and the do-block must have the same return type.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Header",
        "fct-package": "protocol-buffers",
        "fct-signature": "forall a.  m a -\u003e (e -\u003e m a) -\u003e m a",
        "fct-type": "function",
        "title": "catchError"
      },
      "index": {
        "description": "handler function to handle previous errors and return to normal execution common idiom is do action1 action2 action3 catchError handler where the action functions can call throwError Note that handler and the do-block must have the same return type",
        "hierarchy": "Text ProtocolBuffers Header",
        "module": "Text.ProtocolBuffers.Header",
        "name": "catchError",
        "normalized": "a b c d-\u003e(e-\u003ec d)-\u003ec d",
        "package": "protocol-buffers",
        "partial": "Error",
        "signature": "forall a. m a-\u003e(e-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:emptyBS",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Header",
        "fct-package": "protocol-buffers",
        "fct-signature": "ByteString",
        "fct-source": "src/Text-ProtocolBuffers-Header.html#emptyBS",
        "fct-type": "function",
        "title": "emptyBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Header",
        "module": "Text.ProtocolBuffers.Header",
        "name": "emptyBS",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "BS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:fromDistinctAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a set from an ascending list of distinct elements in linear time.\n \u003cem\u003eThe precondition (input list is strictly ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Header",
        "fct-package": "protocol-buffers",
        "fct-signature": "[a] -\u003e Set a",
        "fct-type": "function",
        "title": "fromDistinctAscList"
      },
      "index": {
        "description": "Build set from an ascending list of distinct elements in linear time The precondition input list is strictly ascending is not checked",
        "hierarchy": "Text ProtocolBuffers Header",
        "module": "Text.ProtocolBuffers.Header",
        "name": "fromDistinctAscList",
        "normalized": "[a]-\u003eSet a",
        "package": "protocol-buffers",
        "partial": "Distinct Asc List",
        "signature": "[a]-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:fromMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromMaybe\u003c/a\u003e\u003c/code\u003e function takes a default value and and \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n value.  If the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, it returns the default values;\n otherwise, it returns the value contained in the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Header",
        "fct-package": "protocol-buffers",
        "fct-signature": "a -\u003e Maybe a -\u003e a",
        "fct-type": "function",
        "title": "fromMaybe"
      },
      "index": {
        "description": "The fromMaybe function takes default value and and Maybe value If the Maybe is Nothing it returns the default values otherwise it returns the value contained in the Maybe",
        "hierarchy": "Text ProtocolBuffers Header",
        "module": "Text.ProtocolBuffers.Header",
        "name": "fromMaybe",
        "normalized": "a-\u003eMaybe a-\u003ea",
        "package": "protocol-buffers",
        "partial": "Maybe",
        "signature": "a-\u003eMaybe a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the element in the set?\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Header",
        "fct-package": "protocol-buffers",
        "fct-signature": "a -\u003e Set a -\u003e Bool",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "log Is the element in the set",
        "hierarchy": "Text ProtocolBuffers Header",
        "module": "Text.ProtocolBuffers.Header",
        "name": "member",
        "normalized": "a-\u003eSet a-\u003eBool",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "a-\u003eSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:pack",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Header",
        "fct-package": "protocol-buffers",
        "fct-signature": "[Char] -\u003e ByteString",
        "fct-type": "function",
        "title": "pack"
      },
      "index": {
        "description": "Convert String into ByteString",
        "hierarchy": "Text ProtocolBuffers Header",
        "module": "Text.ProtocolBuffers.Header",
        "name": "pack",
        "normalized": "[Char]-\u003eByteString",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "[Char]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:throwError",
      "description": {
        "fct-descr": "\u003cp\u003eIs used within a monadic computation to begin exception processing.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Header",
        "fct-package": "protocol-buffers",
        "fct-signature": "forall a.  e -\u003e m a",
        "fct-type": "function",
        "title": "throwError"
      },
      "index": {
        "description": "Is used within monadic computation to begin exception processing",
        "hierarchy": "Text ProtocolBuffers Header",
        "module": "Text.ProtocolBuffers.Header",
        "name": "throwError",
        "normalized": "a b c-\u003ed e",
        "package": "protocol-buffers",
        "partial": "Error",
        "signature": "forall a. e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules colelct utility routines related to the different\n incarnations of identifiers in the code.  The basic identifier is\n always ASCII, but because of the self generated DescriptorProto\n data structures it is stored in \u003ccode\u003e\u003ca\u003eUtf8\u003c/a\u003e\u003c/code\u003e tagged lazy bytestrings.\n\u003c/p\u003e\u003cp\u003eAn \u003ccode\u003eidentifier\u003c/code\u003e is a non-empty ASCII string made of [a-zA-Z0-9_]\n where the first character is never in [0-9].\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003efield\u003c/code\u003e is a mangled identifer that is a valid Haskell name that\n begins with lower case, and which may have a single quote at the\n end if needed to avoid a reserved word.  These may also start with\n '_', though just a \u003ca\u003e_\u003c/a\u003e is mangled to \u003ca\u003e_'\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA 'module' is a mangled identifier that is a valid Haskell name\n that begins with upper case.  These never have a single quote.  A\n leading '_' is replaced with a leading \u003ca\u003eU'_\u003c/a\u003e to make a valid\n identifier.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "module",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html",
        "fct-type": "module",
        "title": "Identifiers"
      },
      "index": {
        "description": "This modules colelct utility routines related to the different incarnations of identifiers in the code The basic identifier is always ASCII but because of the self generated DescriptorProto data structures it is stored in Utf8 tagged lazy bytestrings An identifier is non-empty ASCII string made of a-zA-Z0-9 where the first character is never in field is mangled identifer that is valid Haskell name that begins with lower case and which may have single quote at the end if needed to avoid reserved word These may also start with though just is mangled to module is mangled identifier that is valid Haskell name that begins with upper case These never have single quote leading is replaced with leading to make valid identifier",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "Identifiers",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Identifiers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:DIName",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e separated identifier which may or may start with a dot.  There\n are never two or more \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003es in a row.  There is always at least one identifier.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#DIName",
        "fct-type": "newtype",
        "title": "DIName"
      },
      "index": {
        "description": "separated identifier which may or may start with dot There are never two or more in row There is always at least one identifier",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "DIName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "DIName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:Dotted",
      "description": {
        "fct-descr": "\u003cp\u003eThis is used to abstract over Utf8 and String.  The important\n entry point is \u003ccode\u003e\u003ca\u003evalidDI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "class",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#Dotted",
        "fct-type": "class",
        "title": "Dotted"
      },
      "index": {
        "description": "This is used to abstract over Utf8 and String The important entry point is validDI",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "Dotted",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Dotted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:FFName",
      "description": {
        "fct-descr": "\u003cp\u003eFull Haskell field name: MNames separated by \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e, ending with a field\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#FFName",
        "fct-type": "newtype",
        "title": "FFName"
      },
      "index": {
        "description": "Full Haskell field name MNames separated by ending with field",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "FFName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "FFName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:FIName",
      "description": {
        "fct-descr": "\u003cp\u003eFully qualified identifier: repeated (\u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e then identifier)\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#FIName",
        "fct-type": "newtype",
        "title": "FIName"
      },
      "index": {
        "description": "Fully qualified identifier repeated then identifier",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "FIName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "FIName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:FMName",
      "description": {
        "fct-descr": "\u003cp\u003eFull Haskell module name: MNames separated by \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e, ending with a module\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#FMName",
        "fct-type": "newtype",
        "title": "FMName"
      },
      "index": {
        "description": "Full Haskell module name MNames separated by ending with module",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "FMName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "FMName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:FName",
      "description": {
        "fct-descr": "\u003cp\u003eContains one field name, non-empty\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#FName",
        "fct-type": "newtype",
        "title": "FName"
      },
      "index": {
        "description": "Contains one field name non-empty",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "FName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "FName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:IName",
      "description": {
        "fct-descr": "\u003cp\u003eContains one identifier name\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#IName",
        "fct-type": "newtype",
        "title": "IName"
      },
      "index": {
        "description": "Contains one identifier name",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "IName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "IName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:MName",
      "description": {
        "fct-descr": "\u003cp\u003eContains one module name, non-empty\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#MName",
        "fct-type": "newtype",
        "title": "MName"
      },
      "index": {
        "description": "Contains one module name non-empty",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "MName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "MName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:Mangle",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emangle\u003c/a\u003e\u003c/code\u003e transformation has instances for several combiantions\n of input and output.  These allow one to construct the Haskell types\n of MName\u003cem\u003eFMName\u003c/em\u003ePMName and FName\u003cem\u003eFFName\u003c/em\u003ePFName out of the protobuf\n types IName\u003cem\u003eDIName\u003c/em\u003eFIName.  Currently, all the Haskell instances\n are for the String base type.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "class",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#Mangle",
        "fct-type": "class",
        "title": "Mangle"
      },
      "index": {
        "description": "The mangle transformation has instances for several combiantions of input and output These allow one to construct the Haskell types of MName FMName PMName and FName FFName PFName out of the protobuf types IName DIName FIName Currently all the Haskell instances are for the String base type",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "Mangle",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Mangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:PFName",
      "description": {
        "fct-descr": "\u003cp\u003eParsed Haskell name ending with FName.  Good constructor to use.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#PFName",
        "fct-type": "data",
        "title": "PFName"
      },
      "index": {
        "description": "Parsed Haskell name ending with FName Good constructor to use",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "PFName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "PFName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:PMName",
      "description": {
        "fct-descr": "\u003cp\u003eParsed Haskell name ending with MName.  Good contructor to use.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#PMName",
        "fct-type": "data",
        "title": "PMName"
      },
      "index": {
        "description": "Parsed Haskell name ending with MName Good contructor to use",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "PMName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "PMName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:DIName",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "DIName",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#DIName",
        "fct-type": "function",
        "title": "DIName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "DIName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "DIName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:FFName",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "FFName",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#FFName",
        "fct-type": "function",
        "title": "FFName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "FFName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "FFName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:FIName",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "FIName",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#FIName",
        "fct-type": "function",
        "title": "FIName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "FIName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "FIName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:FMName",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "FMName",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#FMName",
        "fct-type": "function",
        "title": "FMName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "FMName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "FMName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:FName",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "FName",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#FName",
        "fct-type": "function",
        "title": "FName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "FName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "FName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:IName",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "IName",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#IName",
        "fct-type": "function",
        "title": "IName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "IName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "IName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:MName",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "MName",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#MName",
        "fct-type": "function",
        "title": "MName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "MName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "MName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:PFName",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "PFName [MName a] (FName a)",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#PFName",
        "fct-type": "function",
        "title": "PFName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "PFName",
        "normalized": "PFName[MName a](FName a)",
        "package": "protocol-buffers",
        "partial": "PFName",
        "signature": "PFName[MName a](FName a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:PMName",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "PMName [MName a] (MName a)",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#PMName",
        "fct-type": "function",
        "title": "PMName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "PMName",
        "normalized": "PMName[MName a](MName a)",
        "package": "protocol-buffers",
        "partial": "PMName",
        "signature": "PMName[MName a](MName a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:checkDIString",
      "description": {
        "fct-descr": "\u003cp\u003eRight (True,_) means the input is a FIName.\n Right (False,_) means the input is a DIName (without leading \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eThis creates useful error messages for the user.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "String -\u003e Either String (Bool, [IName String])",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#checkDIString",
        "fct-type": "function",
        "title": "checkDIString"
      },
      "index": {
        "description": "Right True means the input is FIName Right False means the input is DIName without leading This creates useful error messages for the user",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "checkDIString",
        "normalized": "String-\u003eEither String(Bool,[IName String])",
        "package": "protocol-buffers",
        "partial": "DIString",
        "signature": "String-\u003eEither String(Bool,[IName String])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:checkDIUtf8",
      "description": {
        "fct-descr": "\u003cp\u003eRight (True,_) means the input is a FIName.\n Right (False,_) means the input is a DIName (without leading \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eThis creates useful error messages for the user.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "Utf8 -\u003e Either String (Bool, [IName Utf8])",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#checkDIUtf8",
        "fct-type": "function",
        "title": "checkDIUtf8"
      },
      "index": {
        "description": "Right True means the input is FIName Right False means the input is DIName without leading This creates useful error messages for the user",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "checkDIUtf8",
        "normalized": "Utf-\u003eEither String(Bool,[IName Utf])",
        "package": "protocol-buffers",
        "partial": "DIUtf",
        "signature": "Utf-\u003eEither String(Bool,[IName Utf])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:cons",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "Char -\u003e a -\u003e a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#cons",
        "fct-type": "method",
        "title": "cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "cons",
        "normalized": "Char-\u003ea-\u003ea",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "Char-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:diName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#DIName",
        "fct-type": "function",
        "title": "diName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "diName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:difi",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edifi\u003c/a\u003e\u003c/code\u003e examines the \u003ccode\u003e\u003ca\u003eDIName\u003c/a\u003e\u003c/code\u003e and prepend a \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e if absent, promoting\n it to a \u003ccode\u003e\u003ca\u003eFIName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "DIName a -\u003e FIName a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#difi",
        "fct-type": "function",
        "title": "difi"
      },
      "index": {
        "description": "difi examines the DIName and prepend if absent promoting it to FIName",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "difi",
        "normalized": "DIName a-\u003eFIName a",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "DIName a-\u003eFIName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:dot",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#dot",
        "fct-type": "method",
        "title": "dot"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "dot",
        "normalized": "a-\u003ea-\u003ea",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:dotFF",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "FMName a -\u003e FFName a -\u003e FFName a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#dotFF",
        "fct-type": "function",
        "title": "dotFF"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "dotFF",
        "normalized": "FMName a-\u003eFFName a-\u003eFFName a",
        "package": "protocol-buffers",
        "partial": "FF",
        "signature": "FMName a-\u003eFFName a-\u003eFFName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:dotFM",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "FMName a -\u003e FMName a -\u003e FMName a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#dotFM",
        "fct-type": "function",
        "title": "dotFM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "dotFM",
        "normalized": "FMName a-\u003eFMName a-\u003eFMName a",
        "package": "protocol-buffers",
        "partial": "FM",
        "signature": "FMName a-\u003eFMName a-\u003eFMName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:fName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#FName",
        "fct-type": "function",
        "title": "fName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "fName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:ffName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#FFName",
        "fct-type": "function",
        "title": "ffName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "ffName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:fiName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#FIName",
        "fct-type": "function",
        "title": "fiName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "fiName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:fmName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#FMName",
        "fct-type": "function",
        "title": "fmName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "fmName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:fqAppend",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "FIName a -\u003e [IName a] -\u003e FIName a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#fqAppend",
        "fct-type": "function",
        "title": "fqAppend"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "fqAppend",
        "normalized": "FIName a-\u003e[IName a]-\u003eFIName a",
        "package": "protocol-buffers",
        "partial": "Append",
        "signature": "FIName a-\u003e[IName a]-\u003eFIName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:fromString",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "String -\u003e Utf8",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#fromString",
        "fct-type": "function",
        "title": "fromString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "fromString",
        "normalized": "String-\u003eUtf",
        "package": "protocol-buffers",
        "partial": "String",
        "signature": "String-\u003eUtf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:iName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#IName",
        "fct-type": "function",
        "title": "iName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "iName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:joinPF",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "PFName a -\u003e FFName a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#joinPF",
        "fct-type": "function",
        "title": "joinPF"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "joinPF",
        "normalized": "PFName a-\u003eFFName a",
        "package": "protocol-buffers",
        "partial": "PF",
        "signature": "PFName a-\u003eFFName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:joinPM",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "PMName a -\u003e FMName a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#joinPM",
        "fct-type": "function",
        "title": "joinPM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "joinPM",
        "normalized": "PMName a-\u003eFMName a",
        "package": "protocol-buffers",
        "partial": "PM",
        "signature": "PMName a-\u003eFMName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:mName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#MName",
        "fct-type": "function",
        "title": "mName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "mName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:mangle",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#mangle",
        "fct-type": "method",
        "title": "mangle"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "mangle",
        "normalized": "a-\u003eb",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:promoteDI",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "IName a -\u003e DIName a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#promoteDI",
        "fct-type": "function",
        "title": "promoteDI"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "promoteDI",
        "normalized": "IName a-\u003eDIName a",
        "package": "protocol-buffers",
        "partial": "DI",
        "signature": "IName a-\u003eDIName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:promoteFF",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "FName a -\u003e FFName a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#promoteFF",
        "fct-type": "function",
        "title": "promoteFF"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "promoteFF",
        "normalized": "FName a-\u003eFFName a",
        "package": "protocol-buffers",
        "partial": "FF",
        "signature": "FName a-\u003eFFName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:promoteFI",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "IName a -\u003e FIName a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#promoteFI",
        "fct-type": "function",
        "title": "promoteFI"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "promoteFI",
        "normalized": "IName a-\u003eFIName a",
        "package": "protocol-buffers",
        "partial": "FI",
        "signature": "IName a-\u003eFIName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:promoteFM",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "MName a -\u003e FMName a",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#promoteFM",
        "fct-type": "function",
        "title": "promoteFM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "promoteFM",
        "normalized": "MName a-\u003eFMName a",
        "package": "protocol-buffers",
        "partial": "FM",
        "signature": "MName a-\u003eFMName a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e returns a list of non-empty \u003ccode\u003ea\u003c/code\u003e with all \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e characters removed\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#split",
        "fct-type": "method",
        "title": "split"
      },
      "index": {
        "description": "split returns list of non-empty with all characters removed",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "split",
        "normalized": "a-\u003e[a]",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:splitDI",
      "description": {
        "fct-descr": "\u003cp\u003eTyped \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "DIName a -\u003e [IName a]",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#splitDI",
        "fct-type": "function",
        "title": "splitDI"
      },
      "index": {
        "description": "Typed split",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "splitDI",
        "normalized": "DIName a-\u003e[IName a]",
        "package": "protocol-buffers",
        "partial": "DI",
        "signature": "DIName a-\u003e[IName a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:splitFI",
      "description": {
        "fct-descr": "\u003cp\u003eTyped \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "FIName a -\u003e [IName a]",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#splitFI",
        "fct-type": "function",
        "title": "splitFI"
      },
      "index": {
        "description": "Typed split",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "splitFI",
        "normalized": "FIName a-\u003e[IName a]",
        "package": "protocol-buffers",
        "partial": "FI",
        "signature": "FIName a-\u003e[IName a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:splitFM",
      "description": {
        "fct-descr": "\u003cp\u003eTyped \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "FMName a -\u003e [MName a]",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#splitFM",
        "fct-type": "function",
        "title": "splitFM"
      },
      "index": {
        "description": "Typed split",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "splitFM",
        "normalized": "FMName a-\u003e[MName a]",
        "package": "protocol-buffers",
        "partial": "FM",
        "signature": "FMName a-\u003e[MName a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:toString",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "Utf8 -\u003e String",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#toString",
        "fct-type": "function",
        "title": "toString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "toString",
        "normalized": "Utf-\u003eString",
        "package": "protocol-buffers",
        "partial": "String",
        "signature": "Utf-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:uncons",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "a -\u003e Maybe (Char, a)",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#uncons",
        "fct-type": "method",
        "title": "uncons"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "uncons",
        "normalized": "a-\u003eMaybe(Char,a)",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "a-\u003eMaybe(Char,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:unull",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "Utf8 -\u003e Bool",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#unull",
        "fct-type": "function",
        "title": "unull"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "unull",
        "normalized": "Utf-\u003eBool",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "Utf-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:validDI",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003evalidDI\u003c/a\u003e\u003c/code\u003e ensures the DIName is \n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "a -\u003e Maybe (DIName a)",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#validDI",
        "fct-type": "method",
        "title": "validDI"
      },
      "index": {
        "description": "validDI ensures the DIName is",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "validDI",
        "normalized": "a-\u003eMaybe(DIName a)",
        "package": "protocol-buffers",
        "partial": "DI",
        "signature": "a-\u003eMaybe(DIName a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:validI",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Identifiers",
        "fct-package": "protocol-buffers",
        "fct-signature": "a -\u003e Maybe (IName a)",
        "fct-source": "src/Text-ProtocolBuffers-Identifiers.html#validI",
        "fct-type": "method",
        "title": "validI"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Identifiers",
        "module": "Text.ProtocolBuffers.Identifiers",
        "name": "validI",
        "normalized": "a-\u003eMaybe(IName a)",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "a-\u003eMaybe(IName a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA strong feature of the protocol-buffers package is that it does\n not contain any structures defined by descriptor.proto!  This\n prevents me hitting any annoying circular dependencies.  The\n structures defined here are included in each module created by\n \u003ccode\u003ehprotoc\u003c/code\u003e.  They are optimized for use in code generation.\n\u003c/p\u003e\u003cp\u003eThese values can be inspected at runtime by the user's code, but I\n have yet to write much documentation.  Luckily the record field\n names are somewhat descriptive.\n\u003c/p\u003e\u003cp\u003eThe other reflection is using the \u003ccode\u003efileDescriptorProto\u003c/code\u003e which\n is put into the top level module created by hprotoc.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "module",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html",
        "fct-type": "module",
        "title": "Reflections"
      },
      "index": {
        "description": "strong feature of the protocol-buffers package is that it does not contain any structures defined by descriptor.proto This prevents me hitting any annoying circular dependencies The structures defined here are included in each module created by hprotoc They are optimized for use in code generation These values can be inspected at runtime by the user code but have yet to write much documentation Luckily the record field names are somewhat descriptive The other reflection is using the fileDescriptorProto which is put into the top level module created by hprotoc",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "Reflections",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Reflections",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:DescriptorInfo",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
        "fct-type": "data",
        "title": "DescriptorInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "DescriptorInfo",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Descriptor Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:EnumInfo",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#EnumInfo",
        "fct-type": "data",
        "title": "EnumInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "EnumInfo",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Enum Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:EnumInfoApp",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "type",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#EnumInfoApp",
        "fct-type": "type",
        "title": "EnumInfoApp"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "EnumInfoApp",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Enum Info App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:FieldInfo",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
        "fct-type": "data",
        "title": "FieldInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "FieldInfo",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Field Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:GetMessageInfo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eGetMessageInfo\u003c/a\u003e\u003c/code\u003e is used in getting messages from the wire.  It\n supplies the \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e of precomposed wire tags that must be found in\n the message as well as a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e of all allowed tags (including known\n extension fields and all required wire tags).\n\u003c/p\u003e\u003cp\u003eExtension fields not in the allowedTags set are still loaded, but\n only as \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e blobs that will have to interpreted later.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#GetMessageInfo",
        "fct-type": "data",
        "title": "GetMessageInfo"
      },
      "index": {
        "description": "GetMessageInfo is used in getting messages from the wire It supplies the Set of precomposed wire tags that must be found in the message as well as Set of all allowed tags including known extension fields and all required wire tags Extension fields not in the allowedTags set are still loaded but only as ByteString blobs that will have to interpreted later",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "GetMessageInfo",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Get Message Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:HsDefault",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eHsDefault\u003c/a\u003e\u003c/code\u003e stores the parsed default from the proto file in a\n form that will make a nice literal in the\n \u003ca\u003eLanguage.Haskell.Exts.Syntax\u003c/a\u003e code generation by \u003ccode\u003ehprotoc\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that Utf8 labeled byte sequences have been stripped to just\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e here as this is sufficient for code generation.\n\u003c/p\u003e\u003cp\u003eOn 25 August 2010 20:12, George van den Driessche \u003ca\u003egeorgevdd@google.com\u003c/a\u003e sent Chris Kuklewicz a\n patch to MakeReflections.parseDefEnum to ensure that HsDef'Enum holds the mangled form of the\n name.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#HsDefault",
        "fct-type": "data",
        "title": "HsDefault"
      },
      "index": {
        "description": "HsDefault stores the parsed default from the proto file in form that will make nice literal in the Language.Haskell.Exts.Syntax code generation by hprotoc Note that Utf8 labeled byte sequences have been stripped to just ByteString here as this is sufficient for code generation On August George van den Driessche georgevdd@google.com sent Chris Kuklewicz patch to MakeReflections.parseDefEnum to ensure that HsDef Enum holds the mangled form of the name",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "HsDefault",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Hs Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:KeyInfo",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "type",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#KeyInfo",
        "fct-type": "type",
        "title": "KeyInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "KeyInfo",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Key Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:ProtoFName",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoFName",
        "fct-type": "data",
        "title": "ProtoFName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "ProtoFName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Proto FName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:ProtoInfo",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
        "fct-type": "data",
        "title": "ProtoInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "ProtoInfo",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Proto Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:ProtoName",
      "description": {
        "fct-descr": "\u003cp\u003eThis is fully qualified name data type for code generation.  The\n \u003ccode\u003e\u003ca\u003ehaskellPrefix\u003c/a\u003e\u003c/code\u003e was possibly specified on the \u003ccode\u003ehprotoc\u003c/code\u003e command\n line.  The \u003ccode\u003e\u003ca\u003eparentModule\u003c/a\u003e\u003c/code\u003e is a combination of the module prefix\n from the '.proto' file and any nested levels of definition.\n\u003c/p\u003e\u003cp\u003eThe name components are likely to have been mangled to ensure the\n \u003ccode\u003e\u003ca\u003ebaseName\u003c/a\u003e\u003c/code\u003e started with an uppercase letter, in \u003ccode\u003e ['A'..'Z'] \u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoName",
        "fct-type": "data",
        "title": "ProtoName"
      },
      "index": {
        "description": "This is fully qualified name data type for code generation The haskellPrefix was possibly specified on the hprotoc command line The parentModule is combination of the module prefix from the proto file and any nested levels of definition The name components are likely to have been mangled to ensure the baseName started with an uppercase letter in",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "ProtoName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Proto Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:ReflectDescriptor",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "class",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ReflectDescriptor",
        "fct-type": "class",
        "title": "ReflectDescriptor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "ReflectDescriptor",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Reflect Descriptor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:ReflectEnum",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "class",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ReflectEnum",
        "fct-type": "class",
        "title": "ReflectEnum"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "ReflectEnum",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Reflect Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:SomeRealFloat",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSomeRealFloat\u003c/a\u003e\u003c/code\u003e projects Double/Float to Rational or a special IEEE type.\n This is needed to track protobuf-2.3.0 which allows nan and inf and -inf default values.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#SomeRealFloat",
        "fct-type": "data",
        "title": "SomeRealFloat"
      },
      "index": {
        "description": "SomeRealFloat projects Double Float to Rational or special IEEE type This is needed to track protobuf-2.3.0 which allows nan and inf and inf default values",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "SomeRealFloat",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Some Real Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:DescriptorInfo",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "DescriptorInfo",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
        "fct-type": "function",
        "title": "DescriptorInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "DescriptorInfo",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Descriptor Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:EnumInfo",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "EnumInfo",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#EnumInfo",
        "fct-type": "function",
        "title": "EnumInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "EnumInfo",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Enum Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:FieldInfo",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldInfo",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
        "fct-type": "function",
        "title": "FieldInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "FieldInfo",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Field Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:GetMessageInfo",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "GetMessageInfo",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#GetMessageInfo",
        "fct-type": "function",
        "title": "GetMessageInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "GetMessageInfo",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Get Message Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:HsDef-39-Bool",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "HsDef'Bool Bool",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#HsDefault",
        "fct-type": "function",
        "title": "HsDef'Bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "HsDef'Bool",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Hs Def' Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:HsDef-39-ByteString",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "HsDef'ByteString ByteString",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#HsDefault",
        "fct-type": "function",
        "title": "HsDef'ByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "HsDef'ByteString",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Hs Def' Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:HsDef-39-Enum",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "HsDef'Enum String",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#HsDefault",
        "fct-type": "function",
        "title": "HsDef'Enum"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "HsDef'Enum",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Hs Def' Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:HsDef-39-Integer",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "HsDef'Integer Integer",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#HsDefault",
        "fct-type": "function",
        "title": "HsDef'Integer"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "HsDef'Integer",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Hs Def' Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:HsDef-39-RealFloat",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "HsDef'RealFloat SomeRealFloat",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#HsDefault",
        "fct-type": "function",
        "title": "HsDef'RealFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "HsDef'RealFloat",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Hs Def' Real Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:ProtoFName",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "ProtoFName",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoFName",
        "fct-type": "function",
        "title": "ProtoFName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "ProtoFName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Proto FName",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:ProtoInfo",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "ProtoInfo",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
        "fct-type": "function",
        "title": "ProtoInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "ProtoInfo",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Proto Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:ProtoName",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "ProtoName",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoName",
        "fct-type": "function",
        "title": "ProtoName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "ProtoName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Proto Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:SRF-39-Rational",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "SRF'Rational Rational",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#SomeRealFloat",
        "fct-type": "function",
        "title": "SRF'Rational"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "SRF'Rational",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "SRF' Rational",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:SRF-39-inf",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "SRF'inf",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#SomeRealFloat",
        "fct-type": "function",
        "title": "SRF'inf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "SRF'inf",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "SRF'inf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:SRF-39-nan",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "SRF'nan",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#SomeRealFloat",
        "fct-type": "function",
        "title": "SRF'nan"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "SRF'nan",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "SRF'nan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:SRF-39-ninf",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "SRF'ninf",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#SomeRealFloat",
        "fct-type": "function",
        "title": "SRF'ninf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "SRF'ninf",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "SRF'ninf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:allowedTags",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Set WireTag",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#GetMessageInfo",
        "fct-type": "function",
        "title": "allowedTags"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "allowedTags",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Tags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:baseName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "MName String",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoName",
        "fct-type": "function",
        "title": "baseName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "baseName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:baseName-39-",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "FName String",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoFName",
        "fct-type": "function",
        "title": "baseName'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "baseName'",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Name'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:canRepeat",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if repeated is the field type\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Bool",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
        "fct-type": "function",
        "title": "canRepeat"
      },
      "index": {
        "description": "True if repeated is the field type",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "canRepeat",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Repeat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:descFilePath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "[FilePath]",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
        "fct-type": "function",
        "title": "descFilePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "descFilePath",
        "normalized": "[FilePath]",
        "package": "protocol-buffers",
        "partial": "File Path",
        "signature": "[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:descName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "ProtoName",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
        "fct-type": "function",
        "title": "descName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "descName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:enumFilePath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "[FilePath]",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#EnumInfo",
        "fct-type": "function",
        "title": "enumFilePath"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "enumFilePath",
        "normalized": "[FilePath]",
        "package": "protocol-buffers",
        "partial": "File Path",
        "signature": "[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:enumName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "ProtoName",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#EnumInfo",
        "fct-type": "function",
        "title": "enumName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "enumName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:enumValues",
      "description": {
        "fct-descr": "\u003cp\u003eThe String is the Haskell name to write into the generated source files\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "[(EnumCode, String)]",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#EnumInfo",
        "fct-type": "function",
        "title": "enumValues"
      },
      "index": {
        "description": "The String is the Haskell name to write into the generated source files",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "enumValues",
        "normalized": "[(EnumCode,String)]",
        "package": "protocol-buffers",
        "partial": "Values",
        "signature": "[(EnumCode,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:enums",
      "description": {
        "fct-descr": "\u003cp\u003eall enums\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "[EnumInfo]",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
        "fct-type": "function",
        "title": "enums"
      },
      "index": {
        "description": "all enums",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "enums",
        "normalized": "[EnumInfo]",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "[EnumInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:extRanges",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "[(FieldId, FieldId)]",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
        "fct-type": "function",
        "title": "extRanges"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "extRanges",
        "normalized": "[(FieldId,FieldId)]",
        "package": "protocol-buffers",
        "partial": "Ranges",
        "signature": "[(FieldId,FieldId)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:extensionKeys",
      "description": {
        "fct-descr": "\u003cp\u003etop level keys\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Seq KeyInfo",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
        "fct-type": "function",
        "title": "extensionKeys"
      },
      "index": {
        "description": "top level keys",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "extensionKeys",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Keys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:fieldName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "ProtoFName",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
        "fct-type": "function",
        "title": "fieldName"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "fieldName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:fieldNumber",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldId",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
        "fct-type": "function",
        "title": "fieldNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "fieldNumber",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:fields",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Seq FieldInfo",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
        "fct-type": "function",
        "title": "fields"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "fields",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:fromRF",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "a -\u003e SomeRealFloat",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#fromRF",
        "fct-type": "function",
        "title": "fromRF"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "fromRF",
        "normalized": "a-\u003eSomeRealFloat",
        "package": "protocol-buffers",
        "partial": "RF",
        "signature": "a-\u003eSomeRealFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:getMessageInfo",
      "description": {
        "fct-descr": "\u003cp\u003eThis is obtained via \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e on the stored \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e output of the \u003ccode\u003e\u003ca\u003eDescriptorInfo\u003c/a\u003e\u003c/code\u003e in\n the module file. It is used in getting messages from the wire.\n\u003c/p\u003e\u003cp\u003eMust not inspect argument\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "m -\u003e GetMessageInfo",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#getMessageInfo",
        "fct-type": "method",
        "title": "getMessageInfo"
      },
      "index": {
        "description": "This is obtained via read on the stored show output of the DescriptorInfo in the module file It is used in getting messages from the wire Must not inspect argument",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "getMessageInfo",
        "normalized": "a-\u003eGetMessageInfo",
        "package": "protocol-buffers",
        "partial": "Message Info",
        "signature": "m-\u003eGetMessageInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:haskellPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell specific prefix to module hierarchy (e.g. Text.Foo)\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "[MName String]",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoName",
        "fct-type": "function",
        "title": "haskellPrefix"
      },
      "index": {
        "description": "Haskell specific prefix to module hierarchy e.g Text.Foo",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "haskellPrefix",
        "normalized": "[MName String]",
        "package": "protocol-buffers",
        "partial": "Prefix",
        "signature": "[MName String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:haskellPrefix-39-",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell specific prefix to module hierarchy (e.g. Text.Foo)\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "[MName String]",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoFName",
        "fct-type": "function",
        "title": "haskellPrefix'"
      },
      "index": {
        "description": "Haskell specific prefix to module hierarchy e.g Text.Foo",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "haskellPrefix'",
        "normalized": "[MName String]",
        "package": "protocol-buffers",
        "partial": "Prefix'",
        "signature": "[MName String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:hsDefault",
      "description": {
        "fct-descr": "\u003cp\u003enice parsed thing\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Maybe HsDefault",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
        "fct-type": "function",
        "title": "hsDefault"
      },
      "index": {
        "description": "nice parsed thing",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "hsDefault",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:hsRawDefault",
      "description": {
        "fct-descr": "\u003cp\u003ecrappy, but not escaped, thing\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Maybe ByteString",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
        "fct-type": "function",
        "title": "hsRawDefault"
      },
      "index": {
        "description": "crappy but not escaped thing",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "hsRawDefault",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Raw Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:isGroup",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Bool",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
        "fct-type": "function",
        "title": "isGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "isGroup",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:isPacked",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Bool",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
        "fct-type": "function",
        "title": "isPacked"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "isPacked",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Packed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:isRequired",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Bool",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
        "fct-type": "function",
        "title": "isRequired"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "isRequired",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:keys",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Seq KeyInfo",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "keys",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:knownKeyMap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Map ProtoName (Seq FieldInfo)",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
        "fct-type": "function",
        "title": "knownKeyMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "knownKeyMap",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Key Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:knownKeys",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Seq FieldInfo",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
        "fct-type": "function",
        "title": "knownKeys"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "knownKeys",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Keys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:lazyFields",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Bool",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
        "fct-type": "function",
        "title": "lazyFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "lazyFields",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Fields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:makePNF",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emakePNF\u003c/a\u003e\u003c/code\u003e is used by the generated code to create a ProtoName with less newtype noise.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "ByteString -\u003e [String] -\u003e [String] -\u003e String -\u003e ProtoName",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#makePNF",
        "fct-type": "function",
        "title": "makePNF"
      },
      "index": {
        "description": "makePNF is used by the generated code to create ProtoName with less newtype noise",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "makePNF",
        "normalized": "ByteString-\u003e[String]-\u003e[String]-\u003eString-\u003eProtoName",
        "package": "protocol-buffers",
        "partial": "PNF",
        "signature": "ByteString-\u003e[String]-\u003e[String]-\u003eString-\u003eProtoName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:messages",
      "description": {
        "fct-descr": "\u003cp\u003eall messages and groups\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "[DescriptorInfo]",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
        "fct-type": "function",
        "title": "messages"
      },
      "index": {
        "description": "all messages and groups",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "messages",
        "normalized": "[DescriptorInfo]",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "[DescriptorInfo]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:mightPack",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if packed would be valid for this field type\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Bool",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
        "fct-type": "function",
        "title": "mightPack"
      },
      "index": {
        "description": "True if packed would be valid for this field type",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "mightPack",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Pack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:packedTag",
      "description": {
        "fct-descr": "\u003cp\u003eused for reading when Just {} instead of wireTag\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Maybe (WireTag, WireTag)",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
        "fct-type": "function",
        "title": "packedTag"
      },
      "index": {
        "description": "used for reading when Just instead of wireTag",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "packedTag",
        "normalized": "Maybe(WireTag,WireTag)",
        "package": "protocol-buffers",
        "partial": "Tag",
        "signature": "Maybe(WireTag,WireTag)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:parentModule",
      "description": {
        "fct-descr": "\u003cp\u003e.proto specified namespace (like Com.Google.Bar)\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "[MName String]",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoName",
        "fct-type": "function",
        "title": "parentModule"
      },
      "index": {
        "description": "proto specified namespace like Com.Google.Bar",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "parentModule",
        "normalized": "[MName String]",
        "package": "protocol-buffers",
        "partial": "Module",
        "signature": "[MName String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:parentModule-39-",
      "description": {
        "fct-descr": "\u003cp\u003e.proto specified namespace (like Com.Google.Bar)\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "[MName String]",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoFName",
        "fct-type": "function",
        "title": "parentModule'"
      },
      "index": {
        "description": "proto specified namespace like Com.Google.Bar",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "parentModule'",
        "normalized": "[MName String]",
        "package": "protocol-buffers",
        "partial": "Module'",
        "signature": "[MName String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:parentOfEnum",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "parentOfEnum",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#parentOfEnum",
        "fct-type": "method",
        "title": "parentOfEnum"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "parentOfEnum",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Of Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:protoFilePath",
      "description": {
        "fct-descr": "\u003cp\u003epath to haskell module\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "[FilePath]",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
        "fct-type": "function",
        "title": "protoFilePath"
      },
      "index": {
        "description": "path to haskell module",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "protoFilePath",
        "normalized": "[FilePath]",
        "package": "protocol-buffers",
        "partial": "File Path",
        "signature": "[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:protoMod",
      "description": {
        "fct-descr": "\u003cp\u003eblank protobufName, maybe blank haskellPrefix and/or parentModule\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "ProtoName",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
        "fct-type": "function",
        "title": "protoMod"
      },
      "index": {
        "description": "blank protobufName maybe blank haskellPrefix and or parentModule",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "protoMod",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Mod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:protoSource",
      "description": {
        "fct-descr": "\u003cp\u003efilename without path of .proto file\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "FilePath",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
        "fct-type": "function",
        "title": "protoSource"
      },
      "index": {
        "description": "filename without path of proto file",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "protoSource",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:protobufName",
      "description": {
        "fct-descr": "\u003cp\u003efully qualified name using \u003ca\u003epackage\u003c/a\u003e prefix (no mangling)\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "FIName Utf8",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoName",
        "fct-type": "function",
        "title": "protobufName"
      },
      "index": {
        "description": "fully qualified name using package prefix no mangling",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "protobufName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:protobufName-39-",
      "description": {
        "fct-descr": "\u003cp\u003efully qualified name using \u003ca\u003epackage\u003c/a\u003e prefix (no mangling)\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "FIName Utf8",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#ProtoFName",
        "fct-type": "function",
        "title": "protobufName'"
      },
      "index": {
        "description": "fully qualified name using package prefix no mangling",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "protobufName'",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Name'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:reflectDescriptorInfo",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "reflectDescriptorInfo",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#reflectDescriptorInfo",
        "fct-type": "method",
        "title": "reflectDescriptorInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "reflectDescriptorInfo",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Descriptor Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:reflectEnum",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "EnumInfoApp e",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#reflectEnum",
        "fct-type": "method",
        "title": "reflectEnum"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "reflectEnum",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:reflectEnumInfo",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "reflectEnumInfo",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#reflectEnumInfo",
        "fct-type": "method",
        "title": "reflectEnumInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "reflectEnumInfo",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Enum Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:requiredTags",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Set WireTag",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#GetMessageInfo",
        "fct-type": "function",
        "title": "requiredTags"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "requiredTags",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Tags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:storeUnknown",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Bool",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
        "fct-type": "function",
        "title": "storeUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "storeUnknown",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:toRF",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "SomeRealFloat -\u003e a",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#toRF",
        "fct-type": "function",
        "title": "toRF"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "toRF",
        "normalized": "SomeRealFloat-\u003ea",
        "package": "protocol-buffers",
        "partial": "RF",
        "signature": "SomeRealFloat-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:typeCode",
      "description": {
        "fct-descr": "\u003cp\u003efromEnum of Text.DescriptorProtos.FieldDescriptorProto.Type\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldType",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
        "fct-type": "function",
        "title": "typeCode"
      },
      "index": {
        "description": "fromEnum of Text.DescriptorProtos.FieldDescriptorProto.Type",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "typeCode",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:typeName",
      "description": {
        "fct-descr": "\u003cp\u003eSet for Messages,Groups,and Enums\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "Maybe ProtoName",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
        "fct-type": "function",
        "title": "typeName"
      },
      "index": {
        "description": "Set for Messages Groups and Enums",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "typeName",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:wireTag",
      "description": {
        "fct-descr": "\u003cp\u003eUsed for writing and reading if packedTag is Nothing\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "WireTag",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
        "fct-type": "function",
        "title": "wireTag"
      },
      "index": {
        "description": "Used for writing and reading if packedTag is Nothing",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "wireTag",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Tag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:wireTagLength",
      "description": {
        "fct-descr": "\u003cp\u003eBytes required in the Varint formatted wireTag\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Reflections",
        "fct-package": "protocol-buffers",
        "fct-signature": "WireSize",
        "fct-source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
        "fct-type": "function",
        "title": "wireTagLength"
      },
      "index": {
        "description": "Bytes required in the Varint formatted wireTag",
        "hierarchy": "Text ProtocolBuffers Reflections",
        "module": "Text.ProtocolBuffers.Reflections",
        "name": "wireTagLength",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Tag Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module add unknown field support to the library.  There are no user API things here,\n except for advanced spelunking into the data structures which can and have changed with no\n notice.  Importer beware.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ProtocolBuffers.Unknown",
        "fct-package": "protocol-buffers",
        "fct-signature": "module",
        "fct-source": "src/Text-ProtocolBuffers-Unknown.html",
        "fct-type": "module",
        "title": "Unknown"
      },
      "index": {
        "description": "This module add unknown field support to the library There are no user API things here except for advanced spelunking into the data structures which can and have changed with no notice Importer beware",
        "hierarchy": "Text ProtocolBuffers Unknown",
        "module": "Text.ProtocolBuffers.Unknown",
        "name": "Unknown",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#t:UnknownField",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a suposedly opaque type\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Unknown",
        "fct-package": "protocol-buffers",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-Unknown.html#UnknownField",
        "fct-type": "newtype",
        "title": "UnknownField"
      },
      "index": {
        "description": "This is suposedly opaque type",
        "hierarchy": "Text ProtocolBuffers Unknown",
        "module": "Text.ProtocolBuffers.Unknown",
        "name": "UnknownField",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Unknown Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#t:UnknownFieldValue",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Unknown",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Unknown.html#UnknownFieldValue",
        "fct-type": "data",
        "title": "UnknownFieldValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Unknown",
        "module": "Text.ProtocolBuffers.Unknown",
        "name": "UnknownFieldValue",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Unknown Field Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#t:UnknownMessage",
      "description": {
        "fct-descr": "\u003cp\u003eMessages that can store unknown fields implement this interface.\n UnknownField is a supposedly opaque type.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Unknown",
        "fct-package": "protocol-buffers",
        "fct-signature": "class",
        "fct-source": "src/Text-ProtocolBuffers-Unknown.html#UnknownMessage",
        "fct-type": "class",
        "title": "UnknownMessage"
      },
      "index": {
        "description": "Messages that can store unknown fields implement this interface UnknownField is supposedly opaque type",
        "hierarchy": "Text ProtocolBuffers Unknown",
        "module": "Text.ProtocolBuffers.Unknown",
        "name": "UnknownMessage",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Unknown Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#v:UFV",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Unknown",
        "fct-package": "protocol-buffers",
        "fct-signature": "UFV !WireTag !ByteString",
        "fct-source": "src/Text-ProtocolBuffers-Unknown.html#UnknownFieldValue",
        "fct-type": "function",
        "title": "UFV"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Unknown",
        "module": "Text.ProtocolBuffers.Unknown",
        "name": "UFV",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "UFV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#v:UnknownField",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Unknown",
        "fct-package": "protocol-buffers",
        "fct-signature": "UnknownField (Seq UnknownFieldValue)",
        "fct-source": "src/Text-ProtocolBuffers-Unknown.html#UnknownField",
        "fct-type": "function",
        "title": "UnknownField"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Unknown",
        "module": "Text.ProtocolBuffers.Unknown",
        "name": "UnknownField",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Unknown Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#v:catch-39-Unknown",
      "description": {
        "fct-descr": "\u003cp\u003eThis is used by the generated code\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Unknown",
        "fct-package": "protocol-buffers",
        "fct-signature": "(WireTag -\u003e a -\u003e Get a) -\u003e WireTag -\u003e a -\u003e Get a",
        "fct-source": "src/Text-ProtocolBuffers-Unknown.html#catch%27Unknown",
        "fct-type": "function",
        "title": "catch'Unknown"
      },
      "index": {
        "description": "This is used by the generated code",
        "hierarchy": "Text ProtocolBuffers Unknown",
        "module": "Text.ProtocolBuffers.Unknown",
        "name": "catch'Unknown",
        "normalized": "(WireTag-\u003ea-\u003eGet a)-\u003eWireTag-\u003ea-\u003eGet a",
        "package": "protocol-buffers",
        "partial": "Unknown",
        "signature": "(WireTag-\u003ea-\u003eGet a)-\u003eWireTag-\u003ea-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#v:getUnknownField",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Unknown",
        "fct-package": "protocol-buffers",
        "fct-signature": "msg -\u003e UnknownField",
        "fct-source": "src/Text-ProtocolBuffers-Unknown.html#getUnknownField",
        "fct-type": "method",
        "title": "getUnknownField"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Unknown",
        "module": "Text.ProtocolBuffers.Unknown",
        "name": "getUnknownField",
        "normalized": "a-\u003eUnknownField",
        "package": "protocol-buffers",
        "partial": "Unknown Field",
        "signature": "msg-\u003eUnknownField"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#v:putUnknownField",
      "description": {
        "fct-module": "Text.ProtocolBuffers.Unknown",
        "fct-package": "protocol-buffers",
        "fct-signature": "UnknownField -\u003e msg -\u003e msg",
        "fct-source": "src/Text-ProtocolBuffers-Unknown.html#putUnknownField",
        "fct-type": "method",
        "title": "putUnknownField"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers Unknown",
        "module": "Text.ProtocolBuffers.Unknown",
        "name": "putUnknownField",
        "normalized": "UnknownField-\u003ea-\u003ea",
        "package": "protocol-buffers",
        "partial": "Unknown Field",
        "signature": "UnknownField-\u003emsg-\u003emsg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#v:wirePutUnknownField",
      "description": {
        "fct-descr": "\u003cp\u003eThis is used by the generated code\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Unknown",
        "fct-package": "protocol-buffers",
        "fct-signature": "UnknownField -\u003e Put",
        "fct-source": "src/Text-ProtocolBuffers-Unknown.html#wirePutUnknownField",
        "fct-type": "function",
        "title": "wirePutUnknownField"
      },
      "index": {
        "description": "This is used by the generated code",
        "hierarchy": "Text ProtocolBuffers Unknown",
        "module": "Text.ProtocolBuffers.Unknown",
        "name": "wirePutUnknownField",
        "normalized": "UnknownField-\u003ePut",
        "package": "protocol-buffers",
        "partial": "Put Unknown Field",
        "signature": "UnknownField-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#v:wireSizeUnknownField",
      "description": {
        "fct-descr": "\u003cp\u003eThis is used by the generated code\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.Unknown",
        "fct-package": "protocol-buffers",
        "fct-signature": "UnknownField -\u003e WireSize",
        "fct-source": "src/Text-ProtocolBuffers-Unknown.html#wireSizeUnknownField",
        "fct-type": "function",
        "title": "wireSizeUnknownField"
      },
      "index": {
        "description": "This is used by the generated code",
        "hierarchy": "Text ProtocolBuffers Unknown",
        "module": "Text.ProtocolBuffers.Unknown",
        "name": "wireSizeUnknownField",
        "normalized": "UnknownField-\u003eWireSize",
        "package": "protocol-buffers",
        "partial": "Size Unknown Field",
        "signature": "UnknownField-\u003eWireSize"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere are the serialization and deserialization functions.\n\u003c/p\u003e\u003cp\u003eThis module cooperates with the generated code to implement the Wire\ninstances.  The encoding is mostly documented at\n\u003ca\u003ehttp://code.google.com/apis/protocolbuffers/docs/encoding.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe user API functions are grouped into sections and documented.  The\nrest are for internal use.  The main functions are \u003ccode\u003e\u003ca\u003emessageGet\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003emessagePut\u003c/a\u003e\u003c/code\u003e (and \u003ccode\u003e\u003ca\u003emessageSize\u003c/a\u003e\u003c/code\u003e).  There are then several 'message*'\nvariants which allow for finer control and for making delimited\nmessages.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "module",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html",
        "fct-type": "module",
        "title": "WireMessage"
      },
      "index": {
        "description": "Here are the serialization and deserialization functions This module cooperates with the generated code to implement the Wire instances The encoding is mostly documented at http code.google.com apis protocolbuffers docs encoding.html The user API functions are grouped into sections and documented The rest are for internal use The main functions are messageGet and messagePut and messageSize There are then several message variants which allow for finer control and for making delimited messages",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "WireMessage",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Wire Message",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#t:Get",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#Get",
        "fct-type": "data",
        "title": "Get"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "Get",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#t:Put",
      "description": {
        "fct-descr": "\u003cp\u003ePut merely lifts Builder into a Writer monad, applied to ().\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "Put"
      },
      "index": {
        "description": "Put merely lifts Builder into Writer monad applied to",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "Put",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#t:Wire",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eWire\u003c/a\u003e\u003c/code\u003e class is for internal use, and may change.  If there\n is a mis-match between the \u003ccode\u003e\u003ca\u003eFieldType\u003c/a\u003e\u003c/code\u003e and the type of \u003ccode\u003eb\u003c/code\u003e then you\n will get a failure at runtime.\n\u003c/p\u003e\u003cp\u003eUsers should stick to the message functions defined in\n \u003ca\u003eText.ProtocolBuffers.WireMessage\u003c/a\u003e and exported to use user by\n \u003ca\u003eText.ProtocolBuffers\u003c/a\u003e.  These are less likely to change.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "class",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#Wire",
        "fct-type": "class",
        "title": "Wire"
      },
      "index": {
        "description": "The Wire class is for internal use and may change If there is mis-match between the FieldType and the type of then you will get failure at runtime Users should stick to the message functions defined in Text.ProtocolBuffers.WireMessage and exported to use user by Text.ProtocolBuffers These are less likely to change",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "Wire",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Wire",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:castDoubleToWord64",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Double -\u003e Word64",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#castDoubleToWord64",
        "fct-type": "function",
        "title": "castDoubleToWord64"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "castDoubleToWord64",
        "normalized": "Double-\u003eWord",
        "package": "protocol-buffers",
        "partial": "Double To Word",
        "signature": "Double-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:castFloatToWord32",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Float -\u003e Word32",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#castFloatToWord32",
        "fct-type": "function",
        "title": "castFloatToWord32"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "castFloatToWord32",
        "normalized": "Float-\u003eWord",
        "package": "protocol-buffers",
        "partial": "Float To Word",
        "signature": "Float-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:castWord32ToFloat",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Word32 -\u003e Float",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#castWord32ToFloat",
        "fct-type": "function",
        "title": "castWord32ToFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "castWord32ToFloat",
        "normalized": "Word-\u003eFloat",
        "package": "protocol-buffers",
        "partial": "Word To Float",
        "signature": "Word-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:castWord64ToDouble",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Word64 -\u003e Double",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#castWord64ToDouble",
        "fct-type": "function",
        "title": "castWord64ToDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "castWord64ToDouble",
        "normalized": "Word-\u003eDouble",
        "package": "protocol-buffers",
        "partial": "Word To Double",
        "signature": "Word-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:fieldIdOf",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "WireTag -\u003e FieldId",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#fieldIdOf",
        "fct-type": "function",
        "title": "fieldIdOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "fieldIdOf",
        "normalized": "WireTag-\u003eFieldId",
        "package": "protocol-buffers",
        "partial": "Id Of",
        "signature": "WireTag-\u003eFieldId"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:getBareMessageWith",
      "description": {
        "fct-descr": "\u003cp\u003eUsed by generated code\n getBareMessageWith assumes the wireTag for the message, if it existed, has already been read.\n getBareMessageWith assumes that it does needs to read the Varint encoded length of the message.\n getBareMessageWith will consume the entire ByteString it is operating on, or until it\n finds any STOP_GROUP tag (wireType == 4)\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "(WireTag -\u003e message -\u003e Get message) -\u003e Get message",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#getBareMessageWith",
        "fct-type": "function",
        "title": "getBareMessageWith"
      },
      "index": {
        "description": "Used by generated code getBareMessageWith assumes the wireTag for the message if it existed has already been read getBareMessageWith assumes that it does needs to read the Varint encoded length of the message getBareMessageWith will consume the entire ByteString it is operating on or until it finds any STOP GROUP tag wireType",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "getBareMessageWith",
        "normalized": "(WireTag-\u003ea-\u003eGet a)-\u003eGet a",
        "package": "protocol-buffers",
        "partial": "Bare Message With",
        "signature": "(WireTag-\u003emessage-\u003eGet message)-\u003eGet message"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:getFromBS",
      "description": {
        "fct-descr": "\u003cp\u003eThis is \u003ccode\u003e\u003ca\u003erunGetOnLazy\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e results converted to\n \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e calls and the trailing \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e discarded.  This use of\n runtime errors is discouraged, but may be convenient.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get r -\u003e ByteString -\u003e r",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#getFromBS",
        "fct-type": "function",
        "title": "getFromBS"
      },
      "index": {
        "description": "This is runGetOnLazy with the Left results converted to error calls and the trailing ByteString discarded This use of runtime errors is discouraged but may be convenient",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "getFromBS",
        "normalized": "Get a-\u003eByteString-\u003ea",
        "package": "protocol-buffers",
        "partial": "From BS",
        "signature": "Get r-\u003eByteString-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:getMessageWith",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "(WireTag -\u003e message -\u003e Get message) -\u003e Get message",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#getMessageWith",
        "fct-type": "function",
        "title": "getMessageWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "getMessageWith",
        "normalized": "(WireTag-\u003ea-\u003eGet a)-\u003eGet a",
        "package": "protocol-buffers",
        "partial": "Message With",
        "signature": "(WireTag-\u003emessage-\u003eGet message)-\u003eGet message"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:getVarInt",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get a",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#getVarInt",
        "fct-type": "function",
        "title": "getVarInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "getVarInt",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Var Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageAsFieldGetM",
      "description": {
        "fct-descr": "\u003cp\u003eThis reads a wire tag (must be of type '2') to get the \u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e.\n Then the encoded message length is read, followed by the message\n itself.  Both the \u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e and the message are returned.\n\u003c/p\u003e\u003cp\u003eThis allows for incremental reading and processing.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get (FieldId, msg)",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#messageAsFieldGetM",
        "fct-type": "function",
        "title": "messageAsFieldGetM"
      },
      "index": {
        "description": "This reads wire tag must be of type to get the FieldId Then the encoded message length is read followed by the message itself Both the FieldId and the message are returned This allows for incremental reading and processing",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "messageAsFieldGetM",
        "normalized": "Get(FieldId,a)",
        "package": "protocol-buffers",
        "partial": "As Field Get",
        "signature": "Get(FieldId,msg)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageAsFieldPutM",
      "description": {
        "fct-descr": "\u003cp\u003eThis writes an encoded wire tag with the given \u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e and then\n  the encoded length of the message's fields and then the message's\n  fields with tags to the wire.  This \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad can be composed\n  and eventually executed with \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldId -\u003e msg -\u003e Put",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#messageAsFieldPutM",
        "fct-type": "function",
        "title": "messageAsFieldPutM"
      },
      "index": {
        "description": "This writes an encoded wire tag with the given FieldId and then the encoded length of the message fields and then the message fields with tags to the wire This Put monad can be composed and eventually executed with runPut",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "messageAsFieldPutM",
        "normalized": "FieldId-\u003ea-\u003ePut",
        "package": "protocol-buffers",
        "partial": "As Field Put",
        "signature": "FieldId-\u003emsg-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageAsFieldSize",
      "description": {
        "fct-descr": "\u003cp\u003eThis computes the size of the \u003ccode\u003e\u003ca\u003emessageWithLengthSize\u003c/a\u003e\u003c/code\u003e and then\n adds the length an initial tag with the given \u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldId -\u003e msg -\u003e WireSize",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#messageAsFieldSize",
        "fct-type": "function",
        "title": "messageAsFieldSize"
      },
      "index": {
        "description": "This computes the size of the messageWithLengthSize and then adds the length an initial tag with the given FieldId",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "messageAsFieldSize",
        "normalized": "FieldId-\u003ea-\u003eWireSize",
        "package": "protocol-buffers",
        "partial": "As Field Size",
        "signature": "FieldId-\u003emsg-\u003eWireSize"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageGet",
      "description": {
        "fct-descr": "\u003cp\u003eThis consumes the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to decode a message.  It assumes\n the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is merely a sequence of the tagged fields of the\n message, and consumes until a group stop tag is detected or the\n entire input is consumed.  Any \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e past the end of the\n stop tag is returned as well.\n\u003c/p\u003e\u003cp\u003eThis is \u003ccode\u003e\u003ca\u003erunGetOnLazy\u003c/a\u003e\u003c/code\u003e applied to \u003ccode\u003e\u003ca\u003emessageGetM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "ByteString -\u003e Either String (msg, ByteString)",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#messageGet",
        "fct-type": "function",
        "title": "messageGet"
      },
      "index": {
        "description": "This consumes the ByteString to decode message It assumes the ByteString is merely sequence of the tagged fields of the message and consumes until group stop tag is detected or the entire input is consumed Any ByteString past the end of the stop tag is returned as well This is runGetOnLazy applied to messageGetM",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "messageGet",
        "normalized": "ByteString-\u003eEither String(a,ByteString)",
        "package": "protocol-buffers",
        "partial": "Get",
        "signature": "ByteString-\u003eEither String(msg,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageGetM",
      "description": {
        "fct-descr": "\u003cp\u003eThis reads the tagged message fields until the stop tag or the\n end of input is reached.\n\u003c/p\u003e\u003cp\u003eThis is actually \u003ccode\u003e wireGet 10 msg \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get msg",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#messageGetM",
        "fct-type": "function",
        "title": "messageGetM"
      },
      "index": {
        "description": "This reads the tagged message fields until the stop tag or the end of input is reached This is actually wireGet msg",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "messageGetM",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messagePut",
      "description": {
        "fct-descr": "\u003cp\u003eThis is \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e applied to \u003ccode\u003e\u003ca\u003emessagePutM\u003c/a\u003e\u003c/code\u003e. It result in a\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with a length of \u003ccode\u003e\u003ca\u003emessageSize\u003c/a\u003e\u003c/code\u003e bytes.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "msg -\u003e ByteString",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#messagePut",
        "fct-type": "function",
        "title": "messagePut"
      },
      "index": {
        "description": "This is runPut applied to messagePutM It result in ByteString with length of messageSize bytes",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "messagePut",
        "normalized": "a-\u003eByteString",
        "package": "protocol-buffers",
        "partial": "Put",
        "signature": "msg-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messagePutM",
      "description": {
        "fct-descr": "\u003cp\u003eThis writes just the message's fields with tags to the wire.  This\n \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad can be composed and eventually executed with \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is actually \u003ccode\u003e wirePut 10 msg \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "msg -\u003e Put",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#messagePutM",
        "fct-type": "function",
        "title": "messagePutM"
      },
      "index": {
        "description": "This writes just the message fields with tags to the wire This Put monad can be composed and eventually executed with runPut This is actually wirePut msg",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "messagePutM",
        "normalized": "a-\u003ePut",
        "package": "protocol-buffers",
        "partial": "Put",
        "signature": "msg-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageSize",
      "description": {
        "fct-descr": "\u003cp\u003eThis computes the size of the message's fields with tags on the\n wire with no initial tag or length (in bytes).  This is also the\n length of the message as placed between group start and stop tags.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "msg -\u003e WireSize",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#messageSize",
        "fct-type": "function",
        "title": "messageSize"
      },
      "index": {
        "description": "This computes the size of the message fields with tags on the wire with no initial tag or length in bytes This is also the length of the message as placed between group start and stop tags",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "messageSize",
        "normalized": "a-\u003eWireSize",
        "package": "protocol-buffers",
        "partial": "Size",
        "signature": "msg-\u003eWireSize"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageWithLengthGet",
      "description": {
        "fct-descr": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003erunGetOnLazy\u003c/a\u003e\u003c/code\u003e applied to \u003ccode\u003e\u003ca\u003emessageWithLengthGetM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis first reads the encoded length of the message and will then\n succeed when it has consumed precisely this many additional bytes.\n The \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e after this point will be returned.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "ByteString -\u003e Either String (msg, ByteString)",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#messageWithLengthGet",
        "fct-type": "function",
        "title": "messageWithLengthGet"
      },
      "index": {
        "description": "This runGetOnLazy applied to messageWithLengthGetM This first reads the encoded length of the message and will then succeed when it has consumed precisely this many additional bytes The ByteString after this point will be returned",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "messageWithLengthGet",
        "normalized": "ByteString-\u003eEither String(a,ByteString)",
        "package": "protocol-buffers",
        "partial": "With Length Get",
        "signature": "ByteString-\u003eEither String(msg,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageWithLengthGetM",
      "description": {
        "fct-descr": "\u003cp\u003eThis reads the encoded message length and then the message.\n\u003c/p\u003e\u003cp\u003eThis is actually \u003ccode\u003e wireGet 11 msg \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get msg",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#messageWithLengthGetM",
        "fct-type": "function",
        "title": "messageWithLengthGetM"
      },
      "index": {
        "description": "This reads the encoded message length and then the message This is actually wireGet msg",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "messageWithLengthGetM",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "With Length Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageWithLengthPut",
      "description": {
        "fct-descr": "\u003cp\u003eThis is \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e applied to \u003ccode\u003e\u003ca\u003emessageWithLengthPutM\u003c/a\u003e\u003c/code\u003e.  It results\n in a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with a length of \u003ccode\u003e\u003ca\u003emessageWithLengthSize\u003c/a\u003e\u003c/code\u003e bytes.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "msg -\u003e ByteString",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#messageWithLengthPut",
        "fct-type": "function",
        "title": "messageWithLengthPut"
      },
      "index": {
        "description": "This is runPut applied to messageWithLengthPutM It results in ByteString with length of messageWithLengthSize bytes",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "messageWithLengthPut",
        "normalized": "a-\u003eByteString",
        "package": "protocol-buffers",
        "partial": "With Length Put",
        "signature": "msg-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageWithLengthPutM",
      "description": {
        "fct-descr": "\u003cp\u003eThis writes the encoded length of the message's fields and then\n  the message's fields with tags to the wire.  This \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad can\n  be composed and eventually executed with \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is actually \u003ccode\u003e wirePut 11 msg \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "msg -\u003e Put",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#messageWithLengthPutM",
        "fct-type": "function",
        "title": "messageWithLengthPutM"
      },
      "index": {
        "description": "This writes the encoded length of the message fields and then the message fields with tags to the wire This Put monad can be composed and eventually executed with runPut This is actually wirePut msg",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "messageWithLengthPutM",
        "normalized": "a-\u003ePut",
        "package": "protocol-buffers",
        "partial": "With Length Put",
        "signature": "msg-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageWithLengthSize",
      "description": {
        "fct-descr": "\u003cp\u003eThis computes the size of the message fields as in \u003ccode\u003e\u003ca\u003emessageSize\u003c/a\u003e\u003c/code\u003e\n and add the length of the encoded size to the total.  Thus this is\n the the length of the message including the encoded length header,\n but without any leading tag.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "msg -\u003e WireSize",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#messageWithLengthSize",
        "fct-type": "function",
        "title": "messageWithLengthSize"
      },
      "index": {
        "description": "This computes the size of the message fields as in messageSize and add the length of the encoded size to the total Thus this is the the length of the message including the encoded length header but without any leading tag",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "messageWithLengthSize",
        "normalized": "a-\u003eWireSize",
        "package": "protocol-buffers",
        "partial": "With Length Size",
        "signature": "msg-\u003eWireSize"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:mkWireTag",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldId -\u003e WireType -\u003e WireTag",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#mkWireTag",
        "fct-type": "function",
        "title": "mkWireTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "mkWireTag",
        "normalized": "FieldId-\u003eWireType-\u003eWireTag",
        "package": "protocol-buffers",
        "partial": "Wire Tag",
        "signature": "FieldId-\u003eWireType-\u003eWireTag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:prependMessageSize",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "WireSize -\u003e WireSize",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#prependMessageSize",
        "fct-type": "function",
        "title": "prependMessageSize"
      },
      "index": {
        "description": "Used in generated code",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "prependMessageSize",
        "normalized": "WireSize-\u003eWireSize",
        "package": "protocol-buffers",
        "partial": "Message Size",
        "signature": "WireSize-\u003eWireSize"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:putLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a lazy ByteString efficiently, simply appending the lazy\n ByteString chunks to the output buffer\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "ByteString -\u003e Put",
        "fct-type": "function",
        "title": "putLazyByteString"
      },
      "index": {
        "description": "Write lazy ByteString efficiently simply appending the lazy ByteString chunks to the output buffer",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "putLazyByteString",
        "normalized": "ByteString-\u003ePut",
        "package": "protocol-buffers",
        "partial": "Lazy Byte String",
        "signature": "ByteString-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:putSize",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "WireSize -\u003e Put",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#putSize",
        "fct-type": "function",
        "title": "putSize"
      },
      "index": {
        "description": "Used in generated code",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "putSize",
        "normalized": "WireSize-\u003ePut",
        "package": "protocol-buffers",
        "partial": "Size",
        "signature": "WireSize-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:putVarUInt",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "a -\u003e Put",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#putVarUInt",
        "fct-type": "function",
        "title": "putVarUInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "putVarUInt",
        "normalized": "a-\u003ePut",
        "package": "protocol-buffers",
        "partial": "Var UInt",
        "signature": "a-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:runGet",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunGet\u003c/a\u003e\u003c/code\u003e is the simple executor\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get a -\u003e ByteString -\u003e Result a",
        "fct-source": "src/Text-ProtocolBuffers-Get.html#runGet",
        "fct-type": "function",
        "title": "runGet"
      },
      "index": {
        "description": "runGet is the simple executor",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "runGet",
        "normalized": "Get a-\u003eByteString-\u003eResult a",
        "package": "protocol-buffers",
        "partial": "Get",
        "signature": "Get a-\u003eByteString-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:runGetOnLazy",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Get r -\u003e ByteString -\u003e Either String (r, ByteString)",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#runGetOnLazy",
        "fct-type": "function",
        "title": "runGetOnLazy"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "runGetOnLazy",
        "normalized": "Get a-\u003eByteString-\u003eEither String(a,ByteString)",
        "package": "protocol-buffers",
        "partial": "Get On Lazy",
        "signature": "Get r-\u003eByteString-\u003eEither String(r,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:runPut",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad with a serialiser\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Put -\u003e ByteString",
        "fct-type": "function",
        "title": "runPut"
      },
      "index": {
        "description": "Run the Put monad with serialiser",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "runPut",
        "normalized": "Put-\u003eByteString",
        "package": "protocol-buffers",
        "partial": "Put",
        "signature": "Put-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:size-39-WireTag",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "WireTag -\u003e Int64",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#size%27WireTag",
        "fct-type": "function",
        "title": "size'WireTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "size'WireTag",
        "normalized": "WireTag-\u003eInt",
        "package": "protocol-buffers",
        "partial": "Wire Tag",
        "signature": "WireTag-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:splitWireTag",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "WireTag -\u003e (FieldId, WireType)",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#splitWireTag",
        "fct-type": "function",
        "title": "splitWireTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "splitWireTag",
        "normalized": "WireTag-\u003e(FieldId,WireType)",
        "package": "protocol-buffers",
        "partial": "Wire Tag",
        "signature": "WireTag-\u003e(FieldId,WireType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:toPackedWireTag",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldId -\u003e WireTag",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#toPackedWireTag",
        "fct-type": "function",
        "title": "toPackedWireTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "toPackedWireTag",
        "normalized": "FieldId-\u003eWireTag",
        "package": "protocol-buffers",
        "partial": "Packed Wire Tag",
        "signature": "FieldId-\u003eWireTag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:toWireTag",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldId -\u003e FieldType -\u003e WireTag",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#toWireTag",
        "fct-type": "function",
        "title": "toWireTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "toWireTag",
        "normalized": "FieldId-\u003eFieldType-\u003eWireTag",
        "package": "protocol-buffers",
        "partial": "Wire Tag",
        "signature": "FieldId-\u003eFieldType-\u003eWireTag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:toWireType",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldType -\u003e WireType",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#toWireType",
        "fct-type": "function",
        "title": "toWireType"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "toWireType",
        "normalized": "FieldType-\u003eWireType",
        "package": "protocol-buffers",
        "partial": "Wire Type",
        "signature": "FieldType-\u003eWireType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:unknown",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldId -\u003e WireType -\u003e a -\u003e Get a",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#unknown",
        "fct-type": "function",
        "title": "unknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "unknown",
        "normalized": "FieldId-\u003eWireType-\u003ea-\u003eGet a",
        "package": "protocol-buffers",
        "partial": "",
        "signature": "FieldId-\u003eWireType-\u003ea-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:unknownField",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "a -\u003e FieldId -\u003e Get a",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#unknownField",
        "fct-type": "function",
        "title": "unknownField"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "unknownField",
        "normalized": "a-\u003eFieldId-\u003eGet a",
        "package": "protocol-buffers",
        "partial": "Field",
        "signature": "a-\u003eFieldId-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireGet",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldType -\u003e Get b",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wireGet",
        "fct-type": "method",
        "title": "wireGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wireGet",
        "normalized": "FieldType-\u003eGet a",
        "package": "protocol-buffers",
        "partial": "Get",
        "signature": "FieldType-\u003eGet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireGetEnum",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "(Int -\u003e Maybe e) -\u003e Get e",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wireGetEnum",
        "fct-type": "function",
        "title": "wireGetEnum"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wireGetEnum",
        "normalized": "(Int-\u003eMaybe a)-\u003eGet a",
        "package": "protocol-buffers",
        "partial": "Get Enum",
        "signature": "(Int-\u003eMaybe e)-\u003eGet e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireGetErr",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldType -\u003e Get a",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wireGetErr",
        "fct-type": "function",
        "title": "wireGetErr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wireGetErr",
        "normalized": "FieldType-\u003eGet a",
        "package": "protocol-buffers",
        "partial": "Get Err",
        "signature": "FieldType-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireGetFromWire",
      "description": {
        "fct-descr": "\u003cp\u003eThis reads in the raw bytestring corresponding to an field known\n only through the wiretag's \u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eWireType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldId -\u003e WireType -\u003e Get ByteString",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wireGetFromWire",
        "fct-type": "function",
        "title": "wireGetFromWire"
      },
      "index": {
        "description": "This reads in the raw bytestring corresponding to an field known only through the wiretag FieldId and WireType",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wireGetFromWire",
        "normalized": "FieldId-\u003eWireType-\u003eGet ByteString",
        "package": "protocol-buffers",
        "partial": "Get From Wire",
        "signature": "FieldId-\u003eWireType-\u003eGet ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireGetPacked",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldType -\u003e Get (Seq b)",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wireGetPacked",
        "fct-type": "method",
        "title": "wireGetPacked"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wireGetPacked",
        "normalized": "FieldType-\u003eGet(Seq a)",
        "package": "protocol-buffers",
        "partial": "Get Packed",
        "signature": "FieldType-\u003eGet(Seq b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireGetPackedEnum",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "(Int -\u003e Maybe e) -\u003e Get (Seq e)",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wireGetPackedEnum",
        "fct-type": "function",
        "title": "wireGetPackedEnum"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wireGetPackedEnum",
        "normalized": "(Int-\u003eMaybe a)-\u003eGet(Seq a)",
        "package": "protocol-buffers",
        "partial": "Get Packed Enum",
        "signature": "(Int-\u003eMaybe e)-\u003eGet(Seq e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wirePut",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldType -\u003e b -\u003e Put",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wirePut",
        "fct-type": "method",
        "title": "wirePut"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wirePut",
        "normalized": "FieldType-\u003ea-\u003ePut",
        "package": "protocol-buffers",
        "partial": "Put",
        "signature": "FieldType-\u003eb-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wirePutErr",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldType -\u003e a -\u003e Put",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wirePutErr",
        "fct-type": "function",
        "title": "wirePutErr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wirePutErr",
        "normalized": "FieldType-\u003ea-\u003ePut",
        "package": "protocol-buffers",
        "partial": "Put Err",
        "signature": "FieldType-\u003ea-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wirePutOpt",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "WireTag -\u003e FieldType -\u003e Maybe v -\u003e Put",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wirePutOpt",
        "fct-type": "function",
        "title": "wirePutOpt"
      },
      "index": {
        "description": "Used in generated code",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wirePutOpt",
        "normalized": "WireTag-\u003eFieldType-\u003eMaybe a-\u003ePut",
        "package": "protocol-buffers",
        "partial": "Put Opt",
        "signature": "WireTag-\u003eFieldType-\u003eMaybe v-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wirePutPacked",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "WireTag -\u003e FieldType -\u003e Seq v -\u003e Put",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wirePutPacked",
        "fct-type": "function",
        "title": "wirePutPacked"
      },
      "index": {
        "description": "Used in generated code",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wirePutPacked",
        "normalized": "WireTag-\u003eFieldType-\u003eSeq a-\u003ePut",
        "package": "protocol-buffers",
        "partial": "Put Packed",
        "signature": "WireTag-\u003eFieldType-\u003eSeq v-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wirePutRep",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "WireTag -\u003e FieldType -\u003e Seq v -\u003e Put",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wirePutRep",
        "fct-type": "function",
        "title": "wirePutRep"
      },
      "index": {
        "description": "Used in generated code",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wirePutRep",
        "normalized": "WireTag-\u003eFieldType-\u003eSeq a-\u003ePut",
        "package": "protocol-buffers",
        "partial": "Put Rep",
        "signature": "WireTag-\u003eFieldType-\u003eSeq v-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wirePutReq",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "WireTag -\u003e FieldType -\u003e v -\u003e Put",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wirePutReq",
        "fct-type": "function",
        "title": "wirePutReq"
      },
      "index": {
        "description": "Used in generated code",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wirePutReq",
        "normalized": "WireTag-\u003eFieldType-\u003ea-\u003ePut",
        "package": "protocol-buffers",
        "partial": "Put Req",
        "signature": "WireTag-\u003eFieldType-\u003ev-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireSize",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldType -\u003e b -\u003e WireSize",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wireSize",
        "fct-type": "method",
        "title": "wireSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wireSize",
        "normalized": "FieldType-\u003ea-\u003eWireSize",
        "package": "protocol-buffers",
        "partial": "Size",
        "signature": "FieldType-\u003eb-\u003eWireSize"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireSizeErr",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "FieldType -\u003e a -\u003e WireSize",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wireSizeErr",
        "fct-type": "function",
        "title": "wireSizeErr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wireSizeErr",
        "normalized": "FieldType-\u003ea-\u003eWireSize",
        "package": "protocol-buffers",
        "partial": "Size Err",
        "signature": "FieldType-\u003ea-\u003eWireSize"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireSizeOpt",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Int64 -\u003e FieldType -\u003e Maybe v -\u003e Int64",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wireSizeOpt",
        "fct-type": "function",
        "title": "wireSizeOpt"
      },
      "index": {
        "description": "Used in generated code",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wireSizeOpt",
        "normalized": "Int-\u003eFieldType-\u003eMaybe a-\u003eInt",
        "package": "protocol-buffers",
        "partial": "Size Opt",
        "signature": "Int-\u003eFieldType-\u003eMaybe v-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireSizePacked",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Int64 -\u003e FieldType -\u003e Seq v -\u003e Int64",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wireSizePacked",
        "fct-type": "function",
        "title": "wireSizePacked"
      },
      "index": {
        "description": "Used in generated code",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wireSizePacked",
        "normalized": "Int-\u003eFieldType-\u003eSeq a-\u003eInt",
        "package": "protocol-buffers",
        "partial": "Size Packed",
        "signature": "Int-\u003eFieldType-\u003eSeq v-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireSizeRep",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Int64 -\u003e FieldType -\u003e Seq v -\u003e Int64",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wireSizeRep",
        "fct-type": "function",
        "title": "wireSizeRep"
      },
      "index": {
        "description": "Used in generated code",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wireSizeRep",
        "normalized": "Int-\u003eFieldType-\u003eSeq a-\u003eInt",
        "package": "protocol-buffers",
        "partial": "Size Rep",
        "signature": "Int-\u003eFieldType-\u003eSeq v-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireSizeReq",
      "description": {
        "fct-descr": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Int64 -\u003e FieldType -\u003e v -\u003e Int64",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#wireSizeReq",
        "fct-type": "function",
        "title": "wireSizeReq"
      },
      "index": {
        "description": "Used in generated code",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "wireSizeReq",
        "normalized": "Int-\u003eFieldType-\u003ea-\u003eInt",
        "package": "protocol-buffers",
        "partial": "Size Req",
        "signature": "Int-\u003eFieldType-\u003ev-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:zzDecode32",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Word32 -\u003e Int32",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#zzDecode32",
        "fct-type": "function",
        "title": "zzDecode32"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "zzDecode32",
        "normalized": "Word-\u003eInt",
        "package": "protocol-buffers",
        "partial": "Decode",
        "signature": "Word-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:zzDecode64",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Word64 -\u003e Int64",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#zzDecode64",
        "fct-type": "function",
        "title": "zzDecode64"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "zzDecode64",
        "normalized": "Word-\u003eInt",
        "package": "protocol-buffers",
        "partial": "Decode",
        "signature": "Word-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:zzEncode32",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Int32 -\u003e Word32",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#zzEncode32",
        "fct-type": "function",
        "title": "zzEncode32"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "zzEncode32",
        "normalized": "Int-\u003eWord",
        "package": "protocol-buffers",
        "partial": "Encode",
        "signature": "Int-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:zzEncode64",
      "description": {
        "fct-module": "Text.ProtocolBuffers.WireMessage",
        "fct-package": "protocol-buffers",
        "fct-signature": "Int64 -\u003e Word64",
        "fct-source": "src/Text-ProtocolBuffers-WireMessage.html#zzEncode64",
        "fct-type": "function",
        "title": "zzEncode64"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers WireMessage",
        "module": "Text.ProtocolBuffers.WireMessage",
        "name": "zzEncode64",
        "normalized": "Int-\u003eWord",
        "package": "protocol-buffers",
        "partial": "Encode",
        "signature": "Int-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eText.ProtocolBuffers\u003c/a\u003e exposes the client API.  This merely re-exports parts of the\nother modules in protocol-buffers.  The exposed parts are:\n\u003c/p\u003e\u003cpre\u003e\nimport Text.ProtocolBuffers.Basic\n  ( Seq,isValidUTF8,toUtf8,utf8,Utf8(Utf8),Int32,Int64,Word32,Word64\n  , WireTag,FieldId,WireType,FieldType,EnumCode,WireSize\n  , Mergeable(mergeAppend,mergeConcat),Default(defaultValue))\nimport Text.ProtocolBuffers.Extensions\n  ( Key,ExtKey(getExt,putExt,clearExt),MessageAPI(getVal,isSet)\n  , getKeyFieldId,getKeyFieldType,getKeyDefaultValue)\nimport Text.ProtocolBuffers.Identifiers\nimport Text.ProtocolBuffers.Reflections\n  ( ReflectDescriptor(..),ReflectEnum(..),ProtoName(..),HsDefault(..),EnumInfoApp\n  , KeyInfo,FieldInfo(..),DescriptorInfo(..),EnumInfo(..),ProtoInfo(..),makePNF )\nimport Text.ProtocolBuffers.WireMessage\n  ( Wire,Put,Get,runPut,runGet,runGetOnLazy\n  , messageSize,messagePut,messageGet,messagePutM,messageGetM\n  , messageWithLengthSize,messageWithLengthPut,messageWithLengthGet,messageWithLengthPutM,messageWithLengthGetM\n  , messageAsFieldSize,messageAsFieldPutM,messageAsFieldGetM)\n\u003c/pre\u003e\u003cp\u003eThe message serialization is taken care of by \u003ca\u003eWireMessage\u003c/a\u003e\noperations, especially \u003ccode\u003e\u003ca\u003emessagePut\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emessageGet\u003c/a\u003e\u003c/code\u003e.  The\n\u003ccode\u003e\u003ca\u003eMessageAPI\u003c/a\u003e\u003c/code\u003e provides the useful polymorphic \u003ccode\u003e\u003ca\u003egetVal\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eisSet\u003c/a\u003e\u003c/code\u003e\nwhere \u003ccode\u003e\u003ca\u003egetVal\u003c/a\u003e\u003c/code\u003e looks up default values and also works with extension\nkeys.  The \u003ccode\u003e\u003ca\u003eUtf8\u003c/a\u003e\u003c/code\u003e newtype is used to indicate the format in the\nunderlying lazy \u003ccode\u003eByteString\u003c/code\u003e.  Messages and values can be combined\nwith the right-biased \u003ccode\u003e\u003ca\u003eMergeable\u003c/a\u003e\u003c/code\u003e operations.  The \u003ccode\u003emergeEmpty\u003c/code\u003e should\nnot be used as required values are filled in with undefined errors,\nplease use \u003ccode\u003e\u003ca\u003edefaultValue\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eThe Utf8 type is a newtype of the Lazy ByteString.  It can be safely\nconstructed by checking for errors with \u003ccode\u003e\u003ca\u003etoUtf8\u003c/a\u003e\u003c/code\u003e, which returns 'Left\nInt' indicating the index where an error is detected.  It can be\ndeconstructed with \u003ccode\u003e\u003ca\u003eutf8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ProtocolBuffers",
        "fct-package": "protocol-buffers",
        "fct-signature": "module",
        "fct-source": "src/Text-ProtocolBuffers.html",
        "fct-type": "module",
        "title": "ProtocolBuffers"
      },
      "index": {
        "description": "Text.ProtocolBuffers exposes the client API This merely re-exports parts of the other modules in protocol-buffers The exposed parts are import Text.ProtocolBuffers.Basic Seq isValidUTF8 toUtf8 utf8 Utf8 Utf8 Int32 Int64 Word32 Word64 WireTag FieldId WireType FieldType EnumCode WireSize Mergeable mergeAppend mergeConcat Default defaultValue import Text.ProtocolBuffers.Extensions Key ExtKey getExt putExt clearExt MessageAPI getVal isSet getKeyFieldId getKeyFieldType getKeyDefaultValue import Text.ProtocolBuffers.Identifiers import Text.ProtocolBuffers.Reflections ReflectDescriptor ReflectEnum ProtoName HsDefault EnumInfoApp KeyInfo FieldInfo DescriptorInfo EnumInfo ProtoInfo makePNF import Text.ProtocolBuffers.WireMessage Wire Put Get runPut runGet runGetOnLazy messageSize messagePut messageGet messagePutM messageGetM messageWithLengthSize messageWithLengthPut messageWithLengthGet messageWithLengthPutM messageWithLengthGetM messageAsFieldSize messageAsFieldPutM messageAsFieldGetM The message serialization is taken care of by WireMessage operations especially messagePut and messageGet The MessageAPI provides the useful polymorphic getVal and isSet where getVal looks up default values and also works with extension keys The Utf8 newtype is used to indicate the format in the underlying lazy ByteString Messages and values can be combined with the right-biased Mergeable operations The mergeEmpty should not be used as required values are filled in with undefined errors please use defaultValue instead The Utf8 type is newtype of the Lazy ByteString It can be safely constructed by checking for errors with toUtf8 which returns Left Int indicating the index where an error is detected It can be deconstructed with utf8",
        "hierarchy": "Text ProtocolBuffers",
        "module": "Text.ProtocolBuffers",
        "name": "ProtocolBuffers",
        "normalized": "",
        "package": "protocol-buffers",
        "partial": "Protocol Buffers",
        "signature": ""
      }
    }
  }
]