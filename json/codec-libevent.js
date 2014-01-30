[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Class.html#",
      "description": {
        "fct-module": "Codec.Libevent.Class",
        "fct-package": "codec-libevent",
        "fct-signature": "module",
        "fct-source": "src/Codec-Libevent-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Class",
        "module": "Codec.Libevent.Class",
        "name": "Class",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Class.html#t:TaggedStructure",
      "description": {
        "fct-module": "Codec.Libevent.Class",
        "fct-package": "codec-libevent",
        "fct-signature": "class",
        "fct-source": "src/Codec-Libevent-Class.html#TaggedStructure",
        "fct-type": "class",
        "title": "TaggedStructure"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Class",
        "module": "Codec.Libevent.Class",
        "name": "TaggedStructure",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "Tagged Structure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Class.html#v:deserialise",
      "description": {
        "fct-descr": "\u003cp\u003eAttempt to deserialise a bytestring, returning either an error\n   message or a structure\n\u003c/p\u003e",
        "fct-module": "Codec.Libevent.Class",
        "fct-package": "codec-libevent",
        "fct-signature": "ByteString -\u003e Either String a",
        "fct-source": "src/Codec-Libevent-Class.html#deserialise",
        "fct-type": "method",
        "title": "deserialise"
      },
      "index": {
        "description": "Attempt to deserialise bytestring returning either an error message or structure",
        "hierarchy": "Codec Libevent Class",
        "module": "Codec.Libevent.Class",
        "name": "deserialise",
        "normalized": "ByteString-\u003eEither String a",
        "package": "codec-libevent",
        "partial": "",
        "signature": "ByteString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Class.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a structure filled with default values\n\u003c/p\u003e",
        "fct-module": "Codec.Libevent.Class",
        "fct-package": "codec-libevent",
        "fct-signature": "a",
        "fct-source": "src/Codec-Libevent-Class.html#empty",
        "fct-type": "method",
        "title": "empty"
      },
      "index": {
        "description": "Return structure filled with default values",
        "hierarchy": "Codec Libevent Class",
        "module": "Codec.Libevent.Class",
        "name": "empty",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Class.html#v:serialise",
      "description": {
        "fct-descr": "\u003cp\u003eSerialise a structure to a strict bytestring\n\u003c/p\u003e",
        "fct-module": "Codec.Libevent.Class",
        "fct-package": "codec-libevent",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Codec-Libevent-Class.html#serialise",
        "fct-type": "method",
        "title": "serialise"
      },
      "index": {
        "description": "Serialise structure to strict bytestring",
        "hierarchy": "Codec Libevent Class",
        "module": "Codec.Libevent.Class",
        "name": "serialise",
        "normalized": "a-\u003eByteString",
        "package": "codec-libevent",
        "partial": "",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Generate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module generates Haskell code for serialising and deserialising\n libevent tagged data structures, as implemented in libevent-1.4.0-beta.\n\u003c/p\u003e\u003cp\u003eA single .rpc file (containing one or more structures) is mapped to a single\n Haskell file. Take this example:\n\u003c/p\u003e\u003cpre\u003e struct test {\n   required int a = 1;\n   optional string b = 2;\n   repeated struct[test2] c = 3;\n }\n\u003c/pre\u003e\u003cp\u003eThis will result in a data decl for \u003ccode\u003eTest\u003c/code\u003e, having named members:\n test_a, test_b and test_c. Required elements are simple, optional\n elements are wrapped in a Maybe and repeated elements in a list.\n\u003c/p\u003e\u003cp\u003eTypes are mapped thus:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e int -\u003e Word32\n\u003c/li\u003e\u003cli\u003e string -\u003e String\n\u003c/li\u003e\u003cli\u003e bytes -\u003e ByteString (strict)\n\u003c/li\u003e\u003cli\u003e bytes[n] -\u003e ByteString (with runtime checks on the size)\n\u003c/li\u003e\u003cli\u003e struct[name] -\u003e Name (the struct must be defined in the same file)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIn the example above, \u003ccode\u003etest2\u003c/code\u003e is required to be in the same .rpc file.\n\u003c/p\u003e\u003cp\u003eFor a structure named \u003ccode\u003etest\u003c/code\u003e, the following would also be generated:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003etestEmpty\u003c/code\u003e - a Test filled with default values\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etestDeserialise\u003c/code\u003e - a strict Get instance to deserialise a test. Note\n     that these structures are self-deliminating, so additional garbage at\n     the end will be consumed and will probably result in an error\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etestDeserialiseBS\u003c/code\u003e - a function with type\n     ByteString -\u003e Either String Test where the String is an error message\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etestSerialise\u003c/code\u003e - a Put Test function. Again, recall that these\n     structures aren't self deliminating\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etestSerialiseBS\u003c/code\u003e - a function with type Test -\u003e ByteString\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eEach structure will also be an instance of the \u003ccode\u003eTaggedStructure\u003c/code\u003e class\n that you can find in \u003ca\u003eCodec.Libevent.Class\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Libevent.Generate",
        "fct-package": "codec-libevent",
        "fct-signature": "module",
        "fct-source": "src/Codec-Libevent-Generate.html",
        "fct-type": "module",
        "title": "Generate"
      },
      "index": {
        "description": "This module generates Haskell code for serialising and deserialising libevent tagged data structures as implemented in libevent-1.4.0-beta single rpc file containing one or more structures is mapped to single Haskell file Take this example struct test required int optional string repeated struct test2 This will result in data decl for Test having named members test test and test Required elements are simple optional elements are wrapped in Maybe and repeated elements in list Types are mapped thus int Word32 string String bytes ByteString strict bytes ByteString with runtime checks on the size struct name Name the struct must be defined in the same file In the example above test2 is required to be in the same rpc file For structure named test the following would also be generated testEmpty Test filled with default values testDeserialise strict Get instance to deserialise test Note that these structures are self-deliminating so additional garbage at the end will be consumed and will probably result in an error testDeserialiseBS function with type ByteString Either String Test where the String is an error message testSerialise Put Test function Again recall that these structures aren self deliminating testSerialiseBS function with type Test ByteString Each structure will also be an instance of the TaggedStructure class that you can find in Codec.Libevent.Class",
        "hierarchy": "Codec Libevent Generate",
        "module": "Codec.Libevent.Generate",
        "name": "Generate",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "Generate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Generate.html#v:generate",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate the Haskell code for the given RPC file and write to standard\n   out. The generated module will export everything and takes the given\n   name\n\u003c/p\u003e",
        "fct-module": "Codec.Libevent.Generate",
        "fct-package": "codec-libevent",
        "fct-signature": "String-\u003e RPCFile-\u003e IO ()",
        "fct-type": "function",
        "title": "generate"
      },
      "index": {
        "description": "Generate the Haskell code for the given RPC file and write to standard out The generated module will export everything and takes the given name",
        "hierarchy": "Codec Libevent Generate",
        "module": "Codec.Libevent.Generate",
        "name": "generate",
        "normalized": "String-\u003eRPCFile-\u003eIO()",
        "package": "codec-libevent",
        "partial": "",
        "signature": "String-\u003eRPCFile-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module parses libevent \u003ca\u003ehttp://monkey.org/~provos/libevent\u003c/a\u003e tagged\n data structures as implimented in libevent-1.4.0-beta. These data structures\n are described in a .rpc file.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "module",
        "fct-source": "src/Codec-Libevent-Parse.html",
        "fct-type": "module",
        "title": "Parse"
      },
      "index": {
        "description": "This module parses libevent http monkey.org provos libevent tagged data structures as implimented in libevent-1.4.0-beta These data structures are described in rpc file",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "Parse",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#t:Presence",
      "description": {
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "data",
        "fct-source": "src/Codec-Libevent-Parse.html#Presence",
        "fct-type": "data",
        "title": "Presence"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "Presence",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "Presence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#t:RPCElem",
      "description": {
        "fct-descr": "\u003cp\u003eAn RPC element is a tagged member\n\u003c/p\u003e",
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "data",
        "fct-source": "src/Codec-Libevent-Parse.html#RPCElem",
        "fct-type": "data",
        "title": "RPCElem"
      },
      "index": {
        "description": "An RPC element is tagged member",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "RPCElem",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "RPCElem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#t:RPCFile",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a libevent .rpc file - just a list of the structures within\n\u003c/p\u003e",
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "data",
        "fct-source": "src/Codec-Libevent-Parse.html#RPCFile",
        "fct-type": "data",
        "title": "RPCFile"
      },
      "index": {
        "description": "This is libevent rpc file just list of the structures within",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "RPCFile",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "RPCFile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#t:RPCStruct",
      "description": {
        "fct-descr": "\u003cp\u003eAn RPC structure has a name and a list of elements\n\u003c/p\u003e",
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "data",
        "fct-source": "src/Codec-Libevent-Parse.html#RPCStruct",
        "fct-type": "data",
        "title": "RPCStruct"
      },
      "index": {
        "description": "An RPC structure has name and list of elements",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "RPCStruct",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "RPCStruct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#t:Type",
      "description": {
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "data",
        "fct-source": "src/Codec-Libevent-Parse.html#Type",
        "fct-type": "data",
        "title": "Type"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "Type",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:Bytes",
      "description": {
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "Bytes Int",
        "fct-source": "src/Codec-Libevent-Parse.html#Type",
        "fct-type": "function",
        "title": "Bytes"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "Bytes",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:Int",
      "description": {
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "Int",
        "fct-source": "src/Codec-Libevent-Parse.html#Type",
        "fct-type": "function",
        "title": "Int"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "Int",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:Optional",
      "description": {
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "Optional",
        "fct-source": "src/Codec-Libevent-Parse.html#Presence",
        "fct-type": "function",
        "title": "Optional"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "Optional",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "Optional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:RPCElem",
      "description": {
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "RPCElem",
        "fct-source": "src/Codec-Libevent-Parse.html#RPCElem",
        "fct-type": "function",
        "title": "RPCElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "RPCElem",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "RPCElem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:RPCFile",
      "description": {
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "RPCFile",
        "fct-source": "src/Codec-Libevent-Parse.html#RPCFile",
        "fct-type": "function",
        "title": "RPCFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "RPCFile",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "RPCFile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:RPCStruct",
      "description": {
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "RPCStruct",
        "fct-source": "src/Codec-Libevent-Parse.html#RPCStruct",
        "fct-type": "function",
        "title": "RPCStruct"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "RPCStruct",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "RPCStruct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:Repeated",
      "description": {
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "Repeated",
        "fct-source": "src/Codec-Libevent-Parse.html#Presence",
        "fct-type": "function",
        "title": "Repeated"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "Repeated",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "Repeated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:Required",
      "description": {
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "Required",
        "fct-source": "src/Codec-Libevent-Parse.html#Presence",
        "fct-type": "function",
        "title": "Required"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "Required",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:String",
      "description": {
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "String",
        "fct-source": "src/Codec-Libevent-Parse.html#Type",
        "fct-type": "function",
        "title": "String"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "String",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:Struct",
      "description": {
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "Struct String",
        "fct-source": "src/Codec-Libevent-Parse.html#Type",
        "fct-type": "function",
        "title": "Struct"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "Struct",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "Struct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:VarBytes",
      "description": {
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "VarBytes",
        "fct-source": "src/Codec-Libevent-Parse.html#Type",
        "fct-type": "function",
        "title": "VarBytes"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "VarBytes",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "Var Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:elemname",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "String",
        "fct-source": "src/Codec-Libevent-Parse.html#RPCElem",
        "fct-type": "function",
        "title": "elemname"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "elemname",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:elempresence",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "Presence",
        "fct-source": "src/Codec-Libevent-Parse.html#RPCElem",
        "fct-type": "function",
        "title": "elempresence"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "elempresence",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:elemtag",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "Integer",
        "fct-source": "src/Codec-Libevent-Parse.html#RPCElem",
        "fct-type": "function",
        "title": "elemtag"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "elemtag",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:elemtype",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "Type",
        "fct-source": "src/Codec-Libevent-Parse.html#RPCElem",
        "fct-type": "function",
        "title": "elemtype"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "elemtype",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:parseRPC",
      "description": {
        "fct-descr": "\u003cp\u003eParse the given string as an RPC file\n\u003c/p\u003e",
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "String -\u003e Either ParseError RPCFile",
        "fct-source": "src/Codec-Libevent-Parse.html#parseRPC",
        "fct-type": "function",
        "title": "parseRPC"
      },
      "index": {
        "description": "Parse the given string as an RPC file",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "parseRPC",
        "normalized": "String-\u003eEither ParseError RPCFile",
        "package": "codec-libevent",
        "partial": "RPC",
        "signature": "String-\u003eEither ParseError RPCFile"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:parseRPCFile",
      "description": {
        "fct-descr": "\u003cp\u003eParse the given filename\n\u003c/p\u003e",
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "FilePath -\u003e IO (Either ParseError RPCFile)",
        "fct-source": "src/Codec-Libevent-Parse.html#parseRPCFile",
        "fct-type": "function",
        "title": "parseRPCFile"
      },
      "index": {
        "description": "Parse the given filename",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "parseRPCFile",
        "normalized": "FilePath-\u003eIO(Either ParseError RPCFile)",
        "package": "codec-libevent",
        "partial": "RPCFile",
        "signature": "FilePath-\u003eIO(Either ParseError RPCFile)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:rpcstructs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "[RPCStruct]",
        "fct-source": "src/Codec-Libevent-Parse.html#RPCFile",
        "fct-type": "function",
        "title": "rpcstructs"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "rpcstructs",
        "normalized": "[RPCStruct]",
        "package": "codec-libevent",
        "partial": "",
        "signature": "[RPCStruct]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:structelems",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "[RPCElem]",
        "fct-source": "src/Codec-Libevent-Parse.html#RPCStruct",
        "fct-type": "function",
        "title": "structelems"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "structelems",
        "normalized": "[RPCElem]",
        "package": "codec-libevent",
        "partial": "",
        "signature": "[RPCElem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent-Parse.html#v:structname",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Libevent.Parse",
        "fct-package": "codec-libevent",
        "fct-signature": "String",
        "fct-source": "src/Codec-Libevent-Parse.html#RPCStruct",
        "fct-type": "function",
        "title": "structname"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent Parse",
        "module": "Codec.Libevent.Parse",
        "name": "structname",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTagged data structures are an extensible way of serialising data in a\n platform independent way for transmission across a network etc. This package\n implements the tagged structures from libevent 1.4.0-beta.\n\u003c/p\u003e\u003cp\u003eA tagged structure is described in a text file and might look like this:\n\u003c/p\u003e\u003cpre\u003e struct foo {\n   required int count = 1;\n   optional struct[bar] names = 2;\n }\n\n struct bar {\n   repeated string s = 1;\n }\n\u003c/pre\u003e\u003cp\u003eThe numbers after the equals signs are the tag numbers for each element of\n a structure. The tag numbers must be unique within a structure and should\n be sequenctial (but are not required to be).\n\u003c/p\u003e\u003cp\u003eThe tag numbers must also be fixed for all time. When deserialising,\n unknown tags are ignored. Thus one can add a new (non-required) element to\n \u003ccode\u003efoo\u003c/code\u003e in the future and still interoperate with older code which knows\n nothing of the new element.\n\u003c/p\u003e\u003cp\u003eEach element in the description looks like:\n\u003c/p\u003e\u003cpre\u003e \u003cpresence\u003e \u003ctype\u003e \u003cname\u003e = \u003ctag number\u003e ;\n\u003c/pre\u003e\u003cp\u003eThe possible presence values are: \u003ccode\u003erequired\u003c/code\u003e, \u003ccode\u003eoptional\u003c/code\u003e and \u003ccode\u003erepeated\u003c/code\u003e. The\n types are (currently): \u003ccode\u003eint\u003c/code\u003e, \u003ccode\u003estring\u003c/code\u003e, \u003ccode\u003estruct[NAME]\u003c/code\u003e and \u003ccode\u003ebytes\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOther modules in this package parse these descriptions and automatically\n generate Haskell code for them. You should have a binary called\n \u003ccode\u003ecodec-libevent-generate\u003c/code\u003e which does this. See the documentation for\n \u003ca\u003eCodec.Libevent.Generate\u003c/a\u003e about the structure of the generated code.\n\u003c/p\u003e\u003cp\u003eOnce you have generated the code, you can import it as a regular Haskell\n module and serialise/deserialise these structures. You can also use\n the libevent library to process them in C.\n\u003c/p\u003e\u003cp\u003eThis module contains helper functions and is imported by the code generated\n by \u003ca\u003eCodec.Libevent.Generate\u003c/a\u003e. Apart from the \u003ccode\u003eTaggedStructure\u003c/code\u003e class, there's\n probably not anything generally useful here.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Libevent",
        "fct-package": "codec-libevent",
        "fct-signature": "module",
        "fct-source": "src/Codec-Libevent.html",
        "fct-type": "module",
        "title": "Libevent"
      },
      "index": {
        "description": "Tagged data structures are an extensible way of serialising data in platform independent way for transmission across network etc This package implements the tagged structures from libevent beta tagged structure is described in text file and might look like this struct foo required int count optional struct bar names struct bar repeated string The numbers after the equals signs are the tag numbers for each element of structure The tag numbers must be unique within structure and should be sequenctial but are not required to be The tag numbers must also be fixed for all time When deserialising unknown tags are ignored Thus one can add new non-required element to foo in the future and still interoperate with older code which knows nothing of the new element Each element in the description looks like presence type name tag number The possible presence values are required optional and repeated The types are currently int string struct NAME and bytes Other modules in this package parse these descriptions and automatically generate Haskell code for them You should have binary called codec-libevent-generate which does this See the documentation for Codec.Libevent.Generate about the structure of the generated code Once you have generated the code you can import it as regular Haskell module and serialise deserialise these structures You can also use the libevent library to process them in This module contains helper functions and is imported by the code generated by Codec.Libevent.Generate Apart from the TaggedStructure class there probably not anything generally useful here",
        "hierarchy": "Codec Libevent",
        "module": "Codec.Libevent",
        "name": "Libevent",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "Libevent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:decodeString",
      "description": {
        "fct-module": "Codec.Libevent",
        "fct-package": "codec-libevent",
        "fct-signature": "ByteString -\u003e String",
        "fct-source": "src/Codec-Libevent.html#decodeString",
        "fct-type": "function",
        "title": "decodeString"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent",
        "module": "Codec.Libevent",
        "name": "decodeString",
        "normalized": "ByteString-\u003eString",
        "package": "codec-libevent",
        "partial": "String",
        "signature": "ByteString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:getBase128",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a base128 encoded integer. This is a variable length encoded int\n   where the last byte has the MSB set to 0.\n\u003c/p\u003e",
        "fct-module": "Codec.Libevent",
        "fct-package": "codec-libevent",
        "fct-signature": "Get Word32",
        "fct-source": "src/Codec-Libevent.html#getBase128",
        "fct-type": "function",
        "title": "getBase128"
      },
      "index": {
        "description": "Decode base128 encoded integer This is variable length encoded int where the last byte has the MSB set to",
        "hierarchy": "Codec Libevent",
        "module": "Codec.Libevent",
        "name": "getBase128",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:getLengthPrefixed",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a number where the first nibble of the first byte is the number\n   of nibbles in the number. The remaining nibbles appear in little-endian\n   order following, with 0 padding to the nearest byte.\n\u003c/p\u003e",
        "fct-module": "Codec.Libevent",
        "fct-package": "codec-libevent",
        "fct-signature": "Get Word32",
        "fct-source": "src/Codec-Libevent.html#getLengthPrefixed",
        "fct-type": "function",
        "title": "getLengthPrefixed"
      },
      "index": {
        "description": "Decode number where the first nibble of the first byte is the number of nibbles in the number The remaining nibbles appear in little-endian order following with padding to the nearest byte",
        "hierarchy": "Codec Libevent",
        "module": "Codec.Libevent",
        "name": "getLengthPrefixed",
        "normalized": "",
        "package": "codec-libevent",
        "partial": "Length Prefixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:lengthPrefixedLength",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the length of the length-prefixed representation of a Word32\n\u003c/p\u003e",
        "fct-module": "Codec.Libevent",
        "fct-package": "codec-libevent",
        "fct-signature": "Word32 -\u003e Int",
        "fct-source": "src/Codec-Libevent.html#lengthPrefixedLength",
        "fct-type": "function",
        "title": "lengthPrefixedLength"
      },
      "index": {
        "description": "Return the length of the length-prefixed representation of Word32",
        "hierarchy": "Codec Libevent",
        "module": "Codec.Libevent",
        "name": "lengthPrefixedLength",
        "normalized": "Word-\u003eInt",
        "package": "codec-libevent",
        "partial": "Prefixed Length",
        "signature": "Word-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:nibbleLength",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of nibbles, n, required to encode a given number. n \u003e= 1\n\u003c/p\u003e",
        "fct-module": "Codec.Libevent",
        "fct-package": "codec-libevent",
        "fct-signature": "Word32 -\u003e Int",
        "fct-source": "src/Codec-Libevent.html#nibbleLength",
        "fct-type": "function",
        "title": "nibbleLength"
      },
      "index": {
        "description": "Return the number of nibbles required to encode given number",
        "hierarchy": "Codec Libevent",
        "module": "Codec.Libevent",
        "name": "nibbleLength",
        "normalized": "Word-\u003eInt",
        "package": "codec-libevent",
        "partial": "Length",
        "signature": "Word-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:putBase128",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a integer in Base128 form\n\u003c/p\u003e",
        "fct-module": "Codec.Libevent",
        "fct-package": "codec-libevent",
        "fct-signature": "Word32 -\u003e Put",
        "fct-source": "src/Codec-Libevent.html#putBase128",
        "fct-type": "function",
        "title": "putBase128"
      },
      "index": {
        "description": "Encode integer in Base128 form",
        "hierarchy": "Codec Libevent",
        "module": "Codec.Libevent",
        "name": "putBase128",
        "normalized": "Word-\u003ePut",
        "package": "codec-libevent",
        "partial": "Base",
        "signature": "Word-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:putLengthPrefixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a Word32 by prefixing the number of nibbles and following with the\n   nibbles of the number in little-endian order\n\u003c/p\u003e",
        "fct-module": "Codec.Libevent",
        "fct-package": "codec-libevent",
        "fct-signature": "Word32 -\u003e Put",
        "fct-source": "src/Codec-Libevent.html#putLengthPrefixed",
        "fct-type": "function",
        "title": "putLengthPrefixed"
      },
      "index": {
        "description": "Encode Word32 by prefixing the number of nibbles and following with the nibbles of the number in little-endian order",
        "hierarchy": "Codec Libevent",
        "module": "Codec.Libevent",
        "name": "putLengthPrefixed",
        "normalized": "Word-\u003ePut",
        "package": "codec-libevent",
        "partial": "Length Prefixed",
        "signature": "Word-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:putTaggedString",
      "description": {
        "fct-module": "Codec.Libevent",
        "fct-package": "codec-libevent",
        "fct-signature": "Word32 -\u003e String -\u003e Put",
        "fct-source": "src/Codec-Libevent.html#putTaggedString",
        "fct-type": "function",
        "title": "putTaggedString"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent",
        "module": "Codec.Libevent",
        "name": "putTaggedString",
        "normalized": "Word-\u003eString-\u003ePut",
        "package": "codec-libevent",
        "partial": "Tagged String",
        "signature": "Word-\u003eString-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:putTaggedVarBytes",
      "description": {
        "fct-module": "Codec.Libevent",
        "fct-package": "codec-libevent",
        "fct-signature": "Word32 -\u003e ByteString -\u003e Put",
        "fct-source": "src/Codec-Libevent.html#putTaggedVarBytes",
        "fct-type": "function",
        "title": "putTaggedVarBytes"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent",
        "module": "Codec.Libevent",
        "name": "putTaggedVarBytes",
        "normalized": "Word-\u003eByteString-\u003ePut",
        "package": "codec-libevent",
        "partial": "Tagged Var Bytes",
        "signature": "Word-\u003eByteString-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/codec-libevent/docs/Codec-Libevent.html#v:putTaggedWord32",
      "description": {
        "fct-module": "Codec.Libevent",
        "fct-package": "codec-libevent",
        "fct-signature": "Word32 -\u003e Word32 -\u003e Put",
        "fct-source": "src/Codec-Libevent.html#putTaggedWord32",
        "fct-type": "function",
        "title": "putTaggedWord32"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Libevent",
        "module": "Codec.Libevent",
        "name": "putTaggedWord32",
        "normalized": "Word-\u003eWord-\u003ePut",
        "package": "codec-libevent",
        "partial": "Tagged Word",
        "signature": "Word-\u003eWord-\u003ePut"
      }
    }
  }
]