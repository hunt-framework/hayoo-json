[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-MakeReflections.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eMakeReflections\u003c/code\u003e module takes the \u003ccode\u003eFileDescriptorProto\u003c/code\u003e\n output from \u003ccode\u003eResolve\u003c/code\u003e and produces a \u003ccode\u003e\u003ca\u003eProtoInfo\u003c/a\u003e\u003c/code\u003e from\n \u003ccode\u003eReflections\u003c/code\u003e.  This also takes a Haskell module prefix and the\n proto's package namespace as input.  The output is suitable\n for passing to the \u003ccode\u003eGen\u003c/code\u003e module to produce the files.\n\u003c/p\u003e\u003cp\u003eThis acheives several things: It moves the data from a nested tree\n to flat lists and maps. It moves the group information from the\n parent Descriptor to the actual Descriptor.  It moves the data out\n of Maybe types.  It converts Utf8 to String.  Keys known to extend\n a Descriptor are listed in that Descriptor.\n\u003c/p\u003e\u003cp\u003eIn building the reflection info new things are computed. It changes\n dotted names to ProtoName using the translator from\n \u003ccode\u003emakeNameMaps\u003c/code\u003e.  It parses the default value from the ByteString to\n a Haskell type.  For fields, the value of the tag on the wire is\n computed and so is its size on the wire.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.MakeReflections",
        "fct-package": "hprotoc",
        "fct-signature": "module",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-MakeReflections.html",
        "fct-type": "module",
        "title": "MakeReflections"
      },
      "index": {
        "description": "The MakeReflections module takes the FileDescriptorProto output from Resolve and produces ProtoInfo from Reflections This also takes Haskell module prefix and the proto package namespace as input The output is suitable for passing to the Gen module to produce the files This acheives several things It moves the data from nested tree to flat lists and maps It moves the group information from the parent Descriptor to the actual Descriptor It moves the data out of Maybe types It converts Utf8 to String Keys known to extend Descriptor are listed in that Descriptor In building the reflection info new things are computed It changes dotted names to ProtoName using the translator from makeNameMaps It parses the default value from the ByteString to Haskell type For fields the value of the tag on the wire is computed and so is its size on the wire",
        "hierarchy": "Text ProtocolBuffers ProtoCompile MakeReflections",
        "module": "Text.ProtocolBuffers.ProtoCompile.MakeReflections",
        "name": "MakeReflections",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Make Reflections",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-MakeReflections.html#v:makeProtoInfo",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.MakeReflections",
        "fct-package": "hprotoc",
        "fct-signature": "(Bool, Bool) -\u003e NameMap -\u003e FileDescriptorProto -\u003e ProtoInfo",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-MakeReflections.html#makeProtoInfo",
        "fct-type": "function",
        "title": "makeProtoInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile MakeReflections",
        "module": "Text.ProtocolBuffers.ProtoCompile.MakeReflections",
        "name": "makeProtoInfo",
        "normalized": "(Bool,Bool)-\u003eNameMap-\u003eFileDescriptorProto-\u003eProtoInfo",
        "package": "hprotoc",
        "partial": "Proto Info",
        "signature": "(Bool,Bool)-\u003eNameMap-\u003eFileDescriptorProto-\u003eProtoInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-MakeReflections.html#v:serializeFDP",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.MakeReflections",
        "fct-package": "hprotoc",
        "fct-signature": "FileDescriptorProto -\u003e ByteString",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-MakeReflections.html#serializeFDP",
        "fct-type": "function",
        "title": "serializeFDP"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile MakeReflections",
        "module": "Text.ProtocolBuffers.ProtoCompile.MakeReflections",
        "name": "serializeFDP",
        "normalized": "FileDescriptorProto-\u003eByteString",
        "package": "hprotoc",
        "partial": "FDP",
        "signature": "FileDescriptorProto-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis \u003ca\u003eParser\u003c/a\u003e module takes a filename and its contents as a\n bytestring, and uses Lexer.hs to make a stream of tokens that it\n parses. No IO is performed and the error function is not used.\n Since the Lexer should also avoid such errors this should be a\n reliably total function of the input.\n\u003c/p\u003e\u003cp\u003eThe internals have been updated to handle Google's protobuf version\n 2.0.3 formats, including EnumValueOptions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Parser",
        "fct-package": "hprotoc",
        "fct-signature": "module",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "This Parser module takes filename and its contents as bytestring and uses Lexer.hs to make stream of tokens that it parses No IO is performed and the error function is not used Since the Lexer should also avoid such errors this should be reliably total function of the input The internals have been updated to handle Google protobuf version formats including EnumValueOptions",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Parser",
        "module": "Text.ProtocolBuffers.ProtoCompile.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Parser.html#v:isValidPacked",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Parser",
        "fct-package": "hprotoc",
        "fct-signature": "Label -\u003e Maybe Type -\u003e Bool",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Parser.html#isValidPacked",
        "fct-type": "function",
        "title": "isValidPacked"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Parser",
        "module": "Text.ProtocolBuffers.ProtoCompile.Parser",
        "name": "isValidPacked",
        "normalized": "Label-\u003eMaybe Type-\u003eBool",
        "package": "hprotoc",
        "partial": "Valid Packed",
        "signature": "Label-\u003eMaybe Type-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Parser.html#v:parseProto",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Parser",
        "fct-package": "hprotoc",
        "fct-signature": "String -\u003e ByteString -\u003e Either ParseError FileDescriptorProto",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Parser.html#parseProto",
        "fct-type": "function",
        "title": "parseProto"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Parser",
        "module": "Text.ProtocolBuffers.ProtoCompile.Parser",
        "name": "parseProto",
        "normalized": "String-\u003eByteString-\u003eEither ParseError FileDescriptorProto",
        "package": "hprotoc",
        "partial": "Proto",
        "signature": "String-\u003eByteString-\u003eEither ParseError FileDescriptorProto"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis huge module handles the loading and name resolution.  The\n loadProto command recursively gets all the imported proto files.\n The makeNameMaps command makes the translator from proto name to\n Haskell name.  Many possible errors in the proto data are caught\n and reported by these operations.\n\u003c/p\u003e\u003cp\u003ehprotoc will actually resolve more unqualified imported names than Google's protoc which requires\n more qualified names.  I do not have the obsessive nature to fix this.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "module",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html",
        "fct-type": "module",
        "title": "Resolve"
      },
      "index": {
        "description": "This huge module handles the loading and name resolution The loadProto command recursively gets all the imported proto files The makeNameMaps command makes the translator from proto name to Haskell name Many possible errors in the proto data are caught and reported by these operations hprotoc will actually resolve more unqualified imported names than Google protoc which requires more qualified names do not have the obsessive nature to fix this",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "Resolve",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Resolve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#t:CanonFP",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#CanonFP",
        "fct-type": "newtype",
        "title": "CanonFP"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "CanonFP",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Canon FP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#t:Env",
      "description": {
        "fct-descr": "\u003cp\u003eBy construction Env is 0 or more Local Entity namespaces followed\n by 1 or more Global TopLevel namespaces (self and imported files).\n Entities in first Global TopLevel namespace can refer to each other\n and to Entities in the list of directly imported TopLevel namespaces only.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#Env",
        "fct-type": "data",
        "title": "Env"
      },
      "index": {
        "description": "By construction Env is or more Local Entity namespaces followed by or more Global TopLevel namespaces self and imported files Entities in first Global TopLevel namespace can refer to each other and to Entities in the list of directly imported TopLevel namespaces only",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "Env",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#t:LocalFP",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "newtype",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#LocalFP",
        "fct-type": "newtype",
        "title": "LocalFP"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "LocalFP",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Local FP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#t:NameMap",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#NameMap",
        "fct-type": "data",
        "title": "NameMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "NameMap",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Name Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#t:PackageID",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#PackageID",
        "fct-type": "data",
        "title": "PackageID"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "PackageID",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Package ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#t:ReMap",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "type",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#ReMap",
        "fct-type": "type",
        "title": "ReMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "ReMap",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Re Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#t:TopLevel",
      "description": {
        "fct-descr": "\u003cp\u003eTopLevel corresponds to all items defined in a .proto file. This\n includes the FileOptions since this will be consulted when\n generating the Haskell module names, and the imported files are only\n known through their TopLevel data.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "data",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#TopLevel",
        "fct-type": "data",
        "title": "TopLevel"
      },
      "index": {
        "description": "TopLevel corresponds to all items defined in proto file This includes the FileOptions since this will be consulted when generating the Haskell module names and the imported files are only known through their TopLevel data",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "TopLevel",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Top Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:CanonFP",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "CanonFP",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#CanonFP",
        "fct-type": "function",
        "title": "CanonFP"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "CanonFP",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Canon FP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:Global",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "Global TopLevel [TopLevel]",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#Env",
        "fct-type": "function",
        "title": "Global"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "Global",
        "normalized": "Global TopLevel[TopLevel]",
        "package": "hprotoc",
        "partial": "Global",
        "signature": "Global TopLevel[TopLevel]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:Local",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "Local [IName String] EMap Env",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#Env",
        "fct-type": "function",
        "title": "Local"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "Local",
        "normalized": "Local[IName String]EMap Env",
        "package": "hprotoc",
        "partial": "Local",
        "signature": "Local[IName String]EMap Env"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:LocalFP",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "LocalFP",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#LocalFP",
        "fct-type": "function",
        "title": "LocalFP"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "LocalFP",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Local FP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:NameMap",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "NameMap (PackageID (FIName Utf8), [MName String], [MName String]) ReMap",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#NameMap",
        "fct-type": "function",
        "title": "NameMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "NameMap",
        "normalized": "NameMap(PackageID(FIName Utf),[MName String],[MName String])ReMap",
        "package": "hprotoc",
        "partial": "Name Map",
        "signature": "NameMap(PackageID(FIName Utf),[MName String],[MName String])ReMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:NoPackageID",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "NoPackageID",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#PackageID",
        "fct-type": "function",
        "title": "NoPackageID"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "NoPackageID",
        "normalized": "",
        "package": "hprotoc",
        "partial": "No Package ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:PackageID",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "PackageID",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#PackageID",
        "fct-type": "function",
        "title": "PackageID"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "PackageID",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Package ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:TopLevel",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "TopLevel",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#TopLevel",
        "fct-type": "function",
        "title": "TopLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "TopLevel",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Top Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:_getNoPackageID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "a",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#PackageID",
        "fct-type": "function",
        "title": "_getNoPackageID"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "_getNoPackageID",
        "normalized": "",
        "package": "hprotoc",
        "partial": "No Package ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:_getPackageID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "a",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#PackageID",
        "fct-type": "function",
        "title": "_getPackageID"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "_getPackageID",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Package ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:getPackageID",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "PackageID a -\u003e a",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#getPackageID",
        "fct-type": "function",
        "title": "getPackageID"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "getPackageID",
        "normalized": "PackageID a-\u003ea",
        "package": "hprotoc",
        "partial": "Package ID",
        "signature": "PackageID a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:getTLS",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "Env -\u003e (TopLevel, [TopLevel])",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#getTLS",
        "fct-type": "function",
        "title": "getTLS"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "getTLS",
        "normalized": "Env-\u003e(TopLevel,[TopLevel])",
        "package": "hprotoc",
        "partial": "TLS",
        "signature": "Env-\u003e(TopLevel,[TopLevel])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:loadCodeGenRequest",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "CodeGeneratorRequest -\u003e LocalFP -\u003e (Env, [FileDescriptorProto])",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#loadCodeGenRequest",
        "fct-type": "function",
        "title": "loadCodeGenRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "loadCodeGenRequest",
        "normalized": "CodeGeneratorRequest-\u003eLocalFP-\u003e(Env,[FileDescriptorProto])",
        "package": "hprotoc",
        "partial": "Code Gen Request",
        "signature": "CodeGeneratorRequest-\u003eLocalFP-\u003e(Env,[FileDescriptorProto])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:loadProto",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of paths to search, loads proto files by\n looking for them in the file system.\n\u003c/p\u003e",
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "[LocalFP] -\u003e LocalFP -\u003e IO (Env, [FileDescriptorProto])",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#loadProto",
        "fct-type": "function",
        "title": "loadProto"
      },
      "index": {
        "description": "Given list of paths to search loads proto files by looking for them in the file system",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "loadProto",
        "normalized": "[LocalFP]-\u003eLocalFP-\u003eIO(Env,[FileDescriptorProto])",
        "package": "hprotoc",
        "partial": "Proto",
        "signature": "[LocalFP]-\u003eLocalFP-\u003eIO(Env,[FileDescriptorProto])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:makeNameMaps",
      "description": {
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "[MName String] -\u003e [(CanonFP, [MName String])] -\u003e Env -\u003e Either ErrStr NameMap",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#makeNameMaps",
        "fct-type": "function",
        "title": "makeNameMaps"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "makeNameMaps",
        "normalized": "[MName String]-\u003e[(CanonFP,[MName String])]-\u003eEnv-\u003eEither ErrStr NameMap",
        "package": "hprotoc",
        "partial": "Name Maps",
        "signature": "[MName String]-\u003e[(CanonFP,[MName String])]-\u003eEnv-\u003eEither ErrStr NameMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:top-39-FDP",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "Either ErrStr FileDescriptorProto",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#TopLevel",
        "fct-type": "function",
        "title": "top'FDP"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "top'FDP",
        "normalized": "",
        "package": "hprotoc",
        "partial": "FDP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:top-39-Package",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "PackageID [IName String]",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#TopLevel",
        "fct-type": "function",
        "title": "top'Package"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "top'Package",
        "normalized": "PackageID[IName String]",
        "package": "hprotoc",
        "partial": "Package",
        "signature": "PackageID[IName String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:top-39-Path",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "FilePath",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#TopLevel",
        "fct-type": "function",
        "title": "top'Path"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "top'Path",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:top-39-mVals",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "EMap",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#TopLevel",
        "fct-type": "function",
        "title": "top'mVals"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "top'mVals",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Vals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:unCanonFP",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "FilePath",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#CanonFP",
        "fct-type": "function",
        "title": "unCanonFP"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "unCanonFP",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Canon FP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:unLocalFP",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "fct-package": "hprotoc",
        "fct-signature": "FilePath",
        "fct-source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#LocalFP",
        "fct-type": "function",
        "title": "unLocalFP"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
        "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
        "name": "unLocalFP",
        "normalized": "",
        "package": "hprotoc",
        "partial": "Local FP",
        "signature": ""
      }
    }
  }
]