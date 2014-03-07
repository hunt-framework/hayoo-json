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
        "word": "hprotoc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eMakeReflections\u003c/code\u003e module takes the \u003ccode\u003eFileDescriptorProto\u003c/code\u003e\n output from \u003ccode\u003eResolve\u003c/code\u003e and produces a \u003ccode\u003e\u003ca\u003eProtoInfo\u003c/a\u003e\u003c/code\u003e from\n \u003ccode\u003eReflections\u003c/code\u003e.  This also takes a Haskell module prefix and the\n proto's package namespace as input.  The output is suitable\n for passing to the \u003ccode\u003eGen\u003c/code\u003e module to produce the files.\n\u003c/p\u003e\u003cp\u003eThis acheives several things: It moves the data from a nested tree\n to flat lists and maps. It moves the group information from the\n parent Descriptor to the actual Descriptor.  It moves the data out\n of Maybe types.  It converts Utf8 to String.  Keys known to extend\n a Descriptor are listed in that Descriptor.\n\u003c/p\u003e\u003cp\u003eIn building the reflection info new things are computed. It changes\n dotted names to ProtoName using the translator from\n \u003ccode\u003emakeNameMaps\u003c/code\u003e.  It parses the default value from the ByteString to\n a Haskell type.  For fields, the value of the tag on the wire is\n computed and so is its size on the wire.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ProtocolBuffers.ProtoCompile.MakeReflections",
          "name": "MakeReflections",
          "package": "hprotoc",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-MakeReflections.html",
          "type": "module"
        },
        "index": {
          "description": "The MakeReflections module takes the FileDescriptorProto output from Resolve and produces ProtoInfo from Reflections This also takes Haskell module prefix and the proto package namespace as input The output is suitable for passing to the Gen module to produce the files This acheives several things It moves the data from nested tree to flat lists and maps It moves the group information from the parent Descriptor to the actual Descriptor It moves the data out of Maybe types It converts Utf8 to String Keys known to extend Descriptor are listed in that Descriptor In building the reflection info new things are computed It changes dotted names to ProtoName using the translator from makeNameMaps It parses the default value from the ByteString to Haskell type For fields the value of the tag on the wire is computed and so is its size on the wire",
          "hierarchy": "Text ProtocolBuffers ProtoCompile MakeReflections",
          "module": "Text.ProtocolBuffers.ProtoCompile.MakeReflections",
          "name": "MakeReflections",
          "package": "hprotoc",
          "partial": "Make Reflections",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-MakeReflections.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.MakeReflections",
          "name": "makeProtoInfo",
          "package": "hprotoc",
          "signature": "(Bool, Bool) -\u003e NameMap -\u003e FileDescriptorProto -\u003e ProtoInfo",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-MakeReflections.html#makeProtoInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile MakeReflections",
          "module": "Text.ProtocolBuffers.ProtoCompile.MakeReflections",
          "name": "makeProtoInfo",
          "normalized": "(Bool,Bool)-\u003eNameMap-\u003eFileDescriptorProto-\u003eProtoInfo",
          "package": "hprotoc",
          "partial": "Proto Info",
          "signature": "(Bool,Bool)-\u003eNameMap-\u003eFileDescriptorProto-\u003eProtoInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-MakeReflections.html#v:makeProtoInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.MakeReflections",
          "name": "serializeFDP",
          "package": "hprotoc",
          "signature": "FileDescriptorProto -\u003e ByteString",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-MakeReflections.html#serializeFDP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile MakeReflections",
          "module": "Text.ProtocolBuffers.ProtoCompile.MakeReflections",
          "name": "serializeFDP",
          "normalized": "FileDescriptorProto-\u003eByteString",
          "package": "hprotoc",
          "partial": "FDP",
          "signature": "FileDescriptorProto-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-MakeReflections.html#v:serializeFDP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis \u003ca\u003eParser\u003c/a\u003e module takes a filename and its contents as a\n bytestring, and uses Lexer.hs to make a stream of tokens that it\n parses. No IO is performed and the error function is not used.\n Since the Lexer should also avoid such errors this should be a\n reliably total function of the input.\n\u003c/p\u003e\u003cp\u003eThe internals have been updated to handle Google's protobuf version\n 2.0.3 formats, including EnumValueOptions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ProtocolBuffers.ProtoCompile.Parser",
          "name": "Parser",
          "package": "hprotoc",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "This Parser module takes filename and its contents as bytestring and uses Lexer.hs to make stream of tokens that it parses No IO is performed and the error function is not used Since the Lexer should also avoid such errors this should be reliably total function of the input The internals have been updated to handle Google protobuf version formats including EnumValueOptions",
          "hierarchy": "Text ProtocolBuffers ProtoCompile Parser",
          "module": "Text.ProtocolBuffers.ProtoCompile.Parser",
          "name": "Parser",
          "package": "hprotoc",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Parser",
          "name": "isValidPacked",
          "package": "hprotoc",
          "signature": "Label -\u003e Maybe Type -\u003e Bool",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Parser.html#isValidPacked",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Parser",
          "module": "Text.ProtocolBuffers.ProtoCompile.Parser",
          "name": "isValidPacked",
          "normalized": "Label-\u003eMaybe Type-\u003eBool",
          "package": "hprotoc",
          "partial": "Valid Packed",
          "signature": "Label-\u003eMaybe Type-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Parser.html#v:isValidPacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Parser",
          "name": "parseProto",
          "package": "hprotoc",
          "signature": "String -\u003e ByteString -\u003e Either ParseError FileDescriptorProto",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Parser.html#parseProto",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Parser",
          "module": "Text.ProtocolBuffers.ProtoCompile.Parser",
          "name": "parseProto",
          "normalized": "String-\u003eByteString-\u003eEither ParseError FileDescriptorProto",
          "package": "hprotoc",
          "partial": "Proto",
          "signature": "String-\u003eByteString-\u003eEither ParseError FileDescriptorProto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Parser.html#v:parseProto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis huge module handles the loading and name resolution.  The\n loadProto command recursively gets all the imported proto files.\n The makeNameMaps command makes the translator from proto name to\n Haskell name.  Many possible errors in the proto data are caught\n and reported by these operations.\n\u003c/p\u003e\u003cp\u003ehprotoc will actually resolve more unqualified imported names than Google's protoc which requires\n more qualified names.  I do not have the obsessive nature to fix this.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "Resolve",
          "package": "hprotoc",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html",
          "type": "module"
        },
        "index": {
          "description": "This huge module handles the loading and name resolution The loadProto command recursively gets all the imported proto files The makeNameMaps command makes the translator from proto name to Haskell name Many possible errors in the proto data are caught and reported by these operations hprotoc will actually resolve more unqualified imported names than Google protoc which requires more qualified names do not have the obsessive nature to fix this",
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "Resolve",
          "package": "hprotoc",
          "partial": "Resolve",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "CanonFP",
          "package": "hprotoc",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#CanonFP",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "CanonFP",
          "package": "hprotoc",
          "partial": "Canon FP",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#t:CanonFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBy construction Env is 0 or more Local Entity namespaces followed\n by 1 or more Global TopLevel namespaces (self and imported files).\n Entities in first Global TopLevel namespace can refer to each other\n and to Entities in the list of directly imported TopLevel namespaces only.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "Env",
          "package": "hprotoc",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#Env",
          "type": "data"
        },
        "index": {
          "description": "By construction Env is or more Local Entity namespaces followed by or more Global TopLevel namespaces self and imported files Entities in first Global TopLevel namespace can refer to each other and to Entities in the list of directly imported TopLevel namespaces only",
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "Env",
          "package": "hprotoc",
          "partial": "Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#t:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "LocalFP",
          "package": "hprotoc",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#LocalFP",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "LocalFP",
          "package": "hprotoc",
          "partial": "Local FP",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#t:LocalFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "NameMap",
          "package": "hprotoc",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#NameMap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "NameMap",
          "package": "hprotoc",
          "partial": "Name Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#t:NameMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "PackageID",
          "package": "hprotoc",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#PackageID",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "PackageID",
          "package": "hprotoc",
          "partial": "Package ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#t:PackageID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "ReMap",
          "package": "hprotoc",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#ReMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "ReMap",
          "package": "hprotoc",
          "partial": "Re Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#t:ReMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTopLevel corresponds to all items defined in a .proto file. This\n includes the FileOptions since this will be consulted when\n generating the Haskell module names, and the imported files are only\n known through their TopLevel data.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "TopLevel",
          "package": "hprotoc",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#TopLevel",
          "type": "data"
        },
        "index": {
          "description": "TopLevel corresponds to all items defined in proto file This includes the FileOptions since this will be consulted when generating the Haskell module names and the imported files are only known through their TopLevel data",
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "TopLevel",
          "package": "hprotoc",
          "partial": "Top Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#t:TopLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "CanonFP",
          "package": "hprotoc",
          "signature": "CanonFP",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#CanonFP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "CanonFP",
          "package": "hprotoc",
          "partial": "Canon FP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:CanonFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "Global",
          "package": "hprotoc",
          "signature": "Global TopLevel [TopLevel]",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "Global",
          "normalized": "Global TopLevel[TopLevel]",
          "package": "hprotoc",
          "partial": "Global",
          "signature": "Global TopLevel[TopLevel]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:Global"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "Local",
          "package": "hprotoc",
          "signature": "Local [IName String] EMap Env",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "Local",
          "normalized": "Local[IName String]EMap Env",
          "package": "hprotoc",
          "partial": "Local",
          "signature": "Local[IName String]EMap Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:Local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "LocalFP",
          "package": "hprotoc",
          "signature": "LocalFP",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#LocalFP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "LocalFP",
          "package": "hprotoc",
          "partial": "Local FP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:LocalFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "NameMap",
          "package": "hprotoc",
          "signature": "NameMap (PackageID (FIName Utf8), [MName String], [MName String]) ReMap",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#NameMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "NameMap",
          "normalized": "NameMap(PackageID(FIName Utf),[MName String],[MName String])ReMap",
          "package": "hprotoc",
          "partial": "Name Map",
          "signature": "NameMap(PackageID(FIName Utf),[MName String],[MName String])ReMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:NameMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "NoPackageID",
          "package": "hprotoc",
          "signature": "NoPackageID",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#PackageID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "NoPackageID",
          "package": "hprotoc",
          "partial": "No Package ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:NoPackageID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "PackageID",
          "package": "hprotoc",
          "signature": "PackageID",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#PackageID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "PackageID",
          "package": "hprotoc",
          "partial": "Package ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:PackageID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "TopLevel",
          "package": "hprotoc",
          "signature": "TopLevel",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#TopLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "TopLevel",
          "package": "hprotoc",
          "partial": "Top Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:TopLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "_getNoPackageID",
          "package": "hprotoc",
          "signature": "a",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#PackageID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "_getNoPackageID",
          "package": "hprotoc",
          "partial": "No Package ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:_getNoPackageID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "_getPackageID",
          "package": "hprotoc",
          "signature": "a",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#PackageID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "_getPackageID",
          "package": "hprotoc",
          "partial": "Package ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:_getPackageID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "getPackageID",
          "package": "hprotoc",
          "signature": "PackageID a -\u003e a",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#getPackageID",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "getPackageID",
          "normalized": "PackageID a-\u003ea",
          "package": "hprotoc",
          "partial": "Package ID",
          "signature": "PackageID a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:getPackageID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "getTLS",
          "package": "hprotoc",
          "signature": "Env -\u003e (TopLevel, [TopLevel])",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#getTLS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "getTLS",
          "normalized": "Env-\u003e(TopLevel,[TopLevel])",
          "package": "hprotoc",
          "partial": "TLS",
          "signature": "Env-\u003e(TopLevel,[TopLevel])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:getTLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "loadCodeGenRequest",
          "package": "hprotoc",
          "signature": "CodeGeneratorRequest -\u003e LocalFP -\u003e (Env, [FileDescriptorProto])",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#loadCodeGenRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "loadCodeGenRequest",
          "normalized": "CodeGeneratorRequest-\u003eLocalFP-\u003e(Env,[FileDescriptorProto])",
          "package": "hprotoc",
          "partial": "Code Gen Request",
          "signature": "CodeGeneratorRequest-\u003eLocalFP-\u003e(Env,[FileDescriptorProto])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:loadCodeGenRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of paths to search, loads proto files by\n looking for them in the file system.\n\u003c/p\u003e",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "loadProto",
          "package": "hprotoc",
          "signature": "[LocalFP] -\u003e LocalFP -\u003e IO (Env, [FileDescriptorProto])",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#loadProto",
          "type": "function"
        },
        "index": {
          "description": "Given list of paths to search loads proto files by looking for them in the file system",
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "loadProto",
          "normalized": "[LocalFP]-\u003eLocalFP-\u003eIO(Env,[FileDescriptorProto])",
          "package": "hprotoc",
          "partial": "Proto",
          "signature": "[LocalFP]-\u003eLocalFP-\u003eIO(Env,[FileDescriptorProto])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:loadProto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "makeNameMaps",
          "package": "hprotoc",
          "signature": "[MName String] -\u003e [(CanonFP, [MName String])] -\u003e Env -\u003e Either ErrStr NameMap",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#makeNameMaps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "makeNameMaps",
          "normalized": "[MName String]-\u003e[(CanonFP,[MName String])]-\u003eEnv-\u003eEither ErrStr NameMap",
          "package": "hprotoc",
          "partial": "Name Maps",
          "signature": "[MName String]-\u003e[(CanonFP,[MName String])]-\u003eEnv-\u003eEither ErrStr NameMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:makeNameMaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "top'FDP",
          "package": "hprotoc",
          "signature": "Either ErrStr FileDescriptorProto",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#TopLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "top'FDP",
          "package": "hprotoc",
          "partial": "FDP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:top-39-FDP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "top'Package",
          "package": "hprotoc",
          "signature": "PackageID [IName String]",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#TopLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "top'Package",
          "normalized": "PackageID[IName String]",
          "package": "hprotoc",
          "partial": "Package",
          "signature": "PackageID[IName String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:top-39-Package"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "top'Path",
          "package": "hprotoc",
          "signature": "FilePath",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#TopLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "top'Path",
          "package": "hprotoc",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:top-39-Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "top'mVals",
          "package": "hprotoc",
          "signature": "EMap",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#TopLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "top'mVals",
          "package": "hprotoc",
          "partial": "Vals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:top-39-mVals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "unCanonFP",
          "package": "hprotoc",
          "signature": "FilePath",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#CanonFP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "unCanonFP",
          "package": "hprotoc",
          "partial": "Canon FP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:unCanonFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "unLocalFP",
          "package": "hprotoc",
          "signature": "FilePath",
          "source": "src/Text-ProtocolBuffers-ProtoCompile-Resolve.html#LocalFP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ProtocolBuffers ProtoCompile Resolve",
          "module": "Text.ProtocolBuffers.ProtoCompile.Resolve",
          "name": "unLocalFP",
          "package": "hprotoc",
          "partial": "Local FP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hprotoc/docs/Text-ProtocolBuffers-ProtoCompile-Resolve.html#v:unLocalFP"
      }
    }
  ]
]