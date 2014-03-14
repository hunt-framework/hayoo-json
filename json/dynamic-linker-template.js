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
        "word": "dynamic-linker-template"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Template",
          "name": "Template",
          "package": "dynamic-linker-template",
          "source": "src/System-Posix-DynamicLinker-Template.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Template",
          "module": "System.Posix.DynamicLinker.Template",
          "name": "Template",
          "package": "dynamic-linker-template",
          "partial": "Template",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-linker-template/docs/System-Posix-DynamicLinker-Template.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Template",
          "name": "Callconv",
          "package": "dynamic-linker-template",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Template",
          "module": "System.Posix.DynamicLinker.Template",
          "name": "Callconv",
          "package": "dynamic-linker-template",
          "partial": "Callconv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-linker-template/docs/System-Posix-DynamicLinker-Template.html#t:Callconv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags for \u003ccode\u003e\u003ca\u003edlsym\u003c/a\u003e\u003c/code\u003e. Notice that \u003ccode\u003e\u003ca\u003eNext\u003c/a\u003e\u003c/code\u003e\n might not be available on your particular platform!\n\u003c/p\u003e",
          "module": "System.Posix.DynamicLinker.Template",
          "name": "DL",
          "package": "dynamic-linker-template",
          "type": "data"
        },
        "index": {
          "description": "Flags for dlsym Notice that Next might not be available on your particular platform",
          "hierarchy": "System Posix DynamicLinker Template",
          "module": "System.Posix.DynamicLinker.Template",
          "name": "DL",
          "package": "dynamic-linker-template",
          "partial": "DL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-linker-template/docs/System-Posix-DynamicLinker-Template.html#t:DL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is a pointer to a function callable\n from foreign code.  The type \u003ccode\u003ea\u003c/code\u003e will normally be a \u003cem\u003eforeign type\u003c/em\u003e,\n a function type with zero or more arguments where\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the argument types are \u003cem\u003emarshallable foreign types\u003c/em\u003e,\n   i.e. \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e,\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStablePtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e or a renaming of any of these\n   using \u003ccode\u003enewtype\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e the return type is either a marshallable foreign type or has the form\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e t\u003c/code\u003e where \u003ccode\u003et\u003c/code\u003e is a marshallable foreign type or \u003ccode\u003e()\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e may be a pointer to a foreign function,\n either returned by another foreign function or imported with a\n a static address import like\n\u003c/p\u003e\u003cpre\u003e foreign import ccall \"stdlib.h &free\"\n   p_free :: FunPtr (Ptr a -\u003e IO ())\n\u003c/pre\u003e\u003cp\u003eor a pointer to a Haskell function created using a \u003cem\u003ewrapper\u003c/em\u003e stub\n declared to produce a \u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e of the correct type.  For example:\n\u003c/p\u003e\u003cpre\u003e type Compare = Int -\u003e Int -\u003e Bool\n foreign import ccall \"wrapper\"\n   mkCompare :: Compare -\u003e IO (FunPtr Compare)\n\u003c/pre\u003e\u003cp\u003eCalls to wrapper stubs like \u003ccode\u003emkCompare\u003c/code\u003e allocate storage, which\n should be released with \u003ccode\u003e\u003ca\u003efreeHaskellFunPtr\u003c/a\u003e\u003c/code\u003e when no\n longer required.\n\u003c/p\u003e\u003cp\u003eTo convert \u003ccode\u003e\u003ca\u003eFunPtr\u003c/a\u003e\u003c/code\u003e values to corresponding Haskell functions, one\n can define a \u003cem\u003edynamic\u003c/em\u003e stub for the specific foreign type, e.g.\n\u003c/p\u003e\u003cpre\u003e type IntFunction = CInt -\u003e IO ()\n foreign import ccall \"dynamic\" \n   mkFun :: FunPtr IntFunction -\u003e IntFunction\n\u003c/pre\u003e",
          "module": "System.Posix.DynamicLinker.Template",
          "name": "FunPtr",
          "package": "dynamic-linker-template",
          "type": "data"
        },
        "index": {
          "description": "value of type FunPtr is pointer to function callable from foreign code The type will normally be foreign type function type with zero or more arguments where the argument types are marshallable foreign types i.e Char Int Double Float Bool Int8 Int16 Int32 Int64 Word8 Word16 Word32 Word64 Ptr FunPtr StablePtr or renaming of any of these using newtype the return type is either marshallable foreign type or has the form IO where is marshallable foreign type or value of type FunPtr may be pointer to foreign function either returned by another foreign function or imported with static address import like foreign import ccall stdlib.h free free FunPtr Ptr IO or pointer to Haskell function created using wrapper stub declared to produce FunPtr of the correct type For example type Compare Int Int Bool foreign import ccall wrapper mkCompare Compare IO FunPtr Compare Calls to wrapper stubs like mkCompare allocate storage which should be released with freeHaskellFunPtr when no longer required To convert FunPtr values to corresponding Haskell functions one can define dynamic stub for the specific foreign type e.g type IntFunction CInt IO foreign import ccall dynamic mkFun FunPtr IntFunction IntFunction",
          "hierarchy": "System Posix DynamicLinker Template",
          "module": "System.Posix.DynamicLinker.Template",
          "name": "FunPtr",
          "package": "dynamic-linker-template",
          "partial": "Fun Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-linker-template/docs/System-Posix-DynamicLinker-Template.html#t:FunPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Template",
          "name": "CCall",
          "package": "dynamic-linker-template",
          "signature": "CCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Template",
          "module": "System.Posix.DynamicLinker.Template",
          "name": "CCall",
          "package": "dynamic-linker-template",
          "partial": "CCall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-linker-template/docs/System-Posix-DynamicLinker-Template.html#v:CCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Posix.DynamicLinker.Template",
          "name": "StdCall",
          "package": "dynamic-linker-template",
          "signature": "StdCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Posix DynamicLinker Template",
          "module": "System.Posix.DynamicLinker.Template",
          "name": "StdCall",
          "package": "dynamic-linker-template",
          "partial": "Std Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-linker-template/docs/System-Posix-DynamicLinker-Template.html#v:StdCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity function.\n\u003c/p\u003e",
          "module": "System.Posix.DynamicLinker.Template",
          "name": "id",
          "package": "dynamic-linker-template",
          "signature": "a -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Identity function",
          "hierarchy": "System Posix DynamicLinker Template",
          "module": "System.Posix.DynamicLinker.Template",
          "name": "id",
          "normalized": "a-\u003ea",
          "package": "dynamic-linker-template",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-linker-template/docs/System-Posix-DynamicLinker-Template.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate dynamic linking FFI methods for each field in the first parameter\n\u003c/p\u003e",
          "module": "System.Posix.DynamicLinker.Template",
          "name": "makeDynamicLinker",
          "package": "dynamic-linker-template",
          "signature": "Name-\u003e Callconv-\u003e Name-\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "Generate dynamic linking FFI methods for each field in the first parameter",
          "hierarchy": "System Posix DynamicLinker Template",
          "module": "System.Posix.DynamicLinker.Template",
          "name": "makeDynamicLinker",
          "normalized": "Name-\u003eCallconv-\u003eName-\u003eQ[Dec]",
          "package": "dynamic-linker-template",
          "partial": "Dynamic Linker",
          "signature": "Name-\u003eCallconv-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dynamic-linker-template/docs/System-Posix-DynamicLinker-Template.html#v:makeDynamicLinker"
      }
    }
  ]
]