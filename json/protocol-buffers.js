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
        "word": "protocol-buffers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eText.ProtocolBuffers.Basic\u003c/a\u003e defines or re-exports most of the\n basic field types; \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e come from\n the Prelude instead. This module also defined the \u003ccode\u003e\u003ca\u003eMergeable\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eDefault\u003c/a\u003e\u003c/code\u003e classes. The \u003ccode\u003eWire\u003c/code\u003e class is not defined here to avoid orphans.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Basic",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Basic.html",
          "type": "module"
        },
        "index": {
          "description": "Text.ProtocolBuffers.Basic defines or re-exports most of the basic field types Maybe Bool Double and Float come from the Prelude instead This module also defined the Mergeable and Default classes The Wire class is not defined here to avoid orphans",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Basic",
          "package": "protocol-buffers",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Bool",
          "package": "protocol-buffers",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Bool",
          "package": "protocol-buffers",
          "partial": "Bool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "ByteString",
          "package": "protocol-buffers",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "ByteString",
          "package": "protocol-buffers",
          "partial": "Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Default class has the default-default values of types.  See\n \u003ca\u003ehttp://code.google.com/apis/protocolbuffers/docs/proto.html#optional\u003c/a\u003e\n and also note that \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e types have a \u003ccode\u003e\u003ca\u003edefaultValue\u003c/a\u003e\u003c/code\u003e that is the\n first one in the \u003ccode\u003e.proto\u003c/code\u003e file (there is always at least one\n value).  Instances of this for messages hold any default value\n defined in the \u003ccode\u003e.proto\u003c/code\u003e file.  \u003ccode\u003e\u003ca\u003edefaultValue\u003c/a\u003e\u003c/code\u003e is where the\n \u003ccode\u003eMessageAPI\u003c/code\u003e function \u003ccode\u003egetVal\u003c/code\u003e looks when an optional field is not\n set.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Default",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Basic.html#Default",
          "type": "class"
        },
        "index": {
          "description": "The Default class has the default-default values of types See http code.google.com apis protocolbuffers docs proto.html optional and also note that Enum types have defaultValue that is the first one in the proto file there is always at least one value Instances of this for messages hold any default value defined in the proto file defaultValue is where the MessageAPI function getVal looks when an optional field is not set",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Default",
          "package": "protocol-buffers",
          "partial": "Default",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDouble-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE double-precision type.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Double",
          "package": "protocol-buffers",
          "type": "data"
        },
        "index": {
          "description": "Double-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE double-precision type",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Double",
          "package": "protocol-buffers",
          "partial": "Double",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEnumCode\u003c/a\u003e\u003c/code\u003e is the Int32 assoicated with a\n EnumValueDescriptorProto and is in the range 0 to 2^31-1.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "EnumCode",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Basic.html#EnumCode",
          "type": "newtype"
        },
        "index": {
          "description": "EnumCode is the Int32 assoicated with EnumValueDescriptorProto and is in the range to",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "EnumCode",
          "package": "protocol-buffers",
          "partial": "Enum Code",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:EnumCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e is the field number which can be in the range 1 to\n 2^29-1 but the value from 19000 to 19999 are forbidden (so sayeth\n Google).\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "FieldId",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Basic.html#FieldId",
          "type": "newtype"
        },
        "index": {
          "description": "FieldId is the field number which can be in the range to but the value from to are forbidden so sayeth Google",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "FieldId",
          "package": "protocol-buffers",
          "partial": "Field Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:FieldId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eFieldType\u003c/a\u003e\u003c/code\u003e is the integer associated with the\n  FieldDescriptorProto's Type.  The allowed range is currently 1 to\n  18, as shown below (excerpt from descritor.proto)\n\u003c/p\u003e\u003cpre\u003e    // 0 is reserved for errors.\n    // Order is weird for historical reasons.\n    TYPE_DOUBLE         = 1;\n    TYPE_FLOAT          = 2;\n    TYPE_INT64          = 3;   // Not ZigZag encoded.  Negative numbers\n                               // take 10 bytes.  Use TYPE_SINT64 if negative\n                               // values are likely.\n    TYPE_UINT64         = 4;\n    TYPE_INT32          = 5;   // Not ZigZag encoded.  Negative numbers\n                               // take 10 bytes.  Use TYPE_SINT32 if negative\n                               // values are likely.\n    TYPE_FIXED64        = 6;\n    TYPE_FIXED32        = 7;\n    TYPE_BOOL           = 8;\n    TYPE_STRING         = 9;\n    TYPE_GROUP          = 10;  // Tag-delimited aggregate.\n    TYPE_MESSAGE        = 11;  // Length-delimited aggregate.\n\n    // New in version 2.\n    TYPE_BYTES          = 12;\n    TYPE_UINT32         = 13;\n    TYPE_ENUM           = 14;\n    TYPE_SFIXED32       = 15;\n    TYPE_SFIXED64       = 16;\n    TYPE_SINT32         = 17;  // Uses ZigZag encoding.\n    TYPE_SINT64         = 18;  // Uses ZigZag encoding.\n\u003c/pre\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "FieldType",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Basic.html#FieldType",
          "type": "newtype"
        },
        "index": {
          "description": "FieldType is the integer associated with the FieldDescriptorProto Type The allowed range is currently to as shown below excerpt from descritor.proto is reserved for errors Order is weird for historical reasons TYPE DOUBLE TYPE FLOAT TYPE INT64 Not ZigZag encoded Negative numbers take bytes Use TYPE SINT64 if negative values are likely TYPE UINT64 TYPE INT32 Not ZigZag encoded Negative numbers take bytes Use TYPE SINT32 if negative values are likely TYPE FIXED64 TYPE FIXED32 TYPE BOOL TYPE STRING TYPE GROUP Tag-delimited aggregate TYPE MESSAGE Length-delimited aggregate New in version TYPE BYTES TYPE UINT32 TYPE ENUM TYPE SFIXED32 TYPE SFIXED64 TYPE SINT32 Uses ZigZag encoding TYPE SINT64 Uses ZigZag encoding",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "FieldType",
          "package": "protocol-buffers",
          "partial": "Field Type",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:FieldType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle-precision floating point numbers.\n It is desirable that this type be at least equal in range and precision\n to the IEEE single-precision type.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Float",
          "package": "protocol-buffers",
          "type": "data"
        },
        "index": {
          "description": "Single-precision floating point numbers It is desirable that this type be at least equal in range and precision to the IEEE single-precision type",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Float",
          "package": "protocol-buffers",
          "partial": "Float",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit signed integer type\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Int32",
          "package": "protocol-buffers",
          "type": "data"
        },
        "index": {
          "description": "bit signed integer type",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Int32",
          "package": "protocol-buffers",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Int32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e64-bit signed integer type\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Int64",
          "package": "protocol-buffers",
          "type": "data"
        },
        "index": {
          "description": "bit signed integer type",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Int64",
          "package": "protocol-buffers",
          "partial": "Int",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Int64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type encapsulates an optional value.  A value of type\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e either contains a value of type \u003ccode\u003ea\u003c/code\u003e (represented as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e), \n or it is empty (represented as \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e).  Using \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is a good way to \n deal with errors or exceptional cases without resorting to drastic\n measures such as \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type is also a monad.  It is a simple kind of error\n monad, where all errors are represented by \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.  A richer\n error monad can be built using the \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Maybe",
          "package": "protocol-buffers",
          "type": "data"
        },
        "index": {
          "description": "The Maybe type encapsulates an optional value value of type Maybe either contains value of type represented as Just or it is empty represented as Nothing Using Maybe is good way to deal with errors or exceptional cases without resorting to drastic measures such as error The Maybe type is also monad It is simple kind of error monad where all errors are represented by Nothing richer error monad can be built using the Either type",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Maybe",
          "package": "protocol-buffers",
          "partial": "Maybe",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMergeable\u003c/a\u003e\u003c/code\u003e class is not a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003emergeEmpty\u003c/code\u003e is not a\n left or right unit like \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e.  The default \u003ccode\u003e\u003ca\u003emergeAppend\u003c/a\u003e\u003c/code\u003e is to\n take the second parameter and discard the first one.  The\n \u003ccode\u003e\u003ca\u003emergeConcat\u003c/a\u003e\u003c/code\u003e defaults to \u003ccode\u003efoldl\u003c/code\u003e associativity.\n\u003c/p\u003e\u003cp\u003eNOTE: \u003ccode\u003emergeEmpty\u003c/code\u003e has been removed in protocol buffers version 2.\n Use defaultValue instead.  New strict fields would mean that required\n fields in messages will be automatic errors with \u003ccode\u003emergeEmpty\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Mergeable",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Basic.html#Mergeable",
          "type": "class"
        },
        "index": {
          "description": "The Mergeable class is not Monoid mergeEmpty is not left or right unit like mempty The default mergeAppend is to take the second parameter and discard the first one The mergeConcat defaults to foldl associativity NOTE mergeEmpty has been removed in protocol buffers version Use defaultValue instead New strict fields would mean that required fields in messages will be automatic errors with mergeEmpty",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Mergeable",
          "package": "protocol-buffers",
          "partial": "Mergeable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Mergeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral-purpose finite sequences.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Seq",
          "package": "protocol-buffers",
          "type": "data"
        },
        "index": {
          "description": "General-purpose finite sequences",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Seq",
          "package": "protocol-buffers",
          "partial": "Seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eUtf8\u003c/a\u003e\u003c/code\u003e is used to mark \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values that (should) contain\n valud utf8 encoded strings.  This type is used to represent\n \u003ccode\u003eTYPE_STRING\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Utf8",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Basic.html#Utf8",
          "type": "newtype"
        },
        "index": {
          "description": "Utf8 is used to mark ByteString values that should contain valud utf8 encoded strings This type is used to represent TYPE STRING values",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Utf8",
          "package": "protocol-buffers",
          "partial": "Utf",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Utf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWireSize\u003c/a\u003e\u003c/code\u003e is the Int64 size type associate with the lazy\n bytestrings used in the \u003ccode\u003ePut\u003c/code\u003e and \u003ccode\u003eGet\u003c/code\u003e monads.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "WireSize",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Basic.html#WireSize",
          "type": "type"
        },
        "index": {
          "description": "WireSize is the Int64 size type associate with the lazy bytestrings used in the Put and Get monads",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "WireSize",
          "package": "protocol-buffers",
          "partial": "Wire Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:WireSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWireTag\u003c/a\u003e\u003c/code\u003e is the 32 bit value with the upper 29 bits being the\n \u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e and the lower 3 bits being the \u003ccode\u003e\u003ca\u003eWireType\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "WireTag",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Basic.html#WireTag",
          "type": "newtype"
        },
        "index": {
          "description": "WireTag is the bit value with the upper bits being the FieldId and the lower bits being the WireType",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "WireTag",
          "package": "protocol-buffers",
          "partial": "Wire Tag",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:WireTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eWireType\u003c/a\u003e\u003c/code\u003e is the 3 bit wire encoding value, and is currently in\n the range 0 to 5, leaving 6 and 7 currently invalid.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 0 \u003cem\u003eVarint\u003c/em\u003e : int32, int64, uint32, uint64, sint32, sint64, bool, enum\n\u003c/li\u003e\u003cli\u003e 1 \u003cem\u003e64-bit\u003c/em\u003e : fixed64, sfixed64, double\n\u003c/li\u003e\u003cli\u003e 2 \u003cem\u003eLength-delimited\u003c/em\u003e : string, bytes, embedded messages\n\u003c/li\u003e\u003cli\u003e 3 \u003cem\u003eStart group\u003c/em\u003e : groups (deprecated)\n\u003c/li\u003e\u003cli\u003e 4 \u003cem\u003eEnd group\u003c/em\u003e : groups (deprecated)\n\u003c/li\u003e\u003cli\u003e 5 \u003cem\u003e32-bit\u003c/em\u003e : fixed32, sfixed32, float\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "WireType",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Basic.html#WireType",
          "type": "newtype"
        },
        "index": {
          "description": "WireType is the bit wire encoding value and is currently in the range to leaving and currently invalid Varint int32 int64 uint32 uint64 sint32 sint64 bool enum bit fixed64 sfixed64 double Length-delimited string bytes embedded messages Start group groups deprecated End group groups deprecated bit fixed32 sfixed32 float",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "WireType",
          "package": "protocol-buffers",
          "partial": "Wire Type",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:WireType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Word32",
          "package": "protocol-buffers",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Word32",
          "package": "protocol-buffers",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Word32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e64-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Word64",
          "package": "protocol-buffers",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Word64",
          "package": "protocol-buffers",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#t:Word64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "EnumCode",
          "package": "protocol-buffers",
          "signature": "EnumCode",
          "source": "src/Text-ProtocolBuffers-Basic.html#EnumCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "EnumCode",
          "package": "protocol-buffers",
          "partial": "Enum Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:EnumCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "FieldId",
          "package": "protocol-buffers",
          "signature": "FieldId",
          "source": "src/Text-ProtocolBuffers-Basic.html#FieldId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "FieldId",
          "package": "protocol-buffers",
          "partial": "Field Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:FieldId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "FieldType",
          "package": "protocol-buffers",
          "signature": "FieldType",
          "source": "src/Text-ProtocolBuffers-Basic.html#FieldType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "FieldType",
          "package": "protocol-buffers",
          "partial": "Field Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:FieldType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Utf8",
          "package": "protocol-buffers",
          "signature": "Utf8 ByteString",
          "source": "src/Text-ProtocolBuffers-Basic.html#Utf8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "Utf8",
          "package": "protocol-buffers",
          "partial": "Utf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:Utf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "WireTag",
          "package": "protocol-buffers",
          "signature": "WireTag",
          "source": "src/Text-ProtocolBuffers-Basic.html#WireTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "WireTag",
          "package": "protocol-buffers",
          "partial": "Wire Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:WireTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "WireType",
          "package": "protocol-buffers",
          "signature": "WireType",
          "source": "src/Text-ProtocolBuffers-Basic.html#WireType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "WireType",
          "package": "protocol-buffers",
          "partial": "Wire Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:WireType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edefaultValue\u003c/a\u003e\u003c/code\u003e is never undefined or an error to evalute.\n This makes it much more useful compared to \u003ccode\u003emergeEmpty\u003c/code\u003e. In a\n default message all Optional field values are set to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n and Repeated field values are empty.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "defaultValue",
          "package": "protocol-buffers",
          "signature": "a",
          "source": "src/Text-ProtocolBuffers-Basic.html#defaultValue",
          "type": "method"
        },
        "index": {
          "description": "The defaultValue is never undefined or an error to evalute This makes it much more useful compared to mergeEmpty In default message all Optional field values are set to Nothing and Repeated field values are empty",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "defaultValue",
          "package": "protocol-buffers",
          "partial": "Value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:defaultValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "getEnumCode",
          "package": "protocol-buffers",
          "signature": "Int32",
          "source": "src/Text-ProtocolBuffers-Basic.html#EnumCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "getEnumCode",
          "package": "protocol-buffers",
          "partial": "Enum Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:getEnumCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "getFieldId",
          "package": "protocol-buffers",
          "signature": "Int32",
          "source": "src/Text-ProtocolBuffers-Basic.html#FieldId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "getFieldId",
          "package": "protocol-buffers",
          "partial": "Field Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:getFieldId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "getFieldType",
          "package": "protocol-buffers",
          "signature": "Int",
          "source": "src/Text-ProtocolBuffers-Basic.html#FieldType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "getFieldType",
          "package": "protocol-buffers",
          "partial": "Field Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:getFieldType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "getWireTag",
          "package": "protocol-buffers",
          "signature": "Word32",
          "source": "src/Text-ProtocolBuffers-Basic.html#WireTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "getWireTag",
          "package": "protocol-buffers",
          "partial": "Wire Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:getWireTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "getWireType",
          "package": "protocol-buffers",
          "signature": "Word32",
          "source": "src/Text-ProtocolBuffers-Basic.html#WireType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "getWireType",
          "package": "protocol-buffers",
          "partial": "Wire Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:getWireType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "isValidUTF8",
          "package": "protocol-buffers",
          "signature": "ByteString -\u003e Maybe Int",
          "source": "src/Text-ProtocolBuffers-Basic.html#isValidUTF8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "isValidUTF8",
          "normalized": "ByteString-\u003eMaybe Int",
          "package": "protocol-buffers",
          "partial": "Valid UTF",
          "signature": "ByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:isValidUTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emergeAppend\u003c/a\u003e\u003c/code\u003e is the right-biased merge of two values.  A\n message (or group) is merged recursively.  Required field are\n always taken from the second message. Optional field values are\n taken from the most defined message or the second message if\n both are set.  Repeated fields have the sequences concatenated.\n Note that strings and bytes are NOT concatenated.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "mergeAppend",
          "package": "protocol-buffers",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Text-ProtocolBuffers-Basic.html#mergeAppend",
          "type": "method"
        },
        "index": {
          "description": "mergeAppend is the right-biased merge of two values message or group is merged recursively Required field are always taken from the second message Optional field values are taken from the most defined message or the second message if both are set Repeated fields have the sequences concatenated Note that strings and bytes are NOT concatenated",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "mergeAppend",
          "normalized": "a-\u003ea-\u003ea",
          "package": "protocol-buffers",
          "partial": "Append",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:mergeAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emergeConcat\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e F.foldl mergeAppend defaultValue \u003c/code\u003e and this\n default definition is not overridden in any of the code except\n for the (Seq a) instance.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "mergeConcat",
          "package": "protocol-buffers",
          "signature": "t a -\u003e a",
          "source": "src/Text-ProtocolBuffers-Basic.html#mergeConcat",
          "type": "method"
        },
        "index": {
          "description": "mergeConcat is F.foldl mergeAppend defaultValue and this default definition is not overridden in any of the code except for the Seq instance",
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "mergeConcat",
          "normalized": "a b-\u003eb",
          "package": "protocol-buffers",
          "partial": "Concat",
          "signature": "t a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:mergeConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "toUtf8",
          "package": "protocol-buffers",
          "signature": "ByteString -\u003e Either Int Utf8",
          "source": "src/Text-ProtocolBuffers-Basic.html#toUtf8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "toUtf8",
          "normalized": "ByteString-\u003eEither Int Utf",
          "package": "protocol-buffers",
          "partial": "Utf",
          "signature": "ByteString-\u003eEither Int Utf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:toUtf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "uFromString",
          "package": "protocol-buffers",
          "signature": "String -\u003e Utf8",
          "source": "src/Text-ProtocolBuffers-Basic.html#uFromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "uFromString",
          "normalized": "String-\u003eUtf",
          "package": "protocol-buffers",
          "partial": "From String",
          "signature": "String-\u003eUtf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:uFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "uToString",
          "package": "protocol-buffers",
          "signature": "Utf8 -\u003e String",
          "source": "src/Text-ProtocolBuffers-Basic.html#uToString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "uToString",
          "normalized": "Utf-\u003eString",
          "package": "protocol-buffers",
          "partial": "To String",
          "signature": "Utf-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:uToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Basic",
          "name": "utf8",
          "package": "protocol-buffers",
          "signature": "Utf8 -\u003e ByteString",
          "source": "src/Text-ProtocolBuffers-Basic.html#utf8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Basic",
          "module": "Text.ProtocolBuffers.Basic",
          "name": "utf8",
          "normalized": "Utf-\u003eByteString",
          "package": "protocol-buffers",
          "signature": "Utf-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Basic.html#v:utf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ca\u003eExtensions\u003c/a\u003e module contributes two main things.  The first\n is the definition and implementation of extensible message\n features.  This means that the \u003ccode\u003e\u003ca\u003eExtField\u003c/a\u003e\u003c/code\u003e data type is exported but\n its constructor is (in an ideal world) hidden.\n\u003c/p\u003e\u003cp\u003eThis first part also includes the keys for the extension fields:\n the \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e data type.  These are typically defined in code generated\n by \u003ccode\u003ehprotoc\u003c/code\u003e from '.proto' file definitions.\n\u003c/p\u003e\u003cp\u003eThe second main part is the \u003ccode\u003e\u003ca\u003eMessageAPI\u003c/a\u003e\u003c/code\u003e class which defines\n \u003ccode\u003e\u003ca\u003egetVal\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eisSet\u003c/a\u003e\u003c/code\u003e.  These allow uniform access to normal and\n extension fields for users.\n\u003c/p\u003e\u003cp\u003eAccess to extension fields is strictly though keys.  There is not\n currently any way to query or change or clear any other extension\n field data.\n\u003c/p\u003e\u003cp\u003eThis module is likely to get broken up into pieces.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "Extensions",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Extensions.html",
          "type": "module"
        },
        "index": {
          "description": "The Extensions module contributes two main things The first is the definition and implementation of extensible message features This means that the ExtField data type is exported but its constructor is in an ideal world hidden This first part also includes the keys for the extension fields the Key data type These are typically defined in code generated by hprotoc from proto file definitions The second main part is the MessageAPI class which defines getVal and isSet These allow uniform access to normal and extension fields for users Access to extension fields is strictly though keys There is not currently any way to query or change or clear any other extension field data This module is likely to get broken up into pieces",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "Extensions",
          "package": "protocol-buffers",
          "partial": "Extensions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "EP",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Extensions.html#EP",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "EP",
          "package": "protocol-buffers",
          "partial": "EP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:EP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtField is a newtype'd map from the numeric FieldId key to the\n ExtFieldValue.  This allows for the needed class instances.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtField",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Extensions.html#ExtField",
          "type": "newtype"
        },
        "index": {
          "description": "ExtField is newtype map from the numeric FieldId key to the ExtFieldValue This allows for the needed class instances",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtField",
          "package": "protocol-buffers",
          "partial": "Ext Field",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:ExtField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe WireType is used to ensure the Seq is homogenous.\n The ByteString is the unparsed input after the tag.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtFieldValue",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Extensions.html#ExtFieldValue",
          "type": "data"
        },
        "index": {
          "description": "The WireType is used to ensure the Seq is homogenous The ByteString is the unparsed input after the tag",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtFieldValue",
          "package": "protocol-buffers",
          "partial": "Ext Field Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:ExtFieldValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eExtKey\u003c/a\u003e\u003c/code\u003e class has three functions for user of the API:\n \u003ccode\u003e\u003ca\u003eputExt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetExt\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eclearExt\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003ewireGetKey\u003c/a\u003e\u003c/code\u003e is used in\n generated code.\n\u003c/p\u003e\u003cp\u003eThere are two instances of this class, \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e for optional message\n fields and \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e for repeated message fields.  This class allows\n for uniform treatment of these two kinds of extension fields.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtKey",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Extensions.html#ExtKey",
          "type": "class"
        },
        "index": {
          "description": "The ExtKey class has three functions for user of the API putExt getExt and clearExt The wireGetKey is used in generated code There are two instances of this class Maybe for optional message fields and Seq for repeated message fields This class allows for uniform treatment of these two kinds of extension fields",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtKey",
          "package": "protocol-buffers",
          "partial": "Ext Key",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:ExtKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eExtendMessage\u003c/a\u003e\u003c/code\u003e abstracts the operations of storing and\n retrieving the \u003ccode\u003e\u003ca\u003eExtField\u003c/a\u003e\u003c/code\u003e from the message, and provides the\n reflection needed to know the valid field numbers.\n\u003c/p\u003e\u003cp\u003eThis only used internally.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtendMessage",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Extensions.html#ExtendMessage",
          "type": "class"
        },
        "index": {
          "description": "ExtendMessage abstracts the operations of storing and retrieving the ExtField from the message and provides the reflection needed to know the valid field numbers This only used internally",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtendMessage",
          "package": "protocol-buffers",
          "partial": "Extend Message",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:ExtendMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eGPWitness\u003c/code\u003e GADTs use \u003ccode\u003e\u003ca\u003eGPB\u003c/a\u003e\u003c/code\u003e as a shorthand for many\n classes.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "GPB",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Extensions.html#GPB",
          "type": "class"
        },
        "index": {
          "description": "The Key and GPWitness GADTs use GPB as shorthand for many classes",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "GPB",
          "package": "protocol-buffers",
          "partial": "GPB",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:GPB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e data type is used with the \u003ccode\u003e\u003ca\u003eExtKey\u003c/a\u003e\u003c/code\u003e class to put, get,\n and clear external fields of messages.  The \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e can also be used\n with the \u003ccode\u003eMessagesAPI\u003c/code\u003e to get a possibly default value and to check\n whether a key has been set in a message.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e type (opaque to the user) has a phantom type of Maybe\n or Seq that corresponds to Optional or Repeated fields. And a\n second phantom type that matches the message type it must be used\n with.  The third type parameter corresonds to the Haskell value\n type.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e is a GADT that puts all the needed class instances into\n scope.  The actual content is the \u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e ( numeric key), the\n \u003ccode\u003e\u003ca\u003eFieldType\u003c/a\u003e\u003c/code\u003e (for sanity checks), and \u003ccode\u003eMaybe v\u003c/code\u003e (a non-standard\n default value).\n\u003c/p\u003e\u003cp\u003eWhen code is generated all of the known keys are taken into account\n in the deserialization from the wire.  Unknown extension fields are\n read as a collection of raw byte sequences.  If a key is then\n presented it will be used to parse the bytes.\n\u003c/p\u003e\u003cp\u003eThere is no guarantee for what happens if two Keys disagree about\n the type of a field; in particular there may be undefined values\n and runtime errors.  The data constructor for \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e has to be\n exported to the generated code, but is not exposed to the user by\n \u003ca\u003eText.ProtocolBuffers\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "Key",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Extensions.html#Key",
          "type": "data"
        },
        "index": {
          "description": "The Key data type is used with the ExtKey class to put get and clear external fields of messages The Key can also be used with the MessagesAPI to get possibly default value and to check whether key has been set in message The Key type opaque to the user has phantom type of Maybe or Seq that corresponds to Optional or Repeated fields And second phantom type that matches the message type it must be used with The third type parameter corresonds to the Haskell value type The Key is GADT that puts all the needed class instances into scope The actual content is the FieldId numeric key the FieldType for sanity checks and Maybe non-standard default value When code is generated all of the known keys are taken into account in the deserialization from the wire Unknown extension fields are read as collection of raw byte sequences If key is then presented it will be used to parse the bytes There is no guarantee for what happens if two Keys disagree about the type of field in particular there may be undefined values and runtime errors The data constructor for Key has to be exported to the generated code but is not exposed to the user by Text.ProtocolBuffers",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "Key",
          "package": "protocol-buffers",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "MessageAPI",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Extensions.html#MessageAPI",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "MessageAPI",
          "package": "protocol-buffers",
          "partial": "Message API",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:MessageAPI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePackedSeq\u003c/a\u003e\u003c/code\u003e is needed to distinguish the packed repeated format from the repeated format.\n This is only used in the phantom type of Key.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "PackedSeq",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Extensions.html#PackedSeq",
          "type": "newtype"
        },
        "index": {
          "description": "The PackedSeq is needed to distinguish the packed repeated format from the repeated format This is only used in the phantom type of Key",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "PackedSeq",
          "package": "protocol-buffers",
          "partial": "Packed Seq",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#t:PackedSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "EP",
          "package": "protocol-buffers",
          "signature": "EP !WireType !ByteString",
          "source": "src/Text-ProtocolBuffers-Extensions.html#EP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "EP",
          "package": "protocol-buffers",
          "partial": "EP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:EP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtField",
          "package": "protocol-buffers",
          "signature": "ExtField (Map FieldId ExtFieldValue)",
          "source": "src/Text-ProtocolBuffers-Extensions.html#ExtField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtField",
          "package": "protocol-buffers",
          "partial": "Ext Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:ExtField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtFromWire",
          "package": "protocol-buffers",
          "signature": "ExtFromWire !(Seq EP)",
          "source": "src/Text-ProtocolBuffers-Extensions.html#ExtFieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtFromWire",
          "package": "protocol-buffers",
          "partial": "Ext From Wire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:ExtFromWire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtOptional",
          "package": "protocol-buffers",
          "signature": "ExtOptional !FieldType !GPDyn",
          "source": "src/Text-ProtocolBuffers-Extensions.html#ExtFieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtOptional",
          "package": "protocol-buffers",
          "partial": "Ext Optional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:ExtOptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtPacked",
          "package": "protocol-buffers",
          "signature": "ExtPacked !FieldType !GPDynSeq",
          "source": "src/Text-ProtocolBuffers-Extensions.html#ExtFieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtPacked",
          "package": "protocol-buffers",
          "partial": "Ext Packed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:ExtPacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtRepeated",
          "package": "protocol-buffers",
          "signature": "ExtRepeated !FieldType !GPDynSeq",
          "source": "src/Text-ProtocolBuffers-Extensions.html#ExtFieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "ExtRepeated",
          "package": "protocol-buffers",
          "partial": "Ext Repeated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:ExtRepeated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "Key",
          "package": "protocol-buffers",
          "signature": "FieldId -\u003e FieldType -\u003e Maybe v -\u003e Key c msg v",
          "source": "src/Text-ProtocolBuffers-Extensions.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "Key",
          "normalized": "FieldId-\u003eFieldType-\u003eMaybe a-\u003eKey b c a",
          "package": "protocol-buffers",
          "partial": "Key",
          "signature": "FieldId-\u003eFieldType-\u003eMaybe v-\u003eKey c msg v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "PackedSeq",
          "package": "protocol-buffers",
          "signature": "PackedSeq",
          "source": "src/Text-ProtocolBuffers-Extensions.html#PackedSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "PackedSeq",
          "package": "protocol-buffers",
          "partial": "Packed Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:PackedSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "clearExt",
          "package": "protocol-buffers",
          "signature": "Key c msg v -\u003e msg -\u003e msg",
          "source": "src/Text-ProtocolBuffers-Extensions.html#clearExt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "clearExt",
          "normalized": "Key a b c-\u003eb-\u003eb",
          "package": "protocol-buffers",
          "partial": "Ext",
          "signature": "Key c msg v-\u003emsg-\u003emsg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:clearExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the key in the message.  Optional have type \u003ccode\u003e(Key Maybe\n msg v)\u003c/code\u003e and return type \u003ccode\u003e(Maybe v)\u003c/code\u003e while repeated fields have\n type \u003ccode\u003e(Key Seq msg v)\u003c/code\u003e and return type \u003ccode\u003e(Seq v)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThere are a few sources of errors with the lookup of the key:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It may find unparsed bytes from loading the message. \u003ccode\u003e\u003ca\u003egetExt\u003c/a\u003e\u003c/code\u003e\n  will attempt to parse the bytes as the key's value type, and\n  may fail.  The parsing is done with the \u003ccode\u003eparseWireExt\u003c/code\u003e method\n  (which is not exported to user API).\n\u003c/li\u003e\u003cli\u003e The wrong optional-key versus repeated-key type is a failure\n\u003c/li\u003e\u003cli\u003e The wrong type of the value might be found in the map and\n  * cause a failure\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe failures above should only happen if two different keys are\n used with the same field number.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "getExt",
          "package": "protocol-buffers",
          "signature": "Key c msg v -\u003e msg -\u003e Either String (c v)",
          "source": "src/Text-ProtocolBuffers-Extensions.html#getExt",
          "type": "method"
        },
        "index": {
          "description": "Access the key in the message Optional have type Key Maybe msg and return type Maybe while repeated fields have type Key Seq msg and return type Seq There are few sources of errors with the lookup of the key It may find unparsed bytes from loading the message getExt will attempt to parse the bytes as the key value type and may fail The parsing is done with the parseWireExt method which is not exported to user API The wrong optional-key versus repeated-key type is failure The wrong type of the value might be found in the map and cause failure The failures above should only happen if two different keys are used with the same field number",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "getExt",
          "normalized": "Key a b c-\u003eb-\u003eEither String(a c)",
          "package": "protocol-buffers",
          "partial": "Ext",
          "signature": "Key c msg v-\u003emsg-\u003eEither String(c v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:getExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "getExtField",
          "package": "protocol-buffers",
          "signature": "msg -\u003e ExtField",
          "source": "src/Text-ProtocolBuffers-Extensions.html#getExtField",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "getExtField",
          "normalized": "a-\u003eExtField",
          "package": "protocol-buffers",
          "partial": "Ext Field",
          "signature": "msg-\u003eExtField",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:getExtField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis will return the default value for a given \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e, which is\n set in the '.proto' file, or if unset it is the \u003ccode\u003e\u003ca\u003edefaultValue\u003c/a\u003e\u003c/code\u003e of\n that type.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "getKeyDefaultValue",
          "package": "protocol-buffers",
          "signature": "Key c msg v -\u003e v",
          "source": "src/Text-ProtocolBuffers-Extensions.html#getKeyDefaultValue",
          "type": "function"
        },
        "index": {
          "description": "This will return the default value for given Key which is set in the proto file or if unset it is the defaultValue of that type",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "getKeyDefaultValue",
          "normalized": "Key a b c-\u003ec",
          "package": "protocol-buffers",
          "partial": "Key Default Value",
          "signature": "Key c msg v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:getKeyDefaultValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis allows reflection, in this case it gives the numerical\n \u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e of the key, from 1 to 2^29-1 (excluding 19,000 through\n 19,999).\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "getKeyFieldId",
          "package": "protocol-buffers",
          "signature": "Key c msg v -\u003e FieldId",
          "source": "src/Text-ProtocolBuffers-Extensions.html#getKeyFieldId",
          "type": "function"
        },
        "index": {
          "description": "This allows reflection in this case it gives the numerical FieldId of the key from to excluding through",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "getKeyFieldId",
          "normalized": "Key a b c-\u003eFieldId",
          "package": "protocol-buffers",
          "partial": "Key Field Id",
          "signature": "Key c msg v-\u003eFieldId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:getKeyFieldId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis allows reflection, in this case it gives the \u003ccode\u003e\u003ca\u003eFieldType\u003c/a\u003e\u003c/code\u003e\n enumeration value (1 to 18) of the\n \u003ca\u003eText.DescriptorProtos.FieldDescriptorProto.Type\u003c/a\u003e of the field.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "getKeyFieldType",
          "package": "protocol-buffers",
          "signature": "Key c msg v -\u003e FieldType",
          "source": "src/Text-ProtocolBuffers-Extensions.html#getKeyFieldType",
          "type": "function"
        },
        "index": {
          "description": "This allows reflection in this case it gives the FieldType enumeration value to of the Text.DescriptorProtos.FieldDescriptorProto.Type of the field",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "getKeyFieldType",
          "normalized": "Key a b c-\u003eFieldType",
          "package": "protocol-buffers",
          "partial": "Key Field Type",
          "signature": "Key c msg v-\u003eFieldType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:getKeyFieldType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess data in a message.  The first argument is always the\n message.  The second argument can be one of 4 categories.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The field name of a required field acts a simple retrieval of\n the data from the message.\n\u003c/li\u003e\u003cli\u003e The field name of an optional field will retreive the data if\n it is set or lookup the default value if it is not set.\n\u003c/li\u003e\u003cli\u003e The field name of a repeated field always retrieves the\n (possibly empty) \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e of values.\n\u003c/li\u003e\u003cli\u003e A Key for an optional or repeated value will act as the field\n name does above, but if there is a type mismatch or parse error\n it will use the defaultValue for optional types and an empty\n sequence for repeated types.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "getVal",
          "package": "protocol-buffers",
          "signature": "msg -\u003e a -\u003e b",
          "source": "src/Text-ProtocolBuffers-Extensions.html#getVal",
          "type": "method"
        },
        "index": {
          "description": "Access data in message The first argument is always the message The second argument can be one of categories The field name of required field acts simple retrieval of the data from the message The field name of an optional field will retreive the data if it is set or lookup the default value if it is not set The field name of repeated field always retrieves the possibly empty Seq of values Key for an optional or repeated value will act as the field name does above but if there is type mismatch or parse error it will use the defaultValue for optional types and an empty sequence for repeated types",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "getVal",
          "normalized": "a-\u003eb-\u003ec",
          "package": "protocol-buffers",
          "partial": "Val",
          "signature": "msg-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:getVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether data is present in the message.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Required fields always return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Optional fields return whether a value is present.\n\u003c/li\u003e\u003cli\u003e Repeated field return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if there are no values, otherwise\n they return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Keys return as optional or repeated, but checks only if the\n field # is present.  This assumes that there are no collisions\n where more that one key refers to the same field number of this\n message type.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "isSet",
          "package": "protocol-buffers",
          "signature": "msg -\u003e a -\u003e Bool",
          "source": "src/Text-ProtocolBuffers-Extensions.html#isSet",
          "type": "method"
        },
        "index": {
          "description": "Check whether data is present in the message Required fields always return True Optional fields return whether value is present Repeated field return False if there are no values otherwise they return True Keys return as optional or repeated but checks only if the field is present This assumes that there are no collisions where more that one key refers to the same field number of this message type",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "isSet",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "protocol-buffers",
          "partial": "Set",
          "signature": "msg-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:isSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget a value from the wire into the message's ExtField. This is used by generated code for\n extensions that were not known at compile time.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "loadExtension",
          "package": "protocol-buffers",
          "signature": "FieldId -\u003e WireType -\u003e a -\u003e Get a",
          "source": "src/Text-ProtocolBuffers-Extensions.html#loadExtension",
          "type": "function"
        },
        "index": {
          "description": "get value from the wire into the message ExtField This is used by generated code for extensions that were not known at compile time",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "loadExtension",
          "normalized": "FieldId-\u003eWireType-\u003ea-\u003eGet a",
          "package": "protocol-buffers",
          "partial": "Extension",
          "signature": "FieldId-\u003eWireType-\u003ea-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:loadExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "notExtension",
          "package": "protocol-buffers",
          "signature": "FieldId -\u003e WireType -\u003e a -\u003e Get a",
          "source": "src/Text-ProtocolBuffers-Extensions.html#notExtension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "notExtension",
          "normalized": "FieldId-\u003eWireType-\u003ea-\u003eGet a",
          "package": "protocol-buffers",
          "partial": "Extension",
          "signature": "FieldId-\u003eWireType-\u003ea-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:notExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange or clear the value of a key in a message. Passing\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e with an optional key or an empty \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003e with a repeated\n key clears the value.  This function thus maintains the invariant\n that having a field number in the \u003ccode\u003e\u003ca\u003eExtField\u003c/a\u003e\u003c/code\u003e map means that the\n field is set and not empty.\n\u003c/p\u003e\u003cp\u003eThis should be only way to set the contents of a extension field.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "putExt",
          "package": "protocol-buffers",
          "signature": "Key c msg v -\u003e c v -\u003e msg -\u003e msg",
          "source": "src/Text-ProtocolBuffers-Extensions.html#putExt",
          "type": "method"
        },
        "index": {
          "description": "Change or clear the value of key in message Passing Nothing with an optional key or an empty Seq with repeated key clears the value This function thus maintains the invariant that having field number in the ExtField map means that the field is set and not empty This should be only way to set the contents of extension field",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "putExt",
          "normalized": "Key a b c-\u003ea c-\u003eb-\u003eb",
          "package": "protocol-buffers",
          "partial": "Ext",
          "signature": "Key c msg v-\u003ec v-\u003emsg-\u003emsg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:putExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "putExtField",
          "package": "protocol-buffers",
          "signature": "ExtField -\u003e msg -\u003e msg",
          "source": "src/Text-ProtocolBuffers-Extensions.html#putExtField",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "putExtField",
          "normalized": "ExtField-\u003ea-\u003ea",
          "package": "protocol-buffers",
          "partial": "Ext Field",
          "signature": "ExtField-\u003emsg-\u003emsg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:putExtField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "unPackedSeq",
          "package": "protocol-buffers",
          "signature": "Seq a",
          "source": "src/Text-ProtocolBuffers-Extensions.html#PackedSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "unPackedSeq",
          "package": "protocol-buffers",
          "partial": "Packed Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:unPackedSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "validExtRanges",
          "package": "protocol-buffers",
          "signature": "msg -\u003e [(FieldId, FieldId)]",
          "source": "src/Text-ProtocolBuffers-Extensions.html#validExtRanges",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "validExtRanges",
          "normalized": "a-\u003e[(FieldId,FieldId)]",
          "package": "protocol-buffers",
          "partial": "Ext Ranges",
          "signature": "msg-\u003e[(FieldId,FieldId)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:validExtRanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "wireGetKey",
          "package": "protocol-buffers",
          "signature": "Key c msg v -\u003e msg -\u003e Get msg",
          "source": "src/Text-ProtocolBuffers-Extensions.html#wireGetKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "wireGetKey",
          "normalized": "Key a b c-\u003eb-\u003eGet b",
          "package": "protocol-buffers",
          "partial": "Get Key",
          "signature": "Key c msg v-\u003emsg-\u003eGet msg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:wireGetKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "wireGetKeyToPacked",
          "package": "protocol-buffers",
          "signature": "Key PackedSeq msg v -\u003e msg -\u003e Get msg",
          "source": "src/Text-ProtocolBuffers-Extensions.html#wireGetKeyToPacked",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "wireGetKeyToPacked",
          "normalized": "Key PackedSeq a b-\u003ea-\u003eGet a",
          "package": "protocol-buffers",
          "partial": "Get Key To Packed",
          "signature": "Key PackedSeq msg v-\u003emsg-\u003eGet msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:wireGetKeyToPacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "wireGetKeyToUnPacked",
          "package": "protocol-buffers",
          "signature": "Key Seq msg v -\u003e msg -\u003e Get msg",
          "source": "src/Text-ProtocolBuffers-Extensions.html#wireGetKeyToUnPacked",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "wireGetKeyToUnPacked",
          "normalized": "Key Seq a b-\u003ea-\u003eGet a",
          "package": "protocol-buffers",
          "partial": "Get Key To Un Packed",
          "signature": "Key Seq msg v-\u003emsg-\u003eGet msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:wireGetKeyToUnPacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is used by the generated code. The data is serialized in\n order of increasing field number.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "wirePutExtField",
          "package": "protocol-buffers",
          "signature": "ExtField -\u003e Put",
          "source": "src/Text-ProtocolBuffers-Extensions.html#wirePutExtField",
          "type": "function"
        },
        "index": {
          "description": "This is used by the generated code The data is serialized in order of increasing field number",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "wirePutExtField",
          "normalized": "ExtField-\u003ePut",
          "package": "protocol-buffers",
          "partial": "Put Ext Field",
          "signature": "ExtField-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:wirePutExtField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is used by the generated code\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "wireSizeExtField",
          "package": "protocol-buffers",
          "signature": "ExtField -\u003e WireSize",
          "source": "src/Text-ProtocolBuffers-Extensions.html#wireSizeExtField",
          "type": "function"
        },
        "index": {
          "description": "This is used by the generated code",
          "hierarchy": "Text ProtocolBuffers Extensions",
          "module": "Text.ProtocolBuffers.Extensions",
          "name": "wireSizeExtField",
          "normalized": "ExtField-\u003eWireSize",
          "package": "protocol-buffers",
          "partial": "Size Ext Field",
          "signature": "ExtField-\u003eWireSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Extensions.html#v:wireSizeExtField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBy Chris Kuklewicz, drawing heavily from binary and binary-strict,\n but all the bugs are my own.\n\u003c/p\u003e\u003cp\u003eThis file is under the usual BSD3 licence, copyright 2008.\n\u003c/p\u003e\u003cp\u003eModified the monad to be strict for version 2.0.0\n\u003c/p\u003e\u003cp\u003eThis started out as an improvement to\n \u003ca\u003eData.Binary.Strict.IncrementalGet\u003c/a\u003e with slightly better internals.\n The simplified \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erunGet\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e trio with the\n \u003ca\u003eData.Binary.Strict.Class.BinaryParser\u003c/a\u003e instance are an _untested_\n upgrade from IncrementalGet.  Especially untested are the\n strictness properties.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e usefully implements Applicative and Monad, MonadError,\n Alternative and MonadPlus.  Unhandled errors are reported along\n with the number of bytes successfully consumed.  Effects of\n \u003ccode\u003esuspend\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eputAvailable\u003c/a\u003e\u003c/code\u003e are visible after\n fail\u003cem\u003ethrowError\u003c/em\u003emzero.\n\u003c/p\u003e\u003cp\u003eEach time the parser reaches the end of the input it will return a\n Partial wrapped continuation which requests a (Maybe\n Lazy.ByteString).  Passing (Just bs) will append bs to the input so\n far and continue processing.  If you pass Nothing to the\n continuation then you are declaring that there will never be more\n input and that the parser should never again return a partial\n contination; it should return failure or finished.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esuspendUntilComplete\u003c/a\u003e\u003c/code\u003e repeatedly uses a partial continuation to\n ask for more input until \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is passed and then it proceeds\n with parsing.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetAvailable\u003c/a\u003e\u003c/code\u003e command returns the lazy byte string the parser\n has remaining before calling \u003ccode\u003esuspend\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eputAvailable\u003c/a\u003e\u003c/code\u003e\n replaces this input and is a bit fancy: it also replaces the input\n at the current offset for all the potential catchError/mplus\n handlers.  This change is _not_ reverted by fail\u003cem\u003ethrowError\u003c/em\u003emzero.\n\u003c/p\u003e\u003cp\u003eThe three \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elookAheadM\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elookAheadE\u003c/a\u003e\u003c/code\u003e functions are\n very similar to the ones in binary's Data.Binary.Get.\n\u003c/p\u003e\u003cp\u003eAdd specialized high-bit-run\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "Get",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Get.html",
          "type": "module"
        },
        "index": {
          "description": "By Chris Kuklewicz drawing heavily from binary and binary-strict but all the bugs are my own This file is under the usual BSD3 licence copyright Modified the monad to be strict for version This started out as an improvement to Data.Binary.Strict.IncrementalGet with slightly better internals The simplified Get runGet Result trio with the Data.Binary.Strict.Class.BinaryParser instance are an untested upgrade from IncrementalGet Especially untested are the strictness properties Get usefully implements Applicative and Monad MonadError Alternative and MonadPlus Unhandled errors are reported along with the number of bytes successfully consumed Effects of suspend and putAvailable are visible after fail throwError mzero Each time the parser reaches the end of the input it will return Partial wrapped continuation which requests Maybe Lazy.ByteString Passing Just bs will append bs to the input so far and continue processing If you pass Nothing to the continuation then you are declaring that there will never be more input and that the parser should never again return partial contination it should return failure or finished suspendUntilComplete repeatedly uses partial continuation to ask for more input until Nothing is passed and then it proceeds with parsing The getAvailable command returns the lazy byte string the parser has remaining before calling suspend The putAvailable replaces this input and is bit fancy it also replaces the input at the current offset for all the potential catchError mplus handlers This change is not reverted by fail throwError mzero The three lookAhead and lookAheadM and lookAheadE functions are very similar to the ones in binary Data.Binary.Get Add specialized high-bit-run",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "Get",
          "package": "protocol-buffers",
          "partial": "Get",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "Get",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Get.html#Get",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "Get",
          "package": "protocol-buffers",
          "partial": "Get",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#t:Get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "Result",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Get.html#Result",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "Result",
          "package": "protocol-buffers",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "Failed",
          "package": "protocol-buffers",
          "signature": "Failed !Int64 String",
          "source": "src/Text-ProtocolBuffers-Get.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "Failed",
          "package": "protocol-buffers",
          "partial": "Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:Failed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "Finished",
          "package": "protocol-buffers",
          "signature": "Finished !ByteString !Int64 a",
          "source": "src/Text-ProtocolBuffers-Get.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "Finished",
          "package": "protocol-buffers",
          "partial": "Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:Finished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "Partial",
          "package": "protocol-buffers",
          "signature": "Partial (Maybe ByteString -\u003e Result a)",
          "source": "src/Text-ProtocolBuffers-Get.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "Partial",
          "normalized": "Partial(Maybe ByteString-\u003eResult a)",
          "package": "protocol-buffers",
          "partial": "Partial",
          "signature": "Partial(Maybe ByteString-\u003eResult a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of \u003ccode\u003e\u003ca\u003ebytesRead\u003c/a\u003e\u003c/code\u003e so far.  Initially 0, never negative.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "bytesRead",
          "package": "protocol-buffers",
          "signature": "Get Int64",
          "source": "src/Text-ProtocolBuffers-Get.html#bytesRead",
          "type": "function"
        },
        "index": {
          "description": "Return the number of bytesRead so far Initially never negative",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "bytesRead",
          "package": "protocol-buffers",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:bytesRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "decode7",
          "package": "protocol-buffers",
          "signature": "Get s",
          "source": "src/Text-ProtocolBuffers-Get.html#decode7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "decode7",
          "package": "protocol-buffers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:decode7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "decode7size",
          "package": "protocol-buffers",
          "signature": "Get Int64",
          "source": "src/Text-ProtocolBuffers-Get.html#decode7size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "decode7size",
          "package": "protocol-buffers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:decode7size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "decode7unrolled",
          "package": "protocol-buffers",
          "signature": "Get s",
          "source": "src/Text-ProtocolBuffers-Get.html#decode7unrolled",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "decode7unrolled",
          "package": "protocol-buffers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:decode7unrolled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echeck that there are at least \u003ccode\u003en\u003c/code\u003e bytes available in the input.\n This will suspend if there is to little data.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "ensureBytes",
          "package": "protocol-buffers",
          "signature": "Int64 -\u003e Get ()",
          "source": "src/Text-ProtocolBuffers-Get.html#ensureBytes",
          "type": "function"
        },
        "index": {
          "description": "check that there are at least bytes available in the input This will suspend if there is to little data",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "ensureBytes",
          "normalized": "Int-\u003eGet()",
          "package": "protocol-buffers",
          "partial": "Bytes",
          "signature": "Int-\u003eGet()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:ensureBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the input currently available to the parser.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getAvailable",
          "package": "protocol-buffers",
          "signature": "Get ByteString",
          "source": "src/Text-ProtocolBuffers-Get.html#getAvailable",
          "type": "function"
        },
        "index": {
          "description": "Get the input currently available to the parser",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getAvailable",
          "package": "protocol-buffers",
          "partial": "Available",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull \u003ccode\u003en\u003c/code\u003e bytes from the input, as a strict ByteString.  This will\n suspend if there is too little data.  If the result spans multiple\n lazy chunks then the result occupies a freshly allocated strict\n bytestring, otherwise it fits in a single chunk and refers to the\n same immutable memory block as the whole chunk.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getByteString",
          "package": "protocol-buffers",
          "signature": "Int -\u003e Get ByteString",
          "source": "src/Text-ProtocolBuffers-Get.html#getByteString",
          "type": "function"
        },
        "index": {
          "description": "Pull bytes from the input as strict ByteString This will suspend if there is too little data If the result spans multiple lazy chunks then the result occupies freshly allocated strict bytestring otherwise it fits in single chunk and refers to the same immutable memory block as the whole chunk",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getByteString",
          "normalized": "Int-\u003eGet ByteString",
          "package": "protocol-buffers",
          "partial": "Byte String",
          "signature": "Int-\u003eGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull \u003ccode\u003en\u003c/code\u003e bytes from the input, as a lazy ByteString.  This will\n suspend if there is too little data.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getLazyByteString",
          "package": "protocol-buffers",
          "signature": "Int64 -\u003e Get ByteString",
          "source": "src/Text-ProtocolBuffers-Get.html#getLazyByteString",
          "type": "function"
        },
        "index": {
          "description": "Pull bytes from the input as lazy ByteString This will suspend if there is too little data",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getLazyByteString",
          "normalized": "Int-\u003eGet ByteString",
          "package": "protocol-buffers",
          "partial": "Lazy Byte String",
          "signature": "Int-\u003eGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "getStorable",
          "package": "protocol-buffers",
          "signature": "Get a",
          "source": "src/Text-ProtocolBuffers-Get.html#getStorable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getStorable",
          "package": "protocol-buffers",
          "partial": "Storable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getStorable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord16be",
          "package": "protocol-buffers",
          "signature": "Get Word16",
          "source": "src/Text-ProtocolBuffers-Get.html#getWord16be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord16be",
          "package": "protocol-buffers",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord16be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord16host",
          "package": "protocol-buffers",
          "signature": "Get Word16",
          "source": "src/Text-ProtocolBuffers-Get.html#getWord16host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord16host",
          "package": "protocol-buffers",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord16host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord16le",
          "package": "protocol-buffers",
          "signature": "Get Word16",
          "source": "src/Text-ProtocolBuffers-Get.html#getWord16le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord16le",
          "package": "protocol-buffers",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord16le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord32be",
          "package": "protocol-buffers",
          "signature": "Get Word32",
          "source": "src/Text-ProtocolBuffers-Get.html#getWord32be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord32be",
          "package": "protocol-buffers",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord32host",
          "package": "protocol-buffers",
          "signature": "Get Word32",
          "source": "src/Text-ProtocolBuffers-Get.html#getWord32host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord32host",
          "package": "protocol-buffers",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord32le",
          "package": "protocol-buffers",
          "signature": "Get Word32",
          "source": "src/Text-ProtocolBuffers-Get.html#getWord32le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord32le",
          "package": "protocol-buffers",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord64be",
          "package": "protocol-buffers",
          "signature": "Get Word64",
          "source": "src/Text-ProtocolBuffers-Get.html#getWord64be",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord64be",
          "package": "protocol-buffers",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord64host",
          "package": "protocol-buffers",
          "signature": "Get Word64",
          "source": "src/Text-ProtocolBuffers-Get.html#getWord64host",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord64host",
          "package": "protocol-buffers",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord64le",
          "package": "protocol-buffers",
          "signature": "Get Word64",
          "source": "src/Text-ProtocolBuffers-Get.html#getWord64le",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord64le",
          "package": "protocol-buffers",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord8",
          "package": "protocol-buffers",
          "signature": "Get Word8",
          "source": "src/Text-ProtocolBuffers-Get.html#getWord8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWord8",
          "package": "protocol-buffers",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWordhost",
          "package": "protocol-buffers",
          "signature": "Get Word",
          "source": "src/Text-ProtocolBuffers-Get.html#getWordhost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "getWordhost",
          "package": "protocol-buffers",
          "partial": "Wordhost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:getWordhost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the longest prefix of the input where the high bit is set as well as following byte.\n This made getVarInt slower.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "highBitRun",
          "package": "protocol-buffers",
          "signature": "Get Int64",
          "source": "src/Text-ProtocolBuffers-Get.html#highBitRun",
          "type": "function"
        },
        "index": {
          "description": "get the longest prefix of the input where the high bit is set as well as following byte This made getVarInt slower",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "highBitRun",
          "package": "protocol-buffers",
          "partial": "Bit Run",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:highBitRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if the number of bytes \u003ccode\u003e\u003ca\u003eremaining\u003c/a\u003e\u003c/code\u003e is 0.  Any futher\n attempts to read an empty parser will call \u003ccode\u003esuspend\u003c/code\u003e which might\n result in more input to consume.\n\u003c/p\u003e\u003cp\u003eCompare with \u003ccode\u003e\u003ca\u003eisReallyEmpty\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "isEmpty",
          "package": "protocol-buffers",
          "signature": "Get Bool",
          "source": "src/Text-ProtocolBuffers-Get.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Return True if the number of bytes remaining is Any futher attempts to read an empty parser will call suspend which might result in more input to consume Compare with isReallyEmpty",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "isEmpty",
          "package": "protocol-buffers",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn True if the input is exhausted and will never be added to.\n Returns False if there is input left to consume.\n\u003c/p\u003e\u003cp\u003eCompare with \u003ccode\u003e\u003ca\u003eisEmpty\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "isReallyEmpty",
          "package": "protocol-buffers",
          "signature": "Get Bool",
          "source": "src/Text-ProtocolBuffers-Get.html#isReallyEmpty",
          "type": "function"
        },
        "index": {
          "description": "Return True if the input is exhausted and will never be added to Returns False if there is input left to consume Compare with isEmpty",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "isReallyEmpty",
          "package": "protocol-buffers",
          "partial": "Really Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:isReallyEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e runs the \u003ccode\u003etodo\u003c/code\u003e action and then rewinds only the\n BinaryParser state.  Any new input from \u003ccode\u003esuspend\u003c/code\u003e or changes from\n \u003ccode\u003e\u003ca\u003eputAvailable\u003c/a\u003e\u003c/code\u003e are kept.  Changes to the user state (MonadState)\n are kept.  The MonadWriter output is retained.\n\u003c/p\u003e\u003cp\u003eIf an error is thrown then the entire monad state is reset to last\n catchError as usual.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "lookAhead",
          "package": "protocol-buffers",
          "signature": "Get a -\u003e Get a",
          "source": "src/Text-ProtocolBuffers-Get.html#lookAhead",
          "type": "function"
        },
        "index": {
          "description": "lookAhead runs the todo action and then rewinds only the BinaryParser state Any new input from suspend or changes from putAvailable are kept Changes to the user state MonadState are kept The MonadWriter output is retained If an error is thrown then the entire monad state is reset to last catchError as usual",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "lookAhead",
          "normalized": "Get a-\u003eGet a",
          "package": "protocol-buffers",
          "partial": "Ahead",
          "signature": "Get a-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:lookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elookAheadE\u003c/a\u003e\u003c/code\u003e runs the \u003ccode\u003etodo\u003c/code\u003e action. If the action returns \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e then the \n BinaryParser state is rewound (as in \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e).  If the action return \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e then\n the BinaryParser is not rewound, and lookAheadE acts as an identity.\n\u003c/p\u003e\u003cp\u003eIf an error is thrown then the entire monad state is reset to last\n catchError as usual.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "lookAheadE",
          "package": "protocol-buffers",
          "signature": "Get (Either a b) -\u003e Get (Either a b)",
          "source": "src/Text-ProtocolBuffers-Get.html#lookAheadE",
          "type": "function"
        },
        "index": {
          "description": "lookAheadE runs the todo action If the action returns Left then the BinaryParser state is rewound as in lookAhead If the action return Right then the BinaryParser is not rewound and lookAheadE acts as an identity If an error is thrown then the entire monad state is reset to last catchError as usual",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "lookAheadE",
          "normalized": "Get(Either a b)-\u003eGet(Either a b)",
          "package": "protocol-buffers",
          "partial": "Ahead",
          "signature": "Get(Either a b)-\u003eGet(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:lookAheadE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elookAheadM\u003c/a\u003e\u003c/code\u003e runs the \u003ccode\u003etodo\u003c/code\u003e action. If the action returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e then the \n BinaryParser state is rewound (as in \u003ccode\u003e\u003ca\u003elookAhead\u003c/a\u003e\u003c/code\u003e).  If the action return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e then\n the BinaryParser is not rewound, and lookAheadM acts as an identity.\n\u003c/p\u003e\u003cp\u003eIf an error is thrown then the entire monad state is reset to last\n catchError as usual.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "lookAheadM",
          "package": "protocol-buffers",
          "signature": "Get (Maybe a) -\u003e Get (Maybe a)",
          "source": "src/Text-ProtocolBuffers-Get.html#lookAheadM",
          "type": "function"
        },
        "index": {
          "description": "lookAheadM runs the todo action If the action returns Nothing then the BinaryParser state is rewound as in lookAhead If the action return Just then the BinaryParser is not rewound and lookAheadM acts as an identity If an error is thrown then the entire monad state is reset to last catchError as usual",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "lookAheadM",
          "normalized": "Get(Maybe a)-\u003eGet(Maybe a)",
          "package": "protocol-buffers",
          "partial": "Ahead",
          "signature": "Get(Maybe a)-\u003eGet(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:lookAheadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eputAvailable\u003c/a\u003e\u003c/code\u003e replaces the bytestream past the current # of read\n bytes.  This will also affect pending MonadError handler and\n MonadPlus branches.  I think all pending branches have to have\n fewer bytesRead than the current one.  If this is wrong then an\n error will be thrown.\n\u003c/p\u003e\u003cp\u003eWARNING : \u003ccode\u003e\u003ca\u003eputAvailable\u003c/a\u003e\u003c/code\u003e is still untested.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "putAvailable",
          "package": "protocol-buffers",
          "signature": "ByteString -\u003e Get ()",
          "source": "src/Text-ProtocolBuffers-Get.html#putAvailable",
          "type": "function"
        },
        "index": {
          "description": "putAvailable replaces the bytestream past the current of read bytes This will also affect pending MonadError handler and MonadPlus branches think all pending branches have to have fewer bytesRead than the current one If this is wrong then an error will be thrown WARNING putAvailable is still untested",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "putAvailable",
          "normalized": "ByteString-\u003eGet()",
          "package": "protocol-buffers",
          "partial": "Available",
          "signature": "ByteString-\u003eGet()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:putAvailable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of bytes \u003ccode\u003e\u003ca\u003eremaining\u003c/a\u003e\u003c/code\u003e before the current input\n runs out and \u003ccode\u003esuspend\u003c/code\u003e might be called.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "remaining",
          "package": "protocol-buffers",
          "signature": "Get Int64",
          "source": "src/Text-ProtocolBuffers-Get.html#remaining",
          "type": "function"
        },
        "index": {
          "description": "Return the number of bytes remaining before the current input runs out and suspend might be called",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "remaining",
          "package": "protocol-buffers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:remaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunGet\u003c/a\u003e\u003c/code\u003e is the simple executor\n\u003c/p\u003e",
          "module": "[\"Text.ProtocolBuffers.Get\",\"Text.ProtocolBuffers.WireMessage\"]",
          "name": "runGet",
          "package": "protocol-buffers",
          "signature": "Get a -\u003e ByteString -\u003e Result a",
          "source": "src/Text-ProtocolBuffers-Get.html#runGet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:runGet\",\"http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:runGet\"]"
        },
        "index": {
          "description": "runGet is the simple executor",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "runGet",
          "normalized": "Get a-\u003eByteString-\u003eResult a",
          "package": "protocol-buffers",
          "partial": "Get",
          "signature": "Get a-\u003eByteString-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:runGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunGetAll\u003c/a\u003e\u003c/code\u003e is the simple executor, and will not ask for any continuation because this lazy bytestring is all the input\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "runGetAll",
          "package": "protocol-buffers",
          "signature": "Get a -\u003e ByteString -\u003e Result a",
          "source": "src/Text-ProtocolBuffers-Get.html#runGetAll",
          "type": "function"
        },
        "index": {
          "description": "runGetAll is the simple executor and will not ask for any continuation because this lazy bytestring is all the input",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "runGetAll",
          "normalized": "Get a-\u003eByteString-\u003eResult a",
          "package": "protocol-buffers",
          "partial": "Get All",
          "signature": "Get a-\u003eByteString-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:runGetAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscard the next \u003ccode\u003em\u003c/code\u003e bytes\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "skip",
          "package": "protocol-buffers",
          "signature": "Int64 -\u003e Get ()",
          "source": "src/Text-ProtocolBuffers-Get.html#skip",
          "type": "function"
        },
        "index": {
          "description": "Discard the next bytes",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "skip",
          "normalized": "Int-\u003eGet()",
          "package": "protocol-buffers",
          "signature": "Int-\u003eGet()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the longest prefix of the input where all the bytes satisfy the predicate.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "spanOf",
          "package": "protocol-buffers",
          "signature": "(Word8 -\u003e Bool) -\u003e Get ByteString",
          "source": "src/Text-ProtocolBuffers-Get.html#spanOf",
          "type": "function"
        },
        "index": {
          "description": "get the longest prefix of the input where all the bytes satisfy the predicate",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "spanOf",
          "normalized": "(Word-\u003eBool)-\u003eGet ByteString",
          "package": "protocol-buffers",
          "partial": "Of",
          "signature": "(Word-\u003eBool)-\u003eGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:spanOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep calling \u003ccode\u003esuspend\u003c/code\u003e until Nothing is passed to the \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e\n continuation.  This ensures all the data has been loaded into the\n state of the parser.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Get",
          "name": "suspendUntilComplete",
          "package": "protocol-buffers",
          "signature": "Get ()",
          "source": "src/Text-ProtocolBuffers-Get.html#suspendUntilComplete",
          "type": "function"
        },
        "index": {
          "description": "Keep calling suspend until Nothing is passed to the Partial continuation This ensures all the data has been loaded into the state of the parser",
          "hierarchy": "Text ProtocolBuffers Get",
          "module": "Text.ProtocolBuffers.Get",
          "name": "suspendUntilComplete",
          "normalized": "Get()",
          "package": "protocol-buffers",
          "partial": "Until Complete",
          "signature": "Get()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Get.html#v:suspendUntilComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis provides what is needed for the output of \u003ccode\u003ehprotoc\u003c/code\u003e to\n compile.  This and the Prelude will both be imported qualified as\n P', the prime ensuring no name conflicts are possible.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ProtocolBuffers.Header",
          "name": "Header",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Header.html",
          "type": "module"
        },
        "index": {
          "description": "This provides what is needed for the output of hprotoc to compile This and the Prelude will both be imported qualified as the prime ensuring no name conflicts are possible",
          "hierarchy": "Text ProtocolBuffers Header",
          "module": "Text.ProtocolBuffers.Header",
          "name": "Header",
          "package": "protocol-buffers",
          "partial": "Header",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn many situations, the \u003ccode\u003e\u003ca\u003eliftM\u003c/a\u003e\u003c/code\u003e operations can be replaced by uses of\n\u003ccode\u003e\u003ca\u003eap\u003c/a\u003e\u003c/code\u003e, which promotes function application. \n\u003c/p\u003e\u003cpre\u003e       return f `ap` x1 `ap` ... `ap` xn\n\u003c/pre\u003e\u003cp\u003eis equivalent to \n\u003c/p\u003e\u003cpre\u003e       liftMn f x1 x2 ... xn\n\u003c/pre\u003e",
          "module": "Text.ProtocolBuffers.Header",
          "name": "ap",
          "package": "protocol-buffers",
          "signature": "m (a -\u003e b) -\u003e m a -\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "In many situations the liftM operations can be replaced by uses of ap which promotes function application return ap x1 ap ap xn is equivalent to liftMn x1 x2 xn",
          "hierarchy": "Text ProtocolBuffers Header",
          "module": "Text.ProtocolBuffers.Header",
          "name": "ap",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "protocol-buffers",
          "signature": "m(a-\u003eb)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Header",
          "name": "append",
          "package": "protocol-buffers",
          "signature": "Seq a -\u003e a -\u003e Seq a",
          "source": "src/Text-ProtocolBuffers-Header.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Header",
          "module": "Text.ProtocolBuffers.Header",
          "name": "append",
          "normalized": "Seq a-\u003ea-\u003eSeq a",
          "package": "protocol-buffers",
          "signature": "Seq a-\u003ea-\u003eSeq a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handler function to handle previous errors and return to normal execution.\n    A common idiom is:\n\u003c/p\u003e\u003cpre\u003e do { action1; action2; action3 } `catchError` handler\n\u003c/pre\u003e\u003cp\u003ewhere the \u003ccode\u003eaction\u003c/code\u003e functions can call \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e.\n    Note that \u003ccode\u003ehandler\u003c/code\u003e and the do-block must have the same return type.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Header",
          "name": "catchError",
          "package": "protocol-buffers",
          "signature": "forall a.  m a -\u003e (e -\u003e m a) -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "handler function to handle previous errors and return to normal execution common idiom is do action1 action2 action3 catchError handler where the action functions can call throwError Note that handler and the do-block must have the same return type",
          "hierarchy": "Text ProtocolBuffers Header",
          "module": "Text.ProtocolBuffers.Header",
          "name": "catchError",
          "normalized": "a b c d-\u003e(e-\u003ec d)-\u003ec d",
          "package": "protocol-buffers",
          "partial": "Error",
          "signature": "forall a. m a-\u003e(e-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:catchError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Header",
          "name": "emptyBS",
          "package": "protocol-buffers",
          "signature": "ByteString",
          "source": "src/Text-ProtocolBuffers-Header.html#emptyBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Header",
          "module": "Text.ProtocolBuffers.Header",
          "name": "emptyBS",
          "package": "protocol-buffers",
          "partial": "BS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:emptyBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a set from an ascending list of distinct elements in linear time.\n \u003cem\u003eThe precondition (input list is strictly ascending) is not checked.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Header",
          "name": "fromDistinctAscList",
          "package": "protocol-buffers",
          "signature": "[a] -\u003e Set a",
          "type": "function"
        },
        "index": {
          "description": "Build set from an ascending list of distinct elements in linear time The precondition input list is strictly ascending is not checked",
          "hierarchy": "Text ProtocolBuffers Header",
          "module": "Text.ProtocolBuffers.Header",
          "name": "fromDistinctAscList",
          "normalized": "[a]-\u003eSet a",
          "package": "protocol-buffers",
          "partial": "Distinct Asc List",
          "signature": "[a]-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:fromDistinctAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromMaybe\u003c/a\u003e\u003c/code\u003e function takes a default value and and \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n value.  If the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, it returns the default values;\n otherwise, it returns the value contained in the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Header",
          "name": "fromMaybe",
          "package": "protocol-buffers",
          "signature": "a -\u003e Maybe a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "The fromMaybe function takes default value and and Maybe value If the Maybe is Nothing it returns the default values otherwise it returns the value contained in the Maybe",
          "hierarchy": "Text ProtocolBuffers Header",
          "module": "Text.ProtocolBuffers.Header",
          "name": "fromMaybe",
          "normalized": "a-\u003eMaybe a-\u003ea",
          "package": "protocol-buffers",
          "partial": "Maybe",
          "signature": "a-\u003eMaybe a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:fromMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the element in the set?\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Header",
          "name": "member",
          "package": "protocol-buffers",
          "signature": "a -\u003e Set a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "log Is the element in the set",
          "hierarchy": "Text ProtocolBuffers Header",
          "module": "Text.ProtocolBuffers.Header",
          "name": "member",
          "normalized": "a-\u003eSet a-\u003eBool",
          "package": "protocol-buffers",
          "signature": "a-\u003eSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Header",
          "name": "pack",
          "package": "protocol-buffers",
          "signature": "[Char] -\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert String into ByteString",
          "hierarchy": "Text ProtocolBuffers Header",
          "module": "Text.ProtocolBuffers.Header",
          "name": "pack",
          "normalized": "[Char]-\u003eByteString",
          "package": "protocol-buffers",
          "signature": "[Char]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs used within a monadic computation to begin exception processing.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Header",
          "name": "throwError",
          "package": "protocol-buffers",
          "signature": "forall a.  e -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Is used within monadic computation to begin exception processing",
          "hierarchy": "Text ProtocolBuffers Header",
          "module": "Text.ProtocolBuffers.Header",
          "name": "throwError",
          "normalized": "a b c-\u003ed e",
          "package": "protocol-buffers",
          "partial": "Error",
          "signature": "forall a. e-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Header.html#v:throwError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules colelct utility routines related to the different\n incarnations of identifiers in the code.  The basic identifier is\n always ASCII, but because of the self generated DescriptorProto\n data structures it is stored in \u003ccode\u003e\u003ca\u003eUtf8\u003c/a\u003e\u003c/code\u003e tagged lazy bytestrings.\n\u003c/p\u003e\u003cp\u003eAn \u003ccode\u003eidentifier\u003c/code\u003e is a non-empty ASCII string made of [a-zA-Z0-9_]\n where the first character is never in [0-9].\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003efield\u003c/code\u003e is a mangled identifer that is a valid Haskell name that\n begins with lower case, and which may have a single quote at the\n end if needed to avoid a reserved word.  These may also start with\n '_', though just a \u003ca\u003e_\u003c/a\u003e is mangled to \u003ca\u003e_'\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA 'module' is a mangled identifier that is a valid Haskell name\n that begins with upper case.  These never have a single quote.  A\n leading '_' is replaced with a leading \u003ca\u003eU'_\u003c/a\u003e to make a valid\n identifier.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "Identifiers",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Identifiers.html",
          "type": "module"
        },
        "index": {
          "description": "This modules colelct utility routines related to the different incarnations of identifiers in the code The basic identifier is always ASCII but because of the self generated DescriptorProto data structures it is stored in Utf8 tagged lazy bytestrings An identifier is non-empty ASCII string made of a-zA-Z0-9 where the first character is never in field is mangled identifer that is valid Haskell name that begins with lower case and which may have single quote at the end if needed to avoid reserved word These may also start with though just is mangled to module is mangled identifier that is valid Haskell name that begins with upper case These never have single quote leading is replaced with leading to make valid identifier",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "Identifiers",
          "package": "protocol-buffers",
          "partial": "Identifiers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e separated identifier which may or may start with a dot.  There\n are never two or more \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003es in a row.  There is always at least one identifier.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "DIName",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#DIName",
          "type": "newtype"
        },
        "index": {
          "description": "separated identifier which may or may start with dot There are never two or more in row There is always at least one identifier",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "DIName",
          "package": "protocol-buffers",
          "partial": "DIName",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:DIName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is used to abstract over Utf8 and String.  The important\n entry point is \u003ccode\u003e\u003ca\u003evalidDI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "Dotted",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#Dotted",
          "type": "class"
        },
        "index": {
          "description": "This is used to abstract over Utf8 and String The important entry point is validDI",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "Dotted",
          "package": "protocol-buffers",
          "partial": "Dotted",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:Dotted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFull Haskell field name: MNames separated by \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e, ending with a field\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "FFName",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#FFName",
          "type": "newtype"
        },
        "index": {
          "description": "Full Haskell field name MNames separated by ending with field",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "FFName",
          "package": "protocol-buffers",
          "partial": "FFName",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:FFName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFully qualified identifier: repeated (\u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e then identifier)\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "FIName",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#FIName",
          "type": "newtype"
        },
        "index": {
          "description": "Fully qualified identifier repeated then identifier",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "FIName",
          "package": "protocol-buffers",
          "partial": "FIName",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:FIName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFull Haskell module name: MNames separated by \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e, ending with a module\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "FMName",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#FMName",
          "type": "newtype"
        },
        "index": {
          "description": "Full Haskell module name MNames separated by ending with module",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "FMName",
          "package": "protocol-buffers",
          "partial": "FMName",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:FMName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains one field name, non-empty\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "FName",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#FName",
          "type": "newtype"
        },
        "index": {
          "description": "Contains one field name non-empty",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "FName",
          "package": "protocol-buffers",
          "partial": "FName",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:FName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains one identifier name\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "IName",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#IName",
          "type": "newtype"
        },
        "index": {
          "description": "Contains one identifier name",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "IName",
          "package": "protocol-buffers",
          "partial": "IName",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:IName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains one module name, non-empty\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "MName",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#MName",
          "type": "newtype"
        },
        "index": {
          "description": "Contains one module name non-empty",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "MName",
          "package": "protocol-buffers",
          "partial": "MName",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:MName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emangle\u003c/a\u003e\u003c/code\u003e transformation has instances for several combiantions\n of input and output.  These allow one to construct the Haskell types\n of MName\u003cem\u003eFMName\u003c/em\u003ePMName and FName\u003cem\u003eFFName\u003c/em\u003ePFName out of the protobuf\n types IName\u003cem\u003eDIName\u003c/em\u003eFIName.  Currently, all the Haskell instances\n are for the String base type.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "Mangle",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#Mangle",
          "type": "class"
        },
        "index": {
          "description": "The mangle transformation has instances for several combiantions of input and output These allow one to construct the Haskell types of MName FMName PMName and FName FFName PFName out of the protobuf types IName DIName FIName Currently all the Haskell instances are for the String base type",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "Mangle",
          "package": "protocol-buffers",
          "partial": "Mangle",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:Mangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsed Haskell name ending with FName.  Good constructor to use.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "PFName",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#PFName",
          "type": "data"
        },
        "index": {
          "description": "Parsed Haskell name ending with FName Good constructor to use",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "PFName",
          "package": "protocol-buffers",
          "partial": "PFName",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:PFName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsed Haskell name ending with MName.  Good contructor to use.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "PMName",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#PMName",
          "type": "data"
        },
        "index": {
          "description": "Parsed Haskell name ending with MName Good contructor to use",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "PMName",
          "package": "protocol-buffers",
          "partial": "PMName",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#t:PMName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "DIName",
          "package": "protocol-buffers",
          "signature": "DIName",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#DIName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "DIName",
          "package": "protocol-buffers",
          "partial": "DIName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:DIName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "FFName",
          "package": "protocol-buffers",
          "signature": "FFName",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#FFName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "FFName",
          "package": "protocol-buffers",
          "partial": "FFName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:FFName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "FIName",
          "package": "protocol-buffers",
          "signature": "FIName",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#FIName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "FIName",
          "package": "protocol-buffers",
          "partial": "FIName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:FIName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "FMName",
          "package": "protocol-buffers",
          "signature": "FMName",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#FMName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "FMName",
          "package": "protocol-buffers",
          "partial": "FMName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:FMName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "FName",
          "package": "protocol-buffers",
          "signature": "FName",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#FName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "FName",
          "package": "protocol-buffers",
          "partial": "FName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:FName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "IName",
          "package": "protocol-buffers",
          "signature": "IName",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#IName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "IName",
          "package": "protocol-buffers",
          "partial": "IName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:IName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "MName",
          "package": "protocol-buffers",
          "signature": "MName",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#MName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "MName",
          "package": "protocol-buffers",
          "partial": "MName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:MName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "PFName",
          "package": "protocol-buffers",
          "signature": "PFName [MName a] (FName a)",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#PFName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "PFName",
          "normalized": "PFName[MName a](FName a)",
          "package": "protocol-buffers",
          "partial": "PFName",
          "signature": "PFName[MName a](FName a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:PFName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "PMName",
          "package": "protocol-buffers",
          "signature": "PMName [MName a] (MName a)",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#PMName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "PMName",
          "normalized": "PMName[MName a](MName a)",
          "package": "protocol-buffers",
          "partial": "PMName",
          "signature": "PMName[MName a](MName a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:PMName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight (True,_) means the input is a FIName.\n Right (False,_) means the input is a DIName (without leading \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eThis creates useful error messages for the user.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "checkDIString",
          "package": "protocol-buffers",
          "signature": "String -\u003e Either String (Bool, [IName String])",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#checkDIString",
          "type": "function"
        },
        "index": {
          "description": "Right True means the input is FIName Right False means the input is DIName without leading This creates useful error messages for the user",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "checkDIString",
          "normalized": "String-\u003eEither String(Bool,[IName String])",
          "package": "protocol-buffers",
          "partial": "DIString",
          "signature": "String-\u003eEither String(Bool,[IName String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:checkDIString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight (True,_) means the input is a FIName.\n Right (False,_) means the input is a DIName (without leading \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eThis creates useful error messages for the user.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "checkDIUtf8",
          "package": "protocol-buffers",
          "signature": "Utf8 -\u003e Either String (Bool, [IName Utf8])",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#checkDIUtf8",
          "type": "function"
        },
        "index": {
          "description": "Right True means the input is FIName Right False means the input is DIName without leading This creates useful error messages for the user",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "checkDIUtf8",
          "normalized": "Utf-\u003eEither String(Bool,[IName Utf])",
          "package": "protocol-buffers",
          "partial": "DIUtf",
          "signature": "Utf-\u003eEither String(Bool,[IName Utf])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:checkDIUtf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "cons",
          "package": "protocol-buffers",
          "signature": "Char -\u003e a -\u003e a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#cons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "cons",
          "normalized": "Char-\u003ea-\u003ea",
          "package": "protocol-buffers",
          "signature": "Char-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "diName",
          "package": "protocol-buffers",
          "signature": "a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#DIName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "diName",
          "package": "protocol-buffers",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:diName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edifi\u003c/a\u003e\u003c/code\u003e examines the \u003ccode\u003e\u003ca\u003eDIName\u003c/a\u003e\u003c/code\u003e and prepend a \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e if absent, promoting\n it to a \u003ccode\u003e\u003ca\u003eFIName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "difi",
          "package": "protocol-buffers",
          "signature": "DIName a -\u003e FIName a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#difi",
          "type": "function"
        },
        "index": {
          "description": "difi examines the DIName and prepend if absent promoting it to FIName",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "difi",
          "normalized": "DIName a-\u003eFIName a",
          "package": "protocol-buffers",
          "signature": "DIName a-\u003eFIName a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:difi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "dot",
          "package": "protocol-buffers",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#dot",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "dot",
          "normalized": "a-\u003ea-\u003ea",
          "package": "protocol-buffers",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "dotFF",
          "package": "protocol-buffers",
          "signature": "FMName a -\u003e FFName a -\u003e FFName a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#dotFF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "dotFF",
          "normalized": "FMName a-\u003eFFName a-\u003eFFName a",
          "package": "protocol-buffers",
          "partial": "FF",
          "signature": "FMName a-\u003eFFName a-\u003eFFName a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:dotFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "dotFM",
          "package": "protocol-buffers",
          "signature": "FMName a -\u003e FMName a -\u003e FMName a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#dotFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "dotFM",
          "normalized": "FMName a-\u003eFMName a-\u003eFMName a",
          "package": "protocol-buffers",
          "partial": "FM",
          "signature": "FMName a-\u003eFMName a-\u003eFMName a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:dotFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "fName",
          "package": "protocol-buffers",
          "signature": "a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#FName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "fName",
          "package": "protocol-buffers",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:fName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "ffName",
          "package": "protocol-buffers",
          "signature": "a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#FFName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "ffName",
          "package": "protocol-buffers",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:ffName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "fiName",
          "package": "protocol-buffers",
          "signature": "a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#FIName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "fiName",
          "package": "protocol-buffers",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:fiName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "fmName",
          "package": "protocol-buffers",
          "signature": "a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#FMName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "fmName",
          "package": "protocol-buffers",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:fmName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "fqAppend",
          "package": "protocol-buffers",
          "signature": "FIName a -\u003e [IName a] -\u003e FIName a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#fqAppend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "fqAppend",
          "normalized": "FIName a-\u003e[IName a]-\u003eFIName a",
          "package": "protocol-buffers",
          "partial": "Append",
          "signature": "FIName a-\u003e[IName a]-\u003eFIName a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:fqAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "fromString",
          "package": "protocol-buffers",
          "signature": "String -\u003e Utf8",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#fromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "fromString",
          "normalized": "String-\u003eUtf",
          "package": "protocol-buffers",
          "partial": "String",
          "signature": "String-\u003eUtf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "iName",
          "package": "protocol-buffers",
          "signature": "a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#IName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "iName",
          "package": "protocol-buffers",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:iName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "joinPF",
          "package": "protocol-buffers",
          "signature": "PFName a -\u003e FFName a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#joinPF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "joinPF",
          "normalized": "PFName a-\u003eFFName a",
          "package": "protocol-buffers",
          "partial": "PF",
          "signature": "PFName a-\u003eFFName a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:joinPF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "joinPM",
          "package": "protocol-buffers",
          "signature": "PMName a -\u003e FMName a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#joinPM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "joinPM",
          "normalized": "PMName a-\u003eFMName a",
          "package": "protocol-buffers",
          "partial": "PM",
          "signature": "PMName a-\u003eFMName a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:joinPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "mName",
          "package": "protocol-buffers",
          "signature": "a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#MName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "mName",
          "package": "protocol-buffers",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:mName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "mangle",
          "package": "protocol-buffers",
          "signature": "a -\u003e b",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#mangle",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "mangle",
          "normalized": "a-\u003eb",
          "package": "protocol-buffers",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:mangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "promoteDI",
          "package": "protocol-buffers",
          "signature": "IName a -\u003e DIName a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#promoteDI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "promoteDI",
          "normalized": "IName a-\u003eDIName a",
          "package": "protocol-buffers",
          "partial": "DI",
          "signature": "IName a-\u003eDIName a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:promoteDI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "promoteFF",
          "package": "protocol-buffers",
          "signature": "FName a -\u003e FFName a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#promoteFF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "promoteFF",
          "normalized": "FName a-\u003eFFName a",
          "package": "protocol-buffers",
          "partial": "FF",
          "signature": "FName a-\u003eFFName a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:promoteFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "promoteFI",
          "package": "protocol-buffers",
          "signature": "IName a -\u003e FIName a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#promoteFI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "promoteFI",
          "normalized": "IName a-\u003eFIName a",
          "package": "protocol-buffers",
          "partial": "FI",
          "signature": "IName a-\u003eFIName a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:promoteFI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "promoteFM",
          "package": "protocol-buffers",
          "signature": "MName a -\u003e FMName a",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#promoteFM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "promoteFM",
          "normalized": "MName a-\u003eFMName a",
          "package": "protocol-buffers",
          "partial": "FM",
          "signature": "MName a-\u003eFMName a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:promoteFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e returns a list of non-empty \u003ccode\u003ea\u003c/code\u003e with all \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e characters removed\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "split",
          "package": "protocol-buffers",
          "signature": "a -\u003e [a]",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#split",
          "type": "method"
        },
        "index": {
          "description": "split returns list of non-empty with all characters removed",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "split",
          "normalized": "a-\u003e[a]",
          "package": "protocol-buffers",
          "signature": "a-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTyped \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "splitDI",
          "package": "protocol-buffers",
          "signature": "DIName a -\u003e [IName a]",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#splitDI",
          "type": "function"
        },
        "index": {
          "description": "Typed split",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "splitDI",
          "normalized": "DIName a-\u003e[IName a]",
          "package": "protocol-buffers",
          "partial": "DI",
          "signature": "DIName a-\u003e[IName a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:splitDI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTyped \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "splitFI",
          "package": "protocol-buffers",
          "signature": "FIName a -\u003e [IName a]",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#splitFI",
          "type": "function"
        },
        "index": {
          "description": "Typed split",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "splitFI",
          "normalized": "FIName a-\u003e[IName a]",
          "package": "protocol-buffers",
          "partial": "FI",
          "signature": "FIName a-\u003e[IName a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:splitFI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTyped \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "splitFM",
          "package": "protocol-buffers",
          "signature": "FMName a -\u003e [MName a]",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#splitFM",
          "type": "function"
        },
        "index": {
          "description": "Typed split",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "splitFM",
          "normalized": "FMName a-\u003e[MName a]",
          "package": "protocol-buffers",
          "partial": "FM",
          "signature": "FMName a-\u003e[MName a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:splitFM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "toString",
          "package": "protocol-buffers",
          "signature": "Utf8 -\u003e String",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#toString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "toString",
          "normalized": "Utf-\u003eString",
          "package": "protocol-buffers",
          "partial": "String",
          "signature": "Utf-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "uncons",
          "package": "protocol-buffers",
          "signature": "a -\u003e Maybe (Char, a)",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#uncons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "uncons",
          "normalized": "a-\u003eMaybe(Char,a)",
          "package": "protocol-buffers",
          "signature": "a-\u003eMaybe(Char,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "unull",
          "package": "protocol-buffers",
          "signature": "Utf8 -\u003e Bool",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#unull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "unull",
          "normalized": "Utf-\u003eBool",
          "package": "protocol-buffers",
          "signature": "Utf-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:unull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003evalidDI\u003c/a\u003e\u003c/code\u003e ensures the DIName is \n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "validDI",
          "package": "protocol-buffers",
          "signature": "a -\u003e Maybe (DIName a)",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#validDI",
          "type": "method"
        },
        "index": {
          "description": "validDI ensures the DIName is",
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "validDI",
          "normalized": "a-\u003eMaybe(DIName a)",
          "package": "protocol-buffers",
          "partial": "DI",
          "signature": "a-\u003eMaybe(DIName a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:validDI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "validI",
          "package": "protocol-buffers",
          "signature": "a -\u003e Maybe (IName a)",
          "source": "src/Text-ProtocolBuffers-Identifiers.html#validI",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Identifiers",
          "module": "Text.ProtocolBuffers.Identifiers",
          "name": "validI",
          "normalized": "a-\u003eMaybe(IName a)",
          "package": "protocol-buffers",
          "signature": "a-\u003eMaybe(IName a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Identifiers.html#v:validI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA strong feature of the protocol-buffers package is that it does\n not contain any structures defined by descriptor.proto!  This\n prevents me hitting any annoying circular dependencies.  The\n structures defined here are included in each module created by\n \u003ccode\u003ehprotoc\u003c/code\u003e.  They are optimized for use in code generation.\n\u003c/p\u003e\u003cp\u003eThese values can be inspected at runtime by the user's code, but I\n have yet to write much documentation.  Luckily the record field\n names are somewhat descriptive.\n\u003c/p\u003e\u003cp\u003eThe other reflection is using the \u003ccode\u003efileDescriptorProto\u003c/code\u003e which\n is put into the top level module created by hprotoc.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "Reflections",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Reflections.html",
          "type": "module"
        },
        "index": {
          "description": "strong feature of the protocol-buffers package is that it does not contain any structures defined by descriptor.proto This prevents me hitting any annoying circular dependencies The structures defined here are included in each module created by hprotoc They are optimized for use in code generation These values can be inspected at runtime by the user code but have yet to write much documentation Luckily the record field names are somewhat descriptive The other reflection is using the fileDescriptorProto which is put into the top level module created by hprotoc",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "Reflections",
          "package": "protocol-buffers",
          "partial": "Reflections",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "DescriptorInfo",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "DescriptorInfo",
          "package": "protocol-buffers",
          "partial": "Descriptor Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:DescriptorInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "EnumInfo",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Reflections.html#EnumInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "EnumInfo",
          "package": "protocol-buffers",
          "partial": "Enum Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:EnumInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "EnumInfoApp",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Reflections.html#EnumInfoApp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "EnumInfoApp",
          "package": "protocol-buffers",
          "partial": "Enum Info App",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:EnumInfoApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "FieldInfo",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "FieldInfo",
          "package": "protocol-buffers",
          "partial": "Field Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:FieldInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eGetMessageInfo\u003c/a\u003e\u003c/code\u003e is used in getting messages from the wire.  It\n supplies the \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e of precomposed wire tags that must be found in\n the message as well as a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e of all allowed tags (including known\n extension fields and all required wire tags).\n\u003c/p\u003e\u003cp\u003eExtension fields not in the allowedTags set are still loaded, but\n only as \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e blobs that will have to interpreted later.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "GetMessageInfo",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Reflections.html#GetMessageInfo",
          "type": "data"
        },
        "index": {
          "description": "GetMessageInfo is used in getting messages from the wire It supplies the Set of precomposed wire tags that must be found in the message as well as Set of all allowed tags including known extension fields and all required wire tags Extension fields not in the allowedTags set are still loaded but only as ByteString blobs that will have to interpreted later",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "GetMessageInfo",
          "package": "protocol-buffers",
          "partial": "Get Message Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:GetMessageInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eHsDefault\u003c/a\u003e\u003c/code\u003e stores the parsed default from the proto file in a\n form that will make a nice literal in the\n \u003ca\u003eLanguage.Haskell.Exts.Syntax\u003c/a\u003e code generation by \u003ccode\u003ehprotoc\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that Utf8 labeled byte sequences have been stripped to just\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e here as this is sufficient for code generation.\n\u003c/p\u003e\u003cp\u003eOn 25 August 2010 20:12, George van den Driessche \u003ca\u003egeorgevdd@google.com\u003c/a\u003e sent Chris Kuklewicz a\n patch to MakeReflections.parseDefEnum to ensure that HsDef'Enum holds the mangled form of the\n name.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "HsDefault",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Reflections.html#HsDefault",
          "type": "data"
        },
        "index": {
          "description": "HsDefault stores the parsed default from the proto file in form that will make nice literal in the Language.Haskell.Exts.Syntax code generation by hprotoc Note that Utf8 labeled byte sequences have been stripped to just ByteString here as this is sufficient for code generation On August George van den Driessche georgevdd@google.com sent Chris Kuklewicz patch to MakeReflections.parseDefEnum to ensure that HsDef Enum holds the mangled form of the name",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "HsDefault",
          "package": "protocol-buffers",
          "partial": "Hs Default",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:HsDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "KeyInfo",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Reflections.html#KeyInfo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "KeyInfo",
          "package": "protocol-buffers",
          "partial": "Key Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:KeyInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "ProtoFName",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoFName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "ProtoFName",
          "package": "protocol-buffers",
          "partial": "Proto FName",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:ProtoFName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "ProtoInfo",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "ProtoInfo",
          "package": "protocol-buffers",
          "partial": "Proto Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:ProtoInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is fully qualified name data type for code generation.  The\n \u003ccode\u003e\u003ca\u003ehaskellPrefix\u003c/a\u003e\u003c/code\u003e was possibly specified on the \u003ccode\u003ehprotoc\u003c/code\u003e command\n line.  The \u003ccode\u003e\u003ca\u003eparentModule\u003c/a\u003e\u003c/code\u003e is a combination of the module prefix\n from the '.proto' file and any nested levels of definition.\n\u003c/p\u003e\u003cp\u003eThe name components are likely to have been mangled to ensure the\n \u003ccode\u003e\u003ca\u003ebaseName\u003c/a\u003e\u003c/code\u003e started with an uppercase letter, in \u003ccode\u003e ['A'..'Z'] \u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "ProtoName",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoName",
          "type": "data"
        },
        "index": {
          "description": "This is fully qualified name data type for code generation The haskellPrefix was possibly specified on the hprotoc command line The parentModule is combination of the module prefix from the proto file and any nested levels of definition The name components are likely to have been mangled to ensure the baseName started with an uppercase letter in",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "ProtoName",
          "package": "protocol-buffers",
          "partial": "Proto Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:ProtoName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "ReflectDescriptor",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ReflectDescriptor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "ReflectDescriptor",
          "package": "protocol-buffers",
          "partial": "Reflect Descriptor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:ReflectDescriptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "ReflectEnum",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ReflectEnum",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "ReflectEnum",
          "package": "protocol-buffers",
          "partial": "Reflect Enum",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:ReflectEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSomeRealFloat\u003c/a\u003e\u003c/code\u003e projects Double/Float to Rational or a special IEEE type.\n This is needed to track protobuf-2.3.0 which allows nan and inf and -inf default values.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "SomeRealFloat",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Reflections.html#SomeRealFloat",
          "type": "data"
        },
        "index": {
          "description": "SomeRealFloat projects Double Float to Rational or special IEEE type This is needed to track protobuf-2.3.0 which allows nan and inf and inf default values",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "SomeRealFloat",
          "package": "protocol-buffers",
          "partial": "Some Real Float",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#t:SomeRealFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "DescriptorInfo",
          "package": "protocol-buffers",
          "signature": "DescriptorInfo",
          "source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "DescriptorInfo",
          "package": "protocol-buffers",
          "partial": "Descriptor Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:DescriptorInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "EnumInfo",
          "package": "protocol-buffers",
          "signature": "EnumInfo",
          "source": "src/Text-ProtocolBuffers-Reflections.html#EnumInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "EnumInfo",
          "package": "protocol-buffers",
          "partial": "Enum Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:EnumInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "FieldInfo",
          "package": "protocol-buffers",
          "signature": "FieldInfo",
          "source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "FieldInfo",
          "package": "protocol-buffers",
          "partial": "Field Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:FieldInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "GetMessageInfo",
          "package": "protocol-buffers",
          "signature": "GetMessageInfo",
          "source": "src/Text-ProtocolBuffers-Reflections.html#GetMessageInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "GetMessageInfo",
          "package": "protocol-buffers",
          "partial": "Get Message Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:GetMessageInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "HsDef'Bool",
          "package": "protocol-buffers",
          "signature": "HsDef'Bool Bool",
          "source": "src/Text-ProtocolBuffers-Reflections.html#HsDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "HsDef'Bool",
          "package": "protocol-buffers",
          "partial": "Hs Def' Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:HsDef-39-Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "HsDef'ByteString",
          "package": "protocol-buffers",
          "signature": "HsDef'ByteString ByteString",
          "source": "src/Text-ProtocolBuffers-Reflections.html#HsDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "HsDef'ByteString",
          "package": "protocol-buffers",
          "partial": "Hs Def' Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:HsDef-39-ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "HsDef'Enum",
          "package": "protocol-buffers",
          "signature": "HsDef'Enum String",
          "source": "src/Text-ProtocolBuffers-Reflections.html#HsDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "HsDef'Enum",
          "package": "protocol-buffers",
          "partial": "Hs Def' Enum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:HsDef-39-Enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "HsDef'Integer",
          "package": "protocol-buffers",
          "signature": "HsDef'Integer Integer",
          "source": "src/Text-ProtocolBuffers-Reflections.html#HsDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "HsDef'Integer",
          "package": "protocol-buffers",
          "partial": "Hs Def' Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:HsDef-39-Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "HsDef'RealFloat",
          "package": "protocol-buffers",
          "signature": "HsDef'RealFloat SomeRealFloat",
          "source": "src/Text-ProtocolBuffers-Reflections.html#HsDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "HsDef'RealFloat",
          "package": "protocol-buffers",
          "partial": "Hs Def' Real Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:HsDef-39-RealFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "ProtoFName",
          "package": "protocol-buffers",
          "signature": "ProtoFName",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoFName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "ProtoFName",
          "package": "protocol-buffers",
          "partial": "Proto FName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:ProtoFName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "ProtoInfo",
          "package": "protocol-buffers",
          "signature": "ProtoInfo",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "ProtoInfo",
          "package": "protocol-buffers",
          "partial": "Proto Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:ProtoInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "ProtoName",
          "package": "protocol-buffers",
          "signature": "ProtoName",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "ProtoName",
          "package": "protocol-buffers",
          "partial": "Proto Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:ProtoName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "SRF'Rational",
          "package": "protocol-buffers",
          "signature": "SRF'Rational Rational",
          "source": "src/Text-ProtocolBuffers-Reflections.html#SomeRealFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "SRF'Rational",
          "package": "protocol-buffers",
          "partial": "SRF' Rational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:SRF-39-Rational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "SRF'inf",
          "package": "protocol-buffers",
          "signature": "SRF'inf",
          "source": "src/Text-ProtocolBuffers-Reflections.html#SomeRealFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "SRF'inf",
          "package": "protocol-buffers",
          "partial": "SRF'inf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:SRF-39-inf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "SRF'nan",
          "package": "protocol-buffers",
          "signature": "SRF'nan",
          "source": "src/Text-ProtocolBuffers-Reflections.html#SomeRealFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "SRF'nan",
          "package": "protocol-buffers",
          "partial": "SRF'nan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:SRF-39-nan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "SRF'ninf",
          "package": "protocol-buffers",
          "signature": "SRF'ninf",
          "source": "src/Text-ProtocolBuffers-Reflections.html#SomeRealFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "SRF'ninf",
          "package": "protocol-buffers",
          "partial": "SRF'ninf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:SRF-39-ninf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "allowedTags",
          "package": "protocol-buffers",
          "signature": "Set WireTag",
          "source": "src/Text-ProtocolBuffers-Reflections.html#GetMessageInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "allowedTags",
          "package": "protocol-buffers",
          "partial": "Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:allowedTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "baseName",
          "package": "protocol-buffers",
          "signature": "MName String",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "baseName",
          "package": "protocol-buffers",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:baseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "baseName'",
          "package": "protocol-buffers",
          "signature": "FName String",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoFName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "baseName'",
          "package": "protocol-buffers",
          "partial": "Name'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:baseName-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if repeated is the field type\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "canRepeat",
          "package": "protocol-buffers",
          "signature": "Bool",
          "source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "description": "True if repeated is the field type",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "canRepeat",
          "package": "protocol-buffers",
          "partial": "Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:canRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "descFilePath",
          "package": "protocol-buffers",
          "signature": "[FilePath]",
          "source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "descFilePath",
          "normalized": "[FilePath]",
          "package": "protocol-buffers",
          "partial": "File Path",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:descFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "descName",
          "package": "protocol-buffers",
          "signature": "ProtoName",
          "source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "descName",
          "package": "protocol-buffers",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:descName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "enumFilePath",
          "package": "protocol-buffers",
          "signature": "[FilePath]",
          "source": "src/Text-ProtocolBuffers-Reflections.html#EnumInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "enumFilePath",
          "normalized": "[FilePath]",
          "package": "protocol-buffers",
          "partial": "File Path",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:enumFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "enumName",
          "package": "protocol-buffers",
          "signature": "ProtoName",
          "source": "src/Text-ProtocolBuffers-Reflections.html#EnumInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "enumName",
          "package": "protocol-buffers",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:enumName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe String is the Haskell name to write into the generated source files\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "enumValues",
          "package": "protocol-buffers",
          "signature": "[(EnumCode, String)]",
          "source": "src/Text-ProtocolBuffers-Reflections.html#EnumInfo",
          "type": "function"
        },
        "index": {
          "description": "The String is the Haskell name to write into the generated source files",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "enumValues",
          "normalized": "[(EnumCode,String)]",
          "package": "protocol-buffers",
          "partial": "Values",
          "signature": "[(EnumCode,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:enumValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall enums\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "enums",
          "package": "protocol-buffers",
          "signature": "[EnumInfo]",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
          "type": "function"
        },
        "index": {
          "description": "all enums",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "enums",
          "normalized": "[EnumInfo]",
          "package": "protocol-buffers",
          "signature": "[EnumInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:enums"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "extRanges",
          "package": "protocol-buffers",
          "signature": "[(FieldId, FieldId)]",
          "source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "extRanges",
          "normalized": "[(FieldId,FieldId)]",
          "package": "protocol-buffers",
          "partial": "Ranges",
          "signature": "[(FieldId,FieldId)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:extRanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etop level keys\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "extensionKeys",
          "package": "protocol-buffers",
          "signature": "Seq KeyInfo",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
          "type": "function"
        },
        "index": {
          "description": "top level keys",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "extensionKeys",
          "package": "protocol-buffers",
          "partial": "Keys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:extensionKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "fieldName",
          "package": "protocol-buffers",
          "signature": "ProtoFName",
          "source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "fieldName",
          "package": "protocol-buffers",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:fieldName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "fieldNumber",
          "package": "protocol-buffers",
          "signature": "FieldId",
          "source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "fieldNumber",
          "package": "protocol-buffers",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:fieldNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "fields",
          "package": "protocol-buffers",
          "signature": "Seq FieldInfo",
          "source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "fields",
          "package": "protocol-buffers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "fromRF",
          "package": "protocol-buffers",
          "signature": "a -\u003e SomeRealFloat",
          "source": "src/Text-ProtocolBuffers-Reflections.html#fromRF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "fromRF",
          "normalized": "a-\u003eSomeRealFloat",
          "package": "protocol-buffers",
          "partial": "RF",
          "signature": "a-\u003eSomeRealFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:fromRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is obtained via \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e on the stored \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e output of the \u003ccode\u003e\u003ca\u003eDescriptorInfo\u003c/a\u003e\u003c/code\u003e in\n the module file. It is used in getting messages from the wire.\n\u003c/p\u003e\u003cp\u003eMust not inspect argument\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "getMessageInfo",
          "package": "protocol-buffers",
          "signature": "m -\u003e GetMessageInfo",
          "source": "src/Text-ProtocolBuffers-Reflections.html#getMessageInfo",
          "type": "method"
        },
        "index": {
          "description": "This is obtained via read on the stored show output of the DescriptorInfo in the module file It is used in getting messages from the wire Must not inspect argument",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "getMessageInfo",
          "normalized": "a-\u003eGetMessageInfo",
          "package": "protocol-buffers",
          "partial": "Message Info",
          "signature": "m-\u003eGetMessageInfo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:getMessageInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell specific prefix to module hierarchy (e.g. Text.Foo)\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "haskellPrefix",
          "package": "protocol-buffers",
          "signature": "[MName String]",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoName",
          "type": "function"
        },
        "index": {
          "description": "Haskell specific prefix to module hierarchy e.g Text.Foo",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "haskellPrefix",
          "normalized": "[MName String]",
          "package": "protocol-buffers",
          "partial": "Prefix",
          "signature": "[MName String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:haskellPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell specific prefix to module hierarchy (e.g. Text.Foo)\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "haskellPrefix'",
          "package": "protocol-buffers",
          "signature": "[MName String]",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoFName",
          "type": "function"
        },
        "index": {
          "description": "Haskell specific prefix to module hierarchy e.g Text.Foo",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "haskellPrefix'",
          "normalized": "[MName String]",
          "package": "protocol-buffers",
          "partial": "Prefix'",
          "signature": "[MName String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:haskellPrefix-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enice parsed thing\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "hsDefault",
          "package": "protocol-buffers",
          "signature": "Maybe HsDefault",
          "source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "description": "nice parsed thing",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "hsDefault",
          "package": "protocol-buffers",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:hsDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecrappy, but not escaped, thing\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "hsRawDefault",
          "package": "protocol-buffers",
          "signature": "Maybe ByteString",
          "source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "description": "crappy but not escaped thing",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "hsRawDefault",
          "package": "protocol-buffers",
          "partial": "Raw Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:hsRawDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "isGroup",
          "package": "protocol-buffers",
          "signature": "Bool",
          "source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "isGroup",
          "package": "protocol-buffers",
          "partial": "Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:isGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "isPacked",
          "package": "protocol-buffers",
          "signature": "Bool",
          "source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "isPacked",
          "package": "protocol-buffers",
          "partial": "Packed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:isPacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "isRequired",
          "package": "protocol-buffers",
          "signature": "Bool",
          "source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "isRequired",
          "package": "protocol-buffers",
          "partial": "Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:isRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "keys",
          "package": "protocol-buffers",
          "signature": "Seq KeyInfo",
          "source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "keys",
          "package": "protocol-buffers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "knownKeyMap",
          "package": "protocol-buffers",
          "signature": "Map ProtoName (Seq FieldInfo)",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "knownKeyMap",
          "package": "protocol-buffers",
          "partial": "Key Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:knownKeyMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "knownKeys",
          "package": "protocol-buffers",
          "signature": "Seq FieldInfo",
          "source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "knownKeys",
          "package": "protocol-buffers",
          "partial": "Keys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:knownKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "lazyFields",
          "package": "protocol-buffers",
          "signature": "Bool",
          "source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "lazyFields",
          "package": "protocol-buffers",
          "partial": "Fields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:lazyFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emakePNF\u003c/a\u003e\u003c/code\u003e is used by the generated code to create a ProtoName with less newtype noise.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "makePNF",
          "package": "protocol-buffers",
          "signature": "ByteString -\u003e [String] -\u003e [String] -\u003e String -\u003e ProtoName",
          "source": "src/Text-ProtocolBuffers-Reflections.html#makePNF",
          "type": "function"
        },
        "index": {
          "description": "makePNF is used by the generated code to create ProtoName with less newtype noise",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "makePNF",
          "normalized": "ByteString-\u003e[String]-\u003e[String]-\u003eString-\u003eProtoName",
          "package": "protocol-buffers",
          "partial": "PNF",
          "signature": "ByteString-\u003e[String]-\u003e[String]-\u003eString-\u003eProtoName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:makePNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall messages and groups\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "messages",
          "package": "protocol-buffers",
          "signature": "[DescriptorInfo]",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
          "type": "function"
        },
        "index": {
          "description": "all messages and groups",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "messages",
          "normalized": "[DescriptorInfo]",
          "package": "protocol-buffers",
          "signature": "[DescriptorInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:messages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if packed would be valid for this field type\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "mightPack",
          "package": "protocol-buffers",
          "signature": "Bool",
          "source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "description": "True if packed would be valid for this field type",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "mightPack",
          "package": "protocol-buffers",
          "partial": "Pack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:mightPack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused for reading when Just {} instead of wireTag\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "packedTag",
          "package": "protocol-buffers",
          "signature": "Maybe (WireTag, WireTag)",
          "source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "description": "used for reading when Just instead of wireTag",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "packedTag",
          "normalized": "Maybe(WireTag,WireTag)",
          "package": "protocol-buffers",
          "partial": "Tag",
          "signature": "Maybe(WireTag,WireTag)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:packedTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e.proto specified namespace (like Com.Google.Bar)\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "parentModule",
          "package": "protocol-buffers",
          "signature": "[MName String]",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoName",
          "type": "function"
        },
        "index": {
          "description": "proto specified namespace like Com.Google.Bar",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "parentModule",
          "normalized": "[MName String]",
          "package": "protocol-buffers",
          "partial": "Module",
          "signature": "[MName String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:parentModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e.proto specified namespace (like Com.Google.Bar)\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "parentModule'",
          "package": "protocol-buffers",
          "signature": "[MName String]",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoFName",
          "type": "function"
        },
        "index": {
          "description": "proto specified namespace like Com.Google.Bar",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "parentModule'",
          "normalized": "[MName String]",
          "package": "protocol-buffers",
          "partial": "Module'",
          "signature": "[MName String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:parentModule-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "parentOfEnum",
          "package": "protocol-buffers",
          "signature": "parentOfEnum",
          "source": "src/Text-ProtocolBuffers-Reflections.html#parentOfEnum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "parentOfEnum",
          "package": "protocol-buffers",
          "partial": "Of Enum",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:parentOfEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epath to haskell module\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "protoFilePath",
          "package": "protocol-buffers",
          "signature": "[FilePath]",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
          "type": "function"
        },
        "index": {
          "description": "path to haskell module",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "protoFilePath",
          "normalized": "[FilePath]",
          "package": "protocol-buffers",
          "partial": "File Path",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:protoFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eblank protobufName, maybe blank haskellPrefix and/or parentModule\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "protoMod",
          "package": "protocol-buffers",
          "signature": "ProtoName",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
          "type": "function"
        },
        "index": {
          "description": "blank protobufName maybe blank haskellPrefix and or parentModule",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "protoMod",
          "package": "protocol-buffers",
          "partial": "Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:protoMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efilename without path of .proto file\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "protoSource",
          "package": "protocol-buffers",
          "signature": "FilePath",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoInfo",
          "type": "function"
        },
        "index": {
          "description": "filename without path of proto file",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "protoSource",
          "package": "protocol-buffers",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:protoSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efully qualified name using \u003ca\u003epackage\u003c/a\u003e prefix (no mangling)\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "protobufName",
          "package": "protocol-buffers",
          "signature": "FIName Utf8",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoName",
          "type": "function"
        },
        "index": {
          "description": "fully qualified name using package prefix no mangling",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "protobufName",
          "package": "protocol-buffers",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:protobufName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efully qualified name using \u003ca\u003epackage\u003c/a\u003e prefix (no mangling)\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "protobufName'",
          "package": "protocol-buffers",
          "signature": "FIName Utf8",
          "source": "src/Text-ProtocolBuffers-Reflections.html#ProtoFName",
          "type": "function"
        },
        "index": {
          "description": "fully qualified name using package prefix no mangling",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "protobufName'",
          "package": "protocol-buffers",
          "partial": "Name'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:protobufName-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "reflectDescriptorInfo",
          "package": "protocol-buffers",
          "signature": "reflectDescriptorInfo",
          "source": "src/Text-ProtocolBuffers-Reflections.html#reflectDescriptorInfo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "reflectDescriptorInfo",
          "package": "protocol-buffers",
          "partial": "Descriptor Info",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:reflectDescriptorInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "reflectEnum",
          "package": "protocol-buffers",
          "signature": "EnumInfoApp e",
          "source": "src/Text-ProtocolBuffers-Reflections.html#reflectEnum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "reflectEnum",
          "package": "protocol-buffers",
          "partial": "Enum",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:reflectEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "reflectEnumInfo",
          "package": "protocol-buffers",
          "signature": "reflectEnumInfo",
          "source": "src/Text-ProtocolBuffers-Reflections.html#reflectEnumInfo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "reflectEnumInfo",
          "package": "protocol-buffers",
          "partial": "Enum Info",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:reflectEnumInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "requiredTags",
          "package": "protocol-buffers",
          "signature": "Set WireTag",
          "source": "src/Text-ProtocolBuffers-Reflections.html#GetMessageInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "requiredTags",
          "package": "protocol-buffers",
          "partial": "Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:requiredTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "storeUnknown",
          "package": "protocol-buffers",
          "signature": "Bool",
          "source": "src/Text-ProtocolBuffers-Reflections.html#DescriptorInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "storeUnknown",
          "package": "protocol-buffers",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:storeUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "toRF",
          "package": "protocol-buffers",
          "signature": "SomeRealFloat -\u003e a",
          "source": "src/Text-ProtocolBuffers-Reflections.html#toRF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "toRF",
          "normalized": "SomeRealFloat-\u003ea",
          "package": "protocol-buffers",
          "partial": "RF",
          "signature": "SomeRealFloat-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:toRF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efromEnum of Text.DescriptorProtos.FieldDescriptorProto.Type\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "typeCode",
          "package": "protocol-buffers",
          "signature": "FieldType",
          "source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "description": "fromEnum of Text.DescriptorProtos.FieldDescriptorProto.Type",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "typeCode",
          "package": "protocol-buffers",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:typeCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet for Messages,Groups,and Enums\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "typeName",
          "package": "protocol-buffers",
          "signature": "Maybe ProtoName",
          "source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "description": "Set for Messages Groups and Enums",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "typeName",
          "package": "protocol-buffers",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:typeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for writing and reading if packedTag is Nothing\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "wireTag",
          "package": "protocol-buffers",
          "signature": "WireTag",
          "source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "description": "Used for writing and reading if packedTag is Nothing",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "wireTag",
          "package": "protocol-buffers",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:wireTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBytes required in the Varint formatted wireTag\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "wireTagLength",
          "package": "protocol-buffers",
          "signature": "WireSize",
          "source": "src/Text-ProtocolBuffers-Reflections.html#FieldInfo",
          "type": "function"
        },
        "index": {
          "description": "Bytes required in the Varint formatted wireTag",
          "hierarchy": "Text ProtocolBuffers Reflections",
          "module": "Text.ProtocolBuffers.Reflections",
          "name": "wireTagLength",
          "package": "protocol-buffers",
          "partial": "Tag Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Reflections.html#v:wireTagLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module add unknown field support to the library.  There are no user API things here,\n except for advanced spelunking into the data structures which can and have changed with no\n notice.  Importer beware.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "Unknown",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Unknown.html",
          "type": "module"
        },
        "index": {
          "description": "This module add unknown field support to the library There are no user API things here except for advanced spelunking into the data structures which can and have changed with no notice Importer beware",
          "hierarchy": "Text ProtocolBuffers Unknown",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "Unknown",
          "package": "protocol-buffers",
          "partial": "Unknown",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a suposedly opaque type\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "UnknownField",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Unknown.html#UnknownField",
          "type": "newtype"
        },
        "index": {
          "description": "This is suposedly opaque type",
          "hierarchy": "Text ProtocolBuffers Unknown",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "UnknownField",
          "package": "protocol-buffers",
          "partial": "Unknown Field",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#t:UnknownField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "UnknownFieldValue",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Unknown.html#UnknownFieldValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Unknown",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "UnknownFieldValue",
          "package": "protocol-buffers",
          "partial": "Unknown Field Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#t:UnknownFieldValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessages that can store unknown fields implement this interface.\n UnknownField is a supposedly opaque type.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "UnknownMessage",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Unknown.html#UnknownMessage",
          "type": "class"
        },
        "index": {
          "description": "Messages that can store unknown fields implement this interface UnknownField is supposedly opaque type",
          "hierarchy": "Text ProtocolBuffers Unknown",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "UnknownMessage",
          "package": "protocol-buffers",
          "partial": "Unknown Message",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#t:UnknownMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "UFV",
          "package": "protocol-buffers",
          "signature": "UFV !WireTag !ByteString",
          "source": "src/Text-ProtocolBuffers-Unknown.html#UnknownFieldValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Unknown",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "UFV",
          "package": "protocol-buffers",
          "partial": "UFV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#v:UFV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "UnknownField",
          "package": "protocol-buffers",
          "signature": "UnknownField (Seq UnknownFieldValue)",
          "source": "src/Text-ProtocolBuffers-Unknown.html#UnknownField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Unknown",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "UnknownField",
          "package": "protocol-buffers",
          "partial": "Unknown Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#v:UnknownField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is used by the generated code\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "catch'Unknown",
          "package": "protocol-buffers",
          "signature": "(WireTag -\u003e a -\u003e Get a) -\u003e WireTag -\u003e a -\u003e Get a",
          "source": "src/Text-ProtocolBuffers-Unknown.html#catch%27Unknown",
          "type": "function"
        },
        "index": {
          "description": "This is used by the generated code",
          "hierarchy": "Text ProtocolBuffers Unknown",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "catch'Unknown",
          "normalized": "(WireTag-\u003ea-\u003eGet a)-\u003eWireTag-\u003ea-\u003eGet a",
          "package": "protocol-buffers",
          "partial": "Unknown",
          "signature": "(WireTag-\u003ea-\u003eGet a)-\u003eWireTag-\u003ea-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#v:catch-39-Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "getUnknownField",
          "package": "protocol-buffers",
          "signature": "msg -\u003e UnknownField",
          "source": "src/Text-ProtocolBuffers-Unknown.html#getUnknownField",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Unknown",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "getUnknownField",
          "normalized": "a-\u003eUnknownField",
          "package": "protocol-buffers",
          "partial": "Unknown Field",
          "signature": "msg-\u003eUnknownField",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#v:getUnknownField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "putUnknownField",
          "package": "protocol-buffers",
          "signature": "UnknownField -\u003e msg -\u003e msg",
          "source": "src/Text-ProtocolBuffers-Unknown.html#putUnknownField",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers Unknown",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "putUnknownField",
          "normalized": "UnknownField-\u003ea-\u003ea",
          "package": "protocol-buffers",
          "partial": "Unknown Field",
          "signature": "UnknownField-\u003emsg-\u003emsg",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#v:putUnknownField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is used by the generated code\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "wirePutUnknownField",
          "package": "protocol-buffers",
          "signature": "UnknownField -\u003e Put",
          "source": "src/Text-ProtocolBuffers-Unknown.html#wirePutUnknownField",
          "type": "function"
        },
        "index": {
          "description": "This is used by the generated code",
          "hierarchy": "Text ProtocolBuffers Unknown",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "wirePutUnknownField",
          "normalized": "UnknownField-\u003ePut",
          "package": "protocol-buffers",
          "partial": "Put Unknown Field",
          "signature": "UnknownField-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#v:wirePutUnknownField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is used by the generated code\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "wireSizeUnknownField",
          "package": "protocol-buffers",
          "signature": "UnknownField -\u003e WireSize",
          "source": "src/Text-ProtocolBuffers-Unknown.html#wireSizeUnknownField",
          "type": "function"
        },
        "index": {
          "description": "This is used by the generated code",
          "hierarchy": "Text ProtocolBuffers Unknown",
          "module": "Text.ProtocolBuffers.Unknown",
          "name": "wireSizeUnknownField",
          "normalized": "UnknownField-\u003eWireSize",
          "package": "protocol-buffers",
          "partial": "Size Unknown Field",
          "signature": "UnknownField-\u003eWireSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-Unknown.html#v:wireSizeUnknownField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere are the serialization and deserialization functions.\n\u003c/p\u003e\u003cp\u003eThis module cooperates with the generated code to implement the Wire\ninstances.  The encoding is mostly documented at\n\u003ca\u003ehttp://code.google.com/apis/protocolbuffers/docs/encoding.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe user API functions are grouped into sections and documented.  The\nrest are for internal use.  The main functions are \u003ccode\u003e\u003ca\u003emessageGet\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003emessagePut\u003c/a\u003e\u003c/code\u003e (and \u003ccode\u003e\u003ca\u003emessageSize\u003c/a\u003e\u003c/code\u003e).  There are then several 'message*'\nvariants which allow for finer control and for making delimited\nmessages.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "WireMessage",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-WireMessage.html",
          "type": "module"
        },
        "index": {
          "description": "Here are the serialization and deserialization functions This module cooperates with the generated code to implement the Wire instances The encoding is mostly documented at http code.google.com apis protocolbuffers docs encoding.html The user API functions are grouped into sections and documented The rest are for internal use The main functions are messageGet and messagePut and messageSize There are then several message variants which allow for finer control and for making delimited messages",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "WireMessage",
          "package": "protocol-buffers",
          "partial": "Wire Message",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "Get",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-Get.html#Get",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "Get",
          "package": "protocol-buffers",
          "partial": "Get",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#t:Get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut merely lifts Builder into a Writer monad, applied to ().\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "Put",
          "package": "protocol-buffers",
          "type": "type"
        },
        "index": {
          "description": "Put merely lifts Builder into Writer monad applied to",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "Put",
          "package": "protocol-buffers",
          "partial": "Put",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#t:Put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eWire\u003c/a\u003e\u003c/code\u003e class is for internal use, and may change.  If there\n is a mis-match between the \u003ccode\u003e\u003ca\u003eFieldType\u003c/a\u003e\u003c/code\u003e and the type of \u003ccode\u003eb\u003c/code\u003e then you\n will get a failure at runtime.\n\u003c/p\u003e\u003cp\u003eUsers should stick to the message functions defined in\n \u003ca\u003eText.ProtocolBuffers.WireMessage\u003c/a\u003e and exported to use user by\n \u003ca\u003eText.ProtocolBuffers\u003c/a\u003e.  These are less likely to change.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "Wire",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#Wire",
          "type": "class"
        },
        "index": {
          "description": "The Wire class is for internal use and may change If there is mis-match between the FieldType and the type of then you will get failure at runtime Users should stick to the message functions defined in Text.ProtocolBuffers.WireMessage and exported to use user by Text.ProtocolBuffers These are less likely to change",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "Wire",
          "package": "protocol-buffers",
          "partial": "Wire",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#t:Wire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "castDoubleToWord64",
          "package": "protocol-buffers",
          "signature": "Double -\u003e Word64",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#castDoubleToWord64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "castDoubleToWord64",
          "normalized": "Double-\u003eWord",
          "package": "protocol-buffers",
          "partial": "Double To Word",
          "signature": "Double-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:castDoubleToWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "castFloatToWord32",
          "package": "protocol-buffers",
          "signature": "Float -\u003e Word32",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#castFloatToWord32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "castFloatToWord32",
          "normalized": "Float-\u003eWord",
          "package": "protocol-buffers",
          "partial": "Float To Word",
          "signature": "Float-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:castFloatToWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "castWord32ToFloat",
          "package": "protocol-buffers",
          "signature": "Word32 -\u003e Float",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#castWord32ToFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "castWord32ToFloat",
          "normalized": "Word-\u003eFloat",
          "package": "protocol-buffers",
          "partial": "Word To Float",
          "signature": "Word-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:castWord32ToFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "castWord64ToDouble",
          "package": "protocol-buffers",
          "signature": "Word64 -\u003e Double",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#castWord64ToDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "castWord64ToDouble",
          "normalized": "Word-\u003eDouble",
          "package": "protocol-buffers",
          "partial": "Word To Double",
          "signature": "Word-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:castWord64ToDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "fieldIdOf",
          "package": "protocol-buffers",
          "signature": "WireTag -\u003e FieldId",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#fieldIdOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "fieldIdOf",
          "normalized": "WireTag-\u003eFieldId",
          "package": "protocol-buffers",
          "partial": "Id Of",
          "signature": "WireTag-\u003eFieldId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:fieldIdOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed by generated code\n getBareMessageWith assumes the wireTag for the message, if it existed, has already been read.\n getBareMessageWith assumes that it does needs to read the Varint encoded length of the message.\n getBareMessageWith will consume the entire ByteString it is operating on, or until it\n finds any STOP_GROUP tag (wireType == 4)\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "getBareMessageWith",
          "package": "protocol-buffers",
          "signature": "(WireTag -\u003e message -\u003e Get message) -\u003e Get message",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#getBareMessageWith",
          "type": "function"
        },
        "index": {
          "description": "Used by generated code getBareMessageWith assumes the wireTag for the message if it existed has already been read getBareMessageWith assumes that it does needs to read the Varint encoded length of the message getBareMessageWith will consume the entire ByteString it is operating on or until it finds any STOP GROUP tag wireType",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "getBareMessageWith",
          "normalized": "(WireTag-\u003ea-\u003eGet a)-\u003eGet a",
          "package": "protocol-buffers",
          "partial": "Bare Message With",
          "signature": "(WireTag-\u003emessage-\u003eGet message)-\u003eGet message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:getBareMessageWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is \u003ccode\u003e\u003ca\u003erunGetOnLazy\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e results converted to\n \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e calls and the trailing \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e discarded.  This use of\n runtime errors is discouraged, but may be convenient.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "getFromBS",
          "package": "protocol-buffers",
          "signature": "Get r -\u003e ByteString -\u003e r",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#getFromBS",
          "type": "function"
        },
        "index": {
          "description": "This is runGetOnLazy with the Left results converted to error calls and the trailing ByteString discarded This use of runtime errors is discouraged but may be convenient",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "getFromBS",
          "normalized": "Get a-\u003eByteString-\u003ea",
          "package": "protocol-buffers",
          "partial": "From BS",
          "signature": "Get r-\u003eByteString-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:getFromBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "getMessageWith",
          "package": "protocol-buffers",
          "signature": "(WireTag -\u003e message -\u003e Get message) -\u003e Get message",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#getMessageWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "getMessageWith",
          "normalized": "(WireTag-\u003ea-\u003eGet a)-\u003eGet a",
          "package": "protocol-buffers",
          "partial": "Message With",
          "signature": "(WireTag-\u003emessage-\u003eGet message)-\u003eGet message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:getMessageWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "getVarInt",
          "package": "protocol-buffers",
          "signature": "Get a",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#getVarInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "getVarInt",
          "package": "protocol-buffers",
          "partial": "Var Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:getVarInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis reads a wire tag (must be of type '2') to get the \u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e.\n Then the encoded message length is read, followed by the message\n itself.  Both the \u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e and the message are returned.\n\u003c/p\u003e\u003cp\u003eThis allows for incremental reading and processing.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageAsFieldGetM",
          "package": "protocol-buffers",
          "signature": "Get (FieldId, msg)",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#messageAsFieldGetM",
          "type": "function"
        },
        "index": {
          "description": "This reads wire tag must be of type to get the FieldId Then the encoded message length is read followed by the message itself Both the FieldId and the message are returned This allows for incremental reading and processing",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageAsFieldGetM",
          "normalized": "Get(FieldId,a)",
          "package": "protocol-buffers",
          "partial": "As Field Get",
          "signature": "Get(FieldId,msg)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageAsFieldGetM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis writes an encoded wire tag with the given \u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e and then\n  the encoded length of the message's fields and then the message's\n  fields with tags to the wire.  This \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad can be composed\n  and eventually executed with \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageAsFieldPutM",
          "package": "protocol-buffers",
          "signature": "FieldId -\u003e msg -\u003e Put",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#messageAsFieldPutM",
          "type": "function"
        },
        "index": {
          "description": "This writes an encoded wire tag with the given FieldId and then the encoded length of the message fields and then the message fields with tags to the wire This Put monad can be composed and eventually executed with runPut",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageAsFieldPutM",
          "normalized": "FieldId-\u003ea-\u003ePut",
          "package": "protocol-buffers",
          "partial": "As Field Put",
          "signature": "FieldId-\u003emsg-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageAsFieldPutM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis computes the size of the \u003ccode\u003e\u003ca\u003emessageWithLengthSize\u003c/a\u003e\u003c/code\u003e and then\n adds the length an initial tag with the given \u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageAsFieldSize",
          "package": "protocol-buffers",
          "signature": "FieldId -\u003e msg -\u003e WireSize",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#messageAsFieldSize",
          "type": "function"
        },
        "index": {
          "description": "This computes the size of the messageWithLengthSize and then adds the length an initial tag with the given FieldId",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageAsFieldSize",
          "normalized": "FieldId-\u003ea-\u003eWireSize",
          "package": "protocol-buffers",
          "partial": "As Field Size",
          "signature": "FieldId-\u003emsg-\u003eWireSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageAsFieldSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis consumes the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to decode a message.  It assumes\n the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is merely a sequence of the tagged fields of the\n message, and consumes until a group stop tag is detected or the\n entire input is consumed.  Any \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e past the end of the\n stop tag is returned as well.\n\u003c/p\u003e\u003cp\u003eThis is \u003ccode\u003e\u003ca\u003erunGetOnLazy\u003c/a\u003e\u003c/code\u003e applied to \u003ccode\u003e\u003ca\u003emessageGetM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageGet",
          "package": "protocol-buffers",
          "signature": "ByteString -\u003e Either String (msg, ByteString)",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#messageGet",
          "type": "function"
        },
        "index": {
          "description": "This consumes the ByteString to decode message It assumes the ByteString is merely sequence of the tagged fields of the message and consumes until group stop tag is detected or the entire input is consumed Any ByteString past the end of the stop tag is returned as well This is runGetOnLazy applied to messageGetM",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageGet",
          "normalized": "ByteString-\u003eEither String(a,ByteString)",
          "package": "protocol-buffers",
          "partial": "Get",
          "signature": "ByteString-\u003eEither String(msg,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis reads the tagged message fields until the stop tag or the\n end of input is reached.\n\u003c/p\u003e\u003cp\u003eThis is actually \u003ccode\u003e wireGet 10 msg \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageGetM",
          "package": "protocol-buffers",
          "signature": "Get msg",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#messageGetM",
          "type": "function"
        },
        "index": {
          "description": "This reads the tagged message fields until the stop tag or the end of input is reached This is actually wireGet msg",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageGetM",
          "package": "protocol-buffers",
          "partial": "Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageGetM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e applied to \u003ccode\u003e\u003ca\u003emessagePutM\u003c/a\u003e\u003c/code\u003e. It result in a\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with a length of \u003ccode\u003e\u003ca\u003emessageSize\u003c/a\u003e\u003c/code\u003e bytes.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messagePut",
          "package": "protocol-buffers",
          "signature": "msg -\u003e ByteString",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#messagePut",
          "type": "function"
        },
        "index": {
          "description": "This is runPut applied to messagePutM It result in ByteString with length of messageSize bytes",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messagePut",
          "normalized": "a-\u003eByteString",
          "package": "protocol-buffers",
          "partial": "Put",
          "signature": "msg-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messagePut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis writes just the message's fields with tags to the wire.  This\n \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad can be composed and eventually executed with \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is actually \u003ccode\u003e wirePut 10 msg \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messagePutM",
          "package": "protocol-buffers",
          "signature": "msg -\u003e Put",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#messagePutM",
          "type": "function"
        },
        "index": {
          "description": "This writes just the message fields with tags to the wire This Put monad can be composed and eventually executed with runPut This is actually wirePut msg",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messagePutM",
          "normalized": "a-\u003ePut",
          "package": "protocol-buffers",
          "partial": "Put",
          "signature": "msg-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messagePutM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis computes the size of the message's fields with tags on the\n wire with no initial tag or length (in bytes).  This is also the\n length of the message as placed between group start and stop tags.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageSize",
          "package": "protocol-buffers",
          "signature": "msg -\u003e WireSize",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#messageSize",
          "type": "function"
        },
        "index": {
          "description": "This computes the size of the message fields with tags on the wire with no initial tag or length in bytes This is also the length of the message as placed between group start and stop tags",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageSize",
          "normalized": "a-\u003eWireSize",
          "package": "protocol-buffers",
          "partial": "Size",
          "signature": "msg-\u003eWireSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003erunGetOnLazy\u003c/a\u003e\u003c/code\u003e applied to \u003ccode\u003e\u003ca\u003emessageWithLengthGetM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis first reads the encoded length of the message and will then\n succeed when it has consumed precisely this many additional bytes.\n The \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e after this point will be returned.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageWithLengthGet",
          "package": "protocol-buffers",
          "signature": "ByteString -\u003e Either String (msg, ByteString)",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#messageWithLengthGet",
          "type": "function"
        },
        "index": {
          "description": "This runGetOnLazy applied to messageWithLengthGetM This first reads the encoded length of the message and will then succeed when it has consumed precisely this many additional bytes The ByteString after this point will be returned",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageWithLengthGet",
          "normalized": "ByteString-\u003eEither String(a,ByteString)",
          "package": "protocol-buffers",
          "partial": "With Length Get",
          "signature": "ByteString-\u003eEither String(msg,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageWithLengthGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis reads the encoded message length and then the message.\n\u003c/p\u003e\u003cp\u003eThis is actually \u003ccode\u003e wireGet 11 msg \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageWithLengthGetM",
          "package": "protocol-buffers",
          "signature": "Get msg",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#messageWithLengthGetM",
          "type": "function"
        },
        "index": {
          "description": "This reads the encoded message length and then the message This is actually wireGet msg",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageWithLengthGetM",
          "package": "protocol-buffers",
          "partial": "With Length Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageWithLengthGetM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e applied to \u003ccode\u003e\u003ca\u003emessageWithLengthPutM\u003c/a\u003e\u003c/code\u003e.  It results\n in a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with a length of \u003ccode\u003e\u003ca\u003emessageWithLengthSize\u003c/a\u003e\u003c/code\u003e bytes.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageWithLengthPut",
          "package": "protocol-buffers",
          "signature": "msg -\u003e ByteString",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#messageWithLengthPut",
          "type": "function"
        },
        "index": {
          "description": "This is runPut applied to messageWithLengthPutM It results in ByteString with length of messageWithLengthSize bytes",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageWithLengthPut",
          "normalized": "a-\u003eByteString",
          "package": "protocol-buffers",
          "partial": "With Length Put",
          "signature": "msg-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageWithLengthPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis writes the encoded length of the message's fields and then\n  the message's fields with tags to the wire.  This \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad can\n  be composed and eventually executed with \u003ccode\u003e\u003ca\u003erunPut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is actually \u003ccode\u003e wirePut 11 msg \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageWithLengthPutM",
          "package": "protocol-buffers",
          "signature": "msg -\u003e Put",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#messageWithLengthPutM",
          "type": "function"
        },
        "index": {
          "description": "This writes the encoded length of the message fields and then the message fields with tags to the wire This Put monad can be composed and eventually executed with runPut This is actually wirePut msg",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageWithLengthPutM",
          "normalized": "a-\u003ePut",
          "package": "protocol-buffers",
          "partial": "With Length Put",
          "signature": "msg-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageWithLengthPutM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis computes the size of the message fields as in \u003ccode\u003e\u003ca\u003emessageSize\u003c/a\u003e\u003c/code\u003e\n and add the length of the encoded size to the total.  Thus this is\n the the length of the message including the encoded length header,\n but without any leading tag.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageWithLengthSize",
          "package": "protocol-buffers",
          "signature": "msg -\u003e WireSize",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#messageWithLengthSize",
          "type": "function"
        },
        "index": {
          "description": "This computes the size of the message fields as in messageSize and add the length of the encoded size to the total Thus this is the the length of the message including the encoded length header but without any leading tag",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "messageWithLengthSize",
          "normalized": "a-\u003eWireSize",
          "package": "protocol-buffers",
          "partial": "With Length Size",
          "signature": "msg-\u003eWireSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:messageWithLengthSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "mkWireTag",
          "package": "protocol-buffers",
          "signature": "FieldId -\u003e WireType -\u003e WireTag",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#mkWireTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "mkWireTag",
          "normalized": "FieldId-\u003eWireType-\u003eWireTag",
          "package": "protocol-buffers",
          "partial": "Wire Tag",
          "signature": "FieldId-\u003eWireType-\u003eWireTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:mkWireTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "prependMessageSize",
          "package": "protocol-buffers",
          "signature": "WireSize -\u003e WireSize",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#prependMessageSize",
          "type": "function"
        },
        "index": {
          "description": "Used in generated code",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "prependMessageSize",
          "normalized": "WireSize-\u003eWireSize",
          "package": "protocol-buffers",
          "partial": "Message Size",
          "signature": "WireSize-\u003eWireSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:prependMessageSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a lazy ByteString efficiently, simply appending the lazy\n ByteString chunks to the output buffer\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "putLazyByteString",
          "package": "protocol-buffers",
          "signature": "ByteString -\u003e Put",
          "type": "function"
        },
        "index": {
          "description": "Write lazy ByteString efficiently simply appending the lazy ByteString chunks to the output buffer",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "putLazyByteString",
          "normalized": "ByteString-\u003ePut",
          "package": "protocol-buffers",
          "partial": "Lazy Byte String",
          "signature": "ByteString-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:putLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "putSize",
          "package": "protocol-buffers",
          "signature": "WireSize -\u003e Put",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#putSize",
          "type": "function"
        },
        "index": {
          "description": "Used in generated code",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "putSize",
          "normalized": "WireSize-\u003ePut",
          "package": "protocol-buffers",
          "partial": "Size",
          "signature": "WireSize-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:putSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "putVarUInt",
          "package": "protocol-buffers",
          "signature": "a -\u003e Put",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#putVarUInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "putVarUInt",
          "normalized": "a-\u003ePut",
          "package": "protocol-buffers",
          "partial": "Var UInt",
          "signature": "a-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:putVarUInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "runGetOnLazy",
          "package": "protocol-buffers",
          "signature": "Get r -\u003e ByteString -\u003e Either String (r, ByteString)",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#runGetOnLazy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "runGetOnLazy",
          "normalized": "Get a-\u003eByteString-\u003eEither String(a,ByteString)",
          "package": "protocol-buffers",
          "partial": "Get On Lazy",
          "signature": "Get r-\u003eByteString-\u003eEither String(r,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:runGetOnLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad with a serialiser\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "runPut",
          "package": "protocol-buffers",
          "signature": "Put -\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Run the Put monad with serialiser",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "runPut",
          "normalized": "Put-\u003eByteString",
          "package": "protocol-buffers",
          "partial": "Put",
          "signature": "Put-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:runPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "size'WireTag",
          "package": "protocol-buffers",
          "signature": "WireTag -\u003e Int64",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#size%27WireTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "size'WireTag",
          "normalized": "WireTag-\u003eInt",
          "package": "protocol-buffers",
          "partial": "Wire Tag",
          "signature": "WireTag-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:size-39-WireTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "splitWireTag",
          "package": "protocol-buffers",
          "signature": "WireTag -\u003e (FieldId, WireType)",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#splitWireTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "splitWireTag",
          "normalized": "WireTag-\u003e(FieldId,WireType)",
          "package": "protocol-buffers",
          "partial": "Wire Tag",
          "signature": "WireTag-\u003e(FieldId,WireType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:splitWireTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "toPackedWireTag",
          "package": "protocol-buffers",
          "signature": "FieldId -\u003e WireTag",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#toPackedWireTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "toPackedWireTag",
          "normalized": "FieldId-\u003eWireTag",
          "package": "protocol-buffers",
          "partial": "Packed Wire Tag",
          "signature": "FieldId-\u003eWireTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:toPackedWireTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "toWireTag",
          "package": "protocol-buffers",
          "signature": "FieldId -\u003e FieldType -\u003e WireTag",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#toWireTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "toWireTag",
          "normalized": "FieldId-\u003eFieldType-\u003eWireTag",
          "package": "protocol-buffers",
          "partial": "Wire Tag",
          "signature": "FieldId-\u003eFieldType-\u003eWireTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:toWireTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "toWireType",
          "package": "protocol-buffers",
          "signature": "FieldType -\u003e WireType",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#toWireType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "toWireType",
          "normalized": "FieldType-\u003eWireType",
          "package": "protocol-buffers",
          "partial": "Wire Type",
          "signature": "FieldType-\u003eWireType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:toWireType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "unknown",
          "package": "protocol-buffers",
          "signature": "FieldId -\u003e WireType -\u003e a -\u003e Get a",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#unknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "unknown",
          "normalized": "FieldId-\u003eWireType-\u003ea-\u003eGet a",
          "package": "protocol-buffers",
          "signature": "FieldId-\u003eWireType-\u003ea-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "unknownField",
          "package": "protocol-buffers",
          "signature": "a -\u003e FieldId -\u003e Get a",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#unknownField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "unknownField",
          "normalized": "a-\u003eFieldId-\u003eGet a",
          "package": "protocol-buffers",
          "partial": "Field",
          "signature": "a-\u003eFieldId-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:unknownField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireGet",
          "package": "protocol-buffers",
          "signature": "FieldType -\u003e Get b",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wireGet",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireGet",
          "normalized": "FieldType-\u003eGet a",
          "package": "protocol-buffers",
          "partial": "Get",
          "signature": "FieldType-\u003eGet b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireGetEnum",
          "package": "protocol-buffers",
          "signature": "(Int -\u003e Maybe e) -\u003e Get e",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wireGetEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireGetEnum",
          "normalized": "(Int-\u003eMaybe a)-\u003eGet a",
          "package": "protocol-buffers",
          "partial": "Get Enum",
          "signature": "(Int-\u003eMaybe e)-\u003eGet e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireGetEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireGetErr",
          "package": "protocol-buffers",
          "signature": "FieldType -\u003e Get a",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wireGetErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireGetErr",
          "normalized": "FieldType-\u003eGet a",
          "package": "protocol-buffers",
          "partial": "Get Err",
          "signature": "FieldType-\u003eGet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireGetErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis reads in the raw bytestring corresponding to an field known\n only through the wiretag's \u003ccode\u003e\u003ca\u003eFieldId\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eWireType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireGetFromWire",
          "package": "protocol-buffers",
          "signature": "FieldId -\u003e WireType -\u003e Get ByteString",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wireGetFromWire",
          "type": "function"
        },
        "index": {
          "description": "This reads in the raw bytestring corresponding to an field known only through the wiretag FieldId and WireType",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireGetFromWire",
          "normalized": "FieldId-\u003eWireType-\u003eGet ByteString",
          "package": "protocol-buffers",
          "partial": "Get From Wire",
          "signature": "FieldId-\u003eWireType-\u003eGet ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireGetFromWire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireGetPacked",
          "package": "protocol-buffers",
          "signature": "FieldType -\u003e Get (Seq b)",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wireGetPacked",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireGetPacked",
          "normalized": "FieldType-\u003eGet(Seq a)",
          "package": "protocol-buffers",
          "partial": "Get Packed",
          "signature": "FieldType-\u003eGet(Seq b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireGetPacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireGetPackedEnum",
          "package": "protocol-buffers",
          "signature": "(Int -\u003e Maybe e) -\u003e Get (Seq e)",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wireGetPackedEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireGetPackedEnum",
          "normalized": "(Int-\u003eMaybe a)-\u003eGet(Seq a)",
          "package": "protocol-buffers",
          "partial": "Get Packed Enum",
          "signature": "(Int-\u003eMaybe e)-\u003eGet(Seq e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireGetPackedEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wirePut",
          "package": "protocol-buffers",
          "signature": "FieldType -\u003e b -\u003e Put",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wirePut",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wirePut",
          "normalized": "FieldType-\u003ea-\u003ePut",
          "package": "protocol-buffers",
          "partial": "Put",
          "signature": "FieldType-\u003eb-\u003ePut",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wirePut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wirePutErr",
          "package": "protocol-buffers",
          "signature": "FieldType -\u003e a -\u003e Put",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wirePutErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wirePutErr",
          "normalized": "FieldType-\u003ea-\u003ePut",
          "package": "protocol-buffers",
          "partial": "Put Err",
          "signature": "FieldType-\u003ea-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wirePutErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wirePutOpt",
          "package": "protocol-buffers",
          "signature": "WireTag -\u003e FieldType -\u003e Maybe v -\u003e Put",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wirePutOpt",
          "type": "function"
        },
        "index": {
          "description": "Used in generated code",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wirePutOpt",
          "normalized": "WireTag-\u003eFieldType-\u003eMaybe a-\u003ePut",
          "package": "protocol-buffers",
          "partial": "Put Opt",
          "signature": "WireTag-\u003eFieldType-\u003eMaybe v-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wirePutOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wirePutPacked",
          "package": "protocol-buffers",
          "signature": "WireTag -\u003e FieldType -\u003e Seq v -\u003e Put",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wirePutPacked",
          "type": "function"
        },
        "index": {
          "description": "Used in generated code",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wirePutPacked",
          "normalized": "WireTag-\u003eFieldType-\u003eSeq a-\u003ePut",
          "package": "protocol-buffers",
          "partial": "Put Packed",
          "signature": "WireTag-\u003eFieldType-\u003eSeq v-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wirePutPacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wirePutRep",
          "package": "protocol-buffers",
          "signature": "WireTag -\u003e FieldType -\u003e Seq v -\u003e Put",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wirePutRep",
          "type": "function"
        },
        "index": {
          "description": "Used in generated code",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wirePutRep",
          "normalized": "WireTag-\u003eFieldType-\u003eSeq a-\u003ePut",
          "package": "protocol-buffers",
          "partial": "Put Rep",
          "signature": "WireTag-\u003eFieldType-\u003eSeq v-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wirePutRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wirePutReq",
          "package": "protocol-buffers",
          "signature": "WireTag -\u003e FieldType -\u003e v -\u003e Put",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wirePutReq",
          "type": "function"
        },
        "index": {
          "description": "Used in generated code",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wirePutReq",
          "normalized": "WireTag-\u003eFieldType-\u003ea-\u003ePut",
          "package": "protocol-buffers",
          "partial": "Put Req",
          "signature": "WireTag-\u003eFieldType-\u003ev-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wirePutReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireSize",
          "package": "protocol-buffers",
          "signature": "FieldType -\u003e b -\u003e WireSize",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wireSize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireSize",
          "normalized": "FieldType-\u003ea-\u003eWireSize",
          "package": "protocol-buffers",
          "partial": "Size",
          "signature": "FieldType-\u003eb-\u003eWireSize",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireSizeErr",
          "package": "protocol-buffers",
          "signature": "FieldType -\u003e a -\u003e WireSize",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wireSizeErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireSizeErr",
          "normalized": "FieldType-\u003ea-\u003eWireSize",
          "package": "protocol-buffers",
          "partial": "Size Err",
          "signature": "FieldType-\u003ea-\u003eWireSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireSizeErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireSizeOpt",
          "package": "protocol-buffers",
          "signature": "Int64 -\u003e FieldType -\u003e Maybe v -\u003e Int64",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wireSizeOpt",
          "type": "function"
        },
        "index": {
          "description": "Used in generated code",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireSizeOpt",
          "normalized": "Int-\u003eFieldType-\u003eMaybe a-\u003eInt",
          "package": "protocol-buffers",
          "partial": "Size Opt",
          "signature": "Int-\u003eFieldType-\u003eMaybe v-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireSizeOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireSizePacked",
          "package": "protocol-buffers",
          "signature": "Int64 -\u003e FieldType -\u003e Seq v -\u003e Int64",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wireSizePacked",
          "type": "function"
        },
        "index": {
          "description": "Used in generated code",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireSizePacked",
          "normalized": "Int-\u003eFieldType-\u003eSeq a-\u003eInt",
          "package": "protocol-buffers",
          "partial": "Size Packed",
          "signature": "Int-\u003eFieldType-\u003eSeq v-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireSizePacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireSizeRep",
          "package": "protocol-buffers",
          "signature": "Int64 -\u003e FieldType -\u003e Seq v -\u003e Int64",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wireSizeRep",
          "type": "function"
        },
        "index": {
          "description": "Used in generated code",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireSizeRep",
          "normalized": "Int-\u003eFieldType-\u003eSeq a-\u003eInt",
          "package": "protocol-buffers",
          "partial": "Size Rep",
          "signature": "Int-\u003eFieldType-\u003eSeq v-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireSizeRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed in generated code.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireSizeReq",
          "package": "protocol-buffers",
          "signature": "Int64 -\u003e FieldType -\u003e v -\u003e Int64",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#wireSizeReq",
          "type": "function"
        },
        "index": {
          "description": "Used in generated code",
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "wireSizeReq",
          "normalized": "Int-\u003eFieldType-\u003ea-\u003eInt",
          "package": "protocol-buffers",
          "partial": "Size Req",
          "signature": "Int-\u003eFieldType-\u003ev-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:wireSizeReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "zzDecode32",
          "package": "protocol-buffers",
          "signature": "Word32 -\u003e Int32",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#zzDecode32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "zzDecode32",
          "normalized": "Word-\u003eInt",
          "package": "protocol-buffers",
          "partial": "Decode",
          "signature": "Word-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:zzDecode32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "zzDecode64",
          "package": "protocol-buffers",
          "signature": "Word64 -\u003e Int64",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#zzDecode64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "zzDecode64",
          "normalized": "Word-\u003eInt",
          "package": "protocol-buffers",
          "partial": "Decode",
          "signature": "Word-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:zzDecode64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "zzEncode32",
          "package": "protocol-buffers",
          "signature": "Int32 -\u003e Word32",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#zzEncode32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "zzEncode32",
          "normalized": "Int-\u003eWord",
          "package": "protocol-buffers",
          "partial": "Encode",
          "signature": "Int-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:zzEncode32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "zzEncode64",
          "package": "protocol-buffers",
          "signature": "Int64 -\u003e Word64",
          "source": "src/Text-ProtocolBuffers-WireMessage.html#zzEncode64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers WireMessage",
          "module": "Text.ProtocolBuffers.WireMessage",
          "name": "zzEncode64",
          "normalized": "Int-\u003eWord",
          "package": "protocol-buffers",
          "partial": "Encode",
          "signature": "Int-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers-WireMessage.html#v:zzEncode64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eText.ProtocolBuffers\u003c/a\u003e exposes the client API.  This merely re-exports parts of the\nother modules in protocol-buffers.  The exposed parts are:\n\u003c/p\u003e\u003cpre\u003e\nimport Text.ProtocolBuffers.Basic\n  ( Seq,isValidUTF8,toUtf8,utf8,Utf8(Utf8),Int32,Int64,Word32,Word64\n  , WireTag,FieldId,WireType,FieldType,EnumCode,WireSize\n  , Mergeable(mergeAppend,mergeConcat),Default(defaultValue))\nimport Text.ProtocolBuffers.Extensions\n  ( Key,ExtKey(getExt,putExt,clearExt),MessageAPI(getVal,isSet)\n  , getKeyFieldId,getKeyFieldType,getKeyDefaultValue)\nimport Text.ProtocolBuffers.Identifiers\nimport Text.ProtocolBuffers.Reflections\n  ( ReflectDescriptor(..),ReflectEnum(..),ProtoName(..),HsDefault(..),EnumInfoApp\n  , KeyInfo,FieldInfo(..),DescriptorInfo(..),EnumInfo(..),ProtoInfo(..),makePNF )\nimport Text.ProtocolBuffers.WireMessage\n  ( Wire,Put,Get,runPut,runGet,runGetOnLazy\n  , messageSize,messagePut,messageGet,messagePutM,messageGetM\n  , messageWithLengthSize,messageWithLengthPut,messageWithLengthGet,messageWithLengthPutM,messageWithLengthGetM\n  , messageAsFieldSize,messageAsFieldPutM,messageAsFieldGetM)\n\u003c/pre\u003e\u003cp\u003eThe message serialization is taken care of by \u003ca\u003eWireMessage\u003c/a\u003e\noperations, especially \u003ccode\u003e\u003ca\u003emessagePut\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emessageGet\u003c/a\u003e\u003c/code\u003e.  The\n\u003ccode\u003e\u003ca\u003eMessageAPI\u003c/a\u003e\u003c/code\u003e provides the useful polymorphic \u003ccode\u003e\u003ca\u003egetVal\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eisSet\u003c/a\u003e\u003c/code\u003e\nwhere \u003ccode\u003e\u003ca\u003egetVal\u003c/a\u003e\u003c/code\u003e looks up default values and also works with extension\nkeys.  The \u003ccode\u003e\u003ca\u003eUtf8\u003c/a\u003e\u003c/code\u003e newtype is used to indicate the format in the\nunderlying lazy \u003ccode\u003eByteString\u003c/code\u003e.  Messages and values can be combined\nwith the right-biased \u003ccode\u003e\u003ca\u003eMergeable\u003c/a\u003e\u003c/code\u003e operations.  The \u003ccode\u003emergeEmpty\u003c/code\u003e should\nnot be used as required values are filled in with undefined errors,\nplease use \u003ccode\u003e\u003ca\u003edefaultValue\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cp\u003eThe Utf8 type is a newtype of the Lazy ByteString.  It can be safely\nconstructed by checking for errors with \u003ccode\u003e\u003ca\u003etoUtf8\u003c/a\u003e\u003c/code\u003e, which returns 'Left\nInt' indicating the index where an error is detected.  It can be\ndeconstructed with \u003ccode\u003e\u003ca\u003eutf8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ProtocolBuffers",
          "name": "ProtocolBuffers",
          "package": "protocol-buffers",
          "source": "src/Text-ProtocolBuffers.html",
          "type": "module"
        },
        "index": {
          "description": "Text.ProtocolBuffers exposes the client API This merely re-exports parts of the other modules in protocol-buffers The exposed parts are import Text.ProtocolBuffers.Basic Seq isValidUTF8 toUtf8 utf8 Utf8 Utf8 Int32 Int64 Word32 Word64 WireTag FieldId WireType FieldType EnumCode WireSize Mergeable mergeAppend mergeConcat Default defaultValue import Text.ProtocolBuffers.Extensions Key ExtKey getExt putExt clearExt MessageAPI getVal isSet getKeyFieldId getKeyFieldType getKeyDefaultValue import Text.ProtocolBuffers.Identifiers import Text.ProtocolBuffers.Reflections ReflectDescriptor ReflectEnum ProtoName HsDefault EnumInfoApp KeyInfo FieldInfo DescriptorInfo EnumInfo ProtoInfo makePNF import Text.ProtocolBuffers.WireMessage Wire Put Get runPut runGet runGetOnLazy messageSize messagePut messageGet messagePutM messageGetM messageWithLengthSize messageWithLengthPut messageWithLengthGet messageWithLengthPutM messageWithLengthGetM messageAsFieldSize messageAsFieldPutM messageAsFieldGetM The message serialization is taken care of by WireMessage operations especially messagePut and messageGet The MessageAPI provides the useful polymorphic getVal and isSet where getVal looks up default values and also works with extension keys The Utf8 newtype is used to indicate the format in the underlying lazy ByteString Messages and values can be combined with the right-biased Mergeable operations The mergeEmpty should not be used as required values are filled in with undefined errors please use defaultValue instead The Utf8 type is newtype of the Lazy ByteString It can be safely constructed by checking for errors with toUtf8 which returns Left Int indicating the index where an error is detected It can be deconstructed with utf8",
          "hierarchy": "Text ProtocolBuffers",
          "module": "Text.ProtocolBuffers",
          "name": "ProtocolBuffers",
          "package": "protocol-buffers",
          "partial": "Protocol Buffers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/protocol-buffers/docs/Text-ProtocolBuffers.html#"
      }
    }
  ]
]