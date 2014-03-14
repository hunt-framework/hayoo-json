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
        "word": "libffi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the basic libffi machinery. You will need this to create support for new ffi types. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.LibFFI.Base",
          "name": "Base",
          "package": "libffi",
          "source": "src/Foreign-LibFFI-Base.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the basic libffi machinery You will need this to create support for new ffi types",
          "hierarchy": "Foreign LibFFI Base",
          "module": "Foreign.LibFFI.Base",
          "name": "Base",
          "package": "libffi",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Base",
          "name": "Arg",
          "package": "libffi",
          "source": "src/Foreign-LibFFI-Base.html#Arg",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Base",
          "module": "Foreign.LibFFI.Base",
          "name": "Arg",
          "package": "libffi",
          "partial": "Arg",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Base.html#t:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Base",
          "name": "RetType",
          "package": "libffi",
          "source": "src/Foreign-LibFFI-Base.html#RetType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Base",
          "module": "Foreign.LibFFI.Base",
          "name": "RetType",
          "package": "libffi",
          "partial": "Ret Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Base.html#t:RetType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Base",
          "name": "Arg",
          "package": "libffi",
          "signature": "Arg",
          "source": "src/Foreign-LibFFI-Base.html#Arg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Base",
          "module": "Foreign.LibFFI.Base",
          "name": "Arg",
          "package": "libffi",
          "partial": "Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Base.html#v:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Base",
          "name": "RetType",
          "package": "libffi",
          "signature": "RetType (Ptr CType) ((Ptr CValue -\u003e IO ()) -\u003e IO a)",
          "source": "src/Foreign-LibFFI-Base.html#RetType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Base",
          "module": "Foreign.LibFFI.Base",
          "name": "RetType",
          "normalized": "RetType(Ptr CType)((Ptr CValue-\u003eIO())-\u003eIO a)",
          "package": "libffi",
          "partial": "Ret Type",
          "signature": "RetType(Ptr CType)((Ptr CValue-\u003eIO())-\u003eIO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Base.html#v:RetType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Foreign.LibFFI.Base\",\"Foreign.LibFFI\"]",
          "name": "callFFI",
          "package": "libffi",
          "signature": "FunPtr a -\u003e RetType b -\u003e [Arg] -\u003e IO b",
          "source": "src/Foreign-LibFFI-Base.html#callFFI",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Base.html#v:callFFI\",\"http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI.html#v:callFFI\"]"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Base",
          "module": "Foreign.LibFFI.Base",
          "name": "callFFI",
          "normalized": "FunPtr a-\u003eRetType b-\u003e[Arg]-\u003eIO b",
          "package": "libffi",
          "partial": "FFI",
          "signature": "FunPtr a-\u003eRetType b-\u003e[Arg]-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Base.html#v:callFFI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Base",
          "name": "customPointerArg",
          "package": "libffi",
          "signature": "(a -\u003e IO (Ptr b)) -\u003e (Ptr b -\u003e IO ()) -\u003e a -\u003e Arg",
          "source": "src/Foreign-LibFFI-Base.html#customPointerArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Base",
          "module": "Foreign.LibFFI.Base",
          "name": "customPointerArg",
          "normalized": "(a-\u003eIO(Ptr b))-\u003e(Ptr b-\u003eIO())-\u003ea-\u003eArg",
          "package": "libffi",
          "partial": "Pointer Arg",
          "signature": "(a-\u003eIO(Ptr b))-\u003e(Ptr b-\u003eIO())-\u003ea-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Base.html#v:customPointerArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Base",
          "name": "mkStorableArg",
          "package": "libffi",
          "signature": "Ptr CType -\u003e a -\u003e Arg",
          "source": "src/Foreign-LibFFI-Base.html#mkStorableArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Base",
          "module": "Foreign.LibFFI.Base",
          "name": "mkStorableArg",
          "normalized": "Ptr CType-\u003ea-\u003eArg",
          "package": "libffi",
          "partial": "Storable Arg",
          "signature": "Ptr CType-\u003ea-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Base.html#v:mkStorableArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Base",
          "name": "mkStorableRetType",
          "package": "libffi",
          "signature": "Ptr CType -\u003e RetType a",
          "source": "src/Foreign-LibFFI-Base.html#mkStorableRetType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Base",
          "module": "Foreign.LibFFI.Base",
          "name": "mkStorableRetType",
          "normalized": "Ptr CType-\u003eRetType a",
          "package": "libffi",
          "partial": "Storable Ret Type",
          "signature": "Ptr CType-\u003eRetType a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Base.html#v:mkStorableRetType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Base",
          "name": "newStorableStructArgRet",
          "package": "libffi",
          "signature": "[Ptr CType] -\u003e IO (a -\u003e Arg, RetType a, IO ())",
          "source": "src/Foreign-LibFFI-Base.html#newStorableStructArgRet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Base",
          "module": "Foreign.LibFFI.Base",
          "name": "newStorableStructArgRet",
          "normalized": "[Ptr CType]-\u003eIO(a-\u003eArg,RetType a,IO())",
          "package": "libffi",
          "partial": "Storable Struct Arg Ret",
          "signature": "[Ptr CType]-\u003eIO(a-\u003eArg,RetType a,IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Base.html#v:newStorableStructArgRet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Base",
          "name": "newStructCType",
          "package": "libffi",
          "signature": "[Ptr CType] -\u003e IO (Ptr CType, IO ())",
          "source": "src/Foreign-LibFFI-Base.html#newStructCType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Base",
          "module": "Foreign.LibFFI.Base",
          "name": "newStructCType",
          "normalized": "[Ptr CType]-\u003eIO(Ptr CType,IO())",
          "package": "libffi",
          "partial": "Struct CType",
          "signature": "[Ptr CType]-\u003eIO(Ptr CType,IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Base.html#v:newStructCType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Base",
          "name": "unArg",
          "package": "libffi",
          "signature": "IO (Ptr CType, Ptr CValue, IO ())",
          "source": "src/Foreign-LibFFI-Base.html#Arg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Base",
          "module": "Foreign.LibFFI.Base",
          "name": "unArg",
          "normalized": "IO(Ptr CType,Ptr CValue,IO())",
          "package": "libffi",
          "partial": "Arg",
          "signature": "IO(Ptr CType,Ptr CValue,IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Base.html#v:unArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Foreign.LibFFI.Base\",\"Foreign.LibFFI\"]",
          "name": "withRetType",
          "package": "libffi",
          "signature": "(a -\u003e IO b) -\u003e RetType a -\u003e RetType b",
          "source": "src/Foreign-LibFFI-Base.html#withRetType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Base.html#v:withRetType\",\"http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI.html#v:withRetType\"]"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Base",
          "module": "Foreign.LibFFI.Base",
          "name": "withRetType",
          "normalized": "(a-\u003eIO b)-\u003eRetType a-\u003eRetType b",
          "package": "libffi",
          "partial": "Ret Type",
          "signature": "(a-\u003eIO b)-\u003eRetType a-\u003eRetType b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Base.html#v:withRetType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe pointers exported and used by the C libffi describing basic ffi types. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "FFITypes",
          "package": "libffi",
          "source": "src/Foreign-LibFFI-FFITypes.html",
          "type": "module"
        },
        "index": {
          "description": "The pointers exported and used by the libffi describing basic ffi types",
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "FFITypes",
          "package": "libffi",
          "partial": "FFITypes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_double",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_double",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_float",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_float",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_float",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_hs_int",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_hs_int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_hs_int",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_hs_int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_hs_word",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_hs_word",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_hs_word",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_hs_word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_pointer",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_pointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_pointer",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_pointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_schar",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_schar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_schar",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_schar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_sint",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_sint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_sint",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_sint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_sint16",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_sint16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_sint16",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_sint16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_sint32",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_sint32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_sint32",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_sint32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_sint64",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_sint64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_sint64",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_sint64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_sint8",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_sint8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_sint8",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_sint8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_size",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_size",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_slong",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_slong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_slong",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_slong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_time",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_time",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_uchar",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_uchar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_uchar",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_uchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_uint",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_uint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_uint",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_uint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_uint16",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_uint16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_uint16",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_uint16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_uint32",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_uint32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_uint32",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_uint32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_uint64",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_uint64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_uint64",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_uint64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_uint8",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_uint8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_uint8",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_uint8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_ulong",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_ulong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_ulong",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_ulong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_void",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_void",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_void",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_wchar",
          "package": "libffi",
          "signature": "Ptr CType",
          "source": "src/Foreign-LibFFI-FFITypes.html#ffi_type_wchar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI FFITypes",
          "module": "Foreign.LibFFI.FFITypes",
          "name": "ffi_type_wchar",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-FFITypes.html#v:ffi_type_wchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe internals of the C library libffi \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.LibFFI.Internal",
          "name": "Internal",
          "package": "libffi",
          "source": "src/Foreign-LibFFI-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "The internals of the library libffi",
          "hierarchy": "Foreign LibFFI Internal",
          "module": "Foreign.LibFFI.Internal",
          "name": "Internal",
          "package": "libffi",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Internal",
          "name": "CIF",
          "package": "libffi",
          "source": "src/Foreign-LibFFI-Internal.html#CIF",
          "type": "data"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Internal",
          "module": "Foreign.LibFFI.Internal",
          "name": "CIF",
          "package": "libffi",
          "partial": "CIF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Internal.html#t:CIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Internal",
          "name": "CType",
          "package": "libffi",
          "source": "src/Foreign-LibFFI-Internal.html#CType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Internal",
          "module": "Foreign.LibFFI.Internal",
          "name": "CType",
          "package": "libffi",
          "partial": "CType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Internal.html#t:CType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Internal",
          "name": "CValue",
          "package": "libffi",
          "source": "src/Foreign-LibFFI-Internal.html#CValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Internal",
          "module": "Foreign.LibFFI.Internal",
          "name": "CValue",
          "package": "libffi",
          "partial": "CValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Internal.html#t:CValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Internal",
          "name": "C_ffi_abi",
          "package": "libffi",
          "source": "src/Foreign-LibFFI-Internal.html#C_ffi_abi",
          "type": "type"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Internal",
          "module": "Foreign.LibFFI.Internal",
          "name": "C_ffi_abi",
          "package": "libffi",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Internal.html#t:C_ffi_abi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Internal",
          "name": "C_ffi_status",
          "package": "libffi",
          "source": "src/Foreign-LibFFI-Internal.html#C_ffi_status",
          "type": "type"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Internal",
          "module": "Foreign.LibFFI.Internal",
          "name": "C_ffi_status",
          "package": "libffi",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Internal.html#t:C_ffi_status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Internal",
          "name": "ffi_call",
          "package": "libffi",
          "signature": "Ptr CIF -\u003e FunPtr a -\u003e Ptr CValue -\u003e Ptr (Ptr CValue) -\u003e IO ()",
          "source": "src/Foreign-LibFFI-Internal.html#ffi_call",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Internal",
          "module": "Foreign.LibFFI.Internal",
          "name": "ffi_call",
          "normalized": "Ptr CIF-\u003eFunPtr a-\u003ePtr CValue-\u003ePtr(Ptr CValue)-\u003eIO()",
          "package": "libffi",
          "signature": "Ptr CIF-\u003eFunPtr a-\u003ePtr CValue-\u003ePtr(Ptr CValue)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Internal.html#v:ffi_call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Internal",
          "name": "ffi_default_abi",
          "package": "libffi",
          "signature": "C_ffi_abi",
          "source": "src/Foreign-LibFFI-Internal.html#ffi_default_abi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Internal",
          "module": "Foreign.LibFFI.Internal",
          "name": "ffi_default_abi",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Internal.html#v:ffi_default_abi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Internal",
          "name": "ffi_ok",
          "package": "libffi",
          "signature": "C_ffi_status",
          "source": "src/Foreign-LibFFI-Internal.html#ffi_ok",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Internal",
          "module": "Foreign.LibFFI.Internal",
          "name": "ffi_ok",
          "package": "libffi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Internal.html#v:ffi_ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Internal",
          "name": "ffi_prep_cif",
          "package": "libffi",
          "signature": "Ptr CIF -\u003e C_ffi_abi -\u003e CUInt -\u003e Ptr CType -\u003e Ptr (Ptr CType) -\u003e IO C_ffi_status",
          "source": "src/Foreign-LibFFI-Internal.html#ffi_prep_cif",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Internal",
          "module": "Foreign.LibFFI.Internal",
          "name": "ffi_prep_cif",
          "normalized": "Ptr CIF-\u003eC_ffi_abi-\u003eCUInt-\u003ePtr CType-\u003ePtr(Ptr CType)-\u003eIO C_ffi_status",
          "package": "libffi",
          "signature": "Ptr CIF-\u003eC_ffi_abi-\u003eCUInt-\u003ePtr CType-\u003ePtr(Ptr CType)-\u003eIO C_ffi_status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Internal.html#v:ffi_prep_cif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Internal",
          "name": "init_ffi_type",
          "package": "libffi",
          "signature": "Ptr CType -\u003e Ptr (Ptr CType) -\u003e IO ()",
          "source": "src/Foreign-LibFFI-Internal.html#init_ffi_type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Internal",
          "module": "Foreign.LibFFI.Internal",
          "name": "init_ffi_type",
          "normalized": "Ptr CType-\u003ePtr(Ptr CType)-\u003eIO()",
          "package": "libffi",
          "signature": "Ptr CType-\u003ePtr(Ptr CType)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Internal.html#v:init_ffi_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Internal",
          "name": "sizeOf_cif",
          "package": "libffi",
          "signature": "Int",
          "source": "src/Foreign-LibFFI-Internal.html#sizeOf_cif",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Internal",
          "module": "Foreign.LibFFI.Internal",
          "name": "sizeOf_cif",
          "package": "libffi",
          "partial": "Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Internal.html#v:sizeOf_cif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Internal",
          "name": "sizeOf_ffi_type",
          "package": "libffi",
          "signature": "Int",
          "source": "src/Foreign-LibFFI-Internal.html#sizeOf_ffi_type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Internal",
          "module": "Foreign.LibFFI.Internal",
          "name": "sizeOf_ffi_type",
          "package": "libffi",
          "partial": "Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Internal.html#v:sizeOf_ffi_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArguments and return types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.LibFFI.Types",
          "name": "Types",
          "package": "libffi",
          "source": "src/Foreign-LibFFI-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Arguments and return types",
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "Types",
          "package": "libffi",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike argString, but for ByteString's.\n\u003c/p\u003e",
          "module": "Foreign.LibFFI.Types",
          "name": "argByteString",
          "package": "libffi",
          "signature": "ByteString -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argByteString",
          "type": "function"
        },
        "index": {
          "description": "Like argString but for ByteString",
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argByteString",
          "normalized": "ByteString-\u003eArg",
          "package": "libffi",
          "partial": "Byte String",
          "signature": "ByteString-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argCChar",
          "package": "libffi",
          "signature": "CChar -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argCChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argCChar",
          "normalized": "CChar-\u003eArg",
          "package": "libffi",
          "partial": "CChar",
          "signature": "CChar-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argCChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argCDouble",
          "package": "libffi",
          "signature": "CDouble -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argCDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argCDouble",
          "normalized": "CDouble-\u003eArg",
          "package": "libffi",
          "partial": "CDouble",
          "signature": "CDouble-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argCDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argCFloat",
          "package": "libffi",
          "signature": "CFloat -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argCFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argCFloat",
          "normalized": "CFloat-\u003eArg",
          "package": "libffi",
          "partial": "CFloat",
          "signature": "CFloat-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argCFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argCInt",
          "package": "libffi",
          "signature": "CInt -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argCInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argCInt",
          "normalized": "CInt-\u003eArg",
          "package": "libffi",
          "partial": "CInt",
          "signature": "CInt-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argCInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argCLong",
          "package": "libffi",
          "signature": "CLong -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argCLong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argCLong",
          "normalized": "CLong-\u003eArg",
          "package": "libffi",
          "partial": "CLong",
          "signature": "CLong-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argCLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argCSize",
          "package": "libffi",
          "signature": "CSize -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argCSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argCSize",
          "normalized": "CSize-\u003eArg",
          "package": "libffi",
          "partial": "CSize",
          "signature": "CSize-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argCSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argCTime",
          "package": "libffi",
          "signature": "CTime -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argCTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argCTime",
          "normalized": "CTime-\u003eArg",
          "package": "libffi",
          "partial": "CTime",
          "signature": "CTime-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argCUChar",
          "package": "libffi",
          "signature": "CUChar -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argCUChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argCUChar",
          "normalized": "CUChar-\u003eArg",
          "package": "libffi",
          "partial": "CUChar",
          "signature": "CUChar-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argCUChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argCUInt",
          "package": "libffi",
          "signature": "CUInt -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argCUInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argCUInt",
          "normalized": "CUInt-\u003eArg",
          "package": "libffi",
          "partial": "CUInt",
          "signature": "CUInt-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argCUInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argCULong",
          "package": "libffi",
          "signature": "CULong -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argCULong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argCULong",
          "normalized": "CULong-\u003eArg",
          "package": "libffi",
          "partial": "CULong",
          "signature": "CULong-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argCULong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argCWchar",
          "package": "libffi",
          "signature": "CWchar -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argCWchar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argCWchar",
          "normalized": "CWchar-\u003eArg",
          "package": "libffi",
          "partial": "CWchar",
          "signature": "CWchar-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argCWchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike argByteString, but changing the string from C breaks referential transparency.\n\u003c/p\u003e",
          "module": "Foreign.LibFFI.Types",
          "name": "argConstByteString",
          "package": "libffi",
          "signature": "ByteString -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argConstByteString",
          "type": "function"
        },
        "index": {
          "description": "Like argByteString but changing the string from breaks referential transparency",
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argConstByteString",
          "normalized": "ByteString-\u003eArg",
          "package": "libffi",
          "partial": "Const Byte String",
          "signature": "ByteString-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argConstByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argFunPtr",
          "package": "libffi",
          "signature": "FunPtr a -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argFunPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argFunPtr",
          "normalized": "FunPtr a-\u003eArg",
          "package": "libffi",
          "partial": "Fun Ptr",
          "signature": "FunPtr a-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argFunPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote that on e.g. x86_64, Int /= CInt\n\u003c/p\u003e",
          "module": "Foreign.LibFFI.Types",
          "name": "argInt",
          "package": "libffi",
          "signature": "Int -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argInt",
          "type": "function"
        },
        "index": {
          "description": "Note that on e.g x86 Int CInt",
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argInt",
          "normalized": "Int-\u003eArg",
          "package": "libffi",
          "partial": "Int",
          "signature": "Int-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argInt16",
          "package": "libffi",
          "signature": "Int16 -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argInt16",
          "normalized": "Int-\u003eArg",
          "package": "libffi",
          "partial": "Int",
          "signature": "Int-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argInt32",
          "package": "libffi",
          "signature": "Int32 -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argInt32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argInt32",
          "normalized": "Int-\u003eArg",
          "package": "libffi",
          "partial": "Int",
          "signature": "Int-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argInt64",
          "package": "libffi",
          "signature": "Int64 -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argInt64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argInt64",
          "normalized": "Int-\u003eArg",
          "package": "libffi",
          "partial": "Int",
          "signature": "Int-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argInt8",
          "package": "libffi",
          "signature": "Int8 -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argInt8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argInt8",
          "normalized": "Int-\u003eArg",
          "package": "libffi",
          "partial": "Int",
          "signature": "Int-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argPtr",
          "package": "libffi",
          "signature": "Ptr a -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argPtr",
          "normalized": "Ptr a-\u003eArg",
          "package": "libffi",
          "partial": "Ptr",
          "signature": "Ptr a-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe string argument is passed to C as a char * pointer, which is freed afterwards.\n     The argument should not contain zero-bytes. \n\u003c/p\u003e",
          "module": "Foreign.LibFFI.Types",
          "name": "argString",
          "package": "libffi",
          "signature": "String -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argString",
          "type": "function"
        },
        "index": {
          "description": "The string argument is passed to as char pointer which is freed afterwards The argument should not contain zero-bytes",
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argString",
          "normalized": "String-\u003eArg",
          "package": "libffi",
          "partial": "String",
          "signature": "String-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argWord",
          "package": "libffi",
          "signature": "Word -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argWord",
          "normalized": "Word-\u003eArg",
          "package": "libffi",
          "partial": "Word",
          "signature": "Word-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argWord16",
          "package": "libffi",
          "signature": "Word16 -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argWord16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argWord16",
          "normalized": "Word-\u003eArg",
          "package": "libffi",
          "partial": "Word",
          "signature": "Word-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argWord32",
          "package": "libffi",
          "signature": "Word32 -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argWord32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argWord32",
          "normalized": "Word-\u003eArg",
          "package": "libffi",
          "partial": "Word",
          "signature": "Word-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argWord64",
          "package": "libffi",
          "signature": "Word64 -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argWord64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argWord64",
          "normalized": "Word-\u003eArg",
          "package": "libffi",
          "partial": "Word",
          "signature": "Word-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "argWord8",
          "package": "libffi",
          "signature": "Word8 -\u003e Arg",
          "source": "src/Foreign-LibFFI-Types.html#argWord8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "argWord8",
          "normalized": "Word-\u003eArg",
          "package": "libffi",
          "partial": "Word",
          "signature": "Word-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:argWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike retString, but for ByteString's \n\u003c/p\u003e",
          "module": "Foreign.LibFFI.Types",
          "name": "retByteString",
          "package": "libffi",
          "signature": "RetType ByteString",
          "source": "src/Foreign-LibFFI-Types.html#retByteString",
          "type": "function"
        },
        "index": {
          "description": "Like retString but for ByteString",
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retByteString",
          "package": "libffi",
          "partial": "Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retCChar",
          "package": "libffi",
          "signature": "RetType CChar",
          "source": "src/Foreign-LibFFI-Types.html#retCChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retCChar",
          "package": "libffi",
          "partial": "CChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retCChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retCDouble",
          "package": "libffi",
          "signature": "RetType CDouble",
          "source": "src/Foreign-LibFFI-Types.html#retCDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retCDouble",
          "package": "libffi",
          "partial": "CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retCDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retCFloat",
          "package": "libffi",
          "signature": "RetType CFloat",
          "source": "src/Foreign-LibFFI-Types.html#retCFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retCFloat",
          "package": "libffi",
          "partial": "CFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retCFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retCInt",
          "package": "libffi",
          "signature": "RetType CInt",
          "source": "src/Foreign-LibFFI-Types.html#retCInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retCInt",
          "package": "libffi",
          "partial": "CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retCInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retCLong",
          "package": "libffi",
          "signature": "RetType CLong",
          "source": "src/Foreign-LibFFI-Types.html#retCLong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retCLong",
          "package": "libffi",
          "partial": "CLong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retCLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retCSize",
          "package": "libffi",
          "signature": "RetType CSize",
          "source": "src/Foreign-LibFFI-Types.html#retCSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retCSize",
          "package": "libffi",
          "partial": "CSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retCSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retCString",
          "package": "libffi",
          "signature": "RetType CString",
          "source": "src/Foreign-LibFFI-Types.html#retCString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retCString",
          "package": "libffi",
          "partial": "CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retCTime",
          "package": "libffi",
          "signature": "RetType CTime",
          "source": "src/Foreign-LibFFI-Types.html#retCTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retCTime",
          "package": "libffi",
          "partial": "CTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retCUChar",
          "package": "libffi",
          "signature": "RetType CUChar",
          "source": "src/Foreign-LibFFI-Types.html#retCUChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retCUChar",
          "package": "libffi",
          "partial": "CUChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retCUChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retCUInt",
          "package": "libffi",
          "signature": "RetType CUInt",
          "source": "src/Foreign-LibFFI-Types.html#retCUInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retCUInt",
          "package": "libffi",
          "partial": "CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retCUInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retCULong",
          "package": "libffi",
          "signature": "RetType CULong",
          "source": "src/Foreign-LibFFI-Types.html#retCULong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retCULong",
          "package": "libffi",
          "partial": "CULong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retCULong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retCWchar",
          "package": "libffi",
          "signature": "RetType CWchar",
          "source": "src/Foreign-LibFFI-Types.html#retCWchar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retCWchar",
          "package": "libffi",
          "partial": "CWchar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retCWchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retFunPtr",
          "package": "libffi",
          "signature": "RetType a -\u003e RetType (FunPtr a)",
          "source": "src/Foreign-LibFFI-Types.html#retFunPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retFunPtr",
          "normalized": "RetType a-\u003eRetType(FunPtr a)",
          "package": "libffi",
          "partial": "Fun Ptr",
          "signature": "RetType a-\u003eRetType(FunPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retFunPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retInt",
          "package": "libffi",
          "signature": "RetType Int",
          "source": "src/Foreign-LibFFI-Types.html#retInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retInt",
          "package": "libffi",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retInt16",
          "package": "libffi",
          "signature": "RetType Int16",
          "source": "src/Foreign-LibFFI-Types.html#retInt16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retInt16",
          "package": "libffi",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retInt32",
          "package": "libffi",
          "signature": "RetType Int32",
          "source": "src/Foreign-LibFFI-Types.html#retInt32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retInt32",
          "package": "libffi",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retInt64",
          "package": "libffi",
          "signature": "RetType Int64",
          "source": "src/Foreign-LibFFI-Types.html#retInt64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retInt64",
          "package": "libffi",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retInt8",
          "package": "libffi",
          "signature": "RetType Int8",
          "source": "src/Foreign-LibFFI-Types.html#retInt8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retInt8",
          "package": "libffi",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retInt8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a ByteString out of the returned char *.\n     The char * will be free(3)ed when the ByteString is garbage collected. \n\u003c/p\u003e",
          "module": "Foreign.LibFFI.Types",
          "name": "retMallocByteString",
          "package": "libffi",
          "signature": "RetType ByteString",
          "source": "src/Foreign-LibFFI-Types.html#retMallocByteString",
          "type": "function"
        },
        "index": {
          "description": "Make ByteString out of the returned char The char will be free ed when the ByteString is garbage collected",
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retMallocByteString",
          "package": "libffi",
          "partial": "Malloc Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retMallocByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retPtr",
          "package": "libffi",
          "signature": "RetType a -\u003e RetType (Ptr a)",
          "source": "src/Foreign-LibFFI-Types.html#retPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retPtr",
          "normalized": "RetType a-\u003eRetType(Ptr a)",
          "package": "libffi",
          "partial": "Ptr",
          "signature": "RetType a-\u003eRetType(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePeek a String out of the returned char *. The char * is not freed. \n\u003c/p\u003e",
          "module": "Foreign.LibFFI.Types",
          "name": "retString",
          "package": "libffi",
          "signature": "RetType String",
          "source": "src/Foreign-LibFFI-Types.html#retString",
          "type": "function"
        },
        "index": {
          "description": "Peek String out of the returned char The char is not freed",
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retString",
          "package": "libffi",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retVoid",
          "package": "libffi",
          "signature": "RetType ()",
          "source": "src/Foreign-LibFFI-Types.html#retVoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retVoid",
          "normalized": "RetType()",
          "package": "libffi",
          "partial": "Void",
          "signature": "RetType()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retVoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retWord",
          "package": "libffi",
          "signature": "RetType Word",
          "source": "src/Foreign-LibFFI-Types.html#retWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retWord",
          "package": "libffi",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retWord16",
          "package": "libffi",
          "signature": "RetType Word16",
          "source": "src/Foreign-LibFFI-Types.html#retWord16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retWord16",
          "package": "libffi",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retWord32",
          "package": "libffi",
          "signature": "RetType Word32",
          "source": "src/Foreign-LibFFI-Types.html#retWord32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retWord32",
          "package": "libffi",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retWord64",
          "package": "libffi",
          "signature": "RetType Word64",
          "source": "src/Foreign-LibFFI-Types.html#retWord64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retWord64",
          "package": "libffi",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI.Types",
          "name": "retWord8",
          "package": "libffi",
          "signature": "RetType Word8",
          "source": "src/Foreign-LibFFI-Types.html#retWord8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign LibFFI Types",
          "module": "Foreign.LibFFI.Types",
          "name": "retWord8",
          "package": "libffi",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI-Types.html#v:retWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the only module that normal users should need to import.\n\u003c/p\u003e\u003cp\u003eAs an example, allocate 1GB of memory, zero it, and crash:\n\u003c/p\u003e\u003cpre\u003e\nimport System.Posix.DynamicLinker\nimport Foreign.Ptr\nimport Foreign.LibFFI\n\nmain = do\n    malloc \u003c- dlsym Default \"malloc\"\n    memset \u003c- dlsym Default \"memset\"\n    p \u003c- callFFI malloc (retPtr retVoid) [argCSize (2^30)]\n    callFFI memset (retPtr retVoid) [argPtr p, argCInt 0, argCSize (2^30)]\n    callFFI memset (retPtr retVoid) [argPtr nullPtr, argCInt 0, argCSize 1]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Foreign.LibFFI",
          "name": "LibFFI",
          "package": "libffi",
          "source": "src/Foreign-LibFFI.html",
          "type": "module"
        },
        "index": {
          "description": "This is the only module that normal users should need to import As an example allocate GB of memory zero it and crash import System.Posix.DynamicLinker import Foreign.Ptr import Foreign.LibFFI main do malloc dlsym Default malloc memset dlsym Default memset callFFI malloc retPtr retVoid argCSize callFFI memset retPtr retVoid argPtr argCInt argCSize callFFI memset retPtr retVoid argPtr nullPtr argCInt argCSize",
          "hierarchy": "Foreign LibFFI",
          "module": "Foreign.LibFFI",
          "name": "LibFFI",
          "package": "libffi",
          "partial": "Lib FFI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI",
          "name": "Arg",
          "package": "libffi",
          "source": "src/Foreign-LibFFI-Base.html#Arg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Foreign LibFFI",
          "module": "Foreign.LibFFI",
          "name": "Arg",
          "package": "libffi",
          "partial": "Arg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI.html#t:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.LibFFI",
          "name": "RetType",
          "package": "libffi",
          "source": "src/Foreign-LibFFI-Base.html#RetType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Foreign LibFFI",
          "module": "Foreign.LibFFI",
          "name": "RetType",
          "package": "libffi",
          "partial": "Ret Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/libffi/docs/Foreign-LibFFI.html#t:RetType"
      }
    }
  ]
]