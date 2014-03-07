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
        "word": "codec-libevent"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Class",
          "name": "Class",
          "package": "codec-libevent",
          "source": "src/Codec-Libevent-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Libevent Class",
          "module": "Codec.Libevent.Class",
          "name": "Class",
          "package": "codec-libevent",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Class",
          "name": "TaggedStructure",
          "package": "codec-libevent",
          "source": "src/Codec-Libevent-Class.html#TaggedStructure",
          "type": "class"
        },
        "index": {
          "hierarchy": "Codec Libevent Class",
          "module": "Codec.Libevent.Class",
          "name": "TaggedStructure",
          "package": "codec-libevent",
          "partial": "Tagged Structure",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Class.html#t:TaggedStructure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to deserialise a bytestring, returning either an error\n   message or a structure\n\u003c/p\u003e",
          "module": "Codec.Libevent.Class",
          "name": "deserialise",
          "package": "codec-libevent",
          "signature": "ByteString -\u003e Either String a",
          "source": "src/Codec-Libevent-Class.html#deserialise",
          "type": "method"
        },
        "index": {
          "description": "Attempt to deserialise bytestring returning either an error message or structure",
          "hierarchy": "Codec Libevent Class",
          "module": "Codec.Libevent.Class",
          "name": "deserialise",
          "normalized": "ByteString-\u003eEither String a",
          "package": "codec-libevent",
          "signature": "ByteString-\u003eEither String a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Class.html#v:deserialise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a structure filled with default values\n\u003c/p\u003e",
          "module": "Codec.Libevent.Class",
          "name": "empty",
          "package": "codec-libevent",
          "signature": "a",
          "source": "src/Codec-Libevent-Class.html#empty",
          "type": "method"
        },
        "index": {
          "description": "Return structure filled with default values",
          "hierarchy": "Codec Libevent Class",
          "module": "Codec.Libevent.Class",
          "name": "empty",
          "package": "codec-libevent",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Class.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialise a structure to a strict bytestring\n\u003c/p\u003e",
          "module": "Codec.Libevent.Class",
          "name": "serialise",
          "package": "codec-libevent",
          "signature": "a -\u003e ByteString",
          "source": "src/Codec-Libevent-Class.html#serialise",
          "type": "method"
        },
        "index": {
          "description": "Serialise structure to strict bytestring",
          "hierarchy": "Codec Libevent Class",
          "module": "Codec.Libevent.Class",
          "name": "serialise",
          "normalized": "a-\u003eByteString",
          "package": "codec-libevent",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Class.html#v:serialise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module generates Haskell code for serialising and deserialising\n libevent tagged data structures, as implemented in libevent-1.4.0-beta.\n\u003c/p\u003e\u003cp\u003eA single .rpc file (containing one or more structures) is mapped to a single\n Haskell file. Take this example:\n\u003c/p\u003e\u003cpre\u003e struct test {\n   required int a = 1;\n   optional string b = 2;\n   repeated struct[test2] c = 3;\n }\n\u003c/pre\u003e\u003cp\u003eThis will result in a data decl for \u003ccode\u003eTest\u003c/code\u003e, having named members:\n test_a, test_b and test_c. Required elements are simple, optional\n elements are wrapped in a Maybe and repeated elements in a list.\n\u003c/p\u003e\u003cp\u003eTypes are mapped thus:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e int -\u003e Word32\n\u003c/li\u003e\u003cli\u003e string -\u003e String\n\u003c/li\u003e\u003cli\u003e bytes -\u003e ByteString (strict)\n\u003c/li\u003e\u003cli\u003e bytes[n] -\u003e ByteString (with runtime checks on the size)\n\u003c/li\u003e\u003cli\u003e struct[name] -\u003e Name (the struct must be defined in the same file)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIn the example above, \u003ccode\u003etest2\u003c/code\u003e is required to be in the same .rpc file.\n\u003c/p\u003e\u003cp\u003eFor a structure named \u003ccode\u003etest\u003c/code\u003e, the following would also be generated:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003etestEmpty\u003c/code\u003e - a Test filled with default values\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etestDeserialise\u003c/code\u003e - a strict Get instance to deserialise a test. Note\n     that these structures are self-deliminating, so additional garbage at\n     the end will be consumed and will probably result in an error\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etestDeserialiseBS\u003c/code\u003e - a function with type\n     ByteString -\u003e Either String Test where the String is an error message\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etestSerialise\u003c/code\u003e - a Put Test function. Again, recall that these\n     structures aren't self deliminating\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etestSerialiseBS\u003c/code\u003e - a function with type Test -\u003e ByteString\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eEach structure will also be an instance of the \u003ccode\u003eTaggedStructure\u003c/code\u003e class\n that you can find in \u003ca\u003eCodec.Libevent.Class\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Libevent.Generate",
          "name": "Generate",
          "package": "codec-libevent",
          "source": "src/Codec-Libevent-Generate.html",
          "type": "module"
        },
        "index": {
          "description": "This module generates Haskell code for serialising and deserialising libevent tagged data structures as implemented in libevent-1.4.0-beta single rpc file containing one or more structures is mapped to single Haskell file Take this example struct test required int optional string repeated struct test2 This will result in data decl for Test having named members test test and test Required elements are simple optional elements are wrapped in Maybe and repeated elements in list Types are mapped thus int Word32 string String bytes ByteString strict bytes ByteString with runtime checks on the size struct name Name the struct must be defined in the same file In the example above test2 is required to be in the same rpc file For structure named test the following would also be generated testEmpty Test filled with default values testDeserialise strict Get instance to deserialise test Note that these structures are self-deliminating so additional garbage at the end will be consumed and will probably result in an error testDeserialiseBS function with type ByteString Either String Test where the String is an error message testSerialise Put Test function Again recall that these structures aren self deliminating testSerialiseBS function with type Test ByteString Each structure will also be an instance of the TaggedStructure class that you can find in Codec.Libevent.Class",
          "hierarchy": "Codec Libevent Generate",
          "module": "Codec.Libevent.Generate",
          "name": "Generate",
          "package": "codec-libevent",
          "partial": "Generate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Generate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate the Haskell code for the given RPC file and write to standard\n   out. The generated module will export everything and takes the given\n   name\n\u003c/p\u003e",
          "module": "Codec.Libevent.Generate",
          "name": "generate",
          "package": "codec-libevent",
          "signature": "String-\u003e RPCFile-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Generate the Haskell code for the given RPC file and write to standard out The generated module will export everything and takes the given name",
          "hierarchy": "Codec Libevent Generate",
          "module": "Codec.Libevent.Generate",
          "name": "generate",
          "normalized": "String-\u003eRPCFile-\u003eIO()",
          "package": "codec-libevent",
          "signature": "String-\u003eRPCFile-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Generate.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module parses libevent \u003ca\u003ehttp://monkey.org/~provos/libevent\u003c/a\u003e tagged\n data structures as implimented in libevent-1.4.0-beta. These data structures\n are described in a .rpc file.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Libevent.Parse",
          "name": "Parse",
          "package": "codec-libevent",
          "source": "src/Codec-Libevent-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "This module parses libevent http monkey.org provos libevent tagged data structures as implimented in libevent-1.4.0-beta These data structures are described in rpc file",
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "Parse",
          "package": "codec-libevent",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "Presence",
          "package": "codec-libevent",
          "source": "src/Codec-Libevent-Parse.html#Presence",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "Presence",
          "package": "codec-libevent",
          "partial": "Presence",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#t:Presence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn RPC element is a tagged member\n\u003c/p\u003e",
          "module": "Codec.Libevent.Parse",
          "name": "RPCElem",
          "package": "codec-libevent",
          "source": "src/Codec-Libevent-Parse.html#RPCElem",
          "type": "data"
        },
        "index": {
          "description": "An RPC element is tagged member",
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "RPCElem",
          "package": "codec-libevent",
          "partial": "RPCElem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#t:RPCElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a libevent .rpc file - just a list of the structures within\n\u003c/p\u003e",
          "module": "Codec.Libevent.Parse",
          "name": "RPCFile",
          "package": "codec-libevent",
          "source": "src/Codec-Libevent-Parse.html#RPCFile",
          "type": "data"
        },
        "index": {
          "description": "This is libevent rpc file just list of the structures within",
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "RPCFile",
          "package": "codec-libevent",
          "partial": "RPCFile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#t:RPCFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn RPC structure has a name and a list of elements\n\u003c/p\u003e",
          "module": "Codec.Libevent.Parse",
          "name": "RPCStruct",
          "package": "codec-libevent",
          "source": "src/Codec-Libevent-Parse.html#RPCStruct",
          "type": "data"
        },
        "index": {
          "description": "An RPC structure has name and list of elements",
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "RPCStruct",
          "package": "codec-libevent",
          "partial": "RPCStruct",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#t:RPCStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "Type",
          "package": "codec-libevent",
          "source": "src/Codec-Libevent-Parse.html#Type",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "Type",
          "package": "codec-libevent",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "Bytes",
          "package": "codec-libevent",
          "signature": "Bytes Int",
          "source": "src/Codec-Libevent-Parse.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "Bytes",
          "package": "codec-libevent",
          "partial": "Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:Bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "Int",
          "package": "codec-libevent",
          "signature": "Int",
          "source": "src/Codec-Libevent-Parse.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "Int",
          "package": "codec-libevent",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "Optional",
          "package": "codec-libevent",
          "signature": "Optional",
          "source": "src/Codec-Libevent-Parse.html#Presence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "Optional",
          "package": "codec-libevent",
          "partial": "Optional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:Optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "RPCElem",
          "package": "codec-libevent",
          "signature": "RPCElem",
          "source": "src/Codec-Libevent-Parse.html#RPCElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "RPCElem",
          "package": "codec-libevent",
          "partial": "RPCElem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:RPCElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "RPCFile",
          "package": "codec-libevent",
          "signature": "RPCFile",
          "source": "src/Codec-Libevent-Parse.html#RPCFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "RPCFile",
          "package": "codec-libevent",
          "partial": "RPCFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:RPCFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "RPCStruct",
          "package": "codec-libevent",
          "signature": "RPCStruct",
          "source": "src/Codec-Libevent-Parse.html#RPCStruct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "RPCStruct",
          "package": "codec-libevent",
          "partial": "RPCStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:RPCStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "Repeated",
          "package": "codec-libevent",
          "signature": "Repeated",
          "source": "src/Codec-Libevent-Parse.html#Presence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "Repeated",
          "package": "codec-libevent",
          "partial": "Repeated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:Repeated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "Required",
          "package": "codec-libevent",
          "signature": "Required",
          "source": "src/Codec-Libevent-Parse.html#Presence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "Required",
          "package": "codec-libevent",
          "partial": "Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:Required"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "String",
          "package": "codec-libevent",
          "signature": "String",
          "source": "src/Codec-Libevent-Parse.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "String",
          "package": "codec-libevent",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "Struct",
          "package": "codec-libevent",
          "signature": "Struct String",
          "source": "src/Codec-Libevent-Parse.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "Struct",
          "package": "codec-libevent",
          "partial": "Struct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:Struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "VarBytes",
          "package": "codec-libevent",
          "signature": "VarBytes",
          "source": "src/Codec-Libevent-Parse.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "VarBytes",
          "package": "codec-libevent",
          "partial": "Var Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:VarBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "elemname",
          "package": "codec-libevent",
          "signature": "String",
          "source": "src/Codec-Libevent-Parse.html#RPCElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "elemname",
          "package": "codec-libevent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:elemname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "elempresence",
          "package": "codec-libevent",
          "signature": "Presence",
          "source": "src/Codec-Libevent-Parse.html#RPCElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "elempresence",
          "package": "codec-libevent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:elempresence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "elemtag",
          "package": "codec-libevent",
          "signature": "Integer",
          "source": "src/Codec-Libevent-Parse.html#RPCElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "elemtag",
          "package": "codec-libevent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:elemtag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "elemtype",
          "package": "codec-libevent",
          "signature": "Type",
          "source": "src/Codec-Libevent-Parse.html#RPCElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "elemtype",
          "package": "codec-libevent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:elemtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the given string as an RPC file\n\u003c/p\u003e",
          "module": "Codec.Libevent.Parse",
          "name": "parseRPC",
          "package": "codec-libevent",
          "signature": "String -\u003e Either ParseError RPCFile",
          "source": "src/Codec-Libevent-Parse.html#parseRPC",
          "type": "function"
        },
        "index": {
          "description": "Parse the given string as an RPC file",
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "parseRPC",
          "normalized": "String-\u003eEither ParseError RPCFile",
          "package": "codec-libevent",
          "partial": "RPC",
          "signature": "String-\u003eEither ParseError RPCFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:parseRPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the given filename\n\u003c/p\u003e",
          "module": "Codec.Libevent.Parse",
          "name": "parseRPCFile",
          "package": "codec-libevent",
          "signature": "FilePath -\u003e IO (Either ParseError RPCFile)",
          "source": "src/Codec-Libevent-Parse.html#parseRPCFile",
          "type": "function"
        },
        "index": {
          "description": "Parse the given filename",
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "parseRPCFile",
          "normalized": "FilePath-\u003eIO(Either ParseError RPCFile)",
          "package": "codec-libevent",
          "partial": "RPCFile",
          "signature": "FilePath-\u003eIO(Either ParseError RPCFile)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:parseRPCFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "rpcstructs",
          "package": "codec-libevent",
          "signature": "[RPCStruct]",
          "source": "src/Codec-Libevent-Parse.html#RPCFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "rpcstructs",
          "normalized": "[RPCStruct]",
          "package": "codec-libevent",
          "signature": "[RPCStruct]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:rpcstructs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "structelems",
          "package": "codec-libevent",
          "signature": "[RPCElem]",
          "source": "src/Codec-Libevent-Parse.html#RPCStruct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "structelems",
          "normalized": "[RPCElem]",
          "package": "codec-libevent",
          "signature": "[RPCElem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:structelems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent.Parse",
          "name": "structname",
          "package": "codec-libevent",
          "signature": "String",
          "source": "src/Codec-Libevent-Parse.html#RPCStruct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent Parse",
          "module": "Codec.Libevent.Parse",
          "name": "structname",
          "package": "codec-libevent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:structname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTagged data structures are an extensible way of serialising data in a\n platform independent way for transmission across a network etc. This package\n implements the tagged structures from libevent 1.4.0-beta.\n\u003c/p\u003e\u003cp\u003eA tagged structure is described in a text file and might look like this:\n\u003c/p\u003e\u003cpre\u003e struct foo {\n   required int count = 1;\n   optional struct[bar] names = 2;\n }\n\n struct bar {\n   repeated string s = 1;\n }\n\u003c/pre\u003e\u003cp\u003eThe numbers after the equals signs are the tag numbers for each element of\n a structure. The tag numbers must be unique within a structure and should\n be sequenctial (but are not required to be).\n\u003c/p\u003e\u003cp\u003eThe tag numbers must also be fixed for all time. When deserialising,\n unknown tags are ignored. Thus one can add a new (non-required) element to\n \u003ccode\u003efoo\u003c/code\u003e in the future and still interoperate with older code which knows\n nothing of the new element.\n\u003c/p\u003e\u003cp\u003eEach element in the description looks like:\n\u003c/p\u003e\u003cpre\u003e \u003cpresence\u003e \u003ctype\u003e \u003cname\u003e = \u003ctag number\u003e ;\n\u003c/pre\u003e\u003cp\u003eThe possible presence values are: \u003ccode\u003erequired\u003c/code\u003e, \u003ccode\u003eoptional\u003c/code\u003e and \u003ccode\u003erepeated\u003c/code\u003e. The\n types are (currently): \u003ccode\u003eint\u003c/code\u003e, \u003ccode\u003estring\u003c/code\u003e, \u003ccode\u003estruct[NAME]\u003c/code\u003e and \u003ccode\u003ebytes\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOther modules in this package parse these descriptions and automatically\n generate Haskell code for them. You should have a binary called\n \u003ccode\u003ecodec-libevent-generate\u003c/code\u003e which does this. See the documentation for\n \u003ca\u003eCodec.Libevent.Generate\u003c/a\u003e about the structure of the generated code.\n\u003c/p\u003e\u003cp\u003eOnce you have generated the code, you can import it as a regular Haskell\n module and serialise/deserialise these structures. You can also use\n the libevent library to process them in C.\n\u003c/p\u003e\u003cp\u003eThis module contains helper functions and is imported by the code generated\n by \u003ca\u003eCodec.Libevent.Generate\u003c/a\u003e. Apart from the \u003ccode\u003eTaggedStructure\u003c/code\u003e class, there's\n probably not anything generally useful here.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Libevent",
          "name": "Libevent",
          "package": "codec-libevent",
          "source": "src/Codec-Libevent.html",
          "type": "module"
        },
        "index": {
          "description": "Tagged data structures are an extensible way of serialising data in platform independent way for transmission across network etc This package implements the tagged structures from libevent beta tagged structure is described in text file and might look like this struct foo required int count optional struct bar names struct bar repeated string The numbers after the equals signs are the tag numbers for each element of structure The tag numbers must be unique within structure and should be sequenctial but are not required to be The tag numbers must also be fixed for all time When deserialising unknown tags are ignored Thus one can add new non-required element to foo in the future and still interoperate with older code which knows nothing of the new element Each element in the description looks like presence type name tag number The possible presence values are required optional and repeated The types are currently int string struct NAME and bytes Other modules in this package parse these descriptions and automatically generate Haskell code for them You should have binary called codec-libevent-generate which does this See the documentation for Codec.Libevent.Generate about the structure of the generated code Once you have generated the code you can import it as regular Haskell module and serialise deserialise these structures You can also use the libevent library to process them in This module contains helper functions and is imported by the code generated by Codec.Libevent.Generate Apart from the TaggedStructure class there probably not anything generally useful here",
          "hierarchy": "Codec Libevent",
          "module": "Codec.Libevent",
          "name": "Libevent",
          "package": "codec-libevent",
          "partial": "Libevent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent",
          "name": "decodeString",
          "package": "codec-libevent",
          "signature": "ByteString -\u003e String",
          "source": "src/Codec-Libevent.html#decodeString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent",
          "module": "Codec.Libevent",
          "name": "decodeString",
          "normalized": "ByteString-\u003eString",
          "package": "codec-libevent",
          "partial": "String",
          "signature": "ByteString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:decodeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a base128 encoded integer. This is a variable length encoded int\n   where the last byte has the MSB set to 0.\n\u003c/p\u003e",
          "module": "Codec.Libevent",
          "name": "getBase128",
          "package": "codec-libevent",
          "signature": "Get Word32",
          "source": "src/Codec-Libevent.html#getBase128",
          "type": "function"
        },
        "index": {
          "description": "Decode base128 encoded integer This is variable length encoded int where the last byte has the MSB set to",
          "hierarchy": "Codec Libevent",
          "module": "Codec.Libevent",
          "name": "getBase128",
          "package": "codec-libevent",
          "partial": "Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:getBase128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a number where the first nibble of the first byte is the number\n   of nibbles in the number. The remaining nibbles appear in little-endian\n   order following, with 0 padding to the nearest byte.\n\u003c/p\u003e",
          "module": "Codec.Libevent",
          "name": "getLengthPrefixed",
          "package": "codec-libevent",
          "signature": "Get Word32",
          "source": "src/Codec-Libevent.html#getLengthPrefixed",
          "type": "function"
        },
        "index": {
          "description": "Decode number where the first nibble of the first byte is the number of nibbles in the number The remaining nibbles appear in little-endian order following with padding to the nearest byte",
          "hierarchy": "Codec Libevent",
          "module": "Codec.Libevent",
          "name": "getLengthPrefixed",
          "package": "codec-libevent",
          "partial": "Length Prefixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:getLengthPrefixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the length of the length-prefixed representation of a Word32\n\u003c/p\u003e",
          "module": "Codec.Libevent",
          "name": "lengthPrefixedLength",
          "package": "codec-libevent",
          "signature": "Word32 -\u003e Int",
          "source": "src/Codec-Libevent.html#lengthPrefixedLength",
          "type": "function"
        },
        "index": {
          "description": "Return the length of the length-prefixed representation of Word32",
          "hierarchy": "Codec Libevent",
          "module": "Codec.Libevent",
          "name": "lengthPrefixedLength",
          "normalized": "Word-\u003eInt",
          "package": "codec-libevent",
          "partial": "Prefixed Length",
          "signature": "Word-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:lengthPrefixedLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of nibbles, n, required to encode a given number. n \u003e= 1\n\u003c/p\u003e",
          "module": "Codec.Libevent",
          "name": "nibbleLength",
          "package": "codec-libevent",
          "signature": "Word32 -\u003e Int",
          "source": "src/Codec-Libevent.html#nibbleLength",
          "type": "function"
        },
        "index": {
          "description": "Return the number of nibbles required to encode given number",
          "hierarchy": "Codec Libevent",
          "module": "Codec.Libevent",
          "name": "nibbleLength",
          "normalized": "Word-\u003eInt",
          "package": "codec-libevent",
          "partial": "Length",
          "signature": "Word-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:nibbleLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a integer in Base128 form\n\u003c/p\u003e",
          "module": "Codec.Libevent",
          "name": "putBase128",
          "package": "codec-libevent",
          "signature": "Word32 -\u003e Put",
          "source": "src/Codec-Libevent.html#putBase128",
          "type": "function"
        },
        "index": {
          "description": "Encode integer in Base128 form",
          "hierarchy": "Codec Libevent",
          "module": "Codec.Libevent",
          "name": "putBase128",
          "normalized": "Word-\u003ePut",
          "package": "codec-libevent",
          "partial": "Base",
          "signature": "Word-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:putBase128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a Word32 by prefixing the number of nibbles and following with the\n   nibbles of the number in little-endian order\n\u003c/p\u003e",
          "module": "Codec.Libevent",
          "name": "putLengthPrefixed",
          "package": "codec-libevent",
          "signature": "Word32 -\u003e Put",
          "source": "src/Codec-Libevent.html#putLengthPrefixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Word32 by prefixing the number of nibbles and following with the nibbles of the number in little-endian order",
          "hierarchy": "Codec Libevent",
          "module": "Codec.Libevent",
          "name": "putLengthPrefixed",
          "normalized": "Word-\u003ePut",
          "package": "codec-libevent",
          "partial": "Length Prefixed",
          "signature": "Word-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:putLengthPrefixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent",
          "name": "putTaggedString",
          "package": "codec-libevent",
          "signature": "Word32 -\u003e String -\u003e Put",
          "source": "src/Codec-Libevent.html#putTaggedString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent",
          "module": "Codec.Libevent",
          "name": "putTaggedString",
          "normalized": "Word-\u003eString-\u003ePut",
          "package": "codec-libevent",
          "partial": "Tagged String",
          "signature": "Word-\u003eString-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:putTaggedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent",
          "name": "putTaggedVarBytes",
          "package": "codec-libevent",
          "signature": "Word32 -\u003e ByteString -\u003e Put",
          "source": "src/Codec-Libevent.html#putTaggedVarBytes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent",
          "module": "Codec.Libevent",
          "name": "putTaggedVarBytes",
          "normalized": "Word-\u003eByteString-\u003ePut",
          "package": "codec-libevent",
          "partial": "Tagged Var Bytes",
          "signature": "Word-\u003eByteString-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:putTaggedVarBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Libevent",
          "name": "putTaggedWord32",
          "package": "codec-libevent",
          "signature": "Word32 -\u003e Word32 -\u003e Put",
          "source": "src/Codec-Libevent.html#putTaggedWord32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Libevent",
          "module": "Codec.Libevent",
          "name": "putTaggedWord32",
          "normalized": "Word-\u003eWord-\u003ePut",
          "package": "codec-libevent",
          "partial": "Tagged Word",
          "signature": "Word-\u003eWord-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:putTaggedWord32"
      }
    }
  ]
]